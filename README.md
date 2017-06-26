# yape
==

Yape es una aplicación que permite la transfrencia de dinero de manera virtual.

## Registro de usuario
--
+Tercera fase en el registro a Yape.
+Por ser una fase avanzada del registro, obtenemos el número de celular mediante un **prompt**
+Validacione: Nombre, correo electrónico y clave.
+El botón ![Botón crear cuenta inactivo](img/screen/btn-crear-cuenta.JPG "Botón crear cuenta inactivo") sólo se activa cuando el usuario llena todos los datos.

![Pantalla de registro de usuario](img/screen/registro-usuario-.JPG "Pantalla de registro de usuario")

+Al hacer click en ![Botón crear cuenta activo](img/screen/active-crear-cuenta.JPG "Botón crear cuenta activo") se envían los datos a la API y pasa a la pantalla **check**

`$.post('/api/createUser',{
  phone : state.user.phone,
  name : nombre.val(),
  email : email.val(),
  password : password.val()
}`

## Check
--
+Muestra el éxito del regitro de usuario.
+Se muestra durante 3 segundos y pasa a la siguienta pantalla.

![Demo del registro de usuario](img/screen/yape-registro-usuario-.gif "Demo del registro de usuario")
