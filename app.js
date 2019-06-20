// Get Element by Id
console.log(document.getElementById("task-title"))

// Changes the style of an id
document.getElementById("task-title").style.background = "red"
// Sets the color of the id
document.getElementById("task-title").style.color = "white"
// Sets the padding of the id
document.getElementById("task-title").style.padding = "5px"
// Sets the display to none
// document.getElementById("task-title").style.display = "none"

// Change the content
document.getElementById("task-title").textContent = "Task List"
document.getElementById("task-title").innerText = "My Tasks"
// Adding HTML via javascript
document.getElementById("task-title").innerHTML =
  '<span style="color:blue">Task List HTML!</span>'
