import{_ as F}from"./Breadcrumb.vue.7469196c.js";import{_ as E}from"./Dropdown.57ff97da.js";import{u as H,a as M,b as A,_ as B,g as T,o as Q,c as R,d as c,e,i as j,h as I,t as o,F as L,r as C,f as Y}from"./entry.3ba6d4d3.js";import{_ as J}from"./ExportButton.vue.d4add687.js";import{_ as N}from"./Address.vue.50e8f7e4.js";import{e as V}from"./constants.1010fcbd.js";import{e as S,f as O}from"./fetch.17eaab73.js";import{u as $}from"./facility.8721fb0c.js";import{P as G}from"./package.babe1e72.js";import{r as P}from"./ArrowPathIcon.36a7e1d6.js";import{r as q}from"./ArrowUpTrayIcon.d8350397.js";import{r as U}from"./FunnelIcon.66d24cfa.js";import{_ as z}from"./report.901e14c7.js";import{_ as K}from"./logo.dd361e1d.js";import"./nuxt-link.24ac1730.js";import"./HomeIcon.e4f6e8f1.js";import"./listbox.752e36d3.js";import"./hidden.c42221ac.js";import"./use-text-value.1a122419.js";import"./CheckIcon.7ae673cc.js";import"./CheckCircleIcon.78484015.js";import"./MagnifyingGlassIcon.7fabd2c6.js";import"./transition.7e81bdc8.js";import"./XMarkIcon.7262efd1.js";import"./PencilSquareIcon.ded5f0ed.js";import"./PrinterIcon.93c5df84.js";const W={setup(){H({title:`${G.name.toUpperCase()} - Haematology Report`})},data(){return{viewIcon:P,exportIcon:q,date:"",pages:[{name:"Home",link:"/home"},{name:"Reports",link:"#"},{name:"MoH Diagnistic Reports",link:"#"}],indicators:new Array,items:new Array,data:new Array,yearSelected:{name:"select year"},years:new Array,cookie:M("token"),viewing:!1,facility:$(),json_fields:{fieldLabel:"indicator",anotherFieldLabel:{field:["indicator"],callback:n=>`formatted value ${n}`}},reportData:new Array}},created(){this.getYears(),this.getReportIndicators()},methods:{async getReportIndicators(){const n={route:`${S.reportIndicators}?department=Haematology`,method:"GET",token:`${this.cookie}`},{data:r,error:l}=await O(n);r.value&&r.value.map(x=>{this.items.push({indicator:x,jan:"!",feb:"!",mar:"!",totalQ1:"!",apr:"!",may:"!",june:"!",totalQ2:"!",jul:"!",aug:"!",sept:"!",totalQ3:"!",oct:"!",nov:"!",dec:"!",totalQ4:"!",total:"!"})}),l.value&&console.error(l.value)},async getReportData(){if(this.yearSelected.name=="select year")A().$toast.warning("Please select a year");else{this.viewing=!0;const n={route:`${S.mohReport}haematology?year=${this.yearSelected.name}`,method:"GET",token:`${this.cookie}`},{data:r,error:l,pending:x}=await O(n);if(this.viewing=x,r.value){let s=new Array;this.items.map(a=>{let i=r.value.january[a.indicator],d=r.value.february[a.indicator],p=r.value.march[a.indicator],m=r.value.april[a.indicator],y=r.value.may[a.indicator],b=r.value.june[a.indicator],_=r.value.july[a.indicator],t=r.value.august[a.indicator],h=r.value.september[a.indicator],v=r.value.october[a.indicator],w=r.value.november[a.indicator],D=r.value.december[a.indicator],u=i+d+p,f=m+y+b,g=_+t+h,k=v+w+D;s.push({indicator:a.indicator,jan:i,feb:d,mar:p,totalQ1:u,apr:m,may:y,june:b,totalQ2:f,jul:_,aug:t,sept:h,totalQ3:g,oct:v,nov:w,dec:D,totalQ4:k,total:u+f+g+k}),this.reportData.push({"Laboratory Service":a.indicator,January:i,February:d,March:p,"Total Q1":u,April:m,May:y,June:b,"Total Q2":f,July:_,August:t,September:h,"Total Q3":g,October:v,November:w,December:D,"Total Q4":k,Total:u+f+g+k})}),this.items=new Array,this.items.push(...s),this.viewing=!1,A().$toast.success("Report data generated successfully!")}l.value&&(this.viewing=!1,console.error(l.value),A().$toast.error(V))}},getYears(){for(let n=new Date().getFullYear();n>=2e3;n--)this.years.push({name:n.toString(),id:n})}},components:{FunnelIcon:U}},X={class:"px-5 py-5"},Z=e("div",{class:"py-5"},[e("div",{class:"text-2xl font-semibold flex items-center uppercase"},[e("img",{src:z,alt:"report-icon",class:"w-8 h-8 mr-2"}),j(" Haematology Report ")])],-1),ee={class:"w-full flex justify-between py-5"},te={class:"flex items-center space-x-3"},re={class:"bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500"},oe={class:"w-36 ml-2 bg-white"},se={class:"border rounded"},ae={class:"rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"},ne=e("div",{class:"flex flex-col space-y-2"},[e("img",{src:K,alt:"app-logo",class:"w-24 h-24 object-cover"}),e("h3",{class:"text-xl font-semibold"}," HAEMATOLOGY MoH LABORATORY REPORT ")],-1),ce={class:"px-4 py-2.5 font-medium"},le={class:"font-normal"},ie={class:"overflow-x-auto rounded border-t"},de={class:"w-full overflow-x-auto"},pe=e("thead",{class:"border-b"},[e("tr",{class:"w-full bg-gray-50"},[e("th",{class:"px-4 py-2 border-r"},"Laboratory Service"),e("th",{class:"px-4 py-2 border-r"},"Jan"),e("th",{class:"px-4 py-2 border-r"},"Feb"),e("th",{class:"px-4 py-2"},"March"),e("th",{class:"px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100"},"Total Q1"),e("th",{class:"px-4 py-2 border-r"},"Apr"),e("th",{class:"px-4 py-2 border-r"},"May"),e("th",{class:"px-4 py-2"},"Jun"),e("th",{class:"px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100"},"Total Q2"),e("th",{class:"px-4 py-2 border-r"},"Jul"),e("th",{class:"px-4 py-2 border-r"},"Aug"),e("th",{class:"px-4 py-2"},"Sep"),e("th",{class:"px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100"},"Total Q3"),e("th",{class:"px-4 py-2 border-r"},"Oct"),e("th",{class:"px-4 py-2 border-r"},"Nov"),e("th",{class:"px-4 py-2"},"Dev"),e("th",{class:"px-4 py-2 bg-sky-50 text-sky-500 border-t border-l border-b border-sky-100"},"Total Q4 "),e("th",{class:"px-4 py-2 bg-green-600 text-white border border-green-400"},"Total")])],-1),me={class:"px-4 py-2 text-left border-r border-b"},ye={class:"px-4 py-2 text-center border-r border-b"},be={class:"px-4 py-2 text-center border-r border-b"},_e={class:"px-4 py-2 text-center border-b"},he={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100"},xe={class:"px-4 py-2 text-center border-r border-b"},ue={class:"px-4 py-2 text-center border-r border-b"},fe={class:"px-4 py-2 text-center border-b"},ge={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100"},ke={class:"px-4 py-2 text-center border-r border-b"},ve={class:"px-4 py-2 text-center border-r border-b"},we={class:"px-4 py-2 text-center border-b"},De={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100"},Ae={class:"px-4 py-2 text-center border-r border-b"},Qe={class:"px-4 py-2 text-center border-r border-b"},Re={class:"px-4 py-2 text-center border-b"},je={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border-t border-l border-b border-sky-100"},Te={class:"px-4 py-2 text-center bg-green-600 border text-white border-green-400"};function Se(n,r,l,x,s,a){const i=F,d=T("FunnelIcon"),p=E,m=Y,y=J,b=T("excel"),_=N;return Q(),R("div",X,[c(i,{pages:s.pages},null,8,["pages"]),Z,e("div",ee,[e("div",te,[e("div",re,[c(d,{class:"w-5 h-5 mr-2"}),j(" Filter By Year "),e("div",oe,[c(p,{items:s.years,modelValue:s.yearSelected,"onUpdate:modelValue":r[0]||(r[0]=t=>s.yearSelected=t)},null,8,["items","modelValue"])])]),c(m,{loading:s.viewing,click:()=>{a.getReportData()},color:"primary",icon:s.viewIcon,text:"Generate report"},null,8,["loading","click","icon"])]),e("div",null,[c(b,{class:"btn btn-default",header:[`HAEMATOLOGY MoH LABORATORY REPORT ${s.yearSelected.name}`,s.facility.details.name,s.facility.details.address,s.facility.details.phone],data:s.reportData,worksheet:"report-work-sheet",name:`moh_haematology_report_${s.yearSelected.name}.xls`},{default:I(()=>[c(y,{text:"Export Excel"})]),_:1},8,["header","data","name"])])]),e("div",se,[e("div",ae,[ne,c(_)]),e("div",null,[e("h3",ce,[j("Data for the year: "),e("span",le,o(s.yearSelected.name=="select year"?"-:-":s.yearSelected.name),1)])]),e("div",ie,[e("table",de,[pe,e("tbody",null,[(Q(!0),R(L,null,C(s.items,(t,h)=>(Q(),R("tr",{class:"px-2",key:h},[e("td",me,o(t.indicator),1),e("td",ye,o(t.jan),1),e("td",be,o(t.feb),1),e("td",_e,o(t.mar),1),e("td",he,o(t.totalQ1),1),e("td",xe,o(t.apr),1),e("td",ue,o(t.may),1),e("td",fe,o(t.june),1),e("td",ge,o(t.totalQ2),1),e("td",ke,o(t.jul),1),e("td",ve,o(t.aug),1),e("td",we,o(t.sept),1),e("td",De,o(t.totalQ3),1),e("td",Ae,o(t.oct),1),e("td",Qe,o(t.nov),1),e("td",Re,o(t.dec),1),e("td",je,o(t.totalQ4),1),e("td",Te,o(t.total),1)]))),128))])])])])])}const ot=B(W,[["render",Se]]);export{ot as default};