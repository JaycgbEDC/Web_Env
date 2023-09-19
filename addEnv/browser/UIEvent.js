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
    let my_get_view = {
        view(){
            debugger;
        }
    }.view;
    let my_get_detail = {
        detail(){
            debugger;
        }
    }.detail;
    let my_get_sourceCapabilities = {
        sourceCapabilities(){
            debugger;
        }
    }.sourceCapabilities;
    let my_get_which = {
        which(){
            debugger;
        }
    }.which;
    let initUIEvent = {
        initUIEvent(){
            debugger;
        }
    }.initUIEvent;
    
    Object.defineProperties(UIEvent.prototype, {
        [Symbol.toStringTag]: {
			value: "UIEvent",
			configurable: true
		},

        view: {
            get: addEnv.toolsFunc.safeFunction(my_get_view),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        detail: {
            get: addEnv.toolsFunc.safeFunction(my_get_detail),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        sourceCapabilities: {
            get: addEnv.toolsFunc.safeFunction(my_get_sourceCapabilities),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        which: {
            get: addEnv.toolsFunc.safeFunction(my_get_which),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        initUIEvent: {
            value: addEnv.toolsFunc.safeFunction(initUIEvent),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        
    });
})();
///////////////////////////////////////////  定义属性-->UIEvent.prototype  /////////////////////////////////////////////////