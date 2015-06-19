load("Graph.js");

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.bfs(0);
var vertex = 4;
var source = 0;
var paths = g.pathTo(source,vertex);
g.showPath(paths);
