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
    alert("타이머가 종료 되었습니다.");
  } else if (isNaN(targetDate)) {
    alert("유효한 시간대가 아닙니다.");
  }

  const remainingDate = Math.floor(remaining / 3600 / 24); // 일
  const remainingHours = Math.floor(remaining / 3600) % 24; // 시간
  const remainingMinutes = Math.floor(remaining / 60) % 60; // 분
  const remainingSeconds = Math.floor(remaining) % 60; // 분
  console.log(
    remainingDate,
    remainingHours,
    remainingMinutes,
    remainingSeconds
  );
};
