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
    this.defineOptions();
    this.addButtonToToolbar();
    this.addSelectEventListener('click');
    this.addSelectEventListener('keydown');
  }

  /**
   * method to add bold button to toolbar
   */
  addButtonToToolbar() {
    const div = document.createElement('div');
    const blocksMenu = document.createElement('select');
    blocksMenu.id = 'ribs-wysiwyg-toolbar-blocks';
    blocksMenu.addEventListener('change', (event) => this.changeBlock(event));
    div.append(blocksMenu);
    this.toolbarDiv.append(div);

    for (const block in this.options.blocks) {
      const option = document.createElement('option');
      option.text = `${this.options.blocks[block]}`;
      option.value = `${block}`;
      blocksMenu.add(option);
      this.blocksMenu = blocksMenu;
    }
  }

  defineOptions() {
    if (!this.options.blocks) {
      this.options.blocks = {
        'p': 'Paragraph',
        'h1': 'Heading 1',
        'h2': 'Heading 2',
        'h3': 'Heading 3',
        'h4': 'Heading 4',
        'h5': 'Heading 5',
        'h6': 'Heading 6',
      };
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
