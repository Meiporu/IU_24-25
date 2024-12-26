/* ####################################################################################################################################################### 
																Entidad Project
	####################################################################################################################################################### */
class project extends EntidadAbstracta {
	constructor() {
		super();
		this.entidad = 'libro';
		this.columnasamostrar = Array("CodigoL", "AutoresL", "FechaPublicacionL", "archivopdfL");
		this.datosespecialestabla = Array("archivopdfL", 'FechaPublicacionL');
		this.inicializar();
	}

	//Creacion del formulario

	cargar_formulario_html() {
		// PagIniLuto creado para distinguir en comprobar_PagIniLuto() entre venir de ADD o EDIT
		this.accion = '';
		let formulario = `
			<label id="label_CodigoL" class="label_CodigoL" for="CodigoL">CodigoL</label>
			<input type='text' id='CodigoL' name='CodigoL' size="11"></input>
			<span id="div_error_CodigoL"><a id="error_CodigoL"></a></span>
		<br>

			<label id="label_AutoresL" class="label_AutoresL" for="AutoresL">AutoresL</label>
			<input type='text' id='AutoresL' name='AutoresL' size="50"></input>
			<span id="div_error_AutoresL"><a id="error_AutoresL"></a></span>
		<br>
		
			<label id="label_TituloL" class="label_TituloL" for="TituloL">TituloL</label>
			<input type='text' id='TituloL' name='TituloL' size="50"></input>
			<span id="div_error_TituloL"><a id="error_TituloL"></a></span>
		<br>

			<label id="label_ISBN" class="label_ISBN" for="ISBN">ISBN</label>
			<input type='text' id='ISBN' name='ISBN' size="50"></input>
			<span id="div_error_ISBN"><a id="error_ISBN"></a></span>
		<br>
		
			<label id="label_PagIniL" class="label_PagIniL" for="PagIniL">PagIniL</label>
			<input type='text' id='PagIniL' name='PagIniL' size="50"></input>
			<span id="div_error_PagIniL"><a id="error_PagIniL"></a></span>
		<br>
		
			<label id="label_PagFinL" class="label_PagFinL" for="PagFinL">PagFinL</label>
			<input type='text' id='PagFinL' name='PagFinL' size="50"></input>
			<span id="div_error_PagFinL"><a id="error_PagFinL"></a></span>
		<br>
		
			<label id="label_VolumenL" class="label_VolumenL" for="VolumenL">VolumenL</label>
			<input type='text' id='VolumenL' name='VolumenL' size="50"></input>
			<span id="div_error_VolumenL"><a id="error_VolumenL"></a></span>
		<br>
	
			<label id="label_EditorialL" class="label_EditorialL" for="EditorialL">EditorialL</label>
			<input type='text' id='EditorialL' name='EditorialL' size="50"></input>
			<span id="div_error_EditorialL"><a id="error_EditorialL"></a></span>
		<br>

			<label id="label_FechaPublicacionL" class="label_FechaPublicacionL" for="FechaPublicacionL">FechaPublicacionL</label>
			<input type='text' id='FechaPublicacionL' name='FechaPublicacionL' size="12"></input>
			<span id="div_error_FechaPublicacionL"><a id="error_FechaPublicacionL"></a></span>
		<br>
	
			<label id="label_EditorL" class="label_EditorL" for="EditorL">EditorL</label>
			<input type='text' id='EditorL' name='EditorL' size="50"></input>
			<span id="div_error_EditorL"><a id="error_EditorL"></a></span>
		<br>

			<label id="label_PaisEdicionL" class="label_PaisEdicionL" for="PaisEdicionL">PaisEdicionL</label>
			<textarea type='text' id='PaisEdicionL' name='PaisEdicionL' cols="50" rows="2"></textarea>
			<span id="div_error_PaisEdicionL"><a id="error_PaisEdicionL"></a></span>
		<br>
			

		<label id="label_archivopdfL" class="label_archivopdfL" for="archivopdfL">archivopdfL</label>
		<input type="text" id="archivopdfL" name="archivopdfL" size="50"></input>
		<a id="link_archivopdfL" href="http://193.147.87.202/ET2/filesuploaded/files_archivopdfL/"><img src="./iconos/FILE.png" /></a>
		<span id="div_error_archivopdfL"><a id="error_archivopdfL"></a></span>
		

		<label id="label_nuevo_archivopdfL" class="label_nuevo_archivopdfL" for="nuevo_archivopdfL">Nueva archivopdfL</label>
		<input type="file" id="nuevo_archivopdfL" name="nuevo_archivopdfL"></input>
		<span id="div_error_nuevo_archivopdfL"><a id="error_nuevo_archivopdfL"></a></span>`;
		document.getElementById("IU_form").innerHTML = formulario;
	}
	/* ####################################################################################################################################################### 
																Crear Formularios
	   ####################################################################################################################################################### */
	createForm_ADD() {
		//Recrear el formulario limpio
		if (eval(this.cargar_formulario_html)) {
			this.cargar_formulario_html();
			// PagIniLuto creado para distinguir en comprobar_PagIniLuto() entre venir de ADD o EDIT
			this.accion = 'ADD';
		}
		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_ADD';

		//Elimina campos no necesarios
		//Ficheros
		document.getElementById('label_archivopdfL').remove();
		document.getElementById('archivopdfL').remove();
		document.getElementById('link_archivopdfL').remove();
		//Autoincremental
		document.getElementById('label_CodigoL').remove();
		document.getElementById('CodigoL').remove();

		//Colocar Validaciones
		this.colocarvalidaciones('ADD');

		//Añadir boton para submit
		this.colocarboton('ADD');

		//Poner onsubmit y action al formulario
		document.getElementById("IU_form").setAttribute('onsubmit', "return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action', "javascript:validar.ADD();");
		//Mostrar el formulario
		document.getElementById("div_IU_form").style.display = 'block';
		setLang();
	}

	createForm_SEARCH() {
		//Recrear el formulario limpio
		if (eval(this.cargar_formulario_html)) this.cargar_formulario_html();

		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_SEARCH';

		//Elimina campos no necesarios
		document.getElementById('label_nuevo_archivopdfL').remove();
		document.getElementById('nuevo_archivopdfL').remove();
		document.getElementById('link_archivopdfL').remove();

		//Colocar Validaciones 		
		this.colocarvalidaciones('SEARCH');
		//Añadir boton para submit
		this.colocarboton('SEARCH');

		//Poner onsubmit y action al formulario
		document.getElementById("IU_form").setAttribute('onsubmit', "return validar.comprobar_submit_SEARCH();");
		document.getElementById("IU_form").setAttribute('action', "javascript:validar.SEARCH();");
		//Mostrar el formulario
		document.getElementById("div_IU_form").style.display = 'block';
		setLang();
	}

	createForm_EDIT(parametros) {
		//Recrear el formulario limpio
		if (eval(this.cargar_formulario_html)) {
			this.cargar_formulario_html();
			// PagIniLuto creado para distinguir en comprobar_PagIniLuto() entre venir de ADD o EDIT
			this.accion = 'EDIT';
		}

		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_EDIT';

		// relleno los valores de los PagIniLutos
		this.rellenarvaloresform(parametros);

		//formateo de las fechas desde el back
		document.getElementById('FechaPublicacionL').value = this.cambiardatosespecialestabla('FechaPublicacionL', parametros.FechaPublicacionL);

		// desactivo los campos necesarios
		document.getElementById('archivopdfL').setAttribute('readonly', true);
		document.getElementById('CodigoL').setAttribute('readonly', true);

		// añado el nombre de fichero a la ruta de href que tengo en el hiperenlace del fichero
		document.getElementById('link_archivopdfL').href += parametros.archivopdfL;

		// coloco las validaciones
		this.colocarvalidaciones('EDIT');

		//Estos PagIniLutos son readonly, las comprobaciones en onblur no son necesarias
		document.getElementById('archivopdfL').removeAttribute('onblur');
		document.getElementById('CodigoL').removeAttribute('onblur');

		// coloco el boton
		this.colocarboton('EDIT');

		// pongo valores a los onsubmit y action
		document.getElementById("IU_form").setAttribute('onsubmit', "return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action', "javascript:validar.EDIT();");

		// pongo visible el formulario
		document.getElementById("div_IU_form").style.display = 'block';
		setLang();
	}

	createForm_DELETE(parametros) {
		//Recrear el formulario limpio
		if (eval(this.cargar_formulario_html)) this.cargar_formulario_html();

		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_DELETE';

		//Elimina campos no necesarios 
		document.getElementById('label_nuevo_archivopdfL').remove();
		document.getElementById('nuevo_archivopdfL').remove();

		//Muestra los valores actuales del formulario
		this.rellenarvaloresform(parametros);

		//formateo de las fechas desde el back
		document.getElementById('FechaPublicacionL').value = this.cambiardatosespecialestabla('FechaPublicacionL', parametros.FechaPublicacionL);

		document.getElementById('link_archivopdfL').href += parametros.archivopdfL;

		// pongo no activos todos los campos
		this.ponernoactivoform();

		this.colocarboton('DELETE');

		document.getElementById("IU_form").setAttribute('onsubmit', "return true;");
		document.getElementById("IU_form").setAttribute('action', "javascript:validar.DELETE();");
		document.getElementById("div_IU_form").style.display = 'block';
		setLang();
	}

	createForm_SHOWCURRENT(parametros) {
		if (eval(this.cargar_formulario_html)) this.cargar_formulario_html();

		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_SHOWCURRENT';

		//Elimino lo que no es necesario
		document.getElementById('label_nuevo_archivopdfL').remove();
		document.getElementById('nuevo_archivopdfL').remove();

		this.rellenarvaloresform(parametros);

		//formateo de las fechas desde el back
		document.getElementById('FechaPublicacionL').value = this.cambiardatosespecialestabla('FechaPublicacionL', parametros.FechaPublicacionL);

		document.getElementById('link_archivopdfL').href += parametros.archivopdfL;

		this.ponernoactivoform();

		document.getElementById("IU_form").setAttribute('onsubmit', "return true;");
		document.getElementById("IU_form").setAttribute('action', "");
		document.getElementById("div_IU_form").style.display = 'block';
		setLang();
	}
	/* ####################################################################################################################################################### 
																Validaciones
	   ####################################################################################################################################################### */
	//`CodigoL` int(11) NOT NULL AUTOINCREMENT,dígitos min 1 max 11 
	comprobar_CodigoL() {
		// En ningun caso se modifica actualmente al ser autoincremental, creo el metodo por compatibilidad en caso de que fuese necesario
		return true;
	}

	comprobar_CodigoL_SEARCH() {
		if (!(this.validaciones.max_size('CodigoL', 11))) {
			this.mostrar_error_campo('CodigoL', 'CodigoL_size_maxSize_error');
			return 'libro_ID_size_maxSize_error';
		}
		if (!(this.validaciones.format('CodigoL', "^[0-9]*$"))) {
			this.mostrar_error_campo('CodigoL', 'CodigoL_format_error');
			return 'libro_ID_format_error';
		}
		this.mostrar_exito_campo('CodigoL');
		return true;
	}

	//`AutoresL` varchar(200) NOT NULL ,alfabéticos y espacios, min 15 max 200
	comprobar_AutoresL() {
		if (!(this.validaciones.min_size('AutoresL', 15))) {
			this.mostrar_error_campo('AutoresL', 'AutoresL_size_minSize_error');
			return 'AutoresL_size_minSize_error';
		}
		if (!(this.validaciones.max_size('AutoresL', 200))) {
			this.mostrar_error_campo('AutoresL', 'AutoresL_size_maxSize_error');
			return 'AutoresL_size_maxSize_error';
		}
		if (!(this.validaciones.format('AutoresL', '^[A-Za-z ]*$'))) {
			this.mostrar_error_campo('AutoresL', 'AutoresL_format_error');
			return 'AutoresL_format_error';
		}
		this.mostrar_exito_campo('AutoresL');
		return true;
	}

	comprobar_AutoresL_SEARCH() {
		if (!(this.validaciones.max_size('AutoresL', 200))) {
			this.mostrar_error_campo('AutoresL', 'AutoresL_size_maxSize_error');
			return 'AutoresL_size_maxSize_error';
		}
		if (!(this.validaciones.format('AutoresL', '^[A-Za-z ]*$'))) {
			this.mostrar_error_campo('AutoresL', 'AutoresL_format_error');
			return 'AutoresL_format_error';
		}
		this.mostrar_exito_campo('AutoresL');
		return true;
	}

	//`TituloL` varchar(200) NOT NULL ,alfabéticos y espacios, min 1 max 100
	comprobar_TituloL() {
		if (!(this.validaciones.min_size('TituloL', 1))) {
			this.mostrar_error_campo('TituloL', 'TituloL_size_minSize_error');
			return 'TituloL_size_minSize_error';
		}
		if (!(this.validaciones.max_size('TituloL', 100))) {
			this.mostrar_error_campo('TituloL', 'TituloL_size_maxSize_error');
			return 'TituloL_size_maxSize_error';
		}
		if (!(this.validaciones.format('TituloL', '^[A-Za-z ]*$'))) {
			this.mostrar_error_campo('TituloL', 'TituloL_format_error');
			return 'TituloL_format_error';
		}
		this.mostrar_exito_campo('TituloL');
		return true;
	}

	comprobar_TituloL_SEARCH() {
		if (!(this.validaciones.max_size('TituloL', 100))) {
			this.mostrar_error_campo('TituloL', 'TituloL_size_maxSize_error');
			return 'TituloL_size_maxSize_error';
		}
		if (!(this.validaciones.format('TituloL', '^[A-Za-z ]*$'))) {
			this.mostrar_error_campo('TituloL', 'TituloL_format_error');
			return 'TituloL_format_error';
		}
		this.mostrar_exito_campo('TituloL');
		return true;
	}

	//`ISBN` varchar(13) NOT NULL , digitos y guiones, tamaño = 13, formato 
	comprobar_ISBN() {
		if (!(this.validaciones.min_size('ISBN', 13))) {
			this.mostrar_error_campo('ISBN', 'ISBN_size_minSize_error');
			return 'ISBN_size_minSize_error';
		}
		if (!(this.validaciones.max_size('ISBN', 13))) {
			this.mostrar_error_campo('ISBN', 'ISBN_size_maxSize_error');
			return 'ISBN_size_maxSize_error';
		}
		if (!(this.validaciones.format('ISBN', '^[A-Za-z ]*$'))) {
			this.mostrar_error_campo('ISBN', 'ISBN_format_error');
			return 'ISBN_format_error';
		}
		this.mostrar_exito_campo('ISBN');
		return true;
	}

	comprobar_ISBN_SEARCH() {
		if (!(this.validaciones.max_size('ISBN', 13))) {
			this.mostrar_error_campo('ISBN', 'ISBN_size_maxSize_error');
			return 'ISBN_size_maxSize_error';
		}
		if (!(this.validaciones.format('ISBN', '^[A-Za-z ]*$'))) {
			this.mostrar_error_campo('ISBN', 'ISBN_format_error');
			return 'ISBN_format_error';
		}
		this.mostrar_exito_campo('ISBN');
		return true;
	}

	//`PagIniL` varchar(4) NOT NULL , digitos tamaño > 1 
	comprobar_PagIniL() {
		if (!(this.validaciones.min_size('PagIniL', 1))) {
			this.mostrar_error_campo('PagIniL', 'PagIniL_size_minSize_error');
			return 'PagIniL_size_minSize_error';
		}
		if (!(this.validaciones.max_size('PagIniL', 4))) {
			this.mostrar_error_campo('PagIniL', 'PagIniL_size_maxSize_error');
			return 'PagIniL_size_maxSize_error';
		}
		if (!(this.validaciones.format('PagIniL', '^[A-Za-z ]*$'))) {
			this.mostrar_error_campo('PagIniL', 'PagIniL_format_error');
			return 'PagIniL_format_error';
		}
		this.mostrar_exito_campo('PagIniL');
		return true;
	}

	comprobar_PagIniL_SEARCH() {
		if (!(this.validaciones.max_size('PagIniL', 4))) {
			this.mostrar_error_campo('PagIniL', 'PagIniL_size_maxSize_error');
			return 'PagIniL_size_maxSize_error';
		}
		if (!(this.validaciones.format('PagIniL', '^[A-Za-z ]*$'))) {
			this.mostrar_error_campo('PagIniL', 'PagIniL_format_error');
			return 'PagIniL_format_error';
		}
		this.mostrar_exito_campo('PagIniL');
		return true;
	}

	//`PagFinL` varchar(4) NOT NULL , digitos tamaño > 1 
	comprobar_PagFinL() {
		if (!(this.validaciones.min_size('PagFinL', 1))) {
			this.mostrar_error_campo('PagFinL', 'PagFinL_size_minSize_error');
			return 'PagFinL_size_minSize_error';
		}
		if (!(this.validaciones.max_size('PagFinL', 4))) {
			this.mostrar_error_campo('PagFinL', 'PagFinL_size_maxSize_error');
			return 'PagFinL_size_maxSize_error';
		}
		if (!(this.validaciones.format('PagFinL', '^[A-Za-z ]*$'))) {
			this.mostrar_error_campo('PagFinL', 'PagFinL_format_error');
			return 'PagFinL_format_error';
		}
		this.mostrar_exito_campo('PagFinL');
		return true;
	}

	comprobar_PagFinL_SEARCH() {
		if (!(this.validaciones.max_size('PagFinL', 4))) {
			this.mostrar_error_campo('PagFinL', 'PagFinL_size_maxSize_error');
			return 'PagFinL_size_maxSize_error';
		}
		if (!(this.validaciones.format('PagFinL', '^[A-Za-z ]*$'))) {
			this.mostrar_error_campo('PagFinL', 'PagFinL_format_error');
			return 'PagFinL_format_error';
		}
		this.mostrar_exito_campo('PagFinL');
		return true;
	}

	//`VolumenL` varchar(X) NOT NULL ,  
	comprobar_VolumenL() {
		if (!(this.validaciones.min_size('VolumenL', 13))) {
			this.mostrar_error_campo('VolumenL', 'VolumenL_size_minSize_error');
			return 'VolumenL_size_minSize_error';
		}
		if (!(this.validaciones.max_size('VolumenL', 13))) {
			this.mostrar_error_campo('VolumenL', 'VolumenL_size_maxSize_error');
			return 'VolumenL_size_maxSize_error';
		}
		if (!(this.validaciones.format('VolumenL', '^[A-Za-z ]*$'))) {
			this.mostrar_error_campo('VolumenL', 'VolumenL_format_error');
			return 'VolumenL_format_error';
		}
		this.mostrar_exito_campo('VolumenL');
		return true;
	}

	comprobar_VolumenL_SEARCH() {
		if (!(this.validaciones.max_size('VolumenL', 13))) {
			this.mostrar_error_campo('VolumenL', 'VolumenL_size_maxSize_error');
			return 'VolumenL_size_maxSize_error';
		}
		if (!(this.validaciones.format('VolumenL', '^[A-Za-z ]*$'))) {
			this.mostrar_error_campo('VolumenL', 'VolumenL_format_error');
			return 'VolumenL_format_error';
		}
		this.mostrar_exito_campo('VolumenL');
		return true;
	}
	
	//`EditorialL` varchar(100) NOT NULL , caracteres alfanumericos con - tamaño minimo 10  
	comprobar_EditorialL() {
		if (!(this.validaciones.min_size('EditorialL', 13))) {
			this.mostrar_error_campo('EditorialL', 'EditorialL_size_minSize_error');
			return 'EditorialL_size_minSize_error';
		}
		if (!(this.validaciones.max_size('EditorialL', 13))) {
			this.mostrar_error_campo('EditorialL', 'EditorialL_size_maxSize_error');
			return 'EditorialL_size_maxSize_error';
		}
		if (!(this.validaciones.format('EditorialL', '^[A-Za-z ]*$'))) {
			this.mostrar_error_campo('EditorialL', 'EditorialL_format_error');
			return 'EditorialL_format_error';
		}
		this.mostrar_exito_campo('EditorialL');
		return true;
	}

	comprobar_EditorialL_SEARCH() {
		if (!(this.validaciones.max_size('EditorialL', 13))) {
			this.mostrar_error_campo('EditorialL', 'EditorialL_size_maxSize_error');
			return 'EditorialL_size_maxSize_error';
		}
		if (!(this.validaciones.format('EditorialL', '^[A-Za-z ]*$'))) {
			this.mostrar_error_campo('EditorialL', 'EditorialL_format_error');
			return 'EditorialL_format_error';
		}
		this.mostrar_exito_campo('EditorialL');
		return true;
	}
	
	//  `FechaPublicacionL` date NOT NULL,fecha válida con formato aaaa/mm/dd 
	comprobar_FechaPublicacionL() {
		if (!(this.validaciones.format('FechaPublicacionL', '^[0-9]{2}/[0-9]{2}/[0-9]{4}$'))) {
			this.mostrar_error_campo('FechaPublicacionL', 'FechaPublicacionL_inavlidDate_format_error');
			return 'FechaPublicacionL_inavlidDate_format_error';
		}
		if (!(this.validacionesespeciales('FechaPublicacionL', 'fechavalida'))) {
			this.mostrar_error_campo('FechaPublicacionL', 'FechaPublicacionL_invalidDate_noDate_error');
			return 'FechaPublicacionL_invalidDate_noDate_error';
		}
		if (!(this.validacionesespeciales('FechaPublicacionL', 'fechaSuperior'))) {
			this.mostrar_error_campo('FechaPublicacionL', 'FechaPublicacionL_invalidDate_postEnd_error');
			return 'FechaPublicacionL_invalidDate_postEnd_error';
		}
		this.mostrar_exito_campo('FechaPublicacionL');
		return true;
	}

	comprobar_FechaPublicacionL_SEARCH() {
		if (!(this.validaciones.format('FechaPublicacionL', '^[0-9]{0,2}[/]{0,1}[0-9]{0,2}[/]{0,1}[0-9]{0,4}$'))) {
			this.mostrar_error_campo('FechaPublicacionL', 'FechaPublicacionL_inavlidDate_format_error');
			return 'FechaPublicacionL_inavlidDate_format_error';
		}
		this.mostrar_exito_campo('FechaPublicacionL');
		return true;
	}

//`EditorL` varchar(100) NOT NULL ,  Caracteres alfanumericos con -
comprobar_EditorL() {
	if (!(this.validaciones.min_size('EditorL', 10))) {
		this.mostrar_error_campo('EditorL', 'EditorL_size_minSize_error');
		return 'EditorL_size_minSize_error';
	}
	if (!(this.validaciones.max_size('EditorL', 100))) {
		this.mostrar_error_campo('EditorL', 'EditorL_size_maxSize_error');
		return 'EditorL_size_maxSize_error';
	}
	if (!(this.validaciones.format('EditorL', '^[A-Za-z ]*$'))) {
		this.mostrar_error_campo('EditorL', 'EditorL_format_error');
		return 'EditorL_format_error';
	}
	this.mostrar_exito_campo('EditorL');
	return true;
}

comprobar_EditorL_SEARCH() {
	if (!(this.validaciones.max_size('EditorL', 100))) {
		this.mostrar_error_campo('EditorL', 'EditorL_size_maxSize_error');
		return 'EditorL_size_maxSize_error';
	}
	if (!(this.validaciones.format('EditorL', '^[A-Za-z ]*$'))) {
		this.mostrar_error_campo('EditorL', 'EditorL_format_error');
		return 'EditorL_format_error';
	}
	this.mostrar_exito_campo('EditorL');
	return true;
}

	//`PaisEdicionL` varchar(20) NOT NULL, alfabéticos con - min 4 
	comprobar_PaisEdicionL() {
		if (!(this.validaciones.min_size('PaisEdicionL', 4))) {
			this.mostrar_error_campo('PaisEdicionL', 'PaisEdicionL_size_minSize_error');
			return 'PaisEdicionL_size_minSize_error';
		}
		if (!(this.validaciones.max_size('PaisEdicionL', 20))) {
			this.mostrar_error_campo('PaisEdicionL', 'PaisEdicionL_size_maxSize_error');
			return 'PaisEdicionL_size_maxSize_error';
		}
		if (!(this.validaciones.format('PaisEdicionL', `^[A-Za-z áéíóúñÁÉÍÓÚÑ¿¡ !"#$%&'()*+,./:;<=>?@\[\\\]^_\`{|}~-]*$`))) {
			this.mostrar_error_campo('PaisEdicionL', 'PaisEdicionL_format_error');
			return 'PaisEdicionL_format_error';
		}
		this.mostrar_exito_campo('PaisEdicionL');
		return true;
	}

	comprobar_PaisEdicionL_SEARCH() {
		if (!(this.validaciones.max_size('PaisEdicionL', 20))) {
			this.mostrar_error_campo('PaisEdicionL', 'PaisEdicionL_size_maxSize_error');
			return 'PaisEdicionL_size_maxSize_error';
		}
		if (!(this.validaciones.format('PaisEdicionL', `^[A-Za-z áéíóúñÁÉÍÓÚÑ¿¡ !"#$%&'()*+,./:;<=>?@\[\\\]^_\`{|}~-]*$`))) {
			this.mostrar_error_campo('PaisEdicionL', 'PaisEdicionL_format_error');
			return 'PaisEdicionL_format_error';
		}
		this.mostrar_exito_campo('PaisEdicionL');
		return true;
	}

	//`archivopdfL` varchar(20) NOT NULL alfanumericos con punto sin espacios min 5 max 20. Solo pdf
	comprobar_nuevo_archivopdfL() {
		if (document.getElementById('nuevo_archivopdfL').files.length == 0) {
			if (this.accion == 'EDIT') {
				return true;
			}
			else {
				if (this.accion = "ADD") {
					this.mostrar_error_campo('nuevo_archivopdfL', 'archivopdfL_null');
					return 'archivopdfL_null';
				}
			}
		}
		let mifichero = document.getElementById('nuevo_archivopdfL').files[0];
		if (!(this.validaciones.max_size_file(mifichero, 2000000))) {
			this.mostrar_error_campo('nuevo_archivopdfL', 'archivopdfL_size_maxSize_error');
			return 'archivopdfL_size_maxSize_error';
		}
		if (!(this.validaciones.type_file(mifichero, Array("application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document")))) { //ultimo tipo MIME es .docx
			this.mostrar_error_campo('nuevo_archivopdfL', 'archivopdfL_type_error');
			return 'archivopdfL_type_error';
		}
		if (!this.validaciones.min_size("nuevo_archivopdfL", 5)) {
			this.mostrar_error_campo('nuevo_archivopdfL', 'archivopdfL_name_size_minSize_error');
			return 'archivopdfL_name_size_minSize_error';
		}
		if (!this.validaciones.max_size("nuevo_archivopdfL", 20)) {
			this.mostrar_error_campo('nuevo_archivopdfL', 'archivopdfL_name_size_maxSize_error');
			return 'archivopdfL_name_size_maxSize_error';
		}

		if (!(this.validaciones.format_name_file(mifichero, '^[A-Za-z.]*$'))) {
			this.mostrar_error_campo('nuevo_archivopdfL', 'archivopdfL_name_format_error');
			return 'archivopdfL_name_format_error';
		}
		this.mostrar_exito_campo('nuevo_archivopdfL');
		return true;
	}

	comprobar_archivopdfL_SEARCH() {
		if (!(this.validaciones.max_size('archivopdfL', 100))) {
			this.mostrar_error_campo('archivopdfL', 'archivopdfL_name_size_maxSize_error');
			return 'archivopdfL_name_size_maxSize_error';
		}
		if (!(this.validaciones.format('archivopdfL', `^[A-Za-z.]*$`))) {
			this.mostrar_error_campo('archivopdfL', 'archivopdfL_name_format_error');
			return 'archivopdfL_name_format_error';
		}
		this.mostrar_exito_campo('archivopdfL');
		return true;

	}

	
	/* ####################################################################################################################################################### 
																Submit
	   ####################################################################################################################################################### */
	comprobar_submit() {
		let result = (
			(this.comprobar_CodigoL()) & //redundante al ser autoincremental, incluido por si fuese necesario a futuro
			(this.comprobar_AutoresL()) &
			(this.comprobar_TituloL()) &
			(this.comprobar_ISBN()) &
			(this.comprobar_PagIniL()) &
			(this.comprobar_PagFinL()) &
			(this.comprobar_VolumenL()) &
			(this.comprobar_EditorialL()) &
			(this.comprobar_FechaPublicacionL()) &
			(this.comprobar_EditorL()) &
			(this.comprobar_PaisEdicionL()) &
			(this.comprobar_archivopdfL()) 
		);
		return Boolean(result);
	}

	comprobar_submit_SEARCH() {
		let result = (
			(this.comprobar_CodigoL_SEARCH()) & //redundante al ser autoincremental, incluido por si fuese necesario a futuro
			(this.comprobar_AutoresL_SEARCH()) &
			(this.comprobar_TituloL_SEARCH()) &
			(this.comprobar_ISBN_SEARCH()) &
			(this.comprobar_PagIniL_SEARCH()) &
			(this.comprobar_PagFinL_SEARCH()) &
			(this.comprobar_VolumenL_SEARCH()) &
			(this.comprobar_EditorialL_SEARCH()) &
			(this.comprobar_FechaPublicacionL_SEARCH()) &
			(this.comprobar_EditorL_SEARCH()) &
			(this.comprobar_PaisEdicionL_SEARCH()) &
			(this.comprobar_archivopdfL_SEARCH()) 
		);
		return Boolean(result);
	}


	/* ####################################################################################################################################################### 
																Auxiliares
	   ####################################################################################################################################################### */
	//metodo para mostrar información especial de PagIniLuto en la tabla de muestra de tuplas

	cambiardatosespecialestabla(PagIniLuto, valorPagIniLuto) {
		if (PagIniLuto == 'archivopdfL') {
			if (valorPagIniLuto == '') return "no hay fichero"; //por definicion de la entidad, debe haber fichero

			let texto = valorPagIniLuto;
			texto += `<a id="link_archivopdfL`;
			texto += `_`;
			texto += valorPagIniLuto; //Para evitar ids duplicados
			texto += `" href="http://193.147.87.202/ET2/filesuploaded/files_archivopdfL/`;
			texto += valorPagIniLuto;
			texto += `"><img src="./iconos/FILE.png" /></a>`;

			return texto;
		}
		if (PagIniLuto == 'FechaPublicacionL') {

			let fech = valorPagIniLuto.split('-');
			let fechaformateada = fech[0] + '/' + fech[1] + '/' + fech[2];
			return fechaformateada;

		}

	}

	colocarboton(accion) {
		//Crea un div para el boton y lo appendea al form
		let divboton = document.createElement('div');
		divboton.id = 'div_boton';
		document.getElementById('IU_form').append(divboton);
		//crea el boton como tipo submit
		let boton = document.createElement('button');
		boton.id = 'submit_button';
		boton.type = 'submit';
		//Crea la imagen de la accion, la añade al boton, y añade el boton al div en el formulario
		let img = document.createElement('img');
		img.src = './iconos/' + accion + '.png';
		boton.append(img);
		document.getElementById('div_boton').append(boton);
	}

	rellenarvaloresform(parametros) {
		//obtener campos del formulario
		let campos = document.forms['IU_form'].elements;
		//recorrer todos los campos
		for (let i = 0; i < campos.length; i++) {
			if (document.getElementById(campos[i].id).type != 'file') {
				document.getElementById(campos[i].id).value = parametros[campos[i].id];
			}
		}
	}

	colocarvalidaciones(accion) {
		let evento;
		//obtener campos del formulario
		let campos = document.forms['IU_form'].elements;
		//recorrer todos los campos
		for (let i = 0; i < campos.length; i++) {
			if ((document.getElementById(campos[i].id).tagName == 'INPUT') && (document.getElementById(campos[i].id).type !== 'file')) {
				evento = 'onblur';
			}
			else {
				evento = 'onchange';
			}
			if (accion == 'SEARCH') {
				document.getElementById(campos[i].id).setAttribute(evento, 'validar.comprobar_' + campos[i].id + '_' + accion + '();');
			}
			else {
				document.getElementById(campos[i].id).setAttribute(evento, 'validar.comprobar_' + campos[i].id + '();');
			}
		}
	}

	ponernoactivoform() {
		//obtener campos del formulario
		let campos = document.forms['IU_form'].elements;
		//recorrer todos los campos
		for (let i = 0; i < campos.length; i++) {
			document.getElementById(campos[i].id).setAttribute('readonly', true);
		}
	}

	validacionesespeciales(PagIniLuto, prueba) {
		if (PagIniLuto == 'FechaPublicacionL') {
			if (prueba == 'fechavalida') return this.fechaValida(document.getElementById(PagIniLuto).value);
		}
	}

	fechaValida(fecha) {
		let fechaf = fecha.split("/");
		let year = parseInt(fechaf[0]);
		if (year == 0) return false; //En el calendario gregoriano no hay año 0
		let month = fechaf[1];
		let lastDay = 0;
		switch (month) {
			case '02'://febrero
				//bisiesto
				if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
					lastDay = 29;
				} else lastDay = 28;
				break;
			//31 dias
			case '01':
			case '03':
			case '05':
			case '07':
			case '08':
			case '10':
			case '12':
				lastDay = 31;
				break;
			//30 dias
			case '04':
			case '06':
			case '09':
			case '11':
				lastDay = 30;
				break;
			default:
				return false; //mes no valido
		}
		let day = parseInt(fechaf[2]);
		return day > 0 && day <= lastDay;
	}
}

