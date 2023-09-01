const fileField = document.querySelector('#upload-file');
const userOverlay = document.querySelector('.img-upload__overlay');

const hideModal = () => {
  userOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  const userForm = document.querySelector('.img-upload__form');
  userForm.reset();
};

const showModal = () => {
  userOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  const cancelButton = document.querySelector('#upload-cancel');

  cancelButton.addEventListener('click', () => {
    hideModal();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      hideModal();
    }
  });

  document.addEventListener('click', (evt) => {
    const userFormOverlay = document.querySelector('.img-upload__overlay');
    if(evt.target === userFormOverlay) {
      hideModal();
    }
  });
};

fileField.addEventListener('change', () => {
  showModal();
});

export {hideModal};
