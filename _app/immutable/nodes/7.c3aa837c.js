import{i as be,t as se}from"../chunks/portfolio.741a29f7.js";import{s as he,e as G,i as S,d as _,f as k,a as P,l as R,g as y,h as w,c as T,m as W,j as $,K as m,L as O,x as oe,p as X,u as ke,O as L,I as re,n as H,M as te,T as ye}from"../chunks/scheduler.7a274a43.js";import{S as me,i as ve,a as I,g as J,t as V,c as Q,b as z,d as B,m as U,e as q}from"../chunks/index.28409b7f.js";import{U as Z,g as ee,e as F}from"../chunks/UIcon.637d92ee.js";import{b as ae}from"../chunks/paths.db85e600.js";import{C as we}from"../chunks/CardLogo.ffd18bf4.js";import{M as Ee}from"../chunks/app.eac6d877.js";import{B as Ie,M as De}from"../chunks/Banner.c73e0a69.js";import{T as Ve}from"../chunks/TabTitle.4cedb5a3.js";import{C as ge}from"../chunks/Chip.f076e9d3.js";import{C as $e}from"../chunks/CardDivider.09b854d8.js";function je({params:s}){if(s.slug)return{project:be.find(l=>l.slug===s.slug)}}const at=Object.freeze(Object.defineProperty({__proto__:null,load:je},Symbol.toStringTag,{value:"Module"}));function ce(s){var j;let e,l,t,r,n,o,a,c,d,p,g=((j=s[0])==null?void 0:j.label)+"",i,h,C,M;return n=new Z({props:{icon:"i-carbon-close"}}),{c(){e=k("div"),l=k("div"),t=k("div"),r=k("button"),z(n.$$.fragment),o=P(),a=k("div"),d=P(),p=k("p"),i=R(g),this.h()},l(f){e=y(f,"DIV",{class:!0});var A=w(e);l=y(A,"DIV",{class:!0});var N=w(l);t=y(N,"DIV",{class:!0});var E=w(t);r=y(E,"BUTTON",{class:!0});var D=w(r);B(n.$$.fragment,D),D.forEach(_),E.forEach(_),o=T(N),a=y(N,"DIV",{class:!0,style:!0}),w(a).forEach(_),d=T(N),p=y(N,"P",{class:!0});var u=w(p);i=W(u,g),u.forEach(_),N.forEach(_),A.forEach(_),this.h()},h(){var f;$(r,"class","cursor-pointer aspect-square rounded-full border-[var(--border)] border-1px bg-[transparent] border-solid hover:border-[var(--border-hover)]"),$(t,"class","self-end"),$(a,"class","aspect-video col bg-contain w-100% rounded-xl bg-no-repeat bg-contains bg-center"),$(a,"style",c=`background-image: url(${(f=s[0])==null?void 0:f.src});`),$(p,"class","font-italic m-t-auto m-x-auto bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl"),$(l,"class","w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl"),$(e,"class","fixed inset-0px top-51px bg-[#000000dd] col-center p-50px")},m(f,A){S(f,e,A),m(e,l),m(l,t),m(t,r),U(n,r,null),m(l,o),m(l,a),m(l,d),m(l,p),m(p,i),h=!0,C||(M=[O(r,"click",function(){oe(s[1])&&s[1].apply(this,arguments)}),O(r,"keydown",s[11]),O(r,"keypress",s[12]),O(r,"keyup",s[13]),O(l,"click",Pe),O(l,"keydown",s[7]),O(l,"keypress",s[8]),O(l,"keyup",s[9]),O(l,"keyup",s[10]),O(e,"click",function(){oe(s[1])&&s[1].apply(this,arguments)}),O(e,"click",Te),O(e,"keydown",s[3]),O(e,"keypress",s[4]),O(e,"keyup",s[5]),O(e,"keyup",s[6])],C=!0)},p(f,A){var N,E;s=f,(!h||A&1&&c!==(c=`background-image: url(${(N=s[0])==null?void 0:N.src});`))&&$(a,"style",c),(!h||A&1)&&g!==(g=((E=s[0])==null?void 0:E.label)+"")&&X(i,g)},i(f){h||(I(n.$$.fragment,f),h=!0)},o(f){V(n.$$.fragment,f),h=!1},d(f){f&&_(e),q(n),C=!1,ke(M)}}}function Ce(s){let e,l,t=s[2]&&ce(s);return{c(){t&&t.c(),e=G()},l(r){t&&t.l(r),e=G()},m(r,n){t&&t.m(r,n),S(r,e,n),l=!0},p(r,[n]){r[2]?t?(t.p(r,n),n&4&&I(t,1)):(t=ce(r),t.c(),I(t,1),t.m(e.parentNode,e)):t&&(J(),V(t,1,1,()=>{t=null}),Q())},i(r){l||(I(t),l=!0)},o(r){V(t),l=!1},d(r){r&&_(e),t&&t.d(r)}}}const Pe=s=>s.stopPropagation(),Te=s=>s.stopPropagation();function xe(s,e,l){let t,{screenshot:r=void 0}=e,{onClose:n=()=>{l(0,r=void 0)}}=e;function o(f){L.call(this,s,f)}function a(f){L.call(this,s,f)}function c(f){L.call(this,s,f)}function d(f){L.call(this,s,f)}function p(f){L.call(this,s,f)}function g(f){L.call(this,s,f)}function i(f){L.call(this,s,f)}function h(f){L.call(this,s,f)}function C(f){L.call(this,s,f)}function M(f){L.call(this,s,f)}function j(f){L.call(this,s,f)}return s.$$set=f=>{"screenshot"in f&&l(0,r=f.screenshot),"onClose"in f&&l(1,n=f.onClose)},s.$$.update=()=>{s.$$.dirty&1&&l(2,t=typeof r<"u")},[r,n,t,o,a,c,d,p,g,i,h,C,M,j]}class Se extends me{constructor(e){super(),ve(this,e,xe,Ce,he,{screenshot:0,onClose:1})}}function ie(s,e,l){const t=s.slice();return t[9]=e[l],t[11]=l,t}function fe(s,e,l){const t=s.slice();return t[9]=e[l],t}function ue(s,e,l){const t=s.slice();return t[9]=e[l],t}function Ne(s){let e,l,t,r,n,o,a,c,d,p,g,i,h,C;l=new Ie({props:{img:ee(s[0].project.logo),$$slots:{default:[Ue]},$$scope:{ctx:s}}});const M=[Ae,qe],j=[];function f(D,u){return D[0].project.description?0:1}o=f(s),a=j[o]=M[o](s),p=new $e({});const A=[Re,Le],N=[];function E(D,u){return D[5].length>0?0:1}return i=E(s),h=N[i]=A[i](s),{c(){e=k("div"),z(l.$$.fragment),t=P(),r=k("div"),n=k("div"),a.c(),c=P(),d=k("div"),z(p.$$.fragment),g=P(),h.c(),this.h()},l(D){e=y(D,"DIV",{class:!0});var u=w(e);B(l.$$.fragment,u),t=T(u),r=y(u,"DIV",{class:!0});var v=w(r);n=y(v,"DIV",{class:!0});var x=w(n);a.l(x),x.forEach(_),c=T(v),d=y(v,"DIV",{class:!0});var b=w(d);B(p.$$.fragment,b),b.forEach(_),g=T(v),h.l(v),v.forEach(_),u.forEach(_),this.h()},h(){$(n,"class","px-10px m-y-5"),$(d,"class","w-100% m-t-8"),$(r,"class","pt-3 pb-1 overflow-x-hidden w-full"),$(e,"class","flex flex-col items-center overflow-x-hidden")},m(D,u){S(D,e,u),U(l,e,null),m(e,t),m(e,r),m(r,n),j[o].m(n,null),m(r,c),m(r,d),U(p,d,null),m(r,g),N[i].m(r,null),C=!0},p(D,u){const v={};u&1&&(v.img=ee(D[0].project.logo)),u&65537&&(v.$$scope={dirty:u,ctx:D}),l.$set(v);let x=o;o=f(D),o===x?j[o].p(D,u):(J(),V(j[x],1,1,()=>{j[x]=null}),Q(),a=j[o],a?a.p(D,u):(a=j[o]=M[o](D),a.c()),I(a,1),a.m(n,null)),h.p(D,u)},i(D){C||(I(l.$$.fragment,D),I(a),I(p.$$.fragment,D),I(h),C=!0)},o(D){V(l.$$.fragment,D),V(a),V(p.$$.fragment,D),V(h),C=!1},d(D){D&&_(e),q(l),j[o].d(),q(p),N[i].d()}}}function Me(s){let e,l,t,r,n="Could not load project data...",o;return l=new Z({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=k("div"),z(l.$$.fragment),t=P(),r=k("p"),r.textContent=n,this.h()},l(a){e=y(a,"DIV",{class:!0});var c=w(e);B(l.$$.fragment,c),t=T(c),r=y(c,"P",{class:!0,["data-svelte-h"]:!0}),re(r)!=="svelte-18mwztv"&&(r.textContent=n),c.forEach(_),this.h()},h(){$(r,"class","font-300"),$(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(a,c){S(a,e,c),U(l,e,null),m(e,t),m(e,r),o=!0},p:H,i(a){o||(I(l.$$.fragment,a),o=!0)},o(a){V(l.$$.fragment,a),o=!1},d(a){a&&_(e),q(l)}}}function Oe(s){let e=s[0].project.name+"",l;return{c(){l=R(e)},l(t){l=W(t,e)},m(t,r){S(t,l,r)},p(t,r){r&1&&e!==(e=t[0].project.name+"")&&X(l,e)},d(t){t&&_(l)}}}function ze(s){let e,l,t,r,n=s[9].label+"",o,a,c;return l=new Z({props:{icon:"i-carbon-link"}}),{c(){e=k("div"),z(l.$$.fragment),t=P(),r=k("span"),o=R(n),a=P(),this.h()},l(d){e=y(d,"DIV",{class:!0});var p=w(e);B(l.$$.fragment,p),t=T(p),r=y(p,"SPAN",{});var g=w(r);o=W(g,n),g.forEach(_),p.forEach(_),a=T(d),this.h()},h(){$(e,"class","row-center gap-2")},m(d,p){S(d,e,p),U(l,e,null),m(e,t),m(e,r),m(r,o),S(d,a,p),c=!0},p(d,p){(!c||p&1)&&n!==(n=d[9].label+"")&&X(o,n)},i(d){c||(I(l.$$.fragment,d),c=!0)},o(d){V(l.$$.fragment,d),c=!1},d(d){d&&(_(e),_(a)),q(l)}}}function de(s){let e,l;return e=new ge({props:{href:s[9].to,$$slots:{default:[ze]},$$scope:{ctx:s}}}),{c(){z(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,r){U(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.href=t[9].to),r&65537&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){V(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function Be(s){let e,l,t,r=s[9].name+"",n,o,a;return e=new we({props:{src:ee(s[9].logo),alt:s[9].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){z(e.$$.fragment),l=P(),t=k("span"),n=R(r),o=P(),this.h()},l(c){B(e.$$.fragment,c),l=T(c),t=y(c,"SPAN",{class:!0});var d=w(t);n=W(d,r),d.forEach(_),o=T(c),this.h()},h(){$(t,"class","text-[0.9em]")},m(c,d){U(e,c,d),S(c,l,d),S(c,t,d),m(t,n),S(c,o,d),a=!0},p(c,d){const p={};d&1&&(p.src=ee(c[9].logo)),d&1&&(p.alt=c[9].name),e.$set(p),(!a||d&1)&&r!==(r=c[9].name+"")&&X(n,r)},i(c){a||(I(e.$$.fragment,c),a=!0)},o(c){V(e.$$.fragment,c),a=!1},d(c){c&&(_(l),_(t),_(o)),q(e,c)}}}function pe(s){let e,l;return e=new ge({props:{classes:"inline-flex flex-row items-center justify-center",href:`${ae}/skills/${s[9].slug}`,$$slots:{default:[Be]},$$scope:{ctx:s}}}),{c(){z(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,r){U(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.href=`${ae}/skills/${t[9].slug}`),r&65537&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){V(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function Ue(s){let e,l,t,r,n,o=s[0].project.type+"",a,c,d,p,g,i,h,C,M;t=new Ee({props:{$$slots:{default:[Oe]},$$scope:{ctx:s}}}),p=new $e({});let j=F(s[0].project.links),f=[];for(let u=0;u<j.length;u+=1)f[u]=de(ue(s,j,u));const A=u=>V(f[u],1,1,()=>{f[u]=null});let N=F(s[0].project.skills),E=[];for(let u=0;u<N.length;u+=1)E[u]=pe(fe(s,N,u));const D=u=>V(E[u],1,1,()=>{E[u]=null});return{c(){e=k("div"),l=k("div"),z(t.$$.fragment),r=P(),n=k("p"),a=R(o),c=P(),d=k("div"),z(p.$$.fragment),g=P(),i=k("div");for(let u=0;u<f.length;u+=1)f[u].c();h=P(),C=k("div");for(let u=0;u<E.length;u+=1)E[u].c();this.h()},l(u){e=y(u,"DIV",{class:!0});var v=w(e);l=y(v,"DIV",{class:!0});var x=w(l);B(t.$$.fragment,x),x.forEach(_),r=T(v),n=y(v,"P",{class:!0});var b=w(n);a=W(b,o),b.forEach(_),c=T(v),d=y(v,"DIV",{class:!0});var Y=w(d);B(p.$$.fragment,Y),Y.forEach(_),g=T(v),i=y(v,"DIV",{class:!0});var le=w(i);for(let K=0;K<f.length;K+=1)f[K].l(le);le.forEach(_),h=T(v),C=y(v,"DIV",{class:!0});var ne=w(C);for(let K=0;K<E.length;K+=1)E[K].l(ne);ne.forEach(_),v.forEach(_),this.h()},h(){$(l,"class","text-0.9em"),$(n,"class","font-300 text-center text-[var(--tertiary-text)] m-y-2"),$(d,"class","w-75%"),$(i,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),$(C,"class","row-center flex-wrap m-b-2"),$(e,"class","col-center p-y-20")},m(u,v){S(u,e,v),m(e,l),U(t,l,null),m(e,r),m(e,n),m(n,a),m(e,c),m(e,d),U(p,d,null),m(e,g),m(e,i);for(let x=0;x<f.length;x+=1)f[x]&&f[x].m(i,null);m(e,h),m(e,C);for(let x=0;x<E.length;x+=1)E[x]&&E[x].m(C,null);M=!0},p(u,v){const x={};if(v&65537&&(x.$$scope={dirty:v,ctx:u}),t.$set(x),(!M||v&1)&&o!==(o=u[0].project.type+"")&&X(a,o),v&1){j=F(u[0].project.links);let b;for(b=0;b<j.length;b+=1){const Y=ue(u,j,b);f[b]?(f[b].p(Y,v),I(f[b],1)):(f[b]=de(Y),f[b].c(),I(f[b],1),f[b].m(i,null))}for(J(),b=j.length;b<f.length;b+=1)A(b);Q()}if(v&1){N=F(u[0].project.skills);let b;for(b=0;b<N.length;b+=1){const Y=fe(u,N,b);E[b]?(E[b].p(Y,v),I(E[b],1)):(E[b]=pe(Y),E[b].c(),I(E[b],1),E[b].m(C,null))}for(J(),b=N.length;b<E.length;b+=1)D(b);Q()}},i(u){if(!M){I(t.$$.fragment,u),I(p.$$.fragment,u);for(let v=0;v<j.length;v+=1)I(f[v]);for(let v=0;v<N.length;v+=1)I(E[v]);M=!0}},o(u){V(t.$$.fragment,u),V(p.$$.fragment,u),f=f.filter(Boolean);for(let v=0;v<f.length;v+=1)V(f[v]);E=E.filter(Boolean);for(let v=0;v<E.length;v+=1)V(E[v]);M=!1},d(u){u&&_(e),q(t),q(p),te(f,u),te(E,u)}}}function qe(s){let e,l,t,r,n="No description",o;return l=new Z({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=k("div"),z(l.$$.fragment),t=P(),r=k("p"),r.textContent=n,this.h()},l(a){e=y(a,"DIV",{class:!0});var c=w(e);B(l.$$.fragment,c),t=T(c),r=y(c,"P",{class:!0,["data-svelte-h"]:!0}),re(r)!=="svelte-1ugej71"&&(r.textContent=n),c.forEach(_),this.h()},h(){$(r,"class","font-300"),$(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,c){S(a,e,c),U(l,e,null),m(e,t),m(e,r),o=!0},p:H,i(a){o||(I(l.$$.fragment,a),o=!0)},o(a){V(l.$$.fragment,a),o=!1},d(a){a&&_(e),q(l)}}}function Ae(s){let e,l;return e=new De({props:{content:s[0].project.description}}),{c(){z(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,r){U(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.content=t[0].project.description),e.$set(n)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){V(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function Le(s){let e,l,t,r,n="No screenshots",o;return l=new Z({props:{icon:"i-carbon-image",classes:"text-3.5em"}}),{c(){e=k("div"),z(l.$$.fragment),t=P(),r=k("p"),r.textContent=n,this.h()},l(a){e=y(a,"DIV",{class:!0});var c=w(e);B(l.$$.fragment,c),t=T(c),r=y(c,"P",{class:!0,["data-svelte-h"]:!0}),re(r)!=="svelte-s36p3y"&&(r.textContent=n),c.forEach(_),this.h()},h(){$(r,"class","font-300"),$(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,c){S(a,e,c),U(l,e,null),m(e,t),m(e,r),o=!0},p:H,i(a){o||(I(l.$$.fragment,a),o=!0)},o(a){V(l.$$.fragment,a),o=!1},d(a){a&&_(e),q(l)}}}function Re(s){let e,l=F(s[5]),t=[];for(let r=0;r<l.length;r+=1)t[r]=_e(ie(s,l,r));return{c(){e=k("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=y(r,"DIV",{class:!0});var n=w(e);for(let o=0;o<t.length;o+=1)t[o].l(n);n.forEach(_),this.h()},h(){$(e,"class","px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10")},m(r,n){S(r,e,n);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null)},p(r,n){if(n&38){l=F(r[5]);let o;for(o=0;o<l.length;o+=1){const a=ie(r,l,o);t[o]?t[o].p(a,n):(t[o]=_e(a),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=l.length}},i:H,o:H,d(r){r&&_(e),te(t,r)}}}function We(s){let e,l,t,r,n=s[9].label+"",o,a,c,d;function p(){return s[7](s[11])}return{c(){e=k("div"),l=k("div"),t=P(),r=k("p"),o=R(n),a=P(),this.h()},l(g){e=y(g,"DIV",{class:!0});var i=w(e);l=y(i,"DIV",{class:!0,style:!0}),w(l).forEach(_),t=T(i),r=y(i,"P",{class:!0});var h=w(r);o=W(h,n),h.forEach(_),a=T(i),i.forEach(_),this.h()},h(){$(l,"class","screenshot aspect-video bg-contain w-100% cursor-pointer svelte-o4z7e5"),$(l,"style",`background-image: url(${s[9].src});`),$(r,"class","text-[var(--tertiary-text)] font-300"),$(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(g,i){S(g,e,i),m(e,l),m(e,t),m(e,r),m(r,o),m(e,a),c||(d=O(e,"click",p),c=!0)},p(g,i){s=g},d(g){g&&_(e),c=!1,d()}}}function Ye(s){let e;function l(n,o){return n[2][n[11]]?Fe:Ke}let t=l(s),r=t(s);return{c(){r.c(),e=G()},l(n){r.l(n),e=G()},m(n,o){r.m(n,o),S(n,e,o)},p(n,o){t===(t=l(n))&&r?r.p(n,o):(r.d(1),r=t(n),r&&(r.c(),r.m(e.parentNode,e)))},d(n){n&&_(e),r.d(n)}}}function Ke(s){let e,l,t,r,n=s[9].label+"",o,a,c,d;function p(){return s[6](s[11])}return{c(){e=k("div"),l=k("div"),t=P(),r=k("p"),o=R(n),a=P(),this.h()},l(g){e=y(g,"DIV",{class:!0});var i=w(e);l=y(i,"DIV",{class:!0,style:!0}),w(l).forEach(_),t=T(i),r=y(i,"P",{class:!0});var h=w(r);o=W(h,n),h.forEach(_),a=T(i),i.forEach(_),this.h()},h(){$(l,"class","screenshot aspect-video bg-contain w-100% cursor-pointer svelte-o4z7e5"),$(l,"style",`background-image: url(${s[9].thumbnail});`),$(r,"class","text-[var(--tertiary-text)] font-300"),$(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(g,i){S(g,e,i),m(e,l),m(e,t),m(e,r),m(r,o),m(e,a),c||(d=O(e,"click",p),c=!0)},p(g,i){s=g},d(g){g&&_(e),c=!1,d()}}}function Fe(s){let e,l,t,r,n,o,a,c=s[9].label+"",d,p;return{c(){e=k("div"),l=k("video"),t=k("source"),n=R(`
											Your browser does not support the video tag.`),o=P(),a=k("p"),d=R(c),p=P(),this.h()},l(g){e=y(g,"DIV",{class:!0});var i=w(e);l=y(i,"VIDEO",{class:!0});var h=w(l);t=y(h,"SOURCE",{src:!0,type:!0}),n=W(h,`
											Your browser does not support the video tag.`),h.forEach(_),o=T(i),a=y(i,"P",{class:!0});var C=w(a);d=W(C,c),C.forEach(_),p=T(i),i.forEach(_),this.h()},h(){ye(t.src,r=s[9].src)||$(t,"src",r),$(t,"type","video/mp4"),$(l,"class","w-100% aspect-video"),l.controls=!0,l.autoplay=!0,$(a,"class","text-[var(--tertiary-text)] font-300"),$(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(g,i){S(g,e,i),m(e,l),m(l,t),m(l,n),m(e,o),m(e,a),m(a,d),m(e,p)},p:H,d(g){g&&_(e)}}}function _e(s){let e;function l(n,o){return n[9].src.endsWith(".mp4")||n[9].src.endsWith(".webm")?Ye:We}let r=l(s)(s);return{c(){r.c(),e=G()},l(n){r.l(n),e=G()},m(n,o){r.m(n,o),S(n,e,o)},p(n,o){r.p(n,o)},d(n){n&&_(e),r.d(n)}}}function Ge(s){let e,l,t,r,n,o,a,c;e=new Ve({props:{title:s[3]}});const d=[Me,Ne],p=[];function g(i,h){return i[0].project===void 0?0:1}return r=g(s),n=p[r]=d[r](s),a=new Se({props:{screenshot:s[4],onClose:s[8]}}),{c(){z(e.$$.fragment),l=P(),t=k("div"),n.c(),o=P(),z(a.$$.fragment),this.h()},l(i){B(e.$$.fragment,i),l=T(i),t=y(i,"DIV",{class:!0});var h=w(t);n.l(h),h.forEach(_),o=T(i),B(a.$$.fragment,i),this.h()},h(){$(t,"class","pb-10 overflow-x-hidden col flex-1")},m(i,h){U(e,i,h),S(i,l,h),S(i,t,h),p[r].m(t,null),S(i,o,h),U(a,i,h),c=!0},p(i,[h]){const C={};h&8&&(C.title=i[3]),e.$set(C);let M=r;r=g(i),r===M?p[r].p(i,h):(J(),V(p[M],1,1,()=>{p[M]=null}),Q(),n=p[r],n?n.p(i,h):(n=p[r]=d[r](i),n.c()),I(n,1),n.m(t,null));const j={};h&16&&(j.screenshot=i[4]),h&2&&(j.onClose=i[8]),a.$set(j)},i(i){c||(I(e.$$.fragment,i),I(n),I(a.$$.fragment,i),c=!0)},o(i){V(e.$$.fragment,i),V(n),V(a.$$.fragment,i),c=!1},d(i){i&&(_(l),_(t),_(o)),q(e,i),p[r].d(),q(a,i)}}}function He(s,e,l){var i;let t,r,{data:n}=e;const o=((i=n.project)==null?void 0:i.screenshots)??[];let a=[],c;const d=h=>{l(2,a[h]=!0,a)},p=h=>l(1,c=h),g=()=>l(1,c=void 0);return s.$$set=h=>{"data"in h&&l(0,n=h.data)},s.$$.update=()=>{s.$$.dirty&2&&l(4,t=typeof c<"u"&&o[c]?o[c]:void 0),s.$$.dirty&1&&l(3,r=n.project?`${n.project.name} - ${se}`:se)},[n,c,a,r,t,o,d,p,g]}class ct extends me{constructor(e){super(),ve(this,e,He,Ge,he,{data:0})}}export{ct as component,at as universal};
