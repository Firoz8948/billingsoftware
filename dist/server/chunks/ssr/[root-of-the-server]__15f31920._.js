module.exports=[18622,(a,b,c)=>{b.exports=a.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},42602,(a,b,c)=>{"use strict";b.exports=a.r(18622)},87924,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].ReactJsxRuntime},72131,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].React},64690,a=>{"use strict";var b=a.i(87924),c=a.i(72131);a.s(["default",0,()=>{let[a,d]=(0,c.useState)(!1),[e,f]=(0,c.useState)(null),g=[{label:"Home",href:"/"},{label:"Pricing",href:"/pricing"},{label:"Contact Us",href:"https://wa.me/919699164131",external:!0}],h={header:{width:"100%",backgroundColor:"#ffffff",borderBottom:"1px solid #e5e7eb",boxShadow:"0 1px 3px rgba(0,0,0,0.1)",position:"sticky",top:0,zIndex:50,fontFamily:"Arial, Helvetica, sans-serif"},container:{maxWidth:"1280px",margin:"0 auto",padding:"0 24px"},row:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"64px",position:"relative"},logoWrapper:{display:"flex",flexDirection:"column",alignItems:"flex-start",textDecoration:"none",cursor:"pointer",lineHeight:1.1},logoBilling:{fontFamily:"'Poppins', sans-serif",fontWeight:700,fontSize:"22px",color:"#ED1A3B",letterSpacing:"1px",textTransform:"uppercase"},logoSoftware:{fontFamily:"'Poppins', sans-serif",fontWeight:400,fontSize:"13px",color:"#ED1A3B",letterSpacing:"3.5px",textTransform:"uppercase"},desktopNav:{display:"flex",alignItems:"center",gap:"32px"},navLink:{color:"#374151",textDecoration:"none",fontWeight:500,fontSize:"15px",fontFamily:"'Poppins', sans-serif",transition:"color 0.2s",cursor:"pointer"},navLinkHover:{color:"#ED1A3B"},hamburger:{background:"none",border:"none",cursor:"pointer",padding:"8px",display:"none"},mobileMenu:{overflow:"hidden",transition:"max-height 0.3s ease, opacity 0.3s ease",maxHeight:a?"300px":"0px",opacity:+!!a,backgroundColor:"#f9fafb",borderTop:"1px solid #f3f4f6"},mobileMenuInner:{padding:"8px 24px 16px",display:"flex",flexDirection:"column",gap:"4px"},mobileLink:{display:"block",padding:"10px 12px",borderRadius:"6px",color:"#374151",textDecoration:"none",fontWeight:500,fontSize:"16px",fontFamily:"'Poppins', sans-serif",cursor:"pointer"}},i=`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    /* ── Mobile (default) ── */
    .header-logo-desktop {
      display: none;
    }
    .header-logo-mobile {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .header-desktop-nav {
      display: none !important;
    }
    .header-hamburger {
      display: block !important;
      position: absolute;
      right: 0;
    }
    .header-mobile-menu {
      display: block;
    }

    /* ── Desktop (768px+) ── */
    @media (min-width: 768px) {
      .header-logo-desktop {
        display: flex;
      }
      .header-logo-mobile {
        display: none;
      }
      .header-desktop-nav {
        display: flex !important;
      }
      .header-hamburger {
        display: none !important;
      }
      .header-mobile-menu {
        display: none !important;
      }
    }
  `,j=()=>(0,b.jsxs)("a",{href:"/",style:h.logoWrapper,children:[(0,b.jsx)("span",{style:h.logoBilling,children:"Billing"}),(0,b.jsx)("span",{style:h.logoSoftware,children:"Software"})]});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:i}),(0,b.jsxs)("header",{style:h.header,children:[(0,b.jsx)("div",{style:h.container,children:(0,b.jsxs)("div",{style:h.row,children:[(0,b.jsx)("div",{className:"header-logo-desktop",children:(0,b.jsx)(j,{})}),(0,b.jsx)("div",{className:"header-logo-mobile",children:(0,b.jsx)(j,{})}),(0,b.jsx)("div",{className:"header-desktop-nav",style:h.desktopNav,children:g.map(a=>(0,b.jsx)("a",{href:a.href,style:{...h.navLink,...e===a.label?h.navLinkHover:{}},onMouseEnter:()=>f(a.label),onMouseLeave:()=>f(null),...a.external?{target:"_blank",rel:"noopener noreferrer"}:{},children:a.label},a.label))}),(0,b.jsx)("button",{className:"header-hamburger",style:h.hamburger,onClick:()=>d(!a),"aria-label":"Toggle Menu",children:(0,b.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#374151",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,b.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("line",{x1:"4",y1:"6",x2:"20",y2:"6"}),(0,b.jsx)("line",{x1:"4",y1:"12",x2:"20",y2:"12"}),(0,b.jsx)("line",{x1:"4",y1:"18",x2:"20",y2:"18"})]})})})]})}),(0,b.jsx)("div",{className:"header-mobile-menu",style:h.mobileMenu,children:(0,b.jsx)("div",{style:h.mobileMenuInner,children:g.map(a=>(0,b.jsx)("a",{href:a.href,style:h.mobileLink,onClick:()=>d(!1),...a.external?{target:"_blank",rel:"noopener noreferrer"}:{},children:a.label},a.label))})})]})]})}])},42772,a=>{"use strict";var b=a.i(87924),c=a.i(72131);a.s(["default",0,()=>{let[a,d]=(0,c.useState)(null),e=new Date().getFullYear(),f={flex:"1 1 220px",minWidth:"200px",marginBottom:"32px"},g={fontSize:"16px",fontWeight:600,color:"#ffffff",marginBottom:"20px",textTransform:"uppercase",letterSpacing:"0.5px"},h={listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"12px"},i={color:"#9ca3af",textDecoration:"none",fontSize:"14px",fontFamily:"'Poppins', sans-serif",transition:"color 0.2s",cursor:"pointer"},j={color:"#ED1A3B"},k={display:"flex",alignItems:"flex-start",gap:"12px",marginBottom:"16px"},l={marginTop:"2px",flexShrink:0},m={fontSize:"12px",color:"#6b7280",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"2px"},n={fontSize:"14px",color:"#d1d5db",textDecoration:"none",fontWeight:500},o=`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
    .footer-links-row {
      display: contents;
    }
    @media (max-width: 768px) {
      .footer-grid {
        flex-direction: column;
        gap: 8px;
      }
      .footer-column {
        min-width: 100% !important;
      }
      .footer-links-row {
        display: flex !important;
        flex-direction: row !important;
        gap: 24px !important;
        width: 100% !important;
        min-width: 100% !important;
        margin-bottom: 32px;
      }
      .footer-links-row .footer-link-col {
        flex: 1 1 0% !important;
        min-width: 0 !important;
        margin-bottom: 0 !important;
      }
      .footer-bottom-bar {
        flex-direction: column;
        text-align: center;
      }
    }
  `,p=c=>{let e=a===c.label?{...i,...j}:i;return c.external?(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:c.href,style:e,onMouseEnter:()=>d(c.label),onMouseLeave:()=>d(null),target:"_blank",rel:"noopener noreferrer",children:c.label})},c.label):(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:c.href,style:e,onMouseEnter:()=>d(c.label),onMouseLeave:()=>d(null),children:c.label})},c.label)};return(0,b.jsxs)(c.default.Fragment,{children:[(0,b.jsx)("style",{children:o}),(0,b.jsxs)("footer",{style:{width:"100%",backgroundColor:"#1f2937",color:"#d1d5db",fontFamily:"'Poppins', sans-serif"},children:[(0,b.jsx)("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"48px 24px 0"},children:(0,b.jsxs)("div",{className:"footer-grid",style:{display:"flex",flexWrap:"wrap",gap:"40px",justifyContent:"space-between"},children:[(0,b.jsxs)("div",{className:"footer-column",style:f,children:[(0,b.jsxs)("a",{href:"/",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",textDecoration:"none",cursor:"pointer",lineHeight:1.1,marginBottom:"16px"},children:[(0,b.jsx)("span",{style:{fontFamily:"'Poppins', sans-serif",fontWeight:700,fontSize:"24px",color:"#ED1A3B",letterSpacing:"1px",textTransform:"uppercase"},children:"Billing"}),(0,b.jsx)("span",{style:{fontFamily:"'Poppins', sans-serif",fontWeight:400,fontSize:"13px",color:"#ED1A3B",letterSpacing:"3.5px",textTransform:"uppercase"},children:"Software"})]}),(0,b.jsx)("p",{style:{fontSize:"14px",color:"#9ca3af",lineHeight:1.7,marginTop:"12px",maxWidth:"280px"},children:"Simplify your invoicing, manage customers, and track payments — all in one powerful billing platform built for modern businesses."})]}),(0,b.jsxs)("div",{className:"footer-links-row",children:[(0,b.jsxs)("div",{className:"footer-link-col footer-column",style:f,children:[(0,b.jsx)("h4",{style:g,children:"Quick Links"}),(0,b.jsx)("ul",{style:h,children:[{label:"Home",href:"/"},{label:"Pricing",href:"/pricing"},{label:"Contact Us",href:"https://wa.me/919699164131",external:!0},{label:"Download Now",href:"https://vyaparapp.in/desktop/download/?referrer_code=5J5W",external:!0}].map(p)})]}),(0,b.jsxs)("div",{className:"footer-link-col footer-column",style:f,children:[(0,b.jsx)("h4",{style:g,children:"Resources"}),(0,b.jsx)("ul",{style:h,children:[{label:"Intro",href:"/#hero"},{label:"Services",href:"/#data"},{label:"Features",href:"/#features"},{label:"Benefits",href:"/#benefits"},{label:"FAQs",href:"/#faqs"}].map(p)})]})]}),(0,b.jsxs)("div",{className:"footer-column",style:f,children:[(0,b.jsx)("h4",{style:g,children:"Customer Care"}),(0,b.jsxs)("div",{style:k,children:[(0,b.jsx)("div",{style:l,children:(0,b.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"#ED1A3B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:(0,b.jsx)("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"})})}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{style:m,children:"Whatsapp Now"}),(0,b.jsx)("a",{href:"https://wa.me/919699164131",style:n,target:"_blank",rel:"noopener noreferrer",children:"Click here"})]})]}),(0,b.jsxs)("div",{style:k,children:[(0,b.jsx)("div",{style:l,children:(0,b.jsxs)("svg",{width:"20",height:"20",fill:"none",stroke:"#ED1A3B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[(0,b.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,b.jsx)("polyline",{points:"12 6 12 12 16 14"})]})}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{style:m,children:"Working Hours"}),(0,b.jsx)("div",{style:n,children:"Mon – Sat: 9 AM – 7 PM"}),(0,b.jsx)("div",{style:{fontSize:"13px",color:"#9ca3af",fontWeight:500},children:"Sunday: Closed"})]})]})]})]})}),(0,b.jsx)("div",{style:{borderTop:"1px solid #374151",marginTop:"16px"}}),(0,b.jsx)("div",{className:"footer-bottom-bar",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",padding:"20px 24px",maxWidth:"1280px",margin:"0 auto",gap:"12px"},children:(0,b.jsxs)("p",{style:{fontSize:"13px",color:"#6b7280",margin:0},children:["© ",e," ",(0,b.jsx)("span",{style:{color:"#ED1A3B",fontWeight:600},children:"Billing Software"}),". All rights reserved."]})})]})]})}])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__15f31920._.js.map