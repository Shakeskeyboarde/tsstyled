"use strict";(self.webpackChunktsstyled=self.webpackChunktsstyled||[]).push([[179],{4175:(e,n,t)=>{var r={};t.r(r),t.d(r,{name:()=>S,render:()=>z,type:()=>N});var o={};t.r(o),t.d(o,{name:()=>D,render:()=>W,type:()=>F});var l={};t.r(l),t.d(l,{name:()=>I,render:()=>R,type:()=>T});var i={};t.r(i),t.d(i,{Box:()=>V,Dot:()=>U,name:()=>X});var s={};t.r(s),t.d(s,{Box:()=>G,Dot:()=>K,name:()=>Q});var a={};t.r(a),t.d(a,{Box:()=>ye,Dot:()=>we,name:()=>je});var c={};t.r(c),t.d(c,{Box:()=>ke,Dot:()=>$e,name:()=>_e}),t(2262),t(7635),t(7287),t(6699),t(7658),t(541),t(6314),t(2087),t(4506),t(8675),t(3408),t(4590),t(2801),t(4633),t(1295);var d=t(735),A=(t(9232),t(3379)),u=t.n(A),p=t(7795),m=t.n(p),f=t(569),h=t.n(f),b=t(3565),g=t.n(b),x=t(9216),B=t.n(x),C=t(4589),E=t.n(C),y=t(8878),v={};v.styleTagTransform=E(),v.setAttributes=g(),v.insert=h().bind(null,"head"),v.domAPI=m(),v.insertStyleElement=B(),u()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;var w=t(6116),j=t(5466),k=t(6567);const $=["#14171A","#AAB8C2","#E6ECF0","#FFAD1F","#F45D22","#E0245E"],_=function(e,n){const t=Array.from({length:e});for(let r=e-1;r>=0;r--)t[r]=n(r);return t},O=e=>{let{breadth:n,depth:t,wrap:r,colorIndex:o=0,Box:l}=e,i=(0,d.jsxs)(l,Object.assign({$color:$[o%3],$layout:t%2==0?"column":"row",$outer:!0},{children:[0===t&&(0,d.jsx)(l,{$color:$[o%3+3],$fixed:!0}),0!==t&&_(n,(e=>(0,d.jsx)(O,{breadth:n,Box:l,depth:t-1,colorIndex:e,wrap:r},e)))]}));for(let e=0;e<r;e++)i=(0,d.jsx)(l,Object.assign({$color:$[0]},{children:i}));return i},S="Mount deep tree",N="mount",z=e=>{let{Box:n}=e;return(0,d.jsx)(O,{breadth:2,depth:7,Box:n,wrap:1})},D="Mount wide tree",F="mount",W=e=>{let{Box:n}=e;return(0,d.jsx)(O,{breadth:6,depth:3,Box:n,wrap:2})};var Z=t(7572),L=t(3654),Y=t(5409);const q=e=>{let{Dot:n,depth:t=0,renderCount:r=0,s:o=200,x:l=0,y:i=0}=e;if(o<=10){let e;switch(t){case 1:e=Z.Z;break;case 2:e=L.Z;break;default:e=Y.Z}const o=e(r*Math.random()/20);return(0,d.jsx)(n,{$color:o,$size:10,$x:l-5,$y:i-5})}return o/=2,(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(q,{Dot:n,depth:1,renderCount:r,s:o,x:l,y:i-o/2}),(0,d.jsx)(q,{Dot:n,depth:2,renderCount:r,s:o,x:l-o,y:i+o/2}),(0,d.jsx)(q,{Dot:n,depth:3,renderCount:r,s:o,x:l+o,y:i+o/2})]})},I="Dynamic style updates",T="update",R=(e,n)=>{let{Dot:t}=e;return(0,d.jsx)(q,{Dot:t,renderCount:n,s:200,x:0,y:0})},M={[S]:r,[D]:o,[I]:l},P=e=>{var n;return(0,d.jsx)("div",Object.assign({style:Object.assign({alignItems:"stretch",borderStyle:"solid",borderWidth:0,boxSizing:"border-box",display:"flex",flexBasis:"auto",flexDirection:"column",flexShrink:0,margin:0,minHeight:0,minWidth:0,padding:0,position:"relative"},null!==(n=e.style)&&void 0!==n?n:{})},{children:e.children}))},V=e=>{let{$layout:n,$outer:t=!1,$fixed:r=!1,$color:o,children:l}=e;return(0,d.jsx)(P,Object.assign({style:{alignSelf:"flex-start",backgroundColor:o,flexDirection:"column"===n?"column":"row",height:r?"6px":void 0,padding:t?"4px":0,width:r?"6px":void 0}},{children:l}))},U=e=>(0,d.jsx)(P,Object.assign({style:{borderBottomColor:e.$color,borderBottomWidth:e.$size/2+"px",borderColor:"transparent",borderLeftWidth:e.$size/2+"px",borderRightWidth:e.$size/2+"px",borderStyle:"solid",borderTopWidth:0,cursor:"pointer",height:0,marginLeft:`${e.$x}px`,marginTop:`${e.$y}px`,position:"absolute",transform:"translate(50%, 50%)",width:0}},{children:e.children})),X="inline-styles";var H=t(2213);const J=(0,H.ZP)("div")`
  align-items: stretch;
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  position: relative;
  min-height: 0;
  min-width: 0;
`,G=(0,H.ZP)(J)`
  align-self: flex-start;
  flex-direction: ${e=>"column"===e.$layout?"column":"row"};
  padding: ${e=>{let{$outer:n=!1}=e;return n?"4px":"0"}};
  height: ${e=>{let{$fixed:n=!1}=e;return n?"6px":null}};
  width: ${e=>{let{$fixed:n=!1}=e;return n?"6px":null}};
  background-color: ${e=>e.$color};
`,K=(0,H.ZP)(J).attrs((e=>({style:{borderBottomColor:e.$color}})))`
  position: absolute;
  cursor: pointer;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-top-width: 0;
  transform: translate(50%, 50%);
  margin-left: ${e=>`${e.$x}px`};
  margin-top: ${e=>`${e.$y}px`};
  border-right-width: ${e=>e.$size/2+"px"};
  border-bottom-width: ${e=>e.$size/2+"px"};
  border-left-width: ${e=>e.$size/2+"px"};
`,Q="styled-components",ee=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];const r={extend:e=>ee(r,e),getString:function(e){let t="";for(var r=arguments.length,o=new Array(r>1?r-1:0),l=1;l<r;l++)o[l-1]=arguments[l];for(let r=n.length-1;r>=0;r--)t=n[r].getString(e,...o)+"\n"+t;return t}};return r},ne=(e,n)=>{const[t,r]=((e,n)=>{const t=[],r=[];let o=e[e.length-1];for(let l=n.length-1;l>=0;l--){const i=e[l],s=n[l];"function"==typeof s?(t.unshift(o),r.unshift(s),o=i):o=i+s+o}return t.unshift(o),[t,r]})(e.raw,n),o={extend:e=>ee(o,e),getString:function(e){let n=t[t.length-1];for(var o=arguments.length,l=new Array(o>1?o-1:0),i=1;i<o;i++)l[i-1]=arguments[i];for(let o=r.length-1;o>=0;--o)n=t[o]+r[o](e,...l)+n;return n}};return o},te=e=>{const n=[];let t=[],r="",o="",l=!1;return{addToken:e=>{" "===e?l&&(o=" "):","===e?l&&(t.push(r),r="",n.push(t),t=[],l=!1):("&"===e?(t.push(r+o),r=""):r+=o+e,o="",l=!0)},build:()=>{const o=[];t.push(r),n.push(t);for(let t=n.length-1;t>=0;--t){const r=n[t];for(let n=e.length-1;n>=0;--n){const t=e[n];o.unshift(1==r.length?":root"===t?r[0]:`${e[n]} ${r[0]}`:r.join(e[n]))}}return o}}},re=()=>{let e=":",n="",t="",r="",o=!1,l=!0,i=!1;return{addToken:s=>{s===e&&l?(l=!1,r="",o=!1):" "===s?o&&(r=" "):(l?(n||"@"!==s||(i=!0,e=" "),n+=r+s):t+=r+s,r="",o=!0)},build:()=>t?[n,t]:[n],isAt:()=>i}},oe=(e,n,t,r)=>{let o=re(),l=te(t);for(const[s,a,c,d]of n)if(!a)if(c){if("{"===c){if(r||e.closeBlock(),o.isAt()){const[r,l]=o.build();e.openAtBlock(r,l),"@media"===(i=r)||"@supports"===i||"@document"===i?(e.openBlock(t),oe(e,n,t,!1),e.closeBlock()):oe(e,n,t,!0),e.closeBlock()}else{const t=l.build();e.openBlock(t),oe(e,n,t,!1),e.closeBlock()}r||e.openBlock(t)}else{if(o.isAt()){const[n,t]=o.build();e.addAtDeclaration(n,t)}else{const[n,t]=o.build();e.addDeclaration(n,t)}if("}"===c)return!0}o=re(),l=te(t)}else d?(o.addToken(" "),o.isAt()||l.addToken(" ")):(o.addToken(s),o.isAt()||l.addToken(s));var i;return!1},le=()=>({compile:(e,n)=>{const t=(()=>{const e=[];let n="",t="",r="",o="",l="";return{addAtDeclaration:function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e.length<2||"@charset"===e||!o)return;const l=e+" "+o+";\n";"@import"===e?n+=l:"@namespace"===e?t+=l:r+=l},addDeclaration:(n,t)=>{if(n&&null!=t&&"false"!==t&&"null"!==t&&"undefined"!==t){for(;e.length;)o+=e.shift();o+=l+n+": "+("true"===t?"1":t)+";\n"}},build:()=>n+t+r+o,closeBlock:()=>{l=l.slice(0,-2),e.length?e.pop():o+=l+"}\n"},openAtBlock:(n,t)=>{e.push(l+(t?n+" "+t:n)+" {\n"),l+="  "},openBlock:n=>{e.push(l+n.join(",\n"+l)+" {\n"),l+="  "}}})(),r=(e=>{const n=/\\.|(\s+\/{2}(?:[\s\S]*?(?:(?=\n)\s+|\s+$))|\/\*(?:[\s\S]*?\*\/\s+|[\s\S]*$))|([;{}])|(\s+)|'(?:(?:\\.|[^'])*(?:'|$))|"(?:(?:\\.|[^"])*(?:"|$))|[&@,:]|[^&@,:;{}'"\s]+/g;let t=!1;const r={next(){if(!t){const r=n.exec(e);if(null!=r)return{done:!1,value:r};t=!0}return{done:!0,value:null}},[Symbol.iterator]:()=>r};return r})(n);return t.openBlock([e]),oe(t,r,[e],!1),t.closeBlock(),t.build().trim()}}),ie=()=>{const e=document.createElement("style"),n={get cssString(){var n;return null!==(n=null==e?void 0:e.textContent)&&void 0!==n?n:""},get data(){var n;return null!==(n=null==e?void 0:e.getAttribute("data-tss"))&&void 0!==n?n:""},mount:()=>{e.parentElement||document.head.appendChild(e)},unmount:()=>{e.parentElement&&e.parentElement.removeChild(e)},update:(t,r)=>(e.textContent=t,e.setAttribute("data-tss",r),n)};return n},se="undefined"!=typeof document,ae="undefined"!=typeof process&&!1,ce=function(){let e=195220209;for(let n=arguments.length-1;n>=0;--n){const t=n<0||arguments.length<=n?void 0:arguments[n];for(let n=t.length-1;n>=0;--n)e=33*e^t.charCodeAt(n)}return(e>>>0).toString(36)},de=()=>{const e=new Map;return{register:n=>{let t=e.get(n),r=!1;return null==t&&(t=ce(n),r=!0,e.set(n,t)),[r,t]}}},Ae=()=>{const e=new WeakMap;return{get:n=>e.get(n),register:(n,t,r)=>{e.set(n,{component:t,style:r})}}},ue=()=>{const e=new Set;return{add:n=>{var t;return e.add(n),null===(t=n.mount)||void 0===t||t.call(n),n},remove:n=>{var t;return e.delete(n)&&(null===(t=n.unmount)||void 0===t||t.call(n)),n},toHtmlString:()=>{let n="";for(const{cssString:t,data:r}of e)n+="<style data-tss="+JSON.stringify(""+r)+">\n"+t+"\n</style>\n";return n.trim()}}};var pe,me;const fe=Symbol.for("$$tssContext"),he="undefined"!=typeof window?window:void 0!==t.g?t.g:{},be=null!==(pe=he[fe])&&void 0!==pe?pe:he[fe]=Object.assign(Object.assign({},se&&!ae?(()=>{let e=!1;const n={createStylesheet:ie,rehydrate:()=>{if(!e){e=!0;const n=document.querySelectorAll("body style[data-tss]");requestAnimationFrame((()=>{var e;for(let t=n.length-1;t>=0;--t){const r=n[t];null===(e=r.parentElement)||void 0===e||e.removeChild(r)}}))}},useLayoutEffect:j.useLayoutEffect};return n})():{createStylesheet:()=>{let e="",n="";const t={get cssString(){return e},get data(){return n},update:(r,o)=>(e=r,n=o,t)};return t},useLayoutEffect:e=>e()}),{ids:(()=>{const e=new Map;return{next:n=>{var t;const r=null!==(t=e.get(n))&&void 0!==t?t:0;return e.set(n,r+1),"tss_"+(ae?"<hash>":ce(r.toString(10),n))}}})(),reset:()=>{Object.assign(be,{styleStringCache:de(),styledComponentCache:Ae(),stylesheetCollection:ue()})},styleStringCache:de(),styledComponentCache:Ae(),stylesheetCollection:ue()});null===(me=be.rehydrate)||void 0===me||me.call(be);const ge=e=>{const n=Object.keys(e),t={};for(let r=n.length-1;r>=0;--r){const o=n[r];o.startsWith("$")||(t[o]=e[o])}return t};const xe=(e,n,t,r)=>{const o="string"!=typeof r?be.styledComponentCache.get(r):void 0,[l,i]=null!=o?[o.component,o.style.extend(n)]:[r,n],s=be.ids.next("staticClassName"),a="."+s,c="string"==typeof l?ge:e=>e,d=Object.assign((0,j.forwardRef)(((n,r)=>{const o=t(),a=i.getString(n,o),d=c(n),{className:A,children:u}=d,p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}(d,["className","children"]),m=(0,j.useMemo)((()=>{const[e,n]=be.styleStringCache.register(a+s);return{className:"_"+n,isNew:e}}),[a]);return be.useLayoutEffect((()=>{m.isNew&&be.stylesheetCollection.add(be.createStylesheet().update(e.compile("."+m.className,a),m.className))}),[m]),(0,j.createElement)(l,Object.assign(Object.assign({},p),{className:(A?A+" ":"")+s+" "+m.className,ref:r}),u)})),{toString:()=>a});return be.styledComponentCache.register(d,l,i),d},Be=(e,n,t)=>r=>{const o=t(),l=(0,j.useMemo)((()=>be.createStylesheet()),[]),i=n.getString(r,o),[s,a]=(0,j.useState)(!1);return be.useLayoutEffect((()=>{l.update(e.compile(":root",i),"global")}),[i]),be.useLayoutEffect((()=>(be.stylesheetCollection.add(l),a(!0),()=>be.stylesheetCollection.remove(l))),[]),s?(0,d.jsx)(d.Fragment,{children:r.children}):null},Ce=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};const n=le(),t=t=>function(r){for(var o=arguments.length,l=new Array(o>1?o-1:0),i=1;i<o;i++)l[i-1]=arguments[i];const s=ne(r,l),a=xe(n,s,e,t);return a};return t.global=function(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),l=1;l<r;l++)o[l-1]=arguments[l];const i=ne(t,o),s=Be(n,i,e);return s},t.mixin=function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];const o=ne(e,t),l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.getString(e)};return l},t}(),Ee=Ce("div")`
  align-items: stretch;
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  position: relative;
  min-height: 0;
  min-width: 0;
`,ye=Ce(Ee)`
  align-self: flex-start;
  flex-direction: ${e=>"column"===e.$layout?"column":"row"};
  padding: ${e=>{let{$outer:n=!1}=e;return n?"4px":"0"}};
  height: ${e=>{let{$fixed:n=!1}=e;return n?"6px":null}};
  width: ${e=>{let{$fixed:n=!1}=e;return n?"6px":null}};
  background-color: ${e=>e.$color};
`,ve=Ce(Ee)`
  position: absolute;
  cursor: pointer;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-top-width: 0;
  transform: translate(50%, 50%);
  margin-left: ${e=>`${e.$x}px`};
  margin-top: ${e=>`${e.$y}px`};
  border-right-width: ${e=>e.$size/2+"px"};
  border-bottom-width: ${e=>e.$size/2+"px"};
  border-left-width: ${e=>e.$size/2+"px"};
`,we=e=>(0,d.jsx)(ve,Object.assign({},e,{style:{borderBottomColor:e.$color}})),je="tsstyled",ke=e=>(0,d.jsx)("div",{children:e.children}),$e=e=>(0,d.jsx)("div",{children:e.children}),_e="unstyled",Oe=[a,s,i,c],Se=e=>{let{onClick:n,title:t,children:r}=e;return(0,d.jsx)("div",Object.assign({className:"action",onClick:n,title:t},{children:r}))},Ne=e=>{let{items:n=[]}=e;return(0,d.jsx)("div",Object.assign({className:"actions"},{children:n.map(((e,n)=>(0,d.jsx)(Se,Object.assign({onClick:e.onClick,title:e.tip},{children:e.content}),n)))}))},ze=e=>e.reduce(((e,n)=>e+n),0)/e.length,De=e=>{const n=ze(e),t=e.map((e=>{const t=e-n;return t*t}));return Math.sqrt(ze(t))},Fe=e=>{let{config:n=null,onResult:t}=e;var r,o,l;const[i,s]=(0,j.useState)(null),[a,c]=(0,j.useState)(Number.NaN),d=(0,j.useRef)(0),A=(0,j.useRef)([]),u=(0,j.useRef)(),p=null!==(r=null==i?void 0:i.type)&&void 0!==r?r:"update",m=null!==(o=null==i?void 0:i.sampleCount)&&void 0!==o?o:1e3,f=null!==(l=null==i?void 0:i.timeout)&&void 0!==l?l:3e4,h=!(Number.isNaN(a)||("mount"===p||"unmount"===p)&&(a+1)%2),b=!(Number.isNaN(a)||("mount"===p?(a+1)%2:"unmount"===p?a%2:!(a>1)));return(0,j.useLayoutEffect)((()=>{s(n)}),[n]),(0,j.useLayoutEffect)((()=>{if(null!=i)return u.current=requestAnimationFrame((()=>{d.current=performance.now(),u.current=void 0,c(0)})),()=>{u.current&&(cancelAnimationFrame(u.current),u.current=void 0);const e=A.current.reduce(((e,n)=>[...e,n.end-n.scriptStart]),[]),n=A.current.reduce(((e,n)=>[...e,n.layoutStart-n.scriptStart]),[]),r=A.current.reduce(((e,n)=>[...e,n.end-n.layoutStart]),[]);null==t||t({layout:{mean:ze(r),stdDev:De(r)},sampleCount:A.current.length,scripting:{mean:ze(n),stdDev:De(n)},total:{mean:ze(e),stdDev:De(e)}}),A.current=[]}}),[i]),(0,j.useLayoutEffect)((()=>{if(null!=i){if(b){const e=performance.now();document.body.offsetWidth;const n=performance.now();A.current[a]=Object.assign(Object.assign({},A.current[a]),{end:n,layoutStart:e})}else document.body.offsetWidth;if(d.current+f<=performance.now()||A.current.length>=m)return s(null),void c(Number.NaN);u.current=requestAnimationFrame((()=>{u.current=void 0,c(a+1)}))}}),[a,b]),(0,j.useLayoutEffect)((()=>()=>{u.current&&cancelAnimationFrame(u.current)}),[]),null==i?null:(b&&(A.current[a]={end:0,layoutStart:0,scriptStart:performance.now()}),h?i.render(A.current.length):null)},We=e=>{let{disabled:n=!1,children:t,onClick:r}=e;const o=(0,j.useCallback)((()=>{n||null==r||r()}),[n,r]);return(0,d.jsx)("button",Object.assign({className:"button"+(n?" button--disabled":""),onClick:o},{children:t}))},Ze=e=>{let{children:n}=e;return(0,d.jsx)("div",Object.assign({className:"form"},{children:n}))},Le=e=>{let{children:n}=e;return(0,d.jsx)("div",Object.assign({className:"input"},{children:n}))},Ye=()=>{const e=(0,j.useRef)(null);return(0,j.useEffect)((()=>{var n;return null===(n=e.current)||void 0===n?void 0:n.scrollIntoView({behavior:"smooth"})}),[]),(0,d.jsx)("div",{ref:e})},qe=e=>{let{children:n}=e;return(0,d.jsxs)("div",Object.assign({className:"list"},{children:[n,(0,d.jsx)(Ye,{},j.Children.count(n))]}))},Ie=e=>{let{children:n}=e;return(0,d.jsx)("div",Object.assign({className:"output"},{children:(0,d.jsx)("div",Object.assign({className:"output__content"},{children:n}))}))},Te=e=>{let{children:n}=e;return(0,d.jsx)("div",Object.assign({className:"page"},{children:n}))},Re=e=>{let{$library:n,$benchmark:t,$result:r}=e;return(0,d.jsxs)("div",Object.assign({className:"result"},{children:[(0,d.jsxs)("div",Object.assign({className:"result__start"},{children:[(0,d.jsx)("div",Object.assign({className:"result__cell result__library"},{children:n})),(0,d.jsxs)("div",Object.assign({className:"result__cell result__benchmark"},{children:[t," (",r.sampleCount,")"]}))]})),(0,d.jsxs)("div",Object.assign({className:"result__end"},{children:[(0,d.jsxs)("div",Object.assign({className:"result__cell result__time-primary"},{children:[r.total.mean.toFixed(2)," ±",r.total.stdDev.toFixed(2)," ms"]})),(0,d.jsxs)("div",Object.assign({className:"result__cell result__time-secondary"},{children:["(S/L) ",r.scripting.mean.toFixed(2),"/",r.layout.mean.toFixed(2)," ms"]}))]}))]}))},Me=e=>{let{$label:n,items:t,selectedValue:r,disabled:o=!1,onChange:l}=e;const i=(0,j.useCallback)((e=>null==l?void 0:l(e.target.value)),[l]);return(0,d.jsxs)("div",Object.assign({className:"select"},{children:[(0,d.jsx)("label",Object.assign({className:"select__label"},{children:n})),(0,d.jsx)("select",Object.assign({className:"select__input",value:r,onChange:i,disabled:o},{children:t.map(((e,n)=>{let{value:t,label:r=t}=e;return(0,d.jsx)("option",Object.assign({value:t},{children:r}),n)}))}))]}))},Pe=()=>(0,d.jsx)("div",{className:"separator"});const Ve=[...Object.keys(M).reduce(((e,n)=>[...e,{value:M[n].name}]),[])].sort(((e,n)=>{var t,r;return(null!==(t=e.label)&&void 0!==t?t:e.value).localeCompare(null!==(r=n.label)&&void 0!==r?r:n.value)})),Ue=Oe.map((e=>({value:e.name}))),Xe=document.body.appendChild(document.createElement("div"));Xe.setAttribute("id","root"),(0,w.render)((0,d.jsx)((()=>{var e;const[n,t]=(0,j.useState)(Ue[0].value),[r,o]=(0,j.useState)([]),[l,i]=(0,j.useState)(null===(e=Ve[0])||void 0===e?void 0:e.value),s=(0,j.useMemo)((()=>{if(null==l)return null;const e=M[l],t=Oe.find((e=>e.name===n));if(null==e||null==t)return null;const{Dot:r,Box:o}=t,{render:i}=e,s=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}(e,["render"]);return{benchmark:l,library:n,value:Object.assign(Object.assign({},s),{render:e=>i({Box:o,Dot:r},e)})}}),[n,l]),[a,c]=(0,j.useState)(!1);(0,j.useEffect)((()=>{c(!1)}),[s,l,n]);const A=(0,j.useCallback)((()=>{c(!0)}),[]),u=(0,j.useCallback)((e=>{a&&null!=s&&(c(!1),o((n=>[...n,{benchmark:s.benchmark,library:s.library,value:e}])))}),[a,s]),p=(0,j.useCallback)((()=>o([])),[]);return(0,d.jsxs)(Te,{children:[(0,d.jsx)(Ie,{children:s&&a?(0,d.jsx)(Fe,{config:s.value,onResult:u}):null==s?void 0:s.value.render(0)}),(0,d.jsxs)(Le,{children:[(0,d.jsx)(Ne,{items:[{content:(0,d.jsx)(k.Z,{}),onClick:p,tip:"Clear benchmark results."}]}),(0,d.jsx)(qe,{children:r.map(((e,n)=>(0,d.jsx)(Re,{$library:e.library,$benchmark:e.benchmark,$result:e.value},n)))}),(0,d.jsx)(Pe,{}),(0,d.jsxs)(Ze,{children:[(0,d.jsx)(Me,{$label:"Library",items:Ue,selectedValue:n,disabled:a,onChange:t}),(0,d.jsx)(Me,{$label:"Benchmark",items:Ve,selectedValue:l,disabled:a,onChange:i}),(0,d.jsx)(We,Object.assign({onClick:A,disabled:null==s||a},{children:a?"Running...":"Run"}))]})]})]})}),{}),Xe)},8878:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(4216),o=t.n(r),l=t(7705),i=t.n(l)()(o());i.push([e.id,"html,\nbody {\n  font-family: sans-serif;\n}\n\n.actions {\n  display: flex;\n  align-items: 'stretch';\n  justify-content: flex-end;\n  background-color: #ddd;\n  border-bottom: 1px solid gray;\n  padding: 0.25em 0.5em;\n  font-size: 80%;\n}\n\n.action {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid transparent;\n  outline: none;\n  margin: 0;\n  padding: 2px;\n  background: transparent;\n  color: black;\n}\n.action:focus {\n  border-bottom-color: black;\n}\n.action:active {\n  color: #666;\n}\n\n.button {\n  box-sizing: border-box;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  background: #08e;\n  color: white;\n  outline: none;\n  border: none;\n  line-height: 2.5;\n  padding: 0;\n  margin: 0;\n  text-transform: uppercase;\n  font-size: 120%;\n  cursor: pointer;\n}\n.button:focus {\n  text-decoration: underline;\n}\n.button:active {\n  background: black;\n  text-decoration: none;\n}\n.button.button--disabled {\n  background: gray;\n  text-decoration: none;\n  cursor: default;\n}\n\n.form {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  flex: 1 0 auto;\n  overflow: hidden;\n}\n@media only screen and (max-width: 640px) {\n  .form {\n    flex-direction: column;\n    flex-wrap: none;\n  }\n}\n\n.input {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 50%;\n  background-color: #eee;\n  overflow: hidden;\n}\n@media only screen and (max-width: 640px) {\n  .input {\n    flex-basis: 65%;\n  }\n}\n\n.list {\n  flex: 1 1 100%;\n  min-height: 0;\n  overflow: auto;\n}\n\n.output {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  flex: 1 1 50%;\n  background: black;\n}\n@media only screen and (max-width: 640px) {\n  .output {\n    flex-basis: 35%;\n  }\n}\n.output__content {\n  justify-content: center;\n  align-items: center;\n}\n\n.page {\n  height: calc(var(--vh, 1vh) * 100);\n  display: flex;\n  flex-direction: row;\n  justify-content: stretch;\n  align-items: stretch;\n}\n@media only screen and (max-width: 640px) {\n  .page {\n    flex-direction: column;\n  }\n}\n\n.result {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: stretch;\n  box-sizing: border-box;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  margin-top: -1px;\n  line-height: 1.333em;\n  padding: 0.5em 1em;\n  background: white;\n}\n.result__start {\n  flex: 1 1 100%;\n  min-width: 0;\n}\n.result__end {\n  flex: 1 0 auto;\n  font-family: monospace;\n}\n.result__cell {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.result__library {\n  font-weight: bold;\n}\n.result__time-primary {\n  font-weight: bold;\n  font-size: 150%;\n}\n.result__time-secondary {\n  font-size: 90%;\n}\n\n.select {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: stretch;\n  box-sizing: border-box;\n  flex: 1 1 0;\n  background-color: white;\n  min-width: min(100%, 16em);\n  max-width: 100%;\n  padding: 0.25em;\n  outline: none;\n  border: none;\n  border-left: 1px solid lightgray;\n  border-top: 1px solid lightgray;\n  margin-left: -1px;\n  margin-top: -1px;\n  padding: 0.5em;\n}\n.select__label {\n  display: block;\n  font-size: 80%;\n  color: #888;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.select__input {\n  box-sizing: border-box;\n  display: block;\n  border: none;\n  outline: none;\n  padding: 0;\n  font-size: 120%;\n\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n.select__input::-ms-expand {\n  display: none;\n}\n.select__input:focus {\n  text-decoration: underline;\n}\n\n.separator {\n  height: 8px;\n  border-top: 1px solid gray;\n  border-bottom: 1px solid gray;\n  background: #ddd;\n}\n","",{version:3,sources:["webpack://./src/__benchmark__/index.css"],names:[],mappings:"AAAA;;EAEE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,sBAAsB;EACtB,6BAA6B;EAC7B,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,6BAA6B;EAC7B,aAAa;EACb,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT,yBAAyB;EACzB,eAAe;EACf,eAAe;AACjB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;AACA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,gBAAgB;AAClB;AACA;EACE;IACE,sBAAsB;IACtB,eAAe;EACjB;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE,cAAc;EACd,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,iBAAiB;AACnB;AACA;EACE;IACE,eAAe;EACjB;AACF;AACA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;EAClC,aAAa;EACb,mBAAmB;EACnB,wBAAwB;EACxB,oBAAoB;AACtB;AACA;EACE;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,wBAAwB;EACxB,sBAAsB;EACtB,0BAA0B;EAC1B,6BAA6B;EAC7B,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,cAAc;EACd,YAAY;AACd;AACA;EACE,cAAc;EACd,sBAAsB;AACxB;AACA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,oBAAoB;EACpB,sBAAsB;EACtB,WAAW;EACX,uBAAuB;EACvB,0BAA0B;EAC1B,eAAe;EACf,eAAe;EACf,aAAa;EACb,YAAY;EACZ,gCAAgC;EAChC,+BAA+B;EAC/B,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,cAAc;EACd,cAAc;EACd,WAAW;EACX,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,cAAc;EACd,YAAY;EACZ,aAAa;EACb,UAAU;EACV,eAAe;;EAEf,qBAAqB;EACrB,wBAAwB;AAC1B;AACA;EACE,aAAa;AACf;AACA;EACE,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,0BAA0B;EAC1B,6BAA6B;EAC7B,gBAAgB;AAClB",sourcesContent:["html,\nbody {\n  font-family: sans-serif;\n}\n\n.actions {\n  display: flex;\n  align-items: 'stretch';\n  justify-content: flex-end;\n  background-color: #ddd;\n  border-bottom: 1px solid gray;\n  padding: 0.25em 0.5em;\n  font-size: 80%;\n}\n\n.action {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid transparent;\n  outline: none;\n  margin: 0;\n  padding: 2px;\n  background: transparent;\n  color: black;\n}\n.action:focus {\n  border-bottom-color: black;\n}\n.action:active {\n  color: #666;\n}\n\n.button {\n  box-sizing: border-box;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  background: #08e;\n  color: white;\n  outline: none;\n  border: none;\n  line-height: 2.5;\n  padding: 0;\n  margin: 0;\n  text-transform: uppercase;\n  font-size: 120%;\n  cursor: pointer;\n}\n.button:focus {\n  text-decoration: underline;\n}\n.button:active {\n  background: black;\n  text-decoration: none;\n}\n.button.button--disabled {\n  background: gray;\n  text-decoration: none;\n  cursor: default;\n}\n\n.form {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  flex: 1 0 auto;\n  overflow: hidden;\n}\n@media only screen and (max-width: 640px) {\n  .form {\n    flex-direction: column;\n    flex-wrap: none;\n  }\n}\n\n.input {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 50%;\n  background-color: #eee;\n  overflow: hidden;\n}\n@media only screen and (max-width: 640px) {\n  .input {\n    flex-basis: 65%;\n  }\n}\n\n.list {\n  flex: 1 1 100%;\n  min-height: 0;\n  overflow: auto;\n}\n\n.output {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  flex: 1 1 50%;\n  background: black;\n}\n@media only screen and (max-width: 640px) {\n  .output {\n    flex-basis: 35%;\n  }\n}\n.output__content {\n  justify-content: center;\n  align-items: center;\n}\n\n.page {\n  height: calc(var(--vh, 1vh) * 100);\n  display: flex;\n  flex-direction: row;\n  justify-content: stretch;\n  align-items: stretch;\n}\n@media only screen and (max-width: 640px) {\n  .page {\n    flex-direction: column;\n  }\n}\n\n.result {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: stretch;\n  box-sizing: border-box;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  margin-top: -1px;\n  line-height: 1.333em;\n  padding: 0.5em 1em;\n  background: white;\n}\n.result__start {\n  flex: 1 1 100%;\n  min-width: 0;\n}\n.result__end {\n  flex: 1 0 auto;\n  font-family: monospace;\n}\n.result__cell {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.result__library {\n  font-weight: bold;\n}\n.result__time-primary {\n  font-weight: bold;\n  font-size: 150%;\n}\n.result__time-secondary {\n  font-size: 90%;\n}\n\n.select {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: stretch;\n  box-sizing: border-box;\n  flex: 1 1 0;\n  background-color: white;\n  min-width: min(100%, 16em);\n  max-width: 100%;\n  padding: 0.25em;\n  outline: none;\n  border: none;\n  border-left: 1px solid lightgray;\n  border-top: 1px solid lightgray;\n  margin-left: -1px;\n  margin-top: -1px;\n  padding: 0.5em;\n}\n.select__label {\n  display: block;\n  font-size: 80%;\n  color: #888;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.select__input {\n  box-sizing: border-box;\n  display: block;\n  border: none;\n  outline: none;\n  padding: 0;\n  font-size: 120%;\n\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n.select__input::-ms-expand {\n  display: none;\n}\n.select__input:focus {\n  text-decoration: underline;\n}\n\n.separator {\n  height: 8px;\n  border-top: 1px solid gray;\n  border-bottom: 1px solid gray;\n  background: #ddd;\n}\n"],sourceRoot:""}]);const s=i}},e=>{e.O(0,[681,950,988,885,419,754,432,311,867,747,752,225,922,593,717,245,64,622],(()=>(4175,e(e.s=4175)))),e.O()}]);
//# sourceMappingURL=main.a5a2f6c8.js.map