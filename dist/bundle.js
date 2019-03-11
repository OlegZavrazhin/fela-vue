"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var fela=require("fela"),felaDom=require("fela-dom"),embedded=_interopDefault(require("fela-plugin-embedded")),prefixer=_interopDefault(require("fela-plugin-prefixer")),fallback=_interopDefault(require("fela-plugin-fallback-value")),unit=_interopDefault(require("fela-plugin-unit"));const isObject=e=>"object"==typeof e,isBrowser=(()=>{try{return isObject(window)}catch(e){return!1}})(),defaultOpts={method:"f",defStyles:void 0,plugins:[],preset:{unit:[]},ssr:!1};class Renderer{get mixin(){return Object.freeze(this._mixin)}get style(){return felaDom.renderToMarkup(this.renderer)}constructor(e={}){const{method:t,ssr:r,preset:n,plugins:i}=Object.assign({},defaultOpts,e),s=Object.assign({},defaultOpts.preset,n||{});if(e.fdef)throw new Error("fela-vue: Change deprecated `fdef` to `defStyles`!");this.renderer=fela.createRenderer({plugins:[embedded(),prefixer(),fallback(),unit(...s.unit),...i]});const{renderer:f}=this,u=e.defStyles;let l,o;u&&([l,o]={object:[u.key,u.value],function:["fdef",u]}[typeof u]),isBrowser&&(r?felaDom.rehydrate(f):felaDom.render(f)),this._mixin={methods:{[t](e,t={}){const r={function:e,object:()=>e,string:(()=>{const t=this.style&&this.style[e];return{function:t,object:()=>t}[typeof t]||(e=>e)})()}[typeof e];return f.renderRule(r,t)}},computed:u?{[l](){return o(this)}}:{}}}}exports.Renderer=Renderer;
