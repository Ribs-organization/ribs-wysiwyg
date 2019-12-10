import RibsWysiwygUtils from "../RibsWysiwygUtils";

class IndentOutdent {
  /**
   * method to initialize IndentOutdent plugin
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
   * method to add indentOutdent button to toolbar
   */
  addButtonToToolbar() {
    const indents = ['Indent', 'Outdent'];

    for (const indentType of indents) {
      const div = document.createElement('div');
      const indentMenu = document.createElement('button');
      indentMenu.id = `ribs-wysiwyg-toolbar-indentOutdent-${indentType}`;
      if (indentType === 'Outdent') {
        indentMenu.classList.add('disabled');
      }
      indentMenu.innerHTML = indentType;
      indentMenu.addEventListener('click', (event) => this.indentOutdent(event, indentType));
      div.append(indentMenu);
      this.toolbarDiv.append(div);
      sessionStorage.removeItem('indentCount');
      sessionStorage.removeItem('outdentCount');
    }
  }

  /**
   * method indent or outdent an element
   */
  indentOutdent(event, indentType) {
    if (indentType === 'Indent') {
      sessionStorage.setItem('outdentCount', parseInt((sessionStorage.getItem('outdentCount') ? sessionStorage.getItem('outdentCount') : 0)) + 1);
    } else {
      if (sessionStorage.getItem('outdentCount') > 0) {
        sessionStorage.setItem('outdentCount', parseInt((sessionStorage.getItem('outdentCount') ? sessionStorage.getItem('outdentCount') : 0)) - 1);
      }
    }

    const outdentMenu = document.getElementById('ribs-wysiwyg-toolbar-indentOutdent-Outdent');
    if (parseInt(sessionStorage.getItem('outdentCount')) > 0) {
      outdentMenu.classList.remove('disabled');
    } else {
      outdentMenu.classList.add('disabled')
    }

    document.execCommand(indentType);
    this.editableDiv.focus();
    RibsWysiwygUtils.refreshCaretLocationDiv();
  }
}

/**
 * function to load IndentOutdent class
 * @param toolbarDiv
 * @param editableDiv
 * @param options
 */
function launchClass(toolbarDiv, editableDiv, options) {
  const indentOutdent = new IndentOutdent(toolbarDiv, editableDiv, options);
}

module.exports = {launchClass};
