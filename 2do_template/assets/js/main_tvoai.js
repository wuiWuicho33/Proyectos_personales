/*====================
Obtiene al año actual
====================*/ 
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();

/*====================
Componente de pestañas
====================*/ 
function openCity(evt, cityName) {
  // Declarar todas las variables
  var i, tabcontent, tablinks;

  // Obtiene todos los elementos con class="tabcontent" y las oculta
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Obtiene todos los elementos con class="tablinks" y elimina la clase "activa"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Muestra la pestaña actual y agrega una clase "activa" al botón que abrió la pestaña
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Activa la primera pestaña por defecto al cargar la página
window.onload = function() {
    // Obtiene el botón de la primera pestaña
    var defaultTabButton = document.querySelector('.tablinks:first-of-type');
    // Simula un clic en el botón de la primera pestaña
    defaultTabButton.click();
}

/*====================
Swiper carousel
====================*/ 
// Initialize Swiper
var swiper = new Swiper(".Swiper-01", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

// Initialize Swiper
var swiper = new Swiper(".Swiper-02", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
