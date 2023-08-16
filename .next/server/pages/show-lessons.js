"use strict";
(() => {
var exports = {};
exports.id = 7817;
exports.ids = [7817];
exports.modules = {

/***/ 3073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fshow_lessons_absolutePagePath_private_next_pages_2Fshow_lessons_js_preferredRegion_middlewareConfig_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/show-lessons.js
var show_lessons_namespaceObject = {};
__webpack_require__.r(show_lessons_namespaceObject);
__webpack_require__.d(show_lessons_namespaceObject, {
  "default": () => (show_lessons)
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
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(9101);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./getDictionary.js
var getDictionary = __webpack_require__(2474);
;// CONCATENATED MODULE: ./pages/show-lessons.js









const DownloadLesson = ()=>{
    const router = (0,router_.useRouter)();
    const { MyID } = router.query;
    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = (0,external_react_.useState)(null);
    const CourseID = MyID;
    const course_id = CourseID;
    const [lessonList, setLessonList] = (0,external_react_.useState)([]);
    const [courseInput, setCourse] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        external_axios_default().get(`/api/custom-lesson/${course_id}`).then((res)=>{
            if (res.data.status === 200) {
                setLessonList(res.data.lessons);
            }
        });
        //for translation 
        async function fetchTranslations() {
            const translations = await (0,getDictionary/* getDictionary */.R)(locale);
            setTranslations(translations);
        }
        fetchTranslations();
        external_axios_default().get(`/api/edit-course/${course_id}`).then((res)=>{
            if (res.data.status === 200) {
                setCourse(res.data.course);
            }
        });
    }, [
        course_id
    ]);
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
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Navbar/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PageBanner/* default */.Z, {
                        pageTitle: courseInput[`name_${locale}`]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "team-area pt-80 pb-50 bg-f9f6f6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "row justify-content-center",
                                children: lessonList.map((item)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "col-lg-4 col-md-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "single-team",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "team-image",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                        height: "150px",
                                                        src: "/images/team-image/team1.jpeg",
                                                        alt: "image"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "team-content",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            onClick: (e)=>handleDownloadClick(e, item.id, locale === "ar" ? item.video : item[`video_${locale}`]),
                                                            className: "team-info",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                children: translations.form.display
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h6", {
                                                                children: item[`name_${locale}`]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                            children: item[`description_${locale}`]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    });
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer/* default */.Z, {})
                ]
            })
        }) : ""
    });
};
/* harmony default export */ const show_lessons = (DownloadLesson);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fshow-lessons&absolutePagePath=private-next-pages%2Fshow-lessons.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fshow_lessons_absolutePagePath_private_next_pages_2Fshow_lessons_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(show_lessons_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(show_lessons_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(show_lessons_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(show_lessons_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(show_lessons_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(show_lessons_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(show_lessons_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(show_lessons_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(show_lessons_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(show_lessons_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(show_lessons_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/show-lessons","pathname":"/show-lessons","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: show_lessons_namespaceObject })
        
        
    

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3722,5893,1664,8968,8915], () => (__webpack_exec__(3073)));
module.exports = __webpack_exports__;

})();