import{ai as I,K as H,F as k,af as D,ae as M,ah as C,a0 as N,z as U,H as R,l as _}from"./entry.0b8cd08a.js";function g(e,t,...n){if(e in t){let l=t[e];return typeof l=="function"?l(...n):l}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,g),r}var K=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(K||{}),W=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(W||{});function G({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...l}){var o;let a=j(r,n),i=Object.assign(l,{props:a});if(e||t&2&&a.static)return y(i);if(t&1){let m=(o=a.unmount)==null||o?0:1;return g(m,{[0](){return null},[1](){return y({...l,props:{...a,hidden:!0,style:{display:"none"}}})}})}return y(i)}function y({props:e,attrs:t,slots:n,slot:r,name:l}){var o,a;let{as:i,...m}=V(e,["unmount","static"]),u=(o=n.default)==null?void 0:o.call(n,r),s={};if(r){let p=!1,v=[];for(let[f,c]of Object.entries(r))typeof c=="boolean"&&(p=!0),c===!0&&v.push(f);p&&(s["data-headlessui-state"]=v.join(" "))}if(i==="template"){if(u=S(u??[]),Object.keys(m).length>0||Object.keys(t).length>0){let[p,...v]=u??[];if(!B(p)||v.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${l} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(m).concat(Object.keys(t)).map(d=>d.trim()).filter((d,w,T)=>T.indexOf(d)===w).sort((d,w)=>d.localeCompare(w)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let f=j((a=p.props)!=null?a:{},m),c=I(p,f);for(let d in f)d.startsWith("on")&&(c.props||(c.props={}),c.props[d]=f[d]);return c}return Array.isArray(u)&&u.length===1?u[0]:u}return H(i,Object.assign({},m,s),{default:()=>u})}function S(e){return e.flatMap(t=>t.type===k?S(t.children):[t])}function j(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](l,...o){let a=n[r];for(let i of a){if(l instanceof Event&&l.defaultPrevented)return;i(l,...o)}}});return t}function pe(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function V(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function B(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let X=0;function q(){return++X}function me(){return q()}var z=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(z||{});function P(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let A=Symbol("Context");var Y=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(Y||{});function ve(){return J()!==null}function J(){return D(A,null)}function he(e){M(A,e)}var Q=Object.defineProperty,Z=(e,t,n)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,O=(e,t,n)=>(Z(e,typeof t!="symbol"?t+"":t,n),n);class ee{constructor(){O(this,"current",this.detect()),O(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let E=new ee;function $(e){if(E.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=P(e);if(t)return t.ownerDocument}return document}let b=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var te=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(te||{}),ne=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ne||{}),re=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(re||{});function x(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(b)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var F=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(F||{});function L(e,t=0){var n;return e===((n=$(e))==null?void 0:n.body)?!1:g(t,{[0](){return e.matches(b)},[1](){let r=e;for(;r!==null;){if(r.matches(b))return!0;r=r.parentElement}return!1}})}function we(e){let t=$(e);C(()=>{t&&!L(t.activeElement,0)&&le(e)})}var oe=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(oe||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function le(e){e==null||e.focus({preventScroll:!0})}let ie=["textarea","input"].join(",");function ae(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,ie))!=null?n:!1}function ue(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),o=t(r);if(l===null||o===null)return 0;let a=l.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ye(e,t){return se(x(),t,{relativeTo:e})}function se(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){var o;let a=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,i=Array.isArray(e)?n?ue(e):e:x(e);l.length>0&&i.length>1&&(i=i.filter(c=>!l.includes(c))),r=r??a.activeElement;let m=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=t&32?{preventScroll:!0}:{},p=0,v=i.length,f;do{if(p>=v||p+v<=0)return 0;let c=u+p;if(t&16)c=(c+v)%v;else{if(c<0)return 3;if(c>=v)return 1}f=i[c],f==null||f.focus(s),p+=m}while(f!==a.activeElement);return t&6&&ae(f)&&f.select(),2}function h(e,t,n){E.isServer||N(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function ce(e,t,n){E.isServer||N(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}function be(e,t,n=R(()=>!0)){function r(o,a){if(!n.value||o.defaultPrevented)return;let i=a(o);if(i===null||!i.getRootNode().contains(i))return;let m=function u(s){return typeof s=="function"?u(s()):Array.isArray(s)||s instanceof Set?s:[s]}(e);for(let u of m){if(u===null)continue;let s=u instanceof HTMLElement?u:P(u);if(s!=null&&s.contains(i)||o.composed&&o.composedPath().includes(s))return}return!L(i,F.Loose)&&i.tabIndex!==-1&&o.preventDefault(),t(o,i)}let l=U(null);h("pointerdown",o=>{var a,i;n.value&&(l.value=((i=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:i[0])||o.target)},!0),h("mousedown",o=>{var a,i;n.value&&(l.value=((i=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:i[0])||o.target)},!0),h("click",o=>{l.value&&(r(o,()=>l.value),l.value=null)},!0),h("touchend",o=>r(o,()=>o.target instanceof HTMLElement?o.target:null),!0),ce("blur",o=>r(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var de=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(de||{});let ge=_({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:r,...l}=e,o={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return G({ourProps:o,theirProps:l,slot:{},attrs:n,slots:t,name:"Hidden"})}}});export{ve as C,x as E,G as H,pe as K,te as N,ue as O,se as P,le as S,ne as T,we as _,de as a,z as b,E as c,K as d,W as e,ge as f,he as g,V as h,L as i,F as j,Y as l,$ as m,P as o,J as p,me as t,g as u,ye as v,ce as w,be as y};