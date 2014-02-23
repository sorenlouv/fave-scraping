/*jslint node: true */

'use strict';

var casper = require('casper').create({
  verbose: false,
  logLevel: 'debug'
});

// Load modules
var OAuthSimple = require('./libs/OAuthSimple.js').OAuthSimple;

var offset = 0;

casper.start();

/*
 *
 *
 ******************************************/
function getCategoriesByScrape(){

  function stripHtml(element){
    if(element === null) return '';
    return element.textContent.trim();
  }

  function byReviewCount(a, b) {
    if (a.review_count > b.review_count) return -1;
    if (a.review_count < b.review_count) return 1;
    return 0;
  }

  // categories
  var categories = [];
  var categoryElements = document.querySelectorAll('.menu-section');
  for(var i= 0; i<categoryElements.length; i++){

    // meals
    var meals = [];
    var itemElements = categoryElements[i].querySelectorAll('.menu-item');
    for(var j=0; j<itemElements.length; j++){

      // meal prices (label + amount)
      // An meal can have multiple prices. Often, these prices have labels (eg. Small, medium, large), but not always
      var prices = [];
      var pricesElement = itemElements[j].querySelector('.menu-item-prices');
      var hasLabels = pricesElement.querySelector('table') !== null;

      // The meal's prices have labels
      if(hasLabels){
        var tableRows = pricesElement.querySelectorAll('tr');
        for(var row=0; row<tableRows.length; row++){
          prices.push({
            label: stripHtml(tableRows[row].querySelector('.menu-item-price-label')),
            amount: stripHtml(tableRows[row].querySelector('.menu-item-price-amount'))
          });
        }

      // No labels, only price
      }else{
        var listItems = pricesElement.querySelectorAll('li');
        for(var listItem=0; listItem<listItems.length; listItem++){
          prices.push({
            label: '',
            amount: stripHtml(listItems[listItem])
          });
        }
      }

      // Item reviews
      var review_count = stripHtml(itemElements[j].querySelector('.menu-item-details .num-reviews'));
      review_count = Number(review_count.replace(/[^\d.]/g, '')); // strip everything but digits

      if(review_count > 5){
        meals.push({
          name: stripHtml(itemElements[j].querySelector('.menu-item-details h3')),
          description: stripHtml(itemElements[j].querySelector('.menu-item-details .menu-item-details-description')),
          prices: prices,
          review_count: review_count,
          image: itemElements[j].querySelector('.media-avatar img').src.replace('60s.jpg', 'l.jpg')
        });
      }
    } // end of meals

    if(meals.length > 0){
      // Sort meals by number of reviews
      meals = meals.sort(byReviewCount);

      // Fetch the top 20% (always at least two)
      var itemsToFetch = Math.ceil(meals.length * 0.20) + 1;
      meals = meals.splice(0, itemsToFetch);

      categories.push({
        name: stripHtml(categoryElements[i].previousElementSibling.querySelector('h2')),
        description: stripHtml(categoryElements[i].previousElementSibling.querySelector('p')),
        meals: meals
      });
    }
  }
  return categories;
}

/*
 *
 *
 ******************************************/
function getRestaurantsFromApi(offset, successCallback){
  // http://www.latlong.net/Show-Latitude-Longitude.html
  var missionDistrict = {latitude: '37.760876', longitude: '-122.415462'};
  var northOfMarket = {latitude: '37.791778', longitude: '-122.407487'};
  var oakland = {latitude: '37.805580', longitude: '-122.244058'};
  var coordinates = oakland;

  var category_filter = 'restaurants';
  var radius_filter = 50000;
  var limit = 20;

  var parameters = 'll=' + coordinates.latitude + ',' + coordinates.longitude + '&category_filter=' + category_filter + '&radius_filter=' + radius_filter + '&limit=' + limit + '&offset=' + offset;

  var oauth;
  casper.then(function renderRequest(){
    oauth = (new OAuthSimple()).sign({
      path: 'http://api.yelp.com/v2/search',
      parameters: parameters,
      signatures: {
        'consumer_key': '4cQiYRVM9Hc1q-6LK3qrjA',
        'shared_secret': 'AxLjtvES27_A4UEJbAUXxjGU_zI',
        'access_token': 'shh3QBfdXiKlWhTKRKHEXrbkRrgpF7uL',
        'access_secret': 'giBB_3ME9IRCcR2gBJ5FROaOu3k'
      }
    });
  });

  casper.then(function renderResponse(){
    casper.open(oauth.signed_url).then(function() {
      var apiContent = this.evaluate(function getApiContent(){
        return document.querySelector('pre').textContent.trim();
      });
      try {
        successCallback(JSON.parse(apiContent).businesses);
      }catch(err){ console.log(err); }
    });
  });
}

function getInternalRestaurantId(internalRestaurantId, externalRestaurantId, callback) {
  if(internalRestaurantId){
    callback(internalRestaurantId);
  }else{
    casper.thenOpen('http://api.joinfave.local/restaurant/id/' + externalRestaurantId, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    casper.then(function(){
      var response = JSON.parse(this.getPageContent());
      callback(response._id);
    });
  }
}

function fetchMenus(restaurants){

  casper.then(function(){
    if(!restaurants || restaurants.length === 0){
      console.log("Skipping. No restaurants");
      return;
    }

    restaurants.forEach(function(restaurant) {
      if(restaurant.menu_date_updated === undefined){
        console.log("Skipping. No menu", restaurant.id);
        return;
      }

      if(restaurant.rating < 3){
        console.log("Skipping. Too low rating", restaurant.rating, restaurant.id);
        return;
      }

      casper.thenOpen('http://www.yelp.com/menu/' + restaurant.id, function loadRestaurant() {
        console.log('Opened restaurant', restaurant.id);

        var categories, internalRestaurantId;

        // Fetch categories by scraping Yelp
        casper.then(function(){
          categories = casper.evaluate(getCategoriesByScrape);
        });

        // Insert restaurant into MongoDB
        casper.thenOpen('http://api.joinfave.local/restaurant', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          data: restaurant
        });

        // Get internal restaurant ID
        casper.then(function(){
          console.log("Inserted restaurant", restaurant.id);
          var response = JSON.parse(casper.getPageContent());
          getInternalRestaurantId(response._id, restaurant.id, function(id){
            internalRestaurantId = id;
          });
        });

        // Insert data into MongoDB
        casper.then(function(){
          if(!categories || categories.length === 0){
            console.log("Skipping. No categories", restaurant.id);
            return;
          }

          // Iterate over categories, meals
          categories.forEach(function(category) {
            category.meals.forEach(function(meal) {

              // Add restaurant info to meal
              casper.then(function(){
                meal.restaurant = {
                  _id: internalRestaurantId,
                  name: restaurant.name
                };
              });

              // POST meal to MongoDB
              casper.thenOpen('http://api.joinfave.local/meal', {
                method: 'post',
                data: meal,
                headers: {
                  'Content-Type': 'application/json'
                },
              });

              casper.then(function() {
                console.log("Inserted meal", meal.name);
              });
            });
          });
        });
      });
    });
  });

  casper.then(function loadNextRestaurants(){
    offset += 20;
    console.log("Offset increment", offset);

    // Yelp limits the offset to 1000
    if(offset < 1000){
      getRestaurantsFromApi(offset, fetchMenus);
    }else{
      console.log("Finished! Change the coordinates and restart.");
    }
  });
}

// load API
casper.then(function() {
  // get restaurants from official api, then scrape addition info (like menu)
  getRestaurantsFromApi(offset, fetchMenus);
});

casper.run();

