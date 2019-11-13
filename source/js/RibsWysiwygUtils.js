class RibsWysiwygUtils {
  /**
   * method to get current selected text
   * @returns {string}
   */
  static getSelectionText() {
    return window.getSelection().toString();
  }
}

export default RibsWysiwygUtils;
