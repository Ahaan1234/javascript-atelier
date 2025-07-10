const container = document.querySelector("#container");
createGrid(16);

const button = document.querySelector("button");
let dimGrid;
button.addEventListener("click", function(e){
    do {
        dimGrid = prompt("Grid size: ");
    } while(dimGrid > 100 || dimGrid < 1);
    createGrid(dimGrid);
})

function createGrid(gridDim) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    for(let i = 0; i < gridDim; i++) {
        const divRow = document.createElement('div');
        divRow.id = `row${i}`;
        divRow.style.display = "flex";
        for(let j = 0; j < gridDim; j++) {
            const divCol = document.createElement('div');
            divCol.id = `row${i}-col${j}`;
            divCol.classList.add('box');
            divCol.setAttribute("style", "height: 10px; width: 10px; border: 1px dashed black");
            divRow.appendChild(divCol);
        }
        container.appendChild(divRow);
    }

    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
    });
});
}