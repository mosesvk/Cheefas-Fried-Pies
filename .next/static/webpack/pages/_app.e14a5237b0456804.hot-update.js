"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/StateContext.js":
/*!*********************************!*\
  !*** ./context/StateContext.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\nvar _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nconst Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nconst StateContext = ({\n  children\n}) => {\n  _s();\n\n  const [showCart, setShowCart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [totalQuantities, setTotalQuantities] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [qty, setQty] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n  let foundProduct;\n  let index;\n\n  const onAdd = (product, quantity) => {\n    const checkProductInCart = cartItems.find(item => item._id === product._id);\n    setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity);\n    setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity);\n\n    if (checkProductInCart) {\n      const updatedCartItems = cartItems.map(cartProduct => {\n        if (cartProduct._id === product._id) return { ...cartProduct,\n          quantity: cartProduct.quantity + quantity\n        };\n      });\n      setCartItems(updatedCartItems);\n    } else {\n      product.quantity = quantity;\n      setCartItems([...cartItems, { ...product\n      }]);\n    }\n\n    react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${qty} ${product.name} added to the cart.`);\n  };\n\n  const onRemove = product => {\n    foundProduct = cartItems.find(item => item._id === product._id);\n    const newCartItems = cartItems.filter(item => item._id !== product._id);\n    setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price * foundProduct.quantity);\n    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);\n    setCartItems(newCartItems);\n  };\n\n  const toggleCartItemQuanitity = (id, value) => {\n    foundProduct = cartItems.find(item => item._id === id);\n    index = cartItems.findIndex(product => product._id === id);\n    const newCartItems = cartItems.filter(item => item._id !== id);\n\n    if (value === 'inc') {\n      setCartItems([...newCartItems, { ...foundProduct,\n        quantity: foundProduct.quantity + 1\n      }]);\n      setTotalPrice(prevTotalPrice => prevTotalPrice + foundProduct.price);\n      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);\n    } else if (value === 'dec') {\n      if (foundProduct.quantity > 1) {\n        setCartItems([...newCartItems, { ...foundProduct,\n          quantity: foundProduct.quantity - 1\n        }]);\n        setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price);\n        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);\n      }\n    }\n  };\n\n  const incQty = () => {\n    setQty(prevQty => prevQty + 1);\n  };\n\n  const decQty = () => {\n    setQty(prevQty => {\n      if (prevQty - 1 < 1) return 1; //We cannot have a negative qty in the cart\n\n      return prevQty - 1;\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {\n    value: {\n      showCart,\n      setShowCart,\n      cartItems,\n      totalPrice,\n      totalQuantities,\n      qty,\n      incQty,\n      decQty,\n      onAdd,\n      toggleCartItemQuanitity,\n      onRemove,\n      setCartItems,\n      setTotalPrice,\n      setTotalQuantities\n    }\n  }, children);\n}; // This allows us to export our context and use it anywhere as a hook \n\n_s(StateContext, \"lTN9mPmtXpsm72zCYW+oCcRZHaw=\");\n\n_c = StateContext;\nconst useStateContext = () => {\n  _s2();\n\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);\n};\n\n_s2(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"StateContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxtQkFBbUIsR0FBRyxDQUE5QyxDQUFsQjtBQUNEO0FBQ0Y7QUFDRixHQWhCRDs7QUFrQkEsUUFBTWEsTUFBTSxHQUFHLE1BQU07QUFDbkJ6QixJQUFBQSxNQUFNLENBQUUwQixPQUFELElBQWFBLE9BQU8sR0FBRyxDQUF4QixDQUFOO0FBQ0QsR0FGRDs7QUFJQSxRQUFNQyxNQUFNLEdBQUcsTUFBTTtBQUNuQjNCLElBQUFBLE1BQU0sQ0FBRTBCLE9BQUQsSUFBYTtBQUNsQixVQUFHQSxPQUFPLEdBQUcsQ0FBVixHQUFjLENBQWpCLEVBQW9CLE9BQU8sQ0FBUCxDQURGLENBQ1k7O0FBRTlCLGFBQU9BLE9BQU8sR0FBRyxDQUFqQjtBQUNELEtBSkssQ0FBTjtBQUtELEdBTkQ7O0FBUUEsc0JBQ0UsMkRBQUMsT0FBRCxDQUFTLFFBQVQ7QUFDRSxTQUFLLEVBQUU7QUFDTG5DLE1BQUFBLFFBREs7QUFFTEMsTUFBQUEsV0FGSztBQUdMQyxNQUFBQSxTQUhLO0FBSUxFLE1BQUFBLFVBSks7QUFLTEUsTUFBQUEsZUFMSztBQU1MRSxNQUFBQSxHQU5LO0FBT0wwQixNQUFBQSxNQVBLO0FBUUxFLE1BQUFBLE1BUks7QUFTTHhCLE1BQUFBLEtBVEs7QUFVTGtCLE1BQUFBLHVCQVZLO0FBV0xILE1BQUFBLFFBWEs7QUFZTHhCLE1BQUFBLFlBWks7QUFhTEUsTUFBQUEsYUFiSztBQWNMRSxNQUFBQTtBQWRLO0FBRFQsS0FrQkdSLFFBbEJILENBREY7QUFzQkQsQ0EvRk0sRUFpR0w7O0dBakdXRDs7S0FBQUE7QUFrR04sTUFBTXVDLGVBQWUsR0FBRztBQUFBOztBQUFBLFNBQU01QyxpREFBVSxDQUFDSSxPQUFELENBQWhCO0FBQUEsQ0FBeEI7O0lBQU13QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1N0YXRlQ29udGV4dC5qcz9iMWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xuXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc2hvd0NhcnQsIHNldFNob3dDYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RvdGFsUHJpY2UsIHNldFRvdGFsUHJpY2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0b3RhbFF1YW50aXRpZXMsIHNldFRvdGFsUXVhbnRpdGllc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3F0eSwgc2V0UXR5XSA9IHVzZVN0YXRlKDEpO1xuIFxuICBsZXQgZm91bmRQcm9kdWN0O1xuICBsZXQgaW5kZXg7XG5cbiAgY29uc3Qgb25BZGQgPSAocHJvZHVjdCwgcXVhbnRpdHkpID0+IHtcbiAgICBjb25zdCBjaGVja1Byb2R1Y3RJbkNhcnQgPSBjYXJ0SXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQgPT09IHByb2R1Y3QuX2lkKTtcbiAgICBcbiAgICBzZXRUb3RhbFByaWNlKChwcmV2VG90YWxQcmljZSkgPT4gcHJldlRvdGFsUHJpY2UgKyBwcm9kdWN0LnByaWNlICogcXVhbnRpdHkpO1xuICAgIHNldFRvdGFsUXVhbnRpdGllcygocHJldlRvdGFsUXVhbnRpdGllcykgPT4gcHJldlRvdGFsUXVhbnRpdGllcyArIHF1YW50aXR5KTtcbiAgICBcbiAgICBpZihjaGVja1Byb2R1Y3RJbkNhcnQpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDYXJ0SXRlbXMgPSBjYXJ0SXRlbXMubWFwKChjYXJ0UHJvZHVjdCkgPT4ge1xuICAgICAgICBpZihjYXJ0UHJvZHVjdC5faWQgPT09IHByb2R1Y3QuX2lkKSByZXR1cm4ge1xuICAgICAgICAgIC4uLmNhcnRQcm9kdWN0LFxuICAgICAgICAgIHF1YW50aXR5OiBjYXJ0UHJvZHVjdC5xdWFudGl0eSArIHF1YW50aXR5XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHNldENhcnRJdGVtcyh1cGRhdGVkQ2FydEl0ZW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvZHVjdC5xdWFudGl0eSA9IHF1YW50aXR5O1xuICAgICAgXG4gICAgICBzZXRDYXJ0SXRlbXMoWy4uLmNhcnRJdGVtcywgeyAuLi5wcm9kdWN0IH1dKTtcbiAgICB9XG5cbiAgICB0b2FzdC5zdWNjZXNzKGAke3F0eX0gJHtwcm9kdWN0Lm5hbWV9IGFkZGVkIHRvIHRoZSBjYXJ0LmApO1xuICB9IFxuXG4gIGNvbnN0IG9uUmVtb3ZlID0gKHByb2R1Y3QpID0+IHtcbiAgICBmb3VuZFByb2R1Y3QgPSBjYXJ0SXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQgPT09IHByb2R1Y3QuX2lkKTtcbiAgICBjb25zdCBuZXdDYXJ0SXRlbXMgPSBjYXJ0SXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLl9pZCAhPT0gcHJvZHVjdC5faWQpO1xuXG4gICAgc2V0VG90YWxQcmljZSgocHJldlRvdGFsUHJpY2UpID0+IHByZXZUb3RhbFByaWNlIC1mb3VuZFByb2R1Y3QucHJpY2UgKiBmb3VuZFByb2R1Y3QucXVhbnRpdHkpO1xuICAgIHNldFRvdGFsUXVhbnRpdGllcyhwcmV2VG90YWxRdWFudGl0aWVzID0+IHByZXZUb3RhbFF1YW50aXRpZXMgLSBmb3VuZFByb2R1Y3QucXVhbnRpdHkpO1xuICAgIHNldENhcnRJdGVtcyhuZXdDYXJ0SXRlbXMpO1xuICB9XG5cbiAgY29uc3QgdG9nZ2xlQ2FydEl0ZW1RdWFuaXRpdHkgPSAoaWQsIHZhbHVlKSA9PiB7XG4gICAgZm91bmRQcm9kdWN0ID0gY2FydEl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBpZClcbiAgICBpbmRleCA9IGNhcnRJdGVtcy5maW5kSW5kZXgoKHByb2R1Y3QpID0+IHByb2R1Y3QuX2lkID09PSBpZCk7XG4gICAgY29uc3QgbmV3Q2FydEl0ZW1zID0gY2FydEl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5faWQgIT09IGlkKVxuXG4gICAgaWYodmFsdWUgPT09ICdpbmMnKSB7XG4gICAgICBzZXRDYXJ0SXRlbXMoWy4uLm5ld0NhcnRJdGVtcywgeyAuLi5mb3VuZFByb2R1Y3QsIHF1YW50aXR5OiBmb3VuZFByb2R1Y3QucXVhbnRpdHkgKyAxIH0gXSk7XG4gICAgICBzZXRUb3RhbFByaWNlKChwcmV2VG90YWxQcmljZSkgPT4gcHJldlRvdGFsUHJpY2UgKyBmb3VuZFByb2R1Y3QucHJpY2UpXG4gICAgICBzZXRUb3RhbFF1YW50aXRpZXMocHJldlRvdGFsUXVhbnRpdGllcyA9PiBwcmV2VG90YWxRdWFudGl0aWVzICsgMSlcbiAgICB9IGVsc2UgaWYodmFsdWUgPT09ICdkZWMnKSB7XG4gICAgICBpZiAoZm91bmRQcm9kdWN0LnF1YW50aXR5ID4gMSkge1xuICAgICAgICBzZXRDYXJ0SXRlbXMoWy4uLm5ld0NhcnRJdGVtcywgeyAuLi5mb3VuZFByb2R1Y3QsIHF1YW50aXR5OiBmb3VuZFByb2R1Y3QucXVhbnRpdHkgLSAxIH0gXSk7XG4gICAgICAgIHNldFRvdGFsUHJpY2UoKHByZXZUb3RhbFByaWNlKSA9PiBwcmV2VG90YWxQcmljZSAtIGZvdW5kUHJvZHVjdC5wcmljZSlcbiAgICAgICAgc2V0VG90YWxRdWFudGl0aWVzKHByZXZUb3RhbFF1YW50aXRpZXMgPT4gcHJldlRvdGFsUXVhbnRpdGllcyAtIDEpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW5jUXR5ID0gKCkgPT4ge1xuICAgIHNldFF0eSgocHJldlF0eSkgPT4gcHJldlF0eSArIDEpO1xuICB9XG5cbiAgY29uc3QgZGVjUXR5ID0gKCkgPT4ge1xuICAgIHNldFF0eSgocHJldlF0eSkgPT4ge1xuICAgICAgaWYocHJldlF0eSAtIDEgPCAxKSByZXR1cm4gMTsgLy9XZSBjYW5ub3QgaGF2ZSBhIG5lZ2F0aXZlIHF0eSBpbiB0aGUgY2FydFxuXG4gICAgICByZXR1cm4gcHJldlF0eSAtIDE7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBzaG93Q2FydCxcbiAgICAgICAgc2V0U2hvd0NhcnQsXG4gICAgICAgIGNhcnRJdGVtcyxcbiAgICAgICAgdG90YWxQcmljZSxcbiAgICAgICAgdG90YWxRdWFudGl0aWVzLFxuICAgICAgICBxdHksXG4gICAgICAgIGluY1F0eSxcbiAgICAgICAgZGVjUXR5LFxuICAgICAgICBvbkFkZCxcbiAgICAgICAgdG9nZ2xlQ2FydEl0ZW1RdWFuaXRpdHksXG4gICAgICAgIG9uUmVtb3ZlLFxuICAgICAgICBzZXRDYXJ0SXRlbXMsXG4gICAgICAgIHNldFRvdGFsUHJpY2UsXG4gICAgICAgIHNldFRvdGFsUXVhbnRpdGllcyBcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufSBcblxuICAvLyBUaGlzIGFsbG93cyB1cyB0byBleHBvcnQgb3VyIGNvbnRleHQgYW5kIHVzZSBpdCBhbnl3aGVyZSBhcyBhIGhvb2sgXG5leHBvcnQgY29uc3QgdXNlU3RhdGVDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChDb250ZXh0KTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidG9hc3QiLCJDb250ZXh0IiwiU3RhdGVDb250ZXh0IiwiY2hpbGRyZW4iLCJzaG93Q2FydCIsInNldFNob3dDYXJ0IiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwidG90YWxQcmljZSIsInNldFRvdGFsUHJpY2UiLCJ0b3RhbFF1YW50aXRpZXMiLCJzZXRUb3RhbFF1YW50aXRpZXMiLCJxdHkiLCJzZXRRdHkiLCJmb3VuZFByb2R1Y3QiLCJpbmRleCIsIm9uQWRkIiwicHJvZHVjdCIsInF1YW50aXR5IiwiY2hlY2tQcm9kdWN0SW5DYXJ0IiwiZmluZCIsIml0ZW0iLCJfaWQiLCJwcmV2VG90YWxQcmljZSIsInByaWNlIiwicHJldlRvdGFsUXVhbnRpdGllcyIsInVwZGF0ZWRDYXJ0SXRlbXMiLCJtYXAiLCJjYXJ0UHJvZHVjdCIsInN1Y2Nlc3MiLCJuYW1lIiwib25SZW1vdmUiLCJuZXdDYXJ0SXRlbXMiLCJmaWx0ZXIiLCJ0b2dnbGVDYXJ0SXRlbVF1YW5pdGl0eSIsImlkIiwidmFsdWUiLCJmaW5kSW5kZXgiLCJpbmNRdHkiLCJwcmV2UXR5IiwiZGVjUXR5IiwidXNlU3RhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});