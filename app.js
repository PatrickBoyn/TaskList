// Define UI variables
// No semi colons because of Prettier (Auto formatter)
// This was done using a tutorial
const form = document.querySelector("#task-form")
const taskList = document.querySelector(".collection")
const clearBtn = document.querySelector(".clear-tasks")
const filter = document.querySelector("#filter")
const taskInput = document.querySelector("#task")

// Load all event listeners
loadEventListeners()

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener("submit", addTask)
}

function addTask() {}
