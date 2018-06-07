webpackHotUpdate(5,{

/***/ "./components/Astro.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Astro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__("./components/index.js");
var _this = this,
    _jsxFileName = "/Users/hangyul/Desktop/Metastellar/metastellar/components/Astro.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






var Astro = function Astro(_ref) {
  var astro = _ref.astro,
      modalOpen = _ref.modalOpen,
      handleClose = _ref.handleClose,
      upBid = _ref.upBid,
      downBid = _ref.downBid,
      onPressBuy = _ref.onPressBuy,
      formLoading = _ref.formLoading,
      message = _ref.message,
      messageUrl = _ref.messageUrl;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["l" /* Modal */], {
    open: modalOpen,
    onClose: handleClose,
    basic: true,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["g" /* Header */], {
    icon: "id badge",
    content: "Become an owner of this star.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["l" /* Modal */].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["f" /* Grid */], {
    stackable: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["f" /* Grid */].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["f" /* Grid */].Column, {
    width: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Do you like star #".concat(astro.target.name, " ?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), "Buy now and put your identity on constellation using MetaID.", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://metadium.com",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "(What is MetaID?)"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), "You can put your name on it."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__index__["d" /* MetaID */], {
    metaID: astro.metaID,
    starImage: "http://server7.sky-map.org/imgcut?survey=DSS2&w=128&h=128&ra=".concat(astro.ra.decimal, "&de=").concat(astro.dec.decimal, "&angle=1.25&output=PNG"),
    starUrl: "http://server1.wikisky.org/v2?ra=\"+(".concat(astro.ra.decimal, "/15)+\"&de=\"+(").concat(astro.dec.decimal, ")+\"&zoom=6&img_source=DSS2"),
    starPrice: __WEBPACK_IMPORTED_MODULE_1__ethereum_web3__["a" /* default */].utils.fromWei(astro.lastBid, 'ether'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["f" /* Grid */].Column, {
    width: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Card */], {
    style: styles.formContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Card */].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Form */], {
    loading: formLoading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Form */].Field, {
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "Name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["i" /* Input */], {
    ref: function ref(_ref2) {
      return _this.name = _ref2;
    },
    placeholder: "astro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Form */].Field, {
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "Social"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["i" /* Input */], {
    ref: function ref(_ref3) {
      return _this.sns = _ref3;
    },
    type: "url",
    placeholder: "facebook.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }))), message ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["k" /* Message */], {
    color: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: messageUrl,
    target: '_blank',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, message), " ") : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["k" /* Message */], {
    color: "yellow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, "Minimum Price : ".concat(__WEBPACK_IMPORTED_MODULE_1__ethereum_web3__["a" /* default */].utils.fromWei(astro.currentBid, 'ether'), " ETH"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), "Anyone who pays ".concat(__WEBPACK_IMPORTED_MODULE_1__ethereum_web3__["a" /* default */].utils.fromWei(astro.minBidTic, 'ether'), " ETH more than your bid price will be able to purchase this star from you without permission. (You will get your bidded ether back anyway)"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Card */].Content, {
    extra: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["i" /* Input */], {
    ref: function ref(_ref4) {
      return _this.input = _ref4;
    },
    defaultValue: __WEBPACK_IMPORTED_MODULE_1__ethereum_web3__["a" /* default */].utils.fromWei(astro.currentBid, 'ether'),
    type: "number",
    min: "".concat(__WEBPACK_IMPORTED_MODULE_1__ethereum_web3__["a" /* default */].utils.fromWei(astro.currentBid, 'ether')),
    step: "0.01",
    placeholder: "Your Bid",
    action: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
    color: "green",
    onClick: function onClick() {
      return onPressBuy(_this.input.inputRef.value, _this.name.inputRef.value, _this.sns.inputRef.value);
    },
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, "ETH")))))))));
};

var styles = {
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
};

