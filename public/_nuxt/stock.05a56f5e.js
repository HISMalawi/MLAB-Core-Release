import{_ as S}from"./Breadcrumb.vue.29096239.js";import{_ as T}from"./SearchBar.3d64840b.js";import{_ as g,g as r,o as x,c as k,d as o,h as c,e,i as P,t as d,l as B,f as v,u as V,a as j}from"./entry.8b130418.js";import{d as y}from"./constants.71ae81d4.js";import{h as w,r as M}from"./fetch.6ed6d8be.js";import{r as O}from"./XMarkIcon.2df3c244.js";import{r as b,a as C}from"./PencilSquareIcon.e8095535.js";import{S as U,h as L,U as q,G as N,V as A}from"./transition.0c9cdf07.js";import{_ as E}from"./Datatable.fefdb3df.js";import{S as F}from"./stock.23e77051.js";import{P as R}from"./package.651db5f9.js";import{r as X}from"./TrashIcon.373049c3.js";import"./nuxt-link.a6b19347.js";import"./HomeIcon.75dd900a.js";import"./network.9f9ddcab.js";import"./PrinterIcon.55ff5c9e.js";import"./hidden.94b93f99.js";import"./Loader.d7f1913d.js";const $={components:{TransitionRoot:U,TransitionChild:L,Dialog:q,DialogPanel:N,DialogTitle:A,XMarkIcon:O},data(){return{viewIcon:b,show:!1,editIcon:C,moment:w}},props:{data:{type:Object,required:!0}},methods:{handleClick(){this.show=!this.show}}},G=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),H={class:"fixed inset-0 overflow-y-auto"},z={class:"flex min-h-full items-center justify-center p-4 text-center"},Q={class:"border-b px-3 py-3 flex items-center justify-between"},J={class:"mt-2 space-y-3 px-5"},K={class:"w-full flex flex-col space-y-1"},W=e("label",{class:"font-semibold text-lg"},"Name",-1),Y={class:"w-full flex flex-col space-y-1"},Z=e("label",{class:"font-semibold text-lg"},"Description",-1),ee={class:"w-full flex flex-col space-y-1"},te=e("label",{class:"font-semibold text-lg"},"Location",-1),oe={class:"w-full flex flex-col space-y-1"},se=e("label",{class:"font-semibold text-lg"},"Quantity",-1),ae={class:"w-full flex flex-col space-y-1"},ne=e("label",{class:"font-semibold text-lg"},"Date modified",-1),ie={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50"};function ce(s,i,n,u,t,a){const l=v,p=r("TransitionChild"),h=r("DialogTitle"),_=r("XMarkIcon"),f=r("DialogPanel"),m=r("Dialog"),I=r("TransitionRoot");return x(),k("div",null,[o(l,{click:a.handleClick,color:"primary",text:"View",icon:t.viewIcon},null,8,["click","icon"]),o(I,{appear:"",show:t.show,as:"template"},{default:c(()=>[o(m,{as:"div",class:"relative z-10"},{default:c(()=>[o(p,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:c(()=>[G]),_:1}),e("div",H,[e("div",z,[o(p,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:c(()=>[o(f,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:c(()=>[e("div",Q,[o(h,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:c(()=>[P(" View Stock ")]),_:1}),e("button",{onClick:i[0]||(i[0]=(...D)=>a.handleClick&&a.handleClick(...D))},[o(_,{class:"w-5 h-5"})])]),e("div",J,[e("div",K,[W,e("p",null,d(n.data.stock_item.name),1)]),e("div",Y,[Z,e("p",null,d(n.data.stock_item.description),1)]),e("div",ee,[te,e("p",null,d(n.data.stock_location.name),1)]),e("div",oe,[se,e("p",null,d(n.data.quantity),1)]),e("div",ae,[ne,e("p",null,d(t.moment(n.data.updated_date).format("dateFormat"in s?s.dateFormat:B(y))),1)])]),e("div",ie,[o(l,{click:()=>{s.$router.push("/stock-management/stock-items")},icon:t.editIcon,text:"Edit",color:"success"},null,8,["click","icon"])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const le=g($,[["render",ce]]),re={setup(){V({title:`${R.name.toUpperCase()} - Stock`})},data(){return{header:"Stock",addIcon:M,viewIcon:b,deleteIcon:X,editIcon:C,pages:[{name:"Home",link:"/home"},{name:"Stock Management",link:"#"}],search:"",cookie:j("token"),headers:[{text:"name",value:"stock_item.name",sortable:!0},{text:"description",value:"stock_item.description"},{text:"quantity",value:"quantity"},{text:"date modified",value:"updated_date"},{text:"actions",value:"actions"}],loading:!1,serverItemsLength:0,stocks:new Array,serverOptions:{page:1,rowsPerPage:25,sortBy:"name"}}},created(){this.init()},computed:{filteredStocks(){return this.stocks.map(s=>({...s,updated_date:w(s.updated_date).format(y)}))}},methods:{async init(){this.loading=!0;const s=new F,{page:i,rowsPerPage:n}=this.serverOptions;let u=`?page=${i}&per_page=${n}&search=${this.search}`;const{data:t,error:a,pending:l}=await s.getStock(`${this.cookie}`,u);this.loading=l,t.value&&(this.loading=!1,this.stocks=t.value.data),a.value&&(this.loading=!1,console.error(a.value))}},watch:{search(){this.init()}}},de={class:"px-5 py-5"},me={class:"flex items-center justify-between py-5"},pe={class:"text-2xl font-semibold"},_e={class:"flex items-center justify-end py-5"},ue={class:"py-2 flex items-center space-x-2"};function he(s,i,n,u,t,a){const l=S,p=T,h=le,_=v,f=E;return x(),k("div",de,[o(l,{pages:t.pages},null,8,["pages"]),e("div",me,[e("h3",pe,d(t.header),1)]),e("div",_e,[o(p,{search:t.search,"onUpdate:search":i[0]||(i[0]=m=>t.search=m)},null,8,["search"])]),e("div",null,[o(f,{headers:t.headers,data:a.filteredStocks,loading:t.loading,"search-field":"name","search-value":t.search,serverItemsLength:t.serverItemsLength,serverOptions:t.serverOptions,onUpdate:a.init},{actions:c(({item:m})=>[e("div",ue,[o(h,{data:m},null,8,["data"]),o(_,{click:()=>{s.$router.push("/stock-management/stock-items")},text:"Edit",color:"success",icon:t.editIcon},null,8,["click","icon"]),o(_,{click:()=>{s.$router.push("/stock-management/stock-items")},text:"Delete",color:"error",icon:t.deleteIcon},null,8,["click","icon"])])]),_:1},8,["headers","data","loading","search-value","serverItemsLength","serverOptions","onUpdate"])])])}const Oe=g(re,[["render",he]]);export{Oe as default};