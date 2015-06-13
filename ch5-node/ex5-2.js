var Queue = require('./Queue.js').Queue;
var getDancers = require('./Dancer.js').getDancers;
var dance = require('./Dancer.js').dance;

// test program
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
 console.log(femaleDancers.front().name + " is waiting to dance.");
}
if (!maleDancers.empty()) {
 console.log(maleDancers.front().name + " is waiting to dance.");
}

