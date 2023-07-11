let myTasks = [];
const btnAddTask = document.getElementById("taskAdder");
const nameOfTaskPlaceholder = document.getElementById("nameOfNewTask");
const todoList = document.getElementById("todoList");

function addNewTask() {
  let titleOfTask = nameOfTaskPlaceholder.value.trim();
  if (titleOfTask == "") {
    return;
  }
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let todoTask = document.createElement("label");
  todoTask.textContent = titleOfTask;

  let delButton = document.createElement("button");

  delButton.textContent = "Delete";
  delButton.addEventListener("click", () => {
    let li = delButton.parentNode;
    todoList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(todoTask);
  li.appendChild(delButton);
  todoList.appendChild(li);
  document.getElementById("nameOfNewTask").value = "";
}

nameOfTaskPlaceholder.addEventListener("mouseover", (event) => {
  btnAddTask.style.background = "#4d7298ff";
});
nameOfTaskPlaceholder.addEventListener("mouseleave", (event) => {
  btnAddTask.style.background = "#77a6b6ff";
});
