(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9510],{882:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-details",function(){return n(4312)}])},4312:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(5893),s=n(7294),a=n(3827),i=n(5171),l=n(8915),c=n(5697),o=n.n(c);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=(0,s.forwardRef)(function(e,t){var n=e.color,r=e.size,a=void 0===r?24:r,i=function(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["color","size"]);return s.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),s.createElement("circle",{cx:"12",cy:"12",r:"10"}),s.createElement("polyline",{points:"12 6 12 12 16 14"}))});u.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},u.displayName="Clock";var h=n(1664),m=n.n(h);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=(0,s.forwardRef)(function(e,t){var n=e.color,r=e.size,a=void 0===r?24:r,i=function(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["color","size"]);return s.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),s.createElement("circle",{cx:"9",cy:"21",r:"1"}),s.createElement("circle",{cx:"20",cy:"21",r:"1"}),s.createElement("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}))});g.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},g.displayName="ShoppingCart";var f=n(1163),j=n(9669),x=n.n(j),v=n(6737),y=n.n(v),w=n(2474),_=function(e){let{myValue:t}=e,[n,a]=(0,s.useState)(!1),[i,l]=(0,s.useState)(!1),c=(0,f.useRouter)(),{locale:o}=c,{pathname:d,query:u}=c,[h,p]=(0,s.useState)(null),j=()=>{a(!n)},[v,_]=(0,s.useState)({links:"",error_list:[]}),b={links:v.links};(0,s.useEffect)(()=>{let e=localStorage.getItem("username");x().get("/api/check-payment/".concat(e)).then(e=>{200===e.data.status?l(!0):400===e.data.status&&l(!1)}),async function(){let e=await (0,w.R)(o);p(e)}()},[]);let k=async e=>{e.preventDefault(),x().post("api/check-Link",b).then(e=>{200===e.data.status?(localStorage.setItem("Link",e.data.extension),c.push({pathname:"/payment-plans"}),_({...v,error_list:""})):400===e.data.status?(y()("Warning",e.data.message,"warning"),_({...v,error_list:""})):_({...v,error_list:e.data.errors})})};return(0,r.jsx)(r.Fragment,{children:h?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"widget-area",id:"secondary",children:i?(0,r.jsxs)("div",{className:"widget widget_tag_cloud",children:[(0,r.jsxs)("h3",{className:"widget-title",children:[h.form.show_lesson," "]}),(0,r.jsx)("div",{className:"tagcloud",children:(0,r.jsxs)(m(),{href:"show-lessons?MyID=".concat(t),onClick:j,width:"100%",children:[(0,r.jsx)("span",{className:"tag-link-count",children:" "}),"  ",h.form.show]})})]}):(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"widget widget_tag_cloud",children:[(0,r.jsx)("h3",{className:"widget-title",children:h.form.payment}),(0,r.jsx)("div",{className:"tagcloud",children:(0,r.jsxs)(m(),{href:"#myInput",onClick:j,width:"100%",children:[(0,r.jsxs)("span",{className:"tag-link-count",children:[" ",(0,r.jsx)(g,{})]}),"  ",h.form.pay]})})]}),n&&(0,r.jsxs)("div",{className:"row row-div",children:[(0,r.jsxs)("div",{className:"col-lg-8",children:[(0,r.jsx)("input",{type:"Url",className:"form-control",name:"links",placeholder:"Enter the share link please",onChange:e=>{e.persist(),_({...v,[e.target.name]:e.target.value})},value:v.links,required:!0}),(0,r.jsx)("span",{className:"span span-reg",children:v.error_list.links})]}),(0,r.jsx)("div",{className:"col-lg-4",children:(0,r.jsxs)("button",{href:"/contact/",onClick:k,className:"btn btn-success btn-div",children:[h.form.send," "]})})]})]})})}):""})},b=()=>{let e=(0,f.useRouter)(),{course_id:t}=e.query,{locale:n}=e,{pathname:c,query:o}=e,[d,h]=(0,s.useState)(null),[m,p]=(0,s.useState)(null),[g,j]=(0,s.useState)({category_id:"",name_ar:"",name_en:"",name_sp:"",description_ar:"",description_en:"",description_sp:""});return(0,s.useEffect)(()=>{x().get("/api/edit-course/".concat(t)).then(e=>{200===e.data.status&&j(e.data.course)}),x().get("/api/countLesson/".concat(t)).then(e=>{p(e.data.count)}),async function(){let e=await (0,w.R)(n);h(e)}()},[t]),(0,r.jsx)(r.Fragment,{children:d?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)(l.Z,{pageTitle:g["name_".concat(n)]}),(0,r.jsx)("div",{className:"blog-details-area ptb-80",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-8 col-md-12",children:(0,r.jsxs)("div",{className:"blog-details-desc",children:[(0,r.jsx)("div",{className:"article-image",children:(0,r.jsx)("img",{src:"http://127.0.0.1:8000/".concat(g.image),alt:"image"})}),(0,r.jsxs)("div",{className:"article-content",children:[(0,r.jsx)("div",{className:"entry-meta",children:(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[(0,r.jsx)(u,{})," ",d.form.number_lesson,": ",m]})})}),(0,r.jsx)("h2",{children:g["name_".concat(n)]}),(0,r.jsx)("p",{children:g["description_".concat(n)]})]})]})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-12",children:(0,r.jsx)(_,{myValue:t})})]})})}),(0,r.jsx)(i.Z,{})]}):""})}}},function(e){e.O(0,[1664,8717,2539,9774,2888,179],function(){return e(e.s=882)}),_N_E=e.O()}]);