"use strict";
(() => {
var exports = {};
exports.id = 3043;
exports.ids = [3043];
exports.modules = {

/***/ 8512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fblog_5_absolutePagePath_private_next_pages_2Fblog_5_js_preferredRegion_middlewareConfig_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/blog-5.js
var blog_5_namespaceObject = {};
__webpack_require__.r(blog_5_namespaceObject);
__webpack_require__.d(blog_5_namespaceObject, {
  "default": () => (blog_5)
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./getDictionary.js
var getDictionary = __webpack_require__(2474);
;// CONCATENATED MODULE: ./pages/blog-5.js










const Blog5 = ()=>{
    const router = (0,router_.useRouter)();
    const { id } = router.query;
    const { cat } = router.query;
    const [curseList, setCurseList] = (0,external_react_.useState)([]);
    const [curseListBook, setCurseListBook] = (0,external_react_.useState)([]);
    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = (0,external_react_.useState)(null);
    external_react_default().useEffect(()=>{
        const authToken = window.localStorage.getItem("auth_token");
        if (authToken === null) {
            router.push({
                pathname: "/login"
            });
        }
        setCurseList([]);
        setCurseListBook([]);
        fetchCourseList();
        //for translation 
        async function fetchTranslations() {
            const translations = await (0,getDictionary/* getDictionary */.R)(locale);
            setTranslations(translations);
        }
        fetchTranslations();
    }, [
        id
    ]);
    function fetchCourseList() {
        external_axios_default().get(`/api/courseWIdCat`, {
            params: {
                id: id,
                status: 0
            }
        }).then((res)=>{
            console.log(id);
            if (res.data.status === 200) {
                setCurseList(res.data.course);
                console.log(res.data.course);
            }
        });
        external_axios_default().get(`/api/courseWIdCat`, {
            params: {
                id: id,
                status: 1
            }
        }).then((res)=>{
            console.log(id);
            if (res.data.status === 200) {
                setCurseListBook(res.data.course);
                console.log(res.data.course);
            }
        });
    }
    const handleClick = (category_id, course_id)=>{
        localStorage.setItem("category_id", category_id);
        localStorage.setItem("course_id", course_id);
        if (localStorage.getItem(`auth_token`)) {
            router.push({
                pathname: "/blog-details",
                query: {
                    course_id: course_id
                }
            });
        } else {
            router.push({
                pathname: "/login"
            });
        }
    };
    const handleClickBook = (category_id, course_id)=>{
        localStorage.setItem("category_idBook", category_id);
        localStorage.setItem("course_idBook", course_id);
        if (localStorage.getItem(`auth_token`)) {
            router.push({
                pathname: "/digitalBook",
                query: {
                    course_id: course_id
                }
            });
        } else {
            router.push({
                pathname: "/login"
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: translations ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Navbar/* default */.Z, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PageBanner/* default */.Z, {
                    pageTitle: cat
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "blog-area ptb-80",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "row",
                                children: curseList.length ? curseList.map((item)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "col-lg-4 col-md-6 col-sm-12",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "single-services-box-item",
                                                onClick: ()=>handleClick(id, item.id),
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                            src: `http://127.0.0.1:8000/${item.image}`,
                                                            alt: "image"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                            href: "#",
                                                            className: "link-service",
                                                            children: item[`name_${locale}`]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        children: item[`description_${locale}`]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                        href: "#",
                                                        className: "learn-more-btn link-service",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_feather_.ArrowRight, {}),
                                                            " ",
                                                            localStorage.getItem(`auth_token`) ? translations.form.buy : translations.form.show
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "shape",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                            src: "/images/bigdata-analytics/rectangle.png",
                                                            alt: "image"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    });
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "d-table",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "error-content",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "notfound-404",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                                style: {
                                                    fontSize: "80px"
                                                },
                                                children: "Loading....."
                                            })
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "shape2 rotateme",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "/images/shape2.svg",
                                alt: "shape"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "shape3",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "/images/shape3.svg",
                                alt: "shape"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "shape4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "shape6 rotateme",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "shape7",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "shape8 rotateme",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "/images/shape2.svg",
                                alt: "shape"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "blog-area ptb-80",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(PageBanner/* default */.Z, {
                            pageTitle: translations.form.digitalBook
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "row",
                                children: curseListBook.length ? curseListBook.map((item)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "col-lg-4 col-md-6 col-sm-12",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "single-services-box-item",
                                                onClick: ()=>handleClickBook(id, item.id),
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                            src: `http://127.0.0.1:8000/${item.image}`,
                                                            alt: "image"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                            href: "#",
                                                            className: "link-service",
                                                            children: item[`name_${locale}`]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        children: item[`description_${locale}`]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                        href: "#",
                                                        className: "learn-more-btn link-service",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_feather_.ArrowRight, {}),
                                                            " ",
                                                            localStorage.getItem(`auth_token`) ? translations.form.buy : translations.form.show
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "shape",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                            src: "/images/bigdata-analytics/rectangle.png",
                                                            alt: "image"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    });
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "d-table",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "error-content",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "notfound-404",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                                style: {
                                                    fontSize: "80px"
                                                },
                                                children: "Loading...."
                                            })
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "shape2 rotateme",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "/images/shape2.svg",
                                alt: "shape"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "shape3",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "/images/shape3.svg",
                                alt: "shape"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "shape4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "shape6 rotateme",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "shape7",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "shape8 rotateme",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: "/images/shape2.svg",
                                alt: "shape"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer/* default */.Z, {})
            ]
        }) : ""
    });
};
/* harmony default export */ const blog_5 = (Blog5);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fblog-5&absolutePagePath=private-next-pages%2Fblog-5.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fblog_5_absolutePagePath_private_next_pages_2Fblog_5_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(blog_5_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(blog_5_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(blog_5_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(blog_5_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(blog_5_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(blog_5_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(blog_5_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(blog_5_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(blog_5_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(blog_5_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(blog_5_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/blog-5","pathname":"/blog-5","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: blog_5_namespaceObject })
        
        
    

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
var __webpack_exports__ = __webpack_require__.X(0, [3722,5893,1664,8968,8915], () => (__webpack_exec__(8512)));
module.exports = __webpack_exports__;

})();