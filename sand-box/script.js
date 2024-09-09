//creating variable linked to the parent container 
const container = document.querySelector('.container')

//using a for loop to create child elements to append to the parent container. Number of iteration is 16 * 16. 
for (let i = 0; i < 16 * 16; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
}

//created new variable representing all divs 
let hover = document.querySelectorAll('div');

//basically creating a functionality where the background changes when you hover over the element. 
hover.forEach(function(hover){
    hover.addEventListener('mouseover', (event) => {
        event.target.classList.add('change-background')
    })
})

//variable that connects us to the button called "resize"
const btn = document.querySelector('.resize')

//creates an event listener for the resize button. Calls another function if the number is below 100 and alerts you to type a smaller number if in excess of 100
btn.addEventListener('click', () => {
    let gridNumber = prompt('How many squares would you like?(Max 100)')
    if (gridNumber <= 100){
        newGrid(gridNumber)
    }else{
        alert('Please type a number under 100')
    }
})


//function that first removes the children and then uses a for loop to create new grid based on the number the user places inside the prompt
function newGrid(gridNumber){
    const cont = document.querySelector('.container')
    const deleteGrid = document.querySelectorAll('.square')

    deleteGrid.forEach(function(deleteGrid){
        cont.removeChild(deleteGrid)
    })
    

    for(let i = 0; i < gridNumber * gridNumber; i++){
        const newSquare = document.createElement('div')
        newSquare.classList.add('square')
        newSquare.style.width = 498 / gridNumber + 'px'
        newSquare.style.height = 498 / gridNumber + 'px'
        container.appendChild(newSquare)
    }
}

