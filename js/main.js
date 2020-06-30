(function () {
	//Variables
	const listaTareas = document.getElementById('lista');
	const tareaInput = document.getElementById('introducir_tarea');
	const listas = document.getElementsByClassName('listas');
	const btnAgregarTask = document.getElementById('add_task');
	const listaTareasCompletadas = document.getElementById('lista_completada');
	const listaTareasProceso = document.getElementById('lista_proceso');
	const barra_calendario = document.querySelector('.nav_calendario');

	//EventListeners
	//Muestra el cual estado esta activo
	barra_calendario.addEventListener('click', estadoActivo);

	//Agrega una tarea
	btnAgregarTask.addEventListener("click", agregarTask);


	//Eliminar Tarea
	listaTareas.addEventListener("click", eliminarTarea);

	//Pasa la tarea lista de Tareas en Proceso a Tarea Completada
	listaTareas.addEventListener('click', tareaCompletada);



	//Funciones
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

	//Agrega una tarea a la lista
	function agregarTask(e) {
		e.preventDefault();

		let tarea = tareaInput.value;
		let nuevaTarea = document.createElement("li"),
			eliminarBTN = document.createElement("a"),
			contenido = document.createTextNode(tarea),
			checkbox = document.createElement("input"),
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
		listaTareasProceso.appendChild(nuevaTarea);
		tareaInput.value = "";
	}


	//Elimina la tarea
	function eliminarTarea(e) {
		e.preventDefault();
		if (e.target.classList.contains('borrar_tarea')) {
			e.target.parentElement.remove();
		}

		e.stopPropagation();
	}

	//Pasa la tarea con checkmark a tareas completadas
	function tareaCompletada(e) {
		e.preventDefault();

		if (e.target.classList.contains('checkmark')) {
			let tareaCambio = e.target.parentElement;
			
			//Remueve la tarea de la lista de tareas en proceso
			e.target.parentElement.remove();
			
			if (!e.target.parentElement.children[0].hasAttribute('checked')) {
				//agrega el check en la tarea completada
				tareaCambio.children[0].setAttribute('checked','checked');
				//lo inserta en la lista de tareas de tareas completadas
				listaTareasCompletadas.insertBefore(tareaCambio,listaTareasCompletadas.children[0]);
			} else {
				//quita el check en la tarea completada
				tareaCambio.children[0].removeAttribute('checked');
				//lo inserta en la lista de tareas de tareas en proceso
				listaTareasProceso.insertBefore(tareaCambio,listaTareasProceso.children[0]);
			}
		};
		e.stopPropagation();
	}


//
move();
//Aumenta la barra de progreso
function move() {
	let progress = document.getElementById('progress'),
		progressNum = document.querySelector('.label');
	let totalTareas = listaTareasCompletadas.children.length,
		total = totalTareas * (100/20),
		width = 0,
		inicio = 0,
		id = setInterval(frame, 0);

	//el frame aumenta con respecto a las actividades completadas
	function frame() {
		console.log("Funcion");
		//while (width < 100){
		//	console.log("while");
			if (inicio === total) {
				clearInterval(id);
			} else {
				inicio++;
				width++;
				progress.style.width = width + '%';
				progressNum.innerHTML = width * 1 + '%';
			}
		//}
	}
}



}());














//Revisa que la tarea no este repetida dentro del input
//tareaInput.addEventListener('blur', noEstaEnLista);
/*	//document.querySelector('li.checkcontainer').innerText.slice(0, -2)
	function noEstaEnLista(e) {
		e.preventDefault();

		let listaTarea = document.getElementsByClassName('checkcontainer');
		let tareaContenido = tareaInput.value; 

		//recorre todas las tareas de las dos listas
		for (var i = 0; i < listaTarea.length; i++) {
			if (listaTarea[i].innerText.slice(0, -2) === tareaContenido) { //Si son iguales la tarea a insertar con uno de la lista, lanza error
				tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
				tareaInput.style.border = '2px solid red';
				return false;
			}
		}
	}*/


/*Funcion para progress bar
function move() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label").innerHTML = width * 1 + '%';
        }
    }
}*/