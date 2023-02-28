// JSON: Javascript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);

// Array -> JSON
json = JSON.stringify(["apple", "banana"]);
console.log(json);

// Object
const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump`);
  },
};
json = JSON.stringify(rabbit);
console.log(json);
// {"name":"tori","color":"white","size":null,"birthDate":"2023-02-28T12:28:23.447Z"}
// jump 함수는 object에 포함된 데이터가 아니기때문에 JSON에서 제거된다
// Symbol도 포함되지 않는다

json = JSON.stringify(rabbit, ["name"]);
console.log(json);
// {"name":"tori"}
// 이름만 포함된다

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "ellie" : value;
});
// 콜백함수
// key: , value: [object Object] // 맨 처음 출력결과는 JSON을 감싸고 있는 Object이다
// json.js:32 key: name, value: tori
// json.js:32 key: color, value: white
// json.js:32 key: size, value: null
// json.js:32 key: birthDate, value: 2023-02-28T12:33:01.307Z
// json.js:32 key: jump, value: () => {
//     console.log(`${name} can jump`);
//   }

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);

rabbit.jump(); // can jump // rabbit object안에는 jump 메서드가 있음
// obj.jump(); // (Error) Uncaught TypeError: obj.jump is not a function
// note! obj -> JSON -> obj 에선 원래 obj의 메서드를 사용할 수 없다

console.log(rabbit.birthDate.getDate()); // birthDate: new Date()의 내장 메서드를 사용할 수 있음
console.log(obj.birthDate); // birthDate가 단순한 문자열임

const obj2 = JSON.parse(json, (key, value) => {
  return key === "birthDate" ? new Date(value) : value;
});
console.log(rabbit.birthDate.getDate());
console.log(obj2.birthDate.getDate()); // new Date() 안의 내장 메서드를 사용할 수 있음
