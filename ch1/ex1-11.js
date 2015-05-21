function showScope() {
  scope = "local";
  return scope;
}
scope = "global";
print(scope); // displays "global"
print(showScope()); // displays "local"
print(scope); // displays "local"
