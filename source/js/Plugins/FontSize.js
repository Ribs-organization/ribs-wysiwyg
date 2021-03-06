class FontSize {
  /**
   * method to initialize FontSize plugin
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
    const fontSizeMenu = document.createElement('select');
    fontSizeMenu.id = 'ribs-wysiwyg-toolbar-fontsize';
    fontSizeMenu.addEventListener('change', (event) => this.changeFontSize(event));
    div.append(fontSizeMenu);
    this.toolbarDiv.append(div);

    const bodyFontSize = window.getComputedStyle(document.querySelector('body'), null).getPropertyValue('font-size');

    for (const fontSize of this.options.fontSize) {
      const option = document.createElement('option');

      if (parseInt(fontSize) === parseInt(bodyFontSize)) {
        option.selected = true;
        option.dataset.default = true;
      }

      option.text = `${fontSize}px`;
      option.value = `${fontSize}px`;
      fontSizeMenu.add(option);
      this.fontSizeMenu = fontSizeMenu;
    }

    const defaultValue = this.fontSizeMenu.querySelector('[data-default]');
    if (!defaultValue) {
      const option = this.fontSizeMenu.querySelector('option:first-of-type');
      option.selected = true;
      option.dataset.default = true;
    }
  }

  /**
   * define options of the plugin
   */
  defineOptions() {
    if (!this.options.fontSize) {
      this.options.fontSize = [8, 10, 12, 14, 16, 18, 24, 36];
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

        if (element && element && element.parentNode !== undefined && element.parentNode.style && element.parentNode.style.fontSize) {
          this.fontSizeMenu.value = element.parentNode.style.fontSize;
        } else {
          this.fontSizeMenu.value = this.fontSizeMenu.querySelector('[data-default]').value;
        }
      }
    });
  }

  /**
   * method to replace create font element by a span
   * @param fontElement
   * @param fontSize
   */
  replaceFontBySpan(fontElement, fontSize) {
    const parentDiv = fontElement.parentNode;
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(fontElement.textContent));
    span.style.fontSize = fontSize;

    parentDiv.replaceChild(span, fontElement);

    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(this.editableDiv);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
    this.editableDiv.focus();
    range.detach();
  }

  /**
   * method to change font size of current selection
   * @param event
   */
  changeFontSize(event) {
    this.editableDiv.focus();
    document.execCommand("fontSize", false, '1');
    const fontSize = event.currentTarget.value;
    const fontElement = document.getElementsByTagName('font')[0];

    if (!fontElement) {
      this.editableDiv.addEventListener('keydown', () => {
        const fontElement = document.getElementsByTagName('font')[0];
        this.replaceFontBySpan(fontElement, fontSize);
      });
    } else {
      this.replaceFontBySpan(fontElement, fontSize);
    }
  }
}

/**
 * function to load FontSize class
 * @param toolbarDiv
 * @param editableDiv
 * @param options
 */
function launchClass(toolbarDiv, editableDiv, options) {
  const fontSize = new FontSize(toolbarDiv, editableDiv, options);
}

export default {launchClass};
