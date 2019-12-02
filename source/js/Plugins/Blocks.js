import RibsWysiwygUtils from "../RibsWysiwygUtils";

class Blocks {
  /**
   * method to initialize Blocks plugin
   * @param toolbarDiv
   * @param editableDiv
   * @param options
   */
  constructor(toolbarDiv, editableDiv, options) {
    this.toolbarDiv = toolbarDiv;
    this.editableDiv = editableDiv;
    this.options = options;
    this.addButtonToToolbar();
    this.addSelectEventListener('click');
    this.addSelectEventListener('keydown');
  }

  /**
   * method to add bold button to toolbar
   */
  addButtonToToolbar() {
    const blocksMenu = document.createElement('select');
    blocksMenu.id = 'ribs-wysiwyg-toolbar-blocks';
    blocksMenu.addEventListener('change', (event) => this.changeBlock(event));
    this.toolbarDiv.append(blocksMenu);

    for (const block in this.options.blocks) {
      const option = document.createElement('option');
      option.text = `${this.options.blocks[block]}`;
      option.value = `${block}`;
      blocksMenu.add(option);
      this.blocksMenu = blocksMenu;
    }
  }

  /**
   * add event to change value of font size selected
   * @param triggerEvent
   */
  addSelectEventListener(triggerEvent) {
    this.editableDiv.addEventListener(triggerEvent, () => {
      if (window.getSelection && window.getSelection().getRangeAt && window.getSelection().anchorNode) {
        let element = window.getSelection().anchorNode;

        if (element && element && element.parentNode && this.options.blocks.hasOwnProperty(element.parentNode.tagName.toLowerCase()) >= 0) {
          this.blocksMenu.value = element.parentNode.tagName.toLowerCase();
        }
      }
    });
  }

  /**
   * method to change current element by selected block
   * @param event
   */
  changeBlock(event) {
    document.execCommand('formatBlock', false, `<${event.currentTarget.value}>`);
    this.editableDiv.focus();
    RibsWysiwygUtils.refreshCaretLocationDiv();
  }
}

/**
 * function to load Blocks class
 * @param toolbarDiv
 * @param editableDiv
 * @param options
 */
function launchClass(toolbarDiv, editableDiv, options) {
  const blocks = new Blocks(toolbarDiv, editableDiv, options);
}

module.exports = {launchClass};
