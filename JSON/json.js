// JSON: Javascript Object Notation

// 1. Object to JSON
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
