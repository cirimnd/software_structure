import{q as R,f as w,N as q,a as n,a9 as P,aa as L,L as B,y,K as T,e as D,v as O,D as V,C as h,ab as j,T as z,a7 as G,$ as F,m as K,r as M,a0 as U,o as k,c as I,w as l,b as c,ac as X,ad as Y,F as C,a1 as A,X as H,_ as J}from"./index-WXGUVd8R.js";import{R as Q}from"./index-lwTdiljL.js";/* empty css              */import{r as W,u as Z}from"./use-route-BdHUjtqw.js";import{S as ee,a as te}from"./index-Dh6gCNFC.js";const[E,ne]=R("grid"),oe={square:Boolean,center:B,border:B,gutter:y,reverse:Boolean,iconSize:y,direction:String,clickable:Boolean,columnNum:T(4)},N=Symbol(E);var re=w({name:E,props:oe,setup(e,{slots:o}){const{linkChildren:r}=q(N);return r({props:e}),()=>{var u;return n("div",{style:{paddingLeft:P(e.gutter)},class:[ne(),{[L]:e.border&&!e.gutter}]},[(u=o.default)==null?void 0:u.call(o)])}}});const ae=D(re),[se,_]=R("grid-item"),ie=O({},W,{dot:Boolean,text:String,icon:String,badge:y,iconColor:String,iconPrefix:String,badgeProps:Object});var le=w({name:se,props:ie,setup(e,{slots:o}){const{parent:r,index:u}=V(N),t=Z();if(!r)return;const d=h(()=>{const{square:a,gutter:s,columnNum:i}=r.props,g=`${100/+i}%`,m={flexBasis:g};if(a)m.paddingTop=g;else if(s){const p=P(s);m.paddingRight=p,u.value>=+i&&(m.marginTop=p)}return m}),v=h(()=>{const{square:a,gutter:s}=r.props;if(a&&s){const i=P(s);return{right:i,bottom:i,height:"auto"}}}),f=()=>{if(o.icon)return n(G,z({dot:e.dot,content:e.badge},e.badgeProps),{default:o.icon});if(e.icon)return n(F,{dot:e.dot,name:e.icon,size:r.props.iconSize,badge:e.badge,class:_("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null)},x=()=>{if(o.text)return o.text();if(e.text)return n("span",{class:_("text")},[e.text])},b=()=>o.default?o.default():[f(),x()];return()=>{const{center:a,border:s,square:i,gutter:g,reverse:m,direction:p,clickable:S}=r.props,$=[_("content",[p,{center:a,square:i,reverse:m,clickable:S,surround:s&&g}]),{[j]:s}];return n("div",{class:[_({square:i})],style:d.value},[n("div",{role:S?"button":void 0,class:$,style:v.value,tabindex:S?0:void 0,onClick:t},[b()])])}}});const ce=D(le),ue={class:"link-box"},de={class:"sub title"},me=w({__name:"ExpertLink",setup(e){const o=K(),r=M([]);return U(()=>{o.initSocket(),o.socket.on("updateStudents",u=>{r.value=u})}),(u,t)=>{const d=ee,v=te,f=Q,x=ce,b=ae;return k(),I(C,null,[n(v,{class:"my-swipe",autoplay:3e3,"indicator-color":"black"},{default:l(()=>[n(d,null,{default:l(()=>t[0]||(t[0]=[c("h1",{class:"title"},"1",-1)])),_:1}),n(d,null,{default:l(()=>t[1]||(t[1]=[c("h1",{class:"title"},"2",-1)])),_:1}),n(d,null,{default:l(()=>t[2]||(t[2]=[c("h1",{class:"title"},"3",-1)])),_:1}),n(d,null,{default:l(()=>t[3]||(t[3]=[c("h1",{class:"title"},"4",-1)])),_:1})]),_:1}),c("div",ue,[n(f,{justify:"center"},{default:l(()=>t[4]||(t[4]=[c("h1",{class:"main title"},"等待连线学生列表",-1)])),_:1}),n(f,{justify:"center"},{default:l(()=>[X(c("h2",de,"现在无学生，可以稍作休息^_^",512),[[Y,!r.value.length]])]),_:1}),n(b,{gutter:10},{default:l(()=>[(k(!0),I(C,null,A(r.value,a=>(k(),H(x,{key:a.key,icon:"contact-o",text:a.username,to:`/expertInterview?room=${a.room}&setID=${a.setID}`},null,8,["text","to"]))),128))]),_:1}),t[5]||(t[5]=c("div",{style:{height:"50px"}},null,-1))])],64)}}}),xe=J(me,[["__scopeId","data-v-e6ffcbc5"]]);export{xe as default};