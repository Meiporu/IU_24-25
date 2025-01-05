/* ####################################################################################################################################################### 
                                                            Definicion de Test
   ####################################################################################################################################################### */

   /*
   CREATE TABLE `libro` (
  `CodigoL` int(11) NOT NULL,
  `AutoresL` varchar(200) NOT NULL DEFAULT '',
  `TituloL` varchar(100) NOT NULL DEFAULT '',
  `ISBN` varchar(13) NOT NULL DEFAULT '',
  `PagIniL` varchar(4) NOT NULL,
  `PagFinL` varchar(4) NOT NULL,
  `VolumenL` varchar(4) NOT NULL,
  `EditorialL` varchar(100) NOT NULL,
  `FechaPublicacionL` date NOT NULL DEFAULT '0000-00-00',
  `EditorL` varchar(100) NOT NULL,
  `PaisEdicionL` varchar(20) NOT NULL DEFAULT '',
  `archivopdfL` varchar(20) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
*/
let def_tests_libro = Array(

    //CodigoL
    //SEARCH
    Array("libro", "CodigoL", 1, "tamaño > 11", "libro_CodigoL_size_maxSize_error", "ADD", "El ID del libro no puede superar los 11 dígitos"),

    Array("libro", "CodigoL", 2, "contiene caracteres que no sean digitos", "libro_CodigoL_format_error", "ADD", "El ID solo puede contener dígitos"),

    Array("libro", "CodigoL", 3, "libro_solo formato numerico", "EDIT", true, "ID del libro correcta"),
    //AutoresL
    //ADD 
    //EDIT
    //SEARCH
    Array("libro", "AutoresL", 4, "tamaño < 15", "libro_AutoresL_size_minSize_error", "ADD", "El conjunto de nombre/s de el/los autor/es del libro debe tener minimo 15 caracteres alfabéticos"),
    Array("libro", "AutoresL", 5, "tamaño < 15", "libro_AutoresL_size_minSize_error", "EDIT", "El conjunto de nombre/s de el/los autor/es del libro debe tener minimo 15 caracteres alfabéticos"),

    Array("libro", "AutoresL", 6, "tamaño > 100", "libro_AutoresL_size_maxSize_error", "ADD", "El conjunto de nombre/s de el/los autor/es del libro debe tener maximo 200 caracteres alfabéticos"),
    Array("libro", "AutoresL", 7, "tamaño > 100", "libro_AutoresL_size_maxSize_error", "EDIT", "El conjunto de nombre/s de el/los autor/es del libro debe tener maximo 200 caracteres alfabéticos"),
    Array("libro", "AutoresL", 8, "tamaño > 100", "libro_AutoresL_size_maxSize_error", "SEARCH", "El conjunto de nombre/s de el/los autor/es del libro debe tener maximo 200 caracteres alfabéticos"),

    Array("libro", "AutoresL", 9, "no alfabetico con acentos o con ñ", "libro_AutoresL_format_error", "ADD", "Los nombres de los autores solo pueden contener caracteres alfabeticos del diccionario Castellano y '-'"),
    Array("libro", "AutoresL", 10, "no alfabetico con acentos o con ñ", "libro_AutoresL_format_error", "EDIT", "Los nombres de los autores solo pueden contener caracteres alfabeticos del diccionario Castellano y '-'"),
    Array("libro", "AutoresL", 11, "no alfabetico con acentos o con ñ", "libro_AutoresL_format_error", "SEARCH", "Los nombres de los autores solo pueden contener caracteres alfabeticos del diccionario Castellano y '-'"),

    Array("libro", "AutoresL", 12, "alfabetico sin acentos y sin ñ", "ADD", true, "Conjunto de autor/es del libro correcto/s"),
    Array("libro", "AutoresL", 13, "alfabetico sin acentos y sin ñ", "EDIT", true, "Conjunto de autor/es del libro correcto/s"),
    Array("libro", "AutoresL", 14, "alfabetico sin acentos y sin ñ", "SEARCH", true, "Conjunto de autor/es del libro correcto/s"),

       //TituloL
    //ADD 
    //EDIT
    //SEARCH
    Array("libro", "TituloL", 31, "tamaño < 6", "libro_TituloL_size_minSize_error", "ADD", "El título del libro no puede estar vacío"),
    Array("libro", "TituloL", 32, "tamaño < 6", "libro_TituloL_size_minSize_error", "EDIT", "El título del libro no puede estar vacío"),

    Array("libro", "TituloL", 33, "tamaño > 60", "libro_TituloL_size_maxSize_error", "ADD", "El título del libro no puede superar los 100 caracteres"),
    Array("libro", "TituloL", 34, "tamaño > 60", "libro_TituloL_size_maxSize_error", "EDIT", "El título del libro no puede superar los 100 caracteres"),
    Array("libro", "TituloL", 35, "tamaño > 60", "libro_TituloL_size_maxSize_error", "SEARCH", "El título del libro no puede superar los 100 caracteres"),

    Array("libro", "TituloL", 36, "contiene digitos", "libro_TituloL_format_error", "ADD", "El título del libro puede contener cualquier tipo de caracter"),
    Array("libro", "TituloL", 37, "contiene digitos", "libro_TituloL_format_error", "EDIT", "El título del libro puede contener cualquier tipo de caracter"),
    Array("libro", "TituloL", 38, "contiene digitos", "libro_TituloL_format_error", "SEARCH", "El título del libro puede contener cualquier tipo de caracter"),

    Array("libro", "TituloL", 39, "no contiene digitos", "ADD", true, "Título del libro correcto"),
    Array("libro", "TituloL", 40, "no contiene digitos", "EDIT", true, "Título del libro correcto"),
    Array("libro", "TituloL", 41, "no contiene digitos", "SEARCH", true, "Título del libro correcto"),

    //ISBN
    //ADD 
    //EDIT
    //SEARCH
    Array("libro", "ISBN", 44, "tamaño > 100", "libro_ISBN_size_error", "ADD", "El ISBN del libro debe contener exactamente 13 caracteres"),
    Array("libro", "ISBN", 45, "tamaño > 100", "libro_ISBN_size_error", "EDIT", "El ISBN del libro debe contener exactamente 13 caracteres"),
    Array("libro", "ISBN", 46, "tamaño > 100", "libro_ISBN_size_error", "SEARCH", "El ISBN del libro debe contener exactamente 13 caracteres"),

    Array("libro", "ISBN", 47, "contiene digitos", "libro_ISBN_syntax_error", "ADD", "El ISBN del libro tiene el siguiente formato: XXXXXXXXXXXXXXXXXXXXXXXXXXx"),
    Array("libro", "ISBN", 48, "contiene digitos", "libro_ISBN_syntax_error", "EDIT", "El ISBN del libro tiene el siguiente formato: XXXXXXXXXXXXXXXXXXXXXXXXXXx"),
    Array("libro", "ISBN", 49, "contiene digitos", "libro_ISBN_syntax_error", "SEARCH", "El ISBN del libro tiene el siguiente formato: XXXXXXXXXXXXXXXXXXXXXXXXXXx"),

    Array("libro", "ISBN", 47, "contiene digitos", "libro_ISBN_format_error", "ADD", "El ISBN del libro solo puede contener digitos y -"),
    Array("libro", "ISBN", 48, "contiene digitos", "libro_ISBN_format_error", "EDIT", "El ISBN del libro solo puede contener digitos y -"),
    Array("libro", "ISBN", 49, "contiene digitos", "libro_ISBN_format_error", "SEARCH", "El ISBN del libro solo puede contener digitos y -"),

    Array("libro", "ISBN", 50, "no contiene digitos", "ADD", true, "ISBN del libro correcta"),
    Array("libro", "ISBN", 51, "no contiene digitos", "EDIT", true, "ISBN del libro correcta"),
    Array("libro", "ISBN", 52, "no contiene digitos", "SEARCH", true, "ISBN del libro correcta"),

    //PagIniL
    //ADD 
    //EDIT
    //SEARCH
    Array("libro", "PagIniL", 53, "tamaño < 30", "libro_PagIniL_format_error", "ADD", "La página inicial del libro no puede ser nula"),
    Array("libro", "PagIniL", 54, "tamaño < 30", "libro_PagIniL_format_error", "EDIT", "La página inicial del libro no puede ser nula"),

    Array("libro", "PagIniL", 55, "tamaño > 500", "libro_PagIniL_format_error", "ADD", "La página inicial del libro no puede ser superior a 9999, ni 'One Piece' llega a tantas paginas"),
    Array("libro", "PagIniL", 56, "tamaño > 500", "libro_PagIniL_format_error", "EDIT", "La página inicial del libro no puede ser superior a 9999, ni 'One Piece' llega a tantas paginas"),
    Array("libro", "PagIniL", 57, "tamaño > 500", "libro_PagIniL_format_error", "SEARCH", "La página inicial del libro no puede ser superior a 9999, ni 'One Piece' llega a tantas paginas"),

    Array("libro", "PagIniL", 58, "contiene caracteres no ascii", "libro_PagIniL_format_error", "ADD", "La página inicial del libro tiene que ser evidentemente un número compuesto por dígitos"),
    Array("libro", "PagIniL", 59, "contiene caracteres no ascii", "libro_PagIniL_format_error", "EDIT", "La página inicial del libro tiene que ser evidentemente un número compuesto por dígitos"),
    Array("libro", "PagIniL", 60, "contiene caracteres no ascii", "libro_PagIniL_format_error", "SEARCH", "La página inicial del libro tiene que ser evidentemente un número compuesto por dígitos"),

    Array("libro", "PagIniL", 61, "contiene caracteres ascii", "ADD", true, "Página inicial del libro correcta"),
    Array("libro", "PagIniL", 62, "contiene caracteres ascii", "EDIT", true, "Página inicial del libro correcta"),
    Array("libro", "PagIniL", 63, "contiene caracteres ascii", "SEARCH", true, "Página inicial del libro correcta"),

//PagFinL
    //ADD 
    //EDIT
    //SEARCH
    Array("libro", "PagFinL", 53, "tamaño < 30", "libro_PagFinL_format_error", "ADD", "La página final del libro no puede ser nula"),
    Array("libro", "PagFinL", 54, "tamaño < 30", "libro_PagFinL_format_error", "EDIT", "La página final del libro no puede ser nula"),

    Array("libro", "PagFinL", 55, "tamaño > 500", "libro_PagFinL_format_error", "ADD", "La página final del libro no puede ser superior a 9999, ni 'One Piece' llega a tantas paginas"),
    Array("libro", "PagFinL", 56, "tamaño > 500", "libro_PagFinL_format_error", "EDIT", "La página final del libro no puede ser superior a 9999, ni 'One Piece' llega a tantas paginas"),
    Array("libro", "PagFinL", 57, "tamaño > 500", "libro_PagFinL_format_error", "SEARCH", "La página final del libro no puede ser superior a 9999, ni 'One Piece' llega a tantas paginas"),

    Array("libro", "PagFinL", 58, "contiene caracteres no ascii", "libro_PagFinL_format_error", "ADD", "La página final del libro tiene que ser evidentemente un número compuesto por dígitos"),
    Array("libro", "PagFinL", 59, "contiene caracteres no ascii", "libro_PagFinL_format_error", "EDIT", "La página final del libro tiene que ser evidentemente un número compuesto por dígitos"),
    Array("libro", "PagFinL", 60, "contiene caracteres no ascii", "libro_PagFinL_format_error", "SEARCH", "La página final del libro tiene que ser evidentemente un número compuesto por dígitos"),

    Array("libro", "PagFinL", 61, "contiene caracteres ascii", "ADD", true, "Página final del libro correcta"),
    Array("libro", "PagFinL", 62, "contiene caracteres ascii", "EDIT", true, "Página final del libro correcta"),
    Array("libro", "PagFinL", 63, "contiene caracteres ascii", "SEARCH", true, "Página final del libro correcta"),


    //VolumenL
    //ADD 
    //EDIT
    //SEARCH
    Array("libro", "VolumenL", 64, "tamaño < 6", "libro_VolumenL_size_minSize_error", "ADD", "El número de volumen del libro no puede ser nulo"),
    Array("libro", "VolumenL", 65, "tamaño < 6", "libro_VolumenL_size_minSize_error", "EDIT", "El número de volumen del libro no puede ser nulo"),

    Array("libro", "VolumenL", 66, "tamaño > 50", "libro_VolumenL_size_maxSize_error", "ADD", "El número máximo del volumen es de 9999, no hay tantos mangas de 'Detective Conan' si quiera"),
    Array("libro", "VolumenL", 67, "tamaño > 50", "libro_VolumenL_size_maxSize_error", "EDIT", "El número máximo del volumen es de 9999, no hay tantos mangas de 'Detective Conan' si quiera"),
    Array("libro", "VolumenL", 68, "tamaño > 50", "libro_VolumenL_size_maxSize_error", "SEARCH", "El número máximo del volumen es de 9999, no hay tantos mangas de 'Detective Conan' si quiera"),

    Array("libro", "VolumenL", 69, "contiene digitos o acentos", "libro_VolumenL_format_error", "ADD", "El número de volumen del libro tiene que ser evidentemente un número compuesto por dígitos"),
    Array("libro", "VolumenL", 70, "contiene digitos o acentos", "libro_VolumenL_format_error", "EDIT", "El número de volumen del libro tiene que ser evidentemente un número compuesto por dígitos"),
    Array("libro", "VolumenL", 71, "contiene digitos o acentos", "libro_VolumenL_format_error", "SEARCH", "El número de volumen del libro tiene que ser evidentemente un número compuesto por dígitos"),

    Array("libro", "VolumenL", 72, "No contiene acentos", "ADD", true, "Volumen del libro correcto"),
    Array("libro", "VolumenL", 73, "No contiene acentos", "EDIT", true, "Volumen del libro correcto"),
    Array("libro", "VolumenL", 74, "No contiene acentos", "SEARCH", true, "Volumen del libro correcto"),

    //EditorialL
    //ADD 
    //EDIT
    //SEARCH
    Array("libro", "EditorialL", 75, "tamaño < 6", "libro_EditorialL_size_minSize_error", "ADD", "El nombre de la editorial debe tener mínimo 10 caracteres"),
    Array("libro", "EditorialL", 76, "tamaño < 6", "libro_EditorialL_size_minSize_error", "EDIT", "El nombre de la editorial debe tener mínimo 10 caracteres"),

    Array("libro", "EditorialL", 77, "tamaño > 15", "libro_EditorialL_size_maxSize_error", "ADD", "El nombre de la editorial no puede superar los 100 caracteres"),
    Array("libro", "EditorialL", 78, "tamaño > 15", "libro_EditorialL_size_maxSize_error", "EDIT", "El nombre de la editorial no puede superar los 100 caracteres"),
    Array("libro", "EditorialL", 79, "tamaño > 15", "libro_EditorialL_size_maxSize_error", "SEARCH", "El nombre de la editorial no puede superar los 100 caracteres"),

    Array("libro", "EditorialL", 80, "contiene digitos o tildes o espacios", "libro_EditorialL_format_error", "ADD", "El nombre de la editorial solo pueden contener caracteres alfabeticos del Castellano, dígitos y '-'"),
    Array("libro", "EditorialL", 81, "contiene digitos o tildes o espacios", "libro_EditorialL_format_error", "EDIT", "El nombre de la editorial solo pueden contener caracteres alfabeticos del Castellano, dígitos y '-'"),
    Array("libro", "EditorialL", 82, "contiene digitos o tildes o espacios", "libro_EditorialL_format_error", "SEARCH", "El nombre de la editorial solo pueden contener caracteres alfabeticos del Castellano, dígitos y '-'"),

    Array("libro", "EditorialL", 83, "No contiene acentos ni espacios", "ADD", true, "Nombre de la editorial del libro correcto"),
    Array("libro", "EditorialL", 84, "No contiene acentos ni espacios", "EDIT", true, "Nombre de la editorial del libro correcto"),
    Array("libro", "EditorialL", 85, "No contiene acentos ni espacios", "SEARCH", true, "Nombre de la editorial del libro correcto"),

 //FechaPublicacionL
    //ADD 
    //EDIT
    //SEARCH
    Array("libro", "FechaPublicacionL", 15, "fecha sin formato correcto", "libro_FechaPublicacionL_inavlidDate_format_error", "ADD", "El formato de fecha no es correcto, use el siguiente formato: 'aaaa-mm-dd'"),
    Array("libro", "FechaPublicacionL", 16, "fecha sin formato correcto", "libro_FechaPublicacionL_inavlidDate_format_error", "EDIT", "El formato de fecha no es correcto, use el siguiente formato: 'aaaa-mm-dd'"),
    Array("libro", "FechaPublicacionL", 17, "fecha sin formato correcto", "libro_FechaPublicacionL_inavlidDate_format_error", "SEARCH", "El formato de fecha no es correcto, use el siguiente formato: 'aaaa-mm-dd'"),

    Array("libro", "FechaPublicacionL", 18, "fecha no valida", "libro_FechaPublicacionL_invalidDate_noDate_error", "ADD", "Fecha de publiación de libro inválida, seleccione una fecha válida"),
    Array("libro", "FechaPublicacionL", 19, "fecha no valida", "libro_FechaPublicacionL_invalidDate_noDate_error", "EDIT", "Fecha de publiación de libro inválida, seleccione una fecha válida"),

    Array("libro", "FechaPublicacionL", 20, "fecha valida", "ADD", true, "Fecha de inicio del libro correcta"),
    Array("libro", "FechaPublicacionL", 21, "fecha valida", "EDIT", true, "Fecha de inicio del libro correcta"),
    Array("libro", "FechaPublicacionL", 22, "fecha valida", "SEARCH", true, "Fecha de inicio del libro correcta"),

//EditorL
    //ADD 
    //EDIT
    //SEARCH
    Array("libro", "EditorL", 75, "tamaño < 6", "libro_EditorL_size_minSize_error", "ADD", "El nombre del editor del libro debe contener mínimo 10 caracteres"),
    Array("libro", "EditorL", 76, "tamaño < 6", "libro_EditorL_size_minSize_error", "EDIT", "El nombre del editor del libro debe contener mínimo 10 caracteres"),

    Array("libro", "EditorL", 77, "tamaño > 15", "libro_EditorL_size_maxSize_error", "ADD", "El nombre del editor del libro como máximo debe tener 100 caracteres"),
    Array("libro", "EditorL", 78, "tamaño > 15", "libro_EditorL_size_maxSize_error", "EDIT", "El nombre del editor del libro como máximo debe tener 100 caracteres"),
    Array("libro", "EditorL", 79, "tamaño > 15", "libro_EditorL_size_maxSize_error", "SEARCH", "El nombre del editor del libro como máximo debe tener 100 caracteres"),

    Array("libro", "EditorL", 80, "contiene digitos o tildes o espacios", "libro_EditorL_format_error", "ADD", "El nombre del editor del libro solo puede contener caracteres alfabeticos del Castellano, dígitos y '-'"),
    Array("libro", "EditorL", 81, "contiene digitos o tildes o espacios", "libro_EditorL_format_error", "EDIT", "El nombre del editor del libro solo puede contener caracteres alfabeticos del Castellano, dígitNombre del editor"),
    Array("libro", "EditorL", 82, "contiene digitos o tildes o espacios", "libro_EditorL_format_error", "SEARCH", "El nombre del editor del libro solo puede contener caracteres alfabeticos del Castellano, dígitNombre del editor"),

    Array("libro", "EditorL", 83, "No contiene acentos ni espacios", "ADD", true, "Nombre del editor del libro correcto"),
    Array("libro", "EditorL", 84, "No contiene acentos ni espacios", "EDIT", true, "Nombre del editor del libro correcto"),
    Array("libro", "EditorL", 85, "No contiene acentos ni espacios", "SEARCH", true, "Nombre del editor del libro correcto"),

//PaisEdicionL
    //ADD 
    //EDIT
    //SEARCH
    Array("libro", "PaisEdicionL", 75, "tamaño < 6", "libro_PaisEdicionL_size_minSize_error", "ADD", "No existen paises con nombres inferiores a 4 caracteres"),
    Array("libro", "PaisEdicionL", 76, "tamaño < 6", "libro_PaisEdicionL_size_minSize_error", "EDIT", "No existen paises con nombres inferiores a 4 caracteres"),

    Array("libro", "PaisEdicionL", 77, "tamaño > 15", "libro_PaisEdicionL_size_maxSize_error", "ADD", "El tamaño máximo permitido para identificar el país de la edición es de 20 caracteres"),
    Array("libro", "PaisEdicionL", 78, "tamaño > 15", "libro_PaisEdicionL_size_maxSize_error", "EDIT", "El tamaño máximo permitido para identificar el país de la edición es de 20 caracteres"),
    Array("libro", "PaisEdicionL", 79, "tamaño > 15", "libro_PaisEdicionL_size_maxSize_error", "SEARCH", "El tamaño máximo permitido para identificar el país de la edición es de 20 caracteres"),

    Array("libro", "PaisEdicionL", 80, "contiene digitos o tildes o espacios", "libro_PaisEdicionL_format_error", "ADD", "El país de origen de la edición solo puede contener caracteres alfabeticos del Castellano"),
    Array("libro", "PaisEdicionL", 81, "contiene digitos o tildes o espacios", "libro_PaisEdicionL_format_error", "EDIT", "El país de origen de la edición solo puede contener caracteres alfabeticos del Castellano"),
    Array("libro", "PaisEdicionL", 82, "contiene digitos o tildes o espacios", "libro_PaisEdicionL_format_error", "SEARCH", "El país de origen de la edición solo puede contener caracteres alfabeticos del Castellano"),

    Array("libro", "PaisEdicionL", 83, "No contiene acentos ni espacios", "ADD", true, "País de la origen de la edición del libro correcto"),
    Array("libro", "PaisEdicionL", 84, "No contiene acentos ni espacios", "EDIT", true, "País de la origen de la edición del libro correcto"),
    Array("libro", "PaisEdicionL", 85, "No contiene acentos ni espacios", "SEARCH", true, "País de la origen de la edición del libro correcto"),


//archivopdfL
//SEARCH
Array("libro", "archivopdfL", 107, "tamaño > 100", "libro_archivopdfL_name_size_maxSize_error", "SEARCH", "El nombre del archivo debe tener máximo 20 caracteres"),

Array("libro", "archivopdfL", 110, "contiene digitos o espacios o acentos o la letra ñ", "libro_archivopdfL_name_format_error", "SEARCH", "El nombre de fichero, no puede contener digitos ni espacios ni acentos ni la letra 'ñ'"),

Array("libro", "archivopdfL", 113, "Fichero correcto", "SEARCH", true, "Nombre de archivo de 'libro' correcta"),

//ADD 
//EDIT
/*-----*/ Array('libro', 'nuevo_archivopdfL', 97, 'existe fichero', 'ADD', 'libro_archivopdfL_null', 'Ningún archivo ha sido seleccionado'),
/*-----*/ Array('libro', 'nuevo_archivopdfL', 98, 'existe fichero', 'EDIT', 'libro_archivopdfL_null', 'Ningún archivo ha sido seleccionado'),

/*-----*/ Array('libro', 'nuevo_archivopdfL', 99, 'cumple nombre fichero', 'ADD', 'libro_archivopdfL_size_maxSize_error', 'El archivo supera el tamaño máximo permitido'),
/*-----*/ Array('libro', 'nuevo_archivopdfL', 100, 'tamaño < 2000000', 'EDIT', 'libro_archivopdfL_size_maxSize_error', 'El archivo supera el tamaño máximo permitido.'),

/*-----*/ Array('libro', 'nuevo_archivopdfL', 101, 'cumple tipo fichero', 'ADD', 'libro_archivopdfL_type_error', 'El archivo supera el tamaño máximo permitido'),
/*-----*/ Array('libro', 'nuevo_archivopdfL', 102, 'cumple tipo fichero', 'EDIT', 'libro_archivopdfL_type_error', 'El archivo supera el tamaño máximo permitido'),

    Array("libro", "nuevo_archivopdfL", 103, "tamaño < 7", "libro_archivopdfL_name_size_minSize_error", "ADD", "El nombre del archivo debe tener minimo 5 caracteres"),
    Array("libro", "nuevo_archivopdfL", 104, "tamaño < 7", "libro_archivopdfL_name_size_minSize_error", "EDIT", "El nombre del archivo debe tener minimo 5 caracteres"),

    Array("libro", "nuevo_archivopdfL", 105, "tamaño > 100", "libro_archivopdfL_name_size_maxSize_error", "ADD", "El nombre del archivo debe tener máximo 20 caracteres"),
    Array("libro", "nuevo_archivopdfL", 106, "tamaño > 100", "libro_archivopdfL_name_size_maxSize_error", "EDIT", "El nombre del archivo debe tener máximo 20 caracteres"),

    Array("libro", "nuevo_archivopdfL", 108, "contiene digitos o espacios o acentos o la letra ñ", "libro_archivopdfL_name_format_error", "ADD", "El nombre de fichero, no puede contener digitos ni espacios ni acentos ni la letra 'ñ'"),
    Array("libro", "nuevo_archivopdfL", 109, "contiene digitos o espacios o acentos o la letra ñ", "libro_archivopdfL_name_format_error", "EDIT", "El nombre del archivo puede contener cualquier a excepcion de espacios en blanco, ',' y simbolos"),

    Array("libro", "nuevo_archivopdfL", 111, "Fichero correcto", "ADD", true, "Archivo para el libro correcto"),
    Array("libro", "nuevo_archivopdfL", 112, "Fichero correcto", "EDIT", true, "Archivo para el libro correcto")

);

