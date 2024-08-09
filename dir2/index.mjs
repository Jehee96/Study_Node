// express module
// 웹 서버를 생성하는 것과 관련된 기능을 담당하는 프레임워크
// 웹 애플리케이션을 만들기 위한 각종 메소드와 미들웨어 등이 내장되어 있다.
// http 모듈만 사용해서 서버를 구성할 수도 있지만, 이 경우엔 직접 설정해야 하는것들이 많아짐
// 이로 인해 사용하는 것이 바로 express module이다.

// npm install nodemon --save-dev
// package.json에 nodemon등록
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; // 현재 모듈의 파일과 디렉토리 경로를 설정 시 사용

// -------------------- 설정 --------------------
// CORS 문제 해결용 IMPORT
import cors from 'cors'; // 👈🏻CORS 해결 순서 1
const app = express();
app.use(cors());         // 👈🏻CORS 해결 순서 2

// 환경변수 PORT가 존재하면 그 값을 사용하고, 아니면 3000을 사용하겠다는 의미
app.set('port', process.env.PORT || 3000) // env : 사용자환경잡기(환경변수)


// 현재 폴더를 지정 : __dirname을 ECM(ECMAScript Module) 환경에서 사용하기
const __filename = fileURLToPath(import.meta.url); // 현재 실행 중인 파일경로
const __dirname = path.dirname(__filename); // 현재 실행 중인 폴더 경로

// -------------------- 설정 --------------------


// app.get(요청, 라우팅 처리)
app.get('/', function (req, res) {
    res.send('<h1>우하항항ㅋㅋ</h1>');
});

app.get('/java', (req, res) => {
    res.send('<h1>포항ㅋㅋ항항</h1>');
});

app.get('/node', (req, res) => {
    res.send('<a href="https://cafe.daum.net/flowlife">카페</a>'); // http://localhost:3000/node에 카페 링크 생성
});

app.get('/abc', (req, res) => {
    res.sendFile(path.join(__dirname, 'abc.html')); // 현재 폴더의 abc.html 호출
});

app.get('/json', (req, res) => {
    res.send({'이름':'유제희'}); // 현재 폴더의 abc.html 호출
});

// 요청명?변수=값 인 경우는 req.query로 받는다.
// url 경로에 정보가 담긴 경우 추출 : http://localhost:3000/singer/IU
app.get('/user/:num/:name', (req, res) => {
    const {num, name} = req.params;

    res.json({num, name});
});

// season
// http://localhost:3000/user/winter
app.get('/user/:season', (req, res) => {
    const {season} = req.params;
    if (season === 'summer') {
        res.json({'season':'더웡'});
    }else if (season === 'winter'){
        res.json({'season':'추웡'})
    }else {
        res.json({'season':'만족행'})
    }
});


 // 현재 폴더의 test.html 호출
app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'));
});

// console.log('3000번 포트 서버 서비스 시작..');
// app.listen(3000);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번을 사용해 서버 서비스 중');
});