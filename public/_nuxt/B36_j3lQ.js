import{b as p,e as f,g as n,p as A,S,Y as E,G as R,V as q,q as Z,M as X,s as O,a as P,l as V,m as D,u as y,E as I,x as M,y as i,f as o,z as l,j as T,_ as H,B as z,D as L,t as w,C as Y,P as J,F,k as U,N as Q,K as $,i as B,v as N,h as W,O as ee,n as te}from"./BomcfpdA.js";import{r as j}from"./D94jxSfK.js";import{r as G}from"./Bebq7u_r.js";import{u as K}from"./YC8-LGBZ.js";import{P as oe}from"./WDQKvhhq.js";import{u as ne}from"./BjPGKtCZ.js";function se(d,e){return p(),f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[n("path",{d:"M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"})])}const ie={components:{TransitionChild:A,TransitionRoot:S,Dialog:E,DialogPanel:R,DialogTitle:q,XMarkIcon:Z,PrinterIcon:X},data(){return{addIcon:O,saveIcon:j,open:!1,loading:!1,cookie:P("token"),name:"",description:""}},methods:{async submitForm(){this.loading=!1;const d={route:V.printers,method:"POST",token:`${this.cookie}`,body:{name:this.name,description:this.description}},{data:e,error:s,pending:c}=await D(d);this.loading=c,e.value&&(y().$toast.success("Facility created successfully!"),this.$emit("update",!0),this.loading=!1,this.handleClick()),s.value&&(console.error(s.value),y().$toast.error(I),this.loading=!1)},handleClick(){this.open=!this.open}}},ae={class:"fixed inset-0 overflow-y-auto"},le={class:"flex min-h-full items-center justify-center p-4 text-center"},re={class:"border-b px-3 py-3 flex items-center justify-between"},de={class:"px-5 py-5"},ce={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function ue(d,e,s,c,t,r){const m=H,_=i("TransitionChild"),x=i("PrinterIcon"),b=i("DialogTitle"),k=i("XMarkIcon"),h=i("FormKit"),u=i("DialogPanel"),a=i("Dialog"),C=i("TransitionRoot");return p(),f("div",null,[n("div",null,[o(m,{click:r.handleClick,text:"Add printer",color:"primary",icon:t.addIcon},null,8,["click","icon"])]),o(C,{appear:"",show:t.open,as:"template"},{default:l(()=>[o(a,{as:"div",onClose:r.handleClick,class:"relative z-10"},{default:l(()=>[o(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>e[3]||(e[3]=[n("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),n("div",ae,[n("div",le,[o(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[o(u,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>[n("div",re,[o(b,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:l(()=>[o(x,{class:"w-8 h-8 mr-2"}),e[4]||(e[4]=T(" Add printer "))]),_:1}),n("button",{onClick:e[0]||(e[0]=(...g)=>r.handleClick&&r.handleClick(...g))},[o(k,{class:"w-5 h-5"})])]),o(h,{type:"form","submit-label":"Update",onSubmit:r.submitForm,actions:!1},{default:l(({value:g})=>[n("div",de,[o(h,{type:"text",label:"Name",validation:"required",modelValue:t.name,"onUpdate:modelValue":e[1]||(e[1]=v=>t.name=v)},null,8,["modelValue"]),o(h,{type:"textarea",label:"Description",validation:"required",modelValue:t.description,"onUpdate:modelValue":e[2]||(e[2]=v=>t.description=v)},null,8,["modelValue"])]),n("div",ce,[o(m,{click:()=>{},type:"submit",color:"success",icon:t.saveIcon,text:"Save chages",loading:t.loading},null,8,["icon","loading"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const me=M(ie,[["render",ue]]),pe={components:{TransitionRoot:S,TransitionChild:A,Dialog:E,DialogPanel:R,DialogTitle:q,XMarkIcon:Z,PrinterIcon:X},data(){return{editIcon:z,show:!1,saveIcon:j,loading:!1,cookie:P("token")}},props:{data:{type:Object,required:!0}},methods:{async submitForm(){this.loading=!0;const d={route:`${V.printers}/${this.data.id}`,method:"PUT",token:`${this.cookie}`,body:this.data},{pending:e,error:s,data:c}=await D(d);this.loading=e,c.value&&(this.handleClick(),y().$toast.success("Printer updated successfully!"),this.loading=!1,this.$emit("update",!0)),s.value&&(y().$toast.success(I),this.handleClick(),console.error(s.value),this.loading=!1)},handleClick(){this.show=!this.show}}},fe={class:"fixed inset-0 overflow-y-auto"},he={class:"flex min-h-full items-center justify-center p-4 text-center"},_e={class:"border-b px-3 py-3 flex items-center justify-between"},ge={class:"mt-2 space-y-3"},ve={class:"w-full flex items-center px-5"},ye={class:"w-full flex flex-col space-y-2"},xe={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function be(d,e,s,c,t,r){const m=H,_=i("TransitionChild"),x=i("PrinterIcon"),b=i("DialogTitle"),k=i("XMarkIcon"),h=i("FormKit"),u=i("DialogPanel"),a=i("Dialog"),C=i("TransitionRoot");return p(),f("div",null,[o(m,{click:r.handleClick,text:"Edit",icon:t.editIcon,color:"success"},null,8,["click","icon"]),o(C,{appear:"",show:t.show,as:"template"},{default:l(()=>[o(a,{as:"div",class:"relative z-10"},{default:l(()=>[o(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>e[3]||(e[3]=[n("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),n("div",fe,[n("div",he,[o(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[o(u,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>[n("div",_e,[o(b,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:l(()=>[o(x,{class:"w-8 h-8 mr-2"}),e[4]||(e[4]=T(" Edit printer "))]),_:1}),n("button",{onClick:e[0]||(e[0]=(...g)=>r.handleClick&&r.handleClick(...g))},[o(k,{class:"w-5 h-5"})])]),o(h,{type:"form","submit-label":"Update",onSubmit:r.submitForm,actions:!1},{default:l(({value:g})=>[n("div",ge,[n("div",ve,[n("div",ye,[o(h,{type:"text",label:"Name",validation:"required",modelValue:s.data.name,"onUpdate:modelValue":e[1]||(e[1]=v=>s.data.name=v)},null,8,["modelValue"]),o(h,{type:"textarea",label:"Description",validation:"required",modelValue:s.data.description,"onUpdate:modelValue":e[2]||(e[2]=v=>s.data.description=v)},null,8,["modelValue"])])]),n("div",xe,[o(m,{type:"submit",click:()=>{},color:"success",loading:t.loading,icon:t.saveIcon,text:"Save changes"},null,8,["loading","icon"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const ke=M(pe,[["render",be]]),Ce={components:{TransitionRoot:S,TransitionChild:A,Dialog:E,DialogPanel:R,DialogTitle:q,XMarkIcon:Z,ExclamationTriangleIcon:L},data(){return{show:!1,deleteIcon:G,loading:!1,cookie:P("token"),reason:""}},props:{data:{type:Object,required:!0}},methods:{async deleteData(d){this.loading=!0;const e={route:`${V.printers}/${d}`,method:"DELETE",token:`${this.cookie}`,body:{voided_reason:this.reason}},{data:s,error:c,pending:t}=await D(e);this.loading=t,s.value&&(this.handleClick(),y().$toast.success("Printer deleted successfully!"),this.loading=!1,this.$emit("update",!0)),c.value&&(console.error(c.value),y().$toast.error(I),this.loading=!1)},handleClick(){this.show=!this.show}}},we={class:"fixed inset-0 overflow-y-auto"},Ve={class:"flex min-h-full items-center justify-center p-4 text-center"},De={class:"border-b px-3 py-3 flex items-center justify-between"},Te={class:"mt-2 space-y-3 px-5"},Pe={class:"rounded px-2 py-2"},Ie={class:"font-semibold text-red-500"},Me={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function He(d,e,s,c,t,r){const m=H,_=i("TransitionChild"),x=i("ExclamationTriangleIcon"),b=i("DialogTitle"),k=i("XMarkIcon"),h=i("FormKit"),u=i("DialogPanel"),a=i("Dialog"),C=i("TransitionRoot");return p(),f("div",null,[o(m,{click:r.handleClick,color:"error",text:"Delete",icon:t.deleteIcon},null,8,["click","icon"]),o(C,{appear:"",show:t.show,as:"template"},{default:l(()=>[o(a,{as:"div",class:"relative z-10"},{default:l(()=>[o(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>e[3]||(e[3]=[n("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),n("div",we,[n("div",Ve,[o(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[o(u,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>[n("div",De,[o(b,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:l(()=>[o(x,{class:"h-5 w-5 mr-2"}),e[4]||(e[4]=T(" Confirm delete "))]),_:1}),n("button",{onClick:e[0]||(e[0]=(...g)=>r.handleClick&&r.handleClick(...g))},[o(k,{class:"w-5 h-5"})])]),o(h,{type:"form","submit-label":"Update",onSubmit:e[2]||(e[2]=g=>r.deleteData(s.data.id)),actions:!1},{default:l(({value:g})=>[n("div",Te,[n("div",Pe,[e[5]||(e[5]=T(" Do you really want to delete ")),n("span",Ie,w(s.data.name),1),e[6]||(e[6]=T("? Note that once this action is completed, it can not be undone "))]),o(h,{type:"textarea",label:"Reason",validation:"required",modelValue:t.reason,"onUpdate:modelValue":e[1]||(e[1]=v=>t.reason=v)},null,8,["modelValue"])]),n("div",Me,[o(m,{loading:t.loading,type:"submit",click:()=>{},color:"error",icon:t.deleteIcon,text:"Delete"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Fe=M(Ce,[["render",He]]),Ue={components:{AdjustmentsHorizontalIcon:se},setup(){ne({title:`${oe.name.toUpperCase()} - Configuration`})},data(){return{moment:Y,config:["Facility","Printers"],tab:0,addIcon:O,saveIcon:j,deleteIcon:G,editIcon:z,printersHeader:[{text:"name",value:"name"},{text:"description",value:"description"},{text:"date created",value:"date_created"},{text:"Actions",value:"actions"}],printers:new Array,facility:K(),name:"",code:"",phone:"",address:"",district:"",loading:!1,cookie:P("token"),loadingPrinters:!1}},created(){this.init(),this.loadPrinters()},methods:{init(){this.name=this.facility.details.name,this.phone=this.facility.details.phone,this.code=this.facility.details.code,this.address=this.facility.details.address,this.district=this.facility.details.district,(this._.provides[J]||this.$route).query.tab=="printers"&&(this.tab=1)},async loadPrinters(){this.loadingPrinters=!0;const d={route:V.printers,method:"GET",token:`${this.cookie}`},{data:e,error:s,pending:c}=await D(d);this.loadingPrinters=c,e.value&&(this.printers=e.value,this.loadingPrinters=!1),s.value&&(console.error(s.value),this.loadingPrinters=!1)},async submitForm(){this.loading=!1;const d={route:`${V.global}/${this.facility.details.id}`,method:"PUT",token:`${this.cookie}`,body:{name:this.name,code:this.code,address:this.address,phone:this.phone,district:this.district}},{data:e,error:s,pending:c}=await D(d);this.loading=c,e.value&&(y().$toast.success("Facility updated successfully!"),this.$emit("update",!0),this.globals(),this.loading=!1),s.value&&(console.error(s.value),y().$toast.error(I),this.loading=!1)},async globals(){const{fetchFacility:d,details:e}=K(),s={route:V.global,method:"GET",token:""},{data:c,error:t}=await D(s);t.value&&console.error(t.value),c.value&&d(c.value)}}},Ae="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.17647%208.5C7.42215%208.5%206%209.93908%206%2011.7143V31C6%2032.7752%207.42215%2034.2143%209.17647%2034.2143H19.7646V36.3572H15.5293V38.5H32.4705V36.3572H28.2353V34.2143H38.8235C40.5778%2034.2143%2042%2032.7752%2042%2031V11.7143C42%209.93908%2040.5778%208.5%2038.8235%208.5H9.17647ZM21.8823%2036.3572V34.2143H26.1177V36.3572H21.8823ZM13.4119%2012.7858H15.5296V14.9286H17.6475V17.0715H15.5296V19.2143H13.4119V17.0715H11.2945L11.2945%2014.9286H13.4119V12.7858ZM11.2939%2023.5001C11.2939%2022.9083%2011.768%2022.4286%2012.3528%2022.4286H16.5881C17.1728%2022.4286%2017.6469%2022.9083%2017.6469%2023.5001V27.7858C17.6469%2028.3775%2017.1728%2028.8572%2016.5881%2028.8572H12.3528C11.768%2028.8572%2011.2939%2028.3775%2011.2939%2027.7858V23.5001ZM20.8234%2013.8572C20.8234%2013.2655%2021.2974%2012.7858%2021.8822%2012.7858H26.1175C26.7023%2012.7858%2027.1763%2013.2655%2027.1763%2013.8572V18.1429C27.1763%2018.7346%2026.7023%2019.2143%2026.1175%2019.2143H21.8822C21.2974%2019.2143%2020.8234%2018.7346%2020.8234%2018.1429V13.8572ZM20.8232%2023.5001C20.8232%2022.9083%2021.2973%2022.4286%2021.8821%2022.4286H26.1174C26.7021%2022.4286%2027.1762%2022.9083%2027.1762%2023.5001V27.7858C27.1762%2028.3775%2026.7021%2028.8572%2026.1174%2028.8572H21.8821C21.2973%2028.8572%2020.8232%2028.3775%2020.8232%2027.7858V23.5001ZM30.3527%2013.8572C30.3527%2013.2655%2030.8268%2012.7858%2031.4116%2012.7858H35.6469C36.2316%2012.7858%2036.7057%2013.2655%2036.7057%2013.8572V18.1429C36.7057%2018.7346%2036.2316%2019.2143%2035.6469%2019.2143H31.4116C30.8268%2019.2143%2030.3527%2018.7346%2030.3527%2018.1429V13.8572Z'%20fill='%23333333'/%3e%3c/svg%3e",Se={class:"px-5 py-5"},Ee={class:"mt-5 font-medium text-center text-gray-500 bg-gray-50"},Re={class:"flex flex-wrap -mb-px"},qe=["onClick"],Ze={class:"py-5"},je={key:0},$e={class:"grid grid-cols-3 gap-4"},Be={class:"mt-4"},Ne={key:1},Ke={class:"flex items-center justify-end mb-5"},Xe={class:"flex items-center mx-auto justify-center py-20"},Oe={class:"relative overflow-x-auto"},ze={class:"w-full text-left border rounded-lg"},Ge={class:"uppercase bg-gray-100"},Le={class:"px-2 py-2 font-normal"},Ye={class:"px-2 py-2"},Je={class:"px-2 py-2"},Qe={class:"flex items-center space-x-2"};function We(d,e,s,c,t,r){const m=i("FormKit"),_=H,x=me,b=te,k=ke,h=Fe;return p(),f("div",Se,[e[5]||(e[5]=n("h3",{class:"text-2xl font-semibold flex items-cennter"},[n("img",{src:Ae,class:"w-8 h-8 mr-2"}),T(" IBLIS Configuration ")],-1)),n("div",Ee,[n("ul",Re,[(p(!0),f(F,null,U(t.config,(u,a)=>(p(),f("li",{onClick:C=>t.tab=a,class:"mr-2",key:a},[n("a",{href:"#",class:Q(t.tab==a?"inline-block py-2 px-4 text-white bg-sky-500 active dark:text-sky-500 dark:border-sky-500":"inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-sky-500 hover:border-sky-500")},w(u),3)],8,qe))),128))])]),n("div",Ze,[t.tab==0?(p(),f("div",je,[o(m,{type:"form","submit-label":"Update",onSubmit:r.submitForm,actions:!1},{default:l(({value:u})=>[n("div",$e,[o(m,{label:"Name",type:"text",modelValue:t.name,"onUpdate:modelValue":e[0]||(e[0]=a=>t.name=a)},null,8,["modelValue"]),o(m,{label:"Code",type:"text",modelValue:t.code,"onUpdate:modelValue":e[1]||(e[1]=a=>t.code=a)},null,8,["modelValue"]),o(m,{label:"District",type:"text",modelValue:t.district,"onUpdate:modelValue":e[2]||(e[2]=a=>t.district=a)},null,8,["modelValue"]),o(m,{label:"Address",type:"text",modelValue:t.address,"onUpdate:modelValue":e[3]||(e[3]=a=>t.address=a)},null,8,["modelValue"]),o(m,{label:"Phone Number",type:"text",modelValue:t.phone,"onUpdate:modelValue":e[4]||(e[4]=a=>t.phone=a)},null,8,["modelValue"])]),n("div",Be,[o(_,{click:()=>{},type:"submit",loading:t.loading,icon:t.saveIcon,text:"Save Changes",color:"success"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])])):$("",!0),t.tab==1?(p(),f("div",Ne,[n("div",Ke,[o(x,{onUpdate:r.loadPrinters},null,8,["onUpdate"])]),B(n("div",Xe,[o(b,{loading:t.loadingPrinters},null,8,["loading"])],512),[[N,t.loadingPrinters]]),B(n("div",Oe,[n("table",ze,[n("thead",Ge,[n("tr",null,[(p(!0),f(F,null,U(t.printersHeader,(u,a)=>(p(),f("th",{class:"uppercase py-2 px-2",key:a},w(u.text),1))),128))])]),n("tbody",null,[(p(!0),f(F,null,U(t.printers,(u,a)=>(p(),f("tr",{class:"bg-white border-b",key:a},[n("th",Le,w(u.name),1),n("td",Ye,w(u.description),1),n("td",Je,w(t.moment(u.created_date).format("DATE_FORMAT"in d?d.DATE_FORMAT:W(ee))),1),n("td",null,[n("div",Qe,[o(k,{data:u,onUpdate:r.loadPrinters},null,8,["data","onUpdate"]),o(h,{data:u,onUpdate:r.loadPrinters},null,8,["data","onUpdate"])])])]))),128))])])],512),[[N,!t.loadingPrinters]])])):$("",!0)])])}const at=M(Ue,[["render",We]]);export{at as default};