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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #fff;\n  color: #333;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 1.5;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\n.container {\n  min-height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nmain {\n  flex-grow: 1;\n}\n\nheader,\nmain,\nfooter {\n  flex-shrink: 0;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n}\nheader img {\n  width: clamp(50px, 6vw, 70px);\n  height: clamp(50px, 6vw, 70px);\n}\nheader img:hover {\n  cursor: pointer;\n}\nheader button {\n  margin-top: 15px;\n  font-size: clamp(0.9rem, 3.2vw, 1.4rem);\n  font-weight: 500;\n  color: #333;\n  background-color: #fff;\n  border: none;\n  padding: 10px 30px;\n  cursor: pointer;\n}\nheader button:hover {\n  color: #d31414;\n}\n\n.active {\n  color: red;\n}\n\n.home-container {\n  position: relative;\n  text-align: center;\n  object-fit: cover;\n}\n.home-container img {\n  width: 100%;\n  max-height: 750px;\n  object-fit: cover;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.home-container h1 {\n  font-size: clamp(3.3rem, 7.8vw, 7rem);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -70%);\n  text-shadow: 2px 3px 4px #1a1a1a;\n  color: #eee;\n  font-weight: 900;\n}\n\n.about-container {\n  width: clamp(45ch, 65vw, 100ch);\n  padding: 1rem;\n  margin-left: max(1rem, 15vw);\n  margin-top: calc(1.3rem + 5vw);\n  margin-bottom: calc(1.3rem + 5vw);\n}\n.about-container h2 {\n  font-size: clamp(2rem, 4vw, 3rem);\n}\n.about-container p {\n  margin-top: -30px;\n  font-size: clamp(1rem, 2vw, 1.3rem);\n}\n\nfooter {\n  background-color: #222;\n  color: #fff;\n  text-align: center;\n  width: 100;\n  text-align: center;\n  bottom: 0;\n  padding: 3px;\n}\nfooter a {\n  color: #fff;\n  text-decoration: none;\n}\nfooter a:hover {\n  font-weight: 700;\n}\n\n.menu img {\n  width: 100%;\n  max-height: 300px;\n  object-fit: cover;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.menu h1 {\n  text-align: center;\n  font-size: clamp(2rem, 5vw, 3rem);\n}\n\n.menu-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(clamp(390px, 43vw, 900px), 1fr));\n  gap: calc(0.4rem + 1vw);\n  margin-bottom: 10rem;\n  padding-right: 4rem;\n}\n\n.menu-item {\n  background-color: #FFF;\n  display: flex;\n  flex-direction: column;\n  margin-left: max(1rem, 5vw);\n  padding: 1rem;\n  border-radius: 8px;\n  box-shadow: rgba(184, 189, 192, 0.2) 0px 8px 24px;\n  width: clamp(390px, 43vw, 900px);\n  border-left: 10px solid #fab649;\n}\n.menu-item p {\n  margin-top: -12px;\n}\n.menu-item p:nth-of-type(1) {\n  color: red;\n  font-weight: 700;\n}\n.menu-item p:nth-of-type(2) {\n  font-size: clamp(1.1rem, 1.5vw, 1.4rem);\n  font-weight: 700;\n}\n.menu-item p:nth-of-type(3) {\n  font-size: clamp(0.9rem, 1.3vw, 1.2rem);\n  font-weight: 300;\n  margin-top: -22px;\n}\n.menu-item p:nth-of-type(4) {\n  font-size: clamp(1rem, 1vw, 1.2rem);\n  font-weight: bold;\n}\n\n.contact img {\n  width: 100%;\n  max-height: 450px;\n  object-fit: cover;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.contact h1 {\n  text-align: center;\n  font-size: clamp(2rem, 5vw, 3rem);\n}\n\n.contact-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.contact-container .contact-item {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.contact-container .contact-item:last-of-type {\n  margin-bottom: 2rem;\n}\n.contact-container p {\n  margin-top: -10px;\n  font-size: clamp(1rem, 1.4vw, 1.3rem);\n}\n.contact-container p:nth-of-type(1) {\n  font-size: clamp(1.1rem, 1.5vw, 1.4rem);\n  font-weight: 700;\n}\n\n@media (max-width: 858px) {\n  .menu-item {\n    width: 90vw;\n  }\n}\n@media (max-width: 650px) {\n  .about-container {\n    margin-top: -10px;\n    margin-left: 5px;\n    margin-right: 5px;\n    width: 95%;\n  }\n\n  header button {\n    padding: 6px 18px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;;;EAGI,sBAAA;AAAJ;;AAcA;EACI,sBAZQ;EAaR,WAZO;EAaP,iCANM;EAON,gBAAA;EAEA,SAAA;EACA,UAAA;AAZJ;;AAiBA;;EAEI,WAAA;EACA,YAAA;AAdJ;;AAiBA;EACI,gBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;AAdJ;;AAkBA;EACI,YAAA;AAfJ;;AAkBA;;;EAGI,cAAA;AAfJ;;AAoBA;EACI,aAAA;EACA,8BAAA;EACA,aAAA;AAjBJ;AAmBI;EACI,6BAAA;EACA,8BAAA;AAjBR;AAoBI;EACI,eAAA;AAlBR;AAqBI;EACI,gBAAA;EACA,uCAAA;EACA,gBAAA;EACA,WAlEG;EAmEH,sBApEI;EAsEJ,YAAA;EAEA,kBAAA;EACA,eAAA;AArBR;AAwBI;EAEI,cA3EQ;AAoDhB;;AA2BA;EACI,UAAA;AAxBJ;;AA6BA;EACI,kBAAA;EACA,kBAAA;EACA,iBAAA;AA1BJ;AA4BI;EACI,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,iDAAA;AA1BR;AA6BI;EACI,qCAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,gCAAA;EACA,WAAA;EACA,gBAAA;AA3BR;;AA+BA;EACI,+BAAA;EACA,aAAA;EACA,4BAAA;EACA,8BAAA;EACA,iCAAA;AA5BJ;AA8BI;EACI,iCAAA;AA5BR;AA+BI;EACI,iBAAA;EACA,mCAAA;AA7BR;;AAmCA;EACI,sBAAA;EACA,WArIQ;EAsIR,kBAAA;EACA,UAAA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;AAhCJ;AAkCI;EACI,WA7II;EA8IJ,qBAAA;AAhCR;AAmCI;EACI,gBAAA;AAjCR;;AAyCI;EACI,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,iDAAA;AAtCR;AAyCI;EACI,kBAAA;EACA,iCAAA;AAvCR;;AA6CA;EACI,aAAA;EACA,+EAAA;EACA,uBAAA;EACA,oBAAA;EACA,mBAAA;AA1CJ;;AA6CA;EACI,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,aAAA;EACA,kBAAA;EACA,iDAAA;EACA,gCAlBQ;EAmBR,+BAAA;AA1CJ;AA4CI;EACI,iBAAA;AA1CR;AA6CI;EACI,UAAA;EACA,gBAAA;AA3CR;AA8CI;EACI,uCAAA;EACA,gBAAA;AA5CR;AA+CI;EACI,uCAAA;EACA,gBAAA;EACA,iBAAA;AA7CR;AAgDI;EACI,mCAAA;EACA,iBAAA;AA9CR;;AAqDI;EACI,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,iDAAA;AAlDR;AAqDI;EACI,kBAAA;EACA,iCAAA;AAnDR;;AAuDA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AApDJ;AAsDI;EACI,gBAAA;EACA,mBAAA;AApDR;AAuDI;EACI,mBAAA;AArDR;AAwDI;EACI,iBAAA;EACA,qCAAA;AAtDR;AAyDI;EACI,uCAAA;EACA,gBAAA;AAvDR;;AA2DA;EACI;IACI,WAAA;EAxDN;AACF;AA2DA;EAEI;IACI,iBAAA;IACA,gBAAA;IACA,iBAAA;IACA,UAAA;EA1DN;;EA6DE;IACI,iBAAA;EA1DN;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400&display=swap');\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n$clr-light: #fff;\n$clr-dark: #333;\n$clr-primary: #fab649;\n$clr-secondary: #d31414;\n$clr-accent: #e5e5e5;\n\n$ff-title: 'Merriweather',\nserif;\n$ff-body: 'Roboto',\nsans-serif;\n\nbody {\n    background-color: $clr-light;\n    color: $clr-dark;\n    font-family: $ff-body;\n    line-height: 1.5;\n\n    margin: 0;\n    padding: 0;\n}\n\n//layout\n\nhtml,\nbody {\n    width: 100%;\n    height: 100%;\n}\n\n.container {\n    min-height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    //   \n}\n\nmain {\n    flex-grow: 1;\n}\n\nheader,\nmain,\nfooter {\n    flex-shrink: 0;\n}\n\n//header \n\nheader {\n    display: flex;\n    justify-content: space-between;\n    padding: 1rem;\n\n    img {\n        width: clamp(50px, 6vw, 70px);\n        height: clamp(50px, 6vw, 70px);\n    }\n\n    img:hover {\n        cursor: pointer;\n    }\n\n    button {\n        margin-top: 15px;\n        font-size: clamp(0.9rem, 3.2vw, 1.4rem);\n        font-weight: 500;\n        color: $clr-dark;\n        background-color: $clr-light;\n\n        border: none;\n\n        padding: 10px 30px;\n        cursor: pointer;\n    }\n\n    button:hover {\n        //    background-color: $clr-accent;\n        color: $clr-secondary;\n    }\n}\n\n.active {\n    color: red;\n}\n\n//home \n\n.home-container {\n    position: relative;\n    text-align: center;\n    object-fit: cover;\n\n    img {\n        width: 100%;\n        max-height: 750px;\n        object-fit: cover;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    }\n\n    h1 {\n        font-size: clamp(3.3rem, 7.8vw, 7rem);\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -70%);\n        text-shadow: 2px 3px 4px #1a1a1a;\n        color: #eee;\n        font-weight: 900;\n    }\n}\n\n.about-container {\n    width: clamp(45ch, 65vw, 100ch);\n    padding: 1rem;\n    margin-left: max(1rem, 15vw);\n    margin-top: calc(1.3rem + 5vw);\n    margin-bottom: calc(1.3rem + 5vw);\n\n    h2 {\n        font-size: clamp(2rem, 4vw, 3rem);\n    }\n\n    p {\n        margin-top: -30px;\n        font-size: clamp(1rem, 2vw, 1.3rem);\n    }\n}\n\n//footer \n\nfooter {\n    background-color: #222;\n    color: $clr-light;\n    text-align: center;\n    width: 100;\n    text-align: center;\n    bottom: 0;\n    padding: 3px;\n\n    a {\n        color: $clr-light;\n        text-decoration: none;\n    }\n\n    a:hover {\n        font-weight: 700;\n    }\n}\n\n\n//menu \n\n.menu {\n    img {\n        width: 100%;\n        max-height: 300px;\n        object-fit: cover;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    }\n\n    h1 {\n        text-align: center;\n        font-size: clamp(2rem, 5vw, 3rem);\n    }\n}\n\n$cardwidth: clamp(390px, 43vw, 900px);\n\n.menu-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax($cardwidth, 1fr));\n    gap: calc(0.4rem + 1vw);\n    margin-bottom: 10rem;\n    padding-right: 4rem;\n}\n\n.menu-item {\n    background-color: #FFF;\n    display: flex;\n    flex-direction: column;\n    margin-left: max(1rem, 5vw);\n    padding: 1rem;\n    border-radius: 8px;\n    box-shadow: rgba(184, 189, 192, 0.2) 0px 8px 24px;\n    width: $cardwidth;\n    border-left: 10px solid $clr-primary;\n\n    p {\n        margin-top: -12px;\n    }\n\n    p:nth-of-type(1) {\n        color: red;\n        font-weight: 700;\n    }\n\n    p:nth-of-type(2) {\n        font-size: clamp(1.1rem, 1.5vw, 1.4rem);\n        font-weight: 700;\n    }\n\n    p:nth-of-type(3) {\n        font-size: clamp(0.9rem, 1.3vw, 1.2rem);\n        font-weight: 300;\n        margin-top: -22px;\n    }\n\n    p:nth-of-type(4) {\n        font-size: clamp(1rem, 1vw, 1.2rem);\n        font-weight: bold;\n    }\n}\n\n//contact \n\n.contact {\n    img {\n        width: 100%;\n        max-height: 450px;\n        object-fit: cover;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    }\n\n    h1 {\n        text-align: center;\n        font-size: clamp(2rem, 5vw, 3rem);\n    }\n}\n\n.contact-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n\n    .contact-item {\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n    }\n\n    .contact-item:last-of-type {\n        margin-bottom: 2rem;\n    }\n\n    p {\n        margin-top: -10px;\n        font-size: clamp(1rem, 1.4vw, 1.3rem);\n    }\n\n    p:nth-of-type(1) {\n        font-size: clamp(1.1rem, 1.5vw, 1.4rem);\n        font-weight: 700;\n    }\n}\n\n@media (max-width: 858px) {\n    .menu-item {\n        width: 90vw;\n    }\n}\n\n@media (max-width: 650px) {\n\n    .about-container {\n        margin-top: -10px;\n        margin-left: 5px;\n        margin-right: 5px;\n        width: 95%;\n    }\n\n    header button {\n        padding: 6px 18px;\n    }\n    \n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlcjppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSw0MDAmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSw0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuaGVhZGVyLFxcbm1haW4sXFxuZm9vdGVyIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbmhlYWRlciBpbWcge1xcbiAgd2lkdGg6IGNsYW1wKDUwcHgsIDZ2dywgNzBweCk7XFxuICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDZ2dywgNzBweCk7XFxufVxcbmhlYWRlciBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5oZWFkZXIgYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBmb250LXNpemU6IGNsYW1wKDAuOXJlbSwgMy4ydncsIDEuNHJlbSk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICMzMzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZDMxNDE0O1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5ob21lLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLmhvbWUtY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDc1MHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbn1cXG4uaG9tZS1jb250YWluZXIgaDEge1xcbiAgZm9udC1zaXplOiBjbGFtcCgzLjNyZW0sIDcuOHZ3LCA3cmVtKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTcwJSk7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDNweCA0cHggIzFhMWExYTtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmFib3V0LWNvbnRhaW5lciB7XFxuICB3aWR0aDogY2xhbXAoNDVjaCwgNjV2dywgMTAwY2gpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiBtYXgoMXJlbSwgMTV2dyk7XFxuICBtYXJnaW4tdG9wOiBjYWxjKDEuM3JlbSArIDV2dyk7XFxuICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuM3JlbSArIDV2dyk7XFxufVxcbi5hYm91dC1jb250YWluZXIgaDIge1xcbiAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA0dncsIDNyZW0pO1xcbn1cXG4uYWJvdXQtY29udGFpbmVyIHAge1xcbiAgbWFyZ2luLXRvcDogLTMwcHg7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMS4zcmVtKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3R0b206IDA7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcbmZvb3RlciBhIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5mb290ZXIgYTpob3ZlciB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubWVudSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG59XFxuLm1lbnUgaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA1dncsIDNyZW0pO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoY2xhbXAoMzkwcHgsIDQzdncsIDkwMHB4KSwgMWZyKSk7XFxuICBnYXA6IGNhbGMoMC40cmVtICsgMXZ3KTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xcbiAgcGFkZGluZy1yaWdodDogNHJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tbGVmdDogbWF4KDFyZW0sIDV2dyk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgxODQsIDE4OSwgMTkyLCAwLjIpIDBweCA4cHggMjRweDtcXG4gIHdpZHRoOiBjbGFtcCgzOTBweCwgNDN2dywgOTAwcHgpO1xcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2ZhYjY0OTtcXG59XFxuLm1lbnUtaXRlbSBwIHtcXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xcbn1cXG4ubWVudS1pdGVtIHA6bnRoLW9mLXR5cGUoMSkge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5tZW51LWl0ZW0gcDpudGgtb2YtdHlwZSgyKSB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuMXJlbSwgMS41dncsIDEuNHJlbSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubWVudS1pdGVtIHA6bnRoLW9mLXR5cGUoMykge1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjlyZW0sIDEuM3Z3LCAxLjJyZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIG1hcmdpbi10b3A6IC0yMnB4O1xcbn1cXG4ubWVudS1pdGVtIHA6bnRoLW9mLXR5cGUoNCkge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDEuMnJlbSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRhY3QgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogNDUwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxufVxcbi5jb250YWN0IGgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNXZ3LCAzcmVtKTtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNvbnRhY3QtY29udGFpbmVyIC5jb250YWN0LWl0ZW0ge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5jb250YWN0LWNvbnRhaW5lciAuY29udGFjdC1pdGVtOmxhc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4uY29udGFjdC1jb250YWluZXIgcCB7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS40dncsIDEuM3JlbSk7XFxufVxcbi5jb250YWN0LWNvbnRhaW5lciBwOm50aC1vZi10eXBlKDEpIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4xcmVtLCAxLjV2dywgMS40cmVtKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NThweCkge1xcbiAgLm1lbnUtaXRlbSB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIC5hYm91dC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxuXFxuICBoZWFkZXIgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNnB4IDE4cHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHSSxzQkFBQTtBQUFKOztBQWNBO0VBQ0ksc0JBWlE7RUFhUixXQVpPO0VBYVAsaUNBTk07RUFPTixnQkFBQTtFQUVBLFNBQUE7RUFDQSxVQUFBO0FBWko7O0FBaUJBOztFQUVJLFdBQUE7RUFDQSxZQUFBO0FBZEo7O0FBaUJBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBZEo7O0FBa0JBO0VBQ0ksWUFBQTtBQWZKOztBQWtCQTs7O0VBR0ksY0FBQTtBQWZKOztBQW9CQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFqQko7QUFtQkk7RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0FBakJSO0FBb0JJO0VBQ0ksZUFBQTtBQWxCUjtBQXFCSTtFQUNJLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBbEVHO0VBbUVILHNCQXBFSTtFQXNFSixZQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0FBckJSO0FBd0JJO0VBRUksY0EzRVE7QUFvRGhCOztBQTJCQTtFQUNJLFVBQUE7QUF4Qko7O0FBNkJBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBMUJKO0FBNEJJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtBQTFCUjtBQTZCSTtFQUNJLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUEzQlI7O0FBK0JBO0VBQ0ksK0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FBNUJKO0FBOEJJO0VBQ0ksaUNBQUE7QUE1QlI7QUErQkk7RUFDSSxpQkFBQTtFQUNBLG1DQUFBO0FBN0JSOztBQW1DQTtFQUNJLHNCQUFBO0VBQ0EsV0FySVE7RUFzSVIsa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQWhDSjtBQWtDSTtFQUNJLFdBN0lJO0VBOElKLHFCQUFBO0FBaENSO0FBbUNJO0VBQ0ksZ0JBQUE7QUFqQ1I7O0FBeUNJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtBQXRDUjtBQXlDSTtFQUNJLGtCQUFBO0VBQ0EsaUNBQUE7QUF2Q1I7O0FBNkNBO0VBQ0ksYUFBQTtFQUNBLCtFQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBMUNKOztBQTZDQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLGdDQWxCUTtFQW1CUiwrQkFBQTtBQTFDSjtBQTRDSTtFQUNJLGlCQUFBO0FBMUNSO0FBNkNJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBM0NSO0FBOENJO0VBQ0ksdUNBQUE7RUFDQSxnQkFBQTtBQTVDUjtBQStDSTtFQUNJLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQTdDUjtBQWdESTtFQUNJLG1DQUFBO0VBQ0EsaUJBQUE7QUE5Q1I7O0FBcURJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtBQWxEUjtBQXFESTtFQUNJLGtCQUFBO0VBQ0EsaUNBQUE7QUFuRFI7O0FBdURBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXBESjtBQXNESTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFwRFI7QUF1REk7RUFDSSxtQkFBQTtBQXJEUjtBQXdESTtFQUNJLGlCQUFBO0VBQ0EscUNBQUE7QUF0RFI7QUF5REk7RUFDSSx1Q0FBQTtFQUNBLGdCQUFBO0FBdkRSOztBQTJEQTtFQUNJO0lBQ0ksV0FBQTtFQXhETjtBQUNGO0FBMkRBO0VBRUk7SUFDSSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxVQUFBO0VBMUROOztFQTZERTtJQUNJLGlCQUFBO0VBMUROO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWVycml3ZWF0aGVyOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDQwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiRjbHItbGlnaHQ6ICNmZmY7XFxuJGNsci1kYXJrOiAjMzMzO1xcbiRjbHItcHJpbWFyeTogI2ZhYjY0OTtcXG4kY2xyLXNlY29uZGFyeTogI2QzMTQxNDtcXG4kY2xyLWFjY2VudDogI2U1ZTVlNTtcXG5cXG4kZmYtdGl0bGU6ICdNZXJyaXdlYXRoZXInLFxcbnNlcmlmO1xcbiRmZi1ib2R5OiAnUm9ib3RvJyxcXG5zYW5zLXNlcmlmO1xcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWxpZ2h0O1xcbiAgICBjb2xvcjogJGNsci1kYXJrO1xcbiAgICBmb250LWZhbWlseTogJGZmLWJvZHk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLy9sYXlvdXRcXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8vICAgXFxufVxcblxcbm1haW4ge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbmhlYWRlcixcXG5tYWluLFxcbmZvb3RlciB7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4vL2hlYWRlciBcXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuXFxuICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogY2xhbXAoNTBweCwgNnZ3LCA3MHB4KTtcXG4gICAgICAgIGhlaWdodDogY2xhbXAoNTBweCwgNnZ3LCA3MHB4KTtcXG4gICAgfVxcblxcbiAgICBpbWc6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjlyZW0sIDMuMnZ3LCAxLjRyZW0pO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgIGNvbG9yOiAkY2xyLWRhcms7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWxpZ2h0O1xcblxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcblxcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAvLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWFjY2VudDtcXG4gICAgICAgIGNvbG9yOiAkY2xyLXNlY29uZGFyeTtcXG4gICAgfVxcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLy9ob21lIFxcblxcbi5ob21lLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG5cXG4gICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LWhlaWdodDogNzUwcHg7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxuICAgIH1cXG5cXG4gICAgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgzLjNyZW0sIDcuOHZ3LCA3cmVtKTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTcwJSk7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDNweCA0cHggIzFhMWExYTtcXG4gICAgICAgIGNvbG9yOiAjZWVlO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgfVxcbn1cXG5cXG4uYWJvdXQtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IGNsYW1wKDQ1Y2gsIDY1dncsIDEwMGNoKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IG1heCgxcmVtLCAxNXZ3KTtcXG4gICAgbWFyZ2luLXRvcDogY2FsYygxLjNyZW0gKyA1dncpO1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuM3JlbSArIDV2dyk7XFxuXFxuICAgIGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNHZ3LCAzcmVtKTtcXG4gICAgfVxcblxcbiAgICBwIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDEuM3JlbSk7XFxuICAgIH1cXG59XFxuXFxuLy9mb290ZXIgXFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXG4gICAgY29sb3I6ICRjbHItbGlnaHQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDNweDtcXG5cXG4gICAgYSB7XFxuICAgICAgICBjb2xvcjogJGNsci1saWdodDtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgfVxcblxcbiAgICBhOmhvdmVyIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIH1cXG59XFxuXFxuXFxuLy9tZW51IFxcblxcbi5tZW51IHtcXG4gICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxuICAgIH1cXG5cXG4gICAgaDEge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA1dncsIDNyZW0pO1xcbiAgICB9XFxufVxcblxcbiRjYXJkd2lkdGg6IGNsYW1wKDM5MHB4LCA0M3Z3LCA5MDBweCk7XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgkY2FyZHdpZHRoLCAxZnIpKTtcXG4gICAgZ2FwOiBjYWxjKDAuNHJlbSArIDF2dyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IG1heCgxcmVtLCA1dncpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMTg0LCAxODksIDE5MiwgMC4yKSAwcHggOHB4IDI0cHg7XFxuICAgIHdpZHRoOiAkY2FyZHdpZHRoO1xcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAkY2xyLXByaW1hcnk7XFxuXFxuICAgIHAge1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTEycHg7XFxuICAgIH1cXG5cXG4gICAgcDpudGgtb2YtdHlwZSgxKSB7XFxuICAgICAgICBjb2xvcjogcmVkO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgfVxcblxcbiAgICBwOm50aC1vZi10eXBlKDIpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4xcmVtLCAxLjV2dywgMS40cmVtKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIH1cXG5cXG4gICAgcDpudGgtb2YtdHlwZSgzKSB7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuOXJlbSwgMS4zdncsIDEuMnJlbSk7XFxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTIycHg7XFxuICAgIH1cXG5cXG4gICAgcDpudGgtb2YtdHlwZSg0KSB7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMS4ycmVtKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxufVxcblxcbi8vY29udGFjdCBcXG5cXG4uY29udGFjdCB7XFxuICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbiAgICB9XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNXZ3LCAzcmVtKTtcXG4gICAgfVxcbn1cXG5cXG4uY29udGFjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIC5jb250YWN0LWl0ZW0ge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhY3QtaXRlbTpsYXN0LW9mLXR5cGUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgfVxcblxcbiAgICBwIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjR2dywgMS4zcmVtKTtcXG4gICAgfVxcblxcbiAgICBwOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4xcmVtLCAxLjV2dywgMS40cmVtKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg1OHB4KSB7XFxuICAgIC5tZW51LWl0ZW0ge1xcbiAgICAgICAgd2lkdGg6IDkwdnc7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuXFxuICAgIC5hYm91dC1jb250YWluZXIge1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciBidXR0b24ge1xcbiAgICAgICAgcGFkZGluZzogNnB4IDE4cHg7XFxuICAgIH1cXG4gICAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjb250YWN0SU1HIGZyb20gJy4vaW1hZ2VzL2NvbnRhY3QuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgICBjb25zdCBjb250YWN0VG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdFRvcC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRvcCcpO1xuXG4gICAgY29uc3QgY29udGFjdEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgY29udGFjdEltYWdlLnNyYyA9IGNvbnRhY3RJTUc7XG4gICAgY29udGFjdEltYWdlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW1hZ2UnKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICAgIGNvbnRhY3RUb3AuYXBwZW5kQ2hpbGQoY29udGFjdEltYWdlKTtcbiAgICBjb250YWN0VG9wLmFwcGVuZENoaWxkKGgxKTtcblxuXG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jb250YWluZXInKTtcblxuXG4gICAgY29uc3QgYXJyYXkgPSBbe1xuICAgICAgICAgICAgdGl0bGU6ICdBZGRyZXNzJyxcbiAgICAgICAgICAgIHN0cmVldDogJzMwMyBmYWtlIHN0cmVldCcsXG4gICAgICAgICAgICBjaXR5OiAnU2FuIERpZWdvLCBDQScsXG4gICAgICAgICAgICBhcmVhQ29kZTogJzkyMTAxJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0hvdXJzJyxcbiAgICAgICAgICAgIHRpbWVvbmU6ICdNb25kYXkgLSBUaHVyc2RheTogMTE6MzAgYW0gLSA5OjMwIHBtJyxcbiAgICAgICAgICAgIHRpbWV0d286ICdGcmlkYXkgLSBTYXR1cmRheTogMTE6MzAgYW0gLSAxMCBwbScsXG4gICAgICAgICAgICB0aW1ldGhyZWU6ICdTdW5kYXk6IDEyIHBtIC0gOSBwbSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdDb250YWN0IFVzJyxcbiAgICAgICAgICAgIHBob25lOiAnUGhvbmU6ICgxMjMpIDQ1Ni03ODkwJyxcbiAgICAgICAgICAgIGVtYWlsOiAnRW1haWw6IGdvbGRlbmtvaXN1c2hpQGV4YW1wbGUuY29tJ1xuICAgICAgICB9XG4gICAgXVxuICAgIGFycmF5LmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWl0ZW0nKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhlbGUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBlbGVba2V5XTtcbiAgICAgICAgICAgIGNvbnRhY3RJdGVtLmFwcGVuZENoaWxkKHApO1xuICAgICAgICB9KTtcbiAgICAgICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SXRlbSk7XG4gICAgfSk7XG5cblxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRvcCk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcbiAgICByZXR1cm4gY29udGFjdDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSAnR29sZGVuIEtvaSBTdXNoaSc7XG5cbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSAnSmFwYW4gaWNvbnMgY3JlYXRlZCBieSBGcmVlcGlrIC0gRmxhdGljb24nO1xuICAgIGxpbmsuaHJlZiA9ICdodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9qYXBhbic7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICByZXR1cm4gZm9vdGVyXG59IiwiaW1wb3J0IEljb24gZnJvbSAnLi9pbWFnZXMvaWNvbi5wbmcnO1xuaW1wb3J0IHsgc3dpdGNoUGFnZXMsIGljb25Td2l0Y2ggfSBmcm9tICcuL2luZGV4JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbXlJY29uLnNyYyA9IEljb247XG4gICAgbXlJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaWNvblN3aXRjaCk7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCBidXR0b25zID0gWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddO1xuICAgIGJ1dHRvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b25zJyk7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFBhZ2VzKTtcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG15SWNvbik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICByZXR1cm4gaGVhZGVyXG59IiwiaW1wb3J0IGhvbWVJTUcgZnJvbSAnLi9pbWFnZXMvaG9tZS5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsYW5kaW5nSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBsYW5kaW5nSW1hZ2Uuc3JjID0gaG9tZUlNRztcbiAgICBsYW5kaW5nSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbGFuZGluZy1pbWFnZScpO1xuXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ0dvbGRlbiBLb2kgU3VzaGknO1xuXG5cbiAgICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRhaW5lcicpO1xuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobGFuZGluZ0ltYWdlKVxuXG4gICAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250YWluZXInKVxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdBYm91dCc7XG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uJztcbiAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChwKTtcblxuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChob21lQ29udGFpbmVyKTtcbiAgICBob21lLmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKTtcbiAgICByZXR1cm4gaG9tZTtcbn0iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cblxuZXhwb3J0IGNvbnN0IHN3aXRjaFBhZ2VzID0gKGUpID0+IHtcbiAgICBjb25zdCBzZWNvbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluIDpmaXJzdC1jaGlsZCcpO1xuICAgIGNvbnN0IGl0ZW0gPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBpZiAoaXRlbSA9PT0gJ01lbnUnKSB7XG4gICAgICAgIHNlY29uZC5yZW1vdmUoKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xuICAgIH0gZWxzZSBpZiAoaXRlbSA9PT0gJ0hvbWUnKSB7XG4gICAgICAgIHNlY29uZC5yZW1vdmUoKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNlY29uZC5yZW1vdmUoKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGljb25Td2l0Y2ggPSAoKSA9PiB7XG4gICAgY29uc3Qgc2Vjb25kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiA6Zmlyc3QtY2hpbGQnKTtcbiAgICBzZWNvbmQucmVtb3ZlKCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufVxuXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbm1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTsiLCJpbXBvcnQgbWVudUlNRyBmcm9tICcuL2ltYWdlcy9tZW51LmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgY29uc3QgbWVudVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVUb3AuY2xhc3NMaXN0LmFkZCgnbWVudS10b3AnKTtcblxuICAgIGNvbnN0IG1lbnVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIG1lbnVJbWFnZS5zcmMgPSBtZW51SU1HO1xuICAgIG1lbnVJbWFnZS5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBtZW51VG9wLmFwcGVuZENoaWxkKG1lbnVJbWFnZSk7XG4gICAgbWVudVRvcC5hcHBlbmRDaGlsZChoMSk7XG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYXJyYXkgPSBbe1xuICAgICAgICAgICAgbnVtYmVyOiAxLFxuICAgICAgICAgICAgbmFtZTogJ0N1Y3VtYmVyIFJvbGwnLFxuICAgICAgICAgICAgY29udGVudHM6ICdDdWN1bWJlciBhbmQgYXZvY2FkbycsXG4gICAgICAgICAgICBwcmljZTogJyQ1LjAwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDIsXG4gICAgICAgICAgICBuYW1lOiAnU3dlZXQgUG90YXRvIFJvbGwnLFxuICAgICAgICAgICAgY29udGVudHM6ICdTd2VldCBQb3RhdG8gYW5kIGF2b2NhZG8nLFxuICAgICAgICAgICAgcHJpY2U6ICckNS4wMCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAzLFxuICAgICAgICAgICAgbmFtZTogJ0NhbGlmb3JuaWEgUm9sbCcsXG4gICAgICAgICAgICBjb250ZW50czogJ0NyYWIgbWVhdCwgY3VjdW1iZXIsIGFuZCBhdm9jYWRvJyxcbiAgICAgICAgICAgIHByaWNlOiAnJDYuMDAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogNCxcbiAgICAgICAgICAgIG5hbWU6ICdCb3N0b24gUm9sbCcsXG4gICAgICAgICAgICBjb250ZW50czogJ1NocmltcCwgY3VjdW1iZXIsIGFuZCBhdm9jYWRvJyxcbiAgICAgICAgICAgIHByaWNlOiAnJDYuMDAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogNSxcbiAgICAgICAgICAgIG5hbWU6ICdQaGlsYWRlbHBoaWEgUm9sbConLFxuICAgICAgICAgICAgY29udGVudHM6ICdTYWxtb24sIGF2b2NhZG8sIGFuZCBjcmVhbSBjaGVlc2UnLFxuICAgICAgICAgICAgcHJpY2U6ICckNi4wMCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiA2LFxuICAgICAgICAgICAgbmFtZTogJ1NwaWRlciBSb2xsJyxcbiAgICAgICAgICAgIGNvbnRlbnRzOiAnVGVtcHVyYSBzb2Z0LXNoZWxsIGNyYWIsIGN1Y3VtYmVyLCBhdm9jYWRvLCBhbmQgc3BpY3kgbWF5bycsXG4gICAgICAgICAgICBwcmljZTogJyQ4LjAwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDcsXG4gICAgICAgICAgICBuYW1lOiAnRHJhZ29uIFJvbGwnLFxuICAgICAgICAgICAgY29udGVudHM6ICdFZWwsIGN1Y3VtYmVyLCBjcmFiIHN0aWNrcywgZWVsIHNhdWNlLCBhbmQgYXZvY2FkbycsXG4gICAgICAgICAgICBwcmljZTogJyQ4LjAwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDgsXG4gICAgICAgICAgICBuYW1lOiAnUmFpbmJvdyBSb2xsKicsXG4gICAgICAgICAgICBjb250ZW50czogJ1NhbG1vbiwgY3VjdW1iZXIsIHNwaWN5IG1heW8sIGNyYWIsIGF2b2NhZG8sIGFuZCB0b2Jpa28nLFxuICAgICAgICAgICAgcHJpY2U6ICckOC4wMCdcbiAgICAgICAgfVxuICAgIF1cblxuICAgIGFycmF5LmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhlbGUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBlbGVba2V5XTtcbiAgICAgICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHApO1xuICAgICAgICB9KTtcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gICAgfSk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVUb3ApO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gICAgcmV0dXJuIG1lbnU7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3Jlc3RhdXJhbnQtcGFnZS9cIjsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==