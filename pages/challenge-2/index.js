const colorField = document.querySelector("[name='color']");
const colorBox = document.getElementById('color-box');
const btnEnable = document.getElementById('btn-enable');

btnEnable.addEventListener('click', () => {
  colorField.disabled = !colorField.disabled;
  btnEnable.innerText = colorField.disabled
    ? 'Habilitar cambio de color'
    : 'Deshabilitar cambio de color';
});

colorField.addEventListener('change', (event) => {
  colorBox.style.backgroundColor = event.target.value || 'gray';
});
