import{_ as Y}from"./u_i5tT18.js";import{a as P,u as I,l as R,m as l,b as D,e as $,f as e,n as a,g as t,p as T,_ as M,i as X,v as N,t as S,F as J,j as Q,k as W,d as ee,r as C,w as te,c as oe,o as se}from"./CgCt1uig.js";import{_ as G}from"./CfpL-cj9.js";import{e as B}from"./C7nrlxI_.js";import{r as le,e as k,f as b,h as ne}from"./DDP8Pd40.js";import{r as j}from"./CosnS5_S.js";import{r as K}from"./BiLmvBTn.js";import{S as q,h as F,Y as A,G as E,V as U}from"./BBi4X6kY.js";import{_ as ae}from"./D5NS-hCo.js";import{r as ie,a as O}from"./9jRWjONT.js";import{r as ce}from"./D8JfA7oG.js";import{r as re}from"./BOxnxsxl.js";import{_ as de}from"./DQ0UyYB3.js";import{u as ue}from"./Kt-y9hP3.js";import{P as me}from"./Bf5grz7u.js";import"./DAatDIeb.js";import"./CDGutsna.js";import"./22U_Ornm.js";import"./DDaZZI9g.js";import"./q9WmgNLv.js";const pe={components:{TransitionRoot:q,TransitionChild:F,Dialog:A,DialogPanel:E,DialogTitle:U,XMarkIcon:j},data(){return{addIcon:le,show:!1,saveIcon:K,name:"",loading:!1,cookie:P("token"),rawPrivileges:new Array,privileges:new Array,previlegesSelected:new Array}},methods:{async init(){this.handleClick();const r={route:k.privileges,method:"GET",token:`${this.cookie}`},{data:o,error:i}=await b(r);o.value&&(this.rawPrivileges=o.value,o.value.map(c=>{this.privileges.push(c.display_name)})),i.value&&console.error(i.value)},async submitForm(){this.loading=!0;let r=new Array;this.previlegesSelected.map(s=>{this.rawPrivileges.map(n=>{s.name===n.name&&this.privileges.push(n.id)})});const o={route:k.roles,method:"POST",token:`${this.cookie}`,body:{name:this.name,privileges:r}},{data:i,error:c}=await b(o);i.value&&(this.handleClick(),I().$toast.success("Role created successfully!"),this.loading=!1,this.$emit("update",!0)),c.value&&(this.handleClick(),I().$toast.error(B),this.loading=!1,console.error(c.value))},clearForm(){this.$formkit.reset("submitForm")},handleClick(){this.show=!this.show}}},_e=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),fe={class:"fixed inset-0 overflow-y-auto"},he={class:"flex min-h-full items-center justify-center p-4 text-center"},ve={class:"border-b px-3 py-3 flex items-center justify-between"},ge={class:"mt-2 space-y-3"},xe={class:"w-full flex items-center px-5"},ye={class:"w-full flex flex-col space-y-2"},we={class:"w-full flex flex-col space-y-2 px-5 pb-36"},ke=t("label",{class:"font-medium"},"Permissions",-1),be={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Ce(r,o,i,c,s,n){const _=M,u=l("TransitionChild"),f=l("DialogTitle"),x=l("XMarkIcon"),m=l("FormKit"),g=l("multi-select"),d=G,h=l("DialogPanel"),p=l("Dialog"),v=l("TransitionRoot");return D(),$("div",null,[e(_,{click:n.init,text:"Create role",color:"success",icon:s.addIcon},null,8,["click","icon"]),e(v,{appear:"",show:s.show,as:"template"},{default:a(()=>[e(p,{as:"div",class:"relative z-10"},{default:a(()=>[e(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[_e]),_:1}),t("div",fe,[t("div",he,[e(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[e(h,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:a(()=>[t("div",ve,[e(f,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:a(()=>[T(" Create role ")]),_:1}),t("button",{onClick:o[0]||(o[0]=(...y)=>n.handleClick&&n.handleClick(...y))},[e(x,{class:"w-5 h-5"})])]),e(m,{type:"form",id:"submitForm","submit-label":"Update",onSubmit:n.submitForm,actions:!1},{default:a(({value:y})=>[t("div",ge,[t("div",xe,[t("div",ye,[e(m,{type:"text",label:"Name",validation:"required",modelValue:s.name,"onUpdate:modelValue":o[1]||(o[1]=w=>s.name=w)},null,8,["modelValue"])])]),t("div",we,[ke,e(g,{style:{"--ms-max-height":"none !important"},modelValue:s.previlegesSelected,"onUpdate:modelValue":o[2]||(o[2]=w=>s.previlegesSelected=w),options:s.privileges,mode:"tags",required:"",clear:"",searchable:"",class:"focus:ring-none fcus:border-none focus:outline-none multiselect-green"},null,8,["modelValue","options"])])]),t("div",be,[e(d,{type:"button",click:()=>n.clearForm(),text:"Clear form"},null,8,["click"]),e(_,{loading:s.loading,type:"submit",click:()=>{},color:"success",icon:s.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const De=R(pe,[["render",Ce]]),$e={components:{TransitionRoot:q,TransitionChild:F,Dialog:A,DialogPanel:E,DialogTitle:U,XMarkIcon:j},data(){return{viewIcon:ie,show:!1,editIcon:O,moment:ne,cookie:P("token"),details:{name:"",privileges:[{id:0,display_name:""}]},loading:!1}},props:{data:{type:Object,required:!0}},methods:{async init(){this.handleClick(),this.loading=!0;const r={route:`${k.roles}/${this.data.id}`,method:"GET",token:`${this.cookie}`},{data:o,error:i,pending:c}=await b(r);this.loading=c,o.value&&(this.details=o.value,this.loading=!1),i.value&&(console.error(i.value),this.loading=!1)},handleClick(){this.show=!this.show}}},Z="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%2016.5C18%2018.9862%2015.9862%2021%2013.5%2021C11.0138%2021%209%2018.9862%209%2016.5C9%2014.0138%2011.0138%2012%2013.5%2012C15.9862%2012%2018%2014.0138%2018%2016.5Z'%20fill='%23333333'/%3e%3cpath%20d='M4%2028.3333C4%2024.7867%2010.3294%2023%2013.5%2023C16.6706%2023%2023%2024.7867%2023%2028.3333V36H4V28.3333Z'%20fill='%23333333'/%3e%3cpath%20d='M39%2016.5C39%2018.9862%2036.9863%2021%2034.5%2021C32.0138%2021%2030%2018.9862%2030%2016.5C30%2014.0138%2032.0138%2012%2034.5%2012C36.9863%2012%2039%2014.0138%2039%2016.5Z'%20fill='%23333333'/%3e%3cpath%20d='M27%2015C27%2016.6575%2025.6575%2018%2024%2018C22.3425%2018%2021%2016.6575%2021%2015C21%2013.3425%2022.3425%2012%2024%2012C25.6575%2012%2027%2013.3425%2027%2015Z'%20fill='%23333333'/%3e%3cpath%20d='M25%2028.3333C25%2024.7867%2031.3294%2023%2034.5%2023C37.6706%2023%2044%2024.7867%2044%2028.3333V36H25V28.3333Z'%20fill='%23333333'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.7508%2022.185C28.4839%2022.2831%2028.2206%2022.3873%2027.9625%2022.4975C26.7914%2022.998%2025.6088%2023.6741%2024.69%2024.5785C24.444%2024.8208%2024.2105%2025.0864%2024%2025.375C23.7895%2025.0864%2023.556%2024.8208%2023.3099%2024.5785C22.3912%2023.6741%2021.2085%2022.998%2020.0374%2022.4975C19.7794%2022.3873%2019.5161%2022.2831%2019.2491%2022.185C20.7717%2021.3961%2022.7298%2021%2024%2021C25.2701%2021%2027.2282%2021.3961%2028.7508%2022.185Z'%20fill='%23333333'/%3e%3c/svg%3e",Te=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Ie={class:"fixed inset-0 overflow-y-auto"},Ve={class:"flex min-h-full items-center justify-center p-4 text-center"},Pe={class:"border-b px-3 py-3 flex items-center justify-between"},Se=t("img",{src:Z,class:"w-8 h-8 mr-2"},null,-1),Re={class:"flex items-center justify-center mx-auto my-20"},Me={class:"space-y-3 px-5 py-5"},je={class:"w-full flex flex-col space-y-1"},qe=t("label",{class:"font-semibold text-lg"},"Name",-1),Fe={class:"underline"},Ae={class:"w-full flex flex-col space-y-1"},Ee=t("label",{class:"font-semibold text-lg"},"Permissions",-1);function Ue(r,o,i,c,s,n){const _=M,u=l("TransitionChild"),f=l("DialogTitle"),x=l("XMarkIcon"),m=W,g=l("DialogPanel"),d=l("Dialog"),h=l("TransitionRoot");return D(),$("div",null,[e(_,{click:n.init,color:"primary",text:"View",icon:s.viewIcon},null,8,["click","icon"]),e(h,{appear:"",show:s.show,as:"template"},{default:a(()=>[e(d,{as:"div",class:"relative z-10"},{default:a(()=>[e(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[Te]),_:1}),t("div",Ie,[t("div",Ve,[e(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[e(g,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:a(()=>[t("div",Pe,[e(f,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:a(()=>[Se,T(" View role ")]),_:1}),t("button",{onClick:o[0]||(o[0]=(...p)=>n.handleClick&&n.handleClick(...p))},[e(x,{class:"w-5 h-5"})])]),X(t("div",Re,[e(m,{loading:s.loading},null,8,["loading"])],512),[[N,s.loading]]),X(t("div",Me,[t("div",je,[qe,t("p",Fe,S(s.details.name),1)]),t("div",Ae,[Ee,(D(!0),$(J,null,Q(s.details.privileges,(p,v)=>(D(),$("p",{key:v,class:"underline"},S(p.display_name),1))),128))])],512),[[N,!s.loading]])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Be=R($e,[["render",Ue]]),Xe={components:{TransitionRoot:q,TransitionChild:F,Dialog:A,DialogPanel:E,DialogTitle:U,XMarkIcon:j},data(){return{editIcon:O,show:!1,saveIcon:K,name:this.data.name,loading:!1,cookie:P("token"),rawPrivileges:new Array,privileges:new Array,previlegesSelected:new Array}},props:{data:{type:Object,required:!0}},created(){this.loadPrivileges()},methods:{async loadPrivileges(){const r={route:k.privileges,method:"GET",token:`${this.cookie}`},{data:o,error:i}=await b(r);o.value&&(this.rawPrivileges=o.value,o.value.map(c=>{this.privileges.push(c.display_name)})),i.value&&console.error(i.value)},async init(){this.handleClick();const r={route:`${k.roles}/${this.data.id}`,method:"GET",token:`${this.cookie}`},{data:o,error:i}=await b(r);o.value&&o.value.privileges.map(c=>{this.previlegesSelected.push(c.display_name)}),i.value&&console.error(i.value)},async submitForm(){this.loading=!0;const r=this.rawPrivileges.filter(n=>this.previlegesSelected.includes(n.display_name)).map(n=>n.id),o={route:`${k.roles}/${this.data.id}`,method:"PUT",token:`${this.cookie}`,body:{name:this.name,privileges:r}},{data:i,error:c,pending:s}=await b(o);this.loading=s,i.value&&(this.handleClick(),this.previlegesSelected=new Array,I().$toast.success("Role updated successfully!"),this.loading=!1,this.$emit("update",!0)),c.value&&(this.handleClick(),console.error(c.value),I().$toast.success(B),this.loading=!1)},handleClick(){this.show=!this.show}}},Ne=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Ge={class:"fixed inset-0 overflow-y-auto"},Ke={class:"flex min-h-full items-center justify-center p-4 text-center"},Oe={class:"border-b px-3 py-3 flex items-center justify-between"},Ze=t("img",{src:Z,class:"w-8 h-8 mr-2"},null,-1),ze={class:"mt-2 space-y-3"},He={class:"w-full flex items-center px-5"},Le={class:"w-full flex flex-col space-y-2"},Ye={class:"w-full flex flex-col space-y-2 px-5 pb-36 mt-3"},Je=t("label",{class:"font-medium"},"Permissions",-1),Qe={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function We(r,o,i,c,s,n){const _=M,u=l("TransitionChild"),f=l("DialogTitle"),x=l("XMarkIcon"),m=l("FormKit"),g=l("multi-select"),d=G,h=l("DialogPanel"),p=l("Dialog"),v=l("TransitionRoot");return D(),$("div",null,[e(_,{click:n.init,text:"Edit",color:"success",icon:s.editIcon},null,8,["click","icon"]),e(v,{appear:"",show:s.show,as:"template"},{default:a(()=>[e(p,{as:"div",class:"relative z-10"},{default:a(()=>[e(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[Ne]),_:1}),t("div",Ge,[t("div",Ke,[e(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[e(h,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:a(()=>[t("div",Oe,[e(f,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:a(()=>[Ze,T(" Edit role ")]),_:1}),t("button",{onClick:o[0]||(o[0]=(...y)=>n.handleClick&&n.handleClick(...y))},[e(x,{class:"w-5 h-5"})])]),e(m,{type:"form","submit-label":"Update",onSubmit:n.submitForm,actions:!1},{default:a(({value:y})=>[t("div",ze,[t("div",He,[t("div",Le,[e(m,{type:"text",label:"Name",validation:"required",modelValue:s.name,"onUpdate:modelValue":o[1]||(o[1]=w=>s.name=w)},null,8,["modelValue"])])])]),t("div",Ye,[Je,e(g,{style:{"--ms-max-height":"none !important"},modelValue:s.previlegesSelected,"onUpdate:modelValue":o[2]||(o[2]=w=>s.previlegesSelected=w),options:s.privileges,mode:"tags",required:"",clear:"",searchable:"",class:"focus:ring-none fcus:border-none focus:outline-none multiselect-green"},null,8,["modelValue","options"])]),t("div",Qe,[e(d,{text:"Clear form"}),e(_,{loading:s.loading,type:"submit",click:()=>{},color:"success",icon:s.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const et=R(Xe,[["render",We]]),tt={components:{TransitionRoot:q,TransitionChild:F,Dialog:A,DialogPanel:E,DialogTitle:U,XMarkIcon:j,ExclamationTriangleIcon:ce},data(){return{show:!1,deleteIcon:re,loading:!1,reason:"",cookie:P("token")}},props:{data:{type:Object,required:!0}},methods:{async deleteData(r){this.loading=!0;const o={route:`${k.roles}/${r}`,method:"DELETE",token:`${this.cookie}`,body:{retired_reason:this.reason}},{data:i,error:c,pending:s}=await b(o);this.loading=s,i.value&&(this.handleClick(),I().$toast.success(`${i.value.message}`),this.loading=!1,this.$emit("update",!0)),c.value&&(console.error(i.value),this.loading=!1,I().$toast.error(B))},handleClick(){this.show=!this.show}}},ot=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),st={class:"fixed inset-0 overflow-y-auto"},lt={class:"flex min-h-full items-center justify-center p-4 text-center"},nt={class:"border-b px-3 py-3 flex items-center justify-between"},at={class:"mt-2 space-y-3 px-5"},it={class:"rounded px-2 py-2"},ct={class:"font-semibold text-red-500"},rt={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function dt(r,o,i,c,s,n){const _=M,u=l("TransitionChild"),f=l("ExclamationTriangleIcon"),x=l("DialogTitle"),m=l("XMarkIcon"),g=l("FormKit"),d=l("DialogPanel"),h=l("Dialog"),p=l("TransitionRoot");return D(),$("div",null,[e(_,{click:n.handleClick,color:"error",text:"Delete",icon:s.deleteIcon},null,8,["click","icon"]),e(p,{appear:"",show:s.show,as:"template"},{default:a(()=>[e(h,{as:"div",class:"relative z-10"},{default:a(()=>[e(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[ot]),_:1}),t("div",st,[t("div",lt,[e(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[e(d,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:a(()=>[t("div",nt,[e(x,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:a(()=>[e(f,{class:"h-5 w-5 mr-2"}),T(" Confirm delete ")]),_:1}),t("button",{onClick:o[0]||(o[0]=(...v)=>n.handleClick&&n.handleClick(...v))},[e(m,{class:"w-5 h-5"})])]),e(g,{type:"form","submit-label":"Update",onSubmit:o[2]||(o[2]=v=>n.deleteData(i.data.id)),actions:!1},{default:a(({value:v})=>[t("div",at,[t("div",it,[T(" Do you really want to delete "),t("span",ct,S(i.data.name),1),T("? Note that once this action is completed, it can not be undone ")]),e(g,{type:"textarea",label:"Reason",validation:"required",modelValue:s.reason,"onUpdate:modelValue":o[1]||(o[1]=y=>s.reason=y)},null,8,["modelValue"])]),t("div",rt,[e(_,{loading:s.loading,type:"submit",click:()=>{},color:"error",icon:s.deleteIcon,text:"Delete"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const ut=R(tt,[["render",dt]]),mt={class:"px-5 py-5"},pt={class:"flex items-center justify-between py-5"},_t={class:"text-2xl font-semibold"},ft={class:"flex items-center justify-between py-5"},ht=t("div",null,null,-1),vt={class:"flex items-center space-x-3"},gt={class:"py-2 flex items-center space-x-2"},Ut=ee({__name:"roles",setup(r){ue({title:`${me.name.toUpperCase()} - Roles`});const o=C("Roles"),i=C([{name:"Home",link:"/home"},{name:"Access Controls",link:"#"}]),c=C([]),s=P("token"),n=C([{text:"id",value:"id",sortable:!0},{text:"name",value:"name",sortable:!0},{text:"actions",value:"actions"}]),_=C(""),u=C(""),f=C(!1),x=d=>{_.value=d,u.value=d},m=async()=>{f.value=!0;const d={route:k.roles,method:"GET",token:`${s.value}`},{data:h,error:p,pending:v}=await b(d);f.value=v,h.value&&(c.value=h.value,f.value=!1),p.value&&(console.error(p.value),f.value=!1)};te(u,d=>{x(d)});const g=oe(()=>c.value.map(d=>({id:d.id,name:d.name})));return se(()=>{m()}),(d,h)=>{const p=Y,v=De,y=ae,w=Be,z=et,H=ut,L=de;return D(),$("div",mt,[e(p,{pages:i.value},null,8,["pages"]),t("div",pt,[t("h3",_t,S(o.value),1),e(v)]),t("div",ft,[ht,t("div",vt,[e(y,{search:u.value,"onUpdate:search":h[0]||(h[0]=V=>u.value=V)},null,8,["search"])])]),e(L,{headers:n.value,data:g.value,loading:f.value,"search-value":_.value,"search-field":"name"},{actions:a(({item:V})=>[t("div",gt,[e(w,{data:V,onUpdate:m},null,8,["data"]),e(z,{data:V,onUpdate:m},null,8,["data"]),e(H,{data:V,onUpdate:m},null,8,["data"])])]),_:1},8,["headers","data","loading","search-value"])])}}});export{Ut as default};