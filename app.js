// Query Selector
// No semi colons because of Prettier auto formatting.
console.log(document.querySelector("#task-title"))
console.log(document.querySelector(".card-title"))
console.log(document.querySelector("h5"))

const items = document.getElementsByClassName("col")

// Get elements by ClassName
console.log(document.getElementsByClassName("col"))

console.log(items[0])

// Setting the style to the class name elements
items[0].style.background = "red"
items[2].textContent = "Hello World!"
