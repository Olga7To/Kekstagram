import {renderPictures} from './render-pictures.js';
import {setUserFormSubmit} from './user-form.js';
import {showAlert} from './util.js';
import {getData} from './api.js';
import {onSendDataSuccess, onSendDataError} from './send-data-message.js';


getData(
  (userFotos) => {
    renderPictures(userFotos);
  },
  (message) => {
    showAlert(message);
  }
);

setUserFormSubmit(onSendDataSuccess, onSendDataError);
