const textInputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

textInputEl.addEventListener('input', (event) => {
    return (event.currentTarget.value === "") ? outputEl.textContent = 'Anonymous' : outputEl.textContent = event.currentTarget.value
}
)
