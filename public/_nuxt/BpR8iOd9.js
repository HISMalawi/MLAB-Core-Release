import{b as p,e as h,g as o,a as I,u as y,l as T,m as i,f as t,n as l,p as V,_ as H,t as w,P as O,F,j as U,z as Y,s as R,i as B,v as N,h as J,k as Q}from"./CgCt1uig.js";import{e as M,d as W}from"./C7nrlxI_.js";import{r as K,e as P,f as D,h as ee}from"./DDP8Pd40.js";import{r as S}from"./CosnS5_S.js";import{r as z}from"./DDaZZI9g.js";import{r as Z}from"./BiLmvBTn.js";import{h as j,S as q,Y as A,G as $,V as E}from"./BBi4X6kY.js";import{a as L}from"./9jRWjONT.js";import{r as te}from"./D8JfA7oG.js";import{r as G}from"./BOxnxsxl.js";import{u as oe}from"./Kt-y9hP3.js";import{u as X}from"./DOBy1ww1.js";import{P as ne}from"./Bf5grz7u.js";import"./22U_Ornm.js";import"./q9WmgNLv.js";function se(c,n){return p(),h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[o("path",{d:"M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"})])}const ie={components:{TransitionChild:j,TransitionRoot:q,Dialog:A,DialogPanel:$,DialogTitle:E,XMarkIcon:S,PrinterIcon:z},data(){return{addIcon:K,saveIcon:Z,open:!1,loading:!1,cookie:I("token"),name:"",description:""}},methods:{async submitForm(){this.loading=!1;const c={route:P.printers,method:"POST",token:`${this.cookie}`,body:{name:this.name,description:this.description}},{data:n,error:s,pending:d}=await D(c);this.loading=d,n.value&&(y().$toast.success("Facility created successfully!"),this.$emit("update",!0),this.loading=!1,this.handleClick()),s.value&&(console.error(s.value),y().$toast.error(M),this.loading=!1)},handleClick(){this.open=!this.open}}},ae=o("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),le={class:"fixed inset-0 overflow-y-auto"},re={class:"flex min-h-full items-center justify-center p-4 text-center"},ce={class:"border-b px-3 py-3 flex items-center justify-between"},de={class:"px-5 py-5"},ue={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function me(c,n,s,d,e,r){const m=H,_=i("TransitionChild"),x=i("PrinterIcon"),b=i("DialogTitle"),k=i("XMarkIcon"),f=i("FormKit"),u=i("DialogPanel"),a=i("Dialog"),C=i("TransitionRoot");return p(),h("div",null,[o("div",null,[t(m,{click:r.handleClick,text:"Add printer",color:"primary",icon:e.addIcon},null,8,["click","icon"])]),t(C,{appear:"",show:e.open,as:"template"},{default:l(()=>[t(a,{as:"div",onClose:r.handleClick,class:"relative z-10"},{default:l(()=>[t(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[ae]),_:1}),o("div",le,[o("div",re,[t(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[t(u,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>[o("div",ce,[t(b,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:l(()=>[t(x,{class:"w-8 h-8 mr-2"}),V(" Add printer ")]),_:1}),o("button",{onClick:n[0]||(n[0]=(...g)=>r.handleClick&&r.handleClick(...g))},[t(k,{class:"w-5 h-5"})])]),t(f,{type:"form","submit-label":"Update",onSubmit:r.submitForm,actions:!1},{default:l(({value:g})=>[o("div",de,[t(f,{type:"text",label:"Name",validation:"required",modelValue:e.name,"onUpdate:modelValue":n[1]||(n[1]=v=>e.name=v)},null,8,["modelValue"]),t(f,{type:"textarea",label:"Description",validation:"required",modelValue:e.description,"onUpdate:modelValue":n[2]||(n[2]=v=>e.description=v)},null,8,["modelValue"])]),o("div",ue,[t(m,{click:()=>{},type:"submit",color:"success",icon:e.saveIcon,text:"Save chages",loading:e.loading},null,8,["icon","loading"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const pe=T(ie,[["render",me]]),he={components:{TransitionRoot:q,TransitionChild:j,Dialog:A,DialogPanel:$,DialogTitle:E,XMarkIcon:S,PrinterIcon:z},data(){return{editIcon:L,show:!1,saveIcon:Z,loading:!1,cookie:I("token")}},props:{data:{type:Object,required:!0}},methods:{async submitForm(){this.loading=!0;const c={route:`${P.printers}/${this.data.id}`,method:"PUT",token:`${this.cookie}`,body:this.data},{pending:n,error:s,data:d}=await D(c);this.loading=n,d.value&&(this.handleClick(),y().$toast.success("Printer updated successfully!"),this.loading=!1,this.$emit("update",!0)),s.value&&(y().$toast.success(M),this.handleClick(),console.error(s.value),this.loading=!1)},handleClick(){this.show=!this.show}}},fe=o("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),_e={class:"fixed inset-0 overflow-y-auto"},ge={class:"flex min-h-full items-center justify-center p-4 text-center"},ve={class:"border-b px-3 py-3 flex items-center justify-between"},ye={class:"mt-2 space-y-3"},xe={class:"w-full flex items-center px-5"},be={class:"w-full flex flex-col space-y-2"},ke={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Ce(c,n,s,d,e,r){const m=H,_=i("TransitionChild"),x=i("PrinterIcon"),b=i("DialogTitle"),k=i("XMarkIcon"),f=i("FormKit"),u=i("DialogPanel"),a=i("Dialog"),C=i("TransitionRoot");return p(),h("div",null,[t(m,{click:r.handleClick,text:"Edit",icon:e.editIcon,color:"success"},null,8,["click","icon"]),t(C,{appear:"",show:e.show,as:"template"},{default:l(()=>[t(a,{as:"div",class:"relative z-10"},{default:l(()=>[t(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[fe]),_:1}),o("div",_e,[o("div",ge,[t(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[t(u,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>[o("div",ve,[t(b,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:l(()=>[t(x,{class:"w-8 h-8 mr-2"}),V(" Edit printer ")]),_:1}),o("button",{onClick:n[0]||(n[0]=(...g)=>r.handleClick&&r.handleClick(...g))},[t(k,{class:"w-5 h-5"})])]),t(f,{type:"form","submit-label":"Update",onSubmit:r.submitForm,actions:!1},{default:l(({value:g})=>[o("div",ye,[o("div",xe,[o("div",be,[t(f,{type:"text",label:"Name",validation:"required",modelValue:s.data.name,"onUpdate:modelValue":n[1]||(n[1]=v=>s.data.name=v)},null,8,["modelValue"]),t(f,{type:"textarea",label:"Description",validation:"required",modelValue:s.data.description,"onUpdate:modelValue":n[2]||(n[2]=v=>s.data.description=v)},null,8,["modelValue"])])]),o("div",ke,[t(m,{type:"submit",click:()=>{},color:"success",loading:e.loading,icon:e.saveIcon,text:"Save changes"},null,8,["loading","icon"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const we=T(he,[["render",Ce]]),Ve={components:{TransitionRoot:q,TransitionChild:j,Dialog:A,DialogPanel:$,DialogTitle:E,XMarkIcon:S,ExclamationTriangleIcon:te},data(){return{show:!1,deleteIcon:G,loading:!1,cookie:I("token"),reason:""}},props:{data:{type:Object,required:!0}},methods:{async deleteData(c){this.loading=!0;const n={route:`${P.printers}/${c}`,method:"DELETE",token:`${this.cookie}`,body:{voided_reason:this.reason}},{data:s,error:d,pending:e}=await D(n);this.loading=e,s.value&&(this.handleClick(),y().$toast.success("Printer deleted successfully!"),this.loading=!1,this.$emit("update",!0)),d.value&&(console.error(d.value),y().$toast.error(M),this.loading=!1)},handleClick(){this.show=!this.show}}},Pe=o("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),De={class:"fixed inset-0 overflow-y-auto"},Ie={class:"flex min-h-full items-center justify-center p-4 text-center"},Te={class:"border-b px-3 py-3 flex items-center justify-between"},He={class:"mt-2 space-y-3 px-5"},Me={class:"rounded px-2 py-2"},Fe={class:"font-semibold text-red-500"},Ue={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Se(c,n,s,d,e,r){const m=H,_=i("TransitionChild"),x=i("ExclamationTriangleIcon"),b=i("DialogTitle"),k=i("XMarkIcon"),f=i("FormKit"),u=i("DialogPanel"),a=i("Dialog"),C=i("TransitionRoot");return p(),h("div",null,[t(m,{click:r.handleClick,color:"error",text:"Delete",icon:e.deleteIcon},null,8,["click","icon"]),t(C,{appear:"",show:e.show,as:"template"},{default:l(()=>[t(a,{as:"div",class:"relative z-10"},{default:l(()=>[t(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[Pe]),_:1}),o("div",De,[o("div",Ie,[t(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[t(u,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>[o("div",Te,[t(b,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:l(()=>[t(x,{class:"h-5 w-5 mr-2"}),V(" Confirm delete ")]),_:1}),o("button",{onClick:n[0]||(n[0]=(...g)=>r.handleClick&&r.handleClick(...g))},[t(k,{class:"w-5 h-5"})])]),t(f,{type:"form","submit-label":"Update",onSubmit:n[2]||(n[2]=g=>r.deleteData(s.data.id)),actions:!1},{default:l(({value:g})=>[o("div",He,[o("div",Me,[V(" Do you really want to delete "),o("span",Fe,w(s.data.name),1),V("? Note that once this action is completed, it can not be undone ")]),t(f,{type:"textarea",label:"Reason",validation:"required",modelValue:e.reason,"onUpdate:modelValue":n[1]||(n[1]=v=>e.reason=v)},null,8,["modelValue"])]),o("div",Ue,[t(m,{loading:e.loading,type:"submit",click:()=>{},color:"error",icon:e.deleteIcon,text:"Delete"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Ze=T(Ve,[["render",Se]]),je={components:{AdjustmentsHorizontalIcon:se},setup(){oe({title:`${ne.name.toUpperCase()} - Configuration`})},data(){return{moment:ee,config:["Facility","Printers"],tab:0,addIcon:K,saveIcon:Z,deleteIcon:G,editIcon:L,printersHeader:[{text:"name",value:"name"},{text:"description",value:"description"},{text:"date created",value:"date_created"},{text:"Actions",value:"actions"}],printers:new Array,facility:X(),name:"",code:"",phone:"",address:"",district:"",loading:!1,cookie:I("token"),loadingPrinters:!1}},created(){this.init(),this.loadPrinters()},methods:{init(){this.name=this.facility.details.name,this.phone=this.facility.details.phone,this.code=this.facility.details.code,this.address=this.facility.details.address,this.district=this.facility.details.district,(this._.provides[O]||this.$route).query.tab=="printers"&&(this.tab=1)},async loadPrinters(){this.loadingPrinters=!0;const c={route:P.printers,method:"GET",token:`${this.cookie}`},{data:n,error:s,pending:d}=await D(c);this.loadingPrinters=d,n.value&&(this.printers=n.value,this.loadingPrinters=!1),s.value&&(console.error(s.value),this.loadingPrinters=!1)},async submitForm(){this.loading=!1;const c={route:`${P.global}/${this.facility.details.id}`,method:"PUT",token:`${this.cookie}`,body:{name:this.name,code:this.code,address:this.address,phone:this.phone,district:this.district}},{data:n,error:s,pending:d}=await D(c);this.loading=d,n.value&&(y().$toast.success("Facility updated successfully!"),this.$emit("update",!0),this.globals(),this.loading=!1),s.value&&(console.error(s.value),y().$toast.error(M),this.loading=!1)},async globals(){const{fetchFacility:c,details:n}=X(),s={route:P.global,method:"GET",token:""},{data:d,error:e}=await D(s);e.value&&console.error(e.value),d.value&&c(d.value)}}},qe="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.17647%208.5C7.42215%208.5%206%209.93908%206%2011.7143V31C6%2032.7752%207.42215%2034.2143%209.17647%2034.2143H19.7646V36.3572H15.5293V38.5H32.4705V36.3572H28.2353V34.2143H38.8235C40.5778%2034.2143%2042%2032.7752%2042%2031V11.7143C42%209.93908%2040.5778%208.5%2038.8235%208.5H9.17647ZM21.8823%2036.3572V34.2143H26.1177V36.3572H21.8823ZM13.4119%2012.7858H15.5296V14.9286H17.6475V17.0715H15.5296V19.2143H13.4119V17.0715H11.2945L11.2945%2014.9286H13.4119V12.7858ZM11.2939%2023.5001C11.2939%2022.9083%2011.768%2022.4286%2012.3528%2022.4286H16.5881C17.1728%2022.4286%2017.6469%2022.9083%2017.6469%2023.5001V27.7858C17.6469%2028.3775%2017.1728%2028.8572%2016.5881%2028.8572H12.3528C11.768%2028.8572%2011.2939%2028.3775%2011.2939%2027.7858V23.5001ZM20.8234%2013.8572C20.8234%2013.2655%2021.2974%2012.7858%2021.8822%2012.7858H26.1175C26.7023%2012.7858%2027.1763%2013.2655%2027.1763%2013.8572V18.1429C27.1763%2018.7346%2026.7023%2019.2143%2026.1175%2019.2143H21.8822C21.2974%2019.2143%2020.8234%2018.7346%2020.8234%2018.1429V13.8572ZM20.8232%2023.5001C20.8232%2022.9083%2021.2973%2022.4286%2021.8821%2022.4286H26.1174C26.7021%2022.4286%2027.1762%2022.9083%2027.1762%2023.5001V27.7858C27.1762%2028.3775%2026.7021%2028.8572%2026.1174%2028.8572H21.8821C21.2973%2028.8572%2020.8232%2028.3775%2020.8232%2027.7858V23.5001ZM30.3527%2013.8572C30.3527%2013.2655%2030.8268%2012.7858%2031.4116%2012.7858H35.6469C36.2316%2012.7858%2036.7057%2013.2655%2036.7057%2013.8572V18.1429C36.7057%2018.7346%2036.2316%2019.2143%2035.6469%2019.2143H31.4116C30.8268%2019.2143%2030.3527%2018.7346%2030.3527%2018.1429V13.8572Z'%20fill='%23333333'/%3e%3c/svg%3e",Ae={class:"px-5 py-5"},$e=o("h3",{class:"text-2xl font-semibold flex items-cennter"},[o("img",{src:qe,class:"w-8 h-8 mr-2"}),V(" IBLIS Configuration ")],-1),Ee={class:"mt-5 font-medium text-center text-gray-500 bg-gray-50"},Re={class:"flex flex-wrap -mb-px"},Be=["onClick"],Ne={class:"py-5"},Xe={key:0},Ke={class:"grid grid-cols-3 gap-4"},ze={class:"mt-4"},Le={key:1},Ge={class:"flex items-center justify-end mb-5"},Oe={class:"flex items-center mx-auto justify-center py-20"},Ye={class:"relative overflow-x-auto"},Je={class:"w-full text-left border rounded-lg"},Qe={class:"uppercase bg-gray-100"},We={class:"px-2 py-2 font-normal"},et={class:"px-2 py-2"},tt={class:"px-2 py-2"},ot={class:"flex items-center space-x-2"};function nt(c,n,s,d,e,r){const m=i("FormKit"),_=H,x=pe,b=Q,k=we,f=Ze;return p(),h("div",Ae,[$e,o("div",Ee,[o("ul",Re,[(p(!0),h(F,null,U(e.config,(u,a)=>(p(),h("li",{onClick:C=>e.tab=a,class:"mr-2",key:a},[o("a",{href:"#",class:Y(e.tab==a?"inline-block py-2 px-4 text-white bg-sky-500 active dark:text-sky-500 dark:border-sky-500":"inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-sky-500 hover:border-sky-500")},w(u),3)],8,Be))),128))])]),o("div",Ne,[e.tab==0?(p(),h("div",Xe,[t(m,{type:"form","submit-label":"Update",onSubmit:r.submitForm,actions:!1},{default:l(({value:u})=>[o("div",Ke,[t(m,{label:"Name",type:"text",modelValue:e.name,"onUpdate:modelValue":n[0]||(n[0]=a=>e.name=a)},null,8,["modelValue"]),t(m,{label:"Code",type:"text",modelValue:e.code,"onUpdate:modelValue":n[1]||(n[1]=a=>e.code=a)},null,8,["modelValue"]),t(m,{label:"District",type:"text",modelValue:e.district,"onUpdate:modelValue":n[2]||(n[2]=a=>e.district=a)},null,8,["modelValue"]),t(m,{label:"Address",type:"text",modelValue:e.address,"onUpdate:modelValue":n[3]||(n[3]=a=>e.address=a)},null,8,["modelValue"]),t(m,{label:"Phone Number",type:"text",modelValue:e.phone,"onUpdate:modelValue":n[4]||(n[4]=a=>e.phone=a)},null,8,["modelValue"])]),o("div",ze,[t(_,{click:()=>{},type:"submit",loading:e.loading,icon:e.saveIcon,text:"Save Changes",color:"success"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])])):R("",!0),e.tab==1?(p(),h("div",Le,[o("div",Ge,[t(x,{onUpdate:r.loadPrinters},null,8,["onUpdate"])]),B(o("div",Oe,[t(b,{loading:e.loadingPrinters},null,8,["loading"])],512),[[N,e.loadingPrinters]]),B(o("div",Ye,[o("table",Je,[o("thead",Qe,[o("tr",null,[(p(!0),h(F,null,U(e.printersHeader,(u,a)=>(p(),h("th",{class:"uppercase py-2 px-2",key:a},w(u.text),1))),128))])]),o("tbody",null,[(p(!0),h(F,null,U(e.printers,(u,a)=>(p(),h("tr",{class:"bg-white border-b",key:a},[o("th",We,w(u.name),1),o("td",et,w(u.description),1),o("td",tt,w(e.moment(u.created_date).format("dateFormat"in c?c.dateFormat:J(W))),1),o("td",null,[o("div",ot,[t(k,{data:u,onUpdate:r.loadPrinters},null,8,["data","onUpdate"]),t(f,{data:u,onUpdate:r.loadPrinters},null,8,["data","onUpdate"])])])]))),128))])])],512),[[N,!e.loadingPrinters]])])):R("",!0)])])}const yt=T(je,[["render",nt]]);export{yt as default};