!function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=29)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(24)("wks"),o=n(25),i=n(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e,n){var r=n(8),o=n(23);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(21)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(63),i=(r=o)&&r.__esModule?r:{default:r};function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}e.default=function(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}},function(t,e){t.exports={}},function(t,e,n){var r=n(9),o=n(40),i=n(41),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(37),o=n(13);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var y=n(0),h=n(1),g=n(38),b=n(3),m=n(11),w="prototype",x=function(t,e,n){var r,o,i,u=t&x.F,a=t&x.G,s=t&x.S,c=t&x.P,l=t&x.B,f=t&x.W,d=a?h:h[e]||(h[e]={}),p=d[w],v=a?y:s?y[e]:(y[e]||{})[w];for(r in a&&(n=e),n)(o=!u&&v&&void 0!==v[r])&&m(d,r)||(i=o?v[r]:n[r],d[r]=a&&"function"!=typeof v[r]?n[r]:l&&o?g(i,y):f&&v[r]==i?function(r){function t(t,e,n){if(this instanceof r){switch(arguments.length){case 0:return new r;case 1:return new r(t);case 2:return new r(t,e)}return new r(t,e,n)}return r.apply(this,arguments)}return t[w]=r[w],t}(i):c&&"function"==typeof i?g(Function.call,i):i,c&&((d.virtual||(d.virtual={}))[r]=i,t&x.R&&p&&!p[r]&&b(p,r,i)))};x.F=1,x.G=2,x.S=4,x.P=8,x.B=16,x.W=32,x.U=64,x.R=128,t.exports=x},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?r:n)(t)}},function(t,e,n){var r=n(24)("keys"),o=n(25);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){t.exports={default:n(32),__esModule:!0}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){"use strict";function m(){return this}var w=n(20),x=n(14),S=n(42),_=n(3),T=n(7),k=n(43),O=n(27),E=n(52),C=n(2)("iterator"),M=!([].keys&&"next"in[].keys()),L="values";t.exports=function(t,e,n,r,o,i,u){k(n,e,r);function a(t){if(!M&&t in v)return v[t];switch(t){case"keys":case L:return function(){return new n(this,t)}}return function(){return new n(this,t)}}var s,c,l,f=e+" Iterator",d=o==L,p=!1,v=t.prototype,y=v[C]||v["@@iterator"]||o&&v[o],h=y||a(o),g=o?d?a("entries"):h:void 0,b="Array"==e&&v.entries||y;if(b&&(l=E(b.call(new t)))!==Object.prototype&&l.next&&(O(l,f,!0),w||"function"==typeof l[C]||_(l,C,m)),d&&y&&y.name!==L&&(p=!0,h=function(){return y.call(this)}),w&&!u||!M&&!p&&v[C]||_(v,C,h),T[e]=h,T[f]=m,o)if(s={values:d?h:a(L),keys:i?h:a("keys"),entries:g},u)for(c in s)c in v||S(v,c,s[c]);else x(x.P+x.F*(M||p),e,s);return s}},function(t,e){t.exports=!0},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(10),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(1),o=n(0),i="__core-js_shared__",u=o[i]||(o[i]={});(t.exports=function(t,e){return u[t]||(u[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(20)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(8).f,o=n(11),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(5));function o(t){return t&&t.__esModule?t:{default:t}}var i=((0,o(n(6)).default)(u,null,[{key:"getCaretPosition",value:function(){if(window.getSelection&&window.getSelection().getRangeAt&&window.getSelection().anchorNode){for(var t=document.getElementById("ribs-wysiwyg-editable"),e=window.getSelection().anchorNode,n=[];e&&e!==t;e=e.parentNode)void 0!==e.tagName&&n.push(e.tagName.toLowerCase());return n.reverse()}return[]}},{key:"getCaretPositionAsString",value:function(){var t=this.getCaretPosition();return t.length?t.join(" > "):""}},{key:"refreshCaretLocationDiv",value:function(){document.getElementById("ribs-wysiwyg-caret-location").innerHTML=u.getCaretPositionAsString()}}]),u);function u(){(0,r.default)(this,u)}e.default=i},function(t,e,n){"use strict";n(30);var r,o=n(31);new((r=o)&&r.__esModule?r:{default:r}).default({selector:"#ribs-wysiwyg",height:400})},function(t,e,n){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=u(a(17)),r=u(a(59)),n=u(a(5)),o=u(a(6)),i=(u(a(66)),u(a(28)));function u(t){return t&&t.__esModule?t:{default:t}}var c=((0,o.default)(l,[{key:"defineOptions",value:function(t){t.height||(t.height="200px"),t.fontSize||(t.fontSize=[8,10,12,14,18,24,36]),t.toolbar?t.toolbar=t.toolbar.split(" "):t.toolbar=["Bold","Italic","FontSize"],this.options=t}},{key:"initWysiwygDivs",value:function(){this.selector.style.display="none";var t=document.createElement("div");t.id="ribs-wysiwyg-container",this.selector.parentNode.prepend(t),this.wysiwygDiv=document.getElementById("ribs-wysiwyg-container");var e=document.createElement("div");e.id="ribs-wysiwyg-editable",this.wysiwygDiv.append(e),this.editableDiv=document.getElementById("ribs-wysiwyg-editable"),this.editableDiv.style.height=(0,r.default)(this.options.height)?this.options.height+"px":this.options.height,this.editableDiv.contentEditable=!0;var n=document.createElement("div");n.id="ribs-wysiwyg-caret-location",this.wysiwygDiv.append(n),this.addEventsListenersEditableDiv()}},{key:"addEventsListenersEditableDiv",value:function(){this.editableDiv.addEventListener("keydown",function(t){13!==t.keyCode||t.shiftKey||document.execCommand("defaultParagraphSeparator",!1,"p"),i.default.refreshCaretLocationDiv()}),this.editableDiv.addEventListener("click",function(){var t=i.default.getCaretPosition();void 0===t[t.length-1]&&document.execCommand("formatBlock",!1,"p"),i.default.refreshCaretLocationDiv()})}},{key:"initToolbar",value:function(){var t=document.createElement("div");t.id="ribs-wysiwyg-toolbar",this.wysiwygDiv.prepend(t),this.toolbarDiv=document.getElementById("ribs-wysiwyg-toolbar");var e=!0,n=!1,r=void 0;try{for(var o,i=(0,s.default)(this.options.toolbar);!(e=(o=i.next()).done);e=!0){var u=o.value;a(67)("./"+u+".js").launchClass(this.toolbarDiv,this.editableDiv,this.options)}}catch(t){n=!0,r=t}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}}}]),l);function l(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};(0,n.default)(this,l),t.selector?document.querySelector(t.selector)?(this.selector=document.querySelector(t.selector),this.defineOptions(t),this.initWysiwygDivs(),this.initToolbar()):console.error("Selector can't be found in document"):console.error("Selector is mandatory")}e.default=c},function(t,e,n){n(33),n(54),t.exports=n(56)},function(t,e,n){n(34);for(var r=n(0),o=n(3),i=n(7),u=n(2)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<a.length;s++){var c=a[s],l=r[c],f=l&&l.prototype;f&&!f[u]&&o(f,u,c),i[c]=i.Array}},function(t,e,n){"use strict";var r=n(35),o=n(36),i=n(7),u=n(12);t.exports=n(19)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(18);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var i=n(39);t.exports=function(r,o,t){if(i(r),void 0===o)return r;switch(t){case 1:return function(t){return r.call(o,t)};case 2:return function(t,e){return r.call(o,t,e)};case 3:return function(t,e,n){return r.call(o,t,e,n)}}return function(){return r.apply(o,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports=!n(4)&&!n(21)(function(){return 7!=Object.defineProperty(n(22)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var o=n(10);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";var r=n(44),o=n(23),i=n(27),u={};n(3)(u,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,r){function o(){}var i=r(9),u=r(45),a=r(26),s=r(16)("IE_PROTO"),c="prototype",l=function(){var t,e=r(22)("iframe"),n=a.length;for(e.style.display="none",r(51).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;n--;)delete l[c][a[n]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(o[c]=i(t),n=new o,o[c]=null,n[s]=t):n=l(),void 0===e?n:u(n,e)}},function(t,e,n){var u=n(8),a=n(9),s=n(46);t.exports=n(4)?Object.defineProperties:function(t,e){a(t);for(var n,r=s(e),o=r.length,i=0;i<o;)u.f(t,n=r[i++],e[n]);return t}},function(t,e,n){var r=n(47),o=n(26);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var u=n(11),a=n(12),s=n(48)(!1),c=n(16)("IE_PROTO");t.exports=function(t,e){var n,r=a(t),o=0,i=[];for(n in r)n!=c&&u(r,n)&&i.push(n);for(;e.length>o;)u(r,n=e[o++])&&(~s(i,n)||i.push(n));return i}},function(t,e,n){var s=n(12),c=n(49),l=n(50);t.exports=function(a){return function(t,e,n){var r,o=s(t),i=c(o.length),u=l(n,i);if(a&&e!=e){for(;u<i;)if((r=o[u++])!=r)return!0}else for(;u<i;u++)if((a||u in o)&&o[u]===e)return a||u||0;return!a&&-1}}},function(t,e,n){var r=n(15),o=Math.min;t.exports=function(t){return 0<t?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(15),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(11),o=n(53),i=n(16)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(13);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(55)(!0);n(19)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var s=n(15),c=n(13);t.exports=function(a){return function(t,e){var n,r,o=String(c(t)),i=s(e),u=o.length;return i<0||u<=i?a?"":void 0:(n=o.charCodeAt(i))<55296||56319<n||i+1===u||(r=o.charCodeAt(i+1))<56320||57343<r?a?o.charAt(i):n:a?o.slice(i,i+2):r-56320+(n-55296<<10)+65536}}},function(t,e,n){var r=n(9),o=n(57);t.exports=n(1).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){var r=n(58),o=n(2)("iterator"),i=n(7);t.exports=n(1).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var o=n(18),i=n(2)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:u?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){t.exports={default:n(60),__esModule:!0}},function(t,e,n){n(61),t.exports=n(1).Number.isInteger},function(t,e,n){var r=n(14);r(r.S,"Number",{isInteger:n(62)})},function(t,e,n){var r=n(10),o=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&o(t)===t}},function(t,e,n){t.exports={default:n(64),__esModule:!0}},function(t,e,n){n(65);var r=n(1).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(14);r(r.S+r.F*!n(4),"Object",{defineProperty:n(8).f})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var d=o(n(17)),r=o(n(5));function o(t){return t&&t.__esModule?t:{default:t}}var i=((0,o(n(6)).default)(u,null,[{key:"getHeight",value:function(t){var e=window.getComputedStyle(t).getPropertyValue("max-height");"none"!==e&&(t.style.maxHeight="inherit"),t.style.display="block";var n=parseInt(window.getComputedStyle(t).getPropertyValue("height"));return t.style.display="","none"!==e&&(t.style.maxHeight=e),n}},{key:"getWidth",value:function(t){t.style.display="block";var e=parseInt(window.getComputedStyle(t).getPropertyValue("width"));return t.style.display="",e}},{key:"toggleSlide",value:function(t,e){var n=0,r=window.getComputedStyle(t).getPropertyValue("max-height");"none"!==r&&"0px"!==r||(n=this.getHeight(t)),t.style.transition="max-height "+e/1e3+"s ease-in-out, padding "+e/1e3+"s ease-in-out",t.style.maxHeight=0,t.style.display="block",t.style.overflow="hidden",0===n?t.style.padding="0px":t.style.removeProperty("padding"),setTimeout(function(){t.style.maxHeight=n+"px"},10)}},{key:"wrap",value:function(t,e,n){var r=2<arguments.length&&void 0!==n?n:null,o=t.parentNode,i=document.createElement(e);i.className=r,o.insertBefore(i,t),o.removeChild(t),i.appendChild(t)}},{key:"parents",value:function(t,e){for(;t&&t!==document;t=t.parentNode){if("class"===this.checkWanted(e)&&t.classList.contains(e.split(".")[1]))return t;if("id"===this.checkWanted(e)&&t.id===e.split("#")[1])return t}return null}},{key:"checkWanted",value:function(t){return-1!==t.indexOf(".")?"class":-1!==t.indexOf("#")?"id":null}},{key:"validateMail",value:function(t){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}},{key:"testPasswordStrength",value:function(t,e,n){var r=1<arguments.length&&void 0!==e?e:4,o=2<arguments.length&&void 0!==n?n:8,i=0,u=[/(?=.*[a-z])/,/(?=.*[A-Z])/,/(?=.*[0-9])/,/(?=.[!@#$%\^&*])/],a=!0,s=!1,c=void 0;try{for(var l,f=(0,d.default)(u);!(a=(l=f.next()).done);a=!0)l.value.test(t)&&(i+=100/u.length)}catch(t){s=!0,c=t}finally{try{!a&&f.return&&f.return()}finally{if(s)throw c}}return this.passwordStrength=i,t.length<o?(this.passwordError="You password must contain at least "+o+" caracters",!1):r*(100/u.length)<=i||!(this.passwordError="You password is not enough secure")}}]),u);function u(){(0,r.default)(this,u)}e.default=i},function(t,e,n){var r={"./Bold.js":68,"./FontSize.js":70,"./Italic.js":69};function o(t){var e=i(t);return n(e)}function i(t){if(n.o(r,t))return r[t];var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}o.keys=function(){return Object.keys(r)},o.resolve=i,(t.exports=o).id=67},function(t,e,n){"use strict";var r=u(n(5)),o=u(n(6)),i=u(n(28));function u(t){return t&&t.__esModule?t:{default:t}}var a=((0,o.default)(s,[{key:"addButtonToToolbar",value:function(){var t=this,e=document.createElement("button");e.id="ribs-wysiwyg-toolbar-bold",e.textContent="B",e.addEventListener("click",function(){return t.setTextToBold()}),this.toolbarDiv.append(e)}},{key:"setTextToBold",value:function(){document.execCommand("bold"),this.editableDiv.focus(),i.default.refreshCaretLocationDiv()}}]),s);function s(t,e,n){(0,r.default)(this,s),this.toolbarDiv=t,this.editableDiv=e,this.addButtonToToolbar()}t.exports={launchClass:function(t,e,n){new a(t,e,n)}}},function(t,e,n){"use strict";var r=u(n(5)),o=u(n(6)),i=u(n(28));function u(t){return t&&t.__esModule?t:{default:t}}var a=((0,o.default)(s,[{key:"addButtonToToolbar",value:function(){var t=this,e=document.createElement("button");e.id="ribs-wysiwyg-toolbar-italic",e.textContent="I",e.addEventListener("click",function(){return t.setTextToItalic()}),this.toolbarDiv.append(e)}},{key:"setTextToItalic",value:function(){document.execCommand("italic"),this.editableDiv.focus(),i.default.refreshCaretLocationDiv()}}]),s);function s(t,e,n){(0,r.default)(this,s),this.toolbarDiv=t,this.editableDiv=e,this.addButtonToToolbar()}t.exports={launchClass:function(t,e,n){new a(t,e,n)}}},function(t,e,n){"use strict";var c=o(n(17)),r=o(n(5));function o(t){return t&&t.__esModule?t:{default:t}}var i=((0,o(n(6)).default)(u,[{key:"addButtonToToolbar",value:function(){var e=this,t=document.createElement("select");t.id="ribs-wysiwyg-toolbar-fontsize",t.addEventListener("change",function(t){return e.changeFontSize(t)}),this.toolbarDiv.append(t);var n=!0,r=!1,o=void 0;try{for(var i,u=(0,c.default)(this.options.fontSize);!(n=(i=u.next()).done);n=!0){var a=i.value,s=document.createElement("option");s.text=a+"px",t.add(s)}}catch(t){r=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(r)throw o}}}},{key:"changeFontSize",value:function(t){document.execCommand("fontSize",!1,"7");var e=document.getElementsByTagName("font")[0],n=e.parentNode,r=document.createElement("span");r.appendChild(document.createTextNode(e.textContent)),r.style.fontSize=t.currentTarget.value,n.replaceChild(r,e)}}]),u);function u(t,e,n){(0,r.default)(this,u),this.toolbarDiv=t,this.editableDiv=e,this.options=n,this.addButtonToToolbar()}t.exports={launchClass:function(t,e,n){new i(t,e,n)}}}]);