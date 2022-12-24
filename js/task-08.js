const inputLoginEl = document.querySelector('.login-form');

inputLoginEl.addEventListener('submit', onFormValid);

function onFormValid(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    alert('Всі поля повинні бути заповнені!');
  } else {
    const obj = {
      email: email.value,
      password: password.value,
    };
    console.log(obj);
    event.currentTarget.reset();
  }
}
