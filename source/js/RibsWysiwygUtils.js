class RibsWysiwygUtils {
  /**
   * method to get current selected text
   * @returns {string}
   */
  static getSelectionText() {
    return window.getSelection().toString();
  }

  /**
   * method to get current target position as string
   * @returns {string|null}
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
      return breadcrumbs.reverse().join(' > ');
    }

    return null;
  }
}

export default RibsWysiwygUtils;
