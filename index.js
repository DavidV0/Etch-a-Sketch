const body = document.querySelector("body");
const container = document.createElement("div");


console.log(body);

function createDivs(number){
    
    for(let i = 0; i < number; i++){
        let div = document.createElement("div");
        container.appendChild(div);
        div.classList.add("grid")
    }
}

createDivs(16);
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
    if(number < 100){
        removeGrid();
        createDivs(number);
    }    
}

const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", event => {
    let promt = prompt("Enter a number");
    if(promt >100){
        promt = promt("Take a number under 100");
    }else{
        createNewGrid(promt);
    }    
});