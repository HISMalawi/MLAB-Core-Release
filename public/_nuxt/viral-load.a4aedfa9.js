import{_ as C}from"./Breadcrumb.vue.49302d56.js";import{_ as V}from"./Dropdown.257a05bd.js";import{_ as I}from"./Stepper.07ada5aa.js";import{c as y}from"./constants.c32bb852.js";import{_ as T,f as p,o as i,c as a,b as l,d as e,g as M,k as b,j as f,w as c,i as u,h as d,F as v,r as w,t as k,B as A,C as R}from"./entry.c551b705.js";import{r as H,a as N}from"./ChevronRightIcon.b4a9b90a.js";import{r as B}from"./MagnifyingGlassIcon.b78898e0.js";import{r as z}from"./QrCodeIcon.cb00dccc.js";import{r as U}from"./InformationCircleIcon.2aeedd94.js";import"./nuxt-link.11cd23df.js";import"./HomeIcon.81b6cbd7.js";import"./listbox.3dedabc4.js";import"./hidden.1f7f321e.js";import"./use-text-value.ab7c4736.js";import"./CheckIcon.a577c05b.js";import"./CheckCircleIcon.4f65d1ec.js";const L={data(){return{leftIcon:H,rightIcon:N,dateFrom:new Array,search:"",formatter:{date:"DD MMM YYYY",month:"MMM"},genderSelected:{name:"Male"},gender:[{name:"Male"},{name:"Female Non-Preg./ Bf."},{name:"Female Pregnant"},{name:"Female Breastfeeding"}],gurdianPhone:"",selectedDistrict:{name:"Lilongwe"},districts:[{name:"Blantyre"},{name:"Lilongwe"},{name:"Mzuzu"},{name:"Zomba"},{name:"Mchinji"},{name:"Dedza"},{name:"Nkhotakota"},{name:"Nsanje"},{name:"Salima"},{name:"Karonga"}],selectedFacility:{name:"Queen Elizabeth Central Hospital"},facilities:[{name:"Kamuzu Central Hospital",city:"Lilongwe"},{name:"Queen Elizabeth Central Hospital",city:"Blantyre"},{name:"Mzuzu Central Hospital",city:"Mzuzu"},{name:"Zomba Central Hospital",city:"Zomba"},{name:"Dedza District Hospital",city:"Dedza"},{name:"Nkhotakota District Hospital",city:"Nkhotakota"},{name:"Mulanje District Hospital",city:"Mulanje"},{name:"Balaka District Hospital",city:"Balaka"},{name:"Salima District Hospital",city:"Salima"},{name:"Machinga District Hospital",city:"Machinga"}],reasonForTest:"",pages:[{name:"Home",link:"/home"},{name:"Sample Entry",link:"#"}],regimens:{one:[{value:"0P"},{value:"2P"},{value:"4P"},{value:"9P"},{value:"11P"},{value:"14P"},{value:"15P"},{value:"16P"}],two:[{value:"0A"},{value:"2A"},{value:"4A"},{value:"5A"},{value:"6A"},{value:"7A"},{value:"8A"},{value:"9A"},{value:"10A"},{value:"11A"},{value:"12A"},{value:"13A"},{value:"14A"},{value:"15A"},{value:"NS"}]},selectedRegimen:"",sampleType:""}},components:{MagnifyingGlassIcon:B,QrCodeIcon:z,InformationCircleIcon:U}};const o=r=>(A("data-v-c507e86b"),r=r(),R(),r),j={class:"px-5 py-5"},E={class:"flex justify-between w-full px-2 py-2 mb-2 mt-3"},Q=o(()=>e("div",{class:"flex items-center space-x-3"},[e("h3",{class:"text-2xl font-semibold"},"New viral load entry")],-1)),Y={class:"flex items-center border rounded"},G={class:"border-r px-2 p-2 bg-gray-50"},Z=o(()=>e("input",{type:"text",id:"email-address-icon",class:"px-2 block focus:border-none outline-none transition duration-150 text-sm",placeholder:"Scan barcode"},null,-1)),K={key:0},q={class:"rounded border"},J=o(()=>e("div",{class:"bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md"}," Section 1: Health Facility Information ",-1)),O={class:"w-full flex items-center px-5 space-x-3 py-5"},W={class:"w-1/2 flex flex-col space-y-2"},X=o(()=>e("label",{class:"font-medium"},"District",-1)),$={class:"w-1/2 flex flex-col space-y-2"},ee=o(()=>e("label",{class:"font-medium"},"Facility",-1)),te={class:"rounded border mt-5"},oe=o(()=>e("div",{class:"bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md"}," Section 2: Patient Information ",-1)),ne={class:"space-y-3 pb-10"},se=o(()=>e("div",{class:"w-full flex items-center px-5 space-x-3 mt-3"},[e("div",{class:"w-1/2 flex flex-col space-y-2"},[e("label",{class:"font-medium"},"Patient Surname"),e("input",{type:"text",class:"w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"})]),e("div",{class:"w-1/2 flex flex-col space-y-2"},[e("label",{class:"font-medium"},"Patient First Name"),e("input",{type:"text",class:"w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"})])],-1)),re={class:"w-full flex items-center px-5 space-x-3"},le=o(()=>e("div",{class:"w-1/2 flex flex-col space-y-2 mb-4"},[e("label",{class:"font-medium"},"Patient ID"),e("div",{id:"otp",class:"flex flex-row text-center mb-3"},[e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"first",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"second",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"third",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"fourth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"fifth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded",type:"text",id:"sixth",maxlength:"1"})])],-1)),ie={class:"w-1/2 flex flex-col space-y-2"},ae=o(()=>e("label",{class:"font-medium"},"Date of Birth",-1)),de={class:"w-full"},ce={class:"w-full flex items-center px-5 space-x-3 mt-3"},ue={class:"w-1/2 flex flex-col space-y-2"},me=o(()=>e("label",{class:"font-medium"},"Gender",-1)),pe={class:"w-1/2 flex flex-col space-y-2"},fe=o(()=>e("label",{class:"font-medium"},"Patient/Gurdian Phone",-1)),xe={class:"w-full flex items-center px-5 space-x-3 mt-3"},he={class:"w-1/2 flex flex-col space-y-2"},_e=o(()=>e("label",{class:"font-medium"},"Date Sample Drawn",-1)),ye={class:"w-full"},be={key:1},ge={class:"rounded border"},ve=o(()=>e("div",{class:"bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md"}," Section 3: Reason For Test ",-1)),we={class:"px-2"},ke={class:"px-2 py-2"},De=o(()=>e("label",{for:"radio-group"},"Select reason:",-1)),Fe={id:"radio-group",class:"mt-2 flex flex-col space-y-2"},Se={class:"rounded border mt-5"},Pe=o(()=>e("div",{class:"bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md"}," Section 4: Patient & Sample Details ",-1)),Ce={class:"px-2"},Ve={class:"px-2 py-2"},Ie=o(()=>e("label",{class:"font-medium"},"ART Initiation Date",-1)),Te={class:"w-72"},Me={class:"px-2 py-2"},Ae=o(()=>e("label",{class:"font-medium"},"Sample Type:",-1)),Re={id:"radio-group",class:"mt-2 flex flex-col space-y-2"},He={class:"px-2 py-2"},Ne=o(()=>e("label",{for:"radio-group",class:"mb-3 mt-2 font-medium"},"Current ART Regimen:",-1)),Be={class:"grid grid-cols-7 w-1/2 mt-2"},ze={class:"col-span-1 bg-purple-200 px-4 py-4 border-t border-b border-l border-purple-100"},Ue={class:"flex items-center"},Le=["value"],je={class:"col-span-1 bg-yellow-200 px-4 py-4 border-t border-b border-l border-yellow-100"},Ee={class:"flex items-center"},Qe=["value"],Ye={key:2},Ge={class:"rounded border mt-5"},Ze=o(()=>e("div",{class:"bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md"}," Section 5: Details of Person Collecting Sample ",-1)),Ke={class:"py-5 px-5"},qe=o(()=>e("div",{class:"w-full flex items-center space-x-3 mt-3"},[e("div",{class:"w-1/2 flex flex-col space-y-2"},[e("label",{class:"font-medium"},"Surname"),e("input",{type:"text",class:"w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"})]),e("div",{class:"w-1/2 flex flex-col space-y-2"},[e("label",{class:"font-medium"},"First Name"),e("input",{type:"text",class:"w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:border-none focus:ring-sky-500 transition duration-150"})])],-1)),Je={class:"w-full flex items-center space-x-3 mt-3"},Oe={class:"w-1/2 flex flex-col space-y-2"},We=o(()=>e("label",{class:"font-medium"},"Phone Number",-1)),Xe=o(()=>e("div",{class:"w-1/2 flex flex-col space-y-2"},[e("label",{class:"font-medium"},"HTC Provider ID"),e("div",{id:"htc_provider_id",class:"flex flex-row text-center mb-3"},[e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"first",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"second",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"third",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"fourth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"fifth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"sixth",maxlength:"1"}),e("input",{class:"mr-2 border h-10 w-10 text-center form-control rounded focus:ring-2 focus:outline-none focus:ring-sky-500 focus:border-none",type:"text",id:"sixth",maxlength:"1"})])],-1)),$e={key:3},et={class:"rounded border mt-5"},tt=o(()=>e("div",{class:"bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md"}," Section 6: Confirmation ",-1)),ot={class:"px-5 py-5"},nt={class:"bg-orange-100 text-orange-500 font-medium flex items-center px-2 py-2 rounded"},st=o(()=>e("div",null,[e("div")],-1));function rt(r,s,lt,it,t,at){const D=C,F=p("QrCodeIcon"),x=V,h=p("datepicker"),g=p("CorePhonePicker"),S=p("InformationCircleIcon"),P=I;return i(),a("div",j,[l(D,{pages:t.pages},null,8,["pages"]),e("div",E,[Q,e("div",Y,[e("div",G,[l(F,{class:"w-5 h-5"})]),Z])]),l(P,{steps:4},{default:M(({step:m})=>[m===1?(i(),a("div",K,[e("div",q,[J,e("div",null,[e("div",O,[e("div",W,[X,l(x,{items:t.districts,"model-value":t.selectedDistrict},null,8,["items","model-value"])]),e("div",$,[ee,l(x,{items:t.facilities,"model-value":t.selectedFacility},null,8,["items","model-value"])])])])]),e("div",te,[oe,e("div",ne,[se,e("div",re,[le,e("div",ie,[ae,e("div",de,[l(h,{placeholder:new Date().toDateString(),"input-class-name":"border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150","as-single":"",shortcuts:!0,modelValue:t.dateFrom,"onUpdate:modelValue":s[0]||(s[0]=n=>t.dateFrom=n),"text-input":!0,"year-range":r.dateRange,"max-date":new Date,"ignore-time-validation":!0,teleport:!0,"enable-time-picker":!1,formatter:("constants"in r?r.constants:b(y)).dateFormatter},null,8,["placeholder","modelValue","year-range","max-date","formatter"])])])]),e("div",ce,[e("div",ue,[me,l(x,{items:t.gender,"model-value":t.genderSelected},null,8,["items","model-value"])]),e("div",pe,[fe,l(g,{phone:t.gurdianPhone},null,8,["phone"])])]),e("div",xe,[e("div",he,[_e,e("div",ye,[l(h,{placeholder:new Date().toDateString(),"input-class-name":"border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150","as-single":"",shortcuts:!0,modelValue:t.dateFrom,"onUpdate:modelValue":s[1]||(s[1]=n=>t.dateFrom=n),"text-input":!0,"year-range":r.dateRange,"max-date":new Date,"ignore-time-validation":!0,teleport:!0,"enable-time-picker":!1,formatter:("constants"in r?r.constants:b(y)).dateFormatter},null,8,["placeholder","modelValue","year-range","max-date","formatter"])])])])])])])):f("",!0),m===2?(i(),a("div",be,[e("div",ge,[ve,e("div",we,[e("div",ke,[De,e("div",Fe,[e("label",null,[c(e("input",{type:"radio","onUpdate:modelValue":s[2]||(s[2]=n=>t.reasonForTest=n),value:"routine"},null,512),[[u,t.reasonForTest]]),d(" Routine ")]),e("label",null,[c(e("input",{type:"radio","onUpdate:modelValue":s[3]||(s[3]=n=>t.reasonForTest=n),value:"targeted"},null,512),[[u,t.reasonForTest]]),d(" Targeted ")]),e("label",null,[c(e("input",{type:"radio","onUpdate:modelValue":s[4]||(s[4]=n=>t.reasonForTest=n),value:"follow up after highVL"},null,512),[[u,t.reasonForTest]]),d(" Follow up after highVL ")]),e("label",null,[c(e("input",{type:"radio","onUpdate:modelValue":s[5]||(s[5]=n=>t.reasonForTest=n),value:"repeat"},null,512),[[u,t.reasonForTest]]),d(" Repeat ")])])])])]),e("div",Se,[Pe,e("div",Ce,[e("div",Ve,[Ie,e("div",Te,[l(h,{placeholder:new Date().toDateString(),"input-class-name":"border border-gray-50 rounded px-2 py-1.5 block focus:outline-none transition duration-150","as-single":"",shortcuts:!0,modelValue:t.dateFrom,"onUpdate:modelValue":s[6]||(s[6]=n=>t.dateFrom=n),"text-input":!0,"year-range":r.dateRange,"max-date":new Date,"ignore-time-validation":!0,teleport:!0,"enable-time-picker":!1,formatter:("constants"in r?r.constants:b(y)).dateFormatter},null,8,["placeholder","modelValue","year-range","max-date","formatter"])])]),e("div",Me,[Ae,e("div",Re,[e("label",null,[c(e("input",{type:"radio","onUpdate:modelValue":s[7]||(s[7]=n=>t.sampleType=n),value:"dbs"},null,512),[[u,t.sampleType]]),d(" DBS (using Capillary Tube) ")]),e("label",null,[c(e("input",{type:"radio","onUpdate:modelValue":s[8]||(s[8]=n=>t.sampleType=n),value:"plasma"},null,512),[[u,t.sampleType]]),d(" Plasma ")])])]),e("div",He,[Ne,e("div",Be,[(i(!0),a(v,null,w(t.regimens.one,n=>(i(),a("div",ze,[e("label",Ue,[c(e("input",{type:"radio","onUpdate:modelValue":s[9]||(s[9]=_=>t.selectedRegimen=_),value:n.value,class:"mr-2"},null,8,Le),[[u,t.selectedRegimen]]),d(" "+k(n.value),1)])]))),256)),(i(!0),a(v,null,w(t.regimens.two,n=>(i(),a("div",je,[e("label",Ee,[c(e("input",{type:"radio","onUpdate:modelValue":s[10]||(s[10]=_=>t.selectedRegimen=_),value:n.value,class:"mr-2"},null,8,Qe),[[u,t.selectedRegimen]]),d(" "+k(n.value),1)])]))),256))])])])])])):f("",!0),m===3?(i(),a("div",Ye,[e("div",Ge,[Ze,e("div",Ke,[qe,e("div",Je,[e("div",Oe,[We,l(g,{phone:t.gurdianPhone},null,8,["phone"])]),Xe])])])])):f("",!0),m===4?(i(),a("div",$e,[e("div",et,[tt,e("div",ot,[e("div",nt,[l(S,{class:"w-5 h-5 mr-3"}),d(" Please make sure you have entered the correct information as they appear on the EID & Viral Load Requisition Form ")]),st])])])):f("",!0)]),_:1})])}const Ft=T(L,[["render",rt],["__scopeId","data-v-c507e86b"]]);export{Ft as default};