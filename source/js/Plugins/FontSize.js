class FontSize {
  /**
   * method to initialize Bold plugin
   * @param toolbarDiv
   * @param editableDiv
   * @param options
   */
  constructor(toolbarDiv, editableDiv, options) {
    this.toolbarDiv = toolbarDiv;
    this.editableDiv = editableDiv;
    this.options = options;
    this.addButtonToToolbar();
  }

  /**
   * method to add bold button to toolbar
   */
  addButtonToToolbar() {
    const fontSizeMenu = document.createElement('select');
    fontSizeMenu.id = 'ribs-wysiwyg-toolbar-fontsize';
    fontSizeMenu.addEventListener('click', (event) => {
    });
    this.toolbarDiv.append(fontSizeMenu);
    for (const fontSize of this.options.fontSize) {
      const option = document.createElement('option');
      option.text = `${fontSize}px`;
      fontSizeMenu.add(option);
    }
  }
}

/**
 * function to load Bold class
 * @param toolbarDiv
 * @param editableDiv
 * @param options
 */
function launchClass(toolbarDiv, editableDiv, options) {
  const fontSize = new FontSize(toolbarDiv, editableDiv, options);
}

module.exports = {launchClass};
