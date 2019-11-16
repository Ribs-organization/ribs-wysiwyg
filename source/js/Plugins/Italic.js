class Italic {
  /**
   * method to initialize Italic plugin
   * @param toolbarDiv
   */
  constructor(toolbarDiv) {
    this.toolbarDiv = toolbarDiv;
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
    const selection = window.getSelection();

    if (selection.rangeCount) {
      const selectionContent = selection.toString();
      const range = selection.getRangeAt(0);
      range.deleteContents();

      const italicElement = document.createElement('em');
      italicElement.textContent = selectionContent;

      range.insertNode(italicElement);
    }
  }
}

/**
 * function to load Italic class
 * @param toolbarDiv
 */
function launchClass(toolbarDiv) {
  const italic = new Italic(toolbarDiv);
}

module.exports = {launchClass};
