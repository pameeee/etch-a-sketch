let container = document.querySelector(".container");
let mode = "normal";

function createBoxes(input) {
    const dimension = 100 / input;
    let color = "green";
    container.innerHTML = "";
    function generateRandomRGBColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }

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
            if (mode == "randomColor") {
                box.style.backgroundColor = generateRandomRGBColor();
            } else {
                box.style.backgroundColor = "green";
            }
        })
    );
}

document.getElementById("promptButton").addEventListener("click", function () {
    const userInput = prompt("Pick a number: ");
    if (userInput <= 100) {
        let numberOfSquares = userInput;
        dimension = 100 / numberOfSquares;
        mode = "normal";
        createBoxes(numberOfSquares);
    } else {
        alert("Please enter a valid number not greater than 100.");
    }
});

document.getElementById("randomColor").addEventListener("click", function () {
    mode = "randomColor";
});

createBoxes(5);
