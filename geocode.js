/*jslint node: true */

var casper = require('casper').create();
var restaurants;

casper.start();

// Get all restaurants
casper.thenOpen('http://api.joinfave.local/restaurant?limit=999&offset=0', {
  method: 'GET'
});

// Read response
casper.then(function(){
  restaurants = JSON.parse(this.getPageContent());
});

// Geocode (from address to coordinate)
casper.then(function(){
  restaurants.forEach(function(restaurant) {
    var fullAddress;

    casper.then(function(){
      console.log("Find restaurant: ", restaurant.name);

      fullAddress = restaurant.location.address[0] + ' ';

      // Restaurant has an extra address line
      if(restaurant.location.address[1] !== undefined && restaurant.location.address[1] !== null){
        if(restaurant.location.address.indexOf(",") > -1){ // The address contains a comma
          var strippedAddress = restaurant.location.address[1].match(/^(.*?),/); // remove everything after comma
          fullAddress += strippedAddress[1] + ' ';
        }else{
          fullAddress += restaurant.location.address + ' ';
        }
      }
      fullAddress += restaurant.location.city + ' ';
      fullAddress += restaurant.location.country_code;
      console.log(fullAddress);
    });

    // Request to Google
    casper.then(function(){
      casper.thenOpen('http://maps.google.com/maps/api/geocode/json?sensor=false&address=' + encodeURIComponent(fullAddress), {
        method: 'GET'
      });
    });

    // Response from Google
    casper.then(function(){
      var response = JSON.parse(this.getPageContent());
      if(response.results.length === 0){
        console.error("Could not find coordinates for ", restaurant.name);
        return;
      }

      if(response.results[0].geometry.location_type == "APPROXIMATE"){
        console.error("Could only find approximate location for ", restaurant.name);
        return;
      }

      // Add coordinates to restaurant info
      restaurant.location.coordinate = [response.results[0].geometry.location.lng, response.results[0].geometry.location.lat];

      // Add formatted address
      restaurant.location.formatted_address = response.results[0].formatted_addres;

      var data = {
        location: restaurant.location
      };

      console.log("Found coordinates", restaurant.name);
      require('utils').dump(response.results[0].geometry.location);

      // Update MongoDB
      casper.thenOpen('http://api.joinfave.local/restaurant/' + restaurant._id, {
        method: 'PUT',
        data: data,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      casper.then(function(){
        var response = JSON.parse(this.getPageContent());
        require('utils').dump(response);
        console.log("-----------------------");
      });
    });
  });
});

casper.run();