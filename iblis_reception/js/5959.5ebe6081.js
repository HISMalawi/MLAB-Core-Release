"use strict";(globalThis["webpackChunkIBLISReception"]=globalThis["webpackChunkIBLISReception"]||[]).push([[5959],{8623:(e,t,i)=>{i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>r,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>k,keyboardDidClose:()=>w,keyboardDidOpen:()=>b,keyboardDidResize:()=>l,resetKeyboardAssist:()=>h,setKeyboardClose:()=>g,setKeyboardOpen:()=>p,startKeyboardAssist:()=>f,trackViewportChanges:()=>D});var n=i(2265),o=(i(3678),i(2127),"ionKeyboardDidShow"),r="ionKeyboardDidHide",a=150,s={},d={},u=!1,h=function(){s={},d={},u=!1},f=function(e){var t=n.K.getEngine();if(t)c(e);else{if(!e.visualViewport)return;d=k(e.visualViewport),e.visualViewport.onresize=function(){D(e),b()||l(e)?p(e):w(e)&&g(e)}}},c=function(e){e.addEventListener("keyboardDidShow",(function(t){return p(e,t)})),e.addEventListener("keyboardDidHide",(function(){return g(e)}))},p=function(e,t){v(e,t),u=!0},g=function(e){y(e),u=!1},b=function(){var e=(s.height-d.height)*d.scale;return!u&&s.width===d.width&&e>a},l=function(e){return u&&!w(e)},w=function(e){return u&&d.height===e.innerHeight},v=function(e,t){var i=t?t.keyboardHeight:e.innerHeight-d.height,n=new CustomEvent(o,{detail:{keyboardHeight:i}});e.dispatchEvent(n)},y=function(e){var t=new CustomEvent(r);e.dispatchEvent(t)},D=function(e){s=Object.assign({},d),d=k(e.visualViewport)},k=function(e){return{width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale}}}}]);
//# sourceMappingURL=5959.5ebe6081.js.map