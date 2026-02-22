let gridContainer = document.querySelector('#grid-container');

function buildGrid(size) {
    gridContainer.innerHTML = '';
for (let i = 0; i < size * size; i++) {
    
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.width = `${100 / size}%`;
    gridItem.style.height = `${100 / size}%`;
    gridItem.addEventListener('mouseover', function() {
        gridItem.style.backgroundColor = '#005459';
    })
   
    gridContainer.appendChild(gridItem);
}
}

let gridSize = document.querySelector('#grid-size');
let inputBtn = document.querySelector('#input-button');

inputBtn.addEventListener('click', function(event) {
  event.preventDefault();
  let size = parseInt(gridSize.value);
  if (size > 0 && size <= 100) buildGrid(size);
});

buildGrid(parseInt(gridSize.value));
