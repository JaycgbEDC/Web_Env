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
	Object.defineProperties(Storage.prototype, {
		[Symbol.toStringTag]: {
			value: "Storage",
			configurable: true
		},

		clear: {
			value: addEnv.toolsFunc.safeFunction(
                function clear() {
                    for (const key of Object.keys(this)) {
                        delete this[key];
                    }
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		getItem: {
			value: addEnv.toolsFunc.safeFunction(
                function getItem(key) {
                    if (this[key]) {
                        return this[key];
                    }
                    return null;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		key: {
			value: addEnv.toolsFunc.safeFunction(
                function key(index) {
                    if (Object.keys(this)[index]) {
                        return Object.keys(this)[index];
                    }
                    return null;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		removeItem: {
			value: addEnv.toolsFunc.safeFunction(
                function removeItem(key) {
                    if (this[key]) {
                        delete this[key];
                    }
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		setItem: {
			value: addEnv.toolsFunc.safeFunction(
                function setItem(key, value) {
                    this[key] = value;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

        length: {
			get: addEnv.toolsFunc.safeFunction(
                function length() {
                    return Object.keys(this).length;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->Storage.prototype  /////////////////////////////////////////////////