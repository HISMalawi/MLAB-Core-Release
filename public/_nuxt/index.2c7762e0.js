import{_ as I}from"./Breadcrumb.vue.ad824e0f.js";import{o as u,c,e,_ as N,w as b,v as w,F as x,r as k,u as V,a as P,b as S,g as M,d as m,t as a,l as Y,k as f,p as C,f as U}from"./entry.3e997e44.js";import{_ as L}from"./Dropdown.f52ec8a5.js";import{d as R}from"./constants.be4260bc.js";import{h as _,p as E,u as O,e as g,f as v,i as F,q as z,P as H}from"./fetch.d43a083b.js";import{P as W}from"./package.2b319c9a.js";import{r as G}from"./FunnelIcon.a23dceaf.js";import{r as K}from"./ArrowPathIcon.385536dd.js";import{r as $}from"./PrinterIcon.b5dff05e.js";import{r as J}from"./ArrowDownTrayIcon.3855d60d.js";import{r as T}from"./HandThumbDownIcon.efa67a9f.js";import"./nuxt-link.4d6d5112.js";import"./HomeIcon.5803e93b.js";import"./listbox.10d2ca72.js";import"./hidden.eaac968f.js";import"./use-text-value.001e6d40.js";import"./CheckIcon.9716edbc.js";import"./CheckCircleIcon.d1c48123.js";import"./MagnifyingGlassIcon.0c487325.js";import"./network.bc619a46.js";import"./transition.82a1c525.js";import"./XMarkIcon.737949c3.js";import"./PencilSquareIcon.b3862558.js";function Q(i,t){return u(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z","clip-rule":"evenodd"})])}const X={props:{loading:{required:!0,type:Boolean}}},Z={class:"py-3 px-3"},ee={class:"grid grid-cols-3 gap-3"},te=e("div",{class:"w-full h-32 bg-gray-100 rounded animate-pulse mt-3"},null,-1),se=e("div",{class:"w-32 h-8 bg-gray-100 rounded animate-pulse mt-3"},null,-1);function ie(i,t,o,l,s,n){return b((u(),c("div",Z,[e("div",ee,[(u(),c(x,null,k(6,d=>e("div",{key:d,class:"w-full col-span-1 h-8 bg-gray-100 rounded animate-pulse"})),64))]),te,se],512)),[[w,o.loading]])}const oe=N(X,[["render",ie]]),ne={setup(){V({title:`${W.name.toUpperCase()} - Enter Test Results`})},data(){return{details:{},content:"",moment:_,header:"Enter Test Results",patientNo:"",name:"",age:"",sex_:"",selectedDate:"",specimenType:"",trackingNumber:"",accessionNumber:"",testType:"",requestingWard:"",dateRegistered:"",receiptDate:"",testStatus:"",requestingPhysician:"",requestOrigin:"",registeredBy:"",performedBy:"",turnAroundTime:{value:"",unit:""},filterIcon:G,addIcon:Q,refreshIcon:K,printIcon:$,approveIcon:E,item:this.$route.params.item,indicatorRangesArray:new Array,accessionNo:"",cookie:P("token"),arrowDownIcon:J,testId:"",pages:[{name:"Home",link:"/home"},{name:"Tests",link:"/tests"}],measures:[],loading:!1,fetching:!1,updating:!1,authorizing:!1,resultsPresent:!0,selectedRange:"",remarks:"",statuses:{id:0,initiator:{id:0}},authStore:O(),machineOriented:!1,completedBy:{},machineName:"",rejectStatuses:[{name:"Reject",icon:T,action:"rejected"},{name:"Void",icon:T,action:"voided"},{name:"Not-done",icon:T,action:"not_done"}]}},computed:{minDate(){const i=new Date,t=i.getFullYear(),o=i.getMonth()+1,l=i.getDate();return`${t}-${o.toString().padStart(2,"0")}-${l.toString().padStart(2,"0")}`},textInputMeasures(){return this.measures.filter(i=>i.type==="numeric"||i.type==="free_text")},dropDownMeasures(){const i=this.measures.filter(t=>t.type==="auto_complete"||t.type==="alpha_numeric");return i.forEach(t=>{t.ranges.unshift({name:"-- select result --"})}),i},richTextEditorMeasures(){return this.measures.filter(i=>i.type==="rich_text")},hasTextInputMeasures(){return this.measures.filter(i=>i.type==="numeric"||i.type==="free_text").length>0},hasDropdownMeasures(){return this.measures.filter(i=>i.type==="alpha_numeric"||i.type==="auto_complete").length>0},hasRichTextMeasures(){return this.measures.filter(i=>i.type==="rich_text").length>0}},created(){this.accessionNo=`${this.$route.query.accession_number}`,this.testId=`${this.$route.query.test_id}`,this.init()},methods:{async resultsAvailable(i){const t={route:`${g.resultsAvailable}?accession_number=${i}`,method:"GET",token:`${this.cookie}`},{data:o,error:l,pending:s}=await v(t);o.value&&(o.value.result_available?this.resultsPresent=!1:this.resultsPresent=!0),l.value&&console.error(l.value)},async init(){var s,n;this.loading=!0;const i={route:`${g.tests}/${this.testId}`,method:"GET",token:`${this.cookie}`},{data:t,error:o,pending:l}=await v(i);this.loading=l,t.value&&(this.loading=!1,this.name=t.value.client.first_name+" "+((s=t.value.client)==null?void 0:s.last_name),this.patientNo=t.value.id,this.sex_=(n=t.value.client)==null?void 0:n.sex,this.age=F(t.value.client.date_of_birth)+"",this.trackingNumber=t.value.tracking_number,this.accessionNumber=t.value.accession_number,this.testStatus=t.value.status,this.specimenType=t.value.specimen_type,this.requestingPhysician=t.value.requested_by,this.testType=t.value.test_type_name,this.requestingWard=t.value.requesting_ward,this.dateRegistered=t.value.created_date,this.receiptDate=t.value.created_date,this.requestOrigin=t.value.request_origin,this.turnAroundTime=t.value.expected_turn_around_time,this.remarks=t.value.result_remarks?t.value.result_remarks.value:"",this.loadTestMesures(t.value.indicators),t.value.status_trail.map(d=>{d.status.name.toLowerCase()==="completed"&&(this.statuses=d,this.performedBy=`${d.initiator.first_name} ${d.initiator.last_name}`)}),t.value.status_trail.map(d=>{d.status.name.toLowerCase()==="pending"&&(this.registeredBy=`${d.initiator.first_name} ${d.initiator.last_name}`)}),this.resultsAvailable(t.value.accession_number),this.machineOriented=t.value.is_machine_oriented,this.completedBy=t.value.completed_by,this.details=t.value),o.value&&(console.error(o.value),this.loading=!1)},async fetchResults(){this.fetching=!0;const i={route:`${g.fetchResults}?accession_number=${this.accessionNo}`,method:"GET",token:`${this.cookie}`},{data:t,error:o,pending:l}=await v(i);this.fetching=l,t.value&&(this.measures.map(s=>{t.value.map(n=>{String(s.id)===String(n.indicator_id)&&(s.value.name=n.value,this.machineName=n.machine_name)})}),this.fetching=!1),o.value&&(console.error(o.value),this.fetching=!1)},async loadTestMesures(i){this.measures=new Array,i&&i.forEach(t=>{var o,l,s,n,d,p;this.measures.push({name:t.name,id:t.id,machine_name:(o=t.result)==null?void 0:o.machine_name,value:t.test_indicator_type==="free_text"||t.test_indicator_type==="numeric"?{name:t.name.toLowerCase().includes("date")?_((l=t.result)==null?void 0:l.value,"DD/MMM/YYYY").format("DD/MMM/YYYY"):(s=t.result)==null?void 0:s.value}:((n=t.result)==null?void 0:n.value)!=null?{name:t.name.toLowerCase().includes("date")?_((d=t.result)==null?void 0:d.value,"DD/MMM/YYYY").format("DD/MMM/YYYY"):(p=t.result)==null?void 0:p.value}:t.test_indicator_type=="rich_text"?{name:""}:{name:"-- select result --"},type:t.test_indicator_type,unit:t.unit,ranges:this.toIndicatorRanges(t.indicator_ranges,t.id)})})},toIndicatorRanges(i,t){let o=[];return i&&i.forEach(l=>{o.push({id:t,name:l.value})}),o},measuresToIndicators(){let i=new Array;return this.measures.forEach(t=>{i.push({indicator:t.id,value:t.type=="free_text"?t.value.name!==void 0?t.name.toLowerCase().includes("date")?_(t.value.name).format("DD/MMM/YYYY").toLowerCase()!=="invalid date"?_(t.value.name).format("DD/MMM/YYYY"):"":t.value.name:null:t.value!==void 0?t.name.toLowerCase().includes("date")?_(t.value).format("DD/MMM/YYYY").toLowerCase()!=="invalid date"?_(t.value).format("DD/MMM/YYYY"):"":t.value:null,machine_name:t.value!==null?this.machineName===""?t.machine_name:this.machineName:null})}),i},async updateTestResults(){this.updating=!0;let i=this.measuresToIndicators().map(n=>(typeof n.value=="object"&&n.value!==null&&(n.value=n.value.name=="-- select result --"?null:n.value.name),n));const t={route:`${g.updateResults}`,method:"POST",token:`${this.cookie}`,body:{test_id:this.testId,test_indicators:i,remarks:this.remarks}},{data:o,error:l,pending:s}=await v(t);this.updating=s,o.value&&(this.updating=!1,S().$toast.success("Test results updated successfully"),this.$router.back()),l.value&&(this.updating=!1,console.error(l.value))},async authorise(){this.authorizing=!0;const i={route:`${g.testStatus}/${this.testId}/verified`,method:"PUT",token:`${this.cookie}`},{data:t,error:o,pending:l}=await v(i);this.authorizing=l,t.value&&(this.authorizing=!1,S().$toast.success("Test status authorized successfully!"),this.$router.push("/tests")),o.value&&(console.error(o.value),this.authorizing=!1)},isCompletedByCurrentUserOrSuperAdmin(i){const t=this.authStore.user,o=i.completed_by;if(o){if(o.id!==t.id)return!0;if(o.is_super_admin===!0)return!0}return!1},shouldDisplayButton(i){return i.status.toLowerCase()==="completed"?this.isCompletedByCurrentUserOrSuperAdmin(i):!1},async printMachine(){const{alertConfirmation:i}=z();await i({message:"Do you want to print specimen label?"})&&await H.printSpecimenLabel(this.accessionNo)}}},re={class:"p-5"},ae={class:"flex items-center justify-between py-5"},le={class:"text-2xl font-semibold"},ue={class:"grid grid-cols-5 gap-4"},ce={class:"flex flex-col space-y-4 col-span-2 order-2"},de={class:"rounded border"},me=e("div",{class:"bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-semibold text-lg"}," Patient Details ",-1),pe={class:"w-full flex items-center",style:{"padding-bottom":"20px"}},he={class:"w-full space-y-2.5 py-5"},_e={class:"w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"},fe=e("p",{class:"font-medium"},"Patient No",-1),ye={class:"w-full py-2 px-4 bg-white-100 flex justify-between items-center"},ge=e("p",{class:"font-medium"},"Name",-1),ve={class:"w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"},be=e("p",{class:"font-medium"},"Age",-1),we={class:"w-full py-2 px-4 bg-white-100 flex justify-between items-center"},xe=e("p",{class:"font-medium"},"Sex",-1),ke={class:"rounded border"},Me=e("div",{class:"bg-gray-50 px-2 py-2 border-b rounded-tl-lg rounded-tr-lg font-semibold text-lg"}," Specimen Details ",-1),Te={class:"w-full flex items-center"},De={class:"w-full space-y-2.5 py-5"},Se={class:"w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"},Ye=e("p",{class:"font-medium"},"Specimen Type",-1),Ce={class:"w-full py-2 px-4 flex justify-between items-center"},Re=e("p",{class:"font-medium"},"Tracking Number",-1),Ne={class:"w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"},Ae=e("p",{class:"font-medium"},"Accession Number",-1),Be={class:"w-full py-2 px-4 flex justify-between items-center"},qe=e("p",{class:"font-medium"},"Status",-1),je={class:"rounded border"},Ie=e("div",{class:"bg-gray-50 px-2 py-2 border-b rounded-tl-lg rounded-tr-lg font-semibold text-lg"}," Test Details ",-1),Ve={class:"w-full flex items-center max-h-60 overflow-y-auto"},Pe={class:"w-full py-5"},Ue={class:"w-full flex items-center pb-0 pt-72"},Le={class:"w-full space-y-2 py-5"},Ee={class:"w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"},Oe=e("p",{class:"font-medium"},"Test Type",-1),Fe={class:"w-full py-2 px-4 bg-white-100 flex justify-between items-center"},ze=e("p",{class:"font-medium"},"Requesting Ward/Location",-1),He={class:"w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"},We=e("p",{class:"font-medium"},"Date Registered",-1),Ge={class:"w-full py-2 px-4 bg-white-100 flex justify-between items-center"},Ke=e("p",{class:"font-medium"},"Receipt Date",-1),$e={class:"w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"},Je=e("p",{class:"font-medium"},"Test Status",-1),Qe={class:"w-full py-2 px-4 bg-white-100 flex justify-between items-center"},Xe=e("p",{class:"font-medium"},"Requesting Physician",-1),Ze={class:"w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"},et=e("p",{class:"font-medium"},"Request Origin",-1),tt={class:"w-full py-2 px-4 bg-white-100 flex justify-between items-center"},st=e("p",{class:"font-medium"},"Registered By",-1),it={class:"w-full py-2 px-4 bg-gray-50 border-t border-b border-dotted flex justify-between items-center"},ot=e("p",{class:"font-medium"},"Performed By",-1),nt={class:"w-full py-2 px-4 bg-white-100 flex justify-between items-center"},rt=e("p",{class:"font-medium"},"Turn around time",-1),at={class:"rounded border order-1 col-span-3"},lt={class:"bg-gray-50 px-2 py-2 border-b rounded-tr rounded-tl font-medium text-md gap-5 flex flex-row"},ut={class:"p-5"},ct={key:0,class:"w-full grid grid-cols-3 gap-4"},dt={key:0,class:"col-span-3 grid grid-cols-3 gap-3"},mt={class:"font-medium"},pt={key:1,class:"col-span-3 grid grid-cols-3 gap-3"},ht={key:0},_t={key:1},ft={class:"text-base font-medium mb-2"},yt={key:2,class:"col-span-3"},gt={class:"font-medium mb-2"},vt={class:"w-full mt-3 relative"},bt=e("p",{class:"font-medium mb-2"},"Remarks",-1);function wt(i,t,o,l,s,n){const d=I,p=U,A=L,B=M("FormKit"),q=M("datepicker"),D=M("RichTextEditor"),j=oe;return u(),c("div",re,[m(d,{pages:s.pages},null,8,["pages"]),e("div",ae,[e("h3",le,a(s.header),1)]),e("div",ue,[e("div",ce,[e("div",de,[me,e("div",null,[e("div",pe,[e("div",he,[e("div",_e,[fe,e("p",null,a(s.patientNo),1)]),e("div",ye,[ge,e("p",null,a(s.name),1)]),e("div",ve,[be,e("p",null,a(s.age),1)]),e("div",we,[xe,e("p",null,a(s.sex_),1)])])])])]),e("div",ke,[Me,e("div",null,[e("div",Te,[e("div",De,[e("div",Se,[Ye,e("p",null,a(s.specimenType),1)]),e("div",Ce,[Re,e("p",null,a(s.trackingNumber),1)]),e("div",Ne,[Ae,e("p",null,a(s.accessionNumber),1)]),e("div",Be,[qe,e("p",null,a(s.testStatus),1)])])])])]),e("div",je,[Ie,e("div",Ve,[e("div",Pe,[e("div",Ue,[e("div",Le,[e("div",Ee,[Oe,e("p",null,a(s.testType),1)]),e("div",Fe,[ze,e("p",null,a(s.requestingWard),1)]),e("div",He,[We,e("p",null,a(s.moment(s.dateRegistered).format("dateFormat"in i?i.dateFormat:Y(R))),1)]),e("div",Ge,[Ke,e("p",null,a(s.moment(s.receiptDate).format("dateFormat"in i?i.dateFormat:Y(R))),1)]),e("div",$e,[Je,e("p",null,a(s.testStatus),1)]),e("div",Qe,[Xe,e("p",null,a(s.requestingPhysician),1)]),e("div",Ze,[et,e("p",null,a(s.requestOrigin),1)]),e("div",tt,[st,e("p",null,a(s.registeredBy),1)]),e("div",it,[ot,e("p",null,a(s.performedBy),1)]),e("div",nt,[rt,e("p",null,a(`${s.turnAroundTime.value} ${Number(s.turnAroundTime.value)==1?s.turnAroundTime.unit.toLowerCase().slice(0,-1):s.turnAroundTime.unit}`),1)])])])])])])]),e("div",at,[e("div",lt,[b(m(p,{text:"Fetch results",color:"warning",icon:s.refreshIcon,loading:s.fetching,disabled:s.resultsPresent,click:()=>n.fetchResults()},null,8,["icon","loading","disabled","click"]),[[w,s.machineOriented]]),m(p,{text:"Print Accession Number",color:"primary",icon:s.printIcon,click:()=>n.printMachine()},null,8,["icon","click"]),b(m(p,{text:"Authorize",color:"success",icon:s.approveIcon,click:()=>n.authorise(),loading:s.authorizing},null,8,["icon","click","loading"]),[[w,n.shouldDisplayButton({status:s.testStatus,completed_by:s.completedBy})]])]),b(e("div",ut,[s.measures.length!==0?(u(),c("div",ct,[n.hasDropdownMeasures?(u(),c("div",dt,[(u(!0),c(x,null,k(n.dropDownMeasures,(r,y)=>(u(),c("div",{key:y},[e("div",null,[e("p",mt,a(r.name),1),m(A,{items:r.ranges,modelValue:r.value,"onUpdate:modelValue":h=>r.value=h},null,8,["items","modelValue","onUpdate:modelValue"])])]))),128))])):f("",!0),n.hasTextInputMeasures?(u(),c("div",pt,[(u(!0),c(x,null,k(n.textInputMeasures,(r,y)=>(u(),c("div",{key:y},[r.type==="numeric"||r.type==="free_text"?(u(),c("div",ht,[r.name.toLowerCase().includes("date")?(u(),c("div",_t,[e("p",ft,a(r.name),1),m(q,{label:r.name,"input-class-name":"datepicker",placeholder:"dd/MM/yyyy",modelValue:r.value.name,"onUpdate:modelValue":h=>r.value.name=h,"text-input":"",format:"dd/MM/yyyy","min-date":new Date},null,8,["label","modelValue","onUpdate:modelValue","min-date"])])):(u(),C(B,{key:0,type:r.name.toLowerCase().includes("comment")?"textarea":"text",label:r.name,modelValue:r.value.name,"onUpdate:modelValue":h=>r.value.name=h,help:r.unit},null,8,["type","label","modelValue","onUpdate:modelValue","help"]))])):f("",!0)]))),128))])):f("",!0),n.hasRichTextMeasures?(u(),c("div",yt,[(u(!0),c(x,null,k(n.richTextEditorMeasures,(r,y)=>(u(),c("div",{key:y},[e("div",null,[e("p",gt,a(r.name),1),m(D,{theme:"snow",class:"editor",content:r.value.name,"onUpdate:content":h=>r.value.name=h,contentType:"html"},null,8,["content","onUpdate:content"])])]))),128))])):f("",!0)])):f("",!0),e("div",vt,[bt,m(D,{theme:"snow",class:"editor",content:s.remarks,"onUpdate:content":t[0]||(t[0]=r=>s.remarks=r),contentType:"html"},null,8,["content"])]),s.testStatus.toLowerCase()!=="verified"?(u(),C(p,{key:1,loading:s.updating,text:"Update Test Results",color:"success",icon:s.arrowDownIcon,click:()=>n.updateTestResults(),class:"mt-5"},null,8,["loading","icon","click"])):f("",!0)],512),[[w,!s.loading]]),m(j,{loading:s.loading},null,8,["loading"])])])])}const Ht=N(ne,[["render",wt]]);export{Ht as default};