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
            justifyContent: 'center'
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
                lineNumber: 196,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
                                                lineNumber: 207,
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
                                                lineNumber: 210,
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
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Hero.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "hero-description",
                                        style: styles.description,
                                        children: "Manage your business professionally with Vyapar, India's leading small business software for billing, inventory, and accounting. Join 1 Cr+ satisfied SMEs in India who trust Vyapar."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Hero.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hero-cta",
                                        style: styles.ctaButton,
                                        onMouseEnter: ()=>setIsBtnHovered(true),
                                        onMouseLeave: ()=>setIsBtnHovered(false),
                                        children: "Download Vyapar Now!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Hero.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Hero.tsx",
                                lineNumber: 203,
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
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Hero.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Hero.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/Hero.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Hero.tsx",
                lineNumber: 198,
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
                lineNumber: 61,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 20h6",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 70,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 16v4",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 76,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Slider.tsx",
        lineNumber: 60,
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
                lineNumber: 87,
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
                lineNumber: 88,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.5 18c.8-2.5 2.7-3.8 4.5-3.8s3.7 1.3 4.5 3.8",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 89,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.5 17.8c.5-1.8 1.8-2.8 3.3-2.8 1.1 0 2.2.5 3 1.7",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 95,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Slider.tsx",
        lineNumber: 86,
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
        description: 'Mobile App',
        Icon: PhoneIcon
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
                lineNumber: 231,
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
                                            lineNumber: 243,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Slider.tsx",
                                        lineNumber: 242,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: styles.title,
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Slider.tsx",
                                        lineNumber: 246,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: styles.description,
                                        children: description
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Slider.tsx",
                                        lineNumber: 247,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, title, true, {
                                fileName: "[project]/app/components/Slider.tsx",
                                lineNumber: 237,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Slider.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/Slider.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Slider.tsx",
                lineNumber: 233,
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
                lineNumber: 396,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
                                            lineNumber: 412,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Data.tsx",
                                        lineNumber: 411,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Data.tsx",
                                    lineNumber: 410,
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
                                            lineNumber: 429,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: styles.description,
                                            children: feature.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Data.tsx",
                                            lineNumber: 433,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
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
                                                    lineNumber: 442,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Read more"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Data.tsx",
                                            lineNumber: 436,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Data.tsx",
                                    lineNumber: 428,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, feature.id, true, {
                            fileName: "[project]/app/components/Data.tsx",
                            lineNumber: 404,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/app/components/Data.tsx",
                    lineNumber: 399,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Data.tsx",
                lineNumber: 398,
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
                                    lineNumber: 474,
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
                                    lineNumber: 481,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Data.tsx",
                            lineNumber: 473,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "feature-modal-body",
                            style: styles.modalBody,
                            children: openFeature.readMore
                        }, void 0, false, {
                            fileName: "[project]/app/components/Data.tsx",
                            lineNumber: 492,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Data.tsx",
                    lineNumber: 471,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Data.tsx",
                lineNumber: 462,
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
];

//# sourceMappingURL=app_components_db5d5399._.js.map