'use strict';

const CheckRegister = (update) => {
  const section         = $('<div class="amber accent-3"></div>');
  const container       = $('<div class="container bg-message"></div>');
  const bigCheck        = $('<img class="img-big-check" src="img/icons/check.png">');
  const paragraphOne    = $('<p class="txt-purple">¡Bien!</p>');
  const paragraphTwo    = $('<p class="txt-purple">Ahora puedes usar Yape</p>');

  container.append(bigCheck);
  container.append(paragraphOne);
  container.append(paragraphTwo);

  section.append(container);

  if(window.top==window) {
    state.page = 6;
    window.setTimeout(_=>{
      update();
    }, 3000);
  }

  return section;

};
