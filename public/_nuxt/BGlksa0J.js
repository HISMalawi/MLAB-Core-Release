import{_ as z}from"./u_i5tT18.js";import{a as j,u as D,l as S,m as i,b as r,e as _,f as o,n as l,g as e,p as v,i as M,v as O,t as h,F as $,j as P,s as k,h as C,_ as B,k as H,P as K,x as E}from"./CgCt1uig.js";import{_ as Y}from"./D5NS-hCo.js";import{d as W,e as J}from"./C7nrlxI_.js";import{h as Q,e as F,f as L,r as Z}from"./DDP8Pd40.js";import{r as R}from"./CosnS5_S.js";import{r as ee,a as te}from"./9jRWjONT.js";import{S as U,h as q,Y as N,G as A,V as X}from"./BBi4X6kY.js";import{_ as se}from"./BpeEZWNp.js";import{r as oe}from"./D8JfA7oG.js";import{r as ae}from"./BOxnxsxl.js";import{_ as ne}from"./DQ0UyYB3.js";import{u as V}from"./BsFmwtoj.js";import{u as ie}from"./Kt-y9hP3.js";import{P as le}from"./Bf5grz7u.js";import{r as re}from"./CarKmmQ_.js";import{_ as ce}from"./VmwGiaas.js";import"./DAatDIeb.js";import"./CDGutsna.js";import"./22U_Ornm.js";import"./DDaZZI9g.js";import"./q9WmgNLv.js";import"./CM5UAy9z.js";import"./CEii_6Qs.js";const de={components:{TransitionRoot:U,TransitionChild:q,Dialog:N,DialogPanel:A,DialogTitle:X,XMarkIcon:R},data(){return{viewIcon:ee,show:!1,moment:Q,loading:!1,details:{name:"",short_name:"",department_id:{id:0,name:""},specimens:{id:0,name:"",expected_turn_around_time:"",created_date:""}}}},setup(){return{cookie:j("token")}},props:{data:{type:Object,required:!0}},methods:{async init(){this.handleClick(),this.loading=!0;const s={route:`${F.viewTestType}/${this.data.id}`,method:"GET",token:`${this.cookie}`},{data:a,error:p,pending:d}=await L(s);this.loading=d,a.value&&(this.details=a.value,this.loading=!1),p.value&&(this.loading=!1,D().$toast.error("An error occurred, please try again!"))},handleClick(){this.show=!this.show}}},me=e("div",{class:"fixed inset-0 bg-black bg-opacity-50"},null,-1),pe={class:"fixed inset-0 overflow-y-auto"},ue={class:"flex min-h-full items-center justify-center p-4 text-center"},_e={class:"border-b px-3 py-3 flex items-center justify-between"},he=e("img",{src:se,class:"w-8 h-8 mr-2"},null,-1),fe={class:"flex items-center justify-center mx-auto my-20"},ge={class:"space-y-3 px-5 py-5"},xe={class:"w-full flex flex-col space-y-1"},ye=e("label",{class:"font-semibold text-lg"},"Name",-1),ve={class:"w-full flex flex-col space-y-1"},we=e("label",{class:"font-semibold text-lg"},"Short Name",-1),Te={class:"w-full flex flex-col space-y-1"},be=e("label",{class:"font-semibold text-lg"},"Laboratory Section",-1),ke={class:"w-full flex flex-col space-y-1"},Ce=e("label",{class:"font-semibold text-lg"},"Compatible Specimen",-1),De={class:"flex flex-wrap gap-2"},Ie={class:"w-full flex flex-col space-y-1"},$e=e("label",{class:"font-semibold text-lg"},"Organisms",-1),Pe={class:"flex flex-wrap gap-2"},Ee={key:0},Ve={class:"w-full flex flex-col space-y-1"},je=e("label",{class:"font-semibold text-lg"},"Measure",-1),Se={class:"w-full flex flex-col space-y-1"},Be=e("label",{class:"font-semibold text-lg"},"Expected Turn Around Time",-1),Fe={class:"w-full flex flex-col space-y-1"},Le=e("label",{class:"font-semibold text-lg"},"Date Created",-1);function Me(s,a,p,d,t,n){const c=B,m=i("TransitionChild"),f=i("DialogTitle"),w=i("XMarkIcon"),T=H,x=i("DialogPanel"),g=i("Dialog"),I=i("TransitionRoot");return r(),_("div",null,[o(c,{click:n.init,color:"primary",text:"View",icon:t.viewIcon},null,8,["click","icon"]),o(I,{appear:"",show:t.show,as:"template"},{default:l(()=>[o(g,{as:"div",class:"relative z-10"},{default:l(()=>[o(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[me]),_:1}),e("div",pe,[e("div",ue,[o(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[o(x,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>{var b,y;return[e("div",_e,[o(f,{as:"h3",class:"text-lg flex items-center font-semibold leading-6"},{default:l(()=>[he,v(" Test Type Details ")]),_:1}),e("button",{onClick:a[0]||(a[0]=()=>{n.handleClick()})},[o(w,{class:"w-5 h-5"})])]),M(e("div",fe,[o(T,{loading:t.loading},null,8,["loading"])],512),[[O,t.loading]]),M(e("div",ge,[e("div",xe,[ye,e("p",null,h(t.details.name),1)]),e("div",ve,[we,e("p",null,h(t.details.short_name),1)]),e("div",Te,[be,e("p",null,h(t.details.department_id.name),1)]),e("div",ke,[Ce,e("div",De,[(r(!0),_($,null,P(t.details.specimens,u=>(r(),_("p",{key:u},h(`${u.name}`),1))),128))])]),e("div",Ie,[$e,e("div",Pe,[(r(!0),_($,null,P(t.details.organisms,(u,G)=>(r(),_("p",{key:u},[v(h(`${u.name}`),1),G!==t.details.organisms.length-1?(r(),_("span",Ee,",")):k("",!0)]))),128))])]),e("div",Ve,[je,(r(!0),_($,null,P(t.details.indicators,u=>(r(),_("p",{key:u},h(`${u.name}`),1))),128))]),e("div",Se,[Be,e("p",null,h(`${(b=t.details.expected_turn_around_time)==null?void 0:b.value} ${(y=t.details.expected_turn_around_time)==null?void 0:y.unit}`),1)]),e("div",Fe,[Le,e("p",null,h(t.moment(t.details.created_date).format("dateFormat"in s?s.dateFormat:C(W))),1)])],512),[[O,!t.loading]])]}),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Oe=S(de,[["render",Me]]),Re={components:{TransitionRoot:U,TransitionChild:q,Dialog:N,DialogPanel:A,DialogTitle:X,XMarkIcon:R,ExclamationTriangleIcon:oe},data(){return{show:!1,deleteIcon:ae,loading:!1,cookie:j("token"),reason:""}},props:{data:{type:Object,required:!0}},methods:{async deleteData(s){this.loading=!0;const a={route:`${F.testTypes}/${s}`,method:"DELETE",token:`${this.cookie}`,body:{retired_reason:this.reason}},{data:p,error:d,pending:t}=await L(a);this.loading=t,p.value&&(this.handleClick(),D().$toast.success(`${this.data.name} test type deleted successfully!`),this.loading=!1,this.$emit("update",!0)),d.value&&(console.error(d.value),D().$toast.error(J),this.loading=!1)},handleClick(){this.show=!this.show}}},Ue=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),qe={class:"fixed inset-0 overflow-y-auto"},Ne={class:"flex min-h-full items-center justify-center p-4 text-center"},Ae={class:"border-b px-3 py-3 flex items-center justify-between"},Xe={class:"mt-2 space-y-3 px-5"},Ge={class:"rounded px-2 py-2"},ze={class:"font-semibold text-red-500"},He={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function Ke(s,a,p,d,t,n){const c=B,m=i("TransitionChild"),f=i("ExclamationTriangleIcon"),w=i("DialogTitle"),T=i("XMarkIcon"),x=i("FormKit"),g=i("DialogPanel"),I=i("Dialog"),b=i("TransitionRoot");return r(),_("div",null,[o(c,{click:n.handleClick,color:"error",text:"Delete",icon:t.deleteIcon},null,8,["click","icon"]),o(b,{appear:"",show:t.show,as:"template"},{default:l(()=>[o(I,{as:"div",class:"relative z-10"},{default:l(()=>[o(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[Ue]),_:1}),e("div",qe,[e("div",Ne,[o(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[o(g,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>[e("div",Ae,[o(w,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:l(()=>[o(f,{class:"h-5 w-5 mr-2"}),v(" Confirm delete ")]),_:1}),e("button",{onClick:a[0]||(a[0]=(...y)=>n.handleClick&&n.handleClick(...y))},[o(T,{class:"w-5 h-5"})])]),o(x,{type:"form","submit-label":"Update",onSubmit:a[2]||(a[2]=y=>n.deleteData(p.data.id)),actions:!1},{default:l(({value:y})=>[e("div",Xe,[e("div",Ge,[v(" Do you really want to delete "),e("span",ze,h(p.data.name),1),v("? Note that once this action is completed, it can not be undone ")]),o(x,{type:"textarea",label:"Reason",validation:"required",modelValue:t.reason,"onUpdate:modelValue":a[1]||(a[1]=u=>t.reason=u)},null,8,["modelValue"])]),e("div",He,[o(c,{loading:t.loading,type:"submit",click:()=>{},color:"error",icon:t.deleteIcon,text:"Delete"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Ye=S(Re,[["render",Ke]]),We={components:{MagnifyingGlassIcon:re},setup(){ie({title:`${le.name.toUpperCase()} - Test Types`})},data(){return{header:"Test Types",loading:!0,addIcon:Z,pages:[{name:"Home",link:"/home"},{name:"Test Catalog",link:"#"}],editIcon:te,showEdit:!1,serverItemsLength:0,serverOptions:{page:1,rowsPerPage:25,sortBy:"name"},search:"",testTypes:new Array,cookie:j("token"),headers:[{text:"name",value:"name",sortable:!0},{text:"short name",value:"short_name"},{text:"expected turn around time",value:"expected_turn_around_time"},{text:"actions",value:"actions"}],searchField:"name",searchValue:""}},created(){this.init(),(this._.provides[K]||this.$route).query.create&&D().$toast.success("Test type created successfully!")},methods:{async init(){const{page:s,rowsPerPage:a}=this.serverOptions;this.loading=!0;const p={route:`${F.testTypes}?page=${s}&per_page=${a}&search=${this.search}`,method:"GET",token:`${this.cookie}`,body:{}};let{data:d,error:t,pending:n}=await L(p);this.loading=n,d.value&&(this.testTypes=d.value.test_types.map(c=>{var m,f;return{...c,expected_turn_around_time:`${c.expected_turn_around_time!==null?((m=c.expected_turn_around_time)==null?void 0:m.value)+" "+(c.expected_turn_around_time.unit==null?"":(f=c.expected_turn_around_time.unit)==null?void 0:f.toLowerCase()):""}`}}),this.serverItemsLength=d.value.meta.total_count),t.value&&console.error(t.value)},updateTestTypes(s){typeof s=="object"&&(this.serverOptions=s),this.init()},updateSearch(s){this.searchValue=s,this.search=s,this.updateTestTypes(!0)},edit(s){this.showEdit=!0},navigateToEdit(s){const a=s.name.trim().toLowerCase().replace(/[\s\W-]+/g,"-").replace(/^-+|-+$/g,"");this.$router.push(`/test-catalog/test-types/edit/${a}?testType=${s.id}`)},createTestType(){this.$router.push("/test-catalog/test-types/create")}}},Je={class:"px-5 py-5"},Qe={class:"flex items-center justify-between py-5"},Ze={class:"text-2xl font-semibold flex items-center uppercase"},et=e("img",{src:ce,alt:"report-icon",class:"w-8 h-8 mr-2"},null,-1),tt={class:"flex items-center space-x-3"},st={class:"flex justify-end w-full px-2 py-2 mb-2"},ot={class:"py-2 flex items-center space-x-2"};function at(s,a,p,d,t,n){const c=z,m=B,f=Y,w=Oe,T=Ye,x=ne;return r(),_("div",Je,[o(c,{pages:t.pages},null,8,["pages"]),e("div",Qe,[e("div",Ze,[et,v(" "+h(t.header),1)]),e("div",tt,[("usePermissions"in s?s.usePermissions:C(V))().can.manage("test_catalog")?(r(),E(m,{key:0,text:"Create Test Type",icon:t.addIcon,color:"primary",click:n.createTestType},null,8,["icon","click"])):k("",!0)])]),e("div",st,[("usePermissions"in s?s.usePermissions:C(V))().can.manage("test_catalog")?(r(),E(f,{key:0,search:t.search,onUpdate:n.updateSearch},null,8,["search","onUpdate"])):k("",!0)]),("usePermissions"in s?s.usePermissions:C(V))().can.manage("test_catalog")?(r(),E(x,{key:0,headers:t.headers,data:t.testTypes,loading:t.loading,searchField:t.searchField,searchValue:t.searchValue,serverItemsLength:t.serverItemsLength,serverOptions:t.serverOptions,onUpdate:n.updateTestTypes},{actions:l(({item:g})=>[e("div",ot,[o(w,{onEdit:n.edit,open:t.showEdit,data:g},null,8,["onEdit","open","data"]),o(m,{click:()=>{n.navigateToEdit(g)},color:"success",text:"Edit",icon:t.editIcon},null,8,["click","icon"]),o(T,{onUpdate:n.updateTestTypes,data:g},null,8,["onUpdate","data"])])]),_:1},8,["headers","data","loading","searchField","searchValue","serverItemsLength","serverOptions","onUpdate"])):k("",!0)])}const Pt=S(We,[["render",at]]);export{Pt as default};