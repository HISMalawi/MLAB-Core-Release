import{m as $,s as m,a as A,H as D,g as v,o as u,c as _,e,d as r,h as g,l as t,i as R,y as U,t as n,F as w,r as N,b as M,f as V}from"./entry.2af843ec.js";import{_ as F}from"./ExportButton.vue.6c40f22a.js";import{_ as B}from"./Address.vue.cda0ec68.js";import{e as G}from"./constants.88d4e739.js";import{_ as W}from"./logo.216ca9ca.js";import{h as l,e as P,f as j}from"./fetch.57d6f1d9.js";import{u as q}from"./facility.fa715021.js";import{r as L}from"./FunnelIcon.82715df7.js";import{r as K}from"./ArrowPathIcon.36b745ff.js";import"./network.94e54b94.js";import"./transition.e72e7c0f.js";import"./hidden.1d6e3066.js";import"./XMarkIcon.c6b50fd5.js";import"./PencilSquareIcon.907e9dab.js";import"./PrinterIcon.9622d56e.js";const Y={class:"w-full flex items-center justify-between mb-10"},z={class:"flex items-center space-x-5"},H={class:"bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500"},J={class:"w-56 ml-2"},Q={class:"w-48"},X={class:"rounded border",id:"print-container"},Z={class:"rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"},ee=e("div",{class:"flex flex-col space-y-2"},[e("img",{src:W,alt:"app-logo",class:"w-24 h-24 object-cover"}),e("h3",{class:"text-xl font-semibold"},"CULTURE & SENSITIVITY ORGANISMS IN WARDS COUNTS REPORT ")],-1),te={class:"px-4 mt-2 font-medium"},oe={class:"font-normal"},se={class:"w-full mt-3",ref:"table"},ae={class:"w-full border-b border-t border-l bg-gray-100 rounded-t"},re={class:"w-full"},ne={class:"px-2 py-2 text-center border-r"},le={class:"px-2 py-2 text-center border-r"},ce={class:"px-2 py-2 text-center border-r"},de={class:"px-2 py-2 text-center border-r"},ie={class:"px-2 py-2 text-center"},Te=$({__name:"organisms-wards-counts",setup(me){const o=m("");m("");const S=m([{name:"Ward Name"},{name:"Ward Type"},{name:"Period"},{name:"Organism Name"},{name:"Total Count"}]),T=A("token"),y=m([]),h=q(),c=m(!1),k=D(()=>y.value.map((s,d)=>({WARD:s.ward,ENCOUNTER:s.encounter,"DATE PERIOD":l(o.value).format("MMMM-yyyy"),ORGANISMS:s.organism,COUNT:s.count}))),C=()=>{o.value=""};async function E(){c.value=!0;let s=l(o.value).format("M"),d=l(o.value).format("yyyy");const x={route:`${P.aggregateReports}culture/organisms_wards_counts?year=${d}&month=${s}`,method:"GET",token:`${T.value}`},{data:p,error:f,pending:b}=await j(x);c.value=b,p.value&&(y.value=p.value.data,c.value=!1,M().$toast.success("Report data generated successfully")),f.value&&(console.error(f.value),c.value=!1,M().$toast.error(G))}return(s,d)=>{const x=v("datepicker"),p=V,f=v("FormKit"),b=F,I=v("excel"),O=B;return u(),_("div",null,[e("div",Y,[r(f,{type:"form","submit-label":"Update",onSubmit:E,actions:!1},{default:g(({value:a})=>[e("div",z,[e("div",H,[r(t(L),{class:"w-5 h-5 mr-2"}),R(" Filter By Date Range "),e("div",J,[r(x,{onCleared:C,required:"",position:"left",placeholder:"select month & year",range:!1,"input-class-name":"datepicker",modelValue:t(o),"onUpdate:modelValue":d[0]||(d[0]=i=>U(o)?o.value=i:null),format:"M/yyyy"},null,8,["modelValue"])])]),e("div",Q,[r(p,{type:"submit",color:"primary",text:"Generate Report",icon:t(K),click:()=>{},loading:t(c)},null,8,["icon","loading"])])])]),_:1}),e("div",null,[r(I,{class:"btn btn-default",header:[`CULTURE & SENSITIVITY ORGANISMS IN WARDS COUNTS REPORT ${t(l)(t(o)).format("M/yyyy")}`,t(h).details.name,t(h).details.address,t(h).details.phone],data:t(k),worksheet:"report-work-sheet",name:`culture_sensitivity_organisms_in_wards_counts_report_${t(l)(t(o)).format("M_yyyy")}.xls`},{default:g(()=>[r(b,{text:"Export Excel"})]),_:1},8,["header","data","name"])])]),e("div",X,[e("div",Z,[ee,r(O)]),e("div",null,[e("h3",te,[R("Data for period: "),e("span",oe,n(t(o)==""?"":t(l)(t(o)).format("M/yyyy")),1)])]),e("div",null,[e("table",se,[e("thead",ae,[e("tr",re,[(u(!0),_(w,null,N(t(S),(a,i)=>(u(),_("th",{class:"px-2 py-2 border-r",key:i},n(a.name),1))),128))])]),e("tbody",null,[(u(!0),_(w,null,N(t(y),(a,i)=>(u(),_("tr",{key:i,class:"border-b border-l border-r"},[e("td",ne,n(a.ward),1),e("td",le,n(a.encounter),1),e("td",ce,n(t(l)(t(o)).format("MMMM-yyyy")),1),e("td",de,n(a.organism),1),e("td",ie,n(a.count),1)]))),128))])],512)])])])}}});export{Te as default};