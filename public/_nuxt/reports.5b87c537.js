import{_ as D}from"./Breadcrumb.vue.29096239.js";import{u as C,a as M,_ as I,g,o as l,c as p,d as i,e,t as n,n as x,h as b,F as k,r as v,p as A,H as O,k as u,i as Y,w as L,v as N,l as B,f as V}from"./entry.8b130418.js";import{_ as j}from"./Dropdown.b76af8d6.js";import{_ as P}from"./Loader.d7f1913d.js";import{d as h}from"./constants.71ae81d4.js";import{u as F}from"./facility.89075c79.js";import{S as R}from"./stock.23e77051.js";import{a as H,h as m}from"./fetch.6ed6d8be.js";import{k as G,w as K}from"./vue-doc-download.83ac7e78.js";import{P as U}from"./package.651db5f9.js";import{r as X}from"./ExclamationCircleIcon.5eafabd3.js";import{r as q}from"./CheckCircleIcon.78765db9.js";import{r as W}from"./ArchiveBoxXMarkIcon.0b375f59.js";import{r as z}from"./ArrowPathIcon.f2fac6c8.js";import{r as J}from"./DocumentTextIcon.dd00979c.js";import{_ as w}from"./logo.7772852c.js";import{_ as Q}from"./stock_out.b899876e.js";import"./nuxt-link.a6b19347.js";import"./HomeIcon.75dd900a.js";import"./listbox.232a252f.js";import"./hidden.94b93f99.js";import"./use-text-value.d90f1789.js";import"./CheckIcon.54595a00.js";import"./MagnifyingGlassIcon.a1000dd2.js";import"./network.9f9ddcab.js";import"./transition.0c9cdf07.js";import"./XMarkIcon.2df3c244.js";import"./PencilSquareIcon.e8095535.js";import"./PrinterIcon.55ff5c9e.js";const Z={setup(){C({title:`${U.name.toUpperCase()} - Stock Reports`})},components:{ExportToExcel:G,ExportToWord:K,ExclamationCircleIcon:X,CheckCircleIcon:q,ExclamationTriangleIcon:H,ArchiveBoxXMarkIcon:W},data(){return{moment:m,header:"Stock Reports",facility:F(),tab:0,generating:!1,dateRange:[],pages:[{name:"Home",link:"/home"},{name:"Stock Management",link:"#"}],reportData:new Array,generateIcon:z,exportIcon:J,cookie:M("token"),transactionTypes:new Array,selectedType:{name:"-- select type --"}}},created(){this.init()},computed:{generalStockExportData(){return this.reportData.map(r=>({"STOCK ITEM":r.name,DESCRIPTION:r.description,BALANCE:r.consolidated_available_balance,"MINIMUM ORDER LEVEL":r.minimum_order_level,LOCATION:r.stock_location,CATEGORY:r.stock_category,STRENGTH:r.strength,BATCH:r.batch,"LOT NUMBER":r.lot,"TRANSACTION TYPE":r.transaction_type,"EXPIRY DATE":m(r.expiry_date).format(h),RECEIVER:r.receiving_from,SENDER:r.sending_to,REMAKRS:this.checkStock(r)}))},stockMovementExportData(){return this.reportData.map(r=>({"Stock Item":r.name,TYPE:r.transaction_type,"STOCK BEFORE":r.overall_stock_balance_before_transaction,ADJUSTMENT:r.transacted_quantity,"STOCK AFTER":r.overall_stock_balance_after_transaction,DATE:m(r.transaction_date).format(h)}))},generalStockData(){return this.reportData.map(r=>({...r,remarks:this.checkStock(r)}))},getStockClass(){return r=>{const o=(r||"").toLowerCase();return o==="not expired"?"text-green-600":o==="expired"?"text-red-600":o==="near expiry"?"text-yellow-500":o==="out of stock"?"text-gray-600":""}},getStockIcon(){return r=>{const o=(r||"").toLowerCase();return o==="not expired"?"CheckCircleIcon":o==="expired"||o==="near expiry"?"ExclamationTriangleIcon":o==="out of stock"?"ArchiveBoxXMarkIcon":"div"}},getStockText(){return r=>{const o=(r||"").toLowerCase();return o==="not expired"?"":o==="expired"?"Expired":o==="near expiry"?"Near Expiry":o==="out of stock"?"Out of Stock":""}}},methods:{checkStock(r){let o=this.checkExpiryStatus(r);if(o=="Not Expired")if(r.after_transaction_remaining_balance>0){if(r.after_transaction_remaining_balance<r.minimum_order_level)return"Low Stock"}else return"Out of Stock";else return o},checkExpiryStatus(r){const o=new Date;o.setHours(0,0,0,0);const c=new Date(r.expiry_date);if(c.setHours(0,0,0,0),c<o)return"Expired";const d=new Date;return d.setDate(o.getDate()+14),c<=d?"Near Expiry":"Not Expired"},async init(){const r=new R,{data:o,error:c,pending:d}=await r.getStockTransactionTypes(`${this.cookie}`);o.value&&(this.transactionTypes=o.value),c.value&&console.error(c.value)},async generateStockReport(){this.generating=!0;const r=this.dateRange!==null&&this.dateRange.length>0?m(this.dateRange[0]).format("YYYY-MM-DD"):"",o=this.dateRange!==null&&this.dateRange.length>1?m(this.dateRange[1]).format("YYYY-MM-DD"):"",c=this.selectedType.name=="-- select type --"?"":this.selectedType.name,d=new R,{data:t,error:a,pending:f}=await d.generateStockMovementReport(`${this.cookie}`,c,r,o);this.generating=f,t.value&&(this.reportData=t.value.data,this.generating=!1),a.value&&(console.error(a.value),this.generating=!1)}}},$={class:"px-5 py-5"},ee={class:"flex items-center justify-between py-5"},te={class:"text-2xl font-semibold"},re={class:"flex items-center space-x-2 bg-gray-50"},oe={key:0,class:"py-5"},se={class:"w-full flex items-center justify-between py-5"},ne={class:"flex items-center space-x-2"},ae={class:"flex items-center space-x-2"},le={id:"print-container1"},ie={class:"w-full bg-gray-50 rounded-t px-10 py-5"},ce={class:"flex items-center justify-between px-5"},pe=e("td",null,[e("img",{src:w,alt:"app-logo",class:"w-24 h-24 object-cover"})],-1),de={class:"py-5"},me={class:"uppercase font-medium"},_e={class:"uppercase font-medium"},ue={class:"uppercase font-medium"},fe=e("p",{class:"uppercase font-medium underline"},"Laboratory Report",-1),xe={class:"w-full"},he=e("thead",{class:"w-full"},[e("tr",{class:"border bg-gray-50"},[e("th",{class:"px-2 py-2 text-left border-r"},"Stock Item"),e("th",{class:"px-2 py-2 text-left border-r"},"Location"),e("th",{class:"px-2 py-2 text-left border-r"},"Batch"),e("th",{class:"px-2 py-2 text-left border-r"},"Lot"),e("th",{class:"px-2 py-2 text-left border-r"},"Quantity"),e("th",{class:"px-2 py-2 text-left border-r"},"Remarks")])],-1),ye={class:"w-full"},ge={class:"px-2 py-2 text-left border-r border-l"},be={class:"px-2 py-2 text-left border-r border-l"},ke={class:"px-2 py-2 text-left border-r border-l"},ve={class:"px-2 py-2 text-left border-r border-l text-green-500"},Re={class:"px-2 py-2 text-left border-r border-l"},we={class:"px-2 py-2 text-left border-r border-l"},Ee={key:1,class:"px-3 py-3"},Se={class:"flex items-center justify-between py-5"},Te={class:"flex items-center space-x-2"},De={class:"border rounded mt-10",id:"print-container"},Ce={class:"w-full bg-gray-50 rounded-t border-b px-10 py-5"},Me={class:"flex items-center justify-between px-5"},Ie=e("td",null,[e("img",{src:w,alt:"app-logo",class:"w-24 h-24 object-cover"})],-1),Ae={class:"py-5"},Oe={class:"uppercase font-medium"},Ye={class:"uppercase font-medium"},Le={class:"uppercase font-medium"},Ne=e("p",{class:"uppercase font-medium underline"},"Laboratory Report",-1),Be={class:"px-3 py-3"},Ve={class:"mb-2"},je={class:"font-medium mb-2"},Pe={class:"text-normal font-normal"},Fe={class:"flex itmes-center mx-auto justify-center py-20"},He={key:0,class:"w-full"},Ge=e("thead",{class:"w-full"},[e("tr",{class:"border bg-gray-50"},[e("th",{class:"px-2 py-2 text-left border-r"},"Stock Item"),e("th",{class:"px-2 py-2 text-left border-r"},"Type"),e("th",{class:"px-2 py-2 text-left border-r"},"Stock Before"),e("th",{class:"px-2 py-2 text-left border-r"},"Adjustment"),e("th",{class:"px-2 py-2 text-left border-r"},"Stock After"),e("th",{class:"px-2 py-2 text-left border-r"},"Date")])],-1),Ke={class:"w-full"},Ue={class:"px-2 py-2 text-left border-r border-l"},Xe={class:"px-2 py-2 text-left border-r border-l"},qe={class:"px-2 py-2 text-left border-r border-l"},We={class:"px-2 py-2 text-left border-r border-l"},ze={class:"px-2 py-2 text-left border-r border-l"},Je={class:"px-2 py-2 text-left border-r border-l"},Qe={key:0,class:"flex flex-col space-y-3 items-center justify-center"},Ze=e("img",{src:Q,class:"w-20 h-20"},null,-1),$e=e("p",null,"Please generate report data to preview the report",-1),et=[Ze,$e];function tt(r,o,c,d,t,a){const f=D,_=V,y=g("excel"),E=g("datepicker"),S=j,T=P;return l(),p("div",$,[i(f,{pages:t.pages},null,8,["pages"]),e("div",ee,[e("h3",te,n(t.header),1)]),e("div",null,[e("div",re,[e("button",{onClick:o[0]||(o[0]=s=>t.tab=0),class:x(t.tab==0?"bg-sky-500 text-white py-2 px-4":"font-medium px-4 text-gray-600 hover:text-sky-500 transition duration-150")}," General Stock ",2),e("button",{onClick:o[1]||(o[1]=s=>t.tab=1),class:x(t.tab==1?"bg-sky-500 text-white py-2 px-4":"font-medium px-4 text-gray-600 hover:text-sky-500 transition duration-150")}," Stock Movements ",2)]),t.tab==0?(l(),p("div",oe,[e("div",null,[e("div",se,[e("div",ne,[i(_,{loading:t.generating,click:()=>{a.generateStockReport()},text:"Generate Report",color:"success",icon:t.generateIcon},null,8,["loading","click","icon"])]),e("div",ae,[i(y,{class:"btn btn-default",header:["GENERAL STOCK LABORATORY REPORT",t.facility.details.name,t.facility.details.address,t.facility.details.phone],data:a.generalStockExportData,worksheet:"report-work-sheet",name:"general_stock_laboratory.xls"},{default:b(()=>[i(_,{color:"success",click:()=>{},icon:t.exportIcon,text:"Export"},null,8,["icon"])]),_:1},8,["header","data","name"])])]),e("div",le,[e("table",ie,[e("tr",ce,[pe,e("td",de,[e("p",me,n(t.facility.details.name),1),e("p",_e,n(t.facility.details.address),1),e("p",ue,n(t.facility.details.phone),1),fe])])]),e("table",xe,[he,e("tbody",ye,[(l(!0),p(k,null,v(a.generalStockData,s=>(l(),p("tr",{class:"w-full border-b",key:s.id},[e("td",ge,n(s.name),1),e("td",be,n(s.stock_location),1),e("td",ke,n(s.batch),1),e("td",ve,"#"+n(s.lot),1),e("td",Re,n(s.consolidated_available_balance),1),e("td",we,[e("div",{class:x(["flex items-center space-x-1",a.getStockClass(s==null?void 0:s.remarks)])},[(l(),A(O(a.getStockIcon(s==null?void 0:s.remarks)),{class:"w-5 h-5"})),e("p",null,n(a.getStockText(s==null?void 0:s.remarks)),1)],2)])]))),128))])])])])])):u("",!0),t.tab==1?(l(),p("div",Ee,[e("div",null,[e("div",Se,[e("div",Te,[i(E,{position:"left",range:"",placeholder:"-- start date & end date --","input-classes":"w-72 border rounded px-2 py-1.5 block font-inter focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-150 focus:border-none",modelValue:t.dateRange,"onUpdate:modelValue":o[2]||(o[2]=s=>t.dateRange=s),format:"dd/MM/yyyy"},null,8,["modelValue"]),i(S,{items:t.transactionTypes,modelValue:t.selectedType,"onUpdate:modelValue":o[3]||(o[3]=s=>t.selectedType=s)},null,8,["items","modelValue"]),i(_,{text:"Generate",click:()=>{a.generateStockReport()},color:"success",icon:t.generateIcon},null,8,["click","icon"])]),e("div",null,[i(y,{class:"btn btn-default",header:["STOCK MOVEMENT LABORATORY REPORT",t.facility.details.name,t.facility.details.address,t.facility.details.phone],data:a.stockMovementExportData,worksheet:"report-work-sheet",name:"stock_movement_laboratory.xls"},{default:b(()=>[i(_,{color:"success",click:()=>{},icon:t.exportIcon,text:"Export"},null,8,["icon"])]),_:1},8,["header","data","name"])])]),e("div",De,[e("table",Ce,[e("tr",Me,[Ie,e("td",Ae,[e("p",Oe,n(t.facility.details.name),1),e("p",Ye,n(t.facility.details.address),1),e("p",Le,n(t.facility.details.phone),1),Ne])])]),e("div",Be,[e("div",Ve,[e("h4",je,[Y("Stock Movement Report for Period: "),e("span",Pe,n(t.dateRange!==null&&t.dateRange.length>0?t.moment(t.dateRange[0]).format("YYYY-MM-DD"):"")+" - "+n(t.dateRange!==null&&t.dateRange.length>1?t.moment(t.dateRange[1]).format("YYYY-MM-DD"):""),1)])]),L(e("div",Fe,[i(T,{loading:t.generating},null,8,["loading"])],512),[[N,t.generating]]),t.reportData.length>0&&!t.generating?(l(),p("table",He,[Ge,e("tbody",Ke,[(l(!0),p(k,null,v(t.reportData,s=>(l(),p("tr",{class:"w-full border-b",key:s.Lot},[e("td",Ue,n(s.name),1),e("td",Xe,n(s.transaction_type),1),e("td",qe,n(s.overall_stock_balance_before_transaction),1),e("td",We,n(s.transacted_quantity),1),e("td",ze,n(s.overall_stock_balance_after_transaction),1),e("td",Je,n(t.moment(s.transaction_date).format("dateFormat"in r?r.dateFormat:B(h))),1)]))),128))])])):u("",!0)])]),t.reportData.length==0&&!t.generating?(l(),p("div",Qe,et)):u("",!0)])])):u("",!0)])])}const It=I(Z,[["render",tt]]);export{It as default};