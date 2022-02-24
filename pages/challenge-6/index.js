const primaryText = document.querySelector('#avatar .primary-text');
const secondaryText = document.querySelector('#avatar .secondary-text');
const avatarImg = document.querySelector('#avatar .img');
const fullNameField = document.querySelector('[name="fullName"]');
const emailField = document.querySelector('[name="email"]');
const photoField = document.querySelector('[name="photo"]');

fullNameField.addEventListener('input', (event) => {
  const { value } = event.target;
  primaryText.innerText = value ? value : 'Nombre Apellido';
});

emailField.addEventListener('input', (event) => {
  const { value } = event.target;
  secondaryText.innerText = value ? value : 'email@test.com';
});

photoField.addEventListener('change', (event) => {
  avatarImg.style.backgroundImage = `url('${event.target.value}')`;
});
