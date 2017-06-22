
'use strict';
const RegiterUser = (update) =>{
  const input = $('<input class = " validate" type="text"  placeholder="Ingrese tu número de celular" required>');

  input.on({
    keypress: ValidateLeter,
    keyup: ValidateName
  });
  return input;
};
