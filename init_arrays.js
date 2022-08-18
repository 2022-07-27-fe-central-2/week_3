// array

// 1.
const numsArr = [1,2,52,4,5,28,7]
// [0,1,2,3,4,5,6] index values
// [1,2,3,4,5,6,7] end result
// set nums element value in order from 1 - 7

function setNums(arr) {
  arr[2] = 3
  arr[5] = 6
  return arr
}
console.log(numsArr)
console.log(setNums(numsArr))

// 2.
const cars = ['buick', 'chevy', 'ford', 'honda', 'mini', 'toyota']
// while keeping alphabetical order add 'kia', 'jeep', 'bmw'
// cars = ['bmw','buick','chevy','ford','honda','jeep','kia','mini','toyota']

// cars = ['bmw','buick','chevy','ford','honda','jeep','kia','mini','toyota']
function carOrder(arr) {
  arr.push('kia', 'jeep', 'bmw');
  arr.sort();
  console.log(arr);
}

carOrder(cars);


// 3.
const board = [
  ['O', 'O', 'X'],
  ['', 'X', ''],
  ['', 'O', 'X']
]
// finish the board so that x wins
board[2][0] = 'X'
console.log(board)

// 4.
const newBoard = []
// using a loop create a 2d array newBoard that looks like the board above, don't worry about populating the board

// 1 loop, from index 0 to index 2, newBoard[i] = ['','','']
// 2 loops, outer loop index 0 to index 2, in inner loop index 0 to 2 , if its even index i%2 ===0 'x' else 'o'

function createTicTacToeBoard(emptyBoard) {
  for (let i=0; i<3; i++) {
    emptyBoard[i] = ['x','o','x']
  }
  console.log(emptyBoard)

  // for (let i =0; i<3; i++) {
  //   for(let j=0; j<3; j++) {
  //     emptyBoard[i][j] = 'x'
  //     if j %2 === 0 {
  //       emptyBoard[i][j] = 'x'
  //     } else {
  //       emptyBoard[i][j] = 'o'
  //     }
  //   }
  // }
}

createTicTacToeBoard(newBoard)