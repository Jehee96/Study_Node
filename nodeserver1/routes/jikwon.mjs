import path from 'path';
import { fileURLToPath } from 'url';
import { Router } from "express";
import { error } from 'console';

const router = Router();

const __filename = fileURLToPath(import.meta.url); // import.meta.url : 현재 파일의 경로
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
    //res.send('Hi Jikwon');
    res.sendFile(path.join(__dirname, '../public/abc.html'));
});

const employees = [
    {id:1, name:'낫또'},
    {id:2, name:'간장'},
    {id:3, name:'계란'},
];

router.get('/employees', (req, res) => {
    res.json(employees);
})

router.post('/employees', (req, res) => {
    const newEmployee = req.body; // body를 타고 들어옴!
    if(!newEmployee || !newEmployee.name) {
        return res.status(400).json({error:'잘못된 데이터'});
    }
    employees.push(newEmployee);
    res.status(201).json(newEmployee); // 201(create) : 요청은 성공적. POST 요청 후에 새로운 리소스가 생성되었을 때 사용
});

export default router;