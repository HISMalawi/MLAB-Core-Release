import{o as p,c as h,d as o,u as T,a as v,_ as V,f as i,b as t,g as l,h as D,e as U,t as C,F as M,r as S,n as J,j as N,w as B,v as X,k as Q}from"./entry.a061692d.js";import{e as F,d as W}from"./constants.5ff314f3.js";import{r as L,e as P,f as I,a as Y,h as Z}from"./fetch.1d637d4b.js";import{r as j}from"./XMarkIcon.2a91e852.js";import{r as G}from"./PrinterIcon.63d7d5dd.js";import{r as A}from"./ArrowDownTrayIcon.6ecffc37.js";import{h as q,S as z,U as $,G as E,V as R}from"./transition.34c9747b.js";import{_ as ee}from"./Loader.c099e152.js";import{a as H}from"./PencilSquareIcon.a9348a41.js";import{r as O}from"./TrashIcon.84314054.js";import{u as te}from"./vue.f36acd1f.0b4f2453.js";import{u as K}from"./facility.0787e843.js";import{P as oe}from"./package.e5cbe000.js";import"./hidden.2e8968f2.js";function ne(c,n){return p(),h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[o("path",{d:"M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"})])}const se={components:{TransitionChild:q,TransitionRoot:z,Dialog:$,DialogPanel:E,DialogTitle:R,XMarkIcon:j,PrinterIcon:G},data(){return{addIcon:L,saveIcon:A,open:!1,loading:!1,cookie:T("token"),name:"",description:""}},methods:{async submitForm(){this.loading=!1;const c={route:P.printers,method:"POST",token:`${this.cookie}`,body:{name:this.name,description:this.description}},{data:n,error:s,pending:d}=await I(c);this.loading=d,n.value&&(v().$toast.success("Facility created successfully!"),this.$emit("update",!0),this.loading=!1,this.handleClick()),s.value&&(console.error(s.value),v().$toast.error(F),this.loading=!1)},handleClick(){this.open=!this.open}}},ie=o("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),ae={class:"fixed inset-0 overflow-y-auto"},le={class:"flex min-h-full items-center justify-center p-4 text-center"},re={class:"border-b px-3 py-3 flex items-center justify-between"},ce={class:"px-5 py-5"},de={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function ue(c,n,s,d,e,r){const m=U,f=i("TransitionChild"),x=i("PrinterIcon"),b=i("DialogTitle"),k=i("XMarkIcon"),_=i("FormKit"),u=i("DialogPanel"),a=i("Dialog"),w=i("TransitionRoot");return p(),h("div",null,[o("div",null,[t(m,{click:r.handleClick,text:"Add printer",color:"primary",icon:e.addIcon},null,8,["click","icon"])]),t(w,{appear:"",show:e.open,as:"template"},{default:l(()=>[t(a,{as:"div",onClose:r.handleClick,class:"relative z-10"},{default:l(()=>[t(f,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[ie]),_:1}),o("div",ae,[o("div",le,[t(f,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[t(u,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>[o("div",re,[t(b,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:l(()=>[t(x,{class:"w-8 h-8 mr-2"}),D(" Add printer ")]),_:1}),o("button",{onClick:n[0]||(n[0]=(...g)=>r.handleClick&&r.handleClick(...g))},[t(k,{class:"w-5 h-5"})])]),t(_,{type:"form","submit-label":"Update",onSubmit:r.submitForm,actions:!1},{default:l(({value:g})=>[o("div",ce,[t(_,{type:"text",label:"Name",validation:"required",modelValue:e.name,"onUpdate:modelValue":n[1]||(n[1]=y=>e.name=y)},null,8,["modelValue"]),t(_,{type:"textarea",label:"Description",validation:"required",modelValue:e.description,"onUpdate:modelValue":n[2]||(n[2]=y=>e.description=y)},null,8,["modelValue"])]),o("div",de,[t(m,{click:()=>{},type:"submit",color:"success",icon:e.saveIcon,text:"Save chages",loading:e.loading},null,8,["icon","loading"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const me=V(se,[["render",ue]]),pe={components:{TransitionRoot:z,TransitionChild:q,Dialog:$,DialogPanel:E,DialogTitle:R,XMarkIcon:j,PrinterIcon:G},data(){return{editIcon:H,show:!1,saveIcon:A,loading:!1,cookie:T("token")}},props:{data:{type:Object,required:!0}},methods:{async submitForm(){this.loading=!0;const c={route:`${P.printers}/${this.data.id}`,method:"PUT",token:`${this.cookie}`,body:this.data},{pending:n,error:s,data:d}=await I(c);this.loading=n,d.value&&(this.handleClick(),v().$toast.success("Printer updated successfully!"),this.loading=!1,this.$emit("update",!0)),s.value&&(v().$toast.success(F),this.handleClick(),console.error(s.value),this.loading=!1)},handleClick(){this.show=!this.show}}},he=o("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),_e={class:"fixed inset-0 overflow-y-auto"},fe={class:"flex min-h-full items-center justify-center p-4 text-center"},ge={class:"border-b px-3 py-3 flex items-center justify-between"},ye={class:"mt-2 space-y-3"},ve={class:"w-full flex items-center px-5"},xe={class:"w-full flex flex-col space-y-2"},be={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function ke(c,n,s,d,e,r){const m=U,f=i("TransitionChild"),x=i("PrinterIcon"),b=i("DialogTitle"),k=i("XMarkIcon"),_=i("FormKit"),u=i("DialogPanel"),a=i("Dialog"),w=i("TransitionRoot");return p(),h("div",null,[t(m,{click:r.handleClick,text:"Edit",icon:e.editIcon,color:"success"},null,8,["click","icon"]),t(w,{appear:"",show:e.show,as:"template"},{default:l(()=>[t(a,{as:"div",class:"relative z-10"},{default:l(()=>[t(f,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[he]),_:1}),o("div",_e,[o("div",fe,[t(f,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[t(u,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>[o("div",ge,[t(b,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:l(()=>[t(x,{class:"w-8 h-8 mr-2"}),D(" Edit printer ")]),_:1}),o("button",{onClick:n[0]||(n[0]=(...g)=>r.handleClick&&r.handleClick(...g))},[t(k,{class:"w-5 h-5"})])]),t(_,{type:"form","submit-label":"Update",onSubmit:r.submitForm,actions:!1},{default:l(({value:g})=>[o("div",ye,[o("div",ve,[o("div",xe,[t(_,{type:"text",label:"Name",validation:"required",modelValue:s.data.name,"onUpdate:modelValue":n[1]||(n[1]=y=>s.data.name=y)},null,8,["modelValue"]),t(_,{type:"textarea",label:"Description",validation:"required",modelValue:s.data.description,"onUpdate:modelValue":n[2]||(n[2]=y=>s.data.description=y)},null,8,["modelValue"])])]),o("div",be,[t(m,{type:"submit",click:()=>{},color:"success",loading:e.loading,icon:e.saveIcon,text:"Save changes"},null,8,["loading","icon"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const we=V(pe,[["render",ke]]),Ce={components:{TransitionRoot:z,TransitionChild:q,Dialog:$,DialogPanel:E,DialogTitle:R,XMarkIcon:j,ExclamationTriangleIcon:Y},data(){return{show:!1,deleteIcon:O,loading:!1,cookie:T("token"),reason:""}},props:{data:{type:Object,required:!0}},methods:{async deleteData(c){this.loading=!0;const n={route:`${P.printers}/${c}`,method:"DELETE",token:`${this.cookie}`,body:{voided_reason:this.reason}},{data:s,error:d,pending:e}=await I(n);this.loading=e,s.value&&(this.handleClick(),v().$toast.success("Printer deleted successfully!"),this.loading=!1,this.$emit("update",!0)),d.value&&(console.error(d.value),v().$toast.error(F),this.loading=!1)},handleClick(){this.show=!this.show}}},De=o("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Pe={class:"fixed inset-0 overflow-y-auto"},Ie={class:"flex min-h-full items-center justify-center p-4 text-center"},Te={class:"border-b px-3 py-3 flex items-center justify-between"},Ve={class:"mt-2 space-y-3 px-5"},Ue={class:"rounded px-2 py-2"},Fe={class:"font-semibold text-red-500"},Me={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Se(c,n,s,d,e,r){const m=U,f=i("TransitionChild"),x=i("ExclamationTriangleIcon"),b=i("DialogTitle"),k=i("XMarkIcon"),_=i("FormKit"),u=i("DialogPanel"),a=i("Dialog"),w=i("TransitionRoot");return p(),h("div",null,[t(m,{click:r.handleClick,color:"error",text:"Delete",icon:e.deleteIcon},null,8,["click","icon"]),t(w,{appear:"",show:e.show,as:"template"},{default:l(()=>[t(a,{as:"div",class:"relative z-10"},{default:l(()=>[t(f,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[De]),_:1}),o("div",Pe,[o("div",Ie,[t(f,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[t(u,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>[o("div",Te,[t(b,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:l(()=>[t(x,{class:"h-5 w-5 mr-2"}),D(" Confirm delete ")]),_:1}),o("button",{onClick:n[0]||(n[0]=(...g)=>r.handleClick&&r.handleClick(...g))},[t(k,{class:"w-5 h-5"})])]),t(_,{type:"form","submit-label":"Update",onSubmit:n[2]||(n[2]=g=>r.deleteData(s.data.id)),actions:!1},{default:l(({value:g})=>[o("div",Ve,[o("div",Ue,[D(" Do you really want to delete "),o("span",Fe,C(s.data.name),1),D("? Note that once this action is completed, it can not be undone ")]),t(_,{type:"textarea",label:"Reason",validation:"required",modelValue:e.reason,"onUpdate:modelValue":n[1]||(n[1]=y=>e.reason=y)},null,8,["modelValue"])]),o("div",Me,[t(m,{loading:e.loading,type:"submit",click:()=>{},color:"error",icon:e.deleteIcon,text:"Delete"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const je=V(Ce,[["render",Se]]),Ae={components:{AdjustmentsHorizontalIcon:ne},setup(){te({title:`${oe.name.toUpperCase()} - Configuration`})},data(){return{moment:Z,config:["Facility","Printers"],tab:0,addIcon:L,saveIcon:A,deleteIcon:O,editIcon:H,printersHeader:[{text:"name",value:"name"},{text:"description",value:"description"},{text:"date created",value:"date_created"},{text:"Actions",value:"actions"}],printers:new Array,facility:K(),name:"",code:"",phone:"",address:"",district:"",loading:!1,cookie:T("token"),loadingPrinters:!1}},created(){this.init(),this.loadPrinters()},methods:{init(){this.name=this.facility.details.name,this.phone=this.facility.details.phone,this.code=this.facility.details.code,this.address=this.facility.details.address,this.district=this.facility.details.district},async loadPrinters(){this.loadingPrinters=!0;const c={route:P.printers,method:"GET",token:`${this.cookie}`},{data:n,error:s,pending:d}=await I(c);this.loadingPrinters=d,n.value&&(this.printers=n.value,this.loadingPrinters=!1),s.value&&(console.error(s.value),this.loadingPrinters=!1)},async submitForm(){this.loading=!1;const c={route:`${P.global}/${this.facility.details.id}`,method:"PUT",token:`${this.cookie}`,body:{name:this.name,code:this.code,address:this.address,phone:this.phone,district:this.district}},{data:n,error:s,pending:d}=await I(c);this.loading=d,n.value&&(v().$toast.success("Facility updated successfully!"),this.$emit("update",!0),this.globals(),this.loading=!1),s.value&&(console.error(s.value),v().$toast.error(F),this.loading=!1)},async globals(){const{fetchFacility:c,details:n}=K(),s={route:P.global,method:"GET",token:""},{data:d,error:e}=await I(s);e.value&&console.error(e.value),d.value&&c(d.value)}}},qe=""+new URL("desktop_app.1e01e637.svg",import.meta.url).href,ze={class:"px-5 py-5"},$e=o("h3",{class:"text-2xl font-semibold flex items-cennter"},[o("img",{src:qe,class:"w-8 h-8 mr-2"}),D(" IBLIS Configuration ")],-1),Ee={class:"mt-5 font-medium text-center text-gray-500 bg-gray-50"},Re={class:"flex flex-wrap -mb-px"},Ne=["onClick"],Be={class:"py-5"},Xe={key:0},Ke={class:"grid grid-cols-3 gap-4"},Le={class:"mt-4"},Ge={key:1},He={class:"flex items-center justify-end mb-5"},Oe={class:"flex items-center mx-auto justify-center py-20"},Je={class:"relative overflow-x-auto"},Qe={class:"w-full text-left border rounded-lg"},We={class:"uppercase bg-gray-100"},Ye={class:"px-2 py-2 font-normal"},Ze={class:"px-2 py-2"},et={class:"px-2 py-2"},tt={class:"flex items-center space-x-2"};function ot(c,n,s,d,e,r){const m=i("FormKit"),f=U,x=me,b=ee,k=we,_=je;return p(),h("div",ze,[$e,o("div",Ee,[o("ul",Re,[(p(!0),h(M,null,S(e.config,(u,a)=>(p(),h("li",{onClick:w=>e.tab=a,class:"mr-2",key:a},[o("a",{href:"#",class:J(e.tab==a?"inline-block py-2 px-4 text-white bg-sky-500 active dark:text-sky-500 dark:border-sky-500":"inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-sky-500 hover:border-sky-500")},C(u),3)],8,Ne))),128))])]),o("div",Be,[e.tab==0?(p(),h("div",Xe,[t(m,{type:"form","submit-label":"Update",onSubmit:r.submitForm,actions:!1},{default:l(({value:u})=>[o("div",Ke,[t(m,{label:"Name",type:"text",modelValue:e.name,"onUpdate:modelValue":n[0]||(n[0]=a=>e.name=a)},null,8,["modelValue"]),t(m,{label:"Code",type:"text",modelValue:e.code,"onUpdate:modelValue":n[1]||(n[1]=a=>e.code=a)},null,8,["modelValue"]),t(m,{label:"District",type:"text",modelValue:e.district,"onUpdate:modelValue":n[2]||(n[2]=a=>e.district=a)},null,8,["modelValue"]),t(m,{label:"Address",type:"text",modelValue:e.address,"onUpdate:modelValue":n[3]||(n[3]=a=>e.address=a)},null,8,["modelValue"]),t(m,{label:"Phone Number",type:"text",modelValue:e.phone,"onUpdate:modelValue":n[4]||(n[4]=a=>e.phone=a)},null,8,["modelValue"])]),o("div",Le,[t(f,{click:()=>{},type:"submit",loading:e.loading,icon:e.saveIcon,text:"Save Changes",color:"success"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])])):N("",!0),e.tab==1?(p(),h("div",Ge,[o("div",He,[t(x,{onUpdate:r.loadPrinters},null,8,["onUpdate"])]),B(o("div",Oe,[t(b,{loading:e.loadingPrinters},null,8,["loading"])],512),[[X,e.loadingPrinters]]),B(o("div",Je,[o("table",Qe,[o("thead",We,[o("tr",null,[(p(!0),h(M,null,S(e.printersHeader,(u,a)=>(p(),h("th",{class:"uppercase py-2 px-2",key:a},C(u.text),1))),128))])]),o("tbody",null,[(p(!0),h(M,null,S(e.printers,(u,a)=>(p(),h("tr",{class:"bg-white border-b",key:a},[o("th",Ye,C(u.name),1),o("td",Ze,C(u.description),1),o("td",et,C(e.moment(u.created_date).format("dateFormat"in c?c.dateFormat:Q(W))),1),o("td",null,[o("div",tt,[t(k,{data:u,onUpdate:r.loadPrinters},null,8,["data","onUpdate"]),t(_,{data:u,onUpdate:r.loadPrinters},null,8,["data","onUpdate"])])])]))),128))])])],512),[[X,!e.loadingPrinters]])])):N("",!0)])])}const gt=V(Ae,[["render",ot]]);export{gt as default};