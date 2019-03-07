/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Clock =
/*#__PURE__*/
function () {
  function Clock() {
    _classCallCheck(this, Clock);

    this.classNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    this.secondSelector = document.querySelectorAll('.seconds');
    this.minuteSelector = document.querySelectorAll('.minutes');
    this.hourSelector = document.querySelectorAll('.hours');
    this.dots = document.querySelectorAll('.dots *');
    this.second = [];
    this.minute = [];
    this.hour = [];
    this.date = new Date();
    this.audio = document.getElementById('audio');
  }

  _createClass(Clock, [{
    key: "run",
    value: function run() {
      var _this = this;

      setInterval(function () {
        _this.date = new Date();

        _this.updateSecond();

        _this.playAudio();
      }, 1000);
    }
  }, {
    key: "updateSecond",
    value: function updateSecond() {
      var _this2 = this;

      var second = this.date.getSeconds();
      this.second = second < 10 ? [0, second] : second.toString().split('');
      this.secondSelector.forEach(function (secondNode, index) {
        secondNode.className = 'segments seconds ' + _this2.getClassName(_this2.second[index]);
      });

      if (second === 0) {
        this.updateMinute();
      }
    }
  }, {
    key: "updateMinute",
    value: function updateMinute() {
      var _this3 = this;

      var minute = this.date.getMinutes();
      this.minute = minute < 10 ? [0, minute] : minute.toString().split('');
      this.minuteSelector.forEach(function (minuteNode, index) {
        minuteNode.className = 'segments minutes ' + _this3.getClassName(_this3.minute[index]);
      });

      if (minute === 0) {
        this.updateHour();
      }
    }
  }, {
    key: "updateHour",
    value: function updateHour() {
      var _this4 = this;

      var hour = this.date.getHours();
      this.hour = hour < 10 ? [0, hour] : hour.toString().split('');
      this.hourSelector.forEach(function (hourNode, index) {
        hourNode.className = 'segments hours ' + _this4.getClassName(_this4.hour[index]);
      });
    }
  }, {
    key: "getClassName",
    value: function getClassName(number) {
      return this.classNames[number];
    }
  }, {
    key: "toggleDots",
    value: function toggleDots() {
      var _this5 = this;

      setInterval(function () {
        _this5.dots.forEach(function (dot) {
          dot.classList.toggle('active');
        });
      }, 500);
      return this;
    }
  }, {
    key: "boot",
    value: function boot() {
      this.updateSecond();
      this.updateMinute();
      this.updateHour();
      return this;
    }
  }, {
    key: "playAudio",
    value: function playAudio() {
      this.audio.play();
    }
  }]);

  return Clock;
}();

new Clock().boot().toggleDots().run();

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/sass/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /media/mehedi/New Project/Projects/digital-clock/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /media/mehedi/New Project/Projects/digital-clock/src/sass/app.scss */"./src/sass/app.scss");


/***/ })

/******/ });