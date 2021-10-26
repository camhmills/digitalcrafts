//1. access captneyepatch

//2. change wonderwoman to diana prince

//3. use an array method to delete the last superhero in the justice league

//4. use an array method to add the word "member" to every hero in the theOtherHeroes array. (ex. crimsonmechdudemember)

//5. combine the justice league members and the other heroes together in a crosserOver array

//6. delete all heroes in the justice league who have the word "man" in their title

//7. iterate over both arrays so that they are no longer just strings but they are objects that are structured like this
//combine them so they are all heroes in one array
const objectarray = [
    {
    name: "spiderman",
    league: "otherHeroes",
   },
    {
    name: "batman",
    league: "Justice league",
   }
]

const justiceLeague = [
    "batman", "wonderwoman", "cyborg", "flash", "aquaman","spiderman", "superman", "greenlantern"
]

const theOtherHeroes = [
    "crimsonmechdude", "hammerboy", "greenguy", "hawkguy", "blackassassin","shieldbro", "captneyepatch"
]

crossOver = []
//#1
console.log(theOtherHeroes[6])
//#2
console.log(justiceLeague[1] = "diana prince")
//#3
justiceLeague.pop()
console.log(justiceLeague)
//#4
const addMember = (array) => {
    for (const name of array) {
        let membername = name + "member"
        console.log(membername)
    }
}
addMember(theOtherHeroes)
//#5
crossOver.push(justiceLeague)
crossOver.push(theOtherHeroes)
console.log(crossOver)
//#6
console.log(justiceLeague.filter(name => !name.includes("man")))
//#7
const makeObjects = (array, array2) => {
    
    for (const hero of array) {
        newHero = {name:hero, league:"justiceLeague"}
        objectarray.push(newHero)
    }
    for (const hero of array2) {
        newHero = {name:hero, league:"theOtherHeroes"}
        objectarray.push(newHero)
    }
    console.log(objectarray)
}

makeObjects(justiceLeague, theOtherHeroes)

console.log(1 +  +"2" + "2");

