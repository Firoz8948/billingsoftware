module.exports = [
"[project]/app/components/PricingSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// components/PricingSection.tsx
'use client';
;
;
// ─── DATA ──────────────────────────────────────────────────
const sharedFeatureNames = [
    'Sync data across devices',
    'Create multiple companies',
    'Generate E-way Bills',
    'Remove advertisement on invoices',
    'Set multiple pricing for items',
    'Update Items in bulk',
    'Export data to Tally',
    'Restore deleted transactions',
    'Combine multiple orders/challans into one sale',
    'Accounting Module',
    'Partywise Profit and Loss Report',
    'WhatsApp Connect',
    'Google Profile Manager'
];
const mobileFeatureNames = [
    'Sync data across devices',
    'Create multiple companies',
    'Remove advertisement on invoices',
    'Set multiple pricing for items',
    'Restore deleted transactions',
    'Partywise Profit and Loss Report'
];
const pricingData = {
    desktopMobile: {
        '1year': [
            {
                tier: 'Silver',
                originalPrice: 7499,
                salePrice: 4399,
                perMonth: '366.58',
                features: [
                    {
                        name: 'Sync data across devices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Create multiple companies',
                        silver: '3 companies',
                        gold: '5 companies'
                    },
                    {
                        name: 'Generate E-way Bills',
                        silver: '10 per month',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Remove advertisement on invoices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Set multiple pricing for items',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Update Items in bulk',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Export data to Tally',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Restore deleted transactions',
                        silver: '2 transactions',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Combine multiple orders/challans into one sale',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Accounting Module',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Partywise Profit and Loss Report',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'WhatsApp Connect',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Google Profile Manager',
                        silver: true,
                        gold: true
                    }
                ],
                moreCount: 16
            },
            {
                tier: 'Gold',
                originalPrice: 9099,
                salePrice: 4799,
                perMonth: '399.92',
                popular: true,
                features: [
                    {
                        name: 'Sync data across devices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Create multiple companies',
                        silver: '3 companies',
                        gold: '5 companies'
                    },
                    {
                        name: 'Generate E-way Bills',
                        silver: '10 per month',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Remove advertisement on invoices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Set multiple pricing for items',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Update Items in bulk',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Export data to Tally',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Restore deleted transactions',
                        silver: '2 transactions',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Combine multiple orders/challans into one sale',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Accounting Module',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Partywise Profit and Loss Report',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'WhatsApp Connect',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Google Profile Manager',
                        silver: true,
                        gold: true
                    }
                ],
                moreCount: 16
            }
        ],
        '3years': [
            {
                tier: 'Silver',
                originalPrice: 16299,
                salePrice: 9599,
                perMonth: '266.64',
                features: [
                    {
                        name: 'Sync data across devices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Create multiple companies',
                        silver: '3 companies',
                        gold: '5 companies'
                    },
                    {
                        name: 'Generate E-way Bills',
                        silver: '10 per month',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Remove advertisement on invoices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Set multiple pricing for items',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Update Items in bulk',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Export data to Tally',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Restore deleted transactions',
                        silver: '2 transactions',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Combine multiple orders/challans into one sale',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Accounting Module',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Partywise Profit and Loss Report',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'WhatsApp Connect',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Google Profile Manager',
                        silver: true,
                        gold: true
                    }
                ],
                moreCount: 16
            },
            {
                tier: 'Gold',
                originalPrice: 18699,
                salePrice: 9899,
                perMonth: '274.97',
                popular: true,
                features: [
                    {
                        name: 'Sync data across devices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Create multiple companies',
                        silver: '3 companies',
                        gold: '5 companies'
                    },
                    {
                        name: 'Generate E-way Bills',
                        silver: '10 per month',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Remove advertisement on invoices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Set multiple pricing for items',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Update Items in bulk',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Export data to Tally',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Restore deleted transactions',
                        silver: '2 transactions',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Combine multiple orders/challans into one sale',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Accounting Module',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Partywise Profit and Loss Report',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'WhatsApp Connect',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Google Profile Manager',
                        silver: true,
                        gold: true
                    }
                ],
                moreCount: 16
            }
        ]
    },
    desktop: {
        '1year': [
            {
                tier: 'Silver',
                originalPrice: 6399,
                salePrice: 3799,
                perMonth: '316.58',
                features: [
                    {
                        name: 'Sync data across devices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Create multiple companies',
                        silver: '3 companies',
                        gold: '5 companies'
                    },
                    {
                        name: 'Generate E-way Bills',
                        silver: '10 per month',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Remove advertisement on invoices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Set multiple pricing for items',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Update Items in bulk',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Export data to Tally',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Restore deleted transactions',
                        silver: '2 transactions',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Combine multiple orders/challans into one sale',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Accounting Module',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Partywise Profit and Loss Report',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'WhatsApp Connect',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Google Profile Manager',
                        silver: true,
                        gold: true
                    }
                ],
                moreCount: 16
            },
            {
                tier: 'Gold',
                originalPrice: 7699,
                salePrice: 4099,
                perMonth: '341.58',
                popular: true,
                features: [
                    {
                        name: 'Sync data across devices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Create multiple companies',
                        silver: '3 companies',
                        gold: '5 companies'
                    },
                    {
                        name: 'Generate E-way Bills',
                        silver: '10 per month',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Remove advertisement on invoices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Set multiple pricing for items',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Update Items in bulk',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Export data to Tally',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Restore deleted transactions',
                        silver: '2 transactions',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Combine multiple orders/challans into one sale',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Accounting Module',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Partywise Profit and Loss Report',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'WhatsApp Connect',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Google Profile Manager',
                        silver: true,
                        gold: true
                    }
                ],
                moreCount: 16
            }
        ],
        '3years': [
            {
                tier: 'Silver',
                originalPrice: 14699,
                salePrice: 8599,
                perMonth: '238.86',
                features: [
                    {
                        name: 'Sync data across devices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Create multiple companies',
                        silver: '3 companies',
                        gold: '5 companies'
                    },
                    {
                        name: 'Generate E-way Bills',
                        silver: '10 per month',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Remove advertisement on invoices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Set multiple pricing for items',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Update Items in bulk',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Export data to Tally',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Restore deleted transactions',
                        silver: '2 transactions',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Combine multiple orders/challans into one sale',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Accounting Module',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Partywise Profit and Loss Report',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'WhatsApp Connect',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Google Profile Manager',
                        silver: true,
                        gold: true
                    }
                ],
                moreCount: 16
            },
            {
                tier: 'Gold',
                originalPrice: 17099,
                salePrice: 9099,
                perMonth: '252.75',
                popular: true,
                features: [
                    {
                        name: 'Sync data across devices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Create multiple companies',
                        silver: '3 companies',
                        gold: '5 companies'
                    },
                    {
                        name: 'Generate E-way Bills',
                        silver: '10 per month',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Remove advertisement on invoices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Set multiple pricing for items',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Update Items in bulk',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Export data to Tally',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Restore deleted transactions',
                        silver: '2 transactions',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Combine multiple orders/challans into one sale',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Accounting Module',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Partywise Profit and Loss Report',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'WhatsApp Connect',
                        silver: false,
                        gold: true
                    },
                    {
                        name: 'Google Profile Manager',
                        silver: true,
                        gold: true
                    }
                ],
                moreCount: 16
            }
        ]
    },
    mobile: {
        '1year': [
            {
                tier: 'Silver',
                originalPrice: 1199,
                salePrice: 699,
                perMonth: '58.25',
                features: [
                    {
                        name: 'Sync data across devices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Create multiple companies',
                        silver: '3 companies',
                        gold: '5 companies'
                    },
                    {
                        name: 'Remove advertisement on invoices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Set multiple pricing for items',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Restore deleted transactions',
                        silver: '2 transactions',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Partywise Profit and Loss Report',
                        silver: false,
                        gold: true
                    }
                ],
                moreCount: 16
            },
            {
                tier: 'Gold',
                originalPrice: 1399,
                salePrice: 799,
                perMonth: '66.58',
                popular: true,
                features: [
                    {
                        name: 'Sync data across devices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Create multiple companies',
                        silver: '3 companies',
                        gold: '5 companies'
                    },
                    {
                        name: 'Remove advertisement on invoices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Set multiple pricing for items',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Restore deleted transactions',
                        silver: '2 transactions',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Partywise Profit and Loss Report',
                        silver: false,
                        gold: true
                    }
                ],
                moreCount: 16
            }
        ],
        '3years': [
            {
                tier: 'Silver',
                originalPrice: 2999,
                salePrice: 1799,
                perMonth: '49.97',
                features: [
                    {
                        name: 'Sync data across devices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Create multiple companies',
                        silver: '3 companies',
                        gold: '5 companies'
                    },
                    {
                        name: 'Remove advertisement on invoices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Set multiple pricing for items',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Restore deleted transactions',
                        silver: '2 transactions',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Partywise Profit and Loss Report',
                        silver: false,
                        gold: true
                    }
                ],
                moreCount: 16
            },
            {
                tier: 'Gold',
                originalPrice: 3499,
                salePrice: 1999,
                perMonth: '55.53',
                popular: true,
                features: [
                    {
                        name: 'Sync data across devices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Create multiple companies',
                        silver: '3 companies',
                        gold: '5 companies'
                    },
                    {
                        name: 'Remove advertisement on invoices',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Set multiple pricing for items',
                        silver: true,
                        gold: true
                    },
                    {
                        name: 'Restore deleted transactions',
                        silver: '2 transactions',
                        gold: 'Unlimited'
                    },
                    {
                        name: 'Partywise Profit and Loss Report',
                        silver: false,
                        gold: true
                    }
                ],
                moreCount: 16
            }
        ]
    }
};
// ─── ICONS ─────────────────────────────────────────────────
const TickIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10",
                cy: "10",
                r: "10",
                fill: "#E8F5E9"
            }, void 0, false, {
                fileName: "[project]/app/components/PricingSection.tsx",
                lineNumber: 323,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 10.5L8.5 13L14 7.5",
                stroke: "#2E7D32",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/PricingSection.tsx",
                lineNumber: 324,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PricingSection.tsx",
        lineNumber: 322,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const CrossIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10",
                cy: "10",
                r: "10",
                fill: "#FFEBEE"
            }, void 0, false, {
                fileName: "[project]/app/components/PricingSection.tsx",
                lineNumber: 330,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 7L13 13M13 7L7 13",
                stroke: "#C62828",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/PricingSection.tsx",
                lineNumber: 331,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PricingSection.tsx",
        lineNumber: 329,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const DesktopMobileIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
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
                fileName: "[project]/app/components/PricingSection.tsx",
                lineNumber: 337,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "21",
                x2: "16",
                y2: "21"
            }, void 0, false, {
                fileName: "[project]/app/components/PricingSection.tsx",
                lineNumber: 337,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "17",
                x2: "12",
                y2: "21"
            }, void 0, false, {
                fileName: "[project]/app/components/PricingSection.tsx",
                lineNumber: 337,
                columnNumber: 101
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PricingSection.tsx",
        lineNumber: 336,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const DesktopIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
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
                fileName: "[project]/app/components/PricingSection.tsx",
                lineNumber: 343,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "21",
                x2: "16",
                y2: "21"
            }, void 0, false, {
                fileName: "[project]/app/components/PricingSection.tsx",
                lineNumber: 343,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "17",
                x2: "12",
                y2: "21"
            }, void 0, false, {
                fileName: "[project]/app/components/PricingSection.tsx",
                lineNumber: 343,
                columnNumber: 101
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PricingSection.tsx",
        lineNumber: 342,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MobileIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "5",
                y: "2",
                width: "14",
                height: "20",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/app/components/PricingSection.tsx",
                lineNumber: 349,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "18",
                x2: "12.01",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/app/components/PricingSection.tsx",
                lineNumber: 349,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PricingSection.tsx",
        lineNumber: 348,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// ─── COMPONENT ─────────────────────────────────────────────
const PricingSection = ()=>{
    const [platform, setPlatform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('desktopMobile');
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('1year');
    const [showCompare, setShowCompare] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedCards, setExpandedCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const plans = pricingData[platform][duration];
    const silverPlan = plans.find((p)=>p.tier === 'Silver');
    const goldPlan = plans.find((p)=>p.tier === 'Gold');
    // features for comparison
    const featureNames = platform === 'mobile' ? mobileFeatureNames : sharedFeatureNames;
    // Lock body scroll when compare modal is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showCompare) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return ()=>{
            document.body.style.overflow = '';
        };
    }, [
        showCompare
    ]);
    // Close on Escape
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e.key === 'Escape' && showCompare) setShowCompare(false);
    }, [
        showCompare
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown);
    }, [
        handleKeyDown
    ]);
    const toggleExpand = (tier)=>{
        setExpandedCards((prev)=>({
                ...prev,
                [tier]: !prev[tier]
            }));
    };
    const getFeatureValue = (plan, featureName)=>{
        const f = plan.features.find((ft)=>ft.name === featureName);
        if (!f) return false;
        return plan.tier === 'Silver' ? f.silver : f.gold;
    };
    const renderFeatureValue = (value)=>{
        if (value === true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TickIcon, {}, void 0, false, {
            fileName: "[project]/app/components/PricingSection.tsx",
            lineNumber: 398,
            columnNumber: 32
        }, ("TURBOPACK compile-time value", void 0));
        if (value === false) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CrossIcon, {}, void 0, false, {
            fileName: "[project]/app/components/PricingSection.tsx",
            lineNumber: 399,
            columnNumber: 33
        }, ("TURBOPACK compile-time value", void 0));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TickIcon, {}, void 0, false, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 402,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: '12.5px',
                        color: '#555',
                        fontWeight: 500
                    },
                    children: value
                }, void 0, false, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 403,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/PricingSection.tsx",
            lineNumber: 401,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    const discount = (original, sale)=>Math.round((original - sale) / original * 100);
    // ─── CSS ──────────────────────────────────────────────────
    const css = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    @keyframes pricingFadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes pricingSlideUp {
      from { opacity: 0; transform: translateY(30px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    .pricing-section * {
      box-sizing: border-box;
    }

    .pricing-section {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(180deg, #FFF5F7 0%, #FFFFFF 40%);
      padding: 60px 0 80px;
      min-height: 100vh;
    }

    .pricing-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .pricing-heading {
      font-family: 'Poppins', sans-serif;
      font-weight: 800;
      font-size: 28px;
      line-height: 1.3;
      color: #314259;
      text-align: center;
      margin: 0 0 8px 0;
    }

    .pricing-subheading {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 15px;
      color: #787878;
      text-align: center;
      margin: 0 0 36px 0;
      line-height: 1.6;
    }

    /* ── Platform Tabs ── */
    .pricing-platform-tabs {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-bottom: 24px;
      flex-wrap: wrap;
    }

    .pricing-platform-tab {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 13.5px;
      padding: 10px 20px;
      border-radius: 10px;
      border: 2px solid #E8E8E8;
      background: #FFFFFF;
      color: #555555;
      cursor: pointer;
      transition: all 0.25s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
    }

    .pricing-platform-tab:hover {
      border-color: #ED1A3B;
      color: #ED1A3B;
    }

    .pricing-platform-tab.active {
      border-color: #ED1A3B;
      background: #FFF5F7;
      color: #ED1A3B;
    }

    /* ── Duration Toggle ── */
    .pricing-duration-toggle {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
    }

    .pricing-toggle-wrapper {
      display: flex;
      background: #F5F6F8;
      border-radius: 12px;
      padding: 4px;
      gap: 4px;
    }

    .pricing-toggle-btn {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 14px;
      padding: 10px 28px;
      border-radius: 10px;
      border: none;
      background: transparent;
      color: #787878;
      cursor: pointer;
      transition: all 0.25s ease;
      position: relative;
    }

    .pricing-toggle-btn.active {
      background: #FFFFFF;
      color: #314259;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .pricing-toggle-btn .save-badge {
      position: absolute;
      top: -8px;
      right: -8px;
      background: #ED1A3B;
      color: #fff;
      font-size: 10px;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 20px;
      line-height: 1.4;
    }

    /* ── Cards Grid ── */
    .pricing-cards-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
      margin-bottom: 32px;
    }

    @media (min-width: 700px) {
      .pricing-cards-grid {
        grid-template-columns: 1fr 1fr;
        gap: 28px;
      }
    }

    /* ── Plan Card ── */
    .pricing-card {
      position: relative;
      background: #FFFFFF;
      border-radius: 20px;
      border: 2px solid #EEEEEE;
      padding: 32px 28px 28px;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
    }

    .pricing-card:hover {
      border-color: #F0C0C8;
      box-shadow: 0 8px 32px rgba(237, 26, 59, 0.08);
      transform: translateY(-2px);
    }

    .pricing-card.popular {
      border-color: #ED1A3B;
      box-shadow: 0 8px 40px rgba(237, 26, 59, 0.12);
    }

    .pricing-card.popular:hover {
      box-shadow: 0 12px 48px rgba(237, 26, 59, 0.16);
    }

    .popular-badge {
      position: absolute;
      top: -13px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #ED1A3B 0%, #FF4D6A 100%);
      color: #FFFFFF;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 12px;
      padding: 4px 20px;
      border-radius: 20px;
      white-space: nowrap;
      letter-spacing: 0.5px;
    }

    .card-tier-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 8px;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 13px;
      margin-bottom: 16px;
      width: fit-content;
    }

    .card-tier-badge.silver {
      background: #F5F5F5;
      color: #888;
    }

    .card-tier-badge.gold {
      background: #FFF8E1;
      color: #F9A825;
    }

    .tier-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .tier-dot.silver { background: #BDBDBD; }
    .tier-dot.gold { background: #F9A825; }

    .card-plan-name {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 22px;
      color: #314259;
      margin: 0 0 16px 0;
    }

    .card-pricing {
      margin-bottom: 6px;
    }

    .card-original-price {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: #AAAAAA;
      text-decoration: line-through;
      margin-right: 10px;
    }

    .card-discount-badge {
      display: inline-block;
      background: #FFEBEE;
      color: #ED1A3B;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 12px;
      padding: 2px 8px;
      border-radius: 6px;
    }

    .card-sale-price {
      font-family: 'Poppins', sans-serif;
      font-weight: 800;
      font-size: 40px;
      color: #314259;
      margin: 4px 0 2px 0;
      line-height: 1.1;
    }

    .card-sale-price .currency {
      font-size: 24px;
      font-weight: 700;
      vertical-align: super;
    }

    .card-per-month {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 13.5px;
      color: #787878;
      margin: 0 0 20px 0;
    }

    .card-cta-btn {
      width: 100%;
      padding: 14px 0;
      border-radius: 12px;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 15px;
      border: none;
      cursor: pointer;
      transition: all 0.25s ease;
      margin-bottom: 24px;
    }

    .card-cta-btn.silver-btn {
      background: #FFFFFF;
      color: #ED1A3B;
      border: 2px solid #ED1A3B;
    }

    .card-cta-btn.silver-btn:hover {
      background: #FFF5F7;
    }

    .card-cta-btn.gold-btn {
      background: linear-gradient(135deg, #ED1A3B 0%, #FF4D6A 100%);
      color: #FFFFFF;
      border: 2px solid transparent;
    }

    .card-cta-btn.gold-btn:hover {
      box-shadow: 0 4px 16px rgba(237, 26, 59, 0.3);
      transform: translateY(-1px);
    }

    .card-divider {
      height: 1px;
      background: #F0F0F0;
      margin: 0 0 20px 0;
    }

    .card-features-title {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 13px;
      color: #314259;
      margin: 0 0 14px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .card-feature-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 7px 0;
    }

    .card-feature-name {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 13.5px;
      color: #555555;
      line-height: 1.5;
    }

    .card-feature-name .feature-detail {
      color: #888;
      font-size: 12px;
    }

    .card-more-features {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 13.5px;
      color: #ED1A3B;
      cursor: pointer;
      margin-top: 10px;
      background: none;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: opacity 0.2s ease;
    }

    .card-more-features:hover {
      opacity: 0.8;
    }

    /* ── Compare Button ── */
    .pricing-compare-section {
      display: flex;
      justify-content: center;
      margin-top: 12px;
    }

    .pricing-compare-btn {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 15px;
      padding: 14px 36px;
      border-radius: 12px;
      border: 2px solid #314259;
      background: #FFFFFF;
      color: #314259;
      cursor: pointer;
      transition: all 0.25s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .pricing-compare-btn:hover {
      background: #314259;
      color: #FFFFFF;
    }

    /* ── Compare Modal ── */
    .compare-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.55);
      z-index: 9998;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      animation: pricingFadeIn 0.25s ease;
    }

    .compare-modal {
      position: relative;
      background: #FFFFFF;
      border-radius: 20px;
      width: 100%;
      max-width: 800px;
      max-height: 85vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.2);
      animation: pricingSlideUp 0.3s ease;
      overflow: hidden;
    }

    .compare-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 28px 18px;
      border-bottom: 1px solid #F0F0F0;
      flex-shrink: 0;
    }

    .compare-title {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 20px;
      color: #314259;
      margin: 0;
    }

    .compare-close-btn {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: none;
      background: #F5F6F8;
      color: #555;
      font-size: 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: all 0.2s ease;
    }

    .compare-close-btn:hover {
      background: #EBEBEB;
      color: #ED1A3B;
    }

    .compare-body {
      padding: 0;
      overflow-y: auto;
      flex: 1;
    }

    .compare-body::-webkit-scrollbar {
      width: 6px;
    }
    .compare-body::-webkit-scrollbar-track {
      background: transparent;
    }
    .compare-body::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 3px;
    }

    /* ── Compare Table ── */
    .compare-table {
      width: 100%;
      border-collapse: collapse;
    }

    .compare-table thead th {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 14px;
      color: #314259;
      padding: 16px 20px;
      text-align: center;
      background: #FAFAFA;
      border-bottom: 2px solid #F0F0F0;
      position: sticky;
      top: 0;
      z-index: 2;
    }

    .compare-table thead th:first-child {
      text-align: left;
      width: 45%;
    }

    .compare-table tbody td {
      font-family: 'Poppins', sans-serif;
      font-size: 13.5px;
      padding: 14px 20px;
      border-bottom: 1px solid #F5F5F5;
      color: #555;
      text-align: center;
      vertical-align: middle;
    }

    .compare-table tbody td:first-child {
      text-align: left;
      font-weight: 500;
      color: #444;
    }

    .compare-table tbody tr:hover {
      background: #FAFAFA;
    }

    .compare-table-price-row td {
      padding: 20px !important;
      background: #FFF5F7 !important;
      border-bottom: 2px solid #F0F0F0 !important;
    }

    .compare-price-cell {
      text-align: center;
    }

    .compare-price-original {
      font-size: 13px;
      color: #AAA;
      text-decoration: line-through;
      margin-bottom: 2px;
    }

    .compare-price-sale {
      font-family: 'Poppins', sans-serif;
      font-weight: 800;
      font-size: 22px;
      color: #314259;
    }

    .compare-price-sale .currency {
      font-size: 14px;
      font-weight: 700;
    }

    .compare-price-permonth {
      font-size: 12px;
      color: #888;
      margin-top: 2px;
    }

    /* ── Responsive ── */
    @media (min-width: 600px) {
      .pricing-heading {
        font-size: 34px;
      }
      .pricing-subheading {
        font-size: 16px;
      }
    }

    @media (min-width: 960px) {
      .pricing-heading {
        font-size: 42px;
      }
    }

    @media (max-width: 600px) {
      .pricing-card {
        padding: 28px 22px 24px;
      }
      .card-sale-price {
        font-size: 34px;
      }
      .compare-modal {
        max-height: 92vh;
        border-radius: 16px;
      }
      .compare-header {
        padding: 20px 20px 14px;
      }
      .compare-title {
        font-size: 17px;
      }
      .compare-table thead th {
        font-size: 12px;
        padding: 12px 12px;
      }
      .compare-table tbody td {
        font-size: 12.5px;
        padding: 12px 12px;
      }
      .compare-price-sale {
        font-size: 18px;
      }
      .pricing-toggle-btn {
        font-size: 13px;
        padding: 9px 20px;
      }
    }
  `;
    const renderFeatureForCard = (plan, feature)=>{
        const val = plan.tier === 'Silver' ? feature.silver : feature.gold;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card-feature-row",
            children: [
                val === true ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TickIcon, {}, void 0, false, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 1025,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0)) : val === false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CrossIcon, {}, void 0, false, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 1025,
                    columnNumber: 56
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TickIcon, {}, void 0, false, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 1025,
                    columnNumber: 72
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "card-feature-name",
                    children: [
                        feature.name,
                        typeof val === 'string' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "feature-detail",
                            children: [
                                " (",
                                val,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PricingSection.tsx",
                            lineNumber: 1029,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 1026,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, feature.name, true, {
            fileName: "[project]/app/components/PricingSection.tsx",
            lineNumber: 1024,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    const renderPlanCard = (plan)=>{
        const tierKey = `${platform}-${duration}-${plan.tier}`;
        const isExpanded = expandedCards[tierKey] || false;
        const visibleFeatures = isExpanded ? plan.features : plan.features.slice(0, 6);
        const hasMore = plan.features.length > 6 || plan.moreCount > 0;
        const disc = discount(plan.originalPrice, plan.salePrice);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `pricing-card ${plan.popular ? 'popular' : ''}`,
            children: [
                plan.popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "popular-badge",
                    children: "MOST POPULAR"
                }, void 0, false, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 1045,
                    columnNumber: 26
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `card-tier-badge ${plan.tier.toLowerCase()}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `tier-dot ${plan.tier.toLowerCase()}`
                        }, void 0, false, {
                            fileName: "[project]/app/components/PricingSection.tsx",
                            lineNumber: 1048,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        plan.tier
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 1047,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "card-plan-name",
                    children: [
                        "Vyapar ",
                        plan.tier
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 1052,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-pricing",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "card-original-price",
                            children: [
                                "₹",
                                plan.originalPrice.toLocaleString()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PricingSection.tsx",
                            lineNumber: 1055,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "card-discount-badge",
                            children: [
                                disc,
                                "% OFF"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PricingSection.tsx",
                            lineNumber: 1056,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 1054,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-sale-price",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "currency",
                            children: "₹"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PricingSection.tsx",
                            lineNumber: 1060,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        plan.salePrice.toLocaleString()
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 1059,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "card-per-month",
                    children: [
                        "Only ₹",
                        plan.perMonth,
                        " per month"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 1064,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `card-cta-btn ${plan.tier === 'Gold' ? 'gold-btn' : 'silver-btn'}`,
                    children: [
                        "Get Vyapar ",
                        plan.tier
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 1066,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-divider"
                }, void 0, false, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 1070,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "card-features-title",
                    children: "What's Included"
                }, void 0, false, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 1072,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                visibleFeatures.map((f)=>renderFeatureForCard(plan, f)),
                hasMore && !isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "card-more-features",
                    onClick: ()=>toggleExpand(tierKey),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: '16px',
                                lineHeight: 1
                            },
                            children: "+"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PricingSection.tsx",
                            lineNumber: 1078,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        plan.moreCount > 0 ? `${plan.moreCount} More Features` : 'Show All Features'
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 1077,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                isExpanded && plan.features.length > 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "card-more-features",
                    onClick: ()=>toggleExpand(tierKey),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: '16px',
                                lineHeight: 1
                            },
                            children: "−"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PricingSection.tsx",
                            lineNumber: 1085,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Show Less"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 1084,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, plan.tier, true, {
            fileName: "[project]/app/components/PricingSection.tsx",
            lineNumber: 1044,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: css
            }, void 0, false, {
                fileName: "[project]/app/components/PricingSection.tsx",
                lineNumber: 1095,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pricing-section",
                "aria-label": "Pricing Plans",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pricing-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "pricing-heading",
                            children: "Choose the Perfect Plan for Your Business"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PricingSection.tsx",
                            lineNumber: 1100,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "pricing-subheading",
                            children: "Simple, transparent pricing. No hidden fees. Start free and upgrade when you're ready."
                        }, void 0, false, {
                            fileName: "[project]/app/components/PricingSection.tsx",
                            lineNumber: 1101,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pricing-platform-tabs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `pricing-platform-tab ${platform === 'desktopMobile' ? 'active' : ''}`,
                                    onClick: ()=>setPlatform('desktopMobile'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopMobileIcon, {}, void 0, false, {
                                            fileName: "[project]/app/components/PricingSection.tsx",
                                            lineNumber: 1111,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Desktop + Mobile"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/PricingSection.tsx",
                                    lineNumber: 1107,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `pricing-platform-tab ${platform === 'desktop' ? 'active' : ''}`,
                                    onClick: ()=>setPlatform('desktop'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopIcon, {}, void 0, false, {
                                            fileName: "[project]/app/components/PricingSection.tsx",
                                            lineNumber: 1118,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Desktop"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/PricingSection.tsx",
                                    lineNumber: 1114,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `pricing-platform-tab ${platform === 'mobile' ? 'active' : ''}`,
                                    onClick: ()=>setPlatform('mobile'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileIcon, {}, void 0, false, {
                                            fileName: "[project]/app/components/PricingSection.tsx",
                                            lineNumber: 1125,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Mobile"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/PricingSection.tsx",
                                    lineNumber: 1121,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PricingSection.tsx",
                            lineNumber: 1106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pricing-duration-toggle",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pricing-toggle-wrapper",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `pricing-toggle-btn ${duration === '1year' ? 'active' : ''}`,
                                        onClick: ()=>setDuration('1year'),
                                        children: "1 Year"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PricingSection.tsx",
                                        lineNumber: 1133,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `pricing-toggle-btn ${duration === '3years' ? 'active' : ''}`,
                                        onClick: ()=>setDuration('3years'),
                                        children: [
                                            "3 Years",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "save-badge",
                                                children: "SAVE MORE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PricingSection.tsx",
                                                lineNumber: 1144,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/PricingSection.tsx",
                                        lineNumber: 1139,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/PricingSection.tsx",
                                lineNumber: 1132,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/PricingSection.tsx",
                            lineNumber: 1131,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pricing-cards-grid",
                            children: plans.map(renderPlanCard)
                        }, void 0, false, {
                            fileName: "[project]/app/components/PricingSection.tsx",
                            lineNumber: 1150,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pricing-compare-section",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "pricing-compare-btn",
                                onClick: ()=>setShowCompare(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "18",
                                                y1: "20",
                                                x2: "18",
                                                y2: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PricingSection.tsx",
                                                lineNumber: 1158,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "20",
                                                x2: "12",
                                                y2: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PricingSection.tsx",
                                                lineNumber: 1158,
                                                columnNumber: 57
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "6",
                                                y1: "20",
                                                x2: "6",
                                                y2: "14"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/PricingSection.tsx",
                                                lineNumber: 1158,
                                                columnNumber: 96
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/PricingSection.tsx",
                                        lineNumber: 1157,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Compare Plans"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/PricingSection.tsx",
                                lineNumber: 1156,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/PricingSection.tsx",
                            lineNumber: 1155,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 1098,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/PricingSection.tsx",
                lineNumber: 1097,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showCompare && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "compare-overlay",
                onClick: (e)=>{
                    if (e.target === e.currentTarget) setShowCompare(false);
                },
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "compare-modal-title",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "compare-modal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "compare-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: "compare-modal-title",
                                    className: "compare-title",
                                    children: "Compare Plans"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PricingSection.tsx",
                                    lineNumber: 1177,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "compare-close-btn",
                                    onClick: ()=>setShowCompare(false),
                                    "aria-label": "Close",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/PricingSection.tsx",
                                    lineNumber: 1178,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/PricingSection.tsx",
                            lineNumber: 1176,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "compare-body",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "compare-table",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Features"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/PricingSection.tsx",
                                                    lineNumber: 1186,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            gap: '4px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "tier-dot silver",
                                                                style: {
                                                                    width: 10,
                                                                    height: 10,
                                                                    borderRadius: '50%',
                                                                    background: '#BDBDBD',
                                                                    display: 'inline-block'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/PricingSection.tsx",
                                                                lineNumber: 1189,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Silver"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/PricingSection.tsx",
                                                        lineNumber: 1188,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/PricingSection.tsx",
                                                    lineNumber: 1187,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            gap: '4px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "tier-dot gold",
                                                                style: {
                                                                    width: 10,
                                                                    height: 10,
                                                                    borderRadius: '50%',
                                                                    background: '#F9A825',
                                                                    display: 'inline-block'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/PricingSection.tsx",
                                                                lineNumber: 1195,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Gold"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/PricingSection.tsx",
                                                        lineNumber: 1194,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/PricingSection.tsx",
                                                    lineNumber: 1193,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/PricingSection.tsx",
                                            lineNumber: 1185,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/PricingSection.tsx",
                                        lineNumber: 1184,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "compare-table-price-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            fontWeight: 700,
                                                            color: '#314259'
                                                        },
                                                        children: "Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PricingSection.tsx",
                                                        lineNumber: 1204,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "compare-price-cell",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "compare-price-original",
                                                                    children: [
                                                                        "₹",
                                                                        silverPlan.originalPrice.toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/PricingSection.tsx",
                                                                    lineNumber: 1207,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "compare-price-sale",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "currency",
                                                                            children: "₹"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/PricingSection.tsx",
                                                                            lineNumber: 1209,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        silverPlan.salePrice.toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/PricingSection.tsx",
                                                                    lineNumber: 1208,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "compare-price-permonth",
                                                                    children: [
                                                                        "₹",
                                                                        silverPlan.perMonth,
                                                                        "/mo"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/PricingSection.tsx",
                                                                    lineNumber: 1211,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/PricingSection.tsx",
                                                            lineNumber: 1206,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PricingSection.tsx",
                                                        lineNumber: 1205,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "compare-price-cell",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "compare-price-original",
                                                                    children: [
                                                                        "₹",
                                                                        goldPlan.originalPrice.toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/PricingSection.tsx",
                                                                    lineNumber: 1216,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "compare-price-sale",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "currency",
                                                                            children: "₹"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/PricingSection.tsx",
                                                                            lineNumber: 1218,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        goldPlan.salePrice.toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/PricingSection.tsx",
                                                                    lineNumber: 1217,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "compare-price-permonth",
                                                                    children: [
                                                                        "₹",
                                                                        goldPlan.perMonth,
                                                                        "/mo"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/PricingSection.tsx",
                                                                    lineNumber: 1220,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/PricingSection.tsx",
                                                            lineNumber: 1215,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/PricingSection.tsx",
                                                        lineNumber: 1214,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/PricingSection.tsx",
                                                lineNumber: 1203,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            featureNames.map((fname)=>{
                                                const silverVal = getFeatureValue(silverPlan, fname);
                                                const goldVal = getFeatureValue(goldPlan, fname);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: fname
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/PricingSection.tsx",
                                                            lineNumber: 1231,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: renderFeatureValue(silverVal)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/PricingSection.tsx",
                                                            lineNumber: 1232,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: renderFeatureValue(goldVal)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/PricingSection.tsx",
                                                            lineNumber: 1233,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, fname, true, {
                                                    fileName: "[project]/app/components/PricingSection.tsx",
                                                    lineNumber: 1230,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/PricingSection.tsx",
                                        lineNumber: 1201,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/PricingSection.tsx",
                                lineNumber: 1183,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/PricingSection.tsx",
                            lineNumber: 1182,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/PricingSection.tsx",
                    lineNumber: 1175,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/PricingSection.tsx",
                lineNumber: 1168,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = PricingSection;
}),
];

//# sourceMappingURL=app_components_PricingSection_tsx_19eb1671._.js.map