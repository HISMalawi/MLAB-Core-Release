import{_ as H}from"./Breadcrumb.vue.49302d56.js";import{_ as P}from"./Dropdown.257a05bd.js";import{l as q,s as l,u as I,f as U,o as S,c as O,b as p,k as a,d as e,h as B,y as z,g as K,t as r,F as W,r as X,a as E,e as Z}from"./entry.c551b705.js";import{_ as ee}from"./ExportButton.vue.b137a760.js";import{_ as te}from"./Address.vue.bfe7b3f8.js";import{u as oe}from"./vue.f36acd1f.e050a771.js";import{e as re}from"./constants.c32bb852.js";import{_ as se}from"./report.e7207f25.js";import{_ as ae}from"./logo.a42aceaa.js";import{e as L,f as Y}from"./fetch.7df80c03.js";import{u as ne}from"./facility.01164380.js";import{P as ce}from"./package.6096f694.js";import{r as le}from"./FunnelIcon.c896a477.js";import{r as de}from"./ArrowPathIcon.4d5c879a.js";import"./nuxt-link.11cd23df.js";import"./HomeIcon.81b6cbd7.js";import"./listbox.3dedabc4.js";import"./hidden.1f7f321e.js";import"./use-text-value.ab7c4736.js";import"./CheckIcon.a577c05b.js";import"./CheckCircleIcon.4f65d1ec.js";import"./MagnifyingGlassIcon.b78898e0.js";import"./transition.fe0cdd04.js";import"./XMarkIcon.455acd8f.js";import"./PencilSquareIcon.c201b425.js";import"./PrinterIcon.de9e1628.js";const pe={class:"px-5 py-5"},ie=e("div",{class:"py-5"},[e("div",{class:"text-2xl font-semibold flex items-center uppercase"},[e("img",{src:se,class:"w-8 h-8 mr-2"}),B(" Serology Report ")])],-1),me={class:"w-full flex justify-between py-5"},be={class:"flex items-center space-x-3"},ue={class:"bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500"},ye={class:"w-36 ml-2 bg-white"},_e={class:"border rounded"},xe={class:"rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"},he=e("div",{class:"flex flex-col space-y-2"},[e("img",{src:ae,alt:"app-logo",class:"w-24 h-24 object-cover"}),e("h3",{class:"text-xl font-semibold"}," SEROLOGY MoH LABORATORY REPORT ")],-1),fe={class:"px-4 py-2.5 font-medium"},ge={class:"font-normal"},ve={class:"overflow-x-auto rounded border-t"},ke={class:"overflow-x-auto"},we=e("thead",{class:"border-b"},[e("tr",{class:"w-full bg-gray-50"},[e("th",{class:"px-4 py-2 border-r"},"Laboratory Service"),e("th",{class:"px-4 py-2 border-r"},"Jan"),e("th",{class:"px-4 py-2 border-r"},"Feb"),e("th",{class:"px-4 py-2"},"March"),e("th",{class:"px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100"},"Total Q1"),e("th",{class:"px-4 py-2 border-r"},"Apr"),e("th",{class:"px-4 py-2 border-r"},"May"),e("th",{class:"px-4 py-2"},"Jun"),e("th",{class:"px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100"},"Total Q2"),e("th",{class:"px-4 py-2 border-r"},"Jul"),e("th",{class:"px-4 py-2 border-r"},"Aug"),e("th",{class:"px-4 py-2"},"Sep"),e("th",{class:"px-4 py-2 bg-sky-50 text-sky-500 border border-sky-100"},"Total Q3"),e("th",{class:"px-4 py-2 border-r"},"Oct"),e("th",{class:"px-4 py-2 border-r"},"Nov"),e("th",{class:"px-4 py-2"},"Dev"),e("th",{class:"px-4 py-2 bg-sky-50 text-sky-500 border-t border-l border-b border-sky-100"},"Total Q4 "),e("th",{class:"px-4 py-2 bg-green-600 text-white border border-green-400"},"Total")])],-1),De={class:"px-4 py-2 text-left border-r border-b"},Re={class:"px-4 py-2 text-center border-r border-b"},Qe={class:"px-4 py-2 text-center border-r border-b"},je={class:"px-4 py-2 text-center border-b"},Te={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100"},$e={class:"px-4 py-2 text-center border-r border-b"},Ae={class:"px-4 py-2 text-center border-r border-b"},Se={class:"px-4 py-2 text-center border-b"},Oe={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100"},Ee={class:"px-4 py-2 text-center border-r border-b"},Be={class:"px-4 py-2 text-center border-r border-b"},Ce={class:"px-4 py-2 text-center border-b"},Me={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100"},Fe={class:"px-4 py-2 text-center border-r border-b"},Le={class:"px-4 py-2 text-center border-r border-b"},Ye={class:"px-4 py-2 text-center border-b"},Je={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border-t border-l border-b border-sky-100"},Ne={class:"px-4 py-2 text-center bg-green-600 border text-white border-green-400"},yt=q({__name:"serology",setup(Ve){oe({title:`${ce.name.toUpperCase()} - Serology Report`}),l("");const J=l([{name:"Home",link:"/home"},{name:"Reports",link:"#"},{name:"MoH Diagnistic Reports",link:"#"}]);l([]);const m=l([]);l([]);const n=l({name:"select year"}),C=l([]),M=I("token"),b=l(),k=ne(),F=l([]);async function N(){const c={route:`${L.reportIndicators}?department=Serology`,method:"GET",token:`${M.value}`},{data:o,error:d,pending:x}=await Y(c);o.value&&o.value.map(i=>{m.value.push({indicator:i,jan:"!",feb:"!",mar:"!",totalQ1:"!",apr:"!",may:"!",june:"!",totalQ2:"!",jul:"!",aug:"!",sept:"!",totalQ3:"!",oct:"!",nov:"!",dec:"!",totalQ4:"!",total:"!"})}),d.value&&console.error(d.value)}async function V(){if(n.value.name=="select year")E().$toast.warning("Please select a year");else{b.value=!0;const c={route:`${L.mohReport}serology?year=${n.value.name}`,method:"GET",token:`${M.value}`},{data:o,error:d,pending:x}=await Y(c);if(b.value=x,o.value){let i=new Array;m.value.map(s=>{let u=o.value.january[s.indicator],y=o.value.february[s.indicator],t=o.value.march[s.indicator],_=o.value.april[s.indicator],w=o.value.may[s.indicator],D=o.value.june[s.indicator],R=o.value.july[s.indicator],Q=o.value.august[s.indicator],j=o.value.september[s.indicator],T=o.value.october[s.indicator],$=o.value.november[s.indicator],A=o.value.december[s.indicator],h=u+y+t,f=_+w+D,g=R+Q+j,v=T+$+A;i.push({indicator:s.indicator,jan:u,feb:y,mar:t,totalQ1:h,apr:_,may:w,june:D,totalQ2:f,jul:R,aug:Q,sept:j,totalQ3:g,oct:T,nov:$,dec:A,totalQ4:v,total:h+f+g+v}),F.value.push({"Laboratory Service":s.indicator,January:u,February:y,March:t,"Total Q1":h,April:_,May:w,June:D,"Total Q2":f,July:R,August:Q,September:j,"Total Q3":g,October:T,November:$,December:A,"Total Q4":v,Total:h+f+g+v})}),m.value=new Array,m.value.push(...i),b.value=!1,E().$toast.success("Report data generated successfully!")}d.value&&(b.value=!1,console.error(d.value),E().$toast.success(re))}}function G(){for(let c=new Date().getFullYear();c>=2e3;c--)C.value.push({name:c.toString(),id:c})}return N(),G(),(c,o)=>{const d=H,x=P,i=Z,s=ee,u=U("excel"),y=te;return S(),O("div",pe,[p(d,{pages:a(J)},null,8,["pages"]),ie,e("div",me,[e("div",be,[e("div",ue,[p(a(le),{class:"w-5 h-5 mr-2"}),B(" Filter By Year "),e("div",ye,[p(x,{items:a(C),modelValue:a(n),"onUpdate:modelValue":o[0]||(o[0]=t=>z(n)?n.value=t:null)},null,8,["items","modelValue"])])]),p(i,{class:"mt-1",loading:a(b),click:()=>{V()},color:"primary",icon:a(de),text:"Generate report"},null,8,["loading","click","icon"])]),e("div",null,[p(u,{class:"btn btn-default",header:[`SEROLOGY MoH LABORATORY REPORT ${a(n).name}`,a(k).details.name,a(k).details.address,a(k).details.phone],data:a(F),worksheet:"report-work-sheet",name:`moh_serology_report_${a(n).name}.xls`},{default:K(()=>[p(s,{text:"Export Excel"})]),_:1},8,["header","data","name"])])]),e("div",_e,[e("div",xe,[he,p(y)]),e("div",null,[e("h3",fe,[B("Data for the year: "),e("span",ge,r(a(n).name=="select year"?"-:-":a(n).name),1)])]),e("div",ve,[e("table",ke,[we,e("tbody",null,[(S(!0),O(W,null,X(a(m),(t,_)=>(S(),O("tr",{class:"px-2",key:_},[e("td",De,r(t.indicator),1),e("td",Re,r(t.jan),1),e("td",Qe,r(t.feb),1),e("td",je,r(t.mar),1),e("td",Te,r(t.totalQ1),1),e("td",$e,r(t.apr),1),e("td",Ae,r(t.may),1),e("td",Se,r(t.june),1),e("td",Oe,r(t.totalQ2),1),e("td",Ee,r(t.jul),1),e("td",Be,r(t.aug),1),e("td",Ce,r(t.sept),1),e("td",Me,r(t.totalQ3),1),e("td",Fe,r(t.oct),1),e("td",Le,r(t.nov),1),e("td",Ye,r(t.dec),1),e("td",Je,r(t.totalQ4),1),e("td",Ne,r(t.total),1)]))),128))])])])])])}}});export{yt as default};