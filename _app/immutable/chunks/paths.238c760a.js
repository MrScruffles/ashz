import{n as c,s as h}from"./scheduler.d45cd588.js";const e=[];function d(n,l=c){let i;const o=new Set;function r(t){if(h(n,t)&&(n=t,i)){const b=!e.length;for(const s of o)s[1](),e.push(s,n);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(n))}function _(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(i=l(r,f)||c),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_k9inzw)==null?void 0:u.base)??"";var a;const k=((a=globalThis.__sveltekit_k9inzw)==null?void 0:a.assets)??p;export{k as a,p as b,d as w};
