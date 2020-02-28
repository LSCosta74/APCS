let string = 'My name is Lucas'

//Check Length
console.log(string.length)

// convert number to string
// const num = 5
// let s = num.toString()
// console.log(s,typeof s)

//search position/starting letter/included letter
let s = string.search('L')
s = string.startsWith('M')
s = string.includes('X')
console.log(s)

//modifying strings
s = string.toLowerCase()
s = string.toUpperCase()
s = string.trim()
s = string.slice()
console.log(s)

//combine
s = string + ' I am good'
s = string.concat(' I am good')
console.log(s)

//Template Literals
s = `hello ${string} I am good`
console.log(s)

//convert to number
s = 3
const num = Number(string)
console.log(s)