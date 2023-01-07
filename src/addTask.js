function addTask(task, dueDate, priority, description) {
  const todoList = document.querySelector("#content");
  console.log(todoList);
  // create a new list item
  const listItem = document.createElement("div");
  listItem.innerHTML =
    task + " " + dueDate + " " + priority + " " + description;

  console.log(listItem);

  todoList.appendChild(listItem);

  console.log(todoList);
}

export default addTask;
