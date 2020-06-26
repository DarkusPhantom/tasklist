(function () {
	//Variables
	//const menu = document.getElementById('menu');
	//const menuLateral = document.getElementById('menuLateral');
	const listaTareas = document.getElementById('lista');
	const BTNintroducirTarea = document.getElementById('añadirTask');
	const tareaInput = document.getElementById('introducir_tarea');
	const listas = document.getElementsByClassName('listas');
	//EventListeners
	//Muestra menu lateral en pantalla
	//menu.addEventListener("click", mostrarMenu);

	//Eliminar Tarea
	listaTareas.addEventListener("click", eliminarTarea);

	//Comprueba si la tarea existe
	tareaInput.addEventListener("click", comprobarInput);


	//Funciones
	//Muestra el menu en pantalla
	//function mostrarMenu(e) { }

	//Agrega una tarea a la lista

	//Elimina la tarea
	function eliminarTarea(e) {
		e.preventDefault();
		if (e.target.classList.contains('borrar_tarea')) {
			e.target.parentElement.remove();
		}
	}

	//Comprueba si el input de insertar tarea no esta vacio
	function comprobarInput(e) {
		e.preventDefault();

		for (var i = listas.length - 1; i >= 0; i--) {
			for (var j = listas[i].children.length - 1; j >= 0; j--) {
				console.log(listas[i].children[j].innerText);
			}
		}
	}








}());