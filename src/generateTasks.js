// Get the form and the task list
const form = document.querySelector("form");
const taskList = document.querySelector("#task-list");

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the form data
  const title = form.elements.title.value;
  const description = form.elements.description.value;
  const dueDate = form.elements.dueDate.value;
  const priority = form.elements.priority.value;

  // Create a new list item for the task
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
    <p>Due: ${dueDate}</p>
    <p>Priority: ${priority}</p>
  `;

  // Append the task to the task list
  taskList.appendChild(taskItem);

  // Reset the form
  form.reset();
});

export function addTask(title, description, dueDate, priority) {
  // Create a new list item for the task
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
      <p>Due: ${dueDate}</p>
      <p>Priority: ${priority}</p>
    `;

  // Append the task to the task list
  taskList.appendChild(taskItem);
}
