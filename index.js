const body = document.querySelector("body");
const container = document.createElement("div");


console.log(body);

function create16x16GridDivs(){
    for(let i = 0; i < 16; i++){
        let div = document.createElement("div");
        container.appendChild(div);
        div.classList.add("grid")
    }
}

create16x16GridDivs();
container.classList.add("container");
document.body.appendChild(container);

function removeGrid(){
    let child = container.lastElementChild;
    while(child){
        container.removeChild(child);
        child = container.lastElementChild;
    }
}

function createNewGrid(number){
    removeGrid();
}

const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", event => {
    let promt = prompt("Enter a number");
    createNewGrid(promt);
});