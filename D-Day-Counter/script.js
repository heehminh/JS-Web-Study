const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");
const savedDate = localStorage.getItem("saved-date");

const intervalIdArr = [];

const dateFormMaker = () => {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  return dateFormat;
};

const counterMaker = (targetDateInput) => {
  if (targetDateInput !== savedDate) {
    // 받아오는 데이터와 저장된 데이터가 다를 때
    localStorage.setItem("saved-date", targetDateInput);
  }
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0); // 자정을 기준으로 세팅
  const remaining = (targetDate - nowDate) / 1000; // remaining: 초 기준으로 작성됨

  if (remaining <= 0) {
    container.style.display = "none";
    messageContainer.style.display = "flex";
    messageContainer.innerHTML = "<h3>타이머가 종료 되었습니다.</h3>";
    return;
  } else if (isNaN(remaining)) {
    container.style.display = "none";
    messageContainer.style.display = "flex";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    return;
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMinutes: Math.floor(remaining / 60) % 60,
    remainingSeconds: Math.floor(remaining) % 60,
  };

  const timeKeys = Object.keys(remainingObj);
  const documentArr = ["days", "hours", "minutes", "seconds"];

  const format = (time) => {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };

  let i = 0;
  for (let tag of documentArr) {
    const remainingTime = remainingObj[timeKeys[i++]];
    document.getElementById(tag).textContent = format(remainingTime);
  }
};

const starter = (targetDateInput) => {
  console.log(targetDateInput);
  if (!targetDateInput) {
    targetDateInput = dateFormMaker();
  }

  container.style.display = "flex";
  messageContainer.style.display = "none";
  setClearInterval(); // 버튼이 눌리면 기존 interval 모두 삭제
  counterMaker(targetDateInput);
  const intervalId = setInterval(() => {
    counterMaker(targetDateInput);
  }, 1000);

  intervalIdArr.push(intervalId);
};

const setClearInterval = () => {
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
};

const resetTimer = () => {
  localStorage.removeItem("saved-date");
  container.style.display = "none";
  messageContainer.style.display = "flex";
  messageContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";
  setClearInterval();
};

if (savedDate) {
  starter(savedDate);
} else {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";
}
