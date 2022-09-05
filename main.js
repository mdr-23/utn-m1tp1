function enviarFormulario() {
    if(document.formPlanes.nombre.value && document.formPlanes.apellido.value && document.formPlanes.dni.value && document.formPlanes.email.value && document.formPlanes.telefono.value == ""){
        document.getElementById("camposObligatorios").innerHTML = "Todos los campos son obligatorios"
    }else{
        document.getElementById("mensajeBienvenida").innerHTML = "¡Gracias por elegirnos, " + document.formPlanes.nombre.value + '!'
    }
}

function mostrarPrecio(){

    let tipoSeguro = document.getElementById("planes").value;

    let precio;

    switch(tipoSeguro){
        case "1": precio = 500; break;
        case "2": precio = 1000; break;
        case "3": precio = 1500; break;
    }

    console.log(precio);

    document.getElementById("planElegido").innerHTML = "El valor de tu plan es de " + "$" + precio

}

