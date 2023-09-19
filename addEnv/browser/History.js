// History.js
History = addEnv.toolsFunc.safeFunction(
    function History() {
        throw new TypeError("Illegal constructor");
    }
);
history = {};
Object.setPrototypeOf(history, History.prototype);

///////////////////////////////////////////  定义属性-->History.prototype  /////////////////////////////////////////////////
(function () {
    let my_get_state = {
        state(){
            debugger;
        }
    }.state;
    let back = {
        back(){
            debugger;
        }
    }.back;
    let forward = {
        forward(){
            debugger;
        }
    }.forward;
    let go = {
        go(){
            debugger;
        }
    }.go;
    let pushState = {
        pushState(){
            debugger;
        }
    }.pushState;
    let replaceState = {
        replaceState(){
            debugger;
        }
    }.replaceState;
    
    Object.defineProperties(History.prototype, {
        [Symbol.toStringTag]: {
            value: "History",
            configurable: true
        },

        state: {
            get: addEnv.toolsFunc.safeFunction(my_get_state),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        back: {
            value: addEnv.toolsFunc.safeFunction(back),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        forward: {
            value: addEnv.toolsFunc.safeFunction(forward),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        go: {
            value: addEnv.toolsFunc.safeFunction(go),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        pushState: {
            value: addEnv.toolsFunc.safeFunction(pushState),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        replaceState: {
            value: addEnv.toolsFunc.safeFunction(replaceState),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        
    });
})();
///////////////////////////////////////////  定义属性-->History.prototype  /////////////////////////////////////////////////