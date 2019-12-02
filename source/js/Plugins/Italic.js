import RibsWysiwygUtils from "../RibsWysiwygUtils";

class Italic {
  /**
   * method to initialize Italic plugin
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
   * method to add italic button to toolbar
   */
  addButtonToToolbar() {
    const div = document.createElement('div');
    const italicMenu = document.createElement('button');
    italicMenu.id = 'ribs-wysiwyg-toolbar-italic';
    italicMenu.innerHTML = '<span style="font-style: italic">I</span>';
    italicMenu.addEventListener('click', () => this.setTextToItalic());
    div.append(italicMenu);
    this.toolbarDiv.append(div);
  }

  /**
   * method to put text in italic
   */
  setTextToItalic() {
    document.execCommand('italic');
    this.editableDiv.focus();
    RibsWysiwygUtils.refreshCaretLocationDiv();
  }
}

/**
 * function to load Italic class
 * @param toolbarDiv
 * @param editableDiv
 * @param options
 */
function launchClass(toolbarDiv, editableDiv, options) {
  const italic = new Italic(toolbarDiv, editableDiv, options);
}

module.exports = {launchClass};
