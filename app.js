let val
// This was created following a tutorial
// There are no semi colons because of an auto formatter (Prettier)

// Selects the document
val = document
// Selects the document as an array
val = document.all

//Selects individual parts of the document
val = document.all[0]
// Selects just the head of the HTML
val = document.head
// Selects the body
val = document.body
// Selects the doctype
val = document.doctype
// Selects the domain
val = document.domain
// Selects the entire URL
val = document.URL
// Selects the character set
val = document.characterSet
// Get the content type
val = document.contentType

// Not recommended
// Selects all the forms on the page
val = document.forms
// Selects a single form
val = document.forms[0]
// Selects the id from a form
val = document.forms[0].id
// Selects the method of a form (get post etc)
val = document.forms[0].method

console.log(val)
