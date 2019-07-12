"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var fela=require("fela"),felaDom=require("fela-dom"),embedded=_interopDefault(require("fela-plugin-embedded")),prefixer=_interopDefault(require("fela-plugin-prefixer")),fallback=_interopDefault(require("fela-plugin-fallback-value")),unit=_interopDefault(require("fela-plugin-unit")),ramda=require("ramda"),__assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var u in r=arguments[t])Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u]);return e}).apply(this,arguments)};function __rest(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var u=0;for(n=Object.getOwnPropertySymbols(e);u<n.length;u++)r.indexOf(n[u])<0&&(t[n[u]]=e[n[u]])}return t}function _isPlaceholder(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}function _curry1(e){return function r(t){return 0===arguments.length||_isPlaceholder(t)?r:e.apply(this,arguments)}}function _curry2(e){return function r(t,n){switch(arguments.length){case 0:return r;case 1:return _isPlaceholder(t)?r:_curry1(function(r){return e(t,r)});default:return _isPlaceholder(t)&&_isPlaceholder(n)?r:_isPlaceholder(t)?_curry1(function(r){return e(r,n)}):_isPlaceholder(n)?_curry1(function(r){return e(t,r)}):e(t,n)}}}function _isFunction(e){return"[object Function]"===Object.prototype.toString.call(e)}var and=_curry2(function(e,r){return e&&r}),_isArray=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)};function _isString(e){return"[object String]"===Object.prototype.toString.call(e)}var _isArrayLike=_curry1(function(e){return!!_isArray(e)||!!e&&("object"==typeof e&&(!_isString(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&(e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1)))))}),XWrap=function(){function e(e){this.f=e}return e.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},e.prototype["@@transducer/result"]=function(e){return e},e.prototype["@@transducer/step"]=function(e,r){return this.f(e,r)},e}();function _xwrap(e){return new XWrap(e)}function _arity(e,r){switch(e){case 0:return function(){return r.apply(this,arguments)};case 1:return function(e){return r.apply(this,arguments)};case 2:return function(e,t){return r.apply(this,arguments)};case 3:return function(e,t,n){return r.apply(this,arguments)};case 4:return function(e,t,n,u){return r.apply(this,arguments)};case 5:return function(e,t,n,u,a){return r.apply(this,arguments)};case 6:return function(e,t,n,u,a,c){return r.apply(this,arguments)};case 7:return function(e,t,n,u,a,c,o){return r.apply(this,arguments)};case 8:return function(e,t,n,u,a,c,o,i){return r.apply(this,arguments)};case 9:return function(e,t,n,u,a,c,o,i,s){return r.apply(this,arguments)};case 10:return function(e,t,n,u,a,c,o,i,s,l){return r.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}var bind=_curry2(function(e,r){return _arity(e.length,function(){return e.apply(r,arguments)})});function _arrayReduce(e,r,t){for(var n=0,u=t.length;n<u;){if((r=e["@@transducer/step"](r,t[n]))&&r["@@transducer/reduced"]){r=r["@@transducer/value"];break}n+=1}return e["@@transducer/result"](r)}function _iterableReduce(e,r,t){for(var n=t.next();!n.done;){if((r=e["@@transducer/step"](r,n.value))&&r["@@transducer/reduced"]){r=r["@@transducer/value"];break}n=t.next()}return e["@@transducer/result"](r)}function _methodReduce(e,r,t,n){return e["@@transducer/result"](t[n](bind(e["@@transducer/step"],e),r))}var symIterator="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function _reduce(e,r,t){if("function"==typeof e&&(e=_xwrap(e)),_isArrayLike(t))return _arrayReduce(e,r,t);if("function"==typeof t["fantasy-land/reduce"])return _methodReduce(e,r,t,"fantasy-land/reduce");if(null!=t[symIterator])return _iterableReduce(e,r,t[symIterator]());if("function"==typeof t.next)return _iterableReduce(e,r,t);if("function"==typeof t.reduce)return _methodReduce(e,r,t,"reduce");throw new TypeError("reduce: list must be array or iterable")}function _concat(e,r){var t;r=r||[];var n=(e=e||[]).length,u=r.length,a=[];for(t=0;t<n;)a[a.length]=e[t],t+=1;for(t=0;t<u;)a[a.length]=r[t],t+=1;return a}function _isTransformer(e){return null!=e&&"function"==typeof e["@@transducer/step"]}function _dispatchable(e,r,t){return function(){if(0===arguments.length)return t();var n=Array.prototype.slice.call(arguments,0),u=n.pop();if(!_isArray(u)){for(var a=0;a<e.length;){if("function"==typeof u[e[a]])return u[e[a]].apply(u,n);a+=1}if(_isTransformer(u)){var c=r.apply(null,n);return c(u)}}return t.apply(this,arguments)}}function _map(e,r){for(var t=0,n=r.length,u=Array(n);t<n;)u[t]=e(r[t]),t+=1;return u}var _xfBase={init:function(){return this.xf["@@transducer/init"]()},result:function(e){return this.xf["@@transducer/result"](e)}},XMap=function(){function e(e,r){this.xf=r,this.f=e}return e.prototype["@@transducer/init"]=_xfBase.init,e.prototype["@@transducer/result"]=_xfBase.result,e.prototype["@@transducer/step"]=function(e,r){return this.xf["@@transducer/step"](e,this.f(r))},e}(),_xmap=_curry2(function(e,r){return new XMap(e,r)});function _curryN(e,r,t){return function(){for(var n=[],u=0,a=e,c=0;c<r.length||u<arguments.length;){var o;c<r.length&&(!_isPlaceholder(r[c])||u>=arguments.length)?o=r[c]:(o=arguments[u],u+=1),n[c]=o,_isPlaceholder(o)||(a-=1),c+=1}return a<=0?t.apply(this,n):_arity(a,_curryN(e,n,t))}}var curryN=_curry2(function(e,r){return 1===e?_curry1(r):_arity(e,_curryN(e,[],r))});function _has(e,r){return Object.prototype.hasOwnProperty.call(r,e)}var toString=Object.prototype.toString,_isArguments=function(){return"[object Arguments]"===toString.call(arguments)?function(e){return"[object Arguments]"===toString.call(e)}:function(e){return _has("callee",e)}}(),hasEnumBug=!{toString:null}.propertyIsEnumerable("toString"),nonEnumerableProps=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],hasArgsEnumBug=function(){return arguments.propertyIsEnumerable("length")}(),contains=function(e,r){for(var t=0;t<e.length;){if(e[t]===r)return!0;t+=1}return!1},keys="function"!=typeof Object.keys||hasArgsEnumBug?_curry1(function(e){if(Object(e)!==e)return[];var r,t,n=[],u=hasArgsEnumBug&&_isArguments(e);for(r in e)!_has(r,e)||u&&"length"===r||(n[n.length]=r);if(hasEnumBug)for(t=nonEnumerableProps.length-1;t>=0;)_has(r=nonEnumerableProps[t],e)&&!contains(n,r)&&(n[n.length]=r),t-=1;return n}):_curry1(function(e){return Object(e)!==e?[]:Object.keys(e)}),map=_curry2(_dispatchable(["fantasy-land/map","map"],_xmap,function(e,r){switch(Object.prototype.toString.call(r)){case"[object Function]":return curryN(r.length,function(){return e.call(this,r.apply(this,arguments))});case"[object Object]":return _reduce(function(t,n){return t[n]=e(r[n]),t},{},keys(r));default:return _map(e,r)}})),ap=_curry2(function(e,r){return"function"==typeof r["fantasy-land/ap"]?r["fantasy-land/ap"](e):"function"==typeof e.ap?e.ap(r):"function"==typeof e?function(t){return e(t)(r(t))}:_reduce(function(e,t){return _concat(e,map(t,r))},[],e)}),liftN=_curry2(function(e,r){var t=curryN(e,r);return curryN(e,function(){return _reduce(ap,map(t,arguments[0]),Array.prototype.slice.call(arguments,1))})}),lift=_curry1(function(e){return liftN(e.length,e)}),both=_curry2(function(e,r){return _isFunction(e)?function(){return e.apply(this,arguments)&&r.apply(this,arguments)}:lift(and)(e,r)});function _isObject(e){return"[object Object]"===Object.prototype.toString.call(e)}var empty=_curry1(function(e){return null!=e&&"function"==typeof e["fantasy-land/empty"]?e["fantasy-land/empty"]():null!=e&&null!=e.constructor&&"function"==typeof e.constructor["fantasy-land/empty"]?e.constructor["fantasy-land/empty"]():null!=e&&"function"==typeof e.empty?e.empty():null!=e&&null!=e.constructor&&"function"==typeof e.constructor.empty?e.constructor.empty():_isArray(e)?[]:_isString(e)?"":_isObject(e)?{}:_isArguments(e)?function(){return arguments}():void 0});function _arrayFromIterator(e){for(var r,t=[];!(r=e.next()).done;)t.push(r.value);return t}function _includesWith(e,r,t){for(var n=0,u=t.length;n<u;){if(e(r,t[n]))return!0;n+=1}return!1}function _functionName(e){var r=String(e).match(/^function (\w*)/);return null==r?"":r[1]}function _objectIs(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}var _objectIs$1="function"==typeof Object.is?Object.is:_objectIs,type=_curry1(function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)});function _uniqContentEquals(e,r,t,n){var u=_arrayFromIterator(e);function a(e,r){return _equals(e,r,t.slice(),n.slice())}return!_includesWith(function(e,r){return!_includesWith(a,r,e)},_arrayFromIterator(r),u)}function _equals(e,r,t,n){if(_objectIs$1(e,r))return!0;var u=type(e);if(u!==type(r))return!1;if(null==e||null==r)return!1;if("function"==typeof e["fantasy-land/equals"]||"function"==typeof r["fantasy-land/equals"])return"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](r)&&"function"==typeof r["fantasy-land/equals"]&&r["fantasy-land/equals"](e);if("function"==typeof e.equals||"function"==typeof r.equals)return"function"==typeof e.equals&&e.equals(r)&&"function"==typeof r.equals&&r.equals(e);switch(u){case"Arguments":case"Array":case"Object":if("function"==typeof e.constructor&&"Promise"===_functionName(e.constructor))return e===r;break;case"Boolean":case"Number":case"String":if(typeof e!=typeof r||!_objectIs$1(e.valueOf(),r.valueOf()))return!1;break;case"Date":if(!_objectIs$1(e.valueOf(),r.valueOf()))return!1;break;case"Error":return e.name===r.name&&e.message===r.message;case"RegExp":if(e.source!==r.source||e.global!==r.global||e.ignoreCase!==r.ignoreCase||e.multiline!==r.multiline||e.sticky!==r.sticky||e.unicode!==r.unicode)return!1}for(var a=t.length-1;a>=0;){if(t[a]===e)return n[a]===r;a-=1}switch(u){case"Map":return e.size===r.size&&_uniqContentEquals(e.entries(),r.entries(),t.concat([e]),n.concat([r]));case"Set":return e.size===r.size&&_uniqContentEquals(e.values(),r.values(),t.concat([e]),n.concat([r]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var c=keys(e);if(c.length!==keys(r).length)return!1;var o=t.concat([e]),i=n.concat([r]);for(a=c.length-1;a>=0;){var s=c[a];if(!_has(s,r)||!_equals(r[s],e[s],o,i))return!1;a-=1}return!0}var equals=_curry2(function(e,r){return _equals(e,r,[],[])}),isEmpty=_curry1(function(e){return null!=e&&equals(e,empty(e))}),camelify=function(e){return e.replace(/-(\w)/gu,function(e,r){return r.toUpperCase()})},memoize=function(e){var r,t=!1;return function(){return t?r:(t=!0,r=e())}},splitNonEscaped=function(e){return function(r){var t,n,u=ramda.map(ramda.length,e),a=[],c=0,o=e.length,i=r.length;for(t=0;t<i;t++)for(n=0;n<o;n++)r.slice(t,t+u[n])===e[n]&&"\\"!==r[t-1]&&(a.push(r.slice(c,t)),c=(t+=u[n]-1)+1);return c!==r.length-1&&a.push(r.slice(c)),a}},escape=function(){var e=/url\(.*?\)/g,r=/[,:;]/g;return function(t){return t.replace(e,function(e){return e.replace(r,function(e){return"\\"+e})})}}(),unescape=ramda.when(ramda.complement(ramda.isNil),ramda.replace(/([^\\])\\([^\\])/g,"$1$2")),valuable=both(ramda.complement(isEmpty),ramda.complement(ramda.isNil)),join=function(e,r){return e.reduce(function(e,t,n){return e+t+(r[n]||"")},"")},Levels=function(){function e(){this.o={},this.path=[],this.path.push([this.o])}return Object.defineProperty(e.prototype,"out",{get:function(){return this.o},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"depth",{get:function(){return this.path.length},enumerable:!0,configurable:!0}),e.prototype.add=function(e){for(var r=ramda.last(this.path),t=[],n=0,u=e;n<u.length;n++)for(var a=u[n],c=0,o=r;c<o.length;c++){var i=o[c];i[a]||(i[a]={}),t.push(i[a])}this.path.push(t)},e.prototype.merge=function(e,r){if(valuable(r)&&valuable(e))for(var t=0,n=ramda.last(this.path);t<n.length;t++){n[t][e]=r}},e.prototype.pop=function(){return this.path.pop()},e}(),analyseLine=function(){var e=/^([\w-]+)(: *| +)(.*)$/,r=/^(([\|~\$@>\*\.:&\(\)\^="\-\[\]]+).*[ ,]*)+:?$/,t=/\s*,\s*/g,n=/(.*):$/;return function(u,a,c){var o;switch(!0){case"{"==a:u.add(c);break;case"}"==a:u.pop();break;case null!=(o=e.exec(a)):u.merge(unescape(camelify(o[1])),ramda.when(isNaN,unescape,function(e){switch(e){case"undefined":case"":return;case"null":return null;default:return isNaN(+e)?e:+e}}(o[3])));break;case null!=(o=r.exec(a)):c.splice(0),c.push.apply(c,a.split(t).map(function(e){return"."==(e=e.replace(n,"$1"))[0]&&(e=u.depth>1?"& "+e:e.slice(1)),e}))}}}(),parse=function(){var e=["\n","\r",";"],r=function(r){return e.includes(r)},t=/((^\s*?\/\/.*$)|\/\*(.|[\n\r])*?\*\/)/gm;return function(n){var u=new Levels,a=[];return ramda.compose(function(){return u.out},ramda.forEach(function(e){if((e=e.trim())&&analyseLine(u,e,a),u.depth<1)throw new Error("lit-css parse error: unbalanced {} braces !")}),splitNonEscaped(e),ramda.replace(/(\{|\})/g,function(e,t,n,u){return r(u[n-1])||(t=";"+t),r(u[n+1])||(t+=";"),t}),escape,ramda.replace(t,""))(n)}}(),css=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return parse(join(e,r))},isObject=function(e){return"object"==typeof e},emptyObject=Object.freeze({}),isBrowser=function(){try{return isObject(window)}catch(e){return!1}}(),defaultOpts={method:"f",defStyles:void 0,plugins:[],enhancers:[],preset:{unit:[]},ssr:!1},types=Object.freeze({f:"function",o:"object",s:"string"}),getRules=function(){var e=function(e,r){return e[r]||e[camelify(r)]};return function(r,t,n){switch(t||(t=emptyObject),typeof n){case types.f:return[n];case types.o:return[ramda.always(n)];case types.s:return function(r,t,n){return n.split(/[,\s\t]+/g).map(function(n){return e(t,n)||e(r(),n)||emptyObject})}(r,t,n).reduce(function(e,n){return e.push.apply(e,getRules(r,t,n)),e},[]);default:return[ramda.identity]}}}(),Renderer=function(){function e(e){var r,t,n,u;void 0===e&&(e={});var a=__assign({},defaultOpts,e),c=a.method,o=a.ssr,i=a.preset,s=a.plugins,l=a.enhancers,f=__rest(a,["method","ssr","preset","plugins","enhancers"]),p=__assign({},defaultOpts.preset,i||{});if(e.fdef)throw new Error("fela-vue: Change deprecated `fdef` to `defStyles`!");this.renderer=fela.createRenderer(__assign({},f,{enhancers:l,plugins:[embedded(),prefixer(),fallback(),unit.apply(void 0,p.unit)].concat(s)}));var y,d,h=this.renderer,m=e.defStyles;switch(typeof m){case types.o:y=(r=[m.key,m.value])[0],d=r[1];break;case types.f:y=(t=["fdef",m])[0],d=t[1]}isBrowser&&(o?felaDom.rehydrate(h):felaDom.render(h)),this._mixin={methods:(n={},n[c]=function(e,r){var t=this;return void 0===r&&(r={}),h.renderRule(fela.combineRules.apply(void 0,getRules(memoize(function(){return d?d(t):emptyObject}),this.style,e)),r)||void 0},n),computed:m?(u={},u[y]=function(){return d(this)},u):{}}}return Object.defineProperty(e.prototype,"mixin",{get:function(){return Object.freeze(this._mixin)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"style",{get:function(){return felaDom.renderToMarkup(this.renderer)},enumerable:!0,configurable:!0}),e}();exports.Renderer=Renderer,exports.css=css;
