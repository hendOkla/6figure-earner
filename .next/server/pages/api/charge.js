"use strict";
(() => {
var exports = {};
exports.id = 6234;
exports.ids = [6234];
exports.modules = {

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 1362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const stripe = __webpack_require__(8174)("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");
async function handler(req, res) {
    const { amount, name, id } = req.body;
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            description: name,
            payment_method: id,
            confirm: true
        });
        return res.status(200).json({
            success: true,
            amount: amount,
            plan: name
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            error: error.message,
            amount: amount,
            plan: name
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1362));
module.exports = __webpack_exports__;

})();