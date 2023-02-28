// 1. make a string out of an array (array -> string)
{
  const fruits = ["apple", "banana", "orange"];
  const str = fruits.join(" ");
  console.log(str);
}

// 2. make an array out of a string
{
  const fruits = "apple, banana, orange";
  console.log(fruits.split(" "));
}

// 3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  // 방법 (1)
  const ans = [];
  for (let element of array) {
    ans.unshift(element);
  }
  console.log(ans);

  // 방법 (2)
  console.log(array.reverse());
}

// 4. make new array without the first tow elements
{
  const array = [1, 2, 3, 4, 5];
  // 방법 (1)
  const result = array.slice(2, 5);
  console.log(result);

  // 방법 (2)
  array.splice(0, 2);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// 5. find a student with the score 90
{
  const result = students.find((student) => {
    return student.score === 90;
  });
  console.log(result);
}

// 6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// 7. make an array containing only the students' scores
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// 8. check if there is a student with the score lower than 50
{
  // 학생들 중 한명이라도 50점 미만인 학생이 있는지
  // 1개라도 만족하는지 확인: some
  const result = students.some((student) => student.score < 50);
  console.log(result);

  // 모든 학생들의 점수가 50점 미만인지
  // 모두 만족하는지 확인: every
  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
}

// 9. compute students' average score
{
  const result = students.reduce((prev, curr) => {
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

// 10. make a string containing all the scores, sorted in ascending order
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join(", ");
  console.log(result);
}
