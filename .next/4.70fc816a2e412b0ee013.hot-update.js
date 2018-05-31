webpackHotUpdate(4,{

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
      currentAstro: {
        target: {
          name: 'Astro'
        },
        ra: {
          decimal: 0
        },
        dec: {
          decimal: 0
        }
      },
      currentMetaID: {
        name: '이한결',
        joined: '2018년 5월 부터 소유중',
        about: '코인플러그 개발자',
        image: 'https://apod.nasa.gov/apod/image/9612/sagan_uc.gif'
      }
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
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        onClick: function onClick() {
          return _this3.setName(object.target.name);
        },
        style: "color: black; cursor: pointer;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
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
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "starmap",
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
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
        metaID: this.state.currentMetaID,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ethereum_metaStellar_js__ = __webpack_require__("./ethereum/metaStellar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_index__ = __webpack_require__("./components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constellation_json__ = __webpack_require__("./constellation.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constellation_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constellation_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_VirtualSky__ = __webpack_require__("./components/VirtualSky.js");

var _jsxFileName = "/Users/hangyul/Desktop/Metastellar/metastellar/pages/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var MetaStellarIndex =
/*#__PURE__*/
function (_Component) {
  _inherits(MetaStellarIndex, _Component);

  _createClass(MetaStellarIndex, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
        var lastId, starIndexes, astros;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2__ethereum_metaStellar_js__["a" /* default */].methods.lastId().call();

              case 2:
                lastId = _context2.sent;
                starIndexes = Array.from(Array(5)).map(function (e, i) {
                  return i + 1;
                });
                console.log('idxs', starIndexes);
                _context2.next = 7;
                return Promise.all(starIndexes.map(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(id) {
                    var rawAstro;
                    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return __WEBPACK_IMPORTED_MODULE_2__ethereum_metaStellar_js__["a" /* default */].methods.getAstro(id).call();

                          case 2:
                            rawAstro = _context.sent;
                            return _context.abrupt("return", {
                              target: {
                                name: rawAstro.name
                              },
                              ra: {
                                decimal: rawAstro.raDecimal / 1000
                              },
                              dec: {
                                decimal: rawAstro.decDecimal / 1000
                              }
                            });

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 7:
                astros = _context2.sent;
                return _context2.abrupt("return", {
                  astros: astros
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function MetaStellarIndex() {
    var _this;

    _classCallCheck(this, MetaStellarIndex);

    _this = _possibleConstructorReturn(this, (MetaStellarIndex.__proto__ || Object.getPrototypeOf(MetaStellarIndex)).call(this));
    _this.state = {
      mapShow: true,
      loading: false
    };
    return _this;
  }

  _createClass(MetaStellarIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.astros);
    }
  }, {
    key: "testClick",
    value: function testClick() {
      this.setState({
        mapShow: !this.state.mapShow
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_index__["b" /* Layout */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_VirtualSky__["a" /* default */], {
        astros: this.props.astros,
        mapShow: this.state.mapShow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
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
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

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
//# sourceMappingURL=4.70fc816a2e412b0ee013.hot-update.js.map