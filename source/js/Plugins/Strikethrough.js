import RibsWysiwygUtils from "../RibsWysiwygUtils";

class Strikethrough {
  /**
   * method to initialize Strikethrough plugin
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
   * method to add strikethrough button to toolbar
   */
  addButtonToToolbar() {
    const div = document.createElement('div');
    const strikethroughMenu = document.createElement('button');
    strikethroughMenu.id = 'ribs-wysiwyg-toolbar-strikethrough';
    strikethroughMenu.innerHTML = '<span style="text-decoration: line-through">S</span>';
    strikethroughMenu.addEventListener('click', () => this.setTextToStrikethrough());
    div.append(strikethroughMenu);
    this.toolbarDiv.append(div);
  }

  /**
   * method to put text in strikethrough
   */
  setTextToStrikethrough() {
    document.execCommand('strikethrough');
    this.editableDiv.focus();
    RibsWysiwygUtils.refreshCaretLocationDiv();
  }
}

/**
 * function to load Strikethrough class
 * @param toolbarDiv
 * @param editableDiv
 * @param options
 */
function launchClass(toolbarDiv, editableDiv, options) {
  const strikethrough = new Strikethrough(toolbarDiv, editableDiv, options);
}

module.exports = {launchClass};
