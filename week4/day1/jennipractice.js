

function leetspeak(word) {
    if (word.search(/a/i) > 0){
        newWord = word.replace((/a/i), "4")
    return newWord
    }
}

console.log(leetspeak("aeiou"))