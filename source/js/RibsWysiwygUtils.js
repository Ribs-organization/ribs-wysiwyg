class RibsWysiwygUtils {
  /**
   * method to get current target position as array
   * @returns {array}
   */
  static getCaretPosition() {
    if (window.getSelection && window.getSelection().getRangeAt && window.getSelection().anchorNode) {
      const editableDiv = document.getElementById('ribs-wysiwyg-editable');
      let element = window.getSelection().anchorNode;
      const breadcrumbs = [];

      for ( ; element && element !== editableDiv; element = element.parentNode) {
        if (element.tagName !== undefined) {
          breadcrumbs.push(element.tagName.toLowerCase());
        }
      }
      return breadcrumbs.reverse();
    }

    return [];
  }

  /**
   * method to get current target position as string
   * @returns {string}
   */
  static getCaretPositionAsString() {
    const arrayCaret = this.getCaretPosition();

    if (arrayCaret.length) {
      return arrayCaret.join(' > ');
    }

    return '';
  }

  /**
   * method to refresh caret location div content
   */
  static refreshCaretLocationDiv() {
    const caretLocationDiv = document.getElementById('ribs-wysiwyg-caret-location');
    caretLocationDiv.innerHTML = RibsWysiwygUtils.getCaretPositionAsString();
  }

  /**
   * save current selection of contentn editable
   * @returns {null|[]|Range}
   */
  static saveSelection() {
    if (window.getSelection) {
      const selection = window.getSelection();
      if (selection.getRangeAt && selection.rangeCount) {
        const ranges = [];
        for (let i = 0, length = selection.rangeCount; i < length; ++i) {
          ranges.push(selection.getRangeAt(i));
        }
        return ranges;
      }
    } else if (document.selection && document.selection.createRange) {
      return document.selection.createRange();
    }
    return null;
  }

  /**
   * restore a given selection
   * @param currentSelection
   */
  static restoreSelection(currentSelection) {
    if (currentSelection) {
      if (window.getSelection) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        for (let i = 0, length = currentSelection.length; i < length; ++i) {
          selection.addRange(currentSelection[i]);
        }
      } else if (document.selection && currentSelection.select) {
        currentSelection.select();
      }
    }
  }
}

export default RibsWysiwygUtils;
