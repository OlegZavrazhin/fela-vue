"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var fela=require("fela"),felaDom=require("fela-dom"),embedded=_interopDefault(require("fela-plugin-embedded")),prefixer=_interopDefault(require("fela-plugin-prefixer")),fallback=_interopDefault(require("fela-plugin-fallback-value")),unit=_interopDefault(require("fela-plugin-unit")),ramda=require("ramda"),__assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)};function __rest(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&(t[n[a]]=e[n[a]])}return t}var camelify=function(e){return e.replace(/-(\w)/gu,function(e,r){return r.toUpperCase()})},memoize=function(e){var r,t=!1;return function(){return t?r:(t=!0,r=e())}},splitNonEscaped=function(e){return function(r){var t,n,a=ramda.map(ramda.length,e),u=[],i=0,o=e.length,s=r.length;for(t=0;t<s;t++)for(n=0;n<o;n++)r.slice(t,t+a[n])===e[n]&&"\\"!==r[t-1]&&(u.push(r.slice(i,t)),i=t+=a[n]);return i!==r.length-1&&u.push(r.slice(i)),u}},escape=function(){var e=/url\(.*?\)/g,r=/[,:;]/g;return function(t){return t.replace(e,function(e){return e.replace(r,function(e){return"\\"+e})})}}(),unescape=ramda.when(ramda.complement(ramda.isNil),ramda.replace(/([^\\])\\([^\\])/g,"$1$2")),join=function(e,r){return e.reduce(function(e,t,n){return e+t+(r[n]||"")},"")},Levels=function(){function e(){this.o={},this.path=[],this.path.push([this.o])}return Object.defineProperty(e.prototype,"out",{get:function(){return this.o},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"depth",{get:function(){return this.path.length},enumerable:!0,configurable:!0}),e.prototype.add=function(e){for(var r=ramda.last(this.path),t=[],n=0,a=e;n<a.length;n++)for(var u=a[n],i=0,o=r;i<o.length;i++){var s=o[i];s[u]||(s[u]={}),t.push(s[u])}this.path.push(t)},e.prototype.merge=function(e,r){if(r&&e)for(var t=0,n=ramda.last(this.path);t<n.length;t++){n[t][e]=r}},e.prototype.pop=function(){return this.path.pop()},e}(),analyseLine=function(){var e=/^([\w-]+)(: *| +)(.*)$/,r=/^(([\|~\$@>\*\.:&\(\)\^="\-\[\]]+).*[ ,]*)+:?$/,t=/\s*,\s*/g,n=/(.*):$/;return function(a,u,i){var o;switch(!0){case"{"==u:a.add(i);break;case"}"==u:a.pop();break;case null!=(o=e.exec(u)):a.merge(unescape(camelify(o[1])),ramda.when(isNaN,unescape,function(e){switch(e){case"undefined":case"":return;case"null":return null;default:return isNaN(+e)?e:+e}}(o[3])));break;case null!=(o=r.exec(u)):i.splice(0),i.push.apply(i,u.split(t).map(function(e){return"."==(e=e.replace(n,"$1"))[0]&&(e=a.depth>1?"& "+e:e.slice(1)),e}))}}}(),parse=function(){var e=["\n","\r",";"],r=function(r){return e.includes(r)},t=/((^\s*?\/\/.*$)|\/\*(.|[\n\r])*?\*\/)/gm;return function(n){var a=new Levels,u=[];return ramda.compose(function(){return a.out},ramda.forEach(function(e){if((e=e.trim())&&analyseLine(a,e,u),a.depth<1)throw new Error("lit-css parse error: unbalanced {} braces !")}),splitNonEscaped(e),ramda.replace(/(\{|\})/g,function(e,t,n,a){return r(a[n-1])||(t=";"+t),r(a[n+1])||(t+=";"),t}),escape,ramda.replace(t,""))(n)}}(),css=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return parse(join(e,r))},isObject=function(e){return"object"==typeof e},emptyObject=Object.freeze({}),isBrowser=function(){try{return isObject(window)}catch(e){return!1}}(),defaultOpts={method:"f",defStyles:void 0,plugins:[],enhancers:[],preset:{unit:[]},ssr:!1},types=Object.freeze({f:"function",o:"object",s:"string"}),getRules=function(){var e=function(e,r){return e[r]||e[camelify(r)]};return function(r,t,n){switch(t||(t=emptyObject),typeof n){case types.f:return[n];case types.o:return[ramda.always(n)];case types.s:return function(r,t,n){return n.split(/[,\s\t]+/g).map(function(n){return e(t,n)||e(r(),n)||emptyObject})}(r,t,n).reduce(function(e,n){return e.push.apply(e,getRules(r,t,n)),e},[]);default:return[ramda.identity]}}}(),Renderer=function(){function e(e){var r,t,n,a;void 0===e&&(e={});var u=__assign({},defaultOpts,e),i=u.method,o=u.ssr,s=u.preset,c=u.plugins,f=u.enhancers,p=__rest(u,["method","ssr","preset","plugins","enhancers"]),l=__assign({},defaultOpts.preset,s||{});if(e.fdef)throw new Error("fela-vue: Change deprecated `fdef` to `defStyles`!");this.renderer=fela.createRenderer(__assign({},p,{enhancers:f,plugins:[embedded(),prefixer(),fallback(),unit.apply(void 0,l.unit)].concat(c)}));var d,h,m=this.renderer,y=e.defStyles;switch(typeof y){case types.o:d=(r=[y.key,y.value])[0],h=r[1];break;case types.f:d=(t=["fdef",y])[0],h=t[1]}isBrowser&&(o?felaDom.rehydrate(m):felaDom.render(m)),this._mixin={methods:(n={},n[i]=function(e,r){var t=this;return void 0===r&&(r={}),m.renderRule(fela.combineRules.apply(void 0,getRules(memoize(function(){return h?h(t):emptyObject}),this.style,e)),r)||void 0},n),computed:y?(a={},a[d]=function(){return h(this)},a):{}}}return Object.defineProperty(e.prototype,"mixin",{get:function(){return Object.freeze(this._mixin)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"style",{get:function(){return felaDom.renderToMarkup(this.renderer)},enumerable:!0,configurable:!0}),e}();exports.Renderer=Renderer,exports.css=css;
