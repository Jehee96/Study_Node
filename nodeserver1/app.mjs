import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

import gogekRouter from './routes/gogek.mjs'
import JikwonRouter from './routes/jikwon.mjs'


const app = express();

app.use(cors()) // 이렇게 쓰면 cors 해킹에서 벗어날 수 있음. cors 미들웨어 등록
app.use(express.json()); // express.json() 미들웨어 등록. json 파싱용
// ex : 클라이언트가 json 데이터를 요청(POST)으로 보낼 때
// {"name":"tom", "age":"30"} 👈🏻자동으로 파싱해 req.body 객체를 만든다.
// req.body.name 또는 req.body.age로 접근이 가능해진다.

app.set('port', process.env.PORT || 3000);

const __filename = fileURLToPath(import.meta.url); // import.meta.url : 현재 파일의 경로
const __dirname = path.dirname(__filename);

// 정적 파일 제공 폴더 정의
app.use(express.static(path.join(__dirname, 'public')));


// app.get('/', (req, res) => {
//     res.send('YEE');
// });


// 01. gogekRouter
app.use('/', JikwonRouter) ; // 요청명 뒤에 아무것도 없으면 JikwonRouter : http://localhost:3000
app.use('/gogek', gogekRouter) ; // http://localhost:3000/gogek

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트로 서버 서비스 중..');
});