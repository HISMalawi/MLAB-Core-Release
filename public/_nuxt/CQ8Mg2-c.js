import{_ as ie}from"./Db3TL93P.js";import{S as U,p as j,Y as M,G as N,V as R,q as O,s as te,a as z,l as A,m as q,u as T,E as S,x as W,y as _,b as D,e as V,g as e,f as t,z as r,j as P,_ as G,D as se,t as w,d as Y,r as f,h as s,A as re,F as de,k as ce,C as ue,B as me,H as Z,a0 as oe,w as pe,L,K as X}from"./CexOikvH.js";import{_ as K}from"./DpkAgBRk.js";import{r as J}from"./CyIftPXO.js";import{r as ne}from"./Iqk1eJ9m.js";import{_ as Q}from"./DtWROlmf.js";import{r as fe}from"./Td6UNDH4.js";import{r as _e}from"./BpxQI5Tt.js";import{_ as ve}from"./SW4eMder.js";import{r as ee}from"./Hqy8rHTQ.js";import{_ as ge}from"./BFgFNRB8.js";import{u as H}from"./C78fMFb2.js";import{P as ye}from"./DwOgcnpE.js";import{u as xe}from"./NgWHZfoB.js";import"./Cr2uUJHO.js";import"./Cg8mjwS6.js";import"./CCBrn6hi.js";import"./ykDvGVMM.js";import"./8eNCHlT3.js";const he={components:{TransitionRoot:U,TransitionChild:j,Dialog:M,DialogPanel:N,DialogTitle:R,XMarkIcon:O},data(){return{addIcon:te,saveIcon:J,clearIcon:ne,open:!1,loading:!1,equipmentDetails:{name:"",description:"",supported_tests:new Array},instruments:new Array,testTypes:new Array,supportedTests:new Array,supportedTest:new Array,cookie:z("token")}},methods:{adjustVisibility(){this.open=!this.open},async loadTests(){this.adjustVisibility();const k={route:A.testTypes,method:"GET",token:`${this.cookie}`},{data:l,pending:m,error:v}=await q(k);l.value&&(this.testTypes=l.value.test_types,l.value.test_types.map(n=>{this.supportedTests.push(n.name)})),v.value&&console.error(v.value)},async submitForm(){this.loading=!0;let k=new Array;this.testTypes.map(i=>{this.supportedTest.map(d=>{i.name===d&&k.push(i.id)})}),this.equipmentDetails.supported_tests=k;const l={route:A.instrument.create,method:"POST",token:`${this.cookie}`,body:this.equipmentDetails},{data:m,pending:v,error:n}=await q(l);this.loading=v,m.value&&(this.closeForm(),T().$toast.success("Instrument added successfully!"),this.$emit("action-completed",[])),n.value&&(n.value.data.error=="Validation failed: Name has already been taken"?T().$toast.error("Name has already been taken"):T().$toast.error(S),this.loading=!1,console.error(n.value))},closeForm(){this.open=!1,this.equipmentDetails={name:"",description:"",supported_tests:new Array},this.supportedTest=new Array}}},be={class:"fixed inset-0 overflow-y-auto"},we={class:"flex min-h-full items-center justify-center p-4 text-center"},ke={class:"border-b px-3 py-3 flex items-center justify-between"},$e={class:"mt-2 space-y-3 px-5 py-5"},Ce={class:"w-full grid grid-cols-1 gap-1"},De={class:"w-full grid grid-cols-1 gap-1"},Te={class:"w-full flex flex-col space-y-2 pb-40"},Ie={class:"mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Ve(k,l,m,v,n,i){const d=G,h=_("TransitionChild"),p=_("DialogTitle"),o=_("XMarkIcon"),g=_("FormKit"),c=_("multi-select"),$=K,y=_("DialogPanel"),u=_("Dialog"),x=_("TransitionRoot");return D(),V("div",null,[e("div",null,[t(d,{text:"Add instrument",color:"primary",icon:n.addIcon,click:i.loadTests},null,8,["icon","click"])]),t(x,{appear:"",show:n.open,as:"template"},{default:r(()=>[t(u,{as:"div",onClose:i.closeForm,class:"relative z-10"},{default:r(()=>[t(h,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>l[4]||(l[4]=[e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),e("div",be,[e("div",we,[t(h,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:r(()=>[t(y,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:r(()=>[e("div",ke,[t(p,{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:r(()=>l[5]||(l[5]=[e("img",{src:Q,class:"w-8 h-8 mr-2"},null,-1),P(" Add Instrument ")])),_:1}),e("button",{onClick:l[0]||(l[0]=(...a)=>i.adjustVisibility&&i.adjustVisibility(...a))},[t(o,{class:"w-5 h-5"})])]),t(g,{type:"form",id:"patientForm","submit-label":"Update",onSubmit:i.submitForm,actions:!1},{default:r(()=>[e("div",$e,[e("div",Ce,[t(g,{type:"text",label:"Name",modelValue:n.equipmentDetails.name,"onUpdate:modelValue":l[1]||(l[1]=a=>n.equipmentDetails.name=a),class:"w-full",validation:"required|text"},null,8,["modelValue"])]),e("div",De,[t(g,{type:"textarea",modelValue:n.equipmentDetails.description,"onUpdate:modelValue":l[2]||(l[2]=a=>n.equipmentDetails.description=a),label:"Description",validation:"required"},null,8,["modelValue"])]),e("div",Te,[l[6]||(l[6]=e("label",{class:"font-medium"},"Supported tests",-1)),t(c,{style:{"--ms-max-height":"none !important"},modelValue:n.supportedTest,"onUpdate:modelValue":l[3]||(l[3]=a=>n.supportedTest=a),options:n.supportedTests,mode:"tags",searchable:!0,required:!0,clear:"",class:"focus:ring-none fcus:border-none focus:outline-none multiselect-green"},null,8,["modelValue","options"])])]),e("div",Ie,[t($,{type:"button",text:"Close",click:()=>{i.closeForm}},null,8,["click"]),t(d,{type:"submit",color:"success",icon:n.saveIcon,click:()=>{},text:"Save changes",loading:n.loading},null,8,["icon","loading"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const Ae=W(he,[["render",Ve]]),qe={components:{ExclamationTriangleIcon:se},props:{text:{required:!0,type:String}}},Pe={class:"flex items-center space-x-3 rounded px-5 py-5 bg-red-200"},je={class:"text text-red-500"};function Ee(k,l,m,v,n,i){const d=_("ExclamationTriangleIcon");return D(),V("div",Pe,[t(d,{class:"w-5 h-5 text-red-500"}),e("p",je,w(m.text),1)])}const Fe=W(qe,[["render",Ee]]),Se={components:{TransitionRoot:U,TransitionChild:j,Dialog:M,DialogPanel:N,DialogTitle:R,XMarkIcon:O,UserIcon:fe},data(){return{open:!1,driverIcon:_e,addIcon:te,saveIcon:J,clearIcon:ne}},methods:{handleClick(){this.open=!this.open}}},Be={class:"fixed inset-0 overflow-y-auto"},Ue={class:"flex min-h-full items-center justify-center p-4 text-center"},Me={class:"border-b px-3 py-3 flex items-center justify-between"},Ne={class:"mt-2 space-y-3 px-5"},Re={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Oe(k,l,m,v,n,i){const d=G,h=_("TransitionChild"),p=_("DialogTitle"),o=_("XMarkIcon"),g=Fe,c=K,$=_("DialogPanel"),y=_("Dialog"),u=_("TransitionRoot");return D(),V("div",null,[e("div",null,[t(d,{disabled:!0,click:i.handleClick,text:"New driver",color:"warning",icon:n.driverIcon},null,8,["click","icon"])]),t(u,{appear:"",show:n.open,as:"template"},{default:r(()=>[t(y,{as:"div",onClose:i.handleClick,class:"relative z-10"},{default:r(()=>[t(h,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>l[1]||(l[1]=[e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),e("div",Be,[e("div",Ue,[t(h,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:r(()=>[t($,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:r(()=>[e("div",Me,[t(p,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:r(()=>l[2]||(l[2]=[P(" Add new equipment drivers ")])),_:1}),e("button",{onClick:l[0]||(l[0]=(...x)=>i.handleClick&&i.handleClick(...x))},[t(o,{class:"w-5 h-5"})])]),e("div",Ne,[t(g,{text:"Warning: Do not install plugins from untrusted sources!"}),l[3]||(l[3]=e("div",{class:"flex items-center justify-center w-full"},[e("label",{for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100"},[e("div",{class:"flex flex-col items-center justify-center pt-5 pb-6"},[e("svg",{"aria-hidden":"true",class:"w-10 h-10 mb-3 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})]),e("p",{class:"mb-2 text-sm text-gray-500"},[e("span",{class:"font-semibold"},"Click to upload"),P(" or drag and drop")]),e("p",{class:"text-xs text-gray-500"},"EXE, ZIP, TG (Max 500MB)")]),e("input",{id:"dropzone-file",type:"file",class:"hidden"})])],-1))]),e("div",Re,[t(c,{text:"Dismiss"}),t(d,{click:i.handleClick,icon:n.saveIcon,text:"Save"},null,8,["click","icon"])])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const ze=W(Se,[["render",Oe]]),Ge={class:"fixed inset-0 overflow-y-auto"},Ke={class:"flex min-h-full items-center justify-center p-4 text-center"},Le={class:"border-b px-3 py-3 flex items-center justify-between"},Xe={class:"mt-2 space-y-3 px-5 py-5"},He={class:"w-full grid grid-cols-1 gap-1"},Ye={class:"w-full grid grid-cols-1 gap-1"},We={class:"w-full grid grid-cols-1 gap-1"},Ze={class:"w-full grid grid-cols-1 gap-1"},Je={class:"w-full grid grid-cols-1 gap-1"},Qe={class:"w-full grid grid-cols-1 gap-1"},et={class:"mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t"},tt=Y({__name:"index",props:{id:{}},setup(k){const l=k,m=f(!1),v=f(!1),n=f({name:"",description:"",ip_address:"",hostname:"",supported_tests:"",created_date:""}),i=z("token"),d=async()=>{v.value=!0;const p={route:`${A.instrument.show}/${l.id}`,method:"GET",token:`${i.value}`},o=await q(p);o.data.value&&(n.value=o.data.value,m.value=!0),v.value=!1,o.error.value&&(v.value=!1,T().$toast.error(`${S}`))},h=()=>m.value=!m.value;return(p,o)=>{const g=G,c=K,$=_("FormKit");return D(),V("div",null,[e("div",null,[t(g,{text:"View",color:"success",icon:s(re),click:d},null,8,["icon"])]),t(s(U),{appear:"",show:s(m),as:"template"},{default:r(()=>[t(s(M),{as:"div",onClose:h,class:"relative z-10"},{default:r(()=>[t(s(j),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>o[0]||(o[0]=[e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),e("div",Ge,[e("div",Ke,[t(s(j),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:r(()=>[t(s(N),{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:r(()=>[e("div",Le,[t(s(R),{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:r(()=>o[1]||(o[1]=[e("img",{src:Q,class:"w-8 h-8 mr-2"},null,-1),P(" Instrument Details ")])),_:1}),e("button",{onClick:h},[t(s(O),{class:"w-5 h-5"})])]),t($,{type:"form",id:"patientForm","submit-label":"Update",actions:!1},{default:r(()=>[e("div",Xe,[e("div",He,[o[2]||(o[2]=e("label",{class:"font-semibold text-lg"},w("Name"),-1)),e("p",null,w(s(n).name),1)]),e("div",Ye,[o[3]||(o[3]=e("label",{class:"font-semibold text-lg"},w("Host Name"),-1)),e("p",null,w(s(n).hostname??"--"),1)]),e("div",We,[o[4]||(o[4]=e("label",{class:"font-semibold text-lg"},w("IP Address"),-1)),e("p",null,w(s(n).ip_address??"--"),1)]),e("div",Ze,[o[5]||(o[5]=e("label",{class:"font-semibold text-lg"},w("Can Perform"),-1)),(D(!0),V(de,null,ce(s(n).supported_tests,(y,u)=>(D(),V("p",{key:u},w(y.name.charAt(0).toUpperCase()+y.name.slice(1)),1))),128))]),e("div",Je,[o[6]||(o[6]=e("label",{class:"font-semibold text-lg"},w("Registration Date"),-1)),e("p",null,w(s(ue)(s(n).created_date).format("DD/MMM/YYYY")),1)]),e("div",Qe,[o[7]||(o[7]=e("label",{class:"font-semibold text-lg"},w("Equiment Description"),-1)),e("p",null,w(s(n).description??"--"),1)])]),e("div",et,[t(c,{type:"button",click:h,text:"Close"})])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}}}),st={class:"fixed inset-0 overflow-y-auto"},ot={class:"flex min-h-full items-center justify-center p-4 text-center"},nt={class:"border-b px-3 py-3 flex items-center justify-between"},at={class:"mt-2 space-y-3 px-5 py-5"},lt={class:"w-full grid grid-cols-1 gap-1"},it={class:"w-full grid grid-cols-1 gap-1"},rt={class:"w-full grid grid-cols-1"},dt={class:"w-full grid grid-cols-1 gap-1"},ct={class:"w-full flex flex-col space-y-2 pb-40"},ut={class:"mt-3 justify-end flex items-center space-x-3 px-3 py-2 border-t"},mt=Y({__name:"index",props:{id:{}},emits:["action-completed"],setup(k,{emit:l}){const m=k,v=l,n=f(!1),i=f(!1),d=f([]),h=f([]),p=f([]),o=f({name:"",description:"",ip_address:"",hostname:"",created_date:"",supported_tests:new Array}),g=z("token"),c=async()=>{const x={route:`${A.testTypes}`,method:"GET",token:`${g.value}`},a=await q(x);a.data.value&&(d.value=a.data.value.test_types,d.value.map(b=>{h.value.push(b.name)})),i.value=!1,a.error.value&&console.error(a.error.value)},$=async()=>{i.value=!0,p.value=new Array,await c();const x={route:`${A.instrument.edit}/${m.id}`,method:"GET",token:`${g.value}`},a=await q(x);a.data.value&&(o.value=a.data.value,n.value=!0,a.data.value.supported_tests.map(b=>{p.value.push(b.name)}),console.log(o.value)),i.value=!1,a.error.value&&(i.value=!1,T().$toast.error(`${S}`))},y=()=>n.value=!n.value,u=async()=>{i.value=!0;let x=new Array;d.value.map(E=>{p.value.map(C=>{E.name==C&&x.push(E.id.toString())})}),o.value.supported_tests=x;const a={route:`${A.instrument.update}/${m.id}`,method:"PATCH",token:g.value,body:o.value},{data:b,pending:I,error:B}=await q(a);i.value=I,b.value&&(y(),T().$toast.success("Instrument details updated successfully!"),v("action-completed",[])),B.value&&T().$toast.error(`${S}`),i.value=!1};return(x,a)=>{const b=G,I=_("FormKit"),B=_("multi-select"),E=K;return D(),V("div",null,[e("div",null,[t(b,{text:"Edit",color:"primary",icon:s(me),click:$},null,8,["icon"])]),t(s(U),{appear:"",show:s(n),as:"template"},{default:r(()=>[t(s(M),{as:"div",onClose:y,class:"relative z-10"},{default:r(()=>[t(s(j),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>a[5]||(a[5]=[e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),e("div",st,[e("div",ot,[t(s(j),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:r(()=>[t(s(N),{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:r(()=>[e("div",nt,[t(s(R),{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:r(()=>a[6]||(a[6]=[e("img",{src:Q,class:"w-8 h-8 mr-2"},null,-1),P(" Edit Instrument Details ")])),_:1}),e("button",{onClick:y},[t(s(O),{class:"w-5 h-5"})])]),t(I,{type:"form",id:"patientForm","submit-label":"Update",onSubmit:u,actions:!1},{default:r(()=>[e("div",at,[e("div",lt,[t(I,{type:"text",label:"Name",modelValue:s(o).name,"onUpdate:modelValue":a[0]||(a[0]=C=>s(o).name=C),class:"w-full",validation:"required|text"},null,8,["modelValue"])]),e("div",it,[t(I,{type:"text",label:"Host Name",modelValue:s(o).hostname,"onUpdate:modelValue":a[1]||(a[1]=C=>s(o).hostname=C),class:"w-full",validation:"required|text"},null,8,["modelValue"])]),e("div",rt,[t(I,{type:"text",label:"IP Address",modelValue:s(o).ip_address,"onUpdate:modelValue":a[2]||(a[2]=C=>s(o).ip_address=C),validation:[["required"],["matches",/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i]]},null,8,["modelValue"])]),e("div",dt,[t(I,{type:"textarea",modelValue:s(o).description,"onUpdate:modelValue":a[3]||(a[3]=C=>s(o).description=C),label:"Description",validation:"required"},null,8,["modelValue"])]),e("div",ct,[a[7]||(a[7]=e("label",{class:"font-medium"},"Supported tests",-1)),t(B,{style:{"--ms-max-height":"none !important"},modelValue:s(p),"onUpdate:modelValue":a[4]||(a[4]=C=>Z(p)?p.value=C:null),options:s(h),mode:"tags",searchable:!0,required:!0,clear:"",class:"focus:ring-none fcus:border-none focus:outline-none multiselect-green"},null,8,["modelValue","options"])])]),e("div",ut,[t(E,{type:"button",click:y,text:"Close"}),t(b,{type:"submit",color:"success",icon:s(J),click:()=>{},text:"Save changes",loading:s(i)},null,8,["icon","loading"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}}}),pt={class:"fixed inset-0 overflow-y-auto"},ft={class:"flex min-h-full items-center justify-center p-4 text-center"},_t={class:"border-b px-3 py-3 flex items-center justify-between"},vt={class:"mt-2 space-y-3 px-5"},gt={class:"text-red-500"},yt={class:"mt-2 space-y-3 px-5 py-5"},xt={class:"w-full grid grid-cols-1 gap-1"},ht={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t bg-gray-50"},bt=Y({__name:"index",props:{id:{},name:{}},emits:["action-completed"],setup(k,{emit:l}){const m=k,v=l,n=f(!1),i=f(!1),d=f(""),h=z("token"),p=()=>{n.value=!n.value,d.value="",i.value=!1},o=async()=>{i.value=!0;const g={route:oe(`${A.instrument.delete}/${m.id}`,{retired_reason:d.value}),method:"DELETE",token:h.value},{data:c,pending:$,error:y}=await q(g);i.value=$,c.value&&(p(),T().$toast.success("Instrument deleted successfully!"),v("action-completed",[])),y.value&&(T().$toast.error(`${S}`),i.value=!1)};return(g,c)=>{const $=G,y=_("FormKit"),u=K;return D(),V("div",null,[t($,{click:p,color:"error",text:"Delete",icon:s(ee)},null,8,["icon"]),t(s(U),{appear:"",show:s(n),as:"template"},{default:r(()=>[t(s(M),{as:"div",class:"relative z-10"},{default:r(()=>[t(s(j),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>c[1]||(c[1]=[e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),e("div",pt,[e("div",ft,[t(s(j),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:r(()=>[t(s(N),{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:r(()=>[e("div",_t,[t(s(R),{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:r(()=>[t(s(se),{class:"h-5 w-5 mr-2"}),c[2]||(c[2]=P(" Confirm delete "))]),_:1}),e("button",{onClick:p},[t(s(O),{class:"w-5 h-5"})])]),e("div",vt,[c[3]||(c[3]=P(" Do you really want to delete ")),e("strong",gt,w(m.name),1),c[4]||(c[4]=P(" ? Note that once this action is completed, it can not be undone "))]),t(y,{type:"form",id:"patientForm","submit-label":"Update",onSubmit:o,actions:!1},{default:r(()=>[e("div",yt,[e("div",xt,[t(y,{type:"textarea",modelValue:s(d),"onUpdate:modelValue":c[0]||(c[0]=x=>Z(d)?d.value=x:null),label:"Reason",validation:"required"},null,8,["modelValue"])])]),e("div",ht,[t(u,{type:"button",text:"Cancel",click:p}),t($,{type:"submit",color:"error",text:"Delete",icon:s(ee),click:()=>{},loading:s(i)},null,8,["icon","loading"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}}}),wt={class:"py-5 px-5"},kt={class:"flex items-center justify-between py-5"},$t={class:"text-2xl font-semibold"},Ct={class:"flex items-center space-x-3"},Dt={class:"flex justify-end w-full px-2 py-2 mb-2"},Tt={class:"py-2 flex items-center space-x-2"},Xt=Y({__name:"instruments",setup(k){xe({title:`${ye.name.toUpperCase()} - Instruments`});const l=f(0),m=f(!1),v=f([]),n=z("token"),i=f("List of Instruments"),d=f(""),h=f([{name:"Home",link:"/home"},{name:"Lab Configuration",link:"#"}]),p=f([{text:"Name",value:"name",sortable:!0},{text:"IP Address",value:"ip_address"},{text:"Hostname",value:"hostname"},{text:"Actions",value:"actions",width:18}]),o=f({page:1,rowsPerPage:25,sortBy:"name"}),g=async()=>c(),c=async()=>{m.value=!0;const{page:u,rowsPerPage:x}=o.value,a={route:oe(A.instrument.index,{page:u,page_size:x,search:d.value}),method:"GET",token:`${n.value}`},b=await q(a);b.data.value&&(v.value=b.data.value.data,l.value=b.data.value.total),m.value=!1,b.error.value&&(m.value=!1,T().$toast.error(`${S}`))},$=u=>{d.value=u,c()},y=u=>o.value=u;return c(),pe(o,()=>c()),(u,x)=>{const a=ie,b=Ae,I=ze,B=ve,E=tt,C=mt,ae=bt,le=ge;return D(),V("div",wt,[t(a,{pages:s(h)},null,8,["pages"]),e("div",kt,[e("h3",$t,w(s(i)),1),e("div",Ct,[("usePermissions"in u?u.usePermissions:s(H))().can.manage("lab_configurations")?(D(),L(b,{key:0,onActionCompleted:g})):X("",!0),("usePermissions"in u?u.usePermissions:s(H))().can.manage("lab_configurations")?(D(),L(I,{key:1})):X("",!0)])]),e("div",Dt,[("usePermissions"in u?u.usePermissions:s(H))().can.manage("lab_configurations")?(D(),L(B,{key:0,search:s(d),"onUpdate:search":x[0]||(x[0]=F=>Z(d)?d.value=F:null),onUpdate:$},null,8,["search"])):X("",!0)]),("usePermissions"in u?u.usePermissions:s(H))().can.manage("lab_configurations")?(D(),L(le,{key:0,headers:s(p),data:s(v),serverOptions:s(o),loading:s(m),serverItemsLength:s(l),onUpdate:y},{actions:r(({item:F})=>[e("div",Tt,[t(E,{id:F.id},null,8,["id"]),t(C,{id:F.id,onActionCompleted:g},null,8,["id"]),t(ae,{id:F.id,name:F.name,onActionCompleted:g},null,8,["id","name"])])]),_:1},8,["headers","data","serverOptions","loading","serverItemsLength"])):X("",!0)])}}});export{Xt as default};