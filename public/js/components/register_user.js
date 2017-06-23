
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
  const password    = $('<input id="contrass" class="center" type="password" placeholder="Ingresa clave de 6 digitos" name="" value="">');
  const iconcontrass = $('<img class="ubiccontrass" src="img/icons/lock.png">');
  const spanmensaje = $('<p class="center-align">Cuida esta clave como oro, es tu acceso a Yape.</p>');
  const cuenta      = $('<button id="crearcuenta" type="button" class="waves-effect waves-light btn amber accent-3" name="button" disabled>CREAR CUENTA</button>')

  formulario.append(nombre);
  formulario.append(iconnombre);
  formulario.append(email);
  formulario.append(iconemail);
  formulario.append(password);
  formulario.append(iconcontrass);
  formulario.append(spanmensaje);
  formulario.append(cuenta);
  cols10.append(imgcrear);
  cols10.append(titulo41);
  cols10.append(descrip41);
  cols10.append(formulario);
  row.append(cols10);

const activarCheck = _ => {
	if(nombre.val().length >= 2 && email.val() != '' && password.val().length == 6){
		cuenta.removeAttr('disabled');
	}else
	cuenta.attr('disabled','false');

};

nombre.on({
	keypress: ValidateLeter,
	keyup: activarCheck
});

password.on({
	keypress: ValidateNumber,
	keyup: activarCheck
});

	cuenta.on('click',(e) => {
		e.preventDefault();

		$.post('/api/createUser',{
			phone : state.user.phone,
			name : nombre.val(),
			email : email.val(),
			password : password.val()
		},(response) =>{
			if (response.success) {
				state.page == 5;
				update();
				console.log(response);
			} else {
				state.page == 4
				update();
			}
		});
	});
	return row;
};
