"use strict";
(() => {
var exports = {};
exports.id = 5801;
exports.ids = [5801];
exports.modules = {

/***/ 1312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fsign_up_absolutePagePath_private_next_pages_2Fsign_up_js_preferredRegion_middlewareConfig_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/sign-up.js
var sign_up_namespaceObject = {};
__webpack_require__.r(sign_up_namespaceObject);
__webpack_require__.d(sign_up_namespaceObject, {
  "default": () => (sign_up)
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
// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__(8915);
// EXTERNAL MODULE: ./components/_App/Navbar.js
var Navbar = __webpack_require__(3827);
// EXTERNAL MODULE: ./components/_App/Footer.js
var Footer = __webpack_require__(5171);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "sweetalert"
var external_sweetalert_ = __webpack_require__(4701);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./getDictionary.js
var getDictionary = __webpack_require__(2474);
;// CONCATENATED MODULE: ./pages/sign-up.js










const SignUp = ()=>{
    const router = (0,router_.useRouter)();
    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = (0,external_react_.useState)(null);
    const [errorConf, setErrorCont] = (0,external_react_.useState)([]);
    const [registerInput, setRegister] = (0,external_react_.useState)({
        username: "",
        fname: "",
        lname: "",
        email: "",
        password: "",
        error_list: []
    });
    const data = {
        username: registerInput.username,
        fname: registerInput.fname,
        lname: registerInput.lname,
        email: registerInput.email,
        password: registerInput.password
    };
    const handleInput = (e)=>{
        e.persist();
        setRegister({
            ...registerInput,
            [e.target.name]: e.target.value
        });
    };
    const Register = async (e)=>{
        e.preventDefault();
        setErrorCont("");
        //CHECK IF PASSWORD EQUAL CONFIRM PASSWORD  
        if (registerInput.password === registerInput.confPassword) {
            external_axios_default().get(`/sanctum/csrf-cookie`).then((response)=>{
                external_axios_default().post(`/api/register-customer`, data).then((res)=>{
                    if (res.data.status === 200) {
                        console.log(res.data.message);
                        localStorage.setItem("auth_token", res.data.token);
                        localStorage.setItem("auth_token", res.data.fname);
                        localStorage.setItem("username", res.data.username);
                        localStorage.setItem("email", registerInput.email);
                        localStorage.setItem("link", res.data.link);
                        localStorage.setItem("password", registerInput.password);
                        /* swal('Registered successfully\n your Link is: ',(res.data.link),"success"); */ setRegister({
                            username: "",
                            fname: "",
                            lname: "",
                            email: "",
                            password: "",
                            error_list: []
                        });
                        setErrorCont("");
                        router.push("/pay");
                    } else {
                        setRegister({
                            ...registerInput,
                            error_list: res.data.validation_errors
                        });
                        console.log(res.data.validation_errors);
                    }
                });
            });
        } else {
            setErrorCont("password not match wit Confirm password");
        }
    };
    const attendedBy = router.query.attendedBy;
    (0,external_react_.useEffect)(()=>{
        if (typeof attendedBy !== "") {
            console.log(attendedBy);
            localStorage.setItem("attendedBy", attendedBy);
        }
        //for translation 
        async function fetchTranslations() {
            const translations = await (0,getDictionary/* getDictionary */.R)(locale);
            setTranslations(translations);
        }
        fetchTranslations();
    }, [
        attendedBy,
        locale
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Navbar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PageBanner/* default */.Z, {
                pageTitle: translations ? translations.form.signUp : ""
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "ptb-80",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "auth-form",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "auth-head",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                        href: "/it-startup",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                            src: "/images/logo.png"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        children: translations ? translations.form.createAccount : ""
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                onSubmit: Register,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mb-3",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    className: "form-label",
                                                    children: "Username"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "username",
                                                    onChange: handleInput
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "span span-reg",
                                                    children: registerInput.error_list.username
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mb-3",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    className: "form-label",
                                                    children: translations ? translations.form.email : ""
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                    type: "email",
                                                    className: "form-control",
                                                    name: "email",
                                                    onChange: handleInput
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "span span-reg",
                                                    children: registerInput.error_list.email
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mb-3 col-lg-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                        className: "form-label",
                                                        children: translations ? translations.form.fname : ""
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        name: "fname",
                                                        onChange: handleInput
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "span span-reg",
                                                        children: registerInput.error_list.fname
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mb-3 col-lg-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                        className: "form-label",
                                                        children: translations ? translations.form.lname : ""
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        name: "lname",
                                                        onChange: handleInput
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "span span-reg",
                                                        children: registerInput.error_list.lname
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mb-3 col-lg-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                        className: "form-label",
                                                        children: translations ? translations.form.pass : ""
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                        type: "password",
                                                        className: "form-control",
                                                        name: "password",
                                                        onChange: handleInput
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "span span-reg",
                                                        children: registerInput.error_list.password
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mb-3 col-lg-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                        className: "form-label",
                                                        children: translations ? translations.form.confpass : ""
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                        type: "password",
                                                        className: "form-control",
                                                        name: "confPassword",
                                                        onChange: handleInput
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "span span-reg",
                                                        children: errorConf
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        type: "submit",
                                        className: "btn btn-primary",
                                        children: translations ? translations.form.signUp : ""
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "foot",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    children: [
                                        translations ? translations.form.haveAccount : "",
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                            href: "/login",
                                            children: translations ? translations.form.login : ""
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const sign_up = (SignUp);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fsign-up&absolutePagePath=private-next-pages%2Fsign-up.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fsign_up_absolutePagePath_private_next_pages_2Fsign_up_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(sign_up_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(sign_up_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(sign_up_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(sign_up_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(sign_up_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(sign_up_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(sign_up_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(sign_up_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(sign_up_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(sign_up_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(sign_up_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/sign-up","pathname":"/sign-up","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: sign_up_namespaceObject })
        
        
    

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

/***/ 4701:
/***/ ((module) => {

module.exports = require("sweetalert");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3722,5893,1664,8968,8915], () => (__webpack_exec__(1312)));
module.exports = __webpack_exports__;

})();