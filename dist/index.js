"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(t)}function t(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,i=void 0;try{for(var u,a=r[Symbol.iterator]();!(e=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);e=!0);}catch(r){o=!0,i=r}finally{try{e||null==a.return||a.return()}finally{if(o)throw i}}return n}(r,t)||function(r,t){if(!r)return;if("string"==typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return n(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.parse=function(n){for(var e=arguments.length,o=new Array(e>1?e-1:0),i=1;i<e;i++)o[i-1]=arguments[i];var u=JSON.parse.apply(JSON,[n].concat(o));return u.filter((function(t){return t&&"object"===r(t)})).forEach((function(r){Object.entries(r).forEach((function(n){var e=t(n,2),o=e[0],i=e[1];r[o]=u[i]}))})),u[u.length-1]},exports.stringify=function(n){var e=[],o=[];function i(n){if(n){var u={};return Object.entries(n).forEach((function(n){var a=t(n,2),f=a[0],c=a[1],l=e.findIndex((function(r){return r===c}));if(-1===l){var y=e.push(c)-1;u[f]=y,o[y]=null!==c&&"object"!==r(c)?c:i(c)}else u[f]=l})),u}}for(var u=i(n),a=arguments.length,f=new Array(a>1?a-1:0),c=1;c<a;c++)f[c-1]=arguments[c];return JSON.stringify.apply(JSON,[o.concat(u)].concat(f))};
