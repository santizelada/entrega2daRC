const formRegistro = document.getElementById('registroForm').addEventListener('submit', function () {
    const inputNombre = document.getElementById('inputNombre')
    const cantidadCaracteres = inputNombre.value.length

    if (cantidadCaracteres <= 4) {
        alert("INGRESA UN NOMBRE DECENTEEEEEEEEEEE")
        event.preventDefault()
    } 

})