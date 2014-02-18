var casper = require('casper').create();

casper.start();

var myJsonObject = {
  myString: "I am a string",
  myNumber: 1337,
  myArray: ["a", "c", "Hello & Goodbye;"],
  myObject: {
    myStringProp: "I am a new string",
    myNumberProp: 1338,
    myArrayProp: ["Hi there", ["this", "is", "deep"]]
  }
};

casper.thenOpen('http://requestb.in/1b5auzf1', {
  method: 'POST',
  data: myJsonObject,
  headers: {
    'Content-Type': 'application/json'
  },
});

casper.then(function(){
  require('utils').dump(this.getPageContent());
});

casper.run();