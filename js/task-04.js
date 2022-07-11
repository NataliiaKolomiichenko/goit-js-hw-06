const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector('#value')
};

let counterValue = 0;

const makeDecrement = () => {
    counterValue -= 1;
    refs.valueEl.textContent = counterValue;
};

const makeIncrement = () => {
    counterValue += 1;
    refs.valueEl.textContent = counterValue;
};

refs.decrementBtn.addEventListener('click', makeDecrement);

refs.incrementBtn.addEventListener('click', makeIncrement);