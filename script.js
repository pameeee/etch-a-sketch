let numberOfSquares = 16;
const dimension = 100 / numberOfSquares;

function createBoxes() {
    for (let i = 0; i < numberOfSquares ** 2; i++) {
        let container = document.querySelector(".container");
        let newBox = document.createElement("div");
        newBox.classList.add("box");
        newBox.style.width = `${dimension}%`;
        newBox.style.height = `${dimension}%`;
        container.append(newBox);
    }
}

createBoxes();

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => 
    box.addEventListener(
        "mouseenter", () => {
            box.style.backgroundColor = "green";
        }
    )
);

document.querySelector("button").addEventListener(
    "click", function() {
        const userInput = prompt("Pick a number:");
        numberOfSquares = userInput;
        console.log("New numberOfSquares is ", numberOfSquares);
    }
);