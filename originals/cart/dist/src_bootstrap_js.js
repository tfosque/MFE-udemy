"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcart"] = self["webpackChunkcart"] || []).push([["src_bootstrap_js"],{

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"webpack/sharing/consume/default/faker/faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet cart = `<div>You have ${faker__WEBPACK_IMPORTED_MODULE_0___default().random.number()} items in your cart </div>`;\nconsole.log({ cart });\ndocument.querySelector(\"#dev-cart-main\").innerHTML = cart;\ndocument\n  .querySelector(\"#dev-cart-main\")\n  .insertAdjacentHTML(\"beforebegin\", \"<h3>Cart:</h3>\");\n\n\n//# sourceURL=webpack://cart/./src/bootstrap.js?");

/***/ })

}]);