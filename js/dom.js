const UNCOMPLETED_LIST_TODO_ID = "todos";

function addTodo() {
  const uncompletedTODOList = document.getElementById(UNCOMPLETED_LIST_TODO_ID);
  const textTodo = document.getElementById("title").value;
  const timestamp = document.getElementById("date").value;

  const todo = makeTodo(textTodo, timestamp);
  uncompletedTODOList.append(todo);
}

function createButton(buttonTypeClass, eventListener) {
  const button = document.createElement("button");
  button.classList.add(buttonTypeClass);
  button.addEventListener("click", function (event) {
    eventListener(event);
  });
  return button;
}

function makeTodo() {
  const textTitle = document.createElement("h2");
  textTitle.innerText = "Tugas Android";

  const textTimestamp = document.createElement("p");
  textTimestamp.innerText = "2021-05-01";

  const textContainer = document.createElement("div");
  textContainer.classList.add("inner");
  textContainer.append(textTitle, textTimestamp);

  const container = document.createElement("div");
  container.classList.add("item", "shadow");
  container.append(textContainer);

  container.append(createCheckButton());
  return container;
}

const COMPLETED_LIST_TODO_ID = "completed-todos";

function addTaskToCompleted(taskElement) {
  taskElement.remove();
}

function createCheckButton() {
  return createButton("check-button", function (event) {
    addTaskToCompleted(event.target.parentElement);
  });
}
