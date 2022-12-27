function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColorEl = document.querySelector('.widget .color');
const btnColorEl = document.querySelector('.widget .change-color');

btnColorEl.addEventListener('click', onClickBtnColor);

function onClickBtnColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanColorEl.textContent = randomColor;
}
