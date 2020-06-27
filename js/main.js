(function () {
	//Variables
	const listaTareas = document.getElementById('lista');
	const BTNintroducirTarea = document.getElementById('añadirTask');
	const tareaInput = document.getElementById('introducir_tarea');
	const listas = document.getElementsByClassName('listas');
	const btnAgregarTask = document.getElementById('add_task');



	//EventListeners
	//Agrega una tarea
	btnAgregarTask.addEventListener("click", agregarTask);

	//Eliminar Tarea
	listaTareas.addEventListener("click", eliminarTarea);

	//Comprueba si la tarea existe
	//tareaInput.addEventListener("click", comprobarInput);




	//Funciones
	//Agrega una tarea a la lista
	function agregarTask(e) {
		e.preventDefault();

		let tarea = tareaInput.value;
		let nuevaTarea = document.createElement("li"),
			eliminarBTN = document.createElement("a")
			contenido = document.createTextNode(tarea)
			checkbox = document.createElement("input")
			checkmark = document.createElement("span");
		

		if (tarea === "" || tarea === " ") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.style.border = '2px solid red';
			return false;
		} else {
			tareaInput.setAttribute("placeholder", "Introduce una tarea...");
			tareaInput.style.border = 'none';

		}

		//Anexamos la X para eliminar
		eliminarBTN.innerText = "X";
		//Establecemos el atributo al enlace
		eliminarBTN.setAttribute("href", "#");
		//Le añadimos la clase de borrar_tarea
		eliminarBTN.className = "borrar_tarea";
		//añadimos el tipo checkbox al input
		checkbox.setAttribute("type","checkbox");
		//Añadimos el checkmark al span
		checkmark.className = "checkmark";
		//Agregamos el checkbox, checkmark, el contenido y el boton de eliminar a la Nueva tarea
		nuevaTarea.appendChild(checkbox);
		nuevaTarea.appendChild(checkmark);
		nuevaTarea.appendChild(contenido);
		nuevaTarea.appendChild(eliminarBTN);
		//Añadimos la clase a la lista
		nuevaTarea.className = "checkcontainer";

		//Agregamos la nueva tarea a la lista en proceso
		let listaProceso = document.getElementById('lista_proceso');
		listaProceso.appendChild(nuevaTarea);
	}


	//Elimina la tarea
	function eliminarTarea(e) {
		e.preventDefault();
		if (e.target.classList.contains('borrar_tarea')) {
			e.target.parentElement.remove();
		}
	}

	//Comprueba si el input de insertar tarea no esta vacio
	/*function comprobarInput(e) {
		e.preventDefault();

		for (var i = listas.length - 1; i >= 0; i--) {
			for (var j = listas[i].children.length - 1; j >= 0; j--) {
				console.log(listas[i].children[j].innerText);
			}
		}
	}*/













}());