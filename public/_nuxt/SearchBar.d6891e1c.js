import{r as i}from"./XMarkIcon.455acd8f.js";import{_ as c,f as r,o as u,c as p,b as o,w as d,v as m,d as h}from"./entry.c551b705.js";const _={props:{search:{required:!0,type:String},placeholder:{required:!1,type:String,default:"Search..."}},components:{XMarkIcon:i},data(){return{value:this.search,placeholderValue:this.placeholder}},methods:{update(){this.$emit("update",""),this.value=""},emitValue(){this.$emit("update",this.value),this.$emit("update:search",this.value)}},watch:{value(){this.emitValue()}}},v={class:"relative"};function f(V,e,k,x,t,s){const l=r("FormKit"),n=r("XMarkIcon");return u(),p("div",v,[o(l,{label:"",type:"search",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a),modelModifiers:{lazy:!0},placeholder:"Search",delay:1e3,"prefix-icon":"search"},null,8,["modelValue"]),d(h("button",{onClick:e[1]||(e[1]=a=>s.update()),class:"absolute inset-y-0 right-0 flex items-center pr-3"},[o(n,{class:"w-5 h-5 mt-2"})],512),[[m,t.value!=""]])])}const S=c(_,[["render",f]]);export{S as _};