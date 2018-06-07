webpackHotUpdate(4,{

/***/ "./components/Astro.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Astro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ethereum_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ethereum_web3__);
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
  }), "You can put your name on it."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__index__["e" /* MetaID */], {
    metaID: astro.metaID,
    starImage: "http://server7.sky-map.org/imgcut?survey=DSS2&w=128&h=128&ra=".concat(astro.ra.decimal, "&de=").concat(astro.dec.decimal, "&angle=1.25&output=PNG"),
    starUrl: "http://server1.wikisky.org/v2?ra=\"+(".concat(astro.ra.decimal, "/15)+\"&de=\"+(").concat(astro.dec.decimal, ")+\"&zoom=6&img_source=DSS2"),
    starPrice: __WEBPACK_IMPORTED_MODULE_1__ethereum_web3__["default"].utils.fromWei(astro.lastBid, 'ether'),
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
  }, "Minimum Price : ".concat(__WEBPACK_IMPORTED_MODULE_1__ethereum_web3__["default"].utils.fromWei(astro.currentBid, 'ether'), " ETH"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), "Anyone who pays ".concat(__WEBPACK_IMPORTED_MODULE_1__ethereum_web3__["default"].utils.fromWei(astro.minBidTic, 'ether'), " ETH more than your bid price will be able to purchase this star from you without permission. (You will get your bidded ether back anyway)"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Card */].Content, {
    extra: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["i" /* Input */], {
    ref: function ref(_ref4) {
      return _this.input = _ref4;
    },
    defaultValue: __WEBPACK_IMPORTED_MODULE_1__ethereum_web3__["default"].utils.fromWei(astro.currentBid, 'ether'),
    type: "number",
    min: "".concat(__WEBPACK_IMPORTED_MODULE_1__ethereum_web3__["default"].utils.fromWei(astro.currentBid, 'ether')),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ethereum_web3__);
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
                return __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__["default"].eth.net.getNetworkType().then(function (network) {
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
                return __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__["default"].eth.getAccounts();

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
                            value: __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__["default"].utils.toWei(bid, 'ether'),
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
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__index_js__["f" /* RankingList */], {
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

/***/ "./ethereum/metaStellar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__build_MetaStellar_json__ = __webpack_require__("./ethereum/build/MetaStellar.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__build_MetaStellar_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__build_MetaStellar_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_data_credentials_json__ = __webpack_require__("./static/data/credentials.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_data_credentials_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_data_credentials_json__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var instance = new __WEBPACK_IMPORTED_MODULE_0__web3__["default"].eth.Contract(JSON.parse(__WEBPACK_IMPORTED_MODULE_1__build_MetaStellar_json___default.a.interface), __WEBPACK_IMPORTED_MODULE_2__static_data_credentials_json___default.a.ropsten);
var _default = instance;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(instance, "instance", "/Users/hangyul/Desktop/Metastellar/metastellar/ethereum/metaStellar.js");
  reactHotLoader.register(_default, "default", "/Users/hangyul/Desktop/Metastellar/metastellar/ethereum/metaStellar.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./ethereum/web3.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/hangyul/Desktop/Metastellar/metastellar/ethereum/web3.js: Unexpected token, expected \";\" (10:10)\n\n   8 |   console.log('MetaMask connected');\n   9 | } else {\n> 10 |   netwokr web3.eth.net.getNetworkType();\n     |           ^\n  11 |   const provider = new Web3.providers.HttpProvider(\n  12 |     `https://ropsten.infura.io/${credentials.infura_key}`\n  13 | );\n    at _class.raise (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:2063:16)\n    at _class.semicolon (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:2047:40)\n    at _class.parseExpressionStatement (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:4439:10)\n    at _class.parseStatementContent (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:4045:19)\n    at _class.parseStatement (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:4470:23)\n    at _class.parseBlockBody (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:4457:10)\n    at _class.parseBlock (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:4446:10)\n    at _class.parseStatementContent (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:3985:21)\n    at _class.parseStatement (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseIfStatement (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:4257:51)\n    at _class.parseStatementContent (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:3957:21)\n    at _class.parseStatement (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:4470:23)\n    at _class.parseBlockBody (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:4457:10)\n    at _class.parseTopLevel (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:3902:10)\n    at _class.parse (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:5250:17)\n    at parse (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/node_modules/babylon/lib/index.js:9972:38)\n    at parser (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/lib/transformation/normalize-file.js:106:33)\n    at normalizeFile (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/lib/transformation/normalize-file.js:53:11)\n    at runSync (/Users/hangyul/Desktop/Metastellar/metastellar/node_modules/@babel/core/lib/transformation/index.js:34:41)");

/***/ }),

/***/ "./node_modules/any-promise/index.js":
false,

/***/ "./node_modules/any-promise/loader.js":
false,

/***/ "./node_modules/any-promise/register-shim.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/api.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/buffer.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/node.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/reporter.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/constants/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/constants/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/pem.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/pem.js":
false,

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/brorand/index.js":
false,

/***/ "./node_modules/browserify-aes/aes.js":
false,

/***/ "./node_modules/browserify-aes/authCipher.js":
false,

/***/ "./node_modules/browserify-aes/browser.js":
false,

/***/ "./node_modules/browserify-aes/decrypter.js":
false,

/***/ "./node_modules/browserify-aes/encrypter.js":
false,

/***/ "./node_modules/browserify-aes/ghash.js":
false,

/***/ "./node_modules/browserify-aes/incr32.js":
false,

/***/ "./node_modules/browserify-aes/modes/cbc.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb1.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb8.js":
false,

/***/ "./node_modules/browserify-aes/modes/ctr.js":
false,

/***/ "./node_modules/browserify-aes/modes/ecb.js":
false,

/***/ "./node_modules/browserify-aes/modes/index.js":
false,

/***/ "./node_modules/browserify-aes/modes/list.json":
false,

/***/ "./node_modules/browserify-aes/modes/ofb.js":
false,

/***/ "./node_modules/browserify-aes/streamCipher.js":
false,

/***/ "./node_modules/browserify-cipher/browser.js":
false,

/***/ "./node_modules/browserify-des/index.js":
false,

/***/ "./node_modules/browserify-des/modes.js":
false,

/***/ "./node_modules/browserify-rsa/index.js":
false,

/***/ "./node_modules/browserify-sign/algos.js":
false,

/***/ "./node_modules/browserify-sign/browser/algorithms.json":
false,

/***/ "./node_modules/browserify-sign/browser/curves.json":
false,

/***/ "./node_modules/browserify-sign/browser/index.js":
false,

/***/ "./node_modules/browserify-sign/browser/sign.js":
false,

/***/ "./node_modules/browserify-sign/browser/verify.js":
false,

/***/ "./node_modules/buffer-xor/index.js":
false,

/***/ "./node_modules/cipher-base/index.js":
false,

/***/ "./node_modules/core-util-is/lib/util.js":
false,

/***/ "./node_modules/create-ecdh/browser.js":
false,

/***/ "./node_modules/create-hash/browser.js":
false,

/***/ "./node_modules/create-hash/md5.js":
false,

/***/ "./node_modules/create-hmac/browser.js":
false,

/***/ "./node_modules/create-hmac/legacy.js":
false,

/***/ "./node_modules/crypto-browserify/index.js":
false,

/***/ "./node_modules/decode-uri-component/index.js":
false,

/***/ "./node_modules/des.js/lib/des.js":
false,

/***/ "./node_modules/des.js/lib/des/cbc.js":
false,

/***/ "./node_modules/des.js/lib/des/cipher.js":
false,

/***/ "./node_modules/des.js/lib/des/des.js":
false,

/***/ "./node_modules/des.js/lib/des/ede.js":
false,

/***/ "./node_modules/des.js/lib/des/utils.js":
false,

/***/ "./node_modules/diffie-hellman/browser.js":
false,

/***/ "./node_modules/diffie-hellman/lib/dh.js":
false,

/***/ "./node_modules/diffie-hellman/lib/generatePrime.js":
false,

/***/ "./node_modules/diffie-hellman/lib/primes.json":
false,

/***/ "./node_modules/elliptic/lib/elliptic.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/base.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/edwards.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/mont.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/short.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curves.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/key.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/signature.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/key.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/signature.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/utils.js":
false,

/***/ "./node_modules/elliptic/package.json":
false,

/***/ "./node_modules/eth-lib/lib/array.js":
false,

/***/ "./node_modules/eth-lib/lib/bytes.js":
false,

/***/ "./node_modules/eth-lib/lib/hash.js":
false,

/***/ "./node_modules/ethjs-unit/lib/index.js":
false,

/***/ "./node_modules/ethjs-unit/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/eventemitter3/index.js":
false,

/***/ "./node_modules/events/events.js":
false,

/***/ "./node_modules/evp_bytestokey/index.js":
false,

/***/ "./node_modules/for-each/index.js":
false,

/***/ "./node_modules/global/window.js":
false,

/***/ "./node_modules/hash-base/index.js":
false,

/***/ "./node_modules/hash.js/lib/hash.js":
false,

/***/ "./node_modules/hash.js/lib/hash/common.js":
false,

/***/ "./node_modules/hash.js/lib/hash/hmac.js":
false,

/***/ "./node_modules/hash.js/lib/hash/ripemd.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/1.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/224.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/256.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/384.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/512.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/common.js":
false,

/***/ "./node_modules/hash.js/lib/hash/utils.js":
false,

/***/ "./node_modules/hmac-drbg/lib/hmac-drbg.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/indexof/index.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/is-function/index.js":
false,

/***/ "./node_modules/is-hex-prefixed/src/index.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/md5.js/index.js":
false,

/***/ "./node_modules/miller-rabin/lib/mr.js":
false,

/***/ "./node_modules/minimalistic-assert/index.js":
false,

/***/ "./node_modules/minimalistic-crypto-utils/lib/utils.js":
false,

/***/ "./node_modules/next/node_modules/uuid/index.js":
false,

/***/ "./node_modules/next/node_modules/uuid/lib/bytesToUuid.js":
false,

/***/ "./node_modules/next/node_modules/uuid/lib/rng-browser.js":
false,

/***/ "./node_modules/next/node_modules/uuid/v1.js":
false,

/***/ "./node_modules/next/node_modules/uuid/v4.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js":
false,

/***/ "./node_modules/number-to-bn/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/number-to-bn/src/index.js":
false,

/***/ "./node_modules/oboe/dist/oboe-browser.js":
false,

/***/ "./node_modules/parse-asn1/aesid.json":
false,

/***/ "./node_modules/parse-asn1/asn1.js":
false,

/***/ "./node_modules/parse-asn1/certificate.js":
false,

/***/ "./node_modules/parse-asn1/fixProc.js":
false,

/***/ "./node_modules/parse-asn1/index.js":
false,

/***/ "./node_modules/parse-headers/parse-headers.js":
false,

/***/ "./node_modules/pbkdf2/browser.js":
false,

/***/ "./node_modules/pbkdf2/lib/async.js":
false,

/***/ "./node_modules/pbkdf2/lib/default-encoding.js":
false,

/***/ "./node_modules/pbkdf2/lib/precondition.js":
false,

/***/ "./node_modules/pbkdf2/lib/sync-browser.js":
false,

/***/ "./node_modules/process-nextick-args/index.js":
false,

/***/ "./node_modules/public-encrypt/browser.js":
false,

/***/ "./node_modules/public-encrypt/mgf.js":
false,

/***/ "./node_modules/public-encrypt/privateDecrypt.js":
false,

/***/ "./node_modules/public-encrypt/publicEncrypt.js":
false,

/***/ "./node_modules/public-encrypt/withPublic.js":
false,

/***/ "./node_modules/public-encrypt/xor.js":
false,

/***/ "./node_modules/query-string/index.js":
false,

/***/ "./node_modules/randombytes/browser.js":
false,

/***/ "./node_modules/randomfill/browser.js":
false,

/***/ "./node_modules/randomhex/src/browser.js":
false,

/***/ "./node_modules/randomhex/src/crypto.js":
false,

/***/ "./node_modules/randomhex/src/index.js":
false,

/***/ "./node_modules/readable-stream/duplex-browser.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/BufferList.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/readable-stream/passthrough.js":
false,

/***/ "./node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/readable-stream/transform.js":
false,

/***/ "./node_modules/readable-stream/writable-browser.js":
false,

/***/ "./node_modules/ripemd160/index.js":
false,

/***/ "./node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/scrypt.js/js.js":
false,

/***/ "./node_modules/scryptsy/lib/scrypt.js":
false,

/***/ "./node_modules/setimmediate/setImmediate.js":
false,

/***/ "./node_modules/sha.js/hash.js":
false,

/***/ "./node_modules/sha.js/index.js":
false,

/***/ "./node_modules/sha.js/sha.js":
false,

/***/ "./node_modules/sha.js/sha1.js":
false,

/***/ "./node_modules/sha.js/sha224.js":
false,

/***/ "./node_modules/sha.js/sha256.js":
false,

/***/ "./node_modules/sha.js/sha384.js":
false,

/***/ "./node_modules/sha.js/sha512.js":
false,

/***/ "./node_modules/stream-browserify/index.js":
false,

/***/ "./node_modules/strict-uri-encode/index.js":
false,

/***/ "./node_modules/string_decoder/lib/string_decoder.js":
false,

/***/ "./node_modules/strip-hex-prefix/src/index.js":
false,

/***/ "./node_modules/swarm-js/lib/api-browser.js":
false,

/***/ "./node_modules/swarm-js/lib/pick.js":
false,

/***/ "./node_modules/swarm-js/lib/swarm-hash.js":
false,

/***/ "./node_modules/swarm-js/lib/swarm.js":
false,

/***/ "./node_modules/timers-browserify/main.js":
false,

/***/ "./node_modules/trim/index.js":
false,

/***/ "./node_modules/url-set-query/index.js":
false,

/***/ "./node_modules/utf8/utf8.js":
false,

/***/ "./node_modules/util-deprecate/browser.js":
false,

/***/ "./node_modules/vm-browserify/index.js":
false,

/***/ "./node_modules/web3-bzz/node_modules/underscore/underscore.js":
false,

/***/ "./node_modules/web3-bzz/src/index.js":
false,

/***/ "./node_modules/web3-core-helpers/node_modules/underscore/underscore.js":
false,

/***/ "./node_modules/web3-core-helpers/src/errors.js":
false,

/***/ "./node_modules/web3-core-helpers/src/formatters.js":
false,

/***/ "./node_modules/web3-core-helpers/src/index.js":
false,

/***/ "./node_modules/web3-core-method/node_modules/underscore/underscore.js":
false,

/***/ "./node_modules/web3-core-method/src/index.js":
false,

/***/ "./node_modules/web3-core-promievent/src/index.js":
false,

/***/ "./node_modules/web3-core-requestmanager/node_modules/underscore/underscore.js":
false,

/***/ "./node_modules/web3-core-requestmanager/src/batch.js":
false,

/***/ "./node_modules/web3-core-requestmanager/src/givenProvider.js":
false,

/***/ "./node_modules/web3-core-requestmanager/src/index.js":
false,

/***/ "./node_modules/web3-core-requestmanager/src/jsonrpc.js":
false,

/***/ "./node_modules/web3-core-subscriptions/node_modules/underscore/underscore.js":
false,

/***/ "./node_modules/web3-core-subscriptions/src/index.js":
false,

/***/ "./node_modules/web3-core-subscriptions/src/subscription.js":
false,

/***/ "./node_modules/web3-core/src/extend.js":
false,

/***/ "./node_modules/web3-core/src/index.js":
false,

/***/ "./node_modules/web3-eth-abi/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/web3-eth-abi/node_modules/underscore/underscore.js":
false,

/***/ "./node_modules/web3-eth-abi/src/formatters.js":
false,

/***/ "./node_modules/web3-eth-abi/src/index.js":
false,

/***/ "./node_modules/web3-eth-abi/src/param.js":
false,

/***/ "./node_modules/web3-eth-abi/src/type.js":
false,

/***/ "./node_modules/web3-eth-abi/src/types/address.js":
false,

/***/ "./node_modules/web3-eth-abi/src/types/bool.js":
false,

/***/ "./node_modules/web3-eth-abi/src/types/bytes.js":
false,

/***/ "./node_modules/web3-eth-abi/src/types/dynamicbytes.js":
false,

/***/ "./node_modules/web3-eth-abi/src/types/int.js":
false,

/***/ "./node_modules/web3-eth-abi/src/types/string.js":
false,

/***/ "./node_modules/web3-eth-abi/src/types/uint.js":
false,

/***/ "./node_modules/web3-eth-accounts/node_modules/eth-lib/lib/account.js":
false,

/***/ "./node_modules/web3-eth-accounts/node_modules/eth-lib/lib/array.js":
false,

/***/ "./node_modules/web3-eth-accounts/node_modules/eth-lib/lib/bytes.js":
false,

/***/ "./node_modules/web3-eth-accounts/node_modules/eth-lib/lib/hash.js":
false,

/***/ "./node_modules/web3-eth-accounts/node_modules/eth-lib/lib/nat.js":
false,

/***/ "./node_modules/web3-eth-accounts/node_modules/eth-lib/lib/rlp.js":
false,

/***/ "./node_modules/web3-eth-accounts/node_modules/underscore/underscore.js":
false,

/***/ "./node_modules/web3-eth-accounts/src/index.js":
false,

/***/ "./node_modules/web3-eth-contract/node_modules/underscore/underscore.js":
false,

/***/ "./node_modules/web3-eth-contract/src/index.js":
false,

/***/ "./node_modules/web3-eth-iban/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/web3-eth-iban/src/index.js":
false,

/***/ "./node_modules/web3-eth-personal/src/index.js":
false,

/***/ "./node_modules/web3-eth/node_modules/underscore/underscore.js":
false,

/***/ "./node_modules/web3-eth/src/getNetworkType.js":
false,

/***/ "./node_modules/web3-eth/src/index.js":
false,

/***/ "./node_modules/web3-net/src/index.js":
false,

/***/ "./node_modules/web3-providers-http/src/index.js":
false,

/***/ "./node_modules/web3-providers-ipc/node_modules/underscore/underscore.js":
false,

/***/ "./node_modules/web3-providers-ipc/src/index.js":
false,

/***/ "./node_modules/web3-providers-ws/node_modules/underscore/underscore.js":
false,

/***/ "./node_modules/web3-providers-ws/src/index.js":
false,

/***/ "./node_modules/web3-shh/src/index.js":
false,

/***/ "./node_modules/web3-utils/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/web3-utils/node_modules/underscore/underscore.js":
false,

/***/ "./node_modules/web3-utils/src/index.js":
false,

/***/ "./node_modules/web3-utils/src/soliditySha3.js":
false,

/***/ "./node_modules/web3-utils/src/utils.js":
false,

/***/ "./node_modules/web3/package.json":
false,

/***/ "./node_modules/web3/src/index.js":
false,

/***/ "./node_modules/websocket/lib/browser.js":
false,

/***/ "./node_modules/websocket/lib/version.js":
false,

/***/ "./node_modules/websocket/package.json":
false,

/***/ "./node_modules/xhr-request-promise/index.js":
false,

/***/ "./node_modules/xhr-request/index.js":
false,

/***/ "./node_modules/xhr-request/lib/ensure-header.js":
false,

/***/ "./node_modules/xhr-request/lib/normalize-response.js":
false,

/***/ "./node_modules/xhr-request/lib/request-browser.js":
false,

/***/ "./node_modules/xhr/index.js":
false,

/***/ "./node_modules/xhr2/lib/browser.js":
false,

/***/ "./node_modules/xtend/immutable.js":
false,

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_web3_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ethereum_web3_js__);
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
        __WEBPACK_IMPORTED_MODULE_3__ethereum_web3_js__["default"].eth.net.getNetworkType().then(function (network) {
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
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_index__["d" /* Layout */], {
        fluid: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_VirtualSky__["a" /* default */], {
        astros: this.props.astros,
        rankers: this.props.rankers,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_s_alert___default.a, {
        stack: {
          limit: 3
        },
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

/***/ }),

/***/ 3:
false,

/***/ 4:
false,

/***/ 5:
false,

/***/ 6:
false

})
//# sourceMappingURL=4.d7f87d6ff6a0160cf577.hot-update.js.map