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
];

//# sourceMappingURL=app_components_Hero_tsx_2a1ba6e5._.js.map