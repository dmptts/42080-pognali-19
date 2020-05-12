window.addEventListener("load", function(evt) {
  let pageHeader = document.querySelector(".page-header");
  let menuToggler = document.querySelector(".page-header__toggle");
  let dropdownMenu = document.querySelector(".page-header__menu");
  const ESC = 27;
  const SCROLLHEIGHT = 50;

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

  window.addEventListener("scroll", function(evt) {
    pageHeaderPinner();
  });

  function pageHeaderPinner() {
    if (window.pageYOffset > SCROLLHEIGHT) {
      pageHeader.classList.add("page-header--fixed");
    } else {
      pageHeader.classList.remove("page-header--fixed");
    };
  };

  let modal = document.querySelector(".modal-business-rates");
  let ratesLink = document.querySelector(".rates__link");
  let modalOverlay = document.querySelector(".modal-overlay");
  let modalCloseBtn = document.querySelector(".modal-business-rates__btn-close")

  ratesLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-business-rates--opened");
    modalOverlay.classList.add("modal-overlay--modal-opened");
  });

  modalCloseBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("modal-business-rates--opened");
    modalOverlay.classList.remove("modal-overlay--modal-opened");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === ESC && modal.classList.contains("modal-business-rates--opened")) {
      evt.preventDefault();
      modal.classList.remove("modal-business-rates--opened");
      modalOverlay.classList.remove("modal-overlay--modal-opened");
    };
  });
});


