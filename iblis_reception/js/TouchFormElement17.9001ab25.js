"use strict";(globalThis["webpackChunkIBLISReception"]=globalThis["webpackChunkIBLISReception"]||[]).push([[1791,4626],{25883:(t,e,a)=>{a.r(e),a.d(e,{default:()=>n});var s=a(20641);const i=(0,s.pM)({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},clear:{type:Number,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}}),l=i,n=l},1654:(t,e,a)=>{a.r(e),a.d(e,{default:()=>k});var s=a(20641),i=a(90033);const l={class:"his-floating-keyboard"},n={class:"his-floating-keyboard-content"},u={style:{width:"99.9%"}};function o(t,e,a,o,c,r){const p=(0,s.g2)("ion-textarea"),d=(0,s.g2)("view-port"),h=(0,s.g2)("ion-button");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(d,{showFull:!1},{default:(0,s.k6)((()=>[(0,s.bF)(p,{rows:"6",cols:"20",readonly:"",value:t.value,placeholder:"Start typing....",class:"input_display"},null,8,["value"])])),_:1}),(0,s.Lk)("div",l,[(0,s.Lk)("div",n,[(0,s.Lk)("table",u,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.layout,((e,a)=>((0,s.uX)(),(0,s.CE)("tr",{key:a},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e,((e,a)=>((0,s.uX)(),(0,s.CE)("td",{key:a},[(0,s.bF)(h,{style:{"text-transform":"none"},strong:"",onClick:a=>t.keypress(e),class:(0,i.C4)(`key__button ${e.toLowerCase()}_btn`)},{default:(0,s.k6)((()=>[(0,s.eW)((0,i.v_)(e),1)])),_:2},1032,["onClick","class"])])))),128))])))),128))])]),(0,s.bF)(h,{onClick:e[0]||(e[0]=e=>t.keypress("space")),strong:"",style:{width:"100%"},shape:"round",size:"large"},{default:(0,s.k6)((()=>e[1]||(e[1]=[(0,s.eW)(" Space ")]))),_:1})])],64)}a(27495),a(81454);var c=a(21317),r=a(38553),p=a(25883),d=a(2543),h=a(52110),y=a(73235);const b=(0,s.pM)({components:{ViewPort:r.A,IonButton:y.Jm,IonTextarea:y.nc},mixins:[p["default"]],data:()=>({value:"",capsOn:!1,layout:h.nB}),mounted(){this.init()},activated(){this.init()},methods:{async init(){this.$emit("onFieldActivated",this),await this.setDefaultValue()},async setDefaultValue(){if(this.defaultValue&&!this.value){const t=await this.defaultValue(this.fdata,this.cdata);t&&((0,d.isPlainObject)(t)?(this.emitValue(t),this.value=t.value.toString()):(this.value=t,this.emitValue({label:t,value:t})))}},updateKeyboardCaps(t=!1){this.layout=this.layout.map((e=>e.map((e=>t?e.toUpperCase():e.toLowerCase()))))},async emitValue(t){if(this.onValue){const e=await this.onValue(t);if(!e)return}this.value=t.label,this.$emit("onValue",t)},async onKbValue(t){await this.emitValue({label:t,value:t})},async keypress(t){const e=(0,c.A)(this.capsOn?t.toUpperCase():t.toLowerCase(),this.value);if(e.match(/caps/i))return this.capsOn=!this.capsOn,void this.updateKeyboardCaps(this.capsOn);await this.emitValue({label:e,value:e})}},watch:{clear(){this.value=""}}});var v=a(66262);const f=(0,v.A)(b,[["render",o],["__scopeId","data-v-6c8c3b02"]]),k=f}}]);
//# sourceMappingURL=TouchFormElement17.9001ab25.js.map