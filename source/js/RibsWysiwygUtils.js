class RibsWysiwygUtils {
  /**
   * method to get current selected text
   * @returns {string}
   */
  static getSelectionText() {
    return window.getSelection().toString();
  }

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
          breadcrumbs.push(element.tagName);
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
}

export default RibsWysiwygUtils;
