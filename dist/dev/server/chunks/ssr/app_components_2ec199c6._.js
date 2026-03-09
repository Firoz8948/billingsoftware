module.exports = [
"[project]/app/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const Hero = ()=>{
    const [isBtnHovered, setIsBtnHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // ─── STYLES ───────────────────────────────────────────────
    const styles = {
        section: {
            width: '100%',
            backgroundColor: '#ffffff',
            padding: '60px 0',
            fontFamily: "'Poppins', sans-serif"
        },
        container: {
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px'
        },
        row: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px'
        },
        // ── Left Content ──
        contentLeft: {
            flex: 1,
            maxWidth: '550px'
        },
        heading: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            letterSpacing: 'normal',
            color: '#314259',
            margin: 0,
            padding: 0
        },
        // ── Each line of the heading ──
        headingLine: {
            display: 'block'
        },
        description: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: '16px',
            lineHeight: '26.88px',
            fontWeight: 400,
            letterSpacing: 'normal',
            color: '#787878',
            width: '514.275px',
            maxWidth: '100%',
            marginTop: '16px',
            marginBottom: '32px'
        },
        ctaButton: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: '20px',
            lineHeight: '33.6px',
            fontWeight: 600,
            letterSpacing: 'normal',
            color: '#FFFFFF',
            backgroundColor: isBtnHovered ? '#d01534' : '#ED1A3B',
            width: '372.55px',
            maxWidth: '100%',
            height: '57.6px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease, transform 0.2s ease',
            transform: isBtnHovered ? 'translateY(-2px)' : 'translateY(0)',
            boxShadow: isBtnHovered ? '0 6px 20px rgba(237, 26, 59, 0.35)' : '0 2px 8px rgba(237, 26, 59, 0.2)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none'
        },
        // ── Right Image Placeholder ──
        imageRight: {
            flex: 1,
            maxWidth: '580px',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '16px',
            overflow: 'hidden'
        }
    };
    // ─── RESPONSIVE CSS ──────────────────────────────────────
    const responsiveCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    /* ── Mobile (default) ── */
    .hero-row {
      flex-direction: column !important;
      text-align: center;
    }
    .hero-content {
      max-width: 100% !important;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .hero-heading {
      width: 100% !important;
      font-size: 46px !important;
      line-height: 1.3 !important;
      text-align: center;
    }
    .hero-heading .heading-line {
      display: inline !important;
    }
    .hero-heading .heading-br {
      display: none !important;
    }
    .hero-description {
      width: 100% !important;
      text-align: center;
    }
    .hero-cta {
      width: 100% !important;
      max-width: 372px;
    }
    .hero-image {
      display: none !important;
    }

    /* ── Tablet (600px+) ── */
    @media (min-width: 600px) {
      .hero-heading {
        font-size: 46px !important;
      }
      .hero-description {
        width: 514px !important;
        max-width: 100% !important;
      }
    }

    /* ── Desktop (900px+) ── */
    @media (min-width: 900px) {
      .hero-row {
        flex-direction: row !important;
        text-align: left;
      }
      .hero-content {
        max-width: 650px !important;
        align-items: flex-start;
      }
      .hero-heading {
        width: auto !important;
        font-size: 48px !important;
        line-height: 1.15 !important;
        text-align: left;
      }
      .hero-heading .heading-line {
        display: block !important;
      }
      .hero-heading .heading-br {
        display: none !important;
      }
      .hero-description {
        width: 514.275px !important;
        max-width: 100% !important;
        text-align: left;
      }
      .hero-cta {
        width: 372.55px !important;
      }
      .hero-image {
        display: flex !important;
      }
    }

    /* ── Large Desktop (1100px+) ── */
    @media (min-width: 1100px) {
      .hero-heading {
        font-size: 54px !important;
        line-height: 1.15 !important;
      }
      .hero-description {
        font-size: 16px !important;
      }
    }
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: responsiveCSS
            }, void 0, false, {
                fileName: "[project]/app/components/Hero.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "hero",
                style: styles.section,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.container,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-row",
                        style: styles.row,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-content",
                                style: styles.contentLeft,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "hero-heading",
                                        style: styles.heading,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "heading-line",
                                                style: styles.headingLine,
                                                children: "GST Billing Software"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Hero.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "heading-line",
                                                style: styles.headingLine,
                                                children: [
                                                    ' ',
                                                    "for Small Businesses in"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Hero.tsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "heading-line",
                                                style: styles.headingLine,
                                                children: [
                                                    ' ',
                                                    "India"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Hero.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Hero.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "hero-description",
                                        style: styles.description,
                                        children: "Manage your business professionally with Vyapar, India's leading small business software for billing, inventory, and accounting. Join 1 Cr+ satisfied SMEs in India who trust Vyapar."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Hero.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://vyaparapp.in/desktop/download/?referrer_code=5J5W",
                                        className: "hero-cta",
                                        style: styles.ctaButton,
                                        onMouseEnter: ()=>setIsBtnHovered(true),
                                        onMouseLeave: ()=>setIsBtnHovered(false),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Download Vyapar Now!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Hero.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Hero.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-image",
                                style: styles.imageRight,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/hero.png",
                                    alt: "GST billing dashboard illustration",
                                    width: 580,
                                    height: 400,
                                    style: {
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover'
                                    },
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Hero.tsx",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Hero.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Hero.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/Hero.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Hero.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Hero;
}),
"[project]/app/components/Slider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const SmileIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 9,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "10",
                r: "1",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 10,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "15",
                cy: "10",
                r: "1",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.5 14.2C9.4 15.5 10.6 16 12 16s2.6-.5 3.5-1.8",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Slider.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const PhoneIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "7",
                y: "2.5",
                width: "10",
                height: "19",
                rx: "2.5",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 5h4",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 32,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "18",
                r: "1",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Slider.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const PlayStoreIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 5.5L18 12L7 18.5V5.5Z",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 44,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 5.5L13.5 12L7 18.5",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 50,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Slider.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const WhatsappIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 19.5L6.2 16.1C5.4 14.9 5 13.7 5 12.4C5 8.9 7.8 6 11.2 6C14.6 6 17.5 8.9 17.5 12.4C17.5 15.9 14.6 18.8 11.2 18.8C10 18.8 8.9 18.5 7.9 18L5 19.5Z",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.6 10.2C9.4 9.7 9.4 9.3 9.5 9.1C9.6 8.9 9.8 8.8 10.1 8.8C10.5 8.8 11 9.1 11.3 9.5C11.7 9.9 11.9 10.4 11.8 10.7C11.8 11 11.6 11.2 11.4 11.4L11.3 11.5C11.6 12 12 12.4 12.5 12.7C13 13.1 13.5 13.3 14 13.5L14.1 13.4C14.3 13.2 14.5 13 14.8 13C15.1 13 15.6 13.2 16 13.5C16.4 13.8 16.7 14.2 16.7 14.6C16.7 14.9 16.6 15.1 16.4 15.3C16.2 15.5 15.8 15.8 15.3 15.8C14.6 15.8 13.7 15.5 12.7 15C11.8 14.5 11 13.8 10.3 13C9.7 12.2 9.2 11.3 9 10.7C8.9 10.5 9 10.3 9.1 10.2C9.2 10.1 9.4 10.1 9.6 10.2Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 68,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Slider.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MonitorIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "12",
                rx: "2",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 77,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 20h6",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 86,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 16v4",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 92,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Slider.tsx",
        lineNumber: 76,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const UsersIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "9",
                r: "3",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 103,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16.5",
                cy: "10",
                r: "2.5",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 104,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.5 18c.8-2.5 2.7-3.8 4.5-3.8s3.7 1.3 4.5 3.8",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 105,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.5 17.8c.5-1.8 1.8-2.8 3.3-2.8 1.1 0 2.2.5 3 1.7",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 111,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Slider.tsx",
        lineNumber: 102,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const features = [
    {
        title: '1 Crore+',
        description: 'Happy Customers',
        Icon: SmileIcon
    },
    {
        title: 'Free',
        description: 'Whatsapp support',
        Icon: WhatsappIcon
    },
    {
        title: 'Rated 4.7/5',
        description: 'On Google Play Store',
        Icon: PlayStoreIcon
    },
    {
        title: 'Multi-Device',
        description: 'Use together on Mobile/Desktop',
        Icon: MonitorIcon
    },
    {
        title: 'Multi-User',
        description: 'User Management Feature',
        Icon: UsersIcon
    }
];
const Slider = ()=>{
    const styles = {
        section: {
            width: '100%',
            backgroundColor: '#F5F6F8',
            padding: '30px 0',
            fontFamily: "'Poppins', sans-serif"
        },
        container: {
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px'
        },
        track: {
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
        },
        item: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px 12px',
            borderRadius: '16px',
            minHeight: '160px',
            scrollSnapAlign: 'start',
            backgroundColor: 'transparent',
            transition: 'transform 0.2s ease, background-color 0.2s ease'
        },
        iconWrap: {
            width: '56px',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ED1A3B',
            marginBottom: '14px'
        },
        title: {
            margin: 0,
            marginBottom: '8px',
            fontSize: '22px',
            lineHeight: '1.2',
            fontWeight: 600,
            color: '#314259'
        },
        description: {
            margin: 0,
            fontSize: '14px',
            lineHeight: '1.5',
            fontWeight: 400,
            color: '#787878',
            maxWidth: '210px'
        }
    };
    const responsiveCSS = `
    .feature-slider-track {
      scroll-snap-type: x mandatory;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .feature-slider-track::-webkit-scrollbar {
      display: none;
    }

    .feature-slider-item {
      flex: 0 0 calc((100% - 32px) / 2.5);
    }

    @media (hover: hover) {
      .feature-slider-item:hover {
        transform: translateY(-3px);
        background-color: rgba(255, 255, 255, 0.7);
      }
    }

    @media (min-width: 900px) {
      .feature-slider-track {
        display: grid !important;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 24px !important;
        overflow: visible !important;
      }

      .feature-slider-item {
        flex: unset !important;
        min-width: 0 !important;
      }
    }
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: responsiveCSS
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: styles.section,
                "aria-label": "Business feature highlights",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.container,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "feature-slider-track",
                        style: styles.track,
                        children: features.map(({ title, description, Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "feature-slider-item",
                                style: styles.item,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.iconWrap,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            width: 40,
                                            height: 40
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Slider.tsx",
                                            lineNumber: 259,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Slider.tsx",
                                        lineNumber: 258,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: styles.title,
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Slider.tsx",
                                        lineNumber: 262,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: styles.description,
                                        children: description
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Slider.tsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, title, true, {
                                fileName: "[project]/app/components/Slider.tsx",
                                lineNumber: 253,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Slider.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/Slider.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Slider;
}),
"[project]/app/components/Data.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
// ─── DATA ─────────────────────────────────────────────────
const features = [
    {
        id: 1,
        heading: 'Create GST Bills online and share them with customers',
        description: 'Vyapar billing software allows you to generate GST invoices for clients and share them digitally. This tool helps establish a professional brand image with its essential online GST billing features.',
        readMore: `Vyapar billing software allows you to generate GST invoices for clients and share them digitally. This tool helps establish a professional brand image with its essential online GST billing features. You can utilize the Vyapar accounting and billing app to draft invoices, ensuring adherence to Goods and Services Tax regulations in India.

The Vyapar app minimizes accounting mistakes and safeguards your business data. With just a few simple steps, you can create GST invoices using the app's templates. Additionally, the Vyapar app can be accessed both online and offline, making it convenient for small and medium enterprises to follow optimal accounting practices and streamline their bookkeeping processes.

Using our user-friendly invoicing software to comply with GST norms. Vyapar billing software comes with a variety of useful billing solutions. You can create invoices for your customers in a few steps. Further, you can share them with customers using WhatsApp, email, or print methods. You can print them use your printer in A4, A5, 2, and 3 inches variations.

Unlike most software, Vyapar enables you to create invoices within minutes. The best part is that you won't require hours of rigorous training, as it is an easy process. In the app, you can choose from 10+ professional GST invoice formats and billing formats to create professional and unique bills.

Vyapar is a free invoicing software. It comes with various useful billing and accounting features. Using the app makes business management hassle-free for SMEs. With completely customised GST-compliant invoices, your business can stand out among competitors.

The best billing software makes the billing process easier for business owners. To do so, Vyapar comes with a dedicated billing & inventory Android app along with Windows software. The basic features required for everyday accounting are free for Android mobile users. A business owners only have to pay for premium features as a yearly subscription.

Numerous useful features are available in Windows desktop software. Every business can access them during the free trial. So, every business can try out the features before purchasing the subscription. It helps SMEs understand how the app benefits them before paying.`,
        image: '/assets/data1.webp'
    },
    {
        id: 2,
        heading: 'Manage Small Business Inventory Seamlessly',
        description: 'Vyapar brings the finest inventory management software with incredibly effective features. It helps improve business performance.',
        readMore: `Vyapar brings the finest inventory management software with incredibly effective features. It helps improve business performance. Using the Vyapar app features like business reports, you can track your business's sales. It will help you understand how effectively you have managed your inventory.

As the best GST billing software, Vyapar keeps a record of business data within the app. It makes it hassle-free for business owners to create an effective strategy. Using inventory tracking features helps maximise the utility of inventory space. Our retail store inventory management tools simplify the process of pinpointing underperforming items. This analysis aids in optimizing space by removing infrequently sold products. With our inventory tracking capabilities, you can log and identify items effectively.

Tracking is accomplished through batch numbers, expiration dates, manufacturing dates, slot numbers, and additional details, which are entered into the system upon arrival. This ensures you maintain adequate stock levels for sales when necessary. Additionally, it allows you to keep accurate records, helping to detect any instances of theft promptly.

Using the free billing software by Vyapar, you can check the live status of your inventory. Further, you can set up alerts to place new orders with your suppliers. You can also track delivery challans location-wise to monitor order movements efficiently. Our inventory management app allows you to perform all inventory tracking tasks seamlessly. It helps provide a better customer experience.

Vyapar empowers your employees to take care of your inventory management needs. It does so with various useful features within the app. The instant invoicing app helps you enter all the data stored from sales in an Excel sheet. It helps save time and effort required in various accounting processes.

Using the best GST billing app, you need not do tasks manually as it automates most processes. Further, regular checks and matching data using the app ensure that items do not get misplaced. You can easily carry out a replacement without a delay to avoid business loss. It helps with day to day inventory management requirements.

Another benefit of using the Vyapar software is that it gives you statistics on your sales. Using the app, you can create GST reports. You can prepare a strategy to maximise profits and minimise expenses.`,
        image: '/assets/data2.webp'
    },
    {
        id: 3,
        heading: 'Send Payment Reminders to Recover Dues',
        description: 'Vyapar\'s free accounting and billing software assists small and medium-sized enterprises (SMEs) in securing prompt payments and managing their cash flow effectively.',
        readMore: `Vyapar's free accounting and billing software assists small and medium-sized enterprises (SMEs) in securing prompt payments and managing their cash flow effectively. The platform enables users to monitor all outstanding payments directly from the business dashboard.

Utilizing the reminder functionality within the app, you can send payment notifications to clients. This feature helps remind them of their total balance due and the payment deadline via WhatsApp and email. By sending these reminders, you can ensure customers remember to make their payments, helping to maintain consistent cash flow and prevent unnecessary delays in your business.

To help your customers pay on time, the best GST billing software by Vyapar comes with a wide range of payment options. It includes cash, credit cards, debit cards, e-wallets, NEFT, RTGS, UPI, QR code, and much more. By providing a range of cash and online payment options, you can provide convenience to customers. It ensures that your customers can pay using the option they see fit for themselves.

Many small and medium business owners have reduced payment delays with the Vyapar billing software's payment reminder feature. The app features collectively to ensure that the dues do not impact the business's cash flow. You can create reports to adjust your business plans according to the available cash flow.

Using the Vyapar billing software is such an easy task. Many business owners rely solely on our small business inventory management software for all their inventory, invoicing, and accounting needs. Customers consider Vyapar as the best GST billing software for small businesses. The app features make it useful for their business. It eliminates the requirement for multiple apps.`,
        image: '/assets/data3.webp'
    },
    {
        id: 4,
        heading: 'GST filing made simpler and faster',
        description: 'Filing GST can be a difficult task for entrepreneurs, often requiring a lengthy manual process. However, with Vyapar GST billing software, generating GST reports becomes effortless, streamlining the entire filing procedure.',
        readMore: `Filing GST can be a difficult task for entrepreneurs, often requiring a lengthy manual process. However, with Vyapar GST billing software, generating GST reports becomes effortless, streamlining the entire filing procedure.

Many business owners dedicate considerable time and energy each month to ensure compliance with tax regulations, which involves monitoring their invoices, expenses, and accounting records. Additionally, they need to manually input this data to submit their GST returns.

Vyapar billing and accounting software revolutionizes this process by enabling users to produce specific GSTR reports and harnessing automation for time-saving benefits. The app allows you to generate various reports, including GSTR1, GSTR2, GSTR3, GSTR4, and GSTR9, directly from the platform.

Using professional accounting software to create GST reports saves time for every business owner. With this, they can rely on automation to complete all accounting tasks without errors and simply send data to your CA/Tax Professional using Vyapar TaxOne for effortless GST filing.

As you create GST bills throughout the year, the app automatically detects the GST applicable to the product. It helps comply with GST laws to ensure that every transaction is recorded. Further, it ensures correct GST figures are entered. The billing software further eliminates manual errors with automation. It is beneficial when you cannot hire an extra employee to care for your accounting.

To ensure that you can file GST timely and no data loss happens, you can keep a backup. Using Vyapar, your business data is safe. It makes you feel stress-free when you have to file GST, as you can restore data anytime. Using Vyapar, you can create backups in both Google Drive and local storage to keep it secure.`,
        image: '/assets/data4.webp'
    }
];
// ─── COMPONENT ────────────────────────────────────────────
const FeatureSection = ()=>{
    const [openPopupId, setOpenPopupId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const openFeature = features.find((f)=>f.id === openPopupId);
    // Lock body scroll when modal is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (openPopupId !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return ()=>{
            document.body.style.overflow = '';
        };
    }, [
        openPopupId
    ]);
    // Close on Escape key
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e.key === 'Escape' && openPopupId !== null) {
            setOpenPopupId(null);
        }
    }, [
        openPopupId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown);
    }, [
        handleKeyDown
    ]);
    const togglePopup = (id)=>{
        setOpenPopupId((prev)=>prev === id ? null : id);
    };
    const closeModal = ()=>setOpenPopupId(null);
    // ─── INLINE STYLES ───────────────────────────────────────
    const styles = {
        section: {
            width: '100%',
            backgroundColor: '#ffffff',
            padding: '60px 0',
            fontFamily: "'Poppins', sans-serif"
        },
        container: {
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '64px'
        },
        row: {
            display: 'flex',
            alignItems: 'center',
            gap: '48px'
        },
        imageCol: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        imageWrapper: {
            width: '100%',
            maxWidth: '520px',
            borderRadius: '16px',
            overflow: 'hidden'
        },
        contentCol: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        heading: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '1.35',
            color: '#314259',
            margin: 0,
            marginBottom: '16px'
        },
        description: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '1.75',
            color: '#787878',
            margin: 0,
            marginBottom: '20px'
        },
        readMoreTrigger: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: '15px',
            color: '#ED1A3B',
            cursor: 'pointer',
            userSelect: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            transition: 'opacity 0.2s ease',
            background: 'none',
            border: 'none',
            padding: 0
        },
        actionsRow: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginTop: '4px'
        },
        downloadLink: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: '14px',
            color: '#314259',
            textDecoration: 'none',
            cursor: 'pointer'
        },
        // ── Modal Overlay ──
        overlay: {
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9998,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.25s ease'
        },
        // ── Modal Card ──
        modal: {
            position: 'relative',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '640px',
            maxHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 24px 80px rgba(0, 0, 0, 0.18)',
            animation: 'slideUp 0.3s ease',
            overflow: 'hidden'
        },
        // ── Modal Header ──
        modalHeader: {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '16px',
            padding: '24px 28px 16px 28px',
            borderBottom: '1px solid #f0f0f0',
            flexShrink: 0
        },
        modalHeading: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '1.4',
            color: '#314259',
            margin: 0
        },
        closeBtn: {
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#F5F6F8',
            color: '#555555',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'background-color 0.2s ease, color 0.2s ease'
        },
        // ── Modal Body ──
        modalBody: {
            padding: '20px 28px 28px 28px',
            overflowY: 'auto',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '14.5px',
            lineHeight: '1.8',
            color: '#555555',
            whiteSpace: 'pre-line'
        }
    };
    // ─── RESPONSIVE CSS ──────────────────────────────────────
    const responsiveCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(40px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* ── Mobile: single column, image always first ── */
    .feature-row {
      flex-direction: column !important;
      gap: 24px !important;
    }
    .feature-row .feature-image-col {
      order: 1 !important;
    }
    .feature-row .feature-content-col {
      order: 2 !important;
    }
    .feature-heading {
      font-size: 28px !important;
    }

    /* ── Modal mobile adjustments ── */
    .feature-modal {
      max-width: 100% !important;
      max-height: 90vh !important;
      border-radius: 16px !important;
      margin: 0 8px;
    }
    .feature-modal-header {
      padding: 20px 20px 14px 20px !important;
    }
    .feature-modal-heading {
      font-size: 18px !important;
    }
    .feature-modal-body {
      padding: 16px 20px 24px 20px !important;
      font-size: 14px !important;
    }

    /* ── Read more hover ── */
    .feature-read-more:hover {
      opacity: 0.8;
    }

    /* ── Close button hover ── */
    .feature-close-btn:hover {
      background-color: #ebebeb !important;
      color: #ED1A3B !important;
    }

    /* ── Custom scrollbar for modal body ── */
    .feature-modal-body::-webkit-scrollbar {
      width: 6px;
    }
    .feature-modal-body::-webkit-scrollbar-track {
      background: transparent;
    }
    .feature-modal-body::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 3px;
    }
    .feature-modal-body::-webkit-scrollbar-thumb:hover {
      background: #9ca3af;
    }

    /* ── Tablet (600px+) ── */
    @media (min-width: 600px) {
      .feature-heading {
        font-size: 28px !important;
      }
      .feature-modal {
        max-width: 560px !important;
        margin: 0;
      }
      .feature-modal-header {
        padding: 24px 28px 16px 28px !important;
      }
      .feature-modal-heading {
        font-size: 20px !important;
      }
      .feature-modal-body {
        padding: 20px 28px 28px 28px !important;
        font-size: 14.5px !important;
      }
    }

    /* ── Desktop (900px+) ── */
    @media (min-width: 900px) {
      .feature-row {
        flex-direction: row !important;
        gap: 48px !important;
      }
      .feature-row .feature-image-col {
        order: 0 !important;
      }
      .feature-row .feature-content-col {
        order: 0 !important;
      }
      .feature-row-reversed {
        flex-direction: row-reverse !important;
      }
      .feature-heading {
        font-size: 44px !important;
      }
      .feature-modal {
        max-width: 640px !important;
      }
    }

    /* ── Large Desktop (1100px+) ── */
    @media (min-width: 1100px) {
      .feature-heading {
        font-size: 44px !important;
      }
    }
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: responsiveCSS
            }, void 0, false, {
                fileName: "[project]/app/components/Data.tsx",
                lineNumber: 413,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "data",
                style: styles.section,
                "aria-label": "Product features",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.container,
                    children: features.map((feature, index)=>{
                        const isReversed = index % 2 !== 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `feature-row ${isReversed ? 'feature-row-reversed' : ''}`,
                            style: styles.row,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "feature-image-col",
                                    style: styles.imageCol,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.imageWrapper,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: feature.image,
                                            alt: feature.heading,
                                            width: 520,
                                            height: 340,
                                            style: {
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'cover',
                                                display: 'block'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Data.tsx",
                                            lineNumber: 429,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Data.tsx",
                                        lineNumber: 428,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Data.tsx",
                                    lineNumber: 427,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "feature-content-col",
                                    style: styles.contentCol,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "feature-heading",
                                            style: styles.heading,
                                            children: feature.heading
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Data.tsx",
                                            lineNumber: 446,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: styles.description,
                                            children: feature.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Data.tsx",
                                            lineNumber: 450,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.actionsRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "feature-read-more",
                                                    style: styles.readMoreTrigger,
                                                    onClick: ()=>togglePopup(feature.id),
                                                    "aria-haspopup": "dialog",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '18px',
                                                                lineHeight: 1,
                                                                display: 'inline-block'
                                                            },
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Data.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Read more"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Data.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://vyaparapp.in/desktop/download/?referrer_code=5J5W",
                                                    style: styles.downloadLink,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "18",
                                                            height: "18",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Data.tsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "7 10 12 15 17 10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Data.tsx",
                                                                    lineNumber: 490,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "12",
                                                                    y1: "3",
                                                                    x2: "12",
                                                                    y2: "15"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Data.tsx",
                                                                    lineNumber: 491,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Data.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Download"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Data.tsx",
                                                            lineNumber: 493,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Data.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Data.tsx",
                                            lineNumber: 452,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Data.tsx",
                                    lineNumber: 445,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, feature.id, true, {
                            fileName: "[project]/app/components/Data.tsx",
                            lineNumber: 421,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/app/components/Data.tsx",
                    lineNumber: 416,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Data.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            openFeature && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.overlay,
                onClick: (e)=>{
                    if (e.target === e.currentTarget) closeModal();
                },
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "feature-modal-title",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "feature-modal",
                    style: styles.modal,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "feature-modal-header",
                            style: styles.modalHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: "feature-modal-title",
                                    className: "feature-modal-heading",
                                    style: styles.modalHeading,
                                    children: openFeature.heading
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Data.tsx",
                                    lineNumber: 517,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "feature-close-btn",
                                    style: styles.closeBtn,
                                    onClick: closeModal,
                                    "aria-label": "Close dialog",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Data.tsx",
                                    lineNumber: 524,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Data.tsx",
                            lineNumber: 516,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "feature-modal-body",
                            style: styles.modalBody,
                            children: openFeature.readMore
                        }, void 0, false, {
                            fileName: "[project]/app/components/Data.tsx",
                            lineNumber: 535,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Data.tsx",
                    lineNumber: 514,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Data.tsx",
                lineNumber: 505,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = FeatureSection;
}),
"[project]/app/components/Features.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const EstimateIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4",
                y: "3",
                width: "16",
                height: "18",
                rx: "2",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 10,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 7h8M8 11h8M8 15h4",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Features.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const OrderIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 6h18l-2 10H5L3 6z",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "20",
                r: "1.5",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17",
                cy: "20",
                r: "1.5",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 6L1.5 3",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Features.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ThemeIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3c2.5 3 4 6 4 9s-1.5 6-4 9",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3c-2.5 3-4 6-4 9s1.5 6 4 9",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 12h18",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Features.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ExpenseIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "5",
                width: "20",
                height: "14",
                rx: "2",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 10h20",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 15h4",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Features.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const InventoryIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 7l8-4 8 4-8 4-8-4z",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 43,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 7v10l8 4V11",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 44,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 7v10l-8 4V11",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Features.tsx",
        lineNumber: 42,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const GSTIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "16",
                rx: "2",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 51,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 9h18",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 52,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 9v11",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 53,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 13h4M7 16h3",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 54,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Features.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ReminderIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3a6 6 0 0 1 6 6c0 4 2 5 2 5H4s2-1 2-5a6 6 0 0 1 6-6z",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 60,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 21h4",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 1v2",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Features.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const CustomerIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "8",
                r: "4",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 68,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 69,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Features.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const VendorIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "8",
                r: "3.5",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 75,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17",
                cy: "9",
                r: "2.5",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 76,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 20c0-3 2.5-5.5 6-5.5s6 2.5 6 5.5",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 77,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 15c2 0 4 1.5 4 4",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 78,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Features.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const AnalyticsIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 20V10",
                stroke: "currentColor",
                strokeWidth: "2.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 84,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 20V6",
                stroke: "currentColor",
                strokeWidth: "2.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 85,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 20V12",
                stroke: "currentColor",
                strokeWidth: "2.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 86,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 20V4",
                stroke: "currentColor",
                strokeWidth: "2.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 87,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Features.tsx",
        lineNumber: 83,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MultiUserIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "8",
                r: "3",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 93,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "8",
                r: "3",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 94,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 20c0-2.8 2.7-5 6-5 1.2 0 2.4.3 3.3.8",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 95,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 20c0-2.8-2.7-5-6-5-1.2 0-2.4.3-3.3.8",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 96,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Features.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MobileIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "7",
                y: "2",
                width: "10",
                height: "20",
                rx: "2.5",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 102,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 5h4",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 103,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "18",
                r: "1",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 104,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Features.tsx",
        lineNumber: 101,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// ─── FEATURE DATA ─────────────────────────────────────────
const featuresList = [
    {
        id: 1,
        title: 'Send Estimate and Quotations',
        Icon: EstimateIcon,
        contentHeading: 'Send Estimate and Quotations',
        contentBody: `Using our free billing software, you can easily create useful documents. It includes quotations, estimates, and accurate GST invoices. Inbuilt features in the GST billing app allow you to send quotes/estimates to customers anytime. You can send them directly through WhatsApp, email, SMS, or by printing.

Vyapar billing software for small businesses provides a professional outlook with instant estimates and quotes. The Vyapar app helps automate most processes. It makes the quotes and estimates error-free. Additionally, you can set up a due date for tracking invoices seamlessly.

Further, you can convert your estimates and quotations into sales invoices anytime. All you need is the Vyapar software for billing and it’s done in a few clicks. Vyapar free billing software offers the business a complete option for quickly saving more time, getting instant quotes. Using the accounting software, you can manage your business with higher productivity.

The billing app brings professionalism for your valued customers to attract them back. Choosing advanced Software for GST billing is one of the best investments for your business. Our Billing Software helps simplify estimates and quotations.`
    },
    {
        id: 2,
        title: 'Track Orders',
        Icon: OrderIcon,
        contentHeading: 'Track Orders',
        contentBody: `Creating sales and purchase orders is easier and faster with our advanced GST Compliant GST Software. It helps set up a due date for tracking orders seamlessly. With this GST Accounting and Billing Software, we get an auto stock adjustment. It helps ensure the availability of inventory items.

Having tracking features is pretty helpful for fulfilling orders on time and avoiding unnecessary losses. You can save time with tracking and use it to perform other day to day tasks. It enables better customer satisfaction. You can attach a tax invoice to an order and track if payment is due using the app.

Using our GST billing app, it is easier to improve your purchase/sale order formats. The Vyapar App provides various options, including Word, PDF, and Excel. Using our GST invoicing software, you can save labour costs and efforts. You can save time by converting orders to sale/purchase invoices using automation.

You can track open, closed, and overdue orders using our free billing app. It makes it a perfect choice for businesses. Using these features makes the entire tracking process seamless for businesses. In short, it helps improve the performance of employees.`
    },
    {
        id: 3,
        title: 'Choose The Best Themes',
        Icon: ThemeIcon,
        contentHeading: 'Choose The Best Themes',
        contentBody: `Maintaining and sharing professional invoices with your clients can improve your brand’s Identity. The GST Billing App has two invoice themes for thermal printers. Also, it has twelve invoice themes for regular printers.

With this GST invoice software, you can quickly improve the look of your invoice Using available customisation options is seamless. You can neatly prepare the invoice for your client. Business bills generated can better impress a client.

The Billing App for GST is the best option for your accounting inventory. It is very easy to handle. Choose from the best GST invoice formats to meet your business requirements. Most businesses choose our free GST billing software to help present a professional image. It is an ideal way to build a positive brand image.

This free billing app is efficient for quickly gaining the highest invoice standard. It provides multiple theme options for thermal and regular printers. GST Invoicing Software is suitable, and all themes are fully customisable. A business can use it for all types of commercial purposes. The list includes retailers, pharmaceutical businesses, gyms, restaurants, and many other businesses.`
    },
    {
        id: 4,
        title: 'Record Business Expenses',
        Icon: ExpenseIcon,
        contentHeading: 'Record Business Expenses',
        contentBody: `Tracking and recording all expenses in the business is important for accounting and tax filing. It is easier to follow the money spent and create an accurate report with the GST billing software.

Our free billing app is an efficient option for recording expenses. Businesses can easily optimise their business expenditure to save more money. With our free GST billing software, you can record both GST and non-GST expenses.

Further, Vyapar billing solutions come with various benefits over competitors. It helps you reduce costs and maximise sales. The billing software is an efficient option for quickly recording outstanding expenses. It helps in tracking them in the future, too.

Our free accounting software is suitable for growing businesses. It helps keep their finances in check. By recording the expenses using GST software, the company can optimise the expenditure. It helps save money. Moreover, keeping track of costs will help build better strategies. It will result in better profitability for the business.`
    },
    {
        id: 5,
        title: 'Accounts Receivable and Payables',
        Icon: InventoryIcon,
        contentHeading: 'Accounts Receivable and Payables',
        contentBody: `A professional free billing and accounting software lets users keep all the transaction details and track business cash flow seamlessly. Now you have a better way of keeping your transaction details safe.

Free GST Invoicing Software allows you to track party-wise receivables and payables. Using the business dashboard in the GST mobile app, you can track the money you have to receive and the money you need to pay in the Vyapar app.

You can easily track and observe who didn’t pay you back. You can set payment reminders to collect dues from these customers on time. You can send free payment reminders to any party via WhatsApp, SMS, and email. You can provide all types of online payment solutions to collect dues seamlessly. Further, it will allow you to save time for your day to day tasks.

Also, with the bulk payment reminder feature, you can save time by sending payment reminders to all your customers in bulk at once. The GST Billing and invoicing software performs automated calculations. It helps track accounts receivable and payables seamlessly.

Using the cash flow management system by Vyapar enables you to avoid taking too much debt and revisit your business plan, as it indicates an early sign of issues in cash flow. Further, you can also use Vyapar’s GST billing app to perform party-to-party balance transfers.`
    },
    {
        id: 6,
        title: 'Track Delivery Challan',
        Icon: GSTIcon,
        contentHeading: 'Track Delivery Challan',
        contentBody: `Get acknowledgement upon delivery with the “Delivery Challan” of Vyapar. Create a delivery challan format and attach it to your consignment using this free GST invoicing app.

You can ensure your goods have reached customers safely by tracking delivery challans. Our GST billing software helps you track your consignments easily and helps provide instructions if they get misplaced. Our ultimate free GST Invoicing Software helps manage consignor and consignee details seamlessly.

You can include the terms and conditions of the order to avoid disputes and bring more clarity to the scope of the order. This process makes the business run smoothly and is helpful for the customers to get the consignment safely.

Converting the delivery challans into bills is also a pretty efficient option, as it helps adjust auto stock. Maintain all the records of delivery acknowledgement with the GST billing & Accounting software. It is an easier way of running a business with major productivity goals.

You can convert your delivery challans into invoices when the consignment reaches the customer. You can do it using the free billing app by Vyapar. It will allow you to receive payments using multiple payment options. To avoid delayed dues collection, you can offer both offline and online payment solutions through the tax invoice.`
    },
    {
        id: 7,
        title: 'Link Your Bank Accounts',
        Icon: ReminderIcon,
        contentHeading: 'Link Your Bank Accounts',
        contentBody: `Businesses can easily add, manage, and track online and offline payments quickly. If they opt for an easy-to-use free GST billing app for mobile, the tasks get easier. Whether your revenue is from the banks or e-wallets, you can seamlessly enter data into the free billing software.

You can send or receive money using bank accounts and perform bank-to-bank transfers for seamless cash flow management. So, it is ideal for businesses with all the cash-ins and cash-outs using the Vyapar invoicing app.

A business account in your bank needs to be added to the GST Accounting Software to use the bank accounts feature within the app. You can easily manage credit cards and OD and loan accounts using the Vyapar app. This process is the most suitable option for keeping the complete bank account book without hassle. Further, it allows you to withdraw or deposit money in your bank accounts seamlessly.

Free invoicing & accounting software can also be accessed anywhere with internet connectivity from your mobile. Free accounting software by Vyapar helps you adjust the amount manually and manage cheque payments.

The Vyapar App has open cheques, which allow the user to make a quick deposit or withdraw and close them quickly. Along with many other payment options available in the app, we also allow you to keep track of cheque payments.`
    },
    {
        id: 8,
        title: 'Create 50+ Business Reports',
        Icon: CustomerIcon,
        contentHeading: 'Create 50+ Business Reports',
        contentBody: `Businesses are required to make informed decisions to ensure a consistent growth trajectory. Use 50+ business reports created using our GST billing and accounting software for all your business requirements.

Vyapar accounting software comes with professional balance sheet formats. Using Vyapar extensively increases your business’s operational efficiency as you can easily export the reports in PDF or Excel.
• Accounting and management
• Billing and e-payments
• GST Reports and taxation

Users can easily view and analyse the data instantly using our free GST Invoicing & Accounting Software. You can create graphical reports for tracking sales and expenses using the app. This free software analyses accurate business details, accounts, and many more; it is also an efficient way to quickly analyse the business’s profit. Various reports, such as:
• GSTR 1 format report
• GSTR 3B format report
• GST-related reports
• Balance Sheet
• Profit & Loss`
    },
    {
        id: 9,
        title: 'GST Invoicing / Billing',
        Icon: VendorIcon,
        contentHeading: 'GST Invoicing / Billing',
        contentBody: `Our all-in-one free GST billing software is an excellent addition to your business as it helps you automate your billing requirements. It is pretty efficient in assisting medium and small enterprises to save more time in accounting.

With the help of free billing software with GST, business owners could efficiently perform various tasks, including GST return filing, inventory management, invoicing, and billing. Our free accounting app allows businesses to customise the fields per their unique requirements.

You can use the app to generate GST invoices for your clients within 20 seconds and print/share them with customers. Bills are mainly recommended in the GST invoice format, and you can create them using our GST Software for billing.

You can use the barcode billing software and easily scan to speed up your billing process, and shortcut keys can help you do redundant tasks faster. “Bill wise payment” in the Vyapar app is one of the essential features, as it is pretty easy to link your payments with your sales invoices.

The free GST mobile app creates multiple parties to manage all clients seamlessly. With the help of this feature, it is easier to track all the due dates in the invoice and track old invoices anytime. The Vyapar app allows any business to identify any overdue payments quickly.`
    },
    {
        id: 10,
        title: 'Automatic Data Backup',
        Icon: AnalyticsIcon,
        contentHeading: 'Automatic Data Backup',
        contentBody: `GST billing & accounting Software is 100% secure, and you can easily store your data accurately. Our free app lets you keep your data secure by creating local, external or online Google Drive backups.

You can easily use this GST Invoicing & Accounting Software to recover data quickly. The data is encrypted with added security, and the Vyapar app is an advanced free invoicing & accounting software.

Vyapar GST billing software in India comes with a hassle-free backup system with the “auto-backup” feature. After activating this mode on the Vyapar app, an automatic backup is created every day, so getting all your data backup is easier, so you would not lose anything.

Most businesses in India have used this free accounting and invoicing software to make the job quick with added data security. The app has an encryption system that allows it to keep the data accessible to the owner only, to enhance security further.

Anyone in the Vyapar team cannot use your business data, and thus it makes your data secure for future reference. Using the GST billing app, you can create data backups per your requirement and help ensure the security of your data using multiple backup options.`
    },
    {
        id: 11,
        title: 'Laser and Thermal Printer Compatibility',
        Icon: MultiUserIcon,
        contentHeading: 'Laser and Thermal Printer Compatibility',
        contentBody: `Whether you require your invoice in the perfect format instead of bill format or Excel format, this free billing software is the best. Vyapar is compatible with thermal and regular (laser) printers and can help you get your desired printout within minutes.

Vyapar’s invoicing and accounting software/app is an efficient way to print your invoices and Bills. Now you have the better option to quickly generate the prints in all suitable size options, including regular paper size A4 & A5, thermal paper size 2” & 3”, and other custom paper size options.

Connect our app with your regular/thermal printer via Bluetooth or plug-in to start printing your invoices. You can use the Vyapar app to create and send a professional invoice to your customers. You don’t need to print, and use digital methods like e-mail, SMS, or WhatsApp.

Using the free GST invoicing app, you can choose from multiple Excel, Word, or PDF formats, create an invoice with complete customisation, and print it out for your customers. The process is seamless, and charges have been reduced to an all-time low in the last few years. You can use regular and thermal printers to print out the invoice and hand it over to clients.`
    },
    {
        id: 12,
        title: 'Online Business Store',
        Icon: MobileIcon,
        contentHeading: 'Online Business Store',
        contentBody: `Set up your online store within a few hours using the Vyapar GST billing software. Using our billing app, you can list all the services/products you sell to your customers online, and it will help you present a catalogue of all the services/products you sell and boost your sales online.

Also, Vyapar billing software does not add any additional charges for using online store features that help you take your business online. You can send the link to your online store to your customers, and using the link, they can place orders with you online and pick up the products from your store once you have them packed.

Using the online store feature in the GST billing and invoicing app for your business will help you reduce waiting time at the store counter, as you will have the package packed for your customers before they reach the store. You can bring in more customers in your locality by taking your business online using the Vyapar online store.

Using the online store is the best way to help everyone in your locality by providing doorstep or pick-up services from your store. It helps increase the sales and hence the growth of the business. Using the GST billing software, you can update your online store anytime.`
    }
];
// ─── COMPONENT ────────────────────────────────────────────
const FeatureExplainer = ()=>{
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(featuresList[0].id);
    const activeFeature = featuresList.find((f)=>f.id === activeId);
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pillRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    // Scroll active pill into view on mobile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const pill = pillRefs.current[activeId];
        if (pill && sliderRef.current) {
            const container = sliderRef.current;
            const pillLeft = pill.offsetLeft;
            const pillWidth = pill.offsetWidth;
            const containerWidth = container.offsetWidth;
            const scrollTarget = pillLeft - containerWidth / 2 + pillWidth / 2;
            container.scrollTo({
                left: scrollTarget,
                behavior: 'smooth'
            });
        }
    }, [
        activeId
    ]);
    // ─── STYLES ──────────────────────────────────────────────
    const styles = {
        section: {
            width: '100%',
            backgroundColor: '#F5F6F8',
            padding: '64px 0',
            fontFamily: "'Poppins', sans-serif"
        },
        container: {
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px'
        },
        sectionHeading: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: 1.3,
            color: '#314259',
            textAlign: 'center',
            margin: 0,
            marginBottom: '48px'
        },
        // ── Desktop two-column ──
        columns: {
            display: 'flex',
            gap: '32px',
            alignItems: 'stretch'
        },
        // ── Left: feature selector list ──
        leftCol: {
            width: '380px',
            flexShrink: 0,
            maxHeight: '520px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            paddingRight: '8px'
        },
        featureCard: {
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '14px 18px',
            borderRadius: '12px',
            border: '1.5px solid transparent',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            backgroundColor: '#ffffff',
            flexShrink: 0
        },
        featureCardActive: {
            backgroundColor: '#FEF2F2',
            borderColor: '#ED1A3B'
        },
        featureIconWrap: {
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ED1A3B',
            flexShrink: 0
        },
        featureTitle: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: 1.4,
            color: '#314259',
            margin: 0
        },
        featureTitleActive: {
            fontWeight: 600,
            color: '#ED1A3B'
        },
        // ── Right: content panel ──
        rightCol: {
            flex: 1,
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '36px 40px',
            maxHeight: '520px',
            overflowY: 'auto',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
        },
        contentHeading: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: 1.35,
            color: '#314259',
            margin: 0,
            marginBottom: '20px'
        },
        contentBody: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: 1.8,
            color: '#787878',
            margin: 0,
            whiteSpace: 'pre-line'
        },
        // ── Mobile horizontal slider ──
        mobileSlider: {
            display: 'none',
            overflowX: 'auto',
            gap: '10px',
            paddingBottom: '8px',
            marginBottom: '24px',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
        },
        mobilePill: {
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 18px',
            borderRadius: '50px',
            border: '1.5px solid #e0e0e0',
            backgroundColor: '#ffffff',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap'
        },
        mobilePillActive: {
            backgroundColor: '#FEF2F2',
            borderColor: '#ED1A3B'
        },
        mobilePillIcon: {
            width: '22px',
            height: '22px',
            color: '#ED1A3B',
            flexShrink: 0
        },
        mobilePillText: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: '13px',
            color: '#314259'
        },
        mobilePillTextActive: {
            fontWeight: 600,
            color: '#ED1A3B'
        },
        // ── Mobile content ──
        mobileContent: {
            display: 'none',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '28px 24px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
        }
    };
    // ─── RESPONSIVE CSS ──────────────────────────────────────
    const responsiveCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    /* ── Scrollbar styling ── */
    .fe-left-col::-webkit-scrollbar,
    .fe-right-col::-webkit-scrollbar {
      width: 5px;
    }
    .fe-left-col::-webkit-scrollbar-track,
    .fe-right-col::-webkit-scrollbar-track {
      background: transparent;
    }
    .fe-left-col::-webkit-scrollbar-thumb,
    .fe-right-col::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 3px;
    }
    .fe-left-col::-webkit-scrollbar-thumb:hover,
    .fe-right-col::-webkit-scrollbar-thumb:hover {
      background: #9ca3af;
    }

    /* Mobile slider scrollbar hide */
    .fe-mobile-slider::-webkit-scrollbar {
      display: none;
    }
    .fe-mobile-slider {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    /* ── Feature card hover ── */
    .fe-card:hover {
      background-color: #FAFAFA !important;
      border-color: #e8e8e8 !important;
    }
    .fe-card-active:hover {
      background-color: #FEF2F2 !important;
      border-color: #ED1A3B !important;
    }

    /* ── Mobile pill hover ── */
    .fe-pill:hover {
      border-color: #c0c0c0 !important;
    }
    .fe-pill-active:hover {
      border-color: #ED1A3B !important;
    }

    /* ── Mobile (default) ── */
    .fe-desktop-columns {
      display: none !important;
    }
    .fe-mobile-slider {
      display: flex !important;
    }
    .fe-mobile-content {
      display: block !important;
    }
    .fe-section-heading {
      font-size: 24px !important;
      margin-bottom: 32px !important;
    }

    /* ── Tablet (600px+) ── */
    @media (min-width: 600px) {
      .fe-section-heading {
        font-size: 28px !important;
      }
    }

    /* ── Desktop (900px+) ── */
    @media (min-width: 900px) {
      .fe-desktop-columns {
        display: flex !important;
      }
      .fe-mobile-slider {
        display: none !important;
      }
      .fe-mobile-content {
        display: none !important;
      }
      .fe-section-heading {
        font-size: 32px !important;
        margin-bottom: 48px !important;
      }
    }

    /* ── Large Desktop (1200px+) ── */
    @media (min-width: 1200px) {
      .fe-section-heading {
        font-size: 36px !important;
      }
    }
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: responsiveCSS
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 566,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "features",
                style: styles.section,
                "aria-label": "Feature details",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.container,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "fe-section-heading",
                            style: styles.sectionHeading,
                            children: "Features of GST Billing and Accounting Software"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Features.tsx",
                            lineNumber: 572,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fe-desktop-columns",
                            style: styles.columns,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fe-left-col",
                                    style: styles.leftCol,
                                    children: featuresList.map((f)=>{
                                        const isActive = f.id === activeId;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `fe-card ${isActive ? 'fe-card-active' : ''}`,
                                            style: {
                                                ...styles.featureCard,
                                                ...isActive ? styles.featureCardActive : {}
                                            },
                                            onClick: ()=>setActiveId(f.id),
                                            "aria-pressed": isActive,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.featureIconWrap,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(f.Icon, {
                                                        width: 28,
                                                        height: 28
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Features.tsx",
                                                        lineNumber: 597,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Features.tsx",
                                                    lineNumber: 596,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        ...styles.featureTitle,
                                                        ...isActive ? styles.featureTitleActive : {}
                                                    },
                                                    children: f.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Features.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, f.id, true, {
                                            fileName: "[project]/app/components/Features.tsx",
                                            lineNumber: 586,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Features.tsx",
                                    lineNumber: 582,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fe-right-col",
                                    style: styles.rightCol,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: styles.contentHeading,
                                            children: activeFeature.contentHeading
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Features.tsx",
                                            lineNumber: 614,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: styles.contentBody,
                                            children: activeFeature.contentBody
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Features.tsx",
                                            lineNumber: 615,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, activeFeature.id, true, {
                                    fileName: "[project]/app/components/Features.tsx",
                                    lineNumber: 613,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Features.tsx",
                            lineNumber: 579,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fe-mobile-slider",
                            ref: sliderRef,
                            style: styles.mobileSlider,
                            children: featuresList.map((f)=>{
                                const isActive = f.id === activeId;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `fe-pill ${isActive ? 'fe-pill-active' : ''}`,
                                    ref: (el)=>{
                                        pillRefs.current[f.id] = el;
                                    },
                                    style: {
                                        ...styles.mobilePill,
                                        ...isActive ? styles.mobilePillActive : {}
                                    },
                                    onClick: ()=>setActiveId(f.id),
                                    "aria-pressed": isActive,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(f.Icon, {
                                            style: styles.mobilePillIcon
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Features.tsx",
                                            lineNumber: 645,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                ...styles.mobilePillText,
                                                ...isActive ? styles.mobilePillTextActive : {}
                                            },
                                            children: f.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Features.tsx",
                                            lineNumber: 648,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, f.id, true, {
                                    fileName: "[project]/app/components/Features.tsx",
                                    lineNumber: 632,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/components/Features.tsx",
                            lineNumber: 624,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fe-mobile-content",
                            style: styles.mobileContent,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        ...styles.contentHeading,
                                        fontSize: '20px'
                                    },
                                    children: activeFeature.contentHeading
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Features.tsx",
                                    lineNumber: 663,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        ...styles.contentBody,
                                        fontSize: '14px'
                                    },
                                    children: activeFeature.contentBody
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Features.tsx",
                                    lineNumber: 671,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, `m-${activeFeature.id}`, true, {
                            fileName: "[project]/app/components/Features.tsx",
                            lineNumber: 662,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Features.tsx",
                    lineNumber: 569,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Features.tsx",
                lineNumber: 568,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = FeatureExplainer;
}),
"[project]/app/components/Benefits.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
// ─── ICON SVGs (red outline style) ─────────────────────────
const icons = [
    // 1. Document/Invoice
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 9,
                columnNumber: 151
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "14 2 14 8 20 8"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 9,
                columnNumber: 222
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "13",
                x2: "8",
                y2: "13"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 9,
                columnNumber: 258
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "17",
                x2: "8",
                y2: "17"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 9,
                columnNumber: 297
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "10 9 9 9 8 9"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 9,
                columnNumber: 336
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "1", true, {
        fileName: "[project]/app/components/Benefits.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    // 2. Shield/Security
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 11,
                columnNumber: 151
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "9 12 11 14 15 10"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 11,
                columnNumber: 207
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "2", true, {
        fileName: "[project]/app/components/Benefits.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    // 3. Clock/Time
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 13,
                columnNumber: 151
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "12 6 12 12 16 14"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 13,
                columnNumber: 184
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "3", true, {
        fileName: "[project]/app/components/Benefits.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    // 4. Bar Chart/Reports
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18",
                y1: "20",
                x2: "18",
                y2: "10"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 15,
                columnNumber: 151
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "20",
                x2: "12",
                y2: "4"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 15,
                columnNumber: 191
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "20",
                x2: "6",
                y2: "14"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 15,
                columnNumber: 230
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "4", true, {
        fileName: "[project]/app/components/Benefits.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    // 5. Wallet/Payment
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "1",
                y: "4",
                width: "22",
                height: "16",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 17,
                columnNumber: 151
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "1",
                y1: "10",
                x2: "23",
                y2: "10"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 17,
                columnNumber: 208
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "5", true, {
        fileName: "[project]/app/components/Benefits.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    // 6. Users/Team
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 19,
                columnNumber: 151
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "7",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 19,
                columnNumber: 205
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23 21v-2a4 4 0 0 0-3-3.87"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 19,
                columnNumber: 235
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 3.13a4 4 0 0 1 0 7.75"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 19,
                columnNumber: 274
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "6", true, {
        fileName: "[project]/app/components/Benefits.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    // 7. Trending Up/Growth
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "23 6 13.5 15.5 8.5 10.5 1 18"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 21,
                columnNumber: 151
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "17 6 23 6 23 12"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 21,
                columnNumber: 201
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "7", true, {
        fileName: "[project]/app/components/Benefits.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    // 8. Settings/Gear
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 23,
                columnNumber: 151
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 23,
                columnNumber: 183
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "8", true, {
        fileName: "[project]/app/components/Benefits.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0))
];
// ─── DATA ─────────────────────────────────────────────────
const benefits = [
    {
        id: 1,
        title: 'Lifetime Free Basic Usage',
        description: 'Get started with essential billing and invoicing features at absolutely no cost. Perfect for small businesses beginning their digital journey.',
        readMore: `Get started with essential billing and invoicing features at absolutely no cost. Perfect for small businesses beginning their digital journey.

The free tier includes all the fundamental tools you need to manage your day-to-day billing operations. You can create professional invoices, manage your customer database, and track basic expenses without paying a single rupee.

This makes it ideal for startups, freelancers, and small shop owners who want to digitize their billing process without any upfront investment. As your business grows, you can seamlessly upgrade to premium features while keeping all your existing data intact.

The lifetime free model ensures that every business, regardless of size or budget, can access modern billing technology. There are no hidden charges or trial period limitations on the basic features.`,
        icon: icons[0]
    },
    {
        id: 2,
        title: 'Secure Data Backup & Protection',
        description: 'Your business data is always safe with automatic cloud backups and local storage options. Never worry about losing important records again.',
        readMore: `Your business data is always safe with automatic cloud backups and local storage options. Never worry about losing important records again.

Data security is paramount for any business. The software provides multiple layers of protection including encrypted cloud storage, automatic daily backups, and the option to maintain local copies of your data.

In case of device failure, theft, or accidental deletion, you can restore your complete business data within minutes. The backup system works seamlessly in the background, ensuring your latest transactions are always saved.

Additionally, role-based access control ensures that only authorized personnel can view or modify sensitive business information. This comprehensive security approach gives you peace of mind while managing your finances.`,
        icon: icons[1]
    },
    {
        id: 3,
        title: 'Save Time with Automation',
        description: 'Automate repetitive tasks like invoice generation, payment reminders, and report creation. Focus on growing your business instead.',
        readMore: `Automate repetitive tasks like invoice generation, payment reminders, and report creation. Focus on growing your business instead.

Manual data entry and repetitive billing tasks can consume hours of your valuable time every day. With built-in automation features, you can set up recurring invoices for regular clients, schedule automatic payment reminders, and generate reports with a single click.

The smart automation engine learns from your billing patterns and suggests optimizations. For example, it can auto-fill customer details, apply standard discounts, and calculate taxes based on product categories.

Businesses using automation features report saving an average of 4-5 hours per week on administrative tasks. This time can be redirected toward customer acquisition, product development, or strategic planning.`,
        icon: icons[2]
    },
    {
        id: 4,
        title: 'Detailed Business Reports',
        description: 'Generate comprehensive reports including sales analysis, expense tracking, profit margins, and tax summaries at the click of a button.',
        readMore: `Generate comprehensive reports including sales analysis, expense tracking, profit margins, and tax summaries at the click of a button.

Understanding your business performance is crucial for making informed decisions. The reporting module provides over 20 different report types covering every aspect of your business operations.

Key reports include daily sales summaries, monthly revenue trends, customer-wise transaction history, product performance analysis, outstanding payment reports, and GST filing summaries. Each report can be customized with date ranges, filters, and sorting options.

Visual dashboards with charts and graphs make it easy to spot trends and identify areas for improvement. You can export reports in multiple formats including PDF, Excel, and CSV for sharing with your accountant or business partners.`,
        icon: icons[3]
    },
    {
        id: 5,
        title: 'Multiple Payment Options',
        description: 'Accept payments through cash, UPI, cards, net banking, wallets, and more. Provide convenience to your customers with flexible payment methods.',
        readMore: `Accept payments through cash, UPI, cards, net banking, wallets, and more. Provide convenience to your customers with flexible payment methods.

In today's digital economy, customers expect multiple payment options. The software supports all major payment methods including cash, credit cards, debit cards, UPI (Google Pay, PhonePe, Paytm), net banking (NEFT, RTGS, IMPS), and digital wallets.

You can record split payments where a customer pays partially through one method and the remainder through another. QR code-based payments can be generated directly from invoices, making it easy for customers to pay instantly.

The payment tracking system automatically reconciles received payments with outstanding invoices, giving you a clear picture of your cash flow at any time. Payment receipts can be generated and shared with customers via WhatsApp or email.`,
        icon: icons[4]
    },
    {
        id: 6,
        title: 'Multi-User Access & Roles',
        description: 'Add team members with customized access levels. Assign roles like admin, billing staff, or viewer to maintain control over your business data.',
        readMore: `Add team members with customized access levels. Assign roles like admin, billing staff, or viewer to maintain control over your business data.

As your business grows, you need multiple people to handle different aspects of operations. The multi-user feature allows you to add employees, accountants, and managers with specific permission levels.

You can define exactly what each user can see and do — from creating invoices and managing inventory to viewing financial reports and modifying settings. This ensures data security while enabling collaborative work.

Activity logs track every action performed by each user, providing complete transparency and accountability. You can also set up approval workflows where certain actions require manager authorization before execution.`,
        icon: icons[5]
    },
    {
        id: 7,
        title: 'Business Growth Insights',
        description: 'Get actionable insights about your best-selling products, peak business hours, customer buying patterns, and revenue growth trends.',
        readMore: `Get actionable insights about your best-selling products, peak business hours, customer buying patterns, and revenue growth trends.

Data-driven decision making is the key to sustainable business growth. The insights module analyzes your transaction data to provide meaningful business intelligence that helps you make smarter decisions.

Discover which products contribute most to your revenue, identify seasonal demand patterns, understand customer purchasing behavior, and track your month-over-month growth. The system also highlights slow-moving inventory and suggests pricing optimizations.

Comparative analysis tools let you benchmark current performance against previous periods. You can set business goals and track your progress with visual indicators. These insights transform raw data into actionable strategies for growing your business.`,
        icon: icons[6]
    },
    {
        id: 8,
        title: 'Easy Setup & Customization',
        description: 'Get started in minutes with an intuitive setup wizard. Customize invoice templates, business profiles, and tax settings to match your needs.',
        readMore: `Get started in minutes with an intuitive setup wizard. Customize invoice templates, business profiles, and tax settings to match your needs.

Unlike complex enterprise software that requires days of training, this solution is designed for simplicity. The guided setup wizard walks you through the initial configuration in under 10 minutes, covering your business profile, tax settings, and preferences.

Choose from 10+ professionally designed invoice templates that can be customized with your logo, brand colors, terms and conditions, and bank details. You can create different templates for different purposes — estimates, invoices, delivery challans, and receipts.

The settings panel provides granular control over every aspect of the software. Configure tax rates, discount policies, payment terms, notification preferences, and more. Changes take effect immediately, ensuring your workflow always matches your business requirements.`,
        icon: icons[7]
    }
];
const leftBenefits = benefits.slice(0, 4);
const rightBenefits = benefits.slice(4, 8);
// ─── COMPONENT ────────────────────────────────────────────
const BenefitsSection = ()=>{
    const [openPopupId, setOpenPopupId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const openBenefit = benefits.find((b)=>b.id === openPopupId);
    // Lock body scroll when modal is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (openPopupId !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return ()=>{
            document.body.style.overflow = '';
        };
    }, [
        openPopupId
    ]);
    // Close on Escape key
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e.key === 'Escape' && openPopupId !== null) {
            setOpenPopupId(null);
        }
    }, [
        openPopupId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown);
    }, [
        handleKeyDown
    ]);
    const closeModal = ()=>setOpenPopupId(null);
    // ─── INLINE STYLES ───────────────────────────────────────
    const styles = {
        section: {
            width: '100%',
            backgroundColor: '#FFFFFF',
            padding: '70px 0 80px',
            fontFamily: "'Poppins', sans-serif"
        },
        container: {
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px'
        },
        sectionHeading: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: '38px',
            lineHeight: '1.3',
            color: '#314259',
            textAlign: 'center',
            margin: '0 0 56px 0'
        },
        threeColGrid: {
            display: 'flex',
            alignItems: 'center',
            gap: '40px'
        },
        sideColumn: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '40px'
        },
        centerColumn: {
            flex: '0 0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        centerImageWrapper: {
            width: '350px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 12px 40px rgba(0,0,0,0.10)'
        },
        // ── Benefit Item ──
        benefitItem: {
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start'
        },
        iconBox: {
            width: '52px',
            height: '52px',
            minWidth: '52px',
            borderRadius: '14px',
            border: '1.5px solid #FDDDE3',
            backgroundColor: '#FFF5F7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
        },
        itemContent: {
            display: 'flex',
            flexDirection: 'column'
        },
        itemTitle: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '1.4',
            color: '#314259',
            margin: '0 0 6px 0'
        },
        itemDescription: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: '13.5px',
            lineHeight: '1.7',
            color: '#787878',
            margin: '0 0 10px 0'
        },
        readMoreTrigger: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: '13.5px',
            color: '#ED1A3B',
            cursor: 'pointer',
            userSelect: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            transition: 'opacity 0.2s ease',
            background: 'none',
            border: 'none',
            padding: 0
        },
        // ── Modal Overlay ──
        overlay: {
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9998,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'benefitFadeIn 0.25s ease'
        },
        modal: {
            position: 'relative',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '640px',
            maxHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 24px 80px rgba(0, 0, 0, 0.18)',
            animation: 'benefitSlideUp 0.3s ease',
            overflow: 'hidden'
        },
        modalHeader: {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '16px',
            padding: '24px 28px 16px 28px',
            borderBottom: '1px solid #f0f0f0',
            flexShrink: 0
        },
        modalHeading: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '1.4',
            color: '#314259',
            margin: 0
        },
        closeBtn: {
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#F5F6F8',
            color: '#555555',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'background-color 0.2s ease, color 0.2s ease'
        },
        modalBody: {
            padding: '20px 28px 28px 28px',
            overflowY: 'auto',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '14.5px',
            lineHeight: '1.8',
            color: '#555555',
            whiteSpace: 'pre-line'
        },
        // ── Mobile stacked list ──
        mobileList: {
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
        }
    };
    // ─── RESPONSIVE CSS ──────────────────────────────────────
    const responsiveCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    @keyframes benefitFadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes benefitSlideUp {
      from { opacity: 0; transform: translateY(40px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* ── Mobile defaults ── */
    .benefits-section-heading {
      font-size: 26px !important;
      margin-bottom: 36px !important;
    }

    .benefits-three-col {
      flex-direction: column !important;
      gap: 36px !important;
    }

    .benefits-center-col {
      order: -1 !important;
    }

    .benefits-center-image-wrapper {
      width: 100% !important;
      max-width: 320px !important;
    }

    .benefits-left-col,
    .benefits-right-col {
      width: 100% !important;
    }

    .benefits-read-more:hover {
      opacity: 0.8;
    }

    .benefits-close-btn:hover {
      background-color: #ebebeb !important;
      color: #ED1A3B !important;
    }

    /* ── Modal scrollbar ── */
    .benefits-modal-body::-webkit-scrollbar {
      width: 6px;
    }
    .benefits-modal-body::-webkit-scrollbar-track {
      background: transparent;
    }
    .benefits-modal-body::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 3px;
    }
    .benefits-modal-body::-webkit-scrollbar-thumb:hover {
      background: #9ca3af;
    }

    /* ── Modal mobile ── */
    .benefits-modal {
      max-width: 100% !important;
      max-height: 90vh !important;
      border-radius: 16px !important;
      margin: 0 8px;
    }
    .benefits-modal-header {
      padding: 20px 20px 14px 20px !important;
    }
    .benefits-modal-heading {
      font-size: 18px !important;
    }
    .benefits-modal-body {
      padding: 16px 20px 24px 20px !important;
      font-size: 14px !important;
    }

    /* ── Tablet (600px+) ── */
    @media (min-width: 600px) {
      .benefits-section-heading {
        font-size: 32px !important;
        margin-bottom: 44px !important;
      }
      .benefits-center-image-wrapper {
        max-width: 350px !important;
      }
      .benefits-modal {
        max-width: 560px !important;
        margin: 0;
      }
      .benefits-modal-header {
        padding: 24px 28px 16px 28px !important;
      }
      .benefits-modal-heading {
        font-size: 20px !important;
      }
      .benefits-modal-body {
        padding: 20px 28px 28px 28px !important;
        font-size: 14.5px !important;
      }
    }

    /* ── Desktop (960px+) ── */
    @media (min-width: 960px) {
      .benefits-section-heading {
        font-size: 38px !important;
        margin-bottom: 56px !important;
      }

      .benefits-three-col {
        flex-direction: row !important;
        gap: 40px !important;
        align-items: center !important;
      }

      .benefits-center-col {
        order: 0 !important;
      }

      .benefits-center-image-wrapper {
        width: 350px !important;
        max-width: 350px !important;
      }

      .benefits-left-col,
      .benefits-right-col {
        flex: 1 !important;
      }

      .benefits-modal {
        max-width: 640px !important;
      }
    }

    /* ── Large Desktop (1200px+) ── */
    @media (min-width: 1200px) {
      .benefits-section-heading {
        font-size: 42px !important;
      }

      .benefits-three-col {
        gap: 56px !important;
      }

      .benefits-center-image-wrapper {
        width: 380px !important;
        max-width: 380px !important;
      }
    }
  `;
    // ─── RENDER BENEFIT ITEM ─────────────────────────────────
    const renderBenefitItem = (benefit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.benefitItem,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.iconBox,
                    children: benefit.icon
                }, void 0, false, {
                    fileName: "[project]/app/components/Benefits.tsx",
                    lineNumber: 513,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.itemContent,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: styles.itemTitle,
                            children: benefit.title
                        }, void 0, false, {
                            fileName: "[project]/app/components/Benefits.tsx",
                            lineNumber: 517,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: styles.itemDescription,
                            children: benefit.description
                        }, void 0, false, {
                            fileName: "[project]/app/components/Benefits.tsx",
                            lineNumber: 518,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "benefits-read-more",
                            style: styles.readMoreTrigger,
                            onClick: ()=>setOpenPopupId(benefit.id),
                            "aria-haspopup": "dialog",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '16px',
                                        lineHeight: 1,
                                        display: 'inline-block'
                                    },
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Benefits.tsx",
                                    lineNumber: 525,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Read more"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Benefits.tsx",
                            lineNumber: 519,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Benefits.tsx",
                    lineNumber: 516,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, benefit.id, true, {
            fileName: "[project]/app/components/Benefits.tsx",
            lineNumber: 511,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: responsiveCSS
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 542,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "benefits",
                style: styles.section,
                "aria-label": "Benefits of GST Billing Software",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.container,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "benefits-section-heading",
                            style: styles.sectionHeading,
                            children: "Top 8 Benefits of GST Billing Software"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Benefits.tsx",
                            lineNumber: 547,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "benefits-three-col",
                            style: styles.threeColGrid,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "benefits-left-col",
                                    style: styles.sideColumn,
                                    children: leftBenefits.map(renderBenefitItem)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Benefits.tsx",
                                    lineNumber: 554,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "benefits-center-col",
                                    style: styles.centerColumn,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "benefits-center-image-wrapper",
                                        style: styles.centerImageWrapper,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/benefits.webp",
                                            alt: "GST Billing Software Benefits",
                                            width: 380,
                                            height: 650,
                                            style: {
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'cover',
                                                display: 'block'
                                            },
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Benefits.tsx",
                                            lineNumber: 564,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Benefits.tsx",
                                        lineNumber: 560,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Benefits.tsx",
                                    lineNumber: 559,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "benefits-right-col",
                                    style: styles.sideColumn,
                                    children: rightBenefits.map(renderBenefitItem)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Benefits.tsx",
                                    lineNumber: 581,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Benefits.tsx",
                            lineNumber: 552,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Benefits.tsx",
                    lineNumber: 545,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 544,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            openBenefit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.overlay,
                onClick: (e)=>{
                    if (e.target === e.currentTarget) closeModal();
                },
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "benefit-modal-title",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "benefits-modal",
                    style: styles.modal,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "benefits-modal-header",
                            style: styles.modalHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: "benefit-modal-title",
                                    className: "benefits-modal-heading",
                                    style: styles.modalHeading,
                                    children: openBenefit.title
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Benefits.tsx",
                                    lineNumber: 602,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "benefits-close-btn",
                                    style: styles.closeBtn,
                                    onClick: closeModal,
                                    "aria-label": "Close dialog",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Benefits.tsx",
                                    lineNumber: 609,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Benefits.tsx",
                            lineNumber: 601,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "benefits-modal-body",
                            style: styles.modalBody,
                            children: openBenefit.readMore
                        }, void 0, false, {
                            fileName: "[project]/app/components/Benefits.tsx",
                            lineNumber: 620,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Benefits.tsx",
                    lineNumber: 599,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Benefits.tsx",
                lineNumber: 590,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = BenefitsSection;
}),
"[project]/app/components/build.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
// ─── DATA ─────────────────────────────────────────────────
const slides = [
    {
        id: 1,
        title: 'Construction Business',
        paragraph: 'Vyapar billing software helps construction businesses manage project-based invoicing, track material costs, and handle contractor payments efficiently. Create detailed estimates, convert them to invoices, and monitor expenses across multiple construction sites with ease. The software supports multi-project tracking, labour cost management, and material reconciliation to keep your construction business profitable.'
    },
    {
        id: 2,
        title: 'Retail & Shopping',
        paragraph: 'Retail shop owners can streamline their billing process with barcode scanning, inventory tracking, and instant GST invoicing. Vyapar helps manage stock levels, generate sales reports, and keep accurate records of every transaction in your store. Whether you run a single outlet or multiple branches, the software adapts to your retail needs with ease.'
    },
    {
        id: 3,
        title: 'Food & Restaurant',
        paragraph: 'From small eateries to restaurant chains, Vyapar simplifies order billing, kitchen inventory management, and expense tracking. Generate itemized bills, manage supplier payments, and analyze daily sales performance to grow your food business. Track ingredient costs, monitor wastage, and optimize your menu pricing for maximum profitability.'
    },
    {
        id: 4,
        title: 'Wholesale & Distribution',
        paragraph: 'Wholesale distributors can manage bulk orders, track deliveries with challans, and handle complex pricing structures. Vyapar supports party-wise pricing, credit management, and detailed stock reports to keep your distribution business running smoothly. Manage multiple warehouses, track goods in transit, and maintain accurate ledgers for all your parties.'
    },
    {
        id: 5,
        title: 'Textile & Garment',
        paragraph: 'The textile industry requires detailed size, color, and batch tracking. Vyapar offers customized invoicing templates, fabric inventory management, and seasonal sales analysis to help garment businesses maintain profitability year-round. Handle complex product variants, manage job work orders, and track production costs efficiently.'
    },
    {
        id: 6,
        title: 'Electronics & Hardware',
        paragraph: 'Electronics dealers can manage serial number tracking, warranty records, and service billing with Vyapar. The software supports product cataloging, repair service invoicing, and comprehensive inventory management for hardware stores. Track each unit by IMEI or serial number, manage AMC contracts, and handle service center operations.'
    },
    {
        id: 7,
        title: 'Pharma & Healthcare',
        paragraph: 'Pharmaceutical businesses benefit from batch-wise tracking, expiry date management, and GST-compliant drug billing. Vyapar helps maintain accurate medicine inventories, generate purchase orders, and ensure regulatory compliance. Set up automatic alerts for expiring stock and manage returns efficiently to minimize losses.'
    },
    {
        id: 8,
        title: 'Services & Freelancing',
        paragraph: 'Service providers and freelancers can create professional invoices, track project hours, and manage client payments effortlessly. Vyapar helps build a professional brand image while keeping your finances organized and tax-ready. Generate recurring invoices for retainer clients, track expenses by project, and maintain a clear record of all your earnings.'
    }
];
const STATIC_PARAGRAPH = 'Vyapar GST billing software and accounting tools have numerous features. Collectively, they help businesses across industries. Vyapar app is built to serve every industry. It is customisable to meet the requirement of your business as per your unique business requirements. Some of the most popular industries use the Vyapar GST accounting software. It helps manage all of their business requirements.';
// ─── INDUSTRY ICON SVGS ───────────────────────────────────
const industryIcons = [
    // 1. Construction - Building
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4",
                y: "2",
                width: "16",
                height: "20",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 63,
                columnNumber: 152
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "9",
                y1: "6",
                x2: "9",
                y2: "6.01"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 63,
                columnNumber: 208
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "15",
                y1: "6",
                x2: "15",
                y2: "6.01"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 63,
                columnNumber: 246
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "9",
                y1: "10",
                x2: "9",
                y2: "10.01"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 63,
                columnNumber: 286
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "15",
                y1: "10",
                x2: "15",
                y2: "10.01"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 63,
                columnNumber: 326
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "9",
                y1: "14",
                x2: "9",
                y2: "14.01"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 63,
                columnNumber: 368
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "15",
                y1: "14",
                x2: "15",
                y2: "14.01"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 63,
                columnNumber: 408
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "10",
                y: "18",
                width: "4",
                height: "4"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 63,
                columnNumber: 450
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "c1", true, {
        fileName: "[project]/app/components/build.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    // 2. Retail - Shopping bag
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 65,
                columnNumber: 152
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                y1: "6",
                x2: "21",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 65,
                columnNumber: 210
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 10a4 4 0 01-8 0"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 65,
                columnNumber: 246
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "c2", true, {
        fileName: "[project]/app/components/build.tsx",
        lineNumber: 65,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    // 3. Food - Coffee/cup
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 8h1a4 4 0 010 8h-1"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 67,
                columnNumber: 152
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 67,
                columnNumber: 186
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "1",
                x2: "6",
                y2: "4"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 67,
                columnNumber: 238
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "10",
                y1: "1",
                x2: "10",
                y2: "4"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 67,
                columnNumber: 273
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "14",
                y1: "1",
                x2: "14",
                y2: "4"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 67,
                columnNumber: 310
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "c3", true, {
        fileName: "[project]/app/components/build.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    // 4. Wholesale - Truck
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "1",
                y: "3",
                width: "15",
                height: "13"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 69,
                columnNumber: 152
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "16 8 20 8 23 11 23 16 16 16 16 8"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 69,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "5.5",
                cy: "18.5",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 69,
                columnNumber: 246
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18.5",
                cy: "18.5",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 69,
                columnNumber: 282
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "c4", true, {
        fileName: "[project]/app/components/build.tsx",
        lineNumber: 69,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    // 5. Textile - Scissors
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6",
                cy: "6",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 71,
                columnNumber: 152
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6",
                cy: "18",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 71,
                columnNumber: 181
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "20",
                y1: "4",
                x2: "8.12",
                y2: "15.88"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 71,
                columnNumber: 211
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "14.47",
                y1: "14.48",
                x2: "20",
                y2: "20"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 71,
                columnNumber: 254
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8.12",
                y1: "8.12",
                x2: "12",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 71,
                columnNumber: 299
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "c5", true, {
        fileName: "[project]/app/components/build.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    // 6. Electronics - Monitor
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "3",
                width: "20",
                height: "14",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 73,
                columnNumber: 152
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "21",
                x2: "16",
                y2: "21"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 73,
                columnNumber: 208
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "17",
                x2: "12",
                y2: "21"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 73,
                columnNumber: 246
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "c6", true, {
        fileName: "[project]/app/components/build.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    // 7. Pharma - Heart/Plus
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 12h-4l-3 9L9 3l-3 9H2"
        }, void 0, false, {
            fileName: "[project]/app/components/build.tsx",
            lineNumber: 75,
            columnNumber: 152
        }, ("TURBOPACK compile-time value", void 0))
    }, "c7", false, {
        fileName: "[project]/app/components/build.tsx",
        lineNumber: 75,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    // 8. Services - Briefcase
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "7",
                width: "20",
                height: "14",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 77,
                columnNumber: 152
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 77,
                columnNumber: 208
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "c8", true, {
        fileName: "[project]/app/components/build.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0))
];
// ─── NAV ARROW SVGS ───────────────────────────────────────
const ArrowLeft = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "15 18 9 12 15 6"
        }, void 0, false, {
            fileName: "[project]/app/components/build.tsx",
            lineNumber: 83,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/build.tsx",
        lineNumber: 82,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ArrowRight = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "9 6 15 12 9 18"
        }, void 0, false, {
            fileName: "[project]/app/components/build.tsx",
            lineNumber: 89,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/build.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// ─── COMPONENT ────────────────────────────────────────────
const BuildSection = ()=>{
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [touchStart, setTouchStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [touchEnd, setTouchEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const autoPlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const totalSlides = slides.length;
    // ── Auto-play ──
    const resetAutoPlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        autoPlayRef.current = setInterval(()=>{
            setIsTransitioning(true);
            setCurrentIndex((prev)=>(prev + 1) % totalSlides);
        }, 5000);
    }, [
        totalSlides
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        resetAutoPlay();
        return ()=>{
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [
        resetAutoPlay
    ]);
    // ── Navigation ──
    const goToSlide = (index)=>{
        if (isTransitioning && index === currentIndex) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        resetAutoPlay();
    };
    const goNext = ()=>{
        goToSlide((currentIndex + 1) % totalSlides);
    };
    const goPrev = ()=>{
        goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
    };
    const handleTransitionEnd = ()=>{
        setIsTransitioning(false);
    };
    // ── Touch / Swipe ──
    const minSwipeDistance = 50;
    const onTouchStart = (e)=>{
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };
    const onTouchMove = (e)=>{
        setTouchEnd(e.targetTouches[0].clientX);
    };
    const onTouchEnd = ()=>{
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (Math.abs(distance) >= minSwipeDistance) {
            if (distance > 0) goNext();
            else goPrev();
        }
    };
    // ── Keyboard ──
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e.key === 'ArrowLeft') goPrev();
        if (e.key === 'ArrowRight') goNext();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        currentIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown);
    }, [
        handleKeyDown
    ]);
    // ─── INLINE STYLES ───────────────────────────────────────
    const styles = {
        section: {
            width: '100%',
            backgroundColor: '#F7F8FA',
            padding: '70px 0 80px',
            fontFamily: "'Poppins', sans-serif",
            overflow: 'hidden'
        },
        container: {
            maxWidth: '1300px',
            margin: '0 auto',
            padding: '0 24px'
        },
        sectionHeading: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: '38px',
            lineHeight: '1.3',
            color: '#314259',
            textAlign: 'center',
            margin: '0 0 24px 0'
        },
        staticParagraph: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '1.8',
            color: '#787878',
            textAlign: 'center',
            maxWidth: '860px',
            margin: '0 auto 52px auto'
        },
        // ── Carousel wrapper ──
        carouselWrapper: {
            position: 'relative',
            width: '100%'
        },
        carouselViewport: {
            overflow: 'hidden',
            borderRadius: '20px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 8px 40px rgba(0,0,0,0.07)'
        },
        carouselTrack: {
            display: 'flex',
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: `translateX(-${currentIndex * 100}%)`
        },
        slide: {
            minWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '56px 60px',
            textAlign: 'center'
        },
        slideIconBox: {
            width: '72px',
            height: '72px',
            borderRadius: '20px',
            border: '1.5px solid #FDDDE3',
            backgroundColor: '#FFF5F7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '28px'
        },
        slideTitle: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '1.35',
            color: '#314259',
            margin: '0 0 18px 0'
        },
        slideParagraph: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '1.85',
            color: '#787878',
            margin: 0,
            maxWidth: '720px'
        },
        // ── Arrow buttons ──
        arrowBtn: {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            border: '2px solid #E8E8E8',
            backgroundColor: '#FFFFFF',
            color: '#314259',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.25s ease',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
        },
        arrowLeft: {
            left: '-24px'
        },
        arrowRight: {
            right: '-24px'
        },
        // ── Dots ──
        dotsWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '32px'
        },
        dot: {
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            padding: 0
        },
        dotActive: {
            backgroundColor: '#ED1A3B',
            width: '28px',
            borderRadius: '5px'
        },
        dotInactive: {
            backgroundColor: '#D9D9D9'
        }
    };
    // ─── RESPONSIVE CSS ──────────────────────────────────────
    const responsiveCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    /* ── Mobile defaults ── */
    .build-section-heading {
      font-size: 26px !important;
      margin-bottom: 18px !important;
    }
    .build-static-paragraph {
      font-size: 14px !important;
      margin-bottom: 36px !important;
      padding: 0 4px !important;
    }

    .build-slide {
      padding: 36px 24px 40px 24px !important;
    }
    .build-slide-icon-box {
      width: 60px !important;
      height: 60px !important;
      border-radius: 16px !important;
      margin-bottom: 22px !important;
    }
    .build-slide-title {
      font-size: 22px !important;
      margin-bottom: 14px !important;
    }
    .build-slide-paragraph {
      font-size: 14px !important;
      line-height: 1.75 !important;
    }

    .build-arrow-btn {
      width: 40px !important;
      height: 40px !important;
    }
    .build-arrow-left {
      left: 8px !important;
    }
    .build-arrow-right {
      right: 8px !important;
    }

    .build-arrow-btn:hover {
      background-color: #ED1A3B !important;
      border-color: #ED1A3B !important;
      color: #FFFFFF !important;
      box-shadow: 0 6px 20px rgba(237, 26, 59, 0.25) !important;
    }

    .build-dots-wrapper {
      margin-top: 24px !important;
    }

    /* ── Tablet (600px+) ── */
    @media (min-width: 600px) {
      .build-section-heading {
        font-size: 32px !important;
        margin-bottom: 20px !important;
      }
      .build-static-paragraph {
        font-size: 15px !important;
        margin-bottom: 44px !important;
      }
      .build-slide {
        padding: 48px 44px !important;
      }
      .build-slide-icon-box {
        width: 68px !important;
        height: 68px !important;
        margin-bottom: 26px !important;
      }
      .build-slide-title {
        font-size: 26px !important;
      }
      .build-arrow-left {
        left: 12px !important;
      }
      .build-arrow-right {
        right: 12px !important;
      }
    }

    /* ── Desktop (900px+) ── */
    @media (min-width: 900px) {
      .build-section-heading {
        font-size: 38px !important;
        margin-bottom: 24px !important;
      }
      .build-static-paragraph {
        margin-bottom: 52px !important;
      }
      .build-slide {
        padding: 56px 60px !important;
      }
      .build-slide-icon-box {
        width: 72px !important;
        height: 72px !important;
        border-radius: 20px !important;
        margin-bottom: 28px !important;
      }
      .build-slide-title {
        font-size: 28px !important;
        margin-bottom: 18px !important;
      }
      .build-slide-paragraph {
        font-size: 15px !important;
      }
      .build-arrow-btn {
        width: 48px !important;
        height: 48px !important;
      }
      .build-arrow-left {
        left: -24px !important;
      }
      .build-arrow-right {
        right: -24px !important;
      }
      .build-dots-wrapper {
        margin-top: 32px !important;
      }
    }

    /* ── Large Desktop (1100px+) ── */
    @media (min-width: 1100px) {
      .build-section-heading {
        font-size: 42px !important;
      }
      .build-slide {
        padding: 64px 80px !important;
      }
    }

    /* ── Extra Large (1400px+) ── */
    @media (min-width: 1400px) {
      .build-arrow-left {
        left: -60px !important;
      }
      .build-arrow-right {
        right: -60px !important;
      }
    }
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: responsiveCSS
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 463,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: styles.section,
                "aria-label": "Built for Small Businesses",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.container,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "build-section-heading",
                            style: styles.sectionHeading,
                            children: "Built for Small Businesses"
                        }, void 0, false, {
                            fileName: "[project]/app/components/build.tsx",
                            lineNumber: 468,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "build-static-paragraph",
                            style: styles.staticParagraph,
                            children: STATIC_PARAGRAPH
                        }, void 0, false, {
                            fileName: "[project]/app/components/build.tsx",
                            lineNumber: 473,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.carouselWrapper,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.carouselViewport,
                                    onTouchStart: onTouchStart,
                                    onTouchMove: onTouchMove,
                                    onTouchEnd: onTouchEnd,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.carouselTrack,
                                        onTransitionEnd: handleTransitionEnd,
                                        children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "build-slide",
                                                style: styles.slide,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "build-slide-icon-box",
                                                        style: styles.slideIconBox,
                                                        children: industryIcons[index]
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/build.tsx",
                                                        lineNumber: 497,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "build-slide-title",
                                                        style: styles.slideTitle,
                                                        children: slide.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/build.tsx",
                                                        lineNumber: 505,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "build-slide-paragraph",
                                                        style: styles.slideParagraph,
                                                        children: slide.paragraph
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/build.tsx",
                                                        lineNumber: 513,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, slide.id, true, {
                                                fileName: "[project]/app/components/build.tsx",
                                                lineNumber: 491,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/build.tsx",
                                        lineNumber: 486,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/build.tsx",
                                    lineNumber: 480,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "build-arrow-btn build-arrow-left",
                                    style: {
                                        ...styles.arrowBtn,
                                        ...styles.arrowLeft
                                    },
                                    onClick: goPrev,
                                    "aria-label": "Previous slide",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowLeft, {}, void 0, false, {
                                        fileName: "[project]/app/components/build.tsx",
                                        lineNumber: 531,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/build.tsx",
                                    lineNumber: 525,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "build-arrow-btn build-arrow-right",
                                    style: {
                                        ...styles.arrowBtn,
                                        ...styles.arrowRight
                                    },
                                    onClick: goNext,
                                    "aria-label": "Next slide",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRight, {}, void 0, false, {
                                        fileName: "[project]/app/components/build.tsx",
                                        lineNumber: 541,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/build.tsx",
                                    lineNumber: 535,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/build.tsx",
                            lineNumber: 478,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "build-dots-wrapper",
                            style: styles.dotsWrapper,
                            children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: {
                                        ...styles.dot,
                                        ...index === currentIndex ? styles.dotActive : styles.dotInactive
                                    },
                                    onClick: ()=>goToSlide(index),
                                    "aria-label": `Go to slide ${index + 1}`,
                                    "aria-current": index === currentIndex ? 'true' : undefined
                                }, slide.id, false, {
                                    fileName: "[project]/app/components/build.tsx",
                                    lineNumber: 548,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/components/build.tsx",
                            lineNumber: 546,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/build.tsx",
                    lineNumber: 466,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/build.tsx",
                lineNumber: 465,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = BuildSection;
}),
"[project]/app/components/faqs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
// ─────────────────── FAQ DATA ───────────────────────────────────────
const faqItems = [
    {
        id: 1,
        q: 'What is the GST Bill?',
        a: `A GST Bill is simply a tax invoice created by a seller when goods or services are sold under India’s Goods and Services Tax (GST) system. It’s an official document that lists all the important details of a transaction, like the seller’s and buyer’s names, GSTIN numbers, date, invoice number, product or service description, quantity, price, and the GST charged on it.

In simple terms, a GST bill is more than just a bill, it’s a record of a genuine sale that ensures taxes are properly accounted for and can be claimed as input tax credit (ITC) by businesses. Every registered business under GST must issue this bill whenever it makes a sale.`
    },
    {
        id: 2,
        q: 'Which is the best billing software?',
        a: `Vyapar app is the best billing software available for SMEs in India. The Vyapar app provides access to a range of useful features. They can make the business management process seamless for business owners.

Using our billing tool, you can save a lot of time and effort required in creating GST invoices. You can use automation tools to manage inventory using tracking features. Further, you can create reports using stored data, and much more.`
    },
    {
        id: 3,
        q: 'What is billing software?',
        a: `Billing software is a tool that helps businesses create bills and invoices quickly without manual work. Instead of writing everything by hand, the software automatically adds item details, calculates totals, taxes, discounts, and records the transaction for future use.

In simple words, billing software makes the process of selling, invoicing, and keeping track of payments much easier. It helps you avoid mistakes, saves time, and keeps all your billing records organized in one place.

Whether you run a shop, service business, or online store, billing software helps you:

• Create professional invoices  
• Track sales and payments  
• Manage customers and items  
• Maintain clean, accurate records or reports  
• Understand your business performance`
    },
    {
        id: 4,
        q: 'How much does billing software cost?',
        a: `You can use Vyapar billing software on Android devices for free anytime. All businesses can get a 7 days free trial with the desktop version. Vyapar billing software only charges for providing access to premium features. You can try premium features for free using trial access in the desktop billing software.`
    },
    {
        id: 5,
        q: 'Is there free GST billing software?',
        a: `Yes, you can get the best GST billing software by Vyapar for free. You can download the app on Android devices at zero cost and use it for your daily business requirements. You do not need to pay to use the app’s basic features.`
    },
    {
        id: 6,
        q: 'Which software is used for GST billing?',
        a: `Vyapar is the best business choice for creating GST bills for customers in India. Over one crore businesses use Vyapar to bill their customers. It is because they trust the Vyapar billing software. Vyapar is the best choice as it comes with a range of useful features that eliminate the requirement to have multiple billing software. It acts as a one stop solution for all business requirements. The best billing solutions make the entire business management process seamless.`
    },
    {
        id: 7,
        q: 'Which is the best free billing software in India?',
        a: `By having a simple, feature‑rich, and reliable tool for everyday business use. With a simple, easy to use interface and covering all the business management operations such as invoicing, inventory, and accounting, Vyapar stands out as one of the best choices in India for free use.`
    },
    {
        id: 8,
        q: 'How do I invoice clients for free?',
        a: `You can create GST and non‑GST invoices for your clients. All you need is to use the best billing software by Vyapar. You can download the Vyapar invoicing software. Start by entering new party details. Once done, you can create and send invoices without paying any fees.`
    },
    {
        id: 9,
        q: 'What is online billing software?',
        a: `Online billing software is used to create bills for customers online. The billing tool is used by businesses to get paid for a contract. The billing software that makes online bills does not require you to download the app. You can go to the online billing software by Vyapar, enter details for the invoice to create GST bills. Once generated, you can send them over to your customers.`
    },
    {
        id: 10,
        q: 'What is the cheapest billing software?',
        a: `Vyapar brings you the cheapest billing software that comes with various accounting features. You can use the app at a small subscription cost. It helps create professional invoices for customers.

Using affordable billing software, you can reduce the cost of operating your business. After all, Vyapar assists you in various business management tasks.`
    },
    {
        id: 11,
        q: 'How do I get a computerised GST bill?',
        a: `You can use Vyapar invoice templates to create computerised GST bills for your customers. The invoicing tools and billing software by Vyapar make the entire process seamless. It does not make a dent in your financials, as free templates do not require you to pay.

You can download the Vyapar software, automate your business’s billing process. It will save your employees time by creating computerised bills.`
    },
    {
        id: 12,
        q: 'What is offline billing software?',
        a: `Offline billing software creates professional GST bills for customers without an active internet connection. An offline billing tool is helpful if you are running a small business in cities like Delhi, Mumbai, or Bengaluru, or in remote regions like hilly and rural areas with poor network connectivity.

Using the offline version helps ensure that customers get an uninterrupted billing experience. The app data remains secure as the business owner can also do local backups. Further, the app can set up automatic backups too.`
    }
];
// ─────────────────── ACCORDION ICONS ───────────────────────────────────
const ChevronDown = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "6 9 12 15 18 9"
        }, void 0, false, {
            fileName: "[project]/app/components/faqs.tsx",
            lineNumber: 92,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/faqs.tsx",
        lineNumber: 91,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ChevronUp = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ED1A3B",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "18 15 12 9 6 15"
        }, void 0, false, {
            fileName: "[project]/app/components/faqs.tsx",
            lineNumber: 98,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/faqs.tsx",
        lineNumber: 97,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// ─────────────────── MAIN COMPONENT ─────────────────────────────────────
const FaqSection = ()=>{
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggle = (id)=>{
        setOpenId((prev)=>prev === id ? null : id);
    };
    // close on Escape key
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e.key === 'Escape' && openId !== null) setOpenId(null);
    }, [
        openId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown);
    }, [
        handleKeyDown
    ]);
    // ── INLINE STYLES ───────────────────────────────────────
    const styles = {
        section: {
            width: '100%',
            backgroundColor: '#FFFFFF',
            padding: '80px 0 90px',
            fontFamily: "'Poppins', sans-serif"
        },
        container: {
            maxWidth: '1300px',
            margin: '0 auto',
            padding: '0 24px'
        },
        heading: {
            fontWeight: 800,
            fontSize: '38px',
            lineHeight: '1.3',
            color: '#314259',
            textAlign: 'center',
            margin: '0 0 24px'
        },
        paragraph: {
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '1.8',
            color: '#787878',
            textAlign: 'center',
            maxWidth: '860px',
            margin: '0 auto 56px'
        },
        // ── Accordion ──
        accordionItem: {
            borderBottom: '1px solid #E3E5E8',
            padding: '16px 0'
        },
        questionBtn: {
            width: '100%',
            background: 'none',
            border: 'none',
            textAlign: 'left',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '1.4',
            color: '#314259',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            padding: '0'
        },
        answer: {
            marginTop: '12px',
            fontWeight: 400,
            fontSize: '14.5px',
            lineHeight: '1.8',
            color: '#555555'
        },
        // ── Mobile spacing ──
        mobileWrapper: {
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
        },
        // ── Arrow button style ──
        arrow: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease'
        }
    };
    // ── RESPONSIVE CSS ──────────────────────────────────────
    const responsiveCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    /* Mobile defaults */
    .faqs-heading {
      font-size: 26px !important;
      margin-bottom: 18px !important;
    }
    .faqs-paragraph {
      font-size: 14px !important;
      margin-bottom: 36px !important;
      padding: 0 4px !important;
    }
    .faqs-question {
      font-size: 15px !important;
    }
    .faqs-answer {
      font-size: 14px !important;
    }

    /* Tablet (600px+) */
    @media (min-width: 600px) {
      .faqs-heading {
        font-size: 32px !important;
        margin-bottom: 20px !important;
      }
      .faqs-paragraph {
        font-size: 15px !important;
        margin-bottom: 44px !important;
      }
      .faqs-question {
        font-size: 16px !important;
      }
      .faqs-answer {
        font-size: 14.5px !important;
      }
    }

    /* Desktop (960px+) */
    @media (min-width: 960px) {
      .faqs-heading {
        font-size: 38px !important;
        margin-bottom: 24px !important;
      }
      .faqs-paragraph {
        margin-bottom: 56px !important;
      }
      .faqs-question {
        font-size: 16.5px !important;
      }
      .faqs-answer {
        font-size: 15px !important;
      }
    }

    /* Large Desktop (1200px+) */
    @media (min-width: 1200px) {
      .faqs-heading {
        font-size: 42px !important;
      }
    }
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: responsiveCSS
            }, void 0, false, {
                fileName: "[project]/app/components/faqs.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "faqs",
                style: styles.section,
                "aria-label": "Frequently asked questions",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.container,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "faqs-heading",
                            style: styles.heading,
                            children: "GST Billing Software FAQs"
                        }, void 0, false, {
                            fileName: "[project]/app/components/faqs.tsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faqs-wrapper",
                            style: styles.mobileWrapper,
                            children: faqItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.accordionItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "faqs-question",
                                            style: styles.questionBtn,
                                            onClick: ()=>toggle(item.id),
                                            "aria-expanded": openId === item.id,
                                            "aria-controls": `faq-answer-${item.id}`,
                                            children: [
                                                item.q,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: styles.arrow,
                                                    children: openId === item.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronUp, {}, void 0, false, {
                                                        fileName: "[project]/app/components/faqs.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 43
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronDown, {}, void 0, false, {
                                                        fileName: "[project]/app/components/faqs.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 59
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/faqs.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/faqs.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        openId === item.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: `faq-answer-${item.id}`,
                                            role: "region",
                                            "aria-labelledby": `faq-question-${item.id}`,
                                            style: styles.answer,
                                            children: item.a.split('\n').map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: '0 0 0.6em'
                                                    },
                                                    children: line
                                                }, i, false, {
                                                    fileName: "[project]/app/components/faqs.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/faqs.tsx",
                                            lineNumber: 291,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/app/components/faqs.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/components/faqs.tsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/faqs.tsx",
                    lineNumber: 266,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/faqs.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = FaqSection;
}),
"[project]/app/components/rating.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
// ─── COMPONENT ────────────────────────────────────────────
const RatingSection = ()=>{
    const [hoveredStar, setHoveredStar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedStar, setSelectedStar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasVoted, setHasVoted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const averageRating = 4.43;
    const totalVotes = 31869;
    const handleStarClick = (star)=>{
        if (!hasVoted) {
            setSelectedStar(star);
            setHasVoted(true);
        }
    };
    const getStarFill = (index)=>{
        if (hoveredStar !== null && !hasVoted) {
            return index <= hoveredStar ? '#FFB800' : '#D9D9D9';
        }
        if (selectedStar !== null) {
            return index <= selectedStar ? '#FFB800' : '#D9D9D9';
        }
        return '#D9D9D9';
    };
    // ─── INLINE STYLES ───────────────────────────────────────
    const styles = {
        section: {
            width: '100%',
            backgroundColor: '#FFFFFF',
            padding: '64px 0 72px',
            fontFamily: "'Poppins', sans-serif"
        },
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        },
        heading: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '1.35',
            color: '#314259',
            margin: '0 0 8px 0'
        },
        subtitle: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '1.6',
            color: '#787878',
            margin: '0 0 28px 0'
        },
        starsRow: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '28px'
        },
        starBtn: {
            background: 'none',
            border: 'none',
            padding: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease'
        },
        ratingInfo: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px'
        },
        ratingNumber: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: '44px',
            lineHeight: '1',
            color: '#314259',
            margin: 0
        },
        ratingOutOf: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '1',
            color: '#787878',
            margin: '0 0 4px 0'
        },
        voteCount: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#9CA3AF',
            margin: 0
        },
        thankYou: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: '15px',
            color: '#22C55E',
            margin: '16px 0 0 0',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
        },
        // ── Divider line ──
        divider: {
            width: '60px',
            height: '3px',
            borderRadius: '2px',
            backgroundColor: '#ED1A3B',
            margin: '0 0 28px 0'
        },
        // ── Mini stars for display rating ──
        miniStarsRow: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3px',
            marginBottom: '6px'
        }
    };
    // ─── STAR SVG ────────────────────────────────────────────
    const StarSVG = ({ fill, size = 40 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: fill,
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            }, void 0, false, {
                fileName: "[project]/app/components/rating.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/rating.tsx",
            lineNumber: 149,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    // ── Mini filled stars for the average display ──
    const renderMiniStars = ()=>{
        const stars = [];
        for(let i = 1; i <= 5; i++){
            const fillColor = i <= Math.floor(averageRating) ? '#FFB800' : i - averageRating < 1 ? '#FFB800' : '#D9D9D9';
            stars.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StarSVG, {
                fill: fillColor,
                size: 18
            }, i, false, {
                fileName: "[project]/app/components/rating.tsx",
                lineNumber: 170,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)));
        }
        return stars;
    };
    // ─── RESPONSIVE CSS ──────────────────────────────────────
    const responsiveCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    /* Mobile defaults */
    .rating-heading {
      font-size: 24px !important;
      margin-bottom: 6px !important;
    }
    .rating-subtitle {
      font-size: 14px !important;
      margin-bottom: 22px !important;
    }
    .rating-star-btn {
      padding: 3px !important;
    }
    .rating-star-btn svg {
      width: 34px !important;
      height: 34px !important;
    }
    .rating-stars-row {
      gap: 6px !important;
      margin-bottom: 24px !important;
    }
    .rating-number {
      font-size: 36px !important;
    }
    .rating-out-of {
      font-size: 14px !important;
    }
    .rating-vote-count {
      font-size: 13px !important;
    }
    .rating-divider {
      margin-bottom: 22px !important;
    }

    /* Hover effects */
    .rating-star-btn:hover {
      transform: scale(1.15) !important;
    }
    .rating-star-btn:active {
      transform: scale(0.95) !important;
    }

    /* Tablet (600px+) */
    @media (min-width: 600px) {
      .rating-heading {
        font-size: 28px !important;
      }
      .rating-subtitle {
        font-size: 15px !important;
        margin-bottom: 26px !important;
      }
      .rating-star-btn svg {
        width: 38px !important;
        height: 38px !important;
      }
      .rating-stars-row {
        gap: 8px !important;
        margin-bottom: 28px !important;
      }
      .rating-number {
        font-size: 40px !important;
      }
    }

    /* Desktop (960px+) */
    @media (min-width: 960px) {
      .rating-heading {
        font-size: 32px !important;
      }
      .rating-star-btn svg {
        width: 42px !important;
        height: 42px !important;
      }
      .rating-stars-row {
        gap: 10px !important;
      }
      .rating-number {
        font-size: 44px !important;
      }
    }

    /* Large Desktop (1200px+) */
    @media (min-width: 1200px) {
      .rating-heading {
        font-size: 36px !important;
      }
      .rating-star-btn svg {
        width: 46px !important;
        height: 46px !important;
      }
      .rating-stars-row {
        gap: 12px !important;
      }
      .rating-number {
        font-size: 48px !important;
      }
    }
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: responsiveCSS
            }, void 0, false, {
                fileName: "[project]/app/components/rating.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: styles.section,
                "aria-label": "Rate Vyapar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.container,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "rating-heading",
                            style: styles.heading,
                            children: "How Useful is Vyapar for Your Business?"
                        }, void 0, false, {
                            fileName: "[project]/app/components/rating.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "rating-subtitle",
                            style: styles.subtitle,
                            children: "Click on a star to rate it!"
                        }, void 0, false, {
                            fileName: "[project]/app/components/rating.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rating-divider",
                            style: styles.divider
                        }, void 0, false, {
                            fileName: "[project]/app/components/rating.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rating-stars-row",
                            style: styles.starsRow,
                            children: [
                                1,
                                2,
                                3,
                                4,
                                5
                            ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rating-star-btn",
                                    style: styles.starBtn,
                                    onClick: ()=>handleStarClick(star),
                                    onMouseEnter: ()=>{
                                        if (!hasVoted) setHoveredStar(star);
                                    },
                                    onMouseLeave: ()=>{
                                        if (!hasVoted) setHoveredStar(null);
                                    },
                                    "aria-label": `Rate ${star} star${star > 1 ? 's' : ''}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StarSVG, {
                                        fill: getStarFill(star)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/rating.tsx",
                                        lineNumber: 312,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, star, false, {
                                    fileName: "[project]/app/components/rating.tsx",
                                    lineNumber: 299,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/components/rating.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        hasVoted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: styles.thankYou,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#22C55E",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "20 6 9 17 4 12"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/rating.tsx",
                                        lineNumber: 330,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/rating.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Thank you for your rating!"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/rating.tsx",
                            lineNumber: 319,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.ratingInfo,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.miniStarsRow,
                                    children: renderMiniStars()
                                }, void 0, false, {
                                    fileName: "[project]/app/components/rating.tsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "rating-number",
                                    style: styles.ratingNumber,
                                    children: averageRating
                                }, void 0, false, {
                                    fileName: "[project]/app/components/rating.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "rating-out-of",
                                    style: styles.ratingOutOf,
                                    children: "/ 5"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/rating.tsx",
                                    lineNumber: 347,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "rating-vote-count",
                                    style: styles.voteCount,
                                    children: [
                                        "Vote count:",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontWeight: 600,
                                                color: '#314259'
                                            },
                                            children: totalVotes.toLocaleString('en-IN')
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/rating.tsx",
                                            lineNumber: 354,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/rating.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/rating.tsx",
                            lineNumber: 337,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/rating.tsx",
                    lineNumber: 282,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/rating.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = RatingSection;
}),
];

//# sourceMappingURL=app_components_2ec199c6._.js.map