!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/js/",o(o.s=21)}({21:function(e,t){var n,o,r;n=$(".content.markdown-body").find("h1, h2, h3, h4, h5, h6"),o=n.toArray().map(function(e){return e.textContent}),r=new Map,o=o.map(function(e){if(r.has(e)){var t=r.get(e);return r.set(e,t+1),"".concat(e,"-").concat(t+1)}return r.set(e,0),e}),n.each(function(e){var t=$(this),n=o[e].replace(/\s/g,"-").replace(/[^-\w\u4E00-\u9FFF]*/g,"").toLowerCase();t.attr("id",n);var r=$('<a class="title-anchor hidden" href="'.concat(window.location.href.split("#")[0]+"#"+n,'"><img src="/images/svgs/link.svg" /></a>'));r.click(function(e){e.preventDefault(),location.hash="#".concat(n)}),t.append(r),t.hover(function(){r.removeClass("hidden")},function(){r.addClass("hidden")})})}});