(function () {
	//Variables
	const listaTareas = document.getElementById('lista');
	const tareaInput = document.getElementById('introducir_tarea');
	const listas = document.getElementsByClassName('listas');
	const btnAgregarTask = document.getElementById('add_task');
	const listaTareasCompletadas = document.getElementById('lista_completadas');
	const barra_calendario = document.querySelector('.nav_calendario');
	const btnCheckbox = document.querySelectorAll("input.checkbox");
	console.log(btnCheckbox);
	//EventListeners


	//Agrega una tarea
	btnAgregarTask.addEventListener("click", agregarTask);

	//Eliminar Tarea
	listaTareas.addEventListener("click", eliminarTarea);

	//Muestra el cual estado esta activo
	barra_calendario.addEventListener('click', estadoActivo);



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

		//Verifica si la tarea ya existe
//		verificarTarea(contenido);

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

/*
	//Comprueba si la tarea ya existe en la lista
	function verificarTarea(contenido) {
		let indice2 = 0,
			indice = 0;
		let listaContenido = listas[indice].children[indice2].children[0].textContent;
		console.log(
				listaContenido.slice(14,listaContenido.lenght-1)
			);

	}
*/

	//Elimina la tarea
	function eliminarTarea(e) {
		e.preventDefault();
		if (e.target.classList.contains('borrar_tarea')) {
			e.target.parentElement.remove();
		}
	}


	//Muestra cual estado esta activo en la barra de navegacion
	function estadoActivo(e) {
		e.preventDefault();
		if(!e.target.classList.contains('active')) {
			//Elimina los estados activo
			for (var i = 0; i < barra_calendario.children.length; i++) {
				if (barra_calendario != e.target) {
					barra_calendario.children[i].classList.remove('active');
				}
			}
			//Activa el estado seleccionado
			e.target.classList.add('active');
		}
	}










}());