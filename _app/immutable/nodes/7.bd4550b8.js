import{i as ye,t as se}from"../chunks/portfolio.5d8d02d7.js";import{s as me,e as H,i as B,d as _,f as w,a as S,l as R,g as E,h as D,c as O,m as Y,j as $,K as h,L as M,x as oe,p as X,u as ve,O as L,I as te,n as F,M as le,T as ae,a2 as we}from"../chunks/scheduler.d45cd588.js";import{S as ge,i as be,a as j,g as J,t as P,c as Q,b as U,d as q,m as z,e as A}from"../chunks/index.e030e97f.js";import{U as Z,g as ee,e as G}from"../chunks/UIcon.a9e07fa9.js";import{b as ce}from"../chunks/paths.0961071c.js";import{C as Ee}from"../chunks/CardLogo.cf9bee5b.js";import{M as Ie}from"../chunks/app.7b5d67ed.js";import{B as Ce,M as De}from"../chunks/Banner.b65c4115.js";import{T as Ve}from"../chunks/TabTitle.e549dc57.js";import{C as $e}from"../chunks/Chip.c7b82d9c.js";import{C as ke}from"../chunks/CardDivider.71b687d3.js";function je({params:n}){if(n.slug)return{project:ye.find(r=>r.slug===n.slug)}}const ct=Object.freeze(Object.defineProperty({__proto__:null,load:je},Symbol.toStringTag,{value:"Module"}));function ie(n){var k;let e,r,t,l,s,o,a,c,i,d,b=((k=n[0])==null?void 0:k.label)+"",p,g,T,N;return s=new Z({props:{icon:"i-carbon-close"}}),{c(){e=w("div"),r=w("div"),t=w("div"),l=w("button"),U(s.$$.fragment),o=S(),a=w("div"),i=S(),d=w("p"),p=R(b),this.h()},l(f){e=E(f,"DIV",{class:!0});var m=D(e);r=E(m,"DIV",{class:!0});var y=D(r);t=E(y,"DIV",{class:!0});var C=D(t);l=E(C,"BUTTON",{class:!0});var V=D(l);q(s.$$.fragment,V),V.forEach(_),C.forEach(_),o=O(y),a=E(y,"DIV",{class:!0,style:!0}),D(a).forEach(_),i=O(y),d=E(y,"P",{class:!0});var u=D(d);p=Y(u,b),u.forEach(_),y.forEach(_),m.forEach(_),this.h()},h(){var f;$(l,"class","cursor-pointer aspect-square rounded-full border-[var(--border)] border-1px bg-[transparent] border-solid hover:border-[var(--border-hover)]"),$(t,"class","self-end"),$(a,"class","aspect-video col bg-contain w-100% rounded-xl bg-no-repeat bg-contains bg-center"),$(a,"style",c=`background-image: url(${(f=n[0])==null?void 0:f.src});`),$(d,"class","font-italic m-t-auto m-x-auto bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl"),$(r,"class","w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl"),$(e,"class","fixed inset-0px top-51px bg-[#000000dd] col-center p-50px")},m(f,m){B(f,e,m),h(e,r),h(r,t),h(t,l),z(s,l,null),h(r,o),h(r,a),h(r,i),h(r,d),h(d,p),g=!0,T||(N=[M(l,"click",function(){oe(n[1])&&n[1].apply(this,arguments)}),M(l,"keydown",n[11]),M(l,"keypress",n[12]),M(l,"keyup",n[13]),M(r,"click",Te),M(r,"keydown",n[7]),M(r,"keypress",n[8]),M(r,"keyup",n[9]),M(r,"keyup",n[10]),M(e,"click",function(){oe(n[1])&&n[1].apply(this,arguments)}),M(e,"click",Ne),M(e,"keydown",n[3]),M(e,"keypress",n[4]),M(e,"keyup",n[5]),M(e,"keyup",n[6])],T=!0)},p(f,m){var y,C;n=f,(!g||m&1&&c!==(c=`background-image: url(${(y=n[0])==null?void 0:y.src});`))&&$(a,"style",c),(!g||m&1)&&b!==(b=((C=n[0])==null?void 0:C.label)+"")&&X(p,b)},i(f){g||(j(s.$$.fragment,f),g=!0)},o(f){P(s.$$.fragment,f),g=!1},d(f){f&&_(e),A(s),T=!1,ve(N)}}}function Pe(n){let e,r,t=n[2]&&ie(n);return{c(){t&&t.c(),e=H()},l(l){t&&t.l(l),e=H()},m(l,s){t&&t.m(l,s),B(l,e,s),r=!0},p(l,[s]){l[2]?t?(t.p(l,s),s&4&&j(t,1)):(t=ie(l),t.c(),j(t,1),t.m(e.parentNode,e)):t&&(J(),P(t,1,1,()=>{t=null}),Q())},i(l){r||(j(t),r=!0)},o(l){P(t),r=!1},d(l){l&&_(e),t&&t.d(l)}}}const Te=n=>n.stopPropagation(),Ne=n=>n.stopPropagation();function Se(n,e,r){let t,{screenshot:l=void 0}=e,{onClose:s=()=>{r(0,l=void 0)}}=e;function o(f){L.call(this,n,f)}function a(f){L.call(this,n,f)}function c(f){L.call(this,n,f)}function i(f){L.call(this,n,f)}function d(f){L.call(this,n,f)}function b(f){L.call(this,n,f)}function p(f){L.call(this,n,f)}function g(f){L.call(this,n,f)}function T(f){L.call(this,n,f)}function N(f){L.call(this,n,f)}function k(f){L.call(this,n,f)}return n.$$set=f=>{"screenshot"in f&&r(0,l=f.screenshot),"onClose"in f&&r(1,s=f.onClose)},n.$$.update=()=>{n.$$.dirty&1&&r(2,t=typeof l<"u")},[l,s,t,o,a,c,i,d,b,p,g,T,N,k]}class Oe extends ge{constructor(e){super(),be(this,e,Se,Pe,me,{screenshot:0,onClose:1})}}function fe(n,e,r){const t=n.slice();return t[13]=e[r],t[15]=r,t}function ue(n,e,r){const t=n.slice();return t[13]=e[r],t}function de(n,e,r){const t=n.slice();return t[13]=e[r],t}function xe(n){let e,r,t,l,s,o,a,c,i,d,b,p,g,T;r=new Ce({props:{img:ee(n[0].project.logo),$$slots:{default:[ze]},$$scope:{ctx:n}}});const N=[Le,Ae],k=[];function f(V,u){return V[0].project.description?0:1}o=f(n),a=k[o]=N[o](n),d=new ke({});const m=[Re,We],y=[];function C(V,u){return V[4].length>0?0:1}return p=C(n),g=y[p]=m[p](n),{c(){e=w("div"),U(r.$$.fragment),t=S(),l=w("div"),s=w("div"),a.c(),c=S(),i=w("div"),U(d.$$.fragment),b=S(),g.c(),this.h()},l(V){e=E(V,"DIV",{class:!0});var u=D(e);q(r.$$.fragment,u),t=O(u),l=E(u,"DIV",{class:!0});var v=D(l);s=E(v,"DIV",{class:!0});var x=D(s);a.l(x),x.forEach(_),c=O(v),i=E(v,"DIV",{class:!0});var I=D(i);q(d.$$.fragment,I),I.forEach(_),b=O(v),g.l(v),v.forEach(_),u.forEach(_),this.h()},h(){$(s,"class","px-10px m-y-5"),$(i,"class","w-100% m-t-8"),$(l,"class","pt-3 pb-1 overflow-x-hidden w-full"),$(e,"class","flex flex-col items-center overflow-x-hidden")},m(V,u){B(V,e,u),z(r,e,null),h(e,t),h(e,l),h(l,s),k[o].m(s,null),h(l,c),h(l,i),z(d,i,null),h(l,b),y[p].m(l,null),T=!0},p(V,u){const v={};u&1&&(v.img=ee(V[0].project.logo)),u&1048577&&(v.$$scope={dirty:u,ctx:V}),r.$set(v);let x=o;o=f(V),o===x?k[o].p(V,u):(J(),P(k[x],1,1,()=>{k[x]=null}),Q(),a=k[o],a?a.p(V,u):(a=k[o]=N[o](V),a.c()),j(a,1),a.m(s,null)),g.p(V,u)},i(V){T||(j(r.$$.fragment,V),j(a),j(d.$$.fragment,V),j(g),T=!0)},o(V){P(r.$$.fragment,V),P(a),P(d.$$.fragment,V),P(g),T=!1},d(V){V&&_(e),A(r),k[o].d(),A(d),y[p].d()}}}function Be(n){let e,r,t,l,s="Could not load project data...",o;return r=new Z({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),U(r.$$.fragment),t=S(),l=w("p"),l.textContent=s,this.h()},l(a){e=E(a,"DIV",{class:!0});var c=D(e);q(r.$$.fragment,c),t=O(c),l=E(c,"P",{class:!0,["data-svelte-h"]:!0}),te(l)!=="svelte-18mwztv"&&(l.textContent=s),c.forEach(_),this.h()},h(){$(l,"class","font-300"),$(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(a,c){B(a,e,c),z(r,e,null),h(e,t),h(e,l),o=!0},p:F,i(a){o||(j(r.$$.fragment,a),o=!0)},o(a){P(r.$$.fragment,a),o=!1},d(a){a&&_(e),A(r)}}}function Me(n){let e=n[0].project.name+"",r;return{c(){r=R(e)},l(t){r=Y(t,e)},m(t,l){B(t,r,l)},p(t,l){l&1&&e!==(e=t[0].project.name+"")&&X(r,e)},d(t){t&&_(r)}}}function Ue(n){let e,r,t,l,s=n[13].label+"",o,a,c;return r=new Z({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),U(r.$$.fragment),t=S(),l=w("span"),o=R(s),a=S(),this.h()},l(i){e=E(i,"DIV",{class:!0});var d=D(e);q(r.$$.fragment,d),t=O(d),l=E(d,"SPAN",{});var b=D(l);o=Y(b,s),b.forEach(_),d.forEach(_),a=O(i),this.h()},h(){$(e,"class","row-center gap-2")},m(i,d){B(i,e,d),z(r,e,null),h(e,t),h(e,l),h(l,o),B(i,a,d),c=!0},p(i,d){(!c||d&1)&&s!==(s=i[13].label+"")&&X(o,s)},i(i){c||(j(r.$$.fragment,i),c=!0)},o(i){P(r.$$.fragment,i),c=!1},d(i){i&&(_(e),_(a)),A(r)}}}function _e(n){let e,r;return e=new $e({props:{href:n[13].to,$$slots:{default:[Ue]},$$scope:{ctx:n}}}),{c(){U(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,l){z(e,t,l),r=!0},p(t,l){const s={};l&1&&(s.href=t[13].to),l&1048577&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){P(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function qe(n){let e,r,t,l=n[13].name+"",s,o,a;return e=new Ee({props:{src:ee(n[13].logo),alt:n[13].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){U(e.$$.fragment),r=S(),t=w("span"),s=R(l),o=S(),this.h()},l(c){q(e.$$.fragment,c),r=O(c),t=E(c,"SPAN",{class:!0});var i=D(t);s=Y(i,l),i.forEach(_),o=O(c),this.h()},h(){$(t,"class","text-[0.9em]")},m(c,i){z(e,c,i),B(c,r,i),B(c,t,i),h(t,s),B(c,o,i),a=!0},p(c,i){const d={};i&1&&(d.src=ee(c[13].logo)),i&1&&(d.alt=c[13].name),e.$set(d),(!a||i&1)&&l!==(l=c[13].name+"")&&X(s,l)},i(c){a||(j(e.$$.fragment,c),a=!0)},o(c){P(e.$$.fragment,c),a=!1},d(c){c&&(_(r),_(t),_(o)),A(e,c)}}}function pe(n){let e,r;return e=new $e({props:{classes:"inline-flex flex-row items-center justify-center",href:`${ce}/skills/${n[13].slug}`,$$slots:{default:[qe]},$$scope:{ctx:n}}}),{c(){U(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,l){z(e,t,l),r=!0},p(t,l){const s={};l&1&&(s.href=`${ce}/skills/${t[13].slug}`),l&1048577&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){P(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function ze(n){let e,r,t,l,s,o=n[0].project.type+"",a,c,i,d,b,p,g,T,N;t=new Ie({props:{$$slots:{default:[Me]},$$scope:{ctx:n}}}),d=new ke({});let k=G(n[0].project.links),f=[];for(let u=0;u<k.length;u+=1)f[u]=_e(de(n,k,u));const m=u=>P(f[u],1,1,()=>{f[u]=null});let y=G(n[0].project.skills),C=[];for(let u=0;u<y.length;u+=1)C[u]=pe(ue(n,y,u));const V=u=>P(C[u],1,1,()=>{C[u]=null});return{c(){e=w("div"),r=w("div"),U(t.$$.fragment),l=S(),s=w("p"),a=R(o),c=S(),i=w("div"),U(d.$$.fragment),b=S(),p=w("div");for(let u=0;u<f.length;u+=1)f[u].c();g=S(),T=w("div");for(let u=0;u<C.length;u+=1)C[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var v=D(e);r=E(v,"DIV",{class:!0});var x=D(r);q(t.$$.fragment,x),x.forEach(_),l=O(v),s=E(v,"P",{class:!0});var I=D(s);a=Y(I,o),I.forEach(_),c=O(v),i=E(v,"DIV",{class:!0});var W=D(i);q(d.$$.fragment,W),W.forEach(_),b=O(v),p=E(v,"DIV",{class:!0});var re=D(p);for(let K=0;K<f.length;K+=1)f[K].l(re);re.forEach(_),g=O(v),T=E(v,"DIV",{class:!0});var ne=D(T);for(let K=0;K<C.length;K+=1)C[K].l(ne);ne.forEach(_),v.forEach(_),this.h()},h(){$(r,"class","text-0.9em"),$(s,"class","font-300 text-center text-[var(--tertiary-text)] m-y-2"),$(i,"class","w-75%"),$(p,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),$(T,"class","row-center flex-wrap m-b-2"),$(e,"class","col-center p-y-20")},m(u,v){B(u,e,v),h(e,r),z(t,r,null),h(e,l),h(e,s),h(s,a),h(e,c),h(e,i),z(d,i,null),h(e,b),h(e,p);for(let x=0;x<f.length;x+=1)f[x]&&f[x].m(p,null);h(e,g),h(e,T);for(let x=0;x<C.length;x+=1)C[x]&&C[x].m(T,null);N=!0},p(u,v){const x={};if(v&1048577&&(x.$$scope={dirty:v,ctx:u}),t.$set(x),(!N||v&1)&&o!==(o=u[0].project.type+"")&&X(a,o),v&1){k=G(u[0].project.links);let I;for(I=0;I<k.length;I+=1){const W=de(u,k,I);f[I]?(f[I].p(W,v),j(f[I],1)):(f[I]=_e(W),f[I].c(),j(f[I],1),f[I].m(p,null))}for(J(),I=k.length;I<f.length;I+=1)m(I);Q()}if(v&1){y=G(u[0].project.skills);let I;for(I=0;I<y.length;I+=1){const W=ue(u,y,I);C[I]?(C[I].p(W,v),j(C[I],1)):(C[I]=pe(W),C[I].c(),j(C[I],1),C[I].m(T,null))}for(J(),I=y.length;I<C.length;I+=1)V(I);Q()}},i(u){if(!N){j(t.$$.fragment,u),j(d.$$.fragment,u);for(let v=0;v<k.length;v+=1)j(f[v]);for(let v=0;v<y.length;v+=1)j(C[v]);N=!0}},o(u){P(t.$$.fragment,u),P(d.$$.fragment,u),f=f.filter(Boolean);for(let v=0;v<f.length;v+=1)P(f[v]);C=C.filter(Boolean);for(let v=0;v<C.length;v+=1)P(C[v]);N=!1},d(u){u&&_(e),A(t),A(d),le(f,u),le(C,u)}}}function Ae(n){let e,r,t,l,s="No description",o;return r=new Z({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),U(r.$$.fragment),t=S(),l=w("p"),l.textContent=s,this.h()},l(a){e=E(a,"DIV",{class:!0});var c=D(e);q(r.$$.fragment,c),t=O(c),l=E(c,"P",{class:!0,["data-svelte-h"]:!0}),te(l)!=="svelte-1ugej71"&&(l.textContent=s),c.forEach(_),this.h()},h(){$(l,"class","font-300"),$(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,c){B(a,e,c),z(r,e,null),h(e,t),h(e,l),o=!0},p:F,i(a){o||(j(r.$$.fragment,a),o=!0)},o(a){P(r.$$.fragment,a),o=!1},d(a){a&&_(e),A(r)}}}function Le(n){let e,r;return e=new De({props:{content:n[5](n[0].project.description)}}),{c(){U(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,l){z(e,t,l),r=!0},p(t,l){const s={};l&1&&(s.content=t[5](t[0].project.description)),e.$set(s)},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){P(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function We(n){let e,r,t,l,s="No screenshots",o;return r=new Z({props:{icon:"i-carbon-image",classes:"text-3.5em"}}),{c(){e=w("div"),U(r.$$.fragment),t=S(),l=w("p"),l.textContent=s,this.h()},l(a){e=E(a,"DIV",{class:!0});var c=D(e);q(r.$$.fragment,c),t=O(c),l=E(c,"P",{class:!0,["data-svelte-h"]:!0}),te(l)!=="svelte-s36p3y"&&(l.textContent=s),c.forEach(_),this.h()},h(){$(l,"class","font-300"),$(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,c){B(a,e,c),z(r,e,null),h(e,t),h(e,l),o=!0},p:F,i(a){o||(j(r.$$.fragment,a),o=!0)},o(a){P(r.$$.fragment,a),o=!1},d(a){a&&_(e),A(r)}}}function Re(n){let e,r=G(n[4]),t=[];for(let l=0;l<r.length;l+=1)t[l]=he(fe(n,r,l));return{c(){e=w("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=E(l,"DIV",{class:!0});var s=D(e);for(let o=0;o<t.length;o+=1)t[o].l(s);s.forEach(_),this.h()},h(){$(e,"class","px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10")},m(l,s){B(l,e,s);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null)},p(l,s){if(s&18){r=G(l[4]);let o;for(o=0;o<r.length;o+=1){const a=fe(l,r,o);t[o]?t[o].p(a,s):(t[o]=he(a),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=r.length}},i:F,o:F,d(l){l&&_(e),le(t,l)}}}function Ye(n){let e,r,t,l,s=n[13].label+"",o,a,c,i;function d(){return n[8](n[15])}return{c(){e=w("div"),r=w("div"),t=S(),l=w("p"),o=R(s),a=S(),this.h()},l(b){e=E(b,"DIV",{class:!0});var p=D(e);r=E(p,"DIV",{class:!0,style:!0}),D(r).forEach(_),t=O(p),l=E(p,"P",{class:!0});var g=D(l);o=Y(g,s),g.forEach(_),a=O(p),p.forEach(_),this.h()},h(){$(r,"class","screenshot aspect-video bg-contain w-100% cursor-pointer svelte-se8rl5"),$(r,"style",`background-image: url(${n[13].src});`),$(l,"class","text-[var(--tertiary-text)] font-300"),$(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(b,p){B(b,e,p),h(e,r),h(e,t),h(e,l),h(l,o),h(e,a),c||(i=M(e,"click",d),c=!0)},p(b,p){n=b},d(b){b&&_(e),c=!1,i()}}}function Ke(n){let e,r,t,l,s=n[13].label+"",o,a,c,i;function d(){return n[7](n[15])}return{c(){e=w("div"),r=w("div"),t=S(),l=w("p"),o=R(s),a=S(),this.h()},l(b){e=E(b,"DIV",{class:!0});var p=D(e);r=E(p,"DIV",{class:!0,style:!0}),D(r).forEach(_),t=O(p),l=E(p,"P",{class:!0});var g=D(l);o=Y(g,s),g.forEach(_),a=O(p),p.forEach(_),this.h()},h(){$(r,"class","screenshot aspect-video bg-contain w-100% cursor-pointer svelte-se8rl5"),$(r,"style",`background-image: url(${n[13].thumbnail});`),$(l,"class","text-[var(--tertiary-text)] font-300"),$(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(b,p){B(b,e,p),h(e,r),h(e,t),h(e,l),h(l,o),h(e,a),c||(i=M(e,"click",d),c=!0)},p(b,p){n=b},d(b){b&&_(e),c=!1,i()}}}function he(n){let e;function r(s,o){return s[13].src.endsWith(".mp4")||s[13].src.endsWith(".webm")?Ke:Ye}let l=r(n)(n);return{c(){l.c(),e=H()},l(s){l.l(s),e=H()},m(s,o){l.m(s,o),B(s,e,o)},p(s,o){l.p(s,o)},d(s){s&&_(e),l.d(s)}}}function Fe(n){let e,r;return e=new Oe({props:{screenshot:n[3],onClose:n[11]}}),{c(){U(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,l){z(e,t,l),r=!0},p(t,l){const s={};l&8&&(s.screenshot=t[3]),l&2&&(s.onClose=t[11]),e.$set(s)},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){P(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Ge(n){let e,r,t,l,s,o,a,c,i="Close",d,b;return{c(){e=w("div"),r=w("div"),t=w("video"),l=w("source"),o=R(`
				Your browser does not support the video tag.`),a=S(),c=w("button"),c.textContent=i,this.h()},l(p){e=E(p,"DIV",{class:!0});var g=D(e);r=E(g,"DIV",{class:!0});var T=D(r);t=E(T,"VIDEO",{class:!0});var N=D(t);l=E(N,"SOURCE",{src:!0,type:!0}),o=Y(N,`
				Your browser does not support the video tag.`),N.forEach(_),T.forEach(_),a=O(g),c=E(g,"BUTTON",{class:!0,["data-svelte-h"]:!0}),te(c)!=="svelte-9oxiyx"&&(c.textContent=i),g.forEach(_),this.h()},h(){ae(l.src,s=n[3].src)||$(l,"src",s),$(l,"type","video/mp4"),$(t,"class","w-full h-auto"),t.controls=!0,t.autoplay=!0,$(r,"class","modal-content svelte-se8rl5"),$(c,"class","close-modal svelte-se8rl5"),$(e,"class","modal-background svelte-se8rl5")},m(p,g){B(p,e,g),h(e,r),h(r,t),h(t,l),h(t,o),h(e,a),h(e,c),d||(b=[M(r,"click",we(n[6])),M(c,"click",n[9]),M(e,"click",n[10])],d=!0)},p(p,g){g&8&&!ae(l.src,s=p[3].src)&&$(l,"src",s)},i:F,o:F,d(p){p&&_(e),d=!1,ve(b)}}}function He(n){let e,r,t,l,s,o,a,c,i,d,b;e=new Ve({props:{title:n[2]}});const p=[Be,xe],g=[];function T(m,y){return m[0].project===void 0?0:1}l=T(n),s=g[l]=p[l](n);const N=[Ge,Fe],k=[];function f(m,y){return y&8&&(a=null),a==null&&(a=!!(m[3]&&m[3].src.endsWith(".mp4"))),a?0:m[3]?1:-1}return~(c=f(n,-1))&&(i=k[c]=N[c](n)),{c(){U(e.$$.fragment),r=S(),t=w("div"),s.c(),o=S(),i&&i.c(),d=H(),this.h()},l(m){q(e.$$.fragment,m),r=O(m),t=E(m,"DIV",{class:!0});var y=D(t);s.l(y),y.forEach(_),o=O(m),i&&i.l(m),d=H(),this.h()},h(){$(t,"class","pb-10 overflow-x-hidden col flex-1")},m(m,y){z(e,m,y),B(m,r,y),B(m,t,y),g[l].m(t,null),B(m,o,y),~c&&k[c].m(m,y),B(m,d,y),b=!0},p(m,[y]){const C={};y&4&&(C.title=m[2]),e.$set(C);let V=l;l=T(m),l===V?g[l].p(m,y):(J(),P(g[V],1,1,()=>{g[V]=null}),Q(),s=g[l],s?s.p(m,y):(s=g[l]=p[l](m),s.c()),j(s,1),s.m(t,null));let u=c;c=f(m,y),c===u?~c&&k[c].p(m,y):(i&&(J(),P(k[u],1,1,()=>{k[u]=null}),Q()),~c?(i=k[c],i?i.p(m,y):(i=k[c]=N[c](m),i.c()),j(i,1),i.m(d.parentNode,d)):i=null)},i(m){b||(j(e.$$.fragment,m),j(s),j(i),b=!0)},o(m){P(e.$$.fragment,m),P(s),P(i),b=!1},d(m){m&&(_(r),_(t),_(o),_(d)),A(e,m),g[l].d(),~c&&k[c].d(m)}}}function Je(n,e,r){var N;let t,l,{data:s}=e;const o=((N=s.project)==null?void 0:N.screenshots)??[];let a;const c=k=>k?k.replace(/\n\n/g,"<br><br>"):"";function i(k){L.call(this,n,k)}const d=k=>r(1,a=k),b=k=>r(1,a=k),p=()=>r(1,a=void 0),g=()=>r(1,a=void 0),T=()=>r(1,a=void 0);return n.$$set=k=>{"data"in k&&r(0,s=k.data)},n.$$.update=()=>{n.$$.dirty&2&&r(3,t=typeof a<"u"&&o[a]?o[a]:void 0),n.$$.dirty&1&&r(2,l=s.project?`${s.project.name} - ${se}`:se)},[s,a,l,t,o,c,i,d,b,p,g,T]}class it extends ge{constructor(e){super(),be(this,e,Je,He,me,{data:0})}}export{it as component,ct as universal};