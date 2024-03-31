// Spread Operator: written as ..., is used to unroll (spread) and iterable collection (object or array) 
// into individual elements seperated by comma.


const array1 = [1, 2, 3]
const array2 = [10, 20, 30]

const combined = [...array1, ...array2]
console.log(combined)


// lets use spread operator for objects

const info = {
    name: "Dillian",
    youtube: "deecode"
}

const fullInfo = {
    ...info,
    name: "Ukpong",
    youtube: 'Zarzkie',
     age: 25,
     language: "English",
}

console.log(fullInfo)
