function showScope() {
  var scope = "local";
  return scope;
}
var scope = "global";
print(scope); // displays "global"
print(showScope()); // displays "local"
