// #1
// Given a string with a date "09/10/2021", write a function that removes the "/" and returns the following date format:
// expected result: 20210910

const str = "09/10/2021";

function formatDate(str) {
str = str.replace(/\//g, '')
console.log(str)
}

formatDate(str)