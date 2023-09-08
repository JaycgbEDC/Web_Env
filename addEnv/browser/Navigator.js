// Navigator.js
Navigator = addEnv.toolsFunc.safeFunction(
    function Navigator() {
        throw new TypeError("Illegal constructor");
    }
);
navigator = {};
Object.setPrototypeOf(navigator, Navigator.prototype);

///////////////////////////////////////////  定义属性-->Navigator.prototype  /////////////////////////////////////////////////
Object.defineProperties(Navigator.prototype, {
    [Symbol.toStringTag]: {
        value: "Navigator",
        configurable: true
    },

    language: {
        get: addEnv.toolsFunc.safeFunction(
            function language() {
                return addEnv.config.env.navigator.language;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    languages: {
        get: addEnv.toolsFunc.safeFunction(
            function languages() {
                return addEnv.config.env.navigator.languages;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    userAgent: {
        get: addEnv.toolsFunc.safeFunction(
            function userAgent() {
                return addEnv.config.env.navigator.userAgent;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    appVersion: {
        get: addEnv.toolsFunc.safeFunction(
            function appVersion() {
                return addEnv.config.env.navigator.appVersion;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    vendor: {
        get: addEnv.toolsFunc.safeFunction(
            function vendor() {
                return addEnv.config.env.navigator.vendor;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    appName: {
        get: addEnv.toolsFunc.safeFunction(
            function appName() {
                return addEnv.config.env.navigator.appName;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    appCodeName: {
        get: addEnv.toolsFunc.safeFunction(
            function appCodeName() {
                return addEnv.config.env.navigator.appCodeName;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    cookieEnabled: {
        get: addEnv.toolsFunc.safeFunction(
            function cookieEnabled() {
                return addEnv.config.env.navigator.cookieEnabled;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    productSub: {
        get: addEnv.toolsFunc.safeFunction(
            function productSub() {
                return addEnv.config.env.navigator.productSub;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    platform: {
        get: addEnv.toolsFunc.safeFunction(
            function platform() {
                return addEnv.config.env.navigator.platform;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    product: {
        get: addEnv.toolsFunc.safeFunction(
            function product() {
                return addEnv.config.env.navigator.product;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    vendorSub: {
        get: addEnv.toolsFunc.safeFunction(
            function vendorSub() {
                return addEnv.config.env.navigator.vendorSub;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    pdfViewerEnabled: {
        get: addEnv.toolsFunc.safeFunction(
            function pdfViewerEnabled() {
                return addEnv.config.env.navigator.pdfViewerEnabled;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    deviceMemory: {
        get: addEnv.toolsFunc.safeFunction(
            function deviceMemory() {
                return addEnv.config.env.navigator.deviceMemory;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    maxTouchPoints: {
        get: addEnv.toolsFunc.safeFunction(
            function maxTouchPoints() {
                return addEnv.config.env.navigator.maxTouchPoints;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },
});
///////////////////////////////////////////  定义属性-->Navigator.prototype  /////////////////////////////////////////////////