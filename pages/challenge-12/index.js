const openModalBtn = document.getElementById('open-modal');

openModalBtn.addEventListener('click', () => {
  modal.show();
});

const modal = new bootstrap.Modal(document.getElementById('modal'));
