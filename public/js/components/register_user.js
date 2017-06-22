
'use strict';
const RegiterUser = (update) =>{



	
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
