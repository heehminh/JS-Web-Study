import students from "./data/data.js";
import { designateGrade } from "./src/stage2.js";

// render

// 아래의 renderScore 함수는 위의 두 함수를 통해 구해온 학생의 이름, 등급을 화면에 출력하는 역할을 합니다.
// stage1과 stage2가 완성되면 index.html 페이지에 전달 받은 정보가 보여집니다.

const renderScore = function (students) {
  const container = document.querySelector(".container");
  const scoreList = designateGrade(students);

  let divTemp = "";
  for (let i = 0; i < scoreList.length; i++) {
    divTemp += `
    <div class="student-container">
      <div class="name-container">
        <span class="student-name">이름 :</span>
        <span>${scoreList[i].name}</span>
      </div>
      <div class="grade-container">
        <span class="student-grade">등급 :</span>
        <span>${scoreList[i].grade}</span>
      </div>
    </div>`;
  }

  container.innerHTML += divTemp;
};

renderScore(students);
