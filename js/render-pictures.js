import {showBigPicture} from './show-big-picture.js';

const picturesTitle = document.querySelector('.pictures__title');
picturesTitle.classList.remove('visually-hidden');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictureElement = (data) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = data.url;
  pictureElement.querySelector('.picture__likes').textContent = data.likes;
  pictureElement.querySelector('.picture__comments').textContent = data.comments.length;

  pictureElement.addEventListener('click', () => {
    showBigPicture(data);
  });

  return pictureElement;
};

function renderPictures(userFotos) {
  const picturesContainer = document.querySelector('.pictures');
  const fotoFragment = document.createDocumentFragment();

  userFotos.forEach((data) => {
    fotoFragment.appendChild(createPictureElement(data));
  });
  picturesContainer.appendChild(fotoFragment);
  return userFotos;
}

export {renderPictures};
