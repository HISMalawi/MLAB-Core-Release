var N=Object.defineProperty;var A=(s,e,n)=>e in s?N(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var m=(s,e,n)=>(A(s,typeof e!="symbol"?e+"":e,n),n);import{_ as q}from"./Breadcrumb.vue.e3e89550.js";import{_ as P}from"./nuxt-link.cd4ac04e.js";import{_ as B}from"./Dropdown.ab1751ca.js";import{u as E,ap as L,a as O,b as c,_ as U,h,o as x,c as g,e as t,d as a,j as b,i as w,t as p,n as f,w as F,U as I,l as H,ao as J,f as R}from"./entry.ede29211.js";import{u as v,h as M,A as d,v as K,k as Y,e as W,f as j,w as u,P as z}from"./fetch.7c05310f.js";import{e as G}from"./constants.ee9a0283.js";import{P as Q}from"./package.6544c22a.js";import{r as X}from"./IdentificationIcon.d934a98f.js";import{r as Z}from"./ArrowDownTrayIcon.a1ec8672.js";import{r as $}from"./CheckIcon.6472b009.js";import{F as ee,K as te,B as se,N as ie,H as ne}from"./listbox.b2d98ace.js";import{_ as oe}from"./medical_sample.34f807d8.js";import"./HomeIcon.e5ce52a1.js";import"./CheckCircleIcon.7771a99b.js";import"./MagnifyingGlassIcon.ca94e239.js";import"./network.8dfa1f5e.js";import"./transition.a542e4ff.js";import"./hidden.43ef53b5.js";import"./XMarkIcon.e9883b5f.js";import"./PencilSquareIcon.8f17322d.js";import"./PrinterIcon.41d0b58e.js";import"./use-text-value.ab5a185c.js";class ae{constructor(e){m(this,"client",{id:"",uuid:""});m(this,"tests",[]);m(this,"order",{priority:1,requested_by:"",collected_by:v().$state.department,sample_collected_time:"",tracking_number:""});m(this,"encounter",{sending_facility:1,encounter_type:1,facility_section:1});this.client.id=e}createEncounter(e,n){this.encounter={...this.encounter,encounter_type:e,facility_section:n}}buildOrder(e="",n=M().format("YYYY-MM-DD HH:mm:ss")){this.order.requested_by=e,this.order.sample_collected_time=n}setTests(e,n){this.tests=n.map(r=>({specimen:e,test_type:r}))}async createOrder(e){return d.postJson("orders",{tests:this.tests,order:this.order,encounter:this.encounter,client:this.client,lab_location:e})}}const le={components:{Listbox:ee,ListboxButton:te,ListboxLabel:se,ListboxOptions:ie,ListboxOption:ne,IdentificationIcon:X},setup(){E({title:`${Q.name.toUpperCase()} - New Test`})},data(){return{ArrowDownTrayIcon:Z,CheckIcon:$,pages:[{name:"Home",link:"/home"},{name:"Tests",link:"/tests"}],patient:{date_of_birth:"",first_name:"",middle_name:"",last_name:"",client_id:0,id:0,sex:"",birth_date_estimated:!1},visitTypes:new Array,specimens:new Array,wards:new Array,tests:new Array,visitTypeSelected:{name:"select visit type",id:0},specimenSelected:{name:"select specimen",id:0},wardSelected:{name:"select ward",id:0},testsSelected:new Array,physician:"",sampleCollectionDate:"",requestingTitle:"Requesting Ward",isBDE:!1,authStore:v(),alert:K(),route:L(),token:O("token")}},computed:{patientAge(){return Y(this.patient.date_of_birth)},patientSex(){return this.patient.sex.match(/f/i)?"Female":"Male"},patientName(){return`${this.patient.first_name} ${this.patient.middle_name} ${this.patient.last_name}`},patientNumber(){return this.patient.client_id},currentDepartment(){return this.authStore.user.departments.find(s=>s.name===this.authStore.department)}},methods:{getPatient(s){const e={route:`${W.clients}/${s}`,method:"GET",token:`${this.token}`};j(e).then(({data:n,error:r,pending:i})=>{n.value&&(this.patient=n.value),r.value&&console.error(G)})},getIdFromName(s,e){const n=s.find(r=>r.name===e);return n?n.id:null},async saveChanges(){const s=new ae(this.patient.client_id);s.createEncounter(this.visitTypeSelected.id,this.wardSelected.id),s.buildOrder(this.physician,this.sampleCollectionDate),s.setTests(this.specimenSelected.id,this.testsSelected);const e=this.getIdFromName(this.authStore.locations,this.authStore.selectedLocation),n=await s.createOrder(Number(e));u(n)||(c().$toast.success(`Order with accession number ${n.accession_number} has been created successfully!`),await this.alert.alertConfirmation({message:"Do you want to print specimen label?"})&&await z.printSpecimenLabel(n.accession_number)),c().$router.push("/tests")},validator(){return this.visitTypeSelected.id==0?(c().$toast.warning("Please select visit type and try again!"),!1):this.specimenSelected.id==0?(c().$toast.warning("Please select specimen and try again!"),!1):this.wardSelected.id==0?(c().$toast.warning("Please select ward and try again!"),!1):this.testsSelected.length==0?(c().$toast.warning("Please select tests and try again!"),!1):!0}},watch:{async visitTypeSelected(s){s.name.toLowerCase()=="referral"?(this.requestingTitle="Requesting Facility",this.wardSelected={name:"select facility",id:0}):this.requestingTitle="Requesting Ward",this.wards=new Array,u(this.wards[s.id])&&(this.wards=await d.getJson("encounter_type_facility_section_mappings/facility_sections",{encounter_type_id:s.id}))},async specimenSelected(s){u(this.tests[s.id])&&(this.tests[s.id]=await d.getJson("specimen/test_types",{specimen_id:s.id,department_id:this.currentDepartment.id})||[])},async authStore(s){for(const e in this.tests)this.tests.hasOwnProperty(e)&&delete this.tests[e];u(this.specimenSelected)||(this.tests[this.specimenSelected.id]=await d.getJson("specimen/test_types",{specimen_id:this.specimenSelected.id,department_id:s.user.departments.find(e=>e.name===s.department).id})||[])}},created(){d.getJson("encounter_types").then(s=>this.visitTypes=s.data),d.getJson("specimen").then(s=>this.specimens=s),this.getPatient(this.route.query.patient_id)}},re={class:"py-5 px-5"},ce={class:"mt-5"},de={class:"flex items-center space-x-2"},me=t("img",{src:oe,class:"w-auto h-6",alt:"flash-icon"},null,-1),pe={class:"text-xl font-semibold uppercase"},ue={class:"border rounded mt-5"},_e=t("div",{class:"bg-gray-50 flex items-center space-x-3 px-2 py-2 rounded-tr rounded-tl border-b"},[t("img",{src:J,class:"h-8 w-auto",alt:"fever-icon"}),t("h3",{class:"font-semibold text-lg"},"Patient Details")],-1),he={class:"w-full py-5 px-5"},fe={class:"flex items-center space-x-20"},ye={class:"flex items-center space-x-3"},xe=t("h3",{class:"font-medium"},"Patient Number:",-1),ge={class:"mt-1 text-gray-600"},be={class:"flex items-center space-x-3"},we=t("h3",{class:"font-medium"},"Age",-1),ve={class:"mt-1 text-gray-600"},Se={class:"flex items-center space-x-3"},ke=t("h3",{class:"font-medium"},"Sex:",-1),Ve={class:"mt-1 text-gray-600"},Ce={class:"border mt-5 rounded"},Te=t("div",{class:"bg-gray-50 flex items-center space-x-3 px-2 py-2 rounded-tr rounded-tl border-b"},[t("h3",{class:"font-semibold text-lg"},"Order Details")],-1),De={class:"px-5 py-5"},Ne={class:"w-full mb-5"},Ae={class:"flex flex-col space-y-2"},qe={class:"w-full flex items-center space-x-10 mb-5"},Pe={class:"w-1/2 flex flex-col space-y-2"},Be=t("label",{class:"font-medium"},"Visit Type",-1),Ee={class:"w-1/2 flex flex-col space-y-2"},Le={class:"font-medium"},Oe={class:"w-full flex items-center space-x-10 mb-5"},Ue={class:"w-1/2 flex flex-col space-y-2"},Fe=t("label",{class:"font-medium"},"Specimen Type",-1),Ie={class:"w-1/2 flex flex-col space-y-2"},He=t("label",{class:"font-medium"},"Tests",-1),Je={class:"w-full my-6"},Re=t("label",{class:"font-medium"},"Back Data Entry",-1),Me={key:0,class:"w-full mb-5 flex flex-col space-y-2"},Ke=t("label",{class:"font-medium"},"Sample collection date",-1),Ye={class:"w-full"};function We(s,e,n,r,i,l){const S=q,k=P,y=h("FormKit"),_=B,V=h("multi-select"),C=h("datepicker"),T=R;return x(),g("div",null,[t("div",re,[a(S,{pages:i.pages},null,8,["pages"]),t("div",ce,[t("div",de,[me,t("h3",pe,[b(" New order for "),t("span",null,[a(k,{class:"text-sky-500 text-xl font-semibold",to:`/patients?search=${l.patientName.toLowerCase().replace(" ","+")}`},{default:w(()=>[b(" “"+p(l.patientName)+"” ",1)]),_:1},8,["to"])])])]),t("div",ue,[_e,t("div",he,[t("div",fe,[t("div",ye,[xe,t("p",ge,p(l.patientNumber),1)]),t("div",be,[we,t("p",ve,p(l.patientAge)+" years old",1)]),t("div",Se,[ke,t("p",Ve,p(l.patientSex),1)])])])]),a(y,{type:"form","submit-label":"Update",onSubmit:e[7]||(e[7]=D=>l.validator()&&l.saveChanges()),actions:!1,id:"submitForm"},{default:w(({value:D})=>[t("div",Ce,[Te,t("div",De,[t("div",Ne,[t("div",Ae,[a(y,{label:"Requesting Physician",validation:"required",modelValue:i.physician,"onUpdate:modelValue":e[0]||(e[0]=o=>i.physician=o)},null,8,["modelValue"])])]),t("div",qe,[t("div",Pe,[Be,a(_,{items:i.visitTypes,modelValue:i.visitTypeSelected,"onUpdate:modelValue":e[1]||(e[1]=o=>i.visitTypeSelected=o),class:f(i.visitTypeSelected.name=="select visit type"&&"text-gray-600")},null,8,["items","modelValue","class"])]),t("div",Ee,[t("label",Le,p(i.requestingTitle),1),a(_,{isSearchable:"",items:i.wards,modelValue:i.wardSelected,"onUpdate:modelValue":e[2]||(e[2]=o=>i.wardSelected=o),class:f(i.wardSelected.name=="select ward"&&"text-gray-600")},null,8,["items","modelValue","class"])])]),t("div",Oe,[t("div",Ue,[Fe,a(_,{items:i.specimens,modelValue:i.specimenSelected,"onUpdate:modelValue":e[3]||(e[3]=o=>i.specimenSelected=o),class:f(i.specimenSelected.name=="select specimen"&&"text-gray-600")},null,8,["items","modelValue","class"])]),t("div",Ie,[He,a(V,{required:!0,style:{"--ms-max-height":"none !important"},modelValue:i.testsSelected,"onUpdate:modelValue":e[4]||(e[4]=o=>i.testsSelected=o),options:i.tests[i.specimenSelected.id||0],placeholder:"select tests",mode:"tags",clear:"",searchable:"",class:"focus:ring-none fcus:border-none focus:outline-none multiselect-green"},null,8,["modelValue","options"])])]),t("div",Je,[F(t("input",{type:"checkbox",placeholder:"Name of physician",class:"mr-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-none transition duration-150","onUpdate:modelValue":e[5]||(e[5]=o=>i.isBDE=o)},null,512),[[I,i.isBDE]]),Re]),i.isBDE?(x(),g("div",Me,[Ke,a(C,{required:"",position:"left",placeholder:"select date",range:!1,"input-class-name":"datepicker",modelValue:i.sampleCollectionDate,"onUpdate:modelValue":e[6]||(e[6]=o=>i.sampleCollectionDate=o)},null,8,["modelValue"])])):H("",!0),t("div",Ye,[a(T,{type:"submit",text:"Place order",color:"primary",icon:i.CheckIcon,click:()=>{}},null,8,["icon"])])])])]),_:1})])])])}const ft=U(le,[["render",We]]);export{ft as default};