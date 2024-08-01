"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[74933],{74933:(e,t,n)=>{n.r(t),n.d(t,{default:()=>SignatureRecord});var r=n(514041),s=n(908867),o=n(490343),i=n(880590),a=n(885127),d=n(848312),l=n(254491),c=n(586330),u=n(17617),m=n(60153),b=n(491180),g=n(567807),h=n(324586),x=n(911998),f=n(184251),S=(0,r.createContext)({});function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,h.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var groupBy=function(e){var t=e.reduce((function(e,t){var n=(0,g.Yq)(new Date(t.createdAt),{hideTimeForever:!0});return e[n]||(e[n]=[]),e[n].push(t),e}),{});return Object.entries(t).map((function([e,t]){return{title:e,data:t}}))},useGetSignatureSections=function(e){var t=(0,r.useRef)([]),n=(0,r.useRef)(e),[s,o]=(0,r.useState)({offset:0,limit:10}),{networkId:i,searchContent:a}=(0,r.useContext)(S),{result:{sections:d,ending:l}}=(0,x.yk)((0,c.A)((function*(){var e=yield n.current({networkId:i,address:a,offset:s.offset,limit:s.limit}),r=!f.A.isAllNetwork({networkId:i})||a;return r||t.current.splice(s.offset,s.limit,...e),{sections:groupBy(r?e:t.current),ending:e.length<s.limit}})),[i,s.limit,s.offset,a],{initResult:{sections:[],ending:!1}}),u=(0,r.useCallback)((function(){l||o((function(e){return _objectSpread(_objectSpread({},e),{},{offset:e.offset+e.limit})}))}),[l]);return(0,r.useMemo)((function(){return{sections:d,onEndReached:u}}),[d,u])},p=n(831085),getConnectedSiteTitle=function(e){try{return new URL(e).host}catch{return e}},ConnectedSiteItem=function({item:e}){return(0,p.jsx)(o.Stack,{px:"$5",pb:"$3",children:(0,p.jsxs)(o.YStack,{borderWidth:u.A.hairlineWidth,borderRadius:"$3",borderColor:"$borderSubdued",overflow:"hidden",children:[(0,p.jsx)(o.XStack,{justifyContent:"space-between",pt:"$3",px:"$3",pb:"$1",children:(0,p.jsx)(o.SizableText,{size:"$bodyMd",children:(0,g.fU)(new Date(e.createdAt),{hideSeconds:!0})})}),(0,p.jsxs)(o.XStack,{p:"$3",alignItems:"center",children:[(0,p.jsxs)(o.Image,{borderRadius:"$full",overflow:"hidden",width:40,height:40,mr:"$3",children:[(0,p.jsx)(o.Image.Source,{source:{uri:e.logo}}),(0,p.jsx)(o.Image.Fallback,{alignItems:"center",justifyContent:"center",bg:"$gray5",delayMs:1e3,children:(0,p.jsx)(o.Icon,{size:40,name:"GlobusOutline",color:"$iconSubdued"})})]}),(0,p.jsx)(o.SizableText,{size:"$bodyLgMedium",children:getConnectedSiteTitle(e.url)})]}),(0,p.jsx)(o.YStack,{p:"$3",backgroundColor:"$bgSubdued",children:e.networkIds.map((function(t,n){return(0,p.jsxs)(o.XStack,{alignItems:"center",children:[(0,p.jsx)(o.Stack,{mr:"$2",children:(0,p.jsx)(i.um,{size:16,networkId:t})}),(0,p.jsxs)(o.SizableText,{color:"$textSubdued",size:"$bodySmMedium",children:[e.networks[n].name," • ",b.A.shortenAddress({address:e.addresses[n]})]})]},t)}))})]})})},ListEmptyComponent=function(){var e=(0,s.A)();return(0,p.jsx)(o.Empty,{title:e.formatMessage({id:l.ETranslations.settings_no_connected_sites}),description:e.formatMessage({id:l.ETranslations.settings_no_connected_sites_desc}),icon:"ClockAlertOutline"})},keyExtractor=function(e){var t=e?.createdAt,n=e?.url;return`${n}${t}`},ConnectedSites=function(){var e,{sections:t,onEndReached:n}=useGetSignatureSections((e=(0,c.A)((function*(e){return m.A.serviceSignature.getConnectedSites(e)})),function(t){return e.apply(this,arguments)}));return(0,p.jsx)(o.SectionList,{sections:t,estimatedItemSize:154,ItemSeparatorComponent:null,SectionSeparatorComponent:null,renderSectionHeader:function({section:e}){return(0,p.jsx)(o.SectionList.SectionHeader,{title:e.title})},keyExtractor,renderItem:function({item:e}){return(0,p.jsx)(ConnectedSiteItem,{item:e})},ListEmptyComponent,onEndReached:n,onEndReachedThreshold:.3})},SignText_ListEmptyComponent=function(){var e=(0,s.A)();return(0,p.jsx)(o.Empty,{title:e.formatMessage({id:l.ETranslations.settings_no_signed_text}),description:e.formatMessage({id:l.ETranslations.settings_no_signed_text_desc}),icon:"ClockAlertOutline"})},SignTextItem=function({item:e}){var{copyText:t}=(0,o.useClipboard)(),n=(0,r.useCallback)((function(){return t(e.message)}),[e.message,t]);return(0,p.jsx)(o.Stack,{px:"$5",pb:"$3",children:(0,p.jsxs)(o.YStack,{borderWidth:u.A.hairlineWidth,borderRadius:"$3",borderColor:"$borderSubdued",overflow:"hidden",children:[(0,p.jsxs)(o.XStack,{justifyContent:"space-between",pt:"$3",px:"$3",pb:"$1",children:[(0,p.jsxs)(o.SizableText,{size:"$bodyMd",children:[(0,g.fU)(new Date(e.createdAt),{hideSeconds:!0})," •"," ",e.title]}),(0,p.jsx)(o.IconButton,{variant:"tertiary",icon:"Copy1Outline",size:"small",onPress:n})]}),(0,p.jsx)(o.XStack,{justifyContent:"space-between",p:"$3",children:(0,p.jsx)(o.TextArea,{maxHeight:"$24",disabled:!0,editable:!1,selectable:!1,value:"json"===e.contentType?JSON.stringify(JSON.parse(e.message),null,2):e.message,backgroundColor:"transparent",width:"100%",borderWidth:0})}),(0,p.jsxs)(o.XStack,{p:"$3",backgroundColor:"$bgSubdued",alignItems:"center",children:[(0,p.jsx)(o.Stack,{mr:"$2",children:(0,p.jsx)(i.um,{size:16,networkId:e.networkId})}),(0,p.jsxs)(o.SizableText,{color:"$textSubdued",size:"$bodySmMedium",children:[e.network.name," • ",b.A.shortenAddress({address:e.address})]})]})]})})},SignText_keyExtractor=function(e){var t=e?.createdAt;return String(t)},SignText=function(){var e,{sections:t,onEndReached:n}=useGetSignatureSections((e=(0,c.A)((function*(e){return m.A.serviceSignature.getSignedMessages(e)})),function(t){return e.apply(this,arguments)}));return(0,p.jsx)(o.SectionList,{sections:t,keyExtractor:SignText_keyExtractor,estimatedItemSize:191,ItemSeparatorComponent:null,SectionSeparatorComponent:null,renderSectionHeader:function({section:e}){return(0,p.jsx)(o.SectionList.SectionHeader,{title:e.title})},renderItem:function({item:e}){return(0,p.jsx)(SignTextItem,{item:e})},ListEmptyComponent:SignText_ListEmptyComponent,onEndReached:n,onEndReachedThreshold:.3})},j=n(391944),k=n(639563),y=n(982770),$=n(465732),SendTransactionItem=function({data:e}){var t=(0,s.A)();return(0,p.jsxs)(o.XStack,{justifyContent:"space-between",w:"100%",alignItems:"center",children:[(0,p.jsxs)(o.XStack,{alignItems:"center",children:[(0,p.jsx)(j.o,{size:"lg",tokenImageUri:e.token.logoURI}),(0,p.jsx)(o.SizableText,{ml:"$3",size:"$bodyLgMedium",children:t.formatMessage({id:l.ETranslations.global_send})})]}),(0,p.jsx)(o.NumberSizeableText,{size:"$bodyLgMedium",formatter:"balance",formatterOptions:{tokenSymbol:e.token.symbol.toUpperCase(),showPlusMinusSigns:!0},children:`-${e.amount}`})]})},ApproveTransactionItem=function({data:e}){var t=(0,s.A)();return(0,p.jsxs)(o.XStack,{justifyContent:"space-between",w:"100%",alignItems:"center",children:[(0,p.jsxs)(o.XStack,{alignItems:"center",children:[(0,p.jsx)(j.o,{size:"lg",tokenImageUri:e.token.logoURI}),(0,p.jsx)(o.SizableText,{ml:"$3",size:"$bodyLgMedium",children:t.formatMessage({id:l.ETranslations.global_approve})})]}),(0,p.jsx)(o.XStack,{children:e.isUnlimited?(0,p.jsx)(o.SizableText,{size:"$bodyLgMedium",children:t.formatMessage({id:l.ETranslations.swap_page_provider_approve_amount_un_limit})}):(0,p.jsx)(o.NumberSizeableText,{size:"$bodyLgMedium",formatter:"balance",formatterOptions:{tokenSymbol:e.token.symbol.toUpperCase(),showPlusMinusSigns:!0},children:`-${e.amount}`})})]})},SwapTransactionItem=function({data:e}){var t=(0,s.A)();return(0,p.jsxs)(o.XStack,{justifyContent:"space-between",w:"100%",children:[(0,p.jsxs)(o.XStack,{alignItems:"center",children:[(0,p.jsxs)(o.Stack,{w:40,h:40,alignItems:"flex-end",justifyContent:"flex-end",mr:"$3",children:[(0,p.jsx)(o.Stack,{position:"absolute",left:"$0",top:"$0",children:(0,p.jsx)(j.o,{size:"sm",tokenImageUri:e.fromToken.logoURI})}),(0,p.jsx)(o.Stack,{borderWidth:2,borderColor:"$bgApp",borderRadius:"$full",zIndex:1,children:(0,p.jsx)(j.o,{size:"sm",tokenImageUri:e.toToken.logoURI})})]}),(0,p.jsx)(o.SizableText,{size:"$bodyLgMedium",children:t.formatMessage({id:l.ETranslations.global_swap})})]}),(0,p.jsxs)(o.YStack,{alignItems:"flex-end",children:[(0,p.jsx)(o.NumberSizeableText,{size:"$bodyLgMedium",formatter:"balance",formatterOptions:{tokenSymbol:e.toToken.symbol.toUpperCase(),showPlusMinusSigns:!0},children:`+${e.toAmount}`}),(0,p.jsx)(o.NumberSizeableText,{size:"$bodyMd",color:"$textSubdued",formatter:"balance",formatterOptions:{tokenSymbol:e.fromToken.symbol.toUpperCase(),showPlusMinusSigns:!0},children:`-${e.fromAmount}`})]})]})},EarnLidoTransactionItem=function({data:e}){var t,n=(0,y.g)(),r=e.receive?{data:e.receive,symbol:"+"}:void 0,s=e.send?{data:e.send,symbol:"-"}:void 0;return!r&&s&&(r=s,s=void 0),(0,p.jsxs)(o.XStack,{justifyContent:"space-between",w:"100%",children:[(0,p.jsxs)(o.XStack,{alignItems:"center",children:[(0,p.jsx)(j.o,{size:"lg",tokenImageUri:null!=(t=r?.data?.token.logoURI)?t:s?.data?.token.logoURI}),(0,p.jsx)(o.SizableText,{ml:"$3",size:"$bodyLgMedium",children:n(e.label)})]}),(0,p.jsxs)(o.YStack,{alignItems:"flex-end",justifyContent:"center",children:[r?(0,p.jsx)(o.NumberSizeableText,{size:"$bodyLgMedium",formatter:"balance",formatterOptions:{tokenSymbol:r.data.token.symbol,showPlusMinusSigns:!0},children:`${r.symbol}${r.data.amount}`}):null,s?(0,p.jsx)(o.NumberSizeableText,{size:"$bodyMd",formatter:"balance",color:"$textSubdued",formatterOptions:{tokenSymbol:s.data.token.symbol,showPlusMinusSigns:!0},children:`${s.symbol}${s.data.amount}`}):null]})]})},ContractInteractionTransactionItem=function(){var e=(0,s.A)();return(0,p.jsx)(o.XStack,{justifyContent:"space-between",w:"100%",alignItems:"center",children:(0,p.jsxs)(o.XStack,{alignItems:"center",children:[(0,p.jsx)(o.Image,{borderRadius:"$full",overflow:"hidden",width:40,height:40,mr:"$3",children:(0,p.jsx)(o.Image.Fallback,{alignItems:"center",justifyContent:"center",bg:"$gray5",children:(0,p.jsx)(o.Icon,{size:40,name:"GlobusOutline",color:"$iconSubdued"})})}),(0,p.jsx)(o.SizableText,{size:"$bodyLgMedium",children:e.formatMessage({id:l.ETranslations.transaction__contract_interaction})})]})})},TransactionData=function({data:e}){return e.type===$.w.SEND?(0,p.jsx)(SendTransactionItem,{data:e}):e.type===$.w.APPROVE?(0,p.jsx)(ApproveTransactionItem,{data:e}):e.type===$.w.SWAP?(0,p.jsx)(SwapTransactionItem,{data:e}):e.type===$.w.EARN?(0,p.jsx)(EarnLidoTransactionItem,{data:e}):e.type===$.w.CONTRACT_INTERACTION?(0,p.jsx)(ContractInteractionTransactionItem,{}):null},TransactionItem=function({item:e}){var t=e.network,n=e.vaultSettings,a=(0,s.A)(),d=(0,r.useCallback)((function(){e.hash?(0,k.oV)({networkId:t.id,txid:e.hash}):(0,k.HM)({networkId:t.id,address:e.address})}),[e,t]);return(0,p.jsx)(o.Stack,{px:"$5",pb:"$3",children:(0,p.jsxs)(o.YStack,{borderWidth:u.A.hairlineWidth,borderRadius:"$3",borderColor:"$borderSubdued",overflow:"hidden",children:[(0,p.jsxs)(o.XStack,{justifyContent:"space-between",pt:"$3",px:"$3",pb:"$1",children:[(0,p.jsxs)(o.SizableText,{size:"$bodyMd",children:[(0,g.fU)(new Date(e.createdAt),{hideSeconds:!0})," • ",e.title]}),n.hideBlockExplorer?null:(0,p.jsx)(o.IconButton,{variant:"tertiary",title:e.hash?a.formatMessage({id:l.ETranslations.settings_view_transaction_in_explorer}):a.formatMessage({id:l.ETranslations.settings_view_address_in_explorer}),icon:e.hash?"OpenOutline":"GlobusOutline",size:"small",onPress:d})]}),(0,p.jsx)(o.XStack,{p:"$3",children:(0,p.jsx)(o.XStack,{h:44,width:"100%",alignItems:"center",children:(0,p.jsx)(TransactionData,{data:e.data})})}),(0,p.jsxs)(o.XStack,{p:"$3",backgroundColor:"$bgSubdued",alignItems:"center",children:[(0,p.jsx)(o.Stack,{mr:"$2",children:(0,p.jsx)(i.um,{size:16,networkId:e.networkId})}),(0,p.jsxs)(o.SizableText,{color:"$textSubdued",size:"$bodySmMedium",children:[e.network.name," •"," ",b.A.shortenAddress({address:e.address})]})]})]})})},Transactions_ListEmptyComponent=function(){var e=(0,s.A)();return(0,p.jsx)(o.Empty,{title:e.formatMessage({id:l.ETranslations.settings_no_signed_transactions}),description:e.formatMessage({id:l.ETranslations.settings_no_signed_transactions_desc}),icon:"ClockAlertOutline"})},Transactions_keyExtractor=function(e){var t=e?.hash,n=e?.createdAt;return t||String(n)},Transactions=function(){var e,{sections:t,onEndReached:n}=useGetSignatureSections((e=(0,c.A)((function*(e){return m.A.serviceSignature.getSignedTransactions(e)})),function(t){return e.apply(this,arguments)}));return(0,p.jsx)(o.SectionList,{sections:t,estimatedItemSize:158,ItemSeparatorComponent:null,SectionSeparatorComponent:null,renderSectionHeader:function({section:e}){return(0,p.jsx)(o.SectionList.SectionHeader,{title:e.title})},keyExtractor:Transactions_keyExtractor,renderItem:function({item:e}){return(0,p.jsx)(TransactionItem,{item:e})},ListEmptyComponent:Transactions_ListEmptyComponent,onEndReached:n,onEndReachedThreshold:.3})},w={paddingTop:10},ListHeaderComponent=function(){var e=(0,s.A)(),{searchContent:t,setSearchContent:n}=(0,r.useContext)(S);return(0,p.jsx)(o.Stack,{px:"$4",w:"100%",children:(0,p.jsx)(o.SearchBar,{value:t,onChangeText:n,placeholder:e.formatMessage({id:l.ETranslations.global_search_address})})})},I=(0,r.memo)((function({networkId:e,onPress:t}){return(0,p.jsx)(o.XStack,{role:"button",flexShrink:1,alignItems:"center",p:"$1",borderRadius:"$2",hoverStyle:{bg:"$bgHover"},pressStyle:{bg:"$bgActive"},focusable:!0,focusStyle:{outlineWidth:2,outlineColor:"$focusRing",outlineStyle:"solid"},userSelect:"none",onPress:t,children:(0,p.jsx)(i.um,{size:24,networkId:e})})}));const SignatureRecord=function(){var e=(0,s.A)(),[t,n]=(0,r.useState)((0,d.V$)().onekeyall),[i,c]=(0,r.useState)(""),u=(0,r.useMemo)((function(){return{networkId:t,searchContent:i,setNetworkId:n,setSearchContent:c}}),[t,i,n,c]),m=(0,a.A)(),b=(0,r.useCallback)((function(){m({defaultNetworkId:t,onSelect(e){n?.(e.id)}})}),[m,t,n]),g=(0,r.useCallback)((function(){return(0,p.jsx)(I,{networkId:t,onPress:b})}),[b,t]),h=(0,r.useMemo)((function(){return[{title:e.formatMessage({id:l.ETranslations.settings_transactions}),page:Transactions},{title:e.formatMessage({id:l.ETranslations.settings_sign_text}),page:SignText},{title:e.formatMessage({id:l.ETranslations.explore_dapp_connections}),page:ConnectedSites}]}),[e]);return(0,p.jsxs)(o.Page,{children:[(0,p.jsx)(o.Page.Header,{title:e.formatMessage({id:l.ETranslations.settings_signature_record}),headerRight:g}),(0,p.jsx)(S.Provider,{value:u,children:(0,p.jsx)(o.Page.Body,{children:(0,p.jsx)(o.Tab.Page,{ListHeaderComponent:(0,p.jsx)(ListHeaderComponent,{}),data:h,contentContainerStyle:w,initialScrollIndex:0})})})]})}},982770:(e,t,n)=>{n.d(t,{g:()=>useEarnLabelFn});var r=n(908867),s=n(254491);function useEarnLabelFn(){var e=(0,r.A)();return function(t){return"stake"===t.toLowerCase()?e.formatMessage({id:s.ETranslations.earn_stake}):"redeem"===t.toLowerCase()?e.formatMessage({id:s.ETranslations.earn_redeem}):"claim"===t.toLowerCase()?e.formatMessage({id:s.ETranslations.earn_claim}):t}}}}]);