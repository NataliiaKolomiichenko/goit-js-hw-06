const listEl = document.querySelector('#categories');
const itemsEl = document.querySelectorAll('.item');

const numberOfCat = `Number of category: ${listEl.children.length}`;
console.log(numberOfCat);


const item = [...itemsEl].map(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
});