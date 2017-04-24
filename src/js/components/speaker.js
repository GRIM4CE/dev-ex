class Speaker {
  constructor(speakerContainer) {
    this.speakerContainer = speakerContainer;
    this.speakerBio = this.speakerContainer.querySelector('.speaker-description');
    this.speakerImage = this.speakerContainer.querySelector('.speaker-image');
    this.speakerBio = this.speakerContainer.querySelector('.speaker-description');
    this.speakerHoverBind = this.toggleSpeakerBio.bind(this);
    this.bindSpeakerImages();
  }

  toggleSpeakerBio() {
    this.toggleState(this.speakerBio, 'hidden', 'visible');
  }

  bindSpeakerImages() {
    this.speakerImage.addEventListener('mouseenter', this.speakerHoverBind);
    this.speakerBio.addEventListener('mouseenter', this.speakerHoverBind);
    this.speakerImage.addEventListener('mouseleave', this.speakerHoverBind);
    this.speakerBio.addEventListener('mouseleave', this.speakerHoverBind);
  }


  toggleState(elem, one, two) {
    elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
  }
}

export default Speaker;
