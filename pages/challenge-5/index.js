const box = document.getElementById('box');
const message = document.getElementById('message');
const movingMessage = 'El mouse está en movimiento';
const stoppedMessage = 'El mouse se ha detenido';
let timeout;

box.addEventListener('mousemove', () => {
  message.innerText = movingMessage;
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(() => {
    message.innerText = stoppedMessage;
  }, 100);
});

message.innerText = outMessage;
