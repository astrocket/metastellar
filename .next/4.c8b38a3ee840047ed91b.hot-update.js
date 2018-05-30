webpackHotUpdate(4,{

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constellation_json__ = __webpack_require__("./constellation.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constellation_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__constellation_json__);
var _jsxFileName = "/Users/hangyul/Desktop/Metastellar/metastellar/components/Header.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var formattedAstros = __WEBPACK_IMPORTED_MODULE_2__constellation_json___default.a.map(function (star) {
  return {
    key: star.target.name,
    value: star.target.name,
    text: star.target.name
  };
});

var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Menu */], {
    inverted: true,
    style: {
      margin: '10px'
    },
    "class": 'meta-header ui menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Menu */].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "MetaStellar"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Menu */].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["d" /* Dropdown */], {
    placeholder: "Search Star by name.",
    fluid: true,
    multiple: true,
    search: true,
    selection: true,
    options: formattedAstros,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Menu */].Menu, {
    position: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Menu */].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Constellation"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Menu */].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "+")));
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(formattedAstros, "formattedAstros", "/Users/hangyul/Desktop/Metastellar/metastellar/components/Header.js");
  reactHotLoader.register(_default, "default", "/Users/hangyul/Desktop/Metastellar/metastellar/components/Header.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.c8b38a3ee840047ed91b.hot-update.js.map