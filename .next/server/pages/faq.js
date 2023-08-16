"use strict";
(() => {
var exports = {};
exports.id = 7746;
exports.ids = [7746];
exports.modules = {

/***/ 1160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Ffaq_absolutePagePath_private_next_pages_2Ffaq_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/faq.js
var faq_namespaceObject = {};
__webpack_require__.r(faq_namespaceObject);
__webpack_require__.d(faq_namespaceObject, {
  "default": () => (faq)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/_App/Navbar.js
var Navbar = __webpack_require__(3827);
// EXTERNAL MODULE: ./components/_App/Footer.js
var Footer = __webpack_require__(5171);
// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__(8915);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(271);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "sweetalert2-react-content"
var external_sweetalert2_react_content_ = __webpack_require__(3810);
var external_sweetalert2_react_content_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_react_content_);
;// CONCATENATED MODULE: ./utils/baseUrl.js
const baseUrl =  true ? "https://startp-react.envytheme.com" : 0;
/* harmony default export */ const utils_baseUrl = (baseUrl);

;// CONCATENATED MODULE: ./components/FAQ/ContactForm.js






const MySwal = external_sweetalert2_react_content_default()((external_sweetalert2_default()));

const alertContent = ()=>{
    MySwal.fire({
        title: "Congratulations!",
        text: "Your message was successfully send and will back to you soon",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
    });
};
// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};
const ContactForm = ()=>{
    const [contact, setContact] = (0,external_react_.useState)(INITIAL_STATE);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setContact((prevState)=>({
                ...prevState,
                [name]: value
            }));
    // console.log(contact)
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const url = `${utils_baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = {
                name,
                email,
                number,
                subject,
                text
            };
            const response = await external_axios_default().post(url, payload);
            console.log(response);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "faq-contact",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                    children: "Ask Your Question"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("form", {
                    onSubmit: handleSubmit,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "col-lg-6 col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "text",
                                        name: "name",
                                        placeholder: "Your Name",
                                        className: "form-control",
                                        value: contact.name,
                                        onChange: handleChange,
                                        required: true
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "col-lg-6 col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "text",
                                        name: "email",
                                        placeholder: "Your email address",
                                        className: "form-control",
                                        value: contact.email,
                                        onChange: handleChange,
                                        required: true
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "col-lg-6 col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "text",
                                        name: "number",
                                        placeholder: "Your phone number",
                                        className: "form-control",
                                        value: contact.number,
                                        onChange: handleChange,
                                        required: true
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "col-lg-6 col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "text",
                                        name: "subject",
                                        placeholder: "Your Subject",
                                        className: "form-control",
                                        value: contact.subject,
                                        onChange: handleChange,
                                        required: true
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-lg-12 col-md-12",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                            name: "text",
                                            cols: "30",
                                            rows: "6",
                                            placeholder: "Write your message...",
                                            className: "form-control",
                                            value: contact.text,
                                            onChange: handleChange,
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "form-check",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                className: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                id: "flexCheckDefault"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                className: "form-check-label",
                                                htmlFor: "flexCheckDefault",
                                                children: [
                                                    "By checking this, you agree to our ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                        href: "/term-condition",
                                                        children: "Terms"
                                                    }),
                                                    " and ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                        href: "/privacy-policy",
                                                        children: "Privacy policy"
                                                    }),
                                                    "."
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "col-lg-12 col-sm-12 text-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                    type: "submit",
                                    className: "btn btn-primary",
                                    children: "Send Message"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const FAQ_ContactForm = (ContactForm);

// EXTERNAL MODULE: external "react-accessible-accordion"
var external_react_accessible_accordion_ = __webpack_require__(3282);
;// CONCATENATED MODULE: ./pages/faq.js







const FAQ = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Navbar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PageBanner/* default */.Z, {
                pageTitle: "FAQ"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "faq-area ptb-80",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "faq-accordion",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_accessible_accordion_.Accordion, {
                                preExpanded: [
                                    "a"
                                ],
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_accessible_accordion_.AccordionItem, {
                                        uuid: "a",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemHeading, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemButton, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "How do permissions work in Google Play Instant?"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemPanel, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_accessible_accordion_.AccordionItem, {
                                        uuid: "b",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemHeading, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemButton, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "Is Smart Lock required for instant apps?"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemPanel, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_accessible_accordion_.AccordionItem, {
                                        uuid: "c",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemHeading, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemButton, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "Can I have multiple activities in a single feature?"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemPanel, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_accessible_accordion_.AccordionItem, {
                                        uuid: "d",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemHeading, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemButton, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "Can I share resources between features?"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemPanel, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_accessible_accordion_.AccordionItem, {
                                        uuid: "e",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemHeading, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemButton, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "Is multidex supported for instant apps?"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemPanel, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_accessible_accordion_.AccordionItem, {
                                        uuid: "f",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemHeading, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemButton, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "Can I share resources between features?"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_accessible_accordion_.AccordionItemPanel, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(FAQ_ContactForm, {})
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const faq = (FAQ);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Ffaq&absolutePagePath=private-next-pages%2Ffaq.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Ffaq_absolutePagePath_private_next_pages_2Ffaq_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(faq_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(faq_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(faq_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(faq_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(faq_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(faq_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(faq_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(faq_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(faq_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(faq_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(faq_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/faq","pathname":"/faq","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: faq_namespaceObject })
        
        
    

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3282:
/***/ ((module) => {

module.exports = require("react-accessible-accordion");

/***/ }),

/***/ 9101:
/***/ ((module) => {

module.exports = require("react-feather");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 271:
/***/ ((module) => {

module.exports = require("sweetalert2");

/***/ }),

/***/ 3810:
/***/ ((module) => {

module.exports = require("sweetalert2-react-content");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3722,5893,1664,8968,8915], () => (__webpack_exec__(1160)));
module.exports = __webpack_exports__;

})();