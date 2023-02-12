const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");
const intervalIdArr = [];

container.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";

const dateFormMaker = () => {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  return dateFormat;
};

const counterMaker = (targetDateInput) => {
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0); // 자정을 기준으로 세팅
  const remaining = (targetDate - nowDate) / 1000; // remaining: 초 기준으로 작성됨

  if (remaining <= 0) {
    container.style.display = "none";
    messageContainer.style.display = "flex";
    messageContainer.innerHTML = "<h3>타이머가 종료 되었습니다.</h3>";
    return;
  } else if (isNaN(targetDate)) {
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

  let i = 0;
  for (let tag of documentArr) {
    document.getElementById(tag).textContent = remainingObj[timeKeys[i++]];
  }
};

const starter = () => {
  const targetDateInput = dateFormMaker();
  container.style.display = "flex";
  messageContainer.style.display = "none";
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
  container.style.display = "none";
  messageContainer.style.display = "flex";
  messageContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";
  setClearInterval();
};
