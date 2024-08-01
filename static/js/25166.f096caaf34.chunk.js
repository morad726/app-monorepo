"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[25166],{940916:(e,t,r)=>{r.d(t,{G:()=>b});var n=r(482451),i=r.n(n),o=r(324586),a=r(586330),s=r(230414),u=r(507140),c=r(606777),f=r(554902),p=r(404727),d=r(180556),l=r(929296),h=r(195309),v=r(972715),y=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,v.A)(e);if(t){var i=(0,v.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,h.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var g=function(e){(0,l.A)(ChainSigner,e);var t=_createSuper(ChainSigner);function ChainSigner(e,r,n){var i,o=(0,f.N)(n,{key:e,chainCode:y.alloc(32)},r).key.toString("hex");return(i=t.call(this,o,n)).encryptedPrivateKey=e,i.password=r,i.curve=n,i}var r,n=ChainSigner.prototype;return n.getPrvkey=function getPrvkey(){return Promise.resolve((0,f.Yc)(this.password,this.encryptedPrivateKey))},n.getPrvkeyHex=(r=(0,a.A)((function*(){return c.A.bytesToHex(yield this.getPrvkey())})),function getPrvkeyHex(){return r.apply(this,arguments)}),n.sign=function sign(e){var t=(0,f._S)(this.curve,this.encryptedPrivateKey,e,this.password);return"secp256k1"===this.curve?Promise.resolve([t.slice(0,-1),t[t.length-1]]):Promise.resolve([t,0])},(0,s.A)(ChainSigner)}(function(){function Verifier(e,t){this.curve=t,this.compressedPublicKey=y.from(e,"hex"),this.uncompressedPublicKey=(0,f.sA)(t,this.compressedPublicKey)}var e,t=Verifier.prototype;return t.getPubkey=function getPubkey(e){return Promise.resolve(e?this.compressedPublicKey:this.uncompressedPublicKey)},t.getPubkeyHex=(e=(0,a.A)((function*(e){return c.A.bytesToHex(yield this.getPubkey(e))})),function getPubkeyHex(t){return e.apply(this,arguments)}),t.verify=function verify(){return Promise.resolve(y.from([]))},t.verifySignature=function verifySignature({publicKey:e,digest:t,signature:r}){var n=c.A.toBuffer(e),i=c.A.toBuffer(t),o=c.A.toBuffer(r),{curve:a}=this,s=(0,f.MX)(a,n,i,o);return Promise.resolve(s)},(0,s.A)(Verifier)}());function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,o.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(){function CoreChainApiBase(){}var e,t,r,n,o,l,h,v,y=CoreChainApiBase.prototype;return y.baseGetCurve=function baseGetCurve(e){switch(e){case"ed25519":return f.ev;case"secp256k1":return f.bI;case"nistp256":return f.OX;default:throw new u.He("Unsupported curve")}},y.baseCreateSigner=(e=(0,a.A)((function*({curve:e,privateKey:t,password:r}){if(void 0===r)throw new u.He("Software signing requires a password.");var n=c.A.toBuffer(t);return Promise.resolve(new g(n,r,e))})),function baseCreateSigner(t){return e.apply(this,arguments)}),y.baseGetSingleSigner=(t=(0,a.A)((function*({payload:e,curve:t}){var r=yield this.getPrivateKeys(e),n=e.account.path,i=r[n],o=e?.relPaths?.[0];if(!i&&o&&(i=r[[n,o].join("/")]),!i)throw new Error(`No private key found: ${n}`);return this.baseCreateSigner({curve:t,privateKey:i,password:e.password})})),function baseGetSingleSigner(e){return t.apply(this,arguments)}),y.baseGetPrivateKeys=(r=(0,a.A)((function*({payload:e,curve:t}){var{credentials:r,account:n,password:i,relPaths:o}=e,a={};if(r.hd&&r.imported)throw new u.He("getPrivateKeys ERROR: hd and imported credentials can NOT both set.");if(r.hd&&(a=yield this.baseGetPrivateKeysHd({curve:t,account:n,hdCredential:r.hd,password:i,relPaths:o})),r.imported){var{privateKey:s}=(0,f.VV)({password:i,credential:r.imported}),p=c.A.bytesToHex((0,f.w)(i,s));a[n.path]=p,a[""]=p}if(!Object.keys(a).length)throw new Error("No private keys found");return a})),function baseGetPrivateKeys(e){return r.apply(this,arguments)}),y.baseGetPrivateKeysHd=(n=(0,a.A)((function*({curve:e,password:t,account:r,relPaths:n,hdCredential:i}){var{path:o}=r,a=o.split("/"),s=n||[a.pop()],p=a.join("/");if(0===s.length)throw new u.He("getPrivateKeysHd ERROR: relPaths is empty.");return(0,f.Wu)(e,i,t,p,s).reduce((function(e,t){return _objectSpread(_objectSpread({},e),{},{[t.path]:c.A.bytesToHex(t.extendedKey.key)})}),{})})),function baseGetPrivateKeysHd(e){return n.apply(this,arguments)}),y.baseGetAddressesFromHd=(o=(0,a.A)((function*(e,t){var r=this,{curve:n,generateFrom:o}=t,{template:s,hdCredential:p,password:l,indexes:h}=e,{pathPrefix:v,pathSuffix:y}=(0,d.Ah)(s),g=h.map((function(e){return y.replace("{index}",e.toString())})),b="privateKey"===o,P=[],A=[];b?A=(0,f.Wu)(n,p,l,v,g):P=(0,f.W6)(n,p,l,v,g);var w=b?A:P;if(w.length!==h.length)throw new u.He("Unable to get publick key.");var C,S=yield Promise.all(w.map((C=(0,a.A)((function*(t){var n,o,{path:a,extendedKey:{key:s}}=t;if(b){var u=c.A.bytesToHex((0,f.Yc)(l,s));o=yield r.getAddressFromPrivate({networkInfo:e.networkInfo,privateKeyRaw:u,privateKeyInfo:t})}else n=s.toString("hex"),o=yield r.getAddressFromPublic({networkInfo:e.networkInfo,publicKey:n,publicKeyInfo:t});return i()({publicKey:n,path:a},o)})),function(e){return C.apply(this,arguments)})));return{addresses:S}})),function baseGetAddressesFromHd(e,t){return o.apply(this,arguments)}),y.baseGetCredentialsType=function baseGetCredentialsType({credentials:e}){if(e.hd&&e.imported)throw new u.He("getCredentialsType ERROR: hd and imported credentials can NOT both set.");if(e.hd)return p.ECoreCredentialType.hd;if(e.imported)return p.ECoreCredentialType.imported;throw new u.He("getCredentialsType ERROR: no credentials found")},y.baseGetDefaultPrivateKey=(l=(0,a.A)((function*(e){var t=yield this.getPrivateKeys(e),[r]=Object.values(t);return{privateKeyRaw:r}})),function baseGetDefaultPrivateKey(e){return l.apply(this,arguments)}),y.validateXpub=(h=(0,a.A)((function*(e){throw new u.MS})),function validateXpub(e){return h.apply(this,arguments)}),y.validateXprvt=(v=(0,a.A)((function*(e){throw new u.MS})),function validateXprvt(e){return v.apply(this,arguments)}),(0,s.A)(CoreChainApiBase)}()},725166:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(230414),i=r(929296),o=r(195309),a=r(972715);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,a.A)(e);if(t){var i=(0,a.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var s=function(e){(0,i.A)(CoreChainHd,e);var t=_createSuper(CoreChainHd);function CoreChainHd(){return t.apply(this,arguments)}return(0,n.A)(CoreChainHd)}(r(291419).A)},291419:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(586330),i=r(230414),o=r(929296),a=r(195309),s=r(972715),u=r(830036),c=r(507140),f=r(606777),p=r(424754),d=r(940916),l=r(75639),h=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,s.A)(e);if(t){var i=(0,s.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var v="secp256k1",y=function(e){(0,o.A)(CoreChainSoftware,e);var t=_createSuper(CoreChainSoftware);function CoreChainSoftware(){return t.apply(this,arguments)}var r,a,s,d,y,g,b=CoreChainSoftware.prototype;return b.getExportedSecretKey=function getExportedSecretKey(e){throw new c.MS},b.getPrivateKeys=(r=(0,n.A)((function*(e){return this.baseGetPrivateKeys({payload:e,curve:v})})),function getPrivateKeys(e){return r.apply(this,arguments)}),b.signTransaction=(a=(0,n.A)((function*(e){var{unsignedTx:t}=e,r=t.rawTxUnsigned,n=yield this.baseGetSingleSigner({payload:e,curve:v}),[i,o]=yield n.sign(h.from(p.A.stripHexPrefix(r),"hex")),a=o.toString(16).padStart(2,"0");return{txid:"",rawTx:p.A.addHexPrefix((0,u.My)(i)+a),encodedTx:t.encodedTx}})),function signTransaction(e){return a.apply(this,arguments)}),b.signMessage=(s=(0,n.A)((function*(){throw new c.MS})),function signMessage(){return s.apply(this,arguments)}),b.getAddressFromPrivate=(d=(0,n.A)((function*(e){var{privateKeyRaw:t}=e,r=f.A.toBuffer(t),n=this.baseGetCurve(v).publicFromPrivate(r);return this.getAddressFromPublic({publicKey:f.A.bytesToHex(n),networkInfo:e.networkInfo})})),function getAddressFromPrivate(e){return d.apply(this,arguments)}),b.getAddressFromPublic=(y=(0,n.A)((function*(e){var{publicKey:t}=e,r=e.networkInfo.chainId,n=(0,l.zj)(r),i=(0,l.Y4)(p.A.addHexPrefix(t),{config:n});return Promise.resolve({address:i,publicKey:t})})),function getAddressFromPublic(e){return y.apply(this,arguments)}),b.getAddressesFromHd=(g=(0,n.A)((function*(e){return this.baseGetAddressesFromHd(e,{curve:v})})),function getAddressesFromHd(e){return g.apply(this,arguments)}),(0,i.A)(CoreChainSoftware)}(d.G)},75639:(e,t,r)=>{r.d(t,{Y4:()=>pubkeyToAddress,pu:()=>scriptToAddress,zj:()=>getConfig});var n=r(140993),i=r(519808),o=r(893597);function getConfig(e){var t=(0,i.getConfig)();if("mainnet"===e&&"ckb"===t.PREFIX)return t;if("testnet"===e&&"ckt"===t.PREFIX)return t;throw new Error("Invalid chainId")}function scriptToAddress(e,{config:t}={}){return(0,o.generateAddress)(e,{config:t})}function pubkeyToAddress(e,{config:t}){var r=function blake160(e){return(new n.utils.CKBHasher).update(e).digestHex().slice(0,42)}(e),i=t.SCRIPTS.SECP256K1_BLAKE160;if(!i)throw new Error("SECP256K1_BLAKE160 not found in config");return scriptToAddress({codeHash:i.CODE_HASH,hashType:i.HASH_TYPE,args:r},{config:t})}},180556:(e,t,r)=>{r.d(t,{Ac:()=>estimateTxSize,Ah:()=>slicePathTemplate,vN:()=>getUtxoAccountPrefixPath,zf:()=>getBIP44Path});var n=r(90366),i=r.n(n),o=r(928557);function slicePathTemplate(e){var[t,r]=e.split(o.h2);return{pathPrefix:t.slice(0,-1),pathSuffix:`{index}${r}`}}function getUtxoAccountPrefixPath({fullPath:e}){var t=e.split("/");return t.pop(),t.pop(),t.join("/")}function getBIP44Path(e,t){var r="";for(var[n,i]of Object.entries(e.addresses))if(i===t){r=n;break}return`${e.path}/${r}`}function estimateTxSize(e,t){return i().transactionBytes(e,t)}}}]);