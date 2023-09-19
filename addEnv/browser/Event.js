// Event.js
Event = addEnv.toolsFunc.safeFunction(
	function Event(typeArg, eventInit) {
		debugger;
	}
);
Object.setPrototypeOf(Event.prototype, Object.prototype);

///////////////////////////////////////////  定义属性-->Event.prototype  /////////////////////////////////////////////////
(function () {
    let my_get_type = {
        type(){
            debugger;
        }
    }.type;
    let my_get_target = {
        target(){
            debugger;
        }
    }.target;
    let my_get_currentTarget = {
        currentTarget(){
            debugger;
        }
    }.currentTarget;
    let my_get_eventPhase = {
        eventPhase(){
            debugger;
        }
    }.eventPhase;
    let my_get_bubbles = {
        bubbles(){
            debugger;
        }
    }.bubbles;
    let my_get_cancelable = {
        cancelable(){
            debugger;
        }
    }.cancelable;
    let my_get_defaultPrevented = {
        defaultPrevented(){
            debugger;
        }
    }.defaultPrevented;
    let my_get_composed = {
        composed(){
            debugger;
        }
    }.composed;
    let my_get_timeStamp = {
        timeStamp(){
            debugger;
        }
    }.timeStamp;
    let my_get_srcElement = {
        srcElement(){
            debugger;
        }
    }.srcElement;
    let my_get_returnValue = {
        returnValue(){
            debugger;
        }
    }.returnValue;
    let my_set_returnValue = {
        returnValue(){
            debugger;
        }
    }.returnValue;
    let my_get_cancelBubble = {
        cancelBubble(){
            debugger;
        }
    }.cancelBubble;
    let my_set_cancelBubble = {
        cancelBubble(){
            debugger;
        }
    }.cancelBubble;
    let composedPath = {
        composedPath(){
            debugger;
        }
    }.composedPath;
    let initEvent = {
        initEvent(){
            debugger;
        }
    }.initEvent;
    let preventDefault = {
        preventDefault(){
            debugger;
        }
    }.preventDefault;
    let stopImmediatePropagation = {
        stopImmediatePropagation(){
            debugger;
        }
    }.stopImmediatePropagation;
    let stopPropagation = {
        stopPropagation(){
            debugger;
        }
    }.stopPropagation;

    Object.defineProperties(Event.prototype, {
        [Symbol.toStringTag]: {
			value: "Event",
			configurable: true
		},

        type: {
            get: addEnv.toolsFunc.safeFunction(my_get_type),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        target: {
            get: addEnv.toolsFunc.safeFunction(my_get_target),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        currentTarget: {
            get: addEnv.toolsFunc.safeFunction(my_get_currentTarget),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        eventPhase: {
            get: addEnv.toolsFunc.safeFunction(my_get_eventPhase),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        bubbles: {
            get: addEnv.toolsFunc.safeFunction(my_get_bubbles),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        cancelable: {
            get: addEnv.toolsFunc.safeFunction(my_get_cancelable),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        defaultPrevented: {
            get: addEnv.toolsFunc.safeFunction(my_get_defaultPrevented),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        composed: {
            get: addEnv.toolsFunc.safeFunction(my_get_composed),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        timeStamp: {
            get: addEnv.toolsFunc.safeFunction(my_get_timeStamp),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        srcElement: {
            get: addEnv.toolsFunc.safeFunction(my_get_srcElement),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        returnValue: {
            get: addEnv.toolsFunc.safeFunction(my_get_returnValue),
            set: addEnv.toolsFunc.safeFunction(my_set_returnValue),
            enumerable: true,
            configurable: true,
            
        },
        cancelBubble: {
            get: addEnv.toolsFunc.safeFunction(my_get_cancelBubble),
            set: addEnv.toolsFunc.safeFunction(my_set_cancelBubble),
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
            value: addEnv.toolsFunc.safeFunction(composedPath),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        initEvent: {
            value: addEnv.toolsFunc.safeFunction(initEvent),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        preventDefault: {
            value: addEnv.toolsFunc.safeFunction(preventDefault),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        stopImmediatePropagation: {
            value: addEnv.toolsFunc.safeFunction(stopImmediatePropagation),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        stopPropagation: {
            value: addEnv.toolsFunc.safeFunction(stopPropagation),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        
    });
})();
///////////////////////////////////////////  定义属性-->Event.prototype  /////////////////////////////////////////////////