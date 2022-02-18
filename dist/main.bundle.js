/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #fff;\n  color: #333;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 1.5;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\n.container {\n  min-height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nmain {\n  flex-grow: 1;\n}\n\nheader,\nmain,\nfooter {\n  flex-shrink: 0;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n}\nheader img {\n  width: clamp(50px, 6vw, 70px);\n  height: clamp(50px, 6vw, 70px);\n}\nheader img:hover {\n  cursor: pointer;\n}\nheader button {\n  margin-top: 15px;\n  font-size: clamp(0.9rem, 3.2vw, 1.4rem);\n  font-weight: 500;\n  color: #333;\n  background-color: #fff;\n  border: none;\n  padding: 10px 30px;\n  cursor: pointer;\n}\nheader button:hover {\n  color: #d31414;\n}\n\n.active {\n  color: red;\n}\n\n.home-container {\n  position: relative;\n  text-align: center;\n  object-fit: cover;\n}\n.home-container img {\n  width: 100%;\n  max-height: 750px;\n  object-fit: cover;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.home-container h1 {\n  font-size: clamp(3.3rem, 7.8vw, 7rem);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -70%);\n  text-shadow: 2px 3px 4px #1a1a1a;\n  color: #eee;\n  font-weight: 900;\n}\n\n.about-container {\n  width: clamp(45ch, 65vw, 100ch);\n  padding: 1rem;\n  margin-left: max(1rem, 15vw);\n  margin-top: calc(1.3rem + 5vw);\n  margin-bottom: calc(1.3rem + 5vw);\n}\n.about-container h2 {\n  font-size: clamp(2rem, 4vw, 3rem);\n}\n.about-container p {\n  margin-top: -30px;\n  font-size: clamp(1rem, 2vw, 1.3rem);\n}\n\nfooter {\n  background-color: #222;\n  color: #fff;\n  text-align: center;\n  width: 100%;\n  text-align: center;\n  bottom: 0;\n  padding: 3px;\n}\nfooter a {\n  color: #fff;\n  text-decoration: none;\n}\nfooter a:hover {\n  font-weight: 700;\n}\n\n.menu img {\n  width: 100%;\n  max-height: 300px;\n  object-fit: cover;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.menu h1 {\n  text-align: center;\n  font-size: clamp(2rem, 5vw, 3rem);\n}\n\n.menu-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(clamp(400px, 45vw, 900px), 1fr));\n  gap: calc(0.4rem + 1vw);\n  margin-bottom: 10rem;\n}\n\n.menu-item {\n  background-color: #FFF;\n  display: flex;\n  flex-direction: column;\n  margin-left: max(1rem, 5vw);\n  padding: 1rem;\n  border-radius: 8px;\n  box-shadow: rgba(184, 189, 192, 0.2) 0px 8px 24px;\n  width: clamp(400px, 45vw, 900px);\n  border-left: 10px solid #fab649;\n}\n.menu-item p {\n  margin-top: -12px;\n}\n.menu-item p:nth-of-type(1) {\n  color: red;\n  font-weight: 700;\n}\n.menu-item p:nth-of-type(2) {\n  font-size: clamp(1.1rem, 1.5vw, 1.4rem);\n  font-weight: 700;\n}\n.menu-item p:nth-of-type(3) {\n  font-size: clamp(0.9rem, 1.3vw, 1.2rem);\n  font-weight: 300;\n  margin-top: -22px;\n}\n.menu-item p:nth-of-type(4) {\n  font-size: clamp(1rem, 1vw, 1.2rem);\n  font-weight: bold;\n}\n\n.contact img {\n  width: 100%;\n  max-height: 450px;\n  object-fit: cover;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.contact h1 {\n  text-align: center;\n  font-size: clamp(2rem, 5vw, 3rem);\n}\n\n.contact-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.contact-container .contact-item {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.contact-container .contact-item:last-of-type {\n  margin-bottom: 2rem;\n}\n.contact-container p {\n  margin-top: -10px;\n  font-size: clamp(1rem, 1.4vw, 1.3rem);\n}\n.contact-container p:nth-of-type(1) {\n  font-size: clamp(1.1rem, 1.5vw, 1.4rem);\n  font-weight: 700;\n}\n\n@media (max-width: 813px) {\n  .menu-item {\n    width: 90vw;\n  }\n}\n@media (max-width: 650px) {\n  .about-container {\n    margin-top: -10px;\n    margin-left: 5px;\n    margin-right: 5px;\n    width: 100vw;\n  }\n\n  header button {\n    padding: 6px 18px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;;;EAGI,sBAAA;AAAJ;;AAcA;EACI,sBAZQ;EAaR,WAZO;EAaP,iCANM;EAON,gBAAA;EAEA,SAAA;EACA,UAAA;AAZJ;;AAiBA;;EAEI,WAAA;EACA,YAAA;AAdJ;;AAiBA;EACI,gBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;AAdJ;;AAkBA;EACI,YAAA;AAfJ;;AAkBA;;;EAGI,cAAA;AAfJ;;AAoBA;EACI,aAAA;EACA,8BAAA;EACA,aAAA;AAjBJ;AAmBI;EACI,6BAAA;EACA,8BAAA;AAjBR;AAoBI;EACI,eAAA;AAlBR;AAqBI;EACI,gBAAA;EACA,uCAAA;EACA,gBAAA;EACA,WAlEG;EAmEH,sBApEI;EAsEJ,YAAA;EAEA,kBAAA;EACA,eAAA;AArBR;AAwBI;EAEI,cA3EQ;AAoDhB;;AA2BA;EACI,UAAA;AAxBJ;;AA6BA;EACI,kBAAA;EACA,kBAAA;EACA,iBAAA;AA1BJ;AA4BI;EACI,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,iDAAA;AA1BR;AA6BI;EACI,qCAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,gCAAA;EACA,WAAA;EACA,gBAAA;AA3BR;;AA+BA;EACI,+BAAA;EACA,aAAA;EACA,4BAAA;EACA,8BAAA;EACA,iCAAA;AA5BJ;AA8BI;EACI,iCAAA;AA5BR;AA+BI;EACI,iBAAA;EACA,mCAAA;AA7BR;;AAmCA;EACI,sBAAA;EACA,WArIQ;EAsIR,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;AAhCJ;AAkCI;EACI,WA7II;EA8IJ,qBAAA;AAhCR;AAmCI;EACI,gBAAA;AAjCR;;AAyCI;EACI,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,iDAAA;AAtCR;AAyCI;EACI,kBAAA;EACA,iCAAA;AAvCR;;AA6CA;EACI,aAAA;EACA,+EAAA;EACA,uBAAA;EACA,oBAAA;AA1CJ;;AA6CA;EACI,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,aAAA;EACA,kBAAA;EACA,iDAAA;EACA,gCAjBQ;EAkBR,+BAAA;AA1CJ;AA4CI;EACI,iBAAA;AA1CR;AA6CI;EACI,UAAA;EACA,gBAAA;AA3CR;AA8CI;EACI,uCAAA;EACA,gBAAA;AA5CR;AA+CI;EACI,uCAAA;EACA,gBAAA;EACA,iBAAA;AA7CR;AAgDI;EACI,mCAAA;EACA,iBAAA;AA9CR;;AAqDI;EACI,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,iDAAA;AAlDR;AAqDI;EACI,kBAAA;EACA,iCAAA;AAnDR;;AAuDA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AApDJ;AAsDI;EACI,gBAAA;EACA,mBAAA;AApDR;AAuDI;EACI,mBAAA;AArDR;AAwDI;EACI,iBAAA;EACA,qCAAA;AAtDR;AAyDI;EACI,uCAAA;EACA,gBAAA;AAvDR;;AA2DA;EACI;IACI,WAAA;EAxDN;AACF;AA2DA;EAEI;IACI,iBAAA;IACA,gBAAA;IACA,iBAAA;IACA,YAAA;EA1DN;;EA6DE;IACI,iBAAA;EA1DN;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400&display=swap');\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n$clr-light: #fff;\n$clr-dark: #333;\n$clr-primary: #fab649;\n$clr-secondary: #d31414;\n$clr-accent: #e5e5e5;\n\n$ff-title: 'Merriweather',\nserif;\n$ff-body: 'Roboto',\nsans-serif;\n\nbody {\n    background-color: $clr-light;\n    color: $clr-dark;\n    font-family: $ff-body;\n    line-height: 1.5;\n\n    margin: 0;\n    padding: 0;\n}\n\n//layout\n\nhtml,\nbody {\n    width: 100%;\n    height: 100%;\n}\n\n.container {\n    min-height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    //   \n}\n\nmain {\n    flex-grow: 1;\n}\n\nheader,\nmain,\nfooter {\n    flex-shrink: 0;\n}\n\n//header \n\nheader {\n    display: flex;\n    justify-content: space-between;\n    padding: 1rem;\n\n    img {\n        width: clamp(50px, 6vw, 70px);\n        height: clamp(50px, 6vw, 70px);\n    }\n\n    img:hover {\n        cursor: pointer;\n    }\n\n    button {\n        margin-top: 15px;\n        font-size: clamp(0.9rem, 3.2vw, 1.4rem);\n        font-weight: 500;\n        color: $clr-dark;\n        background-color: $clr-light;\n\n        border: none;\n\n        padding: 10px 30px;\n        cursor: pointer;\n    }\n\n    button:hover {\n        //    background-color: $clr-accent;\n        color: $clr-secondary;\n    }\n}\n\n.active {\n    color: red;\n}\n\n//home \n\n.home-container {\n    position: relative;\n    text-align: center;\n    object-fit: cover;\n\n    img {\n        width: 100%;\n        max-height: 750px;\n        object-fit: cover;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    }\n\n    h1 {\n        font-size: clamp(3.3rem, 7.8vw, 7rem);\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -70%);\n        text-shadow: 2px 3px 4px #1a1a1a;\n        color: #eee;\n        font-weight: 900;\n    }\n}\n\n.about-container {\n    width: clamp(45ch, 65vw, 100ch);\n    padding: 1rem;\n    margin-left: max(1rem, 15vw);\n    margin-top: calc(1.3rem + 5vw);\n    margin-bottom: calc(1.3rem + 5vw);\n\n    h2 {\n        font-size: clamp(2rem, 4vw, 3rem);\n    }\n\n    p {\n        margin-top: -30px;\n        font-size: clamp(1rem, 2vw, 1.3rem);\n    }\n}\n\n//footer \n\nfooter {\n    background-color: #222;\n    color: $clr-light;\n    text-align: center;\n    width: 100%;\n    text-align: center;\n    bottom: 0;\n    padding: 3px;\n\n    a {\n        color: $clr-light;\n        text-decoration: none;\n    }\n\n    a:hover {\n        font-weight: 700;\n    }\n}\n\n\n//menu \n\n.menu {\n    img {\n        width: 100%;\n        max-height: 300px;\n        object-fit: cover;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    }\n\n    h1 {\n        text-align: center;\n        font-size: clamp(2rem, 5vw, 3rem);\n    }\n}\n\n$cardwidth: clamp(400px, 45vw, 900px);\n\n.menu-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax($cardwidth, 1fr));\n    gap: calc(0.4rem + 1vw);\n    margin-bottom: 10rem;\n}\n\n.menu-item {\n    background-color: #FFF;\n    display: flex;\n    flex-direction: column;\n    margin-left: max(1rem, 5vw);\n    padding: 1rem;\n    border-radius: 8px;\n    box-shadow: rgba(184, 189, 192, 0.2) 0px 8px 24px;\n    width: $cardwidth;\n    border-left: 10px solid $clr-primary;\n\n    p {\n        margin-top: -12px;\n    }\n\n    p:nth-of-type(1) {\n        color: red;\n        font-weight: 700;\n    }\n\n    p:nth-of-type(2) {\n        font-size: clamp(1.1rem, 1.5vw, 1.4rem);\n        font-weight: 700;\n    }\n\n    p:nth-of-type(3) {\n        font-size: clamp(0.9rem, 1.3vw, 1.2rem);\n        font-weight: 300;\n        margin-top: -22px;\n    }\n\n    p:nth-of-type(4) {\n        font-size: clamp(1rem, 1vw, 1.2rem);\n        font-weight: bold;\n    }\n}\n\n//contact \n\n.contact {\n    img {\n        width: 100%;\n        max-height: 450px;\n        object-fit: cover;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    }\n\n    h1 {\n        text-align: center;\n        font-size: clamp(2rem, 5vw, 3rem);\n    }\n}\n\n.contact-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n\n    .contact-item {\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n    }\n\n    .contact-item:last-of-type {\n        margin-bottom: 2rem;\n    }\n\n    p {\n        margin-top: -10px;\n        font-size: clamp(1rem, 1.4vw, 1.3rem);\n    }\n\n    p:nth-of-type(1) {\n        font-size: clamp(1.1rem, 1.5vw, 1.4rem);\n        font-weight: 700;\n    }\n}\n\n@media (max-width: 813px) {\n    .menu-item {\n        width: 90vw;\n    }\n}\n\n@media (max-width: 650px) {\n\n    .about-container {\n        margin-top: -10px;\n        margin-left: 5px;\n        margin-right: 5px;\n        width: 100vw;\n    }\n\n    header button {\n        padding: 6px 18px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContact)
/* harmony export */ });
/* harmony import */ var _images_contact_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/contact.jpg */ "./src/images/contact.jpg");


