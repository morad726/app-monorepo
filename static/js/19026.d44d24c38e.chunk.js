"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[19026],{19026:(e,t,n)=>{n.r(t),n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var l=n(514041),i=n(490343),a=n(654004),s=n(831085),SegmentControlExample1=function(){var[e,t]=(0,l.useState)(1);return(0,s.jsx)(i.SegmentControl,{value:e,onChange:function(e){t(e)},options:[{label:"Label 1",value:1},{label:"Label 2",value:2},{label:"Label 3",value:3}]})},SegmentControlExample2=function(){var[e,t]=(0,l.useState)(1);return(0,s.jsx)(i.SegmentControl,{fullWidth:!0,value:e,onChange:function(e){t(e)},options:[{label:"Label 1",value:1},{label:"Label 2",value:2},{label:"Label 3",value:3}]})},SegmentControlExample3=function(){var[e,t]=(0,l.useState)(1);return(0,s.jsx)(i.SegmentControl,{fullWidth:!0,value:e,onChange:function(e){t(e)},options:[{label:(0,s.jsxs)(i.YStack,{children:[(0,s.jsx)(i.SizableText,{textAlign:"center",color:1===e?"$text":"$textSubdued",children:"a"}),(0,s.jsx)(i.SizableText,{color:"$textSubdued",textAlign:"center",children:"1"})]}),value:1},{label:(0,s.jsxs)(i.YStack,{children:[(0,s.jsx)(i.SizableText,{textAlign:"center",color:2===e?"$text":"$textSubdued",children:"b"}),(0,s.jsx)(i.SizableText,{color:"$textSubdued",textAlign:"center",children:"2"})]}),value:2},{label:(0,s.jsxs)(i.YStack,{children:[(0,s.jsx)(i.SizableText,{textAlign:"center",color:3===e?"$text":"$textSubdued",children:"c"}),(0,s.jsx)(i.SizableText,{color:"$textSubdued",textAlign:"center",children:"3"})]}),value:3}]})};const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,s.jsx)(a.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"Default",element:(0,s.jsx)(SegmentControlExample1,{})},{title:"Full Width",element:(0,s.jsx)(SegmentControlExample2,{})},{title:"Custom Label",element:(0,s.jsx)(SegmentControlExample3,{})}]})}},654004:(e,t,n)=>{n.d(t,{P:()=>Layout});var l=n(586330),i=n(724249),a=n(490343),s=n(989375),r=n(60153),c=n(498356),o=n(757559),d=n(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,d.jsx)(a.Stack,{children:(0,d.jsxs)(a.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,d.jsx)(a.Stack,{children:(0,d.jsx)(a.Stack,{space:"$1",children:e.map((function(t,n){return(0,d.jsx)(a.Stack,{children:(0,d.jsxs)(a.SizableText,{children:[n+1,". ",t,n===e.length-1?"。":"；"]})},n.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:n=[],elements:x=[],scrollEnabled:u=!0,contentInsetAdjustmentBehavior:h="never",skipLoading:j=!1,children:S}){var b=(0,s.U6)(),g=(0,c.A)();return(0,d.jsx)(a.Page,{skipLoading:j,children:(0,d.jsx)(a.ScrollView,{maxWidth:"100%",scrollEnabled:u,flex:1,marginBottom:b,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:h,children:(0,d.jsxs)(a.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,space:"$6",children:[(0,d.jsxs)(a.XStack,{children:[(0,d.jsx)(a.IconButton,{icon:"HomeLineOutline",onPress:function(){g.dispatch(i.y9.replace(o.WP.Main,{screen:o.V4.Developer,params:{screen:o.f$.TabDeveloper}}))}}),(0,d.jsx)(a.Button,{ml:"$4",onPress:(0,l.A)((function*(){yield r.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,d.jsx)(a.Button,{ml:"$4",variant:"primary",onPress:(0,l.A)((function*(){yield r.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,d.jsxs)(a.Stack,{space:"$2",children:[(0,d.jsx)(a.Stack,{children:(0,d.jsx)(a.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,d.jsx)(a.Stack,{children:(0,d.jsx)(FormattedText,{text:e})})]}):null,t?(0,d.jsxs)(a.Stack,{space:"$2",children:[(0,d.jsx)(a.Stack,{children:(0,d.jsx)(a.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,d.jsx)(FormattedText,{text:t})]}):null,n?.length>0?(0,d.jsxs)(a.Stack,{space:"$2",children:[(0,d.jsx)(a.Stack,{children:(0,d.jsx)(a.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,d.jsx)(FormattedText,{text:n})]}):null,(0,d.jsxs)(a.Stack,{space:"$2",children:[(0,d.jsx)(a.Stack,{children:(0,d.jsx)(a.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,d.jsx)(a.Stack,{children:x?.map((function(e,t){return(0,d.jsxs)(a.Stack,{space:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,d.jsxs)(a.Stack,{flexDirection:"column",children:[(0,d.jsx)(a.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,d.jsx)(a.Stack,{paddingTop:1,children:(0,d.jsxs)(a.SizableText,{children:[e.description,"。"]})}):null]}),(0,d.jsx)(a.Stack,{children:"function"==typeof e.element?(0,d.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,d.jsx)(a.Stack,{children:S?(0,d.jsx)(a.Stack,{space:"$3",children:S}):null})]})]})})})}}}]);