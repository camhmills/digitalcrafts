// Write a function to return the maximum occurring character in the input string e.g., if input string is "Test" then function should return 't'.
// Note: capital letter 'T' and small letter 't' should count as the same.

str1 = "holddogecoinkek"
// result: o
str2 = "aahhanotheralgo"
// result: a
str3 = "randywhyyyyy"
// result: y


maxOccur = (array) => {
letterList = array.split('').sort()
newList = [];
for (let index = 0; index < letterList.length; index++) {
    filterList = letterList.filter(letter => letter == letterList[index])
    newList.push(filterList)
}
indexToReturn = newList.map(a=>a.length).indexOf(Math.max(...newList.map(a=>a.length)))
return newList[indexToReturn][0]
}

console.log(maxOccur(str1))
