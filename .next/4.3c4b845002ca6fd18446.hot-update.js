webpackHotUpdate(4,{

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
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var lastID;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2__ethereum_metaStellar_js__["a" /* default */].methods.lastId().call();

              case 2:
                lastID = _context.sent;
                return _context.abrupt("return", {
                  lastId: lastId
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
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
      astros: [],
      mapShow: true,
      loading: false
    };
    return _this;
  }

  _createClass(MetaStellarIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var starIndexes = Array.from(Array(this.props.lastId)).map(function (e, i) {
        return i + 1;
      });
      this.renderAstros(starIndexes).then(function () {
        return _this2.setState({
          loading: false
        });
      });
    }
  }, {
    key: "renderAstros",
    value: function () {
      var _renderAstros = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(idxs) {
        var astroPromises, textPromises, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _textPromise;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                astroPromises = idxs.map(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(id) {
                    var astro;
                    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return __WEBPACK_IMPORTED_MODULE_2__ethereum_metaStellar_js__["a" /* default */].methods.getAstro(id).call();

                          case 2:
                            astro = _context2.sent;
                            return _context2.abrupt("return", astro);

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }());
                textPromises = urls.map(
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(url) {
                    var response;
                    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return fetch(url);

                          case 2:
                            response = _context3.sent;
                            return _context3.abrupt("return", response.text());

                          case 4:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function (_x3) {
                    return _ref2.apply(this, arguments);
                  };
                }()); // log them in sequence

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context4.prev = 5;
                _iterator = textPromises[Symbol.iterator]();

              case 7:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context4.next = 17;
                  break;
                }

                _textPromise = _step.value;
                _context4.t0 = console;
                _context4.next = 12;
                return _textPromise;

              case 12:
                _context4.t1 = _context4.sent;

                _context4.t0.log.call(_context4.t0, _context4.t1);

              case 14:
                _iteratorNormalCompletion = true;
                _context4.next = 7;
                break;

              case 17:
                _context4.next = 23;
                break;

              case 19:
                _context4.prev = 19;
                _context4.t2 = _context4["catch"](5);
                _didIteratorError = true;
                _iteratorError = _context4.t2;

              case 23:
                _context4.prev = 23;
                _context4.prev = 24;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 26:
                _context4.prev = 26;

                if (!_didIteratorError) {
                  _context4.next = 29;
                  break;
                }

                throw _iteratorError;

              case 29:
                return _context4.finish(26);

              case 30:
                return _context4.finish(23);

              case 31:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[5, 19, 23, 31], [24,, 26, 30]]);
      }));

      return function renderAstros(_x) {
        return _renderAstros.apply(this, arguments);
      };
    }()
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
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_VirtualSky__["a" /* default */], {
        astros: this.state.astros,
        mapShow: this.state.mapShow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
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
//# sourceMappingURL=4.3c4b845002ca6fd18446.hot-update.js.map