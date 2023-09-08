// EventTarget.js
EventTarget = addEnv.toolsFunc.safeFunction(
    function EventTarget() {

    }
);
Object.setPrototypeOf(EventTarget.prototype, Object.prototype);

///////////////////////////////////////////  定义属性-->EventTarget.prototype  /////////////////////////////////////////////////
(function () {
    Object.defineProperties(EventTarget.prototype, {
		[Symbol.toStringTag]: {
			value: "EventTarget",
			configurable: true
		},
	
		addEventListener: {
			value: addEnv.toolsFunc.safeFunction(
                function addEventListener(type, listener, ...args) {
                    if(!(type in addEnv.memory.listeners)){
                        addEnv.memory.listeners[type] = [];
                    }
                    addEnv.memory.listeners[type].push({
                        listener: listener,
                        self: this,
                    });
                    if (addEnv.config.printLog) {
                        console.log(`注册事件-->`, `EventTarget_addEventListener`, `type->${type}`, `listener->${addEnv.toolsFunc.compressCode(String(listener))}`, `args->${args ? args : []}`);
                    }
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		dispatchEvent: {
			value: addEnv.toolsFunc.safeFunction(
                function dispatchEvent() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		removeEventListener: {
			value: addEnv.toolsFunc.safeFunction(
                function removeEventListener() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->EventTarget.prototype  /////////////////////////////////////////////////