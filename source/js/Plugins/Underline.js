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
    const div = document.createElement('div');
    const underlineMenu = document.createElement('button');
    underlineMenu.id = 'ribs-wysiwyg-toolbar-underline';
    underlineMenu.innerHTML = '<span style="text-decoration: underline">U</span>';
    underlineMenu.addEventListener('click', () => this.setTextToUnderline());
    div.append(underlineMenu);
    this.toolbarDiv.append(div);
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
