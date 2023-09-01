import {hideModal} from './user-modal.js';

const onSendDataSuccess = () => {

  hideModal();

  const messageTemplate = document.querySelector('#success').content.querySelector('.success');
  const messageBox = messageTemplate.cloneNode(true);

  document.querySelector('body').appendChild(messageBox);

  const messageBoxButton = messageBox.querySelector('.success__button');

  messageBoxButton.addEventListener('click', () => {
    document.body.removeChild(messageBox);
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      document.body.removeChild(messageBox);
    }
  });

  document.addEventListener('click', (evt) => {
    const messageOverlay = document.querySelector('.success');
    if(evt.target === messageOverlay) {
      document.body.removeChild(messageBox);
    }
  });

};


const onSendDataError = () => {
  hideModal();
  const messageTemplate = document.querySelector('#error').content.querySelector('.error');
  const messageBox = messageTemplate.cloneNode(true);

  document.querySelector('body').appendChild(messageBox);

  const messageBoxButton = messageBox.querySelector('.error__button');

  messageBoxButton.addEventListener('click', () => {
    document.body.removeChild(messageBox);
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      document.body.removeChild(messageBox);
    }
  });

  document.addEventListener('click', (evt) => {
    const messageOverlay = document.querySelector('.error');
    if(evt.target === messageOverlay) {
      document.body.removeChild(messageBox);
    }
  });

};

export {onSendDataSuccess, onSendDataError};
