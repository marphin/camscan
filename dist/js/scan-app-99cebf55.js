!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var n={},t={},r={},i={}.hasOwnProperty,o=/^\.\.?(\/|$)/,c=function(e,n){for(var t,r=[],i=(o.test(n)?e+"/"+n:n).split("/"),c=0,u=i.length;c<u;c++)t=i[c],".."===t?r.pop():"."!==t&&""!==t&&r.push(t);return r.join("/")},u=function(e){return e.split("/").slice(0,-1).join("/")},a=function(n){return function(t){var r=c(u(n),t);return e.require(r,n)}},s=function(e,n){var r=g&&g.createHot(e),i={id:e,exports:{},hot:r};return t[e]=i,n(i.exports,a(e),i),i.exports},l=function(e){var n=r[e];return n&&e!==n?l(n):e},f=function(e,n){return l(c(u(e),n))},d=function(e,r){null==r&&(r="/");var o=l(e);if(i.call(t,o))return t[o].exports;if(i.call(n,o))return s(o,n[o]);throw new Error("Cannot find module '"+e+"' from '"+r+"'")};d.alias=function(e,n){r[n]=e};var v=/\.[^.\/]+$/,h=/\/index(\.[^\/]+)?$/,p=function(e){if(v.test(e)){var n=e.replace(v,"");i.call(r,n)&&r[n].replace(v,"")!==n+"/index"||(r[n]=e)}if(h.test(e)){var t=e.replace(h,"");i.call(r,t)||(r[t]=e)}};d.register=d.define=function(e,r){if(e&&"object"==typeof e)for(var o in e)i.call(e,o)&&d.register(o,e[o]);else n[e]=r,delete t[e],p(e)},d.list=function(){var e=[];for(var t in n)i.call(n,t)&&e.push(t);return e};var g=e._hmr&&new e._hmr(f,d,n,t);d._cache=t,d.hmr=g&&g.wrap,d.brunch=!0,e.require=d}}(),function(){"undefined"==typeof window?this:window;require.register("scanner.js",function(e,n,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.select=e.list=e.reset=e.show=void 0;var r=n("@zxing/library"),i=new r.BrowserMultiFormatReader,o=void 0,c=function(e){throw new Error(e+" on pakollinen tieto")},u=e.show=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c("element"),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c("callback"),t={audio:!1,video:{facingMode:"environment"}},u=e.parentNode;navigator.mediaDevices.getUserMedia({video:!0}).then(function(){var n=e.srcObject,t=n&&n.getTracks();t&&t.forEach(function(e){return e.stop()})}).then(function(){return s()}).then(function(e){var n=e.sort(function(e,n){return e.label===n.label?0:e.label<n.label?-1:1}),t=n.filter(function(e){return e.label.indexOf("back")>=0});return t.length?t:n}).then(function(e){var n=e.length,t=0;return new Promise(function(r){var i=function c(){if(t===n)return void r();var i=e[t++];navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:i.deviceId}}}).then(function(e){var n=e.getTracks(),t=n.find(function(e){var n=e.getCapabilities();if("focusMode"in n!=!1){var t=n.focusMode.includes("continuous");return t}});return n.forEach(function(e){return e.stop()}),alert("tracks count: "+n.length+"\nfoundContinuous: "+t),new Promise(function(e){setTimeout(function(){return e(t)},50)})}).then(function(e){o?r({deviceId:o}):e?(o=i.deviceId,r(i)):c()})["catch"](function(e){alert(JSON.stringify(e,null,"  ")),c()})};i()})}).then(function(o){var c=function(t,i,o){if(t&&(console.log(t),n(t.text)),i&&!(i instanceof r.NotFoundException)){var c=document.createElement("div");c.innerText="Virhe kameran käyttöönotossa.",u.insertBefore(c,e),console.error(i)}};o&&(t.video={deviceId:{exact:o.deviceId}}),i.decodeFromConstraints(t,e,c)})["catch"](function(n){var t=document.createElement("div");t.innerText=n,u.insertBefore(t,e),console.error(n)})},a=e.reset=function(){i.reset()},s=e.list=function(){return i.listVideoInputDevices()},l=e.select=function(e){o=e};"scanner"in window==!1&&(window.scanner={}),Object.assign(window.scanner,{show:u,reset:a,list:s,select:l})}),require.register("___globals___",function(e,n,t){})}(),require("___globals___");