"use strict";

// Promise: 비동기
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network 통신, read files)
  console.log("doing something...");
  setTimeout(() => {
    // resolve("minhee"); // 성공: resolve
    reject(new Error("no network")); // 실패: reject
  }, 2000);
});

// 2. Consumers: then, catch, finally 등을 이용해 값을 받아옴
promise // then: 성공 시에 호출
  .then((value) => {
    // value: resolve 콜백함수에서 전달된 "minhee"
    console.log(value);
  }) // catch: 실패 시에 호출
  .catch((error) => {
    console.log(error);
  }) // finally: 성공, 실패에 관계없이 무조건 마지막에 호출됨
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2) // 2
  .then((num) => num * 3) // 6
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); // 5
    });
  })
  .then((num) => console.log(num)); // 5
// then 에서는 값을 바로 전달해도 되고, 또 다른 비동기 (Promise)를 전달해도 된다.

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hen"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${hen} => egg`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => cook`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen)) // .then(getEgg) // 받아오는 인자가 1개인 경우 생략 가능
  .catch((error) => {
    return "bread";
  })
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch(console.log); // Error catch
