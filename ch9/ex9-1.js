load('./Set.js');

var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");
if (names.add("Mike")) {
 print("Mike added")
}
else {
  print("Can't add Mike, must already be in set");
}
print(names.show());
var remove = "Mike";
if (names.remove(remove)) {
 print(remove + " removed.");
}
else {
 print(remove + " not removed.");
}
names.add("Clayton");
print(names.show());
remove = "Alisa";
if (names.remove(remove)) {
 print(remove + " removed.");
}
else {
 print(remove + " not removed.");
}