function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactTop = document.createElement('div');
    contactTop.classList.add('contact-top');

    const contactImage = new Image();
    contactImage.src = _images_contact_jpg__WEBPACK_IMPORTED_MODULE_0__;
    contactImage.classList.add('contact-image');

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact';

    contactTop.appendChild(contactImage);
    contactTop.appendChild(h1);


    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');


    const array = [{
            title: 'Address',
            street: '303 fake street',
            city: 'San Diego, CA',
            areaCode: '92101'
        },
        {
            title: 'Hours',
            timeone: 'Monday - Thursday: 11:30 am - 9:30 pm',
            timetwo: 'Friday - Saturday: 11:30 am - 10 pm',
            timethree: 'Sunday: 12 pm - 9 pm'
        },
        {
            title: 'Contact Us',
            phone: 'Phone: (123) 456-7890',
            email: 'Email: goldenkoisushi@example.com'
        }
    ]
    array.forEach((ele) => {
        const contactItem = document.createElement('div');
        contactItem.classList.add('contact-item');

        Object.keys(ele).forEach((key) => {
            const p = document.createElement('p');
            p.textContent = ele[key];
            contactItem.appendChild(p);
        });
        contactContainer.appendChild(contactItem);
    });


    contact.appendChild(contactTop);
    contact.appendChild(contactContainer);
    return contact;
}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
function createFooter() {
    const footer = document.createElement('footer');

    const h3 = document.createElement('h3');
    h3.textContent = 'Golden Koi Sushi';

    const link = document.createElement('a');
    link.textContent = 'Japan icons created by Freepik - Flaticon';
    link.href = 'https://www.flaticon.com/free-icons/japan';

    footer.appendChild(h3);
    footer.appendChild(link);
    return footer
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _images_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icon.png */ "./src/images/icon.png");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");




