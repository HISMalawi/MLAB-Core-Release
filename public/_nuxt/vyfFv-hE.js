import{_ as G}from"./CUC3bBKZ.js";import{S,p as T,Y as V,G as I,V as U,q as F,s as H,a as P,l as j,m as R,u as w,E as K,x as B,y as c,b,e as $,g as t,f as e,z as n,j as k,_ as q,A as L,t as D,B as Y,d as J,r as E,h as m,D as Q,H as W,L as A,K as N}from"./BomcfpdA.js";import{_ as M}from"./DZUntXF2.js";import{r as Z}from"./7hh0RuxJ.js";import{r as z}from"./D94jxSfK.js";import{r as ee}from"./DvUQq13P.js";import{_ as te}from"./CF5TCNvl.js";import{_ as oe}from"./quWe4lpW.js";import{r as X}from"./Bebq7u_r.js";import{_ as se}from"./yJB2Qts7.js";import{u as O}from"./BFeAMZnM.js";import{P as ne}from"./WDQKvhhq.js";import{u as ae}from"./BjPGKtCZ.js";import{r as ie}from"./6YkiL_hW.js";import{_ as le}from"./DAoM-dCf.js";import"./C0NBKdgm.js";import"./D6yT9IfA.js";import"./h2jo2Mhj.js";import"./CRSxM5WR.js";const re={components:{TransitionRoot:S,TransitionChild:T,Dialog:V,DialogPanel:I,DialogTitle:U,XMarkIcon:F,UserIcon:Z},data(){return{open:!1,addIcon:H,saveIcon:z,clearIcon:ee,name:"",description:"",loading:!1,cookie:P("token")}},methods:{async submitForm(){this.loading=!0;const r={route:j.specimens,method:"POST",token:`${this.cookie}`,body:{name:this.name,description:this.description}},{pending:o,error:l,data:d}=await R(r);this.loading=o,d.value&&(this.handleClick(),w().$toast.success(`${this.name} specimen type created successfully!`),this.loading=!1,this.name="",this.description="",this.$emit("update",!0)),l.value&&(this.handleClick(),console.error(l.value.data.error),w().$toast.error(K),this.loading=!1)},handleClick(){this.open=!this.open},clearForm(){this.$formkit.reset("submitForm")}}},ce={class:"fixed inset-0 overflow-y-auto"},de={class:"flex min-h-full items-center justify-center p-4 text-center"},me={class:"border-b px-3 py-3 flex items-center justify-between"},ue={class:"mt-2 space-y-3"},pe={class:"w-full flex items-center px-5"},fe={class:"w-full flex flex-col space-y-2"},_e={class:"w-full flex items-center px-5 space-x-3"},he={class:"w-full flex flex-col space-y-2"},xe={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function ve(r,o,l,d,s,i){const x=q,_=c("TransitionChild"),u=c("DialogTitle"),v=c("XMarkIcon"),a=c("FormKit"),p=M,h=c("DialogPanel"),f=c("Dialog"),C=c("TransitionRoot");return b(),$("div",null,[t("div",null,[e(x,{text:"Create specimen",color:"primary",icon:s.addIcon,click:i.handleClick},null,8,["icon","click"])]),e(C,{appear:"",show:s.open,as:"template"},{default:n(()=>[e(f,{as:"div",onClose:i.handleClick,class:"relative z-10"},{default:n(()=>[e(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>o[3]||(o[3]=[t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),t("div",ce,[t("div",de,[e(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:n(()=>[e(h,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:n(()=>[t("div",me,[e(u,{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:n(()=>o[4]||(o[4]=[k(" Create Specimen ")])),_:1}),t("button",{onClick:o[0]||(o[0]=(...y)=>i.handleClick&&i.handleClick(...y))},[e(v,{class:"w-5 h-5"})])]),e(a,{type:"form","submit-label":"Update",onSubmit:i.submitForm,actions:!1,id:"submitForm"},{default:n(({value:y})=>[t("div",ue,[t("div",pe,[t("div",fe,[e(a,{type:"text",label:"Name",validation:"required",modelValue:s.name,"onUpdate:modelValue":o[1]||(o[1]=g=>s.name=g)},null,8,["modelValue"])])]),t("div",_e,[t("div",he,[e(a,{type:"textarea",label:"Description",validation:"required",modelValue:s.description,"onUpdate:modelValue":o[2]||(o[2]=g=>s.description=g)},null,8,["modelValue"])])]),t("div",xe,[e(p,{text:"Clear form",color:"error",type:"button",click:()=>{i.clearForm()}},null,8,["click"]),e(x,{type:"submit",click:()=>{},color:"success",loading:s.loading,icon:s.saveIcon,text:"Save changes"},null,8,["loading","icon"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const ye=B(re,[["render",ve]]),ge={components:{TransitionRoot:S,TransitionChild:T,Dialog:V,DialogPanel:I,DialogTitle:U,XMarkIcon:F},data(){return{viewIcon:L,show:!1}},props:{data:{type:Object,required:!0}},methods:{handleClick(){this.show=!this.show}}},be={class:"fixed inset-0 overflow-y-auto"},ke={class:"flex min-h-full items-center justify-center p-4 text-center"},we={class:"border-b px-3 py-3 flex items-center justify-between"},Ce={class:"space-y-3 px-5 py-5"},Te={class:"w-full flex flex-col space-y-1"},$e={class:"underline"},De={class:"w-full flex flex-col space-y-1"},Se={class:"underline"};function Ve(r,o,l,d,s,i){const x=q,_=c("TransitionChild"),u=c("DialogTitle"),v=c("XMarkIcon"),a=c("DialogPanel"),p=c("Dialog"),h=c("TransitionRoot");return b(),$("div",null,[e(x,{click:i.handleClick,color:"primary",text:"View",icon:s.viewIcon},null,8,["click","icon"]),e(h,{appear:"",show:s.show,as:"template"},{default:n(()=>[e(p,{as:"div",class:"relative z-10"},{default:n(()=>[e(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>o[1]||(o[1]=[t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),t("div",be,[t("div",ke,[e(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:n(()=>[e(a,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:n(()=>[t("div",we,[e(u,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:n(()=>o[2]||(o[2]=[t("img",{src:oe,class:"w-8 h-8 mr-2"},null,-1),k(" View Specimen ")])),_:1}),t("button",{onClick:o[0]||(o[0]=(...f)=>i.handleClick&&i.handleClick(...f))},[e(v,{class:"w-5 h-5"})])]),t("div",Ce,[t("div",Te,[o[3]||(o[3]=t("label",{class:"font-semibold text-lg"},"Name",-1)),t("p",$e,D(l.data.name),1)]),t("div",De,[o[4]||(o[4]=t("label",{class:"font-semibold text-lg"},"Description",-1)),t("p",Se,D(l.data.description),1)])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Ie=B(ge,[["render",Ve]]),Ue={components:{TransitionRoot:S,TransitionChild:T,Dialog:V,DialogPanel:I,DialogTitle:U,XMarkIcon:F},data(){return{editIcon:Y,show:!1,saveIcon:z,loading:!1,cookie:P("token")}},props:{data:{type:Object,required:!0}},methods:{async submitForm(){this.loading=!0;const r={route:`${j.specimens}/${this.data.id}`,method:"PUT",token:`${this.cookie}`,body:this.data},{pending:o,error:l,data:d}=await R(r);this.loading=o,d.value&&(this.handleClick(),w().$toast.success("Specimen type updated successfully!"),this.loading=!1,this.$emit("update",!0)),l.value&&(w().$toast.success("An error occurred, please try again!"),this.handleClick(),console.log(l.value),this.loading=!1)},handleClick(){this.show=!this.show},clearForm(){this.$formkit.reset("submitForm")}}},Fe={class:"fixed inset-0 overflow-y-auto"},Pe={class:"flex min-h-full items-center justify-center p-4 text-center"},je={class:"border-b px-3 py-3 flex items-center justify-between"},Re={class:"mt-2 space-y-3"},Be={class:"w-full flex items-center px-5"},qe={class:"w-full flex flex-col space-y-2"},Ee={class:"w-full flex items-center px-5 space-x-3"},Me={class:"w-full flex flex-col space-y-2"},Ae={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Ne(r,o,l,d,s,i){const x=q,_=c("TransitionChild"),u=c("DialogTitle"),v=c("XMarkIcon"),a=c("FormKit"),p=M,h=c("DialogPanel"),f=c("Dialog"),C=c("TransitionRoot");return b(),$("div",null,[e(x,{click:i.handleClick,text:"Edit",icon:s.editIcon,color:"success"},null,8,["click","icon"]),e(C,{appear:"",show:s.show,as:"template"},{default:n(()=>[e(f,{as:"div",class:"relative z-10"},{default:n(()=>[e(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>o[3]||(o[3]=[t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),t("div",Fe,[t("div",Pe,[e(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:n(()=>[e(h,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:n(()=>[t("div",je,[e(u,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:n(()=>o[4]||(o[4]=[k(" Edit Specimen ")])),_:1}),t("button",{onClick:o[0]||(o[0]=(...y)=>i.handleClick&&i.handleClick(...y))},[e(v,{class:"w-5 h-5"})])]),e(a,{type:"form","submit-label":"Update",onSubmit:i.submitForm,actions:!1,id:"submitForm"},{default:n(({value:y})=>[t("div",Re,[t("div",Be,[t("div",qe,[e(a,{type:"text",label:"Name",validation:"required",modelValue:l.data.name,"onUpdate:modelValue":o[1]||(o[1]=g=>l.data.name=g)},null,8,["modelValue"])])]),t("div",Ee,[t("div",Me,[e(a,{type:"textarea",label:"Description",validation:"required",modelValue:l.data.description,"onUpdate:modelValue":o[2]||(o[2]=g=>l.data.description=g)},null,8,["modelValue"])])]),t("div",Ae,[e(p,{text:"Clear form",color:"error",type:"button",click:()=>{i.clearForm()}},null,8,["click"]),e(x,{type:"submit",click:()=>{},color:"success",loading:s.loading,icon:s.saveIcon,text:"Save changes"},null,8,["loading","icon"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Xe=B(Ue,[["render",Ne]]),Oe={class:"fixed inset-0 overflow-y-auto"},Ke={class:"flex min-h-full items-center justify-center p-4 text-center"},ze={class:"border-b px-3 py-3 flex items-center justify-between"},Ge={class:"mt-2 space-y-3 px-5"},He={class:"rounded px-2 py-2"},Le={class:"font-semibold text-red-500"},Ye={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50"},Je=J({__name:"index",props:{data:{required:!0,type:Object}},emits:["update"],setup(r,{emit:o}){const l=E(!1),d=E(!1),s=E(""),i=P("token"),x=o;async function _(v){d.value=!0;const{data:a,error:p,pending:h}=await R({route:`${j.specimens}/${v}`,method:"DELETE",token:`${i.value}`,body:{retired_reason:s.value}});d.value=h,a.value&&(u(),w().$toast.success("Specimen type deleted successfully!"),d.value=!1,x("update",!0)),p.value&&(w().$toast.error(K),console.error(p.value),u(),d.value=!1)}const u=()=>{l.value=!l.value};return(v,a)=>{const p=q,h=c("FormKit"),f=M;return b(),$("div",null,[e(p,{click:u,color:"error",text:"Delete",icon:m(X)},null,8,["icon"]),e(m(S),{appear:"",show:m(l),as:"template"},{default:n(()=>[e(m(V),{as:"div",class:"relative z-10"},{default:n(()=>[e(m(T),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>a[2]||(a[2]=[t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),t("div",Oe,[t("div",Ke,[e(m(T),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:n(()=>[e(m(I),{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:n(()=>[t("div",ze,[e(m(U),{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:n(()=>[e(m(Q),{class:"h-5 w-5 mr-2"}),a[3]||(a[3]=k(" Confirm delete "))]),_:1}),t("button",{onClick:u},[e(m(F),{class:"w-5 h-5"})])]),e(h,{type:"form","submit-label":"Update",onSubmit:a[1]||(a[1]=C=>_(r.data.id)),actions:!1},{default:n(({value:C})=>[t("div",Ge,[t("div",He,[a[4]||(a[4]=k(" Do you really want to delete ")),t("span",Le,D(r.data.name),1),a[5]||(a[5]=k("? Note that once this action is completed, it can not be undone "))]),e(h,{type:"textarea",label:"Reason",validation:"required",modelValue:m(s),"onUpdate:modelValue":a[0]||(a[0]=y=>W(s)?s.value=y:null)},null,8,["modelValue"])]),t("div",Ye,[e(f,{type:"button",text:"Cancel",click:()=>{u()}},null,8,["click"]),e(p,{loading:m(d),type:"submit",click:()=>{},color:"error",icon:m(X),text:"Delete"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}}}),Qe={setup(){ae({title:`${ne.name.toUpperCase()} - Specimen Types`})},components:{MagnifyingGlassIcon:ie},data(){return{header:"Specimen Types",specimens:new Array,pages:[{name:"Home",link:"/home"},{name:"Test Catalog",link:"#"}],loading:!1,search:"",searchValue:"",cookie:P("token"),headers:[{text:"id",value:"id",sortable:!0},{text:"name",value:"name",sortable:!0},{text:"description",value:"description",sortable:!0},{text:"actions",value:"actions"}]}},created(){this.init()},methods:{updateSearch(r){this.searchValue=r,this.search=r},async init(){this.loading=!0;const r={route:j.specimens,method:"GET",token:`${this.cookie}`,body:{}},{data:o,error:l,pending:d}=await R(r);this.loading=d,o.value&&(this.specimens=o.value),l.value&&console.error(l.value)},updateSpecimenTypes(r){r&&this.init()}}},We={class:"py-5 px-5"},Ze={class:"flex items-center justify-between py-5"},et={class:"text-2xl font-semibold flex items-center uppercase"},tt={class:"flex items-center space-x-3"},ot={class:"flex justify-end w-full px-2 py-2 mb-2"},st={class:"py-2 flex items-center space-x-2"};function nt(r,o,l,d,s,i){const x=G,_=ye,u=te,v=Ie,a=Xe,p=Je,h=se;return b(),$("div",We,[e(x,{pages:s.pages},null,8,["pages"]),t("div",Ze,[t("div",et,[o[1]||(o[1]=t("img",{src:le,alt:"report-icon",class:"w-8 h-8 mr-2"},null,-1)),k(" "+D(s.header),1)]),t("div",tt,[("usePermissions"in r?r.usePermissions:m(O))().can.manage("test_catalog")?(b(),A(_,{key:0,onUpdate:i.updateSpecimenTypes},null,8,["onUpdate"])):N("",!0)])]),t("div",ot,[e(u,{search:s.search,"onUpdate:search":o[0]||(o[0]=f=>s.search=f),onUpdate:i.updateSearch},null,8,["search","onUpdate"])]),("usePermissions"in r?r.usePermissions:m(O))().can.manage("test_catalog")?(b(),A(h,{key:0,headers:s.headers,data:s.specimens,loading:s.loading,"search-value":s.searchValue,"search-field":"name"},{actions:n(({item:f})=>[t("div",st,[e(v,{data:f},null,8,["data"]),e(a,{data:f,onUpdate:i.updateSpecimenTypes},null,8,["data","onUpdate"]),e(p,{data:f,onUpdate:i.updateSpecimenTypes},null,8,["data","onUpdate"])])]),_:1},8,["headers","data","loading","search-value"])):N("",!0)])}const Ct=B(Qe,[["render",nt]]);export{Ct as default};