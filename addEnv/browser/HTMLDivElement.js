HTMLDivElement = addEnv.toolsFunc.safeFunction(
    function HTMLDivElement() {
        throw new TypeError("Illegal constructor");
    }
);
Object.setPrototypeOf(HTMLDivElement, HTMLElement);
Object.setPrototypeOf(HTMLDivElement.prototype, HTMLElement.prototype);

///////////////////////////////////////////  定义属性-->HTMLDivElement.prototype  /////////////////////////////////////////////////
Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLDivElement",
        configurable: true
    }
});
///////////////////////////////////////////  定义属性-->HTMLDivElement.prototype  /////////////////////////////////////////////////

addEnv.memory.htmlElements["div"] = function () {
    /* 用户创建div */
    var div = new (function () {});
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    div.align = "";
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    Object.setPrototypeOf(div, HTMLDivElement.prototype);
    return div;
};