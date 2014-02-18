var casper = require('casper').create();

casper.start();

var restaurants = [{
  "is_claimed": true,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/old-skool-cafe-san-francisco",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 222,
  "name": "Old Skool Cafe",
  "snippet_image_url": "http://s3-media4.ak.yelpcdn.com/photo/0Dhbwz_IWuM2z7COciOtxw/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/old-skool-cafe-san-francisco",
  "phone": "4158228531",
  "snippet_text": "The food was off the charts. And after meeting the chef and talking about his passion for his creations, I wasn't the least bit surprised. We were able to...",
  "image_url": "http://s3-media3.ak.yelpcdn.com/bphoto/7LsseGEqTdRC3Q9Srd3iuw/ms.jpg",
  "categories": [
    ["Soul Food", "soulfood"],
    ["American (Traditional)", "tradamerican"],
    ["Music Venues", "musicvenues"]
  ],
  "display_phone": "+1-415-822-8531",
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "id": "old-skool-cafe-san-francisco",
  "is_closed": false,
  "location": {
    "cross_streets": "Palou Ave \u0026 Oakdale Ave",
    "city": "San Francisco",
    "display_address": ["1429 Mendell St", "(b/t Palou Ave \u0026 Oakdale Ave)", "Bayview-Hunters Point", "San Francisco, CA 94124"],
    "neighborhoods": ["Bayview-Hunters Point"],
    "postal_code": "94124",
    "country_code": "US",
    "address": ["1429 Mendell St"],
    "state_code": "CA"
  }
}, {
  "is_claimed": true,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/the-galley-san-francisco",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 78,
  "name": "The Galley",
  "snippet_image_url": "http://s3-media4.ak.yelpcdn.com/photo/aoRFLo4nc2TpVjYU9NYkmg/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/the-galley-san-francisco",
  "snippet_text": "Walking in on a Wednesday early afternoon for lunch I wasn't sure what to expect, but was amazed by the French onion sandwich and the pork chops. \n\nI'll...",
  "image_url": "http://s3-media3.ak.yelpcdn.com/bphoto/fZcWuYQH3qOyJVmiu4RJ9A/ms.jpg",
  "categories": [
    ["Gastropubs", "gastropubs"]
  ],
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "id": "the-galley-san-francisco",
  "is_closed": false,
  "location": {
    "city": "San Francisco",
    "display_address": ["Clooney's Pub", "1401 Valencia St", "Mission", "San Francisco, CA 94110"],
    "neighborhoods": ["Mission"],
    "postal_code": "94110",
    "country_code": "US",
    "address": ["Clooney's Pub", "1401 Valencia St"],
    "state_code": "CA"
  }
}, {
  "is_claimed": false,
  "rating": 4.0,
  "mobile_url": "http://m.yelp.com/biz/las-tinajas-restaurant-san-francisco",
  "rating_img_url": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
  "review_count": 93,
  "name": "Las Tinajas Restaurant",
  "snippet_image_url": "http://s3-media1.ak.yelpcdn.com/photo/9ISlAjw2CqJLSgs0DpNMdQ/ms.jpg",
  "rating_img_url_small": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
  "url": "http://www.yelp.com/biz/las-tinajas-restaurant-san-francisco",
  "phone": "4156959933",
  "snippet_text": "One of the best haspanic resturants i have ever ate at. The carne asada is juciey and delicious and the queso fritos are too good to pass up.",
  "image_url": "http://s3-media4.ak.yelpcdn.com/bphoto/MVTgDyutu1hT-Dl_05jxKw/ms.jpg",
  "categories": [
    ["Latin American", "latin"]
  ],
  "display_phone": "+1-415-695-9933",
  "rating_img_url_large": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
  "id": "las-tinajas-restaurant-san-francisco",
  "is_closed": false,
  "location": {
    "cross_streets": "19th St \u0026 20th St",
    "city": "San Francisco",
    "display_address": ["2338 Mission St", "(b/t 19th St \u0026 20th St)", "Mission", "San Francisco, CA 94110"],
    "neighborhoods": ["Mission"],
    "postal_code": "94110",
    "country_code": "US",
    "address": ["2338 Mission St"],
    "state_code": "CA"
  }
}, {
  "is_claimed": true,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/roxie-food-center-san-francisco",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 718,
  "name": "Roxie Food Center",
  "snippet_image_url": "http://s3-media4.ak.yelpcdn.com/photo/osrBZs7yz5brglX3WORvVw/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/roxie-food-center-san-francisco",
  "phone": "4155872345",
  "snippet_text": "Om nom nom.... Roxie's is the crack, ya'll.\n\nWhat seems to be a measly corner store may change your sandwich life. Once brought a dude I was seeing there...",
  "image_url": "http://s3-media2.ak.yelpcdn.com/bphoto/zZGBdjqG5Vre8YZsn0TKRw/ms.jpg",
  "categories": [
    ["Sandwiches", "sandwiches"],
    ["Grocery", "grocery"]
  ],
  "display_phone": "+1-415-587-2345",
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "id": "roxie-food-center-san-francisco",
  "is_closed": false,
  "location": {
    "cross_streets": "Havelock St \u0026 Santa Ynez Ave",
    "city": "San Francisco",
    "display_address": ["1901 San Jose Ave", "(b/t Havelock St \u0026 Santa Ynez Ave)", "Outer Mission", "San Francisco, CA 94112"],
    "neighborhoods": ["Outer Mission", "Mission Terrace"],
    "postal_code": "94112",
    "country_code": "US",
    "address": ["1901 San Jose Ave"],
    "state_code": "CA"
  }
}, {
  "is_claimed": false,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/big-chef-toms-belly-burgers-san-francisco",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 32,
  "name": "Big Chef Tom's Belly Burgers",
  "snippet_image_url": "http://s3-media1.ak.yelpcdn.com/photo/g63tDqiJ8zBivzF-gXBPjA/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/big-chef-toms-belly-burgers-san-francisco",
  "snippet_text": "My boyfriend introduced me to these burgers while at Off the Grid a couple weeks ago. I admit I was skeptical I would find something I liked more than...",
  "image_url": "http://s3-media2.ak.yelpcdn.com/bphoto/cf5bDk3-MxaPzePtoS_-2Q/ms.jpg",
  "categories": [
    ["Burgers", "burgers"]
  ],
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "id": "big-chef-toms-belly-burgers-san-francisco",
  "is_closed": false,
  "location": {
    "cross_streets": "12th St \u0026 Lafayette St",
    "city": "San Francisco",
    "display_address": ["1550 Howard St", "(b/t 12th St \u0026 Lafayette St)", "SoMa", "San Francisco, CA 94103"],
    "neighborhoods": ["SoMa"],
    "postal_code": "94103",
    "country_code": "US",
    "address": ["1550 Howard St"],
    "state_code": "CA"
  }
}, {
  "is_claimed": true,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/cafe-me-san-francisco-2",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 110,
  "name": "Cafe Me",
  "snippet_image_url": "http://s3-media1.ak.yelpcdn.com/photo/Mza0zx2hiJZoTYRFvXl6Pw/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/cafe-me-san-francisco-2",
  "phone": "4152888628",
  "snippet_text": "Did a quick search for breakfast sandwiches since I'm still new to the city (moved here 3 days ago) and was craving something that matched the quality of...",
  "image_url": "http://s3-media3.ak.yelpcdn.com/bphoto/sPslVdpovMBmkTyQ1cg6lg/ms.jpg",
  "categories": [
    ["Sandwiches", "sandwiches"],
    ["Breakfast \u0026 Brunch", "breakfast_brunch"],
    ["Coffee \u0026 Tea", "coffee"]
  ],
  "display_phone": "+1-415-288-8628",
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "id": "cafe-me-san-francisco-2",
  "is_closed": false,
  "location": {
    "cross_streets": "Sansome St \u0026 Hotaling St",
    "city": "San Francisco",
    "display_address": ["500 Washington St", "(b/t Sansome St \u0026 Hotaling St)", "Financial District", "San Francisco, CA 94111"],
    "neighborhoods": ["Financial District"],
    "postal_code": "94111",
    "country_code": "US",
    "address": ["500 Washington St"],
    "state_code": "CA"
  }
}, {
  "is_claimed": true,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/flying-pig-bistro-san-francisco",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 98,
  "name": "Flying Pig Bistro",
  "snippet_image_url": "http://s3-media2.ak.yelpcdn.com/photo/-MPKKLAf_foQYSrP597FoQ/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/flying-pig-bistro-san-francisco",
  "phone": "4159341234",
  "snippet_text": "My favorite local cafe for sandwich lunch since they have tons of gluten free options! The sandwiches themselves are tasty too and good portion. Very...",
  "image_url": "http://s3-media2.ak.yelpcdn.com/bphoto/1YvNqFB49VtTrjf1EOr4UA/ms.jpg",
  "categories": [
    ["Sandwiches", "sandwiches"],
    ["Gluten-Free", "gluten_free"],
    ["Bars", "bars"]
  ],
  "display_phone": "+1-415-934-1234",
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "id": "flying-pig-bistro-san-francisco",
  "is_closed": false,
  "location": {
    "cross_streets": "Adair St \u0026 15th St",
    "city": "San Francisco",
    "display_address": ["433 S Van Ness Ave", "(b/t Adair St \u0026 15th St)", "Mission", "San Francisco, CA 94103"],
    "neighborhoods": ["Mission"],
    "postal_code": "94103",
    "country_code": "US",
    "address": ["433 S Van Ness Ave"],
    "state_code": "CA"
  }
}, {
  "is_claimed": false,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/guerrero-market-and-deli-san-francisco",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 79,
  "name": "Guerrero Market \u0026 Deli",
  "snippet_image_url": "http://s3-media2.ak.yelpcdn.com/photo/jPg9I7MMhcfZH2KaadpC1g/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/guerrero-market-and-deli-san-francisco",
  "phone": "4156472530",
  "snippet_text": "Nice deli, delicious sandwich too! I'm doing a gig over here so i'll be back there. Only problem with them was price on menu didn't match price i was...",
  "image_url": "http://s3-media2.ak.yelpcdn.com/bphoto/Qq0_C03RsE0A2lLb9j9uOg/ms.jpg",
  "categories": [
    ["Delis", "delis"],
    ["Sandwiches", "sandwiches"],
    ["Grocery", "grocery"]
  ],
  "display_phone": "+1-415-647-2530",
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "id": "guerrero-market-and-deli-san-francisco",
  "is_closed": false,
  "location": {
    "cross_streets": "19th St",
    "city": "San Francisco",
    "display_address": ["701 Guerrero St", "(b/t 19th St)", "Mission", "San Francisco, CA 94110"],
    "neighborhoods": ["Mission"],
    "postal_code": "94110",
    "country_code": "US",
    "address": ["701 Guerrero St"],
    "state_code": "CA"
  }
}, {
  "is_claimed": true,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/sexy-soup-cart-san-francisco-3",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 14,
  "name": "Sexy Soup Cart",
  "snippet_image_url": "http://s3-media2.ak.yelpcdn.com/photo/6o-va3svZu4dTMQfZybpcA/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/sexy-soup-cart-san-francisco-3",
  "snippet_text": "Sexy Soup Cart is all sorts of sexay. Not only is Kristin (soup lady) super nice and rocks this \"down to earth\" persona, but her organic soups are orgasmic!...",
  "image_url": "http://s3-media1.ak.yelpcdn.com/bphoto/KniY0GK3w6gwQb6PmP2geA/ms.jpg",
  "categories": [
    ["Food Stands", "foodstands"],
    ["Soup", "soup"]
  ],
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "id": "sexy-soup-cart-san-francisco-3",
  "is_closed": false,
  "location": {
    "city": "San Francisco",
    "display_address": ["Mission", "San Francisco, CA 94110"],
    "neighborhoods": ["Mission"],
    "postal_code": "94110",
    "country_code": "US",
    "address": [],
    "state_code": "CA"
  }
}, {
  "is_claimed": true,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/carmel-pizza-company-san-francisco",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 187,
  "name": "Carmel Pizza Company",
  "snippet_image_url": "http://s3-media4.ak.yelpcdn.com/photo/3hs6j_Xy1Qa2V4ojNui7gg/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/carmel-pizza-company-san-francisco",
  "phone": "4156761185",
  "snippet_text": "I took my two boys (13 and 16) for a long weekend in San Francisco.  We stayed at the Courtyard Marriott, which has 3 pizza places within a half block of...",
  "image_url": "http://s3-media2.ak.yelpcdn.com/bphoto/ikQARnGBR3g3cL-GcMQVPQ/ms.jpg",
  "categories": [
    ["Pizza", "pizza"],
    ["Italian", "italian"]
  ],
  "display_phone": "+1-415-676-1185",
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "id": "carmel-pizza-company-san-francisco",
  "is_closed": false,
  "location": {
    "cross_streets": "Jefferson St \u0026 Beach St",
    "city": "San Francisco",
    "display_address": ["2826 Jones St", "(b/t Jefferson St \u0026 Beach St)", "North Beach/Telegraph Hill", "San Francisco, CA 94133"],
    "neighborhoods": ["North Beach/Telegraph Hill", "Fisherman's Wharf"],
    "postal_code": "94133",
    "country_code": "US",
    "address": ["2826 Jones St"],
    "state_code": "CA"
  }
}, {
  "is_claimed": true,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/tacos-el-primo-san-francisco-2",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 30,
  "name": "Tacos El Primo",
  "snippet_image_url": "http://s3-media3.ak.yelpcdn.com/photo/pv0msX8geiqq-JQEp44mPw/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/tacos-el-primo-san-francisco-2",
  "phone": "4158464975",
  "snippet_text": "One of the best food stands in San Francisco for sure! My coworker showed me Tacos El Primo one day at lunch and I've been back at least 3 dozen times. Most...",
  "image_url": "http://s3-media1.ak.yelpcdn.com/bphoto/fVl6XQbyyFXXOC9YvEYd6Q/ms.jpg",
  "categories": [
    ["Mexican", "mexican"],
    ["Food Trucks", "foodtrucks"]
  ],
  "display_phone": "+1-415-846-4975",
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "id": "tacos-el-primo-san-francisco-2",
  "is_closed": false,
  "location": {
    "city": "San Francisco",
    "display_address": ["Yosemite \u0026 Jennings", "Bayview-Hunters Point", "San Francisco, CA 94124"],
    "neighborhoods": ["Bayview-Hunters Point"],
    "postal_code": "94124",
    "country_code": "US",
    "address": ["Yosemite \u0026 Jennings"],
    "state_code": "CA"
  }
}, {
  "is_claimed": false,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/the-palace-san-francisco",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 64,
  "name": "The Palace",
  "snippet_image_url": "http://s3-media3.ak.yelpcdn.com/photo/Te4_d-p5BBdA29gbJG_Q3w/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/the-palace-san-francisco",
  "phone": "4156665218",
  "snippet_text": "Took my bf here for his birthday, was curious about the tasting menu experience.  Wow.  We both really enjoyed this meal.  The food was excellent, service...",
  "image_url": "http://s3-media1.ak.yelpcdn.com/bphoto/cofaSR3j_aKXVMfhvg4-Dg/ms.jpg",
  "categories": [
    ["Steakhouses", "steak"]
  ],
  "display_phone": "+1-415-666-5218",
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "id": "the-palace-san-francisco",
  "is_closed": false,
  "location": {
    "cross_streets": "26th St \u0026 Capp St",
    "city": "San Francisco",
    "display_address": ["3047 Mission St", "(b/t 26th St \u0026 Capp St)", "Mission", "San Francisco, CA 94110"],
    "neighborhoods": ["Mission"],
    "postal_code": "94110",
    "country_code": "US",
    "address": ["3047 Mission St"],
    "state_code": "CA"
  }
}, {
  "is_claimed": true,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/l-ardoise-bistro-san-francisco",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 846,
  "name": "L'ardoise Bistro",
  "snippet_image_url": "http://s3-media1.ak.yelpcdn.com/photo/Xv8q2PDBn_ms8LYxcVjWFw/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/l-ardoise-bistro-san-francisco",
  "menu_date_updated": 1387643065,
  "phone": "4154372600",
  "snippet_text": "We were visiting San Francisco for the NewYear's holiday, and followed the lead of other Yelpers and dined this evening at L'Ardoise Bistro in the Duboce...",
  "image_url": "http://s3-media1.ak.yelpcdn.com/bphoto/KnKluJQ1Q7RzuAobhLwTNw/ms.jpg",
  "categories": [
    ["French", "french"]
  ],
  "display_phone": "+1-415-437-2600",
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "menu_provider": "single_platform",
  "id": "l-ardoise-bistro-san-francisco",
  "is_closed": false,
  "location": {
    "cross_streets": "15th St \u0026 Henry St",
    "city": "San Francisco",
    "display_address": ["151 Noe St", "(b/t 15th St \u0026 Henry St)", "Duboce Triangle", "San Francisco, CA 94114"],
    "neighborhoods": ["Duboce Triangle"],
    "postal_code": "94114",
    "country_code": "US",
    "address": ["151 Noe St"],
    "state_code": "CA"
  }
}, {
  "is_claimed": true,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/deli-board-san-francisco",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 661,
  "name": "Deli Board",
  "snippet_image_url": "http://s3-media4.ak.yelpcdn.com/photo/RTibk2yQAtMMDIonN2mwmQ/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/deli-board-san-francisco",
  "menu_date_updated": 1390194979,
  "phone": "4155527687",
  "snippet_text": "One of the best hot sandwiches you can get, anywhere.  Hot, melty, tasty sauce, a lot of food, a lot of options.  The pickles are awesome too, as was the...",
  "image_url": "http://s3-media1.ak.yelpcdn.com/bphoto/vpuOb9elHPIogA9iCPDoUA/ms.jpg",
  "categories": [
    ["Delis", "delis"],
    ["Sandwiches", "sandwiches"],
    ["Caterers", "catering"]
  ],
  "display_phone": "+1-415-552-7687",
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "menu_provider": "single_platform",
  "id": "deli-board-san-francisco",
  "is_closed": false,
  "location": {
    "cross_streets": "Russ St \u0026 Sherman St",
    "city": "San Francisco",
    "display_address": ["1058 Folsom St", "(b/t Russ St \u0026 Sherman St)", "SoMa", "San Francisco, CA 94103"],
    "neighborhoods": ["SoMa"],
    "postal_code": "94103",
    "country_code": "US",
    "address": ["1058 Folsom St"],
    "state_code": "CA"
  }
}, {
  "is_claimed": false,
  "rating": 5.0,
  "mobile_url": "http://m.yelp.com/biz/post-street-creamery-san-francisco",
  "rating_img_url": "http://s3-media1.ak.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
  "review_count": 22,
  "name": "Post Street Creamery",
  "snippet_image_url": "http://s3-media3.ak.yelpcdn.com/photo/1I_d0xUAb8Yp_eHxXn32PA/ms.jpg",
  "rating_img_url_small": "http://s3-media1.ak.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
  "url": "http://www.yelp.com/biz/post-street-creamery-san-francisco",
  "snippet_text": "Wow. I mean, WOW!\n\nThe salted caramel is the best I have ever tasted.  So creamy and flavorful...and the homemade toffee bits!  This is incredible.  (I'm...",
  "image_url": "http://s3-media1.ak.yelpcdn.com/bphoto/Uqbhg2M2dn1KXL8F2S2q9w/ms.jpg",
  "categories": [
    ["Food Stands", "foodstands"],
    ["Ice Cream \u0026 Frozen Yogurt", "icecream"]
  ],
  "rating_img_url_large": "http://s3-media3.ak.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png",
  "id": "post-street-creamery-san-francisco",
  "is_closed": false,
  "location": {
    "cross_streets": "Kearny St \u0026 Robert Kirk Ln",
    "city": "San Francisco",
    "display_address": ["100 Post St", "(b/t Kearny St \u0026 Robert Kirk Ln)", "Union Square", "San Francisco, CA 94108"],
    "neighborhoods": ["Union Square", "Financial District"],
    "postal_code": "94108",
    "country_code": "US",
    "address": ["100 Post St"],
    "state_code": "CA"
  }
}, {
  "is_claimed": true,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/cafe-du-soleil-san-francisco-4",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 80,
  "name": "Cafe Du Soleil",
  "snippet_image_url": "http://s3-media1.ak.yelpcdn.com/photo/R64mDZVpqIf6NBmlvba2rg/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/cafe-du-soleil-san-francisco-4",
  "phone": "4156996154",
  "snippet_text": "Been here a few times, so I thought I should write a review. The food is top-notch, both in quantity and quality. The owner is always there and makes sure...",
  "image_url": "http://s3-media2.ak.yelpcdn.com/bphoto/7chHUW3UnNoMKD-_lhgySQ/ms.jpg",
  "categories": [
    ["Cafes", "cafes"],
    ["French", "french"],
    ["Coffee \u0026 Tea", "coffee"]
  ],
  "display_phone": "+1-415-699-6154",
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "id": "cafe-du-soleil-san-francisco-4",
  "is_closed": false,
  "location": {
    "cross_streets": "Folsom St \u0026 Saint Francis Pl",
    "city": "San Francisco",
    "display_address": ["345 3rd St", "(b/t Folsom St \u0026 Saint Francis Pl)", "SoMa", "San Francisco, CA 94107"],
    "neighborhoods": ["SoMa"],
    "postal_code": "94107",
    "country_code": "US",
    "address": ["345 3rd St"],
    "state_code": "CA"
  }
}, {
  "is_claimed": true,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/ikes-place-san-francisco",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 5811,
  "name": "Ike's Place",
  "snippet_image_url": "http://s3-media2.ak.yelpcdn.com/photo/0czPXs8IKpFYi3HOGANdrg/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/ikes-place-san-francisco",
  "menu_date_updated": 1387639601,
  "phone": "4155536888",
  "snippet_text": "Love these sammys. Definitely get 2 because they're even better later when you think you've had all you could possibly eat for one day.\n\nEveryone I know...",
  "image_url": "http://s3-media2.ak.yelpcdn.com/bphoto/ZMuHPpya8htMBUTxPt0Rzg/ms.jpg",
  "categories": [
    ["Sandwiches", "sandwiches"]
  ],
  "display_phone": "+1-415-553-6888",
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "menu_provider": "single_platform",
  "id": "ikes-place-san-francisco",
  "is_closed": false,
  "location": {
    "cross_streets": "Dehon St \u0026 Sanchez St",
    "city": "San Francisco",
    "display_address": ["3489 16th St", "(b/t Dehon St \u0026 Sanchez St)", "Castro", "San Francisco, CA 94114"],
    "neighborhoods": ["Castro"],
    "postal_code": "94114",
    "country_code": "US",
    "address": ["3489 16th St"],
    "state_code": "CA"
  }
}, {
  "is_claimed": true,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/pistos-san-francisco-3",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 31,
  "name": "Pisto's",
  "snippet_image_url": "http://s3-media3.ak.yelpcdn.com/photo/E0y6TGvb4_JpFCZwoj06PQ/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/pistos-san-francisco-3",
  "phone": "4153174696",
  "snippet_text": "Awesome and friendly service. Amazing and well thought-out food. And the burritos are the perfect size (just meat, beans, cheese and salsa). I never ever...",
  "image_url": "http://s3-media1.ak.yelpcdn.com/bphoto/RbxSg78Mg1sX9A8plkOeyQ/ms.jpg",
  "categories": [
    ["Mexican", "mexican"]
  ],
  "display_phone": "+1-415-317-4696",
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "id": "pistos-san-francisco-3",
  "is_closed": false,
  "location": {
    "cross_streets": "Vallejo St \u0026 Green St",
    "city": "San Francisco",
    "display_address": ["1310 Grant St", "(b/t Vallejo St \u0026 Green St)", "North Beach/Telegraph Hill", "San Francisco, CA 94133"],
    "neighborhoods": ["North Beach/Telegraph Hill"],
    "postal_code": "94133",
    "country_code": "US",
    "address": ["1310 Grant St"],
    "state_code": "CA"
  }
}, {
  "is_claimed": false,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/the-sandwich-shop-san-francisco",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 97,
  "name": "The Sandwich Shop",
  "snippet_image_url": "http://s3-media2.ak.yelpcdn.com/photo/ogqGQRgZnjS2w0gjKk43Fw/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/the-sandwich-shop-san-francisco",
  "phone": "4152821754",
  "snippet_text": "Value, value, value!  Whilst perusing the restaurant/cafe circuit in San Francisco, there is nothing more pleasing than finding a local spot that serves up...",
  "image_url": "http://s3-media1.ak.yelpcdn.com/bphoto/ivQdKANAPnQB5jQErFOhgA/ms.jpg",
  "categories": [
    ["Delis", "delis"],
    ["Sandwiches", "sandwiches"]
  ],
  "display_phone": "+1-415-282-1754",
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "id": "the-sandwich-shop-san-francisco",
  "is_closed": false,
  "location": {
    "cross_streets": "3rd St \u0026 Tennessee St",
    "city": "San Francisco",
    "display_address": ["635 19th St", "(b/t 3rd St \u0026 Tennessee St)", "Dogpatch", "San Francisco, CA 94107"],
    "neighborhoods": ["Dogpatch", "Potrero Hill"],
    "postal_code": "94107",
    "country_code": "US",
    "address": ["635 19th St"],
    "state_code": "CA"
  }
}, {
  "is_claimed": true,
  "rating": 4.5,
  "mobile_url": "http://m.yelp.com/biz/four-seasons-restaurant-san-francisco-2",
  "rating_img_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
  "review_count": 51,
  "name": "Four Seasons Restaurant",
  "snippet_image_url": "http://s3-media2.ak.yelpcdn.com/photo/JZ7I91hTPxamv878xWfy1A/ms.jpg",
  "rating_img_url_small": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
  "url": "http://www.yelp.com/biz/four-seasons-restaurant-san-francisco-2",
  "phone": "4156744146",
  "snippet_text": "Fantastic pho. We picked ours up and took it home. Mixed it all up and then quickly threw it on the stove just to warm it up real quick.\n\nEven though we...",
  "image_url": "http://s3-media2.ak.yelpcdn.com/bphoto/PmIF2_UUb0i3HnSn9k9FAA/ms.jpg",
  "categories": [
    ["Vietnamese", "vietnamese"]
  ],
  "display_phone": "+1-415-674-4146",
  "rating_img_url_large": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
  "id": "four-seasons-restaurant-san-francisco-2",
  "is_closed": false,
  "location": {
    "cross_streets": "Olive St \u0026 Ellis St",
    "city": "San Francisco",
    "display_address": ["721 Larkin St", "(b/t Olive St \u0026 Ellis St)", "Tenderloin", "San Francisco, CA 94109"],
    "neighborhoods": ["Tenderloin"],
    "postal_code": "94109",
    "country_code": "US",
    "address": ["721 Larkin St"],
    "state_code": "CA"
  }
}];

