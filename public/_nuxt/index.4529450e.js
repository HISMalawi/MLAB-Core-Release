var D=Object.defineProperty;var k=(s,e,n)=>e in s?D(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var r=(s,e,n)=>(k(s,typeof e!="symbol"?e+"":e,n),n);import{_ as A}from"./Breadcrumb.cfeb06ed.js";import{_ as T}from"./Dropdown.28b1fd1d.js";import{ap as C,u as B,a as f,_ as N,f as _,o as y,c as x,d as t,b as l,t as m,g as q,w as b,O as E,ah as O,j as U,e as P}from"./entry.6a3fbfc1.js";import{u as w,h as I,A as c,p as L,d as J,e as M,f as H,q as p,P as F}from"./fetch.444ade97.js";import{e as K}from"./constants.cf42f90d.js";import{r as R}from"./IdentificationIcon.debd112a.js";import{r as Y}from"./ArrowDownTrayIcon.fa0f85a0.js";import{B as j,N as G,K as W,H as z,U as Q}from"./listbox.064b6dcd.js";import"./nuxt-link.bebad584.js";import"./HomeIcon.54ceb79b.js";import"./CheckIcon.9343e206.js";import"./CheckCircleIcon.6ff04472.js";import"./MagnifyingGlassIcon.ba982fe1.js";import"./transition.9bb58b2a.js";import"./hidden.e85239c2.js";import"./XMarkIcon.fd9a39e2.js";import"./PencilSquareIcon.79aa7948.js";import"./PrinterIcon.b8623d34.js";import"./use-text-value.75cce7ff.js";class X{constructor(e){r(this,"client",{id:"",uuid:""});r(this,"tests",[]);r(this,"order",{priority:1,requested_by:"",collected_by:w().$state.department,sample_collected_time:"",tracking_number:""});r(this,"encounter",{sending_facility:1,encounter_type:1,facility_section:1});this.client.id=e}createEncounter(e,n){this.encounter={...this.encounter,encounter_type:e,facility_section:n}}buildOrder(e="",n=I().format("YYYY-MM-DD HH:mm:ss")){this.order.requested_by=e,this.order.sample_collected_time=n}setTests(e,n){this.tests=n.map(d=>({specimen:e,test_type:d}))}async createOrder(){return c.postJson("orders",{tests:this.tests,order:this.order,encounter:this.encounter,client:this.client})}}const Z={components:{Listbox:j,ListboxButton:G,ListboxLabel:W,ListboxOptions:z,ListboxOption:Q,IdentificationIcon:R},data(){return{ArrowDownTrayIcon:Y,pages:[{name:"Home",link:"/home"},{name:"Tests",link:"/tests"}],patient:{date_of_birth:"",first_name:"",middle_name:"",last_name:"",client_id:0,id:0,sex:"",birth_date_estimated:!1},visitTypes:new Array,specimens:new Array,wards:new Array,tests:new Array,visitTypeSelected:{name:"-- select visit type --",id:0},specimenSelected:{name:"-- select specimen --",id:0},wardSelected:{name:"-- select ward --",id:0},testsSelected:new Array,physician:"",sampleCollectionDate:"",isBDE:!1,authStore:w(),alert:L(),route:C(),token:B("token")}},computed:{patientAge(){return J(this.patient.date_of_birth)},patientSex(){return this.patient.sex.match(/f/i)?"Female":"Male"},patientName(){return`${this.patient.first_name} ${this.patient.middle_name} ${this.patient.last_name}`},patientNumber(){return this.patient.client_id},currentDepartment(){return this.authStore.user.departments.find(s=>s.name===this.authStore.department)}},methods:{getPatient(s){const e={route:`${M.clients}/${s}`,method:"GET",token:`${this.token}`};H(e).then(({data:n,error:d,pending:i})=>{n.value&&(this.patient=n.value),d.value&&console.error(K)})},async saveChanges(){const s=new X(this.patient.client_id);s.createEncounter(this.visitTypeSelected.id,this.wardSelected.id),s.buildOrder(this.physician,this.sampleCollectionDate),s.setTests(this.specimenSelected.id,this.testsSelected);const e=await s.createOrder();p(e)||(f().$toast.success(`Order with accession number ${e.accession_number} has been created successfully!`),await this.alert.alertConfirmation({message:"Do you want to print specimen label?"})&&await F.printSpecimenLabel(e.accession_number)),f().$router.push("/tests")}},watch:{async visitTypeSelected(s){this.wards=new Array,p(this.wards[s.id])&&(this.wards=await c.getJson("encounter_type_facility_section_mappings/facility_sections",{encounter_type_id:s.id}))},async specimenSelected(s){p(this.tests[s.id])&&(this.tests[s.id]=await c.getJson("specimen/test_types",{specimen_id:s.id,department_id:this.currentDepartment.id})||[])},async authStore(s){for(const e in this.tests)this.tests.hasOwnProperty(e)&&delete this.tests[e];p(this.specimenSelected)||(this.tests[this.specimenSelected.id]=await c.getJson("specimen/test_types",{specimen_id:this.specimenSelected.id,department_id:s.user.departments.find(e=>e.name===s.department).id})||[])}},created(){c.getJson("encounter_types").then(s=>this.visitTypes=s.data),c.getJson("specimen").then(s=>this.specimens=s),this.getPatient(this.route.query.patient_id)}},$={class:"py-5 px-5"},ee={class:"mt-5"},te={class:"text-xl font-medium"},se={class:"border rounded mt-5"},ie={class:"bg-gray-50 flex items-center space-x-3 px-2 py-2 rounded-tr rounded-tl border-b"},ne=t("h3",{class:"font-semibold text-lg"},"Patient Details",-1),oe={class:"w-full py-5 px-5"},le={class:"flex items-center space-x-20"},ce={class:"flex items-center space-x-3"},ae=t("h3",{class:"text-lg font-medium"},"Patient Number:",-1),re={class:"mt-1 text-gray-600"},de={class:"flex items-center space-x-3"},me=t("h3",{class:"text-lg font-medium"},"Age",-1),pe={class:"mt-1 text-gray-600"},ue={class:"flex items-center space-x-3"},_e=t("h3",{class:"text-lg font-medium"},"Sex:",-1),he={class:"mt-1 text-gray-600"},fe={class:"border px-5 py-5 mt-5 rounded"},ye={class:"w-full mb-5"},xe={class:"flex flex-col space-y-2"},be={class:"w-full flex items-center space-x-10 mb-5"},we={class:"w-1/2 flex flex-col space-y-2"},ge=t("label",{class:"font-medium"},"Visit Type",-1),ve={class:"w-1/2 flex flex-col space-y-2"},Se=t("label",{class:"font-medium"},"Requesting Ward",-1),Ve={class:"w-full flex items-center space-x-10 mb-5"},De={class:"w-1/2 flex flex-col space-y-2"},ke=t("label",{class:"font-medium"},"Specimen Type",-1),Ae={class:"w-1/2 flex flex-col space-y-2"},Te=t("label",{class:"font-medium"},"Tests",-1),Ce={class:"w-full my-6"},Be=t("label",{class:"font-medium"},"Back Data Entry",-1),Ne={key:0,class:"w-full mb-5 flex flex-col space-y-2"},qe=t("label",{class:"font-medium"},"Sample collection date",-1),Ee={class:"w-full"};function Oe(s,e,n,d,i,a){const g=A,v=_("IdentificationIcon"),h=_("FormKit"),u=T,S=_("multi-select"),V=P;return y(),x("div",null,[t("div",$,[l(g,{pages:i.pages},null,8,["pages"]),t("div",ee,[t("h3",te,"New test for "+m(a.patientName),1),t("div",se,[t("div",ie,[l(v,{class:"w-5 h-5"}),ne]),t("div",oe,[t("div",le,[t("div",ce,[ae,t("p",re,m(a.patientNumber),1)]),t("div",de,[me,t("p",pe,m(a.patientAge)+" years old",1)]),t("div",ue,[_e,t("p",he,m(a.patientSex),1)])])])]),l(h,{type:"form","submit-label":"Update",onSubmit:a.saveChanges,actions:!1,id:"submitForm"},{default:q(({value:Ue})=>[t("div",fe,[t("div",ye,[t("div",xe,[l(h,{label:"Requesting Physician",validation:"required",modelValue:i.physician,"onUpdate:modelValue":e[0]||(e[0]=o=>i.physician=o)},null,8,["modelValue"])])]),t("div",be,[t("div",we,[ge,l(u,{items:i.visitTypes,modelValue:i.visitTypeSelected,"onUpdate:modelValue":e[1]||(e[1]=o=>i.visitTypeSelected=o)},null,8,["items","modelValue"])]),t("div",ve,[Se,l(u,{items:i.wards,modelValue:i.wardSelected,"onUpdate:modelValue":e[2]||(e[2]=o=>i.wardSelected=o)},null,8,["items","modelValue"])])]),t("div",Ve,[t("div",De,[ke,l(u,{items:i.specimens,modelValue:i.specimenSelected,"onUpdate:modelValue":e[3]||(e[3]=o=>i.specimenSelected=o)},null,8,["items","modelValue"])]),t("div",Ae,[Te,l(S,{required:!0,style:{"--ms-max-height":"none !important"},modelValue:i.testsSelected,"onUpdate:modelValue":e[4]||(e[4]=o=>i.testsSelected=o),options:i.tests[i.specimenSelected.id||0],placeholder:"-- select tests --",mode:"tags",clear:"",searchable:"",class:"focus:ring-none fcus:border-none focus:outline-none multiselect-green"},null,8,["modelValue","options"])])]),t("div",Ce,[b(t("input",{type:"checkbox",placeholder:"Name of physician",class:"mr-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-none transition duration-150","onUpdate:modelValue":e[5]||(e[5]=o=>i.isBDE=o)},null,512),[[E,i.isBDE]]),Be]),i.isBDE?(y(),x("div",Ne,[qe,b(t("input",{type:"date",class:"w-full border rounded px-1.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-none transition duration-150","onUpdate:modelValue":e[6]||(e[6]=o=>i.sampleCollectionDate=o)},null,512),[[O,i.sampleCollectionDate]])])):U("",!0),t("div",Ee,[l(V,{type:"submit",text:"Place order",color:"success",icon:i.ArrowDownTrayIcon,click:()=>{}},null,8,["icon"])])])]),_:1},8,["onSubmit"])])])])}const st=N(Z,[["render",Oe]]);export{st as default};