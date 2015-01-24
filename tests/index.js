var graphjs = require('..');

var graph = graphjs.Graph({});
var john = graph.createNode(['User'], {name: 'John Smith'});
var jane = graph.createNode(['User'], {name: 'Jane Smith'});
var knows = graph.createRelationship(john, jane, 'KNOWS', {since: '3 years'});

console.log(knows.toString());

