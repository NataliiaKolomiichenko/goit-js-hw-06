const textInputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

textInputEl.addEventListener('input', ({currentTarget}) => {
    return outputEl.textContent = (currentTarget.value === "") ? 'Anonymous' : currentTarget.value
}
)
