import { createCheckbox } from "./taskCheckbox.js";
import { createDeleteButton } from "./taskDelButton.js";
import { createLabel } from "./taskLabel.js";
import { checkIfStringNotEmpty } from "./utils.js";

const nameOfTaskPlaceholder = document.getElementById("nameOfNewTask");
const todoList = document.getElementById("todoList");

export function createNewTask() {
  let titleOfNewtask = nameOfTaskPlaceholder.value.trim();
  // w
  if (!checkIfStringNotEmpty(titleOfNewtask)) {
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
