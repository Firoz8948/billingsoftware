(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,53501,e=>{"use strict";var o=e.i(43476),n=e.i(71645);e.s(["default",0,()=>{let[e,i]=(0,n.useState)(!1),[l,t]=(0,n.useState)(null),r=[{label:"Home",href:"/"},{label:"Pricing",href:"/pricing"},{label:"Contact Us",href:"https://wa.me/919699164131",external:!0}],s={header:{width:"100%",backgroundColor:"#ffffff",borderBottom:"1px solid #e5e7eb",boxShadow:"0 1px 3px rgba(0,0,0,0.1)",position:"sticky",top:0,zIndex:50,fontFamily:"Arial, Helvetica, sans-serif"},container:{maxWidth:"1280px",margin:"0 auto",padding:"0 24px"},row:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"64px",position:"relative"},logoWrapper:{display:"flex",flexDirection:"column",alignItems:"flex-start",textDecoration:"none",cursor:"pointer",lineHeight:1.1},logoBilling:{fontFamily:"'Poppins', sans-serif",fontWeight:700,fontSize:"22px",color:"#ED1A3B",letterSpacing:"1px",textTransform:"uppercase"},logoSoftware:{fontFamily:"'Poppins', sans-serif",fontWeight:400,fontSize:"13px",color:"#ED1A3B",letterSpacing:"3.5px",textTransform:"uppercase"},desktopNav:{display:"flex",alignItems:"center",gap:"32px"},navLink:{color:"#374151",textDecoration:"none",fontWeight:500,fontSize:"15px",fontFamily:"'Poppins', sans-serif",transition:"color 0.2s",cursor:"pointer"},navLinkHover:{color:"#ED1A3B"},hamburger:{background:"none",border:"none",cursor:"pointer",padding:"8px",display:"none"},mobileMenu:{overflow:"hidden",transition:"max-height 0.3s ease, opacity 0.3s ease",maxHeight:e?"300px":"0px",opacity:+!!e,backgroundColor:"#f9fafb",borderTop:"1px solid #f3f4f6"},mobileMenuInner:{padding:"8px 24px 16px",display:"flex",flexDirection:"column",gap:"4px"},mobileLink:{display:"block",padding:"10px 12px",borderRadius:"6px",color:"#374151",textDecoration:"none",fontWeight:500,fontSize:"16px",fontFamily:"'Poppins', sans-serif",cursor:"pointer"}},a=`
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
  `,p=()=>(0,o.jsxs)("a",{href:"/",style:s.logoWrapper,children:[(0,o.jsx)("span",{style:s.logoBilling,children:"Billing"}),(0,o.jsx)("span",{style:s.logoSoftware,children:"Software"})]});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{children:a}),(0,o.jsxs)("header",{style:s.header,children:[(0,o.jsx)("div",{style:s.container,children:(0,o.jsxs)("div",{style:s.row,children:[(0,o.jsx)("div",{className:"header-logo-desktop",children:(0,o.jsx)(p,{})}),(0,o.jsx)("div",{className:"header-logo-mobile",children:(0,o.jsx)(p,{})}),(0,o.jsx)("div",{className:"header-desktop-nav",style:s.desktopNav,children:r.map(e=>(0,o.jsx)("a",{href:e.href,style:{...s.navLink,...l===e.label?s.navLinkHover:{}},onMouseEnter:()=>t(e.label),onMouseLeave:()=>t(null),...e.external?{target:"_blank",rel:"noopener noreferrer"}:{},children:e.label},e.label))}),(0,o.jsx)("button",{className:"header-hamburger",style:s.hamburger,onClick:()=>i(!e),"aria-label":"Toggle Menu",children:(0,o.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#374151",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,o.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("line",{x1:"4",y1:"6",x2:"20",y2:"6"}),(0,o.jsx)("line",{x1:"4",y1:"12",x2:"20",y2:"12"}),(0,o.jsx)("line",{x1:"4",y1:"18",x2:"20",y2:"18"})]})})})]})}),(0,o.jsx)("div",{className:"header-mobile-menu",style:s.mobileMenu,children:(0,o.jsx)("div",{style:s.mobileMenuInner,children:r.map(e=>(0,o.jsx)("a",{href:e.href,style:s.mobileLink,onClick:()=>i(!1),...e.external?{target:"_blank",rel:"noopener noreferrer"}:{},children:e.label},e.label))})})]})]})}])},28129,e=>{"use strict";var o=e.i(43476),n=e.i(71645);e.s(["default",0,()=>{let[e,i]=(0,n.useState)(null),l=new Date().getFullYear(),t={flex:"1 1 220px",minWidth:"200px",marginBottom:"32px"},r={fontSize:"16px",fontWeight:600,color:"#ffffff",marginBottom:"20px",textTransform:"uppercase",letterSpacing:"0.5px"},s={listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"12px"},a={color:"#9ca3af",textDecoration:"none",fontSize:"14px",fontFamily:"'Poppins', sans-serif",transition:"color 0.2s",cursor:"pointer"},p={color:"#ED1A3B"},d={display:"flex",alignItems:"flex-start",gap:"12px",marginBottom:"16px"},x={marginTop:"2px",flexShrink:0},c={fontSize:"12px",color:"#6b7280",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"2px"},f={fontSize:"14px",color:"#d1d5db",textDecoration:"none",fontWeight:500},h=`
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
  `,m=n=>{let l=e===n.label?{...a,...p}:a;return n.external?(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:n.href,style:l,onMouseEnter:()=>i(n.label),onMouseLeave:()=>i(null),target:"_blank",rel:"noopener noreferrer",children:n.label})},n.label):(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:n.href,style:l,onMouseEnter:()=>i(n.label),onMouseLeave:()=>i(null),children:n.label})},n.label)};return(0,o.jsxs)(n.default.Fragment,{children:[(0,o.jsx)("style",{children:h}),(0,o.jsxs)("footer",{style:{width:"100%",backgroundColor:"#1f2937",color:"#d1d5db",fontFamily:"'Poppins', sans-serif"},children:[(0,o.jsx)("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"48px 24px 0"},children:(0,o.jsxs)("div",{className:"footer-grid",style:{display:"flex",flexWrap:"wrap",gap:"40px",justifyContent:"space-between"},children:[(0,o.jsxs)("div",{className:"footer-column",style:t,children:[(0,o.jsxs)("a",{href:"/",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",textDecoration:"none",cursor:"pointer",lineHeight:1.1,marginBottom:"16px"},children:[(0,o.jsx)("span",{style:{fontFamily:"'Poppins', sans-serif",fontWeight:700,fontSize:"24px",color:"#ED1A3B",letterSpacing:"1px",textTransform:"uppercase"},children:"Billing"}),(0,o.jsx)("span",{style:{fontFamily:"'Poppins', sans-serif",fontWeight:400,fontSize:"13px",color:"#ED1A3B",letterSpacing:"3.5px",textTransform:"uppercase"},children:"Software"})]}),(0,o.jsx)("p",{style:{fontSize:"14px",color:"#9ca3af",lineHeight:1.7,marginTop:"12px",maxWidth:"280px"},children:"Simplify your invoicing, manage customers, and track payments — all in one powerful billing platform built for modern businesses."})]}),(0,o.jsxs)("div",{className:"footer-links-row",children:[(0,o.jsxs)("div",{className:"footer-link-col footer-column",style:t,children:[(0,o.jsx)("h4",{style:r,children:"Quick Links"}),(0,o.jsx)("ul",{style:s,children:[{label:"Home",href:"/"},{label:"Pricing",href:"/pricing"},{label:"Contact Us",href:"https://wa.me/919699164131",external:!0},{label:"Download Now",href:"https://vyaparapp.in/desktop/download/?referrer_code=5J5W",external:!0}].map(m)})]}),(0,o.jsxs)("div",{className:"footer-link-col footer-column",style:t,children:[(0,o.jsx)("h4",{style:r,children:"Resources"}),(0,o.jsx)("ul",{style:s,children:[{label:"Intro",href:"/#hero"},{label:"Services",href:"/#data"},{label:"Features",href:"/#features"},{label:"Benefits",href:"/#benefits"},{label:"FAQs",href:"/#faqs"}].map(m)})]})]}),(0,o.jsxs)("div",{className:"footer-column",style:t,children:[(0,o.jsx)("h4",{style:r,children:"Customer Care"}),(0,o.jsxs)("div",{style:d,children:[(0,o.jsx)("div",{style:x,children:(0,o.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"#ED1A3B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"})})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:c,children:"Whatsapp Now"}),(0,o.jsx)("a",{href:"https://wa.me/919699164131",style:f,target:"_blank",rel:"noopener noreferrer",children:"Click here"})]})]}),(0,o.jsxs)("div",{style:d,children:[(0,o.jsx)("div",{style:x,children:(0,o.jsxs)("svg",{width:"20",height:"20",fill:"none",stroke:"#ED1A3B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[(0,o.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,o.jsx)("polyline",{points:"12 6 12 12 16 14"})]})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:c,children:"Working Hours"}),(0,o.jsx)("div",{style:f,children:"Mon – Sat: 9 AM – 7 PM"}),(0,o.jsx)("div",{style:{fontSize:"13px",color:"#9ca3af",fontWeight:500},children:"Sunday: Closed"})]})]})]})]})}),(0,o.jsx)("div",{style:{borderTop:"1px solid #374151",marginTop:"16px"}}),(0,o.jsx)("div",{className:"footer-bottom-bar",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",padding:"20px 24px",maxWidth:"1280px",margin:"0 auto",gap:"12px"},children:(0,o.jsxs)("p",{style:{fontSize:"13px",color:"#6b7280",margin:0},children:["© ",l," ",(0,o.jsx)("span",{style:{color:"#ED1A3B",fontWeight:600},children:"Billing Software"}),". All rights reserved."]})})]})]})}])}]);