"use strict";(globalThis["webpackChunkIBLISReception"]=globalThis["webpackChunkIBLISReception"]||[]).push([[3020],{1940:(e,t,n)=>{n.d(t,{Z:()=>l});n(8858),n(1318),n(3228);var o=n(4542),i=n(6188);class l{async writeLbl(e,t,n=`${Date.now()}.lbl`){const l=(0,o.KU)();try{const o=await l.getText(e,t),a=new Blob([null===o||void 0===o?void 0:o.data],{type:"text/plain"});e=URL.createObjectURL(a);const r=document.createElement("a");r.setAttribute("href",e),r.setAttribute("download",n),r.click(),URL.revokeObjectURL(e),(0,i.x9)("Accession number printed!")}catch(a){console.error(a)}}}},8688:(e,t,n)=>{n.d(t,{C:()=>o});n(278);function o(e,t){const n=Object.values(Object.values(e)),o=n.filter((e=>!!e[t])).reduce(((e,n)=>(Array.isArray(n[t])?e[t]=n[t]:e[t]={...e[t],...n[t]},e)),{});return o}},2618:(e,t,n)=>{n.d(t,{rM:()=>_,ZP:()=>h,lo:()=>y});var o=n(951),i=n(6252),l=n(3577);function a(e,t,n,o,a,r){const s=(0,i.up)("ion-title"),d=(0,i.up)("ion-toolbar"),u=(0,i.up)("ion-header"),c=(0,i.up)("ion-content"),p=(0,i.up)("ion-button"),m=(0,i.up)("ion-footer"),v=(0,i.up)("ion-page");return(0,i.wg)(),(0,i.j4)(v,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Wm)(s,{class:"his-lg-text ion-text-center"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(e.currentField.helpText),1)])),_:1})])),_:1})])),_:1}),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)(i.Ob,null,[((0,i.wg)(),(0,i.j4)((0,i.LL)(e.currentField.type),{key:e.currentField.id,currentFieldig:e.currentField.currentFieldig,options:e.currentField.options,preset:e.currentField.preset,clear:e.valueClearIndex,fdata:e.formData,config:e.currentField.config,cdata:e.computedFormData,activationState:e.state,onValue:e.currentField.onValue,defaultValue:e.currentField.defaultValue,onValueUpdate:e.currentField.onValueUpdate,onOnValue:e.onFieldValue},null,40,["currentFieldig","options","preset","clear","fdata","config","cdata","activationState","onValue","defaultValue","onValueUpdate","onOnValue"]))],1024))])),_:1}),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d,{color:"light"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{disabled:e.disableBtn,onClick:e.onClose,slot:"start",color:"danger",size:"large"},{default:(0,i.w5)((()=>[(0,i.Uk)(" Close ")])),_:1},8,["disabled","onClick"]),(0,i.Wm)(p,{disabled:e.disableBtn,onClick:e.onClear,slot:"end",color:"warning",size:"large"},{default:(0,i.w5)((()=>[(0,i.Uk)(" Clear ")])),_:1},8,["disabled","onClick"]),(0,i.Wm)(p,{disabled:e.disableBtn,onClick:e.onDone,slot:"end",color:"success",size:"large"},{default:(0,i.w5)((()=>[(0,i.Uk)(" Done ")])),_:1},8,["disabled","onClick"])])),_:1})])),_:1})])),_:1})}var r=n(6188),s=n(9652);function d(){const e={};return s.q.forEach((t=>{e[t]=(0,i.RC)((()=>n(7751)(`./${t}.vue`)))})),e}const u=(0,i.aZ)({name:"SingleFieldTouchForm",components:{IonPage:o._i,IonContent:o.W2,IonFooter:o.fr,IonToolbar:o.sr,IonButton:o.YG,IonHeader:o.Gu,IonTitle:o.wd,...d()},props:{dismissType:{type:String},onFinish:{type:Function,required:!0},currentField:{type:Object,required:!0}},data:()=>({valueClearIndex:0,formData:{},computedFormData:{},state:"",value:null,disableBtn:!1}),methods:{onClose(){"modal"===this.dismissType?o.Fy.dismiss():this.$router.back()},onClear(){this.valueClearIndex+=1,this.value=null},onFieldValue(e){this.value=e},onDone(){if(this.disableBtn=!0,this.currentField.validation){const e=this.currentField.validation(this.value);if(this.disableBtn=!1,e)return(0,r.L6)(e.join(", "),6e4)}try{this.onFinish(this.value)}catch(e){(0,r.N$)(`${e}`),console.error(e)}this.onClose(),this.disableBtn=!1}}});var c=n(3744);const p=(0,c.Z)(u,[["render",a]]),m=p;var v=n(5513),f=n(5289);async function _(e,t,n){(await o.Fy.create({component:v.Z,backdropDismiss:!1,cssClass:"full-modal",componentProps:{onFinish:t,fields:e,skipSummary:!0,disableAutoModalDismiss:!0,cancelAction:()=>{"function"===typeof n&&n(),o.Fy.dismiss()}}})).present()}async function y(e,t={}){const n="boolean"!==typeof(null===t||void 0===t?void 0:t.strictNumbers)||(null===t||void 0===t?void 0:t.strictNumbers),i=await o.Fy.create({component:f.Z,backdropDismiss:!1,cssClass:"keypad-modal custom-modal-backdrop",componentProps:{title:(null===t||void 0===t?void 0:t.title)||"",preset:(null===t||void 0===t?void 0:t.preset)||"",toggleButton:null===t||void 0===t?void 0:t.toggleButton,strictNumbers:n,customKeyboard:null===t||void 0===t?void 0:t.customKeyboard,noFloat:"boolean"===typeof(null===t||void 0===t?void 0:t.noFloat)&&t.noFloat,onKeyPress(t,o){e(n?parseInt(t):t,o)}}});i.present()}async function h(e,t){(await o.Fy.create({component:m,backdropDismiss:!1,cssClass:"full-modal",componentProps:{dismissType:"modal",currentField:e,onFinish:t}})).present()}},9649:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});n(560);var o=n(6252),i=n(9013),l=n(5513),a=n(9652),r=n(4542),s=n(8688),d=n(2201),u=n(6188),c=n(1940),p=n(2262),m=n(3577);function v(e,t,n,i,l,a){const r=(0,o.up)("ion-title"),s=(0,o.up)("IonIcon"),d=(0,o.up)("ion-button"),u=(0,o.up)("ion-buttons"),c=(0,o.up)("ion-toolbar"),p=(0,o.up)("ion-header"),v=(0,o.up)("ion-label"),f=(0,o.up)("ion-item"),_=(0,o.up)("ion-list"),y=(0,o.up)("ion-content"),h=(0,o.up)("ion-footer"),w=(0,o.up)("ion-modal"),g=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"ion-padding"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{"is-open":e.open},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r,{style:{"font-size":"20px","font-weight":"600"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Patient order")])),_:1}),(0,o.Wm)(u,{slot:"end"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{strong:!0,onClick:t[0]||(t[0]=t=>e.handleDialog())},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{size:"large",icon:e.close},null,8,["icon"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v,{style:{"font-size":"18px","font-weight":"600"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Tracking Number")])),_:1}),(0,o.Wm)(v,{slot:"end"},{default:(0,o.w5)((()=>{var t;return[(0,o.Uk)((0,m.zw)(null===(t=e.order)||void 0===t?void 0:t.tracking_number),1)]})),_:1})])),_:1}),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v,{style:{"font-size":"18px","font-weight":"600"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Accession Number")])),_:1}),(0,o.Wm)(v,{slot:"end"},{default:(0,o.w5)((()=>{var t;return[(0,o.Uk)((0,m.zw)(null===(t=e.order)||void 0===t?void 0:t.accession_number),1)]})),_:1})])),_:1}),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v,{style:{"font-size":"18px","font-weight":"600"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Patient Name")])),_:1}),(0,o.Wm)(v,{slot:"end"},{default:(0,o.w5)((()=>{var t,n,i,l;return[(0,o.Uk)((0,m.zw)(`${null===(t=e.order)||void 0===t?void 0:t.client.first_name} ${null!=(null===(n=e.order)||void 0===n?void 0:n.client.middle_name)?null===(i=e.order)||void 0===i?void 0:i.client.middle_name:""} ${null===(l=e.order)||void 0===l?void 0:l.client.last_name}`),1)]})),_:1})])),_:1}),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v,{style:{"font-size":"18px","font-weight":"600"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Specimen Type")])),_:1}),(0,o.Wm)(v,{slot:"end"},{default:(0,o.w5)((()=>{var t;return[(0,o.Uk)((0,m.zw)(null===(t=e.order)||void 0===t?void 0:t.specimen),1)]})),_:1})])),_:1}),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v,{style:{"font-size":"18px","font-weight":"600"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Test(s) Ordered")])),_:1}),(0,o.Wm)(v,{slot:"end"},{default:(0,o.w5)((()=>{var t;return[(0,o.Uk)((0,m.zw)(e.extractedTests(null===(t=e.order)||void 0===t?void 0:t.tests)),1)]})),_:1})])),_:1}),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v,{style:{"font-size":"18px","font-weight":"600"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Specimen Status")])),_:1}),(0,o.Wm)(v,{slot:"end"},{default:(0,o.w5)((()=>{var t,n;return[(0,o.Uk)((0,m.zw)("specimen-not-collected"==(null===(t=e.order)||void 0===t?void 0:t.order_status)?"Specimen not collected":null===(n=e.order)||void 0===n?void 0:n.order_status),1)]})),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{color:"light",style:{padding:"5px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{onClick:t[1]||(t[1]=t=>e.changeSpecimenStatus("accepted")),slot:"end",size:"large",color:"success"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Accept ")])),_:1}),(0,o.Wm)(d,{onClick:e.rejectOrder,slot:"end",size:"large",color:"danger"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Reject ")])),_:1},8,["onClick"]),(0,o.Wm)(d,{onClick:e.addTest,slot:"end",size:"large",color:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Add Test ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["is-open"])])),_:1})])),_:1})}var f=n(3231),_=n(2618),y=n(951),h=n(8903),w=n(7284);const g=(0,o.aZ)({components:{IonPage:y._i,IonButtons:y.Sm,IonButton:y.YG,IonIcon:y.gu,IonModal:y.ki,IonHeader:y.Gu,IonContent:y.W2,IonToolbar:y.sr,IonTitle:y.wd,IonFooter:y.fr,IonItem:y.Ie,IonLabel:y.Q$,IonList:y.q_},data(){return{open:!0,close:h.xvD,details:{client:{date_of_birth:"",first_name:"",id:"",last_name:"",middle_name:"",sex:""}}}},props:{order:{required:!0,type:Object},show:{required:!0,default:!1,type:Boolean}},async created(){const e=(0,r.KU)(),t=await e.getJson(`tests/${this.order.tests[0].id}`);null!==t&&void 0!==t&&t.ok&&(this.details=null===t||void 0===t?void 0:t.data)},methods:{extractedTests(e){return e.map((e=>e.test_type_name)).join(", ")},handleDialog(){this.open=!1},async changeSpecimenStatus(e){const t=(0,r.KU)(),n=await t.putJson(`order_statuses/${e}`,{order_id:this.details.order_id});null!==n&&void 0!==n&&n.ok&&((0,u.x9)(`Specimen ${e} successfully!`),this.open=!1,f.Z.push(`/test/details?test_id=${this.details.id}`))},async rejectOrder(){this.open=!1,f.Z.push(`test/reject/${this.details.id}`)},loadOrder(){(0,w.Z)().searchbyID(this.details.accession_number)},async addTest(){this.handleDialog();const e=(0,r.KU)();(0,_.rM)([{id:"test_types",helpText:"Select test types",type:a.f.TT_MULTIPLE_SELECT,config:{showKeyboard:!0},computedValue:(e,t)=>({order_id:this.details.order_id,tests:e.map((e=>({specimen:e.value,test_type:e.label})))}),options:async()=>{const t=await e.getJson("specimen/test_types",{specimen_id:this.details.specimen_id});return console.log(t),null!==t&&void 0!==t&&t.ok?t.data.map((e=>({label:e,value:this.details.specimen_id}))):[]},validation:e=>i.Z.required(e)}],(async(t,n)=>{const o=await e.postJson("orders/add_test_to_order",n.test_types);if(null===o||void 0===o||!o.ok)return(0,u.L6)(null===o||void 0===o?void 0:o.error);y.Fy.getTop().then((e=>e&&y.Fy.dismiss())),this.loadOrder()}),null)}}});var b=n(3744);const T=(0,b.Z)(g,[["render",v]]),k=T;var C=n(9963);let W;function F(e,t){const n=document.getElementById("rootContainer");W&&W.unmount(),W=(0,C.ri)(k,{show:e,order:t}),W.mount(n,!1)}const I=(0,o._)("div",{id:"rootContainer"},null,-1),x=(0,o.aZ)({__name:"NewOrder",setup(e){const t=(0,p.iH)(),n=(0,p.iH)(!1),m=()=>{n.value=!0,F(n.value,t.value)},v=(0,d.yj)(),_=(0,r.KU)(),y=()=>{const e=[];return{id:"visit_type",helpText:"Visit type",type:a.f.TT_SELECT,requireNext:!1,validation:e=>i.Z.required(e),computedValue:e=>({encounter:{encounter_type:e.value}}),init:async()=>{var t;const n=await _.getJson("encounter_types");return!(null===n||void 0===n||!n.ok)&&(null===(t=n.data)||void 0===t||t.data.forEach((t=>{e.push({label:t.name,value:t.id})})),!0)},options:()=>e}},h=()=>({id:"clinician",helpText:"Requesting Clinician",type:a.f.TT_TEXT,computedValue:e=>({order:{requested_by:e.value}}),options:async e=>{var t;if(null!==(t=e.clinician)&&void 0!==t&&t.value){var n;const t=await _.getJson("orders/search_by_requesting_clinician",{name:null===(n=e.clinician)||void 0===n?void 0:n.value});return null===t||void 0===t?void 0:t.data.map((e=>({label:e,value:e})))}return[]},validation:e=>i.Z.required(e)}),w=()=>({id:"collector",helpText:"Sample collected by (Optional)",type:a.f.TT_TEXT,computedValue:e=>({order:{collected_by:(null===e||void 0===e?void 0:e.value)||""}})}),g=()=>{let e=null;return{id:"ward",helpText:"Requesting ward/location",requireNext:!1,type:a.f.TT_SELECT,init:async()=>{const t=await _.getJson("global");return t.ok&&(e=t.data.id),!0},config:{showKeyboard:!0},computedValue:t=>({encounter:{facility_section:t.value,sending_facility:e||-1}}),validation:e=>i.Z.required(e),options:async e=>{const t=await _.getJson("encounter_type_facility_section_mappings/facility_sections",{encounter_type_id:e.visit_type.value});return(t.data||[]).map((e=>({label:e.name,value:e.id})))}}},b=()=>({id:"date",helpText:"Date",type:a.f.TT_DATE_PICKER,validation:e=>i.Z.required(e)}),T=()=>{let e=[];return{id:"specimen_type",helpText:"Specimen type",type:a.f.TT_SELECT,requireNext:!1,init:async()=>{const t=await _.getJson("specimen");return!(null===t||void 0===t||!t.ok)&&(e=t.data.map((e=>({label:e.name,value:e.id}))),!0)},config:{showKeyboard:!0},options:()=>e,validation:e=>i.Z.required(e)}},k=()=>{let e=[];return{id:"priority",helpText:"Specify priority",type:a.f.TT_SELECT,computedValue:e=>({order:{priority:e.value}}),validation:e=>i.Z.required(e),init:async()=>{const t=await _.getJson("priorities");return!(null===t||void 0===t||!t.ok)&&(e=t.data.map((e=>({label:e.name,value:e.id}))),!0)},options:()=>e}},C=()=>{let e=[],t=null;return{id:"test_types",helpText:"Select test types",type:a.f.TT_MULTIPLE_SELECT,config:{showKeyboard:!0},computedValue:(e,t)=>({tests:e.map((e=>({specimen:t.specimen_type.value,test_type:e.value})))}),options:async n=>{if(n.specimen_type.value!=t){e=[],t=n.specimen_type.value;const o=await _.getJson("specimen/test_types",{specimen_id:t});if(null===o||void 0===o||!o.ok)return[];e=o.data.map((e=>({label:e,value:e})))}return e},validation:e=>i.Z.required(e)}},W=()=>({id:"time_sample_collected",helpText:"Time Sample Collected",type:a.f.TT_TIME,computedValue:(e,t)=>({order:{sample_collected_time:`${t.date} ${e.value}`}}),validation:e=>i.Z.required(e)}),x=[y(),g(),h(),w(),T(),C(),b(),W(),k()],U=async(e,o)=>{var i;const l=new c.Z,{getLocation:a,token:d}=(0,r.KU)(),p=null===(i=d.value)||void 0===i||null===(i=i.authorization)||void 0===i?void 0:i.user,y=p.lab_locations.filter((e=>e.name==a())),h={client:{id:parseInt(`${v.params.client_id}`)},lab_location:y[0].id,...(0,s.C)(o,"encounter"),...(0,s.C)(o,"order"),...(0,s.C)(o,"tests")};_.postJson("orders",h).then((e=>{t.value=e.data;const o=e.data.accession_number;if(!e.ok)return(0,u.L6)(e.error);l.writeLbl("printout/accession_number",{accession_number:o},`${o}.lbl`),n.value=!0;try{f.Z.push("/tests")}catch(i){console.log(i)}(0,u.x9)("Order as been created!"),m()})).catch((()=>(0,u.N$)(r.XF.GENERAL_ERROR)))};return(e,t)=>((0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(l.Z,{fields:x,onFinish:U,skipSummary:!0,cancelDestinationPath:"/home"}),I]))}}),U=x,S=U},2148:(e,t,n)=>{var o=n(8702),i=n(2560);e.exports=function(e,t,n){return n.get&&o(n.get,t,{getter:!0}),n.set&&o(n.set,t,{setter:!0}),i.f(e,t,n)}},1500:e=>{var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8858:(e,t,n)=>{var o=n(1880),i=n(8844),l=n(4327),a=n(1500),r=URLSearchParams,s=r.prototype,d=i(s.append),u=i(s["delete"]),c=i(s.forEach),p=i([].push),m=new r("a=1&a=2&b=3");m["delete"]("a",1),m["delete"]("b",void 0),m+""!=="a=2"&&o(s,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var o=[];c(this,(function(e,t){p(o,{key:t,value:e})})),a(t,1);var i,r=l(e),s=l(n),m=0,v=0,f=!1,_=o.length;while(m<_)i=o[m++],f||i.key===r?(f=!0,u(this,i.key)):v++;while(v<_)i=o[v++],i.key===r&&i.value===s||d(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},1318:(e,t,n)=>{var o=n(1880),i=n(8844),l=n(4327),a=n(1500),r=URLSearchParams,s=r.prototype,d=i(s.getAll),u=i(s.has),c=new r("a=1");!c.has("a",2)&&c.has("a",void 0)||o(s,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var o=d(this,e);a(t,1);var i=l(n),r=0;while(r<o.length)if(o[r++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},3228:(e,t,n)=>{var o=n(7697),i=n(8844),l=n(2148),a=URLSearchParams.prototype,r=i(a.forEach);o&&!("size"in a)&&l(a,"size",{get:function(){var e=0;return r(this,(function(){e++})),e},configurable:!0,enumerable:!0})}}]);
//# sourceMappingURL=3020.11a89b7a.js.map