import{_ as S}from"./ucPVlGIa.js";import{_ as P}from"./C525PUnr.js";import{_ as T}from"./Bm5iV9fv.js";import{r as C,a as V}from"./a1grTX5L.js";import{r as A}from"./C20_EJt5.js";import{r as I}from"./DMLjWl8C.js";import{r as M}from"./CsdU_Sy8.js";import{x as R,y as p,b as i,e as a,f as r,g as e,z as H,K as f,i as c,I as u,k as d,F as b,j as g,t as v,a3 as N,a4 as z}from"./CnHVHtNb.js";import"./BZb3bzVo.js";import"./n6mkMIpm.js";import"./B0PCQlmK.js";import"./BNP8985R.js";import"./DHZFDxBX.js";import"./Cj8g3RT8.js";import"./DpVzKT_I.js";import"./4iVNZzzj.js";const B={data(){return{leftIcon:C,rightIcon:V,dateFrom:new Array,search:"",formatter:{date:"DD MMM YYYY",month:"MMM"},genderSelected:{name:"Male"},gender:[{name:"Male"},{name:"Female Non-Preg./ Bf."},{name:"Female Pregnant"},{name:"Female Breastfeeding"}],gurdianPhone:"",selectedDistrict:{name:"Lilongwe"},districts:[{name:"Blantyre"},{name:"Lilongwe"},{name:"Mzuzu"},{name:"Zomba"},{name:"Mchinji"},{name:"Dedza"},{name:"Nkhotakota"},{name:"Nsanje"},{name:"Salima"},{name:"Karonga"}],selectedFacility:{name:"Queen Elizabeth Central Hospital"},facilities:[{name:"Kamuzu Central Hospital",city:"Lilongwe"},{name:"Queen Elizabeth Central Hospital",city:"Blantyre"},{name:"Mzuzu Central Hospital",city:"Mzuzu"},{name:"Zomba Central Hospital",city:"Zomba"},{name:"Dedza District Hospital",city:"Dedza"},{name:"Nkhotakota District Hospital",city:"Nkhotakota"},{name:"Mulanje District Hospital",city:"Mulanje"},{name:"Balaka District Hospital",city:"Balaka"},{name:"Salima District Hospital",city:"Salima"},{name:"Machinga District Hospital",city:"Machinga"}],reasonForTest:"",pages:[{name:"Home",link:"/home"},{name:"Sample Entry",link:"#"}],regimens:{one:[{value:"0P"},{value:"2P"},{value:"4P"},{value:"9P"},{value:"11P"},{value:"14P"},{value:"15P"},{value:"16P"}],two:[{value:"0A"},{value:"2A"},{value:"4A"},{value:"5A"},{value:"6A"},{value:"7A"},{value:"8A"},{value:"9A"},{value:"10A"},{value:"11A"},{value:"12A"},{value:"13A"},{value:"14A"},{value:"15A"},{value:"NS"}]},selectedRegimen:"",sampleType:""}},components:{MagnifyingGlassIcon:A,QrCodeIcon:I,InformationCircleIcon:M}},o=l=>(N("data-v-f1a13cf3"),l=l(),z(),l),U={class:"px-5 py-5"},E={class:"flex justify-between w-full px-2 py-2 mb-2 mt-3"},L=o(()=>e("div",{class:"flex items-center space-x-3"},[e("h3",{class:"text-2xl font-semibold"},"New viral load entry")],-1)),j={class:"flex items-center border rounded"},Q={class:"border-r px-2 p-2 bg-gray-50"},Y=o(()=>e("input",{type:"text",id:"email-address-icon",class:"px-2 block focus:border-none outline-none transition duration-150 text-sm",placeholder:"Scan barcode"},null,-1)),G={key:0},K={class:"rounded border"},O=o(()=>e("div",{class:"bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md"}," Section 1: Health Facility Information ",-1)),Z={class:"w-full flex items-center px-5 space-x-3 py-5"},q={class:"w-1/2 flex flex-col space-y-2"},J=o(()=>e("label",{class:"font-medium"},"District",-1)),W={class:"w-1/2 flex flex-col space-y-2"},X=o(()=>e("label",{class:"font-medium"},"Facility",-1)),$={class:"rounded border mt-5"},ee=o(()=>e("div",{class:"bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md"}," Section 2: Patient Information ",-1)),te={class:"space-y-3 pb-10"},oe=o(()=>e("div",{class:"w-full flex items-center px-5 space-x-3 mt-3"},[e("div",{class:"w-1/2 flex flex-col space-y-2"},[e("label",{class:"font-medium"},"Patient Surname"),e("input",{type:"text",class:"w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"})]),e("div",{class:"w-1/2 flex flex-col space-y-2"},[e("label",{class:"font-medium"},"Patient First Name"),e("input",{type:"text",class:"w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"})])],-1)),ne={class:"w-full flex items-center px-5 space-x-3"},se=o(()=>e("div",{class:"w-1/2 flex flex-col space-y-2 mb-4"},[e("label",{class:"font-medium"},"Patient ID"),e("div",{id:"otp",class:"flex flex-row text-center mb-3"},[e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"first",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"second",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"third",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"fourth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"fifth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"sixth",maxlength:"1"})])],-1)),re={class:"w-1/2 flex flex-col space-y-2"},le=o(()=>e("label",{class:"font-medium"},"Date of Birth",-1)),ie={class:"w-full"},ae={class:"w-full flex items-center px-5 space-x-3 mt-3"},de={class:"w-1/2 flex flex-col space-y-2"},ce=o(()=>e("label",{class:"font-medium"},"Gender",-1)),ue={class:"w-1/2 flex flex-col space-y-2"},me=o(()=>e("label",{class:"font-medium"},"Patient/Gurdian Phone",-1)),pe={class:"w-full flex items-center px-5 space-x-3 mt-3"},fe={class:"w-1/2 flex flex-col space-y-2"},xe=o(()=>e("label",{class:"font-medium"},"Date Sample Drawn",-1)),he={class:"w-full"},_e={key:1},ye={class:"rounded border"},be=o(()=>e("div",{class:"bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md"}," Section 3: Reason For Test ",-1)),ge={class:"px-2"},ve={class:"px-2 py-2"},we=o(()=>e("label",{for:"radio-group"},"Select reason:",-1)),ke={id:"radio-group",class:"mt-2 flex flex-col space-y-2"},De={class:"rounded border mt-5"},Fe=o(()=>e("div",{class:"bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md"}," Section 4: Patient & Sample Details ",-1)),Se={class:"px-2"},Pe={class:"px-2 py-2"},Te=o(()=>e("label",{class:"font-medium"},"ART Initiation Date",-1)),Ce={class:"w-72"},Ve={class:"px-2 py-2"},Ae=o(()=>e("label",{class:"font-medium"},"Sample Type:",-1)),Ie={id:"radio-group",class:"mt-2 flex flex-col space-y-2"},Me={class:"px-2 py-2"},Re=o(()=>e("label",{for:"radio-group",class:"mb-3 mt-2 font-medium"},"Current ART Regimen:",-1)),He={class:"grid grid-cols-7 w-1/2 mt-2"},Ne={class:"col-span-1 bg-purple-200 px-4 py-4 border-t border-b border-l border-purple-100"},ze={class:"flex items-center"},Be=["value"],Ue={class:"col-span-1 bg-yellow-200 px-4 py-4 border-t border-b border-l border-yellow-100"},Ee={class:"flex items-center"},Le=["value"],je={key:2},Qe={class:"rounded border mt-5"},Ye=o(()=>e("div",{class:"bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md"}," Section 5: Details of Person Collecting Sample ",-1)),Ge={class:"py-5 px-5"},Ke=o(()=>e("div",{class:"w-full flex items-center space-x-3 mt-3"},[e("div",{class:"w-1/2 flex flex-col space-y-2"},[e("label",{class:"font-medium"},"Surname"),e("input",{type:"text",class:"w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"})]),e("div",{class:"w-1/2 flex flex-col space-y-2"},[e("label",{class:"font-medium"},"First Name"),e("input",{type:"text",class:"w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"})])],-1)),Oe={class:"w-full flex items-center space-x-3 mt-3"},Ze={class:"w-1/2 flex flex-col space-y-2"},qe=o(()=>e("label",{class:"font-medium"},"Phone Number",-1)),Je=o(()=>e("div",{class:"w-1/2 flex flex-col space-y-2"},[e("label",{class:"font-medium"},"HTC Provider ID"),e("div",{id:"htc_provider_id",class:"flex flex-row text-center mb-3"},[e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"first",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"second",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"third",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"fourth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"fifth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"sixth",maxlength:"1"})])],-1)),We={key:3},Xe={class:"rounded border mt-5"},$e=o(()=>e("div",{class:"bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md"}," Section 6: Confirmation ",-1)),et={class:"px-5 py-5"},tt={class:"bg-orange-100 text-orange-500 font-medium flex items-center px-2 py-2 rounded"},ot=o(()=>e("div",null,[e("div")],-1));function nt(l,s,st,rt,t,lt){const w=S,k=p("QrCodeIcon"),x=P,h=p("datepicker"),y=p("CorePhonePicker"),D=p("InformationCircleIcon"),F=T;return i(),a("div",U,[r(w,{pages:t.pages},null,8,["pages"]),e("div",E,[L,e("div",j,[e("div",Q,[r(k,{class:"w-5 h-5"})]),Y])]),r(F,{steps:4},{default:H(({step:m})=>[m===1?(i(),a("div",G,[e("div",K,[O,e("div",null,[e("div",Z,[e("div",q,[J,r(x,{items:t.districts,"model-value":t.selectedDistrict},null,8,["items","model-value"])]),e("div",W,[X,r(x,{items:t.facilities,"model-value":t.selectedFacility},null,8,["items","model-value"])])])])]),e("div",$,[ee,e("div",te,[oe,e("div",ne,[se,e("div",re,[le,e("div",ie,[r(h,{placeholder:new Date().toDateString(),"input-class-name":"border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150","as-single":"",shortcuts:!0,modelValue:t.dateFrom,"onUpdate:modelValue":s[0]||(s[0]=n=>t.dateFrom=n),"text-input":!0,"year-range":l.dateRange,"max-date":new Date,"ignore-time-validation":!0,teleport:!0,"enable-time-picker":!1,formatter:l.DATE_FORMATter},null,8,["placeholder","modelValue","year-range","max-date","formatter"])])])]),e("div",ae,[e("div",de,[ce,r(x,{items:t.gender,"model-value":t.genderSelected},null,8,["items","model-value"])]),e("div",ue,[me,r(y,{phone:t.gurdianPhone},null,8,["phone"])])]),e("div",pe,[e("div",fe,[xe,e("div",he,[r(h,{placeholder:new Date().toDateString(),"input-class-name":"border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150","as-single":"",shortcuts:!0,modelValue:t.dateFrom,"onUpdate:modelValue":s[1]||(s[1]=n=>t.dateFrom=n),"text-input":!0,"year-range":l.dateRange,"max-date":new Date,"ignore-time-validation":!0,teleport:!0,"enable-time-picker":!1,formatter:l.DATE_FORMATter},null,8,["placeholder","modelValue","year-range","max-date","formatter"])])])])])])])):f("",!0),m===2?(i(),a("div",_e,[e("div",ye,[be,e("div",ge,[e("div",ve,[we,e("div",ke,[e("label",null,[c(e("input",{type:"radio","onUpdate:modelValue":s[2]||(s[2]=n=>t.reasonForTest=n),value:"routine"},null,512),[[u,t.reasonForTest]]),d(" Routine ")]),e("label",null,[c(e("input",{type:"radio","onUpdate:modelValue":s[3]||(s[3]=n=>t.reasonForTest=n),value:"targeted"},null,512),[[u,t.reasonForTest]]),d(" Targeted ")]),e("label",null,[c(e("input",{type:"radio","onUpdate:modelValue":s[4]||(s[4]=n=>t.reasonForTest=n),value:"follow up after highVL"},null,512),[[u,t.reasonForTest]]),d(" Follow up after highVL ")]),e("label",null,[c(e("input",{type:"radio","onUpdate:modelValue":s[5]||(s[5]=n=>t.reasonForTest=n),value:"repeat"},null,512),[[u,t.reasonForTest]]),d(" Repeat ")])])])])]),e("div",De,[Fe,e("div",Se,[e("div",Pe,[Te,e("div",Ce,[r(h,{placeholder:new Date().toDateString(),"input-class-name":"border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150","as-single":"",shortcuts:!0,modelValue:t.dateFrom,"onUpdate:modelValue":s[6]||(s[6]=n=>t.dateFrom=n),"text-input":!0,"year-range":l.dateRange,"max-date":new Date,"ignore-time-validation":!0,teleport:!0,"enable-time-picker":!1,formatter:l.DATE_FORMATter},null,8,["placeholder","modelValue","year-range","max-date","formatter"])])]),e("div",Ve,[Ae,e("div",Ie,[e("label",null,[c(e("input",{type:"radio","onUpdate:modelValue":s[7]||(s[7]=n=>t.sampleType=n),value:"dbs"},null,512),[[u,t.sampleType]]),d(" DBS (using Capillary Tube) ")]),e("label",null,[c(e("input",{type:"radio","onUpdate:modelValue":s[8]||(s[8]=n=>t.sampleType=n),value:"plasma"},null,512),[[u,t.sampleType]]),d(" Plasma ")])])]),e("div",Me,[Re,e("div",He,[(i(!0),a(b,null,g(t.regimens.one,n=>(i(),a("div",Ne,[e("label",ze,[c(e("input",{type:"radio","onUpdate:modelValue":s[9]||(s[9]=_=>t.selectedRegimen=_),value:n.value,class:"mr-2"},null,8,Be),[[u,t.selectedRegimen]]),d(" "+v(n.value),1)])]))),256)),(i(!0),a(b,null,g(t.regimens.two,n=>(i(),a("div",Ue,[e("label",Ee,[c(e("input",{type:"radio","onUpdate:modelValue":s[10]||(s[10]=_=>t.selectedRegimen=_),value:n.value,class:"mr-2"},null,8,Le),[[u,t.selectedRegimen]]),d(" "+v(n.value),1)])]))),256))])])])])])):f("",!0),m===3?(i(),a("div",je,[e("div",Qe,[Ye,e("div",Ge,[Ke,e("div",Oe,[e("div",Ze,[qe,r(y,{phone:t.gurdianPhone},null,8,["phone"])]),Je])])])])):f("",!0),m===4?(i(),a("div",We,[e("div",Xe,[$e,e("div",et,[e("div",tt,[r(D,{class:"w-5 h-5 mr-3"}),d(" Please make sure you have entered the correct information as they appear on the EID & Viral Load Requisition Form ")]),ot])])])):f("",!0)]),_:1})])}const kt=R(B,[["render",nt],["__scopeId","data-v-f1a13cf3"]]);export{kt as default};