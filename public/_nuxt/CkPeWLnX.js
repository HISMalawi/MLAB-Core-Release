import{_ as Y}from"./ClfMiJjE.js";import{S,p as M,Y as E,G as j,V as q,q as A,s as J,a as P,l as k,m as b,u as I,E as B,x as F,y as l,b as D,e as T,f as t,z as a,g as o,j as $,_ as U,A as Q,B as N,C as W,i as X,v as G,t as R,F as ee,k as te,n as oe,D as se,d as le,r as C,w as ne,c as ae,o as ie}from"./CixClB4B.js";import{_ as O}from"./cY2JJaup.js";import{r as K}from"./Cunjaw2h.js";import{_ as re}from"./gABIlpKP.js";import{r as ce}from"./D3svI_Lt.js";import{_ as de}from"./C53nXZ5b.js";import{P as ue}from"./BlxtFnsa.js";import{u as me}from"./CxhUJg9t.js";import"./Byfr2sQ2.js";import"./DrXEl-8J.js";const pe={components:{TransitionRoot:S,TransitionChild:M,Dialog:E,DialogPanel:j,DialogTitle:q,XMarkIcon:A},data(){return{addIcon:J,show:!1,saveIcon:K,name:"",loading:!1,cookie:P("token"),rawPrivileges:new Array,privileges:new Array,previlegesSelected:new Array}},methods:{async init(){this.handleClick();const c={route:k.privileges,method:"GET",token:`${this.cookie}`},{data:e,error:i}=await b(c);e.value&&(this.rawPrivileges=e.value,e.value.map(r=>{this.privileges.push(r.display_name)})),i.value&&console.error(i.value)},async submitForm(){this.loading=!0;let c=new Array;this.previlegesSelected.map(s=>{this.rawPrivileges.map(n=>{s.name===n.name&&this.privileges.push(n.id)})});const e={route:k.roles,method:"POST",token:`${this.cookie}`,body:{name:this.name,privileges:c}},{data:i,error:r}=await b(e);i.value&&(this.handleClick(),I().$toast.success("Role created successfully!"),this.loading=!1,this.$emit("update",!0)),r.value&&(this.handleClick(),I().$toast.error(B),this.loading=!1,console.error(r.value))},clearForm(){this.$formkit.reset("submitForm")},handleClick(){this.show=!this.show}}},fe={class:"fixed inset-0 overflow-y-auto"},_e={class:"flex min-h-full items-center justify-center p-4 text-center"},he={class:"border-b px-3 py-3 flex items-center justify-between"},ve={class:"mt-2 space-y-3"},ge={class:"w-full flex items-center px-5"},xe={class:"w-full flex flex-col space-y-2"},ye={class:"w-full flex flex-col space-y-2 px-5 pb-36"},we={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function ke(c,e,i,r,s,n){const _=U,u=l("TransitionChild"),h=l("DialogTitle"),x=l("XMarkIcon"),p=l("FormKit"),g=l("multi-select"),d=O,m=l("DialogPanel"),f=l("Dialog"),v=l("TransitionRoot");return D(),T("div",null,[t(_,{click:n.init,text:"Create role",color:"success",icon:s.addIcon},null,8,["click","icon"]),t(v,{appear:"",show:s.show,as:"template"},{default:a(()=>[t(f,{as:"div",class:"relative z-10"},{default:a(()=>[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>e[3]||(e[3]=[o("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),o("div",fe,[o("div",_e,[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[t(m,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:a(()=>[o("div",he,[t(h,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:a(()=>e[4]||(e[4]=[$(" Create role ")])),_:1}),o("button",{onClick:e[0]||(e[0]=(...y)=>n.handleClick&&n.handleClick(...y))},[t(x,{class:"w-5 h-5"})])]),t(p,{type:"form",id:"submitForm","submit-label":"Update",onSubmit:n.submitForm,actions:!1},{default:a(({value:y})=>[o("div",ve,[o("div",ge,[o("div",xe,[t(p,{type:"text",label:"Name",validation:"required",modelValue:s.name,"onUpdate:modelValue":e[1]||(e[1]=w=>s.name=w)},null,8,["modelValue"])])]),o("div",ye,[e[5]||(e[5]=o("label",{class:"font-medium"},"Permissions",-1)),t(g,{style:{"--ms-max-height":"none !important"},modelValue:s.previlegesSelected,"onUpdate:modelValue":e[2]||(e[2]=w=>s.previlegesSelected=w),options:s.privileges,mode:"tags",required:"",clear:"",searchable:"",class:"focus:ring-none fcus:border-none focus:outline-none multiselect-green"},null,8,["modelValue","options"])])]),o("div",we,[t(d,{type:"button",click:()=>n.clearForm(),text:"Clear form"},null,8,["click"]),t(_,{loading:s.loading,type:"submit",click:()=>{},color:"success",icon:s.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const be=F(pe,[["render",ke]]),Ce={components:{TransitionRoot:S,TransitionChild:M,Dialog:E,DialogPanel:j,DialogTitle:q,XMarkIcon:A},data(){return{viewIcon:Q,show:!1,editIcon:N,moment:W,cookie:P("token"),details:{name:"",privileges:[{id:0,display_name:""}]},loading:!1}},props:{data:{type:Object,required:!0}},methods:{async init(){this.handleClick(),this.loading=!0;const c={route:`${k.roles}/${this.data.id}`,method:"GET",token:`${this.cookie}`},{data:e,error:i,pending:r}=await b(c);this.loading=r,e.value&&(this.details=e.value,this.loading=!1),i.value&&(console.error(i.value),this.loading=!1)},handleClick(){this.show=!this.show}}},Z="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%2016.5C18%2018.9862%2015.9862%2021%2013.5%2021C11.0138%2021%209%2018.9862%209%2016.5C9%2014.0138%2011.0138%2012%2013.5%2012C15.9862%2012%2018%2014.0138%2018%2016.5Z'%20fill='%23333333'/%3e%3cpath%20d='M4%2028.3333C4%2024.7867%2010.3294%2023%2013.5%2023C16.6706%2023%2023%2024.7867%2023%2028.3333V36H4V28.3333Z'%20fill='%23333333'/%3e%3cpath%20d='M39%2016.5C39%2018.9862%2036.9863%2021%2034.5%2021C32.0138%2021%2030%2018.9862%2030%2016.5C30%2014.0138%2032.0138%2012%2034.5%2012C36.9863%2012%2039%2014.0138%2039%2016.5Z'%20fill='%23333333'/%3e%3cpath%20d='M27%2015C27%2016.6575%2025.6575%2018%2024%2018C22.3425%2018%2021%2016.6575%2021%2015C21%2013.3425%2022.3425%2012%2024%2012C25.6575%2012%2027%2013.3425%2027%2015Z'%20fill='%23333333'/%3e%3cpath%20d='M25%2028.3333C25%2024.7867%2031.3294%2023%2034.5%2023C37.6706%2023%2044%2024.7867%2044%2028.3333V36H25V28.3333Z'%20fill='%23333333'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.7508%2022.185C28.4839%2022.2831%2028.2206%2022.3873%2027.9625%2022.4975C26.7914%2022.998%2025.6088%2023.6741%2024.69%2024.5785C24.444%2024.8208%2024.2105%2025.0864%2024%2025.375C23.7895%2025.0864%2023.556%2024.8208%2023.3099%2024.5785C22.3912%2023.6741%2021.2085%2022.998%2020.0374%2022.4975C19.7794%2022.3873%2019.5161%2022.2831%2019.2491%2022.185C20.7717%2021.3961%2022.7298%2021%2024%2021C25.2701%2021%2027.2282%2021.3961%2028.7508%2022.185Z'%20fill='%23333333'/%3e%3c/svg%3e",De={class:"fixed inset-0 overflow-y-auto"},Te={class:"flex min-h-full items-center justify-center p-4 text-center"},$e={class:"border-b px-3 py-3 flex items-center justify-between"},Ie={class:"flex items-center justify-center mx-auto my-20"},Ve={class:"space-y-3 px-5 py-5"},Pe={class:"w-full flex flex-col space-y-1"},Re={class:"underline"},Se={class:"w-full flex flex-col space-y-1"};function Me(c,e,i,r,s,n){const _=U,u=l("TransitionChild"),h=l("DialogTitle"),x=l("XMarkIcon"),p=oe,g=l("DialogPanel"),d=l("Dialog"),m=l("TransitionRoot");return D(),T("div",null,[t(_,{click:n.init,color:"primary",text:"View",icon:s.viewIcon},null,8,["click","icon"]),t(m,{appear:"",show:s.show,as:"template"},{default:a(()=>[t(d,{as:"div",class:"relative z-10"},{default:a(()=>[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>e[1]||(e[1]=[o("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),o("div",De,[o("div",Te,[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[t(g,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:a(()=>[o("div",$e,[t(h,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:a(()=>e[2]||(e[2]=[o("img",{src:Z,class:"w-8 h-8 mr-2"},null,-1),$(" View role ")])),_:1}),o("button",{onClick:e[0]||(e[0]=(...f)=>n.handleClick&&n.handleClick(...f))},[t(x,{class:"w-5 h-5"})])]),X(o("div",Ie,[t(p,{loading:s.loading},null,8,["loading"])],512),[[G,s.loading]]),X(o("div",Ve,[o("div",Pe,[e[3]||(e[3]=o("label",{class:"font-semibold text-lg"},"Name",-1)),o("p",Re,R(s.details.name),1)]),o("div",Se,[e[4]||(e[4]=o("label",{class:"font-semibold text-lg"},"Permissions",-1)),(D(!0),T(ee,null,te(s.details.privileges,(f,v)=>(D(),T("p",{key:v,class:"underline"},R(f.display_name),1))),128))])],512),[[G,!s.loading]])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Ee=F(Ce,[["render",Me]]),je={components:{TransitionRoot:S,TransitionChild:M,Dialog:E,DialogPanel:j,DialogTitle:q,XMarkIcon:A},data(){return{editIcon:N,show:!1,saveIcon:K,name:this.data.name,loading:!1,cookie:P("token"),rawPrivileges:new Array,privileges:new Array,previlegesSelected:new Array}},props:{data:{type:Object,required:!0}},created(){this.loadPrivileges()},methods:{async loadPrivileges(){const c={route:k.privileges,method:"GET",token:`${this.cookie}`},{data:e,error:i}=await b(c);e.value&&(this.rawPrivileges=e.value,e.value.map(r=>{this.privileges.push(r.display_name)})),i.value&&console.error(i.value)},async init(){this.handleClick();const c={route:`${k.roles}/${this.data.id}`,method:"GET",token:`${this.cookie}`},{data:e,error:i}=await b(c);e.value&&e.value.privileges.map(r=>{this.previlegesSelected.push(r.display_name)}),i.value&&console.error(i.value)},async submitForm(){this.loading=!0;const c=this.rawPrivileges.filter(n=>this.previlegesSelected.includes(n.display_name)).map(n=>n.id),e={route:`${k.roles}/${this.data.id}`,method:"PUT",token:`${this.cookie}`,body:{name:this.name,privileges:c}},{data:i,error:r,pending:s}=await b(e);this.loading=s,i.value&&(this.handleClick(),this.previlegesSelected=new Array,I().$toast.success("Role updated successfully!"),this.loading=!1,this.$emit("update",!0)),r.value&&(this.handleClick(),console.error(r.value),I().$toast.success(B),this.loading=!1)},handleClick(){this.show=!this.show}}},qe={class:"fixed inset-0 overflow-y-auto"},Ae={class:"flex min-h-full items-center justify-center p-4 text-center"},Fe={class:"border-b px-3 py-3 flex items-center justify-between"},Ue={class:"mt-2 space-y-3"},Be={class:"w-full flex items-center px-5"},Xe={class:"w-full flex flex-col space-y-2"},Ge={class:"w-full flex flex-col space-y-2 px-5 pb-36 mt-3"},Ne={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Oe(c,e,i,r,s,n){const _=U,u=l("TransitionChild"),h=l("DialogTitle"),x=l("XMarkIcon"),p=l("FormKit"),g=l("multi-select"),d=O,m=l("DialogPanel"),f=l("Dialog"),v=l("TransitionRoot");return D(),T("div",null,[t(_,{click:n.init,text:"Edit",color:"success",icon:s.editIcon},null,8,["click","icon"]),t(v,{appear:"",show:s.show,as:"template"},{default:a(()=>[t(f,{as:"div",class:"relative z-10"},{default:a(()=>[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>e[3]||(e[3]=[o("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),o("div",qe,[o("div",Ae,[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[t(m,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:a(()=>[o("div",Fe,[t(h,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:a(()=>e[4]||(e[4]=[o("img",{src:Z,class:"w-8 h-8 mr-2"},null,-1),$(" Edit role ")])),_:1}),o("button",{onClick:e[0]||(e[0]=(...y)=>n.handleClick&&n.handleClick(...y))},[t(x,{class:"w-5 h-5"})])]),t(p,{type:"form","submit-label":"Update",onSubmit:n.submitForm,actions:!1},{default:a(({value:y})=>[o("div",Ue,[o("div",Be,[o("div",Xe,[t(p,{type:"text",label:"Name",validation:"required",modelValue:s.name,"onUpdate:modelValue":e[1]||(e[1]=w=>s.name=w)},null,8,["modelValue"])])])]),o("div",Ge,[e[5]||(e[5]=o("label",{class:"font-medium"},"Permissions",-1)),t(g,{style:{"--ms-max-height":"none !important"},modelValue:s.previlegesSelected,"onUpdate:modelValue":e[2]||(e[2]=w=>s.previlegesSelected=w),options:s.privileges,mode:"tags",required:"",clear:"",searchable:"",class:"focus:ring-none fcus:border-none focus:outline-none multiselect-green"},null,8,["modelValue","options"])]),o("div",Ne,[t(d,{text:"Clear form"}),t(_,{loading:s.loading,type:"submit",click:()=>{},color:"success",icon:s.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Ke=F(je,[["render",Oe]]),Ze={components:{TransitionRoot:S,TransitionChild:M,Dialog:E,DialogPanel:j,DialogTitle:q,XMarkIcon:A,ExclamationTriangleIcon:se},data(){return{show:!1,deleteIcon:ce,loading:!1,reason:"",cookie:P("token")}},props:{data:{type:Object,required:!0}},methods:{async deleteData(c){this.loading=!0;const e={route:`${k.roles}/${c}`,method:"DELETE",token:`${this.cookie}`,body:{retired_reason:this.reason}},{data:i,error:r,pending:s}=await b(e);this.loading=s,i.value&&(this.handleClick(),I().$toast.success(`${i.value.message}`),this.loading=!1,this.$emit("update",!0)),r.value&&(console.error(i.value),this.loading=!1,I().$toast.error(B))},handleClick(){this.show=!this.show}}},ze={class:"fixed inset-0 overflow-y-auto"},He={class:"flex min-h-full items-center justify-center p-4 text-center"},Le={class:"border-b px-3 py-3 flex items-center justify-between"},Ye={class:"mt-2 space-y-3 px-5"},Je={class:"rounded px-2 py-2"},Qe={class:"font-semibold text-red-500"},We={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function et(c,e,i,r,s,n){const _=U,u=l("TransitionChild"),h=l("ExclamationTriangleIcon"),x=l("DialogTitle"),p=l("XMarkIcon"),g=l("FormKit"),d=l("DialogPanel"),m=l("Dialog"),f=l("TransitionRoot");return D(),T("div",null,[t(_,{click:n.handleClick,color:"error",text:"Delete",icon:s.deleteIcon},null,8,["click","icon"]),t(f,{appear:"",show:s.show,as:"template"},{default:a(()=>[t(m,{as:"div",class:"relative z-10"},{default:a(()=>[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>e[3]||(e[3]=[o("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),o("div",ze,[o("div",He,[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[t(d,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:a(()=>[o("div",Le,[t(x,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:a(()=>[t(h,{class:"h-5 w-5 mr-2"}),e[4]||(e[4]=$(" Confirm delete "))]),_:1}),o("button",{onClick:e[0]||(e[0]=(...v)=>n.handleClick&&n.handleClick(...v))},[t(p,{class:"w-5 h-5"})])]),t(g,{type:"form","submit-label":"Update",onSubmit:e[2]||(e[2]=v=>n.deleteData(i.data.id)),actions:!1},{default:a(({value:v})=>[o("div",Ye,[o("div",Je,[e[5]||(e[5]=$(" Do you really want to delete ")),o("span",Qe,R(i.data.name),1),e[6]||(e[6]=$("? Note that once this action is completed, it can not be undone "))]),t(g,{type:"textarea",label:"Reason",validation:"required",modelValue:s.reason,"onUpdate:modelValue":e[1]||(e[1]=y=>s.reason=y)},null,8,["modelValue"])]),o("div",We,[t(_,{loading:s.loading,type:"submit",click:()=>{},color:"error",icon:s.deleteIcon,text:"Delete"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const tt=F(Ze,[["render",et]]),ot={class:"px-5 py-5"},st={class:"flex items-center justify-between py-5"},lt={class:"text-2xl font-semibold"},nt={class:"flex items-center justify-between py-5"},at={class:"flex items-center space-x-3"},it={class:"py-2 flex items-center space-x-2"},xt=le({__name:"roles",setup(c){me({title:`${ue.name.toUpperCase()} - Roles`});const e=C("Roles"),i=C([{name:"Home",link:"/home"},{name:"Access Controls",link:"#"}]),r=C([]),s=P("token"),n=C([{text:"id",value:"id",sortable:!0},{text:"name",value:"name",sortable:!0},{text:"actions",value:"actions"}]),_=C(""),u=C(""),h=C(!1),x=d=>{_.value=d,u.value=d},p=async()=>{h.value=!0;const d={route:k.roles,method:"GET",token:`${s.value}`},{data:m,error:f,pending:v}=await b(d);h.value=v,m.value&&(r.value=m.value,h.value=!1),f.value&&(console.error(f.value),h.value=!1)};ne(u,d=>{x(d)});const g=ae(()=>r.value.map(d=>({id:d.id,name:d.name})));return ie(()=>{p()}),(d,m)=>{const f=Y,v=be,y=re,w=Ee,z=Ke,H=tt,L=de;return D(),T("div",ot,[t(f,{pages:i.value},null,8,["pages"]),o("div",st,[o("h3",lt,R(e.value),1),t(v)]),o("div",nt,[m[1]||(m[1]=o("div",null,null,-1)),o("div",at,[t(y,{search:u.value,"onUpdate:search":m[0]||(m[0]=V=>u.value=V)},null,8,["search"])])]),t(L,{headers:n.value,data:g.value,loading:h.value,"search-value":_.value,"search-field":"name"},{actions:a(({item:V})=>[o("div",it,[t(w,{data:V,onUpdate:p},null,8,["data"]),t(z,{data:V,onUpdate:p},null,8,["data"]),t(H,{data:V,onUpdate:p},null,8,["data"])])]),_:1},8,["headers","data","loading","search-value"])])}}});export{xt as default};