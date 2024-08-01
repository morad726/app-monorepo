"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[17130],{326745:(e,t,n)=>{n.d(t,{u:()=>useAppRoute});var o=n(724249);function useAppRoute(){return(0,o.lq)()}},939799:(e,t,n)=>{n.d(t,{A:()=>ValuePriceListItem});var o=n(490343),a=n(831085),ValuePriceListItem=function({amount:e,tokenSymbol:t,fiatSymbol:n,fiatValue:i}){return(0,a.jsxs)(o.XStack,{space:"$1",maxWidth:"$56",justifyContent:"flex-end",flexWrap:"wrap",children:[(0,a.jsx)(o.XStack,{children:(0,a.jsx)(o.NumberSizeableText,{size:"$bodyLgMedium",formatter:"balance",formatterOptions:{tokenSymbol:t},children:e})}),(0,a.jsx)(o.XStack,{maxWidth:"$56",children:(0,a.jsxs)(o.SizableText,{children:["(",(0,a.jsx)(o.NumberSizeableText,{size:"$bodyLgMedium",formatter:"value",formatterOptions:{currency:n},children:i}),")"]})})]})}},440905:(e,t,n)=>{n.d(t,{IM:()=>useLidoClaim,Ow:()=>useLidoWithdraw,cx:()=>useLidoStake});var o=n(324586),a=n(586330),i=n(514041),r=n(60153),s=n(927799),c=n(714191),l=n(161024);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,o.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function useLidoStake({networkId:e,accountId:t}){var n,{navigationToSendConfirm:o}=(0,s.E)({accountId:t,networkId:e});return(0,i.useCallback)((n=(0,a.A)((function*({amount:n,stakingInfo:a,onSuccess:i,onFail:s}){var c=yield r.A.serviceAccount.getAccount({accountId:t,networkId:e}),l=yield r.A.serviceStaking.buildLidoEthStakingTransaction({amount:n,networkId:e});yield o({encodedTx:_objectSpread(_objectSpread({},l),{},{from:c.address}),stakingInfo:a,onSuccess:i,onFail:s})})),function(e){return n.apply(this,arguments)}),[o,t,e])}function useLidoWithdraw({networkId:e,accountId:t}){var n,{navigationToSendConfirm:o}=(0,s.E)({accountId:t,networkId:e});return(0,i.useCallback)((n=(0,a.A)((function*({amount:n,stakingInfo:a,onSuccess:i,onFail:s}){var d=yield r.A.serviceAccount.getAccount({accountId:t,networkId:e}),{message:u,deadline:m}=yield r.A.serviceStaking.buildLidoEthPermitMessage({accountId:t,networkId:e,amount:n}),p=yield r.A.serviceDApp.openSignMessageModal({accountId:t,networkId:e,request:{origin:"https://lido.fi/",scope:"ethereum"},unsignedMessage:{type:l.$.TYPED_DATA_V4,message:u,payload:[d.address,u]},sceneName:c.Zs.home}),f=yield r.A.serviceStaking.buildLidoEthWithdrawalTransaction({amount:n,signature:p,networkId:e,accountId:t,deadline:m});yield o({encodedTx:_objectSpread(_objectSpread({},f),{},{from:d.address}),stakingInfo:a,onSuccess:i,onFail:s})})),function(e){return n.apply(this,arguments)}),[t,e,o])}function useLidoClaim({networkId:e,accountId:t}){var n,{navigationToSendConfirm:o}=(0,s.E)({accountId:t,networkId:e});return(0,i.useCallback)((n=(0,a.A)((function*({requestIds:n,stakingInfo:a,onSuccess:i,onFail:s}){var c=yield r.A.serviceAccount.getAccount({accountId:t,networkId:e}),l=yield r.A.serviceStaking.buildLidoEthClaimTransaction({requestIds:n,networkId:e});yield o({encodedTx:_objectSpread(_objectSpread({},l),{},{from:c.address}),stakingInfo:a,onSuccess:i,onFail:s})})),function(e){return n.apply(this,arguments)}),[o,t,e])}},117130:(e,t,n)=>{n.r(t),n.d(t,{default:()=>pages_EthLidoStake});var o=n(586330),a=n(514041),i=n(241440),r=n(908867),s=n(490343),c=n(498356),l=n(326745),d=n(254491),u=n(213644),m=n(550082),p=n(88803),f=n(791088),k=n(391944),b=n(604343),g=n(827843),y=n(939799),x=n(831085),h={color:"$textSubdued",size:"$bodyLg"},LidoStake=function({price:e,balance:t,apr:n=4,minAmount:c="0",minTransactionFee:l="0",tokenImageUri:u,tokenSymbol:m,stTokenSymbol:S,onConfirm:j}){var I=(0,r.A)(),[A,T]=(0,a.useState)(!1),[v,w]=(0,a.useState)(""),[{currencyInfo:{symbol:_}}]=(0,b.useSettingsPersistAtom)(),P=(0,a.useCallback)((function(e){new i.A(e).isNaN()?""===e&&w(""):w(e)}),[]),C=(0,a.useCallback)((0,o.A)((function*(){T(!0);try{yield j?.(v)}finally{T(!1)}})),[j,v]),M=(0,a.useCallback)((function(){var e=new i.A(t).minus(l);e.gt(0)?P(e.toFixed()):P(t)}),[P,t,l]),O=(0,a.useMemo)((function(){var t=new i.A(v);if(!t.isNaN())return t.multipliedBy(e).toFixed()}),[v,e]),E=(0,a.useMemo)((function(){return new i.A(v).gt(t)}),[v,t]),L=(0,a.useMemo)((function(){var e=new i.A(c),t=new i.A(v);return!(!e.isGreaterThan(0)||!t.isGreaterThan(0))&&t.isLessThan(e)}),[c,v]),$=(0,a.useMemo)((function(){var e=(0,i.A)(v);return e.isNaN()||e.isLessThanOrEqualTo(0)||E||L}),[v,E,L]),F=(0,a.useMemo)((function(){var t=(0,i.A)(v);if(!v||t.isNaN())return null;var o=(0,i.A)(v).multipliedBy(n).dividedBy(100);return(0,x.jsx)(y.A,{amount:o.toFixed(),tokenSymbol:m,fiatSymbol:_,fiatValue:o.multipliedBy(e).toFixed()})}),[v,n,e,_,m]);return(0,x.jsxs)(s.YStack,{children:[(0,x.jsxs)(s.Stack,{mx:"$2",px:"$3",space:"$5",children:[(0,x.jsx)(p.J,{hasError:E||L,value:v,onChange:P,tokenSelectorTriggerProps:{selectedTokenImageUri:u,selectedTokenSymbol:m.toUpperCase()},balanceProps:{value:t,onPress:M},inputProps:{placeholder:"0"},valueProps:{value:O,currency:O?_:void 0},enableMaxAmount:!0}),(0,x.jsxs)(s.YStack,{space:"$1",children:[L?(0,x.jsx)(s.Alert,{icon:"InfoCircleOutline",type:"critical",title:I.formatMessage({id:d.ETranslations.earn_minimum_amount},{number:`${c} ${m}`})}):null,E?(0,x.jsx)(s.Alert,{icon:"InfoCircleOutline",type:"critical",title:I.formatMessage({id:d.ETranslations.earn_insufficient_balance})}):null]})]}),(0,x.jsx)(s.Stack,{children:(0,x.jsxs)(s.YStack,{children:[F?(0,x.jsx)(f.c,{title:I.formatMessage({id:d.ETranslations.earn_est_annual_rewards}),titleProps:h,children:F}):null,v?(0,x.jsx)(f.c,{title:I.formatMessage({id:d.ETranslations.earn_est_receive}),titleProps:h,children:(0,x.jsx)(s.NumberSizeableText,{formatter:"balance",size:"$bodyLgMedium",formatterOptions:{tokenSymbol:S},children:v})}):null,(0,x.jsx)(f.c,{title:I.formatMessage({id:d.ETranslations.global_apr}),titleProps:h,children:(0,x.jsx)(f.c.Text,{primary:`${n}%`,primaryTextProps:{color:"$textSuccess"}})}),(0,x.jsx)(f.c,{title:I.formatMessage({id:d.ETranslations.global_protocol}),titleProps:h,children:(0,x.jsxs)(s.XStack,{space:"$2",alignItems:"center",children:[(0,x.jsx)(k.o,{size:"xs",tokenImageUri:g.a3}),(0,x.jsx)(s.SizableText,{size:"$bodyLgMedium",children:"Lido"})]})}),(0,x.jsx)(f.c,{title:I.formatMessage({id:d.ETranslations.earn_stake_release_period}),titleProps:h,children:(0,x.jsx)(f.c.Text,{primary:I.formatMessage({id:d.ETranslations.earn_less_than_number_days},{number:4})})})]})}),(0,x.jsx)(s.Page.Footer,{onConfirmText:I.formatMessage({id:d.ETranslations.earn_stake}),confirmButtonProps:{onPress:C,loading:A,disabled:$}})]})},S=n(440905);const pages_EthLidoStake=function(){var e,t=(0,l.u)(),{accountId:n,networkId:p,balance:f,price:k,token:b,apr:g,stToken:y,minTransactionFee:h="0"}=t.params,j=(0,S.cx)({accountId:n,networkId:p}),I=(0,c.A)(),A=(0,a.useCallback)((e=(0,o.A)((function*(e){var t=(0,i.A)(e).shiftedBy(b.decimals).toFixed(0);yield j({amount:t,stakingInfo:{label:m.Z.Stake,protocol:"lido",send:{token:b,amount:e},receive:{token:y,amount:e},tags:["lido-eth"]},onSuccess:function(t){I.pop(),u.U.staking.page.staking({token:b,amount:e,stakingProtocol:"lido",tokenValue:(0,i.A)(e).multipliedBy(k).toFixed(),txnHash:t[0].signedTx.txid})}})})),function(t){return e.apply(this,arguments)}),[j,I,b,y,k]),T=(0,r.A)();return(0,x.jsxs)(s.Page,{children:[(0,x.jsx)(s.Page.Header,{title:T.formatMessage({id:d.ETranslations.earn_stake_token},{token:"ETH"})}),(0,x.jsx)(s.Page.Body,{children:(0,x.jsx)(LidoStake,{minTransactionFee:h,apr:g,price:k,balance:f,minAmount:(0,i.A)(1).shiftedBy(-b.decimals).toFixed(),tokenImageUri:b.logoURI,tokenSymbol:b.symbol,stTokenSymbol:y.symbol,onConfirm:A})})]})}},827843:(e,t,n)=>{n.d(t,{$e:()=>r,Cp:()=>a,LN:()=>i,a3:()=>o});var o="https://uni.onekey-asset.com/static/logo/Lido.png",a="https://uni.onekey-asset.com/static/chain/eth.png",i="https://uni.onekey-asset.com/static/chain/polygon.png",r="https://lido.fi/"},550082:(e,t,n)=>{n.d(t,{Z:()=>o});var o=function(e){return e.Stake="Stake",e.Claim="Claim",e.Redeem="Redeem",e}({})}}]);