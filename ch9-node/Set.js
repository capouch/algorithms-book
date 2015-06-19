function Set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.contains = contains;
  this.size = size;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
  this.show = show;
}

function add(data) {
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data);
    return true;
    }
  else {
    return false;
    }
}

function remove(data) {
  var pos = this.dataStore.indexOf(data);
  if (pos > -1) {
    this.dataStore.splice(pos,1);
    return true;
    }
  else {
    return false;
    }
}

function show() {
  return this.dataStore;
}

function contains(data) {
  if (this.dataStore.indexOf(data) > -1) {
    return true;
    }
  else {
    return false;
    }
}

function intersect(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
      }
    }
  return tempSet;
}

function subset(set) {
  // Have to compensate for no for each in Node
  var pristine = true;

  if (this.size() > set.size()) {
    return false;
    }
  else {
    // No for each in Node!!
    this.dataStore.forEach(function (member) { 
      if (!set.contains(member)) {
        pristine = false;
        return;
      }
    });
   }
   return pristine;
  } 

function size() {
  return this.dataStore.length;
}

function difference(set) {
  var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (!set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i]);
      }
    }
  return tempSet;
}



function union(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    tempSet.add(this.dataStore[i]);
    }
  for (var i = 0; i < set.dataStore.length; ++i) {
    if (!tempSet.contains(set.dataStore[i])) {
      tempSet.dataStore.push(set.dataStore[i]);
      }
    }
  return tempSet;
}

module.exports.Set = Set;
