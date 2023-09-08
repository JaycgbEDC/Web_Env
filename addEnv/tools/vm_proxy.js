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