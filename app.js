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
  // Removes task event
  taskList.addEventListener("click", removeTask)
  // Clears all task events
  clearBtn.addEventListener("click", clearTasks)
  // Filter tasks and events
  filter.addEventListener("keyup", filterTasks)
}

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task")
  }

  //   Create li element
  const li = document.createElement("li")
  //   Add a class
  li.className = "collection-item"
  // Create text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value))
  // Create new link element
  const link = document.createElement("a")
  // Adds a class to the link
  link.className = "delete-item secondary-content"
  //   TODO create SVG ICON instead
  link.innerHTML = "<i> X</i>"
  // Append the link to the li
  li.appendChild(link)
  // Append the li to the ul
  taskList.appendChild(li)

  // Clear the input
  taskInput.value = ""

  e.preventDefault()
}
// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove()
    }
  }
}

function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
}

// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase()

  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block"
    } else {
      task.style.display = "none"
    }
  })
}
