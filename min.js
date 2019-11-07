/*! (c) Andrea Giammarchi - ISC */
var neverland=function(e){"use strict";var t={};t.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(e){return t.prototype=new t("").constructor.prototype,t;function t(e,t){t||(t={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail),n}}();var n=t.CustomEvent,r={};try{r.WeakSet=WeakSet}catch(e){!function(e){var t=new e,n=o.prototype;function o(n){t.set(this,new e),n&&n.forEach(this.add,this)}n.add=function(e){return t.get(this).set(e,1),this},n.delete=function(e){return t.get(this).delete(e)},n.has=function(e){return t.get(this).has(e)},r.WeakSet=o}(WeakMap)}var o=r.WeakSet;var a=null,u=function(e){e()},i=function(){return a};function c(e,t){return e!==this[t]}var l="function"==typeof cancelAnimationFrame,s=l?cancelAnimationFrame:clearTimeout,f=l?requestAnimationFrame:setTimeout;function d(e){var t,n,r,o,a;return i(),function(e,i,l){return r=e,o=i,a=l,n||(n=f(u)),--t<0&&c(!0),c};function u(){i(),r.apply(o,a||[])}function i(){t=e||1/0,n=l?0:null}function c(e){var t=!!n;return t&&(s(n),e&&u()),t}}var v=d(),h=function(e){var t=i(),n=t.hook,r=t.args,o=t.stack,a=t.index;return o.length<=a&&(o[a]=e),[o[a],function(e){o[a]=e,v(n,null,r)}]},p=new WeakMap,g=function(e){var t=e.hook,n=e.args;t.apply(null,n)};function m(e){this.value!==e&&(this.value=e,p.get(this).forEach(g))}function y(e){return e.hook===this.hook}var w=new WeakMap,b=function(){},k=function(e){return function(t,n){var r=i(),o=r.hook,a=r.stack,u=r.index,l=r.after;if(u<a.length){var s=a[u],f=s.clean,v=s.invoke,h=s.update,p=s.values;n&&!n.some(c,p)||(s.values=n,f&&(s.clean=null,f()),e?l.push(v):h(v))}else{var g=function(){y.clean=t()};w.has(o)||w.set(o,{stack:[],update:d()});var m=w.get(o),y={clean:null,invoke:g,stop:b,update:m.update,values:n};a[u]=y,m.stack.push(y),e?l.push(g):y.stop=m.update(g)}}},N=k(!1),x=k(!0),E=function(e,t){var n=i(),r=n.stack,o=n.index;return(!t||r.length<=o||t.some(c,r[o].values))&&(r[o]={current:e(),values:t}),r[o].current},C=function(e){var t=i(),n=t.stack,r=t.index;return r<n.length?n[r]:n[r]={current:e}},S=function(e){var t=e.Event,n=e.WeakSet,r=!0,o=null;return function(e){return r&&(r=!r,o=new n,function(e){var r=new n,a=new n;try{new MutationObserver(l).observe(e,{subtree:!0,childList:!0})}catch(t){var u=0,i=[],c=function(e){i.push(e),clearTimeout(u),u=setTimeout(function(){l(i.splice(u=0,i.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){c({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){c({addedNodes:[e.target],removedNodes:[]})},!0)}function l(e){for(var t,n=e.length,o=0;o<n;o++)s((t=e[o]).removedNodes,"disconnected",a,r),s(t.addedNodes,"connected",r,a)}function s(e,n,r,o){for(var a,u=new t(n),i=e.length,c=0;c<i;1===(a=e[c++]).nodeType&&f(a,u,n,r,o));}function f(e,t,n,r,a){o.has(e)&&!r.has(e)&&(a.delete(e),r.add(e),e.dispatchEvent(t));for(var u=e.children||[],i=u.length,c=0;c<i;f(u[c++],t,n,r,a));}}(e.ownerDocument)),o.add(e),e}}({Event:n,WeakSet:o}),A=function(e){var t=function(e){var t=[];return function n(){var r=a,o=[],i=0;a={hook:n,args:arguments,stack:t,get index(){return i++},after:o};try{return e.apply(null,arguments)}finally{a=r,o.forEach(u)}}}(e),n=function(e){w.has(e)&&w.get(e).stack.forEach(function(e){var t=e.clean;(0,e.stop)(),t&&(e.clean=null,t())})}.bind(null,t);return function(){return function e(t,n){var r=t.nodeType;if(r){var o=1===r?t:function(e){for(var t=e.childNodes,n=t.length,r=0;r<n;){var o=t[r++];if(1===o.nodeType)return o}throw"unobservable"}(t);S(o),o.addEventListener("disconnected",n,!1)}else{var a=t.valueOf();a!==t&&e(a,n)}return t}(t.apply(this,arguments),n)}},T={};try{T.WeakMap=WeakMap}catch(e){T.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,o=a.prototype;return o.delete=function(e){return this.has(e)&&delete e[this._]},o.get=function(e){return this.has(e)?e[this._]:void 0},o.has=function(e){return r.call(e,this._)},o.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},a;function a(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(u,this)}function u(e){this.set(e[0],e[1])}}(Math.random(),Object)}var M,L=T.WeakMap,j="-"+Math.random().toFixed(6)+"%",O=!1;try{"content"in(M=document.createElement("template"))&&(M.innerHTML='<p tabindex="'+j+'"></p>',M.content.childNodes[0].getAttribute("tabindex")==j)||(j="_dt: "+j.slice(1,-1)+";",O=!0)}catch(e){}var _="\x3c!--"+j+"--\x3e",D=8,W=1,$=3,F=/^(?:style|textarea)$/i,R=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var V=" \\f\\n\\r\\t",G="[^"+V+"\\/>\"'=]+",z="["+V+"]+"+G,H="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",I="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+G.replace("\\/","")+"))?)",Z=new RegExp(H+z+I+"+)(["+V+"]*/?>)","g"),q=new RegExp(H+z+I+"*)(["+V+"]*/>)","g"),P=new RegExp("("+z+"\\s*=\\s*)(['\"]?)"+_+"\\2","gi");function B(e,t,n,r){return"<"+t+n.replace(P,J)+r}function J(e,t,n){return t+(n||'"')+j+(n||'"')}function K(e,t,n){return R.test(t)?e:"<"+t+n+"></"+t+">"}var Q="object"!=("undefined"==typeof document?"undefined":typeof document),U=function(e){var t,n=(t=(document.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(t)&&!/(Chrom[eium]+|Android)\/(\d+)/.test(t)),r=!("raw"in e)||e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw);if(n||r){var o={},a=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return o[t]||(o[t]=e)};if(r)U=a;else{var u=new L;U=function(e){return u.get(e)||function(e,t){return u.set(e,t),t}(e,a(e))}}}else Q=!0;return X(e)};function X(e){return Q?e:U(e)}function Y(e){for(var t=arguments.length,n=[X(e)],r=1;r<t;)n.push(arguments[r++]);return n}var ee=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,a=r.length;o<a;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice),te=Array.isArray,ne=ee.prototype.nodeType;function re(e,t){this.type=e,this.args=t}Object.freeze(re);var oe=function(e){var t="fragment",n="content"in o("template")?function(e){var t=o("template");return t.innerHTML=e,t.content}:function(e){var n=o(t),a=o("template"),u=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var i=RegExp.$1;a.innerHTML="<table>"+e+"</table>",u=a.querySelectorAll(i)}else a.innerHTML=e,u=a.childNodes;return r(n,u),n};return function(e,a){return("svg"===a?function(e){var n=o(t),a=o("div");return a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,a.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function o(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(document),ae={};try{ae.Map=Map}catch(e){ae.Map=function(){var e=0,t=[],n=[];return{delete:function(o){var a=r(o);return a&&(t.splice(e,1),n.splice(e,1)),a},forEach:function(e,r){t.forEach(function(t,o){e.call(r,n[o],t,this)},this)},get:function(t){return r(t)?n[e]:void 0},has:function(e){return r(e)},set:function(o,a){return n[r(o)?e:t.push(o)-1]=a,this}};function r(n){return-1<(e=t.indexOf(n))}}}var ue=ae.Map,ie=[].indexOf,ce=function(e,t,n,r,o,a){for(var u=("selectedIndex"in t),i=u;r<o;){var c=e(n[r],1);if(t.insertBefore(c,a),u&&i&&c.selected){i=!i;var l=t.selectedIndex;t.selectedIndex=l<0?r:ie.call(t.querySelectorAll("option"),c)}r++}},le=function(e,t){return e==t},se=function(e){return e},fe=function(e,t,n,r,o,a,u){var i=a-o;if(i<1)return-1;for(;n-t>=i;){for(var c=t,l=o;c<n&&l<a&&u(e[c],r[l]);)c++,l++;if(l===a)return t;t=c+1}return-1},de=function(e,t,n,r,o){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o},ve=function(e,t,n,r,o){for(;r<o;)ge(e(n[r++],-1),t)},he=function(e,t,n){for(var r=1,o=t;r<o;){var a=(r+o)/2>>>0;n<e[a]?o=a:r=a+1}return r},pe=function(e,t,n,r,o,a,u,i,c,l,s,f,d){!function(e,t,n,r,o,a,u,i,c){for(var l=new ue,s=e.length,f=u,d=0;d<s;)switch(e[d++]){case 0:o++,f++;break;case 1:l.set(r[o],1),ce(t,n,r,o++,o,f<i?t(a[f],0):c);break;case-1:f++}for(d=0;d<s;)switch(e[d++]){case 0:u++;break;case-1:l.has(a[u])?u++:ve(t,n,a,u++,u)}}(function(e,t,n,r,o,a,u){var i,c,l,s,f,d,v,h=n+a,p=[];e:for(i=0;i<=h;i++){if(i>50)return null;for(v=i-1,f=i?p[i-1]:[0,0],d=p[i]=[],c=-i;c<=i;c+=2){for(l=(s=c===-i||c!==i&&f[v+c-1]<f[v+c+1]?f[v+c+1]:f[v+c-1]+1)-c;s<a&&l<n&&u(r[o+s],e[t+l]);)s++,l++;if(s===a&&l===n)break e;d[i+c]=s}}var g=Array(i/2+h/2),m=g.length-1;for(i=p.length-1;i>=0;i--){for(;s>0&&l>0&&u(r[o+s-1],e[t+l-1]);)g[m--]=0,s--,l--;if(!i)break;v=i-1,f=i?p[i-1]:[0,0],(c=s-l)==-i||c!==i&&f[v+c-1]<f[v+c+1]?(l--,g[m--]=1):(s--,g[m--]=-1)}return g}(n,r,a,u,i,l,f)||function(e,t,n,r,o,a,u,i){var c=0,l=r<i?r:i,s=Array(l++),f=Array(l);f[0]=-1;for(var d=1;d<l;d++)f[d]=u;for(var v=new ue,h=a;h<u;h++)v.set(o[h],h);for(var p=t;p<n;p++){var g=v.get(e[p]);null!=g&&-1<(c=he(f,l,g))&&(f[c]=g,s[c]={newi:p,oldi:g,prev:s[c-1]})}for(c=--l,--u;f[c]>u;)--c;l=i+r-c;var m=Array(l),y=s[c];for(--n;y;){for(var w=y,b=w.newi,k=w.oldi;n>b;)m[--l]=1,--n;for(;u>k;)m[--l]=-1,--u;m[--l]=0,--n,--u,y=y.prev}for(;n>=t;)m[--l]=1,--n;for(;u>=a;)m[--l]=-1,--u;return m}(n,r,o,a,u,i,c,l),e,t,n,r,u,i,s,d)},ge=function(e,t){(ge="remove"in e?function(e){e.remove()}:function(e,t){e.parentNode===t&&t.removeChild(e)})(e,t)},me=function(e,t,n,r){r||(r={});for(var o=r.compare||le,a=r.node||se,u=null==r.before?null:a(r.before,0),i=t.length,c=i,l=0,s=n.length,f=0;l<c&&f<s&&o(t[l],n[f]);)l++,f++;for(;l<c&&f<s&&o(t[c-1],n[s-1]);)c--,s--;var d=l===c,v=f===s;if(d&&v)return n;if(d&&f<s)return ce(a,e,n,f,s,de(a,t,l,i,u)),n;if(v&&l<c)return ve(a,e,t,l,c),n;var h=c-l,p=s-f,g=-1;if(h<p){if(-1<(g=fe(n,f,s,t,l,c,o)))return ce(a,e,n,f,g,a(t[l],0)),ce(a,e,n,g+h,s,de(a,t,c,i,u)),n}else if(p<h&&-1<(g=fe(t,l,c,n,f,s,o)))return ve(a,e,t,l,g),ve(a,e,t,g+p,c),n;return h<2||p<2?(ce(a,e,n,f,s,a(t[l],0)),ve(a,e,t,l,c),n):h===p&&function(e,t,n,r,o,a){for(;r<o&&a(n[r],e[t-1]);)r++,t--;return 0===t}(n,s,t,l,c,o)?(ce(a,e,n,f,s,de(a,t,c,i,u)),n):(pe(a,e,n,f,s,p,t,l,c,h,i,o,u),n)},ye=function(e,t,n,r,o){var a="importNode"in e,u=e.createDocumentFragment();return u.appendChild(e.createTextNode("g")),u.appendChild(e.createTextNode("")),(a?e.importNode(u,!0):u.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),o=t.childNodes||[],a=o.length,u=0;n&&u<a;u++)r.appendChild(e(o[u],n));return r}:a?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document),we="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")};function be(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function ke(e,t,n,r){for(var o=new ue,a=e.attributes,u=[],i=u.slice.call(a,0),c=i.length,l=0;l<c;){var s,f=i[l++],d=f.value===j;if(d||1<(s=f.value.split(_)).length){var v=f.name;if(!o.has(v)){var h=n.shift().replace(d?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+v+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),p=a[h]||a[h.toLowerCase()];if(o.set(v,p),d)t.push(xe(p,r,h,null));else{for(var g=s.length-2;g--;)n.shift();t.push(xe(p,r,h,s))}}u.push(f)}}l=0;for(var m=(0<(c=u.length)&&O&&!("ownerSVGElement"in e));l<c;){var y=u[l++];m&&(y.value=""),e.removeAttribute(y.name)}var w=e.nodeName;if(/^script$/i.test(w)){var b=document.createElement(w);for(c=a.length,l=0;l<c;)b.setAttributeNode(a[l++].cloneNode(!0));b.textContent=e.textContent,e.parentNode.replaceChild(b,e)}}function Ne(e,t){return{type:"any",node:e,path:t}}function xe(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function Ee(e,t){return{type:"text",node:e,path:t}}var Ce=new L,Se=new L;function Ae(e,t){var n=(e.convert||function(e){return e.join(_).replace(q,K).replace(Z,B)})(t),r=e.transform;r&&(n=r(n));var o=oe(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===we.call(r.textContent).length&&e.removeChild(r)}}(o);var a=[];!function e(t,n,r,o){for(var a=t.childNodes,u=a.length,i=0;i<u;){var c=a[i];switch(c.nodeType){case W:var l=o.concat(i);ke(c,n,r,l),e(c,n,r,l);break;case D:var s=c.textContent;if(s===j)r.shift(),n.push(F.test(t.nodeName)?Ee(t,o):Ne(c,o.concat(i)));else switch(s.slice(0,2)){case"/*":if("*/"!==s.slice(-2))break;case"👻":t.removeChild(c),i--,u--}break;case $:F.test(t.nodeName)&&we.call(c.textContent)===_&&(r.shift(),n.push(Ee(t,o)))}i++}}(o,a,t.slice(0),[]);var u={content:o,updates:function(n){for(var r=[],o=a.length,u=0,i=0;u<o;){var c=a[u++],l=be(n,c.path);switch(c.type){case"any":r.push({fn:e.any(l,[]),sparse:!1});break;case"attr":var s=c.sparse,f=e.attribute(l,c.name,c.node);null===s?r.push({fn:f,sparse:!1}):(i+=s.length-2,r.push({fn:f,sparse:!0,values:s}));break;case"text":r.push({fn:e.text(l),sparse:!1}),l.textContent=""}}return o+=i,function(){var e=arguments.length;if(o!==e-1)throw new Error(e-1+" values instead of "+o+"\n"+t.join("${value}"));for(var a=1,u=1;a<e;){var i=r[a-u];if(i.sparse){var c=i.values,l=c[0],s=1,f=c.length;for(u+=f-2;s<f;)l+=arguments[a++]+c[s++];i.fn(l)}else i.fn(arguments[a++])}return n}}};return Ce.set(t,u),u}function Te(e){return function(t){var n=Se.get(e);return null!=n&&n.template===t||(n=function(e,t){var n=Ce.get(t)||Ae(e,t),r=ye.call(document,n.content,!0),o={content:r,template:t,updates:n.updates(r)};return Se.set(e,o),o}(e,t)),n.updates.apply(null,arguments),n.content}}var Me=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var a,u;return function(i){var c,l,s,f;switch(typeof i){case"object":if(i){if("object"===a){if(!o&&u!==i)for(l in u)l in i||(r[l]="")}else o?r.value="":r.cssText="";for(l in c=o?{}:r,i)s="number"!=typeof(f=i[l])||e.test(l)?f:f+"px",!o&&/^--/.test(l)?c.setProperty(l,s):c[l]=s;a="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(u=c):u=i;break}default:u!=i&&(a="string",u=i,o?r.value=i||"":r.cssText=i||"")}}}}(),Le=function(e,t){return e.nodeType===ne?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e},je=function(e,t){var n,r=!1,o=t.cloneNode(!0);return function(t){n!==t&&(n=t,o.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(o)),o.value=t):(o.value=t,r||(r=!0,e.setAttributeNode(o)))))}},Oe=function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},_e=/^(?:form|list)$/i,De=[].slice;function We(e){return this.type=e,Te(this)}function $e(e){return e(this)}We.prototype={attribute:function(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return je(e,n);t="className";case"data":case"props":return Oe(e,t);case"style":return Me(e,n,"ownerSVGElement"in e);case"ref":return function(e){return function(t){t.current=e}}(e);default:return"."===t.slice(0,1)?function(e,t,n){return n?function(n){try{e[t]=n}catch(r){e.setAttribute(t,n)}}:function(n){e[t]=n}}(e,t.slice(1),"ownerSVGElement"in e):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}}(e,t):t in e&&!("ownerSVGElement"in e||_e.test(t))?Oe(e,t):je(e,n)}},any:function(e,t){var n,r={node:Le,before:e},o="ownerSVGElement"in e?"svg":"html",a=!1;return function u(i){switch(typeof i){case"string":case"number":case"boolean":a?n!==i&&(n=i,t[0].textContent=i):(a=!0,n=i,t=me(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,i)],r));break;case"function":u(i(e));break;case"object":case"undefined":if(null==i){a=!1,t=me(e.parentNode,t,[],r);break}default:if(a=!1,n=i,te(i))if(0===i.length)t.length&&(t=me(e.parentNode,t,[],r));else switch(typeof i[0]){case"string":case"number":case"boolean":u(String(i));break;case"function":u(i.map($e,e));break;case"object":te(i[0])&&(i=i.concat.apply([],i));default:t=me(e.parentNode,t,i,r)}else!function(e){return"ELEMENT_NODE"in e}(i)?"text"in i?u(String(i.text)):"any"in i?u(i.any):"html"in i?t=me(e.parentNode,t,De.call(oe([].concat(i.html).join(""),o).childNodes),r):"length"in i&&u(De.call(i)):t=me(e.parentNode,t,11===i.nodeType?De.call(i.childNodes):[i],r)}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(De.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}}}};var Fe=new L,Re=new L,Ve=null,Ge=function(e){var t=qe("html",e),n=qe("svg",e),r={html:Ze("html",e,!0),svg:Ze("svg",e,!0)};return{html:t,svg:n,inner:r,hook:function(e){return{html:Ie(e,t),svg:Ie(e,n),inner:r}},render:function(t,n){var r=Pe.call(this,t,n,e);return Re.get(t)!==r&&(Re.set(t,r),function(e,t){e.textContent="",e.appendChild(t)}(t,r)),t}}}(We),ze=Ge.render;function He(e,t){return e.nodeType===ne?e.valueOf(t):e}function Ie(e,t){return function(){var n=e(null);return null===n.current&&(n.current=t.for(n)),He(n.current.apply(null,arguments),!1)}}function Ze(e,t,n){return function(){var r=Y.apply(null,arguments);return n||Ve?new re(e,r):new t(e).apply(null,r)}}function qe(e,t){var n=new L,r=Ze(e,t,!1);return r.for=function(r,o){var a=n.get(r)||function(e){var t={$:null};return n.set(e,t),t}(r);return null==o&&(o="$"),a[o]||function(n,r){var o=[],a=null,u=new t(e),i=function(){return u.apply(null,Je(o,1,1,t))};return n[r]=function(){o=Y.apply(null,arguments);var e=Pe(u,i,t);return a||(a=Ke(e))}}(a,o)},r}function Pe(e,t,n){var r,o,a=Ve;(Ve=Fe.get(e)||(r=e,o={i:0,length:0,stack:[],update:!1},Fe.set(r,o),o)).i=0;var u,i=t.call(this);if(i instanceof re){u=He(Be(i,0,n),Ve.update);var c=Ve,l=c.i,s=c.length,f=c.stack,d=c.update;l<s&&f.splice(Ve.length=l),d&&(Ve.update=!1)}else u=He(i,!1);return Ve=a,u}function Be(e,t,n){var r=Ve,o=r.i,a=r.length,u=r.stack,i=e.type,c=e.args,l=o<a;Ve.i++,l||(Ve.length=u.push({l:t,kind:i,tag:null,tpl:c[0],wire:null})),Je(c,1,t+1,n);var s=u[o];if(l){var f=s.l,d=s.kind,v=s.tag,h=s.tpl,p=s.wire;if(f===t&&i===d&&h===c[0])return v.apply(null,c),p}var g=new n(i),m=Ke(g.apply(null,c));return s.l=t,s.kind=i,s.tag=g,s.tpl=c[0],s.wire=m,o<1&&(Ve.update=!0),m}function Je(e,t,n,r){for(var o=e.length;t<o;t++){var a=e[t];"object"==typeof a&&a&&(a instanceof re?e[t]=Be(a,n-1,r):te(a)&&(e[t]=Je(a,0,n++,r)))}return e}function Ke(e){var t=e.childNodes,n=t.length;return 1===n?t[0]:n?new ee(t):e}var Qe=(0,Ge.hook)(C),Ue=Qe.html,Xe=Qe.svg,Ye=Qe.inner;return e.createContext=function(e){var t={value:e,provide:m};return p.set(t,[]),t},e.html=Ue,e.inner=Ye,e.neverland=function(e){return function(){return A(e).apply(null,arguments)}},e.render=ze,e.svg=Xe,e.useCallback=function(e,t){return E(function(){return e},t)},e.useContext=function(e){var t=i(),n=t.hook,r=t.args,o=p.get(e),a={hook:n,args:r};return o.some(y,a)||o.push(a),e.value},e.useEffect=N,e.useLayoutEffect=x,e.useMemo=E,e.useReducer=function(e,t,n){var r=h(n?n(t):t);return[r[0],function(t){r[1](e(r[0],t))}]},e.useRef=C,e.useState=h,e}({});
