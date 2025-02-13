"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5597],{3755:(e,t,n)=>{n.d(t,{C:()=>fa,D:()=>sa,P:()=>k,Q:()=>m,T:()=>v,a:()=>S,b:()=>ca,c:()=>u});var r=n(7610),o=Object.defineProperty,i=(e,t,n)=>((e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!=typeof t?t+"":t,n),l=e=>null!=e;var a=e=>"function"!=typeof e||e.length?e:e(),s=e=>Array.isArray(e)?e:e?[e]:[];var d=r.n;var c,u=function(e){const[t,n]=(0,r.b)(),o=null!=e&&e.throw?(e,t)=>{throw n(e instanceof Error?e:new Error(t)),e}:(e,t)=>{n(e instanceof Error?e:new Error(t))},i=null!=e&&e.api?Array.isArray(e.api)?e.api:[e.api]:[globalThis.localStorage].filter(Boolean),l=null!=e&&e.prefix?`${e.prefix}.`:"",a=new Map,s=new Proxy({},{get(t,n){let s=a.get(n);s||(s=(0,r.b)(void 0,{equals:!1}),a.set(n,s)),s[0]();const d=i.reduce(((e,t)=>{if(null!==e||!t)return e;try{return t.getItem(`${l}${n}`)}catch(r){return o(r,`Error reading ${l}${n} from ${t.name}`),null}}),null);return null!==d&&null!=e&&e.deserializer?e.deserializer(d,n,e.options):d}});return!1!==(null==e?void 0:e.sync)&&(0,r.p)((()=>{const e=e=>{var t;let n=!1;i.forEach((t=>{try{t!==e.storageArea&&e.key&&e.newValue!==t.getItem(e.key)&&(e.newValue?t.setItem(e.key,e.newValue):t.removeItem(e.key),n=!0)}catch(r){o(r,`Error synching api ${t.name} from storage event (${e.key}=${e.newValue})`)}})),n&&e.key&&(null==(t=a.get(e.key))||t[1]())};"addEventListener"in globalThis?(globalThis.addEventListener("storage",e),(0,r.n)((()=>globalThis.removeEventListener("storage",e)))):(i.forEach((t=>{var n;return null==(n=t.addEventListener)?void 0:n.call(t,"storage",e)})),(0,r.n)((()=>i.forEach((t=>{var n;return null==(n=t.removeEventListener)?void 0:n.call(t,"storage",e)})))))})),[s,(t,n,r)=>{const s=null!=e&&e.serializer?e.serializer(n,t,r??e.options):n,d=`${l}${t}`;i.forEach((e=>{try{e.getItem(d)!==s&&e.setItem(d,s)}catch(n){o(n,`Error setting ${l}${t} to ${s} in ${e.name}`)}}));const c=a.get(t);c&&c[1]()},{clear:()=>i.forEach((e=>{try{e.clear()}catch(t){o(t,`Error clearing ${e.name}`)}})),error:t,remove:e=>i.forEach((t=>{try{t.removeItem(`${l}${e}`)}catch(n){o(n,`Error removing ${l}${e} from ${t.name}`)}})),toJSON:()=>{const t={},n=(n,r)=>{if(!t.hasOwnProperty(n)){const o=r&&null!=e&&e.deserializer?e.deserializer(r,n,e.options):r;o&&(t[n]=o)}};return i.forEach((e=>{if("function"==typeof e.getAll){let t;try{t=e.getAll()}catch(r){o(r,`Error getting all values from in ${e.name}`)}for(const e of t)n(e,t[e])}else{let r,l=0;try{for(;r=e.key(l++);)t.hasOwnProperty(r)||n(r,e.getItem(r))}catch(i){o(i,`Error getting all values from ${e.name}`)}}})),t}}]},f=e=>{if(!e)return"";let t="";for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n];t+=r instanceof Date?`; ${n}=${r.toUTCString()}`:"boolean"==typeof r?`; ${n}`:`; ${n}=${r}`}return t},g=("function"==typeof(c={_cookies:[globalThis.document,"cookie"],getItem:e=>{var t;return(null==(t=g._cookies[0][g._cookies[1]].match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)"))?void 0:t.pop())??null},setItem:(e,t,n)=>{const r=g.getItem(e);g._cookies[0][g._cookies[1]]=`${e}=${t}${f(n)}`;const o=Object.assign(new Event("storage"),{key:e,oldValue:r,newValue:t,url:globalThis.document.URL,storageArea:g});window.dispatchEvent(o)},removeItem:e=>{g._cookies[0][g._cookies[1]]=`${e}=deleted${f({expires:new Date(0)})}`},key:e=>{let t=null,n=0;return g._cookies[0][g._cookies[1]].replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,((r,o)=>(!t&&o&&n++===e&&(t=o),""))),t},get length(){let e=0;return g._cookies[0][g._cookies[1]].replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g,(t=>(e+=t?1:0,""))),e}}).clear||(c.clear=()=>{let e;for(;e=c.key(0);)c.removeItem(e)}),c),p=796,h="bottom",v="system",y=Object.keys(r.s)[0],b=Object.keys(r.m)[0],m=(0,r.i)({client:void 0,onlineManager:void 0,queryFlavor:"",version:"",shadowDOMTarget:void 0});function x(){return(0,r.u)(m)}var w=(0,r.i)(void 0),k=e=>{const[t,n]=(0,r.b)(null),o=()=>{const e=t();null!=e&&(e.close(),n(null))},i=(o,i)=>{if(null!=t())return;const l=window.open("","TSQD-Devtools-Panel",`width=${o},height=${i},popup`);if(!l)throw new Error("Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.");l.document.head.innerHTML="",l.document.body.innerHTML="",(0,r.C)(l.document),l.document.title="TanStack Query Devtools",l.document.body.style.margin="0",l.addEventListener("pagehide",(()=>{e.setLocalStore("pip_open","false"),n(null)})),[...(x().shadowDOMTarget||document).styleSheets].forEach((e=>{try{const t=[...e.cssRules].map((e=>e.cssText)).join(""),n=document.createElement("style"),r=e.ownerNode;let o="";r&&"id"in r&&(o=r.id),o&&n.setAttribute("id",o),n.textContent=t,l.document.head.appendChild(n)}catch{const t=document.createElement("link");if(null==e.href)return;t.rel="stylesheet",t.type=e.type,t.media=e.media.toString(),t.href=e.href,l.document.head.appendChild(t)}})),(0,r.d)(["focusin","focusout","pointermove","keydown","pointerdown","pointerup","click","mousedown","input"],l.document),e.setLocalStore("pip_open","true"),n(l)};(0,r.e)((()=>{"true"===(e.localStore.pip_open??"false")&&!e.disabled&&i(Number(window.innerWidth),Number(e.localStore.height||500))})),(0,r.e)((()=>{const e=(x().shadowDOMTarget||document).querySelector("#_goober"),n=t();if(e&&n){const t=new MutationObserver((()=>{const t=(x().shadowDOMTarget||n.document).querySelector("#_goober");t&&(t.textContent=e.textContent)}));t.observe(e,{childList:!0,subtree:!0,characterDataOldValue:!0}),(0,r.n)((()=>{t.disconnect()}))}}));const l=(0,r.c)((()=>({pipWindow:t(),requestPipWindow:i,closePipWindow:o,disabled:e.disabled??!1})));return(0,r.a)(w.Provider,{value:l,get children(){return e.children}})},$=()=>(0,r.c)((()=>{const e=(0,r.u)(w);if(!e)throw new Error("usePiPWindow must be used within a PiPProvider");return e()})),S=(0,r.i)((()=>"dark"));function C(){return(0,r.u)(S)}var E={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\u1ea4":"A","\u1eae":"A","\u1eb2":"A","\u1eb4":"A","\u1eb6":"A","\xc6":"AE","\u1ea6":"A","\u1eb0":"A","\u0202":"A","\xc7":"C","\u1e08":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\u1ebe":"E","\u1e16":"E","\u1ec0":"E","\u1e14":"E","\u1e1c":"E","\u0206":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\u1e2e":"I","\u020a":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\u1ed0":"O","\u1e4c":"O","\u1e52":"O","\u020e":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\u1ea5":"a","\u1eaf":"a","\u1eb3":"a","\u1eb5":"a","\u1eb7":"a","\xe6":"ae","\u1ea7":"a","\u1eb1":"a","\u0203":"a","\xe7":"c","\u1e09":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\u1ebf":"e","\u1e17":"e","\u1ec1":"e","\u1e15":"e","\u1e1d":"e","\u0207":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\u1e2f":"i","\u020b":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\u1ed1":"o","\u1e4d":"o","\u1e53":"o","\u020f":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xff":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u0108":"C","\u0109":"c","\u010a":"C","\u010b":"c","\u010c":"C","\u010d":"c","C\u0306":"C","c\u0306":"c","\u010e":"D","\u010f":"d","\u0110":"D","\u0111":"d","\u0112":"E","\u0113":"e","\u0114":"E","\u0115":"e","\u0116":"E","\u0117":"e","\u0118":"E","\u0119":"e","\u011a":"E","\u011b":"e","\u011c":"G","\u01f4":"G","\u011d":"g","\u01f5":"g","\u011e":"G","\u011f":"g","\u0120":"G","\u0121":"g","\u0122":"G","\u0123":"g","\u0124":"H","\u0125":"h","\u0126":"H","\u0127":"h","\u1e2a":"H","\u1e2b":"h","\u0128":"I","\u0129":"i","\u012a":"I","\u012b":"i","\u012c":"I","\u012d":"i","\u012e":"I","\u012f":"i","\u0130":"I","\u0131":"i","\u0132":"IJ","\u0133":"ij","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u1e30":"K","\u1e31":"k","K\u0306":"K","k\u0306":"k","\u0139":"L","\u013a":"l","\u013b":"L","\u013c":"l","\u013d":"L","\u013e":"l","\u013f":"L","\u0140":"l","\u0141":"l","\u0142":"l","\u1e3e":"M","\u1e3f":"m","M\u0306":"M","m\u0306":"m","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u0149":"n","N\u0306":"N","n\u0306":"n","\u014c":"O","\u014d":"o","\u014e":"O","\u014f":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","P\u0306":"P","p\u0306":"p","\u0154":"R","\u0155":"r","\u0156":"R","\u0157":"r","\u0158":"R","\u0159":"r","R\u0306":"R","r\u0306":"r","\u0212":"R","\u0213":"r","\u015a":"S","\u015b":"s","\u015c":"S","\u015d":"s","\u015e":"S","\u0218":"S","\u0219":"s","\u015f":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u021b":"t","\u021a":"T","\u0164":"T","\u0165":"t","\u0166":"T","\u0167":"t","T\u0306":"T","t\u0306":"t","\u0168":"U","\u0169":"u","\u016a":"U","\u016b":"u","\u016c":"U","\u016d":"u","\u016e":"U","\u016f":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0216":"U","\u0217":"u","V\u0306":"V","v\u0306":"v","\u0174":"W","\u0175":"w","\u1e82":"W","\u1e83":"w","X\u0306":"X","x\u0306":"x","\u0176":"Y","\u0177":"y","\u0178":"Y","Y\u0306":"Y","y\u0306":"y","\u0179":"Z","\u017a":"z","\u017b":"Z","\u017c":"z","\u017d":"Z","\u017e":"z","\u017f":"s","\u0192":"f","\u01a0":"O","\u01a1":"o","\u01af":"U","\u01b0":"u","\u01cd":"A","\u01ce":"a","\u01cf":"I","\u01d0":"i","\u01d1":"O","\u01d2":"o","\u01d3":"U","\u01d4":"u","\u01d5":"U","\u01d6":"u","\u01d7":"U","\u01d8":"u","\u01d9":"U","\u01da":"u","\u01db":"U","\u01dc":"u","\u1ee8":"U","\u1ee9":"u","\u1e78":"U","\u1e79":"u","\u01fa":"A","\u01fb":"a","\u01fc":"AE","\u01fd":"ae","\u01fe":"O","\u01ff":"o","\xde":"TH","\xfe":"th","\u1e54":"P","\u1e55":"p","\u1e64":"S","\u1e65":"s","X\u0301":"X","x\u0301":"x","\u0403":"\u0413","\u0453":"\u0433","\u040c":"\u041a","\u045c":"\u043a","A\u030b":"A","a\u030b":"a","E\u030b":"E","e\u030b":"e","I\u030b":"I","i\u030b":"i","\u01f8":"N","\u01f9":"n","\u1ed2":"O","\u1ed3":"o","\u1e50":"O","\u1e51":"o","\u1eea":"U","\u1eeb":"u","\u1e80":"W","\u1e81":"w","\u1ef2":"Y","\u1ef3":"y","\u0200":"A","\u0201":"a","\u0204":"E","\u0205":"e","\u0208":"I","\u0209":"i","\u020c":"O","\u020d":"o","\u0210":"R","\u0211":"r","\u0214":"U","\u0215":"u","B\u030c":"B","b\u030c":"b","\u010c\u0323":"C","\u010d\u0323":"c","\xca\u030c":"E","\xea\u030c":"e","F\u030c":"F","f\u030c":"f","\u01e6":"G","\u01e7":"g","\u021e":"H","\u021f":"h","J\u030c":"J","\u01f0":"j","\u01e8":"K","\u01e9":"k","M\u030c":"M","m\u030c":"m","P\u030c":"P","p\u030c":"p","Q\u030c":"Q","q\u030c":"q","\u0158\u0329":"R","\u0159\u0329":"r","\u1e66":"S","\u1e67":"s","V\u030c":"V","v\u030c":"v","W\u030c":"W","w\u030c":"w","X\u030c":"X","x\u030c":"x","Y\u030c":"Y","y\u030c":"y","A\u0327":"A","a\u0327":"a","B\u0327":"B","b\u0327":"b","\u1e10":"D","\u1e11":"d","\u0228":"E","\u0229":"e","\u0190\u0327":"E","\u025b\u0327":"e","\u1e28":"H","\u1e29":"h","I\u0327":"I","i\u0327":"i","\u0197\u0327":"I","\u0268\u0327":"i","M\u0327":"M","m\u0327":"m","O\u0327":"O","o\u0327":"o","Q\u0327":"Q","q\u0327":"q","U\u0327":"U","u\u0327":"u","X\u0327":"X","x\u0327":"x","Z\u0327":"Z","z\u0327":"z"},q=Object.keys(E).join("|"),M=new RegExp(q,"g");var F=7,L=6,D=5,T=4,z=3,A=2,O=1,I=0;function P(e,t,n){var r;if((n=n||{}).threshold=null!=(r=n.threshold)?r:O,!n.accessors){const r=K(e,t,n);return{rankedValue:e,rank:r,accessorIndex:-1,accessorThreshold:n.threshold,passed:r>=n.threshold}}const o=function(e,t){const n=[];for(let r=0,o=t.length;r<o;r++){const o=t[r],i=G(o),l=B(e,o);for(let e=0,t=l.length;e<t;e++)n.push({itemValue:l[e],attributes:i})}return n}(e,n.accessors),i={rankedValue:e,rank:I,accessorIndex:-1,accessorThreshold:n.threshold,passed:!1};for(let l=0;l<o.length;l++){const e=o[l];let r=K(e.itemValue,t,n);const{minRanking:a,maxRanking:s,threshold:d=n.threshold}=e.attributes;r<a&&r>=O?r=a:r>s&&(r=s),r=Math.min(r,s),r>=d&&r>i.rank&&(i.rank=r,i.passed=!0,i.accessorIndex=l,i.accessorThreshold=d,i.rankedValue=e.itemValue)}return i}function K(e,t,n){return e=R(e,n),(t=R(t,n)).length>e.length?I:e===t?F:(e=e.toLowerCase())===(t=t.toLowerCase())?L:e.startsWith(t)?D:e.includes(` ${t}`)?T:e.includes(t)?z:1===t.length?I:function(e){let t="";return e.split(" ").forEach((e=>{e.split("-").forEach((e=>{t+=e.substr(0,1)}))})),t}(e).includes(t)?A:function(e,t){let n=0,r=0;function o(e,t,r){for(let o=r,i=t.length;o<i;o++)if(t[o]===e)return n+=1,o+1;return-1}function i(e){const r=1/e,o=n/t.length;return O+o*r}const l=o(t[0],e,0);if(l<0)return I;r=l;for(let a=1,s=t.length;a<s;a++){if(r=o(t[a],e,r),!(r>-1))return I}return i(r-l)}(e,t)}function R(e,t){let{keepDiacritics:n}=t;return e=`${e}`,n||(e=function(e){return e.replace(M,(e=>E[e]))}(e)),e}function B(e,t){let n=t;"object"==typeof t&&(n=t.accessor);const r=n(e);return null==r?[]:Array.isArray(r)?r:[String(r)]}var j={maxRanking:1/0,minRanking:-1/0};function G(e){return"function"==typeof e?j:{...j,...e}}var U={data:""},H=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,V=/\/\*[^]*?\*\/|  +/g,N=/\n+/g,W=(e,t)=>{let n="",r="",o="";for(let i in e){let l=e[i];"@"==i[0]?"i"==i[1]?n=i+" "+l+";":r+="f"==i[1]?W(l,i):i+"{"+W(l,"k"==i[1]?"":t)+"}":"object"==typeof l?r+=W(l,t?t.replace(/([^,])+/g,(e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):i):null!=l&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=W.p?W.p(i,l):i+":"+l+";")}return n+(t&&o?t+"{"+o+"}":o)+r},Q={},_=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+_(e[n]);return t}return e};function X(e){let t=this||{},n=e.call?e(t.p):e;return((e,t,n,r,o)=>{let i=_(e),l=Q[i]||(Q[i]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(i));if(!Q[l]){let t=i!==e?e:(e=>{let t,n,r=[{}];for(;t=H.exec(e.replace(V,""));)t[4]?r.shift():t[3]?(n=t[3].replace(N," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(N," ").trim();return r[0]})(e);Q[l]=W(o?{["@keyframes "+l]:t}:t,n?"":"."+l)}let a=n&&Q.g?Q.g:null;return n&&(Q.g=Q[l]),s=Q[l],d=t,c=r,(u=a)?d.data=d.data.replace(u,s):-1===d.data.indexOf(s)&&(d.data=c?s+d.data:d.data+s),l;var s,d,c,u})(n.unshift?n.raw?((e,t,n)=>e.reduce(((e,r,o)=>{let i=t[o];if(i&&i.call){let e=i(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":W(e,""):!1===e?"":e}return e+r+(i??"")}),""))(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,(e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||U)(t.target),t.g,t.o,t.k)}function Z(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Z(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Y(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Z(e))&&(r&&(r+=" "),r+=t);return r}X.bind({g:1}),X.bind({k:1});var J=()=>{};function ee(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){for(const t of e)t&&t(...arguments)}}(t)}var te=e=>e instanceof Element;function ne(e,t){if(t(e))return e;if("function"==typeof e&&!e.length)return ne(e(),t);if(Array.isArray(e)){const n=[];for(const r of e){const e=ne(r,t);e&&(Array.isArray(e)?n.push.apply(n,e):n.push(e))}return n.length?n:null}return null}function re(e,t,n){void 0===t&&(t=te),void 0===n&&(n=te);const o=(0,r.c)(e),i=(0,r.c)((()=>ne(o(),t)));return i.toArray=()=>{const e=i();return Array.isArray(e)?e:e?[e]:[]},i}function oe(e){requestAnimationFrame((()=>requestAnimationFrame(e)))}function ie(e,t,n,r){const{onBeforeEnter:o,onEnter:i,onAfterEnter:l}=t;function a(t){(!t||t.target===n)&&(n.removeEventListener("transitionend",a),n.removeEventListener("animationend",a),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),null==l||l(n))}null==o||o(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask((()=>{if(!n.parentNode)return null==r?void 0:r();null==i||i(n,(()=>a()))})),oe((()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!i||i.length<2)&&(n.addEventListener("transitionend",a),n.addEventListener("animationend",a))}))}function le(e,t,n,r){const{onBeforeExit:o,onExit:i,onAfterExit:l}=t;if(!n.parentNode)return null==r?void 0:r();function a(t){(!t||t.target===n)&&(null==r||r(),n.removeEventListener("transitionend",a),n.removeEventListener("animationend",a),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),null==l||l(n))}null==o||o(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),null==i||i(n,(()=>a())),oe((()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!i||i.length<2)&&(n.addEventListener("transitionend",a),n.addEventListener("animationend",a))}))}var ae=e=>{const t=function(e){return(0,r.c)((()=>{const t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}}))}(e);return function(e,t){const n=(0,r.E)(e),{onChange:o}=t;let i=new Set(t.appear?void 0:n);const l=new WeakSet,[a,s]=(0,r.b)([],{equals:!1}),[d]=(0,r.W)(),c="remove"===t.exitMethod?J:e=>{s((t=>(t.push.apply(t,e),t)));for(const t of e)l.delete(t)},u="remove"===t.exitMethod?J:"keep-index"===t.exitMethod?(e,t,n)=>e.splice(n,0,t):(e,t)=>e.push(t);return(0,r.c)((t=>{const n=a(),s=e();if(s[r.$],(0,r.E)(d))return d(),t;if(n.length){const e=t.filter((e=>!n.includes(e)));return n.length=0,o({list:e,added:[],removed:[],unchanged:e,finishRemoved:c}),e}return(0,r.E)((()=>{const e=new Set(s),n=s.slice(),r=[],a=[],d=[];for(const t of s)(i.has(t)?d:r).push(t);let f=!r.length;for(let o=0;o<t.length;o++){const r=t[o];e.has(r)||(l.has(r)||(a.push(r),l.add(r)),u(n,r,o)),f&&r!==n[o]&&(f=!1)}return!a.length&&f?t:(o({list:n,added:r,removed:a,unchanged:d,finishRemoved:c}),i=e,n)}))}),t.appear?[]:n.slice())}(re((()=>e.children)).toArray,{appear:e.appear,exitMethod:"keep-index",onChange(n){let{added:r,removed:o,finishRemoved:i,list:l}=n;const a=t();for(const t of r)ie(a,e,t);const s=[];for(const e of l)e.isConnected&&(e instanceof HTMLElement||e instanceof SVGElement)&&s.push({el:e,rect:e.getBoundingClientRect()});queueMicrotask((()=>{const e=[];for(const{el:t,rect:n}of s)if(t.isConnected){const r=t.getBoundingClientRect(),o=n.left-r.left,i=n.top-r.top;(o||i)&&(t.style.transform=`translate(${o}px, ${i}px)`,t.style.transitionDuration="0s",e.push(t))}document.body.offsetHeight;for(const t of e){let e=function(n){(n.target===t||/transform$/.test(n.propertyName))&&(t.removeEventListener("transitionend",e),t.classList.remove(...a.move))};t.classList.add(...a.move),t.style.transform=t.style.transitionDuration="",t.addEventListener("transitionend",e)}}));for(const t of o)le(a,e,t,(()=>i([t])))}})},se=Symbol("fallback");function de(e){for(const t of e)t.dispose()}function ce(e){const{by:t}=e;return(0,r.c)(function(e,t,n,o){void 0===o&&(o={});const i=new Map;return(0,r.n)((()=>de(i.values()))),()=>{const n=e()||[];return n[r.$],(0,r.E)((()=>{var e,a;if(!n.length)return de(i.values()),i.clear(),o.fallback?[(0,r.O)((e=>(i.set(se,{dispose:e}),o.fallback())))]:[];const s=new Array(n.length),d=i.get(se);if(!i.size||d){null==d||d.dispose(),i.delete(se);for(let e=0;e<n.length;e++){const r=n[e];l(s,r,e,t(r,e))}return s}const c=new Set(i.keys());for(let r=0;r<n.length;r++){const o=n[r],a=t(o,r);c.delete(a);const d=i.get(a);d?(s[r]=d.mapped,null==(e=d.setIndex)||e.call(d,r),d.setItem((()=>o))):l(s,o,r,a)}for(const t of c)null==(a=i.get(t))||a.dispose(),i.delete(t);return s}))};function l(e,t,o,l){(0,r.O)((a=>{const[s,d]=(0,r.b)(t),c={setItem:d,dispose:a};if(n.length>1){const[e,t]=(0,r.b)(o);c.setIndex=t,c.mapped=n(s,e)}else c.mapped=n(s);i.set(l,c),e[o]=c.mapped}))}}((()=>e.each),"function"==typeof t?t:e=>e[t],e.children,"fallback"in e?{fallback:()=>e.fallback}:void 0))}function ue(e,t,n,o){const i=()=>{s(a(e)).forEach((e=>{e&&s(a(t)).forEach((t=>function(e,t,n,r){return e.addEventListener(t,n,r),d(e.removeEventListener.bind(e,t,n,r))}(e,t,n,o)))}))};"function"==typeof e?(0,r.e)(i):(0,r.j)(i)}function fe(e,t,n){const o=new WeakMap,{observe:i,unobserve:d}=function(e,t){const n=new ResizeObserver(e);return(0,r.n)(n.disconnect.bind(n)),{observe:e=>n.observe(e,t),unobserve:n.unobserve.bind(n)}}((e=>{for(const n of e){const{contentRect:e,target:r}=n,i=Math.round(e.width),l=Math.round(e.height),a=o.get(r);(!a||a.width!==i||a.height!==l)&&(t(e,r,n),o.set(r,{width:i,height:l}))}}),n);(0,r.e)((t=>{const n=(e=>e.filter(l))(s(a(e)));return function(e,t,n,r){const o=e.length,i=t.length;let l,a,s=0;if(i)if(o){for(;s<i&&t[s]===e[s];s++);for(l of(t=t.slice(s),e=e.slice(s),t))e.includes(l)||r(l);for(a of e)t.includes(a)||n(a)}else for(;s<i;s++)r(t[s]);else for(;s<o;s++)n(e[s])}(n,t,i,d),n}),[])}var ge=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function pe(e){const t={};let n;for(;n=ge.exec(e);)t[n[1]]=n[2];return t}function he(e,t){if("string"==typeof e){if("string"==typeof t)return`${e};${t}`;e=pe(e)}else"string"==typeof t&&(t=pe(t));return{...e,...t}}function ve(e,t){const n=[...e],r=n.indexOf(t);return-1!==r&&n.splice(r,1),n}function ye(e){return"number"==typeof e}function be(e){return"[object String]"===Object.prototype.toString.call(e)}function me(e){return t=>`${e()}-${t}`}function xe(e,t){return!!e&&(e===t||e.contains(t))}function we(e,t){void 0===t&&(t=!1);const{activeElement:n}=ke(e);if(null==n||!n.nodeName)return null;if($e(n)&&n.contentDocument)return we(n.contentDocument.body,t);if(t){const e=n.getAttribute("aria-activedescendant");if(e){const t=ke(n).getElementById(e);if(t)return t}}return n}function ke(e){return e?e.ownerDocument||e:document}function $e(e){return"IFRAME"===e.tagName}var Se=(e=>(e.Escape="Escape",e.Enter="Enter",e.Tab="Tab",e.Space=" ",e.ArrowDown="ArrowDown",e.ArrowLeft="ArrowLeft",e.ArrowRight="ArrowRight",e.ArrowUp="ArrowUp",e.End="End",e.Home="Home",e.PageDown="PageDown",e.PageUp="PageUp",e))(Se||{});function Ce(e){var t;return typeof window<"u"&&null!=window.navigator&&e.test((null==(t=window.navigator.userAgentData)?void 0:t.platform)||window.navigator.platform)}function Ee(){return Ce(/^Mac/i)}function qe(){return Ce(/^iPhone/i)||Ce(/^iPad/i)||Ee()&&navigator.maxTouchPoints>1}function Me(e,t){return t&&(function(e){return"function"==typeof e}(t)?t(e):t[0](t[1],e)),null==e?void 0:e.defaultPrevented}function Fe(e){return t=>{for(const n of e)Me(t,n)}}function Le(e){return Ee()?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey}function De(e){if(e)if(function(){if(null==Te){Te=!1;try{document.createElement("div").focus({get preventScroll(){return Te=!0,!0}})}catch{}}return Te}())e.focus({preventScroll:!0});else{const t=function(e){let t=e.parentNode;const n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}(e);e.focus(),function(e){for(const{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}var Te=null;var ze=["input:not([type='hidden']):not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","[tabindex]","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])"],Ae=[...ze,'[tabindex]:not([tabindex="-1"]):not([disabled])'],Oe=ze.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])",Ie=Ae.join(':not([hidden]):not([tabindex="-1"]),');function Pe(e,t){const n=Array.from(e.querySelectorAll(Oe)).filter(Ke);return t&&Ke(e)&&n.unshift(e),n.forEach(((e,t)=>{if($e(e)&&e.contentDocument){const r=Pe(e.contentDocument.body,!1);n.splice(t,1,...r)}})),n}function Ke(e){return Re(e)&&!function(e){return parseInt(e.getAttribute("tabindex")||"0",10)<0}(e)}function Re(e){return e.matches(Oe)&&Be(e)}function Be(e,t){return"#comment"!==e.nodeName&&function(e){if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const{display:t,visibility:n}=e.style;let r="none"!==t&&"hidden"!==n&&"collapse"!==n;if(r){if(!e.ownerDocument.defaultView)return r;const{getComputedStyle:t}=e.ownerDocument.defaultView,{display:n,visibility:o}=t(e);r="none"!==n&&"hidden"!==o&&"collapse"!==o}return r}(e)&&function(e,t){return!e.hasAttribute("hidden")&&("DETAILS"!==e.nodeName||!t||"SUMMARY"===t.nodeName||e.hasAttribute("open"))}(e,t)&&(!e.parentElement||Be(e.parentElement,e))}function je(e){for(;e&&!Ge(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function Ge(e){const t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function Ue(){}function He(e,t){return(0,r.f)(e,t)}var Ve=new Map,Ne=new Set;function We(){if(typeof window>"u")return;const e=t=>{if(!t.target)return;const n=Ve.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),Ve.delete(t.target)),0===Ve.size)){for(const e of Ne)e();Ne.clear()}};document.body.addEventListener("transitionrun",(t=>{if(!t.target)return;let n=Ve.get(t.target);n||(n=new Set,Ve.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}function Qe(e,t){const n=_e(e,t,"left"),r=_e(e,t,"top"),o=t.offsetWidth,i=t.offsetHeight;let l=e.scrollLeft,a=e.scrollTop;const s=l+e.offsetWidth,d=a+e.offsetHeight;n<=l?l=n:n+o>s&&(l+=n+o-s),r<=a?a=r:r+i>d&&(a+=r+i-d),e.scrollLeft=l,e.scrollTop=a}function _e(e,t,n){const r="left"===n?"offsetLeft":"offsetTop";let o=0;for(;t.offsetParent&&(o+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){o-=e[r];break}t=t.offsetParent}return o}typeof document<"u"&&("loading"!==document.readyState?We():document.addEventListener("DOMContentLoaded",We));var Xe={border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:"0",position:"absolute",width:"1px","white-space":"nowrap"};function Ze(e){return t=>(e(t),()=>e(void 0))}function Ye(e,t){const[n,o]=(0,r.b)(Je(null==t?void 0:t()));return(0,r.e)((()=>{var n;o((null==(n=e())?void 0:n.tagName.toLowerCase())||Je(null==t?void 0:t()))})),n}function Je(e){return be(e)?e:void 0}function et(e){const[t,n]=(0,r.h)(e,["as"]);if(!t.as)throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");return(0,r.a)(r.D,(0,r.f)(n,{get component(){return t.as}}))}var tt=["id","name","validationState","required","disabled","readOnly"];var nt=(0,r.i)();function rt(){const e=(0,r.u)(nt);if(void 0===e)throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");return e}function ot(e){const t=rt(),n=He({id:t.generateId("description")},e);return(0,r.e)((()=>(0,r.n)(t.registerDescription(n.id)))),(0,r.a)(et,(0,r.f)({as:"div"},(()=>t.dataset()),n))}function it(e){const t=rt(),n=He({id:t.generateId("error-message")},e),[o,i]=(0,r.h)(n,["forceMount"]),l=()=>"invalid"===t.validationState();return(0,r.e)((()=>{l()&&(0,r.n)(t.registerErrorMessage(i.id))})),(0,r.a)(r.S,{get when(){return o.forceMount||l()},get children(){return(0,r.a)(et,(0,r.f)({as:"div"},(()=>t.dataset()),i))}})}function lt(e){let t;const n=rt(),o=He({id:n.generateId("label")},e),[i,l]=(0,r.h)(o,["ref"]),a=Ye((()=>t),(()=>"label"));return(0,r.e)((()=>(0,r.n)(n.registerLabel(l.id)))),(0,r.a)(et,(0,r.f)({as:"label",ref(e){const n=ee((e=>t=e),i.ref);"function"==typeof n&&n(e)},get for(){return(0,r.c)((()=>"label"===a()))()?n.fieldId():void 0}},(()=>n.dataset()),l))}function at(e,t){(0,r.e)((0,r.o)(e,(e=>{if(null==e)return;const n=function(e){return function(e){return e.matches("textarea, input, select, button")}(e)?e.form:e.closest("form")}(e);null!=n&&(n.addEventListener("reset",t,{passive:!0}),(0,r.n)((()=>{n.removeEventListener("reset",t)})))})))}function st(e){var t;const[n,o]=(0,r.b)(null==(t=e.defaultValue)?void 0:t.call(e)),i=(0,r.c)((()=>{var t;return void 0!==(null==(t=e.value)?void 0:t.call(e))})),l=(0,r.c)((()=>{var t;return i()?null==(t=e.value)?void 0:t.call(e):n()}));return[l,t=>{(0,r.E)((()=>{var n;const r=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return"function"==typeof e?e(...n):e}(t,l());return Object.is(r,l())||(i()||o(r),null==(n=e.onChange)||n.call(e,r)),r}))}]}function dt(e){const[t,n]=st(e);return[()=>t()??!1,n]}var ct=Object.defineProperty,ut=(e,t)=>{for(var n in t)ct(e,n,{get:t[n],enumerable:!0})},ft=(0,r.i)();function gt(){return(0,r.u)(ft)}function pt(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}function ht(e,t){const n=function(e){const t=e.map(((e,t)=>[t,e]));let n=!1;return t.sort(((e,t)=>{let[r,o]=e,[i,l]=t;const a=o.ref(),s=l.ref();return a!==s&&a&&s?pt(a,s)?(r>i&&(n=!0),-1):(r<i&&(n=!0),1):0})),n?t.map((e=>{let[t,n]=e;return n})):e}(e);e!==n&&t(n)}function vt(e,t){if("function"!=typeof IntersectionObserver)return void function(e,t){(0,r.e)((()=>{const n=setTimeout((()=>{ht(e(),t)}));(0,r.n)((()=>clearTimeout(n)))}))}(e,t);let n=[];(0,r.e)((()=>{const o=function(e){var t,n;const r=e[0],o=null==(t=e[e.length-1])?void 0:t.ref();let i=null==(n=null==r?void 0:r.ref())?void 0:n.parentElement;for(;i;){if(o&&i.contains(o))return i;i=i.parentElement}return ke(i).body}(e()),i=new IntersectionObserver((()=>{const r=!!n.length;n=e(),r&&ht(e(),t)}),{root:o});for(const t of e()){const e=t.ref();e&&i.observe(e)}(0,r.n)((()=>i.disconnect()))}))}function yt(e){void 0===e&&(e={});const[t,n]=function(e){const[t,n]=st(e);return[()=>t()??[],n]}({value:()=>a(e.items),onChange:t=>{var n;return null==(n=e.onItemsChange)?void 0:n.call(e,t)}});vt(t,n);const o=e=>(n((t=>{const n=function(e,t){var n;const r=t.ref();if(!r)return-1;let o=e.length;if(!o)return-1;for(;o--;){const t=null==(n=e[o])?void 0:n.ref();if(t&&pt(t,r))return o+1}return 0}(t,e);return function(e,t,n){return void 0===n&&(n=-1),n in e?[...e.slice(0,n),t,...e.slice(n)]:[...e,t]}(t,e,n)})),()=>{n((t=>{const n=t.filter((t=>t.ref()!==e.ref()));return t.length===n.length?t:n}))});return{DomCollectionProvider:e=>(0,r.a)(ft.Provider,{value:{registerItem:o},get children(){return e.children}})}}function bt(e){const t=function(){const e=gt();if(void 0===e)throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");return e}(),n=He({shouldRegisterItem:!0},e);(0,r.e)((()=>{if(!n.shouldRegisterItem)return;const e=t.registerItem(n.getItem());(0,r.n)(e)}))}function mt(e){let t=e.startIndex??0;const n=e.startLevel??0,r=[],o=t=>{if(null==t)return"";const n=e.getKey??"key",r=be(n)?t[n]:n(t);return null!=r?String(r):""},i=t=>{if(null==t)return"";const n=e.getTextValue??"textValue",r=be(n)?t[n]:n(t);return null!=r?String(r):""},l=t=>{if(null==t)return!1;const n=e.getDisabled??"disabled";return(be(n)?t[n]:n(t))??!1},a=t=>{var n;if(null!=t)return be(e.getSectionChildren)?t[e.getSectionChildren]:null==(n=e.getSectionChildren)?void 0:n.call(e,t)};for(const s of e.dataSource)if(be(s)||ye(s))r.push({type:"item",rawValue:s,key:String(s),textValue:String(s),disabled:l(s),level:n,index:t}),t++;else if(null!=a(s)){r.push({type:"section",rawValue:s,key:"",textValue:"",disabled:!1,level:n,index:t}),t++;const o=a(s)??[];if(o.length>0){const i=mt({dataSource:o,getKey:e.getKey,getTextValue:e.getTextValue,getDisabled:e.getDisabled,getSectionChildren:e.getSectionChildren,startIndex:t,startLevel:n+1});r.push(...i),t+=i.length}}else r.push({type:"item",rawValue:s,key:o(s),textValue:i(s),disabled:l(s),level:n,index:t}),t++;return r}function xt(e,t){return void 0===t&&(t=[]),(0,r.c)((()=>{const n=mt({dataSource:a(e.dataSource),getKey:a(e.getKey),getTextValue:a(e.getTextValue),getDisabled:a(e.getDisabled),getSectionChildren:a(e.getSectionChildren)});for(let e=0;e<t.length;e++)t[e]();return e.factory(n)}))}var wt=new Set(["Avst","Arab","Armi","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),kt=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function $t(e){return function(e){if(Intl.Locale){const t=new Intl.Locale(e).maximize().script??"";return wt.has(t)}const t=e.split("-")[0];return kt.has(t)}(e)?"rtl":"ltr"}function St(){let e=typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";return{locale:e,direction:$t(e)}}var Ct=St(),Et=new Set;function qt(){Ct=St();for(const e of Et)e(Ct)}var Mt=(0,r.i)();function Ft(){const e=function(){const[e,t]=(0,r.b)(Ct),n=(0,r.c)((()=>e()));return(0,r.p)((()=>{0===Et.size&&window.addEventListener("languagechange",qt),Et.add(t),(0,r.n)((()=>{Et.delete(t),0===Et.size&&window.removeEventListener("languagechange",qt)}))})),{locale:()=>n().locale,direction:()=>n().direction}}();return(0,r.u)(Mt)||e}var Lt=new Map;var Dt=class e extends Set{constructor(t,n,r){super(t),i(this,"anchorKey"),i(this,"currentKey"),t instanceof e?(this.anchorKey=n||t.anchorKey,this.currentKey=r||t.currentKey):(this.anchorKey=n,this.currentKey=r)}};function Tt(e){return Ee()||qe()?e.altKey:e.ctrlKey}function zt(e){return Ee()?e.metaKey:e.ctrlKey}function At(e){return new Dt(e)}function Ot(e){const t=He({selectionMode:"none",selectionBehavior:"toggle"},e),[n,o]=(0,r.b)(!1),[i,l]=(0,r.b)(),s=(0,r.c)((()=>{const e=a(t.selectedKeys);return null!=e?At(e):e})),d=(0,r.c)((()=>{const e=a(t.defaultSelectedKeys);return null!=e?At(e):new Dt})),[c,u]=function(e){const[t,n]=st(e);return[()=>t()??new Dt,n]}({value:s,defaultValue:d,onChange:e=>{var n;return null==(n=t.onSelectionChange)?void 0:n.call(t,e)}}),[f,g]=(0,r.b)(a(t.selectionBehavior));return(0,r.e)((()=>{const e=c();"replace"===a(t.selectionBehavior)&&"toggle"===f()&&"object"==typeof e&&0===e.size&&g("replace")})),(0,r.e)((()=>{g(a(t.selectionBehavior)??"toggle")})),{selectionMode:()=>a(t.selectionMode),disallowEmptySelection:()=>a(t.disallowEmptySelection)??!1,selectionBehavior:f,setSelectionBehavior:g,isFocused:n,setFocused:o,focusedKey:i,setFocusedKey:l,selectedKeys:c,setSelectedKeys:e=>{(a(t.allowDuplicateSelectionEvents)||!function(e,t){if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0}(e,c()))&&u(e)}}}function It(e,t,n){const o=(0,r.f)({selectOnFocus:()=>"replace"===a(e.selectionManager).selectionBehavior()},e),i=()=>t(),{direction:l}=Ft();let s={top:0,left:0};ue((()=>a(o.isVirtualized)?void 0:i()),"scroll",(()=>{const e=i();e&&(s={top:e.scrollTop,left:e.scrollLeft})}));const{typeSelectHandlers:d}=function(e){const[t,n]=(0,r.b)(""),[o,i]=(0,r.b)(-1);return{typeSelectHandlers:{onKeyDown:r=>{var l;if(a(e.isDisabled))return;const s=a(e.keyboardDelegate),d=a(e.selectionManager);if(!s.getKeyForSearch)return;const c=function(e){return 1!==e.length&&/^[A-Z]/i.test(e)?"":e}(r.key);if(!c||r.ctrlKey||r.metaKey)return;" "===c&&t().trim().length>0&&(r.preventDefault(),r.stopPropagation());let u=n((e=>e+c)),f=s.getKeyForSearch(u,d.focusedKey())??s.getKeyForSearch(u);null==f&&function(e){return e.split("").every((t=>t===e[0]))}(u)&&(u=u[0],f=s.getKeyForSearch(u,d.focusedKey())??s.getKeyForSearch(u)),null!=f&&(d.setFocusedKey(f),null==(l=e.onTypeSelect)||l.call(e,f)),clearTimeout(o()),i(window.setTimeout((()=>n("")),500))}}}}({isDisabled:()=>a(o.disallowTypeAhead),keyboardDelegate:()=>a(o.keyboardDelegate),selectionManager:()=>a(o.selectionManager)}),c=()=>a(o.orientation)??"vertical",u=()=>{var e,n;const r=a(o.autoFocus);if(!r)return;const i=a(o.selectionManager),l=a(o.keyboardDelegate);let s;"first"===r&&(s=null==(e=l.getFirstKey)?void 0:e.call(l)),"last"===r&&(s=null==(n=l.getLastKey)?void 0:n.call(l));const d=i.selectedKeys();d.size&&(s=d.values().next().value),i.setFocused(!0),i.setFocusedKey(s);const c=t();c&&null==s&&!a(o.shouldUseVirtualFocus)&&De(c)};return(0,r.p)((()=>{o.deferAutoFocus?setTimeout(u,0):u()})),(0,r.e)((0,r.o)([i,()=>a(o.isVirtualized),()=>a(o.selectionManager).focusedKey()],(e=>{var t;const[n,r,i]=e;if(r)i&&(null==(t=o.scrollToKey)||t.call(o,i));else if(i&&n){const e=n.querySelector(`[data-key="${i}"]`);e&&Qe(n,e)}}))),{tabIndex:(0,r.c)((()=>{if(!a(o.shouldUseVirtualFocus))return null==a(o.selectionManager).focusedKey()?0:-1})),onKeyDown:e=>{var n,r,i,s,u,f,g,p;Me(e,d.onKeyDown),e.altKey&&"Tab"===e.key&&e.preventDefault();const h=t();if(null==h||!h.contains(e.target))return;const v=a(o.selectionManager),y=a(o.selectOnFocus),b=t=>{null!=t&&(v.setFocusedKey(t),e.shiftKey&&"multiple"===v.selectionMode()?v.extendSelection(t):y&&!Tt(e)&&v.replaceSelection(t))},m=a(o.keyboardDelegate),x=a(o.shouldFocusWrap),w=v.focusedKey();switch(e.key){case"vertical"===c()?"ArrowDown":"ArrowRight":if(m.getKeyBelow){let t;e.preventDefault(),t=null!=w?m.getKeyBelow(w):null==(n=m.getFirstKey)?void 0:n.call(m),null==t&&x&&(t=null==(r=m.getFirstKey)?void 0:r.call(m,w)),b(t)}break;case"vertical"===c()?"ArrowUp":"ArrowLeft":if(m.getKeyAbove){let t;e.preventDefault(),t=null!=w?m.getKeyAbove(w):null==(i=m.getLastKey)?void 0:i.call(m),null==t&&x&&(t=null==(s=m.getLastKey)?void 0:s.call(m,w)),b(t)}break;case"vertical"===c()?"ArrowLeft":"ArrowUp":if(m.getKeyLeftOf){e.preventDefault();const t="rtl"===l();let n;n=null!=w?m.getKeyLeftOf(w):t?null==(u=m.getFirstKey)?void 0:u.call(m):null==(f=m.getLastKey)?void 0:f.call(m),b(n)}break;case"vertical"===c()?"ArrowRight":"ArrowDown":if(m.getKeyRightOf){e.preventDefault();const t="rtl"===l();let n;n=null!=w?m.getKeyRightOf(w):t?null==(g=m.getLastKey)?void 0:g.call(m):null==(p=m.getFirstKey)?void 0:p.call(m),b(n)}break;case"Home":if(m.getFirstKey){e.preventDefault();const t=m.getFirstKey(w,zt(e));null!=t&&(v.setFocusedKey(t),zt(e)&&e.shiftKey&&"multiple"===v.selectionMode()?v.extendSelection(t):y&&v.replaceSelection(t))}break;case"End":if(m.getLastKey){e.preventDefault();const t=m.getLastKey(w,zt(e));null!=t&&(v.setFocusedKey(t),zt(e)&&e.shiftKey&&"multiple"===v.selectionMode()?v.extendSelection(t):y&&v.replaceSelection(t))}break;case"PageDown":if(m.getKeyPageBelow&&null!=w){e.preventDefault();b(m.getKeyPageBelow(w))}break;case"PageUp":if(m.getKeyPageAbove&&null!=w){e.preventDefault();b(m.getKeyPageAbove(w))}break;case"a":zt(e)&&"multiple"===v.selectionMode()&&!0!==a(o.disallowSelectAll)&&(e.preventDefault(),v.selectAll());break;case"Escape":e.defaultPrevented||(e.preventDefault(),a(o.disallowEmptySelection)||v.clearSelection());break;case"Tab":if(!a(o.allowsTabNavigation)){if(e.shiftKey)h.focus();else{const e=function(e,t){const n=null!=t&&t.tabbable?Ie:Oe,r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var r;return null!=(r=null==t?void 0:t.from)&&r.contains(e)?NodeFilter.FILTER_REJECT:e.matches(n)&&Be(e)&&(null==t||!t.accept||t.accept(e))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return null!=t&&t.from&&(r.currentNode=t.from),r}(h,{tabbable:!0});let t,n;do{n=e.lastChild(),n&&(t=n)}while(n);t&&!t.contains(document.activeElement)&&De(t)}break}}},onMouseDown:e=>{i()===e.target&&e.preventDefault()},onFocusIn:e=>{var t,n;const r=a(o.selectionManager),l=a(o.keyboardDelegate),d=a(o.selectOnFocus);if(r.isFocused())e.currentTarget.contains(e.target)||r.setFocused(!1);else if(e.currentTarget.contains(e.target))if(r.setFocused(!0),null==r.focusedKey()){const o=e=>{null!=e&&(r.setFocusedKey(e),d&&r.replaceSelection(e))},i=e.relatedTarget;i&&e.currentTarget.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING?o(r.lastSelectedKey()??(null==(t=l.getLastKey)?void 0:t.call(l))):o(r.firstSelectedKey()??(null==(n=l.getFirstKey)?void 0:n.call(l)))}else if(!a(o.isVirtualized)){const e=i();if(e){e.scrollTop=s.top,e.scrollLeft=s.left;const t=e.querySelector(`[data-key="${r.focusedKey()}"]`);t&&(De(t),Qe(e,t))}}},onFocusOut:e=>{const t=a(o.selectionManager);e.currentTarget.contains(e.relatedTarget)||t.setFocused(!1)}}}function Pt(e,t){const n=()=>a(e.selectionManager),o=()=>a(e.key),i=()=>a(e.shouldUseVirtualFocus),l=e=>{"none"!==n().selectionMode()&&("single"===n().selectionMode()?n().isSelected(o())&&!n().disallowEmptySelection()?n().toggleSelection(o()):n().replaceSelection(o()):null!=e&&e.shiftKey?n().extendSelection(o()):"toggle"===n().selectionBehavior()||zt(e)||"pointerType"in e&&"touch"===e.pointerType?n().toggleSelection(o()):n().replaceSelection(o()))},s=()=>a(e.disabled)||n().isDisabled(o()),d=()=>!s()&&n().canSelectItem(o());let c=null;const u=(0,r.c)((()=>{if(!i()&&!s())return o()===n().focusedKey()?0:-1})),f=(0,r.c)((()=>a(e.virtualized)?void 0:o()));return(0,r.e)((0,r.o)([t,o,i,()=>n().focusedKey(),()=>n().isFocused()],(t=>{let[n,r,o,i,l]=t;n&&r===i&&l&&!o&&document.activeElement!==n&&(e.focus?e.focus():De(n))}))),{isSelected:()=>n().isSelected(o()),isDisabled:s,allowsSelection:d,tabIndex:u,dataKey:f,onPointerDown:t=>{d()&&(c=t.pointerType,"mouse"===t.pointerType&&0===t.button&&!a(e.shouldSelectOnPressUp)&&l(t))},onPointerUp:t=>{d()&&"mouse"===t.pointerType&&0===t.button&&a(e.shouldSelectOnPressUp)&&a(e.allowsDifferentPressOrigin)&&l(t)},onClick:t=>{d()&&(a(e.shouldSelectOnPressUp)&&!a(e.allowsDifferentPressOrigin)||"mouse"!==c)&&l(t)},onKeyDown:e=>{!d()||!["Enter"," "].includes(e.key)||(Tt(e)?n().toggleSelection(o()):l(e))},onMouseDown:e=>{s()&&e.preventDefault()},onFocus:e=>{const r=t();i()||s()||!r||e.target===r&&n().setFocusedKey(o())}}}var Kt=class{constructor(e,t){i(this,"collection"),i(this,"state"),this.collection=e,this.state=t}selectionMode(){return this.state.selectionMode()}disallowEmptySelection(){return this.state.disallowEmptySelection()}selectionBehavior(){return this.state.selectionBehavior()}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}isFocused(){return this.state.isFocused()}setFocused(e){this.state.setFocused(e)}focusedKey(){return this.state.focusedKey()}setFocusedKey(e){(null==e||this.collection().getItem(e))&&this.state.setFocusedKey(e)}selectedKeys(){return this.state.selectedKeys()}isSelected(e){if("none"===this.state.selectionMode())return!1;const t=this.getKey(e);return null!=t&&this.state.selectedKeys().has(t)}isEmpty(){return 0===this.state.selectedKeys().size}isSelectAll(){if(this.isEmpty())return!1;const e=this.state.selectedKeys();return this.getAllSelectableKeys().every((t=>e.has(t)))}firstSelectedKey(){let e;for(const t of this.state.selectedKeys()){const n=this.collection().getItem(t),r=null!=(null==n?void 0:n.index)&&null!=(null==e?void 0:e.index)&&n.index<e.index;(!e||r)&&(e=n)}return null==e?void 0:e.key}lastSelectedKey(){let e;for(const t of this.state.selectedKeys()){const n=this.collection().getItem(t),r=null!=(null==n?void 0:n.index)&&null!=(null==e?void 0:e.index)&&n.index>e.index;(!e||r)&&(e=n)}return null==e?void 0:e.key}extendSelection(e){if("none"===this.selectionMode())return;if("single"===this.selectionMode())return void this.replaceSelection(e);const t=this.getKey(e);if(null==t)return;const n=this.state.selectedKeys(),r=n.anchorKey||t,o=new Dt(n,r,t);for(const i of this.getKeyRange(r,n.currentKey||t))o.delete(i);for(const i of this.getKeyRange(t,r))this.canSelectItem(i)&&o.add(i);this.state.setSelectedKeys(o)}getKeyRange(e,t){const n=this.collection().getItem(e),r=this.collection().getItem(t);return n&&r?null!=n.index&&null!=r.index&&n.index<=r.index?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){const n=[];let r=e;for(;null!=r;){const e=this.collection().getItem(r);if(e&&"item"===e.type&&n.push(r),r===t)return n;r=this.collection().getKeyAfter(r)}return[]}getKey(e){const t=this.collection().getItem(e);return t?t&&"item"===t.type?t.key:null:e}toggleSelection(e){if("none"===this.selectionMode())return;if("single"===this.selectionMode()&&!this.isSelected(e))return void this.replaceSelection(e);const t=this.getKey(e);if(null==t)return;const n=new Dt(this.state.selectedKeys());n.has(t)?n.delete(t):this.canSelectItem(t)&&(n.add(t),n.anchorKey=t,n.currentKey=t),(!this.disallowEmptySelection()||0!==n.size)&&this.state.setSelectedKeys(n)}replaceSelection(e){if("none"===this.selectionMode())return;const t=this.getKey(e);if(null==t)return;const n=this.canSelectItem(t)?new Dt([t],t,t):new Dt;this.state.setSelectedKeys(n)}setSelectedKeys(e){if("none"===this.selectionMode())return;const t=new Dt;for(const n of e){const e=this.getKey(n);if(null!=e&&(t.add(e),"single"===this.selectionMode()))break}this.state.setSelectedKeys(t)}selectAll(){"multiple"===this.selectionMode()&&this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()))}clearSelection(){const e=this.state.selectedKeys();!this.disallowEmptySelection()&&e.size>0&&this.state.setSelectedKeys(new Dt)}toggleSelectAll(){this.isSelectAll()?this.clearSelection():this.selectAll()}select(e,t){"none"!==this.selectionMode()&&("single"===this.selectionMode()?this.isSelected(e)&&!this.disallowEmptySelection()?this.toggleSelection(e):this.replaceSelection(e):"toggle"===this.selectionBehavior()||t&&"touch"===t.pointerType?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys())return!0;const t=this.selectedKeys();if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;for(const n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){if("none"===this.state.selectionMode())return!1;const t=this.collection().getItem(e);return null!=t&&!t.disabled}isDisabled(e){const t=this.collection().getItem(e);return!t||t.disabled}getAllSelectableKeys(){const e=[];return(t=>{for(;null!=t;){if(this.canSelectItem(t)){const n=this.collection().getItem(t);if(!n)continue;"item"===n.type&&e.push(t)}t=this.collection().getKeyAfter(t)}})(this.collection().getFirstKey()),e}},Rt=class{constructor(e){i(this,"keyMap",new Map),i(this,"iterable"),i(this,"firstKey"),i(this,"lastKey"),this.iterable=e;for(const r of e)this.keyMap.set(r.key,r);if(0===this.keyMap.size)return;let t,n=0;for(const[r,o]of this.keyMap)t?(t.nextKey=r,o.prevKey=t.key):(this.firstKey=r,o.prevKey=void 0),"item"===o.type&&(o.index=n++),t=o,t.nextKey=void 0;this.lastKey=t.key}*[Symbol.iterator](){yield*this.iterable}getSize(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){var t;return null==(t=this.keyMap.get(e))?void 0:t.prevKey}getKeyAfter(e){var t;return null==(t=this.keyMap.get(e))?void 0:t.nextKey}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}};var Bt,jt=e=>"function"==typeof e?e():e,Gt=e=>{const t=(0,r.c)((()=>{const t=jt(e.element);if(t)return getComputedStyle(t)})),n=()=>{var e;return(null==(e=t())?void 0:e.animationName)??"none"},[o,i]=(0,r.b)(jt(e.show)?"present":"hidden");let l="none";return(0,r.e)((o=>{const a=jt(e.show);return(0,r.E)((()=>{var e;if(o===a)return a;const r=l,s=n();a?i("present"):"none"===s||"none"===(null==(e=t())?void 0:e.display)?i("hidden"):i(!0===o&&r!==s?"hiding":"hidden")})),a})),(0,r.e)((()=>{const t=jt(e.element);if(!t)return;const a=e=>{e.target===t&&(l=n())},s=e=>{const r=n().includes(e.animationName);e.target===t&&r&&"hiding"===o()&&i("hidden")};t.addEventListener("animationstart",a),t.addEventListener("animationcancel",s),t.addEventListener("animationend",s),(0,r.n)((()=>{t.removeEventListener("animationstart",a),t.removeEventListener("animationcancel",s),t.removeEventListener("animationend",s)}))})),{present:()=>"present"===o()||"hiding"===o(),state:o}},Ut=Gt,Ht="data-kb-top-layer",Vt=!1,Nt=[];function Wt(e){return Nt.findIndex((t=>t.node===e))}function Qt(){return Nt.filter((e=>e.isPointerBlocking))}function _t(){return Qt().length>0}function Xt(e){var t;const n=Wt(null==(t=[...Qt()].slice(-1)[0])?void 0:t.node);return Wt(e)<n}var Zt={layers:Nt,isTopMostLayer:function(e){return Nt[Nt.length-1].node===e},hasPointerBlockingLayer:_t,isBelowPointerBlockingLayer:Xt,addLayer:function(e){Nt.push(e)},removeLayer:function(e){const t=Wt(e);t<0||Nt.splice(t,1)},indexOf:Wt,find:function(e){return Nt[Wt(e)]},assignPointerEventToLayers:function(){for(const{node:e}of Nt)e.style.pointerEvents=Xt(e)?"none":"auto"},disableBodyPointerEvents:function(e){if(_t()&&!Vt){const t=ke(e);Bt=document.body.style.pointerEvents,t.body.style.pointerEvents="none",Vt=!0}},restoreBodyPointerEvents:function(e){if(_t())return;const t=ke(e);t.body.style.pointerEvents=Bt,0===t.body.style.length&&t.body.removeAttribute("style"),Vt=!1}};ut({},{Button:()=>en,Root:()=>Jt});var Yt=["button","color","file","image","reset","submit"];function Jt(e){let t;const n=He({type:"button"},e),[o,i]=(0,r.h)(n,["ref","type","disabled"]),l=Ye((()=>t),(()=>"button")),a=(0,r.c)((()=>{const e=l();return null!=e&&function(e){const t=e.tagName.toLowerCase();return"button"===t||!("input"!==t||!e.type)&&-1!==Yt.indexOf(e.type)}({tagName:e,type:o.type})})),s=(0,r.c)((()=>"input"===l())),d=(0,r.c)((()=>"a"===l()&&null!=(null==t?void 0:t.getAttribute("href"))));return(0,r.a)(et,(0,r.f)({as:"button",ref(e){const n=ee((e=>t=e),o.ref);"function"==typeof n&&n(e)},get type(){return a()||s()?o.type:void 0},get role(){return a()||d()?void 0:"button"},get tabIndex(){return a()||d()||o.disabled?void 0:0},get disabled(){return a()||s()?o.disabled:void 0},get"aria-disabled"(){return!(a()||s()||!o.disabled)||void 0},get"data-disabled"(){return o.disabled?"":void 0}},i))}var en=Jt,tn=["top","right","bottom","left"],nn=Math.min,rn=Math.max,on=Math.round,ln=Math.floor,an=e=>({x:e,y:e}),sn={left:"right",right:"left",bottom:"top",top:"bottom"},dn={start:"end",end:"start"};function cn(e,t,n){return rn(e,nn(t,n))}function un(e,t){return"function"==typeof e?e(t):e}function fn(e){return e.split("-")[0]}function gn(e){return e.split("-")[1]}function pn(e){return"x"===e?"y":"x"}function hn(e){return"y"===e?"height":"width"}function vn(e){return["top","bottom"].includes(fn(e))?"y":"x"}function yn(e){return pn(vn(e))}function bn(e){return e.replace(/start|end/g,(e=>dn[e]))}function mn(e){return e.replace(/left|right|bottom|top/g,(e=>sn[e]))}function xn(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function wn(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function kn(e,t,n){let{reference:r,floating:o}=e;const i=vn(t),l=yn(t),a=hn(l),s=fn(t),d="y"===i,c=r.x+r.width/2-o.width/2,u=r.y+r.height/2-o.height/2,f=r[a]/2-o[a]/2;let g;switch(s){case"top":g={x:c,y:r.y-o.height};break;case"bottom":g={x:c,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:u};break;case"left":g={x:r.x-o.width,y:u};break;default:g={x:r.x,y:r.y}}switch(gn(t)){case"start":g[l]-=f*(n&&d?-1:1);break;case"end":g[l]+=f*(n&&d?-1:1)}return g}async function $n(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:l,elements:a,strategy:s}=e,{boundary:d="clippingAncestors",rootBoundary:c="viewport",elementContext:u="floating",altBoundary:f=!1,padding:g=0}=un(t,e),p=xn(g),h=a[f?"floating"===u?"reference":"floating":u],v=wn(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(h)))||n?h:h.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(a.floating)),boundary:d,rootBoundary:c,strategy:s})),y="floating"===u?{x:r,y:o,width:l.floating.width,height:l.floating.height}:l.reference,b=await(null==i.getOffsetParent?void 0:i.getOffsetParent(a.floating)),m=await(null==i.isElement?void 0:i.isElement(b))&&await(null==i.getScale?void 0:i.getScale(b))||{x:1,y:1},x=wn(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:b,strategy:s}):y);return{top:(v.top-x.top+p.top)/m.y,bottom:(x.bottom-v.bottom+p.bottom)/m.y,left:(v.left-x.left+p.left)/m.x,right:(x.right-v.right+p.right)/m.x}}function Sn(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Cn(e){return tn.some((t=>e[t]>=0))}function En(e){return Fn(e)?(e.nodeName||"").toLowerCase():"#document"}function qn(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Mn(e){var t;return null==(t=(Fn(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Fn(e){return e instanceof Node||e instanceof qn(e).Node}function Ln(e){return e instanceof Element||e instanceof qn(e).Element}function Dn(e){return e instanceof HTMLElement||e instanceof qn(e).HTMLElement}function Tn(e){return!(typeof ShadowRoot>"u")&&(e instanceof ShadowRoot||e instanceof qn(e).ShadowRoot)}function zn(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Rn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function An(e){return["table","td","th"].includes(En(e))}function On(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch{return!1}}))}function In(e){const t=Pn(),n=Ln(e)?Rn(e):e;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function Pn(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Kn(e){return["html","body","#document"].includes(En(e))}function Rn(e){return qn(e).getComputedStyle(e)}function Bn(e){return Ln(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function jn(e){if("html"===En(e))return e;const t=e.assignedSlot||e.parentNode||Tn(e)&&e.host||Mn(e);return Tn(t)?t.host:t}function Gn(e){const t=jn(e);return Kn(t)?e.ownerDocument?e.ownerDocument.body:e.body:Dn(t)&&zn(t)?t:Gn(t)}function Un(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=Gn(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),l=qn(o);return i?t.concat(l,l.visualViewport||[],zn(o)?o:[],l.frameElement&&n?Un(l.frameElement):[]):t.concat(o,Un(o,[],n))}function Hn(e){const t=Rn(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Dn(e),i=o?e.offsetWidth:n,l=o?e.offsetHeight:r,a=on(n)!==i||on(r)!==l;return a&&(n=i,r=l),{width:n,height:r,$:a}}function Vn(e){return Ln(e)?e:e.contextElement}function Nn(e){const t=Vn(e);if(!Dn(t))return an(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Hn(t);let l=(i?on(n.width):n.width)/r,a=(i?on(n.height):n.height)/o;return(!l||!Number.isFinite(l))&&(l=1),(!a||!Number.isFinite(a))&&(a=1),{x:l,y:a}}var Wn=an(0);function Qn(e){const t=qn(e);return Pn()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Wn}function _n(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=Vn(e);let l=an(1);t&&(r?Ln(r)&&(l=Nn(r)):l=Nn(e));const a=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==qn(e))&&t}(i,n,r)?Qn(i):an(0);let s=(o.left+a.x)/l.x,d=(o.top+a.y)/l.y,c=o.width/l.x,u=o.height/l.y;if(i){const e=qn(i),t=r&&Ln(r)?qn(r):r;let n=e,o=n.frameElement;for(;o&&r&&t!==n;){const e=Nn(o),t=o.getBoundingClientRect(),r=Rn(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,l=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;s*=e.x,d*=e.y,c*=e.x,u*=e.y,s+=i,d+=l,n=qn(o),o=n.frameElement}}return wn({width:c,height:u,x:s,y:d})}function Xn(e){return _n(Mn(e)).left+Bn(e).scrollLeft}function Zn(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=qn(e),r=Mn(e),o=n.visualViewport;let i=r.clientWidth,l=r.clientHeight,a=0,s=0;if(o){i=o.width,l=o.height;const e=Pn();(!e||e&&"fixed"===t)&&(a=o.offsetLeft,s=o.offsetTop)}return{width:i,height:l,x:a,y:s}}(e,n);else if("document"===t)r=function(e){const t=Mn(e),n=Bn(e),r=e.ownerDocument.body,o=rn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=rn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let l=-n.scrollLeft+Xn(e);const a=-n.scrollTop;return"rtl"===Rn(r).direction&&(l+=rn(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:l,y:a}}(Mn(e));else if(Ln(t))r=function(e,t){const n=_n(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=Dn(e)?Nn(e):an(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=Qn(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return wn(r)}function Yn(e,t){const n=jn(e);return!(n===t||!Ln(n)||Kn(n))&&("fixed"===Rn(n).position||Yn(n,t))}function Jn(e,t){const n=t.get(e);if(n)return n;let r=Un(e,[],!1).filter((e=>Ln(e)&&"body"!==En(e))),o=null;const i="fixed"===Rn(e).position;let l=i?jn(e):e;for(;Ln(l)&&!Kn(l);){const t=Rn(l),n=In(l);!n&&"fixed"===t.position&&(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||zn(l)&&!n&&Yn(e,l))?r=r.filter((e=>e!==l)):o=t,l=jn(l)}return t.set(e,r),r}function er(e,t,n){const r=Dn(t),o=Mn(t),i="fixed"===n,l=_n(e,!0,i,t);let a={scrollLeft:0,scrollTop:0};const s=an(0);if(r||!r&&!i)if(("body"!==En(t)||zn(o))&&(a=Bn(t)),r){const e=_n(t,!0,i,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else o&&(s.x=Xn(o));return{x:l.left+a.scrollLeft-s.x,y:l.top+a.scrollTop-s.y,width:l.width,height:l.height}}function tr(e){return"static"===Rn(e).position}function nr(e,t){return Dn(e)&&"fixed"!==Rn(e).position?t?t(e):e.offsetParent:null}function rr(e,t){const n=qn(e);if(On(e))return n;if(!Dn(e)){let t=jn(e);for(;t&&!Kn(t);){if(Ln(t)&&!tr(t))return t;t=jn(t)}return n}let r=nr(e,t);for(;r&&An(r)&&tr(r);)r=nr(r,t);return r&&Kn(r)&&tr(r)&&!In(r)?n:r||function(e){let t=jn(e);for(;Dn(t)&&!Kn(t);){if(In(t))return t;if(On(t))return null;t=jn(t)}return null}(e)||n}var or={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i="fixed"===o,l=Mn(r),a=!!t&&On(t.floating);if(r===l||a&&i)return n;let s={scrollLeft:0,scrollTop:0},d=an(1);const c=an(0),u=Dn(r);if((u||!u&&!i)&&(("body"!==En(r)||zn(l))&&(s=Bn(r)),Dn(r))){const e=_n(r);d=Nn(r),c.x=e.x+r.clientLeft,c.y=e.y+r.clientTop}return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-s.scrollLeft*d.x+c.x,y:n.y*d.y-s.scrollTop*d.y+c.y}},getDocumentElement:Mn,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?On(t)?[]:Jn(t,this._c):[].concat(n),r],l=i[0],a=i.reduce(((e,n)=>{const r=Zn(t,n,o);return e.top=rn(r.top,e.top),e.right=nn(r.right,e.right),e.bottom=nn(r.bottom,e.bottom),e.left=rn(r.left,e.left),e}),Zn(t,l,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:rr,getElementRects:async function(e){const t=this.getOffsetParent||rr,n=this.getDimensions,r=await n(e.floating);return{reference:er(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=Hn(e);return{width:t,height:n}},getScale:Nn,isElement:Ln,isRTL:function(e){return"rtl"===Rn(e).direction}};function ir(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:s=!1}=r,d=Vn(e),c=o||i?[...d?Un(d):[],...Un(t)]:[];c.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const u=d&&a?function(e,t){let n,r=null;const o=Mn(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function l(a,s){void 0===a&&(a=!1),void 0===s&&(s=1),i();const{left:d,top:c,width:u,height:f}=e.getBoundingClientRect();if(a||t(),!u||!f)return;const g={rootMargin:-ln(c)+"px "+-ln(o.clientWidth-(d+u))+"px "+-ln(o.clientHeight-(c+f))+"px "+-ln(d)+"px",threshold:rn(0,nn(1,s))||1};let p=!0;function h(e){const t=e[0].intersectionRatio;if(t!==s){if(!p)return l();t?l(!1,t):n=setTimeout((()=>{l(!1,1e-7)}),1e3)}p=!1}try{r=new IntersectionObserver(h,{...g,root:o.ownerDocument})}catch{r=new IntersectionObserver(h,g)}r.observe(e)}(!0),i}(d,n):null;let f=-1,g=null;l&&(g=new ResizeObserver((e=>{let[r]=e;r&&r.target===d&&g&&(g.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame((()=>{var e;null==(e=g)||e.observe(t)}))),n()})),d&&!s&&g.observe(d),g.observe(t));let p,h=s?_n(e):null;return s&&function t(){const r=_n(e);h&&(r.x!==h.x||r.y!==h.y||r.width!==h.width||r.height!==h.height)&&n(),h=r,p=requestAnimationFrame(t)}(),n(),()=>{var e;c.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==u||u(),null==(e=g)||e.disconnect(),g=null,s&&cancelAnimationFrame(p)}}var lr=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:l,middlewareData:a}=t,s=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),l=fn(n),a=gn(n),s="y"===vn(n),d=["left","top"].includes(l)?-1:1,c=i&&s?-1:1,u=un(t,e);let{mainAxis:f,crossAxis:g,alignmentAxis:p}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&"number"==typeof p&&(g="end"===a?-1*p:p),s?{x:g*c,y:f*d}:{x:f*d,y:g*c}}(t,e);return l===(null==(n=a.offset)?void 0:n.placement)&&null!=(r=a.arrow)&&r.alignmentOffset?{}:{x:o+s.x,y:i+s.y,data:{...s,placement:l}}}}},ar=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:a={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...s}=un(e,t),d={x:n,y:r},c=await $n(t,s),u=vn(fn(o)),f=pn(u);let g=d[f],p=d[u];if(i){const e="y"===f?"bottom":"right";g=cn(g+c["y"===f?"top":"left"],g,g-c[e])}if(l){const e="y"===u?"bottom":"right";p=cn(p+c["y"===u?"top":"left"],p,p-c[e])}const h=a.fn({...t,[f]:g,[u]:p});return{...h,data:{x:h.x-n,y:h.y-r}}}}},sr=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:l,initialPlacement:a,platform:s,elements:d}=t,{mainAxis:c=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:h=!0,...v}=un(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const y=fn(o),b=vn(a),m=fn(a)===a,x=await(null==s.isRTL?void 0:s.isRTL(d.floating)),w=f||(m||!h?[mn(a)]:function(e){const t=mn(e);return[bn(e),t,bn(t)]}(a)),k="none"!==p;!f&&k&&w.push(...function(e,t,n,r){const o=gn(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:l;default:return[]}}(fn(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(bn)))),i}(a,h,p,x));const $=[a,...w],S=await $n(t,v),C=[];let E=(null==(r=i.flip)?void 0:r.overflows)||[];if(c&&C.push(S[y]),u){const e=function(e,t,n){void 0===n&&(n=!1);const r=gn(e),o=yn(e),i=hn(o);let l="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=mn(l)),[l,mn(l)]}(o,l,x);C.push(S[e[0]],S[e[1]])}if(E=[...E,{placement:o,overflows:C}],!C.every((e=>e<=0))){var q,M;const e=((null==(q=i.flip)?void 0:q.index)||0)+1,t=$[e];if(t)return{data:{index:e,overflows:E},reset:{placement:t}};let n=null==(M=E.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:M.placement;if(!n)switch(g){case"bestFit":{var F;const e=null==(F=E.filter((e=>{if(k){const t=vn(e.placement);return t===b||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:F[0];e&&(n=e);break}case"initialPlacement":n=a}if(o!==n)return{reset:{placement:n}}}return{}}}},dr=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:l=()=>{},...a}=un(e,t),s=await $n(t,a),d=fn(n),c=gn(n),u="y"===vn(n),{width:f,height:g}=r.floating;let p,h;"top"===d||"bottom"===d?(p=d,h=c===(await(null==o.isRTL?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(h=d,p="end"===c?"top":"bottom");const v=g-s.top-s.bottom,y=f-s.left-s.right,b=nn(g-s[p],v),m=nn(f-s[h],y),x=!t.middlewareData.shift;let w=b,k=m;if(u?k=c||x?nn(m,y):y:w=c||x?nn(b,v):v,x&&!c){const e=rn(s.left,0),t=rn(s.right,0),n=rn(s.top,0),r=rn(s.bottom,0);u?k=f-2*(0!==e||0!==t?e+t:rn(s.left,s.right)):w=g-2*(0!==n||0!==r?n+r:rn(s.top,s.bottom))}await l({...t,availableWidth:k,availableHeight:w});const $=await o.getDimensions(i.floating);return f!==$.width||g!==$.height?{reset:{rects:!0}}:{}}}},cr=function(e){return void 0===e&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=un(e,t);switch(r){case"referenceHidden":{const e=Sn(await $n(t,{...o,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:Cn(e)}}}case"escaped":{const e=Sn(await $n(t,{...o,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:Cn(e)}}}default:return{}}}}},ur=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:l,elements:a,middlewareData:s}=t,{element:d,padding:c=0}=un(e,t)||{};if(null==d)return{};const u=xn(c),f={x:n,y:r},g=yn(o),p=hn(g),h=await l.getDimensions(d),v="y"===g,y=v?"top":"left",b=v?"bottom":"right",m=v?"clientHeight":"clientWidth",x=i.reference[p]+i.reference[g]-f[g]-i.floating[p],w=f[g]-i.reference[g],k=await(null==l.getOffsetParent?void 0:l.getOffsetParent(d));let $=k?k[m]:0;(!$||!await(null==l.isElement?void 0:l.isElement(k)))&&($=a.floating[m]||i.floating[p]);const S=x/2-w/2,C=$/2-h[p]/2-1,E=nn(u[y],C),q=nn(u[b],C),M=E,F=$-h[p]-q,L=$/2-h[p]/2+S,D=cn(M,L,F),T=!s.arrow&&null!=gn(o)&&L!==D&&i.reference[p]/2-(L<M?E:q)-h[p]/2<0,z=T?L<M?L-M:L-F:0;return{[g]:f[g]+z,data:{[g]:D,centerOffset:L-D-z,...T&&{alignmentOffset:z}},reset:T}}}),fr=(e,t,n)=>{const r=new Map,o={platform:or,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=n,a=i.filter(Boolean),s=await(null==l.isRTL?void 0:l.isRTL(t));let d=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:c,y:u}=kn(d,r,s),f=r,g={},p=0;for(let h=0;h<a.length;h++){const{name:n,fn:i}=a[h],{x:v,y:y,data:b,reset:m}=await i({x:c,y:u,initialPlacement:r,placement:f,strategy:o,middlewareData:g,rects:d,platform:l,elements:{reference:e,floating:t}});c=v??c,u=y??u,g={...g,[n]:{...g[n],...b}},m&&p<=50&&(p++,"object"==typeof m&&(m.placement&&(f=m.placement),m.rects&&(d=!0===m.rects?await l.getElementRects({reference:e,floating:t,strategy:o}):m.rects),({x:c,y:u}=kn(d,f,s))),h=-1)}return{x:c,y:u,placement:f,strategy:o,middlewareData:g}})(e,t,{...o,platform:i})},gr=(0,r.i)();function pr(){const e=(0,r.u)(gr);if(void 0===e)throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");return e}var hr=(0,r.t)('<svg display="block" viewBox="0 0 30 30" style="transform:scale(1.02)"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">'),vr={top:180,right:-90,bottom:0,left:90};function yr(e){const t=pr(),n=He({size:30},e),[o,i]=(0,r.h)(n,["ref","style","size"]),l=()=>t.currentPlacement().split("-")[0],a=function(e){const[t,n]=(0,r.b)();return(0,r.e)((()=>{const t=e();t&&n(function(e){return ke(e).defaultView||window}(t).getComputedStyle(t))})),t}(t.contentRef),s=()=>{var e;return(null==(e=a())?void 0:e.getPropertyValue(`border-${l()}-color`))||"none"},d=()=>{return 2*Number.parseInt((null==(e=a())?void 0:e.getPropertyValue(`border-${l()}-width`))||"0px")*(30/o.size);var e};return(0,r.a)(et,(0,r.f)({as:"div",ref(e){const n=ee(t.setArrowRef,o.ref);"function"==typeof n&&n(e)},"aria-hidden":"true",get style(){return he({position:"absolute","font-size":`${o.size}px`,width:"1em",height:"1em","pointer-events":"none",fill:(null==(e=a())?void 0:e.getPropertyValue("background-color"))||"none",stroke:s(),"stroke-width":d()},o.style);var e}},i,{get children(){const e=hr(),t=e.firstChild;return(0,r.j)((()=>(0,r.k)(t,"transform",`rotate(${vr[l()]} 15 15) translate(0 2)`))),e}}))}function br(e){const{x:t=0,y:n=0,width:r=0,height:o=0}=e??{};if("function"==typeof DOMRect)return new DOMRect(t,n,r,o);const i={x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:n+o,left:t};return{...i,toJSON:()=>i}}function mr(e){return/^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e)}var xr={top:"bottom",right:"left",bottom:"top",left:"right"};var wr=Object.assign((function(e){const t=He({getAnchorRect:e=>null==e?void 0:e.getBoundingClientRect(),placement:"bottom",gutter:0,shift:0,flip:!0,slide:!0,overlap:!1,sameWidth:!1,fitViewport:!1,hideWhenDetached:!1,detachedPadding:0,arrowPadding:4,overflowPadding:8},e),[n,o]=(0,r.b)(),[i,l]=(0,r.b)(),[a,s]=(0,r.b)(t.placement),d=()=>{var e;return function(e,t){return{contextElement:e,getBoundingClientRect:()=>{const n=t(e);return n?br(n):e?e.getBoundingClientRect():br()}}}(null==(e=t.anchorRef)?void 0:e.call(t),t.getAnchorRect)},{direction:c}=Ft();async function u(){var e,r;const o=d(),l=n(),a=i();if(!o||!l)return;const u=((null==a?void 0:a.clientHeight)||0)/2,f="number"==typeof t.gutter?t.gutter+u:t.gutter??u;l.style.setProperty("--kb-popper-content-overflow-padding",`${t.overflowPadding}px`),o.getBoundingClientRect();const g=[lr((e=>{let{placement:n}=e;const r=!!n.split("-")[1];return{mainAxis:f,crossAxis:r?void 0:t.shift,alignmentAxis:t.shift}}))];if(!1!==t.flip){const e="string"==typeof t.flip?t.flip.split(" "):void 0;if(void 0!==e&&!e.every(mr))throw new Error("`flip` expects a spaced-delimited list of placements");g.push(sr({padding:t.overflowPadding,fallbackPlacements:e}))}(t.slide||t.overlap)&&g.push(ar({mainAxis:t.slide,crossAxis:t.overlap,padding:t.overflowPadding})),g.push(dr({padding:t.overflowPadding,apply(e){let{availableWidth:n,availableHeight:r,rects:o}=e;const i=Math.round(o.reference.width);n=Math.floor(n),r=Math.floor(r),l.style.setProperty("--kb-popper-anchor-width",`${i}px`),l.style.setProperty("--kb-popper-content-available-width",`${n}px`),l.style.setProperty("--kb-popper-content-available-height",`${r}px`),t.sameWidth&&(l.style.width=`${i}px`),t.fitViewport&&(l.style.maxWidth=`${n}px`,l.style.maxHeight=`${r}px`)}})),t.hideWhenDetached&&g.push(cr({padding:t.detachedPadding})),a&&g.push(ur({element:a,padding:t.arrowPadding}));const p=await fr(o,l,{placement:t.placement,strategy:"absolute",middleware:g,platform:{...or,isRTL:()=>"rtl"===c()}});if(s(p.placement),null==(e=t.onCurrentPlacementChange)||e.call(t,p.placement),!l)return;l.style.setProperty("--kb-popper-content-transform-origin",function(e,t){const[n,r]=e.split("-"),o=xr[n];return r?"left"===n||"right"===n?`${o} ${"start"===r?"top":"bottom"}`:"start"===r?`${o} ${"rtl"===t?"right":"left"}`:`${o} ${"rtl"===t?"left":"right"}`:`${o} center`}(p.placement,c()));const h=Math.round(p.x),v=Math.round(p.y);let y;if(t.hideWhenDetached&&(y=null!=(r=p.middlewareData.hide)&&r.referenceHidden?"hidden":"visible"),Object.assign(l.style,{top:"0",left:"0",transform:`translate3d(${h}px, ${v}px, 0)`,visibility:y}),a&&p.middlewareData.arrow){const{x:e,y:t}=p.middlewareData.arrow,n=p.placement.split("-")[0];Object.assign(a.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",[n]:"100%"})}}(0,r.e)((()=>{const e=d(),t=n();if(!e||!t)return;const o=ir(e,t,u,{elementResize:"function"==typeof ResizeObserver});(0,r.n)(o)})),(0,r.e)((()=>{var e;const r=n(),o=null==(e=t.contentRef)?void 0:e.call(t);!r||!o||queueMicrotask((()=>{r.style.zIndex=getComputedStyle(o).zIndex}))}));const f={currentPlacement:a,contentRef:()=>{var e;return null==(e=t.contentRef)?void 0:e.call(t)},setPositionerRef:o,setArrowRef:l};return(0,r.a)(gr.Provider,{value:f,get children(){return t.children}})}),{Arrow:yr,Context:gr,usePopperContext:pr,Positioner:function(e){const t=pr(),[n,o]=(0,r.h)(e,["ref","style"]);return(0,r.a)(et,(0,r.f)({as:"div",ref(e){const r=ee(t.setPositionerRef,n.ref);"function"==typeof r&&r(e)},"data-popper-positioner":"",get style(){return he({position:"absolute",top:0,left:0,"min-width":"max-content"},n.style)}},o))}});var kr="interactOutside.pointerDownOutside",$r="interactOutside.focusOutside";var Sr=(0,r.i)();function Cr(e){let t;const n=(0,r.u)(Sr),[o,i]=(0,r.h)(e,["ref","disableOutsidePointerEvents","excludedElements","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","bypassTopMostLayerCheck"]),l=new Set([]);(function(e,t){let n,o=Ue;const i=()=>ke(t()),l=t=>{var n;return null==(n=e.onPointerDownOutside)?void 0:n.call(e,t)},s=t=>{var n;return null==(n=e.onFocusOutside)?void 0:n.call(e,t)},d=t=>{var n;return null==(n=e.onInteractOutside)?void 0:n.call(e,t)},c=n=>{var r;const o=n.target;return!(!(o instanceof HTMLElement&&!o.closest(`[${Ht}]`)&&xe(i(),o))||xe(t(),o)||null!=(r=e.shouldExcludeElement)&&r.call(e,o))},u=e=>{function n(){const n=t(),r=e.target;if(!n||!r||!c(e))return;const o=Fe([l,d]);r.addEventListener(kr,o,{once:!0});const i=new CustomEvent(kr,{bubbles:!1,cancelable:!0,detail:{originalEvent:e,isContextMenu:2===e.button||Le(e)&&0===e.button}});r.dispatchEvent(i)}"touch"===e.pointerType?(i().removeEventListener("click",n),o=n,i().addEventListener("click",n,{once:!0})):n()},f=e=>{const n=t(),r=e.target;if(!n||!r||!c(e))return;const o=Fe([s,d]);r.addEventListener($r,o,{once:!0});const i=new CustomEvent($r,{bubbles:!1,cancelable:!0,detail:{originalEvent:e,isContextMenu:!1}});r.dispatchEvent(i)};(0,r.e)((()=>{a(e.isDisabled)||(n=window.setTimeout((()=>{i().addEventListener("pointerdown",u,!0)}),0),i().addEventListener("focusin",f,!0),(0,r.n)((()=>{window.clearTimeout(n),i().removeEventListener("click",o),i().removeEventListener("pointerdown",u,!0),i().removeEventListener("focusin",f,!0)})))}))})({shouldExcludeElement:e=>{var n;return!!t&&((null==(n=o.excludedElements)?void 0:n.some((t=>xe(t(),e))))||[...l].some((t=>xe(t,e))))},onPointerDownOutside:e=>{var n,r,i;!t||Zt.isBelowPointerBlockingLayer(t)||!o.bypassTopMostLayerCheck&&!Zt.isTopMostLayer(t)||(null==(n=o.onPointerDownOutside)||n.call(o,e),null==(r=o.onInteractOutside)||r.call(o,e),e.defaultPrevented||null==(i=o.onDismiss)||i.call(o))},onFocusOutside:e=>{var t,n,r;null==(t=o.onFocusOutside)||t.call(o,e),null==(n=o.onInteractOutside)||n.call(o,e),e.defaultPrevented||null==(r=o.onDismiss)||r.call(o)}},(()=>t)),function(e){const t=t=>{var n;t.key===Se.Escape&&(null==(n=e.onEscapeKeyDown)||n.call(e,t))};(0,r.e)((()=>{var n;if(a(e.isDisabled))return;const o=(null==(n=e.ownerDocument)?void 0:n.call(e))??ke();o.addEventListener("keydown",t),(0,r.n)((()=>{o.removeEventListener("keydown",t)}))}))}({ownerDocument:()=>ke(t),onEscapeKeyDown:e=>{var n;!t||!Zt.isTopMostLayer(t)||(null==(n=o.onEscapeKeyDown)||n.call(o,e),!e.defaultPrevented&&o.onDismiss&&(e.preventDefault(),o.onDismiss()))}}),(0,r.p)((()=>{if(!t)return;Zt.addLayer({node:t,isPointerBlocking:o.disableOutsidePointerEvents,dismiss:o.onDismiss});const e=null==n?void 0:n.registerNestedLayer(t);Zt.assignPointerEventToLayers(),Zt.disableBodyPointerEvents(t),(0,r.n)((()=>{t&&(Zt.removeLayer(t),null==e||e(),Zt.assignPointerEventToLayers(),Zt.restoreBodyPointerEvents(t))}))})),(0,r.e)((0,r.o)([()=>t,()=>o.disableOutsidePointerEvents],(e=>{let[t,n]=e;if(!t)return;const o=Zt.find(t);o&&o.isPointerBlocking!==n&&(o.isPointerBlocking=n,Zt.assignPointerEventToLayers()),n&&Zt.disableBodyPointerEvents(t),(0,r.n)((()=>{Zt.restoreBodyPointerEvents(t)}))}),{defer:!0}));const s={registerNestedLayer:e=>{l.add(e);const t=null==n?void 0:n.registerNestedLayer(e);return()=>{l.delete(e),null==t||t()}}};return(0,r.a)(Sr.Provider,{value:s,get children(){return(0,r.a)(et,(0,r.f)({as:"div",ref(e){const n=ee((e=>t=e),o.ref);"function"==typeof n&&n(e)}},i))}})}function Er(e){void 0===e&&(e={});const[t,n]=dt({value:()=>a(e.open),defaultValue:()=>!!a(e.defaultOpen),onChange:t=>{var n;return null==(n=e.onOpenChange)?void 0:n.call(e,t)}}),r=()=>{n(!0)},o=()=>{n(!1)};return{isOpen:t,setIsOpen:n,open:r,close:o,toggle:()=>{t()?o():r()}}}var qr={};ut(qr,{Description:()=>ot,ErrorMessage:()=>it,Item:()=>Tr,ItemControl:()=>zr,ItemDescription:()=>Ar,ItemIndicator:()=>Or,ItemInput:()=>Ir,ItemLabel:()=>Pr,Label:()=>Kr,RadioGroup:()=>Br,Root:()=>Rr});var Mr=(0,r.i)();function Fr(){const e=(0,r.u)(Mr);if(void 0===e)throw new Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");return e}var Lr=(0,r.i)();function Dr(){const e=(0,r.u)(Lr);if(void 0===e)throw new Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");return e}function Tr(e){const t=rt(),n=Fr(),o=He({id:`${t.generateId("item")}-${(0,r.l)()}`},e),[i,l]=(0,r.h)(o,["value","disabled","onPointerDown"]),[a,s]=(0,r.b)(),[d,c]=(0,r.b)(),[u,f]=(0,r.b)(),[g,p]=(0,r.b)(),[h,v]=(0,r.b)(!1),y=(0,r.c)((()=>n.isSelectedValue(i.value))),b=(0,r.c)((()=>i.disabled||t.isDisabled()||!1)),m=e=>{Me(e,i.onPointerDown),h()&&e.preventDefault()},x=(0,r.c)((()=>({...t.dataset(),"data-disabled":b()?"":void 0,"data-checked":y()?"":void 0}))),w={value:()=>i.value,dataset:x,isSelected:y,isDisabled:b,inputId:a,labelId:d,descriptionId:u,inputRef:g,select:()=>n.setSelectedValue(i.value),generateId:me((()=>l.id)),registerInput:Ze(s),registerLabel:Ze(c),registerDescription:Ze(f),setIsFocused:v,setInputRef:p};return(0,r.a)(Lr.Provider,{value:w,get children(){return(0,r.a)(et,(0,r.f)({as:"div",role:"group",onPointerDown:m},x,l))}})}function zr(e){const t=Dr(),n=He({id:t.generateId("control")},e),[o,i]=(0,r.h)(n,["onClick","onKeyDown"]);return(0,r.a)(et,(0,r.f)({as:"div",onClick:e=>{var n;Me(e,o.onClick),t.select(),null==(n=t.inputRef())||n.focus()},onKeyDown:e=>{var n;Me(e,o.onKeyDown),e.key===Se.Space&&(t.select(),null==(n=t.inputRef())||n.focus())}},(()=>t.dataset()),i))}function Ar(e){const t=Dr(),n=He({id:t.generateId("description")},e);return(0,r.e)((()=>(0,r.n)(t.registerDescription(n.id)))),(0,r.a)(et,(0,r.f)({as:"div"},(()=>t.dataset()),n))}function Or(e){const t=Dr(),n=He({id:t.generateId("indicator")},e),[o,i]=(0,r.h)(n,["ref","forceMount"]),[l,a]=(0,r.b)(),{present:s}=Ut({show:()=>o.forceMount||t.isSelected(),element:()=>l()??null});return(0,r.a)(r.S,{get when(){return s()},get children(){return(0,r.a)(et,(0,r.f)({as:"div",ref(e){const t=ee(a,o.ref);"function"==typeof t&&t(e)}},(()=>t.dataset()),i))}})}function Ir(e){const t=rt(),n=Fr(),o=Dr(),i=He({id:o.generateId("input")},e),[l,a]=(0,r.h)(i,["ref","style","aria-labelledby","aria-describedby","onChange","onFocus","onBlur"]),[s,d]=(0,r.b)(!1);return(0,r.e)((0,r.o)([()=>o.isSelected(),()=>o.value()],(e=>{if(!e[0]&&e[1]===o.value())return;d(!0);const t=o.inputRef();null==t||t.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),null==t||t.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))}),{defer:!0})),(0,r.e)((()=>(0,r.n)(o.registerInput(a.id)))),(0,r.a)(et,(0,r.f)({as:"input",ref(e){const t=ee(o.setInputRef,l.ref);"function"==typeof t&&t(e)},type:"radio",get name(){return t.name()},get value(){return o.value()},get checked(){return o.isSelected()},get required(){return t.isRequired()},get disabled(){return o.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return he({...Xe},l.style)},get"aria-labelledby"(){return[l["aria-labelledby"],o.labelId(),null!=l["aria-labelledby"]&&null!=a["aria-label"]?a.id:void 0].filter(Boolean).join(" ")||void 0},get"aria-describedby"(){return[l["aria-describedby"],o.descriptionId(),n.ariaDescribedBy()].filter(Boolean).join(" ")||void 0},onChange:e=>{if(Me(e,l.onChange),e.stopPropagation(),!s()){n.setSelectedValue(o.value());e.target.checked=o.isSelected()}d(!1)},onFocus:e=>{Me(e,l.onFocus),o.setIsFocused(!0)},onBlur:e=>{Me(e,l.onBlur),o.setIsFocused(!1)}},(()=>o.dataset()),a))}function Pr(e){const t=Dr(),n=He({id:t.generateId("label")},e);return(0,r.e)((()=>(0,r.n)(t.registerLabel(n.id)))),(0,r.a)(et,(0,r.f)({as:"label",get for(){return t.inputId()}},(()=>t.dataset()),n))}function Kr(e){return(0,r.a)(lt,(0,r.f)({as:"span"},e))}function Rr(e){let t;const n=He({id:`radiogroup-${(0,r.l)()}`,orientation:"vertical"},e),[o,i,l]=(0,r.h)(n,["ref","value","defaultValue","onChange","orientation","aria-labelledby","aria-describedby"],tt),[s,d]=st({value:()=>o.value,defaultValue:()=>o.defaultValue,onChange:e=>{var t;return null==(t=o.onChange)?void 0:t.call(o,e)}}),{formControlContext:c}=function(e){const t=He({id:`form-control-${(0,r.l)()}`},e),[n,o]=(0,r.b)(),[i,l]=(0,r.b)(),[s,d]=(0,r.b)(),[c,u]=(0,r.b)();return{formControlContext:{name:()=>a(t.name)??a(t.id),dataset:(0,r.c)((()=>({"data-valid":"valid"===a(t.validationState)?"":void 0,"data-invalid":"invalid"===a(t.validationState)?"":void 0,"data-required":a(t.required)?"":void 0,"data-disabled":a(t.disabled)?"":void 0,"data-readonly":a(t.readOnly)?"":void 0}))),validationState:()=>a(t.validationState),isRequired:()=>a(t.required),isDisabled:()=>a(t.disabled),isReadOnly:()=>a(t.readOnly),labelId:n,fieldId:i,descriptionId:s,errorMessageId:c,getAriaLabelledBy:(e,t,r)=>{const o=null!=r||null!=n();return[r,n(),o&&null!=t?e:void 0].filter(Boolean).join(" ")||void 0},getAriaDescribedBy:e=>[s(),c(),e].filter(Boolean).join(" ")||void 0,generateId:me((()=>a(t.id))),registerLabel:Ze(o),registerField:Ze(l),registerDescription:Ze(d),registerErrorMessage:Ze(u)}}}(i);at((()=>t),(()=>d(o.defaultValue??"")));const u=()=>c.getAriaDescribedBy(o["aria-describedby"]),f=e=>e===s(),g={ariaDescribedBy:u,isSelectedValue:f,setSelectedValue:e=>{if(!c.isReadOnly()&&!c.isDisabled()&&(d(e),t))for(const n of t.querySelectorAll("[type='radio']")){const e=n;e.checked=f(e.value)}}};return(0,r.a)(nt.Provider,{value:c,get children(){return(0,r.a)(Mr.Provider,{value:g,get children(){return(0,r.a)(et,(0,r.f)({as:"div",ref(e){const n=ee((e=>t=e),o.ref);"function"==typeof n&&n(e)},role:"radiogroup",get id(){return a(i.id)},get"aria-invalid"(){return"invalid"===c.validationState()||void 0},get"aria-required"(){return c.isRequired()||void 0},get"aria-disabled"(){return c.isDisabled()||void 0},get"aria-readonly"(){return c.isReadOnly()||void 0},get"aria-orientation"(){return o.orientation},get"aria-labelledby"(){return c.getAriaLabelledBy(a(i.id),l["aria-label"],o["aria-labelledby"])},get"aria-describedby"(){return u()}},(()=>c.dataset()),l))}})}})}var Br=Object.assign(Rr,{Description:ot,ErrorMessage:it,Item:Tr,ItemControl:zr,ItemDescription:Ar,ItemIndicator:Or,ItemInput:Ir,ItemLabel:Pr,Label:Kr}),jr=class{constructor(e,t,n){i(this,"collection"),i(this,"ref"),i(this,"collator"),this.collection=e,this.ref=t,this.collator=n}getKeyBelow(e){let t=this.collection().getKeyAfter(e);for(;null!=t;){const e=this.collection().getItem(t);if(e&&"item"===e.type&&!e.disabled)return t;t=this.collection().getKeyAfter(t)}}getKeyAbove(e){let t=this.collection().getKeyBefore(e);for(;null!=t;){const e=this.collection().getItem(t);if(e&&"item"===e.type&&!e.disabled)return t;t=this.collection().getKeyBefore(t)}}getFirstKey(){let e=this.collection().getFirstKey();for(;null!=e;){const t=this.collection().getItem(e);if(t&&"item"===t.type&&!t.disabled)return e;e=this.collection().getKeyAfter(e)}}getLastKey(){let e=this.collection().getLastKey();for(;null!=e;){const t=this.collection().getItem(e);if(t&&"item"===t.type&&!t.disabled)return e;e=this.collection().getKeyBefore(e)}}getItem(e){var t,n;return(null==(n=null==(t=this.ref)?void 0:t.call(this))?void 0:n.querySelector(`[data-key="${e}"]`))??null}getKeyPageAbove(e){var t;const n=null==(t=this.ref)?void 0:t.call(this);let r=this.getItem(e);if(!n||!r)return;const o=Math.max(0,r.offsetTop+r.offsetHeight-n.offsetHeight);let i=e;for(;i&&r&&r.offsetTop>o;)i=this.getKeyAbove(i),r=null!=i?this.getItem(i):null;return i}getKeyPageBelow(e){var t;const n=null==(t=this.ref)?void 0:t.call(this);let r=this.getItem(e);if(!n||!r)return;const o=Math.min(n.scrollHeight,r.offsetTop-r.offsetHeight+n.offsetHeight);let i=e;for(;i&&r&&r.offsetTop<o;)i=this.getKeyBelow(i),r=null!=i?this.getItem(i):null;return i}getKeyForSearch(e,t){var n;const r=null==(n=this.collator)?void 0:n.call(this);if(!r)return;let o=null!=t?this.getKeyBelow(t):this.getFirstKey();for(;null!=o;){const t=this.collection().getItem(o);if(t){const n=t.textValue.slice(0,e.length);if(t.textValue&&0===r.compare(n,e))return o}o=this.getKeyBelow(o)}}};function Gr(e,t,n){const o=function(e){const{locale:t}=Ft(),n=(0,r.c)((()=>t()+Object.entries(e).sort(((e,t)=>e[0]<t[0]?-1:1)).join()));return(0,r.c)((()=>{const r=n();let o;return Lt.has(r)&&(o=Lt.get(r)),o||(o=new Intl.Collator(t(),e),Lt.set(r,o)),o}))}({usage:"search",sensitivity:"base"});return It({selectionManager:()=>a(e.selectionManager),keyboardDelegate:(0,r.c)((()=>a(e.keyboardDelegate)||new jr(e.collection,t,o))),autoFocus:()=>a(e.autoFocus),deferAutoFocus:()=>a(e.deferAutoFocus),shouldFocusWrap:()=>a(e.shouldFocusWrap),disallowEmptySelection:()=>a(e.disallowEmptySelection),selectOnFocus:()=>a(e.selectOnFocus),disallowTypeAhead:()=>a(e.disallowTypeAhead),shouldUseVirtualFocus:()=>a(e.shouldUseVirtualFocus),allowsTabNavigation:()=>a(e.allowsTabNavigation),isVirtualized:()=>a(e.isVirtualized),scrollToKey:t=>{var n;return null==(n=a(e.scrollToKey))?void 0:n(t)},orientation:()=>a(e.orientation)},t)}var Ur="focusScope.autoFocusOnMount",Hr="focusScope.autoFocusOnUnmount",Vr={bubbles:!1,cancelable:!0},Nr={stack:[],active(){return this.stack[0]},add(e){var t;e!==this.active()&&(null==(t=this.active())||t.pause()),this.stack=ve(this.stack,e),this.stack.unshift(e)},remove(e){var t;this.stack=ve(this.stack,e),null==(t=this.active())||t.resume()}};function Wr(e,t){const[n,o]=(0,r.b)(!1),i={pause(){o(!0)},resume(){o(!1)}};let l=null;const s=t=>{var n;return null==(n=e.onMountAutoFocus)?void 0:n.call(e,t)},d=t=>{var n;return null==(n=e.onUnmountAutoFocus)?void 0:n.call(e,t)},c=()=>ke(t()),u=()=>{const e=c().createElement("span");return e.setAttribute("data-focus-trap",""),e.tabIndex=0,Object.assign(e.style,Xe),e},f=()=>{const e=t();return e?Pe(e,!0).filter((e=>!e.hasAttribute("data-focus-trap"))):[]},g=()=>{const e=f();return e.length>0?e[0]:null};(0,r.e)((()=>{const e=t();if(!e)return;Nr.add(i);const n=we(e);if(!xe(e,n)){const t=new CustomEvent(Ur,Vr);e.addEventListener(Ur,s),e.dispatchEvent(t),t.defaultPrevented||setTimeout((()=>{De(g()),we(e)===n&&De(e)}),0)}(0,r.n)((()=>{e.removeEventListener(Ur,s),setTimeout((()=>{const r=new CustomEvent(Hr,Vr);(()=>{const e=t();if(!e)return!1;const n=we(e);return!(!n||xe(e,n))&&Re(n)})()&&r.preventDefault(),e.addEventListener(Hr,d),e.dispatchEvent(r),r.defaultPrevented||De(n??c().body),e.removeEventListener(Hr,d),Nr.remove(i)}),0)}))})),(0,r.e)((()=>{const o=t();if(!o||!a(e.trapFocus)||n())return;const i=e=>{const t=e.target;null!=t&&t.closest(`[${Ht}]`)||(xe(o,t)?l=t:De(l))},s=e=>{const t=e.relatedTarget??we(o);null!=t&&t.closest(`[${Ht}]`)||xe(o,t)||De(l)};c().addEventListener("focusin",i),c().addEventListener("focusout",s),(0,r.n)((()=>{c().removeEventListener("focusin",i),c().removeEventListener("focusout",s)}))})),(0,r.e)((()=>{const o=t();if(!o||!a(e.trapFocus)||n())return;const i=u();o.insertAdjacentElement("afterbegin",i);const l=u();function s(e){const t=g(),n=(()=>{const e=f();return e.length>0?e[e.length-1]:null})();e.relatedTarget===t?De(n):De(t)}o.insertAdjacentElement("beforeend",l),i.addEventListener("focusin",s),l.addEventListener("focusin",s);const d=new MutationObserver((e=>{for(const t of e)t.previousSibling===l&&(l.remove(),o.insertAdjacentElement("beforeend",l)),t.nextSibling===i&&(i.remove(),o.insertAdjacentElement("afterbegin",i))}));d.observe(o,{childList:!0,subtree:!1}),(0,r.n)((()=>{i.removeEventListener("focusin",s),l.removeEventListener("focusin",s),i.remove(),l.remove(),d.disconnect()}))}))}var Qr="data-live-announcer";function _r(e){(0,r.e)((()=>{a(e.isDisabled)||(0,r.n)(function(e,t){void 0===t&&(t=document.body);const n=new Set(e),r=new Set,o=e=>{for(const r of e.querySelectorAll(`[${Qr}], [${Ht}]`))n.add(r);const t=e=>{if(n.has(e)||e.parentElement&&r.has(e.parentElement)&&"row"!==e.parentElement.getAttribute("role"))return NodeFilter.FILTER_REJECT;for(const t of n)if(e.contains(t))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t}),l=t(e);if(l===NodeFilter.FILTER_ACCEPT&&i(e),l!==NodeFilter.FILTER_REJECT){let e=o.nextNode();for(;null!=e;)i(e),e=o.nextNode()}},i=e=>{const t=Xr.get(e)??0;"true"===e.getAttribute("aria-hidden")&&0===t||(0===t&&e.setAttribute("aria-hidden","true"),r.add(e),Xr.set(e,t+1))};Zr.length&&Zr[Zr.length-1].disconnect(),o(t);const l=new MutationObserver((e=>{for(const t of e)if("childList"===t.type&&0!==t.addedNodes.length&&![...n,...r].some((e=>e.contains(t.target)))){for(const e of t.removedNodes)e instanceof Element&&(n.delete(e),r.delete(e));for(const e of t.addedNodes)!(e instanceof HTMLElement||e instanceof SVGElement)||"true"!==e.dataset.liveAnnouncer&&"true"!==e.dataset.reactAriaTopLayer?e instanceof Element&&o(e):n.add(e)}}));l.observe(t,{childList:!0,subtree:!0});const a={observe(){l.observe(t,{childList:!0,subtree:!0})},disconnect(){l.disconnect()}};return Zr.push(a),()=>{l.disconnect();for(const e of r){const t=Xr.get(e);if(null==t)return;1===t?(e.removeAttribute("aria-hidden"),Xr.delete(e)):Xr.set(e,t-1)}a===Zr[Zr.length-1]?(Zr.pop(),Zr.length&&Zr[Zr.length-1].observe()):Zr.splice(Zr.indexOf(a),1)}}(a(e.targets),a(e.root)))}))}var Xr=new WeakMap,Zr=[];var Yr=new Map,Jr=e=>{(0,r.e)((()=>{const t=jt(e.style)??{},n=jt(e.properties)??[],o={};for(const r in t)o[r]=e.element.style[r];const i=Yr.get(e.key);i?i.activeCount++:Yr.set(e.key,{activeCount:1,originalStyles:o,properties:n.map((e=>e.key))}),Object.assign(e.element.style,e.style);for(const r of n)e.element.style.setProperty(r.key,r.value);(0,r.n)((()=>{var t;const n=Yr.get(e.key);if(n){if(1!==n.activeCount)return void n.activeCount--;Yr.delete(e.key);for(const[t,r]of Object.entries(n.originalStyles))e.element.style[t]=r;for(const t of n.properties)e.element.style.removeProperty(t);0===e.element.style.length&&e.element.removeAttribute("style"),null==(t=e.cleanup)||t.call(e)}}))}))},eo=(e,t)=>{switch(t){case"x":return[e.clientWidth,e.scrollLeft,e.scrollWidth];case"y":return[e.clientHeight,e.scrollTop,e.scrollHeight]}},to=(e,t)=>{const n=getComputedStyle(e),r="x"===t?n.overflowX:n.overflowY;return"auto"===r||"scroll"===r||"HTML"===e.tagName&&"visible"===r},[no,ro]=(0,r.b)([]),oo=e=>[e.deltaX,e.deltaY],io=e=>e.changedTouches[0]?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0],lo=(e,t,n,r)=>{const o=null!==r&&ao(r,e),[i,l]=((e,t,n)=>{const r="x"===t&&"rtl"===window.getComputedStyle(e).direction?-1:1;let o=e,i=0,l=0,a=!1;do{const[e,s,d]=eo(o,t),c=d-e-r*s;(0!==s||0!==c)&&to(o,t)&&(i+=c,l+=s),o===(n??document.documentElement)?a=!0:o=o._$host??o.parentElement}while(o&&!a);return[i,l]})(e,t,o?r:void 0);return!(n>0&&Math.abs(i)<=1||n<0&&Math.abs(l)<1)},ao=(e,t)=>{if(e.contains(t))return!0;let n=t;for(;n;){if(n===e)return!0;n=n._$host??n.parentElement}return!1},so=e=>{const t=(0,r.f)({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:"padding",restoreScrollPosition:!0,allowPinchZoom:!1},e),n=(0,r.l)();let o=[0,0],i=null,l=null;(0,r.e)((()=>{jt(t.enabled)&&(ro((e=>[...e,n])),(0,r.n)((()=>{ro((e=>e.filter((e=>e!==n))))})))})),(0,r.e)((()=>{if(!jt(t.enabled)||!jt(t.hideScrollbar))return;const{body:e}=document,n=window.innerWidth-e.offsetWidth;if(jt(t.preventScrollbarShift)){const r={overflow:"hidden"},o=[];n>0&&("padding"===jt(t.preventScrollbarShiftMode)?r.paddingRight=`calc(${window.getComputedStyle(e).paddingRight} + ${n}px)`:r.marginRight=`calc(${window.getComputedStyle(e).marginRight} + ${n}px)`,o.push({key:"--scrollbar-width",value:`${n}px`}));const i=window.scrollY,l=window.scrollX;Jr({key:"prevent-scroll",element:e,style:r,properties:o,cleanup:()=>{jt(t.restoreScrollPosition)&&n>0&&window.scrollTo(l,i)}})}else Jr({key:"prevent-scroll",element:e,style:{overflow:"hidden"}})})),(0,r.e)((()=>{!(e=>no().indexOf(e)===no().length-1)(n)||!jt(t.enabled)||(document.addEventListener("wheel",s,{passive:!1}),document.addEventListener("touchstart",a,{passive:!1}),document.addEventListener("touchmove",d,{passive:!1}),(0,r.n)((()=>{document.removeEventListener("wheel",s),document.removeEventListener("touchstart",a),document.removeEventListener("touchmove",d)})))}));const a=e=>{o=io(e),i=null,l=null},s=e=>{const n=e.target,r=jt(t.element),o=oo(e),i=Math.abs(o[0])>Math.abs(o[1])?"x":"y",l="x"===i?o[0]:o[1],a=lo(n,i,l,r);let s;s=!r||!ao(r,n)||!a,s&&e.cancelable&&e.preventDefault()},d=e=>{const n=jt(t.element),r=e.target;let a;if(2===e.touches.length)a=!jt(t.allowPinchZoom);else{if(null==i||null===l){const t=io(e).map(((e,t)=>o[t]-e)),n=Math.abs(t[0])>Math.abs(t[1])?"x":"y";i=n,l="x"===n?t[0]:t[1]}if("range"===r.type)a=!1;else{const e=lo(r,i,l,n);a=!n||!ao(n,r)||!e}}a&&e.cancelable&&e.preventDefault()}},co=so,uo=(0,r.i)();function fo(){return(0,r.u)(uo)}function go(){const e=fo();if(void 0===e)throw new Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");return e}var po=(0,r.i)();function ho(){const e=(0,r.u)(po);if(void 0===e)throw new Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");return e}var vo=(0,r.i)();function yo(){const e=(0,r.u)(vo);if(void 0===e)throw new Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");return e}function bo(e){let t;const n=yo(),o=go(),i=He({id:n.generateId(`item-${(0,r.l)()}`)},e),[l,a]=(0,r.h)(i,["ref","textValue","disabled","closeOnSelect","checked","indeterminate","onSelect","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),[s,d]=(0,r.b)(),[c,u]=(0,r.b)(),[f,g]=(0,r.b)(),p=()=>o.listState().selectionManager(),h=()=>a.id,v=()=>{var e;null==(e=l.onSelect)||e.call(l),l.closeOnSelect&&setTimeout((()=>{o.close(!0)}))};bt({getItem:()=>{var e;return{ref:()=>t,type:"item",key:h(),textValue:l.textValue??(null==(e=f())?void 0:e.textContent)??(null==t?void 0:t.textContent)??"",disabled:l.disabled??!1}}});const y=Pt({key:h,selectionManager:p,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>l.disabled},(()=>t)),b=e=>{Me(e,l.onPointerMove),"mouse"===e.pointerType&&(l.disabled?o.onItemLeave(e):(o.onItemEnter(e),e.defaultPrevented||(De(e.currentTarget),o.listState().selectionManager().setFocused(!0),o.listState().selectionManager().setFocusedKey(h()))))},m=e=>{Me(e,l.onPointerLeave),"mouse"===e.pointerType&&o.onItemLeave(e)},x=e=>{Me(e,l.onPointerUp),!l.disabled&&0===e.button&&v()},w=e=>{if(Me(e,l.onKeyDown),!e.repeat&&!l.disabled)switch(e.key){case"Enter":case" ":v()}},k=(0,r.c)((()=>l.indeterminate?"mixed":null!=l.checked?l.checked:void 0)),$=(0,r.c)((()=>({"data-indeterminate":l.indeterminate?"":void 0,"data-checked":l.checked&&!l.indeterminate?"":void 0,"data-disabled":l.disabled?"":void 0,"data-highlighted":p().focusedKey()===h()?"":void 0}))),S={isChecked:()=>l.checked,dataset:$,setLabelRef:g,generateId:me((()=>a.id)),registerLabel:Ze(d),registerDescription:Ze(u)};return(0,r.a)(po.Provider,{value:S,get children(){return(0,r.a)(et,(0,r.f)({as:"div",ref(e){const n=ee((e=>t=e),l.ref);"function"==typeof n&&n(e)},get tabIndex(){return y.tabIndex()},get"aria-checked"(){return k()},get"aria-disabled"(){return l.disabled},get"aria-labelledby"(){return s()},get"aria-describedby"(){return c()},get"data-key"(){return y.dataKey()},get onPointerDown(){return Fe([l.onPointerDown,y.onPointerDown])},get onPointerUp(){return Fe([x,y.onPointerUp])},get onClick(){return Fe([l.onClick,y.onClick])},get onKeyDown(){return Fe([w,y.onKeyDown])},get onMouseDown(){return Fe([l.onMouseDown,y.onMouseDown])},get onFocus(){return Fe([l.onFocus,y.onFocus])},onPointerMove:b,onPointerLeave:m},$,a))}})}function mo(e){const t=He({closeOnSelect:!1},e),[n,o]=(0,r.h)(t,["checked","defaultChecked","onChange","onSelect"]),i=function(e){void 0===e&&(e={});const[t,n]=dt({value:()=>a(e.isSelected),defaultValue:()=>!!a(e.defaultIsSelected),onChange:t=>{var n;return null==(n=e.onSelectedChange)?void 0:n.call(e,t)}});return{isSelected:t,setIsSelected:t=>{!a(e.isReadOnly)&&!a(e.isDisabled)&&n(t)},toggle:()=>{!a(e.isReadOnly)&&!a(e.isDisabled)&&n(!t())}}}({isSelected:()=>n.checked,defaultIsSelected:()=>n.defaultChecked,onSelectedChange:e=>{var t;return null==(t=n.onChange)?void 0:t.call(n,e)},isDisabled:()=>o.disabled});return(0,r.a)(bo,(0,r.f)({role:"menuitemcheckbox",get checked(){return i.isSelected()},onSelect:()=>{var e;null==(e=n.onSelect)||e.call(n),i.toggle()}},o))}var xo=(0,r.i)();function wo(){return(0,r.u)(xo)}var ko={next:(e,t)=>"ltr"===e?"horizontal"===t?"ArrowRight":"ArrowDown":"horizontal"===t?"ArrowLeft":"ArrowUp",previous:(e,t)=>ko.next("ltr"===e?"rtl":"ltr",t)},$o=e=>"horizontal"===e?"ArrowDown":"ArrowRight",So=e=>"horizontal"===e?"ArrowUp":"ArrowLeft";function Co(e){const t=yo(),n=go(),o=wo(),{direction:i}=Ft(),l=He({id:t.generateId("trigger")},e),[a,s]=(0,r.h)(l,["ref","id","disabled","onPointerDown","onClick","onKeyDown","onMouseOver","onFocus"]);let d=()=>t.value();void 0!==o&&(d=()=>t.value()??a.id,void 0===o.lastValue()&&o.setLastValue(d));const c=Ye((()=>n.triggerRef()),(()=>"button")),u=(0,r.c)((()=>{var e;return"a"===c()&&null!=(null==(e=n.triggerRef())?void 0:e.getAttribute("href"))}));(0,r.e)((0,r.o)((()=>null==o?void 0:o.value()),(e=>{var t;u()&&e===d()&&(null==(t=n.triggerRef())||t.focus())})));const f=()=>{void 0!==o?n.isOpen()?o.value()===d()&&o.closeMenu():(o.autoFocusMenu()||o.setAutoFocusMenu(!0),n.open(!1)):n.toggle(!0)};return(0,r.e)((()=>(0,r.n)(n.registerTriggerId(a.id)))),(0,r.a)(Jt,(0,r.f)({ref(e){const t=ee(n.setTriggerRef,a.ref);"function"==typeof t&&t(e)},get"data-kb-menu-value-trigger"(){return t.value()},get id(){return a.id},get disabled(){return a.disabled},"aria-haspopup":"true",get"aria-expanded"(){return n.isOpen()},get"aria-controls"(){return(0,r.c)((()=>!!n.isOpen()))()?n.contentId():void 0},get"data-highlighted"(){return void 0!==d()&&(null==o?void 0:o.value())===d()||void 0},get tabIndex(){return void 0!==o?o.value()===d()||o.lastValue()===d()?0:-1:void 0},onPointerDown:e=>{Me(e,a.onPointerDown),e.currentTarget.dataset.pointerType=e.pointerType,!a.disabled&&"touch"!==e.pointerType&&0===e.button&&f()},onMouseOver:e=>{var t;Me(e,a.onMouseOver),"touch"!==(null==(t=n.triggerRef())?void 0:t.dataset.pointerType)&&!a.disabled&&void 0!==o&&void 0!==o.value()&&o.setValue(d)},onClick:e=>{Me(e,a.onClick),a.disabled||"touch"===e.currentTarget.dataset.pointerType&&f()},onKeyDown:e=>{if(Me(e,a.onKeyDown),!a.disabled){if(u())switch(e.key){case"Enter":case" ":return}switch(e.key){case"Enter":case" ":case $o(t.orientation()):e.stopPropagation(),e.preventDefault(),function(e){var t,n;if(document.contains(e)){const r=document.scrollingElement||document.documentElement;if("hidden"===window.getComputedStyle(r).overflow){let t=je(e);for(;e&&t&&e!==r&&t!==r;)Qe(t,e),t=je(e=t)}else{const{left:r,top:o}=e.getBoundingClientRect();null==(t=null==e?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"});const{left:i,top:l}=e.getBoundingClientRect();(Math.abs(r-i)>1||Math.abs(o-l)>1)&&(null==(n=e.scrollIntoView)||n.call(e,{block:"nearest"}))}}}(e.currentTarget),n.open("first"),null==o||o.setAutoFocusMenu(!0),null==o||o.setValue(d);break;case So(t.orientation()):e.stopPropagation(),e.preventDefault(),n.open("last");break;case ko.next(i(),t.orientation()):if(void 0===o)break;e.stopPropagation(),e.preventDefault(),o.nextMenu();break;case ko.previous(i(),t.orientation()):if(void 0===o)break;e.stopPropagation(),e.preventDefault(),o.previousMenu()}}},onFocus:e=>{Me(e,a.onFocus),void 0!==o&&"touch"!==e.currentTarget.dataset.pointerType&&o.setValue(d)},role:void 0!==o?"menuitem":void 0},(()=>n.dataset()),s))}var Eo=(0,r.i)();function qo(){return(0,r.u)(Eo)}function Mo(e){let t;const n=yo(),o=go(),i=wo(),l=qo(),{direction:a}=Ft(),s=He({id:n.generateId(`content-${(0,r.l)()}`)},e),[d,c]=(0,r.h)(s,["ref","id","style","onOpenAutoFocus","onCloseAutoFocus","onEscapeKeyDown","onFocusOutside","onPointerEnter","onPointerMove","onKeyDown","onMouseDown","onFocusIn","onFocusOut"]);let u=0;const f=()=>null==o.parentMenuContext()&&void 0===i&&n.isModal(),g=Gr({selectionManager:o.listState().selectionManager,collection:o.listState().collection,autoFocus:o.autoFocus,deferAutoFocus:!0,shouldFocusWrap:!0,disallowTypeAhead:()=>!o.listState().selectionManager().isFocused(),orientation:()=>"horizontal"===n.orientation()?"vertical":"horizontal"},(()=>t));Wr({trapFocus:()=>f()&&o.isOpen(),onMountAutoFocus:e=>{var t;void 0===i&&(null==(t=d.onOpenAutoFocus)||t.call(d,e))},onUnmountAutoFocus:d.onCloseAutoFocus},(()=>t));const p=e=>{var t;null==(t=d.onEscapeKeyDown)||t.call(d,e),null==i||i.setAutoFocusMenu(!1),o.close(!0)},h=e=>{var t;null==(t=d.onFocusOutside)||t.call(d,e),n.isModal()&&e.preventDefault()};(0,r.e)((()=>(0,r.n)(o.registerContentId(d.id))));const v={ref:ee((e=>{o.setContentRef(e),t=e}),d.ref),role:"menu",get id(){return d.id},get tabIndex(){return g.tabIndex()},get"aria-labelledby"(){return o.triggerId()},onKeyDown:Fe([d.onKeyDown,g.onKeyDown,e=>{if(xe(e.currentTarget,e.target)&&("Tab"===e.key&&o.isOpen()&&e.preventDefault(),void 0!==i&&"true"!==e.currentTarget.getAttribute("aria-haspopup")))switch(e.key){case ko.next(a(),n.orientation()):e.stopPropagation(),e.preventDefault(),o.close(!0),i.setAutoFocusMenu(!0),i.nextMenu();break;case ko.previous(a(),n.orientation()):if(e.currentTarget.hasAttribute("data-closed"))break;e.stopPropagation(),e.preventDefault(),o.close(!0),i.setAutoFocusMenu(!0),i.previousMenu()}}]),onMouseDown:Fe([d.onMouseDown,g.onMouseDown]),onFocusIn:Fe([d.onFocusIn,g.onFocusIn]),onFocusOut:Fe([d.onFocusOut,g.onFocusOut]),onPointerEnter:e=>{var t,n;Me(e,d.onPointerEnter),o.isOpen()&&(null==(t=o.parentMenuContext())||t.listState().selectionManager().setFocused(!1),null==(n=o.parentMenuContext())||n.listState().selectionManager().setFocusedKey(void 0))},onPointerMove:e=>{if(Me(e,d.onPointerMove),"mouse"!==e.pointerType)return;const t=e.target,n=u!==e.clientX;xe(e.currentTarget,t)&&n&&(o.setPointerDir(e.clientX>u?"right":"left"),u=e.clientX)},get"data-orientation"(){return n.orientation()}};return(0,r.a)(r.S,{get when(){return o.contentPresent()},get children(){return(0,r.a)(r.S,{get when(){return void 0===l||null!=o.parentMenuContext()},get fallback(){return(0,r.a)(et,(0,r.f)({as:"div"},(()=>o.dataset()),v,c))},get children(){return(0,r.a)(wr.Positioner,{get children(){return(0,r.a)(Cr,(0,r.f)({get disableOutsidePointerEvents(){return(0,r.c)((()=>!!f()))()&&o.isOpen()},get excludedElements(){return[o.triggerRef]},bypassTopMostLayerCheck:!0,get style(){return he({"--kb-menu-content-transform-origin":"var(--kb-popper-content-transform-origin)",position:"relative"},d.style)},onEscapeKeyDown:p,onFocusOutside:h,get onDismiss(){return o.close}},(()=>o.dataset()),v,c))}})}})}})}function Fo(e){let t;const n=yo(),o=go(),[i,l]=(0,r.h)(e,["ref"]);return co({element:()=>t??null,enabled:()=>o.contentPresent()&&n.preventScroll()}),(0,r.a)(Mo,(0,r.f)({ref(e){const n=ee((e=>{t=e}),i.ref);"function"==typeof n&&n(e)}},l))}var Lo=(0,r.i)();function Do(e){const t=He({id:yo().generateId(`group-${(0,r.l)()}`)},e),[n,o]=(0,r.b)(),i={generateId:me((()=>t.id)),registerLabelId:Ze(o)};return(0,r.a)(Lo.Provider,{value:i,get children(){return(0,r.a)(et,(0,r.f)({as:"div",role:"group",get"aria-labelledby"(){return n()}},t))}})}function To(e){const t=function(){const e=(0,r.u)(Lo);if(void 0===e)throw new Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");return e}(),n=He({id:t.generateId("label")},e),[o,i]=(0,r.h)(n,["id"]);return(0,r.e)((()=>(0,r.n)(t.registerLabelId(o.id)))),(0,r.a)(et,(0,r.f)({as:"span",get id(){return o.id},"aria-hidden":"true"},i))}function zo(e){const t=go(),n=He({children:"\u25bc"},e);return(0,r.a)(et,(0,r.f)({as:"span","aria-hidden":"true"},(()=>t.dataset()),n))}function Ao(e){return(0,r.a)(bo,(0,r.f)({role:"menuitem",closeOnSelect:!0},e))}function Oo(e){const t=ho(),n=He({id:t.generateId("description")},e),[o,i]=(0,r.h)(n,["id"]);return(0,r.e)((()=>(0,r.n)(t.registerDescription(o.id)))),(0,r.a)(et,(0,r.f)({as:"div",get id(){return o.id}},(()=>t.dataset()),i))}function Io(e){const t=ho(),n=He({id:t.generateId("indicator")},e),[o,i]=(0,r.h)(n,["forceMount"]);return(0,r.a)(r.S,{get when(){return o.forceMount||t.isChecked()},get children(){return(0,r.a)(et,(0,r.f)({as:"div"},(()=>t.dataset()),i))}})}function Po(e){const t=ho(),n=He({id:t.generateId("label")},e),[o,i]=(0,r.h)(n,["ref","id"]);return(0,r.e)((()=>(0,r.n)(t.registerLabel(o.id)))),(0,r.a)(et,(0,r.f)({as:"div",ref(e){const n=ee(t.setLabelRef,o.ref);"function"==typeof n&&n(e)},get id(){return o.id}},(()=>t.dataset()),i))}function Ko(e){const t=go();return(0,r.a)(r.S,{get when(){return t.contentPresent()},get children(){return(0,r.a)(r.P,e)}})}var Ro=(0,r.i)();function Bo(e){const t=He({id:yo().generateId(`radiogroup-${(0,r.l)()}`)},e),[n,o]=(0,r.h)(t,["value","defaultValue","onChange","disabled"]),[i,l]=st({value:()=>n.value,defaultValue:()=>n.defaultValue,onChange:e=>{var t;return null==(t=n.onChange)?void 0:t.call(n,e)}}),a={isDisabled:()=>n.disabled,isSelectedValue:e=>e===i(),setSelectedValue:l};return(0,r.a)(Ro.Provider,{value:a,get children(){return(0,r.a)(Do,o)}})}function jo(e){const t=function(){const e=(0,r.u)(Ro);if(void 0===e)throw new Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");return e}(),n=He({closeOnSelect:!1},e),[o,i]=(0,r.h)(n,["value","onSelect"]);return(0,r.a)(bo,(0,r.f)({role:"menuitemradio",get checked(){return t.isSelectedValue(o.value)},onSelect:()=>{var e;null==(e=o.onSelect)||e.call(o),t.setSelectedValue(o.value)}},i))}function Go(e,t,n){const r=e.split("-")[0],o=n.getBoundingClientRect(),i=[],l=t.clientX,a=t.clientY;switch(r){case"top":i.push([l,a+5]),i.push([o.left,o.bottom]),i.push([o.left,o.top]),i.push([o.right,o.top]),i.push([o.right,o.bottom]);break;case"right":i.push([l-5,a]),i.push([o.left,o.top]),i.push([o.right,o.top]),i.push([o.right,o.bottom]),i.push([o.left,o.bottom]);break;case"bottom":i.push([l,a-5]),i.push([o.right,o.top]),i.push([o.right,o.bottom]),i.push([o.left,o.bottom]),i.push([o.left,o.top]);break;case"left":i.push([l+5,a]),i.push([o.right,o.bottom]),i.push([o.left,o.bottom]),i.push([o.left,o.top]),i.push([o.right,o.top])}return i}function Uo(e){const t=yo(),n=gt(),o=fo(),i=wo(),l=qo(),s=He({placement:"horizontal"===t.orientation()?"bottom-start":"right-start"},e),[d,c]=(0,r.h)(s,["open","defaultOpen","onOpenChange"]);let u=0,f=null,g="right";const[p,h]=(0,r.b)(),[v,y]=(0,r.b)(),[b,m]=(0,r.b)(),[x,w]=(0,r.b)(),[k,$]=(0,r.b)(!0),[S,C]=(0,r.b)(c.placement),[E,q]=(0,r.b)([]),[M,F]=(0,r.b)([]),{DomCollectionProvider:L}=yt({items:M,onItemsChange:F}),D=Er({open:()=>d.open,defaultOpen:()=>d.defaultOpen,onOpenChange:e=>{var t;return null==(t=d.onOpenChange)?void 0:t.call(d,e)}}),{present:T}=Ut({show:()=>t.forceMount()||D.isOpen(),element:()=>x()??null}),z=function(e){const t=Ot(e),n=xt({dataSource:()=>a(e.dataSource),getKey:()=>a(e.getKey),getTextValue:()=>a(e.getTextValue),getDisabled:()=>a(e.getDisabled),getSectionChildren:()=>a(e.getSectionChildren),factory:t=>e.filter?new Rt(e.filter(t)):new Rt(t)},[()=>e.filter]),o=new Kt(n,t);return(0,r.G)((()=>{const e=t.focusedKey();null!=e&&!n().getItem(e)&&t.setFocusedKey(void 0)})),{collection:n,selectionManager:()=>o}}({selectionMode:"none",dataSource:M}),A=e=>{$(e),D.open()},O=function(e){void 0===e&&(e=!1),D.close(),e&&o&&o.close(!0)},I=()=>{const e=x();e&&(De(e),z.selectionManager().setFocused(!0),z.selectionManager().setFocusedKey(void 0))},P=()=>{null!=l?setTimeout((()=>I())):I()},K=e=>g===(null==f?void 0:f.side)&&function(e,t){return!!t&&function(e,t){const[n,r]=e;let o=!1;for(let i=t.length,l=0,a=i-1;l<i;a=l++){const[e,s]=t[l],[d,c]=t[a],[,u]=t[0===a?i-1:a-1]||[0,0],f=(s-c)*(n-e)-(e-d)*(r-s);if(c<s){if(r>=c&&r<s){if(0===f)return!0;f>0&&(r===c?r>u&&(o=!o):o=!o)}}else if(s<c){if(r>s&&r<=c){if(0===f)return!0;f<0&&(r===c?r<u&&(o=!o):o=!o)}}else if(r==s&&(n>=d&&n<=e||n>=e&&n<=d))return!0}return o}([e.clientX,e.clientY],t)}(e,null==f?void 0:f.area);_r({isDisabled:()=>!(null==o&&D.isOpen()&&t.isModal()),targets:()=>[x(),...E()].filter(Boolean)}),(0,r.e)((()=>{const e=x();if(!e||!o)return;const t=o.registerNestedMenu(e);(0,r.n)((()=>{t()}))})),(0,r.e)((()=>{void 0===o&&(null==i||i.registerMenu(t.value(),[x(),...E()]))})),(0,r.e)((()=>{var e;void 0!==o||void 0===i||(i.value()===t.value()?(null==(e=b())||e.focus(),i.autoFocusMenu()&&A(!0)):O())})),(0,r.e)((()=>{void 0!==o||void 0===i||D.isOpen()&&i.setValue(t.value())})),(0,r.n)((()=>{void 0===o&&(null==i||i.unregisterMenu(t.value()))}));const R={dataset:(0,r.c)((()=>({"data-expanded":D.isOpen()?"":void 0,"data-closed":D.isOpen()?void 0:""}))),isOpen:D.isOpen,contentPresent:T,nestedMenus:E,currentPlacement:S,pointerGraceTimeoutId:()=>u,autoFocus:k,listState:()=>z,parentMenuContext:()=>o,triggerRef:b,contentRef:x,triggerId:p,contentId:v,setTriggerRef:m,setContentRef:w,open:A,close:O,toggle:e=>{$(e),D.toggle()},focusContent:P,onItemEnter:e=>{K(e)&&e.preventDefault()},onItemLeave:e=>{K(e)||P()},onTriggerLeave:e=>{K(e)&&e.preventDefault()},setPointerDir:e=>g=e,setPointerGraceTimeoutId:e=>u=e,setPointerGraceIntent:e=>f=e,registerNestedMenu:e=>{q((t=>[...t,e]));const t=null==o?void 0:o.registerNestedMenu(e);return()=>{q((t=>ve(t,e))),null==t||t()}},registerItemToParentDomCollection:null==n?void 0:n.registerItem,registerTriggerId:Ze(h),registerContentId:Ze(y)};return(0,r.a)(L,{get children(){return(0,r.a)(uo.Provider,{value:R,get children(){return(0,r.a)(r.S,{when:void 0===l,get fallback(){return c.children},get children(){return(0,r.a)(wr,(0,r.f)({anchorRef:b,contentRef:x,onCurrentPlacementChange:C},c))}})}})}})}function Ho(e){const{direction:t}=Ft();return(0,r.a)(Uo,(0,r.f)({get placement(){return"rtl"===t()?"left-start":"right-start"},flip:!0},e))}var Vo=(e,t)=>"ltr"===e?["horizontal"===t?"ArrowLeft":"ArrowUp"]:["horizontal"===t?"ArrowRight":"ArrowDown"];function No(e){const t=go(),n=yo(),[o,i]=(0,r.h)(e,["onFocusOutside","onKeyDown"]),{direction:l}=Ft();return(0,r.a)(Mo,(0,r.f)({onOpenAutoFocus:e=>{e.preventDefault()},onCloseAutoFocus:e=>{e.preventDefault()},onFocusOutside:e=>{var n;null==(n=o.onFocusOutside)||n.call(o,e);const r=e.target;xe(t.triggerRef(),r)||t.close()},onKeyDown:e=>{Me(e,o.onKeyDown);const r=xe(e.currentTarget,e.target),i=Vo(l(),n.orientation()).includes(e.key),a=null!=t.parentMenuContext();r&&i&&a&&(t.close(),De(t.triggerRef()))}},i))}var Wo=["Enter"," "],Qo=(e,t)=>"ltr"===e?[...Wo,"horizontal"===t?"ArrowRight":"ArrowDown"]:[...Wo,"horizontal"===t?"ArrowLeft":"ArrowUp"];function _o(e){let t;const n=yo(),o=go(),i=He({id:n.generateId(`sub-trigger-${(0,r.l)()}`)},e),[l,a]=(0,r.h)(i,["ref","id","textValue","disabled","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]);let s=null;const d=()=>{s&&window.clearTimeout(s),s=null},{direction:c}=Ft(),u=()=>l.id,f=()=>{const e=o.parentMenuContext();if(null==e)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");return e.listState().selectionManager()},g=Pt({key:u,selectionManager:f,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>l.disabled},(()=>t)),p=e=>{Me(e,l.onClick),!o.isOpen()&&!l.disabled&&o.open(!0)},h=e=>{Me(e,l.onKeyDown),!e.repeat&&(l.disabled||Qo(c(),n.orientation()).includes(e.key)&&(e.stopPropagation(),e.preventDefault(),f().setFocused(!1),f().setFocusedKey(void 0),o.isOpen()||o.open("first"),o.focusContent(),o.listState().selectionManager().setFocused(!0),o.listState().selectionManager().setFocusedKey(o.listState().collection().getFirstKey())))};return(0,r.e)((()=>{if(null==o.registerItemToParentDomCollection)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");const e=o.registerItemToParentDomCollection({ref:()=>t,type:"item",key:u(),textValue:l.textValue??(null==t?void 0:t.textContent)??"",disabled:l.disabled??!1});(0,r.n)(e)})),(0,r.e)((0,r.o)((()=>{var e;return null==(e=o.parentMenuContext())?void 0:e.pointerGraceTimeoutId()}),(e=>{(0,r.n)((()=>{var t;window.clearTimeout(e),null==(t=o.parentMenuContext())||t.setPointerGraceIntent(null)}))}))),(0,r.e)((()=>(0,r.n)(o.registerTriggerId(l.id)))),(0,r.n)((()=>{d()})),(0,r.a)(et,(0,r.f)({as:"div",ref(e){const n=ee((e=>{o.setTriggerRef(e),t=e}),l.ref);"function"==typeof n&&n(e)},get id(){return l.id},role:"menuitem",get tabIndex(){return g.tabIndex()},"aria-haspopup":"true",get"aria-expanded"(){return o.isOpen()},get"aria-controls"(){return(0,r.c)((()=>!!o.isOpen()))()?o.contentId():void 0},get"aria-disabled"(){return l.disabled},get"data-key"(){return g.dataKey()},get"data-highlighted"(){return f().focusedKey()===u()?"":void 0},get"data-disabled"(){return l.disabled?"":void 0},get onPointerDown(){return Fe([l.onPointerDown,g.onPointerDown])},get onPointerUp(){return Fe([l.onPointerUp,g.onPointerUp])},get onClick(){return Fe([p,g.onClick])},get onKeyDown(){return Fe([h,g.onKeyDown])},get onMouseDown(){return Fe([l.onMouseDown,g.onMouseDown])},get onFocus(){return Fe([l.onFocus,g.onFocus])},onPointerMove:e=>{var t;if(Me(e,l.onPointerMove),"mouse"!==e.pointerType)return;const n=o.parentMenuContext();if(null==n||n.onItemEnter(e),!e.defaultPrevented){if(l.disabled)return void(null==n||n.onItemLeave(e));!o.isOpen()&&!s&&(null==(t=o.parentMenuContext())||t.setPointerGraceIntent(null),s=window.setTimeout((()=>{o.open(!1),d()}),100)),null==n||n.onItemEnter(e),e.defaultPrevented||(o.listState().selectionManager().isFocused()&&(o.listState().selectionManager().setFocused(!1),o.listState().selectionManager().setFocusedKey(void 0)),De(e.currentTarget),null==n||n.listState().selectionManager().setFocused(!0),null==n||n.listState().selectionManager().setFocusedKey(u()))}},onPointerLeave:e=>{if(Me(e,l.onPointerLeave),"mouse"!==e.pointerType)return;d();const t=o.parentMenuContext(),n=o.contentRef();if(n){null==t||t.setPointerGraceIntent({area:Go(o.currentPlacement(),e,n),side:o.currentPlacement().split("-")[0]}),window.clearTimeout(null==t?void 0:t.pointerGraceTimeoutId());const r=window.setTimeout((()=>{null==t||t.setPointerGraceIntent(null)}),300);null==t||t.setPointerGraceTimeoutId(r)}else{if(null==t||t.onTriggerLeave(e),e.defaultPrevented)return;null==t||t.setPointerGraceIntent(null)}null==t||t.onItemLeave(e)}},(()=>o.dataset()),a))}function Xo(e){const t=wo(),n=He({id:`menu-${(0,r.l)()}`,modal:!0},e),[o,i]=(0,r.h)(n,["id","modal","preventScroll","forceMount","open","defaultOpen","onOpenChange","value","orientation"]),l=Er({open:()=>o.open,defaultOpen:()=>o.defaultOpen,onOpenChange:e=>{var t;return null==(t=o.onOpenChange)?void 0:t.call(o,e)}}),a={isModal:()=>o.modal??!0,preventScroll:()=>o.preventScroll??a.isModal(),forceMount:()=>o.forceMount??!1,generateId:me((()=>o.id)),value:()=>o.value,orientation:()=>o.orientation??(null==t?void 0:t.orientation())??"horizontal"};return(0,r.a)(vo.Provider,{value:a,get children(){return(0,r.a)(Uo,(0,r.f)({get open(){return l.isOpen()},get onOpenChange(){return l.setIsOpen}},i))}})}function Zo(e){let t;const n=He({orientation:"horizontal"},e),[o,i]=(0,r.h)(n,["ref","orientation"]),l=Ye((()=>t),(()=>"hr"));return(0,r.a)(et,(0,r.f)({as:"hr",ref(e){const n=ee((e=>t=e),o.ref);"function"==typeof n&&n(e)},get role(){return"hr"!==l()?"separator":void 0},get"aria-orientation"(){return"vertical"===o.orientation?"vertical":void 0},get"data-orientation"(){return o.orientation}},i))}ut({},{Root:()=>Zo,Separator:()=>Yo});var Yo=Zo,Jo={};function ei(e){const t=yo(),n=go(),[o,i]=(0,r.h)(e,["onCloseAutoFocus","onInteractOutside"]);let l=!1;return(0,r.a)(Fo,(0,r.f)({onCloseAutoFocus:e=>{var t;null==(t=o.onCloseAutoFocus)||t.call(o,e),l||De(n.triggerRef()),l=!1,e.preventDefault()},onInteractOutside:e=>{var n;null==(n=o.onInteractOutside)||n.call(o,e),(!t.isModal()||e.detail.isContextMenu)&&(l=!0)}},i))}function ti(e){const t=He({id:`dropdownmenu-${(0,r.l)()}`},e);return(0,r.a)(Xo,t)}ut(Jo,{Arrow:()=>yr,CheckboxItem:()=>mo,Content:()=>ei,DropdownMenu:()=>ni,Group:()=>Do,GroupLabel:()=>To,Icon:()=>zo,Item:()=>Ao,ItemDescription:()=>Oo,ItemIndicator:()=>Io,ItemLabel:()=>Po,Portal:()=>Ko,RadioGroup:()=>Bo,RadioItem:()=>jo,Root:()=>ti,Separator:()=>Zo,Sub:()=>Ho,SubContent:()=>No,SubTrigger:()=>_o,Trigger:()=>Co});var ni=Object.assign(ti,{Arrow:yr,CheckboxItem:mo,Content:ei,Group:Do,GroupLabel:To,Icon:zo,Item:Ao,ItemDescription:Oo,ItemIndicator:Io,ItemLabel:Po,Portal:Ko,RadioGroup:Bo,RadioItem:jo,Separator:Zo,Sub:Ho,SubContent:No,SubTrigger:_o,Trigger:Co}),ri={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{100:"ff",90:"e5",80:"cc",70:"b3",60:"99",50:"80",40:"66",30:"4d",20:"33",10:"1a",0:"00"},font:{size:{"2xs":"calc(var(--tsqd-font-size) * 0.625)",xs:"calc(var(--tsqd-font-size) * 0.75)",sm:"calc(var(--tsqd-font-size) * 0.875)",md:"var(--tsqd-font-size)",lg:"calc(var(--tsqd-font-size) * 1.125)",xl:"calc(var(--tsqd-font-size) * 1.25)","2xl":"calc(var(--tsqd-font-size) * 1.5)","3xl":"calc(var(--tsqd-font-size) * 1.875)","4xl":"calc(var(--tsqd-font-size) * 2.25)","5xl":"calc(var(--tsqd-font-size) * 3)","6xl":"calc(var(--tsqd-font-size) * 3.75)","7xl":"calc(var(--tsqd-font-size) * 4.5)","8xl":"calc(var(--tsqd-font-size) * 6)","9xl":"calc(var(--tsqd-font-size) * 8)"},lineHeight:{xs:"calc(var(--tsqd-font-size) * 1)",sm:"calc(var(--tsqd-font-size) * 1.25)",md:"calc(var(--tsqd-font-size) * 1.5)",lg:"calc(var(--tsqd-font-size) * 1.75)",xl:"calc(var(--tsqd-font-size) * 2)","2xl":"calc(var(--tsqd-font-size) * 2.25)","3xl":"calc(var(--tsqd-font-size) * 2.5)","4xl":"calc(var(--tsqd-font-size) * 2.75)","5xl":"calc(var(--tsqd-font-size) * 3)","6xl":"calc(var(--tsqd-font-size) * 3.25)","7xl":"calc(var(--tsqd-font-size) * 3.5)","8xl":"calc(var(--tsqd-font-size) * 3.75)","9xl":"calc(var(--tsqd-font-size) * 4)"},weight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"}},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},border:{radius:{none:"0px",xs:"calc(var(--tsqd-font-size) * 0.125)",sm:"calc(var(--tsqd-font-size) * 0.25)",md:"calc(var(--tsqd-font-size) * 0.375)",lg:"calc(var(--tsqd-font-size) * 0.5)",xl:"calc(var(--tsqd-font-size) * 0.75)","2xl":"calc(var(--tsqd-font-size) * 1)","3xl":"calc(var(--tsqd-font-size) * 1.5)",full:"9999px"}},size:{0:"0px",.25:"calc(var(--tsqd-font-size) * 0.0625)",.5:"calc(var(--tsqd-font-size) * 0.125)",1:"calc(var(--tsqd-font-size) * 0.25)",1.5:"calc(var(--tsqd-font-size) * 0.375)",2:"calc(var(--tsqd-font-size) * 0.5)",2.5:"calc(var(--tsqd-font-size) * 0.625)",3:"calc(var(--tsqd-font-size) * 0.75)",3.5:"calc(var(--tsqd-font-size) * 0.875)",4:"calc(var(--tsqd-font-size) * 1)",4.5:"calc(var(--tsqd-font-size) * 1.125)",5:"calc(var(--tsqd-font-size) * 1.25)",5.5:"calc(var(--tsqd-font-size) * 1.375)",6:"calc(var(--tsqd-font-size) * 1.5)",6.5:"calc(var(--tsqd-font-size) * 1.625)",7:"calc(var(--tsqd-font-size) * 1.75)",8:"calc(var(--tsqd-font-size) * 2)",9:"calc(var(--tsqd-font-size) * 2.25)",10:"calc(var(--tsqd-font-size) * 2.5)",11:"calc(var(--tsqd-font-size) * 2.75)",12:"calc(var(--tsqd-font-size) * 3)",14:"calc(var(--tsqd-font-size) * 3.5)",16:"calc(var(--tsqd-font-size) * 4)",20:"calc(var(--tsqd-font-size) * 5)",24:"calc(var(--tsqd-font-size) * 6)",28:"calc(var(--tsqd-font-size) * 7)",32:"calc(var(--tsqd-font-size) * 8)",36:"calc(var(--tsqd-font-size) * 9)",40:"calc(var(--tsqd-font-size) * 10)",44:"calc(var(--tsqd-font-size) * 11)",48:"calc(var(--tsqd-font-size) * 12)",52:"calc(var(--tsqd-font-size) * 13)",56:"calc(var(--tsqd-font-size) * 14)",60:"calc(var(--tsqd-font-size) * 15)",64:"calc(var(--tsqd-font-size) * 16)",72:"calc(var(--tsqd-font-size) * 18)",80:"calc(var(--tsqd-font-size) * 20)",96:"calc(var(--tsqd-font-size) * 24)"},shadow:{xs:function(e){return void 0===e&&(e="rgb(0 0 0 / 0.1)"),"0 1px 2px 0 rgb(0 0 0 / 0.05)"},sm:function(e){return void 0===e&&(e="rgb(0 0 0 / 0.1)"),`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`},md:function(e){return void 0===e&&(e="rgb(0 0 0 / 0.1)"),`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`},lg:function(e){return void 0===e&&(e="rgb(0 0 0 / 0.1)"),`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`},xl:function(e){return void 0===e&&(e="rgb(0 0 0 / 0.1)"),`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`},"2xl":function(e){return void 0===e&&(e="rgb(0 0 0 / 0.25)"),`0 25px 50px -12px ${e}`},inner:function(e){return void 0===e&&(e="rgb(0 0 0 / 0.05)"),`inset 0 2px 4px 0 ${e}`},none:()=>"none"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},oi=(0,r.t)('<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),ii=(0,r.t)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),li=(0,r.t)('<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),ai=(0,r.t)('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),si=(0,r.t)('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),di=(0,r.t)('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),ci=(0,r.t)('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),ui=(0,r.t)('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),fi=(0,r.t)('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">'),gi=(0,r.t)('<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">'),pi=(0,r.t)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),hi=(0,r.t)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),vi=(0,r.t)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>'),yi=(0,r.t)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),bi=(0,r.t)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),mi=(0,r.t)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),xi=(0,r.t)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>'),wi=(0,r.t)('<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),ki=(0,r.t)('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),$i=(0,r.t)('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>'),Si=(0,r.t)('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ci=(0,r.t)('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ei=(0,r.t)('<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>');function qi(){return oi()}function Mi(){return ii()}function Fi(){return li()}function Li(){return ai()}function Di(){return si()}function Ti(){return(()=>{var e=si();return e.style.setProperty("transform","rotate(90deg)"),e})()}function zi(){return(()=>{var e=si();return e.style.setProperty("transform","rotate(-90deg)"),e})()}function Ai(){return di()}function Oi(){return ci()}function Ii(){return ui()}function Pi(){return fi()}function Ki(){return gi()}function Ri(){return pi()}function Bi(){return hi()}function ji(){return vi()}function Gi(){return yi()}function Ui(e){return t=bi(),n=t.firstChild,(0,r.j)((()=>(0,r.k)(n,"stroke","dark"===e.theme?"#12B76A":"#027A48"))),t;var t,n}function Hi(){return mi()}function Vi(){return xi()}function Ni(e){return[(0,r.a)(r.S,{get when(){return e.checked},get children(){var t=bi(),n=t.firstChild;return(0,r.j)((()=>(0,r.k)(n,"stroke","dark"===e.theme?"#9B8AFB":"#6938EF"))),t}}),(0,r.a)(r.S,{get when(){return!e.checked},get children(){var t=wi(),n=t.firstChild;return(0,r.j)((()=>(0,r.k)(n,"stroke","dark"===e.theme?"#9B8AFB":"#6938EF"))),t}})]}function Wi(){return ki()}function Qi(){return $i()}function _i(){return Si()}function Xi(){return Ci()}function Zi(){const e=(0,r.l)();return t=Ei(),n=t.firstChild,o=n.nextSibling,i=o.nextSibling,l=i.firstChild,a=i.nextSibling,s=a.firstChild,d=a.nextSibling,c=d.nextSibling,u=c.firstChild,f=c.nextSibling,g=f.firstChild,p=f.nextSibling,h=p.nextSibling,v=h.firstChild,y=h.nextSibling,b=y.firstChild,m=y.nextSibling,x=m.nextSibling,w=x.firstChild,k=x.nextSibling,$=k.firstChild,S=k.nextSibling,C=S.nextSibling,E=C.firstChild,q=C.nextSibling,M=q.firstChild,F=q.nextSibling,L=F.nextSibling,D=L.firstChild,T=L.nextSibling,z=T.firstChild,A=T.nextSibling,O=A.nextSibling,I=O.firstChild,P=O.nextSibling,K=P.firstChild,R=P.nextSibling,B=R.firstChild.nextSibling.nextSibling.nextSibling,j=B.nextSibling,G=R.nextSibling,U=G.firstChild,H=G.nextSibling,V=H.firstChild,N=H.nextSibling,W=N.firstChild,Q=W.nextSibling,_=Q.nextSibling.firstChild,X=_.nextSibling,Z=X.nextSibling,Y=Z.nextSibling,J=Y.nextSibling,ee=J.nextSibling,te=ee.nextSibling,ne=te.nextSibling,re=ne.nextSibling,oe=re.nextSibling,ie=oe.nextSibling,le=ie.nextSibling,ae=N.nextSibling,se=ae.firstChild,de=ae.nextSibling,ce=de.firstChild,ue=de.nextSibling,fe=ue.firstChild,ge=fe.nextSibling,pe=ue.nextSibling,he=pe.firstChild,ve=pe.nextSibling,ye=ve.firstChild,be=ve.nextSibling,me=be.firstChild,xe=me.nextSibling,we=xe.nextSibling,ke=we.nextSibling,$e=ke.nextSibling,Se=$e.nextSibling,Ce=Se.nextSibling,Ee=Ce.nextSibling,qe=Ee.nextSibling,Me=qe.nextSibling,Fe=Me.nextSibling,Le=Fe.nextSibling,De=Le.nextSibling,Te=De.nextSibling,ze=Te.nextSibling,Ae=ze.nextSibling,Oe=Ae.nextSibling,Ie=Oe.nextSibling,(0,r.k)(n,"id",`a-${e}`),(0,r.k)(o,"fill",`url(#a-${e})`),(0,r.k)(l,"id",`am-${e}`),(0,r.k)(a,"id",`b-${e}`),(0,r.k)(s,"filter",`url(#am-${e})`),(0,r.k)(d,"mask",`url(#b-${e})`),(0,r.k)(u,"id",`ah-${e}`),(0,r.k)(f,"id",`k-${e}`),(0,r.k)(g,"filter",`url(#ah-${e})`),(0,r.k)(p,"mask",`url(#k-${e})`),(0,r.k)(v,"id",`ae-${e}`),(0,r.k)(y,"id",`j-${e}`),(0,r.k)(b,"filter",`url(#ae-${e})`),(0,r.k)(m,"mask",`url(#j-${e})`),(0,r.k)(w,"id",`ai-${e}`),(0,r.k)(k,"id",`i-${e}`),(0,r.k)($,"filter",`url(#ai-${e})`),(0,r.k)(S,"mask",`url(#i-${e})`),(0,r.k)(E,"id",`aj-${e}`),(0,r.k)(q,"id",`h-${e}`),(0,r.k)(M,"filter",`url(#aj-${e})`),(0,r.k)(F,"mask",`url(#h-${e})`),(0,r.k)(D,"id",`ag-${e}`),(0,r.k)(T,"id",`g-${e}`),(0,r.k)(z,"filter",`url(#ag-${e})`),(0,r.k)(A,"mask",`url(#g-${e})`),(0,r.k)(I,"id",`af-${e}`),(0,r.k)(P,"id",`f-${e}`),(0,r.k)(K,"filter",`url(#af-${e})`),(0,r.k)(R,"mask",`url(#f-${e})`),(0,r.k)(B,"id",`m-${e}`),(0,r.k)(j,"fill",`url(#m-${e})`),(0,r.k)(U,"id",`ak-${e}`),(0,r.k)(H,"id",`e-${e}`),(0,r.k)(V,"filter",`url(#ak-${e})`),(0,r.k)(N,"mask",`url(#e-${e})`),(0,r.k)(W,"id",`n-${e}`),(0,r.k)(Q,"fill",`url(#n-${e})`),(0,r.k)(_,"id",`r-${e}`),(0,r.k)(X,"fill",`url(#r-${e})`),(0,r.k)(Z,"id",`s-${e}`),(0,r.k)(Y,"fill",`url(#s-${e})`),(0,r.k)(J,"id",`q-${e}`),(0,r.k)(ee,"fill",`url(#q-${e})`),(0,r.k)(te,"id",`p-${e}`),(0,r.k)(ne,"fill",`url(#p-${e})`),(0,r.k)(re,"id",`o-${e}`),(0,r.k)(oe,"fill",`url(#o-${e})`),(0,r.k)(ie,"id",`l-${e}`),(0,r.k)(le,"fill",`url(#l-${e})`),(0,r.k)(se,"id",`al-${e}`),(0,r.k)(de,"id",`d-${e}`),(0,r.k)(ce,"filter",`url(#al-${e})`),(0,r.k)(ue,"mask",`url(#d-${e})`),(0,r.k)(fe,"id",`u-${e}`),(0,r.k)(ge,"fill",`url(#u-${e})`),(0,r.k)(he,"id",`ad-${e}`),(0,r.k)(ve,"id",`c-${e}`),(0,r.k)(ye,"filter",`url(#ad-${e})`),(0,r.k)(be,"mask",`url(#c-${e})`),(0,r.k)(me,"id",`t-${e}`),(0,r.k)(xe,"fill",`url(#t-${e})`),(0,r.k)(we,"id",`v-${e}`),(0,r.k)(ke,"stroke",`url(#v-${e})`),(0,r.k)($e,"id",`aa-${e}`),(0,r.k)(Se,"stroke",`url(#aa-${e})`),(0,r.k)(Ce,"id",`w-${e}`),(0,r.k)(Ee,"stroke",`url(#w-${e})`),(0,r.k)(qe,"id",`ac-${e}`),(0,r.k)(Me,"stroke",`url(#ac-${e})`),(0,r.k)(Fe,"id",`ab-${e}`),(0,r.k)(Le,"stroke",`url(#ab-${e})`),(0,r.k)(De,"id",`y-${e}`),(0,r.k)(Te,"stroke",`url(#y-${e})`),(0,r.k)(ze,"id",`x-${e}`),(0,r.k)(Ae,"stroke",`url(#x-${e})`),(0,r.k)(Oe,"id",`z-${e}`),(0,r.k)(Ie,"stroke",`url(#z-${e})`),t;var t,n,o,i,l,a,s,d,c,u,f,g,p,h,v,y,b,m,x,w,k,$,S,C,E,q,M,F,L,D,T,z,A,O,I,P,K,R,B,j,G,U,H,V,N,W,Q,_,X,Z,Y,J,ee,te,ne,re,oe,ie,le,ae,se,de,ce,ue,fe,ge,pe,he,ve,ye,be,me,xe,we,ke,$e,Se,Ce,Ee,qe,Me,Fe,Le,De,Te,ze,Ae,Oe,Ie}var Yi=(0,r.t)('<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ji=(0,r.t)('<button title="Copy object to clipboard">'),el=(0,r.t)('<button title="Remove all items"aria-label="Remove all items">'),tl=(0,r.t)('<button title="Delete item"aria-label="Delete item">'),nl=(0,r.t)('<button title="Toggle value"aria-label="Toggle value">'),rl=(0,r.t)('<button title="Bulk Edit Data"aria-label="Bulk Edit Data">'),ol=(0,r.t)("<div>"),il=(0,r.t)("<div><button> <span></span> <span> "),ll=(0,r.t)("<input>"),al=(0,r.t)("<span>"),sl=(0,r.t)("<div><span>:"),dl=(0,r.t)("<div><div><button> [<!>...<!>]");var cl=e=>{const t=C(),n=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,o=(0,r.c)((()=>"dark"===t()?ml(n):bl(n)));return i=Yi(),(0,r.j)((()=>(0,r.v)(i,Y(o().expander,n`
          transform: rotate(${e.expanded?90:0}deg);
        `,e.expanded&&n`
            & svg {
              top: -1px;
            }
          `)))),i;var i},ul=e=>{const t=C(),n=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,o=(0,r.c)((()=>"dark"===t()?ml(n):bl(n))),[i,l]=(0,r.b)("NoCopy");return a=Ji(),(0,r.Q)(a,"click","NoCopy"===i()?()=>{navigator.clipboard.writeText((0,r.R)(e.value)).then((()=>{l("SuccessCopy"),setTimeout((()=>{l("NoCopy")}),1500)}),(e=>{l("ErrorCopy"),setTimeout((()=>{l("NoCopy")}),1500)}))}:void 0,!0),(0,r.r)(a,(0,r.a)(r.U,{get children(){return[(0,r.a)(r.T,{get when(){return"NoCopy"===i()},get children(){return(0,r.a)(ji,{})}}),(0,r.a)(r.T,{get when(){return"SuccessCopy"===i()},get children(){return(0,r.a)(Ui,{get theme(){return t()}})}}),(0,r.a)(r.T,{get when(){return"ErrorCopy"===i()},get children(){return(0,r.a)(Hi,{})}})]}})),(0,r.j)((e=>{var t=o().actionButton,n="NoCopy"===i()?"Copy object to clipboard":"SuccessCopy"===i()?"Object copied to clipboard":"Error copying object to clipboard";return t!==e.e&&(0,r.v)(a,e.e=t),n!==e.t&&(0,r.k)(a,"aria-label",e.t=n),e}),{e:void 0,t:void 0}),a;var a},fl=e=>{const t=C(),n=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,o=(0,r.c)((()=>"dark"===t()?ml(n):bl(n))),i=x().client;return(l=el()).$$click=()=>{const t=e.activeQuery.state.data,n=(0,r.J)(t,e.dataPath,[]);i.setQueryData(e.activeQuery.queryKey,n)},(0,r.r)(l,(0,r.a)(Vi,{})),(0,r.j)((()=>(0,r.v)(l,o().actionButton))),l;var l},gl=e=>{const t=C(),n=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,o=(0,r.c)((()=>"dark"===t()?ml(n):bl(n))),i=x().client;return(l=tl()).$$click=()=>{const t=e.activeQuery.state.data,n=(0,r.V)(t,e.dataPath);i.setQueryData(e.activeQuery.queryKey,n)},(0,r.r)(l,(0,r.a)(Mi,{})),(0,r.j)((()=>(0,r.v)(l,Y(o().actionButton)))),l;var l},pl=e=>{const t=C(),n=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,o=(0,r.c)((()=>"dark"===t()?ml(n):bl(n))),i=x().client;return(l=nl()).$$click=()=>{const t=e.activeQuery.state.data,n=(0,r.J)(t,e.dataPath,!e.value);i.setQueryData(e.activeQuery.queryKey,n)},(0,r.r)(l,(0,r.a)(Ni,{get theme(){return t()},get checked(){return e.value}})),(0,r.j)((()=>(0,r.v)(l,Y(o().actionButton,n`
          width: ${ri.size[3.5]};
          height: ${ri.size[3.5]};
        `)))),l;var l};function hl(e){return Symbol.iterator in e}function vl(e){const t=C(),n=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,o=(0,r.c)((()=>"dark"===t()?ml(n):bl(n))),i=x().client,[l,a]=(0,r.b)((e.defaultExpanded||[]).includes(e.label)),[s,d]=(0,r.b)([]),c=(0,r.c)((()=>Array.isArray(e.value)?e.value.map(((e,t)=>({label:t.toString(),value:e}))):null!==e.value&&"object"==typeof e.value&&hl(e.value)&&"function"==typeof e.value[Symbol.iterator]?e.value instanceof Map?Array.from(e.value,(e=>{let[t,n]=e;return{label:t,value:n}})):Array.from(e.value,((e,t)=>({label:t.toString(),value:e}))):"object"==typeof e.value&&null!==e.value?Object.entries(e.value).map((e=>{let[t,n]=e;return{label:t,value:n}})):[])),u=(0,r.c)((()=>Array.isArray(e.value)?"array":null!==e.value&&"object"==typeof e.value&&hl(e.value)&&"function"==typeof e.value[Symbol.iterator]?"Iterable":"object"==typeof e.value&&null!==e.value?"object":typeof e.value)),f=(0,r.c)((()=>function(e,t){let n=0;const r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n+=t;return r}(c(),100))),g=e.dataPath??[];return p=ol(),(0,r.r)(p,(0,r.a)(r.S,{get when(){return f().length},get children(){return[(t=il(),n=t.firstChild,i=n.firstChild,p=i.nextSibling,h=p.nextSibling.nextSibling,v=h.firstChild,n.$$click=()=>a((e=>!e)),(0,r.r)(n,(0,r.a)(cl,{get expanded(){return l()}}),i),(0,r.r)(p,(()=>e.label)),(0,r.r)(h,(()=>"iterable"===String(u()).toLowerCase()?"(Iterable) ":""),v),(0,r.r)(h,(()=>c().length),v),(0,r.r)(h,(()=>c().length>1?"items":"item"),null),(0,r.r)(t,(0,r.a)(r.S,{get when(){return e.editable},get children(){var t=ol();return(0,r.r)(t,(0,r.a)(ul,{get value(){return e.value}}),null),(0,r.r)(t,(0,r.a)(r.S,{get when(){return e.itemsDeletable&&void 0!==e.activeQuery},get children(){return(0,r.a)(gl,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),(0,r.r)(t,(0,r.a)(r.S,{get when(){return"array"===u()&&void 0!==e.activeQuery},get children(){return(0,r.a)(fl,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),(0,r.r)(t,(0,r.a)(r.S,{get when(){return(0,r.c)((()=>!!e.onEdit))()&&!(0,r.H)(e.value).meta},get children(){var t=rl();return t.$$click=()=>{var t;null==(t=e.onEdit)||t.call(e)},(0,r.r)(t,(0,r.a)(Gi,{})),(0,r.j)((()=>(0,r.v)(t,o().actionButton))),t}}),null),(0,r.j)((()=>(0,r.v)(t,o().actions))),t}}),null),(0,r.j)((e=>{var i=o().expanderButtonContainer,l=o().expanderButton,a=o().info;return i!==e.e&&(0,r.v)(t,e.e=i),l!==e.t&&(0,r.v)(n,e.t=l),a!==e.a&&(0,r.v)(h,e.a=a),e}),{e:void 0,t:void 0,a:void 0}),t),(0,r.a)(r.S,{get when(){return l()},get children(){return[(0,r.a)(r.S,{get when(){return 1===f().length},get children(){var t=ol();return(0,r.r)(t,(0,r.a)(ce,{get each(){return c()},by:e=>e.label,children:t=>(0,r.a)(vl,{get defaultExpanded(){return e.defaultExpanded},get label(){return t().label},get value(){return t().value},get editable(){return e.editable},get dataPath(){return[...g,t().label]},get activeQuery(){return e.activeQuery},get itemsDeletable(){return"array"===u()||"Iterable"===u()||"object"===u()}})})),(0,r.j)((()=>(0,r.v)(t,o().subEntry))),t}}),(0,r.a)(r.S,{get when(){return f().length>1},get children(){var t=ol();return(0,r.r)(t,(0,r.a)(r.I,{get each(){return f()},children:(t,n)=>(()=>{var i=dl(),l=i.firstChild,a=l.firstChild,c=a.firstChild,u=c.nextSibling,f=u.nextSibling.nextSibling;return f.nextSibling,a.$$click=()=>d((e=>e.includes(n)?e.filter((e=>e!==n)):[...e,n])),(0,r.r)(a,(0,r.a)(cl,{get expanded(){return s().includes(n)}}),c),(0,r.r)(a,100*n,u),(0,r.r)(a,100*n+100-1,f),(0,r.r)(l,(0,r.a)(r.S,{get when(){return s().includes(n)},get children(){var n=ol();return(0,r.r)(n,(0,r.a)(ce,{get each(){return t()},by:e=>e.label,children:t=>(0,r.a)(vl,{get defaultExpanded(){return e.defaultExpanded},get label(){return t().label},get value(){return t().value},get editable(){return e.editable},get dataPath(){return[...g,t().label]},get activeQuery(){return e.activeQuery}})})),(0,r.j)((()=>(0,r.v)(n,o().subEntry))),n}}),null),(0,r.j)((e=>{var t=o().entry,n=o().expanderButton;return t!==e.e&&(0,r.v)(l,e.e=t),n!==e.t&&(0,r.v)(a,e.t=n),e}),{e:void 0,t:void 0}),i})()})),(0,r.j)((()=>(0,r.v)(t,o().subEntry))),t}})]}})];var t,n,i,p,h,v}}),null),(0,r.r)(p,(0,r.a)(r.S,{get when(){return 0===f().length},get children(){var t=sl(),n=t.firstChild,l=n.firstChild;return(0,r.r)(n,(()=>e.label),l),(0,r.r)(t,(0,r.a)(r.S,{get when(){return(0,r.c)((()=>!(!e.editable||void 0===e.activeQuery)))()&&("string"===u()||"number"===u()||"boolean"===u())},get fallback(){return t=al(),(0,r.r)(t,(()=>(0,r.A)(e.value))),(0,r.j)((()=>(0,r.v)(t,o().value))),t;var t},get children(){return[(0,r.a)(r.S,{get when(){return(0,r.c)((()=>!(!e.editable||void 0===e.activeQuery)))()&&("string"===u()||"number"===u())},get children(){var t=ll();return t.addEventListener("change",(t=>{const n=e.activeQuery.state.data,o=(0,r.J)(n,g,"number"===u()?t.target.valueAsNumber:t.target.value);i.setQueryData(e.activeQuery.queryKey,o)})),(0,r.j)((e=>{var n="number"===u()?"number":"text",i=Y(o().value,o().editableInput);return n!==e.e&&(0,r.k)(t,"type",e.e=n),i!==e.t&&(0,r.v)(t,e.t=i),e}),{e:void 0,t:void 0}),(0,r.j)((()=>t.value=e.value)),t}}),(0,r.a)(r.S,{get when(){return"boolean"===u()},get children(){var t=al();return(0,r.r)(t,(0,r.a)(pl,{get activeQuery(){return e.activeQuery},dataPath:g,get value(){return e.value}}),null),(0,r.r)(t,(()=>(0,r.A)(e.value)),null),(0,r.j)((()=>(0,r.v)(t,Y(o().value,o().actions,o().editableInput)))),t}})]}}),null),(0,r.r)(t,(0,r.a)(r.S,{get when(){return e.editable&&e.itemsDeletable&&void 0!==e.activeQuery},get children(){return(0,r.a)(gl,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),(0,r.j)((e=>{var i=o().row,l=o().label;return i!==e.e&&(0,r.v)(t,e.e=i),l!==e.t&&(0,r.v)(n,e.t=l),e}),{e:void 0,t:void 0}),t}}),null),(0,r.j)((()=>(0,r.v)(p,o().entry))),p;var p}var yl=(e,t)=>{const{colors:n,font:r,size:o,border:i}=ri,l=(t,n)=>"light"===e?t:n;return{entry:t`
      & * {
        font-size: ${r.size.xs};
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,subEntry:t`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${l(n.gray[300],n.darkGray[400])};
      /* outline: 1px solid ${n.teal[400]}; */
    `,expander:t`
      & path {
        stroke: ${n.gray[400]};
      }
      & svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
      /* outline: 1px solid ${n.blue[400]}; */
    `,expanderButtonContainer:t`
      display: flex;
      align-items: center;
      line-height: ${o[4]};
      min-height: ${o[4]};
      gap: ${o[2]};
    `,expanderButton:t`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      height: ${o[5]};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${o[1]};
      position: relative;
      /* outline: 1px solid ${n.green[400]}; */

      &:focus-visible {
        border-radius: ${i.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }

      & svg {
        position: relative;
        left: 1px;
      }
    `,info:t`
      color: ${l(n.gray[500],n.gray[500])};
      font-size: ${r.size.xs};
      margin-left: ${o[1]};
      /* outline: 1px solid ${n.yellow[400]}; */
    `,label:t`
      color: ${l(n.gray[700],n.gray[300])};
      white-space: nowrap;
    `,value:t`
      color: ${l(n.purple[600],n.purple[400])};
      flex-grow: 1;
    `,actions:t`
      display: inline-flex;
      gap: ${o[2]};
      align-items: center;
    `,row:t`
      display: inline-flex;
      gap: ${o[2]};
      width: 100%;
      margin: ${o[.25]} 0px;
      line-height: ${o[4.5]};
      align-items: center;
    `,editableInput:t`
      border: none;
      padding: ${o[.5]} ${o[1]} ${o[.5]} ${o[1.5]};
      flex-grow: 1;
      border-radius: ${i.radius.xs};
      background-color: ${l(n.gray[200],n.darkGray[500])};

      &:hover {
        background-color: ${l(n.gray[300],n.darkGray[600])};
      }
    `,actionButton:t`
      background-color: transparent;
      color: ${l(n.gray[500],n.gray[500])};
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${o[3]};
      height: ${o[3]};
      position: relative;
      z-index: 1;

      &:hover svg {
        color: ${l(n.gray[600],n.gray[400])};
      }

      &:focus-visible {
        border-radius: ${i.radius.xs};
        outline: 2px solid ${n.blue[800]};
        outline-offset: 2px;
      }
    `}},bl=e=>yl("light",e),ml=e=>yl("dark",e);(0,r.d)(["click"]);var xl=(0,r.t)('<div><div aria-hidden=true></div><button type=button aria-label="Open Tanstack query devtools"class=tsqd-open-btn>'),wl=(0,r.t)("<div>"),kl=(0,r.t)('<aside aria-label="Tanstack query devtools"><div></div><button aria-label="Close tanstack query devtools">'),$l=(0,r.t)("<select name=tsqd-queries-filter-sort>"),Sl=(0,r.t)("<select name=tsqd-mutations-filter-sort>"),Cl=(0,r.t)("<span>Asc"),El=(0,r.t)("<span>Desc"),ql=(0,r.t)('<button aria-label="Open in picture-in-picture mode"title="Open in picture-in-picture mode">'),Ml=(0,r.t)("<div>Settings"),Fl=(0,r.t)("<span>Position"),Ll=(0,r.t)("<span>Top"),Dl=(0,r.t)("<span>Bottom"),Tl=(0,r.t)("<span>Left"),zl=(0,r.t)("<span>Right"),Al=(0,r.t)("<span>Theme"),Ol=(0,r.t)("<span>Light"),Il=(0,r.t)("<span>Dark"),Pl=(0,r.t)("<span>System"),Kl=(0,r.t)("<div><div class=tsqd-queries-container>"),Rl=(0,r.t)("<div><div class=tsqd-mutations-container>"),Bl=(0,r.t)('<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter name=tsqd-query-filter-input></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>'),jl=(0,r.t)("<option>Sort by "),Gl=(0,r.t)("<div class=tsqd-query-disabled-indicator>disabled"),Ul=(0,r.t)("<button><div></div><code class=tsqd-query-hash>"),Hl=(0,r.t)("<div role=tooltip id=tsqd-status-tooltip>"),Vl=(0,r.t)("<span>"),Nl=(0,r.t)("<button><span></span><span>"),Wl=(0,r.t)("<button><span></span> Error"),Ql=(0,r.t)('<div><span></span>Trigger Error<select><option value=""disabled selected>'),_l=(0,r.t)('<div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer">'),Xl=(0,r.t)("<form><textarea name=data></textarea><div><span></span><div><button type=button>Cancel</button><button>Save"),Zl=(0,r.t)('<div><div>Query Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div>Actions</div><div><button><span></span>Refetch</button><button><span></span>Invalidate</button><button><span></span>Reset</button><button><span></span>Remove</button><button><span></span> Loading</button></div><div>Data </div><div>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),Yl=(0,r.t)("<option>"),Jl=(0,r.t)('<div><div>Mutation Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),[ea,ta]=(0,r.b)(null),[na,ra]=(0,r.b)(null),[oa,ia]=(0,r.b)(0),[la,aa]=(0,r.b)(!1),sa=e=>{const t=C(),n=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,o=(0,r.c)((()=>"dark"===t()?Ma(n):qa(n))),i=$(),l=(0,r.c)((()=>x().buttonPosition||"bottom-right")),a=(0,r.c)((()=>"true"===e.localStore.open||"false"!==e.localStore.open&&(x().initialIsOpen||false))),s=(0,r.c)((()=>e.localStore.position||x().position||h));let d;(0,r.e)((()=>{const t=d.parentElement,n=e.localStore.height||500,r=e.localStore.width||500,o=s();t.style.setProperty("--tsqd-panel-height",`${"top"===o?"-":""}${n}px`),t.style.setProperty("--tsqd-panel-width",`${"left"===o?"-":""}${r}px`)})),(0,r.p)((()=>{const e=()=>{const e=d.parentElement,t=getComputedStyle(e).fontSize;e.style.setProperty("--tsqd-font-size",t)};e(),window.addEventListener("focus",e),(0,r.n)((()=>{window.removeEventListener("focus",e)}))}));const c=(0,r.c)((()=>e.localStore.pip_open??"false"));return[(0,r.a)(r.S,{get when(){return(0,r.c)((()=>!!i().pipWindow))()&&"true"==c()},get children(){return(0,r.a)(r.P,{get mount(){var e;return null==(e=i().pipWindow)?void 0:e.document.body},get children(){return(0,r.a)(da,{get children(){return(0,r.a)(fa,e)}})}})}}),(u=wl(),f=d,"function"==typeof f?(0,r.q)(f,u):d=u,(0,r.r)(u,(0,r.a)(ae,{name:"tsqd-panel-transition",get children(){return(0,r.a)(r.S,{get when(){return(0,r.c)((()=>!(!a()||i().pipWindow)))()&&"false"==c()},get children(){return(0,r.a)(ua,{get localStore(){return e.localStore},get setLocalStore(){return e.setLocalStore}})}})}}),null),(0,r.r)(u,(0,r.a)(ae,{name:"tsqd-button-transition",get children(){return(0,r.a)(r.S,{get when(){return!a()},get children(){var t=xl(),n=t.firstChild,i=n.nextSibling;return(0,r.r)(n,(0,r.a)(Zi,{})),i.$$click=()=>e.setLocalStore("open","true"),(0,r.r)(i,(0,r.a)(Zi,{})),(0,r.j)((()=>(0,r.v)(t,Y(o().devtoolsBtn,o()[`devtoolsBtn-position-${l()}`],"tsqd-open-btn-container")))),t}})}}),null),(0,r.j)((()=>(0,r.v)(u,Y(n`
            & .tsqd-panel-transition-exit-active,
            & .tsqd-panel-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
            }

            & .tsqd-panel-transition-exit-to,
            & .tsqd-panel-transition-enter {
              ${"top"===s()||"bottom"===s()?"transform: translateY(var(--tsqd-panel-height));":"transform: translateX(var(--tsqd-panel-width));"}
            }

            & .tsqd-button-transition-exit-active,
            & .tsqd-button-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
              opacity: 1;
            }

            & .tsqd-button-transition-exit-to,
            & .tsqd-button-transition-enter {
              transform: ${"relative"===l()?"none;":"top-left"===l()?"translateX(-72px);":"top-right"===l()?"translateX(72px);":"translateY(72px);"};
              opacity: 0;
            }
          `,"tsqd-transitions-container")))),u)];var u,f},da=e=>{const t=$(),n=C(),o=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,i=(0,r.c)((()=>"dark"===n()?Ma(o):qa(o)));return(0,r.e)((()=>{const e=t().pipWindow,n=()=>{e&&ia(e.innerWidth)};e&&(e.addEventListener("resize",n),n()),(0,r.n)((()=>{e&&e.removeEventListener("resize",n)}))})),(l=wl()).style.setProperty("--tsqd-font-size","16px"),l.style.setProperty("max-height","100vh"),l.style.setProperty("height","100vh"),l.style.setProperty("width","100vw"),(0,r.r)(l,(()=>e.children)),(0,r.j)((()=>(0,r.v)(l,Y(i().panel,(()=>{const{colors:e}=ri,t=(e,t)=>"dark"===n()?t:e;return oa()<p?o`
        flex-direction: column;
        background-color: ${t(e.gray[300],e.gray[600])};
      `:o`
      flex-direction: row;
      background-color: ${t(e.gray[200],e.darkGray[900])};
    `})(),{[o`
            min-width: min-content;
          `]:oa()<700},"tsqd-main-panel")))),l;var l},ca=e=>{const t=C(),n=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,o=(0,r.c)((()=>"dark"===t()?Ma(n):qa(n)));let i;(0,r.p)((()=>{fe(i,((e,t)=>{let{width:n}=e;t===i&&ia(n)}))}));return l=wl(),"function"==typeof(a=i)?(0,r.q)(a,l):i=l,l.style.setProperty("--tsqd-font-size","16px"),(0,r.r)(l,(()=>e.children)),(0,r.j)((()=>(0,r.v)(l,Y(o().parentPanel,(()=>{const{colors:e}=ri,r=(e,n)=>"dark"===t()?n:e;return oa()<p?n`
        flex-direction: column;
        background-color: ${r(e.gray[300],e.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${r(e.gray[200],e.darkGray[900])};
    `})(),{[n`
            min-width: min-content;
          `]:oa()<700},"tsqd-main-panel")))),l;var l,a},ua=e=>{const t=C(),n=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,o=(0,r.c)((()=>"dark"===t()?Ma(n):qa(n))),[i,l]=(0,r.b)(!1),a=(0,r.c)((()=>e.localStore.position||x().position||h)),s=t=>{const n=t.currentTarget.parentElement;if(!n)return;l(!0);const{height:o,width:s}=n.getBoundingClientRect(),d=t.clientX,c=t.clientY;let u=0;const f=(0,r.K)(3.5),g=(0,r.K)(12),p=t=>{if(t.preventDefault(),"left"===a()||"right"===a()){const r="right"===a()?d-t.clientX:t.clientX-d;u=Math.round(s+r),u<g&&(u=g),e.setLocalStore("width",String(Math.round(u)));const o=n.getBoundingClientRect().width;Number(e.localStore.width)<o&&e.setLocalStore("width",String(o))}else{const n="bottom"===a()?c-t.clientY:t.clientY-c;u=Math.round(o+n),u<f&&(u=f,ta(null)),e.setLocalStore("height",String(Math.round(u)))}},h=()=>{i()&&l(!1),document.removeEventListener("mousemove",p,!1),document.removeEventListener("mouseUp",h,!1)};document.addEventListener("mousemove",p,!1),document.addEventListener("mouseup",h,!1)};let d;(0,r.p)((()=>{fe(d,((e,t)=>{let{width:n}=e;t===d&&ia(n)}))})),(0,r.e)((()=>{var t,n;const o=null==(n=null==(t=d.parentElement)?void 0:t.parentElement)?void 0:n.parentElement;if(!o)return;const i=e.localStore.position||h,l=(0,r.M)("padding",i),a="left"===e.localStore.position||"right"===e.localStore.position,s=(e=>{let{padding:t,paddingTop:n,paddingBottom:r,paddingLeft:o,paddingRight:i}=e;return{padding:t,paddingTop:n,paddingBottom:r,paddingLeft:o,paddingRight:i}})(o.style);o.style[l]=`${a?e.localStore.width:e.localStore.height}px`,(0,r.n)((()=>{Object.entries(s).forEach((e=>{let[t,n]=e;o.style[t]=n}))}))}));return c=kl(),u=c.firstChild,f=u.nextSibling,"function"==typeof(g=d)?(0,r.q)(g,c):d=c,u.$$mousedown=s,f.$$click=()=>e.setLocalStore("open","false"),(0,r.r)(f,(0,r.a)(Fi,{})),(0,r.r)(c,(0,r.a)(fa,e),null),(0,r.j)((i=>{var l=Y(o().panel,o()[`panel-position-${a()}`],(()=>{const{colors:e}=ri,r=(e,n)=>"dark"===t()?n:e;return oa()<p?n`
        flex-direction: column;
        background-color: ${r(e.gray[300],e.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${r(e.gray[200],e.darkGray[900])};
    `})(),{[n`
            min-width: min-content;
          `]:oa()<700&&("right"===a()||"left"===a())},"tsqd-main-panel"),s="bottom"===a()||"top"===a()?`${e.localStore.height||500}px`:"auto",d="right"===a()||"left"===a()?`${e.localStore.width||500}px`:"auto",g=Y(o().dragHandle,o()[`dragHandle-position-${a()}`],"tsqd-drag-handle"),h=Y(o().closeBtn,o()[`closeBtn-position-${a()}`],"tsqd-minimize-btn");return l!==i.e&&(0,r.v)(c,i.e=l),s!==i.t&&(null!=(i.t=s)?c.style.setProperty("height",s):c.style.removeProperty("height")),d!==i.a&&(null!=(i.a=d)?c.style.setProperty("width",d):c.style.removeProperty("width")),g!==i.o&&(0,r.v)(u,i.o=g),h!==i.i&&(0,r.v)(f,i.i=h),i}),{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),c;var c,u,f,g},fa=e=>{let t;wa(),Sa();const n=C(),o=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,i=(0,r.c)((()=>"dark"===n()?Ma(o):qa(o))),l=$(),[a,s]=(0,r.b)("queries"),d=(0,r.c)((()=>e.localStore.sort||y)),c=(0,r.c)((()=>Number(e.localStore.sortOrder)||1)),u=(0,r.c)((()=>e.localStore.mutationSort||b)),f=(0,r.c)((()=>Number(e.localStore.mutationSortOrder)||1)),g=(0,r.c)((()=>r.s[d()])),h=(0,r.c)((()=>r.m[u()])),v=(0,r.c)((()=>x().onlineManager)),m=(0,r.c)((()=>x().client.getQueryCache())),w=(0,r.c)((()=>x().client.getMutationCache())),k=ka((e=>e().getAll().length),!1),S=(0,r.c)((0,r.o)((()=>[k(),e.localStore.filter,d(),c()]),(()=>{const t=m().getAll(),n=e.localStore.filter?t.filter((t=>P(t.queryHash,e.localStore.filter||"").passed)):[...t];return g()?n.sort(((e,t)=>g()(e,t)*c())):n}))),E=Ca((e=>e().getAll().length),!1),q=(0,r.c)((0,r.o)((()=>[E(),e.localStore.mutationFilter,u(),f()]),(()=>{const t=w().getAll(),n=e.localStore.mutationFilter?t.filter((t=>P(`${t.options.mutationKey?JSON.stringify(t.options.mutationKey)+" - ":""}${new Date(t.state.submittedAt).toLocaleString()}`,e.localStore.mutationFilter||"").passed)):[...t];return h()?n.sort(((e,t)=>h()(e,t)*f())):n}))),M=t=>{e.setLocalStore("position",t)},F=e=>{const n=getComputedStyle(t).getPropertyValue("--tsqd-font-size");e.style.setProperty("--tsqd-font-size",n)};return[(D=Bl(),T=D.firstChild,z=T.firstChild,A=z.firstChild,O=A.firstChild,I=O.nextSibling,K=I.firstChild,R=T.nextSibling,B=R.firstChild,j=B.firstChild,G=j.firstChild,U=j.nextSibling,H=U.nextSibling,V=B.nextSibling,N=V.firstChild,W=N.nextSibling,Q=t,"function"==typeof Q?(0,r.q)(Q,D):t=D,A.$$click=()=>{l().pipWindow||e.showPanelViewOnly?e.onClose&&e.onClose():e.setLocalStore("open","false")},(0,r.r)(I,(()=>x().queryFlavor),K),(0,r.r)(I,(()=>x().version),null),(0,r.r)(z,(0,r.a)(qr.Root,{get class(){return Y(i().viewToggle)},get value(){return a()},onChange:e=>{s(e),ta(null),ra(null)},get children(){return[(0,r.a)(qr.Item,{value:"queries",class:"tsqd-radio-toggle",get children(){return[(0,r.a)(qr.ItemInput,{}),(0,r.a)(qr.ItemControl,{get children(){return(0,r.a)(qr.ItemIndicator,{})}}),(0,r.a)(qr.ItemLabel,{title:"Toggle Queries View",children:"Queries"})]}}),(0,r.a)(qr.Item,{value:"mutations",class:"tsqd-radio-toggle",get children(){return[(0,r.a)(qr.ItemInput,{}),(0,r.a)(qr.ItemControl,{get children(){return(0,r.a)(qr.ItemIndicator,{})}}),(0,r.a)(qr.ItemLabel,{title:"Toggle Mutations View",children:"Mutations"})]}})]}}),null),(0,r.r)(T,(0,r.a)(r.S,{get when(){return"queries"===a()},get children(){return(0,r.a)(ha,{})}}),null),(0,r.r)(T,(0,r.a)(r.S,{get when(){return"mutations"===a()},get children(){return(0,r.a)(va,{})}}),null),(0,r.r)(j,(0,r.a)(qi,{}),G),G.$$input=t=>{"queries"===a()?e.setLocalStore("filter",t.currentTarget.value):e.setLocalStore("mutationFilter",t.currentTarget.value)},(0,r.r)(U,(0,r.a)(r.S,{get when(){return"queries"===a()},get children(){var t=$l();return t.addEventListener("change",(t=>{e.setLocalStore("sort",t.currentTarget.value)})),(0,r.r)(t,(()=>Object.keys(r.s).map((e=>{return(t=jl()).firstChild,t.value=e,(0,r.r)(t,e,null),t;var t})))),(0,r.j)((()=>t.value=d())),t}}),null),(0,r.r)(U,(0,r.a)(r.S,{get when(){return"mutations"===a()},get children(){var t=Sl();return t.addEventListener("change",(t=>{e.setLocalStore("mutationSort",t.currentTarget.value)})),(0,r.r)(t,(()=>Object.keys(r.m).map((e=>{return(t=jl()).firstChild,t.value=e,(0,r.r)(t,e,null),t;var t})))),(0,r.j)((()=>t.value=u())),t}}),null),(0,r.r)(U,(0,r.a)(Fi,{}),null),H.$$click=()=>{"queries"===a()?e.setLocalStore("sortOrder",String(-1*c())):e.setLocalStore("mutationSortOrder",String(-1*f()))},(0,r.r)(H,(0,r.a)(r.S,{get when(){return 1===("queries"===a()?c():f())},get children(){return[Cl(),(0,r.a)(Li,{})]}}),null),(0,r.r)(H,(0,r.a)(r.S,{get when(){return-1===("queries"===a()?c():f())},get children(){return[El(),(0,r.a)(Di,{})]}}),null),N.$$click=()=>{"queries"===a()?m().clear():w().clear()},(0,r.r)(N,(0,r.a)(Mi,{})),W.$$click=()=>{la()?(v().setOnline(!0),aa(!1)):(v().setOnline(!1),aa(!0))},(0,r.r)(W,(L=(0,r.c)((()=>!!la())),()=>L()?(0,r.a)(Ki,{}):(0,r.a)(Pi,{}))),(0,r.r)(V,(0,r.a)(r.S,{get when(){return(0,r.c)((()=>!l().pipWindow))()&&!l().disabled},get children(){var t=ql();return t.$$click=()=>{l().requestPipWindow(Number(window.innerWidth),Number(e.localStore.height??500))},(0,r.r)(t,(0,r.a)(Bi,{})),(0,r.j)((()=>(0,r.v)(t,Y(i().actionsBtn,"tsqd-actions-btn","tsqd-action-open-pip")))),t}}),null),(0,r.r)(V,(0,r.a)(Jo.Root,{gutter:4,get children(){return[(0,r.a)(Jo.Trigger,{get class(){return Y(i().actionsBtn,"tsqd-actions-btn","tsqd-action-settings")},get children(){return(0,r.a)(Ri,{})}}),(0,r.a)(Jo.Portal,{ref:e=>F(e),get mount(){return(0,r.c)((()=>!!l().pipWindow))()?l().pipWindow.document.body:document.body},get children(){return(0,r.a)(Jo.Content,{get class(){return Y(i().settingsMenu,"tsqd-settings-menu")},get children(){return[(()=>{var e=Ml();return(0,r.j)((()=>(0,r.v)(e,Y(i().settingsMenuHeader,"tsqd-settings-menu-header")))),e})(),(0,r.a)(r.S,{get when(){return!e.showPanelViewOnly},get children(){return(0,r.a)(Jo.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[(0,r.a)(Jo.SubTrigger,{get class(){return Y(i().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[Fl(),(0,r.a)(Fi,{})]}}),(0,r.a)(Jo.Portal,{ref:e=>F(e),get mount(){return(0,r.c)((()=>!!l().pipWindow))()?l().pipWindow.document.body:document.body},get children(){return(0,r.a)(Jo.SubContent,{get class(){return Y(i().settingsMenu,"tsqd-settings-submenu")},get children(){return[(0,r.a)(Jo.Item,{onSelect:()=>{M("top")},as:"button",get class(){return Y(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[Ll(),(0,r.a)(Li,{})]}}),(0,r.a)(Jo.Item,{onSelect:()=>{M("bottom")},as:"button",get class(){return Y(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[Dl(),(0,r.a)(Di,{})]}}),(0,r.a)(Jo.Item,{onSelect:()=>{M("left")},as:"button",get class(){return Y(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[Tl(),(0,r.a)(Ti,{})]}}),(0,r.a)(Jo.Item,{onSelect:()=>{M("right")},as:"button",get class(){return Y(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-right")},get children(){return[zl(),(0,r.a)(zi,{})]}})]}})}})]}})}}),(0,r.a)(Jo.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[(0,r.a)(Jo.SubTrigger,{get class(){return Y(i().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[Al(),(0,r.a)(Fi,{})]}}),(0,r.a)(Jo.Portal,{ref:e=>F(e),get mount(){return(0,r.c)((()=>!!l().pipWindow))()?l().pipWindow.document.body:document.body},get children(){return(0,r.a)(Jo.SubContent,{get class(){return Y(i().settingsMenu,"tsqd-settings-submenu")},get children(){return[(0,r.a)(Jo.Item,{onSelect:()=>{e.setLocalStore("theme_preference","light")},as:"button",get class(){return Y(i().settingsSubButton,"light"===e.localStore.theme_preference&&i().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[Ol(),(0,r.a)(Ai,{})]}}),(0,r.a)(Jo.Item,{onSelect:()=>{e.setLocalStore("theme_preference","dark")},as:"button",get class(){return Y(i().settingsSubButton,"dark"===e.localStore.theme_preference&&i().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[Il(),(0,r.a)(Oi,{})]}}),(0,r.a)(Jo.Item,{onSelect:()=>{e.setLocalStore("theme_preference","system")},as:"button",get class(){return Y(i().settingsSubButton,"system"===e.localStore.theme_preference&&i().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[Pl(),(0,r.a)(Ii,{})]}})]}})}})]}})]}})}})]}}),null),(0,r.r)(D,(0,r.a)(r.S,{get when(){return"queries"===a()},get children(){var e=Kl(),t=e.firstChild;return(0,r.r)(t,(0,r.a)(ce,{by:e=>e.queryHash,get each(){return S()},children:e=>(0,r.a)(ga,{get query(){return e()}})})),(0,r.j)((()=>(0,r.v)(e,Y(i().overflowQueryContainer,"tsqd-queries-overflow-container")))),e}}),null),(0,r.r)(D,(0,r.a)(r.S,{get when(){return"mutations"===a()},get children(){var e=Rl(),t=e.firstChild;return(0,r.r)(t,(0,r.a)(ce,{by:e=>e.mutationId,get each(){return q()},children:e=>(0,r.a)(pa,{get mutation(){return e()}})})),(0,r.j)((()=>(0,r.v)(e,Y(i().overflowQueryContainer,"tsqd-mutations-overflow-container")))),e}}),null),(0,r.j)((e=>{var t=Y(i().queriesContainer,oa()<p&&(ea()||na())&&o`
              height: 50%;
              max-height: 50%;
            `,oa()<p&&!(ea()||na())&&o`
              height: 100%;
              max-height: 100%;
            `,"tsqd-queries-container"),n=Y(i().row,"tsqd-header"),l=i().logoAndToggleContainer,s=Y(i().logo,"tsqd-text-logo-container"),d=Y(i().tanstackLogo,"tsqd-text-logo-tanstack"),u=Y(i().queryFlavorLogo,"tsqd-text-logo-query-flavor"),g=Y(i().row,"tsqd-filters-actions-container"),h=Y(i().filtersContainer,"tsqd-filters-container"),v=Y(i().filterInput,"tsqd-query-filter-textfield-container"),y=Y("tsqd-query-filter-textfield"),b=Y(i().filterSelect,"tsqd-query-filter-sort-container"),m="Sort order "+(-1===("queries"===a()?c():f())?"descending":"ascending"),x=-1===("queries"===a()?c():f()),w=Y(i().actionsContainer,"tsqd-actions-container"),k=Y(i().actionsBtn,"tsqd-actions-btn","tsqd-action-clear-cache"),$=`Clear ${a()} cache`,S=Y(i().actionsBtn,la()&&i().actionsBtnOffline,"tsqd-actions-btn","tsqd-action-mock-offline-behavior"),C=la()?"Unset offline mocking behavior":"Mock offline behavior",E=la(),q=la()?"Unset offline mocking behavior":"Mock offline behavior";return t!==e.e&&(0,r.v)(D,e.e=t),n!==e.t&&(0,r.v)(T,e.t=n),l!==e.a&&(0,r.v)(z,e.a=l),s!==e.o&&(0,r.v)(A,e.o=s),d!==e.i&&(0,r.v)(O,e.i=d),u!==e.n&&(0,r.v)(I,e.n=u),g!==e.s&&(0,r.v)(R,e.s=g),h!==e.h&&(0,r.v)(B,e.h=h),v!==e.r&&(0,r.v)(j,e.r=v),y!==e.d&&(0,r.v)(G,e.d=y),b!==e.l&&(0,r.v)(U,e.l=b),m!==e.u&&(0,r.k)(H,"aria-label",e.u=m),x!==e.c&&(0,r.k)(H,"aria-pressed",e.c=x),w!==e.w&&(0,r.v)(V,e.w=w),k!==e.m&&(0,r.v)(N,e.m=k),$!==e.f&&(0,r.k)(N,"title",e.f=$),S!==e.y&&(0,r.v)(W,e.y=S),C!==e.g&&(0,r.k)(W,"aria-label",e.g=C),E!==e.p&&(0,r.k)(W,"aria-pressed",e.p=E),q!==e.b&&(0,r.k)(W,"title",e.b=q),e}),{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),(0,r.j)((()=>G.value="queries"===a()?e.localStore.filter||"":e.localStore.mutationFilter||"")),D),(0,r.a)(r.S,{get when(){return(0,r.c)((()=>"queries"===a()))()&&ea()},get children(){return(0,r.a)(ba,{})}}),(0,r.a)(r.S,{get when(){return(0,r.c)((()=>"mutations"===a()))()&&na()},get children(){return(0,r.a)(ma,{})}})];var L,D,T,z,A,O,I,K,R,B,j,G,U,H,V,N,W,Q},ga=e=>{const t=C(),n=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,o=(0,r.c)((()=>"dark"===t()?Ma(n):qa(n))),{colors:i,alpha:l}=ri,a=(e,n)=>"dark"===t()?n:e,s=ka((t=>{var n;return null==(n=t().find({queryKey:e.query.queryKey}))?void 0:n.state}),!0,(t=>t.query.queryHash===e.query.queryHash)),d=ka((t=>{var n;return(null==(n=t().find({queryKey:e.query.queryKey}))?void 0:n.isDisabled())??!1}),!0,(t=>t.query.queryHash===e.query.queryHash)),c=ka((t=>{var n;return(null==(n=t().find({queryKey:e.query.queryKey}))?void 0:n.isStale())??!1}),!0,(t=>t.query.queryHash===e.query.queryHash)),u=ka((t=>{var n;return(null==(n=t().find({queryKey:e.query.queryKey}))?void 0:n.getObserversCount())??0}),!0,(t=>t.query.queryHash===e.query.queryHash)),f=(0,r.c)((()=>(0,r.w)({queryState:s(),observerCount:u(),isStale:c()})));return(0,r.a)(r.S,{get when(){return s()},get children(){var t=Ul(),s=t.firstChild,c=s.nextSibling;return t.$$click=()=>ta(e.query.queryHash===ea()?null:e.query.queryHash),(0,r.r)(s,u),(0,r.r)(c,(()=>e.query.queryHash)),(0,r.r)(t,(0,r.a)(r.S,{get when(){return d()},get children(){return Gl()}}),null),(0,r.j)((d=>{var c=Y(o().queryRow,ea()===e.query.queryHash&&o().selectedQueryRow,"tsqd-query-row"),u=`Query key ${e.query.queryHash}`,g=Y("gray"===f()?n`
        background-color: ${a(i[f()][200],i[f()][700])};
        color: ${a(i[f()][700],i[f()][300])};
      `:n`
      background-color: ${a(i[f()][200]+l[80],i[f()][900])};
      color: ${a(i[f()][800],i[f()][300])};
    `,"tsqd-query-observer-count");return c!==d.e&&(0,r.v)(t,d.e=c),u!==d.t&&(0,r.k)(t,"aria-label",d.t=u),g!==d.a&&(0,r.v)(s,d.a=g),d}),{e:void 0,t:void 0,a:void 0}),t}})},pa=e=>{const t=C(),n=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,o=(0,r.c)((()=>"dark"===t()?Ma(n):qa(n))),{colors:i,alpha:l}=ri,a=(e,n)=>"dark"===t()?n:e,s=Ca((t=>{const n=t().getAll().find((t=>t.mutationId===e.mutation.mutationId));return null==n?void 0:n.state})),d=Ca((t=>{const n=t().getAll().find((t=>t.mutationId===e.mutation.mutationId));return!!n&&n.state.isPaused})),c=Ca((t=>{const n=t().getAll().find((t=>t.mutationId===e.mutation.mutationId));return n?n.state.status:"idle"})),u=(0,r.c)((()=>(0,r.x)({isPaused:d(),status:c()})));return(0,r.a)(r.S,{get when(){return s()},get children(){var t=Ul(),s=t.firstChild,d=s.nextSibling;return t.$$click=()=>{ra(e.mutation.mutationId===na()?null:e.mutation.mutationId)},(0,r.r)(s,(0,r.a)(r.S,{get when(){return"purple"===u()},get children(){return(0,r.a)(Xi,{})}}),null),(0,r.r)(s,(0,r.a)(r.S,{get when(){return"green"===u()},get children(){return(0,r.a)(Wi,{})}}),null),(0,r.r)(s,(0,r.a)(r.S,{get when(){return"red"===u()},get children(){return(0,r.a)(_i,{})}}),null),(0,r.r)(s,(0,r.a)(r.S,{get when(){return"yellow"===u()},get children(){return(0,r.a)(Qi,{})}}),null),(0,r.r)(d,(0,r.a)(r.S,{get when(){return e.mutation.options.mutationKey},get children(){return[(0,r.c)((()=>JSON.stringify(e.mutation.options.mutationKey)))," -"," "]}}),null),(0,r.r)(d,(()=>new Date(e.mutation.state.submittedAt).toLocaleString()),null),(0,r.j)((d=>{var c=Y(o().queryRow,na()===e.mutation.mutationId&&o().selectedQueryRow,"tsqd-query-row"),f=`Mutation submitted at ${new Date(e.mutation.state.submittedAt).toLocaleString()}`,g=Y("gray"===u()?n`
        background-color: ${a(i[u()][200],i[u()][700])};
        color: ${a(i[u()][700],i[u()][300])};
      `:n`
      background-color: ${a(i[u()][200]+l[80],i[u()][900])};
      color: ${a(i[u()][800],i[u()][300])};
    `,"tsqd-query-observer-count");return c!==d.e&&(0,r.v)(t,d.e=c),f!==d.t&&(0,r.k)(t,"aria-label",d.t=f),g!==d.a&&(0,r.v)(s,d.a=g),d}),{e:void 0,t:void 0,a:void 0}),t}})},ha=()=>{const e=ka((e=>e().getAll().filter((e=>"stale"===(0,r.N)(e))).length)),t=ka((e=>e().getAll().filter((e=>"fresh"===(0,r.N)(e))).length)),n=ka((e=>e().getAll().filter((e=>"fetching"===(0,r.N)(e))).length)),o=ka((e=>e().getAll().filter((e=>"paused"===(0,r.N)(e))).length)),i=ka((e=>e().getAll().filter((e=>"inactive"===(0,r.N)(e))).length)),l=C(),a=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,s=(0,r.c)((()=>"dark"===l()?Ma(a):qa(a)));return d=wl(),(0,r.r)(d,(0,r.a)(ya,{label:"Fresh",color:"green",get count(){return t()}}),null),(0,r.r)(d,(0,r.a)(ya,{label:"Fetching",color:"blue",get count(){return n()}}),null),(0,r.r)(d,(0,r.a)(ya,{label:"Paused",color:"purple",get count(){return o()}}),null),(0,r.r)(d,(0,r.a)(ya,{label:"Stale",color:"yellow",get count(){return e()}}),null),(0,r.r)(d,(0,r.a)(ya,{label:"Inactive",color:"gray",get count(){return i()}}),null),(0,r.j)((()=>(0,r.v)(d,Y(s().queryStatusContainer,"tsqd-query-status-container")))),d;var d},va=()=>{const e=Ca((e=>e().getAll().filter((e=>"green"===(0,r.x)({isPaused:e.state.isPaused,status:e.state.status}))).length)),t=Ca((e=>e().getAll().filter((e=>"yellow"===(0,r.x)({isPaused:e.state.isPaused,status:e.state.status}))).length)),n=Ca((e=>e().getAll().filter((e=>"purple"===(0,r.x)({isPaused:e.state.isPaused,status:e.state.status}))).length)),o=Ca((e=>e().getAll().filter((e=>"red"===(0,r.x)({isPaused:e.state.isPaused,status:e.state.status}))).length)),i=C(),l=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,a=(0,r.c)((()=>"dark"===i()?Ma(l):qa(l)));return s=wl(),(0,r.r)(s,(0,r.a)(ya,{label:"Paused",color:"purple",get count(){return n()}}),null),(0,r.r)(s,(0,r.a)(ya,{label:"Pending",color:"yellow",get count(){return t()}}),null),(0,r.r)(s,(0,r.a)(ya,{label:"Success",color:"green",get count(){return e()}}),null),(0,r.r)(s,(0,r.a)(ya,{label:"Error",color:"red",get count(){return o()}}),null),(0,r.j)((()=>(0,r.v)(s,Y(a().queryStatusContainer,"tsqd-query-status-container")))),s;var s},ya=e=>{const t=C(),n=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,o=(0,r.c)((()=>"dark"===t()?Ma(n):qa(n))),{colors:i,alpha:l}=ri,a=(e,n)=>"dark"===t()?n:e;let s;const[d,c]=(0,r.b)(!1),[u,f]=(0,r.b)(!1),g=(0,r.c)((()=>!(ea()&&oa()<1024&&oa()>p||oa()<p)));return h=Nl(),v=h.firstChild,y=v.nextSibling,"function"==typeof(b=s)?(0,r.q)(b,h):s=h,h.addEventListener("mouseleave",(()=>{c(!1),f(!1)})),h.addEventListener("mouseenter",(()=>c(!0))),h.addEventListener("blur",(()=>f(!1))),h.addEventListener("focus",(()=>f(!0))),(0,r.y)(h,(0,r.f)({get disabled(){return g()},get class(){return Y(o().queryStatusTag,!g()&&n`
            cursor: pointer;
            &:hover {
              background: ${a(i.gray[200],i.darkGray[400])}${l[80]};
            }
          `,"tsqd-query-status-tag",`tsqd-query-status-tag-${e.label.toLowerCase()}`)}},(()=>d()||u()?{"aria-describedby":"tsqd-status-tooltip"}:{})),!1,!0),(0,r.r)(h,(0,r.a)(r.S,{get when(){return(0,r.c)((()=>!g()))()&&(d()||u())},get children(){var t=Hl();return(0,r.r)(t,(()=>e.label)),(0,r.j)((()=>(0,r.v)(t,Y(o().statusTooltip,"tsqd-query-status-tooltip")))),t}}),v),(0,r.r)(h,(0,r.a)(r.S,{get when(){return g()},get children(){var t=Vl();return(0,r.r)(t,(()=>e.label)),(0,r.j)((()=>(0,r.v)(t,Y(o().queryStatusTagLabel,"tsqd-query-status-tag-label")))),t}}),y),(0,r.r)(y,(()=>e.count)),(0,r.j)((t=>{var l=Y(n`
            width: ${ri.size[1.5]};
            height: ${ri.size[1.5]};
            border-radius: ${ri.border.radius.full};
            background-color: ${ri.colors[e.color][500]};
          `,"tsqd-query-status-tag-dot"),s=Y(o().queryStatusCount,e.count>0&&"gray"!==e.color&&n`
              background-color: ${a(i[e.color][100],i[e.color][900])};
              color: ${a(i[e.color][700],i[e.color][300])};
            `,"tsqd-query-status-tag-count");return l!==t.e&&(0,r.v)(v,t.e=l),s!==t.t&&(0,r.v)(y,t.t=s),t}),{e:void 0,t:void 0}),h;var h,v,y,b},ba=()=>{const e=C(),t=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,n=(0,r.c)((()=>"dark"===e()?Ma(t):qa(t))),{colors:o}=ri,i=(t,n)=>"dark"===e()?n:t,l=x().client,[a,s]=(0,r.b)(!1),[d,c]=(0,r.b)("view"),[u,f]=(0,r.b)(!1),g=(0,r.c)((()=>x().errorTypes||[])),p=ka((e=>e().getAll().find((e=>e.queryHash===ea()))),!1),h=ka((e=>e().getAll().find((e=>e.queryHash===ea()))),!1),v=ka((e=>{var t;return null==(t=e().getAll().find((e=>e.queryHash===ea())))?void 0:t.state}),!1),y=ka((e=>{var t;return null==(t=e().getAll().find((e=>e.queryHash===ea())))?void 0:t.state.data}),!1),b=ka((e=>{const t=e().getAll().find((e=>e.queryHash===ea()));return t?(0,r.N)(t):"inactive"})),m=ka((e=>{const t=e().getAll().find((e=>e.queryHash===ea()));return t?t.state.status:"pending"})),w=ka((e=>{var t;return(null==(t=e().getAll().find((e=>e.queryHash===ea())))?void 0:t.getObserversCount())??0})),k=(0,r.c)((()=>(0,r.z)(b()))),$=()=>{var e;const t=null==(e=p())?void 0:e.fetch();null==t||t.catch((()=>{}))},S=e=>{const t=(null==e?void 0:e.initializer(p()))??new Error("Unknown error from devtools"),n=p().options;p().setState({status:"error",error:t,fetchMeta:{...p().state.fetchMeta,__previousQueryOptions:n}})};(0,r.e)((()=>{"fetching"!==b()&&s(!1)}));return(0,r.a)(r.S,{get when(){return(0,r.c)((()=>!!p()))()&&v()},get children(){var e=Zl(),x=e.firstChild,C=x.nextSibling,E=C.firstChild,q=E.firstChild,M=q.firstChild,F=q.nextSibling,L=E.nextSibling,D=L.firstChild.nextSibling,T=L.nextSibling.firstChild.nextSibling,z=C.nextSibling,A=z.nextSibling,O=A.firstChild,I=O.firstChild,P=O.nextSibling,K=P.firstChild,R=P.nextSibling,B=R.firstChild,j=R.nextSibling,G=j.firstChild,U=j.nextSibling,H=U.firstChild,V=H.nextSibling,N=A.nextSibling;N.firstChild;var W=N.nextSibling,Q=W.nextSibling;return(0,r.r)(M,(()=>(0,r.A)(p().queryKey,!0))),(0,r.r)(F,b),(0,r.r)(D,w),(0,r.r)(T,(()=>new Date(v().dataUpdatedAt).toLocaleTimeString())),O.$$click=$,P.$$click=()=>l.invalidateQueries(p()),R.$$click=()=>l.resetQueries(p()),j.$$click=()=>{l.removeQueries(p()),ta(null)},U.$$click=()=>{var e;if(void 0===(null==(e=p())?void 0:e.state.data))s(!0),(()=>{const e=p(),t=e.state,n=e.state.fetchMeta?e.state.fetchMeta.__previousQueryOptions:null;e.cancel({silent:!0}),e.setState({...t,fetchStatus:"idle",fetchMeta:null}),n&&e.fetch(n)})();else{const e=p();if(!e)return;const t=e.options;e.fetch({...t,queryFn:()=>new Promise((()=>{})),gcTime:-1}),e.setState({data:void 0,status:"pending",fetchMeta:{...e.state.fetchMeta,__previousQueryOptions:t}})}},(0,r.r)(U,(()=>"pending"===m()?"Restore":"Trigger"),V),(0,r.r)(A,(0,r.a)(r.S,{get when(){return 0===g().length||"error"===m()},get children(){var e=Wl(),n=e.firstChild,a=n.nextSibling;return e.$$click=()=>{p().state.error?l.resetQueries(p()):S()},(0,r.r)(e,(()=>"error"===m()?"Restore":"Trigger"),a),(0,r.j)((l=>{var a=Y(t`
                  color: ${i(o.red[500],o.red[400])};
                `,"tsqd-query-details-actions-btn","tsqd-query-details-action-error"),s="pending"===m(),d=t`
                  background-color: ${i(o.red[500],o.red[400])};
                `;return a!==l.e&&(0,r.v)(e,l.e=a),s!==l.t&&(e.disabled=l.t=s),d!==l.a&&(0,r.v)(n,l.a=d),l}),{e:void 0,t:void 0,a:void 0}),e}}),null),(0,r.r)(A,(0,r.a)(r.S,{get when(){return!(0===g().length||"error"===m())},get children(){var e=Ql(),o=e.firstChild,i=o.nextSibling.nextSibling;return i.firstChild,i.addEventListener("change",(e=>{const t=g().find((t=>t.name===e.currentTarget.value));S(t)})),(0,r.r)(i,(0,r.a)(r.F,{get each(){return g()},children:e=>{return t=Yl(),(0,r.r)(t,(()=>e.name)),(0,r.j)((()=>t.value=e.name)),t;var t}}),null),(0,r.r)(e,(0,r.a)(Fi,{}),null),(0,r.j)((l=>{var a=Y(n().actionsSelect,"tsqd-query-details-actions-btn","tsqd-query-details-action-error-multiple"),s=t`
                  background-color: ${ri.colors.red[400]};
                `,d="pending"===m();return a!==l.e&&(0,r.v)(e,l.e=a),s!==l.t&&(0,r.v)(o,l.t=s),d!==l.a&&(i.disabled=l.a=d),l}),{e:void 0,t:void 0,a:void 0}),e}}),null),(0,r.r)(N,(()=>"view"===d()?"Explorer":"Editor"),null),(0,r.r)(e,(0,r.a)(r.S,{get when(){return"view"===d()},get children(){var e=_l();return(0,r.r)(e,(0,r.a)(vl,{label:"Data",defaultExpanded:["Data"],get value(){return y()},editable:!0,onEdit:()=>c("edit"),get activeQuery(){return p()}})),(0,r.j)((t=>null!=(t=ri.size[2])?e.style.setProperty("padding",t):e.style.removeProperty("padding"))),e}}),W),(0,r.r)(e,(0,r.a)(r.S,{get when(){return"edit"===d()},get children(){var e=Xl(),l=e.firstChild,a=l.nextSibling,s=a.firstChild,d=s.nextSibling,g=d.firstChild,h=g.nextSibling;return e.addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(e.currentTarget).get("data");try{const e=JSON.parse(t);p().setState({...p().state,data:e}),c("view")}catch{f(!0)}})),l.addEventListener("focus",(()=>f(!1))),(0,r.r)(s,(()=>u()?"Invalid Value":"")),g.$$click=()=>c("view"),(0,r.j)((c=>{var f=Y(n().devtoolsEditForm,"tsqd-query-details-data-editor"),p=n().devtoolsEditTextarea,v=u(),y=n().devtoolsEditFormActions,b=n().devtoolsEditFormError,m=n().devtoolsEditFormActionContainer,x=Y(n().devtoolsEditFormAction,t`
                      color: ${i(o.gray[600],o.gray[300])};
                    `),w=Y(n().devtoolsEditFormAction,t`
                      color: ${i(o.blue[600],o.blue[400])};
                    `);return f!==c.e&&(0,r.v)(e,c.e=f),p!==c.t&&(0,r.v)(l,c.t=p),v!==c.a&&(0,r.k)(l,"data-error",c.a=v),y!==c.o&&(0,r.v)(a,c.o=y),b!==c.i&&(0,r.v)(s,c.i=b),m!==c.n&&(0,r.v)(d,c.n=m),x!==c.s&&(0,r.v)(g,c.s=x),w!==c.h&&(0,r.v)(h,c.h=w),c}),{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),(0,r.j)((()=>l.value=JSON.stringify(y(),null,2))),e}}),W),(0,r.r)(Q,(0,r.a)(vl,{label:"Query",defaultExpanded:["Query","queryKey"],get value(){return h()}})),(0,r.j)((l=>{var s=Y(n().detailsContainer,"tsqd-query-details-container"),d=Y(n().detailsHeader,"tsqd-query-details-header"),c=Y(n().detailsBody,"tsqd-query-details-summary-container"),u=Y(n().queryDetailsStatus,"gray"===k()?t`
        background-color: ${i(o[k()][200],o[k()][700])};
        color: ${i(o[k()][700],o[k()][300])};
        border-color: ${i(o[k()][400],o[k()][600])};
      `:t`
      background-color: ${i(o[k()][100],o[k()][900])};
      color: ${i(o[k()][700],o[k()][300])};
      border-color: ${i(o[k()][400],o[k()][600])};
    `),f=Y(n().detailsHeader,"tsqd-query-details-header"),g=Y(n().actionsBody,"tsqd-query-details-actions-container"),p=Y(t`
                color: ${i(o.blue[600],o.blue[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-refetch"),h="fetching"===b(),v=t`
                background-color: ${i(o.blue[600],o.blue[400])};
              `,y=Y(t`
                color: ${i(o.yellow[600],o.yellow[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-invalidate"),w="pending"===m(),$=t`
                background-color: ${i(o.yellow[600],o.yellow[400])};
              `,S=Y(t`
                color: ${i(o.gray[600],o.gray[300])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-reset"),E="pending"===m(),q=t`
                background-color: ${i(o.gray[600],o.gray[400])};
              `,M=Y(t`
                color: ${i(o.pink[500],o.pink[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-remove"),L="fetching"===b(),D=t`
                background-color: ${i(o.pink[500],o.pink[400])};
              `,T=Y(t`
                color: ${i(o.cyan[500],o.cyan[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-loading"),V=a(),_=t`
                background-color: ${i(o.cyan[500],o.cyan[400])};
              `,X=Y(n().detailsHeader,"tsqd-query-details-header"),Z=Y(n().detailsHeader,"tsqd-query-details-header"),J=ri.size[2];return s!==l.e&&(0,r.v)(e,l.e=s),d!==l.t&&(0,r.v)(x,l.t=d),c!==l.a&&(0,r.v)(C,l.a=c),u!==l.o&&(0,r.v)(F,l.o=u),f!==l.i&&(0,r.v)(z,l.i=f),g!==l.n&&(0,r.v)(A,l.n=g),p!==l.s&&(0,r.v)(O,l.s=p),h!==l.h&&(O.disabled=l.h=h),v!==l.r&&(0,r.v)(I,l.r=v),y!==l.d&&(0,r.v)(P,l.d=y),w!==l.l&&(P.disabled=l.l=w),$!==l.u&&(0,r.v)(K,l.u=$),S!==l.c&&(0,r.v)(R,l.c=S),E!==l.w&&(R.disabled=l.w=E),q!==l.m&&(0,r.v)(B,l.m=q),M!==l.f&&(0,r.v)(j,l.f=M),L!==l.y&&(j.disabled=l.y=L),D!==l.g&&(0,r.v)(G,l.g=D),T!==l.p&&(0,r.v)(U,l.p=T),V!==l.b&&(U.disabled=l.b=V),_!==l.T&&(0,r.v)(H,l.T=_),X!==l.A&&(0,r.v)(N,l.A=X),Z!==l.O&&(0,r.v)(W,l.O=Z),J!==l.I&&(null!=(l.I=J)?Q.style.setProperty("padding",J):Q.style.removeProperty("padding")),l}),{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0,T:void 0,A:void 0,O:void 0,I:void 0}),e}})},ma=()=>{const e=C(),t=x().shadowDOMTarget?X.bind({target:x().shadowDOMTarget}):X,n=(0,r.c)((()=>"dark"===e()?Ma(t):qa(t))),{colors:o}=ri,i=(t,n)=>"dark"===e()?n:t,l=Ca((e=>{const t=e().getAll().find((e=>e.mutationId===na()));return!!t&&t.state.isPaused})),a=Ca((e=>{const t=e().getAll().find((e=>e.mutationId===na()));return t?t.state.status:"idle"})),s=(0,r.c)((()=>(0,r.x)({isPaused:l(),status:a()}))),d=Ca((e=>e().getAll().find((e=>e.mutationId===na()))),!1);return(0,r.a)(r.S,{get when(){return d()},get children(){var e=Jl(),l=e.firstChild,c=l.nextSibling,u=c.firstChild,f=u.firstChild,g=f.firstChild,p=f.nextSibling,h=u.nextSibling.firstChild.nextSibling,v=c.nextSibling,y=v.nextSibling,b=y.nextSibling,m=b.nextSibling,x=m.nextSibling,w=x.nextSibling,k=w.nextSibling,$=k.nextSibling;return(0,r.r)(g,(0,r.a)(r.S,{get when(){return d().options.mutationKey},fallback:"No mutationKey found",get children(){return(0,r.A)(d().options.mutationKey,!0)}})),(0,r.r)(p,(0,r.a)(r.S,{get when(){return"purple"===s()},children:"pending"}),null),(0,r.r)(p,(0,r.a)(r.S,{get when(){return"purple"!==s()},get children(){return a()}}),null),(0,r.r)(h,(()=>new Date(d().state.submittedAt).toLocaleTimeString())),(0,r.r)(y,(0,r.a)(vl,{label:"Variables",defaultExpanded:["Variables"],get value(){return d().state.variables}})),(0,r.r)(m,(0,r.a)(vl,{label:"Context",defaultExpanded:["Context"],get value(){return d().state.context}})),(0,r.r)(w,(0,r.a)(vl,{label:"Data",defaultExpanded:["Data"],get value(){return d().state.data}})),(0,r.r)($,(0,r.a)(vl,{label:"Mutation",defaultExpanded:["Mutation"],get value(){return d()}})),(0,r.j)((a=>{var d=Y(n().detailsContainer,"tsqd-query-details-container"),u=Y(n().detailsHeader,"tsqd-query-details-header"),f=Y(n().detailsBody,"tsqd-query-details-summary-container"),g=Y(n().queryDetailsStatus,"gray"===s()?t`
        background-color: ${i(o[s()][200],o[s()][700])};
        color: ${i(o[s()][700],o[s()][300])};
        border-color: ${i(o[s()][400],o[s()][600])};
      `:t`
      background-color: ${i(o[s()][100],o[s()][900])};
      color: ${i(o[s()][700],o[s()][300])};
      border-color: ${i(o[s()][400],o[s()][600])};
    `),h=Y(n().detailsHeader,"tsqd-query-details-header"),S=ri.size[2],C=Y(n().detailsHeader,"tsqd-query-details-header"),E=ri.size[2],q=Y(n().detailsHeader,"tsqd-query-details-header"),M=ri.size[2],F=Y(n().detailsHeader,"tsqd-query-details-header"),L=ri.size[2];return d!==a.e&&(0,r.v)(e,a.e=d),u!==a.t&&(0,r.v)(l,a.t=u),f!==a.a&&(0,r.v)(c,a.a=f),g!==a.o&&(0,r.v)(p,a.o=g),h!==a.i&&(0,r.v)(v,a.i=h),S!==a.n&&(null!=(a.n=S)?y.style.setProperty("padding",S):y.style.removeProperty("padding")),C!==a.s&&(0,r.v)(b,a.s=C),E!==a.h&&(null!=(a.h=E)?m.style.setProperty("padding",E):m.style.removeProperty("padding")),q!==a.r&&(0,r.v)(x,a.r=q),M!==a.d&&(null!=(a.d=M)?w.style.setProperty("padding",M):w.style.removeProperty("padding")),F!==a.l&&(0,r.v)(k,a.l=F),L!==a.u&&(null!=(a.u=L)?$.style.setProperty("padding",L):$.style.removeProperty("padding")),a}),{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),e}})},xa=new Map,wa=()=>{const e=(0,r.c)((()=>x().client.getQueryCache())),t=e().subscribe((t=>{(0,r.B)((()=>{for(const[n,r]of xa.entries())r.shouldUpdate(t)&&r.setter(n(e))}))}));return(0,r.n)((()=>{xa.clear(),t()})),t},ka=function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=()=>!0);const o=(0,r.c)((()=>x().client.getQueryCache())),[i,l]=(0,r.b)(e(o),t?void 0:{equals:!1});return(0,r.e)((()=>{l(e(o))})),xa.set(e,{setter:l,shouldUpdate:n}),(0,r.n)((()=>{xa.delete(e)})),i},$a=new Map,Sa=()=>{const e=(0,r.c)((()=>x().client.getMutationCache())),t=e().subscribe((()=>{for(const[t,n]of $a.entries())queueMicrotask((()=>{n(t(e))}))}));return(0,r.n)((()=>{$a.clear(),t()})),t},Ca=function(e,t){void 0===t&&(t=!0);const n=(0,r.c)((()=>x().client.getMutationCache())),[o,i]=(0,r.b)(e(n),t?void 0:{equals:!1});return(0,r.e)((()=>{i(e(n))})),$a.set(e,i),(0,r.n)((()=>{$a.delete(e)})),o},Ea=(e,t)=>{const{colors:n,font:r,size:o,alpha:i,shadow:l,border:a}=ri,s=(t,n)=>"light"===e?t:n;return{devtoolsBtn:t`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${l.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${n.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `,panel:t`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${ri.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${s(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${s(n.gray[400],n.darkGray[300])};
      }
    `,parentPanel:t`
      z-index: 9999;
      display: flex;
      height: 100%;
      gap: ${ri.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${s(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${s(n.gray[400],n.darkGray[300])};
      }
    `,"devtoolsBtn-position-bottom-right":t`
      bottom: 12px;
      right: 12px;
    `,"devtoolsBtn-position-bottom-left":t`
      bottom: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-left":t`
      top: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-right":t`
      top: 12px;
      right: 12px;
    `,"devtoolsBtn-position-relative":t`
      position: relative;
    `,"panel-position-top":t`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-bottom: ${s(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-bottom":t`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-top: ${s(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-right":t`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,"panel-position-left":t`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,closeBtn:t`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${s(n.gray[50],n.darkGray[700])};
      &:hover {
        background-color: ${s(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${n.blue[600]};
      }
      & svg {
        color: ${s(n.gray[600],n.gray[400])};
        width: ${o[2]};
        height: ${o[2]};
      }
    `,"closeBtn-position-top":t`
      bottom: 0;
      right: ${o[2]};
      transform: translate(0, 100%);
      border-right: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px 0px ${a.radius.sm} ${a.radius.sm};
      padding: ${o[.5]} ${o[1.5]} ${o[1]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `,"closeBtn-position-bottom":t`
      top: 0;
      right: ${o[2]};
      transform: translate(0, -100%);
      border-right: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: none;
      border-radius: ${a.radius.sm} ${a.radius.sm} 0px 0px;
      padding: ${o[1]} ${o[1.5]} ${o[.5]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }
    `,"closeBtn-position-right":t`
      bottom: ${o[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: ${a.radius.sm} 0px 0px ${a.radius.sm};
      padding: ${o[1.5]} ${o[.5]} ${o[1.5]} ${o[1]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `,"closeBtn-position-left":t`
      bottom: ${o[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px ${a.radius.sm} ${a.radius.sm} 0px;
      padding: ${o[1.5]} ${o[1]} ${o[1.5]} ${o[.5]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `,queriesContainer:t`
      flex: 1 1 700px;
      background-color: ${s(n.gray[50],n.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
    `,dragHandle:t`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${n.purple[400]}${s("",i[90])};
      }
      z-index: 4;
    `,"dragHandle-position-top":t`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-bottom":t`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-right":t`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,"dragHandle-position-left":t`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,row:t`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${ri.size[2]} ${ri.size[2.5]};
      gap: ${ri.size[2.5]};
      border-bottom: ${s(n.gray[300],n.darkGray[500])} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        gap: ${o[.5]};
        flex-direction: column;
      }
    `,logoAndToggleContainer:t`
      display: flex;
      gap: ${ri.size[3]};
      align-items: center;
    `,logo:t`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${ri.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,tanstackLogo:t`
      font-size: ${r.size.md};
      font-weight: ${r.weight.bold};
      line-height: ${r.lineHeight.xs};
      white-space: nowrap;
      color: ${s(n.gray[600],n.gray[300])};
    `,queryFlavorLogo:t`
      font-weight: ${r.weight.semibold};
      font-size: ${r.size.xs};
      background: linear-gradient(
        to right,
        ${s("#ea4037, #ff9b11","#dd524b, #e9a03b")}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,queryStatusContainer:t`
      display: flex;
      gap: ${ri.size[2]};
      height: min-content;
    `,queryStatusTag:t`
      display: flex;
      gap: ${ri.size[1.5]};
      box-sizing: border-box;
      height: ${ri.size[6.5]};
      background: ${s(n.gray[50],n.darkGray[500])};
      color: ${s(n.gray[700],n.gray[300])};
      border-radius: ${ri.border.radius.sm};
      font-size: ${r.size.sm};
      padding: ${ri.size[1]};
      padding-left: ${ri.size[1.5]};
      align-items: center;
      font-weight: ${r.weight.medium};
      border: ${s("1px solid "+n.gray[300],"1px solid transparent")};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,queryStatusTagLabel:t`
      font-size: ${r.size.xs};
    `,queryStatusCount:t`
      font-size: ${r.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${s(n.gray[500],n.gray[400])};
      background-color: ${s(n.gray[200],n.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${ri.size[4.5]};
    `,statusTooltip:t`
      position: absolute;
      z-index: 1;
      background-color: ${s(n.gray[50],n.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${ri.size[2]}));
      padding: ${ri.size[.5]} ${ri.size[2]};
      border-radius: ${ri.border.radius.sm};
      font-size: ${r.size.xs};
      border: 1px solid ${s(n.gray[400],n.gray[600])};
      color: ${s(n.gray[600],n.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${s(n.gray[400],n.gray[600])} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2px));
        position: absolute;
        border-color: transparent transparent
          ${s(n.gray[100],n.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,filtersContainer:t`
      display: flex;
      gap: ${ri.size[2]};
      & > button {
        cursor: pointer;
        padding: ${ri.size[.5]} ${ri.size[1.5]} ${ri.size[.5]}
          ${ri.size[2]};
        border-radius: ${ri.border.radius.sm};
        background-color: ${s(n.gray[100],n.darkGray[400])};
        border: 1px solid ${s(n.gray[300],n.darkGray[200])};
        color: ${s(n.gray[700],n.gray[300])};
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        line-height: ${r.lineHeight.sm};
        gap: ${ri.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${a.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        & svg {
          width: ${ri.size[3]};
          height: ${ri.size[3]};
          color: ${s(n.gray[500],n.gray[400])};
        }
      }
    `,filterInput:t`
      padding: ${o[.5]} ${o[2]};
      border-radius: ${ri.border.radius.sm};
      background-color: ${s(n.gray[100],n.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${ri.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${s(n.gray[300],n.darkGray[200])};
      height: min-content;
      color: ${s(n.gray[600],n.gray[400])};
      & > svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      & input {
        font-size: ${r.size.xs};
        width: 100%;
        background-color: ${s(n.gray[100],n.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${r.lineHeight.sm};
        color: ${s(n.gray[700],n.gray[300])};
        &::placeholder {
          color: ${s(n.gray[700],n.gray[300])};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,filterSelect:t`
      padding: ${ri.size[.5]} ${ri.size[2]};
      border-radius: ${ri.border.radius.sm};
      background-color: ${s(n.gray[100],n.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${ri.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${s(n.gray[300],n.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${s(n.gray[600],n.gray[400])};
        width: ${ri.size[2]};
        height: ${ri.size[2]};
      }
      & > select {
        appearance: none;
        color: ${s(n.gray[700],n.gray[300])};
        min-width: 100px;
        line-height: ${r.lineHeight.sm};
        font-size: ${r.size.xs};
        background-color: ${s(n.gray[100],n.darkGray[400])};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsContainer:t`
      display: flex;
      gap: ${ri.size[2]};
    `,actionsBtn:t`
      border-radius: ${ri.border.radius.sm};
      background-color: ${s(n.gray[100],n.darkGray[400])};
      border: 1px solid ${s(n.gray[300],n.darkGray[200])};
      width: ${ri.size[6.5]};
      height: ${ri.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${ri.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${s(n.gray[200],n.darkGray[500])};
      }
      & svg {
        color: ${s(n.gray[700],n.gray[300])};
        width: ${ri.size[3]};
        height: ${ri.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsBtnOffline:t`
      & svg {
        stroke: ${s(n.yellow[700],n.yellow[500])};
        fill: ${s(n.yellow[700],n.yellow[500])};
      }
    `,overflowQueryContainer:t`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,queryRow:t`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${s(n.gray[700],n.gray[300])};
      background-color: ${s(n.gray[50],n.darkGray[700])};
      line-height: 1;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover .tsqd-query-hash {
        background-color: ${s(n.gray[200],n.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${ri.size[1]};
        user-select: none;
        min-width: ${ri.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${r.size.xs};
        font-weight: ${r.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${s(n.gray[300],n.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        min-height: ${ri.size[6]};
        flex: 1;
        padding: ${ri.size[1]} ${ri.size[2]};
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        border-bottom: 1px solid ${s(n.gray[300],n.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${ri.size[2]};
        color: ${s(n.gray[800],n.gray[300])};
        background-color: ${s(n.gray[300],n.darkGray[600])};
        border-bottom: 1px solid ${s(n.gray[300],n.darkGray[400])};
        font-size: ${r.size.xs};
      }
    `,selectedQueryRow:t`
      background-color: ${s(n.gray[200],n.darkGray[500])};
    `,detailsContainer:t`
      flex: 1 1 700px;
      background-color: ${s(n.gray[50],n.darkGray[700])};
      color: ${s(n.gray[700],n.gray[300])};
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `,detailsHeader:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${s(n.gray[200],n.darkGray[600])};
      padding: ${ri.size[1.5]} ${ri.size[2]};
      font-weight: ${r.weight.medium};
      font-size: ${r.size.xs};
      line-height: ${r.lineHeight.xs};
      text-align: left;
    `,detailsBody:t`
      margin: ${ri.size[1.5]} 0px ${ri.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${ri.size[2]};
        line-height: ${r.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${r.size.xs};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${ri.size[1.5]};
      }

      & code {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        margin: 0;
        font-size: ${r.size.xs};
        line-height: ${r.lineHeight.xs};
      }

      & pre {
        margin: 0;
        display: flex;
        align-items: center;
      }
    `,queryDetailsStatus:t`
      border: 1px solid ${n.darkGray[200]};
      border-radius: ${ri.border.radius.sm};
      font-weight: ${r.weight.medium};
      padding: ${ri.size[1]} ${ri.size[2.5]};
    `,actionsBody:t`
      flex-wrap: wrap;
      margin: ${ri.size[2]} 0px ${ri.size[2]} 0px;
      display: flex;
      gap: ${ri.size[2]};
      padding: 0px ${ri.size[2]};
      & > button {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
        font-size: ${r.size.xs};
        padding: ${ri.size[1]} ${ri.size[2]};
        display: flex;
        border-radius: ${ri.border.radius.sm};
        background-color: ${s(n.gray[100],n.darkGray[600])};
        border: 1px solid ${s(n.gray[300],n.darkGray[400])};
        align-items: center;
        gap: ${ri.size[2]};
        font-weight: ${r.weight.medium};
        line-height: ${r.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${a.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        &:hover {
          background-color: ${s(n.gray[200],n.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${o[1.5]};
          height: ${o[1.5]};
          border-radius: ${ri.border.radius.full};
        }
      }
    `,actionsSelect:t`
      font-size: ${r.size.xs};
      padding: ${ri.size[.5]} ${ri.size[2]};
      display: flex;
      border-radius: ${ri.border.radius.sm};
      overflow: hidden;
      background-color: ${s(n.gray[100],n.darkGray[600])};
      border: 1px solid ${s(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${ri.size[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.sm};
      color: ${s(n.red[500],n.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${s(n.gray[200],n.darkGray[500])};
      }
      & > span {
        width: ${o[1.5]};
        height: ${o[1.5]};
        border-radius: ${ri.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${ri.colors.red[400]};
      }
      & svg {
        width: ${ri.size[2]};
        height: ${ri.size[2]};
      }
    `,settingsMenu:t`
      display: flex;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
      flex-direction: column;
      gap: ${o[.5]};
      border-radius: ${ri.border.radius.sm};
      border: 1px solid ${s(n.gray[300],n.gray[700])};
      background-color: ${s(n.gray[50],n.darkGray[600])};
      font-size: ${r.size.xs};
      color: ${s(n.gray[700],n.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${o[.5]};
    `,settingsSubTrigger:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${ri.border.radius.xs};
      padding: ${ri.size[1]} ${ri.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${s(n.gray[700],n.gray[300])};
      & svg {
        color: ${s(n.gray[600],n.gray[400])};
        transform: rotate(-90deg);
        width: ${ri.size[2]};
        height: ${ri.size[2]};
      }
      &:hover {
        background-color: ${s(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
      &.data-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,settingsMenuHeader:t`
      padding: ${ri.size[1]} ${ri.size[1]};
      font-weight: ${r.weight.medium};
      border-bottom: 1px solid ${s(n.gray[300],n.darkGray[400])};
      color: ${s(n.gray[500],n.gray[400])};
      font-size: ${r.size.xs};
    `,settingsSubButton:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${s(n.gray[700],n.gray[300])};
      font-size: ${r.size.xs};
      border-radius: ${ri.border.radius.xs};
      padding: ${ri.size[1]} ${ri.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${s(n.gray[600],n.gray[400])};
      }
      &:hover {
        background-color: ${s(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,themeSelectedButton:t`
      background-color: ${s(n.purple[100],n.purple[900])};
      color: ${s(n.purple[700],n.purple[300])};
      & svg {
        color: ${s(n.purple[700],n.purple[300])};
      }
      &:hover {
        background-color: ${s(n.purple[100],n.purple[900])};
      }
    `,viewToggle:t`
      border-radius: ${ri.border.radius.sm};
      background-color: ${s(n.gray[200],n.darkGray[600])};
      border: 1px solid ${s(n.gray[300],n.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${r.size.xs};
      color: ${s(n.gray[700],n.gray[300])};
      overflow: hidden;

      &:has(:focus-visible) {
        outline: 2px solid ${n.blue[800]};
      }

      & .tsqd-radio-toggle {
        opacity: 0.5;
        display: flex;
        & label {
          display: flex;
          align-items: center;
          cursor: pointer;
          line-height: ${r.lineHeight.md};
        }

        & label:hover {
          background-color: ${s(n.gray[100],n.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${s(n.gray[100],n.darkGray[400])};
        & label:hover {
          background-color: ${s(n.gray[100],n.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${ri.size[1.5]} 0 ${ri.size[2]};
        }
        border-right: 1px solid ${s(n.gray[300],n.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${ri.size[2]} 0 ${ri.size[1.5]};
        }
      }
    `,devtoolsEditForm:t`
      padding: ${o[2]};
      & > [data-error='true'] {
        outline: 2px solid ${s(n.red[200],n.red[800])};
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
      }
    `,devtoolsEditTextarea:t`
      width: 100%;
      max-height: 500px;
      font-family: 'Fira Code', monospace;
      font-size: ${r.size.xs};
      border-radius: ${a.radius.sm};
      field-sizing: content;
      padding: ${o[2]};
      background-color: ${s(n.gray[100],n.darkGray[800])};
      color: ${s(n.gray[900],n.gray[100])};
      border: 1px solid ${s(n.gray[200],n.gray[700])};
      resize: none;
      &:focus {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${s(n.blue[200],n.blue[800])};
      }
    `,devtoolsEditFormActions:t`
      display: flex;
      justify-content: space-between;
      gap: ${o[2]};
      align-items: center;
      padding-top: ${o[1]};
      font-size: ${r.size.xs};
    `,devtoolsEditFormError:t`
      color: ${s(n.red[700],n.red[500])};
    `,devtoolsEditFormActionContainer:t`
      display: flex;
      gap: ${o[2]};
    `,devtoolsEditFormAction:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      font-size: ${r.size.xs};
      padding: ${o[1]} ${ri.size[2]};
      display: flex;
      border-radius: ${a.radius.sm};
      background-color: ${s(n.gray[100],n.darkGray[600])};
      border: 1px solid ${s(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${o[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.xs};
      cursor: pointer;
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover {
        background-color: ${s(n.gray[200],n.darkGray[500])};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `}},qa=e=>Ea("light",e),Ma=e=>Ea("dark",e);(0,r.d)(["click","mousedown","input"])},5597:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(3755),o=n(7610),i=e=>{const[t,n]=(0,r.c)({prefix:"TanstackQueryDevtools"}),i=(0,o.g)(),l=(0,o.c)((()=>{const e=t.theme_preference||r.T;return"system"!==e?e:i()}));return(0,o.a)(r.Q.Provider,{value:e,get children(){return(0,o.a)(r.P,{disabled:!0,localStore:t,setLocalStore:n,get children(){return(0,o.a)(r.a.Provider,{value:l,get children(){return(0,o.a)(r.b,{get children(){return(0,o.a)(r.C,{localStore:t,setLocalStore:n,get onClose(){return e.onClose},showPanelViewOnly:!0})}})}})}})}})}}}]);