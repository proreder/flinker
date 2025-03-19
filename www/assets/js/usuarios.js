$(document).ready(function(){
    let selectedElement = null;

    // Al hacer clic en un .preUsuario, abre el chat
    $('.todo').on('click', '.preUsuario', function(){
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