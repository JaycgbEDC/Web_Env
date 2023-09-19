// HTMLDocument.js
HTMLDocument = addEnv.toolsFunc.safeFunction(
    function HTMLDocument() {
        throw new TypeError("Illegal constructor")
    }
);
Object.setPrototypeOf(HTMLDocument, Document);
Object.setPrototypeOf(HTMLDocument.prototype, Document.prototype);
document = {};
Object.setPrototypeOf(document, HTMLDocument.prototype);

///////////////////////////////////////////  定义属性-->HTMLDocument.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(HTMLDocument.prototype, {
		[Symbol.toStringTag]: {
			value: "HTMLDocument",
			configurable: true
		},


    });
})();
///////////////////////////////////////////  定义属性-->HTMLDocument.prototype  /////////////////////////////////////////////////

///////////////////////////////////////////  定义属性-->document  /////////////////////////////////////////////////
(function () {
    let my_get_location = {
        location(){
            return window.location;
        }
    }.location;
    let my_set_location = {
        location(){
            debugger;
        }
    }.location;
    
    Object.defineProperties(document, {
        location: {
            get: addEnv.toolsFunc.safeFunction(my_get_location),
            set: addEnv.toolsFunc.safeFunction(my_set_location),
            enumerable: true,
            configurable: false,
            
        },
        
    });
})();
///////////////////////////////////////////  定义属性-->document  /////////////////////////////////////////////////