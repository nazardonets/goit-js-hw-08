!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var r={};function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,n){t&&i(e.prototype,t);n&&i(e,n);return e};var o,a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,m=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,p=d||v||Function("return this")(),g=Object.prototype.toString,E=Math.max,b=Math.min,h=function(){return p.Date.now()};function y(e,t,n){var r,i,o,a,l,f,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(u);function v(t){var n=r,o=i;return r=i=void 0,s=t,a=e.apply(o,n)}function p(e){return s=e,l=setTimeout(y,t),c?v(e):a}function g(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-s>=o}function y(){var e=h();if(g(e))return T(e);l=setTimeout(y,function(e){var n=t-(e-f);return m?b(n,o-(e-s)):n}(e))}function T(e){return l=void 0,d&&r?v(e):(r=i=void 0,a)}function j(){var e=h(),n=g(e);if(r=arguments,i=this,f=e,n){if(void 0===l)return p(f);if(m)return l=setTimeout(y,t),v(f)}return void 0===l&&(l=setTimeout(y,t)),a}return t=O(t)||0,w(n)&&(c=!!n.leading,o=(m="maxWait"in n)?E(O(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),j.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=f=i=l=void 0},j.flush=function(){return void 0===l?a:T(h())},j}function w(t){var n=void 0===t?"undefined":e(a)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(a)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==g.call(t)}(t))return NaN;if(w(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=w(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var r=s.test(t);return r||c.test(t)?m(t.slice(2),r?2:8):f.test(t)?NaN:+t}o=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(u);return w(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};new(function(){"use strict";function t(r){var i=r.selector;e(n)(this,t),this.formEl=document.querySelector(i),this.formEmailInputEl=this.formEl.elements.email,this.formMessageInputEl=this.formEl.elements.message,this.formSubmitBtnEl="BUTTON"===this.formEl.elements.nodeName,this.userData={},this.initEvents()}return e(r)(t,[{key:"onValidationSuccess",value:function(){return console.log(this.userData),this.userData={},this.formEl.reset()}},{key:"onValidationError",value:function(){for(var e=0;e<this.formEl.elements.length;e++)if(("INPUT"===this.formEl.elements[e].nodeName||"TEXTAREA"===this.formEl.elements[e].nodeName)&&""===this.formEl.elements[e].value)return alert("Please fill the ".concat(this.formEl.elements[e].name," field!"))}},{key:"initEvents",value:function(){var t=this;this.formEl.addEventListener("input",e(o)((function(e){t.userData[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t.userData))}),500)),this.formEl.addEventListener("submit",(function(e){e.preventDefault(),""!==t.formEmailInputEl.value&&""!==t.formMessageInputEl.value?t.onValidationSuccess():t.onValidationError()})),window.addEventListener("load",(function(){t.userData.email=JSON.parse(localStorage.getItem("feedback-form-state")).email,t.userData.message=JSON.parse(localStorage.getItem("feedback-form-state")).message,t.formEmailInputEl.value=t.userData.email,t.formMessageInputEl.value=t.userData.message}))}}]),t}())({selector:".feedback-form"})}();
//# sourceMappingURL=03-feedback.77d65716.js.map
