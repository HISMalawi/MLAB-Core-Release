import{_ as ee}from"./COJDNupw.js";import{_ as te}from"./CoQgzhbz.js";import{d as oe,aC as re,r as $,a as ae,a5 as se,ak as ne,u as ce,w as ie,C as M,c as de,o as P,y as le,b as C,e as R,f as m,h as o,g as t,k as B,H as ue,z as pe,t as s,K as V,F as me,j as _e,l as G,m as H,aD as ye,E as be,_ as he,n as xe}from"./BxD-h1LR.js";import{_ as ve}from"./BNhNOnHe.js";import{_ as fe}from"./Cs7plFji.js";import{u as ke}from"./BmiBNsbw.js";import{_ as ge}from"./CKMQEpqg.js";import{_ as $e}from"./B4cMvEBz.js";import{_ as Ce}from"./CQcCm1L6.js";import{u as Re}from"./DRcUz5ts.js";import{P as we}from"./C1C0mJ5v.js";import{r as De}from"./BkJfYQCG.js";import{r as je}from"./CQe3LSWs.js";import"./Dm9r4zu1.js";import"./Cpa0DX47.js";import"./CV2CrNCX.js";import"./Bu7bZmRE.js";import"./pmVMiK7H.js";import"./BuhIHGoH.js";import"./2qDGpbGm.js";import"./DiIN0LOU.js";import"./DQVzKFZd.js";const Qe={class:"px-5 py-5"},Me=t("div",{class:"py-5"},[t("div",{class:"text-2xl font-semibold flex items-center uppercase"},[t("img",{src:ge,alt:"report-icon",class:"w-8 h-8 mr-2"}),B(" Microbiology Report ")])],-1),Ne={class:"w-full flex justify-between py-5"},Ye={class:"flex items-center space-x-3"},Te={class:"bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500"},Oe={class:"w-36 ml-2 bg-white"},Ae={class:"border rounded"},Ee={class:"rounded-tr rounded-tl border-b px-5 py-5 flex items-center justify-between"},qe=t("div",{class:"flex flex-col space-y-2"},[t("img",{src:$e,alt:"app-logo",class:"w-24 h-24 object-cover"}),t("h3",{class:"text-xl font-semibold"}," MICROBIOLOGY MoH LABORATORY REPORT ")],-1),Be={class:"px-4 py-2.5 font-medium"},Fe={class:"font-normal"},Se={class:"overflow-x-auto rounded border-t relative"},Ie={key:0,class:"w-full bg-black bg-opacity-5 absolute flex space-y-2 justify-center py-20 mx-auto h-full"},Le={class:"flex flex-col items-center space-y-"},Pe={class:"overflow-x-auto"},Ve=t("thead",{class:"border-b"},[t("tr",{class:"w-full bg-gray-50"},[t("th",{class:"px-4 py-2 uppercase border-r"},"Laboratory Service"),t("th",{class:"px-4 py-2 uppercase border-r"},"Jan"),t("th",{class:"px-4 py-2 uppercase border-r"},"Feb"),t("th",{class:"px-4 py-2 uppercase"},"March"),t("th",{class:"px-4 py-2 uppercase bg-sky-50 text-sky-500 border border-sky-100"},"Total Q1"),t("th",{class:"px-4 py-2 uppercase border-r"},"Apr"),t("th",{class:"px-4 py-2 uppercase border-r"},"May"),t("th",{class:"px-4 py-2 uppercase"},"Jun"),t("th",{class:"px-4 py-2 uppercase bg-sky-50 text-sky-500 border border-sky-100"},"Total Q2"),t("th",{class:"px-4 py-2 uppercase border-r"},"Jul"),t("th",{class:"px-4 py-2 uppercase border-r"},"Aug"),t("th",{class:"px-4 py-2 uppercase"},"Sep"),t("th",{class:"px-4 py-2 uppercase bg-sky-50 text-sky-500 border border-sky-100"},"Total Q3"),t("th",{class:"px-4 py-2 uppercase border-r"},"Oct"),t("th",{class:"px-4 py-2 uppercase border-r"},"Nov"),t("th",{class:"px-4 py-2 uppercase"},"Dec"),t("th",{class:"px-4 py-2 uppercase bg-sky-50 text-sky-500 border-t border-l border-b border-sky-100"}," Total Q4 "),t("th",{class:"px-4 py-2 uppercase bg-green-600 text-white border border-green-400"},"Total")])],-1),Ge={class:"px-4 py-2 text-center border-r border-b"},He=["onClick"],Je=["onClick"],Ue=["onClick"],ze={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100"},Ke=["onClick"],We=["onClick"],Xe=["onClick"],Ze={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100"},et=["onClick"],tt=["onClick"],ot=["onClick"],rt={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border border-sky-100"},at=["onClick"],st=["onClick"],nt=["onClick"],ct={class:"px-4 py-2 text-center bg-sky-50 text-sky-500 border-t border-l border-b border-sky-100"},it={class:"px-4 py-2 text-center bg-green-600 border text-white border-green-400"},dt={key:1,class:"w-full flex flex-col items-center justify-center space-y-2 py-10"},lt=t("img",{src:Ce,alt:"page-icon",class:"object-cover w-20 h-20"},null,-1),ut=t("p",{class:"text-base"},"Could not load data, please try again",-1),pt=[lt,ut],Et=oe({__name:"microbiology",setup(mt){ke({title:`${we.name.toUpperCase()} - Biochemistry Report`});const J=re([{name:"Home",link:"/home"},{name:"Reports",link:"#"},{name:"MoH Diagnistic Reports",link:"#"}]),y=$([]),a=$({name:"select year"}),F=$([]),S=ae("token"),u=$(!1),b=se(),h=ne(),{$toast:x}=ce(),N=Re(),I=$([]),l=(n,r,c,p)=>{if(c!==0&&p!==""){const _=M(r).format("MMMM-YYYY");b.push(`/reports/${p}?origin=moh&type=Microbiology-report&dateRange=${_}&test=${n} - ${_}&department=Microbiology&count=${c}`)}else x.warning("No data found for this month")},U=async()=>{u.value=!0;const n={route:`${G.reportIndicators}?department=Microbiology`,method:"GET",token:`${S.value}`},{data:r,error:c}=await H(n);r.value&&(y.value=r.value.map(p=>({indicator:p,jan:{count:"!",associated_ids:""},feb:{count:"!",associated_ids:""},mar:{count:"!",associated_ids:""},totalQ1:"!",apr:{count:"!",associated_ids:""},may:{count:"!",associated_ids:""},june:{count:"!",associated_ids:""},totalQ2:"!",jul:{count:"!",associated_ids:""},aug:{count:"!",associated_ids:""},sept:{count:"!",associated_ids:""},totalQ3:"!",oct:{count:"!",associated_ids:""},nov:{count:"!",associated_ids:""},dec:{count:"!",associated_ids:""},totalQ4:"!",total:"!"})),u.value=!1),c.value&&(console.error(c.value),u.value=!1,x.error(ye))},z=async()=>{a.value.name==="select year"?x.warning("Please select a year"):L()},K=()=>{let n="";if(a.value.name!=="select year"&&(n=`&year=${a.value.name}`),h.query.period){const r=`1/${String(h.query.period)}`;n=`&year=${M(r).format("YYYY")}`,a.value={name:M(r).format("YYYY")}}return n},L=async()=>{u.value=!0;const n={route:`${G.mohReport}microbiology?report_id=${h.query.report_id}${K()}`,method:"GET",token:`${S.value}`},{data:r,error:c,pending:p}=await H(n);if(u.value=p,r.value){let _=[];y.value.map(i=>{let v=r.value.january[i.indicator],f=r.value.february[i.indicator],k=r.value.march[i.indicator],e=r.value.april[i.indicator],g=r.value.may[i.indicator],d=r.value.june[i.indicator],Y=r.value.july[i.indicator],T=r.value.august[i.indicator],O=r.value.september[i.indicator],A=r.value.october[i.indicator],E=r.value.november[i.indicator],q=r.value.december[i.indicator],w=v.count+f.count+k.count,D=e.count+g.count+d.count,j=Y.count+T.count+O.count,Q=A.count+E.count+q.count;_.push({indicator:i.indicator,jan:v,feb:f,mar:k,totalQ1:w,apr:e,may:g,june:d,totalQ2:D,jul:Y,aug:T,sept:O,totalQ3:j,oct:A,nov:E,dec:q,totalQ4:Q,total:w+D+j+Q}),I.value.push({"Laboratory Service":i.indicator,January:v.count,February:f.count,March:k.count,"Total Q1":w,April:e.count,May:g.count,June:d.count,"Total Q2":D,July:Y.count,August:T.count,September:O.count,"Total Q3":j,October:A.count,November:E.count,December:q.count,"Total Q4":Q,Total:w+D+j+Q})}),y.value=[],y.value.push(..._),u.value=!1,W(r.value.report_id),x.success("Report data generated successfully!")}c.value&&(u.value=!1,console.error(c.value),x.error(be))},W=n=>{const c={...b.currentRoute.value.query,report_id:n};b.replace({query:c}).catch(p=>{console.error("Failed to replace route:",p)})},X=()=>{const n=new Date().getFullYear();F.value=Array.from({length:n-1999},(r,c)=>({name:(n-c).toString(),id:n-c}))};ie(a,()=>{if(a){const r={...b.currentRoute.value.query,period:M(a.value.name).format("M/yyyy"),report_id:""};b.replace({query:r}).catch(c=>{console.error("Failed to replace route:",c)})}},{deep:!0});const Z=de(()=>h.query.period!==void 0&&h.query.period!=="");return P(()=>{Z.value&&L()}),P(()=>{X(),U()}),(n,r)=>{const c=ee,p=te,_=he,i=ve,v=le("excel"),f=fe,k=xe;return C(),R("div",Qe,[m(c,{pages:o(J)},null,8,["pages"]),Me,t("div",Ne,[t("div",Ye,[t("div",Te,[m(o(De),{class:"w-5 h-5 mr-2"}),B(" Filter By Year "),t("div",Oe,[m(p,{items:o(F),modelValue:o(a),"onUpdate:modelValue":r[0]||(r[0]=e=>ue(a)?a.value=e:null)},null,8,["items","modelValue"])])]),m(_,{loading:o(u),click:()=>{z()},color:"primary",icon:o(je),text:"Generate report"},null,8,["loading","click","icon"])]),t("div",null,[m(v,{class:"btn btn-default",header:[`MICROBIOLOGY MoH LABORATORY REPORT ${o(a).name}`,o(N).details.name,o(N).details.address,o(N).details.phone],data:o(I),worksheet:"report-work-sheet",name:`moh_microbiology_report_${o(a).name}.xls`},{default:pe(()=>[m(i,{text:"Export Excel"})]),_:1},8,["header","data","name"])])]),t("div",Ae,[t("div",Ee,[qe,m(f)]),t("div",null,[t("h3",Be,[B("Data for the year: "),t("span",Fe,s(o(a).name=="select year"?"-:-":o(a).name),1)])]),t("div",Se,[o(u)?(C(),R("div",Ie,[t("div",Le,[m(k,{width:100,height:100})])])):V("",!0),t("table",Pe,[Ve,t("tbody",null,[(C(!0),R(me,null,_e(o(y),(e,g)=>(C(),R("tr",{class:"px-2",key:g},[t("td",Ge,s(e.indicator),1),t("td",{class:"px-4 py-2 text-center border-r border-b hover:font-medium cursor-pointer hover:text-sky-500 hover:underline transition duration-150",onClick:d=>l(e.indicator,`01-01-${o(a).name}`,Number(e.jan.count),e.jan.associated_ids)},s(e.jan.count),9,He),t("td",{class:"px-4 py-2 text-center border-r border-b hover:font-medium cursor-pointer hover:text-sky-500 hover:underline transition duration-150",onClick:d=>l(e.indicator,`02-01-${o(a).name}`,Number(e.feb.count),e.feb.associated_ids)},s(e.feb.count),9,Je),t("td",{class:"px-4 py-2 text-center border-b hover:font-medium cursor-pointer hover:text-sky-500 hover:underline transition duration-150",onClick:d=>l(e.indicator,`03-01-${o(a).name}`,Number(e.mar.count),e.mar.associated_ids)},s(e.mar.count),9,Ue),t("td",ze,s(e.totalQ1),1),t("td",{class:"px-4 py-2 text-center border-r border-b hover:font-medium cursor-pointer hover:text-sky-500 hover:underline transition duration-150",onClick:d=>l(e.indicator,`04-01-${o(a).name}`,Number(e.apr.count),e.apr.associated_ids)},s(e.apr.count),9,Ke),t("td",{class:"px-4 py-2 text-center border-r border-b hover:font-medium cursor-pointer hover:text-sky-500 hover:underline transition duration-150",onClick:d=>l(e.indicator,`05-01-${o(a).name}`,Number(e.may.count),e.may.associated_ids)},s(e.may.count),9,We),t("td",{class:"px-4 py-2 text-center border-b hover:font-medium cursor-pointer hover:text-sky-500 hover:underline transition duration-150",onClick:d=>l(e.indicator,`06-01-${o(a).name}`,Number(e.june.count),e.june.associated_ids)},s(e.june.count),9,Xe),t("td",Ze,s(e.totalQ2),1),t("td",{class:"px-4 py-2 text-center border-r border-b hover:font-medium cursor-pointer hover:text-sky-500 hover:underline transition duration-150",onClick:d=>l(e.indicator,`07-01-${o(a).name}`,Number(e.jul.count),e.jul.associated_ids)},s(e.jul.count),9,et),t("td",{class:"px-4 py-2 text-center border-r border-b hover:font-medium cursor-pointer hover:text-sky-500 hover:underline transition duration-150",onClick:d=>l(e.indicator,`08-08-${o(a).name}`,Number(e.aug.count),e.aug.associated_ids)},s(e.aug.count),9,tt),t("td",{class:"px-4 py-2 text-center border-b hover:font-medium cursor-pointer hover:text-sky-500 hover:underline transition duration-150",onClick:d=>l(e.indicator,`09-9-${o(a).name}`,Number(e.sept.count),e.sept.associated_ids)},s(e.sept.count),9,ot),t("td",rt,s(e.totalQ3),1),t("td",{class:"px-4 py-2 text-center border-r border-b hover:font-medium cursor-pointer hover:text-sky-500 hover:underline transition duration-150",onClick:d=>l(e.indicator,`10-10-${o(a).name}`,Number(e.oct.count),e.oct.associated_ids)},s(e.oct.count),9,at),t("td",{class:"px-4 py-2 text-center border-r border-b hover:font-medium cursor-pointer hover:text-sky-500 hover:underline transition duration-150",onClick:d=>l(e.indicator,`11-11-${o(a).name}`,Number(e.nov.count),e.nov.associated_ids)},s(e.nov.count),9,st),t("td",{class:"px-4 py-2 text-center border-b hover:font-medium cursor-pointer hover:text-sky-500 hover:underline transition duration-150",onClick:d=>l(e.indicator,`12-12-${o(a).name}`,Number(e.dec.count),e.dec.associated_ids)},s(e.dec.count),9,nt),t("td",ct,s(e.totalQ4),1),t("td",it,s(e.total),1)]))),128))])]),o(y).length==0&&!o(u)?(C(),R("div",dt,pt)):V("",!0)])])])}}});export{Et as default};