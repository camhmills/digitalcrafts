// Anagrams are words or phrases that contain the same number of characters. Create a function that checks a set of two strings, and
// returns 'true' if they are anagrams and returns 'false' if they are not.

string1 = "A gentleman"
string2 = "Elegant man"
//expected result: true

string3 = "Clint Eastwood"
string4 = "Old West action"
//expected result: true

string5 = "idontlikealgos"
string6 = "algoverybad"
//expected result: false

const Anagram = (arr1, arr2) => {
    const regex1 = arr1.replace(/\s/g, '')
    const regex2 = arr2.replace(/\s/g, '')
    const arr1length = regex1.length;
    const arr2length = regex2.length;
    return arr1length == arr2length ? true : false;
}

console.log(Anagram(string1, string2))
console.log(Anagram(string3, string4))
console.log(Anagram(string5, string6))