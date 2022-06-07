const http = require('http');
const os = require('os');

function getOsInfo(type: any) {
    if (type === 0) {
        return os.platform();
    }
    else if (type === 1) {
        return os.hostname();
    }
    else if (type === 2) {
        return os.arch();
    }
    else if (type === 3) {
        return os.release();
    }
    else if (type === 4) {
        return os.type();
    }
    else if (type === 5) {
        return os.uptime();
    }
}

function sendJsonData (appVersion: any, custData: any) {
    const osVersion = getOsInfo(0);
    const osPlatform = getOsInfo(1);
    const osArch = getOsInfo(2);
    const osRelease = getOsInfo(3);
    const osType = getOsInfo(4);
    const osUptime = getOsInfo(5);
    const jsonData = `{\"appVersion\":\""` + appVersion + `"\",\"customData\":\""` + custData + `"\",\"osPlatform\":\""` + osPlatform + `"\",\"osArch\":\""` + osArch + `"\",\"osRelease\":\""` + osRelease + `"\",\"osType\":\""` + osType + `"\",\"osUptime\":\""` + osUptime + `"\"}`;
    return jsonData;
}

export function startConnection(appVersion: any, custData: any, otherIp: any, otherPort: any) {
    const jsonConnection = function (req: any, res: any) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(sendJsonData(appVersion, custData));
    }
    const server = http.createServer(jsonConnection);
    server.listen(9000);
}

startConnection("0.1.0", "test", "localhost:", 9000);