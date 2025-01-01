import{i as xe,t as ie}from"../chunks/experience.CrfvwHm3.js";import{s as ke,a as y,f as w,c as T,g as E,h as D,d as _,j as C,i as P,u as $,q as de,z as he,l as A,m as N,n as J,w as ce}from"../chunks/scheduler.DH0DiJHp.js";import{S as we,i as Ee,b as S,d as M,m as j,t as k,c as Y,a as x,e as B,g as Z}from"../chunks/index.C3FYv5gy.js";import{g as ee,e as X}from"../chunks/index.LRSejKNq.js";import{b as fe}from"../chunks/paths.BFRD8ydW.js";import{a as ue,M as Ce}from"../chunks/app.BjSqhlde.js";import{C as De}from"../chunks/CardLogo.Dkftj10_.js";import{M as Ie}from"../chunks/Markdown.BNnYPan4.js";import{T as Ve}from"../chunks/TabTitle.Bay3FyJV.js";import{C as ge}from"../chunks/Chip.E0iusfZH.js";import{B as ye}from"../chunks/Banner.BWeuDj2y.js";import{U as ne}from"../chunks/UIcon.B61WjEsW.js";import{C as Te}from"../chunks/CardDivider.D3p2VCsv.js";function Pe({params:i}){if(i.slug)return{experience:xe.find(l=>l.slug===i.slug)}}const tt=Object.freeze(Object.defineProperty({__proto__:null,load:Pe},Symbol.toStringTag,{value:"Module"}));function pe(i,e,l){const t=i.slice();return t[2]=e[l],t}function me(i,e,l){const t=i.slice();return t[2]=e[l],t}function Se(i){let e,l,t,r,n,f,s,a;l=new ye({props:{img:ee(i[0].experience.logo),$$slots:{default:[Ae]},$$scope:{ctx:i}}});const m=[Ue,Ne],o=[];function b(d,v){return d[0].experience.description?0:1}return f=b(i),s=o[f]=m[f](i),{c(){e=w("div"),S(l.$$.fragment),t=y(),r=w("div"),n=w("div"),s.c(),this.h()},l(d){e=E(d,"DIV",{class:!0});var v=D(e);M(l.$$.fragment,v),t=T(v),r=E(v,"DIV",{class:!0});var z=D(r);n=E(z,"DIV",{class:!0});var V=D(n);s.l(V),V.forEach(_),z.forEach(_),v.forEach(_),this.h()},h(){C(n,"class","px-10px m-y-5"),C(r,"class","pt-3 pb-1 overflow-x-hidden w-full"),C(e,"class","flex flex-col items-center overflow-x-hidden")},m(d,v){P(d,e,v),j(l,e,null),$(e,t),$(e,r),$(r,n),o[f].m(n,null),a=!0},p(d,v){const z={};v&1&&(z.img=ee(d[0].experience.logo)),v&129&&(z.$$scope={dirty:v,ctx:d}),l.$set(z);let V=f;f=b(d),f===V?o[f].p(d,v):(Z(),k(o[V],1,1,()=>{o[V]=null}),Y(),s=o[f],s?s.p(d,v):(s=o[f]=m[f](d),s.c()),x(s,1),s.m(n,null))},i(d){a||(x(l.$$.fragment,d),x(s),a=!0)},o(d){k(l.$$.fragment,d),k(s),a=!1},d(d){d&&_(e),B(l),o[f].d()}}}function Me(i){let e,l,t,r,n="Could not load experience data...",f;return l=new ne({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),S(l.$$.fragment),t=y(),r=w("p"),r.textContent=n,this.h()},l(s){e=E(s,"DIV",{class:!0});var a=D(e);M(l.$$.fragment,a),t=T(a),r=E(a,"P",{class:!0,"data-svelte-h":!0}),de(r)!=="svelte-1o82fhi"&&(r.textContent=n),a.forEach(_),this.h()},h(){C(r,"class","font-300"),C(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(s,a){P(s,e,a),j(l,e,null),$(e,t),$(e,r),f=!0},p:he,i(s){f||(x(l.$$.fragment,s),f=!0)},o(s){k(l.$$.fragment,s),f=!1},d(s){s&&_(e),B(l)}}}function je(i){let e=i[0].experience.name+"",l;return{c(){l=A(e)},l(t){l=N(t,e)},m(t,r){P(t,l,r)},p(t,r){r&1&&e!==(e=t[0].experience.name+"")&&J(l,e)},d(t){t&&_(l)}}}function Be(i){let e,l,t,r,n=i[2].label+"",f,s,a;return l=new ne({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),S(l.$$.fragment),t=y(),r=w("span"),f=A(n),s=y(),this.h()},l(m){e=E(m,"DIV",{class:!0});var o=D(e);M(l.$$.fragment,o),t=T(o),r=E(o,"SPAN",{});var b=D(r);f=N(b,n),b.forEach(_),o.forEach(_),s=T(m),this.h()},h(){C(e,"class","row-center gap-2")},m(m,o){P(m,e,o),j(l,e,null),$(e,t),$(e,r),$(r,f),P(m,s,o),a=!0},p(m,o){(!a||o&1)&&n!==(n=m[2].label+"")&&J(f,n)},i(m){a||(x(l.$$.fragment,m),a=!0)},o(m){k(l.$$.fragment,m),a=!1},d(m){m&&(_(e),_(s)),B(l)}}}function $e(i){let e,l;return e=new ge({props:{href:i[2].to,$$slots:{default:[Be]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.href=t[2].to),r&129&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function ze(i){let e,l,t,r=i[2].name+"",n,f,s;return e=new De({props:{src:ee(i[2].logo),alt:i[2].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){S(e.$$.fragment),l=y(),t=w("span"),n=A(r),f=y(),this.h()},l(a){M(e.$$.fragment,a),l=T(a),t=E(a,"SPAN",{class:!0});var m=D(t);n=N(m,r),m.forEach(_),f=T(a),this.h()},h(){C(t,"class","text-[0.9em]")},m(a,m){j(e,a,m),P(a,l,m),P(a,t,m),$(t,n),P(a,f,m),s=!0},p(a,m){const o={};m&1&&(o.src=ee(a[2].logo)),m&1&&(o.alt=a[2].name),e.$set(o),(!s||m&1)&&r!==(r=a[2].name+"")&&J(n,r)},i(a){s||(x(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){a&&(_(l),_(t),_(f)),B(e,a)}}}function _e(i){let e,l;return e=new ge({props:{classes:"inline-flex flex-row items-center justify-center",href:`${fe}/skills/${i[2].slug}`,$$slots:{default:[ze]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.href=`${fe}/skills/${t[2].slug}`),r&129&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function Ae(i){let e,l,t,r,n,f=i[0].experience.company+"",s,a,m=i[0].experience.location+"",o,b,d=i[0].experience.type+"",v,z,V,Q=ue(i[0].experience.period.from,i[0].experience.period.to)+"",W,te,K,L,le,O,re,R,U;t=new Ce({props:{$$slots:{default:[je]},$$scope:{ctx:i}}}),L=new Te({});let F=X(i[0].experience.links),h=[];for(let c=0;c<F.length;c+=1)h[c]=$e(me(i,F,c));const ve=c=>k(h[c],1,1,()=>{h[c]=null});let G=X(i[0].experience.skills),g=[];for(let c=0;c<G.length;c+=1)g[c]=_e(pe(i,G,c));const be=c=>k(g[c],1,1,()=>{g[c]=null});return{c(){e=w("div"),l=w("div"),S(t.$$.fragment),r=y(),n=w("p"),s=A(f),a=A(" · "),o=A(m),b=A(" · "),v=A(d),z=y(),V=w("p"),W=A(Q),te=y(),K=w("div"),S(L.$$.fragment),le=y(),O=w("div");for(let c=0;c<h.length;c+=1)h[c].c();re=y(),R=w("div");for(let c=0;c<g.length;c+=1)g[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var u=D(e);l=E(u,"DIV",{class:!0});var I=D(l);M(t.$$.fragment,I),I.forEach(_),r=T(u),n=E(u,"P",{class:!0});var p=D(n);s=N(p,f),a=N(p," · "),o=N(p,m),b=N(p," · "),v=N(p,d),p.forEach(_),z=T(u),V=E(u,"P",{class:!0});var q=D(V);W=N(q,Q),q.forEach(_),te=T(u),K=E(u,"DIV",{class:!0});var ae=D(K);M(L.$$.fragment,ae),ae.forEach(_),le=T(u),O=E(u,"DIV",{class:!0});var se=D(O);for(let H=0;H<h.length;H+=1)h[H].l(se);se.forEach(_),re=T(u),R=E(u,"DIV",{class:!0});var oe=D(R);for(let H=0;H<g.length;H+=1)g[H].l(oe);oe.forEach(_),u.forEach(_),this.h()},h(){C(l,"class","text-0.9em"),C(n,"class","font-300 text-[var(--tertiary-text)] m-y-2 text-center"),C(V,"class","font-300 text-0.9em text-[var(--tertiary-text)] m-y-2 text-center"),C(K,"class","w-75%"),C(O,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),C(R,"class","row-center flex-wrap m-b-2"),C(e,"class","col-center p-y-20")},m(c,u){P(c,e,u),$(e,l),j(t,l,null),$(e,r),$(e,n),$(n,s),$(n,a),$(n,o),$(n,b),$(n,v),$(e,z),$(e,V),$(V,W),$(e,te),$(e,K),j(L,K,null),$(e,le),$(e,O);for(let I=0;I<h.length;I+=1)h[I]&&h[I].m(O,null);$(e,re),$(e,R);for(let I=0;I<g.length;I+=1)g[I]&&g[I].m(R,null);U=!0},p(c,u){const I={};if(u&129&&(I.$$scope={dirty:u,ctx:c}),t.$set(I),(!U||u&1)&&f!==(f=c[0].experience.company+"")&&J(s,f),(!U||u&1)&&m!==(m=c[0].experience.location+"")&&J(o,m),(!U||u&1)&&d!==(d=c[0].experience.type+"")&&J(v,d),(!U||u&1)&&Q!==(Q=ue(c[0].experience.period.from,c[0].experience.period.to)+"")&&J(W,Q),u&1){F=X(c[0].experience.links);let p;for(p=0;p<F.length;p+=1){const q=me(c,F,p);h[p]?(h[p].p(q,u),x(h[p],1)):(h[p]=$e(q),h[p].c(),x(h[p],1),h[p].m(O,null))}for(Z(),p=F.length;p<h.length;p+=1)ve(p);Y()}if(u&1){G=X(c[0].experience.skills);let p;for(p=0;p<G.length;p+=1){const q=pe(c,G,p);g[p]?(g[p].p(q,u),x(g[p],1)):(g[p]=_e(q),g[p].c(),x(g[p],1),g[p].m(R,null))}for(Z(),p=G.length;p<g.length;p+=1)be(p);Y()}},i(c){if(!U){x(t.$$.fragment,c),x(L.$$.fragment,c);for(let u=0;u<F.length;u+=1)x(h[u]);for(let u=0;u<G.length;u+=1)x(g[u]);U=!0}},o(c){k(t.$$.fragment,c),k(L.$$.fragment,c),h=h.filter(Boolean);for(let u=0;u<h.length;u+=1)k(h[u]);g=g.filter(Boolean);for(let u=0;u<g.length;u+=1)k(g[u]);U=!1},d(c){c&&_(e),B(t),B(L),ce(h,c),ce(g,c)}}}function Ne(i){let e,l,t,r,n="No description...",f;return l=new ne({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),S(l.$$.fragment),t=y(),r=w("p"),r.textContent=n,this.h()},l(s){e=E(s,"DIV",{class:!0});var a=D(e);M(l.$$.fragment,a),t=T(a),r=E(a,"P",{class:!0,"data-svelte-h":!0}),de(r)!=="svelte-kl0ixf"&&(r.textContent=n),a.forEach(_),this.h()},h(){C(r,"class","font-300"),C(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(s,a){P(s,e,a),j(l,e,null),$(e,t),$(e,r),f=!0},p:he,i(s){f||(x(l.$$.fragment,s),f=!0)},o(s){k(l.$$.fragment,s),f=!1},d(s){s&&_(e),B(l)}}}function Ue(i){let e,l;return e=new Ie({props:{content:i[0].experience.description??"This place is yet to be filled..."}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){j(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.content=t[0].experience.description??"This place is yet to be filled..."),e.$set(n)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function qe(i){let e,l,t,r,n,f;e=new Ve({props:{title:i[1]}});const s=[Me,Se],a=[];function m(o,b){return o[0].experience===void 0?0:1}return r=m(i),n=a[r]=s[r](i),{c(){S(e.$$.fragment),l=y(),t=w("div"),n.c(),this.h()},l(o){M(e.$$.fragment,o),l=T(o),t=E(o,"DIV",{class:!0});var b=D(t);n.l(b),b.forEach(_),this.h()},h(){C(t,"class","pb-10 overflow-x-hidden col flex-1")},m(o,b){j(e,o,b),P(o,l,b),P(o,t,b),a[r].m(t,null),f=!0},p(o,[b]){const d={};b&2&&(d.title=o[1]),e.$set(d);let v=r;r=m(o),r===v?a[r].p(o,b):(Z(),k(a[v],1,1,()=>{a[v]=null}),Y(),n=a[r],n?n.p(o,b):(n=a[r]=s[r](o),n.c()),x(n,1),n.m(t,null))},i(o){f||(x(e.$$.fragment,o),x(n),f=!0)},o(o){k(e.$$.fragment,o),k(n),f=!1},d(o){o&&(_(l),_(t)),B(e,o),a[r].d()}}}function Le(i,e,l){let t,{data:r}=e;return i.$$set=n=>{"data"in n&&l(0,r=n.data)},i.$$.update=()=>{i.$$.dirty&1&&l(1,t=r.experience?`${r.experience.name} - ${ie}`:ie)},[r,t]}class lt extends we{constructor(e){super(),Ee(this,e,Le,qe,ke,{data:0})}}export{lt as component,tt as universal};