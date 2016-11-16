function validateForm() {
	// nombre
	var name = $('#name').val();// var name = document.getElementById("name").value;  //valor de nombre
	if(name == null || name.length === 0 || !(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/).test(name)){ //valida que no tenga espacio vacíos, que la primera letra sea mayúscula y que solo tenga caracteres.
		$('#name').parent().append('<span>¡Escriba el primer caracter de su nombre en Mayúscula.!</span>');
	}
	// apellido
	var lastName = $('#lastname').val();// var lastName = document.getElementById("lastname").value; //valor de apellido
	if(lastName == null || lastName.length === 0 || !(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/).test(lastName)){ //valida que no tenga espacio vacíos, que la primera letra sea mayúscula y que solo tenga caracteres.
		$('#lastname').parent().append('<span>¡Escriba el primer caracter de su apellido en Mayúscula.!</span>');
	}
	// correo
	var email = $('#input-email').val();// var email = document.getElementById("input-email").value;  //valor de email
	if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))){ //valida que tenga letras o números, mayúsculas o minúsculas y que tenga un formato valido de dominio. 
		$('#input-email').parent().append('<span>¡Dirección de Correo Electrónico No Válido.!</span>');
	}
	// contraseña
	var password = $('#input-password').val();// var password = document.getElementById("input-password").value; //valor de contraseña
	if (password == null || password.length < 6) { // valida que la contraseña no tenga espacios y que tenga un minimo de 6 dígitos.
		$('#input-password').parent().append('<span>¡Contraseña No Valida, debe tener como mínimo 6 Caracteres!</span>');
	}else if ( password === '123456' || password === '098754' || password === 'password' ) { //valida que la contraseña no sea igual a "password", "123456" o "098754".
        	$('#input-password').parent().append('<span>¡Su Contraseña No es Segura! No puede ser igual a "123456", "password" o "098754"!</span>');   
       }
  	// selector
	var bicis = $('select').val();//valor del select
	if(bicis == null || bicis === '0') { //valida que el select tenga una opción seleccionada
		$('select').parent().append('<span>¡Seleccione su Tipo de Bici!</span>');
	}
}