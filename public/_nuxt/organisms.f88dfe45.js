import{_ as N}from"./Breadcrumb.vue.045bd783.js";import{u as T,a as b,_ as $,f as r,o as I,c as U,d as o,b as e,g as c,h as w,e as S,t as q}from"./entry.a061692d.js";import{_ as P}from"./Multiselect.718bd723.js";import{_ as V}from"./OutlinedButton.a3101e37.js";import{r as K,e as y,f as C,j as B,a as z}from"./fetch.1d637d4b.js";import{e as R}from"./constants.5ff314f3.js";import{r as F}from"./XMarkIcon.2a91e852.js";import{r as H}from"./UserIcon.5f1d6bec.js";import{r as X}from"./ArrowDownTrayIcon.6ecffc37.js";import{r as J}from"./ArrowUturnLeftIcon.61d0d678.js";import{S as O,h as A,U as j,G as E,V as M}from"./transition.34c9747b.js";import{_ as L}from"./SearchBar.d5f1cae2.js";import{a as W}from"./PencilSquareIcon.a9348a41.js";import{_ as G}from"./bacteria.5dedd615.js";import{r as Y}from"./TrashIcon.84314054.js";import{_ as Q}from"./Datatable.bc93e7c8.js";import{u as Z}from"./vue.f36acd1f.0b4f2453.js";import{P as ee}from"./package.e5cbe000.js";import{r as te}from"./MagnifyingGlassIcon.8954957c.js";import"./nuxt-link.246d5749.js";import"./HomeIcon.eefa6f73.js";import"./PrinterIcon.63d7d5dd.js";import"./hidden.2e8968f2.js";import"./Loader.c099e152.js";const oe={components:{TransitionRoot:O,TransitionChild:A,Dialog:j,DialogPanel:E,DialogTitle:M,XMarkIcon:F,UserIcon:H},data(){return{open:!1,addIcon:K,saveIcon:X,clearIcon:J,name:"",description:"",drugSelected:null,loading:!1,drugs:new Array,rawDrugs:new Array,cookie:T("token")}},methods:{async init(){this.handleClick();const n={route:y.drugs,method:"GET",token:`${this.cookie}`},{pending:s,error:i,data:l}=await C(n);l.value&&(this.rawDrugs=l.value,l.value.map(t=>{this.drugs.push(t.name)})),i.value&&console.error(i.value)},async submitForm(){this.loading=!0;let n=new Array;this.drugSelected.map(t=>{this.rawDrugs.filter(a=>{t==a.name&&n.push(a.id)})});const{pending:s,error:i,data:l}=await B(y.organisms,{method:"POST",headers:{Authorization:`${this.cookie}`},body:{name:this.name,description:this.description,drugs:n}},"$JUYccvWHv1");l.value&&(this.handleClick(),b().$toast.success(`${this.name} organism created sucessfully!`),this.loading=!1,this.$emit("update",!0)),i.value&&(this.handleClick(),console.error(i.value),b().$toast.error(R),this.loading=!1)},updateDrugs(n){this.drugSelected=n},handleClick(){this.open=!this.open},clearForm(){this.$formkit.reset("submitForm")}}},se=o("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),ae={class:"fixed inset-0 overflow-y-auto"},ne={class:"flex min-h-full items-center justify-center p-4 text-center"},ie={class:"border-b px-3 py-3 flex items-center justify-between"},le={class:"mt-2 space-y-3"},re={class:"w-full flex items-center px-5"},ce={class:"w-full flex flex-col space-y-2"},de={class:"w-full flex items-center px-5 space-x-3"},ue={class:"w-full flex flex-col space-y-2"},me={class:"w-full pb-20 px-5"},pe={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function _e(n,s,i,l,t,a){const d=S,m=r("TransitionChild"),g=r("DialogTitle"),v=r("XMarkIcon"),u=r("FormKit"),f=P,x=V,p=r("DialogPanel"),k=r("Dialog"),D=r("TransitionRoot");return I(),U("div",null,[o("div",null,[e(d,{text:"Create organism",color:"primary",icon:t.addIcon,click:a.init},null,8,["icon","click"])]),e(D,{appear:"",show:t.open,as:"template"},{default:c(()=>[e(k,{as:"div",onClose:a.handleClick,class:"relative z-10"},{default:c(()=>[e(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:c(()=>[se]),_:1}),o("div",ae,[o("div",ne,[e(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:c(()=>[e(p,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:c(()=>[o("div",ie,[e(g,{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:c(()=>[w(" Create organism ")]),_:1}),o("button",{onClick:s[0]||(s[0]=(..._)=>a.handleClick&&a.handleClick(..._))},[e(v,{class:"w-5 h-5"})])]),e(u,{type:"form","submit-label":"Update",onSubmit:a.submitForm,actions:!1,id:"submitForm"},{default:c(({value:_})=>[o("div",le,[o("div",re,[o("div",ce,[e(u,{type:"text",label:"Name",validation:"required",modelValue:t.name,"onUpdate:modelValue":s[1]||(s[1]=h=>t.name=h)},null,8,["modelValue"])])]),o("div",de,[o("div",ue,[e(u,{type:"textarea",label:"Description",validation:"required",modelValue:t.description,"onUpdate:modelValue":s[2]||(s[2]=h=>t.description=h)},null,8,["modelValue"])])]),o("div",me,[e(f,{label:"Drugs","items-selected":t.drugSelected,items:t.drugs,mode:"tags",onUpdate:a.updateDrugs},null,8,["items-selected","items","onUpdate"])])]),o("div",pe,[e(x,{type:"button",click:()=>{a.clearForm()},text:"Clear form"},null,8,["click"]),e(d,{loading:t.loading,type:"submit",click:()=>{},color:"success",icon:t.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const he=$(oe,[["render",_e]]),fe={components:{TransitionRoot:O,TransitionChild:A,Dialog:j,DialogPanel:E,DialogTitle:M,XMarkIcon:F},data(){return{editIcon:W,show:!1,saveIcon:X,name:this.data.name,description:this.data.description,drugSelected:new Array,drugs:new Array,rawDrugs:new Array,loading:!1}},props:{data:{type:Object,required:!0}},setup(){return{cookie:T("token")}},methods:{async loadDrugs(){const n={route:y.drugs,method:"GET",token:`${this.cookie}`},{pending:s,error:i,data:l}=await C(n);l.value&&(this.rawDrugs=l.value,l.value.map(t=>{this.drugs.push(t.name)})),i.value&&console.error(i.value)},async init(){await this.loadDrugs(),this.handleClick(),this.drugSelected=new Array;const n={route:`${y.organisms}/${this.data.id}`,method:"GET",token:`${this.cookie}`},{pending:s,error:i,data:l}=await C(n);l.value&&l.value.drugs.map(t=>{this.drugSelected.push(t.name)}),i.value&&console.error(i.value)},async submitForm(){this.loading=!0;let n=new Array;this.drugSelected.map(a=>{this.rawDrugs.filter(d=>{a==d.name&&n.push(d.id)})}),this.data.drugs=n;const s={route:`${y.organisms}/${this.data.id}`,method:"PUT",token:`${this.cookie}`,body:this.data},{pending:i,error:l,data:t}=await C(s);t.value&&(this.show=!1,b().$toast.success("Organism updated successfully!"),this.loading=!1,this.$emit("update",!0)),l.value&&(this.show=!1,console.error(l.value),this.loading=!1,b().$toast.error(R))},updateDrugs(n){this.drugSelected=n},handleClick(){this.show=!this.show},clearForm(){this.$formkit.reset("submitForm")}}},ge=o("div",{class:"fixed inset-0 bg-gray-900 bg-opacity-25"},null,-1),ve={class:"fixed inset-0 overflow-y-auto"},xe={class:"flex min-h-full items-center justify-center p-4 text-center"},ye={class:"border-b px-3 py-3 flex items-center justify-between"},we=o("img",{src:G,class:"w-8 h-8 mr-2"},null,-1),be={class:"mt-2 space-y-3"},ke={class:"w-full flex items-center px-5"},De={class:"w-full flex flex-col space-y-2"},Ce={class:"w-full flex items-center px-5 space-x-3"},Te={class:"w-full flex flex-col space-y-2"},$e={class:"w-full pb-20 px-5"},Ie={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Ue(n,s,i,l,t,a){const d=S,m=r("TransitionChild"),g=r("DialogTitle"),v=r("XMarkIcon"),u=r("FormKit"),f=P,x=V,p=r("DialogPanel"),k=r("Dialog"),D=r("TransitionRoot");return I(),U("div",null,[e(d,{click:a.init,text:"Edit",color:"success",icon:t.editIcon},null,8,["click","icon"]),e(D,{appear:"",show:t.show,as:"template"},{default:c(()=>[e(k,{as:"div",class:"relative z-10"},{default:c(()=>[e(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:c(()=>[ge]),_:1}),o("div",ve,[o("div",xe,[e(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:c(()=>[e(p,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:c(()=>[o("div",ye,[e(g,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:c(()=>[we,w(" Edit organism ")]),_:1}),o("button",{onClick:s[0]||(s[0]=(..._)=>a.handleClick&&a.handleClick(..._))},[e(v,{class:"w-5 h-5"})])]),e(u,{type:"form","submit-label":"Update",onSubmit:a.submitForm,actions:!1,id:"submitForm"},{default:c(({value:_})=>[o("div",be,[o("div",ke,[o("div",De,[e(u,{type:"text",label:"Name",validation:"required",modelValue:i.data.name,"onUpdate:modelValue":s[1]||(s[1]=h=>i.data.name=h)},null,8,["modelValue"])])]),o("div",Ce,[o("div",Te,[e(u,{type:"text",label:"Description",validation:"required",modelValue:i.data.description,"onUpdate:modelValue":s[2]||(s[2]=h=>i.data.description=h)},null,8,["modelValue"])])]),o("div",$e,[e(f,{label:"Drugs","items-selected":t.drugSelected,items:t.drugs,mode:"tags",onUpdate:a.updateDrugs},null,8,["items-selected","items","onUpdate"])])]),o("div",Ie,[e(x,{text:"Clear form",type:"button",click:()=>{a.clearForm()}},null,8,["click"]),e(d,{loading:t.loading,type:"submit",click:()=>{},color:"success",icon:t.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Se=$(fe,[["render",Ue]]),Ve={components:{TransitionRoot:O,TransitionChild:A,Dialog:j,DialogPanel:E,DialogTitle:M,XMarkIcon:F,ExclamationTriangleIcon:z},data(){return{show:!1,deleteIcon:Y,loading:!1,cookie:T("token"),reason:""}},props:{data:{type:Object,required:!0}},methods:{async deleteData(n){this.loading=!0;const{pending:s,error:i,data:l}=await B(`${y.organisms}/${n}`,{method:"DELETE",headers:{Authorization:`${this.cookie}`},body:{retired_reason:this.reason}},"$uMsyS7TGbT");l.value&&(this.handleClick(),b().$toast.success("Drug deleted successfully!"),this.loading=!1,this.$emit("update",!0)),i.value&&(console.log(i.value),b().$toast.error("An error occurred, please try again!"),this.loading=!1)},handleClick(){this.show=!this.show}}},Fe=o("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Oe={class:"fixed inset-0 overflow-y-auto"},Ae={class:"flex min-h-full items-center justify-center p-4 text-center"},je={class:"border-b px-3 py-3 flex items-center justify-between"},Ee={class:"mt-2 space-y-3 px-5"},Me={class:"rounded px-2 py-2"},qe={class:"font-semibold text-red-500"},Pe={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Be(n,s,i,l,t,a){const d=S,m=r("TransitionChild"),g=r("ExclamationTriangleIcon"),v=r("DialogTitle"),u=r("XMarkIcon"),f=r("FormKit"),x=V,p=r("DialogPanel"),k=r("Dialog"),D=r("TransitionRoot");return I(),U("div",null,[e(d,{click:a.handleClick,color:"error",text:"Delete",icon:t.deleteIcon},null,8,["click","icon"]),e(D,{appear:"",show:t.show,as:"template"},{default:c(()=>[e(k,{as:"div",class:"relative z-10"},{default:c(()=>[e(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:c(()=>[Fe]),_:1}),o("div",Oe,[o("div",Ae,[e(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:c(()=>[e(p,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:c(()=>[o("div",je,[e(v,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:c(()=>[e(g,{class:"h-5 w-5 mr-2"}),w(" Confirm delete ")]),_:1}),o("button",{onClick:s[0]||(s[0]=(..._)=>a.handleClick&&a.handleClick(..._))},[e(u,{class:"w-5 h-5"})])]),e(f,{type:"form","submit-label":"Update",onSubmit:s[2]||(s[2]=_=>a.deleteData(i.data.id)),actions:!1},{default:c(({value:_})=>[o("div",Ee,[o("div",Me,[w(" Do you really want to delete "),o("span",qe,q(i.data.name),1),w("? Note that once this action is completed, it can not be undone ")]),e(f,{type:"textarea",label:"Reason",validation:"required",modelValue:t.reason,"onUpdate:modelValue":s[1]||(s[1]=h=>t.reason=h)},null,8,["modelValue"])]),o("div",Pe,[e(x,{click:()=>{a.handleClick()},type:"button",text:"Cancel"},null,8,["click"]),e(d,{loading:t.loading,type:"submit",click:()=>{},color:"error",icon:t.deleteIcon,text:"Delete"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Re=$(Ve,[["render",Be]]),Xe={setup(){Z({title:`${ee.name.toUpperCase()} - Organisms`})},data(){return{header:"Organisms",loading:!1,search:"",searchValue:"",headers:[{text:"id",value:"id",sortable:!0},{text:"name",value:"name",sortable:!0},{text:"description",value:"description"},{text:"actions",value:"actions"}],organisms:[],pages:[{name:"Home",link:"/home"},{name:"Test Catalog",link:"#"}],cookie:T("token")}},components:{MagnifyingGlassIcon:te},created(){this.init()},methods:{updateSearch(n){this.searchValue=n,this.search=n},async init(){this.loading=!0;const n={route:y.organisms,method:"GET",token:`${this.cookie}`},{data:s,error:i,pending:l}=await C(n);this.loading=l,s.value&&(this.organisms=s.value,this.loading=!1),i.value&&(console.error(i.value),this.loading=!1)},updateOrganisms(n){n&&this.init()}}},Ge={class:"py-5 px-5"},Ne={class:"flex items-center justify-between py-5"},Ke={class:"text-2xl font-semibold flex items-center uppercase"},ze=o("img",{src:G,alt:"report-icon",class:"w-8 h-8 mr-2"},null,-1),He={class:"flex items-center space-x-3"},Je={class:"flex justify-end w-full px-2 py-2 mb-2"},Le={class:"py-2 flex items-center space-x-2"};function We(n,s,i,l,t,a){const d=N,m=he,g=L,v=r("OrganismsViewDialog"),u=Se,f=Re,x=Q;return I(),U("div",Ge,[e(d,{pages:t.pages},null,8,["pages"]),o("div",Ne,[o("div",Ke,[ze,w(" "+q(t.header),1)]),o("div",He,[e(m,{onUpdate:a.updateOrganisms},null,8,["onUpdate"])])]),o("div",Je,[e(g,{search:t.search,onUpdate:a.updateSearch},null,8,["search","onUpdate"])]),e(x,{headers:t.headers,data:t.organisms,loading:t.loading,"search-value":t.searchValue,"search-field":"name"},{actions:c(({item:p})=>[o("div",Le,[e(v,{data:p},null,8,["data"]),e(u,{data:p,onUpdate:a.updateOrganisms},null,8,["data","onUpdate"]),e(f,{data:p,onUpdate:a.updateOrganisms},null,8,["data","onUpdate"])])]),_:1},8,["headers","data","loading","search-value"])])}const wt=$(Xe,[["render",We]]);export{wt as default};