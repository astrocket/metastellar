webpackHotUpdate(4,{

/***/ "./ethereum/metaStellar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__build_MetaStellar_json__ = __webpack_require__("./ethereum/build/MetaStellar.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__build_MetaStellar_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__build_MetaStellar_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dappAddress_json__ = __webpack_require__("./dappAddress.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dappAddress_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dappAddress_json__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var instance = new __WEBPACK_IMPORTED_MODULE_0__web3__["a" /* default */].eth.Contract(JSON.parse(__WEBPACK_IMPORTED_MODULE_1__build_MetaStellar_json___default.a.interface), __WEBPACK_IMPORTED_MODULE_2__dappAddress_json___default.a.ropsten);
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

/***/ })

})
//# sourceMappingURL=4.7c76b0d5c171053598ae.hot-update.js.map