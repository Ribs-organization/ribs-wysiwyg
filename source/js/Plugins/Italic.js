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
    this.addItalicButtonToToolbar();
  }

  /**
   * method to add italic button to toolbar
   */
  addItalicButtonToToolbar() {
    const italicMenu = document.createElement('button');
    italicMenu.id = 'ribs-wysiwyg-toolbar-italic';
    italicMenu.textContent = 'I';
    italicMenu.addEventListener('click', (event) => {
      this.setTextToItalic();
    });
    this.toolbarDiv.append(italicMenu);
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
