!function(r){function n(n){for(var t,a,s=n[0],l=n[1],d=n[2],p=0,u=[];p<s.length;p++)a=s[p],o[a]&&u.push(o[a][0]),o[a]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(r[t]=l[t]);for(c&&c(n);u.length;)u.shift()();return i.push.apply(i,d||[]),e()}function e(){for(var r,n=0;n<i.length;n++){for(var e=i[n],t=!0,s=1;s<e.length;s++){var l=e[s];0!==o[l]&&(t=!1)}t&&(i.splice(n--,1),r=a(a.s=e[0]))}return r}var t={},o={0:0},i=[];function a(n){if(t[n])return t[n].exports;var e=t[n]={i:n,l:!1,exports:{}};return r[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=r,a.c=t,a.d=function(r,n,e){a.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:e})},a.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},a.t=function(r,n){if(1&n&&(r=a(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var t in r)a.d(e,t,function(n){return r[n]}.bind(null,t));return e},a.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return a.d(n,"a",n),n},a.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var c=l;i.push([5,1]),e()}([,,,,,function(r,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e(6),e(9);const t=e(3);e(13);const o=e(0),i=e(16),a=e(20);i.render(o.createElement(a.default,null),t("#root")[0])},,,,function(r,n,e){var t=e(10);"string"==typeof t&&(t=[[r.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(2)(t,o);t.locals&&(r.exports=t.locals)},function(r,n,e){(n=r.exports=e(1)(!1)).i(e(11),""),n.push([r.i,"#error-message {\r\n  background-color: #ee0000;\r\n  color: #ffffff;\r\n}\r\n\r\ndiv.button-area {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\ndiv.button-area > * {\r\n  display: block;\r\n  width: 80%;\r\n  margin: 5px auto;\r\n}\r\n\r\n.child-width-max > * {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n",""])},function(r,n,e){(n=r.exports=e(1)(!1)).i(e(12),""),n.push([r.i,"html {\r\n  background-color: #dedede;\r\n}\r\n\r\nbody {\r\n  background-color: #ffffff;\r\n  color: #111111;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  max-width: 1280px;\r\n  border: 2px solid #516c9d;\r\n  border-radius: 5px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\nbody > * {\r\n  margin-top: 0.5em;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n}\r\n\r\nimg {\r\n  max-width: 90%;\r\n}\r\n\r\na {\r\n  color: #516c9d;\r\n}\r\n\r\nh1 {\r\n  margin: 0px;\r\n  margin-bottom: 0.5em;\r\n  padding: 1em;\r\n  background: #7b9ad0;\r\n  color: #ffffff;\r\n  border-radius: 3px 3px 0px 0px;\r\n  overflow: hidden;\r\n}\r\n\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin-top: 1em;\r\n  margin-bottom: 0.25em;\r\n}\r\n\r\nh2 {\r\n  margin-right: 15px;\r\n  margin-left: 15px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  border-width: 2px;\r\n  border-style: none none solid solid;\r\n  border-color: #7b9ad0;\r\n  border-radius: 0px 0px 0px 5px;\r\n}\r\n\r\nh3 {\r\n  border-bottom: 1px solid #7b9ad0;\r\n}\r\n\r\nh4 {\r\n  text-decoration: underline;\r\n}\r\n\r\nul,\r\nol {\r\n  border: 1px solid #7b9ad0;\r\n  border-radius: 5px;\r\n}\r\n\r\nul li,\r\nol li {\r\n  margin-left: 2em;\r\n}\r\n\r\nul ul,\r\nul ol,\r\nol ul,\r\nol ol {\r\n  border: 0px none;\r\n}\r\n\r\ntable {\r\n  border: 1px solid #7b9ad0;\r\n  border-radius: 5px;\r\n  border-spacing: 0;\r\n  border-collapse: separate;\r\n  overflow: hidden;\r\n}\r\n\r\ntable tr:nth-child(even) {\r\n  background-color: #eeeeee;\r\n}\r\n\r\ntable tr:hover {\r\n  background-color: #eeee00;\r\n}\r\n\r\ntable tr th {\r\n  padding: 0.25em;\r\n  border-bottom: 1px solid #7b9ad0;\r\n  background-color: #7b9ad0;\r\n  color: #ffffff;\r\n}\r\n\r\ntable tr td {\r\n  padding: 0.25em;\r\n  border-left: 1px solid #7b9ad0;\r\n  border-top: 1px solid #7b9ad0;\r\n  min-width: 4em;\r\n}\r\ntable tr td:first-child {\r\n  border-left: none;\r\n}\r\ntable tr:first-child td {\r\n  border-top: none;\r\n}\r\n\r\ntextarea {\r\n  border: 1px solid #7b9ad0;\r\n  border-radius: 5px;\r\n}\r\n\r\nbutton {\r\n  padding: 0.5em;\r\n  border: 1px solid #7b9ad0;\r\n  border-radius: 5px;\r\n  min-width: 5em;\r\n}\r\n\r\nbutton.positive {\r\n  background-color: #7b9ad0;\r\n  color: #ffffff;\r\n}\r\n",""])},function(r,n,e){(r.exports=e(1)(!1)).push([r.i,'/*!\r\n * ress.css • v1.2.2\r\n * MIT License\r\n * github.com/filipelinhares/ress\r\n */\r\n\r\n/* # =================================================================\r\n   # Global selectors\r\n   # ================================================================= */\r\n\r\n   html {\r\n    box-sizing: border-box;\r\n    overflow-y: scroll; /* All browsers without overlaying scrollbars */\r\n    -webkit-text-size-adjust: 100%; /* iOS 8+ */\r\n  }\r\n  \r\n  *,\r\n  ::before,\r\n  ::after {\r\n    background-repeat: no-repeat; /* Set `background-repeat: no-repeat` to all elements and pseudo elements */\r\n    box-sizing: inherit;\r\n  }\r\n  \r\n  ::before,\r\n  ::after {\r\n    text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */\r\n    vertical-align: inherit;\r\n  }\r\n  \r\n  * {\r\n    padding: 0; /* Reset `padding` and `margin` of all elements */\r\n    margin: 0;\r\n  }\r\n  \r\n  /* # =================================================================\r\n     # General elements\r\n     # ================================================================= */\r\n  \r\n  /* Add the correct display in iOS 4-7.*/\r\n  audio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n  }\r\n  \r\n  hr {\r\n    overflow: visible; /* Show the overflow in Edge and IE */\r\n  }\r\n  \r\n  /*\r\n  * Correct `block` display not defined for any HTML5 element in IE 8/9\r\n  * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n  * and Firefox\r\n  * Correct `block` display not defined for `main` in IE 11\r\n  */\r\n  article,\r\n  aside,\r\n  details,\r\n  figcaption,\r\n  figure,\r\n  footer,\r\n  header,\r\n  main,\r\n  menu,\r\n  nav,\r\n  section,\r\n  summary {\r\n    display: block;\r\n  }\r\n  \r\n  summary {\r\n    display: list-item; /* Add the correct display in all browsers */\r\n  }\r\n  \r\n  small {\r\n    font-size: 80%; /* Set font-size to 80% in `small` elements */\r\n  }\r\n  \r\n  [hidden],\r\n  template {\r\n    display: none; /* Add the correct display in IE */\r\n  }\r\n  \r\n  abbr[title] {\r\n    border-bottom: 1px dotted; /* Add a bordered underline effect in all browsers */\r\n    text-decoration: none; /* Remove text decoration in Firefox 40+ */\r\n  }\r\n  \r\n  a {\r\n    background-color: transparent; /* Remove the gray background on active links in IE 10 */\r\n    -webkit-text-decoration-skip: objects; /* Remove gaps in links underline in iOS 8+ and Safari 8+ */\r\n  }\r\n  \r\n  a:active,\r\n  a:hover {\r\n    outline-width: 0; /* Remove the outline when hovering in all browsers */\r\n  }\r\n  \r\n  code,\r\n  kbd,\r\n  pre,\r\n  samp {\r\n    font-family: monospace, monospace; /* Specify the font family of code elements */\r\n  }\r\n  \r\n  b,\r\n  strong {\r\n    font-weight: bolder; /* Correct style set to `bold` in Edge 12+, Safari 6.2+, and Chrome 18+ */\r\n  }\r\n  \r\n  dfn {\r\n    font-style: italic; /* Address styling not present in Safari and Chrome */\r\n  }\r\n  \r\n  /* Address styling not present in IE 8/9 */\r\n  mark {\r\n    background-color: #ff0;\r\n    color: #000;\r\n  }\r\n  \r\n  /* https://gist.github.com/unruthless/413930 */\r\n  sub,\r\n  sup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  sub {\r\n    bottom: -0.25em;\r\n  }\r\n  \r\n  sup {\r\n    top: -0.5em;\r\n  }\r\n  \r\n  /* # =================================================================\r\n     # Forms\r\n     # ================================================================= */\r\n  \r\n  input {\r\n    border-radius: 0;\r\n  }\r\n  \r\n  /* Apply cursor pointer to button elements */\r\n  button,\r\n  [type="button"],\r\n  [type="reset"],\r\n  [type="submit"],\r\n  [role="button"] {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  /* Replace pointer cursor in disabled elements */\r\n  [disabled] {\r\n    cursor: default;\r\n  }\r\n  \r\n  [type="number"] {\r\n    width: auto; /* Firefox 36+ */\r\n  }\r\n  \r\n  [type="search"] {\r\n    -webkit-appearance: textfield; /* Safari 8+ */\r\n  }\r\n  \r\n  [type="search"]::-webkit-search-cancel-button,\r\n  [type="search"]::-webkit-search-decoration {\r\n    -webkit-appearance: none; /* Safari 8 */\r\n  }\r\n  \r\n  textarea {\r\n    overflow: auto; /* Internet Explorer 11+ */\r\n    resize: vertical; /* Specify textarea resizability */\r\n  }\r\n  \r\n  button,\r\n  input,\r\n  optgroup,\r\n  select,\r\n  textarea {\r\n    font: inherit; /* Specify font inheritance of form elements */\r\n  }\r\n  \r\n  optgroup {\r\n    font-weight: bold; /* Restore the font weight unset by the previous rule. */\r\n  }\r\n  \r\n  button {\r\n    overflow: visible; /* Address `overflow` set to `hidden` in IE 8/9/10/11 */\r\n  }\r\n  \r\n  /* Remove inner padding and border in Firefox 4+ */\r\n  button::-moz-focus-inner,\r\n  [type="button"]::-moz-focus-inner,\r\n  [type="reset"]::-moz-focus-inner,\r\n  [type="submit"]::-moz-focus-inner {\r\n    border-style: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  /* Replace focus style removed in the border reset above */\r\n  button:-moz-focusring,\r\n  [type="button"]::-moz-focus-inner,\r\n  [type="reset"]::-moz-focus-inner,\r\n  [type="submit"]::-moz-focus-inner {\r\n    outline: 1px dotted ButtonText;\r\n  }\r\n  \r\n  button,\r\n  html [type="button"], /* Prevent a WebKit bug where (2) destroys native `audio` and `video`controls in Android 4 */\r\n  [type="reset"],\r\n  [type="submit"] {\r\n    -webkit-appearance: button; /* Correct the inability to style clickable types in iOS */\r\n  }\r\n  \r\n  button,\r\n  select {\r\n    text-transform: none; /* Firefox 40+, Internet Explorer 11- */\r\n  }\r\n  \r\n  /* Remove the default button styling in all browsers */\r\n  button,\r\n  input,\r\n  select,\r\n  textarea {\r\n    background-color: transparent;\r\n    border-style: none;\r\n    color: inherit;\r\n  }\r\n  \r\n  /* Style select like a standard input */\r\n  select {\r\n    -moz-appearance: none; /* Firefox 36+ */\r\n    -webkit-appearance: none; /* Chrome 41+ */\r\n  }\r\n  \r\n  select::-ms-expand {\r\n    display: none; /* Internet Explorer 11+ */\r\n  }\r\n  \r\n  select::-ms-value {\r\n    color: currentColor; /* Internet Explorer 11+ */\r\n  }\r\n  \r\n  legend {\r\n    border: 0; /* Correct `color` not being inherited in IE 8/9/10/11 */\r\n    color: inherit; /* Correct the color inheritance from `fieldset` elements in IE */\r\n    display: table; /* Correct the text wrapping in Edge and IE */\r\n    max-width: 100%; /* Correct the text wrapping in Edge and IE */\r\n    white-space: normal; /* Correct the text wrapping in Edge and IE */\r\n  }\r\n  \r\n  ::-webkit-file-upload-button {\r\n    -webkit-appearance: button; /* Correct the inability to style clickable types in iOS and Safari */\r\n    font: inherit; /* Change font properties to `inherit` in Chrome and Safari */\r\n  }\r\n  \r\n  [type="search"] {\r\n    -webkit-appearance: textfield; /* Correct the odd appearance in Chrome and Safari */\r\n    outline-offset: -2px; /* Correct the outline style in Safari */\r\n  }\r\n  \r\n  /* # =================================================================\r\n     # Specify media element style\r\n     # ================================================================= */\r\n  \r\n  img {\r\n    border-style: none; /* Remove border when inside `a` element in IE 8/9/10 */\r\n  }\r\n  \r\n  /* Add the correct vertical alignment in Chrome, Firefox, and Opera */\r\n  progress {\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  svg:not(:root) {\r\n    overflow: hidden; /* Internet Explorer 11- */\r\n  }\r\n  \r\n  audio,\r\n  canvas,\r\n  progress,\r\n  video {\r\n    display: inline-block; /* Internet Explorer 11+, Windows Phone 8.1+ */\r\n  }\r\n  \r\n  /* # =================================================================\r\n     # Accessibility\r\n     # ================================================================= */\r\n  \r\n  /* Hide content from screens but not screenreaders */\r\n  @media screen {\r\n    [hidden~="screen"] {\r\n      display: inherit;\r\n    }\r\n    [hidden~="screen"]:not(:active):not(:focus):not(:target) {\r\n      position: absolute !important;\r\n      clip: rect(0 0 0 0) !important;\r\n    }\r\n  }\r\n  \r\n  /* Specify the progress cursor of updating elements */\r\n  [aria-busy="true"] {\r\n    cursor: progress;\r\n  }\r\n  \r\n  /* Specify the pointer cursor of trigger elements */\r\n  [aria-controls] {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  /* Specify the unstyled cursor of disabled, not-editable, or otherwise inoperable elements */\r\n  [aria-disabled] {\r\n    cursor: default;\r\n  }\r\n  \r\n  /* # =================================================================\r\n     # Selection\r\n     # ================================================================= */\r\n  \r\n  /* Specify text selection background color and omit drop shadow */\r\n  \r\n  ::-moz-selection {\r\n    background-color: #b3d4fc; /* Required when declaring ::selection */\r\n    color: #000;\r\n    text-shadow: none;\r\n  }\r\n  \r\n  ::selection {\r\n    background-color: #b3d4fc; /* Required when declaring ::selection */\r\n    color: #000;\r\n    text-shadow: none;\r\n  }\r\n',""])},,,,,,,,function(r,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const t=e(0),o=e(21),i=e(22),a=e(23);n.default=class extends t.Component{constructor(){super(...arguments),this.state={errorMessage:""},this.inputText=t.createRef(),this.outputText=t.createRef(),this.execute=()=>{try{const r=JSON.parse(this.inputText.current.getValue()),n=i.methods.objectSort(r);this.outputText.current.setValue(JSON.stringify(n,null,2))}catch(r){console.error(r),this.setState({errorMessage:r.message})}}}render(){return t.createElement("div",{className:"container-fluid"},t.createElement("div",{className:"row"},t.createElement("span",{className:"col-sm",id:"error-message"},this.state.errorMessage)),t.createElement("div",{className:"row"},t.createElement("div",{className:"col-sm-5 child-width-max"},t.createElement("span",null,"input"),t.createElement(a.default,{ref:this.inputText})),t.createElement("div",{className:"col-sm-2 button-area"},t.createElement(o.default,{label:"sort!!",className:"positive",onClick:this.execute})),t.createElement("div",{className:"col-sm-5 child-width-max"},t.createElement("span",null,"output"),t.createElement(a.default,{ref:this.outputText}))))}}},function(r,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const t=e(0);n.default=r=>t.createElement("button",{className:r.className,onClick:r.onClick},r.label)},function(r,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.methods={objectSort:r=>{if(Array.isArray(r))return r.sort();let e=[];for(const t in r)"object"==typeof r[t]&&(r[t]=n.methods.objectSort(r[t])),e.push(t);e.sort();let t={};return e.forEach(n=>{t[n]=r[n]}),t}}},function(r,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const t=e(0);class o extends t.Component{constructor(){super(...arguments),this.state={value:this.props.value},this.getValue=()=>this.state.value,this.setValue=r=>this.setState({value:r}),this.changeText=r=>{console.log("changeText is called");const n=this.props.onChange(r.target.value);this.setState({value:n})}}render(){return t.createElement("textarea",{className:this.props.className,cols:this.props.cols,rows:this.props.rows,value:this.state.value,onChange:this.changeText})}}o.defaultProps={className:"",cols:30,rows:10,value:"",onChange:r=>r},n.default=o}]);
//# sourceMappingURL=app.js.map