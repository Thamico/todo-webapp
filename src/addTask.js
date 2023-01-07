function addTask(task, dueDate, priority, description) {
  // create a new list item
  const listItem = document.createElement("li");
  listItem.innerHTML = `
      <span>${task}</span>
      <span>${dueDate}</span>
      <span>${priority}</span>
      <span>${description}</span>
    `;

  // add the new list item to the to-do list
  const todoList = document.querySelector("#content");
  todoList.appendChild(listItem);
}

export default addTask;
