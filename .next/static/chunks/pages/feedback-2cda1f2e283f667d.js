(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8862],{4960:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/feedback",function(){return i(6920)}])},1839:function(e,s,i){"use strict";var a=i(5893),l=i(7294),t=i(6066),c=i(5169),r=i(2371);let n=e=>{let{onClick:s}=e;return(0,a.jsx)("button",{className:"next-arrow slick-arrow",onClick:s,children:(0,a.jsx)(c.Z,{})})},m=e=>{let{onClick:s}=e;return(0,a.jsx)("button",{className:"prev-arrow slick-arrow",onClick:s,children:(0,a.jsx)(r.Z,{})})};class d extends l.Component{componentDidMount(){this.setState({imagesSlider:this.slider1,thumbnailsSlider:this.slider2})}render(){let e={speed:100,slidesToShow:1,slidesToScroll:1,cssEase:"linear",fade:!0,autoplay:!0,draggable:!0,asNavFor:this.state.thumbnailsSlider,draggable:!1,arrows:!1,nextArrow:!1,prevArrow:!1},s={speed:300,slidesToShow:5,slidesToScroll:1,cssEase:"linear",autoplay:!0,centerMode:!0,draggable:!1,focusOnSelect:!0,asNavFor:this.state.imagesSlider,nextArrow:(0,a.jsx)(n,{}),prevArrow:(0,a.jsx)(m,{}),beforeChange:(e,s)=>this.setState({oldSlide:e,activeSlide:s}),afterChange:e=>this.setState({activeSlide2:e})};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("section",{className:"feedback-area ptb-80 bg-f7fafd",children:[(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"section-title",children:[(0,a.jsx)("h2",{children:"What users Saying"}),(0,a.jsx)("div",{className:"bar"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),(0,a.jsxs)("div",{className:"feedback-slides",children:[(0,a.jsx)("div",{className:"client-feedback",children:(0,a.jsx)("div",{children:(0,a.jsx)(t.Z,{ref:e=>this.slider1=e,...e,children:this.renderSliderFullContent()})})}),(0,a.jsx)("div",{className:"client-thumbnails",children:(0,a.jsx)("div",{children:(0,a.jsx)(t.Z,{ref:e=>this.slider2=e,...s,children:this.renderSliderImages()})})})]})]}),(0,a.jsx)("div",{className:"shape1",children:(0,a.jsx)("img",{src:"/images/shape1.png",alt:"shape"})}),(0,a.jsx)("div",{className:"shape2 rotateme",children:(0,a.jsx)("img",{src:"/images/shape2.svg",alt:"shape"})}),(0,a.jsx)("div",{className:"shape4",children:(0,a.jsx)("img",{src:"/images/shape4.svg",alt:"shape"})}),(0,a.jsx)("div",{className:"shape5",children:(0,a.jsx)("img",{src:"/images/shape5.png",alt:"shape"})}),(0,a.jsx)("div",{className:"shape6 rotateme",children:(0,a.jsx)("img",{src:"/images/shape4.svg",alt:"shape"})}),(0,a.jsx)("div",{className:"shape7",children:(0,a.jsx)("img",{src:"/images/shape4.svg",alt:"shape"})}),(0,a.jsx)("div",{className:"shape8 rotateme",children:(0,a.jsx)("img",{src:"/images/shape2.svg",alt:"shape"})})]})})}constructor(...e){super(...e),this.state={imagesSlider:null,thumbnailsSlider:null,oldSlide:0,activeSlide:0,activeSlide2:0},this.renderSliderFullContent=()=>o.map(e=>{let{name:s,profession:i,image:l,content:t}=e;return(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"item",children:(0,a.jsxs)("div",{className:"single-feedback",children:[(0,a.jsx)("div",{className:"client-img",children:(0,a.jsx)("img",{src:l,alt:"image"})}),(0,a.jsx)("h3",{children:s}),(0,a.jsx)("span",{children:i}),(0,a.jsx)("p",{children:t})]})})},s)}),this.renderSliderImages=()=>o.map(e=>{let{name:s,image:i}=e;return(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("div",{className:"img-fill",children:(0,a.jsx)("img",{src:i,alt:"client"})})})},s)})}}let o=[{name:"David Gale",profession:"Web Developer",image:"/images/client-image/client2.jpg",content:"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{name:"Matt Damon",profession:"Software Engineer",image:"/images/client-image/client4.jpg",content:"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{name:"Nicky Parsons",profession:"Fictional Character",image:"/images/client-image/client1.jpg",content:"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{name:"Jason Momoa",profession:"American Actor",image:"/images/client-image/client5.jpg",content:"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{name:"Gennady Korotkevich",profession:"Sport Programmer",image:"/images/client-image/client3.jpg",content:"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{name:"Petr Mitrichev",profession:"Russian Programmer",image:"/images/client-image/client3.jpg",content:"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{name:"Reid W. Barton",profession:"Mathematics",image:"/images/client-image/client2.jpg",content:"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{name:"Lisa Sauermann",profession:"Mathematician",image:"/images/client-image/client1.jpg",content:"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}];s.Z=d},5002:function(e,s,i){"use strict";var a=i(5893);i(7294);var l=i(2575),t=i(719),c=i(1911);s.Z=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"ml-feedback-area ptb-80",children:[(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"section-title st-fs-28",children:[(0,a.jsx)("span",{className:"sub-title",children:"Testimonials"}),(0,a.jsx)("h2",{children:"Our Clients Feedback"}),(0,a.jsx)("div",{className:"bar"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),(0,a.jsxs)(t.tq,{pagination:{clickable:!0},autoplay:{delay:6e3,pauseOnMouseEnter:!0},modules:[c.tl,c.pt],className:"ml-feedback-slides",children:[(0,a.jsx)(t.o5,{children:(0,a.jsxs)("div",{className:"single-testimonials-item",children:[(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"}),(0,a.jsxs)("div",{className:"client-info",children:[(0,a.jsx)("img",{src:"/images/client-image/client1.jpg",alt:"image"}),(0,a.jsxs)("div",{className:"rating",children:[(0,a.jsx)(l.Z,{}),(0,a.jsx)(l.Z,{}),(0,a.jsx)(l.Z,{}),(0,a.jsx)(l.Z,{}),(0,a.jsx)(l.Z,{})]}),(0,a.jsx)("h3",{className:"a-blog",children:"Sarah Taylor"}),(0,a.jsx)("span",{children:"CEO at Envato"})]})]})}),(0,a.jsx)(t.o5,{children:(0,a.jsxs)("div",{className:"single-testimonials-item",children:[(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"}),(0,a.jsxs)("div",{className:"client-info",children:[(0,a.jsx)("img",{src:"/images/client-image/client2.jpg",alt:"image"}),(0,a.jsxs)("div",{className:"rating",children:[(0,a.jsx)(l.Z,{}),(0,a.jsx)(l.Z,{}),(0,a.jsx)(l.Z,{}),(0,a.jsx)(l.Z,{}),(0,a.jsx)(l.Z,{})]}),(0,a.jsx)("h3",{className:"a-blog",children:"Steven Smith"}),(0,a.jsx)("span",{children:"CEO at Envato"})]})]})}),(0,a.jsx)(t.o5,{children:(0,a.jsxs)("div",{className:"single-testimonials-item",children:[(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"}),(0,a.jsxs)("div",{className:"client-info",children:[(0,a.jsx)("img",{src:"/images/client-image/client3.jpg",alt:"image"}),(0,a.jsxs)("div",{className:"rating",children:[(0,a.jsx)(l.Z,{}),(0,a.jsx)(l.Z,{}),(0,a.jsx)(l.Z,{}),(0,a.jsx)(l.Z,{}),(0,a.jsx)(l.Z,{})]}),(0,a.jsx)("h3",{className:"a-blog",children:"James Eva"}),(0,a.jsx)("span",{children:"CEO at Envato"})]})]})})]})]}),(0,a.jsx)("div",{className:"user-shape1",children:(0,a.jsx)("img",{src:"/images/agency-image/agency-user1.png",alt:"shape"})}),(0,a.jsx)("div",{className:"user-shape2",children:(0,a.jsx)("img",{src:"/images/agency-image/agency-user2.png",alt:"shape"})}),(0,a.jsx)("div",{className:"user-shape3",children:(0,a.jsx)("img",{src:"/images/agency-image/agency-user3.png",alt:"shape"})}),(0,a.jsx)("div",{className:"user-shape4",children:(0,a.jsx)("img",{src:"/images/agency-image/agency-user4.png",alt:"shape"})}),(0,a.jsx)("div",{className:"user-shape5",children:(0,a.jsx)("img",{src:"/images/agency-image/agency-user5.png",alt:"shape"})}),(0,a.jsx)("div",{className:"user-shape6",children:(0,a.jsx)("img",{src:"/images/agency-image/agency-user6.png",alt:"shape"})})]})})},6920:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return h}});var a=i(5893);i(7294);var l=i(3827),t=i(5171),c=i(8915),r=i(1839),n=i(719),m=i(1911),d=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"feedback-area ptb-80",children:[(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"section-title",children:[(0,a.jsx)("h2",{children:"What users Saying"}),(0,a.jsx)("div",{className:"bar"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),(0,a.jsx)("div",{className:"testimonials-slides-box",children:(0,a.jsxs)(n.tq,{pagination:{clickable:!0},autoplay:{delay:6e3,pauseOnMouseEnter:!0},modules:[m.tl,m.pt],className:"testimonials-slides",children:[(0,a.jsx)(n.o5,{children:(0,a.jsxs)("div",{className:"single-feedback-item",children:[(0,a.jsxs)("div",{className:"client-info align-items-center",children:[(0,a.jsx)("div",{className:"image",children:(0,a.jsx)("img",{src:"/images/client-image/client1.jpg",alt:"image"})}),(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h3",{children:"Steve Lucy"}),(0,a.jsx)("span",{children:"Lead Developer at Envato"})]})]}),(0,a.jsx)("p",{children:"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),(0,a.jsx)(n.o5,{children:(0,a.jsxs)("div",{className:"single-feedback-item",children:[(0,a.jsxs)("div",{className:"client-info align-items-center",children:[(0,a.jsx)("div",{className:"image",children:(0,a.jsx)("img",{src:"/images/client-image/client2.jpg",alt:"image"})}),(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h3",{children:"David Luiz"}),(0,a.jsx)("span",{children:"Lead Developer at Envato"})]})]}),(0,a.jsx)("p",{children:"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),(0,a.jsx)(n.o5,{children:(0,a.jsxs)("div",{className:"single-feedback-item",children:[(0,a.jsxs)("div",{className:"client-info align-items-center",children:[(0,a.jsx)("div",{className:"image",children:(0,a.jsx)("img",{src:"/images/client-image/client3.jpg",alt:"image"})}),(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h3",{children:"Marta Smith"}),(0,a.jsx)("span",{children:"Lead Developer at Envato"})]})]}),(0,a.jsx)("p",{children:"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})})]})})]}),(0,a.jsx)("div",{className:"shape1",children:(0,a.jsx)("img",{src:"/images/shape1.png",alt:"shape"})}),(0,a.jsx)("div",{className:"shape2 rotateme",children:(0,a.jsx)("img",{src:"/images/shape2.svg",alt:"shape"})}),(0,a.jsx)("div",{className:"shape4",children:(0,a.jsx)("img",{src:"/images/shape4.svg",alt:"shape"})}),(0,a.jsx)("div",{className:"shape5",children:(0,a.jsx)("img",{src:"/images/shape5.png",alt:"shape"})}),(0,a.jsx)("div",{className:"shape6 rotateme",children:(0,a.jsx)("img",{src:"/images/shape4.svg",alt:"shape"})}),(0,a.jsx)("div",{className:"shape7",children:(0,a.jsx)("img",{src:"/images/shape4.svg",alt:"shape"})}),(0,a.jsx)("div",{className:"shape8 rotateme",children:(0,a.jsx)("img",{src:"/images/shape2.svg",alt:"shape"})})]})}),o=i(5002),u=i(2575),g=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"ml-feedback-area ptb-80",children:[(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"section-title",children:[(0,a.jsx)("h2",{children:"Our Clients Feedback"}),(0,a.jsx)("div",{className:"bar"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),(0,a.jsxs)(n.tq,{pagination:{clickable:!0},autoplay:{delay:6e3,pauseOnMouseEnter:!0},modules:[m.tl,m.pt],className:"ml-feedback-slides",children:[(0,a.jsx)(n.o5,{children:(0,a.jsxs)("div",{className:"single-ml-feedback-item",children:[(0,a.jsxs)("div",{className:"client-info",children:[(0,a.jsx)("img",{src:"/images/client-image/client1.jpg",alt:"image"}),(0,a.jsx)("h3",{children:"Sarah Taylor"}),(0,a.jsx)("span",{children:"CEO at Envato"})]}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"}),(0,a.jsxs)("div",{className:"rating",children:[(0,a.jsx)(u.Z,{}),(0,a.jsx)(u.Z,{}),(0,a.jsx)(u.Z,{}),(0,a.jsx)(u.Z,{}),(0,a.jsx)(u.Z,{})]})]})}),(0,a.jsx)(n.o5,{children:(0,a.jsxs)("div",{className:"single-ml-feedback-item",children:[(0,a.jsxs)("div",{className:"client-info",children:[(0,a.jsx)("img",{src:"/images/client-image/client2.jpg",alt:"image"}),(0,a.jsx)("h3",{children:"Steven Smith"}),(0,a.jsx)("span",{children:"CEO at Envato"})]}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"}),(0,a.jsxs)("div",{className:"rating",children:[(0,a.jsx)(u.Z,{}),(0,a.jsx)(u.Z,{}),(0,a.jsx)(u.Z,{}),(0,a.jsx)(u.Z,{}),(0,a.jsx)(u.Z,{})]})]})}),(0,a.jsx)(n.o5,{children:(0,a.jsxs)("div",{className:"single-ml-feedback-item",children:[(0,a.jsxs)("div",{className:"client-info",children:[(0,a.jsx)("img",{src:"/images/client-image/client3.jpg",alt:"image"}),(0,a.jsx)("h3",{children:"James Eva"}),(0,a.jsx)("span",{children:"CEO at Envato"})]}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"}),(0,a.jsxs)("div",{className:"rating",children:[(0,a.jsx)(u.Z,{}),(0,a.jsx)(u.Z,{}),(0,a.jsx)(u.Z,{}),(0,a.jsx)(u.Z,{}),(0,a.jsx)(u.Z,{})]})]})})]})]}),(0,a.jsx)("div",{className:"shape1",children:(0,a.jsx)("img",{src:"/images/shape1.png",alt:"shape"})}),(0,a.jsx)("div",{className:"shape2 rotateme",children:(0,a.jsx)("img",{src:"/images/shape2.svg",alt:"shape"})}),(0,a.jsx)("div",{className:"shape3",children:(0,a.jsx)("img",{src:"/images/shape3.svg",alt:"shape"})}),(0,a.jsx)("div",{className:"shape4",children:(0,a.jsx)("img",{src:"/images/shape4.svg",alt:"shape"})}),(0,a.jsx)("div",{className:"shape7",children:(0,a.jsx)("img",{src:"/images/shape4.svg",alt:"shape"})}),(0,a.jsx)("div",{className:"shape8 rotateme",children:(0,a.jsx)("img",{src:"/images/shape2.svg",alt:"shape"})})]})}),p=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"agency-portfolio-feedback-area ptb-80",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)(n.tq,{pagination:{clickable:!0},autoplay:{delay:6e3,pauseOnMouseEnter:!0},modules:[m.tl,m.pt],className:"agency-portfolio-feedback-slides",children:[(0,a.jsx)(n.o5,{children:(0,a.jsxs)("div",{className:"agency-portfolio-feedback-item",children:[(0,a.jsx)("img",{src:"/images/client-image/client1.jpg",alt:"image"}),(0,a.jsx)("p",{children:"Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros."})]})}),(0,a.jsx)(n.o5,{children:(0,a.jsxs)("div",{className:"agency-portfolio-feedback-item",children:[(0,a.jsx)("img",{src:"/images/client-image/client2.jpg",alt:"image"}),(0,a.jsx)("p",{children:"Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros."})]})}),(0,a.jsx)(n.o5,{children:(0,a.jsxs)("div",{className:"agency-portfolio-feedback-item",children:[(0,a.jsx)("img",{src:"/images/client-image/client3.jpg",alt:"image"}),(0,a.jsx)("p",{children:"Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros."})]})})]})})})}),h=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{}),(0,a.jsx)(c.Z,{pageTitle:"Feedback or Testimonials"}),(0,a.jsx)(r.Z,{}),(0,a.jsx)(d,{}),(0,a.jsx)(o.Z,{}),(0,a.jsx)(g,{}),(0,a.jsx)(p,{}),(0,a.jsx)(t.Z,{})]})},2575:function(e,s,i){"use strict";var a=i(7294),l=i(5697),t=i.n(l);function c(){return(c=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var r=(0,a.forwardRef)(function(e,s){var i=e.color,l=e.size,t=void 0===l?24:l,r=function(e,s){if(null==e)return{};var i,a,l=function(e,s){if(null==e)return{};var i,a,l={},t=Object.keys(e);for(a=0;a<t.length;a++)i=t[a],s.indexOf(i)>=0||(l[i]=e[i]);return l}(e,s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)i=t[a],!(s.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return a.createElement("svg",c({ref:s,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),a.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}))});r.propTypes={color:t().string,size:t().oneOfType([t().string,t().number])},r.displayName="Star",s.Z=r}},function(e){e.O(0,[1664,39,2810,2539,9774,2888,179],function(){return e(e.s=4960)}),_N_E=e.O()}]);