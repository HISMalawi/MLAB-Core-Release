import{_ as q}from"./Breadcrumb.vue.7469196c.js";import{m as F,u as H,C as g,a as U,L as $,g as D,o as s,c as o,d as a,l as t,e,t as u,M as G,i as C,E as z,h as I,F as v,r as b,k as M,w as J,v as K,b as Y,f as Q}from"./entry.3ba6d4d3.js";import{_ as W}from"./index.926fd39d.js";import{_ as X}from"./ExportButton.vue.d4add687.js";import{_ as Z}from"./Address.vue.50e8f7e4.js";import{_ as ee}from"./Loader.6f09c490.js";import{e as te}from"./constants.1010fcbd.js";import{_ as se}from"./report.901e14c7.js";import{_ as oe}from"./logo.dd361e1d.js";import{_ as re}from"./page.5a4beaf3.js";import{h as y,e as ae,f as ne}from"./fetch.17eaab73.js";import{u as le}from"./facility.8721fb0c.js";import{P as ce}from"./package.babe1e72.js";import{r as ie}from"./FunnelIcon.66d24cfa.js";import{r as de}from"./ArrowPathIcon.36a7e1d6.js";import"./nuxt-link.24ac1730.js";import"./HomeIcon.e4f6e8f1.js";import"./jspdf.es.min.a1626d9b.js";import"./XMarkIcon.7262efd1.js";import"./PrinterIcon.93c5df84.js";import"./transition.7e81bdc8.js";import"./hidden.c42221ac.js";import"./PencilSquareIcon.ded5f0ed.js";const pe={class:"px-5 py-5"},me=e("img",{src:se,alt:"report-icon",class:"w-8 h-8 mr-2"},null,-1),ue={class:"flex justify-between items-center"},_e={class:"bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500"},fe={class:"w-72 ml-2"},he={class:"w-48"},xe={class:"flex items-center space-x-3"},ve={key:0,class:"border rounded mt-10",id:"print-container"},ge={class:"flex items-center justify-between px-5 py-5 border-b"},be=e("div",{class:"flex flex-col space-y-2"},[e("img",{src:oe,alt:"app-logo",class:"w-24 h-24 object-cover"}),e("h3",{class:"text-xl font-semibold"}," TB TESTS REPORT ")],-1),ye={class:"m-3"},we={class:"text-lg font-semibold mb-2"},ke={class:"text-normal font-normal"},Re={class:"w-full rounded overflow-x-auto border-t"},$e={class:"w-full border-b"},Ye={class:"bg-gray-50"},Ce=e("th",{class:"px-2 py-2 border-r"},"Result",-1),De={class:"px-2 py-2 border-r capitalize"},Me={class:"w-full items-center flex flex-col space-y-2 my-10"},Te=e("p",null,[C("Generating report, please wait"),e("span",{class:"animate-pulse"},"...")],-1),Be={key:1,class:"w-full flex flex-col items-center justify-center space-y-2 py-10"},Ee=e("img",{src:re,alt:"page-icon",class:"object-cover w-20 h-20"},null,-1),Ae=e("p",null,"Data not found, please generate report",-1),Oe=[Ee,Ae],Pe="TB Report",nt=F({__name:"tb-tests",setup(Se){H({title:`${ce.name.toUpperCase()} - TB Tests Reports`});const T=g([{name:"Home",link:"/home"},{name:"Reports",link:"#"},{name:"Aggregate Reports",link:"#"}]),n=g([]),d=g(!1),l=g({months:new Array,data:new Array}),w=le(),B=U("token"),E=()=>{n.value=new Array("","")},A=$(()=>l.value.data.length>0?l.value.data[0]["tb tests"].map(_=>{const r={RESULT:_.result,..._.month},c={};for(const i in r)if(r.hasOwnProperty(i)){const f=i.toUpperCase();c[f]=r[i]||0}return c}):[]),p=$(()=>n.value[0]?y(n.value[0]).format("YYYY-MM-DD"):""),m=$(()=>n.value[1]?y(n.value[1]).format("YYYY-MM-DD"):"");async function O(){d.value=!0;let _=`from=${p.value}&to=${m.value}`;const r={route:`${ae.aggregateReports}tb_tests?${_}`,method:"GET",token:`${B.value}`},{data:c,error:i,pending:f}=await ne(r);d.value=f,c.value&&(d.value=!1,l.value=c.value,c.value.data.length>0?Y().$toast.success("Report data generated successfully"):Y().$toast.warning(`No data found in period ${p} - ${m}`)),i.value&&(d.value=!1,console.error(i.value),Y().$toast.success(te))}return(_,r)=>{const c=q,i=D("datepicker"),f=Q,P=W,S=X,j=D("excel"),V=Z,L=ee;return s(),o("div",pe,[a(c,{pages:t(T)},null,8,["pages"]),e("div",{class:"flex items-center py-5"},[me,e("h3",{class:"text-2xl font-semibold uppercase"},u(Pe))]),e("div",ue,[e("form",{onSubmit:r[1]||(r[1]=G(h=>O(),["prevent"])),class:"w-full flex items-center space-x-3"},[e("div",_e,[a(t(ie),{class:"w-5 h-5 mr-2"}),C(" Filter By Date Range "),e("div",fe,[a(i,{onCleared:E,required:"",position:"left",placeholder:"select start & end date",range:!0,"input-class-name":"datepicker",modelValue:t(n),"onUpdate:modelValue":r[0]||(r[0]=h=>z(n)?n.value=h:null)},null,8,["modelValue"])])]),e("div",he,[a(f,{type:"submit",color:"primary",text:"Generate Report",icon:t(de),click:()=>{},loading:t(d)},null,8,["icon","loading"])])],32),e("div",xe,[a(P,{printSmallLabel:!1}),a(j,{class:"btn btn-default",header:[`BIOCHEMISTRY MoH LABORATORY REPORT ${t(p)} - ${t(m)}`,t(w).details.name,t(w).details.address,t(w).details.phone],data:t(A),worksheet:"report-work-sheet",name:`tb_tests_report_from_${t(p)}_to_${t(m)}.xls`},{default:I(()=>[a(S,{text:"Export Excel"})]),_:1},8,["header","data","name"])])]),t(l).data.length>0?(s(),o("div",ve,[e("div",ge,[be,a(V)]),e("div",ye,[e("h3",we,[C("Tests Performed Period: "),e("span",ke,u(t(p)!=""?t(y)(t(p)).format("DD/MM/YYYY"):"")+" - "+u(t(m)!=""?t(y)(t(m)).format("DD/MM/YYYY"):""),1)])]),e("div",null,[e("table",Re,[(s(!0),o(v,null,b(t(l).data,(h,N)=>(s(),o(v,{key:N},[e("thead",$e,[e("tr",Ye,[Ce,(s(!0),o(v,null,b(t(l).months,(x,k)=>(s(),o("th",{class:"px-2 py-2 border-r",key:k},u(x),1))),128))])]),e("tbody",null,[(s(!0),o(v,null,b(h[Object.keys(h)[0]],(x,k)=>(s(),o("tr",{class:"border-b",key:k},[e("td",De,u(x.result),1),(s(!0),o(v,null,b(t(l).months,R=>(s(),o("td",{key:R,class:"px-2 py-2 border-r"},u(x.month[R]>0?x.month[R]:0),1))),128))]))),128))])],64))),128))])])])):M("",!0),J(e("div",Me,[a(L),Te],512),[[K,t(d)]]),t(l).data.length==0&&!t(d)?(s(),o("div",Be,Oe)):M("",!0)])}}});export{nt as default};