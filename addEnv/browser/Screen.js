// Screen.js
Screen = addEnv.toolsFunc.safeFunction(
    function Screen() {
        throw new TypeError("Illegal constructor")
    }
);
Object.setPrototypeOf(Screen, EventTarget);
Object.setPrototypeOf(Screen.prototype, EventTarget.prototype);
screen = {};
Object.setPrototypeOf(screen, Screen.prototype);

///////////////////////////////////////////  定义属性-->Screen.prototype  /////////////////////////////////////////////////
(function () {
    let my_get_width = {
        width(){
            return addEnv.config.env.screen.width;
        }
    }.width;
    let my_get_height = {
        height(){
            return addEnv.config.env.screen.height;
        }
    }.height;
    let my_get_availWidth = {
        availWidth(){
            return addEnv.config.env.screen.availWidth;
        }
    }.availWidth;
    let my_get_availHeight = {
        availHeight(){
            return addEnv.config.env.screen.availHeight;
        }
    }.availHeight;
    let my_get_pixelDepth = {
        pixelDepth(){
            return addEnv.config.env.screen.pixelDepth;
        }
    }.pixelDepth;
    let my_get_colorDepth = {
        colorDepth(){
            return addEnv.config.env.screen.colorDepth;
        }
    }.colorDepth;
    let my_get_availLeft = {
        availLeft(){
            return addEnv.config.env.screen.availLeft;
        }
    }.availLeft;
    let my_get_availTop = {
        availTop(){
            return addEnv.config.env.screen.availTop;
        }
    }.availTop;
    let my_get_isExtended = {
        isExtended(){
            return addEnv.config.env.screen.isExtended;
        }
    }.isExtended;
    
    Object.defineProperties(Screen.prototype, {
        [Symbol.toStringTag]: {
			value: "Screen",
			configurable: true
		},

        width: {
            get: addEnv.toolsFunc.safeFunction(my_get_width),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        height: {
            get: addEnv.toolsFunc.safeFunction(my_get_height),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        availWidth: {
            get: addEnv.toolsFunc.safeFunction(my_get_availWidth),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        availHeight: {
            get: addEnv.toolsFunc.safeFunction(my_get_availHeight),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        pixelDepth: {
            get: addEnv.toolsFunc.safeFunction(my_get_pixelDepth),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        colorDepth: {
            get: addEnv.toolsFunc.safeFunction(my_get_colorDepth),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        availLeft: {
            get: addEnv.toolsFunc.safeFunction(my_get_availLeft),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        availTop: {
            get: addEnv.toolsFunc.safeFunction(my_get_availTop),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        isExtended: {
            get: addEnv.toolsFunc.safeFunction(my_get_isExtended),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        
    });
})();
///////////////////////////////////////////  定义属性-->Screen.prototype  /////////////////////////////////////////////////