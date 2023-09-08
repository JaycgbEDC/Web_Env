(() => {
    /* setInterval hook--->防止进入无限循环 */
    let setInterval_ = setInterval;
    setInterval = function () {
        console.log("hook setInterval!");
    };
    setInterval.toString = function () {
        console.log("正在检测setInterval.toString");
        return setInterval_.toString()
    };
})();