"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/stripe";
exports.ids = ["pages/api/stripe"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/stripe.js":
/*!*****************************!*\
  !*** ./pages/api/stripe.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\n\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    console.log(req.body.cartItems);\n\n    try {\n      const params = {\n        submit_type: 'pay',\n        mode: 'payment',\n        payment_method_types: ['card'],\n        billing_address_collection: 'auto',\n        shipping_options: [{\n          shipping_rate: 'shr_1LAw1lIGCSPHsNzaBjgmNeyL'\n        }, {\n          shipping_rate: 'shr_1LAw2XIGCSPHsNza2gs8b3F1'\n        }],\n        line_items: [{\n          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell\n          price: '{{PRICE_ID}}',\n          quantity: 1\n        }],\n        mode: 'payment',\n        success_url: `${req.headers.origin}/?success=true`,\n        cancel_url: `${req.headers.origin}/?canceled=true`\n      }; // Create Checkout Sessions from body params.\n\n      const session = await stripe.checkout.sessions.create(params);\n      res.redirect(303, session.url);\n    } catch (err) {\n      res.status(err.statusCode || 500).json(err.message);\n    }\n  } else {\n    res.setHeader('Allow', 'POST');\n    res.status(405).end('Method Not Allowed');\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RyaXBlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsc0JBQUQsQ0FBUCxDQUFrQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGlCQUE5QixDQUFmOztBQUVlLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM5QyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEdBQUcsQ0FBQ0ssSUFBSixDQUFTQyxTQUFyQjs7QUFDQSxRQUFJO0FBQ0YsWUFBTUMsTUFBTSxHQUFHO0FBQ2JDLFFBQUFBLFdBQVcsRUFBRSxLQURBO0FBRWJDLFFBQUFBLElBQUksRUFBRSxTQUZPO0FBR2JDLFFBQUFBLG9CQUFvQixFQUFFLENBQUMsTUFBRCxDQUhUO0FBSWJDLFFBQUFBLDBCQUEwQixFQUFFLE1BSmY7QUFLYkMsUUFBQUEsZ0JBQWdCLEVBQUUsQ0FDaEI7QUFBRUMsVUFBQUEsYUFBYSxFQUFFO0FBQWpCLFNBRGdCLEVBRWhCO0FBQUVBLFVBQUFBLGFBQWEsRUFBRTtBQUFqQixTQUZnQixDQUxMO0FBU2JDLFFBQUFBLFVBQVUsRUFBRSxDQUNWO0FBQ0U7QUFDQUMsVUFBQUEsS0FBSyxFQUFFLGNBRlQ7QUFHRUMsVUFBQUEsUUFBUSxFQUFFO0FBSFosU0FEVSxDQVRDO0FBZ0JiUCxRQUFBQSxJQUFJLEVBQUUsU0FoQk87QUFpQmJRLFFBQUFBLFdBQVcsRUFBRyxHQUFFakIsR0FBRyxDQUFDa0IsT0FBSixDQUFZQyxNQUFPLGdCQWpCdEI7QUFrQmJDLFFBQUFBLFVBQVUsRUFBRyxHQUFFcEIsR0FBRyxDQUFDa0IsT0FBSixDQUFZQyxNQUFPO0FBbEJyQixPQUFmLENBREUsQ0FxQkY7O0FBQ0EsWUFBTUUsT0FBTyxHQUFHLE1BQU0zQixNQUFNLENBQUM0QixRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsTUFBekIsQ0FBZ0NqQixNQUFoQyxDQUF0QjtBQUNBTixNQUFBQSxHQUFHLENBQUN3QixRQUFKLENBQWEsR0FBYixFQUFrQkosT0FBTyxDQUFDSyxHQUExQjtBQUNELEtBeEJELENBd0JFLE9BQU9DLEdBQVAsRUFBWTtBQUNaMUIsTUFBQUEsR0FBRyxDQUFDMkIsTUFBSixDQUFXRCxHQUFHLENBQUNFLFVBQUosSUFBa0IsR0FBN0IsRUFBa0NDLElBQWxDLENBQXVDSCxHQUFHLENBQUNJLE9BQTNDO0FBQ0Q7QUFDRixHQTdCRCxNQTZCTztBQUNMOUIsSUFBQUEsR0FBRyxDQUFDK0IsU0FBSixDQUFjLE9BQWQsRUFBdUIsTUFBdkI7QUFDQS9CLElBQUFBLEdBQUcsQ0FBQzJCLE1BQUosQ0FBVyxHQUFYLEVBQWdCSyxHQUFoQixDQUFvQixvQkFBcEI7QUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLy4vcGFnZXMvYXBpL3N0cmlwZS5qcz9kNzg4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoJ3N0cmlwZScpKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc29sZS5sb2cocmVxLmJvZHkuY2FydEl0ZW1zKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIHN1Ym1pdF90eXBlOiAncGF5JyxcbiAgICAgICAgbW9kZTogJ3BheW1lbnQnLFxuICAgICAgICBwYXltZW50X21ldGhvZF90eXBlczogWydjYXJkJ10sXG4gICAgICAgIGJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiAnYXV0bycsXG4gICAgICAgIHNoaXBwaW5nX29wdGlvbnM6IFtcbiAgICAgICAgICB7IHNoaXBwaW5nX3JhdGU6ICdzaHJfMUxBdzFsSUdDU1BIc056YUJqZ21OZXlMJ30sXG4gICAgICAgICAgeyBzaGlwcGluZ19yYXRlOiAnc2hyXzFMQXcyWElHQ1NQSHNOemEyZ3M4YjNGMSd9XG4gICAgICAgIF0sXG4gICAgICAgIGxpbmVfaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyBQcm92aWRlIHRoZSBleGFjdCBQcmljZSBJRCAoZm9yIGV4YW1wbGUsIHByXzEyMzQpIG9mIHRoZSBwcm9kdWN0IHlvdSB3YW50IHRvIHNlbGxcbiAgICAgICAgICAgIHByaWNlOiAne3tQUklDRV9JRH19JyxcbiAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG1vZGU6ICdwYXltZW50JyxcbiAgICAgICAgc3VjY2Vzc191cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vP3N1Y2Nlc3M9dHJ1ZWAsXG4gICAgICAgIGNhbmNlbF91cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vP2NhbmNlbGVkPXRydWVgLFxuICAgICAgfVxuICAgICAgLy8gQ3JlYXRlIENoZWNrb3V0IFNlc3Npb25zIGZyb20gYm9keSBwYXJhbXMuXG4gICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZShwYXJhbXMpO1xuICAgICAgcmVzLnJlZGlyZWN0KDMwMywgc2Vzc2lvbi51cmwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzQ29kZSB8fCA1MDApLmpzb24oZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsICdQT1NUJyk7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgnTWV0aG9kIE5vdCBBbGxvd2VkJyk7XG4gIH1cbn0iXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsImNhcnRJdGVtcyIsInBhcmFtcyIsInN1Ym1pdF90eXBlIiwibW9kZSIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwiYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb24iLCJzaGlwcGluZ19vcHRpb25zIiwic2hpcHBpbmdfcmF0ZSIsImxpbmVfaXRlbXMiLCJwcmljZSIsInF1YW50aXR5Iiwic3VjY2Vzc191cmwiLCJoZWFkZXJzIiwib3JpZ2luIiwiY2FuY2VsX3VybCIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwicmVkaXJlY3QiLCJ1cmwiLCJlcnIiLCJzdGF0dXMiLCJzdGF0dXNDb2RlIiwianNvbiIsIm1lc3NhZ2UiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/stripe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stripe.js"));
module.exports = __webpack_exports__;

})();