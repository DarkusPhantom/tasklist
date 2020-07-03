(function () {
	//------------------------Variables-----------------------
	calendar_bar = document.querySelector('.nav_calendario');
	btnAddTask = document.getElementById('add_task');
	inputAddTask = document.getElementById('introducir_tarea');
	processList = document.getElementById('lista_proceso');
	


	//----------------------EventListener----------------------

	//Muestra el cual estado esta activo del calendario
	calendar_bar.addEventListener('click', statusActive);

	//Agrega la tarea a la lista de tareas en proceso
	btnAddTask.addEventListener('click', addTask);


	//-------------------------funciones-------------------

	//Muestra cual estado esta activo en la barra de navegacion
	function statusActive(e) {
		e.preventDefault();
		if(!e.target.classList.contains('active')) {
			//Elimina los estados activo
			for (var i = 0; i < calendar_bar.children.length; i++) {
				if (calendar_bar != e.target) {
					calendar_bar.children[i].classList.remove('active');
				}
			}
			//Activa el estado seleccionado
			e.target.classList.add('active');
		}
	}


	//Añade la tarea a la lista de procesos
	function addTask(e) {
		e.preventDefault();

		let task = inputAddTask.value,
			newTask = document.createElement('li'),
			checkbox = document.createElement("input"),
			checkmark = document.createElement("span"),
			content = document.createTextNode(task),
			btnDelete = document.createElement('a');
	
		//Verifica si el input no esta vacio
		if (task.length <= 0) {
			inputAddTask.classList.add('error');
			return false;
		} else {
			inputAddTask.classList.remove('error');
		}

		//Crea el boton de eliminar la tarea
		btnDelete.innerText = 'X';
		btnDelete.setAttribute('href','#');
		btnDelete.classList.add('borrar-tarea');
		
		//Crea la checkmark
		checkmark.classList.add('checkmark');

		//Crea el checkbox
		checkbox.setAttribute('type', 'checkbox');

		//Añade el boton de elimminar, el checkmark y el checkbox a la nueva tarea
		newTask.appendChild(checkbox);
		newTask.appendChild(checkmark);
		newTask.appendChild(content);
		newTask.appendChild(btnDelete);

		//Añade la tarea a la lista de proceso
		processList.appendChild(newTask);

		addTaskLocalStorage(newTask.innerText.slice(0,-2));

		inputAddTask.value = "";
	}

	

/*
	//Agrega la tarea al local storage
	function addTaskLocalStorage(task) {
		let tasks;

		//obtiene las tareas almacenadas
		tasks = getTaskLocalStorage();

		//añade la nueva tarea
		tasks.push(task);

		//convierte de string a arreglo para el local storage
		localStorage.setItem('process_task', JSON.stringify(tasks));

	}
*/













}());