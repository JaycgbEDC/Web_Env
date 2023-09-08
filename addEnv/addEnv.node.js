const fs = require('fs');
const tools = require(`${__dirname}/tools/tools.node.js`);
const html = require(`${__dirname}/browser/htmlElements/htmlElements.node.js`);
const algorithm = require(`${__dirname}/algorithm/algorithm.node.js`);


function getCode() {
    let code = "";
    code += tools.getCode();
    // 引入浏览器相关代码
    code += fs.readFileSync(`${__dirname}/browser/EventTarget.js`) + '\r\n\r\n\r\n';
    code += fs.readFileSync(`${__dirname}/browser/Crypto.js`) + '\r\n\r\n\r\n';
    code += fs.readFileSync(`${__dirname}/browser/XMLHttpRequestEventTarget.js`) + '\r\n\r\n\r\n';
    code += fs.readFileSync(`${__dirname}/browser/XMLHttpRequest.js`) + '\r\n\r\n\r\n';
    code += fs.readFileSync(`${__dirname}/browser/Event.js`) + '\r\n\r\n\r\n';
    code += fs.readFileSync(`${__dirname}/browser/UIEvent.js`) + '\r\n\r\n\r\n';
    code += fs.readFileSync(`${__dirname}/browser/KeyboardEvent.js`) + '\r\n\r\n\r\n';
    // 加载BOM环境（优于DOM加载）
    code += fs.readFileSync(`${__dirname}/browser/Window.js`) + '\r\n\r\n\r\n';
    code += fs.readFileSync(`${__dirname}/browser/Navigator.js`) + '\r\n\r\n\r\n';
    code += fs.readFileSync(`${__dirname}/browser/History.js`) + '\r\n\r\n\r\n';
    code += fs.readFileSync(`${__dirname}/browser/Screen.js`) + '\r\n\r\n\r\n';
    code += fs.readFileSync(`${__dirname}/browser/Location.js`) + '\r\n\r\n\r\n';
    code += fs.readFileSync(`${__dirname}/browser/Storage.js`) + '\r\n\r\n\r\n';
    // 加载HTML节点
    code += html.getCode();
    // 加载DOM环境
    code += fs.readFileSync(`${__dirname}/browser/Document.js`) + '\r\n\r\n\r\n';
    code += fs.readFileSync(`${__dirname}/browser/HTMLDocument.js`) + '\r\n\r\n\r\n';
    // 加载算法
    code += algorithm.getCode();
    // 引入用户自定义环境
    code += "debugger;\n";
    return code;
}


module.exports = {
    getCode
}