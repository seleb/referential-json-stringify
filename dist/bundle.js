function n(r){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(r)}function r(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var t=[],o=!0,e=!1,u=void 0;try{for(var f,c=n[Symbol.iterator]();!(o=(f=c.next()).done)&&(t.push(f.value),!r||t.length!==r);o=!0);}catch(n){e=!0,u=n}finally{try{o||null==c.return||c.return()}finally{if(e)throw u}}return t}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function t(t){var o=[],e=[];for(var u=function t(u){if(u){var f={};return Object.entries(u).forEach(function(u){var c=r(u,2),i=c[0],a=c[1],l=o.findIndex(function(n){return n===a});if(-1===l){var y=o.push(a)-1;f[i]=y,e[y]=null!==a&&"object"!==n(a)?a:t(a)}else f[i]=l}),f}}(t),f=arguments.length,c=new Array(f>1?f-1:0),i=1;i<f;i++)c[i-1]=arguments[i];return JSON.stringify.apply(JSON,[e.concat(u)].concat(c))}function o(t){for(var o=arguments.length,e=new Array(o>1?o-1:0),u=1;u<o;u++)e[u-1]=arguments[u];var f=JSON.parse.apply(JSON,[t].concat(e));return f.filter(function(r){return r&&"object"===n(r)}).forEach(function(n){Object.entries(n).forEach(function(t){var o=r(t,2),e=o[0],u=o[1];n[e]=f[u]})}),f[f.length-1]}export{t as stringify,o as parse};