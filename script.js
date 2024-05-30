// Main
const container = document.createElement('div');
const containerWidth = 50;

const sizeInput = document.querySelector('.size');

let viewportWidth = document.documentElement.clientWidth;


createDrawField();

sizeInput.addEventListener('change', (e) => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.remove();
    });
    createCells(container.getBoundingClientRect().width - 1);
});

container.addEventListener('mouseover', (e) => {
    if (e.target !== container) {
        e.target.style.backgroundColor = 'aquamarine';
    }
});


// Functions
function createCells(containerWidth) {
    let cellsInRow = sizeInput.value;
    for (let i = 0; i < cellsInRow ** 2; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        let cellSize = containerWidth / cellsInRow;
        cell.style.width = cellSize + 'px';
        cell.style.height = cellSize + 'px';
        container.appendChild(cell);
    }
}

function createDrawField() {
    container.classList.add('container');
    document.body.appendChild(container);
    container.style.width = containerWidth + 'vw';
    container.style.height = containerWidth + 'vw';
    createCells(container.getBoundingClientRect().width - 1);
}
