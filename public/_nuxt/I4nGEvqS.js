import{C as dt,A as ut,p as _t,a as mt,P as ht}from"./DEaZS3Ln.js";import{b as r,e as l,g as t,l as A,m,x as q,p,t as c,f as a,n as d,T as Q,z as f,s as g,i as z,v as E,d as W,a as G,A as rt,F as M,j as V,h as k,_ as X,r as pt,B as vt}from"./CgCt1uig.js";import{d as J}from"./C7nrlxI_.js";import{g as lt,h as K,a as Y,e as tt,f as et,c as F}from"./DDP8Pd40.js";import{u as Z}from"./CM5UAy9z.js";import{g as st,b as ot,M as nt,S as at}from"./BkYT6r98.js";import{r as ft}from"./ClXW6i3w.js";import{r as gt}from"./BFVncPZ8.js";import{_ as yt}from"./cien4RO4.js";import{_ as O}from"./DAatDIeb.js";import{_ as xt}from"./DtWROlmf.js";import{_ as bt}from"./Cl1Pa16j.js";import{r as ct}from"./B7w53Otm.js";import{_ as wt}from"./DHs6K9Rp.js";import{_ as $t}from"./BBIgpWSn.js";import{_ as Ct}from"./BaJf9vfg.js";import{_ as kt}from"./Co6rQh9N.js";import{_ as Mt}from"./BpeEZWNp.js";import{_ as Vt}from"./quWe4lpW.js";import{r as Ht}from"./DDaZZI9g.js";import{r as It}from"./tzYXVktK.js";import{u as Zt}from"./Kt-y9hP3.js";import{P as At}from"./Bf5grz7u.js";import"./22U_Ornm.js";import"./BBi4X6kY.js";import"./q9WmgNLv.js";import"./D8JfA7oG.js";import"./CosnS5_S.js";import"./9jRWjONT.js";import"./CEii_6Qs.js";import"./DESlB7Mi.js";function St(o,n){return r(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z","clip-rule":"evenodd"}),t("path",{"fill-rule":"evenodd",d:"M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z","clip-rule":"evenodd"})])}function Tt(o,n){return r(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z","clip-rule":"evenodd"})])}dt.register(ut,_t,mt);const Lt={components:{Pie:ht},props:{chartData:{required:!0,type:Object}},data(){return{data:this.chartData,options:{responsive:!0,maintainAspectRatio:!1}}}};function jt(o,n,i,u,e,s){const v=m("Pie");return r(),q(v,{data:e.data,options:e.options},null,8,["data","options"])}const Bt=A(Lt,[["render",jt]]),Dt={components:{EllipsisVerticalIcon:Tt,Menu:st,MenuItem:ot,MenuItems:nt,MenuButton:at,ChartPieIcon:St,DocumentTextIcon:ft},props:{data:{required:!0,type:Object}},data(){return{viewChart:!1,applyIcon:gt,from:"",to:""}},created(){this.formatDateRanges()},methods:{getColor(o){return lt(o)},proccessedAnalyticsData(){var o,n,i,u,e,s;return{labels:["Not Received","Pending","Started","Completed","Verified","Rejected"],datasets:[{backgroundColor:["#d97706","#dc2626","#06b6d4","#22c55e","#15803d"],data:[(o=this.data)==null?void 0:o.tests_by_status["not-received"],(n=this.data)==null?void 0:n.tests_by_status.pending,(i=this.data)==null?void 0:i.tests_by_status.started,(u=this.data)==null?void 0:u.tests_by_status.completed,(e=this.data)==null?void 0:e.tests_by_status.verified,(s=this.data)==null?void 0:s.tests_by_status.rejected]}]}},formatDateRanges(){var e,s;const n=K().format(J),u=K().subtract(30,"days").format(J);this.from=((e=this.data)==null?void 0:e.from)||u,this.to=((s=this.data)==null?void 0:s.to)||n},navigateFilterTests(o,n,i){this.$router.push(`/tests?from=${n}&to=${i}&status=${o}`)},getDepartment(){const{department:o}=Z();return o=="Lab Reception"?"All":o}}},Pt={key:0,class:"border rounded col-span-1"},Rt={class:"flex rounded-t items-center justify-between bg-gray-50 px-2 py-2 border-b"},zt={class:"text-xl font-semibold"},Et={class:"text-base font-medium"},Ft={class:"px-1 py-1"},Nt={class:"flex items-center space-x-2 px-5 py-2"},qt=t("img",{src:yt,alt:"clinical-fe-icon"},null,-1),Gt={class:"w-full px-5 py-2 space-y-2"},Ot={class:"flex items-center justify-between"},Ut={class:"flex items-center space-x-2"},Jt=t("h3",{class:"font-medium"},"Pending",-1),Kt={class:"flex items-center justify-between"},Qt={class:"flex items-center space-x-2"},Wt=t("h3",{class:"font-medium"},"Started",-1),Xt={class:"flex items-center justify-between"},Yt={class:"flex items-center space-x-2"},te=t("h3",{class:"font-medium"},"Completed",-1),ee={class:"flex items-center justify-between"},se={class:"flex items-center space-x-2"},oe=t("h3",{class:"font-medium"},"Verified",-1),ne={class:"flex items-center justify-between"},ae={class:"flex items-center space-x-2"},ie=t("h3",{class:"font-medium"},"Rejected",-1),re={key:0};function le(o,n,i,u,e,s){var h,C,S,T,L,j,B,D,P,R;const v=m("EllipsisVerticalIcon"),_=m("MenuButton"),y=m("DocumentTextIcon"),w=m("ChartPieIcon"),$=m("MenuItem"),H=m("MenuItems"),I=m("Menu"),b=Bt;return i.data.tests_by_status?(r(),l("div",Pt,[t("div",null,[t("div",Rt,[t("h3",zt,[p(" Tests "),t("span",Et,"(Past 30 Days - "+c(s.getDepartment())+")",1)]),a(I,{as:"div",class:"relative inline-block text-left justify-center items-center"},{default:d(()=>[a(_,null,{default:d(()=>[a(v,{class:"w-6 h-6"})]),_:1}),a(Q,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:d(()=>[a(H,{class:"absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:d(()=>[t("div",Ft,[a($,null,{default:d(({active:x})=>[t("button",{onClick:n[0]||(n[0]=U=>e.viewChart=!e.viewChart),class:f([x?"bg-sky-500 text-white":"text-gray-900","group flex w-full items-center rounded px-2 py-2 font-normal"])},[e.viewChart?(r(),q(y,{key:0,class:"w-5 h-5 mr-2"})):g("",!0),e.viewChart?g("",!0):(r(),q(w,{key:1,class:"w-5 h-5 mr-2"})),p(" "+c(e.viewChart?"View summary":"View as Pie Chart"),1)],2)]),_:1})])]),_:1})]),_:1})]),_:1})]),z(t("div",null,[t("div",Nt,[qt,((h=i.data)==null?void 0:h.tests)!==null&&((C=i.data)==null?void 0:C.tests)!==void 0?(r(),l("h3",{key:0,class:"text-3xl hover:text-sky-500 transition duration-150 font-semibold hover:underline cursor-pointer",onClick:n[1]||(n[1]=x=>s.navigateFilterTests("",e.from,e.to))},c((S=i.data)==null?void 0:S.tests.toLocaleString()),1)):g("",!0)]),t("div",Gt,[t("div",Ot,[t("div",Ut,[t("div",{class:f([`bg-${s.getColor("pending")}-500`,"w-3 h-3 rounded-full"])},null,2),Jt]),t("a",{class:"hover:text-sky-500 transition duration-150 hover:underline cursor-pointer",onClick:n[2]||(n[2]=x=>s.navigateFilterTests("pending",e.from,e.to))},c((T=i.data)!=null&&T.tests_by_status.pending?(L=i.data)==null?void 0:L.tests_by_status.pending:0),1)]),t("div",Kt,[t("div",Qt,[t("div",{class:f(["bg-sky-500","w-3 h-3 rounded-full"])}),Wt]),t("a",{class:"hover:text-sky-500 transition duration-150 hover:underline cursor-pointer",onClick:n[3]||(n[3]=x=>s.navigateFilterTests("started",e.from,e.to))},c((j=i.data)==null?void 0:j.tests_by_status.started),1)]),t("div",Xt,[t("div",Yt,[t("div",{class:f([`bg-${s.getColor("completed")}-500`,"w-3 h-3 rounded-full"])},null,2),te]),t("a",{class:"hover:text-sky-500 transition duration-150 hover:underline cursor-pointer",onClick:n[4]||(n[4]=x=>s.navigateFilterTests("completed",e.from,e.to))},c((B=i.data)==null?void 0:B.tests_by_status.completed),1)]),t("div",ee,[t("div",se,[t("div",{class:f([`bg-${s.getColor("verified")}-500`,"w-3 h-3 rounded-full"])},null,2),oe]),t("a",{class:"hover:text-sky-500 transition duration-150 hover:underline cursor-pointer",onClick:n[5]||(n[5]=x=>s.navigateFilterTests("verified",e.from,e.to))},c((D=i.data)==null?void 0:D.tests_by_status.verified),1)]),t("div",ne,[t("div",ae,[t("div",{class:f([`bg-${s.getColor("rejected")}-500`,"w-3 h-3 rounded-full"])},null,2),ie]),t("a",{class:"hover:text-sky-500 transition duration-150 hover:underline cursor-pointer",onClick:n[6]||(n[6]=x=>s.navigateFilterTests("rejected",e.from,e.to))},c((P=i.data)==null?void 0:P.tests_by_status.rejected),1)])])],512),[[E,!e.viewChart]])]),((R=i.data)==null?void 0:R.tests_by_status.data)!==0&&e.viewChart?(r(),l("div",re,[a(b,{chartData:s.proccessedAnalyticsData()},null,8,["chartData"])])):g("",!0)])):g("",!0)}const ce=A(Dt,[["render",le]]),de="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0193%2011.9846C13.0768%2011.2752%2013.2616%2010.6012%2013.5512%209.98462H6V12.4662L10%2015.4969V42.0154H38V15.5321L42.5%2012.5014V9.98462H24.4488C24.7384%2010.6012%2024.9232%2011.2752%2024.9807%2011.9846H39.687L36%2014.4678V40.0154H12V14.5031L8.67616%2011.9846H13.0193Z'%20fill='%23333333'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%2013.75L7.5%2010.5H13.25L16.5%2017H21L24.5%2010.5H41L38%2014.5V41H34V24H26V41H10V13.75ZM14%2024H21V31H14V24Z'%20fill='%23333333'/%3e%3cpath%20d='M6%2041C6%2041.5523%206.44772%2042%207%2042H41C41.5523%2042%2042%2041.5523%2042%2041C42%2040.4477%2041.5523%2040%2041%2040H7C6.44772%2040%206%2040.4477%206%2041Z'%20fill='%23333333'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25%2012C25%2015.3137%2022.3137%2018%2019%2018C15.6863%2018%2013%2015.3137%2013%2012C13%208.68629%2015.6863%206%2019%206C22.3137%206%2025%208.68629%2025%2012ZM20%209V11H22V13H20V15H18V13H16V11H18V9H20Z'%20fill='%23333333'/%3e%3c/svg%3e",ue={class:"border rounded"},_e=t("div",{class:"flex items-center justify-between rounded-t bg-gray-50 px-2 py-2 border-b text-xl font-semibold"},[t("h3",null,[p("Lab Configuration "),t("span",{class:"text-base font-medium"},"(All)")])],-1),me={class:"px-3 py-3 space-y-4"},he={class:"flex items-center space-x-5"},pe=t("div",{class:"px-2 py-2 bg-gray-100 rounded"},[t("img",{src:xt,class:"w-8 h-8"})],-1),ve={class:"text-3xl font-bold"},fe={class:"text-sm font-medium hover:text-sky-500 hover:underline ml-2"},ge={class:"flex items-center space-x-5"},ye=t("div",{class:"px-2 py-2 bg-gray-100 rounded"},[t("img",{src:bt,class:"w-8 h-8"})],-1),xe={class:"text-3xl font-bold"},be={class:"text-sm font-medium hover:text-sky-500 hover:underline ml-2"},we={class:"flex items-center space-x-5"},$e=t("div",{class:"px-2 py-2 bg-gray-100 rounded"},[t("img",{src:de,class:"w-8 h-8"})],-1),Ce={class:"text-3xl font-bold"},ke={class:"text-sm font-medium hover:text-sky-500 hover:underline ml-2"},Me=W({__name:"lab-configuration",props:{data:{required:!0,type:Object}},setup(o){const n=o;return(i,u)=>{var s,v,_;const e=O;return r(),l("div",ue,[t("div",null,[_e,t("div",me,[t("div",he,[pe,t("p",ve,[p(c((s=n.data)==null?void 0:s.instruments),1),t("span",fe,[a(e,{to:"/lab-configuration/instruments"},{default:d(()=>[p("instruments")]),_:1})])])]),t("div",ge,[ye,t("p",xe,[p(c((v=n.data)==null?void 0:v.facilities),1),t("span",be,[a(e,{to:"/lab-configuration/facilities"},{default:d(()=>[p("facilities")]),_:1})])])]),t("div",we,[$e,t("p",Ce,[p(c((_=n.data)==null?void 0:_.wards),1),t("span",ke,[a(e,{to:"/lab-configuration/facility-wards"},{default:d(()=>[p("wards")]),_:1})])])])])])])}}});function Ve(o,n){return r(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{d:"M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10ZM10 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12ZM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10ZM14 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14Z"}),t("path",{"fill-rule":"evenodd",d:"M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z","clip-rule":"evenodd"})])}function He(o,n){return r(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z","clip-rule":"evenodd"})])}function Ie(o,n){return r(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{d:"M15.5 2A1.5 1.5 0 0 0 14 3.5v13a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 16.5 2h-1ZM9.5 6A1.5 1.5 0 0 0 8 7.5v9A1.5 1.5 0 0 0 9.5 18h1a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 10.5 6h-1ZM3.5 10A1.5 1.5 0 0 0 2 11.5v5A1.5 1.5 0 0 0 3.5 18h1A1.5 1.5 0 0 0 6 16.5v-5A1.5 1.5 0 0 0 4.5 10h-1Z"})])}function it(o,n){return r(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{d:"M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"})])}function Ze(o,n){return r(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{d:"M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z"})])}const Ae={components:{EllipsisVerticalIcon:it,Menu:st,MenuItem:ot,MenuItems:nt,MenuButton:at,UserGroupIcon:Ze,DocumentTextIcon:ct},props:{data:{required:!0,type:Object}},data(){return{cookie:G("token")}},methods:{getPercentage(o,n){return n==0?0:Math.round(o/n*100)}}},Se="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%2016.5C18%2018.9862%2015.9862%2021%2013.5%2021C11.0138%2021%209%2018.9862%209%2016.5C9%2014.0138%2011.0138%2012%2013.5%2012C15.9862%2012%2018%2014.0138%2018%2016.5Z'%20fill='%23333333'/%3e%3cpath%20d='M4%2028.3333C4%2024.7867%2010.3294%2023%2013.5%2023C16.6706%2023%2023%2024.7867%2023%2028.3333V36H4V28.3333Z'%20fill='%23333333'/%3e%3cpath%20d='M39%2016.5C39%2018.9862%2036.9863%2021%2034.5%2021C32.0138%2021%2030%2018.9862%2030%2016.5C30%2014.0138%2032.0138%2012%2034.5%2012C36.9863%2012%2039%2014.0138%2039%2016.5Z'%20fill='%23333333'/%3e%3cpath%20d='M27%2015C27%2016.6575%2025.6575%2018%2024%2018C22.3425%2018%2021%2016.6575%2021%2015C21%2013.3425%2022.3425%2012%2024%2012C25.6575%2012%2027%2013.3425%2027%2015Z'%20fill='%23333333'/%3e%3cpath%20d='M25%2028.3333C25%2024.7867%2031.3294%2023%2034.5%2023C37.6706%2023%2044%2024.7867%2044%2028.3333V36H25V28.3333Z'%20fill='%23333333'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.7508%2022.185C28.4839%2022.2831%2028.2206%2022.3873%2027.9625%2022.4975C26.7914%2022.998%2025.6088%2023.6741%2024.69%2024.5785C24.444%2024.8208%2024.2105%2025.0864%2024%2025.375C23.7895%2025.0864%2023.556%2024.8208%2023.3099%2024.5785C22.3912%2023.6741%2021.2085%2022.998%2020.0374%2022.4975C19.7794%2022.3873%2019.5161%2022.2831%2019.2491%2022.185C20.7717%2021.3961%2022.7298%2021%2024%2021C25.2701%2021%2027.2282%2021.3961%2028.7508%2022.185Z'%20fill='%23333333'/%3e%3c/svg%3e",Te={class:"border rounded"},Le={class:"flex items-center justify-between rounded-t bg-gray-50 px-2 py-2 border-b text-xl font-semibold"},je=t("h3",null,[p("Patients "),t("span",{class:"text-base font-medium"},"(All)")],-1),Be={class:"py-1 border-y"},De={class:""},Pe={class:"flex items-center space-x-2 px-2 py-2"},Re=t("img",{src:Se},null,-1),ze={key:0,class:"px-5"},Ee=t("h3",{class:"mb-2 font-medium"},"By Gender",-1),Fe={class:"w-full flex items-center"},Ne={class:"mt-2"},qe={class:"flex items-center space-x-2"},Ge=t("div",{class:"w-3 h-3 bg-sky-500 rounded-full"},null,-1),Oe={class:"flex items-center space-x-2"},Ue=t("div",{class:"w-3 h-3 bg-green-500 rounded-full"},null,-1);function Je(o,n,i,u,e,s){var h,C,S,T,L,j,B,D,P,R,x,U;const v=m("EllipsisVerticalIcon"),_=m("MenuButton"),y=m("UserGroupIcon"),w=O,$=m("MenuItem"),H=m("DocumentTextIcon"),I=m("MenuItems"),b=m("Menu");return r(),l("div",Te,[t("div",null,[t("div",Le,[je,a(b,{as:"div",class:"relative inline-block text-left justify-center items-center"},{default:d(()=>[a(_,null,{default:d(()=>[a(v,{class:"w-5 h-5"})]),_:1}),a(Q,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:d(()=>[a(I,{class:"absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:d(()=>[t("div",Be,[a($,null,{default:d(({active:N})=>[a(w,{to:"/patients"},{default:d(()=>[t("button",{class:f([N?"bg-sky-500 text-white":"text-gray-900","group flex w-full items-center px-2 py-2 font-normal"])},[a(y,{class:"w-5 h-5 mr-2"}),p(" View Patients ")],2)]),_:2},1024)]),_:1}),a($,null,{default:d(({active:N})=>[a(w,{to:"/reports/daily/patient-report"},{default:d(()=>[t("button",{class:f([N?"bg-sky-500 text-white":"text-gray-900","group flex w-full items-center px-2 py-2 font-normal"])},[a(H,{class:"w-5 h-5 mr-2"}),p(" Generate Reports ")],2)]),_:2},1024)]),_:1})])]),_:1})]),_:1})]),_:1})]),t("div",De,[t("div",Pe,[Re,((h=i.data)==null?void 0:h.clients)!==null&&((C=i.data)==null?void 0:C.clients)!==void 0?(r(),l("h3",{key:0,onClick:n[0]||(n[0]=N=>o.$router.push("/patients")),class:"text-2xl font-semibold hover:text-sky-500 cursor-pointer hover:underline transition duration-150"},c((S=i.data)==null?void 0:S.clients.toLocaleString()),1)):g("",!0)]),((T=i.data)==null?void 0:T.clients)>0?(r(),l("div",ze,[Ee,t("div",Fe,[t("div",{style:rt({width:s.getPercentage((L=i.data)==null?void 0:L.by_sex.M,(j=i.data)==null?void 0:j.clients)+"%"}),class:"h-4 bg-sky-500 rounded-tl-full rounded-bl-full"},null,4),t("div",{style:rt({width:s.getPercentage((B=i.data)==null?void 0:B.by_sex.F,(D=i.data)==null?void 0:D.clients)+"%"}),class:"h-4 bg-green-500 rounded-br-full rounded-tr-full"},null,4)]),t("div",Ne,[t("div",qe,[Ge,t("p",null,c(s.getPercentage((P=i.data)==null?void 0:P.by_sex.M,(R=i.data)==null?void 0:R.clients))+"% Males ",1)]),t("div",Oe,[Ue,t("p",null,c(s.getPercentage((x=i.data)==null?void 0:x.by_sex.F,(U=i.data)==null?void 0:U.clients))+"% Females ",1)])])])):g("",!0)])])])}const Ke=A(Ae,[["render",Je]]),Qe={components:{EllipsisVerticalIcon:it},data(){return{authStore:Z(),cookie:G("token"),tests:new Array,loading:!1}},created(){this.init()},methods:{async init(){this.loading=!0;const o=this.authStore.user.departments.find(_=>_.name===this.authStore.department),n=o?o.id:null,i=Y(this.authStore.locations,this.authStore.selectedLocation),u={route:`${tt.tests}?minimal=true&page=1&per_page=9&status=&search=&department_id=${n}&lab_location=${i}&start_date=&end_date=`,method:"GET",token:`${this.cookie}`},{data:e,error:s,pending:v}=await et(u);this.loading=v,e.value&&(this.tests=e.value.data,this.loading=!1),s.value&&(console.error("recent-tests: ",s.value),this.loading=!1)},viewTests(){this.$router.push("/tests")},getColor(o){return lt(o)},getDepartment(){const{department:o}=Z();return o=="Lab Reception"?"All":o}},watch:{authStore:{handler(o,n){this.init()},deep:!0}}},We={class:"col-span-1 rounded border relative"},Xe={key:0},Ye={class:"flex items-center justify-between bg-gray-50 border-b px-2 py-2 rounded-t"},ts={class:"text-lg font-semibold"},es={class:"text-base font-medium"},ss={class:"w-full"},os={class:"px-2 py-2 capitalize flex items-center"},ns={class:"px-2 py-2"},as={class:"px-2 py-2 capitalize"},is={key:1},rs=t("div",{class:"w-full flex items-center justify-between rounded-t px-2 py-2"},[t("div",{class:"h-8 w-48 bg-gray-100 animate-pulse rounded"}),t("div",{class:"rounded-full h-7 w-7 bg-gray-100 animate-pulse"})],-1),ls={class:"mt-2 space-y-2 px-2"},cs=t("div",{class:"h-5 w-5 rounded-full bg-gray-100 animate-pulse"},null,-1),ds=t("div",{class:"w-full bg-gray-100 h-8 animate-pulse rounded"},null,-1),us=[cs,ds],_s=t("div",{class:"w-32 bg-gray-100 rounded-t h-8 animate-pulse m-2"},null,-1);function ms(o,n,i,u,e,s){const v=X;return r(),l("div",We,[e.loading?g("",!0):(r(),l("div",Xe,[t("div",Ye,[t("h3",ts,[p(" Recent Tests "),t("span",es,"("+c(s.getDepartment())+")",1)])]),t("div",null,[t("table",ss,[t("tbody",null,[(r(!0),l(M,null,V(e.tests,(_,y)=>(r(),l("tr",{class:f(["border-b border-dotted",y%2!==0?"bg-gray-50":""]),key:y},[t("td",os,[t("div",{class:f([`bg-${s.getColor(_.status)}-500`,"w-3 h-3 rounded-full mr-2"])},null,2),p(" "+c(`${("capitalizeStr"in o?o.capitalizeStr:k(F))(_.client.first_name.toLowerCase())}
                    ${_.client.middle_name!==null?_.client.middle_name:""} ${("capitalizeStr"in o?o.capitalizeStr:k(F))(_.client.last_name.toLowerCase())}`),1)]),t("td",ns,c(_.test_type_name),1),t("td",as,c(_.status.split("-").join(" ")),1)],2))),128))])]),a(v,{click:()=>s.viewTests(),text:"View tests →",color:"primary",class:"m-2 bottom-0"},null,8,["click"])])])),e.loading?(r(),l("div",is,[rs,t("div",ls,[(r(),l(M,null,V(10,_=>t("div",{class:"flex items-center space-x-2",key:_},us)),64))]),_s])):g("",!0)])}const hs=A(Qe,[["render",ms]]),ps={components:{EllipsisVerticalIcon:it,ChartBarIcon:Ie,Menu:st,MenuItem:ot,MenuItems:nt,MenuButton:at,DocumentTextIcon:ct,CalendarDaysIcon:Ve,CalendarIcon:He},data(){return{moment:K,cookie:G("token"),clients:new Array,loading:!0}},created(){this.getClients()},methods:{async getClients(){const o=Z(),n=Y(o.locations,o.selectedLocation),i={route:`${tt.clients}?page=1&per_page=9&status=&search=&start_date=&end_date=&lab_location=${n}&dashboard=true`,method:"GET",token:`${this.cookie}`},{data:u,error:e,pending:s}=await et(i);this.loading=s,u.value&&(this.clients=u.value.clients,this.loading=!1),e.value&&(console.error(e.value),this.loading=!1)},async newOrder(o){this.$router.push(`/tests/new-test?patient_id=${o.client_id}`)}}},vs={class:"col-span-1 rounded border relative"},fs={key:0},gs={class:"flex items-center justify-between bg-gray-50 border-b px-2 py-2 rounded-t"},ys=t("h3",{class:"text-lg font-semibold"},[p("Recent patients "),t("span",{class:"text-base font-medium"},"(All)")],-1),xs={class:"py-1 border-y"},bs={class:""},ws={class:"w-full"},$s={class:"px-2 py-2 capitalize flex items-center"},Cs={class:"px-2 py-2"},ks={class:"px-2 py-2"},Ms={key:1},Vs=t("div",{class:"w-full flex items-center justify-between rounded-t px-2 py-2"},[t("div",{class:"h-8 w-48 bg-gray-100 animate-pulse rounded"}),t("div",{class:"rounded-full h-7 w-7 bg-gray-100 animate-pulse"})],-1),Hs={class:"mt-2 space-y-2 px-2"},Is=t("div",{class:"w-full bg-gray-100 h-8 animate-pulse rounded"},null,-1),Zs=[Is],As=t("div",{class:"w-32 bg-gray-100 rounded-t h-8 animate-pulse m-2"},null,-1);function Ss(o,n,i,u,e,s){const v=m("EllipsisVerticalIcon"),_=m("MenuButton"),y=m("DocumentTextIcon"),w=O,$=m("MenuItem"),H=m("MenuItems"),I=m("Menu"),b=X;return r(),l("div",vs,[e.loading?g("",!0):(r(),l("div",fs,[t("div",gs,[ys,t("div",null,[a(I,{as:"div",class:"relative inline-block text-left justify-center items-center"},{default:d(()=>[a(_,null,{default:d(()=>[a(v,{class:"w-5 h-5"})]),_:1}),a(Q,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:d(()=>[a(H,{class:"absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:d(()=>[t("div",xs,[a($,null,{default:d(({active:h})=>[a(w,{to:"/reports/daily/patient-report"},{default:d(()=>[t("button",{class:f([h?"bg-sky-500 text-white":"text-gray-900","group flex w-full items-center px-2 py-2 font-normal"])},[a(y,{class:"w-5 h-5 mr-2"}),p(" "+c("Generate Reports"))],2)]),_:2},1024)]),_:1})])]),_:1})]),_:1})]),_:1})])]),t("div",bs,[t("table",ws,[t("tbody",null,[(r(!0),l(M,null,V(e.clients,(h,C)=>(r(),l("tr",{class:f(["border-b border-dotted",C%2!==0?"bg-gray-50":""]),key:C},[t("td",$s,c(`${("capitalizeStr"in o?o.capitalizeStr:k(F))(h.first_name.toLowerCase())} ${h.middle_name!==null?("capitalizeStr"in o?o.capitalizeStr:k(F))(h.middle_name.toLowerCase()):""} ${("capitalizeStr"in o?o.capitalizeStr:k(F))(h.last_name.toLowerCase())}`),1),t("td",Cs,c(e.moment(h.created_at).format("dateFormat"in o?o.dateFormat:k(J))),1),t("td",ks,[a(b,{text:"New order →",color:"primary",click:()=>{s.newOrder(h)}},null,8,["click"])])],2))),128))])])])])),e.loading?(r(),l("div",Ms,[Vs,t("div",Hs,[(r(),l(M,null,V(10,h=>t("div",{class:"flex items-center space-x-2",key:h},Zs)),64))]),As])):g("",!0)])}const Ts=A(ps,[["render",Ss]]),Ls="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6%209C6%207.34315%207.34315%206%209%206H39C40.6569%206%2042%207.34315%2042%209V39C42%2040.6569%2040.6569%2042%2039%2042H9C7.34315%2042%206%2040.6569%206%2039V9ZM21.5191%2014.5819H17V33.3986H21.5191V14.5819ZM21.5191%2012.5819H15V35.3986H21.5191V37.2128C21.5191%2037.8953%2022.1878%2038.3773%2022.8353%2038.1614L31.7004%2035.2064C32.1087%2035.0703%2032.3842%2034.6882%2032.3842%2034.2577V13.9691C32.3842%2013.5387%2032.1087%2013.1565%2031.7004%2013.0204L22.8353%2010.0654C22.1878%209.84955%2021.5191%2010.3315%2021.5191%2011.0141V12.5819ZM25.8651%2023.3891C25.8651%2024.1892%2025.5408%2024.8378%2025.1408%2024.8378C24.7407%2024.8378%2024.4164%2024.1892%2024.4164%2023.3891C24.4164%2022.589%2024.7407%2021.9404%2025.1408%2021.9404C25.5408%2021.9404%2025.8651%2022.589%2025.8651%2023.3891Z'%20fill='%23333333'/%3e%3c/svg%3e",js={class:"col-span-1 border rounded"},Bs=t("div",{class:"bg-gray-50 border-b rounded-t px-2 py-2 text-lg font-semibold"},[p(" Test Catalog "),t("span",{class:"text-base font-medium"},"(All)")],-1),Ds={class:"px-2 py-2 grid grid-cols-3 gap-4"},Ps={class:"bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"},Rs=t("img",{src:wt,class:"w-10 h-10 mb-5s",alt:"virus-svg"},null,-1),zs={class:"text-2xl font-semibold mt-2"},Es=t("p",null,"Organisms",-1),Fs={class:"bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"},Ns=t("img",{src:$t,class:"w-10 h-10 mb-5s",alt:"medicines-svg"},null,-1),qs={class:"text-2xl font-semibold mt-2"},Gs=t("p",null,"Drugs",-1),Os={class:"bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"},Us=t("img",{src:Ct,class:"w-10 h-10 mb-5s",alt:"bacteria-svg"},null,-1),Js={class:"text-2xl font-semibold mt-2"},Ks=t("p",null,"Diseases",-1),Qs={class:"bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"},Ws=t("img",{src:kt,class:"w-10 h-10 mb-5s",alt:"virus-svg"},null,-1),Xs={class:"text-2xl font-semibold mt-2"},Ys=t("p",null,"Test Panels",-1),to={class:"bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"},eo=t("img",{src:Mt,class:"w-10 h-10 mb-5s",alt:"cone-test-on-nets-svg"},null,-1),so={class:"text-2xl font-semibold mt-2"},oo=t("p",null,"Test Types",-1),no={class:"bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"},ao=t("img",{src:Vt,class:"w-10 h-10 mb-5s",alt:"blood-drop-svg"},null,-1),io={class:"text-2xl font-semibold mt-2"},ro=t("p",null,"Specimen Types",-1),lo={class:"bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"},co=t("img",{src:Ls,class:"w-10 h-10 mb-5s",alt:"admissions-svg"},null,-1),uo={class:"text-2xl font-semibold mt-2"},_o=t("p",null,"Laboratory Sections",-1),mo=W({__name:"test-catalog",props:{data:{required:!1,type:Object}},setup(o){const n=o;return(i,u)=>{const e=O;return r(),l("div",js,[Bs,t("div",Ds,[a(e,{to:"/test-catalog/organisms"},{default:d(()=>{var s;return[t("div",Ps,[Rs,t("h3",zs,c((s=n.data)==null?void 0:s.organisms),1),Es])]}),_:1}),a(e,{to:"/test-catalog/drugs"},{default:d(()=>{var s;return[t("div",Fs,[Ns,t("h3",qs,c((s=n.data)==null?void 0:s.drugs),1),Gs])]}),_:1}),a(e,{to:"/test-catalog/diseases"},{default:d(()=>{var s;return[t("div",Os,[Us,t("h3",Js,c((s=n.data)==null?void 0:s.diseases),1),Ks])]}),_:1}),a(e,{to:"/test-catalog/test-panels"},{default:d(()=>{var s;return[t("div",Qs,[Ws,t("h3",Xs,c((s=n.data)==null?void 0:s.test_panels),1),Ys])]}),_:1}),a(e,{to:"/test-catalog/test-types"},{default:d(()=>{var s;return[t("div",to,[eo,t("h3",so,c((s=n.data)==null?void 0:s.test_types),1),oo])]}),_:1}),a(e,{to:"/test-catalog/specimen-types"},{default:d(()=>{var s;return[t("div",no,[ao,t("h3",io,c((s=n.data)==null?void 0:s.specimen_types),1),ro])]}),_:1}),a(e,{to:"/test-catalog/lab-sections"},{default:d(()=>{var s;return[t("div",lo,[co,t("h3",uo,c((s=n.data)==null?void 0:s.lab_sections),1),_o])]}),_:1})])])}}}),ho={class:"w-full border rounded"},po=t("div",{class:"bg-gray-50 border-b rounded-t px-2 py-2 text-lg font-semibold"},[p(" Available Printers "),t("span",{class:"text-base font-medium"},"(All)")],-1),vo={class:"px-3 py-3 space-y-2"},fo={class:"p-3 bg-gray-100 rounded border"},go={class:"text-lg font-semibold text-black"},yo={class:"text-base text-gray-500"},xo=W({__name:"available-printers",props:{data:{required:!0,type:Object}},setup(o){return(n,i)=>{var e;const u=X;return r(),l("div",ho,[po,t("div",vo,[(r(!0),l(M,null,V((e=o.data)==null?void 0:e.printers,s=>(r(),l("div",{class:"flex items-center space-x-5 bg-white border-b pb-2 border-dotted",key:s.name},[t("div",fo,[a(k(Ht),{class:"w-7 h-7"})]),t("div",null,[t("h3",go,c(s.name),1),t("p",yo,c(s.description),1)])]))),128)),a(u,{click:()=>n.$router.push("configuration??tab=printers"),text:"Printer Configuration",icon:k(It),color:"primary"},null,8,["click","icon"])])])}}}),bo={setup(){Zt({title:`${At.name.toUpperCase()} - Home`});const o=Z(),n=pt([{name:"superadmin"},{name:"superuser"}]);return{authStore:o,accessRoles:n}},data(){return{loading:!0,data:{}}},created(){this.init()},methods:{async init(){this.loading=!0;const o=G("token"),n=Z(),i=Y(n.locations,n.selectedLocation),u={route:`${tt.analytics}/home?department=${n.department}&lab_location=${i}`,method:"GET",token:`${o.value}`},{data:e,error:s}=await et(u);e.value&&(this.data=e.value.data,this.loading=!1),s.value&&(console.error(s.value),this.loading=!1)},showRoute(o){return this.authStore.user.roles.some(i=>o.some(u=>i.role_name.toLowerCase()===u.name.toLowerCase()))}},watch:{authStore:{handler(o,n){this.init()},deep:!0}}},wo={class:"px-5 py-5"},$o={class:"grid grid-cols-3 gap-4"},Co={class:"w-full grid grid-cols-3 gap-4"},ko=vt('<div class="flex items-center justify-between px-2 py-2"><div class="w-48 bg-gray-100 animate-pulse rounded h-8"></div><div class="rounded-full h-8 w-8 bg-gray-100 animate-pulse"></div></div><div class="flex items-center space-x-3 px-2 pb-4"><div class="h-14 w-14 bg-gray-100 rounded animate-pulse"></div><div class="w-48 bg-gray-100 animate-pulse rounded h-8"></div></div>',2),Mo=t("div",{class:"flex items-center space-x-3 px-2 pb-2"},[t("div",{class:"h-5 w-5 bg-gray-100 rounded-full animate-pulse"}),t("div",{class:"h-8 w-8 bg-gray-100 rounded animate-pulse"}),t("div",{class:"w-48 bg-gray-100 animate-pulse rounded h-8"})],-1),Vo=[Mo],Ho={class:"grid grid-cols-2 gap-4 py-5"},Io={class:"cols-span-1 border rounded"},Zo=t("div",{class:"w-full h-10 bg-gray-100 transition duration-150 animate-pulse"},null,-1),Ao={class:"w-full grid grid-cols-3 gap-5 py-2 px-2"},So={class:"col-span-1 flex flex-col space-y-3"};function To(o,n,i,u,e,s){const v=ce,_=Me,y=Ke,w=hs,$=Ts,H=mo,I=xo;return r(),l("div",wo,[z(t("div",$o,[a(v,{data:e.data},null,8,["data"]),a(_,{data:e.data},null,8,["data"]),a(y,{data:e.data},null,8,["data"])],512),[[E,!e.loading]]),z(t("div",Co,[(r(),l(M,null,V(3,b=>t("div",{class:"col-span-1 border rounded",key:b},[ko,(r(),l(M,null,V(3,h=>t("div",{key:h},Vo)),64))])),64))],512),[[E,e.loading]]),t("div",Ho,[a(w),a($),s.showRoute(u.accessRoles)?z((r(),q(H,{key:0,data:e.data},null,8,["data"])),[[E,!e.loading]]):g("",!0),z(t("div",Io,[Zo,t("div",Ao,[(r(),l(M,null,V(7,b=>t("div",{class:"col-span-1 w-auto h-36 bg-gray-100 transition-all animate-pulse rounded",key:b})),64))])],512),[[E,e.loading]]),t("div",So,[a(I,{data:e.data},null,8,["data"])])])])}const _n=A(bo,[["render",To]]);export{_n as default};