import{_ as q}from"./Breadcrumb.vue.49a83cbc.js";import{a as $,b as I,_ as E,g as i,o as m,c as u,d as o,h as l,e,i as v,w as F,v as L,t as h,F as C,r as D,k as A,l as X,f as V,u as G}from"./entry.2af843ec.js";import{_ as z}from"./SearchBar.ae5371fc.js";import{_ as H}from"./Loader.1d3db186.js";import{d as K,e as W}from"./constants.88d4e739.js";import{h as J,e as P,f as j,a as Q,r as Y}from"./fetch.57d6f1d9.js";import{r as S}from"./XMarkIcon.c6b50fd5.js";import{r as Z,a as ee}from"./PencilSquareIcon.907e9dab.js";import{S as U,h as B,U as M,G as O,V as N}from"./transition.e72e7c0f.js";import{_ as te}from"./cone_test_on_nets.cafd6cee.js";import{r as oe}from"./TrashIcon.ca731f43.js";import{_ as se}from"./Datatable.95cb9f37.js";import{P as ne}from"./package.7b60f0bc.js";import{r as ae}from"./MagnifyingGlassIcon.e14f6ba2.js";import{_ as ie}from"./ui_folder.1ad67169.js";import"./nuxt-link.9edf30c5.js";import"./HomeIcon.fc590491.js";import"./network.94e54b94.js";import"./PrinterIcon.9622d56e.js";import"./hidden.1d6e3066.js";const le={components:{TransitionRoot:U,TransitionChild:B,Dialog:M,DialogPanel:O,DialogTitle:N,XMarkIcon:S},data(){return{viewIcon:Z,show:!1,moment:J,loading:!1,details:{name:"",short_name:"",department_id:{id:0,name:""},specimens:{id:0,name:"",expected_turn_around_time:"",created_date:""}}}},setup(){return{cookie:$("token")}},props:{data:{type:Object,required:!0}},methods:{async init(){this.handleClick(),this.loading=!0;const s={route:`${P.viewTestType}/${this.data.id}`,method:"GET",token:`${this.cookie}`},{data:n,error:p,pending:c}=await j(s);this.loading=c,n.value&&(this.details=n.value,this.loading=!1),p.value&&(this.loading=!1,I().$toast.error("An error occurred, please try again!"))},handleClick(){this.show=!this.show}}},re=e("div",{class:"fixed inset-0 bg-black bg-opacity-50"},null,-1),ce={class:"fixed inset-0 overflow-y-auto"},de={class:"flex min-h-full items-center justify-center p-4 text-center"},pe={class:"border-b px-3 py-3 flex items-center justify-between"},_e=e("img",{src:te,class:"w-8 h-8 mr-2"},null,-1),me={class:"flex items-center justify-center mx-auto my-20"},ue={class:"space-y-3 px-5 py-5"},he={class:"w-full flex flex-col space-y-1"},fe=e("label",{class:"font-semibold text-lg"},"Name",-1),ge={class:"w-full flex flex-col space-y-1"},xe=e("label",{class:"font-semibold text-lg"},"Short Name",-1),ye={class:"w-full flex flex-col space-y-1"},ve=e("label",{class:"font-semibold text-lg"},"Laboratory Section",-1),we={class:"w-full flex flex-col space-y-1"},Te=e("label",{class:"font-semibold text-lg"},"Compatible Specimen",-1),be={class:"flex flex-wrap gap-2"},ke={class:"w-full flex flex-col space-y-1"},Ce=e("label",{class:"font-semibold text-lg"},"Organisms",-1),De={class:"flex flex-wrap gap-2"},Ie={key:0},$e={class:"w-full flex flex-col space-y-1"},Ee=e("label",{class:"font-semibold text-lg"},"Measure",-1),Ve={class:"w-full flex flex-col space-y-1"},Pe=e("label",{class:"font-semibold text-lg"},"Expected Turn Around Time",-1),je={class:"w-full flex flex-col space-y-1"},Fe=e("label",{class:"font-semibold text-lg"},"Date Created",-1);function Le(s,n,p,c,t,a){const r=V,d=i("TransitionChild"),f=i("DialogTitle"),w=i("XMarkIcon"),T=H,x=i("DialogPanel"),g=i("Dialog"),k=i("TransitionRoot");return m(),u("div",null,[o(r,{click:a.init,color:"primary",text:"View",icon:t.viewIcon},null,8,["click","icon"]),o(k,{appear:"",show:t.show,as:"template"},{default:l(()=>[o(g,{as:"div",class:"relative z-10"},{default:l(()=>[o(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[re]),_:1}),e("div",ce,[e("div",de,[o(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[o(x,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>{var b,y;return[e("div",pe,[o(f,{as:"h3",class:"text-lg flex items-center font-semibold leading-6"},{default:l(()=>[_e,v(" Test Type Details ")]),_:1}),e("button",{onClick:n[0]||(n[0]=()=>{a.handleClick()})},[o(w,{class:"w-5 h-5"})])]),F(e("div",me,[o(T,{loading:t.loading},null,8,["loading"])],512),[[L,t.loading]]),F(e("div",ue,[e("div",he,[fe,e("p",null,h(t.details.name),1)]),e("div",ge,[xe,e("p",null,h(t.details.short_name),1)]),e("div",ye,[ve,e("p",null,h(t.details.department_id.name),1)]),e("div",we,[Te,e("div",be,[(m(!0),u(C,null,D(t.details.specimens,_=>(m(),u("p",{key:_},h(`${_.name}`),1))),128))])]),e("div",ke,[Ce,e("div",De,[(m(!0),u(C,null,D(t.details.organisms,(_,R)=>(m(),u("p",{key:_},[v(h(`${_.name}`),1),R!==t.details.organisms.length-1?(m(),u("span",Ie,",")):A("",!0)]))),128))])]),e("div",$e,[Ee,(m(!0),u(C,null,D(t.details.indicators,_=>(m(),u("p",{key:_},h(`${_.name}`),1))),128))]),e("div",Ve,[Pe,e("p",null,h(`${(b=t.details.expected_turn_around_time)==null?void 0:b.value} ${(y=t.details.expected_turn_around_time)==null?void 0:y.unit}`),1)]),e("div",je,[Fe,e("p",null,h(t.moment(t.details.created_date).format("dateFormat"in s?s.dateFormat:X(K))),1)])],512),[[L,!t.loading]])]}),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Se=E(le,[["render",Le]]),Ue={components:{TransitionRoot:U,TransitionChild:B,Dialog:M,DialogPanel:O,DialogTitle:N,XMarkIcon:S,ExclamationTriangleIcon:Q},data(){return{show:!1,deleteIcon:oe,loading:!1,cookie:$("token"),reason:""}},props:{data:{type:Object,required:!0}},methods:{async deleteData(s){this.loading=!0;const n={route:`${P.testTypes}/${s}`,method:"DELETE",token:`${this.cookie}`,body:{retired_reason:this.reason}},{data:p,error:c,pending:t}=await j(n);this.loading=t,p.value&&(this.handleClick(),I().$toast.success(`${this.data.name} test type deleted successfully!`),this.loading=!1,this.$emit("update",!0)),c.value&&(console.error(c.value),I().$toast.error(W),this.loading=!1)},handleClick(){this.show=!this.show}}},Be=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Me={class:"fixed inset-0 overflow-y-auto"},Oe={class:"flex min-h-full items-center justify-center p-4 text-center"},Ne={class:"border-b px-3 py-3 flex items-center justify-between"},Re={class:"mt-2 space-y-3 px-5"},qe={class:"rounded px-2 py-2"},Ae={class:"font-semibold text-red-500"},Xe={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Ge(s,n,p,c,t,a){const r=V,d=i("TransitionChild"),f=i("ExclamationTriangleIcon"),w=i("DialogTitle"),T=i("XMarkIcon"),x=i("FormKit"),g=i("DialogPanel"),k=i("Dialog"),b=i("TransitionRoot");return m(),u("div",null,[o(r,{click:a.handleClick,color:"error",text:"Delete",icon:t.deleteIcon},null,8,["click","icon"]),o(b,{appear:"",show:t.show,as:"template"},{default:l(()=>[o(k,{as:"div",class:"relative z-10"},{default:l(()=>[o(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[Be]),_:1}),e("div",Me,[e("div",Oe,[o(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[o(g,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>[e("div",Ne,[o(w,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:l(()=>[o(f,{class:"h-5 w-5 mr-2"}),v(" Confirm delete ")]),_:1}),e("button",{onClick:n[0]||(n[0]=(...y)=>a.handleClick&&a.handleClick(...y))},[o(T,{class:"w-5 h-5"})])]),o(x,{type:"form","submit-label":"Update",onSubmit:n[2]||(n[2]=y=>a.deleteData(p.data.id)),actions:!1},{default:l(({value:y})=>[e("div",Re,[e("div",qe,[v(" Do you really want to delete "),e("span",Ae,h(p.data.name),1),v("? Note that once this action is completed, it can not be undone ")]),o(x,{type:"textarea",label:"Reason",validation:"required",modelValue:t.reason,"onUpdate:modelValue":n[1]||(n[1]=_=>t.reason=_)},null,8,["modelValue"])]),e("div",Xe,[o(r,{loading:t.loading,type:"submit",click:()=>{},color:"error",icon:t.deleteIcon,text:"Delete"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const ze=E(Ue,[["render",Ge]]),He={components:{MagnifyingGlassIcon:ae},setup(){G({title:`${ne.name.toUpperCase()} - Test Types`})},data(){return{header:"Test Types",loading:!0,addIcon:Y,pages:[{name:"Home",link:"/home"},{name:"Test Catalog",link:"#"}],editIcon:ee,showEdit:!1,serverItemsLength:0,serverOptions:{page:1,rowsPerPage:25,sortBy:"name"},search:"",testTypes:new Array,cookie:$("token"),headers:[{text:"name",value:"name",sortable:!0},{text:"short name",value:"short_name"},{text:"expected turn around time",value:"expected_turn_around_time"},{text:"actions",value:"actions"}],searchField:"name",searchValue:""}},created(){this.init()},methods:{async init(){const{page:s,rowsPerPage:n}=this.serverOptions;this.loading=!0;const p={route:`${P.testTypes}?page=${s}&per_page=${n}&search=${this.search}`,method:"GET",token:`${this.cookie}`,body:{}};let{data:c,error:t,pending:a}=await j(p);this.loading=a,c.value&&(this.testTypes=c.value.test_types.map(r=>{var d,f;return{...r,expected_turn_around_time:`${r.expected_turn_around_time!==null?((d=r.expected_turn_around_time)==null?void 0:d.value)+" "+(r.expected_turn_around_time.unit==null?"":(f=r.expected_turn_around_time.unit)==null?void 0:f.toLowerCase()):""}`}}),this.serverItemsLength=c.value.meta.total_count),t.value&&console.error(t.value)},updateTestTypes(s){typeof s=="object"&&(this.serverOptions=s),this.init()},updateSearch(s){this.searchValue=s,this.search=s,this.updateTestTypes(!0)},edit(s){this.showEdit=!0},navigateToEdit(s){const n=s.name.trim().toLowerCase().replace(/[\s\W-]+/g,"-").replace(/^-+|-+$/g,"");this.$router.push(`/test-catalog/test-types/edit/${n}?testType=${s.id}`)},createTestType(){this.$router.push("/test-catalog/test-types/create")}}},Ke={class:"px-5 py-5"},We={class:"flex items-center justify-between py-5"},Je={class:"text-2xl font-semibold flex items-center uppercase"},Qe=e("img",{src:ie,alt:"report-icon",class:"w-8 h-8 mr-2"},null,-1),Ye={class:"flex items-center space-x-3"},Ze={class:"flex justify-end w-full px-2 py-2 mb-2"},et={class:"py-2 flex items-center space-x-2"};function tt(s,n,p,c,t,a){const r=q,d=V,f=z,w=Se,T=ze,x=se;return m(),u("div",Ke,[o(r,{pages:t.pages},null,8,["pages"]),e("div",We,[e("div",Je,[Qe,v(" "+h(t.header),1)]),e("div",Ye,[o(d,{text:"Create Test Type",icon:t.addIcon,color:"primary",click:a.createTestType},null,8,["icon","click"])])]),e("div",Ze,[o(f,{search:t.search,onUpdate:a.updateSearch},null,8,["search","onUpdate"])]),o(x,{headers:t.headers,data:t.testTypes,loading:t.loading,searchField:t.searchField,searchValue:t.searchValue,serverItemsLength:t.serverItemsLength,serverOptions:t.serverOptions,onUpdate:a.updateTestTypes},{actions:l(({item:g})=>[e("div",et,[o(w,{onEdit:a.edit,open:t.showEdit,data:g},null,8,["onEdit","open","data"]),o(d,{click:()=>{a.navigateToEdit(g)},color:"success",text:"Edit",icon:t.editIcon},null,8,["click","icon"]),o(T,{onUpdate:a.updateTestTypes,data:g},null,8,["onUpdate","data"])])]),_:1},8,["headers","data","loading","searchField","searchValue","serverItemsLength","serverOptions","onUpdate"])])}const Tt=E(He,[["render",tt]]);export{Tt as default};