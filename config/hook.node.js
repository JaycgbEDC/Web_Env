/* hook的对象.js */
// 堆栈检测
const fs = require("fs");
const path = require('path');
const userConfig = require(`${__dirname}/../config/userConfig.node`);


const hookPath = path.resolve(__dirname, "../addEnv/hook");


function getCode() {
    let code  = '';
    let hookList = [];
    let hookConfig = userConfig.myConfig.hook;
    for (const item in hookConfig) {
        if (hookConfig[item]) {
            hookList.push(item);
        }
    };
    hookList.forEach(fileName => {
        code += fs.readFileSync(`${hookPath}/${fileName}.js`) + "\n\n";
    });
    return code;
};


module.exports = {
    getCode
};