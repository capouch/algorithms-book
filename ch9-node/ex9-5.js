var Set = require('./Set.js').Set;

var cis = new Set();
var it = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");
var diff = new Set();
diff = cis.difference(it);
console.log("[" + cis.show() + "] difference [" + it.show()
  + "] -> [" + diff.show() + "]");
//diff = it.difference(cis);
//console.log("[" + cis.show() + "] difference [" + it.show()
//  + "] -> [" + diff.show() + "]");
