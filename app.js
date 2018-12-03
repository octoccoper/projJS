// Define UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
function loadEventListeners() {

  // Add task events
  filter.addEventListener("keydown", filterTasks);
  form.addEventListener("submit", addTask);
  form.addEventListener("keydown", addTaskOnEnter);
  clearBtn.addEventListener("click", clearTasks);
  taskList.addEventListener("click", removeTask);
}

// Add task on submit
function addTask(e) {
  if (taskInput.value === "") {
    console.warn("Input with new task value is empty. Please add some data.");
  } else {
    addItem();
  }
  // Prevent default events
  e.preventDefault();
}

// Add task on click
function addTaskOnEnter(e) {
  if (e.which == 13 || e.keyCode == 13) {
    addItem();
  }

}

// Add item
function addItem() {
  // Create li element
  const li = document.createElement("li");

  // Add classname to li
  li.className = "collection-item";

  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link element
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";

  // Add html icon
  link.innerHTML = "<i class='fa fa-remove'></i>";

  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  document.querySelector("ul.collection").appendChild(li);

  // Clear input with entered data
  taskInput.value = "";
}

function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  taskInput.value = "";
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(
    function (task) {
      const item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    });
}

loadEventListeners();