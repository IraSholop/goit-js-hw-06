const inputRange = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputRange.addEventListener('input', onChangeFontSizeSpan);

function onChangeFontSizeSpan(event) {
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
}
