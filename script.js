let maxGridRowSize = 16
let maxgridColumnSize = maxGridRowSize

let gridContainer = document.querySelector('#grid-container');


for (let i = 0; i < maxGridRowSize * maxgridColumnSize; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.width = `${100 / maxgridColumnSize}%`;
    gridItem.style.height = `${100 / maxGridRowSize}%`;
    gridItem.addEventListener('mouseover', function() {
        gridItem.style.backgroundColor = '#005459';
    })
   
    gridContainer.appendChild(gridItem);
}
