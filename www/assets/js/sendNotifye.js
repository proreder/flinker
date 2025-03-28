$(document).ready(function()
 {
    

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
        console.log("Pulsado boton guardar");
        nombre=$("#nombre").val();
        email=$("#email").val();
        edad=$("#edad").val();
        console.log("boton guardar");
        if (!imagen)
        {
            imagen="NONE";
        }

        

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

    //Cuando el input cambie (se cargue un nuevo archivo) se va a ejecutar de nuevo el cambio de imagen y se verá reflejado.
   
    $("#imagen").change(function() { 
        readURL(this);
    });
    //camnia la imagen se si modifica el input
    function readURL(input) {
        if (input.files && input.files[0]) { //Revisamos que el input tenga contenido
            var reader = new FileReader(); //Leemos el contenido
            
            reader.onload = function(e) { //Al cargar el contenido lo pasamos como atributo de la imagen de arriba
            $('#previsualizacion').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }

});
