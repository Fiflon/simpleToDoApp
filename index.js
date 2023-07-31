import {
  addNewTaskToTheList,
  createNewTask,
} from "./components/listOfTasks.js";

let myTasks = [];
const btnAddTask = document.getElementById("taskAdder");
const nameOfTaskPlaceholder = document.getElementById("nameOfNewTask");

btnAddTask.addEventListener("click", () => {
  let newTask = createNewTask();
  if (newTask != undefined) {
    addNewTaskToTheList(newTask);
  }

  nameOfTaskPlaceholder.value = "";
});
