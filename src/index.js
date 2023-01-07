import addTask from "./addTask";

const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault;
  const taskInput = document.getElementById("title");
  const dueDateInput = document.querySelector("#due-date");
  const priorityInput = document.querySelector("#priority");
  const descriptionInput = document.querySelector("#description");

  const task = taskInput.value;
  const dueDate = dueDateInput.value;
  const priority = priorityInput.value;
  const description = descriptionInput.value;

  console.log(task);
  console.log(dueDate);
  console.log(priority);
  console.log(description);

  addTask(task, dueDate, priority, description);
});
