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
    //Test 4 y 5; Nombre longitud mínima 15 
    //ADD
    Array("libro", "AutoresL", 4, 10, "ADD", "the", "AutoresL_size_minSize_error"),
    Array("libro", "AutoresL", 4, 11, "ADD", "one", "AutoresL_size_minSize_error"),
    Array("libro", "AutoresL", 4, 12, "ADD", "piece", "AutoresL_size_minSize_error"),
    //EDIT
    Array("libro", "AutoresL", 5, 13, "EDIT", "is", "AutoresL_size_minSize_error"),
    Array("libro", "AutoresL", 5, 14, "EDIT", "real", "AutoresL_size_minSize_error"),

    //Test 6-8; Nombre longitud máxima 100
    //ADD
    Array("libro", "AutoresL", 6, 15, "ADD", "the emphasis on that intro melody is TOP TIER because it fits so fucking well with the knight on horseback theme", "AutoresL_size_maxSize_error"),
    Array("libro", "AutoresL", 6, 16, "ADD", "zzz ".repeat(100), "AutoresL_size_maxSize_error"),
    //EDIT
    Array("libro", "AutoresL", 7, 17, "EDIT", "the emphasis on that intro melody is TOP TIER because it fits so fucking well with the knight on horseback theme", "AutoresL_size_maxSize_error"),
    Array("libro", "AutoresL", 7, 18, "EDIT", "zzz ".repeat(100), "AutoresL_size_maxSize_error"),
    //EDIT
    Array("libro", "AutoresL", 8, 19, "SEARCH", "the emphasis on that intro melody is TOP TIER because it fits so fucking well with the knight on horseback theme", "AutoresL_size_maxSize_error"),
    Array("libro", "AutoresL", 8, 20, "SEARCH", "zzz ".repeat(100), "AutoresL_size_maxSize_error"),

    //Test 9-11; Nombre sin digitos o acento o la letra "ñ"
    //ADD
    Array("libro", "AutoresL", 9, 21, "ADD", "Hemos venido a emborracharñ os", "AutoresL_format_error"),
    Array("libro", "AutoresL", 9, 22, "ADD", "Y el ñesultado nos da igual", "AutoresL_format_error"),
    Array("libro", "AutoresL", 9, 23, "ADD", "Juntos reíremos hasta el", "AutoresL_format_error"),
    Array("libro", "AutoresL", 9, 24, "ADD", "2 Amanecer eterno que nos aguarda", "AutoresL_format_error"),
    //EDIT
    Array("libro", "AutoresL", 10, 25, "EDIT", "Después de mucho tiempo aprendí", "AutoresL_format_error"),
    Array("libro", "AutoresL", 10, 26, "EDIT", "El colegio poco me enseñó", "AutoresL_format_error"),
    Array("libro", "AutoresL", 10, 27, "EDIT", "Y a empezar la casa por el tejado A poder dormir, cuando tú no estás a mi lado", "AutoresL_format_error"),
    Array("libro", "AutoresL", 10, 28, "EDIT", "Es la hora de del experimento 115", "AutoresL_format_error"),
    //SEARCH
    Array("libro", "AutoresL", 11, 29, "SEARCH", "Gritare un riño de son y paz", "AutoresL_format_error"),
    Array("libro", "AutoresL", 11, 30, "SEARCH", "Arriba chuta la victoria es tuya!!", "AutoresL_format_error"),
    Array("libro", "AutoresL", 11, 31, "SEARCH", "La caída del imperio es inevitable", "AutoresL_format_error"),
    Array("libro", "AutoresL", 11, 32, "SEARCH", "En una galicía muy muy lejana", "AutoresL_format_error"),

    //Test 12-14; Nombre correcto
    //ADD
    Array("libro", "AutoresL", 12, 33, "ADD", "Francia la caida del imperio", true),
    Array("libro", "AutoresL", 12, 34, "ADD", "Ferrol una experiencia inolvidable", true),
    Array("libro", "AutoresL", 12, 35, "ADD", "Ourense una ciudad unica", true),
    //EDIT
    Array("libro", "AutoresL", 13, 36, "EDIT", "Adoro Nier Replicant", true),
    Array("libro", "AutoresL", 13, 37, "EDIT", "Mas me gusta Nier Automata", true),
    Array("libro", "AutoresL", 13, 38, "EDIT", "Pero sin duda mejor SinOAlice", true),
    //SEARCH
    Array("libro", "AutoresL", 14, 39, "SEARCH", "Nunca elegi aCharizard", true),
    Array("libro", "AutoresL", 14, 40, "SEARCH", "Es un legendario con carinho Rayquazza", true),
    Array("libro", "AutoresL", 14, 41, "SEARCH", "Mi apodo es Mimikyu", true),

    //FechaPublicacionL
    //Test 15-17: Formato correcto
    //ADD
    Array("libro", "FechaPublicacionL", 15, 42, "ADD", "17/2023/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 15, 43, "ADD", "1754/20/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 15, 44, "ADD", "17-2023-6", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 15, 45, "ADD", "3453-2023/1", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 15, 46, "ADD", "17-2023/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 15, 47, "ADD", "17/2023-18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    //EDIT
    Array("libro", "FechaPublicacionL", 16, 48, "EDIT", "17/2023/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 16, 49, "EDIT", "1754/20/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 16, 50, "EDIT", "17-2023-6", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 16, 51, "EDIT", "3453-2023/1", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 16, 52, "EDIT", "17-2023/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 16, 53, "EDIT", "17/2023-18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    //SEARCH
    Array("libro", "FechaPublicacionL", 17, 54, "SEARCH", "17/2023/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 17, 55, "SEARCH", "1754/20/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 17, 56, "SEARCH", "17-2023-6", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 17, 57, "SEARCH", "3453-2023/1", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 17, 58, "SEARCH", "17-2023/18", "libro_FechaPublicacionL_inavlidDate_format_error"),
    Array("libro", "FechaPublicacionL", 17, 59, "SEARCH", "17/2023-18", "libro_FechaPublicacionL_inavlidDate_format_error"),

    //Test 18 y 19: Fecha no existente
    //ADD
    Array("libro", "FechaPublicacionL", 18, 60, "ADD", "23/14/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),
    Array("libro", "FechaPublicacionL", 18, 61, "ADD", "23/14/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),
    Array("libro", "FechaPublicacionL", 18, 62, "ADD", "34/11/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),
    Array("libro", "FechaPublicacionL", 18, 63, "ADD", "46/00/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),
    Array("libro", "FechaPublicacionL", 18, 64, "ADD", "00/11/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),
    Array("libro", "FechaPublicacionL", 18, 65, "ADD", "00/00/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),
    //EDIT
    Array("libro", "FechaPublicacionL", 19, 66, "EDIT", "23/14/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),
    Array("libro", "FechaPublicacionL", 19, 67, "EDIT", "23/14/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),
    Array("libro", "FechaPublicacionL", 19, 68, "EDIT", "34/11/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),
    Array("libro", "FechaPublicacionL", 19, 69, "EDIT", "46/00/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),
    Array("libro", "FechaPublicacionL", 19, 70, "EDIT", "00/11/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),
    Array("libro", "FechaPublicacionL", 19, 71, "EDIT", "00/00/2004", "libro_FechaPublicacionL_invalidDate_noDate_error"),

    //Test 20-22: Fecha valida
    //ADD
    Array("libro", "FechaPublicacionL", 20, 72, "ADD", "07/09/2004", true),
    Array("libro", "FechaPublicacionL", 20, 73, "ADD", "25/02/2004", true),
    Array("libro", "FechaPublicacionL", 20, 74, "ADD", "02/11/2023", true),
    //EDIT
    Array("libro", "FechaPublicacionL", 21, 75, "EDIT", "15/11/2023", true),
    Array("libro", "FechaPublicacionL", 21, 76, "EDIT", "11/09/2001", true),
    Array("libro", "FechaPublicacionL", 21, 77, "EDIT", "17/04/2013", true),
    //SEARCH
    Array("libro", "FechaPublicacionL", 22, 78, "SEARCH", "19/08/1999", true),
    Array("libro", "FechaPublicacionL", 22, 79, "SEARCH", "20/03/2002", true),
    Array("libro", "FechaPublicacionL", 22, 80, "SEARCH", "01/01/1973", true),


    //end_date_libro
    //Test 23-25: Formato correcto
    //ADD
    Array("libro", "end_date_libro", 23, 81, "ADD", "17/2023/18", "libro_endDate_inavlidDate_format_error"),
    Array("libro", "end_date_libro", 23, 82, "ADD", "1754/20/18", "libro_endDate_inavlidDate_format_error"),
    Array("libro", "end_date_libro", 23, 83, "ADD", "17-2023-6", "libro_endDate_inavlidDate_format_error"),
    Array("libro", "end_date_libro", 23, 84, "ADD", "3453-2023/1", "libro_endDate_inavlidDate_format_error"),
    Array("libro", "end_date_libro", 23, 85, "ADD", "17-2023/18", "libro_endDate_inavlidDate_format_error"),
    Array("libro", "end_date_libro", 23, 86, "ADD", "17/2023-18", "libro_endDate_inavlidDate_format_error"),
    //EDIT
    Array("libro", "end_date_libro", 24, 87, "EDIT", "17/2023/18", "libro_endDate_inavlidDate_format_error"),
    Array("libro", "end_date_libro", 24, 88, "EDIT", "1754/20/18", "libro_endDate_inavlidDate_format_error"),
    Array("libro", "end_date_libro", 24, 89, "EDIT", "17-2023-6", "libro_endDate_inavlidDate_format_error"),
    Array("libro", "end_date_libro", 24, 90, "EDIT", "3453-2023/1", "libro_endDate_inavlidDate_format_error"),
    Array("libro", "end_date_libro", 24, 91, "EDIT", "17-2023/18", "libro_endDate_inavlidDate_format_error"),
    Array("libro", "end_date_libro", 24, 92, "EDIT", "17/2023-18", "libro_endDate_inavlidDate_format_error"),
    //SEARCH
    Array("libro", "end_date_libro", 25, 93, "SEARCH", "17/2023/18", "libro_endDate_inavlidDate_format_error"),
    Array("libro", "end_date_libro", 25, 94, "SEARCH", "1754/20/18", "libro_endDate_inavlidDate_format_error"),
    Array("libro", "end_date_libro", 25, 95, "SEARCH", "17-2023-6", "libro_endDate_inavlidDate_format_error"),
    Array("libro", "end_date_libro", 25, 96, "SEARCH", "3453-2023/1", "libro_endDate_inavlidDate_format_error"),
    Array("libro", "end_date_libro", 25, 97, "SEARCH", "17-2023/18", "libro_endDate_inavlidDate_format_error"),
    Array("libro", "end_date_libro", 25, 98, "SEARCH", "17/2023-18", "libro_endDate_inavlidDate_format_error"),

    //Test 26 y 27: Fecha no existente
    //ADD
    Array("libro", "end_date_libro", 26, 60, "ADD", "23/14/2004", "libro_endDate_invalidDate_noDate_error"),
    Array("libro", "end_date_libro", 26, 61, "ADD", "23/14/2004", "libro_endDate_invalidDate_noDate_error"),
    Array("libro", "end_date_libro", 26, 62, "ADD", "34/11/2004", "libro_endDate_invalidDate_noDate_error"),
    Array("libro", "end_date_libro", 26, 63, "ADD", "46/00/2004", "libro_endDate_invalidDate_noDate_error"),
    Array("libro", "end_date_libro", 26, 64, "ADD", "00/11/2004", "libro_endDate_invalidDate_noDate_error"),
    Array("libro", "end_date_libro", 26, 65, "ADD", "00/00/2004", "libro_endDate_invalidDate_noDate_error"),
    //EDIT
    Array("libro", "end_date_libro", 27, 66, "EDIT", "23/14/2004", "libro_endDate_invalidDate_noDate_error"),
    Array("libro", "end_date_libro", 27, 67, "EDIT", "23/14/2004", "libro_endDate_invalidDate_noDate_error"),
    Array("libro", "end_date_libro", 27, 68, "EDIT", "34/11/2004", "libro_endDate_invalidDate_noDate_error"),
    Array("libro", "end_date_libro", 27, 69, "EDIT", "46/00/2004", "libro_endDate_invalidDate_noDate_error"),
    Array("libro", "end_date_libro", 27, 70, "EDIT", "00/11/2004", "libro_endDate_invalidDate_noDate_error"),
    Array("libro", "end_date_libro", 27, 71, "EDIT", "00/00/2004", "libro_endDate_invalidDate_noDate_error"),

    //Test 28-30: Fecha valida
    //ADD
    Array("libro", "FechaPublicacionL", 28, 111, "ADD", "07/09/2004", true),
    Array("libro", "FechaPublicacionL", 28, 112, "ADD", "25/02/2004", true),
    Array("libro", "FechaPublicacionL", 28, 113, "ADD", "02/11/2023", true),
    //EDIT
    Array("libro", "FechaPublicacionL", 29, 114, "EDIT", "15/11/2023", true),
    Array("libro", "FechaPublicacionL", 29, 115, "EDIT", "11/09/2001", true),
    Array("libro", "FechaPublicacionL", 29, 116, "EDIT", "17/04/2013", true),
    //SEARCH
    Array("libro", "FechaPublicacionL", 30, 117, "SEARCH", "19/08/1999", true),
    Array("libro", "FechaPublicacionL", 30, 118, "SEARCH", "20/03/2002", true),
    Array("libro", "FechaPublicacionL", 30, 119, "SEARCH", "01/01/1973", true),

    //TituloL:  			alfabéticos con acentos, ñ, espacios y signos de puntuación, min 6 max 60
    //Test 31 y 32; Responsable longitud mínima 6
    //ADD
    Array("TituloL", "TituloL", 31, 120, "ADD", "mija", "libro_TituloL_size_minSize_error"),
    Array("TituloL", "TituloL", 31, 121, "ADD", "pija", "libro_TituloL_size_minSize_error"),
    Array("TituloL", "TituloL", 31, 122, "ADD", "rija", "libro_TituloL_size_minSize_error"),
    //EDIT
    Array("TituloL", "TituloL", 32, 123, "EDIT", "mono", "libro_TituloL_size_minSize_error"),
    Array("TituloL", "TituloL", 32, 124, "EDIT", "mojo", "libro_TituloL_size_minSize_error"),
    Array("TituloL", "TituloL", 32, 125, "EDIT", "yoyo", "libro_TituloL_size_minSize_error"),

    //Test 33-35; Responsable longitud máxima 60
    //ADD
    Array("TituloL", "TituloL", 33, 126, "ADD", "En la tradicion oficial de Warhammer 40k el Omnissiah es considerado como el Dios de la Maquina la fuente divina detras de todo el conocimiento tecnologico y mecanico Los seguidores del Culto Mechanicus creen que el Omnissiah es responsable de la creacion de la tecnologia avanzada la preservacion del conocimiento y el mantenimiento del equilibrio entre la humanidad y sus maquinas", "libro_TituloL_size_maxSize_error"),
    Array("TituloL", "TituloL", 33, 126, "ADD", "El Emperador de la Humanidad es una figura divina y tragica cuyo sacrificio y liderazgo son fundamentales para la supervivencia de la humanidad en el universo de Warhammer 40000 Es el lider supremo del Imperio del Hombre el creador de los Astartes y un ser inmortal atrapado en un estado de agonia eterna guiando a la humanidad desde su trono en la Tierra mientras la galaxia se consume en el conflicto y la guerra", "libro_TituloL_size_maxSize_error"),
    Array("TituloL", "TituloL", 33, 126, "ADD", "Horus es uno de los personajes mas tragicos y significativos en el lore de Warhammer 40k Su historia refleja el conflicto central del universo de Warhammer 40k la lucha entre el orden y el caos la traicion y la lealtad La Herejia de Horus no solo fue la guerra mas grande en la historia del Imperio sino que tambien dejo cicatrices profundas en la humanidad marcando el comienzo de la era oscura del 41º milenio", "libro_TituloL_size_maxSize_error"),
    //EDIT
    Array("TituloL", "TituloL", 34, 127, "EDIT", "En la tradicion oficial de Warhammer 40k el Omnissiah es considerado como el Dios de la Maquina la fuente divina detras de todo el conocimiento tecnologico y mecanico Los seguidores del Culto Mechanicus creen que el Omnissiah es responsable de la creacion de la tecnologia avanzada la preservacion del conocimiento y el mantenimiento del equilibrio entre la humanidad y sus maquinas", "libro_TituloL_size_maxSize_error"),
    Array("TituloL", "TituloL", 34, 128, "EDIT", "El Emperador de la Humanidad es una figura divina y tragica cuyo sacrificio y liderazgo son fundamentales para la supervivencia de la humanidad en el universo de Warhammer 40000 Es el lider supremo del Imperio del Hombre el creador de los Astartes y un ser inmortal atrapado en un estado de agonia eterna guiando a la humanidad desde su trono en la Tierra mientras la galaxia se consume en el conflicto y la guerra", "libro_TituloL_size_maxSize_error"),
    Array("TituloL", "TituloL", 34, 129, "EDIT", "Horus es uno de los personajes mas tragicos y significativos en el lore de Warhammer 40k Su historia refleja el conflicto central del universo de Warhammer 40k la lucha entre el orden y el caos la traicion y la lealtad La Herejia de Horus no solo fue la guerra mas grande en la historia del Imperio sino que tambien dejo cicatrices profundas en la humanidad marcando el comienzo de la era oscura del 41º milenio", "libro_TituloL_size_maxSize_error"),
    //SEARCH
    Array("TituloL", "TituloL", 35, 130, "SEARCH", "En la tradicion oficial de Warhammer 40k el Omnissiah es considerado como el Dios de la Maquina la fuente divina detras de todo el conocimiento tecnologico y mecanico Los seguidores del Culto Mechanicus creen que el Omnissiah es responsable de la creacion de la tecnologia avanzada la preservacion del conocimiento y el mantenimiento del equilibrio entre la humanidad y sus maquinas", "libro_TituloL_size_maxSize_error"),
    Array("TituloL", "TituloL", 35, 131, "SEARCH", "El Emperador de la Humanidad es una figura divina y tragica cuyo sacrificio y liderazgo son fundamentales para la supervivencia de la humanidad en el universo de Warhammer 40000 Es el lider supremo del Imperio del Hombre el creador de los Astartes y un ser inmortal atrapado en un estado de agonia eterna guiando a la humanidad desde su trono en la Tierra mientras la galaxia se consume en el conflicto y la guerra", "libro_TituloL_size_maxSize_error"),
    Array("TituloL", "TituloL", 35, 132, "SEARCH", "Horus es uno de los personajes mas tragicos y significativos en el lore de Warhammer 40k Su historia refleja el conflicto central del universo de Warhammer 40k la lucha entre el orden y el caos la traicion y la lealtad La Herejia de Horus no solo fue la guerra mas grande en la historia del Imperio sino que tambien dejo cicatrices profundas en la humanidad marcando el comienzo de la era oscura del 41º milenio", "libro_TituloL_size_maxSize_error"),

    //Test 36-38; Responsable sin digitos
    //ADD
    Array("TituloL", "TituloL", 36, 133, "ADD", "Kuzu no honkai cap1, min 14:20", "libro_TituloL_format_error"),
    Array("TituloL", "TituloL", 36, 134, "ADD", "Silent Hill 2", "libro_TituloL_format_error"),
    Array("TituloL", "TituloL", 36, 135, "ADD", "Milenio 40", "libro_TituloL_format_error"),
    //EDIT
    Array("TituloL", "TituloL", 37, 136, "EDIT", "Helldivers 2", "libro_TituloL_format_error"),
    Array("TituloL", "TituloL", 37, 137, "EDIT", "Dark souls 4", "libro_TituloL_format_error"),
    Array("TituloL", "TituloL", 37, 138, "EDIT", "Dying light 3", "libro_TituloL_format_error"),
    //SEARCH
    Array("TituloL", "TituloL", 38, 139, "SEARCH", "33 Repiteme ese numerin 33", "libro_TituloL_format_error"),
    Array("TituloL", "TituloL", 38, 140, "SEARCH", "Call of duty black ops 2", "libro_TituloL_format_error"),
    Array("TituloL", "TituloL", 38, 141, "SEARCH", "To you in 2000 years", "libro_TituloL_format_error"),

    //Test 39-41; Responsable correcta
    //ADD
    Array("TituloL", "TituloL", 39, 142, "ADD", "Alabado sea el DIOS Emperador", true),
    Array("TituloL", "TituloL", 39, 143, "ADD", "Alabado sea el dios del sol", true),
    Array("TituloL", "TituloL", 39, 144, "ADD", "Alabada sea la herejia", true),
    //EDIT
    Array("TituloL", "TituloL", 40, 145, "EDIT", "Que se acabe ya por favor", true),
    Array("TituloL", "TituloL", 40, 146, "EDIT", "No quiero seguir sufriendo", true),
    Array("TituloL", "TituloL", 40, 147, "EDIT", "Solo quiero llorar", true),
    //SEARCH
    Array("TituloL", "TituloL", 41, 148, "SEARCH", "May chaos take the world", true),
    Array("TituloL", "TituloL", 41, 149, "SEARCH", "MAY CHAOS TAKE THE WORLD", true),
    Array("TituloL", "TituloL", 41, 150, "SEARCH", "MAY CHAOS TAKE THE WOOOORRRLLLDDDD", true),

    //ISBN:  			alfabéticos con acentos, ñ, espacios y signos de puntuación, min 6 max 100
    //Test 42 y 43; Organizacion longitud mínima 6
    //ADD
    Array("ISBN", "ISBN", 42, 151, "ADD", "mija", "libro_ISBN_size_minSize_error"),
    Array("ISBN", "ISBN", 42, 152, "ADD", "pija", "libro_ISBN_size_minSize_error"),
    Array("ISBN", "ISBN", 42, 153, "ADD", "rija", "libro_ISBN_size_minSize_error"),
    //EDIT
    Array("ISBN", "ISBN", 43, 154, "EDIT", "mono", "libro_ISBN_size_minSize_error"),
    Array("ISBN", "ISBN", 43, 155, "EDIT", "mojo", "libro_ISBN_size_minSize_error"),
    Array("ISBN", "ISBN", 43, 156, "EDIT", "yoyo", "libro_ISBN_size_minSize_error"),

    //Test 44-46; Organizacion longitud máxima 100
    //ADD
    Array("ISBN", "ISBN", 44, 157, "ADD", "En la tradicion oficial de Warhammer 40k el Omnissiah es considerado como el Dios de la Maquina la fuente divina detras de todo el conocimiento tecnologico y mecanico Los seguidores del Culto Mechanicus creen que el Omnissiah es responsable de la creacion de la tecnologia avanzada la preservacion del conocimiento y el mantenimiento del equilibrio entre la humanidad y sus maquinas", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 44, 158, "ADD", "El Emperador de la Humanidad es una figura divina y tragica cuyo sacrificio y liderazgo son fundamentales para la supervivencia de la humanidad en el universo de Warhammer 40000 Es el lider supremo del Imperio del Hombre el creador de los Astartes y un ser inmortal atrapado en un estado de agonia eterna guiando a la humanidad desde su trono en la Tierra mientras la galaxia se consume en el conflicto y la guerra", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 44, 159, "ADD", "Horus es uno de los personajes mas tragicos y significativos en el lore de Warhammer 40k Su historia refleja el conflicto central del universo de Warhammer 40k la lucha entre el orden y el caos la traicion y la lealtad La Herejia de Horus no solo fue la guerra mas grande en la historia del Imperio sino que tambien dejo cicatrices profundas en la humanidad marcando el comienzo de la era oscura del 41º milenio", "libro_ISBN_size_maxSize_error"),
    //EDIT
    Array("ISBN", "ISBN", 45, 160, "EDIT", "En la tradicion oficial de Warhammer 40k el Omnissiah es considerado como el Dios de la Maquina la fuente divina detras de todo el conocimiento tecnologico y mecanico Los seguidores del Culto Mechanicus creen que el Omnissiah es responsable de la creacion de la tecnologia avanzada la preservacion del conocimiento y el mantenimiento del equilibrio entre la humanidad y sus maquinas", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 45, 161, "EDIT", "El Emperador de la Humanidad es una figura divina y tragica cuyo sacrificio y liderazgo son fundamentales para la supervivencia de la humanidad en el universo de Warhammer 40000 Es el lider supremo del Imperio del Hombre el creador de los Astartes y un ser inmortal atrapado en un estado de agonia eterna guiando a la humanidad desde su trono en la Tierra mientras la galaxia se consume en el conflicto y la guerra", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 45, 162, "EDIT", "Horus es uno de los personajes mas tragicos y significativos en el lore de Warhammer 40k Su historia refleja el conflicto central del universo de Warhammer 40k la lucha entre el orden y el caos la traicion y la lealtad La Herejia de Horus no solo fue la guerra mas grande en la historia del Imperio sino que tambien dejo cicatrices profundas en la humanidad marcando el comienzo de la era oscura del 41º milenio", "libro_ISBN_size_maxSize_error"),
    //SEARCH
    Array("ISBN", "ISBN", 46, 163, "SEARCH", "En la tradicion oficial de Warhammer 40k el Omnissiah es considerado como el Dios de la Maquina la fuente divina detras de todo el conocimiento tecnologico y mecanico Los seguidores del Culto Mechanicus creen que el Omnissiah es responsable de la creacion de la tecnologia avanzada la preservacion del conocimiento y el mantenimiento del equilibrio entre la humanidad y sus maquinas", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 46, 164, "SEARCH", "El Emperador de la Humanidad es una figura divina y tragica cuyo sacrificio y liderazgo son fundamentales para la supervivencia de la humanidad en el universo de Warhammer 40000 Es el lider supremo del Imperio del Hombre el creador de los Astartes y un ser inmortal atrapado en un estado de agonia eterna guiando a la humanidad desde su trono en la Tierra mientras la galaxia se consume en el conflicto y la guerra", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 46, 165, "SEARCH", "Horus es uno de los personajes mas tragicos y significativos en el lore de Warhammer 40k Su historia refleja el conflicto central del universo de Warhammer 40k la lucha entre el orden y el caos la traicion y la lealtad La Herejia de Horus no solo fue la guerra mas grande en la historia del Imperio sino que tambien dejo cicatrices profundas en la humanidad marcando el comienzo de la era oscura del 41º milenio", "libro_ISBN_size_maxSize_error"),

    //Test 47-49; Organizacion sin digitos
    //ADD
    Array("ISBN", "ISBN", 47, 166, "ADD", "Kuzu no honkai cap1, min 14:20", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 47, 167, "ADD", "Silent Hill 2", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 47, 168, "ADD", "Milenio 40", "libro_ISBN_size_maxSize_error"),
    //EDIT
    Array("ISBN", "ISBN", 48, 169, "EDIT", "Helldivers 2", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 48, 170, "EDIT", "Dark souls 4", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 48, 171, "EDIT", "Dying light 3", "libro_ISBN_size_maxSize_error"),
    //SEARCH
    Array("ISBN", "ISBN", 49, 172, "SEARCH", "33 Repiteme ese numerin 33", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 49, 173, "SEARCH", "Call of duty black ops 2", "libro_ISBN_size_maxSize_error"),
    Array("ISBN", "ISBN", 49, 174, "SEARCH", "To you in 2000 years", "libro_ISBN_size_maxSize_error"),

    //Test 50-52; Organizacion correcta
    //ADD
    Array("ISBN", "ISBN", 50, 175, "ADD", "Alabado sea el DIOS Emperador", true),
    Array("ISBN", "ISBN", 50, 176, "ADD", "Alabado sea el dios del sol", true),
    Array("ISBN", "ISBN", 50, 177, "ADD", "Alabada sea la herejia", true),
    //EDIT
    Array("ISBN", "ISBN", 51, 178, "EDIT", "Que se acabe ya por favor", true),
    Array("ISBN", "ISBN", 51, 179, "EDIT", "No quiero seguir sufriendo", true),
    Array("ISBN", "ISBN", 51, 180, "EDIT", "Solo quiero llorar", true),
    //SEARCH
    Array("ISBN", "ISBN", 52, 181, "SEARCH", "May chaos take the world", true),
    Array("ISBN", "ISBN", 52, 182, "SEARCH", "MAY CHAOS TAKE THE WORLD", true),
    Array("ISBN", "ISBN", 52, 183, "SEARCH", "MAY CHAOS TAKE THE WOOOORRRLLLDDDD", true),

    //PagIniL:	alfabéticos y espacios sin acentos ni ñ, min 80 max 5000
    //Test 53 y 54; Descripción longitud mínima 80 
    //ADD
    Array("libro", "PagIniL", 53, 184, "ADD", "Lore", "libro_PagFinL_format_error"),
    Array("libro", "PagIniL", 53, 185, "ADD", "Warhammer", "libro_PagFinL_format_error"),
    Array("libro", "PagIniL", 53, 186, "ADD", "CuarentaK", "libro_PagFinL_format_error"),

    Array("libro", "PagIniL", 54, 187, "EDIT", "Hejeria", "libro_PagFinL_format_error"),
    Array("libro", "PagIniL", 54, 188, "EDIT", "Horus", "libro_PagFinL_format_error"),
    Array("libro", "PagIniL", 54, 189, "EDIT", "treintaK", "libro_PagFinL_format_error"),

    //Test 55-57; Descripción longitud máxima 5000
    //ADD
    Array("libro", "PagIniL", 55, 190, "ADD", "arriba chuta la victoria es tuya ".repeat(300), "libro_PagFinL_format_error"),
    Array("libro", "PagIniL", 55, 191, "ADD", "Im Malenia blade of Miquella".repeat(350), "libro_PagFinL_format_error"),
    Array("libro", "PagIniL", 55, 192, "ADD", "Gherman esta noche tambien se une a la caza".repeat(320), "libro_PagFinL_format_error"),
    //EDIT
    Array("libro", "PagIniL", 56, 193, "EDIT", "arriba chuta la victoria es tuya ".repeat(300), "libro_PagFinL_format_error"),
    Array("libro", "PagIniL", 56, 194, "EDIT", "Im Malenia blade of Miquella ".repeat(350), "libro_PagFinL_format_error"),
    Array("libro", "PagIniL", 56, 195, "EDIT", "Gherman esta noche tambien se une a la caza ".repeat(320), "libro_PagFinL_format_error"),
    //SEARCH
    Array("libro", "PagIniL", 57, 196, "SEARCH", "arriba chuta la victoria es tuya ".repeat(300), "libro_PagFinL_format_error"),
    Array("libro", "PagIniL", 57, 197, "SEARCH", "Im Malenia blade of Miquella".repeat(350), "libro_PagFinL_format_error"),
    Array("libro", "PagIniL", 57, 198, "SEARCH", "Gherman esta noche tambien se une a la caza".repeat(320), "libro_PagFinL_format_error"),
    //Test 58-60; CUALQUIER ASCII
    //ADD
    Array("libro", "PagIniL", 58, 199, "ADD", "115. Este analisis es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),
    Array("libro", "PagIniL", 58, 200, "ADD", "Este análisis es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),
    Array("libro", "PagIniL", 58, 201, "ADD", "El dueño de este analisis informa que es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),
    //EDIT
    Array("libro", "PagIniL", 59, 202, "EDIT", "115. Este analisis es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),
    Array("libro", "PagIniL", 59, 203, "EDIT", "Este análisis es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),
    Array("libro", "PagIniL", 59, 204, "EDIT", "El dueño de este analisis informa que es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),
    //SEARCH
    Array("libro", "PagIniL", 60, 205, "SEARCH", "115. Este analisis es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),
    Array("libro", "PagIniL", 60, 206, "SEARCH", "Este análisis es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),
    Array("libro", "PagIniL", 60, 207, "SEARCH", "El dueño de este analisis informa que es una prueba no regulamentada y puede tener diversos efectos secundarios de los que la ESEI no se hace responsable", true),

    //Test 61-63; Descripción correcta
    //ADD
    Array("libro", "PagIniL", 61, 208, "ADD", "Todo comienza en el planeta Isstvan III donde Horus y la legion traidora de los Hijos de Horus con la ayuda de las legiones ahora leales a el de los Hijos del Emperador la Guardia de la Muerte y los Devoradores de Mundos bajo el liderazgo de los primarcas Fulgrim Mortarion y Angron respectivamente y de la fuerza titanica del Mechanicum Oscuro se deshacen de todos aquellos marines espaciales que creen que no aceptaran la traicion de Horus", true),
    Array("libro", "PagIniL", 61, 209, "ADD", "La traicion de Horus ya es conocida por todos y ha llegado el momento de que sean puestos a prueba Cuando el Senor de la Guerra despliega abiertamente sus fuerzas llega a conocimiento de los Astartes leales que los Portadores de la Palabra han enviado una flota contra Ultramar el hogar de los Ultramarines A menos que logren interceptarla y destruirla es muy posible que los Ultramarines sufran un dano del que jamas sean capaces de recuperarse", true),
    Array("libro", "PagIniL", 61, 210, "ADD", "Messmer the Impaler es un Demigod Boss en Shadow of the Erdtree Lucha junto a la serpiente abismal de dos cabezas y usa hechizos de fuego para atacar al jugador así como una lanza de largo alcance Se revela que es hijo de la Reina Marika oculto y abandonado en la Tierra de las Sombras", true),
    //EDIT
    Array("libro", "PagIniL", 62, 211, "EDIT", "Todo comienza en el planeta Isstvan III donde Horus y la legion traidora de los Hijos de Horus con la ayuda de las legiones ahora leales a el de los Hijos del Emperador la Guardia de la Muerte y los Devoradores de Mundos bajo el liderazgo de los primarcas Fulgrim Mortarion y Angron respectivamente y de la fuerza titanica del Mechanicum Oscuro se deshacen de todos aquellos marines espaciales que creen que no aceptaran la traicion de Horus", true),
    Array("libro", "PagIniL", 62, 212, "EDIT", "La traicion de Horus ya es conocida por todos y ha llegado el momento de que sean puestos a prueba Cuando el Senor de la Guerra despliega abiertamente sus fuerzas llega a conocimiento de los Astartes leales que los Portadores de la Palabra han enviado una flota contra Ultramar el hogar de los Ultramarines A menos que logren interceptarla y destruirla es muy posible que los Ultramarines sufran un dano del que jamas sean capaces de recuperarse", true),
    Array("libro", "PagIniL", 62, 213, "EDIT", "Messmer the Impaler es un Demigod Boss en Shadow of the Erdtree Lucha junto a la serpiente abismal de dos cabezas y usa hechizos de fuego para atacar al jugador así como una lanza de largo alcance Se revela que es hijo de la Reina Marika oculto y abandonado en la Tierra de las Sombras", true),
    //SEARCH
    Array("libro", "PagIniL", 63, 214, "SEARCH", "Todo comienza en el planeta Isstvan III donde Horus y la legion traidora de los Hijos de Horus con la ayuda de las legiones ahora leales a el de los Hijos del Emperador la Guardia de la Muerte y los Devoradores de Mundos bajo el liderazgo de los primarcas Fulgrim Mortarion y Angron respectivamente y de la fuerza titanica del Mechanicum Oscuro se deshacen de todos aquellos marines espaciales que creen que no aceptaran la traicion de Horus", true),
    Array("libro", "PagIniL", 63, 215, "SEARCH", "La traicion de Horus ya es conocida por todos y ha llegado el momento de que sean puestos a prueba Cuando el Senor de la Guerra despliega abiertamente sus fuerzas llega a conocimiento de los Astartes leales que los Portadores de la Palabra han enviado una flota contra Ultramar el hogar de los Ultramarines A menos que logren interceptarla y destruirla es muy posible que los Ultramarines sufran un dano del que jamas sean capaces de recuperarse", true),
    Array("libro", "PagIniL", 63, 216, "SEARCH", "Messmer the Impaler es un Demigod Boss en Shadow of the Erdtree Lucha junto a la serpiente abismal de dos cabezas y usa hechizos de fuego para atacar al jugador así como una lanza de largo alcance Se revela que es hijo de la Reina Marika oculto y abandonado en la Tierra de las Sombras", true),

    //VolumenL
    //Test 64 y 65; Código longitud mínima 6
    //ADD
    Array("libro", "VolumenL", 64, 217, "ADD", "P_Uni", "libro_VolumenL_size_minSize_error"),
    Array("libro", "VolumenL", 64, 218, "ADD", "ASHE", "libro_VolumenL_size_minSize_error"),
    Array("libro", "VolumenL", 64, 219, "ADD", "KYS", "libro_VolumenL_size_minSize_error"),
    Array("libro", "VolumenL", 64, 220, "ADD", "CSGO", "libro_VolumenL_size_minSize_error"),
    //EDIT
    Array("libro", "VolumenL", 65, 221, "EDIT", "P_Uni", "libro_VolumenL_size_minSize_error"),
    Array("libro", "VolumenL", 65, 222, "EDIT", "ASHE", "libro_VolumenL_size_minSize_error"),
    Array("libro", "VolumenL", 65, 223, "EDIT", "KYS", "libro_VolumenL_size_minSize_error"),
    Array("libro", "VolumenL", 65, 224, "EDIT", "CSGO", "libro_VolumenL_size_minSize_error"),

    //Test 66-68; Código longitud máxima 50
    //ADD
    Array("libro", "VolumenL", 66, 225, "ADD", "Those stripped of the Grace of Gold shall all meet death In the embrace of Messmers flame", "libro_VolumenL_size_maxSize_error"),
    Array("libro", "VolumenL", 66, 226, "ADD", "Curse you, Bayle I hereby vow You will rue this day Behold, a true drake warrior And I Igon Your fears made flesh Solid of scale you might be foul dragon", "libro_VolumenL_size_maxSize_error"),
    Array("libro", "VolumenL", 66, 227, "ADD", "But I will riddle with holes your rotten hide With a hail of harpoons With every last drop of my being", "libro_VolumenL_size_maxSize_error"),
    //EDIT
    Array("libro", "VolumenL", 67, 228, "EDIT", "Those stripped of the Grace of Gold shall all meet death In the embrace of Messmers flame", "libro_VolumenL_size_maxSize_error"),
    Array("libro", "VolumenL", 67, 229, "EDIT", "Curse you, Bayle I hereby vow You will rue this day Behold, a true drake warrior And I Igon Your fears made flesh Solid of scale you might be foul dragon", "libro_VolumenL_size_maxSize_error"),
    Array("libro", "VolumenL", 67, 230, "EDIT", "But I will riddle with holes your rotten hide With a hail of harpoons With every last drop of my being", "libro_VolumenL_size_maxSize_error"),

    //SEARCH
    Array("libro", "VolumenL", 68, 231, "SEARCH", "Those stripped of the Grace of Gold shall all meet death In the embrace of Messmers flame", "libro_VolumenL_size_maxSize_error"),
    Array("libro", "VolumenL", 68, 232, "SEARCH", "Curse you, Bayle I hereby vow You will rue this day Behold, a true drake warrior And I Igon Your fears made flesh Solid of scale you might be foul dragon", "libro_VolumenL_size_maxSize_error"),
    Array("libro", "VolumenL", 68, 233, "SEARCH", "But I will riddle with holes your rotten hide With a hail of harpoons With every last drop of my being", "libro_VolumenL_size_maxSize_error"),


    //Test 69-71; Código sin digitos ni acentos
    //ADD
    Array("libro", "VolumenL", 69, 234, "ADD", "La caída sera grandiosa", "libro_VolumenL_format_error"),
    Array("libro", "VolumenL", 69, 235, "ADD", "ASHE CÁNT FALL", "libro_VolumenL_format_error"),
    Array("libro", "VolumenL", 69, 236, "ADD", "libro 69", "libro_VolumenL_format_error"),
    Array("libro", "VolumenL", 69, 237, "ADD", "3InRow", "libro_VolumenL_format_error"),
    //EDIT
    Array("libro", "VolumenL", 70, 238, "EDIT", "La caída sera grandiosa", "libro_VolumenL_format_error"),
    Array("libro", "VolumenL", 70, 239, "EDIT", "ASHE CÁNT FALL", "libro_VolumenL_format_error"),
    Array("libro", "VolumenL", 70, 240, "EDIT", "libro 69", "libro_VolumenL_format_error"),
    Array("libro", "VolumenL", 70, 241, "EDIT", "3InRow", "libro_VolumenL_format_error"),
    //SEARCH
    Array("libro", "VolumenL", 71, 242, "SEARCH", "La caída sera grandiosa", "libro_VolumenL_format_error"),
    Array("libro", "VolumenL", 71, 243, "SEARCH", "ASHE CÁNT FALL", "libro_VolumenL_format_error"),
    Array("libro", "VolumenL", 71, 244, "SEARCH", "libro 69", "libro_VolumenL_format_error"),
    Array("libro", "VolumenL", 71, 245, "SEARCH", "3InRow", "libro_VolumenL_format_error"),

    //Test 72-74; Código correcto
    //ADD
    Array("libro", "VolumenL", 72, 246, "ADD", "libroUnitalRing", true),
    Array("libro", "VolumenL", 72, 247, "ADD", "ASHESREMAIN", true),
    Array("libro", "VolumenL", 72, 248, "ADD", "Stigmatalibro", true),
    Array("libro", "VolumenL", 72, 249, "ADD", "WorldOfWarcraft", true),
    //EDIT
    Array("libro", "VolumenL", 73, 250, "EDIT", "libroUnitalRing", true),
    Array("libro", "VolumenL", 73, 251, "EDIT", "ASHESREMAIN", true),
    Array("libro", "VolumenL", 73, 252, "EDIT", "Stigmatalibro", true),
    Array("libro", "VolumenL", 73, 253, "EDIT", "WorldOfWarcraft", true),
    //SEARCH
    Array("libro", "VolumenL", 74, 254, "SEARCH", "libroUnitalRing", true),
    Array("libro", "VolumenL", 74, 255, "SEARCH", "ASHESREMAIN", true),
    Array("libro", "VolumenL", 74, 256, "SEARCH", "Stigmatalibro", true),
    Array("libro", "VolumenL", 74, 257, "SEARCH", "WorldOfWarcraft", true),

    //EditorialL
    //Test 75 y 76; Acronimo longitud mínima 6
    //ADD
    Array("libro", "EditorialL", 75, 258, "ADD", "PKL", "libro_EditorialL_size_minSize_error"),
    Array("libro", "EditorialL", 75, 259, "ADD", "ASH", "libro_EditorialL_size_minSize_error"),
    Array("libro", "EditorialL", 75, 260, "ADD", "KYS", "libro_EditorialL_size_minSize_error"),
    Array("libro", "EditorialL", 75, 261, "ADD", "CS", "libro_EditorialL_size_minSize_error"),
    //EDIT
    Array("libro", "EditorialL", 76, 262, "EDIT", "PKL", "libro_EditorialL_size_minSize_error"),
    Array("libro", "EditorialL", 76, 263, "EDIT", "ASH", "libro_EditorialL_size_minSize_error"),
    Array("libro", "EditorialL", 76, 264, "EDIT", "KYS", "libro_EditorialL_size_minSize_error"),
    Array("libro", "EditorialL", 76, 265, "EDIT", "CS", "libro_EditorialL_size_minSize_error"),

    //Test 77-79; Acronimo longitud máxima 15
    //ADD
    Array("libro", "EditorialL", 77, 266, "ADD", "Those stripped of the Grace of Gold shall all meet death In the embrace of Messmers flame", "libro_EditorialL_size_maxSize_error"),
    Array("libro", "EditorialL", 77, 267, "ADD", "Curse you, Bayle I hereby vow You will rue this day Behold, a true drake warrior And I Igon Your fears made flesh Solid of scale you might be foul dragon", "libro_EditorialL_size_maxSize_error"),
    Array("libro", "EditorialL", 77, 268, "ADD", "But I will riddle with holes your rotten hide With a hail of harpoons With every last drop of my being", "libro_EditorialL_size_maxSize_error"),

    //EDIT
    Array("libro", "EditorialL", 78, 269, "EDIT", "Those stripped of the Grace of Gold shall all meet death In the embrace of Messmers flame", "libro_EditorialL_size_maxSize_error"),
    Array("libro", "EditorialL", 78, 270, "EDIT", "Curse you, Bayle I hereby vow You will rue this day Behold, a true drake warrior And I Igon Your fears made flesh Solid of scale you might be foul dragon", "libro_EditorialL_size_maxSize_error"),
    Array("libro", "EditorialL", 78, 271, "EDIT", "But I will riddle with holes your rotten hide With a hail of harpoons With every last drop of my being", "libro_EditorialL_size_maxSize_error"),

    //SEARCH
    Array("libro", "EditorialL", 79, 272, "SEARCH", "Those stripped of the Grace of Gold shall all meet death In the embrace of Messmers flame", "libro_EditorialL_size_maxSize_error"),
    Array("libro", "EditorialL", 79, 273, "SEARCH", "Curse you, Bayle I hereby vow You will rue this day Behold, a true drake warrior And I Igon Your fears made flesh Solid of scale you might be foul dragon", "libro_EditorialL_size_maxSize_error"),
    Array("libro", "EditorialL", 79, 274, "SEARCH", "But I will riddle with holes your rotten hide With a hail of harpoons With every last drop of my being", "libro_EditorialL_size_maxSize_error"),


    //Test 80-82; acronimo sin digitos ni acentos
    //ADD
    Array("libro", "EditorialL", 80, 275, "ADD", "AcciónTG", "libro_EditorialL_format_error"),
    Array("libro", "EditorialL", 80, 276, "ADD", "TIME-60s", "libro_EditorialL_format_error"),
    Array("libro", "EditorialL", 80, 277, "ADD", "PRKLPÓ", "libro_EditorialL_format_error"),
    Array("libro", "EditorialL", 80, 278, "ADD", "CSKSYO5", "libro_EditorialL_format_error"),
    //EDIT
    Array("libro", "EditorialL", 81, 279, "EDIT", "AcciónTG", "libro_EditorialL_format_error"),
    Array("libro", "EditorialL", 81, 280, "EDIT", "TIME-60s", "libro_EditorialL_format_error"),
    Array("libro", "EditorialL", 81, 281, "EDIT", "PRKLPÓ", "libro_EditorialL_format_error"),
    Array("libro", "EditorialL", 81, 282, "EDIT", "CSKSYO5", "libro_EditorialL_format_error"),
    //SEARCH
    Array("libro", "EditorialL", 82, 283, "SEARCH", "AcciónTG", "libro_EditorialL_format_error"),
    Array("libro", "EditorialL", 82, 284, "SEARCH", "TIME-60s", "libro_EditorialL_format_error"),
    Array("libro", "EditorialL", 82, 285, "SEARCH", "PRKLPÓ", "libro_EditorialL_format_error"),
    Array("libro", "EditorialL", 82, 286, "SEARCH", "CSKSYO5", "libro_EditorialL_format_error"),

    //Test 83-85; acronimo correcto
    //ADD
    Array("libro", "EditorialL", 83, 287, "ADD", "PROGII", true),
    Array("libro", "EditorialL", 83, 288, "ADD", "PROLOG", true),
    Array("libro", "EditorialL", 83, 289, "ADD", "MARIADB", true),
    Array("libro", "EditorialL", 83, 290, "ADD", "CSPTODEP", true),
    //EDIT
    Array("libro", "EditorialL", 84, 291, "EDIT", "PROGII", true),
    Array("libro", "EditorialL", 84, 292, "EDIT", "PROLOG", true),
    Array("libro", "EditorialL", 84, 293, "EDIT", "MARIADB", true),
    Array("libro", "EditorialL", 84, 294, "EDIT", "CSPTODEP", true),
    //SEARCH
    Array("libro", "EditorialL", 85, 295, "SEARCH", "PROGII", true),
    Array("libro", "EditorialL", 85, 296, "SEARCH", "PROLOG", true),
    Array("libro", "EditorialL", 85, 297, "SEARCH", "MARIADB", true),
    Array("libro", "EditorialL", 85, 298, "SEARCH", "CSPTODEP", true),

    //id_sampling_methodology
    //Test 86 y 87; ID longitud mínima 1 
    //ADD
    Array("libro", "id_sampling_methodology", 86, 299, "ADD", "", "libro_sampleID_size_minSize_error"),
    Array("libro", "id_sampling_methodology", 86, 300, "ADD", "", "libro_sampleID_size_minSize_error"),
    //EDIT
    Array("libro", "id_sampling_methodology", 87, 301, "EDIT", "", "libro_sampleID_size_minSize_error"),
    Array("libro", "id_sampling_methodology", 87, 302, "EDIT", "", "libro_sampleID_size_minSize_error"),

    //Test 88-90; ID longitud máxima 11 
    //ADD
    Array("libro", "id_sampling_methodology", 88, 303, "ADD", "73849184915u0125981", "libro_sampleID_size_maxSize_error"),
    Array("libro", "id_sampling_methodology", 88, 304, "ADD", "654754654754754754734", "libro_sampleID_size_maxSize_error"),
    Array("libro", "id_sampling_methodology", 88, 305, "ADD", "5358923592352375473777", "libro_sampleID_size_maxSize_error"),
    //EDIT
    Array("libro", "id_sampling_methodology", 89, 306, "EDIT", "634634646437347347774", "libro_sampleID_size_maxSize_error"),
    Array("libro", "id_sampling_methodology", 89, 307, "EDIT", "747377437437347347743", "libro_sampleID_size_maxSize_error"),
    Array("libro", "id_sampling_methodology", 89, 308, "EDIT", "921341275192758357915", "libro_sampleID_size_maxSize_error"),
    //SEARCH
    Array("libro", "id_sampling_methodology", 90, 309, "SEARCH", "0808564653432678485", "libro_sampleID_size_maxSize_error"),
    Array("libro", "id_sampling_methodology", 90, 310, "SEARCH", "5786598079654656548", "libro_sampleID_size_maxSize_error"),
    Array("libro", "id_sampling_methodology", 90, 311, "SEARCH", "3254364376375485486", "libro_sampleID_size_maxSize_error"),


    //Test 91-93; ID solo con digitos
    //ADD
    Array("libro", "id_sampling_methodology", 91, 312, "ADD", "25235fas", "libro_sampleID_format_error"),
    Array("libro", "id_sampling_methodology", 91, 313, "ADD", "235_ff", "libro_sampleID_format_error"),
    Array("libro", "id_sampling_methodology", 91, 314, "ADD", "214948L", "libro_sampleID_format_error"),
    //EDIT
    Array("libro", "id_sampling_methodology", 92, 315, "EDIT", "4325a", "libro_sampleID_format_error"),
    Array("libro", "id_sampling_methodology", 92, 316, "EDIT", "43626__l", "libro_sampleID_format_error"),
    Array("libro", "id_sampling_methodology", 92, 317, "EDIT", "LO_98L", "libro_sampleID_format_error"),
    //SEARCH
    Array("libro", "id_sampling_methodology", 93, 318, "SEARCH", "gdsgs_", "libro_sampleID_format_error"),
    Array("libro", "id_sampling_methodology", 93, 319, "SEARCH", "daddy", "libro_sampleID_format_error"),
    Array("libro", "id_sampling_methodology", 93, 320, "SEARCH", "Harder", "libro_sampleID_format_error"),

    //Test 94-96; ID correcta
    //ADD
    Array("libro", "id_sampling_methodology", 94, 321, "ADD", "69", true),
    Array("libro", "id_sampling_methodology", 94, 322, "ADD", "56", true),
    Array("libro", "id_sampling_methodology", 94, 323, "ADD", "56", true),
    //EDIT
    Array("libro", "id_sampling_methodology", 95, 324, "EDIT", "301", true),
    Array("libro", "id_sampling_methodology", 95, 325, "EDIT", "115", true),
    Array("libro", "id_sampling_methodology", 95, 326, "EDIT", "115", true),
    //SEARCH
    Array("libro", "id_sampling_methodology", 96, 327, "SEARCH", "666", true),
    Array("libro", "id_sampling_methodology", 96, 328, "SEARCH", "777", true),
    Array("libro", "id_sampling_methodology", 96, 329, "SEARCH", "777", true),

    //archivopdfLn: 			alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2.000.000 bytes
    //Test 97: Tamaño de fichero correcto
    //Solo searchs
    //SEARCH
    Array('libro', 'archivopdfL', 97, 330, 'SEARCH', "a".repeat(101), 'libro_file_name_maxSize_error'),
    Array('libro', 'archivopdfL', 97, 331, 'SEARCH', "a".repeat(102), 'libro_file_name_maxSize_error'),
    Array('libro', 'archivopdfL', 97, 332, 'SEARCH', "a".repeat(103), 'libro_file_name_maxSize_error'),
    
    //Test 98: Formato de fichero correcto
    //SEARCH
     Array('libro', 'archivopdfL', 98, 333, 'SEARCH', 'Fichero3', "libro_archivopdfL_name_format_error"),
     Array('libro', 'archivopdfL', 98, 334, 'SEARCH', 'AnalísColedural', "libro_archivopdfL_name_format_error"),
     Array('libro', 'archivopdfL', 98, 335, 'SEARCH', 'Preparacion de fichero', "libro_archivopdfL_name_format_error"),
     Array('libro', 'archivopdfL', 98, 336, 'SEARCH', 'Reconocimiento meéico', "libro_archivopdfL_name_format_error"),
 
    //Test 99: Fichero correcto
    //SEARCH
    Array('libro', 'archivopdfL', 99, 337, 'SEARCH', 'FicheroUno', true),
    Array('libro', 'archivopdfL', 99, 338, 'SEARCH', 'HerejiaHorus', true),
    Array('libro', 'archivopdfL', 99, 339, 'SEARCH', 'PeterPan', true),
);
 
/* ####################################################################################################################################################### 
                                                            Pruebas File
   ####################################################################################################################################################### */

let pruebas_archivopdfL = Array(
    //archivopdfL: 			alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2.000.000 bytes
    //Test 100 y 101; Fichero existe
    //ADD
    Array('libro', 'nuevo_archivopdfL', 100, 340, 'ADD', 'Existe', Array(), 'libro_archivopdfL_null'),
    Array('libro', 'nuevo_archivopdfL', 100, 341, 'ADD', 'Existe', Array(), 'libro_archivopdfL_null'),
    //EDIT
    Array('libro', 'nuevo_archivopdfL', 101, 342, 'EDIT', 'No existe', Array(), true),
    Array('libro', 'nuevo_archivopdfL', 101, 343, 'EDIT', 'No existe', Array(), true),

    //Test 102 y 103; Tamaño < 2000000
    //ADD
    Array('libro', 'nuevo_archivopdfL', 102, 344, 'ADD', 'file_max_size', Array('Pruebas', Array('application/pdf'), 3042000), 'libro_file_size_maxSize_error'),
    Array('libro', 'nuevo_archivopdfL', 102, 345, 'ADD', 'file_max_size', Array('Pruebas', Array('application/pdf'), 85607658), 'libro_file_size_maxSize_error'),
    Array('libro', 'nuevo_archivopdfL', 102, 346, 'ADD', 'file_max_size', Array('Pruebas', Array('application/pdf'), 36135663), 'libro_file_size_maxSize_error'),
    //EDIT
    Array('libro', 'nuevo_archivopdfL', 103, 347, 'EDIT', 'file_max_size', Array('Pruebas', Array('application/pdf'), 30443284), 'libro_file_size_maxSize_error'),
    Array('libro', 'nuevo_archivopdfL', 103, 348, 'EDIT', 'file_max_size', Array('Pruebas', Array('application/pdf'), 79870700), 'libro_file_size_maxSize_error'),
    Array('libro', 'nuevo_archivopdfL', 103, 349, 'EDIT', 'file_max_size', Array('Pruebas', Array('application/pdf'), 978654640), 'libro_file_size_maxSize_error'),

    //Test 104 y 105; Tipo de fichero
    //ADD
    Array('libro', 'nuevo_archivopdfL', 104, 350, 'ADD', 'type_file', Array('Pruebas', Array('application/jpg'), 20000), 'libro_file_type_error'),
    Array('libro', 'nuevo_archivopdfL', 104, 351, 'ADD', 'type_file', Array('Pruebas', Array('application/xml'), 20000), 'libro_file_type_error'),
    Array('libro', 'nuevo_archivopdfL', 104, 352, 'ADD', 'type_file', Array('Pruebas', Array('application/c'), 20000), 'libro_file_type_error'),

    //EDIT
    Array('libro', 'nuevo_archivopdfL', 105, 353, 'EDIT', 'type_file', Array('Pruebas', Array('application/raw'), 20000), 'libro_file_type_error'),
    Array('libro', 'nuevo_archivopdfL', 105, 354, 'EDIT', 'type_file', Array('Pruebas', Array('application/py'), 20000), 'libro_file_type_error'),
    Array('libro', 'nuevo_archivopdfL', 105, 355, 'EDIT', 'type_file', Array('Pruebas', Array('application/js'), 20000), 'libro_file_type_error'),

    //Test 106 y 107; Tamaño minimo de nombre
    //ADD
    Array('libro', 'nuevo_archivopdfL', 106, 356, 'ADD', 'file_name_min_size', Array('defi', Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_minSize_error'),
    Array('libro', 'nuevo_archivopdfL', 106, 357, 'ADD', 'file_name_min_size', Array('lol', Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_minSize_error'),
    Array('libro', 'nuevo_archivopdfL', 106, 358, 'ADD', 'file_name_min_size', Array('lds', Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_minSize_error'),
    //EDIT
    Array('libro', 'nuevo_archivopdfL', 107, 359, 'EDIT', 'file_name_min_size', Array('mtc', Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_minSize_error'),
    Array('libro', 'nuevo_archivopdfL', 107, 360, 'EDIT', 'file_name_min_size', Array('adb', Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_minSize_error'),
    Array('libro', 'nuevo_archivopdfL', 107, 361, 'EDIT', 'file_name_min_size', Array('kys', Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_minSize_error'),

    //Test 108 y 109; Tamaño maximo de nombre
    //ADD
    Array('libro', 'nuevo_archivopdfL', 108, 362, 'ADD', 'file_name_max_size', Array('bacon'.repeat(25), Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_maxSize_error'),
    Array('libro', 'nuevo_archivopdfL', 108, 363, 'ADD', 'file_name_max_size', Array('jamon serrano'.repeat(25), Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_maxSize_error'),
    Array('libro', 'nuevo_archivopdfL', 108, 364, 'ADD', 'file_name_max_size', Array('chuleta'.repeat(25), Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_maxSize_error'),
    //EDIT
    Array('libro', 'nuevo_archivopdfL', 109, 365, 'EDIT', 'file_name_max_size', Array('cachopo'.repeat(25), Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_maxSize_error'),
    Array('libro', 'nuevo_archivopdfL', 109, 366, 'EDIT', 'file_name_max_size', Array('ensaladilla'.repeat(25), Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_maxSize_error'),
    Array('libro', 'nuevo_archivopdfL', 109, 367, 'EDIT', 'file_name_max_size', Array('pulpo'.repeat(25), Array('application/pdf'), 20000), 'libro_archivopdfL_name_size_maxSize_error'),

    //Test 110 y 111; Formato de nombre
    //ADD
    Array('libro', 'nuevo_archivopdfL', 110, 368, 'ADD', 'file_name_format', Array('PruebaNúmeroUno', Array('application/pdf'), 20000), "libro_archivopdfL_name_format_error"),
    Array('libro', 'nuevo_archivopdfL', 110, 369, 'ADD', 'file_name_format', Array('PruebaNumero1', Array('application/pdf'), 20000), "libro_archivopdfL_name_format_error"),
    Array('libro', 'nuevo_archivopdfL', 110, 370, 'ADD', 'file_name_format', Array('Prueba numero uno', Array('application/pdf'), 20000), "libro_archivopdfL_name_format_error"),
    Array('libro', 'nuevo_archivopdfL', 110, 371, 'ADD', 'file_name_format', Array('PruebaÑumeroUno', Array('application/pdf'), 20000), "libro_archivopdfL_name_format_error"),
    //EDIT
    Array('libro', 'nuevo_archivopdfL', 111, 372, 'EDIT', 'file_name_format', Array('PruebaNúmeroDos', Array('application/pdf'), 20000), "libro_archivopdfL_name_format_error"),
    Array('libro', 'nuevo_archivopdfL', 111, 373, 'EDIT', 'file_name_format', Array('PruebaNumero2', Array('application/pdf'), 20000), "libro_archivopdfL_name_format_error"),
    Array('libro', 'nuevo_archivopdfL', 111, 374, 'EDIT', 'file_name_format', Array('Prueba numero dos', Array('application/pdf'), 20000), "libro_archivopdfL_name_format_error"),
    Array('libro', 'nuevo_archivopdfL', 111, 375, 'EDIT', 'file_name_format', Array('PruebaÑumeroDos', Array('application/pdf'), 20000), "libro_archivopdfL_name_format_error"),

    //Test 112 y 113; Fichero correcto
    //ADD
    Array('libro', 'nuevo_archivopdfL', 112, 376, 'ADD', 'file_ok', Array('HerejiaDeHorus', Array('application/pdf'), 20000), true),
    Array('libro', 'nuevo_archivopdfL', 112, 377, 'ADD', 'file_ok', Array('DiosesDelCaos', Array('application/pdf'), 20000), true),
    Array('libro', 'nuevo_archivopdfL', 112, 378, 'ADD', 'file_ok', Array('OrigenesDelEmperador', Array('application/pdf'), 20000), true),
    //EDIT
    Array('libro', 'nuevo_archivopdfL', 113, 379, 'EDIT', 'file_ok', Array('DeuxMachina', Array('application/pdf'), 20000), true),
    Array('libro', 'nuevo_archivopdfL', 113, 380, 'EDIT', 'file_ok', Array('KorpsDeLaMuerte', Array('application/pdf'), 20000), true),
    Array('libro', 'nuevo_archivopdfL', 113, 381, 'EDIT', 'file_ok', Array('SisterOfBattle', Array('application/pdf'), 20000), true),
 




);
