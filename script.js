const container = document.querySelector('.container');
const CELL_AMOUNT = 16;

function createCells() {
    for (let i = 0; i < 16 * 16; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('style', 'height: 10px; width: 10px; border: 1px dashed gray;');
        container.appendChild(cell);
    }
}

createCells();