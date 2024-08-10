let squaresPerSide = 16;

const grid = document.querySelector(".grid");

for (let i=0; i<squaresPerSide * squaresPerSide; ++i) {
    let square = document.createElement("div");
    square.className = "square";
    grid.appendChild(square);
}
const squares = grid.querySelectorAll("div");

squares.forEach( (square) => {

    square.addEventListener( "mouseover", () => {
        square.style.backgroundColor = 'white';
    });

} );