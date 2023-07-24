import { createDeleteButton } from "./components/delButton.js";
import { createCheckbox } from "./components/taskCheckbox.js";
import { createLabel } from "./components/taskLabel.js";
let myTasks = [];
const btnAddTask = document.getElementById("taskAdder");
const nameOfTaskPlaceholder = document.getElementById("nameOfNewTask");
const todoList = document.getElementById("todoList");
const adderSpace = document.getElementById("adderSpace");
btnAddTask.addEventListener("click", () => {
  addNewTask();
});
function addNewTask() {
  let titleOfTask = nameOfTaskPlaceholder.value.trim();
  if (titleOfTask == "") {
    return;
  }
  let li = document.createElement("li");
  let newCheckbox = createCheckbox();
  let newTaskLabel = createLabel(titleOfTask);
  let newDeleteButton = createDeleteButton();

  li.appendChild(newCheckbox);
  li.appendChild(newTaskLabel);
  li.appendChild(newDeleteButton);
  todoList.appendChild(li);
  nameOfTaskPlaceholder.value = "";
}

adderSpace.addEventListener("mouseover", (event) => {
  btnAddTask.style.background = "#4d7298ff";
  nameOfTaskPlaceholder.style.background = "#4d7298ff";
});
adderSpace.addEventListener("mouseleave", (event) => {
  btnAddTask.style.background = "#77a6b6ff";
  nameOfTaskPlaceholder.style.background = "#77a6b6ff";
});
btnAddTask.addEventListener("focus", () => {
  btnAddTask.style.background = "#d0efb1ff";
});
