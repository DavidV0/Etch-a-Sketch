const body = document.querySelector("body");
const container = document.createElement("div");


console.log(body);

function create16x16GridDivs(){
    for(let i = 0; i < 16; i++){
        let div = document.createElement("div");
        container.appendChild(div);
    }
}

create16x16GridDivs();
container.classList.add("container");
document.body.appendChild(container);
