export function createDeleteButton() {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", () => {
    const wholeTask = deleteButton.parentNode;
    todoList.removeChild(wholeTask);
  });
  return deleteButton;
}
