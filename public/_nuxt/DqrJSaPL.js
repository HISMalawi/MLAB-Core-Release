import{_ as G}from"./D-VwM6QD.js";import{a as j,u as k,l as C,m as s,b as x,e as D,g as t,f as e,n as a,p as b,_ as T,t as E,h as B,x as M,s as X}from"./Cg5p-McN.js";import{_ as A}from"./CqDTxBUP.js";import{r as H,e as $,f as R}from"./DR38mcEF.js";import{r as I}from"./aBMXVFc4.js";import{r as Y}from"./l2E4azmA.js";import{r as O}from"./dK18VoWV.js";import{r as L}from"./9hb_rdP4.js";import{S,h as V,Y as P,G as F,V as U}from"./D1U45QuX.js";import{_ as N}from"./cien4RO4.js";import{_ as J}from"./DEY2neBq.js";import{r as K,a as Q}from"./Cjc4v2I0.js";import{r as W}from"./D-clyhuy.js";import{r as Z}from"./BOaR9eSM.js";import{_ as ee}from"./ByuBovvP.js";import{u as q}from"./BbrJdZQo.js";import{u as te}from"./DvxvG7cH.js";import{P as oe}from"./C2uaaNo-.js";import{r as ne}from"./CyrOhIst.js";import{_ as se}from"./DAoM-dCf.js";import"./sm8AiluA.js";import"./BAL5lcly.js";import"./RKiNshLb.js";import"./3LKeHVyH.js";import"./BVCtdeh2.js";import"./84ogm7K5.js";import"./BQPGVMrX.js";import"./CGvpn_em.js";const ae={components:{TransitionRoot:S,TransitionChild:V,Dialog:P,DialogPanel:F,DialogTitle:U,XMarkIcon:I,UserIcon:Y},data(){return{open:!1,addIcon:H,saveIcon:O,clearIcon:L,reason:"",loading:!1,cookie:j("token")}},methods:{async submitForm(){this.loading=!0;const l={route:$.rejectionReasons,method:"POST",token:`${this.cookie}`,body:{description:this.reason}},{pending:n,error:c,data:r}=await R(l);this.loading=n,r.value&&(this.adjustVisibility(),k().$toast.success("Specimen rejection reason created successfully!"),this.loading=!1,this.reason="",this.$emit("update",!0)),c.value&&(this.adjustVisibility(),k().$toast.error(`${c.value.data.error}`),console.log(c.value.data.error),this.loading=!1)},adjustVisibility(){this.open=!this.open},clearForm(){this.$formkit.reset("submitForm")}}},ie=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),le={class:"fixed inset-0 overflow-y-auto"},ce={class:"flex min-h-full items-center justify-center p-4 text-center"},re={class:"border-b px-3 py-3 flex items-center justify-between"},de=t("img",{src:N,class:"w-8 h-8 mr-2"},null,-1),me={class:"mt-2 space-y-3"},ue={class:"w-full flex items-center px-5"},pe={class:"w-full flex flex-col space-y-2"},_e={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function fe(l,n,c,r,o,i){const u=T,d=s("TransitionChild"),f=s("DialogTitle"),h=s("XMarkIcon"),p=s("FormKit"),_=A,g=s("DialogPanel"),m=s("Dialog"),w=s("TransitionRoot");return x(),D("div",null,[t("div",null,[e(u,{text:"New Rejection Reason",color:"primary",icon:o.addIcon,click:i.adjustVisibility},null,8,["icon","click"])]),e(w,{appear:"",show:o.open,as:"template"},{default:a(()=>[e(m,{as:"div",onClose:i.adjustVisibility,class:"relative z-10"},{default:a(()=>[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[ie]),_:1}),t("div",le,[t("div",ce,[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[e(g,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:a(()=>[t("div",re,[e(f,{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:a(()=>[de,b(" Add Specimen Rejection Reason ")]),_:1}),t("button",{onClick:n[0]||(n[0]=(...y)=>i.adjustVisibility&&i.adjustVisibility(...y))},[e(h,{class:"w-5 h-5"})])]),e(p,{type:"form","submit-label":"Update",onSubmit:i.submitForm,actions:!1,id:"submitForm"},{default:a(({value:y})=>[t("div",me,[t("div",ue,[t("div",pe,[e(p,{type:"text",label:"Reason",validation:"required",modelValue:o.reason,"onUpdate:modelValue":n[1]||(n[1]=v=>o.reason=v)},null,8,["modelValue"])])])]),t("div",_e,[e(_,{text:"Clear form",type:"button",click:()=>{i.clearForm()}},null,8,["click"]),e(u,{loading:o.loading,type:"submit",click:()=>{},color:"success",icon:o.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const he=C(ae,[["render",fe]]),ge={components:{TransitionRoot:S,TransitionChild:V,Dialog:P,DialogPanel:F,DialogTitle:U,XMarkIcon:I},data(){return{viewIcon:K,show:!1}},props:{data:{type:Object,required:!0}},methods:{handleClick(){this.show=!this.show}}},xe=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),ye={class:"fixed inset-0 overflow-y-auto"},ve={class:"flex min-h-full items-center justify-center p-4 text-center"},be={class:"border-b px-3 py-3 flex items-center justify-between"},ke=t("img",{src:N,class:"w-8 h-8 mr-2"},null,-1),we={class:"space-y-3 px-5 py-5"},Ce={class:"w-full flex flex-col space-y-1"},De=t("label",{class:"font-semibold text-lg"},"Reason",-1),je={class:"underline"};function Te(l,n,c,r,o,i){const u=T,d=s("TransitionChild"),f=s("DialogTitle"),h=s("XMarkIcon"),p=s("DialogPanel"),_=s("Dialog"),g=s("TransitionRoot");return x(),D("div",null,[e(u,{click:i.handleClick,color:"primary",text:"View",icon:o.viewIcon},null,8,["click","icon"]),e(g,{appear:"",show:o.show,as:"template"},{default:a(()=>[e(_,{as:"div",class:"relative z-10"},{default:a(()=>[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[xe]),_:1}),t("div",ye,[t("div",ve,[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[e(p,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:a(()=>[t("div",be,[e(f,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:a(()=>[ke,b(" View Specimen Rejection Reason ")]),_:1}),t("button",{onClick:n[0]||(n[0]=(...m)=>i.handleClick&&i.handleClick(...m))},[e(h,{class:"w-5 h-5"})])]),t("div",we,[t("div",Ce,[De,t("p",je,E(c.data.description),1)])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const $e=C(ge,[["render",Te]]),Re={components:{TransitionRoot:S,TransitionChild:V,Dialog:P,DialogPanel:F,DialogTitle:U,XMarkIcon:I},data(){return{viewIcon:K,show:!1,editIcon:Q,saveIcon:O,cookie:j("token"),loading:!1}},props:{data:{type:Object,required:!0}},methods:{async submitForm(){this.loading=!0;const l={route:`${$.rejectionReasons}/${this.data.id}`,method:"PUT",token:`${this.cookie}`,body:this.data},{pending:n,error:c,data:r}=await R(l);this.loading=n,r.value&&(this.handleClick(),k().$toast.success("Specimen rejection reason updated successfully!"),this.loading=!1,this.$emit("update",!0)),c.value&&(k().$toast.success("An error occurred, please try again!"),this.handleClick(),console.error(c.value),this.loading=!1)},handleClick(){this.show=!this.show},clearForm(){this.$formkit.reset("submitForm")}}},Ie=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Se={class:"fixed inset-0 overflow-y-auto"},Ve={class:"flex min-h-full items-center justify-center p-4 text-center"},Pe={class:"border-b px-3 py-3 flex items-center justify-between"},Fe=t("img",{src:N,class:"w-8 h-8 mr-2"},null,-1),Ue={class:"mt-2 space-y-3"},Be={class:"w-full flex items-center px-5 space-x-3"},Me={class:"w-full flex flex-col space-y-2"},Xe={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function qe(l,n,c,r,o,i){const u=T,d=s("TransitionChild"),f=s("DialogTitle"),h=s("XMarkIcon"),p=s("FormKit"),_=A,g=s("DialogPanel"),m=s("Dialog"),w=s("TransitionRoot");return x(),D("div",null,[e(u,{click:i.handleClick,color:"success",text:"Edit",icon:o.editIcon},null,8,["click","icon"]),e(w,{appear:"",show:o.show,as:"template"},{default:a(()=>[e(m,{as:"div",class:"relative z-10"},{default:a(()=>[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[Ie]),_:1}),t("div",Se,[t("div",Ve,[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[e(g,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:a(()=>[t("div",Pe,[e(f,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:a(()=>[Fe,b(" Edit Sample Rejection Reason ")]),_:1}),t("button",{onClick:n[0]||(n[0]=(...y)=>i.handleClick&&i.handleClick(...y))},[e(h,{class:"w-5 h-5"})])]),e(p,{type:"form","submit-label":"Update",onSubmit:i.submitForm,actions:!1,id:"submitForm"},{default:a(({value:y})=>[t("div",Ue,[t("div",Be,[t("div",Me,[e(p,{type:"textarea",label:"Reason",validation:"required",modelValue:c.data.description,"onUpdate:modelValue":n[1]||(n[1]=v=>c.data.description=v)},null,8,["modelValue"])])]),t("div",Xe,[e(_,{type:"button",click:()=>{i.clearForm()},text:"Clear form",color:"error"},null,8,["click"]),e(u,{type:"submit",click:()=>{},color:"success",loading:o.loading,icon:o.saveIcon,text:"Save changes"},null,8,["loading","icon"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Ee=C(Re,[["render",qe]]),Ae={components:{TransitionRoot:S,TransitionChild:V,Dialog:P,DialogPanel:F,DialogTitle:U,XMarkIcon:I,ExclamationTriangleIcon:W},data(){return{show:!1,deleteIcon:Z,loading:!1,reason:"",cookie:j("token")}},props:{data:{type:Object,required:!0}},methods:{async deleteData(l){this.loading=!0;const n={route:`${$.rejectionReasons}/${l}`,method:"DELETE",token:`${this.cookie}`,body:{retired_reason:this.reason}},{pending:c,error:r,data:o}=await R(n);o.value&&(this.handleClick(),k().$toast.success("Specimen rejection reason deleted successfully!"),this.loading=!1,this.$emit("update",!0)),r.value&&(k().$toast.error("An error occurred, please try again!"),console.log(r.value),this.loading=!1)},handleClick(){this.show=!this.show}}},Ne=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Oe={class:"fixed inset-0 overflow-y-auto"},Ke={class:"flex min-h-full items-center justify-center p-4 text-center"},ze={class:"border-b px-3 py-3 flex items-center justify-between"},Ge={class:"mt-2 space-y-3 px-5"},He={class:"rounded px-2 py-2"},Ye={class:"font-semibold text-red-500"},Le={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50"};function Je(l,n,c,r,o,i){const u=T,d=s("TransitionChild"),f=s("ExclamationTriangleIcon"),h=s("DialogTitle"),p=s("XMarkIcon"),_=s("FormKit"),g=A,m=s("DialogPanel"),w=s("Dialog"),y=s("TransitionRoot");return x(),D("div",null,[e(u,{click:i.handleClick,color:"error",text:"Delete",icon:o.deleteIcon},null,8,["click","icon"]),e(y,{appear:"",show:o.show,as:"template"},{default:a(()=>[e(w,{as:"div",class:"relative z-10"},{default:a(()=>[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[Ne]),_:1}),t("div",Oe,[t("div",Ke,[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[e(m,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:a(()=>[t("div",ze,[e(h,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:a(()=>[e(f,{class:"h-5 w-5 mr-2"}),b(" Confirm delete ")]),_:1}),t("button",{onClick:n[0]||(n[0]=(...v)=>i.handleClick&&i.handleClick(...v))},[e(p,{class:"w-5 h-5"})])]),e(_,{type:"form","submit-label":"Update",onSubmit:n[2]||(n[2]=v=>i.deleteData(c.data.id)),actions:!1},{default:a(({value:v})=>[t("div",Ge,[t("div",He,[b(" Do you really want to delete "),t("span",Ye,E(c.data.description),1),b("? Note that once this action is completed, it can not be undone ")]),e(_,{type:"textarea",label:"Reason",validation:"required",modelValue:o.reason,"onUpdate:modelValue":n[1]||(n[1]=z=>o.reason=z)},null,8,["modelValue"])]),t("div",Le,[e(g,{type:"button",click:()=>{i.handleClick()},text:"Cancel"},null,8,["click"]),e(u,{loading:o.loading,type:"submit",click:()=>{},color:"error",icon:o.deleteIcon,text:"Delete"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Qe=C(Ae,[["render",Je]]),We={setup(){te({title:`${oe.name.toUpperCase()} - Specimen Rejection Reasons`})},components:{MagnifyingGlassIcon:ne},data(){return{header:"Specimen Rejection Reasons",reasons:new Array,pages:[{name:"Home",link:"/home"},{name:"Test Catalog",link:"#"}],search:"",searchValue:"",loading:!1,cookie:j("token"),headers:[{text:"id",value:"id",sortable:!0},{text:"reason",value:"description",sortable:!0},{text:"actions",value:"actions"}]}},created(){this.init()},methods:{updateSearch(l){this.searchValue=l,this.search=l},async init(){this.loading=!0;const l={route:$.rejectionReasons,method:"GET",token:`${this.cookie}`},{pending:n,error:c,data:r}=await R(l);this.loading=n,r.value&&(this.loading=!1,this.reasons=r.value),c.value&&(this.loading=!1,console.log(c.value))},updateSpecimenRejection(l){l&&this.init()}}},Ze={class:"py-5 px-5"},et={class:"flex items-center justify-between py-5"},tt={class:"text-2xl font-semibold flex items-center uppercase"},ot=t("img",{src:se,alt:"report-icon",class:"w-8 h-8 mr-2"},null,-1),nt={class:"flex items-center space-x-3"},st={class:"flex justify-end w-full px-2 py-2 mb-2"},at={class:"py-2 flex items-center space-x-2"};function it(l,n,c,r,o,i){const u=G,d=he,f=J,h=$e,p=Ee,_=Qe,g=ee;return x(),D("div",Ze,[e(u,{pages:o.pages},null,8,["pages"]),t("div",et,[t("div",tt,[ot,b(" "+E(o.header),1)]),t("div",nt,[("usePermissions"in l?l.usePermissions:B(q))().can.manage("test_catalog")?(x(),M(d,{key:0,onUpdate:i.updateSpecimenRejection},null,8,["onUpdate"])):X("",!0)])]),t("div",st,[("usePermissions"in l?l.usePermissions:B(q))().can.manage("test_catalog")?(x(),M(f,{key:0,search:o.search,"onUpdate:search":n[0]||(n[0]=m=>o.search=m),onUpdate:i.updateSearch},null,8,["search","onUpdate"])):X("",!0)]),("usePermissions"in l?l.usePermissions:B(q))().can.manage("test_catalog")?(x(),M(g,{key:0,headers:o.headers,data:o.reasons,loading:o.loading,"search-value":o.searchValue,"search-field":"description"},{actions:a(({item:m})=>[t("div",at,[e(h,{data:m},null,8,["data"]),e(p,{data:m,onUpdate:i.updateSpecimenRejection},null,8,["data","onUpdate"]),e(_,{data:m,onUpdate:i.updateSpecimenRejection},null,8,["data","onUpdate"])])]),_:1},8,["headers","data","loading","search-value"])):X("",!0)])}const Ut=C(We,[["render",it]]);export{Ut as default};