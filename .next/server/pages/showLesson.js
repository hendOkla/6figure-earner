"use strict";
(() => {
var exports = {};
exports.id = 5974;
exports.ids = [5974];
exports.modules = {

/***/ 2139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2FshowLesson_absolutePagePath_private_next_pages_2FshowLesson_js_preferredRegion_middlewareConfig_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/showLesson.js
var showLesson_namespaceObject = {};
__webpack_require__.r(showLesson_namespaceObject);
__webpack_require__.d(showLesson_namespaceObject, {
  "default": () => (showLesson)
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(9101);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "sweetalert"
var external_sweetalert_ = __webpack_require__(4701);
// EXTERNAL MODULE: ./getDictionary.js
var getDictionary = __webpack_require__(2474);
;// CONCATENATED MODULE: ./components/Blog/BlogSidebar2.js








const BlogSidebar2 = ()=>{
    const videoKey = Date.now();
    const [LessonsInput, setLessons] = (0,external_react_.useState)([]);
    const router = (0,router_.useRouter)();
    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        const course_id = localStorage.getItem(`course_id`);
        const lesson_id = localStorage.getItem(`lesson_id`);
        external_axios_default().get(`/api/fetch-lesson`, {
            params: {
                course_id: course_id,
                lesson_id: lesson_id
            }
        }).then((res)=>{
            if (res.data.status === 200) {
                console.log(res.data.lesson);
                setLessons(res.data.lesson);
            }
        });
        //for translation 
        async function fetchTranslations() {
            const translations = await (0,getDictionary/* getDictionary */.R)(locale);
            setTranslations(translations);
        }
        fetchTranslations();
    }, []);
    const handleDownloadClick = (e, videoId, Url)=>{
        e.preventDefault();
        localStorage.setItem("lesson_id", videoId);
        router.push({
            pathname: "/showLesson",
            query: {
                URL: Url
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: translations ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "widget-area",
                id: "secondary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "widget widget_startp_posts_thumb",
                    id: "myInput",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                            className: "widget-title",
                            children: translations.form.popular_lesson
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "row",
                            children: LessonsInput.map((item)=>{
                                return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
                                    className: "item",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                            href: "#",
                                            className: "thumbS",
                                            width: "150px",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("video", {
                                                width: "150px",
                                                controls: true,
                                                controlsList: "nodownload",
                                                onContextMenu: (e)=>e.preventDefault(),
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("source", {
                                                        src: `https://6figure-earner.net/LarReApi/public/${locale === "ar" ? item.video : item[`video_${locale}`]}`
                                                    }),
                                                    "Your browser does not support the video tag."
                                                ]
                                            }, videoKey)
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "info",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                className: "title usmall",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                    href: "#",
                                                    onClick: (e)=>handleDownloadClick(e, item.id, locale === "ar" ? item.video : item[`video_${locale}`]),
                                                    children: item[`description_${locale}`]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "clear"
                                        })
                                    ]
                                });
                            })
                        })
                    ]
                })
            })
        }) : ""
    });
};
/* harmony default export */ const Blog_BlogSidebar2 = (BlogSidebar2);

;// CONCATENATED MODULE: ./pages/showLesson.js









const BlogDetails = ()=>{
    const videoKey = Date.now();
    const router = (0,router_.useRouter)();
    const { URL } = router.query;
    const [LessonInput, setLesson] = (0,external_react_.useState)([]);
    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        const videoId = localStorage.getItem("lesson_id");
        external_axios_default().get(`/api/edit-lesson/${videoId}`).then((res)=>{
            if (res.data.status === 200) {
                setLesson(res.data.lesson);
            }
        });
        //for translation 
        async function fetchTranslations() {
            const translations = await (0,getDictionary/* getDictionary */.R)(locale);
            setTranslations(translations);
        }
        fetchTranslations();
    }, [
        URL
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: translations ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Navbar/* default */.Z, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PageBanner/* default */.Z, {
                    pageTitle: LessonInput[`name_${locale}`]
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
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("video", {
                                                    width: "100%",
                                                    controls: true,
                                                    controlsList: "nodownload",
                                                    onContextMenu: (e)=>e.preventDefault(),
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("source", {
                                                            src: `https://6figure-earner.net/LarReApi/public/${locale === "ar" ? LessonInput.video : LessonInput[`video_${locale}`]}`
                                                        }),
                                                        "Your browser does not support the video tag."
                                                    ]
                                                }, videoKey)
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "article-content",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    children: LessonInput[`description_${locale}`]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "col-lg-4 col-md-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Blog_BlogSidebar2, {})
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
/* harmony default export */ const showLesson = (BlogDetails);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2FshowLesson&absolutePagePath=private-next-pages%2FshowLesson.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2FshowLesson_absolutePagePath_private_next_pages_2FshowLesson_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(showLesson_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(showLesson_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(showLesson_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(showLesson_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(showLesson_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(showLesson_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(showLesson_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(showLesson_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(showLesson_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(showLesson_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(showLesson_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/showLesson","pathname":"/showLesson","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: showLesson_namespaceObject })
        
        
    

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
var __webpack_exports__ = __webpack_require__.X(0, [3722,5893,1664,8968,8915], () => (__webpack_exec__(2139)));
module.exports = __webpack_exports__;

})();