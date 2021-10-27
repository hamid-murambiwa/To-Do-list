/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: Arial, Helvetica, sans-serif;\\n  background-color: rgb(137, 137, 137);\\n}\\n\\n.info {\\n  color: red;\\n}\\n\\n#container {\\n  display: grid;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: auto;\\n}\\n\\n#CON {\\n  margin-top: 50px;\\n  box-shadow: 2px 2px 2px 5px grey;\\n  width: 700px;\\n}\\n\\n.over {\\n  background-color: red;\\n}\\n\\n.RB {\\n  border-style: none;\\n  background-color: transparent;\\n}\\n\\n.Rbutton {\\n  border-style: none;\\n  background-color: transparent;\\n  animation-name: hover-con;\\n  animation-duration: 2s;\\n  animation-fill-mode: both;\\n}\\n\\n@keyframes hover-con {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n\\n  100% {\\n    transform: rotate(180deg);\\n  }\\n}\\n\\n#add {\\n  height: auto;\\n  border-style: none;\\n  width: 75%;\\n  background-color: white;\\n  padding-left: 5px;\\n  font-size: 16px;\\n}\\n\\n#add:focus {\\n  outline: none !important;\\n  box-shadow: none !important;\\n  background-color: white;\\n}\\n\\n#resetBTN {\\n  width: 20px;\\n  height: 20px;\\n}\\n\\n#enterBTN {\\n  display: flex;\\n  justify-content: flex-end;\\n  border-style: none;\\n  background-color: transparent;\\n  cursor: pointer;\\n  width: 10%;\\n}\\n\\n#enterIcon {\\n  width: 15px;\\n  height: 15px;\\n}\\n\\n#list {\\n  display: none;\\n  flex-direction: column;\\n  align-items: flex-end;\\n  width: 100%;\\n  max-height: 200px;\\n  overflow-y: scroll;\\n}\\n\\n.Task {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  border-bottom: 1px solid grey;\\n  padding-left: 25px;\\n  width: 100%;\\n  height: 50px;\\n  background-color: white;\\n  cursor: pointer;\\n}\\n\\n#Con {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  border-bottom: 1px solid grey;\\n  width: 100%;\\n  height: 50px;\\n  padding-left: 25px;\\n  padding-right: 25px;\\n  background-color: white;\\n}\\n\\n#Con1 {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  border-bottom: 1px solid rgb(85, 85, 85);\\n  width: 100%;\\n  height: 50px;\\n}\\n\\n#clearBTN {\\n  height: 100%;\\n  width: 100%;\\n  border-style: none;\\n  font-size: 16px;\\n  color: rgb(79, 79, 79);\\n  cursor: pointer;\\n}\\n\\n#clearBTN:active {\\n  background-color: rgb(2, 248, 248);\\n  color: black;\\n}\\n\\n.optionsIcon {\\n  width: 15px;\\n  height: 15px;\\n}\\n\\n.optionsBTN {\\n  border-style: none;\\n  background-color: transparent;\\n}\\n\\n.CBC {\\n  display: flex;\\n  align-items: center;\\n  width: auto;\\n}\\n\\n.cBox {\\n  margin-right: 15px;\\n}\\n\\n.CB {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100%;\\n  height: 100%;\\n  padding-left: 15px;\\n  padding-right: 25px;\\n  border-style: none;\\n  background-color: white;\\n  cursor: pointer;\\n}\\n\\n.tasks {\\n  border-style: none;\\n  background-color: transparent;\\n  height: 40px;\\n  width: 100%;\\n}\\n\\n.tasks:focus {\\n  outline: none !important;\\n  box-shadow: none !important;\\n}\\n\\n@media (max-width: 700px) {\\n  #list {\\n    width: 250px;\\n  }\\n\\n  #Con {\\n    width: 250px;\\n  }\\n\\n  #Con1 {\\n    width: 250px;\\n  }\\n\\n  #add {\\n    width: 150px;\\n  }\\n\\n  .tasks {\\n    width: 100px;\\n  }\\n\\n  #clearBTN {\\n    width: 250px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ delTag)\n/* harmony export */ });\nfunction delTag() {\n  const del = document.createElement('del');\n  return del;\n}\n\n//# sourceURL=webpack://to-do-list/./src/event.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _enter_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enter.png */ \"./src/enter.png\");\n/* harmony import */ var _icons8_available_updates_96_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons8-available-updates-96.png */ \"./src/icons8-available-updates-96.png\");\n/* harmony import */ var _options_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options.png */ \"./src/options.png\");\n/* harmony import */ var _icons8_delete_64_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons8-delete-64.png */ \"./src/icons8-delete-64.png\");\n/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event.js */ \"./src/event.js\");\n\n\n\n\n\n\n\nclass TDL {\n  constructor() {\n    this.createTDL();\n    this.listOfItems = [];\n    this.checks = [];\n    this.id = [];\n    if (JSON.parse(localStorage.getItem('id') !== null)) {\n      this.id = JSON.parse(localStorage.getItem('id'));\n    }\n    if (JSON.parse(localStorage.getItem('checks') !== null)) {\n      this.checks = JSON.parse(localStorage.getItem('checks'));\n    }\n    if (localStorage.getItem('data-list') !== null) {\n      this.listOfItems = JSON.parse(localStorage.getItem('data-list'));\n    }\n  }\n\n  createTDL() {\n    const wrapper = document.createElement('section');\n    wrapper.id = 'container';\n    const container = document.createElement('div');\n    container.id = 'CON';\n    const firstCon = document.createElement('div');\n    firstCon.id = 'Con';\n    const heading = document.createElement('p');\n    heading.innerText = \"Today's To Do List\";\n    const resetButton = document.createElement('button');\n    resetButton.className = 'RB';\n    resetButton.addEventListener('click', () => {\n      resetButton.className = 'Rbutton';\n      this.id.forEach((id) => {\n        if (document.getElementById(id) !== null) {\n          document.getElementById(id).parentElement.remove();\n          const index = this.listOfItems.findIndex((list) => list.id === id);\n          this.listOfItems.splice(index, 1);\n\n          localStorage.setItem('data-list', JSON.stringify(this.listOfItems));\n        }\n      });\n      this.id = [];\n      localStorage.setItem('id', JSON.stringify(this.id));\n\n      this.checks = [];\n      localStorage.clear();\n    });\n    const resetIcon = document.createElement('img');\n    resetIcon.src = _icons8_available_updates_96_png__WEBPACK_IMPORTED_MODULE_2__;\n    resetIcon.id = 'resetBTN';\n    const secondCon = document.createElement('div');\n    secondCon.id = 'Con';\n    const form = document.createElement('form');\n    const input = document.createElement('input');\n    input.type = 'text';\n    input.placeholder = 'Add to your list...';\n    input.id = 'add';\n    input.addEventListener('keydown', (e) => {\n      if (e.keyCode === 13) {\n        e.preventDefault();\n        if (input.value !== this.listOfItems.id) {\n          resetButton.className = 'RB';\n          this.addTask();\n          form.reset();\n        }\n      }\n    });\n    const enterBTN = document.createElement('button');\n    enterBTN.id = 'enterBTN';\n    enterBTN.addEventListener('click', (e) => {\n      e.preventDefault();\n      resetButton.className = 'RB';\n      this.addTask();\n      form.reset();\n    });\n    const enterIcon = document.createElement('img');\n    enterIcon.src = _enter_png__WEBPACK_IMPORTED_MODULE_1__;\n    enterIcon.id = 'enterIcon';\n    const ul = document.createElement('ul');\n    ul.id = 'list';\n    const thirdCon = document.createElement('div');\n    thirdCon.id = 'Con1';\n    const clearBTN = document.createElement('button');\n    clearBTN.innerText = 'Clear all completed';\n    clearBTN.id = 'clearBTN';\n    clearBTN.addEventListener('click', () => {\n      this.clearAllCompleted();\n    });\n\n    enterBTN.appendChild(enterIcon);\n    firstCon.appendChild(heading);\n    resetButton.appendChild(resetIcon);\n    firstCon.appendChild(resetButton);\n    form.appendChild(input);\n    secondCon.appendChild(form);\n    secondCon.appendChild(enterBTN);\n    thirdCon.appendChild(clearBTN);\n    container.appendChild(firstCon);\n    container.appendChild(secondCon);\n    container.appendChild(ul);\n    container.appendChild(thirdCon);\n    wrapper.appendChild(container);\n    document.body.appendChild(wrapper);\n  }\n\n  addTask() {\n    const input = { task: document.getElementById('add').value };\n\n    const ul = document.getElementById('list');\n    ul.style.display = 'grid';\n    const li = document.createElement('li');\n    li.className = 'Task';\n    li.draggable = 'true';\n    const conBTN = document.createElement('button');\n    conBTN.className = 'CB';\n    conBTN.draggable = 'true';\n\n    const checkBoxCon = document.createElement('div');\n    checkBoxCon.className = 'CBC';\n    const checkBox = document.createElement('input');\n    checkBox.className = 'cBox';\n    checkBox.id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);\n    this.checkBox = checkBox.id;\n    checkBox.type = 'checkbox';\n\n    this.id.push(checkBox.id);\n    localStorage.setItem('id', JSON.stringify(this.id));\n    const label = document.createElement('input');\n    label.className = 'tasks';\n    label.value = input.task;\n    label.addEventListener('keydown', (event) => {\n      if (event.keyCode === 13) {\n        const index = this.listOfItems.findIndex((list) => list.task === input.task);\n        this.listOfItems.splice(index, 1);\n        const idCode = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);\n        checkBox.id = idCode;\n        const num = index;\n        this.listOfItems.push({\n          task: label.value,\n          completed: checkBox.checked,\n          index: num,\n          id: idCode,\n        });\n\n        localStorage.setItem('data-list', JSON.stringify(this.listOfItems));\n        this.id.splice(index, 1);\n        this.id.push(idCode);\n        localStorage.setItem('id', JSON.stringify(this.id));\n      }\n    });\n    checkBox.addEventListener('click', () => {\n      const del = (0,_event_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n      if (checkBox.checked) {\n        label.remove();\n        del.innerText = input.task;\n        checkBoxCon.appendChild(del);\n\n        let result = 0;\n        this.checks.forEach((check) => {\n          if (check === checkBox.id) {\n            result++;\n          }\n        });\n        if (result === 0) {\n          this.checks.push(checkBox.id);\n        }\n      } else {\n        this.checks.pop();\n        checkBoxCon.removeChild(checkBoxCon.childNodes[0]);\n        checkBoxCon.appendChild(label);\n      }\n    });\n    const optionsBTN = document.createElement('button');\n    optionsBTN.className = 'optionsBTN';\n\n    const optionsIcon = document.createElement('img');\n    optionsIcon.className = 'optionsIcon';\n    optionsIcon.src = _options_png__WEBPACK_IMPORTED_MODULE_3__;\n\n    conBTN.addEventListener('click', () => {\n      optionsIcon.src = _icons8_delete_64_png__WEBPACK_IMPORTED_MODULE_4__;\n      conBTN.style.backgroundColor = 'rgba(0, 151, 151, 0.631)';\n\n      optionsBTN.addEventListener('click', () => {\n        conBTN.parentElement.remove();\n        const index = this.listOfItems.findIndex((list) => list.id === checkBox.id);\n        this.listOfItems.splice(index, 1);\n\n        localStorage.setItem('data-list', JSON.stringify(this.listOfItems));\n\n        const indexID = this.id.findIndex((id) => id === checkBox.id);\n        this.id.splice(indexID, 1);\n\n        localStorage.setItem('id', JSON.stringify(this.id));\n\n        const checksID = this.checks.findIndex((check) => check === checkBox.id);\n        this.checks.splice(checksID, 1);\n      });\n    });\n\n    optionsBTN.appendChild(optionsIcon);\n    checkBoxCon.appendChild(label);\n    conBTN.appendChild(checkBoxCon);\n    conBTN.appendChild(optionsBTN);\n    li.appendChild(checkBox);\n    li.appendChild(conBTN);\n\n    ul.appendChild(li);\n\n    this.listOfItems.push({\n      task: input.task,\n      completed: 'false',\n      index: this.listOfItems.length,\n      id: checkBox.id,\n    });\n\n    checkBox.addEventListener('change', () => {\n      if (checkBox.checked) {\n        this.checks.push(checkBox.id);\n        const index = this.listOfItems.findIndex((item) => item.id === checkBox.id);\n\n        this.listOfItems[index].completed = true;\n        localStorage.setItem('data-list', JSON.stringify(this.listOfItems));\n      } else {\n        const index = this.listOfItems.findIndex((item) => item.id === checkBox.id);\n        this.listOfItems[index].completed = false;\n        localStorage.setItem('data-list', JSON.stringify(this.listOfItems));\n      }\n    });\n\n    localStorage.setItem('data-list', JSON.stringify(this.listOfItems));\n  }\n\n  displayTask() {\n    this.listOfItems.sort((a, b) => a.index < b.index);\n    this.listOfItems.forEach((listOfItems, index012) => {\n      const ul = document.getElementById('list');\n      ul.style.display = 'flex';\n      const li = document.createElement('li');\n      li.className = 'Task';\n      li.setAttribute('data-index', index012);\n      const conBTN = document.createElement('button');\n      conBTN.className = 'CB';\n      conBTN.draggable = 'true';\n\n      const checkBoxCon = document.createElement('div');\n      checkBoxCon.className = 'CBC';\n      const checkBox = document.createElement('input');\n      checkBox.className = 'cBox';\n      checkBox.id = listOfItems.id;\n      checkBox.type = 'checkbox';\n      listOfItems.completed = false;\n      checkBox.checked = false;\n      localStorage.setItem('data-list', JSON.stringify(this.listOfItems));\n      checkBox.addEventListener('click', () => {\n        if (checkBox.checked) {\n          this.checks.push(checkBox.id);\n          listOfItems.completed = true;\n          localStorage.setItem('data-list', JSON.stringify(this.listOfItems));\n        } else {\n          listOfItems.completed = false;\n          localStorage.setItem('data-list', JSON.stringify(this.listOfItems));\n        }\n      });\n      const label = document.createElement('input');\n      label.className = 'tasks';\n      label.value = listOfItems.task;\n      const taskInCon = listOfItems.task;\n      label.addEventListener('keyup', (event) => {\n        if (event.keyCode === 13) {\n          const index = this.listOfItems.findIndex((list) => list.task === taskInCon);\n          this.listOfItems.splice(index, 1);\n\n          const idCode = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);\n          checkBox.id = idCode;\n          const labelValue = label.value;\n          const num = index;\n          this.listOfItems.unshift({\n            task: labelValue,\n            completed: false,\n            index: num,\n            id: idCode,\n          });\n\n          localStorage.setItem('data-list', JSON.stringify(this.listOfItems));\n          this.id.splice(index, 1);\n          this.id.push(idCode);\n          localStorage.setItem('id', JSON.stringify(this.id));\n        }\n      });\n      const optionsBTN = document.createElement('button');\n      optionsBTN.className = 'optionsBTN';\n      optionsBTN.addEventListener('click', () => {\n      });\n      checkBox.addEventListener('change', () => {\n        const del = (0,_event_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n        if (checkBox.checked) {\n          label.remove();\n          del.innerText = listOfItems.task;\n          checkBoxCon.appendChild(del);\n          let result = 0;\n          this.checks.forEach((check) => {\n            if (check === checkBox.id) {\n              result++;\n            }\n          });\n          if (result === 0) {\n            this.checks.push(checkBox.id);\n          }\n        } else {\n          this.checks.pop();\n          checkBoxCon.removeChild(checkBoxCon.childNodes[0]);\n          checkBoxCon.appendChild(label);\n        }\n      });\n      const optionsIcon = document.createElement('img');\n      optionsIcon.className = 'optionsIcon';\n      optionsIcon.src = _options_png__WEBPACK_IMPORTED_MODULE_3__;\n\n      conBTN.addEventListener('click', () => {\n        optionsIcon.src = _icons8_delete_64_png__WEBPACK_IMPORTED_MODULE_4__;\n        conBTN.style.backgroundColor = 'rgba(0, 151, 151, 0.631)';\n        optionsBTN.addEventListener('click', () => {\n          conBTN.parentElement.remove();\n          const index = this.listOfItems.findIndex((list) => list.id === checkBox.id);\n          this.listOfItems.splice(index, 1);\n\n          localStorage.setItem('data-list', JSON.stringify(this.listOfItems));\n\n          const indexID = this.id.findIndex((id) => id === checkBox.id);\n          this.id.splice(indexID, 1);\n\n          localStorage.setItem('id', JSON.stringify(this.id));\n\n          const checksID = this.checks.findIndex((check) => check === checkBox.id);\n          this.checks.splice(checksID, 1);\n        });\n      });\n\n      optionsBTN.appendChild(optionsIcon);\n      checkBoxCon.appendChild(label);\n      conBTN.appendChild(checkBoxCon);\n      conBTN.appendChild(optionsBTN);\n      li.appendChild(checkBox);\n      li.appendChild(conBTN);\n      ul.appendChild(li);\n    });\n  }\n\n  clearAllCompleted() {\n    let id = [];\n\n    for (let i = 0; i < this.listOfItems.length; i++) {\n      if (this.listOfItems[i].completed === true) {\n        id.push(this.listOfItems[i].id);\n        document.getElementById(this.listOfItems[i].id).parentElement.remove();\n      }\n    }\n\n    for (let i = 0; i < id.length; i++) {\n      const index = this.listOfItems.findIndex((obj) => obj.id === id[i]);\n      this.listOfItems.splice(index, 1);\n      localStorage.setItem('data-list', JSON.stringify(this.listOfItems));\n\n      const indexID = this.id.findIndex((obj) => obj === id[i]);\n      this.id.splice(indexID, 1);\n      localStorage.setItem('id', JSON.stringify(this.id));\n    }\n    id = [];\n  }\n}\n\nconst tdl = new TDL();\ntdl.displayTask();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/enter.png":
/*!***********************!*\
  !*** ./src/enter.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a1aaef4eeec6c445002d.png\";\n\n//# sourceURL=webpack://to-do-list/./src/enter.png?");

/***/ }),

/***/ "./src/icons8-available-updates-96.png":
/*!*********************************************!*\
  !*** ./src/icons8-available-updates-96.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cda5118c06eb3731fc59.png\";\n\n//# sourceURL=webpack://to-do-list/./src/icons8-available-updates-96.png?");

/***/ }),

/***/ "./src/icons8-delete-64.png":
/*!**********************************!*\
  !*** ./src/icons8-delete-64.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f71a85ae00878686d455.png\";\n\n//# sourceURL=webpack://to-do-list/./src/icons8-delete-64.png?");

/***/ }),

/***/ "./src/options.png":
/*!*************************!*\
  !*** ./src/options.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4f742a6a698fe36e57db.png\";\n\n//# sourceURL=webpack://to-do-list/./src/options.png?");

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
/******/ 		__webpack_require__.p = "/To-Do-list/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;