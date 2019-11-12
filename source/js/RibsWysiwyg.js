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
    this.initToolbar();
  }

  /**
   * init editable div
   */
  initEditableDiv() {
    this.selector.style.display = 'none';

    const wysiwygDiv = document.createElement('div');
    wysiwygDiv.id = 'ribs-wysiwyg-container';
    this.selector.parentNode.prepend(wysiwygDiv);
    this.wysiwygDiv = document.getElementById('ribs-wysiwyg-container');

    const editableDiv = document.createElement('div');
    editableDiv.id = 'ribs-wysiwyg-editable';
    editableDiv.contentEditable = true;
    this.wysiwygDiv.append(editableDiv);
    this.editableDiv = document.getElementById('ribs-wysiwyg-editable');
  }

  /**
   * method to init toolbar
   */
  initToolbar() {
    const toolbarDiv = document.createElement('div');
    toolbarDiv.classList.add('ribs-wysiwyg-toolbar');
    this.wysiwygDiv.prepend(toolbarDiv);
  }
}

export default RibsWysiwyg;
