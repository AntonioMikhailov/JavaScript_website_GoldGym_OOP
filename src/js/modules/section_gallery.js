import OffsetMargin from "./margin_offset.js";
export default class SecGallery {
  constructor() {
    this.previewImage = document.querySelectorAll('.carousel-preview-item');
    this.carouselContainer = document.querySelector('.carousel-container');
    this.carouselWrapper = document.querySelector('.carousel-wrapper');
    this.carouselMain = document.querySelector('.carousel-main');
    this.sliderRow = document.querySelector('.slider-row ');
    this.btnNext = document.querySelector('.button-next');
    this.btnPrev = document.querySelector('.button-prev');
    this.cancelBtn = document.querySelector('.carousel-cancelBtn');
  }
  init() {
    this.previewImage.forEach(item => {
      item.addEventListener('click', () => {
        this.carouselContainer.classList.add('show-carousel');
        stopTransitionEnd = 1;
        new OffsetMargin().addOffsetMargin();
      });
    });
    let stopTransitionEnd;
    let direction = -1;
    try { // т.к. Ошибка на Главной из за Карусели которая в Section
      this.btnNext.addEventListener('click', () => {
        stopTransitionEnd = 0;
        if (direction == 1) {
          this.sliderRow.prepend(this.sliderRow.lastElementChild);
        }
        direction = -1;
        this.carouselMain.style.justifyContent = 'flex-start';
        this.sliderRow.style.transform = 'translate(-20%)';
      });
      this.btnPrev.addEventListener('click', () => {
        stopTransitionEnd = 0;
        if (direction == -1) {
          this.sliderRow.append(this.sliderRow.firstElementChild);
        }
        direction = 1;
        this.carouselMain.style.justifyContent = 'flex-end';
        this.sliderRow.style.transform = 'translate(20%)';
      });
      this.sliderRow.addEventListener('transitionend', () => {
        if (stopTransitionEnd == 0) {
          if (direction == -1) {
            this.sliderRow.append(this.sliderRow.firstElementChild);
          } else {
            this.sliderRow.prepend(this.sliderRow.lastElementChild);
            console.log('Prepend3');
          }
          this.sliderRow.style.transition = 'none';
          this.sliderRow.style.transform = 'translate(0)';
          setTimeout(() => {
            this.sliderRow.style.transition = 'all .5s ease';
          });
        }
      });
      this.cancelBtn.addEventListener('click', () => {
        new OffsetMargin().removeOffsetMargin();
        this.carouselContainer.classList.remove('show-carousel');
      });
      this.carouselContainer.addEventListener('click', (e) => {
        if (e.target == this.carouselContainer) {
          new OffsetMargin().removeOffsetMargin();
          this.carouselContainer.classList.remove('show-carousel');
        }
      });
    } catch (error) {}
  }
} //