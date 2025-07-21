const startL = 16;
const startH = 16;
const mainContainer = document.querySelector("#mainContainer")

// mainContainer.textContent = "Hello"

let divL = startL;
let divH = startH;
function createDiv() {
    let div = document.createElement("div")
    return div;
}

function setDivColor(div,color) {
    div.style.backgroundColor = color;
}

function createAllDiv(l,h) {
    for (i=0;i<l;i++) {
        for (j=0;j<h;j++) {
            //
            //
        }
    }
}

let maDiv = createDiv();
setDivColor(maDiv,"red")
maDiv.textContent = "hiMiniDiv"
mainContainer.appendChild(maDiv)