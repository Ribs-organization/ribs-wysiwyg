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

    this.initEditableDiv();
  }

  /**
   * init editable div
   */
  initEditableDiv() {
    this.selector.style.display = 'none';
    const editableDiv = document.createElement('div');
    editableDiv.id = 'ribs-wysiwyg-editable';
    editableDiv.contentEditable = true;
    this.selector.parentNode.prepend(editableDiv);
    this.editableDiv = document.getElementById('ribs-wysiwyg-editable');
  }
}

export default RibsWysiwyg;
