import{_ as D}from"./Breadcrumb.vue.29096239.js";import{_ as y,g as d,o as b,c as w,d as a,h as r,e,i as I,t as o,f as k,u as S,a as B}from"./entry.8b130418.js";import{_ as V}from"./SearchBar.3d64840b.js";import{r as L}from"./XMarkIcon.2df3c244.js";import{r as x,a as P}from"./PencilSquareIcon.e8095535.js";import{S as U,h as M,U as O,G as R,V as j}from"./transition.0c9cdf07.js";import{_ as A}from"./ambulance.2e21dbec.js";import{_ as q}from"./Datatable.fefdb3df.js";import{d as v}from"./constants.71ae81d4.js";import{S as N}from"./stock.23e77051.js";import{h as g}from"./fetch.6ed6d8be.js";import{P as X}from"./package.651db5f9.js";import"./nuxt-link.a6b19347.js";import"./HomeIcon.75dd900a.js";import"./hidden.94b93f99.js";import"./Loader.d7f1913d.js";import"./network.9f9ddcab.js";import"./PrinterIcon.55ff5c9e.js";const E={components:{TransitionRoot:U,TransitionChild:M,Dialog:O,DialogPanel:R,DialogTitle:j,XMarkIcon:L},data(){return{viewIcon:x,show:!1,editIcon:P}},props:{data:{type:Object,required:!0}},methods:{handleClick(){this.show=!this.show}}},F=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),G={class:"fixed inset-0 overflow-y-auto"},H={class:"flex min-h-full items-center justify-center p-4 text-center"},z={class:"border-b px-3 py-3 flex items-center justify-between"},Q=e("img",{src:A,class:"w-8 h-8 mr-2"},null,-1),J={class:"py-5 space-y-3 px-5"},K={class:"w-full flex flex-col space-y-1"},W=e("label",{class:"font-semibold text-lg"},"Name",-1),Y={class:"w-full flex flex-col space-y-1"},Z=e("label",{class:"font-semibold text-lg"},"Description",-1),$={class:"w-full flex flex-col space-y-1"},ee=e("label",{class:"font-semibold text-lg"},"Location",-1),te={class:"w-full flex flex-col space-y-1"},se=e("label",{class:"font-semibold text-lg"},"Transaction Type",-1),oe={class:"w-full flex flex-col space-y-1"},ae=e("label",{class:"font-semibold text-lg"},"Sender",-1),ne={class:"w-full flex flex-col space-y-1"},le=e("label",{class:"font-semibold text-lg"},"Receiver",-1),ie={class:"w-full flex flex-col space-y-1"},ce=e("label",{class:"font-semibold text-lg"},"Batch",-1),re={class:"w-full flex flex-col space-y-1"},de=e("label",{class:"font-semibold text-lg"},"Lot",-1),_e={class:"w-full flex flex-col space-y-1"},me=e("label",{class:"font-semibold text-lg"},"Quantity",-1),fe={class:"w-full flex flex-col space-y-1"},ue=e("label",{class:"font-semibold text-lg"},"Available Balance",-1),pe={class:"w-full flex flex-col space-y-1"},he=e("label",{class:"font-semibold text-lg"},"Remaining Balance After Transaction",-1),xe={class:"w-full flex flex-col space-y-1"},ve=e("label",{class:"font-semibold text-lg"},"Expirty Date",-1),ge={class:"w-full flex flex-col space-y-1"},ye=e("label",{class:"font-semibold text-lg"},"Transaction Date",-1);function be(n,c,t,f,s,l){const _=k,i=d("TransitionChild"),u=d("DialogTitle"),p=d("XMarkIcon"),h=d("DialogPanel"),m=d("Dialog"),T=d("TransitionRoot");return b(),w("div",null,[a(_,{click:l.handleClick,color:"primary",text:"View",icon:s.viewIcon},null,8,["click","icon"]),a(T,{appear:"",show:s.show,as:"template"},{default:r(()=>[a(m,{as:"div",class:"relative z-10"},{default:r(()=>[a(i,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>[F]),_:1}),e("div",G,[e("div",H,[a(i,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:r(()=>[a(h,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:r(()=>[e("div",z,[a(u,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:r(()=>[Q,I(" View Stock Transaction ")]),_:1}),e("button",{onClick:c[0]||(c[0]=(...C)=>l.handleClick&&l.handleClick(...C))},[a(p,{class:"w-5 h-5"})])]),e("div",J,[e("div",K,[W,e("p",null,o(t.data.name),1)]),e("div",Y,[Z,e("p",null,o(t.data.description),1)]),e("div",$,[ee,e("p",null,o(t.data.stock_location),1)]),e("div",te,[se,e("p",null,o(t.data.transaction_type),1)]),e("div",oe,[ae,e("p",null,o(t.data.sending_to),1)]),e("div",ne,[le,e("p",null,o(t.data.receiving_from),1)]),e("div",ie,[ce,e("p",null,o(t.data.batch),1)]),e("div",re,[de,e("p",null,o(t.data.lot),1)]),e("div",_e,[me,e("p",null,o(t.data.transacted_quantity),1)]),e("div",fe,[ue,e("p",null,o(t.data.consolidated_available_balance),1)]),e("div",pe,[he,e("p",null,o(t.data.after_transaction_remaining_balance),1)]),e("div",xe,[ve,e("p",null,o(t.data.expiry_date),1)]),e("div",ge,[ye,e("p",null,o(t.data.transaction_date),1)])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const we=y(E,[["render",be]]),ke={setup(){S({title:`${X.name.toUpperCase()} - Stock Transactions`})},data(){return{header:"Stock Transactions",search:"",loading:!1,transferIcon:x,viewIcon:x,pages:[{name:"Home",link:"/home"},{name:"Stock Management",link:"#"}],headers:[{text:"item",value:"name",sortable:!0},{text:"type",value:"transaction_type"},{text:"sender",value:"receiving_from"},{text:"receiver",value:"sending_to"},{text:"batch",value:"batch"},{text:"lot",value:"lot"},{text:"expiry date",value:"expiry_date",sortable:!0},{text:"quantity",value:"transacted_quantity",sortable:!0},{text:"transaction date",value:"transaction_date",sortable:!0},{text:"actions",value:"actions"}],transactions:new Array,cookie:B("token"),serverItemsLength:0,serverOptions:{page:1,rowsPerPage:25,sortBy:"name"}}},created(){this.init(this.search)},computed:{filteredTransactions(){return this.transactions.map(n=>({...n,expiry_date:g(n.expiry_date).format(v),transaction_date:g(n.transaction_date).format(v),sending_to:n.sending_to==null?"Laboratory Store":n.sending_to,receiving_from:n.receiving_from==null?"Laboratory Store":n.receiving_from}))}},methods:{async init(n){this.loading=!0;const c=new N,{page:t,rowsPerPage:f}=this.serverOptions,s=`search=${n}&page=${t}&per_page=${f}`,{data:l,pending:_,error:i}=await c.getStockTransactions(`${this.cookie}`,s);this.loading=_,l.value&&(this.transactions=l.value.data,this.loading=!1,this.serverItemsLength=l.value.meta.total_count),i.value&&(console.error(i.value),this.loading=!1)}}},Te={class:"px-5 py-5"},Ce={class:"flex items-center justify-between py-5"},De={class:"text-2xl font-semibold"},Ie={class:"flex items-center space-x-3"},Se={class:"flex items-center justify-end py-5"},Be={class:"py-2 flex items-center space-x-2"};function Ve(n,c,t,f,s,l){const _=D,i=k,u=V,p=we,h=q;return b(),w("div",Te,[a(_,{pages:s.pages},null,8,["pages"]),e("div",Ce,[e("h3",De,o(s.header),1),e("div",Ie,[a(i,{text:"Receive stock",type:"button",color:"warning",icon:s.transferIcon,click:()=>n.$router.push("/stock-management/transactions/receive-stock")},null,8,["icon","click"]),a(i,{text:"Transfer stock",type:"button",color:"success",icon:s.transferIcon,click:()=>n.$router.push("/stock-management/transactions/transfer-stock")},null,8,["icon","click"])])]),e("div",Se,[a(u,{search:s.search,"onUpdate:search":c[0]||(c[0]=m=>s.search=m),onUpdate:l.init},null,8,["search","onUpdate"])]),e("div",null,[a(h,{headers:s.headers,data:l.filteredTransactions,loading:s.loading,searchField:"name",searchValue:s.search,serverItemsLength:s.serverItemsLength,serverOptions:s.serverOptions,onUpdate:l.init},{actions:r(({item:m})=>[e("div",Be,[a(p,{data:m},null,8,["data"])])]),_:1},8,["headers","data","loading","searchValue","serverItemsLength","serverOptions","onUpdate"])])])}const Ke=y(ke,[["render",Ve]]);export{Ke as default};