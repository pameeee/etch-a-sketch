const numberOfSquares = 4;

function createBoxes(numberOfSquares) {
    for (let i = 0; i < 5; i++) {
        var container = document.querySelector(".container");
        var newBox = document.createElement("div");
        newBox.classList.add("box");
        container.append(newBox);
    }
}

createBoxes();