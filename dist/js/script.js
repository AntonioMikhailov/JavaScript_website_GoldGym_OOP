"use strict";

(() => {
  "use strict";

  class e {
    constructor(e) {
      this.link = document.querySelectorAll("a"), this.anchor = document.querySelector(e);
    }

    init() {
      let e = 0;

      function t(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        const i = document.querySelector(e);
        let r = window.pageYOffset,
            s = i.offsetTop - t - r,
            o = null;
        window.requestAnimationFrame(function e(t) {
          o || (o = t);
          let i = t - o;
          var n, a;
          window.scrollTo(0, (n = i, a = r, -s / 2 * (Math.cos(Math.PI * n / 1e3) - 1) + a)), i < 1e3 && window.requestAnimationFrame(e);
        });
      }

      window.addEventListener("scroll", () => {
        let t = window.pageYOffset,
            i = window.innerHeight,
            r = document.documentElement.scrollHeight;
        document.body.getBoundingClientRect().top > e && t >= i - t || t + i == r ? this.anchor.classList.add("anchor-active") : this.anchor.classList.remove("anchor-active"), e = document.body.getBoundingClientRect().top;
      }), this.link.forEach(e => {
        e.addEventListener("click", function (i) {
          let r = e.getAttribute("href");
          e.hasAttribute("data-link") && (i.preventDefault(), t(r)), e.hasAttribute("data-delay") && (i.preventDefault(), setTimeout(() => {
            t(r, 80);
          }, 300));
        });
      });
    }

  }

  class t {
    constructor() {
      this.marginOffset = window.innerWidth - document.body.clientWidth;
    }

    addOffsetMargin() {
      document.body.style.marginRight = this.marginOffset + "px", document.querySelector(".anchor-wrapper").style.display = "none", document.querySelector(".chat-popup").style.display = "none", document.body.classList.add("lock");
    }

    removeOffsetMargin() {
      setTimeout(() => {
        document.body.style.marginRight = "0px", document.body.classList.remove("lock"), document.querySelector(".anchor-wrapper").style.display = "", document.querySelector(".chat-popup").style.display = "";
      }, 300);
    }

  }

  class i {
    constructor() {
      this.mobileMenuWrapper = document.querySelector(".mobile-wrapper"), this.burgerButton = document.querySelector(".burger-btn"), this.overlayMobile = document.querySelector(".background");
    }

    init() {
      this.burgerButton.addEventListener("click", () => {
        this.burgerButton.classList.toggle("burger-btn-active"), this.overlayMobile.classList.toggle("background-active"), this.mobileMenuWrapper.classList.toggle("mobile-menu-active"), this.burgerButton.classList.contains("burger-btn-active") ? new t().addOffsetMargin() : new t().removeOffsetMargin();
      }), this.overlayMobile.addEventListener("click", e => {
        new t().removeOffsetMargin(), e.target == this.overlayMobile && (this.burgerButton.classList.remove("burger-btn-active"), this.overlayMobile.classList.remove("background-active"), this.mobileMenuWrapper.classList.remove("mobile-menu-active"));
      });
    }

  }

  class r {
    constructor() {
      this.headerSearchIcon = document.querySelector(".header-row-Top-right__searchIcon "), this.headerTopSearchField = document.querySelector(".header-row-Top-searchField"), this.headerSearchInputIcon = document.querySelector(".header-row-Top-searchInputIcon"), this.inputHeader = document.querySelector("input.header-row-Top-input"), this.headerTopleft = document.querySelector(".header-row-Top-left"), this.mediaWidth = window.matchMedia("(max-width: 720px)");
    }

    init() {
      this.headerSearchIcon.addEventListener("click", () => {
        this.headerTopSearchField.classList.toggle("header-searchField__active"), this.headerSearchIcon.classList.toggle("headerSearchIcon__active"), this.inputHeader.focus(), this.mediaWidth.matches && this.headerTopleft.classList.toggle("header-row-Top-left__hidden");
      }), this.headerSearchInputIcon.addEventListener("click", () => {
        this.inputHeader.value = "", this.inputHeader.focus();
      });
    }

  }

  class s {
    constructor() {
      this.chatAskCancelButton = document.querySelector(".chat-ask__cancel"), this.chatAskLabel = document.querySelector(".chat-ask "), this.chatAskPopUpIcon = document.querySelector(".chat-ask__popUpIcon"), this.formChat = document.querySelector(".formChat"), this.formChatCancelIcon = document.querySelector(".formChat__cancelIcon"), this.formChatInput = document.querySelectorAll(".formChat_input"), this.formChatButton = document.querySelector(".formChat__button");
    }

    init() {
      this.chatAskPopUpIcon.addEventListener("click", () => {
        this.formChat.classList.add("formChat__active");
      }), this.chatAskCancelButton.addEventListener("click", () => {
        this.chatAskLabel.classList.add("chat-ask-hide__active"), this.chatAskCancelButton.classList.add("chat-ask-hide__active");
      }), this.formChatCancelIcon.addEventListener("click", () => {
        this.formChat.classList.remove("formChat__active"), this.chatAskLabel.classList.remove("chat-ask-hide__active"), this.chatAskCancelButton.classList.remove("chat-ask-hide__active");
      }), this.formChatButton.addEventListener("click", () => {
        this.formChatInput.forEach(e => {
          e.value = "";
        });
      });
    }

  }

  class o {
    constructor(e) {
      this.hFourGalleryRow = document.querySelectorAll(e), this.hFourButtonPrev = document.querySelector(".h-four__buttonPrev"), this.hFourButtonNext = document.querySelector(".h-four__buttonNext");
    }

    init() {
      let e = 1,
          t = t => {
        t > this.hFourGalleryRow.length && (e = 1), t < 1 && (e = this.hFourGalleryRow.length), this.hFourGalleryRow.forEach(t => {
          t.classList.remove("h-four__galleryRow__show"), this.hFourGalleryRow[e - 1].classList.add("h-four__galleryRow__show");
        });
      };

      try {
        this.hFourButtonNext.addEventListener("click", () => {
          t(e += 1);
        }), this.hFourButtonPrev.addEventListener("click", () => {
          t(e -= 1);
        });
      } catch (e) {}
    }

  }

  class n {
    constructor() {
      this.previewImage = document.querySelectorAll(".carousel-preview-item"), this.carouselContainer = document.querySelector(".carousel-container"), this.carouselWrapper = document.querySelector(".carousel-wrapper"), this.carouselMain = document.querySelector(".carousel-main"), this.sliderRow = document.querySelector(".slider-row "), this.btnNext = document.querySelector(".button-next"), this.btnPrev = document.querySelector(".button-prev"), this.cancelBtn = document.querySelector(".carousel-cancelBtn");
    }

    init() {
      let e;
      this.previewImage.forEach(i => {
        i.addEventListener("click", () => {
          this.carouselContainer.classList.add("show-carousel"), e = 1, new t().addOffsetMargin();
        });
      });
      let i = -1;

      try {
        this.btnNext.addEventListener("click", () => {
          e = 0, 1 == i && this.sliderRow.prepend(this.sliderRow.lastElementChild), i = -1, this.carouselMain.style.justifyContent = "flex-start", this.sliderRow.style.transform = "translate(-20%)";
        }), this.btnPrev.addEventListener("click", () => {
          e = 0, -1 == i && this.sliderRow.append(this.sliderRow.firstElementChild), i = 1, this.carouselMain.style.justifyContent = "flex-end", this.sliderRow.style.transform = "translate(20%)";
        }), this.sliderRow.addEventListener("transitionend", () => {
          0 == e && (-1 == i ? this.sliderRow.append(this.sliderRow.firstElementChild) : (this.sliderRow.prepend(this.sliderRow.lastElementChild), console.log("Prepend3")), this.sliderRow.style.transition = "none", this.sliderRow.style.transform = "translate(0)", setTimeout(() => {
            this.sliderRow.style.transition = "all .5s ease";
          }));
        }), this.cancelBtn.addEventListener("click", () => {
          new t().removeOffsetMargin(), this.carouselContainer.classList.remove("show-carousel");
        }), this.carouselContainer.addEventListener("click", e => {
          e.target == this.carouselContainer && (new t().removeOffsetMargin(), this.carouselContainer.classList.remove("show-carousel"));
        });
      } catch (e) {}
    }

  }

  class a {
    constructor(e, t) {
      this.form = document.querySelector(e), this.input = document.querySelectorAll(t);
    }

    init() {
      this.form.addEventListener("submit", e => {
        e.preventDefault();
        let t = 0;
        this.input.forEach(e => {
          if (e.value.length > 0 && (t++, t == this.input.length)) {
            this.form.lastElementChild.classList.remove("active-warn"), this.form.lastElementChild.classList.add("active-form"), this.form.lastElementChild.innerHTML = "Подписка!";
            const e = new FormData(this.form);
            fetch("http://antoniom.beget.tech/goldgym/phpmailer/mail.php", {
              method: "POST",
              body: e
            }), setTimeout(() => {
              this.form.reset();
            }, 1500);
          }
        }), this.input.forEach(e => {
          0 == e.value.length && (this.form.lastElementChild.innerHTML = "ваш email?", this.form.lastElementChild.classList.add("active-warn"));
        }), this.form.addEventListener("input", e => {
          e.preventDefault(), this.form.lastElementChild.classList.remove("active-form"), this.form.lastElementChild.classList.remove("active-warn"), this.form.lastElementChild.innerHTML = "подписаться";
        });
      });
    }

  }

  class l {
    constructor(e, t, i) {
      this.form = document.querySelector(e), this.input = document.querySelectorAll(t), this.textarea = document.querySelector(i);
    }

    init() {
      try {
        this.form.addEventListener("submit", e => {
          e.preventDefault();
          let t = 0;
          this.input.forEach(e => {
            if (e.value.length > 0 && this.textarea.value.length > 0 && (t++, t == this.input.length)) {
              this.form.lastElementChild.classList.remove("active-warn"), this.form.lastElementChild.classList.add("active-form"), this.form.lastElementChild.innerHTML = "сообщение отправлено";
              const e = new FormData(this.form);
              fetch("http://antoniom.beget.tech/goldgym/phpmailer/mail.php", {
                method: "POST",
                body: e
              }), setTimeout(() => {
                this.form.reset();
              }, 1500);
            }
          }), this.input.forEach(e => {
            0 != e.value.length && 0 != this.textarea.value.length || (this.form.lastElementChild.innerHTML = "заполните все поля", this.form.lastElementChild.classList.add("active-warn"));
          }), this.form.addEventListener("input", e => {
            e.preventDefault(), this.form.lastElementChild.classList.remove("active-form"), this.form.lastElementChild.classList.remove("active-warn"), this.form.lastElementChild.innerHTML = "отправить сообщение";
          });
        });
      } catch (e) {}
    }

  }

  window.addEventListener("DOMContentLoaded", () => {
    new r().init(), new i(".burger-btn", ".mobile-close-button", ".mobile-overlay", ".mobile-wrapper", "burger-btn-active").init(), new o(".h-four__galleryRow").init(), new a(".h-seven__formRow", ".h-seven__input").init(), new l("form[data-form]", ".bi-three__input", ".bi-three__textarea").init(), new e(".anchor-wrapper").init(), new s().init(), new n().init();
  });
})();