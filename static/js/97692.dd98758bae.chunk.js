"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[97692],{97692:(e,t,n)=>{n.r(t),n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var i=n(490343),s=n(654004),r=n(831085),a=[{imgUrl:"https://asset.onekey-asset.com/portal/803ff853ecdd7808b35fdf6f837ae1af514aad56/static/shop-hero-animation-poster-8e1206b59d2201dfaa8cd72a8134179f.jpg",title:"title1",onPress:function(){}},{imgUrl:"https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",title:"title2",onPress:function(){}},{imgUrl:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",title:"title3",onPress:function(){}}];const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,r.jsx)(s.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"Default",element:function(){return(0,r.jsx)(i.Swiper,{autoplay:!0,autoplayDelayMs:2e3,autoplayLoop:!0,height:"$64",data:a,renderItem:function({item:e}){return(0,r.jsxs)(i.YStack,{onPress:e.onPress,alignItems:"center",children:[(0,r.jsx)(i.Image,{width:"100%",height:"$52",src:e.imgUrl}),(0,r.jsx)(i.SizableText,{children:e.title})]})},renderPagination:function({currentIndex:e}){return(0,r.jsx)(i.XStack,{space:"$1",position:"absolute",right:"$5",bottom:"$24",children:a.map((function(t,n){return(0,r.jsx)(i.Stack,{w:"$3",$gtMd:{w:"$4"},h:"$1",borderRadius:"$full",bg:"$whiteA12",opacity:e===n?1:.5},n)}))})}})}}]})}},654004:(e,t,n)=>{n.d(t,{P:()=>Layout});var i=n(586330),s=n(724249),r=n(490343),a=n(989375),l=n(60153),c=n(498356),o=n(757559),d=n(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,d.jsx)(r.Stack,{children:(0,d.jsxs)(r.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,d.jsx)(r.Stack,{children:(0,d.jsx)(r.Stack,{space:"$1",children:e.map((function(t,n){return(0,d.jsx)(r.Stack,{children:(0,d.jsxs)(r.SizableText,{children:[n+1,". ",t,n===e.length-1?"。":"；"]})},n.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:n=[],elements:h=[],scrollEnabled:x=!0,contentInsetAdjustmentBehavior:u="never",skipLoading:p=!1,children:f}){var j=(0,a.U6)(),m=(0,c.A)();return(0,d.jsx)(r.Page,{skipLoading:p,children:(0,d.jsx)(r.ScrollView,{maxWidth:"100%",scrollEnabled:x,flex:1,marginBottom:j,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:u,children:(0,d.jsxs)(r.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,space:"$6",children:[(0,d.jsxs)(r.XStack,{children:[(0,d.jsx)(r.IconButton,{icon:"HomeLineOutline",onPress:function(){m.dispatch(s.y9.replace(o.WP.Main,{screen:o.V4.Developer,params:{screen:o.f$.TabDeveloper}}))}}),(0,d.jsx)(r.Button,{ml:"$4",onPress:(0,i.A)((function*(){yield l.A.serviceSetting.setTheme("light")})),children:"Light Theme"}),(0,d.jsx)(r.Button,{ml:"$4",variant:"primary",onPress:(0,i.A)((function*(){yield l.A.serviceSetting.setTheme("dark")})),children:"Dark Theme"})]}),e?(0,d.jsxs)(r.Stack,{space:"$2",children:[(0,d.jsx)(r.Stack,{children:(0,d.jsx)(r.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,d.jsx)(r.Stack,{children:(0,d.jsx)(FormattedText,{text:e})})]}):null,t?(0,d.jsxs)(r.Stack,{space:"$2",children:[(0,d.jsx)(r.Stack,{children:(0,d.jsx)(r.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,d.jsx)(FormattedText,{text:t})]}):null,n?.length>0?(0,d.jsxs)(r.Stack,{space:"$2",children:[(0,d.jsx)(r.Stack,{children:(0,d.jsx)(r.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,d.jsx)(FormattedText,{text:n})]}):null,(0,d.jsxs)(r.Stack,{space:"$2",children:[(0,d.jsx)(r.Stack,{children:(0,d.jsx)(r.SizableText,{size:"$headingXl",children:"组件案例"})}),(0,d.jsx)(r.Stack,{children:h?.map((function(e,t){return(0,d.jsxs)(r.Stack,{space:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,d.jsxs)(r.Stack,{flexDirection:"column",children:[(0,d.jsx)(r.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,d.jsx)(r.Stack,{paddingTop:1,children:(0,d.jsxs)(r.SizableText,{children:[e.description,"。"]})}):null]}),(0,d.jsx)(r.Stack,{children:"function"==typeof e.element?(0,d.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,d.jsx)(r.Stack,{children:f?(0,d.jsx)(r.Stack,{space:"$3",children:f}):null})]})]})})})}}}]);