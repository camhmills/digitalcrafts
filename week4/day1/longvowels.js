function longVowels(word) {
    word1 = word.replace(/a/gi, "aaaaa")
    word2 = word1.replace(/e/gi, "eeeee")
    word3 = word2.replace(/i/gi, "iiiii")
    word4 = word3.replace(/o/gi, "ooooo")
    word5 = word4.replace(/u/gi, "uuuuu")
    console.log(word5)
}

longVowels("Guh")