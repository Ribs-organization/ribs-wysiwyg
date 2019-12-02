import RibsWysiwygUtils from "../RibsWysiwygUtils";

class Justify {
  /**
   * method to initialize Justify plugin
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
   * method to add justify buttons to toolbar
   */
  addButtonToToolbar() {
    const justifyTypes = ['Left', 'Center', 'Right', 'Full'];

    for (const justifyType of justifyTypes) {
      const justifyMenu = document.createElement('button');
      justifyMenu.id = `ribs-wysiwyg-toolbar-justify-${justifyType}`;
      justifyMenu.innerHTML = justifyType;
      justifyMenu.addEventListener('click', () => this.setTextToJustify(justifyType));
      this.toolbarDiv.append(justifyMenu);
    }
  }

  /**
   * method to put text in justify
   */
  setTextToJustify(justifyType) {
    document.execCommand(`justify${justifyType}`);
    this.editableDiv.focus();
    RibsWysiwygUtils.refreshCaretLocationDiv();
  }
}

/**
 * function to load Justify class
 * @param toolbarDiv
 * @param editableDiv
 * @param options
 */
function launchClass(toolbarDiv, editableDiv, options) {
  const justify = new Justify(toolbarDiv, editableDiv, options);
}

module.exports = {launchClass};
