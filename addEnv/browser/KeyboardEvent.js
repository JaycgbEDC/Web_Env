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
    let my_get_key = {
        key(){
            debugger;
        }
    }.key;
    let my_get_code = {
        code(){
            debugger;
        }
    }.code;
    let my_get_location = {
        location(){
            debugger;
        }
    }.location;
    let my_get_ctrlKey = {
        ctrlKey(){
            debugger;
        }
    }.ctrlKey;
    let my_get_shiftKey = {
        shiftKey(){
            debugger;
        }
    }.shiftKey;
    let my_get_altKey = {
        altKey(){
            debugger;
        }
    }.altKey;
    let my_get_metaKey = {
        metaKey(){
            debugger;
        }
    }.metaKey;
    let my_get_repeat = {
        repeat(){
            debugger;
        }
    }.repeat;
    let my_get_isComposing = {
        isComposing(){
            debugger;
        }
    }.isComposing;
    let my_get_charCode = {
        charCode(){
            debugger;
        }
    }.charCode;
    let my_get_keyCode = {
        keyCode(){
            debugger;
        }
    }.keyCode;
    let getModifierState = {
        getModifierState(){
            debugger;
        }
    }.getModifierState;
    let initKeyboardEvent = {
        initKeyboardEvent(){
            debugger;
        }
    }.initKeyboardEvent;
    
    Object.defineProperties(KeyboardEvent.prototype, {
        [Symbol.toStringTag]: {
			value: "KeyboardEvent",
			configurable: true
		},

        key: {
            get: addEnv.toolsFunc.safeFunction(my_get_key),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        code: {
            get: addEnv.toolsFunc.safeFunction(my_get_code),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        location: {
            get: addEnv.toolsFunc.safeFunction(my_get_location),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        ctrlKey: {
            get: addEnv.toolsFunc.safeFunction(my_get_ctrlKey),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        shiftKey: {
            get: addEnv.toolsFunc.safeFunction(my_get_shiftKey),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        altKey: {
            get: addEnv.toolsFunc.safeFunction(my_get_altKey),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        metaKey: {
            get: addEnv.toolsFunc.safeFunction(my_get_metaKey),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        repeat: {
            get: addEnv.toolsFunc.safeFunction(my_get_repeat),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        isComposing: {
            get: addEnv.toolsFunc.safeFunction(my_get_isComposing),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        charCode: {
            get: addEnv.toolsFunc.safeFunction(my_get_charCode),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        keyCode: {
            get: addEnv.toolsFunc.safeFunction(my_get_keyCode),
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
            value: addEnv.toolsFunc.safeFunction(getModifierState),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        initKeyboardEvent: {
            value: addEnv.toolsFunc.safeFunction(initKeyboardEvent),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        
    });
})();
///////////////////////////////////////////  定义属性-->KeyboardEvent.prototype  /////////////////////////////////////////////////