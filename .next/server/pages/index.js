"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 3534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_middlewareConfig_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/index.js
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (pages)
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./getDictionary.js
var getDictionary = __webpack_require__(2474);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/ITStartup/MainBanner.js





const MainBanner = ()=>{
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "main-banner",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "d-table",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "d-table-cell",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row h-100 justify-content-center align-items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "col-lg-5",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "hero-content",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                                    children: translations ? translations.form.Different : ""
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    children: translations ? translations.form.forstPlat : ""
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                    href: "/login",
                                                    className: "btn btn-primary",
                                                    children: translations ? translations.form.getStatrt : ""
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "col-lg-6 offset-lg-1",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "banner-image",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: "/images/banner-image/man.png",
                                                    className: "animate__animated animate__fadeInDown animate__delay-0.1s",
                                                    alt: "man"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: "/images/banner-image/code.png",
                                                    className: "animate__animated animate__fadeInUp animate__delay-0.1s",
                                                    alt: "code",
                                                    width: "110px"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: "/images/banner-image/carpet.png",
                                                    className: "animate__animated animate__fadeInLeft animate__delay-0.1s",
                                                    alt: "carpet"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: "/images/banner-image/bin.png",
                                                    className: "animate__animated animate__zoomIn animate__delay-0.1s",
                                                    alt: "bin"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: "/images/banner-image/book.png",
                                                    className: "animate__animated animate__bounceIn animate__delay-0.1s",
                                                    alt: "book"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: "/images/banner-image/dekstop.png",
                                                    className: "animate__animated animate__fadeInDown animate__delay-0.1s",
                                                    alt: "dekstop"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: "/images/banner-image/dot.png",
                                                    className: "animate__animated animate__zoomIn animate__delay-0.1s",
                                                    alt: "dot"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: "/images/banner-image/flower-top-big.png",
                                                    className: "animate__animated animate__fadeInUp animate__delay-0.1s",
                                                    alt: "flower-top-big"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: "/images/banner-image/flower-top.png",
                                                    className: "animate__animated animate__rotateIn animate__delay-0.1s",
                                                    alt: "flower-top"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: "/images/banner-image/keyboard.png",
                                                    className: "animate__animated animate__fadeInUp animate__delay-0.1s",
                                                    alt: "keyboard"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: "/images/banner-image/pen.png",
                                                    className: "animate__animated animate__zoomIn animate__delay-0.1s",
                                                    alt: "pen"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: "/images/banner-image/table.png",
                                                    className: "animate__animated animate__zoomIn animate__delay-0.1s",
                                                    alt: "table"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: "/images/banner-image/tea-cup.png",
                                                    className: "animate__animated animate__fadeInLeft animate__delay-0.1s",
                                                    alt: "tea-cup"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: "/images/banner-image/headphone.png",
                                                    className: "animate__animated animate__rollIn animate__delay-0.1",
                                                    alt: "headphone"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: "/images/banner-image/main-pic.png",
                                                    className: "animate__animated animate__fadeInUp animate__delay-0.1",
                                                    alt: "main-pic"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "shape1",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: "/images/shape1.png",
                        alt: "shape"
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
                    className: "shape5",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: "/images/shape5.png",
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
        })
    });
};
/* harmony default export */ const ITStartup_MainBanner = (MainBanner);

;// CONCATENATED MODULE: ./components/ITStartup/ServicesArea.js





