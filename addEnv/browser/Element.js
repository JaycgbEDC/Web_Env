// Element.js
Element = addEnv.toolsFunc.safeFunction(
    function Element() {
        throw new TypeError("Illegal constructor");
    }
);
Object.setPrototypeOf(Element, Node);
Object.setPrototypeOf(Element.prototype, Node.prototype);

///////////////////////////////////////////  定义属性-->Element.prototype  /////////////////////////////////////////////////
Object.defineProperties(Element.prototype, {
    [Symbol.toStringTag]: {
        value: "Element",
        configurable: true
    }
});
///////////////////////////////////////////  定义属性-->Element.prototype  /////////////////////////////////////////////////