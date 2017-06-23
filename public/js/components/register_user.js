
'use strict';
const RegiterUser = (update) =>{
const input = $('<input class = " validate" type="text"  placeholder="Ingrese tu número de celular" required>');

input.on({
	keypress: ValidateLeter,
	keyup: ValidateName
});
return input;




	btn.on('click',(e) => {
		e.preventDefault();

		$.post('/api/createUser',{
			phone : state.phone,
			name : name.val(),
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
	return container;
};
