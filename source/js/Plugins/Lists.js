import RibsWysiwygUtils from "../RibsWysiwygUtils";

class Lists {
  /**
   * method to initialize Lists plugin
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
   * method to add lists button to toolbar
   */
  addButtonToToolbar() {
    const lists = ['OrderedList', 'UnorderedList'];

    for (const listType of lists) {
      const div = document.createElement('div');
      const indentMenu = document.createElement('button');
      indentMenu.id = `ribs-wysiwyg-toolbar-lists-${listType}`;
      indentMenu.innerHTML = listType;
      indentMenu.addEventListener('click', () => this.createLists(listType));
      div.append(indentMenu);
      this.toolbarDiv.append(div);
    }
  }

  /**
   * method create list element
   */
  createLists(listType) {
    document.execCommand(`insert${listType}`);
    this.editableDiv.focus();
    RibsWysiwygUtils.refreshCaretLocationDiv();
  }
}

/**
 * function to load Lists class
 * @param toolbarDiv
 * @param editableDiv
 * @param options
 */
function launchClass(toolbarDiv, editableDiv, options) {
  const lists = new Lists(toolbarDiv, editableDiv, options);
}

export default {launchClass};
