!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=29)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},function(t,e,n){var o=n(25)("wks"),r=n(26),i=n(0).Symbol,a="function"==typeof i;(t.exports=function(t){return o[t]||(o[t]=a&&i[t]||(a?i:r)("Symbol."+t))}).store=o},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var o,r=n(63),i=(o=r)&&o.__esModule?o:{default:o};function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,i.default)(t,o.key,o)}}e.default=function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}},function(t,e,n){var o=n(8),r=n(24);t.exports=n(6)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(22)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports={}},function(t,e,n){var o=n(9),r=n(40),i=n(41),a=Object.defineProperty;e.f=n(6)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var o=n(10);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports={default:n(32),__esModule:!0}},function(t,e,n){var o=n(37),r=n(14);t.exports=function(t){return o(r(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var p=n(0),y=n(1),g=n(38),b=n(5),m=n(11),w="prototype",x=function(t,e,n){var o,r,i,a=t&x.F,u=t&x.G,s=t&x.S,c=t&x.P,l=t&x.B,f=t&x.W,d=u?y:y[e]||(y[e]={}),v=d[w],h=u?p:s?p[e]:(p[e]||{})[w];for(o in u&&(n=e),n)(r=!a&&h&&void 0!==h[o])&&m(d,o)||(i=r?h[o]:n[o],d[o]=u&&"function"!=typeof h[o]?n[o]:l&&r?g(i,p):f&&h[o]==i?function(o){function t(t,e,n){if(this instanceof o){switch(arguments.length){case 0:return new o;case 1:return new o(t);case 2:return new o(t,e)}return new o(t,e,n)}return o.apply(this,arguments)}return t[w]=o[w],t}(i):c&&"function"==typeof i?g(Function.call,i):i,c&&((d.virtual||(d.virtual={}))[o]=i,t&x.R&&v&&!v[o]&&b(v,o,i)))};x.F=1,x.G=2,x.S=4,x.P=8,x.B=16,x.W=32,x.U=64,x.R=128,t.exports=x},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?o:n)(t)}},function(t,e,n){var o=n(25)("keys"),r=n(26);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(3));function r(t){return t&&t.__esModule?t:{default:t}}var i=((0,r(n(4)).default)(a,null,[{key:"getCaretPosition",value:function(){if(window.getSelection&&window.getSelection().getRangeAt&&window.getSelection().anchorNode){for(var t=document.getElementById("ribs-wysiwyg-editable"),e=window.getSelection().anchorNode,n=[];e&&e!==t;e=e.parentNode)void 0!==e.tagName&&n.push(e.tagName.toLowerCase());return n.reverse()}return[]}},{key:"getCaretPositionAsString",value:function(){var t=this.getCaretPosition();return t.length?t.join(" > "):""}},{key:"refreshCaretLocationDiv",value:function(){document.getElementById("ribs-wysiwyg-caret-location").innerHTML=a.getCaretPositionAsString()}}]),a);function a(){(0,o.default)(this,a)}e.default=i},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){"use strict";function m(){return this}var w=n(21),x=n(15),S=n(42),k=n(5),T=n(7),_=n(43),L=n(28),E=n(52),D=n(2)("iterator"),M=!([].keys&&"next"in[].keys()),C="values";t.exports=function(t,e,n,o,r,i,a){_(n,e,o);function u(t){if(!M&&t in h)return h[t];switch(t){case"keys":case C:return function(){return new n(this,t)}}return function(){return new n(this,t)}}var s,c,l,f=e+" Iterator",d=r==C,v=!1,h=t.prototype,p=h[D]||h["@@iterator"]||r&&h[r],y=p||u(r),g=r?d?u("entries"):y:void 0,b="Array"==e&&h.entries||p;if(b&&(l=E(b.call(new t)))!==Object.prototype&&l.next&&(L(l,f,!0),w||"function"==typeof l[D]||k(l,D,m)),d&&p&&p.name!==C&&(v=!0,y=function(){return p.call(this)}),w&&!a||!M&&!v&&h[D]||k(h,D,y),T[e]=y,T[f]=m,r)if(s={values:d?y:u(C),keys:i?y:u("keys"),entries:g},a)for(c in s)c in h||S(h,c,s[c]);else x(x.P+x.F*(M||v),e,s);return s}},function(t,e){t.exports=!0},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var o=n(10),r=n(0).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var o=n(1),r=n(0),i="__core-js_shared__",a=r[i]||(r[i]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n(21)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(8).f,r=n(11),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";n(30);var o,r=n(31);new((o=r)&&o.__esModule?o:{default:o}).default({selector:"#ribs-wysiwyg",height:400})},function(t,e,n){},function(t,e,u){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(u(12)),o=a(u(59)),n=a(u(3)),r=a(u(4)),i=(a(u(66)),a(u(18)));function a(t){return t&&t.__esModule?t:{default:t}}var c=((0,r.default)(l,[{key:"defineOptions",value:function(t){t.height||(t.height="200px"),t.fontSize||(t.fontSize=[8,10,12,14,16,18,24,36]),t.blocks||(t.blocks={p:"Paragraph",h1:"Heading 1",h2:"Heading 2",h3:"Heading 3",h4:"Heading 4",h5:"Heading 5",h6:"Heading 6"}),t.toolbar?t.toolbar=t.toolbar.split(" "):t.toolbar=["Bold","Italic","Underline","Strikethrough","FontSize","Blocks"],this.options=t}},{key:"initWysiwygDivs",value:function(){this.selector.style.display="none";var t=document.createElement("div");t.id="ribs-wysiwyg-container",this.selector.parentNode.prepend(t),this.wysiwygDiv=document.getElementById("ribs-wysiwyg-container");var e=document.createElement("div");e.id="ribs-wysiwyg-editable",this.wysiwygDiv.append(e),this.editableDiv=document.getElementById("ribs-wysiwyg-editable"),this.editableDiv.style.height=(0,o.default)(this.options.height)?this.options.height+"px":this.options.height,this.editableDiv.contentEditable=!0;var n=document.createElement("div");n.id="ribs-wysiwyg-caret-location",this.wysiwygDiv.append(n),this.addEventsListenersEditableDiv()}},{key:"addEventsListenersEditableDiv",value:function(){this.editableDiv.addEventListener("keydown",function(t){13!==t.keyCode||t.shiftKey||document.execCommand("defaultParagraphSeparator",!1,"p"),i.default.refreshCaretLocationDiv()}),this.editableDiv.addEventListener("click",function(){var t=i.default.getCaretPosition();void 0===t[t.length-1]&&document.execCommand("formatBlock",!1,"p"),i.default.refreshCaretLocationDiv()})}},{key:"initToolbar",value:function(){var t=document.createElement("div");t.id="ribs-wysiwyg-toolbar",this.wysiwygDiv.prepend(t),this.toolbarDiv=document.getElementById("ribs-wysiwyg-toolbar");var e=!0,n=!1,o=void 0;try{for(var r,i=(0,s.default)(this.options.toolbar);!(e=(r=i.next()).done);e=!0){var a=r.value;u(67)("./"+a+".js").launchClass(this.toolbarDiv,this.editableDiv,this.options)}}catch(t){n=!0,o=t}finally{try{!e&&i.return&&i.return()}finally{if(n)throw o}}}}]),l);function l(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};(0,n.default)(this,l),t.selector?document.querySelector(t.selector)?(this.selector=document.querySelector(t.selector),this.defineOptions(t),this.initWysiwygDivs(),this.initToolbar()):console.error("Selector can't be found in document"):console.error("Selector is mandatory")}e.default=c},function(t,e,n){n(33),n(54),t.exports=n(56)},function(t,e,n){n(34);for(var o=n(0),r=n(5),i=n(7),a=n(2)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<u.length;s++){var c=u[s],l=o[c],f=l&&l.prototype;f&&!f[a]&&r(f,a,c),i[c]=i.Array}},function(t,e,n){"use strict";var o=n(35),r=n(36),i=n(7),a=n(13);t.exports=n(20)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var o=n(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e,n){var i=n(39);t.exports=function(o,r,t){if(i(o),void 0===r)return o;switch(t){case 1:return function(t){return o.call(r,t)};case 2:return function(t,e){return o.call(r,t,e)};case 3:return function(t,e,n){return o.call(r,t,e,n)}}return function(){return o.apply(r,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports=!n(6)&&!n(22)(function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";var o=n(44),r=n(24),i=n(28),a={};n(5)(a,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(a,{next:r(1,n)}),i(t,e+" Iterator")}},function(t,e,o){function r(){}var i=o(9),a=o(45),u=o(27),s=o(17)("IE_PROTO"),c="prototype",l=function(){var t,e=o(23)("iframe"),n=u.length;for(e.style.display="none",o(51).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;n--;)delete l[c][u[n]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(r[c]=i(t),n=new r,r[c]=null,n[s]=t):n=l(),void 0===e?n:a(n,e)}},function(t,e,n){var a=n(8),u=n(9),s=n(46);t.exports=n(6)?Object.defineProperties:function(t,e){u(t);for(var n,o=s(e),r=o.length,i=0;i<r;)a.f(t,n=o[i++],e[n]);return t}},function(t,e,n){var o=n(47),r=n(27);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e,n){var a=n(11),u=n(13),s=n(48)(!1),c=n(17)("IE_PROTO");t.exports=function(t,e){var n,o=u(t),r=0,i=[];for(n in o)n!=c&&a(o,n)&&i.push(n);for(;e.length>r;)a(o,n=e[r++])&&(~s(i,n)||i.push(n));return i}},function(t,e,n){var s=n(13),c=n(49),l=n(50);t.exports=function(u){return function(t,e,n){var o,r=s(t),i=c(r.length),a=l(n,i);if(u&&e!=e){for(;a<i;)if((o=r[a++])!=o)return!0}else for(;a<i;a++)if((u||a in r)&&r[a]===e)return u||a||0;return!u&&-1}}},function(t,e,n){var o=n(16),r=Math.min;t.exports=function(t){return 0<t?r(o(t),9007199254740991):0}},function(t,e,n){var o=n(16),r=Math.max,i=Math.min;t.exports=function(t,e){return(t=o(t))<0?r(t+e,0):i(t,e)}},function(t,e,n){var o=n(0).document;t.exports=o&&o.documentElement},function(t,e,n){var o=n(11),r=n(53),i=n(17)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var o=n(14);t.exports=function(t){return Object(o(t))}},function(t,e,n){"use strict";var o=n(55)(!0);n(20)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var s=n(16),c=n(14);t.exports=function(u){return function(t,e){var n,o,r=String(c(t)),i=s(e),a=r.length;return i<0||a<=i?u?"":void 0:(n=r.charCodeAt(i))<55296||56319<n||i+1===a||(o=r.charCodeAt(i+1))<56320||57343<o?u?r.charAt(i):n:u?r.slice(i,i+2):o-56320+(n-55296<<10)+65536}}},function(t,e,n){var o=n(9),r=n(57);t.exports=n(1).getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return o(e.call(t))}},function(t,e,n){var o=n(58),r=n(2)("iterator"),i=n(7);t.exports=n(1).getIteratorMethod=function(t){if(null!=t)return t[r]||t["@@iterator"]||i[o(t)]}},function(t,e,n){var r=n(19),i=n(2)("toStringTag"),a="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:a?r(e):"Object"==(o=r(e))&&"function"==typeof e.callee?"Arguments":o}},function(t,e,n){t.exports={default:n(60),__esModule:!0}},function(t,e,n){n(61),t.exports=n(1).Number.isInteger},function(t,e,n){var o=n(15);o(o.S,"Number",{isInteger:n(62)})},function(t,e,n){var o=n(10),r=Math.floor;t.exports=function(t){return!o(t)&&isFinite(t)&&r(t)===t}},function(t,e,n){t.exports={default:n(64),__esModule:!0}},function(t,e,n){n(65);var o=n(1).Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},function(t,e,n){var o=n(15);o(o.S+o.F*!n(6),"Object",{defineProperty:n(8).f})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var d=r(n(12)),o=r(n(3));function r(t){return t&&t.__esModule?t:{default:t}}var i=((0,r(n(4)).default)(a,null,[{key:"getHeight",value:function(t){var e=window.getComputedStyle(t).getPropertyValue("max-height");"none"!==e&&(t.style.maxHeight="inherit"),t.style.display="block";var n=parseInt(window.getComputedStyle(t).getPropertyValue("height"));return t.style.display="","none"!==e&&(t.style.maxHeight=e),n}},{key:"getWidth",value:function(t){t.style.display="block";var e=parseInt(window.getComputedStyle(t).getPropertyValue("width"));return t.style.display="",e}},{key:"toggleSlide",value:function(t,e){var n=0,o=window.getComputedStyle(t).getPropertyValue("max-height");"none"!==o&&"0px"!==o||(n=this.getHeight(t)),t.style.transition="max-height "+e/1e3+"s ease-in-out, padding "+e/1e3+"s ease-in-out",t.style.maxHeight=0,t.style.display="block",t.style.overflow="hidden",0===n?t.style.padding="0px":t.style.removeProperty("padding"),setTimeout(function(){t.style.maxHeight=n+"px"},10)}},{key:"wrap",value:function(t,e,n){var o=2<arguments.length&&void 0!==n?n:null,r=t.parentNode,i=document.createElement(e);i.className=o,r.insertBefore(i,t),r.removeChild(t),i.appendChild(t)}},{key:"parents",value:function(t,e){for(;t&&t!==document;t=t.parentNode){if("class"===this.checkWanted(e)&&t.classList.contains(e.split(".")[1]))return t;if("id"===this.checkWanted(e)&&t.id===e.split("#")[1])return t}return null}},{key:"checkWanted",value:function(t){return-1!==t.indexOf(".")?"class":-1!==t.indexOf("#")?"id":null}},{key:"validateMail",value:function(t){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}},{key:"testPasswordStrength",value:function(t,e,n){var o=1<arguments.length&&void 0!==e?e:4,r=2<arguments.length&&void 0!==n?n:8,i=0,a=[/(?=.*[a-z])/,/(?=.*[A-Z])/,/(?=.*[0-9])/,/(?=.[!@#$%\^&*])/],u=!0,s=!1,c=void 0;try{for(var l,f=(0,d.default)(a);!(u=(l=f.next()).done);u=!0)l.value.test(t)&&(i+=100/a.length)}catch(t){s=!0,c=t}finally{try{!u&&f.return&&f.return()}finally{if(s)throw c}}return this.passwordStrength=i,t.length<r?(this.passwordError="You password must contain at least "+r+" caracters",!1):o*(100/a.length)<=i||!(this.passwordError="You password is not enough secure")}}]),a);function a(){(0,o.default)(this,a)}e.default=i},function(t,e,n){var o={"./Blocks.js":73,"./Bold.js":68,"./FontSize.js":69,"./Italic.js":70,"./Strikethrough.js":72,"./Underline.js":71};function r(t){var e=i(t);return n(e)}function i(t){if(n.o(o,t))return o[t];var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=function(){return Object.keys(o)},r.resolve=i,(t.exports=r).id=67},function(t,e,n){"use strict";var o=a(n(3)),r=a(n(4)),i=a(n(18));function a(t){return t&&t.__esModule?t:{default:t}}var u=((0,r.default)(s,[{key:"addButtonToToolbar",value:function(){var t=this,e=document.createElement("button");e.id="ribs-wysiwyg-toolbar-bold",e.innerHTML='<span style="font-weight: bold">B</span>',e.addEventListener("click",function(){return t.setTextToBold()}),this.toolbarDiv.append(e)}},{key:"setTextToBold",value:function(){document.execCommand("bold"),this.editableDiv.focus(),i.default.refreshCaretLocationDiv()}}]),s);function s(t,e,n){(0,o.default)(this,s),this.toolbarDiv=t,this.editableDiv=e,this.addButtonToToolbar()}t.exports={launchClass:function(t,e,n){new u(t,e,n)}}},function(t,e,n){"use strict";var l=r(n(12)),o=r(n(3));function r(t){return t&&t.__esModule?t:{default:t}}var i=((0,r(n(4)).default)(a,[{key:"addButtonToToolbar",value:function(){var e=this,t=document.createElement("select");t.id="ribs-wysiwyg-toolbar-fontsize",t.addEventListener("change",function(t){return e.changeFontSize(t)}),this.toolbarDiv.append(t);var n=window.getComputedStyle(document.querySelector("body"),null).getPropertyValue("font-size"),o=!0,r=!1,i=void 0;try{for(var a,u=(0,l.default)(this.options.fontSize);!(o=(a=u.next()).done);o=!0){var s=a.value,c=document.createElement("option");parseInt(s)===parseInt(n)&&(c.selected=!0,c.dataset.default=!0),c.text=s+"px",c.value=s+"px",t.add(c),this.fontSizeMenu=t}}catch(t){r=!0,i=t}finally{try{!o&&u.return&&u.return()}finally{if(r)throw i}}}},{key:"addSelectEventListener",value:function(t){var e=this;this.editableDiv.addEventListener(t,function(){if(window.getSelection&&window.getSelection().getRangeAt&&window.getSelection().anchorNode){var t=window.getSelection().anchorNode;t&&t&&void 0!==t.parentNode&&t.parentNode.style&&t.parentNode.style.fontSize?e.fontSizeMenu.value=t.parentNode.style.fontSize:e.fontSizeMenu.value=e.fontSizeMenu.querySelector("[data-default]").value}})}},{key:"replaceFontBySpan",value:function(t,e){var n=t.parentNode,o=document.createElement("span");o.appendChild(document.createTextNode(t.textContent)),o.style.fontSize=e,n.replaceChild(o,t);var r=document.createRange(),i=window.getSelection();r.selectNodeContents(this.editableDiv),r.collapse(!1),i.removeAllRanges(),i.addRange(r),this.editableDiv.focus(),r.detach()}},{key:"changeFontSize",value:function(t){var e=this;this.editableDiv.focus(),document.execCommand("fontSize",!1,"1");var n=t.currentTarget.value,o=document.getElementsByTagName("font")[0];o?this.replaceFontBySpan(o,n):this.editableDiv.addEventListener("keydown",function(){var t=document.getElementsByTagName("font")[0];e.replaceFontBySpan(t,n)})}}]),a);function a(t,e,n){(0,o.default)(this,a),this.toolbarDiv=t,this.editableDiv=e,this.options=n,this.addButtonToToolbar(),this.addSelectEventListener("click"),this.addSelectEventListener("keydown")}t.exports={launchClass:function(t,e,n){new i(t,e,n)}}},function(t,e,n){"use strict";var o=a(n(3)),r=a(n(4)),i=a(n(18));function a(t){return t&&t.__esModule?t:{default:t}}var u=((0,r.default)(s,[{key:"addButtonToToolbar",value:function(){var t=this,e=document.createElement("button");e.id="ribs-wysiwyg-toolbar-italic",e.innerHTML='<span style="font-style: italic">I</span>',e.addEventListener("click",function(){return t.setTextToItalic()}),this.toolbarDiv.append(e)}},{key:"setTextToItalic",value:function(){document.execCommand("italic"),this.editableDiv.focus(),i.default.refreshCaretLocationDiv()}}]),s);function s(t,e,n){(0,o.default)(this,s),this.toolbarDiv=t,this.editableDiv=e,this.addButtonToToolbar()}t.exports={launchClass:function(t,e,n){new u(t,e,n)}}},function(t,e,n){"use strict";var o=a(n(3)),r=a(n(4)),i=a(n(18));function a(t){return t&&t.__esModule?t:{default:t}}var u=((0,r.default)(s,[{key:"addButtonToToolbar",value:function(){var t=this,e=document.createElement("button");e.id="ribs-wysiwyg-toolbar-underline",e.innerHTML='<span style="text-decoration: underline">U</span>',e.addEventListener("click",function(){return t.setTextToUnderline()}),this.toolbarDiv.append(e)}},{key:"setTextToUnderline",value:function(){document.execCommand("underline"),this.editableDiv.focus(),i.default.refreshCaretLocationDiv()}}]),s);function s(t,e,n){(0,o.default)(this,s),this.toolbarDiv=t,this.editableDiv=e,this.addButtonToToolbar()}t.exports={launchClass:function(t,e,n){new u(t,e,n)}}},function(t,e,n){"use strict";var o=a(n(3)),r=a(n(4)),i=a(n(18));function a(t){return t&&t.__esModule?t:{default:t}}var u=((0,r.default)(s,[{key:"addButtonToToolbar",value:function(){var t=this,e=document.createElement("button");e.id="ribs-wysiwyg-toolbar-strikethrough",e.innerHTML='<span style="text-decoration: line-through">S</span>',e.addEventListener("click",function(){return t.setTextToStrikethrough()}),this.toolbarDiv.append(e)}},{key:"setTextToStrikethrough",value:function(){document.execCommand("strikethrough"),this.editableDiv.focus(),i.default.refreshCaretLocationDiv()}}]),s);function s(t,e,n){(0,o.default)(this,s),this.toolbarDiv=t,this.editableDiv=e,this.addButtonToToolbar()}t.exports={launchClass:function(t,e,n){new u(t,e,n)}}},function(t,e,n){"use strict";var o=a(n(3)),r=a(n(4)),i=a(n(18));function a(t){return t&&t.__esModule?t:{default:t}}var u=((0,r.default)(s,[{key:"addButtonToToolbar",value:function(){var e=this,t=document.createElement("select");for(var n in t.id="ribs-wysiwyg-toolbar-blocks",t.addEventListener("change",function(t){return e.changeBlock(t)}),this.toolbarDiv.append(t),this.options.blocks){var o=document.createElement("option");o.text=""+this.options.blocks[n],o.value=""+n,t.add(o),this.blocksMenu=t}}},{key:"addSelectEventListener",value:function(t){var e=this;this.editableDiv.addEventListener(t,function(){if(window.getSelection&&window.getSelection().getRangeAt&&window.getSelection().anchorNode){var t=window.getSelection().anchorNode;t&&t&&t.parentNode&&0<=e.options.blocks.hasOwnProperty(t.parentNode.tagName.toLowerCase())&&(e.blocksMenu.value=t.parentNode.tagName.toLowerCase())}})}},{key:"changeBlock",value:function(t){document.execCommand("formatBlock",!1,"<"+t.currentTarget.value+">"),this.editableDiv.focus(),i.default.refreshCaretLocationDiv()}}]),s);function s(t,e,n){(0,o.default)(this,s),this.toolbarDiv=t,this.editableDiv=e,this.options=n,this.addButtonToToolbar(),this.addSelectEventListener("click"),this.addSelectEventListener("keydown")}t.exports={launchClass:function(t,e,n){new u(t,e,n)}}}]);