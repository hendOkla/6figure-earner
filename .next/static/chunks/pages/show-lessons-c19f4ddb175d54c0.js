(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7817],{4287:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/show-lessons",function(){return n(2777)}])},2777:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(7294),s=n(8915),i=n(3827),a=n(5171),c=n(9669),l=n.n(c),u=n(1163),d=n(2474);t.default=()=>{let e=(0,u.useRouter)(),{MyID:t}=e.query,{locale:n}=e,{pathname:c,query:p}=e,[f,h]=(0,o.useState)(null),[m,v]=(0,o.useState)([]),[g,j]=(0,o.useState)([]);(0,o.useEffect)(()=>{l().get("/api/custom-lesson/".concat(t)).then(e=>{200===e.data.status&&v(e.data.lessons)}),async function(){let e=await (0,d.R)(n);h(e)}(),l().get("/api/edit-course/".concat(t)).then(e=>{200===e.data.status&&j(e.data.course)})},[t]);let y=(t,n,r)=>{t.preventDefault(),localStorage.setItem("lesson_id",n),e.push({pathname:"/showLesson",query:{URL:r}})};return(0,r.jsx)(r.Fragment,{children:f?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(s.Z,{pageTitle:g["name_".concat(n)]}),(0,r.jsx)("div",{className:"team-area pt-80 pb-50 bg-f9f6f6",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row justify-content-center",children:m.map(e=>(0,r.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,r.jsxs)("div",{className:"single-team",children:[(0,r.jsx)("div",{className:"team-image",children:(0,r.jsx)("img",{height:"150px",src:"/images/team-image/team1.jpeg",alt:"image"})}),(0,r.jsxs)("div",{className:"team-content",children:[(0,r.jsx)("div",{onClick:t=>y(t,e.id,"ar"===n?e.video:e["video_".concat(n)]),className:"team-info",children:(0,r.jsx)("h3",{children:f.form.display})}),(0,r.jsx)("div",{children:(0,r.jsx)("h6",{children:e["name_".concat(n)]})}),(0,r.jsx)("p",{children:e["description_".concat(n)]})]})]})}))})})}),(0,r.jsx)(a.Z,{})]})}):""})}},7434:function(e,t,n){"use strict";var r=n(7294),o=n(5697),s=n.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=(0,r.forwardRef)(function(e,t){var n=e.color,o=e.size,s=void 0===o?24:o,a=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return r.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.createElement("polyline",{points:"6 9 12 15 18 9"}))});a.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},a.displayName="ChevronDown",t.Z=a},2774:function(e,t,n){"use strict";var r=n(7294),o=n(5697),s=n.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=(0,r.forwardRef)(function(e,t){var n=e.color,o=e.size,s=void 0===o?24:o,a=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return r.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),r.createElement("polyline",{points:"22,6 12,13 2,6"}))});a.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},a.displayName="Mail",t.Z=a}},function(e){e.O(0,[1664,2539,9774,2888,179],function(){return e(e.s=4287)}),_N_E=e.O()}]);