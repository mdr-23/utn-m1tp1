function mostrarPrecio(){

    let select = document.getElementById("planes").value;

    let mensaje = document.getElementById("planes");
    let seleccionado = mensaje.options[mensaje.selectedIndex].text;
    alert(seleccionado + ": " + select)

}

