import{ah as x,d as B,r as d,c as F,w as H,o as K,y as L,b as i,e as u,f as m,h as a,H as N,i as R,v as q,g as z,q as D,F as M,k as $,t as E,K as I}from"./D_S6f-1-.js";const O=x("search",{state:()=>({recent:[]}),actions:{addRecent(o){this.recent.includes(o)||this.recent.push(o)}},persist:{storage:localStorage}}),T={class:"relative"},U={key:0,class:"absolute z-50 top-full left-0 w-full bg-white rounded-md shadow-md"},j=["onClick"],J=B({__name:"SearchBar",props:{search:{required:!0,type:String},placeholder:{required:!1,type:String,default:"Search..."}},emits:["update","update:search"],setup(o,{emit:f}){const v=o,h=f,t=d(v.search),n=d([]),r=d(!1),c=O(),g=()=>{let e=t.value.trim();h("update",e),h("update:search",e),e&&e.length>=4&&!n.value.includes(e)&&(n.value.unshift(e),y(e))},y=e=>{c.addRecent(e),c.recent.length>20&&c.recent.pop()},S=()=>{n.value=c.recent},w=e=>n.value.filter(s=>s.toLowerCase().includes(e.toLowerCase().trim())),V=e=>{t.value=e,r.value=!1},_=()=>{setTimeout(()=>{r.value=!1},200)},k=()=>{t.value="",r.value=!1},p=F(()=>w(t.value).slice(0,5));return H(t,()=>{g()}),K(()=>{S()}),(e,s)=>{const C=L("FormKit");return i(),u("div",T,[m(C,{label:"",type:"search",modelValue:a(t),"onUpdate:modelValue":s[0]||(s[0]=l=>N(t)?t.value=l:null),modelModifiers:{lazy:!0},placeholder:o.placeholder,delay:1e3,"prefix-icon":"searchIcon",autocomplete:"off",onBlur:_,onFocus:s[1]||(s[1]=l=>r.value=!0)},null,8,["modelValue","placeholder"]),R(z("button",{onClick:k,class:"absolute inset-y-0 right-0 flex items-center pr-3"},[m(a(D),{class:"w-5 h-5 mt-2"})],512),[[q,a(t)!==""]]),a(r)&&a(p).length>0?(i(),u("ul",U,[(i(!0),u(M,null,$(a(p),(l,b)=>(i(),u("li",{key:b,onClick:A=>V(l),class:"px-3 py-2 hover:bg-gray-100 cursor-pointer"},E(l),9,j))),128))])):I("",!0)])}}});export{J as _};