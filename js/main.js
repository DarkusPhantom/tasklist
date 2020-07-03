(function () {
	//------------------------Variables-----------------------
	barra_calendario = document.querySelector('.nav_calendario');

	//----------------------EventListener----------------------

	//Muestra el cual estado esta activo del calendario
	barra_calendario.addEventListener('click', estadoActivo);

	//-------------------------funciones-------------------

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