import RibsWysiwygUtils from "../RibsWysiwygUtils";
import RibsPopup from "ribs-popup/source/js/ribs-popup";
import RibsPopupCss from 'ribs-popup/dist/css/style.min.css';

class Link {
  /**
   * method to initialize Link plugin
   * @param toolbarDiv
   * @param editableDiv
   * @param options
   */
  constructor(toolbarDiv, editableDiv, options) {
    this.toolbarDiv = toolbarDiv;
    this.editableDiv = editableDiv;
    this.ribsPopup = new RibsPopup();
    this.addButtonToToolbar();
    this.createPopup();

    const head  = document.getElementsByTagName('head')[0];
    const style  = document.createElement('style');
    style.innerText = RibsPopupCss.toString();
    head.appendChild(style);
  }

  /**
   * method to add link button to toolbar
   */
  addButtonToToolbar() {
    const div = document.createElement('div');
    const linkMenu = document.createElement('button');
    linkMenu.id = 'ribs-wysiwyg-toolbar-link';
    linkMenu.innerHTML = '<span>Link</span>';
    linkMenu.addEventListener('click', () => this.showPopup());
    div.append(linkMenu);
    this.toolbarDiv.append(div);
  }

  /**
   * method to create div for inputs of popup
   * @param id
   * @param label
   * @returns {HTMLDivElement}
   */
  createInputPopup(id, label) {
    const inputDiv = document.createElement('div');
    const labelElement = document.createElement('label');
    labelElement.innerText = label;
    labelElement.for = id;
    const input = document.createElement('input');
    input.id = id;
    input.name = id;
    inputDiv.appendChild(labelElement);
    inputDiv.appendChild(input);

    return inputDiv;
  }

  /**
   * method to create set content div
   * @returns {HTMLDivElement}
   */
  createContentDivPopup() {
    const setContentDiv = document.createElement('div');
    setContentDiv.id = 'set-content';

    const urlDiv = this.createInputPopup('ribs-wysiwyg-link-url', 'URL');
    const DisplayTextDiv = this.createInputPopup('ribs-wysiwyg-link-text', 'Text to display');
    const TitleDiv = this.createInputPopup('ribs-wysiwyg-link-title', 'Title');

    setContentDiv.appendChild(urlDiv);
    setContentDiv.appendChild(DisplayTextDiv);
    setContentDiv.appendChild(TitleDiv);

    return setContentDiv;
  }

  /**
   * method to create links div
   * @returns {HTMLDivElement}
   */
  createLinksDivPopup() {
    const linkDiv = document.createElement('div');
    linkDiv.classList.add('link');
    const cancelLink = document.createElement('a');
    cancelLink.classList.add('cancel');
    cancelLink.dataset.close = '';
    cancelLink.innerText = 'Close';
    linkDiv.appendChild(cancelLink);
    const validateLink = document.createElement('a');
    validateLink.classList.add('validate');
    validateLink.innerText = 'Validate';
    linkDiv.appendChild(validateLink);

    return linkDiv;
  }

  /**
   * method to create popup element and append it to the dom
   */
  createPopup() {
    const popupDiv = document.createElement('div');
    popupDiv.id = 'ribs-wysiwyg-link-popup';
    popupDiv.classList.add('ribs-popup');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const setContentDiv = this.createContentDivPopup();
    const linkDiv = this.createLinksDivPopup();

    const clearDiv = document.createElement('div');
    clearDiv.classList.add('clear');

    contentDiv.appendChild(setContentDiv);
    contentDiv.appendChild(linkDiv);
    contentDiv.appendChild(clearDiv);
    popupDiv.appendChild(contentDiv);

    document.getElementById('ribs-wysiwyg-container').appendChild(popupDiv);
  }

  /**
   * method to show popup
   */
  showPopup() {
    this.ribsPopup.openJsPopup('ribs-wysiwyg-link-popup');
  }

  /**
   * method to put text in link
   */
  setTextToLink() {
    document.execCommand('createLink');
    this.editableDiv.focus();
    RibsWysiwygUtils.refreshCaretLocationDiv();
  }
}

/**
 * function to load Link class
 * @param toolbarDiv
 * @param editableDiv
 * @param options
 */
function launchClass(toolbarDiv, editableDiv, options) {
  const link = new Link(toolbarDiv, editableDiv, options);
}

module.exports = {launchClass};
