!function(n){var o={};function i(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=34)}([function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var o,i=n(63),r=(o=i)&&o.__esModule?o:{default:o};function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(t,o.key,o)}}e.default=function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(0));function i(t){return t&&t.__esModule?t:{default:t}}var r=((0,i(n(1)).default)(a,null,[{key:"getCaretPosition",value:function(){if(window.getSelection&&window.getSelection().getRangeAt&&window.getSelection().anchorNode){for(var t=document.getElementById("ribs-wysiwyg-editable"),e=window.getSelection().anchorNode,n=[];e&&e!==t;e=e.parentNode)void 0!==e.tagName&&n.push(e.tagName.toLowerCase());return n.reverse()}return[]}},{key:"getCaretPositionAsString",value:function(){var t=this.getCaretPosition();return t.length?t.join(" > "):""}},{key:"refreshCaretLocationDiv",value:function(){document.getElementById("ribs-wysiwyg-caret-location").innerHTML=a.getCaretPositionAsString()}}]),a);function a(){(0,o.default)(this,a)}e.default=r},function(t,e,n){var o=n(27)("wks"),i=n(28),r=n(5).Symbol,a="function"==typeof r;(t.exports=function(t){return o[t]||(o[t]=a&&r[t]||(a?r:i)("Symbol."+t))}).store=o},function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports={default:n(37),__esModule:!0}},function(t,e){t.exports={}},function(t,e,n){var o=n(9),i=n(17);t.exports=n(11)?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var o=n(10),i=n(44),r=n(45),a=Object.defineProperty;e.f=n(11)?Object.defineProperty:function(t,e,n){if(o(t),e=r(e,!0),o(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var o=n(13);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(24)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var h=n(5),y=n(4),g=n(23),m=n(8),b=n(14),w="prototype",x=function(t,e,n){var o,i,r,a=t&x.F,u=t&x.G,s=t&x.S,c=t&x.P,l=t&x.B,d=t&x.W,f=u?y:y[e]||(y[e]={}),p=f[w],v=u?h:s?h[e]:(h[e]||{})[w];for(o in u&&(n=e),n)(i=!a&&v&&void 0!==v[o])&&b(f,o)||(r=i?v[o]:n[o],f[o]=u&&"function"!=typeof v[o]?n[o]:l&&i?g(r,h):d&&v[o]==r?function(o){function t(t,e,n){if(this instanceof o){switch(arguments.length){case 0:return new o;case 1:return new o(t);case 2:return new o(t,e)}return new o(t,e,n)}return o.apply(this,arguments)}return t[w]=o[w],t}(r):c&&"function"==typeof r?g(Function.call,r):r,c&&((f.virtual||(f.virtual={}))[o]=r,t&x.R&&p&&!p[o]&&m(p,o,r)))};x.F=1,x.G=2,x.S=4,x.P=8,x.B=16,x.W=32,x.U=64,x.R=128,t.exports=x},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(42),i=n(16);t.exports=function(t){return o(i(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?o:n)(t)}},function(t,e,n){var o=n(27)("keys"),i=n(28);t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){"use strict";function b(){return this}var w=n(22),x=n(12),k=n(46),S=n(8),T=n(7),L=n(47),E=n(30),C=n(55),_=n(3)("iterator"),D=!([].keys&&"next"in[].keys()),P="values";t.exports=function(t,e,n,o,i,r,a){L(n,e,o);function u(t){if(!D&&t in v)return v[t];switch(t){case"keys":case P:return function(){return new n(this,t)}}return function(){return new n(this,t)}}var s,c,l,d=e+" Iterator",f=i==P,p=!1,v=t.prototype,h=v[_]||v["@@iterator"]||i&&v[i],y=h||u(i),g=i?f?u("entries"):y:void 0,m="Array"==e&&v.entries||h;if(m&&(l=C(m.call(new t)))!==Object.prototype&&l.next&&(E(l,d,!0),w||"function"==typeof l[_]||S(l,_,b)),f&&h&&h.name!==P&&(p=!0,y=function(){return h.call(this)}),w&&!a||!D&&!p&&v[_]||S(v,_,y),T[e]=y,T[d]=b,i)if(s={values:f?y:u(P),keys:r?y:u("keys"),entries:g},a)for(c in s)c in v||k(v,c,s[c]);else x(x.P+x.F*(D||p),e,s);return s}},function(t,e){t.exports=!0},function(t,e,n){var r=n(43);t.exports=function(o,i,t){if(r(o),void 0===i)return o;switch(t){case 1:return function(t){return o.call(i,t)};case 2:return function(t,e){return o.call(i,t,e)};case 3:return function(t,e,n){return o.call(i,t,e,n)}}return function(){return o.apply(i,arguments)}}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var o=n(13),i=n(5).document,r=o(i)&&o(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},function(t,e,n){var o=n(18),i=Math.min;t.exports=function(t){return 0<t?i(o(t),9007199254740991):0}},function(t,e,n){var o=n(4),i=n(5),r="__core-js_shared__",a=i[r]||(i[r]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n(22)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(9).f,i=n(14),r=n(3)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,r)&&o(t,r,{configurable:!0,value:e})}},function(t,e,n){var o=n(16);t.exports=function(t){return Object(o(t))}},function(t,e,n){"use strict";var o=n(56)(!0);n(21)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var o=n(58),i=n(3)("iterator"),r=n(7);t.exports=n(4).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||r[o(t)]}},function(t,e,n){"use strict";n(35);var o,i=n(36);new((o=i)&&o.__esModule?o:{default:o}).default({selector:"#ribs-wysiwyg",height:400})},function(t,e,n){},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=a(s(6)),o=a(s(59)),n=a(s(0)),i=a(s(1)),r=(a(s(66)),a(s(2)));function a(t){return t&&t.__esModule?t:{default:t}}var u=((0,i.default)(l,[{key:"defineOptions",value:function(t){t.height||(t.height="200px"),t.toolbar?t.toolbar=t.toolbar.split(" "):t.toolbar=["UndoRedo","|","Justify","|","Bold","Italic","Underline","Strikethrough","|","FontSize","Blocks","|","Link"],this.options=t}},{key:"initWysiwygDivs",value:function(){this.selector.style.display="none";var t=document.createElement("div");t.id="ribs-wysiwyg-container",this.selector.parentNode.prepend(t),this.wysiwygDiv=document.getElementById("ribs-wysiwyg-container");var e=document.createElement("div");e.id="ribs-wysiwyg-editable",this.wysiwygDiv.append(e),this.editableDiv=document.getElementById("ribs-wysiwyg-editable"),this.editableDiv.style.height=(0,o.default)(this.options.height)?this.options.height+"px":this.options.height,this.editableDiv.contentEditable=!0;var n=document.createElement("div");n.id="ribs-wysiwyg-caret-location",this.wysiwygDiv.append(n),this.addEventsListenersEditableDiv()}},{key:"addEventsListenersEditableDiv",value:function(){this.editableDiv.addEventListener("keydown",function(t){13!==t.keyCode||t.shiftKey||document.execCommand("defaultParagraphSeparator",!1,"p"),r.default.refreshCaretLocationDiv()}),this.editableDiv.addEventListener("click",function(){var t=r.default.getCaretPosition();void 0===t[t.length-1]&&document.execCommand("formatBlock",!1,"p"),r.default.refreshCaretLocationDiv()})}},{key:"initToolbar",value:function(){var t=document.createElement("div");t.id="ribs-wysiwyg-toolbar",this.wysiwygDiv.prepend(t),this.toolbarDiv=document.getElementById("ribs-wysiwyg-toolbar");var e=!0,n=!1,o=void 0;try{for(var i,r=(0,c.default)(this.options.toolbar);!(e=(i=r.next()).done);e=!0){var a=i.value;if("|"===a){var u=document.createElement("div");u.classList.add("ribs-wysiwyg-toolbar-separator"),this.toolbarDiv.append(u)}else s(67)("./"+a+".js").launchClass(this.toolbarDiv,this.editableDiv,this.options)}}catch(t){n=!0,o=t}finally{try{!e&&r.return&&r.return()}finally{if(n)throw o}}}}]),l);function l(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};(0,n.default)(this,l),t.selector?document.querySelector(t.selector)?(this.selector=document.querySelector(t.selector),this.defineOptions(t),this.initWysiwygDivs(),this.initToolbar()):console.error("Selector can't be found in document"):console.error("Selector is mandatory")}e.default=u},function(t,e,n){n(38),n(32),t.exports=n(57)},function(t,e,n){n(39);for(var o=n(5),i=n(8),r=n(7),a=n(3)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<u.length;s++){var c=u[s],l=o[c],d=l&&l.prototype;d&&!d[a]&&i(d,a,c),r[c]=r.Array}},function(t,e,n){"use strict";var o=n(40),i=n(41),r=n(7),a=n(15);t.exports=n(21)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),r.Arguments=r.Array,o("keys"),o("values"),o("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var o=n(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports=!n(11)&&!n(24)(function(){return 7!=Object.defineProperty(n(25)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(13);t.exports=function(t,e){if(!i(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!i(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=n(8)},function(t,e,n){"use strict";var o=n(48),i=n(17),r=n(30),a={};n(8)(a,n(3)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(a,{next:i(1,n)}),r(t,e+" Iterator")}},function(t,e,o){function i(){}var r=o(10),a=o(49),u=o(29),s=o(19)("IE_PROTO"),c="prototype",l=function(){var t,e=o(25)("iframe"),n=u.length;for(e.style.display="none",o(54).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;n--;)delete l[c][u[n]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(i[c]=r(t),n=new i,i[c]=null,n[s]=t):n=l(),void 0===e?n:a(n,e)}},function(t,e,n){var a=n(9),u=n(10),s=n(50);t.exports=n(11)?Object.defineProperties:function(t,e){u(t);for(var n,o=s(e),i=o.length,r=0;r<i;)a.f(t,n=o[r++],e[n]);return t}},function(t,e,n){var o=n(51),i=n(29);t.exports=Object.keys||function(t){return o(t,i)}},function(t,e,n){var a=n(14),u=n(15),s=n(52)(!1),c=n(19)("IE_PROTO");t.exports=function(t,e){var n,o=u(t),i=0,r=[];for(n in o)n!=c&&a(o,n)&&r.push(n);for(;e.length>i;)a(o,n=e[i++])&&(~s(r,n)||r.push(n));return r}},function(t,e,n){var s=n(15),c=n(26),l=n(53);t.exports=function(u){return function(t,e,n){var o,i=s(t),r=c(i.length),a=l(n,r);if(u&&e!=e){for(;a<r;)if((o=i[a++])!=o)return!0}else for(;a<r;a++)if((u||a in i)&&i[a]===e)return u||a||0;return!u&&-1}}},function(t,e,n){var o=n(18),i=Math.max,r=Math.min;t.exports=function(t,e){return(t=o(t))<0?i(t+e,0):r(t,e)}},function(t,e,n){var o=n(5).document;t.exports=o&&o.documentElement},function(t,e,n){var o=n(14),i=n(31),r=n(19)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),o(t,r)?t[r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var s=n(18),c=n(16);t.exports=function(u){return function(t,e){var n,o,i=String(c(t)),r=s(e),a=i.length;return r<0||a<=r?u?"":void 0:(n=i.charCodeAt(r))<55296||56319<n||r+1===a||(o=i.charCodeAt(r+1))<56320||57343<o?u?i.charAt(r):n:u?i.slice(r,r+2):o-56320+(n-55296<<10)+65536}}},function(t,e,n){var o=n(10),i=n(33);t.exports=n(4).getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return o(e.call(t))}},function(t,e,n){var i=n(20),r=n(3)("toStringTag"),a="Arguments"==i(function(){return arguments}());t.exports=function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?n:a?i(e):"Object"==(o=i(e))&&"function"==typeof e.callee?"Arguments":o}},function(t,e,n){t.exports={default:n(60),__esModule:!0}},function(t,e,n){n(61),t.exports=n(4).Number.isInteger},function(t,e,n){var o=n(12);o(o.S,"Number",{isInteger:n(62)})},function(t,e,n){var o=n(13),i=Math.floor;t.exports=function(t){return!o(t)&&isFinite(t)&&i(t)===t}},function(t,e,n){t.exports={default:n(64),__esModule:!0}},function(t,e,n){n(65);var o=n(4).Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},function(t,e,n){var o=n(12);o(o.S+o.F*!n(11),"Object",{defineProperty:n(9).f})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var f=i(n(6)),o=i(n(0));function i(t){return t&&t.__esModule?t:{default:t}}var r=((0,i(n(1)).default)(a,null,[{key:"getHeight",value:function(t){var e=window.getComputedStyle(t).getPropertyValue("max-height");"none"!==e&&(t.style.maxHeight="inherit"),t.style.display="block";var n=parseInt(window.getComputedStyle(t).getPropertyValue("height"));return t.style.display="","none"!==e&&(t.style.maxHeight=e),n}},{key:"getWidth",value:function(t){t.style.display="block";var e=parseInt(window.getComputedStyle(t).getPropertyValue("width"));return t.style.display="",e}},{key:"toggleSlide",value:function(t,e){var n=0,o=window.getComputedStyle(t).getPropertyValue("max-height");"none"!==o&&"0px"!==o||(n=this.getHeight(t)),t.style.transition="max-height "+e/1e3+"s ease-in-out, padding "+e/1e3+"s ease-in-out",t.style.maxHeight=0,t.style.display="block",t.style.overflow="hidden",0===n?t.style.padding="0px":t.style.removeProperty("padding"),setTimeout(function(){t.style.maxHeight=n+"px"},10)}},{key:"wrap",value:function(t,e,n){var o=2<arguments.length&&void 0!==n?n:null,i=t.parentNode,r=document.createElement(e);r.className=o,i.insertBefore(r,t),i.removeChild(t),r.appendChild(t)}},{key:"parents",value:function(t,e){for(;t&&t!==document;t=t.parentNode){if("class"===this.checkWanted(e)&&t.classList.contains(e.split(".")[1]))return t;if("id"===this.checkWanted(e)&&t.id===e.split("#")[1])return t}return null}},{key:"checkWanted",value:function(t){return-1!==t.indexOf(".")?"class":-1!==t.indexOf("#")?"id":null}},{key:"validateMail",value:function(t){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}},{key:"testPasswordStrength",value:function(t,e,n){var o=1<arguments.length&&void 0!==e?e:4,i=2<arguments.length&&void 0!==n?n:8,r=0,a=[/(?=.*[a-z])/,/(?=.*[A-Z])/,/(?=.*[0-9])/,/(?=.[!@#$%\^&*])/],u=!0,s=!1,c=void 0;try{for(var l,d=(0,f.default)(a);!(u=(l=d.next()).done);u=!0)l.value.test(t)&&(r+=100/a.length)}catch(t){s=!0,c=t}finally{try{!u&&d.return&&d.return()}finally{if(s)throw c}}return this.passwordStrength=r,t.length<i?(this.passwordError="You password must contain at least "+i+" caracters",!1):o*(100/a.length)<=r||!(this.passwordError="You password is not enough secure")}}]),a);function a(){(0,o.default)(this,a)}e.default=r},function(t,e,n){var o={"./Blocks.js":68,"./Bold.js":69,"./FontSize.js":70,"./Italic.js":71,"./Justify.js":72,"./Link.js":73,"./Strikethrough.js":85,"./Underline.js":86,"./UndoRedo.js":87};function i(t){var e=r(t);return n(e)}function r(t){if(n.o(o,t))return o[t];var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}i.keys=function(){return Object.keys(o)},i.resolve=r,(t.exports=i).id=67},function(t,e,n){"use strict";var o=a(n(0)),i=a(n(1)),r=a(n(2));function a(t){return t&&t.__esModule?t:{default:t}}var u=((0,i.default)(s,[{key:"addButtonToToolbar",value:function(){var e=this,t=document.createElement("div"),n=document.createElement("select");for(var o in n.id="ribs-wysiwyg-toolbar-blocks",n.addEventListener("change",function(t){return e.changeBlock(t)}),t.append(n),this.toolbarDiv.append(t),this.options.blocks){var i=document.createElement("option");i.text=""+this.options.blocks[o],i.value=""+o,n.add(i),this.blocksMenu=n}}},{key:"defineOptions",value:function(){this.options.blocks||(this.options.blocks={p:"Paragraph",h1:"Heading 1",h2:"Heading 2",h3:"Heading 3",h4:"Heading 4",h5:"Heading 5",h6:"Heading 6"})}},{key:"addSelectEventListener",value:function(t){var e=this;this.editableDiv.addEventListener(t,function(){if(window.getSelection&&window.getSelection().getRangeAt&&window.getSelection().anchorNode){var t=window.getSelection().anchorNode;t&&t&&t.parentNode&&0<=e.options.blocks.hasOwnProperty(t.parentNode.tagName.toLowerCase())&&(e.blocksMenu.value=t.parentNode.tagName.toLowerCase())}})}},{key:"changeBlock",value:function(t){document.execCommand("formatBlock",!1,"<"+t.currentTarget.value+">"),this.editableDiv.focus(),r.default.refreshCaretLocationDiv()}}]),s);function s(t,e,n){(0,o.default)(this,s),this.toolbarDiv=t,this.editableDiv=e,this.options=n,this.defineOptions(),this.addButtonToToolbar(),this.addSelectEventListener("click"),this.addSelectEventListener("keydown")}t.exports={launchClass:function(t,e,n){new u(t,e,n)}}},function(t,e,n){"use strict";var o=a(n(0)),i=a(n(1)),r=a(n(2));function a(t){return t&&t.__esModule?t:{default:t}}var u=((0,i.default)(s,[{key:"addButtonToToolbar",value:function(){var t=this,e=document.createElement("div"),n=document.createElement("button");n.id="ribs-wysiwyg-toolbar-bold",n.innerHTML='<span style="font-weight: bold">B</span>',n.addEventListener("click",function(){return t.setTextToBold()}),e.append(n),this.toolbarDiv.append(e)}},{key:"setTextToBold",value:function(){document.execCommand("bold"),this.editableDiv.focus(),r.default.refreshCaretLocationDiv()}}]),s);function s(t,e,n){(0,o.default)(this,s),this.toolbarDiv=t,this.editableDiv=e,this.addButtonToToolbar()}t.exports={launchClass:function(t,e,n){new u(t,e,n)}}},function(t,e,n){"use strict";var d=i(n(6)),o=i(n(0));function i(t){return t&&t.__esModule?t:{default:t}}var r=((0,i(n(1)).default)(a,[{key:"addButtonToToolbar",value:function(){var e=this,t=document.createElement("div"),n=document.createElement("select");n.id="ribs-wysiwyg-toolbar-fontsize",n.addEventListener("change",function(t){return e.changeFontSize(t)}),t.append(n),this.toolbarDiv.append(t);var o=window.getComputedStyle(document.querySelector("body"),null).getPropertyValue("font-size"),i=!0,r=!1,a=void 0;try{for(var u,s=(0,d.default)(this.options.fontSize);!(i=(u=s.next()).done);i=!0){var c=u.value,l=document.createElement("option");parseInt(c)===parseInt(o)&&(l.selected=!0,l.dataset.default=!0),l.text=c+"px",l.value=c+"px",n.add(l),this.fontSizeMenu=n}}catch(t){r=!0,a=t}finally{try{!i&&s.return&&s.return()}finally{if(r)throw a}}}},{key:"defineOptions",value:function(){this.options.fontSize||(this.options.fontSize=[8,10,12,14,16,18,24,36])}},{key:"addSelectEventListener",value:function(t){var e=this;this.editableDiv.addEventListener(t,function(){if(window.getSelection&&window.getSelection().getRangeAt&&window.getSelection().anchorNode){var t=window.getSelection().anchorNode;t&&t&&void 0!==t.parentNode&&t.parentNode.style&&t.parentNode.style.fontSize?e.fontSizeMenu.value=t.parentNode.style.fontSize:e.fontSizeMenu.value=e.fontSizeMenu.querySelector("[data-default]").value}})}},{key:"replaceFontBySpan",value:function(t,e){var n=t.parentNode,o=document.createElement("span");o.appendChild(document.createTextNode(t.textContent)),o.style.fontSize=e,n.replaceChild(o,t);var i=document.createRange(),r=window.getSelection();i.selectNodeContents(this.editableDiv),i.collapse(!1),r.removeAllRanges(),r.addRange(i),this.editableDiv.focus(),i.detach()}},{key:"changeFontSize",value:function(t){var e=this;this.editableDiv.focus(),document.execCommand("fontSize",!1,"1");var n=t.currentTarget.value,o=document.getElementsByTagName("font")[0];o?this.replaceFontBySpan(o,n):this.editableDiv.addEventListener("keydown",function(){var t=document.getElementsByTagName("font")[0];e.replaceFontBySpan(t,n)})}}]),a);function a(t,e,n){(0,o.default)(this,a),this.toolbarDiv=t,this.editableDiv=e,this.options=n,this.defineOptions(),this.addButtonToToolbar(),this.addSelectEventListener("click"),this.addSelectEventListener("keydown")}t.exports={launchClass:function(t,e,n){new r(t,e,n)}}},function(t,e,n){"use strict";var o=a(n(0)),i=a(n(1)),r=a(n(2));function a(t){return t&&t.__esModule?t:{default:t}}var u=((0,i.default)(s,[{key:"addButtonToToolbar",value:function(){var t=this,e=document.createElement("div"),n=document.createElement("button");n.id="ribs-wysiwyg-toolbar-italic",n.innerHTML='<span style="font-style: italic">I</span>',n.addEventListener("click",function(){return t.setTextToItalic()}),e.append(n),this.toolbarDiv.append(e)}},{key:"setTextToItalic",value:function(){document.execCommand("italic"),this.editableDiv.focus(),r.default.refreshCaretLocationDiv()}}]),s);function s(t,e,n){(0,o.default)(this,s),this.toolbarDiv=t,this.editableDiv=e,this.addButtonToToolbar()}t.exports={launchClass:function(t,e,n){new u(t,e,n)}}},function(t,e,n){"use strict";var u=a(n(6)),o=a(n(0)),i=a(n(1)),r=a(n(2));function a(t){return t&&t.__esModule?t:{default:t}}var s=((0,i.default)(c,[{key:"addButtonToToolbar",value:function(){function t(t){var e=document.createElement("div"),n=document.createElement("button");n.id="ribs-wysiwyg-toolbar-justify-"+t,n.innerHTML=t,n.addEventListener("click",function(){return o.setTextToJustify(t)}),e.append(n),o.toolbarDiv.append(e)}var o=this,e=!0,n=!1,i=void 0;try{for(var r,a=(0,u.default)(["Left","Center","Right","Full"]);!(e=(r=a.next()).done);e=!0)t(r.value)}catch(t){n=!0,i=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw i}}}},{key:"setTextToJustify",value:function(t){document.execCommand("justify"+t),this.editableDiv.focus(),r.default.refreshCaretLocationDiv()}}]),c);function c(t,e,n){(0,o.default)(this,c),this.toolbarDiv=t,this.editableDiv=e,this.addButtonToToolbar()}t.exports={launchClass:function(t,e,n){new s(t,e,n)}}},function(t,e,n){"use strict";var r=s(n(0)),o=s(n(1)),i=s(n(2)),a=s(n(74)),u=s(n(83));function s(t){return t&&t.__esModule?t:{default:t}}var c=((0,o.default)(l,[{key:"addButtonToToolbar",value:function(){var t=this,e=document.createElement("div"),n=document.createElement("button");n.id="ribs-wysiwyg-toolbar-link",n.innerHTML="<span>Link</span>",n.addEventListener("click",function(){return t.showPopup()}),e.append(n),this.toolbarDiv.append(e)}},{key:"createInputPopup",value:function(t,e){var n=document.createElement("div"),o=document.createElement("label");o.innerText=e,o.for=t;var i=document.createElement("input");return i.id=t,i.name=t,n.appendChild(o),n.appendChild(i),n}},{key:"createContentDivPopup",value:function(){var t=document.createElement("div");t.id="set-content";var e=this.createInputPopup("ribs-wysiwyg-link-url","URL"),n=this.createInputPopup("ribs-wysiwyg-link-text","Text to display"),o=this.createInputPopup("ribs-wysiwyg-link-title","Title");return t.appendChild(e),t.appendChild(n),t.appendChild(o),t}},{key:"createLinksDivPopup",value:function(){var t=document.createElement("div");t.classList.add("link");var e=document.createElement("a");e.classList.add("cancel"),e.dataset.close="",e.innerText="Close",t.appendChild(e);var n=document.createElement("a");return n.classList.add("validate"),n.innerText="Validate",t.appendChild(n),t}},{key:"createPopup",value:function(){var t=document.createElement("div");t.id="ribs-wysiwyg-link-popup",t.classList.add("ribs-popup");var e=document.createElement("div");e.classList.add("content");var n=this.createContentDivPopup(),o=this.createLinksDivPopup(),i=document.createElement("div");i.classList.add("clear"),e.appendChild(n),e.appendChild(o),e.appendChild(i),t.appendChild(e),document.getElementById("ribs-wysiwyg-container").appendChild(t)}},{key:"showPopup",value:function(){this.ribsPopup.openJsPopup("ribs-wysiwyg-link-popup")}},{key:"setTextToLink",value:function(){document.execCommand("createLink"),this.editableDiv.focus(),i.default.refreshCaretLocationDiv()}}]),l);function l(t,e,n){(0,r.default)(this,l),this.toolbarDiv=t,this.editableDiv=e,this.ribsPopup=new a.default,this.addButtonToToolbar(),this.createPopup();var o=document.getElementsByTagName("head")[0],i=document.createElement("style");i.innerText=u.default.toString(),o.appendChild(i)}t.exports={launchClass:function(t,e,n){new c(t,e,n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=u(n(75)),o=u(n(0)),i=u(n(1)),r=u(n(82));function u(t){return t&&t.__esModule?t:{default:t}}var s=((0,i.default)(c,[{key:"openPopup",value:function(t){var e=this;t.preventDefault();var n=t.currentTarget,o=document.getElementById(t.currentTarget.dataset.popup);void 0!==t.currentTarget.dataset.ajax&&this.setContent(o,t.currentTarget.dataset.ajax),o.classList.add("ribs-displayed"),document.body.classList.add("ribs-popup-body");var i=o.querySelectorAll(".ribs-popup [data-close]"),r=o.querySelectorAll(".ribs-popup [data-validate]");0<i.length&&(0,a.default)(i).forEach(function(t){t.addEventListener("click",function(t){return e.closePopup(t)})}),0<r.length&&(0,a.default)(r).forEach(function(t){t.addEventListener("click",function(t){return e.setActionValidate(t,n)})})}},{key:"openJsPopup",value:function(t){var e=this,n=document.getElementById(t);n.classList.add("ribs-displayed"),document.body.classList.add("ribs-popup-body");var o=n.querySelectorAll(".ribs-popup [data-close]"),i=n.querySelectorAll(".ribs-popup [data-validate]");0<o.length&&(0,a.default)(o).forEach(function(t){t.addEventListener("click",function(t){return e.closePopup(t)})}),0<i.length&&(0,a.default)(i).forEach(function(t){t.addEventListener("click",function(t){return e.setActionValidate(t,null)})})}},{key:"setActionValidate",value:function(t,e){null!==e.dataset.href&&void 0!==e.dataset.href?t.currentTarget.href=e.dataset.href:null!==e.dataset.form&&void 0!==e.dataset.form?document.getElementById(e.dataset.form).submit():this.closePopup(t)}},{key:"closePopup",value:function(t){t.preventDefault();var e=r.default.parents(t.currentTarget,".ribs-popup");null!==e&&(e.classList.remove("ribs-displayed"),document.body.classList.remove("ribs-popup-body"))}},{key:"setContent",value:function(t,e){var n=t.querySelector("#set-content"),o=new Request(e,{method:"POST",credentials:"same-origin"});fetch(o).then(function(t){return t.text()}).then(function(t){n.innerHTML=t})}}]),c);function c(){var e=this;(0,o.default)(this,c);var t=document.querySelectorAll("[data-ribspopup]");(0,a.default)(t).forEach(function(t){t.addEventListener("click",function(t){return e.openPopup(t)})})}new(e.default=s)},function(t,e,n){t.exports={default:n(76),__esModule:!0}},function(t,e,n){n(32),n(77),t.exports=n(4).Array.from},function(t,e,n){"use strict";var v=n(23),o=n(12),h=n(31),y=n(78),g=n(79),m=n(26),b=n(80),w=n(33);o(o.S+o.F*!n(81)(function(t){Array.from(t)}),"Array",{from:function(t,e,n){var o,i,r,a,u=h(t),s="function"==typeof this?this:Array,c=arguments.length,l=1<c?e:void 0,d=void 0!==l,f=0,p=w(u);if(d&&(l=v(l,2<c?n:void 0,2)),null==p||s==Array&&g(p))for(i=new s(o=m(u.length));f<o;f++)b(i,f,d?l(u[f],f):u[f]);else for(a=p.call(u),i=new s;!(r=a.next()).done;f++)b(i,f,d?y(a,l,[r.value,f],!0):r.value);return i.length=f,i}})},function(t,e,n){var r=n(10);t.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(t){var i=e.return;throw void 0!==i&&r(i.call(e)),t}}},function(t,e,n){var o=n(7),i=n(3)("iterator"),r=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||r[i]===t)}},function(t,e,n){"use strict";var o=n(9),i=n(17);t.exports=function(t,e,n){e in t?o.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var r=n(3)("iterator"),a=!1;try{var o=[7][r]();o.return=function(){a=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!a)return!1;var n=!1;try{var o=[7],i=o[r]();i.next=function(){return{done:n=!0}},o[r]=function(){return i},t(o)}catch(t){}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(0));function i(t){return t&&t.__esModule?t:{default:t}}var r=((0,i(n(1)).default)(a,null,[{key:"getHeight",value:function(t){var e=window.getComputedStyle(t).getPropertyValue("max-height");"none"!==e&&(t.style.maxHeight="inherit"),t.style.display="block";var n=parseInt(window.getComputedStyle(t).getPropertyValue("height"));return t.style.display="","none"!==e&&(t.style.maxHeight=e),n}},{key:"toggleSlide",value:function(t,e){var n=0,o=window.getComputedStyle(t).getPropertyValue("max-height");"none"!==o&&"0px"!==o||(n=this.getHeight(t)),t.style.transition="max-height 0.5s ease-in-out",t.style.maxHeight=0,t.style.display="block",t.style.overflow="hidden",setTimeout(function(){t.style.maxHeight=n+"px"},e)}},{key:"wrap",value:function(t,e,n){var o=2<arguments.length&&void 0!==n?n:null,i=t.parentNode,r=document.createElement(e);r.className=o,i.insertBefore(r,t),i.removeChild(t),r.appendChild(t)}},{key:"parents",value:function(t,e){for(;t&&t!==document;t=t.parentNode){if("class"===this.checkWanted(e)&&t.classList.contains(e.split(".")[1]))return t;if("id"===this.checkWanted(e)&&t.id===e.split("#")[1])return t}return null}},{key:"checkWanted",value:function(t){return-1!==t.indexOf(".")?"class":-1!==t.indexOf("#")?"id":null}}]),a);function a(){(0,o.default)(this,a)}e.default=r},function(t,e,n){(t.exports=n(84)(!1)).push([t.i,".ribs-popup{position:fixed;z-index:900;width:100%;min-height:100%;max-height:100%;background-color:rgba(70,70,70,.9);visibility:hidden;opacity:0;transition:opacity .2s linear;top:0;left:0;right:0;bottom:0}.ribs-popup .content{position:relative;background-color:#fff;display:block;z-index:100;margin:10% auto;max-height:60%;min-height:102px;overflow-y:auto;padding:10px}.ribs-popup .content.fixed-width{width:60%;max-width:1120px}.ribs-popup .content h2{margin-bottom:20px}.ribs-popup .content p{margin-bottom:10px;font-size:14px;color:grey}.ribs-popup .content p.warning{color:#f34336;font-weight:700}.ribs-popup .content ul li{margin-bottom:10px;font-weight:700}.ribs-popup .content .link{float:right;margin-top:15px}.ribs-popup .content .link a{min-height:36px;padding:10px;color:#2196f3;text-transform:uppercase;transition:all .3s ease;text-decoration:none}.ribs-popup .content .link a.validate:hover{color:#dd2a2a}.ribs-popup .content .link a.cancel:hover{color:#217ed3}.ribs-popup .close{position:sticky;top:10px;right:10px;float:right;background:#e1e1e1;color:#b5b5b5;transition:all .3s ease;width:30px;height:30px;line-height:30px;border-radius:50%;text-align:center;cursor:pointer}.ribs-popup .close:hover{background:#ccc}@media screen and (max-width:1024px){.ribs-popup .close{width:50px;height:50px;line-height:50px}}.ribs-popup .clear{clear:both}.ribs-displayed{transition:opacity .2s linear;visibility:visible;opacity:1}.ribs-popup-body{overflow:hidden;-webkit-overflow-scrolling:touch}",""])},function(t,e,n){"use strict";t.exports=function(n){var a=[];return a.toString=function(){return this.map(function(t){var e=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(o),r=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(r).concat([i]).join("\n")}return[n].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},a.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(o=0;o<t.length;o++){var r=t[o];null!=r[0]&&n[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),a.push(r))}},a}},function(t,e,n){"use strict";var o=a(n(0)),i=a(n(1)),r=a(n(2));function a(t){return t&&t.__esModule?t:{default:t}}var u=((0,i.default)(s,[{key:"addButtonToToolbar",value:function(){var t=this,e=document.createElement("div"),n=document.createElement("button");n.id="ribs-wysiwyg-toolbar-strikethrough",n.innerHTML='<span style="text-decoration: line-through">S</span>',n.addEventListener("click",function(){return t.setTextToStrikethrough()}),e.append(n),this.toolbarDiv.append(e)}},{key:"setTextToStrikethrough",value:function(){document.execCommand("strikethrough"),this.editableDiv.focus(),r.default.refreshCaretLocationDiv()}}]),s);function s(t,e,n){(0,o.default)(this,s),this.toolbarDiv=t,this.editableDiv=e,this.addButtonToToolbar()}t.exports={launchClass:function(t,e,n){new u(t,e,n)}}},function(t,e,n){"use strict";var o=a(n(0)),i=a(n(1)),r=a(n(2));function a(t){return t&&t.__esModule?t:{default:t}}var u=((0,i.default)(s,[{key:"addButtonToToolbar",value:function(){var t=this,e=document.createElement("div"),n=document.createElement("button");n.id="ribs-wysiwyg-toolbar-underline",n.innerHTML='<span style="text-decoration: underline">U</span>',n.addEventListener("click",function(){return t.setTextToUnderline()}),e.append(n),this.toolbarDiv.append(e)}},{key:"setTextToUnderline",value:function(){document.execCommand("underline"),this.editableDiv.focus(),r.default.refreshCaretLocationDiv()}}]),s);function s(t,e,n){(0,o.default)(this,s),this.toolbarDiv=t,this.editableDiv=e,this.addButtonToToolbar()}t.exports={launchClass:function(t,e,n){new u(t,e,n)}}},function(t,e,n){"use strict";var u=a(n(6)),o=a(n(0)),i=a(n(1)),r=a(n(2));function a(t){return t&&t.__esModule?t:{default:t}}var s=((0,i.default)(c,[{key:"addButtonToToolbar",value:function(){function t(e){var t=document.createElement("div"),n=document.createElement("button");n.id="ribs-wysiwyg-toolbar-undoRedo-"+e,n.classList.add("disabled"),n.innerHTML=e,n.addEventListener("click",function(t){return o.undoRedo(t,e)}),t.append(n),o.toolbarDiv.append(t),sessionStorage.removeItem("undoCount"),sessionStorage.removeItem("redoCount")}var o=this,e=!0,n=!1,i=void 0;try{for(var r,a=(0,u.default)(["Undo","Redo"]);!(e=(r=a.next()).done);e=!0)t(r.value)}catch(t){n=!0,i=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw i}}}},{key:"undoRedo",value:function(t,e){t.target.classList.contains("disabled")||("Undo"===e&&(sessionStorage.setItem("undoCount",parseInt(sessionStorage.getItem("undoCount"))-1),sessionStorage.setItem("redoCount",parseInt(sessionStorage.getItem("redoCount")?sessionStorage.getItem("redoCount"):0)+1),0===parseInt(sessionStorage.getItem("undoCount"))&&t.target.classList.add("disabled"),0<parseInt(sessionStorage.getItem("redoCount"))&&document.getElementById("ribs-wysiwyg-toolbar-undoRedo-Redo").classList.remove("disabled")),"Redo"===e&&(sessionStorage.setItem("redoCount",parseInt(sessionStorage.getItem("redoCount"))-1),sessionStorage.setItem("undoCount",parseInt(sessionStorage.getItem("undoCount")?sessionStorage.getItem("undoCount"):0)+1),0===parseInt(sessionStorage.getItem("redoCount"))&&t.target.classList.add("disabled"),0<parseInt(sessionStorage.getItem("undoCount"))&&document.getElementById("ribs-wysiwyg-toolbar-undoRedo-Undo").classList.remove("disabled")),document.execCommand(e),this.editableDiv.focus(),r.default.refreshCaretLocationDiv())}},{key:"addUndoEventListener",value:function(){this.editableDiv.addEventListener("keydown",function(){var t=sessionStorage.getItem("undoCount");sessionStorage.setItem("undoCount",parseInt(t||0)+1),sessionStorage.setItem("redoCount",0),document.getElementById("ribs-wysiwyg-toolbar-undoRedo-Redo").classList.remove("disabled"),t&&document.getElementById("ribs-wysiwyg-toolbar-undoRedo-Undo").classList.remove("disabled")})}}]),c);function c(t,e,n){(0,o.default)(this,c),this.toolbarDiv=t,this.editableDiv=e,this.addButtonToToolbar(),this.addUndoEventListener()}t.exports={launchClass:function(t,e,n){new s(t,e,n)}}}]);