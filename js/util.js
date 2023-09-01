const ALERT_SHOW_TIME = 5000;

function getRandomInteger(from = 0, to = 0) {
  if((from < 0) || (to < 0)) {
    return;
  }
  if(from > to) {
    const temp = from;
    from = to;
    to = temp;
  }
  if(!from && !to) {
    return Math.floor(Math.random()*1000000);
  }
  if(!from || !to) {
    if(from) {
      return Math.floor(Math.random() * from);
    }
    if(to) {
      return Math.floor(Math.random() * to);
    }
  }
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

const getRandomArrayElement = (elements) => (elements[getRandomInteger(0,elements.length - 1)]);

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


export {getRandomArrayElement, getRandomInteger};
export {showAlert};
