import{_ as O}from"./Breadcrumb.vue.7469196c.js";import{a as $,b as k,_ as C,g as n,o as D,c as T,e,d as t,h as l,i as I,f as U,t as y,l as G,u as K}from"./entry.3ba6d4d3.js";import{_ as M}from"./OutlinedButton.c675e7d7.js";import{e as B,d as R}from"./constants.1010fcbd.js";import{r as z,e as b,f as w,h as X}from"./fetch.17eaab73.js";import{r as N}from"./XMarkIcon.7262efd1.js";import{r as H}from"./UserIcon.55c7ccb4.js";import{r as A}from"./ArrowDownTrayIcon.452f68e4.js";import{r as L}from"./ArrowUturnLeftIcon.26daee8a.js";import{S as F,h as S,U as P,G as j,V as q}from"./transition.7e81bdc8.js";import{_ as J}from"./SearchBar.87aa8fc8.js";import{r as Q,a as E}from"./PencilSquareIcon.ded5f0ed.js";import{_ as W}from"./medicines.8a9b5f5f.js";import{_ as Y}from"./Datatable.0a32cfee.js";import{P as Z}from"./package.babe1e72.js";import{r as ee}from"./MagnifyingGlassIcon.7fabd2c6.js";import"./nuxt-link.24ac1730.js";import"./HomeIcon.e4f6e8f1.js";import"./PrinterIcon.93c5df84.js";import"./hidden.c42221ac.js";import"./Loader.6f09c490.js";const te={components:{TransitionRoot:F,TransitionChild:S,Dialog:P,DialogPanel:j,DialogTitle:q,XMarkIcon:N,UserIcon:H},data(){return{open:!1,addIcon:z,saveIcon:A,clearIcon:L,loading:!1,name:"",shortName:"",cookie:$("token")}},methods:{async submitForm(){this.loading=!0;const i={route:b.drugs,method:"POST",token:`${this.cookie}`,body:{name:this.name,short_name:this.shortName}},{pending:a,error:r,data:c}=await w(i);this.loading=a,c.value&&(this.handleClick(),k().$toast.success(`${this.name} drug created successfully!`),this.loading=!1,this.shortName="",this.name="",this.$emit("update",!0)),r.value&&(this.handleClick(),console.log(r.value),k().$toast.error(B),this.loading=!1)},handleClick(){this.open=!this.open},clearForm(){this.$formkit.reset("submitForm")}}},oe=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),ae={class:"fixed inset-0 overflow-y-auto"},se={class:"flex min-h-full items-center justify-center p-4 text-center"},ne={class:"border-b px-3 py-3 flex items-center justify-between"},le={class:"mt-2 space-y-3"},ie={class:"w-full flex items-center px-5"},re={class:"w-full flex flex-col space-y-2"},ce={class:"w-full flex items-center px-5 space-x-3"},de={class:"w-full flex flex-col space-y-2"},me={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function ue(i,a,r,c,o,s){const _=U,u=n("TransitionChild"),p=n("DialogTitle"),h=n("XMarkIcon"),m=n("FormKit"),f=M,g=n("DialogPanel"),d=n("Dialog"),V=n("TransitionRoot");return D(),T("div",null,[e("div",null,[t(_,{text:"Create drug",color:"primary",icon:o.addIcon,click:s.handleClick},null,8,["icon","click"])]),t(V,{appear:"",show:o.open,as:"template"},{default:l(()=>[t(d,{as:"div",onClose:s.handleClick,class:"relative z-10"},{default:l(()=>[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[oe]),_:1}),e("div",ae,[e("div",se,[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[t(g,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>[e("div",ne,[t(p,{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:l(()=>[I(" Create drug ")]),_:1}),e("button",{onClick:a[0]||(a[0]=(...v)=>s.handleClick&&s.handleClick(...v))},[t(h,{class:"w-5 h-5"})])]),t(m,{type:"form","submit-label":"Update",onSubmit:s.submitForm,actions:!1,id:"submitForm"},{default:l(({value:v})=>[e("div",le,[e("div",ie,[e("div",re,[t(m,{type:"text",label:"Name",validation:"required",modelValue:o.name,"onUpdate:modelValue":a[1]||(a[1]=x=>o.name=x)},null,8,["modelValue"])])]),e("div",ce,[e("div",de,[t(m,{type:"text",label:"Short Name",validation:"required",modelValue:o.shortName,"onUpdate:modelValue":a[2]||(a[2]=x=>o.shortName=x)},null,8,["modelValue"])])])]),e("div",me,[t(f,{type:"button",click:()=>{s.clearForm()},text:"Clear form"},null,8,["click"]),t(_,{loading:o.loading,type:"submit",click:()=>{},color:"success",icon:o.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const _e=C(te,[["render",ue]]),pe={components:{TransitionRoot:F,TransitionChild:S,Dialog:P,DialogPanel:j,DialogTitle:q,XMarkIcon:N},data(){return{viewIcon:Q,show:!1,editIcon:E,moment:X}},props:{data:{type:Object,required:!0}},methods:{handleClick(){this.show=!this.show}}},he=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),fe={class:"fixed inset-0 overflow-y-auto"},ge={class:"flex min-h-full items-center justify-center p-4 text-center"},xe={class:"border-b px-3 py-3 flex items-center justify-between"},ve=e("img",{src:W,class:"w-8 h-8 mr-2"},null,-1),ye={class:"space-y-3 px-5 py-5"},ke={class:"w-full flex flex-col space-y-1"},be=e("label",{class:"font-semibold text-lg"},"Name",-1),we={class:"underline"},Ce={class:"w-full flex flex-col space-y-1"},De=e("label",{class:"font-semibold text-lg"},"Short Name",-1),Te={class:"underline"},Ve={class:"w-full flex flex-col space-y-1"},$e=e("label",{class:"font-semibold text-lg"},"Date Created",-1),Ie={class:"underline"};function Ue(i,a,r,c,o,s){const _=U,u=n("TransitionChild"),p=n("DialogTitle"),h=n("XMarkIcon"),m=n("DialogPanel"),f=n("Dialog"),g=n("TransitionRoot");return D(),T("div",null,[t(_,{click:s.handleClick,color:"primary",text:"View",icon:o.viewIcon},null,8,["click","icon"]),t(g,{appear:"",show:o.show,as:"template"},{default:l(()=>[t(f,{as:"div",class:"relative z-10"},{default:l(()=>[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[he]),_:1}),e("div",fe,[e("div",ge,[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[t(m,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>[e("div",xe,[t(p,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:l(()=>[ve,I(" View drug ")]),_:1}),e("button",{onClick:a[0]||(a[0]=(...d)=>s.handleClick&&s.handleClick(...d))},[t(h,{class:"w-5 h-5"})])]),e("div",ye,[e("div",ke,[be,e("p",we,y(r.data.name),1)]),e("div",Ce,[De,e("p",Te,y(r.data.short_name),1)]),e("div",Ve,[$e,e("p",Ie,y(o.moment(r.data.created_date).format("dateFormat"in i?i.dateFormat:G(R))),1)])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Ne=C(pe,[["render",Ue]]),Fe={components:{TransitionRoot:F,TransitionChild:S,Dialog:P,DialogPanel:j,DialogTitle:q,XMarkIcon:N},data(){return{editIcon:E,show:!1,saveIcon:A,name:"",shortName:"",loading:!1,cookie:$("token")}},props:{data:{type:Object,required:!0}},methods:{async init(){this.handleClick(),this.loading=!0;const i={route:`${b.drugs}/${this.data.id}`,method:"GET",token:`${this.cookie}`},{pending:a,error:r,data:c}=await w(i);this.loading=a,c.value&&(this.shortName=c.value.short_name,this.name=c.value.name),r.value&&console.log(r.value)},async submitForm(){this.loading=!0;const i={route:`${b.drugs}/${this.data.id}`,method:"PUT",token:`${this.cookie}`,body:{name:this.name,short_name:this.shortName}},{pending:a,error:r,data:c}=await w(i);this.loading=a,c.value&&(this.handleClick(),k().$toast.success("Drug updated successfully!"),this.loading=!1,this.$emit("update",!0)),r.value&&(this.handleClick(),k().$toast.error(B),console.log(r.value),this.loading=!1)},clearForm(){this.$formkit.reset("editForm")},handleClick(){this.show=!this.show}}},Se=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Pe={class:"fixed inset-0 overflow-y-auto"},je={class:"flex min-h-full items-center justify-center p-4 text-center"},qe={class:"border-b px-3 py-3 flex items-center justify-between"},Me={class:"mt-2 space-y-3"},Be={class:"w-full flex items-center px-5"},Re={class:"w-full flex flex-col space-y-2"},Xe={class:"w-full flex items-center px-5 space-x-3"},Ae={class:"w-full flex flex-col space-y-2"},Ee={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Oe(i,a,r,c,o,s){const _=U,u=n("TransitionChild"),p=n("DialogTitle"),h=n("XMarkIcon"),m=n("FormKit"),f=M,g=n("DialogPanel"),d=n("Dialog"),V=n("TransitionRoot");return D(),T("div",null,[t(_,{click:s.init,text:"Edit",color:"success",icon:o.editIcon},null,8,["click","icon"]),t(V,{appear:"",show:o.show,as:"template"},{default:l(()=>[t(d,{as:"div",class:"relative z-10"},{default:l(()=>[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[Se]),_:1}),e("div",Pe,[e("div",je,[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[t(g,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>[e("div",qe,[t(p,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:l(()=>[I(" Edit drug ")]),_:1}),e("button",{onClick:a[0]||(a[0]=(...v)=>s.handleClick&&s.handleClick(...v))},[t(h,{class:"w-5 h-5"})])]),t(m,{type:"form",id:"editForm","submit-label":"Update",onSubmit:s.submitForm,actions:!1},{default:l(({value:v})=>[e("div",Me,[e("div",Be,[e("div",Re,[t(m,{type:"text",label:"Name",validation:"required",modelValue:o.name,"onUpdate:modelValue":a[1]||(a[1]=x=>o.name=x)},null,8,["modelValue"])])]),e("div",Xe,[e("div",Ae,[t(m,{type:"text",label:"Short Name",validation:"required",modelValue:o.shortName,"onUpdate:modelValue":a[2]||(a[2]=x=>o.shortName=x)},null,8,["modelValue"])])])]),e("div",Ee,[t(f,{type:"button",click:()=>{s.clearForm()},text:"Clear form"},null,8,["click"]),t(_,{loading:o.loading,type:"submit",click:()=>{},color:"success",icon:o.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Ge=C(Fe,[["render",Oe]]),Ke={setup(){K({title:`${Z.name.toUpperCase()} - Drugs`})},data(){return{header:"List Of Drugs",drugs:new Array,pages:[{name:"Home",link:"/home"},{name:"Test Catalog",link:"#"}],loading:!1,search:"",searchValue:"",cookie:$("token"),headers:[{text:"id",value:"id",sortable:!0},{text:"name",value:"name",sortable:!0},{text:"short name",value:"short_name"},{text:"date created",value:"created_date"},{text:"actions",value:"actions"}]}},components:{MagnifyingGlassIcon:ee},created(){this.init()},methods:{updateSearch(i){this.searchValue=i,this.search=i},async init(){this.loading=!0;const i={route:b.drugs,method:"GET",token:`${this.cookie}`},{pending:a,error:r,data:c}=await w(i);this.loading=a,c.value&&(this.drugs=c.value.map(o=>({...o,created_date:X(o.created_date).format(R)})),this.loading=!1),r.value&&(console.log(r.value),this.loading=!1)},updateDrugs(i){i&&(this.search="",this.searchValue="",this.init())}}},ze={class:"py-5 px-5"},He={class:"flex items-center justify-between py-5"},Le={class:"text-2xl font-semibold"},Je={class:"flex items-center space-x-3"},Qe={class:"flex justify-end w-full px-2 py-2 mb-2"},We={class:"py-2 flex items-center space-x-2"};function Ye(i,a,r,c,o,s){const _=O,u=_e,p=J,h=Ne,m=Ge,f=n("DrugsDeleteDialog"),g=Y;return D(),T("div",ze,[t(_,{pages:o.pages},null,8,["pages"]),e("div",He,[e("h3",Le,y(o.header),1),e("div",Je,[t(u,{onUpdate:s.updateDrugs},null,8,["onUpdate"])])]),e("div",Qe,[t(p,{search:o.search,"onUpdate:search":a[0]||(a[0]=d=>o.search=d),onUpdate:s.updateSearch,modelValue:o.search,"onUpdate:modelValue":a[1]||(a[1]=d=>o.search=d)},null,8,["search","onUpdate","modelValue"])]),t(g,{headers:o.headers,data:o.drugs,loading:o.loading,"search-value":o.searchValue,"search-field":"name"},{actions:l(({item:d})=>[e("div",We,[t(h,{data:d},null,8,["data"]),t(m,{data:d,onUpdate:s.updateDrugs},null,8,["data","onUpdate"]),t(f,{data:d,onUpdate:s.updateDrugs},null,8,["data","onUpdate"])])]),_:1},8,["headers","data","loading","search-value"])])}const yt=C(Ke,[["render",Ye]]);export{yt as default};