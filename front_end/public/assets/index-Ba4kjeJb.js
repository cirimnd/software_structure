import{e as T,f as _,u as V,k as L,a as b,ag as z,t as k,g as S,h as B,n as D,r as C,i as $,j as P,aD as A,a3 as I,av as j,z as R,y as H,al as K,am as M,a6 as Y,aE as q}from"./index-CpaKEeMo.js";import{c as w,C as F}from"./index-xvabcI5u.js";const[O,G]=T("collapse"),N=Symbol(O),J={border:k,accordion:Boolean,modelValue:{type:[String,Number,Array],default:""}};var Q=_({name:O,props:J,emits:["change","update:modelValue"],setup(n,{emit:c,slots:l}){const{linkChildren:v,children:p}=V(N),o=e=>{c("change",e),c("update:modelValue",e)},m=(e,s)=>{const{accordion:r,modelValue:u}=n;o(r?e===u?"":e:s?u.concat(e):u.filter(h=>h!==e))},t=(e={})=>{if(n.accordion)return;typeof e=="boolean"&&(e={expanded:e});const{expanded:s,skipDisabled:r}=e,h=p.filter(d=>d.disabled&&r?d.expanded.value:s??!d.expanded.value).map(d=>d.itemName.value);o(h)},i=e=>{const{accordion:s,modelValue:r}=n;return s?r===e:r.includes(e)};return L({toggleAll:t}),v({toggle:m,isExpanded:i}),()=>{var e;return b("div",{class:[G(),{[z]:n.border}]},[(e=l.default)==null?void 0:e.call(l)])}}});const ne=S(Q),[U,x]=T("collapse-item"),W=["icon","title","value","label","right-icon"],X=B({},w,{name:D,isLink:k,disabled:Boolean,readonly:Boolean,lazyRender:k});var Z=_({name:U,props:X,setup(n,{slots:c}){const l=C(),v=C(),{parent:p,index:o}=$(N);if(!p)return;const m=P(()=>{var a;return(a=n.name)!=null?a:o.value}),t=P(()=>p.isExpanded(m.value)),i=C(t.value),e=A(()=>i.value||!n.lazyRender),s=()=>{t.value?l.value&&(l.value.style.height=""):i.value=!1};I(t,(a,g)=>{if(g===null)return;a&&(i.value=!0),(a?Y:q)(()=>{if(!v.value||!l.value)return;const{offsetHeight:f}=v.value;if(f){const E=`${f}px`;l.value.style.height=a?"0":E,j(()=>{l.value&&(l.value.style.height=a?E:"0")})}else s()})});const r=(a=!t.value)=>{p.toggle(m.value,a)},u=()=>{!n.disabled&&!n.readonly&&r()},h=()=>{const{border:a,disabled:g,readonly:y}=n,f=R(n,Object.keys(w));return y&&(f.isLink=!1),(g||y)&&(f.clickable=!1),b(F,H({role:"button",class:x("title",{disabled:g,expanded:t.value,borderless:!a}),"aria-expanded":String(t.value),onClick:u},f),R(c,W))},d=e(()=>{var a;return K(b("div",{ref:l,class:x("wrapper"),onTransitionend:s},[b("div",{ref:v,class:x("content")},[(a=c.default)==null?void 0:a.call(c)])]),[[M,i.value]])});return L({toggle:r,expanded:t,itemName:m}),()=>b("div",{class:[x({border:o.value&&n.border})]},[h(),d()])}});const le=S(Z);export{le as C,ne as a};
