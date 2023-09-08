// KeyboardEvent.js
KeyboardEvent = addEnv.toolsFunc.safeFunction(
	function KeyboardEvent(typeArg, KeyboardEventInit) {
		debugger;
	}
);
Object.setPrototypeOf(KeyboardEvent, UIEvent);
Object.setPrototypeOf(KeyboardEvent.prototype, UIEvent.prototype);

///////////////////////////////////////////  定义属性-->KeyboardEvent.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(KeyboardEvent.prototype, {
		[Symbol.toStringTag]: {
			value: "KeyboardEvent",
			configurable: true
		},
	
		key: {
			get: addEnv.toolsFunc.safeFunction(
				function key() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		code: {
			get: addEnv.toolsFunc.safeFunction(
				function code() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		location: {
			get: addEnv.toolsFunc.safeFunction(
				function location() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		ctrlKey: {
			get: addEnv.toolsFunc.safeFunction(
				function ctrlKey() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		shiftKey: {
			get: addEnv.toolsFunc.safeFunction(
				function shiftKey() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		altKey: {
			get: addEnv.toolsFunc.safeFunction(
				function altKey() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		metaKey: {
			get: addEnv.toolsFunc.safeFunction(
				function metaKey() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		repeat: {
			get: addEnv.toolsFunc.safeFunction(
				function repeat() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		isComposing: {
			get: addEnv.toolsFunc.safeFunction(
				function isComposing() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		charCode: {
			get: addEnv.toolsFunc.safeFunction(
				function charCode() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		keyCode: {
			get: addEnv.toolsFunc.safeFunction(
				function keyCode() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		DOM_KEY_LOCATION_STANDARD: {
			value: 0,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		DOM_KEY_LOCATION_LEFT: {
			value: 1,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		DOM_KEY_LOCATION_RIGHT: {
			value: 2,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		DOM_KEY_LOCATION_NUMPAD: {
			value: 3,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		getModifierState: {
			value: addEnv.toolsFunc.safeFunction(
				function odifierState() {
					debugger;
			}
			),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		initKeyboardEvent: {
			value: addEnv.toolsFunc.safeFunction(
				function initKeyboardEvent() {
					debugger;
			}
			),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->KeyboardEvent.prototype  /////////////////////////////////////////////////