import{_ as Y}from"./D-VwM6QD.js";import{a as U,u as b,l as D,m as l,b as v,e as T,g as e,f as t,n as i,p as V,_ as S,t as I,h as k,x as N,s as P}from"./Cg5p-McN.js";import{_ as A}from"./CqDTxBUP.js";import{e as E,d as O}from"./RKiNshLb.js";import{r as L,e as w,f as C,h as G}from"./DR38mcEF.js";import{r as j}from"./aBMXVFc4.js";import{r as J}from"./l2E4azmA.js";import{r as K}from"./dK18VoWV.js";import{r as Q}from"./9hb_rdP4.js";import{S as q,h as B,Y as M,G as R,V as X}from"./D1U45QuX.js";import{_ as W}from"./DEY2neBq.js";import{r as Z,a as z}from"./Cjc4v2I0.js";import{_ as H}from"./BBIgpWSn.js";import{_ as ee}from"./ByuBovvP.js";import{u as F}from"./BbrJdZQo.js";import{u as te}from"./DvxvG7cH.js";import{P as oe}from"./C2uaaNo-.js";import{r as se}from"./CyrOhIst.js";import"./sm8AiluA.js";import"./BAL5lcly.js";import"./3LKeHVyH.js";import"./D-clyhuy.js";import"./BVCtdeh2.js";import"./84ogm7K5.js";import"./BQPGVMrX.js";import"./CGvpn_em.js";const ae={components:{TransitionRoot:q,TransitionChild:B,Dialog:M,DialogPanel:R,DialogTitle:X,XMarkIcon:j,UserIcon:J},data(){return{open:!1,addIcon:L,saveIcon:K,clearIcon:Q,loading:!1,name:"",shortName:"",cookie:U("token")}},methods:{async submitForm(){this.loading=!0;const a={route:w.drugs,method:"POST",token:`${this.cookie}`,body:{name:this.name,short_name:this.shortName}},{pending:s,error:r,data:c}=await C(a);this.loading=s,c.value&&(this.handleClick(),b().$toast.success(`${this.name} drug created successfully!`),this.loading=!1,this.shortName="",this.name="",this.$emit("update",!0)),r.value&&(this.handleClick(),console.error(r.value),b().$toast.error(E),this.loading=!1)},handleClick(){this.open=!this.open},clearForm(){this.$formkit.reset("submitForm")}}},ne=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),le={class:"fixed inset-0 overflow-y-auto"},ie={class:"flex min-h-full items-center justify-center p-4 text-center"},re={class:"border-b px-3 py-3 flex items-center justify-between"},ce={class:"mt-2 space-y-3"},de={class:"w-full flex items-center px-5"},me={class:"w-full flex flex-col space-y-2"},ue={class:"w-full flex items-center px-5 space-x-3"},pe={class:"w-full flex flex-col space-y-2"},_e={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function he(a,s,r,c,o,n){const p=S,u=l("TransitionChild"),_=l("DialogTitle"),h=l("XMarkIcon"),m=l("FormKit"),f=A,g=l("DialogPanel"),d=l("Dialog"),$=l("TransitionRoot");return v(),T("div",null,[e("div",null,[t(p,{text:"Create drug",color:"primary",icon:o.addIcon,click:n.handleClick},null,8,["icon","click"])]),t($,{appear:"",show:o.open,as:"template"},{default:i(()=>[t(d,{as:"div",onClose:n.handleClick,class:"relative z-10"},{default:i(()=>[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[ne]),_:1}),e("div",le,[e("div",ie,[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:i(()=>[t(g,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:i(()=>[e("div",re,[t(_,{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:i(()=>[V(" Create drug ")]),_:1}),e("button",{onClick:s[0]||(s[0]=(...y)=>n.handleClick&&n.handleClick(...y))},[t(h,{class:"w-5 h-5"})])]),t(m,{type:"form","submit-label":"Update",onSubmit:n.submitForm,actions:!1,id:"submitForm"},{default:i(({value:y})=>[e("div",ce,[e("div",de,[e("div",me,[t(m,{type:"text",label:"Name",validation:"required",modelValue:o.name,"onUpdate:modelValue":s[1]||(s[1]=x=>o.name=x)},null,8,["modelValue"])])]),e("div",ue,[e("div",pe,[t(m,{type:"text",label:"Short Name",validation:"required",modelValue:o.shortName,"onUpdate:modelValue":s[2]||(s[2]=x=>o.shortName=x)},null,8,["modelValue"])])])]),e("div",_e,[t(f,{type:"button",click:()=>{n.clearForm()},text:"Clear form"},null,8,["click"]),t(p,{loading:o.loading,type:"submit",click:()=>{},color:"success",icon:o.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const fe=D(ae,[["render",he]]),ge={components:{TransitionRoot:q,TransitionChild:B,Dialog:M,DialogPanel:R,DialogTitle:X,XMarkIcon:j},data(){return{viewIcon:Z,show:!1,editIcon:z,moment:G}},props:{data:{type:Object,required:!0}},methods:{handleClick(){this.show=!this.show}}},xe=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),ve={class:"fixed inset-0 overflow-y-auto"},ye={class:"flex min-h-full items-center justify-center p-4 text-center"},ke={class:"border-b px-3 py-3 flex items-center justify-between"},be=e("img",{src:H,class:"w-8 h-8 mr-2"},null,-1),we={class:"space-y-3 px-5 py-5"},Ce={class:"w-full flex flex-col space-y-1"},De=e("label",{class:"font-semibold text-lg"},"Name",-1),Te={class:"underline"},Ve={class:"w-full flex flex-col space-y-1"},$e=e("label",{class:"font-semibold text-lg"},"Short Name",-1),Ie={class:"underline"},Ne={class:"w-full flex flex-col space-y-1"},Pe=e("label",{class:"font-semibold text-lg"},"Date Created",-1),Fe={class:"underline"};function Ue(a,s,r,c,o,n){const p=S,u=l("TransitionChild"),_=l("DialogTitle"),h=l("XMarkIcon"),m=l("DialogPanel"),f=l("Dialog"),g=l("TransitionRoot");return v(),T("div",null,[t(p,{click:n.handleClick,color:"primary",text:"View",icon:o.viewIcon},null,8,["click","icon"]),t(g,{appear:"",show:o.show,as:"template"},{default:i(()=>[t(f,{as:"div",class:"relative z-10"},{default:i(()=>[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[xe]),_:1}),e("div",ve,[e("div",ye,[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:i(()=>[t(m,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:i(()=>[e("div",ke,[t(_,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:i(()=>[be,V(" View drug ")]),_:1}),e("button",{onClick:s[0]||(s[0]=(...d)=>n.handleClick&&n.handleClick(...d))},[t(h,{class:"w-5 h-5"})])]),e("div",we,[e("div",Ce,[De,e("p",Te,I(r.data.name),1)]),e("div",Ve,[$e,e("p",Ie,I(r.data.short_name),1)]),e("div",Ne,[Pe,e("p",Fe,I(o.moment(r.data.created_date).format("dateFormat"in a?a.dateFormat:k(O))),1)])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Se=D(ge,[["render",Ue]]),je={components:{TransitionRoot:q,TransitionChild:B,Dialog:M,DialogPanel:R,DialogTitle:X,XMarkIcon:j},data(){return{editIcon:z,show:!1,saveIcon:K,name:"",shortName:"",loading:!1,cookie:U("token")}},props:{data:{type:Object,required:!0}},methods:{async init(){this.handleClick(),this.loading=!0;const a={route:`${w.drugs}/${this.data.id}`,method:"GET",token:`${this.cookie}`},{pending:s,error:r,data:c}=await C(a);this.loading=s,c.value&&(this.shortName=c.value.short_name,this.name=c.value.name),r.value&&console.log(r.value)},async submitForm(){this.loading=!0;const a={route:`${w.drugs}/${this.data.id}`,method:"PUT",token:`${this.cookie}`,body:{name:this.name,short_name:this.shortName}},{pending:s,error:r,data:c}=await C(a);this.loading=s,c.value&&(this.handleClick(),b().$toast.success("Drug updated successfully!"),this.loading=!1,this.$emit("update",!0)),r.value&&(this.handleClick(),b().$toast.error(E),console.log(r.value),this.loading=!1)},clearForm(){this.$formkit.reset("editForm")},handleClick(){this.show=!this.show}}},qe=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Be={class:"fixed inset-0 overflow-y-auto"},Me={class:"flex min-h-full items-center justify-center p-4 text-center"},Re={class:"border-b px-3 py-3 flex items-center justify-between"},Xe={class:"mt-2 space-y-3"},Ae={class:"w-full flex items-center px-5"},Ee={class:"w-full flex flex-col space-y-2"},Oe={class:"w-full flex items-center px-5 space-x-3"},Ge={class:"w-full flex flex-col space-y-2"},Ke={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function ze(a,s,r,c,o,n){const p=S,u=l("TransitionChild"),_=l("DialogTitle"),h=l("XMarkIcon"),m=l("FormKit"),f=A,g=l("DialogPanel"),d=l("Dialog"),$=l("TransitionRoot");return v(),T("div",null,[t(p,{click:n.init,text:"Edit",color:"success",icon:o.editIcon},null,8,["click","icon"]),t($,{appear:"",show:o.show,as:"template"},{default:i(()=>[t(d,{as:"div",class:"relative z-10"},{default:i(()=>[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[qe]),_:1}),e("div",Be,[e("div",Me,[t(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:i(()=>[t(g,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:i(()=>[e("div",Re,[t(_,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:i(()=>[V(" Edit drug ")]),_:1}),e("button",{onClick:s[0]||(s[0]=(...y)=>n.handleClick&&n.handleClick(...y))},[t(h,{class:"w-5 h-5"})])]),t(m,{type:"form",id:"editForm","submit-label":"Update",onSubmit:n.submitForm,actions:!1},{default:i(({value:y})=>[e("div",Xe,[e("div",Ae,[e("div",Ee,[t(m,{type:"text",label:"Name",validation:"required",modelValue:o.name,"onUpdate:modelValue":s[1]||(s[1]=x=>o.name=x)},null,8,["modelValue"])])]),e("div",Oe,[e("div",Ge,[t(m,{type:"text",label:"Short Name",validation:"required",modelValue:o.shortName,"onUpdate:modelValue":s[2]||(s[2]=x=>o.shortName=x)},null,8,["modelValue"])])])]),e("div",Ke,[t(f,{type:"button",click:()=>{n.clearForm()},text:"Clear form"},null,8,["click"]),t(p,{loading:o.loading,type:"submit",click:()=>{},color:"success",icon:o.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const He=D(je,[["render",ze]]),Ye={setup(){te({title:`${oe.name.toUpperCase()} - Drugs`})},data(){return{header:"List Of Drugs",drugs:new Array,pages:[{name:"Home",link:"/home"},{name:"Test Catalog",link:"#"}],loading:!1,search:"",searchValue:"",cookie:U("token"),headers:[{text:"id",value:"id",sortable:!0},{text:"name",value:"name",sortable:!0},{text:"short name",value:"short_name"},{text:"date created",value:"created_date"},{text:"actions",value:"actions"}]}},components:{MagnifyingGlassIcon:se},created(){this.init()},methods:{updateSearch(a){this.searchValue=a,this.search=a},async init(){this.loading=!0;const a={route:w.drugs,method:"GET",token:`${this.cookie}`},{pending:s,error:r,data:c}=await C(a);this.loading=s,c.value&&(this.drugs=c.value.map(o=>({...o,created_date:G(o.created_date).format(O)})),this.loading=!1),r.value&&(console.log(r.value),this.loading=!1)},updateDrugs(a){a&&(this.search="",this.searchValue="",this.init())}}},Le={class:"py-5 px-5"},Je={class:"flex items-center justify-between py-5"},Qe=e("div",{class:"text-2xl font-semibold flex items-center uppercase"},[e("img",{src:H,alt:"report-icon",class:"w-8 h-8 mr-2"}),V(" Drugs ")],-1),We={class:"flex items-center space-x-3"},Ze={class:"flex justify-end w-full px-2 py-2 mb-2"},et={class:"py-2 flex items-center space-x-2"};function tt(a,s,r,c,o,n){const p=Y,u=fe,_=W,h=Se,m=He,f=l("DrugsDeleteDialog"),g=ee;return v(),T("div",Le,[t(p,{pages:o.pages},null,8,["pages"]),e("div",Je,[Qe,e("div",We,[("usePermissions"in a?a.usePermissions:k(F))().can.manage("test_catalog")?(v(),N(u,{key:0,onUpdate:n.updateDrugs},null,8,["onUpdate"])):P("",!0)])]),e("div",Ze,[("usePermissions"in a?a.usePermissions:k(F))().can.manage("test_catalog")?(v(),N(_,{key:0,search:o.search,"onUpdate:search":s[0]||(s[0]=d=>o.search=d),onUpdate:n.updateSearch,modelValue:o.search,"onUpdate:modelValue":s[1]||(s[1]=d=>o.search=d)},null,8,["search","onUpdate","modelValue"])):P("",!0)]),("usePermissions"in a?a.usePermissions:k(F))().can.manage("test_catalog")?(v(),N(g,{key:0,headers:o.headers,data:o.drugs,loading:o.loading,"search-value":o.searchValue,"search-field":"name"},{actions:i(({item:d})=>[e("div",et,[t(h,{data:d},null,8,["data"]),t(m,{data:d,onUpdate:n.updateDrugs},null,8,["data","onUpdate"]),t(f,{data:d,onUpdate:n.updateDrugs},null,8,["data","onUpdate"])])]),_:1},8,["headers","data","loading","search-value"])):P("",!0)])}const $t=D(Ye,[["render",tt]]);export{$t as default};