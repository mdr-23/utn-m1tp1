function enviarFormulario() {
    if(document.formPlanes.nombre.value || document.formPlanes.apellido.value || document.formPlanes.dni.value || document.formPlanes.email.value || document.formPlanes.telefono.value == ""){
        document.getElementById("camposObligatorios").innerHTML = "Todos los campos son obligatorios"
    }else{
        document.getElementById("mensajeBienvenida").innerHTML = "Bienvenido " + document.formPlanes.nombre.value
    }
}

function mostrarPrecio(){

    let select = document.getElementById("planes").value;

    let mensaje = document.getElementById("planes");
    let seleccionado = mensaje.options[mensaje.selectedIndex].text;
    alert(seleccionado + ": " + select)

}