function createHeader() {
    const header = document.createElement('header');
    const myIcon = new Image();
    myIcon.src = _images_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    myIcon.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.iconSwitch);

    const nav = document.createElement('nav');
    const buttons = ['Home', 'Menu', 'Contact'];
    buttons.forEach((item) => {
        const button = document.createElement('button');
        button.classList.add('nav-buttons');
        button.textContent = item;
        button.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.switchPages);
        nav.appendChild(button);
    });
    header.appendChild(myIcon);
    header.appendChild(nav);

    return header
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _images_home_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/home.jpg */ "./src/images/home.jpg");


function createHome() {
    const home = document.createElement('div');
    const landingImage = new Image();
    landingImage.src = _images_home_jpg__WEBPACK_IMPORTED_MODULE_0__;
    landingImage.classList.add('landing-image');

    home.classList.add('home');
    const h1 = document.createElement('h1');
    h1.textContent = 'Golden Koi Sushi';


    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    homeContainer.appendChild(h1);
    homeContainer.appendChild(landingImage)

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container')
    const h2 = document.createElement('h2');
    h2.textContent = 'About';
    aboutContainer.appendChild(h2);
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    aboutContainer.appendChild(p);


    home.appendChild(homeContainer);
    home.appendChild(aboutContainer);
    return home;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "switchPages": () => (/* binding */ switchPages),
/* harmony export */   "iconSwitch": () => (/* binding */ iconSwitch)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/footer.js");







const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
const main = document.createElement('main');


const switchPages = (e) => {
    const second = document.querySelector('main :first-child');
    const item = e.target.textContent;
    if (item === 'Menu') {
        second.remove();
        main.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])());
    } else if (item === 'Home') {
        second.remove();
        main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])());
    } else {
        second.remove();
        main.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])());
    }
}

