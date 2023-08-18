const numberOfSquares = 8;
const dimension = 100 / numberOfSquares;
console.log("Dimension is ", dimension);

function createBoxes() {
    for (let i = 0; i < numberOfSquares ** 2; i++) {
        var container = document.querySelector(".container");
        var newBox = document.createElement("div");
        newBox.classList.add("box");
        newBox.style.width = `${dimension}%`;
        newBox.style.height = `${dimension}%`;
        container.append(newBox);
    }
}

createBoxes();