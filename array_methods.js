// map -> returns new array new array
const numArr = [1, 2, 3, 4]
// using map, multiply each of the elements in numArr by 2 -> [2, 4, 6, 8]
function multiplyByTwo(arr) {
  const multipliedArr = arr.map(function(element) {
    return element * 2
  })
  return multipliedArr
}

console.log(multiplyByTwo(numArr))

const subArr = [3, 6, 9, 12]
// using map, subtract 2 from each of the elements in the array, -> [1, 4, 7, 10]

function subTwoFrom(arr){
  return arr.map(function(element){
      return element - 2
});
}

console.log(subTwoFrom(subArr))


// reduce -> call back function, optional initial value, within the callback function 2 args, previous value and current value
// add all elements in the array together
function addAllElements(arr) {

  // arr looks like this: [1, 2, 3, 4]
  const reducedArr = arr.reduce(function(acc, cur) {

    return acc += cur
  }, 0)
  return reducedArr
}

console.log(addAllElements(numArr))

// return everything multiplied, 1* 2* 3 * 4 = 24

function multiplyAllElements(arr){

  const reducedArr = arr.reduce(function(acc, cur) {
      return acc *= cur
  }, 1)
  return reducedArr
  }
  console.log(multiplyAllElements(numArr));



// filter -> returns shallow copy, function that passes a 'test'

function onlyEvenNumbers(arr) {
  return arr.filter(function(el) {
    return el % 2 === 0
  })
}

console.log(onlyEvenNumbers(numArr))

// for each -> doesn't return, calls function for each element in array
// let fruits = ['apple', 'orange', 'banana']
// let forEachFruits = fruits.forEach(function(fruit) {
//   console.log(fruit + '!')
//   return fruit + '!'
// })
// console.log(forEachFruits)

// slice -> return shallow copy of array

// splice -> mutates original array
