var Node = require('./Node');
var Relationship = require('./Relationship');
var GraphError = require('./GraphError');

function Graph() {
	function createNode(labels, attributes) {
		return Node({labels: labels, attributes:attributes});
	}
	function getNodeForId(nodeId) {
	}
	function findNodes(criteria) {
	}
	function deleteNodes(nodes) {
	}
	function createRelationship(startNode, endNode, type, attributes) {
		return Relationship({startNode: startNode, endNode: endNode, type: type, attributes:attributes});
	}
	function getRelationshipForId(relationshipId) {
	}
	function findRelationships(criteria) {
	}
	function deleteRelationships(relationships) {
	}
	return {
		createNode: createNode,
		getNodeForId: getNodeForId,
		findNodes: findNodes,
		deleteNodes: deleteNodes,
		createRelationship: createRelationship,
		getRelationshipForId: getRelationshipForId,
		findRelationships: findRelationships,
		deleteRelationships: deleteRelationships
	};
}

module.exports = Graph;
