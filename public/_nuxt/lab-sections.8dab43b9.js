import{_ as A}from"./Breadcrumb.cfeb06ed.js";import{u as T,a as b,_ as w,f as n,o as C,c as D,d as t,b as e,g as s,h as v,e as $,t as R}from"./entry.6a3fbfc1.js";import{_ as M}from"./OutlinedButton.e6ec900c.js";import{e as B}from"./constants.cf42f90d.js";import{r as O,e as I,f as V,a as K}from"./fetch.444ade97.js";import{r as S}from"./XMarkIcon.fd9a39e2.js";import{r as z}from"./UserIcon.d8a12127.js";import{r as X}from"./ArrowDownTrayIcon.fa0f85a0.js";import{r as G}from"./ArrowUturnLeftIcon.1ffe50ee.js";import{S as j,h as U,U as F,G as P,V as L}from"./transition.9bb58b2a.js";import{_ as H}from"./SearchBar.ef21d529.js";import{r as J,a as q}from"./PencilSquareIcon.79aa7948.js";import{_ as E}from"./admissions.8963e0a6.js";import{r as Q}from"./TrashIcon.4f2791d3.js";import{_ as W}from"./Datatable.4f114658.js";import{u as Y}from"./vue.f36acd1f.f8958c90.js";import{P as Z}from"./package.d411c004.js";import"./nuxt-link.bebad584.js";import"./HomeIcon.54ceb79b.js";import"./PrinterIcon.b8623d34.js";import"./hidden.e85239c2.js";import"./Loader.2c2cb550.js";const ee={components:{TransitionRoot:j,TransitionChild:U,Dialog:F,DialogPanel:P,DialogTitle:L,XMarkIcon:S,UserIcon:z},data(){return{open:!1,addIcon:O,saveIcon:X,clearIcon:G,name:"",description:"",loading:!1,cookie:T("token")}},methods:{async submitForm(){this.loading=!0;const c={route:I.departments,method:"POST",token:`${this.cookie}`,body:{name:this.name}},{pending:a,error:l,data:r}=await V(c);this.loading=a,r.value&&(this.adjustVisibility(),b().$toast.success(`${this.name} laboratory section created successfully!`),this.name="",this.loading=!1,this.$emit("update",!0)),l.value&&(this.adjustVisibility(),console.log(l.value),b().$toast.error(B),this.loading=!1)},adjustVisibility(){this.open=!this.open},clearForm(){this.$formkit.reset("submitForm")}}},te=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),oe={class:"fixed inset-0 overflow-y-auto"},ae={class:"flex min-h-full items-center justify-center p-4 text-center"},ne={class:"border-b px-3 py-3 flex items-center justify-between"},se={class:"mt-2 space-y-3"},ie={class:"w-full flex items-center px-5"},le={class:"w-full flex flex-col space-y-2"},ce={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function re(c,a,l,r,o,i){const m=$,d=n("TransitionChild"),f=n("DialogTitle"),h=n("XMarkIcon"),u=n("FormKit"),p=M,x=n("DialogPanel"),_=n("Dialog"),k=n("TransitionRoot");return C(),D("div",null,[t("div",null,[e(m,{text:"New lab section",color:"primary",icon:o.addIcon,click:i.adjustVisibility},null,8,["icon","click"])]),e(k,{appear:"",show:o.open,as:"template"},{default:s(()=>[e(_,{as:"div",onClose:i.adjustVisibility,class:"relative z-10"},{default:s(()=>[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[te]),_:1}),t("div",oe,[t("div",ae,[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[e(x,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:s(()=>[t("div",ne,[e(f,{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:s(()=>[v(" Add new lab section ")]),_:1}),t("button",{onClick:a[0]||(a[0]=(...y)=>i.adjustVisibility&&i.adjustVisibility(...y))},[e(h,{class:"w-5 h-5"})])]),e(u,{type:"form","submit-label":"Update",onSubmit:i.submitForm,actions:!1,id:"submitForm"},{default:s(({value:y})=>[t("div",se,[t("div",ie,[t("div",le,[e(u,{type:"text",label:"Name",validation:"required",modelValue:o.name,"onUpdate:modelValue":a[1]||(a[1]=g=>o.name=g)},null,8,["modelValue"])])])]),t("div",ce,[e(p,{text:"Clear form",type:"button",click:()=>{i.clearForm()}},null,8,["click"]),e(m,{loading:o.loading,type:"submit",click:()=>{},color:"success",icon:o.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const de=w(ee,[["render",re]]),me={components:{TransitionRoot:j,TransitionChild:U,Dialog:F,DialogPanel:P,DialogTitle:L,XMarkIcon:S},data(){return{viewIcon:J,show:!1,editIcon:q}},props:{data:{type:Object,required:!0}},methods:{handleClick(){this.show=!this.show}}},ue=t("div",{class:"fixed inset-0 bg-gray-900 bg-opacity-25"},null,-1),_e={class:"fixed inset-0 overflow-y-auto"},pe={class:"flex min-h-full items-center justify-center p-4 text-center"},fe={class:"border-b px-3 py-3 flex items-center justify-between"},he=t("img",{src:E,class:"w-8 h-8 mr-2"},null,-1),xe={class:"space-y-3 px-5 py-5"},ye={class:"w-full flex flex-col space-y-1"},ge=t("label",{class:"font-semibold text-lg"},"Name",-1),ve={class:"underline"};function be(c,a,l,r,o,i){const m=$,d=n("TransitionChild"),f=n("DialogTitle"),h=n("XMarkIcon"),u=n("DialogPanel"),p=n("Dialog"),x=n("TransitionRoot");return C(),D("div",null,[e(m,{click:i.handleClick,color:"primary",text:"View",icon:o.viewIcon},null,8,["click","icon"]),e(x,{appear:"",show:o.show,as:"template"},{default:s(()=>[e(p,{as:"div",class:"relative z-10"},{default:s(()=>[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[ue]),_:1}),t("div",_e,[t("div",pe,[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[e(u,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:s(()=>[t("div",fe,[e(f,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:s(()=>[he,v(" View Laboratory Section ")]),_:1}),t("button",{onClick:a[0]||(a[0]=(..._)=>i.handleClick&&i.handleClick(..._))},[e(h,{class:"w-5 h-5"})])]),t("div",xe,[t("div",ye,[ge,t("p",ve,R(l.data.name),1)])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const ke=w(me,[["render",be]]),we={components:{TransitionRoot:j,TransitionChild:U,Dialog:F,DialogPanel:P,DialogTitle:L,XMarkIcon:S},data(){return{editIcon:q,show:!1,saveIcon:X,loading:!1,cookie:T("token"),name:this.data.name}},props:{data:{type:Object,required:!0}},methods:{async submitForm(){this.loading=!0;const c={route:`${I.departments}/${this.data.id}`,method:"PUT",token:`${this.cookie}`,body:this.name},{data:a,error:l,pending:r}=await V(c);this.loading=r,a.value&&(this.handleClick(),b().$toast.success("Laboratory section updated successfully!"),this.loading=!1,this.$emit("update",!0)),l.value&&(this.handleClick(),b().$toast.error(B),console.error(l.value),this.loading=!1)},handleClick(){this.show=!this.show},clearForm(){this.$formkit.reset("submitForm")}}},Ce=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),De={class:"fixed inset-0 overflow-y-auto"},Te={class:"flex min-h-full items-center justify-center p-4 text-center"},$e={class:"border-b px-3 py-3 flex items-center justify-between"},Ie=t("img",{src:E,class:"w-8 h-8 mr-2"},null,-1),Ve={class:"mt-2 space-y-3"},Se={class:"w-full flex items-center px-5"},je={class:"w-full flex flex-col space-y-2"},Ue={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Fe(c,a,l,r,o,i){const m=$,d=n("TransitionChild"),f=n("DialogTitle"),h=n("XMarkIcon"),u=n("FormKit"),p=M,x=n("DialogPanel"),_=n("Dialog"),k=n("TransitionRoot");return C(),D("div",null,[e(m,{click:i.handleClick,text:"Edit",color:"success",icon:o.editIcon},null,8,["click","icon"]),e(k,{appear:"",show:o.show,as:"template"},{default:s(()=>[e(_,{as:"div",class:"relative z-10"},{default:s(()=>[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[Ce]),_:1}),t("div",De,[t("div",Te,[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[e(x,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:s(()=>[t("div",$e,[e(f,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:s(()=>[Ie,v(" Edit Laboratory Department ")]),_:1}),t("button",{onClick:a[0]||(a[0]=(...y)=>i.handleClick&&i.handleClick(...y))},[e(h,{class:"w-5 h-5"})])]),e(u,{id:"submitForm",type:"form","submit-label":"Update",onSubmit:i.submitForm,actions:!1},{default:s(({value:y})=>[t("div",Ve,[t("div",Se,[t("div",je,[e(u,{type:"text",label:"Name",validation:"required",modelValue:o.name,"onUpdate:modelValue":a[1]||(a[1]=g=>o.name=g)},null,8,["modelValue"])])])]),t("div",Ue,[e(p,{text:"Clear form",type:"button",click:()=>{i.clearForm()}},null,8,["click"]),e(m,{loading:o.loading,type:"submit",click:()=>{},color:"success",icon:o.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Pe=w(we,[["render",Fe]]),Le={components:{TransitionRoot:j,TransitionChild:U,Dialog:F,DialogPanel:P,DialogTitle:L,XMarkIcon:S,ExclamationTriangleIcon:K},data(){return{show:!1,deleteIcon:Q,loading:!1,reason:"",cookie:T("token")}},props:{data:{type:Object,required:!0}},methods:{async deleteData(c){this.loading=!0;const a={route:`${I.departments}/${c}`,method:"DELETE",token:`${this.cookie}`,body:{retired_reason:this.reason}};let{data:l,error:r,pending:o}=await V(a);this.loading=o,l.value&&(this.handleClick(),b().$toast.success("Laboratory section deleted successfully!"),this.$emit("update",!0)),r.value&&(b().$toast.error(B),this.handleClick(),console.error(r.value))},handleClick(){this.show=!this.show}}},Re=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Me={class:"fixed inset-0 overflow-y-auto"},Be={class:"flex min-h-full items-center justify-center p-4 text-center"},Xe={class:"border-b px-3 py-3 flex items-center justify-between"},qe={class:"mt-2 space-y-3 px-5"},Ee={class:"rounded px-2 py-2"},Ne={class:"font-semibold text-red-500"},Ae={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50"};function Oe(c,a,l,r,o,i){const m=$,d=n("TransitionChild"),f=n("ExclamationTriangleIcon"),h=n("DialogTitle"),u=n("XMarkIcon"),p=n("FormKit"),x=M,_=n("DialogPanel"),k=n("Dialog"),y=n("TransitionRoot");return C(),D("div",null,[e(m,{click:i.handleClick,color:"error",text:"Delete",icon:o.deleteIcon},null,8,["click","icon"]),e(y,{appear:"",show:o.show,as:"template"},{default:s(()=>[e(k,{as:"div",class:"relative z-10"},{default:s(()=>[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[Re]),_:1}),t("div",Me,[t("div",Be,[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[e(_,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:s(()=>[t("div",Xe,[e(h,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:s(()=>[e(f,{class:"h-5 w-5 mr-2"}),v(" Confirm delete ")]),_:1}),t("button",{onClick:a[0]||(a[0]=(...g)=>i.handleClick&&i.handleClick(...g))},[e(u,{class:"w-5 h-5"})])]),e(p,{type:"form","submit-label":"Update",onSubmit:a[2]||(a[2]=g=>i.deleteData(l.data.id)),actions:!1},{default:s(({value:g})=>[t("div",qe,[t("div",Ee,[v(" Do you really want to delete "),t("span",Ne,R(l.data.name),1),v("? Note that once this action is completed, it can not be undone ")]),e(p,{type:"textarea",label:"Reason",validation:"required",modelValue:o.reason,"onUpdate:modelValue":a[1]||(a[1]=N=>o.reason=N)},null,8,["modelValue"])]),t("div",Ae,[e(x,{type:"button",click:()=>{i.handleClick()},text:"Cancel"},null,8,["click"]),e(m,{loading:o.loading,type:"submit",click:()=>{},color:"error",icon:o.deleteIcon,text:"Delete"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Ke=w(Le,[["render",Oe]]),ze={setup(){Y({title:`${Z.name.toUpperCase()} - Laboratory Sections`})},data(){return{header:"Laboratory Sections",departments:new Array,pages:[{name:"Home",link:"/home"},{name:"Test Catalog",link:"#"}],loading:!1,search:"",searchValue:"",cookie:T("token"),headers:[{text:"id",value:"id",sortable:!0},{text:"name",value:"name",sortable:!0},{text:"actions",value:"actions"}]}},created(){this.init()},methods:{updateSearch(c){this.searchValue=c,this.search=c},async init(){this.loading=!0;const c={route:I.departments,method:"GET",token:`${this.cookie}`},{pending:a,error:l,data:r}=await V(c);this.loading=a,r.value&&(this.loading=!1,this.departments=r.value),l.value&&(this.loading=!1,console.log(l.value))},updateLabSections(c){c&&this.init()}}},Ge={class:"py-5 px-5"},He={class:"flex items-center justify-between py-5"},Je={class:"text-2xl font-semibold"},Qe={class:"flex items-center space-x-3"},We={class:"flex justify-end w-full px-2 py-2 mb-2"},Ye={class:"py-2 flex items-center space-x-2"};function Ze(c,a,l,r,o,i){const m=A,d=de,f=H,h=ke,u=Pe,p=Ke,x=W;return C(),D("div",Ge,[e(m,{pages:o.pages},null,8,["pages"]),t("div",He,[t("h3",Je,R(o.header),1),t("div",Qe,[e(d,{onUpdate:i.updateLabSections},null,8,["onUpdate"])])]),t("div",We,[e(f,{search:o.search,onUpdate:i.updateSearch},null,8,["search","onUpdate"])]),e(x,{headers:o.headers,data:o.departments,loading:o.loading,"search-value":o.searchValue,"search-field":"name"},{actions:s(({item:_})=>[t("div",Ye,[e(h,{data:_},null,8,["data"]),e(u,{data:_,onUpdate:i.updateLabSections},null,8,["data","onUpdate"]),e(p,{data:_,onUpdate:i.updateLabSections},null,8,["data","onUpdate"])])]),_:1},8,["headers","data","loading","search-value"])])}const kt=w(ze,[["render",Ze]]);export{kt as default};