let count = 1;
const countDisplay = document.getElementById('countValue');
const minusBtn = document.getElementById('minusBtn');

function updateCounter() {
    countDisplay.textContent = count;
    minusBtn.disabled = count <= 1;
}

function increment() {
    count++;
    updateCounter();
}

function decrement() {
    if (count > 1) count--;
    updateCounter();
}

updateCounter();
// Cart functionality

