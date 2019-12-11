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
      indentMenu.addEventListener('click', () => this.indentOutdent(indentType));
      div.append(indentMenu);
      this.toolbarDiv.append(div);
    }
  }

  /**
   * method indent or outdent an element
   */
  indentOutdent(indentType) {
    const outdentMenu = document.getElementById('ribs-wysiwyg-toolbar-indentOutdent-Outdent');
    const parentElement = window.getSelection().anchorNode.parentElement;

    if (parentElement) {
      let marginLeft = parentElement.style.marginLeft.split('px')[0];
      marginLeft = parseInt(marginLeft) ? parseInt(marginLeft) : 0;

      if (indentType === 'Indent') {
        parentElement.style.marginLeft = `${marginLeft+40}px`;
        outdentMenu.classList.remove('disabled')
      } else if (indentType === 'Outdent' && marginLeft > 0) {
        const newMarginLeft = marginLeft-40;
        parentElement.style.marginLeft = `${newMarginLeft}px`;

        if (newMarginLeft === 0) {
          outdentMenu.classList.add('disabled')
        }
      }
    }

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
