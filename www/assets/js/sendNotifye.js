

// Inicializar Firebase Storage
//const storage = firebase.storage();
/*
$("#botonGuardar").click(function(){
    guardarUsuario();
  });
*/
// Función para guardar usuario con imagen
/*
function guardarUsuario() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const email = document.getElementById("email").value;
    const imagen = document.getElementById("imgInp").files[0];
   

    if (nombre && edad && email && imagen) {
        const userId = database.ref().child("usuarios").push().key;
        const storageRef = storage.ref("usuarios/" + userId + ".png");

        // Subir la imagen a Storage
        storageRef.put(imagen).then(snapshot => {
            snapshot.ref.getDownloadURL().then(url => {
                // Guardar usuario en Realtime Database con la URL de la imagen
                database.ref("usuarios/" + userId).set({
                    nombre: nombre,
                    edad: parseInt(edad),
                    imagen: url
                }).then(() => {
                    alert("Usuario guardado");
                    cargarUsuarios();
                });
            });
        }).catch(error => console.error("Error al subir imagen:", error));
    } else {
        alert("Por favor, llena todos los campos y selecciona una imagen.");
    }
    
}
*/
