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
	Object.defineProperties(Screen.prototype, {
		[Symbol.toStringTag]: {
			value: "Screen",
			configurable: true
		},

        width: {
			get: addEnv.toolsFunc.safeFunction(
				function width() {
					return addEnv.config.env.screen.width;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

        height: {
			get: addEnv.toolsFunc.safeFunction(
				function height() {
					return addEnv.config.env.screen.height;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

        availWidth: {
			get: addEnv.toolsFunc.safeFunction(
				function availWidth() {
					return addEnv.config.env.screen.availWidth;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

        availHeight: {
			get: addEnv.toolsFunc.safeFunction(
				function availHeight() {
					return addEnv.config.env.screen.availHeight;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

        pixelDepth: {
			get: addEnv.toolsFunc.safeFunction(
				function pixelDepth() {
					return addEnv.config.env.screen.pixelDepth;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

        colorDepth: {
			get: addEnv.toolsFunc.safeFunction(
				function colorDepth() {
					return addEnv.config.env.screen.colorDepth;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

        availLeft: {
			get: addEnv.toolsFunc.safeFunction(
				function availLeft() {
					return addEnv.config.env.screen.availLeft;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

        availTop: {
			get: addEnv.toolsFunc.safeFunction(
				function availTop() {
					return addEnv.config.env.screen.availTop;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

        isExtended: {
			get: addEnv.toolsFunc.safeFunction(
				function isExtended() {
					return addEnv.config.env.screen.isExtended;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->Screen.prototype  /////////////////////////////////////////////////