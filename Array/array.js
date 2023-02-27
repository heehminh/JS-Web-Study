"use strict";

// 1. Array Declaration (배열 선언)
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position (Index로 배열 접근)
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits[0]); // 배열의 첫번째원소
console.log(fruits[fruits.length - 1]); // 배열의 마지막원소

// 3. Looping over an array
// print all fruits

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// a. push: add an item to the end
fruits.push("🍓", "🍑");
console.log(fruits); // ["🍎", "🍌", "🍓", "🍑"]

// b. pop: remove an item from the end
fruits.pop(); // ["🍎", "🍌", "🍓"]
fruits.pop(); // ["🍎", "🍌"]
console.log(fruits);

// c. unshift: add an item to the beginning
fruits.unshift("🍓", "🍑");
console.log(fruits); // ["🍓", "🍑", "🍎", "🍌"]

// d. shift: remove an item to the beginning
fruits.shift(); // ["🍑", "🍎", "🍌"]
fruits.shift(); // ["🍎", "🍌"]

// note!! shift, unshift는 pop, push보다 느리다

fruits.push("🍓", "🍑", "🍋"); // ["🍎", "🍌", "🍓", "🍑", "🍋"]
// e. splice: remove an item by index position
fruits.splice(1, 1); // start, deleteCount? // ["🍎", "🍓", "🍑", "🍋"]
fruits.splice(1, 1, "🍏", "🍉"); // 지워진 자리에 다음 요소들이 들어감 // ["🍎", "🍏", "🍉", "🍑", "🍋"]

// f. concat: combine two arrays
const fruits2 = ["🍐", "🥥"];
const newFruits = fruits.concat(fruits2); // ["🍎", "🍏", "🍉", "🍑", "🍋", "🍐", "🥥"]

// 5. Searching (검색)
// find the index
// fruits : ["🍎", "🍏", "🍉", "🍑", "🍋"]

// a. indexOf
console.log(fruits.indexOf("🍎")); // 0
console.log(fruits.indexOf("🥥")); // -1 : 배열안에 해당하는 값이 없다면 -1 출력

// b. includes
console.log(fruits.includes("🍎")); // True
console.log(fruits.includes("🥥")); // False

// c. lastIndexOf
fruits.push("🍎"); // ["🍎", "🍏", "🍉", "🍑", "🍋", "🍎"]
console.log(fruits.indexOf("🍎")); // 0 (가장 첫번째 만난 원소의 인덱스 return)
console.log(fruits.lastindexOf("🍎")); // 5 (가장 마지막에 들어오는 원소의 인덱스 return)
