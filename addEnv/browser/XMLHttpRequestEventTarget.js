// XMLHttpRequestEventTarget.js
XMLHttpRequestEventTarget = addEnv.toolsFunc.safeFunction(
    function XMLHttpRequestEventTarget() {
        throw new TypeError("Illegal constructor")
    }
);
Object.setPrototypeOf(XMLHttpRequestEventTarget, EventTarget);
Object.setPrototypeOf(XMLHttpRequestEventTarget.prototype, EventTarget.prototype);

///////////////////////////////////////////  定义属性-->XMLHttpRequestEventTarget.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
		[Symbol.toStringTag]: {
			value: "XMLHttpRequestEventTarget",
			configurable: true
		},
	
		onloadstart: {
			get: addEnv.toolsFunc.safeFunction(
                function onloadstart() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function onloadstart() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		onprogress: {
			get: addEnv.toolsFunc.safeFunction(
                function onprogress() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function onprogress() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		onabort: {
			get: addEnv.toolsFunc.safeFunction(
                function onabort() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function onabort() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		onerror: {
			get: addEnv.toolsFunc.safeFunction(
                function onerror() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function onerror() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		onload: {
			get: addEnv.toolsFunc.safeFunction(
                function onload() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function onload() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		ontimeout: {
			get: addEnv.toolsFunc.safeFunction(
                function ontimeout() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function ontimeout() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		onloadend: {
			get: addEnv.toolsFunc.safeFunction(
                function onloadend() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function onloadend() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->XMLHttpRequestEventTarget.prototype  /////////////////////////////////////////////////