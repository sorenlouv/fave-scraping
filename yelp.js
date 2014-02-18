/*jslint node: true */

'use strict';

var casper = require('casper').create({
  verbose: false,
  logLevel: 'debug'
});

// Load modules
var fs = require('fs');
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

    // items
    var items = [];
    var itemElements = categoryElements[i].querySelectorAll('.menu-item');
    for(var j=0; j<itemElements.length; j++){

      // item prices (label + amount)
      // An item can have multiple prices. Often, these prices have labels (eg. Small, medium, large), but not always
      var prices = [];
      var pricesElement = itemElements[j].querySelector('.menu-item-prices');
      var hasLabels = pricesElement.querySelector('table') !== null;

      // The item's prices have labels
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
        items.push({
          name: stripHtml(itemElements[j].querySelector('.menu-item-details h3')),
          description: stripHtml(itemElements[j].querySelector('.menu-item-details .menu-item-details-description')),
          prices: prices,
          review_count: review_count,
          image: itemElements[j].querySelector('.media-avatar img').src.replace('60s.jpg', 'l.jpg')
        });
      }
    } // end of items

    if(items.length > 0){
      // Sort items by number of reviews
      items = items.sort(byReviewCount);

      // Fetch the top 20% (always at least two)
      var itemsToFetch = Math.ceil(items.length * 0.20) + 1;
      items = items.splice(0, itemsToFetch);

      categories.push({
        name: stripHtml(categoryElements[i].previousElementSibling.querySelector('h2')),
        description: stripHtml(categoryElements[i].previousElementSibling.querySelector('p')),
        items: items
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
  var latitude = '37.791778'; // North of Market
  var longtitude = '-122.407487'; // North of Market
  var category_filter = 'restaurants';
  var radius_filter = 50000;
  var limit = 20;

  var parameters = 'll=' + latitude + ',' + longtitude + '&category_filter=' + category_filter + '&radius_filter=' + radius_filter + '&limit=' + limit + '&offset=' + offset;
  // 'location=SanFrancisco&category_filter=restaurants&radius_filter=50000&limit=20&offset=' + offset,

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
    casper.thenOpen('http://127.0.0.1:8888/restaurant/id/' + externalRestaurantId, {
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
        casper.thenOpen('http://127.0.0.1:8888/restaurant', {
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

          // Insert items into MongoDB
          categories.forEach(function(category) {
            category.items.forEach(function(item) {
              casper.then(function(){
                item.restaurant = internalRestaurantId;
              });

              casper.thenOpen('http://127.0.0.1:8888/meal', {
                method: 'post',
                data: item,
                headers: {
                  'Content-Type': 'application/json'
                },
              });

              casper.then(function() {
                console.log("Inserted item", item.name);
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
