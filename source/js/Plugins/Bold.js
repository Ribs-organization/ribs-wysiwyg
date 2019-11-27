import RibsWysiwygUtils from "../RibsWysiwygUtils";

class Bold {
  /**
   * method to initialize Bold plugin
   * @param toolbarDiv
   * @param editableDiv
   */
  constructor(toolbarDiv, editableDiv) {
    this.toolbarDiv = toolbarDiv;
    this.editableDiv = editableDiv;
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
    this.editableDiv.focus();
    RibsWysiwygUtils.refreshCaretLocationDiv();
  }
}

/**
 * function to load Bold class
 * @param toolbarDiv
 * @param editableDiv
 */
function launchClass(toolbarDiv, editableDiv) {
  const bold = new Bold(toolbarDiv, editableDiv);
}

module.exports = {launchClass};
