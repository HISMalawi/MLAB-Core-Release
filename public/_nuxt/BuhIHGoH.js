import{r as o,ac as v}from"./BxD-h1LR.js";function a(t){return[t.screenX,t.screenY]}function m(){let t=o([-1,-1]);return{wasMoved(l){let r=a(l);return t.value[0]===r[0]&&t.value[1]===r[1]?!1:(t.value=r,!0)},update(l){t.value=a(l)}}}function d(t){throw new Error("Unexpected object: "+t)}var g=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(g||{});function h(t,l){let r=l.resolveItems();if(r.length<=0)return null;let u=l.resolveActiveIndex(),n=u??-1;switch(t.focus){case 0:{for(let e=0;e<r.length;++e)if(!l.resolveDisabled(r[e],e,r))return e;return u}case 1:{n===-1&&(n=r.length);for(let e=n-1;e>=0;--e)if(!l.resolveDisabled(r[e],e,r))return e;return u}case 2:{for(let e=n+1;e<r.length;++e)if(!l.resolveDisabled(r[e],e,r))return e;return u}case 3:{for(let e=r.length-1;e>=0;--e)if(!l.resolveDisabled(r[e],e,r))return e;return u}case 4:{for(let e=0;e<r.length;++e)if(l.resolveId(r[e],e,r)===t.id)return e;return u}case 5:return null;default:d(t)}}let f=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function s(t){var l,r;let u=(l=t.innerText)!=null?l:"",n=t.cloneNode(!0);if(!(n instanceof HTMLElement))return u;let e=!1;for(let c of n.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))c.remove(),e=!0;let i=e?(r=n.innerText)!=null?r:"":u;return f.test(i)&&(i=i.replace(f,"")),i}function D(t){let l=t.getAttribute("aria-label");if(typeof l=="string")return l.trim();let r=t.getAttribute("aria-labelledby");if(r){let u=r.split(" ").map(n=>{let e=document.getElementById(n);if(e){let i=e.getAttribute("aria-label");return typeof i=="string"?i.trim():s(e).trim()}return null}).filter(Boolean);if(u.length>0)return u.join(", ")}return s(t).trim()}function b(t){let l=o(""),r=o("");return()=>{let u=v(t);if(!u)return"";let n=u.innerText;if(l.value===n)return r.value;let e=D(u).trim().toLowerCase();return l.value=n,r.value=e,e}}export{g as c,h as f,b as p,m as u};