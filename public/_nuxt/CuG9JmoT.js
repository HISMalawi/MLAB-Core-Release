import{_ as Y}from"./ucPVlGIa.js";import{b as m,e as f,g as e,S as M,p as L,Y as B,G as F,V as G,q as j,A as $,B as J,C as X,a as O,l as x,m as w,x as E,y as h,f as n,z as b,k as H,_ as U,s as K,P as q,u as k,E as N,t as a,K as A,h as C,a6 as Q,O as P,F as D,j as I,L as z,a7 as ee,n as te}from"./CnHVHtNb.js";import{_ as Z}from"./C525PUnr.js";import{r as W}from"./DXtvsuug.js";import{_ as se}from"./BaJf9vfg.js";import{_ as oe}from"./BBIgpWSn.js";import{u as ie}from"./Bnl9n6mh.js";import{u as le}from"./CRaEjCo-.js";import{P as ne}from"./O-3ebvIT.js";import{r as re}from"./DpVzKT_I.js";import{r as ae}from"./DJDBc3LR.js";import"./BZb3bzVo.js";import"./n6mkMIpm.js";import"./B0PCQlmK.js";import"./BNP8985R.js";import"./DHZFDxBX.js";import"./Cj8g3RT8.js";import"./4iVNZzzj.js";import"./C20_EJt5.js";import"./DCavMtdm.js";function de(o,s){return m(),f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z","clip-rule":"evenodd"})])}const ce={components:{TransitionRoot:M,TransitionChild:L,Dialog:B,DialogPanel:F,DialogTitle:G,XMarkIcon:j},data(){return{viewIcon:$,show:!1,editIcon:J,saveIcon:W,moment:X,cookie:O("token"),rawOrganisms:new Array,organisms:new Array,organismsSelected:new Array,selectedResult:{name:"--select result--"}}},props:{data:{required:!0,type:Array},result:{required:!0,type:Object}},created(){this.init()},computed:{dropdownItems(){const o=[...this.data];return o.unshift({value:"--select result--"}),o.map(s=>({name:s.value}))}},methods:{init(){var o,s,i;((o=this.result)==null?void 0:o.value)!==null&&(this.selectedResult={name:(s=this.result)!=null&&s.value?(i=this.result)==null?void 0:i.value:"--select result--"})},getUpdatedValue(o){o.name.toLowerCase()=="growth"&&this.loadOrganisms()},async loadOrganisms(){this.handleClick();const o={route:x.organisms,method:"GET",token:`${this.cookie}`},{data:s,error:i}=await w(o);s.value&&(this.rawOrganisms=s.value,s.value.map(r=>{this.organisms.push(r.name)})),i.value&&console.error(i.value)},handleClick(){this.show=!this.show},apply(){let o=[];this.rawOrganisms.forEach(s=>{this.organismsSelected.forEach(i=>{s.name===i&&o.push(s)})}),this.$emit("apply",o),this.organismsSelected=[],this.handleClick()}},watch:{selectedResult(o,s){this.data.map(i=>{i.value===o.name?this.$emit("update",i):o.name==="--select result--"&&this.$emit("update",{value:null})})}}},ue=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),pe={class:"fixed inset-0 overflow-y-auto"},me={class:"flex min-h-full items-center justify-center p-4 text-center"},_e={class:"border-b px-3 py-3 flex items-center justify-between"},he=e("img",{src:se,class:"w-8 h-8 mr-2"},null,-1),fe={class:"space-y-3 px-5 py-5 pb-20"},be={class:"w-full flex flex-col space-y-2"},ye=e("label",{class:"font-medium"},"Organisms",-1),ge={class:"flex justify-end"};function ve(o,s,i,r,t,l){const c=Z,u=h("TransitionChild"),p=h("DialogTitle"),T=h("XMarkIcon"),g=h("multi-select"),v=U,S=h("DialogPanel"),R=h("Dialog"),_=h("TransitionRoot");return m(),f("div",null,[n(c,{items:l.dropdownItems,modelValue:t.selectedResult,"onUpdate:modelValue":[s[0]||(s[0]=d=>t.selectedResult=d),l.getUpdatedValue]},null,8,["items","modelValue","onUpdate:modelValue"]),n(_,{appear:"",show:t.show,as:"template"},{default:b(()=>[n(R,{as:"div",class:"relative z-10"},{default:b(()=>[n(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:b(()=>[ue]),_:1}),e("div",pe,[e("div",me,[n(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:b(()=>[n(S,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:b(()=>[e("div",_e,[n(p,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:b(()=>[he,H(" Select organisms ")]),_:1}),e("button",{onClick:s[1]||(s[1]=(...d)=>l.handleClick&&l.handleClick(...d))},[n(T,{class:"w-5 h-5"})])]),e("div",fe,[e("div",be,[ye,n(g,{style:{"--ms-max-height":"none !important"},modelValue:t.organismsSelected,"onUpdate:modelValue":s[2]||(s[2]=d=>t.organismsSelected=d),options:t.organisms,mode:"tags",required:"",clear:"",searchable:"",class:"focus:ring-none focus:border-none focus:outline-none multiselect-green"},null,8,["modelValue","options"])]),e("div",ge,[n(v,{click:l.apply,icon:t.saveIcon,text:"Apply",color:"success"},null,8,["click","icon"])])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const xe=E(ce,[["render",ve]]),we={components:{TransitionChild:L,TransitionRoot:M,Dialog:B,DialogPanel:F,DialogTitle:G,XMarkIcon:j},data(){return{addIcon:K,saveIcon:W,open:!1,loading:!1,cookie:O("token"),drugs:new Array,selectedDrugs:new Array,rawDrugs:new Array}},props:{index:{required:!0,type:Number}},methods:{async init(){this.loading=!1;const o={route:x.drugs,method:"GET",token:`${this.cookie}`},{data:s,error:i,pending:r}=await w(o);this.loading=r,s.value&&(this.handleClick(),this.rawDrugs=s.value,s.value.map(t=>{this.drugs.push(t.name)})),i.value&&console.error(i.value)},updatedDrugs(o){this.selectedDrugs=o},pushDrugs(o){let s=new Array;this.rawDrugs.map(i=>{o.map(r=>{i.name.toLowerCase()===r.toLowerCase()&&s.push(i)})}),this.$emit("update",{drugs:s,index:this.index}),this.handleClick()},handleClick(){this.open=!this.open}}},ke=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Re={class:"fixed inset-0 overflow-y-auto"},Te={class:"flex min-h-full items-center justify-center p-4 text-center"},Se={class:"border-b px-3 py-3 flex items-center justify-between"},Ae=e("img",{src:oe,class:"w-8 h-8 mr-2"},null,-1),Ce={class:"ma-5 px-4 py-4"},De={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Ie(o,s,i,r,t,l){const c=U,u=h("TransitionChild"),p=h("DialogTitle"),T=h("XMarkIcon"),g=h("multi-select"),v=h("DialogPanel"),S=h("Dialog"),R=h("TransitionRoot");return m(),f("div",null,[e("div",null,[n(c,{click:l.init,text:"Add drug",color:"primary",icon:t.addIcon},null,8,["click","icon"])]),n(R,{appear:"",show:t.open,as:"template"},{default:b(()=>[n(S,{as:"div",onClose:l.handleClick,class:"relative z-10"},{default:b(()=>[n(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:b(()=>[ke]),_:1}),e("div",Re,[e("div",Te,[n(u,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:b(()=>[n(v,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:b(()=>[e("div",Se,[n(p,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:b(()=>[Ae,H(" Add drug ")]),_:1}),e("button",{onClick:s[0]||(s[0]=(..._)=>l.handleClick&&l.handleClick(..._))},[n(T,{class:"w-5 h-5"})])]),e("div",null,[e("div",Ce,[n(g,{modelValue:t.selectedDrugs,"onUpdate:modelValue":s[1]||(s[1]=_=>t.selectedDrugs=_),label:"Select drug(s)",options:t.drugs,mode:"tags",clear:"",searchable:"",class:"focus:ring-none fcus:border-none focus:outline-none multiselect-green"},null,8,["modelValue","options"])]),e("div",De,[n(c,{click:()=>{l.pushDrugs(t.selectedDrugs)},type:"submit",color:"success",icon:t.saveIcon,text:"Save chages"},null,8,["click","icon"])])])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const Ve=E(we,[["render",Ie]]),je={setup(){ie({title:`${ne.name.toUpperCase()} - Enter Culture & Sensitivity Test Results`})},data(){return{cookie:O("token"),authStore:le(),data:null,header:"Enter Culture & Sensitivity Results",loading:!1,closeIcon:j,addIcon:K,moment:X,pages:[{name:"Home",link:"/home"},{name:"Tests",link:"/tests"}],remarks:"",remark:"",saveIcon:re,updateIcon:de,trashIcon:ae,selectedDiameter:{name:"--select result--"},details:{client:{id:0,first_name:"",middle_name:"",last_name:"",sex:"",date_of_birth:"",birth_date_estimated:!1},order_status:"",status:"",requested_by:"",culture_observation:new Array,status_trail:new Array,suscept_test_result:new Array},organisms:new Array,drugsValues:{id:0,name:"",drugs:new Array},suspceptibilityResult:new Array,updating:!1,saving:!1,deleting:!1,results:{},testId:"",accessionNo:"",fetching:!1}},created(){this.accessionNo=`${(this._.provides[q]||this.$route).query.accession_number}`,this.testId=`${(this._.provides[q]||this.$route).query.test_id}`,this.init()},methods:{async init(){var t,l;this.fetching=!0;const o={route:`${x.tests}/${this.testId}`,method:"GET",token:`${this.cookie}`},{data:s,error:i,pending:r}=await w(o);this.fetching=r,s.value&&(this.details=s.value,this.fetching=!1,this.suspceptibilityResult=s.value.suscept_test_result.map(c=>({id:c.organism_id,name:c.name,drugs:c.drugs.map(u=>({name:u.name,drug_id:u.drug_id,zone:{name:u.zone===null?"--select result--":u.zone},interpretation:{name:u.interpretation===""?"--select result--":u.interpretation}}))})),this.remark=((t=s.value.result_remarks)==null?void 0:t.value)??((l=s.value.result_remarks)==null?void 0:l.value)),i.value&&(this.fetching=!1,console.error("error fetcing test details: ",i.value))},async loadOrganisms(o){o.forEach(async s=>{const i={route:`${x.organisms}/${s.id}`,method:"GET",token:`${this.cookie}`},{data:r,error:t}=await w(i);if(r.value){this.organisms.push(r.value);let l={id:null,name:null,drugs:[]};this.organisms.forEach(c=>{l.id=c.id,l.name=c.name;const u=c.drugs.map(p=>({name:p.name,drug_id:p.id,zone:{name:"--select result--"},interpretation:{name:"--select result--"}}));l.drugs=l.drugs.concat(u)}),this.suspceptibilityResult.push(l)}t.value&&console.error(t.value)})},diameters(){let o=new Array;for(let s=0;s<=200;s++)o.push({name:`${s}`});return o.unshift({name:"--select result--"}),o},async submitObservation(){this.loading=!0;const o={route:x.cultureObservations,method:"POST",token:`${this.cookie}`,body:{test_id:this.testId,description:this.remarks}},{data:s,error:i,pending:r}=await w(o);this.loading=r,s.value&&(this.remarks="",this.loading=!1,this.init(),this.suspceptibilityResult=new Array),i.value&&(this.loading=!1,console.error(i.value))},async updateResults(o){this.updating=!0,this.suspceptibilityResult.filter(i=>o.name.toLowerCase()===i.name.toLowerCase()).map(async i=>{let r=[];i.drugs.map(p=>{r.push({drug_id:p.drug_id,zone:p.zone.name!=="--select result--"?p.zone.name:"",interpretation:p.interpretation.name!=="--select result--"?p.interpretation.name:""})});const t={route:x.drugSusceptibility,method:"POST",token:`${this.cookie}`,body:{test_id:this.details.id,organism_id:i.id,drugs:r.filter(p=>String(p.zone)!==""&&String(p.interpretation)!==""),status:"completed"}},{data:l,error:c,pending:u}=await w(t);this.updating=u,l.value&&(this.updating=!1,k().$toast.success("Suspceptibility test results updated successfully!")),c.value&&(console.error(c.value),this.updating=!1,k().$toast.error(N))}),this.updating=!1},async deleteSusceptivityResult(o,s){this.deleting=!0;const i={route:`${x.drugSusceptibility}/delete`,method:"PUT",token:`${this.cookie}`,body:{test_id:this.details.id,organism_id:o}},{data:r,error:t,pending:l}=await w(i);this.deleting=l,r.value&&(this.deleting=!1,this.suspceptibilityResult.splice(s,1),k().$toast.success("Suspceptibility test results deleted successfully!")),t.value&&(console.error(t.value),this.deleting=!1,k().$toast.success("An error has occurred, please try again!"))},invalidation(){k().$toast.warning("Could not save null suspceptibility results, please enter values!"),this.updating=!1},updateResult(o){this.results=o},async saveResults(){var t,l,c;this.saving=!0;const o={route:`${x.updateResults}`,method:"POST",token:`${this.cookie}`,body:{test_id:this.details.id,test_indicators:((t=this.results)==null?void 0:t.value)==null?[]:new Array({indicator:(l=this.results)==null?void 0:l.test_indicator_id,value:(c=this.results)==null?void 0:c.value}),remarks:this.remark}},{data:s,error:i,pending:r}=await w(o);this.saving=r,s.value&&(this.saving=!1,k().$toast.success("Test results updated successfully"),this.$router.back()),i.value&&(this.saving=!1,k().$toast.error(N),console.error(i.value))},getUpdatedDrugs(o){this.suspceptibilityResult.map((s,i)=>{o.index===i&&o.drugs.map(r=>{s.drugs.push({name:r.name,drug_id:r.id,zone:{name:"--select result--"},interpretation:{name:"--select result--"}})})})}}},Oe={class:"px-5 py-5"},Ee={class:"flex items-center justify-between py-5"},Ue={class:"text-2xl font-semibold"},qe={key:0,class:"w-full justify-center items-center py-20 mx-auto flex flex-col space-y-2"},Ne=e("p",{class:"ont-medium text-sky-500"},"Loading, please wait...",-1),Pe={key:1},ze={class:"grid grid-cols-3 gap-4 py-5"},Me={class:"rounded border"},Le=e("div",{class:"px-4 py-2 bg-gray-50 border-b rounded-t"},[e("h3",{class:"font-semibold text-gray-700 uppercase"},"Patient")],-1),Be={class:"w-full py-2"},Fe={class:"w-full flex justify-between px-5 py-2.5 border-b border-dotted"},Ge=e("h3",{class:"font-medium"},"Patient Number",-1),Xe={class:"w-full flex justify-between px-5 py-2.5 border-b border-dotted bg-gray-50"},He=e("h3",{class:"font-medium"},"Name",-1),Ke={class:"w-full flex justify-between px-5 py-2.5 border-b border-dotted"},Ze=e("h3",{class:"font-medium"},"Sex",-1),We={class:"w-full flex justify-between px-5 py-2.5 border-b border-dotted bg-gray-50"},Ye=e("h3",{class:"font-medium"},"Age",-1),$e={class:"rounded border"},Je=e("div",{class:"px-4 py-2 bg-gray-50 border-b rounded-t"},[e("h3",{class:"font-semibold text-gray-700 uppercase"},"Specimen")],-1),Qe={class:"w-full py-2"},et={class:"w-full flex justify-between px-5 py-2.5 border-b border-dotted"},tt=e("h3",{class:"font-medium"},"Specimen Type",-1),st={class:"w-full flex justify-between px-5 py-2.5 border-b border-dotted bg-gray-50"},ot=e("h3",{class:"font-medium"},"Tracking Number",-1),it={class:"w-full flex justify-between px-5 py-2.5 border-b border-dotted"},lt=e("h3",{class:"font-medium"},"Accession Number",-1),nt={class:"w-full flex justify-between px-5 py-2.5 border-b border-dotted bg-gray-50"},rt=e("h3",{class:"font-medium"},"Status",-1),at={class:"rounded border max-h-72 overflow-y-auto"},dt=e("div",{class:"px-4 py-2 bg-gray-50 border-b rounded-t"},[e("h3",{class:"font-semibold text-gray-700 uppercase"},"Test")],-1),ct={class:"w-full py-2"},ut={class:"w-full flex justify-between px-5 py-2.5 border-b border-dotted"},pt=e("h3",{class:"font-medium"},"Name",-1),mt={class:"w-full flex justify-between px-5 py-2.5 border-b border-dotted"},_t=e("h3",{class:"font-medium"},"Date Registered",-1),ht={class:"w-full flex justify-between px-5 py-2.5 border-b border-dotted bg-gray-50"},ft=e("h3",{class:"font-medium"},"Receipt Date",-1),bt={class:"w-full flex justify-between px-5 py-2.5 border-b border-dotted"},yt=e("h3",{class:"font-medium"},"Test Status",-1),gt={class:"w-full flex justify-between px-5 py-2.5 border-b border-dotted bg-gray-50"},vt=e("h3",{class:"font-medium"},"Ward/Location",-1),xt={class:"w-full flex justify-between px-5 py-2.5 border-b border-dotted"},wt=e("h3",{class:"font-medium"},"Physician",-1),kt={class:"w-full flex justify-between px-5 py-2.5 border-b border-dotted bg-gray-50"},Rt=e("h3",{class:"font-medium"},"Request Origin",-1),Tt={class:"w-full flex justify-between px-5 py-2.5 border-b border-dotted"},St=e("h3",{class:"font-medium"},"Registered By",-1),At={class:"grid grid-cols-5 gap-4"},Ct={class:"col-span-2 rounded flex flex-col space-y-2.5 border"},Dt=e("div",{class:"bg-gray-50 px-4 py-2 rounded-t border-b"},[e("h3",{class:"font-semibold text-gray-700 uppercase"}," Observations ")],-1),It={class:"font-medium"},Vt=e("p",{class:"text-base font-medium mb-2"},"Remarks",-1),jt={class:"col-span-3 rounded flex flex-col space-y-2.5 border"},Ot=e("div",{class:"bg-gray-50 px-4 py-2 rounded-t border-b"},[e("h3",{class:"font-semibold text-gray-700 uppercase"}," Culture worksheet ")],-1),Et={class:"px-5 py-2 space-y-2"},Ut=e("h3",{class:"mb-2 mt-2 font-medium"},"Observations & Work-Up",-1),qt={class:"w-full text-left border border-dotted"},Nt=e("thead",{class:"bg-gray-50 border-b border-dotted"},[e("tr",null,[e("th",{class:"px-2 py-3 font-semibold text-left border-r border-dotted"}," Date "),e("th",{class:"px-2 py-3 font-semibold text-left border-r border-dotted"}," Lab Tech "),e("th",{class:"px-2 py-3 font-semibold text-left border-r border-dotted"}," Remarks "),e("th",{class:"px-2 py-3 font-semibold text-left"}," Action ")])],-1),Pt={class:"px-2 py-3 border-r border-dotted"},zt={class:"px-2 py-3 border-r border-dotted"},Mt={class:"px-2 py-3 border-r border-dotted"},Lt={key:1},Bt={class:"px-2 py-3"},Ft={class:"border-b border-dotted"},Gt={class:"px-2 py-3 border-r border-dotted"},Xt={class:"px-2 py-3 border-r border-dotted"},Ht={class:"px-2 py-3 border-r border-dotted"},Kt={class:"px-2 py-3"},Zt={class:"rounded border mt-5"},Wt=e("div",{class:"bg-gray-50 px-4 py-2 rounded-t border-b"},[e("h3",{class:"font-semibold text-gray-700 uppercase"}," Susceptibility Test Results ")],-1),Yt={class:"px-5 py-5"},$t={class:"flex items-center justify-between mb-3"},Jt={class:"font-semibold text-lg"},Qt={class:"flex items-center space-x-3"},es={class:"w-full text-left border border-dotted"},ts=e("thead",{class:"bg-gray-50 border-b border-dotted"},[e("tr",null,[e("th",{class:"px-2 py-3 font-semibold text-left border-r border-dotted"}," Drug "),e("th",{class:"px-2 py-3 font-semibold text-left border-r border-dotted"}," Zone Diameter(mm) "),e("th",{class:"px-2 py-3 font-semibold text-left border-r border-dotted"}," Interpretation (I,S,R) ")])],-1),ss={class:"px-2 py-3 border-r border-dotted"},os={class:"px-2 py-3"},is={class:"px-2 py-3"};function ls(o,s,i,r,t,l){const c=Y,u=te,p=xe,T=h("RichTextEditor"),g=U,v=h("FormKit"),S=Ve,R=Z;return m(),f("div",Oe,[e("div",null,[n(c,{pages:t.pages},null,8,["pages"]),e("div",Ee,[e("h3",Ue,a(t.header),1)]),t.fetching?(m(),f("div",qe,[n(u),Ne])):A("",!0),t.fetching?A("",!0):(m(),f("div",Pe,[e("div",ze,[e("div",Me,[Le,e("div",Be,[e("div",Fe,[Ge,e("p",null,a(t.details.id),1)]),e("div",Xe,[He,e("p",null,a(`${t.details.client.first_name} ${t.details.client.middle_name} ${t.details.client.last_name}`),1)]),e("div",Ke,[Ze,e("p",null,a(t.details.client.sex),1)]),e("div",We,[Ye,e("p",null,a(("calculateAge"in o?o.calculateAge:C(Q))(t.details.client.date_of_birth)),1)])])]),e("div",$e,[Je,e("div",Qe,[e("div",et,[tt,e("p",null,a(t.details.specimen_type),1)]),e("div",st,[ot,e("p",null,a(t.details.tracking_number),1)]),e("div",it,[lt,e("p",null,a(t.details.accession_number),1)]),e("div",nt,[rt,e("p",null,a(t.details.order_status.split("-").join(" ").charAt(0).toUpperCase()+t.details.order_status.split("-").join(" ").slice(1)),1)])])]),e("div",at,[dt,e("div",ct,[e("div",ut,[pt,e("p",null,a(t.details.test_type_name),1)]),e("div",mt,[_t,e("p",null,a(t.moment(t.details.created_date).format("DATE_FORMAT"in o?o.DATE_FORMAT:C(P))),1)]),e("div",ht,[ft,e("p",null,a(t.moment(t.details.updated_date).format("DATE_FORMAT"in o?o.DATE_FORMAT:C(P))),1)]),e("div",bt,[yt,e("p",null,a(t.details.status.charAt(0).toUpperCase()+t.details.status.slice(1)),1)]),e("div",gt,[vt,e("p",null,a(t.details.requesting_ward),1)]),e("div",xt,[wt,e("p",null,a(t.details.requested_by.charAt(0).toUpperCase()+t.details.requested_by.slice(1)),1)]),e("div",kt,[Rt,e("p",null,a(t.details.request_origin),1)]),e("div",Tt,[St,e("p",null,a(t.details.registered_by),1)])])])]),e("div",At,[e("div",Ct,[Dt,n(v,{type:"form","submit-label":"Update",onSubmit:l.saveResults,actions:!1},{default:b(()=>[(m(!0),f(D,null,I(t.details.indicators,(_,d)=>(m(),f("div",{class:"px-5 py-2 space-y-2",key:d},[e("label",It,a(_.name),1),n(p,{result:_.result,onUpdate:l.updateResult,onApply:l.loadOrganisms,data:_.indicator_ranges},null,8,["result","onUpdate","onApply","data"]),e("div",null,[Vt,n(T,{theme:"snow",class:"editor",content:t.remark,"onUpdate:content":s[0]||(s[0]=y=>t.remark=y),contentType:"html"},null,8,["content"])]),n(g,{loading:t.saving,click:()=>{},type:"submit",icon:t.saveIcon,text:"Save changes",color:"success"},null,8,["loading","icon"])]))),128))]),_:1},8,["onSubmit"])]),e("div",jt,[Ot,e("div",Et,[e("div",null,[Ut,n(v,{type:"form","submit-label":"Update",onSubmit:l.submitObservation,actions:!1},{default:b(({value:_})=>[e("table",qt,[Nt,e("tbody",null,[(m(!0),f(D,null,I(t.details.culture_observation,(d,y)=>(m(),f("tr",{class:"border-b border-dotted",key:y},[e("td",Pt,a(t.moment(d.observation_date).fromNow()),1),e("td",zt,a(`${d.user.first_name} ${d.user.middle_name}
                                                ${d.user.last_name}`),1),e("td",Mt,[d.description===""?(m(),z(v,{key:0,type:"textarea",label:"",name:"Remarks",value:d.description,validation:"required"},null,8,["value"])):A("",!0),d.description!=""?(m(),f("p",Lt,a(d.description),1)):A("",!0)]),e("td",Bt,[d.description===""?(m(),z(g,{key:0,type:"submit",text:"Save",color:"success",icon:t.saveIcon,loading:t.loading,click:()=>{}},null,8,["icon","loading"])):A("",!0)])]))),128)),e("tr",Ft,[e("td",Gt,a(t.moment().fromNow()),1),e("td",Xt,a(`${t.authStore.user.first_name} ${t.authStore.user.middle_name} ${t.authStore.user.last_name}`),1),e("td",Ht,[n(v,{type:"textarea",label:"",name:"Remarks",modelValue:t.remarks,"onUpdate:modelValue":s[1]||(s[1]=d=>t.remarks=d),validation:"required"},null,8,["modelValue"])]),e("td",Kt,[n(g,{type:"submit",text:"Save",color:"success",icon:t.saveIcon,loading:t.loading,click:()=>{}},null,8,["icon","loading"])])])])])]),_:1},8,["onSubmit"])])])])]),e("div",Zt,[Wt,e("div",Yt,[(m(!0),f(D,null,I(t.suspceptibilityResult,(_,d)=>(m(),f("div",{key:_.name,class:"mt-2"},[e("div",$t,[e("h3",Jt,a(_.name),1),e("div",Qt,[n(S,{index:d,onUpdate:l.getUpdatedDrugs},null,8,["index","onUpdate"]),n(g,{text:"Save",color:"success",icon:t.updateIcon,loading:t.updating,click:()=>l.updateResults(_)},null,8,["icon","loading","click"]),n(g,{loading:t.deleting,icon:t.trashIcon,color:"error",text:"Delete",click:()=>{l.deleteSusceptivityResult(_.id,d)}},null,8,["loading","icon","click"])])]),e("table",es,[ts,e("tbody",null,[(m(!0),f(D,null,I(_.drugs,y=>(m(),f("tr",{class:"border-b border-dotted",key:y.name},[e("td",ss,a(y.name),1),e("td",os,[n(R,{items:l.diameters(),modelValue:y.zone,"onUpdate:modelValue":V=>y.zone=V},null,8,["items","modelValue","onUpdate:modelValue"])]),e("td",is,[n(R,{items:"INTERPRETATIONS"in o?o.INTERPRETATIONS:C(ee),modelValue:y.interpretation,"onUpdate:modelValue":V=>y.interpretation=V},null,8,["items","modelValue","onUpdate:modelValue"])])]))),128))])])]))),128))])])]))])])}const Ss=E(je,[["render",ls]]);export{Ss as default};