// EventTarget.js
EventTarget = addEnv.toolsFunc.safeFunction(
    function EventTarget() {

    }
);
Object.setPrototypeOf(EventTarget.prototype, Object.prototype);

///////////////////////////////////////////  定义属性-->EventTarget.prototype  /////////////////////////////////////////////////
(function () {
    let addEventListener = {
        addEventListener(type, listener, ...args){
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
    }.addEventListener;
    let dispatchEvent = {
        dispatchEvent(){
            debugger;
        }
    }.dispatchEvent;
    let removeEventListener = {
        removeEventListener(){
            debugger;
        }
    }.removeEventListener;
    
    Object.defineProperties(EventTarget.prototype, {
        [Symbol.toStringTag]: {
			value: "EventTarget",
			configurable: true
		},

        addEventListener: {
            value: addEnv.toolsFunc.safeFunction(addEventListener),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        dispatchEvent: {
            value: addEnv.toolsFunc.safeFunction(dispatchEvent),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        removeEventListener: {
            value: addEnv.toolsFunc.safeFunction(removeEventListener),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        
    });
})();
///////////////////////////////////////////  定义属性-->EventTarget.prototype  /////////////////////////////////////////////////