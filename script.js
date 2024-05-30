// const container = document.querySelector('.container');
const container = document.createElement('div');
let cellSize = 10;
let cellsInRow = 16;

function createCells() {
    for (let i = 0; i < cellsInRow ** 2; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = cellSize + 'px';
        cell.style.height = cellSize + 'px';
        container.appendChild(cell);
    }
}

function createDrawField() {
    container.classList.add('container');
    document.body.appendChild(container);
    container.style.width = cellSize * cellsInRow + 'px';
    createCells();
}

createDrawField();