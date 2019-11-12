import RibsCore from "ribs-core";

class RibsWysiwyg {
  /**
   * method to launch construction au editor
   * @param options
   */
  constructor(options = {}) {
    if (!options.selector) {
      console.error('Selector is mandatory');
      return;
    } else if (!document.querySelector(options.selector)) {
      console.error('Selector can\'t be found in document');
      return;
    }

    this.selector = document.querySelector(options.selector);
    this.options = options;

    this.init();
  }

  /**
   * init editable div
   */
  init() {
    this.selector.style.display = 'none';
    const editableDiv = document.createElement('div');
    editableDiv.id = 'ribs-wysiwyg-editable';
    this.selector.parentNode.prepend(editableDiv);
  }
}

export default RibsWysiwyg;
