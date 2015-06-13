var DLList = require('./DLList.js').DLList;

var cities = new DLList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log('\n');
cities.remove("Carlisle");
cities.display();
console.log('\n');
cities.dispReverse();
