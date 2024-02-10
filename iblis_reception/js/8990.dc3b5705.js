"use strict";(globalThis["webpackChunkIBLISReception"]=globalThis["webpackChunkIBLISReception"]||[]).push([[8990],{8990:(e,t,n)=>{n.r(t),n.d(t,{createSwipeBackGesture:()=>a});var r=n(6587),i=n(545),o=n(1779);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const a=(e,t,n,a,c)=>{const s=e.ownerDocument.defaultView;let l=(0,i.i)(e);const h=e=>{const t=50,{startX:n}=e;return l?n>=s.innerWidth-t:n<=t},u=e=>l?-e.deltaX:e.deltaX,d=e=>l?-e.velocityX:e.velocityX,p=n=>(l=(0,i.i)(e),h(n)&&t()),b=e=>{const t=u(e),n=t/s.innerWidth;a(n)},k=e=>{const t=u(e),n=s.innerWidth,i=t/n,o=d(e),a=n/2,l=o>=0&&(o>.2||t>a),h=l?1-i:i,p=h*n;let b=0;if(p>5){const e=p/Math.abs(o);b=Math.min(e,540)}c(l,i<=0?.01:(0,r.m)(0,i,.9999),b)};return(0,o.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:p,onStart:n,onMove:b,onEnd:k})}}}]);
//# sourceMappingURL=8990.dc3b5705.js.map