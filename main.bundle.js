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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #fff;\n  color: #333;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 1.5;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\n.container {\n  min-height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nmain {\n  flex-grow: 1;\n}\n\nheader,\nmain,\nfooter {\n  flex-shrink: 0;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n}\nheader img {\n  width: clamp(50px, 6vw, 70px);\n  height: clamp(50px, 6vw, 70px);\n}\nheader img:hover {\n  cursor: pointer;\n}\nheader button {\n  margin-top: 15px;\n  font-size: clamp(0.9rem, 3.2vw, 1.4rem);\n  font-weight: 500;\n  color: #333;\n  background-color: #fff;\n  border: none;\n  padding: 10px 30px;\n  cursor: pointer;\n}\nheader button:hover {\n  color: #d31414;\n}\n\n.active {\n  color: red;\n}\n\n.home-container {\n  position: relative;\n  text-align: center;\n  object-fit: cover;\n}\n.home-container img {\n  width: 100%;\n  max-height: 750px;\n  object-fit: cover;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.home-container h1 {\n  font-size: clamp(3.3rem, 7.8vw, 7rem);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -70%);\n  text-shadow: 2px 3px 4px #1a1a1a;\n  color: #eee;\n  font-weight: 900;\n}\n\n.about-container {\n  width: clamp(45ch, 65vw, 100ch);\n  padding: 1rem;\n  margin-left: max(1rem, 15vw);\n  margin-top: calc(1.3rem + 5vw);\n  margin-bottom: calc(1.3rem + 5vw);\n}\n.about-container h2 {\n  font-size: clamp(2rem, 4vw, 3rem);\n}\n.about-container p {\n  margin-top: -30px;\n  font-size: clamp(1rem, 2vw, 1.3rem);\n}\n\nfooter {\n  background-color: #222;\n  color: #fff;\n  text-align: center;\n  width: 100;\n  text-align: center;\n  bottom: 0;\n  padding: 3px;\n}\nfooter a {\n  color: #fff;\n  text-decoration: none;\n}\nfooter a:hover {\n  font-weight: 700;\n}\n\n.menu img {\n  width: 100%;\n  max-height: 300px;\n  object-fit: cover;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.menu h1 {\n  text-align: center;\n  font-size: clamp(2rem, 5vw, 3rem);\n}\n\n.menu-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(clamp(400px, 45vw, 900px), 1fr));\n  gap: calc(0.4rem + 1vw);\n  margin-bottom: 10rem;\n}\n\n.menu-item {\n  background-color: #FFF;\n  display: flex;\n  flex-direction: column;\n  margin-left: max(1rem, 5vw);\n  padding: 1rem;\n  border-radius: 8px;\n  box-shadow: rgba(184, 189, 192, 0.2) 0px 8px 24px;\n  width: clamp(400px, 45vw, 900px);\n  border-left: 10px solid #fab649;\n}\n.menu-item p {\n  margin-top: -12px;\n}\n.menu-item p:nth-of-type(1) {\n  color: red;\n  font-weight: 700;\n}\n.menu-item p:nth-of-type(2) {\n  font-size: clamp(1.1rem, 1.5vw, 1.4rem);\n  font-weight: 700;\n}\n.menu-item p:nth-of-type(3) {\n  font-size: clamp(0.9rem, 1.3vw, 1.2rem);\n  font-weight: 300;\n  margin-top: -22px;\n}\n.menu-item p:nth-of-type(4) {\n  font-size: clamp(1rem, 1vw, 1.2rem);\n  font-weight: bold;\n}\n\n.contact img {\n  width: 100%;\n  max-height: 450px;\n  object-fit: cover;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.contact h1 {\n  text-align: center;\n  font-size: clamp(2rem, 5vw, 3rem);\n}\n\n.contact-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.contact-container .contact-item {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.contact-container .contact-item:last-of-type {\n  margin-bottom: 2rem;\n}\n.contact-container p {\n  margin-top: -10px;\n  font-size: clamp(1rem, 1.4vw, 1.3rem);\n}\n.contact-container p:nth-of-type(1) {\n  font-size: clamp(1.1rem, 1.5vw, 1.4rem);\n  font-weight: 700;\n}\n\n@media (max-width: 813px) {\n  .menu-item {\n    width: 90vw;\n  }\n}\n@media (max-width: 650px) {\n  .about-container {\n    margin-top: -10px;\n    margin-left: 5px;\n    margin-right: 5px;\n    width: 95%;\n  }\n\n  header button {\n    padding: 6px 18px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;;;EAGI,sBAAA;AAAJ;;AAcA;EACI,sBAZQ;EAaR,WAZO;EAaP,iCANM;EAON,gBAAA;EAEA,SAAA;EACA,UAAA;AAZJ;;AAiBA;;EAEI,WAAA;EACA,YAAA;AAdJ;;AAiBA;EACI,gBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;AAdJ;;AAkBA;EACI,YAAA;AAfJ;;AAkBA;;;EAGI,cAAA;AAfJ;;AAoBA;EACI,aAAA;EACA,8BAAA;EACA,aAAA;AAjBJ;AAmBI;EACI,6BAAA;EACA,8BAAA;AAjBR;AAoBI;EACI,eAAA;AAlBR;AAqBI;EACI,gBAAA;EACA,uCAAA;EACA,gBAAA;EACA,WAlEG;EAmEH,sBApEI;EAsEJ,YAAA;EAEA,kBAAA;EACA,eAAA;AArBR;AAwBI;EAEI,cA3EQ;AAoDhB;;AA2BA;EACI,UAAA;AAxBJ;;AA6BA;EACI,kBAAA;EACA,kBAAA;EACA,iBAAA;AA1BJ;AA4BI;EACI,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,iDAAA;AA1BR;AA6BI;EACI,qCAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,gCAAA;EACA,WAAA;EACA,gBAAA;AA3BR;;AA+BA;EACI,+BAAA;EACA,aAAA;EACA,4BAAA;EACA,8BAAA;EACA,iCAAA;AA5BJ;AA8BI;EACI,iCAAA;AA5BR;AA+BI;EACI,iBAAA;EACA,mCAAA;AA7BR;;AAmCA;EACI,sBAAA;EACA,WArIQ;EAsIR,kBAAA;EACA,UAAA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;AAhCJ;AAkCI;EACI,WA7II;EA8IJ,qBAAA;AAhCR;AAmCI;EACI,gBAAA;AAjCR;;AAyCI;EACI,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,iDAAA;AAtCR;AAyCI;EACI,kBAAA;EACA,iCAAA;AAvCR;;AA6CA;EACI,aAAA;EACA,+EAAA;EACA,uBAAA;EACA,oBAAA;AA1CJ;;AA6CA;EACI,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,aAAA;EACA,kBAAA;EACA,iDAAA;EACA,gCAjBQ;EAkBR,+BAAA;AA1CJ;AA4CI;EACI,iBAAA;AA1CR;AA6CI;EACI,UAAA;EACA,gBAAA;AA3CR;AA8CI;EACI,uCAAA;EACA,gBAAA;AA5CR;AA+CI;EACI,uCAAA;EACA,gBAAA;EACA,iBAAA;AA7CR;AAgDI;EACI,mCAAA;EACA,iBAAA;AA9CR;;AAqDI;EACI,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,iDAAA;AAlDR;AAqDI;EACI,kBAAA;EACA,iCAAA;AAnDR;;AAuDA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AApDJ;AAsDI;EACI,gBAAA;EACA,mBAAA;AApDR;AAuDI;EACI,mBAAA;AArDR;AAwDI;EACI,iBAAA;EACA,qCAAA;AAtDR;AAyDI;EACI,uCAAA;EACA,gBAAA;AAvDR;;AA2DA;EACI;IACI,WAAA;EAxDN;AACF;AA2DA;EAEI;IACI,iBAAA;IACA,gBAAA;IACA,iBAAA;IACA,UAAA;EA1DN;;EA6DE;IACI,iBAAA;EA1DN;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400&display=swap');\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n$clr-light: #fff;\n$clr-dark: #333;\n$clr-primary: #fab649;\n$clr-secondary: #d31414;\n$clr-accent: #e5e5e5;\n\n$ff-title: 'Merriweather',\nserif;\n$ff-body: 'Roboto',\nsans-serif;\n\nbody {\n    background-color: $clr-light;\n    color: $clr-dark;\n    font-family: $ff-body;\n    line-height: 1.5;\n\n    margin: 0;\n    padding: 0;\n}\n\n//layout\n\nhtml,\nbody {\n    width: 100%;\n    height: 100%;\n}\n\n.container {\n    min-height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    //   \n}\n\nmain {\n    flex-grow: 1;\n}\n\nheader,\nmain,\nfooter {\n    flex-shrink: 0;\n}\n\n//header \n\nheader {\n    display: flex;\n    justify-content: space-between;\n    padding: 1rem;\n\n    img {\n        width: clamp(50px, 6vw, 70px);\n        height: clamp(50px, 6vw, 70px);\n    }\n\n    img:hover {\n        cursor: pointer;\n    }\n\n    button {\n        margin-top: 15px;\n        font-size: clamp(0.9rem, 3.2vw, 1.4rem);\n        font-weight: 500;\n        color: $clr-dark;\n        background-color: $clr-light;\n\n        border: none;\n\n        padding: 10px 30px;\n        cursor: pointer;\n    }\n\n    button:hover {\n        //    background-color: $clr-accent;\n        color: $clr-secondary;\n    }\n}\n\n.active {\n    color: red;\n}\n\n//home \n\n.home-container {\n    position: relative;\n    text-align: center;\n    object-fit: cover;\n\n    img {\n        width: 100%;\n        max-height: 750px;\n        object-fit: cover;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    }\n\n    h1 {\n        font-size: clamp(3.3rem, 7.8vw, 7rem);\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -70%);\n        text-shadow: 2px 3px 4px #1a1a1a;\n        color: #eee;\n        font-weight: 900;\n    }\n}\n\n.about-container {\n    width: clamp(45ch, 65vw, 100ch);\n    padding: 1rem;\n    margin-left: max(1rem, 15vw);\n    margin-top: calc(1.3rem + 5vw);\n    margin-bottom: calc(1.3rem + 5vw);\n\n    h2 {\n        font-size: clamp(2rem, 4vw, 3rem);\n    }\n\n    p {\n        margin-top: -30px;\n        font-size: clamp(1rem, 2vw, 1.3rem);\n    }\n}\n\n//footer \n\nfooter {\n    background-color: #222;\n    color: $clr-light;\n    text-align: center;\n    width: 100;\n    text-align: center;\n    bottom: 0;\n    padding: 3px;\n\n    a {\n        color: $clr-light;\n        text-decoration: none;\n    }\n\n    a:hover {\n        font-weight: 700;\n    }\n}\n\n\n//menu \n\n.menu {\n    img {\n        width: 100%;\n        max-height: 300px;\n        object-fit: cover;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    }\n\n    h1 {\n        text-align: center;\n        font-size: clamp(2rem, 5vw, 3rem);\n    }\n}\n\n$cardwidth: clamp(400px, 45vw, 900px);\n\n.menu-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax($cardwidth, 1fr));\n    gap: calc(0.4rem + 1vw);\n    margin-bottom: 10rem;\n}\n\n.menu-item {\n    background-color: #FFF;\n    display: flex;\n    flex-direction: column;\n    margin-left: max(1rem, 5vw);\n    padding: 1rem;\n    border-radius: 8px;\n    box-shadow: rgba(184, 189, 192, 0.2) 0px 8px 24px;\n    width: $cardwidth;\n    border-left: 10px solid $clr-primary;\n\n    p {\n        margin-top: -12px;\n    }\n\n    p:nth-of-type(1) {\n        color: red;\n        font-weight: 700;\n    }\n\n    p:nth-of-type(2) {\n        font-size: clamp(1.1rem, 1.5vw, 1.4rem);\n        font-weight: 700;\n    }\n\n    p:nth-of-type(3) {\n        font-size: clamp(0.9rem, 1.3vw, 1.2rem);\n        font-weight: 300;\n        margin-top: -22px;\n    }\n\n    p:nth-of-type(4) {\n        font-size: clamp(1rem, 1vw, 1.2rem);\n        font-weight: bold;\n    }\n}\n\n//contact \n\n.contact {\n    img {\n        width: 100%;\n        max-height: 450px;\n        object-fit: cover;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    }\n\n    h1 {\n        text-align: center;\n        font-size: clamp(2rem, 5vw, 3rem);\n    }\n}\n\n.contact-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n\n    .contact-item {\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n    }\n\n    .contact-item:last-of-type {\n        margin-bottom: 2rem;\n    }\n\n    p {\n        margin-top: -10px;\n        font-size: clamp(1rem, 1.4vw, 1.3rem);\n    }\n\n    p:nth-of-type(1) {\n        font-size: clamp(1.1rem, 1.5vw, 1.4rem);\n        font-weight: 700;\n    }\n}\n\n@media (max-width: 813px) {\n    .menu-item {\n        width: 90vw;\n    }\n}\n\n@media (max-width: 650px) {\n\n    .about-container {\n        margin-top: -10px;\n        margin-left: 5px;\n        margin-right: 5px;\n        width: 95%;\n    }\n\n    header button {\n        padding: 6px 18px;\n    }\n    \n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWVycml3ZWF0aGVyOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDQwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbm1haW4ge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG5oZWFkZXIsXFxubWFpbixcXG5mb290ZXIge1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuaGVhZGVyIGltZyB7XFxuICB3aWR0aDogY2xhbXAoNTBweCwgNnZ3LCA3MHB4KTtcXG4gIGhlaWdodDogY2xhbXAoNTBweCwgNnZ3LCA3MHB4KTtcXG59XFxuaGVhZGVyIGltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmhlYWRlciBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMC45cmVtLCAzLjJ2dywgMS40cmVtKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzMzMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmhlYWRlciBidXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNkMzE0MTQ7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmhvbWUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4uaG9tZS1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogNzUwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxufVxcbi5ob21lLWNvbnRhaW5lciBoMSB7XFxuICBmb250LXNpemU6IGNsYW1wKDMuM3JlbSwgNy44dncsIDdyZW0pO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNzAlKTtcXG4gIHRleHQtc2hhZG93OiAycHggM3B4IDRweCAjMWExYTFhO1xcbiAgY29sb3I6ICNlZWU7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uYWJvdXQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiBjbGFtcCg0NWNoLCA2NXZ3LCAxMDBjaCk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IG1heCgxcmVtLCAxNXZ3KTtcXG4gIG1hcmdpbi10b3A6IGNhbGMoMS4zcmVtICsgNXZ3KTtcXG4gIG1hcmdpbi1ib3R0b206IGNhbGMoMS4zcmVtICsgNXZ3KTtcXG59XFxuLmFib3V0LWNvbnRhaW5lciBoMiB7XFxuICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDR2dywgM3JlbSk7XFxufVxcbi5hYm91dC1jb250YWluZXIgcCB7XFxuICBtYXJnaW4tdG9wOiAtMzBweDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAxLjNyZW0pO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDNweDtcXG59XFxuZm9vdGVyIGEge1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5tZW51IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbn1cXG4ubWVudSBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDV2dywgM3JlbSk7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjbGFtcCg0MDBweCwgNDV2dywgOTAwcHgpLCAxZnIpKTtcXG4gIGdhcDogY2FsYygwLjRyZW0gKyAxdncpO1xcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWxlZnQ6IG1heCgxcmVtLCA1dncpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTg0LCAxODksIDE5MiwgMC4yKSAwcHggOHB4IDI0cHg7XFxuICB3aWR0aDogY2xhbXAoNDAwcHgsIDQ1dncsIDkwMHB4KTtcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNmYWI2NDk7XFxufVxcbi5tZW51LWl0ZW0gcCB7XFxuICBtYXJnaW4tdG9wOiAtMTJweDtcXG59XFxuLm1lbnUtaXRlbSBwOm50aC1vZi10eXBlKDEpIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubWVudS1pdGVtIHA6bnRoLW9mLXR5cGUoMikge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjFyZW0sIDEuNXZ3LCAxLjRyZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLm1lbnUtaXRlbSBwOm50aC1vZi10eXBlKDMpIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMC45cmVtLCAxLjN2dywgMS4ycmVtKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBtYXJnaW4tdG9wOiAtMjJweDtcXG59XFxuLm1lbnUtaXRlbSBwOm50aC1vZi10eXBlKDQpIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAxLjJyZW0pO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250YWN0IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbn1cXG4uY29udGFjdCBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDV2dywgM3JlbSk7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb250YWN0LWNvbnRhaW5lciAuY29udGFjdC1pdGVtIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4uY29udGFjdC1jb250YWluZXIgLmNvbnRhY3QtaXRlbTpsYXN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuLmNvbnRhY3QtY29udGFpbmVyIHAge1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuNHZ3LCAxLjNyZW0pO1xcbn1cXG4uY29udGFjdC1jb250YWluZXIgcDpudGgtb2YtdHlwZSgxKSB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuMXJlbSwgMS41dncsIDEuNHJlbSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODEzcHgpIHtcXG4gIC5tZW51LWl0ZW0ge1xcbiAgICB3aWR0aDogOTB2dztcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAuYWJvdXQtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcblxcbiAgaGVhZGVyIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDZweCAxOHB4O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0VBR0ksc0JBQUE7QUFBSjs7QUFjQTtFQUNJLHNCQVpRO0VBYVIsV0FaTztFQWFQLGlDQU5NO0VBT04sZ0JBQUE7RUFFQSxTQUFBO0VBQ0EsVUFBQTtBQVpKOztBQWlCQTs7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQWRKOztBQWlCQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQWRKOztBQWtCQTtFQUNJLFlBQUE7QUFmSjs7QUFrQkE7OztFQUdJLGNBQUE7QUFmSjs7QUFvQkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBakJKO0FBbUJJO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtBQWpCUjtBQW9CSTtFQUNJLGVBQUE7QUFsQlI7QUFxQkk7RUFDSSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQWxFRztFQW1FSCxzQkFwRUk7RUFzRUosWUFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtBQXJCUjtBQXdCSTtFQUVJLGNBM0VRO0FBb0RoQjs7QUEyQkE7RUFDSSxVQUFBO0FBeEJKOztBQTZCQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQTFCSjtBQTRCSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaURBQUE7QUExQlI7QUE2Qkk7RUFDSSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBM0JSOztBQStCQTtFQUNJLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQTVCSjtBQThCSTtFQUNJLGlDQUFBO0FBNUJSO0FBK0JJO0VBQ0ksaUJBQUE7RUFDQSxtQ0FBQTtBQTdCUjs7QUFtQ0E7RUFDSSxzQkFBQTtFQUNBLFdBcklRO0VBc0lSLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFoQ0o7QUFrQ0k7RUFDSSxXQTdJSTtFQThJSixxQkFBQTtBQWhDUjtBQW1DSTtFQUNJLGdCQUFBO0FBakNSOztBQXlDSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaURBQUE7QUF0Q1I7QUF5Q0k7RUFDSSxrQkFBQTtFQUNBLGlDQUFBO0FBdkNSOztBQTZDQTtFQUNJLGFBQUE7RUFDQSwrRUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUExQ0o7O0FBNkNBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0NBakJRO0VBa0JSLCtCQUFBO0FBMUNKO0FBNENJO0VBQ0ksaUJBQUE7QUExQ1I7QUE2Q0k7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUEzQ1I7QUE4Q0k7RUFDSSx1Q0FBQTtFQUNBLGdCQUFBO0FBNUNSO0FBK0NJO0VBQ0ksdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBN0NSO0FBZ0RJO0VBQ0ksbUNBQUE7RUFDQSxpQkFBQTtBQTlDUjs7QUFxREk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlEQUFBO0FBbERSO0FBcURJO0VBQ0ksa0JBQUE7RUFDQSxpQ0FBQTtBQW5EUjs7QUF1REE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBcERKO0FBc0RJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQXBEUjtBQXVESTtFQUNJLG1CQUFBO0FBckRSO0FBd0RJO0VBQ0ksaUJBQUE7RUFDQSxxQ0FBQTtBQXREUjtBQXlESTtFQUNJLHVDQUFBO0VBQ0EsZ0JBQUE7QUF2RFI7O0FBMkRBO0VBQ0k7SUFDSSxXQUFBO0VBeEROO0FBQ0Y7QUEyREE7RUFFSTtJQUNJLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7RUExRE47O0VBNkRFO0lBQ0ksaUJBQUE7RUExRE47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXI6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNzAwOzEsNDAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsNDAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuJGNsci1saWdodDogI2ZmZjtcXG4kY2xyLWRhcms6ICMzMzM7XFxuJGNsci1wcmltYXJ5OiAjZmFiNjQ5O1xcbiRjbHItc2Vjb25kYXJ5OiAjZDMxNDE0O1xcbiRjbHItYWNjZW50OiAjZTVlNWU1O1xcblxcbiRmZi10aXRsZTogJ01lcnJpd2VhdGhlcicsXFxuc2VyaWY7XFxuJGZmLWJvZHk6ICdSb2JvdG8nLFxcbnNhbnMtc2VyaWY7XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjbHItbGlnaHQ7XFxuICAgIGNvbG9yOiAkY2xyLWRhcms7XFxuICAgIGZvbnQtZmFtaWx5OiAkZmYtYm9keTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG5cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vL2xheW91dFxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLy8gICBcXG59XFxuXFxubWFpbiB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuaGVhZGVyLFxcbm1haW4sXFxuZm9vdGVyIHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi8vaGVhZGVyIFxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG5cXG4gICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiBjbGFtcCg1MHB4LCA2dncsIDcwcHgpO1xcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCg1MHB4LCA2dncsIDcwcHgpO1xcbiAgICB9XFxuXFxuICAgIGltZzpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuOXJlbSwgMy4ydncsIDEuNHJlbSk7XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgY29sb3I6ICRjbHItZGFyaztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjbHItbGlnaHQ7XFxuXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIC8vICAgIGJhY2tncm91bmQtY29sb3I6ICRjbHItYWNjZW50O1xcbiAgICAgICAgY29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcbiAgICB9XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4vL2hvbWUgXFxuXFxuLmhvbWUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcblxcbiAgICBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA3NTBweDtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG4gICAgfVxcblxcbiAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDMuM3JlbSwgNy44dncsIDdyZW0pO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNzAlKTtcXG4gICAgICAgIHRleHQtc2hhZG93OiAycHggM3B4IDRweCAjMWExYTFhO1xcbiAgICAgICAgY29sb3I6ICNlZWU7XFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB9XFxufVxcblxcbi5hYm91dC1jb250YWluZXIge1xcbiAgICB3aWR0aDogY2xhbXAoNDVjaCwgNjV2dywgMTAwY2gpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogbWF4KDFyZW0sIDE1dncpO1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKDEuM3JlbSArIDV2dyk7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS4zcmVtICsgNXZ3KTtcXG5cXG4gICAgaDIge1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA0dncsIDNyZW0pO1xcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMS4zcmVtKTtcXG4gICAgfVxcbn1cXG5cXG4vL2Zvb3RlciBcXG5cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcbiAgICBjb2xvcjogJGNsci1saWdodDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcGFkZGluZzogM3B4O1xcblxcbiAgICBhIHtcXG4gICAgICAgIGNvbG9yOiAkY2xyLWxpZ2h0O1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB9XFxuXFxuICAgIGE6aG92ZXIge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgfVxcbn1cXG5cXG5cXG4vL21lbnUgXFxuXFxuLm1lbnUge1xcbiAgICBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG4gICAgfVxcblxcbiAgICBoMSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDV2dywgM3JlbSk7XFxuICAgIH1cXG59XFxuXFxuJGNhcmR3aWR0aDogY2xhbXAoNDAwcHgsIDQ1dncsIDkwMHB4KTtcXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KCRjYXJkd2lkdGgsIDFmcikpO1xcbiAgICBnYXA6IGNhbGMoMC40cmVtICsgMXZ3KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTByZW07XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogbWF4KDFyZW0sIDV2dyk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgxODQsIDE4OSwgMTkyLCAwLjIpIDBweCA4cHggMjRweDtcXG4gICAgd2lkdGg6ICRjYXJkd2lkdGg7XFxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICRjbHItcHJpbWFyeTtcXG5cXG4gICAgcCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcXG4gICAgfVxcblxcbiAgICBwOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB9XFxuXFxuICAgIHA6bnRoLW9mLXR5cGUoMikge1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjFyZW0sIDEuNXZ3LCAxLjRyZW0pO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgfVxcblxcbiAgICBwOm50aC1vZi10eXBlKDMpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC45cmVtLCAxLjN2dywgMS4ycmVtKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMjJweDtcXG4gICAgfVxcblxcbiAgICBwOm50aC1vZi10eXBlKDQpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAxLjJyZW0pO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG59XFxuXFxuLy9jb250YWN0IFxcblxcbi5jb250YWN0IHtcXG4gICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LWhlaWdodDogNDUwcHg7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxuICAgIH1cXG5cXG4gICAgaDEge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA1dncsIDNyZW0pO1xcbiAgICB9XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgLmNvbnRhY3QtaXRlbSB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgfVxcblxcbiAgICAuY29udGFjdC1pdGVtOmxhc3Qtb2YtdHlwZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuNHZ3LCAxLjNyZW0pO1xcbiAgICB9XFxuXFxuICAgIHA6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjFyZW0sIDEuNXZ3LCAxLjRyZW0pO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODEzcHgpIHtcXG4gICAgLm1lbnUtaXRlbSB7XFxuICAgICAgICB3aWR0aDogOTB2dztcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG5cXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIGJ1dHRvbiB7XFxuICAgICAgICBwYWRkaW5nOiA2cHggMThweDtcXG4gICAgfVxcbiAgICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNvbnRhY3RJTUcgZnJvbSAnLi9pbWFnZXMvY29udGFjdC5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuICAgIGNvbnN0IGNvbnRhY3RUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0VG9wLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdG9wJyk7XG5cbiAgICBjb25zdCBjb250YWN0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb250YWN0SW1hZ2Uuc3JjID0gY29udGFjdElNRztcbiAgICBjb250YWN0SW1hZ2UuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbWFnZScpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gICAgY29udGFjdFRvcC5hcHBlbmRDaGlsZChjb250YWN0SW1hZ2UpO1xuICAgIGNvbnRhY3RUb3AuYXBwZW5kQ2hpbGQoaDEpO1xuXG5cbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRhaW5lcicpO1xuXG5cbiAgICBjb25zdCBhcnJheSA9IFt7XG4gICAgICAgICAgICB0aXRsZTogJ0FkZHJlc3MnLFxuICAgICAgICAgICAgc3RyZWV0OiAnMzAzIGZha2Ugc3RyZWV0JyxcbiAgICAgICAgICAgIGNpdHk6ICdTYW4gRGllZ28sIENBJyxcbiAgICAgICAgICAgIGFyZWFDb2RlOiAnOTIxMDEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnSG91cnMnLFxuICAgICAgICAgICAgdGltZW9uZTogJ01vbmRheSAtIFRodXJzZGF5OiAxMTozMCBhbSAtIDk6MzAgcG0nLFxuICAgICAgICAgICAgdGltZXR3bzogJ0ZyaWRheSAtIFNhdHVyZGF5OiAxMTozMCBhbSAtIDEwIHBtJyxcbiAgICAgICAgICAgIHRpbWV0aHJlZTogJ1N1bmRheTogMTIgcG0gLSA5IHBtJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0NvbnRhY3QgVXMnLFxuICAgICAgICAgICAgcGhvbmU6ICdQaG9uZTogKDEyMykgNDU2LTc4OTAnLFxuICAgICAgICAgICAgZW1haWw6ICdFbWFpbDogZ29sZGVua29pc3VzaGlAZXhhbXBsZS5jb20nXG4gICAgICAgIH1cbiAgICBdXG4gICAgYXJyYXkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaXRlbScpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGVsZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IGVsZVtrZXldO1xuICAgICAgICAgICAgY29udGFjdEl0ZW0uYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RJdGVtKTtcbiAgICB9KTtcblxuXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0VG9wKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuICAgIHJldHVybiBjb250YWN0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoMy50ZXh0Q29udGVudCA9ICdHb2xkZW4gS29pIFN1c2hpJztcblxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay50ZXh0Q29udGVudCA9ICdKYXBhbiBpY29ucyBjcmVhdGVkIGJ5IEZyZWVwaWsgLSBGbGF0aWNvbic7XG4gICAgbGluay5ocmVmID0gJ2h0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2phcGFuJztcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChoMyk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIHJldHVybiBmb290ZXJcbn0iLCJpbXBvcnQgSWNvbiBmcm9tICcuL2ltYWdlcy9pY29uLnBuZyc7XG5pbXBvcnQgeyBzd2l0Y2hQYWdlcywgaWNvblN3aXRjaCB9IGZyb20gJy4vaW5kZXgnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBteUljb24uc3JjID0gSWNvbjtcbiAgICBteUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpY29uU3dpdGNoKTtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XG4gICAgYnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbnMnKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoUGFnZXMpO1xuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB9KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobXlJY29uKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIHJldHVybiBoZWFkZXJcbn0iLCJpbXBvcnQgaG9tZUlNRyBmcm9tICcuL2ltYWdlcy9ob21lLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxhbmRpbmdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGxhbmRpbmdJbWFnZS5zcmMgPSBob21lSU1HO1xuICAgIGxhbmRpbmdJbWFnZS5jbGFzc0xpc3QuYWRkKCdsYW5kaW5nLWltYWdlJyk7XG5cbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnR29sZGVuIEtvaSBTdXNoaSc7XG5cblxuICAgIGNvbnN0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtY29udGFpbmVyJyk7XG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoMSk7XG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsYW5kaW5nSW1hZ2UpXG5cbiAgICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWNvbnRhaW5lcicpXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLnRleHRDb250ZW50ID0gJ0Fib3V0JztcbiAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChoMik7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS4nO1xuICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHApO1xuXG5cbiAgICBob21lLmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xuICAgIHJldHVybiBob21lO1xufSIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuXG5leHBvcnQgY29uc3Qgc3dpdGNoUGFnZXMgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNlY29uZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gOmZpcnN0LWNoaWxkJyk7XG4gICAgY29uc3QgaXRlbSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIGlmIChpdGVtID09PSAnTWVudScpIHtcbiAgICAgICAgc2Vjb25kLnJlbW92ZSgpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG4gICAgfSBlbHNlIGlmIChpdGVtID09PSAnSG9tZScpIHtcbiAgICAgICAgc2Vjb25kLnJlbW92ZSgpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2Vjb25kLnJlbW92ZSgpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgaWNvblN3aXRjaCA9ICgpID0+IHtcbiAgICBjb25zdCBzZWNvbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluIDpmaXJzdC1jaGlsZCcpO1xuICAgIHNlY29uZC5yZW1vdmUoKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG5cbmNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xubWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpOyIsImltcG9ydCBtZW51SU1HIGZyb20gJy4vaW1hZ2VzL21lbnUuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBtZW51VG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVRvcC5jbGFzc0xpc3QuYWRkKCdtZW51LXRvcCcpO1xuXG4gICAgY29uc3QgbWVudUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgbWVudUltYWdlLnNyYyA9IG1lbnVJTUc7XG4gICAgbWVudUltYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIG1lbnVUb3AuYXBwZW5kQ2hpbGQobWVudUltYWdlKTtcbiAgICBtZW51VG9wLmFwcGVuZENoaWxkKGgxKTtcblxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBhcnJheSA9IFt7XG4gICAgICAgICAgICBudW1iZXI6IDEsXG4gICAgICAgICAgICBuYW1lOiAnQ3VjdW1iZXIgUm9sbCcsXG4gICAgICAgICAgICBjb250ZW50czogJ0N1Y3VtYmVyIGFuZCBhdm9jYWRvJyxcbiAgICAgICAgICAgIHByaWNlOiAnJDUuMDAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMixcbiAgICAgICAgICAgIG5hbWU6ICdTd2VldCBQb3RhdG8gUm9sbCcsXG4gICAgICAgICAgICBjb250ZW50czogJ1N3ZWV0IFBvdGF0byBhbmQgYXZvY2FkbycsXG4gICAgICAgICAgICBwcmljZTogJyQ1LjAwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDMsXG4gICAgICAgICAgICBuYW1lOiAnQ2FsaWZvcm5pYSBSb2xsJyxcbiAgICAgICAgICAgIGNvbnRlbnRzOiAnQ3JhYiBtZWF0LCBjdWN1bWJlciwgYW5kIGF2b2NhZG8nLFxuICAgICAgICAgICAgcHJpY2U6ICckNi4wMCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiA0LFxuICAgICAgICAgICAgbmFtZTogJ0Jvc3RvbiBSb2xsJyxcbiAgICAgICAgICAgIGNvbnRlbnRzOiAnU2hyaW1wLCBjdWN1bWJlciwgYW5kIGF2b2NhZG8nLFxuICAgICAgICAgICAgcHJpY2U6ICckNi4wMCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiA1LFxuICAgICAgICAgICAgbmFtZTogJ1BoaWxhZGVscGhpYSBSb2xsKicsXG4gICAgICAgICAgICBjb250ZW50czogJ1NhbG1vbiwgYXZvY2FkbywgYW5kIGNyZWFtIGNoZWVzZScsXG4gICAgICAgICAgICBwcmljZTogJyQ2LjAwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDYsXG4gICAgICAgICAgICBuYW1lOiAnU3BpZGVyIFJvbGwnLFxuICAgICAgICAgICAgY29udGVudHM6ICdUZW1wdXJhIHNvZnQtc2hlbGwgY3JhYiwgY3VjdW1iZXIsIGF2b2NhZG8sIGFuZCBzcGljeSBtYXlvJyxcbiAgICAgICAgICAgIHByaWNlOiAnJDguMDAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogNyxcbiAgICAgICAgICAgIG5hbWU6ICdEcmFnb24gUm9sbCcsXG4gICAgICAgICAgICBjb250ZW50czogJ0VlbCwgY3VjdW1iZXIsIGNyYWIgc3RpY2tzLCBlZWwgc2F1Y2UsIGFuZCBhdm9jYWRvJyxcbiAgICAgICAgICAgIHByaWNlOiAnJDguMDAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogOCxcbiAgICAgICAgICAgIG5hbWU6ICdSYWluYm93IFJvbGwqJyxcbiAgICAgICAgICAgIGNvbnRlbnRzOiAnU2FsbW9uLCBjdWN1bWJlciwgc3BpY3kgbWF5bywgY3JhYiwgYXZvY2FkbywgYW5kIHRvYmlrbycsXG4gICAgICAgICAgICBwcmljZTogJyQ4LjAwJ1xuICAgICAgICB9XG4gICAgXVxuXG4gICAgYXJyYXkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGVsZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IGVsZVtrZXldO1xuICAgICAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIH0pO1xuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICB9KTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudVRvcCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgICByZXR1cm4gbWVudTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvcmVzdGF1cmFudC1wYWdlL1wiOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9