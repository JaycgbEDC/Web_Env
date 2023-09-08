// Event.js
Event = addEnv.toolsFunc.safeFunction(
	function Event(typeArg, eventInit) {
		debugger;
	}
);
Object.setPrototypeOf(Event.prototype, Object.prototype);

///////////////////////////////////////////  定义属性-->Event.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(Event.prototype, {
		[Symbol.toStringTag]: {
			value: "Event",
			configurable: true
		},
	
		type: {
			get: addEnv.toolsFunc.safeFunction(
				function type() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		target: {
			get: addEnv.toolsFunc.safeFunction(
				function target() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		currentTarget: {
			get: addEnv.toolsFunc.safeFunction(
				function currentTarget() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		eventPhase: {
			get: addEnv.toolsFunc.safeFunction(
				function eventPhase() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		bubbles: {
			get: addEnv.toolsFunc.safeFunction(
				function bubbles() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		cancelable: {
			get: addEnv.toolsFunc.safeFunction(
				function cancelable() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		defaultPrevented: {
			get: addEnv.toolsFunc.safeFunction(
				function defaultPrevented() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		composed: {
			get: addEnv.toolsFunc.safeFunction(
				function composed() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		timeStamp: {
			get: addEnv.toolsFunc.safeFunction(
				function timeStamp() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		srcElement: {
			get: addEnv.toolsFunc.safeFunction(
				function srcElement() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		returnValue: {
			get: addEnv.toolsFunc.safeFunction(
				function returnValue() {
					debugger;
			}
			),
			set: addEnv.toolsFunc.safeFunction(
				function returnValue() {
					debugger;
			}
			),
			enumerable: true,
			configurable: true,
			
		},

		cancelBubble: {
			get: addEnv.toolsFunc.safeFunction(
				function cancelBubble() {
					debugger;
			}
			),
			set: addEnv.toolsFunc.safeFunction(
				function cancelBubble() {
					debugger;
			}
			),
			enumerable: true,
			configurable: true,
			
		},

		NONE: {
			value: 0,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		CAPTURING_PHASE: {
			value: 1,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		AT_TARGET: {
			value: 2,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		BUBBLING_PHASE: {
			value: 3,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		composedPath: {
			value: addEnv.toolsFunc.safeFunction(
				function composedPath() {
					debugger;
			}
			),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		initEvent: {
			value: addEnv.toolsFunc.safeFunction(
				function initEvent() {
					debugger;
			}
			),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		preventDefault: {
			value: addEnv.toolsFunc.safeFunction(
				function preventDefault() {
					debugger;
			}
			),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		stopImmediatePropagation: {
			value: addEnv.toolsFunc.safeFunction(
				function stopImmediatePropagation() {
					debugger;
			}
			),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		stopPropagation: {
			value: addEnv.toolsFunc.safeFunction(
				function stopPropagation() {
					debugger;
			}
			),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->Event.prototype  /////////////////////////////////////////////////