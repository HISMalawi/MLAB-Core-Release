import{_ as C}from"./u_i5tT18.js";import{b as t,e as r,g as e,a as I,u as p,l as q,m as h,f as l,t as n,F as f,j as v,z as B,x as y,s as _,p as T,n as g,_ as Z}from"./CgCt1uig.js";import{u as F}from"./Kt-y9hP3.js";import{e as k,f as S}from"./DDP8Pd40.js";import{u as b}from"./CM5UAy9z.js";import{P as H}from"./Bf5grz7u.js";import{r as N}from"./BiLmvBTn.js";import{a as j}from"./9jRWjONT.js";import{_ as M}from"./BFzR0JPm.js";import"./DAatDIeb.js";import"./CDGutsna.js";import"./C7nrlxI_.js";import"./22U_Ornm.js";import"./BBi4X6kY.js";import"./q9WmgNLv.js";import"./D8JfA7oG.js";import"./CosnS5_S.js";import"./DDaZZI9g.js";import"./CEii_6Qs.js";function O(u,a){return t(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z","clip-rule":"evenodd"})])}const A={name:"settings",setup(){F({title:`${H.name.toUpperCase()} - Settings`})},data(){return{saveIcon:N,pages:[{name:"Home",link:"/home"}],tabs:["Personal Information","Credentials"],activeTab:0,loading:!1,updating:!1,cookie:I("token"),oldPassword:"",newPassword:"",username:"",authStore:b()}},methods:{async changePassword(){this.loading=!0;const u={route:`${k.users}/change_password/${this.authStore.user.id}`,method:"PUT",token:`${this.cookie}`,body:{user:{old_password:this.oldPassword,password:this.newPassword}}},{data:a,error:i,pending:m}=await S(u);if(this.loading=m,a.value){const{logUserOut:s}=b();this.loading=!1,p().$toast.success("Password changed successfully!"),s(),this.$router.push("/")}i.value&&(this.loading=!1,p().$toast.error(`${i.value.data.error}`),console.error(i.value))},async changeUsername(){this.updating=!0;const u={route:`${k.users}/change_username/${this.authStore.user.id}`,method:"PUT",token:`${this.cookie}`,body:{user:{username:this.username}}},{data:a,error:i,pending:m}=await S(u);if(this.updating=m,a.value){const{logUserOut:s}=b();this.updating=!1,p().$toast.success("Username changed successfully!"),s(),this.$router.push("/")}i.value&&(this.updating=!1,p().$toast.error(`${i.value.data.error}`),console.error(i.value))}},components:{IdentificationIcon:O,PencilSquareIcon:j}},D={class:"px-5 py-5"},z={class:"mt-5 flex items-center space-x-3"},K=e("div",null,[e("img",{src:M,class:"w-16 h-16 mr-2 object-cover rounded-full",alt:"user-icon"})],-1),L={class:"space-y-0.5"},R={class:"text-lg font-semibold uppercase"},E={class:"font-normal"},G={class:"py-5"},J={class:"w-full flex items-center border-b"},Q=["onClick"],W={key:0},X={class:"py-3 space-y-2.5"},Y={class:"grid grid-cols-3 gap-2"},$={class:"w-full flex flex-col space-y-1"},ee=e("label",{class:"font-semibold text-lg"},"Username",-1),se={class:"underline"},oe={class:"w-full flex flex-col space-y-1"},te=e("label",{class:"font-semibold text-lg"},"First name",-1),ae={class:"underline"},le={class:"w-full flex flex-col space-y-1"},ne=e("label",{class:"font-semibold text-lg"},"Middle name",-1),re={class:"underline"},ie={class:"w-full flex flex-col space-y-1"},ce=e("label",{class:"font-semibold text-lg"},"Last name",-1),de={class:"underline"},ue={class:"w-full flex flex-col space-y-1"},me=e("label",{class:"font-semibold text-lg"},"Date Of Birth",-1),pe={class:"underline"},_e={class:"w-full flex flex-col space-y-1"},he=e("label",{class:"font-semibold text-lg"},"Roles",-1),fe={class:"flex flex-wrap gap-2"},ve={class:"w-full flex flex-col space-y-1"},ge=e("label",{class:"font-semibold text-lg"},"Departments",-1),be={class:"flex flex-wrap gap-2"},xe={key:1},we={class:"border-b pb-2"},ye=e("div",{class:"py-3"},[e("h3",{class:"text-xl font-semibold"},"Username"),e("p",null,"Please enter your desired username below and save changes. ")],-1),ke={class:"flex items-center justify-end space-x-2 mt-5"},Se=e("div",{class:"py-3"},[e("h3",{class:"text-xl font-semibold"},"Password"),e("p",null,"Please enter your current password to change your password")],-1),Pe={class:"py-3 space-y-2.5"},Ue={class:"flex items-center justify-end space-x-2 mt-5"};function Ve(u,a,i,m,s,x){const P=C,U=h("IdentificationIcon"),V=h("PencilSquareIcon"),c=h("FormKit"),w=Z;return t(),r("div",D,[l(P,{pages:s.pages},null,8,["pages"]),e("div",z,[K,e("div",L,[e("h3",R,n(s.authStore.user.username),1),e("p",E,n(`${s.authStore.user.first_name} ${s.authStore.user.last_name}`),1)])]),e("div",G,[e("div",J,[(t(!0),r(f,null,v(s.tabs,(d,o)=>(t(),r("button",{key:o,onClick:Ce=>s.activeTab=o,class:B(s.activeTab==o?"flex items-center px-1.5 py-2 text-white border-b-2 border-sky-600 bg-sky-500 font-medium":"px-2 py-2 hover:bg-sky-200 font-medium hover:text-sky-500 transition duration-150 flex items-center")},[o==0?(t(),y(U,{key:0,class:"w-5 h-5 mr-2"})):_("",!0),o==1?(t(),y(V,{key:1,class:"w-5 h-5 mr-2"})):_("",!0),T(" "+n(d),1)],10,Q))),128))]),s.activeTab===0?(t(),r("div",W,[e("div",X,[e("div",Y,[e("div",$,[ee,e("p",se,n(s.authStore.user.username),1)]),e("div",oe,[te,e("p",ae,n(s.authStore.user.first_name),1)]),e("div",le,[ne,e("p",re,n(s.authStore.user.middle_name),1)]),e("div",ie,[ce,e("p",de,n(s.authStore.user.last_name),1)]),e("div",ue,[me,e("p",pe,n(s.authStore.user.date_of_birth),1)])]),e("div",_e,[he,e("div",fe,[(t(!0),r(f,null,v(s.authStore.user.roles,(d,o)=>(t(),r("div",{key:o,class:"border rounded px-3 py-1.5"},n(d.role_name),1))),128))])]),e("div",ve,[ge,e("div",be,[(t(!0),r(f,null,v(s.authStore.user.departments,(d,o)=>(t(),r("div",{key:o,class:"border rounded px-3 py-1.5"},n(d.name),1))),128))])])])])):_("",!0),s.activeTab===1?(t(),r("div",xe,[e("div",we,[ye,l(c,{type:"form","submit-label":"Update",onSubmit:x.changeUsername,actions:!1},{default:g(({value:d})=>[l(c,{type:"text",name:"username",label:"Username",validation:"required",modelValue:s.username,"onUpdate:modelValue":a[0]||(a[0]=o=>s.username=o)},null,8,["modelValue"]),e("div",ke,[l(w,{type:"submit",icon:s.saveIcon,text:"Save changes",color:"success",click:()=>{},loading:s.updating},null,8,["icon","loading"])])]),_:1},8,["onSubmit"])]),Se,l(c,{type:"form","submit-label":"Update",onSubmit:x.changePassword,actions:!1},{default:g(({value:d})=>[e("div",Pe,[l(c,{type:"password",label:"Old password",validation:"required",modelValue:s.oldPassword,"onUpdate:modelValue":a[1]||(a[1]=o=>s.oldPassword=o)},null,8,["modelValue"]),l(c,{type:"group"},{default:g(()=>[l(c,{type:"password",name:"password",label:"Password",validation:"required",modelValue:s.newPassword,"onUpdate:modelValue":a[2]||(a[2]=o=>s.newPassword=o),"validation-visibility":"live"},null,8,["modelValue"]),l(c,{type:"password",label:"Confirm new password",name:"password_confirm",validation:"required|confirm","validation-label":"Password confirmation","validation-visibility":"live"})]),_:1})]),e("div",Ue,[l(w,{type:"submit",icon:s.saveIcon,text:"Save changes",color:"success",click:()=>{},loading:s.loading},null,8,["icon","loading"])])]),_:1},8,["onSubmit"])])):_("",!0)])])}const Je=q(A,[["render",Ve]]);export{Je as default};