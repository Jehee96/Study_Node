// 이벤트 처리 : events 모듈 사용
// EventEmitter 객체를 사용해 이벤트와 이벤트 핸들러를 연결에 동기적으로 호출

import { EventEmitter } from "events";

const myEvent = new EventEmitter(); // 이벤트 객체 생성

myEvent.addListener("event1", () => { // 콜백 걸기
    console.log("이벤트1");
})

myEvent.on("event2", () => { // on() : addListener()와 같은 의미
    console.log("이벤트2")
});

myEvent.on("event2", () => {
    console.log("이벤트2 추가")
});

myEvent.once("event3", () => { // once() : 1회만 수행
    console.log("이벤트3")
});

// 이벤트 호출
myEvent.emit("event1");
myEvent.emit("event2");
myEvent.emit("event3");
myEvent.emit("event3");

console.log("------------------");
myEvent.on("event4", () => {
    console.log("이벤트4")
});
myEvent.emit("event4");
myEvent.removeAllListeners("event4"); // 이벤트를 모두 지웠으므로 다음 event4는 호출 안됨
myEvent.emit("event4");

const lister = () => {
    console.log("이벤트 5");
}

myEvent.on("event5", lister); // 이벤트 연결
myEvent.emit("event5");
myEvent.off("event5", lister); // 이벤트 해제
myEvent.emit("event5");

console.log(myEvent.listenerCount("event2"));

console.log("---------- 매개변수 전달 ----------");
class MyEmitter extends EventEmitter{}; // MyEmitter는 EventEmitter의 파생 클래스

// myEmitter1
const myEmitter = new MyEmitter();
myEmitter.on("ev", () => {
    console.log("이벤트 처리");
})
myEmitter.emit("ev");

// myEmitter2
const myEmitter2 = new MyEmitter();
myEmitter.on("ev", (a, b) => {
    console.log("이벤트 처리 : ", a, b);
})
myEmitter.emit("ev", "쉬는", "시간");