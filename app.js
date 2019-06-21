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

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task")
  }

  //   Create li element
  const li = document.createElement("li")
  //   Add a class
  li.className = "collection-item"
  //   Create text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value))
  //   Create new link element
  const link = document.createElement("a")
  //   Adds a class to the link
  link.className = "delete-item secondary-content"
  //   TODO create SVG ICON instead
  link.textContent = "X"
  //   Append the link to the li
  li.appendChild(link)
  //   Append the li to the ul
  console.log(li)
  e.preventDefault()
}
