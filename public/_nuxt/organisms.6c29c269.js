import{_ as G}from"./Breadcrumb.vue.7a457d8b.js";import{a as T,b as w,_ as $,g as r,o as I,c as U,e as o,d as e,h as c,i as D,f as S,t as q,u as N}from"./entry.18364f1c.js";import{_ as P}from"./Multiselect.6be84236.js";import{_ as V}from"./OutlinedButton.ed874ea2.js";import{r as K,e as y,f as C,k as B,a as z}from"./fetch.5f03fbcc.js";import{e as R}from"./constants.86829aaf.js";import{r as F}from"./XMarkIcon.13f92378.js";import{r as H}from"./UserIcon.45f7a473.js";import{r as X}from"./ArrowDownTrayIcon.5c7b53f6.js";import{r as L}from"./ArrowUturnLeftIcon.7b370d28.js";import{S as O,h as A,U as E,G as M,V as j}from"./transition.bca0aae9.js";import{_ as J}from"./SearchBar.e319ad24.js";import{a as W}from"./PencilSquareIcon.5a78d442.js";import{_ as Y}from"./bacteria.872f90ea.js";import{r as Q}from"./TrashIcon.801b3401.js";import{_ as Z}from"./Datatable.9ecef914.js";import{P as ee}from"./package.b965e1b0.js";import{r as te}from"./MagnifyingGlassIcon.570b6e64.js";import"./nuxt-link.eb4fc10e.js";import"./HomeIcon.8d531f3f.js";import"./PrinterIcon.46fc5b73.js";import"./hidden.d8a7e9c3.js";import"./Loader.888095c3.js";const oe={components:{TransitionRoot:O,TransitionChild:A,Dialog:E,DialogPanel:M,DialogTitle:j,XMarkIcon:F,UserIcon:H},data(){return{open:!1,addIcon:K,saveIcon:X,clearIcon:L,name:"",description:"",drugSelected:null,loading:!1,drugs:new Array,rawDrugs:new Array,cookie:T("token")}},methods:{async init(){this.handleClick();const n={route:y.drugs,method:"GET",token:`${this.cookie}`},{pending:s,error:i,data:l}=await C(n);l.value&&(this.rawDrugs=l.value,l.value.map(t=>{this.drugs.push(t.name)})),i.value&&console.error(i.value)},async submitForm(){this.loading=!0;let n=new Array;this.drugSelected.map(t=>{this.rawDrugs.filter(a=>{t==a.name&&n.push(a.id)})});const{pending:s,error:i,data:l}=await B(y.organisms,{method:"POST",headers:{Authorization:`${this.cookie}`},body:{name:this.name,description:this.description,drugs:n}},"$JUYccvWHv1");l.value&&(this.handleClick(),w().$toast.success(`${this.name} organism created sucessfully!`),this.loading=!1,this.$emit("update",!0)),i.value&&(this.handleClick(),console.error(i.value),w().$toast.error(R),this.loading=!1)},updateDrugs(n){this.drugSelected=n},handleClick(){this.open=!this.open},clearForm(){this.$formkit.reset("submitForm")}}},se=o("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),ae={class:"fixed inset-0 overflow-y-auto"},ne={class:"flex min-h-full items-center justify-center p-4 text-center"},ie={class:"border-b px-3 py-3 flex items-center justify-between"},le={class:"mt-2 space-y-3"},re={class:"w-full flex items-center px-5"},ce={class:"w-full flex flex-col space-y-2"},de={class:"w-full flex items-center px-5 space-x-3"},ue={class:"w-full flex flex-col space-y-2"},me={class:"w-full pb-20 px-5"},pe={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function _e(n,s,i,l,t,a){const d=S,m=r("TransitionChild"),g=r("DialogTitle"),v=r("XMarkIcon"),u=r("FormKit"),f=P,x=V,p=r("DialogPanel"),b=r("Dialog"),k=r("TransitionRoot");return I(),U("div",null,[o("div",null,[e(d,{text:"Create organism",color:"primary",icon:t.addIcon,click:a.init},null,8,["icon","click"])]),e(k,{appear:"",show:t.open,as:"template"},{default:c(()=>[e(b,{as:"div",onClose:a.handleClick,class:"relative z-10"},{default:c(()=>[e(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:c(()=>[se]),_:1}),o("div",ae,[o("div",ne,[e(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:c(()=>[e(p,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:c(()=>[o("div",ie,[e(g,{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:c(()=>[D(" Create organism ")]),_:1}),o("button",{onClick:s[0]||(s[0]=(..._)=>a.handleClick&&a.handleClick(..._))},[e(v,{class:"w-5 h-5"})])]),e(u,{type:"form","submit-label":"Update",onSubmit:a.submitForm,actions:!1,id:"submitForm"},{default:c(({value:_})=>[o("div",le,[o("div",re,[o("div",ce,[e(u,{type:"text",label:"Name",validation:"required",modelValue:t.name,"onUpdate:modelValue":s[1]||(s[1]=h=>t.name=h)},null,8,["modelValue"])])]),o("div",de,[o("div",ue,[e(u,{type:"textarea",label:"Description",validation:"required",modelValue:t.description,"onUpdate:modelValue":s[2]||(s[2]=h=>t.description=h)},null,8,["modelValue"])])]),o("div",me,[e(f,{label:"Drugs","items-selected":t.drugSelected,items:t.drugs,mode:"tags",onUpdate:a.updateDrugs},null,8,["items-selected","items","onUpdate"])])]),o("div",pe,[e(x,{type:"button",click:()=>{a.clearForm()},text:"Clear form"},null,8,["click"]),e(d,{loading:t.loading,type:"submit",click:()=>{},color:"success",icon:t.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const he=$(oe,[["render",_e]]),fe={components:{TransitionRoot:O,TransitionChild:A,Dialog:E,DialogPanel:M,DialogTitle:j,XMarkIcon:F},data(){return{editIcon:W,show:!1,saveIcon:X,name:this.data.name,description:this.data.description,drugSelected:new Array,drugs:new Array,rawDrugs:new Array,loading:!1}},props:{data:{type:Object,required:!0}},setup(){return{cookie:T("token")}},methods:{async loadDrugs(){const n={route:y.drugs,method:"GET",token:`${this.cookie}`},{pending:s,error:i,data:l}=await C(n);l.value&&(this.rawDrugs=l.value,l.value.map(t=>{this.drugs.push(t.name)})),i.value&&console.error(i.value)},async init(){await this.loadDrugs(),this.handleClick(),this.drugSelected=new Array;const n={route:`${y.organisms}/${this.data.id}`,method:"GET",token:`${this.cookie}`},{pending:s,error:i,data:l}=await C(n);l.value&&l.value.drugs.map(t=>{this.drugSelected.push(t.name)}),i.value&&console.error(i.value)},async submitForm(){this.loading=!0;let n=new Array;this.drugSelected.map(a=>{this.rawDrugs.filter(d=>{a==d.name&&n.push(d.id)})}),this.data.drugs=n;const s={route:`${y.organisms}/${this.data.id}`,method:"PUT",token:`${this.cookie}`,body:this.data},{pending:i,error:l,data:t}=await C(s);t.value&&(this.show=!1,w().$toast.success("Organism updated successfully!"),this.loading=!1,this.$emit("update",!0)),l.value&&(this.show=!1,console.error(l.value),this.loading=!1,w().$toast.error(R))},updateDrugs(n){this.drugSelected=n},handleClick(){this.show=!this.show},clearForm(){this.$formkit.reset("submitForm")}}},ge=o("div",{class:"fixed inset-0 bg-gray-900 bg-opacity-25"},null,-1),ve={class:"fixed inset-0 overflow-y-auto"},xe={class:"flex min-h-full items-center justify-center p-4 text-center"},ye={class:"border-b px-3 py-3 flex items-center justify-between"},we=o("img",{src:Y,class:"w-8 h-8 mr-2"},null,-1),be={class:"mt-2 space-y-3"},ke={class:"w-full flex items-center px-5"},De={class:"w-full flex flex-col space-y-2"},Ce={class:"w-full flex items-center px-5 space-x-3"},Te={class:"w-full flex flex-col space-y-2"},$e={class:"w-full pb-20 px-5"},Ie={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Ue(n,s,i,l,t,a){const d=S,m=r("TransitionChild"),g=r("DialogTitle"),v=r("XMarkIcon"),u=r("FormKit"),f=P,x=V,p=r("DialogPanel"),b=r("Dialog"),k=r("TransitionRoot");return I(),U("div",null,[e(d,{click:a.init,text:"Edit",color:"success",icon:t.editIcon},null,8,["click","icon"]),e(k,{appear:"",show:t.show,as:"template"},{default:c(()=>[e(b,{as:"div",class:"relative z-10"},{default:c(()=>[e(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:c(()=>[ge]),_:1}),o("div",ve,[o("div",xe,[e(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:c(()=>[e(p,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:c(()=>[o("div",ye,[e(g,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:c(()=>[we,D(" Edit organism ")]),_:1}),o("button",{onClick:s[0]||(s[0]=(..._)=>a.handleClick&&a.handleClick(..._))},[e(v,{class:"w-5 h-5"})])]),e(u,{type:"form","submit-label":"Update",onSubmit:a.submitForm,actions:!1,id:"submitForm"},{default:c(({value:_})=>[o("div",be,[o("div",ke,[o("div",De,[e(u,{type:"text",label:"Name",validation:"required",modelValue:i.data.name,"onUpdate:modelValue":s[1]||(s[1]=h=>i.data.name=h)},null,8,["modelValue"])])]),o("div",Ce,[o("div",Te,[e(u,{type:"text",label:"Description",validation:"required",modelValue:i.data.description,"onUpdate:modelValue":s[2]||(s[2]=h=>i.data.description=h)},null,8,["modelValue"])])]),o("div",$e,[e(f,{label:"Drugs","items-selected":t.drugSelected,items:t.drugs,mode:"tags",onUpdate:a.updateDrugs},null,8,["items-selected","items","onUpdate"])])]),o("div",Ie,[e(x,{text:"Clear form",type:"button",click:()=>{a.clearForm()}},null,8,["click"]),e(d,{loading:t.loading,type:"submit",click:()=>{},color:"success",icon:t.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Se=$(fe,[["render",Ue]]),Ve={components:{TransitionRoot:O,TransitionChild:A,Dialog:E,DialogPanel:M,DialogTitle:j,XMarkIcon:F,ExclamationTriangleIcon:z},data(){return{show:!1,deleteIcon:Q,loading:!1,cookie:T("token"),reason:""}},props:{data:{type:Object,required:!0}},methods:{async deleteData(n){this.loading=!0;const{pending:s,error:i,data:l}=await B(`${y.organisms}/${n}`,{method:"DELETE",headers:{Authorization:`${this.cookie}`},body:{retired_reason:this.reason}},"$uMsyS7TGbT");l.value&&(this.handleClick(),w().$toast.success("Drug deleted successfully!"),this.loading=!1,this.$emit("update",!0)),i.value&&(console.log(i.value),w().$toast.error("An error occurred, please try again!"),this.loading=!1)},handleClick(){this.show=!this.show}}},Fe=o("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Oe={class:"fixed inset-0 overflow-y-auto"},Ae={class:"flex min-h-full items-center justify-center p-4 text-center"},Ee={class:"border-b px-3 py-3 flex items-center justify-between"},Me={class:"mt-2 space-y-3 px-5"},je={class:"rounded px-2 py-2"},qe={class:"font-semibold text-red-500"},Pe={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Be(n,s,i,l,t,a){const d=S,m=r("TransitionChild"),g=r("ExclamationTriangleIcon"),v=r("DialogTitle"),u=r("XMarkIcon"),f=r("FormKit"),x=V,p=r("DialogPanel"),b=r("Dialog"),k=r("TransitionRoot");return I(),U("div",null,[e(d,{click:a.handleClick,color:"error",text:"Delete",icon:t.deleteIcon},null,8,["click","icon"]),e(k,{appear:"",show:t.show,as:"template"},{default:c(()=>[e(b,{as:"div",class:"relative z-10"},{default:c(()=>[e(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:c(()=>[Fe]),_:1}),o("div",Oe,[o("div",Ae,[e(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:c(()=>[e(p,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:c(()=>[o("div",Ee,[e(v,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:c(()=>[e(g,{class:"h-5 w-5 mr-2"}),D(" Confirm delete ")]),_:1}),o("button",{onClick:s[0]||(s[0]=(..._)=>a.handleClick&&a.handleClick(..._))},[e(u,{class:"w-5 h-5"})])]),e(f,{type:"form","submit-label":"Update",onSubmit:s[2]||(s[2]=_=>a.deleteData(i.data.id)),actions:!1},{default:c(({value:_})=>[o("div",Me,[o("div",je,[D(" Do you really want to delete "),o("span",qe,q(i.data.name),1),D("? Note that once this action is completed, it can not be undone ")]),e(f,{type:"textarea",label:"Reason",validation:"required",modelValue:t.reason,"onUpdate:modelValue":s[1]||(s[1]=h=>t.reason=h)},null,8,["modelValue"])]),o("div",Pe,[e(x,{click:()=>{a.handleClick()},type:"button",text:"Cancel"},null,8,["click"]),e(d,{loading:t.loading,type:"submit",click:()=>{},color:"error",icon:t.deleteIcon,text:"Delete"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Re=$(Ve,[["render",Be]]),Xe={setup(){N({title:`${ee.name.toUpperCase()} - Organisms`})},data(){return{header:"List Of Organisms",loading:!1,search:"",searchValue:"",headers:[{text:"id",value:"id",sortable:!0},{text:"name",value:"name",sortable:!0},{text:"description",value:"description"},{text:"actions",value:"actions"}],organisms:[],pages:[{name:"Home",link:"/home"},{name:"Test Catalog",link:"#"}],cookie:T("token")}},components:{MagnifyingGlassIcon:te},created(){this.init()},methods:{updateSearch(n){this.searchValue=n,this.search=n},async init(){this.loading=!0;const n={route:y.organisms,method:"GET",token:`${this.cookie}`},{data:s,error:i,pending:l}=await C(n);this.loading=l,s.value&&(this.organisms=s.value,this.loading=!1),i.value&&(console.error(i.value),this.loading=!1)},updateOrganisms(n){n&&this.init()}}},Ge={class:"py-5 px-5"},Ne={class:"flex items-center justify-between py-5"},Ke={class:"text-2xl font-semibold"},ze={class:"flex items-center space-x-3"},He={class:"flex justify-end w-full px-2 py-2 mb-2"},Le={class:"py-2 flex items-center space-x-2"};function Je(n,s,i,l,t,a){const d=G,m=he,g=J,v=r("OrganismsViewDialog"),u=Se,f=Re,x=Z;return I(),U("div",Ge,[e(d,{pages:t.pages},null,8,["pages"]),o("div",Ne,[o("h3",Ke,q(t.header),1),o("div",ze,[e(m,{onUpdate:a.updateOrganisms},null,8,["onUpdate"])])]),o("div",He,[e(g,{search:t.search,onUpdate:a.updateSearch},null,8,["search","onUpdate"])]),e(x,{headers:t.headers,data:t.organisms,loading:t.loading,"search-value":t.searchValue,"search-field":"name"},{actions:c(({item:p})=>[o("div",Le,[e(v,{data:p},null,8,["data"]),e(u,{data:p,onUpdate:a.updateOrganisms},null,8,["data","onUpdate"]),e(f,{data:p,onUpdate:a.updateOrganisms},null,8,["data","onUpdate"])])]),_:1},8,["headers","data","loading","search-value"])])}const xt=$(Xe,[["render",Je]]);export{xt as default};