;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Astro, "Astro", "/Users/hangyul/Desktop/Metastellar/metastellar/components/Astro.js");
  reactHotLoader.register(styles, "styles", "/Users/hangyul/Desktop/Metastellar/metastellar/components/Astro.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/AstroList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export AstroList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__("./components/index.js");
var _jsxFileName = "/Users/hangyul/Desktop/Metastellar/metastellar/components/AstroList.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var AstroList = function AstroList(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Grid */], {
    stackable: true,
    columns: 6,
    style: {
      marginTop: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.astros.map(function (astro) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Grid */].Column, {
      key: astro.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["m" /* Segment */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__index_js__["b" /* AstroCard */], {
      astro: astro,
      starImage: "http://server7.sky-map.org/imgcut?survey=DSS2&w=128&h=128&ra=".concat(astro.ra.decimal, "&de=").concat(astro.dec.decimal, "&angle=1.25&output=PNG"),
      starUrl: "http://server1.wikisky.org/v2?ra=\"+(".concat(astro.ra.decimal, "/15)+\"&de=\"+(").concat(astro.dec.decimal, ")+\"&zoom=6&img_source=DSS2"),
      starPrice: astro.lastBid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    })));
  }));
};


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AstroList, "AstroList", "/Users/hangyul/Desktop/Metastellar/metastellar/components/AstroList.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/VirtualSky.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualSky; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ethereum_metaStellar_js__ = __webpack_require__("./ethereum/metaStellar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bignumber_js__ = __webpack_require__("./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_js__ = __webpack_require__("./components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_data_ko_search_base_json__ = __webpack_require__("./static/data/ko/search_base.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_data_ko_search_base_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__static_data_ko_search_base_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_data_initializer_json__ = __webpack_require__("./static/data/initializer.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_data_initializer_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__static_data_initializer_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_s_alert__ = __webpack_require__("./node_modules/react-s-alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_s_alert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_s_alert__);

var _jsxFileName = "/Users/hangyul/Desktop/Metastellar/metastellar/components/VirtualSky.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        },
        currentBid: '0',
        minBidTic: '0',
        lastBid: '0'
      },
      currentMetaID: {
        name: '이한결',
        joined: '2018년 5월 부터 소유중',
        about: '코인플러그 개발자',
        image: 'https://apod.nasa.gov/apod/image/9612/sagan_uc.gif'
      },
      formattedSearchBase: [],
      formLoading: false,
      message: null,
      messageUrl: null
    };
    return _this;
  }

  _createClass(VirtualSky, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.vs = $.virtualsky(_objectSpread({
        id: 'starmap',
        lang: 'ko',
        objects: this.props.astros
      }, __WEBPACK_IMPORTED_MODULE_9__static_data_initializer_json___default.a, {
        onClickObject: function onClickObject(o) {
          return _this2.openAstroModal(o);
        }
      }));
      var fsb = __WEBPACK_IMPORTED_MODULE_8__static_data_ko_search_base_json___default.a.map(function (star) {
        return {
          key: star.target.name,
          value: star,
          text: star.target.name,
          content: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["g" /* Header */], {
            className: 'ui header text search-result-bar',
            icon: "".concat(star.type === 'star' ? 'empty ' : '', "star"),
            content: star.target.name,
            subheader: star.type_locale,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          })
        };
      });
      this.setState({
        formattedSearchBase: fsb
      });
    }
  }, {
    key: "checkNetwork",
    value: function () {
      var _checkNetwork = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var network;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                network = true;

                if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
                  _context.next = 6;
                  break;
                }

                __WEBPACK_IMPORTED_MODULE_10_react_s_alert___default.a.info('<h4>Metamask not available.</h4><ul><li><a href="https://metamask.io/" target="_blank">Get Metamask now.</a></li></ul>', {
                  position: 'top-right',
                  effect: 'slide',
                  html: true,
                  timeout: 5000
                });
                network = false;
                _context.next = 9;
                break;

              case 6:
                _context.next = 8;
                return __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__["a" /* default */].eth.net.getNetworkType().then(function (network) {
                  if (network !== 'ropsten') {
                    __WEBPACK_IMPORTED_MODULE_10_react_s_alert___default.a.info('<h4>You are not in a ropsten network.</h4><ul><li><a href="https://metamask.io/" target="_blank">Open Metamask and change your network to ropsten.</a></li></ul>', {
                      position: 'top-right',
                      effect: 'slide',
                      html: true,
                      timeout: 5000
                    });
                  }
                });

              case 8:
                network = false;

              case 9:
                return _context.abrupt("return", network);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function checkNetwork() {
        return _checkNetwork.apply(this, arguments);
      };
    }()
  }, {
    key: "invalidForm",
    value: function invalidForm(name, sns) {
      var invalid = false;

      if (name === '' || sns === '') {
        __WEBPACK_IMPORTED_MODULE_10_react_s_alert___default.a.info("<h4>".concat(name === '' ? 'Name field ' : '', " ").concat(sns === '' ? 'SNS field ' : '', "not given.</h4>"), {
          position: 'top-right',
          effect: 'slide',
          html: true,
          timeout: 5000
        });
        invalid = true;
      }

      return invalid;
    }
  }, {
    key: "onPressBuy",
    value: function () {
      var _onPressBuy = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(bid, name, sns) {
        var _this3 = this;

        var id, accounts;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.checkNetwork();

              case 2:
                _context3.t0 = _context3.sent;

                if (_context3.t0) {
                  _context3.next = 5;
                  break;
                }

                _context3.t0 = this.invalidForm(name, sns);

              case 5:
                if (!_context3.t0) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", false);

              case 7:
                id = this.state.currentAstro.id;
                _context3.next = 10;
                return __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__["a" /* default */].eth.getAccounts();

              case 10:
                accounts = _context3.sent;
                this.setState({
                  formLoading: true
                },
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
                  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return __WEBPACK_IMPORTED_MODULE_2__ethereum_metaStellar_js__["a" /* default */].methods.buyAstro(id, name, sns).send({
                            from: accounts[0],
                            value: __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__["a" /* default */].utils.toWei(bid, 'ether'),
                            gasPrice: '1'
                          }).on('transactionHash', function (hash) {
                            _this3.setState({
                              message: "Tx Made. (click for etherscan)",
                              messageUrl: "https://ropsten.etherscan.io/tx/".concat(hash),
                              formLoading: false
                            });
                          }).on('confirmation', function (confirmationNumber, receipt) {
                            _this3.setState({
                              message: "Transaction Confirmed. (blk:".concat(confirmationNumber, ")"),
                              messageUrl: "https://ropsten.etherscan.io/tx/".concat(hash),
                              formLoading: false
                            });
                          }).on('error', function (error) {
                            __WEBPACK_IMPORTED_MODULE_10_react_s_alert___default.a.info("<h4>".concat(error.message, "</h4><ul><li><a href=\"https://ethgasstation.info\" target=\"_blank\">ETH gas station</a></li></ul>"), {
                              position: 'top-right',
                              effect: 'slide',
                              html: true,
                              timeout: 5000
                            });

                            _this3.setState({
                              formLoading: false
                            });
                          });

                        case 2:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                })));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function onPressBuy(_x, _x2, _x3) {
        return _onPressBuy.apply(this, arguments);
      };
    }()
  }, {
    key: "moveTo",
    value: function moveTo(star) {
      var self = this;
      setTimeout(function () {
        self.vs.panTo(star.ra.decimal, star.dec.decimal, 500);
      }, 10);
    }
  }, {
    key: "openAstroModal",
    value: function openAstroModal(object) {
      var _this4 = this;

      this.setState({
        currentAstro: object,
        message: null,
        messageUrl: null
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
    key: "upBid",
    value: function upBid() {
      this.setState({
        currentAstro: _objectSpread({}, this.state.currentAstro, {
          currentBid: this.state.currentAstro.currentBid + 0.1
        })
      });
    }
  }, {
    key: "downBid",
    value: function downBid() {
      this.setState({
        currentAstro: _objectSpread({}, this.state.currentAstro, {
          currentBid: this.state.currentAstro.currentBid - 0.1
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__["d" /* Dropdown */], {
        placeholder: "Search Star by name.",
        fluid: true,
        selection: true,
        search: true,
        options: this.state.formattedSearchBase,
        onChange: function onChange(e, _ref2) {
          var value = _ref2.value;
          return _this5.moveTo(value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__index_js__["e" /* RankingList */], {
        rankers: this.props.rankers,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "starmap",
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__index_js__["a" /* Astro */], {
        astro: this.state.currentAstro,
        message: this.state.message,
        messageUrl: this.state.messageUrl,
        modalOpen: this.state.modalOpen,
        handleClose: function handleClose() {
          return _this5.handleClose();
        },
        upBid: function upBid() {
          return _this5.upBid();
        },
        downBid: function downBid() {
          return _this5.downBid();
        },
        formLoading: this.state.formLoading,
        onPressBuy: function onPressBuy(bid, name, sns) {
          return _this5.onPressBuy(bid, name, sns);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
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
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);


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
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__Layout__["a"]; });
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MetaID__ = __webpack_require__("./components/MetaID.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__MetaID__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AstroList__ = __webpack_require__("./components/AstroList.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header__ = __webpack_require__("./components/Header.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RankingList__ = __webpack_require__("./components/RankingList.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__RankingList__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AstroCard__ = __webpack_require__("./components/AstroCard.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__AstroCard__["a"]; });










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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_web3_js__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bignumber_js__ = __webpack_require__("./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_index__ = __webpack_require__("./components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_data_star_seed_json__ = __webpack_require__("./static/data/star_seed.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_data_star_seed_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_data_star_seed_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_VirtualSky__ = __webpack_require__("./components/VirtualSky.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_s_alert__ = __webpack_require__("./node_modules/react-s-alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_s_alert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_s_alert__);

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
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3() {
        var astros, ranking_hashes, rankers;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2__ethereum_metaStellar_js__["a" /* default */].methods.lastId().call().then(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(res) {
                    var minimumPrice, starIDs;
                    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return __WEBPACK_IMPORTED_MODULE_2__ethereum_metaStellar_js__["a" /* default */].methods.minimumPrice().call();

                          case 2:
                            minimumPrice = _context2.sent;
                            starIDs = Array.from(Array(parseInt(res))).map(function (e, i) {
                              return i + 1;
                            });
                            _context2.next = 6;
                            return Promise.all(starIDs.map(
                            /*#__PURE__*/
                            function () {
                              var _ref2 = _asyncToGenerator(
                              /*#__PURE__*/
                              __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(id) {
                                var rawAstro, lastBid, minBidTic, currentBid;
                                return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                                  while (1) {
                                    switch (_context.prev = _context.next) {
                                      case 0:
                                        _context.next = 2;
                                        return __WEBPACK_IMPORTED_MODULE_2__ethereum_metaStellar_js__["a" /* default */].methods.getAstro(id).call();

                                      case 2:
                                        rawAstro = _context.sent;
                                        _context.next = 5;
                                        return new __WEBPACK_IMPORTED_MODULE_4_bignumber_js__["BigNumber"](parseInt(rawAstro.lastBid));

                                      case 5:
                                        lastBid = _context.sent;
                                        _context.next = 8;
                                        return new __WEBPACK_IMPORTED_MODULE_4_bignumber_js__["BigNumber"](parseInt(minimumPrice));

                                      case 8:
                                        minBidTic = _context.sent;
                                        _context.next = 11;
                                        return lastBid.plus(minBidTic);

                                      case 11:
                                        currentBid = _context.sent;
                                        return _context.abrupt("return", {
                                          id: parseInt(rawAstro.id),
                                          target: {
                                            name: rawAstro.name
                                          },
                                          ra: {
                                            decimal: rawAstro.raDecimal / 1000
                                          },
                                          dec: {
                                            decimal: rawAstro.decDecimal / 1000
                                          },
                                          metaID: {
                                            name: rawAstro.metaIDName,
                                            owner: rawAstro.metaIDOwner,
                                            sns: rawAstro.metaIDSns
                                          },
                                          lastBid: lastBid,
                                          minBidTic: minBidTic,
                                          currentBid: currentBid
                                        });

                                      case 13:
                                      case "end":
                                        return _context.stop();
                                    }
                                  }
                                }, _callee, this);
                              }));

                              return function (_x2) {
                                return _ref2.apply(this, arguments);
                              };
                            }()));

                          case 6:
                            return _context2.abrupt("return", _context2.sent);

                          case 7:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 2:
                astros = _context3.sent;
                ranking_hashes = {};
                astros.forEach(function (astro) {
                  var x = astro.metaID.owner;
                  ranking_hashes[x] = (ranking_hashes[x] || 0) + 1;
                });
                rankers = Object.keys(ranking_hashes).sort(function (a, b) {
                  return ranking_hashes[b] - ranking_hashes[a];
                });
                return _context3.abrupt("return", {
                  astros: astros,
                  rankers: rankers
                });

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
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
      loading: false,
      currentUser: null
    };
    return _this;
  }

  _createClass(MetaStellarIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')) {
        __WEBPACK_IMPORTED_MODULE_8_react_s_alert___default.a.info('<h4>Metamask not available.</h4><ul><li><a href="https://metamask.io/" target="_blank">Get Metamask now.</a></li></ul>', {
          position: 'top-right',
          effect: 'slide',
          html: true,
          timeout: 5000
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_3__ethereum_web3_js__["a" /* default */].eth.net.getNetworkType().then(function (network) {
          if (network !== 'ropsten') {
            __WEBPACK_IMPORTED_MODULE_8_react_s_alert___default.a.info('<h4>You are not in a ropsten network.</h4><ul><li><a href="https://metamask.io/" target="_blank">Open Metamask and change your network to ropsten.</a></li></ul>', {
              position: 'top-right',
              effect: 'slide',
              html: true,
              timeout: 5000
            });
          }
        });
      }

      console.log(this.props.ranking);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_index__["c" /* Layout */], {
        fluid: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_VirtualSky__["a" /* default */], {
        astros: this.props.astros,
        rankers: this.props.rankers,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_s_alert___default.a, {
        stack: {
          limit: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
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
//# sourceMappingURL=5.5ac15c8733403e30e5d4.hot-update.js.map