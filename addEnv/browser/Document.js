// Document.js
Document = addEnv.toolsFunc.safeFunction(
    function Document() {

    }
);
Object.setPrototypeOf(Document, Node);
Object.setPrototypeOf(Document.prototype, Node.prototype);

///////////////////////////////////////////  定义属性-->Document.prototype  /////////////////////////////////////////////////
(function () {
    let my_get_cookie = {
        cookie(){
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
    }.cookie;
    let my_set_cookie = {
        cookie(){
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
    }.cookie;
    let my_get_URL = {
        URL(){
            return addEnv.config.env.document.URL;
        }
    }.URL;
    let my_get_referrer = {
        referrer(){
            return addEnv.config.env.document.referrer;
        }
    }.referrer;
    let my_get_documentURI = {
        documentURI(){
            return addEnv.config.env.document.documentURI;
        }
    }.documentURI;
    let my_get_compatMode = {
        compatMode(){
            return addEnv.config.env.document.compatMode;
        }
    }.compatMode;
    let my_get_dir = {
        dir(){
            return addEnv.config.env.document.dir;
        }
    }.dir;
    let my_set_dir = {
        dir(){
            debugger;
        }
    }.dir;
    let my_get_title = {
        title(){
            return addEnv.config.env.document.title;
        }
    }.title;
    let my_set_title = {
        title(){
            debugger;
        }
    }.title;
    let my_get_designMode = {
        designMode(){
            return addEnv.config.env.document.designMode;
        }
    }.designMode;
    let my_set_designMode = {
        designMode(){
            debugger;
        }
    }.designMode;
    let my_get_contentType = {
        contentType(){
            return addEnv.config.env.document.contentType;
        }
    }.contentType;
    let my_get_inputEncoding = {
        inputEncoding(){
            return addEnv.config.env.document.inputEncoding;
        }
    }.inputEncoding;
    let my_get_domain = {
        domain(){
            return addEnv.config.env.document.domain;
        }
    }.domain;
    let my_set_domain = {
        domain(){
            debugger;
        }
    }.domain;
    let my_get_characterSet = {
        characterSet(){
            return addEnv.config.env.document.characterSet;
        }
    }.characterSet;
    let my_get_charset = {
        charset(){
            return addEnv.config.env.document.charset;
        }
    }.charset;
    let my_get_hidden = {
        hidden(){
            return addEnv.config.env.document.hidden;
        }
    }.hidden;
    let getElementById = {
        getElementById(){
            debugger;
        }
    }.getElementById;
    let getElementsByTagName = {
        getElementsByTagName(){
            debugger;
        }
    }.getElementsByTagName;
    let createElement = {
        createElement(){
            debugger;
            tagName = tagName.toLowerCase();
            if (addEnv.memory.htmlelements[tagName] == undefined) {
                debugger;
            } else {
                let tagElement = addEnv.memory.htmlelements[tagName]();
                return addEnv.proxy(tagElement);
            }
        }
    }.createElement;

    Object.defineProperties(Document.prototype, {
        [Symbol.toStringTag]: {
            value: "Document",
            configurable: true
        },

        cookie: {
            get: addEnv.toolsFunc.safeFunction(my_get_cookie),
            set: addEnv.toolsFunc.safeFunction(my_set_cookie),
            enumerable: true,
            configurable: true,
            
        },
        URL: {
            get: addEnv.toolsFunc.safeFunction(my_get_URL),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        referrer: {
            get: addEnv.toolsFunc.safeFunction(my_get_referrer),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        documentURI: {
            get: addEnv.toolsFunc.safeFunction(my_get_documentURI),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        compatMode: {
            get: addEnv.toolsFunc.safeFunction(my_get_compatMode),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        dir: {
            get: addEnv.toolsFunc.safeFunction(my_get_dir),
            set: addEnv.toolsFunc.safeFunction(my_set_dir),
            enumerable: true,
            configurable: true,
            
        },
        title: {
            get: addEnv.toolsFunc.safeFunction(my_get_title),
            set: addEnv.toolsFunc.safeFunction(my_set_title),
            enumerable: true,
            configurable: true,
            
        },
        designMode: {
            get: addEnv.toolsFunc.safeFunction(my_get_designMode),
            set: addEnv.toolsFunc.safeFunction(my_set_designMode),
            enumerable: true,
            configurable: true,
            
        },
        contentType: {
            get: addEnv.toolsFunc.safeFunction(my_get_contentType),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        inputEncoding: {
            get: addEnv.toolsFunc.safeFunction(my_get_inputEncoding),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        domain: {
            get: addEnv.toolsFunc.safeFunction(my_get_domain),
            set: addEnv.toolsFunc.safeFunction(my_set_domain),
            enumerable: true,
            configurable: true,
            
        },
        characterSet: {
            get: addEnv.toolsFunc.safeFunction(my_get_characterSet),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        charset: {
            get: addEnv.toolsFunc.safeFunction(my_get_charset),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        hidden: {
            get: addEnv.toolsFunc.safeFunction(my_get_hidden),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        getElementById: {
            value: addEnv.toolsFunc.safeFunction(getElementById),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        getElementsByTagName: {
            value: addEnv.toolsFunc.safeFunction(getElementsByTagName),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        createElement: {
            value: addEnv.toolsFunc.safeFunction(createElement),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        
    });
})();
///////////////////////////////////////////  定义属性-->Document.prototype  /////////////////////////////////////////////////