// Document.js
Document = addEnv.toolsFunc.safeFunction(
    function Document() {

    }
);
Object.setPrototypeOf(Document, Node);
Object.setPrototypeOf(Document.prototype, Node.prototype);

///////////////////////////////////////////  定义属性-->Document.prototype  /////////////////////////////////////////////////
Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    },

    cookie: {
        get: addEnv.toolsFunc.safeFunction(
            function cookie() {
                let temp = "";
                let comma = "";
                let flag = 0;
                for (const key in addEnv.memory.cookie) {
                    if (flag > 0) {
                        comma = "; ";
                    };
                    flag = 1;
                    temp += `${comma}${key}=${addEnv.memory.cookie[key]}`;
                };
                console.log(`Document_cookie_get `, `cookie -> ${temp}`);
                return temp;
            }
        ),
        set: addEnv.toolsFunc.safeFunction(
            function cookie() {
                let cookieValue = arguments[0];
                let cookieSplit = cookieValue.split('; ');
                let expiresTime = null;
                cookieSplit.forEach(item => {
                    if (item.indexOf('expires') != -1) {
                        expiresTime = item.split('=')[1];
                    }
                });
                if (expiresTime) {
                    let expTime = new Date(expiresTime).getTime();
                    let curTime = new Date().getTime();
                    if (expTime < curTime) {
                        let item = cookieSplit[0].split("=");
                        let k = item[0].trim();
                        if (addEnv.memory.cookie[k]) {
                            delete addEnv.memory.cookie[k];
                        };
                        console.log(`Document_cookie_set -> arg -> `, arguments[0], `过期时间小于当前时间,不进行设置并且重置已有cookie`);
                        return arguments[0];
                    }
                };
                let index = cookieSplit[0].indexOf("=");
                addEnv.memory.cookie[cookieSplit[0].substring(0, index)] = cookieSplit[0].substring(index + 1);
                console.log(`Document_cookie_set -> arg -> `, arguments[0]);
                console.log(`Document_cookie_set -> -> 过期时间 -> `, expiresTime);
                console.log(`Document_cookie_set -> -> cookieValue -> `, cookieSplit[0]);
                console.log(`当前cookie 为 ->`, document.cookie);
                return arguments[0];
            }
        ),
        enumerable: true,
        configurable: true,
        
    },

    URL: {
        get: addEnv.toolsFunc.safeFunction(
            function URL() {
                return addEnv.config.env.document.URL;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    referrer: {
        get: addEnv.toolsFunc.safeFunction(
            function referrer() {
                return addEnv.config.env.document.referrer;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    documentURI: {
        get: addEnv.toolsFunc.safeFunction(
            function documentURI() {
                return addEnv.config.env.document.documentURI;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    compatMode: {
        get: addEnv.toolsFunc.safeFunction(
            function compatMode() {
                return addEnv.config.env.document.compatMode;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    dir: {
        get: addEnv.toolsFunc.safeFunction(
            function dir() {
                return addEnv.config.env.document.dir;
            }
        ),
        set: addEnv.toolsFunc.safeFunction(
            function dir() {
                debugger;
            }
        ),
        enumerable: true,
        configurable: true,
        
    },

    title: {
        get: addEnv.toolsFunc.safeFunction(
            function title() {
                return addEnv.config.env.document.title;
            }
        ),
        set: addEnv.toolsFunc.safeFunction(
            function title() {
                debugger;
            }
        ),
        enumerable: true,
        configurable: true,
        
    },

    designMode: {
        get: addEnv.toolsFunc.safeFunction(
            function designMode() {
                return addEnv.config.env.document.designMode;
            }
        ),
        set: addEnv.toolsFunc.safeFunction(
            function designMode() {
                debugger;
            }
        ),
        enumerable: true,
        configurable: true,
        
    },

    contentType: {
        get: addEnv.toolsFunc.safeFunction(
            function contentType() {
                return addEnv.config.env.document.contentType;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    inputEncoding: {
        get: addEnv.toolsFunc.safeFunction(
            function inputEncoding() {
                return addEnv.config.env.document.inputEncoding;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    domain: {
        get: addEnv.toolsFunc.safeFunction(
            function domain() {
                return addEnv.config.env.document.domain;
            }
        ),
        set: addEnv.toolsFunc.safeFunction(
            function domain() {
                debugger;
            }
        ),
        enumerable: true,
        configurable: true,
        
    },

    characterSet: {
        get: addEnv.toolsFunc.safeFunction(
            function characterSet() {
                return addEnv.config.env.document.characterSet;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    charset: {
        get: addEnv.toolsFunc.safeFunction(
            function charset() {
                return addEnv.config.env.document.charset;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    hidden: {
        get: addEnv.toolsFunc.safeFunction(
            function hidden() {
                return addEnv.config.env.document.hidden;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    getElementById: {
        value: addEnv.toolsFunc.safeFunction(
            function getElementById() {
                debugger;
            }
        ),
        writable: true,
        enumerable: true,
        configurable: true,
        
    },

    getElementsByTagName: {
        value: addEnv.toolsFunc.safeFunction(
            function getElementsByTagName() {
                debugger;
            }
        ),
        writable: true,
        enumerable: true,
        configurable: true,
        
    },

    createElement: {
        value: addEnv.toolsFunc.safeFunction(
            function createElement(tagName) {
                debugger;
                tagName = tagName.toLowerCase();
                if (addEnv.memory.htmlelements[tagName] == undefined) {
                    debugger;
                } else {
                    let tagElement = addEnv.memory.htmlelements[tagName]();
                    return addEnv.proxy(tagElement);
                }
            }
        ),
        writable: true,
        enumerable: true,
        configurable: true,
        
    },
});
///////////////////////////////////////////  定义属性-->Document.prototype  /////////////////////////////////////////////////