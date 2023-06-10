// Selecting elements
const taskInput = document.getElementById("new-task");
const addButton = document.querySelector("button");
const incompleteTaskHolder = document.getElementById("incomplete-tasks");
const completedTasksHolder = document.getElementById("completed-tasks");

// Create a new task list item
const createNewTaskElement = (taskString) => {
  const listItem = document.createElement("li");
  const checkBox = document.createElement("input");
  const label = document.createElement("label");
  const editInput = document.createElement("input");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  checkBox.type = "checkbox";
  editInput.type = "text";
  editButton.textContent = "Edit";
  editButton.className = "edit";
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete";

  label.textContent = taskString;

  listItem.append(checkBox, label, editInput, editButton, deleteButton);

  return listItem;
};

// Add a new task
const addTask = () => {
  const taskString = taskInput.value.trim();

  if (taskString === "") {
    return;
  }

  const listItem = createNewTaskElement(taskString);
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  taskInput.value = "";
};

// Edit an existing task
const editTask = function () {
  const listItem = this.parentNode;
  const editInput = listItem.querySelector("input[type=text]");
  const label = listItem.querySelector("label");
  const containsClass = listItem.classList.contains("editMode");

  if (containsClass) {
    label.textContent = editInput.value;
  } else {
    editInput.value = label.textContent;
  }

  listItem.classList.toggle("editMode");
};

// Delete a task
const deleteTask = function () {
  const listItem = this.parentNode;
  const ul = listItem.parentNode;
  ul.removeChild(listItem);
};

// Mark a task as completed
const taskCompleted = function () {
  const listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
};

// Mark a task as incomplete
const taskIncomplete = function () {
  const listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
};

// Bind task events to the respective elements
const bindTaskEvents = (taskListItem, checkBoxEventHandler) => {
  const checkBox = taskListItem.querySelector("input[type=checkbox]");
  const editButton = taskListItem.querySelector("button.edit");
  const deleteButton = taskListItem.querySelector("button.delete");

  editButton.addEventListener("click", editTask);
  deleteButton.addEventListener("click", deleteTask);
  checkBox.addEventListener("change", checkBoxEventHandler);
};

// Bind initial events to existing list items
for (const listItem of incompleteTaskHolder.children) {
  bindTaskEvents(listItem, taskCompleted);
}

for (const listItem of completedTasksHolder.children) {
  bindTaskEvents(listItem, taskIncomplete);
}

// Add task event listeners
addButton.addEventListener("click", addTask);
