(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8252],{6664:function(e,t,n){!function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){a(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=o){var a=[],c=!0,u=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(u)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function s(){}function i(){}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,i.resetWarningCache=s;var l,f,p=(l=f={exports:{}},f.exports,l.exports=function(){function e(e,t,n,r,o,a){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==a){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:s};return n.PropTypes=n,n}(),f.exports),m=function(e){var n=t.useRef(e);return t.useEffect(function(){n.current=e},[e]),n.current},y=function(e){return null!==e&&"object"===o(e)},d="[object Object]",h=function e(t,n){if(!y(t)||!y(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===d;if(o!==(Object.prototype.toString.call(n)===d))return!1;if(!o&&!r)return t===n;var a=Object.keys(t),c=Object.keys(n);if(a.length!==c.length)return!1;for(var u={},s=0;s<a.length;s+=1)u[a[s]]=!0;for(var i=0;i<c.length;i+=1)u[c[i]]=!0;var l=Object.keys(u);return l.length===a.length&&l.every(function(r){return e(t[r],n[r])})},E=function(e,t,n){return y(e)?Object.keys(e).reduce(function(o,c){var u=!y(t)||!h(e[c],t[c]);return n.includes(c)?(u&&console.warn("Unsupported prop change: options.".concat(c," is not a mutable property.")),o):u?r(r({},o||{}),{},a({},c,e[c])):o},null):null},g=function(e){if(null===e||y(e)&&"function"==typeof e.elements&&"function"==typeof e.createToken&&"function"==typeof e.createPaymentMethod&&"function"==typeof e.confirmCardPayment)return e;throw Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")},b=function(e){if(y(e)&&"function"==typeof e.then)return{tag:"async",stripePromise:Promise.resolve(e).then(g)};var t=g(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},v=t.createContext(null);v.displayName="ElementsContext";var C=function(e,t){if(!e)throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},k=t.createContext(null);k.displayName="CartElementContext";var O=function(e,t){if(!e)throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},S=function(e){var n=e.stripe,r=e.options,o=e.children,a=t.useMemo(function(){return b(n)},[n]),u=c(t.useState(null),2),s=u[0],i=u[1],l=c(t.useState(null),2),f=l[0],p=l[1],y=c(t.useState(function(){return{stripe:"sync"===a.tag?a.stripe:null,elements:"sync"===a.tag?a.stripe.elements(r):null}}),2),d=y[0],h=y[1];t.useEffect(function(){var e=!0,t=function(e){h(function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}})};return"async"!==a.tag||d.stripe?"sync"!==a.tag||d.stripe||t(a.stripe):a.stripePromise.then(function(n){n&&e&&t(n)}),function(){e=!1}},[a,d,r]);var g=m(n);t.useEffect(function(){null!==g&&g!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[g,n]);var C=m(r);return t.useEffect(function(){if(d.elements){var e=E(r,C,["clientSecret","fonts"]);e&&d.elements.update(e)}},[r,C,d.elements]),t.useEffect(function(){var e=d.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"2.1.1"}),e.registerAppInfo({name:"react-stripe-js",version:"2.1.1",url:"https://stripe.com/docs/stripe-js/react"}))},[d.stripe]),t.createElement(v.Provider,{value:d},t.createElement(k.Provider,{value:{cart:s,setCart:i,cartState:f,setCartState:p}},o))};S.propTypes={stripe:p.any,options:p.object};var j=function(e){return C(t.useContext(v),e)},w=function(e){return O(t.useContext(k),e)},_=function(e){return(0,e.children)(j("mounts <ElementsConsumer>"))};_.propTypes={children:p.func.isRequired};var P=function(e,n,r){var o=!!r,a=t.useRef(r);t.useEffect(function(){a.current=r},[r]),t.useEffect(function(){if(!o||!e)return function(){};var t=function(){a.current&&a.current.apply(a,arguments)};return e.on(n,t),function(){e.off(n,t)}},[o,n,e,a])},A=function(e,n){var r="".concat(e.charAt(0).toUpperCase()+e.slice(1),"Element"),o=n?function(e){j("mounts <".concat(r,">")),w("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o,a=n.id,u=n.className,s=n.options,i=void 0===s?{}:s,l=n.onBlur,f=n.onFocus,p=n.onReady,y=n.onChange,d=n.onEscape,h=n.onClick,g=n.onLoadError,b=n.onLoaderStart,v=n.onNetworksChange,C=n.onCheckout,k=n.onLineItemClick,O=n.onConfirm,S=n.onCancel,_=n.onShippingAddressChange,A=n.onShippingRateChange,x=j("mounts <".concat(r,">")).elements,T=c(t.useState(null),2),N=T[0],R=T[1],B=t.useRef(null),I=t.useRef(null),L=w("mounts <".concat(r,">")),M=L.setCart,D=L.setCartState;P(N,"blur",l),P(N,"focus",f),P(N,"escape",d),P(N,"click",h),P(N,"loaderror",g),P(N,"loaderstart",b),P(N,"networkschange",v),P(N,"lineitemclick",k),P(N,"confirm",O),P(N,"cancel",S),P(N,"shippingaddresschange",_),P(N,"shippingratechange",A),"cart"===e?o=function(e){D(e),p&&p(e)}:p&&(o="expressCheckout"===e?p:function(){p(N)}),P(N,"ready",o),P(N,"change","cart"===e?function(e){D(e),y&&y(e)}:y),P(N,"checkout","cart"===e?function(e){D(e),C&&C(e)}:C),t.useLayoutEffect(function(){if(null===B.current&&x&&null!==I.current){var t=x.create(e,i);"cart"===e&&M&&M(t),B.current=t,R(t),t.mount(I.current)}},[x,i,M]);var U=m(i);return t.useEffect(function(){if(B.current){var e=E(i,U,["paymentRequest"]);e&&B.current.update(e)}},[i,U]),t.useLayoutEffect(function(){return function(){if(B.current&&"function"==typeof B.current.destroy)try{B.current.destroy(),B.current=null}catch(e){}}},[]),t.createElement("div",{id:a,className:u,ref:I})};return o.propTypes={id:p.string,className:p.string,onChange:p.func,onBlur:p.func,onFocus:p.func,onReady:p.func,onEscape:p.func,onClick:p.func,onLoadError:p.func,onLoaderStart:p.func,onNetworksChange:p.func,onCheckout:p.func,onLineItemClick:p.func,onConfirm:p.func,onCancel:p.func,onShippingAddressChange:p.func,onShippingRateChange:p.func,options:p.object},o.displayName=r,o.__elementType=e,o},x="undefined"==typeof window,T=A("auBankAccount",x),N=A("card",x),R=A("cardNumber",x),B=A("cardExpiry",x),I=A("cardCvc",x),L=A("fpxBank",x),M=A("iban",x),D=A("idealBank",x),U=A("p24Bank",x),W=A("epsBank",x),q=A("payment",x),F=A("expressCheckout",x),Y=A("paymentRequestButton",x),X=A("linkAuthentication",x),z=A("address",x),H=A("shippingAddress",x),J=A("cart",x),V=A("paymentMethodMessaging",x),$=A("affirmMessage",x),G=A("afterpayClearpayMessage",x);e.AddressElement=z,e.AffirmMessageElement=$,e.AfterpayClearpayMessageElement=G,e.AuBankAccountElement=T,e.CardCvcElement=I,e.CardElement=N,e.CardExpiryElement=B,e.CardNumberElement=R,e.CartElement=J,e.Elements=S,e.ElementsConsumer=_,e.EpsBankElement=W,e.ExpressCheckoutElement=F,e.FpxBankElement=L,e.IbanElement=M,e.IdealBankElement=D,e.LinkAuthenticationElement=X,e.P24BankElement=U,e.PaymentElement=q,e.PaymentMethodMessagingElement=V,e.PaymentRequestButtonElement=Y,e.ShippingAddressElement=H,e.useCartElement=function(){return w("calls useCartElement()").cart},e.useCartElementState=function(){return w("calls useCartElementState()").cartState},e.useElements=function(){return j("calls useElements()").elements},e.useStripe=function(){return j("calls useStripe()").stripe},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(7294))},7864:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/payment",function(){return n(9360)}])},9360:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(7294);n(6664),t.default=()=>{async function e(){let e=await stripe.createToken({name:name,address_line1:"addressLine1",address_city:"addressCity",address_state:"addressState",address_country:"addressCountry",address_zip:"12345",amount:"998",currency:"usd"}),t=e.token.id;await fetch("/api/pay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t,amount:1e3})})}return o.useEffect(()=>{e()}),(0,r.jsx)("h1",{children:"payment way"})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=7864)}),_N_E=e.O()}]);