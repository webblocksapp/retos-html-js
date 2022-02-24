const boxRadius = document.getElementById('box-radius');
const box = document.getElementById('box');
const radiusField = document.querySelector('[name="radius"]');
const DEFAULT_RADIUS = '0%';
const MAX_VALUE = '100%';

radiusField.addEventListener('input', (event) => {
  const radius = event.target.value;
  box.style.borderRadius = radius / 2 + '%';
  boxRadius.innerText = `${radius}% de ${MAX_VALUE}`;
});

radiusField.value = 0;
boxRadius.innerText = `${DEFAULT_RADIUS} de ${MAX_VALUE}`;
box.style.radius = DEFAULT_RADIUS;
