(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6429],{6934:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/digitalBook",function(){return t(9285)}])},9285:function(e,r,t){"use strict";t.r(r);var n=t(5893),o=t(7294),i=t(3827),s=t(5171),l=t(8915),a=t(1163),c=t(2474),u=t(9669),f=t.n(u);r.default=()=>{let e=(0,a.useRouter)(),{course_id:r}=e.query,{locale:t}=e,{pathname:u,query:d}=e,[p,h]=(0,o.useState)(null),[g,v]=(0,o.useState)(null),[m,j]=(0,o.useState)({});return(0,o.useEffect)(()=>{f().get("/api/showOneBook/".concat(r)).then(e=>{200===e.data.status&&(j(e.data.book),console.log(e.data.book))}),async function(){let e=await (0,c.R)(t);h(e)}()},[r]),(0,n.jsx)(n.Fragment,{children:p?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{}),m.length?m.map(e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{pageTitle:e["name_".concat(t)]}),(0,n.jsx)("div",{className:"blog-details-area ptb-80",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-lg-12 col-md-12"})})})})]})):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{pageTitle:p.form.digitalBook}),(0,n.jsx)("div",{className:"d-table",children:(0,n.jsx)("div",{className:"error-content",children:(0,n.jsxs)("div",{className:"notfound-404",children:[(0,n.jsx)("br",{}),(0,n.jsx)("h1",{style:{fontSize:"80px"},children:"Loading...."})]})})})]}),(0,n.jsx)(s.Z,{})]}):""})}},7434:function(e,r,t){"use strict";var n=t(7294),o=t(5697),i=t.n(o);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l=(0,n.forwardRef)(function(e,r){var t=e.color,o=e.size,i=void 0===o?24:o,l=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["color","size"]);return n.createElement("svg",s({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("polyline",{points:"6 9 12 15 18 9"}))});l.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},l.displayName="ChevronDown",r.Z=l},2774:function(e,r,t){"use strict";var n=t(7294),o=t(5697),i=t.n(o);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l=(0,n.forwardRef)(function(e,r){var t=e.color,o=e.size,i=void 0===o?24:o,l=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["color","size"]);return n.createElement("svg",s({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),n.createElement("polyline",{points:"22,6 12,13 2,6"}))});l.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},l.displayName="Mail",r.Z=l}},function(e){e.O(0,[1664,2539,9774,2888,179],function(){return e(e.s=6934)}),_N_E=e.O()}]);