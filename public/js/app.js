var plantilla = "<div>" + "<p><strong>Nombre: </strong>__nombre__</p>" + "</div>"
				 + "<p><strong>Apellido: </strong>__apellido__</p>" + 
				 "<p><strong>fecha de Nacimiento: </strong>__fechaNac__</p>" + "</div>"

$(document).ready(function () {
	$.ajax({
		url:"http://localhost:3001/demo.json",
		type: "GET",
		success: function(response){
			$("#datos").html(plantilla
				.replace("__nombre__", response.nombre)
				.replace("__apellido__", response.apellido)
				.replace("__fechaNac__", response.fechaNacimiento)
			);
			console.log(response.nombre);
			var hobbies = "<ul>";
			for (var i = 0, l = response.hobbies.length; i < l; i++) {
				
				hobbies  += "<li>" +  response.hobbies[i] + "</li>";
			}
			hobbies += "<ul>";
			$("#hobbies").html(hobbies);
		},
		error: function(error){
			console.log(error);
		}
	});
});

//para demo.json el archivo jascon acepta array [] u {}