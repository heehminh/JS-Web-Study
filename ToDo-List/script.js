const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const savedToDoList = JSON.parse(localStorage.getItem("saved-items"));

const saveItemsFn = () => {
  const saveItems = [];
  for (let i = 0; i < todoList.children.length; i++) {
    const todoObj = {
      contents: todoList.children[i].querySelector("span").textContent,
      complete: todoList.children[i].classList.contains("complete"),
    };
    saveItems.push(todoObj);
  }

  saveItems.length === 0
    ? localStorage.removeItem("saved-items")
    : localStorage.setItem("saved-items", JSON.stringify(saveItems));
  // local storage는 문자열로만 저장이 가능한데
  // 배열이나 객체는 문자열로 저장할 수 없으므로
  // JSON 형식으로 변환시켜준다.
};

const createTodo = (storageData) => {
  let todoContents = todoInput.value;
  if (storageData) {
    todoContents = storageData.contents;
  }

  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    saveItemsFn();
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    saveItemsFn();
  });

  if (storageData?.complete) {
    // storageData && storageData.complete 와 동일
    newLi.classList.add("complete");
  }

  newSpan.textContent = todoContents;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  todoInput.value = "";

  saveItemsFn();
};

if (savedToDoList) {
  for (let i = 0; i < savedToDoList.length; i++) {
    createTodo(savedToDoList[i]);
  }
}

const keyCodeCheck = () => {
  if (window.event.keyCode === 13 && todoInput.value) {
    createTodo();
  }
};

const deleteAll = () => {
  const liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
  saveItemsFn();
};

const accessToGeo = (position) => {
  const positionObj = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
};

const askForLocation = () => {
  navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
    console.log(err);
  });
};

askForLocation();
