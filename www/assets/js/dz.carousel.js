import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
jQuery(document).ready(function() {
    'use strict';
    
    // Inicializar Supabase
   
    const supabaseUrl = "https://srcawgqnbyyzhbqpznpd.supabase.co"; // Reemplaza con tu URL de Supabase
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyY2F3Z3FuYnl5emhicXB6bnBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1NDEzODMsImV4cCI6MjA1OTExNzM4M30.DI8Ab7zicxcIo56rdrO6UE0T_zZ7TmHNFZe4a4Z7w-0"; 
    const BUCKET_NAME = "imagenes"; // Nombre del bucket en Supabase
    const supabase = createClient(supabaseUrl, supabaseKey);
    

    //verificamos conexión
    verificarConexion();
    //autenticamo usuario para acceder con la políticas globales
    autenticarUsuario();

    async function verificarConexion() {
        const { data, error } = await supabase.from("usuarios").select("*");
    
        if (error) {
            console.error("Error al conectar con Supabase:", error);
            return;
        } else {
            console.log("Conexión exitosa. Datos obtenidos:", data);
            // Aquí puedes cargar los usuarios o realizar otras acciones
            loadUsuarios();
        }
    }

    
//autiticar usuarios
async function autenticarUsuario() {
    try {
             // Autenticar al usuario (si no está autenticado)
             const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
                 email: "usuarios@admin.com",
                 password: "12345678",
             });
 
             if (authError) {
                 console.error("Error al autenticar al usuario:", authError);
                 alert("Error al autenticar al usuario.");
                 return;
             }
             if(authData){
                 console.log("usuario autenticado: ", authData.user);
                loadUsuarios();
             }
 
             //console.log("Usuario autenticado:", authData.user);
         }catch (error) {
            console.error("Error al listar los usuarios:", error);
            alert("Hubo un error al listar los usuarios.");
        }
    }
    
    

    //Obtenemos todos los usuarios de supebase
    async function loadUsuarios(){
       
            //obtenemos los registros de la tabla usuarios
            const { data: usuarios, error } = await supabase
            .from("usuarios")
            .select("nombre, edad, email, sexo, ciudad, image_url");

        if (error) {
            console.error("Error al obtener los usuarios:", error);
            alert("Error al obtener los usuarios.");
            return;
        }
            // Recorrer los usuarios y agregarlos a la tabla
            usuarios.forEach(usuario => {
                // Crear un nuevo div
                const nuevoDiv = document.createElement("div");

                // Asignar una clase al div
                nuevoDiv.className = "dzSwipe_card";
            
                // Agregar contenido al div
                    nuevoDiv.innerHTML = `
                        <div class="dz-media">
                            <img  src="${usuario.image_url}" width="150px" height="150px" alt="${usuario.nombre}">
                        </div>
                        <div class="dz-content">
                            <div class="left-content">
                                <span class="badge badge-primary mb-2">Acción</span>
                                <h4 class="title"><a href="profile-detail.html">${usuario.nombre} ,${usuario.edad}</a></h4>
                                <ul class="intrest">
                                    <li><span class="badge intrest">Deporte</span></li>
                                    <li><span class="badge intrest">Pasear</span></li>
                                    <li><span class="badge intrest">Ir a Bailar</span></li>
                                    <li><span class="badge intrest">Gimnasia</span></li>
                                </ul>
                            </div>
                            <a href="javascript:void(0);" class="dz-icon dz-sp-like">
                                <i class="flaticon flaticon-star-1"></i>
                            </a>
                        </div>
                        <div class="dzSwipe_card__option dzReject">
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                        <div class="dzSwipe_card__option dzLike">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div class="dzSwipe_card__option dzSuperlike">
                            <h5 class="title mb-0">Super Like</h5>
                        </div>
                        <div class="dzSwipe_card__drag"></div>
                `;

                // Insertar el div en el contenedor con ID "user-list"
                jQuery('.get-started .swiper-wrapper').html(nuevoDiv);
                initSwiper();

                //const contenedor = document.getElementById("dzSwipe_card-cont");
                //console.log("contenedor: ", contenedor);
                //contenedor.appendChild(nuevoDiv);
            });
        
    }


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
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    }
    
    //loadUsers(); // Cargar usuarios al inicio
});
