import RibsWysiwygUtils from "../RibsWysiwygUtils";

class UndoRedo {
  /**
   * method to initialize UndoRedo plugin
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
   * method to add undoRedo button to toolbar
   */
  addButtonToToolbar() {
    const undos = ['Undo', 'Redo'];

    for (const undoType of undos) {
      const div = document.createElement('div');
      const undoMenu = document.createElement('button');
      undoMenu.id = `ribs-wysiwyg-toolbar-undoRedo-${undoType}`;
      undoMenu.innerHTML = undoType;
      undoMenu.addEventListener('click', () => this.undoRedo(undoType));
      div.append(undoMenu);
      this.toolbarDiv.append(div);
    }
  }

  /**
   * method to put text in undoRedo
   */
  undoRedo(undoType) {
    document.execCommand(undoType);
    this.editableDiv.focus();
    RibsWysiwygUtils.refreshCaretLocationDiv();
  }
}

/**
 * function to load UndoRedo class
 * @param toolbarDiv
 * @param editableDiv
 * @param options
 */
function launchClass(toolbarDiv, editableDiv, options) {
  const undoRedo = new UndoRedo(toolbarDiv, editableDiv, options);
}

module.exports = {launchClass};
