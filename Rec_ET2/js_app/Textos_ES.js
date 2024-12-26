let textos_ES = {

	/* ####################################################################################################################################################### 
																	Titulos
		####################################################################################################################################################### */

	'text_titulo_app': 'Interfaz ET2 IU',
	'text_titulo_menu': 'Opciones de Menú',
	'text_titulo_pie': 'Pie de página',

	'text_libro': 'Libro',

	'text_titulo_page_libro': 'Gestión de libros',

	//Titulos de forms libro
	'text_contenido_titulo_form_libro_ADD': 'Formulario Alta libro',
	'text_contenido_titulo_form_libro_SEARCH': 'Formulario Busqueda libro',
	'text_contenido_titulo_form_libro_EDIT': 'Formulario Modificación libro',
	'text_contenido_titulo_form_libro_SHOWCURRENT': 'Formulario Muestra libro',
	'text_contenido_titulo_form_libro_DELETE': 'Formulario Borrado libro',

	'res_estructura_tests': 'Tabla verificacion estructura de test',
	'resultadodef': 'formato correcto estructura definicion tests',
	'res_estructura_pruebas': 'Tabla verificacion estructura de pruebas',
	'resultadoprueba': 'formato correcto estructura pruebas',
	'res_pruebas': 'Tabla ejecución de pruebas',
	'resultadotest': 'Resultado ejecucion pruebas',

	/* ####################################################################################################################################################### 
																	VolumenLutos
		####################################################################################################################################################### */

		//libro
		'CodigoL': 'Identificador',
		'AutoresL': 'Autor/es',
		'TituloL': 'Titulo libro',
		'ISBN': 'ISBN',
		'PagIniL': 'Paginas inicial',
		'PagFinL': 'Paginas final',
		'VolumenL': 'Volumen',
		'EditorialL': 'Editorial',
		'FechaPublicacionL': 'Fecha de publicacion',
		'EditorL': 'Editor',
		'PaisEdicionL': 'Pais la edicion',
		'archivopdfL': 'Archivo',
		'nuevo_archivopdfL': 'Nuevo archivo',
	


	/* ####################################################################################################################################################### 
																	Labels
		####################################################################################################################################################### */

	
	//libro
	'label_CodigoL': 'Identificador',
	'label_AutoresL': 'Autor/es',
	'label_TituloL': 'Titulo libro',
	'label_ISBN': 'ISBN',
	'label_PagIniL': 'Paginas inicial',
	'label_PagFinL': 'Paginas final',
	'label_VolumenL': 'Volumen',
	'label_EditorialL': 'Editorial',
	'label_FechaPublicacionL': 'Fecha de publicacion',
	'label_EditorL': 'Editor',
	'label_PaisEdicionL': 'Pais de la edicion',
	'label_archivopdfL': 'Archivo',
	'label_nuevo_archivopdfL': 'Nuevo archivo',



	/* ####################################################################################################################################################### 
																	Inputs
		####################################################################################################################################################### */

	
	/* ####################################################################################################################################################### 
																		Divs
		####################################################################################################################################################### */
	

	/* ####################################################################################################################################################### 
																		a
		####################################################################################################################################################### */
	
	
	/* ####################################################################################################################################################### 
																	Mensajes de Error
		####################################################################################################################################################### */

	//la entidad libro
	//libro.CodigoL
	"libro_CodigoL_size_minSize_error": "El ID del libro no puede estar vacío",
	"libro_CodigoL_size_maxSize_error": "El ID del libro no puede superar los 11 dígitos",
	"libro_CodigoL_format_error": "El ID solo puede contener dígitos",
	//libro.AutoresL
	"libro_AutoresL_size_minSize_error": "El conjunto de nombre/s de el/los autor/es del libro debe tener minimo 15 caracteres alfabéticos",
	"libro_AutoresL_size_maxSize_error": "El conjunto de nombre/s de el/los autor/es del libro debe tener maximo 200 caracteres alfabéticos",
	"libro_AutoresL_format_error": "Los nombres de los autores solo pueden contener caracteres alfabeticos del Castellano y '-'",
	//libro.TituloL
	"libro_TituloL_size_minSize_error": "El titulo del libro no puede estar vacío",
	"libro_TituloL_size_maxSize_error": "El titulo del libro no puede superar los 100 caracteres",
	"libro_TituloL_format_error": "El titulo del libro puede contener cualquier tipo de caracter",
	//libro.ISBN
	"libro_ISBN_size_error": "El ISBN del libro debe contener exactamente 13 caracteres",
	"libro_ISBN_syntax_error": "El ISBN del libro tiene el siguiente formato: XXXXXXXXXXXXXXXXXXXXXXXXXXx",
	"libro_ISBN_format_error": "El ISBN del libro solo puede contener digitos y -",

	//libro.PagIniL
	"libro_PagIniL_size_minSize_error": "La página inicial del libro no puede ser nula",
	"libro_PagIniL_size_maxSize_error": "La página inicial del libro no puede ser superior a 9999, ni 'One Piece' llega a tantas paginas",
	"libro_PagIniL_format_error": "La página inicial del libro tiene que ser evidentemente un número compuesto por dígitos",
	//libro.PagFinL
	"libro_PagFinL_size_minSize_error": "La página final del libro no puede ser nula",
	"libro_PagFinL_size_maxSize_error": "La página final del libro no puede ser superior a 9999, ni 'La historia interminable' llega a tantas paginas",
	"libro_PagFinL_format_error": "La página final del libro tiene que ser evidentemente un número compuesto por dígitos",
	//libro.VolumenL
	"libro_VolumenL_size_minSize_error": "El número de volumen del libro no puede ser nulo",
	"libro_VolumenL_size_maxSize_error": "El número máximo del volumen es de 9999, no hay tantos mangas de 'Detective Conan' si quiera",
	"libro_VolumenL_format_error": "El número de volumen del libro tiene que ser evidentemente un número compuesto por dígitos",
	//libro.EditorialL
	"libro_EditorialL_size_minSize_error": "El nombre de la editorial debe tener mínimo 10 caracteres",
	"libro_EditorialL_size_maxSize_error": "El nombre de la editorial no puede superar los 100 caracteres",
	"libro_EditorialL_format_error": "El nombre de la editorial solo pueden contener caracteres alfabeticos del Castellano, dígitos y '-'",
	//libro.FechaPublicacionL
	"libro_FechaPublicacionL_inavlidDate_format_error": "El formato de fecha no es correcto, use el siguiente formato: 'aaaa-mm-dd'",
	"libro_FechaPublicacionL_invalidDate_noDate_error": "Fecha de publiación de libro inválida, seleccione una fecha válida",
	//libro.EditorL
	"libro_EditorL_size_minSize_error": "El nombre del editor del libro debe contener mínimo 10 caracteres",
	"libro_EditorL_size_maxSize_error": "El nombre del editor del libro como máximo debe tener 100 caracteres",
	"libro_EditorL_format_error": "El nombre del editor del libro solo puede contener caracteres alfabeticos del Castellano, dígitos y '-'",
	//libro.PaisEdicionL
	"libro_PaisEdicionL_size_minSize_error": "No existen paises con nombres inferiores a 4 caracteres",
	"libro_PaisEdicionL_size_maxSize_error": "El tamaño máximo permitido para identificar el país de la edición es de 20 caracteres",
	"libro_PaisEdicionL_format_error": "El país de origen de la edición solo puede caracteres alfabeticos del Castellano",
	//libro.file_name
	"libro_archivopdfL_null": "Ningún archivo ha sido seleccionado",
	"libro_archivopdfL_size_maxSize_error": "El archivo supera el tamaño máximo permitido",
	"libro_archivopdfL_type_error": "El formato de archivo aceptado es '.pdf'",
	"libro_archivopdfL_name_size_minSize_error": "El nombre del archivo debe tener minimo 5 caracteres",
	"libro_archivopdfL_name_size_maxSize_error": "El nombre del archivo debe tener máximo 20 caracteres",
	"libro_archivopdfL_name_format_error": "El nombre del archivo puede contener cualquier a excepcion de espacios en blanco, ',' y simbolos",

	//Otros
	//Fallo de SQL, posible forzarlo con datos validos: En description_libro se acepta cualquier ascii, poner ' dara error ya que el back intenta hacer INSERT/UPDATE [....] description_libro=''', fallando
	'SQL_KO': 'Se ha producido un error, revise que los datos son correctos. Si el error persiste intentelo de nuevo mas tarde',

	//SEARCH no encuentra tuplas
	'RECORDSET_VACIO': 'No se han encontrado datos'
}
