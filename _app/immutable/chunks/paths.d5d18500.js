import{n as c,s as g}from"./scheduler.d45cd588.js";const e=[];function p(n,l=c){let i;const o=new Set;function r(t){if(g(n,t)&&(n=t,i)){const b=!e.length;for(const s of o)s[1](),e.push(s,n);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(n))}function _(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(i=l(r,f)||c),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var u;const d=((u=globalThis.__sveltekit_1gv9dyy)==null?void 0:u.base)??"";var a;const y=((a=globalThis.__sveltekit_1gv9dyy)==null?void 0:a.assets)??d;export{y as a,d as b,p as w};
