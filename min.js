/*! (c) Andrea Giammarchi - ISC */
var neverland=function(e){"use strict";var t={};t.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(e){return t.prototype=new t("").constructor.prototype,t;function t(e,t){t||(t={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail),n}}();var n=t.CustomEvent,r={};try{r.WeakSet=WeakSet}catch(e){!function(e){var t=new e,n=a.prototype;function a(n){t.set(this,new e),n&&n.forEach(this.add,this)}n.add=function(e){return t.get(this).set(e,1),this},n.delete=function(e){return t.get(this).delete(e)},n.has=function(e){return t.get(this).has(e)},r.WeakSet=a}(WeakMap)}var a=r.WeakSet;var o=null,u=function(e){e()},i=function(){return o};function c(e,t){return e!==this[t]}var s=function(e){return"function"==typeof e},l="function"==typeof cancelAnimationFrame,f=l?cancelAnimationFrame:clearTimeout,h=l?requestAnimationFrame:setTimeout;function d(e){var t,n,r,a,o;return i(),function(e,i,s){return r=e,a=i,o=s,n||(n=h(u)),--t<0&&c(!0),c};function u(){i(),r.apply(a,o||[])}function i(){t=e||1/0,n=l?0:null}function c(e){var t=!!n;return t&&(f(n),e&&u()),t}}var v=new WeakMap,p=function(e){var t=i(),n=t.hook,r=t.args,a=t.stack,o=t.index;return a.length<=o&&(a[o]=s(e)?e():e,v.has(n)||v.set(n,d())),[a[o],function(e){a[o]=s(e)?e(a[o]):e,v.get(n)(n,null,r)}]},g=new WeakMap,m=function(e){var t=e.hook,n=e.args;t.apply(null,n)};function y(e){this.value!==e&&(this.value=e,g.get(this).forEach(m))}function w(e){return e.hook===this.hook}var b=new WeakMap,N=function(){},k=function(e){return function(t,n){var r=i(),a=r.hook,o=r.stack,u=r.index,s=r.after;if(u<o.length){var l=o[u],f=l.clean,h=l.update,v=l.values;if(!n||n.some(c,v)){l.values=n,f&&(l.clean=null,f());var p=function(){l.clean=t()};e?s.push(p):h(p)}}else{b.has(a)||b.set(a,{stack:[],update:d()});var g=b.get(a),m={clean:null,stop:N,update:g.update,values:n};o[u]=m,g.stack.push(m);var y=function(){m.clean=t()};e?s.push(y):m.stop=g.update(y)}}},x=k(!1),E=k(!0),C=function(e,t){var n=i(),r=n.stack,a=n.index;return(!t||r.length<=a||t.some(c,r[a].values))&&(r[a]={current:e(),values:t}),r[a].current},S=function(e){var t=i(),n=t.stack,r=t.index;return r<n.length?n[r]:n[r]={current:e}},A=function(e){var t=e.Event,n=e.WeakSet,r=!0,a=null;return function(e){return r&&(r=!r,a=new n,function(e){var r=new n,o=new n;try{new MutationObserver(s).observe(e,{subtree:!0,childList:!0})}catch(t){var u=0,i=[],c=function(e){i.push(e),clearTimeout(u),u=setTimeout(function(){s(i.splice(u=0,i.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){c({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){c({addedNodes:[e.target],removedNodes:[]})},!0)}function s(e){for(var t,n=e.length,a=0;a<n;a++)l((t=e[a]).removedNodes,"disconnected",o,r),l(t.addedNodes,"connected",r,o)}function l(e,n,r,a){for(var o,u=new t(n),i=e.length,c=0;c<i;1===(o=e[c++]).nodeType&&f(o,u,n,r,a));}function f(e,t,n,r,o){a.has(e)&&!r.has(e)&&(o.delete(e),r.add(e),e.dispatchEvent(t));for(var u=e.children||[],i=u.length,c=0;c<i;f(u[c++],t,n,r,o));}}(e.ownerDocument)),a.add(e),e}}({Event:n,WeakSet:a}),L=function(e){var t=function(e){var t=[];return function n(){var r=o,a=[],i=0;o={hook:n,args:arguments,stack:t,get index(){return i++},after:a};try{return e.apply(null,arguments)}finally{o=r,a.forEach(u)}}}(e),n=function(e){b.has(e)&&b.get(e).stack.forEach(function(e){var t=e.clean;(0,e.stop)(),t&&(e.clean=null,t())})}.bind(null,t);return function(){return function e(t,n){var r=t.nodeType;if(r){var a=1===r?t:function(e){for(var t=e.childNodes,n=t.length,r=0;r<n;){var a=t[r++];if(1===a.nodeType)return a}throw"unobservable"}(t);A(a),a.addEventListener("disconnected",n,!1)}else{var o=t.valueOf();o!==t&&e(o,n)}return t}(t.apply(this,arguments),n)}},M={};try{M.WeakMap=WeakMap}catch(e){M.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=o.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},o;function o(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(u,this)}function u(e){this.set(e[0],e[1])}}(Math.random(),Object)}var T=M.WeakMap,j="object"!=("undefined"==typeof document?"undefined":typeof document),O=function(e){var t,n=(t=(document.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(t)&&!/(Chrom[eium]+|Android)\/(\d+)/.test(t)),r=!("raw"in e)||e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw);if(n||r){var a={},o=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return a[t]||(a[t]=e)};if(r)O=o;else{var u=new T;O=function(e){return u.get(e)||function(e,t){return u.set(e,t),t}(e,o(e))}}}else j=!0;return W(e)};function W(e){return j?e:O(e)}var _,D="-"+Math.random().toFixed(6)+"%",F=!1;try{"content"in(_=document.createElement("template"))&&(_.innerHTML='<p tabindex="'+D+'"></p>',_.content.childNodes[0].getAttribute("tabindex")==D)||(D="_dt: "+D.slice(1,-1)+";",F=!0)}catch(e){}var R="\x3c!--"+D+"--\x3e",$=8,V=1,G=3,z=/^(?:style|textarea)$/i,H=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var I=" \\f\\n\\r\\t",Z="[^"+I+"\\/>\"'=]+",q="["+I+"]+"+Z,P="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",B="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+Z.replace("\\/","")+"))?)",J=new RegExp(P+q+B+"+)(["+I+"]*/?>)","g"),K=new RegExp(P+q+B+"*)(["+I+"]*/>)","g"),Q=new RegExp("("+q+"\\s*=\\s*)(['\"]?)"+R+"\\2","gi");function U(e,t,n,r){return"<"+t+n.replace(Q,X)+r}function X(e,t,n){return t+(n||'"')+D+(n||'"')}function Y(e,t,n){return H.test(t)?e:"<"+t+n+"></"+t+">"}var ee=function(e){var t="fragment",n="content"in a("template")?function(e){var t=a("template");return t.innerHTML=e,t.content}:function(e){var n=a(t),o=a("template"),u=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var i=RegExp.$1;o.innerHTML="<table>"+e+"</table>",u=o.querySelectorAll(i)}else o.innerHTML=e,u=o.childNodes;return r(n,u),n};return function(e,o){return("svg"===o?function(e){var n=a(t),o=a("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,o.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function a(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(document),te={};try{te.Map=Map}catch(e){te.Map=function(){var e=0,t=[],n=[];return{delete:function(a){var o=r(a);return o&&(t.splice(e,1),n.splice(e,1)),o},forEach:function(e,r){t.forEach(function(t,a){e.call(r,n[a],t,this)},this)},get:function(t){return r(t)?n[e]:void 0},has:function(e){return r(e)},set:function(a,o){return n[r(a)?e:t.push(a)-1]=o,this}};function r(n){return-1<(e=t.indexOf(n))}}}var ne=te.Map,re=[].indexOf,ae=function(e,t,n,r,a,o){for(var u=("selectedIndex"in t),i=u;r<a;){var c=e(n[r],1);if(t.insertBefore(c,o),u&&i&&c.selected){i=!i;var s=t.selectedIndex;t.selectedIndex=s<0?r:re.call(t.querySelectorAll("option"),c)}r++}},oe=function(e,t){return e==t},ue=function(e){return e},ie=function(e,t,n,r,a,o,u){var i=o-a;if(i<1)return-1;for(;n-t>=i;){for(var c=t,s=a;c<n&&s<o&&u(e[c],r[s]);)c++,s++;if(s===o)return t;t=c+1}return-1},ce=function(e,t,n,r,a){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:a},se=function(e,t,n,r){for(;n<r;)he(e(t[n++],-1))},le=function(e,t,n){for(var r=1,a=t;r<a;){var o=(r+a)/2>>>0;n<e[o]?a=o:r=o+1}return r},fe=function(e,t,n,r,a,o,u,i,c,s,l,f,h){!function(e,t,n,r,a,o,u,i,c){for(var s=new ne,l=e.length,f=u,h=0;h<l;)switch(e[h++]){case 0:a++,f++;break;case 1:s.set(r[a],1),ae(t,n,r,a++,a,f<i?t(o[f],0):c);break;case-1:f++}for(h=0;h<l;)switch(e[h++]){case 0:u++;break;case-1:s.has(o[u])?u++:se(t,o,u++,u)}}(function(e,t,n,r,a,o,u){var i,c,s,l,f,h,d,v=n+o,p=[];e:for(i=0;i<=v;i++){if(i>50)return null;for(d=i-1,f=i?p[i-1]:[0,0],h=p[i]=[],c=-i;c<=i;c+=2){for(s=(l=c===-i||c!==i&&f[d+c-1]<f[d+c+1]?f[d+c+1]:f[d+c-1]+1)-c;l<o&&s<n&&u(r[a+l],e[t+s]);)l++,s++;if(l===o&&s===n)break e;h[i+c]=l}}var g=Array(i/2+v/2),m=g.length-1;for(i=p.length-1;i>=0;i--){for(;l>0&&s>0&&u(r[a+l-1],e[t+s-1]);)g[m--]=0,l--,s--;if(!i)break;d=i-1,f=i?p[i-1]:[0,0],(c=l-s)==-i||c!==i&&f[d+c-1]<f[d+c+1]?(s--,g[m--]=1):(l--,g[m--]=-1)}return g}(n,r,o,u,i,s,f)||function(e,t,n,r,a,o,u,i){var c=0,s=r<i?r:i,l=Array(s++),f=Array(s);f[0]=-1;for(var h=1;h<s;h++)f[h]=u;for(var d=new ne,v=o;v<u;v++)d.set(a[v],v);for(var p=t;p<n;p++){var g=d.get(e[p]);null!=g&&-1<(c=le(f,s,g))&&(f[c]=g,l[c]={newi:p,oldi:g,prev:l[c-1]})}for(c=--s,--u;f[c]>u;)--c;s=i+r-c;var m=Array(s),y=l[c];for(--n;y;){for(var w=y,b=w.newi,N=w.oldi;n>b;)m[--s]=1,--n;for(;u>N;)m[--s]=-1,--u;m[--s]=0,--n,--u,y=y.prev}for(;n>=t;)m[--s]=1,--n;for(;u>=o;)m[--s]=-1,--u;return m}(n,r,a,o,u,i,c,s),e,t,n,r,u,i,l,h)},he=function(e){return(e.remove||function(){var e=this.parentNode;e&&e.removeChild(this)}).call(e)};var de=function(e,t,n,r){r||(r={});for(var a=r.compare||oe,o=r.node||ue,u=null==r.before?null:o(r.before,0),i=t.length,c=i,s=0,l=n.length,f=0;s<c&&f<l&&a(t[s],n[f]);)s++,f++;for(;s<c&&f<l&&a(t[c-1],n[l-1]);)c--,l--;var h=s===c,d=f===l;if(h&&d)return n;if(h&&f<l)return ae(o,e,n,f,l,ce(o,t,s,i,u)),n;if(d&&s<c)return se(o,t,s,c),n;var v=c-s,p=l-f,g=-1;if(v<p){if(-1<(g=ie(n,f,l,t,s,c,a)))return ae(o,e,n,f,g,o(t[s],0)),ae(o,e,n,g+v,l,ce(o,t,c,i,u)),n}else if(p<v&&-1<(g=ie(t,s,c,n,f,l,a)))return se(o,t,s,g),se(o,t,g+p,c),n;return v<2||p<2?(ae(o,e,n,f,l,o(t[s],0)),se(o,t,s,c),n):v===p&&function(e,t,n,r,a,o){for(;r<a&&o(n[r],e[t-1]);)r++,t--;return 0===t}(n,l,t,s,c,a)?(ae(o,e,n,f,l,ce(o,t,c,i,u)),n):(fe(o,e,n,f,l,p,t,s,c,v,i,a,u),n)},ve=function(e,t,n,r,a){var o="importNode"in e,u=e.createDocumentFragment();return u.appendChild(e.createTextNode("g")),u.appendChild(e.createTextNode("")),(o?e.importNode(u,!0):u.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),a=t.childNodes||[],o=a.length,u=0;n&&u<o;u++)r.appendChild(e(a[u],n));return r}:o?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document),pe="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")};function ge(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function me(e,t,n,r){for(var a=new ne,o=e.attributes,u=[],i=u.slice.call(o,0),c=i.length,s=0;s<c;){var l,f=i[s++],h=f.value===D;if(h||1<(l=f.value.split(R)).length){var d=f.name;if(!a.has(d)){var v=n.shift().replace(h?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+d+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),p=o[v]||o[v.toLowerCase()];if(a.set(d,p),h)t.push(we(p,r,v,null));else{for(var g=l.length-2;g--;)n.shift();t.push(we(p,r,v,l))}}u.push(f)}}s=0;for(var m=(0<(c=u.length)&&F&&!("ownerSVGElement"in e));s<c;){var y=u[s++];m&&(y.value=""),e.removeAttribute(y.name)}var w=e.nodeName;if(/^script$/i.test(w)){var b=document.createElement(w);for(c=o.length,s=0;s<c;)b.setAttributeNode(o[s++].cloneNode(!0));b.textContent=e.textContent,e.parentNode.replaceChild(b,e)}}function ye(e,t){return{type:"any",node:e,path:t}}function we(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function be(e,t){return{type:"text",node:e,path:t}}var Ne=new T,ke=new T;function xe(e,t){var n=(e.convert||function(e){return e.join(R).replace(K,Y).replace(J,U)})(t),r=e.transform;r&&(n=r(n));var a=ee(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===pe.call(r.textContent).length&&e.removeChild(r)}}(a);var o=[];!function e(t,n,r,a){for(var o=t.childNodes,u=o.length,i=0;i<u;){var c=o[i];switch(c.nodeType){case V:var s=a.concat(i);me(c,n,r,s),e(c,n,r,s);break;case $:var l=c.textContent;if(l===D)r.shift(),n.push(z.test(t.nodeName)?be(t,a):ye(c,a.concat(i)));else switch(l.slice(0,2)){case"/*":if("*/"!==l.slice(-2))break;case"👻":t.removeChild(c),i--,u--}break;case G:z.test(t.nodeName)&&pe.call(c.textContent)===R&&(r.shift(),n.push(be(t,a)))}i++}}(a,o,t.slice(0),[]);var u={content:a,updates:function(n){for(var r=[],a=o.length,u=0,i=0;u<a;){var c=o[u++],s=ge(n,c.path);switch(c.type){case"any":r.push({fn:e.any(s,[]),sparse:!1});break;case"attr":var l=c.sparse,f=e.attribute(s,c.name,c.node);null===l?r.push({fn:f,sparse:!1}):(i+=l.length-2,r.push({fn:f,sparse:!0,values:l}));break;case"text":r.push({fn:e.text(s),sparse:!1}),s.textContent=""}}return a+=i,function(){var e=arguments.length;if(a!==e-1)throw new Error(e-1+" values instead of "+a+"\n"+t.join("${value}"));for(var o=1,u=1;o<e;){var i=r[o-u];if(i.sparse){var c=i.values,s=c[0],l=1,f=c.length;for(u+=f-2;l<f;)s+=arguments[o++]+c[l++];i.fn(s)}else i.fn(arguments[o++])}return n}}};return Ne.set(t,u),u}function Ee(e){return function(t){var n=ke.get(e);return null!=n&&n.template===t||(n=function(e,t){var n=Ne.get(t)||xe(e,t),r=ve.call(document,n.content,!0),a={content:r,template:t,updates:n.updates(r)};return ke.set(e,a),a}(e,t)),n.updates.apply(null,arguments),n.content}}var Ce=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,a){var o,u;return function(i){var c,s,l,f;switch(typeof i){case"object":if(i){if("object"===o){if(!a&&u!==i)for(s in u)s in i||(r[s]="")}else a?r.value="":r.cssText="";for(s in c=a?{}:r,i)l="number"!=typeof(f=i[s])||e.test(s)?f:f+"px",!a&&/^--/.test(s)?c.setProperty(s,l):c[s]=l;o="object",a?r.value=function(e){var r,a=[];for(r in e)a.push(r.replace(t,n),":",e[r],";");return a.join("")}(u=c):u=i;break}default:u!=i&&(o="string",u=i,a?r.value=i||"":r.cssText=i||"")}}}}(),Se=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var a=this.ownerDocument.createRange();a.setStartBefore(e?t[1]:n),a.setEndAfter(r),a.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,a=0,o=r.length;a<o;a++)t.appendChild(r[a]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice),Ae=Array.isArray,Le=Object.create,Me=Object.freeze,Te=Se.prototype.nodeType,je=function(e,t){return e.nodeType===Te?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e},Oe=function(e,t){var n,r=!1,a=t.cloneNode(!0);return function(t){n!==t&&(n=t,a.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(a)),a.value=t):(a.value=t,r||(r=!0,e.setAttributeNode(a)))))}},We=function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},_e=/^(?:form|list)$/i,De=[].slice;function Fe(e){return this.type=e,Ee(this)}function Re(e){return e(this)}Fe.prototype={attribute:function(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return Oe(e,n);t="className";case"data":case"props":return We(e,t);case"style":return Ce(e,n,"ownerSVGElement"in e);case"ref":return function(e){return function(t){t.current=e}}(e);default:return"."===t.slice(0,1)?function(e,t,n){return n?function(n){try{e[t]=n}catch(r){e.setAttribute(t,n)}}:function(n){e[t]=n}}(e,t.slice(1),"ownerSVGElement"in e):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}}(e,t):t in e&&!("ownerSVGElement"in e||_e.test(t))?We(e,t):Oe(e,n)}},any:function(e,t){var n,r={node:je,before:e},a="ownerSVGElement"in e?"svg":"html",o=!1;return function u(i){switch(typeof i){case"string":case"number":case"boolean":o?n!==i&&(n=i,t[0].textContent=i):(o=!0,n=i,t=de(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,i)],r));break;case"function":u(i(e));break;case"object":case"undefined":if(null==i){o=!1,t=de(e.parentNode,t,[],r);break}default:if(o=!1,n=i,Ae(i))if(0===i.length)t.length&&(t=de(e.parentNode,t,[],r));else switch(typeof i[0]){case"string":case"number":case"boolean":u(String(i));break;case"function":u(i.map(Re,e));break;case"object":Ae(i[0])&&(i=i.concat.apply([],i));default:t=de(e.parentNode,t,i,r)}else!function(e){return"ELEMENT_NODE"in e}(i)?"text"in i?u(String(i.text)):"any"in i?u(i.any):"html"in i?t=de(e.parentNode,t,De.call(ee([].concat(i.html).join(""),a).childNodes),r):"length"in i&&u(De.call(i)):t=de(e.parentNode,t,11===i.nodeType?De.call(i.childNodes):[i],r)}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var a=typeof r;"object"===a&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(De.call(r).join("")):"function"===a?n(r(e)):e.textContent=null==r?"":r}}}};var $e=new T,Ve=function(e,t){var n=new T;return r.for=function(e,a){var o,u=n.get(e)||function(e){var t=Le(null);return n.set(e,t),t}(e);return u[a]||(u[a]=(o={sub:[],stack:[],wire:null},function(){return Ge(t,o,r.apply(null,arguments))}))},r.node=function(){return Ge(t,{sub:[],stack:[],wire:null},r.apply(null,arguments)).valueOf(!0)},r;function r(){return new qe(e,function(e){for(var t=arguments.length,n=[W(e)],r=1;r<t;)n.push(arguments[r++]);return n}.apply(null,arguments))}},Ge=function(e,t,n){var r=t.sub,a=t.stack,o={a:0,aLength:r.length,i:0,iLength:a.length},u=He(e,t,n,o),i=o.a,c=o.i,s=o.iLength;return i+1<o.aLength&&r.splice(i+1),c+1<s&&a.splice(c+1),u},ze=function(e){var t={sub:[],stack:[],wire:null};return $e.set(e,t),t},He=function(e,t,n,r){var a=t.stack,o=r.i,u=r.iLength,i=n.type,c=n.args;o===u&&(r.iLength=a.push({type:i,id:c[0],tag:null,wire:null})),Ie(e,t,c,r);var s=a[o];return o<u&&s.id===c[0]&&s.type===i?s.tag.apply(null,c):(s.type=i,s.id=c[0],s.tag=new e(i),s.wire=Ze(s.tag.apply(null,c))),s.wire},Ie=function(e,t,n,r){for(var a=1,o=n.length;a<o;a++){var u=n[a];if("object"==typeof u&&u)if(u instanceof qe)r.i++,n[a]=He(e,t,u,r);else if(Ae(u))for(var i=0,c=u.length;i<c;i++){var s=u[i];if("object"==typeof s&&s&&s instanceof qe){var l=t.sub,f=r.a;f===r.aLength&&(r.aLength=l.push({sub:[],stack:[],wire:null})),r.a++,u[i]=Ge(e,l[f],s)}}}},Ze=function(e){var t=e.childNodes,n=t.length;return 1===n?t[0]:n?new Se(t):e};function qe(e,t){this.type=e,this.args=t}Me(qe);var Pe=function(e){return{html:Ve("html",e),svg:Ve("svg",e),render:function(t,n){var r="function"==typeof n?n():n,a=$e.get(t)||ze(t),o=r instanceof qe?Ge(e,a,r):r;return o!==a.wire&&(a.wire=o,t.textContent="",t.appendChild(o.valueOf(!0))),t}}}(Fe),Be=Pe.render,Je=Pe.html,Ke=Pe.svg;function Qe(){return Je.for(S(null),"").apply(null,arguments)}function Ue(){return Ke.for(S(null),"").apply(null,arguments)}var Xe={html:Qe,svg:Ue};return e.createContext=function(e){var t={value:e,provide:y};return g.set(t,[]),t},e.html=Qe,e.inner=Xe,e.neverland=function(e){return function(){return L(e).apply(null,arguments)}},e.render=Be,e.svg=Ue,e.useCallback=function(e,t){return C(function(){return e},t)},e.useContext=function(e){var t=i(),n=t.hook,r=t.args,a=g.get(e),o={hook:n,args:r};return a.some(w,o)||a.push(o),e.value},e.useEffect=x,e.useLayoutEffect=E,e.useMemo=C,e.useReducer=function(e,t,n){var r=p(n?n(t):t);return[r[0],function(t){r[1](e(r[0],t))}]},e.useRef=S,e.useState=p,e}({});
