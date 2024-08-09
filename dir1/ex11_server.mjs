// http 모듈을 이용해 웹 서버 구축 가능
import http from 'http'; // 웹 관련 모듈

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'}); // 요청에 성공하면 200.
    res.write('<h1>우아아아아앙</h1>')
    res.write('ㅎㅇㅎㅇ')
    res.end('<p>ㅂㅂ</p>') // 응답 종료
    //res.write('ㅂㅂㅂㅂ')

})
.listen(8080, () => {
    console.log('서버 서비스 중..');
});