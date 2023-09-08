(() => {
    /* 防构造函数无限debugger */
    Function.prototype.constructor_ = Function.prototype.constructor;
    Function.prototype.constructor = addEnv.toolsFunc.safeFunction(function Function() {
        console.log(`进入Function.prototype.constructor，警惕无限debugger，参数为：${arguments[0]}`);
        if(arguments[0] == "debugger") {
            console.log("检测到Function.prototype.constructor的debugger，已返回空函数");
            return function (){};
        }
        return Function.prototype.constructor_(a);
    });
})();