const iconSwitch = () => {
    const second = document.querySelector('main :first-child');
    second.remove();
    main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])());
}

container.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
container.appendChild(main);
container.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_5__["default"])());
main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])());

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _images_menu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu.jpg */ "./src/images/menu.jpg");


function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuTop = document.createElement('div');
    menuTop.classList.add('menu-top');

    const menuImage = new Image();
    menuImage.src = _images_menu_jpg__WEBPACK_IMPORTED_MODULE_0__;
    menuImage.classList.add('menu-image');

    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';

    menuTop.appendChild(menuImage);
    menuTop.appendChild(h1);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const array = [{
            number: 1,
            name: 'Cucumber Roll',
            contents: 'Cucumber and avocado',
            price: '$5.00'
        },
        {
            number: 2,
            name: 'Sweet Potato Roll',
            contents: 'Sweet Potato and avocado',
            price: '$5.00'
        },
        {
            number: 3,
            name: 'California Roll',
            contents: 'Crab meat, cucumber, and avocado',
            price: '$6.00'
        },
        {
            number: 4,
            name: 'Boston Roll',
            contents: 'Shrimp, cucumber, and avocado',
            price: '$6.00'
        },
        {
            number: 5,
            name: 'Philadelphia Roll*',
            contents: 'Salmon, avocado, and cream cheese',
            price: '$6.00'
        },
        {
            number: 6,
            name: 'Spider Roll',
            contents: 'Tempura soft-shell crab, cucumber, avocado, and spicy mayo',
            price: '$8.00'
        },
        {
            number: 7,
            name: 'Dragon Roll',
            contents: 'Eel, cucumber, crab sticks, eel sauce, and avocado',
            price: '$8.00'
        },
        {
            number: 8,
            name: 'Rainbow Roll*',
            contents: 'Salmon, cucumber, spicy mayo, crab, avocado, and tobiko',
            price: '$8.00'
        }
    ]

    array.forEach((ele) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        Object.keys(ele).forEach((key) => {
            const p = document.createElement('p');
            p.textContent = ele[key];
            menuItem.appendChild(p);
        });
        menuContainer.appendChild(menuItem);
    });

    menu.appendChild(menuTop);
    menu.appendChild(menuContainer);
    return menu;
}

/***/ }),

/***/ "./src/images/contact.jpg":
/*!********************************!*\
  !*** ./src/images/contact.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "496eb3fe4d69e349dbe8.jpg";

/***/ }),

/***/ "./src/images/home.jpg":
/*!*****************************!*\
  !*** ./src/images/home.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0394292e32b1cb8ed8f1.jpg";

/***/ }),

/***/ "./src/images/icon.png":
/*!*****************************!*\
  !*** ./src/images/icon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3696bd47b9c0bde45c59.png";

/***/ }),

