// Location.js
Location = addEnv.toolsFunc.safeFunction(
    function Location() {
        throw new TypeError("Illegal constructor");
    }
);
location = {};
Object.setPrototypeOf(location, Location.prototype);

///////////////////////////////////////////  定义属性-->Location.prototype  /////////////////////////////////////////////////
Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {
        value: "Location",
        configurable: true
    }
});
///////////////////////////////////////////  定义属性-->Location.prototype  /////////////////////////////////////////////////

///////////////////////////////////////////  定义属性-->location  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(location, {
        href: {
			get: addEnv.toolsFunc.safeFunction(
				function href() {
                    return addEnv.config.env.location.href;
				}
			),
			set: addEnv.toolsFunc.safeFunction(
				function href() {
					debugger;
				}
			),
			enumerable: true,
			configurable: false,
			
		},

        origin: {
			get: addEnv.toolsFunc.safeFunction(
				function origin() {
                    return addEnv.config.env.location.origin;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: false,
			
		},

		assign: {
			value: addEnv.toolsFunc.safeFunction(
                function assign() {
                    debugger;
                }
            ),
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

        host: {
			get: addEnv.toolsFunc.safeFunction(
                function host() {
                    return addEnv.config.env.location.host;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function host() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: false,
			
		},

        hostname: {
			get: addEnv.toolsFunc.safeFunction(
				function hostname() {
					return addEnv.config.env.location.hostname;
				}
			),
			set: addEnv.toolsFunc.safeFunction(
				function hostname() {
					debugger;
				}
			),
			enumerable: true,
			configurable: false,
			
		},

        pathname: {
			get: addEnv.toolsFunc.safeFunction(
				function pathname() {
					return addEnv.config.env.location.pathname;
				}
			),
			set: addEnv.toolsFunc.safeFunction(
				function pathname() {
					debugger;
				}
			),
			enumerable: true,
			configurable: false,
			
		},

        search: {
			get: addEnv.toolsFunc.safeFunction(
				function search() {
					return addEnv.config.env.location.search;
				}
			),
			set: addEnv.toolsFunc.safeFunction(
				function search() {
					debugger;
				}
			),
			enumerable: true,
			configurable: false,
			
		},

        hash: {
			get: addEnv.toolsFunc.safeFunction(
				function hash() {
					return addEnv.config.env.location.hash;
				}
			),
			set: addEnv.toolsFunc.safeFunction(
				function hash() {
					debugger;
				}
			),
			enumerable: true,
			configurable: false,
			
		},

        port: {
			get: addEnv.toolsFunc.safeFunction(
				function port() {
					return addEnv.config.env.location.port;
				}
			),
			set: addEnv.toolsFunc.safeFunction(
				function port() {
					debugger;
				}
			),
			enumerable: true,
			configurable: false,
			
		},

        protocol: {
			get: addEnv.toolsFunc.safeFunction(
				function protocol() {
					return addEnv.config.env.location.protocol;
				}
			),
			set: addEnv.toolsFunc.safeFunction(
				function protocol() {
					debugger;
				}
			),
			enumerable: true,
			configurable: false,
			
		},

		reload: {
			value: addEnv.toolsFunc.safeFunction(
                function reload() {
                    debugger;
                }
            ),
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		replace: {
			value: addEnv.toolsFunc.safeFunction(
                function replace() {
                    debugger;
                }
            ),
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		toString: {
			value: addEnv.toolsFunc.safeFunction(
                function toString() {
                    return addEnv.config.env.location.href;
                }
            ),
			writable: false,
			enumerable: true,
			configurable: false,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->location  /////////////////////////////////////////////////