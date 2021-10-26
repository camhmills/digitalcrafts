// #2
// Write a function that checks if a string is a palindrome. Function should return true or false. A palindrome is a word, phrase, or sequence that reads the same backward as forward.
// Ex. racecar, Anna

const str1 = "race car"
const str2 = "back end is awesome"
const str3 = "mom"

function checkString(str){
str = str.replace(/ /g, '')
console.log(str)
if (str === str.split('').reverse().join('')) {
    return true
    
}
else {
    return false
}
}

console.log(checkString(str1))
console.log(checkString(str2))
console.log(checkString(str3))

