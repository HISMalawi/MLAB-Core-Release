"use strict";(globalThis["webpackChunkIBLISReception"]=globalThis["webpackChunkIBLISReception"]||[]).push([[1337],{1337:(t,e,n)=>{n.r(e),n.d(e,{startTapClick:()=>a});var i=n(2127),o=n(5077),a=function(t){if(void 0!==i.d){var e,n,a,l=10*-v,p=0,h=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),L=new WeakMap,m=function(t){l=(0,o.u)(t),g(t)},w=function(t){l=(0,o.u)(t),k(t)},E=function(t){if(2!==t.button){var e=(0,o.u)(t)-v;l<e&&g(t)}},b=function(t){var e=(0,o.u)(t)-v;l<e&&k(t)},T=function(){a&&clearTimeout(a),a=void 0,e&&(C(!1),e=void 0)},g=function(t){e||R(r(t),t)},k=function(t){R(void 0,t)},R=function(t,n){if(!t||t!==e){a&&clearTimeout(a),a=void 0;var i=(0,o.v)(n),r=i.x,s=i.y;if(e){if(L.has(e))throw new Error("internal error");e.classList.contains(u)||S(e,r,s),C(!0)}if(t){var f=L.get(t);f&&(clearTimeout(f),L.delete(t)),t.classList.remove(u);var v=function(){S(t,r,s),a=void 0};c(t)?v():a=setTimeout(v,d)}e=t}},S=function(t,e,i){if(p=Date.now(),t.classList.add(u),h){var o=s(t);null!==o&&(B(),n=o.addRipple(e,i))}},B=function(){void 0!==n&&(n.then((function(t){return t()})),n=void 0)},C=function(t){B();var n=e;if(n){var i=f-Date.now()+p;if(t&&i>0&&!c(n)){var o=setTimeout((function(){n.classList.remove(u),L.delete(n)}),f);L.set(n,o)}else n.classList.remove(u)}};i.d.addEventListener("ionGestureCaptured",T),i.d.addEventListener("touchstart",m,!0),i.d.addEventListener("touchcancel",w,!0),i.d.addEventListener("touchend",w,!0),i.d.addEventListener("pointercancel",T,!0),i.d.addEventListener("mousedown",E,!0),i.d.addEventListener("mouseup",b,!0)}},r=function(t){if(void 0===t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(!(i instanceof ShadowRoot)&&i.classList.contains("ion-activatable"))return i}},c=function(t){return t.classList.contains("ion-activatable-instant")},s=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},u="ion-activated",d=100,f=150,v=2500}}]);
//# sourceMappingURL=1337.dda821b7.js.map