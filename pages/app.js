
document.addEventListener("DOMContentLoaded", function () {
    // Agrega un controlador de eventos al formulario
    document.getElementById("formularioContacto").addEventListener("submit", function (event) {
      // Evita que el formulario se envíe normalmente
      event.preventDefault();
      
      // Captura los valores del formulario
      const nombre = document.getElementById("Nombre").value;
      const correoElectronico = document.getElementById("email").value;
      const consulta = document.getElementById("consulta").value;
  
      // Llama a la función enviarMail() con los valores capturados
      enviarMail(nombre, correoElectronico, consulta);
    });
  });
  
  // Función para enviar el correo electrónico
  function enviarMail(nombre, correoElectronico, consulta) {
    // Crea el contenido del correo electrónico
    const asunto = "Consulta del formulario: " + nombre;
    const cuerpo = `
      Nombre: ${nombre}
      Correo electrónico: ${correoElectronico}
      Consulta: ${consulta}
    `;
  
    // Configura los parámetros de la función enviarMail()
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "cynortiz21@gmail.com",
      Password: "BC431CC14DD83D1F6ED83F3B54DA5AC4348F",
      To: correoElectronico,
      From: nombre + "@gmail.com",
      Subject: asunto,
      Body: cuerpo,
    });
  }
  