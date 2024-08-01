"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[53147],{553147:(e,t,n)=>{n.r(t),n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var o=n(586330),i=n(490343),s=n(60153),c=n(654004),d=n(831085);function demoLog(e){i.Toast.success({title:JSON.stringify(e)})}function LocalDBDemo1(){return(0,d.jsxs)(i.Stack,{space:"$2",children:[(0,d.jsx)(i.Button,{onPress:(0,o.A)((function*(){demoLog(yield s.A.serviceDemo.demoGetAllRecords())})),children:"demoGetAllRecords"}),(0,d.jsx)(i.Button,{onPress:(0,o.A)((function*(){demoLog(yield s.A.serviceDemo.demoGetDbContextWithoutTx())})),children:"demoGetDbContextWithoutTx"}),(0,d.jsx)(i.Button,{onPress:(0,o.A)((function*(){demoLog(yield s.A.serviceDemo.demoGetDbContext())})),children:"Show Context"}),(0,d.jsx)(i.Button,{onPress:(0,o.A)((function*(){demoLog(yield s.A.serviceDemo.demoGetDbContextCount())})),children:"Get Context Count"}),(0,d.jsx)(i.Button,{onPress:(0,o.A)((function*(){demoLog(yield s.A.serviceDemo.demoGetDbAccountsCount())})),children:"Get Accounts Count"}),(0,d.jsx)(i.Button,{onPress:(0,o.A)((function*(){demoLog(yield s.A.serviceDemo.demoGetDbWalletsCount())})),children:"Get Wallets Count"}),(0,d.jsx)(i.Button,{onPress:(0,o.A)((function*(){demoLog(yield s.A.serviceDemo.demoDbUpdateUUID())})),children:"demoDbUpdateUUID"}),(0,d.jsx)(i.Button,{onPress:(0,o.A)((function*(){demoLog(yield s.A.serviceDemo.demoDbUpdateUUIDFixed())})),children:"demoDbUpdateUUIDFixed"}),(0,d.jsx)(i.Button,{onPress:(0,o.A)((function*(){demoLog(yield s.A.serviceDemo.demoAddRecord1())})),children:"Add Record"}),(0,d.jsx)(i.Button,{onPress:(0,o.A)((function*(){demoLog(yield s.A.serviceDemo.demoRemoveRecord1())})),children:"batch remove Record"}),(0,d.jsx)(i.Button,{onPress:(0,o.A)((function*(){demoLog(yield s.A.serviceDemo.demoUpdateCredentialRecord())})),children:"demoUpdateCredentialRecord"}),(0,d.jsx)(i.Button,{onPress:(0,o.A)((function*(){demoLog(yield s.A.serviceDemo.addMultipleWatchingAccounts())})),children:"demoAddMultipleWatchingAccounts"})]})}const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,d.jsx)(c.P,{description:"localDB",suggestions:["localDB"],boundaryConditions:["localDB"],elements:[{title:"localDB",element:(0,d.jsx)(i.Stack,{space:"$1",children:(0,d.jsx)(LocalDBDemo1,{})})}]})}},654004:(e,t,n)=>{n.d(t,{P:()=>Layout});var o=n(586330),i=n(724249),s=n(490343),c=n(989375),d=n(60153),r=n(498356),l=n(757559),a=n(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,a.jsx)(s.Stack,{children:(0,a.jsxs)(s.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,a.jsx)(s.Stack,{children:(0,a.jsx)(s.Stack,{space:"$1",children:e.map((function(t,n){return(0,a.jsx)(s.Stack,{children:(0,a.jsxs)(s.SizableText,{children:[n+1,". ",t,n===e.length-1?"。":"；"]})},n.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:n=[],elements:u=[],scrollEnabled:x=!0,contentInsetAdjustmentBehavior:h="never",skipLoading:m=!1,children:j}){var g=(0,c.U6)(),p=(0,r.A)();return(0,a.jsx)(s.Page,{skipLoading:m,children:(0,a.jsx)(s.ScrollView,{maxWidth:"100%",scrollEnabled:x,flex:1,marginBottom:g,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:h,children:(0,a.jsxs)(s.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,space:"$6",children:[(0,a.jsxs)(s.XStack,{children:[(0,a.jsx)(s.IconButton,{icon:"HomeLineOutline",onPress:function(){p.dispatch(i.y9.replace(l.WP.Main,{screen:l.V4.Developer,params:{screen:l.f$.TabDeveloper}}))}}),(0,a.jsx)(s.Button,{ml:"$4",onPress:(0,o.A)((function*(){yield d.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,a.jsx)(s.Button,{ml:"$4",variant:"primary",onPress:(0,o.A)((function*(){yield d.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,a.jsxs)(s.Stack,{space:"$2",children:[(0,a.jsx)(s.Stack,{children:(0,a.jsx)(s.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,a.jsx)(s.Stack,{children:(0,a.jsx)(FormattedText,{text:e})})]}):null,t?(0,a.jsxs)(s.Stack,{space:"$2",children:[(0,a.jsx)(s.Stack,{children:(0,a.jsx)(s.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,a.jsx)(FormattedText,{text:t})]}):null,n?.length>0?(0,a.jsxs)(s.Stack,{space:"$2",children:[(0,a.jsx)(s.Stack,{children:(0,a.jsx)(s.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,a.jsx)(FormattedText,{text:n})]}):null,(0,a.jsxs)(s.Stack,{space:"$2",children:[(0,a.jsx)(s.Stack,{children:(0,a.jsx)(s.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,a.jsx)(s.Stack,{children:u?.map((function(e,t){return(0,a.jsxs)(s.Stack,{space:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,a.jsxs)(s.Stack,{flexDirection:"column",children:[(0,a.jsx)(s.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,a.jsx)(s.Stack,{paddingTop:1,children:(0,a.jsxs)(s.SizableText,{children:[e.description,"。"]})}):null]}),(0,a.jsx)(s.Stack,{children:"function"==typeof e.element?(0,a.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,a.jsx)(s.Stack,{children:j?(0,a.jsx)(s.Stack,{space:"$3",children:j}):null})]})]})})})}}}]);