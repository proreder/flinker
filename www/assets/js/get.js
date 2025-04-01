// Inicializar la base de datos
var config = {
    appId: "1:244533337010:android:297765d438bb5ae6e2e2ab",
    apiKey: "AIzaSyBj7pQy-V_rh2zJ_atjUvXimljShHUFf8M",
    authDomain: "flinker-8c0c9.web.app",
    databaseURL: "https://flinker-8c0c9-default-rtdb.firebaseio.com/",
    projectId: "flinker-8c0c9",
    storageBucket: "flinker-8c0c9.firebasestorage.app",
    messagingSenderId: "244533337010"
};

firebase.initializeApp(config);
const  database = firebase.database();
var referencia = database.ref("usuarios").limitToLast(1);

referencia.on("value", function (datos) {
    var usuarios = datos.val();

    // Seleccionar todos los elementos con la clase "listado"
    document.querySelectorAll("#listado").forEach(listadoContainer => {
        listadoContainer.innerHTML = ""; // Limpiar antes de agregar nuevos elementos

        // Tomar solo el último usuario
        var indice = Object.keys(usuarios)[0];
        var valor = usuarios[indice];

        var prevUsuario = `
            <div class="row">
                <div class="col-md-3 cabeceraProducto">
                    <h2>${valor.nombre || "Sin nombre"}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 imagenFix">
                    <img id="userImage" 
                         src="${valor.imagen && valor.imagen !== "NONE" ? valor.imagen : "default.jpg"}" 
                         alt="Foto de usuario" 
                         style="cursor:pointer;">
                </div>
                <div class="col-md-3">
                    <p>${valor.email || "Sin correo"}</p>
                </div>
            </div>
            <div class="row espaciador"></div>
        `;

        listadoContainer.innerHTML = prevUsuario;

        // Agregar evento click a la imagen para enviar datos a profile-details.html
        document.getElementById("userImage").addEventListener("click", function () {
            localStorage.setItem("userImage", valor.imagen || "default.jpg");
            localStorage.setItem("userName", valor.nombre || "Sin nombre");
            localStorage.setItem("userAge", valor.edad || "No especificada");
            localStorage.setItem("userCountry", valor.ubicacion || "No especificado");
            window.location.href = "profile-details.html";
        });
    });
});

