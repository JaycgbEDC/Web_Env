/* 初始化.js */
addEnv = {
    toolsFunc: {},
    config: {},
    memory: {}
};

addEnv.config = {
    proxy: true,
    printLog: true,
    env: {
        location: {
            href:"",
            origin:"",
            host:"",
            hostname:"",
            pathname:"",
            search:"",
            hash:"",
            port:"",
            protocol:"",
        },
        navigator: {
            language:"zh-CN",
            languages:['zh-CN', 'en', 'en-GB', 'en-US'],
            userAgent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.203",
            appVersion:"5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.203",
            vendor:"Google Inc.",
            appName:"Netscape",
            appCodeName:"Mozilla",
            cookieEnabled:true,
            productSub:"20030107",
            platform:'Win32',
            product:'Gecko',
            vendorSub:"",
            pdfViewerEnabled: true,
            deviceMemory:8,
            maxTouchPoints:0
        },
        document: {
            URL:"",
            referrer:"",
            documentURI:"",
            compatMode:"CSS1Compat",
            dir:"",
            title:'',
            designMode:"off",
            contentType:"text/html",
            inputEncoding:"UTF-8",
            domain:"",
            characterSet:"UTF-8",
            charset:"UTF-8",
            hidden:false,
        },
        screen: {
            width:1920,
            height:1080,
            availWidth:1920,
            availHeight:1032,
            pixelDepth:24,
            colorDepth:24,
            availLeft:0,
            availTop:0,
            isExtended: false,
        },
        window: {
            name:"",
            innerWidth:1920,
            innerHeight:929,
            outerWidth:1440,
            outerHeight:920,
            devicePixelRatio:1,
            length:0,
            status:"",
            isSecureContext:true,
        }
    }
};

addEnv.memory = {
    htmlElements: {},  // 所有的html节点元素存放位置
    listeners: {},  // 所有事件存放位置
    proxyLog: [],  // 代理日志统一存放点
    storage: {},  // localStorage 全局存放点
    cookie: {},  // cookie存放位置
    timer: {0: null},  // 定时器id对象
};

top = this;
parent = this;
self = this;

(function() {
    /* 删除node属性，防检测 */
    let del_attribute = ['global', 'SharedArrayBuffer', 'GLOBAL', 'root', 'VMError', 'Buffer', 'KNBCore'];
    del_attribute.forEach(item => {
        delete this[item];
    });
    this.VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL && Object.defineProperty(this, 'VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL', {
        enumerable: false,
        configurable: false,
        writable: false
    });
})();


// 主要用来保护伪造的函数，使其更难被识别
(() => {
    'use strict';
    // 取原型链上的toString
    const $toString = Function.toString;
    // 取方法名 reload
    const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)));
    const myToString = function () {
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this);
    };

    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            "enumerable": false,  // 不可枚举
            "configurable": true, // 可配置
            "writable": true, // 可写
            "value": value
        })
    }

    delete Function.prototype['toString'];  // 删除原型链上的toString
    set_native(Function.prototype, "toString", myToString);  // 自定义一个getter方法，其实就是一个hook
    set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] }");  //套个娃，保护一下我们定义的toString，避免js对toString再次toString，如：location.reload.toString.toString() 否则就暴露了
    this.addEnv.toolsFunc.safeFunction = (func) => {
        set_native(func, myFunction_toString_symbol, `function ${myFunction_toString_symbol,func.name || ''}() { [native code] }`);
        return func;
    };  //导出函数到globalThis，更改原型上的toSting为自己的toString。这个方法相当于过掉func的toString检测点
}).call(this);


// 框架代理功能
(function () {
    addEnv.toolsFunc.proxy = function (obj, objName) {
        if (addEnv.config.proxy == false) {
            return obj
        };
    
        const funcHandler = () => {
            return {
                apply(target, thisArg, argumentsList) {
                    let result = Reflect.apply(target, thisArg, argumentsList);
                    addEnv.memory.proxyLog.push({
                        "类型": "fucntion apply",
                        "调用情况": `${objName}("${argumentsList[0]}")`,
                        "返回值": addEnv.toolsFunc.compressCode(String(result))
                    });
                    return result;
                }
            };
        };
    
        const objHandler = () => {
            return {
                set(target, property, value, receiver) {
                    let result = Reflect.set(target, property, value, receiver);
                    if (value instanceof Object) {
                        addEnv.memory.proxyLog.push({
                            "类型": "set-->",
                            "设置属性": `${objName}.${property}`,
                            "值": addEnv.toolsFunc.compressCode(String(value))
                        });
                    } else {
                        addEnv.memory.proxyLog.push({
                            "类型": "set-->",
                            "设置属性": `${objName}.${property}`,
                            "值": addEnv.toolsFunc.compressCode(String(value))
                        });
                    }
                    return result; 
                },
                get(target, property, receiver) {
                    let result = Reflect.get(target, property, receiver);
                    if (property === "__proto__" || property === "VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL") {
                        addEnv.memory.proxyLog.push({
                            "类型": "get<--",
                            "调用属性": `${objName}.${property}`,
                            "值": addEnv.toolsFunc.compressCode(String(result))
                        });
                    } else if (result instanceof Object) {
                        if (typeof result === "function") {
                            addEnv.memory.proxyLog.push({
                                "类型": "get<--",
                                "调用属性": `${objName}.${property}`,
                                "值": addEnv.toolsFunc.compressCode(String(result))
                            });
                        } else {
                            addEnv.memory.proxyLog.push({
                                "类型": "get<--",
                                "调用属性": `${objName}.${property}`,
                                "值": addEnv.toolsFunc.compressCode(String(result))
                            });
                        }
                    } else if (typeof (property) === "string") {
                        addEnv.memory.proxyLog.push({
                            "类型": "get<--",
                            "调用属性": `${objName}.${property}`,
                            "值": `'${addEnv.toolsFunc.compressCode(String(result))}'`
                        });
                    } else if (typeof (property) !== "symbol" && property !== "toString") {
                        try {
                            addEnv.memory.proxyLog.push({
                                "类型": "get<--",
                                "调用属性": `${objName}.${property}`,
                                "值": result
                            });
                        } catch (error) {
                            debugger;
                        }
                    }
                    return result;
                },
                has(target, property) {
                    let result = Reflect.has(target, property);
                    addEnv.memory.proxyLog.push({
                        "类型": "has property?",
                        "调用属性": `${objName}.${property}`,
                        "值": `${result}`
                    });
                    return result;
                },
                deleteProperty(target, property) {
                    let result = Reflect.deleteProperty(target, property);
                    addEnv.memory.proxyLog.push({
                        "类型": "delete property",
                        "删除属性": `${objName}.${property}`,
                        "值": `${result}`
                    });
                    return result;
                },
                getPrototypeOf(target) {
                    let result = Reflect.getPrototypeOf(target);
                    addEnv.memory.proxyLog.push({
                        "类型": "getProto",
                        "获取原型": objName,
                        "值": `${result}`
                    });
                    return result;
                },
                isExtensible(target) {
                    let result = Reflect.isExtensible(target);
                    addEnv.memory.proxyLog.push({
                        "类型": "isExtensible",
                        "可否扩展": objName,
                        "值": `${result}`
                    });
                    return result;
                }
            };
        };
    
        if (typeof obj === "function") {
            return new Proxy(obj, funcHandler());
        };
        return new Proxy(obj, objHandler());
    };
})();


