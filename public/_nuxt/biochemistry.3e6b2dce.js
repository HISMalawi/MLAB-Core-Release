import{_ as I}from"./Breadcrumb.vue.e3e89550.js";import{_ as F}from"./Dropdown.ab1751ca.js";import{u as C,a as E,b as R,_ as M,h as A,o as j,c as Q,d as n,e,j as T,i as O,t as s,F as Y,r as H,f as L}from"./entry.ede29211.js";import{_ as J}from"./ExportButton.vue.3a3a03d6.js";import{_ as N}from"./Address.vue.2966857e.js";import{e as V}from"./constants.ee9a0283.js";import{e as S,f as B}from"./fetch.7c05310f.js";import{u as $}from"./facility.14188e8f.js";import{P}from"./package.6544c22a.js";import{r as q}from"./ArrowPathIcon.d17b6b30.js";import{r as G}from"./ArrowUpTrayIcon.3d4e5ca9.js";import{r as U}from"./FunnelIcon.33259fc4.js";import{_ as z}from"./report.549ca5ed.js";import{_ as K}from"./logo.25dcbd90.js";import"./nuxt-link.cd4ac04e.js";import"./HomeIcon.e5ce52a1.js";import"./listbox.b2d98ace.js";import"./hidden.43ef53b5.js";import"./use-text-value.ab5a185c.js";import"./CheckIcon.6472b009.js";import"./CheckCircleIcon.7771a99b.js";import"./MagnifyingGlassIcon.ca94e239.js";import"./network.8dfa1f5e.js";import"./transition.a542e4ff.js";import"./XMarkIcon.e9883b5f.js";import"./PencilSquareIcon.8f17322d.js";import"./PrinterIcon.41d0b58e.js";const W={setup(){C({title:`${P.name.toUpperCase()} - Biochemistry Report`})},data(){return{viewIcon:q,exportIcon:G,date:"",pages:[{name:"Home",link:"/home"},{name:"Reports",link:"#"},{name:"MoH Diagnistic Reports",link:"#"}],indicators:new Array,items:new Array,data:new Array,yearSelected:{name:"select year"},years:new Array,cookie:E("token"),viewing:!1,facility:$(),json_fields:{fieldLabel:"indicator",anotherFieldLabel:{field:["indicator"],callback:c=>`formatted value ${c}`}},reportData:new Array}},created(){this.getYears(),this.getReportIndicators()},methods:{async getReportIndicators(){const c={route:`${S.reportIndicators}?department=Biochemistry`,method:"GET",token:`${this.cookie}`},{data:o,error:i,pending:k}=await B(c);o.value&&o.value.map(r=>{this.items.push({indicator:r,jan:"!",feb:"!",mar:"!",totalQ1:"!",apr:"!",may:"!",june:"!",totalQ2:"!",jul:"!",aug:"!",sept:"!",totalQ3:"!",oct:"!",nov:"!",dec:"!",totalQ4:"!",total:"!"})}),i.value&&console.error(i.value)},async getReportData(){if(this.yearSelected.name=="select year")R().$toast.warning("Please select a year");else{this.viewing=!0;const c={route:`${S.mohReport}biochemistry?year=${this.yearSelected.name}`,method:"GET",token:`${this.cookie}`},{data:o,error:i,pending:k}=await B(c);if(this.viewing=k,o.value){let r=new Array;this.items.map(a=>{let l=o.value.january[a.indicator],d=o.value.february[a.indicator],p=o.value.march[a.indicator],m=o.value.april[a.indicator],y=o.value.may[a.indicator],b=o.value.june[a.indicator],_=o.value.july[a.indicator],t=o.value.august[a.indicator],h=o.value.september[a.indicator],v=o.value.october[a.indicator],w=o.value.november[a.indicator],D=o.value.december[a.indicator],x=l+d+p,u=m+y+b,f=_+t+h,g=v+w+D;r.push({indicator:a.indicator,jan:l,feb:d,mar:p,totalQ1:x,apr:m,may:y,june:b,totalQ2:u,jul:_,aug:t,sept:h,totalQ3:f,oct:v,nov:w,dec:D,totalQ4:g,total:x+u+f+g}),this.reportData.push({"Laboratory Service":a.indicator,January:l,February:d,March:p,"Total Q1":x,April:m,May:y,June:b,"Total Q2":u,July:_,August:t,September:h,"Total Q3":f,October:v,November:w,December:D,"Total Q4":g,Total:x+u+f+g})}),this.items=new Array,this.items.push(...r),this.viewing=!1,R().$toast.success("Report data generated successfully!")}i.value&&(this.viewing=!1,console.error(i.value),R().$toast.error(V))}},getYears(){for(let c=new Date().getFullYear();c>=2e3;c--)this.years.push({name:c.toString(),id:c})}},components:{FunnelIcon:U}},X={class:"px-5 py-5"},Z=e("div",{class:"py-5"},[e("div",{class:"text-2xl font-semibold flex items-center uppercase"},[e("img",{src:z,alt:"report-icon",class:"w-8 h-8 mr-2"}),T(" Biochemistry Report ")])],-1),ee={class:"w-full flex justify-between py-5"},te={class:"flex items-center space-x-3"},re={class:"bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500"},oe={class:"w-36 ml-2 bg-white"},se={class:"border rounded"},ae={class:"rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"},ce=e("div",{class:"flex flex-col space-y-2"},[e("img",{src:K,alt:"app-logo",class:"w-24 h-24 object-cover"}),e("h3",{class:"text-xl font-semibold"}," BIOCHEMISTRY MoH LABORATORY REPORT ")],-1),ne={class:"px-4 py-2.5 font-medium"},ie={class:"font-normal"},le={class:"overflow-x-auto rounded border-t"},de={class:"overflow-x-auto"},pe=e("thead",{class:"border-b"},[e("tr",{class:"w-full bg-gray-50"},[e("th",{class:"px-4 py-2 border-r"},"Laboratory Service"),e("th",{class:"px-4 py-2 border-r"},"Jan"),e("th",{class:"px-4 py-2 border-r"},"Feb"),e("th",{class:"px-4 py-2"},"March"),e("th",{class:"px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100"},"Total Q1"),e("th",{class:"px-4 py-2 border-r"},"Apr"),e("th",{class:"px-4 py-2 border-r"},"May"),e("th",{class:"px-4 py-2"},"Jun"),e("th",{class:"px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100"},"Total Q2"),e("th",{class:"px-4 py-2 border-r"},"Jul"),e("th",{class:"px-4 py-2 border-r"},"Aug"),e("th",{class:"px-4 py-2"},"Sep"),e("th",{class:"px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100"},"Total Q3"),e("th",{class:"px-4 py-2 border-r"},"Oct"),e("th",{class:"px-4 py-2 border-r"},"Nov"),e("th",{class:"px-4 py-2"},"Dev"),e("th",{class:"px-4 py-2 bg-sky-50 text-sky-500 border-t border-l border-b border-sky-100"},"Total Q4 "),e("th",{class:"px-4 py-2 bg-green-600 text-white border border-green-400"},"Total")])],-1),me={class:"px-4 py-2 text-left border-r border-b"},ye={class:"px-4 py-2 text-center border-r border-b"},be={class:"px-4 py-2 text-center border-r border-b"},_e={class:"px-4 py-2 text-center border-b"},he={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100"},xe={class:"px-4 py-2 text-center border-r border-b"},ue={class:"px-4 py-2 text-center border-r border-b"},fe={class:"px-4 py-2 text-center border-b"},ge={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100"},ke={class:"px-4 py-2 text-center border-r border-b"},ve={class:"px-4 py-2 text-center border-r border-b"},we={class:"px-4 py-2 text-center border-b"},De={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100"},Re={class:"px-4 py-2 text-center border-r border-b"},je={class:"px-4 py-2 text-center border-r border-b"},Qe={class:"px-4 py-2 text-center border-b"},Te={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border-t border-l border-b border-sky-100"},Ae={class:"px-4 py-2 text-center bg-green-600 border text-white border-green-400"};function Se(c,o,i,k,r,a){const l=I,d=A("FunnelIcon"),p=F,m=L,y=J,b=A("excel"),_=N;return j(),Q("div",X,[n(l,{pages:r.pages},null,8,["pages"]),Z,e("div",ee,[e("div",te,[e("div",re,[n(d,{class:"w-5 h-5 mr-2"}),T(" Filter By Year "),e("div",oe,[n(p,{items:r.years,modelValue:r.yearSelected,"onUpdate:modelValue":o[0]||(o[0]=t=>r.yearSelected=t)},null,8,["items","modelValue"])])]),n(m,{loading:r.viewing,click:()=>{a.getReportData()},color:"primary",icon:r.viewIcon,text:"Generate report"},null,8,["loading","click","icon"])]),e("div",null,[n(b,{class:"btn btn-default",header:[`BIOCHEMISTRY MoH LABORATORY REPORT ${r.yearSelected.name}`,r.facility.details.name,r.facility.details.address,r.facility.details.phone],data:r.reportData,worksheet:"report-work-sheet",name:`moh_biochemistry_report_${r.yearSelected.name}.xls`},{default:O(()=>[n(y,{text:"Export Excel"})]),_:1},8,["header","data","name"])])]),e("div",se,[e("div",ae,[ce,n(_)]),e("div",null,[e("h3",ne,[T("Data for the year: "),e("span",ie,s(r.yearSelected.name=="select year"?"-:-":r.yearSelected.name),1)])]),e("div",le,[e("table",de,[pe,e("tbody",null,[(j(!0),Q(Y,null,H(r.items,(t,h)=>(j(),Q("tr",{class:"px-2",key:h},[e("td",me,s(t.indicator),1),e("td",ye,s(t.jan),1),e("td",be,s(t.feb),1),e("td",_e,s(t.mar),1),e("td",he,s(t.totalQ1),1),e("td",xe,s(t.apr),1),e("td",ue,s(t.may),1),e("td",fe,s(t.june),1),e("td",ge,s(t.totalQ2),1),e("td",ke,s(t.jul),1),e("td",ve,s(t.aug),1),e("td",we,s(t.sept),1),e("td",De,s(t.totalQ3),1),e("td",Re,s(t.oct),1),e("td",je,s(t.nov),1),e("td",Qe,s(t.dec),1),e("td",Te,s(t.totalQ4),1),e("td",Ae,s(t.total),1)]))),128))])])])])])}const st=M(W,[["render",Se]]);export{st as default};