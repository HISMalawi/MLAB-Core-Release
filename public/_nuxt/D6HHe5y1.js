import{a as I,u as C,l as D,m as n,b as S,e as T,f as e,n as a,g as t,p as c,t as j,_ as R}from"./CgCt1uig.js";import{_ as q}from"./CfpL-cj9.js";import{e as F}from"./C7nrlxI_.js";import{S as N}from"./CDxCIj4O.js";import{r as V}from"./CosnS5_S.js";import{r as M}from"./D8JfA7oG.js";import{r as f}from"./n7Z3tzWC.js";import{S as O,h as B,Y as L,G as P,V as X}from"./BBi4X6kY.js";const K={components:{TransitionRoot:O,TransitionChild:B,Dialog:L,DialogPanel:P,DialogTitle:X,XMarkIcon:V,ExclamationTriangleIcon:M,NoSymbolIcon:f},data(){return{show:!1,rejectIcon:f,loading:!1,reason:"",cookie:I("token")}},props:{orderId:{type:String,required:!0},stockId:{type:String,required:!0}},methods:{async rejectOrder(){this.loading=!0;const u=new N,{data:o,error:l,pending:d}=await u.rejectStockOrder(`${this.cookie}`,{stock_order_id:this.stockId,stock_status_reason:this.reason});this.loading=d,o.value&&(this.handleClick(),C().$toast.success("Stock order rejected successfully!"),this.loading=!1,this.reason="",this.$router.push("/stock-management/orders")),l.value&&(this.handleClick(),console.error(l.value),C().$toast.error(F),this.loading=!1)},handleClick(){this.show=!this.show}}},U=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),$={class:"fixed inset-0 overflow-y-auto"},A={class:"flex min-h-full items-center justify-center p-4 text-center"},E={class:"border-b px-3 py-3 flex items-center justify-between"},z={class:"mt-2 space-y-3 px-5"},G={class:"rounded px-2 py-2"},Y={class:"font-semibold text-red-500"},H={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function J(u,o,l,d,s,i){const m=R,_=n("TransitionChild"),h=n("NoSymbolIcon"),y=n("DialogTitle"),g=n("XMarkIcon"),p=n("FormKit"),x=q,k=n("DialogPanel"),v=n("Dialog"),b=n("TransitionRoot");return S(),T("div",null,[e(m,{click:i.handleClick,color:"error",text:"Reject Order",icon:s.rejectIcon},null,8,["click","icon"]),e(b,{appear:"",show:s.show,as:"template"},{default:a(()=>[e(v,{as:"div",class:"relative z-10"},{default:a(()=>[e(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[U]),_:1}),t("div",$,[t("div",A,[e(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[e(k,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:a(()=>[t("div",E,[e(y,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:a(()=>[e(h,{class:"h-5 w-5 mr-2"}),c(" Confirm rejection ")]),_:1}),t("button",{onClick:o[0]||(o[0]=(...r)=>i.handleClick&&i.handleClick(...r))},[e(g,{class:"w-5 h-5"})])]),e(p,{type:"form","submit-label":"Update",onSubmit:o[2]||(o[2]=r=>i.rejectOrder()),actions:!1},{default:a(({value:r})=>[t("div",z,[t("div",G,[c(" Do you really want to reject order "),t("span",Y,j(l.orderId),1),c("? Note that once this action is completed, it can not be undone ")]),e(p,{type:"textarea",label:"Reason",validation:"required",modelValue:s.reason,"onUpdate:modelValue":o[1]||(o[1]=w=>s.reason=w)},null,8,["modelValue"])]),t("div",H,[e(x,{click:()=>{i.handleClick()},type:"button",text:"Cancel"},null,8,["click"]),e(m,{loading:s.loading,type:"submit",click:()=>{},color:"error",icon:s.rejectIcon,text:"Delete"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const fe=D(K,[["render",J]]),Q={components:{TransitionRoot:O,TransitionChild:B,Dialog:L,DialogPanel:P,DialogTitle:X,XMarkIcon:V,NoSymbolIcon:f,ExclamationTriangleIcon:M},data(){return{show:!1,rejectIcon:f,loading:!1,statusLoading:!1,reason:"",cookie:I("token")}},props:{data:{type:Object,required:!0},orderId:{type:String,required:!0}},methods:{async rejectRequisition(){this.statusLoading=!0;const u=new N,o={route:"reject_requisition",stock_requisition_id:this.data.id,stock_status_reason:this.reason},{data:l,error:d,pending:s}=await u.updateStockOrderStatus(`${this.cookie}`,o);this.statusLoading=s,l.value&&(this.$emit("update",!0),this.statusLoading=!1,this.reason="",this.handleClick(),C().$toast.success("Stock order requisition rejected successfully!")),d.value&&(console.error(d.value),this.statusLoading=!1)},handleClick(){this.show=!this.show}}},W=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Z={class:"fixed inset-0 overflow-y-auto"},ee={class:"flex min-h-full items-center justify-center p-4 text-center"},te={class:"border-b px-3 py-3 flex items-center justify-between"},oe={class:"mt-2 space-y-3 px-5"},ne={class:"rounded px-2 py-2"},se={class:"font-semibold text-red-500"},ae={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function ie(u,o,l,d,s,i){const m=R,_=n("TransitionChild"),h=n("NoSymbolIcon"),y=n("DialogTitle"),g=n("XMarkIcon"),p=n("FormKit"),x=q,k=n("DialogPanel"),v=n("Dialog"),b=n("TransitionRoot");return S(),T("div",null,[e(m,{click:i.handleClick,color:"error",text:"Reject",icon:s.rejectIcon},null,8,["click","icon"]),e(b,{appear:"",show:s.show,as:"template"},{default:a(()=>[e(v,{as:"div",class:"relative z-10"},{default:a(()=>[e(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[W]),_:1}),t("div",Z,[t("div",ee,[e(_,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[e(k,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:a(()=>[t("div",te,[e(y,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:a(()=>[e(h,{class:"h-5 w-5 mr-2"}),c(" Confirm rejection ")]),_:1}),t("button",{onClick:o[0]||(o[0]=(...r)=>i.handleClick&&i.handleClick(...r))},[e(g,{class:"w-5 h-5"})])]),e(p,{type:"form","submit-label":"Update",onSubmit:o[2]||(o[2]=r=>i.rejectRequisition()),actions:!1},{default:a(({value:r})=>[t("div",oe,[t("div",ne,[c(" Do you really want to reject requisition for "),t("span",se,j(l.data.item.name),1),c(" from the Order "),t("strong",null,j(l.orderId),1),c("? Note that once this action is completed, it can not be undone ")]),e(p,{type:"textarea",label:"Reason",validation:"required",modelValue:s.reason,"onUpdate:modelValue":o[1]||(o[1]=w=>s.reason=w)},null,8,["modelValue"])]),t("div",ae,[e(x,{click:()=>{i.handleClick()},type:"button",text:"Cancel"},null,8,["click"]),e(m,{loading:s.statusLoading,type:"submit",click:()=>{},color:"error",icon:s.rejectIcon,text:"Reject"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const he=D(Q,[["render",ie]]);export{fe as _,he as a};