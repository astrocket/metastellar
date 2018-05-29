webpackHotUpdate(4,{

/***/ "./components/VirtualSky.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualSky; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constellation_json__ = __webpack_require__("./constellation.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constellation_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__constellation_json__);
var _jsxFileName = "/Users/hangyul/Desktop/Metastellar/metastellar/components/VirtualSky.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var sample = [{
  "target": {
    "name": "Hangyul",
    "alt": ""
  },
  "ra": {
    "decimal": 83.6330833,
    "h": "05",
    "m": "34",
    "s": "31.940"
  },
  "dec": {
    "decimal": 22.0145000,
    "d": "+22",
    "m": "00",
    "s": "52.200"
  }
}, {
  "target": {
    "name": "Guijin",
    "alt": ""
  },
  "ra": {
    "decimal": 323.3625833,
    "h": "21",
    "m": "33",
    "s": "27.020"
  },
  "dec": {
    "decimal": -0.8232500,
    "d": "-00",
    "m": "49",
    "s": "23.700"
  }
}, {
  "target": {
    "name": "Dr.Song",
    "alt": ""
  },
  "ra": {
    "decimal": 205.5484167,
    "h": "13",
    "m": "42",
    "s": "11.620"
  },
  "dec": {
    "decimal": 28.3772778,
    "d": "+28",
    "m": "22",
    "s": "38.200"
  }
}, {
  "target": {
    "name": "Metadium",
    "alt": ""
  },
  "ra": {
    "decimal": 245.8967500,
    "h": "16",
    "m": "23",
    "s": "35.220"
  },
  "dec": {
    "decimal": -26.5257500,
    "d": "-26",
    "m": "31",
    "s": "32.700"
  }
}];
this.planetarium;

var VirtualSky =
/*#__PURE__*/
function (_Component) {
  _inherits(VirtualSky, _Component);

  function VirtualSky() {
    _classCallCheck(this, VirtualSky);

    return _possibleConstructorReturn(this, (VirtualSky.__proto__ || Object.getPrototypeOf(VirtualSky)).apply(this, arguments));
  }

  _createClass(VirtualSky, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.$sky = $(this.sky);
      this.planetarium = $.virtualsky({
        id: 'starmap',
        projection: 'stereo',
        'constellations': true,
        objects: sample,
        objectCallback: function objectCallback(o) {
          return console.log('object callback called' + o);
        }
      });
    }
  }, {
    key: "moveTo",
    value: function moveTo() {
      this.planetarium.panTo(56.8690917, 24.1053111, 3000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        ref: function ref(sky) {
          return _this.sky = sky;
        },
        id: "starmap",
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, this.props.mapShow ? 'True' : 'False'), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.moveTo();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "\uC774\uB3D9"));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return VirtualSky;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);


var styles = {
  container: {
    height: 400,
    width: '100%'
  }
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(sample, "sample", "/Users/hangyul/Desktop/Metastellar/metastellar/components/VirtualSky.js");
  reactHotLoader.register(VirtualSky, "VirtualSky", "/Users/hangyul/Desktop/Metastellar/metastellar/components/VirtualSky.js");
  reactHotLoader.register(styles, "styles", "/Users/hangyul/Desktop/Metastellar/metastellar/components/VirtualSky.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.fd5438b6ccad3a54a4d1.hot-update.js.map