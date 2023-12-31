"use strict";
(() => {
var exports = {};
exports.id = 2091;
exports.ids = [2091];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 8216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

// EXTERNAL MODULE: external "nodemailer"
var external_nodemailer_ = __webpack_require__(5184);
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_);
;// CONCATENATED MODULE: external "nodemailer-sendgrid-transport"
const external_nodemailer_sendgrid_transport_namespaceObject = require("nodemailer-sendgrid-transport");
var external_nodemailer_sendgrid_transport_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_sendgrid_transport_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/contact.js


const transporter = {
    auth: {
        // Update your SendGrid API key here
        api_key: "..."
    }
};
const mailer = external_nodemailer_default().createTransport(external_nodemailer_sendgrid_transport_default()(transporter));
/* harmony default export */ const contact = (async (req, res)=>{
    // console.log(req.body)
    const { name, email, number, subject, text } = req.body;
    const data = {
        // Update your email here
        to: "exampleyourdomain@gmail.com",
        from: email,
        subject: "Hi there",
        text: text,
        html: `
        <b>From:</b> ${name} <br /> 
        <b>Number:</b> ${number} <br /> 
        <b>Subject:</b> ${subject} <br /> 
        <b>Message:</b> ${text} 
    `
    };
    try {
        const response = await mailer.sendMail(data);
        console.log(response);
        res.status(200).send("Email send successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error proccessing charge");
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8216));
module.exports = __webpack_exports__;

})();