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


	//Llamado de funciones
	move();

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
		console.log(listaTareasProceso.appendChild(nuevaTarea));
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

		e.stopPropagation();
	}

	//Pasa la tarea con checkmark a tareas completadas
	function tareaCompletada(e) {
		e.preventDefault();

		if (e.target.classList.contains('checkmark')) {
			if (!e.target.parentElement.children[0].hasAttribute('checked')) {
				let tareaCompletada = e.target.parentElement;
				//Remueve la tarea de la lista de tareas en proceso
				e.target.parentElement.remove();
				//agrega el check en la tarea completada
				tareaCompletada.children[0].setAttribute('checked','checked');
				//lo inserta en la lista de tareas de tareas completadas
				listaTareasCompletadas.insertBefore(tareaCompletada,listaTareasCompletadas.children[0]);
			} else {
				let tareaProceso = e.target.parentElement;
				//Remueve la tarea de la lista de tareas en proceso
				e.target.parentElement.remove();
				//quita el check en la tarea completada
				tareaProceso.children[0].removeAttribute('checked');
				console.log(listaTareasProceso);
				//lo inserta en la lista de tareas de tareas en proceso
				console.log(listaTareasProceso.insertBefore(tareaProceso,listaTareasProceso.children[0]));
			}
		};
		e.stopPropagation();
	}



//Aumenta la barra de progreso
function move() {
	let progress = document.getElementById('progress'),
		progressNum = document.querySelector('.label');
	let totalTareas = listaTareasCompletadas.children.length,
		total = totalTareas * (100/20),
		width = 0,
		id = setInterval(frame, 0);

	//el frame aumenta con respecto a las actividades completadas
	function frame() {
		console.log("Funcion");
		//while (width < 100){
		//	console.log("while");
			if (width >= total) {
				clearInterval(id);
			} else {
				width++;
				progress.style.width = width + '%';
				progressNum.innerHTML = width * 1 + '%';
			}
		//}
	}

}

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
}
 */



}());