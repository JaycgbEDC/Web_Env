// History.js
History = addEnv.toolsFunc.safeFunction(
    function History() {
        throw new TypeError("Illegal constructor");
    }
);
history = {};
Object.setPrototypeOf(history, History.prototype);

///////////////////////////////////////////  定义属性-->History.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(History.prototype, {
        [Symbol.toStringTag]: {
            value: "History",
            configurable: true
        },

		state: {
			get: addEnv.toolsFunc.safeFunction(
                function state() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		back: {
			value: addEnv.toolsFunc.safeFunction(
                function back() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		forward: {
			value: addEnv.toolsFunc.safeFunction(
                function forward() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		go: {
			value: addEnv.toolsFunc.safeFunction(
                function go() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		pushState: {
			value: addEnv.toolsFunc.safeFunction(
                function pushState() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		replaceState: {
			value: addEnv.toolsFunc.safeFunction(
                function replaceState() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->History.prototype  /////////////////////////////////////////////////