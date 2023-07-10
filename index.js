let myTasks = [];
const btnAddTask = document.getElementById("taskAdder");
const nameOfTaskPlaceholder = document.getElementById("nameOfNewTask");

btnAddTask.addEventListener("click", () => {
  console.log(nameOfTaskPlaceholder.value);
  const newTask = document.createElement("div");
  newTask.classList.add("element");
  const nameOfTask = document.createTextNode(nameOfTaskPlaceholder.value);
  newTask.appendChild(nameOfTask);
  const container = document.getElementById("container");
  container.insertBefore(newTask, container.firstChild);
});
