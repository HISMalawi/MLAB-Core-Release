import{_ as N}from"./Breadcrumb.vue.29096239.js";import{a as C,b as A,_ as S,g as c,o as d,c as u,e,d as t,h as l,i as h,t as _,F as w,r as $,f as V,u as R,p as M,k as j}from"./entry.8b130418.js";import{_ as P}from"./OutlinedButton.7de08d36.js";import{S as T}from"./stock.23e77051.js";import{r as K}from"./XMarkIcon.2df3c244.js";import{r as X}from"./UserIcon.b4088a14.js";import{r as D}from"./TicketIcon.89ae4ddd.js";import{r as O}from"./fetch.6ed6d8be.js";import{r as E}from"./ArrowDownTrayIcon.40f31273.js";import{r as G}from"./ArrowUturnLeftIcon.92012f67.js";import{r as U}from"./DocumentCheckIcon.41b003db.js";import{S as H,h as Q,U as z,G as L,V as J}from"./transition.0c9cdf07.js";import{_ as W}from"./Dropdown.b76af8d6.js";import{P as Y}from"./package.651db5f9.js";import{r as Z}from"./TrashIcon.373049c3.js";import"./nuxt-link.a6b19347.js";import"./HomeIcon.75dd900a.js";import"./constants.71ae81d4.js";import"./network.9f9ddcab.js";import"./PencilSquareIcon.e8095535.js";import"./PrinterIcon.55ff5c9e.js";import"./hidden.94b93f99.js";import"./listbox.232a252f.js";import"./use-text-value.d90f1789.js";import"./CheckIcon.54595a00.js";import"./CheckCircleIcon.78765db9.js";import"./MagnifyingGlassIcon.a1000dd2.js";const ee={props:{voucherId:{required:!0,type:String},requisitions:{required:!0,type:Array}},components:{TransitionRoot:H,TransitionChild:Q,Dialog:z,DialogPanel:L,DialogTitle:J,XMarkIcon:K,UserIcon:X,TicketIcon:D},data(){return{open:!1,addIcon:O,saveIcon:E,clearIcon:G,completeIcon:U,loading:!1,name:"",description:"",cookie:C("token")}},methods:{async createStockOrder(){this.loading=!0;const o=new T,n={voucher_number:Number(this.voucherId),requisitions:this.requisitions.map(r=>({stock_item_id:r.stock_item.id,quantity_requested:r.quantity_requested}))},{data:i,error:a,pending:s}=await o.createStockOrder(`${this.cookie}`,n);this.loading=s,i.value&&(this.loading=!1,A().$toast.success(`Stock order ${this.$route.params.voucherId} created successfully`),this.handleClick(),this.$emit("update",!0)),a.value&&(this.loading=!1,console.error(a.value))},handleClick(){this.open=!this.open},clearForm(){this.$formkit.reset("submitForm")}}},te=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),oe={class:"fixed inset-0 overflow-y-auto"},se={class:"flex min-h-full items-center justify-center p-4 text-center"},re={class:"border-b px-3 py-3 flex items-center justify-between"},ne={class:"py-5 px-5 space-y-3"},ie={class:"flex bg-gray-50 border-l-4 border-l-100 rounded-r px-2 py-2 items-center space-x-2"},ce={class:"mt-3"},ae={class:"w-full"},le=e("thead",{clas:"w-full border-t border-l border-r"},[e("tr",{class:"border-b border-t border-r border-l rounded"},[e("th",{colspan:2,class:"text-left p-2"}," Requisitions ")]),e("tr",{class:"border-b border-t border-r border-l rounded"},[e("th",{class:"px-2 py-2 text-left border-r"}," Stock Item "),e("th",{class:"px-2 py-2 text-left"}," Quantity Being Requested ")])],-1),de={class:"px-2 py-2 border-r"},me={class:"px-2 py-2"},ue={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function pe(o,n,i,a,s,r){const f=V,k=c("TransitionChild"),b=c("TicketIcon"),y=c("DialogTitle"),x=c("XMarkIcon"),g=P,m=c("FormKit"),v=c("DialogPanel"),p=c("Dialog"),B=c("TransitionRoot");return d(),u("div",null,[e("div",null,[t(f,{icon:s.completeIcon,text:"Complete",color:"primary",click:()=>{r.handleClick()}},null,8,["icon","click"])]),t(B,{appear:"",show:s.open,as:"template"},{default:l(()=>[t(p,{as:"div",onClose:r.handleClick,class:"relative z-10"},{default:l(()=>[t(k,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[te]),_:1}),e("div",oe,[e("div",se,[t(k,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[t(v,{class:"w-full max-w-4xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>[e("div",re,[t(y,{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:l(()=>[t(b,{class:"w-8 h-8 mr-2"}),h(" Order Checkout ")]),_:1}),e("button",{onClick:n[0]||(n[0]=(...I)=>r.handleClick&&r.handleClick(...I))},[t(x,{class:"w-5 h-5"})])]),t(m,{type:"form","submit-label":"Update",onSubmit:r.createStockOrder,actions:!1,id:"submitForm"},{default:l(({value:I})=>[e("div",ne,[e("div",ie,[t(b,{class:"h-5 w-5"}),e("p",null,[h("Voucher Number: "),e("strong",null,_(o.$route.params.voucherId),1)])]),e("div",ce,[e("table",ae,[le,e("tbody",null,[(d(!0),u(w,null,$(i.requisitions,(q,F)=>(d(),u("tr",{key:F,class:"border-b border-t border-r border-l rounded"},[e("td",de,_(q.stock_item.name),1),e("td",me,_(q.quantity_requested),1)]))),128))])])])]),e("div",ue,[t(g,{type:"button",click:()=>{},text:"Cancel"}),t(f,{loading:s.loading,type:"submit",click:()=>{},color:"success",icon:s.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const _e=S(ee,[["render",pe]]),he={setup(){R({title:`${Y.name.toUpperCase()} - Create Stock Order`})},components:{TicketIcon:D},data(){return{header:"Create Stock Order",pages:[{name:"Home",link:"/home"},{name:"Stock Orders",link:"/stock-management/orders"}],cookie:C("token"),addIcon:O,deleteicon:Z,completeIcon:U,loading:!1,requisitions:new Array,stockItems:new Array}},created(){this.init()},methods:{async init(){const o=new T,{data:n,error:i}=await o.getStockItem(`${this.cookie}`);n.value&&(this.stockItems=n.value),i.value&&console.error(i.value)},addStockItem(){this.requisitions.push({stock_item:{name:"-- select item --",id:0},quantity_requested:0,id:0,batch_number:"",lot_number:""})},deleteStockItem(o){o>=0&&o<this.requisitions.length&&this.requisitions.splice(o,1)},isValidRequisitions(o){let n=!1;o.length>0&&(n=!0);let i=!1;for(const a of o)a.stock_item.name=="-- select item --"||a.quantity_requested==0?i=!1:i=!0;return n&&i},navigateOrders(o){o&&this.$router.push("/stock-management/orders")}}},fe={class:"px-5 py-5"},ke={class:"py-5 flex items-center justify-between"},be={class:"text-2xl font-semibold"},ye={class:"rounded border"},ve={class:"flex rounded-t justify-between bg-gray-50 border-b px-2 py-2 cursor-text"},xe={class:"flex items-center space-x-2"},ge={class:"px-5 py-5"},Ie=e("div",{class:"flex px-2 py-2 mb-4 rounded-r border-l-4 border-sky-100 bg-sky-50"},[h(" Click on the "),e("strong",{class:"mx-2"},'"Add Stock Item"'),h(" button to start creating your order requisition items ")],-1),qe={class:"grid grid-cols-4 gap-4 mt-5"},Ce={class:"flex flex-col space-y-2"},Se=e("label",{class:"font-medium mb-0"},"Stock item",-1),we={class:"mt-8"};function $e(o,n,i,a,s,r){const f=N,k=c("TicketIcon"),b=_e,y=V,x=W,g=c("FormKit");return d(),u("div",fe,[t(f,{pages:s.pages},null,8,["pages"]),e("div",ke,[e("h3",be,_(s.header),1)]),e("div",ye,[e("div",ve,[e("div",xe,[t(k,{class:"h-5 w-5"}),e("p",null,[h("Voucher Number: "),e("strong",null,_(o.$route.params.voucherId),1)])]),r.isValidRequisitions(s.requisitions)?(d(),M(b,{key:0,onUpdate:r.navigateOrders,"voucher-id":`${o.$route.params.voucherId}`,requisitions:s.requisitions},null,8,["onUpdate","voucher-id","requisitions"])):j("",!0)]),e("div",ge,[Ie,t(y,{icon:s.addIcon,text:"Add Stock Item",color:"success",click:()=>{r.addStockItem()}},null,8,["icon","click"]),(d(!0),u(w,null,$(s.requisitions,(m,v)=>(d(),u("div",{class:"flex flex-col space-y-3",key:v},[e("div",qe,[e("div",Ce,[Se,t(x,{"is-searchable":!0,items:s.stockItems,modelValue:m.stock_item,"onUpdate:modelValue":p=>m.stock_item=p},null,8,["items","modelValue","onUpdate:modelValue"])]),t(g,{label:"Quantity requested",type:"number",validation:"required",modelValue:m.quantity_requested,"onUpdate:modelValue":p=>m.quantity_requested=p},null,8,["modelValue","onUpdate:modelValue"]),e("div",we,[t(y,{icon:s.deleteicon,text:"Delete",color:"error",click:()=>{r.deleteStockItem(v)}},null,8,["icon","click"])])])]))),128))])])])}const ot=S(he,[["render",$e]]);export{ot as default};