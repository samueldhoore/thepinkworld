/***************************************************************************************************************************************/
/* DESKTOP VERSION */
/***************************************************************************************************************************************/
/* Sticky Top Nav */

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Sticky footer Nav */

window.onscroll = function() {myFunction()};

var footer = document.getElementById("footer");
var sticky_footer = footer.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky_footer) {
    footer.classList.add("sticky")
  } else {
    footer.classList.remove("sticky");
  }
}