// Window.js
Window = addEnv.toolsFunc.safeFunction(
    function Window() {
        throw new TypeError("Illegal constructor")
    }
);
window = this;
Object.setPrototypeOf(window, Window.prototype);

///////////////////////////////////////////  设置WindowProperties、定义属性-->Window.prototype  /////////////////////////////////////////////////
(function () {
    let WindowProperties = addEnv.toolsFunc.safeFunction(
        function WindowProperties() {

        }
    );
    delete WindowProperties.prototype.constructor;
    Object.setPrototypeOf(WindowProperties.prototype, EventTarget.prototype);
    Object.defineProperties(WindowProperties.prototype, {
        [Symbol.toStringTag]: {
            value: "WindowProperties",
            configurable: true
        }
    });
    Object.setPrototypeOf(Window, EventTarget);
    Object.setPrototypeOf(Window.prototype, WindowProperties.prototype);

	Object.defineProperties(Window.prototype, {
		[Symbol.toStringTag]: {
			value: "Window",
			configurable: true
		},
	
		TEMPORARY: {
			value: 0,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		PERSISTENT: {
			value: 1,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},
	});
})();
///////////////////////////////////////////  设置WindowProperties、定义属性-->Window.prototype  /////////////////////////////////////////////////

///////////////////////////////////////////  定义属性-->window  /////////////////////////////////////////////////
(() => {
    let eval_ = eval;
    let setInterval_ = setInterval;
    let setTimeout_ = setTimeout;
    let clearInterval_ = clearInterval;
    let clearTimeout_ = clearTimeout;

    let my_get_name = {
        name(){
            debugger;
            return addEnv.config.env.window.name;
        }
    }.name;
    let my_set_name = {
        name(){
            debugger;
            addEnv.config.env.window.name = arguments[0];
        }
    }.name;
    let my_get_innerWidth = {
        innerWidth(){
            debugger;
            return addEnv.config.env.window.innerWidth;
        }
    }.innerWidth;
    let my_set_innerWidth = {
        innerWidth(){
            debugger;
            addEnv.config.env.window.innerWidth = arguments[0];
        }
    }.innerWidth;
    let my_get_innerHeight = {
        innerHeight(){
            return addEnv.config.env.window.innerHeight;
        }
    }.innerHeight;
    let my_set_innerHeight = {
        innerHeight(){
            addEnv.config.env.window.innerHeight = arguments[0];
        }
    }.innerHeight;
    let my_get_outerWidth = {
        outerWidth(){
            return addEnv.config.env.window.outerWidth;
        }
    }.outerWidth;
    let my_set_outerWidth = {
        outerWidth(){
            addEnv.config.env.window.outerWidth = arguments[0];
        }
    }.outerWidth;
    let my_get_outerHeight = {
        outerHeight(){
            return addEnv.config.env.window.outerHeight;
        }
    }.outerHeight;
    let my_set_outerHeight = {
        outerHeight(){
            addEnv.config.env.window.outerHeight = arguments[0];
        }
    }.outerHeight;
    let my_get_devicePixelRatio = {
        devicePixelRatio(){
            return addEnv.config.env.window.devicePixelRatio;
        }
    }.devicePixelRatio;
    let my_set_devicePixelRatio = {
        devicePixelRatio(){
            addEnv.config.env.window.devicePixelRatio = arguments[0];
        }
    }.devicePixelRatio;
    let my_get_length = {
        length(){
            return addEnv.config.env.window.length;
        }
    }.length;
    let my_set_length = {
        length(){
            addEnv.config.env.window.length = arguments[0];
        }
    }.length;
    let my_get_status = {
        status(){
            return addEnv.config.env.window.status;
        }
    }.status;
    let my_set_status = {
        status(){
            addEnv.config.env.window.status = arguments[0];
        }
    }.status;
    let my_get_isSecureContext = {
        isSecureContext(){
            return addEnv.config.env.window.isSecureContext;
        }
    }.isSecureContext;
    let my_setTimeout = {
        setTimeout(callback, ...arg){
            const timer_obj = setTimeout_(callback, ...arg);
            const timer_id = parseInt(Object.keys(addEnv.memory.timer).sort((a, b) => {
                return a - b;
            }).pop()) + 1;
            addEnv.memory.timer[timer_id] = timer_obj
            return timer_id;
        }
    }.setTimeout;
    let my_setInterval = {
        setInterval(callback, ...arg){
            const timer_obj = setInterval_(callback, ...arg);
            const timer_id = parseInt(Object.keys(addEnv.memory.timer).sort((a, b) => {
                return a - b;
            }).pop()) + 1;
            addEnv.memory.timer[timer_id] = timer_obj
            return timer_id;
        }
    }.setInterval;
    let my_clearInterval = {
        clearInterval(){
            const timer_obj = addEnv.memory.timer[arguments[0]];
            return clearInterval_(timer_obj);
        }
    }.clearInterval;
    let my_clearTimeout = {
        clearTimeout(){
            const timer_obj = addEnv.memory.timer[arguments[0]];
            return clearTimeout_(timer_obj);
        }
    }.clearTimeout;
    let DeviceOrientationEvent = {
        DeviceOrientationEvent(){
            debugger;
        }
    }.DeviceOrientationEvent;
    let DeviceMotionEvent = {
        DeviceMotionEvent(){
            debugger;
        }
    }.DeviceMotionEvent;
    let my_get_top = {
        top(){
            return window;
        }
    }.top;
    let btoa = {
        btoa(str){
            if (typeof str === 'undefined') {
                throw new Error('必须提供参数');
            }
        
            var out, i, len;
            var c1, c2, c3;
            const _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        
            len = str.length;
            i = 0;
            out = "";
            while (i < len) {
                c1 = str.charCodeAt(i++) & 0xff;
                if (i == len) {
                    out += _keyStr.charAt(c1 >> 2);
                    out += _keyStr.charAt((c1 & 0x3) << 4);
                    out += "==";
                    break;
                }
                c2 = str.charCodeAt(i++);
                if (i == len) {
                    out += _keyStr.charAt(c1 >> 2);
                    out += _keyStr.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                    out += _keyStr.charAt((c2 & 0xF) << 2);
                    out += "=";
                    break;
                }
                c3 = str.charCodeAt(i++);
                out += _keyStr.charAt(c1 >> 2);
                out += _keyStr.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += _keyStr.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
                out += _keyStr.charAt(c3 & 0x3F);
            };
            console.log(`window-bs64编码完毕`);
            return out;
        }
    }.btoa;
    let atob = {
        atob(str){
            if (typeof str === 'undefined') {
                throw new Error('必须提供参数');
            }
        
            var c1, c2, c3, c4;
            var i, len, out;
            const _keyStr = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
        
            len = str.length;
            i = 0;
            out = "";
            while (i < len) {
                /* c1 */
                do {
                    c1 = _keyStr[str.charCodeAt(i++) & 0xff];
                } while (i < len && c1 == -1);
                if (c1 == -1)
                    break;
        
                /* c2 */
                do {
                    c2 = _keyStr[str.charCodeAt(i++) & 0xff];
                } while (i < len && c2 == -1);
                if (c2 == -1)
                    break;
        
                out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
        
                /* c3 */
                do {
                    c3 = str.charCodeAt(i++) & 0xff;
                    if (c3 == 61)
                        return out;
                    c3 = _keyStr[c3];
                } while (i < len && c3 == -1);
                if (c3 == -1)
                    break;
        
                out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
        
                /* c4 */
                do {
                    c4 = str.charCodeAt(i++) & 0xff;
                    if (c4 == 61)
                        return out;
                    c4 = _keyStr[c4];
                } while (i < len && c4 == -1);
                if (c4 == -1)
                    break;
                out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
            }
            return out;
        }
    }.atob;
    let my_eval = {
        eval(str){
            return eval_(str);
        }
    }.eval;
    let my_get_window = {
        window(){
            return this;
        }
    }.window;

    Object.defineProperties(window, {
        name: {
            get: addEnv.toolsFunc.safeFunction(my_get_name),
            set: addEnv.toolsFunc.safeFunction(my_set_name),
            enumerable: true,
            configurable: true,
            
        },
        innerWidth: {
            get: addEnv.toolsFunc.safeFunction(my_get_innerWidth),
            set: addEnv.toolsFunc.safeFunction(my_set_innerWidth),
            enumerable: true,
            configurable: true,
            
        },
        innerHeight: {
            get: addEnv.toolsFunc.safeFunction(my_get_innerHeight),
            set: addEnv.toolsFunc.safeFunction(my_set_innerHeight),
            enumerable: true,
            configurable: true,
            
        },
        outerWidth: {
            get: addEnv.toolsFunc.safeFunction(my_get_outerWidth),
            set: addEnv.toolsFunc.safeFunction(my_set_outerWidth),
            enumerable: true,
            configurable: true,
            
        },
        outerHeight: {
            get: addEnv.toolsFunc.safeFunction(my_get_outerHeight),
            set: addEnv.toolsFunc.safeFunction(my_set_outerHeight),
            enumerable: true,
            configurable: true,
            
        },
        devicePixelRatio: {
            get: addEnv.toolsFunc.safeFunction(my_get_devicePixelRatio),
            set: addEnv.toolsFunc.safeFunction(my_set_devicePixelRatio),
            enumerable: true,
            configurable: true,
            
        },
        length: {
            get: addEnv.toolsFunc.safeFunction(my_get_length),
            set: addEnv.toolsFunc.safeFunction(my_set_length),
            enumerable: true,
            configurable: true,
            
        },
        status: {
            get: addEnv.toolsFunc.safeFunction(my_get_status),
            set: addEnv.toolsFunc.safeFunction(my_set_status),
            enumerable: true,
            configurable: true,
            
        },
        isSecureContext: {
            get: addEnv.toolsFunc.safeFunction(my_get_isSecureContext),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        setTimeout: {
            value: addEnv.toolsFunc.safeFunction(my_setTimeout),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        setInterval: {
            value: addEnv.toolsFunc.safeFunction(my_setInterval),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        clearInterval: {
            value: addEnv.toolsFunc.safeFunction(my_clearInterval),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        clearTimeout: {
            value: addEnv.toolsFunc.safeFunction(my_clearTimeout),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        DeviceOrientationEvent: {
            value: addEnv.toolsFunc.safeFunction(DeviceOrientationEvent),
            writable: true,
            enumerable: false,
            configurable: true,
            
        },
        DeviceMotionEvent: {
            value: addEnv.toolsFunc.safeFunction(DeviceMotionEvent),
            writable: true,
            enumerable: false,
            configurable: true,
            
        },
        top: {
            get: addEnv.toolsFunc.safeFunction(my_get_top),
            set: undefined,
            enumerable: true,
            configurable: false,
            
        },
        btoa: {
            value: addEnv.toolsFunc.safeFunction(btoa),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        atob: {
            value: addEnv.toolsFunc.safeFunction(atob),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        eval: {
            value: addEnv.toolsFunc.safeFunction(my_eval),
            writable: true,
            enumerable: false,
            configurable: true,
            
        },
        window: {
            get: addEnv.toolsFunc.safeFunction(my_get_window),
            set: undefined,
            enumerable: true,
            configurable: false,
            
        },
        
    });

})();
///////////////////////////////////////////  定义属性-->window  /////////////////////////////////////////////////