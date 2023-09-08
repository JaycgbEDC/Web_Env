(() => {
    /* hook掉随机值，比如Date、Math，方便调试 */
    Date.now = function now() { 
        console.log("hook Date.now");
        return 1692702146230;
    };
    Date.parse = function parse() { 
        console.log("hook Date.parse");
        return 1692702146230;
    };
    Date.prototype.valueOf = function () { 
        console.log("hook Date.prototype.valueOf");
        return 1692702146230;
    };
    Date.prototype.getTime = function () { 
        console.log("hook Date.prototype.getTime");
        return 1692702146230;
    };
    Date.prototype.toString = function () { 
        console.log("hook Date.prototype.toString");
        return 1692702146230;
    };

    Math.random = function random() { 
        console.log("hook Math.random");
        return 0.08636862211354912;
    };
})();