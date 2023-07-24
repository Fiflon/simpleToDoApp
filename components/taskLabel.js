export function createLabel(nameOfNewTask) {
  let todoTaskLabel = document.createElement("label");
  todoTaskLabel.textContent = nameOfNewTask;
  return todoTaskLabel;
}
