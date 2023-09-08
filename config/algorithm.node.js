/* addEnv/algorithm代码引入 */
const fs = require("fs");
const path = require('path');
const userConfig = require(`${__dirname}/userConfig.node`);


let algorithmPath = path.resolve(__dirname, "../addEnv/algorithm/CryptoJs");
let cryptFileList = [
    "core.js", "x64-core.js", "lib-typedarrays.js", "enc-utf16.js", "enc-base64.js", "enc-base64url.js", "md5.js", 
    "sha1.js", "sha256.js", "sha224.js", "sha512.js", "sha384.js", "sha3.js", "ripemd160.js", "hmac.js", 
    "pbkdf2.js", "evpkdf.js", "cipher-core.js", "mode-cfb.js", "mode-ctr.js", "mode-ctr-gladman.js", "mode-ofb.js", 
    "mode-ecb.js", "pad-ansix923.js", "pad-iso10126.js", "pad-iso97971.js", "pad-zeropadding.js", "pad-nopadding.js", 
    "format-hex.js", "aes.js", "tripledes.js", "rc4.js", "rabbit.js", "rabbit-legacy.js"
];


function getCode() {
    let code = "";
    if (userConfig.myConfig.algorithm.CryptoJs) {
        cryptFileList.forEach(fileName => {
            code += fs.readFileSync(`${algorithmPath}/${fileName}`) + '\r\n\r\n\r\n';
        });
    }
    return code;
}


module.exports = {
    getCode
}