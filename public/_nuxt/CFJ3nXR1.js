import{_ as Ce}from"./COwqssE_.js";import{b as C,e as L,g as t,d as fe,r as n,a as ae,u as te,y as A,f as s,h as a,z as c,Y as oe,p as Y,G as ne,V as ie,j as X,q as re,H as E,i as O,I as se,J as Ve,S as de,s as xe,l as j,m as B,_ as ce,C as Ue,A as De,B as be,x as he,v as le,t as N,F as pe,k as ve,n as we,E as Se,D as Ae,K as H,c as Te,w as ye,o as Ie,L as W}from"./CdnNfM7G.js";import{_ as ke}from"./BEQb_3O8.js";import{_ as _e}from"./5Ol-7slm.js";import{r as $e}from"./OAgrSauV.js";import{_ as Pe}from"./k_xLN92M.js";import{r as qe}from"./ynzhhFTf.js";import{r as Ee}from"./DZ21bsms.js";import{_ as Le}from"./RzMDAWdt.js";import{u as ee}from"./DdH3QGmO.js";import{P as Fe}from"./Crjae1dH.js";import{u as Me}from"./CHeiuEic.js";import"./CvehVmcI.js";import"./DHgaMDqz.js";import"./D2xmxaya.js";import"./ByNtb9Q5.js";function Re(S,l){return C(),L("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z","clip-rule":"evenodd"})])}const ge="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%2036C6%2031.0347%2017.9925%2028%2024%2028C30.0075%2028%2042%2031.0347%2042%2036V42H6V36Z'%20fill='%23333333'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24%2024C28.4183%2024%2032%2020.4183%2032%2016C32%2011.5817%2028.4183%208%2024%208C19.5817%208%2016%2011.5817%2016%2016C16%2020.4183%2019.5817%2024%2024%2024ZM24%2026C29.5228%2026%2034%2021.5228%2034%2016C34%2010.4772%2029.5228%206%2024%206C18.4772%206%2014%2010.4772%2014%2016C14%2021.5228%2018.4772%2026%2024%2026Z'%20fill='%23333333'/%3e%3c/svg%3e",je={class:"fixed inset-0 overflow-y-auto"},Be={class:"flex min-h-full items-center justify-center p-4 text-center"},Ge={class:"border-b px-3 py-3 flex items-center justify-between"},Ne={class:"mt-2 space-y-3 px-5"},ze={class:"grid grid-cols-2 gap-4"},Ze={class:"grid grid-cols-2 gap-4"},Oe={class:"grid grid-cols-2 gap-4"},Ke={class:"w-full flex items-center"},He={class:"flex items-center"},Xe={class:"flex items-center ml-2"},Ye={class:"mt-10 justify-end flex items-center space-x-3 px-3 py-2 border-t"},Je=fe({__name:"index",setup(S){const l=n(!1),p=xe,D=$e,i=n([]),w=n([]),_=n([]),V=ae("token"),F=n([]),M=n([]),T=n([]),x=n([]),P=n([]),k=n([]),b=n(""),o=n(""),$=n(""),U=n(""),I=n(""),R=n(""),G=n(!1),{$metadata:u}=te(),z=async()=>{G.value=!0;const g=i.value?i.value.map(h=>{var q;return(q=_.value.find(Q=>h===Q.name))==null?void 0:q.id}).filter(h=>h!==void 0):[],e=T.value?T.value.map(h=>{var q;return(q=M.value.find(Q=>h===Q.name))==null?void 0:q.id}).filter(h=>h!==void 0):[],v=k.value?k.value.map(h=>{var q;return(q=x.value.find(Q=>h===Q.name))==null?void 0:q.id}).filter(h=>h!==void 0).map(Number):[],f={route:j.users,method:"POST",token:`${V.value}`,body:{person:{first_name:b.value,middle_name:o.value,last_name:$.value,sex:I.value},user:{username:U.value,password:R.value},roles:e,departments:g,lab_locations:v}},{data:m,error:y,pending:d}=await B(f);G.value=d;const{$toast:r}=te();m.value&&(K(),r.success("User created successfully!"),G.value=!1),y.value&&(K(),r.error(y.value),G.value=!1,console.error(y.value))},J=async()=>{const g={route:j.roles,method:"GET",token:`${V.value}`},{data:e,error:v}=await B(g);e.value&&(M.value=e.value,F.value=e.value.map(f=>f.name)),v.value&&console.error(v.value)},Z=async()=>{const g={route:j.locations,method:"GET",token:`${V.value}`},{data:e,error:v}=await B(g);e.value&&(x.value=e.value,P.value=e.value.map(f=>f.name)),v.value&&console.error(v.value)},ue=()=>{P.value=x.value.map(g=>g.name),_.value=u.departments,w.value=_.value.map(g=>g.name)},me=async()=>{await J(),await Z(),ue(),K()},K=()=>{l.value=!l.value};return(g,e)=>{const v=ce,f=A("FormKit"),m=ke,y=_e;return C(),L("div",null,[t("div",null,[s(v,{text:"Add user",color:"primary",icon:a(p),click:()=>{me()}},null,8,["icon","click"])]),s(a(de),{appear:"",show:a(l),as:"template"},{default:c(()=>[s(a(oe),{as:"div",onClose:K,class:"relative z-10"},{default:c(()=>[s(a(Y),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:c(()=>e[10]||(e[10]=[t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),t("div",je,[t("div",Be,[s(a(Y),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:c(()=>[s(a(ne),{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:c(()=>[t("div",Ge,[s(a(ie),{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:c(()=>e[11]||(e[11]=[t("img",{src:ge,alt:"user-icon",class:"w-8 h-8 mr-2"},null,-1),X(" Add user ")])),_:1}),t("button",{onClick:K},[s(a(re),{class:"w-5 h-5"})])]),s(f,{type:"form",id:"submitForm","submit-label":"Update",onSubmit:z,actions:!1},{default:c(()=>[t("div",Ne,[t("div",ze,[s(f,{type:"text",label:"Username",validation:"required|matches:/^[a-zA-Z']+$/","validation-messages":{matches:"Username must contain only letters, no spaces or special characters"},modelValue:a(U),"onUpdate:modelValue":e[0]||(e[0]=d=>E(U)?U.value=d:null)},null,8,["modelValue"]),s(f,{type:"text",label:"First name",modelValue:a(b),"onUpdate:modelValue":e[1]||(e[1]=d=>E(b)?b.value=d:null),validation:"required|matches:/^[a-zA-Z']+$/","validation-messages":{matches:"First name must contain only letters, no spaces or special characters"}},null,8,["modelValue"])]),t("div",Ze,[s(f,{type:"text",label:"Middle name",modelValue:a(o),"onUpdate:modelValue":e[2]||(e[2]=d=>E(o)?o.value=d:null)},null,8,["modelValue"]),s(f,{type:"text",label:"Last name",modelValue:a($),"onUpdate:modelValue":e[3]||(e[3]=d=>E($)?$.value=d:null),validation:"required|matches:/^[a-zA-Z']+$/","validation-messages":{matches:"Last name must contain only letters, no spaces or special characters"}},null,8,["modelValue"])]),s(f,{type:"group"},{default:c(()=>[t("div",Oe,[s(f,{type:"password",label:"Password",name:"password",validation:"required",modelValue:a(R),"onUpdate:modelValue":e[4]||(e[4]=d=>E(R)?R.value=d:null),"validation-visibility":"live"},null,8,["modelValue"]),s(f,{type:"password",label:"Confirm password",name:"password_confirm",validation:"required|confirm","validation-label":"Password confirmation","validation-visibility":"live"})])]),_:1}),t("div",Ke,[e[14]||(e[14]=t("label",{class:"mr-5 font-medium text-lg"},"Sex",-1)),t("label",He,[O(t("input",{required:"","onUpdate:modelValue":e[5]||(e[5]=d=>E(I)?I.value=d:null),type:"radio",value:"M",name:"gender",class:"w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"},null,512),[[se,a(I)]]),e[12]||(e[12]=t("span",{class:"ml-2"},"Male",-1))]),t("label",Xe,[O(t("input",{required:"","onUpdate:modelValue":e[6]||(e[6]=d=>E(I)?I.value=d:null),type:"radio",value:"F",name:"gender",class:"w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"},null,512),[[se,a(I)]]),e[13]||(e[13]=t("span",{class:"ml-2"},"Female",-1))])]),s(m,{label:"Select Role(s)","items-selected":a(T),"onUpdate:itemsSelected":e[7]||(e[7]=d=>E(T)?T.value=d:null),items:a(F),mode:"tags"},null,8,["items-selected","items"]),s(m,{label:"Select Laboratory Location(s)","items-selected":a(k),"onUpdate:itemsSelected":e[8]||(e[8]=d=>E(k)?k.value=d:null),items:a(P),mode:"tags"},null,8,["items-selected","items"]),s(m,{label:"Select Lab Section(s)","items-selected":a(i),"onUpdate:itemsSelected":e[9]||(e[9]=d=>E(i)?i.value=d:null),items:a(w),mode:"tags"},null,8,["items-selected","items"])]),t("div",Ye,[s(y,{type:"button",click:()=>{a(Ve)("submitForm")},text:"Clear form"},null,8,["click"]),s(v,{loading:a(G),type:"submit",click:()=>{},color:"success",icon:a(D),text:"Save Changes"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}}}),Qe={components:{TransitionRoot:de,TransitionChild:Y,Dialog:oe,DialogPanel:ne,DialogTitle:ie,XMarkIcon:re,UserIcon:qe},props:{data:{required:!0,type:Object}},data(){return{moment:Ue,open:!1,addIcon:xe,viewIcon:De,editIcon:be,clearIcon:Ee,details:{id:"",username:"",first_name:"",last_name:"",middle_name:"",sex:"",date_of_birth:"",lab_locations:new Array,roles:new Array,departments:new Array},loading:!1,cookie:ae("token")}},methods:{async init(){this.loading=!0;const S={route:`${j.users}/${this.data.id}`,method:"GET",token:`${this.cookie}`},{data:l,error:p,pending:D}=await B(S);this.loading=D,l.value&&(this.details=l.value,this.loading=!1,this.handleDialog()),p.value&&(console.error(p.value),this.loading=!1)},handleDialog(){this.open=!this.open}}},We={class:"fixed inset-0 overflow-y-auto"},et={class:"flex min-h-full items-center justify-center p-4 text-center"},tt={class:"border-b px-3 py-3 flex items-center justify-between"},at={class:"flex items-center justify-center mx-auto my-20"},st={class:"space-y-3 px-5 py-5"},lt={class:"w-full flex flex-col space-y-1"},ot={class:"text-base text-gray-600"},nt={class:"w-full flex flex-col space-y-1"},it={class:"text-base text-gray-600"},rt={class:"w-full flex flex-col space-y-1"},dt={class:"text-base text-gray-600"},ct={class:"w-full flex flex-col space-y-1"},ut={class:"w-full flex flex-col space-y-1"},mt={class:"w-full flex flex-col space-y-1"};function pt(S,l,p,D,i,w){const _=ce,V=A("TransitionChild"),F=A("DialogTitle"),M=A("XMarkIcon"),T=we,x=A("DialogPanel"),P=A("Dialog"),k=A("TransitionRoot");return C(),L("div",null,[t("div",null,[s(_,{text:"View",color:"primary",icon:i.viewIcon,click:w.init},null,8,["icon","click"])]),s(k,{appear:"",show:i.open,as:"template"},{default:c(()=>[s(P,{as:"div",onClose:w.handleDialog,class:"relative z-10"},{default:c(()=>[s(V,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:c(()=>l[1]||(l[1]=[t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),t("div",We,[t("div",et,[s(V,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:c(()=>[s(x,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:c(()=>[t("div",tt,[s(F,{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:c(()=>l[2]||(l[2]=[t("img",{src:ge,class:"w-6 h-6 mr-2"},null,-1),X(" View User Account ")])),_:1}),t("button",{onClick:l[0]||(l[0]=(...b)=>w.handleDialog&&w.handleDialog(...b))},[s(M,{class:"w-5 h-5"})])]),O(t("div",at,[s(T,{loading:i.loading},null,8,["loading"])],512),[[le,i.loading]]),O(t("div",st,[t("div",lt,[l[3]||(l[3]=t("label",{class:"font-semibold text-lg"},"Username",-1)),t("p",ot,N(i.details.username),1)]),t("div",nt,[l[4]||(l[4]=t("label",{class:"font-semibold text-lg"},"First name",-1)),t("p",it,N(i.details.first_name),1)]),t("div",rt,[l[5]||(l[5]=t("label",{class:"font-semibold text-lg"},"Last name",-1)),t("p",dt,N(i.details.last_name),1)]),t("div",ct,[l[6]||(l[6]=t("label",{class:"font-semibold text-lg"},"Roles",-1)),(C(!0),L(pe,null,ve(i.details.roles,(b,o)=>(C(),L("p",{class:"text-base text-gray-600",key:o},N(b.role_name),1))),128))]),t("div",ut,[l[7]||(l[7]=t("label",{class:"font-semibold text-lg"},"Locations",-1)),(C(!0),L(pe,null,ve(i.details.lab_locations,(b,o)=>(C(),L("p",{class:"text-base text-gray-600",key:o},N(b.name),1))),128))]),t("div",mt,[l[8]||(l[8]=t("label",{class:"font-semibold text-lg"},"Departments",-1)),(C(!0),L(pe,null,ve(i.details.departments,(b,o)=>(C(),L("p",{class:"text-base text-gray-600",key:o},N(b.name),1))),128))])],512),[[le,!i.loading]])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])])}const vt=he(Qe,[["render",pt]]),ft={class:"mx-auto flex justify-center py-20 bg-white"},_t={class:"fixed inset-0 overflow-y-auto"},gt={class:"flex min-h-full items-center justify-center p-4 text-center"},yt={class:"border-b px-3 py-3 flex items-center justify-between"},xt={class:"mt-2 space-y-3 px-5 py-5"},bt={class:"grid grid-cols-2 gap-4"},ht={class:"grid grid-cols-2 gap-4"},wt={class:"grid grid-cols-2 gap-4"},kt={class:"w-full flex flex-col space-y-2"},$t={class:"w-full flex flex-col space-y-2"},Ct={class:"flex items-center"},Vt={class:"flex items-center"},Ut={class:"flex items-center ml-2"},Dt={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"},St=fe({__name:"index",props:{data:{}},emits:["update"],setup(S,{emit:l}){const p=S,D=n(!1),i=be,w=$e,_=n([]),V=n([]),F=n([]),M=n([]),T=n([]),x=n([]),P=ae("token"),k=n([]),b=n([]),o=n([]),$=n(!1),U=n(!1),I=l,{$toast:R,$metadata:G}=te(),u=n({id:"",username:"",first_name:"",last_name:"",middle_name:"",old_password:"",new_password:"",sex:"",date_of_birth:"",roles:[],lab_locations:[],departments:[]}),z=()=>{D.value=!D.value},J=async()=>{const g={route:j.roles,method:"GET",token:`${P.value}`},{data:e,error:v}=await B(g);e.value&&(b.value=e.value,k.value=e.value.map(f=>f.name)),v.value&&console.error(v.value)},Z=async()=>{const g={route:j.locations,method:"GET",token:`${P.value}`},{data:e,error:v}=await B(g);e.value&&(M.value=e.value,T.value=e.value.map(f=>f.name)),v.value&&console.error(v.value)},ue=()=>{F.value=G.departments,V.value=F.value.map(g=>g.name)},me=async()=>{await J(),await Z(),ue(),z(),U.value=!0;const g={route:`${j.users}/${p.data.id}`,method:"GET",token:`${P.value}`},{data:e,error:v,pending:f}=await B(g);U.value=f,e.value&&(u.value=e.value,U.value=!1,o.value=e.value.roles.map(({role_name:m})=>{var y;return(y=b.value.find(d=>m===d.name))==null?void 0:y.name}).filter(m=>m!==void 0),_.value=e.value.departments.map(({name:m})=>{var y;return(y=F.value.find(d=>m===d.name))==null?void 0:y.name}).filter(m=>m!==void 0),x.value=e.value.lab_locations.map(({name:m})=>{var y;return(y=M.value.find(d=>m===d.name))==null?void 0:y.name}).filter(m=>m!==void 0)),v.value&&(console.error(v.value),U.value=!1)},K=async()=>{$.value=!0;const g=_.value?_.value.map(r=>{var h;return(h=F.value.find(q=>r===q.name))==null?void 0:h.id}).filter(r=>r!==void 0).map(Number):[],e=o.value?o.value.map(r=>{var h;return(h=b.value.find(q=>r===q.name))==null?void 0:h.id}).filter(r=>r!==void 0):[],v=x.value?x.value.map(r=>{var h;return(h=M.value.find(q=>r===q.name))==null?void 0:h.id}).filter(r=>r!==void 0).map(Number):[],f={route:`${j.users}/${p.data.id}`,method:"PUT",token:`${P.value}`,body:{person:{first_name:u.value.first_name,middle_name:u.value.middle_name,last_name:u.value.last_name,sex:u.value.sex,date_of_birth:u.value.date_of_birth},user:{username:u.value.username,old_password:u.value.old_password,password:u.value.new_password},roles:e,departments:g,lab_locations:v}},{data:m,error:y,pending:d}=await B(f);$.value=d,m.value&&(z(),R.success("User updated successfully!"),$.value=!1,I("update",!0)),y.value&&(console.error(y.value),z(),R.error(Se),$.value=!1)};return(g,e)=>{const v=ce,f=we,m=A("FormKit"),y=ke,d=_e;return C(),L("div",null,[t("div",null,[s(v,{text:"Edit",color:"primary",icon:a(i),click:me,loading:a(U)},null,8,["icon","loading"])]),s(a(de),{appear:"",show:a(D),as:"template"},{default:c(()=>[s(a(oe),{as:"div",onClose:z,class:"relative z-10"},{default:c(()=>[s(a(Y),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:c(()=>e[10]||(e[10]=[t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),O(t("div",ft,[s(f)],512),[[le,a(U)]]),O(t("div",_t,[t("div",gt,[s(a(Y),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:c(()=>[s(a(ne),{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:c(()=>[t("div",yt,[s(a(ie),{as:"h3",class:"text-xl text-black flex items-center font-medium leading-6"},{default:c(()=>e[11]||(e[11]=[t("img",{src:ge,class:"w-8 h-8 mr-2",alt:"person-icon"},null,-1),X(" Edit user ")])),_:1}),t("button",{onClick:z},[s(a(re),{class:"w-5 h-5"})])]),s(m,{type:"form","submit-label":"Update",onSubmit:K,actions:!1},{default:c(()=>[t("div",xt,[t("div",bt,[s(m,{type:"text",label:"Username",modelValue:a(u).username,"onUpdate:modelValue":e[0]||(e[0]=r=>a(u).username=r),validation:"required|matches:/^[a-zA-Z']+$/","validation-messages":{matches:"Username must contain only letters and spaces"}},null,8,["modelValue"]),s(m,{type:"text",label:"First name",modelValue:a(u).first_name,"onUpdate:modelValue":e[1]||(e[1]=r=>a(u).first_name=r),validation:"required|matches:/^[a-zA-Z']+$/","validation-messages":{matches:"First name must contain only letters and spaces"}},null,8,["modelValue"])]),t("div",ht,[s(m,{type:"text",label:"Middle name",modelValue:a(u).middle_name,"onUpdate:modelValue":e[2]||(e[2]=r=>a(u).middle_name=r)},null,8,["modelValue"]),s(m,{type:"text",label:"Last name",modelValue:a(u).last_name,"onUpdate:modelValue":e[3]||(e[3]=r=>a(u).last_name=r),validation:"required|matches:/^[a-zA-Z']+$/","validation-messages":{matches:"Last name must contain only letters and spaces"}},null,8,["modelValue"])]),s(m,{type:"group"},{default:c(()=>[t("div",wt,[t("div",kt,[s(m,{type:"password",label:"New password",name:"password",modelValue:a(u).new_password,"onUpdate:modelValue":e[4]||(e[4]=r=>a(u).new_password=r),"validation-visibility":"live"},null,8,["modelValue"])]),t("div",$t,[s(m,{type:"password",label:"Confirm new password",name:"password_confirm",validation:a(u).new_password&&"required|confirm","validation-label":"Password confirmation","validation-visibility":"live"},null,8,["validation"])])])]),_:1}),t("div",Ct,[e[14]||(e[14]=t("label",{class:"mr-5 font-medium text-lg"},"Sex",-1)),t("label",Vt,[O(t("input",{required:"","onUpdate:modelValue":e[5]||(e[5]=r=>a(u).sex=r),type:"radio",value:"M",name:"gender",class:"w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"},null,512),[[se,a(u).sex]]),e[12]||(e[12]=t("span",{class:"ml-2"},"Male",-1))]),t("label",Ut,[O(t("input",{required:"","onUpdate:modelValue":e[6]||(e[6]=r=>a(u).sex=r),type:"radio",value:"F",name:"gender",class:"w-4 h-4 rounded-full bg-sky-500 border-sky-800 text-sky-500 focus:ring-sky-800"},null,512),[[se,a(u).sex]]),e[13]||(e[13]=t("span",{class:"ml-2"},"Female",-1))])]),s(y,{label:"Select Role(s)","items-selected":a(o),"onUpdate:itemsSelected":e[7]||(e[7]=r=>E(o)?o.value=r:null),items:a(k),mode:"tags"},null,8,["items-selected","items"]),s(y,{label:"Select Laboratory Location(s)","items-selected":a(x),"onUpdate:itemsSelected":e[8]||(e[8]=r=>E(x)?x.value=r:null),items:a(T),mode:"tags"},null,8,["items-selected","items"]),s(y,{label:"Select Lab Section(s)","items-selected":a(_),"onUpdate:itemsSelected":e[9]||(e[9]=r=>E(_)?_.value=r:null),items:a(V),mode:"tags"},null,8,["items-selected","items"])]),t("div",Dt,[s(d,{type:"button",click:()=>{},text:"Clear form"}),s(v,{loading:a($),type:"submit",click:()=>{},color:"success",icon:a(w),text:"Save Changes"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])],512),[[le,!a(U)]])]),_:1})]),_:1},8,["show"])])}}}),At={components:{TransitionRoot:de,TransitionChild:Y,Dialog:oe,DialogPanel:ne,DialogTitle:ie,XMarkIcon:re,ExclamationTriangleIcon:Ae},data(){return{show:!1,disableIcon:Re,loading:!1,reason:"",cookie:ae("token"),details:{id:"",username:"",first_name:"",last_name:"",middle_name:"",sex:"",date_of_birth:"",lab_locations:new Array,roles:new Array,departments:new Array}}},props:{data:{type:Object,required:!0}},methods:{async init(){this.loading=!0;const S={route:`${j.users}/${this.data.id}`,method:"GET",token:`${this.cookie}`},{data:l,error:p,pending:D}=await B(S);this.loading=D,l.value&&(this.details=l.value,this.loading=!1,this.handleDialog()),p.value&&(console.error(p.value),this.loading=!1)},async deleteData(S){this.loading=!0;const l={route:`${j.users}/${S}`,method:"DELETE",token:`${this.cookie}`},{pending:p,error:D,data:i}=await B(l);this.loading=p,i.value&&(this.handleDialog(),te().$toast.success(`${i.value.message}`),this.loading=!1,this.$emit("update",!0),this.reason=""),D.value&&(console.log(i.value),this.loading=!1)},async activate(S){this.loading=!0;const l={route:`${j.users}/activate/${S}`,method:"PUT",token:`${this.cookie}`,body:{retired_reason:this.reason}},{pending:p,error:D,data:i}=await B(l);this.loading=p,i.value&&(this.handleDialog(),te().$toast.success(`${i.value.message}`),this.loading=!1,this.$emit("update",!0),this.reason=""),D.value&&(console.log(i.value),this.loading=!1)},handleDialog(){this.show=!this.show}}},Tt={key:0},It={key:1},Pt={class:"fixed inset-0 overflow-y-auto"},qt={class:"flex min-h-full items-center justify-center p-4 text-center"},Et={class:"border-b px-3 py-3 flex items-center justify-between"},Lt={class:"mt-2 space-y-3 px-5"},Ft={class:"rounded px-2 py-2"},Mt={class:"font-semibold text-red-500"},Rt={class:"mt-4 justify-end flex items-center space-x-3 px-3 py-2 border-t"};function jt(S,l,p,D,i,w){const _=ce,V=A("TransitionChild"),F=A("ExclamationTriangleIcon"),M=A("DialogTitle"),T=A("XMarkIcon"),x=A("FormKit"),P=_e,k=A("DialogPanel"),b=A("Dialog"),o=A("TransitionRoot");return C(),L("div",null,[t("div",null,[p.data.is_active?(C(),L("div",Tt,[s(_,{click:w.init,color:"error",text:"Disable",icon:i.disableIcon},null,8,["click","icon"])])):H("",!0),p.data.is_active?H("",!0):(C(),L("div",It,[s(_,{click:w.init,color:"success",text:"Enable",icon:i.disableIcon},null,8,["click","icon"])]))]),s(o,{appear:"",show:i.show,as:"template"},{default:c(()=>[s(b,{as:"div",class:"relative z-10"},{default:c(()=>[s(V,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:c(()=>l[3]||(l[3]=[t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),t("div",Pt,[t("div",qt,[s(V,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:c(()=>[s(k,{class:"w-full max-w-3xl transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"},{default:c(()=>[t("div",Et,[s(M,{as:"h3",class:"text-lg flex items-center font-medium leading-6"},{default:c(()=>[s(F,{class:"h-5 w-5 mr-2"}),X(" "+N(p.data.is_active?"Confirm disable":"Confirm activate"),1)]),_:1}),t("button",{onClick:l[0]||(l[0]=(...$)=>w.handleDialog&&w.handleDialog(...$))},[s(T,{class:"w-5 h-5"})])]),s(x,{type:"form","submit-label":"Update",onSubmit:l[2]||(l[2]=$=>p.data.is_active?w.deleteData(p.data.id):w.activate(p.data.id)),actions:!1},{default:c(({value:$})=>[t("div",Lt,[t("div",Ft,[X(" Do you want to "+N(p.data.is_active?"disable":"activate")+" ",1),t("span",Mt,N(p.data.username),1),l[4]||(l[4]=X(" account? Note that once this action is completed, it can not be undone "))]),s(x,{type:"textarea",label:"Reason",validation:"required",modelValue:i.reason,"onUpdate:modelValue":l[1]||(l[1]=U=>i.reason=U)},null,8,["modelValue"])]),t("div",Rt,[s(P,{click:w.handleDialog,type:"button",text:"Cancel"},null,8,["click"]),s(_,{loading:i.loading,type:"submit",click:()=>{},color:"success",icon:i.disableIcon,text:"Continue"},null,8,["loading","icon"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const Bt=he(At,[["render",jt]]),Gt=()=>{const S=n([{text:"id",value:"id",sortable:!0},{text:"username",value:"username",sortable:!0},{text:"full name",value:"fullname",sortable:!0},{text:"sex",value:"sex",sortable:!0},{text:"actions",value:"actions"}]),l=n([{name:"Home",link:"/home"},{name:"Access Controls",link:"#"}]);return{HEADERS:S,PAGES:l}},Nt={class:"py-5 px-5"},zt={class:"flex items-center justify-between py-5"},Zt={class:"text-2xl font-semibold"},Ot={class:"flex justify-end w-full px-2 py-2 mb-2"},Kt={class:"py-2 flex items-center space-x-2"},ca=fe({__name:"user-accounts",setup(S){Me({title:`${Fe.name.toUpperCase()} - User Accounts`});const l=n("List of users"),p=Gt(),D=p.HEADERS.value,i=n([]),w=ae("token"),_=n(!1),V=n(""),F=n(""),M=p.PAGES.value,T=n(0),x=n({page:1,rowsPerPage:25,sortBy:"name"}),P=Te(()=>i.value.map(o=>({id:o.id,is_active:o.is_active,username:o.username.charAt(0).toUpperCase()+o.username.slice(1),fullname:`${o.first_name} ${o.last_name}`,sex:o.sex})));async function k(){_.value=!0;const{page:o,rowsPerPage:$}=x.value,U={route:`${j.users}?page=${o}&per_page=${$}&search=${V.value}`,method:"GET",token:`${w.value}`},{data:I,error:R,pending:G}=await B(U);_.value=G,I.value&&(i.value=I.value.data,_.value=!1,T.value=I.value.meta.total_count),R.value&&(console.error(R.value),_.value=!1)}const b=o=>{typeof o=="object"&&(x.value=o)};return ye(V,()=>{k()}),ye(x,()=>{k()}),Ie(()=>{k()}),(o,$)=>{const U=Ce,I=Je,R=Pe,G=vt,u=St,z=Bt,J=Le;return C(),L("div",Nt,[s(U,{pages:a(M)},null,8,["pages"]),t("div",zt,[t("h3",Zt,N(a(l)),1),("usePermissions"in o?o.usePermissions:a(ee))().can.manage("users")?(C(),W(I,{key:0,onUpdate:k})):H("",!0)]),t("div",Ot,[s(R,{search:a(V),"onUpdate:search":$[0]||($[0]=Z=>E(V)?V.value=Z:null)},null,8,["search"])]),("usePermissions"in o?o.usePermissions:a(ee))().can.manage("users")?(C(),W(J,{key:0,headers:a(D),data:a(P),loading:a(_),searchField:"username",searchValue:a(F),serverItemsLength:a(T),serverOptions:a(x),onUpdate:b},{actions:c(({item:Z})=>[t("div",Kt,[("usePermissions"in o?o.usePermissions:a(ee))().can.manage("users")?(C(),W(G,{key:0,data:Z},null,8,["data"])):H("",!0),("usePermissions"in o?o.usePermissions:a(ee))().can.manage("users")?(C(),W(u,{key:1,data:Z,onUpdate:k},null,8,["data"])):H("",!0),("usePermissions"in o?o.usePermissions:a(ee))().can.manage("users")?(C(),W(z,{key:2,data:Z,onUpdate:k},null,8,["data"])):H("",!0)])]),_:1},8,["headers","data","loading","searchValue","serverItemsLength","serverOptions"])):H("",!0)])}}});export{ca as default};