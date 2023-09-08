(() => {
    /* 正则表达式hook--->防代码格式化检测导致的内存泄露 */
    var _RegExp = RegExp;
    RegExp.prototype.test = addEnv.toolsFunc.safeFunction(function test() {
        console.log(`正则表达式test, 参数: ${arguments[0]}`);
        return true;
    });
    RegExp = function(pattern, modifiers) {
        // debugger;
        console.log("进入RexExp函数，警惕格式化检测！");
        console.log(`pattern：${pattern}, flags: ${modifiers}`);
        if (pattern == decodeURIComponent("%5Cw%2B%20*%5C(%5C)%20*%7B%5Cw%2B%20*%5B'%7C%22%5D.%2B%5B'%7C%22%5D%3B%3F%20*%7D") || pattern == decodeURIComponent("function%20*%5C(%20*%5C)") || pattern == decodeURIComponent("%5C%2B%5C%2B%20*(%3F%3A_0x(%3F%3A%5Ba-f0-9%5D)%7B4%2C6%7D%7C(%3F%3A%5Cb%7C%5Cd)%5Ba-z0-9%5D%7B1%2C4%7D(%3F%3A%5Cb%7C%5Cd))") || pattern == decodeURIComponent("(%5C%5C%5Bx%7Cu%5D(%5Cw)%7B2%2C4%7D)%2B")) {
            pattern = '.*?';
            // debugger;
            console.log("发现sojson检测特征，已帮您处理。");
        };
        if (modifiers) {
            // debugger;
            console.log("疑似最后一个检测...已帮您处理。");
            return _RegExp(pattern, modifiers);
        } else {
            // debugger;
            return _RegExp(pattern);
        }
    };
    RegExp.toString = function() {
        console.log("正在检测RegExp.toString");
        return _RegExp.toString();
    };
})();