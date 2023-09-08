/* addEnv-tools代码引入 */
const fs = require("fs");
const path = require('path');


let toolsPath = path.resolve(__dirname, "../addEnv/tools");
let fileNameList = [
    "vm_init.js", "vm_safeFunction.js", "vm_proxy.js", "vm_proxyLog.js", "vm_compressCode.js"
];


function getCode() {
    code = '';
    fileNameList.forEach(fileName => {
        code += fs.readFileSync(`${toolsPath}/${fileName}`) + '\r\n\r\n\r\n';
    });
    return code;
}


module.exports = {
    getCode
}