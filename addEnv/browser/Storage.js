// Storage.js
Storage = addEnv.toolsFunc.safeFunction(
    function Storage() {
        throw new TypeError("Illegal constructor")
    }
);
Object.setPrototypeOf(Storage.prototype, Object.prototype);
localStorage = {};
Object.setPrototypeOf(localStorage, Storage.prototype);

///////////////////////////////////////////  定义属性-->Storage.prototype  /////////////////////////////////////////////////
(function () {
    let clear = {
        clear(){
            for (const key of Object.keys(this)) {
                delete this[key];
            }
        }
    }.clear;
    let getItem = {
        getItem(key){
            if (this[key]) {
                return this[key];
            }
            return null;
        }
    }.getItem;
    let key = {
        key(index){
            if (Object.keys(this)[index]) {
                return Object.keys(this)[index];
            }
            return null;
        }
    }.key;
    let removeItem = {
        removeItem(key){
            if (this[key]) {
                delete this[key];
            }
        }
    }.removeItem;
    let setItem = {
        setItem(key, value){
            this[key] = value;
        }
    }.setItem;
    let my_get_length = {
        length(){
            return Object.keys(this).length;
        }
    }.length;
    
    Object.defineProperties(Storage.prototype, {
        [Symbol.toStringTag]: {
			value: "Storage",
			configurable: true
		},

        clear: {
            value: addEnv.toolsFunc.safeFunction(clear),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        getItem: {
            value: addEnv.toolsFunc.safeFunction(getItem),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        key: {
            value: addEnv.toolsFunc.safeFunction(key),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        removeItem: {
            value: addEnv.toolsFunc.safeFunction(removeItem),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        setItem: {
            value: addEnv.toolsFunc.safeFunction(setItem),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        length: {
            get: addEnv.toolsFunc.safeFunction(my_get_length),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        
    });
})();
///////////////////////////////////////////  定义属性-->Storage.prototype  /////////////////////////////////////////////////