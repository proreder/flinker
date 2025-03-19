
       // Configuración de Firebase
       var config = {
        appId: "1:244533337010:android:297765d438bb5ae6e2e2ab",
        apiKey: "AIzaSyBj7pQy-V_rh2zJ_atjUvXimljShHUFf8M",
        authDomain: "flinker-8c0c9.web.app",
        databaseURL: "https://flinker-8c0c9-default-rtdb.firebaseio.com/",
        projectId: "flinker-8c0c9",
        storageBucket: "flinker-8c0c9.firebasestorage.app",
        messagingSenderId: "244533337010"
    };

    // Inicializar Firebase
    firebase.initializeApp(config);
    var database = firebase.database();

    // Referencia a la colección de usuarios
    var referencia = database.ref("usuarios");

    referencia.on('value', function(datos) {
        var usuarios = datos.val();

        // Limpiar el contenedor antes de agregar nuevos elementos
        $('#listado').empty();

        // Recorrer cada usuario y mostrar únicamente la imagen como botón
        $.each(usuarios, function(indice, valor) {
            var prevUsuario = '<div class="user-card" style="display:inline-block; margin:10px;">';

            // Si no hay imagen, se muestra una imagen predeter minada
            if (valor.imagen === 'NONE') {
                prevUsuario += '<button class="btn-usuario"  onclick="accionUsuario(\'' + indice + '\')">';
                prevUsuario += '<img src="sin_foto.png" alt="Sin Fotografía" style="width:50px; height:50px;"/>';
                prevUsuario += '</button>';
            } else {
                prevUsuario += '<button class="btn-usuario"  id = "activarMovimiento" onclick="accionUsuario(\'' + indice + '\')">';
                prevUsuario += '<img src="' + valor.imagen + '" alt="Usuario" style="width:50px; height:50px;"/>';
                prevUsuario += '</button>';
            }
            prevUsuario += '</div>';

            // Añadir el elemento al contenedor principal
            $('#listado').append(prevUsuario);
        });
    }, function(error) {
        console.log('Error de lectura: ' + error.code);
    });


// Función para manejar el clic en el botón (imagen) y abrir el chat
function accionUsuario(idUsuario) {
    // Redirige a chat.html pasando el id del usuario en la URL
    window.location.href = "chat.html?usuario=" + encodeURIComponent(idUsuario);
    $(document).ready(function(){   
        // Al hacer clic en el div, agregar una tarea predeterminada
        $('#addTask').on('click', function() {
            var taskText = '<div class="task">' ; 
            $('#listado').append('<div class="task">' + taskText + '</div>');
        });
    
    }
)};
$(document).ready(function(){
    let selectedElement = null;

    // Al hacer clic en un .preUsuario, abre el chat
    $('.listado').on('click', '.preUsuario', function(){
        selectedElement = $(this); // Guarda el usuario seleccionado
        $('.chat-swiper').show(); // Muestra el chat
        history.pushState(null, null, location.href); // Agrega un estado en el historial para detectar "atrás"
    });

    // Detecta si el usuario presiona "atrás" o cambia de pestaña
    $(window).on('popstate visibilitychange', function() {
        if (document.hidden || selectedElement) { 
            moverAEnviados();
        }
    });

    // Al cerrar el chat, mueve el usuario a "done"
    $('.close-chat').on('click', function(event) {
        event.preventDefault();
        $('.chat-swiper').hide();
        moverAEnviados();
    });

    function moverAEnviados() {
        if (selectedElement) {
            $('.done').append(selectedElement); // Mueve el usuario a .done
            selectedElement = null; // Resetea la selección
        }
    }
});



      