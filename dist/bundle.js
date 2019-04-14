"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var fela=require("fela"),felaDom=require("fela-dom"),embedded=_interopDefault(require("fela-plugin-embedded")),prefixer=_interopDefault(require("fela-plugin-prefixer")),fallback=_interopDefault(require("fela-plugin-fallback-value")),unit=_interopDefault(require("fela-plugin-unit")),__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r}var always=function(e){return function(){return e}},reflect=function(e){return e},camelify=function(e){return e.replace(/-(\w)/gu,function(e,t){return t.toUpperCase()})},last=function(e){return e[e.length-1]},memoize=function(e){var t,r=!1;return function(){return r?t:(r=!0,t=e())}},join=function(e,t){return e.reduce(function(e,r,n){return e+r+(null==t[n]?"":t[n])},"")},Levels=function(){function e(){this.o={},this.path=[],this.path.push([this.o])}return Object.defineProperty(e.prototype,"out",{get:function(){return this.o},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"depth",{get:function(){return this.path.length},enumerable:!0,configurable:!0}),e.prototype.add=function(e){for(var t=last(this.path),r=[],n=0,i=e;n<i.length;n++)for(var u=i[n],o=0,a=t;o<a.length;o++){var s=a[o];s[u]||(s[u]={}),r.push(s[u])}this.path.push(r)},e.prototype.merge=function(e,t){for(var r=0,n=last(this.path);r<n.length;r++){n[r][e]=t}},e.prototype.pop=function(){return this.path.pop()},e}(),analyseLine=function(){var e=/^([\w-]+)(: *| +)(.*)$/,t=/^(([\|~\$@>\*\.:&\(\)\^="\-\[\]]+).*[ ,]*)+:?$/,r=/\s*,\s*/g,n=/(.*):$/;return function(i,u,o){var a;switch(!0){case"{"==u:i.add(o);break;case"}"==u:i.pop();break;case null!=(a=e.exec(u)):i.merge(camelify(a[1]),isNaN(a[3])?a[3]:+a[3]);break;case null!=(a=t.exec(u)):o.splice(0),o.push.apply(o,u.split(r).map(function(e){return"."==(e=e.replace(n,"$1"))[0]&&(e=i.depth>1?"& "+e:e.slice(1)),e}))}}}(),css=function(){var e=["\n","\r",";"],t=function(t){return e.includes(t)},r=new RegExp("["+e.join("")+"]","g"),n=/^\/\/.*$/;return function(e){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];var o=[],a=new Levels;return join(e,i).replace(/(\{|\})/g,function(e,r,n,i){return t(i[n-1])||(r=";"+r),t(i[n+1])||(r+=";"),r}).split(r).forEach(function(e){if((e=e.trim().replace(n,""))&&analyseLine(a,e,o),a.depth<1)throw new Error("lit-css parse error: unbalanced {} braces !")}),a.out}}(),isObject=function(e){return"object"==typeof e},emptyObject=Object.freeze({}),isBrowser=function(){try{return isObject(window)}catch(e){return!1}}(),defaultOpts={method:"f",defStyles:void 0,plugins:[],enhancers:[],preset:{unit:[]},ssr:!1},types=Object.freeze({f:"function",o:"object",s:"string"}),getRules=function(){var e=function(e,t){return e[t]||e[camelify(t)]};return function(t,r,n){switch(r||(r=emptyObject),typeof n){case types.f:return[n];case types.o:return[always(n)];case types.s:return function(t,r,n){return n.split(/[,\s\t]+/g).map(function(n){return e(r,n)||e(t(),n)||emptyObject})}(t,r,n).reduce(function(e,n){return e.push.apply(e,getRules(t,r,n)),e},[]);default:return[reflect]}}}(),Renderer=function(){function e(e){var t,r,n,i;void 0===e&&(e={});var u=__assign({},defaultOpts,e),o=u.method,a=u.ssr,s=u.preset,f=u.plugins,c=u.enhancers,p=__rest(u,["method","ssr","preset","plugins","enhancers"]),l=__assign({},defaultOpts.preset,s||{});if(e.fdef)throw new Error("fela-vue: Change deprecated `fdef` to `defStyles`!");this.renderer=fela.createRenderer(__assign({},p,{enhancers:c,plugins:[embedded(),prefixer(),fallback(),unit.apply(void 0,l.unit)].concat(f)}));var d,h,y=this.renderer,b=e.defStyles;switch(typeof b){case types.o:d=(t=[b.key,b.value])[0],h=t[1];break;case types.f:d=(r=["fdef",b])[0],h=r[1]}isBrowser&&(a?felaDom.rehydrate(y):felaDom.render(y)),this._mixin={methods:(n={},n[o]=function(e,t){var r=this;return void 0===t&&(t={}),y.renderRule(fela.combineRules.apply(void 0,getRules(memoize(function(){return h?h(r):emptyObject}),this.style,e)),t)||void 0},n),computed:b?(i={},i[d]=function(){return h(this)},i):{}}}return Object.defineProperty(e.prototype,"mixin",{get:function(){return Object.freeze(this._mixin)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"style",{get:function(){return felaDom.renderToMarkup(this.renderer)},enumerable:!0,configurable:!0}),e}();exports.Renderer=Renderer,exports.css=css;
