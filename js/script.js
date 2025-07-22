const starterL = 16;
const starterH = 16;
const mainContainer = document.querySelector("#mainContainer")

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

function setDivColor(div, color) {
    div.style.backgroundColor = color;
}
function setDivWidth(div, width) {
    div.style.width = width;
}
function setDivHeight(div, height) {
    div.style.height = height;
}

function createOneDiv() {
    let div = createElementDiv();
    setDivColor(div,"black")
    setDivHeight(div,"100px")
    setDivWidth(div,"100px")
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

let maDiv = createOneDiv();
setDivColor(maDiv,"red")
maDiv.textContent = "hiMiniDiv"
mainContainer.appendChild(maDiv)