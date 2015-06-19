var Set = require('./Set.js').Set;

var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");
if (names.add("Mike")) {
 console.log("Mike added")
}
else {
  console.log("Can't add Mike, must already be in set");
}
console.log(names.show());
var remove = "Mike";
if (names.remove(remove)) {
 console.log(remove + " removed.");
}
else {
 console.log(remove + " not removed.");
}
names.add("Clayton");
console.log(names.show());
remove = "Alisa";
if (names.remove(remove)) {
 console.log(remove + " removed.");
}
else {
 console.log(remove + " not removed.");
}
