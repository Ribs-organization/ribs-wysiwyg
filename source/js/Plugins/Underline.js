import RibsWysiwygUtils from "../RibsWysiwygUtils";

class Underline {
  /**
   * method to initialize Underline plugin
   * @param toolbarDiv
   * @param editableDiv
   * @param options
   */
  constructor(toolbarDiv, editableDiv, options) {
    this.toolbarDiv = toolbarDiv;
    this.editableDiv = editableDiv;
    this.addButtonToToolbar();
  }

  /**
   * method to add underline button to toolbar
   */
  addButtonToToolbar() {
    const underlineMenu = document.createElement('button');
    underlineMenu.id = 'ribs-wysiwyg-toolbar-underline';
    underlineMenu.textContent = 'U';
    underlineMenu.addEventListener('click', () => this.setTextToUnderline());
    this.toolbarDiv.append(underlineMenu);
  }

  /**
   * method to put text in underline
   */
  setTextToUnderline() {
    document.execCommand('underline');
    this.editableDiv.focus();
    RibsWysiwygUtils.refreshCaretLocationDiv();
  }
}

/**
 * function to load Underline class
 * @param toolbarDiv
 * @param editableDiv
 * @param options
 */
function launchClass(toolbarDiv, editableDiv, options) {
  const underline = new Underline(toolbarDiv, editableDiv, options);
}

module.exports = {launchClass};
