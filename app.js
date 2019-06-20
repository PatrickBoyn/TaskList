// Get Element by Id
console.log(document.getElementById("task-title"))

// Sets the get element by id as a variable.
const taskTitle = document.getElementById("task-title")

// Changes the style of an id
taskTitle.style.background = "red"
// Sets the color of the id
taskTitle.style.color = "white"
// Sets the padding of the id
taskTitle.style.padding = "5px"
// Sets the display to none
// taskTitle.style.display = "none"

// Change the content
taskTitle.textContent = "Task List"
taskTitle.innerText = "My Tasks"
// Adding HTML via javascript
taskTitle.innerHTML = '<span style="color:blue">Task List HTML!</span>'
