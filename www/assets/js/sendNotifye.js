$(document).ready(function()
 {
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

    var database = firebase.database();

    var nombre;
    var email;
    var edad;
    var imagen;

    $("#imagen").change(function()
    {
        var descriptor=new FileReader();
        descriptor.readAsDataURL(this.files[0]);

        descriptor.onloadend = function()
        {
            imagen=descriptor.result;
            $("#previsualizacion").attr("src",imagen);
        };
    });


    $("#formularioAlta").change(function()
    {
        nombre=$("#nombre").val();
        email=$("#email").val();
        edad=$("#edad").val();

        if (nombre && email && edad)
        {
            $("#botonGuardar").prop("disabled",false);
        }
        else
        {
            $("#botonGuardar").prop("disabled",true);
        }

    });


    $("#botonGuardar").click(function()
    {
        nombre=$("#nombre").val();
        email=$("#email").val();
        edad=$("#edad").val();

        if (!imagen)
        {
            imagen="NONE";
        }

        // Indicamos que la referencia base de nuestra base de datos es productos (algo así como el padre)
        // del que colgarán el resto de nodos hijos.
        /*
        var usersRef = new Firebase('https://samplechat.firebaseio-demo.com/users');
        var fredRef = usersRef.child('fred');
        var fredFirstNameRef = fredRef.child('name/first');
        */
        var referencia=database.ref("usuarios");


        // De la siguiente forma el método sobreescribe los datos
    /*
        referencia.set(
        {
            articulo: articulo,
            descripcion: descripcion,
            precio: precio,
            imagen: imagen
        });
        */

        // Ahora estamos poniendo el articulo como clave en la colección
        // De esta manera podremos añadir nuevos articulos o actualizar uno ya existente.

    /*
        referencia.child(articulo).set(
        {
            descripcion: descripcion,
            precio: precio,
            imagen: imagen
        });
        */

        // Si queremos permitir que hayas artículos con nombres duplicados entonces tendremos
        // que decirle a Firebase que utilice otra clave en lugar del nombre del articulo.
        // Usaremos el método push en lugar de set
        referencia.push(
        {
            nombre: nombre,
            email: email,
            edad: edad,
            imagen: imagen
        },function()
        {
            alert('El alta se ha realizado correctamente');
        });
    });

});
