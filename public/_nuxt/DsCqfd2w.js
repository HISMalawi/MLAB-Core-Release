import{_ as Z}from"./BJooVA_-.js";import{b as c,e as u,g as t,S as F,p as M,Y as U,G as L,V as A,q as B,A as W,B as E,a as P,u as R,x as j,y as m,f as n,z as p,j as q,t as y,F as N,k as $,_ as Q,s as G,l as S,m as I,K as D,i as V,v as C,L as T,n as K}from"./CYcp6nS7.js";import{S as g}from"./DHplHiGy.js";import{r as z}from"./r6BVbVNy.js";import{_ as O}from"./BM3s60a1.js";import{_ as X}from"./_pI-mxTi.js";import{P as H}from"./lDJ8LIwH.js";import{u as Y}from"./CySQNWaz.js";import{r as J}from"./Di9J9FJg.js";import{r as ee}from"./DCcrc1DR.js";import{r as te}from"./BMZuEnoX.js";import{r as se}from"./D_CGNKK0.js";import{_ as oe}from"./DBmflaAt.js";import"./CiPuaXMZ.js";import"./BD7R0M9r.js";import"./CtVgqVA5.js";import"./BbStvG_C.js";import"./BbalwqwO.js";import"./CaXKGook.js";import"./CIoZ7vxW.js";import"./wA_l6D9q.js";import"./K4HDHDkc.js";import"./CclvD-oN.js";function ae(s,e){return c(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm-4.34 7.964a.75.75 0 0 1-1.061-1.06 5.236 5.236 0 0 1 3.73-1.538 5.236 5.236 0 0 1 3.695 1.538.75.75 0 1 1-1.061 1.06 3.736 3.736 0 0 0-2.639-1.098 3.736 3.736 0 0 0-2.664 1.098Z","clip-rule":"evenodd"})])}const ne={components:{TransitionRoot:F,TransitionChild:M,Dialog:U,DialogPanel:L,DialogTitle:A,XMarkIcon:B},data(){return{transferIcon:W,saveIcon:z,show:!1,loading:!1,editIcon:E,cookie:P("token")}},props:{data:{type:Object,required:!0}},computed:{filteredRequisitions(){return this.data.requisitions.map(s=>({stock_item_name:s.stock_item.name,stock_item_id:s.stock_item.id,quantity:s.quantity_requested,lot:s.lot_number,batch:s.batch_number}))}},methods:{async submitForm(){this.loading=!0;const s=new g,e={sending_to:this.data.sendingTo,stock_status_reason:this.data.reason,stock_items:this.filteredRequisitions},{data:a,error:r,pending:o}=await s.stockOutTransaction(`${this.cookie}`,e);this.loading=o,a.value&&(this.loading=!1,R().$toast.success(a.value.message),this.handleClick(),this.$router.push("/stock-management/issue")),r.value&&(this.loading=!1,console.error(r.value),this.handleClick())},handleClick(){this.show=!this.show}}},ie={class:"fixed inset-0 overflow-y-auto"},le={class:"flex min-h-full items-center justify-center p-4 text-center"},re={class:"border-b px-3 py-3 flex items-center justify-between"},de={class:"py-5 px-5"},ce={class:"w-full flex items-center space-x-2"},me={class:"w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"},ue={class:"w-full flex items-center space-x-2 mt-2"},pe={class:"w-full border-b-2 text-gray-700 border-dotted pb-1 font-normal border-gray-300"},fe={class:"w-full"},_e={class:"border-b border-t border-r border-l rounded"},he={class:"px-2 py-2 border-r"},ye={class:"px-2 py-2 border-r"},ke={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function be(s,e,a,r,o,i){const k=Q,b=m("TransitionChild"),_=m("DialogTitle"),f=m("XMarkIcon"),v=m("FormKit"),x=m("DialogPanel"),w=m("Dialog"),l=m("TransitionRoot");return c(),u("div",null,[n(k,{click:i.handleClick,color:"success",text:"Transfer",icon:o.transferIcon},null,8,["click","icon"]),n(l,{appear:"",show:o.show,as:"template"},{default:p(()=>[n(w,{as:"div",class:"relative z-10"},{default:p(()=>[n(b,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:p(()=>e[1]||(e[1]=[t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),t("div",ie,[t("div",le,[n(b,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:p(()=>[n(x,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:p(()=>[t("div",re,[n(_,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:p(()=>e[2]||(e[2]=[t("img",{src:O,class:"w-8 h-8 mr-2"},null,-1),q(" Checkout Stock Transfer ")])),_:1}),t("button",{onClick:e[0]||(e[0]=(...h)=>i.handleClick&&i.handleClick(...h))},[n(f,{class:"w-5 h-5"})])]),n(v,{type:"form","submit-label":"Update",onSubmit:i.submitForm,actions:!1,id:"submitForm"},{default:p(({value:h})=>[t("div",de,[t("div",ce,[e[3]||(e[3]=t("p",{class:"w-72 font-medium"},"To: ",-1)),t("span",me,y(a.data.sendingTo),1)]),t("div",ue,[e[4]||(e[4]=t("p",{class:"w-72 font-medium"},"Reason for transfer: ",-1)),t("span",pe,y(a.data.reason),1)]),e[6]||(e[6]=t("div",{class:"bg-gray-50 px-2 py-2 border rounded-t mt-4"},[t("h3",{class:"font-semibold"},"Stock Out Items")],-1)),t("table",fe,[e[5]||(e[5]=t("thead",{clas:"w-full border-l border-r"},[t("tr",{class:"border-b border-r border-l rounded"},[t("th",{class:"px-2 py-2 text-left border-r"}," Item "),t("th",{class:"px-2 py-2 text-left"}," Quantity ")])],-1)),t("tbody",null,[(c(!0),u(N,null,$(i.filteredRequisitions,(d,Pe)=>(c(),u("tr",_e,[t("td",he,y(d.stock_item_name),1),t("td",ye,y(d.quantity),1)]))),256))])])]),t("div",ke,[n(k,{loading:o.loading,type:"submit",click:()=>{},color:"success",icon:o.transferIcon,text:"Continue"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const ve=j(ne,[["render",be]]),ge={setup(){Y({title:`${H.name.toUpperCase()} - Transfer Stock`})},components:{TransitionRoot:F,TransitionChild:M,Dialog:U,DialogPanel:L,DialogTitle:A,XMarkIcon:B,UserIcon:J,SquaresPlusIcon:ee,FaceFrownIcon:ae},data(){return{open:!1,transferIcon:W,saveIcon:z,clearIcon:te,addIcon:G,deleteIcon:se,destinations:new Array,selectedDestination:{name:"-- select destination --"},reason:"",requisitions:new Array,stockItems:new Array,cookie:P("token"),showFacility:!1,showWard:!1,showDepartment:!1,departments:new Array,selectedDeparment:{name:"-- select department --"},facilities:new Array,selectedFacility:{name:"-- select facility --"},wards:new Array,selectedWard:{name:"-- select Ward --"},selectedItem:{name:"-- select item --"},pages:[{name:"Home",link:"/home"},{name:"Stock Management",link:"#"},{name:"Transactions",link:"/stock-management/transactions"}],transferData:{},requisitionLoading:{id:0,value:!1}}},created(){this.init()},computed:{destinationOptions(){return[{name:"Department",label:"Department"},{name:"Facility",label:"Facility"},{name:"Wards",label:"Wards"}]},selectedItems(){switch(this.selectedDestination.name){case"Department":return this.selectedItem={name:"-- select department --"},this.departments;case"Facility":return this.selectedItem={name:"-- select facility --"},this.facilities;case"Ward":return this.selectedItem={name:"-- select ward --"},this.wards;default:return[]}}},methods:{async init(){await this.loadStockItems(),this.addDestinations()},async submitForm(){const s=new g,e={sending_to:this.selectedDestination.name,stock_status_reason:this.reason,stock_items:this.requisitions.map(i=>({stock_item_id:i.stock_item.id,quantity:i.quantity_requested,lot:i.lot_number,batch:i.batch_number}))},{data:a,error:r,pending:o}=await s.stockOutTransaction(`${this.cookie}`,e);a.value&&console.log(a.value),r.value&&console.log(r.value)},async loadStockItems(){const s=new g,{data:e,error:a}=await s.getStockItem(`${this.cookie}`);e.value&&(this.stockItems=e.value),a.value&&console.error(a.value)},async loadDepartments(){const s={route:S.departments,method:"GET",token:`${this.cookie}`},{data:e,error:a}=await I(s);e.value&&(this.departments=e.value),a.value&&console.error(a.value)},async loadFacilities(){const s={route:S.facility,method:"GET",token:`${this.cookie}`},{data:e,error:a}=await I(s);e.value&&(this.facilities=e.value.data),a.value&&console.error(a.value)},async loadWards(){console.log("bjkm");const s={route:"encounter_type_facility_section_mappings/facility_sections?encounter_type_id=2",method:"GET",token:`${this.cookie}`},{data:e,error:a}=await I(s);e.value&&(this.wards=e.value),a.value&&console.error(a.value)},addDestinations(){["Facility","Ward","Department"].forEach(e=>{this.destinations.push({name:e})})},async checkStockQuantity(s){this.requisitionLoading={id:s.id,value:!0};const e=new g,a={stock_item_id:s.stock_item.id,quantity:s.quantity_requested,batch:s.batch_number,lot:s.lot_number},{data:r,error:o,pending:i}=await e.checkStockQuantity(`${this.cookie}`,a);this.requisitionLoading={id:s.id,value:i},r.value&&(r.value.deduction_allowed||(R().$toast.warning(r.value.message),s.quantity_requested=0),console.log(r.value),this.requisitionLoading={id:s.id,value:!1}),o.value&&(console.error(o.value),this.requisitionLoading={id:s.id,value:!1})},addStockItem(){this.requisitions.push({id:0,stock_item:{name:"-- select item --",id:0},quantity_requested:0,batch_number:"",lot_number:""})},deleteStockItem(s){s>=0&&s<this.requisitions.length&&this.requisitions.splice(s,1)},clearForm(){this.$formkit.reset("submitForm")},handleClick(){this.open=!this.open}},watch:{selectedDestination:{handler(s){const a={Department:this.loadDepartments,Facility:this.loadFacilities,Ward:this.loadWards}[s.name];a&&a.call(this)},deep:!0},requisitions:{deep:!0,handler(s){let e=s[s.length-1];e.quantity_requested>0&&e.quantity_requested>0&&e.batch_number!==""&&e.lot_number!==""&&this.checkStockQuantity(e)}}}},xe={class:"px-5 py-5"},we={class:"flex items-center justify-between py-5"},Ie={class:""},De={class:"w-full mt-2 grid grid-cols-3 gap-2"},qe={class:"col-span-1 order-2 rounded border"},Se={class:"flex flex-col space-y-2 px-5 py-5"},Ve={class:"w-full flex flex-col space-y-2"},Ce={key:0,class:"w-full flex flex-col space-y-2"},Te={class:"font-medium"},Fe={class:"col-span-2 order-1 rounded border"},Me={class:"px-5 py-5"},Ue={class:"grid grid-cols-5 gap-4 mb-5"},Le={class:"flex flex-col space-y-2"},Ae={class:"mt-8 flex items-center space-x-2"},Be={class:"flex flex-col items-center justify-center space-y-2"};function We(s,e,a,r,o,i){const k=Z,b=ve,_=X,f=m("FormKit"),v=Q,x=K,w=m("SquaresPlusIcon");return c(),u("div",xe,[n(k,{pages:o.pages},null,8,["pages"]),t("div",we,[e[4]||(e[4]=t("h3",{class:"text-2xl font-semibold capitalize"},"Transfer Stock",-1)),t("div",Ie,[n(b,{data:{reason:o.reason,sendingTo:`${o.selectedItem.name.includes("select")?"":o.selectedItem.name} ${o.selectedDestination.name.includes("select")?"":o.selectedDestination.name}`,requisitions:o.requisitions}},null,8,["data"])])]),t("div",null,[t("div",De,[t("div",qe,[e[7]||(e[7]=t("div",{class:"bg-gray-50 px-2 py-2 border-b rounded-t"},[t("h3",{class:"font-semibold text-lg"},"Details")],-1)),t("div",Se,[t("div",Ve,[e[5]||(e[5]=t("label",{class:"font-medium"},"Destination",-1)),n(_,{items:o.destinations,modelValue:o.selectedDestination,"onUpdate:modelValue":e[0]||(e[0]=l=>o.selectedDestination=l)},null,8,["items","modelValue"])]),o.selectedDestination&&i.selectedItems.length>0?(c(),u("div",Ce,[t("label",Te,[q("Select "+y(o.selectedDestination.name.toLowerCase()),1),e[6]||(e[6]=t("span",{class:"text-red-600 font-medium"},"*",-1))]),n(_,{"is-searchable":!0,items:i.selectedItems,modelValue:o.selectedItem,"onUpdate:modelValue":e[1]||(e[1]=l=>o.selectedItem=l)},null,8,["items","modelValue"])])):D("",!0),n(f,{label:"Reason for transfer",type:"textarea",modelValue:o.reason,"onUpdate:modelValue":e[2]||(e[2]=l=>o.reason=l),validation:"required"},null,8,["modelValue"])])]),t("div",Fe,[e[12]||(e[12]=t("div",{class:"bg-gray-50 px-2 py-2 border-b rounded-t"},[t("h3",{class:"font-semibold text-lg"},"Stock Items")],-1)),t("div",Me,[V(n(v,{color:"primary",click:i.addStockItem,text:"Add items",icon:o.addIcon},null,8,["click","icon"]),[[C,o.requisitions.length>0]]),(c(!0),u(N,null,$(o.requisitions,(l,h)=>(c(),u("div",{class:"flex flex-col space-y-3 mt-5",key:h},[t("div",Ue,[t("div",Le,[e[8]||(e[8]=t("label",{class:"font-medium mb-0"},"Stock item",-1)),n(_,{"is-searchable":!0,items:o.stockItems,modelValue:l.stock_item,"onUpdate:modelValue":d=>l.stock_item=d},null,8,["items","modelValue","onUpdate:modelValue"])]),n(f,{label:"Quantity requested",type:"number",validation:"required",modelValue:l.quantity_requested,"onUpdate:modelValue":d=>l.quantity_requested=d,modelModifiers:{lazy:!0},delay:1e3},null,8,["modelValue","onUpdate:modelValue"]),n(f,{label:"Batch",type:"text",validation:"required",modelValue:l.batch_number,"onUpdate:modelValue":d=>l.batch_number=d,modelModifiers:{lazy:!0},delay:2e3},null,8,["modelValue","onUpdate:modelValue"]),n(f,{label:"Lot",type:"text",validation:"required",modelValue:l.lot_number,"onUpdate:modelValue":d=>l.lot_number=d,modelModifiers:{lazy:!0},delay:2e3},null,8,["modelValue","onUpdate:modelValue"]),t("div",Ae,[o.requisitionLoading.id==l.id&&o.requisitionLoading.value?(c(),T(x,{key:0,class:"w-5 h-5"})):D("",!0),o.requisitionLoading.value?D("",!0):(c(),T(v,{key:1,icon:o.deleteIcon,text:"Delete",color:"error",click:()=>{i.deleteStockItem(h)}},null,8,["icon","click"]))])])]))),128)),V(t("div",Be,[e[10]||(e[10]=t("img",{src:oe,class:"w-28 h-28 text-red-500"},null,-1)),e[11]||(e[11]=t("p",{class:"flex items-center"},"No stock items for transfer",-1)),t("button",{onClick:e[3]||(e[3]=(...l)=>i.addStockItem&&i.addStockItem(...l)),type:"button",class:"flex items-center text-sky-500 font-medium"},[n(w,{class:"w-5 h-5 mr-2"}),e[9]||(e[9]=q(" Add stock item "))])],512),[[C,o.requisitions.length==0]])])])])])])}const rt=j(ge,[["render",We]]);export{rt as default};