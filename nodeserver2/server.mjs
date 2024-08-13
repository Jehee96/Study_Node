import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url); //import.meta.url : 현재 파일의 경로
const __dirname = path.dirname(__filename);
const app = express();

app.use(cors()); // cors 미들웨어 등록
app.use(express.json()); // express.json 미들웨어. json파싱용

app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public'))); // 정적파일(HTML) 폴더


let datas = [
    {id:1, name:'오리', position:'프론트 개발자'},
    {id:2, name:'참새', position:'백엔드 개발자'}
]

let nextid = 3; // 새로운 직원이 추가될 때 id증가용

app.get('/', (req, res) => {
    res.send('졸려유.. /emp, /emp/1, abc.html');
});


// 01. 전체 자료 읽기
app.get('/emp', (req, res) => {
    res.json(datas);
});


// 02. 자료 한개 읽기
app.get('/emp/:id', (req, res) => {
    const employee = datas.find(emp => emp.id === parseInt(req.params.id, 10));
    if(!employee) return res.status(404).send('그런 자료는 없는뎅');
    res.json(employee);
});


// 03. 자료 추가
app.post('/emp', (req, res) => {
    const newEmployee = {
     id:nextid++,
     name:req.body.name,
     position:req.body.position
    };
    datas.push(newEmployee);
    res.status(201).json(newEmployee);
});


// 04. 자료 수정
app.put('/emp/:id', (req, res) => {
    console.log(req.body);

    const employee = datas.find(emp => emp.id === parseInt(req.params.id, 10));
    if(!employee) return res.status(404).send('그런 자료는 없는뎅');
    
    employee.name = req.body.name || employee.name; // 새 데이터 || 기존 데이터
    employee.position = req.body.position || employee.position; // 값이 유효하면 기존 데이터를 대체. 아니면 기존 데이터를 유지.

    res.json(employee);
});


// 05. 자료 삭제
app.delete('/emp/:id', (req, res) => {
    console.log(req.params.id);

    const empIndex = datas.findIndex(emp => emp.id === parseInt(req.params.id, 10));
    if(empIndex === -1) return res.status(404).send('그런 자료는 없는뎅');
    
    const [delEmp] = datas.splice(empIndex, 1);

    res.json(delEmp);
});



// 00. 정적 파일(html)제공 폴더 정의
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트로 서버 서비스 시작중");
});
