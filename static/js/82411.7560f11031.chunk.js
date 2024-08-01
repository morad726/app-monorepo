"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[82411],{326745:(e,n,t)=>{t.d(n,{u:()=>useAppRoute});var o=t(724249);function useAppRoute(){return(0,o.lq)()}},188392:(e,n,t)=>{t.d(n,{d:()=>LidoWithdraw});var o=t(586330),a=t(514041),i=t(241440),r=t(908867),s=t(490343),c=t(88803),l=t(791088),d=t(391944),u=t(604343),m=t(254491),f=t(827843),p=t(939799),b=t(831085),g={color:"$textSubdued",size:"$bodyLg"},LidoWithdraw=function({balance:e,price:n,tokenImageUri:t,tokenSymbol:k,receivingTokenSymbol:y,minAmount:h="0",rate:x="1",onConfirm:S}){var[I,j]=(0,a.useState)(!1),[v,A]=(0,a.useState)(""),[{currencyInfo:{symbol:w}}]=(0,u.useSettingsPersistAtom)(),T=(0,a.useCallback)((0,o.A)((function*(){try{j(!0),yield S?.(v)}finally{j(!1)}})),[v,S]),P=(0,a.useCallback)((function(e){new i.A(e).isNaN()?""===e&&A(""):A(e)}),[]),_=(0,a.useMemo)((function(){var e=new i.A(v);if(!e.isNaN())return e.multipliedBy(n).toFixed()}),[v,n]),C=(0,a.useMemo)((function(){return new i.A(v).gt(e)}),[v,e]),M=(0,a.useMemo)((function(){var e=new i.A(h),n=new i.A(v);return!(!e.isGreaterThan(0)||!n.isGreaterThan(0))&&n.isLessThan(e)}),[h,v]),O=(0,a.useCallback)((function(){P(e)}),[P,e]),E=(0,a.useMemo)((function(){return(0,i.A)(v).isNaN()||C||M}),[v,C,M]),L=(0,a.useMemo)((function(){var e=(0,i.A)(v);if(e.isNaN())return null;var t=e.dividedBy(x).toFixed(),o=e.multipliedBy(n).dividedBy(x).toFixed();return(0,b.jsx)(p.A,{amount:t,fiatSymbol:w,fiatValue:o,tokenSymbol:y})}),[v,n,w,y,x]),$=(0,r.A)();return(0,b.jsxs)(s.Page,{children:[(0,b.jsx)(s.Page.Header,{title:$.formatMessage({id:m.ETranslations.earn_redeem})}),(0,b.jsx)(s.Page.Body,{children:(0,b.jsxs)(s.YStack,{children:[(0,b.jsxs)(s.Stack,{mx:"$2",px:"$3",space:"$5",children:[(0,b.jsx)(c.J,{hasError:C||M,value:v,onChange:P,tokenSelectorTriggerProps:{selectedTokenImageUri:t,selectedTokenSymbol:k},inputProps:{placeholder:"0"},balanceProps:{value:e,onPress:O},valueProps:{value:_,currency:_?w:void 0},enableMaxAmount:!0}),(0,b.jsxs)(s.YStack,{space:"$1",children:[M?(0,b.jsx)(s.Alert,{icon:"InfoCircleOutline",type:"critical",title:$.formatMessage({id:m.ETranslations.earn_minimum_amount},{number:`${h} ${k}`})}):null,C?(0,b.jsx)(s.Alert,{icon:"InfoCircleOutline",type:"critical",title:$.formatMessage({id:m.ETranslations.earn_insufficient_staked_balance})}):null]})]}),(0,b.jsxs)(s.YStack,{children:[L?(0,b.jsx)(l.c,{title:$.formatMessage({id:m.ETranslations.earn_receive}),titleProps:g,children:L}):null,v?(0,b.jsx)(l.c,{title:$.formatMessage({id:m.ETranslations.earn_pay_with}),titleProps:g,children:(0,b.jsx)(s.SizableText,{children:(0,b.jsx)(s.NumberSizeableText,{formatter:"balance",size:"$bodyLgMedium",formatterOptions:{tokenSymbol:k},children:v})})}):null,(0,b.jsx)(l.c,{title:$.formatMessage({id:m.ETranslations.global_protocol}),titleProps:g,children:(0,b.jsxs)(s.XStack,{space:"$2",alignItems:"center",children:[(0,b.jsx)(d.o,{size:"xs",tokenImageUri:f.a3}),(0,b.jsx)(s.SizableText,{size:"$bodyLgMedium",children:"Lido"})]})}),(0,b.jsx)(l.c,{title:$.formatMessage({id:m.ETranslations.earn_stake_release_period}),titleProps:g,children:(0,b.jsx)(l.c.Text,{primary:$.formatMessage({id:m.ETranslations.earn_less_than_number_days},{number:4})})})]})]})}),(0,b.jsx)(s.Page.Footer,{onConfirmText:$.formatMessage({id:m.ETranslations.earn_redeem}),confirmButtonProps:{onPress:T,loading:I,disabled:E}})]})}},939799:(e,n,t)=>{t.d(n,{A:()=>ValuePriceListItem});var o=t(490343),a=t(831085),ValuePriceListItem=function({amount:e,tokenSymbol:n,fiatSymbol:t,fiatValue:i}){return(0,a.jsxs)(o.XStack,{space:"$1",maxWidth:"$56",justifyContent:"flex-end",flexWrap:"wrap",children:[(0,a.jsx)(o.XStack,{children:(0,a.jsx)(o.NumberSizeableText,{size:"$bodyLgMedium",formatter:"balance",formatterOptions:{tokenSymbol:n},children:e})}),(0,a.jsx)(o.XStack,{maxWidth:"$56",children:(0,a.jsxs)(o.SizableText,{children:["(",(0,a.jsx)(o.NumberSizeableText,{size:"$bodyLgMedium",formatter:"value",formatterOptions:{currency:t},children:i}),")"]})})]})}},440905:(e,n,t)=>{t.d(n,{IM:()=>useLidoClaim,Ow:()=>useLidoWithdraw,cx:()=>useLidoStake});var o=t(324586),a=t(586330),i=t(514041),r=t(60153),s=t(927799),c=t(714191),l=t(161024);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach((function(n){(0,o.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function useLidoStake({networkId:e,accountId:n}){var t,{navigationToSendConfirm:o}=(0,s.E)({accountId:n,networkId:e});return(0,i.useCallback)((t=(0,a.A)((function*({amount:t,stakingInfo:a,onSuccess:i,onFail:s}){var c=yield r.A.serviceAccount.getAccount({accountId:n,networkId:e}),l=yield r.A.serviceStaking.buildLidoEthStakingTransaction({amount:t,networkId:e});yield o({encodedTx:_objectSpread(_objectSpread({},l),{},{from:c.address}),stakingInfo:a,onSuccess:i,onFail:s})})),function(e){return t.apply(this,arguments)}),[o,n,e])}function useLidoWithdraw({networkId:e,accountId:n}){var t,{navigationToSendConfirm:o}=(0,s.E)({accountId:n,networkId:e});return(0,i.useCallback)((t=(0,a.A)((function*({amount:t,stakingInfo:a,onSuccess:i,onFail:s}){var d=yield r.A.serviceAccount.getAccount({accountId:n,networkId:e}),{message:u,deadline:m}=yield r.A.serviceStaking.buildLidoEthPermitMessage({accountId:n,networkId:e,amount:t}),f=yield r.A.serviceDApp.openSignMessageModal({accountId:n,networkId:e,request:{origin:"https://lido.fi/",scope:"ethereum"},unsignedMessage:{type:l.$.TYPED_DATA_V4,message:u,payload:[d.address,u]},sceneName:c.Zs.home}),p=yield r.A.serviceStaking.buildLidoEthWithdrawalTransaction({amount:t,signature:f,networkId:e,accountId:n,deadline:m});yield o({encodedTx:_objectSpread(_objectSpread({},p),{},{from:d.address}),stakingInfo:a,onSuccess:i,onFail:s})})),function(e){return t.apply(this,arguments)}),[n,e,o])}function useLidoClaim({networkId:e,accountId:n}){var t,{navigationToSendConfirm:o}=(0,s.E)({accountId:n,networkId:e});return(0,i.useCallback)((t=(0,a.A)((function*({requestIds:t,stakingInfo:a,onSuccess:i,onFail:s}){var c=yield r.A.serviceAccount.getAccount({accountId:n,networkId:e}),l=yield r.A.serviceStaking.buildLidoEthClaimTransaction({requestIds:t,networkId:e});yield o({encodedTx:_objectSpread(_objectSpread({},l),{},{from:c.address}),stakingInfo:a,onSuccess:i,onFail:s})})),function(e){return t.apply(this,arguments)}),[o,n,e])}},382411:(e,n,t)=>{t.r(n),t.d(n,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var o=t(586330),a=t(514041),i=t(241440),r=t(498356),s=t(326745),c=t(213644),l=t(550082),d=t(188392),u=t(440905),m=t(831085);const __WEBPACK_DEFAULT_EXPORT__=function(){var e,n=(0,s.u)(),{accountId:t,networkId:f,balance:p,token:b,price:g,receivingToken:k}=n.params,y=(0,r.A)(),h=(0,u.Ow)({accountId:t,networkId:f}),x=(0,a.useCallback)((e=(0,o.A)((function*(e){var n=(0,i.A)(e).shiftedBy(b.decimals).toFixed(0);yield h({amount:n,stakingInfo:{label:l.Z.Redeem,protocol:"lido",send:{token:b,amount:e},tags:["lido-eth"]},onSuccess:function(n){y.pop(),c.U.staking.page.unstaking({token:b,amount:e,stakingProtocol:"lido",tokenValue:(0,i.A)(e).multipliedBy(g).toFixed(),txnHash:n[0].signedTx.txid})}})})),function(n){return e.apply(this,arguments)}),[h,b,y,g]);return(0,m.jsx)(d.d,{receivingTokenSymbol:k.symbol,price:g,balance:p,minAmount:(0,i.A)(100).shiftedBy(-b.decimals).toFixed(),tokenSymbol:b.symbol,tokenImageUri:b.logoURI,onConfirm:x})}},827843:(e,n,t)=>{t.d(n,{$e:()=>r,Cp:()=>a,LN:()=>i,a3:()=>o});var o="https://uni.onekey-asset.com/static/logo/Lido.png",a="https://uni.onekey-asset.com/static/chain/eth.png",i="https://uni.onekey-asset.com/static/chain/polygon.png",r="https://lido.fi/"},550082:(e,n,t)=>{t.d(n,{Z:()=>o});var o=function(e){return e.Stake="Stake",e.Claim="Claim",e.Redeem="Redeem",e}({})}}]);