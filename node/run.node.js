/* run代码引入 */
const fs = require("fs");
const path = require('path');
const userConfig = require(`${__dirname}/../config/userConfig.node`);


let runPath = path.resolve(__dirname, "../run");
let exeJsNameList = userConfig.myConfig.exeJsName;


function getCode() {
    let code = 'addEnv.memory.proxyLog = [];\n\n\n';
    exeJsNameList.forEach(fileName => {
        code += fs.readFileSync(`${runPath}/exeJs/${fileName}`) + '\r\n\r\n\r\n';
    });
    code += `if (addEnv.config.proxy){
    addEnv.toolsFunc.expProxyLog();
    if (addEnv.config.printLog) {
        addEnv.toolsFunc.printLog();
    }
};\n`;
    return code + "debugger;";
}


module.exports = {
    getCode
}