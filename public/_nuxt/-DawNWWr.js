import{_ as te}from"./D-VwM6QD.js";import{a as E,u as f,l as G,m as y,b as m,e as S,g as s,f as t,n as p,p as L,F as N,j as R,x as C,s as D,_ as z,d as se,r as T,h as l,t as K}from"./Cg5p-McN.js";import{_ as ae}from"./CsQFVusk.js";import{_ as H}from"./CqDTxBUP.js";import{e as g}from"./RKiNshLb.js";import{r as O,e as x,f as b,b as oe}from"./DR38mcEF.js";import{r as M}from"./dK18VoWV.js";import{r as X}from"./aBMXVFc4.js";import{S as Y,h as B,Y as J,G as Q,V as W}from"./D1U45QuX.js";import{_ as ie}from"./B8w-vU7G.js";import{_ as le}from"./DEY2neBq.js";import{a as ne}from"./Cjc4v2I0.js";import{_ as re}from"./ByuBovvP.js";import{u as q}from"./BbrJdZQo.js";import{u as ce}from"./DvxvG7cH.js";import{P as de}from"./C2uaaNo-.js";import"./sm8AiluA.js";import"./BAL5lcly.js";import"./TTHnbI5R.js";import"./84ogm7K5.js";import"./BGlWJtXj.js";import"./CN2A0733.js";import"./Dj-q_rGi.js";import"./CyrOhIst.js";import"./3LKeHVyH.js";import"./D-clyhuy.js";import"./BVCtdeh2.js";import"./Dw3TP4gS.js";import"./BQPGVMrX.js";import"./CGvpn_em.js";const ue={components:{TransitionRoot:Y,TransitionChild:B,Dialog:J,DialogPanel:Q,DialogTitle:W},data(){return{open:!1,loading:!1,saving:!1,cookie:E("token"),disabled:!0,diseases:new Array,testTypes:new Array,selectedTestType:{name:""},items:new Array,plusIcon:O,saveIcon:M,addIcon:O,removeIcon:X,surveillanceItems:new Array}},methods:{adjustVisibility(){this.open=!this.open},addItem(){this.surveillanceItems.push({testType:this.testTypes[0],diseases:this.diseases[0]})},removeItem(o){this.surveillanceItems.splice(o,1)},async loadDiseases(){this.loading=!0;const o={route:x.disease.index,method:"GET",token:`${this.cookie}`},{data:r,error:c,pending:a}=await b(o);return r.value&&(this.diseases=r.value),this.loading=!1,c.value&&(this.loading=!1,f().$toast.error(`${g}`)),{data:r,error:c,pending:a}},async loadTestTypes(){this.adjustVisibility();const o=await this.loadDiseases();this.loading=!0;const r={route:x.testTypes,method:"GET",token:`${this.cookie}`},{data:c,error:a,pending:e}=await b(r);c.value&&(console.log(c.value),this.testTypes=c.value.test_types,this.surveillanceItems.push({testType:this.testTypes[0],diseases:o.data.value[0]})),this.loading=!1,a.value&&(this.loading=!1,f().$toast.error(`${g}`))},async handleSubmitForm(){this.saving=!0;const o=this.surveillanceItems.map(i=>({test_types_id:i.testType.id,diseases_id:i.diseases.id})),r={route:x.surveillance.create,method:"POST",token:`${this.cookie}`,body:{surveillance:{data:o}}},{data:c,pending:a,error:e}=await b(r);this.saving=a,c.value&&(this.closeForm(),f().$toast.success("Surviellance add successfully!"),this.$emit("update",!0),this.saving=!1),e.value&&(f().$toast.error(`${g}`),this.saving=!1)},closeForm(){this.open=!1,this.items=[{test_types_id:"",diseases_id:""}]}}},pe=s("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),me={class:"fixed inset-0 overflow-y-auto"},_e={class:"flex min-h-full items-center justify-center p-4 text-center"},ve={class:"border-b px-3 py-3 flex items-center justify-between"},fe={class:"mt-2 space-y-3 px-5 py-5"},he={class:"w-full col-span-4 flex items-center space-x-3"},ye={class:"w-1/2"},ge=s("label",{for:""},"Test type",-1),xe={class:"w-1/2"},be=s("label",{for:""},"Disease",-1),ke={class:"flex items-center space-x-3 pt-7"},we={class:"mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Te(o,r,c,a,e,i){const u=z,d=y("TransitionChild"),$=y("DialogTitle"),V=y("XMarkIcon"),I=ae,P=H,k=y("FormKit"),j=y("DialogPanel"),A=y("Dialog"),F=y("TransitionRoot");return m(),S("div",null,[s("div",null,[t(u,{text:"Add Surveillance",color:"primary",icon:e.plusIcon,click:i.loadTestTypes},null,8,["icon","click"])]),t(F,{appear:"",show:e.open,as:"template"},{default:p(()=>[t(A,{as:"div",onClose:i.closeForm,class:"relative z-10"},{default:p(()=>[t(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:p(()=>[pe]),_:1}),s("div",me,[s("div",_e,[t(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:p(()=>[t(j,{class:"w-full max-w-4xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:p(()=>[s("div",ve,[t($,{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:p(()=>[L(" Surveillance Setup ")]),_:1}),s("button",{onClick:r[0]||(r[0]=(...h)=>i.adjustVisibility&&i.adjustVisibility(...h))},[t(V,{class:"w-5 h-5"})])]),t(k,{type:"form","submit-label":"Save",onSubmit:i.handleSubmitForm,actions:!1},{default:p(()=>[s("div",fe,[(m(!0),S(N,null,R(e.surveillanceItems,(h,_)=>(m(),S("div",{class:"grid grid-cols-5 gap-2",key:_},[s("div",he,[s("div",ye,[ge,t(I,{items:e.testTypes,"model-value":h.testType},null,8,["items","model-value"])]),s("div",xe,[be,t(I,{items:e.diseases,"model-value":h.diseases},null,8,["items","model-value"])]),s("div",ke,[t(u,{icon:e.addIcon,text:"Add",color:"primary",click:()=>{i.addItem()},type:"button"},null,8,["icon","click"]),e.surveillanceItems.length>1?(m(),C(u,{key:0,icon:e.removeIcon,text:"Remove",color:"error",click:()=>{i.removeItem(_)}},null,8,["icon","click"])):D("",!0)])])]))),128))]),s("div",we,[t(P,{type:"button",text:"Close",click:i.closeForm},null,8,["click"]),t(u,{type:"submit",color:"success",icon:e.saveIcon,click:()=>{},text:"Save",loading:e.saving},null,8,["icon","loading"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const Se=G(ue,[["render",Te]]),$e=s("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Ie={class:"fixed inset-0 overflow-y-auto"},Ce={class:"flex min-h-full items-center justify-center p-4 text-center"},De={class:"border-b px-3 py-3 flex items-center justify-between"},Ve={class:"mt-2 space-y-3 px-5 py-5"},Pe={class:"w-full grid grid-cols-1 gap-1"},je={class:"mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t"},Ae=se({__name:"index",props:{id:{}},emits:["action-completed"],setup(o,{emit:r}){const c=T(!1),a=T(!1),e=E("token");T(!0);const i=T([]),u=T([]),d=T({test_type_id:-1,disease_id:-1}),$=T([{test_types_id:"",diseases_id:""}]),V=o,I=r,P=()=>{k(),j(),c.value=!c.value},k=async()=>{a.value=!0;const _={route:x.disease.index,method:"GET",token:`${e.value}`},n=await b(_);n.data.value&&(i.value=[],i.value.push({label:"- Select from the list",value:""}),n.data.value.map((v,w)=>i.value.push({label:v.name,value:v.id}))),a.value=!1,n.error.value&&(a.value=!1,f().$toast.error(`${g}`))},j=async()=>{a.value=!0;const _={route:x.testTypes,method:"GET",token:`${e.value}`},n=await b(_);n.data.value&&(u.value.push({label:"- Select from the list",value:""}),n.data.value.test_types.map((v,w)=>u.value.push({label:v.name,value:v.id}))),a.value=!1,n.error.value&&(a.value=!1,f().$toast.error(`${g}`))},A=async()=>{a.value=!0;const _={route:`${x.surveillance.edit}/${V.id}`,method:"GET",token:`${e.value}`},n=await b(_);n.data.value&&(d.value.test_type_id=n.data.value.test_types_id,d.value.disease_id=n.data.value.diseases_id,P()),a.value=!1,n.error.value&&(a.value=!1,f().$toast.error(`${g}`))},F=async()=>{a.value=!0;const _={route:x.surveillance.update,method:"PATCH",token:e.value,body:{surveillance:{data:[{diseases_id:d.value.disease_id,test_types_id:d.value.test_type_id}]}}},{data:n,pending:v,error:w}=await b(_);a.value=v,n.value&&(h(),f().$toast.success("Surveillance add successfully!"),I("action-completed",[])),w.value&&(f().$toast.error(`${g}`),a.value=!1)},h=()=>{c.value=a.value=!1,$.value=[{test_types_id:d.value.test_type_id,diseases_id:d.value.disease_id}]};return(_,n)=>{const v=z,w=y("FormKit"),Z=H;return m(),S("div",null,[s("div",null,[t(v,{text:"Edit",color:"primary",icon:l(ne),click:A},null,8,["icon"])]),t(l(Y),{appear:"",show:l(c),as:"template"},{default:p(()=>[t(l(J),{as:"div",onClose:h,class:"relative z-10"},{default:p(()=>[t(l(B),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:p(()=>[$e]),_:1}),s("div",Ie,[s("div",Ce,[t(l(B),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:p(()=>[t(l(Q),{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:p(()=>[s("div",De,[t(l(W),{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:p(()=>[L(K("Edit Surveillance Details"))]),_:1}),s("button",{onClick:h},[t(l(X),{class:"w-5 h-5"})])]),t(w,{type:"form","submit-label":"Save",onSubmit:F,actions:!1},{default:p(()=>[s("div",Ve,[s("div",Pe,[(m(!0),S(N,null,R(l($),(Ne,ee)=>(m(),S("div",{class:"relative shadow-none border-2 p-3 mb-3 border-gray-100 text-left box-border space-x-4 grid grid-cols-4 rounded",key:ee},[l(u).length?(m(),C(w,{key:0,type:"select",label:"Test type",modelValue:l(d).test_type_id,"onUpdate:modelValue":n[0]||(n[0]=U=>l(d).test_type_id=U),placeholder:"Select test type",validation:"required",options:l(u),class:"w-full"},null,8,["modelValue","options"])):D("",!0),l(i).length?(m(),C(w,{key:1,type:"select",label:"Disease",modelValue:l(d).disease_id,"onUpdate:modelValue":n[1]||(n[1]=U=>l(d).disease_id=U),placeholder:"Select disease",validation:"required",options:l(i)},null,8,["modelValue","options"])):D("",!0)]))),128))])]),s("div",je,[t(Z,{type:"button",text:"Close",click:h}),t(v,{type:"submit",color:"success",icon:l(M),click:()=>{},text:"Save",loading:l(a)},null,8,["icon","loading"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}}}),Fe={setup(){ce({title:`${de.name.toUpperCase()} - Surveillance`})},data(){return{pages:new Array({name:"Home",link:"/home"},{name:"Test Catalog",link:"#"}),serverItemsLength:0,loading:!1,items:new Array,cookie:E("token"),header:"Surveillance",search:"",searchValue:"",headers:[{text:"Test Type",value:"test_type",sortable:!0},{text:"Disease",value:"disease"},{text:"Actions",value:"actions",width:18}],serverOptions:{page:1,rowsPerPage:25,sortBy:"test_type"}}},created(){this.init()},methods:{updateSearch(o){this.searchValue=o,this.search=o,this.init()},async init(){this.loading=!0;const{page:o,rowsPerPage:r}=this.serverOptions,c={route:oe(x.surveillance.index,{page:o,page_size:r,search:this.search}),method:"GET",token:`${this.cookie}`},{data:a,error:e,pending:i}=await b(c);a.value&&(this.items=[],a.value.data.map((u,d)=>{this.items.push({id:u.id,test_type:u.test_type.name,disease:u.disease.name})}),this.serverItemsLength=a.value.total),this.loading=!1,e.value&&(this.loading=!1,f().$toast.error(`${g}`))},updateSurveillance(o){typeof o=="object"&&(this.serverOptions=o),this.init()}}},Ue={class:"px-5 py-5"},qe={class:"flex items-center justify-between py-5"},Be={class:"text-2xl font-semibold"},Ee={class:"flex items-center space-x-3"},Oe={class:"flex justify-end w-full px-2 py-2 mb-2"},Ge={class:"py-2 flex items-center space-x-2"};function Le(o,r,c,a,e,i){const u=te,d=Se,$=ie,V=le,I=Ae,P=re;return m(),S("div",Ue,[t(u,{pages:e.pages},null,8,["pages"]),s("div",qe,[s("h3",Be,K(e.header),1),s("div",Ee,[("usePermissions"in o?o.usePermissions:l(q))().can.manage("lab_configurations")?(m(),C(d,{key:0,onUpdate:i.updateSurveillance},null,8,["onUpdate"])):D("",!0),t($)])]),s("div",Oe,[("usePermissions"in o?o.usePermissions:l(q))().can.manage("lab_configurations")?(m(),C(V,{key:0,search:e.search,"onUpdate:search":r[0]||(r[0]=k=>e.search=k),onUpdate:i.updateSearch},null,8,["search","onUpdate"])):D("",!0)]),("usePermissions"in o?o.usePermissions:l(q))().can.manage("lab_configurations")?(m(),C(P,{key:0,headers:e.headers,data:e.items,serverOptions:e.serverOptions,loading:e.loading,serverItemsLength:e.serverItemsLength,searchField:"test_type",searchValue:e.searchValue,onUpdate:i.updateSurveillance},{actions:p(({item:k})=>[s("div",Ge,[t(I,{id:k.id,onUpdate:i.updateSurveillance},null,8,["id","onUpdate"])])]),_:1},8,["headers","data","serverOptions","loading","serverItemsLength","searchValue","onUpdate"])):D("",!0)])}const gt=G(Fe,[["render",Le]]);export{gt as default};