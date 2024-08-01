"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[34115],{534115:(e,n,t)=>{t.r(n),t.d(n,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var i=t(490343),s=t(654004),r=t(831085);const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,r.jsx)(s.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"default",element:(0,r.jsx)(i.Markdown,{children:"\n# Heading1\n## Heading2\n### ✨ New Features\n- *Don’t forget your passphrase!*\n- **Don’t forget your passphrase!**\n- Support for Manta, Neurai, and Nervos networks.\n- Support for LNURL Auth authorization signing.\n- Ability to view firmware version in device information.\n- New precision display under the Celestia network.\n\n### 🐞 Bug Fixes\n- Fixed incorrect display of recipient addresses during transfers on Near and Tron networks.\n- Fixed overlapping transaction data display in Thorswap routing.\n- Fixed incomplete display of signing information on the Sui network.\n\n### 💎 Improvements\n- Optimized packet handling logic for signing data on the Sui network.\n- Increased blind signature message length to 4096 on the Polkadot network.\n\n"})}]})}},654004:(e,n,t)=>{t.d(n,{P:()=>Layout});var i=t(586330),s=t(724249),r=t(490343),a=t(989375),o=t(60153),l=t(498356),c=t(757559),d=t(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,d.jsx)(r.Stack,{children:(0,d.jsxs)(r.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,d.jsx)(r.Stack,{children:(0,d.jsx)(r.Stack,{space:"$1",children:e.map((function(n,t){return(0,d.jsx)(r.Stack,{children:(0,d.jsxs)(r.SizableText,{children:[t+1,". ",n,t===e.length-1?"。":"；"]})},t.toString())}))})})};function Layout({description:e="",suggestions:n=[],boundaryConditions:t=[],elements:h=[],scrollEnabled:x=!0,contentInsetAdjustmentBehavior:u="never",skipLoading:p=!1,children:g}){var j=(0,a.U6)(),k=(0,l.A)();return(0,d.jsx)(r.Page,{skipLoading:p,children:(0,d.jsx)(r.ScrollView,{maxWidth:"100%",scrollEnabled:x,flex:1,marginBottom:j,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:u,children:(0,d.jsxs)(r.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,space:"$6",children:[(0,d.jsxs)(r.XStack,{children:[(0,d.jsx)(r.IconButton,{icon:"HomeLineOutline",onPress:function(){k.dispatch(s.y9.replace(c.WP.Main,{screen:c.V4.Developer,params:{screen:c.f$.TabDeveloper}}))}}),(0,d.jsx)(r.Button,{ml:"$4",onPress:(0,i.A)((function*(){yield o.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,d.jsx)(r.Button,{ml:"$4",variant:"primary",onPress:(0,i.A)((function*(){yield o.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,d.jsxs)(r.Stack,{space:"$2",children:[(0,d.jsx)(r.Stack,{children:(0,d.jsx)(r.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,d.jsx)(r.Stack,{children:(0,d.jsx)(FormattedText,{text:e})})]}):null,n?(0,d.jsxs)(r.Stack,{space:"$2",children:[(0,d.jsx)(r.Stack,{children:(0,d.jsx)(r.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,d.jsx)(FormattedText,{text:n})]}):null,t?.length>0?(0,d.jsxs)(r.Stack,{space:"$2",children:[(0,d.jsx)(r.Stack,{children:(0,d.jsx)(r.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,d.jsx)(FormattedText,{text:t})]}):null,(0,d.jsxs)(r.Stack,{space:"$2",children:[(0,d.jsx)(r.Stack,{children:(0,d.jsx)(r.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,d.jsx)(r.Stack,{children:h?.map((function(e,n){return(0,d.jsxs)(r.Stack,{space:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,d.jsxs)(r.Stack,{flexDirection:"column",children:[(0,d.jsx)(r.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,d.jsx)(r.Stack,{paddingTop:1,children:(0,d.jsxs)(r.SizableText,{children:[e.description,"。"]})}):null]}),(0,d.jsx)(r.Stack,{children:"function"==typeof e.element?(0,d.jsx)(e.element,{}):e.element})]},`elements-${n}`)}))}),(0,d.jsx)(r.Stack,{children:g?(0,d.jsx)(r.Stack,{space:"$3",children:g}):null})]})]})})})}}}]);