webpackHotUpdate(4,{

/***/ "./components/VirtualSky.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualSky; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var VirtualSky =
/*#__PURE__*/
function (_Component) {
  _inherits(VirtualSky, _Component);

  function VirtualSky() {
    var _this;

    _classCallCheck(this, VirtualSky);

    _this = _possibleConstructorReturn(this, (VirtualSky.__proto__ || Object.getPrototypeOf(VirtualSky)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "openAstroModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(object) {
        _this.setState({
          currentAstro: object,
          modalOpen: true
        }, function () {});
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleOpen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          modalOpen: true
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          modalOpen: false
        });
      }
    });
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
        onClickObject: this.openAstroModal(o)
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
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "container",
        key: object.target.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.setName(object.target.name);
        },
        style: "color: black; cursor: pointer;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
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
    key: "astroModal",
    value: function astroModal() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Modal */], {
        trigger: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["a" /* Button */], {
          onClick: this.handleOpen,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, "Show Modal"),
        open: this.state.modalOpen,
        onClose: this.handleClose,
        basic: true,
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Header */], {
        icon: "browser",
        content: "Cookies policy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Modal */].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "This website uses cookies to ensure the best user experience.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Modal */].Actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["a" /* Button */], {
        color: "green",
        onClick: this.handleClose,
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["d" /* Icon */], {
        name: "checkmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), " Got it")));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        ref: function ref(sky) {
          return _this3.sky = sky;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "starmap",
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), this.astroModal());
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

/***/ })

})
//# sourceMappingURL=4.2020fde4246b4e4b5b62.hot-update.js.map