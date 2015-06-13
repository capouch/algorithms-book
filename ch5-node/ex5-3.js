var Queue = require('./Queue.js').Queue;
var getDancers = require('./Dancer.js').getDancers;
var dance = require('./Dancer.js').dance;

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
console.log('There are ' + femaleDancers.count() + ' females and ' + maleDancers.count() + ' males waiting to dance.');
dance(maleDancers, femaleDancers);
if (maleDancers.count() > 0) {
  console.log("There are " + maleDancers.count() +
   " male dancers waiting to dance.");
}
if (femaleDancers.count() > 0) {
  console.log("There are " + femaleDancers.count() +
   " female dancers waiting to dance.");
}

