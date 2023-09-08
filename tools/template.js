/* 原型构造模板 */


const judge_new = (constr) => {
    /* 判断构造函数能否被new */
    try {
        new constr;
    } catch (error) {
        return `throw new TypeError("${error.message}")`;
    }
    return '';
}


const traversal = (obj) => {
    /* 遍历对象，返回其字符串形式 */
    let code = "";
    for (const key in obj) {
        switch (typeof obj[key]) {
            case "object":
                code += `${key}: addEnv.proxy(class ${key} {}),\n\t\t\t`;
                break;
            case "function":
                let funName = obj[key].name;
                if (obj[key].name.indexOf("set") != -1 || obj[key].name.indexOf("get") != -1) {
                    funName = funName.slice(4);
                }
                code += `${key}: addEnv.toolsFunc.safeFunction(\n\t\t\t\tfunction ${funName}() {\n\t\t\t\t\tdebugger;\n\t\t\t}\n\t\t\t),\n\t\t\t`;
                break;
            default:
                // string | boolean | undefined | number
                code += `${key}: ${obj[key]},\n\t\t\t`;
                break;
        }
    }
    return code;
}


const setAttr = (obj) => {
    let code = "";
    for (const key in obj) {
        if (key === "constructor") {
            continue;
        }
        code += `\n\t\t${key}: {\n\t\t\t${traversal(obj[key])}\n\t\t},\n`;
    }
    return code;
}


const extractAttr = (constr, str) => {
    /* 抽取对象的所有属性 */
    let attrObj =  Object.getOwnPropertyDescriptors(constr.prototype);
    let code = "";
    let trav = setAttr(attrObj);
    code += `\tObject.defineProperties(${str}.prototype, {\n\t\t[Symbol.toStringTag]: {\n\t\t\tvalue: "${constr.prototype[Symbol.toStringTag]}",\n\t\t\tconfigurable: true\n\t\t},\n\t${trav}\t});\n`;
    return `//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n(function () {\n${code}})();\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\ndebugger;`
}


const getTemplate = (constr, str) => {
    /* 获取模板字符串代码 */
    let comments = `// ${str}.js\n`;  // 注释
    let consFunc = `${str} = addEnv.toolsFunc.safeFunction(\n\tfunction ${str}() {\n\t\t${judge_new(constr)}\n\t}\n);\n`;  // 定义构造函数
    let setProto = `Object.setPrototypeOf(${str}.prototype, ${Object.getPrototypeOf(constr.prototype)[Symbol.toStringTag] ? Object.getPrototypeOf(constr.prototype)[Symbol.toStringTag] : "Object"}.prototype);\n\n`;  // 设置原型
    let attr = extractAttr(constr, str);
    return `${comments}${consFunc}${setProto}${attr}`;
}


try {
    console.log(getTemplate(EventTarget, "EventTarget"))
} catch (error) {
    console.log(error.message);
}