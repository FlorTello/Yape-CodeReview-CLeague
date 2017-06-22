
'use strict';
const RegiterUser = (update) =>{

  const row         = $('<div class="row center"></div>');
  const cols10      = $('<div class="col s10 offset-s1 center"></div>');
  const imgcrear    = $('<img class="logoTelefono" src="img/icons/lockone.png">');
  const titulo41    = $('<h5 class="titulo-tamano">Crea tu usuario Yape</h5>');
  const descrip41   = $('<p>Ingresa un nombre, email y clave de usuario.</p>');
  const formulario  =$('<form class="center margin-top"></form>');
  const nombre      = $('<input id="nombre" class="center" type="text" placeholder="Nombre" name="" value="">');
  const iconnombre  = $('<img class="iconotama ubicnombre" src="img/icons/user.png">');
  const email       = $('<input id="email" class="center" type="text" placeholder="correo@ejemplo.com" name="" value="">');
  const iconemail   = $('<img class="iconotama ubicemail" src="img/icons/message-gray.png">');
  const contrass    = $('<input id="contrass" class="center" type="password" placeholder="Ingresa clave de 6 digitos" name="" value="">');
  const iconcontrass = $('<img class="ubiccontrass" src="img/icons/lock.png">');
  const spanmensaje = $('<p class="center-align">Cuida esta clave como oro, es tu acceso a Yape.</p>');
  const cuenta      = $('<button id="crearcuenta" type="button" class="waves-effect waves-light btn" name="button">CREAR CUENTA</button>')


  formulario.append(nombre);
  formulario.append(iconnombre);
  formulario.append(email);
  formulario.append(iconemail);
  formulario.append(contrass);
  formulario.append(iconcontrass);
  formulario.append(spanmensaje);
  formulario.append(cuenta);
  cols10.append(imgcrear);
  cols10.append(titulo41);
  cols10.append(descrip41);
  cols10.append(formulario);
  row.append(cols10);

  return row;

};
