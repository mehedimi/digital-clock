!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o,s,r,u;(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.classNames=["zero","one","two","three","four","five","six","seven","eight","nine"],this.secondOne=document.getElementById("second-one"),this.secondTwo=document.getElementById("second-two"),this.minuteOne=document.getElementById("minute-one"),this.minuteTwo=document.getElementById("minute-two"),this.hourOne=document.getElementById("hour-one"),this.hourTwo=document.getElementById("hour-two")}var t,i,a;return t=e,(i=[{key:"run",value:function(){var e=this;setInterval(function(){o=new Date,s=o.getSeconds()<10?[0,o.getSeconds()]:o.getSeconds().toString().split(""),r=o.getMinutes()<10?[0,o.getMinutes()]:o.getMinutes().toString().split(""),u=o.getHours()<10?[0,o.getHours()]:o.getHours().toString().split(""),e.secondOne.className="segments "+e.getClassName(s[0]),e.secondTwo.className="segments "+e.getClassName(s[1]),e.minuteOne.className="segments "+e.getClassName(r[0]),e.minuteTwo.className="segments "+e.getClassName(r[1]),e.hourOne.className="segments "+e.getClassName(u[0]),e.hourTwo.className="segments "+e.getClassName(u[1])},1e3)}},{key:"getClassName",value:function(e){return this.classNames[e]}}])&&n(t.prototype,i),a&&n(t,a),e}())).run()},function(e,t){}]);