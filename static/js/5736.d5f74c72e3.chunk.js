"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5736],{605736:(e,t,n)=>{n.r(t),n.d(t,{default:()=>BatchCreateAccountForm});var r=n(586330),a=n(514041),o=n(908867),s=n(490343),l=n(60153),i=n(325809),c=n(498356),u=n(162616),d=n(848312),f=n(254491),m=n(757559),g=n(184251),h=n(584186),w=n(714191),v=n(15159),b=n(98807),p=n(107442),A=n(831085);function BatchCreateAccountFormPage({walletId:e,networkId:t}){var n,{activeAccount:i}=(0,u.LH)({num:0}),w=(0,c.A)(),k=(0,o.A)(),x=(0,a.useRef)(void 0),y=(0,a.useCallback)((n=(0,r.A)((function*({replace:t}){var n=x?.current?.getValues();n&&w[t?"replace":"push"](m.v3.BatchCreateAccountPreview,{walletId:e,networkId:n.networkId})})),function(e){return n.apply(this,arguments)}),[w,e]),C=(0,a.useRef)(!1);return(0,A.jsxs)(s.Page,{scrollEnabled:!0,safeAreaEnabled:!0,children:[(0,A.jsx)(s.Page.Header,{title:k.formatMessage({id:f.ETranslations.global_bulk_add_accounts})}),(0,A.jsxs)(s.Page.Body,{p:"$4",children:[(0,A.jsx)(b.N,{alwaysShowAdvancedSettings:!0,defaultNetworkId:t||(0,d.V$)().onekeyall,defaultDeriveType:void 0,defaultFrom:"1",defaultCount:String(b.Bc),onNetworkChanged:function({isAllNetwork:e}){e||y({replace:!0})},formRef:x}),null]}),(0,A.jsx)(s.Page.Footer,{confirmButtonProps:{disabled:!1},onConfirm:(0,r.A)((function*(){try{var t;if(C.current)return;if(C.current=!0,Object.keys(null!=(t=x?.current?.formState?.errors)?t:{}).length)return void(C.current=!1);yield x.current?.handleSubmit((n=(0,r.A)((function*(t){var n=t?.networkId;if(g.A.isAllNetwork({networkId:n})){var r,a;yield l.A.servicePassword.promptPasswordVerifyByWallet({walletId:e,reason:v.a.CreateOrRemoveWallet});var o=null!=(r=t?.from)?r:"1",s=null!=(a=t?.count)?a:String(b.Bc),i=parseInt(o,10),c=parseInt(s,10),u=i-1,d=u+c-1;(0,p.g)({navigation:w,allNetworkInfo:{count:c}}),yield h.A.wait(600),yield l.A.serviceBatchCreateAccount.startBatchCreateAccountsFlowForAllNetwork({walletId:e,fromIndex:u,toIndex:d,excludedIndexes:{},saveToDb:!0,hideCheckingDeviceLoading:!0})}else yield y({replace:!1})})),function(e){return n.apply(this,arguments)}))()}finally{C.current=!1}var n}))})]})}function BatchCreateAccountForm({route:e}){var t,{walletId:n,networkId:r}=null!=(t=e.params)?t:{};return(0,A.jsx)(i.b8,{enabledNum:[0],config:{sceneName:w.Zs.home,sceneUrl:""},children:(0,A.jsx)(BatchCreateAccountFormPage,{walletId:n,networkId:r})})}},98807:(e,t,n)=>{n.d(t,{Bc:()=>m,N:()=>BatchCreateAccountFormBase});var r=n(514041),a=n(241440),o=n(908867),s=n(490343),l=n(325809),i=n(575995),c=n(848312),u=n(254491),d=n(184251),f=n(831085),m=15,g=100,h=2**31,w=h+1-15;function AdvancedSettingsFormField({form:e,isAllNetwork:t,alwaysShowAdvancedSettings:n}){var l=(0,o.A)(),i=(0,s.useMedia)(),[c,d]=(0,r.useState)(!n),m=(0,r.useCallback)((function(){d((function(e){return!e}))}),[]),g=e.watch("from"),h=e.watch("count"),v=e.formState.errors.from,b=(0,r.useMemo)((function(){if(!g||!h)return"";var e=parseInt(g,10),t=e+parseInt(h,10)-1;return`${l.formatMessage({id:u.ETranslations.global_serial_number_start_desc},{from:e,to:t})}`}),[h,g,l]);return(0,f.jsxs)(s.Stack,{children:[n?null:(0,f.jsxs)(s.XStack,{space:"$3",py:"$2",ai:"center",onPress:m,children:[(0,f.jsx)(s.Stack,{children:(0,f.jsx)(s.SizableText,{size:"$bodyMdMedium",color:"$textSubdued",children:l.formatMessage({id:u.ETranslations.global_advantage_settings})})}),(0,f.jsx)(s.IconButton,{icon:c?"ChevronDownSmallOutline":"ChevronTopSmallOutline",variant:"tertiary",onPress:m})]}),(0,f.jsx)(s.Stack,{width:c?0:void 0,height:c?0:void 0,opacity:c?0:void 0,overflow:c?"hidden":void 0,children:(0,f.jsx)(s.Stack,{mt:n?void 0:"$4",children:(0,f.jsxs)(s.Form.Field,{label:l.formatMessage({id:u.ETranslations.global_serial_number_start}),name:"from",rules:{required:!0,validate:function(e){var t=new a.A(e);return!e||t.isNaN()?l.formatMessage({id:u.ETranslations.global_bulk_accounts_page_number_error}):!t.isLessThan(1)||"The minimum number of accounts is 1"},onChange:function(t){var n=(t?.target?.value||"").replace(/\D/g,""),r=new a.A(parseInt(n,10));n&&!r.isNaN()?r.isLessThan(1)?e.setValue("from","1"):r.isGreaterThanOrEqualTo(w)?e.setValue("from",w.toString()):e.setValue("from",r.toFixed()):e.setValue("from","")}},children:[(0,f.jsx)(s.Input,{secureTextEntry:!1,placeholder:l.formatMessage({id:u.ETranslations.global_serial_number_start}),size:i.gtMd?"medium":"large"}),v?null:(0,f.jsx)(s.Form.FieldDescription,{children:b})]})})})]})}function BatchCreateAccountFormBase({alwaysShowAdvancedSettings:e,networkReadyOnly:t,defaultCount:n,defaultDeriveType:w,defaultFrom:v,defaultNetworkId:b,onNetworkChanged:p,formRef:A}){var k=(0,o.A)(),x=(0,s.useMedia)(),y=(0,s.useForm)({values:{networkId:b,deriveType:w,from:v,count:n},mode:"onChange",reValidateMode:"onChange"});A&&(A.current=y);var C=y.watch("networkId"),j=(0,r.useMemo)((function(){return d.A.isAllNetwork({networkId:C})}),[C]);return(0,r.useEffect)((function(){p?.({networkId:C,isAllNetwork:j})}),[j,C,p]),(0,f.jsxs)(s.Form,{form:y,children:[(0,f.jsxs)(s.Form.Field,{label:k.formatMessage({id:u.ETranslations.global_network}),name:"networkId",disabled:t,children:[(0,f.jsx)(l.YS,{forceDisabled:t,disabled:t,editable:!t}),C===(0,c.V$)().onekeyall?(0,f.jsx)(s.Form.FieldDescription,{children:k.formatMessage({id:u.ETranslations.global_networks_information})}):null]}),(0,f.jsx)(s.Form.Field,{label:k.formatMessage({id:u.ETranslations.global_generate_amount}),name:"count",rules:{required:!0,validate:function(e,t){var n=new a.A(e);if(!e||n.isNaN())return k.formatMessage({id:u.ETranslations.global_bulk_accounts_page_number_error});var r=j?m:g;if(t.from){var o=new a.A(t.from);if(!o.isNaN()){var s=h+1-o.toNumber();r=Math.min(r,s)}}return n.isGreaterThan(r)?k.formatMessage({id:u.ETranslations.global_generate_amount_information},{max:r}):!n.isLessThan(1)||"The minimum number of accounts is 1"},onChange:function(e){var t=(e?.target?.value||"").replace(/\D/g,""),n=new a.A(parseInt(t,10));t&&!n.isNaN()?n.isLessThan(1)?y.setValue("count","1"):y.setValue("count",n.toFixed()):y.setValue("count","")}},children:(0,f.jsx)(s.Input,{secureTextEntry:!1,placeholder:k.formatMessage({id:u.ETranslations.global_generate_amount}),size:x.gtMd?"medium":"large"})}),(0,f.jsx)(AdvancedSettingsFormField,{form:y,alwaysShowAdvancedSettings:e,isAllNetwork:j}),(0,f.jsx)(i.FB,{fieldName:"deriveType",networkId:C})]})}},107442:(e,t,n)=>{n.d(t,{g:()=>showBatchCreateAccountProcessingDialog});var r=n(324586),a=n(839850),o=n(586330),s=n(514041),l=n(908867),i=n(490343),c=n(60153),u=n(318822),d=n(254491),f=(n(663522),n(831085)),m=["navigation","allNetworkInfo"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ProcessingDialogContent({navigation:e,allNetworkInfo:t}){var n,r,a,m,g=(0,l.A)(),[h,w]=(0,s.useState)(void 0),v=(0,s.useMemo)((function(){return Boolean(h&&h?.progressCurrent===h?.progressTotal)}),[h]),b=(0,s.useMemo)((function(){return Boolean(h&&!!h?.error)}),[h]),[p,A]=(0,s.useState)(!1);(0,s.useEffect)((function(){var cb=function(e){w(e)};return u.iL.on(u.Tu.BatchCreateAccount,cb),function(){u.iL.off(u.Tu.BatchCreateAccount,cb)}}),[]);var k,x=v||p||b;return(0,f.jsxs)(i.Stack,{children:[(0,f.jsx)(i.Stack,{py:"$2.5",px:"$5",space:"$5",flex:1,alignItems:"center",justifyContent:"center",children:(0,f.jsxs)(i.Stack,{flex:1,alignItems:"center",justifyContent:"center",alignSelf:"center",w:"100%",maxWidth:"$80",children:[v?(0,f.jsx)(i.Icon,{name:"CheckRadioSolid",size:"$12",color:"$iconSuccess"}):null,!p&&!b||v?null:(0,f.jsx)(i.Icon,{name:"XCircleSolid",size:"$12",color:"$iconCritical"}),x?null:(0,f.jsx)(i.Progress,{mt:"$4",w:"100%",size:"medium",value:Math.ceil((null!=(n=h?.progressCurrent)?n:0)/(null!=(r=h?.progressTotal)?r:1)*100)}),(0,f.jsx)(i.SizableText,{mt:"$5",size:"$bodyLg",textAlign:"center",children:g.formatMessage({id:d.ETranslations.global_bulk_accounts_loading},{amount:null!=(a=h?.progressCurrent)?a:0})}),t?(0,f.jsx)(i.SizableText,{size:"$bodyLg",textAlign:"center",children:g.formatMessage({id:d.ETranslations.global_bulk_accounts_loading_subtitle},{amount:null!=(m=t.count)?m:0})}):null,null]})}),(0,f.jsx)(i.Dialog.Footer,{showCancelButton:!1,showConfirmButton:!0,confirmButtonProps:{variant:x?"primary":"secondary"},onConfirmText:x?g.formatMessage({id:d.ETranslations.global_done}):g.formatMessage({id:d.ETranslations.global_cancel}),onConfirm:x?(0,o.A)((function*(){p||e?.popStack(),yield c.A.serviceBatchCreateAccount.cancelBatchCreateAccountsFlow()})):(k=(0,o.A)((function*({preventClose:e}){e(),A(!0),yield c.A.serviceBatchCreateAccount.cancelBatchCreateAccountsFlow()})),function(e){return k.apply(this,arguments)})})]})}function showBatchCreateAccountProcessingDialog(e){var{navigation:t,allNetworkInfo:n}=e,o=(0,a.A)(e,m);i.Dialog.show(function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({showExitButton:!1,dismissOnOverlayPress:!1,onCancel(){c.A.serviceBatchCreateAccount.cancelBatchCreateAccountsFlow()},onClose(){c.A.serviceBatchCreateAccount.cancelBatchCreateAccountsFlow()},renderContent:(0,f.jsx)(ProcessingDialogContent,{allNetworkInfo:n,navigation:t})},o))}}}]);