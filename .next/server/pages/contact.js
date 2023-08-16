"use strict";
(() => {
var exports = {};
exports.id = 9335;
exports.ids = [9335];
exports.modules = {

/***/ 4800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fcontact_absolutePagePath_private_next_pages_2Fcontact_js_preferredRegion_middlewareConfig_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/contact.js
var contact_namespaceObject = {};
__webpack_require__.r(contact_namespaceObject);
__webpack_require__.d(contact_namespaceObject, {
  "default": () => (contact)
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
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/_App/Navbar.js
var Navbar = __webpack_require__(3827);
// EXTERNAL MODULE: ./components/_App/Footer.js
var Footer = __webpack_require__(5171);
// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__(8915);
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(9101);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./getDictionary.js
var getDictionary = __webpack_require__(2474);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Contact/ContactInfo.js






const ContactInfo = ()=>{
    const router = (0,router_.useRouter)();
    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = (0,external_react_.useState)(null);
    const [contactList, setContactList] = (0,external_react_.useState)([]);
    external_react_default().useEffect(()=>{
        setContactList([]);
        fetchContactList();
        //for translation 
        async function fetchTranslations() {
            const translations = await (0,getDictionary/* getDictionary */.R)(locale);
            setTranslations(translations);
        }
        fetchTranslations();
    }, []);
    function fetchContactList() {
        external_axios_default().get(`/api/view-contact`).then((res)=>{
            if (res.data.status === 200) {
                setContactList(res.data.contact);
                console.log(res.data.contact);
            }
        });
    }
    return contactList.map((item)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "contact-info-area ptb-80",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row justify-content-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "col-lg-4 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "contact-info-box",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_feather_.Mail, {})
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            children: translations ? translations.form.mail : ""
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "mailto:info@startp.com",
                                                children: item.email
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "col-lg-4 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "contact-info-box",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_feather_.MapPin, {})
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            children: translations ? translations.form.address : ""
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            children: item.location_en
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "col-lg-4 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "contact-info-box",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_feather_.Phone, {})
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            children: translations ? translations.form.phone : ""
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "tel:+1234567890",
                                                children: item.phone
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        });
    });
};
/* harmony default export */ const Contact_ContactInfo = (ContactInfo);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(271);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);
// EXTERNAL MODULE: external "sweetalert2-react-content"
var external_sweetalert2_react_content_ = __webpack_require__(3810);
var external_sweetalert2_react_content_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_react_content_);
;// CONCATENATED MODULE: ./components/Contact/ContactForm.js






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
const ContactForm = ()=>{
    const router = (0,router_.useRouter)();
    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        //for translation 
        async function fetchTranslations() {
            const translations = await (0,getDictionary/* getDictionary */.R)(locale);
            setTranslations(translations);
        }
        fetchTranslations();
    }, []);
    const [emailMessage, setEmailMessage] = (0,external_react_.useState)({
        customer_name: "",
        email: "",
        number: "",
        subject: "",
        text: "",
        error_list: []
    });
    const handleInput = (e)=>{
        e.persist();
        setEmailMessage({
            ...emailMessage,
            [e.target.name]: e.target.value
        });
    };
    const data = {
        customer_name: emailMessage.customer_name,
        email: emailMessage.email,
        number: emailMessage.number,
        subject: emailMessage.subject,
        text: emailMessage.text
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        external_axios_default().post(`/api/sendMail`, data).then((res)=>{
            if (res.data.status === 200) {
                alertContent();
            } else if (res.data.status === 400) {
                setEmailMessage({
                    ...emailMessage,
                    error_list: res.data.errors
                });
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "contact-area ptb-80",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "section-title",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                children: translations ? translations.form.getInTouch : ""
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "bar"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    " ",
                                    translations ? translations.form.anything : ""
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "col-lg-6 col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: "/images/contact-img.png",
                                    alt: "image"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "col-lg-6 col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("form", {
                                    onSubmit: handleSubmit,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "col-lg-12 col-md-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                            type: "text",
                                                            name: "customer_name",
                                                            placeholder: translations ? translations.form.yourName : "",
                                                            className: "form-control",
                                                            value: emailMessage.customer_name,
                                                            onChange: handleInput,
                                                            required: true
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "span span-reg",
                                                            children: emailMessage.error_list.customer_name
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "col-lg-12 col-md-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                            type: "text",
                                                            name: "email",
                                                            placeholder: translations ? translations.form.yourAddress : "",
                                                            className: "form-control",
                                                            value: emailMessage.email,
                                                            onChange: handleInput,
                                                            required: true
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "span span-reg",
                                                            children: emailMessage.error_list.email
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "col-lg-6 col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                            type: "text",
                                                            name: "number",
                                                            placeholder: translations ? translations.form.yourPhone : "",
                                                            className: "form-control",
                                                            value: emailMessage.number,
                                                            onChange: handleInput,
                                                            required: true
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "span span-reg",
                                                            children: emailMessage.error_list.number
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "col-lg-6 col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                            type: "text",
                                                            name: "subject",
                                                            placeholder: translations ? translations.form.yourSub : "",
                                                            className: "form-control",
                                                            value: emailMessage.subject,
                                                            onChange: handleInput,
                                                            required: true
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "span span-reg",
                                                            children: emailMessage.error_list.subject
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "col-lg-12 col-md-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                                            name: "text",
                                                            cols: "30",
                                                            rows: "5",
                                                            placeholder: translations ? translations.form.yourMessage : "",
                                                            className: "form-control",
                                                            value: emailMessage.text,
                                                            onChange: handleInput,
                                                            required: true
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "span span-reg",
                                                            children: emailMessage.error_list.text
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "col-lg-12 col-sm-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                    type: "submit",
                                                    className: "btn btn-primary",
                                                    children: [
                                                        translations ? translations.form.sendMessage : "",
                                                        " "
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Contact_ContactForm = (ContactForm);

;// CONCATENATED MODULE: ./pages/contact.js









const Contact = ()=>{
    const router = (0,router_.useRouter)();
    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        //for translation 
        async function fetchTranslations() {
            const translations = await (0,getDictionary/* getDictionary */.R)(locale);
            setTranslations(translations);
        }
        fetchTranslations();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Navbar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PageBanner/* default */.Z, {
                pageTitle: translations ? translations.form.contact : ""
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Contact_ContactInfo, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Contact_ContactForm, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const contact = (Contact);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fcontact&absolutePagePath=private-next-pages%2Fcontact.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fcontact_absolutePagePath_private_next_pages_2Fcontact_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(contact_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(contact_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(contact_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(contact_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/contact","pathname":"/contact","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: contact_namespaceObject })
        
        
    

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
var __webpack_exports__ = __webpack_require__.X(0, [3722,5893,1664,8968,8915], () => (__webpack_exec__(4800)));
module.exports = __webpack_exports__;

})();