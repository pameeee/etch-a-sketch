let numberOfSquares = 10;
let dimension = 100 / numberOfSquares;
let container = document.querySelector(".container");

function createBoxes(input) {
    console.log(`Creating new container with input `, input);
    container.innerHTML = "";
    console.log("Just deleted the container");
    
    for (let i = 0; i < input ** 2; i++) {
        
        let newBox = document.createElement("div");
        newBox.classList.add("box");
        newBox.style.width = `${dimension}%`;
        newBox.style.height = `${dimension}%`;
        container.append(newBox);
        console.log("Created box ", (i + 1));
    }

    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) =>
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "green";
        })
    );
}

document.querySelector("button").addEventListener(
    "click", function() {
        const userInput = prompt("Pick a number:");
        numberOfSquares = userInput;
        dimension = 100 / numberOfSquares;
        console.log("New numberOfSquares is ", numberOfSquares);
        createBoxes(numberOfSquares);
    }
);

createBoxes(16);