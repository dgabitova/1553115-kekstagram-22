import {isEscEvent} from './util.js';

const mainTag = document.querySelector('main');

export const createMessageUpload = () => {
  const template = document.querySelector('#success').content;
  const message = template.querySelector('.success').cloneNode(true);
  message.style.zIndex = '100';
  mainTag.appendChild(message);
  const button = message.querySelector('.success__button');

  const isEscMessage = (evt) => {
    if (isEscEvent(evt) || evt.target.className === 'success') {
      mainTag.removeChild(message);
      document.removeEventListener('keydown', isEscMessage);
    }
  }

  button.addEventListener('click', ()=>{
    mainTag.removeChild(message);
    document.removeEventListener('keydown', isEscMessage);
  });

  message.addEventListener('click', isEscMessage);
  document.addEventListener('keydown', isEscMessage);
}

export const createMessageError = () => {
  const template = document.querySelector('#error').content;
  const message = template.querySelector('.error').cloneNode(true);
  message.style.zIndex = '100';
  mainTag.appendChild(message);
  const errorButton = message.querySelector('.error__button');
  const errorTitle = message.querySelector('.error__title');
  errorTitle.textContent = 'Сервер не отвечает';
  errorButton.textContent = 'Пожалуйста, зайдите позднее';

  const isEscMessage = (evt) => {
    if (isEscEvent(evt) || evt.target.className === 'error') {
      mainTag.removeChild(message);
      document.removeEventListener('keydown', isEscMessage);
    }
  }

  errorButton.addEventListener('click', () => {
    mainTag.removeChild(message);
    document.removeEventListener('keydown', isEscMessage);
  });
  message.addEventListener('click', isEscMessage);
  document.addEventListener('keydown', isEscMessage);
}


