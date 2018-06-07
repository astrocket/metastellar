webpackHotUpdate(4,{

/***/ "./ethereum/web3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__("./node_modules/web3/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_data_credentials_json__ = __webpack_require__("./static/data/credentials.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_data_credentials_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_data_credentials_json__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var web3;
var provider;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(window.web3.currentProvider); // metamask available

  console.log('MetaMask connected');
} else {
  web3.eth.net.getNetworkType().then(function (network) {});
  web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(provider);
}

var _default = web3;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(web3, "web3", "/Users/hangyul/Desktop/Metastellar/metastellar/ethereum/web3.js");
  reactHotLoader.register(provider, "provider", "/Users/hangyul/Desktop/Metastellar/metastellar/ethereum/web3.js");
  reactHotLoader.register(_default, "default", "/Users/hangyul/Desktop/Metastellar/metastellar/ethereum/web3.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.7007ecea518888ab5e15.hot-update.js.map