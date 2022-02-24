const boxWidth = document.getElementById('box-width');
const boxHeight = document.getElementById('box-height');
const box = document.getElementById('box');
const widthField = document.querySelector('[name="width"]');
const heightField = document.querySelector('[name="height"]');
const DEFAULT_WIDTH = '100px';
const DEFAULT_HEIGHT = '100px';
const MAX_VALUE = '500px';

widthField.addEventListener('input', (event) => {
  const width = event.target.value + 'px';
  box.style.width = width;
  boxWidth.innerText = `${width} de ${MAX_VALUE}`;
});

heightField.addEventListener('input', (event) => {
  const height = event.target.value + 'px';
  box.style.height = height;
  boxHeight.innerText = `${height} de ${MAX_VALUE}`;
});

widthField.value = 100;
heightField.value = 100;
boxWidth.innerText = `${DEFAULT_WIDTH} de ${MAX_VALUE}`;
boxHeight.innerText = `${DEFAULT_HEIGHT} de ${MAX_VALUE}`;
box.style.width = DEFAULT_WIDTH;
box.style.height = DEFAULT_HEIGHT;
