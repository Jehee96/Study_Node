import {promises as fs} from 'fs';
// fs 모듈은 기본적으로 콜백 형식으로 사용. 그래서 promise형식으로 바꿔주는 방식을 사용함.
const ss = '파일로 저장된 문서. 장소 3강';

fs.writeFile('./ex03_write.txt', ss) // fs.writeFile('저장하고자 하는 경로')
.then(() => {
    return fs.readFile('./ex03_write.txt');
})
.then((data) => { // 넘어온 데이터
    console.log(data.toString());
})
.catch((err) => {
    console.log('err', err);
})