import{_ as z}from"./DxgfIgq2.js";import{_ as I}from"./Be0qiGsI.js";import{d as A,r as o,a as N,u as j,y as M,b as w,e as D,f as n,h as e,B as F,z as f,Y as K,p as T,g as t,G as H,V as Y,j as G,q as J,i as Q,t as $,v as W,S as X,l as C,m as P,E as O,_ as Z,o as ee,w as B,L as U,H as se,K as V,a1 as te}from"./DijMqi0f.js";import{_ as ae}from"./B89b43eb.js";import{_ as R}from"./DAoM-dCf.js";import{r as ne}from"./owUhGLhQ.js";import{_ as oe}from"./BgsGbHEo.js";import{u as q}from"./BGvu99B-.js";import{P as ie}from"./DFMahSyI.js";import{u as le}from"./DEykKpD1.js";import"./CnDsG1by.js";import"./Cm3xXKAi.js";import"./C3t9ztsf.js";import"./CMd9Miss.js";import"./BGWoW83V.js";const ce={class:"fixed inset-0 overflow-y-auto"},re={class:"flex min-h-full items-center justify-center p-4 text-center"},pe={class:"border-b px-3 py-3 flex items-center justify-between"},me={class:"mt-2 space-y-3 px-5 py-5"},ue={class:"w-full flex flex-col space-y-1"},de={class:"text-base text-gray-600"},_e={class:"w-full flex flex-col space-y-1"},fe={class:"text-base text-gray-600"},ve={class:"mt-2 space-y-3 px-5 relative pb-20"},ye={class:"mt-10 justify-end flex items-center space-x-3 px-3 py-2 border-t"},xe=A({__name:"index",props:{id:{}},emits:["action-completed"],setup(E,{emit:k}){const v=k,h=E,y=o(!1),r=o(!1),u=N("token"),{$toast:d}=j(),p=o({life_span:"",life_span_units:""}),x=o({specimen_name:"",test_type_name:"",life_span:"",life_span_units:""}),g=o([{name:"mins",value:"mins"},{name:"hours",value:"hours"},{name:"days",value:"days"},{name:"months",value:"months"}]),S=async()=>{r.value=!0;const c={route:`${C.specimensLifespan.edit}/${h.id}`,method:"GET",token:`${u.value}`},s=await P(c);if(s.data.value){const a=s.data.value;p.value.life_span=a.life_span,p.value.life_span_units=a.life_span_units,x.value.specimen_name=a.specimen.name,x.value.test_type_name=a.test_type.name,y.value=!0}r.value=!1,s.error.value&&(r.value=!1,d.error(`${O}`))},L=async()=>{r.value=!0;const c={route:`${C.specimensLifespan.update}/${h.id}`,method:"PUT",token:`${u.value}`,body:p.value},{data:s,error:a,pending:_}=await P(c);r.value=_,s.value&&(i(),v("action-completed",!0),d.success("Specimen lifespan updated successfully!")),a.value&&(d.success("An error occurred, please try again!"),i())},i=()=>{y.value=!y.value,r.value=!1};return(c,s)=>{const a=Z,_=M("FormKit"),b=ae;return w(),D("div",null,[n(a,{click:S,color:"success",text:"Edit",icon:e(F)},null,8,["icon"]),n(e(X),{appear:"",show:e(y),as:"template"},{default:f(()=>[n(e(K),{as:"div",class:"relative z-10"},{default:f(()=>[n(e(T),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:f(()=>s[2]||(s[2]=[t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),t("div",ce,[t("div",re,[n(e(T),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:f(()=>[n(e(H),{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:f(()=>[t("div",pe,[n(e(Y),{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:f(()=>s[3]||(s[3]=[t("img",{src:R,class:"w-8 h-8 mr-2",alt:"test-tube-icon"},null,-1),G(" Edit Specimen Lifespan ")])),_:1}),t("button",{onClick:i},[n(e(J),{class:"w-5 h-5"})])]),Q(t("div",me,[t("div",ue,[s[4]||(s[4]=t("label",{class:"font-semibold text-lg"},$("Specimen Name"),-1)),t("p",de,$(e(x).specimen_name),1)]),t("div",_e,[s[5]||(s[5]=t("label",{class:"font-semibold text-lg"},$("Test Type"),-1)),t("p",fe,$(e(x).test_type_name),1)])],512),[[W,!e(r)]]),n(_,{type:"form","submit-label":"Update",onSubmit:L,actions:!1},{default:f(({})=>[t("div",ve,[n(_,{class:"w-full",type:"number",label:"Lifespan",validation:"required",modelValue:e(p).life_span,"onUpdate:modelValue":s[0]||(s[0]=l=>e(p).life_span=l)},null,8,["modelValue"]),n(b,{label:"Duration",mode:"single",items:e(g).map(l=>l.value),"items-selected":e(p).life_span_units,"onUpdate:itemsSelected":s[1]||(s[1]=l=>e(p).life_span_units=l),class:"z-10"},null,8,["items","items-selected"])]),t("div",ye,[n(a,{type:"submit",click:()=>{},color:"success",loading:e(r),icon:e(ne),text:"Save changes"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}}}),ge={class:"px-5 py-5"},he={class:"text-2xl font-semibold flex items-center uppercase py-5"},be={class:"flex justify-end w-full px-2 py-2 mb-2"},$e={class:"py-2 flex items-center space-x-2"},De=A({__name:"specimen-lifespan",setup(E){le({title:`${ie.name.toUpperCase()} - Specimen Lifespan`});const k=o(0),v=o(!1),h=o([]),y=N("token"),r=o("Specimen Lifespan"),u=o(""),d=o({page:1,rowsPerPage:10,sortBy:"name"}),p=o([{name:"Home",link:"/home"},{name:"Test Catalog",link:"#"}]),x=o([{text:"Specimen Type",value:"specimen_name",sortable:!0},{text:"Test Type",value:"test_type_name"},{text:"Lifesapn",value:"specimen_life_span"},{text:"Actions",value:"actions"}]),g=async()=>{v.value=!0;const{page:i,rowsPerPage:c}=d.value,s={route:te(C.specimensLifespan.index,{page:i,per_page:c,search:u.value}),method:"GET",token:`${y.value}`},{data:a,error:_,pending:b}=await P(s);if(v.value=b,a.value){const l=a.value.data;h.value=l?l.map(m=>({id:m.id,specimen_name:m.specimen_name,test_type_name:m.test_type_name,specimen_life_span:m.life_span&&m.life_span_units?`${m.life_span} ${m.life_span_units}`:"--",life_span:m.life_span,life_span_unit:m.life_span_units})):[],k.value=a.value.meta.total_count??0,v.value=!1}_.value&&(v.value=!1,j().$toast.error(`${O}`))},S=i=>d.value=i;ee(()=>{g()}),B(d,()=>g()),B(u,()=>g());const L=async()=>{g()};return(i,c)=>{const s=z,a=I,_=xe,b=oe;return w(),D("div",ge,[n(s,{pages:e(p)},null,8,["pages"]),t("div",he,[c[1]||(c[1]=t("img",{src:R,alt:"report-icon",class:"w-8 h-8 mr-2"},null,-1)),G(" "+$(e(r)),1)]),t("div",be,[("usePermissions"in i?i.usePermissions:e(q))().can.manage("test_catalog")?(w(),U(a,{key:0,search:e(u),"onUpdate:search":c[0]||(c[0]=l=>se(u)?u.value=l:null)},null,8,["search"])):V("",!0)]),("usePermissions"in i?i.usePermissions:e(q))().can.manage("test_catalog")?(w(),U(b,{key:0,headers:e(x),data:e(h),serverOptions:e(d),loading:e(v),serverItemsLength:e(k),onUpdate:S},{actions:f(({item:l})=>[t("div",$e,[n(_,{onActionCompleted:L,id:l.id},null,8,["id"])])]),_:1},8,["headers","data","serverOptions","loading","serverItemsLength"])):V("",!0)])}}});export{De as default};