import{l as C,B as p,u as T,K as $,f as v,o as x,c as y,d as e,L as M,b as n,k as t,h as w,D as S,g as U,t as r,F as V,r as I,a as b,e as A}from"./entry.a061692d.js";import{_ as B}from"./ExportButton.vue.6095c931.js";import{_ as F}from"./Address.vue.9b815dbd.js";import{e as L}from"./constants.5ff314f3.js";import{_ as O}from"./logo.6e96e07f.js";import{h as u,e as Y,f as D}from"./fetch.1d637d4b.js";import{u as P}from"./facility.0787e843.js";import{r as j}from"./FunnelIcon.6080d9fc.js";import{r as q}from"./ArrowPathIcon.61964360.js";import"./transition.34c9747b.js";import"./hidden.2e8968f2.js";import"./XMarkIcon.2a91e852.js";import"./PencilSquareIcon.a9348a41.js";import"./PrinterIcon.63d7d5dd.js";const z={class:"w-full flex items-center justify-between mb-10"},K={class:"flex flex-row items-center bg-gray-100 rounded-l pl-2 font-normal text-zinc-500"},H={class:"w-44 ml-2"},J={class:"w-48"},Q={class:"rounded border",id:"print-container"},W={class:"rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"},X=e("div",{class:"flex flex-col space-y-2"},[e("img",{src:O,alt:"app-logo",class:"w-24 h-24 object-cover"}),e("h3",{class:"text-xl font-semibold"},"CULTURE & SENSITIVITY GENERAL COUNTS REPORT ")],-1),Z={class:"px-4 py-2.5 font-medium"},ee={class:"font-normal"},te={class:"w-full mt-2",ref:"table"},oe={class:"w-full border-b border-t bg-gray-100 rounded-t"},se={class:"w-full"},re={class:"border-b"},ae={class:"px-2 py-2 text-center border-r"},ne={class:"px-2 py-2 text-center border-r"},le={class:"px-2 py-2 text-center border-r"},ie={class:"px-2 py-2 text-center border-r"},ce={class:"px-2 py-2 text-center"},Ge=C({__name:"general-counts",setup(de){const o=p(""),N=T("token"),_=P(),l=p(!1),s=p({Growth:0,"No growth":0,"Mixed growth; no predominant organism":0,"Growth of normal flora; no pathogens isolated":0,"Growth of contaminants":0}),g=p([{name:"Growth"},{name:"No Growth"},{name:"Mixed Growth:  No Predominant Organism"},{name:"Growth Normal Flora: No Pathogens Isolated"},{name:"Growth: Contaminations"}]),E=$(()=>g.value.map(i=>({NAME:i.name,COUNT:s.value[i.name]||0})));async function G(){l.value=!0;let i=u(o.value).format("M"),a=u(o.value).format("yyyy");const f={route:`${Y.aggregateReports}culture/general_counts?year=${a}&month=${i}`,method:"GET",token:`${N.value}`},{data:c,error:d,pending:h}=await D(f);l.value=h,c.value&&(s.value=c.value.data,l.value=!1,b().$toast.success("Report data generated successfully")),d.value&&(console.error(d.value),l.value=!1,b().$toast.error(L))}return(i,a)=>{const f=v("datepicker"),c=A,d=B,h=v("excel"),R=F;return x(),y("div",null,[e("div",z,[e("form",{onSubmit:a[1]||(a[1]=M(m=>G(),["prevent"])),class:"flex items-center space-x-5"},[e("div",K,[n(t(j),{class:"w-4 h-4 mr-2"}),w(" Filter by date "),e("div",H,[n(f,{placeholder:"month & year",required:"","input-class-name":"custom-input",modelValue:t(o),"onUpdate:modelValue":a[0]||(a[0]=m=>S(o)?o.value=m:null),range:!1,format:"M/yyyy",position:"left"},null,8,["modelValue"])])]),e("div",J,[n(c,{type:"submit",color:"primary",text:"Generate Report",icon:t(q),click:()=>{},loading:t(l)},null,8,["icon","loading"])])],32),e("div",null,[n(h,{class:"btn btn-default",header:[`CULTURE & SENSITIVITY GENERAL COUNTS REPORT ${t(o)}`,t(_).details.name,t(_).details.address,t(_).details.phone,"",""],data:t(E),worksheet:"report-work-sheet",name:`culture_sensitivity_general_counts_report_${t(u)(t(o)).format("M_YYYY")}.xls`},{default:U(()=>[n(d,{text:"Export Excel",icon:"excel.png"})]),_:1},8,["header","data","name"])])]),e("div",Q,[e("div",W,[X,n(R)]),e("div",null,[e("h3",Z,[w("Data for period: "),e("span",ee,r(t(o)==""?"-":t(u)(t(o)).format("M/yyyy")),1)])]),e("table",te,[e("thead",oe,[e("tr",se,[(x(!0),y(V,null,I(t(g),(m,k)=>(x(),y("th",{class:"px-2 py-2 border-r",key:k},r(m.name),1))),128))])]),e("tbody",null,[e("tr",re,[e("td",ae,r(t(s).Growth),1),e("td",ne,r(t(s)["No growth"]),1),e("td",le,r(t(s)["Mixed growth; no predominant organism"]),1),e("td",ie,r(t(s)["Growth of normal flora; no pathogens isolated"]),1),e("td",ce,r(t(s)["Growth of contaminants"]),1)])])],512)])])}}});export{Ge as default};