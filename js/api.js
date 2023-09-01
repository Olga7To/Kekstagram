const getData = (onSuccess, onFail) => {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((userFotos) => {
      onSuccess(userFotos);
    })
    .catch(() => {
      onFail('Не удалось загрузить фотографии. Попробуйте еще раз');
    });
};


const sendData = (onSuccess, onFail, body) => {
  fetch(
    ' https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body
    },
  ).then((response) => {
    if(response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
