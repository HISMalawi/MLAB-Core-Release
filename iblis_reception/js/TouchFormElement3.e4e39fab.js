"use strict";(globalThis["webpackChunkIBLISReception"]=globalThis["webpackChunkIBLISReception"]||[]).push([[1791,7398,8397],{31588:(e,t,a)=>{a.d(t,{J8:()=>c,Jj:()=>s,bB:()=>p,m8:()=>d,ti:()=>o,yg:()=>l});var n=a(52110);const i=[n.Am,[["","Delete"]]],l=[n.aD,[["Delete"]]],o=(n.aD,[n.aD,[["N/A"],["Delete","Unknown"]]]),s=[n.aD,[["Delete"]]],u=[n.aD,[["Unknown","Delete"],["Qwerty","A-Z"]]],d=[n.uY,[["Unknown"]]],r=[n.ZY,[["0-9","Delete"],["Qwerty","Unknown"],["","Space"]]],c=[n.lJ,[["","Delete"],["?123","0-9"],["Space","Unknown"]]],p=[{btn:"0-9",keyboard:u},{btn:"?123",keyboard:i},{btn:"A-Z",keyboard:r},{btn:"Qwerty",keyboard:c}]},81871:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(20641);function i(e,t,a,i,l,o){const s=(0,n.g2)("ion-input");return(0,n.uX)(),(0,n.Wv)(s,{ref:"input",class:"input_display",modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=t=>e.text=t),type:e.type,disabled:e.disabled,autocapitalize:"sentences",placeholder:e.placeholder},null,8,["modelValue","type","disabled","placeholder"])}var l=a(73235);const o=(0,n.pM)({name:"HisInput",components:{IonInput:l.$w},data:()=>({text:""}),watch:{value(e){this.text=e},text(e){this.$emit("onValue",e)}},props:{value:{required:!1},type:{type:String,default:()=>"text"},disabled:{type:Boolean,default:()=>!1},placeholder:{type:String,default:()=>""}}});var s=a(66262);const u=(0,s.A)(o,[["render",i],["__scopeId","data-v-3e059650"]]),d=u},25883:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(20641);const i=(0,n.pM)({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},clear:{type:Number,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}}),l=i,o=l},61050:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(20641),i=a(90033);function l(e,t,a,l,o,s){const u=(0,n.g2)("base-input"),d=(0,n.g2)("ion-radio"),r=(0,n.g2)("ion-label"),c=(0,n.g2)("ion-item"),p=(0,n.g2)("ion-radio-group"),y=(0,n.g2)("ion-list"),b=(0,n.g2)("view-port"),h=(0,n.g2)("his-keyboard");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(b,null,{default:(0,n.k6)((()=>[(0,n.bF)(u,{value:e.value,onOnValue:e.onKbValue},null,8,["value","onOnValue"]),(0,n.bF)(y,{class:"view-port-content"},{default:(0,n.k6)((()=>[(0,n.bF)(p,{modelValue:e.selectedTimeUnit,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedTimeUnit=t)},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.timeUnits,((e,t)=>((0,n.uX)(),(0,n.Wv)(c,{class:"his-md-text",key:t},{default:(0,n.k6)((()=>[(0,n.bF)(d,{slot:"start",value:e},null,8,["value"]),(0,n.bF)(r,null,{default:(0,n.k6)((()=>[(0,n.eW)((0,i.v_)(e),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,n.bF)(h,{kbConfig:e.keyboard,onKeyPress:e.keypress},null,8,["kbConfig","onKeyPress"])],64)}var o=a(81871),s=a(9463),u=a(21317),d=a(31588),r=a(38553),c=a(25883),p=a(73235);const y=(0,n.pM)({components:{BaseInput:o["default"],HisKeyboard:s.A,ViewPort:r.A,IonItem:p.uz,IonList:p.nf,IonLabel:p.he,IonRadio:p.KO,IonRadioGroup:p.f0},mixins:[c["default"]],data:()=>({value:"",selectedTimeUnit:"",timeUnits:["Hours","Days","Weeks","Months","Years"],keyboard:d.yg}),mounted(){this.$emit("onFieldActivated",this)},activated(){this.$emit("onFieldActivated",this)},methods:{onKbValue(e){this.value=e},keypress(e){this.value=(0,u.A)(e,this.value)},emitValue(e,t){if(e&&t){const a=`${e} ${t}`;this.$emit("onValue",e?{label:a,value:a,other:{value:e,timeUnit:t}}:null)}else this.$emit("onValue",null)}},watch:{value(e){this.emitValue(e,this.selectedTimeUnit)},selectedTimeUnit(e){this.emitValue(this.value,e)},clear(){this.value="",this.selectedTimeUnit=""}}});var b=a(66262);const h=(0,b.A)(y,[["render",l]]),v=h},9463:(e,t,a)=>{a.d(t,{A:()=>p});var n=a(20641);const i={class:"his-floating-keyboard"},l={class:"his-floating-keyboard-content"};function o(e,t,a,o,s,u){const d=(0,n.g2)("base-keyboard");return(0,n.uX)(),(0,n.CE)("div",i,[(0,n.Lk)("div",l,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.activeLayout,((t,a)=>((0,n.uX)(),(0,n.CE)("div",{key:a},[(0,n.bF)(d,{layout:t,onKeyPress:e.keypress},null,8,["layout","onKeyPress"])])))),128))])])}a(81454);var s=a(31588),u=a(83230);const d=(0,n.pM)({components:{BaseKeyboard:u.A},props:{initalKeyboardName:{type:String},kbConfig:{type:Array,required:!0},onKeyPress:{type:Function,required:!0}},data:()=>({activeLayout:{}}),watch:{initalKeyboardName:{handler(e){e&&this.$nextTick((()=>this.switchKeyboard(e)))},immediate:!0},kbConfig:{handler(e){e&&(this.activeLayout=e)},deep:!0,immediate:!0}},methods:{keypress(e){this.isFunctionKey(e)||this.onKeyPress(e)},isFunctionKey(e){return!!this.switchKeyboard(e)},switchKeyboard(e){const t=s.bB.map((e=>e.btn)).indexOf(e);return t>=0&&(this.activeLayout=s.bB[t].keyboard,!0)}}});var r=a(66262);const c=(0,r.A)(d,[["render",o]]),p=c}}]);
//# sourceMappingURL=TouchFormElement3.e4e39fab.js.map