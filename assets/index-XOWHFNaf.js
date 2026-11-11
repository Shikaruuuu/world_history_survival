var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function E(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function O(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var k=/\/+/g;function A(e,t){return typeof e==`object`&&e&&e.key!=null?O(``+e.key):t.toString(36)}function j(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+A(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(k,`$&/`)+`/`),j(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(k,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+A(s,l);c+=j(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+A(s,l++),c+=j(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function ee(e,t,n){if(e==null)return e;var r=[],i=0;return j(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function M(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var te={current:null},ne={transition:null},re={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:ne,ReactCurrentOwner:C};function ie(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:ee,forEach:function(e,t,n){ee(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ee(e,function(){t++}),t},toArray:function(e){return ee(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,e.act=ie,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=T,e.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:M}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=ne.transition;ne.transition={};try{e()}finally{ne.transition=t}},e.unstable_act=ie,e.useCallback=function(e,t){return te.current.useCallback(e,t)},e.useContext=function(e){return te.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return te.current.useDeferredValue(e)},e.useEffect=function(e,t){return te.current.useEffect(e,t)},e.useId=function(){return te.current.useId()},e.useImperativeHandle=function(e,t,n){return te.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return te.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return te.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return te.current.useMemo(e,t)},e.useReducer=function(e,t,n){return te.current.useReducer(e,t,n)},e.useRef=function(e){return te.current.useRef(e)},e.useState=function(e){return te.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return te.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return te.current.useTransition()},e.version=`18.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m){if(n(c)!==null)m=!0,ee(x);else{var t=n(l);t!==null&&M(b,t.startTime-e)}}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!D());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&M(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,T=5,E=-1;function D(){return!(e.unstable_now()-E<T)}function O(){if(C!==null){var t=e.unstable_now();E=t;var n=!0;try{n=C(!0,t)}finally{n?k():(S=!1,C=null)}}else S=!1}var k;if(typeof v==`function`)k=function(){v(O)};else if(typeof MessageChannel<`u`){var A=new MessageChannel,j=A.port2;A.port1.onmessage=O,k=function(){j.postMessage(null)}}else k=function(){g(O,0)};function ee(e){C=e,S||(S=!0,k())}function M(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,ee(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,M(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee(x))),r},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type!==3&&``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),T=Symbol.for(`react.portal`),E=Symbol.for(`react.fragment`),D=Symbol.for(`react.strict_mode`),O=Symbol.for(`react.profiler`),k=Symbol.for(`react.provider`),A=Symbol.for(`react.context`),j=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),M=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),ne=Symbol.for(`react.lazy`),re=Symbol.for(`react.offscreen`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Object.assign,se;function ce(e){if(se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);se=t&&t[1]||``}return`
`+se+e}var le=!1;function ue(e,t){if(!e||le)return``;le=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{le=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?ce(e):``}function de(e){switch(e.tag){case 5:return ce(e.type);case 16:return ce(`Lazy`);case 13:return ce(`Suspense`);case 19:return ce(`SuspenseList`);case 0:case 2:case 15:return e=ue(e.type,!1),e;case 11:return e=ue(e.type.render,!1),e;case 1:return e=ue(e.type,!0),e;default:return``}}function fe(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case E:return`Fragment`;case T:return`Portal`;case O:return`Profiler`;case D:return`StrictMode`;case ee:return`Suspense`;case M:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case A:return(e.displayName||`Context`)+`.Consumer`;case k:return(e._context.displayName||`Context`)+`.Provider`;case j:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||``,e=e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?fe(e.type)||`Memo`:t;case ne:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return fe(t);case 8:return t===D?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function me(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function he(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function ge(e){var t=he(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _e(e){e._valueTracker||(e._valueTracker=ge(e))}function ve(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=he(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function N(e){if(e=e||(typeof document<`u`?document:void 0),e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function P(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function F(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=me(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function ye(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function be(e,t){ye(e,t);var n=me(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?I(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&I(e,t.type,me(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xe(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function I(e,t,n){(t!==`number`||N(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var L=Array.isArray;function Se(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+me(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function R(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return oe({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function z(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(L(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??(t=``),n=t}e._wrapperState={initialValue:me(n)}}function B(e,t){var n=me(t.value),r=me(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function V(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function H(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function U(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?H(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Ce,we=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Ce=Ce||document.createElement(`div`),Ce.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Te(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},De=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Ee).forEach(function(e){De.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ee[t]=Ee[e]})});function Oe(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Ee.hasOwnProperty(e)&&Ee[e]?(``+t).trim():t+`px`}function ke(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Oe(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Ae=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(e,t){if(t){if(Ae[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Me(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Ne=null;function Pe(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fe=null,Ie=null,Le=null;function Re(e){if(e=Ni(e)){if(typeof Fe!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Fi(t),Fe(e.stateNode,e.type,t))}}function ze(e){Ie?Le?Le.push(e):Le=[e]:Ie=e}function Be(){if(Ie){var e=Ie,t=Le;if(Le=Ie=null,Re(e),t)for(e=0;e<t.length;e++)Re(t[e])}}function Ve(e,t){return e(t)}function W(){}var He=!1;function Ue(e,t,n){if(He)return e(t,n);He=!0;try{return Ve(e,t,n)}finally{He=!1,(Ie!==null||Le!==null)&&(W(),Be())}}function We(e,t){var n=e.stateNode;if(n===null)return null;var i=Fi(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var Ge=!1;if(c)try{var Ke={};Object.defineProperty(Ke,"passive",{get:function(){Ge=!0}}),window.addEventListener(`test`,Ke,Ke),window.removeEventListener(`test`,Ke,Ke)}catch{Ge=!1}function qe(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var Je=!1,Ye=null,Xe=!1,Ze=null,Qe={onError:function(e){Je=!0,Ye=e}};function $e(e,t,n,r,i,a,o,s,c){Je=!1,Ye=null,qe.apply(Qe,arguments)}function et(e,t,n,i,a,o,s,c,l){if($e.apply(this,arguments),Je){if(Je){var u=Ye;Je=!1,Ye=null}else throw Error(r(198));Xe||(Xe=!0,Ze=u)}}function tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function G(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nt(e){if(tt(e)!==e)throw Error(r(188))}function rt(e){var t=e.alternate;if(!t){if(t=tt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return nt(a),e;if(o===i)return nt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function it(e){return e=rt(e),e===null?null:at(e)}function at(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=at(e);if(t!==null)return t;e=e.sibling}return null}var ot=n.unstable_scheduleCallback,K=n.unstable_cancelCallback,st=n.unstable_shouldYield,ct=n.unstable_requestPaint,lt=n.unstable_now,ut=n.unstable_getCurrentPriorityLevel,dt=n.unstable_ImmediatePriority,ft=n.unstable_UserBlockingPriority,pt=n.unstable_NormalPriority,mt=n.unstable_LowPriority,ht=n.unstable_IdlePriority,gt=null,_t=null;function vt(e){if(_t&&typeof _t.onCommitFiberRoot==`function`)try{_t.onCommitFiberRoot(gt,e,void 0,(e.current.flags&128)==128)}catch{}}var yt=Math.clz32?Math.clz32:St,bt=Math.log,xt=Math.LN2;function St(e){return e>>>=0,e===0?32:31-(bt(e)/xt|0)|0}var Ct=64,wt=4194304;function Tt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Et(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Tt(a))):r=Tt(s)}else o=n&~i,o===0?a!==0&&(r=Tt(a)):r=Tt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),i=1<<n,r|=e[n],t&=~i;return r}function Dt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-yt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Dt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function kt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function At(){var e=Ct;return Ct<<=1,!(Ct&4194240)&&(Ct=64),e}function jt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function Nt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-yt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Pt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ft=0;function It(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lt,Rt,zt,Bt,Vt,Ht=!1,Ut=[],Wt=null,Gt=null,Kt=null,qt=new Map,Jt=new Map,Yt=[],Xt=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function Zt(e,t){switch(e){case`focusin`:case`focusout`:Wt=null;break;case`dragenter`:case`dragleave`:Gt=null;break;case`mouseover`:case`mouseout`:Kt=null;break;case`pointerover`:case`pointerout`:qt.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Jt.delete(t.pointerId)}}function Qt(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ni(t),t!==null&&Rt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $t(e,t,n,r,i){switch(t){case`focusin`:return Wt=Qt(Wt,e,t,n,r,i),!0;case`dragenter`:return Gt=Qt(Gt,e,t,n,r,i),!0;case`mouseover`:return Kt=Qt(Kt,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return qt.set(a,Qt(qt.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Jt.set(a,Qt(Jt.get(a)||null,e,t,n,r,i)),!0}return!1}function en(e){var t=Mi(e.target);if(t!==null){var n=tt(t);if(n!==null){if(t=n.tag,t===13){if(t=G(n),t!==null){e.blockedOn=t,Vt(e.priority,function(){zt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ne=r,n.target.dispatchEvent(r),Ne=null}else return t=Ni(n),t!==null&&Rt(t),e.blockedOn=n,!1;t.shift()}return!0}function nn(e,t,n){tn(e)&&n.delete(t)}function rn(){Ht=!1,Wt!==null&&tn(Wt)&&(Wt=null),Gt!==null&&tn(Gt)&&(Gt=null),Kt!==null&&tn(Kt)&&(Kt=null),qt.forEach(nn),Jt.forEach(nn)}function an(e,t){e.blockedOn===t&&(e.blockedOn=null,Ht||(Ht=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,rn)))}function on(e){function t(t){return an(t,e)}if(0<Ut.length){an(Ut[0],e);for(var n=1;n<Ut.length;n++){var r=Ut[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wt!==null&&an(Wt,e),Gt!==null&&an(Gt,e),Kt!==null&&an(Kt,e),qt.forEach(t),Jt.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)en(n),n.blockedOn===null&&Yt.shift()}var sn=C.ReactCurrentBatchConfig,cn=!0;function ln(e,t,n,r){var i=Ft,a=sn.transition;sn.transition=null;try{Ft=1,dn(e,t,n,r)}finally{Ft=i,sn.transition=a}}function un(e,t,n,r){var i=Ft,a=sn.transition;sn.transition=null;try{Ft=4,dn(e,t,n,r)}finally{Ft=i,sn.transition=a}}function dn(e,t,n,r){if(cn){var i=pn(e,t,n,r);if(i===null)ii(e,t,r,fn,n),Zt(e,r);else if($t(i,e,t,n,r))r.stopPropagation();else if(Zt(e,r),t&4&&-1<Xt.indexOf(e)){for(;i!==null;){var a=Ni(i);if(a!==null&&Lt(a),a=pn(e,t,n,r),a===null&&ii(e,t,r,fn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ii(e,t,r,null,n)}}var fn=null;function pn(e,t,n,r){if(fn=null,e=Pe(r),e=Mi(e),e!==null){if(t=tt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=G(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return fn=e,null}function mn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(ut()){case dt:return 1;case ft:return 4;case pt:case mt:return 16;case ht:return 536870912;default:return 16}default:return 16}}var hn=null,gn=null,_n=null;function vn(){if(_n)return _n;var e,t=gn,n=t.length,r,i=`value`in hn?hn.value:hn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return _n=i.slice(e,1<r?1-r:void 0)}function yn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bn(){return!0}function xn(){return!1}function Sn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?bn:xn,this.isPropagationStopped=xn,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=bn)},persist:function(){},isPersistent:bn}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wn=Sn(Cn),Tn=oe({},Cn,{view:0,detail:0}),En=Sn(Tn),Dn,On,kn,An=oe({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==kn&&(kn&&e.type===`mousemove`?(Dn=e.screenX-kn.screenX,On=e.screenY-kn.screenY):On=Dn=0,kn=e),Dn)},movementY:function(e){return`movementY`in e?e.movementY:On}}),jn=Sn(An),Mn=Sn(oe({},An,{dataTransfer:0})),Nn=Sn(oe({},Tn,{relatedTarget:0})),Pn=Sn(oe({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0})),Fn=Sn(oe({},Cn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),In=Sn(oe({},Cn,{data:0})),Ln={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Rn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},zn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Bn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zn[e])?!!t[e]:!1}function Vn(){return Bn}var Hn=Sn(oe({},Tn,{key:function(e){if(e.key){var t=Ln[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=yn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Rn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vn,charCode:function(e){return e.type===`keypress`?yn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?yn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Un=Sn(oe({},An,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Wn=Sn(oe({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vn})),Gn=Sn(oe({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Kn=Sn(oe({},An,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),qn=[9,13,27,32],Jn=c&&`CompositionEvent`in window,Yn=null;c&&`documentMode`in document&&(Yn=document.documentMode);var Xn=c&&`TextEvent`in window&&!Yn,Zn=c&&(!Jn||Yn&&8<Yn&&11>=Yn),Qn=` `,$n=!1;function er(e,t){switch(e){case`keyup`:return qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function tr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var nr=!1;function rr(e,t){switch(e){case`compositionend`:return tr(t);case`keypress`:return t.which===32?($n=!0,Qn):null;case`textInput`:return e=t.data,e===Qn&&$n?null:e;default:return null}}function ir(e,t){if(nr)return e===`compositionend`||!Jn&&er(e,t)?(e=vn(),_n=gn=hn=null,nr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Zn&&t.locale!==`ko`?null:t.data;default:return null}}var ar={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ar[e.type]:t===`textarea`}function sr(e,t,n,r){ze(r),t=oi(t,`onChange`),0<t.length&&(n=new wn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var cr=null,lr=null;function ur(e){Qr(e,0)}function dr(e){if(ve(Pi(e)))return e}function fr(e,t){if(e===`change`)return t}var pr=!1;if(c){var mr;if(c){var hr=`oninput`in document;if(!hr){var gr=document.createElement(`div`);gr.setAttribute(`oninput`,`return;`),hr=typeof gr.oninput==`function`}mr=hr}else mr=!1;pr=mr&&(!document.documentMode||9<document.documentMode)}function _r(){cr&&(cr.detachEvent(`onpropertychange`,vr),lr=cr=null)}function vr(e){if(e.propertyName===`value`&&dr(lr)){var t=[];sr(t,lr,e,Pe(e)),Ue(ur,t)}}function yr(e,t,n){e===`focusin`?(_r(),cr=t,lr=n,cr.attachEvent(`onpropertychange`,vr)):e===`focusout`&&_r()}function br(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return dr(lr)}function xr(e,t){if(e===`click`)return dr(t)}function Sr(e,t){if(e===`input`||e===`change`)return dr(t)}function Cr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var wr=typeof Object.is==`function`?Object.is:Cr;function Tr(e,t){if(wr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!wr(e[i],t[i]))return!1}return!0}function q(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function J(e,t){var n=q(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=q(n)}}function Er(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Er(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dr(){for(var e=window,t=N();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=N(e.document)}return t}function Or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function kr(e){var t=Dr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Er(n.ownerDocument.documentElement,n)){if(r!==null&&Or(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=J(n,a);var o=J(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ar=c&&`documentMode`in document&&11>=document.documentMode,jr=null,Mr=null,Nr=null,Pr=!1;function Fr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pr||jr==null||jr!==N(r)||(r=jr,`selectionStart`in r&&Or(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&Tr(Nr,r)||(Nr=r,r=oi(Mr,`onSelect`),0<r.length&&(t=new wn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=jr)))}function Ir(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Lr={animationend:Ir(`Animation`,`AnimationEnd`),animationiteration:Ir(`Animation`,`AnimationIteration`),animationstart:Ir(`Animation`,`AnimationStart`),transitionend:Ir(`Transition`,`TransitionEnd`)},Rr={},zr={};c&&(zr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),`TransitionEvent`in window||delete Lr.transitionend.transition);function Br(e){if(Rr[e])return Rr[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zr)return Rr[e]=t[n];return e}var Vr=Br(`animationend`),Hr=Br(`animationiteration`),Y=Br(`animationstart`),Ur=Br(`transitionend`),Wr=new Map,Gr=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function Kr(e,t){Wr.set(e,t),o(t,[e])}for(var qr=0;qr<Gr.length;qr++){var Jr=Gr[qr];Kr(Jr.toLowerCase(),`on`+(Jr[0].toUpperCase()+Jr.slice(1)))}Kr(Vr,`onAnimationEnd`),Kr(Hr,`onAnimationIteration`),Kr(Y,`onAnimationStart`),Kr(`dblclick`,`onDoubleClick`),Kr(`focusin`,`onFocus`),Kr(`focusout`,`onBlur`),Kr(Ur,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Yr=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Xr=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(Yr));function Zr(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,et(r,t,void 0,e),e.currentTarget=null}function Qr(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;Zr(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;Zr(i,s,l),a=c}}}if(Xe)throw e=Ze,Xe=!1,Ze=null,e}function $r(e,t){var n=t[ki];n===void 0&&(n=t[ki]=new Set);var r=e+`__bubble`;n.has(r)||(ri(t,e,2,!1),n.add(r))}function ei(e,t,n){var r=0;t&&(r|=4),ri(n,e,r,t)}var ti=`_reactListening`+Math.random().toString(36).slice(2);function ni(e){if(!e[ti]){e[ti]=!0,i.forEach(function(t){t!==`selectionchange`&&(Xr.has(t)||ei(t,!1,e),ei(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ti]||(t[ti]=!0,ei(`selectionchange`,!1,t))}}function ri(e,t,n,r){switch(mn(t)){case 1:var i=ln;break;case 4:i=un;break;default:i=dn}n=i.bind(null,t,n,e),i=void 0,!Ge||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function ii(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Mi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}Ue(function(){var r=a,i=Pe(n),o=[];a:{var s=Wr.get(e);if(s!==void 0){var c=wn,l=e;switch(e){case`keypress`:if(yn(n)===0)break a;case`keydown`:case`keyup`:c=Hn;break;case`focusin`:l=`focus`,c=Nn;break;case`focusout`:l=`blur`,c=Nn;break;case`beforeblur`:case`afterblur`:c=Nn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=jn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Mn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Wn;break;case Vr:case Hr:case Y:c=Pn;break;case Ur:c=Gn;break;case`scroll`:c=En;break;case`wheel`:c=Kn;break;case`copy`:case`cut`:case`paste`:c=Fn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Un}var u=!!(t&4),d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=We(p,f),h!=null&&u.push(ai(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Ne&&(l=n.relatedTarget||n.fromElement)&&(Mi(l)||l[Oi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Mi(l):null,l!==null&&(d=tt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=jn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=Un,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Pi(c),m=l==null?s:Pi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Mi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=si(m))p++;for(m=0,h=f;h;h=si(h))m++;for(;0<p-m;)u=si(u),p--;for(;0<m-p;)f=si(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=si(u),f=si(f)}u=null}else u=null;c!==null&&ci(o,s,c,u,!1),l!==null&&d!==null&&ci(o,d,l,u,!0)}}a:{if(s=r?Pi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=fr;else if(or(s)){if(pr)g=Sr;else{g=br;var _=yr}}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=xr);if(g&&(g=g(e,r))){sr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&I(s,`number`,s.value)}switch(_=r?Pi(r):window,e){case`focusin`:(or(_)||_.contentEditable===`true`)&&(jr=_,Mr=r,Nr=null);break;case`focusout`:Nr=Mr=jr=null;break;case`mousedown`:Pr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Pr=!1,Fr(o,n,i);break;case`selectionchange`:if(Ar)break;case`keydown`:case`keyup`:Fr(o,n,i)}var v;if(Jn)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else nr?er(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(Zn&&n.locale!==`ko`&&(nr||y!==`onCompositionStart`?y===`onCompositionEnd`&&nr&&(v=vn()):(hn=i,gn=`value`in hn?hn.value:hn.textContent,nr=!0)),_=oi(r,y),0<_.length&&(y=new In(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=tr(n),v!==null&&(y.data=v)))),(v=Xn?rr(e,n):ir(e,n))&&(r=oi(r,`onBeforeInput`),0<r.length&&(i=new In(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}Qr(o,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=We(e,n),a!=null&&r.unshift(ai(e,a,i)),a=We(e,t),a!=null&&r.push(ai(e,a,i))),e=e.return}return r}function si(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ci(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=We(n,a),c!=null&&o.unshift(ai(n,c,s))):i||(c=We(n,a),c!=null&&o.push(ai(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var li=/\r\n?/g,ui=/\u0000|\uFFFD/g;function di(e){return(typeof e==`string`?e:``+e).replace(li,`
`).replace(ui,``)}function fi(e,t,n){if(t=di(t),di(e)!==t&&n)throw Error(r(425))}function pi(){}var mi=null,hi=null;function gi(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _i=typeof setTimeout==`function`?setTimeout:void 0,vi=typeof clearTimeout==`function`?clearTimeout:void 0,yi=typeof Promise==`function`?Promise:void 0,bi=typeof queueMicrotask==`function`?queueMicrotask:yi===void 0?_i:function(e){return yi.resolve(null).then(e).catch(xi)};function xi(e){setTimeout(function(){throw e})}function Si(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),on(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++}n=i}while(n);on(t)}function Ci(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function wi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Ti=Math.random().toString(36).slice(2),Ei=`__reactFiber$`+Ti,Di=`__reactProps$`+Ti,Oi=`__reactContainer$`+Ti,ki=`__reactEvents$`+Ti,Ai=`__reactListeners$`+Ti,ji=`__reactHandles$`+Ti;function Mi(e){var t=e[Ei];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Oi]||n[Ei]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wi(e);e!==null;){if(n=e[Ei])return n;e=wi(e)}return t}e=n,n=e.parentNode}return null}function Ni(e){return e=e[Ei]||e[Oi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Fi(e){return e[Di]||null}var Ii=[],Li=-1;function Ri(e){return{current:e}}function zi(e){0>Li||(e.current=Ii[Li],Ii[Li]=null,Li--)}function Bi(e,t){Li++,Ii[Li]=e.current,e.current=t}var Vi={},Hi=Ri(Vi),Ui=Ri(!1),Wi=Vi;function Gi(e,t){var n=e.type.contextTypes;if(!n)return Vi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ki(e){return e=e.childContextTypes,e!=null}function qi(){zi(Ui),zi(Hi)}function Ji(e,t,n){if(Hi.current!==Vi)throw Error(r(168));Bi(Hi,t),Bi(Ui,n)}function Yi(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,pe(e)||`Unknown`,a));return oe({},n,i)}function Xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vi,Wi=Hi.current,Bi(Hi,e),Bi(Ui,Ui.current),!0}function Zi(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=Yi(e,t,Wi),i.__reactInternalMemoizedMergedChildContext=e,zi(Ui),zi(Hi),Bi(Hi,e)):zi(Ui),Bi(Ui,n)}var Qi=null,$i=!1,ea=!1;function ta(e){Qi===null?Qi=[e]:Qi.push(e)}function na(e){$i=!0,ta(e)}function ra(){if(!ea&&Qi!==null){ea=!0;var e=0,t=Ft;try{var n=Qi;for(Ft=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qi=null,$i=!1}catch(t){throw Qi!==null&&(Qi=Qi.slice(e+1)),ot(dt,ra),t}finally{Ft=t,ea=!1}}return null}var ia=[],aa=0,oa=null,sa=0,ca=[],la=0,ua=null,da=1,fa=``;function pa(e,t){ia[aa++]=sa,ia[aa++]=oa,oa=e,sa=t}function ma(e,t,n){ca[la++]=da,ca[la++]=fa,ca[la++]=ua,ua=e;var r=da;e=fa;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var a=32-yt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,da=1<<32-yt(t)+i|n<<i|r,fa=a+e}else da=1<<a|n<<i|r,fa=e}function ha(e){e.return!==null&&(pa(e,1),ma(e,1,0))}function ga(e){for(;e===oa;)oa=ia[--aa],ia[aa]=null,sa=ia[--aa],ia[aa]=null;for(;e===ua;)ua=ca[--la],ca[la]=null,fa=ca[--la],ca[la]=null,da=ca[--la],ca[la]=null}var _a=null,va=null,ya=!1,ba=null;function xa(e,t){var n=ql(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null&&(e.stateNode=t,_a=e,va=Ci(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t!==null&&(e.stateNode=t,_a=e,va=null,!0);case 13:return t=t.nodeType===8?t:null,t!==null&&(n=ua===null?null:{id:da,overflow:fa},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ql(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_a=e,va=null,!0);default:return!1}}function Ca(e){return!!(e.mode&1)&&!(e.flags&128)}function wa(e){if(ya){var t=va;if(t){var n=t;if(!Sa(e,t)){if(Ca(e))throw Error(r(418));t=Ci(n.nextSibling);var i=_a;t&&Sa(e,t)?xa(i,n):(e.flags=e.flags&-4097|2,ya=!1,_a=e)}}else{if(Ca(e))throw Error(r(418));e.flags=e.flags&-4097|2,ya=!1,_a=e}}}function Ta(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_a=e}function Ea(e){if(e!==_a)return!1;if(!ya)return Ta(e),ya=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!gi(e.type,e.memoizedProps)),t&&(t=va)){if(Ca(e))throw Da(),Error(r(418));for(;t;)xa(e,t),t=Ci(t.nextSibling)}if(Ta(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){va=Ci(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}va=null}}else va=_a?Ci(e.stateNode.nextSibling):null;return!0}function Da(){for(var e=va;e;)e=Ci(e.nextSibling)}function Oa(){va=_a=null,ya=!1}function ka(e){ba===null?ba=[e]:ba.push(e)}var Aa=C.ReactCurrentBatchConfig;function ja(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Ma(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Na(e){var t=e._init;return t(e._payload)}function Pa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Xl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=eu(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===E?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ne&&Na(i)===t.type)?(r=a(t,n.props),r.ref=ja(e,t,n),r.return=e,r):(r=Zl(n.type,n.key,n.props,null,e.mode,r),r.ref=ja(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=tu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ql(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=eu(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=Zl(t.type,t.key,t.props,null,e.mode,n),n.ref=ja(e,null,t),n.return=e,n;case T:return t=tu(t,e.mode,n),t.return=e,t;case ne:var r=t._init;return f(e,r(t._payload),n)}if(L(t)||ae(t))return t=Ql(t,e.mode,n,null),t.return=e,t;Ma(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case T:return n.key===i?u(e,t,n,r):null;case ne:return i=n._init,p(e,t,i(n._payload),r)}if(L(n)||ae(n))return i===null?d(e,t,n,r,null):null;Ma(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case T:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ne:var a=r._init;return m(e,t,n,a(r._payload),i)}if(L(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);Ma(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),ya&&pa(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return ya&&pa(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),ya&&pa(r,h),l}function g(a,s,c,l){var u=ae(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),ya&&pa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return ya&&pa(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),ya&&pa(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===E&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===E){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===ne&&Na(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=ja(e,l,i),r.return=e,e=r;break a}n(e,l);break}t(e,l),l=l.sibling}i.type===E?(r=Ql(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Zl(i.type,i.key,i.props,null,e.mode,o),o.ref=ja(e,r,i),o.return=e,e=o)}return s(e);case T:a:{for(l=i.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}n(e,r);break}t(e,r),r=r.sibling}r=tu(i,e.mode,o),r.return=e,e=r}return s(e);case ne:return l=i._init,_(e,r,l(i._payload),o)}if(L(i))return h(e,r,i,o);if(ae(i))return g(e,r,i,o);Ma(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=eu(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Fa=Pa(!0),Ia=Pa(!1),La=Ri(null),Ra=null,za=null,Ba=null;function Va(){Ba=za=Ra=null}function Ha(e){var t=La.current;zi(La),e._currentValue=t}function Ua(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Wa(e,t){Ra=e,Ba=za=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ps=!0),e.firstContext=null)}function Ga(e){var t=e._currentValue;if(Ba!==e){if(e={context:e,memoizedValue:t,next:null},za===null){if(Ra===null)throw Error(r(308));za=e,Ra.dependencies={lanes:0,firstContext:e}}else za=za.next=e}return t}var Ka=null;function qa(e){Ka===null?Ka=[e]:Ka.push(e)}function Ja(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,qa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ya(e,r)}function Ya(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xa=!1;function Za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $a(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function eo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Vc&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ya(e,n)}return i=r.interleaved,i===null?(t.next=t,qa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ya(e,n)}function to(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pt(e,n)}}function no(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ro(e,t,n,r){var i=e.updateQueue;Xa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=oe({},d,f);break a;case 2:Xa=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Yc|=o,e.lanes=o,e.memoizedState=d}}function io(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var ao={},oo=Ri(ao),so=Ri(ao),co=Ri(ao);function lo(e){if(e===ao)throw Error(r(174));return e}function uo(e,t){switch(Bi(co,t),Bi(so,e),Bi(oo,ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:U(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=U(t,e)}zi(oo),Bi(oo,t)}function fo(){zi(oo),zi(so),zi(co)}function po(e){lo(co.current);var t=lo(oo.current),n=U(t,e.type);t!==n&&(Bi(so,e),Bi(oo,n))}function mo(e){so.current===e&&(zi(oo),zi(so))}var ho=Ri(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=[];function vo(){for(var e=0;e<_o.length;e++)_o[e]._workInProgressVersionPrimary=null;_o.length=0}var yo=C.ReactCurrentDispatcher,bo=C.ReactCurrentBatchConfig,xo=0,So=null,Co=null,wo=null,To=!1,Eo=!1,Do=0,Oo=0;function ko(){throw Error(r(321))}function Ao(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wr(e[n],t[n]))return!1;return!0}function jo(e,t,n,i,a,o){if(xo=o,So=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yo.current=e===null||e.memoizedState===null?ms:hs,e=n(i,a),Eo){o=0;do{if(Eo=!1,Do=0,25<=o)throw Error(r(301));o+=1,wo=Co=null,t.updateQueue=null,yo.current=gs,e=n(i,a)}while(Eo)}if(yo.current=ps,t=Co!==null&&Co.next!==null,xo=0,wo=Co=So=null,To=!1,t)throw Error(r(300));return e}function Mo(){var e=Do!==0;return Do=0,e}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wo===null?So.memoizedState=wo=e:wo=wo.next=e,wo}function Po(){if(Co===null){var e=So.alternate;e=e===null?null:e.memoizedState}else e=Co.next;var t=wo===null?So.memoizedState:wo.next;if(t!==null)wo=t,Co=e;else{if(e===null)throw Error(r(310));Co=e,e={memoizedState:Co.memoizedState,baseState:Co.baseState,baseQueue:Co.baseQueue,queue:Co.queue,next:null},wo===null?So.memoizedState=wo=e:wo=wo.next=e}return wo}function Fo(e,t){return typeof t==`function`?t(e):t}function Io(e){var t=Po(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=Co,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((xo&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,So.lanes|=d,Yc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,wr(i,t.memoizedState)||(Ps=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,So.lanes|=o,Yc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Lo(e){var t=Po(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);wr(o,t.memoizedState)||(Ps=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Ro(){}function zo(e,t){var n=So,i=Po(),a=t(),o=!wr(i.memoizedState,a);if(o&&(i.memoizedState=a,Ps=!0),i=i.queue,Zo(Ho.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||wo!==null&&wo.memoizedState.tag&1){if(n.flags|=2048,Ko(9,Vo.bind(null,n,i,a,t),void 0,null),Hc===null)throw Error(r(349));xo&30||Bo(n,t,a)}return a}function Bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=So.updateQueue,t===null?(t={lastEffect:null,stores:null},So.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vo(e,t,n,r){t.value=n,t.getSnapshot=r,Uo(t)&&Wo(e)}function Ho(e,t,n){return n(function(){Uo(t)&&Wo(e)})}function Uo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wr(e,n)}catch{return!0}}function Wo(e){var t=Ya(e,1);t!==null&&hl(t,e,1,-1)}function Go(e){var t=No();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t.queue=e,e=e.dispatch=ls.bind(null,So,e),[t.memoizedState,e]}function Ko(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=So.updateQueue,t===null?(t={lastEffect:null,stores:null},So.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qo(){return Po().memoizedState}function Jo(e,t,n,r){var i=No();So.flags|=e,i.memoizedState=Ko(1|t,n,void 0,r===void 0?null:r)}function Yo(e,t,n,r){var i=Po();r=r===void 0?null:r;var a=void 0;if(Co!==null){var o=Co.memoizedState;if(a=o.destroy,r!==null&&Ao(r,o.deps)){i.memoizedState=Ko(t,n,a,r);return}}So.flags|=e,i.memoizedState=Ko(1|t,n,a,r)}function Xo(e,t){return Jo(8390656,8,e,t)}function Zo(e,t){return Yo(2048,8,e,t)}function Qo(e,t){return Yo(4,2,e,t)}function $o(e,t){return Yo(4,4,e,t)}function es(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ts(e,t,n){return n=n==null?null:n.concat([e]),Yo(4,4,es.bind(null,t,e),n)}function ns(){}function rs(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ao(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function is(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ao(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function as(e,t,n){return xo&21?(wr(n,t)||(n=At(),So.lanes|=n,Yc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ps=!0),e.memoizedState=n)}function os(e,t){var n=Ft;Ft=n!==0&&4>n?n:4,e(!0);var r=bo.transition;bo.transition={};try{e(!1),t()}finally{Ft=n,bo.transition=r}}function ss(){return Po().memoizedState}function cs(e,t,n){var r=ml(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},us(e))ds(t,n);else if(n=Ja(e,t,n,r),n!==null){var i=pl();hl(n,e,r,i),fs(n,t,r)}}function ls(e,t,n){var r=ml(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(us(e))ds(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,wr(s,o)){var c=t.interleaved;c===null?(i.next=i,qa(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=Ja(e,t,i,r),n!==null&&(i=pl(),hl(n,e,r,i),fs(n,t,r))}}function us(e){var t=e.alternate;return e===So||t!==null&&t===So}function ds(e,t){Eo=To=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pt(e,n)}}var ps={readContext:Ga,useCallback:ko,useContext:ko,useEffect:ko,useImperativeHandle:ko,useInsertionEffect:ko,useLayoutEffect:ko,useMemo:ko,useReducer:ko,useRef:ko,useState:ko,useDebugValue:ko,useDeferredValue:ko,useTransition:ko,useMutableSource:ko,useSyncExternalStore:ko,useId:ko,unstable_isNewReconciler:!1},ms={readContext:Ga,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:Ga,useEffect:Xo,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),Jo(4194308,4,es.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jo(4,2,e,t)},useMemo:function(e,t){var n=No();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=No();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cs.bind(null,So,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:Go,useDebugValue:ns,useDeferredValue:function(e){return No().memoizedState=e},useTransition:function(){var e=Go(!1),t=e[0];return e=os.bind(null,e[1]),No().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=So,a=No();if(ya){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Hc===null)throw Error(r(349));xo&30||Bo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Xo(Ho.bind(null,i,o,e),[e]),i.flags|=2048,Ko(9,Vo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=No(),t=Hc.identifierPrefix;if(ya){var n=fa,r=da;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Do++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Oo++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},hs={readContext:Ga,useCallback:rs,useContext:Ga,useEffect:Zo,useImperativeHandle:ts,useInsertionEffect:Qo,useLayoutEffect:$o,useMemo:is,useReducer:Io,useRef:qo,useState:function(){return Io(Fo)},useDebugValue:ns,useDeferredValue:function(e){return as(Po(),Co.memoizedState,e)},useTransition:function(){return[Io(Fo)[0],Po().memoizedState]},useMutableSource:Ro,useSyncExternalStore:zo,useId:ss,unstable_isNewReconciler:!1},gs={readContext:Ga,useCallback:rs,useContext:Ga,useEffect:Zo,useImperativeHandle:ts,useInsertionEffect:Qo,useLayoutEffect:$o,useMemo:is,useReducer:Lo,useRef:qo,useState:function(){return Lo(Fo)},useDebugValue:ns,useDeferredValue:function(e){var t=Po();return Co===null?t.memoizedState=e:as(t,Co.memoizedState,e)},useTransition:function(){return[Lo(Fo)[0],Po().memoizedState]},useMutableSource:Ro,useSyncExternalStore:zo,useId:ss,unstable_isNewReconciler:!1};function _s(e,t){if(e&&e.defaultProps){for(var n in t=oe({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ys={isMounted:function(e){return(e=e._reactInternals)?tt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pl(),i=ml(e),a=$a(r,i);a.payload=t,n!=null&&(a.callback=n),t=eo(e,a,i),t!==null&&(hl(t,e,i,r),to(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pl(),i=ml(e),a=$a(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=eo(e,a,i),t!==null&&(hl(t,e,i,r),to(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pl(),r=ml(e),i=$a(n,r);i.tag=2,t!=null&&(i.callback=t),t=eo(e,i,r),t!==null&&(hl(t,e,r,n),to(t,e,r))}};function bs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Tr(n,r)||!Tr(i,a):!0}function xs(e,t,n){var r=!1,i=Vi,a=t.contextType;return typeof a==`object`&&a?a=Ga(a):(i=Ki(t)?Wi:Hi.current,r=t.contextTypes,a=(r=r!=null)?Gi(e,i):Vi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ys,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ss(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ys.enqueueReplaceState(t,t.state,null)}function Cs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Za(e);var a=t.contextType;typeof a==`object`&&a?i.context=Ga(a):(a=Ki(t)?Wi:Hi.current,i.context=Gi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(vs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&ys.enqueueReplaceState(i,i.state,null),ro(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function ws(e,t){try{var n=``,r=t;do n+=de(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Ts(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Es(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Ds=typeof WeakMap==`function`?WeakMap:Map;function Os(e,t,n){n=$a(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rl||(rl=!0,il=r),Es(e,t)},n}function ks(e,t,n){n=$a(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Es(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){Es(e,t),typeof r!=`function`&&(al===null?al=new Set([this]):al.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function As(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ds;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Bl.bind(null,e,t,n),t.then(e,e))}function js(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null||t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Ms(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$a(-1,1),t.tag=2,eo(n,t,1))),n.lanes|=1),e)}var Ns=C.ReactCurrentOwner,Ps=!1;function Fs(e,t,n,r){t.child=e===null?Ia(t,null,n,r):Fa(t,e.child,n,r)}function Is(e,t,n,r,i){n=n.render;var a=t.ref;return Wa(t,i),r=jo(e,t,n,r,a,i),n=Mo(),e!==null&&!Ps?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,X(e,t,i)):(ya&&n&&ha(t),t.flags|=1,Fs(e,t,r,i),t.child)}function Ls(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Jl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Rs(e,t,a,r,i)):(e=Zl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Tr:n,n(o,r)&&e.ref===t.ref)return X(e,t,i)}return t.flags|=1,e=Xl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Rs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Tr(a,r)&&e.ref===t.ref){if(Ps=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ps=!0);else return t.lanes=e.lanes,X(e,t,i)}}return Vs(e,t,n,r,i)}function zs(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`){if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bi(Kc,Gc),Gc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Bi(Kc,Gc),Gc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,Bi(Kc,Gc),Gc|=r}}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),Bi(Kc,Gc),Gc|=r;return Fs(e,t,i,n),t.child}function Bs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vs(e,t,n,r,i){var a=Ki(n)?Wi:Hi.current;return a=Gi(t,a),Wa(t,i),n=jo(e,t,n,r,a,i),r=Mo(),e!==null&&!Ps?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,X(e,t,i)):(ya&&r&&ha(t),t.flags|=1,Fs(e,t,n,i),t.child)}function Hs(e,t,n,r,i){if(Ki(n)){var a=!0;Xi(t)}else a=!1;if(Wa(t,i),t.stateNode===null)tc(e,t),xs(t,n,r),Cs(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Ga(l):(l=Ki(n)?Wi:Hi.current,l=Gi(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Ss(t,o,r,l),Xa=!1;var f=t.memoizedState;o.state=f,ro(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Ui.current||Xa?(typeof u==`function`&&(vs(t,n,u,r),c=t.memoizedState),(s=Xa||bs(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Qa(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:_s(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Ga(c):(c=Ki(n)?Wi:Hi.current,c=Gi(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Ss(t,o,r,c),Xa=!1,f=t.memoizedState,o.state=f,ro(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Ui.current||Xa?(typeof p==`function`&&(vs(t,n,p,r),m=t.memoizedState),(l=Xa||bs(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Us(e,t,n,r,a,i)}function Us(e,t,n,r,i,a){Bs(e,t);var o=!!(t.flags&128);if(!r&&!o)return i&&Zi(t,n,!1),X(e,t,a);r=t.stateNode,Ns.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Fa(t,e.child,null,a),t.child=Fa(t,null,s,a)):Fs(e,t,s,a),t.memoizedState=r.state,i&&Zi(t,n,!0),t.child}function Ws(e){var t=e.stateNode;t.pendingContext?Ji(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ji(e,t.context,!1),uo(e,t.containerInfo)}function Gs(e,t,n,r,i){return Oa(),ka(i),t.flags|=256,Fs(e,t,n,r),t.child}var Ks={dehydrated:null,treeContext:null,retryLane:0};function qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Js(e,t,n){var r=t.pendingProps,i=ho.current,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(i&2)),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Bi(ho,i&1),e===null)return wa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.lanes=t.mode&1?e.data===`$!`?8:1073741824:1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=$l(o,r,0,null),e=Ql(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=qs(n),t.memoizedState=Ks,e):Ys(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Zs(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Xl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=Ql(a,o,n,null),a.flags|=2):a=Xl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?qs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ks,r}return a=e.child,e=a.sibling,r=Xl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ys(e,t){return t=$l({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function Xs(e,t,n,r){return r!==null&&ka(r),Fa(t,e.child,null,n),e=Ys(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zs(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Ts(Error(r(422))),Xs(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=$l({mode:`visible`,children:i.children},a,0,null),o=Ql(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Fa(t,e.child,null,s),t.child.memoizedState=qs(s),t.memoizedState=Ks,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return Xs(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Ts(o,i,void 0),Xs(e,t,s,i)}if(c=(s&e.childLanes)!==0,Ps||c){if(i=Hc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,Ya(e,a),hl(i,e,a,-1))}return kl(),i=Ts(Error(r(421))),Xs(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Hl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,va=Ci(a.nextSibling),_a=t,ya=!0,ba=null,e!==null&&(ca[la++]=da,ca[la++]=fa,ca[la++]=ua,da=e.id,fa=e.overflow,ua=t),t=Ys(t,i.children),t.flags|=4096,t)}function Qs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ua(e.return,t,n)}function $s(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Fs(e,t,r.children,n),r=ho.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qs(e,n,t);else if(e.tag===19)Qs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Bi(ho,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$s(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$s(t,!0,n,null,a);break;case`together`:$s(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function tc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function X(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Xl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Z(e,t,n){switch(t.tag){case 3:Ws(t),Oa();break;case 5:po(t);break;case 1:Ki(t.type)&&Xi(t);break;case 4:uo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Bi(La,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Bi(ho,ho.current&1),e=X(e,t,n),e===null?null:e.sibling):Js(e,t,n):(Bi(ho,ho.current&1),t.flags|=128,null);Bi(ho,ho.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Bi(ho,ho.current),r)break;return null;case 22:case 23:return t.lanes=0,zs(e,t,n)}return X(e,t,n)}var nc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},rc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,lo(oo.current);var o=null;switch(n){case`input`:i=P(e,i),r=P(e,r),o=[];break;case`select`:i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case`textarea`:i=R(e,i),r=R(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=pi)}je(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null){if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||(n={}),n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null))}for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null)){if(u===`style`){if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l}else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o=o||[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o=o||[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&$r(`scroll`,e),o||c===l||(o=[])):(o=o||[]).push(u,l))}}n&&(o=o||[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},ic=function(e,t,n,r){n!==r&&(t.flags|=4)};function ac(e,t){if(!ya)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sc(e,t,n){var i=t.pendingProps;switch(ga(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oc(t),null;case 1:return Ki(t.type)&&qi(),oc(t),null;case 3:return i=t.stateNode,fo(),zi(Ui),zi(Hi),vo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ea(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ba!==null&&(yl(ba),ba=null))),oc(t),null;case 5:mo(t);var o=lo(co.current);if(n=t.type,e!==null&&t.stateNode!=null)rc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return oc(t),null}if(e=lo(oo.current),Ea(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Ei]=t,i[Di]=s,e=!!(t.mode&1),n){case`dialog`:$r(`cancel`,i),$r(`close`,i);break;case`iframe`:case`object`:case`embed`:$r(`load`,i);break;case`video`:case`audio`:for(o=0;o<Yr.length;o++)$r(Yr[o],i);break;case`source`:$r(`error`,i);break;case`img`:case`image`:case`link`:$r(`error`,i),$r(`load`,i);break;case`details`:$r(`toggle`,i);break;case`input`:F(i,s),$r(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},$r(`invalid`,i);break;case`textarea`:z(i,s),$r(`invalid`,i)}for(var c in je(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&fi(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&fi(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&$r(`scroll`,i)}switch(n){case`input`:_e(i),xe(i,s,!0);break;case`textarea`:_e(i),V(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=pi)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=H(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Ei]=t,e[Di]=i,nc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Me(n,i),n){case`dialog`:$r(`cancel`,e),$r(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:$r(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<Yr.length;o++)$r(Yr[o],e);o=i;break;case`source`:$r(`error`,e),o=i;break;case`img`:case`image`:case`link`:$r(`error`,e),$r(`load`,e),o=i;break;case`details`:$r(`toggle`,e),o=i;break;case`input`:F(e,i),o=P(e,i),$r(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=oe({},i,{value:void 0}),$r(`invalid`,e);break;case`textarea`:z(e,i),o=R(e,i),$r(`invalid`,e);break;default:o=i}for(s in je(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?ke(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&we(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Te(e,u):typeof u==`number`&&Te(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&$r(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:_e(e),xe(e,i,!1);break;case`textarea`:_e(e),V(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+me(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Se(e,!!i.multiple,i.defaultValue,!0):Se(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=pi)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oc(t),null;case 6:if(e&&t.stateNode!=null)ic(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=lo(co.current),lo(oo.current),Ea(t)){if(i=t.stateNode,n=t.memoizedProps,i[Ei]=t,(s=i.nodeValue!==n)&&(e=_a,e!==null))switch(e.tag){case 3:fi(i.nodeValue,n,!!(e.mode&1));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&fi(i.nodeValue,n,!!(e.mode&1))}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ei]=t,t.stateNode=i}return oc(t),null;case 13:if(zi(ho),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ya&&va!==null&&t.mode&1&&!(t.flags&128))Da(),Oa(),t.flags|=98560,s=!1;else if(s=Ea(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Ei]=t}else Oa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oc(t),s=!1}else ba!==null&&(yl(ba),ba=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||ho.current&1?qc===0&&(qc=3):kl())),t.updateQueue!==null&&(t.flags|=4),oc(t),null);case 4:return fo(),e===null&&ni(t.stateNode.containerInfo),oc(t),null;case 10:return Ha(t.type._context),oc(t),null;case 17:return Ki(t.type)&&qi(),oc(t),null;case 19:if(zi(ho),s=t.memoizedState,s===null)return oc(t),null;if(i=!!(t.flags&128),c=s.rendering,c===null){if(i)ac(s,!1);else{if(qc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=go(e),c!==null){for(t.flags|=128,ac(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Bi(ho,ho.current&1|2),t.child}e=e.sibling}s.tail!==null&&lt()>tl&&(t.flags|=128,i=!0,ac(s,!1),t.lanes=4194304)}}else{if(!i){if(e=go(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ac(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!ya)return oc(t),null}else 2*lt()-s.renderingStartTime>tl&&n!==1073741824&&(t.flags|=128,i=!0,ac(s,!1),t.lanes=4194304)}s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(oc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=lt(),t.sibling=null,n=ho.current,Bi(ho,i?n&1|2:n&1),t);case 22:case 23:return Tl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Gc&1073741824&&(oc(t),t.subtreeFlags&6&&(t.flags|=8192)):oc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function cc(e,t){switch(ga(t),t.tag){case 1:return Ki(t.type)&&qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fo(),zi(Ui),zi(Hi),vo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mo(t),null;case 13:if(zi(ho),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return zi(ho),null;case 4:return fo(),null;case 10:return Ha(t.type._context),null;case 22:case 23:return Tl(),null;case 24:return null;default:return null}}var lc=!1,uc=!1,dc=typeof WeakSet==`function`?WeakSet:Set,Q=null;function fc(e,t){var n=e.ref;if(n!==null){if(typeof n==`function`)try{n(null)}catch(n){zl(e,t,n)}else n.current=null}}function pc(e,t,n){try{n()}catch(n){zl(e,t,n)}}var mc=!1;function hc(e,t){if(mi=cn,e=Dr(),Or(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hi={focusedElem:e,selectionRange:n},cn=!1,Q=t;Q!==null;)if(t=Q,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:_s(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){zl(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return h=mc,mc=!1,h}function gc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&pc(t,n,a)}i=i.next}while(i!==r)}}function _c(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function yc(e){var t=e.alternate;t!==null&&(e.alternate=null,yc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ei],delete t[Di],delete t[ki],delete t[Ai],delete t[ji])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bc(e){return e.tag===5||e.tag===3||e.tag===4}function xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pi));else if(r!==4&&(e=e.child,e!==null))for(Sc(e,t,n),e=e.sibling;e!==null;)Sc(e,t,n),e=e.sibling}function Cc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cc(e,t,n),e=e.sibling;e!==null;)Cc(e,t,n),e=e.sibling}var wc=null,Tc=!1;function Ec(e,t,n){for(n=n.child;n!==null;)Dc(e,t,n),n=n.sibling}function Dc(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount==`function`)try{_t.onCommitFiberUnmount(gt,n)}catch{}switch(n.tag){case 5:uc||fc(n,t);case 6:var r=wc,i=Tc;wc=null,Ec(e,t,n),wc=r,Tc=i,wc!==null&&(Tc?(e=wc,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):wc.removeChild(n.stateNode));break;case 18:wc!==null&&(Tc?(e=wc,n=n.stateNode,e.nodeType===8?Si(e.parentNode,n):e.nodeType===1&&Si(e,n),on(e)):Si(wc,n.stateNode));break;case 4:r=wc,i=Tc,wc=n.stateNode.containerInfo,Tc=!0,Ec(e,t,n),wc=r,Tc=i;break;case 0:case 11:case 14:case 15:if(!uc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&pc(n,t,o),i=i.next}while(i!==r)}Ec(e,t,n);break;case 1:if(!uc&&(fc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){zl(n,t,e)}Ec(e,t,n);break;case 21:Ec(e,t,n);break;case 22:n.mode&1?(uc=(r=uc)||n.memoizedState!==null,Ec(e,t,n),uc=r):Ec(e,t,n);break;default:Ec(e,t,n)}}function Oc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dc),t.forEach(function(t){var r=Ul.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function kc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:wc=c.stateNode,Tc=!1;break a;case 3:wc=c.stateNode.containerInfo,Tc=!0;break a;case 4:wc=c.stateNode.containerInfo,Tc=!0;break a}c=c.return}if(wc===null)throw Error(r(160));Dc(o,s,a),wc=null,Tc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){zl(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ac(t,e),t=t.sibling}function Ac(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kc(t,e),jc(e),i&4){try{gc(3,e,e.return),_c(3,e)}catch(t){zl(e,e.return,t)}try{gc(5,e,e.return)}catch(t){zl(e,e.return,t)}}break;case 1:kc(t,e),jc(e),i&512&&n!==null&&fc(n,n.return);break;case 5:if(kc(t,e),jc(e),i&512&&n!==null&&fc(n,n.return),e.flags&32){var a=e.stateNode;try{Te(a,``)}catch(t){zl(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&ye(a,o),Me(c,s);var u=Me(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?ke(a,f):d===`dangerouslySetInnerHTML`?we(a,f):d===`children`?Te(a,f):S(a,d,f,u)}switch(c){case`input`:be(a,o);break;case`textarea`:B(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Se(a,!!o.multiple,o.multiple?[]:``,!1):Se(a,!!o.multiple,o.defaultValue,!0)):Se(a,!!o.multiple,m,!1)}a[Di]=o}catch(t){zl(e,e.return,t)}}break;case 6:if(kc(t,e),jc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){zl(e,e.return,t)}}break;case 3:if(kc(t,e),jc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{on(t.containerInfo)}catch(t){zl(e,e.return,t)}break;case 4:kc(t,e),jc(e);break;case 13:kc(t,e),jc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(el=lt())),i&4&&Oc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(uc=(u=uc)||d,kc(t,e),uc=u):kc(t,e),jc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Q=e,d=e.child;d!==null;){for(f=Q=d;Q!==null;){switch(p=Q,m=p.child,p.tag){case 0:case 11:case 14:case 15:gc(4,p,p.return);break;case 1:fc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){zl(i,n,e)}}break;case 5:fc(p,p.return);break;case 22:if(p.memoizedState!==null){Fc(f);continue}}m===null?Fc(f):(m.return=p,Q=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Oe(`display`,s))}catch(t){zl(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){zl(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:kc(t,e),jc(e),i&4&&Oc(e);break;case 21:break;default:kc(t,e),jc(e)}}function jc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(bc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Te(a,``),i.flags&=-33),Cc(e,xc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Sc(e,xc(e),o);break;default:throw Error(r(161))}}catch(t){zl(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mc(e,t,n){Q=e,Nc(e,t,n)}function Nc(e,t,n){for(var r=!!(e.mode&1);Q!==null;){var i=Q,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||lc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||uc;s=lc;var l=uc;if(lc=o,(uc=c)&&!l)for(Q=i;Q!==null;)o=Q,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Ic(i):(c.return=o,Q=c);for(;a!==null;)Q=a,Nc(a,t,n),a=a.sibling;Q=i,lc=s,uc=l}Pc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Q=a):Pc(e,t,n)}}function Pc(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:uc||_c(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!uc){if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:_s(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}}var o=t.updateQueue;o!==null&&io(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}io(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&on(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}uc||t.flags&512&&vc(t)}catch(e){zl(t,t.return,e)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Fc(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Ic(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_c(4,t)}catch(e){zl(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){zl(t,i,e)}}var a=t.return;try{vc(t)}catch(e){zl(t,a,e)}break;case 5:var o=t.return;try{vc(t)}catch(e){zl(t,o,e)}}}catch(e){zl(t,t.return,e)}if(t===e){Q=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Q=s;break}Q=t.return}}var Lc=Math.ceil,Rc=C.ReactCurrentDispatcher,zc=C.ReactCurrentOwner,Bc=C.ReactCurrentBatchConfig,Vc=0,Hc=null,Uc=null,Wc=0,Gc=0,Kc=Ri(0),qc=0,Jc=null,Yc=0,Xc=0,Zc=0,Qc=null,$c=null,el=0,tl=1/0,nl=null,rl=!1,il=null,al=null,ol=!1,sl=null,cl=0,ll=0,ul=null,dl=-1,fl=0;function pl(){return Vc&6?lt():dl===-1?dl=lt():dl}function ml(e){return e.mode&1?Vc&2&&Wc!==0?Wc&-Wc:Aa.transition===null?(e=Ft,e===0&&(e=window.event,e=e===void 0?16:mn(e.type)),e):(fl===0&&(fl=At()),fl):1}function hl(e,t,n,i){if(50<ll)throw ll=0,ul=null,Error(r(185));Mt(e,n,i),Vc&2&&e===Hc||(e===Hc&&(!(Vc&2)&&(Xc|=n),qc===4&&xl(e,Wc)),gl(e,i),n===1&&Vc===0&&!(t.mode&1)&&(tl=lt()+500,$i&&ra()))}function gl(e,t){var n=e.callbackNode;Ot(e,t);var r=Et(e,e===Hc?Wc:0);if(r===0)n!==null&&K(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&K(n),t===1)e.tag===0?na(Sl.bind(null,e)):ta(Sl.bind(null,e)),bi(function(){!(Vc&6)&&ra()}),n=null;else{switch(It(r)){case 1:n=dt;break;case 4:n=ft;break;case 16:n=pt;break;case 536870912:n=ht;break;default:n=pt}n=Gl(n,_l.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _l(e,t){if(dl=-1,fl=0,Vc&6)throw Error(r(327));var n=e.callbackNode;if(Ll()&&e.callbackNode!==n)return null;var i=Et(e,e===Hc?Wc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Al(e,i);else{t=i;var a=Vc;Vc|=2;var o=Ol();(Hc!==e||Wc!==t)&&(nl=null,tl=lt()+500,El(e,t));do try{Ml();break}catch(t){Dl(e,t)}while(1);Va(),Rc.current=o,Vc=a,Uc===null?(Hc=null,Wc=0,t=qc):t=0}if(t!==0){if(t===2&&(a=kt(e),a!==0&&(i=a,t=vl(e,a))),t===1)throw n=Jc,El(e,0),xl(e,i),gl(e,lt()),n;if(t===6)xl(e,i);else{if(a=e.current.alternate,!(i&30)&&!bl(a)&&(t=Al(e,i),t===2&&(o=kt(e),o!==0&&(i=o,t=vl(e,o))),t===1))throw n=Jc,El(e,0),xl(e,i),gl(e,lt()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Fl(e,$c,nl);break;case 3:if(xl(e,i),(i&130023424)===i&&(t=el+500-lt(),10<t)){if(Et(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){pl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=_i(Fl.bind(null,e,$c,nl),t);break}Fl(e,$c,nl);break;case 4:if(xl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-yt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Lc(i/1960))-i,10<i){e.timeoutHandle=_i(Fl.bind(null,e,$c,nl),i);break}Fl(e,$c,nl);break;case 5:Fl(e,$c,nl);break;default:throw Error(r(329))}}}return gl(e,lt()),e.callbackNode===n?_l.bind(null,e):null}function vl(e,t){var n=Qc;return e.current.memoizedState.isDehydrated&&(El(e,t).flags|=256),e=Al(e,t),e!==2&&(t=$c,$c=n,t!==null&&yl(t)),e}function yl(e){$c===null?$c=e:$c.push.apply($c,e)}function bl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!wr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xl(e,t){for(t&=~Zc,t&=~Xc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function Sl(e){if(Vc&6)throw Error(r(327));Ll();var t=Et(e,0);if(!(t&1))return gl(e,lt()),null;var n=Al(e,t);if(e.tag!==0&&n===2){var i=kt(e);i!==0&&(t=i,n=vl(e,i))}if(n===1)throw n=Jc,El(e,0),xl(e,t),gl(e,lt()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fl(e,$c,nl),gl(e,lt()),null}function Cl(e,t){var n=Vc;Vc|=1;try{return e(t)}finally{Vc=n,Vc===0&&(tl=lt()+500,$i&&ra())}}function wl(e){sl!==null&&sl.tag===0&&!(Vc&6)&&Ll();var t=Vc;Vc|=1;var n=Bc.transition,r=Ft;try{if(Bc.transition=null,Ft=1,e)return e()}finally{Ft=r,Bc.transition=n,Vc=t,!(Vc&6)&&ra()}}function Tl(){Gc=Kc.current,zi(Kc)}function El(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vi(n)),Uc!==null)for(n=Uc.return;n!==null;){var r=n;switch(ga(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qi();break;case 3:fo(),zi(Ui),zi(Hi),vo();break;case 5:mo(r);break;case 4:fo();break;case 13:zi(ho);break;case 19:zi(ho);break;case 10:Ha(r.type._context);break;case 22:case 23:Tl()}n=n.return}if(Hc=e,Uc=e=Xl(e.current,null),Wc=Gc=t,qc=0,Jc=null,Zc=Xc=Yc=0,$c=Qc=null,Ka!==null){for(t=0;t<Ka.length;t++)if(n=Ka[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Ka=null}return e}function Dl(e,t){do{var n=Uc;try{if(Va(),yo.current=ps,To){for(var i=So.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}To=!1}if(xo=0,wo=Co=So=null,Eo=!1,Do=0,zc.current=null,n===null||n.return===null){qc=1,Jc=t,Uc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Wc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=js(s);if(m!==null){m.flags&=-257,Ms(m,s,c,o,t),m.mode&1&&As(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}if(!(t&1)){As(o,u,t),kl();break a}l=Error(r(426))}else if(ya&&c.mode&1){var _=js(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ms(_,s,c,o,t),ka(ws(l,c));break a}}o=l=ws(l,c),qc!==4&&(qc=2),Qc===null?Qc=[o]:Qc.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Os(o,l,t);no(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(al===null||!al.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=ks(o,c,t);no(o,x);break a}}o=o.return}while(o!==null)}Pl(n)}catch(e){t=e,Uc===n&&n!==null&&(Uc=n=n.return);continue}break}while(1)}function Ol(){var e=Rc.current;return Rc.current=ps,e===null?ps:e}function kl(){(qc===0||qc===3||qc===2)&&(qc=4),Hc===null||!(Yc&268435455)&&!(Xc&268435455)||xl(Hc,Wc)}function Al(e,t){var n=Vc;Vc|=2;var i=Ol();(Hc!==e||Wc!==t)&&(nl=null,El(e,t));do try{jl();break}catch(t){Dl(e,t)}while(1);if(Va(),Vc=n,Rc.current=i,Uc!==null)throw Error(r(261));return Hc=null,Wc=0,qc}function jl(){for(;Uc!==null;)Nl(Uc)}function Ml(){for(;Uc!==null&&!st();)Nl(Uc)}function Nl(e){var t=Wl(e.alternate,e,Gc);e.memoizedProps=e.pendingProps,t===null?Pl(e):Uc=t,zc.current=null}function Pl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cc(n,t),n!==null){n.flags&=32767,Uc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qc=6,Uc=null;return}}else if(n=sc(n,t,Gc),n!==null){Uc=n;return}if(t=t.sibling,t!==null){Uc=t;return}Uc=t=e}while(t!==null);qc===0&&(qc=5)}function Fl(e,t,n){var r=Ft,i=Bc.transition;try{Bc.transition=null,Ft=1,Il(e,t,n,r)}finally{Bc.transition=i,Ft=r}return null}function Il(e,t,n,i){do Ll();while(sl!==null);if(Vc&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Nt(e,o),e===Hc&&(Uc=Hc=null,Wc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,Gl(pt,function(){return Ll(),null})),o=!!(n.flags&15990),n.subtreeFlags&15990||o){o=Bc.transition,Bc.transition=null;var s=Ft;Ft=1;var c=Vc;Vc|=4,zc.current=null,hc(e,n),Ac(n,e),kr(hi),cn=!!mi,hi=mi=null,e.current=n,Mc(n,e,a),ct(),Vc=c,Ft=s,Bc.transition=o}else e.current=n;if(ol&&(ol=!1,sl=e,cl=a),o=e.pendingLanes,o===0&&(al=null),vt(n.stateNode,i),gl(e,lt()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(rl)throw rl=!1,e=il,il=null,e;return cl&1&&e.tag!==0&&Ll(),o=e.pendingLanes,o&1?e===ul?ll++:(ll=0,ul=e):ll=0,ra(),null}function Ll(){if(sl!==null){var e=It(cl),t=Bc.transition,n=Ft;try{if(Bc.transition=null,Ft=16>e?16:e,sl===null)var i=!1;else{if(e=sl,sl=null,cl=0,Vc&6)throw Error(r(331));var a=Vc;for(Vc|=4,Q=e.current;Q!==null;){var o=Q,s=o.child;if(Q.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(Q=u;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:gc(8,d,o)}var f=d.child;if(f!==null)f.return=d,Q=f;else for(;Q!==null;){d=Q;var p=d.sibling,m=d.return;if(yc(d),d===u){Q=null;break}if(p!==null){p.return=m,Q=p;break}Q=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}Q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Q=s;else b:for(;Q!==null;){if(o=Q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:gc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,Q=v;break b}Q=o.return}}var y=e.current;for(Q=y;Q!==null;){s=Q;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,Q=b;else b:for(s=y;Q!==null;){if(c=Q,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:_c(9,c)}}catch(e){zl(c,c.return,e)}if(c===s){Q=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,Q=x;break b}Q=c.return}}if(Vc=a,ra(),_t&&typeof _t.onPostCommitFiberRoot==`function`)try{_t.onPostCommitFiberRoot(gt,e)}catch{}i=!0}return i}finally{Ft=n,Bc.transition=t}}return!1}function Rl(e,t,n){t=ws(n,t),t=Os(e,t,1),e=eo(e,t,1),t=pl(),e!==null&&(Mt(e,1,t),gl(e,t))}function zl(e,t,n){if(e.tag===3)Rl(e,e,n);else for(;t!==null;){if(t.tag===3){Rl(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(al===null||!al.has(r))){e=ws(n,e),e=ks(t,e,1),t=eo(t,e,1),e=pl(),t!==null&&(Mt(t,1,e),gl(t,e));break}}t=t.return}}function Bl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pl(),e.pingedLanes|=e.suspendedLanes&n,Hc===e&&(Wc&n)===n&&(qc===4||qc===3&&(Wc&130023424)===Wc&&500>lt()-el?El(e,0):Zc|=n),gl(e,t)}function Vl(e,t){t===0&&(e.mode&1?(t=wt,wt<<=1,!(wt&130023424)&&(wt=4194304)):t=1);var n=pl();e=Ya(e,t),e!==null&&(Mt(e,t,n),gl(e,n))}function Hl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vl(e,n)}function Ul(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Vl(e,n)}var Wl=function(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps||Ui.current)Ps=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Ps=!1,Z(e,t,n);Ps=!!(e.flags&131072)}}else Ps=!1,ya&&t.flags&1048576&&ma(t,sa,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;tc(e,t),e=t.pendingProps;var a=Gi(t,Hi.current);Wa(t,n),a=jo(null,t,i,e,a,n);var o=Mo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ki(i)?(o=!0,Xi(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Za(t),a.updater=ys,t.stateNode=a,a._reactInternals=t,Cs(t,i,e,n),t=Us(null,t,i,!0,o,n)):(t.tag=0,ya&&o&&ha(t),Fs(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(tc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Yl(i),e=_s(i,e),a){case 0:t=Vs(null,t,i,e,n);break a;case 1:t=Hs(null,t,i,e,n);break a;case 11:t=Is(null,t,i,e,n);break a;case 14:t=Ls(null,t,i,_s(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:_s(i,a),Vs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:_s(i,a),Hs(e,t,i,a,n);case 3:a:{if(Ws(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,Qa(e,t),ro(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=ws(Error(r(423)),t),t=Gs(e,t,i,n,a);break a}if(i!==a){a=ws(Error(r(424)),t),t=Gs(e,t,i,n,a);break a}for(va=Ci(t.stateNode.containerInfo.firstChild),_a=t,ya=!0,ba=null,n=Ia(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Oa(),i===a){t=X(e,t,n);break a}Fs(e,t,i,n)}t=t.child}return t;case 5:return po(t),e===null&&wa(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,gi(i,a)?s=null:o!==null&&gi(i,o)&&(t.flags|=32),Bs(e,t),Fs(e,t,s,n),t.child;case 6:return e===null&&wa(t),null;case 13:return Js(e,t,n);case 4:return uo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Fa(t,null,i,n):Fs(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:_s(i,a),Is(e,t,i,a,n);case 7:return Fs(e,t,t.pendingProps,n),t.child;case 8:return Fs(e,t,t.pendingProps.children,n),t.child;case 12:return Fs(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,Bi(La,i._currentValue),i._currentValue=s,o!==null){if(wr(o.value,s)){if(o.children===a.children&&!Ui.current){t=X(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=$a(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ua(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ua(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}}Fs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Wa(t,n),a=Ga(a),i=i(a),t.flags|=1,Fs(e,t,i,n),t.child;case 14:return i=t.type,a=_s(i,t.pendingProps),a=_s(i.type,a),Ls(e,t,i,a,n);case 15:return Rs(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:_s(i,a),tc(e,t),t.tag=1,Ki(i)?(e=!0,Xi(t)):e=!1,Wa(t,n),xs(t,i,a),Cs(t,i,a,n),Us(null,t,i,!0,e,n);case 19:return ec(e,t,n);case 22:return zs(e,t,n)}throw Error(r(156,t.tag))};function Gl(e,t){return ot(e,t)}function Kl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ql(e,t,n,r){return new Kl(e,t,n,r)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yl(e){if(typeof e==`function`)return+!!Jl(e);if(e!=null){if(e=e.$$typeof,e===j)return 11;if(e===te)return 14}return 2}function Xl(e,t){var n=e.alternate;return n===null?(n=ql(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)Jl(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case E:return Ql(n.children,a,o,t);case D:s=8,a|=8;break;case O:return e=ql(12,n,t,a|2),e.elementType=O,e.lanes=o,e;case ee:return e=ql(13,n,t,a),e.elementType=ee,e.lanes=o,e;case M:return e=ql(19,n,t,a),e.elementType=M,e.lanes=o,e;case re:return $l(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case k:s=10;break a;case A:s=9;break a;case j:s=11;break a;case te:s=14;break a;case ne:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=ql(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Ql(e,t,n,r){return e=ql(7,e,r,t),e.lanes=n,e}function $l(e,t,n,r){return e=ql(22,e,r,t),e.elementType=re,e.lanes=n,e.stateNode={isHidden:!1},e}function eu(e,t,n){return e=ql(6,e,null,t),e.lanes=n,e}function tu(e,t,n){return t=ql(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jt(0),this.expirationTimes=jt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ru(e,t,n,r,i,a,o,s,c){return e=new nu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=ql(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Za(a),e}function iu(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function au(e){if(!e)return Vi;e=e._reactInternals;a:{if(tt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(Ki(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(Ki(n))return Yi(e,n,t)}return t}function ou(e,t,n,r,i,a,o,s,c){return e=ru(n,r,!0,e,i,a,o,s,c),e.context=au(null),n=e.current,r=pl(),i=ml(n),a=$a(r,i),a.callback=t??null,eo(n,a,i),e.current.lanes=i,Mt(e,i,r),gl(e,r),e}function su(e,t,n,r){var i=t.current,a=pl(),o=ml(i);return n=au(n),t.context===null?t.context=n:t.pendingContext=n,t=$a(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=eo(i,t,o),e!==null&&(hl(e,i,o,a),to(e,i,o)),o}function cu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function uu(e,t){lu(e,t),(e=e.alternate)&&lu(e,t)}function du(){return null}var fu=typeof reportError==`function`?reportError:function(e){console.error(e)};function pu(e){this._internalRoot=e}mu.prototype.render=pu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));su(e,t,null,null)},mu.prototype.unmount=pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wl(function(){su(null,e,null,null)}),t[Oi]=null}};function mu(e){this._internalRoot=e}mu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&en(e)}};function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function _u(){}function vu(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=cu(o);a.call(e)}}var o=ou(t,r,e,0,null,!1,!1,``,_u);return e._reactRootContainer=o,e[Oi]=o.current,ni(e.nodeType===8?e.parentNode:e),wl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=cu(c);s.call(e)}}var c=ru(e,0,!1,null,null,!1,!1,``,_u);return e._reactRootContainer=c,e[Oi]=c.current,ni(e.nodeType===8?e.parentNode:e),wl(function(){su(t,c,n,r)}),c}function yu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=cu(o);s.call(e)}}su(t,o,e,i)}else o=vu(n,t,e,i,r);return cu(o)}Lt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tt(t.pendingLanes);n!==0&&(Pt(t,n|1),gl(t,lt()),!(Vc&6)&&(tl=lt()+500,ra()))}break;case 13:wl(function(){var t=Ya(e,1);t!==null&&hl(t,e,1,pl())}),uu(e,1)}},Rt=function(e){if(e.tag===13){var t=Ya(e,134217728);t!==null&&hl(t,e,134217728,pl()),uu(e,134217728)}},zt=function(e){if(e.tag===13){var t=ml(e),n=Ya(e,t);n!==null&&hl(n,e,t,pl()),uu(e,t)}},Bt=function(){return Ft},Vt=function(e,t){var n=Ft;try{return Ft=e,t()}finally{Ft=n}},Fe=function(e,t,n){switch(t){case`input`:if(be(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Fi(i);if(!a)throw Error(r(90));ve(i),be(i,a)}}}break;case`textarea`:B(e,n);break;case`select`:t=n.value,t!=null&&Se(e,!!n.multiple,t,!1)}},Ve=Cl,W=wl;var bu={usingClientEntryPoint:!1,Events:[Ni,Pi,Fi,ze,Be,Cl]},xu={findFiberByHostInstance:Mi,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},Su={bundleType:xu.bundleType,version:xu.version,rendererPackageName:xu.rendererPackageName,rendererConfig:xu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=it(e),e===null?null:e.stateNode},findFiberByHostInstance:xu.findFiberByHostInstance||du,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{gt=Cu.inject(Su),_t=Cu}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hu(t))throw Error(r(200));return iu(e,t,null,n)},e.createRoot=function(e,t){if(!hu(e))throw Error(r(299));var n=!1,i=``,a=fu;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ru(e,1,!1,null,null,n,!1,i,a),e[Oi]=t.current,ni(e.nodeType===8?e.parentNode:e),new pu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=it(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return wl(e)},e.hydrate=function(e,t,n){if(!gu(t))throw Error(r(200));return yu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!hu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=fu;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ou(t,null,e,1,n??null,a,!1,o,s),e[Oi]=t.current,ni(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new mu(t)},e.render=function(e,t,n){if(!gu(t))throw Error(r(200));return yu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!gu(e))throw Error(r(40));return e._reactRootContainer?(wl(function(){yu(null,null,e,!1,function(){e._reactRootContainer=null,e[Oi]=null})}),!0):!1},e.unstable_batchedUpdates=Cl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!gu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return yu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=c(u(),1),_=h(),v=new class{constructor(){this.ctx=null,this.bgmOn=!0,this.seOn=!0,this.phase=0,this.timer=0}start(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.bgm=t.createGain(),this.bgm.gain.value=this.bgmOn?.5:0,this.bgm.connect(t.destination),this.se=t.createGain(),this.se.gain.value=this.seOn?.6:0,this.se.connect(t.destination);let n=t.createBuffer(1,t.sampleRate*3,t.sampleRate),r=n.getChannelData(0),i=0;for(let e=0;e<r.length;e++)i=(i+(Math.random()*2-1)*.08)*.985,r[e]=i*3;let a=(e,r)=>{let i=t.createBufferSource();i.buffer=n,i.loop=!0;let a=t.createBiquadFilter();a.type=`bandpass`,a.frequency.value=e,a.Q.value=r;let o=t.createGain();return o.gain.value=0,i.connect(a),a.connect(o),o.connect(this.se),i.start(),o};this.crowd=a(520,.7),this.wind=a(180,.5);for(let[e,n]of[[73.4,.05],[110,.03],[146.8,.018]]){let r=t.createOscillator();r.type=`sine`,r.frequency.value=e;let i=t.createGain();i.gain.value=n,r.connect(i),i.connect(this.bgm),r.start()}this.timer=window.setInterval(()=>this.pluck(),2600),this.mood(1,0)}tone(e,t,n,r,i,a=0){let o=this.ctx;if(!o)return;let s=o.currentTime+a,c=o.createOscillator(),l=o.createGain();c.type=r,c.frequency.value=e,l.gain.setValueAtTime(0,s),l.gain.linearRampToValueAtTime(n,s+.012),l.gain.exponentialRampToValueAtTime(1e-4,s+t),c.connect(l),l.connect(i),c.start(s),c.stop(s+t+.05)}pluck(){if(!this.ctx||!this.bgmOn||Math.random()<.15+this.phase*.2)return;let e=[146.8,164.8,174.6,196,220,246.9,261.6,293.7],t=e[Math.floor(Math.random()*e.length)]*(this.phase>=2?.5:1);this.tone(t,2.2,.07,`triangle`,this.bgm),Math.random()<.5&&this.tone(t*1.5,1.8,.04,`triangle`,this.bgm,.35)}mood(e,t){if(this.phase=t,!this.ctx)return;let n=this.ctx.currentTime;this.crowd.gain.linearRampToValueAtTime(.22*e,n+2),this.wind.gain.linearRampToValueAtTime(.05+.12*(1-e),n+2)}setBgm(e){this.bgmOn=e,this.ctx&&(this.bgm.gain.value=e?.5:0)}setSe(e){this.seOn=e,this.ctx&&(this.se.gain.value=e?.6:0)}step(){this.ctx&&this.tone(70+Math.random()*25,.07,.06,`triangle`,this.se)}click(){this.tone(660,.06,.05,`sine`,this.se)}page(){this.tone(420,.05,.035,`sine`,this.se)}coin(){this.tone(1320,.12,.05,`sine`,this.se),this.tone(1760,.18,.04,`sine`,this.se,.06)}bell(){for(let[e,t]of[[1,.16],[2.01,.08],[2.76,.05],[5.4,.02]])this.tone(196*e,3.5,t,`sine`,this.se)}},y=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},b=(e=>e?y(e):y),x=e=>e;function S(e,t=x){let n=g.useSyncExternalStore(e.subscribe,g.useCallback(()=>t(e.getState()),[e,t]),()=>t(e.getInitialState()));return g.useDebugValue(n),n}var C=e=>{let t=b(e),n=e=>S(t,e);return Object.assign(n,t),n},w=(e=>e?C(e):C);function T(e){let t=1779033703^e.length;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),3432918353),t=t<<13|t>>>19;return t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),(t^t>>>16)>>>0}function E(e){e.rng=e.rng+1831565813>>>0;let t=e.rng;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}var D=(e,t,n)=>t+(n-t)*E(e),O=(e,t,n)=>t+Math.floor(E(e)*(n-t+1)),k=(e,t)=>E(e)<t,A=(e,t)=>t[Math.floor(E(e)*t.length)];function j(){return String(Math.floor(Math.random()*9e5)+1e5)}var ee=e=>e==null?[]:Array.isArray(e)?e:[e],M=(e,t)=>typeof e==`function`?e(t):e,te=[[`time`,`時間`,``],[`stamina`,`体力`,``],[`money`,``,`ソルド`],[`food`,`食料`,``],[`supplies`,`生活用品`,``],[`remedies`,`薬草`,``]];function ne(e){return te.filter(([t])=>e[t]).map(([t,n,r])=>`${n}${e[t]}${r}`).join(`・`)}function re(e,t){return t.time&&e.time<t.time?`今日はもう時間がない`:t.stamina&&e.stamina<t.stamina?`体力が足りない`:t.money&&e.money<t.money?`お金が足りない`:t.food&&e.food<t.food?`食料が足りない`:t.supplies&&e.supplies<t.supplies?`生活用品がない`:t.remedies&&e.remedies<t.remedies?`薬草がない`:null}function ie(e,t){return M(e.choices,t)}function ae(e,t,n){let r=e[n];if(!r)throw Error(`unknown encounter: `+n);let i=ie(r,t).map((e,t)=>({c:e,idx:t})).filter(({c:e})=>!e.show||e.show(t)).map(({c:e,idx:n})=>{let r=e.cost?M(e.cost,t):{},i=ne(r),a=[e.hint?M(e.hint,t):``,i].filter(Boolean).join(`／`),o=re(t,r);if(!o&&e.ok){let n=e.ok(t);n!==!0&&(o=n)}return{idx:n,label:M(e.label,t),hint:a,disabled:o,tag:e.tag}});return{id:n,title:r.title,speaker:r.speaker?M(r.speaker,t):void 0,lines:ee(M(r.text,t)),choices:i,category:r.category}}function oe(e,t,n,r){let i=e[n],a=ie(i,t)[r];if(!a)throw Error(`bad choice ${n}#${r}`);let o=a.cost?M(a.cost,t):{};if(re(t,o)||a.ok&&a.ok(t)!==!0)return{lines:[]};t.time-=o.time??0,t.stamina-=o.stamina??0,t.money-=o.money??0,t.food-=o.food??0,t.supplies-=o.supplies??0,t.remedies-=o.remedies??0,a.key&&t.journal.push({day:t.day,text:a.key,key:!0});let s=a.run?a.run(t):void 0;return s&&typeof s==`object`&&!Array.isArray(s)?{lines:ee(s.t),next:s.next}:{lines:ee(s)}}function se(e,t,n,r=2){let i=[],a=Object.values(e).filter(e=>{let r=e.auto;if(!r||r.on!==n)return!1;let i=t.seen[e.id];return i!==void 0&&(r.once!==!1||t.day-i<(r.cooldown??3))||t.queue.includes(e.id)?!1:!r.when||r.when(t)}),o=a.filter(e=>(e.auto.pri??0)>0).sort((e,t)=>t.auto.pri-e.auto.pri).slice(0,r);for(let e of o)t.queue.push(e.id),t.seen[e.id]=t.day,i.push(e.id);if(!o.length){let e=a.filter(e=>!(e.auto.pri??0));if(e.length){let n=e[Math.floor(E(t)*e.length)];E(t)<(n.auto.chance??.5)&&(t.queue.push(n.id),t.seen[n.id]=t.day,i.push(n.id))}}return i}var ce=`jinruishi-hardmode.save.v1`,le=`jinruishi-hardmode.settings.v1`;function ue(e,t){try{localStorage.setItem(ce,JSON.stringify({v:1,s:e,pos:t,at:Date.now()}))}catch{}}function de(){try{let e=localStorage.getItem(ce);if(!e)return null;let t=JSON.parse(e);return t.v!==1||!t.s||t.s.v!==1||t.s.ended?null:t}catch{return null}}function fe(){try{localStorage.removeItem(ce)}catch{}}var pe={bgm:!0,se:!0,sens:1,quality:`auto`};function me(){try{return{...pe,...JSON.parse(localStorage.getItem(le)??`{}`)}}catch{return{...pe}}}function he(e){try{localStorage.setItem(le,JSON.stringify(e))}catch{}}var ge=[14857356,14263418,13209446,15517346,12156760],_e={lucia:{h:1.6,w:.92,skin:ge[3],hair:3810326,hairStyle:`bun`,head:`veil`,headColor:15261903,top:8010555,long:!0,apron:14208952},marco:{h:1.22,w:.85,skin:ge[3],hair:4861722,hairStyle:`bowl`,top:5208650,bottom:5917242,child:!0},pippo:{h:1.18,w:.9,skin:ge[1],hair:2037522,hairStyle:`short`,top:9071162,bottom:4866104,child:!0},beppe:{h:1.72,w:1.3,skin:ge[1],hair:2759698,hairStyle:`bald`,beard:2759698,head:`cap`,headColor:10107690,top:11042634,bottom:4864554,apron:14735040,belt:3811866},gina:{h:1.52,w:1.05,skin:ge[2],hair:9079434,hairStyle:`bun`,head:`wimple`,headColor:14275263,top:5073724,long:!0,cloak:5917242,stoop:.12,prop:`basket`},clothVendor:{h:1.75,w:.95,skin:ge[0],hair:6965802,hairStyle:`long`,head:`cap`,headColor:4020864,top:4020864,bottom:8007471,belt:2763306},vegVendor:{h:1.58,w:1.1,skin:ge[4],hair:2759698,hairStyle:`bun`,head:`straw`,headColor:14205562,top:11569722,long:!0,apron:9075290},guido:{h:1.8,w:1.15,skin:ge[0],hair:10132114,hairStyle:`short`,beard:10132114,head:`coif`,headColor:3092282,top:5910346,bottom:2763306,cloak:3811898,belt:9071146},priest:{h:1.74,w:.9,skin:ge[3],hair:9077368,hairStyle:`tonsure`,top:1842204,long:!0,belt:13156520,stoop:.06},teresa:{h:1.48,w:1,skin:ge[2],hair:13684944,hairStyle:`bun`,head:`wimple`,headColor:3815994,top:3816004,long:!0,stoop:.2,prop:`staff`},pietro:{h:1.84,w:1.25,skin:ge[4],hair:2037522,hairStyle:`short`,beard:2037522,top:8025192,bottom:4866104,apron:5917242,belt:2763306},lando:{h:1.82,w:1.1,skin:ge[1],hair:3811866,hairStyle:`short`,head:`helmet`,headColor:9080726,top:9054762,bottom:3815994,cloak:14735552,belt:2763306,prop:`spear`},bernardo:{h:1.7,w:.88,skin:ge[3],hair:5921370,hairStyle:`long`,beard:6974058,head:`cap`,headColor:8003359,top:8003359,long:!0,cloak:4855061},peddler:{h:1.66,w:.9,skin:ge[4],hair:1710618,hairStyle:`long`,beard:1710618,head:`hood`,headColor:4872762,top:6969914,bottom:3815978,cloak:4872762},folk1:{h:1.7,w:1,skin:ge[0],hair:6965802,hairStyle:`short`,top:6978186,bottom:5917242,belt:2763306},folk2:{h:1.56,w:.95,skin:ge[1],hair:2759698,hairStyle:`bun`,head:`veil`,headColor:14275263,top:9067050,long:!0,prop:`basket`},folk3:{h:1.78,w:1.2,skin:ge[2],hair:2037522,hairStyle:`bald`,beard:3811866,top:5925434,bottom:3811882,apron:6969930},folk4:{h:1.62,w:.9,skin:ge[3],hair:11039786,hairStyle:`long`,head:`hood`,headColor:8007471,top:8007471,bottom:4868682},folk5:{h:1.5,w:1.1,skin:ge[4],hair:10132122,hairStyle:`bun`,head:`wimple`,headColor:14735560,top:4868714,long:!0,stoop:.15},folk6:{h:1.74,w:.92,skin:ge[0],hair:3811866,hairStyle:`bowl`,head:`straw`,headColor:14205562,top:12099696,bottom:6969914},folk7:{h:1.66,w:1.05,skin:ge[1],hair:4861722,hairStyle:`short`,head:`coif`,headColor:14735560,top:10119738,bottom:3816010,cloak:5921354},sick1:{h:1.58,w:.9,skin:13480858,hair:3811866,hairStyle:`long`,top:6974042,long:!0},sick2:{h:1.72,w:.95,skin:13218460,hair:2763306,hairStyle:`short`,beard:2763306,top:5917242,bottom:3815994},sick3:{h:1.6,w:.9,skin:13480858,hair:9079434,hairStyle:`bun`,head:`veil`,headColor:9079418,top:4868682,long:!0},cat:{kind:`cat`,h:.3,skin:1447446,hair:1447446,top:1447446}},ve=(e,t=0,n=100)=>Math.max(t,Math.min(n,e)),N=e=>e.people.player,P=e=>e.people.lucia,F=e=>e.people.marco,ye=e=>[e.people.lucia,e.people.marco],be=e=>[`player`,`lucia`,`marco`].map(t=>e.people[t]).filter(e=>e.alive),xe=e=>be(e).length+e.sc.home.guest,I=e=>e.alive&&!!e.illness&&e.illness.symptomatic,L=e=>e.alive&&!I(e),Se=e=>ye(e).some(I),R=(e,t)=>e.flags[t]??0,z=(e,t,n=1)=>{e.flags[t]=n},B=(e,t,n=1)=>{e.stats[t]=(e.stats[t]??0)+n},V=(e,t)=>e.sc.npcs[t],H=(e,t,n=!1)=>{e.journal.push({day:e.day,text:t,key:n||void 0})};function U(e,t,n){e.alive&&(e[t]=ve(e[t]+n))}function Ce(e,t){e.stamina=ve(e.stamina+t,0,I(N(e))?50:100)}function we(e,t,n,r){return{id:e,name:t,alive:!0,health:n,satiety:70,morale:70,bond:60,risk:0,threshold:r,sources:{},illness:null,immune:!1,cared:0,talked:!1}}function Te(e){let t={v:1,scenario:`blackdeath`,seed:e,rng:T(e),day:1,time:6,maxTime:6,stamina:100,fatigue:0,people:{},money:0,food:0,supplies:0,remedies:0,flags:{},queue:[],seen:{},zonesToday:[],ctx:``,spots:[],journal:[],dangers:[],report:[],stats:{},ended:null,sc:{}},n=()=>D(t,.5,1.5);t.people.player=we(`player`,`あなた`,O(t,82,96),n()),t.people.lucia=we(`lucia`,`ルチア`,O(t,78,95),n()),t.people.marco=we(`marco`,`マルコ`,O(t,78,95),n()),t.money=O(t,26,44),t.food=O(t,6,9),t.supplies=O(t,2,3),t.remedies=O(t,0,1);let r=O(t,0,4);r===1?(t.people.marco.health=66,z(t,`startMarcoCough`)):r===2?(t.people.lucia.health=68,z(t,`startLuciaTired`)):r===3?(t.money+=12,t.food-=2,z(t,`startSavings`)):r===4&&(t.food+=4,t.money-=8,z(t,`startPantry`));let i=O(t,3,4),a={onset:i,mid:i+D(t,3.2,4.8),rate:D(t,.75,1.1),prev:0,phase:0,price:2,stock:13,marketOpen:1,marketCloseDay:99,gateCloseDay:i+O(t,4,6),workshopCloseDay:i+O(t,3,5),farmStruck:+!!k(t,.35),bribe:O(t,14,28)};for(let e=i;e<=14;e++)if(Ee(a,e)>=.62){a.marketCloseDay=e;break}let o=(e,t)=>({st:`ok`,rel:0,day:e,fate:t});return t.sc={town:a,home:{infest:O(t,12,30),cat:0,guest:0},npcs:{teresa:o(i+O(t,1,3),`ok`),pietro:o(i+O(t,2,4),k(t,.5)?`dead`:`ok`),beppe:o(99,k(t,.3)?`dead`:`ok`),gina:o(i+O(t,2,4),`gone`),guido:o(a.workshopCloseDay,`gone`),priest:o(O(t,10,13),k(t,.45)?`dead`:`ok`),lando:o(a.gateCloseDay+O(t,2,3),k(t,.4)?`gone`:`ok`),bernardo:o(i+O(t,3,5),`gone`)}},z(t,`pippoAlive`,+!!k(t,.7)),De(t,!0),Fe(t),t}function Ee(e,t){return t<e.onset?0:1/(1+Math.exp(-e.rate*(t-e.mid)))}function De(e,t=!1){let n=e.sc.town,r=n.phase;n.prev=Ee(n,e.day),n.phase=e.day<n.onset?0:n.prev<.2?1:n.prev<.7?2:3;let i=e.day===n.onset-1?1.25:1;if(n.price=Math.max(2,Math.round(2*(1+3.2*n.prev)*i*D(e,.9,1.15))),e.day>=n.marketCloseDay&&n.marketOpen&&(n.marketOpen=0,t||e.report.push(`町の評議会の命で、市場が閉ざされた。`)),n.stock=n.marketOpen?Math.max(0,Math.round(13*(1-n.prev*1.15)+D(e,-1,1))):0,t)return;n.phase>r&&e.report.push([``,`町に最初の病人が出たという。`,`弔いの鐘が日に何度も鳴るようになった。`,`通りから人影が消えた。荷車だけが行き来している。`][n.phase]),e.day===n.gateCloseDay&&e.report.push(`町の門が閉ざされたらしい。出入りには許しが要る。`);let a=e.sc.npcs;e.day===a.teresa.day&&a.teresa.st===`ok`&&(a.teresa.st=`sick`),e.day===a.teresa.day+3&&a.teresa.st===`sick`&&(k(e,.22+.2*Math.min(2,R(e,`teresaHelp`)))?(a.teresa.st=`ok`,z(e,`teresaRecovered`,e.day),e.report.push(`隣のテレーザが、戸口に姿を見せた。熱が引いたらしい。`)):(a.teresa.st=`dead`,e.report.push(`隣のテレーザが亡くなった。`))),e.day===a.pietro.day&&z(e,`agneseSick`,e.day),e.day===a.pietro.day+3&&(z(e,`agneseDead`,e.day),a.pietro.fate===`dead`&&(a.pietro.st=`sick`),e.report.push(`ピエトロの妻アニェーゼが亡くなったと聞いた。`)),e.day===a.pietro.day+5&&a.pietro.st===`sick`&&(a.pietro.st=`dead`,e.report.push(`石工のピエトロも、妻を追うように逝った。`)),e.day===a.gina.day&&a.gina.st===`ok`&&(a.gina.st=`gone`),e.day===a.bernardo.day&&(a.bernardo.st=`gone`),e.day===a.guido.day&&a.guido.st===`ok`&&(a.guido.st=`gone`),e.day===a.priest.day&&a.priest.fate===`dead`&&(a.priest.st=`dead`,e.report.push(`ドン・アンセルモ司祭が亡くなった。病人を見舞い続けた末のことだという。`)),e.day===a.lando.day&&a.lando.fate===`gone`&&(a.lando.st=`gone`),e.day===n.marketCloseDay+1&&a.beppe.fate===`dead`&&(a.beppe.st=`dead`)}function Oe(e,t,n,r,i){let a=e.people[t];if(!(!a.alive||a.immune||a.illness||n<=0)&&(a.risk+=n,a.sources[i]=(a.sources[i]??0)+n,r===`droplet`&&(a.sources.__d=(a.sources.__d??0)+n),n>=.06&&(e.dangers.push({day:e.day,text:`${i}（${a.name}）`,amount:n}),e.dangers.length>40&&(e.dangers.sort((e,t)=>t.amount-e.amount),e.dangers.length=20)),a.risk>=a.threshold)){let n=(a.sources.__d??0)/a.risk>.4,r=Object.entries(a.sources).filter(([e])=>e!==`__d`).sort((e,t)=>t[1]-e[1])[0][0],i=n||k(e,.06)?`pneumonic`:`bubonic`;a.illness={kind:i,days:0,incubation:i===`pneumonic`?O(e,1,2):O(e,2,4),sickDays:0,severity:ve(D(e,.1,1)+(t===`marco`?.05:0)+(a.health<55?.1:0),0,1),symptomatic:!1,cause:r,causeDay:e.day}}}var ke=(e,t,n,r)=>{Oe(e,`lucia`,t,n,r),Oe(e,`marco`,t,n,r)};function Ae(e,t,n){if(t.alive){t.alive=!1,t.health=0,t.deathDay=e.day,t.deathCause=n;for(let n of be(e))U(n,`morale`,t.id===`marco`?-34:-26);H(e,`${t.name}が${n}で亡くなった。`,!0)}}function je(e,t){let n=be(e),r=(e,t)=>U(e,`satiety`,34*t),i=n.length+e.sc.home.guest;if(e.sc.home.cat&&e.day%2==0&&e.food>i&&--e.food,e.food>=i)n.forEach(e=>r(e,1)),e.food-=i;else{let i=e.food;e.food=0,i=Math.max(0,i-Math.min(i,e.sc.home.guest*.7));let a=t===`child`?n.filter(e=>e.id===`marco`):t===`self`?n.filter(e=>e.id===`player`):[],o=t===`skipself`?`player`:``;for(let e of a){let t=Math.min(1,i);r(e,t),i-=t}let s=n.filter(e=>!a.includes(e)&&e.id!==o);if(s.length){let e=Math.min(1,i/s.length);s.forEach(t=>r(t,e))}B(e,`hungryNights`)}n.forEach(e=>U(e,`satiety`,-30))}function Me(e,t,n){let r=t.illness;if(!r||!t.alive)return;r.days++;let i=t.id===`player`;if(!r.symptomatic){r.days>=r.incubation&&(r.symptomatic=!0,n.push(r.kind===`pneumonic`?i?`夜明け前、激しい咳で目が覚めた。布に血が混じっている。`:`${t.name}が激しく咳き込み、血の混じった痰を吐いた。高い熱がある。`:i?`体が燃えるように熱い。脚の付け根に、卵ほどの腫れ物ができている。`:`${t.name}が高い熱を出した。${t.id===`marco`?`首`:`脚の付け根`}に、硬い腫れ物ができている。`),H(e,`${t.name}が発症した。`,!0),i||e.queue.push(`sick_`+t.id));return}r.sickDays++;let a=t.cared,o=e.people.lucia,s=e.people.marco,c=e.people.player;t.id!==`lucia`&&L(o)&&(a=Math.max(a,i?6:4)),i&&!L(o)&&L(s)&&(a=Math.max(a,1)),t.id===`lucia`&&L(s)&&(a=Math.max(a,1)),t.id!==`player`&&!c.alive&&!L(o)&&(a=Math.max(a,0)),a+=(t.satiety>=45?3:0)+ +(e.supplies>0);let l=r.kind===`pneumonic`?30+12*r.severity-a*.4:13+18*r.severity-a;t.health-=Math.max(2,l),t.health<=0?(Ae(e,t,r.kind===`pneumonic`?`肺を侵す疫病`:`疫病`),n.push(i?`あなたは、夜明けを見ることなく息を引き取った。`:`${t.name}が、息を引き取った。`),!i&&c.alive&&e.queue.push(`death_`+t.id)):r.sickDays>=(r.kind===`pneumonic`?4:5)?(t.illness=null,t.immune=!0,n.push(i?`熱が引いた。腫れ物が破れ、体が軽くなっていく。あなたは生き延びた。`:`${t.name}の熱が引いた。峠を越えたようだ。`),H(e,`${t.name}が病から回復した。`,!0),!i&&c.alive&&e.queue.push(`recover_`+t.id)):t.health<30?n.push(i?`意識が遠のく。体はもう、ほとんど動かない。`:`${t.name}の息が浅い。呼びかけても、うっすら目を開けるだけだ。`):n.push(i?`熱は続いている。`:`${t.name}の熱は続いている。`)}function Ne(e,t={}){let n=[],r=e.sc.town,i=e.sc.home,a=r.prev*(t.prevFactor??1),o=be(e),s=e.people.player;for(let i of o)i.satiety<15?(U(i,`health`,i.satiety<=0?-13:-8),U(i,`morale`,-7)):i.satiety<35?(U(i,`health`,-4),U(i,`morale`,-4)):i.satiety>=50&&!I(i)&&U(i,`health`,3),i.morale<20&&U(i,`health`,-2),U(i,`morale`,-r.phase*(t.away?.5:1)),o.some(e=>e!==i&&I(e))&&U(i,`morale`,-3),i.health<=0&&i.alive&&(Ae(e,i,`飢えと衰弱`),n.push(i.id===`player`?`あなたは衰弱し、もう起き上がれなかった。`:`${i.name}は衰弱し、朝になっても目を覚まさなかった。`),i.id!==`player`&&s.alive&&e.queue.push(`death_`+i.id));if(o.some(e=>e.satiety<35)&&n.push(`空腹で、なかなか寝つけなかった。`),s.alive){e.fatigue=e.stamina<15?ve(e.fatigue+12):ve(e.fatigue-8);let t=58+R(e,`restBonus`)-e.fatigue*.3;s.satiety<35&&(t*=.7),s.morale<20&&(t*=.85),Ce(e,t),e.fatigue>=50&&(U(s,`health`,-3),n.push(`疲れが抜けない。体の芯が重い。`)),e.flags.restBonus=0}if(!t.away&&L(e.people.lucia)&&r.phase<=1&&k(e,.4)&&(e.money+=2,n.push(`ルチアが糸紡ぎの賃仕事で2ソルド稼いだ。`)),e.day%2==0&&!t.away&&(e.supplies>0?e.supplies--:(o.forEach(e=>{U(e,`health`,-2),U(e,`morale`,-3)}),n.push(`薪もろうそくも尽きた。冷えた暗い夜を過ごした。`))),!t.away){if(e.food>12&&B(e,`hoard`),i.infest=ve(i.infest+a*11+Math.max(0,e.food-12)*.7-(i.cat?5:0)+(o.some(e=>I(e)&&e.illness.kind===`bubonic`)?4:0)),i.infest>45&&e.food>2&&k(e,.35)){let t=i.infest>75?2:1;e.food-=t,n.push(`食料の袋がネズミにかじられていた（食料−${t}）。`),z(e,`sawRats`,e.day)}else i.infest>55&&k(e,.45)&&(n.push(`寝床でノミに食われ、あちこちが痒い。`),z(e,`sawRats`,e.day))}let c=o.filter(e=>I(e)&&e.illness.kind===`bubonic`),l=o.filter(e=>I(e)&&e.illness.kind===`pneumonic`),u=R(e,`isolate`)?.4:1;for(let n of o)if(Oe(e,n.id,a*(.04+.2*i.infest/100)*D(e,.6,1.4),`flea`,t.away?`避難先に及んだ疫病`:`家のネズミとノミ`),c.some(e=>e!==n)&&Oe(e,n.id,.035*Math.max(.4,i.infest/50),`flea`,`病人の寝具のノミ・シラミ`),l.some(e=>e!==n)){let t=n.id===`player`?R(e,`nursedDay`)===e.day:n.id===`lucia`;Oe(e,n.id,(.2+(t?.25:0))*u,`droplet`,`咳をする家族のそば`)}for(let t of o)Me(e,t,n);for(let t of be(e))t.cared=0,!t.talked&&t.id!==`player`&&U(t,`bond`,-1),t.talked=!1;e.day++,e.report=n}var Pe=[`wood`,`wood`,`coins`,`herbs`,`basket`];function Fe(e){let t=O(e,1,3)-+(e.sc.town.phase>=3);e.spots=[];let n=[];for(let r=0;r<Math.max(1,t);r++){let t=O(e,0,14);for(;n.includes(t);)t=(t+1)%15;n.push(t);let i=e.sc.town.phase>=2&&k(e,.35)?`bundle`:A(e,Pe);e.spots.push({id:`sp${e.day}_${r}`,kind:i,at:t,taken:!1})}}function Ie(e,t){let n=e.people.player;e.maxTime=I(n)?3:6,e.time=e.maxTime,e.zonesToday=[],De(e),Fe(e),e.queue.push(`morning`),t(e)}function Le(e,t={}){for(;e.day<=14&&be(e).length>0;){let n=e.sc.town;if(!t.away&&L(e.people.lucia)&&n.marketOpen&&n.stock>0&&e.food<xe(e)*2&&e.money>=n.price){let t=Math.min(3,n.stock,Math.floor(e.money/n.price));e.food+=t,e.money-=t*n.price}e.food+=t.foodPerDay??0,je(e,`child`),Ne(e,t),e.queue=[],De(e,!0)}}function Re(e){let t=e.day,n=e.journal.length;e.day=14;for(let t=0;t<10&&be(e).some(e=>e.illness);t++){let t=[];e.food>=1&&je(e,`child`);let n=e.people.lucia;for(let r of be(e))I(r)&&r.id!==`lucia`&&!L(n)&&e.people.player.alive&&L(e.people.player)&&(r.cared=6),Me(e,r,t),r.cared=0}for(let t of e.journal.slice(n))t.text=`（その後）`+t.text;for(let t of Object.values(e.people))!t.alive&&t.deathDay===14&&e.journal.slice(n).some(e=>e.text.includes(t.name))&&(t.deathCause=(t.deathCause??``)+`（14日目のあと）`);e.day=t,e.queue=[]}function ze(e,t){if(e.ended)return;let n=e.people.player.alive,r=ye(e).filter(e=>e.alive).length,i=n?t===`fledAlone`?`C`:r===2?`A`:r===1?`B`:`C`:r>0?`D`:`E`,a={A:t===`fled`?`丘の上の朝`:`三人の朝`,B:`欠けた食卓`,C:t===`fledAlone`?`背を向けた門`:`ひとりの朝`,D:t===`fledAlone`?`届かなかった背中`:`託したもの`,E:`静かな家`};e.queue=[],e.ended={code:i,title:a[i],how:t,day:Math.min(e.day,14),story:[]}}function Be(e){if(e.ended)return!0;if(!e.people.player.alive){let t=e.day;return Le(e),Re(e),ze(e,`died`),e.ended.day=Math.min(t,14),!0}return e.day>14&&(Re(e),ze(e,`stayed`),!0)}function Ve(e,t,n){let r=e.sc.town,i=[],a=e.day;if(t===`alone`){H(e,`家族を残し、ひとりで町を出た（${e.day}日目）。`,!0),i.push(`あなたは振り返らなかった。振り返れば、戻ってしまうと分かっていたから。`);let t=Math.min(e.food,3),n=e.food-t,r=Math.ceil(e.money/2),o=()=>JSON.parse(JSON.stringify(e)),s=e.journal.length,c=o();c.people.player.alive=!1,c.food=n,c.money=e.money-r;for(let e of ye(c))U(e,`morale`,-30);Le(c),Re(c);let l=o();return l.people.lucia.alive=!1,l.people.marco.alive=!1,l.food=t,l.money=r,l.sc.home.guest=0,l.sc.home.infest=25,l.sc.home.cat=0,Le(l,{prevFactor:.3,away:!0,foodPerDay:1}),Re(l),e.people.lucia=c.people.lucia,e.people.marco=c.people.marco,e.people.player=l.people.player,e.journal=c.journal.concat(l.journal.slice(s)),e.rng=l.rng,e.day=15,e.food=l.food,e.money=l.money,i.push(l.people.player.alive?`街道沿いの納屋を渡り歩き、あなたは生き延びた。`:`逃げた先でも、病はあなたを見逃さなかった。`),z(e,`fledDay`,a),ze(e,`fledAlone`),e.ended.day=14,i}H(e,`家族を連れて町を出た（${e.day}日目・${n}）。`,!0),z(e,`fledDay`,a);let o=R(e,`hasCart`);i.push(o?`荷車に荷と家族を乗せ、あなたは町を後にした。`:`背に荷を負い、マルコの手を引いて、あなたは町を後にした。`);let s=be(e).filter(I);if(k(e,.15+.12*r.phase)){let t=Math.ceil(e.money*.6);e.money-=t,i.push(t>0?`峠で、棍棒を持った男たちに道をふさがれた。命と引き換えに${t}ソルドを渡した。`:`峠で男たちに囲まれたが、奪う物がないと知ると、唾を吐いて去っていった。`)}else i.push(`街道には、同じように町を捨てた家族の姿がいくつもあった。誰も口をきかなかった。`);for(let t=0;t<2&&be(e).length;t++){for(let t of s)t.alive&&(t.health-=o?5:15,t.health<=0&&(Ae(e,t,`避難の道中の衰弱`),i.push(`${t.name}は、道の途中で動かなくなった。`)));je(e,`child`),Ne(e,{prevFactor:.7,away:!0}),e.queue=[],De(e,!0)}if(!e.people.player.alive)return Le(e,{prevFactor:.4,away:!0}),Re(e),ze(e,`fled`),i;let c=be(e).some(I);if(e.sc.home.infest=28,e.sc.home.cat=0,c&&k(e,.7))i.push(`村の入口で、見張りが杖を横にした。「病人を連れた者は入れぬ。引き返せ」`),i.push(`ルチアの兄の農場は、目の前の丘の向こうだった。あなたたちは、打ち捨てられた炭焼き小屋で夜露をしのいだ。`),z(e,`refusedEntry`),Le(e,{prevFactor:.4,away:!0,foodPerDay:1});else if(r.farmStruck)i.push(`農場に着いたとき、戸は開いたままで、かまどは冷えていた。ルチアの兄トンマーゾは、納屋の藁の上で冷たくなっていた。`),i.push(`病は、町よりも先にここへ来ていたのだ。`),z(e,`farmDead`),e.sc.home.infest=70,Le(e,{prevFactor:1,away:!0,foodPerDay:1});else{let t=e.money>=10;t&&(e.money-=10),i.push(`ルチアの兄トンマーゾは、黙って門を開けた。`+(t?`あなたが差し出した銀貨を見て、義姉も頷いた。`:`義姉は、増えた口の数を数えるような目をしていた。`)),i.push(`畑を手伝い、納屋で眠る日々が始まった。丘の向こうで、町の鐘がかすかに鳴っていた。`),z(e,`farmOk`),Le(e,{prevFactor:.45,away:!0,foodPerDay:t?3:2})}return Re(e),ze(e,`fled`),i}var W=`ルチア｜`,He=`マルコ｜`,Ue=[`「今日は市が立つ日よ。豆と粉を多めにお願い。マルコがよく食べるの」`,`「昨夜、マルコが寝言であなたを呼んでいたわ。もっと遊んであげて」`,`「井戸端で聞いたの。ピサでは、通りが一つ丸ごと死に絶えたって……まさかね」`,`「ねえ、物の値が上がる前に、蓄えを増やせないかしら」`,`「このところ、鐘の音が増えた気がするの。気のせいだといいけれど」`,`「悪い空気が病を運ぶって、皆が言うの。窓にローズマリーを吊るしたわ」`,`「兄さんの農場なら、町より空気がいいはず。……考えておいて」`,`「鐘が、もう数えきれない。誰のための鐘か、聞くのも怖い」`,`「あなたが戸を開けて帰ってくるたびに、やっと息がつけるの」`,`「マルコには、まだ笑っていてほしい。あの子の前では泣かないと決めたの」`,`「私たち、何か悪いことをしたのかしら。司祭様は罪の報いだと仰るけれど」`,`「もし私に何かあっても、マルコだけは。……約束して」`,`「不思議ね。こんな時でも、パンの焼ける匂いは幸せだと思うの」`,`「今日を越えても、明日がある。明日も、明後日も、一緒にいましょう」`],We=[`「父さん！市場に火を吹く芸人が来てるって、ピッポが言ってた！」`,`「ぼく、大きくなったら父さんと同じ工房で働くんだ」`,`「父さん、ピサってどこ？海って、ほんとにしょっぱいの？」`,`「ツバメが巣を作ってるの見つけたよ。うちの軒下！」`,`「市場のおじさん、今日は呼び込みしてなかった。なんで？」`,`「母さんが吊るした草、いい匂い。病気は匂いがきらいなの？」`,`「ねえ父さん、病気ってうつるの？ピッポの母さん、ずっと咳してる」`,`「鐘、今日は何回鳴るか数えてたんだ。途中で分かんなくなった」`,`「外、静かだね。みんな、どこ行っちゃったの？」`,`「父さんの手、あったかい。ずっとつないでてもいい？」`,`「ぼく、もうお腹すいたって言わないよ。だから母さん、泣かないで」`,`「ツバメのヒナ、生まれたよ。ちゃんと口あけてた」`,`「病気がなくなったら、海を見に行こうよ。みんなで」`,`「父さん、明日もいる？……よかった」`];function Ge(e){let t=P(e),n=F(e),r=e.sc.town;return I(t)?t.health<35?`「……マルコを、お願い……」`:`「ごめんなさい、こんな時に……。あなたまで、うつらないで」`:!n.alive&&n.deathDay>=e.day-2?`「……あの子の寝床、まだ片づけられないの」`:n.alive?I(n)?`「マルコの額、火みたいに熱いの。あなた、そばにいてやって」`:I(N(e))?`「寝ていて。水は私が汲んでくる。あなたは、治ることだけ考えて」`:R(e,`becDay`)>0&&R(e,`becDay`)===e.day-1?`「昨日のこと、聞いたわ。亡骸を運ぶ仕事だなんて……。お金のためなのは分かってる。でも、怖いの」`:R(e,`lootDay`)>0&&R(e,`lootDay`)===e.day-1?`「昨日の袋、どこから？……聞かないでおくわ。でも、神様は見ておられるのよ」`:t.satiety<35?`「私は平気。……少し、めまいがするだけ」`:e.food<xe(e)?`「今夜の分が、もう足りないの。どうしましょう」`:R(e,`sawRats`)>0&&R(e,`sawRats`)>=e.day-1&&e.sc.home.infest>40?`「夜中に、袋をかじる音がするの。家を掃き清めて、寝具を灰汁で洗いたいわ」`:t.morale<25?`「……ごめんなさい。今日は、何も考えたくないの」`:t.bond<30?`「あなたは、いつも外ばかり。私たちの顔、ちゃんと見てる？」`:R(e,`fleePlan`)===1?`「荷はまとめてあるわ。いつでも出られる。門が開いているうちに、決めて」`:e.sc.home.cat&&k(e,.4)?`「あの猫、台所でネズミを捕ったのよ。マルコったら大はしゃぎ」`:r.phase===0&&e.day>1&&e.day===r.onset-1?`「隣町で病人が出たって。行商の人が、青い顔で話していたわ」`:Ue[Math.min(13,e.day-1)]:`「軒下のツバメ、今年も巣立つのね。あの子が見つけた巣よ」`}function Ke(e){let t=P(e),n=F(e);return I(n)?n.health<35?`「……父さん……いる……？」`:`「あつい……。父さん、お水……。ツバメ、見ててね」`:!t.alive&&t.deathDay>=e.day-2?`「母さん、いつ起きるの？……ねえ、父さん」`:t.alive?I(t)?`「母さんにお水持ってったよ。ぼく、ちゃんとこぼさなかった」`:I(N(e))?`「父さん、死なないで。ぼく、いい子にするから」`:n.satiety<35?`「……お腹、すいてないよ。ほんとだよ」`:R(e,`cakeDay`)>0&&R(e,`cakeDay`)===e.day-1?`「昨日のお菓子、夢にも出てきた！はちみつの味、まだ覚えてる」`:e.sc.home.guest&&k(e,.5)?`「ピッポ、夜に泣いてた。ぼく、手をつないであげたんだ」`:e.sc.home.cat&&k(e,.5)?`「ネーロがね、ぼくのひざで寝たんだよ。あったかかった！」`:V(e,`teresa`).st===`dead`&&R(e,`marcoAskedTeresa`)===0?(z(e,`marcoAskedTeresa`),`「テレーザおばあちゃん、もうイチジクくれないの？……天国に行ったの？」`):n.morale<25?`「……外で遊びたいな。前みたいに」`:n.bond<30?`「父さん、今日もお仕事？……ふうん」`:We[Math.min(13,e.day-1)]:`「ぼく、母さんみたいにスープ作れるようになるよ。父さんの分も」`}var qe=[[`朝。軒下でツバメが鳴いている。かまどでルチアが粥を温めている。`,`朝。通りから、荷車の音と呼び売りの声が聞こえる。`],[`朝。いつもより通りが静かだ。`,`朝。遠くで弔いの鐘が鳴っている。`],[`朝。香草を焚く煙の匂いが、町じゅうに漂っている。`,`朝。鐘が鳴りやまない。`],[`朝。通りには物音ひとつない。`,`朝。荷車の軋む音だけが、石畳に響いている。`]];function Je(e){let t=P(e),n=F(e);if(e.day===1){let t=R(e,`startMarcoCough`)?[W+`「マルコの咳、まだ残っているの。ただの風邪だと思うけれど」`]:R(e,`startLuciaTired`)?[W+`「このところ体が重くて。季節の変わり目のせいね」`]:R(e,`startSavings`)?[W+`「先月の賃金がまとまって入ったのは助かったわ。そのぶん、棚は寂しいけれど」`]:R(e,`startPantry`)?[W+`「兄さんが豆をたくさん届けてくれたの。当分は困らないわね」`]:[];return[`1348年、春。トスカーナの丘の町カステルヴェント。`,`あなたは毛織物の工房で働く職人だ。妻のルチア、八つになる息子のマルコと、西の通りの小さな家で暮らしている。`,W+Ue[0],...t,He+We[0],W+`「工房にも顔を出すんでしょう？日が暮れる前に帰ってきてね」`,`一日に出来ることは限られている。働くか、買い物か、家族と過ごすか。日が暮れたら、寝床で一日を終えよう。`]}let r=[A(e,qe[e.sc.town.phase])];if(!t.alive&&!n.alive)return r.push(`家の中は静かだ。食卓には、三つの椀が伏せたままになっている。`),r;for(let t of ye(e)){let e=t.illness;t.alive&&e&&!e.symptomatic&&e.days>=e.incubation-1&&r.push(`${t.name}は、少しだるそうにしている。`)}t.alive&&r.push(W+Ge(e)),n.alive&&r.push(He+Ke(e));let i=N(e).illness;return i&&!i.symptomatic&&i.days>=i.incubation-1&&r.push(`体が重い。昨夜はよく眠れなかった。`),I(N(e))&&r.push(`熱で足元が定まらない。今日は、ほとんど何も出来そうにない。`),r}function Ye(e){let t=e.sc.town,n=Math.floor(e.food/Math.max(1,xe(e)));return Se(e)||I(N(e))?`「水を飲ませて、体を冷やして、そばにいる。出来るのはそれだけ。でも、独りにしないことが一番の薬だと思うの」`:e.food<xe(e)*2?t.marketOpen?`「食べる物が、あと${n}日ぶんしかないわ。市場が開いているうちに、お願い」`:`「市場はもう駄目ね。司祭様の施しか、ベッペさんの家の戸を叩いてみるか……」`:e.sc.home.infest>45&&R(e,`sawRats`)?`「ネズミとノミがひどいの。掃除をして、寝具を灰汁で洗いましょう。悪い空気も払えるわ。食料棚のところで出来るから」`:e.food>12?`「こんなに溜め込むと、ネズミが寄るのよ。……でも、無いよりはいいのかしら」`:e.supplies===0?`「薪もろうそくも切れたわ。ジーナさんの店が開いているうちに」`:t.phase>=2&&R(e,`fleePlan`)===0&&e.day<t.gateCloseDay?`「門が閉まる前に、町を出ることも考えて。兄さんの農場まで歩いて二日。その分の食べ物が要るわ」`:t.phase>=1&&e.money<10?`「お金が心細いわね。工房の仕事があるうちに、稼いでおいて」`:t.phase===0?`「今のうちに、豆と粉を少し多めに。安い時に買うのが、やりくりの基本よ」`:`「働いて、買って、帰ってきて。それだけでいいの。無理はしないで」`}function Xe(e){let t=[],n=e.remedies>0;n&&e.remedies--,z(e,`nursedDay`,e.day),B(e,`nursed`);for(let r of ye(e).filter(I)){r.cared=Math.max(r.cared,7+ +!!n),U(r,`morale`,8),U(r,`bond`,6);let i=r.illness.kind===`pneumonic`;Oe(e,`player`,i?.22*(R(e,`isolate`)?.5:1):.02,i?`droplet`:`flea`,i?`咳をする家族の看病`:`家族の看病`),t.push(r.id===`marco`?`濡らした布でマルコの額を冷やし、匙で水を含ませる。小さな手が、あなたの指を握って離さない。`:`ルチアの汗を拭き、寝具を替える。「……ありがとう」かすれた声で、彼女は笑おうとした。`)}return n&&t.push(`柳の皮を煎じて飲ませた。少し、息が楽になったように見える。`),t}var Ze=[{label:`みんなで等しく分ける`,policy:`share`,hint:`全員が少しずつ空腹に`},{label:`マルコに先に食べさせる`,policy:`child`,hint:`子を優先`},{label:`自分は食べず、二人に回す`,policy:`skipself`,hint:`あなたは空腹に`},{label:`働き手の自分が先に食べる`,policy:`self`,hint:`家族は空腹に`}];function Qe(e,t,n){let r=P(e),i=F(e),a=[];return!r.alive&&!i.alive?[`ひとりで、冷えたパンをかじる。食卓は、こんなに広かっただろうか。`]:(n?(a.push(`鍋の底が見えている。今夜の分は、三人には足りない。`),t===`skipself`&&(a.push(`あなたは「外で済ませてきた」と嘘をついた。`),L(i)&&a.push(He+`「……父さん、ほんとに？お腹、鳴ってるよ」`),U(r,`bond`,3),U(i,`bond`,3)),t===`child`&&(a.push(`マルコの椀にだけ、いつもと同じ量をよそった。`),L(r)&&a.push(W+`「それでいいの。この子が食べていれば、私は平気」`)),t===`self`&&(a.push(`明日も働くためだ、と自分に言い聞かせて、あなたは先に椀を取った。`),U(r,`bond`,-5),U(i,`bond`,-3)),t===`share`&&a.push(`薄いスープを、三つの椀に同じだけ分けた。誰も、足りないとは言わなかった。`)):(a.push(A(e,[`豆のスープと黒パン。三人で囲む食卓に、ろうそくの灯が揺れる。`,`夕食。かまどの火が、壁に三人の影を映している。`,`食卓につく。スープの湯気の向こうに、家族の顔がある。`])),L(i)&&k(e,.6)?a.push(He+A(e,[`「父さん、今日なに見た？ぼくにも教えて！」`,`「母さんのスープ、世界でいちばんおいしい」`,`「ぼくのパン、半分あげる。父さん、いっぱい働いたから」`])):L(r)&&a.push(W+A(e,[`「今日も、三人そろって食べられたわね」`,`「お疲れさま。温かいうちに食べて」`]))),a)}var $e=[{id:`morning`,text:Je,choices:[{label:`一日を始める`,tag:`go`}]},{id:`lucia`,speaker:`ルチア`,text:e=>W+Ge(e),choices:e=>{let t=P(e);return I(t)?[{label:`看病する`,hint:`汗を拭き、水を飲ませ、そばにいる`,cost:{time:2,stamina:10},tag:`nurse`,run:e=>Xe(e)},{label:`手を握って、少し話す`,run:e=>(t.talked||(t.talked=!0,U(t,`morale`,5),U(t,`bond`,3)),[W+`「マルコが生まれた朝のこと、覚えてる？……あなた、泣いてたのよ」`])},{label:`離れる`,tag:`leave`}]:[{label:`話す`,tag:`talk`,run:e=>(t.talked||(t.talked=!0,U(t,`morale`,4),U(t,`bond`,3),U(N(e),`morale`,2)),W+Ye(e))},{label:`家の仕事を手伝う`,hint:`水汲み・掃き掃除・繕い物`,cost:{time:1,stamina:5},tag:`help`,run:e=>(U(t,`morale`,8),U(t,`bond`,6),e.sc.home.infest=Math.max(0,e.sc.home.infest-8),[`井戸から水を運び、床を掃き、ほつれた上着を並んで繕った。`,W+`「ふふ。あなた、針は相変わらず下手ね」`])},{label:`看病する`,hint:`汗を拭き、水を飲ませ、そばにいる`,show:e=>I(F(e)),cost:{time:2,stamina:10},tag:`nurse`,run:e=>Xe(e)},{label:`町を出る相談をする`,show:e=>e.sc.town.phase>=1&&R(e,`fleePlan`)!==1,tag:`flee`,run:e=>({next:`flee_talk`})},{label:`離れる`,tag:`leave`}]}},{id:`flee_talk`,speaker:`ルチア`,category:`relation`,text:e=>P(e).bond>=40?[W+`「……私も、同じことを考えていたの。兄さんの農場まで、歩いて二日よ」`,W+`「道中の食べ物が要るわ。それと、病人は村に入れてもらえないって聞いた。出るなら、三人とも元気なうちに」`]:[W+`「今さら？あなたはいつも、ひとりで決めて、ひとりで出て行くじゃない」`,W+`「……でも、マルコのためなら。考えさせて」`],choices:[{label:`「荷をまとめておいてくれ」`,key:`町を出る準備を始めた`,ok:e=>P(e).bond>=25||`ルチアは首を縦に振らない`,run:e=>(z(e,`fleePlan`,1),U(P(e),`morale`,4),[W+`「分かった。いつでも出られるようにしておく。門で、門番のランドさんに話して」`,`（町の門で、避難を選べるようになった）`])},{label:`「いや、まだ早い。様子を見よう」`,run:e=>(U(P(e),`morale`,-3),W+`「……そうね。あなたがそう言うなら」`)}]},{id:`flee_proposal`,title:`ルチアの申し出`,category:`major`,speaker:`ルチア`,auto:{on:`zone:homeEve`,pri:3,when:e=>L(P(e))&&e.sc.town.phase>=2&&R(e,`fleePlan`)===0&&e.day<e.sc.town.gateCloseDay+2},text:[`家に戻ると、ルチアが旅の袋を膝に置いて待っていた。`,W+`「町を出ましょう。兄さんの農場へ。金持ちはもう皆、別荘へ逃げたわ」`,W+`「ここにいたら、三人とも死ぬ。……私は、あの子を埋めたくない」`],choices:[{label:`「分かった。支度をしよう」`,hint:`門で避難を選べるようになる`,key:`ルチアの申し出を受け、町を出る準備を始めた`,tag:`yes`,run:e=>(z(e,`fleePlan`,1),U(P(e),`bond`,6),U(P(e),`morale`,8),[W+`「ありがとう。歩いて二日。三人分の食べ物を、二日ぶんは持っていきたいわ」`])},{label:`「逃げた先にも病はある。ここで耐えよう」`,key:`ルチアの申し出を断り、町に留まると決めた`,tag:`no`,run:e=>(z(e,`fleePlan`,2),U(P(e),`bond`,-8),U(P(e),`morale`,-8),[W+`「……あなたがそう決めたのなら。でも、覚えておいて。私は、出たいと言ったのよ」`])},{label:`「もう少し考えさせてくれ」`,tag:`later`,run:e=>(U(P(e),`morale`,-3),delete e.seen.flee_proposal,z(e,`fleeAskDay`,e.day),W+`「門が閉まったら、考えることも出来なくなるわ」`)}]},{id:`marco`,speaker:`マルコ`,text:e=>He+Ke(e),choices:e=>{let t=F(e);return I(t)?[{label:`看病する`,hint:`額を冷やし、水を飲ませ、そばにいる`,cost:{time:2,stamina:10},tag:`nurse`,run:e=>Xe(e)},{label:`海の話をしてやる`,run:e=>(t.talked||(t.talked=!0,U(t,`morale`,6),U(t,`bond`,3)),[`「海はな、空と同じ色で、どこまでも続いてるんだ」`,He+`「……治ったら……見に行ける？」`])},{label:`離れる`,tag:`leave`}]:[{label:`話す`,tag:`talk`,run:e=>(t.talked||(t.talked=!0,U(t,`morale`,5),U(t,`bond`,3),U(N(e),`morale`,3)),He+A(e,[`「ねえ父さん、ぼくの背、のびた？柱の傷より上になったよ」`,`「父さんの仕事の話して！羊の毛って、どうやって布になるの？」`,`「ぼくが父さんを守ってあげる。この棒でね、えい！」`,`「母さんには内緒だよ。ぼく、ほんとはちょっとだけ怖いんだ」`]))},{label:`一緒に遊ぶ`,hint:`木の剣でちゃんばら、肩車`,cost:{time:1},tag:`play`,run:e=>(U(t,`morale`,14),U(t,`bond`,8),U(N(e),`morale`,6),U(P(e),`morale`,3),B(e,`played`),[`木切れの剣で打ち合い、肩車で家の中を三周した。マルコは息が切れるまで笑った。`,...L(P(e))?[W+`「ほら、二人とも。埃が立つでしょう」　そう言う彼女も、笑っていた。`]:[]])},{label:`看病する`,hint:`ルチアのそばにいる`,show:e=>I(P(e)),cost:{time:2,stamina:10},tag:`nurse`,run:e=>Xe(e)},{label:`離れる`,tag:`leave`}]}},{id:`pippo`,speaker:`ピッポ`,text:()=>`ピッポ｜「……おじさん。ぼく、ここにいていいの？」`,choices:[{label:`「ああ。うちの子だ」`,run:e=>(U(F(e),`morale`,2),`ピッポは黙って頷き、マルコの隣に座った。`)},{label:`離れる`,tag:`leave`}]},{id:`bed`,title:`寝床`,text:e=>e.time>0?`まだ日は高い。今日はあと${e.time}刻ほど動ける。`:`日が暮れた。長い一日だった。`,choices:[{label:`夕食にして、一日を終える`,tag:`sleep`,run:e=>(e.time>0&&z(e,`restBonus`,Math.min(20,e.time*6)),{next:`supper`})},{label:`少し横になる`,hint:`体力が少し戻る`,cost:{time:2},tag:`rest`,run:e=>(Ce(e,22),e.fatigue=Math.max(0,e.fatigue-8),I(N(e))&&(N(e).cared=Math.max(N(e).cared,3)),`目を閉じると、すぐに浅い眠りが来た。`)},{label:`まだ起きている`,tag:`leave`}]},{id:`supper`,title:`夕食`,text:e=>e.food>=xe(e)?Qe(e,`full`,!1):e.food<=0?[`食料棚は空だ。今夜、口に入れる物は何もない。`]:[`鍋の底が見えている。今夜の分は、全員には足りない。`,`誰の椀に、どれだけよそうか。`],choices:e=>{let t=e=>t=>{let n=t.food<xe(t)&&t.food>0?Qe(t,e,!0):[];return t.food<=0&&be(t).length>1&&n.push(`水だけを飲んで、三人で身を寄せ合った。`),je(t,e),Ne(t),Be(t)||Ie(t,e=>et(e,`morning`)),n};return e.food>=xe(e)||e.food<=0||ye(e).every(e=>!e.alive)?[{label:e.food>0?`食卓を囲み、眠る`:`空腹のまま、眠る`,tag:`sleep`,run:t(`share`)}]:Ze.filter(t=>t.policy!==`child`||F(e).alive).map(e=>({label:e.label,hint:e.hint,tag:`ration:`+e.policy,run:t(e.policy)}))}},{id:`pantry`,title:`食料棚`,text:e=>{let t=Math.floor(e.food/Math.max(1,xe(e))),n=[`食料は${e.food}食ぶん。${xe(e)}人で、およそ${t}日ぶんだ。薪や灰汁などの生活用品は${e.supplies}、薬草は${e.remedies}。`],r=e.sc.home.infest;return r>70?n.push(`袋の隅に、いくつも穴が開いている。床には黒い粒のような糞。寝藁からはノミが跳ねた。`):r>45?n.push(`麦の袋に、かじられた跡がある。`):r>25?n.push(`棚の奥で、何かが走る小さな音がした。`):n.push(`棚は乾いていて、きれいに片づいている。`),n},choices:[{label:`家を掃き清め、寝具を洗う`,hint:`灰汁と薪を使う`,cost:{time:1,stamina:10,supplies:1},tag:`clean`,run:e=>(e.sc.home.infest=Math.max(0,e.sc.home.infest-32),B(e,`cleaned`),U(P(e),`morale`,3),[`床を掃き、棚の隙間に灰を詰め、寝具を灰汁の湯で洗って干した。`,...L(P(e))?[W+`「これで悪い空気も出ていくわ。さっぱりした」`]:[]])},{label:`閉じる`,tag:`leave`}]},...[`lucia`,`marco`].map(e=>({id:`sick_`+e,title:e===`lucia`?`ルチアの発症`:`マルコの発症`,category:`crisis`,text:t=>{let n=t.people[e].illness?.kind===`pneumonic`;return[...e===`marco`?[n?`マルコが体を折って咳き込んでいる。口元を押さえた小さな手に、赤いものが付いていた。`:`マルコが寝床から起きてこない。触れた額は、驚くほど熱い。首の横に、硬いしこりがある。`,He+`「父さん……さむい……」`]:[n?`ルチアが壁に手をついて咳き込んでいる。布に、血が滲んでいた。`:`ルチアがかまどの前で膝をついた。脚の付け根に、卵ほどの腫れ物が出来ている。`,W+`「……来ないで。あなたとマルコに、うつしたくない」`],`町で幾人もの命を奪っている、あの病だ。`]},choices:[{label:`そばで世話をする`,key:`${e===`lucia`?`ルチア`:`マルコ`}を、同じ部屋で看ると決めた`,tag:`stay`,run:t=>(z(t,`isolate`,0),U(t.people[e],`morale`,8),U(t.people[e],`bond`,5),`寝床のそばに腰を下ろした。（家族に話しかけて「看病する」を選ぶと、その日の世話が出来る）`)},{label:`寝床を奥に分け、近づく時は口を布で覆う`,key:`${e===`lucia`?`ルチア`:`マルコ`}の寝床を分け、距離を置いて世話すると決めた`,tag:`isolate`,run:t=>(z(t,`isolate`,1),U(t.people[e],`morale`,-6),[`奥の隅に寝藁を移し、あいだに布を垂らした。`,e===`marco`?He+`「……ぼく、ひとり？」`:W+`「それでいいの。それが、いいのよ」`,`（家族に話しかけて「看病する」を選ぶと、その日の世話が出来る）`])}]})),...[`lucia`,`marco`].map(e=>({id:`death_`+e,title:e===`lucia`?`ルチア`:`マルコ`,category:`major`,text:t=>e===`marco`?[`夜明け前、マルコの息が止まった。`,`握っていた手が、少しずつ冷えていく。軒下で、何も知らないツバメが鳴きはじめた。`,...P(t).alive?[W+`「いや……いやよ。マルコ、目を開けて。お願い……」`]:[]]:[`夜明け前、ルチアの息が止まった。`,`最後に彼女は、あなたの名ではなく、マルコの名を呼んだ。`,...F(t).alive?[He+`「母さん、まだ寝てるの？……父さん、なんで泣いてるの？」`]:[]],choices:[{label:`教会で弔ってもらう`,hint:`司祭に祈りを頼む`,cost:{money:6},show:e=>V(e,`priest`).st===`ok`,tag:`church`,run:e=>(be(e).forEach(e=>U(e,`morale`,8)),[`ドン・アンセルモは、疲れ切った顔で、それでも一人のために祈りを上げてくれた。`,`教会の墓地に、小さな十字を立てた。`])},{label:`自分の手で墓地へ運び、埋める`,cost:{stamina:25},tag:`self`,run:e=>(be(e).forEach(e=>U(e,`morale`,5)),Oe(e,`player`,.04,`flea`,`家族の埋葬`),[`亡骸を敷布で包み、抱いて歩いた。こんなに軽かっただろうか。`,`土をかけ終えたとき、日はもう高かった。`])},{label:`遺体運びの荷車に委ねる`,tag:`cart`,run:t=>(be(t).forEach(e=>U(e,`morale`,-8)),e===`marco`&&U(P(t),`bond`,-8),[`荷車の男たちは、無言で亡骸を積んだ。ほかの幾つもの包みと一緒に。`,`車輪の音が角を曲がって消えるまで、あなたは戸口に立っていた。`])}]})),...[`lucia`,`marco`].map(e=>({id:`recover_`+e,title:`峠を越えて`,category:`relation`,text:()=>e===`marco`?[`マルコが、自分で体を起こした。`,He+`「……父さん。お腹すいた」`,`それは、この世でいちばん嬉しい言葉だった。`]:[`ルチアが、寝床から起き上がっていた。`,W+`「夢の中でね、あなたがずっと手を握っていたの。……夢じゃなかったのね」`],choices:[{label:`抱きしめる`,run:t=>{be(t).forEach(e=>U(e,`morale`,18)),U(t.people[e],`bond`,10)}}]})),{id:`cake`,title:`蜂蜜の焼き菓子`,category:`daily`,auto:{on:`zone:market`,pri:1,when:e=>e.day>=2&&e.sc.town.phase===0&&L(F(e))},text:[`菓子売りの台の前で、足が止まった。蜂蜜を塗った小さな焼き菓子。`,`この前マルコが、指をくわえて見ていたやつだ。`],choices:[{label:`買って帰る`,cost:{money:2},tag:`yes`,run:e=>(z(e,`cakeDay`,e.day),z(e,`cake`),U(F(e),`morale`,10),U(F(e),`bond`,6),U(P(e),`morale`,2),[`菓子を布に包んで懐に入れた。`,`（その夜、マルコは菓子を三つに割って、いちばん大きいのをあなたにくれた）`])},{label:`また今度にする`,tag:`no`,run:()=>`2ソルドあれば、豆が一食ぶん買える。あなたは台の前を通り過ぎた。`}]},{id:`marco_play`,title:`マルコのお願い`,category:`relation`,speaker:`マルコ`,auto:{on:`morning`,pri:1,when:e=>L(F(e))&&e.sc.town.phase>=1&&e.sc.town.phase<=2&&e.day>=4},text:e=>[He+`「父さん、ピッポと城壁のところで遊んでもいい？ずっと家の中で、つまんないよ」`,...L(P(e))?[W+`「外は……。でも、閉じ込めておくのも可哀想で」`]:[],...R(e,`agneseSick`)?[`ピッポの母親は、このところ咳が止まらないと聞く。`]:[]],choices:[{label:`「行っておいで。日暮れまでに帰るんだぞ」`,key:`マルコを外へ遊びに行かせた`,tag:`yes`,run:e=>(U(F(e),`morale`,12),U(F(e),`bond`,3),Oe(e,`marco`,.03+.1*e.sc.town.prev,`flea`,`外での遊び`),R(e,`agneseSick`)&&!R(e,`agneseDead`)&&Oe(e,`marco`,.14,`droplet`,`咳をするピッポの母のそば`),He+`「やった！行ってきます！」`)},{label:`「駄目だ。家にいなさい」`,tag:`no`,run:e=>(U(F(e),`morale`,-8),U(F(e),`bond`,-4),[He+`「……父さんのけち」`,`マルコは戸口に座って、通りを眺めていた。`])},{label:`「今日は父さんと遊ぼう」`,cost:{time:1},tag:`play`,run:e=>(U(F(e),`morale`,14),U(F(e),`bond`,9),U(N(e),`morale`,5),B(e,`played`),[`家の裏で、石蹴りと影踏みをした。`,He+`「父さん、へたくそ！もう一回！」`])}]},{id:`cat`,title:`黒い猫`,category:`daily`,speaker:`マルコ`,auto:{on:`zone:homeEve`,pri:1,when:e=>e.day>=3&&L(F(e))&&!e.sc.home.cat},text:e=>[`家に戻ると、マルコが痩せた黒猫を抱いていた。`,He+`「路地でついてきたんだ。ネーロって名前にした。飼ってもいい？ぼくのご飯、半分あげるから！」`,...L(P(e))?[W+`「食べさせる口が増えるのよ。……あなたが決めて」`]:[]],choices:[{label:`「いいだろう。ちゃんと世話するんだぞ」`,hint:`時々、食料を少し食べる`,key:`黒猫のネーロを飼うことにした`,tag:`yes`,run:e=>(e.sc.home.cat=1,U(F(e),`morale`,14),U(F(e),`bond`,6),[He+`「ほんと！？父さん大好き！」`,`ネーロは台所の隅を嗅ぎまわり、やがてかまどの前で丸くなった。`])},{label:`「駄目だ。うちには余裕がない」`,tag:`no`,run:e=>(U(F(e),`morale`,-8),U(F(e),`bond`,-3),`マルコは何も言わず、猫を路地に放しに行った。戻ってきた目が赤かった。`)}]},{id:`lucia_teresa`,title:`ルチアの頼み`,category:`relation`,speaker:`ルチア`,auto:{on:`morning`,pri:2,when:e=>V(e,`teresa`).st===`sick`&&L(P(e))&&!R(e,`teresaHelp`)},text:[W+`「テレーザさんが寝込んでいるの。身寄りのない人よ。私が行って、世話をしてくるわ」`,W+`「マルコが生まれたとき、取り上げてくれたのはあの人だもの」`],choices:[{label:`「頼む。気をつけて」`,key:`ルチアが隣人テレーザの世話に行くのを認めた`,tag:`yes`,run:e=>(z(e,`teresaHelp`,R(e,`teresaHelp`)+1),U(P(e),`morale`,5),U(P(e),`bond`,3),Oe(e,`lucia`,.05,`flea`,`テレーザの看病`),W+`「水と粥を持っていくわ。すぐ戻るから」`)},{label:`「いや、俺が行く」`,tag:`self`,run:e=>(U(P(e),`bond`,2),W+`「……そう。じゃあ、お願いね」　（テレーザの家は、広場の手前、通りの南側だ）`)},{label:`「行くな。病人の家だぞ」`,key:`ルチアが隣人の世話に行くのを止めた`,tag:`no`,run:e=>(U(P(e),`morale`,-5),U(P(e),`bond`,-5),W+`「……見捨てるのね。明日は、私たちの番かもしれないのに」`)}]},{id:`ring`,title:`母の指輪`,category:`relation`,speaker:`ルチア`,auto:{on:`zone:homeEve`,pri:2,when:e=>L(P(e))&&e.money<6&&e.food<xe(e)*2},text:[W+`「これ、売ってきて。母さんの形見の指輪よ」`,W+`「指輪は食べられないもの。……いいの。マルコのためなら、母さんも許してくれる」`],choices:[{label:`受け取る`,hint:`20ソルドほどになる`,key:`ルチアの形見の指輪を売った`,tag:`yes`,run:e=>(e.money+=20,z(e,`soldRing`),U(P(e),`morale`,-6),U(P(e),`bond`,2),[`指輪は、まだ彼女の指の温みを残していた。`,`（金貸しの店で20ソルドに換えた）`])},{label:`「それだけは駄目だ。俺が何とかする」`,tag:`no`,run:e=>(U(P(e),`bond`,6),U(P(e),`morale`,3),W+`「……馬鹿ね。でも、ありがとう」`)}]},{id:`nightmare`,title:`夜中の声`,category:`daily`,auto:{on:`morning`,once:!1,cooldown:4,chance:.45,when:e=>L(F(e))&&e.sc.town.phase>=2},text:[`昨夜、マルコがうなされて飛び起きた。`,He+`「荷車が……荷車が、ぼくを乗せに来た……」`],choices:[{label:`朝まで抱いていた`,hint:`あまり眠れなかった`,tag:`yes`,run:e=>(e.stamina=Math.max(0,e.stamina-15),U(F(e),`morale`,10),U(F(e),`bond`,6),`マルコはあなたの胸に顔を埋めて、ようやく寝息を立てた。腕が痺れても、あなたは動かなかった。`)},{label:`「夢だよ。もう寝なさい」と声をかけた`,tag:`no`,run:e=>(U(F(e),`morale`,-4),`マルコは小さく頷いて、毛布を頭までかぶった。`)}]},{id:`hearth`,title:`かまどの前で`,category:`relation`,speaker:`ルチア`,auto:{on:`zone:homeEve`,pri:1,when:e=>e.day>=12&&L(P(e))},text:[`マルコが寝入ったあと、ルチアと二人、かまどの残り火を見ていた。`,W+`「ねえ。もし全部終わったら、何がしたい？」`],choices:[{label:`「三人で、海を見に行こう」`,run:e=>(U(P(e),`morale`,8),U(P(e),`bond`,6),z(e,`promiseSea`),W+`「マルコが喜ぶわ。……私も、見たことがないの。海」`)},{label:`「正直に言うと、怖いんだ」`,run:e=>(U(P(e),`bond`,10),U(N(e),`morale`,6),[`ルチアは、あなたの手に自分の手を重ねた。`,W+`「知ってる。私もよ。……だから、一緒にいるんでしょう」`])},{label:`黙って、彼女の肩を抱く`,run:e=>(U(P(e),`morale`,6),U(P(e),`bond`,5),`薪のはぜる音だけが、しばらく続いた。`)}]},{id:`thief`,title:`夜の物音`,category:`crisis`,auto:{on:`morning`,chance:.6,when:e=>e.sc.town.phase>=3&&e.food>=5},text:[`昨夜遅く、戸をこじ開ける音で目が覚めた。`,`暗がりに、痩せた男の影。手には、うちの麦の袋。男の目も、怯えていた。`],choices:[{label:`棒を握って、追い払う`,tag:`fight`,run:e=>k(e,.55)?`怒鳴り声を上げて棒を振り上げると、男は袋を落として闇の中へ逃げた。`:(U(N(e),`health`,-14),e.food=Math.max(0,e.food-2),e.dangers.push({day:e.day,text:`盗人ともみ合って怪我をした`,amount:.3}),`もみ合いになり、肩を戸の角に打ちつけた。男は袋の中身を掴めるだけ掴んで逃げた（食料−2）。`)},{label:`「これだけ持って行け」と、少し分ける`,cost:{food:2},tag:`give`,run:e=>(U(N(e),`morale`,3),`男は豆の包みを抱いて、何度も頭を下げた。「子どもが、三人いるんだ」`)},{label:`息をひそめて、やり過ごす`,tag:`hide`,run:e=>{let t=Math.ceil(e.food/2);return e.food-=t,U(P(e),`morale`,-4),`男は袋を担いで出て行った。家族は無事だった（食料−${t}）。`}}]},{id:`orphan`,title:`戸口の子ども`,category:`major`,auto:{on:`morning`,pri:2,when:e=>V(e,`pietro`).st===`dead`&&!!R(e,`pippoAlive`)&&!e.sc.home.guest},text:e=>[`戸口に、ピッポが立っていた。マルコの遊び友達。石工ピエトロの息子だ。`,`ピッポ｜「……父ちゃんも、母ちゃんも、起きないんだ」`,...L(F(e))?[He+`「父さん、ピッポをうちに入れてあげて。お願い」`]:[]],choices:[{label:`家に入れる`,hint:`養う口が一人増える`,key:`孤児になったピッポを引き取った`,tag:`yes`,run:e=>(e.sc.home.guest=1,U(F(e),`morale`,12),U(P(e),`morale`,2),U(N(e),`morale`,5),Oe(e,`marco`,.06,`flea`,`引き取った子の衣服のノミ`),Oe(e,`lucia`,.04,`flea`,`引き取った子の衣服のノミ`),Oe(e,`player`,.04,`flea`,`引き取った子の衣服のノミ`),[`ルチアが黙って椀をひとつ増やした。`,`ピッポは粥を一口すすって、声を上げずに泣いた。`])},{label:`パンを持たせ、教会へ行くよう言う`,cost:{food:1},tag:`church`,run:e=>(U(F(e),`morale`,-5),`ピッポはパンを握りしめて、広場の方へ歩いていった。一度も振り返らなかった。`)},{label:`戸を閉める`,key:`孤児になったピッポに戸を閉ざした`,tag:`no`,run:e=>(U(F(e),`morale`,-12),U(F(e),`bond`,-8),U(N(e),`morale`,-6),[`戸の向こうで、しばらく小さな足音がしていた。`,...L(F(e))?[He+`「……父さんなんか、きらいだ」`]:[]])}]},{id:`quarrel`,title:`言い争い`,category:`relation`,speaker:`ルチア`,auto:{on:`zone:homeEve`,pri:1,when:e=>L(P(e))&&P(e).bond<32&&e.day>=4},text:[W+`「あなたは、私たちを見ていない。お金と食べ物を運べば、それで家族だと思ってる」`,W+`「マルコが昨日、何て言ったか知ってる？『父さんは、ぼくの名前を忘れたのかな』って」`],choices:[{label:`「……すまなかった」`,run:e=>(U(P(e),`bond`,10),U(P(e),`morale`,4),W+`「謝ってほしいんじゃないの。ただ……ここにいて。それだけよ」`)},{label:`「誰のために働いていると思ってる」`,run:e=>(U(P(e),`bond`,-6),U(P(e),`morale`,-6),U(F(e),`morale`,-5),`ルチアは背を向けた。奥で、マルコが毛布をかぶる気配がした。`)}]}],et=()=>{};function tt(e){et=e}var G=(e,t)=>`${e}｜${t}`,nt={label:`立ち去る`,tag:`leave`},rt=(e,t)=>{let n=t+`Day`;return R(e,n)!==e.day&&(z(e,n,e.day),!0)},it=[[`「今年は麦の出来がいいらしい。パンも安くなるといいがね」`,`「ピサの港に、妙なガレー船が入ったそうだ。船乗りが皆、寝込んでいたとか」`,`「聖ヨハネの祭りには、広場に芝居が来るってさ」`,`「グイド親方の工房、フィレンツェから大口の注文だってね」`,`「うちの倅がね、やっと嫁をもらうんだよ」`],[`「粉屋の下働きが死んだんだと。脇の下に黒い腫れ物があったそうだ」`,`「ピサから来た者は町に入れるな、とお触れが出たよ」`,`「悪い空気のせいだ。南風が沼の毒を運んでくるんだ」`,`「星の巡りが悪いんだと、医者の先生が言ってた」`,`「買えるうちに粉を買っときな。値は上がる一方さ」`],[`「向かいの一家は、三日で五人とも逝っちまった」`,`「金持ちは皆、丘の別荘へ逃げたよ。残ってるのは俺たちだけさ」`,`「医者も逃げた。司祭様だけだ、病人の家に入るのは」`,`「咳をして血を吐く者は、まず助からん。腫れ物の方が、まだ望みがある」`,`「死んだ者の服を着るな、と言われてる。だが、裸じゃ生きられん」`,`「神がお怒りなんだ。俺たちは皆、裁かれてる」`],[`「……話しかけんでくれ。誰が病を持っとるか分からん」`,`「うちはもう、俺ひとりだ」`,`「墓地はいっぱいだ。壁の外に、大きな穴を掘ったそうだ」`,`「生きてる者が、死んだ者を埋めるのに足りんのだ」`]];function at(e){let t=e.sc.town,n=V(e,`lando`).st===`ok`;return e.ctx===`postern`?R(e,`knowPostern`)?{via:`西の通用門`,cost:0,text:`ピエトロに教わったとおり、蝶番の石を外せば通用門は開く。`}:null:e.day<t.gateCloseDay?{via:`町の門`,cost:0,text:`門はまだ開いている。`}:n?{via:`門番への袖の下`,cost:t.bribe,text:`門は閉ざされている。ランドは小声で言った。「${t.bribe}ソルド。夜明け前に、通用口を開けておく」`}:{via:`無人の門`,cost:0,text:`門番の姿はない。かんぬきは、内側から外せそうだ。`}}var ot=[{id:`beppe`,speaker:`穀物売りのベッペ`,text:e=>G(`ベッペ`,[`「らっしゃい！今朝焼いたパンに、ルッカの豆だ。坊主は元気かい」`,`「……ピサからの荷が来ねえ。値は上げたかないが、仕入れが倍なんだ」`,`「売れるうちに買っときな。俺も、明日ここに立ってるか分からん」`,`「これが最後の荷だ」`][e.sc.town.phase]),choices:[{label:`買い物をする`,tag:`shop`,run:()=>({next:`shop:beppe`})},{label:`町の様子を聞く`,tag:`talk`,run:e=>{rt(e,`beppeTalk`)&&V(e,`beppe`).rel++;let t=e.sc.town;return G(`ベッペ`,t.phase===0?`「港町で病が流行ってるって話だ。荷が止まりゃ、値は跳ね上がる。買うなら今のうちだぜ」`:t.phase===1?`「評議会が、市を閉めるかどうか揉めてる。閉まったら、俺の家の戸を叩きな。馴染みには分けてやる」`:`「市が閉まったら、広場の南の、青い戸の家だ。あんたには世話になった。忘れねえよ」`)}},nt]},{id:`beppe_door`,title:`ベッペの家`,text:e=>{let t=V(e,`beppe`);return t.st===`dead`?`青い戸に、板が打ちつけてある。隣の女が首を振った。「ベッペさんは、一昨日ね……」`:t.rel>=3?[`戸を叩くと、細く開いた隙間からベッペの目が覗いた。`,G(`ベッペ`,`「……あんたか。入んな。大きな声は出すなよ」`)]:[`戸を叩くと、中から押し殺した声がした。`,G(`ベッペ`,`「帰ってくれ。分けてやれる物なんかねえ」`)]},choices:[{label:`食料を分けてもらう`,show:e=>V(e,`beppe`).st===`ok`&&V(e,`beppe`).rel>=3,tag:`shop`,run:()=>({next:`shop:beppeDoor`})},nt]},{id:`gina`,speaker:`薬草売りのジーナ`,text:e=>G(`ジーナ`,e.sc.town.phase===0?`「薪にろうそく、灰汁に薬草。暮らしに要るものは何でもあるよ」`:`「香草は飛ぶように売れるよ。悪い空気を払うんだとさ。私ゃ、売るだけだがね」`),choices:[{label:`買い物をする`,tag:`shop`,run:()=>({next:`shop:gina`})},{label:`薬草のことを聞く`,tag:`talk`,run:e=>G(`ジーナ`,e.sc.town.phase<=1?`「熱には柳の皮、腫れ物には温めた玉ねぎの湿布さ。効くかどうかは、神様次第だがね」`:`「正直に言うよ。あの病に効く草を、私は知らない。出来るのは、熱を少し楽にすることだけさ。私も近いうちに、娘のいる村へ行くつもりだよ」`)},nt]},{id:`vendor`,speaker:e=>e.ctx===`clothVendor`?`布売り`:`青物売り`,text:e=>e.ctx===`clothVendor`?G(`布売り`,`「フィレンツェ仕込みの毛織物だよ！……あんた、グイドんとこの職人か。なら目は確かだな」`):G(`青物売り`,e.sc.town.phase===0?`「蕪に玉ねぎ、採れたてだよ！」`:`「今朝の分で終わりさ。畑の者が、町に入りたがらないんだ」`),choices:[nt]},{id:`bernardo`,speaker:`医師ベルナルド`,text:[G(`ベルナルド`,`「この病は、腐った空気が体に入り、体液の釣り合いを崩すことで起こる。星の巡りが、それを招いたのだ」`),G(`ベルナルド`,`「香草を焚き、酢で手と口をすすぎなさい。そして何より、恐れと悲しみを遠ざけること。心が沈めば、体も病を招く」`)],choices:[{label:`テリアカ（万能の解毒薬）を買う`,hint:`蛇の肉や数十の薬種を練った高価な薬`,cost:{money:15},key:`医師から高価な薬テリアカを買った`,tag:`theriac`,show:e=>!R(e,`theriac`),run:e=>(z(e,`theriac`),be(e).forEach(e=>U(e,`morale`,8)),[G(`ベルナルド`,`「毎朝、豆粒ほどを葡萄酒に溶いて飲みなさい。古代より伝わる、最良の備えだ」`),`黒く粘る練り薬の壺を受け取った。これで少しは安心できる、気がした。`])},{label:`「先生は、町に残るのですか」`,run:e=>G(`ベルナルド`,e.sc.town.phase>=2?`「……脈を取ろうにも、近づけば私が倒れる。医者が死ねば、誰が診るのかね。私は、発つよ」`:`「務めは果たす。だが、この病の前で、我々の学問がどれほど役に立つか……正直、分からんのだ」`)},nt]},{id:`notice`,title:`広場の掲示`,text:e=>{let t=e.sc.town;return t.phase===0?[`評議会の触れ書きが貼ってある。`,`「一、市場税は従前のとおり。」`,`「一、聖ヨハネの祝日の市は、例年どおり広場にて開く。」`]:t.phase===1?[`新しい触れ書きが貼ってある。`,`「一、ピサ及びルッカより来たる者、何人も町に入るを禁ず。」`,`「一、古着・寝具の持ち込みと売買を禁ず。」`,`「一、病人の出た家は、評議会に届け出ること。」`]:t.phase===2?[`触れ書きが増えている。`,`「一、葬列は近親の者のみ。弔いの鐘は鳴らさぬこと。」`,`「一、亡骸は木の棺に納め、深く埋めること。」`,e.day>=t.gateCloseDay?`「一、町の門を閉ざす。許しなく出入りするを禁ず。」`:`「一、近く、町の門を閉ざす。」`,`「一、亡骸を運ぶ者を募る。日当は門番まで。」`]:[`触れ書きは雨に打たれ、半ば剥がれている。新しいものは、もう貼られていない。`]},choices:[{label:`読み終える`,tag:`leave`}]},{id:`well`,title:`広場の井戸`,text:e=>e.sc.town.phase<=1?[`水を汲む女たちが、声を落として話している。`,G(`女`,A(e,it[e.sc.town.phase]))]:[`井戸端には誰もいない。釣瓶の縄だけが、風に揺れている。`],choices:[{label:`離れる`,tag:`leave`}]},{id:`guido`,speaker:`グイド親方`,text:e=>G(`グイド`,e.sc.town.phase===0?`「おう、来たか。フィレンツェの商会に納める反物が山ほどある。今日も頼むぞ」`:e.day>=e.sc.town.workshopCloseDay-1?`「……注文が、ぱったり止まった。わしも、家族を連れて丘の別荘へ行く。お前も、身の振り方を考えろ」`:`「荷が動かん。賃金は下げさせてもらう。嫌なら来なくていい」`),choices:e=>{let t=e.sc.town,n=t.phase===0?9:7,r=e=>!I(N(e))||`熱があって働けない`;return[{label:`働く`,hint:`半日の機織りと縮絨。賃金${n}ソルド`,cost:{time:3,stamina:25},ok:r,tag:`work`,run:e=>(e.money+=n,B(e,`worked`),V(e,`guido`).rel++,Oe(e,`player`,.05*t.prev,`flea`,`工房での仕事`),[`槌を打ち、布を晒し、日が傾くまで働いた。${n}ソルドを受け取った。`])},{label:`倉の羊毛を運び出す`,hint:`人手の嫌がる仕事。賃金13ソルド`,show:e=>e.sc.town.phase>=1,cost:{time:3,stamina:35},ok:r,tag:`workRisky`,run:e=>(e.money+=13,B(e,`worked`),Oe(e,`player`,.03+.2*t.prev,`flea`,`羊毛倉の荷運び`),[`暗い倉で、梱を担いでは運び出した。梱の陰から、ネズミが何匹も走り出た。`,`13ソルドを受け取った。首すじが、やけに痒い。`])},{label:`話を聞く`,tag:`talk`,run:e=>G(`グイド`,t.phase===0?`「お前の倅、八つだったか。あと四年もすりゃ、うちで見習いに取ってやる」`:`「ピサの取引先から、便りが途絶えた。番頭も、その家族も、皆死んだそうだ」`)},nt]}},{id:`workshop_door`,title:`工房の戸`,text:[`工房の戸は閉ざされ、板に書きつけが打ってある。`,`「しばらく休む。未払いの賃金は、戻ってから払う。——グイド」`,`機の音のしない工房を見るのは、初めてだった。`],choices:[nt]},{id:`priest`,speaker:`ドン・アンセルモ司祭`,text:e=>G(`司祭`,[`「神の平安があなたと共に。ご家族は息災かね」`,`「恐れてはならぬ。だが、備えは怠らぬことだ。祈りと、慎みある暮らしを」`,`「今日だけで、七人に終油を授けた。……私の手は、足りぬ」`,`「よく来た。ここにはまだ、灯がある」`][e.sc.town.phase]),choices:[{label:`祈る`,hint:`心が少し落ち着く`,cost:{time:1},tag:`pray`,run:e=>(rt(e,`pray`)&&U(N(e),`morale`,12),`石の床に膝をつき、家族の名をひとつずつ唱えた。高い窓から、細い光が落ちている。`)},{label:`施しを願う`,show:e=>e.food<xe(e)*2,ok:e=>e.day-R(e,`almsDay`)>=3||!R(e,`almsDay`)||`先日いただいたばかりだ`,tag:`alms`,run:e=>(z(e,`almsDay`,e.day),e.food+=3,[G(`司祭`,`「貧しい者のための麦だ。持っていきなさい。恥じることはない」`),`（食料＋3）`])},{label:`献金する`,cost:{money:4},tag:`donate`,run:e=>(V(e,`priest`).rel+=2,U(N(e),`morale`,5),G(`司祭`,`「感謝する。これで、身寄りのない病人に粥を配れる」`))},{label:`この病について尋ねる`,tag:`talk`,run:e=>G(`司祭`,e.sc.town.phase<=1?`「病は、神が人に悔い改めを促す鞭だと、古くから言われる。だが私には、幼子まで打たれる理由が分からぬ。……分からぬまま、祈るのだ」`:`「逃げる者を、私は責めぬ。残る者を、愚かとも思わぬ。ただ、誰かの手を握ってやれる者が、一人でも多くあれと願う」`)},nt]},{id:`altar`,title:`祭壇`,text:[`祭壇の前に、司祭の姿はない。溶け残ったろうそくが、いくつか灯っている。`],choices:[{label:`祈る`,cost:{time:1},tag:`pray`,run:e=>(rt(e,`pray`)&&U(N(e),`morale`,9),`誰もいない聖堂で、あなたは家族の名を唱えた。声が、高い天井に吸われていった。`)},nt]},{id:`sermon`,title:`説教`,category:`daily`,speaker:`ドン・アンセルモ司祭`,auto:{on:`zone:church`,pri:1,when:e=>e.sc.town.phase===0&&e.day>=2},text:[`聖堂では、司祭が数人の町人に語りかけていた。`,G(`司祭`,`「東の国々で、また海の向こうのシチリアで、大いなる死が人々を襲っていると聞く」`),G(`司祭`,`「兄弟たちよ、噂に怯えるな。しかし、隣人が倒れたとき、その戸を叩く者であれ」`)],choices:[{label:`耳を傾ける`,run:e=>{U(N(e),`morale`,3)}}]},{id:`procession`,title:`贖罪の行列`,category:`major`,auto:{on:`zone:church`,pri:2,when:e=>e.sc.town.phase===2&&V(e,`priest`).st===`ok`},text:[`聖堂は人で埋まっていた。聖母の像を担ぎ、町を巡って神の赦しを乞う行列が出るという。`,`裸足の男女が、肩を寄せ合って連祷を唱えている。あちこちで、咳の音がした。`],choices:[{label:`行列に加わる`,hint:`人々と肩を並べて町を巡る`,cost:{time:1},key:`贖罪の行列に加わった`,tag:`join`,run:e=>(U(N(e),`morale`,16),Oe(e,`player`,.1+.2*e.sc.town.prev,`droplet`,`人で埋まった贖罪の行列`),[`ろうそくを手に、声を合わせて歩いた。独りではない、と久しぶりに思えた。`,`隣の男が、ずっと咳をしていた。`])},{label:`入口の柱の陰から祈る`,tag:`watch`,run:e=>(U(N(e),`morale`,6),`歌声が通りへ出ていくのを、離れて見送った。`)},{label:`立ち去る`,tag:`leave`,run:e=>{U(N(e),`morale`,-2)}}]},{id:`teresa`,speaker:`隣人テレーザ`,text:e=>R(e,`teresaRecovered`)?G(`テレーザ`,R(e,`teresaHelp`)?`「あんたたちが水を運んでくれたから、私ゃ生きてる。この恩は忘れないよ」`:`「……なんとか、死にそこなったよ。誰も来ちゃくれなかったがね」`):G(`テレーザ`,e.sc.town.phase===0?`「おや、お出かけかい。マルコ坊は、また背が伸びたねえ。私が取り上げた子だもの、自慢だよ」`:`「妙な病が流行ってるそうじゃないか。年寄りから先に持っていかれるんだろうねえ」`),choices:[{label:`世間話をする`,tag:`talk`,run:e=>R(e,`teresaRecovered`)&&R(e,`teresaHelp`)&&!R(e,`teresaGift`)?(z(e,`teresaGift`),e.money+=10,e.food+=3,[G(`テレーザ`,`「これを持ってお行き。床下に隠しておいた銀と、干し豆だ。私ひとりじゃ、使い切る前にお迎えが来るよ」`),`（10ソルドと食料＋3）`]):!R(e,`figs`)&&e.sc.town.phase===0?(z(e,`figs`),e.food+=1,U(F(e),`morale`,3),[G(`テレーザ`,`「これ、マルコ坊に。去年の干しイチジクだよ」`),`（食料＋1）`]):G(`テレーザ`,A(e,[`「亭主を送ってもう十年。この通りで産まれた子は、たいてい私が取り上げたんだ」`,`「ルチアさんを大事におし。あんな働き者は、そういないよ」`,`「年寄りはね、朝に目が覚めるだけで儲けものさ」`]))},nt]},{id:`teresa_door`,title:`テレーザの家`,category:`relation`,auto:{on:`zone:street`,pri:2,when:e=>V(e,`teresa`).st===`sick`},text:e=>V(e,`teresa`).st===`dead`?[`テレーザの家の戸には、板が打ちつけられている。`,`窓辺に、干からびたイチジクの束が下がったままだ。`]:[`テレーザの家の戸が、半分開いたままになっている。いつも戸口の腰掛けにいる彼女の姿がない。`,`中から、苦しげなうめき声が聞こえる。`],choices:e=>V(e,`teresa`).st===`sick`?[{label:`中に入って世話をする`,hint:`水を飲ませ、汗を拭く`,cost:{time:1},ok:e=>R(e,`teresaDay`)!==e.day||`今日はもう見舞った`,key:`病に倒れた隣人テレーザの家に入り、世話をした`,tag:`help`,run:e=>(z(e,`teresaDay`,e.day),z(e,`teresaHelp`,R(e,`teresaHelp`)+1),U(N(e),`morale`,4),B(e,`helped`),Oe(e,`player`,.06,`flea`,`隣人テレーザの看病`),[`薄暗い寝床で、テレーザは熱にうかされていた。脇の下が、黒く腫れ上がっている。`,G(`テレーザ`,`「……誰だい。ああ、あんたか。……来ちゃ、いけないよ……」`),`水を含ませ、額を拭いた。寝藁から跳ねたノミが、手首を刺した。`])},{label:`戸口に水とパンを置いて声をかける`,cost:{food:1},ok:e=>R(e,`teresaDay`)!==e.day||`今日はもう見舞った`,key:`テレーザの戸口に食べ物を置いた`,tag:`door`,run:e=>(z(e,`teresaDay`,e.day),z(e,`teresaHelp`,R(e,`teresaHelp`)+.5),U(N(e),`morale`,2),B(e,`helped`),`「テレーザさん、ここに置くよ」　返事はなかったが、うめき声が少しだけ静まった。`)},{label:`立ち去る`,tag:`leave`,run:e=>{R(e,`teresaDay`)!==e.day&&U(N(e),`morale`,-3)}}]:[nt]},{id:`pietro`,speaker:`石工ピエトロ`,text:e=>R(e,`agneseDead`)?G(`ピエトロ`,`「……アニェーゼを、昨日埋めた。穴は、俺が自分で掘った。石工だからな」`):R(e,`agneseSick`)?G(`ピエトロ`,`「女房が咳をして、血を吐くんだ。医者は来ちゃくれねえ。……あんたは、近寄らん方がいい」`):G(`ピエトロ`,e.sc.town.phase===0?`「よう。うちのピッポが、またマルコと城壁で遊んでたぜ。あの二人は兄弟みてえだな」`:`「城壁の修繕も止まっちまった。石工に仕事がなきゃ、どうやって食わせりゃいい」`),choices:[{label:`話す`,tag:`talk`,run:e=>R(e,`pietroHelped`)&&R(e,`agneseDead`)&&!R(e,`hasCart`)?{next:`pietro_repay`}:G(`ピエトロ`,A(e,[`「西の壁の通用門はな、俺が去年、蝶番を直したんだ。古い門だよ」`,`「ガキの頃からこの路地だ。あんたとも長えな」`,`「ピッポの奴、マルコの話ばかりしやがる」`]))},{label:`手押し車を譲ってもらう`,hint:`荷や病人を運べる`,show:e=>!R(e,`hasCart`)&&e.sc.town.phase>=1,cost:{money:8},tag:`cart`,run:e=>(z(e,`hasCart`),G(`ピエトロ`,`「石を運ぶ車だ、頑丈だぜ。……どこかへ行く気か。まあ、聞かねえよ」`))},nt]},{id:`pietro_ask`,title:`ピエトロの頼み`,category:`relation`,speaker:`石工ピエトロ`,auto:{on:`zone:alley`,pri:2,when:e=>!!R(e,`agneseSick`)&&!R(e,`agneseDead`)&&V(e,`pietro`).st===`ok`&&e.day>V(e,`pietro`).day},text:[`路地で、ピエトロに呼び止められた。目の下に濃い隈がある。`,G(`ピエトロ`,`「頼む。食い物を分けてくれ。女房は寝たきりで、俺は稼ぎがねえ。ピッポが、昨日から何も食ってねえんだ」`),`家の奥から、湿った咳が聞こえる。`],choices:[{label:`二食ぶん分ける`,cost:{food:2},key:`隣人ピエトロに食料を分けた`,tag:`give`,run:e=>(z(e,`pietroHelped`,2),V(e,`pietro`).rel+=3,U(N(e),`morale`,4),B(e,`helped`),G(`ピエトロ`,`「……恩に着る。この借りは、必ず返す。生きてりゃな」`))},{label:`一食ぶんだけ分ける`,cost:{food:1},key:`隣人ピエトロに食料を少し分けた`,tag:`give1`,run:e=>(z(e,`pietroHelped`,1),V(e,`pietro`).rel+=2,U(N(e),`morale`,2),B(e,`helped`),G(`ピエトロ`,`「すまねえ。ピッポに食わせる」`))},{label:`「うちも、子がいるんだ」と断る`,key:`隣人ピエトロの頼みを断った`,tag:`no`,run:e=>(V(e,`pietro`).rel-=2,U(N(e),`morale`,-4),`ピエトロは何も言わなかった。ただ、長いことあなたの顔を見ていた。`)}]},{id:`pietro_repay`,title:`石工の返礼`,category:`relation`,speaker:`石工ピエトロ`,auto:{on:`zone:alley`,pri:2,when:e=>!!R(e,`pietroHelped`)&&!!R(e,`agneseDead`)&&V(e,`pietro`).st===`ok`&&V(e,`pietro`).fate===`ok`},text:[G(`ピエトロ`,`「あの時の豆で、ピッポは三日食いつないだ。借りを返す」`),G(`ピエトロ`,`「この手押し車を持っていけ。それと——西の壁の通用門だ。右の蝶番の下の石は、はめてあるだけだ。外せば、門は内から開く」`),G(`ピエトロ`,`「門番に銭を払う必要はねえ。逃げるなら、使え」`)],choices:[{label:`礼を言う`,run:e=>(z(e,`hasCart`),z(e,`knowPostern`),H(e,`ピエトロから手押し車と、西の通用門の開け方を教わった。`),`（手押し車を手に入れた。西の通りの突き当たりの通用門から、町を出られるようになった）`)}]},{id:`pietro_door`,title:`ピエトロの家`,text:e=>V(e,`pietro`).st===`dead`?[`戸に板が打たれている。石工の槌が、戸口に立てかけられたままだ。`]:[`戸の向こうから、重い咳が聞こえる。ピエトロの声だ。`,G(`ピエトロ`,`「……入るな。俺も、やられた。ピッポを……いや、何でもねえ」`)],choices:[{label:`戸口に水とパンを置く`,show:e=>V(e,`pietro`).st===`sick`,cost:{food:1},run:e=>(U(N(e),`morale`,3),B(e,`helped`),`椀を戸の前に置いた。しばらくして、戸が細く開く音がした。`)},nt]},{id:`lando`,speaker:`門番ランド`,text:e=>{let t=e.sc.town;return G(`ランド`,e.day>=t.gateCloseDay?`「門は閉めた。評議会の命だ。出るのも入るのも、許しが要る」`:t.phase===0?`「今日も異状なし、だ。街道は荷車でにぎやかなもんさ」`:`「ピサから来た者は追い返せと言われてる。泣かれても、わめかれても、だ。……嫌な役目さ」`)},choices:[{label:`町の外の様子を聞く`,tag:`talk`,run:e=>{let t=e.sc.town;return e.day<t.onset?G(`ランド`,`「海沿いの町で、たちの悪い熱病が出たらしい。旅の者が言うには、三日で死ぬとか。ま、噂は大げさなもんだ」`):(z(e,`knowFarm`),[G(`ランド`,t.farmStruck?`「北の丘の村々でも、もう死人が出てる。農場のあたりもだ。逃げた先が安全だなんて、誰にも言えんよ」`:`「北の丘の村は、まだ無事らしい。だが、どの村も見張りを立てて、病人連れは石で追い返すそうだ」`),G(`ランド`,e.day>=t.gateCloseDay?`「……どうしても出たいなら、${t.bribe}ソルド。俺にも家族がいるんでな」`:`「門は${t.gateCloseDay}日目あたりに閉まるって話だ。出るなら、それまでだな」`)])}},{label:`町を出る`,tag:`evac`,show:e=>e.sc.town.phase>=1||R(e,`fleePlan`)===1,run:e=>(e.ctx=`gate`,{next:`evac`})},{label:`亡骸を運ぶ仕事を請ける`,hint:`皆が避ける仕事。日当16ソルド`,show:e=>e.sc.town.phase>=2,cost:{time:4,stamina:40},ok:e=>!I(N(e))||`熱があって働けない`,key:`亡骸を運ぶ仕事を請けた`,tag:`becchino`,run:e=>(e.money+=16,z(e,`becDay`,e.day),B(e,`becchino`),U(N(e),`morale`,-8),U(P(e),`bond`,-3),Oe(e,`player`,.12+.3*e.sc.town.prev,`flea`,`亡骸を運ぶ仕事`),ke(e,.03,`flea`,`仕事着に付いたノミ`),[`戸口に出された亡骸を荷車に積み、壁の外の大きな穴まで運んだ。何度も、何度も。`,`敷布の端から、子どもの小さな足がのぞいていた。`,`16ソルドを受け取った。手を洗っても、匂いが取れない。`])},nt]},{id:`gate`,title:`町の門`,text:[`門番の詰所は空だ。槍が、壁に立てかけられたまま。`,`巨大な門扉は、太いかんぬきで閉ざされている。`],choices:[{label:`町を出る`,tag:`evac`,run:e=>(e.ctx=`gate`,{next:`evac`})},nt]},{id:`postern`,title:`西の通用門`,text:e=>R(e,`knowPostern`)?[`壁に埋もれるようにして、小さな古い門がある。`,`右の蝶番の下——たしかに、石がひとつ、浮いている。`]:[`壁に埋もれるようにして、小さな古い門がある。鉄の錠は錆びつき、びくともしない。`],choices:[{label:`ここから町を出る`,show:e=>!!R(e,`knowPostern`),tag:`evac`,run:e=>(e.ctx=`postern`,{next:`evac`})},nt]},{id:`evac`,title:`町を出る`,category:`major`,text:e=>{let t=at(e),n=xe(e)*2,r=[t?t.text:`出る手立てがない。`];r.push(`ルチアの兄の農場まで、歩いて二日。道中の食料は${n}食ぶん要る（手持ち${e.food}）。`);let i=be(e).filter(I);return i.length&&r.push(`${i.map(e=>e.id===`player`?`あなた`:e.name).join(`と`)}は病の身だ。${R(e,`hasCart`)?`手押し車に乗せて行ける。`:`歩かせるには、あまりに弱っている。`}`),R(e,`knowFarm`)?r.push(e.sc.town.farmStruck?`門番は、丘の村々にも死人が出ていると言っていた。`:`門番は、丘の村はまだ無事だが、病人連れは追い返されると言っていた。`):r.push(`町の外がどうなっているのか、あなたは何も知らない。`),r.push(`一度出れば、もう戻れない。`),r},choices:e=>{let t=at(e),n=ye(e).some(e=>e.alive);return[{label:`家族を連れて町を出る`,show:()=>n,cost:{money:t?.cost??0},ok:e=>t?L(P(e))&&R(e,`fleePlan`)!==1?`ルチアとまだ話がついていない`:!0:`出る手立てがない`,tag:`evacFamily`,run:e=>Ve(e,`family`,t.via)},{label:n?`家族を残し、ひとりで出る`:`ひとりで町を出る`,cost:{money:t?.cost??0},ok:()=>t?!0:`出る手立てがない`,tag:`evacAlone`,run:e=>n?{next:`evac_alone`}:Ve(e,`alone`,t.via)},{label:`やめておく`,tag:`leave`}]}},{id:`evac_alone`,title:`ひとりで`,category:`major`,text:e=>[`家には、ルチアとマルコがいる。`,...ye(e).some(I)?[`病の床で、あなたの帰りを待っている。`]:[`夕食の支度をして、あなたの帰りを待っている。`],`本当に、ひとりで行くのか。`],choices:[{label:`行く`,key:`家族を残し、ひとりで町を出た`,tag:`evacAloneYes`,run:e=>Ve(e,`alone`,at(e)?.via??`門`)},{label:`……家に帰る`,tag:`leave`,run:e=>(U(N(e),`morale`,-3),`踵を返した。門の影が、背中に長く伸びていた。`)}]},{id:`refugees`,title:`門前の人々`,category:`daily`,auto:{on:`zone:gate`,pri:2,when:e=>e.day>=e.sc.town.onset-1&&e.day<=e.sc.town.onset+1},text:[`門の外に、荷を背負った一家が座り込んでいる。門番が槍を横にして、中へ入れようとしない。`,G(`旅の男`,`「ピサから三日歩いて来たんだ！子どもがいる、せめて水を！」`),G(`ランド`,`「お触れだ。ピサの者は入れられん」`)],choices:[{label:`水袋を投げてやり、向こうの様子を尋ねる`,key:`門前の避難民に水をやり、話を聞いた`,tag:`ask`,run:e=>(z(e,`knowFarm`),U(N(e),`morale`,2),[G(`旅の男`,`「恩に着る……。ピサじゃ、朝元気だった者が、晩には冷たくなる。逃げたさ。だが、街道の村も、もう——」`),G(`旅の男`,e.sc.town.farmStruck?`「北の丘の農場でも、戸口に死人が転がってた。どこへ逃げても同じだ」`:`「北の丘の方は、まだ無事だと聞いた。だが、よそ者と見りゃ石を投げてくる」`)])},{label:`黙って見ている`,tag:`watch`,run:()=>`一家はやがて立ち上がり、街道を北へ歩いていった。子どもが、何度もこちらを振り返った。`}]},{id:`gate_closed`,title:`閉ざされた門`,category:`crisis`,auto:{on:`zone:gate`,pri:1,when:e=>e.day>=e.sc.town.gateCloseDay},text:e=>[`門扉が閉ざされ、太いかんぬきが掛けられている。`,...V(e,`lando`).st===`ok`?[G(`ランド`,`「評議会の命だ。病を入れぬため、出さぬため、だとよ。……閉じ込められたのは、どっちなんだかな」`)]:[`門番の姿は、どこにもない。`]],choices:[{label:`門を見上げる`,run:()=>{}}]},{id:`sailor`,title:`船乗りの話`,category:`daily`,auto:{on:`zone:market`,pri:3,when:e=>e.day===1},text:[`市場はにぎわっている。パンの匂い、呼び売りの声、荷車の軋み。`,`井戸のそばで、日焼けした旅の男が人だかりに話をしていた。`,G(`旅の男`,`「メッシーナの港にな、東から来たガレー船が着いたんだ。漕ぎ手は皆、櫂を握ったまま死んでた。それからだ、町じゅうに病が広がったのは」`),G(`町人`,`「海の向こうの話だろう。ここは丘の上だ」`)],choices:[{label:`足を止めて、詳しく聞く`,tag:`ask`,run:e=>(z(e,`heardSailor`),[G(`旅の男`,`「脇や股に、卵ほどの腫れ物が出来る。黒い斑が出たら、もう終いだ。咳をして血を吐く奴は、もっと早い」`),G(`旅の男`,`「ジェノヴァも、ピサもやられた。次は、内陸さ。俺は、山の向こうまで逃げるつもりだ」`)])},{label:`聞き流して、買い物に戻る`,tag:`leave`}]},{id:`crier`,title:`評議会の触れ`,category:`crisis`,auto:{on:`zone:market`,pri:2,when:e=>e.sc.town.phase===1},text:e=>[`広場で、町の触れ役が声を張り上げている。`,G(`触れ役`,`「評議会より告ぐ！粉屋通りにて、病の者あり！ピサ及びルッカより来たる者を町に入れるを禁ず！古着と寝具の売買を禁ず！」`),`人々が、穀物売りの台に殺到している。食料の値は、もう${e.sc.town.price}ソルドだ。`],choices:[{label:`人波を見つめる`,run:()=>`あの病が、この町に来たのだ。`}]},{id:`scapegoat`,title:`よそ者への疑い`,category:`major`,auto:{on:`zone:market`,pri:1,when:e=>e.sc.town.phase===2},text:[`広場の隅で、数人の男が旅の行商人を取り囲んでいる。`,G(`男`,`「こいつが井戸に何か入れるのを見たって者がいる！よそ者が病を持ち込んだんだ！」`),G(`行商人`,`「違う、私はただ水を……！」`),`男の一人が、石を拾い上げた。`],choices:[{label:`割って入る`,key:`疑いをかけられた行商人をかばった`,tag:`help`,run:e=>(z(e,`savedPeddler`),U(N(e),`morale`,6),B(e,`helped`),k(e,.4)?(U(N(e),`health`,-8),[`「この人は水を汲んでいただけだ。俺が見ていた」`,`石がひとつ、あなたの肩に当たった。だが男たちは、やがて散っていった。`,G(`行商人`,`「……命の恩人だ。私はしばらく、路地の奥の空き地に身を隠す。入り用の物があれば、来てくれ」`)]):[`「この人は水を汲んでいただけだ。俺が見ていた」`,`顔見知りの職人であるあなたの言葉に、男たちは渋々、石を下ろした。`,G(`行商人`,`「……命の恩人だ。私はしばらく、路地の奥の空き地に身を隠す。入り用の物があれば、来てくれ」`)])},{label:`門番を呼びに走る`,cost:{time:1},tag:`guard`,run:e=>k(e,.7)?(z(e,`savedPeddler`),[`門番の姿を見て、男たちは散った。行商人は額から血を流していたが、生きていた。`,G(`行商人`,`「礼を言う。路地の奥の空き地にいる。困ったら来てくれ」`)]):(U(N(e),`morale`,-6),`戻ったとき、行商人は石畳に倒れて動かなかった。男たちの姿は、もうなかった。`)},{label:`目を伏せて通り過ぎる`,key:`疑いをかけられた行商人を見過ごした`,tag:`leave`,run:e=>(U(N(e),`morale`,-6),`背中で、鈍い音と悲鳴を聞いた。あなたは、足を速めた。`)}]},{id:`market_closed`,title:`空の広場`,category:`crisis`,auto:{on:`zone:market`,pri:2,when:e=>!e.sc.town.marketOpen},text:[`広場に、露店はひとつもない。倒れた台と、破れた日除けが残っているだけだ。`,`香草を焚く煙が、低く流れている。`],choices:[{label:`立ち尽くす`,run:e=>V(e,`beppe`).rel>=3?`そういえばベッペが言っていた。市が閉まったら、広場の南の、青い戸の家を訪ねろと。`:`食べ物を手に入れる当てを、別に探さなければならない。`}]},{id:`bulk`,title:`豆のまとめ売り`,category:`daily`,speaker:`穀物売りのベッペ`,auto:{on:`zone:market`,once:!1,cooldown:4,chance:.5,when:e=>!!e.sc.town.marketOpen&&e.sc.town.phase<=1&&e.day>=2},text:e=>[G(`ベッペ`,`「おう、ちょうどいい。底の豆を袋ごと持ってかねえか。六食ぶんで${e.sc.town.price*4}ソルド。運ぶのも面倒でな」`)],choices:[{label:`袋ごと買う`,cost:e=>({money:e.sc.town.price*4}),tag:`yes`,run:e=>(e.food+=6,V(e,`beppe`).rel++,`重い袋を肩に担いだ。（食料＋6）`)},{label:`断る`,tag:`no`}]},{id:`beggar`,title:`物乞い`,category:`daily`,auto:{on:`zone:church`,once:!1,cooldown:5,chance:.4,when:e=>e.sc.town.phase>=1},text:[`教会の入口に、痩せた老人が座っている。差し出された椀は空だ。`,G(`老人`,`「旦那、神のご加護を。昨日から、何も……」`)],choices:[{label:`1ソルド恵む`,cost:{money:1},tag:`give`,run:e=>(U(N(e),`morale`,3),G(`老人`,`「あんたとご家族に、聖母さまのお守りがありますように」`))},{label:`通り過ぎる`,tag:`leave`}]},{id:`collapsed`,title:`路地に倒れた男`,category:`crisis`,auto:{on:`zone:alley`,pri:1,when:e=>e.sc.town.phase===1},text:[`路地の壁にもたれて、若い男が座り込んでいる。粉屋の下働きだ。顔が赤く、目がうつろだ。`,G(`若い男`,`「……家まで……すぐそこなんだ……足が……」`),`道行く者は、皆、壁際に寄って足早に通り過ぎていく。`],choices:[{label:`肩を貸して、家まで送る`,key:`路地に倒れた病人を家まで送った`,tag:`help`,run:e=>(U(N(e),`morale`,5),B(e,`helped`),Oe(e,`player`,.05,`flea`,`病人に肩を貸した`),[`男の体は、服越しにも分かるほど熱かった。`,`戸口で、男の母親が泣きながら何度も頭を下げた。`])},{label:`近くの家の戸を叩いて、人を呼ぶ`,tag:`call`,run:e=>(U(N(e),`morale`,1),`戸は開かなかった。三軒目で、ようやく男の身内だという女が出てきた。`)},{label:`壁際を、足早に通り過ぎる`,tag:`leave`,run:e=>{U(N(e),`morale`,-3)}}]},{id:`purse`,title:`落とし物`,category:`daily`,auto:{on:`zone:street`,once:!1,cooldown:6,chance:.3,when:e=>e.sc.town.phase<=2},text:[`石畳の隙間に、革の小袋が落ちている。振ると、硬貨の音がした。`],choices:[{label:`懐に入れる`,tag:`yes`,run:e=>{let t=O(e,3,7);return e.money+=t,U(N(e),`morale`,-1),`${t}ソルド入っていた。誰の物かは、分からない。`}},{label:`教会に届ける`,tag:`no`,run:e=>(U(N(e),`morale`,3),V(e,`priest`).rel++,`落とし主が現れなければ、貧しい者の粥になるだろう。`)}]},{id:`folk`,speaker:`町の人`,text:e=>G(`町の人`,A(e,it[e.sc.town.phase])),choices:[{label:`別れる`,tag:`leave`}]},{id:`stranger`,title:`病人`,category:`crisis`,text:e=>e.ctx===`sick2`?[`壁際に、男がうずくまっている。体を折って咳き込むたび、石畳に赤い飛沫が散る。`,G(`男`,`「……み、水……」`)]:[`戸口の前に、女が横たわっている。首に、黒ずんだ腫れ物。浅い息をしている。`,G(`女`,`「……誰か……子どもが、中に……」`)],choices:[{label:`水を飲ませる`,ok:e=>R(e,`strangerDay_`+e.ctx)!==e.day||`今日はもう世話をした`,tag:`help`,run:e=>(z(e,`strangerDay_`+e.ctx,e.day),U(N(e),`morale`,4),B(e,`helped`),e.ctx===`sick2`?(Oe(e,`player`,.2,`droplet`,`血を吐く病人に水を飲ませた`),`頭を支えて水を含ませた。男は咳き込み、あなたの袖に血の混じった唾が飛んだ。`):(Oe(e,`player`,.03,`flea`,`行き倒れの病人の世話`),`水を含ませると、女はかすかに唇を動かした。礼を言ったのだと思う。`))},{label:`離れた所から、祈りの言葉をかける`,tag:`pray`,run:e=>(U(N(e),`morale`,1),`「主が、あなたと共におられますように」　それしか、言えなかった。`)},{label:`立ち去る`,tag:`leave`}]},{id:`pickup`,title:`見つけた物`,text:e=>{let t=e.spots.find(t=>t.id===e.ctx)?.kind;return t===`wood`?`軒下に、薪の束が置き去りにされている。`:t===`coins`?`石畳の隙間で、何かが光った。`:t===`herbs`?`壁際に、セージとローズマリーが茂っている。`:t===`basket`?`倒れた籠から、蕪と固いパンがこぼれている。`:`戸口の前に、布の包みが放り出されている。上等な毛布と、衣類のようだ。`},choices:e=>{let t=e.spots.find(t=>t.id===e.ctx),n=e=>n=>(t&&(t.taken=!0),B(n,`found`),e(n));return!t||t.taken?[nt]:t.kind===`bundle`?[{label:`持ち帰る`,hint:`暖かそうな毛布だ`,tag:`take`,run:n(e=>{e.supplies+=1;let t=O(e,0,4);return e.money+=t,Oe(e,`player`,.04+.12*e.sc.town.prev,`flea`,`拾った毛布と衣類`),ke(e,.03+.08*e.sc.town.prev,`flea`,`拾った毛布と衣類`),`毛布を丸めて抱えた。${t?`衣類の隠しに${t}ソルド入っていた。`:``}（生活用品＋1）`})},{label:`触らずにおく`,tag:`leave`,run:n(()=>`病人の出た家の物かもしれない。触れずに通り過ぎた。`)}]:[{label:`拾う`,tag:`take`,run:n(e=>{if(t.kind===`wood`)return e.supplies+=1,`薪を抱えた。（生活用品＋1）`;if(t.kind===`coins`){let t=O(e,2,5);return e.money+=t,`${t}ソルド拾った。`}if(t.kind===`herbs`)return e.remedies+=1,`葉を摘んで、布に包んだ。（薬草＋1）`;let n=O(e,1,2);return e.food+=n,`まだ食べられる。布に包んで持ち帰ることにした。（食料＋${n}）`})},nt]}},{id:`empty_house`,title:`空き家`,category:`major`,text:[`路地奥の家は、戸が開いたままだ。住んでいた一家は、先週、皆死んだと聞く。`,`中には、手つかずの食料や衣類が残っているかもしれない。`],choices:[{label:`中を物色する`,hint:`見つかれば咎められる`,cost:{time:2,stamina:15},ok:e=>R(e,`lootDay`)===e.day?`今日はもう探した`:R(e,`lootCount`)>=3?`もう何も残っていない`:!0,key:`死者の出た空き家を物色した`,tag:`loot`,run:e=>{z(e,`lootDay`,e.day),z(e,`lootCount`,R(e,`lootCount`)+1),B(e,`looted`);let t=O(e,2,4),n=O(e,0,6);e.food+=t,e.money+=n,U(N(e),`morale`,-4),Oe(e,`player`,.08+.25*e.sc.town.prev,`flea`,`空き家の物色`),ke(e,.02+.06*e.sc.town.prev,`flea`,`空き家から持ち帰った袋`);let r=[`寝床には、人の形にへこんだ藁がそのまま残っていた。目をそらして、棚を探った。`,`豆の袋と塩漬けの肉を見つけた（食料＋${t}${n?`、${n}ソルド`:``}）。袋を持ち上げると、ノミが足首に跳ねた。`];if(e.sc.town.phase===2&&k(e,.2)){let t=Math.min(e.money,8);e.money-=t,r.push(`出たところを夜警に見つかった。${t}ソルドを握らせて、見逃してもらった。`)}return r}},nt]},{id:`peddler`,speaker:`行商人`,text:[G(`行商人`,`「あんたか。あの時は世話になった。——売り物は少ないが、あんたになら、まともな値で分ける」`)],choices:[{label:`品物を見る`,tag:`shop`,run:()=>({next:`shop:peddler`})},nt]}],K=(e,t,n,r)=>({x0:e,z0:t,x1:n,z1:r}),st={bounds:K(-42,-36,42,36),walk:[K(-12,-9,12,9),{...K(-7,-10,7,-9),floor:`slab`},{...K(-1.5,-10.5,1.5,-10),floor:`slab`,inside:!0},{...K(-6.5,-29.5,6.5,-10.5),floor:`slab`,inside:!0},K(-37,-2.5,-12,2.5),K(12,-3,38.5,3),{...K(-24.5,2.5,-21,31),floor:`dirt`},{...K(-21,26,-13,31),floor:`dirt`},{...K(-30.5,2.5,-29,3),floor:`wood`,inside:!0},{...K(-34.5,3,-25.5,12),floor:`wood`,inside:!0}],buildings:[{id:`home`,rect:K(-35,2.5,-25,12.5),h:5.6,style:`house`,ridge:`x`,tint:0,timber:!0,enterable:!0,ceil:3,doors:[{face:`n`,at:-29.75,w:1.5}],windows:[`n`,`e`]},{id:`teresa`,rect:K(-21,2.5,-12,11),h:5.8,style:`house`,ridge:`x`,tint:1,doors:[{face:`n`,at:-17}],windows:[`n`,`e`,`w`]},{id:`pietro`,rect:K(-35,12.5,-24.5,23),h:5.4,style:`house`,ridge:`z`,tint:2,timber:!0,doors:[{face:`e`,at:18}],windows:[`e`]},{id:`houseB`,rect:K(-35,23,-24.5,32),h:6,style:`house`,ridge:`z`,tint:3,doors:[{face:`e`,at:27}],windows:[`e`]},{id:`houseA1`,rect:K(-21,11,-12,18.5),h:6.4,style:`house`,ridge:`z`,tint:4,timber:!0,doors:[{face:`w`,at:15}],windows:[`w`]},{id:`empty`,rect:K(-21,18.5,-12,26),h:5.6,style:`house`,ridge:`z`,tint:0,doors:[{face:`s`,at:-17},{face:`w`,at:22}],windows:[`w`,`s`]},{id:`houseC`,rect:K(-13,26,-1,32),h:6,style:`stone`,ridge:`x`,windows:[`w`]},{id:`n1`,rect:K(-37,-12,-29,-2.5),h:6,style:`house`,ridge:`x`,tint:2,doors:[{face:`s`,at:-33}],windows:[`s`]},{id:`n2`,rect:K(-29,-13,-20.5,-2.5),h:6.8,style:`house`,ridge:`x`,tint:1,timber:!0,doors:[{face:`s`,at:-25}],windows:[`s`]},{id:`n3`,rect:K(-20.5,-11.5,-12,-2.5),h:5.6,style:`house`,ridge:`x`,tint:3,doors:[{face:`s`,at:-16}],windows:[`s`,`e`]},{id:`canonica`,rect:K(-12,-19,-7,-9),h:5.2,style:`stone`,ridge:`z`,doors:[{face:`s`,at:-9.5}],windows:[`s`]},{id:`church`,rect:K(-7,-30,7,-10),h:9.5,style:`church`,ridge:`z`,enterable:!0,ceil:8.5,doors:[{face:`s`,at:0,w:3}]},{id:`tower`,rect:K(7,-17,12,-9),h:18,style:`tower`,windows:[`s`]},{id:`workshop`,rect:K(12,-14,25,-3),h:6.4,style:`house`,ridge:`x`,tint:4,timber:!0,doors:[{face:`s`,at:19,w:1.8}],windows:[`s`,`w`]},{id:`e1`,rect:K(25,-12,36,-3),h:5.6,style:`house`,ridge:`x`,tint:1,doors:[{face:`s`,at:30}],windows:[`s`]},{id:`e2`,rect:K(12,3,23.5,13),h:6.2,style:`house`,ridge:`x`,tint:0,timber:!0,doors:[{face:`n`,at:17}],windows:[`n`,`w`]},{id:`guard`,rect:K(23.5,3,36,11),h:5,style:`stone`,ridge:`x`,doors:[{face:`n`,at:31}],windows:[`n`]},{id:`tavern`,rect:K(-12,9,0,19),h:6.6,style:`house`,ridge:`x`,tint:3,timber:!0,doors:[{face:`n`,at:-6,w:1.6}],windows:[`n`]},{id:`s2`,rect:K(0,9,12,18),h:5.6,style:`house`,ridge:`x`,tint:2,doors:[{face:`n`,at:6}],windows:[`n`]},{id:`wallN`,rect:K(-39,-33.5,39,-32),h:8,style:`wall`},{id:`wallS`,rect:K(-39,32,39,33.5),h:8,style:`wall`},{id:`wallW`,rect:K(-39,-33.5,-37,33.5),h:8,style:`wall`},{id:`wallE1`,rect:K(38,-33.5,39.5,-3),h:8,style:`wall`},{id:`wallE2`,rect:K(38,3,39.5,33.5),h:8,style:`wall`},{id:`gateT1`,rect:K(36.5,-7,40.5,-3),h:12,style:`tower`},{id:`gateT2`,rect:K(36.5,3,40.5,7),h:12,style:`tower`}],props:[{kind:`well`,x:0,z:.5,solid:[2.5,2.5]},{kind:`notice`,x:10.6,z:-8.6,rot:0},{kind:`barrel`,x:-11,z:7.6,solid:[1,1]},{kind:`barrel`,x:-10,z:8.2,solid:[1,1]},{kind:`crates`,x:11,z:7.8,solid:[1,1.5],untilPhase:3},{kind:`fire`,x:-3.5,z:1.5,fromPhase:2,solid:[1.5,1.5]},{kind:`fire`,x:24,z:0,fromPhase:3,solid:[1.5,1.5]},{kind:`cart`,x:8.5,z:-1.5,rot:.5,fromPhase:2,solid:[2,3]},{kind:`bench`,x:-17,z:2.1,rot:0},{kind:`barrel`,x:-21.6,z:9,solid:[1,1]},{kind:`crates`,x:-24,z:24.5,solid:[1,1.5]},{kind:`handcart`,x:-24,z:15.2,rot:.2,solid:[1,2]},{kind:`laundry`,x:-22.75,z:12,untilPhase:2},{kind:`laundry`,x:-22.75,z:21,untilPhase:3},{kind:`rubbish`,x:-14.5,z:30,fromPhase:1},{kind:`barrel`,x:13,z:-2.4,solid:[1,1]},{kind:`wool`,x:22.5,z:-2.3,solid:[1.5,1],untilPhase:3},{kind:`crates`,x:31.5,z:2.3,solid:[1,1.5]},{kind:`hearth`,x:-26,z:7.5,solid:[1,2]},{kind:`table`,x:-30,z:8,solid:[2,1.5]},{kind:`bed`,x:-33.5,z:10.75,solid:[2,2.5]},{kind:`cot`,x:-26.5,z:11.4,solid:[2,1]},{kind:`chest`,x:-33.9,z:3.5,solid:[1,1]},{kind:`shelf`,x:-27.5,z:3.25},{kind:`altar`,x:0,z:-28.2,solid:[3,1.5]},{kind:`pew`,x:-3.5,z:-14,solid:[3.5,.5]},{kind:`pew`,x:3.5,z:-14,solid:[3.5,.5]},{kind:`pew`,x:-3.5,z:-17,solid:[3.5,.5]},{kind:`pew`,x:3.5,z:-17,solid:[3.5,.5]},{kind:`pew`,x:-3.5,z:-20,solid:[3.5,.5]},{kind:`pew`,x:3.5,z:-20,solid:[3.5,.5]},{kind:`candles`,x:-5.6,z:-26},{kind:`candles`,x:5.6,z:-26},{kind:`body`,x:-13.4,z:2,rot:1.5,fromPhase:2},{kind:`body`,x:-21.6,z:19.5,rot:.1,fromPhase:2},{kind:`body`,x:21,z:2.5,rot:1.6,fromPhase:2},{kind:`body`,x:-31.5,z:-2,rot:1.5,fromPhase:3},{kind:`body`,x:28.5,z:-2.5,rot:1.6,fromPhase:3},{kind:`body`,x:-24,z:28,rot:0,fromPhase:3},{kind:`body`,x:2.5,z:8.4,rot:1.5,fromPhase:3}],stalls:[{id:`beppe`,x:-6,z:-5,face:0,color:11026479,goods:`bread`},{id:`gina`,x:6,z:-5,face:0,color:5073724,goods:`herbs`},{id:`cloth`,x:-6,z:6,face:Math.PI,color:4020864,goods:`cloth`},{id:`veg`,x:6,z:6,face:Math.PI,color:13214011,goods:`veg`}],zones:[{id:`home`,rect:K(-34.5,3,-25.5,12)},{id:`market`,rect:K(-11,-8,11,8)},{id:`church`,rect:K(-6.5,-29.5,6.5,-11.5)},{id:`alley`,rect:K(-24.5,6,-13,31)},{id:`gate`,rect:K(28,-3,38.5,3)},{id:`street`,rect:K(-37,-2.5,-14,2.5)}],waypoints:[{x:-34,z:0},{x:-22.75,z:0},{x:-14,z:0},{x:-9,z:0},{x:0,z:-6.8},{x:9,z:0},{x:0,z:8},{x:20,z:.5},{x:33,z:-.5},{x:-22.75,z:14},{x:-22.75,z:27.5},{x:-17,z:28.5}],links:[[0,1],[1,2],[2,3],[3,4],[4,5],[3,6],[6,5],[5,7],[7,8],[1,9],[9,10],[10,11]],spotPoints:[{x:-24,z:7},{x:-21.5,z:16.5},{x:-24,z:21.5},{x:-19,z:30.3},{x:-14,z:27},{x:-36.3,z:-2},{x:-33,z:2},{x:-11.3,z:-8.3},{x:11.3,z:5},{x:30,z:-2.5},{x:15.5,z:2.5},{x:-6.3,z:-9.6},{x:5.8,z:-12},{x:34.5,z:-2.5},{x:-18.5,z:-2}],spawn:{x:-32.3,z:9.2,yaw:-.93},gate:{x:38.6,z:0}},ct={lucia:{x:-27.6,z:5.4,face:-Math.PI/2},luciaSick:{x:-27.6,z:9.4,face:Math.PI/2},marco:{x:-32,z:6.2,face:Math.PI*.75},marcoSick:{x:-26.5,z:10.35,face:Math.PI/2},pippo:{x:-31,z:5,face:2.4},cat:{x:-27.2,z:7.4},bed:{x:-33.5,z:9.2},pantry:{x:-33.3,z:3.6},beppe:{x:-6,z:-6.4,face:0},gina:{x:6,z:-6.4,face:0},clothVendor:{x:-6,z:7.4,face:Math.PI},vegVendor:{x:6,z:7.4,face:Math.PI},guido:{x:19,z:-2.2,face:0},workshopDoor:{x:19,z:-2.9},priest:{x:0,z:-26,face:0},altar:{x:0,z:-27},teresa:{x:-17,z:1.75,face:Math.PI},teresaDoor:{x:-17,z:2.4},pietro:{x:-23.9,z:18,face:Math.PI/2},pietroDoor:{x:-24.4,z:18},lando:{x:36,z:1.9,face:-Math.PI/2},gate:{x:38.2,z:0},bernardo:{x:4,z:-7.6,face:0},notice:{x:10.6,z:-8.3},well:{x:0,z:2.1},emptyHouse:{x:-17,z:26.2},postern:{x:-36.8,z:0},peddler:{x:-15,z:29.5,face:-2.2},sick1:{x:-21.6,z:23.5,face:.4},sick2:{x:10.8,z:2,face:-1.2},sick3:{x:-13,z:-1.9,face:2}};function lt(e){let t=e.ended,n=P(e),r=F(e),i=N(e),a=[],o=t.how===`fled`;if(t.how===`fledAlone`){a.push(`${R(e,`fledDay`)}日目、あなたは家族を残して門を出た。`),a.push(i.alive?`街道沿いの納屋を渡り歩き、あなたは生き延びた。`:`逃げた先の納屋で、あなたは誰にも看取られずに死んだ。`);let t=[n,r].filter(e=>e.alive);return t.length===2?a.push(`ルチアとマルコは、あなたのいない家で、十四日を生き抜いた。マルコは毎晩、戸口であなたの帰りを待っていたという。`):t.length===1?a.push(`${t[0].name}だけが、あの家で生き残った。${t[0].id===`marco`?`八つの子が、母の亡骸のそばで、三日を過ごした。`:`彼女は、ひとりでマルコを埋めた。`}`):a.push(`ルチアとマルコは、あの家で死んだ。最後に誰が誰を看取ったのか、あなたが知ることはない。`),a.push(`あのとき門をくぐらなければ、何かが変わっただろうか。`),a}o&&a.push(`${R(e,`fledDay`)}日目、あなたは家族を連れて町を出た。`),R(e,`refusedEntry`)&&a.push(`病人を連れた一家を、村は受け入れなかった。炭焼き小屋が、あなたたちの家になった。`),R(e,`farmDead`)&&a.push(`頼った農場には、すでに病が来ていた。`),R(e,`farmOk`)&&a.push(`ルチアの兄の農場で、畑を手伝いながら日々を数えた。`);for(let e of[n,r])e.alive||a.push(`${e.deathDay}日目、${e.name}が${e.deathCause}で亡くなった。${e.id===`marco`?`八つだった。`:``}`);for(let e of[n,r])e.alive&&e.immune&&a.push(`${e.name}は病に倒れたが、峠を越えた。`);switch(i.alive?i.immune&&a.push(`あなた自身も病に倒れ、そして生き延びた。`):a.push(`${i.deathDay}日目、あなたは${i.deathCause}で息を引き取った。`),t.code){case`A`:a.push(o?`十四日目の朝。丘の農場の納屋で、三人は同じ毛布にくるまって目を覚ました。`:`十四日目の朝。食卓には今日も、三つの椀が並んだ。`,`病はまだ去っていない。それでも、今朝は三人でいる。`);break;case`B`:a.push(`十四日が過ぎた。食卓の椀は、ひとつ減った。`,`${(n.alive?n:r).name}は、あなたの袖を握ったまま眠っている。この手だけは、離さない。`);break;case`C`:a.push(`十四日が過ぎた。家の中には、あなたの息の音しかしない。`,`軒下で、ツバメのヒナが鳴いている。マルコが見つけた巣だ。`);break;case`D`:{let e=[n,r].filter(e=>e.alive);a.push(e.length===2?`あなたの亡きあと、ルチアはマルコの手を引いて、十四日を生き抜いた。`:e[0].id===`marco`?`マルコは、ひとり生き残った。八つの子のこれからを、あなたは見届けられない。`:`ルチアだけが生き残った。彼女は、二つの墓の前に長いこと立っていた。`),a.push(`あなたが残したパンと、あなたが下した選択が、その命をつないだ。`);break}case`E`:a.push(`西の通りの小さな家の戸に、板が打たれた。`,`軒下のツバメだけが、何も知らずに巣立っていった。`)}return R(e,`promiseSea`)&&t.code===`A`&&a.push(`いつか三人で、海を見に行こう。あの夜の約束は、まだ生きている。`),e.sc.home.guest&&(t.code===`A`||t.code===`B`)&&a.push(`ピッポは、マルコの隣で眠っている。もう、うちの子だ。`),a}function ut(e){let t=[],n=t=>e.stats[t]??0,r=[N(e),P(e),F(e)];for(let e of r){let r=e.illness;r?t.push(`${e.id===`player`?`あなた`:e.name}の感染のいちばんの原因は「${r.cause}」（${r.causeDay}日目ごろ）だったと考えられる。${r.kind===`pneumonic`?`咳の飛沫でうつる肺の病で、助かる見込みはほとんどなかった。`:``}`):e.immune&&t.push(`${e.id===`player`?`あなた`:e.name}は発症したが、回復した。${n(`nursed`)?`付き添いと看病が、体力を支えた。`:``}`)}return!n(`cleaned`)&&e.sc.home.infest>50&&t.push(`家のネズミとノミは増え続けていた。掃除や寝具の洗濯は、一度もしなかった。`),n(`cleaned`)>=2&&t.push(`家の掃除と洗濯を${n(`cleaned`)}回した。当時の人は「悪い空気を払う」ためにそうしたが、結果としてノミやシラミを減らしていた。`),n(`hoard`)>=3&&t.push(`食料を多く蓄えたことで飢えは遠ざかったが、ネズミを家に呼び込んでもいた。`),n(`hungryNights`)>=2&&t.push(`食料が足りない夜が${n(`hungryNights`)}回あった。飢えは体力を奪い、病と闘う力を弱めた。`),[P(e),F(e)].filter(e=>!e.alive&&e.illness).length&&!n(`nursed`)&&t.push(`家族が発症してから、看病に時間を割くことはなかった。`),n(`becchino`)&&t.push(`亡骸を運ぶ仕事を${n(`becchino`)}回請けた。高い日当と引き換えの、最も危険な仕事だった。`),n(`looted`)&&t.push(`死者の出た空き家を${n(`looted`)}回物色した。食料は手に入ったが、寝具や衣類のノミも一緒に持ち帰った。`),R(e,`theriac`)&&t.push(`テリアカに15ソルドを払った。心は少し軽くなったが、病には効かなかった。`),e.ended.how===`stayed`&&R(e,`fleePlan`)===2&&t.push(`ルチアは町を出たいと言った。あなたは、留まることを選んだ。`),e.ended.how===`fled`&&t.push(`町を出たのは${R(e,`fledDay`)}日目。${R(e,`fledDay`)<=e.sc.town.onset+3?`早い決断だった。`:`門が閉まるか閉まらないかの、遅い決断だった。`}${R(e,`knowFarm`)?``:`町の外の様子を、確かめないままの出発だった。`}`),n(`helped`)>=3&&t.push(`あなたは${n(`helped`)}度、他人のために手を止めた。それが報われたかどうかは、また別の話だ。`),n(`worked`)<=1&&e.ended.day>=6&&t.push(`工房で働いたのは、ほとんど最初だけだった。稼ぎのない日々は、食卓を細らせた。`),P(e).bond>=80&&F(e).bond>=80&&t.push(`忙しい日々の中でも、あなたは家族と話し、遊ぶ時間を手放さなかった。`),P(e).bond<35&&t.push(`ルチアとのあいだには、最後まで溝があった。`),t.length<2&&t.push(`打てる手を打っても、最後は運に左右される。それが、この時代を生きるということだった。`),t.slice(0,8)}function dt(e){let t=[{tag:`史実`,text:`黒死病は1347年秋にシチリアのメッシーナへ、1348年初めにピサやジェノヴァへ達し、春にはトスカーナの内陸へ広がった。`},{tag:`研究・推定`,text:`数年のうちにヨーロッパの人口の3〜5割が失われたとされる（6割近いとする推計もある）。フィレンツェでは住民の半数以上が死亡したと見積もられている。`},{tag:`史実`,text:`原因はペスト菌（Yersinia pestis）。当時の人々は、腐った空気（瘴気）、星の巡り、神の怒りによって説明した。菌が見つかるのは1894年のことである。`},{tag:`研究・推定`,text:`感染は、ネズミとそのノミが運ぶ腺ペストが主だと考えられてきたが、近年はヒトノミやコロモジラミの役割を重く見る研究もあり、議論が続いている。肺ペストは咳の飛沫で人から人へうつる。このゲームでは、これらを単純化して扱った。`},{tag:`史実`,text:`腺ペストは治療なしでおよそ半数が、肺ペストはほぼ全員が死亡する。効く薬（抗菌薬）が現れるのは20世紀である。`},{tag:`創作`,text:`看病・掃除・猫などが生死を左右する度合いは、ゲームのための設定である。水・食事・安静が体力を支えること自体はもっともらしいが、当時の看病が死亡率をどれほど変えたかは分かっていない。`}];return e.sc.town.phase>=1&&t.push({tag:`史実`,text:`ピストイアの町は1348年5月、ピサやルッカからの入市の禁止、古着の持ち込みの禁止、葬儀の制限などを定めた。作中の触れ書きは、この条例を下敷きにしている。`}),(e.stats.becchino||e.ended.how!==`stayed`||e.sc.town.phase>=2)&&t.push({tag:`史実`,text:`ボッカッチョは『デカメロン』の序で、裕福な者が郊外へ逃れ、親が子を、妻が夫を見捨て、「ベッキーニ」と呼ばれる遺体運びが高い報酬で雇われた様子を記している。`}),(R(e,`theriac`)||e.ended.how!==`stayed`)&&t.push({tag:`史実`,text:`テリアカは古代から伝わる高価な万能薬だが、ペストには効かなかった。医師たちの最も確かな助言は「速く逃げ、遠くへ行き、遅く帰れ」だったと言われる。`}),e.seen.scapegoat&&t.push({tag:`史実`,text:`流行のさなか、よそ者や物乞い、そして各地でユダヤ人が「井戸に毒を入れた」と疑われ、迫害と虐殺が起きた。教皇クレメンス6世は1348年、この疑いを否定する勅書を出している。`}),(V(e,`priest`).st===`dead`||e.seen.procession)&&t.push({tag:`史実`,text:`病人を見舞う聖職者の死亡率は高く、臨終の秘跡を授ける司祭が足りなくなった土地もあった。`}),t.push({tag:`創作`,text:`カステルヴェントの町と登場人物は架空である。14日間という長さもゲームの区切りで、実際の流行は一つの町で数か月続いた。`}),t}function ft(e){let t=e.ended;t.story=lt(e);let n=N(e),r=[...e.dangers].sort((e,t)=>t.amount-e.amount),i=e=>e.alive?e.immune?`発症したが回復し、生存`:`生存`:`${e.deathDay}日目に死亡（${e.deathCause}）`;return{ending:t,days:Math.min(14,n.alive?14:n.deathDay??t.day),rows:[{label:`生き延びた日数`,value:`${n.alive?14:Math.min(14,n.deathDay??1)}日 / 14日`},{label:`あなた`,value:i(n)},{label:`最後の所持金`,value:`${e.money}ソルド`},{label:`最後の食料`,value:`${Math.round(e.food)}食`}],family:[P(e),F(e)].map(e=>({name:e.name,fate:i(e),alive:e.alive})),choices:e.journal.filter(e=>e.key).map(e=>`${e.day}日目：${e.text}`).slice(-12),danger:r.length?`${r[0].day}日目：${r[0].text}`:`大きな危険には遭わなかった`,reflections:ut(e),history:dt(e),seed:e.seed}}var pt={};for(let e of[...$e,...ot])pt[e.id]=e;pt.cat_pet={id:`cat_pet`,title:`ネーロ`,text:`ネーロは片目だけ開けてあなたを見ると、また喉を鳴らしはじめた。`,choices:[{label:`なでる`,run:e=>{R(e,`catDay`)!==e.day&&(z(e,`catDay`,e.day),U(N(e),`morale`,2))}}]},tt((e,t)=>{se(pt,e,t)});var mt={beppe:`mk`,gina:`mk`,beppeDoor:`bd`,peddler:`pd`},ht=(e,t,n)=>R(e,`bd_${t}_${n}`)===e.day?R(e,`bc_${t}_${n}`):0;function gt(e,t){let n=e.sc.town,r=(n,r,i,a,o,s=`個`)=>({key:n,name:r,desc:i,price:a,stock:Math.max(0,o-ht(e,t,n)),unit:s}),i=`黒パン・豆・粉。一人が一日に一食ぶん食べる。`,a=`薪・ろうそく・灰汁。二日に一つ減る。掃除と洗濯にも使う。`,o=R(e,`shopDay_`+mt[t])===e.day?``:`その日最初の買い物に、時間を1使う。`;return t===`beppe`?{id:t,name:`穀物の露店`,keeper:`ベッペ`,note:o,items:[{key:`food`,name:`食料`,desc:i,price:n.price,stock:n.stock,unit:`食`}]}:t===`beppeDoor`?{id:t,name:`ベッペの家`,keeper:`ベッペ`,note:o,items:[r(`food`,`食料`,i,Math.ceil(n.price*1.3),3,`食`)]}:t===`gina`?{id:t,name:`薬草と荒物の露店`,keeper:`ジーナ`,note:o,items:[r(`supplies`,`生活用品`,a,3+n.phase,4),r(`remedies`,`薬草`,`柳の皮・セージ。看病のとき、熱と痛みを少し和らげる。病そのものは治せない。`,5+n.phase,3)]}:{id:t,name:`行商人の荷`,keeper:`行商人`,note:o,items:[r(`food`,`食料`,i,5,3,`食`),r(`supplies`,`生活用品`,a,4,2)]}}function _t(e,t,n){let r=gt(e,t).items.find(e=>e.key===n);if(!r)return`売っていない`;if(r.stock<=0)return`売り切れだ`;if(e.money<r.price)return`お金が足りない`;let i=`shopDay_`+mt[t];if(R(e,i)!==e.day){if(e.time<1)return`今日はもう時間がない`;--e.time,z(e,i,e.day),(t===`beppe`||t===`beppeDoor`)&&V(e,`beppe`).rel++,(t===`beppe`||t===`gina`)&&Oe(e,`player`,.03*e.sc.town.prev,`flea`,`市場の人混みと穀物の荷`)}return e.money-=r.price,n===`food`?e.food++:n===`supplies`?e.supplies++:e.remedies++,t===`beppe`?e.sc.town.stock--:(z(e,`bc_${t}_${n}`,ht(e,t,n)+1),z(e,`bd_${t}_${n}`,e.day)),e.stats.bought=(e.stats.bought??0)+1,null}var vt={lucia:`lucia`,marco:`marco`,pippo:`pippo`,cat:`cat_pet`,beppe:`beppe`,gina:`gina`,guido:`guido`,priest:`priest`,teresa:`teresa`,pietro:`pietro`,lando:`lando`,bernardo:`bernardo`,peddler:`peddler`,clothVendor:`vendor`,vegVendor:`vendor`,sick1:`stranger`,sick2:`stranger`,sick3:`stranger`},yt={bed:`bed`,pantry:`pantry`,notice:`notice`,well:`well`,workshopDoor:`workshop_door`,altar:`altar`,teresaDoor:`teresa_door`,pietroDoor:`pietro_door`,gate:`gate`,emptyHouse:`empty_house`,postern:`postern`,beppeDoor:`beppe_door`};function bt(e,t){return e.ctx=t,t.startsWith(`folk`)?`folk`:t.startsWith(`sp`)?e.spots.some(e=>e.id===t&&!e.taken)?`pickup`:null:vt[t]??yt[t]??null}function xt(e,t){if(e.ended)return;let n;if(t===`home`)return e.time<=3&&!e.zonesToday.includes(`homeEve`)&&(e.zonesToday.push(`homeEve`),se(pt,e,`zone:homeEve`,1),e.queue.length||(n=F(e).alive&&!I(F(e))?`マルコ｜「おかえり、父さん！」`:P(e).alive&&!I(P(e))?`ルチア｜「おかえりなさい。無事でよかった」`:void 0)),n;e.zonesToday.includes(t)||(e.zonesToday.push(t),se(pt,e,`zone:`+t,1))}var St=[[],[],[`n2`,`e1`],[`n2`,`e1`,`n1`,`houseB`,`tavern`,`houseA1`,`e2`]];function Ct(e){let t=e.sc.town,n=e.sc.npcs,r=ct,i=[],a=[],o=(e,t,n,r={})=>i.push({id:e,label:t,look:e,x:n.x,z:n.z,face:n.face??0,pose:`stand`,talk:!0,...r}),s=(e,t,n,r,i=`fixed`)=>a.push({id:e,kind:i,label:t,verb:n,x:r.x,z:r.z}),c=P(e),l=F(e);c.alive&&(I(c)?o(`lucia`,`ルチア`,r.luciaSick,{pose:`lie`}):o(`lucia`,`ルチア`,r.lucia)),l.alive&&(I(l)?o(`marco`,`マルコ`,r.marcoSick,{pose:`lie`}):o(`marco`,`マルコ`,r.marco)),e.sc.home.guest&&o(`pippo`,`ピッポ`,r.pippo),e.sc.home.cat&&o(`cat`,`ネーロ`,r.cat,{pose:`sit`}),t.marketOpen&&n.beppe.st===`ok`&&o(`beppe`,`穀物売りのベッペ`,r.beppe),t.marketOpen&&n.gina.st===`ok`&&o(`gina`,`薬草売りのジーナ`,r.gina),t.phase===0&&o(`clothVendor`,`布売り`,r.clothVendor),t.phase<=1&&t.marketOpen&&o(`vegVendor`,`青物売り`,r.vegVendor),n.guido.st===`ok`?o(`guido`,`グイド親方`,r.guido):s(`workshopDoor`,`工房の戸`,`調べる`,r.workshopDoor),n.priest.st===`ok`?o(`priest`,`ドン・アンセルモ司祭`,r.priest):s(`altar`,`祭壇`,`祈る`,r.altar),n.teresa.st===`ok`?o(`teresa`,`隣人テレーザ`,r.teresa,{pose:`sit`}):s(`teresaDoor`,`テレーザの家`,`調べる`,r.teresaDoor),n.pietro.st===`ok`?o(`pietro`,`石工ピエトロ`,r.pietro):s(`pietroDoor`,`ピエトロの家`,`調べる`,r.pietroDoor),n.lando.st===`ok`?o(`lando`,`門番ランド`,r.lando):s(`gate`,`町の門`,`調べる`,r.gate),n.bernardo.st===`ok`&&e.day>=t.onset&&o(`bernardo`,`医師ベルナルド`,r.bernardo),R(e,`savedPeddler`)&&!t.marketOpen&&o(`peddler`,`行商人`,r.peddler),t.phase>=1&&t.phase<=2&&o(`sick1`,`病人`,r.sick1,{pose:`lie`}),t.phase>=2&&o(`sick2`,`病人`,r.sick2,{pose:`lie`}),t.phase>=3&&o(`sick3`,`病人`,r.sick3,{pose:`lie`});let u=[7,5,3,1][t.phase];for(let e=1;e<=u;e++)i.push({id:`folk`+e,label:`町の人`,look:`folk`+e,x:0,z:0,face:0,pose:`stand`,wander:!0,talk:!0});s(`bed`,`寝床`,`休む`,r.bed),s(`pantry`,`食料棚`,`調べる`,r.pantry),s(`notice`,`掲示`,`読む`,r.notice),s(`well`,`井戸`,`調べる`,r.well),s(`postern`,`西の通用門`,`調べる`,r.postern),t.phase>=2&&s(`emptyHouse`,`空き家`,`調べる`,r.emptyHouse),t.marketOpen||s(`beppeDoor`,`ベッペの家`,`戸を叩く`,{x:6,z:8.6});let d={wood:`薪の束`,coins:`光る物`,herbs:`薬草`,basket:`倒れた籠`,bundle:`布の包み`};for(let t of e.spots)if(!t.taken){let e=st.spotPoints[t.at];a.push({id:t.id,kind:t.kind,label:d[t.kind],verb:`調べる`,x:e.x,z:e.z,marker:!0})}let f=[...St[t.phase]];return n.teresa.st===`dead`&&f.push(`teresa`),n.pietro.st===`dead`&&f.push(`pietro`),n.guido.st!==`ok`&&f.push(`workshop`),n.beppe.st===`dead`&&f.push(`s2`),{phase:t.phase,dusk:1-e.time/Math.max(1,e.maxTime),npcs:i,spots:a,boarded:f,stalls:{beppe:t.marketOpen&&n.beppe.st===`ok`?t.stock>5?`open`:`sparse`:`closed`,gina:t.marketOpen&&n.gina.st===`ok`?`open`:`closed`,cloth:t.phase===0?`open`:`closed`,veg:!t.marketOpen||t.phase>=2?`closed`:t.phase===1?`sparse`:`open`},bodies:[0,0,3,6][t.phase],fires:t.phase>=2,gateClosed:e.day>=t.gateCloseDay,bustle:[1,.65,.3,.06][t.phase]}}var wt=[`朝`,`午前`,`昼`,`午後`,`夕方`,`夕暮れ`,`夜`];function Tt(e){return wt[Math.min(6,Math.round((1-e.time/e.maxTime)*6))]}function Et(e){let t=e.sc.town;if(e.time<=0)return`日が暮れた。家に戻り、寝床で一日を終えよう`;if(I(N(e)))return`熱がある。寝床で横になるか、出来ることを選ぼう`;if(ye(e).some(I)&&R(e,`nursedDay`)!==e.day)return`家族が病に伏せている。話しかけて看病できる`;if(e.day===1){if(!e.stats.bought)return`東の広場の市場で、ベッペから食料を買おう`;if(!e.stats.worked)return`広場の東、グイド親方の工房で働いて稼ごう`}return e.food<xe(e)?`今夜の食料が足りない`:e.food<xe(e)*2?t.marketOpen?`食料が残りわずか。市場で買い足そう`:`食料が残りわずか。教会の施しや、路地を当たろう`:R(e,`fleePlan`)===1?`町を出るなら、東の門へ`:`今日の残り時間で、何をするか決めよう（あと${e.time}刻）`}function Dt(e){let t=N(e);return I(t)?{text:t.health<35?`危篤`:`高熱`,tone:`bad`}:t.health<40?{text:`衰弱`,tone:`bad`}:t.satiety<35?{text:`空腹`,tone:`warn`}:e.fatigue>=50?{text:`疲れが抜けない`,tone:`warn`}:e.stamina<25?{text:`疲労`,tone:`warn`}:t.morale<25?{text:`気力がない`,tone:`warn`}:{text:`良好`,tone:`ok`}}function Ot(e){return ye(e).map(e=>{let t=`元気`,n=`ok`,r=``;return e.alive?I(e)?(t=e.health<35?`危篤`:`高熱で伏せている`,n=`bad`,r=e.illness.kind===`pneumonic`?`咳をして血を吐く`:`体に硬い腫れ物がある`):e.immune?(t=`病から回復した`,n=`ok`):e.satiety<35?(t=`空腹`,n=`warn`):e.health<50?(t=`弱っている`,n=`warn`):e.morale<25&&(t=`ふさぎ込んでいる`,n=`warn`):(t=`${e.deathDay}日目に死去`,n=`dead`,r=e.deathCause??``),{name:e.name,id:e.id,alive:e.alive,state:t,tone:n,health:e.health,satiety:e.satiety,morale:e.morale,bond:e.bond,note:r}})}function kt(e){let t=[{name:`所持金`,count:`${e.money}ソルド`,desc:`銀貨。工房の日当は7〜9ソルドほど。`},{name:`食料`,count:`${e.food}食`,desc:`黒パン・豆・粉。いまは一日に${xe(e)}食ぶん減る。溜め込みすぎるとネズミが寄る。`},{name:`生活用品`,count:`${e.supplies}`,desc:`薪・ろうそく・灰汁。二日に一つ減る。食料棚で家の掃除と洗濯に使える。`},{name:`薬草`,count:`${e.remedies}`,desc:`柳の皮やセージ。看病のときに使うと、熱と痛みを少し和らげる。`}];return R(e,`hasCart`)&&t.push({name:`手押し車`,count:`1`,desc:`石工の荷車。荷や、歩けない家族を運べる。`}),R(e,`theriac`)&&t.push({name:`テリアカ`,count:`1壺`,desc:`医師から買った万能の解毒薬。毎朝、葡萄酒に溶いて飲む。`}),e.sc.home.cat&&t.push({name:`黒猫ネーロ`,count:``,desc:`マルコが拾ってきた猫。台所でよくネズミを追っている。`}),t}var At={id:`blackdeath`,title:`黒死病`,subtitle:`1348年、イタリア`,totalDays:14,intro:[`あなたは英雄でも、貴族でもない。`,`丘の町で、家族と暮らす、ひとりの職人だ。`,`十四日間、生き延びよ。`],map:st,cast:_e,encounters:pt,newGame:e=>{let t=Te(e);return t.queue.push(`morning`),t},interact:bt,enterZone:xt,worldView:Ct,shop:gt,buy:_t,dateLabel:e=>`1348年 春・${Math.min(e.day,14)}日目`,timeLabel:Tt,hint:Et,selfState:Dt,familyRows:Ot,items:kt,result:e=>ft(e)},jt=0,Mt=e=>JSON.parse(JSON.stringify(e)),Nt=w((e,t)=>{let n=n=>{let r=Mt(t().s),i=n(r);return e({s:r}),r.ended||ue(r,t().engine?.getPose()??null),i},r=(r,i,a=!1,o)=>{e({scene:{kind:`enc`,view:n(e=>ae(At.encounters,e,r)),target:i,fromQueue:a,menu:o},prompt:null}),i&&t().engine?.focus(i)},i=()=>{let{s:e,scene:n,screen:i}=t();e&&!n&&i===`play`&&(e.ended?a():e.queue.length&&r(e.queue[0],void 0,!0))},a=()=>{let n=t().s,r=At.result(n);fe(),v.bell(),e({screen:`result`,result:r,scene:null,menu:null,hasSave:!1})},o=n=>{let o=t().s;o.ended?(e({scene:null}),a()):o.day===n.dayFrom?n.next?.startsWith(`shop:`)?e({scene:{kind:`shop`,view:At.shop(o,n.next.slice(5)),msg:``}}):n.next?r(n.next,n.menu?.target,!1,n.menu):(e({scene:null}),n.reopen&&n.menu&&!o.queue.length?r(n.menu.id,n.menu.target,!1,n.menu):i()):(v.bell(),e({scene:{kind:`day`,day:o.day,report:o.report}}))};return{screen:`title`,s:null,scene:null,prompt:null,toast:null,menu:null,result:null,settings:me(),hasSave:!!de(),engine:null,setEngine:t=>e({engine:t}),newGame:n=>{let r=At.newGame(n?.trim()||j()),i=At.map.spawn;t().engine?.place(i.x,i.z,i.yaw),e({s:r,screen:`play`,scene:{kind:`intro`},result:null,menu:null,prompt:null}),ue(r,null)},continueGame:()=>{let n=de();if(!n)return;let r=n.pos??At.map.spawn;t().engine?.place(r.x,r.z,r.yaw),e({s:n.s,screen:`play`,scene:null,result:null,menu:null}),i()},toTitle:()=>e({screen:`title`,scene:null,menu:null,s:null,prompt:null,hasSave:!!de()}),interact:()=>{let{prompt:e,scene:i,menu:a,screen:o,s}=t();if(!e||i||a||o!==`play`||!s)return;let c=n(t=>At.interact(t,e.id));c&&(v.click(),r(c,e.id,!1,At.encounters[c].speaker?{id:c,target:e.id}:void 0))},enterZone:e=>{let{s:r,screen:a}=t();if(!r||a!==`play`||r.ended)return;let o=n(t=>At.enterZone(t,e));o&&t().showToast(o),i()},choose:r=>{let i=t().scene;if(!i||i.kind!==`enc`)return;let a=t().s.day,s=i.view.choices.find(e=>e.idx===r)?.tag,c=t().s.money,l=n(e=>(i.fromQueue&&e.queue[0]===i.view.id&&e.queue.shift(),oe(At.encounters,e,i.view.id,r)));t().s.money>c?v.coin():v.click();let u={next:l.next,dayFrom:a,menu:i.menu,reopen:!!i.menu&&s!==`leave`&&!l.next};l.lines.length?e({scene:{kind:`lines`,lines:l.lines,title:i.view.title,then:u}}):o(u)},closeLines:()=>{let e=t().scene;e?.kind===`lines`&&o(e.then)},closeDay:()=>{let n=At.map.spawn;t().engine?.place(n.x,n.z,n.yaw),e({scene:null}),i()},closeIntro:()=>{e({scene:null}),i()},buy:r=>{let i=t().scene;if(i?.kind!==`shop`)return;let a=n(e=>At.buy(e,i.view.id,r));a||v.coin(),e({scene:{kind:`shop`,view:At.shop(t().s,i.view.id),msg:a??``}})},closeShop:()=>{e({scene:null}),i()},setPrompt:t=>e({prompt:t}),setMenu:n=>{t().screen!==`play`||t().scene&&n!==null||e({menu:n})},setSettings:n=>{let r={...t().settings,...n};he(r),e({settings:r})},showToast:t=>{e({toast:t}),clearTimeout(jt),jt=window.setTimeout(()=>e({toast:null}),3600)}}}),Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut=1e3,Wt=1001,Gt=1002,Kt=1003,qt=1004,Jt=1005,Yt=1006,Xt=1007,Zt=1008,Qt=1009,$t=1010,en=1011,tn=1012,nn=1013,rn=1014,an=1015,on=1016,sn=1017,cn=1018,ln=1020,un=35902,dn=35899,fn=1021,pn=1022,mn=1023,hn=1026,gn=1027,_n=1028,vn=1029,yn=1030,bn=1031,xn=1033,Sn=33776,Cn=33777,wn=33778,Tn=33779,En=35840,Dn=35841,On=35842,kn=35843,An=36196,jn=37492,Mn=37496,Nn=37488,Pn=37489,Fn=37490,In=37491,Ln=37808,Rn=37809,zn=37810,Bn=37811,Vn=37812,Hn=37813,Un=37814,Wn=37815,Gn=37816,Kn=37817,qn=37818,Jn=37819,Yn=37820,Xn=37821,Zn=36492,Qn=36494,$n=36495,er=36283,tr=36284,nr=36285,rr=36286,ir=2300,ar=2301,or=2302,sr=2303,cr=2400,lr=2401,ur=2402,dr=3200,fr=`srgb`,pr=`srgb-linear`,mr=`linear`,hr=`srgb`,gr=7680,_r=35044,vr=2e3;function yr(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function br(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function xr(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Sr(){let e=xr(`canvas`);return e.style.display=`block`,e}var Cr={};function wr(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Tr(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function q(...e){e=Tr(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function J(...e){e=Tr(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Er(...e){let t=e.join(` `);t in Cr||(Cr[t]=!0,q(...e))}function Dr(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Or={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},kr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Ar=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),jr=Math.PI/180,Mr=180/Math.PI;function Nr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ar[e&255]+Ar[e>>8&255]+Ar[e>>16&255]+Ar[e>>24&255]+`-`+Ar[t&255]+Ar[t>>8&255]+`-`+Ar[t>>16&15|64]+Ar[t>>24&255]+`-`+Ar[n&63|128]+Ar[n>>8&255]+`-`+Ar[n>>16&255]+Ar[n>>24&255]+Ar[r&255]+Ar[r>>8&255]+Ar[r>>16&255]+Ar[r>>24&255]).toLowerCase()}function Pr(e,t,n){return Math.max(t,Math.min(n,e))}function Fr(e,t){return(e%t+t)%t}function Ir(e,t,n){return(1-n)*e+n*t}function Lr(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Rr(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zr(e,t){if(t.constructor===Float32Array)return e;let n=Rr(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Br(e,t){if(t.constructor===Float32Array)return e;let n=Rr(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}Bt=Symbol.iterator;var Vr=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pr(this.x,e.x,t.x),this.y=Pr(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pr(this.x,e,t),this.y=Pr(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Bt](){yield this.x,yield this.y}};Pt=Vr,Pt.prototype.isVector2=!0;var Hr=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:q(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pr(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};Vt=Symbol.iterator;var Y=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wr.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pr(this.x,e.x,t.x),this.y=Pr(this.y,e.y,t.y),this.z=Pr(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pr(this.x,e,t),this.y=Pr(this.y,e,t),this.z=Pr(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ur.copy(this).projectOnVector(e),this.sub(Ur)}reflect(e){return this.sub(Ur.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Vt](){yield this.x,yield this.y,yield this.z}};Ft=Y,Ft.prototype.isVector3=!0;var Ur=new Y,Wr=new Hr,Gr=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Er(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Kr.makeScale(e,t)),this}rotate(e){return Er(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Kr.makeRotation(-e)),this}translate(e,t){return Er(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};It=Gr,It.prototype.isMatrix3=!0;var Kr=new Gr,qr=new Gr().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jr=new Gr().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yr(){let e={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Zr(e.r),e.g=Zr(e.g),e.b=Zr(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Qr(e.r),e.g=Qr(e.g),e.b=Qr(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?mr:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[pr]:{primaries:t,whitePoint:r,transfer:mr,toXYZ:qr,fromXYZ:Jr,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fr},outputColorSpaceConfig:{drawingBufferColorSpace:fr}},[fr]:{primaries:t,whitePoint:r,transfer:hr,toXYZ:qr,fromXYZ:Jr,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fr}}}),e}var Xr=Yr();function Zr(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Qr(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var $r,ei=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$r===void 0&&($r=xr(`canvas`)),$r.width=e.width,$r.height=e.height;let t=$r.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=$r}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=xr(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Zr(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Zr(t[e]/255)*255):t[e]=Zr(t[e]);return{data:t,width:e.width,height:e.height}}return q(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},ti=0,ni=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ti++}),this.uuid=Nr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(ri(r[t].image)):e.push(ri(r[t]))}else e=ri(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function ri(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?ei.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(q(`Texture: Unable to serialize Texture.`),{})}var ii=0,ai=new Y,oi=class e extends kr{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Wt,i=Wt,a=Yt,o=Zt,s=mn,c=Qt,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ii++}),this.uuid=Nr(),this.name=``,this.source=new ni(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Vr(0,0),this.repeat=new Vr(1,1),this.center=new Vr(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gr,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ai).x}get height(){return this.source.getSize(ai).y}get depth(){return this.source.getSize(ai).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){q(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?q(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ut:e.x-=Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case Gt:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ut:e.y-=Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case Gt:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};oi.DEFAULT_IMAGE=null,oi.DEFAULT_MAPPING=300,oi.DEFAULT_ANISOTROPY=1,Ht=Symbol.iterator;var si=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pr(this.x,e.x,t.x),this.y=Pr(this.y,e.y,t.y),this.z=Pr(this.z,e.z,t.z),this.w=Pr(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pr(this.x,e,t),this.y=Pr(this.y,e,t),this.z=Pr(this.z,e,t),this.w=Pr(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Ht](){yield this.x,yield this.y,yield this.z,yield this.w}};Lt=si,Lt.prototype.isVector4=!0;var ci=class extends kr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new si(0,0,e,t),this.scissorTest=!1,this.viewport=new si(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new oi({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new ni(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},li=class extends ci{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ui=class extends oi{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},di=class extends oi{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},fi=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/pi.setFromMatrixColumn(e,0).length(),i=1/pi.setFromMatrixColumn(e,1).length(),a=1/pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hi,e,gi)}lookAt(e,t,n){let r=this.elements;return yi.subVectors(e,t),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),_i.crossVectors(n,yi),_i.lengthSq()===0&&(Math.abs(n.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),_i.crossVectors(n,yi)),_i.normalize(),vi.crossVectors(yi,_i),r[0]=_i.x,r[4]=vi.x,r[8]=yi.x,r[1]=_i.y,r[5]=vi.y,r[9]=yi.y,r[2]=_i.z,r[6]=vi.z,r[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],ne=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*ne,i[12]=a*w+o*O+s*ee+c*re,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*ne,i[13]=l*w+u*O+d*ee+f*re,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*ne,i[14]=p*w+m*O+h*ee+g*re,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*ne,i[15]=_*w+v*O+y*ee+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=pi.set(r[0],r[1],r[2]).length(),o=pi.set(r[4],r[5],r[6]).length(),s=pi.set(r[8],r[9],r[10]).length();i<0&&(a=-a),mi.copy(this);let c=1/a,l=1/o,u=1/s;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=l,mi.elements[5]*=l,mi.elements[6]*=l,mi.elements[8]*=u,mi.elements[9]*=u,mi.elements[10]*=u,t.setFromRotationMatrix(mi),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=vr,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=vr,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Rt=fi,Rt.prototype.isMatrix4=!0;var pi=new Y,mi=new fi,hi=new Y(0,0,0),gi=new Y(1,1,1),_i=new Y,vi=new Y,yi=new Y,bi=new fi,xi=new Hr,Si=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Pr(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Pr(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Pr(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Pr(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Pr(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Pr(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:q(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bi.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bi,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xi.setFromEuler(this),this.setFromQuaternion(xi,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER=`XYZ`;var Ci=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},wi=0,Ti=new Y,Ei=new Hr,Di=new fi,Oi=new Y,ki=new Y,Ai=new Y,ji=new Hr,Mi=new Y(1,0,0),Ni=new Y(0,1,0),Pi=new Y(0,0,1),Fi={type:`added`},Ii={type:`removed`},Li={type:`childadded`,child:null},Ri={type:`childremoved`,child:null},zi=class e extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wi++}),this.uuid=Nr(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Y,n=new Si,r=new Hr,i=new Y(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fi},normalMatrix:{value:new Gr}}),this.matrix=new fi,this.matrixWorld=new fi,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ci,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(Mi,e)}rotateY(e){return this.rotateOnAxis(Ni,e)}rotateZ(e){return this.rotateOnAxis(Pi,e)}translateOnAxis(e,t){return Ti.copy(e).applyQuaternion(this.quaternion),this.position.add(Ti.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mi,e)}translateY(e){return this.translateOnAxis(Ni,e)}translateZ(e){return this.translateOnAxis(Pi,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oi.copy(e):Oi.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ki,Oi,this.up):Di.lookAt(Oi,ki,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),Ei.setFromRotationMatrix(Di),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(J(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fi),Li.child=e,this.dispatchEvent(Li),Li.child=null):J(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ii),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fi),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,e,Ai),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,ji,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};zi.DEFAULT_UP=new Y(0,1,0),zi.DEFAULT_MATRIX_AUTO_UPDATE=!0,zi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bi=class extends zi{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Vi={type:`move`},Hi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vi)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ui={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Gi={h:0,s:0,l:0};function Ki(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var qi=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xr.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Xr.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xr.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Xr.workingColorSpace){if(e=Fr(e,1),t=Pr(t,0,1),n=Pr(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ki(i,r,e+1/3),this.g=Ki(i,r,e),this.b=Ki(i,r,e-1/3)}return Xr.colorSpaceToWorking(this,r),this}setStyle(e,t=fr){function n(t){t!==void 0&&parseFloat(t)<1&&q(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:q(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);q(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fr){let n=Ui[e.toLowerCase()];return n===void 0?q(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fr){return Xr.workingToColorSpace(Ji.copy(this),e),Math.round(Pr(Ji.r*255,0,255))*65536+Math.round(Pr(Ji.g*255,0,255))*256+Math.round(Pr(Ji.b*255,0,255))}getHexString(e=fr){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xr.workingColorSpace){Xr.workingToColorSpace(Ji.copy(this),t);let n=Ji.r,r=Ji.g,i=Ji.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Xr.workingColorSpace){return Xr.workingToColorSpace(Ji.copy(this),t),e.r=Ji.r,e.g=Ji.g,e.b=Ji.b,e}getStyle(e=fr){Xr.workingToColorSpace(Ji.copy(this),e);let t=Ji.r,n=Ji.g,r=Ji.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(Gi);let n=Ir(Wi.h,Gi.h,t),r=Ir(Wi.s,Gi.s,t),i=Ir(Wi.l,Gi.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ji=new qi;qi.NAMES=Ui;var Yi=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new qi(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Xi=class extends zi{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zi=new Y,Qi=new Y,$i=new Y,ea=new Y,ta=new Y,na=new Y,ra=new Y,ia=new Y,aa=new Y,oa=new Y,sa=new si,ca=new si,la=new si,ua=class e{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Zi.subVectors(e,t),r.cross(Zi);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Zi.subVectors(r,t),Qi.subVectors(n,t),$i.subVectors(e,t);let a=Zi.dot(Zi),o=Zi.dot(Qi),s=Zi.dot($i),c=Qi.dot(Qi),l=Qi.dot($i),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ea)!==null&&ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,ea)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,ea.x),s.addScaledVector(a,ea.y),s.addScaledVector(o,ea.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return sa.setScalar(0),ca.setScalar(0),la.setScalar(0),sa.fromBufferAttribute(e,t),ca.fromBufferAttribute(e,n),la.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(sa,i.x),a.addScaledVector(ca,i.y),a.addScaledVector(la,i.z),a}static isFrontFacing(e,t,n,r){return Zi.subVectors(n,t),Qi.subVectors(e,t),Zi.cross(Qi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Zi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;ta.subVectors(r,n),na.subVectors(i,n),ia.subVectors(e,n);let s=ta.dot(ia),c=na.dot(ia);if(s<=0&&c<=0)return t.copy(n);aa.subVectors(e,r);let l=ta.dot(aa),u=na.dot(aa);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(ta,a);oa.subVectors(e,i);let f=ta.dot(oa),p=na.dot(oa);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(na,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return ra.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(ra,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(ta,a).addScaledVector(na,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},da=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pa.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pa.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pa.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,pa):pa.fromBufferAttribute(r,t),pa.applyMatrix4(e.matrixWorld),this.expandByPoint(pa);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pa),pa.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),Sa.subVectors(this.max,xa),ha.subVectors(e.a,xa),ga.subVectors(e.b,xa),_a.subVectors(e.c,xa),va.subVectors(ga,ha),ya.subVectors(_a,ga),ba.subVectors(ha,_a);let t=[0,-va.z,va.y,0,-ya.z,ya.y,0,-ba.z,ba.y,va.z,0,-va.x,ya.z,0,-ya.x,ba.z,0,-ba.x,-va.y,va.x,0,-ya.y,ya.x,0,-ba.y,ba.x,0];return!Ta(t,ha,ga,_a,Sa)||(t=[1,0,0,0,1,0,0,0,1],!Ta(t,ha,ga,_a,Sa))?!1:(Ca.crossVectors(va,ya),t=[Ca.x,Ca.y,Ca.z],Ta(t,ha,ga,_a,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pa).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pa).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fa)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fa=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],pa=new Y,ma=new da,ha=new Y,ga=new Y,_a=new Y,va=new Y,ya=new Y,ba=new Y,xa=new Y,Sa=new Y,Ca=new Y,wa=new Y;function Ta(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){wa.fromArray(e,a);let o=i.x*Math.abs(wa.x)+i.y*Math.abs(wa.y)+i.z*Math.abs(wa.z),s=t.dot(wa),c=n.dot(wa),l=r.dot(wa);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ea=new Y,Da=new Vr,Oa=0,ka=class extends kr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oa++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=_r,this.updateRanges=[],this.gpuType=an,this.version=0,this._normalizationScale=e===void 0?void 0:Rr(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXYZ(t,Ea.x,Ea.y,Ea.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix4(e),this.setXYZ(t,Ea.x,Ea.y,Ea.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ea.fromBufferAttribute(this,t),Ea.applyNormalMatrix(e),this.setXYZ(t,Ea.x,Ea.y,Ea.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ea.fromBufferAttribute(this,t),Ea.transformDirection(e),this.setXYZ(t,Ea.x,Ea.y,Ea.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?zr(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Br(e,this.array):Math.round(e*t)}},Aa=class extends ka{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ja=class extends ka{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ma=class extends ka{constructor(e,t,n){super(new Float32Array(e),t,n)}},Na=new da,Pa=new Y,Fa=new Y,Ia=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Na.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);let t=Pa.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Pa,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(Fa)),this.expandByPoint(Pa.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},La=0,Ra=new fi,za=new zi,Ba=new Y,Va=new da,Ha=new da,Ua=new Y,Wa=class e extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:La++}),this.uuid=Nr(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(yr(e)?ja:Aa)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Gr().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ra.makeRotationFromQuaternion(e),this.applyMatrix4(Ra),this}rotateX(e){return Ra.makeRotationX(e),this.applyMatrix4(Ra),this}rotateY(e){return Ra.makeRotationY(e),this.applyMatrix4(Ra),this}rotateZ(e){return Ra.makeRotationZ(e),this.applyMatrix4(Ra),this}translate(e,t,n){return Ra.makeTranslation(e,t,n),this.applyMatrix4(Ra),this}scale(e,t,n){return Ra.makeScale(e,t,n),this.applyMatrix4(Ra),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ba).negate(),this.translate(Ba.x,Ba.y,Ba.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Ma(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&q(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)J(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Va.setFromBufferAttribute(n),this.morphTargetsRelative?(Ua.addVectors(this.boundingBox.min,Va.min),this.boundingBox.expandByPoint(Ua),Ua.addVectors(this.boundingBox.max,Va.max),this.boundingBox.expandByPoint(Ua)):(this.boundingBox.expandByPoint(Va.min),this.boundingBox.expandByPoint(Va.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&J(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ia);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)J(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Y,1/0);else if(e){let n=this.boundingSphere.center;if(Va.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ha.setFromBufferAttribute(n),this.morphTargetsRelative?(Ua.addVectors(Va.min,Ha.min),Va.expandByPoint(Ua),Ua.addVectors(Va.max,Ha.max),Va.expandByPoint(Ua)):(Va.expandByPoint(Ha.min),Va.expandByPoint(Ha.max))}Va.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ua.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ua));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ua.fromBufferAttribute(a,t),o&&(Ba.fromBufferAttribute(e,t),Ua.add(Ba)),r=Math.max(r,n.distanceToSquared(Ua))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&J(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){J(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new ka(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new Y,s[e]=new Y;let l=new Y,u=new Y,d=new Y,f=new Vr,p=new Vr,m=new Vr,h=new Y,g=new Y;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new Y,b=new Y,x=new Y,S=new Y;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new ka(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Y,i=new Y,a=new Y,o=new Y,s=new Y,c=new Y,l=new Y,u=new Y;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ua.fromBufferAttribute(e,t),Ua.normalize(),e.setXYZ(t,Ua.x,Ua.y,Ua.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new ka(a,r,i)}if(this.index===null)return q(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ga=new Y,Ka=new Y,qa=new Gr,Ja=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ga.subVectors(n,t).cross(Ka.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ga),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qa.getNormalMatrix(e),r=this.coplanarPoint(Ga).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ya=0,Xa=class extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ya++}),this.uuid=Nr(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qi(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){q(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?q(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qi().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ja().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new Vr().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Vr().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Za=new Y,Qa=new Y,$a=new Y,eo=new Y,to=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Za)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Za.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Za.copy(this.origin).addScaledVector(this.direction,t),Za.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qa.copy(e).add(t).multiplyScalar(.5),$a.copy(t).sub(e).normalize(),eo.copy(this.origin).sub(Qa);let i=e.distanceTo(t)*.5,a=-this.direction.dot($a),o=eo.dot(this.direction),s=-eo.dot($a),c=eo.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Qa).addScaledVector($a,d),f}intersectSphere(e,t){if(e.radius<0)return null;Za.subVectors(e.center,this.origin);let n=Za.dot(this.direction),r=Za.dot(Za)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Za)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let te=S/w,ne=C/w,re=1/w,ie=T-te*D,ae=E-ne*D,oe=O-te*A,se=k-ne*A,ce=j-te*M,le=ee-ne*M,ue=ce*se-le*oe,de=ie*le-ae*ce,fe=oe*ae-se*ie;if(r){if(ue<0||de<0||fe<0)return null}else if((ue<0||de<0||fe<0)&&(ue>0||de>0||fe>0))return null;let pe=ue+de+fe;if(pe===0)return null;let me=re*(ue*D+de*A+fe*M);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},no=class extends Xa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new qi(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ro=new fi,io=new to,ao=new Ia,oo=new Y,so=new Y,co=new Y,lo=new Y,uo=new Y,fo=new Y,po=new Y,mo=new Y,ho=class extends zi{constructor(e=new Wa,t=new no){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){fo.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(uo.fromBufferAttribute(s,e),a?fo.addScaledVector(uo,r):fo.addScaledVector(uo.sub(t),r))}t.add(fo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(i),io.copy(e.ray).recast(e.near),ao.containsPoint(io.origin)===!1&&(io.intersectSphere(ao,oo)===null||io.origin.distanceToSquared(oo)>(e.far-e.near)**2)||(ro.copy(i).invert(),io.copy(e.ray).applyMatrix4(ro),(n.boundingBox===null||io.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,io)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=_o(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=_o(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=_o(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=_o(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function go(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;mo.copy(s),mo.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(mo);return l<n.near||l>n.far?null:{distance:l,point:mo.clone(),object:e}}function _o(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,so),e.getVertexPosition(c,co),e.getVertexPosition(l,lo);let u=go(e,t,n,r,so,co,lo,po);if(u){let e=new Y;ua.getBarycoord(po,so,co,lo,e),i&&(u.uv=ua.getInterpolatedAttribute(i,s,c,l,e,new Vr)),a&&(u.uv1=ua.getInterpolatedAttribute(a,s,c,l,e,new Vr)),o&&(u.normal=ua.getInterpolatedAttribute(o,s,c,l,e,new Y),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Y,materialIndex:0};ua.getNormal(so,co,lo,t.normal),u.face=t,u.barycoord=e}return u}var vo=class extends oi{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Kt,l=Kt,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yo=new Ia,bo=new Vr(.5,.5),xo=new Y,So=class{constructor(e=new Ja,t=new Ja,n=new Ja,r=new Ja,i=new Ja,a=new Ja){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vr,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yo)}intersectsSprite(e){return yo.center.set(0,0,0),yo.radius=.7071067811865476+bo.distanceTo(e.center),yo.applyMatrix4(e.matrixWorld),this.intersectsSphere(yo)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(xo.x=r.normal.x>0?e.max.x:e.min.x,xo.y=r.normal.y>0?e.max.y:e.min.y,xo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Co=new fi,wo=class e{constructor(){this.coordinateSystem=vr,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Co.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new So),n[e].setFromProjectionMatrix(Co,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new So),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},To=class extends oi{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Eo=class extends oi{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Do=class extends oi{constructor(e,t,n=rn,r,i,a,o=Kt,s=Kt,c,l=hn,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ni(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Oo=class extends Do{constructor(e,t=rn,n=301,r,i,a=Kt,o=Kt,s,c=hn){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ko=class extends oi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ao=class e extends Wa{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Ma(c,3)),this.setAttribute(`normal`,new Ma(l,3)),this.setAttribute(`uv`,new Ma(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Y;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},jo=class e extends Wa{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new Y,l=new Vr;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Ma(a,3)),this.setAttribute(`normal`,new Ma(o,3)),this.setAttribute(`uv`,new Ma(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Mo=class e extends Wa{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Ma(u,3)),this.setAttribute(`normal`,new Ma(d,3)),this.setAttribute(`uv`,new Ma(f,2));function _(){let a=new Y,_=new Y,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new Vr,m=new Y,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},No=class e extends Mo{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Po=class e extends Wa{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Ma(p,3)),this.setAttribute(`normal`,new Ma(m,3)),this.setAttribute(`uv`,new Ma(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Fo=class e extends Wa{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new Y,p=new Vr;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Ma(s,3)),this.setAttribute(`normal`,new Ma(c,3)),this.setAttribute(`uv`,new Ma(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Io=class e extends Wa{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new Y,d=new Y,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Ma(p,3)),this.setAttribute(`normal`,new Ma(m,3)),this.setAttribute(`uv`,new Ma(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Lo=class e extends Wa{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new Y,f=new Y,p=new Y;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Ma(c,3)),this.setAttribute(`normal`,new Ma(l,3)),this.setAttribute(`uv`,new Ma(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ro(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Bo(i))i.isRenderTargetTexture?(q(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Bo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function zo(e){let t={};for(let n=0;n<e.length;n++){let r=Ro(e[n]);for(let e in r)t[e]=r[e]}return t}function Bo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Vo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ho(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xr.workingColorSpace}var Uo={clone:Ro,merge:zo},Wo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Go=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ko=class extends Xa{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wo,this.fragmentShader=Go,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ro(e.uniforms),this.uniformsGroups=Vo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new qi().setHex(r.value);break;case`v2`:this.uniforms[n].value=new Vr().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new si().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Gr().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new fi().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},qo=class extends Ko{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Jo=class extends Xa{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new qi(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qi(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Vr(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yo=class extends Xa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=dr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xo=class extends Xa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Zo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Qo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var $o=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},es=class extends $o{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cr,endingEnd:cr}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case lr:i=e,o=2*t-n;break;case ur:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case lr:a=e,s=2*n-t;break;case ur:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ts=class extends $o{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ns=class extends $o{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},rs=class extends $o{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=os(n,t,g,y,r);i[p]=is(x,o,_,b,m)}return i}};function is(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function as(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function os(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=is(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=as(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ss=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Zo(t,this.TimeBufferType),this.values=Zo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zo(e.times,Array),values:Zo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Qo(e.settings)&&(n.settings={inTangents:Zo(e.settings.inTangents,Array),outTangents:Zo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ns(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ts(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new es(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new rs(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case ar:t=this.InterpolantFactoryMethodLinear;break;case or:t=this.InterpolantFactoryMethodSmooth;break;case sr:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return q(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return ar;case this.InterpolantFactoryMethodSmooth:return or;case this.InterpolantFactoryMethodBezier:return sr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Qo(this.settings)&&(cs(this.settings.inTangents,e),cs(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Qo(this.settings)&&(ls(this.settings.inTangents,e),ls(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(J(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(J(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){J(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){J(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&br(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){J(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===or,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Qo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function cs(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function ls(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ss.prototype.ValueTypeName=``,ss.prototype.TimeBufferType=Float32Array,ss.prototype.ValueBufferType=Float32Array,ss.prototype.DefaultInterpolation=ar;var us=class extends ss{constructor(e,t,n){super(e,t,n)}};us.prototype.ValueTypeName=`bool`,us.prototype.ValueBufferType=Array,us.prototype.DefaultInterpolation=ir,us.prototype.InterpolantFactoryMethodLinear=void 0,us.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends ss{constructor(e,t,n,r){super(e,t,n,r)}};ds.prototype.ValueTypeName=`color`;var fs=class extends ss{constructor(e,t,n,r){super(e,t,n,r)}};fs.prototype.ValueTypeName=`number`;var ps=class extends $o{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Hr.slerpFlat(i,0,a,c-o,a,c,s);return i}},ms=class extends ss{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ps(this.times,this.values,this.getValueSize(),e)}};ms.prototype.ValueTypeName=`quaternion`,ms.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends ss{constructor(e,t,n){super(e,t,n)}};hs.prototype.ValueTypeName=`string`,hs.prototype.ValueBufferType=Array,hs.prototype.DefaultInterpolation=ir,hs.prototype.InterpolantFactoryMethodLinear=void 0,hs.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends ss{constructor(e,t,n,r){super(e,t,n,r)}};gs.prototype.ValueTypeName=`vector`;var _s=class extends zi{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new qi(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},vs=class extends _s{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(zi.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qi(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ys=new fi,bs=new Y,xs=new Y,Ss=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vr(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new fi,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new Vr(1,1),this._viewportCount=1,this._viewports=[new si(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;bs.setFromMatrixPosition(e.matrixWorld),t.position.copy(bs),xs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xs),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ys.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ys,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ys)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Cs=new Y,ws=new Hr,Ts=new Y,Es=class extends zi{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new fi,this.projectionMatrix=new fi,this.projectionMatrixInverse=new fi,this.coordinateSystem=vr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cs,ws,Ts),Ts.x===1&&Ts.y===1&&Ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cs,ws,Ts.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Cs,ws,Ts),Ts.x===1&&Ts.y===1&&Ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cs,ws,Ts.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ds=new Y,Os=new Vr,ks=new Vr,As=class extends Es{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z)}getViewSize(e,t){return this.getViewBounds(e,Os,ks),t.subVectors(ks,Os)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},js=class extends Ss{constructor(){super(new As(90,1,.5,500)),this.isPointLightShadow=!0}},Ms=class extends _s{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new js}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ns=class extends Es{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ps=class extends Ss{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fs=class extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(zi.DEFAULT_UP),this.updateMatrix(),this.target=new zi,this.shadow=new Ps}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Is=-90,Ls=1,Rs=class extends zi{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new As(Is,Ls,e,t);r.layers=this.layers,this.add(r);let i=new As(Is,Ls,e,t);i.layers=this.layers,this.add(i);let a=new As(Is,Ls,e,t);a.layers=this.layers,this.add(a);let o=new As(Is,Ls,e,t);o.layers=this.layers,this.add(o);let s=new As(Is,Ls,e,t);s.layers=this.layers,this.add(s);let c=new As(Is,Ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},zs=class extends As{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Bs=`\\[\\]\\.:\\/`,Vs=RegExp(`[\\[\\]\\.:\\/]`,`g`),Hs=`[^\\[\\]\\.:\\/]`,Us=`[^`+Bs.replace(`\\.`,``)+`]`,Ws=`((?:WC+[\\/:])*)`.replace(`WC`,Hs),Gs=`(WCOD+)?`.replace(`WCOD`,Us),Ks=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Hs),qs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Hs),Js=RegExp(`^`+Ws+Gs+Ks+qs+`$`),Ys=[`material`,`materials`,`bones`,`map`],Xs=class{constructor(e,t,n){let r=n||Zs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Zs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Vs,``)}static parseTrackName(e){let t=Js.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ys.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){q(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){J(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){J(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){J(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){J(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){J(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){J(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){J(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;J(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){J(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){J(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zs.Composite=Xs,Zs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Zs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Zs.prototype.GetterByBindingType=[Zs.prototype._getValue_direct,Zs.prototype._getValue_array,Zs.prototype._getValue_arrayElement,Zs.prototype._getValue_toArray],Zs.prototype.SetterByBindingTypeAndVersioning=[[Zs.prototype._setValue_direct,Zs.prototype._setValue_direct_setNeedsUpdate,Zs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zs.prototype._setValue_array,Zs.prototype._setValue_array_setNeedsUpdate,Zs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zs.prototype._setValue_arrayElement,Zs.prototype._setValue_arrayElement_setNeedsUpdate,Zs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zs.prototype._setValue_fromArray,Zs.prototype._setValue_fromArray_setNeedsUpdate,Zs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],zt=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},zt.prototype.isMatrix2=!0;function Qs(e,t,n,r){let i=$s(r);switch(n){case fn:return e*t;case _n:return e*t/i.components*i.byteLength;case vn:return e*t/i.components*i.byteLength;case yn:return e*t*2/i.components*i.byteLength;case bn:return e*t*2/i.components*i.byteLength;case pn:return e*t*3/i.components*i.byteLength;case mn:return e*t*4/i.components*i.byteLength;case xn:return e*t*4/i.components*i.byteLength;case Sn:case Cn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case wn:case Tn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Dn:case kn:return Math.max(e,16)*Math.max(t,8)/4;case En:case On:return Math.max(e,8)*Math.max(t,8)/2;case An:case jn:case Nn:case Pn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Mn:case Fn:case In:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ln:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case zn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Bn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Vn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Hn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Un:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Wn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Gn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Kn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case qn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Jn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Yn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Xn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Zn:case Qn:case $n:return Math.ceil(e/4)*Math.ceil(t/4)*16;case er:case tr:return Math.ceil(e/4)*Math.ceil(t/4)*8;case nr:case rr:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function $s(e){switch(e){case Qt:case $t:return{byteLength:1,components:1};case tn:case en:case on:return{byteLength:2,components:1};case sn:case cn:return{byteLength:2,components:4};case rn:case nn:case an:return{byteLength:4,components:1};case un:case dn:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?q(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function ec(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function tc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var X={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Z={common:{diffuse:{value:new qi(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gr},alphaMap:{value:null},alphaMapTransform:{value:new Gr},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gr}},envmap:{envMap:{value:null},envMapRotation:{value:new Gr},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gr}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gr}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gr},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gr},normalScale:{value:new Vr(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gr},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gr}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gr}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gr}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qi(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qi(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gr},alphaTest:{value:0},uvTransform:{value:new Gr}},sprite:{diffuse:{value:new qi(16777215)},opacity:{value:1},center:{value:new Vr(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gr},alphaMap:{value:null},alphaMapTransform:{value:new Gr},alphaTest:{value:0}}},nc={basic:{uniforms:zo([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:zo([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new qi(0)},envMapIntensity:{value:1}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:zo([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new qi(0)},specular:{value:new qi(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:zo([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new qi(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:zo([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new qi(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:zo([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:zo([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:zo([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:zo([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:zo([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:zo([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new Gr},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gr}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distance:{uniforms:zo([Z.common,Z.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distance_vert,fragmentShader:X.distance_frag},shadow:{uniforms:zo([Z.lights,Z.fog,{color:{value:new qi(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};nc.physical={uniforms:zo([nc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gr},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gr},clearcoatNormalScale:{value:new Vr(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gr},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gr},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gr},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gr},sheen:{value:0},sheenColor:{value:new qi(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gr},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gr},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gr},transmissionSamplerSize:{value:new Vr},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gr},attenuationDistance:{value:0},attenuationColor:{value:new qi(0)},specularColor:{value:new qi(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gr},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gr},anisotropyVector:{value:new Vr},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gr}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};var rc={r:0,b:0,g:0},ic=new fi,ac=new Gr;ac.set(-1,0,0,0,1,0,0,0,1);function oc(e,t,n,r,i,a){let o=new qi(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new ho(new Ao(1,1,1),new Ko({name:`BackgroundCubeMaterial`,uniforms:Ro(nc.backgroundCube.uniforms),vertexShader:nc.backgroundCube.vertexShader,fragmentShader:nc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ic.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ac),l.material.toneMapped=Xr.getTransfer(i.colorSpace)!==hr,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ho(new Po(2,2),new Ko({name:`BackgroundMaterial`,uniforms:Ro(nc.background.uniforms),vertexShader:nc.background.vertexShader,fragmentShader:nc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Xr.getTransfer(i.colorSpace)!==hr,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(rc,Ho(e)),n.buffers.color.setClear(rc.r,rc.g,rc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function sc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function cc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function lc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(q(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&q(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&q(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function uc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ja,s=new Gr,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var dc=class extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new To(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ao(5,5,5),i=new Ko({name:`CubemapFromEquirect`,uniforms:Ro(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ho(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Yt),new Rs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Q=256,fc=3,pc=20,mc=256,hc=16,gc=3,_c=new Y,vc=new qi,yc=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Rs(1,10,null),this._boxMesh=new ho(new Ao(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=_c}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(vc));let h=new Rs(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Q,Lr(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Q:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=bc(e,!1,!1),n=Math.log2(e)-fc;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=bc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Tc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Sc(),this._integrationMaterial=Cc());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/hc);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-gc)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(mc*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=wc());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function bc(e,t,n){return new dc(e,{minFilter:Zt,generateMipmaps:t,type:on,colorSpace:pr,depthBuffer:n})}function xc(e,t,n){return new Ko({name:e,uniforms:t,vertexShader:X.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Sc(){return xc(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${mc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Cc(){return xc(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:hc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function wc(){return xc(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${pc}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Tc(){return xc(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ec(){return xc(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Dc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new dc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new yc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new yc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Oc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Er(`WebGLRenderer: `+e+` extension not supported.`),t}}}function kc(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?ja:Aa)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Ac(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function jc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:J(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Mc(e,t,n){let r=new WeakMap,i=new si;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new ui(h,p,m,u);g.type=an,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Vr(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Nc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Pc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Fc(e,t,n,r,i,a){let o=new li(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Wa;u.setAttribute(`position`,new Ma([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Ma([0,2,0,0,2,0],2));let d=new qo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ho(u,d),p=new Ns(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new li(t,n,{type:on,depthBuffer:!1,stencilBuffer:!1}),c=new li(t,n,{type:on,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Do(t,n),a===!0&&(l.format=gn,l.type=ln)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Xr.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Pc[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Ic=new oi,Lc=new Do(1,1),Rc=new Oo(1),zc=new ui,Bc=new di,Vc=new To,Hc=[],Uc=[],Wc=new Float32Array(16),Gc=new Float32Array(9),Kc=new Float32Array(4);function qc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Hc[i];if(a===void 0&&(a=new Float32Array(i),Hc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Jc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Yc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Xc(e,t){let n=Uc[t];n===void 0&&(n=new Int32Array(t),Uc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Zc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Qc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Jc(n,t))return;e.uniform2fv(this.addr,t),Yc(n,t)}}function $c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Jc(n,t))return;e.uniform3fv(this.addr,t),Yc(n,t)}}function el(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Jc(n,t))return;e.uniform4fv(this.addr,t),Yc(n,t)}}function tl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Jc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Yc(n,t)}else{if(Jc(n,r))return;Kc.set(r),e.uniformMatrix2fv(this.addr,!1,Kc),Yc(n,r)}}function nl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Jc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Yc(n,t)}else{if(Jc(n,r))return;Gc.set(r),e.uniformMatrix3fv(this.addr,!1,Gc),Yc(n,r)}}function rl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Jc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Yc(n,t)}else{if(Jc(n,r))return;Wc.set(r),e.uniformMatrix4fv(this.addr,!1,Wc),Yc(n,r)}}function il(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function al(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Jc(n,t))return;e.uniform2iv(this.addr,t),Yc(n,t)}}function ol(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Jc(n,t))return;e.uniform3iv(this.addr,t),Yc(n,t)}}function sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Jc(n,t))return;e.uniform4iv(this.addr,t),Yc(n,t)}}function cl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ll(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Jc(n,t))return;e.uniform2uiv(this.addr,t),Yc(n,t)}}function ul(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Jc(n,t))return;e.uniform3uiv(this.addr,t),Yc(n,t)}}function dl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Jc(n,t))return;e.uniform4uiv(this.addr,t),Yc(n,t)}}function fl(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function pl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?fl(Lc):Ic,n.setTexture2D(t||a,i)}function ml(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Bc,i)}function hl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?fl(Rc):Vc,n.setTextureCube(t||a,i)}function gl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||zc,i)}function _l(e){switch(e){case 5126:return Zc;case 35664:return Qc;case 35665:return $c;case 35666:return el;case 35674:return tl;case 35675:return nl;case 35676:return rl;case 5124:case 35670:return il;case 35667:case 35671:return al;case 35668:case 35672:return ol;case 35669:case 35673:return sl;case 5125:return cl;case 36294:return ll;case 36295:return ul;case 36296:return dl;case 35678:case 36198:case 36298:case 36306:case 35682:return pl;case 35679:case 36299:case 36307:return ml;case 35680:case 36300:case 36308:case 36293:return hl;case 36289:case 36303:case 36311:case 36292:return gl}}function vl(e,t){e.uniform1fv(this.addr,t)}function yl(e,t){let n=qc(t,this.size,2);e.uniform2fv(this.addr,n)}function bl(e,t){let n=qc(t,this.size,3);e.uniform3fv(this.addr,n)}function xl(e,t){let n=qc(t,this.size,4);e.uniform4fv(this.addr,n)}function Sl(e,t){let n=qc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Cl(e,t){let n=qc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function wl(e,t){let n=qc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Tl(e,t){e.uniform1iv(this.addr,t)}function El(e,t){e.uniform2iv(this.addr,t)}function Dl(e,t){e.uniform3iv(this.addr,t)}function Ol(e,t){e.uniform4iv(this.addr,t)}function kl(e,t){e.uniform1uiv(this.addr,t)}function Al(e,t){e.uniform2uiv(this.addr,t)}function jl(e,t){e.uniform3uiv(this.addr,t)}function Ml(e,t){e.uniform4uiv(this.addr,t)}function Nl(e,t,n){let r=this.cache,i=t.length,a=Xc(n,i);Jc(r,a)||(e.uniform1iv(this.addr,a),Yc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?fl(Lc):Ic;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Pl(e,t,n){let r=this.cache,i=t.length,a=Xc(n,i);Jc(r,a)||(e.uniform1iv(this.addr,a),Yc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Bc,a[e])}function Fl(e,t,n){let r=this.cache,i=t.length,a=Xc(n,i);Jc(r,a)||(e.uniform1iv(this.addr,a),Yc(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?fl(Rc):Vc;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Il(e,t,n){let r=this.cache,i=t.length,a=Xc(n,i);Jc(r,a)||(e.uniform1iv(this.addr,a),Yc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||zc,a[e])}function Ll(e){switch(e){case 5126:return vl;case 35664:return yl;case 35665:return bl;case 35666:return xl;case 35674:return Sl;case 35675:return Cl;case 35676:return wl;case 5124:case 35670:return Tl;case 35667:case 35671:return El;case 35668:case 35672:return Dl;case 35669:case 35673:return Ol;case 5125:return kl;case 36294:return Al;case 36295:return jl;case 36296:return Ml;case 35678:case 36198:case 36298:case 36306:case 35682:return Nl;case 35679:case 36299:case 36307:return Pl;case 35680:case 36300:case 36308:case 36293:return Fl;case 36289:case 36303:case 36311:case 36292:return Il}}var Rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_l(t.type)}},zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ll(t.type)}},Bl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Vl=/(\w+)(\])?(\[|\.)?/g;function Hl(e,t){e.seq.push(t),e.map[t.id]=t}function Ul(e,t,n){let r=e.name,i=r.length;for(Vl.lastIndex=0;;){let a=Vl.exec(r),o=Vl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Hl(n,l===void 0?new Rl(s,e,t):new zl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Bl(s),Hl(n,e)),n=e}}}var Wl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ul(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Gl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Kl=37297,ql=0;function Jl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Yl=new Gr;function Xl(e){Xr._getMatrix(Yl,Xr.workingColorSpace,e);let t=`mat3( ${Yl.elements.map(e=>e.toFixed(4))} )`;switch(Xr.getTransfer(e)){case mr:return[t,`LinearTransferOETF`];case hr:return[t,`sRGBTransferOETF`];default:return q(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Zl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Jl(e.getShaderSource(t),r)}return i}function Ql(e,t){let n=Xl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var $l={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function eu(e,t){let n=$l[t];return n===void 0?(q(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var tu=new Y;function nu(){return Xr.getLuminanceCoefficients(tu),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${tu.x.toFixed(4)}, ${tu.y.toFixed(4)}, ${tu.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ru(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ou).join(`
`)}function iu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function au(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ou(e){return e!==``}function su(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function cu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var lu=/^[ \t]*#include +<([\w\d./]+)>/gm;function uu(e){return e.replace(lu,du)}function du(e,t){let n=X[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return uu(n)}var fu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(e){return e.replace(fu,mu)}function mu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function hu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var gu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function _u(e){return gu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var vu={302:`ENVMAP_MODE_REFRACTION`};function yu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:vu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var bu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function xu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:bu[e.combine]||`ENVMAP_BLENDING_NONE`}function Su(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=_u(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=yu(n),d=xu(n),f=ru(n),p=iu(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(ou).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(ou).join(`
`),g.length>0&&(g+=`
`)):(h=[hu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ou).join(`
`),g=[hu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:X.tonemapping_pars_fragment,n.toneMapping===0?``:eu(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,Ql(`linearToOutputTexel`,n.outputColorSpace),nu(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ou).join(`
`)),o=uu(o),o=su(o,n),o=cu(o,n),s=uu(s),s=su(s,n),s=cu(s,n),o=pu(o),s=pu(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Gl(i,i.VERTEX_SHADER,v),x=Gl(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Zl(i,b,`vertex`),n=Zl(i,x,`fragment`);J(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):q(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Wl(i,m),w=au(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Kl)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ql++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Cu=0,wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tu(e),t.set(e,n)),n}},Tu=class{constructor(e){this.id=Cu++,this.code=e,this.usedTimes=0}};function Eu(e){return e===1030||e===37490||e===36285}function Du(e,t,n,r,i,a){let o=new Ci,s=new wu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&q(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=nc[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),ee=m.isInstancedMesh===!0,M=m.isBatchedMesh===!0,te=!!i.map,ne=!!i.matcap,re=!!b,ie=re&&b.isPMREMTexture===!0,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,de=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.diffuseRoughness>0,ge=i.dispersion>0,_e=i.retroreflectivity>0,ve=i.iridescence>0,N=i.sheen>0,P=i.transmission>0,F=pe&&!!i.anisotropyMap,ye=me&&!!i.clearcoatMap,be=me&&!!i.clearcoatNormalMap,xe=me&&!!i.clearcoatRoughnessMap,I=he&&!!i.diffuseRoughnessMap,L=ve&&!!i.iridescenceMap,Se=ve&&!!i.iridescenceThicknessMap,R=N&&!!i.sheenColorMap,z=N&&!!i.sheenRoughnessMap,B=!!i.specularMap,V=!!i.specularColorMap,H=!!i.specularIntensityMap,U=P&&!!i.transmissionMap,Ce=P&&!!i.thicknessMap,we=!!i.gradientMap,Te=!!i.alphaMap,Ee=i.alphaTest>0,De=!!i.alphaHash,Oe=!!i.extensions,ke=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ke=e.toneMapping);let Ae=ie?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,je={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:M,batchingColor:M&&m._colorsTexture!==null,instancing:ee,instancingColor:ee&&m.instanceColor!==null,instancingMorph:ee&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Xr.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:ne,envMap:re,envMapMode:re&&b.mapping,envMapPMREM:ie,envMapMaxLod:ie?Ae.length-1:null,envMapSize:ie?Ae[0].width:null,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&Eu(i.normalMap.format),metalnessMap:de,roughnessMap:fe,anisotropy:pe,anisotropyMap:F,clearcoat:me,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,diffuseRoughness:he,diffuseRoughnessMap:I,dispersion:ge,retroreflection:_e,iridescence:ve,iridescenceMap:L,iridescenceThicknessMap:Se,sheen:N,sheenColorMap:R,sheenRoughnessMap:z,specularMap:B,specularColorMap:V,specularIntensityMap:H,transmission:P,transmissionMap:U,thicknessMap:Ce,gradientMap:we,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ee,alphaHash:De,combine:i.combine,mapUv:te&&p(i.map.channel),aoMapUv:ae&&p(i.aoMap.channel),lightMapUv:oe&&p(i.lightMap.channel),bumpMapUv:se&&p(i.bumpMap.channel),normalMapUv:ce&&p(i.normalMap.channel),displacementMapUv:le&&p(i.displacementMap.channel),emissiveMapUv:ue&&p(i.emissiveMap.channel),metalnessMapUv:de&&p(i.metalnessMap.channel),roughnessMapUv:fe&&p(i.roughnessMap.channel),anisotropyMapUv:F&&p(i.anisotropyMap.channel),clearcoatMapUv:ye&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:I&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:L&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:R&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:z&&p(i.sheenRoughnessMap.channel),specularMapUv:B&&p(i.specularMap.channel),specularColorMapUv:V&&p(i.specularColorMap.channel),specularIntensityMapUv:H&&p(i.specularIntensityMap.channel),transmissionMapUv:U&&p(i.transmissionMap.channel),thicknessMapUv:Ce&&p(i.thicknessMap.channel),alphaMapUv:Te&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ce||pe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(te||Te),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&Xr.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&Xr.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Oe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Oe&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=nc[t];n=Uo.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Su(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Ou(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ku(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Au(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ju(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||ku),r.length>1&&r.sort(t||Au),i.length>1&&i.sort(t||Au)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Mu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ju,e.set(t,[i])):n>=r.length?(i=new ju,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Nu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new Y,color:new qi};break;case`SpotLight`:n={position:new Y,direction:new Y,color:new qi,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Y,color:new qi,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Y,skyColor:new qi,groundColor:new qi};break;case`RectAreaLight`:n={color:new qi,position:new Y,halfWidth:new Y,halfHeight:new Y}}return e[t.id]=n,n}}}function Pu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vr};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vr};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vr,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Fu=0;function Iu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Lu(e){let t=new Nu,n=Pu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Y);let i=new Y,a=new fi,o=new fi;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Iu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Fu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Ru(e){let t=new Lu(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function zu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ru(e),t.set(n,[a])):r>=i.length?(a=new Ru(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Bu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Hu=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],Uu=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Wu=new fi,Gu=new Y,Ku=new Y;function qu(e,t,n){let r=new So,i=new Vr,a=new Vr,o=new si,s=new Yo,c=new Xo,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Ko({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vr},radius:{value:4}},vertexShader:Bu,fragmentShader:Vu}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Wa;m.setAttribute(`position`,new ka(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new ho(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(q(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){q(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){q(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new li(i.x,i.y,{format:yn,type:on,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Do(i.x,i.y,an),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=hn,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Kt,d.map.depthTexture.magFilter=Kt}else l.isPointLight?(d.map=new dc(i.x),d.map.depthTexture=new Oo(i.x,rn)):(d.map=new li(i.x,i.y),d.map.depthTexture=new Do(i.x,i.y,rn)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=hn,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Yt,d.map.depthTexture.magFilter=Yt):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Kt,d.map.depthTexture.magFilter=Kt);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Gu.setFromMatrixPosition(l.matrixWorld),e.position.copy(Gu),Ku.copy(e.position),Ku.add(Hu[t]),e.up.copy(Uu[t]),e.lookAt(Ku),e.updateMatrixWorld(),n.makeTranslation(-Gu.x,-Gu.y,-Gu.z),Wu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Wu,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new li(i.x,i.y,{format:yn,type:on}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ju(e,t){function n(){let t=!1,n=new si,r=null,i=new si(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?de(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Or[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?de(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new qi(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),M=te>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new si().fromArray(ae),ce=new si().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),de(e.DEPTH_TEST),o.setFunc(3),P(!1),F(1),de(e.CULL_FACE),ve(0);function de(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(fe(e.BLEND),g=!1);else if(g===!1&&(de(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:J(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:J(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:J(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:J(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function N(t,n){t.side===2?fe(e.CULL_FACE):de(e.CULL_FACE);let r=t.side===1;n&&(r=!r),P(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function P(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function F(t){t===0?fe(e.CULL_FACE):(de(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(M&&e.lineWidth(t),k=t)}function be(t,n,r){t?(de(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function xe(t){t?de(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function I(t){t===void 0&&(t=e.TEXTURE0+ee-1),re!==t&&(e.activeTexture(t),re=t)}function L(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+ee-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Se(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function R(){try{e.compressedTexImage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function z(){try{e.compressedTexImage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function B(){try{e.texSubImage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function V(){try{e.texSubImage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function U(){try{e.compressedTexSubImage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function Ce(){try{e.texStorage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function we(){try{e.texStorage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function Te(){try{e.texImage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function Ee(){try{e.texImage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function De(t){return d[t]===void 0?e.getParameter(t):d[t]}function Oe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function ke(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Ae(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function je(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Me(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new qi(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:de,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:N,setFlipSided:P,setCullFace:F,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:I,bindTexture:L,unbindTexture:Se,compressedTexImage2D:R,compressedTexImage3D:z,texImage2D:Te,texImage3D:Ee,pixelStorei:Oe,getParameter:De,updateUBOMapping:je,uniformBlockBinding:Me,texStorage2D:Ce,texStorage3D:we,texSubImage2D:B,texSubImage3D:V,compressedTexSubImage2D:H,compressedTexSubImage3D:U,scissor:ke,viewport:Ae,reset:Ne}}function Yu(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Vr,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):xr(`canvas`)}function v(e,t,n){let r=1,i=Ce(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),q(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&q(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];q(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||q(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?mr:Xr.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,q(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function D(e){k(e.target)}function O(e){A(e.target)}function k(e){e.removeEventListener(`dispose`,D),E(e),ee(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function A(e){e.removeEventListener(`dispose`,O),E(e),te(e)}function j(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?A(t):k(t))}m.clear(),d.clear()}function ee(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&M(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function M(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function te(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&k(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let ne=0;function re(){ne=0}function ie(){return ne}function ae(e){ne=e}function oe(){let e=ne;return e>=i.maxTextures&&q(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ne+=1,e}function se(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ce(t,i){let a=r.get(t);if(t.isVideoTexture&&H(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)q(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)q(`WebGLRenderer: Texture marked for update but image is incomplete`);else{N(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?N(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ue(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?N(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?P(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let fe={[Ut]:e.REPEAT,[Wt]:e.CLAMP_TO_EDGE,[Gt]:e.MIRRORED_REPEAT},pe={[Kt]:e.NEAREST,[qt]:e.NEAREST_MIPMAP_NEAREST,[Jt]:e.NEAREST_MIPMAP_LINEAR,[Yt]:e.LINEAR,[Xt]:e.LINEAR_MIPMAP_NEAREST,[Zt]:e.LINEAR_MIPMAP_LINEAR},me={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function he(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&q(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,fe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,fe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,fe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,pe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,pe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,me[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ge(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=se(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&M(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=_e(n.start,r.width,4),c=_e(t.start,r.width,4);n.start<=i+1&&a===c&&_e(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function N(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ge(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Xr.getPrimaries(Xr.workingColorSpace),r=o.colorSpace===``?null:Xr.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=U(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);he(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===gn,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ve(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=Qs(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else q(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?q(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Qs(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=Ce(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=Ce(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function P(t,o,s){if(o.image.length!==6)return;let c=ge(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Xr.getPrimaries(Xr.workingColorSpace),r=o.colorSpace===``?null:Xr.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=U(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);he(e.TEXTURE_CUBE_MAP,o);let k;if(o.isDepthTexture){if(x=C(o.format===gn,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?q(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=Ce(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function F(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),V(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,B(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;V(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,B(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,B(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);V(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,B(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,B(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function be(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?de(i.depthTexture,0):ce(i.depthTexture,0);let u=c.__webglTexture,d=B(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)V(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)V(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function xe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)be(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?be(i.__webglFramebuffer[0],t,0):be(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ye(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ye(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function I(t,n,i){let a=r.get(t);n!==void 0&&F(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&xe(t)}function L(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&V(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=B(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),he(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)F(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else F(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),he(c,a),F(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),he(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)F(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else F(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&xe(t)}function Se(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let R=[];function z(t){if(t.samples>0){if(V(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(R.length=0,R.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&R.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,R))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function B(e){return Math.min(i.maxSamples,e.samples)}function V(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function H(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function U(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Xr.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&q(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):J(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ce(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=oe,this.resetTextureUnits=re,this.getTextureUnits=ie,this.setTextureUnits=ae,this.setTexture2D=ce,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=de,this.rebindTextures=I,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=F,this.useMultisampledRTT=V,this.dispose=j}function Xu(e,t){function n(n,r=``){let i,a=Xr.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Zu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ko(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ko({vertexShader:Zu,fragmentShader:Qu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ho(new Po(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ed=class extends kr{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new $u,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new Vr,C=null,w=null,T=new As;T.viewport=new si;let E=new As;E.viewport=new si;let D=[T,E],O=new zs,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Hi,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Hi,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Hi,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&q(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&q(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?gn:hn,a=_.stencil?ln:rn);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new li(d.textureWidth,d.textureHeight,{format:mn,type:Qt,depthTexture:new Do(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new li(f.framebufferWidth,f.framebufferHeight,{format:mn,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function te(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;te(O,i);for(let e=0;e<a.length;e++)te(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ne(e,O,i)};function ne(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Mr*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let re=null;function ie(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new As,o.layers.enable(n),o.viewport=new si,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ko,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}re&&re(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ae=new ec;ae.setAnimationLoop(ie),this.setAnimationLoop=function(e){re=e},this.dispose=function(){}}},td=new fi,nd=new Gr;nd.set(-1,0,0,0,1,0,0,0,1);function rd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ho(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(td.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(nd),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function id(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?q(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):q(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var ad=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),od=null;function sd(){return od===null&&(od=new vo(ad,16,16,yn,on),od.name=`DFG_LUT`,od.minFilter=Yt,od.magFilter=Yt,od.wrapS=Wt,od.wrapT=Wt,od.generateMipmaps=!1,od.needsUpdate=!0),od}var cd=class{constructor(e={}){let{canvas:t=Sr(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Qt}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([xn,bn,vn]),g=new Set([Qt,rn,tn,ln,sn,cn]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=fr;let j=0,ee=0,M=null,te=-1,ne=null,re=new si,ie=new si,ae=null,oe=new qi(0),se=0,ce=t.width,le=t.height,ue=1,de=null,fe=null,pe=new si(0,0,ce,le),me=new si(0,0,ce,le),he=!1,ge=new So,_e=new wo,ve=!1,N=!1,P=new fi,F=new Y,ye=new si,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function I(){return M===null?ue:1}let L=n;function Se(e,n){return t.getContext(e,n)}let R,z,B,V,H,U,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,W,!1),t.addEventListener(`webglcontextrestored`,He,!1),t.addEventListener(`webglcontextcreationerror`,Ue,!1),L===null){let t=`webgl2`;if(L=Se(t,e),L===null)throw Se(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Be()}catch(e){throw t.removeEventListener(`webglcontextlost`,W,!1),t.removeEventListener(`webglcontextrestored`,He,!1),t.removeEventListener(`webglcontextcreationerror`,Ue,!1),J(`WebGLRenderer: `+e.message),e}function Be(){R=new Oc(L),R.init(),Le=new Xu(L,R),z=new lc(L,R,e,Le),B=new Ju(L,R),z.reversedDepthBuffer&&d&&B.buffers.depth.setReversed(!0),O=L.createFramebuffer(),k=L.createFramebuffer(),A=L.createFramebuffer(),V=new jc(L),H=new Ou,U=new Yu(L,R,B,H,z,Le,V),Ce=new Dc(T),we=new tc(L),Re=new sc(L,we),Te=new kc(L,we,V,Re),Ee=new Nc(L,Te,we,Re,V),Pe=new Mc(L,z,U),je=new uc(H),De=new Du(T,Ce,R,z,Re,je),Oe=new rd(T,H),ke=new Mu,Ae=new zu(R),Ne=new oc(T,Ce,B,Ee,p,s),Me=new qu(T,Ee,z),ze=new id(L,V,z,B),Fe=new cc(L,R,V),Ie=new Ac(L,R,V),V.programs=De.programs,T.capabilities=z,T.extensions=R,T.properties=H,T.renderLists=ke,T.shadowMap=Me,T.state=B,T.info=V}m!==1009&&(w=new Fc(m,t.width,t.height,o,r,i));let Ve=new ed(T,L);this.xr=Ve,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=R.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=R.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(e){e!==void 0&&(ue=e,this.setSize(ce,le,!1))},this.getSize=function(e){return e.set(ce,le)},this.setSize=function(e,n,r=!0){Ve.isPresenting?q(`WebGLRenderer: Can't change size while VR device is presenting.`):(ce=e,le=n,t.width=Math.floor(e*ue),t.height=Math.floor(n*ue),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ce*ue,le*ue).floor()},this.setDrawingBufferSize=function(e,n,r){ce=e,le=n,ue=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)J(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){q(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(re)},this.getViewport=function(e){return e.copy(pe)},this.setViewport=function(e,t,n,r){e.isVector4?pe.set(e.x,e.y,e.z,e.w):pe.set(e,t,n,r),B.viewport(re.copy(pe).multiplyScalar(I()).round())},this.getScissor=function(e){return e.copy(me)},this.setScissor=function(e,t,n,r){e.isVector4?me.set(e.x,e.y,e.z,e.w):me.set(e,t,n,r),B.scissor(ie.copy(me).multiplyScalar(I()).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(e){B.setScissorTest(he=e)},this.setOpaqueSort=function(e){de=e},this.setTransparentSort=function(e){fe=e},this.getClearColor=function(e){return e.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Ne.getClearColor(),r=Ne.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,L.clearBufferuiv(L.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,L.clearBufferiv(L.COLOR,0,v))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,W,!1),t.removeEventListener(`webglcontextrestored`,He,!1),t.removeEventListener(`webglcontextcreationerror`,Ue,!1),Ne.dispose(),ke.dispose(),Ae.dispose(),U.dispose(),H.dispose(),Ce.dispose(),Ee.dispose(),Te.dispose(),Re.dispose(),ze.dispose(),De.dispose(),Ve.dispose(),Ve.removeEventListener(`sessionstart`,Xe),Ve.removeEventListener(`sessionend`,Ze),Qe.stop()};function W(e){e.preventDefault(),wr(`WebGLRenderer: Context Lost.`),E=!0}function He(){wr(`WebGLRenderer: Context Restored.`),E=!1;let e=V.autoReset,t=Me.enabled,n=Me.autoUpdate,r=Me.needsUpdate,i=Me.type;Be(),V.autoReset=e,Me.enabled=t,Me.autoUpdate=n,Me.needsUpdate=r,Me.type=i}function Ue(e){J(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function We(e){let t=e.target;t.removeEventListener(`dispose`,We),Ge(t)}function Ge(e){Ke(e),H.remove(e)}function Ke(e){let t=H.get(e).programs;t!==void 0&&(t.forEach(function(e){De.releaseProgram(e)}),e.isShaderMaterial&&De.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=be);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=st(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Te.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Re.setup(i,r,s,n,c);let h,g=Fe;if(c!==null&&(h=we.get(c),g=Ie,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*I()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*I()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh){if(R.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?we.get(c).bytesPerElement:1,o=H.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function qe(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),ve===!0&&je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,it(e,t,r),e.side=0,e.needsUpdate=!0,it(e,t,r),e.side=2):it(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Ae.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),N=this.localClippingEnabled,ve=je.init(this.clippingPlanes,N),ve===!0&&je.setGlobalState(this.clippingPlanes,t),D!==null&&Me.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];qe(o,n,t,e),r.add(o)}else qe(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=H.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}R.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Je=null;function Ye(e){Je&&Je(e)}function Xe(){Qe.stop()}function Ze(){Qe.start()}let Qe=new ec;Qe.setAnimationLoop(Ye),typeof self<`u`&&Qe.setContext(self),this.setAnimationLoop=function(e){Je=e,Ve.setAnimationLoop(e),e===null?Qe.stop():Qe.start()},Ve.addEventListener(`sessionstart`,Xe),Ve.addEventListener(`sessionend`,Ze),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){J(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ve.enabled===!0&&Ve.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(t),t=Ve.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=Ae.get(e,C.length),x.init(t),x.state.textureUnits=U.getTextureUnits(),C.push(x),P.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?_e.setFromArrayCamera(t):ge.setFromProjectionMatrix(P,vr,t.reversedDepth),N=this.localClippingEnabled,ve=je.init(this.clippingPlanes,N),b=ke.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,Ve.enabled===!0&&Ve.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&$e(e,t,-1/0,T.sortObjects)}$e(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(de,fe),xe=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,xe&&Ne.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),ve===!0&&je.beginShadows();let i=x.state.shadowsArray;if(Me.render(i,e,t),ve===!0&&je.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];tt(n,r,e,a)}xe&&Ne.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];et(b,e,n,n.viewport)}}else r.length>0&&tt(n,r,e,t),xe&&Ne.render(e),et(b,e,t)}M!==null&&ee===0&&(U.updateMultisampleRenderTarget(M),U.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Re.resetDefaultState(),te=-1,ne=null,C.pop(),C.length>0?(x=C[C.length-1],U.setTextureUnits(x.state.textureUnits),ve===!0&&je.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function $e(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?_e:ge;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&ye.setFromMatrixPosition(e.matrixWorld).applyMatrix4(P);let i=Ee.update(e),a=e.material;a.visible&&b.push(e,i,a,n,ye.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?_e:ge;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ee.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ye.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ye.copy(e.boundingSphere.center)),ye.applyMatrix4(e.matrixWorld).applyMatrix4(P)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,ye.z,s,t)}}else a.visible&&b.push(e,i,a,n,ye.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)$e(i[e],t,n,r)}function et(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ve===!0&&je.setGlobalState(T.clippingPlanes,n),r&&B.viewport(re.copy(r)),i.length>0&&G(i,t,n),a.length>0&&G(a,t,n),o.length>0&&G(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=R.has(`EXT_color_buffer_half_float`)||R.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new li(1,1,{generateMipmaps:!0,type:e?on:Qt,minFilter:Zt,samples:Math.max(4,z.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xr.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||re;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(oe),se=T.getClearAlpha(),se<1&&T.setClearColor(16777215,.5),T.clear(),xe&&Ne.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ve===!0&&je.setGlobalState(T.clippingPlanes,r),G(e,n,r),U.updateMultisampleRenderTarget(a),U.updateRenderTargetMipmap(a),R.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,nt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(U.updateMultisampleRenderTarget(a),U.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(oe,se),d!==void 0&&(r.viewport=d),T.toneMapping=u}function G(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&nt(o,t,n,s,l,c)}}function nt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function rt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function it(e,t,n){t.isScene!==!0&&(t=be);let r=H.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=De.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=De.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ce.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,We),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return K(e,s),d}else s.uniforms=De.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=De.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=je.uniform),K(e,s),r.needsLights=lt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=rt(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function at(e,t,n,r,i){let a=H.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=it(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Wl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function K(e,t){let n=H.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function st(e,t,n,r,i){t.isScene!==!0&&(t=be),U.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Xr.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ce.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=H.get(r),b=x.state.lights;if(ve===!0&&(N===!0||e!==ne)){let t=e===ne&&r.id===te;je.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==je.numPlanes||v.numIntersection!==je.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===rt(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?at(r,t,i,s,h):it(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,k=!1,A=w.getUniforms(),j=v.uniforms;if(B.useProgram(w.program)&&(E=!0,O=!0,k=!0),r.id!==te&&(te=r.id,O=!0),E||ne!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(L,`projectionMatrix`,e.projectionMatrix),A.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(L,F.setFromMatrixPosition(e.matrixWorld)),z.logarithmicDepthBuffer&&A.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),ne!==e&&(ne=e,O=!0,k=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(L,`sunShadowMap`,b.state.sunShadowMap,U),b.state.directionalShadowMap.length>0&&A.setValue(L,`directionalShadowMap`,b.state.directionalShadowMap,U),b.state.spotShadowMap.length>0&&A.setValue(L,`spotShadowMap`,b.state.spotShadowMap,U),b.state.pointShadowMap.length>0&&A.setValue(L,`pointShadowMap`,b.state.pointShadowMap,U)),i.isSkinnedMesh){A.setOptional(L,i,`bindMatrix`),A.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(L,`boneTexture`,e.boneTexture,U))}i.isBatchedMesh&&(A.setOptional(L,i,`batchingTexture`),A.setValue(L,`batchingTexture`,i._matricesTexture,U),A.setOptional(L,i,`batchingIdTexture`),A.setValue(L,`batchingIdTexture`,i._indirectTexture,U),A.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(L,`batchingColorTexture`,i._colorsTexture,U));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Pe.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(L,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=sd()),O){if(A.setValue(L,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ct(j,k),a&&r.fog===!0&&Oe.refreshFogUniforms(j,a),Oe.refreshMaterialUniforms(j,r,ue,le,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}Wl.upload(L,ot(v),j,U)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Wl.upload(L,ot(v),j,U),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(L,`center`,i.center),A.setValue(L,`modelViewMatrix`,i.modelViewMatrix),A.setValue(L,`normalMatrix`,i.normalMatrix),A.setValue(L,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ze.update(n,w),ze.bind(n,w)}}return w}function ct(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function lt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=H.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),H.get(e.texture).__webglTexture=t,H.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=H.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=H.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(L.FRAMEBUFFER,o.__webglFramebuffer),re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest,B.viewport(re),B.scissor(ie),B.setScissorTest(ae),te=-1;return}if(o.__webglFramebuffer===void 0)U.setupRenderTarget(e);else if(o.__hasExternalTextures)U.rebindTextures(e,H.get(e.texture).__webglTexture,H.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&H.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);U.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=H.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&U.useMultisampledRTT(e)===!1?H.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest}else re.copy(pe).multiplyScalar(ue).floor(),ie.copy(me).multiplyScalar(ue).floor(),ae=he;if(n!==0&&(r=O),B.bindFramebuffer(L.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(re),B.scissor(ie),B.setScissorTest(ae),i){let r=H.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=H.get(e.textures[t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=H.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,t.__webglTexture,n)}te=-1};function ut(e){let t=H.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=z.textureFormatReadable(e.format),t.__typeReadable=z.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){J(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){B.bindFramebuffer(L.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let u=ut(o);if(u.__formatReadable===!1){J(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){J(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,Le.convert(c),Le.convert(l),a)}finally{let e=M===null?null:H.get(M).__webglFramebuffer;B.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(L.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let d=ut(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,Le.convert(l),Le.convert(u),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let p=M===null?null:H.get(M).__webglFramebuffer;B.bindFramebuffer(L.FRAMEBUFFER,p);let m=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Dr(L,m,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(f),L.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;U.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Le.convert(t.format),_=Le.convert(t.type),v;t.isData3DTexture?(U.setTexture3D(t,0),v=L.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(U.setTexture2DArray(t,0),v=L.TEXTURE_2D_ARRAY):(U.setTexture2D(t,0),v=L.TEXTURE_2D),B.activeTexture(L.TEXTURE0),B.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(L.UNPACK_ROW_LENGTH),b=B.getParameter(L.UNPACK_IMAGE_HEIGHT),x=B.getParameter(L.UNPACK_SKIP_PIXELS),S=B.getParameter(L.UNPACK_SKIP_ROWS),C=B.getParameter(L.UNPACK_SKIP_IMAGES);B.pixelStorei(L.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(L.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(L.UNPACK_SKIP_PIXELS,l),B.pixelStorei(L.UNPACK_SKIP_ROWS,u),B.pixelStorei(L.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=H.get(e),r=H.get(t),h=H.get(n.__renderTarget),g=H.get(r.__renderTarget);B.bindFramebuffer(L.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(L.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(e).__webglTexture,i,d+n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(t).__webglTexture,a,m+n)),L.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,L.DEPTH_BUFFER_BIT,L.NEAREST);B.bindFramebuffer(L.READ_FRAMEBUFFER,null),B.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||H.has(e)){let n=H.get(e),r=H.get(t);B.bindFramebuffer(L.READ_FRAMEBUFFER,k),B.bindFramebuffer(L.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,n.__webglTexture,i),T?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,r.__webglTexture,a),i===0?T?L.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):L.copyTexSubImage2D(v,a,f,p,l,u,o,s):L.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,L.COLOR_BUFFER_BIT,L.NEAREST);B.bindFramebuffer(L.READ_FRAMEBUFFER,null),B.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(L.UNPACK_ROW_LENGTH,y),B.pixelStorei(L.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(L.UNPACK_SKIP_PIXELS,x),B.pixelStorei(L.UNPACK_SKIP_ROWS,S),B.pixelStorei(L.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&L.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){H.get(e).__webglFramebuffer===void 0&&U.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?U.setTextureCube(e,0):e.isData3DTexture?U.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?U.setTexture2DArray(e,0):U.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,B.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return vr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xr._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xr._getUnpackColorSpace()}};function ld(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Wa;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=ud(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=ud(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function ud(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new ka(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var dd=new Jo({vertexColors:!0}),fd=new no({color:0,transparent:!0,opacity:.28,depthWrite:!1}),pd=new jo(.38,12).rotateX(-Math.PI/2);function md(e,t){let n=new qi(t),r=e.index?e.toNonIndexed():e,i=r.attributes.position.count,a=new Float32Array(i*3);for(let e=0;e<i;e++)a[e*3]=n.r,a[e*3+1]=n.g,a[e*3+2]=n.b;return r.setAttribute(`color`,new ka(a,3)),r.deleteAttribute(`uv`),r}var hd=(e,t,n,r,i,a,o)=>md(new Ao(e,t,n).translate(r,i,a),o),gd=(e,t,n,r,i,a,o,s=8)=>md(new Mo(e,t,n,s).translate(r,i,a),o),_d=(e,t,n,r,i,a=1,o=1)=>md(new Io(e,10,8).scale(1,a,o).translate(t,n,r),i),vd=(e,t,n,r,i,a=1)=>md(new Io(e,10,6,0,Math.PI*2,0,Math.PI*.55).scale(1,a,1).translate(t,n,r),i),yd=e=>new ho(ld(e),dd);function bd(e){let t=new Bi,n=new Bi,r=e.top;return n.add(yd([_d(.13,0,.13,0,r,1,1.5),_d(.085,0,.26,.15,r),hd(.04,.07,.03,-.045,.34,.15,r),hd(.04,.07,.03,.045,.34,.15,r),gd(.018,.022,.3,.1,.1,-.18,r,5).rotateZ(-.9),hd(.02,.02,.01,-.03,.275,.228,14204992),hd(.02,.02,.01,.03,.275,.228,14204992)])),t.add(n),{root:t,body:n,height:.35,phase:0}}function xd(e){if(e.kind===`cat`)return bd(e);let t=e.h,n=e.w??1,r=!!e.child,i=r?.115:.105,a=t-i-.01,o=a-i-.07,s=t*.5,c=.2*n*(r?.8:1),l=e.bottom??4866104,u=[],d=o-s+.06;u.push(gd(c*.82,c*.95*(n>1.15?1.15:1),d,0,s+d/2,0,e.top,10)),u.push(_d(c*.86,0,o+.02,0,e.top,.45,.8)),e.long?u.push(gd(c*.95,c*1.45,s-.04,0,s/2+.04,0,e.top,10)):u.push(gd(c*.97,c*1.2,t/1.7*.26,0,s-t/1.7*.1,0,e.top,10)),e.belt!==void 0&&u.push(gd(c*.99,c*.99,.05,0,s+.07,0,e.belt,10)),e.apron!==void 0&&u.push(hd(c*1.3,(e.long?s*.75:.5)+.2,.02,0,s-(e.long?s*.25:.1),c*(e.long?1.18:1.02),e.apron)),e.cloak!==void 0&&u.push(md(new Mo(c*1.05,c*1.5,o-s*.55,10,1,!0,Math.PI*.5,Math.PI).translate(0,(o+s*.55)/2,-.03),e.cloak)),u.push(gd(.045,.05,.08,0,a-i-.02,0,e.skin,6)),u.push(_d(i,0,a,0,e.skin,1.12,1)),u.push(hd(.022,.022,.012,-.038,a+.012,i*.93,1709072),hd(.022,.022,.012,.038,a+.012,i*.93,1709072)),u.push(hd(.02,.035,.03,0,a-.015,i*.98,e.skin));let f=e.hairStyle??`short`;f!==`bald`&&f!==`tonsure`&&u.push(vd(i*1.06,0,a+.012,-.008,e.hair,1.12)),f===`tonsure`&&u.push(gd(i*1.04,i*1.04,.045,0,a+.03,-.005,e.hair,10)),f===`bald`&&u.push(gd(i*1.03,i*1.03,.04,0,a-.005,-.012,e.hair,10)),f===`long`&&u.push(hd(i*1.7,.2,.05,0,a-.1,-i*.8,e.hair)),f===`bun`&&u.push(_d(.05,0,a+.02,-i*1.05,e.hair)),f===`bowl`&&u.push(gd(i*1.08,i*1.1,.07,0,a+.015,-.005,e.hair,10)),e.beard!==void 0&&u.push(_d(i*.72,0,a-i*.72,i*.42,e.beard,.8,.7));let p=e.headColor??14209216;switch(e.head){case`coif`:u.push(vd(i*1.1,0,a+.005,-.012,p,1.2));break;case`veil`:u.push(vd(i*1.14,0,a+.01,-.01,p,1.15),hd(i*2.1,.3,.04,0,a-.14,-i*.95,p));break;case`wimple`:u.push(vd(i*1.14,0,a+.01,-.01,p,1.15),hd(i*2.1,.26,.04,0,a-.12,-i*.95,p),gd(i*1.02,c*.7,.1,0,a-i-.03,0,p,10));break;case`hood`:u.push(vd(i*1.2,0,a,-.02,p,1.2),gd(i*1.1,c*1.05,.13,0,o+.04,0,p,10));break;case`cap`:u.push(gd(i*.95,i*1.08,.07,0,a+i*.95,0,p,10));break;case`straw`:u.push(gd(i*2.1,i*2.2,.015,0,a+i*.75,0,p,14),gd(i*.8,i*1,.09,0,a+i*1.05,0,p,10));break;case`helmet`:u.push(vd(i*1.13,0,a+.01,0,p,1.15),gd(i*1.3,i*1.35,.02,0,a+.02,0,p,12))}let m=new Bi;m.add(yd(u));let h=new Bi;h.add(m);let g=(o-s)*1.05+.12,_=t=>{let r=new Bi;return r.position.set(t*(c+.035),o,0),r.add(yd([gd(.045*n,.04*n,g,0,-g/2,0,e.top,6),_d(.042,0,-g-.02,0,e.skin)])),r.rotation.z=t*.07,m.add(r),r},v=_(-1),y=_(1),b,x,S=e=>{let t=new Bi;t.position.set(e*c*.45,s,0);let r=s;return t.add(yd([gd(.06*n,.045*n,r-.04,0,-r/2+.02,0,l,6),hd(.085,.06,.2,0,-r+.03,.04,3023384)])),m.add(t),t};e.long?m.add(yd([hd(.085,.05,.16,-.07,.025,.08,3023384),hd(.085,.05,.16,.07,.025,.08,3023384)])):(b=S(-1),x=S(1)),e.prop===`spear`?y.add(yd([gd(.014,.014,2.2,0,-g+.55,.05,5914664,5),md(new No(.035,.2,5).translate(0,-g+1.75,.05),11054516)])):e.prop===`staff`?(y.add(yd([gd(.015,.018,1.25,0,-g+.35,.06,5914664,5)])),y.rotation.x=-.25):e.prop===`basket`&&v.add(yd([gd(.13,.1,.13,0,-g-.1,.05,10123845,8),md(new Lo(.1,.012,4,10,Math.PI).translate(0,-g-.04,.05),8018480)])),e.stoop&&(m.rotation.x=e.stoop);let C=new ho(pd,fd);return C.position.y=.02,C.scale.setScalar(n),h.add(C),{root:h,body:m,armL:v,armR:y,legL:b,legR:x,height:t,phase:Math.random()*6}}function Sd(e,t,n){let r=e.body;r.rotation.set(n.stoop??0,0,0),r.position.set(0,0,0),e.legL&&e.legR&&(e.legL.rotation.x=0,e.legR.rotation.x=0),t===`lie`?(r.rotation.x=-Math.PI/2,r.position.set(0,.22,e.height*.5)):t===`sit`&&n.kind!==`cat`&&(r.position.y=-e.height*.2,e.legL&&e.legR&&(e.legL.rotation.x=-1.4,e.legR.rotation.x=-1.4))}function Cd(e,t,n,r){if(r!==`stand`)return;let i=Math.sin(t*7+e.phase)*.55*n;e.legL&&e.legR&&(e.legL.rotation.x=i,e.legR.rotation.x=-i),e.armL&&e.armR&&(e.armL.rotation.x=-i*.6,(!e.armR.children.length||e.armR.children.length<2)&&(e.armR.rotation.x=i*.6)),e.body.position.y=n>.1?Math.abs(Math.sin(t*7+e.phase))*.025:Math.sin(t*1.6+e.phase)*.004}var wd=class{constructor(e){this.els=e,this.moveX=0,this.moveZ=0,this.run=!1,this.yawDelta=0,this.pitchDelta=0,this.sensitivity=1,this.enabled=!0,this.onAction=()=>{},this.onMenu=()=>{},this.keys=new Set,this.stickId=null,this.stick={x:0,z:0},this.lookId=null,this.lookAt={x:0,y:0},this.mouseDrag=!1,this.off=[];let t=(e,t,n,r)=>{e.addEventListener(t,n,r),this.off.push(()=>e.removeEventListener(t,n,r))},{canvas:n,stickZone:r,stickBase:i,stickKnob:a,lookZone:o}=e,s=e=>{let t=i.getBoundingClientRect(),n=e.clientX-(t.left+t.width/2),r=e.clientY-(t.top+t.height/2),o=Math.hypot(n,r);o>46&&(n*=46/o,r*=46/o),this.stick.x=n/46,this.stick.z=r/46,a.style.transform=`translate(calc(-50% + ${n}px), calc(-50% + ${r}px))`};t(r,`pointerdown`,e=>{if(e.pointerType===`mouse`)this.mouseDown();else if(this.stickId===null){e.preventDefault(),this.stickId=e.pointerId;try{r.setPointerCapture(e.pointerId)}catch{}i.classList.add(`on`),s(e)}}),t(r,`pointermove`,e=>{e.pointerId===this.stickId&&s(e)});let c=e=>{e.pointerId===this.stickId&&(this.stickId=null,this.stick.x=this.stick.z=0,i.classList.remove(`on`),a.style.transform=`translate(-50%, -50%)`)};t(r,`pointerup`,c),t(r,`pointercancel`,c),t(o,`pointerdown`,e=>{if(e.pointerType===`mouse`)this.mouseDown();else if(this.lookId===null){e.preventDefault(),this.lookId=e.pointerId,this.lookAt.x=e.clientX,this.lookAt.y=e.clientY;try{o.setPointerCapture(e.pointerId)}catch{}}}),t(o,`pointermove`,e=>{e.pointerId===this.lookId&&(this.yawDelta-=(e.clientX-this.lookAt.x)*.006*this.sensitivity,this.pitchDelta-=(e.clientY-this.lookAt.y)*.006*this.sensitivity,this.lookAt.x=e.clientX,this.lookAt.y=e.clientY)});let l=e=>{e.pointerId===this.lookId&&(this.lookId=null)};t(o,`pointerup`,l),t(o,`pointercancel`,l),t(window,`pointerup`,e=>{e.pointerType===`mouse`&&(this.mouseDrag=!1)}),t(window,`mousemove`,e=>{this.enabled&&(document.pointerLockElement===n||this.mouseDrag)&&(this.yawDelta-=e.movementX*.0024*this.sensitivity,this.pitchDelta-=e.movementY*.0024*this.sensitivity)}),t(window,`keydown`,e=>{if(e.repeat)return;let t=e.key.toLowerCase();this.keys.add(t),(t===`e`||t===`enter`||t===` `)&&(this.onAction(),t===` `&&e.preventDefault()),(t===`escape`||t===`m`||t===`tab`)&&(this.onMenu(),e.preventDefault())}),t(window,`keyup`,e=>this.keys.delete(e.key.toLowerCase())),t(window,`blur`,()=>this.keys.clear());for(let e of[`gesturestart`,`gesturechange`,`gestureend`])t(document,e,e=>e.preventDefault(),{passive:!1});t(document,`touchmove`,e=>{e.touches.length>1&&e.preventDefault()},{passive:!1});for(let e of[r,o])t(e,`touchstart`,e=>e.preventDefault(),{passive:!1});t(document,`contextmenu`,e=>e.preventDefault())}mouseDown(){if(!this.enabled)return;this.mouseDrag=!0;let e=this.els.canvas;if(e.requestPointerLock&&document.pointerLockElement!==e)try{let t=e.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}read(){let e=this.keys,t=(e.has(`d`)||e.has(`arrowright`)?1:0)-(e.has(`a`)||e.has(`arrowleft`)?1:0),n=(e.has(`s`)||e.has(`arrowdown`)?1:0)-(e.has(`w`)||e.has(`arrowup`)?1:0);if(t||n){let e=Math.hypot(t,n);t/=e,n/=e}this.stickId!==null&&(t=this.stick.x,n=this.stick.z),this.moveX=t,this.moveZ=n,this.run=e.has(`shift`)}release(){this.keys.clear(),this.mouseDrag=!1,this.yawDelta=this.pitchDelta=0,document.pointerLockElement&&document.exitPointerLock?.()}dispose(){this.off.forEach(e=>e()),this.off=[]}};function Td(e,t){let n=document.createElement(`canvas`);n.width=n.height=e,t(n.getContext(`2d`),e);let r=new Eo(n);return r.wrapS=r.wrapT=Ut,r.colorSpace=fr,r.anisotropy=4,r}var Ed=7,Dd=()=>(Ed=Ed*16807%2147483647,Ed/2147483647),Od=(e,t,n,r)=>{for(let i=0;i<n;i++){let n=Dd()<.5?0:255;e.fillStyle=`rgba(${n},${n},${n},${Dd()*r})`,e.fillRect(Dd()*t,Dd()*t,1+Dd()*3,1+Dd()*3)}};function kd(){return{plaster:Td(128,(e,t)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,t),Od(e,t,900,.07);for(let n=0;n<5;n++){e.strokeStyle=`rgba(60,40,20,${.05+Dd()*.06})`,e.beginPath();let n=Dd()*t,r=Dd()*t;e.moveTo(n,r),e.lineTo(n+(Dd()-.5)*40,r+Dd()*50),e.stroke()}let n=e.createLinearGradient(0,0,0,t);n.addColorStop(0,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(60,40,20,0.12)`),e.fillStyle=n,e.fillRect(0,0,t,t)}),stone:Td(256,(e,t)=>{e.fillStyle=`#8f887a`,e.fillRect(0,0,t,t);let n=t/6;for(let r=0;r<6;r++){let i=r%2?-n*.6:0;for(;i<t;){let t=n*(1.1+Dd()*1.3),a=150+Dd()*60;e.fillStyle=`rgb(${a},${a-6},${a-18})`,e.fillRect(i+2,r*n+2,t-3,n-3),i+=t}}Od(e,t,2500,.1)}),cobble:Td(256,(e,t)=>{e.fillStyle=`#5d564b`,e.fillRect(0,0,t,t);let n=t/8;for(let r=0;r<8;r++)for(let i=0;i<8;i++){let a=120+Dd()*55;e.fillStyle=`rgb(${a},${a-5},${a-16})`;let o=(r%2?n/2:0)+i*n+Dd()*3,s=r*n+Dd()*3;e.beginPath(),e.ellipse((o+n/2)%t,s+n/2,n*.43,n*.4,0,0,7),e.fill()}Od(e,t,1500,.08)}),dirt:Td(128,(e,t)=>{e.fillStyle=`#7d6a4f`,e.fillRect(0,0,t,t),Od(e,t,2600,.12)}),grass:Td(128,(e,t)=>{e.fillStyle=`#6f7a45`,e.fillRect(0,0,t,t),Od(e,t,2600,.1)}),wood:Td(128,(e,t)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,t);for(let n=0;n<4;n++)e.fillStyle=`rgba(0,0,0,${.04+Dd()*.1})`,e.fillRect(n*t/4,0,t/4-2,t),e.fillStyle=`rgba(0,0,0,0.35)`,e.fillRect(n*t/4+t/4-2,0,2,t);for(let n=0;n<60;n++)e.fillStyle=`rgba(0,0,0,${Dd()*.08})`,e.fillRect(Dd()*t,0,1,t)}),roof:Td(128,(e,t)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,t);let n=t/8;for(let r=0;r<8;r++)for(let i=0;i<8;i++){let a=190+Dd()*65;e.fillStyle=`rgb(${a},${a},${a})`,e.fillRect(i*t/8+(r%2?t/16:0),r*n,t/8-2,n-1),e.fillStyle=`rgba(0,0,0,0.3)`,e.fillRect(i*t/8+(r%2?t/16:0),r*n+n-3,t/8-2,3)}})}}var Ad=[15126432,15391932,14265224,13813938,14859634];function jd(e){let t=e=>new Jo(e),n={stone:t({map:e.stone}),stoneDark:t({map:e.stone,color:11117204}),slab:t({map:e.stone,color:14209216}),roof:t({map:e.roof,color:12146490,side:2}),wood:t({map:e.wood,color:9069112}),woodDark:t({map:e.wood,color:5059616}),floorWood:t({map:e.wood,color:10123858}),cobble:t({map:e.cobble}),dirt:t({map:e.dirt}),grass:t({map:e.grass}),cloth:t({color:15130575}),shroud:t({color:13946299}),straw:t({color:13217378}),dark:t({color:1512207}),iron:t({color:5592666}),red:t({color:9056304}),green:t({color:5205818}),blue:t({color:4020864}),bread:t({color:12159562}),gold:t({color:13672496}),leaf:t({color:3099178}),hill:t({color:8161874}),glow:new no({color:16773320}),flame:new no({color:16752704}),smoke:new no({color:9077880,transparent:!0,opacity:.35,depthWrite:!1})};return Ad.forEach((r,i)=>{n[`plaster`+i]=t({map:e.plaster,color:r})}),n}function Md(e,t,n,r=2){let i=new Ao(e,t,n),a=i.attributes.uv,o=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let e=0;e<6;e++)for(let t=0;t<4;t++){let n=e*4+t;a.setXY(n,a.getX(n)*o[e][0]/r,a.getY(n)*o[e][1]/r)}return i}var Nd=(e,t,n,r,i=0)=>(i&&e.rotateY(i),e.translate(t,n,r)),Pd=class{constructor(){this.parts=new Map,this.put=(e,t)=>{let n=t.index?t.toNonIndexed():t;this.parts.has(e)||this.parts.set(e,[]),this.parts.get(e).push(n)}}placed(e,t,n=0,r=0){return(i,a)=>this.put(i,Nd(a,e,r,t,n))}build(e,t=!0){let n=new Bi;for(let[r,i]of this.parts){let a=new ho(ld(i),e[r]);a.castShadow=t&&r!==`glow`&&r!==`flame`,a.receiveShadow=t,n.add(a)}return n}};function Fd(e,t,n,r){let i=e/2+r,a=t/2,o=a+r,s=n*r/a,c=[],l=[],u=Math.hypot(o,n+s),d=e=>{let t=[[-i,-s,e],[i,-s,e],[i,n,0],[-i,n,0]],r=[[0,0],[2*i/2,0],[2*i/2,u/2],[0,u/2]];for(let e of[0,1,2,0,2,3])c.push(...t[e]),l.push(...r[e])};d(-o),d(o);let f=new Wa;f.setAttribute(`position`,new Ma(c,3)),f.setAttribute(`uv`,new Ma(l,2)),f.computeVertexNormals();let p=[],m=[],h=e/2;for(let[e,t,r]of[[[h,0,a],[h,0,-a],[h,n,0]],[[-h,0,a],[-h,n,0],[-h,0,-a]]])p.push(...e,...t,...r),m.push(e[2]/2,e[1]/2,t[2]/2,t[1]/2,r[2]/2,r[1]/2);let g=new Wa;return g.setAttribute(`position`,new Ma(p,3)),g.setAttribute(`uv`,new Ma(m,2)),g.computeVertexNormals(),{roof:f,ends:g}}var Id={n:{ry:Math.PI,nx:0,nz:-1},s:{ry:0,nx:0,nz:1},e:{ry:Math.PI/2,nx:1,nz:0},w:{ry:-Math.PI/2,nx:-1,nz:0}};function Ld(e,t,n,r=0){let i=Id[t],a=t===`e`?e.x1:t===`w`?e.x0:n,o=t===`s`?e.z1:t===`n`?e.z0:n;return{x:a+i.nx*r,z:o+i.nz*r,ry:i.ry}}var Rd=(e,t)=>t===`n`||t===`s`?[e.x0,e.x1]:[e.z0,e.z1];function zd(e,t,n,r){let i=(e,n,r,i,a,o,s,c=0)=>t(e,Nd(Md(n,r,i,1.5),a,o,s,c)),a=(e,n,r,i,a,o,s,c=10)=>t(e,new Mo(n,r,i,c).translate(a,o,s)),o=(e,n,r,i,a,o=1,s=1,c=1)=>t(e,new Io(n,8,6).scale(o,s,c).translate(r,i,a)),s=(e,t,i,a)=>{let o=new ho(new No(.22*a,.6*a,6),r.flame);o.position.set(e,t,i),o.userData.flame=a,n.push(o)};switch(e){case`well`:a(`stone`,1,1.05,.9,0,.45,0,12),a(`dark`,.82,.82,.02,0,.91,0,12),i(`wood`,.14,2.3,.14,-.95,1.15,0),i(`wood`,.14,2.3,.14,.95,1.15,0),i(`wood`,2.3,.14,.14,0,2.25,0),a(`woodDark`,.16,.13,.26,.2,1.05,.3,8);break;case`notice`:i(`woodDark`,.1,2.1,.1,-.7,1.05,0),i(`woodDark`,.1,2.1,.1,.7,1.05,0),i(`wood`,1.5,1,.06,0,1.55,0),i(`cloth`,.42,.55,.02,-.35,1.58,.04),i(`cloth`,.5,.38,.02,.3,1.66,.04),i(`cloth`,.3,.3,.02,.38,1.26,.04);break;case`barrel`:a(`wood`,.36,.33,.9,0,.45,0),a(`iron`,.375,.375,.05,0,.25,0),a(`iron`,.385,.385,.05,0,.68,0);break;case`crates`:i(`wood`,.8,.8,.8,0,.4,.25,.2),i(`wood`,.6,.6,.6,.05,1.1,.2,-.3),i(`wood`,.6,.5,.6,0,.25,-.5);break;case`fire`:a(`stoneDark`,.7,.75,.16,0,.08,0,10),i(`woodDark`,.9,.14,.14,0,.22,0,.5),i(`woodDark`,.9,.14,.14,0,.22,0,-.6),i(`woodDark`,.8,.14,.14,0,.34,0,1.6),s(0,.65,0,1.3),s(.15,.5,.1,.8);for(let e=0;e<4;e++){let t=new ho(new Io(.45,6,5),r.smoke);t.userData.smoke=e/4,t.position.set(0,1,0),n.push(t)}break;case`cart`:i(`wood`,1.5,.12,2.6,0,.85,0),i(`wood`,.08,.4,2.6,-.75,1.05,0),i(`wood`,.08,.4,2.6,.75,1.05,0),t(`woodDark`,new Mo(.6,.6,.1,12).rotateZ(Math.PI/2).translate(-.88,.6,.2)),t(`woodDark`,new Mo(.6,.6,.1,12).rotateZ(Math.PI/2).translate(.88,.6,.2)),i(`wood`,.08,.08,1.6,-.5,.8,2),i(`wood`,.08,.08,1.6,.5,.8,2),o(`shroud`,.3,-.3,1.1,-.2,1,.7,2.8),o(`shroud`,.3,.32,1.12,.15,1,.7,2.6),o(`shroud`,.28,0,1.38,0,1,.7,2.7);break;case`handcart`:i(`wood`,.9,.1,1.4,0,.6,0),i(`wood`,.06,.3,1.4,-.45,.78,0),i(`wood`,.06,.3,1.4,.45,.78,0),t(`woodDark`,new Mo(.4,.4,.08,10).rotateZ(Math.PI/2).translate(-.54,.4,0)),t(`woodDark`,new Mo(.4,.4,.08,10).rotateZ(Math.PI/2).translate(.54,.4,0)),i(`wood`,.06,.06,.9,-.35,.7,1.1),i(`wood`,.06,.06,.9,.35,.7,1.1);break;case`bench`:i(`wood`,1.5,.08,.4,0,.44,0),i(`woodDark`,.1,.44,.36,-.6,.22,0),i(`woodDark`,.1,.44,.36,.6,.22,0);break;case`laundry`:t(`woodDark`,new Mo(.015,.015,3.6,4).rotateZ(Math.PI/2).translate(0,3.7,0)),i(`cloth`,.9,.8,.02,-1,3.3,0),i(`red`,.6,.9,.02,.1,3.25,0),i(`cloth`,.7,.6,.02,1.05,3.4,0);break;case`rubbish`:o(`dark`,.5,0,.12,0,1.3,.4,1),i(`woodDark`,.7,.1,.5,.4,.1,.3,.5),o(`straw`,.3,-.4,.12,.3,1,.5,1);break;case`wool`:o(`cloth`,.5,-.3,.42,0,1.1,.85,.9),o(`cloth`,.45,.45,.38,.05,1,.85,.9),o(`cloth`,.4,.05,1,0,1,.8,.9);break;case`hearth`:i(`stone`,.9,1.1,2,.1,.55,0),i(`dark`,.5,.7,1.2,-.18,.5,0),i(`stone`,.7,1.9,1.6,.2,2.05,0),i(`woodDark`,.5,.1,.1,-.25,.2,0,.3),s(-.25,.42,0,.7),s(-.2,.36,.2,.5),a(`iron`,.2,.16,.22,-.3,.75,-.25,8);break;case`table`:i(`wood`,1.9,.08,1.1,0,.76,0);for(let[e,t]of[[-.85,-.45],[.85,-.45],[-.85,.45],[.85,.45]])i(`woodDark`,.09,.76,.09,e,.38,t);for(let[e,t]of[[-.5,-.25],[.5,-.2],[0,.3]])a(`cloth`,.11,.07,.07,e,.84,t,8);o(`bread`,.14,.05,.85,-.1,1.3,.6,1),a(`gold`,.025,.03,.2,-.7,.9,.3,5);for(let[e,t]of[[-.5,-1],[.5,-1],[0,1]])a(`wood`,.2,.2,.06,e,.45,t,8),a(`woodDark`,.05,.07,.45,e,.22,t,5);break;case`bed`:i(`woodDark`,1.9,.35,2.4,0,.2,0),i(`straw`,1.75,.16,2.25,0,.45,0),i(`red`,1.75,.08,1.5,0,.56,-.35),i(`cloth`,1.3,.12,.4,0,.6,.85),i(`woodDark`,1.9,.9,.1,0,.5,1.2);break;case`cot`:i(`woodDark`,1.9,.28,.95,0,.16,0),i(`straw`,1.8,.14,.85,0,.36,0),i(`green`,1.2,.07,.85,-.3,.46,0),i(`cloth`,.35,.1,.6,.65,.48,0);break;case`chest`:i(`woodDark`,.95,.6,.6,0,.3,0),i(`iron`,.97,.06,.62,0,.5,0),o(`straw`,.3,.9,.3,.1,1,1.1,1),o(`straw`,.26,1.35,.26,0,1,1.1,1),a(`wood`,.2,.18,.5,.95,.25,.75,8);break;case`shelf`:i(`wood`,1.6,.06,.3,0,1.3,0),i(`wood`,1.6,.06,.3,0,1.8,0),a(`bread`,.1,.08,.2,-.5,1.43,0,7),a(`stoneDark`,.09,.09,.24,0,1.45,0,7),a(`cloth`,.1,.07,.12,.5,1.39,0,7),i(`green`,.08,.5,.08,-.4,2.2,.05),i(`green`,.08,.45,.08,.3,2.2,.05);break;case`altar`:i(`slab`,2.6,.95,1,0,.475,0),i(`cloth`,2.7,.04,1.1,0,.97,0),i(`red`,.8,.5,.02,0,.6,.52),i(`gold`,.1,1.3,.1,0,1.65,-.2),i(`gold`,.6,.1,.1,0,1.95,-.2),a(`gold`,.03,.05,.4,-.9,1.2,0,6),a(`gold`,.03,.05,.4,.9,1.2,0,6),a(`glow`,.02,.03,.12,-.9,1.46,0,5),a(`glow`,.02,.03,.12,.9,1.46,0,5);break;case`pew`:i(`wood`,3.4,.07,.42,0,.45,0),i(`woodDark`,3.4,.5,.06,0,.7,-.2),i(`woodDark`,.08,.45,.4,-1.6,.22,0),i(`woodDark`,.08,.45,.4,1.6,.22,0);break;case`candles`:a(`iron`,.03,.2,1.2,0,.6,0,6),i(`iron`,.6,.04,.3,0,1.2,0);for(let e of[-.2,0,.2])a(`cloth`,.025,.025,.2,e,1.32,0,5),a(`glow`,.02,.03,.08,e,1.46,0,5);break;case`body`:o(`shroud`,.3,0,.2,0,1,.65,2.9),o(`shroud`,.16,0,.24,.72,1,1,1)}}function Bd(e,t){let n=jd(t),r=new Bi,i=new Pd,a=[],o={},s=[],c=[],l=(e,t,n,r)=>{let a=t.x1-t.x0,o=t.z1-t.z0,s=new Po(a,o).rotateX(-Math.PI/2),c=s.attributes.uv;for(let e=0;e<c.count;e++)c.setXY(e,(t.x0+c.getX(e)*a)/r,(t.z0+c.getY(e)*o)/r);i.put(e,s.translate((t.x0+t.x1)/2,n,(t.z0+t.z1)/2))};l(`grass`,{x0:-260,z0:-260,x1:260,z1:260},-.2,6),l(`dirt`,{x0:-39,z0:-33,x1:39,z1:33},-.08,4),l(`dirt`,{x0:38.5,z0:-3.5,x1:200,z1:3.5},-.04,4),e.walk.forEach((e,t)=>l(e.floor===`dirt`?`dirt`:e.floor===`wood`?`floorWood`:e.floor===`slab`?`slab`:`cobble`,e,.001*(t+1),e.floor===`wood`?1.6:3));let u=(e,t,r,a=1.2,s=0)=>{let c=Ld(e.rect,t,r,s),l=i.placed(c.x,c.z,c.ry);l(`stoneDark`,Md(a+.5,2.5,.12,1.5).translate(0,1.25,.03)),l(`woodDark`,Md(a,2.15,.1,1.2).translate(0,1.075,.09)),l(`iron`,new Ao(.06,.16,.05).translate(a*.32,1.05,.16)),l(`slab`,Md(a+.7,.12,.5,1.5).translate(0,.06,.25));let u=o[e.id]??(o[e.id]=new Bi);for(let[e,r]of[[.5,1.25],[-.5,1.15],[.05,.6]]){let i=new ho(new Ao(a+.6,.17,.05),n.wood);i.position.set(c.x+Id[t].nx*.2,r,c.z+Id[t].nz*.2),i.rotation.set(0,c.ry,0),i.rotateZ(e),u.add(i)}},d=(e,t,n)=>{let[r,a]=Rd(e.rect,t),o=a-r,s=Math.max(1,Math.floor(o/3.3));for(let a=0;a<s;a++){let c=r+(a+.5)*o/s;if(e.h>=5){let r=Ld(e.rect,t,c,n),a=i.placed(r.x,r.z,r.ry);a(`dark`,new Ao(.8,1.05,.06).translate(0,4.25,.01)),a(`wood`,Md(.4,1.05,.05,1).translate(-.62,4.25,.04)),a(`wood`,Md(.4,1.05,.05,1).translate(.62,4.25,.04)),a(`stoneDark`,Md(1,.08,.16,1).translate(0,3.7,.06)),e.timber&&(a(`woodDark`,Md(.14,e.h-3,.06,1).translate(-o/s/2+.07,3+(e.h-3)/2,.02)),a(`woodDark`,Md(.14,e.h-3,.06,1).translate(o/s/2-.07,3+(e.h-3)/2,.02)))}if(!(e.doors??[]).some(e=>e.face===t&&Math.abs(e.at-c)<1.6)){let n=Ld(e.rect,t,c,0),r=i.placed(n.x,n.z,n.ry);r(`dark`,new Ao(.6,.7,.06).translate(0,1.9,.01)),r(`iron`,new Ao(.04,.7,.04).translate(-.12,1.9,.04)),r(`iron`,new Ao(.04,.7,.04).translate(.12,1.9,.04))}}},f=(e,t,n)=>{let r=e.x1-e.x0,a=e.z1-e.z0,o=(e,t)=>{let n=Math.max(2,Math.round(e/1.7));for(let r=0;r<n;r++)t(-e/2+(r+.5)*e/n)},s=(e.x0+e.x1)/2,c=(e.z0+e.z1)/2;r>=a&&o(r,r=>{i.put(n,Md(.85,.9,.5).translate(s+r,t+.45,e.z0+.25)),a>2&&i.put(n,Md(.85,.9,.5).translate(s+r,t+.45,e.z1-.25))}),(a>=r||a>2)&&o(a,a=>{i.put(n,Md(.5,.9,.85).translate(e.x0+.25,t+.45,c+a)),r>2&&i.put(n,Md(.5,.9,.85).translate(e.x1-.25,t+.45,c+a))})};for(let t of e.buildings){let e=t.rect,n=e.x1-e.x0,r=e.z1-e.z0,a=(e.x0+e.x1)/2,o=(e.z0+e.z1)/2,s=t.style===`house`?`plaster`+(t.tint??0):`stone`;if(t.style===`wall`){i.put(`stone`,Md(n,t.h,r,3).translate(a,t.h/2,o)),f(e,t.h,`stone`);continue}if(t.style===`tower`){if(i.put(`stone`,Md(n,t.h,r,3).translate(a,t.h/2,o)),f(e,t.h,`stone`),t.id===`tower`){for(let n of[`n`,`s`,`e`,`w`]){let[r,a]=Rd(e,n),o=Ld(e,n,(r+a)/2,.01);i.placed(o.x,o.z,o.ry)(`dark`,new Ao(1.1,2.2,.05).translate(0,t.h-2.6,0))}i.put(`roof`,new No(n*.55,3.2,4).rotateY(Math.PI/4).translate(a,t.h+1.6,o))}for(let n of t.windows??[]){let[t,r]=Rd(e,n),a=Ld(e,n,(t+r)/2,.01);i.placed(a.x,a.z,a.ry)(`dark`,new Ao(.5,1.4,.05).translate(0,6,0))}continue}let c=.5;if(t.enterable){for(let n of[`n`,`s`,`e`,`w`]){let[r,a]=Rd(e,n),o=(t.doors??[]).find(e=>e.face===n),l=(t,r,a,o)=>{if(r-t<.05)return;let l=r-t,u=(t+r)/2,d=n===`n`||n===`s`,f=d?Md(l,o-a,c,2.5):Md(c,o-a,l,2.5),p=d?u:n===`e`?e.x1-c/2:e.x0+c/2,m=d?n===`s`?e.z1-c/2:e.z0+c/2:u;i.put(s,f.translate(p,(a+o)/2,m))};if(o){let e=(o.w??1.2)/2,n=t.style===`church`?3.4:2.25;l(r,o.at-e,0,t.h),l(o.at+e,a,0,t.h),l(o.at-e,o.at+e,n,t.h)}else l(r,a,0,t.h)}t.ceil&&t.style!==`church`&&i.put(`woodDark`,Md(n-2*c,.12,r-2*c,1.2).translate(a,t.ceil+.06,o));for(let n of t.doors??[]){let r=Ld(e,n.face,n.at+(n.w??1.2)/2+.02,.5);t.style!==`church`&&i.put(`woodDark`,Nd(Md(.08,2.15,1,1.2),r.x,1.08,r.z,r.ry+.25))}}else{i.put(s,Md(n,3,r,2.5).translate(a,1.5,o));let e=t.style===`house`?.16:0;i.put(s,Md(n+e*2,t.h-3,r+e*2,2.5).translate(a,3+(t.h-3)/2,o)),t.style===`house`&&i.put(`woodDark`,Md(n+e*2+.06,.2,r+e*2+.06,1.5).translate(a,3,o))}let l=t.style===`house`&&!t.enterable?.16:0,p=t.ridge??`x`,m=(p===`x`?n:r)+l*2,h=(p===`x`?r:n)+l*2,g=Math.min(t.style===`church`?4.2:3.2,h*.34),_=Fd(m,h,g,.5),v=p===`x`?0:Math.PI/2;i.put(`roof`,Nd(_.roof,a,t.h,o,v)),i.put(s,Nd(_.ends,a,t.h,o,v));for(let e of t.doors??[])t.enterable||u(t,e.face,e.at,e.w);for(let e of t.windows??[])d(t,e,l+.01);if(t.style===`church`){let r=Ld(e,`s`,a,.02),o=i.placed(r.x,r.z,r.ry);o(`stoneDark`,new Mo(1.5,1.5,.12,20).rotateX(Math.PI/2).translate(0,6.6,0)),o(`glow`,new Mo(1.15,1.15,.14,20).rotateX(Math.PI/2).translate(0,6.6,0)),o(`stoneDark`,Md(3.8,3.9,.14,2).translate(0,1.95,0)),o(`dark`,new Ao(3,3.4,.2).translate(0,1.7,-.16)),i.put(`stone`,Md(.25,1.6,.25).translate(a,t.h+g+.8,e.z1-.3)),i.put(`stone`,Md(.9,.25,.25).translate(a,t.h+g+1.1,e.z1-.3)),i.put(`glow`,new Mo(1.1,1.1,.06,20).rotateX(Math.PI/2).translate(a,6.6,e.z1-c-.04));for(let t=e.z0+3;t<e.z1-2;t+=4.2)for(let e of[-1,1])i.put(`glow`,new Ao(.06,2.6,.7).translate(a+e*(n/2-c-.04),4.6,t)),i.put(`dark`,new Ao(.06,2.6,.7).translate(a+e*(n/2+.02),4.6,t))}if(t.id===`home`)for(let[t,n,r]of[[e.x0+c+.04,o-1,0],[a+1.5,e.z1-c-.04,Math.PI/2],[e.x0+c+.04,o+2.2,0]])i.put(`glow`,Nd(new Ao(.06,.9,.7),t,1.9,n,r))}i.put(`stone`,Md(2.5,3,6,3).translate(e.gate.x+.4,6.5,e.gate.z)),i.put(`woodDark`,Md(.12,1.9,1.1,1.2).translate(-36.95,.95,0)),i.put(`stoneDark`,Md(.1,2.3,1.6,1.5).translate(-36.99,1.15,0));for(let t of e.props){if(t.fromPhase===void 0&&t.untilPhase===void 0){let e=[];if(zd(t.kind,i.placed(t.x,t.z,t.rot??0),e,n),e.length){let n=new Bi;n.position.set(t.x,0,t.z),n.rotation.y=t.rot??0,e.forEach(e=>n.add(e)),r.add(n),a.push(...e)}continue}let e=new Pd,o=[];zd(t.kind,e.put,o,n);let l=e.build(n,!1);for(let e of o)l.add(e);a.push(...o),l.position.set(t.x,0,t.z),l.rotation.y=t.rot??0;let u=t.solid?{rect:{x0:t.x-t.solid[0]/2,z0:t.z-t.solid[1]/2,x1:t.x+t.solid[0]/2,z1:t.z+t.solid[1]/2},active:!1}:void 0;u&&c.push(u),s.push({obj:l,from:t.fromPhase??0,until:t.untilPhase??99,solid:u}),r.add(l)}let p={};for(let t of e.stalls){let e=i.placed(t.x,t.z,t.face);e(`wood`,Md(3,.1,1.2,1.5).translate(0,.9,0));for(let[t,n]of[[-1.4,-.5],[1.4,-.5],[-1.4,.5],[1.4,.5]])e(`woodDark`,Md(.1,n<0?2.7:2.3,.1,1).translate(t,(n<0?2.7:2.3)/2,n));let a=new Bi;a.position.set(t.x,0,t.z),a.rotation.y=t.face,r.add(a);let o=new ho(new Ao(3.3,.05,1.7),new Jo({color:t.color}));o.position.set(0,2.5,.05),o.rotation.x=.25,a.add(o);let s=[],c=(e,t)=>{let r=new ho(t,n[e]);a.add(r),s.push(r)};for(let e=0;e<8;e++){let n=-1.2+e%4*.8,r=e<4?-.25:.28;t.goods===`bread`?c(e%3==2?`straw`:`bread`,new Io(e%3==2?.22:.17,7,5).scale(1.3,e%3==2?1.2:.6,1).translate(n,e%3==2?1.18:1.04,r)):t.goods===`herbs`?c(e%2?`green`:`woodDark`,e%2?new No(.13,.4,6).rotateZ(1.3).translate(n,1.03,r):new Ao(.4,.12,.25).translate(n,1.01,r)):t.goods===`cloth`?c([`red`,`blue`,`cloth`,`green`][e%4],new Mo(.11,.11,.7,8).rotateX(Math.PI/2).translate(n,1.06,r)):c([`green`,`cloth`,`red`,`bread`][e%4],new Io(.13,6,5).translate(n,1.07,r))}p[t.id]={awning:o,goods:s}}let m=[-1,1].map(t=>{let i=new Bi;i.position.set(e.gate.x,0,e.gate.z+t*3);let a=new ho(Md(.22,5,3,1.5).translate(0,2.5,-t*1.5),n.woodDark);i.add(a);let o=new ho(new Ao(.1,.25,2.8).translate(-.16,1.6,-t*1.5),n.iron);return i.add(o),r.add(i),{pivot:i,side:t}}),h=11,g=()=>(h=h*16807%2147483647,h/2147483647);for(let e=0;e<9;e++){let t=e/9*Math.PI*2+g(),n=150+g()*80,r=60+g()*50;i.put(`hill`,new Io(r,10,6).scale(1,.32+g()*.15,1).translate(Math.cos(t)*n,-6,Math.sin(t)*n))}for(let e=0;e<46;e++){let e=g()*Math.PI*2,t=52+g()*60,n=Math.cos(e)*t*1.15,r=Math.sin(e)*t;if(Math.abs(r)<5&&n>0)continue;let a=7+g()*6;i.put(`leaf`,new No(.9+g()*.5,a,6).translate(n,a/2+.6,r)),i.put(`woodDark`,new Mo(.15,.2,1.2,5).translate(n,.6,r))}let _=i.build(n);r.add(_);for(let e of Object.values(o))e.visible=!1,r.add(e);let v=new Io(400,16,10);v.setAttribute(`color`,new ka(new Float32Array(v.attributes.position.count*3),3));let y=new ho(v,new no({vertexColors:!0,side:1,fog:!1,depthWrite:!1}));y.renderOrder=-1,r.add(y);let b=new Ms(16754784,14,11,1.6);b.position.set(-27,1.3,7.5);let x=new Ms(16767392,22,20,1.5);x.position.set(0,3,-25),r.add(b,x);let S=-1;return{group:r,sky:y,solids:c,lights:[b,x],setView(e){if(e.phase!==S){S=e.phase;for(let e of s){let t=S>=e.from&&S<e.until;e.obj.visible=t,e.solid&&(e.solid.active=t)}}for(let[t,n]of Object.entries(o))n.visible=e.boarded.includes(t);for(let[t,n]of Object.entries(p)){let r=e.stalls[t]??`closed`;n.awning.visible=r!==`closed`,n.goods.forEach((e,t)=>{e.visible=r===`open`||r===`sparse`&&t%3==0})}for(let t of m)t.pivot.rotation.y=e.gateClosed?0:-t.side*1.35},update(e){for(let t of a)if(t.userData.flame){let n=t.userData.flame;t.scale.set(1+Math.sin(e*13+n*9)*.15,1+Math.sin(e*17+n*5)*.25,1+Math.cos(e*11+n)*.15)}else if(t.userData.smoke!==void 0){let n=(e*.22+t.userData.smoke)%1;t.position.set(Math.sin(n*5+t.userData.smoke*9)*.5*n,.9+n*6,n*1.2),t.scale.setScalar(.5+n*2.2),t.visible=!0}b.intensity=13+Math.sin(e*9)*1.5+Math.sin(e*23)*.8},setShadows(e){_.traverse(t=>{t.isMesh&&(t.castShadow=e,t.receiveShadow=e)})}}}var Vd=.5,Hd=1.62,Ud=.3,Wd=[{top:6134742,bot:14411758,fog:13688808,near:70,far:260,sun:16773848,sunI:2.5,hemi:1.55},{top:7314628,bot:14212312,fog:13423826,near:55,far:210,sun:16773332,sunI:2.2,hemi:1.5},{top:8226960,bot:12432802,fog:11445904,near:28,far:130,sun:16769720,sunI:1.3,hemi:1.15},{top:6185574,bot:9734776,fog:9077359,near:14,far:80,sun:14207152,sunI:.75,hemi:.95}],Gd={top:2897248,bot:14190682,fog:11041378,sun:16747082},Kd=class{constructor(e,t,n){this.els=e,this.sc=t,this.cb=n,this.scene=new Xi,this.camera=new As(70,1,.12,520),this.sun=new Fs(16777215,2.4),this.hemi=new vs(14675711,9075296,1.5),this.actors=new Map,this.markers=new Map,this.spots=[],this.pos={x:0,z:0},this.vel={x:0,z:0},this.yaw=0,this.pitch=0,this.focusT=null,this.blocked=!1,this.mode=`title`,this.view=null,this.atmo={phase:0,dusk:0},this.zone=``,this.promptId=``,this.stepAcc=0,this.zoneT=0,this.time=0,this.last=0,this.quality=`mid`,this.scale=1,this.slow=0,this.disposed=!1,this.c1=new qi,this.c2=new qi,this.c3=new qi,this.map=t.map;let r=matchMedia(`(pointer: coarse)`).matches;this.renderer=new cd({canvas:e.canvas,antialias:!r,powerPreference:`high-performance`}),this.renderer.outputColorSpace=fr,this.renderer.shadowMap.type=1,this.scene.fog=new Yi(13688808,70,260),this.camera.rotation.order=`YXZ`,this.town=Bd(this.map,kd()),this.scene.add(this.town.group),this.scene.add(this.hemi,this.sun,this.sun.target);let i=this.sun.shadow;i.mapSize.set(2048,2048),Object.assign(i.camera,{left:-48,right:48,top:44,bottom:-44,near:1,far:160}),i.bias=-.0015,i.normalBias=.05;let a=this.map.bounds;this.gw=Math.round((a.x1-a.x0)/Vd),this.gh=Math.round((a.z1-a.z0)/Vd),this.grid=new Uint8Array(this.gw*this.gh);let o=(e,t,n=0)=>{for(let r=0;r<this.gh;r++)for(let i=0;i<this.gw;i++){let o=a.x0+(i+.5)*Vd,s=a.z0+(r+.5)*Vd;o>e.x0-n&&o<e.x1+n&&s>e.z0-n&&s<e.z1+n&&(this.grid[r*this.gw+i]=t)}};for(let e of this.map.walk)o(e,1);for(let e of this.map.props)e.solid&&e.fromPhase===void 0&&e.untilPhase===void 0&&o({x0:e.x-e.solid[0]/2,z0:e.z-e.solid[1]/2,x1:e.x+e.solid[0]/2,z1:e.z+e.solid[1]/2},0,.05);for(let e of this.map.stalls)o({x0:e.x-1.5,z0:e.z-.6,x1:e.x+1.5,z1:e.z+.6},0,.1);this.controls=new wd(e),this.controls.onAction=()=>n.onAction(),this.controls.onMenu=()=>n.onMenu(),this.place(this.map.spawn.x,this.map.spawn.z,this.map.spawn.yaw),this.applyAtmosphere(1),this.resize=this.resize.bind(this),addEventListener(`resize`,this.resize),addEventListener(`orientationchange`,this.resize),this.setQuality(r?`mid`:`high`),this.resize(),this.renderer.setAnimationLoop(e=>this.frame(e))}setView(e){this.view=e,this.town.setView(e);let t=new Set;for(let n of e.npcs){t.add(n.id);let e=this.actors.get(n.id);if(e)e.view.pose!==n.pose&&Sd(e.ch,n.pose,this.sc.cast[n.look]);else{let t=this.sc.cast[n.look]??this.sc.cast.folk1,r=xd(t);if(this.scene.add(r.root),e={view:n,ch:r,x:n.x,z:n.z,face:n.face,walking:0,node:0,tx:0,tz:0,wait:0,speed:1.1+qd(n.id)%5*.09},n.wander){e.node=qd(n.id)%this.map.waypoints.length;let t=this.map.waypoints[e.node];e.x=t.x+Jd(n.id,1),e.z=t.z+Jd(n.id,2),this.pickNext(e)}this.actors.set(n.id,e),Sd(r,n.pose,t)}n.wander||(e.x=n.x,e.z=n.z,(e.view.pose!==n.pose||e.view.x!==n.x)&&(e.face=n.face)),e.view=n}for(let[e,n]of this.actors)t.has(e)||(this.scene.remove(n.ch.root),this.actors.delete(e));this.spots=e.spots;let n=new Set(e.spots.filter(e=>e.marker).map(e=>e.id));for(let t of e.spots)if(t.marker&&!this.markers.has(t.id)){let e=Qd(t.kind);e.position.set(t.x,0,t.z),this.scene.add(e),this.markers.set(t.id,e)}for(let[e,t]of this.markers)n.has(e)||(this.scene.remove(t),this.markers.delete(e))}setBlocked(e){e&&!this.blocked&&this.controls.release(),this.blocked=e,this.controls.enabled=!e,e&&this.setPrompt(null)}setMode(e){this.mode=e,e===`title`&&this.controls.release()}setSensitivity(e){this.controls.sensitivity=e}setQuality(e){this.quality=e,this.scale=1;let t=e===`high`;this.renderer.shadowMap.enabled=t,this.sun.castShadow=t,this.town.setShadows(t),this.scene.traverse(e=>{let t=e.material;t&&(t.needsUpdate=!0)}),this.resize()}place(e,t,n){this.pos.x=e,this.pos.z=t,this.yaw=n,this.pitch=0,this.vel.x=this.vel.z=0,this.focusT=null,this.zone=this.zoneAt(e,t)}getPose(){return{x:this.pos.x,z:this.pos.z,yaw:this.yaw}}focus(e){let t=this.actors.get(e),n=this.spots.find(t=>t.id===e),r=t?t.x:n?.x,i=t?t.z:n?.z;if(r===void 0||i===void 0)return;let a=t?(t.view.pose===`lie`?.3:t.ch.height*(t.view.pose===`sit`?.7:.92))-Hd:-.5,o=Math.hypot(r-this.pos.x,i-this.pos.z);this.focusT={yaw:Math.atan2(-(r-this.pos.x),-(i-this.pos.z)),pitch:Math.max(-.7,Math.min(.3,Math.atan2(a,Math.max(.6,o)))),t:.5},t&&t.view.pose===`stand`&&(t.face=Math.atan2(this.pos.x-t.x,this.pos.z-t.z))}dispose(){this.disposed=!0,this.renderer.setAnimationLoop(null),removeEventListener(`resize`,this.resize),removeEventListener(`orientationchange`,this.resize),this.controls.dispose(),this.renderer.dispose()}resize(){let e=innerWidth,t=innerHeight,n=this.quality===`low`?1:this.quality===`mid`?1.5:2;this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,n)*this.scale),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.fov=e>=t?68:84,this.camera.far=this.quality===`low`?320:520,this.camera.updateProjectionMatrix()}zoneAt(e,t){for(let n of this.map.zones)if(e>=n.rect.x0&&e<=n.rect.x1&&t>=n.rect.z0&&t<=n.rect.z1)return n.id;return``}free(e,t,n=Ud){let r=this.map.bounds,i=Math.floor((e-n-r.x0)/Vd),a=Math.floor((e+n-r.x0)/Vd),o=Math.floor((t-n-r.z0)/Vd),s=Math.floor((t+n-r.z0)/Vd);for(let c=o;c<=s;c++)for(let o=i;o<=a;o++){if(o>=0&&c>=0&&o<this.gw&&c<this.gh&&this.grid[c*this.gw+o])continue;let i=r.x0+o*Vd,a=r.z0+c*Vd,s=Math.max(i,Math.min(e,i+Vd)),l=Math.max(a,Math.min(t,a+Vd));if((e-s)**2+(t-l)**2<n*n)return!1}for(let r of this.town.solids)if(r.active){let i=Math.max(r.rect.x0,Math.min(e,r.rect.x1)),a=Math.max(r.rect.z0,Math.min(t,r.rect.z1));if((e-i)**2+(t-a)**2<n*n)return!1}return!0}pickNext(e){let t=this.map.links.filter(t=>t[0]===e.node||t[1]===e.node).map(t=>t[0]===e.node?t[1]:t[0]),n=t[Math.floor(Math.random()*t.length)]??e.node;e.node=n;let r=this.map.waypoints[n];e.tx=r.x+(Math.random()-.5)*1.3,e.tz=r.z+(Math.random()-.5)*1.3}setPrompt(e){let t=e?e.id+e.verb:``;t!==this.promptId&&(this.promptId=t,this.cb.onPrompt(e))}frame(e){if(this.disposed)return;let t=Math.min(.05,(e-this.last)/1e3||.016);this.last=e,this.time+=t;let n=this.time;if(t>.034?this.slow+=t:this.slow=Math.max(0,this.slow-t*.5),this.slow>2.5&&this.scale>.62&&(this.scale*=.85,this.slow=0,this.resize()),this.mode===`title`){let e=n*.05;this.camera.position.set(Math.sin(e)*30,15,Math.cos(e)*30+2),this.camera.lookAt(0,3,-2)}else this.movePlayer(t),this.camera.position.set(this.pos.x,Hd,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,0);this.updateActors(t,n);for(let e of this.markers.values())e.children[0].rotation.y=n*1.5,e.children[1].scale.setScalar(1+Math.sin(n*4)*.12);if(this.town.update(n),this.applyAtmosphere(t*.8),this.mode===`play`&&!this.blocked&&(this.detect(),this.zoneT-=t,this.zoneT<=0)){this.zoneT=.2;let e=this.zoneAt(this.pos.x,this.pos.z);e!==this.zone&&(this.zone=e,e&&this.cb.onZone(e))}this.town.sky.position.copy(this.camera.position),this.renderer.render(this.scene,this.camera)}movePlayer(e){let t=this.controls;if(this.focusT){let t=this.focusT,n=Math.min(1,e*7),r=t.yaw-this.yaw;r=Math.atan2(Math.sin(r),Math.cos(r)),this.yaw+=r*n,this.pitch+=(t.pitch-this.pitch)*n,t.t-=e,t.t<=0&&(this.focusT=null)}let n=0,r=0,i=!1;this.blocked||(t.read(),n=t.moveX,r=t.moveZ,i=t.run,this.yaw+=t.yawDelta,this.pitch=Math.max(-1.25,Math.min(1.25,this.pitch+t.pitchDelta))),t.yawDelta=t.pitchDelta=0;let a=i?6.4:4.4,o=Math.sin(this.yaw),s=Math.cos(this.yaw),c=(s*n+o*r)*a,l=(-o*n+s*r)*a,u=Math.min(1,e*11);this.vel.x+=(c-this.vel.x)*u,this.vel.z+=(l-this.vel.z)*u;let d=this.pos.x+this.vel.x*e,f=this.pos.z+this.vel.z*e,p=this.pos.x,m=this.pos.z;this.free(d,this.pos.z)?this.pos.x=d:this.vel.x=0,this.free(this.pos.x,f)?this.pos.z=f:this.vel.z=0;for(let e of this.actors.values()){if(e.view.wander||e.view.look===`cat`)continue;let t=e.view.pose===`lie`?.75:.72,n=e.x,r=(e.view.pose,e.z),i=this.pos.x-n,a=this.pos.z-r,o=Math.hypot(i,a);if(o<t&&o>.001){let e=n+i/o*t,s=r+a/o*t;this.free(e,s)?(this.pos.x=e,this.pos.z=s):(this.pos.x=p,this.pos.z=m)}}this.stepAcc+=Math.hypot(this.pos.x-p,this.pos.z-m),this.stepAcc>1.5&&(this.stepAcc=0,this.cb.onStep())}updateActors(e,t){for(let n of this.actors.values()){let r=n.view,i=this.pos.x-n.x,a=this.pos.z-n.z,o=Math.hypot(i,a),s=this.mode===`play`&&o<2.4;if(r.wander){let t=this.blocked&&s;if(n.wait>0||s&&o<1.3||t)n.wait-=e,n.walking+=(0-n.walking)*Math.min(1,e*8),s&&(n.face=Yd(n.face,Math.atan2(i,a),e*5));else{let t=n.tx-n.x,r=n.tz-n.z,i=Math.hypot(t,r);i<.25?(Math.random()<.3&&(n.wait=1+Math.random()*4),this.pickNext(n)):(n.x+=t/i*n.speed*e,n.z+=r/i*n.speed*e,n.face=Yd(n.face,Math.atan2(t,r),e*6),n.walking+=(1-n.walking)*Math.min(1,e*6))}}else r.pose===`stand`&&s&&r.look!==`cat`?n.face=Yd(n.face,Math.atan2(i,a),e*3.5):r.pose===`stand`&&!s&&(n.face=Yd(n.face,r.face,e*2));n.ch.root.position.set(n.x,0,n.z),n.ch.root.rotation.y=n.face,Cd(n.ch,t,n.walking,r.pose)}}detect(){let e=null,t=9,n=-Math.sin(this.yaw),r=-Math.cos(this.yaw),i=(i,a,o,s,c,l)=>{let u=s-this.pos.x,d=c-this.pos.z,f=Math.hypot(u,d);if(f>l)return;let p=f<.5?1:(u*n+d*r)/f;if(p<.3)return;let m=f+(1-p)*2.2;m<t&&(t=m,e={id:i,label:a,verb:o})};for(let e of this.actors.values())e.view.talk&&i(e.view.id,e.view.label,e.view.look===`cat`?`なでる`:e.view.pose===`lie`?`様子を見る`:`話す`,e.x,e.z,2.6);for(let e of this.spots)i(e.id,e.label,e.verb,e.x,e.z,e.marker?2.3:2.2);this.setPrompt(e)}applyAtmosphere(e){let t=this.view,n=t?t.phase:0,r=t?t.dusk:0;this.atmo.phase+=(n-this.atmo.phase)*Math.min(1,e),this.atmo.dusk+=(r-this.atmo.dusk)*Math.min(1,e);let i=Math.max(0,Math.min(2.999,this.atmo.phase)),a=Math.floor(i),o=i-a,s=Wd[a],c=Wd[a+1]??Wd[a],l=(e,t,n)=>n.setHex(e).lerp(this.c3.setHex(t),o),u=Math.max(0,(this.atmo.dusk-.35)/.65),d=l(s.top,c.top,this.c1).clone().lerp(this.c3.setHex(Gd.top),u*.8),f=l(s.bot,c.bot,this.c2).clone().lerp(this.c3.setHex(Gd.bot),u*.75),p=this.scene.fog;l(s.fog,c.fog,p.color).lerp(this.c3.setHex(Gd.fog),u*.6),p.near=s.near+(c.near-s.near)*o,p.far=s.far+(c.far-s.far)*o,l(s.sun,c.sun,this.sun.color).lerp(this.c3.setHex(Gd.sun),u*.8),this.sun.intensity=(s.sunI+(c.sunI-s.sunI)*o)*(1-u*.6),this.hemi.intensity=(s.hemi+(c.hemi-s.hemi)*o)*(1-u*.4);let m=.95-this.atmo.dusk*.6;this.sun.position.set(Math.cos(m)*60-20,Math.sin(m)*80,30),this.sun.target.position.set(0,0,0);let h=this.town.sky.geometry,g=h.attributes.position,_=h.attributes.color,v=d.getHex()*31+f.getHex();if(h.userData.key!==v){h.userData.key=v;for(let e=0;e<g.count;e++){let t=Math.max(0,Math.min(1,g.getY(e)/400*1.6+.08));this.c3.copy(f).lerp(d,t**.55),_.setXYZ(e,this.c3.r,this.c3.g,this.c3.b)}_.needsUpdate=!0}}};function qd(e){let t=7;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)>>>0;return t}var Jd=(e,t)=>(qd(e+t)%100/100-.5)*1.2;function Yd(e,t,n){let r=t-e;return r=Math.atan2(Math.sin(r),Math.cos(r)),e+r*Math.min(1,n)}var Xd=new no({color:16769162,transparent:!0,opacity:.75,depthWrite:!1}),Zd={wood:new Jo({color:8017200}),coins:new Jo({color:14200896,emissive:4864528}),herbs:new Jo({color:5212730}),basket:new Jo({color:11043402}),bundle:new Jo({color:13616816})};function Qd(e){let t=new Bi,n=new ho(e===`wood`?new Mo(.09,.09,.7,6).rotateZ(Math.PI/2):e===`coins`?new Mo(.1,.1,.04,10):e===`herbs`?new No(.2,.45,6):e===`basket`?new Mo(.25,.18,.25,8):new Io(.28,8,6).scale(1.2,.7,1),Zd[e]??Zd.bundle);n.position.y=e===`herbs`?.25:.16;let r=new ho(new Fo(.42,.5,20).rotateX(-Math.PI/2),Xd);return r.position.y=.03,t.add(n,r),t}var $d=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),$=o(((e,t)=>{t.exports=$d()}))();function ef(){let e=(0,g.useRef)(null),t=(0,g.useRef)(null),n=(0,g.useRef)(null),r=(0,g.useRef)(null),i=(0,g.useRef)(null),a=(0,g.useRef)(null),o=Nt(e=>e.s),s=Nt(e=>e.screen),c=Nt(e=>e.scene),l=Nt(e=>e.menu),u=Nt(e=>e.settings);(0,g.useEffect)(()=>{let o=Nt.getState,s=new Kd({canvas:e.current,stickZone:t.current,stickBase:n.current,stickKnob:r.current,lookZone:i.current},At,{onPrompt:e=>o().setPrompt(e),onZone:e=>o().enterZone(e),onAction:()=>o().interact(),onMenu:()=>{let e=o();e.setMenu(e.menu?null:`items`)},onStep:()=>v.step()});return a.current=s,o().setEngine(s),s.setView(At.worldView(At.newGame(`title`))),window.__game={engine:s,store:Nt,scenario:At},()=>{s.dispose(),o().setEngine(null)}},[]),(0,g.useEffect)(()=>{if(!o||!a.current)return;let e=At.worldView(o);a.current.setView(e),v.mood(e.bustle,e.phase)},[o]),(0,g.useEffect)(()=>{a.current?.setMode(s===`play`?`play`:`title`)},[s]),(0,g.useEffect)(()=>{a.current?.setBlocked(s!==`play`||!!c||!!l)},[s,c,l]),(0,g.useEffect)(()=>{let e=a.current;e&&(e.setSensitivity(u.sens),e.setQuality(u.quality===`auto`?document.body.classList.contains(`touch`)?`mid`:`high`:u.quality),v.setBgm(u.bgm),v.setSe(u.se))},[u]);let d=s===`play`;return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`canvas`,{id:`view`,ref:e}),(0,$.jsx)(`div`,{id:`lookZone`,ref:i,style:{display:d?`block`:`none`}}),(0,$.jsx)(`div`,{id:`stickZone`,ref:t,style:{display:d?`block`:`none`},children:(0,$.jsx)(`div`,{id:`stickBase`,ref:n,children:(0,$.jsx)(`div`,{id:`stickKnob`,ref:r})})})]})}var tf=e=>({onClick:()=>{v.start(),e()}}),nf=0,rf=()=>performance.now()-nf<280;function af(){if(!document.body.classList.contains(`touch`))return;let e=document.documentElement,t=e.requestFullscreen||e.webkitRequestFullscreen;try{let n=t&&!document.fullscreenElement?t.call(e):null,r=()=>{let e=screen.orientation;e?.lock&&e.lock(`landscape`).catch(()=>{})};n?.then?n.then(r).catch(()=>{}):r()}catch{}}function of(){let e=Nt(e=>e.screen),t=Nt(e=>e.scene),n=Nt(e=>e.menu);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(ef,{}),e===`title`&&(0,$.jsx)(sf,{}),e===`play`&&(0,$.jsx)(uf,{}),e===`play`&&t&&(0,$.jsx)(pf,{}),e===`play`&&n&&(0,$.jsx)(hf,{}),e===`result`&&(0,$.jsx)(gf,{}),(0,$.jsx)(`div`,{className:`rotate`,children:`画面を横向きにすると遊びやすくなります`})]})}function sf(){let e=Nt(e=>e.hasSave),t=Nt(e=>e.newGame),n=Nt(e=>e.continueGame),[r,i]=(0,g.useState)(()=>new URLSearchParams(location.search).get(`seed`)??``),[a,o]=(0,g.useState)(!1);return a?(0,$.jsx)(`div`,{className:`overlay`,children:(0,$.jsxs)(`div`,{className:`sheet`,children:[(0,$.jsx)(`h2`,{children:`遊び方`}),(0,$.jsx)(cf,{}),(0,$.jsx)(`div`,{className:`row`,children:(0,$.jsx)(`button`,{className:`btn`,...tf(()=>o(!1)),children:`戻る`})})]})}):(0,$.jsx)(`div`,{className:`title`,children:(0,$.jsxs)(`div`,{className:`titleBox`,children:[(0,$.jsx)(`p`,{className:`series`,children:`歴史サバイバル・シミュレーション`}),(0,$.jsx)(`h1`,{children:`人類史ハードモード`}),(0,$.jsxs)(`p`,{className:`chapter`,children:[`第1章　`,At.title,` — `,At.subtitle]}),(0,$.jsxs)(`p`,{className:`lead`,children:[`もし自分が、人類史上最も過酷な時代に生まれていたら。`,(0,$.jsx)(`br`,{}),`家族とともに、`,At.totalDays,`日間を生き延びよ。`]}),(0,$.jsxs)(`div`,{className:`row`,children:[(0,$.jsx)(`button`,{className:`btn primary`,...tf(()=>{af(),t(r)}),children:`はじめから`}),e&&(0,$.jsx)(`button`,{className:`btn`,...tf(()=>{af(),n()}),children:`つづきから`}),(0,$.jsx)(`button`,{className:`btn`,...tf(()=>o(!0)),children:`遊び方`})]}),(0,$.jsxs)(`label`,{className:`seed`,children:[`シード（空欄なら毎回ちがう展開）`,(0,$.jsx)(`input`,{value:r,onChange:e=>i(e.target.value),placeholder:`例：1348`,inputMode:`text`,maxLength:24})]}),(0,$.jsx)(`p`,{className:`fine`,children:`この作品はフィクションです。町と登場人物は架空ですが、14世紀イタリアの暮らしと黒死病の史実を下敷きにしています。病や死の描写を含みます。`})]})})}function cf(){return(0,$.jsxs)(`div`,{className:`help`,children:[(0,$.jsx)(`h3`,{children:`操作`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`b`,{children:`スマホ`}),`：画面左のスティックで移動、右側をドラッグして視点。人や物に近づくと右下にボタンが出る。右上の「≡」でメニュー。`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`b`,{children:`PC`}),`：WASD で移動（Shiftで早足）、画面クリック後マウスで視点、E で話す・調べる、Esc でメニュー。`]})]}),(0,$.jsx)(`h3`,{children:`一日の流れ`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsxs)(`li`,{children:[`朝は自宅から始まる。一日に動ける時間は`,(0,$.jsx)(`b`,{children:`6刻`}),`。歩くだけでは時間は減らず、働く・買う・看病するなどの行動で減る。`]}),(0,$.jsx)(`li`,{children:`工房で働いてお金を稼ぎ、市場で食料を買う。食料は毎晩、家族の人数ぶん減る。`}),(0,$.jsxs)(`li`,{children:[`自宅の`,(0,$.jsx)(`b`,{children:`寝床`}),`を調べると、夕食をとって一日が終わる。`]}),(0,$.jsx)(`li`,{children:`14日目の夜を越えれば終わり。誰が生き残るかで結末が変わる。`})]}),(0,$.jsx)(`h3`,{children:`覚えておくこと`}),(0,$.jsxs)(`ul`,{children:[(0,$.jsx)(`li`,{children:`あなたは当時の人間で、病の正体を知らない。噂、症状、家の様子から危険を推し量るしかない。`}),(0,$.jsx)(`li`,{children:`家族は意見を持っている。困ったら、ルチアに話しかけて相談しよう。`}),(0,$.jsx)(`li`,{children:`すべてを行う時間はない。何を守り、何を諦めるかを決めるのはあなただ。`}),(0,$.jsx)(`li`,{children:`進行は自動で保存される。メニューの「設定」で音・視点の速さ・画質を変えられる。`})]})]})}function lf({label:e,v:t,warn:n}){return(0,$.jsxs)(`div`,{className:`bar`+(n?` warn`:``),children:[(0,$.jsx)(`span`,{children:e}),(0,$.jsx)(`i`,{children:(0,$.jsx)(`b`,{style:{width:`${Math.max(0,Math.min(100,t))}%`}})})]})}function uf(){let e=Nt(e=>e.s),t=Nt(e=>e.prompt),n=Nt(e=>e.toast),r=Nt(e=>e.scene),i=Nt(e=>e.menu),a=Nt(e=>e.interact),o=Nt(e=>e.setMenu),s=At.selfState(e),c=e.people.player,l=Math.floor(e.food/Math.max(1,Object.values(e.people).filter(e=>e.alive).length)),u=!!r||!!i,[d,f]=n?.includes(`｜`)?n.split(`｜`):[``,n??``];return(0,$.jsxs)(`div`,{className:`hud`+(u?` quiet`:``),children:[(0,$.jsxs)(`div`,{className:`top`,children:[(0,$.jsxs)(`div`,{className:`date`,children:[(0,$.jsx)(`b`,{children:At.dateLabel(e)}),(0,$.jsx)(`span`,{className:`tod`,children:At.timeLabel(e)}),(0,$.jsx)(`span`,{className:`pips`,"aria-label":`残り${e.time}刻`,children:Array.from({length:e.maxTime},(t,n)=>(0,$.jsx)(`i`,{className:n<e.time?`on`:``},n))})]}),(0,$.jsxs)(`div`,{className:`stats`,children:[(0,$.jsx)(lf,{label:`体力`,v:e.stamina,warn:e.stamina<25}),(0,$.jsx)(lf,{label:`満腹`,v:c.satiety,warn:c.satiety<35}),(0,$.jsxs)(`span`,{className:`chip `+s.tone,children:[`体調：`,s.text]}),(0,$.jsxs)(`span`,{className:`chip`,children:[`所持金 `,(0,$.jsx)(`b`,{children:e.money})]}),(0,$.jsxs)(`span`,{className:`chip`+(l<2?` warn`:``),children:[`食料 `,(0,$.jsx)(`b`,{children:e.food}),(0,$.jsxs)(`small`,{children:[`（`,l,`日ぶん）`]})]})]}),(0,$.jsx)(`button`,{className:`menuBtn`,"aria-label":`メニュー`,...tf(()=>o(`items`)),children:`≡`})]}),!u&&(0,$.jsx)(`div`,{className:`hint`,children:At.hint(e)}),!u&&n&&(0,$.jsxs)(`div`,{className:`toast`,children:[d&&(0,$.jsx)(`b`,{children:d}),f]}),!u&&t&&(0,$.jsxs)(`button`,{className:`act`,...tf(a),children:[(0,$.jsx)(`b`,{children:t.verb}),(0,$.jsx)(`small`,{children:t.label})]}),!u&&(0,$.jsx)(`div`,{className:`cross`})]})}function df({text:e}){let t=e.indexOf(`｜`);return t<0?(0,$.jsx)(`p`,{className:`narr`,children:e}):(0,$.jsxs)(`p`,{className:`say`,children:[(0,$.jsx)(`b`,{children:e.slice(0,t)}),e.slice(t+1)]})}function ff({lines:e,title:t,category:n,children:r,onEnd:i}){let[a,o]=(0,g.useState)(0);(0,g.useEffect)(()=>{nf=performance.now()},[]);let s=a>=e.length-1;return(0,$.jsxs)(`div`,{className:`dialog`,onClick:!s||i?()=>{rf()||(v.start(),s?i?.():(v.page(),o(a+1)))}:void 0,children:[t&&(0,$.jsx)(`div`,{className:`evTitle `+(n??``),children:t}),(0,$.jsx)(`div`,{className:`text`,children:e.slice(Math.max(0,a-1),a+1).map((e,t,n)=>(0,$.jsx)(`div`,{className:t===n.length-1?`cur`:`old`,children:(0,$.jsx)(df,{text:e})},a+`-`+t))}),s&&r,(!s||i)&&(0,$.jsx)(`div`,{className:`more`,children:s?`閉じる ▸`:`つづき ▸　${a+1}/${e.length}`}),!s&&e.length>3&&(0,$.jsx)(`button`,{className:`skip`,onClick:t=>{t.stopPropagation(),o(e.length-1)},children:`送る ▸▸`})]})}function pf(){let e=Nt(e=>e.scene),t=Nt(e=>e.s),n=Nt(e=>e.choose),r=Nt(e=>e.closeLines),i=Nt(e=>e.closeDay),a=Nt(e=>e.closeIntro),o=Nt(e=>e.buy),s=Nt(e=>e.closeShop);if(e.kind===`intro`)return(0,$.jsx)(`div`,{className:`overlay dark`,children:(0,$.jsxs)(`div`,{className:`card`,children:[(0,$.jsx)(`p`,{className:`small`,children:`第1章`}),(0,$.jsxs)(`h2`,{children:[At.title,(0,$.jsxs)(`small`,{children:[` — `,At.subtitle]})]}),At.intro.map((e,t)=>(0,$.jsx)(`p`,{className:`introLine`,style:{animationDelay:`${.3+t*.7}s`},children:e},t)),(0,$.jsx)(`button`,{className:`btn primary`,...tf(a),children:`はじめる`})]})});if(e.kind===`day`)return(0,$.jsx)(`div`,{className:`overlay dark`,children:(0,$.jsxs)(`div`,{className:`card`,children:[(0,$.jsx)(`p`,{className:`small`,children:`1348年 春`}),(0,$.jsxs)(`h2`,{children:[e.day,`日目`,(0,$.jsxs)(`small`,{children:[` / `,At.totalDays,`日`]})]}),e.report.length>0&&(0,$.jsx)(`ul`,{className:`report`,children:e.report.map((e,t)=>(0,$.jsx)(`li`,{children:e},t))}),(0,$.jsxs)(`div`,{className:`mini`,children:[At.familyRows(t).map(e=>(0,$.jsxs)(`span`,{className:`chip `+e.tone,children:[e.name,`：`,e.state]},e.id)),(0,$.jsxs)(`span`,{className:`chip`,children:[`食料 `,t.food]}),(0,$.jsxs)(`span`,{className:`chip`,children:[`所持金 `,t.money]})]}),(0,$.jsx)(`button`,{className:`btn primary`,...tf(i),children:`朝を迎える`})]})});if(e.kind===`shop`){let n=e.view;return(0,$.jsx)(`div`,{className:`dialogWrap`,children:(0,$.jsxs)(`div`,{className:`dialog shop`,children:[(0,$.jsxs)(`div`,{className:`evTitle`,children:[n.name,(0,$.jsxs)(`span`,{className:`purse`,children:[`所持金 `,t.money,`ソルド`]})]}),n.items.map(e=>{let n=e.key===`food`?t.food:e.key===`supplies`?t.supplies:t.remedies;return(0,$.jsxs)(`div`,{className:`item`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{children:e.name}),(0,$.jsxs)(`small`,{children:[`　1`,e.unit,` `,e.price,`ソルド・残り`,e.stock,`・手持ち`,n]}),(0,$.jsx)(`p`,{children:e.desc})]}),(0,$.jsx)(`button`,{className:`btn primary`,disabled:e.stock<=0||t.money<e.price,...tf(()=>o(e.key)),children:`買う`})]},e.key)}),n.items.every(e=>e.stock<=0)&&(0,$.jsx)(`p`,{className:`narr`,children:`売り物は、もう何も残っていない。`}),(0,$.jsx)(`p`,{className:`shopNote`,children:e.msg||n.note}),(0,$.jsx)(`div`,{className:`choices one`,children:(0,$.jsx)(`button`,{className:`choice`,...tf(s),children:(0,$.jsx)(`b`,{children:`買い物を終える`})})})]})})}if(e.kind===`lines`)return(0,$.jsx)(`div`,{className:`dialogWrap`,children:(0,$.jsx)(ff,{lines:e.lines,title:e.title,onEnd:r},e.lines.join(`|`).slice(0,60)+t.rng)});let c=e.view;return(0,$.jsx)(`div`,{className:`dialogWrap`,children:(0,$.jsx)(ff,{lines:c.lines,title:c.title??c.speaker,category:c.category,children:(0,$.jsx)(`div`,{className:`choices`+(c.choices.length===1?` one`:``),children:c.choices.map(e=>(0,$.jsxs)(`button`,{className:`choice`,disabled:!!e.disabled,onClick:t=>{t.stopPropagation(),rf()||(v.start(),n(e.idx))},children:[(0,$.jsx)(`b`,{children:e.label}),(e.disabled||e.hint)&&(0,$.jsx)(`small`,{children:e.disabled??e.hint})]},e.idx))})},c.id+t.rng)})}var mf=[[`items`,`持ち物`],[`family`,`家族`],[`log`,`記録`],[`settings`,`設定`],[`help`,`遊び方`]];function hf(){let e=Nt(e=>e.menu),t=Nt(e=>e.s),n=Nt(e=>e.setMenu),r=Nt(e=>e.toTitle),i=Nt(e=>e.settings),a=Nt(e=>e.setSettings),o=t.people.player,s=At.selfState(t);return(0,$.jsx)(`div`,{className:`overlay`,children:(0,$.jsxs)(`div`,{className:`sheet menu`,children:[(0,$.jsxs)(`div`,{className:`tabs`,children:[mf.map(([t,r])=>(0,$.jsx)(`button`,{className:t===e?`on`:``,...tf(()=>n(t)),children:r},t)),(0,$.jsx)(`button`,{className:`close`,...tf(()=>n(null)),children:`閉じる ✕`})]}),(0,$.jsxs)(`div`,{className:`body`,children:[e===`items`&&(0,$.jsx)(`table`,{className:`items`,children:(0,$.jsx)(`tbody`,{children:At.items(t).map(e=>(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:e.name}),(0,$.jsx)(`td`,{className:`num`,children:e.count}),(0,$.jsx)(`td`,{children:e.desc})]},e.name))})}),e===`family`&&(0,$.jsxs)(`div`,{className:`fam`,children:[(0,$.jsxs)(`div`,{className:`person`,children:[(0,$.jsxs)(`h3`,{children:[`あなた`,(0,$.jsx)(`span`,{className:`chip `+s.tone,children:s.text})]}),(0,$.jsx)(lf,{label:`体力`,v:t.stamina}),(0,$.jsx)(lf,{label:`健康`,v:o.health,warn:o.health<40}),(0,$.jsx)(lf,{label:`満腹`,v:o.satiety,warn:o.satiety<35}),(0,$.jsx)(lf,{label:`気力`,v:o.morale,warn:o.morale<25}),(0,$.jsx)(lf,{label:`疲労`,v:t.fatigue,warn:t.fatigue>=50})]}),At.familyRows(t).map(e=>(0,$.jsxs)(`div`,{className:`person`+(e.alive?``:` gone`),children:[(0,$.jsxs)(`h3`,{children:[e.name,(0,$.jsx)(`span`,{className:`chip `+e.tone,children:e.state})]}),e.alive?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(lf,{label:`健康`,v:e.health,warn:e.health<40}),(0,$.jsx)(lf,{label:`満腹`,v:e.satiety,warn:e.satiety<35}),(0,$.jsx)(lf,{label:`気力`,v:e.morale,warn:e.morale<25}),(0,$.jsx)(lf,{label:`絆`,v:e.bond,warn:e.bond<30})]}):null,e.note&&(0,$.jsx)(`p`,{className:`small`,children:e.note})]},e.id))]}),e===`log`&&(t.journal.length?(0,$.jsx)(`ul`,{className:`log`,children:[...t.journal].reverse().map((e,t)=>(0,$.jsxs)(`li`,{className:e.key?`key`:``,children:[(0,$.jsxs)(`span`,{children:[e.day,`日目`]}),e.text]},t))}):(0,$.jsx)(`p`,{className:`narr`,children:`まだ記すべきことは起きていない。大きな選択や出来事が、ここに残る。`})),e===`settings`&&(0,$.jsxs)(`div`,{className:`settings`,children:[(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`span`,{children:`音楽`}),(0,$.jsx)(`button`,{className:`toggle`+(i.bgm?` on`:``),...tf(()=>a({bgm:!i.bgm})),children:i.bgm?`オン`:`オフ`})]}),(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`span`,{children:`効果音`}),(0,$.jsx)(`button`,{className:`toggle`+(i.se?` on`:``),...tf(()=>a({se:!i.se})),children:i.se?`オン`:`オフ`})]}),(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`span`,{children:`視点の速さ`}),(0,$.jsx)(`input`,{type:`range`,min:.4,max:2.2,step:.1,value:i.sens,onChange:e=>a({sens:Number(e.target.value)})}),(0,$.jsx)(`em`,{children:i.sens.toFixed(1)})]}),(0,$.jsxs)(`label`,{children:[(0,$.jsx)(`span`,{children:`画質`}),(0,$.jsx)(`span`,{className:`seg`,children:[`auto`,`low`,`mid`,`high`].map(e=>(0,$.jsx)(`button`,{className:i.quality===e?`on`:``,...tf(()=>a({quality:e})),children:{auto:`自動`,low:`軽量`,mid:`標準`,high:`高`}[e]},e))})]}),(0,$.jsxs)(`p`,{className:`small`,children:[`シード：`,t.seed,`　／　進行は自動で保存されます。`]}),(0,$.jsx)(`div`,{className:`row`,children:(0,$.jsx)(`button`,{className:`btn`,...tf(r),children:`タイトルへ戻る`})})]}),e===`help`&&(0,$.jsx)(cf,{})]})]})})}function gf(){let e=Nt(e=>e.result),t=Nt(e=>e.newGame),n=Nt(e=>e.toTitle);return(0,g.useEffect)(()=>{document.querySelector(`.resultSheet`)?.scrollTo(0,0)},[]),(0,$.jsx)(`div`,{className:`overlay dark`,children:(0,$.jsxs)(`div`,{className:`sheet resultSheet`,children:[(0,$.jsxs)(`p`,{className:`small`,children:[`結末 `,e.ending.code]}),(0,$.jsx)(`h2`,{className:`endTitle`,children:e.ending.title}),(0,$.jsx)(`div`,{className:`story`,children:e.ending.story.map((e,t)=>(0,$.jsx)(`p`,{children:e},t))}),(0,$.jsxs)(`div`,{className:`cols`,children:[(0,$.jsxs)(`section`,{children:[(0,$.jsx)(`h3`,{children:`記録`}),(0,$.jsx)(`table`,{className:`items`,children:(0,$.jsxs)(`tbody`,{children:[e.rows.map(e=>(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:e.label}),(0,$.jsx)(`td`,{children:e.value})]},e.label)),e.family.map(e=>(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:e.name}),(0,$.jsx)(`td`,{className:e.alive?``:`bad`,children:e.fate})]},e.name)),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`最も危険だった出来事`}),(0,$.jsx)(`td`,{children:e.danger})]})]})})]}),(0,$.jsxs)(`section`,{children:[(0,$.jsx)(`h3`,{children:`主な選択と出来事`}),e.choices.length?(0,$.jsx)(`ul`,{className:`log`,children:e.choices.map((e,t)=>(0,$.jsx)(`li`,{children:e},t))}):(0,$.jsx)(`p`,{className:`small`,children:`大きな選択はなかった。`})]})]}),(0,$.jsxs)(`section`,{children:[(0,$.jsx)(`h3`,{children:`振り返り`}),(0,$.jsx)(`ul`,{className:`reflect`,children:e.reflections.map((e,t)=>(0,$.jsx)(`li`,{children:e},t))})]}),(0,$.jsxs)(`section`,{children:[(0,$.jsx)(`h3`,{children:`歴史の中の黒死病`}),(0,$.jsx)(`ul`,{className:`history`,children:e.history.map((e,t)=>(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`span`,{className:`tag `+(e.tag===`史実`?`fact`:e.tag===`創作`?`fic`:`est`),children:e.tag}),e.text]},t))})]}),(0,$.jsx)(`p`,{className:`question`,children:`あのとき違う選択をしていたら、家族を救えたのだろうか。`}),(0,$.jsxs)(`div`,{className:`row`,children:[(0,$.jsx)(`button`,{className:`btn primary`,...tf(()=>t()),children:`もう一度（新しい展開）`}),(0,$.jsx)(`button`,{className:`btn`,...tf(()=>t(e.seed)),children:`同じシードでやり直す`}),(0,$.jsx)(`button`,{className:`btn`,...tf(n),children:`タイトルへ`})]}),(0,$.jsxs)(`p`,{className:`small`,children:[`シード：`,e.seed]})]})})}(matchMedia(`(pointer: coarse)`).matches||`ontouchstart`in window)&&document.body.classList.add(`touch`),(0,_.createRoot)(document.getElementById(`root`)).render((0,$.jsx)(of,{}));