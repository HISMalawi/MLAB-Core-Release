import{_ as q}from"./Breadcrumb.vue.49302d56.js";import{_ as M}from"./index.cb0b85ec.js";import{_ as N}from"./SearchBar.d6891e1c.js";import{u as w,a as y,_ as b,f as i,o as C,c as T,b as e,g as l,d as t,h as x,e as A,t as X,an as K}from"./entry.c551b705.js";import{_ as E}from"./OutlinedButton.ac1ef570.js";import{e as O,d as G}from"./constants.c32bb852.js";import{e as $,f as I,a as z,h as H}from"./fetch.7df80c03.js";import{r as U}from"./XMarkIcon.455acd8f.js";import{a as L}from"./PencilSquareIcon.c201b425.js";import{r as J}from"./ArrowDownTrayIcon.075e33ea.js";import{S as V,h as S,U as F,G as j,V as B}from"./transition.fe0cdd04.js";import{_ as P}from"./virus.5f34d786.js";import{r as Q}from"./TrashIcon.c53e980a.js";import{_ as W}from"./Datatable.18ff387f.js";import{u as Y}from"./vue.f36acd1f.e050a771.js";import{P as Z}from"./package.6096f694.js";import"./nuxt-link.11cd23df.js";import"./HomeIcon.81b6cbd7.js";import"./PrinterIcon.de9e1628.js";import"./hidden.1f7f321e.js";import"./Loader.11946374.js";const ee={components:{TransitionRoot:V,TransitionChild:S,Dialog:F,DialogPanel:j,DialogTitle:B,XMarkIcon:U},data(){return{editIcon:L,show:!1,saveIcon:J,name:this.data.name,description:this.data.description,drugSelected:new Array,drugs:new Array,rawDrugs:new Array,loading:!1,cookie:w("token")}},props:{data:{type:Object,required:!0}},methods:{async submitForm(){this.loading=!0;const n={route:`${$.disease.edit}/${this.data.id}`,method:"PUT",token:`${this.cookie}`,body:this.data},{pending:o,error:r,data:c}=await I(n);this.loading=o,c.value&&(this.show=!1,y().$toast.success("Disease updated successfully!"),this.loading=!1,this.$emit("update",!0)),r.value&&(this.show=!1,console.error(r.value),this.loading=!1,y().$toast.error(O))},handleClick(){this.show=!this.show},clearForm(){this.$formkit.reset("editForm")}}},te=t("div",{class:"fixed inset-0 bg-gray-900 bg-opacity-25"},null,-1),oe={class:"fixed inset-0 overflow-y-auto"},ae={class:"flex min-h-full items-center justify-center p-4 text-center"},se={class:"border-b px-3 py-3 flex items-center justify-between"},ne=t("img",{src:P,class:"w-8 h-8 mr-2"},null,-1),ie={class:"mt-2 space-y-3"},le={class:"w-full flex items-center px-5"},re={class:"w-full flex flex-col space-y-2"},ce={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function de(n,o,r,c,a,s){const d=A,m=i("TransitionChild"),f=i("DialogTitle"),h=i("XMarkIcon"),u=i("FormKit"),p=E,_=i("DialogPanel"),D=i("Dialog"),k=i("TransitionRoot");return C(),T("div",null,[e(d,{click:s.handleClick,text:"Edit",color:"success",icon:a.editIcon},null,8,["click","icon"]),e(k,{appear:"",show:a.show,as:"template"},{default:l(()=>[e(D,{as:"div",class:"relative z-10"},{default:l(()=>[e(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[te]),_:1}),t("div",oe,[t("div",ae,[e(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[e(_,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>[t("div",se,[e(f,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:l(()=>[ne,x(" Edit Disease ")]),_:1}),t("button",{onClick:o[0]||(o[0]=(...v)=>s.handleClick&&s.handleClick(...v))},[e(h,{class:"w-5 h-5"})])]),e(u,{id:"editForm",type:"form","submit-label":"Update",onSubmit:s.submitForm,actions:!1},{default:l(({value:v})=>[t("div",ie,[t("div",le,[t("div",re,[e(u,{type:"text",label:"Name",validation:"required",modelValue:r.data.name,"onUpdate:modelValue":o[1]||(o[1]=g=>r.data.name=g)},null,8,["modelValue"])])])]),t("div",ce,[e(p,{text:"Clear form",type:"button",click:()=>{s.clearForm()}},null,8,["click"]),e(d,{loading:a.loading,type:"submit",click:()=>{},color:"success",icon:a.saveIcon,text:"Save changes"},null,8,["loading","icon"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const me=b(ee,[["render",de]]),ue={components:{TransitionRoot:V,TransitionChild:S,Dialog:F,DialogPanel:j,DialogTitle:B,XMarkIcon:U,ExclamationTriangleIcon:z},data(){return{show:!1,deleteIcon:Q,loading:!1,cookie:w("token"),reason:""}},props:{data:{type:Object,required:!0}},methods:{async deleteData(n){this.loading=!0;const o={route:`${$.disease.delete}/${n}`,method:"DELETE",token:`${this.cookie}`,body:{voided_reason:this.reason}},{pending:r,error:c,data:a}=await I(o);this.loading=r,a.value&&(this.handleClick(),y().$toast.success("Disease deleted successfully!"),this.reason="",this.loading=!1,this.$emit("update",!0)),c.value&&(console.log(c.value),y().$toast.error("An error occurred, please try again!"),this.loading=!1)},handleClick(){this.show=!this.show}}},pe=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),_e={class:"fixed inset-0 overflow-y-auto"},fe={class:"flex min-h-full items-center justify-center p-4 text-center"},he={class:"border-b px-3 py-3 flex items-center justify-between"},ge={class:"mt-2 space-y-3 px-5"},xe={class:"rounded px-2 py-2"},ve={class:"font-semibold text-red-500"},ye={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function De(n,o,r,c,a,s){const d=A,m=i("TransitionChild"),f=i("ExclamationTriangleIcon"),h=i("DialogTitle"),u=i("XMarkIcon"),p=i("FormKit"),_=E,D=i("DialogPanel"),k=i("Dialog"),v=i("TransitionRoot");return C(),T("div",null,[e(d,{click:s.handleClick,color:"error",text:"Delete",icon:a.deleteIcon},null,8,["click","icon"]),e(v,{appear:"",show:a.show,as:"template"},{default:l(()=>[e(k,{as:"div",class:"relative z-10"},{default:l(()=>[e(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[pe]),_:1}),t("div",_e,[t("div",fe,[e(m,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[e(D,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:l(()=>[t("div",he,[e(h,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:l(()=>[e(f,{class:"h-5 w-5 mr-2"}),x(" Confirm delete ")]),_:1}),t("button",{onClick:o[0]||(o[0]=(...g)=>s.handleClick&&s.handleClick(...g))},[e(u,{class:"w-5 h-5"})])]),e(p,{type:"form","submit-label":"Update",onSubmit:o[2]||(o[2]=g=>s.deleteData(r.data.id)),actions:!1},{default:l(({value:g})=>[t("div",ge,[t("div",xe,[x(" Do you really want to delete "),t("span",ve,X(r.data.name),1),x("? Note that once this action is completed, it can not be undone ")]),e(p,{type:"textarea",label:"Reason",validation:"required",modelValue:a.reason,"onUpdate:modelValue":o[1]||(o[1]=R=>a.reason=R)},null,8,["modelValue"])]),t("div",ye,[e(_,{click:()=>{},type:"button",text:"Cancel"}),e(d,{loading:a.loading,type:"submit",click:()=>{},color:"error",icon:a.deleteIcon,text:"Delete"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const ke=b(ue,[["render",De]]),we={setup(){Y({title:`${Z.name.toUpperCase()} - Diseases`})},data(){return{header:"Diseases",pages:[{name:"Home",link:"/home"},{name:"Test Catalog",link:"#"}],headers:[{text:"ID",value:"id",sortable:!0},{text:"NAME",value:"name",sortable:!0},{text:"DATE CREATED",value:"created_date"},{text:"Actions",value:"actions"}],diseases:new Array,cookie:w("token"),search:"",searchValue:"",loading:!1}},created(){this.init()},computed:{filteredDiseases(){return this.diseases.map(n=>({...n,created_date:H(n.created_date).format(G)}))}},methods:{async init(){this.loading=!0;const n={route:$.disease.index,method:"GET",token:`${this.cookie}`},{data:o,error:r,pending:c}=await I(n);this.loading=c,o.value&&(this.diseases=o.value,this.loading=!1),r.value&&(console.log(r.value),this.loading=!1)},updateSearch(n){K&&(this.searchValue=n,this.search=n)},updateDiseases(n){this.init()}}},be={class:"px-5 py-5"},Ce={class:"flex items-center justify-between py-5"},Te=t("div",{class:"text-2xl font-semibold flex items-center uppercase"},[t("img",{src:P,alt:"report-icon",class:"w-8 h-8 mr-2"}),x(" Diseases ")],-1),$e={class:"flex items-center space-x-3"},Ie={class:"flex justify-end w-full px-2 py-2 mb-2"},Ae={class:"py-2 flex items-center space-x-2"};function Ee(n,o,r,c,a,s){const d=q,m=M,f=N,h=me,u=ke,p=W;return C(),T("div",be,[e(d,{pages:a.pages},null,8,["pages"]),t("div",Ce,[Te,t("div",$e,[e(m,{onActionCompleted:s.updateDiseases},null,8,["onActionCompleted"])])]),t("div",Ie,[e(f,{search:a.search,onUpdate:s.updateSearch},null,8,["search","onUpdate"])]),e(p,{headers:a.headers,data:s.filteredDiseases,loading:a.loading,"search-value":a.searchValue,"search-field":"name"},{actions:l(({item:_})=>[t("div",Ae,[e(h,{data:_,onUpdate:s.updateDiseases},null,8,["data","onUpdate"]),e(u,{data:_,onUpdate:s.updateDiseases},null,8,["data","onUpdate"])])]),_:1},8,["headers","data","loading","search-value"])])}const Ye=b(we,[["render",Ee]]);export{Ye as default};