"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar PostCard = function(param) {\n    var post = param.post;\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-md-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: post.imageURL,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\NextJS\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Workspace\\\\NextJS\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n                    lineNumber: 7,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-body\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Workspace\\\\NextJS\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n                            lineNumber: 11,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: post.content\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Workspace\\\\NextJS\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n                            lineNumber: 12,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Workspace\\\\NextJS\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Workspace\\\\NextJS\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Workspace\\\\NextJS\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, _this);\n};\n_c = PostCard;\nvar Blog = function() {\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        footer: false,\n        title: \"My Blog\",\n        dark: true,\n        children: _profile__WEBPACK_IMPORTED_MODULE_2__.posts.map(function(post, i) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostCard, {\n                post: post\n            }, i, false, {\n                fileName: \"D:\\\\Workspace\\\\NextJS\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Workspace\\\\NextJS\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n        lineNumber: 19,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c, _c1;\n$RefreshReg$(_c, \"PostCard\");\n$RefreshReg$(_c1, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUM7QUFDUDs7QUFFbEMsR0FBSyxDQUFDRSxRQUFRLEdBQUcsUUFBUTtRQUFOQyxJQUFJLFNBQUpBLElBQUk7a0JBQ3JCLE1BQU0sK0RBQUxDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVU7OEZBQ3RCRCxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFNOzs0RkFDbEJELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFVOzBHQUN0QkMsQ0FBRzt3QkFBQ0MsR0FBRyxFQUFFSixJQUFJLENBQUNLLFFBQVE7d0JBQUVDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7Ozs7Ozs0RkFFaENMLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFXOztvR0FDdkJLLENBQUU7c0NBQUVQLElBQUksQ0FBQ1EsS0FBSzs7Ozs7O29HQUNkQyxDQUFDO3NDQUFFVCxJQUFJLENBQUNVLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVJsQlgsUUFBUTtBQWNkLEdBQUssQ0FBQ1ksSUFBSSxHQUFHLFFBQVE7a0JBQ25CLE1BQU0sK0RBQUxkLDBEQUFNO1FBQUNlLE1BQU0sRUFBRSxLQUFLO1FBQUVKLEtBQUssRUFBQyxDQUFTO1FBQUNLLElBQUk7a0JBRXZDZiwrQ0FBUyxDQUFDLFFBQVEsQ0FBUEUsSUFBSSxFQUFFZSxDQUFDOzBCQUNoQixNQUFNLCtEQUFMaEIsUUFBUTtnQkFBQ0MsSUFBSSxFQUFFQSxJQUFJO2VBQU9lLENBQUM7Ozs7Ozs7Ozs7OztNQUo5QkosSUFBSTtBQVVWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcz9jYmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHBvc3RzIH0gZnJvbSBcIi4uL3Byb2ZpbGVcIjtcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHtwb3N0fSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93XCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3Bvc3QuaW1hZ2VVUkx9IGFsdD1cIlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgIDxwPntwb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5jb25zdCBCbG9nID0gKCkgPT4gKFxyXG4gIDxMYXlvdXQgZm9vdGVyPXtmYWxzZX0gdGl0bGU9J015IEJsb2cnIGRhcms+XHJcbiAgICB7XHJcbiAgICAgIHBvc3RzLm1hcCgocG9zdCwgaSkgPT4gKFxyXG4gICAgICAgIDxQb3N0Q2FyZCBwb3N0PXtwb3N0fSBrZXk9e2l9IC8+XHJcbiAgICAgICkpXHJcbiAgICB9XHJcbiAgPC9MYXlvdXQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwicG9zdHMiLCJQb3N0Q2FyZCIsInBvc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZVVSTCIsImFsdCIsImgxIiwidGl0bGUiLCJwIiwiY29udGVudCIsIkJsb2ciLCJmb290ZXIiLCJkYXJrIiwibWFwIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

});