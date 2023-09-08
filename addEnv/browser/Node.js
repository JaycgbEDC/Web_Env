// Node.js
Node = addEnv.toolsFunc.safeFunction(
    function Node() {
        throw new TypeError("Illegal constructor")
    }
);
Object.setPrototypeOf(Node, EventTarget);
Object.setPrototypeOf(Node.prototype, EventTarget.prototype);

///////////////////////////////////////////  定义属性-->Node.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(Node.prototype, {
		[Symbol.toStringTag]: {
			value: "Node",
			configurable: true
		}
	});
})();
///////////////////////////////////////////  定义属性-->Node.prototype  /////////////////////////////////////////////////