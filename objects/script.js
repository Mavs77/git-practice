
let salaries = {
    John: 100, 
    Ann: 160, 
    Pete: 130,
}

function sumOjectValues(obj){
    let sum = 0; 
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key]; 
        }
    }

    return sum; 
}

console.log(sumOjectValues(salaries)); 