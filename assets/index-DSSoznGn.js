(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();const W=(e,n)=>e===n,N={equals:W};let K=j;const y=1,E=2,I={owned:null,cleanups:null,context:null,owner:null};var d=null;let T=null,M=null,c=null,a=null,g=null,x=0;function Q(e,n){const t=c,s=d,i=e.length===0,l=n===void 0?s:n,r=i?I:{owned:null,cleanups:null,context:l?l.context:null,owner:l},o=i?e:()=>e(()=>$(()=>C(r)));d=r,c=null;try{return m(o,!0)}finally{c=t,d=s}}function B(e,n){n=n?Object.assign({},N,n):N;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.value)),R(t,i));return[X.bind(t),s]}function A(e,n,t){const s=J(e,n,!1,y);_(s)}function $(e){if(c===null)return e();const n=c;c=null;try{return e()}finally{c=n}}function X(){if(this.sources&&this.state)if(this.state===y)_(this);else{const e=a;a=null,m(()=>S(this),!1),a=e}if(c){const e=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(e)):(c.sources=[this],c.sourceSlots=[e]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function R(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&m(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=T&&T.running;r&&T.disposed.has(l),(r?!l.tState:!l.state)&&(l.pure?a.push(l):g.push(l),l.observers&&G(l)),r||(l.state=y)}if(a.length>1e6)throw a=[],new Error},!1)),n}function _(e){if(!e.fn)return;C(e);const n=x;k(e,e.value,n)}function k(e,n,t){let s;const i=d,l=c;c=d=e;try{s=e.fn(n)}catch(r){return e.pure&&(e.state=y,e.owned&&e.owned.forEach(C),e.owned=null),e.updatedAt=t+1,V(r)}finally{c=l,d=i}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?R(e,s):e.value=s,e.updatedAt=t)}function J(e,n,t,s=y,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:d,context:d?d.context:null,pure:t};return d===null||d!==I&&(d.owned?d.owned.push(l):d.owned=[l]),l}function F(e){if(e.state===0)return;if(e.state===E)return S(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<x);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===y)_(e);else if(e.state===E){const s=a;a=null,m(()=>S(e,n[0]),!1),a=s}}function m(e,n){if(a)return e();let t=!1;n||(a=[]),g?t=!0:g=[],x++;try{const s=e();return Y(t),s}catch(s){t||(g=null),a=null,V(s)}}function Y(e){if(a&&(j(a),a=null),e)return;const n=g;g=null,n.length&&m(()=>K(n),!1)}function j(e){for(let n=0;n<e.length;n++)F(e[n])}function S(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const s=e.sources[t];if(s.sources){const i=s.state;i===y?s!==n&&(!s.updatedAt||s.updatedAt<x)&&F(s):i===E&&S(s,n)}}}function G(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=E,t.pure?a.push(t):g.push(t),t.observers&&G(t))}}function C(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),r=t.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,t.observerSlots[s]=r)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)C(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0}function Z(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function V(e,n=d){throw Z(e)}let z=!1;function ee(e,n){return $(()=>e(n||{}))}function te(e,n,t){let s=t.length,i=n.length,l=s,r=0,o=0,f=n[i-1].nextSibling,h=null;for(;r<i||o<l;){if(n[r]===t[o]){r++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===r){const u=l<s?o?t[o-1].nextSibling:t[l-o]:f;for(;o<l;)e.insertBefore(t[o++],u)}else if(l===o)for(;r<i;)(!h||!h.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[l-1]&&t[o]===n[i-1]){const u=n[--i].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--l],u),n[i]=t[l]}else{if(!h){h=new Map;let p=o;for(;p<l;)h.set(t[p],p++)}const u=h.get(n[r]);if(u!=null)if(o<u&&u<l){let p=r,b=1,O;for(;++p<i&&p<l&&!((O=h.get(n[p]))==null||O!==u+b);)b++;if(b>u-o){const H=n[r];for(;o<u;)e.insertBefore(t[o++],H)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const U="_$DX_DELEGATE";function ne(e,n,t,s={}){let i;return Q(l=>{i=l,n===document?e():L(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function se(e,n,t){let s;const i=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},l=()=>(s||(s=i())).cloneNode(!0);return l.cloneNode=l,l}function ie(e,n=window.document){const t=n[U]||(n[U]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];t.has(l)||(t.add(l),n.addEventListener(l,le))}}function L(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return v(e,n,s,t);A(i=>v(e,n(),i,t),s)}function le(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}});t;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function v(e,n,t,s,i){for(;typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data!==n&&(o.data=n):o=document.createTextNode(n),t=w(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n;else if(n==null||l==="boolean")t=w(e,t,s);else{if(l==="function")return A(()=>{let o=n();for(;typeof o=="function";)o=o();t=v(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],f=t&&Array.isArray(t);if(P(o,n,t,i))return A(()=>t=v(e,o,t,s,!0)),()=>t;if(o.length===0){if(t=w(e,t,s),r)return t}else f?t.length===0?q(e,o,s):te(e,t,o):(t&&w(e),q(e,o));t=o}else if(n.nodeType){if(Array.isArray(t)){if(r)return t=w(e,t,s,n);w(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function P(e,n,t,s){let i=!1;for(let l=0,r=n.length;l<r;l++){let o=n[l],f=t&&t[e.length],h;if(!(o==null||o===!0||o===!1))if((h=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=P(e,o,f)||i;else if(h==="function")if(s){for(;typeof o=="function";)o=o();i=P(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const u=String(o);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return i}function q(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function w(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(i!==o){const f=o.parentNode===e;!l&&!r?f?e.replaceChild(i,o):e.insertBefore(i,t):f&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}const oe="modulepreload",re=function(e){return"/"+e},D={},fe=function(n,t,s){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),r=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.all(t.map(o=>{if(o=re(o),o in D)return;D[o]=!0;const f=o.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${h}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":oe,f||(u.as="script",u.crossOrigin=""),u.href=o,r&&u.setAttribute("nonce",r),document.head.appendChild(u),f)return new Promise((p,b)=>{u.addEventListener("load",p),u.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>n()).catch(l=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=l,window.dispatchEvent(r),!r.defaultPrevented)throw l})},ue=(e={})=>{const n=document.createElement("input");for(const t in e)n.setAttribute(t,e[t]);return new Promise(t=>{n.addEventListener("change",async()=>{const s=Array.from(n.files||[]);t(s)}),n.addEventListener("cancel",()=>{t([])}),n.click()})},ce=e=>new Promise(n=>{const t=new FileReader;t.onload=()=>{const s=t.result;if(!s){n(null);return}n(new Uint8Array(s||[]))},t.readAsArrayBuffer(e)});var ae=se("<div><p></p><button type=button></button><button type=button>copy");const de={type:"file",accept:"image/*",multiple:"false"};async function he(){const e=(await ue(de))[0];if(!e)return"";const n=await ce(e);return n?(await fe(()=>import("./index-BcnGr2QX.js"),[]).then(s=>s.detect(n))).join(`
`):""}function pe(){const[e,n]=B(""),[t,s]=B(!1);return(()=>{var i=ae(),l=i.firstChild,r=l.nextSibling,o=r.nextSibling;return L(l,e),r.$$click=async()=>{s(!0);const f=await he();n(f),await navigator.clipboard.writeText(f),s(!1)},L(r,()=>t()?"loading...":"upload"),o.$$click=async()=>{await navigator.clipboard.writeText(e())},A(()=>o.disabled=!e().length),i})()}ie(["click"]);const ge=document.getElementById("root");ne(()=>ee(pe,{}),ge);