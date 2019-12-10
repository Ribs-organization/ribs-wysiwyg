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
    validateLink.dataset.linkValidate = '';
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

    this.popup = document.getElementById('ribs-wysiwyg-link-popup');
    this.addEventsOnInputs();
  }

  /**
   * method to show popup
   */
  showPopup() {
    this.selection = RibsWysiwygUtils.saveSelection();
    this.createPopup();
    this.ribsPopup.openJsPopup('ribs-wysiwyg-link-popup');

    const dataValidate = this.popup.querySelectorAll('.ribs-popup [data-link-validate]');

    if (dataValidate.length > 0) {
      Array.from(dataValidate).forEach((element) => {
        element.addEventListener('click', (event) => this.addEventValidate());
      });
    }
  }

  /**
   * add eventson input for url and text. If enter text in url
   * it is duplicated in text input if empty
   */
  addEventsOnInputs() {
    const inputUrl = document.getElementById('ribs-wysiwyg-link-url');
    const inputText = document.getElementById('ribs-wysiwyg-link-text');
    let nullText = false;

    inputUrl.addEventListener('keyup', (event) => {
      if (inputText.value === '') {
        nullText = true
      }
      if (nullText) {
        inputText.value = inputUrl.value;
      }
    });

    inputText.addEventListener('keyup', (event) => {
      if (inputText.value !== inputUrl.value) {
        nullText = false;
      }
    });
  }

  /**
   * method to put text in link
   */
  addEventValidate() {
    const inputUrl = document.getElementById('ribs-wysiwyg-link-url');
    const inputText = document.getElementById('ribs-wysiwyg-link-text');
    const inputTitle = document.getElementById('ribs-wysiwyg-link-title');

    if (!inputUrl.value) {
      this.ribsPopup.closePopup(event);
    } else {
      RibsWysiwygUtils.restoreSelection(this.selection);
      document.execCommand('createLink', false, inputUrl.value);
      this.ribsPopup.closePopup(event);
    }

    this.editableDiv.focus();
    RibsWysiwygUtils.refreshCaretLocationDiv();
    document.getElementById(this.popup.id).remove();
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
