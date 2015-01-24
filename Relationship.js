var UUID = require('./UUID');
var GraphError = require('./GraphError');

function Relationship(spec) {
	var id = UUID.v4();
	var startNode = spec.startNode;
	if(startNode === undefined) {
		throw new GraphError('Cannot create a Relationship without specifying a start Node');
	}
	var endNode = spec.endNode;
	if(endNode === undefined) {
		throw new GraphError('Cannot create a Relationship without specifying an end Node');
	}
	var type = spec.type;
	var attributes = spec.attributes;
	if(attributes === undefined) {
		attributes = {};
	}
	function getId() {
		return id;
	}
	function getStartNode() {
		return startNode;
	}
	function getEndNode() {
		return endNode;
	}
	function getType() {
		return type;
	}
	function setType(newType) {
		type = newType;
	}
	function deleteType() {
		delete type;
	}
	function setAttribute(key, value) {
		attributes[key] = value;
	}
	function getAttribute(key) {
		return attributes[key];
	}
	function deleteAttribute(key) {
		delete attributes[key];
	}
	function hasAttribute(key) {
		return attributes[key] !== undefined;
	}
	function toString() {
		var repr = '-' + '[:'+type+']';
		if(Object.keys(attributes).length>0) {
			repr += '{'+Object.keys(attributes).map(function(key){ return key+':'+JSON.stringify(getAttribute(key))}).join(',')+'}';
		}
		repr += '->';
		return startNode.toString() + repr + endNode.toString();
	}
	return {
		getId: getId,
		getStartNode: getStartNode,
		getEndNode: getEndNode,
		getType: getType,
		setType: setType,
		deleteType: deleteType,
		setAttribute: setAttribute,
		getAttribute: getAttribute,
		deleteAttribute: deleteAttribute,
		hasAttribute: hasAttribute,
		toString: toString
	};
}

module.exports = Relationship;
