
let abtElement = document.getElementById("abt");

function abtFunction() {
    abtElement.style.height='350px';
    abtElement.style.width='900px';
}

abtElement.addEventListener("mouseenter", abtFunction);

let picElement = document.getElementById("pic");

function picFunction() {
    picElement.style.height='350px';
    picElement.style.width='350px';
}

picElement.addEventListener("mouseenter", picFunction);
