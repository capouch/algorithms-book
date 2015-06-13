function Dictionary() {
  this.add = add;
  this.datastore = {};
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear = clear;
}

function add(key, value) {
  this.datastore[key] = value;
}

function find(key) {
  return this.datastore[key];
}

function remove(key) {
  delete this.datastore[key];
}

function showAll() {
  var keys = Object.keys(this.datastore);
  keys.sort();
  for (var i = 0; i < keys.length; i++) {
    print(keys[i] + " -> " + this.datastore[keys[i]]);
  }
}

function count() {
  var n = 0;
  for (var key in this.datastore) {
    ++n;
  }
  return n;
}

function clear() {
  for (var key in this.datastore) {
    delete this.datastore[key];
  }
}


