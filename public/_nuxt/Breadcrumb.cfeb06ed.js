import{_ as h}from"./nuxt-link.bebad584.js";import{r as u}from"./HomeIcon.54ceb79b.js";import{_ as x,f,o as t,c as s,d as e,F as g,r as v,b as a,g as w,w as l,v as c,t as i,h as y}from"./entry.6a3fbfc1.js";const k={props:{pages:{required:!0,type:Array}},components:{HomeIcon:u},methods:{currentPath(){const o=this.$route.path.split("/");return o[o.length-1].replace(/-/g," ")}}},B={class:"flex bg-gray-50 py-2 px-2","aria-label":"Breadcrumb"},b={class:"inline-flex items-center space-x-1"},z={class:"flex items-center"},C={"aria-hidden":"true",class:"w-6 h-6 text-sky-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},$=e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"},null,-1),H=[$],I={class:"ml-1 capitalize font-medium text-sky-500 hover:text-sky-600 md:ml-2"},L={class:"inline-flex items-center"},N={disabled:"",href:"#",class:"capitalize inline-flex items-center font-medium text-gray-400"},V=e("svg",{"aria-hidden":"true",class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1);function D(o,F,_,M,P,d){const m=f("HomeIcon"),p=h;return t(),s("nav",B,[e("ol",b,[(t(!0),s(g,null,v(_.pages,(r,n)=>(t(),s("li",{key:n},[a(p,{to:r.link},{default:w(()=>[e("div",z,[l(a(m,{class:"w-4 h-4 text-sky-500"},null,512),[[c,n==0]]),l((t(),s("svg",C,H,512)),[[c,n!=0]]),e("p",I,i(r.name),1)])]),_:2},1032,["to"])]))),128)),e("li",L,[e("p",N,[V,y(" "+i(d.currentPath()),1)])])])])}const E=x(k,[["render",D]]);export{E as _};