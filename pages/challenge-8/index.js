const boxes = document.querySelectorAll('#boxes > div');
const colors = ['yellow', 'blue', 'red'];
boxes.forEach((box) => {
  box.addEventListener('mouseenter', () => {
    const index = Math.floor(Math.random() * 3);
    box.style.backgroundColor = colors[index];
  });

  box.addEventListener('mouseleave', () => {
    box.style.backgroundColor = 'gray';
  });
});
