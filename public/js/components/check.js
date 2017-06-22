'use strict';

const CheckRegister = (update) => {
  const html            = $('html');
  const container       = $('<div class="container bg-message"></div>');
  const bigCheck        = $('<img class="img-big-check" src="img/icons/check.png">');
  const paragraphOne    = $('<p class="txt-purple">¡Bien!</p>');
  const paragraphTwo    = $('<p class="txt-purple">Ahora puedes usar Yape</p>');

  html.addClass('bg-yellow');
  container.append(bigCheck);
  container.append(paragraphOne);
  container.append(paragraphTwo);

  if(window.top==window) {
    state.page = 6;
    localStorage.setItem('page',state.page);
    window.setTimeout('location.reload()', 3000);
  }

  return container;

};
