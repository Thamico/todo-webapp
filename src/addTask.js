function addTask(task, dueDate, priority, description) {
  const todoList = document.querySelector("#content");

  // create a new list item
  const listItem = document.createElement("div");
  listItem.classList.add("subdiv");
  listItem.classList.add("card");

  // create the "done" button
  const doneButton = document.createElement("button");
  doneButton.textContent = "Done";
  doneButton.classList.add("done-button");

  // attach a click event listener to the "done" button
  doneButton.addEventListener("click", function () {
    // remove the list item when the button is clicked
    todoList.removeChild(listItem);
  });

  // add the task, description, priority, and due date to the list item
  listItem.innerHTML =
    "Task: " +
    task +
    "<br>" +
    "Description: " +
    description +
    "<br>" +
    "Priority: " +
    priority +
    "<br>" +
    "Due Date: " +
    dueDate +
    "<br>";

  // add the "done" button to the list item
  listItem.appendChild(doneButton);

  // add the list item to the todo list
  todoList.appendChild(listItem);
}

export default addTask;
