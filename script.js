function mostrarMensaje() {
  var mensaje = document.getElementById("mensaje");
  var gallery = document.querySelector(".image-gallery");
  var cancion = document.getElementById("miCancion");

  mensaje.style.display = "block";
  gallery.style.display = "grid";

  var images = document.querySelectorAll(".image");
  images.forEach(function (image) {
    image.style.display = "block";
  });

  cancion.play();
}

function controlarDesplazamiento() {
  var lastScrollTop = 0;
  var header = document.getElementById("header");

  window.addEventListener(
    "scroll",
    function () {
      var currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        header.style.display = "none";
      } else {
        header.style.display = "block";
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    },
    false
  );
}

controlarDesplazamiento();
