var x;
var url = 'http://github.com';
function log(message) {
    // send an HTTP Request
    console.log(message);
}

module.exports = log;
module.exports.endPoint = url;