const ServicesArea = ()=>{
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "services-area ptb-80 bg-f7fafd",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row justify-content-center align-items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-lg-6 col-md-12 services-content",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "section-title",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                children: translations ? translations.form.wrProvide : ""
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "bar"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h5", {
                                                style: {
                                                    paddingTop: "40px",
                                                    paddingBottom: "40px"
                                                },
                                                children: [
                                                    translations ? translations.form.sourcesProvider : "",
                                                    " "
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        children: [
                                                            translations ? translations.form.Cryptocurrency : "",
                                                            " "
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        children: translations ? translations.form.forexTrade : ""
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        children: translations ? translations.form.realEst : ""
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        children: translations ? translations.form.photography : ""
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        children: translations ? translations.form.eCommerce : ""
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        children: translations ? translations.form.copywriting : ""
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-lg-6 col-md-12 services-right-image",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-right-image/book-self.png",
                                        className: "animate__animated animate__fadeInDown animate__delay-0.2s",
                                        alt: "book-self"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-right-image/box.png",
                                        className: "animate__animated animate__fadeInUp animate__delay-0.2s",
                                        "data-wow-delay": "0.6s",
                                        alt: "box"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-right-image/chair.png",
                                        className: "animate__animated animate__fadeInLeft animate__delay-0.2s",
                                        alt: "chair"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-right-image/cloud.png",
                                        className: "animate__animated animate__zoomIn animate__delay-0.2s",
                                        alt: "cloud"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-right-image/cup.png",
                                        className: "animate__animated animate__bounceIn animate__delay-0.2s",
                                        alt: "cup"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-right-image/flower-top.png",
                                        className: "animate__animated animate__fadeInDown animate__delay-0.2s",
                                        alt: "flower"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-right-image/head-phone.png",
                                        className: "animate__animated animate__zoomIn animate__delay-0.2s",
                                        alt: "head-phone"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-right-image/monitor.png",
                                        className: "animate__animated animate__fadeInUp animate__delay-0.2s",
                                        alt: "monitor"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-right-image/mug.png",
                                        className: "animate__animated animate__rotateIn animate__delay-0.2s",
                                        alt: "mug"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-right-image/table.png",
                                        className: "animate__animated animate__fadeInUp animate__delay-0.2s",
                                        alt: "table"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-right-image/tissue.png",
                                        className: "animate__animated animate__zoomIn animate__delay-0.2s",
                                        alt: "tissue"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-right-image/water-bottle.png",
                                        className: "animate__animated animate__fadeInUp animate__delay-0.2s",
                                        alt: "water-bottle"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-right-image/wifi.png",
                                        className: "animate__animated animate__fadeInLeft animate__delay-0.2s",
                                        "data-wow-delay": "0.6s",
                                        alt: "wifi"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-right-image/cercle-shape.png",
                                        className: "bg-image rotateme",
                                        alt: "shape"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-right-image/service-right-main-pic.png",
                                        className: "animate__animated animate__fadeInUp animate__delay-0.2s",
                                        alt: "main-pic"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "services-area ptb-80",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row h-100 justify-content-center align-items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-lg-6 col-md-12 services-left-image",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-left-image/big-monitor.png",
                                        className: "animate__animated animate__fadeInDown animate__delay-0.2s",
                                        alt: "big-monitor"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-left-image/creative.png",
                                        className: "animate__animated animate__fadeInUp animate__delay-0.2s",
                                        alt: "creative"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-left-image/developer.png",
                                        className: "animate__animated animate__fadeInLeft animate__delay-0.2s",
                                        alt: "developer"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-left-image/flower-top.png",
                                        className: "animate__animated animate__fadeInLeft animate__delay-0.2s",
                                        "data-wow-delay": "0.6s",
                                        alt: "flower-top"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-left-image/small-monitor.png",
                                        className: "animate__animated animate__bounceIn animate__delay-0.2s",
                                        alt: "small-monitor"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-left-image/small-top.png",
                                        className: "animate__animated animate__fadeInDown animate__delay-0.2s",
                                        alt: "small-top"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-left-image/table.png",
                                        className: "animate__animated animate__zoomIn animate__delay-0.2s",
                                        alt: "table"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-left-image/target.png",
                                        className: "animate__animated animate__fadeInUp animate__delay-0.2s",
                                        alt: "target"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-left-image/cercle-shape.png",
                                        className: "bg-image rotateme",
                                        alt: "shape"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: "/images/services-left-image/service-left-main-pic.png",
                                        className: "animate__animated animate__fadeInUp animate__delay-0.2s",
                                        alt: "main-pic"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-lg-6 col-md-12 services-content",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "section-title",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                                style: {
                                                    paddingTop: "40px",
                                                    paddingBottom: "40px"
                                                },
                                                children: translations ? translations.form.mainGoul : ""
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "bar"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                            style: {
                                                color: "#04d5f5"
                                            },
                                            children: translations ? translations.form.FirstMission : ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                            style: {
                                                color: "#04d5f5"
                                            },
                                            children: translations ? translations.form.secondMission : ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                            style: {
                                                color: "#04d5f5"
                                            },
                                            children: translations ? translations.form.TherdMission : ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const ITStartup_ServicesArea = (ServicesArea);

// EXTERNAL MODULE: ./components/_App/Footer.js
var Footer = __webpack_require__(5171);
;// CONCATENATED MODULE: ./pages/index.js






const BigdataAnalytics = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Navbar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ITStartup_MainBanner, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ITStartup_ServicesArea, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const pages = (BigdataAnalytics);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F&absolutePagePath=private-next-pages%2Findex.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: pages_namespaceObject })
        
        
    

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
var __webpack_exports__ = __webpack_require__.X(0, [3722,5893,1664,8968], () => (__webpack_exec__(3534)));
module.exports = __webpack_exports__;

})();