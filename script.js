// Main
const container = document.createElement('div');
const containerWidth = 50;

const sizeInput = document.querySelector('.size');
const colorPicker = document.querySelector('.color-picker');
const clearBtn = document.querySelector('.clear-btn');
const brushMode = document.querySelector('#brush-mode');
const shadowMode = document.querySelector('#shadow-mode');
const changeModeForm = document.querySelector('.change-mode');
let color = '#102C57';
let opacity = {};

// let viewportWidth = document.documentElement.clientWidth;

createDrawField();


// Change field dimension
sizeInput.addEventListener('change', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.remove();
    });
    createCells(container.getBoundingClientRect().width - 1);
});

// Change color
colorPicker.addEventListener('input', (e) => {
    color = e.target.value;
});

// Drawing
let mouseDown = false;
document.body.addEventListener('mousedown', () => mouseDown = true);
document.body.addEventListener('mouseup', () => mouseDown = false);

container.addEventListener('mouseover', (e) => {
    if (e.target !== container) {
        changeColor(e);
    }
});

container.addEventListener('mousedown', (e) => {
    if (e.target !== container) {
        changeColor(e);
    }
});

// Clear field
clearBtn.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
        cell.style.opacity = 1;
    });
    for (const prop of Object.getOwnPropertyNames(opacity)) {
        delete opacity[prop];
    }
});


// Functions
function createCells(fieldWidth) {
    let cellsInRow = sizeInput.value;
    let size = cellsInRow * cellsInRow;
    for (let i = 0; i < size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        let cellSize = fieldWidth / cellsInRow;
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

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return;
    }
    e.target.style.backgroundColor = color;
    let x = e.target.getBoundingClientRect().x;
    let y = e.target.getBoundingClientRect().y;
    let element = `${x},${y}`;
    if (brushMode.checked && opacity[element]) {
        opacity[element] = 1;
        e.target.style.opacity = opacity[element];
    }
    if (shadowMode.checked) {
        if (!opacity[element]) {
            opacity[element] = 0;
        } 
        if (opacity[element] < 1) {
            opacity[element] += 0.1;
            e.target.style.opacity = opacity[element];
        }
    }
}