export default class Chat {
  constructor() {
    this.chatAskCancelButton = document.querySelector('.chat-ask__cancel');
    this.chatAskLabel = document.querySelector('.chat-ask ');
    this.chatAskPopUpIcon = document.querySelector('.chat-ask__popUpIcon');
    this.formChat = document.querySelector('.formChat');
    this.formChatCancelIcon = document.querySelector('.formChat__cancelIcon');
    this.formChatInput = document.querySelectorAll('.formChat_input');
    this.formChatButton = document.querySelector('.formChat__button');
  }
  init() {
    this.chatAskPopUpIcon.addEventListener('click', () => {
      this.formChat.classList.add('formChat__active');
    });
    this.chatAskCancelButton.addEventListener('click', () => {
      this.chatAskLabel.classList.add('chat-ask-hide__active');
      this.chatAskCancelButton.classList.add('chat-ask-hide__active');
    });
    this.formChatCancelIcon.addEventListener('click', () => {
      this.formChat.classList.remove('formChat__active');
      this.chatAskLabel.classList.remove('chat-ask-hide__active');
      this.chatAskCancelButton.classList.remove('chat-ask-hide__active');
    });
    this.formChatButton.addEventListener('click', () => {
      this.formChatInput.forEach(item => {
        item.value = '';
      });
    });
  }
} //