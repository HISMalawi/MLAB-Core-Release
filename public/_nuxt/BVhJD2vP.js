import{_ as ee}from"./u_i5tT18.js";import{_ as te}from"./DFDCZMcv.js";import{l as ae,m as k,b as _,x as oe,d as se,r as n,a as re,c as B,e as y,f as s,h as t,g as e,t as c,n as P,p as N,y as F,F as ne,j as le,z as ie,s as S,i as ce,v as de,u as w,_ as me,k as ue}from"./CgCt1uig.js";import{_ as pe}from"./DdXQPY3w.js";import{_ as _e}from"./DN8YzQnf.js";import{C as fe,b as he,L as ve,B as ge,c as xe,p as ye,a as be,d as Te}from"./DEaZS3Ln.js";import{u as we}from"./Kt-y9hP3.js";import{d as Y,e as $e}from"./C7nrlxI_.js";import{_ as ke}from"./BGz-rnwB.js";import{_ as Re}from"./BWdvd0jv.js";import{_ as De}from"./DKnTgFGt.js";import{h as $,f as j,e as O}from"./DDP8Pd40.js";import{u as Ae}from"./DOBy1ww1.js";import{P as Ce}from"./Bf5grz7u.js";import{r as Ee}from"./B4Y1aldi.js";import{r as Ve}from"./B5lis3Qx.js";import"./DAatDIeb.js";import"./CDGutsna.js";import"./BvrD8SKf.js";import"./q9WmgNLv.js";import"./DESlB7Mi.js";import"./Ck2xr5Cu.js";import"./B0S8Cwtp.js";import"./CarKmmQ_.js";import"./22U_Ornm.js";import"./BBi4X6kY.js";import"./D8JfA7oG.js";import"./CosnS5_S.js";import"./9jRWjONT.js";import"./DDaZZI9g.js";fe.register(he,ve,ge,xe,ye,be);const Be={components:{Bar:Te},props:{chartData:{required:!0,type:Object}},data(){return{data:this.chartData,options:{responsive:!0,maintainAspectRatio:!1}}},watch:{chartData:{handler(R){this.data=R},deep:!0}}};function Fe(R,U,D,u,f,A){const C=k("Bar");return _(),oe(C,{data:f.data,options:f.options},null,8,["data","options"])}const Ne=ae(Be,[["render",Fe]]),Ue={class:"px-5 py-5"},Me=e("img",{src:ke,alt:"report-icon",class:"w-8 h-8 mr-2"},null,-1),Pe={class:"flex justify-between items-center"},Se={class:"w-full flex items-center space-x-3"},Ye={class:"bg-gray-100 pl-2.5 rounded flex items-center text-zinc-500"},je={class:"w-72 ml-2"},Oe={class:"w-48"},qe={class:"w-48"},Ge={class:"w-48"},Ie={class:"border rounded mt-10",id:"print-container"},Le={class:"flex items-center justify-between px-5 py-5 border-b"},ze=e("div",{class:"flex flex-col space-y-2"},[e("img",{src:Re,alt:"app-logo",class:"w-24 h-24 object-cover"}),e("h3",{class:"text-xl font-semibold"}," TURN AROUND TIME REPORT ")],-1),He={class:"m-3"},Ke={class:"font-semibold mb-2"},We={class:"text-normal font-normal"},Je={class:"w-full rounded"},Qe=e("thead",null,[e("tr",{class:"border-t bg-gray-100 border-b"},[e("th",{class:"text-left px-2 py-2 border-r"},"Test Type"),e("th",{class:"text-left px-2 py-2 border-r"},"Turn Around Time"),e("th",{class:"text-left px-2 py-2"},"Average Turn Around Time")])],-1),Xe={class:"text-left px-2 py-2 border-l border-b"},Ze={class:"text-left px-2 py-2 border-l border-b"},et={class:"text-left px-2 py-2 border-l border-r border-b"},tt={key:0,class:"w-full flex flex-col items-center justify-center space-y-2 py-10"},at=e("img",{src:De,alt:"page-icon",class:"object-cover w-20 h-20"},null,-1),ot=e("p",null,"Data not found, please generate report",-1),st=[at,ot],rt={class:"mx-auto justify-center flex flex-col items-center space-y-3 py-10"},nt=e("p",null,[N("Generating report, please wait"),e("span",{class:"animate-ping"},"...")],-1),lt={class:"px-5 py-5 flex flex-col items-center"},it=e("h3",{class:"text-lg font-medium"},"Average Turn Around Time",-1),ct={class:"mt-1"},dt={key:0,style:{height:"400px"}},mt="Turn Around Time Report",qt=se({__name:"turn-around-time",setup(R){we({title:`${Ce.name.toUpperCase()} - Turn Around Time Reports`});const U=n([{name:"Home",link:"/home"},{name:"Reports",link:"#"},{name:"Aggregate Reports",link:"#"}]),D=n([]),u=n({name:"select department",id:0}),f=n(""),A=n(""),C=n([{name:"Minutes"},{name:"Hours"},{name:"Days"},{name:"Weeks"}]),h=n({name:"select unit"}),d=n(!1),p=n([]),E=Ae(),M=re("token"),V=n({}),i=n(new Array("","")),q=()=>{i.value=new Array("","")},v=B(()=>i.value[0]?$(i.value[0]).format("YYYY-MM-DD"):""),g=B(()=>i.value[1]?$(i.value[1]).format("YYYY-MM-DD"):""),G=B(()=>p.value.length>0?p.value.map(a=>({"TEST TYPE":a.test_type,"TURN AROUND TIME":a.turn_around_time,AVERAGE:a.average})):[]);async function I(){const{data:a,error:o}=await j({route:O.departments,method:"GET",token:`${M.value}`});a.value&&(D.value=a.value),o.value&&console.error(o.value)}async function L(){d.value=!0,V.value={};let a=`from=${v.value}&to=${g.value}&department=${u.value.id}&unit=${h.value.name.toLowerCase()}`;const o={route:`${O.aggregateReports}turn_around_time?${a}`,method:"GET",token:`${M.value}`},{data:r,error:b,pending:T}=await j(o);d.value=T,r.value&&(d.value=!1,p.value=r.value.data,V.value={labels:r.value.data.map(m=>m.test_type),datasets:[{label:"Turn Around Time",backgroundColor:"#0284c7",data:r.value.data.map(m=>m.average)},{label:"Average Turn Around Time",backgroundColor:"#030712",data:r.value.data.map(m=>H(m.turn_around_time))}]},r.value.data.length>0?w().$toast.success("Report data generated successfully"):w().$toast.warning(`No data found in period ${v} - ${g}`)),b.value&&(d.value=!1,console.error(b.value),w().$toast.error($e))}function z(){const a=u.value.name==="select department"||h.value.name==="select unit";return a&&w().$toast.warning("Please select a department and unit"),!a}function H(a){const o=/\d+/,r=a==null?void 0:a.match(o);return r?parseInt(r[0]):0}return I(),(a,o)=>{const r=ee,b=k("datepicker"),T=te,m=me,K=k("FormKit"),W=pe,J=k("excel"),Q=_e,X=ue,Z=Ne;return _(),y("div",Ue,[s(r,{pages:t(U)},null,8,["pages"]),e("div",{class:"flex items-center py-5"},[Me,e("h3",{class:"text-2xl font-semibold uppercase"},c(mt))]),e("div",Pe,[s(K,{type:"form","submit-label":"Update",onSubmit:o[3]||(o[3]=x=>z()&&L()),actions:!1,id:"submitForm"},{default:P(({value:x})=>[e("div",Se,[e("div",Ye,[s(t(Ee),{class:"w-5 h-5 mr-2"}),N(" Filter By Date Range "),e("div",je,[s(b,{onCleared:q,required:"",position:"left",placeholder:"select start & end date",range:!0,"input-class-name":"datepicker",modelValue:t(i),"onUpdate:modelValue":o[0]||(o[0]=l=>F(i)?i.value=l:null),format:"dd/MM/yyyy"},null,8,["modelValue"])])]),e("div",Oe,[s(T,{items:t(D),modelValue:t(u),"onUpdate:modelValue":o[1]||(o[1]=l=>F(u)?u.value=l:null)},null,8,["items","modelValue"])]),e("div",qe,[s(T,{items:t(C),modelValue:t(h),"onUpdate:modelValue":o[2]||(o[2]=l=>F(h)?h.value=l:null)},null,8,["items","modelValue"])]),e("div",Ge,[s(m,{type:"submit",color:"primary",text:"Generate Report",icon:t(Ve),click:()=>{},loading:t(d)},null,8,["icon","loading"])])])]),_:1}),s(J,{class:"btn btn-default",header:[`TURN AROUND TIME REPORT ${t(v)} - ${t(g)}`,t(E).details.name,t(E).details.address,t(E).details.phone],data:t(G),worksheet:"report-work-sheet",name:`turn_around_time_${t(v)}_to_${t(g)}.xls`},{default:P(()=>[s(W,{text:"Export Excel"})]),_:1},8,["header","data","name"])]),e("div",Ie,[e("div",Le,[ze,s(Q)]),e("div",He,[e("h3",Ke,[N("Tests Performed Period: "),e("span",We,c(t(v))+" - "+c(t(g)),1)])]),e("div",null,[e("table",Je,[Qe,e("tbody",null,[(_(!0),y(ne,null,le(t(p),(x,l)=>(_(),y("tr",{key:l,class:ie({"bg-white":l%2===0,"bg-gray-100":l%2!==0})},[e("td",Xe,c(x.test_type),1),e("td",Ze,c(x.turn_around_time),1),e("td",et,c(x.average),1)],2))),128))])])]),t(p).length==0&&!t(d)?(_(),y("div",tt,st)):S("",!0),ce(e("div",rt,[s(X),nt],512),[[de,t(d)]])]),e("div",lt,[it,e("p",ct,"From: "+c(t(f)!=""?t($)(t(f)).format("dateFormat"in a?a.dateFormat:t(Y)):"")+" -:- To: "+c(t(A)!=""?t($)(t(A)).format("dateFormat"in a?a.dateFormat:t(Y)):""),1)]),t(p).length>0?(_(),y("div",dt,[s(Z,{"chart-data":t(V)},null,8,["chart-data"])])):S("",!0)])}}});export{qt as default};