/***/ "./src/images/menu.jpg":
/*!*****************************!*\
  !*** ./src/images/menu.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7aa3517031d1ad45c426.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/restaurant-page/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXI6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNzAwOzEsNDAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsNDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbmhlYWRlcixcXG5tYWluLFxcbmZvb3RlciB7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5oZWFkZXIgaW1nIHtcXG4gIHdpZHRoOiBjbGFtcCg1MHB4LCA2dncsIDcwcHgpO1xcbiAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA2dncsIDcwcHgpO1xcbn1cXG5oZWFkZXIgaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaGVhZGVyIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjlyZW0sIDMuMnZ3LCAxLjRyZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaGVhZGVyIGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogI2QzMTQxNDtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uaG9tZS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi5ob21lLWNvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiA3NTBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG59XFxuLmhvbWUtY29udGFpbmVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMy4zcmVtLCA3Ljh2dywgN3JlbSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC03MCUpO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAzcHggNHB4ICMxYTFhMWE7XFxuICBjb2xvcjogI2VlZTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5hYm91dC1jb250YWluZXIge1xcbiAgd2lkdGg6IGNsYW1wKDQ1Y2gsIDY1dncsIDEwMGNoKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tbGVmdDogbWF4KDFyZW0sIDE1dncpO1xcbiAgbWFyZ2luLXRvcDogY2FsYygxLjNyZW0gKyA1dncpO1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjNyZW0gKyA1dncpO1xcbn1cXG4uYWJvdXQtY29udGFpbmVyIGgyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNHZ3LCAzcmVtKTtcXG59XFxuLmFib3V0LWNvbnRhaW5lciBwIHtcXG4gIG1hcmdpbi10b3A6IC0zMHB4O1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDEuM3JlbSk7XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDNweDtcXG59XFxuZm9vdGVyIGEge1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5tZW51IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbn1cXG4ubWVudSBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDV2dywgM3JlbSk7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjbGFtcCg0MDBweCwgNDV2dywgOTAwcHgpLCAxZnIpKTtcXG4gIGdhcDogY2FsYygwLjRyZW0gKyAxdncpO1xcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWxlZnQ6IG1heCgxcmVtLCA1dncpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTg0LCAxODksIDE5MiwgMC4yKSAwcHggOHB4IDI0cHg7XFxuICB3aWR0aDogY2xhbXAoNDAwcHgsIDQ1dncsIDkwMHB4KTtcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNmYWI2NDk7XFxufVxcbi5tZW51LWl0ZW0gcCB7XFxuICBtYXJnaW4tdG9wOiAtMTJweDtcXG59XFxuLm1lbnUtaXRlbSBwOm50aC1vZi10eXBlKDEpIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubWVudS1pdGVtIHA6bnRoLW9mLXR5cGUoMikge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjFyZW0sIDEuNXZ3LCAxLjRyZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLm1lbnUtaXRlbSBwOm50aC1vZi10eXBlKDMpIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMC45cmVtLCAxLjN2dywgMS4ycmVtKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBtYXJnaW4tdG9wOiAtMjJweDtcXG59XFxuLm1lbnUtaXRlbSBwOm50aC1vZi10eXBlKDQpIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAxLjJyZW0pO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250YWN0IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbn1cXG4uY29udGFjdCBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDV2dywgM3JlbSk7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb250YWN0LWNvbnRhaW5lciAuY29udGFjdC1pdGVtIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4uY29udGFjdC1jb250YWluZXIgLmNvbnRhY3QtaXRlbTpsYXN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuLmNvbnRhY3QtY29udGFpbmVyIHAge1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuNHZ3LCAxLjNyZW0pO1xcbn1cXG4uY29udGFjdC1jb250YWluZXIgcDpudGgtb2YtdHlwZSgxKSB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuMXJlbSwgMS41dncsIDEuNHJlbSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODEzcHgpIHtcXG4gIC5tZW51LWl0ZW0ge1xcbiAgICB3aWR0aDogOTB2dztcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAuYWJvdXQtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICB9XFxuXFxuICBoZWFkZXIgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNnB4IDE4cHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHSSxzQkFBQTtBQUFKOztBQWNBO0VBQ0ksc0JBWlE7RUFhUixXQVpPO0VBYVAsaUNBTk07RUFPTixnQkFBQTtFQUVBLFNBQUE7RUFDQSxVQUFBO0FBWko7O0FBaUJBOztFQUVJLFdBQUE7RUFDQSxZQUFBO0FBZEo7O0FBaUJBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBZEo7O0FBa0JBO0VBQ0ksWUFBQTtBQWZKOztBQWtCQTs7O0VBR0ksY0FBQTtBQWZKOztBQW9CQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFqQko7QUFtQkk7RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0FBakJSO0FBb0JJO0VBQ0ksZUFBQTtBQWxCUjtBQXFCSTtFQUNJLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBbEVHO0VBbUVILHNCQXBFSTtFQXNFSixZQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0FBckJSO0FBd0JJO0VBRUksY0EzRVE7QUFvRGhCOztBQTJCQTtFQUNJLFVBQUE7QUF4Qko7O0FBNkJBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBMUJKO0FBNEJJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtBQTFCUjtBQTZCSTtFQUNJLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUEzQlI7O0FBK0JBO0VBQ0ksK0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FBNUJKO0FBOEJJO0VBQ0ksaUNBQUE7QUE1QlI7QUErQkk7RUFDSSxpQkFBQTtFQUNBLG1DQUFBO0FBN0JSOztBQW1DQTtFQUNJLHNCQUFBO0VBQ0EsV0FySVE7RUFzSVIsa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQWhDSjtBQWtDSTtFQUNJLFdBN0lJO0VBOElKLHFCQUFBO0FBaENSO0FBbUNJO0VBQ0ksZ0JBQUE7QUFqQ1I7O0FBeUNJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtBQXRDUjtBQXlDSTtFQUNJLGtCQUFBO0VBQ0EsaUNBQUE7QUF2Q1I7O0FBNkNBO0VBQ0ksYUFBQTtFQUNBLCtFQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQTFDSjs7QUE2Q0E7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSxnQ0FqQlE7RUFrQlIsK0JBQUE7QUExQ0o7QUE0Q0k7RUFDSSxpQkFBQTtBQTFDUjtBQTZDSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQTNDUjtBQThDSTtFQUNJLHVDQUFBO0VBQ0EsZ0JBQUE7QUE1Q1I7QUErQ0k7RUFDSSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUE3Q1I7QUFnREk7RUFDSSxtQ0FBQTtFQUNBLGlCQUFBO0FBOUNSOztBQXFESTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaURBQUE7QUFsRFI7QUFxREk7RUFDSSxrQkFBQTtFQUNBLGlDQUFBO0FBbkRSOztBQXVEQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFwREo7QUFzREk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBcERSO0FBdURJO0VBQ0ksbUJBQUE7QUFyRFI7QUF3REk7RUFDSSxpQkFBQTtFQUNBLHFDQUFBO0FBdERSO0FBeURJO0VBQ0ksdUNBQUE7RUFDQSxnQkFBQTtBQXZEUjs7QUEyREE7RUFDSTtJQUNJLFdBQUE7RUF4RE47QUFDRjtBQTJEQTtFQUVJO0lBQ0ksaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQTFETjs7RUE2REU7SUFDSSxpQkFBQTtFQTFETjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlcjppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSw0MDAmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSw0MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4kY2xyLWxpZ2h0OiAjZmZmO1xcbiRjbHItZGFyazogIzMzMztcXG4kY2xyLXByaW1hcnk6ICNmYWI2NDk7XFxuJGNsci1zZWNvbmRhcnk6ICNkMzE0MTQ7XFxuJGNsci1hY2NlbnQ6ICNlNWU1ZTU7XFxuXFxuJGZmLXRpdGxlOiAnTWVycml3ZWF0aGVyJyxcXG5zZXJpZjtcXG4kZmYtYm9keTogJ1JvYm90bycsXFxuc2Fucy1zZXJpZjtcXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNsci1saWdodDtcXG4gICAgY29sb3I6ICRjbHItZGFyaztcXG4gICAgZm9udC1mYW1pbHk6ICRmZi1ib2R5O1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcblxcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8vbGF5b3V0XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvLyAgIFxcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG5oZWFkZXIsXFxubWFpbixcXG5mb290ZXIge1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLy9oZWFkZXIgXFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgICBpbWcge1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDUwcHgsIDZ2dywgNzBweCk7XFxuICAgICAgICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDZ2dywgNzBweCk7XFxuICAgIH1cXG5cXG4gICAgaW1nOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC45cmVtLCAzLjJ2dywgMS40cmVtKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBjb2xvcjogJGNsci1kYXJrO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNsci1saWdodDtcXG5cXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG5cXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgLy8gICAgYmFja2dyb3VuZC1jb2xvcjogJGNsci1hY2NlbnQ7XFxuICAgICAgICBjb2xvcjogJGNsci1zZWNvbmRhcnk7XFxuICAgIH1cXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi8vaG9tZSBcXG5cXG4uaG9tZS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuXFxuICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDc1MHB4O1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbiAgICB9XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMy4zcmVtLCA3Ljh2dywgN3JlbSk7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC03MCUpO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAzcHggNHB4ICMxYTFhMWE7XFxuICAgICAgICBjb2xvcjogI2VlZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIH1cXG59XFxuXFxuLmFib3V0LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiBjbGFtcCg0NWNoLCA2NXZ3LCAxMDBjaCk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiBtYXgoMXJlbSwgMTV2dyk7XFxuICAgIG1hcmdpbi10b3A6IGNhbGMoMS4zcmVtICsgNXZ3KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjNyZW0gKyA1dncpO1xcblxcbiAgICBoMiB7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDR2dywgM3JlbSk7XFxuICAgIH1cXG5cXG4gICAgcCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAxLjNyZW0pO1xcbiAgICB9XFxufVxcblxcbi8vZm9vdGVyIFxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxuICAgIGNvbG9yOiAkY2xyLWxpZ2h0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcGFkZGluZzogM3B4O1xcblxcbiAgICBhIHtcXG4gICAgICAgIGNvbG9yOiAkY2xyLWxpZ2h0O1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB9XFxuXFxuICAgIGE6aG92ZXIge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgfVxcbn1cXG5cXG5cXG4vL21lbnUgXFxuXFxuLm1lbnUge1xcbiAgICBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG4gICAgfVxcblxcbiAgICBoMSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDV2dywgM3JlbSk7XFxuICAgIH1cXG59XFxuXFxuJGNhcmR3aWR0aDogY2xhbXAoNDAwcHgsIDQ1dncsIDkwMHB4KTtcXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KCRjYXJkd2lkdGgsIDFmcikpO1xcbiAgICBnYXA6IGNhbGMoMC40cmVtICsgMXZ3KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTByZW07XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogbWF4KDFyZW0sIDV2dyk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgxODQsIDE4OSwgMTkyLCAwLjIpIDBweCA4cHggMjRweDtcXG4gICAgd2lkdGg6ICRjYXJkd2lkdGg7XFxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICRjbHItcHJpbWFyeTtcXG5cXG4gICAgcCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcXG4gICAgfVxcblxcbiAgICBwOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB9XFxuXFxuICAgIHA6bnRoLW9mLXR5cGUoMikge1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjFyZW0sIDEuNXZ3LCAxLjRyZW0pO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgfVxcblxcbiAgICBwOm50aC1vZi10eXBlKDMpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC45cmVtLCAxLjN2dywgMS4ycmVtKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMjJweDtcXG4gICAgfVxcblxcbiAgICBwOm50aC1vZi10eXBlKDQpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAxLjJyZW0pO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG59XFxuXFxuLy9jb250YWN0IFxcblxcbi5jb250YWN0IHtcXG4gICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LWhlaWdodDogNDUwcHg7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxuICAgIH1cXG5cXG4gICAgaDEge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA1dncsIDNyZW0pO1xcbiAgICB9XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgLmNvbnRhY3QtaXRlbSB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgfVxcblxcbiAgICAuY29udGFjdC1pdGVtOmxhc3Qtb2YtdHlwZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuNHZ3LCAxLjNyZW0pO1xcbiAgICB9XFxuXFxuICAgIHA6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjFyZW0sIDEuNXZ3LCAxLjRyZW0pO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODEzcHgpIHtcXG4gICAgLm1lbnUtaXRlbSB7XFxuICAgICAgICB3aWR0aDogOTB2dztcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG5cXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgYnV0dG9uIHtcXG4gICAgICAgIHBhZGRpbmc6IDZweCAxOHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjb250YWN0SU1HIGZyb20gJy4vaW1hZ2VzL2NvbnRhY3QuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgICBjb25zdCBjb250YWN0VG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdFRvcC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRvcCcpO1xuXG4gICAgY29uc3QgY29udGFjdEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgY29udGFjdEltYWdlLnNyYyA9IGNvbnRhY3RJTUc7XG4gICAgY29udGFjdEltYWdlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW1hZ2UnKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICAgIGNvbnRhY3RUb3AuYXBwZW5kQ2hpbGQoY29udGFjdEltYWdlKTtcbiAgICBjb250YWN0VG9wLmFwcGVuZENoaWxkKGgxKTtcblxuXG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jb250YWluZXInKTtcblxuXG4gICAgY29uc3QgYXJyYXkgPSBbe1xuICAgICAgICAgICAgdGl0bGU6ICdBZGRyZXNzJyxcbiAgICAgICAgICAgIHN0cmVldDogJzMwMyBmYWtlIHN0cmVldCcsXG4gICAgICAgICAgICBjaXR5OiAnU2FuIERpZWdvLCBDQScsXG4gICAgICAgICAgICBhcmVhQ29kZTogJzkyMTAxJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0hvdXJzJyxcbiAgICAgICAgICAgIHRpbWVvbmU6ICdNb25kYXkgLSBUaHVyc2RheTogMTE6MzAgYW0gLSA5OjMwIHBtJyxcbiAgICAgICAgICAgIHRpbWV0d286ICdGcmlkYXkgLSBTYXR1cmRheTogMTE6MzAgYW0gLSAxMCBwbScsXG4gICAgICAgICAgICB0aW1ldGhyZWU6ICdTdW5kYXk6IDEyIHBtIC0gOSBwbSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdDb250YWN0IFVzJyxcbiAgICAgICAgICAgIHBob25lOiAnUGhvbmU6ICgxMjMpIDQ1Ni03ODkwJyxcbiAgICAgICAgICAgIGVtYWlsOiAnRW1haWw6IGdvbGRlbmtvaXN1c2hpQGV4YW1wbGUuY29tJ1xuICAgICAgICB9XG4gICAgXVxuICAgIGFycmF5LmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWl0ZW0nKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhlbGUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBlbGVba2V5XTtcbiAgICAgICAgICAgIGNvbnRhY3RJdGVtLmFwcGVuZENoaWxkKHApO1xuICAgICAgICB9KTtcbiAgICAgICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SXRlbSk7XG4gICAgfSk7XG5cblxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRvcCk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcbiAgICByZXR1cm4gY29udGFjdDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSAnR29sZGVuIEtvaSBTdXNoaSc7XG5cbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSAnSmFwYW4gaWNvbnMgY3JlYXRlZCBieSBGcmVlcGlrIC0gRmxhdGljb24nO1xuICAgIGxpbmsuaHJlZiA9ICdodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9qYXBhbic7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICByZXR1cm4gZm9vdGVyXG59IiwiaW1wb3J0IEljb24gZnJvbSAnLi9pbWFnZXMvaWNvbi5wbmcnO1xuaW1wb3J0IHsgc3dpdGNoUGFnZXMsIGljb25Td2l0Y2ggfSBmcm9tICcuL2luZGV4JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbXlJY29uLnNyYyA9IEljb247XG4gICAgbXlJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaWNvblN3aXRjaCk7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCBidXR0b25zID0gWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddO1xuICAgIGJ1dHRvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b25zJyk7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFBhZ2VzKTtcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG15SWNvbik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICByZXR1cm4gaGVhZGVyXG59IiwiaW1wb3J0IGhvbWVJTUcgZnJvbSAnLi9pbWFnZXMvaG9tZS5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsYW5kaW5nSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBsYW5kaW5nSW1hZ2Uuc3JjID0gaG9tZUlNRztcbiAgICBsYW5kaW5nSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbGFuZGluZy1pbWFnZScpO1xuXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ0dvbGRlbiBLb2kgU3VzaGknO1xuXG5cbiAgICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRhaW5lcicpO1xuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobGFuZGluZ0ltYWdlKVxuXG4gICAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250YWluZXInKVxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdBYm91dCc7XG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uJztcbiAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChwKTtcblxuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChob21lQ29udGFpbmVyKTtcbiAgICBob21lLmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKTtcbiAgICByZXR1cm4gaG9tZTtcbn0iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cblxuZXhwb3J0IGNvbnN0IHN3aXRjaFBhZ2VzID0gKGUpID0+IHtcbiAgICBjb25zdCBzZWNvbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluIDpmaXJzdC1jaGlsZCcpO1xuICAgIGNvbnN0IGl0ZW0gPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBpZiAoaXRlbSA9PT0gJ01lbnUnKSB7XG4gICAgICAgIHNlY29uZC5yZW1vdmUoKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xuICAgIH0gZWxzZSBpZiAoaXRlbSA9PT0gJ0hvbWUnKSB7XG4gICAgICAgIHNlY29uZC5yZW1vdmUoKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNlY29uZC5yZW1vdmUoKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGljb25Td2l0Y2ggPSAoKSA9PiB7XG4gICAgY29uc3Qgc2Vjb25kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiA6Zmlyc3QtY2hpbGQnKTtcbiAgICBzZWNvbmQucmVtb3ZlKCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufVxuXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbm1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTsiLCJpbXBvcnQgbWVudUlNRyBmcm9tICcuL2ltYWdlcy9tZW51LmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgY29uc3QgbWVudVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVUb3AuY2xhc3NMaXN0LmFkZCgnbWVudS10b3AnKTtcblxuICAgIGNvbnN0IG1lbnVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIG1lbnVJbWFnZS5zcmMgPSBtZW51SU1HO1xuICAgIG1lbnVJbWFnZS5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBtZW51VG9wLmFwcGVuZENoaWxkKG1lbnVJbWFnZSk7XG4gICAgbWVudVRvcC5hcHBlbmRDaGlsZChoMSk7XG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYXJyYXkgPSBbe1xuICAgICAgICAgICAgbnVtYmVyOiAxLFxuICAgICAgICAgICAgbmFtZTogJ0N1Y3VtYmVyIFJvbGwnLFxuICAgICAgICAgICAgY29udGVudHM6ICdDdWN1bWJlciBhbmQgYXZvY2FkbycsXG4gICAgICAgICAgICBwcmljZTogJyQ1LjAwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDIsXG4gICAgICAgICAgICBuYW1lOiAnU3dlZXQgUG90YXRvIFJvbGwnLFxuICAgICAgICAgICAgY29udGVudHM6ICdTd2VldCBQb3RhdG8gYW5kIGF2b2NhZG8nLFxuICAgICAgICAgICAgcHJpY2U6ICckNS4wMCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAzLFxuICAgICAgICAgICAgbmFtZTogJ0NhbGlmb3JuaWEgUm9sbCcsXG4gICAgICAgICAgICBjb250ZW50czogJ0NyYWIgbWVhdCwgY3VjdW1iZXIsIGFuZCBhdm9jYWRvJyxcbiAgICAgICAgICAgIHByaWNlOiAnJDYuMDAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogNCxcbiAgICAgICAgICAgIG5hbWU6ICdCb3N0b24gUm9sbCcsXG4gICAgICAgICAgICBjb250ZW50czogJ1NocmltcCwgY3VjdW1iZXIsIGFuZCBhdm9jYWRvJyxcbiAgICAgICAgICAgIHByaWNlOiAnJDYuMDAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogNSxcbiAgICAgICAgICAgIG5hbWU6ICdQaGlsYWRlbHBoaWEgUm9sbConLFxuICAgICAgICAgICAgY29udGVudHM6ICdTYWxtb24sIGF2b2NhZG8sIGFuZCBjcmVhbSBjaGVlc2UnLFxuICAgICAgICAgICAgcHJpY2U6ICckNi4wMCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiA2LFxuICAgICAgICAgICAgbmFtZTogJ1NwaWRlciBSb2xsJyxcbiAgICAgICAgICAgIGNvbnRlbnRzOiAnVGVtcHVyYSBzb2Z0LXNoZWxsIGNyYWIsIGN1Y3VtYmVyLCBhdm9jYWRvLCBhbmQgc3BpY3kgbWF5bycsXG4gICAgICAgICAgICBwcmljZTogJyQ4LjAwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDcsXG4gICAgICAgICAgICBuYW1lOiAnRHJhZ29uIFJvbGwnLFxuICAgICAgICAgICAgY29udGVudHM6ICdFZWwsIGN1Y3VtYmVyLCBjcmFiIHN0aWNrcywgZWVsIHNhdWNlLCBhbmQgYXZvY2FkbycsXG4gICAgICAgICAgICBwcmljZTogJyQ4LjAwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDgsXG4gICAgICAgICAgICBuYW1lOiAnUmFpbmJvdyBSb2xsKicsXG4gICAgICAgICAgICBjb250ZW50czogJ1NhbG1vbiwgY3VjdW1iZXIsIHNwaWN5IG1heW8sIGNyYWIsIGF2b2NhZG8sIGFuZCB0b2Jpa28nLFxuICAgICAgICAgICAgcHJpY2U6ICckOC4wMCdcbiAgICAgICAgfVxuICAgIF1cblxuICAgIGFycmF5LmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhlbGUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBlbGVba2V5XTtcbiAgICAgICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHApO1xuICAgICAgICB9KTtcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gICAgfSk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVUb3ApO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gICAgcmV0dXJuIG1lbnU7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3Jlc3RhdXJhbnQtcGFnZS9cIjsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==