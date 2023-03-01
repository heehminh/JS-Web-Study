// async & await
// clear style of using promise

// Promise 사용
function fetchUser() {
  // do network request in 10 secs
  return new Promise((resolve, reject) => {
    resolve("minhee");
  });
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 1. async: resolve를 사용하지 않고도 자동으로 Promise로 반환
async function fetchUser() {
  // do network request in 10 secs
  return "minhee";
}

const user1 = fetchUser();
user1.then(console.log);
console.log(user1);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}

// 콜백 지옥
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana(); // 병렬적으로 처리
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(console.log);

// 어떤 것이든 상관없이 가장 먼저 호출되는 과일 출력
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
