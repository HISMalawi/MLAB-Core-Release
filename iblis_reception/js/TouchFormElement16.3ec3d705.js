"use strict";(globalThis["webpackChunkIBLISReception"]=globalThis["webpackChunkIBLISReception"]||[]).push([[5603,9019],{82836:(e,t,l)=>{l.r(t),l.d(t,{default:()=>F});var a=l(20641),i=l(90033);const n={class:"view-port-content"},o={class:"his-md-text"},s={class:"his-md-text"};function c(e,t,l,c,d,r){const u=(0,a.g2)("interval-card"),h=(0,a.g2)("ion-col"),v=(0,a.g2)("ion-row"),b=(0,a.g2)("ion-label"),k=(0,a.g2)("ion-item"),p=(0,a.g2)("ion-chip"),_=(0,a.g2)("ion-list"),f=(0,a.g2)("ion-card-content"),g=(0,a.g2)("ion-card"),m=(0,a.g2)("ion-grid"),C=(0,a.g2)("view-port");return(0,a.uX)(),(0,a.Wv)(C,null,{default:(0,a.k6)((()=>[(0,a.Lk)("div",n,[(0,a.bF)(m,null,{default:(0,a.k6)((()=>[(0,a.bF)(v,null,{default:(0,a.k6)((()=>[(0,a.bF)(h,{size:"4"},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.listData,((t,l)=>((0,a.uX)(),(0,a.Wv)(v,{key:l},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t,((t,l)=>((0,a.uX)(),(0,a.Wv)(h,{"size-md":"6","size-sm":"12",key:l},{default:(0,a.k6)((()=>[(0,a.bF)(u,{showTitle:e.config.showRegimenCardTitle,label:t.label,onOnclick:l=>e.onselect(t),enabled:t.other.enabled,color:t.label===e.selected?"active-card-color":"inactive-card-color"},null,8,["showTitle","label","onOnclick","enabled","color"])])),_:2},1024)))),128))])),_:2},1024)))),128))])),_:1}),(0,a.bF)(h,{size:"8"},{default:(0,a.k6)((()=>[(0,a.bF)(g,{style:{height:"65vh"}},{default:(0,a.k6)((()=>[e.active.label?((0,a.uX)(),(0,a.Wv)(f,{key:0},{default:(0,a.k6)((()=>[(0,a.Lk)("span",o,(0,i.v_)(e.active.other.label),1),(0,a.bF)(k,{class:"his-sm-text"},{default:(0,a.k6)((()=>[(0,a.bF)(b,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,i.v_)(e.active.other.value),1)])),_:1})])),_:1}),(0,a.Lk)("span",s,(0,i.v_)(e.active.other.other.label),1),(0,a.bF)(_,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.active.other.other.value,((e,t)=>((0,a.uX)(),(0,a.Wv)(k,{class:"his-sm-text",key:t},{default:(0,a.k6)((()=>[(0,a.bF)(b,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,i.v_)(e.label),1)])),_:2},1024),(0,a.bF)(p,{class:"his-md-text",color:"primary",slot:"end"},{default:(0,a.k6)((()=>[(0,a.eW)((0,i.v_)(e.value),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})):(0,a.Q3)("",!0)])),_:1})])),_:1})])),_:1})])),_:1})])])),_:1})}const d={key:0},r={key:1,class:"his-md-text"};function u(e,t,l,n,o,s){return(0,a.uX)(),(0,a.CE)("div",{class:(0,i.C4)(`his-card ${e.state}`),onClick:t[0]||(t[0]=()=>e.enabled?e.$emit("onclick"):null)},[e.enabled?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("s",d,(0,i.v_)(e.label),1)),e.enabled?((0,a.uX)(),(0,a.CE)("div",r,(0,i.v_)(e.label),1)):(0,a.Q3)("",!0)],2)}const h=(0,a.pM)({props:{color:{type:String},enabled:{type:Boolean,default:!0},label:{type:String,required:!0}},computed:{state(){return this.enabled?`clickable ${this.color}`:"disabled-card-color"}}});var v=l(66262);const b=(0,v.A)(h,[["render",u],["__scopeId","data-v-875731ee"]]),k=b;var p=l(38553),_=l(96363),f=l(87063),g=l(73235);const m=(0,a.pM)({components:{IntervalCard:k,ViewPort:p.A,IonGrid:g.lO,IonCard:g.b_,IonCardContent:g.I9},mixins:[_["default"]],data:()=>({active:{}}),watch:{clear(){this.active={},this.clearSelection()}},activated(){this.init()},mounted(){this.init()},methods:{async init(){this.$emit("onFieldActivated",this),"next"===this.activationState&&(this.active={},this.clearSelection());const e=await this.options(this.fdata);this.listData=f.A.convertArrayToTurples(e)},onselect(e){this.selected=e.label,this.active=e,this.$emit("onValue",e)}}}),C=(0,v.A)(m,[["render",c],["__scopeId","data-v-cfb8bc24"]]),F=C}}]);
//# sourceMappingURL=TouchFormElement16.3ec3d705.js.map