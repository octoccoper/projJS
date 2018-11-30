// Define UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
function loadEventListeners() {

  // Add task event
  form.addEventListener("submit", addTask)
}

// Add task
function addTask (e) {
if(taskInput.value === ""){
  console.log("Input with new task value is empty");
}
else {
// Create li element
const li = document.createElement("li");

// Add classname to li
li.className = "collection-item";

// Create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));
}

// Create new link element
const link = document.createElement("a");
link.className = "delete-item secondary-content";

//Add html icon
link.innerHTML = "<i class='fa fa-remove'></i>";

// Append the link to li
li.appendChild(link);

// Append li to ul
document.querySelector("ul.collection").appendChild(li);


// Prevent default events
e.preventDefault();
}