function getCategoriesByScrape(){

  function stripHtml(element){
    if(element === null) return '';
    return element.textContent.trim();
  }

  function byReviewCount(a, b) {
    if (a.reviewCount > b.reviewCount) return -1;
    if (a.reviewCount < b.reviewCount) return 1;
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
      var reviewCount = stripHtml(itemElements[j].querySelector('.menu-item-details .num-reviews'));
      reviewCount = Number(reviewCount.replace(/[^\d.]/g, '')); // strip everything but digits

      if(reviewCount > 5){
        items.push({
          title: stripHtml(itemElements[j].querySelector('.menu-item-details h3')),
          description: stripHtml(itemElements[j].querySelector('.menu-item-details .menu-item-details-description')),
          prices: prices,
          reviewCount: reviewCount,
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
        title: stripHtml(categoryElements[i].previousElementSibling.querySelector('h2')),
        description: stripHtml(categoryElements[i].previousElementSibling.querySelector('p')),
        items: items
      });
    }
  }
  return categories;
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

  restaurants.forEach(function(restaurant) {
    casper.then(function(){

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
          data: JSON.stringify(restaurant)
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
                console.log("Inserted item", item.title);
                require('utils').dump(JSON.parse(this.getPageContent()));
              });
            });
          });
        });
      });
    });
  });
}

casper.then(function() {
  console.log("Started");
  fetchMenus(restaurants);
});

casper.run();