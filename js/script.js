const starterL = 16;
const starterH = 16;

const mainEtchContainer = document.querySelector("#mainEtchContainer")

const mainEtchHeight = 800;
const mainEtchWidth = 800;
// mainContainer.textContent = "Hello"

// box-sizing: border-box;
// width: 100px;
// height: 100px;
// background-color: white;


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
    let heightPX = height.toString() + "px"
    let widthPX = width.toString() + "px"
    setDivColor(div,color)
    setDivHeight(div,heightPX)
    setDivWidth(div,widthPX)
    setDivBorder(div,"1px solid black")
    return div;
}
function createAllDiv(l,h) {
    for (i=0;i<l;i++) {
        for (j=0;j<h;j++) {
            //
            //
        }
    }
}

function initialGrid() {
    
    let width = mainEtchWidth / starterL;
    let height = mainEtchHeight / starterH;
    let div;
    let color = "white"
    for (i=0;i<starterL;i++) {
        for (j=0;j<starterH;j++) {
            div = createOneDiv(width,height,color)
            mainEtchContainer.appendChild(div)
        }
    }
}
let maDiv = createOneDiv(100,100,"red");
// setDivColor(maDiv,"red")
// maDiv.textContent = "hiMiniDiv"
// mainEtchContainer.appendChild(maDiv)
initialGrid()