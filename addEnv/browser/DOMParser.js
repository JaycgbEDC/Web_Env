// DOMParser.js
DOMParser = addEnv.toolsFunc.safeFunction(
    function DOMParser() {
	
    }
);
Object.setPrototypeOf(DOMParser.prototype, Object.prototype);

///////////////////////////////////////////  定义属性-->DOMParser.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(DOMParser.prototype, {
		[Symbol.toStringTag]: {
			value: "DOMParser",
			configurable: true
		},
	
		parseFromString: {
			value: addEnv.toolsFunc.safeFunction(
                function parseFromString() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->DOMParser.prototype  /////////////////////////////////////////////////