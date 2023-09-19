// XMLHttpRequest.js
XMLHttpRequest = addEnv.toolsFunc.safeFunction(
    function XMLHttpRequest() {
	
    }
);
Object.setPrototypeOf(XMLHttpRequest, XMLHttpRequestEventTarget);
Object.setPrototypeOf(XMLHttpRequest.prototype, XMLHttpRequestEventTarget.prototype);

///////////////////////////////////////////  定义属性-->XMLHttpRequest.prototype  /////////////////////////////////////////////////
(function () {
    let my_get_onreadystatechange = {
        onreadystatechange(){
            debugger;
        }
    }.onreadystatechange;
    let my_set_onreadystatechange = {
        onreadystatechange(){
            debugger;
        }
    }.onreadystatechange;
    let my_get_readyState = {
        readyState(){
            debugger;
        }
    }.readyState;
    let my_get_timeout = {
        timeout(){
            debugger;
        }
    }.timeout;
    let my_set_timeout = {
        timeout(){
            debugger;
        }
    }.timeout;
    let my_get_withCredentials = {
        withCredentials(){
            debugger;
        }
    }.withCredentials;
    let my_set_withCredentials = {
        withCredentials(){
            debugger;
        }
    }.withCredentials;
    let my_get_upload = {
        upload(){
            debugger;
        }
    }.upload;
    let my_get_responseURL = {
        responseURL(){
            debugger;
        }
    }.responseURL;
    let my_get_status = {
        status(){
            debugger;
        }
    }.status;
    let my_get_statusText = {
        statusText(){
            debugger;
        }
    }.statusText;
    let my_get_responseType = {
        responseType(){
            debugger;
        }
    }.responseType;
    let my_set_responseType = {
        responseType(){
            debugger;
        }
    }.responseType;
    let my_get_response = {
        response(){
            debugger;
        }
    }.response;
    let my_get_responseText = {
        responseText(){
            debugger;
        }
    }.responseText;
    let my_get_responseXML = {
        responseXML(){
            debugger;
        }
    }.responseXML;
    let abort = {
        abort(){
            debugger;
        }
    }.abort;
    let getAllResponseHeaders = {
        getAllResponseHeaders(){
            debugger;
        }
    }.getAllResponseHeaders;
    let getResponseHeader = {
        getResponseHeader(){
            debugger;
        }
    }.getResponseHeader;
    let open = {
        open(){
            debugger;
        }
    }.open;
    let overrideMimeType = {
        overrideMimeType(){
            debugger;
        }
    }.overrideMimeType;
    let send = {
        send(){
            debugger;
        }
    }.send;
    let setRequestHeader = {
        setRequestHeader(){
            debugger;
        }
    }.setRequestHeader;
    
    Object.defineProperties(XMLHttpRequest.prototype, {
        [Symbol.toStringTag]: {
			value: "XMLHttpRequest",
			configurable: true
		},

        onreadystatechange: {
            get: addEnv.toolsFunc.safeFunction(my_get_onreadystatechange),
            set: addEnv.toolsFunc.safeFunction(my_set_onreadystatechange),
            enumerable: true,
            configurable: true,
            
        },
        readyState: {
            get: addEnv.toolsFunc.safeFunction(my_get_readyState),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        timeout: {
            get: addEnv.toolsFunc.safeFunction(my_get_timeout),
            set: addEnv.toolsFunc.safeFunction(my_set_timeout),
            enumerable: true,
            configurable: true,
            
        },
        withCredentials: {
            get: addEnv.toolsFunc.safeFunction(my_get_withCredentials),
            set: addEnv.toolsFunc.safeFunction(my_set_withCredentials),
            enumerable: true,
            configurable: true,
            
        },
        upload: {
            get: addEnv.toolsFunc.safeFunction(my_get_upload),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        responseURL: {
            get: addEnv.toolsFunc.safeFunction(my_get_responseURL),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        status: {
            get: addEnv.toolsFunc.safeFunction(my_get_status),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        statusText: {
            get: addEnv.toolsFunc.safeFunction(my_get_statusText),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        responseType: {
            get: addEnv.toolsFunc.safeFunction(my_get_responseType),
            set: addEnv.toolsFunc.safeFunction(my_set_responseType),
            enumerable: true,
            configurable: true,
            
        },
        response: {
            get: addEnv.toolsFunc.safeFunction(my_get_response),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        responseText: {
            get: addEnv.toolsFunc.safeFunction(my_get_responseText),
            set: undefined,
            enumerable: true,
            configurable: true,
            
        },
        responseXML: {
            get: addEnv.toolsFunc.safeFunction(my_get_responseXML),
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
            value: addEnv.toolsFunc.safeFunction(abort),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        getAllResponseHeaders: {
            value: addEnv.toolsFunc.safeFunction(getAllResponseHeaders),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        getResponseHeader: {
            value: addEnv.toolsFunc.safeFunction(getResponseHeader),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        open: {
            value: addEnv.toolsFunc.safeFunction(open),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        overrideMimeType: {
            value: addEnv.toolsFunc.safeFunction(overrideMimeType),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        send: {
            value: addEnv.toolsFunc.safeFunction(send),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        setRequestHeader: {
            value: addEnv.toolsFunc.safeFunction(setRequestHeader),
            writable: true,
            enumerable: true,
            configurable: true,
            
        },
        
    });
})();
///////////////////////////////////////////  定义属性-->XMLHttpRequest.prototype  /////////////////////////////////////////////////