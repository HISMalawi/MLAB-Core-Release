import{d as O,r as f,a as U,c as V,m as b,b as d,e as m,g as e,f as s,n as g,h as t,p as R,y as A,t as u,F as M,j as k,u as T,_ as D}from"./Cg5p-McN.js";import{_ as F}from"./UJhE-1LZ.js";import{_ as B}from"./DW2f6dFN.js";import{e as G}from"./RKiNshLb.js";import{_ as j}from"./D_m5sI-1.js";import{h as a,e as P,f as q}from"./DR38mcEF.js";import{u as L}from"./BMAVrnld.js";import{r as K}from"./CIsUHZVp.js";import{r as Y}from"./ErqKQ4Py.js";import"./3LKeHVyH.js";import"./D1U45QuX.js";import"./84ogm7K5.js";import"./D-clyhuy.js";import"./aBMXVFc4.js";import"./Cjc4v2I0.js";import"./BVCtdeh2.js";const z={class:"w-full flex items-center justify-between mb-10"},H={class:"flex items-center space-x-5"},J={class:"bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500"},Q={class:"w-56 ml-2"},W={class:"w-48"},X={class:"rounded border",id:"print-container"},Z={class:"rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"},ee=e("div",{class:"flex flex-col space-y-2"},[e("img",{src:j,alt:"app-logo",class:"w-24 h-24 object-cover"}),e("h3",{class:"text-xl font-semibold"},"CULTURE & SENSITIVITY ORGANISMS COUNTS REPORT ")],-1),te={class:"px-4 mt-2"},oe={class:"font-semibold"},se={class:"w-full mt-3",ref:"table"},ae={class:"w-full border-b border-t bg-gray-50 rounded-t"},re={class:"w-full"},ne={class:"px-2 py-2 text-left border-r"},le={class:"px-2 py-2 text-left border-r"},ce={class:"px-2 py-2 text-left"},we=O({__name:"organisms-counts",setup(ie){const o=f(""),w=f([{name:"Organism Name"},{name:"Period"},{name:"Total Count"}]),C=U("token"),y=f([]),h=L(),r=f(!1),S=V(()=>y.value.map((n,l)=>({ORGANISM:n.organism,"DATE PERIOD":a(o.value).format("MMMM/yyyy"),COUNT:n.count}))),E=()=>{o.value=""};async function N(){r.value=!0;let n=a(o.value).format("M"),l=a(o.value).format("yyyy");const x={route:`${P.aggregateReports}culture/organisms_based_counts?year=${l}&month=${n}`,method:"GET",token:`${C.value}`},{data:p,error:_,pending:v}=await q(x);r.value=v,p.value&&(y.value=p.value.data,r.value=!1,T().$toast.success("Report data generated successfully")),_.value&&(console.error(_.value),r.value=!1,T().$toast.error(G))}return(n,l)=>{const x=b("datepicker"),p=D,_=b("FormKit"),v=F,$=b("excel"),I=B;return d(),m("div",null,[e("div",z,[s(_,{type:"form","submit-label":"Update",onSubmit:N,actions:!1},{default:g(({value:c})=>[e("div",H,[e("div",J,[s(t(K),{class:"w-5 h-5 mr-2"}),R(" Filter By Date Range "),e("div",Q,[s(x,{onCleared:E,required:"",position:"left",placeholder:"select month & year",range:!1,"input-class-name":"datepicker",modelValue:t(o),"onUpdate:modelValue":l[0]||(l[0]=i=>A(o)?o.value=i:null),format:"M/yyyy"},null,8,["modelValue"])])]),e("div",W,[s(p,{type:"submit",color:"primary",text:"Generate Report",icon:t(Y),click:()=>{},loading:t(r)},null,8,["icon","loading"])])])]),_:1}),e("div",null,[s($,{class:"btn btn-default",header:[`CULTURE & SENSITIVITY ORGANISMS COUNTS REPORT ${t(a)(t(o)).format("M/yyyy")}`,t(h).details.name,t(h).details.address,t(h).details.phone],data:t(S),worksheet:"report-work-sheet",name:`culture_sensitivity_organisms_counts_report_${t(a)(t(o)).format("M_yyyy")}.xls`},{default:g(()=>[s(v,{text:"Export Excel"})]),_:1},8,["header","data","name"])])]),e("div",X,[e("div",Z,[ee,s(I)]),e("div",null,[e("h3",te,[R("Data for period: "),e("span",oe,u(t(o)==""?" - ":t(a)(t(o)).format("M/yyyy")),1)])]),e("table",se,[e("thead",ae,[e("tr",re,[(d(!0),m(M,null,k(t(w),(c,i)=>(d(),m("th",{class:"px-2 py-2 border-r text-left",key:i},u(c.name),1))),128))])]),e("tbody",null,[(d(!0),m(M,null,k(t(y),(c,i)=>(d(),m("tr",{key:i,class:"border-b"},[e("td",ne,u(c.organism),1),e("td",le,u(t(a)(t(o)).format("MMMM/yyyy")),1),e("td",ce,u(c.count),1)]))),128))])],512)])])}}});export{we as default};