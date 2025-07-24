const starterL = 16;
const starterH = 16;
// const GRAY = "gray";

const mainEtchContainer = document.querySelector("#mainEtchContainer");
const buttonChange = document.querySelector("#buttonChg");
const mainEtchHeight = 800;
const mainEtchWidth = 800;

let rgbOpacity = 0;
let divL = starterL;
let divH = starterH;

function createElementDiv() {
    let div = document.createElement("div")
    return div;
}

function setDivColor(div,color) {
    div.style.backgroundColor = color;
}
function setDivWidth(div,width) {
    div.style.width = width;
}
function setDivHeight(div,height) {
    div.style.height = height;
}

function setDivBorder(div,border) {
    div.style.boxSizing = "border-box";
    div.style.border = border;
}

function createOneDiv(height,width,color) {
    let div = createElementDiv();
    let heightPX = height.toString() + "px";
    let widthPX = width.toString() + "px";
    setDivColor(div,color);
    setDivHeight(div,heightPX);
    setDivWidth(div,widthPX);
    setDivBorder(div,"2px solid black");
    return div;
}

function hoverListener(ev) {
    let newColor = randomColor();
    ev.target.style.backgroundColor = newColor;
}

function initGrid() {
    let width = mainEtchWidth / starterL;
    let height = mainEtchHeight / starterH;
    let div;
    let color = "white";
    for (i=0;i<starterL;i++) {
        for (j=0;j<starterH;j++) {
            div = createOneDiv(width,height,color);
            div.addEventListener("mouseleave",hoverListener);
            mainEtchContainer.appendChild(div);
        }
    }
}
function randomColor() {
    let colorRed = Math.floor(Math.random() * 256);
    let colorGreen = Math.floor(Math.random() * 256);
    let colorBlue = Math.floor(Math.random() * 256);
    if (rgbOpacity < 1) {
        rgbOpacity += 0.1;
    }
    return `rgba(${colorRed}, ${colorGreen}, ${colorBlue}, ${rgbOpacity})`;
}
function resetGrid(newSize) {
    
    while (mainEtchContainer.firstChild) {
        mainEtchContainer.removeChild(mainEtchContainer.lastChild); // removing lastChild faster than first ?
    }
    let width = mainEtchWidth / newSize;
    let height = mainEtchHeight / newSize;
    let div;
    let color = "white";
    for (i=0;i<newSize;i++) {
        for (j=0;j<newSize;j++) {
            div = createOneDiv(width,height,color);
            div.addEventListener("mouseleave",hoverListener);
            mainEtchContainer.appendChild(div);
        }
    }

}

buttonChange.addEventListener("click", () =>{
    let input = prompt("Enter the new size");
    let size = parseInt(input, 10)

    if (isNaN(size) || size > 100 || size < 1) {
        size = 100; // default max size
    }

    resetGrid(size);
})

initGrid();