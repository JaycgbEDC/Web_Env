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
        const workbook = myXlsx.readFile("./run/log/log.xlsx");
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
        myXlsx.writeFile(workbook, "./run/log/log.xlsx");
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
