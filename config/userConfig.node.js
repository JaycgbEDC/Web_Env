/* 用户配置.js */
/* 步骤：先扣代码，打开代理启动调试，调试完毕并成功后，关闭代理设置，再调试一遍生成最终环境配置 */
const myConfig = {
    proxy: false,  // 是否开启代理（开启为调试模式，输出日志到文件）
    printLog: false,  // 是否开启日志打印（仅在proxy为true有效）
    algorithm: {  // 是否启用算法
        CryptoJs: false
    },
    hook: {  // 是否启用hook代码
        hookReg: false,
        hookSetInterval: false,
        hookConstrDebugger: false,
        hookRandom: false
    },
    exeJsName: ["yrx.js"],  // 执行扣下的代码文件名
    isTest: true // 调试模式or生产模式
};


myConfig.env = {  // 自定义浏览器环境
	location: {
		href: "https://match.yuanrenxue.cn/match/6",
		origin: "https://match.yuanrenxue.cn",
		protocol: "https:",
		host: "match.yuanrenxue.cn",
		hostname: "match.yuanrenxue.cn",
		port: "",
		pathname: "/match/6",
		search: "",
		hash: "",
	},
	navigator: {
		vendorSub: "",
		productSub: "20030107",
		vendor: "Google Inc.",
		maxTouchPoints: 0,
		hardwareConcurrency: 8,
		cookieEnabled: true,
		appCodeName: "Mozilla",
		appName: "Netscape",
		appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.1938.69",
		platform: "Win32",
		product: "Gecko",
		userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.1938.69",
		language: "zh-CN",
		onLine: true,
		webdriver: false,
		deviceMemory: 8,
	},
	document: {
		URL: "https://match.yuanrenxue.cn/match/6",
		referrer: "https://match.yuanrenxue.cn/list",
		documentURI: "https://match.yuanrenxue.cn/match/6",
		compatMode: "CSS1Compat",
		dir: "",
		title: "第六题 js 混淆 回溯 - 猿人学",
		designMode: "off",
		contentType: "text/html",
		inputEncoding: "UTF-8",
		domain: "match.yuanrenxue.cn",
		characterSet: "UTF-8",
		charset: "UTF-8",
		hidden: true,
	},
	screen: {
		availWidth: 1920,
		availHeight: 1032,
		width: 1920,
		height: 1080,
		colorDepth: 24,
		pixelDepth: 24,
		availLeft: 0,
		availTop: 0,
	},
	window: {
		name: "",
		status: "",
		length: 0,
		innerWidth: 1912,
		innerHeight: 924,
		scrollX: 0,
		pageXOffset: 0,
		scrollY: 0,
		pageYOffset: 0,
		screenX: 0,
		screenY: 0,
		outerWidth: 1920,
		outerHeight: 1032,
		devicePixelRatio: 1,
		screenLeft: 0,
		screenTop: 0,
		isSecureContext: true,
		credentialless: false,
	},
};


const getCode = () => {
    let code = '/* 用户配置.js */\n';
    let proxy = `addEnv.config.proxy = ${myConfig.proxy};\n`;
    let printLog = `addEnv.config.printLog = ${myConfig.printLog};\n`;
    let env = '';
    for (const obj in myConfig.env) {
        for (const attr in myConfig.env[obj]) {
            if (typeof myConfig.env[obj][attr] == "string") {
                env += `addEnv.config.env.${obj}.${attr} = "${myConfig.env[obj][attr]}";\n`;
            } else {    
                env += `addEnv.config.env.${obj}.${attr} = ${myConfig.env[obj][attr]};\n`;
            }
        }
    }
    return code + proxy + printLog + env + "\r\n\r\ndebugger;\n";
}


module.exports = {
    myConfig,
    getCode
};