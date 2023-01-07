import addTask from "./addTask";

const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {
  const titleInput = document.getElementById("title");

  const title = titleInput.value;

  const descriptionInput = document.getElementById("description");
  const description = descriptionInput.value;

  const dueDateInput = document.getElementById("due-date");
  const dueDate = dueDateInput.value;

  const priorityInput = document.getElementById("priority");
  const priority = priorityInput.value;

  addTask(title, dueDate, priority, description);

  document.querySelector("form").reset();
});
