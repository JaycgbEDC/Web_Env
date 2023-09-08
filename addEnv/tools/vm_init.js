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