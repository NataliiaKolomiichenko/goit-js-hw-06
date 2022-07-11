const fontSizeControlEl = document.querySelector('#font-size-control')
const textSize = document.querySelector('#text')


fontSizeControlEl.addEventListener('input', (event) => {
    textSize.style.fontSize = `${event.currentTarget.value}px`
});