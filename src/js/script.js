'use strict';
import Registration from './components/registration';
import Speaker from './components/speaker';

function appInit() {
  // Create Registration Form
  if (document.querySelector(".form-container")) {
    const registration = new Registration();
  }

  // Create Speakers
  if (document.querySelectorAll('.speaker-container')) {
    const speakerContainers = document.querySelectorAll('.speaker-container');
    for (let i = 0; i < speakerContainers.length; i++) {
      if (speakerContainers[i].querySelector('.speaker-description') !== null) {
        new Speaker(speakerContainers[i]);
      }
    }
  }
}

appInit();
