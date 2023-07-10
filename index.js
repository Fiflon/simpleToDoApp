let myTasks = [];
const btnAddTask = document.getElementById("taskAdder");
const nameOfTaskPlaceholder = document.getElementById("nameOfNewTask");
const todoList = document.getElementById("todoList");
btnAddTask.addEventListener("click", () => {
  let titleOfTask = nameOfTaskPlaceholder.value.trim();
  if (titleOfTask == "") {
  } else {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let todoTask = document.createElement("label");
    todoTask.textContent = titleOfTask;

    li.appendChild(checkbox);
    li.appendChild(todoTask);
    todoList.appendChild(li);
  }
});
