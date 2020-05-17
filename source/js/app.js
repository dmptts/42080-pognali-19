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

  // Показ/скрытие модального окна

  let modal = document.querySelector(".modal-business-rates");
  let ratesLink = document.querySelector(".rates__link");
  let modalOverlay = document.querySelector(".modal-overlay");
  let modalCloseBtn = document.querySelector(".modal-business-rates__btn-close")

  if (modal !== null || ratesLink !== null) {
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
  }

  // Валидация форм

  let registrationForm = document.querySelector(".feedback__registration");
  let registrationEmailInput = document.querySelector(".feedback__input");

  if (registrationForm !== null) {
    registrationEmailInput.removeAttribute("required");

    registrationForm.addEventListener("submit", function(evt) {
      if (!registrationEmailInput.value) {
        evt.preventDefault();
        registrationEmailInput.classList.add("feedback__input--error")
      };
    });

    registrationEmailInput.addEventListener("focus", function(evt) {
      registrationEmailInput.classList.remove("feedback__input--error");
    });
  }


  // Показ/скрытие фильтра стран

  let filterToggler = document.querySelector(".country-filter__toggle");
  let filterDropdown = document.querySelector(".country-filter__dropdown");
  let filterCloseBtn = document.querySelector(".country-filter__close-btn");

  if (filterToggler !== null || filterDropdown !== null || filterCloseBtn !== null) {
    filterDropdown.classList.remove("country-filter__dropdown--no-js");
    filterToggler.classList.remove("country-filter__toggle--no-js");

    filterToggler.addEventListener("click", function(evt) {
      evt.preventDefault();
      filterDropdown.classList.toggle("country-filter__dropdown--opened");
      filterToggler.classList.toggle("country-filter__toggle--opened");
    });

    filterCloseBtn.addEventListener("click", function(evt) {
      evt.preventDefault();
      filterDropdown.classList.remove("country-filter__dropdown--opened");
      filterToggler.classList.remove("country-filter__toggle--opened");
    });
  }
});
