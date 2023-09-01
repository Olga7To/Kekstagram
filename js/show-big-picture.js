const bigPicture = document.querySelector('.big-picture');

const COMMENTS_PER_PORTION = 5;
let commentsShown = 0;

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  commentsShown = 0;
};

const renderPictureDetails = (data) => {
  bigPicture.querySelector('.big-picture__img').children[0].src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.social__caption').textContent = data.description;
};

const commentsLoader = document.querySelector('.comments-loader');

function renderComments(comments) {
  commentsShown += COMMENTS_PER_PORTION;
  if(commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  bigPicture.querySelector('.social__comment-count').innerHTML = `${commentsShown} из ${comments.length} комментариев`;
  bigPicture.querySelector('.social__comments').innerHTML = '';

  for(let i = 0; i < commentsShown; i++) {
    const comment = comments[i];
    const commentElement = document.createElement('li');
    commentElement.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35">';
    commentElement.classList.add('social__comment');

    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;

    const commentElementText = document.createElement('p');
    commentElementText.classList.add('social__text');
    commentElementText.textContent = comment.message;

    commentElement.appendChild(commentElementText);
    bigPicture.querySelector('.social__comments').appendChild(commentElement);
  }
}

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  const comments = data.comments;

  const onCommentsLoaderClick = () => {
    renderComments(comments);
  };

  commentsLoader.addEventListener('click', onCommentsLoaderClick);

  const userModalCloseElement = document.querySelector('.big-picture__cancel');

  userModalCloseElement.addEventListener('click', () => {
    hideBigPicture();
    commentsLoader.removeEventListener('click', onCommentsLoaderClick);

  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      hideBigPicture();
      commentsLoader.removeEventListener('click', onCommentsLoaderClick);
    }
  });

  renderPictureDetails(data);
  renderComments(comments);
};

export {showBigPicture};
