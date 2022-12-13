export default class FormSubmit {
  constructor(formSelector, inputSelector) {
    this.form = document.querySelector(formSelector);
    this.input = document.querySelectorAll(inputSelector);
  }
  init() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      let numOfInputs = 0;
      this.input.forEach(item => {
        if (item.value.length > 0) {
          numOfInputs++;
          if (numOfInputs == this.input.length) {
            this.form.lastElementChild.classList.remove('active-warn');
            this.form.lastElementChild.classList.add('active-form');
            this.form.lastElementChild.innerHTML = 'Подписка!';
            //Отправляем 
            const formData = new FormData(this.form);
            fetch("http://antoniom.beget.tech/goldgym/phpmailer/mail.php", {
           
              method: 'POST',
              body: formData,
            });
          
            setTimeout(() => {
       
              this.form.reset();
            }, 1500);
          }
        }
      });
      //если не заполнены ВСЕ поля
      this.input.forEach(item => {
        if (item.value.length == 0) {
          this.form.lastElementChild.innerHTML = 'ваш email?';
          this.form.lastElementChild.classList.add('active-warn');
        }
      });
      //при вводе в поле после отправки  - очищаем кнопку  отправки
      this.form.addEventListener('input', (e) => {
        e.preventDefault();
        this.form.lastElementChild.classList.remove('active-form');
        this.form.lastElementChild.classList.remove('active-warn');
        this.form.lastElementChild.innerHTML = 'подписаться';
      });
    });
  }
}