/* 需要代理的对象.js */
function getCode() {
    let proxyObj = [
        "window", "crypto", "history", "document", "location", "navigator", "screen", "Storage", "localStorage",
        "eval"
    ];
    let code = '';
    proxyObj.forEach(item => {
        code += `${item} = addEnv.toolsFunc.proxy(${item}, "${item}");\n`
    });
    return code + "\n\n";
};


module.exports = {
    getCode
};