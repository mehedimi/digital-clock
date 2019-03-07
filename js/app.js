!function(e){var t={};function n(o){if(t[o])return t[o].exports;var u=t[o]={i:o,l:!1,exports:{}};return e[o].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(o,u,function(t){return e[t]}.bind(null,u));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.classNames=["zero","one","two","three","four","five","six","seven","eight","nine"],this.secondSelector=document.querySelectorAll(".seconds"),this.minuteSelector=document.querySelectorAll(".minutes"),this.hourSelector=document.querySelectorAll(".hours"),this.dots=document.querySelectorAll(".dots *"),this.second=[],this.minute=[],this.hour=[],this.date=new Date,this.audio=document.getElementById("audio")}var t,o,u;return t=e,(o=[{key:"run",value:function(){var e=this;setInterval(function(){e.date=new Date,e.updateSecond(),e.playAudio()},1e3)}},{key:"updateSecond",value:function(){var e=this,t=this.date.getSeconds();this.second=t<10?[0,t]:t.toString().split(""),this.secondSelector.forEach(function(t,n){t.className="segments seconds "+e.getClassName(e.second[n])}),0===t&&this.updateMinute()}},{key:"updateMinute",value:function(){var e=this,t=this.date.getMinutes();this.minute=t<10?[0,t]:t.toString().split(""),this.minuteSelector.forEach(function(t,n){t.className="segments minutes "+e.getClassName(e.minute[n])}),0===t&&this.updateHour()}},{key:"updateHour",value:function(){var e=this,t=this.date.getHours();this.hour=t<10?[0,t]:t.toString().split(""),this.hourSelector.forEach(function(t,n){t.className="segments hours "+e.getClassName(e.hour[n])})}},{key:"getClassName",value:function(e){return this.classNames[e]}},{key:"toggleDots",value:function(){var e=this;return setInterval(function(){e.dots.forEach(function(e){e.classList.toggle("active")})},500),this}},{key:"boot",value:function(){return this.updateSecond(),this.updateMinute(),this.updateHour(),this}},{key:"playAudio",value:function(){this.audio.play()}}])&&n(t.prototype,o),u&&n(t,u),e}())).boot().toggleDots().run()},function(e,t){}]);