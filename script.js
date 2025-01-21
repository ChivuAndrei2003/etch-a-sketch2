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



















/*functie grid 
childs al container-ului cu display flex align-items strech
for let i=0,i<16,i++
 for let j=0,j<16,.j++
  create elem div
  div border=1px black
  si aspect-ratio: 1 / 1 ca-sa aiba raport fix intre latime si inaltime
 
  pt a aparea flexbox ca grid 2 dimensional:
  {.container {
    display: flex;
    flex-wrap: wrap;  Allow wrapping to create rows 
    gap: 10px;        Optional: space between grid items 
}

.box {
    flex: 1 1 calc(33.33% - 10px);  3 items per row, minus gap 
    background-color: lightblue;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;  Include padding in width/height 
}
How It Works
flex-wrap: wrap; ensures that items wrap onto the next row when there isn’t enough space.
flex: 1 1 calc(33.33% - 10px);:
flex-grow: 1: Allows items to grow.
flex-shrink: 1: Allows items to shrink.
flex-basis: calc(33.33% - 10px);: Sets the base width for 3 items per row, accounting for the gap.
gap: 10px; creates space between items.}

functia container(care contine div-urile) cu display flex cu align-items 
pe centru

si cred ca trebuie width si height definit

 max-width: 1200px;  Lățimea maximă 
 margin: 0 auto;     Centrare orizontală 
 padding: 0 px;    Spațiu interior pentru margini 
 display: flex;      Activează Flexbox 
 flex-direction: column;  Aranjare pe verticală 
 
 sau pt design responsive
 
 .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

@media (max-width: 768px) {
    .container {
        max-width: 100%;  Pe ecrane mici, folosește toată lățimea 
        padding: 0 10px;
    }
}
    
pentru hover ca-sa elem sa sa inegreasca cu 10% sau 20% 
fol event listener cu mouse hover sau over?

Pentru a face un buton care goliște un container și creează un nou container cu mai
 multe elemente, poți folosi JavaScript. Iată pașii principali:

Selectezi butonul și containerul.
Adaugi un eveniment click pe buton.
În funcția asociată evenimentului:
Golești containerul folosind .innerHTML = "".
Creezi un nou container și adaugi elementele dorite în el.
 button deaspupra si prompt in care utilizator. sa introduca o val pana in 100 */
