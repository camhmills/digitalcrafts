const solutions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const ONE = "X"
const TWO = "X"
const THREE = "X"
const FOUR = " "
const FIVE = " "
const SIX = " "
const SEVEN = " "
const EIGHT = " "
const NINE = " "

const board = [
    ONE,   TWO,   THREE,
    FOUR,  FIVE,    SIX,
    SEVEN, EIGHT,  NINE
];

const xTracker = []
const oTracker = []

console.log(board)
let counter = 0
for (let index = 0; index < board.length; index++) {
    board[index] === 'X' ? xTracker.push(index) : null
    board[index] === 'O' ? oTracker.push(index) : null
}



console.log(solutions[0])