/* ####################################################################################################################################################### 
                                                            Pruebas
   ####################################################################################################################################################### */

let pruebas_libro = Array(
    //Test 1; ID longitud máxima 11
    //SEARCH
    Array("libro", "CodigoL", 1, 1, "SEARCH", "614735786894713243498971481248", "CodigoL_size_maxSize_error"),
    Array("libro", "CodigoL", 1, 2, "SEARCH", "721481291234324695648127412984", "CodigoL_size_maxSize_error"),
    Array("libro", "CodigoL", 1, 3, "SEARCH", "538607657546689769856463463465", "CodigoL_size_maxSize_error"),

    //Test 2; ID solo con digitos
    //SEARCH
    Array("libro", "CodigoL", 2, 4, "SEARCH", "abcdefg", "CodigoL_format_error"),
    Array("libro", "CodigoL", 2, 5, "SEARCH", "10_", "CodigoL_format_error"),
    Array("libro", "CodigoL", 2, 6, "SEARCH", "13120_", "CodigoL_format_error"),

    //Test 3; ID correcta
    //SEARCH
    Array("libro", "CodigoL", 3, 7, "SEARCH", "2134", true),
    Array("libro", "CodigoL", 3, 8, "SEARCH", "115", true),
    Array("libro", "CodigoL", 3, 9, "SEARCH", "0978", true),


    //AutoresL:  		alfabéticos y espacios sin acentos ni ñ, min 15 max 100
    //Test 4 y 5; AutoresL longitud mínima 15 
    //ADD
    Array("libro", "AutoresL", 4, 10, "ADD", "the", "AutoresL_size_minSize_error"),
    Array("libro", "AutoresL", 4, 11, "ADD", "one", "AutoresL_size_minSize_error"),
    Array("libro", "AutoresL", 4, 12, "ADD", "piece", "AutoresL_size_minSize_error"),
    //EDIT
    Array("libro", "AutoresL", 5, 13, "EDIT", "is", "AutoresL_size_minSize_error"),
    Array("libro", "AutoresL", 5, 14, "EDIT", "real", "AutoresL_size_minSize_error"),

    //Test 6-8; AutoresL longitud máxima 200
    //ADD
    Array("libro", "AutoresL", 6, 15, "ADD", "the emphasis on that intro melody is TOP TIER because it fits so fucking well with the knight on horseback theme", "AutoresL_size_maxSize_error"),
    Array("libro", "AutoresL", 6, 16, "ADD", "zzz ".repeat(100), "AutoresL_size_maxSize_error"),
    //EDIT
    Array("libro", "AutoresL", 7, 17, "EDIT", "the emphasis on that intro melody is TOP TIER because it fits so fucking well with the knight on horseback theme", "AutoresL_size_maxSize_error"),
    Array("libro", "AutoresL", 7, 18, "EDIT", "zzz ".repeat(100), "AutoresL_size_maxSize_error"),
    //EDIT
    Array("libro", "AutoresL", 8, 19, "SEARCH", "the emphasis on that intro melody is TOP TIER because it fits so fucking well with the knight on horseback theme", "AutoresL_size_maxSize_error"),
    Array("libro", "AutoresL", 8, 20, "SEARCH", "zzz ".repeat(100), "AutoresL_size_maxSize_error"),

    //Test 9-11; AutoresL con caracteres alfabeticos, con acentos, espacios y/o con ñ, ',', '-' y '.'
    //ADD
    Array("libro", "AutoresL", 9, 21, "ADD", "Hemos venido a emborracharñ os", "AutoresL_format_error"),
    Array("libro", "AutoresL", 9, 22, "ADD", "Y el ñesultado nos da igual", "AutoresL_format_error"),
    Array("libro", "AutoresL", 9, 23, "ADD", "2 Amanecer eterno que nos aguarda", "AutoresL_format_error"),
    //EDIT
    Array("libro", "AutoresL", 10, 24, "EDIT", "Después de mucho tiempo aprendí", "AutoresL_format_error"),
    Array("libro", "AutoresL", 10, 25, "EDIT", "Y a empezar la casa por el tejado A poder dormir, cuando tú no estás a mi lado", "AutoresL_format_error"),
    Array("libro", "AutoresL", 10, 26, "EDIT", "Es la hora de del experimento 115", "AutoresL_format_error"),
    //SEARCH
    Array("libro", "AutoresL", 11, 27, "SEARCH", "Gritare un riño de son y paz", "AutoresL_format_error"),
    Array("libro", "AutoresL", 11, 28, "SEARCH", "La caída del imperio es inevitable", "AutoresL_format_error"),
    Array("libro", "AutoresL", 11, 29, "SEARCH", "En una galicía muy muy lejana", "AutoresL_format_error"),

    //Test 12-14; AutoresL correcto
    //ADD
    Array("libro", "AutoresL", 12, 30, "ADD", "Francia la caida del imperio", true),
    Array("libro", "AutoresL", 12, 31, "ADD", "Ferrol una experiencia inolvidable", true),
    Array("libro", "AutoresL", 12, 32, "ADD", "Ourense una ciudad unica", true),
    //EDIT
    Array("libro", "AutoresL", 13, 33, "EDIT", "Adoro Nier Replicant", true),
    Array("libro", "AutoresL", 13, 34, "EDIT", "Mas me gusta Nier Automata", true),
    Array("libro", "AutoresL", 13, 35, "EDIT", "Pero sin duda mejor SinOAlice", true),
    //SEARCH
    Array("libro", "AutoresL", 14, 36, "SEARCH", "Nunca elegi aCharizard", true),
    Array("libro", "AutoresL", 14, 37, "SEARCH", "Es un legendario con carinho Rayquazza", true),
    Array("libro", "AutoresL", 14, 38, "SEARCH", "Mi apodo es Mimikyu", true),



	//`TituloL` varchar(100) NOT NULL min 1 max 100, caracteres alfanúmericos, con acentos, espacios y/o con ñ, ',', '-' y '.'
    //Test 15 y 16; TituloL longitud mínima 1
    //ADD
    Array("TituloL", "TituloL", 15, 39, "ADD", "", "libro_TituloL_size_minSize_error"),
    Array("TituloL", "TituloL", 15, 40, "ADD", "", "libro_TituloL_size_minSize_error"),
    Array("TituloL", "TituloL", 15, 41, "ADD", "", "libro_TituloL_size_minSize_error"),
    //EDIT
    Array("TituloL", "TituloL", 16, 42, "EDIT", "", "libro_TituloL_size_minSize_error"),
    Array("TituloL", "TituloL", 16, 43, "EDIT", "", "libro_TituloL_size_minSize_error"),
    Array("TituloL", "TituloL", 16, 44, "EDIT", "", "libro_TituloL_size_minSize_error"),

    //Test 17-19; TituloL longitud máxima 100
    //ADD
    Array("TituloL", "TituloL", 17, 45, "ADD", "En la tradicion oficial de Warhammer 40k el Omnissiah es considerado como el Dios de la Maquina la fuente divina detras de todo el conocimiento tecnologico y mecanico Los seguidores del Culto Mechanicus creen que el Omnissiah es responsable de la creacion de la tecnologia avanzada la preservacion del conocimiento y el mantenimiento del equilibrio entre la humanidad y sus maquinas", "libro_TituloL_size_maxSize_error"),
    Array("TituloL", "TituloL", 17, 46, "ADD", "El Emperador de la Humanidad es una figura divina y tragica cuyo sacrificio y liderazgo son fundamentales para la supervivencia de la humanidad en el universo de Warhammer 40000 Es el lider supremo del Imperio del Hombre el creador de los Astartes y un ser inmortal atrapado en un estado de agonia eterna guiando a la humanidad desde su trono en la Tierra mientras la galaxia se consume en el conflicto y la guerra", "libro_TituloL_size_maxSize_error"),
    //EDIT
    Array("TituloL", "TituloL", 18, 47, "EDIT", "En la tradicion oficial de Warhammer 40k el Omnissiah es considerado como el Dios de la Maquina la fuente divina detras de todo el conocimiento tecnologico y mecanico Los seguidores del Culto Mechanicus creen que el Omnissiah es responsable de la creacion de la tecnologia avanzada la preservacion del conocimiento y el mantenimiento del equilibrio entre la humanidad y sus maquinas", "libro_TituloL_size_maxSize_error"),
    Array("TituloL", "TituloL", 18, 48, "EDIT", "El Emperador de la Humanidad es una figura divina y tragica cuyo sacrificio y liderazgo son fundamentales para la supervivencia de la humanidad en el universo de Warhammer 40000 Es el lider supremo del Imperio del Hombre el creador de los Astartes y un ser inmortal atrapado en un estado de agonia eterna guiando a la humanidad desde su trono en la Tierra mientras la galaxia se consume en el conflicto y la guerra", "libro_TituloL_size_maxSize_error"),
    //SEARCH
    Array("TituloL", "TituloL", 19, 49, "SEARCH", "En la tradicion oficial de Warhammer 40k el Omnissiah es considerado como el Dios de la Maquina la fuente divina detras de todo el conocimiento tecnologico y mecanico Los seguidores del Culto Mechanicus creen que el Omnissiah es responsable de la creacion de la tecnologia avanzada la preservacion del conocimiento y el mantenimiento del equilibrio entre la humanidad y sus maquinas", "libro_TituloL_size_maxSize_error"),
    Array("TituloL", "TituloL", 19, 50, "SEARCH", "El Emperador de la Humanidad es una figura divina y tragica cuyo sacrificio y liderazgo son fundamentales para la supervivencia de la humanidad en el universo de Warhammer 40000 Es el lider supremo del Imperio del Hombre el creador de los Astartes y un ser inmortal atrapado en un estado de agonia eterna guiando a la humanidad desde su trono en la Tierra mientras la galaxia se consume en el conflicto y la guerra", "libro_TituloL_size_maxSize_error"),

    //Test 20-22; TituloL con caracteres alfanúmericos, con acentos, espacios y/o con ñ, ',', '-' y '.'
    //ADD
    Array("TituloL", "TituloL", 20, 51, "ADD", "Kuzu no honkai cap1, min 14:20", "libro_TituloL_format_error"),
    Array("TituloL", "TituloL", 20, 52, "ADD", "Milenio_40", "libro_TituloL_format_error"),
    //EDIT
    Array("TituloL", "TituloL", 21, 53, "EDIT", "Helldivers^2", "libro_TituloL_format_error"),
    Array("TituloL", "TituloL", 21, 54, "EDIT", "Dying´light 3", "libro_TituloL_format_error"),
    //SEARCH
    Array("TituloL", "TituloL", 22, 55, "SEARCH", "33-Repiteme_ese_numerin 33", "libro_TituloL_format_error"),
    Array("TituloL", "TituloL", 22, 56, "SEARCH", "CoD+Bo2", "libro_TituloL_format_error"),

    //Test 39-41; TituloL correcto
    //ADD
    Array("TituloL", "TituloL", 23, 57, "ADD", "Alabado sea el DIOS Emperador", true),
    Array("TituloL", "TituloL", 23, 58, "ADD", "Alabado sea el dios del sol", true),
    //EDIT
    Array("TituloL", "TituloL", 24, 59, "EDIT", "Que se acabe ya por favor", true),
    Array("TituloL", "TituloL", 24, 60, "EDIT", "Solo quiero llorar", true),
    //SEARCH
    Array("TituloL", "TituloL", 25, 61, "SEARCH", "May chaos take the world", true),
    Array("TituloL", "TituloL", 25, 62, "SEARCH", "MAY CHAOS TAKE THE WORLD", true),
    Array("TituloL", "TituloL", 25, 63, "SEARCH", "MAY CHAOS TAKE THE WOOOORRRLLLDDDD", true),

    //ISBN:  			alfabéticos con acentos, ñ, espacios y signos de puntuación, min 6 max 100
    //Test 42 y 43; Organizacion longitud mínima 6
    //ADD
    Array("ISBN", "ISBN", 26, 64, "ADD", "mija", "libro_ISBN_size_minSize_error"),
    Array("ISBN", "ISBN", 26, 65, "ADD", "pija", "libro_ISBN_size_minSize_error"),
    Array("ISBN", "ISBN", 26, 66, "ADD", "rija", "libro_ISBN_size_minSize_error"),
    //EDIT
    Array("ISBN", "ISBN", 27, 67, "EDIT", "mono", "libro_ISBN_size_minSize_error"),
    Array("ISBN", "ISBN", 27, 68, "EDIT", "mojo", "libro_ISBN_size_minSize_error"),
    Array("ISBN", "ISBN", 27, 69, "EDIT", "yoyo", "libro_ISBN_size_minSize_error"),

    //Test 44-46; Organizacion longitud máxima 100
    //ADD
    Array("ISBN", "ISBN", 28, 70, "ADD", "En la tradicion oficial de Warhammer 40k el Omnissiah es considerado como el Dios de la Maquina la fuente divina detras de todo el conocimiento tecnologico y mecanico Los seguidores del Culto Mechanicus creen que el Omnissiah es responsable de la creacion de la tecnologia avanzada la preservacion del conocimiento y el mantenimiento del equilibrio entre la humanidad y sus maquinas", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 28, 71, "ADD", "El Emperador de la Humanidad es una figura divina y tragica cuyo sacrificio y liderazgo son fundamentales para la supervivencia de la humanidad en el universo de Warhammer 40000 Es el lider supremo del Imperio del Hombre el creador de los Astartes y un ser inmortal atrapado en un estado de agonia eterna guiando a la humanidad desde su trono en la Tierra mientras la galaxia se consume en el conflicto y la guerra", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 28, 72, "ADD", "Horus es uno de los personajes mas tragicos y significativos en el lore de Warhammer 40k Su historia refleja el conflicto central del universo de Warhammer 40k la lucha entre el orden y el caos la traicion y la lealtad La Herejia de Horus no solo fue la guerra mas grande en la historia del Imperio sino que tambien dejo cicatrices profundas en la humanidad marcando el comienzo de la era oscura del 41º milenio", "libro_ISBN_size_maxSize_error"),
    //EDIT
    Array("ISBN", "ISBN", 29, 73, "EDIT", "En la tradicion oficial de Warhammer 40k el Omnissiah es considerado como el Dios de la Maquina la fuente divina detras de todo el conocimiento tecnologico y mecanico Los seguidores del Culto Mechanicus creen que el Omnissiah es responsable de la creacion de la tecnologia avanzada la preservacion del conocimiento y el mantenimiento del equilibrio entre la humanidad y sus maquinas", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 29, 74, "EDIT", "El Emperador de la Humanidad es una figura divina y tragica cuyo sacrificio y liderazgo son fundamentales para la supervivencia de la humanidad en el universo de Warhammer 40000 Es el lider supremo del Imperio del Hombre el creador de los Astartes y un ser inmortal atrapado en un estado de agonia eterna guiando a la humanidad desde su trono en la Tierra mientras la galaxia se consume en el conflicto y la guerra", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 29, 75, "EDIT", "Horus es uno de los personajes mas tragicos y significativos en el lore de Warhammer 40k Su historia refleja el conflicto central del universo de Warhammer 40k la lucha entre el orden y el caos la traicion y la lealtad La Herejia de Horus no solo fue la guerra mas grande en la historia del Imperio sino que tambien dejo cicatrices profundas en la humanidad marcando el comienzo de la era oscura del 41º milenio", "libro_ISBN_size_maxSize_error"),
    //SEARCH
    Array("ISBN", "ISBN", 30, 76, "SEARCH", "En la tradicion oficial de Warhammer 40k el Omnissiah es considerado como el Dios de la Maquina la fuente divina detras de todo el conocimiento tecnologico y mecanico Los seguidores del Culto Mechanicus creen que el Omnissiah es responsable de la creacion de la tecnologia avanzada la preservacion del conocimiento y el mantenimiento del equilibrio entre la humanidad y sus maquinas", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 30, 77, "SEARCH", "El Emperador de la Humanidad es una figura divina y tragica cuyo sacrificio y liderazgo son fundamentales para la supervivencia de la humanidad en el universo de Warhammer 40000 Es el lider supremo del Imperio del Hombre el creador de los Astartes y un ser inmortal atrapado en un estado de agonia eterna guiando a la humanidad desde su trono en la Tierra mientras la galaxia se consume en el conflicto y la guerra", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 30, 78, "SEARCH", "Horus es uno de los personajes mas tragicos y significativos en el lore de Warhammer 40k Su historia refleja el conflicto central del universo de Warhammer 40k la lucha entre el orden y el caos la traicion y la lealtad La Herejia de Horus no solo fue la guerra mas grande en la historia del Imperio sino que tambien dejo cicatrices profundas en la humanidad marcando el comienzo de la era oscura del 41º milenio", "libro_ISBN_size_maxSize_error"),

    //Test 47-49; Organizacion sin digitos
    //ADD
    Array("ISBN", "ISBN", 31, 79, "ADD", "Kuzu no honkai cap1, min 14:20", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 31, 80, "ADD", "Silent Hill 2", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 31, 81, "ADD", "Milenio 40", "libro_ISBN_size_maxSize_error"),
    //EDIT
    Array("ISBN", "ISBN", 32, 82, "EDIT", "Helldivers 2", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 32, 83, "EDIT", "Dark souls 4", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 32, 84, "EDIT", "Dying light 3", "libro_ISBN_size_maxSize_error"),
    //SEARCH
    Array("ISBN", "ISBN", 33, 85, "SEARCH", "33 Repiteme ese numerin 33", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 33, 86, "SEARCH", "Call of duty black ops 2", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 33, 87, "SEARCH", "To you in 2000 years", "libro_ISBN_size_maxSize_error"),

    //Test 50-52; Organizacion correcta
    //ADD
    Array("ISBN", "ISBN", 34, 88, "ADD", "Alabado sea el DIOS Emperador", true),
    Array("ISBN", "ISBN", 34, 89, "ADD", "Alabado sea el dios del sol", true),
    Array("ISBN", "ISBN", 34, 90, "ADD", "Alabada sea la herejia", true),
    //EDIT
    Array("ISBN", "ISBN", 35, 91, "EDIT", "Que se acabe ya por favor", true),
    Array("ISBN", "ISBN", 35, 92, "EDIT", "No quiero seguir sufriendo", true),
    Array("ISBN", "ISBN", 35, 93, "EDIT", "Solo quiero llorar", true),
    //SEARCH
    Array("ISBN", "ISBN", 36, 94, "SEARCH", "May chaos take the world", true),
    Array("ISBN", "ISBN", 36, 95, "SEARCH", "MAY CHAOS TAKE THE WORLD", true),
    Array("ISBN", "ISBN", 36, 96, "SEARCH", "MAY CHAOS TAKE THE WOOOORRRLLLDDDD", true),

    //PagIniL:	alfabéticos y espacios sin acentos ni ñ, min 80 max 5000
    //Test 53 y 54; Descripción longitud mínima 80 
    //ADD
    Array("libro", "PagIniL", 37, 97, "ADD", "Lore", "libro_PagFinL_format_error"),
    Array("libro", "PagIniL", 37, 98, "ADD", "Warhammer", "libro_PagFinL_format_error"),
    Array("libro", "PagIniL", 37, 99, "ADD", "CuarentaK", "libro_PagFinL_format_error"),

    Array("libro", "PagIniL", 38, 100, "EDIT", "Hejeria", "libro_PagFinL_format_error"),
    Array("libro", "PagIniL", 38, 101, "EDIT", "Horus", "libro_PagFinL_format_error"),
    Array("libro", "PagIniL", 38, 102, "EDIT", "treintaK", "libro_PagFinL_format_error"),

    //Test 55-57; Descripción longitud máxima 5000
    //ADD
    Array("libro", "PagIniL", 39, 103, "ADD", "arriba chuta la victoria es tuya ".repeat(300), "libro_PagFinL_format_error"),
    Array("libro", "PagIniL", 39, 104, "ADD", "Im Malenia blade of Miquella".repeat(350), "libro_PagFinL_format_error"),
    //EDIT
    Array("libro", "PagIniL", 40, 105, "EDIT", "arriba chuta la victoria es tuya ".repeat(300), "libro_PagFinL_format_error"),
    Array("libro", "PagIniL", 40, 106, "EDIT", "Im Malenia blade of Miquella ".repeat(350), "libro_PagFinL_format_error"),
    //SEARCH
    Array("libro", "PagIniL", 41, 107, "SEARCH", "arriba chuta la victoria es tuya ".repeat(300), "libro_PagFinL_format_error"),
    Array("libro", "PagIniL", 41, 108, "SEARCH", "Im Malenia blade of Miquella".repeat(350), "libro_PagFinL_format_error"),
    //Test 58-60; CUALQUIER ASCII
    //ADD
    Array("libro", "PagIniL", 42, 109, "ADD", "115. Este analisis es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),
    Array("libro", "PagIniL", 42, 110, "ADD", "Este análisis es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),
    Array("libro", "PagIniL", 42, 111, "ADD", "El dueño de este analisis informa que es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),
    //EDIT
    Array("libro", "PagIniL", 43, 112, "EDIT", "115. Este analisis es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),
    Array("libro", "PagIniL", 43, 113, "EDIT", "Este análisis es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),
    Array("libro", "PagIniL", 43, 114, "EDIT", "El dueño de este analisis informa que es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),
    //SEARCH
    Array("libro", "PagIniL", 44, 115, "SEARCH", "115. Este analisis es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),
    Array("libro", "PagIniL", 44, 116, "SEARCH", "Este análisis es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),
    Array("libro", "PagIniL", 44, 117, "SEARCH", "El dueño de este analisis informa que es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),

    //Test 61-63; Descripción correcta
    //ADD
    Array("libro", "PagIniL", 45, 118, "ADD", "Todo comienza en el planeta Isstvan III donde Horus y la legion traidora de los Hijos de Horus con la ayuda de las legiones ahora leales a el de los Hijos del Emperador la Guardia de la Muerte y los Devoradores de Mundos bajo el liderazgo de los primarcas Fulgrim Mortarion y Angron respectivamente y de la fuerza titanica del Mechanicum Oscuro se deshacen de todos aquellos marines espaciales que creen que no aceptaran la traicion de Horus", true),
    Array("libro", "PagIniL", 45, 119, "ADD", "La traicion de Horus ya es conocida por todos y ha llegado el momento de que sean puestos a prueba Cuando el Senor de la Guerra despliega abiertamente sus fuerzas llega a conocimiento de los Astartes leales que los Portadores de la Palabra han enviado una flota contra Ultramar el hogar de los Ultramarines A menos que logren interceptarla y destruirla es muy posible que los Ultramarines sufran un dano del que jamas sean capaces de recuperarse", true),
    Array("libro", "PagIniL", 45, 120, "ADD", "Messmer the Impaler es un Demigod Boss en Shadow of the Erdtree Lucha junto a la serpiente abismal de dos cabezas y usa hechizos de fuego para atacar al jugador así como una lanza de largo alcance Se revela que es hijo de la Reina Marika oculto y abandonado en la Tierra de las Sombras", true),
    //EDIT
    Array("libro", "PagIniL", 46, 121, "EDIT", "Todo comienza en el planeta Isstvan III donde Horus y la legion traidora de los Hijos de Horus con la ayuda de las legiones ahora leales a el de los Hijos del Emperador la Guardia de la Muerte y los Devoradores de Mundos bajo el liderazgo de los primarcas Fulgrim Mortarion y Angron respectivamente y de la fuerza titanica del Mechanicum Oscuro se deshacen de todos aquellos marines espaciales que creen que no aceptaran la traicion de Horus", true),
    Array("libro", "PagIniL", 46, 122, "EDIT", "La traicion de Horus ya es conocida por todos y ha llegado el momento de que sean puestos a prueba Cuando el Senor de la Guerra despliega abiertamente sus fuerzas llega a conocimiento de los Astartes leales que los Portadores de la Palabra han enviado una flota contra Ultramar el hogar de los Ultramarines A menos que logren interceptarla y destruirla es muy posible que los Ultramarines sufran un dano del que jamas sean capaces de recuperarse", true),
    Array("libro", "PagIniL", 46, 123, "EDIT", "Messmer the Impaler es un Demigod Boss en Shadow of the Erdtree Lucha junto a la serpiente abismal de dos cabezas y usa hechizos de fuego para atacar al jugador así como una lanza de largo alcance Se revela que es hijo de la Reina Marika oculto y abandonado en la Tierra de las Sombras", true),
    //SEARCH
    Array("libro", "PagIniL", 47, 124, "SEARCH", "Todo comienza en el planeta Isstvan III donde Horus y la legion traidora de los Hijos de Horus con la ayuda de las legiones ahora leales a el de los Hijos del Emperador la Guardia de la Muerte y los Devoradores de Mundos bajo el liderazgo de los primarcas Fulgrim Mortarion y Angron respectivamente y de la fuerza titanica del Mechanicum Oscuro se deshacen de todos aquellos marines espaciales que creen que no aceptaran la traicion de Horus", true),
    Array("libro", "PagIniL", 47, 125, "SEARCH", "La traicion de Horus ya es conocida por todos y ha llegado el momento de que sean puestos a prueba Cuando el Senor de la Guerra despliega abiertamente sus fuerzas llega a conocimiento de los Astartes leales que los Portadores de la Palabra han enviado una flota contra Ultramar el hogar de los Ultramarines A menos que logren interceptarla y destruirla es muy posible que los Ultramarines sufran un dano del que jamas sean capaces de recuperarse", true),
    Array("libro", "PagIniL", 47, 126, "SEARCH", "Messmer the Impaler es un Demigod Boss en Shadow of the Erdtree Lucha junto a la serpiente abismal de dos cabezas y usa hechizos de fuego para atacar al jugador así como una lanza de largo alcance Se revela que es hijo de la Reina Marika oculto y abandonado en la Tierra de las Sombras", true),

    //VolumenL
    //Test 64 y 65; Código longitud mínima 6
    //ADD
    Array("libro", "VolumenL", 48, 127, "ADD", "P_Uni", "libro_VolumenL_size_minSize_error"),
    Array("libro", "VolumenL", 48, 128, "ADD", "ASHE", "libro_VolumenL_size_minSize_error"),
    //EDIT
    Array("libro", "VolumenL", 49, 129, "EDIT", "KYS", "libro_VolumenL_size_minSize_error"),
    Array("libro", "VolumenL", 49, 130, "EDIT", "CSGO", "libro_VolumenL_size_minSize_error"),

    //Test 66-68; Código longitud máxima 50
    //ADD
    Array("libro", "VolumenL", 50, 131, "ADD", "Those stripped of the Grace of Gold shall all meet death In the embrace of Messmers flame", "libro_VolumenL_size_maxSize_error"),
    Array("libro", "VolumenL", 50, 132, "ADD", "But I will riddle with holes your rotten hide With a hail of harpoons With every last drop of my being", "libro_VolumenL_size_maxSize_error"),
    //EDIT
    Array("libro", "VolumenL", 51, 133, "EDIT", "Those stripped of the Grace of Gold shall all meet death In the embrace of Messmers flame", "libro_VolumenL_size_maxSize_error"),
    Array("libro", "VolumenL", 51, 134, "EDIT", "But I will riddle with holes your rotten hide With a hail of harpoons With every last drop of my being", "libro_VolumenL_size_maxSize_error"),
    //SEARCH
    Array("libro", "VolumenL", 52, 135, "SEARCH", "Those stripped of the Grace of Gold shall all meet death In the embrace of Messmers flame", "libro_VolumenL_size_maxSize_error"),
    Array("libro", "VolumenL", 52, 136, "SEARCH", "But I will riddle with holes your rotten hide With a hail of harpoons With every last drop of my being", "libro_VolumenL_size_maxSize_error"),


    //Test 69-71; Código sin digitos ni acentos
    //ADD
    Array("libro", "VolumenL", 53, 137, "ADD", "La caída sera grandiosa", "libro_VolumenL_format_error"),
    Array("libro", "VolumenL", 53, 138, "ADD", "ASHE CÁNT FALL", "libro_VolumenL_format_error"),
    Array("libro", "VolumenL", 69, 139, "ADD", "libro 69", "libro_VolumenL_format_error"),
    //EDIT
    Array("libro", "VolumenL", 54, 140, "EDIT", "La caída sera grandiosa", "libro_VolumenL_format_error"),
    Array("libro", "VolumenL", 54, 141, "EDIT", "libro 69", "libro_VolumenL_format_error"),
    Array("libro", "VolumenL", 70, 142, "EDIT", "3InRow", "libro_VolumenL_format_error"),
    //SEARCH
    Array("libro", "VolumenL", 55, 143, "SEARCH", "La caída sera grandiosa", "libro_VolumenL_format_error"),
    Array("libro", "VolumenL", 55, 144, "SEARCH", "libro 69", "libro_VolumenL_format_error"),
    Array("libro", "VolumenL", 71, 145, "SEARCH", "3InRow", "libro_VolumenL_format_error"),

    //Test 72-74; Código correcto
    //ADD
    Array("libro", "VolumenL", 56, 146, "ADD", "libroUnitalRing", true),
    Array("libro", "VolumenL", 56, 147, "ADD", "ASHESREMAIN", true),
    Array("libro", "VolumenL", 56, 148, "ADD", "Stigmatalibro", true),
    Array("libro", "VolumenL", 56, 149, "ADD", "WorldOfWarcraft", true),
    //EDIT
    Array("libro", "VolumenL", 57, 150, "EDIT", "libroUnitalRing", true),
    Array("libro", "VolumenL", 57, 151, "EDIT", "ASHESREMAIN", true),
    Array("libro", "VolumenL", 57, 152, "EDIT", "Stigmatalibro", true),
    Array("libro", "VolumenL", 57, 153, "EDIT", "WorldOfWarcraft", true),
    //SEARCH
    Array("libro", "VolumenL", 58, 154, "SEARCH", "libroUnitalRing", true),
    Array("libro", "VolumenL", 58, 155, "SEARCH", "ASHESREMAIN", true),
    Array("libro", "VolumenL", 58, 156, "SEARCH", "Stigmatalibro", true),
    Array("libro", "VolumenL", 58, 157, "SEARCH", "WorldOfWarcraft", true),

    //EditorialL
    //Test 75 y 76; Acronimo longitud mínima 6
    //ADD
    Array("libro", "EditorialL", 59, 158, "ADD", "PKL", "libro_EditorialL_size_minSize_error"),
    Array("libro", "EditorialL", 59, 159, "ADD", "ASH", "libro_EditorialL_size_minSize_error"),

    //EDIT
    Array("libro", "EditorialL", 60, 160, "EDIT", "PKL", "libro_EditorialL_size_minSize_error"),
    Array("libro", "EditorialL", 60, 161, "EDIT", "ASH", "libro_EditorialL_size_minSize_error"),


    //Test 77-79; Acronimo longitud máxima 15
    //ADD
    Array("libro", "EditorialL", 61, 162, "ADD", "Those stripped of the Grace of Gold shall all meet death In the embrace of Messmers flame", "libro_EditorialL_size_maxSize_error"),
    Array("libro", "EditorialL", 61, 163, "ADD", "But I will riddle with holes your rotten hide With a hail of harpoons With every last drop of my being", "libro_EditorialL_size_maxSize_error"),

    //EDIT
    Array("libro", "EditorialL", 62, 164, "EDIT", "Those stripped of the Grace of Gold shall all meet death In the embrace of Messmers flame", "libro_EditorialL_size_maxSize_error"),
    Array("libro", "EditorialL", 62, 165, "EDIT", "But I will riddle with holes your rotten hide With a hail of harpoons With every last drop of my being", "libro_EditorialL_size_maxSize_error"),

    //SEARCH
    Array("libro", "EditorialL", 63, 166, "SEARCH", "Those stripped of the Grace of Gold shall all meet death In the embrace of Messmers flame", "libro_EditorialL_size_maxSize_error"),
    Array("libro", "EditorialL", 63, 167, "SEARCH", "But I will riddle with holes your rotten hide With a hail of harpoons With every last drop of my being", "libro_EditorialL_size_maxSize_error"),


    //Test 80-82; acronimo sin digitos ni acentos
    //ADD
    Array("libro", "EditorialL", 64, 168, "ADD", "AcciónTG", "libro_EditorialL_format_error"),
    Array("libro", "EditorialL", 64, 169, "ADD", "TIME-60s", "libro_EditorialL_format_error"),
    Array("libro", "EditorialL", 64, 170, "ADD", "CSKSYO5", "libro_EditorialL_format_error"),
    //EDIT
    Array("libro", "EditorialL", 65, 171, "EDIT", "AcciónTG", "libro_EditorialL_format_error"),
    Array("libro", "EditorialL", 65, 172, "EDIT", "TIME-60s", "libro_EditorialL_format_error"),
    Array("libro", "EditorialL", 65, 173, "EDIT", "CSKSYO5", "libro_EditorialL_format_error"),
    //SEARCH
    Array("libro", "EditorialL", 66, 174, "SEARCH", "AcciónTG", "libro_EditorialL_format_error"),
    Array("libro", "EditorialL", 66, 175, "SEARCH", "TIME-60s", "libro_EditorialL_format_error"),
    Array("libro", "EditorialL", 66, 176, "SEARCH", "CSKSYO5", "libro_EditorialL_format_error"),

    //Test 83-85; acronimo correcto
    //ADD
    Array("libro", "EditorialL", 67, 177, "ADD", "PROGII", true),
    Array("libro", "EditorialL", 67, 178, "ADD", "PROLOG", true),
    //EDIT
    Array("libro", "EditorialL", 68, 179, "EDIT", "PROGII", true),
    Array("libro", "EditorialL", 68, 180, "EDIT", "PROLOG", true),
    //SEARCH
    Array("libro", "EditorialL", 69, 181, "SEARCH", "PROGII", true),
    Array("libro", "EditorialL", 69, 182, "SEARCH", "PROLOG", true),

        //FechaPublicacionL
    //Test 15-17: Formato correcto
    //ADD
    Array("libro", "FechaPublicacionL", 70, 183, "ADD", "17/2023/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 70, 184, "ADD", "1754/20/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 70, 185, "ADD", "3453-2023/1", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 70, 186, "ADD", "17-2023/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 70, 187, "ADD", "17/2023-18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    //EDIT
    Array("libro", "FechaPublicacionL", 71, 188, "EDIT", "17/2023/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 71, 189, "EDIT", "1754/20/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 71, 190, "EDIT", "3453-2023/1", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 71, 191, "EDIT", "17-2023/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 71, 192, "EDIT", "17/2023-18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    //SEARCH
    Array("libro", "FechaPublicacionL", 72, 193, "SEARCH", "17/2023/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 72, 194, "SEARCH", "1754/20/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 72, 195, "SEARCH", "3453-2023/1", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 72, 196, "SEARCH", "17-2023/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 72, 197, "SEARCH", "17/2023-18", "libro_FechaPublicacionL_inavlidDate_format_error"),

    //Test 18 y 19: Fecha no existente
    //ADD
    Array("libro", "FechaPublicacionL", 73, 198, "ADD", "23/14/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),
    Array("libro", "FechaPublicacionL", 73, 199, "ADD", "23/14/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),
    Array("libro", "FechaPublicacionL", 73, 200, "ADD", "34/11/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),
  
    //EDIT
    Array("libro", "FechaPublicacionL", 74, 201, "EDIT", "23/14/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),
    Array("libro", "FechaPublicacionL", 74, 202, "EDIT", "23/14/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),
    Array("libro", "FechaPublicacionL", 74, 203, "EDIT", "34/11/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),


    //Test 20-22: Fecha valida
    //ADD
    Array("libro", "FechaPublicacionL", 75, 204, "ADD", "07/09/2004", true),
    Array("libro", "FechaPublicacionL", 75, 205, "ADD", "25/02/2004", true),
    //EDIT
    Array("libro", "FechaPublicacionL", 76, 206, "EDIT", "15/11/2023", true),
    Array("libro", "FechaPublicacionL", 76, 207, "EDIT", "17/04/2013", true),
    //SEARCH
    Array("libro", "FechaPublicacionL", 77, 208, "SEARCH", "20/03/2002", true),
    Array("libro", "FechaPublicacionL", 77, 209, "SEARCH", "01/01/1973", true),

    //id_sampling_methodology
    //Test 86 y 87; ID longitud mínima 1 
    //ADD
    Array("libro", "id_sampling_methodology", 78, 210, "ADD", "", "libro_sampleID_size_minSize_error"),
    Array("libro", "id_sampling_methodology", 78, 211, "ADD", "", "libro_sampleID_size_minSize_error"),
    //EDIT
    Array("libro", "id_sampling_methodology", 79, 212, "EDIT", "", "libro_sampleID_size_minSize_error"),
    Array("libro", "id_sampling_methodology", 79, 213, "EDIT", "", "libro_sampleID_size_minSize_error"),

    //Test 88-90; ID longitud máxima 11 
    //ADD
    Array("libro", "id_sampling_methodology", 80, 214, "ADD", "73849184915u0125981", "libro_sampleID_size_maxSize_error"),
    Array("libro", "id_sampling_methodology", 80, 215, "ADD", "5358923592352375473777", "libro_sampleID_size_maxSize_error"),
    //EDIT
    Array("libro", "id_sampling_methodology", 81, 216, "EDIT", "634634646437347347774", "libro_sampleID_size_maxSize_error"),
    Array("libro", "id_sampling_methodology", 81, 217, "EDIT", "921341275192758357915", "libro_sampleID_size_maxSize_error"),
    //SEARCH
    Array("libro", "id_sampling_methodology", 82, 218, "SEARCH", "0808564653432678485", "libro_sampleID_size_maxSize_error"),
    Array("libro", "id_sampling_methodology", 82, 219, "SEARCH", "3254364376375485486", "libro_sampleID_size_maxSize_error"),


    //Test 91-93; ID solo con digitos
    //ADD
    Array("libro", "id_sampling_methodology", 83, 220, "ADD", "25235fas", "libro_sampleID_format_error"),
    Array("libro", "id_sampling_methodology", 83, 221, "ADD", "235_ff", "libro_sampleID_format_error"),
    //EDIT
    Array("libro", "id_sampling_methodology", 84, 222, "EDIT", "4325a", "libro_sampleID_format_error"),
    Array("libro", "id_sampling_methodology", 84, 223, "EDIT", "43626__l", "libro_sampleID_format_error"),
    //SEARCH
    Array("libro", "id_sampling_methodology", 85, 224, "SEARCH", "gdsgs_", "libro_sampleID_format_error"),
    Array("libro", "id_sampling_methodology", 85, 225, "SEARCH", "daddy", "libro_sampleID_format_error"),

    //Test 94-96; ID correcta
    //ADD
    Array("libro", "id_sampling_methodology", 86, 226, "ADD", "69", true),
    Array("libro", "id_sampling_methodology", 86, 227, "ADD", "56", true),
    //EDIT
    Array("libro", "id_sampling_methodology", 87, 228, "EDIT", "301", true),
    Array("libro", "id_sampling_methodology", 87, 229, "EDIT", "115", true),
    //SEARCH
    Array("libro", "id_sampling_methodology", 88, 230, "SEARCH", "666", true),
    Array("libro", "id_sampling_methodology", 88, 231, "SEARCH", "777", true),

    //archivopdfLn: 			alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2.000.000 bytes
    //Test 97: Tamaño de fichero correcto
    //Solo searchs
    //SEARCH
    Array('libro', 'archivopdfL', 89, 232, 'SEARCH', "a".repeat(101), 'libro_file_name_maxSize_error'),
    Array('libro', 'archivopdfL', 89, 233, 'SEARCH', "a".repeat(102), 'libro_file_name_maxSize_error'),
    
    //Test 98: Formato de fichero correcto
    //SEARCH
     Array('libro', 'archivopdfL', 90, 234, 'SEARCH', 'AnalísColedural', "libro_archivopdfL_name_format_error"),
     Array('libro', 'archivopdfL', 90, 235, 'SEARCH', 'Preparacion de fichero', "libro_archivopdfL_name_format_error"),
     Array('libro', 'archivopdfL', 90, 236, 'SEARCH', 'Reconocimiento meéico', "libro_archivopdfL_name_format_error"),
 
    //Test 99: Fichero correcto
    //SEARCH
    Array('libro', 'archivopdfL', 91, 237, 'SEARCH', 'FicheroUno', true),
    Array('libro', 'archivopdfL', 91, 238, 'SEARCH', 'HerejiaHorus', true),
);
 
/* ####################################################################################################################################################### 
                                                            Pruebas File
   ####################################################################################################################################################### */

let pruebas_file_libro = Array(
    //archivopdfL: 			alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2.000.000 bytes
    //Test 100 y 101; Fichero existe
    //ADD
    Array('libro', 'nuevo_archivopdfL', 94, 340, 'ADD', 'Existe', Array(), 'libro_archivopdfL_null'),
    Array('libro', 'nuevo_archivopdfL', 94, 341, 'ADD', 'Existe', Array(), 'libro_archivopdfL_null'),
    //EDIT
    Array('libro', 'nuevo_archivopdfL', 93, 342, 'EDIT', 'No existe', Array(), true),
    Array('libro', 'nuevo_archivopdfL', 93, 343, 'EDIT', 'No existe', Array(), true),

    //Test 102 y 103; Tamaño < 2000000
    //ADD
    Array('libro', 'nuevo_archivopdfL', 95, 344, 'ADD', 'file_max_size', Array('Pruebas', Array('application/pdf'), 3042000), 'libro_file_size_maxSize_error'),
    Array('libro', 'nuevo_archivopdfL', 95, 345, 'ADD', 'file_max_size', Array('Pruebas', Array('application/pdf'), 85607658), 'libro_file_size_maxSize_error'),
    //EDIT
    Array('libro', 'nuevo_archivopdfL', 96, 347, 'EDIT', 'file_max_size', Array('Pruebas', Array('application/pdf'), 30443284), 'libro_file_size_maxSize_error'),
    Array('libro', 'nuevo_archivopdfL', 96, 348, 'EDIT', 'file_max_size', Array('Pruebas', Array('application/pdf'), 79870700), 'libro_file_size_maxSize_error'),

    //Test 104 y 105; Tipo de fichero
    //ADD
    Array('libro', 'nuevo_archivopdfL', 97, 350, 'ADD', 'type_file', Array('Pruebas', Array('application/jpg'), 20000), 'libro_file_type_error'),
    Array('libro', 'nuevo_archivopdfL', 97, 351, 'ADD', 'type_file', Array('Pruebas', Array('application/xml'), 20000), 'libro_file_type_error'),

    //EDIT
    Array('libro', 'nuevo_archivopdfL', 98, 353, 'EDIT', 'type_file', Array('Pruebas', Array('application/raw'), 20000), 'libro_file_type_error'),
    Array('libro', 'nuevo_archivopdfL', 98, 354, 'EDIT', 'type_file', Array('Pruebas', Array('application/py'), 20000), 'libro_file_type_error'),

    //Test 106 y 107; Tamaño minimo de nombre
    //ADD
    Array('libro', 'nuevo_archivopdfL', 99, 356, 'ADD', 'file_name_min_size', Array('defi', Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_minSize_error'),
    Array('libro', 'nuevo_archivopdfL', 99, 357, 'ADD', 'file_name_min_size', Array('lol', Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_minSize_error'),
    //EDIT
    Array('libro', 'nuevo_archivopdfL', 100, 359, 'EDIT', 'file_name_min_size', Array('mtc', Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_minSize_error'),
    Array('libro', 'nuevo_archivopdfL', 100, 360, 'EDIT', 'file_name_min_size', Array('adb', Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_minSize_error'),

    //Test 108 y 109; Tamaño maximo de nombre
    //ADD
    Array('libro', 'nuevo_archivopdfL', 101, 362, 'ADD', 'file_name_max_size', Array('bacon'.repeat(25), Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_maxSize_error'),
    Array('libro', 'nuevo_archivopdfL', 101, 363, 'ADD', 'file_name_max_size', Array('jamon serrano'.repeat(25), Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_maxSize_error'),
    //EDIT
    Array('libro', 'nuevo_archivopdfL', 102, 365, 'EDIT', 'file_name_max_size', Array('cachopo'.repeat(25), Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_maxSize_error'),
    Array('libro', 'nuevo_archivopdfL', 102, 366, 'EDIT', 'file_name_max_size', Array('ensaladilla'.repeat(25), Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_maxSize_error'),

    //Test 110 y 111; Formato de nombre
    //ADD
    Array('libro', 'nuevo_archivopdfL', 103, 368, 'ADD', 'file_name_format', Array('PruebaNúmeroUno', Array('application/pdf'), 20000), "libro_archivopdfL_name_format_error"),
    Array('libro', 'nuevo_archivopdfL', 103, 369, 'ADD', 'file_name_format', Array('PruebaNumero1', Array('application/pdf'), 20000), "libro_archivopdfL_name_format_error"),
    Array('libro', 'nuevo_archivopdfL', 103, 370, 'ADD', 'file_name_format', Array('Prueba numero uno', Array('application/pdf'), 20000), "libro_archivopdfL_name_format_error"),
    Array('libro', 'nuevo_archivopdfL', 103, 371, 'ADD', 'file_name_format', Array('PruebaÑumeroUno', Array('application/pdf'), 20000), "libro_archivopdfL_name_format_error"),
    //EDIT
    Array('libro', 'nuevo_archivopdfL', 104, 372, 'EDIT', 'file_name_format', Array('PruebaNúmeroDos', Array('application/pdf'), 20000), "libro_archivopdfL_name_format_error"),
    Array('libro', 'nuevo_archivopdfL', 104, 373, 'EDIT', 'file_name_format', Array('PruebaNumero2', Array('application/pdf'), 20000), "libro_archivopdfL_name_format_error"),
    Array('libro', 'nuevo_archivopdfL', 104, 374, 'EDIT', 'file_name_format', Array('Prueba numero dos', Array('application/pdf'), 20000), "libro_archivopdfL_name_format_error"),
    Array('libro', 'nuevo_archivopdfL', 104, 375, 'EDIT', 'file_name_format', Array('PruebaÑumeroDos', Array('application/pdf'), 20000), "libro_archivopdfL_name_format_error"),

    //Test 112 y 113; Fichero correcto
    //ADD
    Array('libro', 'nuevo_archivopdfL', 105, 376, 'ADD', 'file_ok', Array('HerejiaDeHorus', Array('application/pdf'), 20000), true),
    Array('libro', 'nuevo_archivopdfL', 105, 377, 'ADD', 'file_ok', Array('DiosesDelCaos', Array('application/pdf'), 20000), true),
    //EDIT
    Array('libro', 'nuevo_archivopdfL', 106, 379, 'EDIT', 'file_ok', Array('DeuxMachina', Array('application/pdf'), 20000), true),
    Array('libro', 'nuevo_archivopdfL', 106, 380, 'EDIT', 'file_ok', Array('KorpsDeLaMuerte', Array('application/pdf'), 20000), true),
 




);
