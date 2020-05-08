let pageHeader = document.querySelector(".page-header");
let menuToggler = document.querySelector(".page-header__toggle");
let dropdownMenu = document.querySelector(".page-header__menu");

pageHeader.classList.remove("page-header--bg-white");
menuToggler.classList.remove("page-header__toggle--no-js");
dropdownMenu.classList.remove("page-header__menu--no-js");
dropdownMenu.classList.add("page-header__menu--closed")

menuToggler.addEventListener("click", function(evt) {
  evt.preventDefault();
  menuToggler.classList.toggle("page-header__toggle--menu-opened");
  pageHeader.classList.toggle("page-header--bg-white");
  dropdownMenu.classList.toggle("page-header__menu--closed");
});

window.onscroll = function() {
  pageHeaderPinner();
};

function pageHeaderPinner() {
  if (window.pageYOffset > 50) {
    pageHeader.classList.add("page-header--fixed");
    // pageHeader.classList.add("page-header--bg-white");
  } else {
    pageHeader.classList.remove("page-header--fixed");
  };
};
