load('Queue.js');
load('Dancer.js');

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
print('There are ' + femaleDancers.count() + ' females and ' + maleDancers.count() + ' males waiting to dance.');
dance(maleDancers, femaleDancers);
if (maleDancers.count() > 0) {
  print("There are " + maleDancers.count() +
   " male dancers waiting to dance.");
}
if (femaleDancers.count() > 0) {
  print("There are " + femaleDancers.count() +
   " female dancers waiting to dance.");
}

