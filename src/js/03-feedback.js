import throttle from 'lodash.throttle';

class Form {
   constructor({ selector }) {
      this.formEl = document.querySelector(selector);
      this.formEmailInputEl = this.formEl.elements['email'];
      this.formMessageInputEl = this.formEl.elements['message'];
      this.formSubmitBtnEl = this.formEl.elements.nodeName === 'BUTTON';
      this.initEvents();
   }

   onValidationSuccess() {
      console.log({
         [this.formEmailInputEl.name]: this.formEmailInputEl.value,
         [this.formMessageInputEl.name]: this.formMessageInputEl.value,
      });

      return this.formEl.reset();
   }

   onValidationError() {
      for (let i = 0; i < this.formEl.elements.length; i++) {
         if (
            (this.formEl.elements[i].nodeName === 'INPUT' ||
               this.formEl.elements[i].nodeName === 'TEXTAREA') &&
            this.formEl.elements[i].value === ''
         ) {
            return alert(
               `Please fill the ${this.formEl.elements[i].name} field!`
            );
         }
      }
   }

   initEvents() {
      this.formEl.addEventListener(
         'input',
         throttle(e => {
            localStorage.setItem(`${e.target.name}`, `${e.target.value}`);
         }, 500)
      );

      this.formEl.addEventListener('submit', e => {
         e.preventDefault();

         this.formEmailInputEl.value !== '' &&
         this.formMessageInputEl.value !== ''
            ? this.onValidationSuccess()
            : this.onValidationError();
      });

      window.addEventListener('load', () => {
         this.formEmailInputEl.value = localStorage.getItem('email');
         this.formMessageInputEl.value = localStorage.getItem('message');
      });
   }
}

const form = new Form({ selector: '.feedback-form' });
