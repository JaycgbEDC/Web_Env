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
    let my_get_href = {
        href(){
            return addEnv.config.env.location.href;
        }
    }.href;
    let my_set_href = {
        href(){
            debugger;
        }
    }.href;
    let my_get_origin = {
        origin(){
            return addEnv.config.env.location.origin;
        }
    }.origin;
    let assign = {
        assign(){
            debugger;
        }
    }.assign;
    let my_get_host = {
        host(){
            return addEnv.config.env.location.host;
        }
    }.host;
    let my_set_host = {
        host(){
            debugger;
        }
    }.host;
    let my_get_hostname = {
        hostname(){
            return addEnv.config.env.location.hostname;
        }
    }.hostname;
    let my_set_hostname = {
        hostname(){
            debugger;
        }
    }.hostname;
    let my_get_pathname = {
        pathname(){
            return addEnv.config.env.location.pathname;
        }
    }.pathname;
    let my_set_pathname = {
        pathname(){
            debugger;
        }
    }.pathname;
    let my_get_search = {
        search(){
            return addEnv.config.env.location.search;
        }
    }.search;
    let my_set_search = {
        search(){
            debugger;
        }
    }.search;
    let my_get_hash = {
        hash(){
            return addEnv.config.env.location.hash;
        }
    }.hash;
    let my_set_hash = {
        hash(){
            debugger;
        }
    }.hash;
    let my_get_port = {
        port(){
            return addEnv.config.env.location.port;
        }
    }.port;
    let my_set_port = {
        port(){
            debugger;
        }
    }.port;
    let my_get_protocol = {
        protocol(){
            return addEnv.config.env.location.protocol;
        }
    }.protocol;
    let my_set_protocol = {
        protocol(){
            debugger;
        }
    }.protocol;
    let reload = {
        reload(){
            debugger;
        }
    }.reload;
    let replace = {
        replace(){
            debugger;
        }
    }.replace;
    let toString = {
        toString(){
            return addEnv.config.env.location.href;
        }
    }.toString;
    
    Object.defineProperties(location, {
        href: {
            get: addEnv.toolsFunc.safeFunction(my_get_href),
            set: addEnv.toolsFunc.safeFunction(my_set_href),
            enumerable: true,
            configurable: false,
            
        },
        origin: {
            get: addEnv.toolsFunc.safeFunction(my_get_origin),
            set: undefined,
            enumerable: true,
            configurable: false,
            
        },
        assign: {
            value: addEnv.toolsFunc.safeFunction(assign),
            writable: false,
            enumerable: true,
            configurable: false,
            
        },
        host: {
            get: addEnv.toolsFunc.safeFunction(my_get_host),
            set: addEnv.toolsFunc.safeFunction(my_set_host),
            enumerable: true,
            configurable: false,
            
        },
        hostname: {
            get: addEnv.toolsFunc.safeFunction(my_get_hostname),
            set: addEnv.toolsFunc.safeFunction(my_set_hostname),
            enumerable: true,
            configurable: false,
            
        },
        pathname: {
            get: addEnv.toolsFunc.safeFunction(my_get_pathname),
            set: addEnv.toolsFunc.safeFunction(my_set_pathname),
            enumerable: true,
            configurable: false,
            
        },
        search: {
            get: addEnv.toolsFunc.safeFunction(my_get_search),
            set: addEnv.toolsFunc.safeFunction(my_set_search),
            enumerable: true,
            configurable: false,
            
        },
        hash: {
            get: addEnv.toolsFunc.safeFunction(my_get_hash),
            set: addEnv.toolsFunc.safeFunction(my_set_hash),
            enumerable: true,
            configurable: false,
            
        },
        port: {
            get: addEnv.toolsFunc.safeFunction(my_get_port),
            set: addEnv.toolsFunc.safeFunction(my_set_port),
            enumerable: true,
            configurable: false,
            
        },
        protocol: {
            get: addEnv.toolsFunc.safeFunction(my_get_protocol),
            set: addEnv.toolsFunc.safeFunction(my_set_protocol),
            enumerable: true,
            configurable: false,
            
        },
        reload: {
            value: addEnv.toolsFunc.safeFunction(reload),
            writable: false,
            enumerable: true,
            configurable: false,
            
        },
        replace: {
            value: addEnv.toolsFunc.safeFunction(replace),
            writable: false,
            enumerable: true,
            configurable: false,
            
        },
        toString: {
            value: addEnv.toolsFunc.safeFunction(toString),
            writable: false,
            enumerable: true,
            configurable: false,
            
        },
        
    });
})();
///////////////////////////////////////////  定义属性-->location  /////////////////////////////////////////////////