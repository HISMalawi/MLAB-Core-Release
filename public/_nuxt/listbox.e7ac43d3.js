import{u as T,y as W,i as G,j as J,o as m,g as X,l as M,f as Y,K as Z,a as _,H as j,h as ee,t as C,p as te,b as N,O as ae,d as f}from"./hidden.d8a7e9c3.js";import{x as le,a as O,b as oe,p as ie,u as ne}from"./use-text-value.d8341020.js";import{C as w,L as b,m as V,ab as ue,Q as E,H as z,O as $,F as re,a5 as se,aa as de,ac as ve,S as P,ae as D}from"./entry.18364f1c.js";function H(t={},u=null,n=[]){for(let[p,e]of Object.entries(t))U(n,K(u,p),e);return n}function K(t,u){return t?t+"["+u+"]":u}function U(t,u,n){if(Array.isArray(n))for(let[p,e]of n.entries())U(t,K(u,p.toString()),e);else n instanceof Date?t.push([u,n.toISOString()]):typeof n=="boolean"?t.push([u,n?"1":"0"]):typeof n=="string"?t.push([u,n]):typeof n=="number"?t.push([u,`${n}`]):n==null?t.push([u,""]):H(n,u,t)}function pe(t,u,n){let p=w(n==null?void 0:n.value),e=b(()=>t.value!==void 0);return[b(()=>e.value?t.value:p.value),function(d){return e.value||(p.value=d),u==null?void 0:u(d)}]}function ce(t,u){return t===u}var fe=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(fe||{}),be=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(be||{}),me=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(me||{});function xe(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let Q=Symbol("ListboxContext");function A(t){let u=ve(Q,null);if(u===null){let n=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,A),n}return u}let Se=V({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>ce},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:u,attrs:n,emit:p}){let e=w(1),d=w(null),x=w(null),g=w(null),c=w([]),a=w(""),l=w(null),S=w(1);function h(o=i=>i){let i=l.value!==null?c.value[l.value]:null,r=ae(o(c.value.slice()),y=>m(y.dataRef.domRef)),v=i?r.indexOf(i):null;return v===-1&&(v=null),{options:r,activeOptionIndex:v}}let R=b(()=>t.multiple?1:0),[L,B]=pe(b(()=>t.modelValue===void 0?T(R.value,{[1]:[],[0]:void 0}):t.modelValue),o=>p("update:modelValue",o),b(()=>t.defaultValue)),k={listboxState:e,value:L,mode:R,compare(o,i){if(typeof t.by=="string"){let r=t.by;return(o==null?void 0:o[r])===(i==null?void 0:i[r])}return t.by(o,i)},orientation:b(()=>t.horizontal?"horizontal":"vertical"),labelRef:d,buttonRef:x,optionsRef:g,disabled:b(()=>t.disabled),options:c,searchQuery:a,activeOptionIndex:l,activationTrigger:S,closeListbox(){t.disabled||e.value!==1&&(e.value=1,l.value=null)},openListbox(){t.disabled||e.value!==0&&(e.value=0)},goToOption(o,i,r){if(t.disabled||e.value===1)return;let v=h(),y=le(o===O.Specific?{focus:O.Specific,id:i}:{focus:o},{resolveItems:()=>v.options,resolveActiveIndex:()=>v.activeOptionIndex,resolveId:I=>I.id,resolveDisabled:I=>I.dataRef.disabled});a.value="",l.value=y,S.value=r??1,c.value=v.options},search(o){if(t.disabled||e.value===1)return;let i=a.value!==""?0:1;a.value+=o.toLowerCase();let r=(l.value!==null?c.value.slice(l.value+i).concat(c.value.slice(0,l.value+i)):c.value).find(y=>y.dataRef.textValue.startsWith(a.value)&&!y.dataRef.disabled),v=r?c.value.indexOf(r):-1;v===-1||v===l.value||(l.value=v,S.value=1)},clearSearch(){t.disabled||e.value!==1&&a.value!==""&&(a.value="")},registerOption(o,i){let r=h(v=>[...v,{id:o,dataRef:i}]);c.value=r.options,l.value=r.activeOptionIndex},unregisterOption(o){let i=h(r=>{let v=r.findIndex(y=>y.id===o);return v!==-1&&r.splice(v,1),r});c.value=i.options,l.value=i.activeOptionIndex,S.value=1},select(o){t.disabled||B(T(R.value,{[0]:()=>o,[1]:()=>{let i=P(k.value.value).slice(),r=P(o),v=i.findIndex(y=>k.compare(r,P(y)));return v===-1?i.push(r):i.splice(v,1),i}}))}};W([x,g],(o,i)=>{var r;k.closeListbox(),G(i,J.Loose)||(o.preventDefault(),(r=m(x))==null||r.focus())},b(()=>e.value===0)),ue(Q,k),X(b(()=>T(e.value,{[0]:M.Open,[1]:M.Closed})));let s=b(()=>{var o;return(o=m(x))==null?void 0:o.closest("form")});return E(()=>{z([s],()=>{if(!s.value||t.defaultValue===void 0)return;function o(){k.select(t.defaultValue)}return s.value.addEventListener("reset",o),()=>{var i;(i=s.value)==null||i.removeEventListener("reset",o)}},{immediate:!0})}),()=>{let{name:o,modelValue:i,disabled:r,form:v,...y}=t,I={open:e.value===0,disabled:r,value:L.value};return $(re,[...o!=null&&L.value!=null?H({[o]:L.value}).map(([F,q])=>$(Y,Z({features:_.Hidden,key:F,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:v,name:F,value:q}))):[],j({ourProps:{},theirProps:{...n,...ee(y,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:I,slots:u,attrs:n,name:"Listbox"})])}}}),he=V({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"},id:{type:String,default:()=>`headlessui-listbox-label-${C()}`}},setup(t,{attrs:u,slots:n}){let p=A("ListboxLabel");function e(){var d;(d=m(p.buttonRef))==null||d.focus({preventScroll:!0})}return()=>{let d={open:p.listboxState.value===0,disabled:p.disabled.value},{id:x,...g}=t,c={id:x,ref:p.labelRef,onClick:e};return j({ourProps:c,theirProps:g,slot:d,attrs:u,slots:n,name:"ListboxLabel"})}}}),Re=V({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${C()}`}},setup(t,{attrs:u,slots:n,expose:p}){let e=A("ListboxButton");p({el:e.buttonRef,$el:e.buttonRef});function d(a){switch(a.key){case f.Space:case f.Enter:case f.ArrowDown:a.preventDefault(),e.openListbox(),D(()=>{var l;(l=m(e.optionsRef))==null||l.focus({preventScroll:!0}),e.value.value||e.goToOption(O.First)});break;case f.ArrowUp:a.preventDefault(),e.openListbox(),D(()=>{var l;(l=m(e.optionsRef))==null||l.focus({preventScroll:!0}),e.value.value||e.goToOption(O.Last)});break}}function x(a){switch(a.key){case f.Space:a.preventDefault();break}}function g(a){e.disabled.value||(e.listboxState.value===0?(e.closeListbox(),D(()=>{var l;return(l=m(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(a.preventDefault(),e.openListbox(),xe(()=>{var l;return(l=m(e.optionsRef))==null?void 0:l.focus({preventScroll:!0})})))}let c=oe(b(()=>({as:t.as,type:u.type})),e.buttonRef);return()=>{var a,l;let S={open:e.listboxState.value===0,disabled:e.disabled.value,value:e.value.value},{id:h,...R}=t,L={ref:e.buttonRef,id:h,type:c.value,"aria-haspopup":"listbox","aria-controls":(a=m(e.optionsRef))==null?void 0:a.id,"aria-expanded":e.listboxState.value===0,"aria-labelledby":e.labelRef.value?[(l=m(e.labelRef))==null?void 0:l.id,h].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:d,onKeyup:x,onClick:g};return j({ourProps:L,theirProps:R,slot:S,attrs:u,slots:n,name:"ListboxButton"})}}}),Le=V({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${C()}`}},setup(t,{attrs:u,slots:n,expose:p}){let e=A("ListboxOptions"),d=w(null);p({el:e.optionsRef,$el:e.optionsRef});function x(a){switch(d.value&&clearTimeout(d.value),a.key){case f.Space:if(e.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),e.search(a.key);case f.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeOptionIndex.value!==null){let l=e.options.value[e.activeOptionIndex.value];e.select(l.dataRef.value)}e.mode.value===0&&(e.closeListbox(),D(()=>{var l;return(l=m(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})}));break;case T(e.orientation.value,{vertical:f.ArrowDown,horizontal:f.ArrowRight}):return a.preventDefault(),a.stopPropagation(),e.goToOption(O.Next);case T(e.orientation.value,{vertical:f.ArrowUp,horizontal:f.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),e.goToOption(O.Previous);case f.Home:case f.PageUp:return a.preventDefault(),a.stopPropagation(),e.goToOption(O.First);case f.End:case f.PageDown:return a.preventDefault(),a.stopPropagation(),e.goToOption(O.Last);case f.Escape:a.preventDefault(),a.stopPropagation(),e.closeListbox(),D(()=>{var l;return(l=m(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case f.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(e.search(a.key),d.value=setTimeout(()=>e.clearSearch(),350));break}}let g=te(),c=b(()=>g!==null?(g.value&M.Open)===M.Open:e.listboxState.value===0);return()=>{var a,l,S,h;let R={open:e.listboxState.value===0},{id:L,...B}=t,k={"aria-activedescendant":e.activeOptionIndex.value===null||(a=e.options.value[e.activeOptionIndex.value])==null?void 0:a.id,"aria-multiselectable":e.mode.value===1?!0:void 0,"aria-labelledby":(h=(l=m(e.labelRef))==null?void 0:l.id)!=null?h:(S=m(e.buttonRef))==null?void 0:S.id,"aria-orientation":e.orientation.value,id:L,onKeydown:x,role:"listbox",tabIndex:0,ref:e.optionsRef};return j({ourProps:k,theirProps:B,slot:R,attrs:u,slots:n,features:N.RenderStrategy|N.Static,visible:c.value,name:"ListboxOptions"})}}}),we=V({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${C()}`}},setup(t,{slots:u,attrs:n,expose:p}){let e=A("ListboxOption"),d=w(null);p({el:d,$el:d});let x=b(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===t.id:!1),g=b(()=>T(e.mode.value,{[0]:()=>e.compare(P(e.value.value),P(t.value)),[1]:()=>P(e.value.value).some(s=>e.compare(P(s),P(t.value)))})),c=b(()=>T(e.mode.value,{[1]:()=>{var s;let o=P(e.value.value);return((s=e.options.value.find(i=>o.some(r=>e.compare(P(r),P(i.dataRef.value)))))==null?void 0:s.id)===t.id},[0]:()=>g.value})),a=ie(d),l=b(()=>({disabled:t.disabled,value:t.value,get textValue(){return a()},domRef:d}));E(()=>e.registerOption(t.id,l)),se(()=>e.unregisterOption(t.id)),E(()=>{z([e.listboxState,g],()=>{e.listboxState.value===0&&g.value&&T(e.mode.value,{[1]:()=>{c.value&&e.goToOption(O.Specific,t.id)},[0]:()=>{e.goToOption(O.Specific,t.id)}})},{immediate:!0})}),de(()=>{e.listboxState.value===0&&x.value&&e.activationTrigger.value!==0&&D(()=>{var s,o;return(o=(s=m(d))==null?void 0:s.scrollIntoView)==null?void 0:o.call(s,{block:"nearest"})})});function S(s){if(t.disabled)return s.preventDefault();e.select(t.value),e.mode.value===0&&(e.closeListbox(),D(()=>{var o;return(o=m(e.buttonRef))==null?void 0:o.focus({preventScroll:!0})}))}function h(){if(t.disabled)return e.goToOption(O.Nothing);e.goToOption(O.Specific,t.id)}let R=ne();function L(s){R.update(s)}function B(s){R.wasMoved(s)&&(t.disabled||x.value||e.goToOption(O.Specific,t.id,0))}function k(s){R.wasMoved(s)&&(t.disabled||x.value&&e.goToOption(O.Nothing))}return()=>{let{disabled:s}=t,o={active:x.value,selected:g.value,disabled:s},{id:i,value:r,disabled:v,...y}=t,I={id:i,ref:d,role:"option",tabIndex:s===!0?void 0:-1,"aria-disabled":s===!0?!0:void 0,"aria-selected":g.value,disabled:void 0,onClick:S,onFocus:h,onPointerenter:L,onMouseenter:L,onPointermove:B,onMousemove:B,onPointerleave:k,onMouseleave:k};return j({ourProps:I,theirProps:y,slot:o,attrs:n,slots:u,name:"ListboxOption"})}}});export{he as B,Se as F,we as H,Re as K,Le as N};