const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('h1 #name-output');

inputEl.addEventListener('input', onInputValue);

function onInputValue (event) {
  if (event.currentTarget.value !== '') {
    spanEl.textContent = event.currentTarget.value;
  } else {
    spanEl.textContent = 'Anonymous';
  }
}
