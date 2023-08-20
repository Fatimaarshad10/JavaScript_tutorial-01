// -------------> Problem no 1 <-------------
const array_first = [6,2, 7 ,8]

const new_array  = array_first.reduce((accumulator , currentValue)=>{
    return Math.max(accumulator,currentValue)
})
console.log(new_array)


// -------------> Problem no 2 <-------------
const array_second = [3,4,7,8]
const array_second_new = array_second.reduce((accumulator , currentValue)=>{
    return accumulator + currentValue
})

console.log(array_second_new)

// -------------> Problem no  <-------------
