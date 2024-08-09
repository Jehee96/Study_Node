// express module
// 웹 서버를 생성하는 것과 관련된 기능을 담당하는 프레임워크
// 웹 애플리케이션을 만들기 위한 각종 메소드와 미들웨어 등이 내장되어 있다.
// http 모듈만 사용해서 서버를 구성할 수도 있지만, 이 경우엔 직접 설정해야 하는것들이 많아짐?
// 이로 인해 사용하는 것이 바로 express module이다.

import express from 'express';

const app = express();

app.get('/', function (req, res) {
    res.send('ㅎㅇ');
})

console.log('서버 서비스 시작..');
app.listen(3000);