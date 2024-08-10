
let squaresPerSide = 16;

const grid = document.querySelector(".grid");

const button = document.querySelector("button");

function createGrid(squaresPerSide){

    for (let i=0; i<squaresPerSide * squaresPerSide; ++i) {
        let square = document.createElement("div");
        square.className = "square";
        square.style.width = `${920/squaresPerSide}px`;
        square.style.height = `${920/squaresPerSide}px`;
        grid.appendChild(square);
    }

    const squares = grid.querySelectorAll("div");

    squares.forEach( (square) => {
        
        square.addEventListener( "mouseover", () => {
            const color = getRandomColor();
            square.style.backgroundColor = color;
        });
    } );
}

function getRandomColor() {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

function clearGrid(){

    while(grid.lastElementChild){
        grid.removeChild(grid.lastElementChild);
    }
}

button.addEventListener("click", () => {
    
    do{
        squaresPerSide = parseInt(prompt("Enter the number of squares/side(max 100)"));
    } while(isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100);

    clearGrid();
    createGrid(squaresPerSide);

});

createGrid(squaresPerSide);
