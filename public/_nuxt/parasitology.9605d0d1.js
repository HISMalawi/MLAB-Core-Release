import{_ as F}from"./Breadcrumb.vue.6444e325.js";import{_ as I}from"./Dropdown.d492d2e4.js";import{u as P,a as A,_ as B,f as T,o as R,c as Q,b as c,d as e,h as j,g as L,t as o,F as C,r as E,e as M}from"./entry.fa11db54.js";import{_ as Y}from"./ExportButton.vue.4293efd3.js";import{_ as J}from"./Address.vue.1ccf81f3.js";import{u as N}from"./vue.f36acd1f.623e2c0e.js";import{e as V}from"./constants.d5a76da2.js";import{e as S,f as O}from"./fetch.b54202be.js";import{u as $}from"./facility.89d75823.js";import{P as G}from"./package.47b8853b.js";import{r as H}from"./ArrowPathIcon.4329a5df.js";import{r as q}from"./ArrowUpTrayIcon.7912de42.js";import{r as U}from"./FunnelIcon.1218afe7.js";import{_ as z}from"./report.8b43d104.js";import{_ as K}from"./logo.41073d7d.js";import"./nuxt-link.288a2b47.js";import"./HomeIcon.5d2fad11.js";import"./listbox.7639b942.js";import"./hidden.c0a01a27.js";import"./use-text-value.840dde0c.js";import"./CheckIcon.fca7318a.js";import"./CheckCircleIcon.139ea1cd.js";import"./MagnifyingGlassIcon.568661b7.js";import"./transition.b7892d15.js";import"./XMarkIcon.3a44566b.js";import"./PencilSquareIcon.17ae5386.js";import"./PrinterIcon.0cb858a1.js";const W={setup(){N({title:`${G.name.toUpperCase()} - Parasitology Report`})},data(){return{viewIcon:H,exportIcon:q,date:"",pages:[{name:"Home",link:"/home"},{name:"Reports",link:"#"},{name:"MoH Diagnistic Reports",link:"#"}],indicators:new Array,items:new Array,data:new Array,yearSelected:{name:"select year"},years:new Array,cookie:P("token"),viewing:!1,facility:$(),json_fields:{fieldLabel:"indicator",anotherFieldLabel:{field:["indicator"],callback:n=>`formatted value ${n}`}},reportData:new Array}},created(){this.getYears(),this.getReportIndicators()},methods:{async getReportIndicators(){const n={route:`${S.reportIndicators}?department=Parasitology`,method:"GET",token:`${this.cookie}`},{data:r,error:l}=await O(n);r.value&&r.value.map(h=>{this.items.push({indicator:h,jan:"!",feb:"!",mar:"!",totalQ1:"!",apr:"!",may:"!",june:"!",totalQ2:"!",jul:"!",aug:"!",sept:"!",totalQ3:"!",oct:"!",nov:"!",dec:"!",totalQ4:"!",total:"!"})}),l.value&&console.error(l.value)},async getReportData(){if(this.yearSelected.name=="select year")A().$toast.warning("Please select a year");else{this.viewing=!0;const n={route:`${S.mohReport}parasitology?year=${this.yearSelected.name}`,method:"GET",token:`${this.cookie}`},{data:r,error:l,pending:h}=await O(n);if(this.viewing=h,r.value){let s=new Array;this.items.map(a=>{let i=r.value.january[a.indicator],d=r.value.february[a.indicator],p=r.value.march[a.indicator],m=r.value.april[a.indicator],y=r.value.may[a.indicator],b=r.value.june[a.indicator],_=r.value.july[a.indicator],t=r.value.august[a.indicator],x=r.value.september[a.indicator],v=r.value.october[a.indicator],w=r.value.november[a.indicator],D=r.value.december[a.indicator],u=i+d+p,f=m+y+b,g=_+t+x,k=v+w+D;s.push({indicator:a.indicator,jan:i,feb:d,mar:p,totalQ1:u,apr:m,may:y,june:b,totalQ2:f,jul:_,aug:t,sept:x,totalQ3:g,oct:v,nov:w,dec:D,totalQ4:k,total:u+f+g+k}),this.reportData.push({"Laboratory Service":a.indicator,January:i,February:d,March:p,"Total Q1":u,April:m,May:y,June:b,"Total Q2":f,July:_,August:t,September:x,"Total Q3":g,October:v,November:w,December:D,"Total Q4":k,Total:u+f+g+k})}),this.items=new Array,this.items.push(...s),this.viewing=!1,A().$toast.success("Report data generated successfully!")}l.value&&(this.viewing=!1,console.error(l.value),A().$toast.error(V))}},getYears(){for(let n=new Date().getFullYear();n>=2e3;n--)this.years.push({name:n.toString(),id:n})}},components:{FunnelIcon:U}},X={class:"px-5 py-5"},Z=e("div",{class:"py-5"},[e("h3",{class:"text-2xl font-semibold flex items-center uppercase"},[e("img",{src:z,class:"w-8 h-8 mr-2"}),j(" Parasitology Report ")])],-1),ee={class:"w-full flex justify-between py-5"},te={class:"flex items-center space-x-3"},re={class:"bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500"},oe={class:"w-36 ml-2 bg-white"},se={class:"border rounded"},ae={class:"rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"},ne=e("div",{class:"flex flex-col space-y-2"},[e("img",{src:K,alt:"app-logo",class:"w-24 h-24 object-cover"}),e("h3",{class:"text-xl font-semibold"}," PARASITOLOGY MoH LABORATORY REPORT ")],-1),ce={class:"px-4 py-2.5 font-medium"},le={class:"font-normal"},ie={class:"overflow-x-auto rounded border-t"},de={class:"overflow-x-auto"},pe=e("thead",{class:"border-b"},[e("tr",{class:"w-full bg-gray-50"},[e("th",{class:"px-4 py-2 border-r"},"Laboratory Service"),e("th",{class:"px-4 py-2 border-r"},"Jan"),e("th",{class:"px-4 py-2 border-r"},"Feb"),e("th",{class:"px-4 py-2"},"March"),e("th",{class:"px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100"},"Total Q1"),e("th",{class:"px-4 py-2 border-r"},"Apr"),e("th",{class:"px-4 py-2 border-r"},"May"),e("th",{class:"px-4 py-2"},"Jun"),e("th",{class:"px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100"},"Total Q2"),e("th",{class:"px-4 py-2 border-r"},"Jul"),e("th",{class:"px-4 py-2 border-r"},"Aug"),e("th",{class:"px-4 py-2"},"Sep"),e("th",{class:"px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100"},"Total Q3"),e("th",{class:"px-4 py-2 border-r"},"Oct"),e("th",{class:"px-4 py-2 border-r"},"Nov"),e("th",{class:"px-4 py-2"},"Dev"),e("th",{class:"px-4 py-2 bg-sky-50 text-sky-500 border-t border-l border-b border-sky-100"},"Total Q4 "),e("th",{class:"px-4 py-2 bg-green-600 text-white border border-green-400"},"Total")])],-1),me={class:"px-4 py-2 text-left border-r border-b"},ye={class:"px-4 py-2 text-center border-r border-b"},be={class:"px-4 py-2 text-center border-r border-b"},_e={class:"px-4 py-2 text-center border-b"},xe={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100"},he={class:"px-4 py-2 text-center border-r border-b"},ue={class:"px-4 py-2 text-center border-r border-b"},fe={class:"px-4 py-2 text-center border-b"},ge={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100"},ke={class:"px-4 py-2 text-center border-r border-b"},ve={class:"px-4 py-2 text-center border-r border-b"},we={class:"px-4 py-2 text-center border-b"},De={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100"},Ae={class:"px-4 py-2 text-center border-r border-b"},Re={class:"px-4 py-2 text-center border-r border-b"},Qe={class:"px-4 py-2 text-center border-b"},je={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border-t border-l border-b border-sky-100"},Te={class:"px-4 py-2 text-center bg-green-600 border text-white border-green-400"};function Se(n,r,l,h,s,a){const i=F,d=T("FunnelIcon"),p=I,m=M,y=Y,b=T("excel"),_=J;return R(),Q("div",X,[c(i,{pages:s.pages},null,8,["pages"]),Z,e("div",ee,[e("div",te,[e("div",re,[c(d,{class:"w-5 h-5 mr-2"}),j(" Filter By Year "),e("div",oe,[c(p,{items:s.years,modelValue:s.yearSelected,"onUpdate:modelValue":r[0]||(r[0]=t=>s.yearSelected=t)},null,8,["items","modelValue"])])]),c(m,{loading:s.viewing,click:()=>{a.getReportData()},color:"primary",icon:s.viewIcon,text:"Generate report"},null,8,["loading","click","icon"])]),e("div",null,[c(b,{class:"btn btn-default",header:[`PARASITOLOGY MoH LABORATORY REPORT ${s.yearSelected.name}`,s.facility.details.name,s.facility.details.address,s.facility.details.phone],data:s.reportData,worksheet:"report-work-sheet",name:`moh_parasitology_report_${s.yearSelected.name}.xls`},{default:L(()=>[c(y,{text:"Export Excel"})]),_:1},8,["header","data","name"])])]),e("div",se,[e("div",ae,[ne,c(_)]),e("div",null,[e("h3",ce,[j("Data for the year: "),e("span",le,o(s.yearSelected.name=="select year"?"-:-":s.yearSelected.name),1)])]),e("div",ie,[e("table",de,[pe,e("tbody",null,[(R(!0),Q(C,null,E(s.items,(t,x)=>(R(),Q("tr",{class:"px-2",key:x},[e("td",me,o(t.indicator),1),e("td",ye,o(t.jan),1),e("td",be,o(t.feb),1),e("td",_e,o(t.mar),1),e("td",xe,o(t.totalQ1),1),e("td",he,o(t.apr),1),e("td",ue,o(t.may),1),e("td",fe,o(t.june),1),e("td",ge,o(t.totalQ2),1),e("td",ke,o(t.jul),1),e("td",ve,o(t.aug),1),e("td",we,o(t.sept),1),e("td",De,o(t.totalQ3),1),e("td",Ae,o(t.oct),1),e("td",Re,o(t.nov),1),e("td",Qe,o(t.dec),1),e("td",je,o(t.totalQ4),1),e("td",Te,o(t.total),1)]))),128))])])])])])}const st=B(W,[["render",Se]]);export{st as default};