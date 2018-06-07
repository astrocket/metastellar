webpackHotUpdate(4,{

/***/ "./pages/user.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ethereum_metaStellar_js__ = __webpack_require__("./ethereum/metaStellar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_web3_js__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bignumber_js__ = __webpack_require__("./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_index__ = __webpack_require__("./components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_s_alert__ = __webpack_require__("./node_modules/react-s-alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_s_alert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_s_alert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");

var _jsxFileName = "/Users/hangyul/Desktop/Metastellar/metastellar/pages/user.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var User =
/*#__PURE__*/
function (_Component) {
  _inherits(User, _Component);

  _createClass(User, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var address, bucketLength, starIndexes, pages, per_pages, initProps;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = _ref.query.address;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2__ethereum_metaStellar_js__["a" /* default */].methods.getBucketLength(address).call();

              case 3:
                bucketLength = _context.sent;
                starIndexes = Array.from(Array(parseInt(bucketLength))).map(function (e, i) {
                  return i + 1;
                });
                pages = [], per_pages = 18;

                while (starIndexes.length > 0) {
                  pages.push(starIndexes.splice(0, per_pages));
                }

                initProps = {
                  address: address,
                  pages: pages
                };
                return _context.abrupt("return", initProps || {});

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function User() {
    var _this;

    _classCallCheck(this, User);

    _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this));
    _this.state = {
      astros: [],
      page: 0,
      no_more: false,
      loading: true,
      metaID: {
        name: 'n/a'
      }
    };
    return _this;
  }

  _createClass(User, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.paginateChain().then(function () {
        return _this2.setState({
          loading: false,
          page: _this2.state.page + 1
        });
      });

      if (!(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')) {
        __WEBPACK_IMPORTED_MODULE_7_react_s_alert___default.a.info('<h4>Metamask not available.</h4><ul><li><a href="https://metamask.io/" target="_blank">Get Metamask now.</a></li></ul>', {
          position: 'top-right',
          effect: 'slide',
          html: true,
          timeout: 5000
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_3__ethereum_web3_js__["a" /* default */].eth.net.getNetworkType().then(function (network) {
          if (network !== 'ropsten') {
            __WEBPACK_IMPORTED_MODULE_7_react_s_alert___default.a.info('<h4>You are not in a ropsten network.</h4><ul><li><a href="https://metamask.io/" target="_blank">Open Metamask and change your network to ropsten.</a></li></ul>', {
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
    key: "onClickPagination",
    value: function onClickPagination() {
      var _this3 = this;

      this.setState({
        loading: true
      }, function () {
        _this3.paginateChain().then(function () {
          return _this3.setState({
            loading: false,
            page: _this3.state.page + 1
          });
        });
      });
    }
  }, {
    key: "paginateChain",
    value: function () {
      var _paginateChain = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3() {
        var _this4 = this;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.generatePromises(this.state.page).then(
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(promises) {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _promise, astro;

                    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!(promises.length === 0)) {
                              _context2.next = 4;
                              break;
                            }

                            _this4.setState({
                              no_more: true
                            });

                            _context2.next = 33;
                            break;

                          case 4:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context2.prev = 7;
                            _iterator = promises[Symbol.iterator]();

                          case 9:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                              _context2.next = 19;
                              break;
                            }

                            _promise = _step.value;
                            _context2.next = 13;
                            return _promise;

                          case 13:
                            astro = _context2.sent;
                            console.log(astro);

                            try {
                              _this4.setState({
                                astros: _toConsumableArray(_this4.state.astros).concat([astro])
                              });
                            } catch (error) {
                              console.log(error, 'error');
                            }

                          case 16:
                            _iteratorNormalCompletion = true;
                            _context2.next = 9;
                            break;

                          case 19:
                            _context2.next = 25;
                            break;

                          case 21:
                            _context2.prev = 21;
                            _context2.t0 = _context2["catch"](7);
                            _didIteratorError = true;
                            _iteratorError = _context2.t0;

                          case 25:
                            _context2.prev = 25;
                            _context2.prev = 26;

                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                              _iterator.return();
                            }

                          case 28:
                            _context2.prev = 28;

                            if (!_didIteratorError) {
                              _context2.next = 31;
                              break;
                            }

                            throw _iteratorError;

                          case 31:
                            return _context2.finish(28);

                          case 32:
                            return _context2.finish(25);

                          case 33:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this, [[7, 21, 25, 33], [26,, 28, 32]]);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function paginateChain() {
        return _paginateChain.apply(this, arguments);
      };
    }()
  }, {
    key: "generatePromises",
    value: function () {
      var _generatePromises = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(page) {
        var _this5 = this;

        var minimumPrice, promises;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2__ethereum_metaStellar_js__["a" /* default */].methods.minimumPrice().call();

              case 2:
                minimumPrice = _context5.sent;
                promises = this.props.pages[page].map(
                /*#__PURE__*/
                function () {
                  var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(idx) {
                    var astroId, rawAstro, lastBid, minBidTic, currentBid;
                    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return __WEBPACK_IMPORTED_MODULE_2__ethereum_metaStellar_js__["a" /* default */].methods.astroBucket(_this5.props.address, idx).call();

                          case 2:
                            astroId = _context4.sent;
                            _context4.next = 5;
                            return __WEBPACK_IMPORTED_MODULE_2__ethereum_metaStellar_js__["a" /* default */].methods.getAstro(astroId).call();

                          case 5:
                            rawAstro = _context4.sent;
                            _context4.next = 8;
                            return new __WEBPACK_IMPORTED_MODULE_4_bignumber_js__["BigNumber"](parseInt(rawAstro.lastBid));

                          case 8:
                            lastBid = _context4.sent;
                            _context4.next = 11;
                            return new __WEBPACK_IMPORTED_MODULE_4_bignumber_js__["BigNumber"](parseInt(minimumPrice));

                          case 11:
                            minBidTic = _context4.sent;
                            _context4.next = 14;
                            return lastBid.plus(minBidTic);

                          case 14:
                            currentBid = _context4.sent;
                            return _context4.abrupt("return", {
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

                          case 16:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, this);
                  }));

                  return function (_x4) {
                    return _ref3.apply(this, arguments);
                  };
                }());
                return _context5.abrupt("return", promises);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function generatePromises(_x3) {
        return _generatePromises.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_index__["d" /* Layout */], {
        fluid: true,
        style: {
          margin: '5vw'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, "".concat(this.props.address, "'s space"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_index__["c" /* AstroList */], {
        astros: this.state.astros,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_semantic_ui_react__["a" /* Button */], {
        fluid: true,
        basic: true,
        loading: this.state.loading,
        style: {
          marginTop: '10px',
          marginBottom: '10px'
        },
        onClick: function onClick() {
          return _this6.onClickPagination();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, "Next Page"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_s_alert___default.a, {
        stack: {
          limit: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
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

  return User;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(User, "User", "/Users/hangyul/Desktop/Metastellar/metastellar/pages/user.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/user")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.1285be7c92b0631eb567.hot-update.js.map