(function () {
    function clearSheet(workbook) {
        let sheetNameList = workbook.SheetNames;
        sheetNameList.forEach(sheetName => {
            const worksheet = workbook.Sheets[sheetName];
            if (worksheet['!ref']) {
                const range = myXlsx.utils.decode_range(worksheet['!ref']);
                for (let row = range.s.r; row <= range.e.r; row++) {
                    for (let col = range.s.c; col <= range.e.c; col++) {
                        const cellAddress = myXlsx.utils.encode_cell({ r: row, c: col });
                        worksheet[cellAddress] = {};
                    }
                }
            }
        });
    };

    function sortLog() {
        let setList = addEnv.memory.proxyLog.filter((item) => item["类型"] === "set-->").map((item) => {
            const o = {};
            for (key in item) {
                if (key != "类型") {
                    o[key] = item[key];
                }
            }
            return o;
        });
        let getList = addEnv.memory.proxyLog.filter((item) => item["类型"] === "get<--").map((item) => {
            const o = {};
            for (key in item) {
                if (key != "类型") {
                    o[key] = item[key];
                }
            }
            return o;
        });
        let hasList = addEnv.memory.proxyLog.filter((item) => item["类型"] === "has property?").map((item) => {
            const o = {};
            for (key in item) {
                if (key != "类型") {
                    o[key] = item[key];
                }
            }
            return o;
        });
        let deleteList = addEnv.memory.proxyLog.filter((item) => item["类型"] === "delete property").map((item) => {
            const o = {};
            for (key in item) {
                if (key != "类型") {
                    o[key] = item[key];
                }
            }
            return o;
        });
        let getProtoList = addEnv.memory.proxyLog.filter((item) => item["类型"] === "getProto").map((item) => {
            const o = {};
            for (key in item) {
                if (key != "类型") {
                    o[key] = item[key];
                }
            }
            return o;
        });
        let isExtensibleList = addEnv.memory.proxyLog.filter((item) => item["类型"] === "isExtensible").map((item) => {
            const o = {};
            for (key in item) {
                if (key != "类型") {
                    o[key] = item[key];
                }
            }
            return o;
        });
        let applyList = addEnv.memory.proxyLog.filter((item) => item["类型"] === "fucntion apply").map((item) => {
            const o = {};
            for (key in item) {
                if (key != "类型") {
                    o[key] = item[key];
                }
            }
            return o;
        });
        return {
            "set-->": setList,
            "get<--": getList,
            "has property": hasList,
            "delete property": deleteList,
            "getProto": getProtoList,
            "isExtensible": isExtensibleList,
            "fucntion apply": applyList
        };
    };

    addEnv.toolsFunc.expProxyLog = function expProxyLog() {
        const workbook = myXlsx.readFile("D:\\test\\补环境\\志远补环境\\run\\log\\log.xlsx");
        clearSheet(workbook);
        let lastLog = sortLog();
        for (const item in lastLog) {
            const worksheet = workbook.Sheets[item];
            const jsonData = myXlsx.utils.json_to_sheet(lastLog[item]);
            Object.assign(worksheet, jsonData);
            if (lastLog[item].length) {
                const borderStyle = {
                    top: {style: "thin"},
                    bottom: {style: "thin"},
                    left: {style: "thin"},
                    right: {style: "thin"}
                };
                const aliStyle = {
                    vertical: "center",
                    horizontal: "left"
                };
                const headerFont = {
                    color: {
                        rgb: 'FF0000'
                    }, 
                    bold: true,
                    name: "华文行楷",
                    sz: "16"
                };
                const bodyFont = {
                    color: {
                        rgb: '000000'
                    }, 
                    name: "Consolas",
                    sz: "12"
                };
                const headerStyle = {
                    alignment: aliStyle,
                    border: borderStyle,
                    font: headerFont
                };
                const bodyStyle = {
                    alignment: aliStyle,
                    border: borderStyle,
                    font: bodyFont
                };
                const colCount = Object.keys(lastLog[item][0]).length;
                for (let colIndex = 0; colIndex < colCount; colIndex++) {
                    const cellRef = myXlsx.utils.encode_cell({ c: colIndex, r: 0 });
                    const cell = worksheet[cellRef];
                    cell.s = headerStyle;
                };
                const range = myXlsx.utils.decode_range(worksheet['!ref']);
                for (let row = 1; row <= range.e.r; row++) {
                    for (let col = 0; col <= range.e.c; col++) {
                        const cellAddress = myXlsx.utils.encode_cell({ r: row, c: col });
                        worksheet[cellAddress].s = bodyStyle;
                    }
                }
                let cols = [];
                for (let i = 0; i < colCount; i++) {
                    let col = {};
                    if (i == 0) {
                        col.wch = 90;
                    } else {
                        col.wch = 190;
                    }
                    cols.push(col)
                }
                worksheet['!cols'] = cols;
            };
        };
        myXlsx.writeFile(workbook, "D:\\test\\补环境\\志远补环境\\run\\log\\log.xlsx");
    };

    addEnv.toolsFunc.printLog = function printLog() {
        let logObj = sortLog();
        for (const item in logObj) {
            if (logObj[item].length !== 0) {
                logObj[item][0]["类型"] = item;
                let key = Object.keys(logObj[item][0]);
                console.table(logObj[item], [key[2], key[0], key[1]]);
            }
        }
        addEnv.memory.proxyLog = [];
    }
})();



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


// Event.js
Event = addEnv.toolsFunc.safeFunction(
	function Event(typeArg, eventInit) {
		debugger;
	}
);
Object.setPrototypeOf(Event.prototype, Object.prototype);

