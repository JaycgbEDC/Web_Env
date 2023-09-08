/* node执行代码入口 */
const fs = require("fs");
const path = require('path');
const myXlsx = require("xlsx-js-style");
const {VM, VMScript} = require('vm2');
const net = require('net');


let userPath = path.resolve(__dirname, "../config");
let runPath = path.resolve(__dirname, "../run");


const toolsCode = require(`${__dirname}/tools.node.js`);
const browserCode = require(`${__dirname}/browser.node.js`);
const algorithmCode = require(`${userPath}/algorithm.node.js`);
const UserConfigCode = require(`${userPath}/userConfig.node`);
const proxyObjCode = require(`${userPath}/proxyObj.node`);
const hookCode = require(`${userPath}/hook.node`)
const runCode = require(`${__dirname}/run.node`);


const sandbox = {
    myXlsx: myXlsx,
    setInterval: setInterval,
    setTimeout: setTimeout,
    clearInterval: clearInterval,
    clearTimeout: clearTimeout,
    myGetData: {}
};


function debuggerCode() {
    /* 调试专用 */
    const envCode = `${toolsCode.getCode()}${browserCode.getCode()}${algorithmCode.getCode()}${UserConfigCode.getCode()}${proxyObjCode.getCode()}${hookCode.getCode()}`;
    const jsCode = `${runCode.getCode()}`;
    
    fs.writeFileSync(`${runPath}/outputEnv/env.js`, envCode);
    
    const vm = new VM({sandbox: sandbox});
    
    const loadVmEnv = new VMScript(envCode, "框架环境.js");
    vm.run(loadVmEnv);
    debugger;
    
    const script = new VMScript(jsCode, "网站js.js");
    vm.run(script);
    debugger;
};


function productCode() {
    /* 生产专用 */
    const envCode = fs.readFileSync(`${runPath}/outputEnv/env.js`);
    const runProductCode = `${runCode.getCode()}`;
    const vm = new VM({sandbox: sandbox});
    const loadVmEnv = new VMScript(envCode);
    vm.run(loadVmEnv);
    const server = net.createServer(function (socket) {
        socket.on("data", function (data) {
            const readSize = socket.bytesRead;
            data = data.toString();
            console.log("接收到数据为：" + data, "；累计接收的数据长度为：" + readSize);
            if (data) {
                sandbox.myGetData.page = parseInt(JSON.parse(data).page);
                sandbox.myGetData.t = parseInt(JSON.parse(data).t);
                let script = new VMScript(runProductCode);
                vm.run(script);
                
                socket.write(JSON.stringify(sandbox.myGetData), function () {
                    const writeSize = socket.bytesWritten;
                    console.log(`数据发送成功，数据为：${sandbox.myGetData.toString()}，累计发送的数据长度为：${writeSize}`);
                });
            }
        });
    
        socket.on("end", () => {
            console.log('客户端断开连接');
        });
    
        socket.on('error', (error) => {
            console.error('Socket error:', error.message);
            socket.destroy();
          });
    });
    server.listen(8080, "localhost");
    
    server.on('connection', function (socket) {
        /* 监听connection事件 */
        console.log('有新的客户端接入');
    });
    
    server.on('listening', function () {
        /* 设置监听时的回调函数 */
        console.log('服务正在监听中。。。');
        console.log("服务器监听的地址类型是：", server.address());
    });
    
    server.on('close', function () {
        /* 设置关闭时的回调函数 */
        console.log('服务已关闭');
    });
    
    server.on('error', function (err) {
        /* 设置出错时的回调函数 */
        console.log('服务运行异常', err);
    });
};


function entryCode() {
    let isTest = UserConfigCode.myConfig.isTest;
    if (isTest) {
        debuggerCode();
    } else {
        productCode()
    };
};


module.exports = {
    entryCode
};