const colorField = document.querySelector("[name='color']");
const colorBox = document.getElementById('color-box');
colorField.addEventListener('change', (event) => {
  colorBox.style.backgroundColor = event.target.value || 'gray';
});
