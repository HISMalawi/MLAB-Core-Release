import{_ as ee}from"./COJDNupw.js";import{_ as te}from"./CoQgzhbz.js";import{x as ae,y as w,b as _,L as oe,d as se,r,a as ne,c as V,C as A,e as y,f as s,h as t,g as e,t as c,z as U,k as F,H as B,F as re,j as le,N as ie,K as S,i as ce,v as de,O as P,m as Y,l as j,u as R,E as me,_ as ue,n as pe}from"./BxD-h1LR.js";import{_ as _e}from"./BNhNOnHe.js";import{_ as fe}from"./Cs7plFji.js";import{C as he,b as ve,L as ge,B as xe,c as ye,p as be,a as Te,d as Ae}from"./DvoPYdDe.js";import{u as Re}from"./BmiBNsbw.js";import{_ as we}from"./CKMQEpqg.js";import{_ as De}from"./B4cMvEBz.js";import{_ as $e}from"./CQcCm1L6.js";import{u as ke}from"./DRcUz5ts.js";import{P as Ee}from"./C1C0mJ5v.js";import{r as Ce}from"./BkJfYQCG.js";import{r as Me}from"./CQe3LSWs.js";import"./Dm9r4zu1.js";import"./Cpa0DX47.js";import"./CV2CrNCX.js";import"./Bu7bZmRE.js";import"./pmVMiK7H.js";import"./BuhIHGoH.js";import"./2qDGpbGm.js";import"./DiIN0LOU.js";import"./DQVzKFZd.js";he.register(ve,ge,xe,ye,be,Te);const Ve={components:{Bar:Ae},props:{chartData:{required:!0,type:Object}},data(){return{data:this.chartData,options:{responsive:!0,maintainAspectRatio:!1}}},watch:{chartData:{handler(D){this.data=D},deep:!0}}};function Be(D,N,$,u,f,k){const E=w("Bar");return _(),oe(E,{data:f.data,options:f.options},null,8,["data","options"])}const Fe=ae(Ve,[["render",Be]]),Ne={class:"px-5 py-5"},Oe=e("img",{src:we,alt:"report-icon",class:"w-8 h-8 mr-2"},null,-1),Ue={class:"flex justify-between items-center"},Se={class:"w-full flex items-center space-x-3"},Pe={class:"bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500"},Ye={class:"w-72 ml-2"},je={class:"w-48"},Ge={class:"w-48"},Le={class:"w-48"},qe={class:"border rounded mt-10",id:"print-container"},Ie={class:"flex items-center justify-between px-5 py-5 border-b"},He=e("div",{class:"flex flex-col space-y-2"},[e("img",{src:De,alt:"app-logo",class:"w-24 h-24 object-cover"}),e("h3",{class:"text-xl font-semibold"}," TURN AROUND TIME REPORT ")],-1),ze={class:"m-3"},Ke={class:"font-semibold mb-2"},We={class:"text-normal font-normal"},Je={class:"w-full rounded"},Qe=e("thead",null,[e("tr",{class:"border-t bg-gray-100 border-b"},[e("th",{class:"text-left px-2 py-2 border-r"},"Test Type"),e("th",{class:"text-left px-2 py-2 border-r"},"Turn Around Time"),e("th",{class:"text-left px-2 py-2"},"Average Turn Around Time")])],-1),Xe={class:"text-left px-2 py-2 border-l border-b"},Ze={class:"text-left px-2 py-2 border-l border-b"},et={class:"text-left px-2 py-2 border-l border-r border-b"},tt={key:0,class:"w-full flex flex-col items-center justify-center space-y-2 py-10"},at=e("img",{src:$e,alt:"page-icon",class:"object-cover w-20 h-20"},null,-1),ot=e("p",null,"Data not found, please generate report",-1),st=[at,ot],nt={class:"mx-auto justify-center flex flex-col items-center space-y-3 py-10"},rt=e("p",null,[F("Generating report, please wait"),e("span",{class:"animate-ping"},"...")],-1),lt={class:"px-5 py-5 flex flex-col items-center"},it=e("h3",{class:"text-lg font-medium"},"Average Turn Around Time",-1),ct={class:"mt-1"},dt={key:0,style:{height:"400px"}},mt="Turn Around Time Report",Nt=se({__name:"turn-around-time",setup(D){Re({title:`${Ee.name.toUpperCase()} - Turn Around Time Reports`});const N=r([{name:"Home",link:"/home"},{name:"Reports",link:"#"},{name:"Aggregate Reports",link:"#"}]),$=r([]),u=r({name:"select department",id:0}),f=r(""),k=r(""),E=r([{name:"Minutes"},{name:"Hours"},{name:"Days"},{name:"Weeks"}]),h=r({name:"select unit"}),d=r(!1),p=r([]),C=ke(),O=ne("token"),M=r({}),i=r(new Array("","")),G=()=>{i.value=new Array("","")},v=V(()=>i.value[0]?A(i.value[0]).format("YYYY-MM-DD"):""),g=V(()=>i.value[1]?A(i.value[1]).format("YYYY-MM-DD"):""),L=V(()=>p.value.length>0?p.value.map(a=>({"TEST TYPE":a.test_type,"TURN AROUND TIME":a.turn_around_time,AVERAGE:a.average})):[]);async function q(){const{data:a,error:o}=await Y({route:j.departments,method:"GET",token:`${O.value}`});a.value&&($.value=a.value),o.value&&console.error(o.value)}async function I(){d.value=!0,M.value={};let a=`from=${v.value}&to=${g.value}&department=${u.value.id}&unit=${h.value.name.toLowerCase()}`;const o={route:`${j.aggregateReports}turn_around_time?${a}`,method:"GET",token:`${O.value}`},{data:n,error:b,pending:T}=await Y(o);d.value=T,n.value&&(d.value=!1,p.value=n.value.data,M.value={labels:n.value.data.map(m=>m.test_type),datasets:[{label:"Turn Around Time",backgroundColor:"#0284c7",data:n.value.data.map(m=>m.average)},{label:"Average Turn Around Time",backgroundColor:"#030712",data:n.value.data.map(m=>z(m.turn_around_time))}]},n.value.data.length>0?R().$toast.success("Report data generated successfully"):R().$toast.warning(`No data found in period ${v} - ${g}`)),b.value&&(d.value=!1,console.error(b.value),R().$toast.error(me))}function H(){const a=u.value.name==="select department"||h.value.name==="select unit";return a&&R().$toast.warning("Please select a department and unit"),!a}function z(a){const o=/\d+/,n=a==null?void 0:a.match(o);return n?parseInt(n[0]):0}return q(),(a,o)=>{const n=ee,b=w("datepicker"),T=te,m=ue,K=w("FormKit"),W=_e,J=w("excel"),Q=fe,X=pe,Z=Fe;return _(),y("div",Ne,[s(n,{pages:t(N)},null,8,["pages"]),e("div",{class:"flex items-center py-5"},[Oe,e("h3",{class:"text-2xl font-semibold uppercase"},c(mt))]),e("div",Ue,[s(K,{type:"form","submit-label":"Update",onSubmit:o[3]||(o[3]=x=>H()&&I()),actions:!1,id:"submitForm"},{default:U(({value:x})=>[e("div",Se,[e("div",Pe,[s(t(Ce),{class:"w-5 h-5 mr-2"}),F(" Filter By Date Range "),e("div",Ye,[s(b,{onCleared:G,required:"",position:"left",placeholder:"select start & end date",range:!0,"input-class-name":"datepicker",modelValue:t(i),"onUpdate:modelValue":o[0]||(o[0]=l=>B(i)?i.value=l:null),format:"dd/MM/yyyy"},null,8,["modelValue"])])]),e("div",je,[s(T,{items:t($),modelValue:t(u),"onUpdate:modelValue":o[1]||(o[1]=l=>B(u)?u.value=l:null)},null,8,["items","modelValue"])]),e("div",Ge,[s(T,{items:t(E),modelValue:t(h),"onUpdate:modelValue":o[2]||(o[2]=l=>B(h)?h.value=l:null)},null,8,["items","modelValue"])]),e("div",Le,[s(m,{type:"submit",color:"primary",text:"Generate Report",icon:t(Me),click:()=>{},loading:t(d)},null,8,["icon","loading"])])])]),_:1}),s(J,{class:"btn btn-default",header:[`TURN AROUND TIME REPORT ${t(v)} - ${t(g)}`,t(C).details.name,t(C).details.address,t(C).details.phone],data:t(L),worksheet:"report-work-sheet",name:`turn_around_time_${t(v)}_to_${t(g)}.xls`},{default:U(()=>[s(W,{text:"Export Excel"})]),_:1},8,["header","data","name"])]),e("div",qe,[e("div",Ie,[He,s(Q)]),e("div",ze,[e("h3",Ke,[F("Tests Performed Period: "),e("span",We,c(t(v))+" - "+c(t(g)),1)])]),e("div",null,[e("table",Je,[Qe,e("tbody",null,[(_(!0),y(re,null,le(t(p),(x,l)=>(_(),y("tr",{key:l,class:ie({"bg-white":l%2===0,"bg-gray-100":l%2!==0})},[e("td",Xe,c(x.test_type),1),e("td",Ze,c(x.turn_around_time),1),e("td",et,c(x.average),1)],2))),128))])])]),t(p).length==0&&!t(d)?(_(),y("div",tt,st)):S("",!0),ce(e("div",nt,[s(X),rt],512),[[de,t(d)]])]),e("div",lt,[it,e("p",ct,"From: "+c(t(f)!=""?t(A)(t(f)).format("DATE_FORMAT"in a?a.DATE_FORMAT:t(P)):"")+" -:- To: "+c(t(k)!=""?t(A)(t(k)).format("DATE_FORMAT"in a?a.DATE_FORMAT:t(P)):""),1)]),t(p).length>0?(_(),y("div",dt,[s(Z,{"chart-data":t(M)},null,8,["chart-data"])])):S("",!0)])}}});export{Nt as default};