import{C as ut,A as mt,p as pt,a as _t,P as vt}from"./BUQtK0Zb.js";import{b as r,e as d,g as t,x as F,y as p,L as N,R as Q,C as X,T as dt,j as f,t as c,f as i,z as u,U as Y,N as w,K as b,i as P,v as R,d as q,a as G,W as J,X as tt,l as et,m as st,F as V,k as H,h as v,Z as E,_ as nt,O as ft,M as gt,r as W,o as ht,w as yt,$ as xt}from"./CpqwsBCr.js";import{u as z}from"./CBnClnGu.js";import{g as ot,b as at,M as it,S as lt,r as ct}from"./Ba-WVImR.js";import{r as bt}from"./YNqIscHt.js";import{r as wt}from"./BqzVtKbV.js";import{_ as Ct}from"./cien4RO4.js";import{_ as U}from"./C1gcPR4j.js";import{_ as kt}from"./DtWROlmf.js";import{_ as $t}from"./Cl1Pa16j.js";import{_ as Mt}from"./CP3ZdMCl.js";import{_ as Vt}from"./BBIgpWSn.js";import{_ as Ht}from"./BaJf9vfg.js";import{_ as It}from"./Co6rQh9N.js";import{_ as At}from"./BuuMPbGv.js";import{_ as Zt}from"./quWe4lpW.js";import{r as Tt}from"./F2h65iSY.js";import{P as St}from"./CejigzqB.js";import{u as Dt}from"./3Owfe8OW.js";import"./CX_spC93.js";import"./B_QPvgsy.js";import"./C6ZEX6BQ.js";function Lt(a,e){return r(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z","clip-rule":"evenodd"}),t("path",{"fill-rule":"evenodd",d:"M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z","clip-rule":"evenodd"})])}function jt(a,e){return r(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z","clip-rule":"evenodd"})])}ut.register(mt,pt,_t);const Bt={components:{Pie:vt},props:{chartData:{required:!0,type:Object}},data(){return{data:this.chartData,options:{responsive:!0,maintainAspectRatio:!1}}}};function Pt(a,e,l,s,n,o){const g=p("Pie");return r(),N(g,{data:n.data,options:n.options},null,8,["data","options"])}const Rt=F(Bt,[["render",Pt]]),Et={components:{EllipsisVerticalIcon:jt,Menu:ot,MenuItem:at,MenuItems:it,MenuButton:lt,ChartPieIcon:Lt,DocumentTextIcon:bt},props:{data:{required:!0,type:Object}},data(){return{viewChart:!1,applyIcon:wt,from:"",to:""}},created(){this.formatDateRanges()},methods:{getColor(a){return Q(a)},proccessedAnalyticsData(){var a,e,l,s,n,o;return{labels:["Not Received","Pending","Started","Completed","Verified","Rejected"],datasets:[{backgroundColor:["#ec4899","#0ea5e9","#f59e0b","#22c55e","#047857","#dc2626"],data:[(a=this.data)==null?void 0:a.tests_by_status["not-received"],(e=this.data)==null?void 0:e.tests_by_status.pending,(l=this.data)==null?void 0:l.tests_by_status.started,(s=this.data)==null?void 0:s.tests_by_status.completed,(n=this.data)==null?void 0:n.tests_by_status.verified,(o=this.data)==null?void 0:o.tests_by_status.rejected]}]}},formatDateRanges(){var n,o;const e=X().format(dt),s=X().subtract(30,"days").format(dt);this.from=((n=this.data)==null?void 0:n.from)||s,this.to=((o=this.data)==null?void 0:o.to)||e},navigateFilterTests(a,e,l){this.$router.push(`/tests?from=${e}&to=${l}&status=${a}`)},getDepartment(){const{department:a}=z();return a=="Lab Reception"?"All":a}}},zt={key:0,class:"border rounded col-span-1"},Ft={class:"flex rounded-t items-center justify-between bg-gray-50 px-2 py-2 border-b"},Ot={class:"text-xl font-semibold"},Nt={class:"text-base font-medium"},qt={class:"px-1 py-1"},Gt={class:"flex items-center space-x-2 px-5 py-2"},Ut={class:"w-full px-5 py-2 space-y-2"},Kt={class:"flex items-center justify-between"},Wt={class:"flex items-center justify-between"},Xt={class:"flex items-center space-x-2"},Jt={class:"flex items-center justify-between"},Qt={class:"flex items-center space-x-2"},Yt={class:"flex items-center justify-between"},te={class:"flex items-center space-x-2"},ee={class:"flex items-center justify-between"},se={class:"flex items-center space-x-2"},ne={key:0};function oe(a,e,l,s,n,o){var _,k,Z,M,T,S,D,L,j,B;const g=p("EllipsisVerticalIcon"),m=p("MenuButton"),x=p("DocumentTextIcon"),h=p("ChartPieIcon"),y=p("MenuItem"),C=p("MenuItems"),I=p("Menu"),A=Rt;return l.data.tests_by_status?(r(),d("div",zt,[t("div",null,[t("div",Ft,[t("h3",Ot,[e[7]||(e[7]=f(" Tests ")),t("span",Nt,"(Past 30 Days - "+c(o.getDepartment())+")",1)]),i(I,{as:"div",class:"relative inline-block text-left justify-center items-center"},{default:u(()=>[i(m,null,{default:u(()=>[i(g,{class:"w-6 h-6"})]),_:1}),i(Y,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:u(()=>[i(C,{class:"absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:u(()=>[t("div",qt,[i(y,null,{default:u(({active:$})=>[t("button",{onClick:e[0]||(e[0]=K=>n.viewChart=!n.viewChart),class:w([$?"bg-sky-500 text-white":"text-gray-900","group flex w-full items-center rounded px-2 py-2 font-normal"])},[n.viewChart?(r(),N(x,{key:0,class:"w-5 h-5 mr-2"})):b("",!0),n.viewChart?b("",!0):(r(),N(h,{key:1,class:"w-5 h-5 mr-2"})),f(" "+c(n.viewChart?"View summary":"View as Pie Chart"),1)],2)]),_:1})])]),_:1})]),_:1})]),_:1})]),P(t("div",null,[t("div",Gt,[e[8]||(e[8]=t("img",{src:Ct,alt:"clinical-fe-icon"},null,-1)),((_=l.data)==null?void 0:_.tests)!==null&&((k=l.data)==null?void 0:k.tests)!==void 0?(r(),d("h3",{key:0,class:"text-3xl hover:text-sky-500 transition duration-150 font-semibold hover:underline cursor-pointer",onClick:e[1]||(e[1]=$=>o.navigateFilterTests("",n.from,n.to))},c((Z=l.data)==null?void 0:Z.tests.toLocaleString()),1)):b("",!0)]),t("div",Ut,[t("div",Kt,[e[9]||(e[9]=t("div",{class:"flex items-center space-x-2"},[t("div",{class:"w-3 h-3 rounded-full bg-sky-500"}),t("h3",{class:"font-medium"},"Pending")],-1)),t("a",{class:"hover:text-sky-500 transition duration-150 hover:underline cursor-pointer",onClick:e[2]||(e[2]=$=>o.navigateFilterTests("pending",n.from,n.to))},c((M=l.data)!=null&&M.tests_by_status.pending?(T=l.data)==null?void 0:T.tests_by_status.pending:0),1)]),t("div",Wt,[t("div",Xt,[t("div",{class:w(["bg-amber-500","w-3 h-3 rounded-full"])}),e[10]||(e[10]=t("h3",{class:"font-medium"},"Started",-1))]),t("a",{class:"hover:text-sky-500 transition duration-150 hover:underline cursor-pointer",onClick:e[3]||(e[3]=$=>o.navigateFilterTests("started",n.from,n.to))},c((S=l.data)==null?void 0:S.tests_by_status.started),1)]),t("div",Jt,[t("div",Qt,[t("div",{class:w(["bg-green-500","w-3 h-3 rounded-full"])}),e[11]||(e[11]=t("h3",{class:"font-medium"},"Completed",-1))]),t("a",{class:"hover:text-sky-500 transition duration-150 hover:underline cursor-pointer",onClick:e[4]||(e[4]=$=>o.navigateFilterTests("completed",n.from,n.to))},c((D=l.data)==null?void 0:D.tests_by_status.completed),1)]),t("div",Yt,[t("div",te,[t("div",{class:w(["bg-emerald-700","w-3 h-3 rounded-full"])}),e[12]||(e[12]=t("h3",{class:"font-medium"},"Verified",-1))]),t("a",{class:"hover:text-sky-500 transition duration-150 hover:underline cursor-pointer",onClick:e[5]||(e[5]=$=>o.navigateFilterTests("verified",n.from,n.to))},c((L=l.data)==null?void 0:L.tests_by_status.verified),1)]),t("div",ee,[t("div",se,[t("div",{class:w(["bg-red-600","w-3 h-3 rounded-full"])}),e[13]||(e[13]=t("h3",{class:"font-medium"},"Rejected",-1))]),t("a",{class:"hover:text-sky-500 transition duration-150 hover:underline cursor-pointer",onClick:e[6]||(e[6]=$=>o.navigateFilterTests("rejected",n.from,n.to))},c((j=l.data)==null?void 0:j.tests_by_status.rejected),1)])])],512),[[R,!n.viewChart]])]),((B=l.data)==null?void 0:B.tests_by_status.data)!==0&&n.viewChart?(r(),d("div",ne,[i(A,{chartData:o.proccessedAnalyticsData()},null,8,["chartData"])])):b("",!0)])):b("",!0)}const ae=F(Et,[["render",oe]]),ie="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0193%2011.9846C13.0768%2011.2752%2013.2616%2010.6012%2013.5512%209.98462H6V12.4662L10%2015.4969V42.0154H38V15.5321L42.5%2012.5014V9.98462H24.4488C24.7384%2010.6012%2024.9232%2011.2752%2024.9807%2011.9846H39.687L36%2014.4678V40.0154H12V14.5031L8.67616%2011.9846H13.0193Z'%20fill='%23333333'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%2013.75L7.5%2010.5H13.25L16.5%2017H21L24.5%2010.5H41L38%2014.5V41H34V24H26V41H10V13.75ZM14%2024H21V31H14V24Z'%20fill='%23333333'/%3e%3cpath%20d='M6%2041C6%2041.5523%206.44772%2042%207%2042H41C41.5523%2042%2042%2041.5523%2042%2041C42%2040.4477%2041.5523%2040%2041%2040H7C6.44772%2040%206%2040.4477%206%2041Z'%20fill='%23333333'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25%2012C25%2015.3137%2022.3137%2018%2019%2018C15.6863%2018%2013%2015.3137%2013%2012C13%208.68629%2015.6863%206%2019%206C22.3137%206%2025%208.68629%2025%2012ZM20%209V11H22V13H20V15H18V13H16V11H18V9H20Z'%20fill='%23333333'/%3e%3c/svg%3e",le={class:"border rounded"},re={class:"px-3 py-3 space-y-4"},de={class:"flex items-center space-x-5"},ce={class:"text-3xl font-bold"},ue={class:"text-sm font-medium hover:text-sky-500 hover:underline ml-2"},me={class:"flex items-center space-x-5"},pe={class:"text-3xl font-bold"},_e={class:"text-sm font-medium hover:text-sky-500 hover:underline ml-2"},ve={class:"flex items-center space-x-5"},fe={class:"text-3xl font-bold"},ge={class:"text-sm font-medium hover:text-sky-500 hover:underline ml-2"},he=q({__name:"lab-configuration",props:{data:{required:!0,type:Object}},setup(a){const e=a;return(l,s)=>{var o,g,m;const n=U;return r(),d("div",le,[t("div",null,[s[6]||(s[6]=t("div",{class:"flex items-center justify-between rounded-t bg-gray-50 px-2 py-2 border-b text-xl font-semibold"},[t("h3",null,[f("Lab Configuration "),t("span",{class:"text-base font-medium"},"(All)")])],-1)),t("div",re,[t("div",de,[s[1]||(s[1]=t("div",{class:"px-2 py-2 bg-gray-100 rounded"},[t("img",{src:kt,class:"w-8 h-8"})],-1)),t("p",ce,[f(c((o=e.data)==null?void 0:o.instruments),1),t("span",ue,[i(n,{to:"/lab-configuration/instruments"},{default:u(()=>s[0]||(s[0]=[f("instruments")])),_:1})])])]),t("div",me,[s[3]||(s[3]=t("div",{class:"px-2 py-2 bg-gray-100 rounded"},[t("img",{src:$t,class:"w-8 h-8"})],-1)),t("p",pe,[f(c((g=e.data)==null?void 0:g.facilities),1),t("span",_e,[i(n,{to:"/lab-configuration/facilities"},{default:u(()=>s[2]||(s[2]=[f("facilities")])),_:1})])])]),t("div",ve,[s[5]||(s[5]=t("div",{class:"px-2 py-2 bg-gray-100 rounded"},[t("img",{src:ie,class:"w-8 h-8"})],-1)),t("p",fe,[f(c((m=e.data)==null?void 0:m.wards),1),t("span",ge,[i(n,{to:"/lab-configuration/facility-wards"},{default:u(()=>s[4]||(s[4]=[f("wards")])),_:1})])])])])])])}}});function ye(a,e){return r(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{d:"M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10ZM10 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12ZM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10ZM14 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14Z"}),t("path",{"fill-rule":"evenodd",d:"M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z","clip-rule":"evenodd"})])}function xe(a,e){return r(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z","clip-rule":"evenodd"})])}function be(a,e){return r(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{d:"M15.5 2A1.5 1.5 0 0 0 14 3.5v13a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 16.5 2h-1ZM9.5 6A1.5 1.5 0 0 0 8 7.5v9A1.5 1.5 0 0 0 9.5 18h1a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 10.5 6h-1ZM3.5 10A1.5 1.5 0 0 0 2 11.5v5A1.5 1.5 0 0 0 3.5 18h1A1.5 1.5 0 0 0 6 16.5v-5A1.5 1.5 0 0 0 4.5 10h-1Z"})])}function rt(a,e){return r(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{d:"M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"})])}function we(a,e){return r(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{d:"M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z"})])}const Ce={components:{EllipsisVerticalIcon:rt,Menu:ot,MenuItem:at,MenuItems:it,MenuButton:lt,UserGroupIcon:we,DocumentTextIcon:ct},props:{data:{required:!0,type:Object}},data(){return{cookie:G("token")}},methods:{getPercentage(a,e){return e==0?0:Math.round(a/e*100)}}},ke="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%2016.5C18%2018.9862%2015.9862%2021%2013.5%2021C11.0138%2021%209%2018.9862%209%2016.5C9%2014.0138%2011.0138%2012%2013.5%2012C15.9862%2012%2018%2014.0138%2018%2016.5Z'%20fill='%23333333'/%3e%3cpath%20d='M4%2028.3333C4%2024.7867%2010.3294%2023%2013.5%2023C16.6706%2023%2023%2024.7867%2023%2028.3333V36H4V28.3333Z'%20fill='%23333333'/%3e%3cpath%20d='M39%2016.5C39%2018.9862%2036.9863%2021%2034.5%2021C32.0138%2021%2030%2018.9862%2030%2016.5C30%2014.0138%2032.0138%2012%2034.5%2012C36.9863%2012%2039%2014.0138%2039%2016.5Z'%20fill='%23333333'/%3e%3cpath%20d='M27%2015C27%2016.6575%2025.6575%2018%2024%2018C22.3425%2018%2021%2016.6575%2021%2015C21%2013.3425%2022.3425%2012%2024%2012C25.6575%2012%2027%2013.3425%2027%2015Z'%20fill='%23333333'/%3e%3cpath%20d='M25%2028.3333C25%2024.7867%2031.3294%2023%2034.5%2023C37.6706%2023%2044%2024.7867%2044%2028.3333V36H25V28.3333Z'%20fill='%23333333'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.7508%2022.185C28.4839%2022.2831%2028.2206%2022.3873%2027.9625%2022.4975C26.7914%2022.998%2025.6088%2023.6741%2024.69%2024.5785C24.444%2024.8208%2024.2105%2025.0864%2024%2025.375C23.7895%2025.0864%2023.556%2024.8208%2023.3099%2024.5785C22.3912%2023.6741%2021.2085%2022.998%2020.0374%2022.4975C19.7794%2022.3873%2019.5161%2022.2831%2019.2491%2022.185C20.7717%2021.3961%2022.7298%2021%2024%2021C25.2701%2021%2027.2282%2021.3961%2028.7508%2022.185Z'%20fill='%23333333'/%3e%3c/svg%3e",$e={class:"border rounded"},Me={class:"flex items-center justify-between rounded-t bg-gray-50 px-2 py-2 border-b text-xl font-semibold"},Ve={class:"py-1 border-y"},He={class:""},Ie={class:"flex items-center space-x-2 px-2 py-2"},Ae={key:0,class:"px-5"},Ze={class:"w-full flex items-center"},Te={class:"mt-2"},Se={class:"flex items-center space-x-2"},De={class:"flex items-center space-x-2"};function Le(a,e,l,s,n,o){var _,k,Z,M,T,S,D,L,j,B,$,K;const g=p("EllipsisVerticalIcon"),m=p("MenuButton"),x=p("UserGroupIcon"),h=U,y=p("MenuItem"),C=p("DocumentTextIcon"),I=p("MenuItems"),A=p("Menu");return r(),d("div",$e,[t("div",null,[t("div",Me,[e[3]||(e[3]=t("h3",null,[f("Patients "),t("span",{class:"text-base font-medium"},"(All)")],-1)),i(A,{as:"div",class:"relative inline-block text-left justify-center items-center"},{default:u(()=>[i(m,null,{default:u(()=>[i(g,{class:"w-5 h-5"})]),_:1}),i(Y,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:u(()=>[i(I,{class:"absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:u(()=>[t("div",Ve,[i(y,null,{default:u(({active:O})=>[i(h,{to:"/patients"},{default:u(()=>[t("button",{class:w([O?"bg-sky-500 text-white":"text-gray-900","group flex w-full items-center px-2 py-2 font-normal"])},[i(x,{class:"w-5 h-5 mr-2"}),e[1]||(e[1]=f(" View Patients "))],2)]),_:2},1024)]),_:1}),i(y,null,{default:u(({active:O})=>[i(h,{to:"/reports/daily/patient-report"},{default:u(()=>[t("button",{class:w([O?"bg-sky-500 text-white":"text-gray-900","group flex w-full items-center px-2 py-2 font-normal"])},[i(C,{class:"w-5 h-5 mr-2"}),e[2]||(e[2]=f(" Generate Reports "))],2)]),_:2},1024)]),_:1})])]),_:1})]),_:1})]),_:1})]),t("div",He,[t("div",Ie,[e[4]||(e[4]=t("img",{src:ke},null,-1)),((_=l.data)==null?void 0:_.clients)!==null&&((k=l.data)==null?void 0:k.clients)!==void 0?(r(),d("h3",{key:0,onClick:e[0]||(e[0]=O=>a.$router.push("/patients")),class:"text-2xl font-semibold hover:text-sky-500 cursor-pointer hover:underline transition duration-150"},c((Z=l.data)==null?void 0:Z.clients.toLocaleString()),1)):b("",!0)]),((M=l.data)==null?void 0:M.clients)>0?(r(),d("div",Ae,[e[7]||(e[7]=t("h3",{class:"mb-2 font-medium"},"By Gender",-1)),t("div",Ze,[t("div",{style:J({width:o.getPercentage((T=l.data)==null?void 0:T.by_sex.M,(S=l.data)==null?void 0:S.clients)+"%"}),class:"h-4 bg-sky-500 rounded-tl-full rounded-bl-full"},null,4),t("div",{style:J({width:o.getPercentage((D=l.data)==null?void 0:D.by_sex.F,(L=l.data)==null?void 0:L.clients)+"%"}),class:"h-4 bg-green-500 rounded-br-full rounded-tr-full"},null,4)]),t("div",Te,[t("div",Se,[e[5]||(e[5]=t("div",{class:"w-3 h-3 bg-sky-500 rounded-full"},null,-1)),t("p",null,c(o.getPercentage((j=l.data)==null?void 0:j.by_sex.M,(B=l.data)==null?void 0:B.clients))+"% Males ",1)]),t("div",De,[e[6]||(e[6]=t("div",{class:"w-3 h-3 bg-green-500 rounded-full"},null,-1)),t("p",null,c(o.getPercentage(($=l.data)==null?void 0:$.by_sex.F,(K=l.data)==null?void 0:K.clients))+"% Females ",1)])])])):b("",!0)])])])}const je=F(Ce,[["render",Le]]),Be={components:{EllipsisVerticalIcon:rt},data(){return{authStore:z(),cookie:G("token"),tests:new Array,loading:!1}},created(){this.init()},methods:{async init(){this.loading=!0;const a=this.authStore.user.departments.find(m=>m.name===this.authStore.department),e=a?a.id:null,l=tt(this.authStore.locations,this.authStore.selectedLocation),s={route:`${et.tests}?minimal=true&page=1&per_page=9&status=&search=&department_id=${e}&lab_location=${l}&start_date=&end_date=`,method:"GET",token:`${this.cookie}`},{data:n,error:o,pending:g}=await st(s);this.loading=g,n.value&&(this.tests=n.value.data,this.loading=!1),o.value&&(console.error("recent-tests: ",o.value),this.loading=!1)},viewTests(){this.$router.push("/tests")},getColor(a){return Q(a)},getDepartment(){const{department:a}=z();return a=="Lab Reception"?"All":a}},watch:{authStore:{handler(a,e){this.init()},deep:!0}}},Pe={class:"col-span-1 rounded border relative"},Re={key:0},Ee={class:"flex items-center justify-between bg-gray-50 border-b px-2 py-2 rounded-t"},ze={class:"text-lg font-semibold"},Fe={class:"text-base font-medium"},Oe={class:"w-full"},Ne={class:"px-2 py-2 capitalize flex items-center"},qe={class:"px-2 py-2"},Ge={class:"px-2 py-2 capitalize"},Ue={key:1},Ke={class:"mt-2 space-y-2 px-2"};function We(a,e,l,s,n,o){const g=nt;return r(),d("div",Pe,[n.loading?b("",!0):(r(),d("div",Re,[t("div",Ee,[t("h3",ze,[e[0]||(e[0]=f(" Recent Tests ")),t("span",Fe,"("+c(o.getDepartment())+")",1)])]),t("div",null,[t("table",Oe,[t("tbody",null,[(r(!0),d(V,null,H(n.tests,(m,x)=>(r(),d("tr",{class:w(["border-b border-dotted",x%2!==0?"bg-gray-50":""]),key:x},[t("td",Ne,[t("div",{class:w([`bg-[${("getStatusColor"in a?a.getStatusColor:v(Q))(m.status)}]`,"w-3 h-3 rounded-full mr-2"]),style:J({backgroundColor:o.getColor(m.status)})},null,6),f(" "+c(`${("capitalizeStr"in a?a.capitalizeStr:v(E))(m.client.first_name.toLowerCase())}
                    ${m.client.middle_name!==null?m.client.middle_name:""} ${("capitalizeStr"in a?a.capitalizeStr:v(E))(m.client.last_name.toLowerCase())}`),1)]),t("td",qe,c(m.test_type_name),1),t("td",Ge,c(m.status.split("-").join(" ")),1)],2))),128))])]),i(g,{click:()=>o.viewTests(),text:"View tests →",color:"primary",class:"m-2 bottom-0"},null,8,["click"])])])),n.loading?(r(),d("div",Ue,[e[2]||(e[2]=t("div",{class:"w-full flex items-center justify-between rounded-t px-2 py-2"},[t("div",{class:"h-8 w-48 bg-gray-100 animate-pulse rounded"}),t("div",{class:"rounded-full h-7 w-7 bg-gray-100 animate-pulse"})],-1)),t("div",Ke,[(r(),d(V,null,H(10,m=>t("div",{class:"flex items-center space-x-2",key:m},e[1]||(e[1]=[t("div",{class:"h-5 w-5 rounded-full bg-gray-100 animate-pulse"},null,-1),t("div",{class:"w-full bg-gray-100 h-8 animate-pulse rounded"},null,-1)]))),64))]),e[3]||(e[3]=t("div",{class:"w-32 bg-gray-100 rounded-t h-8 animate-pulse m-2"},null,-1))])):b("",!0)])}const Xe=F(Be,[["render",We]]),Je={components:{EllipsisVerticalIcon:rt,ChartBarIcon:be,Menu:ot,MenuItem:at,MenuItems:it,MenuButton:lt,DocumentTextIcon:ct,CalendarDaysIcon:ye,CalendarIcon:xe},data(){return{moment:X,cookie:G("token"),clients:new Array,loading:!0}},created(){this.getClients()},methods:{async getClients(){const a=z(),e=tt(a.locations,a.selectedLocation),l={route:`${et.clients}?page=1&per_page=9&status=&search=&start_date=&end_date=&lab_location=${e}&dashboard=true`,method:"GET",token:`${this.cookie}`},{data:s,error:n,pending:o}=await st(l);this.loading=o,s.value&&(this.clients=s.value.clients,this.loading=!1),n.value&&(console.error(n.value),this.loading=!1)},async newOrder(a){this.$router.push(`/tests/new-test?patient_id=${a.client_id}`)}}},Qe={class:"col-span-1 rounded border relative"},Ye={key:0},ts={class:"flex items-center justify-between bg-gray-50 border-b px-2 py-2 rounded-t"},es={class:"py-1 border-y"},ss={class:""},ns={class:"w-full"},os={class:"px-2 py-2 capitalize flex items-center"},as={class:"px-2 py-2"},is={class:"px-2 py-2"},ls={key:1},rs={class:"mt-2 space-y-2 px-2"};function ds(a,e,l,s,n,o){const g=p("EllipsisVerticalIcon"),m=p("MenuButton"),x=p("DocumentTextIcon"),h=U,y=p("MenuItem"),C=p("MenuItems"),I=p("Menu"),A=nt;return r(),d("div",Qe,[n.loading?b("",!0):(r(),d("div",Ye,[t("div",ts,[e[1]||(e[1]=t("h3",{class:"text-lg font-semibold"},[f("Recent patients "),t("span",{class:"text-base font-medium"},"(All)")],-1)),t("div",null,[i(I,{as:"div",class:"relative inline-block text-left justify-center items-center"},{default:u(()=>[i(m,null,{default:u(()=>[i(g,{class:"w-5 h-5"})]),_:1}),i(Y,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:u(()=>[i(C,{class:"absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:u(()=>[t("div",es,[i(y,null,{default:u(({active:_})=>[i(h,{to:"/reports/daily/patient-report"},{default:u(()=>[t("button",{class:w([_?"bg-sky-500 text-white":"text-gray-900","group flex w-full items-center px-2 py-2 font-normal"])},[i(x,{class:"w-5 h-5 mr-2"}),e[0]||(e[0]=f(" "+c("Generate Reports")))],2)]),_:2},1024)]),_:1})])]),_:1})]),_:1})]),_:1})])]),t("div",ss,[t("table",ns,[t("tbody",null,[(r(!0),d(V,null,H(n.clients,(_,k)=>(r(),d("tr",{class:w(["border-b border-dotted",k%2!==0?"bg-gray-50":""]),key:k},[t("td",os,c(`${("capitalizeStr"in a?a.capitalizeStr:v(E))(_.first_name.toLowerCase())} ${_.middle_name!==null?("capitalizeStr"in a?a.capitalizeStr:v(E))(_.middle_name.toLowerCase()):""} ${("capitalizeStr"in a?a.capitalizeStr:v(E))(_.last_name.toLowerCase())}`),1),t("td",as,c(n.moment(_.created_at).format("DATE_FORMAT"in a?a.DATE_FORMAT:v(ft))),1),t("td",is,[i(A,{text:"New order →",color:"primary",click:()=>{o.newOrder(_)}},null,8,["click"])])],2))),128))])])])])),n.loading?(r(),d("div",ls,[e[3]||(e[3]=t("div",{class:"w-full flex items-center justify-between rounded-t px-2 py-2"},[t("div",{class:"h-8 w-48 bg-gray-100 animate-pulse rounded"}),t("div",{class:"rounded-full h-7 w-7 bg-gray-100 animate-pulse"})],-1)),t("div",rs,[(r(),d(V,null,H(10,_=>t("div",{class:"flex items-center space-x-2",key:_},e[2]||(e[2]=[t("div",{class:"w-full bg-gray-100 h-8 animate-pulse rounded"},null,-1)]))),64))]),e[4]||(e[4]=t("div",{class:"w-32 bg-gray-100 rounded-t h-8 animate-pulse m-2"},null,-1))])):b("",!0)])}const cs=F(Je,[["render",ds]]),us="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6%209C6%207.34315%207.34315%206%209%206H39C40.6569%206%2042%207.34315%2042%209V39C42%2040.6569%2040.6569%2042%2039%2042H9C7.34315%2042%206%2040.6569%206%2039V9ZM21.5191%2014.5819H17V33.3986H21.5191V14.5819ZM21.5191%2012.5819H15V35.3986H21.5191V37.2128C21.5191%2037.8953%2022.1878%2038.3773%2022.8353%2038.1614L31.7004%2035.2064C32.1087%2035.0703%2032.3842%2034.6882%2032.3842%2034.2577V13.9691C32.3842%2013.5387%2032.1087%2013.1565%2031.7004%2013.0204L22.8353%2010.0654C22.1878%209.84955%2021.5191%2010.3315%2021.5191%2011.0141V12.5819ZM25.8651%2023.3891C25.8651%2024.1892%2025.5408%2024.8378%2025.1408%2024.8378C24.7407%2024.8378%2024.4164%2024.1892%2024.4164%2023.3891C24.4164%2022.589%2024.7407%2021.9404%2025.1408%2021.9404C25.5408%2021.9404%2025.8651%2022.589%2025.8651%2023.3891Z'%20fill='%23333333'/%3e%3c/svg%3e",ms={class:"col-span-1 border rounded"},ps={class:"px-2 py-2 grid grid-cols-3 gap-4"},_s={class:"bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"},vs={class:"text-2xl font-semibold mt-2"},fs={class:"bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"},gs={class:"text-2xl font-semibold mt-2"},hs={class:"bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"},ys={class:"text-2xl font-semibold mt-2"},xs={class:"bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"},bs={class:"text-2xl font-semibold mt-2"},ws={class:"bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"},Cs={class:"text-2xl font-semibold mt-2"},ks={class:"bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"},$s={class:"text-2xl font-semibold mt-2"},Ms={class:"bg-gray-50 rounded px-5 py-5 hover:bg-sky-500 transition duration-150 hover:text-white text-black"},Vs={class:"text-2xl font-semibold mt-2"},Hs=q({__name:"test-catalog",props:{data:{required:!1,type:Object}},setup(a){const e=a;return(l,s)=>{const n=U;return r(),d("div",ms,[s[14]||(s[14]=t("div",{class:"bg-gray-50 border-b rounded-t px-2 py-2 text-lg font-semibold"},[f(" Test Catalog "),t("span",{class:"text-base font-medium"},"(All)")],-1)),t("div",ps,[i(n,{to:"/test-catalog/organisms"},{default:u(()=>{var o;return[t("div",_s,[s[0]||(s[0]=t("img",{src:Mt,class:"w-10 h-10 mb-5s",alt:"virus-svg"},null,-1)),t("h3",vs,c((o=e.data)==null?void 0:o.organisms),1),s[1]||(s[1]=t("p",null,"Organisms",-1))])]}),_:1}),i(n,{to:"/test-catalog/drugs"},{default:u(()=>{var o;return[t("div",fs,[s[2]||(s[2]=t("img",{src:Vt,class:"w-10 h-10 mb-5s",alt:"medicines-svg"},null,-1)),t("h3",gs,c((o=e.data)==null?void 0:o.drugs),1),s[3]||(s[3]=t("p",null,"Drugs",-1))])]}),_:1}),i(n,{to:"/test-catalog/diseases"},{default:u(()=>{var o;return[t("div",hs,[s[4]||(s[4]=t("img",{src:Ht,class:"w-10 h-10 mb-5s",alt:"bacteria-svg"},null,-1)),t("h3",ys,c((o=e.data)==null?void 0:o.diseases),1),s[5]||(s[5]=t("p",null,"Diseases",-1))])]}),_:1}),i(n,{to:"/test-catalog/test-panels"},{default:u(()=>{var o;return[t("div",xs,[s[6]||(s[6]=t("img",{src:It,class:"w-10 h-10 mb-5s",alt:"virus-svg"},null,-1)),t("h3",bs,c((o=e.data)==null?void 0:o.test_panels),1),s[7]||(s[7]=t("p",null,"Test Panels",-1))])]}),_:1}),i(n,{to:"/test-catalog/test-types"},{default:u(()=>{var o;return[t("div",ws,[s[8]||(s[8]=t("img",{src:At,class:"w-10 h-10 mb-5s",alt:"cone-test-on-nets-svg"},null,-1)),t("h3",Cs,c((o=e.data)==null?void 0:o.test_types),1),s[9]||(s[9]=t("p",null,"Test Types",-1))])]}),_:1}),i(n,{to:"/test-catalog/specimen-types"},{default:u(()=>{var o;return[t("div",ks,[s[10]||(s[10]=t("img",{src:Zt,class:"w-10 h-10 mb-5s",alt:"blood-drop-svg"},null,-1)),t("h3",$s,c((o=e.data)==null?void 0:o.specimen_types),1),s[11]||(s[11]=t("p",null,"Specimen Types",-1))])]}),_:1}),i(n,{to:"/test-catalog/lab-sections"},{default:u(()=>{var o;return[t("div",Ms,[s[12]||(s[12]=t("img",{src:us,class:"w-10 h-10 mb-5s",alt:"admissions-svg"},null,-1)),t("h3",Vs,c((o=e.data)==null?void 0:o.lab_sections),1),s[13]||(s[13]=t("p",null,"Laboratory Sections",-1))])]}),_:1})])])}}}),Is={class:"w-full border rounded"},As={class:"px-3 py-3 space-y-2"},Zs={class:"p-3 bg-gray-100 rounded border"},Ts={class:"text-lg font-semibold text-black"},Ss={class:"text-base text-gray-500"},Ds=q({__name:"available-printers",props:{data:{required:!0,type:Object}},setup(a){return(e,l)=>{var n;const s=nt;return r(),d("div",Is,[l[0]||(l[0]=t("div",{class:"bg-gray-50 border-b rounded-t px-2 py-2 text-lg font-semibold"},[f(" Available Printers "),t("span",{class:"text-base font-medium"},"(All)")],-1)),t("div",As,[(r(!0),d(V,null,H((n=a.data)==null?void 0:n.printers,o=>(r(),d("div",{class:"flex items-center space-x-5 bg-white border-b pb-2 border-dotted",key:o.name},[t("div",Zs,[i(v(gt),{class:"w-7 h-7"})]),t("div",null,[t("h3",Ts,c(o.name),1),t("p",Ss,c(o.description),1)])]))),128)),i(s,{click:()=>e.$router.push("configuration??tab=printers"),text:"Printer Configuration",icon:v(Tt),color:"primary"},null,8,["click","icon"])])])}}}),Ls={class:"px-5 py-5"},js={class:"grid grid-cols-3 gap-4"},Bs={class:"w-full grid grid-cols-3 gap-4"},Ps={class:"grid grid-cols-2 gap-4 py-5"},Rs={class:"cols-span-1 border rounded"},Es={class:"w-full grid grid-cols-3 gap-5 py-2 px-2"},zs={class:"col-span-1 flex flex-col space-y-3"},un=q({__name:"home",setup(a){Dt({title:`${St.name.toUpperCase()} - Home`});const e=z(),l=G("token"),s=W(!0),n=W({}),o=W([{name:"superadmin"},{name:"superuser"}]);async function g(){s.value=!0;const x=tt(e.locations,e.selectedLocation),h={route:`${et.analytics}/home?department=${e.department}&lab_location=${x}`,method:"GET",token:`${l.value}`},{data:y,error:C}=await st(h);y.value&&(n.value=y.value.data,s.value=!1),C.value&&(console.error(C.value),s.value=!1)}const m=x=>{const h=new Set(e.user.roles.map(y=>y.role_name.toLowerCase()));return x.some(y=>h.has(y.name.toLowerCase()))};return ht(()=>{g()}),yt(()=>e,()=>{g()},{deep:!0}),(x,h)=>{const y=ae,C=he,I=je,A=Xe,_=cs,k=Hs,Z=Ds;return r(),d("div",Ls,[P(t("div",js,[i(y,{data:v(n)},null,8,["data"]),i(C,{data:v(n)},null,8,["data"]),i(I,{data:v(n)},null,8,["data"])],512),[[R,!v(s)]]),P(t("div",Bs,[(r(),d(V,null,H(3,M=>t("div",{class:"col-span-1 border rounded",key:M},[h[1]||(h[1]=xt('<div class="flex items-center justify-between px-2 py-2"><div class="w-48 bg-gray-100 animate-pulse rounded h-8"></div><div class="rounded-full h-8 w-8 bg-gray-100 animate-pulse"></div></div><div class="flex items-center space-x-3 px-2 pb-4"><div class="h-14 w-14 bg-gray-100 rounded animate-pulse"></div><div class="w-48 bg-gray-100 animate-pulse rounded h-8"></div></div>',2)),(r(),d(V,null,H(3,T=>t("div",{key:T},h[0]||(h[0]=[t("div",{class:"flex items-center space-x-3 px-2 pb-2"},[t("div",{class:"h-5 w-5 bg-gray-100 rounded-full animate-pulse"}),t("div",{class:"h-8 w-8 bg-gray-100 rounded animate-pulse"}),t("div",{class:"w-48 bg-gray-100 animate-pulse rounded h-8"})],-1)]))),64))])),64))],512),[[R,v(s)]]),t("div",Ps,[i(A),i(_),m(v(o))?P((r(),N(k,{key:0},null,512)),[[R,!v(s)]]):b("",!0),P(t("div",Rs,[h[2]||(h[2]=t("div",{class:"w-full h-10 bg-gray-100 transition duration-150 animate-pulse"},null,-1)),t("div",Es,[(r(),d(V,null,H(7,M=>t("div",{class:"col-span-1 w-auto h-36 bg-gray-100 transition-all animate-pulse rounded",key:M})),64))])],512),[[R,v(s)]]),t("div",zs,[i(Z,{data:v(n)},null,8,["data"])])])])}}});export{un as default};