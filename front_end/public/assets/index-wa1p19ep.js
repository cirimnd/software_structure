import{e as $,T as ve,h as P,U as z,f as W,n as K,V as N,W as V,r as w,X as he,j as p,i as oe,k as ae,Y as ge,Z as le,a as m,$ as ie,a0 as X,a1 as _,t as ce,m as be,u as Te,a2 as Oe,a3 as j,a4 as pe,z as Z,y as ke,a5 as L,a6 as J,a7 as ye,g as Ce}from"./index-CpaKEeMo.js";import{r as se}from"./request-M96MMQ4W.js";const[xe,T,Q]=$("picker"),ue=e=>e.find(a=>!a.disabled)||e[0];function Ee(e,a){const o=e[0];if(o){if(Array.isArray(o))return"multiple";if(a.children in o)return"cascade"}return"default"}function B(e,a){a=z(a,0,e.length);for(let o=a;o<e.length;o++)if(!e[o].disabled)return o;for(let o=a-1;o>=0;o--)if(!e[o].disabled)return o;return 0}const ee=(e,a,o)=>a!==void 0&&!!e.find(s=>s[o.value]===a);function G(e,a,o){const s=e.findIndex(f=>f[o.value]===a),i=B(e,s);return e[i]}function we(e,a,o){const s=[];let i={[a.children]:e},f=0;for(;i&&i[a.children];){const v=i[a.children],h=o.value[f];if(i=ve(h)?G(v,h,a):void 0,!i&&v.length){const u=ue(v)[a.value];i=G(v,u,a)}f++,s.push(v)}return s}function Pe(e){const{transform:a}=window.getComputedStyle(e),o=a.slice(7,a.length-1).split(", ")[5];return Number(o)}function Se(e){return P({text:"text",value:"value",children:"children"},e)}const te=200,ne=300,Ie=15,[re,q]=$("picker-column"),me=Symbol(re);var He=W({name:re,props:{value:K,fields:N(Object),options:V(),readonly:Boolean,allowHtml:Boolean,optionHeight:N(Number),swipeDuration:N(K),visibleOptionNum:N(K)},emits:["change","clickOption","scrollInto"],setup(e,{emit:a,slots:o}){let s,i,f,v,h;const u=w(),g=w(),r=w(0),d=w(0),y=he(),C=()=>e.options.length,M=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,k=c=>{let t=B(e.options,c);const n=-t*e.optionHeight,l=()=>{t>C()-1&&(t=B(e.options,c));const O=e.options[t][e.fields.value];O!==e.value&&a("change",O)};s&&n!==r.value?h=l:l(),r.value=n},b=()=>e.readonly||!e.options.length,A=c=>{s||b()||(h=null,d.value=te,k(c),a("clickOption",e.options[c]))},x=c=>z(Math.round(-c/e.optionHeight),0,C()-1),D=p(()=>x(r.value)),U=(c,t)=>{const n=Math.abs(c/t);c=r.value+n/.003*(c<0?-1:1);const l=x(c);d.value=+e.swipeDuration,k(l)},S=()=>{s=!1,d.value=0,h&&(h(),h=null)},Y=c=>{if(!b()){if(y.start(c),s){const t=Pe(g.value);r.value=Math.min(0,t-M())}d.value=0,i=r.value,f=Date.now(),v=i,h=null}},F=c=>{if(b())return;y.move(c),y.isVertical()&&(s=!0,ie(c,!0));const t=z(i+y.deltaY.value,-(C()*e.optionHeight),e.optionHeight),n=x(t);n!==D.value&&a("scrollInto",e.options[n]),r.value=t;const l=Date.now();l-f>ne&&(f=l,v=t)},I=()=>{if(b())return;const c=r.value-v,t=Date.now()-f;if(t<ne&&Math.abs(c)>Ie){U(c,t);return}const l=x(r.value);d.value=te,k(l),setTimeout(()=>{s=!1},0)},E=()=>{const c={height:`${e.optionHeight}px`};return e.options.map((t,n)=>{const l=t[e.fields.text],{disabled:O}=t,H=t[e.fields.value],de={role:"button",style:c,tabindex:O?-1:0,class:[q("item",{disabled:O,selected:H===e.value}),t.className],onClick:()=>A(n)},fe={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:l};return m("li",de,[o.option?o.option(t,n):m("div",fe,null)])})};return oe(me),ae({stopMomentum:S}),ge(()=>{const c=s?Math.floor(-r.value/e.optionHeight):e.options.findIndex(l=>l[e.fields.value]===e.value),t=B(e.options,c),n=-t*e.optionHeight;s&&t<c&&S(),r.value=n}),le("touchmove",F,{target:u}),()=>m("div",{ref:u,class:q(),onTouchstartPassive:Y,onTouchend:I,onTouchcancel:I},[m("ul",{ref:g,style:{transform:`translate3d(0, ${r.value+M()}px, 0)`,transitionDuration:`${d.value}ms`,transitionProperty:d.value?"all":"none"},class:q("wrapper"),onTransitionend:S},[E()])])}});const[Me]=$("picker-toolbar"),R={title:String,cancelButtonText:String,confirmButtonText:String},De=["cancel","confirm","title","toolbar"],Ne=Object.keys(R);var _e=W({name:Me,props:R,emits:["confirm","cancel"],setup(e,{emit:a,slots:o}){const s=()=>{if(o.title)return o.title();if(e.title)return m("div",{class:[T("title"),"van-ellipsis"]},[e.title])},i=()=>a("cancel"),f=()=>a("confirm"),v=()=>{var u;const g=(u=e.cancelButtonText)!=null?u:Q("cancel");if(!(!o.cancel&&!g))return m("button",{type:"button",class:[T("cancel"),X],onClick:i},[o.cancel?o.cancel():g])},h=()=>{var u;const g=(u=e.confirmButtonText)!=null?u:Q("confirm");if(!(!o.confirm&&!g))return m("button",{type:"button",class:[T("confirm"),X],onClick:f},[o.confirm?o.confirm():g])};return()=>m("div",{class:T("toolbar")},[o.toolbar?o.toolbar():[v(),s(),h()]])}});const[Be,Fe]=$("picker-group"),Ve=Symbol(Be);P({tabs:V(),activeTab:_(0),nextStepText:String,showToolbar:ce},R);const $e=P({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:_(44),showToolbar:ce,swipeDuration:_(1e3),visibleOptionNum:_(6)},R),Re=P({},$e,{columns:V(),modelValue:V(),toolbarPosition:be("top"),columnsFieldNames:Object});var Ae=W({name:xe,props:Re,emits:["confirm","cancel","change","scrollInto","clickOption","update:modelValue"],setup(e,{emit:a,slots:o}){const s=w(),i=w(e.modelValue.slice(0)),{parent:f}=oe(Ve),{children:v,linkChildren:h}=Te(me);h();const u=p(()=>Se(e.columnsFieldNames)),g=p(()=>Oe(e.optionHeight)),r=p(()=>Ee(e.columns,u.value)),d=p(()=>{const{columns:t}=e;switch(r.value){case"multiple":return t;case"cascade":return we(t,u.value,i);default:return[t]}}),y=p(()=>d.value.some(t=>t.length)),C=p(()=>d.value.map((t,n)=>G(t,i.value[n],u.value))),M=p(()=>d.value.map((t,n)=>t.findIndex(l=>l[u.value.value]===i.value[n]))),k=(t,n)=>{if(i.value[t]!==n){const l=i.value.slice(0);l[t]=n,i.value=l}},b=()=>({selectedValues:i.value.slice(0),selectedOptions:C.value,selectedIndexes:M.value}),A=(t,n)=>{k(n,t),r.value==="cascade"&&i.value.forEach((l,O)=>{const H=d.value[O];ee(H,l,u.value)||k(O,H.length?H[0][u.value.value]:void 0)}),J(()=>{a("change",P({columnIndex:n},b()))})},x=(t,n)=>{const l={columnIndex:n,currentOption:t};a("clickOption",P(b(),l)),a("scrollInto",l)},D=()=>{v.forEach(n=>n.stopMomentum());const t=b();return J(()=>{a("confirm",t)}),t},U=()=>a("cancel",b()),S=()=>d.value.map((t,n)=>m(He,{value:i.value[n],fields:u.value,options:t,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:g.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:l=>A(l,n),onClickOption:l=>x(l,n),onScrollInto:l=>{a("scrollInto",{currentOption:l,columnIndex:n})}},{option:o.option})),Y=t=>{if(y.value){const n={height:`${g.value}px`},l={backgroundSize:`100% ${(t-g.value)/2}px`};return[m("div",{class:T("mask"),style:l},null),m("div",{class:[ye,T("frame")],style:n},null)]}},F=()=>{const t=g.value*+e.visibleOptionNum,n={height:`${t}px`};return m("div",{ref:s,class:T("columns"),style:n},[S(),Y(t)])},I=()=>{if(e.showToolbar&&!f)return m(_e,ke(Z(e,Ne),{onConfirm:D,onCancel:U}),Z(o,De))};j(d,t=>{t.forEach((n,l)=>{n.length&&!ee(n,i.value[l],u.value)&&k(l,ue(n)[u.value.value])})},{immediate:!0});let E;return j(()=>e.modelValue,t=>{!L(t,i.value)&&!L(t,E)&&(i.value=t.slice(0),E=t.slice(0))},{deep:!0}),j(i,t=>{L(t,e.modelValue)||(E=t.slice(0),a("update:modelValue",E))},{immediate:!0}),le("touchmove",ie,{target:s}),ae({confirm:D,getSelectedOptions:()=>C.value}),()=>{var t,n;return m("div",{class:T()},[e.toolbarPosition==="top"?I():null,e.loading?m(pe,{class:T("loading")},null):null,(t=o["columns-top"])==null?void 0:t.call(o),F(),(n=o["columns-bottom"])==null?void 0:n.call(o),e.toolbarPosition==="bottom"?I():null])}}});const Ke=Ce(Ae);function je(e){return se.post("/users/login",e)}function Le(e){return se.post("/users/register",e)}export{Ke as P,je as l,Le as r};
