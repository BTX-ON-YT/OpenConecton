const http = require('http');
const os = require('os');

function getOsInfo() {
    return `${os.platform()} ${os.release()}`;
}

function sendJsonData (appVersion, custData) {
    const osInfo = getOsInfo();
    const jsonData = "{}";
    return jsonData;
}

function startConnection(appVersion, custData) {
    const jsonConnection = function (req, res) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(sendJsonData(appVersion, custData)));
    }
    const server = http.createServer(jsonConnection);
    server.listen(9000);
}

startConnection(1.0, "test");