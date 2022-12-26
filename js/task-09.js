function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColorEl = document.querySelector('.widget .color');
const btnColorEl = document.querySelector('.widget .change-color');

btnColorEl.addEventListener('click', onClickBtnColor);

function onClickBtnColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = document.body.style.backgroundColor;
}
