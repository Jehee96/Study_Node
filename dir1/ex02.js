const {odd, even} = require('./ex02_1');
const chkFunc = require('./ex02_2');

function chkString(str) {
    if(str.length % 2) {
        return odd;
    }
    return even;
}

console.log(chkFunc(3));
console.log(chkFunc(4));
console.log(chkString("HI"));
console.log(chkString("BYE"));