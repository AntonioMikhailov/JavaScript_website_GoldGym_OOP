  //компенсация сдвига вправо 
  export default class OffsetMargin {
    constructor() {
      this.marginOffset = window.innerWidth - document.body.clientWidth;
    }
    addOffsetMargin() {
      document.body.style.marginRight = this.marginOffset + 'px';
      //для anchor
      document.querySelector('.anchor-wrapper').style.display = 'none';
      document.querySelector('.chat-popup').style.display = 'none';
      document.body.classList.add('lock');
    }
    removeOffsetMargin() {
      setTimeout(() => {
        document.body.style.marginRight = 0 + 'px';
        document.body.classList.remove('lock');
        //для anchor
        document.querySelector('.anchor-wrapper').style.display = '';
        document.querySelector('.chat-popup').style.display = '';
      }, 300);
    }
  } //