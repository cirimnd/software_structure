import{e as B,f as $,r as u,ah as j,j as D,A as f,T as _,a3 as C,F,ar as N,I as R,a6 as P,a as n,n as d,t as b,m as z,al as T,aw as U,y as S,ab as A,g as M}from"./index-CpaKEeMo.js";const[O,i]=B("image"),V={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:b,errorIcon:z("photo-fail"),iconPrefix:String,showLoading:b,loadingIcon:z("photo"),crossorigin:String,referrerpolicy:String};var q=$({name:O,props:V,emits:["load","error"],setup(r,{emit:g,slots:s}){const t=u(!1),o=u(!0),a=u(),{$Lazyload:l}=j().proxy,E=D(()=>{const e={width:f(r.width),height:f(r.height)};return _(r.radius)&&(e.overflow="hidden",e.borderRadius=f(r.radius)),e});C(()=>r.src,()=>{t.value=!1,o.value=!0});const v=e=>{o.value&&(o.value=!1,g("load",e))},h=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:a.value,enumerable:!0}),v(e)},m=e=>{t.value=!0,o.value=!1,g("error",e)},y=(e,c,I)=>I?I():n(A,{name:e,size:r.iconSize,class:c,classPrefix:r.iconPrefix},null),k=()=>{if(o.value&&r.showLoading)return n("div",{class:i("loading")},[y(r.loadingIcon,i("loading-icon"),s.loading)]);if(t.value&&r.showError)return n("div",{class:i("error")},[y(r.errorIcon,i("error-icon"),s.error)])},x=()=>{if(t.value||!r.src)return;const e={alt:r.alt,class:i("img"),style:{objectFit:r.fit,objectPosition:r.position},crossorigin:r.crossorigin,referrerpolicy:r.referrerpolicy};return r.lazyLoad?T(n("img",S({ref:a},e),null),[[U("lazy"),r.src]]):n("img",S({ref:a,src:r.src,onLoad:v,onError:m},e),null)},w=({el:e})=>{const c=()=>{e===a.value&&o.value&&h()};a.value?c():P(c)},L=({el:e})=>{e===a.value&&!t.value&&m()};return l&&F&&(l.$on("loaded",w),l.$on("error",L),N(()=>{l.$off("loaded",w),l.$off("error",L)})),R(()=>{P(()=>{var e;(e=a.value)!=null&&e.complete&&!r.lazyLoad&&h()})}),()=>{var e;return n("div",{class:i({round:r.round,block:r.block}),style:E.value},[x(),k(),(e=s.default)==null?void 0:e.call(s)])}}});const H=M(q);export{H as I};
