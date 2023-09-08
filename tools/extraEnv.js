const extraLocation = () => {
    let body = ``;
    let getList = ["href", "origin", "protocol", "host", "hostname", "port", "pathname", "search", "hash"];
    getList.forEach(item => {
        if (typeof location[item] == "string") {
            body += `\t\t${item}: "${location[item]}",\n`;
        } else {
            body += `\t\t${item}: ${location[item]},\n`;
        }
    });
    let code = `location: {\n${body}\t},`;
    return code;
};


const extraNavigator = () => {
    let body = ``;
    let getList = [
        "vendorSub", "productSub", "vendor", "maxTouchPoints", "hardwareConcurrency", "cookieEnabled", "appCodeName", "appName", "appVersion", "platform", 
        "product", "userAgent", "language", "onLine", "webdriver", "deviceMemory"
    ];
    getList.forEach(item => {
        if (typeof navigator[item] == "string") {
            body += `\t\t${item}: "${navigator[item]}",\n`;
        } else {
            body += `\t\t${item}: ${navigator[item]},\n`;
        }
    });
    let code = `navigator: {\n${body}\t},`;
    return code;
};


const extraDocument = () => {
    let body = ``;
    let getList = ["URL", "referrer", "documentURI", "compatMode", "dir", "title", "designMode", "contentType", "inputEncoding", "domain", "characterSet", "charset", "hidden"];
    getList.forEach(item => {
        if (typeof document[item] == "string") {
            body += `\t\t${item}: "${document[item]}",\n`;
        } else {
            body += `\t\t${item}: ${document[item]},\n`;
        }
    });
    let code = `document: {\n${body}\t},`;
    return code;
};


const extraScreen = () => {
    let body = ``;
    let getList = ["availWidth", "availHeight", "width", "height", "colorDepth", "pixelDepth", "availLeft", "availTop"];
    getList.forEach(item => {
        if (typeof screen[item] == "string") {
            body += `\t\t${item}: "${screen[item]}",\n`;
        } else {
            body += `\t\t${item}: ${screen[item]},\n`;
        }
    });
    let code = `screen: {\n${body}\t},`;
    return code;
};


const extraWindow = () => {
    let body = ``;
    let getList = [
        "name", "status", "length", "innerWidth", "innerHeight", "scrollX", "pageXOffset", "scrollY", "pageYOffset", "screenX", "screenY", "outerWidth", 
        "outerHeight", "devicePixelRatio", "screenLeft", "screenTop", "isSecureContext", "credentialless"
    ];
    getList.forEach(item => {
        if (typeof window[item] == "string") {
            body += `\t\t${item}: "${window[item]}",\n`;
        } else {
            body += `\t\t${item}: ${window[item]},\n`;
        }
    });
    let code = `window: {\n${body}\t},`;
    return code;
};


const extraFuncProto = (obj, proto, name) => {
    let body = ``;
    let getList = Object.getOwnPropertyNames(proto);
    getList.forEach(key => {
        if (typeof obj[key] != "function" && typeof obj[key] != "object") {
            if (typeof obj[key] == "string") {
                body += `\t\t${key}: "${obj[key]}",\n`;
            } else {
                body += `\t\t${key}: ${obj[key]},\n`;
            }
        }
    });
    let code = `${name}: {\n${body}\t},`;
    return code;
}


const extraFunc = (obj, name) => {
    let body = ``;
    let getList = Object.getOwnPropertyNames(obj);
    getList.forEach(key => {
        if (typeof obj[key] != "function" && typeof obj[key] != "object") {
            if (typeof obj[key] == "string") {
                body += `\t\t${key}: "${obj[key]}",\n`;
            } else {
                body += `\t\t${key}: ${obj[key]},\n`;
            }
        }
    });
    let code = `${name}: {\n${body}\t},`;
    return code;
};


const extraEnv = () => {
    let locationCode = extraLocation();
    let navigatorCode = extraNavigator();
    let documentCode = extraDocument();
    let screenCode = extraScreen();
    let windowCode = extraWindow();
    let code = `myConfig.env = {  // 自定义浏览器环境\n\t${locationCode}\n\t${navigatorCode}\n\t${documentCode}\n\t${screenCode}\n\t${windowCode}\n};`
    return code;
};

console.log(extraEnv());