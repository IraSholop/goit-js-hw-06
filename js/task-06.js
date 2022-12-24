const validInputEl = document.querySelector('#validation-input');

validInputEl.addEventListener('blur', onValidInput);

function onValidInput(event) {
  const arrayInputValue = [...event.currentTarget.value];
  const numDataSet = Number(validInputEl.dataset.length);
  if (arrayInputValue.length === numDataSet) {
    validInputEl.classList = 'valid';
  } else {
    validInputEl.classList = 'invalid';
  }
}
