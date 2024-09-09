const container = document.querySelector('.container')

for (let i = 0; i < 16 * 16; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
}

let hover = document.querySelectorAll('div');
hover.forEach(function(hover){
    hover.addEventListener('mouseover', (event) => {
        event.target.classList.add('change-background')
    })
})

const btn = document.querySelector('.resize')

btn.addEventListener('click', () => {
    let gridNumber = prompt('How many squares would you like?(Max 100)')
    if (gridNumber <= 100){
        newGrid(gridNumber)
    }else{
        alert('Please type a number under 100')
    }
})


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

