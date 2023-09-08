/* 代码格式压缩（所有换行、空格删除）---> 便于打印输出 */
(function () {
    addEnv.toolsFunc.compressCode = function (string_js) {
        if (string_js.length >= 100) {
            let string = string_js.replace(/\r\n/g, "");
            string = string.replace(/\n/g, "");
            return string.replace(/\s/g, "").slice(0, 100) + "......";
        }
        return string_js
    };
})();