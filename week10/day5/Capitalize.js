// write a function that capitalizes the first character of every word in a string

phrase1 = "randy doesnt like giving algos"
phrase2 = "arent you glad its friday"
phrase3 = "i wonder whats for lunch today"

console.log(phrase1[1])


const CapitalizeEvery = (array) => {
    const firstLetter = array[0]
    capital = firstLetter.toUpperCase()
    console.log(firstLetter)
    for (const letter of array) {
        if (letter.indexOf(firstLetter) == 0) {
            const newLetter = letter.toUpperCase()
            array[0] = newLetter
            console.log(array[0])
        }
        else if (letter === " ") {
            console.log(array.indexOf(letter))
        }
    }
    console.log(array)
}

CapitalizeEvery(phrase1)