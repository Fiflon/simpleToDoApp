export function checkIfStringNotEmpty(givenString) {
  let onlyMemo = givenString.trim();
  if (onlyMemo === "") {
    return false;
  } else {
    return true;
  }
}

const btnAddTask = document.getElementById("taskAdder");
const nameOfTaskPlaceholder = document.getElementById("nameOfNewTask");
const adderSpace = document.getElementById("adderSpace");
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
