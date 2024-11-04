const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText === "") return;

  const listItem = document.createElement("li");

  // Task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.addEventListener("click", () => {
    taskSpan.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(listItem);
  });

  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteBtn);
  todoList.appendChild(listItem);

  todoInput.value = "";
}
