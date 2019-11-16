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
    const selection = window.getSelection();

    if (selection.rangeCount) {
      const selectionContent = selection.toString();
      const range = selection.getRangeAt(0);
      range.deleteContents();

      const boldElement = document.createElement('strong');
      boldElement.textContent = selectionContent;

      range.insertNode(boldElement);
    }
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