///////////////////////////////////////////  定义属性-->Event.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(Event.prototype, {
		[Symbol.toStringTag]: {
			value: "Event",
			configurable: true
		},
	
		type: {
			get: addEnv.toolsFunc.safeFunction(
				function type() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		target: {
			get: addEnv.toolsFunc.safeFunction(
				function target() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		currentTarget: {
			get: addEnv.toolsFunc.safeFunction(
				function currentTarget() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		eventPhase: {
			get: addEnv.toolsFunc.safeFunction(
				function eventPhase() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		bubbles: {
			get: addEnv.toolsFunc.safeFunction(
				function bubbles() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		cancelable: {
			get: addEnv.toolsFunc.safeFunction(
				function cancelable() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		defaultPrevented: {
			get: addEnv.toolsFunc.safeFunction(
				function defaultPrevented() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		composed: {
			get: addEnv.toolsFunc.safeFunction(
				function composed() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		timeStamp: {
			get: addEnv.toolsFunc.safeFunction(
				function timeStamp() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		srcElement: {
			get: addEnv.toolsFunc.safeFunction(
				function srcElement() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		returnValue: {
			get: addEnv.toolsFunc.safeFunction(
				function returnValue() {
					debugger;
			}
			),
			set: addEnv.toolsFunc.safeFunction(
				function returnValue() {
					debugger;
			}
			),
			enumerable: true,
			configurable: true,
			
		},

		cancelBubble: {
			get: addEnv.toolsFunc.safeFunction(
				function cancelBubble() {
					debugger;
			}
			),
			set: addEnv.toolsFunc.safeFunction(
				function cancelBubble() {
					debugger;
			}
			),
			enumerable: true,
			configurable: true,
			
		},

		NONE: {
			value: 0,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		CAPTURING_PHASE: {
			value: 1,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		AT_TARGET: {
			value: 2,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		BUBBLING_PHASE: {
			value: 3,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		composedPath: {
			value: addEnv.toolsFunc.safeFunction(
				function composedPath() {
					debugger;
			}
			),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		initEvent: {
			value: addEnv.toolsFunc.safeFunction(
				function initEvent() {
					debugger;
			}
			),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		preventDefault: {
			value: addEnv.toolsFunc.safeFunction(
				function preventDefault() {
					debugger;
			}
			),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		stopImmediatePropagation: {
			value: addEnv.toolsFunc.safeFunction(
				function stopImmediatePropagation() {
					debugger;
			}
			),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		stopPropagation: {
			value: addEnv.toolsFunc.safeFunction(
				function stopPropagation() {
					debugger;
			}
			),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->Event.prototype  /////////////////////////////////////////////////


// UIEvent.js
UIEvent = addEnv.toolsFunc.safeFunction(
	function UIEvent(typeArg, ...arg) {
		debugger;
	}
);
Object.setPrototypeOf(UIEvent, Event);
Object.setPrototypeOf(UIEvent.prototype, Event.prototype);

///////////////////////////////////////////  定义属性-->UIEvent.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(UIEvent.prototype, {
		[Symbol.toStringTag]: {
			value: "UIEvent",
			configurable: true
		},
	
		view: {
			get: addEnv.toolsFunc.safeFunction(
				function view() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		detail: {
			get: addEnv.toolsFunc.safeFunction(
				function detail() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		sourceCapabilities: {
			get: addEnv.toolsFunc.safeFunction(
				function sourceCapabilities() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		which: {
			get: addEnv.toolsFunc.safeFunction(
				function which() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		initUIEvent: {
			value: addEnv.toolsFunc.safeFunction(
				function initUIEvent() {
					debugger;
			}
			),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->UIEvent.prototype  /////////////////////////////////////////////////


// KeyboardEvent.js
KeyboardEvent = addEnv.toolsFunc.safeFunction(
	function KeyboardEvent(typeArg, KeyboardEventInit) {
		debugger;
	}
);
Object.setPrototypeOf(KeyboardEvent, UIEvent);
Object.setPrototypeOf(KeyboardEvent.prototype, UIEvent.prototype);

///////////////////////////////////////////  定义属性-->KeyboardEvent.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(KeyboardEvent.prototype, {
		[Symbol.toStringTag]: {
			value: "KeyboardEvent",
			configurable: true
		},
	
		key: {
			get: addEnv.toolsFunc.safeFunction(
				function key() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		code: {
			get: addEnv.toolsFunc.safeFunction(
				function code() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		location: {
			get: addEnv.toolsFunc.safeFunction(
				function location() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		ctrlKey: {
			get: addEnv.toolsFunc.safeFunction(
				function ctrlKey() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		shiftKey: {
			get: addEnv.toolsFunc.safeFunction(
				function shiftKey() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		altKey: {
			get: addEnv.toolsFunc.safeFunction(
				function altKey() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		metaKey: {
			get: addEnv.toolsFunc.safeFunction(
				function metaKey() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		repeat: {
			get: addEnv.toolsFunc.safeFunction(
				function repeat() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		isComposing: {
			get: addEnv.toolsFunc.safeFunction(
				function isComposing() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		charCode: {
			get: addEnv.toolsFunc.safeFunction(
				function charCode() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		keyCode: {
			get: addEnv.toolsFunc.safeFunction(
				function keyCode() {
					debugger;
			}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		DOM_KEY_LOCATION_STANDARD: {
			value: 0,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		DOM_KEY_LOCATION_LEFT: {
			value: 1,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		DOM_KEY_LOCATION_RIGHT: {
			value: 2,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		DOM_KEY_LOCATION_NUMPAD: {
			value: 3,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		getModifierState: {
			value: addEnv.toolsFunc.safeFunction(
				function odifierState() {
					debugger;
			}
			),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		initKeyboardEvent: {
			value: addEnv.toolsFunc.safeFunction(
				function initKeyboardEvent() {
					debugger;
			}
			),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->KeyboardEvent.prototype  /////////////////////////////////////////////////


// EventTarget.js
EventTarget = addEnv.toolsFunc.safeFunction(
    function EventTarget() {

    }
);
Object.setPrototypeOf(EventTarget.prototype, Object.prototype);

///////////////////////////////////////////  定义属性-->EventTarget.prototype  /////////////////////////////////////////////////
(function () {
    Object.defineProperties(EventTarget.prototype, {
		[Symbol.toStringTag]: {
			value: "EventTarget",
			configurable: true
		},
	
		addEventListener: {
			value: addEnv.toolsFunc.safeFunction(
                function addEventListener(type, listener, ...args) {
                    if(!(type in addEnv.memory.listeners)){
                        addEnv.memory.listeners[type] = [];
                    }
                    addEnv.memory.listeners[type].push({
                        listener: listener,
                        self: this,
                    });
                    if (addEnv.config.printLog) {
                        console.log(`注册事件-->`, `EventTarget_addEventListener`, `type->${type}`, `listener->${addEnv.toolsFunc.compressCode(String(listener))}`, `args->${args ? args : []}`);
                    }
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		dispatchEvent: {
			value: addEnv.toolsFunc.safeFunction(
                function dispatchEvent() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		removeEventListener: {
			value: addEnv.toolsFunc.safeFunction(
                function removeEventListener() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->EventTarget.prototype  /////////////////////////////////////////////////


// Crypto.js
Crypto = addEnv.toolsFunc.safeFunction(
    function Crypto() {
        throw new TypeError("Illegal constructor")
    }
);
Object.setPrototypeOf(Crypto.prototype, Object.prototype);
crypto = {};
Object.setPrototypeOf(crypto, Crypto.prototype);

///////////////////////////////////////////  定义属性-->Crypto.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(Crypto.prototype, {
		[Symbol.toStringTag]: {
			value: "Crypto",
			configurable: true
		},
	
		getRandomValues: {
			value: addEnv.toolsFunc.safeFunction(
                function getRandomValues() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		subtle: {
			get: addEnv.toolsFunc.safeFunction(
                function subtle() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		randomUUID: {
			value: addEnv.toolsFunc.safeFunction(
                function randomUUID() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->Crypto.prototype  /////////////////////////////////////////////////


// History.js
History = addEnv.toolsFunc.safeFunction(
    function History() {
        throw new TypeError("Illegal constructor");
    }
);
history = {};
Object.setPrototypeOf(history, History.prototype);

///////////////////////////////////////////  定义属性-->History.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(History.prototype, {
        [Symbol.toStringTag]: {
            value: "History",
            configurable: true
        },

		state: {
			get: addEnv.toolsFunc.safeFunction(
                function state() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		back: {
			value: addEnv.toolsFunc.safeFunction(
                function back() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		forward: {
			value: addEnv.toolsFunc.safeFunction(
                function forward() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		go: {
			value: addEnv.toolsFunc.safeFunction(
                function go() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		pushState: {
			value: addEnv.toolsFunc.safeFunction(
                function pushState() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		replaceState: {
			value: addEnv.toolsFunc.safeFunction(
                function replaceState() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->History.prototype  /////////////////////////////////////////////////


// Location.js
Location = addEnv.toolsFunc.safeFunction(
    function Location() {
        throw new TypeError("Illegal constructor");
    }
);
location = {};
Object.setPrototypeOf(location, Location.prototype);

///////////////////////////////////////////  定义属性-->Location.prototype  /////////////////////////////////////////////////
Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {
        value: "Location",
        configurable: true
    }
});
///////////////////////////////////////////  定义属性-->Location.prototype  /////////////////////////////////////////////////

///////////////////////////////////////////  定义属性-->location  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(location, {
        href: {
			get: addEnv.toolsFunc.safeFunction(
				function href() {
                    return addEnv.config.env.location.href;
				}
			),
			set: addEnv.toolsFunc.safeFunction(
				function href() {
					debugger;
				}
			),
			enumerable: true,
			configurable: false,
			
		},

        origin: {
			get: addEnv.toolsFunc.safeFunction(
				function origin() {
                    return addEnv.config.env.location.origin;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: false,
			
		},

		assign: {
			value: addEnv.toolsFunc.safeFunction(
                function assign() {
                    debugger;
                }
            ),
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

        host: {
			get: addEnv.toolsFunc.safeFunction(
                function host() {
                    return addEnv.config.env.location.host;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function host() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: false,
			
		},

        hostname: {
			get: addEnv.toolsFunc.safeFunction(
				function hostname() {
					return addEnv.config.env.location.hostname;
				}
			),
			set: addEnv.toolsFunc.safeFunction(
				function hostname() {
					debugger;
				}
			),
			enumerable: true,
			configurable: false,
			
		},

        pathname: {
			get: addEnv.toolsFunc.safeFunction(
				function pathname() {
					return addEnv.config.env.location.pathname;
				}
			),
			set: addEnv.toolsFunc.safeFunction(
				function pathname() {
					debugger;
				}
			),
			enumerable: true,
			configurable: false,
			
		},

        search: {
			get: addEnv.toolsFunc.safeFunction(
				function search() {
					return addEnv.config.env.location.search;
				}
			),
			set: addEnv.toolsFunc.safeFunction(
				function search() {
					debugger;
				}
			),
			enumerable: true,
			configurable: false,
			
		},

        hash: {
			get: addEnv.toolsFunc.safeFunction(
				function hash() {
					return addEnv.config.env.location.hash;
				}
			),
			set: addEnv.toolsFunc.safeFunction(
				function hash() {
					debugger;
				}
			),
			enumerable: true,
			configurable: false,
			
		},

        port: {
			get: addEnv.toolsFunc.safeFunction(
				function port() {
					return addEnv.config.env.location.port;
				}
			),
			set: addEnv.toolsFunc.safeFunction(
				function port() {
					debugger;
				}
			),
			enumerable: true,
			configurable: false,
			
		},

        protocol: {
			get: addEnv.toolsFunc.safeFunction(
				function protocol() {
					return addEnv.config.env.location.protocol;
				}
			),
			set: addEnv.toolsFunc.safeFunction(
				function protocol() {
					debugger;
				}
			),
			enumerable: true,
			configurable: false,
			
		},

		reload: {
			value: addEnv.toolsFunc.safeFunction(
                function reload() {
                    debugger;
                }
            ),
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		replace: {
			value: addEnv.toolsFunc.safeFunction(
                function replace() {
                    debugger;
                }
            ),
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		toString: {
			value: addEnv.toolsFunc.safeFunction(
                function toString() {
                    return addEnv.config.env.location.href;
                }
            ),
			writable: false,
			enumerable: true,
			configurable: false,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->location  /////////////////////////////////////////////////


// Screen.js
Screen = addEnv.toolsFunc.safeFunction(
    function Screen() {
        throw new TypeError("Illegal constructor")
    }
);
Object.setPrototypeOf(Screen, EventTarget);
Object.setPrototypeOf(Screen.prototype, EventTarget.prototype);
screen = {};
Object.setPrototypeOf(screen, Screen.prototype);

///////////////////////////////////////////  定义属性-->Screen.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(Screen.prototype, {
		[Symbol.toStringTag]: {
			value: "Screen",
			configurable: true
		},

        width: {
			get: addEnv.toolsFunc.safeFunction(
				function width() {
					return addEnv.config.env.screen.width;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

        height: {
			get: addEnv.toolsFunc.safeFunction(
				function height() {
					return addEnv.config.env.screen.height;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

        availWidth: {
			get: addEnv.toolsFunc.safeFunction(
				function availWidth() {
					return addEnv.config.env.screen.availWidth;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

        availHeight: {
			get: addEnv.toolsFunc.safeFunction(
				function availHeight() {
					return addEnv.config.env.screen.availHeight;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

        pixelDepth: {
			get: addEnv.toolsFunc.safeFunction(
				function pixelDepth() {
					return addEnv.config.env.screen.pixelDepth;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

        colorDepth: {
			get: addEnv.toolsFunc.safeFunction(
				function colorDepth() {
					return addEnv.config.env.screen.colorDepth;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

        availLeft: {
			get: addEnv.toolsFunc.safeFunction(
				function availLeft() {
					return addEnv.config.env.screen.availLeft;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

        availTop: {
			get: addEnv.toolsFunc.safeFunction(
				function availTop() {
					return addEnv.config.env.screen.availTop;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

        isExtended: {
			get: addEnv.toolsFunc.safeFunction(
				function isExtended() {
					return addEnv.config.env.screen.isExtended;
				}
			),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->Screen.prototype  /////////////////////////////////////////////////


// Storage.js
Storage = addEnv.toolsFunc.safeFunction(
    function Storage() {
        throw new TypeError("Illegal constructor")
    }
);
Object.setPrototypeOf(Storage.prototype, Object.prototype);
localStorage = {};
Object.setPrototypeOf(localStorage, Storage.prototype);

///////////////////////////////////////////  定义属性-->Storage.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(Storage.prototype, {
		[Symbol.toStringTag]: {
			value: "Storage",
			configurable: true
		},

		clear: {
			value: addEnv.toolsFunc.safeFunction(
                function clear() {
                    for (const key of Object.keys(this)) {
                        delete this[key];
                    }
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		getItem: {
			value: addEnv.toolsFunc.safeFunction(
                function getItem(key) {
                    if (this[key]) {
                        return this[key];
                    }
                    return null;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		key: {
			value: addEnv.toolsFunc.safeFunction(
                function key(index) {
                    if (Object.keys(this)[index]) {
                        return Object.keys(this)[index];
                    }
                    return null;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		removeItem: {
			value: addEnv.toolsFunc.safeFunction(
                function removeItem(key) {
                    if (this[key]) {
                        delete this[key];
                    }
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		setItem: {
			value: addEnv.toolsFunc.safeFunction(
                function setItem(key, value) {
                    this[key] = value;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

        length: {
			get: addEnv.toolsFunc.safeFunction(
                function length() {
                    return Object.keys(this).length;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->Storage.prototype  /////////////////////////////////////////////////


// Navigator.js
Navigator = addEnv.toolsFunc.safeFunction(
    function Navigator() {
        throw new TypeError("Illegal constructor");
    }
);
navigator = {};
Object.setPrototypeOf(navigator, Navigator.prototype);

///////////////////////////////////////////  定义属性-->Navigator.prototype  /////////////////////////////////////////////////
Object.defineProperties(Navigator.prototype, {
    [Symbol.toStringTag]: {
        value: "Navigator",
        configurable: true
    },

    language: {
        get: addEnv.toolsFunc.safeFunction(
            function language() {
                return addEnv.config.env.navigator.language;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    languages: {
        get: addEnv.toolsFunc.safeFunction(
            function languages() {
                return addEnv.config.env.navigator.languages;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    userAgent: {
        get: addEnv.toolsFunc.safeFunction(
            function userAgent() {
                return addEnv.config.env.navigator.userAgent;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    appVersion: {
        get: addEnv.toolsFunc.safeFunction(
            function appVersion() {
                return addEnv.config.env.navigator.appVersion;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    vendor: {
        get: addEnv.toolsFunc.safeFunction(
            function vendor() {
                return addEnv.config.env.navigator.vendor;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    appName: {
        get: addEnv.toolsFunc.safeFunction(
            function appName() {
                return addEnv.config.env.navigator.appName;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    appCodeName: {
        get: addEnv.toolsFunc.safeFunction(
            function appCodeName() {
                return addEnv.config.env.navigator.appCodeName;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    cookieEnabled: {
        get: addEnv.toolsFunc.safeFunction(
            function cookieEnabled() {
                return addEnv.config.env.navigator.cookieEnabled;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    productSub: {
        get: addEnv.toolsFunc.safeFunction(
            function productSub() {
                return addEnv.config.env.navigator.productSub;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    platform: {
        get: addEnv.toolsFunc.safeFunction(
            function platform() {
                return addEnv.config.env.navigator.platform;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    product: {
        get: addEnv.toolsFunc.safeFunction(
            function product() {
                return addEnv.config.env.navigator.product;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    vendorSub: {
        get: addEnv.toolsFunc.safeFunction(
            function vendorSub() {
                return addEnv.config.env.navigator.vendorSub;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    pdfViewerEnabled: {
        get: addEnv.toolsFunc.safeFunction(
            function pdfViewerEnabled() {
                return addEnv.config.env.navigator.pdfViewerEnabled;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    deviceMemory: {
        get: addEnv.toolsFunc.safeFunction(
            function deviceMemory() {
                return addEnv.config.env.navigator.deviceMemory;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    maxTouchPoints: {
        get: addEnv.toolsFunc.safeFunction(
            function maxTouchPoints() {
                return addEnv.config.env.navigator.maxTouchPoints;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },
});
///////////////////////////////////////////  定义属性-->Navigator.prototype  /////////////////////////////////////////////////


// Window.js
Window = addEnv.toolsFunc.safeFunction(
    function Window() {
        throw new TypeError("Illegal constructor")
    }
);
window = this;
Object.setPrototypeOf(window, Window.prototype);

///////////////////////////////////////////  设置WindowProperties、定义属性-->Window.prototype  /////////////////////////////////////////////////
(function () {
    let WindowProperties = addEnv.toolsFunc.safeFunction(
        function WindowProperties() {

        }
    );
    delete WindowProperties.prototype.constructor;
    Object.setPrototypeOf(WindowProperties.prototype, EventTarget.prototype);
    Object.defineProperties(WindowProperties.prototype, {
        [Symbol.toStringTag]: {
            value: "WindowProperties",
            configurable: true
        }
    });
    Object.setPrototypeOf(Window, EventTarget);
    Object.setPrototypeOf(Window.prototype, WindowProperties.prototype);

	Object.defineProperties(Window.prototype, {
		[Symbol.toStringTag]: {
			value: "Window",
			configurable: true
		},
	
		TEMPORARY: {
			value: 0,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		PERSISTENT: {
			value: 1,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},
	});
})();
///////////////////////////////////////////  设置WindowProperties、定义属性-->Window.prototype  /////////////////////////////////////////////////

///////////////////////////////////////////  定义属性-->window  /////////////////////////////////////////////////
(() => {
    let eval_ = eval;
    let setInterval_ = setInterval;
    let setTimeout_ = setTimeout;
    let clearInterval_ = clearInterval;
    let clearTimeout_ = clearTimeout;
    let getName = {
        name(){
            debugger;
            return addEnv.config.env.window.name;
        }
    }.name;
    let setName = {
        name(){
            debugger;
            addEnv.config.env.window.name = arguments[0];
        }
    }.name;
    Object.defineProperties(window, {
        name: {
            get: addEnv.toolsFunc.safeFunction(
                function name() {
                    debugger;
                    return addEnv.config.env.window.name;
                }
            ),
            set: addEnv.toolsFunc.safeFunction(
                function name() {
                    debugger;
                    addEnv.config.env.window.name = arguments[0];
                }
            ),
            // get: addEnv.toolsFunc.safeFunction(getName),
            // set: addEnv.toolsFunc.safeFunction(setName),
            enumerable: true,
            configurable: true,
            
        },
    
        innerWidth: {
            get: addEnv.toolsFunc.safeFunction(
                function innerWidth() {
                    return addEnv.config.env.window.innerWidth;
                }
            ),
            set: addEnv.toolsFunc.safeFunction(
                function innerWidth() {
                    debugger;
                    addEnv.config.env.window.innerWidth = arguments[0];
                }
            ),
            enumerable: true,
            configurable: true,
            
        },
    
        innerHeight: {
            get: addEnv.toolsFunc.safeFunction(
                function innerHeight() {
                    return addEnv.config.env.window.innerHeight;
                }
            ),
            set: addEnv.toolsFunc.safeFunction(
                function innerHeight() {
                    debugger;
                    addEnv.config.env.window.innerHeight = arguments[0];
                }
            ),
            enumerable: true,
            configurable: true,
            
        },
    
        outerWidth: {
            get: addEnv.toolsFunc.safeFunction(
                function outerWidth() {
                    return addEnv.config.env.window.outerWidth;
                }
            ),
            set: addEnv.toolsFunc.safeFunction(
                function outerWidth() {
                    debugger;
                    addEnv.config.env.window.outerWidth = arguments[0];
                }
            ),
            enumerable: true,
            configurable: true,
            
        },
    
        outerHeight: {
            get: addEnv.toolsFunc.safeFunction(
                function outerHeight() {
                    return addEnv.config.env.window.outerHeight;
                }
            ),
            set: addEnv.toolsFunc.safeFunction(
                function outerHeight() {
                    debugger;
                    addEnv.config.env.window.outerHeight = arguments[0];
                }
            ),
            enumerable: true,
            configurable: true,
            
        },
    
        devicePixelRatio: {
            get: addEnv.toolsFunc.safeFunction(
                function devicePixelRatio() {
                    return addEnv.config.env.window.devicePixelRatio;
                }
            ),
            set: addEnv.toolsFunc.safeFunction(
                function devicePixelRatio() {
                    debugger;
                    addEnv.config.env.window.devicePixelRatio = arguments[0];
                }
            ),
            enumerable: true,
            configurable: true,
            
        },
    
        length: {
            get: addEnv.toolsFunc.safeFunction(
                function length() {
                    return addEnv.config.env.window.length;
                }
            ),
            set: addEnv.toolsFunc.safeFunction(
                function length() {
                    debugger;
                    addEnv.config.env.window.length = arguments[0];
                }
            ),
            enumerable: true,
            configurable: true,
            
        },
    
        status: {
            get: addEnv.toolsFunc.safeFunction(
                function status() {
                    return addEnv.config.env.window.status;
                }
            ),
            set: addEnv.toolsFunc.safeFunction(
                function status() {
                    debugger;
                    addEnv.config.env.window.status = arguments[0];
                }
            ),
            enumerable: true,
            configurable: true,
            
        },
    
        isSecureContext: {
            get: addEnv.toolsFunc.safeFunction(
                function isSecureContext() {
                    return addEnv.config.env.window.isSecureContext;
                }
            ),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
    
        setTimeout: {
            value: addEnv.toolsFunc.safeFunction(
                function setTimeout(callback, ...arg) {
                    const timer_obj = setTimeout_(callback, ...arg);
                    const timer_id = parseInt(Object.keys(addEnv.memory.timer).sort((a, b) => {
                        return a - b;
                    }).pop()) + 1;
                    addEnv.memory.timer[timer_id] = timer_obj
                    return timer_id;
                }
            ),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
    
        setInterval: {
            value: addEnv.toolsFunc.safeFunction(
                function setInterval(callback, ...arg) {
                    const timer_obj = setInterval_(callback, ...arg);
                    const timer_id = parseInt(Object.keys(addEnv.memory.timer).sort((a, b) => {
                        return a - b;
                    }).pop()) + 1;
                    addEnv.memory.timer[timer_id] = timer_obj
                    return timer_id;
                }
            ),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },

        clearInterval: {
            value: addEnv.toolsFunc.safeFunction(
                function clearInterval() {
                    const timer_obj = addEnv.memory.timer[arguments[0]];
                    return clearInterval_(timer_obj);
                }
            ),
            writable: true,
            enumerable: true,
            configurable: true,
        },

        clearTimeout: {
            value: addEnv.toolsFunc.safeFunction(
                function clearTimeout() {
                    const timer_obj = addEnv.memory.timer[arguments[0]];
                    return clearTimeout_(timer_obj);
                }
            ),
            writable: true,
            enumerable: true,
            configurable: true,
        },
    
        DeviceOrientationEvent: {
            value: addEnv.toolsFunc.safeFunction(
                function DeviceOrientationEvent() {
                    debugger;
                }
            ),
            writable: true,
            enumerable: false,
            configurable: true,
            
        },
    
        DeviceMotionEvent: {
            value: addEnv.toolsFunc.safeFunction(
                function DeviceMotionEvent() {
                    debugger;
                }
            ),
            writable: true,
            enumerable: false,
            configurable: true,
            
        },
    
        top: {
            get: addEnv.toolsFunc.safeFunction(
                function top() {
                    return window;
                }
            ),
            set: undefined,
            enumerable: true,
            configurable: false,
            
        },
    
        btoa: {
            value: addEnv.toolsFunc.safeFunction(
                function btoa(str) {
                    if (typeof str === 'undefined') {
                        throw new Error('必须提供参数');
                    }
                
                    var out, i, len;
                    var c1, c2, c3;
                    const _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                
                    len = str.length;
                    i = 0;
                    out = "";
                    while (i < len) {
                        c1 = str.charCodeAt(i++) & 0xff;
                        if (i == len) {
                            out += _keyStr.charAt(c1 >> 2);
                            out += _keyStr.charAt((c1 & 0x3) << 4);
                            out += "==";
                            break;
                        }
                        c2 = str.charCodeAt(i++);
                        if (i == len) {
                            out += _keyStr.charAt(c1 >> 2);
                            out += _keyStr.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                            out += _keyStr.charAt((c2 & 0xF) << 2);
                            out += "=";
                            break;
                        }
                        c3 = str.charCodeAt(i++);
                        out += _keyStr.charAt(c1 >> 2);
                        out += _keyStr.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                        out += _keyStr.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
                        out += _keyStr.charAt(c3 & 0x3F);
                    };
                    console.log(`window-bs64编码完毕`);
                    return out;
                }
            ),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
    
        atob: {
            value: addEnv.toolsFunc.safeFunction(
                function atob(str) {
                    if (typeof str === 'undefined') {
                        throw new Error('必须提供参数');
                    }
                
                    var c1, c2, c3, c4;
                    var i, len, out;
                    const _keyStr = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
                
                    len = str.length;
                    i = 0;
                    out = "";
                    while (i < len) {
                        /* c1 */
                        do {
                            c1 = _keyStr[str.charCodeAt(i++) & 0xff];
                        } while (i < len && c1 == -1);
                        if (c1 == -1)
                            break;
                
                        /* c2 */
                        do {
                            c2 = _keyStr[str.charCodeAt(i++) & 0xff];
                        } while (i < len && c2 == -1);
                        if (c2 == -1)
                            break;
                
                        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
                
                        /* c3 */
                        do {
                            c3 = str.charCodeAt(i++) & 0xff;
                            if (c3 == 61)
                                return out;
                            c3 = _keyStr[c3];
                        } while (i < len && c3 == -1);
                        if (c3 == -1)
                            break;
                
                        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
                
                        /* c4 */
                        do {
                            c4 = str.charCodeAt(i++) & 0xff;
                            if (c4 == 61)
                                return out;
                            c4 = _keyStr[c4];
                        } while (i < len && c4 == -1);
                        if (c4 == -1)
                            break;
                        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
                    }
                    return out;
                }
            ),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
    
        eval: {
            value: addEnv.toolsFunc.safeFunction(
                function eval(str) {
                    return eval_(str);
                }
            ),
            writable: true,
            enumerable: false,
            configurable: true
        },
    
        window: {
            get: addEnv.toolsFunc.safeFunction(
                function window() {
                    return this;
                }
            ),
            set: undefined,
            enumerable: true,
            configurable: false
        }
    });
})();
///////////////////////////////////////////  定义属性-->window  /////////////////////////////////////////////////
debugger;


// XMLHttpRequestEventTarget.js
XMLHttpRequestEventTarget = addEnv.toolsFunc.safeFunction(
    function XMLHttpRequestEventTarget() {
        throw new TypeError("Illegal constructor")
    }
);
Object.setPrototypeOf(XMLHttpRequestEventTarget, EventTarget);
Object.setPrototypeOf(XMLHttpRequestEventTarget.prototype, EventTarget.prototype);

///////////////////////////////////////////  定义属性-->XMLHttpRequestEventTarget.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
		[Symbol.toStringTag]: {
			value: "XMLHttpRequestEventTarget",
			configurable: true
		},
	
		onloadstart: {
			get: addEnv.toolsFunc.safeFunction(
                function onloadstart() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function onloadstart() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		onprogress: {
			get: addEnv.toolsFunc.safeFunction(
                function onprogress() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function onprogress() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		onabort: {
			get: addEnv.toolsFunc.safeFunction(
                function onabort() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function onabort() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		onerror: {
			get: addEnv.toolsFunc.safeFunction(
                function onerror() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function onerror() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		onload: {
			get: addEnv.toolsFunc.safeFunction(
                function onload() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function onload() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		ontimeout: {
			get: addEnv.toolsFunc.safeFunction(
                function ontimeout() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function ontimeout() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		onloadend: {
			get: addEnv.toolsFunc.safeFunction(
                function onloadend() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function onloadend() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->XMLHttpRequestEventTarget.prototype  /////////////////////////////////////////////////


// XMLHttpRequest.js
XMLHttpRequest = addEnv.toolsFunc.safeFunction(
    function XMLHttpRequest() {
	
    }
);
Object.setPrototypeOf(XMLHttpRequest, XMLHttpRequestEventTarget);
Object.setPrototypeOf(XMLHttpRequest.prototype, XMLHttpRequestEventTarget.prototype);

///////////////////////////////////////////  定义属性-->XMLHttpRequest.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(XMLHttpRequest.prototype, {
		[Symbol.toStringTag]: {
			value: "XMLHttpRequest",
			configurable: true
		},
	
		onreadystatechange: {
			get: addEnv.toolsFunc.safeFunction(
                function onreadystatechange() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function onreadystatechange() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		readyState: {
			get: addEnv.toolsFunc.safeFunction(
                function readyState() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		timeout: {
			get: addEnv.toolsFunc.safeFunction(
                function timeout() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function timeout() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		withCredentials: {
			get: addEnv.toolsFunc.safeFunction(
                function withCredentials() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function withCredentials() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		upload: {
			get: addEnv.toolsFunc.safeFunction(
                function upload() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		responseURL: {
			get: addEnv.toolsFunc.safeFunction(
                function responseURL() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		status: {
			get: addEnv.toolsFunc.safeFunction(
                function status() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		statusText: {
			get: addEnv.toolsFunc.safeFunction(
                function statusText() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		responseType: {
			get: addEnv.toolsFunc.safeFunction(
                function responseType() {
                    debugger;
                }
            ),
			set: addEnv.toolsFunc.safeFunction(
                function responseType() {
                    debugger;
                }
            ),
			enumerable: true,
			configurable: true,
			
		},

		response: {
			get: addEnv.toolsFunc.safeFunction(
                function response() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		responseText: {
			get: addEnv.toolsFunc.safeFunction(
                function responseText() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		responseXML: {
			get: addEnv.toolsFunc.safeFunction(
                function responseXML() {
                    debugger;
                }
            ),
			set: undefined,
			enumerable: true,
			configurable: true,
			
		},

		UNSENT: {
			value: 0,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		OPENED: {
			value: 1,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		HEADERS_RECEIVED: {
			value: 2,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		LOADING: {
			value: 3,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		DONE: {
			value: 4,
			writable: false,
			enumerable: true,
			configurable: false,
			
		},

		abort: {
			value: addEnv.toolsFunc.safeFunction(
                function abort() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		getAllResponseHeaders: {
			value: addEnv.toolsFunc.safeFunction(
                function getAllResponseHeaders() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		getResponseHeader: {
			value: addEnv.toolsFunc.safeFunction(
                function getResponseHeader() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		open: {
			value: addEnv.toolsFunc.safeFunction(
                function open() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		overrideMimeType: {
			value: addEnv.toolsFunc.safeFunction(
                function overrideMimeType() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		send: {
			value: addEnv.toolsFunc.safeFunction(
                function send() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},

		setRequestHeader: {
			value: addEnv.toolsFunc.safeFunction(
                function setRequestHeader() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->XMLHttpRequest.prototype  /////////////////////////////////////////////////


// Node.js
Node = addEnv.toolsFunc.safeFunction(
    function Node() {
        throw new TypeError("Illegal constructor")
    }
);
Object.setPrototypeOf(Node, EventTarget);
Object.setPrototypeOf(Node.prototype, EventTarget.prototype);

///////////////////////////////////////////  定义属性-->Node.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(Node.prototype, {
		[Symbol.toStringTag]: {
			value: "Node",
			configurable: true
		}
	});
})();
///////////////////////////////////////////  定义属性-->Node.prototype  /////////////////////////////////////////////////


// DOMParser.js
DOMParser = addEnv.toolsFunc.safeFunction(
    function DOMParser() {
	
    }
);
Object.setPrototypeOf(DOMParser.prototype, Object.prototype);

///////////////////////////////////////////  定义属性-->DOMParser.prototype  /////////////////////////////////////////////////
(function () {
	Object.defineProperties(DOMParser.prototype, {
		[Symbol.toStringTag]: {
			value: "DOMParser",
			configurable: true
		},
	
		parseFromString: {
			value: addEnv.toolsFunc.safeFunction(
                function parseFromString() {
                    debugger;
                }
            ),
			writable: true,
			enumerable: true,
			configurable: true,
			
		},
	});
})();
///////////////////////////////////////////  定义属性-->DOMParser.prototype  /////////////////////////////////////////////////


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


// Document.js
Document = addEnv.toolsFunc.safeFunction(
    function Document() {

    }
);
Object.setPrototypeOf(Document, Node);
Object.setPrototypeOf(Document.prototype, Node.prototype);

///////////////////////////////////////////  定义属性-->Document.prototype  /////////////////////////////////////////////////
Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    },

    cookie: {
        get: addEnv.toolsFunc.safeFunction(
            function cookie() {
                let temp = "";
                let comma = "";
                let flag = 0;
                for (const key in addEnv.memory.cookie) {
                    if (flag > 0) {
                        comma = "; ";
                    };
                    flag = 1;
                    temp += `${comma}${key}=${addEnv.memory.cookie[key]}`;
                };
                console.log(`Document_cookie_get `, `cookie -> ${temp}`);
                return temp;
            }
        ),
        set: addEnv.toolsFunc.safeFunction(
            function cookie() {
                let cookieValue = arguments[0];
                let cookieSplit = cookieValue.split('; ');
                let expiresTime = null;
                cookieSplit.forEach(item => {
                    if (item.indexOf('expires') != -1) {
                        expiresTime = item.split('=')[1];
                    }
                });
                if (expiresTime) {
                    let expTime = new Date(expiresTime).getTime();
                    let curTime = new Date().getTime();
                    if (expTime < curTime) {
                        let item = cookieSplit[0].split("=");
                        let k = item[0].trim();
                        if (addEnv.memory.cookie[k]) {
                            delete addEnv.memory.cookie[k];
                        };
                        console.log(`Document_cookie_set -> arg -> `, arguments[0], `过期时间小于当前时间,不进行设置并且重置已有cookie`);
                        return arguments[0];
                    }
                };
                let index = cookieSplit[0].indexOf("=");
                addEnv.memory.cookie[cookieSplit[0].substring(0, index)] = cookieSplit[0].substring(index + 1);
                console.log(`Document_cookie_set -> arg -> `, arguments[0]);
                console.log(`Document_cookie_set -> -> 过期时间 -> `, expiresTime);
                console.log(`Document_cookie_set -> -> cookieValue -> `, cookieSplit[0]);
                console.log(`当前cookie 为 ->`, document.cookie);
                return arguments[0];
            }
        ),
        enumerable: true,
        configurable: true,
        
    },

    URL: {
        get: addEnv.toolsFunc.safeFunction(
            function URL() {
                return addEnv.config.env.document.URL;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    referrer: {
        get: addEnv.toolsFunc.safeFunction(
            function referrer() {
                return addEnv.config.env.document.referrer;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    documentURI: {
        get: addEnv.toolsFunc.safeFunction(
            function documentURI() {
                return addEnv.config.env.document.documentURI;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    compatMode: {
        get: addEnv.toolsFunc.safeFunction(
            function compatMode() {
                return addEnv.config.env.document.compatMode;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    dir: {
        get: addEnv.toolsFunc.safeFunction(
            function dir() {
                return addEnv.config.env.document.dir;
            }
        ),
        set: addEnv.toolsFunc.safeFunction(
            function dir() {
                debugger;
            }
        ),
        enumerable: true,
        configurable: true,
        
    },

    title: {
        get: addEnv.toolsFunc.safeFunction(
            function title() {
                return addEnv.config.env.document.title;
            }
        ),
        set: addEnv.toolsFunc.safeFunction(
            function title() {
                debugger;
            }
        ),
        enumerable: true,
        configurable: true,
        
    },

    designMode: {
        get: addEnv.toolsFunc.safeFunction(
            function designMode() {
                return addEnv.config.env.document.designMode;
            }
        ),
        set: addEnv.toolsFunc.safeFunction(
            function designMode() {
                debugger;
            }
        ),
        enumerable: true,
        configurable: true,
        
    },

    contentType: {
        get: addEnv.toolsFunc.safeFunction(
            function contentType() {
                return addEnv.config.env.document.contentType;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    inputEncoding: {
        get: addEnv.toolsFunc.safeFunction(
            function inputEncoding() {
                return addEnv.config.env.document.inputEncoding;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    domain: {
        get: addEnv.toolsFunc.safeFunction(
            function domain() {
                return addEnv.config.env.document.domain;
            }
        ),
        set: addEnv.toolsFunc.safeFunction(
            function domain() {
                debugger;
            }
        ),
        enumerable: true,
        configurable: true,
        
    },

    characterSet: {
        get: addEnv.toolsFunc.safeFunction(
            function characterSet() {
                return addEnv.config.env.document.characterSet;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    charset: {
        get: addEnv.toolsFunc.safeFunction(
            function charset() {
                return addEnv.config.env.document.charset;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    hidden: {
        get: addEnv.toolsFunc.safeFunction(
            function hidden() {
                return addEnv.config.env.document.hidden;
            }
        ),
        set: undefined,
        enumerable: true,
        configurable: true,
        
    },

    getElementById: {
        value: addEnv.toolsFunc.safeFunction(
            function getElementById() {
                debugger;
            }
        ),
        writable: true,
        enumerable: true,
        configurable: true,
        
    },

    getElementsByTagName: {
        value: addEnv.toolsFunc.safeFunction(
            function getElementsByTagName() {
                debugger;
            }
        ),
        writable: true,
        enumerable: true,
        configurable: true,
        
    },

    createElement: {
        value: addEnv.toolsFunc.safeFunction(
            function createElement(tagName) {
                debugger;
                tagName = tagName.toLowerCase();
                if (addEnv.memory.htmlelements[tagName] == undefined) {
                    debugger;
                } else {
                    let tagElement = addEnv.memory.htmlelements[tagName]();
                    return addEnv.proxy(tagElement);
                }
            }
        ),
        writable: true,
        enumerable: true,
        configurable: true,
        
    },
});
///////////////////////////////////////////  定义属性-->Document.prototype  /////////////////////////////////////////////////


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
    Object.defineProperties(document, {
        location: {
			get: addEnv.toolsFunc.safeFunction(
				function location() {
					return window.location;
				}
			),
			set: addEnv.toolsFunc.safeFunction(
				function location() {
					debugger;
				}
			),
			enumerable: true,
			configurable: false,
			
		},
    });
})();
///////////////////////////////////////////  定义属性-->document  /////////////////////////////////////////////////


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


/* 用户配置.js */
addEnv.config.proxy = false;
addEnv.config.printLog = false;
addEnv.config.env.location.href = "https://match.yuanrenxue.cn/match/6";
addEnv.config.env.location.origin = "https://match.yuanrenxue.cn";
addEnv.config.env.location.protocol = "https:";
addEnv.config.env.location.host = "match.yuanrenxue.cn";
addEnv.config.env.location.hostname = "match.yuanrenxue.cn";
addEnv.config.env.location.port = "";
addEnv.config.env.location.pathname = "/match/6";
addEnv.config.env.location.search = "";
addEnv.config.env.location.hash = "";
addEnv.config.env.navigator.vendorSub = "";
addEnv.config.env.navigator.productSub = "20030107";
addEnv.config.env.navigator.vendor = "Google Inc.";
addEnv.config.env.navigator.maxTouchPoints = 0;
addEnv.config.env.navigator.hardwareConcurrency = 8;
addEnv.config.env.navigator.cookieEnabled = true;
addEnv.config.env.navigator.appCodeName = "Mozilla";
addEnv.config.env.navigator.appName = "Netscape";
addEnv.config.env.navigator.appVersion = "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.1938.69";
addEnv.config.env.navigator.platform = "Win32";
addEnv.config.env.navigator.product = "Gecko";
addEnv.config.env.navigator.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.1938.69";
addEnv.config.env.navigator.language = "zh-CN";
addEnv.config.env.navigator.onLine = true;
addEnv.config.env.navigator.webdriver = false;
addEnv.config.env.navigator.deviceMemory = 8;
addEnv.config.env.document.URL = "https://match.yuanrenxue.cn/match/6";
addEnv.config.env.document.referrer = "https://match.yuanrenxue.cn/list";
addEnv.config.env.document.documentURI = "https://match.yuanrenxue.cn/match/6";
addEnv.config.env.document.compatMode = "CSS1Compat";
addEnv.config.env.document.dir = "";
addEnv.config.env.document.title = "第六题 js 混淆 回溯 - 猿人学";
addEnv.config.env.document.designMode = "off";
addEnv.config.env.document.contentType = "text/html";
addEnv.config.env.document.inputEncoding = "UTF-8";
addEnv.config.env.document.domain = "match.yuanrenxue.cn";
addEnv.config.env.document.characterSet = "UTF-8";
addEnv.config.env.document.charset = "UTF-8";
addEnv.config.env.document.hidden = true;
addEnv.config.env.screen.availWidth = 1920;
addEnv.config.env.screen.availHeight = 1032;
addEnv.config.env.screen.width = 1920;
addEnv.config.env.screen.height = 1080;
addEnv.config.env.screen.colorDepth = 24;
addEnv.config.env.screen.pixelDepth = 24;
addEnv.config.env.screen.availLeft = 0;
addEnv.config.env.screen.availTop = 0;
addEnv.config.env.window.name = "";
addEnv.config.env.window.status = "";
addEnv.config.env.window.length = 0;
addEnv.config.env.window.innerWidth = 1912;
addEnv.config.env.window.innerHeight = 924;
addEnv.config.env.window.scrollX = 0;
addEnv.config.env.window.pageXOffset = 0;
addEnv.config.env.window.scrollY = 0;
addEnv.config.env.window.pageYOffset = 0;
addEnv.config.env.window.screenX = 0;
addEnv.config.env.window.screenY = 0;
addEnv.config.env.window.outerWidth = 1920;
addEnv.config.env.window.outerHeight = 1032;
addEnv.config.env.window.devicePixelRatio = 1;
addEnv.config.env.window.screenLeft = 0;
addEnv.config.env.window.screenTop = 0;
addEnv.config.env.window.isSecureContext = true;
addEnv.config.env.window.credentialless = false;


debugger;
window = addEnv.toolsFunc.proxy(window, "window");
crypto = addEnv.toolsFunc.proxy(crypto, "crypto");
history = addEnv.toolsFunc.proxy(history, "history");
document = addEnv.toolsFunc.proxy(document, "document");
location = addEnv.toolsFunc.proxy(location, "location");
navigator = addEnv.toolsFunc.proxy(navigator, "navigator");
screen = addEnv.toolsFunc.proxy(screen, "screen");
Storage = addEnv.toolsFunc.proxy(Storage, "Storage");
localStorage = addEnv.toolsFunc.proxy(localStorage, "localStorage");
eval = addEnv.toolsFunc.proxy(eval, "eval");


