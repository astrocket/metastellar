webpackHotUpdate(4,{

/***/ "./components/Astro.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Astro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/hangyul/Desktop/Metastellar/metastellar/components/Astro.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var Astro = function Astro(_ref) {
  var astro = _ref.astro,
      modalOpen = _ref.modalOpen,
      handleOpen = _ref.handleOpen,
      handleClose = _ref.handleClose;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Modal */], {
    trigger: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["a" /* Button */], {
      onClick: handleOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, "Show Modal"),
    open: modalOpen,
    onClose: handleClose,
    basic: true,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Header */], {
    icon: "browser",
    content: "Cookies policy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Modal */].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Purchase ".concat(astro.target.name, " now !!!!"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Modal */].Actions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["a" /* Button */], {
    color: "green",
    onClick: handleClose,
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["d" /* Icon */], {
    name: "checkmark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), " Got it")));
};


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Astro, "Astro", "/Users/hangyul/Desktop/Metastellar/metastellar/components/Astro.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/VirtualSky.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualSky; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./components/index.js");
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
      name: '/',
      modalOpen: false,
      currentAstro: null
    };
    return _this;
  }

  _createClass(VirtualSky, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.$sky = $(this.sky);
      this.vs = $.virtualsky({
        id: 'starmap',
        projection: 'stereo',
        credit: false,
        constellations: true,
        constellationlabels: true,
        showorbits: false,
        showgalaxy: false,
        showStars: true,
        showstarlabels: true,
        objects: this.props.astros,
        onClickObject: function onClickObject(o) {
          return _this2.openAstroModal(o);
        }
      });
    }
  }, {
    key: "setName",
    value: function setName(name) {
      this.setState({
        name: name
      });
      alert('MetaMask open');
    }
  }, {
    key: "objectTemplate",
    value: function objectTemplate(object) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "container",
        key: object.target.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        onClick: function onClick() {
          return _this3.setName(object.target.name);
        },
        style: "color: black; cursor: pointer;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "hi"));
    }
  }, {
    key: "sampleCallMetaMask",
    value: function sampleCallMetaMask() {
      var ether = $('#userEther').val();
      var address = "0x65cA73D13a2cc1dB6B92fd04eb4EBE4cEB70c5eC";
      var abi = [{
        "constant": false,
        "inputs": [{
          "name": "newString",
          "type": "string"
        }],
        "name": "setString",
        "outputs": [],
        "payable": false,
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "getString",
        "outputs": [{
          "name": "",
          "type": "string",
          "value": "Hello World!"
        }],
        "payable": false,
        "type": "function"
      }];
      var contract = web3.eth.contract(abi);
      var stringHolder = contract.at(address);
      stringHolder.getString(console.log);
      stringHolder.setString('Sending' + ether + 'ETH', console.log);
    }
  }, {
    key: "moveTo",
    value: function moveTo() {
      console.log(this.vs);
      this.vs.toggleNegative();
    }
  }, {
    key: "openAstroModal",
    value: function openAstroModal(object) {
      var _this4 = this;

      this.setState({
        currentAstro: object
      }, function () {
        _this4.handleOpen();
      });
    }
  }, {
    key: "handleOpen",
    value: function handleOpen() {
      this.setState({
        modalOpen: true
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        modalOpen: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        ref: function ref(sky) {
          return _this5.sky = sky;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "starmap",
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* Astro */], {
        astro: this.state.currentAstro,
        modalOpen: this.state.modalOpen,
        handleOpen: function handleOpen() {
          return _this5.handleOpen();
        },
        handleClose: function handleClose() {
          return _this5.handleClose();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }));
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
    height: '100vh',
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

/***/ }),

/***/ "./components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Astro__ = __webpack_require__("./components/Astro.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Astro__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constellation__ = __webpack_require__("./components/Constellation.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout__ = __webpack_require__("./components/Layout.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Layout__["a"]; });
/* unused harmony namespace reexport */





/***/ }),

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
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_index__["b" /* Layout */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_VirtualSky__["a" /* default */], {
        astros: this.state.astros,
        mapShow: this.state.mapShow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }));
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
//# sourceMappingURL=4.0f8dd064f9ce58626341.hot-update.js.map