"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3093],{3093:(e,n,t)=>{t.r(n),t.d(n,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var i=t(586330),s=t(490343),o=t(160896),l=t(147882),c=t(654004),r=t(831085);const __WEBPACK_DEFAULT_EXPORT__=function(){var e=(0,l.A)();return(0,r.jsx)(c.P,{description:"",suggestions:[],boundaryConditions:[],elements:[{title:"SecureQRToast",element:(0,r.jsx)(s.Button,{onPress:function(){var e,n,t=o.o.show({value:"https://onekey.so",onCancel:(n=(0,i.A)((function*(){yield t.close()})),function onCancel(){return n.apply(this,arguments)}),onConfirm:(e=(0,i.A)((function*(){yield t.close()})),function onConfirm(){return e.apply(this,arguments)}),onClose:function(){}})},children:"点击单独显示"})},{title:"SecureQRToast",element:(0,r.jsx)(s.Button,{onPress:function(){var e,n,t=o.o.show({value:"https://onekey.so",showQRCode:!1,onCancel:(n=(0,i.A)((function*(){yield t.close()})),function onCancel(){return n.apply(this,arguments)}),onConfirm:(e=(0,i.A)((function*(){yield t.close()})),function onConfirm(){return e.apply(this,arguments)}),onClose:function(){}})},children:"点击单独显示(默认不展示)"})},{title:"SecureQRToast + showConfirmButton",element:(0,r.jsx)(s.Button,{onPress:function(){var e,n=o.o.show({value:"https://onekey.so",showConfirmButton:!1,onCancel:(e=(0,i.A)((function*(){yield n.close()})),function onCancel(){return e.apply(this,arguments)}),onClose:function(){}})},children:"点击显示后续流程"})},{title:"SecureQRToast + useScanQrCode",element:(0,r.jsx)(s.Button,{onPress:function(){var n,t,s=o.o.show({title:"AAA",message:"BBBB",dismissOnOverlayPress:!1,value:"https://onekey.so",onConfirm:(t=(0,i.A)((function*(){yield s.close(),yield e.start({autoHandleResult:!0,handlers:e.PARSE_HANDLER_NAMES.all})})),function onConfirm(){return t.apply(this,arguments)}),onCancel:(n=(0,i.A)((function*(){yield s.close()})),function onCancel(){return n.apply(this,arguments)}),onClose:function(){}})},children:"点击显示后续流程"})}]})}},654004:(e,n,t)=>{t.d(n,{P:()=>Layout});var i=t(586330),s=t(724249),o=t(490343),l=t(989375),c=t(60153),r=t(498356),a=t(757559),d=t(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,d.jsx)(o.Stack,{children:(0,d.jsxs)(o.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,d.jsx)(o.Stack,{children:(0,d.jsx)(o.Stack,{space:"$1",children:e.map((function(n,t){return(0,d.jsx)(o.Stack,{children:(0,d.jsxs)(o.SizableText,{children:[t+1,". ",n,t===e.length-1?"。":"；"]})},t.toString())}))})})};function Layout({description:e="",suggestions:n=[],boundaryConditions:t=[],elements:u=[],scrollEnabled:h=!0,contentInsetAdjustmentBehavior:x="never",skipLoading:p=!1,children:f}){var j=(0,l.U6)(),m=(0,r.A)();return(0,d.jsx)(o.Page,{skipLoading:p,children:(0,d.jsx)(o.ScrollView,{maxWidth:"100%",scrollEnabled:h,flex:1,marginBottom:j,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:x,children:(0,d.jsxs)(o.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,space:"$6",children:[(0,d.jsxs)(o.XStack,{children:[(0,d.jsx)(o.IconButton,{icon:"HomeLineOutline",onPress:function(){m.dispatch(s.y9.replace(a.WP.Main,{screen:a.V4.Developer,params:{screen:a.f$.TabDeveloper}}))}}),(0,d.jsx)(o.Button,{ml:"$4",onPress:(0,i.A)((function*(){yield c.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,d.jsx)(o.Button,{ml:"$4",variant:"primary",onPress:(0,i.A)((function*(){yield c.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,d.jsxs)(o.Stack,{space:"$2",children:[(0,d.jsx)(o.Stack,{children:(0,d.jsx)(o.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,d.jsx)(o.Stack,{children:(0,d.jsx)(FormattedText,{text:e})})]}):null,n?(0,d.jsxs)(o.Stack,{space:"$2",children:[(0,d.jsx)(o.Stack,{children:(0,d.jsx)(o.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,d.jsx)(FormattedText,{text:n})]}):null,t?.length>0?(0,d.jsxs)(o.Stack,{space:"$2",children:[(0,d.jsx)(o.Stack,{children:(0,d.jsx)(o.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,d.jsx)(FormattedText,{text:t})]}):null,(0,d.jsxs)(o.Stack,{space:"$2",children:[(0,d.jsx)(o.Stack,{children:(0,d.jsx)(o.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,d.jsx)(o.Stack,{children:u?.map((function(e,n){return(0,d.jsxs)(o.Stack,{space:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,d.jsxs)(o.Stack,{flexDirection:"column",children:[(0,d.jsx)(o.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,d.jsx)(o.Stack,{paddingTop:1,children:(0,d.jsxs)(o.SizableText,{children:[e.description,"。"]})}):null]}),(0,d.jsx)(o.Stack,{children:"function"==typeof e.element?(0,d.jsx)(e.element,{}):e.element})]},`elements-${n}`)}))}),(0,d.jsx)(o.Stack,{children:f?(0,d.jsx)(o.Stack,{space:"$3",children:f}):null})]})]})})})}}}]);