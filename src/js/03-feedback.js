import throttle from 'lodash.throttle';

class Form {
   constructor({ selector }) {
      this.formEl = document.querySelector(selector);
      this.formEmailInputEl = this.formEl.elements['email'];
      this.formMessageInputEl = this.formEl.elements['message'];
      this.formSubmitBtnEl = this.formEl.elements['button[type="submit"]'];
      this.userData = {};
      this.initEvents();
   }

   onValidationSuccess() {
      console.log(this.userData);

      this.userData = {};
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
            this.userData[e.target.name] = e.target.value;

            localStorage.setItem(
               'feedback-form-state',
               JSON.stringify(this.userData)
            );
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
         this.userData.email = JSON.parse(
            localStorage.getItem('feedback-form-state')
         ).email;

         this.userData.message = JSON.parse(
            localStorage.getItem('feedback-form-state')
         ).message;

         this.formEmailInputEl.value = this.userData.email;
         this.formMessageInputEl.value = this.userData.message;
      });
   }
}

const form = new Form({ selector: '.feedback-form' });
