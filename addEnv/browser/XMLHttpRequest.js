// XMLHttpRequest.js
XMLHttpRequest = addEnv.toolsFunc.safeFunction(
    function XMLHttpRequest() {
	
    }
);
Object.setPrototypeOf(XMLHttpRequest, XMLHttpRequestEventTarget);
Object.setPrototypeOf(XMLHttpRequest.prototype, XMLHttpRequestEventTarget.prototype);

///////////////////////////////////////////  定义属性-->XMLHttpRequest.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(XMLHttpRequest.prototype, {
		[Symbol.toStringTag]: {
			value: "XMLHttpRequest",
			configurable: true
		},
	
		onreadystatechange: {
			get: addEnv.toolsFunc.safeFunction(
                function onreadystatechange() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function onreadystatechange() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		readyState: {
			get: addEnv.toolsFunc.safeFunction(
                function readyState() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		timeout: {
			get: addEnv.toolsFunc.safeFunction(
                function timeout() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function timeout() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		withCredentials: {
			get: addEnv.toolsFunc.safeFunction(
                function withCredentials() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function withCredentials() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		upload: {
			get: addEnv.toolsFunc.safeFunction(
                function upload() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		responseURL: {
			get: addEnv.toolsFunc.safeFunction(
                function responseURL() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		status: {
			get: addEnv.toolsFunc.safeFunction(
                function status() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		statusText: {
			get: addEnv.toolsFunc.safeFunction(
                function statusText() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		responseType: {
			get: addEnv.toolsFunc.safeFunction(
                function responseType() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function responseType() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		response: {
			get: addEnv.toolsFunc.safeFunction(
                function response() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		responseText: {
			get: addEnv.toolsFunc.safeFunction(
                function responseText() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		responseXML: {
			get: addEnv.toolsFunc.safeFunction(
                function responseXML() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		UNSENT: {
			value: 0,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		OPENED: {
			value: 1,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		HEADERS_RECEIVED: {
			value: 2,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		LOADING: {
			value: 3,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		DONE: {
			value: 4,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		abort: {
			value: addEnv.toolsFunc.safeFunction(
                function abort() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		getAllResponseHeaders: {
			value: addEnv.toolsFunc.safeFunction(
                function getAllResponseHeaders() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		getResponseHeader: {
			value: addEnv.toolsFunc.safeFunction(
                function getResponseHeader() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		open: {
			value: addEnv.toolsFunc.safeFunction(
                function open() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		overrideMimeType: {
			value: addEnv.toolsFunc.safeFunction(
                function overrideMimeType() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		send: {
			value: addEnv.toolsFunc.safeFunction(
                function send() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		setRequestHeader: {
			value: addEnv.toolsFunc.safeFunction(
                function setRequestHeader() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->XMLHttpRequest.prototype  /////////////////////////////////////////////////