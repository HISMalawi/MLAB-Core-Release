import{_ as G}from"./u_i5tT18.js";import{a as T,u as k,l as C,m as n,b as v,e as D,g as t,f as e,n as s,p as b,_ as $,t as R,h as q,x as E,s as N}from"./CgCt1uig.js";import{_ as B}from"./CfpL-cj9.js";import{e as M}from"./C7nrlxI_.js";import{r as H,e as I,f as V}from"./DDP8Pd40.js";import{r as S}from"./CosnS5_S.js";import{r as Y}from"./Dy4fK2sP.js";import{r as O}from"./BiLmvBTn.js";import{r as J}from"./DJfJbGbA.js";import{S as j,h as P,Y as F,G as U,V as L}from"./BBi4X6kY.js";import{_ as Q}from"./D5NS-hCo.js";import{r as W,a as K}from"./9jRWjONT.js";import{_ as X}from"./Cl1Pa16j.js";import{r as Z}from"./D8JfA7oG.js";import{r as ee}from"./BOxnxsxl.js";import{_ as te}from"./DQ0UyYB3.js";import{u as A}from"./BsFmwtoj.js";import{u as oe}from"./Kt-y9hP3.js";import{P as ae}from"./Bf5grz7u.js";import"./DAatDIeb.js";import"./CDGutsna.js";import"./22U_Ornm.js";import"./DDaZZI9g.js";import"./q9WmgNLv.js";import"./CM5UAy9z.js";import"./CEii_6Qs.js";const ne={components:{TransitionRoot:j,TransitionChild:P,Dialog:F,DialogPanel:U,DialogTitle:L,XMarkIcon:S,UserIcon:Y},data(){return{open:!1,addIcon:H,saveIcon:O,clearIcon:J,name:"",description:"",loading:!1,cookie:T("token")}},methods:{async submitForm(){this.loading=!0;const l={route:I.departments,method:"POST",token:`${this.cookie}`,body:{name:this.name}},{pending:a,error:c,data:r}=await V(l);this.loading=a,r.value&&(this.adjustVisibility(),k().$toast.success(`${this.name} laboratory section created successfully!`),this.name="",this.loading=!1,this.$emit("update",!0)),c.value&&(this.adjustVisibility(),console.log(c.value),k().$toast.error(M),this.loading=!1)},adjustVisibility(){this.open=!this.open},clearForm(){this.$formkit.reset("submitForm")}}},se=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),ie={class:"fixed inset-0 overflow-y-auto"},le={class:"flex min-h-full items-center justify-center p-4 text-center"},ce={class:"border-b px-3 py-3 flex items-center justify-between"},re={class:"mt-2 space-y-3"},de={class:"w-full flex items-center px-5"},me={class:"w-full flex flex-col space-y-2"},ue={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function pe(l,a,c,r,o,i){const m=$,d=n("TransitionChild"),f=n("DialogTitle"),h=n("XMarkIcon"),u=n("FormKit"),_=B,g=n("DialogPanel"),p=n("Dialog"),w=n("TransitionRoot");return v(),D("div",null,[t("div",null,[e(m,{text:"New lab section",color:"primary",icon:o.addIcon,click:i.adjustVisibility},null,8,["icon","click"])]),e(w,{appear:"",show:o.open,as:"template"},{default:s(()=>[e(p,{as:"div",onClose:i.adjustVisibility,class:"relative z-10"},{default:s(()=>[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[se]),_:1}),t("div",ie,[t("div",le,[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[e(g,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:s(()=>[t("div",ce,[e(f,{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:s(()=>[b(" Add new lab section ")]),_:1}),t("button",{onClick:a[0]||(a[0]=(...y)=>i.adjustVisibility&&i.adjustVisibility(...y))},[e(h,{class:"w-5 h-5"})])]),e(u,{type:"form","submit-label":"Update",onSubmit:i.submitForm,actions:!1,id:"submitForm"},{default:s(({value:y})=>[t("div",re,[t("div",de,[t("div",me,[e(u,{type:"text",label:"Name",validation:"required",modelValue:o.name,"onUpdate:modelValue":a[1]||(a[1]=x=>o.name=x)},null,8,["modelValue"])])])]),t("div",ue,[e(_,{text:"Clear form",type:"button",click:()=>{i.clearForm()}},null,8,["click"]),e(m,{loading:o.loading,type:"submit",click:()=>{},color:"success",icon:o.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const _e=C(ne,[["render",pe]]),fe={components:{TransitionRoot:j,TransitionChild:P,Dialog:F,DialogPanel:U,DialogTitle:L,XMarkIcon:S},data(){return{viewIcon:W,show:!1,editIcon:K}},props:{data:{type:Object,required:!0}},methods:{handleClick(){this.show=!this.show}}},he=t("div",{class:"fixed inset-0 bg-gray-900 bg-opacity-25"},null,-1),ge={class:"fixed inset-0 overflow-y-auto"},ye={class:"flex min-h-full items-center justify-center p-4 text-center"},xe={class:"border-b px-3 py-3 flex items-center justify-between"},ve=t("img",{src:X,class:"w-8 h-8 mr-2",alt:"hospital-icon"},null,-1),be={class:"space-y-3 px-5 py-5"},ke={class:"w-full flex flex-col space-y-1"},we=t("label",{class:"font-semibold text-lg"},"Name",-1),Ce={class:"underline"};function De(l,a,c,r,o,i){const m=$,d=n("TransitionChild"),f=n("DialogTitle"),h=n("XMarkIcon"),u=n("DialogPanel"),_=n("Dialog"),g=n("TransitionRoot");return v(),D("div",null,[e(m,{click:i.handleClick,color:"primary",text:"View",icon:o.viewIcon},null,8,["click","icon"]),e(g,{appear:"",show:o.show,as:"template"},{default:s(()=>[e(_,{as:"div",class:"relative z-10"},{default:s(()=>[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[he]),_:1}),t("div",ge,[t("div",ye,[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[e(u,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:s(()=>[t("div",xe,[e(f,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:s(()=>[ve,b(" View Laboratory Section ")]),_:1}),t("button",{onClick:a[0]||(a[0]=(...p)=>i.handleClick&&i.handleClick(...p))},[e(h,{class:"w-5 h-5"})])]),t("div",be,[t("div",ke,[we,t("p",Ce,R(c.data.name),1)])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Te=C(fe,[["render",De]]),$e={components:{TransitionRoot:j,TransitionChild:P,Dialog:F,DialogPanel:U,DialogTitle:L,XMarkIcon:S},data(){return{editIcon:K,show:!1,saveIcon:O,loading:!1,cookie:T("token"),name:this.data.name}},props:{data:{type:Object,required:!0}},methods:{async submitForm(){this.loading=!0;const l={route:`${I.departments}/${this.data.id}`,method:"PUT",token:`${this.cookie}`,body:{name:this.name}},{data:a,error:c,pending:r}=await V(l);this.loading=r,a.value&&(this.handleClick(),k().$toast.success("Laboratory section updated successfully!"),this.loading=!1,this.$emit("update",!0)),c.value&&(this.handleClick(),k().$toast.error(M),console.error(c.value),this.loading=!1)},handleClick(){this.show=!this.show},clearForm(){this.$formkit.reset("submitForm")}}},Ie=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Ve={class:"fixed inset-0 overflow-y-auto"},Se={class:"flex min-h-full items-center justify-center p-4 text-center"},je={class:"border-b px-3 py-3 flex items-center justify-between"},Pe=t("img",{src:X,class:"w-8 h-8 mr-2",alt:"hospital-icon"},null,-1),Fe={class:"mt-2 space-y-3"},Ue={class:"w-full flex items-center px-5"},Le={class:"w-full flex flex-col space-y-2"},Re={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Be(l,a,c,r,o,i){const m=$,d=n("TransitionChild"),f=n("DialogTitle"),h=n("XMarkIcon"),u=n("FormKit"),_=B,g=n("DialogPanel"),p=n("Dialog"),w=n("TransitionRoot");return v(),D("div",null,[e(m,{click:i.handleClick,text:"Edit",color:"success",icon:o.editIcon},null,8,["click","icon"]),e(w,{appear:"",show:o.show,as:"template"},{default:s(()=>[e(p,{as:"div",class:"relative z-10"},{default:s(()=>[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[Ie]),_:1}),t("div",Ve,[t("div",Se,[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[e(g,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:s(()=>[t("div",je,[e(f,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:s(()=>[Pe,b(" Edit Laboratory Department ")]),_:1}),t("button",{onClick:a[0]||(a[0]=(...y)=>i.handleClick&&i.handleClick(...y))},[e(h,{class:"w-5 h-5"})])]),e(u,{id:"submitForm",type:"form","submit-label":"Update",onSubmit:i.submitForm,actions:!1},{default:s(({value:y})=>[t("div",Fe,[t("div",Ue,[t("div",Le,[e(u,{type:"text",label:"Name",validation:"required",modelValue:o.name,"onUpdate:modelValue":a[1]||(a[1]=x=>o.name=x)},null,8,["modelValue"])])])]),t("div",Re,[e(_,{text:"Clear form",type:"button",click:()=>{i.clearForm()}},null,8,["click"]),e(m,{loading:o.loading,type:"submit",click:()=>{},color:"success",icon:o.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Me=C($e,[["render",Be]]),Xe={components:{TransitionRoot:j,TransitionChild:P,Dialog:F,DialogPanel:U,DialogTitle:L,XMarkIcon:S,ExclamationTriangleIcon:Z},data(){return{show:!1,deleteIcon:ee,loading:!1,reason:"",cookie:T("token")}},props:{data:{type:Object,required:!0}},methods:{async deleteData(l){this.loading=!0;const a={route:`${I.departments}/${l}`,method:"DELETE",token:`${this.cookie}`,body:{retired_reason:this.reason}};let{data:c,error:r,pending:o}=await V(a);this.loading=o,c.value&&(this.handleClick(),k().$toast.success("Laboratory section deleted successfully!"),this.$emit("update",!0)),r.value&&(k().$toast.error(M),this.handleClick(),console.error(r.value))},handleClick(){this.show=!this.show}}},qe=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Ee={class:"fixed inset-0 overflow-y-auto"},Ne={class:"flex min-h-full items-center justify-center p-4 text-center"},Ae={class:"border-b px-3 py-3 flex items-center justify-between"},Oe={class:"mt-2 space-y-3 px-5"},Ke={class:"rounded px-2 py-2"},ze={class:"font-semibold text-red-500"},Ge={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50"};function He(l,a,c,r,o,i){const m=$,d=n("TransitionChild"),f=n("ExclamationTriangleIcon"),h=n("DialogTitle"),u=n("XMarkIcon"),_=n("FormKit"),g=B,p=n("DialogPanel"),w=n("Dialog"),y=n("TransitionRoot");return v(),D("div",null,[e(m,{click:i.handleClick,color:"error",text:"Delete",icon:o.deleteIcon},null,8,["click","icon"]),e(y,{appear:"",show:o.show,as:"template"},{default:s(()=>[e(w,{as:"div",class:"relative z-10"},{default:s(()=>[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[qe]),_:1}),t("div",Ee,[t("div",Ne,[e(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[e(p,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:s(()=>[t("div",Ae,[e(h,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:s(()=>[e(f,{class:"h-5 w-5 mr-2"}),b(" Confirm delete ")]),_:1}),t("button",{onClick:a[0]||(a[0]=(...x)=>i.handleClick&&i.handleClick(...x))},[e(u,{class:"w-5 h-5"})])]),e(_,{type:"form","submit-label":"Update",onSubmit:a[2]||(a[2]=x=>i.deleteData(c.data.id)),actions:!1},{default:s(({value:x})=>[t("div",Oe,[t("div",Ke,[b(" Do you really want to delete "),t("span",ze,R(c.data.name),1),b("? Note that once this action is completed, it can not be undone ")]),e(_,{type:"textarea",label:"Reason",validation:"required",modelValue:o.reason,"onUpdate:modelValue":a[1]||(a[1]=z=>o.reason=z)},null,8,["modelValue"])]),t("div",Ge,[e(g,{type:"button",click:()=>{i.handleClick()},text:"Cancel"},null,8,["click"]),e(m,{loading:o.loading,type:"submit",click:()=>{},color:"error",icon:o.deleteIcon,text:"Delete"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Ye=C(Xe,[["render",He]]),Je={setup(){oe({title:`${ae.name.toUpperCase()} - Laboratory Sections`})},data(){return{header:"Laboratory Sections",departments:new Array,pages:[{name:"Home",link:"/home"},{name:"Test Catalog",link:"#"}],loading:!1,search:"",searchValue:"",cookie:T("token"),headers:[{text:"id",value:"id",sortable:!0},{text:"name",value:"name",sortable:!0},{text:"actions",value:"actions"}]}},created(){this.init()},methods:{updateSearch(l){this.searchValue=l,this.search=l},async init(){this.loading=!0;const l={route:I.departments,method:"GET",token:`${this.cookie}`},{pending:a,error:c,data:r}=await V(l);this.loading=a,r.value&&(this.loading=!1,this.departments=r.value),c.value&&(this.loading=!1,console.log(c.value))},updateLabSections(l){l&&this.init()}}},Qe={class:"py-5 px-5"},We={class:"flex items-center justify-between py-5"},Ze={class:"text-2xl font-semibold flex items-center uppercase"},et=t("img",{src:X,alt:"report-icon",class:"w-8 h-8 mr-2"},null,-1),tt={class:"flex items-center space-x-3"},ot={class:"flex justify-end w-full px-2 py-2 mb-2"},at={class:"py-2 flex items-center space-x-2"};function nt(l,a,c,r,o,i){const m=G,d=_e,f=Q,h=Te,u=Me,_=Ye,g=te;return v(),D("div",Qe,[e(m,{pages:o.pages},null,8,["pages"]),t("div",We,[t("div",Ze,[et,b(" "+R(o.header),1)]),t("div",tt,[("usePermissions"in l?l.usePermissions:q(A))().can.manage("test_catalog")?(v(),E(d,{key:0,onUpdate:i.updateLabSections},null,8,["onUpdate"])):N("",!0)])]),t("div",ot,[e(f,{search:o.search,onUpdate:i.updateSearch},null,8,["search","onUpdate"])]),("usePermissions"in l?l.usePermissions:q(A))().can.manage("test_catalog")?(v(),E(g,{key:0,headers:o.headers,data:o.departments,loading:o.loading,"search-value":o.searchValue,"search-field":"name"},{actions:s(({item:p})=>[t("div",at,[e(h,{data:p},null,8,["data"]),e(u,{data:p,onUpdate:i.updateLabSections},null,8,["data","onUpdate"]),e(_,{data:p,onUpdate:i.updateLabSections},null,8,["data","onUpdate"])])]),_:1},8,["headers","data","loading","search-value"])):N("",!0)])}const jt=C(Je,[["render",nt]]);export{jt as default};