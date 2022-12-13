export default class Search {
  constructor() {
    this.headerSearchIcon = document.querySelector('.header-row-Top-right__searchIcon ');
    this.headerTopSearchField = document.querySelector('.header-row-Top-searchField');
    this.headerSearchInputIcon = document.querySelector('.header-row-Top-searchInputIcon');
    this.inputHeader = document.querySelector('input.header-row-Top-input');
    this.headerTopleft = document.querySelector('.header-row-Top-left');
    this.mediaWidth = window.matchMedia("(max-width: 720px)");
  }
  init() {
    this.headerSearchIcon.addEventListener('click', () => {
      this.headerTopSearchField.classList.toggle('header-searchField__active');
      this.headerSearchIcon.classList.toggle('headerSearchIcon__active');
      this.inputHeader.focus();
      if (this.mediaWidth.matches) {
        this.headerTopleft.classList.toggle('header-row-Top-left__hidden');
      }
    });
    this.headerSearchInputIcon.addEventListener('click', () => {
      this.inputHeader.value = '';
      this.inputHeader.focus();
    });
  }
} //