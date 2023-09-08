/* 输出对象的原型链 */
const printProto = (obj) => {
    let code = "";
    obj = Object.getPrototypeOf(obj);
    while (obj) {
        let name = obj[Symbol.toStringTag];
        if (!name && obj === Object.prototype) {
            name = "Object";
        }
        code += name + "--->";
        obj = Object.getPrototypeOf(obj);
    }
    return code + "null";
}

printProto();