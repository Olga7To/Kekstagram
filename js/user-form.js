import {sendData} from './api.js';

const form = document.querySelector('.img-upload__form');
const submitButton = form.querySelector('#upload-submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__element',
  errorTextParent: 'img-upload__element',
  errorTextClass: 'img-upload__error',
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const setUserFormSubmit = (onSendDataSuccess, onSendDataError) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    blockSubmitButton();
    if (isValid) {
      sendData(
        () => {
          onSendDataSuccess();
        },
        () => {
          onSendDataError();
        },
        new FormData(evt.target),
      );
    }
    unblockSubmitButton();
  });
};

const fotoDescription = document.querySelector('.text__description');

fotoDescription.addEventListener('keydown', (evt) => {
  evt.stopPropagation();

});


const hashtagField = document.querySelector('.text__hashtags');

hashtagField.addEventListener('keydown', (evt) => {
  evt.stopPropagation();

});

const validateTags = (value) => {
  const hashtagsArray = value.split(' ');
  const re = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;
  let functionReturnValue = true;
  let hashtagCounter = 0;

  hashtagsArray.forEach((hashtag) => {
    if(!re.test(hashtag)) {
      functionReturnValue = false;
    }
    hashtagCounter++;
    if(hashtagCounter > 5) {
      functionReturnValue = false;
    }
  });
  return functionReturnValue;
};

pristine.addValidator(
  hashtagField,
  validateTags,
  'Неправильно заполнены хэштеги'
);


export {setUserFormSubmit};
