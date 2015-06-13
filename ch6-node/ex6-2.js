var LList = require('./LList.js').LList;

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log('\n');
cities.remove("Carlisle");
cities.display();
