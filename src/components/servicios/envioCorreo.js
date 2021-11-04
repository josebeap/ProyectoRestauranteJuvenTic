function sendEmail(correo, nombre, fecha, telefono, descripcion, servicio, autoriza) {
    sendEmailCliente(correo, nombre, fecha, telefono, descripcion, servicio, autoriza)
    sendEmailRestaurante(correo, nombre, fecha, telefono, descripcion, servicio, autoriza)
    carrito = {};
    localStorage.clear();
    location.reload();
    alert("Solicitud rreserva exitosa")
  }
  function sendEmailCliente(correo, nombre, fecha, telefono, descripcion, servicio, autoriza){
    Email.send({
        Host: "smtp.gmail.com",
        Username: "josebeap11@gmail.com",
        Password: "vvtgsyoewgtiafmg",
        To: correo,
        From: "josebeap11@gmail.com",
        Subject: nombre + ", este es tu pedido",
        Body: mensaje,
    })
  }
  function sendEmailRestaurante(correo, nombre, fecha, telefono, descripcion, servicio, autoriza){
    Email.send({
        Host: "smtp.gmail.com",
        Username: "josebeap11@gmail.com",
        Password: "vvtgsyoewgtiafmg",
        To: "jose.1701710903@ucaldas.edu.co",
        From: "josebeap11@gmail.com",
        Subject: nombre + " Ha realizado una compra",
        Body: nombre+"<br>"+ correo + "<br> "+mensaje,
    })
  }
  