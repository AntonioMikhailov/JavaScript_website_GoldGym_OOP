export default class Form {
  constructor(formSelector, inputSelector, textareaSelector) {
    this.form = document.querySelector(formSelector);
 
    this.input = document.querySelectorAll(inputSelector);
    this.textarea = document.querySelector(textareaSelector);
  }
  init() {
    try {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        let numOfInputs = 0;
        this.input.forEach(item => {
          if (item.value.length > 0 && this.textarea.value.length > 0) {
            numOfInputs++;
            if (numOfInputs == this.input.length) {
              this.form.lastElementChild.classList.remove('active-warn');
              this.form.lastElementChild.classList.add('active-form');
              this.form.lastElementChild.innerHTML = 'сообщение отправлено';
              //Отправляем 
              const formData = new FormData(this.form);
              fetch("http://antoniom.beget.tech/goldgym/phpmailer/mail.php", {
             
                method: 'POST',
                body: formData
              });
              setTimeout(() => {
                //очищаем форму
                this.form.reset();
              }, 1500);
            }
          }
        });
        //если не заполнены ВСЕ поля
        this.input.forEach(item => {
          if (item.value.length == 0 || this.textarea.value.length == 0) {
            this.form.lastElementChild.innerHTML = 'заполните все поля';
            this.form.lastElementChild.classList.add('active-warn');
          }
        });
      
        this.form.addEventListener('input', (e) => {
          e.preventDefault();
          this.form.lastElementChild.classList.remove('active-form');
          this.form.lastElementChild.classList.remove('active-warn');
          this.form.lastElementChild.innerHTML = 'отправить сообщение';
        });
      });
    } catch (error) {}
  }
}