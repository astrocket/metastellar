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




var VirtualSky =
/*#__PURE__*/
function (_Component) {
  _inherits(VirtualSky, _Component);

  function VirtualSky() {
    var _this;

    _classCallCheck(this, VirtualSky);

    _this = _possibleConstructorReturn(this, (VirtualSky.__proto__ || Object.getPrototypeOf(VirtualSky)).call(this));
    _this.state = {
      name: '/'
    };
    return _this;
  }

  _createClass(VirtualSky, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.$sky = $(this.sky);
      this.planetarium = $.virtualsky({
        id: 'starmap',
        projection: 'stereo',
        credit: 'Metadium',
        constellations: true,
        objects: __WEBPACK_IMPORTED_MODULE_1__constellation_json___default.a,
        onClickObject: function onClickObject(o) {
          return _this2.setName(o.target.name);
        }
      });
    }
  }, {
    key: "setName",
    value: function setName(name) {
      this.setState({
        name: name
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
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        ref: function ref(sky) {
          return _this3.sky = sky;
        },
        id: "starmap",
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, this.props.mapShow ? 'True' : 'False'), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, this.state.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this3.moveTo();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
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

  reactHotLoader.register(VirtualSky, "VirtualSky", "/Users/hangyul/Desktop/Metastellar/metastellar/components/VirtualSky.js");
  reactHotLoader.register(styles, "styles", "/Users/hangyul/Desktop/Metastellar/metastellar/components/VirtualSky.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.d12511531547d81842aa.hot-update.js.map