var UUID = require('./UUID');

function Node(spec) {
	var id = UUID.v4();
	var labels = {};
	var labelArray = spec.labels;
	if(labelArray !== undefined) {
		labelArray.forEach(function(label){
			labels[label] = 0;
		});
	}
	var attributes = spec.attributes;
	if(attributes === undefined) {
		attributes = {};
	}
	function getId() {
		return id;
	}
	function getLabels() {
		return Object.keys(labels);
	}
	function setLabel(label) {
		labels[label] = 0;
	}
	function deleteLabel(label) {
		delete labels[label];
	}
	function hasLabel(label) {
		return labels[label] !== undefined;
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
		var repr = 'Node['+getId()+':'+getLabels().join(',')+']';
		if(Object.keys(attributes).length>0) {
			repr += '{'+Object.keys(attributes).map(function(key){ return key+':'+JSON.stringify(getAttribute(key))}).join(',')+'}';
		}
		return repr;
	}
	return {
		getId: getId,
		getLabels: getLabels,
		setLabel: setLabel,
		deleteLabel: deleteLabel,
		hasLabel: hasLabel,
		setAttribute: setAttribute,
		getAttribute: getAttribute,
		deleteAttribute: deleteAttribute,
		hasAttribute: hasAttribute,
		toString: toString
	};
}

module.exports = Node;
