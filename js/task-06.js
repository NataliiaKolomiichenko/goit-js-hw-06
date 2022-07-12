const textInputEl = document.querySelector('#validation-input');

textInputEl.addEventListener('blur', ({currentTarget}) => {

    if (currentTarget.value.length === Number(textInputEl.dataset.length)) {
        textInputEl.classList.add('valid');
        textInputEl.classList.remove('invalid');
        return textInputEl;
    };
    textInputEl.classList.remove('valid');
    textInputEl.classList.add('invalid');

    console.log('Please enter 6 symbols');
})



