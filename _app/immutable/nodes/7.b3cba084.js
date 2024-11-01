import{i as ye,t as se}from"../chunks/portfolio.cb806a35.js";import{s as me,e as H,i as x,d as _,f as w,a as N,l as R,g as E,h as D,c as S,m as Y,j as $,K as h,L as B,x as oe,p as X,u as ve,O as L,I as te,n as F,M as le,T as ae,a2 as we}from"../chunks/scheduler.d45cd588.js";import{S as ge,i as be,a as j,g as J,t as P,c as Q,b as M,d as U,m as z,e as A}from"../chunks/index.e030e97f.js";import{U as Z,g as ee,e as G}from"../chunks/UIcon.4c3dcfb0.js";import{b as ce}from"../chunks/paths.c25c2081.js";import{C as Ee}from"../chunks/CardLogo.cf9bee5b.js";import{M as Ie}from"../chunks/app.7b5d67ed.js";import{B as Ce,M as De}from"../chunks/Banner.b65c4115.js";import{T as Ve}from"../chunks/TabTitle.e549dc57.js";import{C as $e}from"../chunks/Chip.c7b82d9c.js";import{C as ke}from"../chunks/CardDivider.71b687d3.js";function je({params:n}){if(n.slug)return{project:ye.find(r=>r.slug===n.slug)}}const ct=Object.freeze(Object.defineProperty({__proto__:null,load:je},Symbol.toStringTag,{value:"Module"}));function ie(n){var k;let e,r,t,l,s,o,a,c,f,d,b=((k=n[0])==null?void 0:k.label)+"",p,g,T,q;return s=new Z({props:{icon:"i-carbon-close"}}),{c(){e=w("div"),r=w("div"),t=w("div"),l=w("button"),M(s.$$.fragment),o=N(),a=w("div"),f=N(),d=w("p"),p=R(b),this.h()},l(i){e=E(i,"DIV",{class:!0});var m=D(e);r=E(m,"DIV",{class:!0});var y=D(r);t=E(y,"DIV",{class:!0});var C=D(t);l=E(C,"BUTTON",{class:!0});var V=D(l);U(s.$$.fragment,V),V.forEach(_),C.forEach(_),o=S(y),a=E(y,"DIV",{class:!0,style:!0}),D(a).forEach(_),f=S(y),d=E(y,"P",{class:!0});var u=D(d);p=Y(u,b),u.forEach(_),y.forEach(_),m.forEach(_),this.h()},h(){var i;$(l,"class","cursor-pointer aspect-square rounded-full border-[var(--border)] border-1px bg-[transparent] border-solid hover:border-[var(--border-hover)]"),$(t,"class","self-end"),$(a,"class","aspect-video col bg-contain w-100% rounded-xl bg-no-repeat bg-contains bg-center"),$(a,"style",c=`background-image: url(${(i=n[0])==null?void 0:i.src});`),$(d,"class","font-italic m-t-auto m-x-auto bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl"),$(r,"class","w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl"),$(e,"class","fixed inset-0px top-51px bg-[#000000dd] col-center p-50px")},m(i,m){x(i,e,m),h(e,r),h(r,t),h(t,l),z(s,l,null),h(r,o),h(r,a),h(r,f),h(r,d),h(d,p),g=!0,T||(q=[B(l,"click",function(){oe(n[1])&&n[1].apply(this,arguments)}),B(l,"keydown",n[11]),B(l,"keypress",n[12]),B(l,"keyup",n[13]),B(r,"click",Te),B(r,"keydown",n[7]),B(r,"keypress",n[8]),B(r,"keyup",n[9]),B(r,"keyup",n[10]),B(e,"click",function(){oe(n[1])&&n[1].apply(this,arguments)}),B(e,"click",qe),B(e,"keydown",n[3]),B(e,"keypress",n[4]),B(e,"keyup",n[5]),B(e,"keyup",n[6])],T=!0)},p(i,m){var y,C;n=i,(!g||m&1&&c!==(c=`background-image: url(${(y=n[0])==null?void 0:y.src});`))&&$(a,"style",c),(!g||m&1)&&b!==(b=((C=n[0])==null?void 0:C.label)+"")&&X(p,b)},i(i){g||(j(s.$$.fragment,i),g=!0)},o(i){P(s.$$.fragment,i),g=!1},d(i){i&&_(e),A(s),T=!1,ve(q)}}}function Pe(n){let e,r,t=n[2]&&ie(n);return{c(){t&&t.c(),e=H()},l(l){t&&t.l(l),e=H()},m(l,s){t&&t.m(l,s),x(l,e,s),r=!0},p(l,[s]){l[2]?t?(t.p(l,s),s&4&&j(t,1)):(t=ie(l),t.c(),j(t,1),t.m(e.parentNode,e)):t&&(J(),P(t,1,1,()=>{t=null}),Q())},i(l){r||(j(t),r=!0)},o(l){P(t),r=!1},d(l){l&&_(e),t&&t.d(l)}}}const Te=n=>n.stopPropagation(),qe=n=>n.stopPropagation();function Ne(n,e,r){let t,{screenshot:l=void 0}=e,{onClose:s=()=>{r(0,l=void 0)}}=e;function o(i){L.call(this,n,i)}function a(i){L.call(this,n,i)}function c(i){L.call(this,n,i)}function f(i){L.call(this,n,i)}function d(i){L.call(this,n,i)}function b(i){L.call(this,n,i)}function p(i){L.call(this,n,i)}function g(i){L.call(this,n,i)}function T(i){L.call(this,n,i)}function q(i){L.call(this,n,i)}function k(i){L.call(this,n,i)}return n.$$set=i=>{"screenshot"in i&&r(0,l=i.screenshot),"onClose"in i&&r(1,s=i.onClose)},n.$$.update=()=>{n.$$.dirty&1&&r(2,t=typeof l<"u")},[l,s,t,o,a,c,f,d,b,p,g,T,q,k]}class Se extends ge{constructor(e){super(),be(this,e,Ne,Pe,me,{screenshot:0,onClose:1})}}function fe(n,e,r){const t=n.slice();return t[13]=e[r],t[15]=r,t}function ue(n,e,r){const t=n.slice();return t[13]=e[r],t}function de(n,e,r){const t=n.slice();return t[13]=e[r],t}function Oe(n){let e,r,t,l,s,o,a,c,f,d,b,p,g,T;r=new Ce({props:{img:ee(n[0].project.logo),$$slots:{default:[ze]},$$scope:{ctx:n}}});const q=[Le,Ae],k=[];function i(V,u){return V[0].project.description?0:1}o=i(n),a=k[o]=q[o](n),d=new ke({});const m=[Re,We],y=[];function C(V,u){return V[4].length>0?0:1}return p=C(n),g=y[p]=m[p](n),{c(){e=w("div"),M(r.$$.fragment),t=N(),l=w("div"),s=w("div"),a.c(),c=N(),f=w("div"),M(d.$$.fragment),b=N(),g.c(),this.h()},l(V){e=E(V,"DIV",{class:!0});var u=D(e);U(r.$$.fragment,u),t=S(u),l=E(u,"DIV",{class:!0});var v=D(l);s=E(v,"DIV",{class:!0});var O=D(s);a.l(O),O.forEach(_),c=S(v),f=E(v,"DIV",{class:!0});var I=D(f);U(d.$$.fragment,I),I.forEach(_),b=S(v),g.l(v),v.forEach(_),u.forEach(_),this.h()},h(){$(s,"class","px-10px m-y-5"),$(f,"class","w-100% m-t-8"),$(l,"class","pt-3 pb-1 overflow-x-hidden w-full"),$(e,"class","flex flex-col items-center overflow-x-hidden")},m(V,u){x(V,e,u),z(r,e,null),h(e,t),h(e,l),h(l,s),k[o].m(s,null),h(l,c),h(l,f),z(d,f,null),h(l,b),y[p].m(l,null),T=!0},p(V,u){const v={};u&1&&(v.img=ee(V[0].project.logo)),u&1048577&&(v.$$scope={dirty:u,ctx:V}),r.$set(v);let O=o;o=i(V),o===O?k[o].p(V,u):(J(),P(k[O],1,1,()=>{k[O]=null}),Q(),a=k[o],a?a.p(V,u):(a=k[o]=q[o](V),a.c()),j(a,1),a.m(s,null)),g.p(V,u)},i(V){T||(j(r.$$.fragment,V),j(a),j(d.$$.fragment,V),j(g),T=!0)},o(V){P(r.$$.fragment,V),P(a),P(d.$$.fragment,V),P(g),T=!1},d(V){V&&_(e),A(r),k[o].d(),A(d),y[p].d()}}}function xe(n){let e,r,t,l,s="Could not load project data...",o;return r=new Z({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),M(r.$$.fragment),t=N(),l=w("p"),l.textContent=s,this.h()},l(a){e=E(a,"DIV",{class:!0});var c=D(e);U(r.$$.fragment,c),t=S(c),l=E(c,"P",{class:!0,["data-svelte-h"]:!0}),te(l)!=="svelte-18mwztv"&&(l.textContent=s),c.forEach(_),this.h()},h(){$(l,"class","font-300"),$(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(a,c){x(a,e,c),z(r,e,null),h(e,t),h(e,l),o=!0},p:F,i(a){o||(j(r.$$.fragment,a),o=!0)},o(a){P(r.$$.fragment,a),o=!1},d(a){a&&_(e),A(r)}}}function Be(n){let e=n[0].project.name+"",r;return{c(){r=R(e)},l(t){r=Y(t,e)},m(t,l){x(t,r,l)},p(t,l){l&1&&e!==(e=t[0].project.name+"")&&X(r,e)},d(t){t&&_(r)}}}function Me(n){let e,r,t,l,s=n[13].label+"",o,a,c;return r=new Z({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),M(r.$$.fragment),t=N(),l=w("span"),o=R(s),a=N(),this.h()},l(f){e=E(f,"DIV",{class:!0});var d=D(e);U(r.$$.fragment,d),t=S(d),l=E(d,"SPAN",{});var b=D(l);o=Y(b,s),b.forEach(_),d.forEach(_),a=S(f),this.h()},h(){$(e,"class","row-center gap-2")},m(f,d){x(f,e,d),z(r,e,null),h(e,t),h(e,l),h(l,o),x(f,a,d),c=!0},p(f,d){(!c||d&1)&&s!==(s=f[13].label+"")&&X(o,s)},i(f){c||(j(r.$$.fragment,f),c=!0)},o(f){P(r.$$.fragment,f),c=!1},d(f){f&&(_(e),_(a)),A(r)}}}function _e(n){let e,r;return e=new $e({props:{href:n[13].to,$$slots:{default:[Me]},$$scope:{ctx:n}}}),{c(){M(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){z(e,t,l),r=!0},p(t,l){const s={};l&1&&(s.href=t[13].to),l&1048577&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){P(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Ue(n){let e,r,t,l=n[13].name+"",s,o,a;return e=new Ee({props:{src:ee(n[13].logo),alt:n[13].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){M(e.$$.fragment),r=N(),t=w("span"),s=R(l),o=N(),this.h()},l(c){U(e.$$.fragment,c),r=S(c),t=E(c,"SPAN",{class:!0});var f=D(t);s=Y(f,l),f.forEach(_),o=S(c),this.h()},h(){$(t,"class","text-[0.9em]")},m(c,f){z(e,c,f),x(c,r,f),x(c,t,f),h(t,s),x(c,o,f),a=!0},p(c,f){const d={};f&1&&(d.src=ee(c[13].logo)),f&1&&(d.alt=c[13].name),e.$set(d),(!a||f&1)&&l!==(l=c[13].name+"")&&X(s,l)},i(c){a||(j(e.$$.fragment,c),a=!0)},o(c){P(e.$$.fragment,c),a=!1},d(c){c&&(_(r),_(t),_(o)),A(e,c)}}}function pe(n){let e,r;return e=new $e({props:{classes:"inline-flex flex-row items-center justify-center",href:`${ce}/skills/${n[13].slug}`,$$slots:{default:[Ue]},$$scope:{ctx:n}}}),{c(){M(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){z(e,t,l),r=!0},p(t,l){const s={};l&1&&(s.href=`${ce}/skills/${t[13].slug}`),l&1048577&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){P(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function ze(n){let e,r,t,l,s,o=n[0].project.type+"",a,c,f,d,b,p,g,T,q;t=new Ie({props:{$$slots:{default:[Be]},$$scope:{ctx:n}}}),d=new ke({});let k=G(n[0].project.links),i=[];for(let u=0;u<k.length;u+=1)i[u]=_e(de(n,k,u));const m=u=>P(i[u],1,1,()=>{i[u]=null});let y=G(n[0].project.skills),C=[];for(let u=0;u<y.length;u+=1)C[u]=pe(ue(n,y,u));const V=u=>P(C[u],1,1,()=>{C[u]=null});return{c(){e=w("div"),r=w("div"),M(t.$$.fragment),l=N(),s=w("p"),a=R(o),c=N(),f=w("div"),M(d.$$.fragment),b=N(),p=w("div");for(let u=0;u<i.length;u+=1)i[u].c();g=N(),T=w("div");for(let u=0;u<C.length;u+=1)C[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var v=D(e);r=E(v,"DIV",{class:!0});var O=D(r);U(t.$$.fragment,O),O.forEach(_),l=S(v),s=E(v,"P",{class:!0});var I=D(s);a=Y(I,o),I.forEach(_),c=S(v),f=E(v,"DIV",{class:!0});var W=D(f);U(d.$$.fragment,W),W.forEach(_),b=S(v),p=E(v,"DIV",{class:!0});var re=D(p);for(let K=0;K<i.length;K+=1)i[K].l(re);re.forEach(_),g=S(v),T=E(v,"DIV",{class:!0});var ne=D(T);for(let K=0;K<C.length;K+=1)C[K].l(ne);ne.forEach(_),v.forEach(_),this.h()},h(){$(r,"class","text-0.9em"),$(s,"class","font-300 text-center text-[var(--tertiary-text)] m-y-2"),$(f,"class","w-75%"),$(p,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),$(T,"class","row-center flex-wrap m-b-2"),$(e,"class","col-center p-y-20")},m(u,v){x(u,e,v),h(e,r),z(t,r,null),h(e,l),h(e,s),h(s,a),h(e,c),h(e,f),z(d,f,null),h(e,b),h(e,p);for(let O=0;O<i.length;O+=1)i[O]&&i[O].m(p,null);h(e,g),h(e,T);for(let O=0;O<C.length;O+=1)C[O]&&C[O].m(T,null);q=!0},p(u,v){const O={};if(v&1048577&&(O.$$scope={dirty:v,ctx:u}),t.$set(O),(!q||v&1)&&o!==(o=u[0].project.type+"")&&X(a,o),v&1){k=G(u[0].project.links);let I;for(I=0;I<k.length;I+=1){const W=de(u,k,I);i[I]?(i[I].p(W,v),j(i[I],1)):(i[I]=_e(W),i[I].c(),j(i[I],1),i[I].m(p,null))}for(J(),I=k.length;I<i.length;I+=1)m(I);Q()}if(v&1){y=G(u[0].project.skills);let I;for(I=0;I<y.length;I+=1){const W=ue(u,y,I);C[I]?(C[I].p(W,v),j(C[I],1)):(C[I]=pe(W),C[I].c(),j(C[I],1),C[I].m(T,null))}for(J(),I=y.length;I<C.length;I+=1)V(I);Q()}},i(u){if(!q){j(t.$$.fragment,u),j(d.$$.fragment,u);for(let v=0;v<k.length;v+=1)j(i[v]);for(let v=0;v<y.length;v+=1)j(C[v]);q=!0}},o(u){P(t.$$.fragment,u),P(d.$$.fragment,u),i=i.filter(Boolean);for(let v=0;v<i.length;v+=1)P(i[v]);C=C.filter(Boolean);for(let v=0;v<C.length;v+=1)P(C[v]);q=!1},d(u){u&&_(e),A(t),A(d),le(i,u),le(C,u)}}}function Ae(n){let e,r,t,l,s="No description",o;return r=new Z({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),M(r.$$.fragment),t=N(),l=w("p"),l.textContent=s,this.h()},l(a){e=E(a,"DIV",{class:!0});var c=D(e);U(r.$$.fragment,c),t=S(c),l=E(c,"P",{class:!0,["data-svelte-h"]:!0}),te(l)!=="svelte-1ugej71"&&(l.textContent=s),c.forEach(_),this.h()},h(){$(l,"class","font-300"),$(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,c){x(a,e,c),z(r,e,null),h(e,t),h(e,l),o=!0},p:F,i(a){o||(j(r.$$.fragment,a),o=!0)},o(a){P(r.$$.fragment,a),o=!1},d(a){a&&_(e),A(r)}}}function Le(n){let e,r;return e=new De({props:{content:n[5](n[0].project.description)}}),{c(){M(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){z(e,t,l),r=!0},p(t,l){const s={};l&1&&(s.content=t[5](t[0].project.description)),e.$set(s)},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){P(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function We(n){let e,r,t,l,s="No screenshots",o;return r=new Z({props:{icon:"i-carbon-image",classes:"text-3.5em"}}),{c(){e=w("div"),M(r.$$.fragment),t=N(),l=w("p"),l.textContent=s,this.h()},l(a){e=E(a,"DIV",{class:!0});var c=D(e);U(r.$$.fragment,c),t=S(c),l=E(c,"P",{class:!0,["data-svelte-h"]:!0}),te(l)!=="svelte-s36p3y"&&(l.textContent=s),c.forEach(_),this.h()},h(){$(l,"class","font-300"),$(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,c){x(a,e,c),z(r,e,null),h(e,t),h(e,l),o=!0},p:F,i(a){o||(j(r.$$.fragment,a),o=!0)},o(a){P(r.$$.fragment,a),o=!1},d(a){a&&_(e),A(r)}}}function Re(n){let e,r=G(n[4]),t=[];for(let l=0;l<r.length;l+=1)t[l]=he(fe(n,r,l));return{c(){e=w("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=E(l,"DIV",{class:!0});var s=D(e);for(let o=0;o<t.length;o+=1)t[o].l(s);s.forEach(_),this.h()},h(){$(e,"class","px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10")},m(l,s){x(l,e,s);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null)},p(l,s){if(s&18){r=G(l[4]);let o;for(o=0;o<r.length;o+=1){const a=fe(l,r,o);t[o]?t[o].p(a,s):(t[o]=he(a),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=r.length}},i:F,o:F,d(l){l&&_(e),le(t,l)}}}function Ye(n){let e,r,t,l,s=n[13].label+"",o,a,c,f;function d(){return n[8](n[15])}return{c(){e=w("div"),r=w("div"),t=N(),l=w("p"),o=R(s),a=N(),this.h()},l(b){e=E(b,"DIV",{class:!0});var p=D(e);r=E(p,"DIV",{class:!0,style:!0}),D(r).forEach(_),t=S(p),l=E(p,"P",{class:!0});var g=D(l);o=Y(g,s),g.forEach(_),a=S(p),p.forEach(_),this.h()},h(){$(r,"class","screenshot aspect-video bg-contain w-100% cursor-pointer svelte-1cqm4u5"),$(r,"style",`background-image: url(${n[13].src});`),$(l,"class","text-[var(--tertiary-text)] font-300"),$(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(b,p){x(b,e,p),h(e,r),h(e,t),h(e,l),h(l,o),h(e,a),c||(f=B(e,"click",d),c=!0)},p(b,p){n=b},d(b){b&&_(e),c=!1,f()}}}function Ke(n){let e,r,t,l,s=n[13].label+"",o,a,c,f;function d(){return n[7](n[15])}return{c(){e=w("div"),r=w("div"),t=N(),l=w("p"),o=R(s),a=N(),this.h()},l(b){e=E(b,"DIV",{class:!0});var p=D(e);r=E(p,"DIV",{class:!0,style:!0}),D(r).forEach(_),t=S(p),l=E(p,"P",{class:!0});var g=D(l);o=Y(g,s),g.forEach(_),a=S(p),p.forEach(_),this.h()},h(){$(r,"class","screenshot aspect-video bg-contain w-100% cursor-pointer svelte-1cqm4u5"),$(r,"style",`background-image: url(${n[13].thumbnail});`),$(l,"class","text-[var(--tertiary-text)] font-300"),$(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(b,p){x(b,e,p),h(e,r),h(e,t),h(e,l),h(l,o),h(e,a),c||(f=B(e,"click",d),c=!0)},p(b,p){n=b},d(b){b&&_(e),c=!1,f()}}}function he(n){let e;function r(s,o){return s[13].src.endsWith(".mp4")||s[13].src.endsWith(".webm")?Ke:Ye}let l=r(n)(n);return{c(){l.c(),e=H()},l(s){l.l(s),e=H()},m(s,o){l.m(s,o),x(s,e,o)},p(s,o){l.p(s,o)},d(s){s&&_(e),l.d(s)}}}function Fe(n){let e,r;return e=new Se({props:{screenshot:n[3],onClose:n[11]}}),{c(){M(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){z(e,t,l),r=!0},p(t,l){const s={};l&8&&(s.screenshot=t[3]),l&2&&(s.onClose=t[11]),e.$set(s)},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){P(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Ge(n){let e,r,t,l,s,o,a,c,f="Close",d,b;return{c(){e=w("div"),r=w("div"),t=w("video"),l=w("source"),o=R(`
				Your browser does not support the video tag.`),a=N(),c=w("button"),c.textContent=f,this.h()},l(p){e=E(p,"DIV",{class:!0});var g=D(e);r=E(g,"DIV",{class:!0});var T=D(r);t=E(T,"VIDEO",{class:!0});var q=D(t);l=E(q,"SOURCE",{src:!0,type:!0}),o=Y(q,`
				Your browser does not support the video tag.`),q.forEach(_),T.forEach(_),a=S(g),c=E(g,"BUTTON",{class:!0,["data-svelte-h"]:!0}),te(c)!=="svelte-9oxiyx"&&(c.textContent=f),g.forEach(_),this.h()},h(){ae(l.src,s=n[3].src)||$(l,"src",s),$(l,"type","video/mp4"),$(t,"class","w-full h-auto"),t.controls=!0,t.autoplay=!0,$(r,"class","modal-content svelte-1cqm4u5"),$(c,"class","close-modal svelte-1cqm4u5"),$(e,"class","modal-background svelte-1cqm4u5")},m(p,g){x(p,e,g),h(e,r),h(r,t),h(t,l),h(t,o),h(e,a),h(e,c),d||(b=[B(r,"click",we(n[6])),B(c,"click",n[9]),B(e,"click",n[10])],d=!0)},p(p,g){g&8&&!ae(l.src,s=p[3].src)&&$(l,"src",s)},i:F,o:F,d(p){p&&_(e),d=!1,ve(b)}}}function He(n){let e,r,t,l,s,o,a,c,f,d,b;e=new Ve({props:{title:n[2]}});const p=[xe,Oe],g=[];function T(m,y){return m[0].project===void 0?0:1}l=T(n),s=g[l]=p[l](n);const q=[Ge,Fe],k=[];function i(m,y){return y&8&&(a=null),a==null&&(a=!!(m[3]&&m[3].src.endsWith(".mp4"))),a?0:m[3]?1:-1}return~(c=i(n,-1))&&(f=k[c]=q[c](n)),{c(){M(e.$$.fragment),r=N(),t=w("div"),s.c(),o=N(),f&&f.c(),d=H(),this.h()},l(m){U(e.$$.fragment,m),r=S(m),t=E(m,"DIV",{class:!0});var y=D(t);s.l(y),y.forEach(_),o=S(m),f&&f.l(m),d=H(),this.h()},h(){$(t,"class","pb-10 overflow-x-hidden col flex-1")},m(m,y){z(e,m,y),x(m,r,y),x(m,t,y),g[l].m(t,null),x(m,o,y),~c&&k[c].m(m,y),x(m,d,y),b=!0},p(m,[y]){const C={};y&4&&(C.title=m[2]),e.$set(C);let V=l;l=T(m),l===V?g[l].p(m,y):(J(),P(g[V],1,1,()=>{g[V]=null}),Q(),s=g[l],s?s.p(m,y):(s=g[l]=p[l](m),s.c()),j(s,1),s.m(t,null));let u=c;c=i(m,y),c===u?~c&&k[c].p(m,y):(f&&(J(),P(k[u],1,1,()=>{k[u]=null}),Q()),~c?(f=k[c],f?f.p(m,y):(f=k[c]=q[c](m),f.c()),j(f,1),f.m(d.parentNode,d)):f=null)},i(m){b||(j(e.$$.fragment,m),j(s),j(f),b=!0)},o(m){P(e.$$.fragment,m),P(s),P(f),b=!1},d(m){m&&(_(r),_(t),_(o),_(d)),A(e,m),g[l].d(),~c&&k[c].d(m)}}}function Je(n,e,r){var q;let t,l,{data:s}=e;const o=((q=s.project)==null?void 0:q.screenshots)??[];let a;const c=k=>{if(!k)return"";let i=k.replace(/\n\n/g,"<br><br>");return i=i.replace(/\[\s*([^]+?)\s*\]/g,'<div class="math-block">$1</div>'),i=i.replace(/\(\s*([^]+?)\s*\)/g,'<span class="math-inline">$1</span>'),i};function f(k){L.call(this,n,k)}const d=k=>r(1,a=k),b=k=>r(1,a=k),p=()=>r(1,a=void 0),g=()=>r(1,a=void 0),T=()=>r(1,a=void 0);return n.$$set=k=>{"data"in k&&r(0,s=k.data)},n.$$.update=()=>{n.$$.dirty&2&&r(3,t=typeof a<"u"&&o[a]?o[a]:void 0),n.$$.dirty&1&&r(2,l=s.project?`${s.project.name} - ${se}`:se)},[s,a,l,t,o,c,f,d,b,p,g,T]}class it extends ge{constructor(e){super(),be(this,e,Je,He,me,{data:0})}}export{it as component,ct as universal};
