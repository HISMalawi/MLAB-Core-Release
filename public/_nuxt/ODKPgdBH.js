import{_ as T}from"./B38OGO74.js";import{_ as S}from"./CPUPa6f5.js";import{x as g,S as A,p as O,Y as B,G as M,V as P,q as V,A as k,B as x,C as v,y as r,b as y,e as w,f as o,z as c,g as e,k as j,t as d,h as E,O as b,_ as C,s as R,a as q}from"./DaVfplCl.js";import{_ as L}from"./CzqI9CSL.js";import{u as N}from"./MuIwof8c.js";import{S as U}from"./NLSj8HbG.js";import{P as $}from"./Dr0mg474.js";import{r as F}from"./CemrLY-G.js";import"./CaCwXEk-.js";import"./Bk1fID9q.js";import"./B5Ij5f4J.js";const X={components:{TransitionRoot:A,TransitionChild:O,Dialog:B,DialogPanel:M,DialogTitle:P,XMarkIcon:V},data(){return{viewIcon:k,show:!1,editIcon:x,moment:v}},props:{data:{type:Object,required:!0}},methods:{handleClick(){this.show=!this.show}}},z=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),G={class:"fixed inset-0 overflow-y-auto"},H={class:"flex min-h-full items-center justify-center p-4 text-center"},Y={class:"border-b px-3 py-3 flex items-center justify-between"},Q={class:"mt-2 space-y-3 px-5"},J={class:"w-full flex flex-col space-y-1"},K=e("label",{class:"font-semibold text-lg"},"Name",-1),W={class:"w-full flex flex-col space-y-1"},Z=e("label",{class:"font-semibold text-lg"},"Description",-1),ee={class:"w-full flex flex-col space-y-1"},te=e("label",{class:"font-semibold text-lg"},"Location",-1),oe={class:"w-full flex flex-col space-y-1"},se=e("label",{class:"font-semibold text-lg"},"Quantity",-1),ae={class:"w-full flex flex-col space-y-1"},ne=e("label",{class:"font-semibold text-lg"},"Date modified",-1),ie={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50"};function ce(s,i,n,u,t,a){const l=C,_=r("TransitionChild"),h=r("DialogTitle"),p=r("XMarkIcon"),f=r("DialogPanel"),m=r("Dialog"),D=r("TransitionRoot");return y(),w("div",null,[o(l,{click:a.handleClick,color:"primary",text:"View",icon:t.viewIcon},null,8,["click","icon"]),o(D,{appear:"",show:t.show,as:"template"},{default:c(()=>[o(m,{as:"div",class:"relative z-10"},{default:c(()=>[o(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:c(()=>[z]),_:1}),e("div",G,[e("div",H,[o(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:c(()=>[o(f,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:c(()=>[e("div",Y,[o(h,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:c(()=>[j(" View Stock ")]),_:1}),e("button",{onClick:i[0]||(i[0]=(...I)=>a.handleClick&&a.handleClick(...I))},[o(p,{class:"w-5 h-5"})])]),e("div",Q,[e("div",J,[K,e("p",null,d(n.data.stock_item.name),1)]),e("div",W,[Z,e("p",null,d(n.data.stock_item.description),1)]),e("div",ee,[te,e("p",null,d(n.data.stock_location.name),1)]),e("div",oe,[se,e("p",null,d(n.data.quantity),1)]),e("div",ae,[ne,e("p",null,d(t.moment(n.data.updated_date).format("DATE_FORMAT"in s?s.DATE_FORMAT:E(b))),1)])]),e("div",ie,[o(l,{click:()=>{s.$router.push("/stock-management/stock-items")},icon:t.editIcon,text:"Edit",color:"success"},null,8,["click","icon"])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const le=g(X,[["render",ce]]),re={setup(){N({title:`${$.name.toUpperCase()} - Stock`})},data(){return{header:"Stock",addIcon:R,viewIcon:k,deleteIcon:F,editIcon:x,pages:[{name:"Home",link:"/home"},{name:"Stock Management",link:"#"}],search:"",cookie:q("token"),headers:[{text:"name",value:"stock_item.name",sortable:!0},{text:"description",value:"stock_item.description"},{text:"quantity",value:"quantity"},{text:"date modified",value:"updated_date"},{text:"actions",value:"actions"}],loading:!1,serverItemsLength:0,stocks:new Array,serverOptions:{page:1,rowsPerPage:25,sortBy:"name"}}},created(){this.init()},computed:{filteredStocks(){return this.stocks.map(s=>({...s,updated_date:v(s.updated_date).format(b)}))}},methods:{async init(){this.loading=!0;const s=new U,{page:i,rowsPerPage:n}=this.serverOptions;let u=`?page=${i}&per_page=${n}&search=${this.search}`;const{data:t,error:a,pending:l}=await s.getStock(`${this.cookie}`,u);this.loading=l,t.value&&(this.loading=!1,this.stocks=t.value.data),a.value&&(this.loading=!1,console.error(a.value))}},watch:{search(){this.init()}}},de={class:"px-5 py-5"},me={class:"flex items-center justify-between py-5"},_e={class:"text-2xl font-semibold"},pe={class:"flex items-center justify-end py-5"},ue={class:"py-2 flex items-center space-x-2"};function he(s,i,n,u,t,a){const l=T,_=S,h=le,p=C,f=L;return y(),w("div",de,[o(l,{pages:t.pages},null,8,["pages"]),e("div",me,[e("h3",_e,d(t.header),1)]),e("div",pe,[o(_,{search:t.search,"onUpdate:search":i[0]||(i[0]=m=>t.search=m)},null,8,["search"])]),e("div",null,[o(f,{headers:t.headers,data:a.filteredStocks,loading:t.loading,"search-field":"name","search-value":t.search,serverItemsLength:t.serverItemsLength,serverOptions:t.serverOptions,onUpdate:a.init},{actions:c(({item:m})=>[e("div",ue,[o(h,{data:m},null,8,["data"]),o(p,{click:()=>{s.$router.push("/stock-management/stock-items")},text:"Edit",color:"success",icon:t.editIcon},null,8,["click","icon"]),o(p,{click:()=>{s.$router.push("/stock-management/stock-items")},text:"Delete",color:"error",icon:t.deleteIcon},null,8,["click","icon"])])]),_:1},8,["headers","data","loading","search-value","serverItemsLength","serverOptions","onUpdate"])])])}const Te=g(re,[["render",he]]);export{Te as default};