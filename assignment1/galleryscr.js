const items = document.querySelectorAll('.item');
const category = document.getElementById('numbers');

let correctOrder = [1, 2, 3, 4];
let currentOrder = [];

items.forEach(item => {
    item.setAttribute('draggable', 'true');
    item.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

category.addEventListener('dragover', e => {
    e.preventDefault();
});

category.addEventListener('drop', e => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('text/plain');
    const item = document.getElementById(itemId);

    if (item && e.target !== item) {
        e.target.appendChild(item);
    }

    currentOrder = Array.from(category.children).map(item => parseInt(item.getAttribute('data-number')));

    if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
        items.forEach(item => {
            item.classList.add('correct');
        });
        alert('Congratulations! You got it right!');
    } else {
        items.forEach(item => {
            item.classList.remove('correct');
        });
    }
});
