import{l as O,B as f,u as U,K as D,f as b,o as d,c as m,d as e,b as s,g,k as t,h as R,D as V,t as u,F as M,r as k,a as T,e as A}from"./entry.fa11db54.js";import{_ as B}from"./ExportButton.vue.4293efd3.js";import{_ as F}from"./Address.vue.1ccf81f3.js";import{e as G}from"./constants.d5a76da2.js";import{_ as P}from"./logo.41073d7d.js";import{h as a,e as j,f as q}from"./fetch.b54202be.js";import{u as K}from"./facility.89d75823.js";import{r as L}from"./FunnelIcon.1218afe7.js";import{r as Y}from"./ArrowPathIcon.4329a5df.js";import"./transition.b7892d15.js";import"./hidden.c0a01a27.js";import"./XMarkIcon.3a44566b.js";import"./PencilSquareIcon.17ae5386.js";import"./PrinterIcon.0cb858a1.js";const z={class:"w-full flex items-center justify-between mb-10"},H={class:"flex items-center space-x-5"},J={class:"bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500"},Q={class:"w-56 ml-2"},W={class:"w-48"},X={class:"rounded border",id:"print-container"},Z={class:"rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"},ee=e("div",{class:"flex flex-col space-y-2"},[e("img",{src:P,alt:"app-logo",class:"w-24 h-24 object-cover"}),e("h3",{class:"text-xl font-semibold"},"CULTURE & SENSITIVITY ORGANISMS COUNTS REPORT ")],-1),te={class:"px-4 mt-2"},oe={class:"font-semibold"},se={class:"w-full mt-3",ref:"table"},ae={class:"w-full border-b border-t bg-gray-50 rounded-t"},re={class:"w-full"},ne={class:"px-2 py-2 text-left border-r"},le={class:"px-2 py-2 text-left border-r"},ce={class:"px-2 py-2 text-left"},ke=O({__name:"organisms-counts",setup(ie){const o=f(""),w=f([{name:"Organism Name"},{name:"Period"},{name:"Total Count"}]),C=U("token"),y=f([]),h=K(),r=f(!1),S=D(()=>y.value.map((n,l)=>({ORGANISM:n.organism,"DATE PERIOD":a(o.value).format("MMMM/yyyy"),COUNT:n.count}))),E=()=>{o.value=""};async function N(){r.value=!0;let n=a(o.value).format("M"),l=a(o.value).format("yyyy");const x={route:`${j.aggregateReports}culture/organisms_based_counts?year=${l}&month=${n}`,method:"GET",token:`${C.value}`},{data:p,error:_,pending:v}=await q(x);r.value=v,p.value&&(y.value=p.value.data,r.value=!1,T().$toast.success("Report data generated successfully")),_.value&&(console.error(_.value),r.value=!1,T().$toast.error(G))}return(n,l)=>{const x=b("datepicker"),p=A,_=b("FormKit"),v=B,$=b("excel"),I=F;return d(),m("div",null,[e("div",z,[s(_,{type:"form","submit-label":"Update",onSubmit:N,actions:!1},{default:g(({value:c})=>[e("div",H,[e("div",J,[s(t(L),{class:"w-5 h-5 mr-2"}),R(" Filter By Date Range "),e("div",Q,[s(x,{onCleared:E,required:"",position:"left",placeholder:"select month & year",range:!1,"input-class-name":"datepicker",modelValue:t(o),"onUpdate:modelValue":l[0]||(l[0]=i=>V(o)?o.value=i:null),format:"M/yyyy"},null,8,["modelValue"])])]),e("div",W,[s(p,{type:"submit",color:"primary",text:"Generate Report",icon:t(Y),click:()=>{},loading:t(r)},null,8,["icon","loading"])])])]),_:1}),e("div",null,[s($,{class:"btn btn-default",header:[`CULTURE & SENSITIVITY ORGANISMS COUNTS REPORT ${t(a)(t(o)).format("M/yyyy")}`,t(h).details.name,t(h).details.address,t(h).details.phone],data:t(S),worksheet:"report-work-sheet",name:`culture_sensitivity_organisms_counts_report_${t(a)(t(o)).format("M_yyyy")}.xls`},{default:g(()=>[s(v,{text:"Export Excel"})]),_:1},8,["header","data","name"])])]),e("div",X,[e("div",Z,[ee,s(I)]),e("div",null,[e("h3",te,[R("Data for period: "),e("span",oe,u(t(o)==""?" - ":t(a)(t(o)).format("M/yyyy")),1)])]),e("table",se,[e("thead",ae,[e("tr",re,[(d(!0),m(M,null,k(t(w),(c,i)=>(d(),m("th",{class:"px-2 py-2 border-r text-left",key:i},u(c.name),1))),128))])]),e("tbody",null,[(d(!0),m(M,null,k(t(y),(c,i)=>(d(),m("tr",{key:i,class:"border-b"},[e("td",ne,u(c.organism),1),e("td",le,u(t(a)(t(o)).format("MMMM/yyyy")),1),e("td",ce,u(c.count),1)]))),128))])],512)])])}}});export{ke as default};