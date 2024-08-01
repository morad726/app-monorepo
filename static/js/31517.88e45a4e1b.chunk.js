(self.webpackChunkweb=self.webpackChunkweb||[]).push([[31517],{940916:(e,t,r)=>{"use strict";r.d(t,{G:()=>g});var n=r(482451),i=r.n(n),o=r(324586),s=r(586330),a=r(230414),c=r(507140),u=r(606777),f=r(554902),l=r(404727),p=r(180556),y=r(929296),d=r(195309),h=r(972715),v=r(901048).Buffer;function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,h.A)(e);if(t){var i=(0,h.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,d.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var b=function(e){(0,y.A)(ChainSigner,e);var t=_createSuper(ChainSigner);function ChainSigner(e,r,n){var i,o=(0,f.N)(n,{key:e,chainCode:v.alloc(32)},r).key.toString("hex");return(i=t.call(this,o,n)).encryptedPrivateKey=e,i.password=r,i.curve=n,i}var r,n=ChainSigner.prototype;return n.getPrvkey=function getPrvkey(){return Promise.resolve((0,f.Yc)(this.password,this.encryptedPrivateKey))},n.getPrvkeyHex=(r=(0,s.A)((function*(){return u.A.bytesToHex(yield this.getPrvkey())})),function getPrvkeyHex(){return r.apply(this,arguments)}),n.sign=function sign(e){var t=(0,f._S)(this.curve,this.encryptedPrivateKey,e,this.password);return"secp256k1"===this.curve?Promise.resolve([t.slice(0,-1),t[t.length-1]]):Promise.resolve([t,0])},(0,a.A)(ChainSigner)}(function(){function Verifier(e,t){this.curve=t,this.compressedPublicKey=v.from(e,"hex"),this.uncompressedPublicKey=(0,f.sA)(t,this.compressedPublicKey)}var e,t=Verifier.prototype;return t.getPubkey=function getPubkey(e){return Promise.resolve(e?this.compressedPublicKey:this.uncompressedPublicKey)},t.getPubkeyHex=(e=(0,s.A)((function*(e){return u.A.bytesToHex(yield this.getPubkey(e))})),function getPubkeyHex(t){return e.apply(this,arguments)}),t.verify=function verify(){return Promise.resolve(v.from([]))},t.verifySignature=function verifySignature({publicKey:e,digest:t,signature:r}){var n=u.A.toBuffer(e),i=u.A.toBuffer(t),o=u.A.toBuffer(r),{curve:s}=this,a=(0,f.MX)(s,n,i,o);return Promise.resolve(a)},(0,a.A)(Verifier)}());function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,o.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(){function CoreChainApiBase(){}var e,t,r,n,o,y,d,h,v=CoreChainApiBase.prototype;return v.baseGetCurve=function baseGetCurve(e){switch(e){case"ed25519":return f.ev;case"secp256k1":return f.bI;case"nistp256":return f.OX;default:throw new c.He("Unsupported curve")}},v.baseCreateSigner=(e=(0,s.A)((function*({curve:e,privateKey:t,password:r}){if(void 0===r)throw new c.He("Software signing requires a password.");var n=u.A.toBuffer(t);return Promise.resolve(new b(n,r,e))})),function baseCreateSigner(t){return e.apply(this,arguments)}),v.baseGetSingleSigner=(t=(0,s.A)((function*({payload:e,curve:t}){var r=yield this.getPrivateKeys(e),n=e.account.path,i=r[n],o=e?.relPaths?.[0];if(!i&&o&&(i=r[[n,o].join("/")]),!i)throw new Error(`No private key found: ${n}`);return this.baseCreateSigner({curve:t,privateKey:i,password:e.password})})),function baseGetSingleSigner(e){return t.apply(this,arguments)}),v.baseGetPrivateKeys=(r=(0,s.A)((function*({payload:e,curve:t}){var{credentials:r,account:n,password:i,relPaths:o}=e,s={};if(r.hd&&r.imported)throw new c.He("getPrivateKeys ERROR: hd and imported credentials can NOT both set.");if(r.hd&&(s=yield this.baseGetPrivateKeysHd({curve:t,account:n,hdCredential:r.hd,password:i,relPaths:o})),r.imported){var{privateKey:a}=(0,f.VV)({password:i,credential:r.imported}),l=u.A.bytesToHex((0,f.w)(i,a));s[n.path]=l,s[""]=l}if(!Object.keys(s).length)throw new Error("No private keys found");return s})),function baseGetPrivateKeys(e){return r.apply(this,arguments)}),v.baseGetPrivateKeysHd=(n=(0,s.A)((function*({curve:e,password:t,account:r,relPaths:n,hdCredential:i}){var{path:o}=r,s=o.split("/"),a=n||[s.pop()],l=s.join("/");if(0===a.length)throw new c.He("getPrivateKeysHd ERROR: relPaths is empty.");return(0,f.Wu)(e,i,t,l,a).reduce((function(e,t){return _objectSpread(_objectSpread({},e),{},{[t.path]:u.A.bytesToHex(t.extendedKey.key)})}),{})})),function baseGetPrivateKeysHd(e){return n.apply(this,arguments)}),v.baseGetAddressesFromHd=(o=(0,s.A)((function*(e,t){var r=this,{curve:n,generateFrom:o}=t,{template:a,hdCredential:l,password:y,indexes:d}=e,{pathPrefix:h,pathSuffix:v}=(0,p.Ah)(a),b=d.map((function(e){return v.replace("{index}",e.toString())})),g="privateKey"===o,m=[],w=[];g?w=(0,f.Wu)(n,l,y,h,b):m=(0,f.W6)(n,l,y,h,b);var P=g?w:m;if(P.length!==d.length)throw new c.He("Unable to get publick key.");var A,S=yield Promise.all(P.map((A=(0,s.A)((function*(t){var n,o,{path:s,extendedKey:{key:a}}=t;if(g){var c=u.A.bytesToHex((0,f.Yc)(y,a));o=yield r.getAddressFromPrivate({networkInfo:e.networkInfo,privateKeyRaw:c,privateKeyInfo:t})}else n=a.toString("hex"),o=yield r.getAddressFromPublic({networkInfo:e.networkInfo,publicKey:n,publicKeyInfo:t});return i()({publicKey:n,path:s},o)})),function(e){return A.apply(this,arguments)})));return{addresses:S}})),function baseGetAddressesFromHd(e,t){return o.apply(this,arguments)}),v.baseGetCredentialsType=function baseGetCredentialsType({credentials:e}){if(e.hd&&e.imported)throw new c.He("getCredentialsType ERROR: hd and imported credentials can NOT both set.");if(e.hd)return l.ECoreCredentialType.hd;if(e.imported)return l.ECoreCredentialType.imported;throw new c.He("getCredentialsType ERROR: no credentials found")},v.baseGetDefaultPrivateKey=(y=(0,s.A)((function*(e){var t=yield this.getPrivateKeys(e),[r]=Object.values(t);return{privateKeyRaw:r}})),function baseGetDefaultPrivateKey(e){return y.apply(this,arguments)}),v.validateXpub=(d=(0,s.A)((function*(e){throw new c.MS})),function validateXpub(e){return d.apply(this,arguments)}),v.validateXprvt=(h=(0,s.A)((function*(e){throw new c.MS})),function validateXprvt(e){return h.apply(this,arguments)}),(0,a.A)(CoreChainApiBase)}()},931517:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(230414),i=r(929296),o=r(195309),s=r(972715);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,s.A)(e);if(t){var i=(0,s.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var a=function(e){(0,i.A)(CoreChainHd,e);var t=_createSuper(CoreChainHd);function CoreChainHd(){return t.apply(this,arguments)}return(0,n.A)(CoreChainHd)}(r(148040).A)},148040:(e,t,r)=>{"use strict";r.d(t,{A:()=>Y});var n=r(586330),i=r(230414),o=r(929296),s=r(195309),a=r(972715),c=r(89729);function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,i=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function*toFailures(e,t){!0===e||(!1===e?yield t.fail():yield*e)}function iteratorShift(e){const{done:t,value:r}=e.next();return t?void 0:r}class Struct{constructor(e){const{type:t,schema:r,coercer:n=(e=>e),validator:i=(()=>[]),refiner:o=(()=>[])}=e;this.type=t,this.schema=r,this.coercer=n,this.validator=i,this.refiner=o}}class StructError extends TypeError{constructor(e,t){const{path:r,value:n,type:i,branch:o}=e,s=_objectWithoutProperties(e,["path","value","type","branch"]);let a;super(`Expected a value of type \`${i}\`${r.length?` for \`${r.join(".")}\``:""} but received \`${JSON.stringify(n)}\`.`),this.value=n,Object.assign(this,s),this.type=i,this.path=r,this.branch=o,this.failures=function failures(){return a||(a=[e,...t]),a},this.stack=(new Error).stack,this.__proto__=StructError.prototype}}function coerce(e,t){const r=t.coercer(e);return function assert(e,t){const r=validate(e,t);if(r[0])throw r[0]}(r,t),r}function is(e,t){return!validate(e,t)[0]}function validate(e,t,r=!1){r&&(e=t.coercer(e));const n=check(e,t),i=iteratorShift(n);if(i){return[new StructError(i,n),void 0]}return[void 0,e]}function*check(e,t,r=[],n=[]){const{type:i}=t,o={value:e,type:i,branch:n,path:r,fail:(t={})=>_objectSpread2({value:e,type:i,path:r,branch:[...n,e]},t),check:(e,t,i,o)=>check(e,t,void 0!==i?[...r,o]:r,void 0!==i?[...n,i]:n)},s=toFailures(t.validator(e,o),o),a=iteratorShift(s);a?(yield a,yield*s):yield*toFailures(t.refiner(e,o),o)}function pattern(e,t){return refinement(e,`${e.type} & Pattern<${t.source}>`,(e=>t.test(e)))}function refinement(e,t,r){const n=e.refiner;return new Struct(_objectSpread2(_objectSpread2({},e),{},{type:t,*refiner(e,t){yield*toFailures(n(e,t),t),yield*toFailures(r(e,t),t)}}))}function array(e){return new Struct({type:`Array<${e?e.type:"unknown"}>`,schema:e,coercer:t=>e&&Array.isArray(t)?t.map((t=>coerce(t,e))):t,*validator(t,r){if(Array.isArray(t)){if(e)for(const[n,i]of t.entries())yield*r.check(i,e,t,n)}else yield r.fail()}})}function intersection(e){return struct(e.map((e=>e.type)).join(" & "),(function*(t,r){for(const n of e)yield*r.check(t,n)}))}function never(){return struct("never",(()=>!1))}function number(){return struct("number",(e=>"number"==typeof e&&!isNaN(e)))}function object(e){const t=e?Object.keys(e):[],r=never();return new Struct({type:e?`Object<{${t.join(",")}}>`:"Object",schema:e||null,coercer:e?createObjectCoercer(e):e=>e,*validator(n,i){if("object"==typeof n&&null!=n){if(e){const o=new Set(Object.keys(n));for(const r of t){o.delete(r);const t=e[r],s=n[r];yield*i.check(s,t,n,r)}for(const e of o){const t=n[e];yield*i.check(t,r,n,e)}}}else yield i.fail()}})}function optional(e){return new Struct({type:`${e.type}?`,schema:e.schema,validator:(t,r)=>void 0===t||r.check(t,e)})}function record(e,t){return struct(`Record<${e.type},${t.type}>`,(function*(r,n){if("object"==typeof r&&null!=r)for(const i in r){const o=r[i];yield*n.check(i,e,r,i),yield*n.check(o,t,r,i)}else yield n.fail()}))}function string(){return struct("string",(e=>"string"==typeof e))}function struct(e,t){return new Struct({type:e,validator:t,schema:null})}function type(e){const t=Object.keys(e);return struct(`Type<{${t.join(",")}}>`,(function*(r,n){if("object"==typeof r&&null!=r)for(const i of t){const t=e[i],o=r[i];yield*n.check(o,t,r,i)}else yield n.fail()}))}function union(e){return struct(`${e.map((e=>e.type)).join(" | ")}`,(function*(t,r){for(const n of e){const[...e]=r.check(t,n);if(0===e.length)return}yield r.fail()}))}function createObjectCoercer(e){const t=Object.keys(e);return r=>{if("object"!=typeof r||null==r)return r;const n={},i=new Set(Object.keys(r));for(const o of t){i.delete(o);const t=e[o],s=r[o];n[o]=coerce(s,t)}for(const e of i)n[e]=r[e];return n}}const u=/^\w+/,f=/^(.*)\[([0-9]*?)]$/,l=/^bytes([0-9]{1,2})$/,p=/^u?int([0-9]{0,3})$/,y=["address","bool","bytes","string"],d=refinement(string(),"Type",((e,t)=>isValidType(t.branch[0].types,e))),h=object({name:string(),type:d}),v=object({name:optional(string()),version:optional(string()),chainId:optional(union([string(),number()])),verifyingContract:optional(pattern(string(),/^0x[0-9a-z]{40}$/i)),salt:optional(union([array(number()),pattern(string(),/^0x[0-9a-z]{64}$/i)]))}),b=object({types:intersection([type({CIP23Domain:array(h)}),record(string(),array(h))]),primaryType:string(),domain:v,message:object()}),g=object({types:intersection([type({EIP712Domain:array(h)}),record(string(),array(h))]),primaryType:string(),domain:v,message:object()}),isValidType=(e,t)=>{if(y.includes(t))return!0;if(e[t])return!0;if(t.match(f)){const r=t.match(u);if(r){const t=r[0];return isValidType(e,t)}}const r=t.match(l);if(r){const e=Number(r[1]);if(e>=1&&e<=32)return!0}const n=t.match(p);if(n){const e=Number(n[1]);if(e>=8&&e<=256&&e%8==0)return!0}return!1};var m=r(663793),w=r.n(m),P=r(901048).Buffer;const keccak256=(e,t)=>w()("keccak256").update(e,t).digest(),toBuffer=(e,t)=>t?P.from(e,t):e.startsWith("0x")?P.from(e.substring(2),"hex"):P.from(e,"hex");var A=r(271326),S=r.n(A),O=r(901048).Buffer;const buffer_concat=(e,t,r)=>new Uint8Array([...e.subarray(0,null!=r?r:e.length),...t,...e.subarray(null!=r?r:e.length)]),concatMultiple=e=>e.reduce(((e,t)=>{const r=new Uint8Array(e.length+t.length);return r.set(e,0),r.set(t,e.length),r}),new Uint8Array(0)),addPadding=(e,t=32)=>{const r=O.alloc(Math.max(t-e.length,0),0);return buffer_concat(e,r)},buffer_toBuffer=e=>{if(O.isBuffer(e)||e instanceof Uint8Array)return e;if("string"==typeof e){const t=e.startsWith("0x")?e.substring(2):e;return O.from(t,"hex")}const t=e.toString(16);return O.from(t.padStart(64,"0").slice(0,64),"hex")},toNumber=e=>{const t=toHex(e);return 0===t.length?BigInt(0):BigInt(`0x${t}`)},numberToHex=e=>("0"+e.toString(16)).slice(-2),toHex=e=>Array.from(e).map(numberToHex).join("");var j=r(901048).Buffer;var x=r(901048).Buffer;const encodeBytes=(e,t)=>{const r=buffer_toBuffer(t),n=32*Math.ceil(r.byteLength/32);return buffer_concat(e,x.concat([buffer_toBuffer(r.byteLength),addPadding(r,n)]))},decodeBytes=(e,t)=>{const r=Number(toNumber(e.subarray(0,32))),n=toNumber(e.subarray(r,r+32));return t.subarray(32,32+Number(n))},C=/^bytes([0-9]{1,2})$/,getByteLength=e=>{var t;const r=null===(t=e.match(C))||void 0===t?void 0:t[1];if(r){const e=Number(r);if(e<=0||e>32)throw new Error("Invalid type: length is out of range");return e}throw new Error("Invalid type: no length")},k=/^u?int([0-9]*)?$/,isSigned=e=>e.startsWith("i"),inRange=(e,t)=>{const r=BigInt((e=>{var t,r;const n=null!==(t=null===(r=e.match(k))||void 0===r?void 0:r[1])&&void 0!==t?t:"256";return Number(n)})(t));if(isSigned(t)){const t=2n**(r-1n)-1n;return e>=-t-1n&&e<=t}return e>=0n&&e<=2n**r-1n};var B=r(901048).Buffer;var N=r(901048).Buffer;const K=/^(.*)\[]$/,isArray=e=>K.test(e),getType=e=>e.match(K)[1],T={address:{encode:(e,t)=>{if(42!==t.length)throw new Error("Invalid address length");const r=j.alloc(32);return r.write(t.substring(2),12,"hex"),buffer_concat(e,r)},decode:e=>{const t=e.subarray(-20);return`0x${toHex(t)}`}},array:{dynamic:!0,encode:(e,t,r)=>{if(!isArray(r))throw new Error("Invalid type: type is not array");const n=getType(r),i=buffer_toBuffer(t.length),o=buffer_concat(e,i);return pack(o,t,new Array(t.length).fill(n))},decode:(e,t,r)=>{if(!isArray(r))throw new Error("Invalid type: type is not array");const n=getType(r),i=Number(toNumber(e)),o=Number(toNumber(t.subarray(i,i+32))),s=i+32,a=t.subarray(s);return array_unpack(a,new Array(o).fill(n))}},bytes:{dynamic:!0,encode:encodeBytes,decode:decodeBytes},fixedBytes:{encode:(e,t,r)=>{const n=getByteLength(r),i=buffer_toBuffer(t);if(i.length>n)throw new Error(`Buffer is too long, expected ${n}, got ${i.length}`);return buffer_concat(e,addPadding(i))},decode:(e,t,r)=>{const n=getByteLength(r);return e.subarray(0,n)}},number:{encode:(e,t,r)=>{const n=(e=>"bigint"==typeof e?e:BigInt(e))(t);if(!inRange(n,r))throw new Error(`Cannot encode number: value is out of range for type ${r}`);return isSigned(r)?buffer_concat(e,((e,t)=>{const r=new Uint8Array(t);for(let t=0;t<r.length;t++)r[t]=Number(BigInt.asUintN(8,e)),e>>=8n;return r.reverse()})(n,32)):buffer_concat(e,buffer_toBuffer(n))},decode:(e,t,r)=>isSigned(r)?(e=>{const t=buffer_toBuffer(e);let r=0n;for(const e of t)r=(r<<8n)+BigInt(e);return BigInt.asIntN(8*t.length,r)})(e):toNumber(e)},string:{dynamic:!0,encode:(e,t)=>{const r=B.from(t,"utf8");return encodeBytes(e,r)},decode:(e,t)=>(e=>"undefined"!=typeof window&&window.TextDecoder?new TextDecoder("utf-8").decode(e):new(r(749208).TextDecoder)("utf-8").decode(e))(decodeBytes(e,t))}},getParser=e=>{if(T[e])return T[e];if((e=>C.test(e))(e))return T.fixedBytes;if((e=>k.test(e))(e)||"bool"===e)return T.number;if(isArray(e))return T.array;throw new Error(`type "${e}" is not supported`)},pack=(e,t,r)=>{const{staticBuffer:n,dynamicBuffer:i,updateFunctions:o}=r.reduce((({staticBuffer:e,dynamicBuffer:r,updateFunctions:n},i,o)=>{const s=getParser(i),a=t[o];if(s.dynamic){const t=r.length,o=e.length,update=e=>concatMultiple([e.subarray(0,o),buffer_toBuffer(e.length+t),e.subarray(o+32)]);return{staticBuffer:buffer_concat(e,N.alloc(32,0)),dynamicBuffer:s.encode(r,a,i),updateFunctions:[...n,update]}}return{staticBuffer:s.encode(e,a,i),dynamicBuffer:r,updateFunctions:n}}),{staticBuffer:new Uint8Array(0),dynamicBuffer:new Uint8Array(0),updateFunctions:[]}),s=o.reduce(((e,t)=>t(e)),n);return concatMultiple([e,s,i])};const array_unpack=(e,t)=>{const r=function*iterate(e,t){for(let r=0;r<e.length;r+=t)yield e.slice(r,r+t);return e}(e,32);return t.map((t=>{const{value:n,done:i}=r.next();if(i)throw new Error("input data has an invalid length");return getParser(t).decode(n,e,t)}))};var $=r(901048).Buffer;const encode=(e,t)=>{const r=e.map((e=>"string"==typeof e?e:e.type));return pack($.alloc(0),t,r)};var E=r(901048).Buffer;const abi_encode=(e,t)=>(t.map((function(t,r,n){"address"===e[r]&&(n[r]=function normalizeAddress(e){if(!S().hasNetworkPrefix(e))return e;return"0x"+S().decode(e).hexAddress.toString("hex")}(t))})),E.from(encode(e,t)));var _=r(901048).Buffer;const I=_.from("1901","hex"),getDependencies=(e,t,r=[])=>{if(!is(n=e,b)&&!is(n,g))throw new Error("Typed data does not match JSON schema");var n;const i=t.match(u)[0];return r.includes(i)?r:e.types[i]?[i,...e.types[i].reduce(((t,r)=>{const n=i===r.type?[]:getDependencies(e,r.type,t).filter((e=>!t.includes(e)));return[...t,...n]}),[])]:r},getTypeHash=(e,t)=>keccak256(((e,t)=>{const[r,...n]=getDependencies(e,t);return[r,...n.sort()].map((t=>`${t}(${e.types[t].map((e=>`${e.type} ${e.name}`))})`)).join("")})(e,t),"utf8"),encodeValue=(e,t,r)=>{const n=t.match(f);if(n){const t=n[1],i=Number(n[2])||void 0;if(!Array.isArray(r))throw new Error("Cannot encode data: value is not of array type");if(i&&r.length!==i)throw new Error(`Cannot encode data: expected length of ${i}, but got ${r.length}`);const o=r.map((r=>encodeValue(e,t,r))),s=o.map((e=>e[0])),a=o.map((e=>e[1]));return["bytes32",keccak256(abi_encode(s,a))]}return e.types[t]?["bytes32",getStructHash(e,t,r)]:"string"===t?["bytes32",keccak256(r,"utf8")]:"bytes"===t?["bytes32",keccak256(_.isBuffer(r)?r:toBuffer(r),"hex")]:[t,r]},getStructHash=(e,t,r)=>keccak256(((e,t,r)=>{const[n,i]=e.types[t].reduce((([t,n],i)=>{if(void 0===r[i.name]||null===r[i.name])return[[...t,"bytes32"],[...n,"0x0000000000000000000000000000000000000000000000000000000000000000"]];const o=r[i.name],[s,a]=encodeValue(e,i.type,o);return[[...t,s],[...n,a]]}),[["bytes32"],[getTypeHash(e,t)]]);return abi_encode(n,i)})(e,t,r));var R=r(554902),H=r(825145),F=r(606777),G=r(161024),D=r(940916),M=r(404727),U=r(733413),W=r(573738);function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=(0,a.A)(e);if(t){var i=(0,a.A)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.A)(this,r)}}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var z="secp256k1",{Message:V,PersonalMessage:X}=W.y;function hashCfxMessage(e){var{type:t,message:r}=e;switch(t){case void 0:case G.$.ETH_SIGN:return new V(r).hash;case G.$.PERSONAL_SIGN:return new X(r).hash;case G.$.TYPED_DATA_V3:case G.$.TYPED_DATA_V4:return(0,c.S)(((e,t,r="CIP23Domain")=>{const n=_.concat([I,getStructHash(e,r,e.domain),getStructHash(e,e.primaryType,e.message)]);return t?keccak256(n):n})(JSON.parse(r)));default:throw new Error(`Invalid messageType: ${t}`)}}var Y=function(e){(0,o.A)(CoreChainSoftware,e);var t=_createSuper(CoreChainSoftware);function CoreChainSoftware(){return t.apply(this,arguments)}var r,s,a,c,u,f,l,p=CoreChainSoftware.prototype;return p.getExportedSecretKey=(r=(0,n.A)((function*(e){var{password:t,keyType:r,credentials:n}=e,{privateKeyRaw:i}=yield this.baseGetDefaultPrivateKey(e);if(!i)throw new Error("privateKeyRaw is required");if(r===M.ECoreApiExportedSecretKeyType.privateKey)return`0x${(0,R.Yc)(t,i).toString("hex")}`;throw new Error(`SecretKey type not support: ${r}`)})),function getExportedSecretKey(e){return r.apply(this,arguments)}),p.getPrivateKeys=(s=(0,n.A)((function*(e){return this.baseGetPrivateKeys({payload:e,curve:z})})),function getPrivateKeys(e){return s.apply(this,arguments)}),p.signTransaction=(a=(0,n.A)((function*(e){var{unsignedTx:t}=e,r=yield this.baseGetSingleSigner({payload:e,curve:z});return(0,U.WJ)(t,r)})),function signTransaction(e){return a.apply(this,arguments)}),p.signMessage=(c=(0,n.A)((function*(e){var t=e.unsignedMsg,r=yield this.baseGetSingleSigner({payload:e,curve:z});return V.sign(`0x${(yield r.getPrvkey()).toString("hex")}`,hashCfxMessage(t))})),function signMessage(e){return c.apply(this,arguments)}),p.getAddressFromPrivate=(u=(0,n.A)((function*(e){var{privateKeyRaw:t}=e,r=F.A.toBuffer(t),n=R.bI.publicFromPrivate(r);return this.getAddressFromPublic({publicKey:F.A.bytesToHex(n),networkInfo:e.networkInfo})})),function getAddressFromPrivate(e){return u.apply(this,arguments)}),p.getAddressFromPublic=(f=(0,n.A)((function*(e){var{publicKey:t}=e,r=F.A.toBuffer(t),n=(0,R.sA)(z,r),{chainId:i,networkId:o}=(0,H.wT)(e.networkInfo),s=yield(0,U.fe)(n,(0,H.wT)(i));return Promise.resolve({address:"",addresses:{[(0,H.wT)(o)]:s},publicKey:t})})),function getAddressFromPublic(e){return f.apply(this,arguments)}),p.getAddressesFromHd=(l=(0,n.A)((function*(e){return this.baseGetAddressesFromHd(e,{curve:z})})),function getAddressesFromHd(e){return l.apply(this,arguments)}),(0,i.A)(CoreChainSoftware)}(D.G)},180556:(e,t,r)=>{"use strict";r.d(t,{Ac:()=>estimateTxSize,Ah:()=>slicePathTemplate,vN:()=>getUtxoAccountPrefixPath,zf:()=>getBIP44Path});var n=r(90366),i=r.n(n),o=r(928557);function slicePathTemplate(e){var[t,r]=e.split(o.h2);return{pathPrefix:t.slice(0,-1),pathSuffix:`{index}${r}`}}function getUtxoAccountPrefixPath({fullPath:e}){var t=e.split("/");return t.pop(),t.pop(),t.join("/")}function getBIP44Path(e,t){var r="";for(var[n,i]of Object.entries(e.addresses))if(i===t){r=n;break}return`${e.path}/${r}`}function estimateTxSize(e,t){return i().transactionBytes(e,t)}},90366:e=>{var t=10,r=41,n=107,i=9,o=25,s=10;function inputBytes(e){return r+(e.script?e.script.length:n)}function outputBytes(e){return e.script?s+e.script.length+(e.script.length>=74?2:1):i+(e.script?e.script.length:o)}function dustThreshold(e,t){return 3*inputBytes({})}function transactionBytes(e,r){return t+e.reduce((function(e,t){return e+inputBytes(t)}),0)+r.reduce((function(e,t){return e+outputBytes(t)}),0)}function uintOrNaN(e){return"number"!=typeof e?NaN:isFinite(e)?Math.floor(e)!==e||e<0?NaN:e:NaN}function sumOrNaN(e){return e.reduce((function(e,t){return e+uintOrNaN(t.value)}),0)}var a=outputBytes({});e.exports={dustThreshold,finalize:function finalize(e,t,r){var n=transactionBytes(e,t),i=r*(n+a),o=sumOrNaN(e)-(sumOrNaN(t)+i);o>dustThreshold()&&(t=t.concat({value:o}));var s=sumOrNaN(e)-sumOrNaN(t);return isFinite(s)?{inputs:e,outputs:t,fee:s}:{fee:r*n}},inputBytes,outputBytes,sumOrNaN,sumForgiving:function sumForgiving(e){return e.reduce((function(e,t){return e+(isFinite(t.value)?t.value:0)}),0)},transactionBytes,uintOrNaN}}}]);