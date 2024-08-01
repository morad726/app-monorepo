"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[95237],{695237:(e,r,t)=>{t.r(r),t.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var o=t(586330),n=t(490343),s=t(60153),l=t(507140),i=t(16853),c=t(318822),a=t(584186),d=t(654004),u=t(831085);function _error(){return(_error=(0,o.A)((function*(){throw yield a.A.wait(1e3),new l.Zs({autoToast:!0})}))).apply(this,arguments)}function error21(){return _error2.apply(this,arguments)}function _error2(){return(_error2=(0,o.A)((function*(){throw new l.Zs({autoToast:!0})}))).apply(this,arguments)}function Demo1(){return(0,u.jsxs)(n.Stack,{space:"$2",children:[(0,u.jsx)(n.Button,{onPress:function(){!function error00(){throw new Error(`原生 new Error 不显示 toast: ${Date.now()}`)}()},children:"不显示 toast1"}),(0,u.jsx)(n.Button,{onPress:function(){!function error10(){throw new l.i8}()},children:"不显示 toast2"}),(0,u.jsx)(n.Button,{onPress:function(){!function error13(){throw new l.oZ({autoToast:!0,message:"使用基类 new OneKeyError + autoToast 显示 toast"})}()},children:"显示 toast"}),(0,u.jsx)(n.Button,{onPress:function(){!function error11(){throw new l.i8({autoToast:!0})}()},children:"显示 toast2"}),(0,u.jsx)(n.Button,{onPress:function(){!function error12(){throw new l.i8({autoToast:!0,message:"自定义 Error 类，显式传入自定义 message，不再使用内置 i18n"})}()},children:"显示 toast 自定义 message"}),(0,u.jsx)(n.Button,{onPress:(0,o.A)((function*(){yield function error20(){return _error.apply(this,arguments)}()})),children:"异步函数显示 toast （1s 后）"}),(0,u.jsx)(n.Button,{onPress:(0,o.A)((function*(){yield error21()})),children:"异步函数显示 toast (globalListener)"}),(0,u.jsx)(n.Button,{onPress:(0,o.A)((function*(){yield i.Ay.withErrorAutoToast((function(){return error21()}))})),children:"异步函数显示 toast (withErrorAutoToast)"}),(0,u.jsx)(n.Button,{onPress:(0,o.A)((function*(){yield s.A.serviceDemo.demoError()})),children:"调用 background 显示 toast"}),(0,u.jsx)(n.Button,{onPress:(0,o.A)((function*(){yield s.A.serviceDemo.demoError2()})),children:"调用 background 不显示 toast2"}),(0,u.jsx)(n.Button,{onPress:(0,o.A)((function*(){try{yield s.A.serviceDemo.demoError3()}catch(e){throw e}})),children:"调用 background 显示 toast3"}),(0,u.jsx)(n.Button,{onPress:(0,o.A)((function*(){try{yield s.A.serviceDemo.demoError4()}catch(e){throw e}})),children:"调用 background 显示 toast4"}),(0,u.jsx)(n.Button,{onPress:(0,o.A)((function*(){c.iL.emit(c.Tu.ShowToast,{method:"error",title:null!="Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, 444444444444444444444444"?"Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, 444444444444444444444444":"Error",message:"33333333-33333333-33333333-33333333"})})),children:"调用 appEventBus 显示 toast1"})]})}const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,u.jsx)(d.P,{description:"ErrorToast",suggestions:["ErrorToast"],boundaryConditions:["ErrorToast"],elements:[{title:"ErrorToast",element:(0,u.jsx)(n.Stack,{space:"$1",children:(0,u.jsx)(Demo1,{})})}]})}},654004:(e,r,t)=>{t.d(r,{P:()=>Layout});var o=t(586330),n=t(724249),s=t(490343),l=t(989375),i=t(60153),c=t(498356),a=t(757559),d=t(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,d.jsx)(s.Stack,{children:(0,d.jsxs)(s.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.Stack,{space:"$1",children:e.map((function(r,t){return(0,d.jsx)(s.Stack,{children:(0,d.jsxs)(s.SizableText,{children:[t+1,". ",r,t===e.length-1?"。":"；"]})},t.toString())}))})})};function Layout({description:e="",suggestions:r=[],boundaryConditions:t=[],elements:u=[],scrollEnabled:h=!0,contentInsetAdjustmentBehavior:x="never",skipLoading:j=!1,children:m}){var p=(0,l.U6)(),f=(0,c.A)();return(0,d.jsx)(s.Page,{skipLoading:j,children:(0,d.jsx)(s.ScrollView,{maxWidth:"100%",scrollEnabled:h,flex:1,marginBottom:p,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:x,children:(0,d.jsxs)(s.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,space:"$6",children:[(0,d.jsxs)(s.XStack,{children:[(0,d.jsx)(s.IconButton,{icon:"HomeLineOutline",onPress:function(){f.dispatch(n.y9.replace(a.WP.Main,{screen:a.V4.Developer,params:{screen:a.f$.TabDeveloper}}))}}),(0,d.jsx)(s.Button,{ml:"$4",onPress:(0,o.A)((function*(){yield i.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,d.jsx)(s.Button,{ml:"$4",variant:"primary",onPress:(0,o.A)((function*(){yield i.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,d.jsxs)(s.Stack,{space:"$2",children:[(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,d.jsx)(s.Stack,{children:(0,d.jsx)(FormattedText,{text:e})})]}):null,r?(0,d.jsxs)(s.Stack,{space:"$2",children:[(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,d.jsx)(FormattedText,{text:r})]}):null,t?.length>0?(0,d.jsxs)(s.Stack,{space:"$2",children:[(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,d.jsx)(FormattedText,{text:t})]}):null,(0,d.jsxs)(s.Stack,{space:"$2",children:[(0,d.jsx)(s.Stack,{children:(0,d.jsx)(s.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,d.jsx)(s.Stack,{children:u?.map((function(e,r){return(0,d.jsxs)(s.Stack,{space:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,d.jsxs)(s.Stack,{flexDirection:"column",children:[(0,d.jsx)(s.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,d.jsx)(s.Stack,{paddingTop:1,children:(0,d.jsxs)(s.SizableText,{children:[e.description,"。"]})}):null]}),(0,d.jsx)(s.Stack,{children:"function"==typeof e.element?(0,d.jsx)(e.element,{}):e.element})]},`elements-${r}`)}))}),(0,d.jsx)(s.Stack,{children:m?(0,d.jsx)(s.Stack,{space:"$3",children:m}):null})]})]})})})}}}]);