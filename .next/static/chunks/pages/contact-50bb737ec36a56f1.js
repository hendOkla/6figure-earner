(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9335],{8105:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return s(174)}])},174:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return E}});var n=s(5893),t=s(7294),a=s(3827),l=s(5171),o=s(8915),c=s(2774),i=s(5697),m=s.n(i);function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}var u=(0,t.forwardRef)(function(e,r){var s=e.color,n=e.size,a=void 0===n?24:n,l=function(e,r){if(null==e)return{};var s,n,t=function(e,r){if(null==e)return{};var s,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],r.indexOf(s)>=0||(t[s]=e[s]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}(e,["color","size"]);return t.createElement("svg",d({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===s?"currentColor":s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),t.createElement("circle",{cx:"12",cy:"10",r:"3"}))});function h(){return(h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}u.propTypes={color:m().string,size:m().oneOfType([m().string,m().number])},u.displayName="MapPin";var p=(0,t.forwardRef)(function(e,r){var s=e.color,n=e.size,a=void 0===n?24:n,l=function(e,r){if(null==e)return{};var s,n,t=function(e,r){if(null==e)return{};var s,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],r.indexOf(s)>=0||(t[s]=e[s]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}(e,["color","size"]);return t.createElement("svg",h({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===s?"currentColor":s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}))});p.propTypes={color:m().string,size:m().oneOfType([m().string,m().number])},p.displayName="Phone";var f=s(9669),x=s.n(f),j=s(2474),g=s(1163),v=()=>{let e=(0,g.useRouter)(),{locale:r}=e,{pathname:s,query:a}=e,[l,o]=(0,t.useState)(null),[i,m]=(0,t.useState)([]);return t.useEffect(()=>{m([]),x().get("/api/view-contact").then(e=>{200===e.data.status&&(m(e.data.contact),console.log(e.data.contact))}),async function(){let e=await (0,j.R)(r);o(e)}()},[]),i.map(e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"contact-info-area ptb-80",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row justify-content-center",children:[(0,n.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,n.jsxs)("div",{className:"contact-info-box",children:[(0,n.jsx)("div",{className:"icon",children:(0,n.jsx)(c.Z,{})}),(0,n.jsx)("h3",{children:l?l.form.mail:""}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"mailto:info@startp.com",children:e.email})})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,n.jsxs)("div",{className:"contact-info-box",children:[(0,n.jsx)("div",{className:"icon",children:(0,n.jsx)(u,{})}),(0,n.jsx)("h3",{children:l?l.form.address:""}),(0,n.jsx)("p",{children:e.location_en})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,n.jsxs)("div",{className:"contact-info-box",children:[(0,n.jsx)("div",{className:"icon",children:(0,n.jsx)(p,{})}),(0,n.jsx)("h3",{children:l?l.form.phone:""}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"tel:+1234567890",children:e.phone})})]})})]})})})}))};s(1664);var N=s(6455),b=s.n(N),y=s(7630),w=s.n(y);let O=w()(b()),_=()=>{O.fire({title:"Congratulations!",text:"Your message was successfully send and will back to you soon",icon:"success",timer:2e3,timerProgressBar:!0,showConfirmButton:!1})};var k=()=>{let e=(0,g.useRouter)(),{locale:r}=e,{pathname:s,query:a}=e,[l,o]=(0,t.useState)(null);(0,t.useEffect)(()=>{!async function(){let e=await (0,j.R)(r);o(e)}()},[]);let[c,i]=(0,t.useState)({customer_name:"",email:"",number:"",subject:"",text:"",error_list:[]}),m=e=>{e.persist(),i({...c,[e.target.name]:e.target.value})},d={customer_name:c.customer_name,email:c.email,number:c.number,subject:c.subject,text:c.text},u=async e=>{e.preventDefault(),x().post("/api/sendMail",d).then(e=>{200===e.data.status?_():400===e.data.status&&i({...c,error_list:e.data.errors})})};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"contact-area ptb-80",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"section-title",children:[(0,n.jsx)("h2",{children:l?l.form.getInTouch:""}),(0,n.jsx)("div",{className:"bar"}),(0,n.jsxs)("p",{children:[" ",l?l.form.anything:""]})]}),(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,n.jsx)("img",{src:"/images/contact-img.png",alt:"image"})}),(0,n.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,n.jsx)("form",{onSubmit:u,children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("input",{type:"text",name:"customer_name",placeholder:l?l.form.yourName:"",className:"form-control",value:c.customer_name,onChange:m,required:!0}),(0,n.jsx)("span",{className:"span span-reg",children:c.error_list.customer_name})]})}),(0,n.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("input",{type:"text",name:"email",placeholder:l?l.form.yourAddress:"",className:"form-control",value:c.email,onChange:m,required:!0}),(0,n.jsx)("span",{className:"span span-reg",children:c.error_list.email})]})}),(0,n.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("input",{type:"text",name:"number",placeholder:l?l.form.yourPhone:"",className:"form-control",value:c.number,onChange:m,required:!0}),(0,n.jsx)("span",{className:"span span-reg",children:c.error_list.number})]})}),(0,n.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("input",{type:"text",name:"subject",placeholder:l?l.form.yourSub:"",className:"form-control",value:c.subject,onChange:m,required:!0}),(0,n.jsx)("span",{className:"span span-reg",children:c.error_list.subject})]})}),(0,n.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("textarea",{name:"text",cols:"30",rows:"5",placeholder:l?l.form.yourMessage:"",className:"form-control",value:c.text,onChange:m,required:!0}),(0,n.jsx)("span",{className:"span span-reg",children:c.error_list.text})]})}),(0,n.jsx)("div",{className:"col-lg-12 col-sm-12",children:(0,n.jsxs)("button",{type:"submit",className:"btn btn-primary",children:[l?l.form.sendMessage:""," "]})})]})})})]})]})})})},E=()=>{let e=(0,g.useRouter)(),{locale:r}=e,{pathname:s,query:c}=e,[i,m]=(0,t.useState)(null);return(0,t.useEffect)(()=>{(async function(){let e=await (0,j.R)(r);m(e)})()},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{}),(0,n.jsx)(o.Z,{pageTitle:i?i.form.contact:""}),(0,n.jsx)(v,{}),(0,n.jsx)(k,{}),(0,n.jsx)(l.Z,{})]})}}},function(e){e.O(0,[1664,345,2539,9774,2888,179],function(){return e(e.s=8105)}),_N_E=e.O()}]);