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
// Per-view-02
var swiper = new Swiper(".per-view-02", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {slidesPerView: 1,},
    768: {slidesPerView: 1,},
    1024: {slidesPerView: 2,},
  }
});

// Per-view-03
var swiper = new Swiper(".per-view-03", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {slidesPerView: 2,},
    768: {slidesPerView: 2,},
    1024: {slidesPerView: 3,},
  }
});

// Per-view-04
var swiper = new Swiper(".per-view-04", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {slidesPerView: 2,},
    768: {slidesPerView: 3,},
    1024: {slidesPerView: 4,},
  }
});

// Swiper-cartoon
var swiper = new Swiper(".swiper-results", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {slidesPerView: 2,},
    768: {slidesPerView: 3,},
    1024: {slidesPerView: 3,},
  }
});
