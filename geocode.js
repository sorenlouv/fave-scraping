var casper = require('casper').create();
var restaurants;

casper.start();

// Get all restaurants
casper.thenOpen('http://127.0.0.1:8888/restaurant?limit=999&offset=0', {
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
      console.log("Lookup", restaurant.name);

      fullAddress = restaurant.location.address[0] + ' ';
      fullAddress += restaurant.location.address[1] ? restaurant.location.address[1] + ' ' : '';
      fullAddress += restaurant.location.city + ' ' + restaurant.location.country_code;
      console.log(fullAddress);
    });

    // Request
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

      // Add coordinates to restaurant info
      restaurant.location.coordinate = [response.results[0].geometry.location.lng, response.results[0].geometry.location.lat];

      // Add formatted address
      restaurant.location.formatted_address = response.results[0].formatted_addres;

      var data = {
        location: restaurant.location
      };

      console.log("Found coordinates");
      require('utils').dump(response.results[0].geometry.location);

      // Update MongoDB
      casper.thenOpen('http://127.0.0.1:8888/restaurant/' + restaurant._id, {
        method: 'PUT',
        data: data,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      casper.then(function(){
        var response = JSON.parse(this.getPageContent());
        require('utils').dump(response);
      });
    });
  });
});

casper.run();