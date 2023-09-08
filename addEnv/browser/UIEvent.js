// UIEvent.js
UIEvent = addEnv.toolsFunc.safeFunction(
	function UIEvent(typeArg, ...arg) {
		debugger;
	}
);
Object.setPrototypeOf(UIEvent, Event);
Object.setPrototypeOf(UIEvent.prototype, Event.prototype);

///////////////////////////////////////////  定义属性-->UIEvent.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(UIEvent.prototype, {
		[Symbol.toStringTag]: {
			value: "UIEvent",
			configurable: true
		},
	
		view: {
			get: addEnv.toolsFunc.safeFunction(
				function view() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		detail: {
			get: addEnv.toolsFunc.safeFunction(
				function detail() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		sourceCapabilities: {
			get: addEnv.toolsFunc.safeFunction(
				function sourceCapabilities() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		which: {
			get: addEnv.toolsFunc.safeFunction(
				function which() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		initUIEvent: {
			value: addEnv.toolsFunc.safeFunction(
				function initUIEvent() {
					debugger;
			}
			),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->UIEvent.prototype  /////////////////////////////////////////////////