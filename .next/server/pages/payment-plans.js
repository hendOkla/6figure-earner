"use strict";
(() => {
var exports = {};
exports.id = 5185;
exports.ids = [5185];
exports.modules = {

/***/ 8963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fpayment_plans_absolutePagePath_private_next_pages_2Fpayment_plans_js_preferredRegion_middlewareConfig_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/payment-plans.js
var payment_plans_namespaceObject = {};
__webpack_require__.r(payment_plans_namespaceObject);
__webpack_require__.d(payment_plans_namespaceObject, {
  "default": () => (payment_plans)
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-stripe-checkout"
var external_react_stripe_checkout_ = __webpack_require__(8172);
var external_react_stripe_checkout_default = /*#__PURE__*/__webpack_require__.n(external_react_stripe_checkout_);
// EXTERNAL MODULE: external "sweetalert"
var external_sweetalert_ = __webpack_require__(4701);
var external_sweetalert_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./checkout.js + 1 modules
var checkout = __webpack_require__(9561);
;// CONCATENATED MODULE: ./components/BigdataAnalytics/Services.js







function Services() {
    const [status, setStatus] = (0,external_react_.useState)("");
    const [amount, setAmount] = (0,external_react_.useState)("");
    const [paymentPlan, setPaymentPlan] = (0,external_react_.useState)("");
    const handleToken = async (token, amount, name)=>{
        const response = await fetch("/api/charge", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                amount: amount,
                name: name,
                id: token.id
            })
        });
        const data = await response.json();
        if (data.success) {
            console.log("Payment Successful");
            setStatus("true");
            setAmount(amount / 100);
            setPaymentPlan(name);
        } else {
            console.log("Payment Error:", data.error);
            setStatus("false");
            setAmount(amount / 100);
            setPaymentPlan(name);
        }
    };
    (0,external_react_.useEffect)(()=>{
        const username = window.localStorage.getItem("username");
        const link = localStorage.getItem("Link");
        const data = {
            username: username,
            attendedBy: link,
            amount: amount,
            paymentPlan: paymentPlan
        };
        if (status === "false") {
            external_sweetalert_default()("Failed", "Sorry, the payment was not completed correctly, please try again...", "warning");
        } else {
            external_axios_default().post(`/api/payment`, data).then((res)=>{
                if (res.data.status === 200) {
                    console.log("welcom" + res.data.message);
                    external_sweetalert_default()("Success", "Ready to show videos", "success");
                } else if (res.data.status === 400) {
                    external_sweetalert_default()("Failed", "Something went wrong, please contact support to resolve the issue...", "warning");
                }
            });
        }
    }, [
        status
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "bigdata-services-area ptb-80 bg-eef6fd",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "section-title",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                children: "Our special packages"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "bar"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                children: "You can choose the package that suits you and enjoy the experience with us"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row justify-content-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "col-lg-4 col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "pricing-table",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "pricing-header",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                children: "6FE Standard"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "price",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("sup", {
                                                        children: "$"
                                                    }),
                                                    "2.00 ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "/Mon"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "pricing-features",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {})
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "pricing-footer",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                onClick: ()=>{
                                                    (0,checkout/* checkout */.J)({
                                                        lineItems: [
                                                            {
                                                                price: "price_1NYzUxD9XEKkDfrexmdYaXbe",
                                                                quantity: 1
                                                            }
                                                        ]
                                                    });
                                                },
                                                children: "BUY"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "col-lg-4 col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "pricing-table",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "pricing-header",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                children: "6FE Pro"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "price",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("sup", {
                                                        children: "$"
                                                    }),
                                                    "600.00 ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "/Mon"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "pricing-features",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {})
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "pricing-footer",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)((external_react_stripe_checkout_default()), {
                                                stripeKey: "pk_live_51NGPEkD9XEKkDfrerMRBkZulRw0Nk2adtRLlz9PLvJMCEcs58yREEkGGFtfSsTgRqG5jC8zJAmU7Xmffhyu4lfqi00QpD9FVQe",
                                                token: (token)=>handleToken(token, 600 * 100, "6FE Pro"),
                                                billingAddress: true,
                                                shippingAddress: true,
                                                amount: 600 * 100,
                                                name: "6FE Pro"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./components/_App/Navbar.js
var Navbar = __webpack_require__(3827);
// EXTERNAL MODULE: ./components/_App/Footer.js
var Footer = __webpack_require__(5171);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/payment-plans.js






const PaymentPlans = ()=>{
    const router = (0,router_.useRouter)();
    external_react_default().useEffect(()=>{
        const link = localStorage.getItem("Link");
        const authToken = window.localStorage.getItem("auth_token");
        if (link === null || authToken === null) {
            router.push({
                pathname: "/"
            });
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Navbar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Services, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const payment_plans = (PaymentPlans);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fpayment-plans&absolutePagePath=private-next-pages%2Fpayment-plans.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fpayment_plans_absolutePagePath_private_next_pages_2Fpayment_plans_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(payment_plans_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(payment_plans_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(payment_plans_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(payment_plans_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(payment_plans_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(payment_plans_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(payment_plans_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(payment_plans_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(payment_plans_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(payment_plans_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(payment_plans_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/payment-plans","pathname":"/payment-plans","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: payment_plans_namespaceObject })
        
        
    

/***/ }),

/***/ 9561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ checkout)
});

;// CONCATENATED MODULE: external "@stripe/stripe-js"
const stripe_js_namespaceObject = require("@stripe/stripe-js");
;// CONCATENATED MODULE: ./checkout.js

async function checkout({ lineItems }) {
    let stripePromise = null;
    const getStripe = ()=>{
        if (!stripePromise) {
            stripePromise = (0,stripe_js_namespaceObject.loadStripe)("pk_test_51NGPEkD9XEKkDfre36rfM62vRNwFTjr3wsQjBW3tqi0dSZvICePTUWVO4VQ2UUzpz11bNiMDvBwHtUTSGHE0SOYr00kucCBOb5");
        }
        return stripePromise;
    };
    const stripe = await getStripe();
    await stripe.redirectToCheckout({
        mode: "subscription",
        lineItems,
        successUrl: `${window.location.origin}/pay?session_id={CHECKOUT_SESSION_ID}&status=${encodeURIComponent("success")}`,
        cancelUrl: `${window.location.origin}/sign-up/`
    });
}


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

/***/ 8172:
/***/ ((module) => {

module.exports = require("react-stripe-checkout");

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
var __webpack_exports__ = __webpack_require__.X(0, [3722,5893,1664,8968], () => (__webpack_exec__(8963)));
module.exports = __webpack_exports__;

})();