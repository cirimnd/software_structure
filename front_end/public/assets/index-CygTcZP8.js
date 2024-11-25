import{e as q,f as F,r as U,s as K,X as re,u as ve,j as d,k as Z,a3 as $,an as fe,I as G,ao as de,ap as he,aq as ge,ar as we,Z as me,a as A,t as I,n as V,a1 as D,as as j,a6 as J,at as ye,au as be,av as k,$ as xe,U as R,g as Q,i as Se}from"./index-CpaKEeMo.js";const[ee,z]=q("swipe"),Te={loop:I,width:V,height:V,vertical:Boolean,autoplay:D(0),duration:D(500),touchable:I,lazyRender:Boolean,initialSwipe:D(0),indicatorColor:String,showIndicators:I,stopPropagation:I},te=Symbol(ee);var pe=F({name:ee,props:Te,emits:["change","dragStart","dragEnd"],setup(a,{emit:b,slots:g}){const u=U(),h=U(),t=K({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let x=!1;const r=re(),{children:w,linkChildren:o}=ve(te),i=d(()=>w.length),s=d(()=>t[a.vertical?"height":"width"]),v=d(()=>a.vertical?r.deltaY.value:r.deltaX.value),y=d(()=>t.rect?(a.vertical?t.rect.height:t.rect.width)-s.value*i.value:0),M=d(()=>s.value?Math.ceil(Math.abs(y.value)/s.value):i.value),O=d(()=>i.value*s.value),S=d(()=>(t.active+i.value)%i.value),B=d(()=>{const e=a.vertical?"vertical":"horizontal";return r.direction.value===e}),ae=d(()=>{const e={transitionDuration:`${t.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${+t.offset.toFixed(2)}px)`};if(s.value){const l=a.vertical?"height":"width",n=a.vertical?"width":"height";e[l]=`${O.value}px`,e[n]=a[n]?`${a[n]}px`:""}return e}),ie=e=>{const{active:l}=t;return e?a.loop?R(l+e,-1,i.value):R(l+e,0,M.value):l},X=(e,l=0)=>{let n=e*s.value;a.loop||(n=Math.min(n,-y.value));let f=l-n;return a.loop||(f=R(f,y.value,0)),f},m=({pace:e=0,offset:l=0,emitChange:n})=>{if(i.value<=1)return;const{active:f}=t,c=ie(e),C=X(c,l);if(a.loop){if(w[0]&&C!==y.value){const _=C<y.value;w[0].setOffset(_?O.value:0)}if(w[i.value-1]&&C!==0){const _=C>0;w[i.value-1].setOffset(_?-O.value:0)}}t.active=c,t.offset=C,n&&c!==f&&b("change",S.value)},E=()=>{t.swiping=!0,t.active<=-1?m({pace:i.value}):t.active>=i.value&&m({pace:-i.value})},ne=()=>{E(),r.reset(),k(()=>{t.swiping=!1,m({pace:-1,emitChange:!0})})},Y=()=>{E(),r.reset(),k(()=>{t.swiping=!1,m({pace:1,emitChange:!0})})};let H;const p=()=>clearTimeout(H),P=()=>{p(),+a.autoplay>0&&i.value>1&&(H=setTimeout(()=>{Y(),P()},+a.autoplay))},T=(e=+a.initialSwipe)=>{if(!u.value)return;const l=()=>{var n,f;if(!j(u)){const c={width:u.value.offsetWidth,height:u.value.offsetHeight};t.rect=c,t.width=+((n=a.width)!=null?n:c.width),t.height=+((f=a.height)!=null?f:c.height)}i.value&&(e=Math.min(i.value-1,e),e===-1&&(e=i.value-1)),t.active=e,t.swiping=!0,t.offset=X(e),w.forEach(c=>{c.setOffset(0)}),P()};j(u)?J().then(l):l()},N=()=>T(t.active);let W;const le=e=>{!a.touchable||e.touches.length>1||(r.start(e),x=!1,W=Date.now(),p(),E())},se=e=>{a.touchable&&t.swiping&&(r.move(e),B.value&&(!a.loop&&(t.active===0&&v.value>0||t.active===i.value-1&&v.value<0)||(xe(e,a.stopPropagation),m({offset:v.value}),x||(b("dragStart",{index:S.value}),x=!0))))},L=()=>{if(!a.touchable||!t.swiping)return;const e=Date.now()-W,l=v.value/e;if((Math.abs(l)>.25||Math.abs(v.value)>s.value/2)&&B.value){const f=a.vertical?r.offsetY.value:r.offsetX.value;let c=0;a.loop?c=f>0?v.value>0?-1:1:0:c=-Math[v.value>0?"ceil":"floor"](v.value/s.value),m({pace:c,emitChange:!0})}else v.value&&m({pace:0});x=!1,t.swiping=!1,b("dragEnd",{index:S.value}),P()},oe=(e,l={})=>{E(),r.reset(),k(()=>{let n;a.loop&&e===i.value?n=t.active===0?0:e:n=e%i.value,l.immediate?k(()=>{t.swiping=!1}):t.swiping=!1,m({pace:n-t.active,emitChange:!0})})},ce=(e,l)=>{const n=l===S.value,f=n?{backgroundColor:a.indicatorColor}:void 0;return A("i",{style:f,class:z("indicator",{active:n})},null)},ue=()=>{if(g.indicator)return g.indicator({active:S.value,total:i.value});if(a.showIndicators&&i.value>1)return A("div",{class:z("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(ce)])};return Z({prev:ne,next:Y,state:t,resize:N,swipeTo:oe}),o({size:s,props:a,count:i,activeIndicator:S}),$(()=>a.initialSwipe,e=>T(+e)),$(i,()=>T(t.active)),$(()=>a.autoplay,P),$([ye,be,()=>a.width,()=>a.height],N),$(fe(),e=>{e==="visible"?P():p()}),G(T),de(()=>T(t.active)),he(()=>T(t.active)),ge(p),we(p),me("touchmove",se,{target:h}),()=>{var e;return A("div",{ref:u,class:z()},[A("div",{ref:h,style:ae.value,class:z("track",{vertical:a.vertical}),onTouchstartPassive:le,onTouchend:L,onTouchcancel:L},[(e=g.default)==null?void 0:e.call(g)]),ue()])}}});const Ee=Q(pe),[Pe,Ce]=q("swipe-item");var $e=F({name:Pe,setup(a,{slots:b}){let g;const u=K({offset:0,inited:!1,mounted:!1}),{parent:h,index:t}=Se(te);if(!h)return;const x=d(()=>{const o={},{vertical:i}=h.props;return h.size.value&&(o[i?"height":"width"]=`${h.size.value}px`),u.offset&&(o.transform=`translate${i?"Y":"X"}(${u.offset}px)`),o}),r=d(()=>{const{loop:o,lazyRender:i}=h.props;if(!i||g)return!0;if(!u.mounted)return!1;const s=h.activeIndicator.value,v=h.count.value-1,y=s===0&&o?v:s-1,M=s===v&&o?0:s+1;return g=t.value===s||t.value===y||t.value===M,g}),w=o=>{u.offset=o};return G(()=>{J(()=>{u.mounted=!0})}),Z({setOffset:w}),()=>{var o;return A("div",{class:Ce(),style:x.value},[r.value?(o=b.default)==null?void 0:o.call(b):null])}}});const Ie=Q($e);export{Ie as S,Ee as a};
