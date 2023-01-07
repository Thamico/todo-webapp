import generateTasks, { addTask } from "./generateTasks";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = e.elements.task.value;
  const dueDate = e.elements.dueDate.value;
  addTask(task, dueDate);
});
