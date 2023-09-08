// HTMLElement.js
HTMLElement = addEnv.toolsFunc.safeFunction(
    function HTMLElement() {
        throw new TypeError("Illegal constructor");
    }
);
Object.setPrototypeOf(HTMLElement, Element);
Object.setPrototypeOf(HTMLElement.prototype, Element.prototype);

///////////////////////////////////////////  定义属性-->HTMLElement.prototype  /////////////////////////////////////////////////
Object.defineProperties(HTMLElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLElement",
        configurable: true
    }
});
///////////////////////////////////////////  定义属性-->HTMLElement.prototype  /////////////////////////////////////////////////