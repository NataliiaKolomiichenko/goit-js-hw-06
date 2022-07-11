const textInputEl = document.querySelector('#validation-input');

textInputEl.addEventListener('blur', (event) => {

    if (event.currentTarget.value.length < textInputEl.dataset.length || event.currentTarget.value.length > textInputEl.dataset.length) {
        console.log('Please enter 6 symbols');
        return textInputEl.classList.add('invalid');
    };

    textInputEl.classList.remove('invalid');
    textInputEl.classList.add('valid');

})



