import{n as c,s as d}from"./scheduler.d45cd588.js";const e=[];function p(n,l=c){let i;const o=new Set;function r(t){if(d(n,t)&&(n=t,i)){const b=!e.length;for(const s of o)s[1](),e.push(s,n);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(n))}function _(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(i=l(r,f)||c),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_1nkdm1k)==null?void 0:u.base)??"";var a;const g=((a=globalThis.__sveltekit_1nkdm1k)==null?void 0:a.assets)??h;export{g as a,h as b,p as w};
