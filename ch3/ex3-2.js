load('./List.js');

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");
names.front();
print(names.getElement()); // displays Clayton
print(names.next()); // displays Clayton
print(names.next()); // displays Raymond
names.next();
names.previous();
print(names.previous()); // displays Raymond
for (names.front(); names.hasNext();) {
  print(names.next());
}

for (names.end(); names.hasPrevious();) {
  print(names.previous());
}


