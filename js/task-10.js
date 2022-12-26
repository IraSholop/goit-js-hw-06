function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector('#controls input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', createBoxes);
inputEl.addEventListener('change', onInputValue);
btnDestroyEl.addEventListener('click', destroyBoxes);

let array = [];
function createBoxes(amount) {
  let width = 20;
  let height = 20;
  for (let i = 0; i < amount; i++) {
    const createDiv = document.createElement('div');
    createDiv.style.width = `${(width += 10)}px`;
    createDiv.style.height = `${(height += 10)}px`;
    createDiv.style.backgroundColor = getRandomHexColor();
    array.push(createDiv);
  }
  boxesEl.append(...array);
}

function onInputValue(event) {
  if (event.currentTarget.value !== '') {
    createBoxes(event.currentTarget.value);
  }
}
function destroyBoxes() {
  array = [];
  boxesEl.innerHTML = '';
  inputEl.value = '';
}
