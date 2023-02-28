"use strict";

// 1. 동기와 비동기
// Javascript is synchronous (동기적으로 실행)
// 호이스팅이 된 순간부터 작성한 코드에 맞춰 하나하나 실행됨
// Execute the code block in order after hoisting

// hoisting: var, function declaration 이 가장 위로 올라감

console.log("1"); // 동기
setTimeout(() => {
  console.log("2");
}, 1000); // 비동기, 브라우저에서 1초 후에 이 함수 실행
console.log("3"); // 동기
// 결과: 1 -> 3 -> 2

// 2. 콜백함수
// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello")); // 동기

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000); // 비동기
// 결과: 1 -> 3 -> "hello" -> 2 -> "async callback"
