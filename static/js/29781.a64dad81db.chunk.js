"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[29781],{529781:(e,n,t)=>{t.r(n),t.d(n,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var i=t(586330),s=t(490343),r=t(619115),c=t(654004),l=t(831085);const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,l.jsx)(c.P,{description:"...",suggestions:[],boundaryConditions:[],elements:[{title:"RPC Call",element:(0,l.jsx)(s.YStack,{space:"$4",children:(0,l.jsx)(s.Button,{onPress:(0,i.A)((function*(){var e=yield r.A.test.test1("a","b","c","d");alert(JSON.stringify(e))})),children:"Test RPC"})})}]})}},654004:(e,n,t)=>{t.d(n,{P:()=>Layout});var i=t(586330),s=t(724249),r=t(490343),c=t(989375),l=t(60153),a=t(498356),d=t(757559),o=t(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,o.jsx)(r.Stack,{children:(0,o.jsxs)(r.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,o.jsx)(r.Stack,{children:(0,o.jsx)(r.Stack,{space:"$1",children:e.map((function(n,t){return(0,o.jsx)(r.Stack,{children:(0,o.jsxs)(r.SizableText,{children:[t+1,". ",n,t===e.length-1?"。":"；"]})},t.toString())}))})})};function Layout({description:e="",suggestions:n=[],boundaryConditions:t=[],elements:h=[],scrollEnabled:x=!0,contentInsetAdjustmentBehavior:j="never",skipLoading:u=!1,children:S}){var p=(0,c.U6)(),k=(0,a.A)();return(0,o.jsx)(r.Page,{skipLoading:u,children:(0,o.jsx)(r.ScrollView,{maxWidth:"100%",scrollEnabled:x,flex:1,marginBottom:p,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:j,children:(0,o.jsxs)(r.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,space:"$6",children:[(0,o.jsxs)(r.XStack,{children:[(0,o.jsx)(r.IconButton,{icon:"HomeLineOutline",onPress:function(){k.dispatch(s.y9.replace(d.WP.Main,{screen:d.V4.Developer,params:{screen:d.f$.TabDeveloper}}))}}),(0,o.jsx)(r.Button,{ml:"$4",onPress:(0,i.A)((function*(){yield l.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,o.jsx)(r.Button,{ml:"$4",variant:"primary",onPress:(0,i.A)((function*(){yield l.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,o.jsxs)(r.Stack,{space:"$2",children:[(0,o.jsx)(r.Stack,{children:(0,o.jsx)(r.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,o.jsx)(r.Stack,{children:(0,o.jsx)(FormattedText,{text:e})})]}):null,n?(0,o.jsxs)(r.Stack,{space:"$2",children:[(0,o.jsx)(r.Stack,{children:(0,o.jsx)(r.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,o.jsx)(FormattedText,{text:n})]}):null,t?.length>0?(0,o.jsxs)(r.Stack,{space:"$2",children:[(0,o.jsx)(r.Stack,{children:(0,o.jsx)(r.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,o.jsx)(FormattedText,{text:t})]}):null,(0,o.jsxs)(r.Stack,{space:"$2",children:[(0,o.jsx)(r.Stack,{children:(0,o.jsx)(r.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,o.jsx)(r.Stack,{children:h?.map((function(e,n){return(0,o.jsxs)(r.Stack,{space:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,o.jsxs)(r.Stack,{flexDirection:"column",children:[(0,o.jsx)(r.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,o.jsx)(r.Stack,{paddingTop:1,children:(0,o.jsxs)(r.SizableText,{children:[e.description,"。"]})}):null]}),(0,o.jsx)(r.Stack,{children:"function"==typeof e.element?(0,o.jsx)(e.element,{}):e.element})]},`elements-${n}`)}))}),(0,o.jsx)(r.Stack,{children:S?(0,o.jsx)(r.Stack,{space:"$3",children:S}):null})]})]})})})}}}]);