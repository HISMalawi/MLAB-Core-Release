import{_ as I}from"./Breadcrumb.vue.045bd783.js";import{_ as K}from"./Dropdown.be3bd73f.js";import{l as Q,B as u,u as W,K as R,f as M,o as a,c as n,b as l,k as e,d as t,t as i,h as C,D as T,g as X,F as y,r as x,a as k,e as Z}from"./entry.a061692d.js";import{_ as ee}from"./index.e7546bd4.js";import{_ as te}from"./ExportButton.vue.6095c931.js";import{_ as oe}from"./Address.vue.9b815dbd.js";import{u as re}from"./vue.f36acd1f.0b4f2453.js";import{d as F,e as se}from"./constants.5ff314f3.js";import{_ as ae}from"./report.601e8b60.js";import{_ as ne}from"./logo.6e96e07f.js";import{h as _,e as P,f as S}from"./fetch.1d637d4b.js";import{u as le}from"./facility.0787e843.js";import{P as de}from"./package.e5cbe000.js";import{r as ce}from"./FunnelIcon.6080d9fc.js";import{r as ie}from"./ArrowPathIcon.61964360.js";import"./nuxt-link.246d5749.js";import"./HomeIcon.eefa6f73.js";import"./listbox.a1e88976.js";import"./hidden.2e8968f2.js";import"./use-text-value.9832c120.js";import"./CheckIcon.b32a641c.js";import"./CheckCircleIcon.05184fa5.js";import"./MagnifyingGlassIcon.8954957c.js";import"./html2canvas.esm.acdae98d.js";import"./jspdf.es.min.1d3a7715.js";import"./XMarkIcon.2a91e852.js";import"./PrinterIcon.63d7d5dd.js";import"./transition.34c9747b.js";import"./PencilSquareIcon.a9348a41.js";const me={class:"px-5 py-5"},pe=t("img",{src:ae,alt:"report-icon",class:"w-8 h-8 mr-2"},null,-1),ue={class:"w-full flex items-center justify-between"},_e={class:"flex items-center space-x-3"},fe={class:"bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500"},ve={class:"w-72 ml-2"},be={class:"w-44"},he={class:"flex items-center space-x-3"},ye={class:"mt-3"},xe={class:"text-lg font-semibold mb-2"},ge={class:"text-normal font-normal"},De={class:"border rounded print-container",id:"print-container"},Re={class:"flex items-center justify-between px-5 py-5 border-b"},ke=t("div",{class:"flex flex-col space-y-2"},[t("img",{src:ne,alt:"app-logo",class:"w-24 h-24 object-cover"}),t("h3",{class:"text-xl font-semibold"}," REJECTED SAMPLES REPORT ")],-1),we={class:"mt-10"},Ee={class:"w-full border border-dotted rounded overflow-x-auto"},$e={class:"bg-gray-50 border-b border-dotted rounded-t"},Me=t("th",{class:"border-r"},null,-1),Ce=["colspan"],Te=t("th",null,"TOTAL",-1),Fe=t("td",{class:"border-r border-b border-dotted px-2 py-2"},null,-1),Pe={class:"border-r border-b border-dotted px-2 py-2"},Se={class:"border-r border-t border-b border-dotted px-2 py-2"},Ve="Rejected Samples Report",mt=Q({__name:"rejected-samples",setup(je){re({title:`${de.name.toUpperCase()} - Rejected Samples Report`});const V=u([{name:"Home",link:"/home"},{name:"Reports",link:"#"},{name:"Aggregate Reports",link:"#"}]),w=u([]),f=u({name:"select department"}),E=W("token"),g=le(),d=u(["",""]),j=()=>{d.value=new Array("","")},m=u({result:[],value:void 0,wards:void 0}),A=R(()=>[]),v=u(!1),B=()=>{const o={};return m.value.result.forEach(r=>{r.test_types.forEach(s=>{o[s.name]?o[s.name]+=s.count:o[s.name]=s.count})}),o};async function Y(){const o={route:P.departments,method:"GET",token:`${E.value}`},{data:r,error:s}=await S(o);r.value&&(w.value=r.value),s.value&&console.error(s.value)}const b=R(()=>d.value[0]?_(d.value[0]).format("YYYY-MM-DD"):""),h=R(()=>d.value[1]?_(d.value[1]).format("YYYY-MM-DD"):"");async function O(){if(L())k().$toast.warning("Please select a department");else{v.value=!0;const o={route:`${P.aggregateReports}rejected?from=${b.value}&to=${h.value}&department=${f.value.id}`,method:"GET",token:`${E.value}`},{data:r,error:s,pending:D}=await S(o);v.value=D,r.value&&(v.value=!1,m.value=r.value.data,console.log(r.value.data),k().$toast.success("Report generated successfully!")),s.value&&(console.log(s.value),v.value=!1,k().$toast.error(se))}}function L(){return f.value.name=="select department"}return Y(),(o,r)=>{const s=I,D=M("datepicker"),q=K,N=Z,G=ee,U=te,H=M("excel"),J=oe;return a(),n("div",me,[l(s,{pages:e(V)},null,8,["pages"]),t("div",{class:"flex items-center py-5"},[pe,t("h3",{class:"text-2xl font-semibold uppercase"},i(Ve))]),t("div",ue,[t("div",_e,[t("div",fe,[l(e(ce),{class:"w-5 h-5 mr-2"}),C(" Filter By Date Range "),t("div",ve,[l(D,{onCleared:j,required:"",position:"left",placeholder:"select start & end date",range:!0,"input-class-name":"datepicker",modelValue:e(d),"onUpdate:modelValue":r[0]||(r[0]=p=>T(d)?d.value=p:null),format:"dd/MM/yyyy"},null,8,["modelValue"])])]),t("div",be,[l(q,{items:e(w),modelValue:e(f),"onUpdate:modelValue":r[1]||(r[1]=p=>T(f)?f.value=p:null)},null,8,["items","modelValue"])]),l(N,{color:"primary",text:"Generate Report",icon:e(ie),click:()=>O(),loading:e(v)},null,8,["icon","click","loading"])]),t("div",he,[l(G,{printSmallLabel:!1}),l(H,{class:"btn btn-default",header:["REJECTED SAMPLES REPORT ",`PERIOD FROM ${e(_)(e(b)).format("DD-MM-yyyy")} TO ${e(h)}).format('DD-MM-yyyy')}`,e(g).details.name,e(g).details.address,e(g).details.phone],data:e(A),worksheet:"report-work-sheet",name:`rejected_samples_report_${e(_)(e(b)).format("DD_MM_yyyy")}_to_${e(h)}).format('DD_MM_yyyy')}.xls`},{default:X(()=>[l(U,{text:"Export Excel"})]),_:1},8,["header","data","name"])])]),t("div",ye,[t("h3",xe,[C("Tests Performed Period: "),t("span",ge,i(e(b)!=""?e(_)(e(b)).format("dateFormat"in o?o.dateFormat:e(F)):"")+" - "+i(e(h)!=""?e(_)(e(h)).format("dateFormat"in o?o.dateFormat:e(F)):""),1)])]),t("div",De,[t("div",Re,[ke,l(J)]),t("div",we,[t("table",Ee,[(a(!0),n(y,null,x(e(m).result,(p,z)=>(a(),n(y,{key:z},[t("thead",$e,[t("tr",null,[Me,t("th",{colspan:e(m).wards.length,class:"px-5 py-2 border-r"},i(p.name),9,Ce),Te])]),t("tbody",null,[t("tr",null,[Fe,(a(!0),n(y,null,x(e(m).wards,c=>(a(),n("td",{key:c,class:"border-r border-b border-dotted px-2 py-2"},i(c),1))),128))]),(a(!0),n(y,null,x(p.test_types,c=>(a(),n("tr",{key:c.name},[t("td",Pe,i(c.name),1),(a(!0),n(y,null,x(e(m).wards,$=>(a(),n("td",{key:$,class:"border-r border-b border-dotted px-2 py-2"},i(c.ward===$?c.count:0),1))),128)),t("td",Se,i(B()[c.name]),1)]))),128))])],64))),128))])])])])}}});export{mt as default};