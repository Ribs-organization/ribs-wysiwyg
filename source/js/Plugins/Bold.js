class Bold {
  /**
   * method to initialize Bold plugin
   * @param toolbarDiv
   */
  constructor(toolbarDiv) {
    this.toolbarDiv = toolbarDiv;
    this.addBoldButtonToToolbar();
  }

  /**
   * method to add bold button to toolbar
   */
  addBoldButtonToToolbar() {
    const boldMenu = document.createElement('button');
    boldMenu.id = 'ribs-wysiwyg-toolbar-bold';
    boldMenu.textContent = 'B';
    boldMenu.addEventListener('click', (event) => {
      this.setTextToBold();
    });
    this.toolbarDiv.append(boldMenu);
  }

  /**
   * method to put text in bold
   */
  setTextToBold() {
    document.execCommand('bold');
  }
}

/**
 * function to load Bold class
 * @param toolbarDiv
 */
function launchClass(toolbarDiv) {
  const bold = new Bold(toolbarDiv);
}

module.exports = {launchClass};
