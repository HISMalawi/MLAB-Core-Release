import{m as $,y as C,i as L,j,o as m,g as B,u as K,l as x,H as P,t as w,p as _,b as D,d,v as H,N as O,_ as E,O as U}from"./hidden.eaac968f.js";import{b as V,p as W,u as q,x as Q,a as M}from"./use-text-value.001e6d40.js";import{aa as N,m as T,s as S,H as R,ab as J,N as Y,a3 as Z,ac as z,ae as y}from"./entry.3e997e44.js";function G({container:a,accept:b,walk:I,enabled:v}){N(()=>{let e=a.value;if(!e||v!==void 0&&!v.value)return;let c=$(a);if(!c)return;let s=Object.assign(i=>b(i),{acceptNode:b}),p=c.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,s,!1);for(;p.nextNode();)I(p.currentNode)})}var X=(a=>(a[a.Open=0]="Open",a[a.Closed=1]="Closed",a))(X||{}),ee=(a=>(a[a.Pointer=0]="Pointer",a[a.Other=1]="Other",a))(ee||{});function te(a){requestAnimationFrame(()=>requestAnimationFrame(a))}let A=Symbol("MenuContext");function k(a){let b=z(A,null);if(b===null){let I=new Error(`<${a} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(I,k),I}return b}let ue=T({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(a,{slots:b,attrs:I}){let v=S(1),e=S(null),c=S(null),s=S([]),p=S(""),i=S(null),u=S(1);function t(l=o=>o){let o=i.value!==null?s.value[i.value]:null,r=U(l(s.value.slice()),g=>m(g.dataRef.domRef)),n=o?r.indexOf(o):null;return n===-1&&(n=null),{items:r,activeItemIndex:n}}let f={menuState:v,buttonRef:e,itemsRef:c,items:s,searchQuery:p,activeItemIndex:i,activationTrigger:u,closeMenu:()=>{v.value=1,i.value=null},openMenu:()=>v.value=0,goToItem(l,o,r){let n=t(),g=Q(l===M.Specific?{focus:M.Specific,id:o}:{focus:l},{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:h=>h.id,resolveDisabled:h=>h.dataRef.disabled});p.value="",i.value=g,u.value=r??1,s.value=n.items},search(l){let o=p.value!==""?0:1;p.value+=l.toLowerCase();let r=(i.value!==null?s.value.slice(i.value+o).concat(s.value.slice(0,i.value+o)):s.value).find(g=>g.dataRef.textValue.startsWith(p.value)&&!g.dataRef.disabled),n=r?s.value.indexOf(r):-1;n===-1||n===i.value||(i.value=n,u.value=1)},clearSearch(){p.value=""},registerItem(l,o){let r=t(n=>[...n,{id:l,dataRef:o}]);s.value=r.items,i.value=r.activeItemIndex,u.value=1},unregisterItem(l){let o=t(r=>{let n=r.findIndex(g=>g.id===l);return n!==-1&&r.splice(n,1),r});s.value=o.items,i.value=o.activeItemIndex,u.value=1}};return C([e,c],(l,o)=>{var r;f.closeMenu(),L(o,j.Loose)||(l.preventDefault(),(r=m(e))==null||r.focus())},R(()=>v.value===0)),J(A,f),B(R(()=>K(v.value,{[0]:x.Open,[1]:x.Closed}))),()=>{let l={open:v.value===0,close:f.closeMenu};return P({ourProps:{},theirProps:a,slot:l,slots:b,attrs:I,name:"Menu"})}}}),oe=T({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${w()}`}},setup(a,{attrs:b,slots:I,expose:v}){let e=k("MenuButton");v({el:e.buttonRef,$el:e.buttonRef});function c(u){switch(u.key){case d.Space:case d.Enter:case d.ArrowDown:u.preventDefault(),u.stopPropagation(),e.openMenu(),y(()=>{var t;(t=m(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(M.First)});break;case d.ArrowUp:u.preventDefault(),u.stopPropagation(),e.openMenu(),y(()=>{var t;(t=m(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(M.Last)});break}}function s(u){switch(u.key){case d.Space:u.preventDefault();break}}function p(u){a.disabled||(e.menuState.value===0?(e.closeMenu(),y(()=>{var t;return(t=m(e.buttonRef))==null?void 0:t.focus({preventScroll:!0})})):(u.preventDefault(),e.openMenu(),te(()=>{var t;return(t=m(e.itemsRef))==null?void 0:t.focus({preventScroll:!0})})))}let i=V(R(()=>({as:a.as,type:b.type})),e.buttonRef);return()=>{var u;let t={open:e.menuState.value===0},{id:f,...l}=a,o={ref:e.buttonRef,id:f,type:i.value,"aria-haspopup":"menu","aria-controls":(u=m(e.itemsRef))==null?void 0:u.id,"aria-expanded":e.menuState.value===0,onKeydown:c,onKeyup:s,onClick:p};return P({ourProps:o,theirProps:l,slot:t,attrs:b,slots:I,name:"MenuButton"})}}}),re=T({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${w()}`}},setup(a,{attrs:b,slots:I,expose:v}){let e=k("MenuItems"),c=S(null);v({el:e.itemsRef,$el:e.itemsRef}),G({container:R(()=>m(e.itemsRef)),enabled:R(()=>e.menuState.value===0),accept(t){return t.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:t.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(t){t.setAttribute("role","none")}});function s(t){var f;switch(c.value&&clearTimeout(c.value),t.key){case d.Space:if(e.searchQuery.value!=="")return t.preventDefault(),t.stopPropagation(),e.search(t.key);case d.Enter:if(t.preventDefault(),t.stopPropagation(),e.activeItemIndex.value!==null){let l=e.items.value[e.activeItemIndex.value];(f=m(l.dataRef.domRef))==null||f.click()}e.closeMenu(),E(m(e.buttonRef));break;case d.ArrowDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(M.Next);case d.ArrowUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(M.Previous);case d.Home:case d.PageUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(M.First);case d.End:case d.PageDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(M.Last);case d.Escape:t.preventDefault(),t.stopPropagation(),e.closeMenu(),y(()=>{var l;return(l=m(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case d.Tab:t.preventDefault(),t.stopPropagation(),e.closeMenu(),y(()=>H(m(e.buttonRef),t.shiftKey?O.Previous:O.Next));break;default:t.key.length===1&&(e.search(t.key),c.value=setTimeout(()=>e.clearSearch(),350));break}}function p(t){switch(t.key){case d.Space:t.preventDefault();break}}let i=_(),u=R(()=>i!==null?(i.value&x.Open)===x.Open:e.menuState.value===0);return()=>{var t,f;let l={open:e.menuState.value===0},{id:o,...r}=a,n={"aria-activedescendant":e.activeItemIndex.value===null||(t=e.items.value[e.activeItemIndex.value])==null?void 0:t.id,"aria-labelledby":(f=m(e.buttonRef))==null?void 0:f.id,id:o,onKeydown:s,onKeyup:p,role:"menu",tabIndex:0,ref:e.itemsRef};return P({ourProps:n,theirProps:r,slot:l,attrs:b,slots:I,features:D.RenderStrategy|D.Static,visible:u.value,name:"MenuItems"})}}}),se=T({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${w()}`}},setup(a,{slots:b,attrs:I,expose:v}){let e=k("MenuItem"),c=S(null);v({el:c,$el:c});let s=R(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===a.id:!1),p=W(c),i=R(()=>({disabled:a.disabled,get textValue(){return p()},domRef:c}));Y(()=>e.registerItem(a.id,i)),Z(()=>e.unregisterItem(a.id)),N(()=>{e.menuState.value===0&&s.value&&e.activationTrigger.value!==0&&y(()=>{var n,g;return(g=(n=m(c))==null?void 0:n.scrollIntoView)==null?void 0:g.call(n,{block:"nearest"})})});function u(n){if(a.disabled)return n.preventDefault();e.closeMenu(),E(m(e.buttonRef))}function t(){if(a.disabled)return e.goToItem(M.Nothing);e.goToItem(M.Specific,a.id)}let f=q();function l(n){f.update(n)}function o(n){f.wasMoved(n)&&(a.disabled||s.value||e.goToItem(M.Specific,a.id,0))}function r(n){f.wasMoved(n)&&(a.disabled||s.value&&e.goToItem(M.Nothing))}return()=>{let{disabled:n}=a,g={active:s.value,disabled:n,close:e.closeMenu},{id:h,...F}=a;return P({ourProps:{id:h,ref:c,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,disabled:void 0,onClick:u,onFocus:t,onPointerenter:l,onMouseenter:l,onPointermove:o,onMousemove:o,onPointerleave:r,onMouseleave:r},theirProps:{...I,...F},slot:g,attrs:I,slots:b,name:"MenuItem"})}}});export{ue as M,oe as R,re as h,se as y};