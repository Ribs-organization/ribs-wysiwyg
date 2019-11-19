import RibsCore from 'ribs-core';
import RibsWysiwygUtils from './RibsWysiwygUtils'

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

    this.defineOptions(options);
    this.initEditableDiv();
    this.initToolbar();
  }

  /**
   * method to defined options of wysiwyg
   * @param options
   */
  defineOptions(options) {
    if (!options.height) {
      options.height = '200px'
    }

    if (!options.toolbar) {
      options.toolbar = ['Bold', 'Italic'];
    } else {
      options.toolbar = options.toolbar.split(' ');
    }

    this.options = options;
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
    this.wysiwygDiv.append(editableDiv);
    this.editableDiv = document.getElementById('ribs-wysiwyg-editable');
    this.editableDiv.style.height = Number.isInteger(this.options.height) ? `${this.options.height}px` : this.options.height;
    this.editableDiv.contentEditable = true;
    this.editableDiv.addEventListener('keydown', () => {
      if (window.getSelection && window.getSelection().getRangeAt) {
        sessionStorage.setItem('carteNode', window.getSelection().anchorNode.parentNode.tagName);
        this.caretLocationDiv.innerHTML = window.getSelection().anchorNode.parentNode.tagName;
      }
    });

    const caretLocationDiv = document.createElement('div');
    caretLocationDiv.id = 'ribs-wysiwyg-caret-location';
    this.wysiwygDiv.append(caretLocationDiv);
    this.caretLocationDiv = document.getElementById('ribs-wysiwyg-caret-location');
  }

  /**
   * method to init toolbar
   */
  initToolbar() {
    const toolbarDiv = document.createElement('div');
    toolbarDiv.id = 'ribs-wysiwyg-toolbar';
    this.wysiwygDiv.prepend(toolbarDiv);
    this.toolbarDiv = document.getElementById('ribs-wysiwyg-toolbar');

    for (let plugin of this.options.toolbar) {
      (require(`./Plugins/${plugin}.js`)).launchClass(this.toolbarDiv);
    }
  }
}

export default RibsWysiwyg;
