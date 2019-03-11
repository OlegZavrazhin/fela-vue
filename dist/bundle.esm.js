import{createRenderer as e}from"fela";import{renderToMarkup as r,rehydrate as t,render as n}from"fela-dom";function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function i(e,r){return e(r={exports:{}},r.exports),r.exports}var a=o(i(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r,t){for(var n=0,o=e.length;n<o;++n)t=r(t,e[n],n,o,e);return t}})),l=function(e){return null!=e&&"object"==typeof e&&!1===Array.isArray(e)},f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function u(e,r){var t=e.fontFamily,n=e.src,o=function(e,r){var t={};for(var n in e)r.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(e,["fontFamily","src"]);if("string"==typeof t&&Array.isArray(n))return r.renderFont(t,n,o)}function d(e,r,t){var n=function(n){var o=e[n];"fontFace"===n&&"object"===(void 0===o?"undefined":f(o))?(Array.isArray(o)?e.fontFamily=a(o,function(e,r){var n=u(r,t);return n&&-1===e.indexOf(n)&&e.push(n),e},[]).join(","):e.fontFamily=u(o,t),delete e.fontFace):"animationName"===n&&"object"===(void 0===o?"undefined":f(o))?Array.isArray(o)?e[n]=o.map(function(e){return t.renderKeyframe(function(){return e})}).join(","):e[n]=t.renderKeyframe(function(){return o}):l(o)&&d(o,r,t)};for(var o in e)n(o);return e}var s=function(){return d};function c(e){return e.charAt(0).toUpperCase()+e.slice(1)}function p(e,r,t){if(e.hasOwnProperty(r)){for(var n={},o=e[r],i=c(r),a=Object.keys(t),l=0;l<a.length;l++){var f=a[l];if(f===r)for(var u=0;u<o.length;u++)n[o[u]+i]=t[r];n[f]=t[f]}return n}return t}function m(e,r,t,n,o){for(var i=0,a=e.length;i<a;++i){var l=e[i](r,t,n,o);if(l)return l}}function b(e,r){-1===e.indexOf(r)&&e.push(r)}function y(e,r){if(Array.isArray(r))for(var t=0,n=r.length;t<n;++t)b(e,r[t]);else b(e,r)}function g(e){return e instanceof Object&&!Array.isArray(e)}var k=["Webkit"],v=["ms"],h=["Webkit","ms"],x={plugins:[],prefixMap:{appearance:["Webkit","Moz"],textEmphasisPosition:k,textEmphasis:k,textEmphasisStyle:k,textEmphasisColor:k,boxDecorationBreak:k,maskImage:k,maskMode:k,maskRepeat:k,maskPosition:k,maskClip:k,maskOrigin:k,maskSize:k,maskComposite:k,mask:k,maskBorderSource:k,maskBorderMode:k,maskBorderSlice:k,maskBorderWidth:k,maskBorderOutset:k,maskBorderRepeat:k,maskBorder:k,maskType:k,textDecorationStyle:k,textDecorationSkip:k,textDecorationLine:k,textDecorationColor:k,userSelect:["Webkit","Moz","ms"],backdropFilter:k,fontKerning:k,scrollSnapType:h,scrollSnapPointsX:h,scrollSnapPointsY:h,scrollSnapDestination:h,scrollSnapCoordinate:h,clipPath:k,shapeImageThreshold:k,shapeImageMargin:k,shapeImageOutside:k,filter:k,hyphens:h,flowInto:h,flowFrom:h,breakBefore:h,breakAfter:h,breakInside:h,regionFragment:h,writingMode:h,textOrientation:k,tabSize:["Moz"],fontFeatureSettings:k,columnCount:k,columnFill:k,columnGap:k,columnRule:k,columnRuleColor:k,columnRuleStyle:k,columnRuleWidth:k,columns:k,columnSpan:k,columnWidth:k,wrapFlow:v,wrapThrough:v,wrapMargin:v,gridTemplateColumns:v,gridTemplateRows:v,gridTemplateAreas:v,gridTemplate:v,gridAutoColumns:v,gridAutoRows:v,gridAutoFlow:v,grid:v,gridRowStart:v,gridColumnStart:v,gridRowEnd:v,gridRow:v,gridColumn:v,gridColumnEnd:v,gridColumnGap:v,gridRowGap:v,gridArea:v,gridGap:v,textSizeAdjust:h}};var S=["-webkit-","-moz-",""],W={"zoom-in":!0,"zoom-out":!0,grab:!0,grabbing:!0};var B=o(i(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return"string"==typeof e&&t.test(e)};var t=/-webkit-|-moz-|-ms-/;e.exports=r.default})),O=["-webkit-",""];var w=["-webkit-",""];var M={flex:["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex","flex"],"inline-flex":["-webkit-inline-box","-moz-inline-box","-ms-inline-flexbox","-webkit-inline-flex","inline-flex"]};var z={"space-around":"justify","space-between":"justify","flex-start":"start","flex-end":"end","wrap-reverse":"multiple",wrap:"multiple"},P={alignItems:"WebkitBoxAlign",justifyContent:"WebkitBoxPack",flexWrap:"WebkitBoxLines",flexGrow:"WebkitBoxFlex"};var j=["-webkit-","-moz-",""],A=/linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;var _=["-webkit-",""];var C={marginBlockStart:["WebkitMarginBefore"],marginBlockEnd:["WebkitMarginAfter"],marginInlineStart:["WebkitMarginStart","MozMarginStart"],marginInlineEnd:["WebkitMarginEnd","MozMarginEnd"],paddingBlockStart:["WebkitPaddingBefore"],paddingBlockEnd:["WebkitPaddingAfter"],paddingInlineStart:["WebkitPaddingStart","MozPaddingStart"],paddingInlineEnd:["WebkitPaddingEnd","MozPaddingEnd"],borderBlockStart:["WebkitBorderBefore"],borderBlockStartColor:["WebkitBorderBeforeColor"],borderBlockStartStyle:["WebkitBorderBeforeStyle"],borderBlockStartWidth:["WebkitBorderBeforeWidth"],borderBlockEnd:["WebkitBorderAfter"],borderBlockEndColor:["WebkitBorderAfterColor"],borderBlockEndStyle:["WebkitBorderAfterStyle"],borderBlockEndWidth:["WebkitBorderAfterWidth"],borderInlineStart:["WebkitBorderStart","MozBorderStart"],borderInlineStartColor:["WebkitBorderStartColor","MozBorderStartColor"],borderInlineStartStyle:["WebkitBorderStartStyle","MozBorderStartStyle"],borderInlineStartWidth:["WebkitBorderStartWidth","MozBorderStartWidth"],borderInlineEnd:["WebkitBorderEnd","MozBorderEnd"],borderInlineEndColor:["WebkitBorderEndColor","MozBorderEndColor"],borderInlineEndStyle:["WebkitBorderEndStyle","MozBorderEndStyle"],borderInlineEndWidth:["WebkitBorderEndWidth","MozBorderEndWidth"]};var E=["-webkit-","-moz-",""],I={maxHeight:!0,maxWidth:!0,width:!0,height:!0,columnWidth:!0,minWidth:!0,minHeight:!0},F={"min-content":!0,"max-content":!0,"fill-available":!0,"fit-content":!0,"contain-floats":!0};var R=/[A-Z]/g,T=/^ms-/,D={};function G(e){return"-"+e.toLowerCase()}function H(e){if(D.hasOwnProperty(e))return D[e];var r=e.replace(R,G);return D[e]=T.test(r)?"-"+r:r}var K=o(i(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return(0,n.default)(e)};var t,n=(t=H)&&t.__esModule?t:{default:t};e.exports=r.default})),L={transition:!0,transitionProperty:!0,WebkitTransition:!0,WebkitTransitionProperty:!0,MozTransition:!0,MozTransitionProperty:!0},N={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-"};var U=function(e){var r=e.prefixMap,t=e.plugins;return function e(n){for(var o in n){var i=n[o];if(g(i))n[o]=e(i);else if(Array.isArray(i)){for(var a=[],l=0,f=i.length;l<f;++l)y(a,m(t,o,i[l],n,r)||i[l]);a.length>0&&(n[o]=a)}else{var u=m(t,o,i,n,r);u&&(n[o]=u),n=p(r,o,n)}}return n}}({prefixMap:x.prefixMap,plugins:[function(e,r){if("string"==typeof r&&"text"===r)return["-webkit-text","text"]},function(e,r){if("string"==typeof r&&!B(r)&&r.indexOf("cross-fade(")>-1)return O.map(function(e){return r.replace(/cross-fade\(/g,e+"cross-fade(")})},function(e,r){if("cursor"===e&&W.hasOwnProperty(r))return S.map(function(e){return e+r})},function(e,r){if("string"==typeof r&&!B(r)&&r.indexOf("filter(")>-1)return w.map(function(e){return r.replace(/filter\(/g,e+"filter(")})},function(e,r,t){"flexDirection"===e&&"string"==typeof r&&(r.indexOf("column")>-1?t.WebkitBoxOrient="vertical":t.WebkitBoxOrient="horizontal",r.indexOf("reverse")>-1?t.WebkitBoxDirection="reverse":t.WebkitBoxDirection="normal"),P.hasOwnProperty(e)&&(t[P[e]]=z[r]||r)},function(e,r){if("string"==typeof r&&!B(r)&&A.test(r))return j.map(function(e){return r.replace(A,function(r){return e+r})})},function(e,r){if("string"==typeof r&&!B(r)&&r.indexOf("image-set(")>-1)return _.map(function(e){return r.replace(/image-set\(/g,e+"image-set(")})},function(e,r,t){if(Object.prototype.hasOwnProperty.call(C,e))for(var n=C[e],o=0,i=n.length;o<i;++o)t[n[o]]=r},function(e,r){if("position"===e&&"sticky"===r)return["-webkit-sticky","sticky"]},function(e,r){if(I.hasOwnProperty(e)&&F.hasOwnProperty(r))return E.map(function(e){return e+r})},function(e,r,t,n){if("string"==typeof r&&L.hasOwnProperty(e)){var o=function(e,r){if(B(e))return e;for(var t=e.split(/,(?![^()]*(?:\([^()]*\))?\))/g),n=0,o=t.length;n<o;++n){var i=t[n],a=[i];for(var l in r){var f=K(l);if(i.indexOf(f)>-1&&"order"!==f)for(var u=r[l],d=0,s=u.length;d<s;++d)a.unshift(i.replace(f,N[u[d]]+f))}t[n]=a.join(",")}return t.join(",")}(r,n),i=o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(e){return!/-moz-|-ms-/.test(e)}).join(",");if(e.indexOf("Webkit")>-1)return i;var a=o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(e){return!/-webkit-|-ms-/.test(e)}).join(",");return e.indexOf("Moz")>-1?a:(t["Webkit"+c(e)]=i,t["Moz"+c(e)]=a,o)}},function(e,r){if("display"===e&&M.hasOwnProperty(r))return M[r]}]}),q=i(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return(0,n.default)(e)};var t,n=(t=H)&&t.__esModule?t:{default:t};e.exports=r.default});o(q);var X=i(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){return(0,n.default)(e)+":"+r};var t,n=(t=q)&&t.__esModule?t:{default:t};e.exports=r.default});o(X);var Y=o(i(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var r="";for(var t in e){var o=e[t];"string"!=typeof o&&"number"!=typeof o||(r&&(r+=";"),r+=(0,n.default)(t,o))}return r};var t,n=(t=X)&&t.__esModule?t:{default:t};e.exports=r.default})),Z=o(i(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r,t){for(var n in e)t=r(t,e[n],n,e);return t}})),J=o(i(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){var t=(0,n.default)(e);return r.join(";"+t+":")};var t,n=(t=q)&&t.__esModule?t:{default:t};e.exports=r.default}));function Q(e){for(var r in e){var t=e[r];Array.isArray(t)?e[r]=J(r,t):l(t)&&"fontFace"!==r&&(e[r]=Q(t))}return e}var V=function(){return Q};var $=V();function ee(e){return Z(e,function(r,t,n){if(l(t))r[n]=ee(t);else{var o=U(function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}({},n,e[n])),i=Object.keys(o),a=i[0],f=o[a];if(1===i.length)r[a]=f;else{delete o[a];var u=Y($(o));r[a]=f+";"+u}}return r},{})}var re=function(){return ee},te=o(i(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return o.hasOwnProperty(e)};var t,n=(t=q)&&t.__esModule?t:{default:t};var o={borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i=["animationIterationCount","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridRow","gridColumn","order","lineClamp"],a=["Webkit","ms","Moz","O"];function l(e,r){return e+r.charAt(0).toUpperCase()+r.slice(1)}for(var f=0,u=i.length;f<u;++f){var d=i[f];o[d]=!0;for(var s=0,c=a.length;s<c;++s)o[l(a[s],d)]=!0}for(var p in o)o[(0,n.default)(p)]=!0;e.exports=r.default})),ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function oe(e,r,t){var n=void 0===r?"undefined":ne(r);return("number"===n||"string"===n&&r==parseFloat(r))&&0!=r&&(r+=t),r}function ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"px",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:te;return function(n){return function e(r,t,n,o){var i=function(i){if(!o(i)){var a=r[i],f=n[i]||t;l(a)?r[i]=e(a,t,n,o):Array.isArray(a)?r[i]=a.map(function(e){return oe(0,e,f)}):r[i]=oe(0,a,f)}};for(var a in r)i(a);return r}(n,e,r,t)}}const ae=require("is-browser"),le={method:"f",defStyles:void 0,plugins:[],preset:{unit:[]},ssr:!1};class fe{get mixin(){return Object.freeze(this._mixin)}get style(){return r(this.renderer)}constructor(r={}){const{method:o,ssr:i,plugins:a}=Object.assign({},le,r),l=Object.assign({},le.preset,r.preset||{});if(r.fdef)throw new Error("fela-vue: Change deprecated `fdef` to `defStyles`!");this.renderer=e({plugins:[s(),re(),V(),ie(...l.unit),...a]});const{renderer:f}=this,u=r.defStyles;let d,c;u&&([d,c]={object:[u.key,u.value],function:["fdef",u]}[typeof u]),ae&&(i?t(f):n(f)),this._mixin={methods:{[o](e,r={}){const t={function:e,object:()=>e,string:(()=>{const r=this.style&&this.style[e];return{function:r,object:()=>r}[typeof r]||(e=>e)})()}[typeof e];return f.renderRule(t,r)}},computed:u?{[d](){return c(this)}}:{}}}}export{fe as Renderer};
