import{_ as D}from"./Breadcrumb.vue.a5cd8cfb.js";import{u as C,_ as M,f as g,o as l,c as p,b as c,d as e,t as n,n as x,g as b,F as k,r as v,p as I,G as A,j as u,h as O,w as Y,v as L,k as N,e as B}from"./entry.0b8cd08a.js";import{_ as V}from"./Dropdown.c225f75a.js";import{_ as j}from"./Loader.079f2cba.js";import{d as h}from"./constants.1be0c037.js";import{u as P}from"./vue.f36acd1f.cbc612d6.js";import{u as F}from"./facility.90d3dd6e.js";import{S as R}from"./stock.472aad49.js";import{a as G,h as m}from"./fetch.3bebfb7d.js";import{k as H,w as K}from"./vue-doc-download.12bf1c0a.js";import{P as U}from"./package.b2e4a4ff.js";import{r as X}from"./ExclamationCircleIcon.ae5f070e.js";import{r as q}from"./CheckCircleIcon.2a112f22.js";import{r as W}from"./ArchiveBoxXMarkIcon.8106c288.js";import{r as z}from"./ArrowPathIcon.799ac706.js";import{r as J}from"./DocumentTextIcon.0c291505.js";import{_ as w}from"./logo.168ad185.js";import{_ as Q}from"./stock_out.07b8ed6e.js";import"./nuxt-link.7cdf9b23.js";import"./HomeIcon.4eb0c0eb.js";import"./listbox.9e3dd9c1.js";import"./hidden.7f45844e.js";import"./use-text-value.1a486bc2.js";import"./CheckIcon.dd25a2df.js";import"./MagnifyingGlassIcon.a0160e2a.js";import"./transition.29920038.js";import"./XMarkIcon.c65f13ea.js";import"./PencilSquareIcon.8bd9941b.js";import"./PrinterIcon.f055bae4.js";const Z={setup(){P({title:`${U.name.toUpperCase()} - Stock Reports`})},components:{ExportToExcel:H,ExportToWord:K,ExclamationCircleIcon:X,CheckCircleIcon:q,ExclamationTriangleIcon:G,ArchiveBoxXMarkIcon:W},data(){return{moment:m,header:"Stock Reports",facility:F(),tab:0,generating:!1,dateRange:[],pages:[{name:"Home",link:"/home"},{name:"Stock Management",link:"#"}],reportData:new Array,generateIcon:z,exportIcon:J,cookie:C("token"),transactionTypes:new Array,selectedType:{name:"-- select type --"}}},created(){this.init()},computed:{generalStockExportData(){return this.reportData.map(r=>({"STOCK ITEM":r.name,DESCRIPTION:r.description,BALANCE:r.consolidated_available_balance,"MINIMUM ORDER LEVEL":r.minimum_order_level,LOCATION:r.stock_location,CATEGORY:r.stock_category,STRENGTH:r.strength,BATCH:r.batch,"LOT NUMBER":r.lot,"TRANSACTION TYPE":r.transaction_type,"EXPIRY DATE":m(r.expiry_date).format(h),RECEIVER:r.receiving_from,SENDER:r.sending_to,REMAKRS:this.checkStock(r)}))},stockMovementExportData(){return this.reportData.map(r=>({"Stock Item":r.name,TYPE:r.transaction_type,"STOCK BEFORE":r.overall_stock_balance_before_transaction,ADJUSTMENT:r.transacted_quantity,"STOCK AFTER":r.overall_stock_balance_after_transaction,DATE:m(r.transaction_date).format(h)}))},generalStockData(){return this.reportData.map(r=>({...r,remarks:this.checkStock(r)}))},getStockClass(){return r=>{const o=(r||"").toLowerCase();return o==="not expired"?"text-green-600":o==="expired"?"text-red-600":o==="near expiry"?"text-yellow-500":o==="out of stock"?"text-gray-600":""}},getStockIcon(){return r=>{const o=(r||"").toLowerCase();return o==="not expired"?"CheckCircleIcon":o==="expired"||o==="near expiry"?"ExclamationTriangleIcon":o==="out of stock"?"ArchiveBoxXMarkIcon":"div"}},getStockText(){return r=>{const o=(r||"").toLowerCase();return o==="not expired"?"":o==="expired"?"Expired":o==="near expiry"?"Near Expiry":o==="out of stock"?"Out of Stock":""}}},methods:{checkStock(r){let o=this.checkExpiryStatus(r);if(o=="Not Expired")if(r.after_transaction_remaining_balance>0){if(r.after_transaction_remaining_balance<r.minimum_order_level)return"Low Stock"}else return"Out of Stock";else return o},checkExpiryStatus(r){const o=new Date;o.setHours(0,0,0,0);const i=new Date(r.expiry_date);if(i.setHours(0,0,0,0),i<o)return"Expired";const d=new Date;return d.setDate(o.getDate()+14),i<=d?"Near Expiry":"Not Expired"},async init(){const r=new R,{data:o,error:i,pending:d}=await r.getStockTransactionTypes(`${this.cookie}`);o.value&&(this.transactionTypes=o.value),i.value&&console.error(i.value)},async generateStockReport(){this.generating=!0;const r=this.dateRange!==null&&this.dateRange.length>0?m(this.dateRange[0]).format("YYYY-MM-DD"):"",o=this.dateRange!==null&&this.dateRange.length>1?m(this.dateRange[1]).format("YYYY-MM-DD"):"",i=this.selectedType.name=="-- select type --"?"":this.selectedType.name,d=new R,{data:t,error:a,pending:f}=await d.generateStockMovementReport(`${this.cookie}`,i,r,o);this.generating=f,t.value&&(this.reportData=t.value.data,this.generating=!1),a.value&&(console.error(a.value),this.generating=!1)}}},$={class:"px-5 py-5"},ee={class:"flex items-center justify-between py-5"},te={class:"text-2xl font-semibold"},re={class:"flex items-center space-x-2 bg-gray-50"},oe={key:0,class:"py-5"},se={class:"w-full flex items-center justify-between py-5"},ne={class:"flex items-center space-x-2"},ae={class:"flex items-center space-x-2"},le={id:"print-container1"},ce={class:"w-full bg-gray-50 rounded-t px-10 py-5"},ie={class:"flex items-center justify-between px-5"},pe=e("td",null,[e("img",{src:w,alt:"app-logo",class:"w-24 h-24 object-cover"})],-1),de={class:"py-5"},me={class:"uppercase font-medium"},_e={class:"uppercase font-medium"},ue={class:"uppercase font-medium"},fe=e("p",{class:"uppercase font-medium underline"},"Laboratory Report",-1),xe={class:"w-full"},he=e("thead",{class:"w-full"},[e("tr",{class:"border bg-gray-50"},[e("th",{class:"px-2 py-2 text-left border-r"},"Stock Item"),e("th",{class:"px-2 py-2 text-left border-r"},"Location"),e("th",{class:"px-2 py-2 text-left border-r"},"Batch"),e("th",{class:"px-2 py-2 text-left border-r"},"Lot"),e("th",{class:"px-2 py-2 text-left border-r"},"Quantity"),e("th",{class:"px-2 py-2 text-left border-r"},"Remarks")])],-1),ye={class:"w-full"},ge={class:"px-2 py-2 text-left border-r border-l"},be={class:"px-2 py-2 text-left border-r border-l"},ke={class:"px-2 py-2 text-left border-r border-l"},ve={class:"px-2 py-2 text-left border-r border-l text-green-500"},Re={class:"px-2 py-2 text-left border-r border-l"},we={class:"px-2 py-2 text-left border-r border-l"},Ee={key:1,class:"px-3 py-3"},Se={class:"flex items-center justify-between py-5"},Te={class:"flex items-center space-x-2"},De={class:"border rounded mt-10",id:"print-container"},Ce={class:"w-full bg-gray-50 rounded-t border-b px-10 py-5"},Me={class:"flex items-center justify-between px-5"},Ie=e("td",null,[e("img",{src:w,alt:"app-logo",class:"w-24 h-24 object-cover"})],-1),Ae={class:"py-5"},Oe={class:"uppercase font-medium"},Ye={class:"uppercase font-medium"},Le={class:"uppercase font-medium"},Ne=e("p",{class:"uppercase font-medium underline"},"Laboratory Report",-1),Be={class:"px-3 py-3"},Ve={class:"mb-2"},je={class:"font-medium mb-2"},Pe={class:"text-normal font-normal"},Fe={class:"flex itmes-center mx-auto justify-center py-20"},Ge={key:0,class:"w-full"},He=e("thead",{class:"w-full"},[e("tr",{class:"border bg-gray-50"},[e("th",{class:"px-2 py-2 text-left border-r"},"Stock Item"),e("th",{class:"px-2 py-2 text-left border-r"},"Type"),e("th",{class:"px-2 py-2 text-left border-r"},"Stock Before"),e("th",{class:"px-2 py-2 text-left border-r"},"Adjustment"),e("th",{class:"px-2 py-2 text-left border-r"},"Stock After"),e("th",{class:"px-2 py-2 text-left border-r"},"Date")])],-1),Ke={class:"w-full"},Ue={class:"px-2 py-2 text-left border-r border-l"},Xe={class:"px-2 py-2 text-left border-r border-l"},qe={class:"px-2 py-2 text-left border-r border-l"},We={class:"px-2 py-2 text-left border-r border-l"},ze={class:"px-2 py-2 text-left border-r border-l"},Je={class:"px-2 py-2 text-left border-r border-l"},Qe={key:0,class:"flex flex-col space-y-3 items-center justify-center"},Ze=e("img",{src:Q,class:"w-20 h-20"},null,-1),$e=e("p",null,"Please generate report data to preview the report",-1),et=[Ze,$e];function tt(r,o,i,d,t,a){const f=D,_=B,y=g("excel"),E=g("datepicker"),S=V,T=j;return l(),p("div",$,[c(f,{pages:t.pages},null,8,["pages"]),e("div",ee,[e("h3",te,n(t.header),1)]),e("div",null,[e("div",re,[e("button",{onClick:o[0]||(o[0]=s=>t.tab=0),class:x(t.tab==0?"bg-sky-500 text-white py-2 px-4":"font-medium px-4 text-gray-600 hover:text-sky-500 transition duration-150")}," General Stock ",2),e("button",{onClick:o[1]||(o[1]=s=>t.tab=1),class:x(t.tab==1?"bg-sky-500 text-white py-2 px-4":"font-medium px-4 text-gray-600 hover:text-sky-500 transition duration-150")}," Stock Movements ",2)]),t.tab==0?(l(),p("div",oe,[e("div",null,[e("div",se,[e("div",ne,[c(_,{loading:t.generating,click:()=>{a.generateStockReport()},text:"Generate Report",color:"success",icon:t.generateIcon},null,8,["loading","click","icon"])]),e("div",ae,[c(y,{class:"btn btn-default",header:["GENERAL STOCK LABORATORY REPORT",t.facility.details.name,t.facility.details.address,t.facility.details.phone],data:a.generalStockExportData,worksheet:"report-work-sheet",name:"general_stock_laboratory.xls"},{default:b(()=>[c(_,{color:"success",click:()=>{},icon:t.exportIcon,text:"Export"},null,8,["icon"])]),_:1},8,["header","data","name"])])]),e("div",le,[e("table",ce,[e("tr",ie,[pe,e("td",de,[e("p",me,n(t.facility.details.name),1),e("p",_e,n(t.facility.details.address),1),e("p",ue,n(t.facility.details.phone),1),fe])])]),e("table",xe,[he,e("tbody",ye,[(l(!0),p(k,null,v(a.generalStockData,s=>(l(),p("tr",{class:"w-full border-b",key:s.id},[e("td",ge,n(s.name),1),e("td",be,n(s.stock_location),1),e("td",ke,n(s.batch),1),e("td",ve,"#"+n(s.lot),1),e("td",Re,n(s.consolidated_available_balance),1),e("td",we,[e("div",{class:x(["flex items-center space-x-1",a.getStockClass(s==null?void 0:s.remarks)])},[(l(),I(A(a.getStockIcon(s==null?void 0:s.remarks)),{class:"w-5 h-5"})),e("p",null,n(a.getStockText(s==null?void 0:s.remarks)),1)],2)])]))),128))])])])])])):u("",!0),t.tab==1?(l(),p("div",Ee,[e("div",null,[e("div",Se,[e("div",Te,[c(E,{position:"left",range:"",placeholder:"-- start date & end date --","input-classes":"w-72 border rounded px-2 py-1.5 block font-inter focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",modelValue:t.dateRange,"onUpdate:modelValue":o[2]||(o[2]=s=>t.dateRange=s),format:"dd/MM/yyyy"},null,8,["modelValue"]),c(S,{items:t.transactionTypes,modelValue:t.selectedType,"onUpdate:modelValue":o[3]||(o[3]=s=>t.selectedType=s)},null,8,["items","modelValue"]),c(_,{text:"Generate",click:()=>{a.generateStockReport()},color:"success",icon:t.generateIcon},null,8,["click","icon"])]),e("div",null,[c(y,{class:"btn btn-default",header:["STOCK MOVEMENT LABORATORY REPORT",t.facility.details.name,t.facility.details.address,t.facility.details.phone],data:a.stockMovementExportData,worksheet:"report-work-sheet",name:"stock_movement_laboratory.xls"},{default:b(()=>[c(_,{color:"success",click:()=>{},icon:t.exportIcon,text:"Export"},null,8,["icon"])]),_:1},8,["header","data","name"])])]),e("div",De,[e("table",Ce,[e("tr",Me,[Ie,e("td",Ae,[e("p",Oe,n(t.facility.details.name),1),e("p",Ye,n(t.facility.details.address),1),e("p",Le,n(t.facility.details.phone),1),Ne])])]),e("div",Be,[e("div",Ve,[e("h4",je,[O("Stock Movement Report for Period: "),e("span",Pe,n(t.dateRange!==null&&t.dateRange.length>0?t.moment(t.dateRange[0]).format("YYYY-MM-DD"):"")+" - "+n(t.dateRange!==null&&t.dateRange.length>1?t.moment(t.dateRange[1]).format("YYYY-MM-DD"):""),1)])]),Y(e("div",Fe,[c(T,{loading:t.generating},null,8,["loading"])],512),[[L,t.generating]]),t.reportData.length>0&&!t.generating?(l(),p("table",Ge,[He,e("tbody",Ke,[(l(!0),p(k,null,v(t.reportData,s=>(l(),p("tr",{class:"w-full border-b",key:s.Lot},[e("td",Ue,n(s.name),1),e("td",Xe,n(s.transaction_type),1),e("td",qe,n(s.overall_stock_balance_before_transaction),1),e("td",We,n(s.transacted_quantity),1),e("td",ze,n(s.overall_stock_balance_after_transaction),1),e("td",Je,n(t.moment(s.transaction_date).format("dateFormat"in r?r.dateFormat:N(h))),1)]))),128))])])):u("",!0)])]),t.reportData.length==0&&!t.generating?(l(),p("div",Qe,et)):u("",!0)])])):u("",!0)])])}const It=M(Z,[["render",tt]]);export{It as default};