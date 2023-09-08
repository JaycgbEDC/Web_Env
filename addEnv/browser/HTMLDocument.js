// HTMLDocument.js
HTMLDocument = addEnv.toolsFunc.safeFunction(
    function HTMLDocument() {
        throw new TypeError("Illegal constructor")
    }
);
Object.setPrototypeOf(HTMLDocument, Document);
Object.setPrototypeOf(HTMLDocument.prototype, Document.prototype);
document = {};
Object.setPrototypeOf(document, HTMLDocument.prototype);

///////////////////////////////////////////  定义属性-->HTMLDocument.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(HTMLDocument.prototype, {
		[Symbol.toStringTag]: {
			value: "HTMLDocument",
			configurable: true
		},


    });
})();
///////////////////////////////////////////  定义属性-->HTMLDocument.prototype  /////////////////////////////////////////////////

///////////////////////////////////////////  定义属性-->document  /////////////////////////////////////////////////
(function () {
    Object.defineProperties(document, {
        location: {
			get: addEnv.toolsFunc.safeFunction(
				function location() {
					return window.location;
				}
			),
			set: addEnv.toolsFunc.safeFunction(
				function location() {
					debugger;
				}
			),
			enumerable: true,
			configurable: false,
			
		},
    });
})();
///////////////////////////////////////////  定义属性-->document  /////////////////////////////////////////////////