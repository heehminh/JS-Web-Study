const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");

messageContainer.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";

const dateFormMaker = () => {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  return dateFormat;
};

const counterMaker = () => {
  const targetDateInput = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0); // 자정을 기준으로 세팅
  const remaining = (targetDate - nowDate) / 1000; // remaining: 초 기준으로 작성됨

  if (remaining <= 0) {
    console.log("타이머가 종료 되었습니다.");
    messageContainer.innerHTML = "<h3>타이머가 종료 되었습니다.</h3>";
  } else if (isNaN(targetDate)) {
    console.log("유효한 시간대가 아닙니다.");
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMinutes: Math.floor(remaining / 60) % 60,
    remainingSeconds: Math.floor(remaining) % 60,
  };

  const documentObj = {
    days: document.querySelector("#days"),
    hours: document.querySelector("#hours"),
    min: document.querySelector("#minutes"),
    sec: document.querySelector("#seconds"),
  };

  const timeKeys = Object.keys(remainingObj);
  const docKeys = Object.keys(documentObj);

  // 반복문을 활용한 날짜 데이터 리팩토링
  for (let i = 0; i < timeKeys.length; i++) {
    documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
  }

  //   documentObj["days"].textContent = remainingObj["remainingDate"];
  //   documentObj["hours"].textContent = remainingObj["remainingHours"];
  //   documentObj["min"].textContent = remainingObj["remainingMinutes"];
  //   documentObj["sec"].textContent = remainingObj["remainingSeconds"];
};
