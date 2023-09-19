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
    let my_get_onloadstart = {
        onloadstart(){
            debugger;
        }
    }.onloadstart;
    let my_set_onloadstart = {
        onloadstart(){
            debugger;
        }
    }.onloadstart;
    let my_get_onprogress = {
        onprogress(){
            debugger;
        }
    }.onprogress;
    let my_set_onprogress = {
        onprogress(){
            debugger;
        }
    }.onprogress;
    let my_get_onabort = {
        onabort(){
            debugger;
        }
    }.onabort;
    let my_set_onabort = {
        onabort(){
            debugger;
        }
    }.onabort;
    let my_get_onerror = {
        onerror(){
            debugger;
        }
    }.onerror;
    let my_set_onerror = {
        onerror(){
            debugger;
        }
    }.onerror;
    let my_get_onload = {
        onload(){
            debugger;
        }
    }.onload;
    let my_set_onload = {
        onload(){
            debugger;
        }
    }.onload;
    let my_get_ontimeout = {
        ontimeout(){
            debugger;
        }
    }.ontimeout;
    let my_set_ontimeout = {
        ontimeout(){
            debugger;
        }
    }.ontimeout;
    let my_get_onloadend = {
        onloadend(){
            debugger;
        }
    }.onloadend;
    let my_set_onloadend = {
        onloadend(){
            debugger;
        }
    }.onloadend;
    
    Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
        [Symbol.toStringTag]: {
			value: "XMLHttpRequestEventTarget",
			configurable: true
		},

        onloadstart: {
            get: addEnv.toolsFunc.safeFunction(my_get_onloadstart),
            set: addEnv.toolsFunc.safeFunction(my_set_onloadstart),
            enumerable: true,
            configurable: true,
            
        },
        onprogress: {
            get: addEnv.toolsFunc.safeFunction(my_get_onprogress),
            set: addEnv.toolsFunc.safeFunction(my_set_onprogress),
            enumerable: true,
            configurable: true,
            
        },
        onabort: {
            get: addEnv.toolsFunc.safeFunction(my_get_onabort),
            set: addEnv.toolsFunc.safeFunction(my_set_onabort),
            enumerable: true,
            configurable: true,
            
        },
        onerror: {
            get: addEnv.toolsFunc.safeFunction(my_get_onerror),
            set: addEnv.toolsFunc.safeFunction(my_set_onerror),
            enumerable: true,
            configurable: true,
            
        },
        onload: {
            get: addEnv.toolsFunc.safeFunction(my_get_onload),
            set: addEnv.toolsFunc.safeFunction(my_set_onload),
            enumerable: true,
            configurable: true,
            
        },
        ontimeout: {
            get: addEnv.toolsFunc.safeFunction(my_get_ontimeout),
            set: addEnv.toolsFunc.safeFunction(my_set_ontimeout),
            enumerable: true,
            configurable: true,
            
        },
        onloadend: {
            get: addEnv.toolsFunc.safeFunction(my_get_onloadend),
            set: addEnv.toolsFunc.safeFunction(my_set_onloadend),
            enumerable: true,
            configurable: true,
            
        },
        
    });
})();
///////////////////////////////////////////  定义属性-->XMLHttpRequestEventTarget.prototype  /////////////////////////////////////////////////