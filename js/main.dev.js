"use strict";

var bars = document.querySelector('.menu .bars');
var menu = document.querySelector('.menu');
var enlace = document.querySelectorAll('.menu ul li a');
bars.addEventListener('click', function () {
  menu.classList.toggle('activo');
});
enlace.forEach(function (item) {
  item.addEventListener('click', function (e) {
    menu.classList.remove('activo');
  });
});
window.addEventListener('scroll', function () {
  var scroll = window.scrollY;

  if (scroll > 5) {
    menu.style.background = 'rgb(14, 32, 42)';
    menu.style.transition = 'all .3s';
  } else {
    menu.style.background = 'transparent';
  }

  menu.classList.remove('activo');
});