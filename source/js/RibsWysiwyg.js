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

    this.defineOptions(options);

    if (options.mode && options.mode === 'inline') {
      this.initWysiwygInlineDivs();
    } else {
      this.selector = document.querySelector(options.selector);
      this.initWysiwygDivs();
    }
  }

  /**
   * method to defined options of wysiwyg
   * @param options
   */
  defineOptions(options) {
    if (!options.height) {
      options.height = '200px';
    }

    if (!options.mode) {
      options.mode = 'standard';
    }

    if (!options.toolbar) {
      options.toolbar = ['UndoRedo', '|', 'Justify', '|', 'IndentOutdent', '|',  'Lists', '|', 'Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'FontSize', 'Blocks', '|', 'Link'];
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

    const editableDiv = document.createElement('div');
    editableDiv.id = 'ribs-wysiwyg-editable';
    wysiwygDiv.append(editableDiv);
    editableDiv.style.height = Number.isInteger(this.options.height) ? `${this.options.height}px` : this.options.height;
    editableDiv.contentEditable = true;

    const caretLocationDiv = document.createElement('div');
    caretLocationDiv.id = 'ribs-wysiwyg-caret-location';
    wysiwygDiv.append(caretLocationDiv);

    this.addEventsListenersEditableDiv(wysiwygDiv, editableDiv);
  }

  /**
   * method to initialise inline wysiwyg editor
   */
  initWysiwygInlineDivs() {
    const selectors = document.querySelectorAll(this.options.selector);

    selectors.forEach((element) => {
      element.contentEditable = true;
      this.addEventsListenersEditableDiv(element, element);
    });
  }

  /**
   * method to add event listener on editable div
   * @param wysiwygDiv
   * @param editableDiv
   */
  addEventsListenersEditableDiv(wysiwygDiv, editableDiv) {
    editableDiv.addEventListener('keydown', (event) => {
      if(event.keyCode === 13 && !event.shiftKey) {
        document.execCommand('defaultParagraphSeparator', false, 'p');
      }

      this.options.mode === 'standard' ? RibsWysiwygUtils.refreshCaretLocationDiv() : null;
    });

    editableDiv.addEventListener('click', () => {
      const caretPosition = RibsWysiwygUtils.getCaretPosition();
      const lastPosition = caretPosition[caretPosition.length - 1];

      if (lastPosition === undefined) {
        document.execCommand('formatBlock', false, 'p');
      }

      if (this.options.mode === 'inline') {
        if (editableDiv.id !== 'ribs-wysiwyg-editableDiv-current' && document.getElementById('ribs-wysiwyg-toolbar')) {
          document.getElementById('ribs-wysiwyg-toolbar').remove();
        }
      }

      if (this.options.mode === 'inline' && !document.getElementById('ribs-wysiwyg-toolbar')) {
        const currentEditable = document.getElementById('ribs-wysiwyg-editableDiv-current');
        currentEditable ? currentEditable.removeAttribute('id') : null;
        editableDiv.id = 'ribs-wysiwyg-editableDiv-current';
        this.initToolbar(wysiwygDiv, editableDiv, 'inline');
      } else {
        RibsWysiwygUtils.refreshCaretLocationDiv();
      }
    });

    if (this.options.mode === 'inline') {
    } else {
      this.initToolbar(wysiwygDiv, editableDiv);
    }
  }

  /**
   * method to init toolbar
   */
  initToolbar(wysiwygDiv, editableDiv, mode = null) {
    const toolbarDiv = document.createElement('div');
    toolbarDiv.id = 'ribs-wysiwyg-toolbar';
    if (mode === null) {
      wysiwygDiv.prepend(toolbarDiv)
    } else {
      toolbarDiv.classList.add('inline');
      const parentDiv = wysiwygDiv.parentElement;
      parentDiv.insertBefore(toolbarDiv, wysiwygDiv);
    }

    for (let plugin of this.options.toolbar) {
      if (plugin === '|') {
        const boldMenu = document.createElement('div');
        boldMenu.classList.add('ribs-wysiwyg-toolbar-separator');
        toolbarDiv.append(boldMenu);
      } else {
        (require(`./Plugins/${plugin}.js`)).launchClass(toolbarDiv, editableDiv, this.options);
      }
    }
  }
}

export default RibsWysiwyg;
