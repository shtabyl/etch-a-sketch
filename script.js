// Main
const container = document.createElement('div');
const containerWidth = 50;

const sizeInput = document.querySelector('.size');
// const clearBtn = document.querySelector('.clear-btn');

// let viewportWidth = document.documentElement.clientWidth;

createDrawField();
const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear';
document.body.appendChild(clearBtn);

sizeInput.addEventListener('change', () => {
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

clearBtn.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
});


// Functions
function createCells(fieldWidth) {
    let cellsInRow = sizeInput.value;
    for (let i = 0; i < cellsInRow ** 2; i++) {
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
