/*Group Anagrams
Write a function that takes in an array of strings and groups anagrams together.
Anagrams are strings made up of exactly the same letters, where order doesn’t matter. For example, cinema and iceman are anagrams; similarly foo and ofo are anagrams.
Your function should return a list of anagram groups in no particular order.
Sample Input
[“yo”, “act”, “flop”, “tac”, “foo”, “cat”, “oy”, “olfp”]
Sample Output
[[“yo”, “oy”], [“flop”, “olfp”], [“act”, “tac”, “cat”], [“foo”]]
*/

function anagram(array){
newList = []
for (const word of array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index].includes(word) == true){
            matchList = [array[index], word]
            newList.push(matchList);
        }
    }
}
console.log(newList)
}

wordArray = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]

anagram(wordArray);