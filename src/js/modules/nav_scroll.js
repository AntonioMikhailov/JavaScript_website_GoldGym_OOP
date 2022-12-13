export default class Scroll {
  constructor(anchorUp) {
    this.link = document.querySelectorAll('a');
    // Arrow-anchor
    this.anchor = document.querySelector(anchorUp);
  }
  init() {
    let scrollPos = 0;
    // Вариант когда кнопка появляется при прокрутке вверх и виден от самого низа и до верха страницы  минус window.pageYOffset. 
    window.addEventListener('scroll', () => {
      let i = window.pageYOffset;
      let e = window.innerHeight;
      let documentScrollHeight = document.documentElement.scrollHeight;
      if ((document.body.getBoundingClientRect()).top > scrollPos && i >= e - i || i + e == documentScrollHeight) {
        this.anchor.classList.add('anchor-active');
      } else {
        this.anchor.classList.remove('anchor-active');
      }
      scrollPos = (document.body.getBoundingClientRect()).top;
    });

    function smoothScroll(targetSelector, offsetShift = 100) {
      const whereTo = document.querySelector(targetSelector);
      let startPosition = window.pageYOffset;
      let targetPosition = whereTo.offsetTop - offsetShift;
      let distance = targetPosition - startPosition;
      let duration = 1000;
      let start = null;
      window.requestAnimationFrame(step);

      function step(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;
        window.scrollTo(0, easing(progress, startPosition, distance, duration));
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }
    }
    // Можно добавить замедление в начале или конце http://gizma.com/easing/ 
    //
    function easing(t, b, c, d) {
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }
    this.link.forEach(item => {
      item.addEventListener('click', function (e) {
        let targetPosition = item.getAttribute(`${'href'}`);
        //Меняем Title - если надо
        //  document.querySelector('title').textContent = `${item.textContent}`;
        if (item.hasAttribute('data-link')) { // для ссылок между секциями в Лендинге
          e.preventDefault();
          smoothScroll(targetPosition);
        }
        if (item.hasAttribute('data-delay')) { // для ссылок внутри Аккордеонов для компенсации сдвига вверх за край браузера
          e.preventDefault();
          setTimeout(() => {
            smoothScroll(targetPosition, 80);
          }, 300);
        }
      });
    });
  }
}; //