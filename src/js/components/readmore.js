class ReadMore {
  constructor(readMoreButton) {
    this.readMoreButton = readMoreButton;
    this.panel = this.readMoreButton.parentNode;
    this.readMoreText = this.panel.querySelector('.read-more-text');
    this.bindReadMoreButton();
  }
  toggleReadMore() {
    if (this.readMoreText.classList.contains('closed')) {
      this.toggleState(this.readMoreText, 'open', 'closed');
      this.readMoreButton.innerText = 'Read Less';
    } else {
      this.toggleState(this.readMoreText, 'open', 'closed');
      this.readMoreButton.innerText = 'Read More';
    }
  }
  bindReadMoreButton() {
    this.readMoreButton.addEventListener('click', this.toggleReadMore.bind(this));
  }

  toggleState(elem, one, two) {
    elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
  }
}

export default ReadMore;
