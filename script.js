const body = document.querySelector("body");
body.style.display = "flex";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.width = "100vw";
body.style.flexFlow = "row";
body.style.justifyContent = "center";

const container = document.querySelector(".container");
container.style.display = "flex";
container.style.width = "700px";
container.style.height = "700px";
container.style.border = "solid red";
container.style.flexWrap = "wrap";

const square = document.createElement("div"); // Square template
square.classList.add("squares");
square.style.width = "6.25%";
square.style.height = "6.25%";
square.style.boxShadow = "0 0 0 1px red";

// Function to create squares dynamically
function addMoreSquares(numberPerSide) {
    container.innerHTML = ""; // Clear existing grid
    const totalSquares = numberPerSide * numberPerSide; // Total squares
    const squareSize = 700 / numberPerSide; // Size of each square (700px is the container size)

    for (let i = 0; i < totalSquares; i++) {
        const newSquare = square.cloneNode(true);
        newSquare.style.width = `${squareSize}px`;
        newSquare.style.height = `${squareSize}px`;

        // Add hover effect
        newSquare.addEventListener("mouseenter", (event) => {
            const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
            let code = "#";
            for (let i = 0; i < 6; i++) {
                code += hexArray[Math.floor(Math.random() * 16)];
            }
            event.target.style.backgroundColor = code;
        });

        container.appendChild(newSquare);
    }
}

// Initial grid
addMoreSquares(16); // Default to a 16x16 grid

// Add button dynamically
const btn = document.createElement("button");
btn.textContent = "Resize Grid";
btn.style.position = "absolute";
btn.style.top = "10px";
btn.style.padding = "10px 20px";
body.appendChild(btn);

// Event listener for button click
btn.addEventListener("click", () => {
    const userChoice = prompt("Choose a number between 1 and 100");
    const gridSize = parseInt(userChoice);

    if (!gridSize || gridSize < 1 || gridSize > 100) {
        alert(`${userChoice} is not a valid number between 1 and 100`);
        return;
    }

    addMoreSquares(gridSize); // Generate new grid
});
