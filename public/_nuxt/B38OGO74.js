import{_ as x}from"./CaCwXEk-.js";import{d as f,aj as g,b as s,e as a,g as e,F as v,j as w,f as l,z as y,i as o,h as k,v as i,N as c,t as d,k as B}from"./DaVfplCl.js";import{r as b}from"./Bk1fID9q.js";const z={class:"flex bg-gray-50 py-2 px-2","aria-label":"Breadcrumb"},C={class:"inline-flex items-center space-x-1"},N={class:"flex items-center"},L=e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"},null,-1),S=[L],V={class:"inline-flex items-center"},j={disabled:"",href:"#",class:"capitalize inline-flex items-center font-medium text-gray-400"},D=e("svg",{"aria-hidden":"true",class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),E=f({__name:"Breadcrumb",props:{pages:{required:!0,type:Array}},setup(_){const m=g(),u=_,p=()=>{const r=m.path.split("/");return r[r.length-1].replace(/-/g," ")};return(r,F)=>{const h=x;return s(),a("nav",z,[e("ol",C,[(s(!0),a(v,null,w(u.pages,(t,n)=>(s(),a("li",{key:n},[l(h,{to:t.link.toString()},{default:y(()=>[e("div",N,[o(l(k(b),{class:"w-4 h-4 text-sky-500"},null,512),[[i,n==0]]),o((s(),a("svg",{"aria-hidden":"true",class:c(["w-6 h-6",t.link==="#"?"text-gray-400":"text-sky-500"]),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},S,2)),[[i,n!=0]]),e("p",{class:c(["ml-1 capitalize font-medium md:ml-2",t.link==="#"?"text-gray-400":"text-sky-500 hover:text-sky-600"])},d(t.name),3)])]),_:2},1032,["to"])]))),128)),e("li",V,[e("p",j,[D,B(" "+d(p()),1)])])])])}}});export{E as _};