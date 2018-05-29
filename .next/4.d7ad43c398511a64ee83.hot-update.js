webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ethereum_metaStellar__ = __webpack_require__("./ethereum/metaStellar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index__ = __webpack_require__("./components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constellation_json__ = __webpack_require__("./constellation.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constellation_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__constellation_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_VirtualSky__ = __webpack_require__("./components/VirtualSky.js");
var _jsxFileName = "/Users/hangyul/Desktop/Metastellar/metastellar/pages/index.js";

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







var MetaStellarIndex =
/*#__PURE__*/
function (_Component) {
  _inherits(MetaStellarIndex, _Component);

  /*  static async getInitialProps() {
      const astros = await cosmos.methods.getDeployedAstros().call();
      return { astros };
    }*/
  function MetaStellarIndex() {
    var _this;

    _classCallCheck(this, MetaStellarIndex);

    _this = _possibleConstructorReturn(this, (MetaStellarIndex.__proto__ || Object.getPrototypeOf(MetaStellarIndex)).call(this));
    _this.state = {
      astros: __WEBPACK_IMPORTED_MODULE_3__constellation_json___default.a,
      mapShow: true
    };
    return _this;
  }

  _createClass(MetaStellarIndex, [{
    key: "testClick",
    value: function testClick() {
      this.setState({
        mapShow: !this.state.mapShow
      });
    }
  }, {
    key: "renderAstros",
    value: function renderAstros() {
      var astros = this.state.astros.map(function (astro) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_index__["a" /* Astro */], {
          astro: astro,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_index__["b" /* Constellation */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, astros);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_index__["c" /* Layout */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_VirtualSky__["a" /* default */], {
        mapShow: this.state.mapShow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "MetaStellar"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.testClick();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "\uBC84\uD2BC"), this.renderAstros()));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return MetaStellarIndex;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = MetaStellarIndex;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MetaStellarIndex, "MetaStellarIndex", "/Users/hangyul/Desktop/Metastellar/metastellar/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/hangyul/Desktop/Metastellar/metastellar/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.d7ad43c398511a64ee83.hot-update.js.map