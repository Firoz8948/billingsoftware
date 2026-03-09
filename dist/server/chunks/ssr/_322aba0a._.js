module.exports=[33354,(a,b,c)=>{"use strict";c._=function(a){return a&&a.__esModule?a:{default:a}}},92434,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"warnOnce",{enumerable:!0,get:function(){return d}});let d=a=>{}},68063,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={getDeploymentId:function(){return f},getDeploymentIdQueryOrEmptyString:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(){return!1}function g(){return""}},4987,(a,b,c)=>{"use strict";function d({widthInt:a,heightInt:b,blurWidth:c,blurHeight:d,blurDataURL:e,objectFit:f}){let g=c?40*c:a,h=d?40*d:b,i=g&&h?`viewBox='0 0 ${g} ${h}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${i}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${i?"none":"contain"===f?"xMidYMid":"cover"===f?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${e}'/%3E%3C/svg%3E`}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImageBlurSvg",{enumerable:!0,get:function(){return d}})},345,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={VALID_LOADERS:function(){return f},imageConfigDefault:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=["default","imgix","cloudinary","akamai","custom"],g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},94915,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImgProps",{enumerable:!0,get:function(){return j}}),a.r(92434);let d=a.r(68063),e=a.r(4987),f=a.r(345),g=["-moz-initial","fill","none","scale-down",void 0];function h(a){return void 0!==a.default}function i(a){return void 0===a?a:"number"==typeof a?Number.isFinite(a)?a:NaN:"string"==typeof a&&/^[0-9]+$/.test(a)?parseInt(a,10):NaN}function j({src:a,sizes:b,unoptimized:c=!1,priority:j=!1,preload:k=!1,loading:l,className:m,quality:n,width:o,height:p,fill:q=!1,style:r,overrideSrc:s,onLoad:t,onLoadingComplete:u,placeholder:v="empty",blurDataURL:w,fetchPriority:x,decoding:y="async",layout:z,objectFit:A,objectPosition:B,lazyBoundary:C,lazyRoot:D,...E},F){var G;let H,I,J,{imgConf:K,showAltText:L,blurComplete:M,defaultLoader:N}=F,O=K||f.imageConfigDefault;if("allSizes"in O)H=O;else{let a=[...O.deviceSizes,...O.imageSizes].sort((a,b)=>a-b),b=O.deviceSizes.sort((a,b)=>a-b),c=O.qualities?.sort((a,b)=>a-b);H={...O,allSizes:a,deviceSizes:b,qualities:c}}if(void 0===N)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let P=E.loader||N;delete E.loader,delete E.srcSet;let Q="__next_img_default"in P;if(Q){if("custom"===H.loader)throw Object.defineProperty(Error(`Image with src "${a}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let a=P;P=b=>{let{config:c,...d}=b;return a(d)}}if(z){"fill"===z&&(q=!0);let a={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];a&&(r={...r,...a});let c={responsive:"100vw",fill:"100vw"}[z];c&&!b&&(b=c)}let R="",S=i(o),T=i(p);if((G=a)&&"object"==typeof G&&(h(G)||void 0!==G.src)){let b=h(a)?a.default:a;if(!b.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!b.height||!b.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(I=b.blurWidth,J=b.blurHeight,w=w||b.blurDataURL,R=b.src,!q)if(S||T){if(S&&!T){let a=S/b.width;T=Math.round(b.height*a)}else if(!S&&T){let a=T/b.height;S=Math.round(b.width*a)}}else S=b.width,T=b.height}let U=!j&&!k&&("lazy"===l||void 0===l);(!(a="string"==typeof a?a:R)||a.startsWith("data:")||a.startsWith("blob:"))&&(c=!0,U=!1),H.unoptimized&&(c=!0),Q&&!H.dangerouslyAllowSVG&&a.split("?",1)[0].endsWith(".svg")&&(c=!0);let V=i(n),W=Object.assign(q?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:B}:{},L?{}:{color:"transparent"},r),X=M||"empty"===v?null:"blur"===v?`url("data:image/svg+xml;charset=utf-8,${(0,e.getImageBlurSvg)({widthInt:S,heightInt:T,blurWidth:I,blurHeight:J,blurDataURL:w||"",objectFit:W.objectFit})}")`:`url("${v}")`,Y=g.includes(W.objectFit)?"fill"===W.objectFit?"100% 100%":"cover":W.objectFit,Z=X?{backgroundSize:Y,backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},$=function({config:a,src:b,unoptimized:c,width:e,quality:f,sizes:g,loader:h}){if(c){let a=(0,d.getDeploymentId)();if(b.startsWith("/")&&!b.startsWith("//")&&a){let c=b.includes("?")?"&":"?";b=`${b}${c}dpl=${a}`}return{src:b,srcSet:void 0,sizes:void 0}}let{widths:i,kind:j}=function({deviceSizes:a,allSizes:b},c,d){if(d){let c=/(^|\s)(1?\d?\d)vw/g,e=[];for(let a;a=c.exec(d);)e.push(parseInt(a[2]));if(e.length){let c=.01*Math.min(...e);return{widths:b.filter(b=>b>=a[0]*c),kind:"w"}}return{widths:b,kind:"w"}}return"number"!=typeof c?{widths:a,kind:"w"}:{widths:[...new Set([c,2*c].map(a=>b.find(b=>b>=a)||b[b.length-1]))],kind:"x"}}(a,e,g),k=i.length-1;return{sizes:g||"w"!==j?g:"100vw",srcSet:i.map((c,d)=>`${h({config:a,src:b,quality:f,width:c})} ${"w"===j?c:d+1}${j}`).join(", "),src:h({config:a,src:b,quality:f,width:i[k]})}}({config:H,src:a,unoptimized:c,width:S,quality:V,sizes:b,loader:P}),_=U?"lazy":l;return{props:{...E,loading:_,fetchPriority:x,width:S,height:T,decoding:y,className:m,style:{...W,...Z},sizes:$.sizes,srcSet:$.srcSet,src:s||$.src},meta:{unoptimized:c,preload:k||j,placeholder:v,fill:q}}}},46058,(a,b,c)=>{"use strict";function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},94613,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return f}});let d=a.r(72131),e=()=>{};function f(a){let{headManager:b,reduceComponentsToState:c}=a;function f(){if(b&&b.mountedInstances){let a=d.Children.toArray(Array.from(b.mountedInstances).filter(Boolean));b.updateHead(c(a))}}return b?.mountedInstances?.add(a.children),f(),e(()=>(b?.mountedInstances?.add(a.children),()=>{b?.mountedInstances?.delete(a.children)})),e(()=>(b&&(b._pendingUpdate=f),()=>{b&&(b._pendingUpdate=f)})),null}},92966,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.HeadManagerContext},58018,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return p},defaultHead:function(){return l}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(33354),g=a.r(46058),h=a.r(87924),i=g._(a.r(72131)),j=f._(a.r(94613)),k=a.r(92966);function l(){return[(0,h.jsx)("meta",{charSet:"utf-8"},"charset"),(0,h.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===i.default.Fragment?a.concat(i.default.Children.toArray(b.props.children).reduce((a,b)=>"string"==typeof b||"number"==typeof b?a:a.concat(b),[])):a.concat(b)}a.r(92434);let n=["name","httpEquiv","charSet","itemProp"];function o(a){let b,c,d,e;return a.reduce(m,[]).reverse().concat(l().reverse()).filter((b=new Set,c=new Set,d=new Set,e={},a=>{let f=!0,g=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){g=!0;let c=a.key.slice(a.key.indexOf("$")+1);b.has(c)?f=!1:b.add(c)}switch(a.type){case"title":case"base":c.has(a.type)?f=!1:c.add(a.type);break;case"meta":for(let b=0,c=n.length;b<c;b++){let c=n[b];if(a.props.hasOwnProperty(c))if("charSet"===c)d.has(c)?f=!1:d.add(c);else{let b=a.props[c],d=e[c]||new Set;("name"!==c||!g)&&d.has(b)?f=!1:(d.add(b),e[c]=d)}}}return f})).reverse().map((a,b)=>{let c=a.key||b;return i.default.cloneElement(a,{key:c})})}let p=function({children:a}){let b=(0,i.useContext)(k.HeadManagerContext);return(0,h.jsx)(j.default,{reduceComponentsToState:o,headManager:b,children:a})};("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},4486,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.ImageConfigContext},53773,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.RouterContext},35444,(a,b,c)=>{"use strict";function d(a,b){let c=a||75;return b?.qualities?.length?b.qualities.reduce((a,b)=>Math.abs(b-c)<Math.abs(a-c)?b:a,0):c}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"findClosestQuality",{enumerable:!0,get:function(){return d}})},2305,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return g}});let d=a.r(35444),e=a.r(68063);function f({config:a,src:b,width:c,quality:f}){if(b.startsWith("/")&&b.includes("?")&&a.localPatterns?.length===1&&"**"===a.localPatterns[0].pathname&&""===a.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${b}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let g=(0,d.findClosestQuality)(f,a),h=(0,e.getDeploymentId)();return`${a.path}?url=${encodeURIComponent(b)}&w=${c}&q=${g}${b.startsWith("/")&&h?`&dpl=${h}`:""}`}f.__next_img_default=!0;let g=f},8591,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"useMergedRef",{enumerable:!0,get:function(){return e}});let d=a.r(72131);function e(a,b){let c=(0,d.useRef)(null),e=(0,d.useRef)(null);return(0,d.useCallback)(d=>{if(null===d){let a=c.current;a&&(c.current=null,a());let b=e.current;b&&(e.current=null,b())}else a&&(c.current=f(a,d)),b&&(e.current=f(b,d))},[a,b])}function f(a,b){if("function"!=typeof a)return a.current=b,()=>{a.current=null};{let c=a(b);return"function"==typeof c?c:()=>a(null)}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},67161,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"Image",{enumerable:!0,get:function(){return u}});let d=a.r(33354),e=a.r(46058),f=a.r(87924),g=e._(a.r(72131)),h=d._(a.r(35112)),i=d._(a.r(58018)),j=a.r(94915),k=a.r(345),l=a.r(4486);a.r(92434);let m=a.r(53773),n=d._(a.r(2305)),o=a.r(8591),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function q(a,b,c,d,e,f,g){let h=a?.src;a&&a["data-loaded-src"]!==h&&(a["data-loaded-src"]=h,("decode"in a?a.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(a.parentElement&&a.isConnected){if("empty"!==b&&e(!0),c?.current){let b=new Event("load");Object.defineProperty(b,"target",{writable:!1,value:a});let d=!1,e=!1;c.current({...b,nativeEvent:b,currentTarget:a,target:a,isDefaultPrevented:()=>d,isPropagationStopped:()=>e,persist:()=>{},preventDefault:()=>{d=!0,b.preventDefault()},stopPropagation:()=>{e=!0,b.stopPropagation()}})}d?.current&&d.current(a)}}))}function r(a){return g.use?{fetchPriority:a}:{fetchpriority:a}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let s=(0,g.forwardRef)(({src:a,srcSet:b,sizes:c,height:d,width:e,decoding:h,className:i,style:j,fetchPriority:k,placeholder:l,loading:m,unoptimized:n,fill:p,onLoadRef:s,onLoadingCompleteRef:t,setBlurComplete:u,setShowAltText:v,sizesInput:w,onLoad:x,onError:y,...z},A)=>{let B=(0,g.useCallback)(a=>{a&&(y&&(a.src=a.src),a.complete&&q(a,l,s,t,u,n,w))},[a,l,s,t,u,y,n,w]),C=(0,o.useMergedRef)(A,B);return(0,f.jsx)("img",{...z,...r(k),loading:m,width:e,height:d,decoding:h,"data-nimg":p?"fill":"1",className:i,style:j,sizes:c,srcSet:b,src:a,ref:C,onLoad:a=>{q(a.currentTarget,l,s,t,u,n,w)},onError:a=>{v(!0),"empty"!==l&&u(!0),y&&y(a)}})});function t({isAppRouter:a,imgAttributes:b}){let c={as:"image",imageSrcSet:b.srcSet,imageSizes:b.sizes,crossOrigin:b.crossOrigin,referrerPolicy:b.referrerPolicy,...r(b.fetchPriority)};return a&&h.default.preload?(h.default.preload(b.src,c),null):(0,f.jsx)(i.default,{children:(0,f.jsx)("link",{rel:"preload",href:b.srcSet?void 0:b.src,...c},"__nimg-"+b.src+b.srcSet+b.sizes)})}let u=(0,g.forwardRef)((a,b)=>{let c=(0,g.useContext)(m.RouterContext),d=(0,g.useContext)(l.ImageConfigContext),e=(0,g.useMemo)(()=>{let a=p||d||k.imageConfigDefault,b=[...a.deviceSizes,...a.imageSizes].sort((a,b)=>a-b),c=a.deviceSizes.sort((a,b)=>a-b),e=a.qualities?.sort((a,b)=>a-b);return{...a,allSizes:b,deviceSizes:c,qualities:e,localPatterns:d?.localPatterns}},[d]),{onLoad:h,onLoadingComplete:i}=a,o=(0,g.useRef)(h);(0,g.useEffect)(()=>{o.current=h},[h]);let q=(0,g.useRef)(i);(0,g.useEffect)(()=>{q.current=i},[i]);let[r,u]=(0,g.useState)(!1),[v,w]=(0,g.useState)(!1),{props:x,meta:y}=(0,j.getImgProps)(a,{defaultLoader:n.default,imgConf:e,blurComplete:r,showAltText:v});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{...x,unoptimized:y.unoptimized,placeholder:y.placeholder,fill:y.fill,onLoadRef:o,onLoadingCompleteRef:q,setBlurComplete:u,setShowAltText:w,sizesInput:a.sizes,ref:b}),y.preload?(0,f.jsx)(t,{isAppRouter:!c,imgAttributes:x}):null]})});("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},33095,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},getImageProps:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(33354),g=a.r(94915),h=a.r(67161),i=f._(a.r(2305));function j(a){let{props:b}=(0,g.getImgProps)(a,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[a,c]of Object.entries(b))void 0===c&&delete b[a];return{props:b}}let k=h.Image},71987,(a,b,c)=>{b.exports=a.r(33095)},83041,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(71987);a.s(["default",0,()=>{let[a,e]=(0,c.useState)(!1),f={section:{width:"100%",backgroundColor:"#ffffff",padding:"60px 0",fontFamily:"'Poppins', sans-serif"},container:{maxWidth:"1400px",margin:"0 auto",padding:"0 24px"},row:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"40px"},contentLeft:{flex:1,maxWidth:"550px"},heading:{fontFamily:"'Poppins', sans-serif",fontWeight:700,letterSpacing:"normal",color:"#314259",margin:0,padding:0},headingLine:{display:"block"},description:{fontFamily:"'Poppins', sans-serif",fontSize:"16px",lineHeight:"26.88px",fontWeight:400,letterSpacing:"normal",color:"#787878",width:"514.275px",maxWidth:"100%",marginTop:"16px",marginBottom:"32px"},ctaButton:{fontFamily:"'Poppins', sans-serif",fontSize:"20px",lineHeight:"33.6px",fontWeight:600,letterSpacing:"normal",color:"#FFFFFF",backgroundColor:a?"#d01534":"#ED1A3B",width:"372.55px",maxWidth:"100%",height:"57.6px",border:"none",borderRadius:"8px",cursor:"pointer",transition:"background-color 0.2s ease, transform 0.2s ease",transform:a?"translateY(-2px)":"translateY(0)",boxShadow:a?"0 6px 20px rgba(237, 26, 59, 0.35)":"0 2px 8px rgba(237, 26, 59, 0.2)",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none"},imageRight:{flex:1,maxWidth:"580px",minHeight:"400px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"16px",overflow:"hidden"}},g=`
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
  `;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:g}),(0,b.jsx)("section",{id:"hero",style:f.section,children:(0,b.jsx)("div",{style:f.container,children:(0,b.jsxs)("div",{className:"hero-row",style:f.row,children:[(0,b.jsxs)("div",{className:"hero-content",style:f.contentLeft,children:[(0,b.jsxs)("h1",{className:"hero-heading",style:f.heading,children:[(0,b.jsx)("span",{className:"heading-line",style:f.headingLine,children:"GST Billing Software"}),(0,b.jsxs)("span",{className:"heading-line",style:f.headingLine,children:[" ","for Small Businesses in"]}),(0,b.jsxs)("span",{className:"heading-line",style:f.headingLine,children:[" ","India"]})]}),(0,b.jsx)("p",{className:"hero-description",style:f.description,children:"Manage your business professionally with Vyapar, India's leading small business software for billing, inventory, and accounting. Join 1 Cr+ satisfied SMEs in India who trust Vyapar."}),(0,b.jsx)("a",{href:"https://vyaparapp.in/desktop/download/?referrer_code=5J5W",className:"hero-cta",style:f.ctaButton,onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),target:"_blank",rel:"noopener noreferrer",children:"Download Vyapar Now!"})]}),(0,b.jsx)("div",{className:"hero-image",style:f.imageRight,children:(0,b.jsx)(d.default,{src:"/assets/hero.png",alt:"GST billing dashboard illustration",width:580,height:400,style:{width:"100%",height:"auto",objectFit:"cover"},priority:!0})})]})})})]})}])},85308,a=>{"use strict";var b=a.i(87924);let c=[{title:"1 Crore+",description:"Happy Customers",Icon:a=>(0,b.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...a,children:[(0,b.jsx)("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("circle",{cx:"9",cy:"10",r:"1",fill:"currentColor"}),(0,b.jsx)("circle",{cx:"15",cy:"10",r:"1",fill:"currentColor"}),(0,b.jsx)("path",{d:"M8.5 14.2C9.4 15.5 10.6 16 12 16s2.6-.5 3.5-1.8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})},{title:"Free",description:"Whatsapp support",Icon:a=>(0,b.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...a,children:[(0,b.jsx)("path",{d:"M5 19.5L6.2 16.1C5.4 14.9 5 13.7 5 12.4C5 8.9 7.8 6 11.2 6C14.6 6 17.5 8.9 17.5 12.4C17.5 15.9 14.6 18.8 11.2 18.8C10 18.8 8.9 18.5 7.9 18L5 19.5Z",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,b.jsx)("path",{d:"M9.6 10.2C9.4 9.7 9.4 9.3 9.5 9.1C9.6 8.9 9.8 8.8 10.1 8.8C10.5 8.8 11 9.1 11.3 9.5C11.7 9.9 11.9 10.4 11.8 10.7C11.8 11 11.6 11.2 11.4 11.4L11.3 11.5C11.6 12 12 12.4 12.5 12.7C13 13.1 13.5 13.3 14 13.5L14.1 13.4C14.3 13.2 14.5 13 14.8 13C15.1 13 15.6 13.2 16 13.5C16.4 13.8 16.7 14.2 16.7 14.6C16.7 14.9 16.6 15.1 16.4 15.3C16.2 15.5 15.8 15.8 15.3 15.8C14.6 15.8 13.7 15.5 12.7 15C11.8 14.5 11 13.8 10.3 13C9.7 12.2 9.2 11.3 9 10.7C8.9 10.5 9 10.3 9.1 10.2C9.2 10.1 9.4 10.1 9.6 10.2Z",fill:"currentColor"})]})},{title:"Rated 4.7/5",description:"On Google Play Store",Icon:a=>(0,b.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...a,children:[(0,b.jsx)("path",{d:"M7 5.5L18 12L7 18.5V5.5Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),(0,b.jsx)("path",{d:"M7 5.5L13.5 12L7 18.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})},{title:"Multi-Device",description:"Use together on Mobile/Desktop",Icon:a=>(0,b.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...a,children:[(0,b.jsx)("rect",{x:"3",y:"4",width:"18",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("path",{d:"M9 20h6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,b.jsx)("path",{d:"M12 16v4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})},{title:"Multi-User",description:"User Management Feature",Icon:a=>(0,b.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...a,children:[(0,b.jsx)("circle",{cx:"9",cy:"9",r:"3",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("circle",{cx:"16.5",cy:"10",r:"2.5",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("path",{d:"M4.5 18c.8-2.5 2.7-3.8 4.5-3.8s3.7 1.3 4.5 3.8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,b.jsx)("path",{d:"M14.5 17.8c.5-1.8 1.8-2.8 3.3-2.8 1.1 0 2.2.5 3 1.7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}];a.s(["default",0,()=>{let a={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"20px 12px",borderRadius:"16px",minHeight:"160px",scrollSnapAlign:"start",backgroundColor:"transparent",transition:"transform 0.2s ease, background-color 0.2s ease"},d={width:"56px",height:"56px",display:"flex",alignItems:"center",justifyContent:"center",color:"#ED1A3B",marginBottom:"14px"},e={margin:0,marginBottom:"8px",fontSize:"22px",lineHeight:"1.2",fontWeight:600,color:"#314259"},f={margin:0,fontSize:"14px",lineHeight:"1.5",fontWeight:400,color:"#787878",maxWidth:"210px"},g=`
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
  `;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:g}),(0,b.jsx)("section",{style:{width:"100%",backgroundColor:"#F5F6F8",padding:"30px 0",fontFamily:"'Poppins', sans-serif"},"aria-label":"Business feature highlights",children:(0,b.jsx)("div",{style:{maxWidth:"1400px",margin:"0 auto",padding:"0 24px"},children:(0,b.jsx)("div",{className:"feature-slider-track",style:{display:"flex",gap:"16px",overflowX:"auto",scrollBehavior:"smooth",WebkitOverflowScrolling:"touch"},children:c.map(({title:c,description:g,Icon:h})=>(0,b.jsxs)("div",{className:"feature-slider-item",style:a,children:[(0,b.jsx)("div",{style:d,children:(0,b.jsx)(h,{width:40,height:40})}),(0,b.jsx)("h3",{style:e,children:c}),(0,b.jsx)("p",{style:f,children:g})]},c))})})})]})}])},86415,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(71987);let e=[{id:1,heading:"Create GST Bills online and share them with customers",description:"Vyapar billing software allows you to generate GST invoices for clients and share them digitally. This tool helps establish a professional brand image with its essential online GST billing features.",readMore:`Vyapar billing software allows you to generate GST invoices for clients and share them digitally. This tool helps establish a professional brand image with its essential online GST billing features. You can utilize the Vyapar accounting and billing app to draft invoices, ensuring adherence to Goods and Services Tax regulations in India.

The Vyapar app minimizes accounting mistakes and safeguards your business data. With just a few simple steps, you can create GST invoices using the app's templates. Additionally, the Vyapar app can be accessed both online and offline, making it convenient for small and medium enterprises to follow optimal accounting practices and streamline their bookkeeping processes.

Using our user-friendly invoicing software to comply with GST norms. Vyapar billing software comes with a variety of useful billing solutions. You can create invoices for your customers in a few steps. Further, you can share them with customers using WhatsApp, email, or print methods. You can print them use your printer in A4, A5, 2, and 3 inches variations.

Unlike most software, Vyapar enables you to create invoices within minutes. The best part is that you won't require hours of rigorous training, as it is an easy process. In the app, you can choose from 10+ professional GST invoice formats and billing formats to create professional and unique bills.

Vyapar is a free invoicing software. It comes with various useful billing and accounting features. Using the app makes business management hassle-free for SMEs. With completely customised GST-compliant invoices, your business can stand out among competitors.

The best billing software makes the billing process easier for business owners. To do so, Vyapar comes with a dedicated billing & inventory Android app along with Windows software. The basic features required for everyday accounting are free for Android mobile users. A business owners only have to pay for premium features as a yearly subscription.

Numerous useful features are available in Windows desktop software. Every business can access them during the free trial. So, every business can try out the features before purchasing the subscription. It helps SMEs understand how the app benefits them before paying.`,image:"/assets/data1.webp"},{id:2,heading:"Manage Small Business Inventory Seamlessly",description:"Vyapar brings the finest inventory management software with incredibly effective features. It helps improve business performance.",readMore:`Vyapar brings the finest inventory management software with incredibly effective features. It helps improve business performance. Using the Vyapar app features like business reports, you can track your business's sales. It will help you understand how effectively you have managed your inventory.

As the best GST billing software, Vyapar keeps a record of business data within the app. It makes it hassle-free for business owners to create an effective strategy. Using inventory tracking features helps maximise the utility of inventory space. Our retail store inventory management tools simplify the process of pinpointing underperforming items. This analysis aids in optimizing space by removing infrequently sold products. With our inventory tracking capabilities, you can log and identify items effectively.

Tracking is accomplished through batch numbers, expiration dates, manufacturing dates, slot numbers, and additional details, which are entered into the system upon arrival. This ensures you maintain adequate stock levels for sales when necessary. Additionally, it allows you to keep accurate records, helping to detect any instances of theft promptly.

Using the free billing software by Vyapar, you can check the live status of your inventory. Further, you can set up alerts to place new orders with your suppliers. You can also track delivery challans location-wise to monitor order movements efficiently. Our inventory management app allows you to perform all inventory tracking tasks seamlessly. It helps provide a better customer experience.

Vyapar empowers your employees to take care of your inventory management needs. It does so with various useful features within the app. The instant invoicing app helps you enter all the data stored from sales in an Excel sheet. It helps save time and effort required in various accounting processes.

Using the best GST billing app, you need not do tasks manually as it automates most processes. Further, regular checks and matching data using the app ensure that items do not get misplaced. You can easily carry out a replacement without a delay to avoid business loss. It helps with day to day inventory management requirements.

Another benefit of using the Vyapar software is that it gives you statistics on your sales. Using the app, you can create GST reports. You can prepare a strategy to maximise profits and minimise expenses.`,image:"/assets/data2.webp"},{id:3,heading:"Send Payment Reminders to Recover Dues",description:"Vyapar's free accounting and billing software assists small and medium-sized enterprises (SMEs) in securing prompt payments and managing their cash flow effectively.",readMore:`Vyapar's free accounting and billing software assists small and medium-sized enterprises (SMEs) in securing prompt payments and managing their cash flow effectively. The platform enables users to monitor all outstanding payments directly from the business dashboard.

Utilizing the reminder functionality within the app, you can send payment notifications to clients. This feature helps remind them of their total balance due and the payment deadline via WhatsApp and email. By sending these reminders, you can ensure customers remember to make their payments, helping to maintain consistent cash flow and prevent unnecessary delays in your business.

To help your customers pay on time, the best GST billing software by Vyapar comes with a wide range of payment options. It includes cash, credit cards, debit cards, e-wallets, NEFT, RTGS, UPI, QR code, and much more. By providing a range of cash and online payment options, you can provide convenience to customers. It ensures that your customers can pay using the option they see fit for themselves.

Many small and medium business owners have reduced payment delays with the Vyapar billing software's payment reminder feature. The app features collectively to ensure that the dues do not impact the business's cash flow. You can create reports to adjust your business plans according to the available cash flow.

Using the Vyapar billing software is such an easy task. Many business owners rely solely on our small business inventory management software for all their inventory, invoicing, and accounting needs. Customers consider Vyapar as the best GST billing software for small businesses. The app features make it useful for their business. It eliminates the requirement for multiple apps.`,image:"/assets/data3.webp"},{id:4,heading:"GST filing made simpler and faster",description:"Filing GST can be a difficult task for entrepreneurs, often requiring a lengthy manual process. However, with Vyapar GST billing software, generating GST reports becomes effortless, streamlining the entire filing procedure.",readMore:`Filing GST can be a difficult task for entrepreneurs, often requiring a lengthy manual process. However, with Vyapar GST billing software, generating GST reports becomes effortless, streamlining the entire filing procedure.

Many business owners dedicate considerable time and energy each month to ensure compliance with tax regulations, which involves monitoring their invoices, expenses, and accounting records. Additionally, they need to manually input this data to submit their GST returns.

Vyapar billing and accounting software revolutionizes this process by enabling users to produce specific GSTR reports and harnessing automation for time-saving benefits. The app allows you to generate various reports, including GSTR1, GSTR2, GSTR3, GSTR4, and GSTR9, directly from the platform.

Using professional accounting software to create GST reports saves time for every business owner. With this, they can rely on automation to complete all accounting tasks without errors and simply send data to your CA/Tax Professional using Vyapar TaxOne for effortless GST filing.

As you create GST bills throughout the year, the app automatically detects the GST applicable to the product. It helps comply with GST laws to ensure that every transaction is recorded. Further, it ensures correct GST figures are entered. The billing software further eliminates manual errors with automation. It is beneficial when you cannot hire an extra employee to care for your accounting.

To ensure that you can file GST timely and no data loss happens, you can keep a backup. Using Vyapar, your business data is safe. It makes you feel stress-free when you have to file GST, as you can restore data anytime. Using Vyapar, you can create backups in both Google Drive and local storage to keep it secure.`,image:"/assets/data4.webp"}];a.s(["default",0,()=>{let[a,f]=(0,c.useState)(null),g=e.find(b=>b.id===a);(0,c.useEffect)(()=>(null!==a?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[a]);let h=(0,c.useCallback)(b=>{"Escape"===b.key&&null!==a&&f(null)},[a]);(0,c.useEffect)(()=>(document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)),[h]);let i=()=>f(null),j={display:"flex",alignItems:"center",gap:"48px"},k={flex:1,display:"flex",alignItems:"center",justifyContent:"center"},l={width:"100%",maxWidth:"520px",borderRadius:"16px",overflow:"hidden"},m={flex:1,display:"flex",flexDirection:"column",justifyContent:"center"},n={fontFamily:"'Poppins', sans-serif",fontWeight:700,fontSize:"28px",lineHeight:"1.35",color:"#314259",margin:0,marginBottom:"16px"},o={fontFamily:"'Poppins', sans-serif",fontWeight:400,fontSize:"15px",lineHeight:"1.75",color:"#787878",margin:0,marginBottom:"20px"},p={fontFamily:"'Poppins', sans-serif",fontWeight:600,fontSize:"15px",color:"#ED1A3B",cursor:"pointer",userSelect:"none",display:"inline-flex",alignItems:"center",gap:"4px",transition:"opacity 0.2s ease",background:"none",border:"none",padding:0},q={display:"flex",alignItems:"center",gap:"16px",marginTop:"4px"},r={display:"inline-flex",alignItems:"center",gap:"6px",fontFamily:"'Poppins', sans-serif",fontWeight:500,fontSize:"14px",color:"#314259",textDecoration:"none",cursor:"pointer"},s=`
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
  `;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:s}),(0,b.jsx)("section",{id:"data",style:{width:"100%",backgroundColor:"#ffffff",padding:"60px 0",fontFamily:"'Poppins', sans-serif"},"aria-label":"Product features",children:(0,b.jsx)("div",{style:{maxWidth:"1400px",margin:"0 auto",padding:"0 24px",display:"flex",flexDirection:"column",gap:"64px"},children:e.map((a,c)=>(0,b.jsxs)("div",{className:`feature-row ${c%2!=0?"feature-row-reversed":""}`,style:j,children:[(0,b.jsx)("div",{className:"feature-image-col",style:k,children:(0,b.jsx)("div",{style:l,children:(0,b.jsx)(d.default,{src:a.image,alt:a.heading,width:520,height:340,style:{width:"100%",height:"auto",objectFit:"cover",display:"block"}})})}),(0,b.jsxs)("div",{className:"feature-content-col",style:m,children:[(0,b.jsx)("h2",{className:"feature-heading",style:n,children:a.heading}),(0,b.jsx)("p",{style:o,children:a.description}),(0,b.jsxs)("div",{style:q,children:[(0,b.jsxs)("button",{className:"feature-read-more",style:p,onClick:()=>{var b;return b=a.id,void f(a=>a===b?null:b)},"aria-haspopup":"dialog",children:[(0,b.jsx)("span",{style:{fontSize:"18px",lineHeight:1,display:"inline-block"},children:"+"}),"Read more"]}),(0,b.jsxs)("a",{href:"https://vyaparapp.in/desktop/download/?referrer_code=5J5W",style:r,target:"_blank",rel:"noopener noreferrer",children:[(0,b.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),(0,b.jsx)("polyline",{points:"7 10 12 15 17 10"}),(0,b.jsx)("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),(0,b.jsx)("span",{children:"Download"})]})]})]})]},a.id))})}),g&&(0,b.jsx)("div",{style:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:9998,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",animation:"fadeIn 0.25s ease"},onClick:a=>{a.target===a.currentTarget&&i()},role:"dialog","aria-modal":"true","aria-labelledby":"feature-modal-title",children:(0,b.jsxs)("div",{className:"feature-modal",style:{position:"relative",backgroundColor:"#ffffff",borderRadius:"16px",width:"100%",maxWidth:"640px",maxHeight:"80vh",display:"flex",flexDirection:"column",boxShadow:"0 24px 80px rgba(0, 0, 0, 0.18)",animation:"slideUp 0.3s ease",overflow:"hidden"},children:[(0,b.jsxs)("div",{className:"feature-modal-header",style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"16px",padding:"24px 28px 16px 28px",borderBottom:"1px solid #f0f0f0",flexShrink:0},children:[(0,b.jsx)("h3",{id:"feature-modal-title",className:"feature-modal-heading",style:{fontFamily:"'Poppins', sans-serif",fontWeight:700,fontSize:"20px",lineHeight:"1.4",color:"#314259",margin:0},children:g.heading}),(0,b.jsx)("button",{className:"feature-close-btn",style:{width:"36px",height:"36px",borderRadius:"50%",border:"none",backgroundColor:"#F5F6F8",color:"#555555",fontSize:"20px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"background-color 0.2s ease, color 0.2s ease"},onClick:i,"aria-label":"Close dialog",children:"✕"})]}),(0,b.jsx)("div",{className:"feature-modal-body",style:{padding:"20px 28px 28px 28px",overflowY:"auto",fontFamily:"'Poppins', sans-serif",fontSize:"14.5px",lineHeight:"1.8",color:"#555555",whiteSpace:"pre-line"},children:g.readMore})]})})]})}])},89031,a=>{"use strict";var b=a.i(87924),c=a.i(72131);let d=[{id:1,title:"Send Estimate and Quotations",Icon:a=>(0,b.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",...a,children:[(0,b.jsx)("rect",{x:"4",y:"3",width:"16",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("path",{d:"M8 7h8M8 11h8M8 15h4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),contentHeading:"Send Estimate and Quotations",contentBody:`Using our free billing software, you can easily create useful documents. It includes quotations, estimates, and accurate GST invoices. Inbuilt features in the GST billing app allow you to send quotes/estimates to customers anytime. You can send them directly through WhatsApp, email, SMS, or by printing.

Vyapar billing software for small businesses provides a professional outlook with instant estimates and quotes. The Vyapar app helps automate most processes. It makes the quotes and estimates error-free. Additionally, you can set up a due date for tracking invoices seamlessly.

Further, you can convert your estimates and quotations into sales invoices anytime. All you need is the Vyapar software for billing and it’s done in a few clicks. Vyapar free billing software offers the business a complete option for quickly saving more time, getting instant quotes. Using the accounting software, you can manage your business with higher productivity.

The billing app brings professionalism for your valued customers to attract them back. Choosing advanced Software for GST billing is one of the best investments for your business. Our Billing Software helps simplify estimates and quotations.`},{id:2,title:"Track Orders",Icon:a=>(0,b.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",...a,children:[(0,b.jsx)("path",{d:"M3 6h18l-2 10H5L3 6z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),(0,b.jsx)("circle",{cx:"9",cy:"20",r:"1.5",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("circle",{cx:"17",cy:"20",r:"1.5",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("path",{d:"M3 6L1.5 3",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),contentHeading:"Track Orders",contentBody:`Creating sales and purchase orders is easier and faster with our advanced GST Compliant GST Software. It helps set up a due date for tracking orders seamlessly. With this GST Accounting and Billing Software, we get an auto stock adjustment. It helps ensure the availability of inventory items.

Having tracking features is pretty helpful for fulfilling orders on time and avoiding unnecessary losses. You can save time with tracking and use it to perform other day to day tasks. It enables better customer satisfaction. You can attach a tax invoice to an order and track if payment is due using the app.

Using our GST billing app, it is easier to improve your purchase/sale order formats. The Vyapar App provides various options, including Word, PDF, and Excel. Using our GST invoicing software, you can save labour costs and efforts. You can save time by converting orders to sale/purchase invoices using automation.

You can track open, closed, and overdue orders using our free billing app. It makes it a perfect choice for businesses. Using these features makes the entire tracking process seamless for businesses. In short, it helps improve the performance of employees.`},{id:3,title:"Choose The Best Themes",Icon:a=>(0,b.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",...a,children:[(0,b.jsx)("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("path",{d:"M12 3c2.5 3 4 6 4 9s-1.5 6-4 9",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("path",{d:"M12 3c-2.5 3-4 6-4 9s1.5 6 4 9",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("path",{d:"M3 12h18",stroke:"currentColor",strokeWidth:"2"})]}),contentHeading:"Choose The Best Themes",contentBody:`Maintaining and sharing professional invoices with your clients can improve your brand’s Identity. The GST Billing App has two invoice themes for thermal printers. Also, it has twelve invoice themes for regular printers.

With this GST invoice software, you can quickly improve the look of your invoice Using available customisation options is seamless. You can neatly prepare the invoice for your client. Business bills generated can better impress a client.

The Billing App for GST is the best option for your accounting inventory. It is very easy to handle. Choose from the best GST invoice formats to meet your business requirements. Most businesses choose our free GST billing software to help present a professional image. It is an ideal way to build a positive brand image.

This free billing app is efficient for quickly gaining the highest invoice standard. It provides multiple theme options for thermal and regular printers. GST Invoicing Software is suitable, and all themes are fully customisable. A business can use it for all types of commercial purposes. The list includes retailers, pharmaceutical businesses, gyms, restaurants, and many other businesses.`},{id:4,title:"Record Business Expenses",Icon:a=>(0,b.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",...a,children:[(0,b.jsx)("rect",{x:"2",y:"5",width:"20",height:"14",rx:"2",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("path",{d:"M2 10h20",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("path",{d:"M6 15h4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),contentHeading:"Record Business Expenses",contentBody:`Tracking and recording all expenses in the business is important for accounting and tax filing. It is easier to follow the money spent and create an accurate report with the GST billing software.

Our free billing app is an efficient option for recording expenses. Businesses can easily optimise their business expenditure to save more money. With our free GST billing software, you can record both GST and non-GST expenses.

Further, Vyapar billing solutions come with various benefits over competitors. It helps you reduce costs and maximise sales. The billing software is an efficient option for quickly recording outstanding expenses. It helps in tracking them in the future, too.

Our free accounting software is suitable for growing businesses. It helps keep their finances in check. By recording the expenses using GST software, the company can optimise the expenditure. It helps save money. Moreover, keeping track of costs will help build better strategies. It will result in better profitability for the business.`},{id:5,title:"Accounts Receivable and Payables",Icon:a=>(0,b.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",...a,children:[(0,b.jsx)("path",{d:"M4 7l8-4 8 4-8 4-8-4z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),(0,b.jsx)("path",{d:"M4 7v10l8 4V11",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),(0,b.jsx)("path",{d:"M20 7v10l-8 4V11",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"})]}),contentHeading:"Accounts Receivable and Payables",contentBody:`A professional free billing and accounting software lets users keep all the transaction details and track business cash flow seamlessly. Now you have a better way of keeping your transaction details safe.

Free GST Invoicing Software allows you to track party-wise receivables and payables. Using the business dashboard in the GST mobile app, you can track the money you have to receive and the money you need to pay in the Vyapar app.

You can easily track and observe who didn’t pay you back. You can set payment reminders to collect dues from these customers on time. You can send free payment reminders to any party via WhatsApp, SMS, and email. You can provide all types of online payment solutions to collect dues seamlessly. Further, it will allow you to save time for your day to day tasks.

Also, with the bulk payment reminder feature, you can save time by sending payment reminders to all your customers in bulk at once. The GST Billing and invoicing software performs automated calculations. It helps track accounts receivable and payables seamlessly.

Using the cash flow management system by Vyapar enables you to avoid taking too much debt and revisit your business plan, as it indicates an early sign of issues in cash flow. Further, you can also use Vyapar’s GST billing app to perform party-to-party balance transfers.`},{id:6,title:"Track Delivery Challan",Icon:a=>(0,b.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",...a,children:[(0,b.jsx)("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("path",{d:"M3 9h18",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("path",{d:"M9 9v11",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("path",{d:"M7 13h4M7 16h3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),contentHeading:"Track Delivery Challan",contentBody:`Get acknowledgement upon delivery with the “Delivery Challan” of Vyapar. Create a delivery challan format and attach it to your consignment using this free GST invoicing app.

You can ensure your goods have reached customers safely by tracking delivery challans. Our GST billing software helps you track your consignments easily and helps provide instructions if they get misplaced. Our ultimate free GST Invoicing Software helps manage consignor and consignee details seamlessly.

You can include the terms and conditions of the order to avoid disputes and bring more clarity to the scope of the order. This process makes the business run smoothly and is helpful for the customers to get the consignment safely.

Converting the delivery challans into bills is also a pretty efficient option, as it helps adjust auto stock. Maintain all the records of delivery acknowledgement with the GST billing & Accounting software. It is an easier way of running a business with major productivity goals.

You can convert your delivery challans into invoices when the consignment reaches the customer. You can do it using the free billing app by Vyapar. It will allow you to receive payments using multiple payment options. To avoid delayed dues collection, you can offer both offline and online payment solutions through the tax invoice.`},{id:7,title:"Link Your Bank Accounts",Icon:a=>(0,b.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",...a,children:[(0,b.jsx)("path",{d:"M12 3a6 6 0 0 1 6 6c0 4 2 5 2 5H4s2-1 2-5a6 6 0 0 1 6-6z",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("path",{d:"M10 21h4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,b.jsx)("path",{d:"M12 1v2",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),contentHeading:"Link Your Bank Accounts",contentBody:`Businesses can easily add, manage, and track online and offline payments quickly. If they opt for an easy-to-use free GST billing app for mobile, the tasks get easier. Whether your revenue is from the banks or e-wallets, you can seamlessly enter data into the free billing software.

You can send or receive money using bank accounts and perform bank-to-bank transfers for seamless cash flow management. So, it is ideal for businesses with all the cash-ins and cash-outs using the Vyapar invoicing app.

A business account in your bank needs to be added to the GST Accounting Software to use the bank accounts feature within the app. You can easily manage credit cards and OD and loan accounts using the Vyapar app. This process is the most suitable option for keeping the complete bank account book without hassle. Further, it allows you to withdraw or deposit money in your bank accounts seamlessly.

Free invoicing & accounting software can also be accessed anywhere with internet connectivity from your mobile. Free accounting software by Vyapar helps you adjust the amount manually and manage cheque payments.

The Vyapar App has open cheques, which allow the user to make a quick deposit or withdraw and close them quickly. Along with many other payment options available in the app, we also allow you to keep track of cheque payments.`},{id:8,title:"Create 50+ Business Reports",Icon:a=>(0,b.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",...a,children:[(0,b.jsx)("circle",{cx:"12",cy:"8",r:"4",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("path",{d:"M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),contentHeading:"Create 50+ Business Reports",contentBody:`Businesses are required to make informed decisions to ensure a consistent growth trajectory. Use 50+ business reports created using our GST billing and accounting software for all your business requirements.

Vyapar accounting software comes with professional balance sheet formats. Using Vyapar extensively increases your business’s operational efficiency as you can easily export the reports in PDF or Excel.
• Accounting and management
• Billing and e-payments
• GST Reports and taxation

Users can easily view and analyse the data instantly using our free GST Invoicing & Accounting Software. You can create graphical reports for tracking sales and expenses using the app. This free software analyses accurate business details, accounts, and many more; it is also an efficient way to quickly analyse the business’s profit. Various reports, such as:
• GSTR 1 format report
• GSTR 3B format report
• GST-related reports
• Balance Sheet
• Profit & Loss`},{id:9,title:"GST Invoicing / Billing",Icon:a=>(0,b.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",...a,children:[(0,b.jsx)("circle",{cx:"9",cy:"8",r:"3.5",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("circle",{cx:"17",cy:"9",r:"2.5",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("path",{d:"M3 20c0-3 2.5-5.5 6-5.5s6 2.5 6 5.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,b.jsx)("path",{d:"M15 15c2 0 4 1.5 4 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),contentHeading:"GST Invoicing / Billing",contentBody:`Our all-in-one free GST billing software is an excellent addition to your business as it helps you automate your billing requirements. It is pretty efficient in assisting medium and small enterprises to save more time in accounting.

With the help of free billing software with GST, business owners could efficiently perform various tasks, including GST return filing, inventory management, invoicing, and billing. Our free accounting app allows businesses to customise the fields per their unique requirements.

You can use the app to generate GST invoices for your clients within 20 seconds and print/share them with customers. Bills are mainly recommended in the GST invoice format, and you can create them using our GST Software for billing.

You can use the barcode billing software and easily scan to speed up your billing process, and shortcut keys can help you do redundant tasks faster. “Bill wise payment” in the Vyapar app is one of the essential features, as it is pretty easy to link your payments with your sales invoices.

The free GST mobile app creates multiple parties to manage all clients seamlessly. With the help of this feature, it is easier to track all the due dates in the invoice and track old invoices anytime. The Vyapar app allows any business to identify any overdue payments quickly.`},{id:10,title:"Automatic Data Backup",Icon:a=>(0,b.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",...a,children:[(0,b.jsx)("path",{d:"M4 20V10",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"}),(0,b.jsx)("path",{d:"M9 20V6",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"}),(0,b.jsx)("path",{d:"M14 20V12",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"}),(0,b.jsx)("path",{d:"M19 20V4",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"})]}),contentHeading:"Automatic Data Backup",contentBody:`GST billing & accounting Software is 100% secure, and you can easily store your data accurately. Our free app lets you keep your data secure by creating local, external or online Google Drive backups.

You can easily use this GST Invoicing & Accounting Software to recover data quickly. The data is encrypted with added security, and the Vyapar app is an advanced free invoicing & accounting software.

Vyapar GST billing software in India comes with a hassle-free backup system with the “auto-backup” feature. After activating this mode on the Vyapar app, an automatic backup is created every day, so getting all your data backup is easier, so you would not lose anything.

Most businesses in India have used this free accounting and invoicing software to make the job quick with added data security. The app has an encryption system that allows it to keep the data accessible to the owner only, to enhance security further.

Anyone in the Vyapar team cannot use your business data, and thus it makes your data secure for future reference. Using the GST billing app, you can create data backups per your requirement and help ensure the security of your data using multiple backup options.`},{id:11,title:"Laser and Thermal Printer Compatibility",Icon:a=>(0,b.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",...a,children:[(0,b.jsx)("circle",{cx:"8",cy:"8",r:"3",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("circle",{cx:"16",cy:"8",r:"3",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("path",{d:"M2 20c0-2.8 2.7-5 6-5 1.2 0 2.4.3 3.3.8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,b.jsx)("path",{d:"M22 20c0-2.8-2.7-5-6-5-1.2 0-2.4.3-3.3.8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),contentHeading:"Laser and Thermal Printer Compatibility",contentBody:`Whether you require your invoice in the perfect format instead of bill format or Excel format, this free billing software is the best. Vyapar is compatible with thermal and regular (laser) printers and can help you get your desired printout within minutes.

Vyapar’s invoicing and accounting software/app is an efficient way to print your invoices and Bills. Now you have the better option to quickly generate the prints in all suitable size options, including regular paper size A4 & A5, thermal paper size 2” & 3”, and other custom paper size options.

Connect our app with your regular/thermal printer via Bluetooth or plug-in to start printing your invoices. You can use the Vyapar app to create and send a professional invoice to your customers. You don’t need to print, and use digital methods like e-mail, SMS, or WhatsApp.

Using the free GST invoicing app, you can choose from multiple Excel, Word, or PDF formats, create an invoice with complete customisation, and print it out for your customers. The process is seamless, and charges have been reduced to an all-time low in the last few years. You can use regular and thermal printers to print out the invoice and hand it over to clients.`},{id:12,title:"Online Business Store",Icon:a=>(0,b.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",...a,children:[(0,b.jsx)("rect",{x:"7",y:"2",width:"10",height:"20",rx:"2.5",stroke:"currentColor",strokeWidth:"2"}),(0,b.jsx)("path",{d:"M10 5h4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,b.jsx)("circle",{cx:"12",cy:"18",r:"1",fill:"currentColor"})]}),contentHeading:"Online Business Store",contentBody:`Set up your online store within a few hours using the Vyapar GST billing software. Using our billing app, you can list all the services/products you sell to your customers online, and it will help you present a catalogue of all the services/products you sell and boost your sales online.

Also, Vyapar billing software does not add any additional charges for using online store features that help you take your business online. You can send the link to your online store to your customers, and using the link, they can place orders with you online and pick up the products from your store once you have them packed.

Using the online store feature in the GST billing and invoicing app for your business will help you reduce waiting time at the store counter, as you will have the package packed for your customers before they reach the store. You can bring in more customers in your locality by taking your business online using the Vyapar online store.

Using the online store is the best way to help everyone in your locality by providing doorstep or pick-up services from your store. It helps increase the sales and hence the growth of the business. Using the GST billing software, you can update your online store anytime.`}];a.s(["default",0,()=>{let[a,e]=(0,c.useState)(d[0].id),f=d.find(b=>b.id===a),g=(0,c.useRef)(null),h=(0,c.useRef)({});(0,c.useEffect)(()=>{let b=h.current[a];if(b&&g.current){let a=g.current,c=b.offsetLeft,d=b.offsetWidth,e=a.offsetWidth;a.scrollTo({left:c-e/2+d/2,behavior:"smooth"})}},[a]);let i={display:"flex",alignItems:"center",gap:"14px",padding:"14px 18px",borderRadius:"12px",border:"1.5px solid transparent",cursor:"pointer",transition:"all 0.2s ease",backgroundColor:"#ffffff",flexShrink:0},j={backgroundColor:"#FEF2F2",borderColor:"#ED1A3B"},k={width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",color:"#ED1A3B",flexShrink:0},l={fontFamily:"'Poppins', sans-serif",fontWeight:500,fontSize:"15px",lineHeight:1.4,color:"#314259",margin:0},m={fontWeight:600,color:"#ED1A3B"},n={fontFamily:"'Poppins', sans-serif",fontWeight:700,fontSize:"24px",lineHeight:1.35,color:"#314259",margin:0,marginBottom:"20px"},o={fontFamily:"'Poppins', sans-serif",fontWeight:400,fontSize:"15px",lineHeight:1.8,color:"#787878",margin:0,whiteSpace:"pre-line"},p={flexShrink:0,display:"flex",alignItems:"center",gap:"8px",padding:"10px 18px",borderRadius:"50px",border:"1.5px solid #e0e0e0",backgroundColor:"#ffffff",cursor:"pointer",transition:"all 0.2s ease",whiteSpace:"nowrap"},q={backgroundColor:"#FEF2F2",borderColor:"#ED1A3B"},r={width:"22px",height:"22px",color:"#ED1A3B",flexShrink:0},s={fontFamily:"'Poppins', sans-serif",fontWeight:500,fontSize:"13px",color:"#314259"},t={fontWeight:600,color:"#ED1A3B"},u=`
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
  `;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:u}),(0,b.jsx)("section",{id:"features",style:{width:"100%",backgroundColor:"#F5F6F8",padding:"64px 0",fontFamily:"'Poppins', sans-serif"},"aria-label":"Feature details",children:(0,b.jsxs)("div",{style:{maxWidth:"1400px",margin:"0 auto",padding:"0 24px"},children:[(0,b.jsx)("h2",{className:"fe-section-heading",style:{fontFamily:"'Poppins', sans-serif",fontWeight:700,fontSize:"32px",lineHeight:1.3,color:"#314259",textAlign:"center",margin:0,marginBottom:"48px"},children:"Features of GST Billing and Accounting Software"}),(0,b.jsxs)("div",{className:"fe-desktop-columns",style:{display:"flex",gap:"32px",alignItems:"stretch"},children:[(0,b.jsx)("div",{className:"fe-left-col",style:{width:"380px",flexShrink:0,maxHeight:"520px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"8px",paddingRight:"8px"},children:d.map(c=>{let d=c.id===a;return(0,b.jsxs)("button",{className:`fe-card ${d?"fe-card-active":""}`,style:{...i,...d?j:{}},onClick:()=>e(c.id),"aria-pressed":d,children:[(0,b.jsx)("div",{style:k,children:(0,b.jsx)(c.Icon,{width:28,height:28})}),(0,b.jsx)("span",{style:{...l,...d?m:{}},children:c.title})]},c.id)})}),(0,b.jsxs)("div",{className:"fe-right-col",style:{flex:1,backgroundColor:"#ffffff",borderRadius:"16px",padding:"36px 40px",maxHeight:"520px",overflowY:"auto",boxShadow:"0 2px 12px rgba(0,0,0,0.04)"},children:[(0,b.jsx)("h3",{style:n,children:f.contentHeading}),(0,b.jsx)("p",{style:o,children:f.contentBody})]},f.id)]}),(0,b.jsx)("div",{className:"fe-mobile-slider",ref:g,style:{display:"none",overflowX:"auto",gap:"10px",paddingBottom:"8px",marginBottom:"24px",scrollBehavior:"smooth",WebkitOverflowScrolling:"touch"},children:d.map(c=>{let d=c.id===a;return(0,b.jsxs)("button",{className:`fe-pill ${d?"fe-pill-active":""}`,ref:a=>{h.current[c.id]=a},style:{...p,...d?q:{}},onClick:()=>e(c.id),"aria-pressed":d,children:[(0,b.jsx)(c.Icon,{style:r}),(0,b.jsx)("span",{style:{...s,...d?t:{}},children:c.title})]},c.id)})}),(0,b.jsxs)("div",{className:"fe-mobile-content",style:{display:"none",backgroundColor:"#ffffff",borderRadius:"16px",padding:"28px 24px",boxShadow:"0 2px 12px rgba(0,0,0,0.04)"},children:[(0,b.jsx)("h3",{style:{...n,fontSize:"20px"},children:f.contentHeading}),(0,b.jsx)("p",{style:{...o,fontSize:"14px"},children:f.contentBody})]},`m-${f.id}`)]})})]})}])},50078,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(71987);let e=[(0,b.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,b.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,b.jsx)("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),(0,b.jsx)("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),(0,b.jsx)("polyline",{points:"10 9 9 9 8 9"})]},"1"),(0,b.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),(0,b.jsx)("polyline",{points:"9 12 11 14 15 10"})]},"2"),(0,b.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,b.jsx)("polyline",{points:"12 6 12 12 16 14"})]},"3"),(0,b.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),(0,b.jsx)("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),(0,b.jsx)("line",{x1:"6",y1:"20",x2:"6",y2:"14"})]},"4"),(0,b.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),(0,b.jsx)("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]},"5"),(0,b.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),(0,b.jsx)("circle",{cx:"9",cy:"7",r:"4"}),(0,b.jsx)("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),(0,b.jsx)("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]},"6"),(0,b.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),(0,b.jsx)("polyline",{points:"17 6 23 6 23 12"})]},"7"),(0,b.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("circle",{cx:"12",cy:"12",r:"3"}),(0,b.jsx)("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]},"8")],f=[{id:1,title:"Lifetime Free Basic Usage",description:"Get started with essential billing and invoicing features at absolutely no cost. Perfect for small businesses beginning their digital journey.",readMore:`Get started with essential billing and invoicing features at absolutely no cost. Perfect for small businesses beginning their digital journey.

The free tier includes all the fundamental tools you need to manage your day-to-day billing operations. You can create professional invoices, manage your customer database, and track basic expenses without paying a single rupee.

This makes it ideal for startups, freelancers, and small shop owners who want to digitize their billing process without any upfront investment. As your business grows, you can seamlessly upgrade to premium features while keeping all your existing data intact.

The lifetime free model ensures that every business, regardless of size or budget, can access modern billing technology. There are no hidden charges or trial period limitations on the basic features.`,icon:e[0]},{id:2,title:"Secure Data Backup & Protection",description:"Your business data is always safe with automatic cloud backups and local storage options. Never worry about losing important records again.",readMore:`Your business data is always safe with automatic cloud backups and local storage options. Never worry about losing important records again.

Data security is paramount for any business. The software provides multiple layers of protection including encrypted cloud storage, automatic daily backups, and the option to maintain local copies of your data.

In case of device failure, theft, or accidental deletion, you can restore your complete business data within minutes. The backup system works seamlessly in the background, ensuring your latest transactions are always saved.

Additionally, role-based access control ensures that only authorized personnel can view or modify sensitive business information. This comprehensive security approach gives you peace of mind while managing your finances.`,icon:e[1]},{id:3,title:"Save Time with Automation",description:"Automate repetitive tasks like invoice generation, payment reminders, and report creation. Focus on growing your business instead.",readMore:`Automate repetitive tasks like invoice generation, payment reminders, and report creation. Focus on growing your business instead.

Manual data entry and repetitive billing tasks can consume hours of your valuable time every day. With built-in automation features, you can set up recurring invoices for regular clients, schedule automatic payment reminders, and generate reports with a single click.

The smart automation engine learns from your billing patterns and suggests optimizations. For example, it can auto-fill customer details, apply standard discounts, and calculate taxes based on product categories.

Businesses using automation features report saving an average of 4-5 hours per week on administrative tasks. This time can be redirected toward customer acquisition, product development, or strategic planning.`,icon:e[2]},{id:4,title:"Detailed Business Reports",description:"Generate comprehensive reports including sales analysis, expense tracking, profit margins, and tax summaries at the click of a button.",readMore:`Generate comprehensive reports including sales analysis, expense tracking, profit margins, and tax summaries at the click of a button.

Understanding your business performance is crucial for making informed decisions. The reporting module provides over 20 different report types covering every aspect of your business operations.

Key reports include daily sales summaries, monthly revenue trends, customer-wise transaction history, product performance analysis, outstanding payment reports, and GST filing summaries. Each report can be customized with date ranges, filters, and sorting options.

Visual dashboards with charts and graphs make it easy to spot trends and identify areas for improvement. You can export reports in multiple formats including PDF, Excel, and CSV for sharing with your accountant or business partners.`,icon:e[3]},{id:5,title:"Multiple Payment Options",description:"Accept payments through cash, UPI, cards, net banking, wallets, and more. Provide convenience to your customers with flexible payment methods.",readMore:`Accept payments through cash, UPI, cards, net banking, wallets, and more. Provide convenience to your customers with flexible payment methods.

In today's digital economy, customers expect multiple payment options. The software supports all major payment methods including cash, credit cards, debit cards, UPI (Google Pay, PhonePe, Paytm), net banking (NEFT, RTGS, IMPS), and digital wallets.

You can record split payments where a customer pays partially through one method and the remainder through another. QR code-based payments can be generated directly from invoices, making it easy for customers to pay instantly.

The payment tracking system automatically reconciles received payments with outstanding invoices, giving you a clear picture of your cash flow at any time. Payment receipts can be generated and shared with customers via WhatsApp or email.`,icon:e[4]},{id:6,title:"Multi-User Access & Roles",description:"Add team members with customized access levels. Assign roles like admin, billing staff, or viewer to maintain control over your business data.",readMore:`Add team members with customized access levels. Assign roles like admin, billing staff, or viewer to maintain control over your business data.

As your business grows, you need multiple people to handle different aspects of operations. The multi-user feature allows you to add employees, accountants, and managers with specific permission levels.

You can define exactly what each user can see and do — from creating invoices and managing inventory to viewing financial reports and modifying settings. This ensures data security while enabling collaborative work.

Activity logs track every action performed by each user, providing complete transparency and accountability. You can also set up approval workflows where certain actions require manager authorization before execution.`,icon:e[5]},{id:7,title:"Business Growth Insights",description:"Get actionable insights about your best-selling products, peak business hours, customer buying patterns, and revenue growth trends.",readMore:`Get actionable insights about your best-selling products, peak business hours, customer buying patterns, and revenue growth trends.

Data-driven decision making is the key to sustainable business growth. The insights module analyzes your transaction data to provide meaningful business intelligence that helps you make smarter decisions.

Discover which products contribute most to your revenue, identify seasonal demand patterns, understand customer purchasing behavior, and track your month-over-month growth. The system also highlights slow-moving inventory and suggests pricing optimizations.

Comparative analysis tools let you benchmark current performance against previous periods. You can set business goals and track your progress with visual indicators. These insights transform raw data into actionable strategies for growing your business.`,icon:e[6]},{id:8,title:"Easy Setup & Customization",description:"Get started in minutes with an intuitive setup wizard. Customize invoice templates, business profiles, and tax settings to match your needs.",readMore:`Get started in minutes with an intuitive setup wizard. Customize invoice templates, business profiles, and tax settings to match your needs.

Unlike complex enterprise software that requires days of training, this solution is designed for simplicity. The guided setup wizard walks you through the initial configuration in under 10 minutes, covering your business profile, tax settings, and preferences.

Choose from 10+ professionally designed invoice templates that can be customized with your logo, brand colors, terms and conditions, and bank details. You can create different templates for different purposes — estimates, invoices, delivery challans, and receipts.

The settings panel provides granular control over every aspect of the software. Configure tax rates, discount policies, payment terms, notification preferences, and more. Changes take effect immediately, ensuring your workflow always matches your business requirements.`,icon:e[7]}],g=f.slice(0,4),h=f.slice(4,8);a.s(["default",0,()=>{let[a,e]=(0,c.useState)(null),i=f.find(b=>b.id===a);(0,c.useEffect)(()=>(null!==a?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[a]);let j=(0,c.useCallback)(b=>{"Escape"===b.key&&null!==a&&e(null)},[a]);(0,c.useEffect)(()=>(document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)),[j]);let k=()=>e(null),l={flex:1,display:"flex",flexDirection:"column",gap:"40px"},m={display:"flex",gap:"16px",alignItems:"flex-start"},n={width:"52px",height:"52px",minWidth:"52px",borderRadius:"14px",border:"1.5px solid #FDDDE3",backgroundColor:"#FFF5F7",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},o={display:"flex",flexDirection:"column"},p={fontFamily:"'Poppins', sans-serif",fontWeight:700,fontSize:"16px",lineHeight:"1.4",color:"#314259",margin:"0 0 6px 0"},q={fontFamily:"'Poppins', sans-serif",fontWeight:400,fontSize:"13.5px",lineHeight:"1.7",color:"#787878",margin:"0 0 10px 0"},r={fontFamily:"'Poppins', sans-serif",fontWeight:600,fontSize:"13.5px",color:"#ED1A3B",cursor:"pointer",userSelect:"none",display:"inline-flex",alignItems:"center",gap:"4px",transition:"opacity 0.2s ease",background:"none",border:"none",padding:0},s=`
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
  `,t=a=>(0,b.jsxs)("div",{style:m,children:[(0,b.jsx)("div",{style:n,children:a.icon}),(0,b.jsxs)("div",{style:o,children:[(0,b.jsx)("h3",{style:p,children:a.title}),(0,b.jsx)("p",{style:q,children:a.description}),(0,b.jsxs)("button",{className:"benefits-read-more",style:r,onClick:()=>e(a.id),"aria-haspopup":"dialog",children:[(0,b.jsx)("span",{style:{fontSize:"16px",lineHeight:1,display:"inline-block"},children:"+"}),"Read more"]})]})]},a.id);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:s}),(0,b.jsx)("section",{id:"benefits",style:{width:"100%",backgroundColor:"#FFFFFF",padding:"70px 0 80px",fontFamily:"'Poppins', sans-serif"},"aria-label":"Benefits of GST Billing Software",children:(0,b.jsxs)("div",{style:{maxWidth:"1400px",margin:"0 auto",padding:"0 24px"},children:[(0,b.jsx)("h2",{className:"benefits-section-heading",style:{fontFamily:"'Poppins', sans-serif",fontWeight:800,fontSize:"38px",lineHeight:"1.3",color:"#314259",textAlign:"center",margin:"0 0 56px 0"},children:"Top 8 Benefits of GST Billing Software"}),(0,b.jsxs)("div",{className:"benefits-three-col",style:{display:"flex",alignItems:"center",gap:"40px"},children:[(0,b.jsx)("div",{className:"benefits-left-col",style:l,children:g.map(t)}),(0,b.jsx)("div",{className:"benefits-center-col",style:{flex:"0 0 auto",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,b.jsx)("div",{className:"benefits-center-image-wrapper",style:{width:"350px",borderRadius:"20px",overflow:"hidden",boxShadow:"0 12px 40px rgba(0,0,0,0.10)"},children:(0,b.jsx)(d.default,{src:"/assets/benefits.webp",alt:"GST Billing Software Benefits",width:380,height:650,style:{width:"100%",height:"auto",objectFit:"cover",display:"block"},priority:!0})})}),(0,b.jsx)("div",{className:"benefits-right-col",style:l,children:h.map(t)})]})]})}),i&&(0,b.jsx)("div",{style:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:9998,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",animation:"benefitFadeIn 0.25s ease"},onClick:a=>{a.target===a.currentTarget&&k()},role:"dialog","aria-modal":"true","aria-labelledby":"benefit-modal-title",children:(0,b.jsxs)("div",{className:"benefits-modal",style:{position:"relative",backgroundColor:"#ffffff",borderRadius:"16px",width:"100%",maxWidth:"640px",maxHeight:"80vh",display:"flex",flexDirection:"column",boxShadow:"0 24px 80px rgba(0, 0, 0, 0.18)",animation:"benefitSlideUp 0.3s ease",overflow:"hidden"},children:[(0,b.jsxs)("div",{className:"benefits-modal-header",style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"16px",padding:"24px 28px 16px 28px",borderBottom:"1px solid #f0f0f0",flexShrink:0},children:[(0,b.jsx)("h3",{id:"benefit-modal-title",className:"benefits-modal-heading",style:{fontFamily:"'Poppins', sans-serif",fontWeight:700,fontSize:"20px",lineHeight:"1.4",color:"#314259",margin:0},children:i.title}),(0,b.jsx)("button",{className:"benefits-close-btn",style:{width:"36px",height:"36px",borderRadius:"50%",border:"none",backgroundColor:"#F5F6F8",color:"#555555",fontSize:"20px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"background-color 0.2s ease, color 0.2s ease"},onClick:k,"aria-label":"Close dialog",children:"✕"})]}),(0,b.jsx)("div",{className:"benefits-modal-body",style:{padding:"20px 28px 28px 28px",overflowY:"auto",fontFamily:"'Poppins', sans-serif",fontSize:"14.5px",lineHeight:"1.8",color:"#555555",whiteSpace:"pre-line"},children:i.readMore})]})})]})}])},10029,a=>{"use strict";var b=a.i(87924),c=a.i(72131);let d=[{id:1,title:"Construction Business",paragraph:"Vyapar billing software helps construction businesses manage project-based invoicing, track material costs, and handle contractor payments efficiently. Create detailed estimates, convert them to invoices, and monitor expenses across multiple construction sites with ease. The software supports multi-project tracking, labour cost management, and material reconciliation to keep your construction business profitable."},{id:2,title:"Retail & Shopping",paragraph:"Retail shop owners can streamline their billing process with barcode scanning, inventory tracking, and instant GST invoicing. Vyapar helps manage stock levels, generate sales reports, and keep accurate records of every transaction in your store. Whether you run a single outlet or multiple branches, the software adapts to your retail needs with ease."},{id:3,title:"Food & Restaurant",paragraph:"From small eateries to restaurant chains, Vyapar simplifies order billing, kitchen inventory management, and expense tracking. Generate itemized bills, manage supplier payments, and analyze daily sales performance to grow your food business. Track ingredient costs, monitor wastage, and optimize your menu pricing for maximum profitability."},{id:4,title:"Wholesale & Distribution",paragraph:"Wholesale distributors can manage bulk orders, track deliveries with challans, and handle complex pricing structures. Vyapar supports party-wise pricing, credit management, and detailed stock reports to keep your distribution business running smoothly. Manage multiple warehouses, track goods in transit, and maintain accurate ledgers for all your parties."},{id:5,title:"Textile & Garment",paragraph:"The textile industry requires detailed size, color, and batch tracking. Vyapar offers customized invoicing templates, fabric inventory management, and seasonal sales analysis to help garment businesses maintain profitability year-round. Handle complex product variants, manage job work orders, and track production costs efficiently."},{id:6,title:"Electronics & Hardware",paragraph:"Electronics dealers can manage serial number tracking, warranty records, and service billing with Vyapar. The software supports product cataloging, repair service invoicing, and comprehensive inventory management for hardware stores. Track each unit by IMEI or serial number, manage AMC contracts, and handle service center operations."},{id:7,title:"Pharma & Healthcare",paragraph:"Pharmaceutical businesses benefit from batch-wise tracking, expiry date management, and GST-compliant drug billing. Vyapar helps maintain accurate medicine inventories, generate purchase orders, and ensure regulatory compliance. Set up automatic alerts for expiring stock and manage returns efficiently to minimize losses."},{id:8,title:"Services & Freelancing",paragraph:"Service providers and freelancers can create professional invoices, track project hours, and manage client payments effortlessly. Vyapar helps build a professional brand image while keeping your finances organized and tax-ready. Generate recurring invoices for retainer clients, track expenses by project, and maintain a clear record of all your earnings."}],e=[(0,b.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",ry:"2"}),(0,b.jsx)("line",{x1:"9",y1:"6",x2:"9",y2:"6.01"}),(0,b.jsx)("line",{x1:"15",y1:"6",x2:"15",y2:"6.01"}),(0,b.jsx)("line",{x1:"9",y1:"10",x2:"9",y2:"10.01"}),(0,b.jsx)("line",{x1:"15",y1:"10",x2:"15",y2:"10.01"}),(0,b.jsx)("line",{x1:"9",y1:"14",x2:"9",y2:"14.01"}),(0,b.jsx)("line",{x1:"15",y1:"14",x2:"15",y2:"14.01"}),(0,b.jsx)("rect",{x:"10",y:"18",width:"4",height:"4"})]},"c1"),(0,b.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("path",{d:"M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"}),(0,b.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),(0,b.jsx)("path",{d:"M16 10a4 4 0 01-8 0"})]},"c2"),(0,b.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("path",{d:"M18 8h1a4 4 0 010 8h-1"}),(0,b.jsx)("path",{d:"M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"}),(0,b.jsx)("line",{x1:"6",y1:"1",x2:"6",y2:"4"}),(0,b.jsx)("line",{x1:"10",y1:"1",x2:"10",y2:"4"}),(0,b.jsx)("line",{x1:"14",y1:"1",x2:"14",y2:"4"})]},"c3"),(0,b.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("rect",{x:"1",y:"3",width:"15",height:"13"}),(0,b.jsx)("polygon",{points:"16 8 20 8 23 11 23 16 16 16 16 8"}),(0,b.jsx)("circle",{cx:"5.5",cy:"18.5",r:"2.5"}),(0,b.jsx)("circle",{cx:"18.5",cy:"18.5",r:"2.5"})]},"c4"),(0,b.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("circle",{cx:"6",cy:"6",r:"3"}),(0,b.jsx)("circle",{cx:"6",cy:"18",r:"3"}),(0,b.jsx)("line",{x1:"20",y1:"4",x2:"8.12",y2:"15.88"}),(0,b.jsx)("line",{x1:"14.47",y1:"14.48",x2:"20",y2:"20"}),(0,b.jsx)("line",{x1:"8.12",y1:"8.12",x2:"12",y2:"12"})]},"c5"),(0,b.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),(0,b.jsx)("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),(0,b.jsx)("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]},"c6"),(0,b.jsx)("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})},"c7"),(0,b.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),(0,b.jsx)("path",{d:"M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"})]},"c8")],f=()=>(0,b.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("polyline",{points:"15 18 9 12 15 6"})}),g=()=>(0,b.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("polyline",{points:"9 6 15 12 9 18"})});a.s(["default",0,()=>{let[a,h]=(0,c.useState)(0),[i,j]=(0,c.useState)(!1),[k,l]=(0,c.useState)(null),[m,n]=(0,c.useState)(null),o=(0,c.useRef)(null),p=d.length,q=(0,c.useCallback)(()=>{o.current&&clearInterval(o.current),o.current=setInterval(()=>{j(!0),h(a=>(a+1)%p)},5e3)},[p]);(0,c.useEffect)(()=>(q(),()=>{o.current&&clearInterval(o.current)}),[q]);let r=b=>{i&&b===a||(j(!0),h(b),q())},s=()=>{r((a+1)%p)},t=()=>{r((a-1+p)%p)},u=(0,c.useCallback)(a=>{"ArrowLeft"===a.key&&t(),"ArrowRight"===a.key&&s()},[a]);(0,c.useEffect)(()=>(document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)),[u]);let v={section:{width:"100%",backgroundColor:"#F7F8FA",padding:"70px 0 80px",fontFamily:"'Poppins', sans-serif",overflow:"hidden"},container:{maxWidth:"1300px",margin:"0 auto",padding:"0 24px"},sectionHeading:{fontFamily:"'Poppins', sans-serif",fontWeight:800,fontSize:"38px",lineHeight:"1.3",color:"#314259",textAlign:"center",margin:"0 0 24px 0"},staticParagraph:{fontFamily:"'Poppins', sans-serif",fontWeight:400,fontSize:"15px",lineHeight:"1.8",color:"#787878",textAlign:"center",maxWidth:"860px",margin:"0 auto 52px auto"},carouselWrapper:{position:"relative",width:"100%"},carouselViewport:{overflow:"hidden",borderRadius:"20px",backgroundColor:"#FFFFFF",boxShadow:"0 8px 40px rgba(0,0,0,0.07)"},carouselTrack:{display:"flex",transition:"transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",transform:`translateX(-${100*a}%)`},slide:{minWidth:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"56px 60px",textAlign:"center"},slideIconBox:{width:"72px",height:"72px",borderRadius:"20px",border:"1.5px solid #FDDDE3",backgroundColor:"#FFF5F7",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"28px"},slideTitle:{fontFamily:"'Poppins', sans-serif",fontWeight:700,fontSize:"28px",lineHeight:"1.35",color:"#314259",margin:"0 0 18px 0"},slideParagraph:{fontFamily:"'Poppins', sans-serif",fontWeight:400,fontSize:"15px",lineHeight:"1.85",color:"#787878",margin:0,maxWidth:"720px"},arrowBtn:{position:"absolute",top:"50%",transform:"translateY(-50%)",width:"48px",height:"48px",borderRadius:"50%",border:"2px solid #E8E8E8",backgroundColor:"#FFFFFF",color:"#314259",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,transition:"all 0.25s ease",boxShadow:"0 4px 16px rgba(0,0,0,0.08)"},arrowLeft:{left:"-24px"},arrowRight:{right:"-24px"},dotsWrapper:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",marginTop:"32px"},dot:{width:"10px",height:"10px",borderRadius:"50%",border:"none",cursor:"pointer",transition:"all 0.3s ease",padding:0},dotActive:{backgroundColor:"#ED1A3B",width:"28px",borderRadius:"5px"},dotInactive:{backgroundColor:"#D9D9D9"}},w=`
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
  `;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:w}),(0,b.jsx)("section",{style:v.section,"aria-label":"Built for Small Businesses",children:(0,b.jsxs)("div",{style:v.container,children:[(0,b.jsx)("h2",{className:"build-section-heading",style:v.sectionHeading,children:"Built for Small Businesses"}),(0,b.jsx)("p",{className:"build-static-paragraph",style:v.staticParagraph,children:"Vyapar GST billing software and accounting tools have numerous features. Collectively, they help businesses across industries. Vyapar app is built to serve every industry. It is customisable to meet the requirement of your business as per your unique business requirements. Some of the most popular industries use the Vyapar GST accounting software. It helps manage all of their business requirements."}),(0,b.jsxs)("div",{style:v.carouselWrapper,children:[(0,b.jsx)("div",{style:v.carouselViewport,onTouchStart:a=>{n(null),l(a.targetTouches[0].clientX)},onTouchMove:a=>{n(a.targetTouches[0].clientX)},onTouchEnd:()=>{if(!k||!m)return;let a=k-m;Math.abs(a)>=50&&(a>0?s():t())},children:(0,b.jsx)("div",{style:v.carouselTrack,onTransitionEnd:()=>{j(!1)},children:d.map((a,c)=>(0,b.jsxs)("div",{className:"build-slide",style:v.slide,children:[(0,b.jsx)("div",{className:"build-slide-icon-box",style:v.slideIconBox,children:e[c]}),(0,b.jsx)("h3",{className:"build-slide-title",style:v.slideTitle,children:a.title}),(0,b.jsx)("p",{className:"build-slide-paragraph",style:v.slideParagraph,children:a.paragraph})]},a.id))})}),(0,b.jsx)("button",{className:"build-arrow-btn build-arrow-left",style:{...v.arrowBtn,...v.arrowLeft},onClick:t,"aria-label":"Previous slide",children:(0,b.jsx)(f,{})}),(0,b.jsx)("button",{className:"build-arrow-btn build-arrow-right",style:{...v.arrowBtn,...v.arrowRight},onClick:s,"aria-label":"Next slide",children:(0,b.jsx)(g,{})})]}),(0,b.jsx)("div",{className:"build-dots-wrapper",style:v.dotsWrapper,children:d.map((c,d)=>(0,b.jsx)("button",{style:{...v.dot,...d===a?v.dotActive:v.dotInactive},onClick:()=>r(d),"aria-label":`Go to slide ${d+1}`,"aria-current":d===a?"true":void 0},c.id))})]})})]})}])},89983,a=>{"use strict";var b=a.i(87924),c=a.i(72131);let d=[{id:1,q:"What is the GST Bill?",a:`A GST Bill is simply a tax invoice created by a seller when goods or services are sold under India’s Goods and Services Tax (GST) system. It’s an official document that lists all the important details of a transaction, like the seller’s and buyer’s names, GSTIN numbers, date, invoice number, product or service description, quantity, price, and the GST charged on it.

In simple terms, a GST bill is more than just a bill, it’s a record of a genuine sale that ensures taxes are properly accounted for and can be claimed as input tax credit (ITC) by businesses. Every registered business under GST must issue this bill whenever it makes a sale.`},{id:2,q:"Which is the best billing software?",a:`Vyapar app is the best billing software available for SMEs in India. The Vyapar app provides access to a range of useful features. They can make the business management process seamless for business owners.

Using our billing tool, you can save a lot of time and effort required in creating GST invoices. You can use automation tools to manage inventory using tracking features. Further, you can create reports using stored data, and much more.`},{id:3,q:"What is billing software?",a:`Billing software is a tool that helps businesses create bills and invoices quickly without manual work. Instead of writing everything by hand, the software automatically adds item details, calculates totals, taxes, discounts, and records the transaction for future use.

In simple words, billing software makes the process of selling, invoicing, and keeping track of payments much easier. It helps you avoid mistakes, saves time, and keeps all your billing records organized in one place.

Whether you run a shop, service business, or online store, billing software helps you:

• Create professional invoices  
• Track sales and payments  
• Manage customers and items  
• Maintain clean, accurate records or reports  
• Understand your business performance`},{id:4,q:"How much does billing software cost?",a:`You can use Vyapar billing software on Android devices for free anytime. All businesses can get a 7 days free trial with the desktop version. Vyapar billing software only charges for providing access to premium features. You can try premium features for free using trial access in the desktop billing software.`},{id:5,q:"Is there free GST billing software?",a:`Yes, you can get the best GST billing software by Vyapar for free. You can download the app on Android devices at zero cost and use it for your daily business requirements. You do not need to pay to use the app’s basic features.`},{id:6,q:"Which software is used for GST billing?",a:"Vyapar is the best business choice for creating GST bills for customers in India. Over one crore businesses use Vyapar to bill their customers. It is because they trust the Vyapar billing software. Vyapar is the best choice as it comes with a range of useful features that eliminate the requirement to have multiple billing software. It acts as a one stop solution for all business requirements. The best billing solutions make the entire business management process seamless."},{id:7,q:"Which is the best free billing software in India?",a:`By having a simple, feature‑rich, and reliable tool for everyday business use. With a simple, easy to use interface and covering all the business management operations such as invoicing, inventory, and accounting, Vyapar stands out as one of the best choices in India for free use.`},{id:8,q:"How do I invoice clients for free?",a:`You can create GST and non‑GST invoices for your clients. All you need is to use the best billing software by Vyapar. You can download the Vyapar invoicing software. Start by entering new party details. Once done, you can create and send invoices without paying any fees.`},{id:9,q:"What is online billing software?",a:"Online billing software is used to create bills for customers online. The billing tool is used by businesses to get paid for a contract. The billing software that makes online bills does not require you to download the app. You can go to the online billing software by Vyapar, enter details for the invoice to create GST bills. Once generated, you can send them over to your customers."},{id:10,q:"What is the cheapest billing software?",a:`Vyapar brings you the cheapest billing software that comes with various accounting features. You can use the app at a small subscription cost. It helps create professional invoices for customers.

Using affordable billing software, you can reduce the cost of operating your business. After all, Vyapar assists you in various business management tasks.`},{id:11,q:"How do I get a computerised GST bill?",a:`You can use Vyapar invoice templates to create computerised GST bills for your customers. The invoicing tools and billing software by Vyapar make the entire process seamless. It does not make a dent in your financials, as free templates do not require you to pay.

You can download the Vyapar software, automate your business’s billing process. It will save your employees time by creating computerised bills.`},{id:12,q:"What is offline billing software?",a:`Offline billing software creates professional GST bills for customers without an active internet connection. An offline billing tool is helpful if you are running a small business in cities like Delhi, Mumbai, or Bengaluru, or in remote regions like hilly and rural areas with poor network connectivity.

Using the offline version helps ensure that customers get an uninterrupted billing experience. The app data remains secure as the business owner can also do local backups. Further, the app can set up automatic backups too.`}],e=()=>(0,b.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("polyline",{points:"6 9 12 15 18 9"})}),f=()=>(0,b.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#ED1A3B",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("polyline",{points:"18 15 12 9 6 15"})});a.s(["default",0,()=>{let[a,g]=(0,c.useState)(null),h=(0,c.useCallback)(b=>{"Escape"===b.key&&null!==a&&g(null)},[a]);(0,c.useEffect)(()=>(document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)),[h]);let i={borderBottom:"1px solid #E3E5E8",padding:"16px 0"},j={width:"100%",background:"none",border:"none",textAlign:"left",fontWeight:600,fontSize:"16px",lineHeight:"1.4",color:"#314259",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",padding:"0"},k={marginTop:"12px",fontWeight:400,fontSize:"14.5px",lineHeight:"1.8",color:"#555555"},l={display:"flex",alignItems:"center",justifyContent:"center",transition:"transform 0.2s ease"},m=`
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
  `;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:m}),(0,b.jsx)("section",{id:"faqs",style:{width:"100%",backgroundColor:"#FFFFFF",padding:"80px 0 90px",fontFamily:"'Poppins', sans-serif"},"aria-label":"Frequently asked questions",children:(0,b.jsxs)("div",{style:{maxWidth:"1300px",margin:"0 auto",padding:"0 24px"},children:[(0,b.jsx)("h2",{className:"faqs-heading",style:{fontWeight:800,fontSize:"38px",lineHeight:"1.3",color:"#314259",textAlign:"center",margin:"0 0 24px"},children:"GST Billing Software FAQs"}),(0,b.jsx)("div",{className:"faqs-wrapper",style:{display:"flex",flexDirection:"column",gap:"24px"},children:d.map(c=>(0,b.jsxs)("div",{style:i,children:[(0,b.jsxs)("button",{className:"faqs-question",style:j,onClick:()=>{var a;return a=c.id,void g(b=>b===a?null:a)},"aria-expanded":a===c.id,"aria-controls":`faq-answer-${c.id}`,children:[c.q,(0,b.jsx)("span",{style:l,children:a===c.id?(0,b.jsx)(f,{}):(0,b.jsx)(e,{})})]}),a===c.id&&(0,b.jsx)("div",{id:`faq-answer-${c.id}`,role:"region","aria-labelledby":`faq-question-${c.id}`,style:k,children:c.a.split("\n").map((a,c)=>(0,b.jsx)("p",{style:{margin:"0 0 0.6em"},children:a},c))})]},c.id))})]})})]})}])},56170,a=>{"use strict";var b=a.i(87924),c=a.i(72131);a.s(["default",0,()=>{let[a,d]=(0,c.useState)(null),[e,f]=(0,c.useState)(null),[g,h]=(0,c.useState)(!1),i={background:"none",border:"none",padding:"4px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"transform 0.2s ease"},j=({fill:a,size:c=40})=>(0,b.jsx)("svg",{width:c,height:c,viewBox:"0 0 24 24",fill:a,xmlns:"http://www.w3.org/2000/svg",children:(0,b.jsx)("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),k=`
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
  `;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:k}),(0,b.jsx)("section",{style:{width:"100%",backgroundColor:"#FFFFFF",padding:"64px 0 72px",fontFamily:"'Poppins', sans-serif"},"aria-label":"Rate Vyapar",children:(0,b.jsxs)("div",{style:{maxWidth:"800px",margin:"0 auto",padding:"0 24px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[(0,b.jsx)("h2",{className:"rating-heading",style:{fontFamily:"'Poppins', sans-serif",fontWeight:700,fontSize:"32px",lineHeight:"1.35",color:"#314259",margin:"0 0 8px 0"},children:"How Useful is Vyapar for Your Business?"}),(0,b.jsx)("p",{className:"rating-subtitle",style:{fontFamily:"'Poppins', sans-serif",fontWeight:400,fontSize:"15px",lineHeight:"1.6",color:"#787878",margin:"0 0 28px 0"},children:"Click on a star to rate it!"}),(0,b.jsx)("div",{className:"rating-divider",style:{width:"60px",height:"3px",borderRadius:"2px",backgroundColor:"#ED1A3B",margin:"0 0 28px 0"}}),(0,b.jsx)("div",{className:"rating-stars-row",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"28px"},children:[1,2,3,4,5].map(c=>(0,b.jsx)("button",{className:"rating-star-btn",style:i,onClick:()=>{!g&&(f(c),h(!0))},onMouseEnter:()=>{g||d(c)},onMouseLeave:()=>{g||d(null)},"aria-label":`Rate ${c} star${c>1?"s":""}`,children:(0,b.jsx)(j,{fill:null===a||g?null!==e&&c<=e?"#FFB800":"#D9D9D9":c<=a?"#FFB800":"#D9D9D9"})},c))}),g&&(0,b.jsxs)("p",{style:{fontFamily:"'Poppins', sans-serif",fontWeight:600,fontSize:"15px",color:"#22C55E",margin:"16px 0 0 0",display:"flex",alignItems:"center",gap:"6px"},children:[(0,b.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#22C55E",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("polyline",{points:"20 6 9 17 4 12"})}),"Thank you for your rating!"]}),(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[(0,b.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"3px",marginBottom:"6px"},children:(()=>{let a=[];for(let c=1;c<=5;c++){let d=c<=Math.floor(4.43)||c-4.43<1?"#FFB800":"#D9D9D9";a.push((0,b.jsx)(j,{fill:d,size:18},c))}return a})()}),(0,b.jsx)("p",{className:"rating-number",style:{fontFamily:"'Poppins', sans-serif",fontWeight:800,fontSize:"44px",lineHeight:"1",color:"#314259",margin:0},children:4.43}),(0,b.jsx)("p",{className:"rating-out-of",style:{fontFamily:"'Poppins', sans-serif",fontWeight:500,fontSize:"15px",lineHeight:"1",color:"#787878",margin:"0 0 4px 0"},children:"/ 5"}),(0,b.jsxs)("p",{className:"rating-vote-count",style:{fontFamily:"'Poppins', sans-serif",fontWeight:400,fontSize:"14px",lineHeight:"1.5",color:"#9CA3AF",margin:0},children:["Vote count:"," ",(0,b.jsx)("span",{style:{fontWeight:600,color:"#314259"},children:31869..toLocaleString("en-IN")})]})]})]})})]})}])}];

//# sourceMappingURL=_322aba0a._.js.map