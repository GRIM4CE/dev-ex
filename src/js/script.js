'use strict';
import Registration from './components/registration';

function appInit() {
  // Create Registration Form
  if (document.querySelector(".form-container")) {
    const registration = new Registration();
  }
}

appInit();
