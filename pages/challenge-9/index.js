const items = document.getElementById('items');
const colors = ['yellow', 'blue', 'red'];

for (let i = 0; i < 100; i++) {
  items.innerHTML += `
    <li onclick="changeColor(this)" style="background-color: gray; cursor: pointer;">Item ${
      i + 1
    }</li>
  `;
}

function changeColor(el) {
  const index = Math.floor(Math.random() * 3);
  const elStyle = el.style;
  elStyle.backgroundColor =
    elStyle.backgroundColor !== 'gray' ? 'gray' : colors[index];
}
