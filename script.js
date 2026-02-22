let maxGridRowSize = 16
let maxgridColumnSize = maxGridRowSize

let gridContainer = document.querySelector('#grid-container');


for (let i = 0; i < maxGridRowSize * maxgridColumnSize; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);


}

let gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    console.log(item); 
    item.style.backgroundColor = 'lightblue';
});



