$(document).ready(function() {
  // Validación del formulario de contacto
  $("#contact-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: {
        required: "Por favor, ingrese su nombre",
        minlength: "Su nombre debe tener al menos 3 caracteres"
      },
      email: {
        required: "Por favor, ingrese su correo electrónico",
        email: "Por favor, ingrese un correo electrónico válido"
      },
      message: {
        required: "Por favor, ingrese su mensaje",
        minlength: "Su mensaje debe tener al menos 10 caracteres"
      }
    }
  });
  
  // Código adicional para otras funcionalidades del sitio
  // ...
    $(".navbar .nav-link").on('click', function(event) {
  
      if (this.hash !== "") {
  
          event.preventDefault();
  
          var hash = this.hash;
  
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 700, function(){
              window.location.hash = hash;
          });
      } 
  });
});

const pagesPath = `${location.origin}/TP-UTN-GRUPO7-181/pages/`;
const indexPath = `${location.origin}/TP-UTN-GRUPO7-181/`;