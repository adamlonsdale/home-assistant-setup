/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class o{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=s.get(this.cssText);return e&&void 0===t&&(s.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window.trustedTypes,c=l?l.emptyScript:"",d=window.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:u};class m extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var s,o;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const r=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:h.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,e){var i,s,o;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),a=t.converter,l=null!==(o=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==o?o:h.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:m}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.3.0");const y=globalThis.trustedTypes,g=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,b="?"+f,$=`<${b}>`,S=document,w=(t="")=>S.createComment(t),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,I=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,E=/'/g,O=/"/g,P=/^(?:script|style|textarea|title)$/i,M=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),T=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),N=new WeakMap,R=S.createTreeWalker(S,129,null,!1),D=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=A;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===A?"!--"===l[1]?r=C:void 0!==l[1]?r=I:void 0!==l[2]?(P.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=k):void 0!==l[3]&&(r=k):r===k?">"===l[0]?(r=null!=o?o:A,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?k:'"'===l[3]?O:E):r===O||r===E?r=k:r===C||r===I?r=A:(r=k,o=void 0);const h=r===k&&t[e+1].startsWith("/>")?" ":"";n+=r===A?i+$:c>=0?(s.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+f+h):i+f+(-2===c?(s.push(void 0),e):h)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(a):a,s]};class U{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,c]=D(t,e);if(this.el=U.createElement(l,i),R.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=R.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(f)){const i=c[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(f),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?L:"?"===e[1]?W:"@"===e[1]?J:V})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(P.test(s.tagName)){const t=s.textContent.split(f),e=t.length-1;if(e>0){s.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],w()),R.nextNode(),a.push({type:2,index:++o});s.append(t[e],w())}}}else if(8===s.nodeType)if(s.data===b)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(f,t+1));)a.push({type:7,index:o}),t+=f.length-1}o++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function z(t,e,i=t,s){var o,n,r,a;if(e===T)return e;let l=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const c=_(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,s)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);R.currentNode=o;let n=R.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new G(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new F(n,this,t)),this.v.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=R.nextNode(),r++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{constructor(t,e,i,s){var o;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),_(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return x(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==j&&_(this._$AH)?this._$AA.nextSibling.data=t:this.k(S.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=U.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new B(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new U(t)),e}S(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new G(this.A(w()),this.A(w()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class V{constructor(t,e,i,s,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=z(this,t,e,0),n=!_(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=z(this,s[i+r],e,r),a===T&&(a=this._$AH[r]),n||(n=!_(a)||a!==this._$AH[r]),a===j?t=j:t!==j&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.C(t)}C(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class L extends V{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===j?void 0:t}}const H=y?y.emptyScript:"";class W extends V{constructor(){super(...arguments),this.type=4}C(t){t&&t!==j?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}}class J extends V{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=z(this,t,e,0))&&void 0!==i?i:j)===T)return;const s=this._$AH,o=t===j&&s!==j||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==j&&(s===j||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const q=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,Y;null==q||q(U,G),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.2.0");class Z extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new G(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}Z.finalized=!0,Z._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:Z});const Q=globalThis.litElementPolyfillSupport;null==Q||Q({LitElement:Z}),(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function tt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):X(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function et(t){return tt({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var it,st;null===(it=window.HTMLSlotElement)||void 0===it||it.prototype.assignedElements,function(t){t.MEDIA_BROWSER="media browser",t.GROUPS="groups",t.PLAYER="player",t.GROUPING="grouping"}(st||(st={}));const ot=1,nt=2,rt=t=>(...e)=>({_$litDirective$:t,values:e});class at{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=rt(class extends at{constructor(t){var e;if(super(t),t.type!==ot||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ct){this.ct=new Set;for(const t in e)this.ct.add(t);return this.render(e)}this.ct.forEach((t=>{null==e[t]&&(this.ct.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.ct.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return T}});function ct(t,e,i){const s=t.states[i].attributes.friendly_name||"";if(e.entityNameRegex){const t=e.entityNameRegex.split("/").filter((t=>t));if(2===t.length){const[e,i]=t;return s.replace(new RegExp(e,"g"),i)}}else if(e.entityNameRegexToReplace)return s.replace(new RegExp(e.entityNameRegexToReplace,"g"),e.entityNameReplacement||"");return s}function dt(t){return t.attributes.sonos_group||t.attributes.group_members}function ht(t,e){return t.entities?[...new Set(t.entities)].filter((t=>e.states[t])):Object.values(e.states).filter(dt).map((t=>t.entity_id)).sort()}function ut(t,e,i){const s=t.filter((i=>function(t,e,i){const s=t.states[e];try{const t=dt(s).filter((t=>i.indexOf(t)>-1)),o=(null==t?void 0:t.length)>1,n=o&&t&&t[0]===e;return!o||n}catch(t){return console.error("Failed to determine group master",JSON.stringify(s),t),!1}}(e,i,t))),o=s.map((s=>function(t,e,i,s){const o=t.states[e];try{const n=dt(o).filter((t=>t!==e&&i.indexOf(t)>-1));return{entity:e,state:o.state,roomName:ct(t,s,e),members:pt(n,t,s)}}catch(t){return console.error("Failed to create group",JSON.stringify(o),t),{}}}(e,s,t,i)));return Object.fromEntries(o.map((t=>[t.entity,t])))}function pt(t,e,i){return Object.fromEntries(t.map((t=>[t,ct(e,i,t)])))}function mt(t,e,i,s){return vt(t)?(null==s?void 0:s.mobileWidth)||i:(null==s?void 0:s.width)||e}function vt(t){var e;return innerWidth<((null===(e=t.layout)||void 0===e?void 0:e.mobileThresholdPx)||650)}function yt(t,e,i){var s;return lt(Object.assign(Object.assign({"--sonos-card-style-name":t},i),null===(s=null==e?void 0:e.styles)||void 0===s?void 0:s[t]))}function gt(t,e){return yt("button-section",t,Object.assign({background:"var(--sonos-int-button-section-background-color)",borderRadius:"var(--sonos-int-border-radius)",border:"var(--sonos-int-border-width) solid var(--sonos-int-color)",marginTop:"1rem",padding:"0 0.5rem"},e))}const ft=M` <div>
  No Sonos player selected. Do one of the following:
  <ul>
    <li>Add the Sonos Groups card to this dashboard</li>
    <li>Configure <i>entityId</i> for the card</li>
    <li>Replace this one with the Sonos card containing all sections.</li>
  </ul>
</div>`;function bt(t){window.addEventListener("sonos-card-active-player",t);const e=new CustomEvent("sonos-card-request-player",{bubbles:!0,composed:!0});window.dispatchEvent(e)}function $t(t){window.removeEventListener("sonos-card-active-player",t)}function St(t){var e,i;const s=(t,e)=>console.error("Sonos Card: "+t+" configuration is deprecated. Please use "+e+" instead.");t.layout&&!(null===(e=t.layout)||void 0===e?void 0:e.mediaBrowser)&&t.layout.favorites&&(s("layout.favorites","layout.mediaBrowser"),t.layout.mediaBrowser=t.layout.favorites),t.layout&&!(null===(i=t.layout)||void 0===i?void 0:i.mediaItem)&&t.layout.favorite&&(s("layout.favorite","layout.mediaItem"),t.layout.mediaItem=t.layout.favorite),t.singleSectionMode&&s("singleSectionMode","individual cards"),t.selectedPlayer&&(s("selectedPlayer","entityId"),t.entityId=t.selectedPlayer)}const wt=n`
  :host {
    --sonos-int-background-color: var(
      --sonos-background-color,
      var(--ha-card-background, var(--card-background-color, white))
    );
    --sonos-int-ha-card-background-color: var(
      --sonos-ha-card-background-color,
      var(--ha-card-background, var(--card-background-color, white))
    );
    --sonos-int-player-section-background: var(--sonos-player-section-background, #ffffffe6);
    --sonos-int-color: var(--sonos-color, var(--secondary-text-color));
    --sonos-int-artist-album-text-color: var(--sonos-artist-album-text-color, var(--secondary-text-color));
    --sonos-int-song-text-color: var(--sonos-song-text-color, var(--sonos-accent-color, var(--accent-color)));
    --sonos-int-accent-color: var(--sonos-accent-color, var(--accent-color));
    --sonos-int-title-color: var(--sonos-title-color, var(--secondary-text-color));
    --sonos-int-border-radius: var(--sonos-border-radius, 0.25rem);
    --sonos-int-border-width: var(--sonos-border-width, 0.125rem);
    --sonos-int-media-button-white-space: var(
      --sonos-media-buttons-multiline,
      var(--sonos-favorites-multiline, nowrap)
    );
    --sonos-int-button-section-background-color: var(
      --sonos-button-section-background-color,
      var(--card-background-color)
    );
    --mdc-icon-size: 1rem;
  }
`;function _t(t,e){return e.showAllSections?t:M` <ha-card style="${xt(e)}"> ${t}</ha-card>`}function xt(t){return yt("ha-card",t,{color:"var(--sonos-int-color)",background:"var(--sonos-int-ha-card-background-color)"})}function At(t){return"playing"===t}function Ct(t){const e=t.attributes;return`${e.media_artist||""} - ${e.media_title||""}`.replace(/^ - /g,"")}class It extends Z{disconnectedCallback(){this.tracker&&(clearInterval(this.tracker),this.tracker=void 0),super.disconnectedCallback()}render(){var t;this.entity=this.hass.states[this.entityId];const e=(null===(t=this.entity)||void 0===t?void 0:t.attributes.media_duration)||0;return e>0?(this.trackProgress(),M`
        <div style="${this.progressStyle()}">
          <span style="${this.timeStyle()}">${kt(this.playingProgress)}</span>
          <div style="${this.barStyle()}">
            <paper-progress
              value="${this.playingProgress}"
              max="${e}"
              style="${this.paperProgressStyle()}"
            ></paper-progress>
          </div>
          <span style="${this.timeStyle()}"> -${kt(e-this.playingProgress)}</span>
        </div>
      `):M``}progressStyle(){return yt("progress",this.config,{width:"100%",fontSize:"x-small",display:"flex","--paper-progress-active-color":"lightgray"})}timeStyle(){return yt("progress-time",this.config)}barStyle(){return yt("progress-bar",this.config,{display:"flex","flex-grow":"1","align-items":"center",padding:"5px"})}trackProgress(){var t,e,i;const s=(null===(t=this.entity)||void 0===t?void 0:t.attributes.media_position)||0,o=At(null===(e=this.entity)||void 0===e?void 0:e.state),n=(null===(i=this.entity)||void 0===i?void 0:i.attributes.media_position_updated_at)||0;this.playingProgress=o?s+(Date.now()-new Date(n).getTime())/1e3:s,this.tracker||(this.tracker=setInterval((()=>this.trackProgress()),1e3)),o||(clearInterval(this.tracker),this.tracker=void 0)}paperProgressStyle(){return yt("progress-bar-paper",this.config,{flexGrow:"1","--paper-progress-active-color":"var(--sonos-int-accent-color)"})}}t([tt({attribute:!1})],It.prototype,"hass",void 0),t([tt()],It.prototype,"config",void 0),t([tt()],It.prototype,"entityId",void 0),t([et()],It.prototype,"playingProgress",void 0);const kt=t=>{const e=new Date(1e3*t).toISOString().substring(11,19);return e.startsWith("00:")?e.substring(3):e};customElements.define("sonos-progress",It);class Et extends Z{render(){const t=this.entity.attributes;return t.media_title?M`
          <div style="${this.infoStyle()}">
            <div style="${this.entityStyle()}">${t.friendly_name}</div>
            <div style="${this.songStyle()}">${Ct(this.entity)}</div>
            <div style="${this.artistAlbumStyle()}">${t.media_album_name}</div>
            <sonos-progress
              .hass=${this.hass}
              .entityId=${this.entity.entity_id}
              .config=${this.config}
            ></sonos-progress>
          </div>
        `:M` <div style="${this.noMediaTextStyle()}">
          <div style="${this.artistAlbumStyle()}">${t.friendly_name}</div>
          <div>${this.config.noMediaText?this.config.noMediaText:"🎺 What do you want to play? 🥁"}</div>
        </div>`}infoStyle(){return yt("player-info",this.config,{margin:"0.25rem",padding:"0.5rem",textAlign:"center",background:"var(--sonos-int-player-section-background)",borderRadius:"var(--sonos-int-border-radius)"})}entityStyle(){return yt("player-entity",this.config,{overflow:"hidden",textOverflow:"ellipsis",fontSize:"0.75rem",fontWeight:"500",color:"var(--sonos-int-artist-album-text-color)",whiteSpace:"wrap"})}artistAlbumStyle(){return yt("player-artist-album",this.config,{overflow:"hidden",textOverflow:"ellipsis",fontSize:"0.75rem",fontWeight:"300",color:"var(--sonos-int-artist-album-text-color)",whiteSpace:"wrap"})}songStyle(){return yt("player-song",this.config,{overflow:"hidden",textOverflow:"ellipsis",fontSize:"1.15rem",fontWeight:"400",color:"var(--sonos-int-song-text-color)",whiteSpace:"wrap"})}noMediaTextStyle(){return yt("no-media-text",this.config,{flexGrow:"1",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"0.25rem",padding:"0.5rem"})}static get styles(){return wt}}t([tt({attribute:!1})],Et.prototype,"hass",void 0),t([tt()],Et.prototype,"config",void 0),t([tt()],Et.prototype,"entity",void 0),customElements.define("sonos-player-header",Et);class Ot{constructor(t,e){this.hassService=e,this.hass=t}async join(t,e){await this.hassService.callMediaService("join",{entity_id:t,group_members:e})}async unjoin(t){await this.hassService.callMediaService("unjoin",{entity_id:t})}async createGroup(t,e){let i;for(const s of Object.values(e))if(t.indexOf(s.entity)>-1){if(At(s.state))return void await this.modifyExistingGroup(s,t);i=i||s}i?await this.modifyExistingGroup(i,t):await this.join(t[0],t)}async modifyExistingGroup(t,e){const i=Object.keys(t.members).filter((t=>-1===e.indexOf(t)));(null==i?void 0:i.length)&&await this.unjoin(i),await this.join(t.entity,e)}async pause(t){await this.hassService.callMediaService("media_pause",{entity_id:t})}async prev(t){await this.hassService.callMediaService("media_previous_track",{entity_id:t})}async next(t){await this.hassService.callMediaService("media_next_track",{entity_id:t})}async play(t){await this.hassService.callMediaService("media_play",{entity_id:t})}async shuffle(t,e){await this.hassService.callMediaService("shuffle_set",{entity_id:t,shuffle:e})}async repeat(t,e){const i="all"===e?"one":"one"===e?"off":"all";await this.hassService.callMediaService("repeat_set",{entity_id:t,repeat:i})}async volumeDown(t,e){await this.hassService.callMediaService("volume_down",{entity_id:t});for(const t in e)await this.hassService.callMediaService("volume_down",{entity_id:t})}async volumeUp(t,e){await this.hassService.callMediaService("volume_up",{entity_id:t});for(const t in e)await this.hassService.callMediaService("volume_up",{entity_id:t})}async volumeSet(t,e,i){const s=e/100;await this.hassService.callMediaService("volume_set",{entity_id:t,volume_level:s});for(const t in i)await this.hassService.callMediaService("volume_set",{entity_id:t,volume_level:s})}async volumeMute(t,e,i){await this.hassService.callMediaService("volume_mute",{entity_id:t,is_volume_muted:e});for(const t in i)await this.hassService.callMediaService("volume_mute",{entity_id:t,is_volume_muted:e})}async setSource(t,e){await this.hassService.callMediaService("select_source",{source:e,entity_id:t})}async playMedia(t,e){await this.hassService.callMediaService("play_media",{entity_id:t,media_content_id:e.media_content_id,media_content_type:e.media_content_type})}}class Pt{constructor(t){this.hass=t}async callMediaService(t,e){await this.hass.callService("media_player",t,e)}async browseMedia(t,e,i){return await this.hass.callWS({type:"media_player/browse_media",entity_id:t,media_content_id:i,media_content_type:e})}async getRelatedSwitchEntities(t){const e=await this.hass.callApi("POST","template",{template:"{{ device_entities(device_id('"+t+"')) }}"});return JSON.parse(e.replace(/'/g,'"')).filter((t=>t.indexOf("switch")>-1))}async toggle(t){await this.hass.callService("homeassistant","toggle",{entity_id:t})}}class Mt extends Z{render(){const t=new Pt(this.hass);this.mediaControlService=new Ot(this.hass,t);const e=100*this.hass.states[this.entityId].attributes.volume_level;let i=100,s="rgb(211, 3, 32)";e<20&&(this.config.disableDynamicVolumeSlider||(i=30),s="rgb(72,187,14)");const o=this.members&&Object.keys(this.members).length?!Object.keys(this.members).some((t=>!this.hass.states[t].attributes.is_volume_muted)):this.hass.states[this.entityId].attributes.is_volume_muted;return M`
      <div style="${this.volumeStyle()}">
        <ha-icon
          style="${this.muteStyle()}"
          @click="${async()=>await this.mediaControlService.volumeMute(this.entityId,!o,this.members)}"
          .icon=${o?"mdi:volume-mute":"mdi:volume-high"}
        ></ha-icon>
        <div style="${this.volumeSliderStyle()}">
          <div style="${this.volumeLevelStyle()}">
            <div style="flex: ${e}">0%</div>
            ${e>0&&e<95?M` <div style="flex: 2; font-weight: bold; font-size: 12px;">${Math.round(e)}%</div>`:""}
            <div style="flex: ${i-e};text-align: right">${i}%</div>
          </div>
          <ha-slider
            value="${e}"
            @change="${this.onChange}"
            @click="${t=>this.onClick(t,e)}"
            min="0"
            max="${i}"
            step=${this.config.volume_step||1}
            dir=${"ltr"}
            pin
            style="${this.volumeRangeStyle(s)}"
          >
          </ha-slider>
        </div>
      </div>
    `}async onChange(t){const e=Tt(t);return await this.setVolume(e)}async setVolume(t){return await this.mediaControlService.volumeSet(this.entityId,t,this.members)}async onClick(t,e){const i=Tt(t);i===e?this.dispatchEvent(new CustomEvent("volumeClicked")):await this.setVolume(i),t.stopPropagation()}volumeRangeStyle(t){return yt("player-volume-range",this.config,{width:"105%",marginLeft:"-3%","--paper-progress-active-color":t,"--paper-slider-knob-color":t,"--paper-slider-height":"0.3rem"})}volumeStyle(){return yt("player-volume",this.config,{display:"flex",flex:"1"})}volumeSliderStyle(){return yt("player-volume-slider",this.config,{flex:"1"})}volumeLevelStyle(){return yt("player-volume-level",this.config,{fontSize:"x-small",display:"flex"})}muteStyle(){return yt("player-mute",this.config,{"--mdc-icon-size":"1.25rem",alignSelf:"center",marginRight:"0.7rem"})}}function Tt(t){var e;return Number.parseInt(null===(e=null==t?void 0:t.target)||void 0===e?void 0:e.value)}t([tt({attribute:!1})],Mt.prototype,"hass",void 0),t([tt()],Mt.prototype,"config",void 0),t([tt()],Mt.prototype,"entityId",void 0),t([tt()],Mt.prototype,"members",void 0),t([tt()],Mt.prototype,"volumeClicked",void 0),customElements.define("sonos-volume",Mt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const jt=(t,e)=>{var i,s;const o=t._$AN;if(void 0===o)return!1;for(const t of o)null===(s=(i=t)._$AO)||void 0===s||s.call(i,e,!1),jt(t,e);return!0},Nt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},Rt=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),zt(e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dt(t){void 0!==this._$AN?(Nt(this),this._$AM=t,Rt(this)):this._$AM=t}function Ut(t,e=!1,i=0){const s=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)jt(s[t],!1),Nt(s[t]);else null!=s&&(jt(s,!1),Nt(s));else jt(this,t)}const zt=t=>{var e,i,s,o;t.type==nt&&(null!==(e=(s=t)._$AP)&&void 0!==e||(s._$AP=Ut),null!==(i=(o=t)._$AQ)&&void 0!==i||(o._$AQ=Dt))};class Bt extends at{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Rt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(jt(this,t),Nt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Gt{constructor(t){this.U=t}disconnect(){this.U=void 0}reconnect(t){this.U=t}deref(){return this.U}}class Vt{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.q=t)))}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Y=this.q=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then;const Ht=rt(class extends Bt{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new Gt(this),this._$CK=new Vt}render(...t){var e;return null!==(e=t.find((t=>!Lt(t))))&&void 0!==e?e:T}update(t,e){const i=this._$Cyt;let s=i.length;this._$Cyt=e;const o=this._$CG,n=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const r=e[t];if(!Lt(r))return this._$Cwt=t,r;t<s&&r===i[t]||(this._$Cwt=1073741823,s=0,Promise.resolve(r).then((async t=>{for(;n.get();)await n.get();const e=o.deref();if(void 0!==e){const i=e._$Cyt.indexOf(r);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}})))}return T}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}});class Wt extends Z{constructor(){super(...arguments),this.volDown=async()=>await this.mediaControlService.volumeDown(this.entityId,this.members),this.prev=async()=>await this.mediaControlService.prev(this.entityId),this.play=async()=>await this.mediaControlService.play(this.entityId),this.pause=async()=>await this.mediaControlService.pause(this.entityId),this.next=async()=>await this.mediaControlService.next(this.entityId),this.shuffle=async()=>{var t;return await this.mediaControlService.shuffle(this.entityId,!(null===(t=this.entity)||void 0===t?void 0:t.attributes.shuffle))},this.repeat=async()=>{var t;return await this.mediaControlService.repeat(this.entityId,null===(t=this.entity)||void 0===t?void 0:t.attributes.repeat)},this.volUp=async()=>await this.mediaControlService.volumeUp(this.entityId,this.members),this.volumeClicked=()=>{this.isGroup&&this.toggleShowAllVolumes()},this.toggleShowAllVolumes=()=>{this.showVolumes=!this.showVolumes,clearTimeout(this.timerToggleShowAllVolumes),this.showVolumes&&(this.scrollToBottom(),this.timerToggleShowAllVolumes=window.setTimeout((()=>{this.showVolumes=!1,this.dispatchVolumesToggled(),window.scrollTo(0,0)}),3e4)),this.dispatchVolumesToggled()}}render(){this.entityId=this.entity.entity_id,this.hassService=new Pt(this.hass),this.mediaControlService=new Ot(this.hass,this.hassService);const t=ut(ht(this.config,this.hass),this.hass,this.config);this.members=t[this.entityId].members,this.isGroup=dt(this.entity).length>1;let e=[];this.isGroup&&(e=dt(this.entity).map((t=>this.groupMemberVolume(t))));const i=!At(this.entity.state);return M`
      <div style="${this.mainStyle()}" id="mediaControls">
        <div ?hidden="${!this.showVolumes}">${e}</div>
        <div style="${this.iconsStyle()}">
          ${this.controlIcon("mdi:volume-minus",this.volDown)} ${this.controlIcon("mdi:skip-backward",this.prev)}
          ${i?this.controlIcon("mdi:play",this.play):this.controlIcon("mdi:stop",this.pause)}
          ${this.controlIcon("mdi:skip-forward",this.next)} ${this.controlIcon(this.shuffleIcon(),this.shuffle)}
          ${this.controlIcon(this.repeatIcon(),this.repeat)} ${Ht(this.getAdditionalSwitches())}
          ${this.controlIcon("mdi:arrow-expand-vertical",this.toggleShowAllVolumes,!this.isGroup)}
          ${this.controlIcon("mdi:volume-plus",this.volUp)}
        </div>
        ${this.mainVolume()}
      </div>
    `}shuffleIcon(){var t;return(null===(t=this.entity)||void 0===t?void 0:t.attributes.shuffle)?"mdi:shuffle-variant":"mdi:shuffle-disabled"}repeatIcon(){var t;const e=null===(t=this.entity)||void 0===t?void 0:t.attributes.repeat;return"all"===e?"mdi:repeat":"one"===e?"mdi:repeat-once":"mdi:repeat-off"}controlIcon(t,e,i=!1,s){return this.clickableIcon(t,e,i,this.iconStyle(s))}clickableIcon(t,e,i=!1,s){return M` <ha-icon @click="${e}" style="${s}" .icon=${t} ?hidden="${i}"></ha-icon> `}getAdditionalSwitches(){return this.config.skipAdditionalPlayerSwitches?"":this.hassService.getRelatedSwitchEntities(this.entityId).then((t=>t.map((t=>this.controlIcon(this.hass.states[t].attributes.icon||"",(()=>this.hassService.toggle(t)),!1,"on"===this.hass.states[t].state?{color:"var(--sonos-int-accent-color)"}:{})))))}mainStyle(){return yt("media-controls",this.config,{background:"var(--sonos-int-player-section-background)",margin:"0.25rem",padding:"0.5rem",borderRadius:"var(--sonos-int-border-radius)",overflow:"hidden auto"})}iconsStyle(){return yt("media-controls-icons",this.config,{justifyContent:"space-between",display:this.showVolumes?"none":"flex"})}iconStyle(t){return yt("media-controls-icon",this.config,Object.assign({padding:"0.3rem","--mdc-icon-size":"min(100%, 1.25rem)"},t))}volumeNameStyle(t){return yt("player-volume-name",this.config,Object.assign({marginTop:"1rem",marginLeft:"0.4rem",flex:"1",overflow:"hidden",flexDirection:"column"},t&&{display:"none"}))}volumeNameTextStyle(){return yt("player-volume-name-text",this.config,{flex:"1",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"})}volumeNameIconStyle(){return yt("player-volume-name-icon",this.config,{flex:"1","--mdc-icon-size":"1.5rem",marginLeft:"-0.3rem"})}static get styles(){return[n`
        ha-icon:focus,
        ha-icon:hover {
          color: var(--sonos-int-accent-color);
        }
      `,wt]}mainVolume(){const t=this.config.allVolumesText?this.config.allVolumesText:"All";return this.volume(this.entityId,t,this.members)}groupMemberVolume(t){const e=ct(this.hass,this.config,t);return this.volume(t,e)}volume(t,e,i){return M` <div style="display: flex">
      <div style="${this.volumeNameStyle(!this.showVolumes)}">
        <div style="${this.volumeNameTextStyle()}">${e}</div>
        ${this.clickableIcon("mdi:arrow-left",(()=>this.toggleShowAllVolumes()),!i,this.volumeNameIconStyle())}
      </div>
      <sonos-volume
        .hass=${this.hass}
        .entityId=${t}
        .config=${this.config}
        .members=${i}
        style="${this.volumeStyle(this.showVolumes,!i)}"
        @volumeClicked=${this.volumeClicked}
      ></sonos-volume>
    </div>`}dispatchVolumesToggled(){this.dispatchEvent(new CustomEvent("volumesToggled",{detail:this.showVolumes}))}scrollToBottom(){setTimeout((()=>{var t;const e=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector("#mediaControls");e&&(e.scrollTop=e.scrollHeight)}))}volumeStyle(t,e){return yt("player-volume",this.config,Object.assign({flex:t?"4":"1"},e&&{borderBottom:"dotted var(--sonos-int-color)",marginTop:"0.4rem"}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Jt(t,e,i){return t?e():null==i?void 0:i()}t([tt()],Wt.prototype,"hass",void 0),t([tt()],Wt.prototype,"config",void 0),t([tt()],Wt.prototype,"entity",void 0),t([tt()],Wt.prototype,"showVolumes",void 0),t([tt()],Wt.prototype,"volumesToggled",void 0),t([et()],Wt.prototype,"timerToggleShowAllVolumes",void 0),customElements.define("sonos-media-controls",Wt);class Ft extends Z{constructor(){super(...arguments),this.entityIdListener=t=>{const e=t.detail.entityId;e!==this.entityId&&(this.entityId=e,this.showVolumes=!1)}}connectedCallback(){super.connectedCallback(),bt(this.entityIdListener)}disconnectedCallback(){$t(this.entityIdListener),super.disconnectedCallback()}setConfig(t){const e=JSON.parse(JSON.stringify(t));St(e),this.config=e}render(){if(!this.entityId&&this.config.entityId&&(this.entityId=this.config.entityId),this.entityId&&this.hass){this.entity=this.hass.states[this.entityId];const t=M`
        <div style="${this.containerStyle(this.entity)}">
          <div style="${this.bodyStyle()}">
            ${Jt(!this.showVolumes,(()=>M`<sonos-player-header
                .hass=${this.hass}
                .entity=${this.entity}
                .config=${this.config}
              ></sonos-player-header>`))}
            <sonos-media-controls
              .hass=${this.hass}
              .entity=${this.entity}
              .config=${this.config}
              .showVolumes=${this.showVolumes}
              @volumesToggled=${t=>this.showVolumes=t.detail}
            ></sonos-media-controls>
          </div>
        </div>
      `;return _t(t,this.config)}return ft}containerStyle(t){const e=t.attributes.entity_picture,i=t.attributes.media_title,s=t.attributes.media_content_id;let o={backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:e?`url(${e})`:""};const n=this.config.mediaArtworkOverrides;if(n){let t=n.find((t=>i===t.mediaTitleEquals||s===t.mediaContentIdEquals));t||(t=n.find((t=>!e&&t.ifMissing))),t&&(o=Object.assign(Object.assign({},o),{backgroundImage:t.imageUrl?`url(${t.imageUrl})`:o.backgroundImage,backgroundSize:t.sizePercentage?`${t.sizePercentage}%`:o.backgroundSize}))}return yt("player-container",this.config,Object.assign({marginTop:"1rem",position:"relative",background:"var(--sonos-int-background-color)",borderRadius:"var(--sonos-int-border-radius)",paddingBottom:"100%",border:"var(--sonos-int-border-width) solid var(--sonos-int-color)"},o))}bodyStyle(){return yt("player-body",this.config,{position:"absolute",inset:"0px",display:"flex",flexDirection:"column",justifyContent:this.showVolumes?"flex-end":"space-between"})}static get styles(){return[n`
        .hoverable:focus,
        .hoverable:hover {
          color: var(--sonos-int-accent-color);
        }
      `,wt]}}t([tt({attribute:!1})],Ft.prototype,"hass",void 0),t([tt()],Ft.prototype,"config",void 0),t([et()],Ft.prototype,"entityId",void 0),t([et()],Ft.prototype,"showVolumes",void 0);const qt={margin:"0.5rem 0",textAlign:"center",fontWeight:"bold",fontSize:"larger",color:"var(--sonos-int-title-color)"};class Kt extends Z{render(){return this.config.singleSectionMode?this.renderDeprecatedSingleSectionMode():M`
      <ha-card style="${xt(this.config)}">
        <div style="${this.titleStyle()}">${this.config.name}</div>
        <div style="${this.contentStyle()}">
          <div style=${this.groupsStyle()}>
            <sonos-groups .config=${this.config} .hass=${this.hass}></sonos-groups>
          </div>

          <div style=${this.playersStyle()}>
            <sonos-player .config=${this.config} .hass=${this.hass}></sonos-player>
            <sonos-grouping .config=${this.config} .hass=${this.hass}></sonos-grouping>
          </div>

          <div style=${this.mediaBrowserStyle()}>
            <sonos-media-browser .config=${this.config} .hass=${this.hass}></sonos-media-browser>
          </div>
        </div>
      </ha-card>
    `}renderDeprecatedSingleSectionMode(){switch(this.config.singleSectionMode){case st.GROUPING:return M` <sonos-grouping .config=${this.config} .hass=${this.hass}></sonos-grouping> `;case st.GROUPS:return M` <sonos-groups .config=${this.config} .hass=${this.hass}></sonos-groups> `;case st.MEDIA_BROWSER:return M` <sonos-media-browser .config=${this.config} .hass=${this.hass}></sonos-media-browser> `;case st.PLAYER:default:return M` <sonos-player .config=${this.config} .hass=${this.hass}></sonos-player> `}}setConfig(t){const e=JSON.parse(JSON.stringify(t));e.showAllSections=!e.singleSectionMode,St(e),this.config=e}titleStyle(){return yt("title",this.config,Object.assign({display:this.config.name?"block":"none"},qt))}groupsStyle(){var t;return this.columnStyle(null===(t=this.config.layout)||void 0===t?void 0:t.groups,"1","25%","groups",{padding:"0 1rem",boxSizing:"border-box"})}playersStyle(){var t;return this.columnStyle(null===(t=this.config.layout)||void 0===t?void 0:t.players,"0","40%","players")}mediaBrowserStyle(){var t;return this.columnStyle(null===(t=this.config.layout)||void 0===t?void 0:t.mediaBrowser,"2","25%","media-browser",{padding:"0 1rem",boxSizing:"border-box"})}columnStyle(t,e,i,s,o){const n=mt(this.config,i,"100%",t);let r=Object.assign({width:n,maxWidth:n},o);return vt(this.config)&&(r=Object.assign(Object.assign({},r),{order:e,padding:"0.5rem",margin:"0",boxSizing:"border-box"})),yt(s,this.config,r)}contentStyle(){return yt("content",this.config,{display:"flex",flexWrap:"wrap",justifyContent:"center"})}static get styles(){return wt}}t([tt({attribute:!1})],Kt.prototype,"hass",void 0),t([tt()],Kt.prototype,"config",void 0);class Yt extends Z{constructor(){super(...arguments),this.entityIdListener=t=>{this.entityId=t.detail.entityId}}connectedCallback(){super.connectedCallback(),bt(this.entityIdListener)}disconnectedCallback(){$t(this.entityIdListener),super.disconnectedCallback()}setConfig(t){const e=JSON.parse(JSON.stringify(t));St(e),this.config=e}render(){if(!this.entityId&&this.config.entityId&&(this.entityId=this.config.entityId),this.entityId&&this.hass){this.hassService=new Pt(this.hass),this.mediaControlService=new Ot(this.hass,this.hassService),this.mediaPlayers=ht(this.config,this.hass),this.groups=ut(this.mediaPlayers,this.hass,this.config);const t=this.mediaPlayers.filter((t=>t!==this.entityId&&this.groups[this.entityId].members[t])),e=this.mediaPlayers.filter((t=>t!==this.entityId&&!this.groups[this.entityId].members[t]));return _t(M`
        <div style="${gt(this.config)}">
          <div style="${yt("title",this.config,qt)}">
            ${this.config.groupingTitle?this.config.groupingTitle:"Grouping"}
          </div>
          <div style="${this.membersStyle()}">
            ${this.entityId&&this.mediaPlayers.map((e=>this.renderMediaPlayerGroupButton(e,t)))}
            ${Jt(e.length,(()=>this.getButton((async()=>await this.mediaControlService.join(this.entityId,e)),"mdi:checkbox-multiple-marked-outline")))}
            ${Jt(t.length,(()=>this.getButton((async()=>await this.mediaControlService.unjoin(t)),"mdi:minus-box-multiple-outline")))}
            ${Jt(this.config.predefinedGroups&&this.config.predefinedGroupsNoSeparateSection,(()=>this.renderPredefinedGroups()))}
          </div>
          ${Jt(this.config.predefinedGroups&&!this.config.predefinedGroupsNoSeparateSection,(()=>M`<div style="${yt("title",this.config,qt)}">
                  ${this.config.predefinedGroupsTitle?this.config.predefinedGroupsTitle:"Predefined groups"}
                </div>
                <div style="${this.membersStyle()}">${this.renderPredefinedGroups()}</div>`))}
        </div>
      `,this.config)}return ft}renderMediaPlayerGroupButton(t,e){const i=ct(this.hass,this.config,t);return this.groups[this.entityId].members[t]||t===this.entityId&&e.length>0?this.getButton((async()=>await this.mediaControlService.unjoin([t])),"mdi:minus",i):t!==this.entityId?this.getButton((async()=>await this.mediaControlService.join(this.entityId,[t])),"mdi:plus",i):M``}renderPredefinedGroups(){var t;return M`
      ${null===(t=this.config.predefinedGroups)||void 0===t?void 0:t.filter((t=>t.entities.length>1)).map((t=>this.getButton((async()=>await this.mediaControlService.createGroup(t.entities,this.groups)),this.config.predefinedGroupsNoSeparateSection?"mdi:speaker-multiple":"",t.name,this.config.predefinedGroupsNoSeparateSection?{fontStyle:"italic"}:{})))}
    `}getButton(t,e,i,s){return M`
      <div @click="${t}" style="${this.memberStyle(s)}" class="hoverable">
        ${i?M`<span style="${this.nameStyle()}">${i}</span>`:""}
        <ha-icon .icon=${e} style="${this.iconStyle()}"></ha-icon>
      </div>
    `}membersStyle(){return yt("members",this.config,{padding:"0",margin:"0",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"})}memberStyle(t){return yt("member",this.config,Object.assign({flexGrow:"1",borderRadius:"var(--sonos-int-border-radius)",margin:"0 0.25rem 0.5rem",padding:"0.45rem",display:"flex",justifyContent:"center",border:"var(--sonos-int-border-width) solid var(--sonos-int-color)",backgroundColor:"var(--sonos-int-background-color)",maxWidth:"calc(100% - 1.4rem)"},t))}nameStyle(){return yt("member-name",this.config,{alignSelf:"center",fontSize:"1rem",overflow:"hidden",textOverflow:"ellipsis"})}iconStyle(){return yt("member-icon",this.config,{alignSelf:"center",fontSize:"0.5rem",paddingLeft:"0.1rem"})}static get styles(){return[n`
        .hoverable:hover,
        .hoverable:focus {
          color: var(--sonos-int-accent-color);
          border: var(--sonos-int-border-width) solid var(--sonos-int-accent-color);
        }
      `,wt]}}t([tt({attribute:!1})],Yt.prototype,"hass",void 0),t([tt()],Yt.prototype,"config",void 0),t([tt()],Yt.prototype,"entityId",void 0);class Zt extends Z{constructor(){super(...arguments),this.selected=!1,this.entityIdListener=t=>{var e;this.selected=t.detail.entityId===(null===(e=this.group)||void 0===e?void 0:e.entity)},this.dispatchEntityIdEvent=()=>{if(this.selected){const t=new CustomEvent("sonos-card-active-player",{bubbles:!0,composed:!0,detail:{entityId:this.group.entity}});window.dispatchEvent(t)}}}connectedCallback(){var t;super.connectedCallback(),bt(this.entityIdListener),t=this.dispatchEntityIdEvent,window.addEventListener("sonos-card-request-player",t)}disconnectedCallback(){var t;$t(this.entityIdListener),t=this.dispatchEntityIdEvent,window.removeEventListener("sonos-card-request-player",t),super.disconnectedCallback()}render(){const t=Ct(this.hass.states[this.group.entity]),e=[this.group.roomName,...Object.values(this.group.members)].join(" + ");return this.dispatchEntityIdEvent(),M`
      <div @click="${()=>this.handleGroupClicked()}" style="${this.groupStyle()}">
        <ul style="${this.speakersStyle()}">
          <span style="${this.speakerStyle()}">${e}</span>
        </ul>
        <div style="${this.infoStyle()}">
          ${t?M` <div style="flex: 1"><span style="${this.currentTrackStyle()}">${t}</span></div>
                ${Jt(At(this.group.state),(()=>M`
                    <div style="width: 0.55rem; position: relative;">
                      <div style="${Zt.barStyle(1)}"></div>
                      <div style="${Zt.barStyle(2)}"></div>
                      <div style="${Zt.barStyle(3)}"></div>
                    </div>
                  `))}`:""}
        </div>
      </div>
    `}groupStyle(){const t=Object.assign({borderRadius:"var(--sonos-int-border-radius)",margin:"0.5rem 0",padding:"0.8rem",border:"var(--sonos-int-border-width) solid var(--sonos-int-color)",backgroundColor:"var(--sonos-int-background-color)"},this.selected&&{border:"var(--sonos-int-border-width) solid var(--sonos-int-accent-color)",color:"var(--sonos-int-accent-color)",fontWeight:"bold"});return yt("group",this.config,t)}speakersStyle(){return yt("group-speakers",this.config,{margin:"0",padding:"0"})}speakerStyle(){return yt("group-speaker",this.config,{marginRight:"0.3rem",fontSize:"1rem",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis"})}infoStyle(){return yt("group-info",this.config,{display:"flex",flexDirection:"row",clear:"both"})}currentTrackStyle(){return lt({display:this.config.hideGroupCurrentTrack?"none":"inline",fontSize:"0.8rem"})}static barStyle(t){return lt({background:"var(--sonos-int-color)",bottom:"0.05rem",height:"0.15rem",position:"absolute",width:"0.15rem",animation:"sound 0ms -800ms linear infinite alternate",display:"block",left:1==t?"0.05rem":2==t?"0.25rem":"0.45rem",animationDuration:1==t?"474ms":2==t?"433ms":"407ms"})}handleGroupClicked(){if(!this.selected){this.selected=!0;const t=window.location.href.replace(/#.*/g,"");window.location.replace(`${t}#${this.group.entity}`),this.dispatchEntityIdEvent()}}static get styles(){return n`
      @keyframes sound {
        0% {
          opacity: 0.35;
          height: 0.15rem;
        }
        100% {
          opacity: 1;
          height: 1rem;
        }
      }
    `}}t([tt()],Zt.prototype,"hass",void 0),t([tt()],Zt.prototype,"config",void 0),t([tt()],Zt.prototype,"group",void 0),t([tt()],Zt.prototype,"selected",void 0),customElements.define("sonos-group",Zt);class Qt extends Z{setConfig(t){const e=JSON.parse(JSON.stringify(t));St(e),this.config=e}render(){if(this.hass){const t=ht(this.config,this.hass);this.groups=ut(t,this.hass,this.config),this.determineEntityId(this.groups);return _t(M`
        <div style="${gt(this.config)}">
          <div style="${yt("title",this.config,qt)}">
            ${this.config.groupsTitle?this.config.groupsTitle:"Groups"}
          </div>
          ${Object.values(this.groups).map((t=>M`
                <sonos-group
                  .config=${this.config}
                  .hass=${this.hass}
                  .group=${t}
                  .selected="${this.entityId===t.entity}"
                ></sonos-group>
              `))}
        </div>
      `,this.config)}return ft}determineEntityId(t){if(!this.entityId){const e=this.config.entityId||(window.location.href.indexOf("#")>0?window.location.href.replace(/.*#/g,""):"");for(const i in t)if(i===e)this.entityId=i;else for(const s in t[i].members)s===e&&(this.entityId=i);if(!this.entityId)for(const e in t)At(t[e].state)&&(this.entityId=e);this.entityId||(this.entityId=Object.keys(t)[0])}}static get styles(){return wt}}t([tt({attribute:!1})],Qt.prototype,"hass",void 0),t([tt()],Qt.prototype,"config",void 0);class Xt extends Z{getThumbnail(){var t;let e=this.mediaItem.thumbnail;return e?(null==e?void 0:e.match(/https:\/\/brands.home-assistant.io\/.+\/logo.png/))&&(e=null==e?void 0:e.replace("logo.png","icon.png")):e=(null===(t=this.config.customThumbnailIfMissing)||void 0===t?void 0:t[this.mediaItem.title])||"",e}mediaButtonStyle(){return{boxSizing:"border-box","-moz-box-sizing":"border-box","-webkit-box-sizing":"border-box",overflow:"hidden",border:"var(--sonos-int-border-width) solid var(--sonos-int-color)",display:"flex",borderRadius:"var(--sonos-int-border-radius)",backgroundColor:"var(--sonos-int-background-color)"}}wrapperStyle(){return yt("media-button-wrapper",this.config,{padding:"0 0.1rem 0.3rem 0.1rem"})}static get styles(){return n`
      .hoverable:focus,
      .hoverable:hover {
        border-color: var(--sonos-int-accent-color);
        color: var(--sonos-int-accent-color);
      }
    `}}t([tt()],Xt.prototype,"mediaItem",void 0),t([tt()],Xt.prototype,"config",void 0);customElements.define("sonos-media-list-item",class extends Xt{constructor(){super(...arguments),this.iconStyle={position:"relative",flexShrink:"0",width:"30px",height:"30px"}}render(){const t=this.getThumbnail();return M`
      <div style="${this.wrapperStyle()}" class="hoverable">
        <div style="${this.listItemStyle()}">
          <div style="${this.thumbnailStyle(t)}"></div>
          <ha-icon style="${this.folderStyle(t)}" .icon=${"mdi:folder-music"}></ha-icon>
          <div style="${this.titleStyle(t)}">${this.mediaItem.title}</div>
        </div>
      </div>
    `}listItemStyle(){return yt("media-button",this.config,Object.assign(Object.assign({},this.mediaButtonStyle()),{flexDirection:"row",justifyContent:"left",alignItems:"center",height:"30px"}))}thumbnailStyle(t){return yt("media-button-thumb",this.config,Object.assign(Object.assign(Object.assign({},this.iconStyle),{backgroundSize:"30px",backgroundRepeat:"no-repeat",backgroundPosition:"left",backgroundImage:"url("+t+")"}),!t&&{display:"none"}))}folderStyle(t){return yt("media-button-folder",this.config,Object.assign(Object.assign(Object.assign({},this.iconStyle),{"--mdc-icon-size":"90%"}),(!this.mediaItem.can_expand||t)&&{display:"none"}))}titleStyle(t){return yt("media-button-title",this.config,Object.assign({fontSize:"0.9rem",padding:"0px 0.5rem",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",flex:"1"},(t||this.mediaItem.can_expand)&&{zIndex:"1"}))}});class te extends Xt{render(){const t=this.getThumbnail();return M`
      <div style="${this.wrapperStyle()}">
        <div style="${this.iconItemStyle(t)}" class="hoverable">
          <div style="${this.titleStyle(t)}">${this.mediaItem.title}</div>
          <ha-icon style="${this.folderStyle(t)}" .icon=${"mdi:folder-music"}></ha-icon>
        </div>
      </div>
    `}iconItemStyle(t){return yt("media-button",this.config,Object.assign(Object.assign(Object.assign(Object.assign({},this.mediaButtonStyle()),{flexDirection:"column",borderRadius:"var(--sonos-int-border-radius)",justifyContent:"center",backgroundColor:"var(--sonos-int-background-color)"}),(t||this.mediaItem.can_expand)&&{backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",position:"relative",paddingBottom:"calc(100% - (var(--sonos-int-border-width) * 2))"}),t&&{backgroundImage:"url("+t+")"}))}titleStyle(t){return yt("media-button-title",this.config,Object.assign({width:"calc(100% - 1rem)",fontSize:"1rem",padding:"0px 0.5rem"},(t||this.mediaItem.can_expand)&&{zIndex:"1",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"var(--sonos-int-media-button-white-space)",backgroundColor:"var(--sonos-int-player-section-background)",position:"absolute",top:"0rem",left:"0rem"}))}folderStyle(t){return yt("media-button-folder",this.config,Object.assign({marginBottom:"-120%","--mdc-icon-size":"70%"},(!this.mediaItem.can_expand||t)&&{display:"none"}))}}t([tt()],te.prototype,"mediaItem",void 0),t([tt()],te.prototype,"config",void 0),customElements.define("sonos-media-icon-item",te);class ee extends Z{constructor(){super(...arguments),this.headerChildStyle={flex:"1","--mdc-icon-size":"1.5rem"}}render(){var t;return M`
      <div style="${this.headerStyle()}" class="hoverable">
        <div style="${this.playDirStyle()}" class="hoverable">
          ${(null===(t=this.currentDir)||void 0===t?void 0:t.can_play)?M` <ha-icon
                .icon=${"mdi:play"}
                @click="${async()=>await this.mediaBrowser.playItem(this.currentDir)}"
              ></ha-icon>`:""}
        </div>
        <div style="${this.titleStyle()}">${this.config.mediaTitle?this.config.mediaTitle:"Media"}</div>
        <div style="${this.browseStyle()}" @click="${()=>this.mediaBrowser.browseClicked()}">
          <ha-icon .icon=${this.browse?"mdi:arrow-left-bold":"mdi:play-box-multiple"}></ha-icon>
        </div>
      </div>
    `}headerStyle(){return yt("media-browser-header",this.config,Object.assign({display:"flex",justifyContent:"space-between"},qt))}titleStyle(){return yt("title",this.config,this.headerChildStyle)}playDirStyle(){return yt("media-browser-play-dir",this.config,Object.assign({textAlign:"left",paddingRight:"-0.5rem",marginLeft:"0.5rem"},this.headerChildStyle))}browseStyle(){return yt("media-browse",this.config,Object.assign({textAlign:"right",paddingRight:"0.5rem",marginLeft:"-0.5rem"},this.headerChildStyle))}static get styles(){return n`
      .hoverable:focus,
      .hoverable:hover {
        color: var(--sonos-int-accent-color);
      }
    `}}function ie(t=[],e){return null==e?void 0:e.filter((e=>-1===["media-source://tts","media-source://camera"].indexOf(e.media_content_id||"")&&-1===t.indexOf(e.title)))}t([tt()],ee.prototype,"hass",void 0),t([tt()],ee.prototype,"config",void 0),t([tt()],ee.prototype,"mediaBrowser",void 0),t([tt()],ee.prototype,"browse",void 0),t([tt()],ee.prototype,"currentDir",void 0),customElements.define("sonos-media-browser-header",ee);class se{constructor(t,e){this.hass=t,this.hassService=e}async getRoot(t,e){return ie(e,(await this.hassService.browseMedia(t)).children)||[]}async getDir(t,e,i){try{return ie(i,(await this.hassService.browseMedia(t,e.media_content_type,e.media_content_id)).children)||[]}catch(t){return console.error(t),[]}}async getAllFavorites(t,e){if(!t.length)return[];let i=(await Promise.all(t.map((t=>this.getFavoritesForPlayer(t,e))))).flatMap((t=>t));return i=this.removeDuplicates(i),i.length?i:this.getFavoritesFromStates(t)}removeDuplicates(t){return t.filter(((t,e,i)=>e===i.findIndex((e=>e.title===t.title))))}async getFavoritesForPlayer(t,e){var i;const s=null===(i=(await this.hassService.browseMedia(t,"favorites","")).children)||void 0===i?void 0:i.map((e=>this.hassService.browseMedia(t,e.media_content_type,e.media_content_id)));return(s?await Promise.all(s):[]).flatMap((t=>ie(e,t.children)||[]))}getFavoritesFromStates(t){console.log("Custom Sonos Card: found no favorites with thumbnails, trying with titles only");let e=t.map((t=>this.hass.states[t])).flatMap((t=>t.attributes.source_list));return e=[...new Set(e)],e.length||console.log("Custom Sonos Card: No favorites found"),e.map((t=>({title:t})))}}class oe extends Z{constructor(){super(...arguments),this.mediaItems=[],this.parentDirs=[],this.entityIdListener=t=>{this.entityId=t.detail.entityId}}connectedCallback(){super.connectedCallback(),bt(this.entityIdListener)}disconnectedCallback(){$t(this.entityIdListener),super.disconnectedCallback()}setConfig(t){const e=JSON.parse(JSON.stringify(t));St(e),this.config=e}render(){if(!this.entityId&&this.config.entityId&&(this.entityId=this.config.entityId),this.entityId&&this.hass){this.hassService=new Pt(this.hass),this.mediaBrowseService=new se(this.hass,this.hassService),this.mediaControlService=new Ot(this.hass,this.hassService),this.mediaPlayers=ht(this.config,this.hass);const t=localStorage.getItem("custom-sonos-card_currentDir");t&&(this.currentDir=JSON.parse(t),this.browse=!0);return _t(M`
        <div style="${gt(this.config,{textAlign:"center"})}">
          <sonos-media-browser-header
            .config=${this.config}
            .hass=${this.hass}
            .mediaBrowser=${this}
            .browse=${this.browse}
            .currentDir=${this.currentDir}
          ></sonos-media-browser-header>
          ${""!==this.entityId&&Ht((this.browse?this.loadMediaDir(this.currentDir):this.getAllFavorites()).then((t=>{const e=oe.itemsWithImage(t),i=this.getMediaItemWidth(e);return M` <div style="${this.mediaButtonsStyle(e)}">
                ${t.map((t=>{const e=async()=>await this.onMediaItemClick(t),s=`width: ${i};max-width: ${i};`;return this.config.mediaBrowserItemsAsList?M`
                      <sonos-media-list-item
                        style="${s}"
                        .mediaItem="${t}"
                        .config="${this.config}"
                        @click="${e}"
                      ></sonos-media-list-item>
                    `:M`
                      <sonos-media-icon-item
                        style="${s}"
                        .mediaItem="${t}"
                        .config="${this.config}"
                        @click="${e}"
                      ></sonos-media-icon-item>
                    `}))}
              </div>`})))}
        </div>
      `,this.config)}return ft}getMediaItemWidth(t){var e,i;return t?this.config.mediaBrowserItemsAsList?mt(this.config,"100%","100%",null===(e=this.config.layout)||void 0===e?void 0:e.mediaItem):mt(this.config,"33%","16%",null===(i=this.config.layout)||void 0===i?void 0:i.mediaItem):"100%"}browseClicked(){this.parentDirs.length?this.setCurrentDir(this.parentDirs.pop()):this.currentDir?this.setCurrentDir(void 0):this.browse=!this.browse}setCurrentDir(t){this.currentDir=t,t?localStorage.setItem("custom-sonos-card_currentDir",JSON.stringify(t)):localStorage.removeItem("custom-sonos-card_currentDir")}async onMediaItemClick(t){t.can_expand?(this.currentDir&&this.parentDirs.push(this.currentDir),this.setCurrentDir(t)):t.can_play&&await this.playItem(t)}async playItem(t){t.media_content_type||t.media_content_id?await this.mediaControlService.playMedia(this.entityId,t):await this.mediaControlService.setSource(this.entityId,t.title)}async getAllFavorites(){var t,e,i,s;let o=await this.mediaBrowseService.getAllFavorites(this.mediaPlayers,this.config.mediaBrowserTitlesToIgnore);return this.config.shuffleFavorites?oe.shuffleArray(o):o=o.sort(((t,e)=>t.title.localeCompare(e.title,"en",{sensitivity:"base"}))),[...(null===(e=null===(t=this.config.customSources)||void 0===t?void 0:t[this.entityId])||void 0===e?void 0:e.map(oe.createSource))||[],...(null===(s=null===(i=this.config.customSources)||void 0===i?void 0:i.all)||void 0===s?void 0:s.map(oe.createSource))||[],...o]}static createSource(t){return Object.assign(Object.assign({},t),{can_play:!0})}static shuffleArray(t){for(let e=t.length-1;e>0;e--){const i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}}static itemsWithImage(t){return t.some((t=>t.thumbnail||t.can_expand))}async loadMediaDir(t){return await(t?this.mediaBrowseService.getDir(this.entityId,t,this.config.mediaBrowserTitlesToIgnore):this.mediaBrowseService.getRoot(this.entityId,this.config.mediaBrowserTitlesToIgnore))}mediaButtonsStyle(t){return yt("media-buttons",this.config,Object.assign({padding:"0",display:"flex",flexWrap:"wrap"},!t&&{flexDirection:"column"}))}static get styles(){return wt}}t([tt({attribute:!1})],oe.prototype,"hass",void 0),t([tt()],oe.prototype,"config",void 0),t([et()],oe.prototype,"browse",void 0),t([et()],oe.prototype,"currentDir",void 0),t([et()],oe.prototype,"mediaItems",void 0),t([et()],oe.prototype,"entityId",void 0);const ne=t=>"Sonos"+(t?` (${t})`:""),re=t=>"Media player for your Sonos speakers"+(t?` (${t})`:"");window.customCards.push({type:"sonos-card",name:ne(),description:re(),preview:!0},{type:"sonos-grouping",name:ne("Grouping section"),description:re("Grouping section"),preview:!0},{type:"sonos-groups",name:ne("Groups section"),description:re("Groups section"),preview:!0},{type:"sonos-media-browser",name:ne("Media Browser section"),description:re("Media Browser section"),preview:!0},{type:"sonos-player",name:ne("Player section"),description:"Media player for your Sonos speakers (Player section)",preview:!0}),customElements.define("custom-sonos-card",class extends Kt{setConfig(t){console.error("type: custom:custom-sonos-card is deprecated, please use custom:sonos-card instead"),super.setConfig(t)}}),customElements.define("sonos-card",Kt),customElements.define("sonos-grouping",Yt),customElements.define("sonos-groups",Qt),customElements.define("sonos-media-browser",oe),customElements.define("sonos-player",Ft);
