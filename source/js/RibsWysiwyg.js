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
    this.initWysiwygDivs();
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
    if (!options.fontSize) {
      options.fontSize = [8, 10, 12, 14, 16, 18, 24, 36];
    }
    if (!options.blocks) {
      options.blocks = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    }

    if (!options.toolbar) {
      options.toolbar = ['Bold', 'Italic', 'Underline', 'Strikethrough', 'FontSize', 'Blocks'];
    } else {
      options.toolbar = options.toolbar.split(' ');
    }

    this.options = options;
  }

  /**
   * init wysiwyg div
   */
  initWysiwygDivs() {
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

    const caretLocationDiv = document.createElement('div');
    caretLocationDiv.id = 'ribs-wysiwyg-caret-location';
    this.wysiwygDiv.append(caretLocationDiv);

    this.addEventsListenersEditableDiv();
  }

  /**
   * method to add event listener on editable div
   */
  addEventsListenersEditableDiv() {
    this.editableDiv.addEventListener('keydown', (event) => {
      if(event.keyCode === 13 && !event.shiftKey) {
        document.execCommand('defaultParagraphSeparator', false, 'p');
      }

      RibsWysiwygUtils.refreshCaretLocationDiv();
    });

    this.editableDiv.addEventListener('click', () => {
      const caretPosition = RibsWysiwygUtils.getCaretPosition();
      const lastPosition = caretPosition[caretPosition.length - 1];

      if (lastPosition === undefined) {
        document.execCommand('formatBlock', false, 'p');
      }

      RibsWysiwygUtils.refreshCaretLocationDiv();
    });
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
      (require(`./Plugins/${plugin}.js`)).launchClass(this.toolbarDiv, this.editableDiv, this.options);
    }
  }
}

export default RibsWysiwyg;
