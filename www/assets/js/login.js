 // Inicializar Supabase
   
    const supabaseUrl = "https://srcawgqnbyyzhbqpznpd.supabase.co"; // Reemplaza con tu URL de Supabase
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyY2F3Z3FuYnl5emhicXB6bnBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1NDEzODMsImV4cCI6MjA1OTExNzM4M30.DI8Ab7zicxcIo56rdrO6UE0T_zZ7TmHNFZe4a4Z7w-0"; 
    const BUCKET_NAME = "imagenes"; // Nombre del bucket en Supabase
    const supabase = createClient(supabaseUrl, supabaseKey);


    async function verificarConexion() {
        const { data, error } = await supabase.from("usuarios").select("*");
    
        if (error) {
            console.error("Error al conectar con Supabase:", error);
            return;
        } else {
            console.log("Conexión exitosa. Datos obtenidos:", data);
            // Aquí puedes cargar los usuarios o realizar otras acciones
            autenticarUsuario();
        }
    }

    // Función para verificar si el usuario existe
async function verificarUsuario(email, password) {
    try {
        // Consultar la tabla de usuarios en Supabase
        const { data, error } = await supabase
            .from("usuarios") // Reemplaza "usuarios" con el nombre de tu tabla
            .select("*")
            .eq("email", email)
            .eq("password", password); // Asegúrate de que la contraseña esté correctamente almacenada (encriptada)

        if (error) {
            console.error("Error al verificar el usuario:", error);
            return false;
        }

        if (data.length > 0) {
            console.log("Usuario encontrado:", data[0]);
            return true; // Usuario encontrado
        } else {
            console.log("Usuario no encontrado o credenciales incorrectas.");
            return false; // Usuario no encontrado
        }
    } catch (err) {
        console.error("Error inesperado:", err);
        return false;
    }
}

// Capturar el evento de envío del formulario
document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const usuarioValido = await verificarUsuario(email, password);

    if (usuarioValido) {
        alert("Inicio de sesión exitoso");
        // Redirigir al usuario o realizar otra acción
    } else {
        alert("Correo o contraseña incorrectos");
    }
});