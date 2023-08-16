"use strict";
(() => {
var exports = {};
exports.id = 9510;
exports.ids = [9510];
exports.modules = {

/***/ 2536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fblog_details_absolutePagePath_private_next_pages_2Fblog_details_js_preferredRegion_middlewareConfig_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/blog-details.js
var blog_details_namespaceObject = {};
__webpack_require__.r(blog_details_namespaceObject);
__webpack_require__.d(blog_details_namespaceObject, {
  "default": () => (blog_details)
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
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(9101);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "sweetalert"
var external_sweetalert_ = __webpack_require__(4701);
var external_sweetalert_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert_);
// EXTERNAL MODULE: ./getDictionary.js
var getDictionary = __webpack_require__(2474);
;// CONCATENATED MODULE: ./components/Blog/BlogSidebar.js








function BlogSidebar({ myValue }) {
    const [showInput, setShowInput] = (0,external_react_.useState)(false);
    const [isActive, setisActive] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = (0,external_react_.useState)(null);
    const toggleInput = ()=>{
        setShowInput(!showInput);
    };
    const [LinkInput, setLink] = (0,external_react_.useState)({
        links: "",
        error_list: []
    });
    const handleInput = (e)=>{
        e.persist();
        setLink({
            ...LinkInput,
            [e.target.name]: e.target.value
        });
    };
    const data = {
        links: LinkInput.links
    };
    (0,external_react_.useEffect)(()=>{
        const username = localStorage.getItem("username");
        external_axios_default().get(`/api/check-payment/${username}`).then((res)=>{
            if (res.data.status === 200) {
                setisActive(true);
            } else if (res.data.status === 400) {
                setisActive(false);
            }
        });
        //for translation 
        async function fetchTranslations() {
            const translations = await (0,getDictionary/* getDictionary */.R)(locale);
            setTranslations(translations);
        }
        fetchTranslations();
    }, []);
    const handleClick = async (e)=>{
        e.preventDefault();
        external_axios_default().post("api/check-Link", data).then((res)=>{
            if (res.data.status === 200) {
                localStorage.setItem("Link", res.data.extension);
                router.push({
                    pathname: "/payment-plans"
                });
                setLink({
                    ...LinkInput,
                    error_list: ""
                });
            } else if (res.data.status === 400) {
                external_sweetalert_default()("Warning", res.data.message, "warning");
                setLink({
                    ...LinkInput,
                    error_list: ""
                });
            } else {
                setLink({
                    ...LinkInput,
                    error_list: res.data.errors
                });
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: translations ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "widget-area",
                id: "secondary",
                children: isActive ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "widget widget_tag_cloud",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                            className: "widget-title",
                            children: [
                                translations.form.show_lesson,
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "tagcloud",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: `show-lessons?MyID=${myValue}`,
                                onClick: toggleInput,
                                width: "100%",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "tag-link-count",
                                        children: " "
                                    }),
                                    "  ",
                                    translations.form.show
                                ]
                            })
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "widget widget_tag_cloud",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                    className: "widget-title",
                                    children: translations.form.payment
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "tagcloud",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: "#myInput",
                                        onClick: toggleInput,
                                        width: "100%",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "tag-link-count",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_feather_.ShoppingCart, {})
                                                ]
                                            }),
                                            "  ",
                                            translations.form.pay
                                        ]
                                    })
                                })
                            ]
                        }),
                        showInput && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row row-div",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-lg-8",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            type: "Url",
                                            className: "form-control",
                                            name: "links",
                                            placeholder: "Enter the share link please",
                                            onChange: handleInput,
                                            value: LinkInput.links,
                                            required: true
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "span span-reg",
                                            children: LinkInput.error_list.links
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-lg-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        href: "/contact/",
                                        onClick: handleClick,
                                        className: "btn btn-success btn-div",
                                        children: [
                                            translations.form.send,
                                            " "
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        }) : ""
    });
}
/* harmony default export */ const Blog_BlogSidebar = (BlogSidebar);

;// CONCATENATED MODULE: ./pages/blog-details.js










const BlogDetails = ()=>{
    const router = (0,router_.useRouter)();
    const { course_id } = router.query;
    const senCourseID = course_id;
    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = (0,external_react_.useState)(null);
    const [count, setCount] = (0,external_react_.useState)(null);
    const [courseInput, setCourse] = (0,external_react_.useState)({
        category_id: "",
        name_ar: "",
        name_en: "",
        name_sp: "",
        description_ar: "",
        description_en: "",
        description_sp: ""
    });
    (0,external_react_.useEffect)(()=>{
        external_axios_default().get(`/api/edit-course/${course_id}`).then((res)=>{
            if (res.data.status === 200) {
                setCourse(res.data.course);
            }
        });
        external_axios_default().get(`/api/countLesson/${course_id}`).then((response)=>{
            setCount(response.data.count);
        });
        //for translation 
        async function fetchTranslations() {
            const translations = await (0,getDictionary/* getDictionary */.R)(locale);
            setTranslations(translations);
        }
        fetchTranslations();
    }, [
        course_id
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: translations ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Navbar/* default */.Z, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PageBanner/* default */.Z, {
                    pageTitle: courseInput[`name_${locale}`]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "blog-details-area ptb-80",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-lg-8 col-md-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "blog-details-desc",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "article-image",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: `https://6figure-earner.net/LarReApi/public/${courseInput.image}`,
                                                    alt: "image"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "article-content",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "entry-meta",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_feather_.Clock, {}),
                                                                    " ",
                                                                    translations.form.number_lesson,
                                                                    ": ",
                                                                    count
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                        children: courseInput[`name_${locale}`]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        children: courseInput[`description_${locale}`]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-lg-4 col-md-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Blog_BlogSidebar, {
                                        myValue: senCourseID
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer/* default */.Z, {})
            ]
        }) : ""
    });
};
/* harmony default export */ const blog_details = (BlogDetails);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fblog-details&absolutePagePath=private-next-pages%2Fblog-details.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fblog_details_absolutePagePath_private_next_pages_2Fblog_details_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(blog_details_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(blog_details_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(blog_details_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(blog_details_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(blog_details_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(blog_details_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(blog_details_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(blog_details_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(blog_details_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(blog_details_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(blog_details_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/blog-details","pathname":"/blog-details","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: blog_details_namespaceObject })
        
        
    

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
var __webpack_exports__ = __webpack_require__.X(0, [3722,5893,1664,8968,8915], () => (__webpack_exec__(2536)));
module.exports = __webpack_exports__;

})();