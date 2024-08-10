const NUMBER_OF_SQUARES = 16;

const grid = document.querySelector(".grid");

for (let i=0; i<NUMBER_OF_SQUARES; ++i) {
    let square = document.createElement("div");
    square.className = "square";
    grid.appendChild(square);
}