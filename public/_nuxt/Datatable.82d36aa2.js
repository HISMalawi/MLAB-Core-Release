import{_ as d,h as c,o as _,c as u,d as n,i as r,e as p,t as h,ah as m,g as f}from"./entry.ede29211.js";const g={props:{headers:{required:!0,type:Array},data:{required:!0,type:Object},loading:{required:!1,type:Boolean,default:!1},searchField:{required:!1,type:String},searchValue:{required:!1,type:String},serverOptions:{required:!1,type:Object},serverItemsLength:{required:!1,type:Number}},data(){return{options:this.serverOptions,isTestPanel:!1}},watch:{options:{handler(a,s){this.$emit("update",a)}}}};const v={class:"uppercase"};function y(a,s,e,b,o,q){const i=f,l=c("datatable",!0);return _(),u("div",null,[n(l,{headers:e.headers,items:e.data,"buttons-pagination":"","theme-color":"#0ea5e9","table-class-name":"header",alternating:"",loading:e.loading,"search-field":e.searchField,"search-value":e.searchValue,"rows-items":[10,25,50,100],"server-options":o.options,"onUpdate:serverOptions":s[0]||(s[0]=t=>o.options=t),"server-items-length":e.serverItemsLength},{header:r(t=>[p("p",v,h(t.text),1)]),"item-actions":r(t=>[m(a.$slots,"actions",{item:t},void 0,!0)]),loading:r(()=>[n(i,{loading:!0})]),_:3},8,["headers","items","loading","search-field","search-value","server-options","server-items-length"])])}const O=d(g,[["render",y],["__scopeId","data-v-caf77828"]]);export{O as _};