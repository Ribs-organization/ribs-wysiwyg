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
    document.execCommand('italic');
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
