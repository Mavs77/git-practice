
// let salaries = {
//     John: 100, 
//     Ann: 160, 
//     Pete: 130,
// }

// function sumOjectValues(obj){
//     let sum = 0; 
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             sum += obj[key]; 
//         }
//     }

//     return sum; 
// }

// console.log(sumOjectValues(salaries)); 

let menu = {
    width: 200, 
    height: 300, 
    title: "My menu"
}; 

function multiplyNumeric (obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2; 
        }
    }

    return obj; 
}

console.log(multiplyNumeric(menu))

let message = "Hello"; 

let phrase = message; 

// console.log(phrase)

message = "No"

console.log(phrase); 

console.log(message)