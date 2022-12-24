const decrementEl = document.querySelector("[data-action='decrement']");
const valueEl = document.querySelector('#value');
const incrementEl = document.querySelector("[data-action='increment']");

decrementEl.addEventListener('click', onDecrementValue);
incrementEl.addEventListener('click', onIncrementValue);

let counterValue = 0;

function onDecrementValue() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
function onIncrementValue() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
