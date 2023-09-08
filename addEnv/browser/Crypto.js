// Crypto.js
Crypto = addEnv.toolsFunc.safeFunction(
    function Crypto() {
        throw new TypeError("Illegal constructor")
    }
);
Object.setPrototypeOf(Crypto.prototype, Object.prototype);
crypto = {};
Object.setPrototypeOf(crypto, Crypto.prototype);

///////////////////////////////////////////  定义属性-->Crypto.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(Crypto.prototype, {
		[Symbol.toStringTag]: {
			value: "Crypto",
			configurable: true
		},
	
		getRandomValues: {
			value: addEnv.toolsFunc.safeFunction(
                function getRandomValues() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		subtle: {
			get: addEnv.toolsFunc.safeFunction(
                function subtle() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		randomUUID: {
			value: addEnv.toolsFunc.safeFunction(
                function randomUUID() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->Crypto.prototype  /////////////////////////////////////////////////