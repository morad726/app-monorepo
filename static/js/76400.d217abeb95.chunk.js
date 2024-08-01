"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[76400],{170087:(e,t,r)=>{r.d(t,{j:()=>PureChainSelector});var n=r(908867),o=r(490343),s=r(254491),a=r(514041),i=r(723110),c=r(791088),l=r(880590),u=r(831085),ListEmptyComponent=function(){var e=(0,n.A)();return(0,u.jsx)(o.Empty,{icon:"SearchOutline",title:e.formatMessage({id:s.ETranslations.global_no_results})})},ChainSelectorListView=function({networks:e,onPressItem:t,networkId:r}){var{bottom:n}=(0,o.useSafeAreaInsets)();return(0,u.jsx)(o.ListView,{ListEmptyComponent,ListFooterComponent:(0,u.jsx)(o.Stack,{h:n||"$2"}),estimatedItemSize:48,data:e,keyExtractor:function(e){return e.id},renderItem:function({item:e}){return(0,u.jsx)(c.c,{h:48,renderAvatar:(0,u.jsx)(l.vD,{logoURI:e.logoURI,size:"$8"}),title:e.name,titleMatch:e.titleMatch,onPress:function(){return t?.(e)},testID:`select-item-${e.id}`,children:r===e.id?(0,u.jsx)(c.c.CheckMark,{},"checkmark"):null})}})},PureChainSelectorContent=function({networks:e,networkId:t,onPressItem:r}){var[c,l]=(0,a.useState)(""),m=(0,n.A)(),d=(0,a.useCallback)((function(e){l(e.trim())}),[]),f=(0,i.j)(e),k=(0,a.useMemo)((function(){return c?f(c):e}),[f,c,e]);return(0,u.jsxs)(o.Stack,{flex:1,children:[(0,u.jsx)(o.Stack,{px:"$5",pb:"$4",children:(0,u.jsx)(o.SearchBar,{placeholder:m.formatMessage({id:s.ETranslations.global_search}),value:c,onChangeText:d})}),(0,u.jsx)(ChainSelectorListView,{networkId:t,networks:k,onPressItem:r})]})},PureChainSelector=function({networks:e,title:t,networkId:r,onPressItem:a}){var i=(0,n.A)();return(0,u.jsxs)(o.Page,{safeAreaEnabled:!1,children:[(0,u.jsx)(o.Page.Header,{title:t||i.formatMessage({id:s.ETranslations.global_networks})}),(0,u.jsx)(o.Page.Body,{children:(0,u.jsx)(PureChainSelectorContent,{networkId:r,networks:e,onPressItem:a})})]})}},723110:(e,t,r)=>{r.d(t,{j:()=>useFuseSearch});var n=r(324586),o=r(514041),s=r(22937);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a=["evm","dot","cosmos"],useFuseSearch=function(e){var t=(0,o.useMemo)((function(){return{fuse:(0,s.pl)(e,{keys:["name","impl","symbol","shortname"]}),symbolSet:new Set(e.map((function(e){return e.symbol.toLowerCase()}))),shortnameSet:new Set(e.map((function(e){return e.shortname.toLowerCase()})))}}),[e]);return(0,o.useCallback)((function(e){var r=e.toLowerCase(),{fuse:n,symbolSet:o,shortnameSet:s}=t,i={$or:[{name:`^${e}`},{name:`'${e}`}]};return a.includes(r)&&i.$or?.push({impl:`=${r}`}),o.has(r)&&i.$or?.push({symbol:`=${r}`}),s.has(r)&&i.$or?.push({shortname:`=${r}`}),n.search(i).map((function(e){return _objectSpread(_objectSpread({},e.item),{},{titleMatch:e.matches?.find((function(e){return"name"===e.key}))})}))}),[t])}},876400:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ChainSelectorPage});var n=r(586330),o=r(908867),s=r(911998),a=r(254491),i=r(60153),c=r(170087),l=r(831085);function ChainSelectorPage({route:e,navigation:t}){var r,u=(0,o.A)(),{onSelect:m,defaultNetworkId:d,networkIds:f,title:k=u.formatMessage({id:a.ETranslations.global_networks})}=null!=(r=e.params)?r:{},{result:w}=(0,s.yk)((0,n.A)((function*(){var e=[];f&&f.length>0?e=(yield i.A.serviceNetwork.getNetworksByIds({networkIds:f})).networks:e=(yield i.A.serviceNetwork.getAllNetworks()).networks;return e})),[f]);return(0,l.jsx)(c.j,{title:k,networkId:d,networks:null!=w?w:[],onPressItem:function(e){m?.(e),t.goBack()}})}}}]);