module.exports = (function() {
	function GraphError(message) {
		this.name = "GraphError";
		this.message = (message || "");
	}

	GraphError.prototype = new Error();
	GraphError.prototype.constructor = GraphError;

	return GraphError;
})();
