"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[66535],{566535:(e,n,t)=>{t.r(n),t.d(n,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var i=t(490343),r=t(654004),c=t(831085);const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,c.jsx)(r.P,{description:"A tooltip on web, with only accessibility output on native",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"Default",element:(0,c.jsx)(i.XStack,{space:"$4",children:(0,c.jsx)(i.Tooltip,{renderTrigger:(0,c.jsx)(i.IconButton,{icon:"EditOutline"}),renderContent:"Qui nulla occaecat anim"})})},{title:"Placements",element:(0,c.jsxs)(i.XStack,{space:"$4",children:[(0,c.jsx)(i.Tooltip,{renderTrigger:(0,c.jsx)(i.IconButton,{icon:"ChevronTopOutline"}),renderContent:"Qui nulla occaecat anim",placement:"top"}),(0,c.jsx)(i.Tooltip,{renderTrigger:(0,c.jsx)(i.IconButton,{icon:"ChevronRightOutline"}),renderContent:"Qui nulla occaecat anim",placement:"right"}),(0,c.jsx)(i.Tooltip,{renderTrigger:(0,c.jsx)(i.IconButton,{icon:"ChevronBottomOutline"}),renderContent:"Qui nulla occaecat anim"}),(0,c.jsx)(i.Tooltip,{renderTrigger:(0,c.jsx)(i.IconButton,{icon:"ChevronLeftOutline"}),renderContent:"Qui nulla occaecat anim",placement:"left"})]})},{title:"Max width",element:(0,c.jsx)(i.XStack,{space:"$4",children:(0,c.jsx)(i.Tooltip,{renderTrigger:(0,c.jsx)(i.IconButton,{icon:"EditOutline"}),renderContent:"Excepteur cillum laboris ea sint esse reprehenderit. Culpa fugiat aliqua elit sit deserunt cupidatat adipisicing velit non ad. Magna qui aute eiusmod deserunt elit commodo culpa nostrud aute veniam esse elit eu."})})}]})}},654004:(e,n,t)=>{t.d(n,{P:()=>Layout});var i=t(586330),r=t(724249),c=t(490343),l=t(989375),s=t(60153),a=t(498356),o=t(757559),d=t(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,d.jsx)(c.Stack,{children:(0,d.jsxs)(c.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,d.jsx)(c.Stack,{children:(0,d.jsx)(c.Stack,{space:"$1",children:e.map((function(n,t){return(0,d.jsx)(c.Stack,{children:(0,d.jsxs)(c.SizableText,{children:[t+1,". ",n,t===e.length-1?"。":"；"]})},t.toString())}))})})};function Layout({description:e="",suggestions:n=[],boundaryConditions:t=[],elements:u=[],scrollEnabled:x=!0,contentInsetAdjustmentBehavior:h="never",skipLoading:j=!1,children:p}){var m=(0,l.U6)(),g=(0,a.A)();return(0,d.jsx)(c.Page,{skipLoading:j,children:(0,d.jsx)(c.ScrollView,{maxWidth:"100%",scrollEnabled:x,flex:1,marginBottom:m,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:h,children:(0,d.jsxs)(c.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,space:"$6",children:[(0,d.jsxs)(c.XStack,{children:[(0,d.jsx)(c.IconButton,{icon:"HomeLineOutline",onPress:function(){g.dispatch(r.y9.replace(o.WP.Main,{screen:o.V4.Developer,params:{screen:o.f$.TabDeveloper}}))}}),(0,d.jsx)(c.Button,{ml:"$4",onPress:(0,i.A)((function*(){yield s.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,d.jsx)(c.Button,{ml:"$4",variant:"primary",onPress:(0,i.A)((function*(){yield s.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,d.jsxs)(c.Stack,{space:"$2",children:[(0,d.jsx)(c.Stack,{children:(0,d.jsx)(c.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,d.jsx)(c.Stack,{children:(0,d.jsx)(FormattedText,{text:e})})]}):null,n?(0,d.jsxs)(c.Stack,{space:"$2",children:[(0,d.jsx)(c.Stack,{children:(0,d.jsx)(c.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,d.jsx)(FormattedText,{text:n})]}):null,t?.length>0?(0,d.jsxs)(c.Stack,{space:"$2",children:[(0,d.jsx)(c.Stack,{children:(0,d.jsx)(c.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,d.jsx)(FormattedText,{text:t})]}):null,(0,d.jsxs)(c.Stack,{space:"$2",children:[(0,d.jsx)(c.Stack,{children:(0,d.jsx)(c.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,d.jsx)(c.Stack,{children:u?.map((function(e,n){return(0,d.jsxs)(c.Stack,{space:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,d.jsxs)(c.Stack,{flexDirection:"column",children:[(0,d.jsx)(c.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,d.jsx)(c.Stack,{paddingTop:1,children:(0,d.jsxs)(c.SizableText,{children:[e.description,"。"]})}):null]}),(0,d.jsx)(c.Stack,{children:"function"==typeof e.element?(0,d.jsx)(e.element,{}):e.element})]},`elements-${n}`)}))}),(0,d.jsx)(c.Stack,{children:p?(0,d.jsx)(c.Stack,{space:"$3",children:p}):null})]})]})})})}}}]);