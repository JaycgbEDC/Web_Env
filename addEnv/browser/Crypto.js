// Crypto.js
Crypto = addEnv.toolsFunc.safeFunction(
    function Crypto() {
        throw new TypeError("Illegal constructor")
    }
);
Object.setPrototypeOf(Crypto.prototype, Object.prototype);
crypto = {};
Object.setPrototypeOf(crypto, Crypto.prototype);

///////////////////////////////////////////  定义属性-->Crypto.prototype  /////////////////////////////////////////////////
(function () {
    let getRandomValues = {
        getRandomValues(){
            debugger;
        }
    }.getRandomValues;
    let my_get_subtle = {
        subtle(){
            debugger;
        }
    }.subtle;
    let randomUUID = {
        randomUUID(){
            debugger;
        }
    }.randomUUID;

    Object.defineProperties(Crypto.prototype, {
        [Symbol.toStringTag]: {
			value: "Crypto",
			configurable: true
		},
        getRandomValues: {
            value: addEnv.toolsFunc.safeFunction(getRandomValues),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        subtle: {
            get: addEnv.toolsFunc.safeFunction(my_get_subtle),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        randomUUID: {
            value: addEnv.toolsFunc.safeFunction(randomUUID),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        
    });
})();
///////////////////////////////////////////  定义属性-->Crypto.prototype  /////////////////////////////////////////////////