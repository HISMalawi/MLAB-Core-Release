import{_ as U}from"./u_i5tT18.js";import{_ as D}from"./D5NS-hCo.js";import{d as F,r as u,u as C,a as G,c as H,w as R,o as V,b as l,e as i,f as p,g as s,h as I,i as P,v as $,F as g,j as y,t as B,_ as M,k as z}from"./CgCt1uig.js";import{u as J}from"./Kt-y9hP3.js";import{e as b,f as x}from"./DDP8Pd40.js";import{P as K}from"./Bf5grz7u.js";import{r as O}from"./BiLmvBTn.js";import"./DAatDIeb.js";import"./CDGutsna.js";import"./CosnS5_S.js";import"./C7nrlxI_.js";import"./22U_Ornm.js";import"./BBi4X6kY.js";import"./q9WmgNLv.js";import"./D8JfA7oG.js";import"./9jRWjONT.js";import"./DDaZZI9g.js";const Q={class:"px-5 py-5"},W=s("div",{class:"flex items-center justify-between py-5"},[s("h3",{class:"text-2xl font-semibold"},"Permissions")],-1),X={class:"flex items-center space-x-3 justify-between"},Y={class:"w-full mt-5 rounded"},Z={class:"flex items-center mx-auto justify-center py-20"},ee={class:"overflow-x-auto mb-20 rounded"},se={class:"table-auto w-full border-collapse border rounded"},te={class:"border-b"},oe={class:"w-full bg-gray-50"},ae=s("th",{class:"px-20 py-2 text-left uppercase font-semibold border sticky left-0"}," Permissions ",-1),ne={class:"border-r sticky left-0 bg-white"},re={class:""},le={class:"flex items-center justify-between border-b py-2 px-4 hover:bg-gray-100 transition duration-150 hover:font-medium"},ie=["checked","onChange"],Be=F({__name:"permissions",setup(ce){J({title:`${K.name.toUpperCase()} - Permissions`});const j=O,L=u([{name:"Home",link:"/home"},{name:"Access Controls",link:"#"}]);C();const c=u(""),m=u([]),d=u([]),_=G("token"),t=u(!1),q=H(()=>{if(!c.value)return m.value;const o=c.value.toLowerCase();return m.value.filter(e=>e.display_name.toLowerCase().includes(o))}),v=async()=>{t.value=!0;const o={route:b.privileges,method:"GET",token:`${_.value}`},{data:e,pending:a,error:n}=await x(o);e.value&&(m.value=e.value,t.value=!1),n.value&&(console.error(n.value),t.value=!1)},k=async()=>{const o={route:b.roles,method:"GET",token:`${_.value}`},{data:e,error:a}=await x(o);e.value&&(d.value=e.value),a.value&&console.error(a.value)},S=async()=>{t.value=!0;const o={route:`${b.roles}/update_permissions`,method:"PUT",token:`${_.value}`,body:{role_privileges:d.value}},{data:e,pending:a,error:n}=await x(o);t.value=a,e.value&&(t.value=!1,C().$toast.success("Permissions updated successfully!"),await v(),await k()),n.value&&(t.value=!1,console.error(n.value))},A=(o,e,a)=>{o.target.checked?e.privileges.push(a):e.privileges=e.privileges.filter(f=>f.id!==a.id)};return R(c,o=>{v()}),V(()=>{v(),k()}),(o,e)=>{const a=U,n=D,f=M,E=z;return l(),i("div",Q,[p(a,{pages:L.value},null,8,["pages"]),W,s("div",X,[p(n,{search:c.value,"onUpdate:search":e[0]||(e[0]=r=>c.value=r)},null,8,["search"]),p(f,{loading:t.value,click:S,text:"Save changes",color:"success",icon:I(j)},null,8,["loading","icon"])]),s("div",Y,[P(s("div",Z,[p(E,{loading:t.value},null,8,["loading"])],512),[[$,t.value]]),P(s("div",ee,[s("table",se,[s("thead",te,[s("tr",oe,[ae,(l(!0),i(g,null,y(d.value,r=>(l(),i("th",{class:"px-4 py-2 text-left uppercase font-semibold",key:r.id},B(r.name),1))),128))])]),s("tbody",null,[(l(!0),i(g,null,y(q.value,(r,N)=>(l(),i("tr",{key:N},[s("td",ne,[s("div",re,[s("div",le,[s("p",null,B(r.display_name),1)])])]),(l(!0),i(g,null,y(d.value,(w,T)=>(l(),i("td",{class:"border px-4 py-2",key:T},[s("input",{type:"checkbox",checked:w.privileges.filter(h=>h.name==r.name).length>0,class:"mr-2 leading-tight",onChange:h=>A(h,w,r)},null,40,ie)]))),128))]))),128))])])],512),[[$,!t.value]])])])}}});export{Be as default};