let container = document.querySelector(".container");

function createBoxes(input) {
    let dimension = 100 / input;
    container.innerHTML = "";

    for (let i = 0; i < input ** 2; i++) {
        let newBox = document.createElement("div");
        newBox.classList.add("box");
        newBox.style.width = `${dimension}%`;
        newBox.style.height = `${dimension}%`;
        container.append(newBox);
    }

    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) =>
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "green";
        })
    );
}

document.querySelector("button").addEventListener("click", function () {
    const userInput = prompt("Pick a number: ");
    if (userInput <= 100) {
        let numberOfSquares = userInput;
        dimension = 100 / numberOfSquares;
        createBoxes(numberOfSquares);
    } else {
        alert("Please enter a valid number not greater than 100.");
    }

});

createBoxes(5);
