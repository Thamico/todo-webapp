// todo-list.js

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  getSummary() {
    return `${this.title}: ${this.description} (Due: ${this.dueDate}, Priority: ${this.priority})`;
  }
}

const todoList = [];

const addTaskForm = document.getElementById("add-task-form");

addTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleInput = document.getElementById("title-input");
  const descriptionInput = document.getElementById("description-input");
  const dueDateInput = document.getElementById("due-date-input");
  const priorityInput = document.getElementById("priority-input");

  const task = new Task(
    titleInput.value,
    descriptionInput.value,
    dueDateInput.value,
    priorityInput.value
  );
  todoList.push(task);

  titleInput.value = "";
  descriptionInput.value = "";
  dueDateInput.value = "";
  priorityInput.value = "";

  updateTodoList();
});

const addTaskButton = document.getElementById("add-task-button");
addTaskButton.addEventListener("click", () => {
  addTaskForm.submit();
  updateTodoList();
});

export const updateTodoList = () => {
  const todoListContainer = document.getElementById("todo-list");
  todoListContainer.innerHTML = "";

  for (const task of todoList) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    const taskSummary = document.createElement("p");
    taskSummary.textContent = task.getSummary();

    taskCard.appendChild(taskSummary);
    todoListContainer.appendChild(taskCard);
  }
};
