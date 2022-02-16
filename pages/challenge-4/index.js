const box = document.getElementById('box');
const message = document.getElementById('message');
const inMessage = 'Estás dentro de la caja rosa';
const outMessage = 'Estás fuera de la caja rosa';

box.addEventListener('mouseenter', () => {
  message.innerText = inMessage;
});

box.addEventListener('mouseleave', () => {
  message.innerText = outMessage;
});

message.innerText = outMessage;
