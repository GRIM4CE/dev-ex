'use strict';

class Registration {
  constructor() {
    this.body = document.querySelector('body');
    this.registrationOpenButton = document.querySelectorAll('.registration-open-button');
    this.registrationCloseButton = document.querySelectorAll('.registration-close-button');
    this.form = document.querySelectorAll('.form-container');
    this.bindButtons();
  }

  activateRegistration(regButton) {
    let formId = regButton.getAttribute('data-form');

    this.body.style.overflow = 'hidden';
    for(let i = 0; i < this.form.length; i++) {
      if (this.form[i].getAttribute('data-form') === formId) {
        this.form[i].setAttribute('data-state', 'active');
      }
    }
  }

  deactivateRegistration() {
    this.body.style.overflow = 'auto';
    for(let i = 0; i < this.form.length; i++) {
      this.form[i].setAttribute('data-state', 'inactive');
    }
  }

  bindButtons() {
    for(let i = 0; i < this.registrationOpenButton.length; i++) {
      this.registrationOpenButton[i].addEventListener('click', this.activateRegistration.bind(this,
      this.registrationOpenButton[i]));
    }
    for(let i = 0; i < this.registrationCloseButton.length; i++) {
      this.registrationCloseButton[i].addEventListener('click', this.deactivateRegistration.bind(this));
    }
  }
}

export default Registration;
