let gridContainer = document.getElementsByClassName("grid_container");
let gridChoice_1 = document.createElement("input");



function addDiv(rows, columns) {
    let gridSize = rows * columns
    for (let i = 0; i < gridSize; i++) {
        let div = document.createElement("div");
        div.className = "gridBox";
        div.id = "s" + i;
        console.log(gridContainer)
        gridContainer[0].appendChild(div);
    }
}

// addDiv(10,10);