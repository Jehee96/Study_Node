const {odd, even} = require('./ex02_1'); // 현재 경로의 ex02_1.js

function chkFunc(num) {
    if(num % 2) {
        return odd;
    }
    return even;
}

module.exports = chkFunc;