// Navigator.js
Navigator = addEnv.toolsFunc.safeFunction(
    function Navigator() {
        throw new TypeError("Illegal constructor");
    }
);
navigator = {};
Object.setPrototypeOf(navigator, Navigator.prototype);

///////////////////////////////////////////  定义属性-->Navigator.prototype  /////////////////////////////////////////////////
(function () {
    let my_get_language = {
        language(){
            return addEnv.config.env.navigator.language;
        }
    }.language;
    let my_get_languages = {
        languages(){
            return addEnv.config.env.navigator.languages;
        }
    }.languages;
    let my_get_userAgent = {
        userAgent(){
            return addEnv.config.env.navigator.userAgent;
        }
    }.userAgent;
    let my_get_appVersion = {
        appVersion(){
            return addEnv.config.env.navigator.appVersion;
        }
    }.appVersion;
    let my_get_vendor = {
        vendor(){
            return addEnv.config.env.navigator.vendor;
        }
    }.vendor;
    let my_get_appName = {
        appName(){
            return addEnv.config.env.navigator.appName;
        }
    }.appName;
    let my_get_appCodeName = {
        appCodeName(){
            return addEnv.config.env.navigator.appCodeName;
        }
    }.appCodeName;
    let my_get_cookieEnabled = {
        cookieEnabled(){
            return addEnv.config.env.navigator.cookieEnabled;
        }
    }.cookieEnabled;
    let my_get_productSub = {
        productSub(){
            return addEnv.config.env.navigator.productSub;
        }
    }.productSub;
    let my_get_platform = {
        platform(){
            return addEnv.config.env.navigator.platform;
        }
    }.platform;
    let my_get_product = {
        product(){
            return addEnv.config.env.navigator.product;
        }
    }.product;
    let my_get_vendorSub = {
        vendorSub(){
            return addEnv.config.env.navigator.vendorSub;
        }
    }.vendorSub;
    let my_get_pdfViewerEnabled = {
        pdfViewerEnabled(){
            return addEnv.config.env.navigator.pdfViewerEnabled;
        }
    }.pdfViewerEnabled;
    let my_get_deviceMemory = {
        deviceMemory(){
            return addEnv.config.env.navigator.deviceMemory;
        }
    }.deviceMemory;
    let my_get_maxTouchPoints = {
        maxTouchPoints(){
            return addEnv.config.env.navigator.maxTouchPoints;
        }
    }.maxTouchPoints;
    
    Object.defineProperties(Navigator.prototype, {
        [Symbol.toStringTag]: {
            value: "Navigator",
            configurable: true
        },
        language: {
            get: addEnv.toolsFunc.safeFunction(my_get_language),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        languages: {
            get: addEnv.toolsFunc.safeFunction(my_get_languages),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        userAgent: {
            get: addEnv.toolsFunc.safeFunction(my_get_userAgent),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        appVersion: {
            get: addEnv.toolsFunc.safeFunction(my_get_appVersion),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        vendor: {
            get: addEnv.toolsFunc.safeFunction(my_get_vendor),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        appName: {
            get: addEnv.toolsFunc.safeFunction(my_get_appName),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        appCodeName: {
            get: addEnv.toolsFunc.safeFunction(my_get_appCodeName),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        cookieEnabled: {
            get: addEnv.toolsFunc.safeFunction(my_get_cookieEnabled),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        productSub: {
            get: addEnv.toolsFunc.safeFunction(my_get_productSub),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        platform: {
            get: addEnv.toolsFunc.safeFunction(my_get_platform),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        product: {
            get: addEnv.toolsFunc.safeFunction(my_get_product),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        vendorSub: {
            get: addEnv.toolsFunc.safeFunction(my_get_vendorSub),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        pdfViewerEnabled: {
            get: addEnv.toolsFunc.safeFunction(my_get_pdfViewerEnabled),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        deviceMemory: {
            get: addEnv.toolsFunc.safeFunction(my_get_deviceMemory),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        maxTouchPoints: {
            get: addEnv.toolsFunc.safeFunction(my_get_maxTouchPoints),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        
    });
})();
///////////////////////////////////////////  定义属性-->Navigator.prototype  /////////////////////////////////////////////////