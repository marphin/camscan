!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var n={},r={},t={},i={}.hasOwnProperty,o=/^\.\.?(\/|$)/,c=function(e,n){for(var r,t=[],i=(o.test(n)?e+"/"+n:n).split("/"),c=0,a=i.length;c<a;c++)r=i[c],".."===r?t.pop():"."!==r&&""!==r&&t.push(r);return t.join("/")},a=function(e){return e.split("/").slice(0,-1).join("/")},u=function(n){return function(r){var t=c(a(n),r);return e.require(t,n)}},s=function(e,n){var t=g&&g.createHot(e),i={id:e,exports:{},hot:t};return r[e]=i,n(i.exports,u(e),i),i.exports},l=function(e){var n=t[e];return n&&e!==n?l(n):e},f=function(e,n){return l(c(a(e),n))},d=function(e,t){null==t&&(t="/");var o=l(e);if(i.call(r,o))return r[o].exports;if(i.call(n,o))return s(o,n[o]);throw new Error("Cannot find module '"+e+"' from '"+t+"'")};d.alias=function(e,n){t[n]=e};var v=/\.[^.\/]+$/,h=/\/index(\.[^\/]+)?$/,p=function(e){if(v.test(e)){var n=e.replace(v,"");i.call(t,n)&&t[n].replace(v,"")!==n+"/index"||(t[n]=e)}if(h.test(e)){var r=e.replace(h,"");i.call(t,r)||(t[r]=e)}};d.register=d.define=function(e,t){if(e&&"object"==typeof e)for(var o in e)i.call(e,o)&&d.register(o,e[o]);else n[e]=t,delete r[e],p(e)},d.list=function(){var e=[];for(var r in n)i.call(n,r)&&e.push(r);return e};var g=e._hmr&&new e._hmr(f,d,n,r);d._cache=r,d.hmr=g&&g.wrap,d.brunch=!0,e.require=d}}(),function(){"undefined"==typeof window?this:window;require.register("scanner.js",function(e,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.select=e.list=e.reset=e.show=void 0;var t=n("@zxing/library"),i=new t.BrowserMultiFormatReader,o=void 0,c=function(e){throw new Error(e+" on pakollinen tieto")},a=e.show=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c("element"),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c("callback"),r={audio:!1,video:{facingMode:"environment"}},o=e.parentNode;navigator.mediaDevices.getUserMedia({video:!0}).then(function(){var n=e.srcObject,r=n&&n.getTracks();r&&r.forEach(function(e){return e.stop()})}).then(function(){return s()}).then(function(e){var n=e.sort(function(e,n){return e.label===n.label?0:e.label<n.label?-1:1}),r=n.filter(function(e){return e.label.indexOf("back")>=0});return r.length?r:n}).then(function(e){var n=e.length,r=0;return new Promise(function(t){var i=function o(){if(r===n)return void t();var i=e[r++];navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:i.deviceId}}}).then(function(e){var n=e.getTracks(),r=n.find(function(e){var n=e.getCapabilities();if("focusMode"in n!=!1){var r=n.focusMode.includes("continuous");return r}});n.forEach(function(e){return e.stop()}),r?t(i):o()})["catch"](function(){return o()})};i()})}).then(function(c){var a=function(r,i,c){if(r&&(console.log(r),n(r.text)),i&&!(i instanceof t.NotFoundException)){var a=document.createElement("div");a.innerText="Virhe kameran käyttöönotossa.",o.insertBefore(a,e),console.error(i)}};c?i.decodeFromVideoDevice(c.deviceId,e,a):i.decodeFromConstraints(r,e,a)})["catch"](function(n){var r=document.createElement("div");r.innerText=n,o.insertBefore(r,e),console.error(n)})},u=e.reset=function(){i.reset()},s=e.list=function(){return i.listVideoInputDevices()},l=e.select=function(e){o=e};"scanner"in window==!1&&(window.scanner={}),Object.assign(window.scanner,{show:a,reset:u,list:s,select:l})}),require.register("___globals___",function(e,n,r){})}(),require("___globals___");