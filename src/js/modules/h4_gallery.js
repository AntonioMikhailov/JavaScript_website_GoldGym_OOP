export default class Gallery {
  constructor(gallery) {
    this.hFourGalleryRow = document.querySelectorAll(gallery);
    this.hFourButtonPrev = document.querySelector('.h-four__buttonPrev');
    this.hFourButtonNext = document.querySelector('.h-four__buttonNext');
  }
  init() {
    let SlideIndex = 1;
    let showSlides = (n) => { // стрелочная т.к this
      if (n > this.hFourGalleryRow.length) {
        SlideIndex = 1;
      }
      if (n < 1) {
        SlideIndex = this.hFourGalleryRow.length;
      }
      this.hFourGalleryRow.forEach(item => {
        item.classList.remove('h-four__galleryRow__show');
        this.hFourGalleryRow[SlideIndex - 1].classList.add('h-four__galleryRow__show');
      });
    };
    try {
      this.hFourButtonNext.addEventListener('click', () => {
        showSlides(SlideIndex += 1);
      });
      this.hFourButtonPrev.addEventListener('click', () => {
        showSlides(SlideIndex -= 1);
      });
    } catch (error) {}
  }
} //