import{_ as te}from"./CSp2YO-U.js";import{S as G,p as q,Y as R,G as L,V as z,a as B,s as O,q as K,l as g,m as x,u as f,E as b,x as N,y,b as m,e as S,g as t,f as s,z as p,j as H,F as M,k as X,L as C,K as D,_ as Y,d as se,r as T,h as r,B as ae,t as J,a0 as oe}from"./byrs3Ots.js";import{_ as ie}from"./CiHEHB4g.js";import{_ as Q}from"./Dippuhly.js";import{r as W}from"./Bj9vjHZI.js";import{_ as le}from"./BWhcpljd.js";import{_ as ne}from"./DIxYBOGr.js";import{_ as re}from"./BhxxYZOP.js";import{u as U}from"./BHB5GRTG.js";import{P as ce}from"./DJ4B06VU.js";import{u as de}from"./JQtyNrok.js";import"./CiGacxWW.js";import"./BMxHOE3o.js";import"./Cpf5CF-5.js";import"./BRlgxmkc.js";import"./CTakVB2l.js";import"./ByUgbYQS.js";import"./DqjuqaIQ.js";import"./lW9Aq0y5.js";import"./BmHes99n.js";import"./BW0W2KWu.js";import"./penbDyTX.js";import"./C3pt0xtn.js";const ue={components:{TransitionRoot:G,TransitionChild:q,Dialog:R,DialogPanel:L,DialogTitle:z},data(){return{open:!1,loading:!1,saving:!1,cookie:B("token"),disabled:!0,diseases:new Array,testTypes:new Array,selectedTestType:{name:""},items:new Array,plusIcon:O,saveIcon:W,addIcon:O,removeIcon:K,surveillanceItems:new Array}},methods:{adjustVisibility(){this.open=!this.open},addItem(){this.surveillanceItems.push({testType:this.testTypes[0],diseases:this.diseases[0]})},removeItem(o){this.surveillanceItems.splice(o,1)},async loadDiseases(){this.loading=!0;const o={route:g.disease.index,method:"GET",token:`${this.cookie}`},{data:i,error:c,pending:a}=await x(o);return i.value&&(this.diseases=i.value),this.loading=!1,c.value&&(this.loading=!1,f().$toast.error(`${b}`)),{data:i,error:c,pending:a}},async loadTestTypes(){this.adjustVisibility();const o=await this.loadDiseases();this.loading=!0;const i={route:g.testTypes,method:"GET",token:`${this.cookie}`},{data:c,error:a,pending:e}=await x(i);c.value&&(console.log(c.value),this.testTypes=c.value.test_types,this.surveillanceItems.push({testType:this.testTypes[0],diseases:o.data.value[0]})),this.loading=!1,a.value&&(this.loading=!1,f().$toast.error(`${b}`))},async handleSubmitForm(){this.saving=!0;const o=this.surveillanceItems.map(l=>({test_types_id:l.testType.id,diseases_id:l.diseases.id})),i={route:g.surveillance.create,method:"POST",token:`${this.cookie}`,body:{surveillance:{data:o}}},{data:c,pending:a,error:e}=await x(i);this.saving=a,c.value&&(this.closeForm(),f().$toast.success("Surviellance add successfully!"),this.$emit("update",!0),this.saving=!1),e.value&&(f().$toast.error(`${b}`),this.saving=!1)},closeForm(){this.open=!1,this.items=[{test_types_id:"",diseases_id:""}]}}},pe={class:"fixed inset-0 overflow-y-auto"},me={class:"flex min-h-full items-center justify-center p-4 text-center"},ve={class:"border-b px-3 py-3 flex items-center justify-between"},_e={class:"mt-2 space-y-3 px-5 py-5"},fe={class:"w-full col-span-4 flex items-center space-x-3"},he={class:"w-1/2"},ye={class:"w-1/2"},ge={class:"flex items-center space-x-3 pt-7"},xe={class:"mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function be(o,i,c,a,e,l){const u=Y,d=y("TransitionChild"),I=y("DialogTitle"),V=y("XMarkIcon"),$=ie,P=Q,k=y("FormKit"),A=y("DialogPanel"),j=y("Dialog"),F=y("TransitionRoot");return m(),S("div",null,[t("div",null,[s(u,{text:"Add Surveillance",color:"primary",icon:e.plusIcon,click:l.loadTestTypes},null,8,["icon","click"])]),s(F,{appear:"",show:e.open,as:"template"},{default:p(()=>[s(j,{as:"div",onClose:l.closeForm,class:"relative z-10"},{default:p(()=>[s(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:p(()=>i[1]||(i[1]=[t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),t("div",pe,[t("div",me,[s(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:p(()=>[s(A,{class:"w-full max-w-4xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:p(()=>[t("div",ve,[s(I,{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:p(()=>i[2]||(i[2]=[H(" Surveillance Setup ")])),_:1}),t("button",{onClick:i[0]||(i[0]=(...h)=>l.adjustVisibility&&l.adjustVisibility(...h))},[s(V,{class:"w-5 h-5"})])]),s(k,{type:"form","submit-label":"Save",onSubmit:l.handleSubmitForm,actions:!1},{default:p(()=>[t("div",_e,[(m(!0),S(M,null,X(e.surveillanceItems,(h,v)=>(m(),S("div",{class:"grid grid-cols-5 gap-2",key:v},[t("div",fe,[t("div",he,[i[3]||(i[3]=t("label",{for:""},"Test type",-1)),s($,{items:e.testTypes,"model-value":h.testType},null,8,["items","model-value"])]),t("div",ye,[i[4]||(i[4]=t("label",{for:""},"Disease",-1)),s($,{items:e.diseases,"model-value":h.diseases},null,8,["items","model-value"])]),t("div",ge,[s(u,{icon:e.addIcon,text:"Add",color:"primary",click:()=>{l.addItem()},type:"button"},null,8,["icon","click"]),e.surveillanceItems.length>1?(m(),C(u,{key:0,icon:e.removeIcon,text:"Remove",color:"error",click:()=>{l.removeItem(v)}},null,8,["icon","click"])):D("",!0)])])]))),128))]),t("div",xe,[s(P,{type:"button",text:"Close",click:l.closeForm},null,8,["click"]),s(u,{type:"submit",color:"success",icon:e.saveIcon,click:()=>{},text:"Save",loading:e.saving},null,8,["icon","loading"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const ke=N(ue,[["render",be]]),we={class:"fixed inset-0 overflow-y-auto"},Te={class:"flex min-h-full items-center justify-center p-4 text-center"},Se={class:"border-b px-3 py-3 flex items-center justify-between"},Ie={class:"mt-2 space-y-3 px-5 py-5"},$e={class:"w-full grid grid-cols-1 gap-1"},Ce={class:"mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t"},De=se({__name:"index",props:{id:{}},emits:["action-completed"],setup(o,{emit:i}){const c=T(!1),a=T(!1),e=B("token");T(!0);const l=T([]),u=T([]),d=T({test_type_id:-1,disease_id:-1}),I=T([{test_types_id:"",diseases_id:""}]),V=o,$=i,P=()=>{k(),A(),c.value=!c.value},k=async()=>{a.value=!0;const v={route:g.disease.index,method:"GET",token:`${e.value}`},n=await x(v);n.data.value&&(l.value=[],l.value.push({label:"- Select from the list",value:""}),n.data.value.map((_,w)=>l.value.push({label:_.name,value:_.id}))),a.value=!1,n.error.value&&(a.value=!1,f().$toast.error(`${b}`))},A=async()=>{a.value=!0;const v={route:g.testTypes,method:"GET",token:`${e.value}`},n=await x(v);n.data.value&&(u.value.push({label:"- Select from the list",value:""}),n.data.value.test_types.map((_,w)=>u.value.push({label:_.name,value:_.id}))),a.value=!1,n.error.value&&(a.value=!1,f().$toast.error(`${b}`))},j=async()=>{a.value=!0;const v={route:`${g.surveillance.edit}/${V.id}`,method:"GET",token:`${e.value}`},n=await x(v);n.data.value&&(d.value.test_type_id=n.data.value.test_types_id,d.value.disease_id=n.data.value.diseases_id,P()),a.value=!1,n.error.value&&(a.value=!1,f().$toast.error(`${b}`))},F=async()=>{a.value=!0;const v={route:g.surveillance.update,method:"PATCH",token:e.value,body:{surveillance:{data:[{diseases_id:d.value.disease_id,test_types_id:d.value.test_type_id}]}}},{data:n,pending:_,error:w}=await x(v);a.value=_,n.value&&(h(),f().$toast.success("Surveillance add successfully!"),$("action-completed",[])),w.value&&(f().$toast.error(`${b}`),a.value=!1)},h=()=>{c.value=a.value=!1,I.value=[{test_types_id:d.value.test_type_id,diseases_id:d.value.disease_id}]};return(v,n)=>{const _=Y,w=y("FormKit"),Z=Q;return m(),S("div",null,[t("div",null,[s(_,{text:"Edit",color:"primary",icon:r(ae),click:j},null,8,["icon"])]),s(r(G),{appear:"",show:r(c),as:"template"},{default:p(()=>[s(r(R),{as:"div",onClose:h,class:"relative z-10"},{default:p(()=>[s(r(q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:p(()=>n[2]||(n[2]=[t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),t("div",we,[t("div",Te,[s(r(q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:p(()=>[s(r(L),{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:p(()=>[t("div",Se,[s(r(z),{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:p(()=>n[3]||(n[3]=[H(J("Edit Surveillance Details"))])),_:1}),t("button",{onClick:h},[s(r(K),{class:"w-5 h-5"})])]),s(w,{type:"form","submit-label":"Save",onSubmit:F,actions:!1},{default:p(()=>[t("div",Ie,[t("div",$e,[(m(!0),S(M,null,X(r(I),(Be,ee)=>(m(),S("div",{class:"relative shadow-none border-2 p-3 mb-3 border-gray-100 text-left box-border space-x-4 grid grid-cols-4 rounded",key:ee},[r(u).length?(m(),C(w,{key:0,type:"select",label:"Test type",modelValue:r(d).test_type_id,"onUpdate:modelValue":n[0]||(n[0]=E=>r(d).test_type_id=E),placeholder:"Select test type",validation:"required",options:r(u),class:"w-full"},null,8,["modelValue","options"])):D("",!0),r(l).length?(m(),C(w,{key:1,type:"select",label:"Disease",modelValue:r(d).disease_id,"onUpdate:modelValue":n[1]||(n[1]=E=>r(d).disease_id=E),placeholder:"Select disease",validation:"required",options:r(l)},null,8,["modelValue","options"])):D("",!0)]))),128))])]),t("div",Ce,[s(Z,{type:"button",text:"Close",click:h}),s(_,{type:"submit",color:"success",icon:r(W),click:()=>{},text:"Save",loading:r(a)},null,8,["icon","loading"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}}}),Ve={setup(){de({title:`${ce.name.toUpperCase()} - Surveillance`})},data(){return{pages:new Array({name:"Home",link:"/home"},{name:"Test Catalog",link:"#"}),serverItemsLength:0,loading:!1,items:new Array,cookie:B("token"),header:"Surveillance",search:"",searchValue:"",headers:[{text:"Test Type",value:"test_type",sortable:!0},{text:"Disease",value:"disease"},{text:"Actions",value:"actions",width:18}],serverOptions:{page:1,rowsPerPage:25,sortBy:"test_type"}}},created(){this.init()},methods:{updateSearch(o){this.searchValue=o,this.search=o,this.init()},async init(){this.loading=!0;const{page:o,rowsPerPage:i}=this.serverOptions,c={route:oe(g.surveillance.index,{page:o,page_size:i,search:this.search}),method:"GET",token:`${this.cookie}`},{data:a,error:e,pending:l}=await x(c);a.value&&(this.items=[],a.value.data.map((u,d)=>{this.items.push({id:u.id,test_type:u.test_type.name,disease:u.disease.name})}),this.serverItemsLength=a.value.total),this.loading=!1,e.value&&(this.loading=!1,f().$toast.error(`${b}`))},updateSurveillance(o){typeof o=="object"&&(this.serverOptions=o),this.init()}}},Pe={class:"px-5 py-5"},Ae={class:"flex items-center justify-between py-5"},je={class:"text-2xl font-semibold"},Fe={class:"flex items-center space-x-3"},Ee={class:"flex justify-end w-full px-2 py-2 mb-2"},Ue={class:"py-2 flex items-center space-x-2"};function qe(o,i,c,a,e,l){const u=te,d=ke,I=le,V=ne,$=De,P=re;return m(),S("div",Pe,[s(u,{pages:e.pages},null,8,["pages"]),t("div",Ae,[t("h3",je,J(e.header),1),t("div",Fe,[("usePermissions"in o?o.usePermissions:r(U))().can.manage("lab_configurations")?(m(),C(d,{key:0,onUpdate:l.updateSurveillance},null,8,["onUpdate"])):D("",!0),s(I)])]),t("div",Ee,[("usePermissions"in o?o.usePermissions:r(U))().can.manage("lab_configurations")?(m(),C(V,{key:0,search:e.search,"onUpdate:search":i[0]||(i[0]=k=>e.search=k),onUpdate:l.updateSearch},null,8,["search","onUpdate"])):D("",!0)]),("usePermissions"in o?o.usePermissions:r(U))().can.manage("lab_configurations")?(m(),C(P,{key:0,headers:e.headers,data:e.items,serverOptions:e.serverOptions,loading:e.loading,serverItemsLength:e.serverItemsLength,searchField:"test_type",searchValue:e.searchValue,onUpdate:l.updateSurveillance},{actions:p(({item:k})=>[t("div",Ue,[s($,{id:k.id,onUpdate:l.updateSurveillance},null,8,["id","onUpdate"])])]),_:1},8,["headers","data","serverOptions","loading","serverItemsLength","searchValue","onUpdate"])):D("",!0)])}const rt=N(Ve,[["render",qe]]);export{rt as default};