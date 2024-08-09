// 키보드로 단을 받아 구구단을 출력
import { EventEmitter } from "events";
import readline from "readline";

const myEvent = new EventEmitter();

// 키보드 입력을 위한 readline 인터페이스 생성
// input 스트림에서 데이터를 읽고, output 스트림으로 데이터를 쓸 수 있게 한다.
const inout = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const printGugudan = (dan) => {
  console.log(`\n구구단 ${dan} 출력 : `);
  for (let index = 1; index <= 9; index++) {
    console.log(`${dan} x ${index} = ${dan * index}`);
  }
};

myEvent.on("gugudan", (dan) => {
  printGugudan(dan);
  inout.close();
});

// 형식 : question(query, callback)
inout.question("출력할 단 입력 : ", (input) => {
  const dan = parseInt(input, 10); // 10진수 정수로 변환하라는 뜻
  if (!isNaN(dan)) {
    myEvent.emit('gugudan', dan);
  } else {
    console.log('단은 숫자로 입력');
    inout.close();
  }
});
