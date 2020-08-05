!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}([function(e,t,n){"use strict";var o=n(1),i=n.n(o),r=n(2),a=n.n(r),s=function(){function e(){i()(this,e)}return a()(e,null,[{key:"getCaretPosition",value:function(){if(window.getSelection&&window.getSelection().getRangeAt&&window.getSelection().anchorNode){for(var e=document.getElementById("ribs-wysiwyg-editable"),t=window.getSelection().anchorNode,n=[];t&&t!==e;t=t.parentNode)void 0!==t.tagName&&n.push(t.tagName.toLowerCase());return n.reverse()}return[]}},{key:"getCaretPositionAsString",value:function(){var e=this.getCaretPosition();return e.length?e.join(" > "):""}},{key:"refreshCaretLocationDiv",value:function(){var t=document.getElementById("ribs-wysiwyg-caret-location");t&&(t.innerHTML=e.getCaretPositionAsString())}},{key:"saveSelection",value:function(){if(window.getSelection){var e=window.getSelection();if(e.getRangeAt&&e.rangeCount){for(var t=[],n=0,o=e.rangeCount;n<o;++n)t.push(e.getRangeAt(n));return t}}else if(document.selection&&document.selection.createRange)return document.selection.createRange();return null}},{key:"restoreSelection",value:function(e){if(e)if(window.getSelection){var t=window.getSelection();t.removeAllRanges();for(var n=0,o=e.length;n<o;++n)t.addRange(e[n])}else document.selection&&e.select&&e.select()}},{key:"getSelectionText",value:function(){var e="";return window.getSelection?e=window.getSelection().toString():document.selection&&"Control"!=document.selection.type&&(e=document.selection.createRange().text),e}}]),e}();t.a=s},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},function(e,t,n){"use strict";var o=n(1),i=n.n(o),r=n(2),a=n.n(r),s=n(0);function d(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,r=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw r}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i()(this,e),t.selector?document.querySelector(t.selector)?(this.defineOptions(t),t.mode&&"inline"===t.mode?this.initWysiwygInlineDivs():(this.selector=document.querySelector(t.selector),this.initWysiwygDivs())):console.error("Selector can't be found in document"):console.error("Selector is mandatory")}return a()(e,[{key:"defineOptions",value:function(e){e.height||(e.height="200px"),e.mode||(e.mode="standard"),e.toolbar?e.toolbar=e.toolbar.split(" "):e.toolbar=["UndoRedo","|","Justify","|","IndentOutdent","|","Lists","|","Bold","Italic","Underline","Strikethrough","|","FontSize","Blocks","|","Link"],this.options=e}},{key:"initWysiwygDivs",value:function(){this.selector.style.display="none";var e=document.createElement("div");e.id="ribs-wysiwyg-container",this.selector.parentNode.prepend(e);var t=document.createElement("div");t.id="ribs-wysiwyg-editable",e.append(t),t.style.height=Number.isInteger(this.options.height)?"".concat(this.options.height,"px"):this.options.height,t.contentEditable=!0;var n=document.createElement("div");n.id="ribs-wysiwyg-caret-location",e.append(n),this.addEventsListenersEditableDiv(e,t),t.innerHTML=this.selector.value}},{key:"initWysiwygInlineDivs",value:function(){var e=this;document.querySelectorAll(this.options.selector).forEach((function(t){t.contentEditable=!0,e.addEventsListenersEditableDiv(t,t)}))}},{key:"addEventsListenersEditableDiv",value:function(e,t){var n=this;t.addEventListener("keydown",(function(e){13!==e.keyCode||e.shiftKey||document.execCommand("defaultParagraphSeparator",!1,"p"),"standard"===n.options.mode&&s.a.refreshCaretLocationDiv()})),t.addEventListener("click",(function(){var o=s.a.getCaretPosition();if(void 0===o[o.length-1]&&document.execCommand("formatBlock",!1,"p"),"inline"===n.options.mode&&"ribs-wysiwyg-editableDiv-current"!==t.id&&document.getElementById("ribs-wysiwyg-toolbar")&&document.getElementById("ribs-wysiwyg-toolbar").remove(),"inline"!==n.options.mode||document.getElementById("ribs-wysiwyg-toolbar"))s.a.refreshCaretLocationDiv();else{var i=document.getElementById("ribs-wysiwyg-editableDiv-current");i&&i.removeAttribute("id"),t.id="ribs-wysiwyg-editableDiv-current",n.initToolbar(e,t,"inline")}})),"inline"===this.options.mode||this.initToolbar(e,t)}},{key:"initToolbar",value:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=document.createElement("div");if(i.id="ribs-wysiwyg-toolbar",null===o)e.prepend(i);else{i.classList.add("inline");var r=e.parentElement;r.insertBefore(i,e)}var a,s=d(this.options.toolbar);try{for(s.s();!(a=s.n()).done;){var l=a.value;if(console.log(l),"|"===l){var c=document.createElement("div");c.classList.add("ribs-wysiwyg-toolbar-separator"),i.append(c)}else n(6)("./".concat(l,".js")).default.launchClass(i,t,this.options)}}catch(e){s.e(e)}finally{s.f()}}}]),e}();t.a=c},function(e,t,n){(e.exports=n(13)(!1)).push([e.i,".ribs-popup{position:fixed;z-index:900;width:100%;min-height:100%;max-height:100%;background-color:rgba(70,70,70,.9);visibility:hidden;opacity:0;transition:opacity .2s linear;top:0;left:0;right:0;bottom:0}.ribs-popup .content{position:relative;background-color:#fff;display:block;z-index:100;margin:10% auto;max-height:60%;min-height:102px;overflow-y:auto;padding:10px}.ribs-popup .content.fixed-width{width:60%;max-width:1120px}.ribs-popup .content h2{margin-bottom:20px}.ribs-popup .content p{margin-bottom:10px;font-size:14px;color:grey}.ribs-popup .content p.warning{color:#f34336;font-weight:700}.ribs-popup .content ul li{margin-bottom:10px;font-weight:700}.ribs-popup .content .link{float:right}.ribs-popup .content .link a{min-height:36px;padding:10px;color:#2196f3;text-transform:uppercase;transition:all .3s ease;text-decoration:none}.ribs-popup .content .link a.validate:hover{color:#dd2a2a}.ribs-popup .content .link a.cancel:hover{color:#217ed3}.ribs-popup .close{position:sticky;top:10px;right:10px;float:right;background:#e1e1e1;color:#b5b5b5;transition:all .3s ease;width:30px;height:30px;line-height:30px;border-radius:50%;text-align:center;cursor:pointer}.ribs-popup .close:hover{background:#ccc}@media screen and (max-width:1024px){.ribs-popup .close{width:50px;height:50px;line-height:50px}}.ribs-popup .clear{clear:both}.ribs-displayed{transition:opacity .2s linear;visibility:visible;opacity:1}.ribs-popup-body{overflow:hidden;-webkit-overflow-scrolling:touch}",""])},function(e,t,n){},function(e,t,n){var o={"./Blocks.js":7,"./Bold.js":8,"./FontSize.js":9,"./IndentOutdent.js":10,"./Italic.js":11,"./Justify.js":12,"./Link.js":18,"./Lists.js":14,"./Strikethrough.js":15,"./Underline.js":16,"./UndoRedo.js":17};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=r,e.exports=i,i.id=6},function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(2),a=n.n(r),s=n(0),d=function(){function e(t,n,o){i()(this,e),this.toolbarDiv=t,this.editableDiv=n,this.options=o,this.defineOptions(),this.addButtonToToolbar(),this.addSelectEventListener("click"),this.addSelectEventListener("keydown")}return a()(e,[{key:"addButtonToToolbar",value:function(){var e=this,t=document.createElement("div"),n=document.createElement("select");for(var o in n.id="ribs-wysiwyg-toolbar-blocks",n.addEventListener("change",(function(t){return e.changeBlock(t)})),t.append(n),this.toolbarDiv.append(t),this.options.blocks){var i=document.createElement("option");i.text="".concat(this.options.blocks[o]),i.value="".concat(o),n.add(i),this.blocksMenu=n}}},{key:"defineOptions",value:function(){this.options.blocks||(this.options.blocks={p:"Paragraph",h1:"Heading 1",h2:"Heading 2",h3:"Heading 3",h4:"Heading 4",h5:"Heading 5",h6:"Heading 6"})}},{key:"addSelectEventListener",value:function(e){var t=this;this.editableDiv.addEventListener(e,(function(){if(window.getSelection&&window.getSelection().getRangeAt&&window.getSelection().anchorNode){var e=window.getSelection().anchorNode;e&&e&&e.parentNode&&t.options.blocks.hasOwnProperty(e.parentNode.tagName.toLowerCase())>=0&&(t.blocksMenu.value=e.parentNode.tagName.toLowerCase())}}))}},{key:"changeBlock",value:function(e){document.execCommand("formatBlock",!1,"<".concat(e.currentTarget.value,">")),this.editableDiv.focus(),s.a.refreshCaretLocationDiv()}}]),e}();t.default={launchClass:function(e,t,n){new d(e,t,n)}}},function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(2),a=n.n(r),s=n(0),d=function(){function e(t,n,o){i()(this,e),this.toolbarDiv=t,this.editableDiv=n,this.addButtonToToolbar()}return a()(e,[{key:"addButtonToToolbar",value:function(){var e=this,t=document.createElement("div"),n=document.createElement("button");n.id="ribs-wysiwyg-toolbar-bold",n.innerHTML='<span style="font-weight: bold">B</span>',n.addEventListener("click",(function(){return e.setTextToBold()})),t.append(n),this.toolbarDiv.append(t)}},{key:"setTextToBold",value:function(){document.execCommand("bold"),this.editableDiv.focus(),s.a.refreshCaretLocationDiv()}}]),e}();t.default={launchClass:function(e,t,n){new d(e,t,n)}}},function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(2),a=n.n(r);function s(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,r=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw r}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var l=function(){function e(t,n,o){i()(this,e),this.toolbarDiv=t,this.editableDiv=n,this.options=o,this.defineOptions(),this.addButtonToToolbar(),this.addSelectEventListener("click"),this.addSelectEventListener("keydown")}return a()(e,[{key:"addButtonToToolbar",value:function(){var e=this,t=document.createElement("div"),n=document.createElement("select");n.id="ribs-wysiwyg-toolbar-fontsize",n.addEventListener("change",(function(t){return e.changeFontSize(t)})),t.append(n),this.toolbarDiv.append(t);var o,i=window.getComputedStyle(document.querySelector("body"),null).getPropertyValue("font-size"),r=s(this.options.fontSize);try{for(r.s();!(o=r.n()).done;){var a=o.value,d=document.createElement("option");parseInt(a)===parseInt(i)&&(d.selected=!0,d.dataset.default=!0),d.text="".concat(a,"px"),d.value="".concat(a,"px"),n.add(d),this.fontSizeMenu=n}}catch(e){r.e(e)}finally{r.f()}if(!this.fontSizeMenu.querySelector("[data-default]")){var l=this.fontSizeMenu.querySelector("option:first-of-type");l.selected=!0,l.dataset.default=!0}}},{key:"defineOptions",value:function(){this.options.fontSize||(this.options.fontSize=[8,10,12,14,16,18,24,36])}},{key:"addSelectEventListener",value:function(e){var t=this;this.editableDiv.addEventListener(e,(function(){if(window.getSelection&&window.getSelection().getRangeAt&&window.getSelection().anchorNode){var e=window.getSelection().anchorNode;e&&e&&void 0!==e.parentNode&&e.parentNode.style&&e.parentNode.style.fontSize?t.fontSizeMenu.value=e.parentNode.style.fontSize:t.fontSizeMenu.value=t.fontSizeMenu.querySelector("[data-default]").value}}))}},{key:"replaceFontBySpan",value:function(e,t){var n=e.parentNode,o=document.createElement("span");o.appendChild(document.createTextNode(e.textContent)),o.style.fontSize=t,n.replaceChild(o,e);var i=document.createRange(),r=window.getSelection();i.selectNodeContents(this.editableDiv),i.collapse(!1),r.removeAllRanges(),r.addRange(i),this.editableDiv.focus(),i.detach()}},{key:"changeFontSize",value:function(e){var t=this;this.editableDiv.focus(),document.execCommand("fontSize",!1,"1");var n=e.currentTarget.value,o=document.getElementsByTagName("font")[0];o?this.replaceFontBySpan(o,n):this.editableDiv.addEventListener("keydown",(function(){var e=document.getElementsByTagName("font")[0];t.replaceFontBySpan(e,n)}))}}]),e}();t.default={launchClass:function(e,t,n){new l(e,t,n)}}},function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(2),a=n.n(r),s=n(0),d=function(){function e(t,n,o){i()(this,e),this.toolbarDiv=t,this.editableDiv=n,this.addButtonToToolbar(),this.addIndentEventListener("click"),this.addIndentEventListener("keyup")}return a()(e,[{key:"addButtonToToolbar",value:function(){for(var e=this,t=function(){var t=o[n],i=document.createElement("div"),r=document.createElement("button");r.id="ribs-wysiwyg-toolbar-indentOutdent-".concat(t),"Outdent"===t&&r.classList.add("disabled"),r.innerHTML=t,r.addEventListener("click",(function(){return e.indentOutdent(t)})),i.append(r),e.toolbarDiv.append(i)},n=0,o=["Indent","Outdent"];n<o.length;n++)t()}},{key:"addIndentEventListener",value:function(e){var t=this,n=document.getElementById("ribs-wysiwyg-toolbar-indentOutdent-Outdent");this.editableDiv.addEventListener(e,(function(){if(window.getSelection&&window.getSelection().getRangeAt&&window.getSelection().anchorNode){var e=window.getSelection().anchorNode.parentElement;if(e.id===t.editableDiv.id&&(e=window.getSelection().anchorNode),e&&e.style){var o=e.style.marginLeft.split("px")[0];0===(o=parseInt(o)?parseInt(o):0)?n.classList.add("disabled"):n.classList.remove("disabled")}else n.classList.add("disabled")}}))}},{key:"indentOutdent",value:function(e){var t=document.getElementById("ribs-wysiwyg-toolbar-indentOutdent-Outdent"),n=window.getSelection().anchorNode.parentElement;if(n.id===this.editableDiv.id&&(n=window.getSelection().anchorNode),n){var o=n.style.marginLeft.split("px")[0];if(o=parseInt(o)?parseInt(o):0,"Indent"===e)n.style.marginLeft="".concat(o+40,"px"),t.classList.remove("disabled");else if("Outdent"===e&&o>0){var i=o-40;n.style.marginLeft="".concat(i,"px"),0===i&&t.classList.add("disabled")}}this.editableDiv.focus(),s.a.refreshCaretLocationDiv()}}]),e}();t.default={launchClass:function(e,t,n){new d(e,t,n)}}},function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(2),a=n.n(r),s=n(0),d=function(){function e(t,n,o){i()(this,e),this.toolbarDiv=t,this.editableDiv=n,this.addButtonToToolbar()}return a()(e,[{key:"addButtonToToolbar",value:function(){var e=this,t=document.createElement("div"),n=document.createElement("button");n.id="ribs-wysiwyg-toolbar-italic",n.innerHTML='<span style="font-style: italic">I</span>',n.addEventListener("click",(function(){return e.setTextToItalic()})),t.append(n),this.toolbarDiv.append(t)}},{key:"setTextToItalic",value:function(){document.execCommand("italic"),this.editableDiv.focus(),s.a.refreshCaretLocationDiv()}}]),e}();t.default={launchClass:function(e,t,n){new d(e,t,n)}}},function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(2),a=n.n(r),s=n(0),d=function(){function e(t,n,o){i()(this,e),this.toolbarDiv=t,this.editableDiv=n,this.addButtonToToolbar()}return a()(e,[{key:"addButtonToToolbar",value:function(){for(var e=this,t=function(){var t=o[n],i=document.createElement("div"),r=document.createElement("button");r.id="ribs-wysiwyg-toolbar-justify-".concat(t),r.innerHTML=t,r.addEventListener("click",(function(){return e.setTextToJustify(t)})),i.append(r),e.toolbarDiv.append(i)},n=0,o=["Left","Center","Right","Full"];n<o.length;n++)t()}},{key:"setTextToJustify",value:function(e){document.execCommand("justify".concat(e)),this.editableDiv.focus(),s.a.refreshCaretLocationDiv()}}]),e}();t.default={launchClass:function(e,t,n){new d(e,t,n)}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),r=o.sources.map((function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"}));return[n].concat(r).concat([i]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(i=0;i<e.length;i++){var a=e[i];null!=a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(2),a=n.n(r),s=n(0),d=function(){function e(t,n,o){i()(this,e),this.toolbarDiv=t,this.editableDiv=n,this.addButtonToToolbar()}return a()(e,[{key:"addButtonToToolbar",value:function(){for(var e=this,t=function(){var t=o[n],i=document.createElement("div"),r=document.createElement("button");r.id="ribs-wysiwyg-toolbar-lists-".concat(t),r.innerHTML=t,r.addEventListener("click",(function(){return e.createLists(t)})),i.append(r),e.toolbarDiv.append(i)},n=0,o=["OrderedList","UnorderedList"];n<o.length;n++)t()}},{key:"createLists",value:function(e){document.execCommand("insert".concat(e)),this.editableDiv.focus(),s.a.refreshCaretLocationDiv()}}]),e}();t.default={launchClass:function(e,t,n){new d(e,t,n)}}},function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(2),a=n.n(r),s=n(0),d=function(){function e(t,n,o){i()(this,e),this.toolbarDiv=t,this.editableDiv=n,this.addButtonToToolbar()}return a()(e,[{key:"addButtonToToolbar",value:function(){var e=this,t=document.createElement("div"),n=document.createElement("button");n.id="ribs-wysiwyg-toolbar-strikethrough",n.innerHTML='<span style="text-decoration: line-through">S</span>',n.addEventListener("click",(function(){return e.setTextToStrikethrough()})),t.append(n),this.toolbarDiv.append(t)}},{key:"setTextToStrikethrough",value:function(){document.execCommand("strikethrough"),this.editableDiv.focus(),s.a.refreshCaretLocationDiv()}}]),e}();t.default={launchClass:function(e,t,n){new d(e,t,n)}}},function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(2),a=n.n(r),s=n(0),d=function(){function e(t,n,o){i()(this,e),this.toolbarDiv=t,this.editableDiv=n,this.addButtonToToolbar()}return a()(e,[{key:"addButtonToToolbar",value:function(){var e=this,t=document.createElement("div"),n=document.createElement("button");n.id="ribs-wysiwyg-toolbar-underline",n.innerHTML='<span style="text-decoration: underline">U</span>',n.addEventListener("click",(function(){return e.setTextToUnderline()})),t.append(n),this.toolbarDiv.append(t)}},{key:"setTextToUnderline",value:function(){document.execCommand("underline"),this.editableDiv.focus(),s.a.refreshCaretLocationDiv()}}]),e}();t.default={launchClass:function(e,t,n){new d(e,t,n)}}},function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(2),a=n.n(r),s=n(0),d=function(){function e(t,n,o){i()(this,e),this.toolbarDiv=t,this.editableDiv=n,this.addButtonToToolbar(),this.addUndoEventListener()}return a()(e,[{key:"addButtonToToolbar",value:function(){for(var e=this,t=function(){var t=o[n],i=document.createElement("div"),r=document.createElement("button");r.id="ribs-wysiwyg-toolbar-undoRedo-".concat(t),r.classList.add("disabled"),r.innerHTML=t,r.addEventListener("click",(function(n){return e.undoRedo(n,t)})),i.append(r),e.toolbarDiv.append(i),sessionStorage.removeItem("undoCount"),sessionStorage.removeItem("redoCount")},n=0,o=["Undo","Redo"];n<o.length;n++)t()}},{key:"undoRedo",value:function(e,t){if(!e.target.classList.contains("disabled")){if("Undo"===t)if(sessionStorage.setItem("undoCount",parseInt(sessionStorage.getItem("undoCount"))-1),sessionStorage.setItem("redoCount",parseInt(sessionStorage.getItem("redoCount")?sessionStorage.getItem("redoCount"):0)+1),0===parseInt(sessionStorage.getItem("undoCount"))&&e.target.classList.add("disabled"),parseInt(sessionStorage.getItem("redoCount"))>0)document.getElementById("ribs-wysiwyg-toolbar-undoRedo-Redo").classList.remove("disabled");if("Redo"===t)if(sessionStorage.setItem("redoCount",parseInt(sessionStorage.getItem("redoCount"))-1),sessionStorage.setItem("undoCount",parseInt(sessionStorage.getItem("undoCount")?sessionStorage.getItem("undoCount"):0)+1),0===parseInt(sessionStorage.getItem("redoCount"))&&e.target.classList.add("disabled"),parseInt(sessionStorage.getItem("undoCount"))>0)document.getElementById("ribs-wysiwyg-toolbar-undoRedo-Undo").classList.remove("disabled");document.execCommand(t),this.editableDiv.focus(),s.a.refreshCaretLocationDiv()}}},{key:"addUndoEventListener",value:function(){this.editableDiv.addEventListener("keydown",(function(){var e=sessionStorage.getItem("undoCount");(sessionStorage.setItem("undoCount",parseInt(e||0)+1),sessionStorage.setItem("redoCount",0),document.getElementById("ribs-wysiwyg-toolbar-undoRedo-Redo").classList.remove("disabled"),e)&&document.getElementById("ribs-wysiwyg-toolbar-undoRedo-Undo").classList.remove("disabled")}))}}]),e}();t.default={launchClass:function(e,t,n){new d(e,t,n)}}},function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(2),a=n.n(r),s=n(0);var d=class{static getHeight(e){const t=window.getComputedStyle(e).getPropertyValue("max-height");"none"!==t&&(e.style.maxHeight="inherit"),e.style.display="block";let n=parseInt(window.getComputedStyle(e).getPropertyValue("height"));return e.style.display="","none"!==t&&(e.style.maxHeight=t),n}static toggleSlide(e,t){let n=0;const o=window.getComputedStyle(e).getPropertyValue("max-height");"none"!==o&&"0px"!==o||(n=this.getHeight(e)),e.style.transition="max-height 0.5s ease-in-out",e.style.maxHeight=0,e.style.display="block",e.style.overflow="hidden",setTimeout((function(){e.style.maxHeight=n+"px"}),t)}static wrap(e,t,n=null){const o=e.parentNode,i=document.createElement(t);i.className=n,o.insertBefore(i,e),o.removeChild(e),i.appendChild(e)}static parents(e,t){for(;e&&e!==document;e=e.parentNode){if("class"===this.checkWanted(t)&&e.classList.contains(t.split(".")[1]))return e;if("id"===this.checkWanted(t)&&e.id===t.split("#")[1])return e}return null}static checkWanted(e){return-1!==e.indexOf(".")?"class":-1!==e.indexOf("#")?"id":null}};class l{constructor(){const e=document.querySelectorAll("[data-ribspopup]");Array.from(e).forEach(e=>{e.addEventListener("click",e=>this.openPopup(e))})}openPopup(e){e.preventDefault();const t=e.currentTarget,n=document.getElementById(e.currentTarget.dataset.popup);void 0!==e.currentTarget.dataset.ajax&&this.setContent(n,e.currentTarget.dataset.ajax),n.classList.add("ribs-displayed"),document.body.classList.add("ribs-popup-body");const o=n.querySelectorAll(".ribs-popup [data-close]"),i=n.querySelectorAll(".ribs-popup [data-validate]");o.length>0&&Array.from(o).forEach(e=>{e.addEventListener("click",e=>this.closePopup(e))}),i.length>0&&Array.from(i).forEach(e=>{e.addEventListener("click",e=>this.setActionValidate(e,t))})}openJsPopup(e){const t=document.getElementById(e);t.classList.add("ribs-displayed"),document.body.classList.add("ribs-popup-body");const n=t.querySelectorAll(".ribs-popup [data-close]"),o=t.querySelectorAll(".ribs-popup [data-validate]");n.length>0&&Array.from(n).forEach(e=>{e.addEventListener("click",e=>this.closePopup(e))}),o.length>0&&Array.from(o).forEach(e=>{e.addEventListener("click",e=>this.setActionValidate(e,null))})}setActionValidate(e,t){null!==t.dataset.href&&void 0!==t.dataset.href?e.currentTarget.href=t.dataset.href:null!==t.dataset.form&&void 0!==t.dataset.form?document.getElementById(t.dataset.form).submit():this.closePopup(e)}closePopup(e){e.preventDefault();const t=d.parents(e.currentTarget,".ribs-popup");null!==t&&(t.classList.remove("ribs-displayed"),document.body.classList.remove("ribs-popup-body"))}setContent(e,t){const n=e.querySelector("#set-content"),o=new Request(t,{method:"POST",credentials:"same-origin"});fetch(o).then(e=>e.text()).then(e=>{n.innerHTML=e})}}var c=l;new l;var u=n(4),p=n.n(u),f=function(){function e(t,n,o){i()(this,e),this.toolbarDiv=t,this.editableDiv=n,this.ribsPopup=new c,this.addButtonToToolbar();var r=document.getElementsByTagName("head")[0],a=document.createElement("style");a.innerText=p.a.toString(),r.appendChild(a)}return a()(e,[{key:"addButtonToToolbar",value:function(){var e=this,t=document.createElement("div"),n=document.createElement("button");n.id="ribs-wysiwyg-toolbar-link",n.innerHTML="<span>Link</span>",n.addEventListener("click",(function(){return e.showPopup()})),t.append(n),this.toolbarDiv.append(t)}},{key:"createInputPopup",value:function(e,t){var n=document.createElement("div"),o=document.createElement("label");o.innerText=t,o.for=e;var i=document.createElement("input");return i.id=e,i.name=e,"ribs-wysiwyg-link-text"===e&&(i.value=s.a.getSelectionText()),n.appendChild(o),n.appendChild(i),n}},{key:"createContentDivPopup",value:function(){var e=document.createElement("div");e.id="set-content";var t=this.createInputPopup("ribs-wysiwyg-link-url","URL"),n=this.createInputPopup("ribs-wysiwyg-link-text","Text to display"),o=this.createInputPopup("ribs-wysiwyg-link-title","Title");return e.appendChild(t),e.appendChild(n),e.appendChild(o),e}},{key:"createLinksDivPopup",value:function(){var e=document.createElement("div");e.classList.add("link");var t=document.createElement("a");t.classList.add("cancel"),t.dataset.close="",t.innerText="Close",e.appendChild(t);var n=document.createElement("a");return n.classList.add("validate"),n.dataset.linkValidate="",n.innerText="Validate",e.appendChild(n),e}},{key:"createPopup",value:function(){var e=document.createElement("div");e.id="ribs-wysiwyg-link-popup",e.classList.add("ribs-popup");var t=document.createElement("div");t.classList.add("content");var n=this.createContentDivPopup(),o=this.createLinksDivPopup(),i=document.createElement("div");i.classList.add("clear"),t.appendChild(n),t.appendChild(o),t.appendChild(i),e.appendChild(t),(document.getElementById("ribs-wysiwyg-container")?document.getElementById("ribs-wysiwyg-container"):document.getElementById("ribs-wysiwyg-editableDiv-current").parentElement).appendChild(e),this.popup=document.getElementById("ribs-wysiwyg-link-popup"),this.addEventsOnInputs()}},{key:"showPopup",value:function(){var e=this;this.selection=s.a.saveSelection(),this.createPopup(),this.ribsPopup.openJsPopup("ribs-wysiwyg-link-popup");var t=this.popup.querySelectorAll(".ribs-popup [data-link-validate]");t.length>0&&Array.from(t).forEach((function(t){t.addEventListener("click",(function(t){return e.addEventValidate()}))}))}},{key:"addEventsOnInputs",value:function(){var e=document.getElementById("ribs-wysiwyg-link-url"),t=document.getElementById("ribs-wysiwyg-link-text"),n=!1;e.addEventListener("keyup",(function(o){""===t.value&&(n=!0),n&&(t.value=e.value)})),t.addEventListener("keyup",(function(o){t.value!==e.value&&(n=!1)}))}},{key:"addEventValidate",value:function(){var e=document.getElementById("ribs-wysiwyg-link-url").value,t=document.getElementById("ribs-wysiwyg-link-text").value,n=document.getElementById("ribs-wysiwyg-link-title").value;e?(s.a.restoreSelection(this.selection),document.execCommand("createLink",!1,e),this.ribsPopup.closePopup(event)):this.ribsPopup.closePopup(event),this.editableDiv.focus(),s.a.refreshCaretLocationDiv(),document.getElementById(this.popup.id).remove(),this.changeValuesOfLink(t,n)}},{key:"changeValuesOfLink",value:function(e,t){var n=this.editableDiv.querySelectorAll("a").length+1;this.editableDiv.querySelectorAll("a").forEach((function(o){void 0!==o.id&&""!==o.id||(o.id="".concat("ribs-wysiwyg-a-number-").concat(n),o.innerText=e,o.title=t)}))}}]),e}();t.default={launchClass:function(e,t,n){new f(e,t,n)}}},,function(e,t,n){"use strict";n.r(t);n(5),new(n(3).a)({mode:"inline",selector:"[data-ribs-wysiwyg]",height:400})}]);