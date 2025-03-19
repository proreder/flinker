jQuery(document).ready(function() {
    'use strict';
    
    // Inicializa Firebase (Asegúrate de configurar Firebase antes de usarlo)
    // Configuración de Firebase (reemplaza con tus valores o variables de entorno)
    var  config = {
        appId: "1:244533337010:android:297765d438bb5ae6e2e2ab",
        apiKey: "AIzaSyBj7pQy-V_rh2J_atjUvXimljShHUFf8M",
        authDomain: "flinker-8c0c9.web.app",
        databaseURL: "https://flinker-8c0c9-default-rtdb.firebaseio.com/",
        projectId: "flinker-8c0c9",
        storageBucket: "flinker-8c0c9.firebasestorage.app",
        messagingSenderId: "244533337010"
        
      };
    
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
    
    const db = firebase.firestore();
    
    // Obtener usuarios desde Firebase
    function loadUsers() {
        db.collection("usuarios").get().then((querySnapshot) => {
            let usersHtml = "";
            querySnapshot.forEach((doc) => {
                let user = doc.data();
                usersHtml += `
                    <div class="swiper-slide">
                        <div class="user-card">
                            <img src="${user.imagen}" alt="${user.nombre}" class="user-img" />
                            <h3 class="user-name">${user.nombre}, ${user.edad}</h3>
                        </div>
                    </div>
                `;
            });
            jQuery('.get-started .swiper-wrapper').html(usersHtml);
            initSwiper();
        }).catch(error => console.log("Error obteniendo usuarios:", error));
    }
    
    // Inicializar Swiper
    function initSwiper() {
        if (jQuery('.get-started').length > 0) {
            new Swiper('.get-started', {
                speed: 1500,
                slidesPerView: "auto",
                spaceBetween: 0,
                autoplay: {
                    delay: 1500,
                },
                loop: false,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    }
    
    loadUsers(); // Cargar usuarios al inicio
});
