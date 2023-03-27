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
  });

const pagesPath = `${location.origin}/trabajo/pages/`;
const indexPath = `${location.origin}/trabajo/`;


const cabeceraHTML = document.getElementById("cabecera");
cabeceraHTML.innerHTML = cabeceraHTML.innerHTML + `
<nav class="navbar navbar-expand-lg bg-info rounded bg-opacity-50" aria-label="Eighth navbar example">
    <div class="container">
      <a class="navbar-brand" href="${indexPath}index.html">TP-INTEGRADOR</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExample07">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
           <li class="nav-item text-white">
            <a class="nav-link" aria-current="page" href="${indexPath}index.html">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${pagesPath}equipo.html">Equipo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${pagesPath}contacto.html">Contacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${pagesPath}presentacion.html">Presentación</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${pagesPath}cotizacion.html">Cotización</a>
          </li>
        </ul>
        <form role="search">
          <input class="form-control" type="search" placeholder="Search" aria-label="Buscar">
        </form>
      </div>
    </div>
</nav>
`;

const pieHTML = document.getElementById("pie");
pieHTML.innerHTML = pieHTML.innerHTML + `
<footer class="py-5 d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-secondary bg-opacity-50">
<p class="col-md-4 mb-0 text-body-secondary">&copy; 2023 - Mi sitio web</p>
<ul class="nav col-md-1 list-unstyled d-flex align-items-center">
  <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-github"></i></svg></a></li>
  <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-twitter"></i></svg></a></li>
  <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-instagram"></i></svg></a></li>
  <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-facebook"></i></svg></a></li>
</ul>

<ul class="nav col-md-4">
  <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
  <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
  <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
  <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
  <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
</ul>
</footer>
`;