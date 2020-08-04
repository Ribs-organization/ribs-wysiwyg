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
    this.addUndoEventListener();
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
      undoMenu.classList.add('disabled');
      undoMenu.innerHTML = undoType;
      undoMenu.addEventListener('click', (event) => this.undoRedo(event, undoType));
      div.append(undoMenu);
      this.toolbarDiv.append(div);
      sessionStorage.removeItem('undoCount');
      sessionStorage.removeItem('redoCount');
    }
  }

  /**
   * method to put text in undoRedo and disabled or enable button in toolbar
   */
  undoRedo(event, undoType) {
    if (event.target.classList.contains('disabled')) {
      return
    }

    if (undoType === 'Undo') {
      sessionStorage.setItem('undoCount', parseInt(sessionStorage.getItem('undoCount')) - 1);
      sessionStorage.setItem('redoCount', parseInt((sessionStorage.getItem('redoCount') ? sessionStorage.getItem('redoCount') : 0)) + 1);
      if (parseInt(sessionStorage.getItem('undoCount')) === 0) {
        event.target.classList.add('disabled');
      }
      if (parseInt(sessionStorage.getItem('redoCount')) > 0) {
        const redoMenu = document.getElementById('ribs-wysiwyg-toolbar-undoRedo-Redo');
        redoMenu.classList.remove('disabled');
      }
    }

    if (undoType === 'Redo') {
      sessionStorage.setItem('redoCount', parseInt(sessionStorage.getItem('redoCount')) - 1);
      sessionStorage.setItem('undoCount', parseInt((sessionStorage.getItem('undoCount') ? sessionStorage.getItem('undoCount') : 0)) + 1);
      if (parseInt(sessionStorage.getItem('redoCount')) === 0) {
        event.target.classList.add('disabled');
      }
      if (parseInt(sessionStorage.getItem('undoCount')) > 0) {
        const redoMenu = document.getElementById('ribs-wysiwyg-toolbar-undoRedo-Undo');
        redoMenu.classList.remove('disabled');
      }
    }

    document.execCommand(undoType);
    this.editableDiv.focus();
    RibsWysiwygUtils.refreshCaretLocationDiv();
  }

  /**
   * method to add event listener on keydown to store value in sessionStorage of redo and undo count
   */
  addUndoEventListener() {
    this.editableDiv.addEventListener('keydown', () => {
      const undoValue = sessionStorage.getItem('undoCount');
      sessionStorage.setItem('undoCount', parseInt(undoValue ? undoValue : 0) + 1);
      
      sessionStorage.setItem('redoCount', 0);
      const redoMenu = document.getElementById('ribs-wysiwyg-toolbar-undoRedo-Redo');
      redoMenu.classList.remove('disabled');

      if (undoValue) {
        const undoMenu = document.getElementById('ribs-wysiwyg-toolbar-undoRedo-Undo');
        undoMenu.classList.remove('disabled');
      }
    });
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

export default {launchClass};
