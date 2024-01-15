const decrement = document.querySelector('.decrement');
const increment = document.querySelector('.increment');
const display = document.querySelector('.display');
const reset = document.querySelector('.reset');

decrement.addEventListener('click', function() {
    let cur = parseInt(display.textContent);
    cur -= 1;
    display.textContent = cur;
});

increment.addEventListener('click', function() {
    let cur = parseInt(display.textContent);
    cur += 1;
    display.textContent = cur;
});

reset.addEventListener('click', function() {
    display.textContent = 0;
});