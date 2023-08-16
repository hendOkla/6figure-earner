"use strict";
(() => {
var exports = {};
exports.id = 8252;
exports.ids = [8252];
exports.modules = {

/***/ 3341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fpayment_absolutePagePath_private_next_pages_2Fpayment_js_preferredRegion_middlewareConfig_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/payment.js
var payment_namespaceObject = {};
__webpack_require__.r(payment_namespaceObject);
__webpack_require__.d(payment_namespaceObject, {
  "default": () => (pages_payment)
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
;// CONCATENATED MODULE: external "@stripe/react-stripe-js"
const react_stripe_js_namespaceObject = require("@stripe/react-stripe-js");
;// CONCATENATED MODULE: ./pages/payment.js



const payment = ()=>{
    // for first method
    /*   const data = {
    card_number: '4000056655665556',
    exp_month: '12',
    exp_year: '2024',
    cvc: '545',
    amount: '9.9',
    currency: 'usd',
    description: 'Test Payment',
};

  React.useEffect(() => {

    axios.post(`/api/session`).then(res=>{
        if(res.data.status ===201){
            console.log(res.data.message);
            
        }else if(res.data.status === 400){
          console.log(res.data.response);   
        }else if(res.data.status === 500){
          console.log(res.data.response);   
        }
      });
     
    });
 */ // for second method
    /*   
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);


  const handleToken = async (token) => {
    setLoading(true);
    axios.post(`/api/payment`,token).then(res=>{
      console.log(res.data.status);      
    });    
  };*/ const amount = 1000; // Replace with the actual amount from the form input
    async function myFunction() {
        const result = await stripe.createToken({
            name: name,
            address_line1: "addressLine1",
            address_city: "addressCity",
            address_state: "addressState",
            address_country: "addressCountry",
            address_zip: "12345",
            amount: "998",
            currency: "usd"
        });
        const token = result.token.id;
        const response = await fetch("/api/pay", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token: token,
                amount: amount
            })
        });
    }
    external_react_default().useEffect(()=>{
        myFunction();
    });
    // for second method
    /*   return (
    <>


      <StripeCheckout
        stripeKey={'pk_live_51NGPEkD9XEKkDfrerMRBkZulRw0Nk2adtRLlz9PLvJMCEcs58yREEkGGFtfSsTgRqG5jC8zJAmU7Xmffhyu4lfqi00QpD9FVQe'}
        token={handleToken}
        amount={10000} // $100
        currency="USD"
        name="My App"
        description="Purchase"
        disabled={loading}
      >
        <button disabled={loading}>
          {loading ? 'Processing Payment...' : 'Submit Payment'}
        </button>
      </StripeCheckout>
    </>
  ); */ return /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
        children: "payment way"
    });
};
/* harmony default export */ const pages_payment = (payment);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fpayment&absolutePagePath=private-next-pages%2Fpayment.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fpayment_absolutePagePath_private_next_pages_2Fpayment_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(payment_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(payment_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(payment_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(payment_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(payment_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(payment_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(payment_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(payment_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(payment_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(payment_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(payment_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/payment","pathname":"/payment","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: payment_namespaceObject })
        
        
    

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3722,5893], () => (__webpack_exec__(3341)));
module.exports = __webpack_exports__;

})();