import{e as A,f as P,r as c,g as h,s as w,h as C,o as k,c as x,b as _,a as o,w as n,d as g,i as R,F as N,u as b,j as D,k as U,l as L,m as O,n as B,p as F,P as j,_ as q}from"./index-WXGUVd8R.js";import{l as K,P as J}from"./index-CYz0xxHG.js";/* empty css              */import{C as H}from"./index-CBuLn4G5.js";import"./index-CMBfAjpb.js";import{F as M}from"./index-CVxqqtcy.js";import{R as W}from"./index-lwTdiljL.js";import{s as $,a as G}from"./function-call-2XNXHHU2.js";import"./request-BsTyHzWx.js";import"./use-route-BdHUjtqw.js";import"./index-DLf2m0OP.js";import"./use-placeholder-ClGZrsmh.js";A($);const v={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_BASE_API:"https://localhost:444",VITE_APP_SOCKET_URL:"https://localhost:3000",VITE_APP_TITLE:"面试系统",VITE_USER_NODE_ENV:"production"},z={class:"container"},Q=P({__name:"LoginPage",setup(X){const l=c();h(()=>{const{DEV:s}=v;s&&localStorage.getItem("isAuth")!="true"&&G({title:"温馨提醒",message:`开发环境中使用了自签证书，需要浏览器信任，故请在确认后，信任在新窗口弹出的两个网站，否则无法使用相应功能
(浏览器可能会阻止弹出多个窗口，请授权后刷新)
(信任的具体操作：高级->继续前往 "xxx .com" ;若可以正常打开即已信任，回到登录界面即可)`,messageAlign:"left"}).then(()=>{if(l.value){l.value.target="_blank";const{VITE_APP_BASE_API:e,VITE_APP_SOCKET_URL:u}=v;l.value.href=u,l.value.click(),l.value.href=e,l.value.click()}}).catch(()=>{w(`T_T
再次刷新可以去信任`)})});const p=c("学生"),t=C({username:"",password:"",role:"CANDICATE"}),E=[{text:"学生",value:"CANDICATE"},{text:"专家",value:"INTERVIEWER"}],r=c(!1),I=({selectedOptions:s})=>{r.value=!1,p.value=s[0].text,t.role=s[0].value},i=b(),m=D(),f=async function(){try{const s=await K(t);if(s.msg=="success"){if(U("登录成功"),t.role=="CANDICATE"){const e=L();e.data.username=t.username,sessionStorage.setItem("data",JSON.stringify(e.data)),sessionStorage.setItem("store","student"),m.query.redirect?i.push(m.query.redirect):i.push("/studentHome")}else if(t.role=="INTERVIEWER"){const e=O();e.data.username=t.username,m.query.redirect?i.push(m.query.redirect):i.push("/expertHome"),sessionStorage.setItem("data",JSON.stringify(e.data)),sessionStorage.setItem("store","expert")}localStorage.setItem("isAuth","true"),sessionStorage.setItem("isAuthenticated",JSON.stringify(!0))}else B(s.msg)}catch(s){console.error(s)}};return(s,e)=>{const u=W,d=M,V=F("router-link"),S=H,T=J,y=j;return k(),x(N,null,[_("div",z,[o(S,{inset:"",class:"login-box"},{default:n(()=>[o(u,{class:"main title",justify:"center"},{default:n(()=>e[6]||(e[6]=[g("登录")])),_:1}),o(d,{class:"title",modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=a=>p.value=a),"is-link":"",readonly:"",label:"身份",placeholder:"请选择身份",onClick:e[1]||(e[1]=a=>r.value=!0)},null,8,["modelValue"]),o(d,{class:"title",label:"账号",modelValue:t.username,"onUpdate:modelValue":e[2]||(e[2]=a=>t.username=a),placeholder:"请输入账号"},null,8,["modelValue"]),o(d,{class:"title",label:"密码",modelValue:t.password,"onUpdate:modelValue":e[3]||(e[3]=a=>t.password=a),placeholder:"请输入密码",type:"password",onKeyup:R(f,["enter"])},null,8,["modelValue"]),o(u,{justify:"center"},{default:n(()=>[_("button",{class:"login-btn title",onClick:f},"登录")]),_:1}),o(u,{justify:"end"},{default:n(()=>[o(V,{class:"register-btn title",to:"/register"},{default:n(()=>e[7]||(e[7]=[g("没有账号？立即注册")])),_:1})]),_:1})]),_:1}),o(y,{class:"title",show:r.value,"onUpdate:show":e[5]||(e[5]=a=>r.value=a),round:"",position:"bottom"},{default:n(()=>[o(T,{columns:E,onCancel:e[4]||(e[4]=a=>r.value=!1),onConfirm:I})]),_:1},8,["show"])]),_("a",{ref_key:"auth",ref:l,style:{display:"none"}},null,512)],64)}}}),me=q(Q,[["__scopeId","data-v-77fedea6"]]);export{me as default};