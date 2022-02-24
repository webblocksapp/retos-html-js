const temperatureField = document.querySelector('[name="temperature"]');
const defaultTemp = 20;
const tempUnit = 'ºC';
const message = document.getElementById('message');
const normalTempMessage = 'La temperatura es normal';
const coldTempMessage = 'Hace mucho frío';
const hotTempMessage = 'Hace mucho calor';

temperatureField.addEventListener('input', (event) => {
  message.innerHTML = generateTempMessage(event.target.value);
});

function generateTempMessage(temp) {
  if (temp < 10) {
    return `${temp}${tempUnit} ${coldTempMessage}`;
  } else if (temp < 26) {
    return `${temp}${tempUnit} ${normalTempMessage}`;
  } else if (temp >= 26) {
    return `${temp}${tempUnit} ${hotTempMessage}`;
  }
}

message.innerHTML = generateTempMessage(defaultTemp);
