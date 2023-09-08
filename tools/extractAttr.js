const funcList = [];
const attrList = ["name", "innerWidth", "innerHeight", "outerWidth", "outerHeight", "devicePixelRatio", "length", "status", "isSecureContext", "setTimeout", "setInterval", "clearInterval", "clearTimeout", "DeviceOrientationEvent", "DeviceMotionEvent", "top", "btoa", "atob", "eval", "window"];


const traversal = (obj) => {
    /* 遍历对象，返回其字符串形式 */
    let code = "";
    for (const key in obj) {
        switch (typeof obj[key]) {
            case "object":
                code += `${key}: addEnv.proxy(class ${key} {}),
            `;
                break;
            case "function":
                let funName = obj[key].name;
                if (obj[key].name.indexOf("set ") != -1 || obj[key].name.indexOf("get ") != -1) {
                    funName = "my_" + funName.slice(0, 3) + '_' + funName.slice(4);
                };
                funcList.push(funName);
                code += `${key}: addEnv.toolsFunc.safeFunction(${funName}),
            `;
                break;
            default:
                // string | boolean | undefined | number
                code += `${key}: ${obj[key]},
            `;
                break;
        }
    }
    return code;
}


const setAttr = (obj) => {
    let code = "";
    if (attrList.length) {
        for (const key of attrList) {
            code += `${key}: {
            ${traversal(obj[key])}
        },
        `;
        }
    } else {
        for (const key in obj) {
            if (key === "constructor") {
                continue;
            }
            code += `${key}: {
            ${traversal(obj[key])}
        },
        `;
        }
    }
    return code;
}


const extractAttr = (obj, str) => {
    /* 抽取对象的所有属性 */
    let attrObj =  Object.getOwnPropertyDescriptors(obj);
    let proCode = "";
    let funcCode = "";
    let trav = setAttr(attrObj);
    funcList.forEach(item => {
        funcName = item;
        if (item.indexOf("my_") != -1) {
            funcName = item.slice(7);
        }
        funcCode += `let ${item} = {
        ${funcName}(){
            debugger;
        }
    }.${funcName};
    `;
    });
    proCode += `Object.defineProperties(${str}.prototype, {
        ${trav}
    });
`;
    return `//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
(function () {
    ${funcCode}
    ${proCode}
})();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

debugger;`
}

console.log(extractAttr(window, "window"))