// Define UI variables
// This was done using a tutorial
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Removes task event
  taskList.addEventListener('click', removeTask);
  // Clears all task events
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks and events
  filter.addEventListener('keyup', filterTasks);
}

// Get the tasks from local storage
function getTasks() {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  tasks.forEach(function(task) {
    // Create li element
    const li = document.createElement('li');
    // Add a class
    li.className = 'collection-item';
    // Create text node and append to the li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Adds a class to the link
    link.className = 'delete-item secondary-content';
    // TODO create SVG ICON instead
    link.innerHTML = '<i> X</i>';
    // Append the link to the li
    li.appendChild(link);
    // Append the li to the ul
    taskList.appendChild(li);
  });
}

function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }
  // Create li element
  const li = document.createElement('li');
  // Add a class
  li.className = 'collection-item';
  // Create text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Adds a class to the link
  link.className = 'delete-item secondary-content';
  // TODO create SVG ICON instead
  link.innerHTML = '<i style="cursor: pointer"> X</i>';
  // Append the link to the li
  li.appendChild(link);
  // Append the li to the ul
  taskList.appendChild(li);

  storeTaskInStorage(taskInput.value);

  // Clear the input
  taskInput.value = '';

  e.preventDefault();
}

// store task in local storage
function storeTaskInStorage(task) {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
  // Remove from local storage
  removeTaskFromStorage(e.target.parentElement.parentElement);
}

function removeTaskFromStorage(taskItem) {
  console.log(taskItem);
}
// TODO figure out why the clear tasks button goes away when used
function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

function createLi(task) {}
