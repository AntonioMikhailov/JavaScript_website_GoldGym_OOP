import OffsetMargin from "./margin_offset.js";
export default class mobileMenu  {
  constructor() {
    this.mobileMenuWrapper = document.querySelector('.mobile-wrapper');
    this.burgerButton = document.querySelector('.burger-btn');
    this.overlayMobile = document.querySelector('.background');
  }
  init() {
    this.burgerButton.addEventListener('click', () => {
      this.burgerButton.classList.toggle('burger-btn-active');
      this.overlayMobile.classList.toggle('background-active');
      this.mobileMenuWrapper.classList.toggle('mobile-menu-active');
      if (this.burgerButton.classList.contains('burger-btn-active')) {
        new OffsetMargin().addOffsetMargin();
      } else {
        new OffsetMargin().removeOffsetMargin();
      }
    });
    this.overlayMobile.addEventListener('click', (e) => {
      new OffsetMargin().removeOffsetMargin();
    if (e.target == this.overlayMobile) {
        this.burgerButton.classList.remove('burger-btn-active');
        this.overlayMobile.classList.remove('background-active');
        this.mobileMenuWrapper.classList.remove('mobile-menu-active');
      }
    });
  }
}
 