import { createCheckbox } from "./taskCheckbox";
import { createDeleteButton } from "./taskDelButton";
import { createLabel } from "./taskLabel";

const nameOfTaskPlaceholder = document.getElementById("nameOfNewTask");
const todoList = document.getElementById("todoList");

export function checkIfTitleOfNewTaskNotEmpty() {}

export function createNewTask() {
  titleOfNewtask = nameOfTaskPlaceholder.innerText.trim();
  if (titleOfNewtask === "") {
    return;
  }
  let newListElement = document.createElement("li");
  let newCheckbox = createCheckbox();
  let newTaskLabel = createLabel(titleOfNewtask);
  let newDeleteButton = createDeleteButton();

  newListElement.appendChild(newCheckbox);
  newListElement.appendChild(newTaskLabel);
  newListElement.appendChild(newDeleteButton);
  return newListElement;
}

export function addNewTaskToTheList(newTask) {
  todoList.appendChild(newTask);
}
