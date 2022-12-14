(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nodeApi"] = factory();
	else
		root["nodeApi"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@evestx/bignumber/dist/bignumber.umd.min.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@evestx/bignumber/dist/bignumber.umd.min.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?t(exports):undefined}(this,function(e){"use strict";var t=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,n=Math.ceil,r=Math.floor,i="[BigNumber Error] ",o=i+"Number primitive has more than 15 significant digits: ",u=1e14,s=14,f=9007199254740991,c=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],l=1e7,a=1e9;function h(e){var t=0|e;return e>0||e===t?t:t-1}function p(e){for(var t,n,r=1,i=e.length,o=e[0]+"";r<i;){for(t=e[r++]+"",n=s-t.length;n--;t="0"+t);o+=t}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function g(e,t){var n,r,i=e.c,o=t.c,u=e.s,s=t.s,f=e.e,c=t.e;if(!u||!s)return null;if(n=i&&!i[0],r=o&&!o[0],n||r)return n?r?0:-s:u;if(u!=s)return u;if(n=u<0,r=f==c,!i||!o)return r?0:!i^n?1:-1;if(!r)return f>c^n?1:-1;for(s=(f=i.length)<(c=o.length)?f:c,u=0;u<s;u++)if(i[u]!=o[u])return i[u]>o[u]^n?1:-1;return f==c?0:f>c^n?1:-1}function m(e,t,n,o){if(e<t||e>n||e!==r(e))throw Error(i+(o||"Argument")+("number"==typeof e?e<t||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function N(e){var t=e.c.length-1;return h(e.e/s)==t&&e.c[t]%2!=0}function b(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function w(e,t,n){var r,i;if(t<0){for(i=n+".";++t;i+=n);e=i+e}else if(++t>(r=e.length)){for(i=n,t-=r;--t;i+=n);e+=i}else t<r&&(e=e.slice(0,t)+"."+e.slice(t));return e}var d=function e(d){var y,O,v,E,A,_,U,R,D,L=H.prototype={constructor:H,toString:null,valueOf:null},B=new H(1),S=20,F=4,I=-7,M=21,x=-1e7,P=1e7,T=!1,C=1,G=0,j={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},q="0123456789abcdefghijklmnopqrstuvwxyz";function H(e,n){var i,u,c,l,a,h,p,g,N=this;if(!(N instanceof H))return new H(e,n);if(null==n){if(e&&!0===e._isBigNumber)return N.s=e.s,void(!e.c||e.e>P?N.c=N.e=null:e.e<x?N.c=[N.e=0]:(N.e=e.e,N.c=e.c.slice()));if((h="number"==typeof e)&&0*e==0){if(N.s=1/e<0?(e=-e,-1):1,e===~~e){for(l=0,a=e;a>=10;a/=10,l++);return void(l>P?N.c=N.e=null:(N.e=l,N.c=[e]))}g=String(e)}else{if(!t.test(g=String(e)))return v(N,g,h);N.s=45==g.charCodeAt(0)?(g=g.slice(1),-1):1}(l=g.indexOf("."))>-1&&(g=g.replace(".","")),(a=g.search(/e/i))>0?(l<0&&(l=a),l+=+g.slice(a+1),g=g.substring(0,a)):l<0&&(l=g.length)}else{if(m(n,2,q.length,"Base"),10==n)return z(N=new H(e),S+N.e+1,F);if(g=String(e),h="number"==typeof e){if(0*e!=0)return v(N,g,h,n);if(N.s=1/e<0?(g=g.slice(1),-1):1,H.DEBUG&&g.replace(/^0\.0*|\./,"").length>15)throw Error(o+e)}else N.s=45===g.charCodeAt(0)?(g=g.slice(1),-1):1;for(i=q.slice(0,n),l=a=0,p=g.length;a<p;a++)if(i.indexOf(u=g.charAt(a))<0){if("."==u){if(a>l){l=p;continue}}else if(!c&&(g==g.toUpperCase()&&(g=g.toLowerCase())||g==g.toLowerCase()&&(g=g.toUpperCase()))){c=!0,a=-1,l=0;continue}return v(N,String(e),h,n)}h=!1,(l=(g=O(g,n,10,N.s)).indexOf("."))>-1?g=g.replace(".",""):l=g.length}for(a=0;48===g.charCodeAt(a);a++);for(p=g.length;48===g.charCodeAt(--p););if(g=g.slice(a,++p)){if(p-=a,h&&H.DEBUG&&p>15&&(e>f||e!==r(e)))throw Error(o+N.s*e);if((l=l-a-1)>P)N.c=N.e=null;else if(l<x)N.c=[N.e=0];else{if(N.e=l,N.c=[],a=(l+1)%s,l<0&&(a+=s),a<p){for(a&&N.c.push(+g.slice(0,a)),p-=s;a<p;)N.c.push(+g.slice(a,a+=s));a=s-(g=g.slice(a)).length}else a-=p;for(;a--;g+="0");N.c.push(+g)}}else N.c=[N.e=0]}function V(e,t,n,r){var i,o,u,s,f;if(null==n?n=F:m(n,0,8),!e.c)return e.toString();if(i=e.c[0],u=e.e,null==t)f=p(e.c),f=1==r||2==r&&(u<=I||u>=M)?b(f,u):w(f,u,"0");else if(o=(e=z(new H(e),t,n)).e,s=(f=p(e.c)).length,1==r||2==r&&(t<=o||o<=I)){for(;s<t;f+="0",s++);f=b(f,o)}else if(t-=u,f=w(f,o,"0"),o+1>s){if(--t>0)for(f+=".";t--;f+="0");}else if((t+=o-s)>0)for(o+1==s&&(f+=".");t--;f+="0");return e.s<0&&i?"-"+f:f}function J(e,t){for(var n,r=1,i=new H(e[0]);r<e.length;r++){if(!(n=new H(e[r])).s){i=n;break}t.call(i,n)&&(i=n)}return i}function k(e,t,n){for(var r=1,i=t.length;!t[--i];t.pop());for(i=t[0];i>=10;i/=10,r++);return(n=r+n*s-1)>P?e.c=e.e=null:n<x?e.c=[e.e=0]:(e.e=n,e.c=t),e}function z(e,t,i,o){var f,l,a,h,p,g,m,N=e.c,b=c;if(N){e:{for(f=1,h=N[0];h>=10;h/=10,f++);if((l=t-f)<0)l+=s,a=t,m=(p=N[g=0])/b[f-a-1]%10|0;else if((g=n((l+1)/s))>=N.length){if(!o)break e;for(;N.length<=g;N.push(0));p=m=0,f=1,a=(l%=s)-s+1}else{for(p=h=N[g],f=1;h>=10;h/=10,f++);m=(a=(l%=s)-s+f)<0?0:p/b[f-a-1]%10|0}if(o=o||t<0||null!=N[g+1]||(a<0?p:p%b[f-a-1]),o=i<4?(m||o)&&(0==i||i==(e.s<0?3:2)):m>5||5==m&&(4==i||o||6==i&&(l>0?a>0?p/b[f-a]:0:N[g-1])%10&1||i==(e.s<0?8:7)),t<1||!N[0])return N.length=0,o?(t-=e.e+1,N[0]=b[(s-t%s)%s],e.e=-t||0):N[0]=e.e=0,e;if(0==l?(N.length=g,h=1,g--):(N.length=g+1,h=b[s-l],N[g]=a>0?r(p/b[f-a]%b[a])*h:0),o)for(;;){if(0==g){for(l=1,a=N[0];a>=10;a/=10,l++);for(a=N[0]+=h,h=1;a>=10;a/=10,h++);l!=h&&(e.e++,N[0]==u&&(N[0]=1));break}if(N[g]+=h,N[g]!=u)break;N[g--]=0,h=1}for(l=N.length;0===N[--l];N.pop());}e.e>P?e.c=e.e=null:e.e<x&&(e.c=[e.e=0])}return e}function $(e){var t,n=e.e;return null===n?e.toString():(t=p(e.c),t=n<=I||n>=M?b(t,n):w(t,n,"0"),e.s<0?"-"+t:t)}return H.clone=e,H.ROUND_UP=0,H.ROUND_DOWN=1,H.ROUND_CEIL=2,H.ROUND_FLOOR=3,H.ROUND_HALF_UP=4,H.ROUND_HALF_DOWN=5,H.ROUND_HALF_EVEN=6,H.ROUND_HALF_CEIL=7,H.ROUND_HALF_FLOOR=8,H.EUCLID=9,H.config=H.set=function(e){var t,n;if(null!=e){if("object"!=typeof e)throw Error(i+"Object expected: "+e);if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(m(n=e[t],0,a,t),S=n),e.hasOwnProperty(t="ROUNDING_MODE")&&(m(n=e[t],0,8,t),F=n),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((n=e[t])&&n.pop?(m(n[0],-a,0,t),m(n[1],0,a,t),I=n[0],M=n[1]):(m(n,-a,a,t),I=-(M=n<0?-n:n))),e.hasOwnProperty(t="RANGE"))if((n=e[t])&&n.pop)m(n[0],-a,-1,t),m(n[1],1,a,t),x=n[0],P=n[1];else{if(m(n,-a,a,t),!n)throw Error(i+t+" cannot be zero: "+n);x=-(P=n<0?-n:n)}if(e.hasOwnProperty(t="CRYPTO")){if((n=e[t])!==!!n)throw Error(i+t+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw T=!n,Error(i+"crypto unavailable");T=n}else T=n}if(e.hasOwnProperty(t="MODULO_MODE")&&(m(n=e[t],0,9,t),C=n),e.hasOwnProperty(t="POW_PRECISION")&&(m(n=e[t],0,a,t),G=n),e.hasOwnProperty(t="FORMAT")){if("object"!=typeof(n=e[t]))throw Error(i+t+" not an object: "+n);j=n}if(e.hasOwnProperty(t="ALPHABET")){if("string"!=typeof(n=e[t])||/^.$|[+-.\s]|(.).*\1/.test(n))throw Error(i+t+" invalid: "+n);q=n}}return{DECIMAL_PLACES:S,ROUNDING_MODE:F,EXPONENTIAL_AT:[I,M],RANGE:[x,P],CRYPTO:T,MODULO_MODE:C,POW_PRECISION:G,FORMAT:j,ALPHABET:q}},H.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!H.DEBUG)return!0;var t,n,o=e.c,f=e.e,c=e.s;e:if("[object Array]"=={}.toString.call(o)){if((1===c||-1===c)&&f>=-a&&f<=a&&f===r(f)){if(0===o[0]){if(0===f&&1===o.length)return!0;break e}if((t=(f+1)%s)<1&&(t+=s),String(o[0]).length==t){for(t=0;t<o.length;t++)if((n=o[t])<0||n>=u||n!==r(n))break e;if(0!==n)return!0}}}else if(null===o&&null===f&&(null===c||1===c||-1===c))return!0;throw Error(i+"Invalid BigNumber: "+e)},H.maximum=H.max=function(){return J(arguments,L.lt)},H.minimum=H.min=function(){return J(arguments,L.gt)},H.random=(E=9007199254740992*Math.random()&2097151?function(){return r(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var t,o,u,f,l,h=0,p=[],g=new H(B);if(null==e?e=S:m(e,0,a),f=n(e/s),T)if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(f*=2));h<f;)(l=131072*t[h]+(t[h+1]>>>11))>=9e15?(o=crypto.getRandomValues(new Uint32Array(2)),t[h]=o[0],t[h+1]=o[1]):(p.push(l%1e14),h+=2);h=f/2}else{if(!crypto.randomBytes)throw T=!1,Error(i+"crypto unavailable");for(t=crypto.randomBytes(f*=7);h<f;)(l=281474976710656*(31&t[h])+1099511627776*t[h+1]+4294967296*t[h+2]+16777216*t[h+3]+(t[h+4]<<16)+(t[h+5]<<8)+t[h+6])>=9e15?crypto.randomBytes(7).copy(t,h):(p.push(l%1e14),h+=7);h=f/7}if(!T)for(;h<f;)(l=E())<9e15&&(p[h++]=l%1e14);for(f=p[--h],e%=s,f&&e&&(l=c[s-e],p[h]=r(f/l)*l);0===p[h];p.pop(),h--);if(h<0)p=[u=0];else{for(u=-1;0===p[0];p.splice(0,1),u-=s);for(h=1,l=p[0];l>=10;l/=10,h++);h<s&&(u-=s-h)}return g.e=u,g.c=p,g}),H.sum=function(){for(var e=1,t=arguments,n=new H(t[0]);e<t.length;)n=n.plus(t[e++]);return n},O=function(){function e(e,t,n,r){for(var i,o,u=[0],s=0,f=e.length;s<f;){for(o=u.length;o--;u[o]*=t);for(u[0]+=r.indexOf(e.charAt(s++)),i=0;i<u.length;i++)u[i]>n-1&&(null==u[i+1]&&(u[i+1]=0),u[i+1]+=u[i]/n|0,u[i]%=n)}return u.reverse()}return function(t,n,r,i,o){var u,s,f,c,l,a,h,g,m=t.indexOf("."),N=S,b=F;for(m>=0&&(c=G,G=0,t=t.replace(".",""),a=(g=new H(n)).pow(t.length-m),G=c,g.c=e(w(p(a.c),a.e,"0"),10,r,"0123456789"),g.e=g.c.length),f=c=(h=e(t,n,r,o?(u=q,"0123456789"):(u="0123456789",q))).length;0==h[--c];h.pop());if(!h[0])return u.charAt(0);if(m<0?--f:(a.c=h,a.e=f,a.s=i,h=(a=y(a,g,N,b,r)).c,l=a.r,f=a.e),m=h[s=f+N+1],c=r/2,l=l||s<0||null!=h[s+1],l=b<4?(null!=m||l)&&(0==b||b==(a.s<0?3:2)):m>c||m==c&&(4==b||l||6==b&&1&h[s-1]||b==(a.s<0?8:7)),s<1||!h[0])t=l?w(u.charAt(1),-N,u.charAt(0)):u.charAt(0);else{if(h.length=s,l)for(--r;++h[--s]>r;)h[s]=0,s||(++f,h=[1].concat(h));for(c=h.length;!h[--c];);for(m=0,t="";m<=c;t+=u.charAt(h[m++]));t=w(t,f,u.charAt(0))}return t}}(),y=function(){function e(e,t,n){var r,i,o,u,s=0,f=e.length,c=t%l,a=t/l|0;for(e=e.slice();f--;)s=((i=c*(o=e[f]%l)+(r=a*o+(u=e[f]/l|0)*c)%l*l+s)/n|0)+(r/l|0)+a*u,e[f]=i%n;return s&&(e=[s].concat(e)),e}function t(e,t,n,r){var i,o;if(n!=r)o=n>r?1:-1;else for(i=o=0;i<n;i++)if(e[i]!=t[i]){o=e[i]>t[i]?1:-1;break}return o}function n(e,t,n,r){for(var i=0;n--;)e[n]-=i,i=e[n]<t[n]?1:0,e[n]=i*r+e[n]-t[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(i,o,f,c,l){var a,p,g,m,N,b,w,d,y,O,v,E,A,_,U,R,D,L=i.s==o.s?1:-1,B=i.c,S=o.c;if(!(B&&B[0]&&S&&S[0]))return new H(i.s&&o.s&&(B?!S||B[0]!=S[0]:S)?B&&0==B[0]||!S?0*L:L/0:NaN);for(y=(d=new H(L)).c=[],L=f+(p=i.e-o.e)+1,l||(l=u,p=h(i.e/s)-h(o.e/s),L=L/s|0),g=0;S[g]==(B[g]||0);g++);if(S[g]>(B[g]||0)&&p--,L<0)y.push(1),m=!0;else{for(_=B.length,R=S.length,g=0,L+=2,(N=r(l/(S[0]+1)))>1&&(S=e(S,N,l),B=e(B,N,l),R=S.length,_=B.length),A=R,v=(O=B.slice(0,R)).length;v<R;O[v++]=0);D=S.slice(),D=[0].concat(D),U=S[0],S[1]>=l/2&&U++;do{if(N=0,(a=t(S,O,R,v))<0){if(E=O[0],R!=v&&(E=E*l+(O[1]||0)),(N=r(E/U))>1)for(N>=l&&(N=l-1),w=(b=e(S,N,l)).length,v=O.length;1==t(b,O,w,v);)N--,n(b,R<w?D:S,w,l),w=b.length,a=1;else 0==N&&(a=N=1),w=(b=S.slice()).length;if(w<v&&(b=[0].concat(b)),n(O,b,v,l),v=O.length,-1==a)for(;t(S,O,R,v)<1;)N++,n(O,R<v?D:S,v,l),v=O.length}else 0===a&&(N++,O=[0]);y[g++]=N,O[0]?O[v++]=B[A]||0:(O=[B[A]],v=1)}while((A++<_||null!=O[0])&&L--);m=null!=O[0],y[0]||y.splice(0,1)}if(l==u){for(g=1,L=y[0];L>=10;L/=10,g++);z(d,f+(d.e=g+p*s-1)+1,c,m)}else d.e=p,d.r=+m;return d}}(),A=/^(-?)0([xbo])(?=\w[\w.]*$)/i,_=/^([^.]+)\.$/,U=/^\.([^.]+)$/,R=/^-?(Infinity|NaN)$/,D=/^\s*\+(?=[\w.])|^\s+|\s+$/g,v=function(e,t,n,r){var o,u=n?t:t.replace(D,"");if(R.test(u))e.s=isNaN(u)?null:u<0?-1:1;else{if(!n&&(u=u.replace(A,function(e,t,n){return o="x"==(n=n.toLowerCase())?16:"b"==n?2:8,r&&r!=o?e:t}),r&&(o=r,u=u.replace(_,"$1").replace(U,"0.$1")),t!=u))return new H(u,o);if(H.DEBUG)throw Error(i+"Not a"+(r?" base "+r:"")+" number: "+t);e.s=null}e.c=e.e=null},L.absoluteValue=L.abs=function(){var e=new H(this);return e.s<0&&(e.s=1),e},L.comparedTo=function(e,t){return g(this,new H(e,t))},L.decimalPlaces=L.dp=function(e,t){var n,r,i,o=this;if(null!=e)return m(e,0,a),null==t?t=F:m(t,0,8),z(new H(o),e+o.e+1,t);if(!(n=o.c))return null;if(r=((i=n.length-1)-h(this.e/s))*s,i=n[i])for(;i%10==0;i/=10,r--);return r<0&&(r=0),r},L.dividedBy=L.div=function(e,t){return y(this,new H(e,t),S,F)},L.dividedToIntegerBy=L.idiv=function(e,t){return y(this,new H(e,t),0,1)},L.exponentiatedBy=L.pow=function(e,t){var o,u,f,c,l,a,h,p,g=this;if((e=new H(e)).c&&!e.isInteger())throw Error(i+"Exponent not an integer: "+$(e));if(null!=t&&(t=new H(t)),l=e.e>14,!g.c||!g.c[0]||1==g.c[0]&&!g.e&&1==g.c.length||!e.c||!e.c[0])return p=new H(Math.pow(+$(g),l?2-N(e):+$(e))),t?p.mod(t):p;if(a=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new H(NaN);(u=!a&&g.isInteger()&&t.isInteger())&&(g=g.mod(t))}else{if(e.e>9&&(g.e>0||g.e<-1||(0==g.e?g.c[0]>1||l&&g.c[1]>=24e7:g.c[0]<8e13||l&&g.c[0]<=9999975e7)))return c=g.s<0&&N(e)?-0:0,g.e>-1&&(c=1/c),new H(a?1/c:c);G&&(c=n(G/s+2))}for(l?(o=new H(.5),a&&(e.s=1),h=N(e)):h=(f=Math.abs(+$(e)))%2,p=new H(B);;){if(h){if(!(p=p.times(g)).c)break;c?p.c.length>c&&(p.c.length=c):u&&(p=p.mod(t))}if(f){if(0===(f=r(f/2)))break;h=f%2}else if(z(e=e.times(o),e.e+1,1),e.e>14)h=N(e);else{if(0==(f=+$(e)))break;h=f%2}g=g.times(g),c?g.c&&g.c.length>c&&(g.c.length=c):u&&(g=g.mod(t))}return u?p:(a&&(p=B.div(p)),t?p.mod(t):c?z(p,G,F,void 0):p)},L.integerValue=function(e){var t=new H(this);return null==e?e=F:m(e,0,8),z(t,t.e+1,e)},L.isEqualTo=L.eq=function(e,t){return 0===g(this,new H(e,t))},L.isFinite=function(){return!!this.c},L.isGreaterThan=L.gt=function(e,t){return g(this,new H(e,t))>0},L.isGreaterThanOrEqualTo=L.gte=function(e,t){return 1===(t=g(this,new H(e,t)))||0===t},L.isInteger=function(){return!!this.c&&h(this.e/s)>this.c.length-2},L.isLessThan=L.lt=function(e,t){return g(this,new H(e,t))<0},L.isLessThanOrEqualTo=L.lte=function(e,t){return-1===(t=g(this,new H(e,t)))||0===t},L.isNaN=function(){return!this.s},L.isNegative=function(){return this.s<0},L.isPositive=function(){return this.s>0},L.isZero=function(){return!!this.c&&0==this.c[0]},L.minus=function(e,t){var n,r,i,o,f=this,c=f.s;if(t=(e=new H(e,t)).s,!c||!t)return new H(NaN);if(c!=t)return e.s=-t,f.plus(e);var l=f.e/s,a=e.e/s,p=f.c,g=e.c;if(!l||!a){if(!p||!g)return p?(e.s=-t,e):new H(g?f:NaN);if(!p[0]||!g[0])return g[0]?(e.s=-t,e):new H(p[0]?f:3==F?-0:0)}if(l=h(l),a=h(a),p=p.slice(),c=l-a){for((o=c<0)?(c=-c,i=p):(a=l,i=g),i.reverse(),t=c;t--;i.push(0));i.reverse()}else for(r=(o=(c=p.length)<(t=g.length))?c:t,c=t=0;t<r;t++)if(p[t]!=g[t]){o=p[t]<g[t];break}if(o&&(i=p,p=g,g=i,e.s=-e.s),(t=(r=g.length)-(n=p.length))>0)for(;t--;p[n++]=0);for(t=u-1;r>c;){if(p[--r]<g[r]){for(n=r;n&&!p[--n];p[n]=t);--p[n],p[r]+=u}p[r]-=g[r]}for(;0==p[0];p.splice(0,1),--a);return p[0]?k(e,p,a):(e.s=3==F?-1:1,e.c=[e.e=0],e)},L.modulo=L.mod=function(e,t){var n,r,i=this;return e=new H(e,t),!i.c||!e.s||e.c&&!e.c[0]?new H(NaN):!e.c||i.c&&!i.c[0]?new H(i):(9==C?(r=e.s,e.s=1,n=y(i,e,0,3),e.s=r,n.s*=r):n=y(i,e,0,C),(e=i.minus(n.times(e))).c[0]||1!=C||(e.s=i.s),e)},L.multipliedBy=L.times=function(e,t){var n,r,i,o,f,c,a,p,g,m,N,b,w,d,y,O=this,v=O.c,E=(e=new H(e,t)).c;if(!(v&&E&&v[0]&&E[0]))return!O.s||!e.s||v&&!v[0]&&!E||E&&!E[0]&&!v?e.c=e.e=e.s=null:(e.s*=O.s,v&&E?(e.c=[0],e.e=0):e.c=e.e=null),e;for(r=h(O.e/s)+h(e.e/s),e.s*=O.s,(a=v.length)<(m=E.length)&&(w=v,v=E,E=w,i=a,a=m,m=i),i=a+m,w=[];i--;w.push(0));for(d=u,y=l,i=m;--i>=0;){for(n=0,N=E[i]%y,b=E[i]/y|0,o=i+(f=a);o>i;)n=((p=N*(p=v[--f]%y)+(c=b*p+(g=v[f]/y|0)*N)%y*y+w[o]+n)/d|0)+(c/y|0)+b*g,w[o--]=p%d;w[o]=n}return n?++r:w.splice(0,1),k(e,w,r)},L.negated=function(){var e=new H(this);return e.s=-e.s||null,e},L.plus=function(e,t){var n,r=this,i=r.s;if(t=(e=new H(e,t)).s,!i||!t)return new H(NaN);if(i!=t)return e.s=-t,r.minus(e);var o=r.e/s,f=e.e/s,c=r.c,l=e.c;if(!o||!f){if(!c||!l)return new H(i/0);if(!c[0]||!l[0])return l[0]?e:new H(c[0]?r:0*i)}if(o=h(o),f=h(f),c=c.slice(),i=o-f){for(i>0?(f=o,n=l):(i=-i,n=c),n.reverse();i--;n.push(0));n.reverse()}for((i=c.length)-(t=l.length)<0&&(n=l,l=c,c=n,t=i),i=0;t;)i=(c[--t]=c[t]+l[t]+i)/u|0,c[t]=u===c[t]?0:c[t]%u;return i&&(c=[i].concat(c),++f),k(e,c,f)},L.precision=L.sd=function(e,t){var n,r,i,o=this;if(null!=e&&e!==!!e)return m(e,1,a),null==t?t=F:m(t,0,8),z(new H(o),e,t);if(!(n=o.c))return null;if(r=(i=n.length-1)*s+1,i=n[i]){for(;i%10==0;i/=10,r--);for(i=n[0];i>=10;i/=10,r++);}return e&&o.e+1>r&&(r=o.e+1),r},L.shiftedBy=function(e){return m(e,-f,f),this.times("1e"+e)},L.squareRoot=L.sqrt=function(){var e,t,n,r,i,o=this,u=o.c,s=o.s,f=o.e,c=S+4,l=new H("0.5");if(1!==s||!u||!u[0])return new H(!s||s<0&&(!u||u[0])?NaN:u?o:1/0);if(0==(s=Math.sqrt(+$(o)))||s==1/0?(((t=p(u)).length+f)%2==0&&(t+="0"),s=Math.sqrt(+t),f=h((f+1)/2)-(f<0||f%2),n=new H(t=s==1/0?"5e"+f:(t=s.toExponential()).slice(0,t.indexOf("e")+1)+f)):n=new H(s+""),n.c[0])for((s=(f=n.e)+c)<3&&(s=0);;)if(i=n,n=l.times(i.plus(y(o,i,c,1))),p(i.c).slice(0,s)===(t=p(n.c)).slice(0,s)){if(n.e<f&&--s,"9999"!=(t=t.slice(s-3,s+1))&&(r||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(z(n,n.e+S+2,1),e=!n.times(n).eq(o));break}if(!r&&(z(i,i.e+S+2,0),i.times(i).eq(o))){n=i;break}c+=4,s+=4,r=1}return z(n,n.e+S+1,F,e)},L.toExponential=function(e,t){return null!=e&&(m(e,0,a),e++),V(this,e,t,1)},L.toFixed=function(e,t){return null!=e&&(m(e,0,a),e=e+this.e+1),V(this,e,t)},L.toFormat=function(e,t,n){var r,o=this;if(null==n)null!=e&&t&&"object"==typeof t?(n=t,t=null):e&&"object"==typeof e?(n=e,e=t=null):n=j;else if("object"!=typeof n)throw Error(i+"Argument not an object: "+n);if(r=o.toFixed(e,t),o.c){var u,s=r.split("."),f=+n.groupSize,c=+n.secondaryGroupSize,l=n.groupSeparator||"",a=s[0],h=s[1],p=o.s<0,g=p?a.slice(1):a,m=g.length;if(c&&(u=f,f=c,c=u,m-=u),f>0&&m>0){for(u=m%f||f,a=g.substr(0,u);u<m;u+=f)a+=l+g.substr(u,f);c>0&&(a+=l+g.slice(u)),p&&(a="-"+a)}r=h?a+(n.decimalSeparator||"")+((c=+n.fractionGroupSize)?h.replace(new RegExp("\\d{"+c+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):h):a}return(n.prefix||"")+r+(n.suffix||"")},L.toFraction=function(e){var t,n,r,o,u,f,l,a,h,g,m,N,b=this,w=b.c;if(null!=e&&(!(l=new H(e)).isInteger()&&(l.c||1!==l.s)||l.lt(B)))throw Error(i+"Argument "+(l.isInteger()?"out of range: ":"not an integer: ")+$(l));if(!w)return new H(b);for(t=new H(B),h=n=new H(B),r=a=new H(B),N=p(w),u=t.e=N.length-b.e-1,t.c[0]=c[(f=u%s)<0?s+f:f],e=!e||l.comparedTo(t)>0?u>0?t:h:l,f=P,P=1/0,l=new H(N),a.c[0]=0;g=y(l,t,0,1),1!=(o=n.plus(g.times(r))).comparedTo(e);)n=r,r=o,h=a.plus(g.times(o=h)),a=o,t=l.minus(g.times(o=t)),l=o;return o=y(e.minus(n),r,0,1),a=a.plus(o.times(h)),n=n.plus(o.times(r)),a.s=h.s=b.s,m=y(h,r,u*=2,F).minus(b).abs().comparedTo(y(a,n,u,F).minus(b).abs())<1?[h,r]:[a,n],P=f,m},L.toNumber=function(){return+$(this)},L.toPrecision=function(e,t){return null!=e&&m(e,1,a),V(this,e,t,2)},L.toString=function(e){var t,n=this,r=n.s,i=n.e;return null===i?r?(t="Infinity",r<0&&(t="-"+t)):t="NaN":(null==e?t=i<=I||i>=M?b(p(n.c),i):w(p(n.c),i,"0"):10===e?t=w(p((n=z(new H(n),S+i+1,F)).c),n.e,"0"):(m(e,2,q.length,"Base"),t=O(w(p(n.c),i,"0"),10,e,r,!0)),r<0&&n.c[0]&&(t="-"+t)),t},L.valueOf=L.toJSON=function(){return $(this)},L._isBigNumber=!0,L[Symbol.toStringTag]="BigNumber",L[Symbol.for("nodejs.util.inspect.custom")]=L.valueOf,null!=d&&H.set(d),H}(),y=function(){return(y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},O=function(){function e(){this.format=e.DEFAULT_FORMAT,d.config({FORMAT:this.format})}return e.prototype.set=function(e){"FORMAT"in e&&(this.format=y({},this.format,e.FORMAT),e.FORMAT=this.format),d.config(e)},e.DEFAULT_FORMAT={prefix:"",decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0,suffix:""},e}();e.BigNumber=function(){function e(t){"object"==typeof t&&e.isBigNumber(t)?this.bn=t.bn.plus(0):this.bn=e.toBigNumberJs(t)}return e.prototype.clone=function(){return new e(this)},e.prototype.add=function(t){return new e(this.bn.plus(e.toBigNumberJs(t)))},e.prototype.sub=function(t){return new e(this.bn.minus(e.toBigNumberJs(t)))},e.prototype.mul=function(t){return new e(this.bn.times(e.toBigNumberJs(t)))},e.prototype.div=function(t){return new e(this.bn.div(e.toBigNumberJs(t)))},e.prototype.pow=function(t){return new e(this.bn.pow(e.toBigNumberJs(t)))},e.prototype.sqrt=function(){return new e(this.bn.sqrt())},e.prototype.abs=function(){return new e(this.bn.abs())},e.prototype.mod=function(t){return new e(this.bn.mod(e.toBigNumberJs(t)))},e.prototype.roundTo=function(t,n){return void 0===t&&(t=0),void 0===n&&(n=4),new e(this.bn.dp(t||0,n))},e.prototype.eq=function(t){return this.bn.eq(e.toBigNumberJs(t))},e.prototype.lt=function(t){return this.bn.lt(e.toBigNumberJs(t))},e.prototype.gt=function(t){return this.bn.gt(e.toBigNumberJs(t))},e.prototype.lte=function(t){return this.bn.lte(e.toBigNumberJs(t))},e.prototype.gte=function(t){return this.bn.gte(e.toBigNumberJs(t))},e.prototype.isNaN=function(){return this.bn.isNaN()},e.prototype.isFinite=function(){return this.bn.isFinite()},e.prototype.isZero=function(){return this.eq(0)},e.prototype.isPositive=function(){return this.gt(0)},e.prototype.isNegative=function(){return this.lt(0)},e.prototype.isInt=function(){return this.bn.isInteger()},e.prototype.getDecimalsCount=function(){return this.bn.dp()},e.prototype.isEven=function(){return this.mod(2).eq(0)},e.prototype.isOdd=function(){return!this.isEven()},e.prototype.isInSignedRange=function(){return this.gte(e.MIN_VALUE)&&this.lte(e.MAX_VALUE)},e.prototype.isInUnsignedRange=function(){return this.gte(e.MIN_UNSIGNED_VALUE)&&this.lte(e.MAX_UNSIGNED_VALUE)},e.prototype.toFormat=function(e,t,n){return this.bn.toFormat(e,t,n)},e.prototype.toFixed=function(e,t){return null==e?this.bn.toFixed():this.bn.toFixed(e,t)},e.prototype.toString=function(){return this.toFixed()},e.prototype.toNumber=function(){return this.bn.toNumber()},e.prototype.toJSON=function(){return this.bn.toFixed()},e.prototype.valueOf=function(){return this.bn.valueOf()},e.prototype.toBytes=function(t){var n=void 0===t?{}:t,r=n.isSigned,i=void 0===r||r,o=n.isLong,u=void 0===o||o;if(!this.isInt())throw new Error("Cant create bytes from number with decimals!");if(!i&&this.isNegative())throw new Error("Cant create bytes from negative number in signed mode!");if(u&&i&&!this.isInSignedRange())throw new Error("Number is not from signed numbers range");if(u&&!i&&!this.isInUnsignedRange())throw new Error("Number is not from unsigned numbers range");var s=i&&this.isNegative(),f=s?"1":"0",c=this.bn.plus(f).toString(2).replace("-",""),l=u?64:8*Math.ceil(c.length/8),a=e._toLength(l,c).split(""),h=[];do{h.push(parseInt(a.splice(0,8).join(""),2))}while(a.length);return s?Uint8Array.from(h.map(function(e){return 255-e})):Uint8Array.from(h)},e.fromBytes=function(t,n){var r=void 0===n?{}:n,i=r.isSigned,o=void 0===i||i,u=r.isLong,s=void 0===u||u;if(s&&8!==t.length)throw new Error("Wrong bytes length! Minimal length is 8 byte!");t=!s&&t.length>0||s?t:[0];var f=!!o&&t[0]>127,c=Array.from(t).map(function(e){return f?255-e:e}).map(function(t){return e._toLength(8,t.toString(2))}).join(""),l=new e(new d(c,2));return f?l.mul(-1).sub(1):l},e.max=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.toBigNumber(t).reduce(function(e,t){return e.gte(t)?e:t})},e.min=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.toBigNumber(t).reduce(function(e,t){return e.lte(t)?e:t})},e.sum=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.toBigNumber(t).reduce(function(e,t){return e.add(t)})},e.isBigNumber=function(t){return t&&"object"==typeof t&&(t instanceof e||Object.entries(e.prototype).filter(function(e){return"_"!==e[0].charAt(0)}).every(function(e){var n=e[0],r=e[1];return n in t&&typeof r==typeof t[n]}))},e.toBigNumber=function(t){return Array.isArray(t)?t.map(function(t){return new e(t)}):new e(t)},e.toBigNumberJs=function(t){return d.isBigNumber(t)?t:t instanceof e?t.bn:new d(t)},e._toLength=function(e,t){return new Array(e).fill("0",0,e).concat(t.split("")).slice(-e).join("")},e.MIN_VALUE=new e("-9223372036854775808"),e.MAX_VALUE=new e("9223372036854775807"),e.MIN_UNSIGNED_VALUE=new e("0"),e.MAX_UNSIGNED_VALUE=new e("18446744073709551615"),e.config=new O,e}(),function(e){!function(e){e[e.ROUND_UP=0]="ROUND_UP",e[e.ROUND_DOWN=1]="ROUND_DOWN",e[e.ROUND_CEIL=2]="ROUND_CEIL",e[e.ROUND_FLOOR=3]="ROUND_FLOOR",e[e.ROUND_HALF_UP=4]="ROUND_HALF_UP",e[e.ROUND_HALF_DOWN=5]="ROUND_HALF_DOWN",e[e.ROUND_HALF_EVEN=6]="ROUND_HALF_EVEN",e[e.ROUND_HALF_CEIL=7]="ROUND_HALF_CEIL",e[e.ROUND_HALF_FLOOR=8]="ROUND_HALF_FLOOR"}(e.ROUND_MODE||(e.ROUND_MODE={}))}(e.BigNumber||(e.BigNumber={}));var v=e.BigNumber;e.default=v,Object.defineProperty(e,"__esModule",{value:!0})});


/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/conversions/base-xx.js":
/*!******************************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/conversions/base-xx.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
var util_1 = __webpack_require__(/*! node-forge/lib/util */ "./node_modules/node-forge/lib/util.js");
var base58_1 = __importDefault(__webpack_require__(/*! ../libs/base58 */ "./node_modules/@evestx/ts-lib-crypto/libs/base58.js"));
var param_1 = __webpack_require__(/*! ./param */ "./node_modules/@evestx/ts-lib-crypto/conversions/param.js");
var string_bytes_1 = __webpack_require__(/*! ./string-bytes */ "./node_modules/@evestx/ts-lib-crypto/conversions/string-bytes.js");
exports.base64Decode = function (input) {
    return string_bytes_1.stringToBytes(util_1.decode64(input), 'raw');
};
exports.base64Encode = function (input) {
    return util_1.encode64(string_bytes_1.bytesToString(param_1._fromIn(input), 'raw'));
};
exports.base58Decode = function (input) {
    return base58_1.default.decode(input);
};
exports.base58Encode = function (input) {
    return base58_1.default.encode(param_1._fromIn(input));
};
exports.base16Decode = function (input) {
    return string_bytes_1.stringToBytes(util_1.hexToBytes(input), 'raw');
};
exports.base16Encode = function (input) { return util_1.bytesToHex(string_bytes_1.bytesToString(param_1._fromIn(input), 'raw')); };
//# sourceMappingURL=base-xx.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/conversions/param.js":
/*!****************************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/conversions/param.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var base_xx_1 = __webpack_require__(/*! ./base-xx */ "./node_modules/@evestx/ts-lib-crypto/conversions/base-xx.js");
var string_bytes_1 = __webpack_require__(/*! ./string-bytes */ "./node_modules/@evestx/ts-lib-crypto/conversions/string-bytes.js");
var isString = function (val) { return typeof val === 'string' || val instanceof String; };
var isUint8Array = function (val) { return val instanceof Uint8Array; };
var isTRawStringInDiscriminator = function (_) { return false; };
exports._fromIn = function (inValue) {
    if (isString(inValue))
        return base_xx_1.base58Decode(inValue);
    if (isUint8Array(inValue))
        return inValue;
    return Uint8Array.from(inValue);
};
exports._fromRawIn = function (inValue) {
    if (isTRawStringInDiscriminator(inValue))
        throw new Error('');
    if (isString(inValue))
        return string_bytes_1.stringToBytes(inValue);
    if (isUint8Array(inValue))
        return inValue;
    return Uint8Array.from(inValue);
};
//# sourceMappingURL=param.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/conversions/string-bytes.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/conversions/string-bytes.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var param_1 = __webpack_require__(/*! ./param */ "./node_modules/@evestx/ts-lib-crypto/conversions/param.js");
var Utf8_1 = __webpack_require__(/*! ../libs/Utf8 */ "./node_modules/@evestx/ts-lib-crypto/libs/Utf8.js");
exports.stringToBytes = function (str, encoding) {
    if (encoding === void 0) { encoding = 'utf8'; }
    if (encoding === 'utf8') {
        return Utf8_1.strToUtf8Array(str);
    }
    else if (encoding === 'raw') {
        return Uint8Array.from(__spread(str).map(function (c) { return c.charCodeAt(0); }));
    }
    else {
        throw new Error("Unsupported encoding " + encoding);
    }
};
exports.bytesToString = function (bytes, encoding) {
    if (encoding === void 0) { encoding = 'utf8'; }
    if (encoding === 'utf8') {
        return Utf8_1.utf8ArrayToStr(Array.from(param_1._fromIn(bytes)));
    }
    else if (encoding === 'raw') {
        return Array.from(param_1._fromIn(bytes))
            .map(function (byte) { return String.fromCharCode(byte); })
            .join('');
    }
    else {
        throw new Error("Unsupported encoding " + encoding);
    }
};
/**
 * Converts each character to byte
 */
exports.binaryStringToBytes = function (str) {
    return Uint8Array.from(__spread(str).map(function (c) { return c.charCodeAt(0); }));
};
/**
 * Reads each byte as individual character
 */
exports.bytesToBinaryString = function (bytes) {
    return Array.from(param_1._fromIn(bytes))
        .map(function (byte) { return String.fromCharCode(byte); })
        .join('');
};
//# sourceMappingURL=string-bytes.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/crypto/address-keys-seed.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/crypto/address-keys-seed.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var interface_1 = __webpack_require__(/*! ./interface */ "./node_modules/@evestx/ts-lib-crypto/crypto/interface.js");
var seed_1 = __webpack_require__(/*! ../extensions/seed */ "./node_modules/@evestx/ts-lib-crypto/extensions/seed.js");
var hashing_1 = __webpack_require__(/*! ./hashing */ "./node_modules/@evestx/ts-lib-crypto/crypto/hashing.js");
var param_1 = __webpack_require__(/*! ../conversions/param */ "./node_modules/@evestx/ts-lib-crypto/conversions/param.js");
var concat_split_1 = __webpack_require__(/*! ./concat-split */ "./node_modules/@evestx/ts-lib-crypto/crypto/concat-split.js");
var util_1 = __webpack_require__(/*! ./util */ "./node_modules/@evestx/ts-lib-crypto/crypto/util.js");
var axlsign_1 = __importDefault(__webpack_require__(/*! ../libs/axlsign */ "./node_modules/@evestx/ts-lib-crypto/libs/axlsign.js"));
exports.seedWithNonce = function (seed, nonce) { return ({ seed: seed_1.Seed.toBinary(seed).seed, nonce: nonce }); };
exports.buildAddress = function (publicKeyBytes, chainId) {
    if (chainId === void 0) { chainId = interface_1.MAIN_NET_CHAIN_ID; }
    var prefix = [1, typeof chainId === 'string' ? chainId.charCodeAt(0) : chainId];
    var publicKeyHashPart = hashing_1._hashChain(publicKeyBytes).slice(0, 20);
    var rawAddress = concat_split_1.concat(prefix, publicKeyHashPart);
    var addressHash = hashing_1._hashChain(rawAddress).slice(0, 4);
    return concat_split_1.concat(rawAddress, addressHash);
};
var buildSeedHash = function (seedBytes, nonce) {
    var nonceArray = [0, 0, 0, 0];
    if (nonce && nonce > 0) {
        var remainder = nonce;
        for (var i = 3; i >= 0; i--) {
            nonceArray[3 - i] = Math.floor(remainder / Math.pow(2, (i * 8)));
            remainder = remainder % Math.pow(2, (i * 8));
        }
    }
    var seedBytesWithNonce = concat_split_1.concat(nonceArray, seedBytes);
    var seedHash = hashing_1._hashChain(seedBytesWithNonce);
    return hashing_1.sha256(seedHash);
};
exports.keyPair = function (seed) {
    var _a = seed_1.Seed.toBinary(seed), seedBytes = _a.seed, nonce = _a.nonce;
    var seedHash = buildSeedHash(seedBytes, nonce);
    var keys = axlsign_1.default.generateKeyPair(seedHash);
    return {
        privateKey: keys.private,
        publicKey: keys.public,
    };
};
exports.address = function (seedOrPublicKey, chainId) {
    if (chainId === void 0) { chainId = interface_1.MAIN_NET_CHAIN_ID; }
    return util_1.isPublicKey(seedOrPublicKey) ?
        exports.buildAddress(param_1._fromIn(seedOrPublicKey.publicKey), chainId) :
        exports.address(exports.keyPair(seedOrPublicKey), chainId);
};
exports.publicKey = function (seedOrPrivateKey) {
    return util_1.isPrivateKey(seedOrPrivateKey) ?
        axlsign_1.default.generateKeyPair(param_1._fromIn(seedOrPrivateKey.privateKey)).public :
        exports.keyPair(seedOrPrivateKey).publicKey;
};
exports.privateKey = function (seed) {
    return exports.keyPair(seed).privateKey;
};
//# sourceMappingURL=address-keys-seed.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/crypto/concat-split.js":
/*!******************************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/crypto/concat-split.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var param_1 = __webpack_require__(/*! ../conversions/param */ "./node_modules/@evestx/ts-lib-crypto/conversions/param.js");
exports.concat = function () {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return arrays.reduce(function (a, b) { return Uint8Array.from(__spread(a, param_1._fromIn(b))); }, new Uint8Array(0));
};
exports.split = function (binary) {
    var sizes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sizes[_i - 1] = arguments[_i];
    }
    var _a = sizes.reduce(function (a, s) { return ({ arr: a.arr.slice(s), r: __spread(a.r, [a.arr.slice(0, s)]) }); }, { arr: param_1._fromIn(binary), r: [] }), r = _a.r, arr = _a.arr;
    return __spread(r, [arr]);
};
//# sourceMappingURL=concat-split.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/crypto/crypto.js":
/*!************************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/crypto/crypto.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var random_1 = __webpack_require__(/*! ./random */ "./node_modules/@evestx/ts-lib-crypto/crypto/random.js");
var encryption_1 = __webpack_require__(/*! ./encryption */ "./node_modules/@evestx/ts-lib-crypto/crypto/encryption.js");
var base_xx_1 = __webpack_require__(/*! ../conversions/base-xx */ "./node_modules/@evestx/ts-lib-crypto/conversions/base-xx.js");
var string_bytes_1 = __webpack_require__(/*! ../conversions/string-bytes */ "./node_modules/@evestx/ts-lib-crypto/conversions/string-bytes.js");
var concat_split_1 = __webpack_require__(/*! ./concat-split */ "./node_modules/@evestx/ts-lib-crypto/crypto/concat-split.js");
var hashing_1 = __webpack_require__(/*! ./hashing */ "./node_modules/@evestx/ts-lib-crypto/crypto/hashing.js");
var address_keys_seed_1 = __webpack_require__(/*! ./address-keys-seed */ "./node_modules/@evestx/ts-lib-crypto/crypto/address-keys-seed.js");
var sign_1 = __webpack_require__(/*! ./sign */ "./node_modules/@evestx/ts-lib-crypto/crypto/sign.js");
var verification_1 = __webpack_require__(/*! ./verification */ "./node_modules/@evestx/ts-lib-crypto/crypto/verification.js");
var rsa_1 = __webpack_require__(/*! ./rsa */ "./node_modules/@evestx/ts-lib-crypto/crypto/rsa.js");
var seed_ecryption_1 = __webpack_require__(/*! ./seed-ecryption */ "./node_modules/@evestx/ts-lib-crypto/crypto/seed-ecryption.js");
var merkle_verify_1 = __webpack_require__(/*! ./merkle-verify */ "./node_modules/@evestx/ts-lib-crypto/crypto/merkle-verify.js");
exports.crypto = function (options) {
    if (options && options.seed == '')
        throw new Error('Empty seed is not allowed.');
    var c = function (f, first) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return f.apply(void 0, __spread([first], args));
        };
    };
    var toOut = function (f) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var r = f.apply(void 0, __spread(args));
        return (!options || options && options.output === 'Base58') ? base_xx_1.base58Encode(r) : r;
    }; };
    var toOutKey = function (f) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var r = f.apply(void 0, __spread(args));
        return ((!options || options && options.output === 'Base58') ?
            ({ privateKey: base_xx_1.base58Encode(r.privateKey), publicKey: base_xx_1.base58Encode(r.publicKey) }) :
            r);
    }; };
    var s = (options && options.seed) ? options.seed : undefined;
    var seedPart = {
        seedWithNonce: s ? c(address_keys_seed_1.seedWithNonce, s) : address_keys_seed_1.seedWithNonce,
        signBytes: toOut(s ? c(sign_1.signBytes, s) : sign_1.signBytes),
        keyPair: toOutKey(s ? c(address_keys_seed_1.keyPair, s) : address_keys_seed_1.keyPair),
        publicKey: toOut(s ? c(address_keys_seed_1.publicKey, s) : address_keys_seed_1.publicKey),
        privateKey: toOut(s ? c(address_keys_seed_1.privateKey, s) : address_keys_seed_1.privateKey),
        address: toOut(s ? c(address_keys_seed_1.address, s) : address_keys_seed_1.address),
    };
    return __assign({}, seedPart, { sharedKey: toOut(encryption_1.sharedKey), buildAddress: address_keys_seed_1.buildAddress,
        blake2b: hashing_1.blake2b,
        keccak: hashing_1.keccak,
        sha256: hashing_1.sha256,
        base64Encode: base_xx_1.base64Encode,
        base64Decode: base_xx_1.base64Decode,
        base58Encode: base_xx_1.base58Encode,
        base58Decode: base_xx_1.base58Decode,
        base16Encode: base_xx_1.base16Encode,
        base16Decode: base_xx_1.base16Decode,
        stringToBytes: string_bytes_1.stringToBytes,
        bytesToString: string_bytes_1.bytesToString,
        random: random_1.random,
        randomSeed: random_1.randomSeed,
        randomBytes: random_1.randomBytes,
        verifySignature: verification_1.verifySignature,
        verifyPublicKey: verification_1.verifyPublicKey,
        verifyAddress: verification_1.verifyAddress,
        messageDecrypt: encryption_1.messageDecrypt,
        messageEncrypt: encryption_1.messageEncrypt,
        aesDecrypt: encryption_1.aesDecrypt,
        aesEncrypt: encryption_1.aesEncrypt,
        encryptSeed: seed_ecryption_1.encryptSeed,
        decryptSeed: seed_ecryption_1.decryptSeed,
        rsaKeyPair: rsa_1.rsaKeyPair,
        rsaKeyPairSync: rsa_1.rsaKeyPairSync,
        rsaSign: rsa_1.rsaSign,
        rsaVerify: rsa_1.rsaVerify,
        merkleVerify: merkle_verify_1.merkleVerify,
        split: concat_split_1.split,
        concat: concat_split_1.concat });
};
//# sourceMappingURL=crypto.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/crypto/encryption.js":
/*!****************************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/crypto/encryption.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var forgeCipher = __importStar(__webpack_require__(/*! node-forge/lib/cipher */ "./node_modules/node-forge/lib/cipher.js"));
// @ts-ignore
var util = __importStar(__webpack_require__(/*! node-forge/lib/util */ "./node_modules/node-forge/lib/util.js"));
var random_1 = __webpack_require__(/*! ./random */ "./node_modules/@evestx/ts-lib-crypto/crypto/random.js");
var param_1 = __webpack_require__(/*! ../conversions/param */ "./node_modules/@evestx/ts-lib-crypto/conversions/param.js");
var hashing_1 = __webpack_require__(/*! ./hashing */ "./node_modules/@evestx/ts-lib-crypto/crypto/hashing.js");
var concat_split_1 = __webpack_require__(/*! ./concat-split */ "./node_modules/@evestx/ts-lib-crypto/crypto/concat-split.js");
var axlsign_1 = __importDefault(__webpack_require__(/*! ../libs/axlsign */ "./node_modules/@evestx/ts-lib-crypto/libs/axlsign.js"));
var string_bytes_1 = __webpack_require__(/*! ../conversions/string-bytes */ "./node_modules/@evestx/ts-lib-crypto/conversions/string-bytes.js");
exports.aesEncrypt = function (data, key, mode, iv) {
    if (mode === void 0) { mode = 'CBC'; }
    var cipher = forgeCipher.createCipher("AES-" + mode, string_bytes_1.bytesToString(param_1._fromIn(key), 'raw'));
    cipher.start({ iv: iv && util.createBuffer(string_bytes_1.bytesToString(param_1._fromIn(iv), 'raw')) });
    cipher.update(util.createBuffer(string_bytes_1.bytesToString(data, 'raw')));
    cipher.finish();
    return string_bytes_1.stringToBytes(cipher.output.getBytes(), 'raw');
};
exports.aesDecrypt = function (encryptedData, key, mode, iv) {
    if (mode === void 0) { mode = 'CBC'; }
    var decipher = forgeCipher.createDecipher("AES-" + mode, string_bytes_1.bytesToString(param_1._fromIn(key), 'raw'));
    decipher.start({ iv: iv && util.createBuffer(string_bytes_1.bytesToString(param_1._fromIn(iv), 'raw')) });
    var encbuf = util.createBuffer(string_bytes_1.bytesToString(param_1._fromIn(encryptedData), 'raw'));
    decipher.update(encbuf);
    if (!decipher.finish()) {
        throw new Error('Failed to decrypt data with provided key');
    }
    return string_bytes_1.stringToBytes(decipher.output.getBytes(), 'raw');
};
exports.messageEncrypt = function (sharedKey, message) {
    var version = Uint8Array.from([1]);
    var CEK = random_1.randomBytes(32);
    var IV = random_1.randomBytes(16);
    var m = string_bytes_1.stringToBytes(message);
    var Cc = exports.aesEncrypt(m, CEK, 'CTR', IV);
    var Ccek = exports.aesEncrypt(CEK, sharedKey, 'ECB');
    var Mhmac = hashing_1.hmacSHA256(m, CEK);
    var CEKhmac = hashing_1.hmacSHA256(concat_split_1.concat(CEK, IV), sharedKey);
    var packageBytes = concat_split_1.concat(version, Ccek, CEKhmac, Mhmac, IV, Cc);
    return packageBytes;
};
exports.messageDecrypt = function (sharedKey, encryptedMessage) {
    var _a = __read(concat_split_1.split(encryptedMessage, 1, 48, 32, 32, 16), 6), version = _a[0], Ccek = _a[1], _CEKhmac = _a[2], _Mhmac = _a[3], iv = _a[4], Cc = _a[5];
    var CEK = exports.aesDecrypt(Ccek, sharedKey, 'ECB');
    var CEKhmac = param_1._fromIn(hashing_1.hmacSHA256(concat_split_1.concat(CEK, iv), param_1._fromIn(sharedKey)));
    var isValidKey = CEKhmac.every(function (v, i) { return v === _CEKhmac[i]; });
    if (!isValidKey)
        throw new Error('Invalid key');
    var M = exports.aesDecrypt(Cc, CEK, 'CTR', iv);
    var Mhmac = param_1._fromIn(hashing_1.hmacSHA256(M, CEK));
    var isValidMessage = Mhmac.every(function (v, i) { return v === _Mhmac[i]; });
    if (!isValidMessage)
        throw new Error('Invalid message');
    return string_bytes_1.bytesToString(M);
};
exports.sharedKey = function (privateKeyFrom, publicKeyTo, prefix) {
    var sharedKey = axlsign_1.default.sharedKey(param_1._fromIn(privateKeyFrom), param_1._fromIn(publicKeyTo));
    var prefixHash = hashing_1.sha256(param_1._fromRawIn(prefix));
    return hashing_1.hmacSHA256(sharedKey, prefixHash);
};
//# sourceMappingURL=encryption.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/crypto/hashing.js":
/*!*************************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/crypto/hashing.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var param_1 = __webpack_require__(/*! ../conversions/param */ "./node_modules/@evestx/ts-lib-crypto/conversions/param.js");
var sha3_1 = __webpack_require__(/*! ../libs/sha3 */ "./node_modules/@evestx/ts-lib-crypto/libs/sha3.js");
// @ts-ignore
var forgeHmac = __importStar(__webpack_require__(/*! node-forge/lib/hmac */ "./node_modules/node-forge/lib/hmac.js"));
// @ts-ignore
var forgeMd = __importStar(__webpack_require__(/*! node-forge/lib/md */ "./node_modules/node-forge/lib/md.js"));
__webpack_require__(/*! node-forge/lib/sha256 */ "./node_modules/node-forge/lib/sha256.js");
var blake = __importStar(__webpack_require__(/*! ../libs/blake2b */ "./node_modules/@evestx/ts-lib-crypto/libs/blake2b.js"));
var string_bytes_1 = __webpack_require__(/*! ../conversions/string-bytes */ "./node_modules/@evestx/ts-lib-crypto/conversions/string-bytes.js");
exports._hashChain = function (input) {
    return param_1._fromIn(exports.keccak(exports.blake2b(param_1._fromIn(input))));
};
exports.sha256 = function (input) {
    var md = forgeMd.algorithms.sha256.create();
    md.update(string_bytes_1.bytesToString(input, 'raw'));
    return string_bytes_1.stringToBytes(md.digest().getBytes(), 'raw');
};
exports.blake2b = function (input) {
    return blake.blake2b(param_1._fromIn(input), null, 32);
};
exports.keccak = function (input) {
    return param_1._fromIn(sha3_1.keccak256.array(param_1._fromIn(input)));
};
exports.hmacSHA256 = function (message, key) {
    var hmac = forgeHmac.create();
    hmac.start('sha256', string_bytes_1.bytesToString(param_1._fromIn(key), 'raw'));
    hmac.update(string_bytes_1.bytesToString(param_1._fromIn(message), 'raw'));
    return string_bytes_1.stringToBytes(hmac.digest().getBytes(), 'raw');
};
//# sourceMappingURL=hashing.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/crypto/interface.js":
/*!***************************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/crypto/interface.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PUBLIC_KEY_LENGTH = 32;
exports.PRIVATE_KEY_LENGTH = 32;
exports.SIGNATURE_LENGTH = 64;
exports.ADDRESS_LENGTH = 26;
exports.MAIN_NET_CHAIN_ID = 87; // W
exports.TEST_NET_CHAIN_ID = 84; // T
//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/crypto/merkle-verify.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/crypto/merkle-verify.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var hashing_1 = __webpack_require__(/*! ./hashing */ "./node_modules/@evestx/ts-lib-crypto/crypto/hashing.js");
var concat_split_1 = __webpack_require__(/*! ./concat-split */ "./node_modules/@evestx/ts-lib-crypto/crypto/concat-split.js");
/**
 *
 * @param rootHash
 * @param merkleProof
 * @param leafData
 */
function merkleVerify(rootHash, merkleProof, leafData) {
    var LEAF_PREFIX = Uint8Array.from([0]);
    var INTERNAL_NODE_PREFIX = Uint8Array.from([1]);
    if (rootHash.length !== 32)
        throw new Error('Failed to parse merkleProof: Invalid rootHash length');
    var leafHash = hashing_1.blake2b(concat_split_1.concat(LEAF_PREFIX, leafData));
    var proofsWithSide = [];
    var proofBytes = merkleProof.map(function (x) { return x; });
    while (proofBytes.length > 0) {
        var side = proofBytes[0] === 0 ? 'L' : 'R';
        var size = proofBytes[1];
        if (size < 1)
            throw new Error('Failed to parse merkleProof: Wrong hash size');
        var hash = proofBytes.slice(2, 2 + size);
        proofsWithSide.push([side, hash]);
        proofBytes = proofBytes.slice(2 + size);
    }
    var rootHashFromProof = proofsWithSide.reduce(function (acc, _a) {
        var _b = __read(_a, 2), side = _b[0], hash = _b[1];
        return hashing_1.blake2b(concat_split_1.concat(INTERNAL_NODE_PREFIX, side === 'R' ? concat_split_1.concat(hash, acc) : concat_split_1.concat(acc, hash)));
    }, leafHash);
    return rootHashFromProof.every(function (v, i) { return v === rootHash[i]; });
}
exports.merkleVerify = merkleVerify;
//# sourceMappingURL=merkle-verify.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/crypto/random.js":
/*!************************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/crypto/random.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var random_1 = __importDefault(__webpack_require__(/*! node-forge/lib/random */ "./node_modules/node-forge/lib/random.js"));
var seed_words_list_1 = __webpack_require__(/*! ./seed-words-list */ "./node_modules/@evestx/ts-lib-crypto/crypto/seed-words-list.js");
var string_bytes_1 = __webpack_require__(/*! ../conversions/string-bytes */ "./node_modules/@evestx/ts-lib-crypto/conversions/string-bytes.js");
var _random = function (count) { return string_bytes_1.stringToBytes(random_1.default.getBytesSync(count), 'raw'); };
var ensureBuffer = function () {
    try {
        var b = new Buffer(1);
    }
    catch (e) {
        throw new Error('Buffer not supported in this environment. Use Node.js or Browserify for browser support.');
    }
};
exports.random = function (count, type) {
    switch (type) {
        case 'Array8':
            return Array.from(_random(count));
        case 'Array16':
            return Array.from(exports.random(count, 'Uint16Array'));
        case 'Array32':
            return Array.from(exports.random(count, 'Uint32Array'));
        case 'Buffer':
            ensureBuffer();
            return Buffer.from(_random(count));
        case 'Uint8Array':
            return _random(count);
        case 'Uint16Array':
            return new Uint16Array(count)
                .map(function (_) { return _random(2).reduce(function (a, b, i) { return a | b << 8 * (1 - i); }, 0); });
        case 'Uint32Array':
            return new Uint32Array(count)
                .map(function (_) { return _random(4).reduce(function (a, b, i) { return a | b << 8 * (1 - i); }, 0); });
        default:
            throw new Error(type + ' is unsupported.');
    }
};
exports.randomBytes = function (length) {
    return exports.random(length, 'Uint8Array');
};
exports.randomSeed = function (wordsCount) {
    if (wordsCount === void 0) { wordsCount = 15; }
    return exports.random(wordsCount, 'Array32')
        .map(function (x) { return seed_words_list_1.seedWordsList[x % seed_words_list_1.seedWordsList.length]; })
        .join(' ');
};
//# sourceMappingURL=random.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/crypto/rsa.js":
/*!*********************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/crypto/rsa.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var pki = __importStar(__webpack_require__(/*! node-forge/lib/pki */ "./node_modules/node-forge/lib/pki.js"));
// @ts-ignore
var md = __importStar(__webpack_require__(/*! node-forge/lib/md */ "./node_modules/node-forge/lib/md.js"));
// @ts-ignore
var md5 = __importStar(__webpack_require__(/*! node-forge/lib/md5 */ "./node_modules/node-forge/lib/md5.js"));
// @ts-ignore
var util = __importStar(__webpack_require__(/*! node-forge/lib/util */ "./node_modules/node-forge/lib/util.js"));
var base_xx_1 = __webpack_require__(/*! ../conversions/base-xx */ "./node_modules/@evestx/ts-lib-crypto/conversions/base-xx.js");
var string_bytes_1 = __webpack_require__(/*! ../conversions/string-bytes */ "./node_modules/@evestx/ts-lib-crypto/conversions/string-bytes.js");
var sha3 = __importStar(__webpack_require__(/*! js-sha3 */ "./node_modules/js-sha3/src/sha3.js"));
// HACK. Monkey patch node-forge library to provide oids for missing hash algorithms
pki.oids['sha224'] = '2.16.840.1.101.3.4.2.4';
pki.oids['2.16.840.1.101.3.4.2.4'] = 'sha224';
pki.oids['sha3-224'] = '2.16.840.1.101.3.4.2.7';
pki.oids['2.16.840.1.101.3.4.2.7'] = 'sha3-224';
pki.oids['sha3-256'] = '2.16.840.1.101.3.4.2.8';
pki.oids['2.16.840.1.101.3.4.2.8'] = 'sha3-256';
pki.oids['sha3-384'] = '2.16.840.1.101.3.4.2.9';
pki.oids['2.16.840.1.101.3.4.2.9'] = 'sha3-384';
pki.oids['sha3-512'] = '2.16.840.1.101.3.4.2.10';
pki.oids['2.16.840.1.101.3.4.2.10'] = 'sha3-512';
exports.pemToBytes = function (pem) { return base_xx_1.base64Decode(pem.trim()
    .split(/\r\n|\n/)
    .slice(1, -1).join('')
    .trim()); };
var pemTypeMap = {
    rsaPrivateNonEncrypted: 'RSA PRIVATE KEY',
    rsaPublic: 'PUBLIC KEY',
};
exports.bytesToPem = function (bytes, type) {
    var header = "-----BEGIN " + pemTypeMap[type] + "-----\n";
    var footer = "-----END " + pemTypeMap[type] + "-----\n";
    var b64characters = base_xx_1.base64Encode(bytes);
    if (b64characters.length % 64 !== 0) {
        b64characters += ' '.repeat(64 - b64characters.length % 64);
    }
    var result = header;
    for (var i = 0; i < (b64characters.length / 64); i++) {
        result += b64characters.slice(i * 64, (i + 1) * 64) + '\n';
    }
    result += footer;
    return result;
};
exports.rsaKeyPairSync = function (bits, e) {
    var kp = pki.rsa.generateKeyPair(bits, e);
    return {
        rsaPrivate: exports.pemToBytes(pki.privateKeyToPem(kp.privateKey)),
        rsaPublic: exports.pemToBytes(pki.publicKeyToPem(kp.publicKey)),
    };
};
exports.rsaKeyPair = function (bits, e) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                pki.rsa.generateKeyPair(bits, e, function (err, kp) {
                    if (err)
                        reject(err);
                    resolve({
                        rsaPrivate: exports.pemToBytes(pki.privateKeyToPem(kp.privateKey)),
                        rsaPublic: exports.pemToBytes(pki.publicKeyToPem(kp.publicKey)),
                    });
                });
            })];
    });
}); };
var digestCreatorPlaceHolder = function (type) { return function () {
    throw new Error("Digest " + type + " is unsupported");
}; };
var MessageDigestAdapter = /** @class */ (function () {
    function MessageDigestAdapter(sha3Digest, algorithm) {
        this.sha3Digest = sha3Digest;
        this.algorithm = algorithm;
    }
    MessageDigestAdapter.makeCreator = function (sha3Hash, algorithmName) {
        return { create: function () { return new MessageDigestAdapter(sha3Hash.create(), algorithmName); } };
    };
    MessageDigestAdapter.prototype.update = function (msg, encoding) {
        this.sha3Digest.update(string_bytes_1.stringToBytes(msg, encoding == null ? 'raw' : encoding));
        return this;
    };
    MessageDigestAdapter.prototype.digest = function () {
        var bytes = Uint8Array.from(this.sha3Digest.digest());
        return util.createBuffer(string_bytes_1.bytesToString(bytes, 'raw'));
    };
    return MessageDigestAdapter;
}());
var digestMap = {
    'MD5': md5,
    'SHA1': md.algorithms.sha1,
    'SHA224': digestCreatorPlaceHolder('SHA224'),
    'SHA256': md.algorithms.sha256,
    'SHA384': md.algorithms.sha384,
    'SHA512': md.algorithms.sha512,
    'SHA3-224': MessageDigestAdapter.makeCreator(sha3.sha3_224, 'sha3-224'),
    'SHA3-256': MessageDigestAdapter.makeCreator(sha3.sha3_256, 'sha3-256'),
    'SHA3-384': MessageDigestAdapter.makeCreator(sha3.sha3_384, 'sha3-384'),
    'SHA3-512': MessageDigestAdapter.makeCreator(sha3.sha3_512, 'sha3-512'),
};
exports.rsaSign = function (rsaPrivateKey, message, digest) {
    if (digest === void 0) { digest = 'SHA256'; }
    var s = exports.bytesToPem(rsaPrivateKey, 'rsaPrivateNonEncrypted');
    var sk = pki.privateKeyFromPem(s);
    var _digest = digestMap[digest].create();
    _digest.update(string_bytes_1.bytesToString(message, 'raw'));
    return string_bytes_1.stringToBytes(sk.sign(_digest), 'raw');
};
exports.rsaVerify = function (rsaPublicKey, message, signature, digest) {
    if (digest === void 0) { digest = 'SHA256'; }
    var pk = pki.publicKeyFromPem(exports.bytesToPem(rsaPublicKey, 'rsaPublic'));
    var _digest = digestMap[digest].create();
    _digest.update(string_bytes_1.bytesToString(message), 'raw');
    return pk.verify(_digest.digest().getBytes(), string_bytes_1.bytesToString(signature, 'raw'));
};
//# sourceMappingURL=rsa.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/crypto/seed-ecryption.js":
/*!********************************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/crypto/seed-ecryption.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var string_bytes_1 = __webpack_require__(/*! ../conversions/string-bytes */ "./node_modules/@evestx/ts-lib-crypto/conversions/string-bytes.js");
// @ts-ignore
var forgeMd5 = __importStar(__webpack_require__(/*! node-forge/lib/md5 */ "./node_modules/node-forge/lib/md5.js"));
var concat_split_1 = __webpack_require__(/*! ./concat-split */ "./node_modules/@evestx/ts-lib-crypto/crypto/concat-split.js");
var encryption_1 = __webpack_require__(/*! ./encryption */ "./node_modules/@evestx/ts-lib-crypto/crypto/encryption.js");
var base_xx_1 = __webpack_require__(/*! ../conversions/base-xx */ "./node_modules/@evestx/ts-lib-crypto/conversions/base-xx.js");
var hashing_1 = __webpack_require__(/*! ./hashing */ "./node_modules/@evestx/ts-lib-crypto/crypto/hashing.js");
var random_1 = __webpack_require__(/*! ./random */ "./node_modules/@evestx/ts-lib-crypto/crypto/random.js");
function strengthenPassword(password, rounds) {
    if (rounds === void 0) { rounds = 5000; }
    while (rounds--) {
        var bytes = string_bytes_1.stringToBytes(password);
        password = base_xx_1.base16Encode(hashing_1.sha256(bytes));
    }
    return password;
}
function evpKdf(passphrase, salt, output) {
    if (output === void 0) { output = 48; }
    var passPlusSalt = string_bytes_1.bytesToString(concat_split_1.concat(passphrase, salt), 'raw');
    var key = '';
    var final_key = key;
    while (final_key.length < output) {
        key = forgeMd5.create().update(key + passPlusSalt).digest().getBytes();
        final_key += key;
    }
    return final_key;
}
/**
 * Encrypts arbitrary utf8 string with utf8 password. Evp key deriving function is used to get encryption key and IV from
 * password. AES-CBC algorithm is used for encryption. Output format is base64 encoded OpenSSL
 * @param seed - utf8 string to encrypt
 * @param password - utf8 password
 * @param encryptionRounds - how many times password will be hashed. Default = 5000
 */
exports.encryptSeed = function (seed, password, encryptionRounds) {
    var passphrase = strengthenPassword(password, encryptionRounds);
    var salt = random_1.randomBytes(8);
    var key_iv = evpKdf(string_bytes_1.stringToBytes(passphrase, 'raw'), salt);
    var key = string_bytes_1.stringToBytes(key_iv.slice(0, 32), 'raw');
    var iv = string_bytes_1.stringToBytes(key_iv.slice(32), 'raw');
    var encrypted = encryption_1.aesEncrypt(string_bytes_1.stringToBytes(seed), key, 'CBC', iv);
    return base_xx_1.base64Encode(concat_split_1.concat(string_bytes_1.stringToBytes('Salted__'), salt, encrypted));
};
exports.decryptSeed = function (encryptedSeed, password, encryptionRounds) {
    var passphrase = strengthenPassword(password, encryptionRounds);
    var encBytes = base_xx_1.base64Decode(encryptedSeed);
    var salt = encBytes.slice(8, 16);
    var key_iv = evpKdf(string_bytes_1.stringToBytes(passphrase, 'raw'), salt);
    var key = string_bytes_1.stringToBytes(key_iv.slice(0, 32), 'raw');
    var iv = string_bytes_1.stringToBytes(key_iv.slice(32), 'raw');
    return string_bytes_1.bytesToString(encryption_1.aesDecrypt(encBytes.slice(16), key, 'CBC', iv));
};
//# sourceMappingURL=seed-ecryption.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/crypto/seed-words-list.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/crypto/seed-words-list.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.seedWordsList = [
    'abandon', 'ability', 'able', 'about', 'above', 'absent', 'absorb', 'abstract', 'absurd', 'abuse', 'access',
    'accident', 'account', 'accuse', 'achieve', 'acid', 'acoustic', 'acquire', 'across', 'act', 'action',
    'actor', 'actress', 'actual', 'adapt', 'add', 'addict', 'address', 'adjust', 'admit', 'adult', 'advance',
    'advice', 'aerobic', 'affair', 'afford', 'afraid', 'again', 'age', 'agent', 'agree', 'ahead', 'aim', 'air',
    'airport', 'aisle', 'alarm', 'album', 'alcohol', 'alert', 'alien', 'all', 'alley', 'allow', 'almost',
    'alone', 'alpha', 'already', 'also', 'alter', 'always', 'amateur', 'amazing', 'among', 'amount', 'amused',
    'analyst', 'anchor', 'ancient', 'anger', 'angle', 'angry', 'animal', 'ankle', 'announce', 'annual',
    'another', 'answer', 'antenna', 'antique', 'anxiety', 'any', 'apart', 'apology', 'appear', 'apple',
    'approve', 'april', 'arch', 'arctic', 'area', 'arena', 'argue', 'arm', 'armed', 'armor', 'army', 'around',
    'arrange', 'arrest', 'arrive', 'arrow', 'art', 'artefact', 'artist', 'artwork', 'ask', 'aspect', 'assault',
    'asset', 'assist', 'assume', 'asthma', 'athlete', 'atom', 'attack', 'attend', 'attitude', 'attract',
    'auction', 'audit', 'august', 'aunt', 'author', 'auto', 'autumn', 'average', 'avocado', 'avoid', 'awake',
    'aware', 'away', 'awesome', 'awful', 'awkward', 'axis', 'baby', 'bachelor', 'bacon', 'badge', 'bag',
    'balance', 'balcony', 'ball', 'bamboo', 'banana', 'banner', 'bar', 'barely', 'bargain', 'barrel', 'base',
    'basic', 'basket', 'battle', 'beach', 'bean', 'beauty', 'because', 'become', 'beef', 'before', 'begin',
    'behave', 'behind', 'believe', 'below', 'belt', 'bench', 'benefit', 'best', 'betray', 'better', 'between',
    'beyond', 'bicycle', 'bid', 'bike', 'bind', 'biology', 'bird', 'birth', 'bitter', 'black', 'blade', 'blame',
    'blanket', 'blast', 'bleak', 'bless', 'blind', 'blood', 'blossom', 'blouse', 'blue', 'blur', 'blush',
    'board', 'boat', 'body', 'boil', 'bomb', 'bone', 'bonus', 'book', 'boost', 'border', 'boring', 'borrow',
    'boss', 'bottom', 'bounce', 'box', 'boy', 'bracket', 'brain', 'brand', 'brass', 'brave', 'bread', 'breeze',
    'brick', 'bridge', 'brief', 'bright', 'bring', 'brisk', 'broccoli', 'broken', 'bronze', 'broom', 'brother',
    'brown', 'brush', 'bubble', 'buddy', 'budget', 'buffalo', 'build', 'bulb', 'bulk', 'bullet', 'bundle',
    'bunker', 'burden', 'burger', 'burst', 'bus', 'business', 'busy', 'butter', 'buyer', 'buzz', 'cabbage',
    'cabin', 'cable', 'cactus', 'cage', 'cake', 'call', 'calm', 'camera', 'camp', 'can', 'canal', 'cancel',
    'candy', 'cannon', 'canoe', 'canvas', 'canyon', 'capable', 'capital', 'captain', 'car', 'carbon', 'card',
    'cargo', 'carpet', 'carry', 'cart', 'case', 'cash', 'casino', 'castle', 'casual', 'cat', 'catalog', 'catch',
    'category', 'cattle', 'caught', 'cause', 'caution', 'cave', 'ceiling', 'celery', 'cement', 'census',
    'century', 'cereal', 'certain', 'chair', 'chalk', 'champion', 'change', 'chaos', 'chapter', 'charge',
    'chase', 'chat', 'cheap', 'check', 'cheese', 'chef', 'cherry', 'chest', 'chicken', 'chief', 'child',
    'chimney', 'choice', 'choose', 'chronic', 'chuckle', 'chunk', 'churn', 'cigar', 'cinnamon', 'circle',
    'citizen', 'city', 'civil', 'claim', 'clap', 'clarify', 'claw', 'clay', 'clean', 'clerk', 'clever', 'click',
    'client', 'cliff', 'climb', 'clinic', 'clip', 'clock', 'clog', 'close', 'cloth', 'cloud', 'clown', 'club',
    'clump', 'cluster', 'clutch', 'coach', 'coast', 'coconut', 'code', 'coffee', 'coil', 'coin', 'collect',
    'color', 'column', 'combine', 'come', 'comfort', 'comic', 'common', 'company', 'concert', 'conduct',
    'confirm', 'congress', 'connect', 'consider', 'control', 'convince', 'cook', 'cool', 'copper', 'copy',
    'coral', 'core', 'corn', 'correct', 'cost', 'cotton', 'couch', 'country', 'couple', 'course', 'cousin',
    'cover', 'coyote', 'crack', 'cradle', 'craft', 'cram', 'crane', 'crash', 'crater', 'crawl', 'crazy',
    'cream', 'credit', 'creek', 'crew', 'cricket', 'crime', 'crisp', 'critic', 'crop', 'cross', 'crouch',
    'crowd', 'crucial', 'cruel', 'cruise', 'crumble', 'crunch', 'crush', 'cry', 'crystal', 'cube', 'culture',
    'cup', 'cupboard', 'curious', 'current', 'curtain', 'curve', 'cushion', 'custom', 'cute', 'cycle', 'dad',
    'damage', 'damp', 'dance', 'danger', 'daring', 'dash', 'daughter', 'dawn', 'day', 'deal', 'debate',
    'debris', 'decade', 'december', 'decide', 'decline', 'decorate', 'decrease', 'deer', 'defense', 'define',
    'defy', 'degree', 'delay', 'deliver', 'demand', 'demise', 'denial', 'dentist', 'deny', 'depart', 'depend',
    'deposit', 'depth', 'deputy', 'derive', 'describe', 'desert', 'design', 'desk', 'despair', 'destroy',
    'detail', 'detect', 'develop', 'device', 'devote', 'diagram', 'dial', 'diamond', 'diary', 'dice', 'diesel',
    'diet', 'differ', 'digital', 'dignity', 'dilemma', 'dinner', 'dinosaur', 'direct', 'dirt', 'disagree',
    'discover', 'disease', 'dish', 'dismiss', 'disorder', 'display', 'distance', 'divert', 'divide', 'divorce',
    'dizzy', 'doctor', 'document', 'dog', 'doll', 'dolphin', 'domain', 'donate', 'donkey', 'donor', 'door',
    'dose', 'double', 'dove', 'draft', 'dragon', 'drama', 'drastic', 'draw', 'dream', 'dress', 'drift', 'drill',
    'drink', 'drip', 'drive', 'drop', 'drum', 'dry', 'duck', 'dumb', 'dune', 'during', 'dust', 'dutch', 'duty',
    'dwarf', 'dynamic', 'eager', 'eagle', 'early', 'earn', 'earth', 'easily', 'east', 'easy', 'echo', 'ecology',
    'economy', 'edge', 'edit', 'educate', 'effort', 'egg', 'eight', 'either', 'elbow', 'elder', 'electric',
    'elegant', 'element', 'elephant', 'elevator', 'elite', 'else', 'embark', 'embody', 'embrace', 'emerge',
    'emotion', 'employ', 'empower', 'empty', 'enable', 'enact', 'end', 'endless', 'endorse', 'enemy', 'energy',
    'enforce', 'engage', 'engine', 'enhance', 'enjoy', 'enlist', 'enough', 'enrich', 'enroll', 'ensure',
    'enter', 'entire', 'entry', 'envelope', 'episode', 'equal', 'equip', 'era', 'erase', 'erode', 'erosion',
    'error', 'erupt', 'escape', 'essay', 'essence', 'estate', 'eternal', 'ethics', 'evidence', 'evil', 'evoke',
    'evolve', 'exact', 'example', 'excess', 'exchange', 'excite', 'exclude', 'excuse', 'execute', 'exercise',
    'exhaust', 'exhibit', 'exile', 'exist', 'exit', 'exotic', 'expand', 'expect', 'expire', 'explain', 'expose',
    'express', 'extend', 'extra', 'eye', 'eyebrow', 'fabric', 'face', 'faculty', 'fade', 'faint', 'faith',
    'fall', 'false', 'fame', 'family', 'famous', 'fan', 'fancy', 'fantasy', 'farm', 'fashion', 'fat', 'fatal',
    'father', 'fatigue', 'fault', 'favorite', 'feature', 'february', 'federal', 'fee', 'feed', 'feel', 'female',
    'fence', 'festival', 'fetch', 'fever', 'few', 'fiber', 'fiction', 'field', 'figure', 'file', 'film',
    'filter', 'final', 'find', 'fine', 'finger', 'finish', 'fire', 'firm', 'first', 'fiscal', 'fish', 'fit',
    'fitness', 'fix', 'flag', 'flame', 'flash', 'flat', 'flavor', 'flee', 'flight', 'flip', 'float', 'flock',
    'floor', 'flower', 'fluid', 'flush', 'fly', 'foam', 'focus', 'fog', 'foil', 'fold', 'follow', 'food',
    'foot', 'force', 'forest', 'forget', 'fork', 'fortune', 'forum', 'forward', 'fossil', 'foster', 'found',
    'fox', 'fragile', 'frame', 'frequent', 'fresh', 'friend', 'fringe', 'frog', 'front', 'frost', 'frown',
    'frozen', 'fruit', 'fuel', 'fun', 'funny', 'furnace', 'fury', 'future', 'gadget', 'gain', 'galaxy',
    'gallery', 'game', 'gap', 'garage', 'garbage', 'garden', 'garlic', 'garment', 'gas', 'gasp', 'gate',
    'gather', 'gauge', 'gaze', 'general', 'genius', 'genre', 'gentle', 'genuine', 'gesture', 'ghost', 'giant',
    'gift', 'giggle', 'ginger', 'giraffe', 'girl', 'give', 'glad', 'glance', 'glare', 'glass', 'glide',
    'glimpse', 'globe', 'gloom', 'glory', 'glove', 'glow', 'glue', 'goat', 'goddess', 'gold', 'good', 'goose',
    'gorilla', 'gospel', 'gossip', 'govern', 'gown', 'grab', 'grace', 'grain', 'grant', 'grape', 'grass',
    'gravity', 'great', 'green', 'grid', 'grief', 'grit', 'grocery', 'group', 'grow', 'grunt', 'guard', 'guess',
    'guide', 'guilt', 'guitar', 'gun', 'gym', 'habit', 'hair', 'half', 'hammer', 'hamster', 'hand', 'happy',
    'harbor', 'hard', 'harsh', 'harvest', 'hat', 'have', 'hawk', 'hazard', 'head', 'health', 'heart', 'heavy',
    'hedgehog', 'height', 'hello', 'helmet', 'help', 'hen', 'hero', 'hidden', 'high', 'hill', 'hint', 'hip',
    'hire', 'history', 'hobby', 'hockey', 'hold', 'hole', 'holiday', 'hollow', 'home', 'honey', 'hood', 'hope',
    'horn', 'horror', 'horse', 'hospital', 'host', 'hotel', 'hour', 'hover', 'hub', 'huge', 'human', 'humble',
    'humor', 'hundred', 'hungry', 'hunt', 'hurdle', 'hurry', 'hurt', 'husband', 'hybrid', 'ice', 'icon', 'idea',
    'identify', 'idle', 'ignore', 'ill', 'illegal', 'illness', 'image', 'imitate', 'immense', 'immune',
    'impact', 'impose', 'improve', 'impulse', 'inch', 'include', 'income', 'increase', 'index', 'indicate',
    'indoor', 'industry', 'infant', 'inflict', 'inform', 'inhale', 'inherit', 'initial', 'inject', 'injury',
    'inmate', 'inner', 'innocent', 'input', 'inquiry', 'insane', 'insect', 'inside', 'inspire', 'install',
    'intact', 'interest', 'into', 'invest', 'invite', 'involve', 'iron', 'island', 'isolate', 'issue', 'item',
    'ivory', 'jacket', 'jaguar', 'jar', 'jazz', 'jealous', 'jeans', 'jelly', 'jewel', 'job', 'join', 'joke',
    'journey', 'joy', 'judge', 'juice', 'jump', 'jungle', 'junior', 'junk', 'just', 'kangaroo', 'keen', 'keep',
    'ketchup', 'key', 'kick', 'kid', 'kidney', 'kind', 'kingdom', 'kiss', 'kit', 'kitchen', 'kite', 'kitten',
    'kiwi', 'knee', 'knife', 'knock', 'know', 'lab', 'label', 'labor', 'ladder', 'lady', 'lake', 'lamp',
    'language', 'laptop', 'large', 'later', 'latin', 'laugh', 'laundry', 'lava', 'law', 'lawn', 'lawsuit',
    'layer', 'lazy', 'leader', 'leaf', 'learn', 'leave', 'lecture', 'left', 'leg', 'legal', 'legend', 'leisure',
    'lemon', 'lend', 'length', 'lens', 'leopard', 'lesson', 'letter', 'level', 'liar', 'liberty', 'library',
    'license', 'life', 'lift', 'light', 'like', 'limb', 'limit', 'link', 'lion', 'liquid', 'list', 'little',
    'live', 'lizard', 'load', 'loan', 'lobster', 'local', 'lock', 'logic', 'lonely', 'long', 'loop', 'lottery',
    'loud', 'lounge', 'love', 'loyal', 'lucky', 'luggage', 'lumber', 'lunar', 'lunch', 'luxury', 'lyrics',
    'machine', 'mad', 'magic', 'magnet', 'maid', 'mail', 'main', 'major', 'make', 'mammal', 'man', 'manage',
    'mandate', 'mango', 'mansion', 'manual', 'maple', 'marble', 'march', 'margin', 'marine', 'market',
    'marriage', 'mask', 'mass', 'master', 'match', 'material', 'math', 'matrix', 'matter', 'maximum', 'maze',
    'meadow', 'mean', 'measure', 'meat', 'mechanic', 'medal', 'media', 'melody', 'melt', 'member', 'memory',
    'mention', 'menu', 'mercy', 'merge', 'merit', 'merry', 'mesh', 'message', 'metal', 'method', 'middle',
    'midnight', 'milk', 'million', 'mimic', 'mind', 'minimum', 'minor', 'minute', 'miracle', 'mirror', 'misery',
    'miss', 'mistake', 'mix', 'mixed', 'mixture', 'mobile', 'model', 'modify', 'mom', 'moment', 'monitor',
    'monkey', 'monster', 'month', 'moon', 'moral', 'more', 'morning', 'mosquito', 'mother', 'motion', 'motor',
    'mountain', 'mouse', 'move', 'movie', 'much', 'muffin', 'mule', 'multiply', 'muscle', 'museum', 'mushroom',
    'music', 'must', 'mutual', 'myself', 'mystery', 'myth', 'naive', 'name', 'napkin', 'narrow', 'nasty',
    'nation', 'nature', 'near', 'neck', 'need', 'negative', 'neglect', 'neither', 'nephew', 'nerve', 'nest',
    'net', 'network', 'neutral', 'never', 'news', 'next', 'nice', 'night', 'noble', 'noise', 'nominee',
    'noodle', 'normal', 'north', 'nose', 'notable', 'note', 'nothing', 'notice', 'novel', 'now', 'nuclear',
    'number', 'nurse', 'nut', 'oak', 'obey', 'object', 'oblige', 'obscure', 'observe', 'obtain', 'obvious',
    'occur', 'ocean', 'october', 'odor', 'off', 'offer', 'office', 'often', 'oil', 'okay', 'old', 'olive',
    'olympic', 'omit', 'once', 'one', 'onion', 'online', 'only', 'open', 'opera', 'opinion', 'oppose',
    'option', 'orange', 'orbit', 'orchard', 'order', 'ordinary', 'organ', 'orient', 'original', 'orphan',
    'ostrich', 'other', 'outdoor', 'outer', 'output', 'outside', 'oval', 'oven', 'over', 'own', 'owner',
    'oxygen', 'oyster', 'ozone', 'pact', 'paddle', 'page', 'pair', 'palace', 'palm', 'panda', 'panel', 'panic',
    'panther', 'paper', 'parade', 'parent', 'park', 'parrot', 'party', 'pass', 'patch', 'path', 'patient',
    'patrol', 'pattern', 'pause', 'pave', 'payment', 'peace', 'peanut', 'pear', 'peasant', 'pelican', 'pen',
    'penalty', 'pencil', 'people', 'pepper', 'perfect', 'permit', 'person', 'pet', 'phone', 'photo', 'phrase',
    'physical', 'piano', 'picnic', 'picture', 'piece', 'pig', 'pigeon', 'pill', 'pilot', 'pink', 'pioneer',
    'pipe', 'pistol', 'pitch', 'pizza', 'place', 'planet', 'plastic', 'plate', 'play', 'please', 'pledge',
    'pluck', 'plug', 'plunge', 'poem', 'poet', 'point', 'polar', 'pole', 'police', 'pond', 'pony', 'pool',
    'popular', 'portion', 'position', 'possible', 'post', 'potato', 'pottery', 'poverty', 'powder', 'power',
    'practice', 'praise', 'predict', 'prefer', 'prepare', 'present', 'pretty', 'prevent', 'price', 'pride',
    'primary', 'print', 'priority', 'prison', 'private', 'prize', 'problem', 'process', 'produce', 'profit',
    'program', 'project', 'promote', 'proof', 'property', 'prosper', 'protect', 'proud', 'provide', 'public',
    'pudding', 'pull', 'pulp', 'pulse', 'pumpkin', 'punch', 'pupil', 'puppy', 'purchase', 'purity', 'purpose',
    'purse', 'push', 'put', 'puzzle', 'pyramid', 'quality', 'quantum', 'quarter', 'question', 'quick', 'quit',
    'quiz', 'quote', 'rabbit', 'raccoon', 'race', 'rack', 'radar', 'radio', 'rail', 'rain', 'raise', 'rally',
    'ramp', 'ranch', 'random', 'range', 'rapid', 'rare', 'rate', 'rather', 'raven', 'raw', 'razor', 'ready',
    'real', 'reason', 'rebel', 'rebuild', 'recall', 'receive', 'recipe', 'record', 'recycle', 'reduce',
    'reflect', 'reform', 'refuse', 'region', 'regret', 'regular', 'reject', 'relax', 'release', 'relief',
    'rely', 'remain', 'remember', 'remind', 'remove', 'render', 'renew', 'rent', 'reopen', 'repair', 'repeat',
    'replace', 'report', 'require', 'rescue', 'resemble', 'resist', 'resource', 'response', 'result', 'retire',
    'retreat', 'return', 'reunion', 'reveal', 'review', 'reward', 'rhythm', 'rib', 'ribbon', 'rice', 'rich',
    'ride', 'ridge', 'rifle', 'right', 'rigid', 'ring', 'riot', 'ripple', 'risk', 'ritual', 'rival', 'river',
    'road', 'roast', 'robot', 'robust', 'rocket', 'romance', 'roof', 'rookie', 'room', 'rose', 'rotate',
    'rough', 'round', 'route', 'royal', 'rubber', 'rude', 'rug', 'rule', 'run', 'runway', 'rural', 'sad',
    'saddle', 'sadness', 'safe', 'sail', 'salad', 'salmon', 'salon', 'salt', 'salute', 'same', 'sample', 'sand',
    'satisfy', 'satoshi', 'sauce', 'sausage', 'save', 'say', 'scale', 'scan', 'scare', 'scatter', 'scene',
    'scheme', 'school', 'science', 'scissors', 'scorpion', 'scout', 'scrap', 'screen', 'script', 'scrub', 'sea',
    'search', 'season', 'seat', 'second', 'secret', 'section', 'security', 'seed', 'seek', 'segment', 'select',
    'sell', 'seminar', 'senior', 'sense', 'sentence', 'series', 'service', 'session', 'settle', 'setup',
    'seven', 'shadow', 'shaft', 'shallow', 'share', 'shed', 'shell', 'sheriff', 'shield', 'shift', 'shine',
    'ship', 'shiver', 'shock', 'shoe', 'shoot', 'shop', 'short', 'shoulder', 'shove', 'shrimp', 'shrug',
    'shuffle', 'shy', 'sibling', 'sick', 'side', 'siege', 'sight', 'sign', 'silent', 'silk', 'silly', 'silver',
    'similar', 'simple', 'since', 'sing', 'siren', 'sister', 'situate', 'six', 'size', 'skate', 'sketch', 'ski',
    'skill', 'skin', 'skirt', 'skull', 'slab', 'slam', 'sleep', 'slender', 'slice', 'slide', 'slight', 'slim',
    'slogan', 'slot', 'slow', 'slush', 'small', 'smart', 'smile', 'smoke', 'smooth', 'snack', 'snake', 'snap',
    'sniff', 'snow', 'soap', 'soccer', 'social', 'sock', 'soda', 'soft', 'solar', 'soldier', 'solid',
    'solution', 'solve', 'someone', 'song', 'soon', 'sorry', 'sort', 'soul', 'sound', 'soup', 'source', 'south',
    'space', 'spare', 'spatial', 'spawn', 'speak', 'special', 'speed', 'spell', 'spend', 'sphere', 'spice',
    'spider', 'spike', 'spin', 'spirit', 'split', 'spoil', 'sponsor', 'spoon', 'sport', 'spot', 'spray',
    'spread', 'spring', 'spy', 'square', 'squeeze', 'squirrel', 'stable', 'stadium', 'staff', 'stage', 'stairs',
    'stamp', 'stand', 'start', 'state', 'stay', 'steak', 'steel', 'stem', 'step', 'stereo', 'stick', 'still',
    'sting', 'stock', 'stomach', 'stone', 'stool', 'story', 'stove', 'strategy', 'street', 'strike', 'strong',
    'struggle', 'student', 'stuff', 'stumble', 'style', 'subject', 'submit', 'subway', 'success', 'such',
    'sudden', 'suffer', 'sugar', 'suggest', 'suit', 'summer', 'sun', 'sunny', 'sunset', 'super', 'supply',
    'supreme', 'sure', 'surface', 'surge', 'surprise', 'surround', 'survey', 'suspect', 'sustain', 'swallow',
    'swamp', 'swap', 'swarm', 'swear', 'sweet', 'swift', 'swim', 'swing', 'switch', 'sword', 'symbol',
    'symptom', 'syrup', 'system', 'table', 'tackle', 'tag', 'tail', 'talent', 'talk', 'tank', 'tape', 'target',
    'task', 'taste', 'tattoo', 'taxi', 'teach', 'team', 'tell', 'ten', 'tenant', 'tennis', 'tent', 'term',
    'test', 'text', 'thank', 'that', 'theme', 'then', 'theory', 'there', 'they', 'thing', 'this', 'thought',
    'three', 'thrive', 'throw', 'thumb', 'thunder', 'ticket', 'tide', 'tiger', 'tilt', 'timber', 'time', 'tiny',
    'tip', 'tired', 'tissue', 'title', 'toast', 'tobacco', 'today', 'toddler', 'toe', 'together', 'toilet',
    'token', 'tomato', 'tomorrow', 'tone', 'tongue', 'tonight', 'tool', 'tooth', 'top', 'topic', 'topple',
    'torch', 'tornado', 'tortoise', 'toss', 'total', 'tourist', 'toward', 'tower', 'town', 'toy', 'track',
    'trade', 'traffic', 'tragic', 'train', 'transfer', 'trap', 'trash', 'travel', 'tray', 'treat', 'tree',
    'trend', 'trial', 'tribe', 'trick', 'trigger', 'trim', 'trip', 'trophy', 'trouble', 'truck', 'true',
    'truly', 'trumpet', 'trust', 'truth', 'try', 'tube', 'tuition', 'tumble', 'tuna', 'tunnel', 'turkey',
    'turn', 'turtle', 'twelve', 'twenty', 'twice', 'twin', 'twist', 'two', 'type', 'typical', 'ugly',
    'umbrella', 'unable', 'unaware', 'uncle', 'uncover', 'under', 'undo', 'unfair', 'unfold', 'unhappy',
    'uniform', 'unique', 'unit', 'universe', 'unknown', 'unlock', 'until', 'unusual', 'unveil', 'update',
    'upgrade', 'uphold', 'upon', 'upper', 'upset', 'urban', 'urge', 'usage', 'use', 'used', 'useful', 'useless',
    'usual', 'utility', 'vacant', 'vacuum', 'vague', 'valid', 'valley', 'valve', 'van', 'vanish', 'vapor',
    'various', 'vast', 'vault', 'vehicle', 'velvet', 'vendor', 'venture', 'venue', 'verb', 'verify', 'version',
    'very', 'vessel', 'veteran', 'viable', 'vibrant', 'vicious', 'victory', 'video', 'view', 'village',
    'vintage', 'violin', 'virtual', 'virus', 'visa', 'visit', 'visual', 'vital', 'vivid', 'vocal', 'voice',
    'void', 'volcano', 'volume', 'vote', 'voyage', 'wage', 'wagon', 'wait', 'walk', 'wall', 'walnut', 'want',
    'warfare', 'warm', 'warrior', 'wash', 'wasp', 'waste', 'water', 'wave', 'way', 'wealth', 'weapon', 'wear',
    'weasel', 'weather', 'web', 'wedding', 'weekend', 'weird', 'welcome', 'west', 'wet', 'whale', 'what',
    'wheat', 'wheel', 'when', 'where', 'whip', 'whisper', 'wide', 'width', 'wife', 'wild', 'will', 'win',
    'window', 'wine', 'wing', 'wink', 'winner', 'winter', 'wire', 'wisdom', 'wise', 'wish', 'witness', 'wolf',
    'woman', 'wonder', 'wood', 'wool', 'word', 'work', 'world', 'worry', 'worth', 'wrap', 'wreck', 'wrestle',
    'wrist', 'write', 'wrong', 'yard', 'year', 'yellow', 'you', 'young', 'youth', 'zebra', 'zero', 'zone', 'zoo',
];
//# sourceMappingURL=seed-words-list.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/crypto/sign.js":
/*!**********************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/crypto/sign.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axlsign_1 = __importDefault(__webpack_require__(/*! ../libs/axlsign */ "./node_modules/@evestx/ts-lib-crypto/libs/axlsign.js"));
var param_1 = __webpack_require__(/*! ../conversions/param */ "./node_modules/@evestx/ts-lib-crypto/conversions/param.js");
var util_1 = __webpack_require__(/*! ./util */ "./node_modules/@evestx/ts-lib-crypto/crypto/util.js");
var address_keys_seed_1 = __webpack_require__(/*! ./address-keys-seed */ "./node_modules/@evestx/ts-lib-crypto/crypto/address-keys-seed.js");
var random_1 = __webpack_require__(/*! ./random */ "./node_modules/@evestx/ts-lib-crypto/crypto/random.js");
exports.signBytes = function (seedOrPrivateKey, bytes, random) {
    return axlsign_1.default.sign(param_1._fromIn(util_1.isPrivateKey(seedOrPrivateKey)
        ? seedOrPrivateKey.privateKey
        : address_keys_seed_1.privateKey(seedOrPrivateKey)), param_1._fromIn(bytes), param_1._fromIn(random || random_1.randomBytes(64)));
};
//# sourceMappingURL=sign.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/crypto/util.js":
/*!**********************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/crypto/util.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isPublicKey = function (val) {
    return val.publicKey !== undefined;
};
exports.isPrivateKey = function (val) {
    return val.privateKey !== undefined;
};
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/crypto/verification.js":
/*!******************************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/crypto/verification.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var interface_1 = __webpack_require__(/*! ./interface */ "./node_modules/@evestx/ts-lib-crypto/crypto/interface.js");
var chain_id_1 = __webpack_require__(/*! ../extensions/chain-id */ "./node_modules/@evestx/ts-lib-crypto/extensions/chain-id.js");
var param_1 = __webpack_require__(/*! ../conversions/param */ "./node_modules/@evestx/ts-lib-crypto/conversions/param.js");
var hashing_1 = __webpack_require__(/*! ./hashing */ "./node_modules/@evestx/ts-lib-crypto/crypto/hashing.js");
var address_keys_seed_1 = __webpack_require__(/*! ./address-keys-seed */ "./node_modules/@evestx/ts-lib-crypto/crypto/address-keys-seed.js");
var axlsign_1 = __importDefault(__webpack_require__(/*! ../libs/axlsign */ "./node_modules/@evestx/ts-lib-crypto/libs/axlsign.js"));
exports.verifyAddress = function (addr, optional) {
    var chainId = optional ? optional.chainId : undefined;
    try {
        var addressBytes = param_1._fromIn(addr);
        if (addressBytes[0] != 1 || (chainId ? addressBytes[1] != chain_id_1.ChaidId.toNumber(chainId) : false))
            return false;
        var key = addressBytes.slice(0, 22);
        var check = addressBytes.slice(22, 26);
        var keyHash = hashing_1._hashChain(key).slice(0, 4);
        for (var i = 0; i < 4; i++) {
            if (check[i] != keyHash[i])
                return false;
        }
        if (optional && optional.publicKey) {
            var a = address_keys_seed_1.address({ publicKey: optional.publicKey }, chainId);
            if (addressBytes.length !== a.length)
                return false;
            for (var i = 0; i < a.length; i++) {
                if (a[i] !== addressBytes[i])
                    return false;
            }
        }
    }
    catch (ex) {
        return false;
    }
    return true;
};
exports.verifySignature = function (publicKey, bytes, signature) {
    try {
        return axlsign_1.default.verify(param_1._fromIn(publicKey), param_1._fromIn(bytes), param_1._fromIn(signature));
    }
    catch (error) {
        return false;
    }
};
exports.verifyPublicKey = function (publicKey) { return param_1._fromIn(publicKey).length === interface_1.PUBLIC_KEY_LENGTH; };
//# sourceMappingURL=verification.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/extensions/chain-id.js":
/*!******************************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/extensions/chain-id.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var interface_1 = __webpack_require__(/*! ../crypto/interface */ "./node_modules/@evestx/ts-lib-crypto/crypto/interface.js");
var interface_2 = __webpack_require__(/*! ../crypto/interface */ "./node_modules/@evestx/ts-lib-crypto/crypto/interface.js");
exports.ChaidId = {
    toNumber: function (chainId) {
        return (typeof chainId === 'string' ? chainId.charCodeAt(0) : chainId);
    },
    isMainnet: function (chainId) {
        return exports.ChaidId.toNumber(chainId) === interface_1.MAIN_NET_CHAIN_ID;
    },
    isTestnet: function (chainId) {
        return exports.ChaidId.toNumber(chainId) === interface_2.TEST_NET_CHAIN_ID;
    },
};
//# sourceMappingURL=chain-id.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/extensions/seed.js":
/*!**************************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/extensions/seed.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var param_1 = __webpack_require__(/*! ../conversions/param */ "./node_modules/@evestx/ts-lib-crypto/conversions/param.js");
var string_bytes_1 = __webpack_require__(/*! ../conversions/string-bytes */ "./node_modules/@evestx/ts-lib-crypto/conversions/string-bytes.js");
exports.Seed = {
    isSeedWithNonce: function (val) {
        return val.nonce !== undefined;
    },
    toBinary: function (seed) {
        return exports.Seed.isSeedWithNonce(seed) ?
            { seed: exports.Seed.toBinary(seed.seed).seed, nonce: seed.nonce } :
            { seed: param_1._fromRawIn(seed), nonce: undefined };
    },
    toString: function (seed) {
        return string_bytes_1.bytesToString(exports.Seed.toBinary(seed).seed);
    },
};
//# sourceMappingURL=seed.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/index.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __webpack_require__(/*! ./crypto/crypto */ "./node_modules/@evestx/ts-lib-crypto/crypto/crypto.js");
var seed_words_list_1 = __webpack_require__(/*! ./crypto/seed-words-list */ "./node_modules/@evestx/ts-lib-crypto/crypto/seed-words-list.js");
exports.seedWordsList = seed_words_list_1.seedWordsList;
var chain_id_1 = __webpack_require__(/*! ./extensions/chain-id */ "./node_modules/@evestx/ts-lib-crypto/extensions/chain-id.js");
exports.ChaidId = chain_id_1.ChaidId;
var seed_1 = __webpack_require__(/*! ./extensions/seed */ "./node_modules/@evestx/ts-lib-crypto/extensions/seed.js");
exports.Seed = seed_1.Seed;
var util_1 = __webpack_require__(/*! ./crypto/util */ "./node_modules/@evestx/ts-lib-crypto/crypto/util.js");
exports.isPrivateKey = util_1.isPrivateKey;
exports.isPublicKey = util_1.isPublicKey;
var crypto_2 = __webpack_require__(/*! ./crypto/crypto */ "./node_modules/@evestx/ts-lib-crypto/crypto/crypto.js");
exports.crypto = crypto_2.crypto;
__export(__webpack_require__(/*! ./crypto/interface */ "./node_modules/@evestx/ts-lib-crypto/crypto/interface.js"));
exports.signBytes = (_a = crypto_1.crypto({ output: 'Base58' }), _a.signBytes), exports.keyPair = _a.keyPair, exports.publicKey = _a.publicKey, exports.privateKey = _a.privateKey, exports.address = _a.address, exports.buildAddress = _a.buildAddress, exports.blake2b = _a.blake2b, exports.keccak = _a.keccak, exports.sha256 = _a.sha256, exports.sharedKey = _a.sharedKey, exports.seedWithNonce = _a.seedWithNonce, exports.base64Encode = _a.base64Encode, exports.base64Decode = _a.base64Decode, exports.base58Encode = _a.base58Encode, exports.base58Decode = _a.base58Decode, exports.base16Encode = _a.base16Encode, exports.base16Decode = _a.base16Decode, exports.stringToBytes = _a.stringToBytes, exports.bytesToString = _a.bytesToString, exports.random = _a.random, exports.randomSeed = _a.randomSeed, exports.randomBytes = _a.randomBytes, exports.verifySignature = _a.verifySignature, exports.verifyPublicKey = _a.verifyPublicKey, exports.verifyAddress = _a.verifyAddress, exports.messageDecrypt = _a.messageDecrypt, exports.messageEncrypt = _a.messageEncrypt, exports.aesDecrypt = _a.aesDecrypt, exports.aesEncrypt = _a.aesEncrypt, exports.encryptSeed = _a.encryptSeed, exports.decryptSeed = _a.decryptSeed, exports.rsaKeyPair = _a.rsaKeyPair, exports.rsaKeyPairSync = _a.rsaKeyPairSync, exports.rsaSign = _a.rsaSign, exports.rsaVerify = _a.rsaVerify, exports.merkleVerify = _a.merkleVerify, exports.split = _a.split, exports.concat = _a.concat;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/libs/Utf8.js":
/*!********************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/libs/Utf8.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utf8ArrayToStr = (function () {
    var charCache = new Array(128); // Preallocate the cache for the common single byte chars
    var charFromCodePt = String.fromCodePoint || String.fromCharCode;
    var result = [];
    return function (array) {
        var codePt, byte1;
        var buffLen = array.length;
        result.length = 0;
        for (var i = 0; i < buffLen;) {
            byte1 = array[i++];
            if (byte1 <= 0x7F) {
                codePt = byte1;
            }
            else if (byte1 <= 0xDF) {
                codePt = ((byte1 & 0x1F) << 6) | (array[i++] & 0x3F);
            }
            else if (byte1 <= 0xEF) {
                codePt = ((byte1 & 0x0F) << 12) | ((array[i++] & 0x3F) << 6) | (array[i++] & 0x3F);
            }
            else if (String.fromCodePoint) {
                codePt = ((byte1 & 0x07) << 18) | ((array[i++] & 0x3F) << 12) | ((array[i++] & 0x3F) << 6) | (array[i++] & 0x3F);
            }
            else {
                codePt = 63; // Cannot convertLongFields four byte code points, so use "?" instead
                i += 3;
            }
            result.push(charCache[codePt] || (charCache[codePt] = charFromCodePt(codePt)));
        }
        return result.join('');
    };
});
exports.utf8ArrayToStr = Utf8ArrayToStr();
function strToUtf8Array(str) {
    var utf8 = [];
    for (var i = 0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80)
            utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + (((charcode & 0x3ff) << 10)
                | (str.charCodeAt(i) & 0x3ff));
            utf8.push(0xf0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3f), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
        }
    }
    return Uint8Array.from(utf8);
}
exports.strToUtf8Array = strToUtf8Array;
//# sourceMappingURL=Utf8.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/libs/axlsign.js":
/*!***********************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/libs/axlsign.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Curve25519 signatures (and also key agreement)
// like in the early Axolotl.
//
// Written by Dmitry Chestnykh.
// You can use it under MIT or CC0 license.
exports.__esModule = true
// Curve25519 signatures idea and math by Trevor Perrin
// https://moderncrypto.org/mail-archive/curves/2014/000205.html
// Derived from TweetNaCl.js (https://tweetnacl.js.org/)
// Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
// Public domain.
//
// Implementation derived from TweetNaCl version 20140427.
// See for details: http://tweetnacl.cr.yp.to/
var axlsign = Object.create(null)
var gf = function (init) {
  var i, r = new Float64Array(16)
  if (init)
    for (i = 0; i < init.length; i++)
      r[i] = init[i]
  return r
}
var _0 = new Uint8Array(16)
var _9 = new Uint8Array(32)
_9[0] = 9
var gf0 = gf(), gf1 = gf([1]), _121665 = gf([0xdb41, 1]), D = gf([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]), D2 = gf([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]), X = gf([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]), Y = gf([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]), I = gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83])
function ts64(x, i, h, l) {
  x[i] = (h >> 24) & 0xff
  x[i + 1] = (h >> 16) & 0xff
  x[i + 2] = (h >> 8) & 0xff
  x[i + 3] = h & 0xff
  x[i + 4] = (l >> 24) & 0xff
  x[i + 5] = (l >> 16) & 0xff
  x[i + 6] = (l >> 8) & 0xff
  x[i + 7] = l & 0xff
}
function vn(x, xi, y, yi, n) {
  var i, d = 0
  for (i = 0; i < n; i++)
    d |= x[xi + i] ^ y[yi + i]
  return (1 & ((d - 1) >>> 8)) - 1
}
function crypto_verify_32(x, xi, y, yi) {
  return vn(x, xi, y, yi, 32)
}
function set25519(r, a) {
  for (var i = 0; i < 16; i++)
    r[i] = a[i] | 0
}
function car25519(o) {
  var i, v, c = 1
  for (i = 0; i < 16; i++) {
    v = o[i] + c + 65535
    c = Math.floor(v / 65536)
    o[i] = v - c * 65536
  }
  o[0] += c - 1 + 37 * (c - 1)
}
function sel25519(p, q, b) {
  var t, c = ~(b - 1)
  for (var i = 0; i < 16; i++) {
    t = c & (p[i] ^ q[i])
    p[i] ^= t
    q[i] ^= t
  }
}
function pack25519(o, n) {
  var i, j, b
  var m = gf(), t = gf()
  for (i = 0; i < 16; i++)
    t[i] = n[i]
  car25519(t)
  car25519(t)
  car25519(t)
  for (j = 0; j < 2; j++) {
    m[0] = t[0] - 0xffed
    for (i = 1; i < 15; i++) {
      m[i] = t[i] - 0xffff - ((m[i - 1] >> 16) & 1)
      m[i - 1] &= 0xffff
    }
    m[15] = t[15] - 0x7fff - ((m[14] >> 16) & 1)
    b = (m[15] >> 16) & 1
    m[14] &= 0xffff
    sel25519(t, m, 1 - b)
  }
  for (i = 0; i < 16; i++) {
    o[2 * i] = t[i] & 0xff
    o[2 * i + 1] = t[i] >> 8
  }
}
function neq25519(a, b) {
  var c = new Uint8Array(32), d = new Uint8Array(32)
  pack25519(c, a)
  pack25519(d, b)
  return crypto_verify_32(c, 0, d, 0)
}
function par25519(a) {
  var d = new Uint8Array(32)
  pack25519(d, a)
  return d[0] & 1
}
function unpack25519(o, n) {
  for (var i = 0; i < 16; i++)
    o[i] = n[2 * i] + (n[2 * i + 1] << 8)
  o[15] &= 0x7fff
}
function A(o, a, b) {
  for (var i = 0; i < 16; i++)
    o[i] = a[i] + b[i]
}
function Z(o, a, b) {
  for (var i = 0; i < 16; i++)
    o[i] = a[i] - b[i]
}
function M(o, a, b) {
  var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15]
  v = a[0]
  t0 += v * b0
  t1 += v * b1
  t2 += v * b2
  t3 += v * b3
  t4 += v * b4
  t5 += v * b5
  t6 += v * b6
  t7 += v * b7
  t8 += v * b8
  t9 += v * b9
  t10 += v * b10
  t11 += v * b11
  t12 += v * b12
  t13 += v * b13
  t14 += v * b14
  t15 += v * b15
  v = a[1]
  t1 += v * b0
  t2 += v * b1
  t3 += v * b2
  t4 += v * b3
  t5 += v * b4
  t6 += v * b5
  t7 += v * b6
  t8 += v * b7
  t9 += v * b8
  t10 += v * b9
  t11 += v * b10
  t12 += v * b11
  t13 += v * b12
  t14 += v * b13
  t15 += v * b14
  t16 += v * b15
  v = a[2]
  t2 += v * b0
  t3 += v * b1
  t4 += v * b2
  t5 += v * b3
  t6 += v * b4
  t7 += v * b5
  t8 += v * b6
  t9 += v * b7
  t10 += v * b8
  t11 += v * b9
  t12 += v * b10
  t13 += v * b11
  t14 += v * b12
  t15 += v * b13
  t16 += v * b14
  t17 += v * b15
  v = a[3]
  t3 += v * b0
  t4 += v * b1
  t5 += v * b2
  t6 += v * b3
  t7 += v * b4
  t8 += v * b5
  t9 += v * b6
  t10 += v * b7
  t11 += v * b8
  t12 += v * b9
  t13 += v * b10
  t14 += v * b11
  t15 += v * b12
  t16 += v * b13
  t17 += v * b14
  t18 += v * b15
  v = a[4]
  t4 += v * b0
  t5 += v * b1
  t6 += v * b2
  t7 += v * b3
  t8 += v * b4
  t9 += v * b5
  t10 += v * b6
  t11 += v * b7
  t12 += v * b8
  t13 += v * b9
  t14 += v * b10
  t15 += v * b11
  t16 += v * b12
  t17 += v * b13
  t18 += v * b14
  t19 += v * b15
  v = a[5]
  t5 += v * b0
  t6 += v * b1
  t7 += v * b2
  t8 += v * b3
  t9 += v * b4
  t10 += v * b5
  t11 += v * b6
  t12 += v * b7
  t13 += v * b8
  t14 += v * b9
  t15 += v * b10
  t16 += v * b11
  t17 += v * b12
  t18 += v * b13
  t19 += v * b14
  t20 += v * b15
  v = a[6]
  t6 += v * b0
  t7 += v * b1
  t8 += v * b2
  t9 += v * b3
  t10 += v * b4
  t11 += v * b5
  t12 += v * b6
  t13 += v * b7
  t14 += v * b8
  t15 += v * b9
  t16 += v * b10
  t17 += v * b11
  t18 += v * b12
  t19 += v * b13
  t20 += v * b14
  t21 += v * b15
  v = a[7]
  t7 += v * b0
  t8 += v * b1
  t9 += v * b2
  t10 += v * b3
  t11 += v * b4
  t12 += v * b5
  t13 += v * b6
  t14 += v * b7
  t15 += v * b8
  t16 += v * b9
  t17 += v * b10
  t18 += v * b11
  t19 += v * b12
  t20 += v * b13
  t21 += v * b14
  t22 += v * b15
  v = a[8]
  t8 += v * b0
  t9 += v * b1
  t10 += v * b2
  t11 += v * b3
  t12 += v * b4
  t13 += v * b5
  t14 += v * b6
  t15 += v * b7
  t16 += v * b8
  t17 += v * b9
  t18 += v * b10
  t19 += v * b11
  t20 += v * b12
  t21 += v * b13
  t22 += v * b14
  t23 += v * b15
  v = a[9]
  t9 += v * b0
  t10 += v * b1
  t11 += v * b2
  t12 += v * b3
  t13 += v * b4
  t14 += v * b5
  t15 += v * b6
  t16 += v * b7
  t17 += v * b8
  t18 += v * b9
  t19 += v * b10
  t20 += v * b11
  t21 += v * b12
  t22 += v * b13
  t23 += v * b14
  t24 += v * b15
  v = a[10]
  t10 += v * b0
  t11 += v * b1
  t12 += v * b2
  t13 += v * b3
  t14 += v * b4
  t15 += v * b5
  t16 += v * b6
  t17 += v * b7
  t18 += v * b8
  t19 += v * b9
  t20 += v * b10
  t21 += v * b11
  t22 += v * b12
  t23 += v * b13
  t24 += v * b14
  t25 += v * b15
  v = a[11]
  t11 += v * b0
  t12 += v * b1
  t13 += v * b2
  t14 += v * b3
  t15 += v * b4
  t16 += v * b5
  t17 += v * b6
  t18 += v * b7
  t19 += v * b8
  t20 += v * b9
  t21 += v * b10
  t22 += v * b11
  t23 += v * b12
  t24 += v * b13
  t25 += v * b14
  t26 += v * b15
  v = a[12]
  t12 += v * b0
  t13 += v * b1
  t14 += v * b2
  t15 += v * b3
  t16 += v * b4
  t17 += v * b5
  t18 += v * b6
  t19 += v * b7
  t20 += v * b8
  t21 += v * b9
  t22 += v * b10
  t23 += v * b11
  t24 += v * b12
  t25 += v * b13
  t26 += v * b14
  t27 += v * b15
  v = a[13]
  t13 += v * b0
  t14 += v * b1
  t15 += v * b2
  t16 += v * b3
  t17 += v * b4
  t18 += v * b5
  t19 += v * b6
  t20 += v * b7
  t21 += v * b8
  t22 += v * b9
  t23 += v * b10
  t24 += v * b11
  t25 += v * b12
  t26 += v * b13
  t27 += v * b14
  t28 += v * b15
  v = a[14]
  t14 += v * b0
  t15 += v * b1
  t16 += v * b2
  t17 += v * b3
  t18 += v * b4
  t19 += v * b5
  t20 += v * b6
  t21 += v * b7
  t22 += v * b8
  t23 += v * b9
  t24 += v * b10
  t25 += v * b11
  t26 += v * b12
  t27 += v * b13
  t28 += v * b14
  t29 += v * b15
  v = a[15]
  t15 += v * b0
  t16 += v * b1
  t17 += v * b2
  t18 += v * b3
  t19 += v * b4
  t20 += v * b5
  t21 += v * b6
  t22 += v * b7
  t23 += v * b8
  t24 += v * b9
  t25 += v * b10
  t26 += v * b11
  t27 += v * b12
  t28 += v * b13
  t29 += v * b14
  t30 += v * b15
  t0 += 38 * t16
  t1 += 38 * t17
  t2 += 38 * t18
  t3 += 38 * t19
  t4 += 38 * t20
  t5 += 38 * t21
  t6 += 38 * t22
  t7 += 38 * t23
  t8 += 38 * t24
  t9 += 38 * t25
  t10 += 38 * t26
  t11 += 38 * t27
  t12 += 38 * t28
  t13 += 38 * t29
  t14 += 38 * t30
  // t15 left as is
  // first car
  c = 1
  v = t0 + c + 65535
  c = Math.floor(v / 65536)
  t0 = v - c * 65536
  v = t1 + c + 65535
  c = Math.floor(v / 65536)
  t1 = v - c * 65536
  v = t2 + c + 65535
  c = Math.floor(v / 65536)
  t2 = v - c * 65536
  v = t3 + c + 65535
  c = Math.floor(v / 65536)
  t3 = v - c * 65536
  v = t4 + c + 65535
  c = Math.floor(v / 65536)
  t4 = v - c * 65536
  v = t5 + c + 65535
  c = Math.floor(v / 65536)
  t5 = v - c * 65536
  v = t6 + c + 65535
  c = Math.floor(v / 65536)
  t6 = v - c * 65536
  v = t7 + c + 65535
  c = Math.floor(v / 65536)
  t7 = v - c * 65536
  v = t8 + c + 65535
  c = Math.floor(v / 65536)
  t8 = v - c * 65536
  v = t9 + c + 65535
  c = Math.floor(v / 65536)
  t9 = v - c * 65536
  v = t10 + c + 65535
  c = Math.floor(v / 65536)
  t10 = v - c * 65536
  v = t11 + c + 65535
  c = Math.floor(v / 65536)
  t11 = v - c * 65536
  v = t12 + c + 65535
  c = Math.floor(v / 65536)
  t12 = v - c * 65536
  v = t13 + c + 65535
  c = Math.floor(v / 65536)
  t13 = v - c * 65536
  v = t14 + c + 65535
  c = Math.floor(v / 65536)
  t14 = v - c * 65536
  v = t15 + c + 65535
  c = Math.floor(v / 65536)
  t15 = v - c * 65536
  t0 += c - 1 + 37 * (c - 1)
  // second car
  c = 1
  v = t0 + c + 65535
  c = Math.floor(v / 65536)
  t0 = v - c * 65536
  v = t1 + c + 65535
  c = Math.floor(v / 65536)
  t1 = v - c * 65536
  v = t2 + c + 65535
  c = Math.floor(v / 65536)
  t2 = v - c * 65536
  v = t3 + c + 65535
  c = Math.floor(v / 65536)
  t3 = v - c * 65536
  v = t4 + c + 65535
  c = Math.floor(v / 65536)
  t4 = v - c * 65536
  v = t5 + c + 65535
  c = Math.floor(v / 65536)
  t5 = v - c * 65536
  v = t6 + c + 65535
  c = Math.floor(v / 65536)
  t6 = v - c * 65536
  v = t7 + c + 65535
  c = Math.floor(v / 65536)
  t7 = v - c * 65536
  v = t8 + c + 65535
  c = Math.floor(v / 65536)
  t8 = v - c * 65536
  v = t9 + c + 65535
  c = Math.floor(v / 65536)
  t9 = v - c * 65536
  v = t10 + c + 65535
  c = Math.floor(v / 65536)
  t10 = v - c * 65536
  v = t11 + c + 65535
  c = Math.floor(v / 65536)
  t11 = v - c * 65536
  v = t12 + c + 65535
  c = Math.floor(v / 65536)
  t12 = v - c * 65536
  v = t13 + c + 65535
  c = Math.floor(v / 65536)
  t13 = v - c * 65536
  v = t14 + c + 65535
  c = Math.floor(v / 65536)
  t14 = v - c * 65536
  v = t15 + c + 65535
  c = Math.floor(v / 65536)
  t15 = v - c * 65536
  t0 += c - 1 + 37 * (c - 1)
  o[0] = t0
  o[1] = t1
  o[2] = t2
  o[3] = t3
  o[4] = t4
  o[5] = t5
  o[6] = t6
  o[7] = t7
  o[8] = t8
  o[9] = t9
  o[10] = t10
  o[11] = t11
  o[12] = t12
  o[13] = t13
  o[14] = t14
  o[15] = t15
}
function S(o, a) {
  M(o, a, a)
}
function inv25519(o, i) {
  var c = gf()
  var a
  for (a = 0; a < 16; a++)
    c[a] = i[a]
  for (a = 253; a >= 0; a--) {
    S(c, c)
    if (a !== 2 && a !== 4)
      M(c, c, i)
  }
  for (a = 0; a < 16; a++)
    o[a] = c[a]
}
function pow2523(o, i) {
  var c = gf()
  var a
  for (a = 0; a < 16; a++)
    c[a] = i[a]
  for (a = 250; a >= 0; a--) {
    S(c, c)
    if (a !== 1)
      M(c, c, i)
  }
  for (a = 0; a < 16; a++)
    o[a] = c[a]
}
function crypto_scalarmult(q, n, p) {
  var z = new Uint8Array(32)
  var x = new Float64Array(80)
  var r, i
  var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf()
  for (i = 0; i < 31; i++)
    z[i] = n[i]
  z[31] = (n[31] & 127) | 64
  z[0] &= 248
  unpack25519(x, p)
  for (i = 0; i < 16; i++) {
    b[i] = x[i]
    d[i] = a[i] = c[i] = 0
  }
  a[0] = d[0] = 1
  for (i = 254; i >= 0; --i) {
    r = (z[i >>> 3] >>> (i & 7)) & 1
    sel25519(a, b, r)
    sel25519(c, d, r)
    A(e, a, c)
    Z(a, a, c)
    A(c, b, d)
    Z(b, b, d)
    S(d, e)
    S(f, a)
    M(a, c, a)
    M(c, b, e)
    A(e, a, c)
    Z(a, a, c)
    S(b, a)
    Z(c, d, f)
    M(a, c, _121665)
    A(a, a, d)
    M(c, c, a)
    M(a, d, f)
    M(d, b, x)
    S(b, e)
    sel25519(a, b, r)
    sel25519(c, d, r)
  }
  for (i = 0; i < 16; i++) {
    x[i + 16] = a[i]
    x[i + 32] = c[i]
    x[i + 48] = b[i]
    x[i + 64] = d[i]
  }
  var x32 = x.subarray(32)
  var x16 = x.subarray(16)
  inv25519(x32, x32)
  M(x16, x16, x32)
  pack25519(q, x16)
  return 0
}
function crypto_scalarmult_base(q, n) {
  return crypto_scalarmult(q, n, _9)
}
var K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817,
]
function crypto_hashblocks_hl(hh, hl, m, n) {
  var wh = new Int32Array(16), wl = new Int32Array(16)
  var bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i, j, h, l, a, b, c, d
  var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7]
  var pos = 0
  while (n >= 128) {
    for (i = 0; i < 16; i++) {
      j = 8 * i + pos
      wh[i] = (m[j + 0] << 24) | (m[j + 1] << 16) | (m[j + 2] << 8) | m[j + 3]
      wl[i] = (m[j + 4] << 24) | (m[j + 5] << 16) | (m[j + 6] << 8) | m[j + 7]
    }
    for (i = 0; i < 80; i++) {
      bh0 = ah0
      bh1 = ah1
      bh2 = ah2
      bh3 = ah3
      bh4 = ah4
      bh5 = ah5
      bh6 = ah6
      bh7 = ah7
      bl0 = al0
      bl1 = al1
      bl2 = al2
      bl3 = al3
      bl4 = al4
      bl5 = al5
      bl6 = al6
      bl7 = al7
      // add
      h = ah7
      l = al7
      a = l & 0xffff
      b = l >>> 16
      c = h & 0xffff
      d = h >>> 16
      // Sigma1
      h = ((ah4 >>> 14) | (al4 << (32 - 14))) ^ ((ah4 >>> 18) | (al4 << (32 - 18))) ^ ((al4 >>> (41 - 32)) | (ah4 << (32 - (41 - 32))))
      l = ((al4 >>> 14) | (ah4 << (32 - 14))) ^ ((al4 >>> 18) | (ah4 << (32 - 18))) ^ ((ah4 >>> (41 - 32)) | (al4 << (32 - (41 - 32))))
      a += l & 0xffff
      b += l >>> 16
      c += h & 0xffff
      d += h >>> 16
      // Ch
      h = (ah4 & ah5) ^ (~ah4 & ah6)
      l = (al4 & al5) ^ (~al4 & al6)
      a += l & 0xffff
      b += l >>> 16
      c += h & 0xffff
      d += h >>> 16
      // K
      h = K[i * 2]
      l = K[i * 2 + 1]
      a += l & 0xffff
      b += l >>> 16
      c += h & 0xffff
      d += h >>> 16
      // w
      h = wh[i % 16]
      l = wl[i % 16]
      a += l & 0xffff
      b += l >>> 16
      c += h & 0xffff
      d += h >>> 16
      b += a >>> 16
      c += b >>> 16
      d += c >>> 16
      th = c & 0xffff | d << 16
      tl = a & 0xffff | b << 16
      // add
      h = th
      l = tl
      a = l & 0xffff
      b = l >>> 16
      c = h & 0xffff
      d = h >>> 16
      // Sigma0
      h = ((ah0 >>> 28) | (al0 << (32 - 28))) ^ ((al0 >>> (34 - 32)) | (ah0 << (32 - (34 - 32)))) ^ ((al0 >>> (39 - 32)) | (ah0 << (32 - (39 - 32))))
      l = ((al0 >>> 28) | (ah0 << (32 - 28))) ^ ((ah0 >>> (34 - 32)) | (al0 << (32 - (34 - 32)))) ^ ((ah0 >>> (39 - 32)) | (al0 << (32 - (39 - 32))))
      a += l & 0xffff
      b += l >>> 16
      c += h & 0xffff
      d += h >>> 16
      // Maj
      h = (ah0 & ah1) ^ (ah0 & ah2) ^ (ah1 & ah2)
      l = (al0 & al1) ^ (al0 & al2) ^ (al1 & al2)
      a += l & 0xffff
      b += l >>> 16
      c += h & 0xffff
      d += h >>> 16
      b += a >>> 16
      c += b >>> 16
      d += c >>> 16
      bh7 = (c & 0xffff) | (d << 16)
      bl7 = (a & 0xffff) | (b << 16)
      // add
      h = bh3
      l = bl3
      a = l & 0xffff
      b = l >>> 16
      c = h & 0xffff
      d = h >>> 16
      h = th
      l = tl
      a += l & 0xffff
      b += l >>> 16
      c += h & 0xffff
      d += h >>> 16
      b += a >>> 16
      c += b >>> 16
      d += c >>> 16
      bh3 = (c & 0xffff) | (d << 16)
      bl3 = (a & 0xffff) | (b << 16)
      ah1 = bh0
      ah2 = bh1
      ah3 = bh2
      ah4 = bh3
      ah5 = bh4
      ah6 = bh5
      ah7 = bh6
      ah0 = bh7
      al1 = bl0
      al2 = bl1
      al3 = bl2
      al4 = bl3
      al5 = bl4
      al6 = bl5
      al7 = bl6
      al0 = bl7
      if (i % 16 === 15) {
        for (j = 0; j < 16; j++) {
          // add
          h = wh[j]
          l = wl[j]
          a = l & 0xffff
          b = l >>> 16
          c = h & 0xffff
          d = h >>> 16
          h = wh[(j + 9) % 16]
          l = wl[(j + 9) % 16]
          a += l & 0xffff
          b += l >>> 16
          c += h & 0xffff
          d += h >>> 16
          // sigma0
          th = wh[(j + 1) % 16]
          tl = wl[(j + 1) % 16]
          h = ((th >>> 1) | (tl << (32 - 1))) ^ ((th >>> 8) | (tl << (32 - 8))) ^ (th >>> 7)
          l = ((tl >>> 1) | (th << (32 - 1))) ^ ((tl >>> 8) | (th << (32 - 8))) ^ ((tl >>> 7) | (th << (32 - 7)))
          a += l & 0xffff
          b += l >>> 16
          c += h & 0xffff
          d += h >>> 16
          // sigma1
          th = wh[(j + 14) % 16]
          tl = wl[(j + 14) % 16]
          h = ((th >>> 19) | (tl << (32 - 19))) ^ ((tl >>> (61 - 32)) | (th << (32 - (61 - 32)))) ^ (th >>> 6)
          l = ((tl >>> 19) | (th << (32 - 19))) ^ ((th >>> (61 - 32)) | (tl << (32 - (61 - 32)))) ^ ((tl >>> 6) | (th << (32 - 6)))
          a += l & 0xffff
          b += l >>> 16
          c += h & 0xffff
          d += h >>> 16
          b += a >>> 16
          c += b >>> 16
          d += c >>> 16
          wh[j] = (c & 0xffff) | (d << 16)
          wl[j] = (a & 0xffff) | (b << 16)
        }
      }
    }
    // add
    h = ah0
    l = al0
    a = l & 0xffff
    b = l >>> 16
    c = h & 0xffff
    d = h >>> 16
    h = hh[0]
    l = hl[0]
    a += l & 0xffff
    b += l >>> 16
    c += h & 0xffff
    d += h >>> 16
    b += a >>> 16
    c += b >>> 16
    d += c >>> 16
    hh[0] = ah0 = (c & 0xffff) | (d << 16)
    hl[0] = al0 = (a & 0xffff) | (b << 16)
    h = ah1
    l = al1
    a = l & 0xffff
    b = l >>> 16
    c = h & 0xffff
    d = h >>> 16
    h = hh[1]
    l = hl[1]
    a += l & 0xffff
    b += l >>> 16
    c += h & 0xffff
    d += h >>> 16
    b += a >>> 16
    c += b >>> 16
    d += c >>> 16
    hh[1] = ah1 = (c & 0xffff) | (d << 16)
    hl[1] = al1 = (a & 0xffff) | (b << 16)
    h = ah2
    l = al2
    a = l & 0xffff
    b = l >>> 16
    c = h & 0xffff
    d = h >>> 16
    h = hh[2]
    l = hl[2]
    a += l & 0xffff
    b += l >>> 16
    c += h & 0xffff
    d += h >>> 16
    b += a >>> 16
    c += b >>> 16
    d += c >>> 16
    hh[2] = ah2 = (c & 0xffff) | (d << 16)
    hl[2] = al2 = (a & 0xffff) | (b << 16)
    h = ah3
    l = al3
    a = l & 0xffff
    b = l >>> 16
    c = h & 0xffff
    d = h >>> 16
    h = hh[3]
    l = hl[3]
    a += l & 0xffff
    b += l >>> 16
    c += h & 0xffff
    d += h >>> 16
    b += a >>> 16
    c += b >>> 16
    d += c >>> 16
    hh[3] = ah3 = (c & 0xffff) | (d << 16)
    hl[3] = al3 = (a & 0xffff) | (b << 16)
    h = ah4
    l = al4
    a = l & 0xffff
    b = l >>> 16
    c = h & 0xffff
    d = h >>> 16
    h = hh[4]
    l = hl[4]
    a += l & 0xffff
    b += l >>> 16
    c += h & 0xffff
    d += h >>> 16
    b += a >>> 16
    c += b >>> 16
    d += c >>> 16
    hh[4] = ah4 = (c & 0xffff) | (d << 16)
    hl[4] = al4 = (a & 0xffff) | (b << 16)
    h = ah5
    l = al5
    a = l & 0xffff
    b = l >>> 16
    c = h & 0xffff
    d = h >>> 16
    h = hh[5]
    l = hl[5]
    a += l & 0xffff
    b += l >>> 16
    c += h & 0xffff
    d += h >>> 16
    b += a >>> 16
    c += b >>> 16
    d += c >>> 16
    hh[5] = ah5 = (c & 0xffff) | (d << 16)
    hl[5] = al5 = (a & 0xffff) | (b << 16)
    h = ah6
    l = al6
    a = l & 0xffff
    b = l >>> 16
    c = h & 0xffff
    d = h >>> 16
    h = hh[6]
    l = hl[6]
    a += l & 0xffff
    b += l >>> 16
    c += h & 0xffff
    d += h >>> 16
    b += a >>> 16
    c += b >>> 16
    d += c >>> 16
    hh[6] = ah6 = (c & 0xffff) | (d << 16)
    hl[6] = al6 = (a & 0xffff) | (b << 16)
    h = ah7
    l = al7
    a = l & 0xffff
    b = l >>> 16
    c = h & 0xffff
    d = h >>> 16
    h = hh[7]
    l = hl[7]
    a += l & 0xffff
    b += l >>> 16
    c += h & 0xffff
    d += h >>> 16
    b += a >>> 16
    c += b >>> 16
    d += c >>> 16
    hh[7] = ah7 = (c & 0xffff) | (d << 16)
    hl[7] = al7 = (a & 0xffff) | (b << 16)
    pos += 128
    n -= 128
  }
  return n
}
function crypto_hash(out, m, n) {
  var hh = new Int32Array(8)
  var hl = new Int32Array(8)
  var x = new Uint8Array(256)
  var i, b = n
  hh[0] = 0x6a09e667
  hh[1] = 0xbb67ae85
  hh[2] = 0x3c6ef372
  hh[3] = 0xa54ff53a
  hh[4] = 0x510e527f
  hh[5] = 0x9b05688c
  hh[6] = 0x1f83d9ab
  hh[7] = 0x5be0cd19
  hl[0] = 0xf3bcc908
  hl[1] = 0x84caa73b
  hl[2] = 0xfe94f82b
  hl[3] = 0x5f1d36f1
  hl[4] = 0xade682d1
  hl[5] = 0x2b3e6c1f
  hl[6] = 0xfb41bd6b
  hl[7] = 0x137e2179
  crypto_hashblocks_hl(hh, hl, m, n)
  n %= 128
  for (i = 0; i < n; i++)
    x[i] = m[b - n + i]
  x[n] = 128
  n = 256 - 128 * (n < 112 ? 1 : 0)
  x[n - 9] = 0
  ts64(x, n - 8, (b / 0x20000000) | 0, b << 3)
  crypto_hashblocks_hl(hh, hl, x, n)
  for (i = 0; i < 8; i++)
    ts64(out, 8 * i, hh[i], hl[i])
  return 0
}
function add(p, q) {
  var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf()
  Z(a, p[1], p[0])
  Z(t, q[1], q[0])
  M(a, a, t)
  A(b, p[0], p[1])
  A(t, q[0], q[1])
  M(b, b, t)
  M(c, p[3], q[3])
  M(c, c, D2)
  M(d, p[2], q[2])
  A(d, d, d)
  Z(e, b, a)
  Z(f, d, c)
  A(g, d, c)
  A(h, b, a)
  M(p[0], e, f)
  M(p[1], h, g)
  M(p[2], g, f)
  M(p[3], e, h)
}
function cswap(p, q, b) {
  for (var i = 0; i < 4; i++) {
    sel25519(p[i], q[i], b)
  }
}
function pack(r, p) {
  var tx = gf(), ty = gf(), zi = gf()
  inv25519(zi, p[2])
  M(tx, p[0], zi)
  M(ty, p[1], zi)
  pack25519(r, ty)
  r[31] ^= par25519(tx) << 7
}
function scalarmult(p, q, s) {
  var b, i
  set25519(p[0], gf0)
  set25519(p[1], gf1)
  set25519(p[2], gf1)
  set25519(p[3], gf0)
  for (i = 255; i >= 0; --i) {
    b = (s[(i / 8) | 0] >> (i & 7)) & 1
    cswap(p, q, b)
    add(q, p)
    add(p, p)
    cswap(p, q, b)
  }
}
function scalarbase(p, s) {
  var q = [gf(), gf(), gf(), gf()]
  set25519(q[0], X)
  set25519(q[1], Y)
  set25519(q[2], gf1)
  M(q[3], X, Y)
  scalarmult(p, q, s)
}
var L = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10])
function modL(r, x) {
  var carry, i, j, k
  for (i = 63; i >= 32; --i) {
    carry = 0
    for (j = i - 32, k = i - 12; j < k; ++j) {
      x[j] += carry - 16 * x[i] * L[j - (i - 32)]
      carry = (x[j] + 128) >> 8
      x[j] -= carry * 256
    }
    x[j] += carry
    x[i] = 0
  }
  carry = 0
  for (j = 0; j < 32; j++) {
    x[j] += carry - (x[31] >> 4) * L[j]
    carry = x[j] >> 8
    x[j] &= 255
  }
  for (j = 0; j < 32; j++)
    x[j] -= carry * L[j]
  for (i = 0; i < 32; i++) {
    x[i + 1] += x[i] >> 8
    r[i] = x[i] & 255
  }
}
function reduce(r) {
  var x = new Float64Array(64)
  var i
  for (i = 0; i < 64; i++)
    x[i] = r[i]
  for (i = 0; i < 64; i++)
    r[i] = 0
  modL(r, x)
}
// Like crypto_sign, but uses secret key directly in hash.
function crypto_sign_direct(sm, m, n, sk) {
  var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64)
  var x = new Float64Array(64)
  var p = [gf(), gf(), gf(), gf()]
  var i, j
  for (i = 0; i < n; i++)
    sm[64 + i] = m[i]
  for (i = 0; i < 32; i++)
    sm[32 + i] = sk[i]
  crypto_hash(r, sm.subarray(32), n + 32)
  reduce(r)
  scalarbase(p, r)
  pack(sm, p)
  for (i = 0; i < 32; i++)
    sm[i + 32] = sk[32 + i]
  crypto_hash(h, sm, n + 64)
  reduce(h)
  for (i = 0; i < 64; i++)
    x[i] = 0
  for (i = 0; i < 32; i++)
    x[i] = r[i]
  for (i = 0; i < 32; i++) {
    for (j = 0; j < 32; j++) {
      x[i + j] += h[i] * sk[j]
    }
  }
  modL(sm.subarray(32), x)
  return n + 64
}
// Note: sm must be n+128.
function crypto_sign_direct_rnd(sm, m, n, sk, rnd) {
  var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64)
  var x = new Float64Array(64)
  var p = [gf(), gf(), gf(), gf()]
  var i, j
  // Hash separation.
  sm[0] = 0xfe
  for (i = 1; i < 32; i++)
    sm[i] = 0xff
  // Secret key.
  for (i = 0; i < 32; i++)
    sm[32 + i] = sk[i]
  // Message.
  for (i = 0; i < n; i++)
    sm[64 + i] = m[i]
  // Random suffix.
  for (i = 0; i < 64; i++)
    sm[n + 64 + i] = rnd[i]
  crypto_hash(r, sm, n + 128)
  reduce(r)
  scalarbase(p, r)
  pack(sm, p)
  for (i = 0; i < 32; i++)
    sm[i + 32] = sk[32 + i]
  crypto_hash(h, sm, n + 64)
  reduce(h)
  // Wipe out random suffix.
  for (i = 0; i < 64; i++)
    sm[n + 64 + i] = 0
  for (i = 0; i < 64; i++)
    x[i] = 0
  for (i = 0; i < 32; i++)
    x[i] = r[i]
  for (i = 0; i < 32; i++) {
    for (j = 0; j < 32; j++) {
      x[i + j] += h[i] * sk[j]
    }
  }
  modL(sm.subarray(32, n + 64), x)
  return n + 64
}
function curve25519_sign(sm, m, n, sk, opt_rnd) {
  // If opt_rnd is provided, sm must have n + 128,
  // otherwise it must have n + 64 bytes.
  // Convert Curve25519 secret key into Ed25519 secret key (includes pub key).
  var edsk = new Uint8Array(64)
  var p = [gf(), gf(), gf(), gf()]
  for (var i = 0; i < 32; i++)
    edsk[i] = sk[i]
  // Ensure private key is in the correct format.
  edsk[0] &= 248
  edsk[31] &= 127
  edsk[31] |= 64
  scalarbase(p, edsk)
  pack(edsk.subarray(32), p)
  // Remember sign bit.
  var signBit = edsk[63] & 128
  var smlen
  if (opt_rnd) {
    smlen = crypto_sign_direct_rnd(sm, m, n, edsk, opt_rnd)
  }
  else {
    smlen = crypto_sign_direct(sm, m, n, edsk)
  }
  // Copy sign bit from public key into signature.
  sm[63] |= signBit
  return smlen
}
function unpackneg(r, p) {
  var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf()
  set25519(r[2], gf1)
  unpack25519(r[1], p)
  S(num, r[1])
  M(den, num, D)
  Z(num, num, r[2])
  A(den, r[2], den)
  S(den2, den)
  S(den4, den2)
  M(den6, den4, den2)
  M(t, den6, num)
  M(t, t, den)
  pow2523(t, t)
  M(t, t, num)
  M(t, t, den)
  M(t, t, den)
  M(r[0], t, den)
  S(chk, r[0])
  M(chk, chk, den)
  if (neq25519(chk, num))
    M(r[0], r[0], I)
  S(chk, r[0])
  M(chk, chk, den)
  if (neq25519(chk, num))
    return -1
  if (par25519(r[0]) === (p[31] >> 7))
    Z(r[0], gf0, r[0])
  M(r[3], r[0], r[1])
  return 0
}
function crypto_sign_open(m, sm, n, pk) {
  var i, mlen
  var t = new Uint8Array(32), h = new Uint8Array(64)
  var p = [gf(), gf(), gf(), gf()], q = [gf(), gf(), gf(), gf()]
  mlen = -1
  if (n < 64)
    return -1
  if (unpackneg(q, pk))
    return -1
  for (i = 0; i < n; i++)
    m[i] = sm[i]
  for (i = 0; i < 32; i++)
    m[i + 32] = pk[i]
  crypto_hash(h, m, n)
  reduce(h)
  scalarmult(p, q, h)
  scalarbase(q, sm.subarray(32))
  add(p, q)
  pack(t, p)
  n -= 64
  if (crypto_verify_32(sm, 0, t, 0)) {
    for (i = 0; i < n; i++)
      m[i] = 0
    return -1
  }
  for (i = 0; i < n; i++)
    m[i] = sm[i + 64]
  mlen = n
  return mlen
}
// Converts Curve25519 public key back to Ed25519 public key.
// edwardsY = (montgomeryX - 1) / (montgomeryX + 1)
function convertPublicKey(pk) {
  var z = new Uint8Array(32), x = gf(), a = gf(), b = gf()
  unpack25519(x, pk)
  A(a, x, gf1)
  Z(b, x, gf1)
  inv25519(a, a)
  M(a, a, b)
  pack25519(z, a)
  return z
}
function curve25519_sign_open(m, sm, n, pk) {
  // Convert Curve25519 public key into Ed25519 public key.
  var edpk = convertPublicKey(pk)
  // Restore sign bit from signature.
  edpk[31] |= sm[63] & 128
  // Remove sign bit from signature.
  sm[63] &= 127
  // Verify signed message.
  return crypto_sign_open(m, sm, n, edpk)
}
/* High-level API */
function checkArrayTypes() {
  var args = []
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i]
  }
  var t, i
  for (i = 0; i < arguments.length; i++) {
    if ((t = Object.prototype.toString.call(arguments[i])) !== '[object Uint8Array]')
      throw new TypeError('unexpected type ' + t + ', use Uint8Array')
  }
}
axlsign.sharedKey = function (secretKey, publicKey) {
  checkArrayTypes(publicKey, secretKey)
  if (publicKey.length !== 32)
    throw new Error('wrong public key length')
  if (secretKey.length !== 32)
    throw new Error('wrong secret key length')
  var sharedKey = new Uint8Array(32)
  crypto_scalarmult(sharedKey, secretKey, publicKey)
  return sharedKey
}
axlsign.signMessage = function (secretKey, msg, opt_random) {
  checkArrayTypes(msg, secretKey)
  if (secretKey.length !== 32)
    throw new Error('wrong secret key length')
  if (opt_random) {
    checkArrayTypes(opt_random)
    if (opt_random.length !== 64)
      throw new Error('wrong random data length')
    var buf = new Uint8Array(128 + msg.length)
    curve25519_sign(buf, msg, msg.length, secretKey, opt_random)
    return new Uint8Array(buf.subarray(0, 64 + msg.length))
  }
  else {
    var signedMsg = new Uint8Array(64 + msg.length)
    curve25519_sign(signedMsg, msg, msg.length, secretKey)
    return signedMsg
  }
}
axlsign.openMessage = function (publicKey, signedMsg) {
  checkArrayTypes(signedMsg, publicKey)
  if (publicKey.length !== 32)
    throw new Error('wrong public key length')
  var tmp = new Uint8Array(signedMsg.length)
  var mlen = curve25519_sign_open(tmp, signedMsg, signedMsg.length, publicKey)
  if (mlen < 0)
    return null
  var m = new Uint8Array(mlen)
  for (var i = 0; i < m.length; i++)
    m[i] = tmp[i]
  return m
}
axlsign.sign = function (secretKey, msg, opt_random) {
  checkArrayTypes(secretKey, msg)
  if (secretKey.length !== 32)
    throw new Error('wrong secret key length')
  if (opt_random) {
    checkArrayTypes(opt_random)
    if (opt_random.length !== 64)
      throw new Error('wrong random data length')
  }
  var buf = new Uint8Array((opt_random ? 128 : 64) + msg.length)
  curve25519_sign(buf, msg, msg.length, secretKey, opt_random)
  var signature = new Uint8Array(64)
  for (var i = 0; i < signature.length; i++)
    signature[i] = buf[i]
  return signature
}
axlsign.verify = function (publicKey, msg, signature) {
  checkArrayTypes(msg, signature, publicKey)
  if (signature.length !== 64)
    throw new Error('wrong signature length')
  if (publicKey.length !== 32)
    throw new Error('wrong public key length')
  var sm = new Uint8Array(64 + msg.length)
  var m = new Uint8Array(64 + msg.length)
  var i
  for (i = 0; i < 64; i++)
    sm[i] = signature[i]
  for (i = 0; i < msg.length; i++)
    sm[i + 64] = msg[i]
  return (curve25519_sign_open(m, sm, sm.length, publicKey) >= 0)
}
axlsign.generateKeyPair = function (seed) {
  checkArrayTypes(seed)
  if (seed.length !== 32)
    throw new Error('wrong seed length')
  var sk = new Uint8Array(32)
  var pk = new Uint8Array(32)
  for (var i = 0; i < 32; i++)
    sk[i] = seed[i]
  crypto_scalarmult_base(pk, sk)
  // Turn secret key into the correct format.
  sk[0] &= 248
  sk[31] &= 127
  sk[31] |= 64
  // Remove sign bit from public key.
  pk[31] &= 127
  return {
    public: pk,
    private: sk,
  }
}
exports['default'] = axlsign


/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/libs/base58.js":
/*!**********************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/libs/base58.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
var ALPHABET_MAP = ALPHABET.split('').reduce(function (map, c, i) {
    map[c] = i;
    return map;
}, {});
exports.default = {
    encode: function (buffer) {
        if (!buffer.length)
            return '';
        var digits = [0];
        for (var i = 0; i < buffer.length; i++) {
            for (var j = 0; j < digits.length; j++) {
                digits[j] <<= 8;
            }
            digits[0] += buffer[i];
            var carry = 0;
            for (var k = 0; k < digits.length; k++) {
                digits[k] += carry;
                carry = (digits[k] / 58) | 0;
                digits[k] %= 58;
            }
            while (carry) {
                digits.push(carry % 58);
                carry = (carry / 58) | 0;
            }
        }
        for (var i = 0; buffer[i] === 0 && i < buffer.length - 1; i++) {
            digits.push(0);
        }
        return digits.reverse().map(function (digit) {
            return ALPHABET[digit];
        }).join('');
    },
    decode: function (string) {
        if (!string.length)
            return new Uint8Array(0);
        var bytes = [0];
        for (var i = 0; i < string.length; i++) {
            var c = string[i];
            if (!(c in ALPHABET_MAP)) {
                throw "There is no character \"" + c + "\" in the Base58 sequence!";
            }
            for (var j = 0; j < bytes.length; j++) {
                bytes[j] *= 58;
            }
            bytes[0] += ALPHABET_MAP[c];
            var carry = 0;
            for (var j = 0; j < bytes.length; j++) {
                bytes[j] += carry;
                carry = bytes[j] >> 8;
                bytes[j] &= 0xff;
            }
            while (carry) {
                bytes.push(carry & 0xff);
                carry >>= 8;
            }
        }
        for (var i = 0; string[i] === '1' && i < string.length - 1; i++) {
            bytes.push(0);
        }
        return new Uint8Array(bytes.reverse());
    },
};
//# sourceMappingURL=base58.js.map

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/libs/blake2b.js":
/*!***********************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/libs/blake2b.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
exports.__esModule = true;
var ERROR_MSG_INPUT = 'Input must be an string, Buffer or Uint8Array';
// For convenience, let people hash a string, not just a Uint8Array
function normalizeInput(input) {
    var ret;
    if (input instanceof Uint8Array) {
        ret = input;
    }
    else if (input instanceof Buffer) {
        ret = new Uint8Array(input);
    }
    else if (typeof (input) === 'string') {
        ret = new Uint8Array(Buffer.from(input, 'utf8'));
    }
    else {
        throw new Error(ERROR_MSG_INPUT);
    }
    return ret;
}
// Converts a Uint8Array to a hexadecimal string
// For example, toHex([255, 0, 255]) returns "ff00ff"
function toHex(bytes) {
    return Array.prototype.map.call(bytes, function (n) {
        return (n < 16 ? '0' : '') + n.toString(16);
    }).join('');
}
// Converts any value in [0...2^32-1] to an 8-character hex string
function uint32ToHex(val) {
    return (0x100000000 + val).toString(16).substring(1);
}
// For debugging: prints out hash state in the same format as the RFC
// sample computation exactly, so that you can diff
function debugPrint(label, arr, size) {
    var msg = '\n' + label + ' = ';
    for (var i = 0; i < arr.length; i += 2) {
        if (size === 32) {
            msg += uint32ToHex(arr[i]).toUpperCase();
            msg += ' ';
            msg += uint32ToHex(arr[i + 1]).toUpperCase();
        }
        else if (size === 64) {
            msg += uint32ToHex(arr[i + 1]).toUpperCase();
            msg += uint32ToHex(arr[i]).toUpperCase();
        }
        else
            throw new Error('Invalid size ' + size);
        if (i % 6 === 4) {
            msg += '\n' + new Array(label.length + 4).join(' ');
        }
        else if (i < arr.length - 2) {
            msg += ' ';
        }
    }
}
// For performance testing: generates N bytes of input, hashes M times
// Measures and prints MB/second hash performance each time
function testSpeed(hashFn, N, M) {
    var startMs = new Date().getTime();
    var input = new Uint8Array(N);
    for (var i = 0; i < N; i++) {
        input[i] = i % 256;
    }
    var genMs = new Date().getTime();
    startMs = genMs;
    for (i = 0; i < M; i++) {
        var hashHex = hashFn(input);
        var hashMs = new Date().getTime();
        var ms = hashMs - startMs;
        startMs = hashMs;
    }
}
// Blake2B in pure Javascript
// Adapted from the reference implementation in RFC7693
// Ported to Javascript by DC - https://github.com/dcposch
// 64-bit unsigned addition
// Sets v[a,a+1] += v[b,b+1]
// v should be a Uint32Array
function ADD64AA(v, a, b) {
    var o0 = v[a] + v[b];
    var o1 = v[a + 1] + v[b + 1];
    if (o0 >= 0x100000000) {
        o1++;
    }
    v[a] = o0;
    v[a + 1] = o1;
}
// 64-bit unsigned addition
// Sets v[a,a+1] += b
// b0 is the low 32 bits of b, b1 represents the high 32 bits
function ADD64AC(v, a, b0, b1) {
    var o0 = v[a] + b0;
    if (b0 < 0) {
        o0 += 0x100000000;
    }
    var o1 = v[a + 1] + b1;
    if (o0 >= 0x100000000) {
        o1++;
    }
    v[a] = o0;
    v[a + 1] = o1;
}
// Little-endian byte access
function B2B_GET32(arr, i) {
    return (arr[i] ^
        (arr[i + 1] << 8) ^
        (arr[i + 2] << 16) ^
        (arr[i + 3] << 24));
}
// G Mixing function
// The ROTRs are inlined for speed
function B2B_G(a, b, c, d, ix, iy) {
    var x0 = m[ix];
    var x1 = m[ix + 1];
    var y0 = m[iy];
    var y1 = m[iy + 1];
    ADD64AA(v, a, b); // v[a,a+1] += v[b,b+1] ... in JS we must store a uint64 as two uint32s
    ADD64AC(v, a, x0, x1); // v[a, a+1] += x ... x0 is the low 32 bits of x, x1 is the high 32 bits
    // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated to the right by 32 bits
    var xor0 = v[d] ^ v[a];
    var xor1 = v[d + 1] ^ v[a + 1];
    v[d] = xor1;
    v[d + 1] = xor0;
    ADD64AA(v, c, d);
    // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 24 bits
    xor0 = v[b] ^ v[c];
    xor1 = v[b + 1] ^ v[c + 1];
    v[b] = (xor0 >>> 24) ^ (xor1 << 8);
    v[b + 1] = (xor1 >>> 24) ^ (xor0 << 8);
    ADD64AA(v, a, b);
    ADD64AC(v, a, y0, y1);
    // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated right by 16 bits
    xor0 = v[d] ^ v[a];
    xor1 = v[d + 1] ^ v[a + 1];
    v[d] = (xor0 >>> 16) ^ (xor1 << 16);
    v[d + 1] = (xor1 >>> 16) ^ (xor0 << 16);
    ADD64AA(v, c, d);
    // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 63 bits
    xor0 = v[b] ^ v[c];
    xor1 = v[b + 1] ^ v[c + 1];
    v[b] = (xor1 >>> 31) ^ (xor0 << 1);
    v[b + 1] = (xor0 >>> 31) ^ (xor1 << 1);
}
// Initialization Vector
var BLAKE2B_IV32 = new Uint32Array([
    0xF3BCC908, 0x6A09E667, 0x84CAA73B, 0xBB67AE85,
    0xFE94F82B, 0x3C6EF372, 0x5F1D36F1, 0xA54FF53A,
    0xADE682D1, 0x510E527F, 0x2B3E6C1F, 0x9B05688C,
    0xFB41BD6B, 0x1F83D9AB, 0x137E2179, 0x5BE0CD19
]);
var SIGMA8 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
    11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4,
    7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8,
    9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13,
    2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9,
    12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11,
    13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10,
    6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5,
    10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3
];
// These are offsets into a uint64 buffer.
// Multiply them all by 2 to make them offsets into a uint32 buffer,
// because this is Javascript and we don't have uint64s
var SIGMA82 = new Uint8Array(SIGMA8.map(function (x) {
    return x * 2;
}));
// Compression function. 'last' flag indicates last block.
// Note we're representing 16 uint64s as 32 uint32s
var v = new Uint32Array(32);
var m = new Uint32Array(32);
function blake2bCompress(ctx, last) {
    var i = 0;
    // init work variables
    for (i = 0; i < 16; i++) {
        v[i] = ctx.h[i];
        v[i + 16] = BLAKE2B_IV32[i];
    }
    // low 64 bits of offset
    v[24] = v[24] ^ ctx.t;
    v[25] = v[25] ^ (ctx.t / 0x100000000);
    // high 64 bits not supported, offset may not be higher than 2**53-1
    // last block flag set ?
    if (last) {
        v[28] = ~v[28];
        v[29] = ~v[29];
    }
    // get little-endian words
    for (i = 0; i < 32; i++) {
        m[i] = B2B_GET32(ctx.b, 4 * i);
    }
    // twelve rounds of mixing
    // uncomment the DebugPrint calls to log the computation
    // and match the RFC sample documentation
    // util.debugPrint('          m[16]', m, 64)
    for (i = 0; i < 12; i++) {
        // util.debugPrint('   (i=' + (i < 10 ? ' ' : '') + i + ') v[16]', v, 64)
        B2B_G(0, 8, 16, 24, SIGMA82[i * 16 + 0], SIGMA82[i * 16 + 1]);
        B2B_G(2, 10, 18, 26, SIGMA82[i * 16 + 2], SIGMA82[i * 16 + 3]);
        B2B_G(4, 12, 20, 28, SIGMA82[i * 16 + 4], SIGMA82[i * 16 + 5]);
        B2B_G(6, 14, 22, 30, SIGMA82[i * 16 + 6], SIGMA82[i * 16 + 7]);
        B2B_G(0, 10, 20, 30, SIGMA82[i * 16 + 8], SIGMA82[i * 16 + 9]);
        B2B_G(2, 12, 22, 24, SIGMA82[i * 16 + 10], SIGMA82[i * 16 + 11]);
        B2B_G(4, 14, 16, 26, SIGMA82[i * 16 + 12], SIGMA82[i * 16 + 13]);
        B2B_G(6, 8, 18, 28, SIGMA82[i * 16 + 14], SIGMA82[i * 16 + 15]);
    }
    // util.debugPrint('   (i=12) v[16]', v, 64)
    for (i = 0; i < 16; i++) {
        ctx.h[i] = ctx.h[i] ^ v[i] ^ v[i + 16];
    }
    // util.debugPrint('h[8]', ctx.h, 64)
}
// Creates a BLAKE2b hashing context
// Requires an output length between 1 and 64 bytes
// Takes an optional Uint8Array key
function blake2bInit(outlen, key) {
    if (outlen === 0 || outlen > 64) {
        throw new Error('Illegal output length, expected 0 < length <= 64');
    }
    if (key && key.length > 64) {
        throw new Error('Illegal key, expected Uint8Array with 0 < length <= 64');
    }
    // state, 'param block'
    var ctx = {
        b: new Uint8Array(128),
        h: new Uint32Array(16),
        t: 0,
        c: 0,
        outlen: outlen // output length in bytes
    };
    // initialize hash state
    for (var i = 0; i < 16; i++) {
        ctx.h[i] = BLAKE2B_IV32[i];
    }
    var keylen = key ? key.length : 0;
    ctx.h[0] ^= 0x01010000 ^ (keylen << 8) ^ outlen;
    // key the hash, if applicable
    if (key) {
        blake2bUpdate(ctx, key);
        // at the end
        ctx.c = 128;
    }
    return ctx;
}
exports.blake2bInit = blake2bInit;
// Updates a BLAKE2b streaming hash
// Requires hash context and Uint8Array (byte array)
function blake2bUpdate(ctx, input) {
    for (var i = 0; i < input.length; i++) {
        if (ctx.c === 128) { // buffer full ?
            ctx.t += ctx.c; // add counters
            blake2bCompress(ctx, false); // compress (not last)
            ctx.c = 0; // counter to zero
        }
        ctx.b[ctx.c++] = input[i];
    }
}
exports.blake2bUpdate = blake2bUpdate;
// Completes a BLAKE2b streaming hash
// Returns a Uint8Array containing the message digest
function blake2bFinal(ctx) {
    ctx.t += ctx.c; // mark last block offset
    while (ctx.c < 128) { // fill up with zeros
        ctx.b[ctx.c++] = 0;
    }
    blake2bCompress(ctx, true); // final block flag = 1
    // little endian convert and store
    var out = new Uint8Array(ctx.outlen);
    for (var i = 0; i < ctx.outlen; i++) {
        out[i] = ctx.h[i >> 2] >> (8 * (i & 3));
    }
    return out;
}
exports.blake2bFinal = blake2bFinal;
// Computes the BLAKE2B hash of a string or byte array, and returns a Uint8Array
//
// Returns a n-byte Uint8Array
//
// Parameters:
// - input - the input bytes, as a string, Buffer or Uint8Array
// - key - optional key Uint8Array, up to 64 bytes
// - outlen - optional output length in bytes, default 64
function blake2b(input, key, outlen) {
    // preprocess inputs
    outlen = outlen || 64;
    input = normalizeInput(input);
    // do the math
    var ctx = blake2bInit(outlen, key);
    blake2bUpdate(ctx, input);
    return blake2bFinal(ctx);
}
exports.blake2b = blake2b;
// Computes the BLAKE2B hash of a string or byte array
//
// Returns an n-byte hash in hex, all lowercase
//
// Parameters:
// - input - the input bytes, as a string, Buffer, or Uint8Array
// - key - optional key Uint8Array, up to 64 bytes
// - outlen - optional output length in bytes, default 64
function blake2bHex(input, key, outlen) {
    var output = blake2b(input, key, outlen);
    return toHex(output);
}
exports.blake2bHex = blake2bHex;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/@evestx/ts-lib-crypto/libs/sha3.js":
/*!********************************************************!*\
  !*** ./node_modules/@evestx/ts-lib-crypto/libs/sha3.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.5.7
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2016
 * @license MIT
 */
exports.__esModule = true;
var sha3 = {};
var HEX_CHARS = '0123456789abcdef'.split('');
var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
var KECCAK_PADDING = [1, 256, 65536, 16777216];
var PADDING = [6, 1536, 393216, 100663296];
var SHIFT = [0, 8, 16, 24];
var RC = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649,
  0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0,
  2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771,
  2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648,
  2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
var BITS = [224, 256, 384, 512];
var SHAKE_BITS = [128, 256];
var OUTPUT_TYPES = ['hex', 'buffer', 'arrayBuffer', 'array'];
var createOutputMethod = function (bits, padding, outputType) {
  return function (message) {
    return new Keccak(bits, padding, bits).update(message)[outputType]();
  };
};
var createShakeOutputMethod = function (bits, padding, outputType) {
  return function (message, outputBits) {
    return new Keccak(bits, padding, outputBits).update(message)[outputType]();
  };
};
var createMethod = function (bits, padding) {
  var method = createOutputMethod(bits, padding, 'hex');
  method.create = function () {
    return new Keccak(bits, padding, bits);
  };
  method.update = function (message) {
    return method.create().update(message);
  };
  for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
    var type = OUTPUT_TYPES[i];
    method[type] = createOutputMethod(bits, padding, type);
  }
  return method;
};
var createShakeMethod = function (bits, padding) {
  var method = createShakeOutputMethod(bits, padding, 'hex');
  method.create = function (outputBits) {
    return new Keccak(bits, padding, outputBits);
  };
  method.update = function (message, outputBits) {
    return method.create(outputBits).update(message);
  };
  for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
    var type = OUTPUT_TYPES[i];
    method[type] = createShakeOutputMethod(bits, padding, type);
  }
  return method;
};
var algorithms = [
  { name: 'keccak', padding: KECCAK_PADDING, bits: BITS, createMethod: createMethod },
  { name: 'sha3', padding: PADDING, bits: BITS, createMethod: createMethod },
  { name: 'shake', padding: SHAKE_PADDING, bits: SHAKE_BITS, createMethod: createShakeMethod }
];
var methods = {}, methodNames = [];
for (var i = 0; i < algorithms.length; ++i) {
  var algorithm = algorithms[i];
  var bits = algorithm.bits;
  for (var j = 0; j < bits.length; ++j) {
    var methodName = algorithm.name + '_' + bits[j];
    methodNames.push(methodName);
    methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);
  }
}
function Keccak(bits, padding, outputBits) {
  this.blocks = [];
  this.s = [];
  this.padding = padding;
  this.outputBits = outputBits;
  this.reset = true;
  this.block = 0;
  this.start = 0;
  this.blockCount = (1600 - (bits << 1)) >> 5;
  this.byteCount = this.blockCount << 2;
  this.outputBlocks = outputBits >> 5;
  this.extraBytes = (outputBits & 31) >> 3;
  for (var i = 0; i < 50; ++i) {
    this.s[i] = 0;
  }
}
Keccak.prototype.update = function (message) {
  var notString = typeof message !== 'string';
  if (notString && message.constructor === ArrayBuffer) {
    message = new Uint8Array(message);
  }
  var length = message.length, blocks = this.blocks, byteCount = this.byteCount;
  var blockCount = this.blockCount, index = 0, s = this.s, i, code;
  while (index < length) {
    if (this.reset) {
      this.reset = false;
      blocks[0] = this.block;
      for (i = 1; i < blockCount + 1; ++i) {
        blocks[i] = 0;
      }
    }
    if (notString) {
      for (i = this.start; index < length && i < byteCount; ++index) {
        blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
      }
    }
    else {
      for (i = this.start; index < length && i < byteCount; ++index) {
        code = message.charCodeAt(index);
        if (code < 0x80) {
          blocks[i >> 2] |= code << SHIFT[i++ & 3];
        }
        else if (code < 0x800) {
          blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
        }
        else if (code < 0xd800 || code >= 0xe000) {
          blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
        }
        else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
          blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
          blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
        }
      }
    }
    this.lastByteIndex = i;
    if (i >= byteCount) {
      this.start = i - byteCount;
      this.block = blocks[blockCount];
      for (i = 0; i < blockCount; ++i) {
        s[i] ^= blocks[i];
      }
      f(s);
      this.reset = true;
    }
    else {
      this.start = i;
    }
  }
  return this;
};
Keccak.prototype.finalize = function () {
  var blocks = this.blocks;
  var i = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
  blocks[i >> 2] |= this.padding[i & 3];
  if (this.lastByteIndex === this.byteCount) {
    blocks[0] = blocks[blockCount];
    for (i = 1; i < blockCount + 1; ++i) {
      blocks[i] = 0;
    }
  }
  blocks[blockCount - 1] |= 0x80000000;
  for (i = 0; i < blockCount; ++i) {
    s[i] ^= blocks[i];
  }
  f(s);
};
Keccak.prototype.toString = Keccak.prototype.hex = function () {
  this.finalize();
  var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks;
  var extraBytes = this.extraBytes, i = 0, j = 0;
  var hex = '', block;
  while (j < outputBlocks) {
    for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
      block = s[i];
      hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F] +
        HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F] +
        HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F] +
        HEX_CHARS[(block >> 28) & 0x0F] + HEX_CHARS[(block >> 24) & 0x0F];
    }
    if (j % blockCount === 0) {
      f(s);
      i = 0;
    }
  }
  if (extraBytes) {
    block = s[i];
    if (extraBytes > 0) {
      hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F];
    }
    if (extraBytes > 1) {
      hex += HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F];
    }
    if (extraBytes > 2) {
      hex += HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F];
    }
  }
  return hex;
};
Keccak.prototype.arrayBuffer = function () {
  this.finalize();
  var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks;
  var extraBytes = this.extraBytes, i = 0, j = 0;
  var bytes = this.outputBits >> 3;
  var buffer;
  if (extraBytes) {
    buffer = new ArrayBuffer((outputBlocks + 1) << 2);
  }
  else {
    buffer = new ArrayBuffer(bytes);
  }
  var array = new Uint32Array(buffer);
  while (j < outputBlocks) {
    for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
      array[j] = s[i];
    }
    if (j % blockCount === 0) {
      f(s);
    }
  }
  if (extraBytes) {
    array[i] = s[i];
    buffer = buffer.slice(0, bytes);
  }
  return buffer;
};
Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;
Keccak.prototype.digest = Keccak.prototype.array = function () {
  this.finalize();
  var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks;
  var extraBytes = this.extraBytes, i = 0, j = 0;
  var array = [];
  var offset, block;
  while (j < outputBlocks) {
    for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
      offset = j << 2;
      block = s[i];
      array[offset] = block & 0xFF;
      array[offset + 1] = (block >> 8) & 0xFF;
      array[offset + 2] = (block >> 16) & 0xFF;
      array[offset + 3] = (block >> 24) & 0xFF;
    }
    if (j % blockCount === 0) {
      f(s);
    }
  }
  if (extraBytes) {
    offset = j << 2;
    block = s[i];
    if (extraBytes > 0) {
      array[offset] = block & 0xFF;
    }
    if (extraBytes > 1) {
      array[offset + 1] = (block >> 8) & 0xFF;
    }
    if (extraBytes > 2) {
      array[offset + 2] = (block >> 16) & 0xFF;
    }
  }
  return array;
};
var f = function (s) {
  var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
  for (n = 0; n < 48; n += 2) {
    c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
    c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
    c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
    c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
    c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
    c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
    c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
    c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
    c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
    c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
    h = c8 ^ ((c2 << 1) | (c3 >>> 31));
    l = c9 ^ ((c3 << 1) | (c2 >>> 31));
    s[0] ^= h;
    s[1] ^= l;
    s[10] ^= h;
    s[11] ^= l;
    s[20] ^= h;
    s[21] ^= l;
    s[30] ^= h;
    s[31] ^= l;
    s[40] ^= h;
    s[41] ^= l;
    h = c0 ^ ((c4 << 1) | (c5 >>> 31));
    l = c1 ^ ((c5 << 1) | (c4 >>> 31));
    s[2] ^= h;
    s[3] ^= l;
    s[12] ^= h;
    s[13] ^= l;
    s[22] ^= h;
    s[23] ^= l;
    s[32] ^= h;
    s[33] ^= l;
    s[42] ^= h;
    s[43] ^= l;
    h = c2 ^ ((c6 << 1) | (c7 >>> 31));
    l = c3 ^ ((c7 << 1) | (c6 >>> 31));
    s[4] ^= h;
    s[5] ^= l;
    s[14] ^= h;
    s[15] ^= l;
    s[24] ^= h;
    s[25] ^= l;
    s[34] ^= h;
    s[35] ^= l;
    s[44] ^= h;
    s[45] ^= l;
    h = c4 ^ ((c8 << 1) | (c9 >>> 31));
    l = c5 ^ ((c9 << 1) | (c8 >>> 31));
    s[6] ^= h;
    s[7] ^= l;
    s[16] ^= h;
    s[17] ^= l;
    s[26] ^= h;
    s[27] ^= l;
    s[36] ^= h;
    s[37] ^= l;
    s[46] ^= h;
    s[47] ^= l;
    h = c6 ^ ((c0 << 1) | (c1 >>> 31));
    l = c7 ^ ((c1 << 1) | (c0 >>> 31));
    s[8] ^= h;
    s[9] ^= l;
    s[18] ^= h;
    s[19] ^= l;
    s[28] ^= h;
    s[29] ^= l;
    s[38] ^= h;
    s[39] ^= l;
    s[48] ^= h;
    s[49] ^= l;
    b0 = s[0];
    b1 = s[1];
    b32 = (s[11] << 4) | (s[10] >>> 28);
    b33 = (s[10] << 4) | (s[11] >>> 28);
    b14 = (s[20] << 3) | (s[21] >>> 29);
    b15 = (s[21] << 3) | (s[20] >>> 29);
    b46 = (s[31] << 9) | (s[30] >>> 23);
    b47 = (s[30] << 9) | (s[31] >>> 23);
    b28 = (s[40] << 18) | (s[41] >>> 14);
    b29 = (s[41] << 18) | (s[40] >>> 14);
    b20 = (s[2] << 1) | (s[3] >>> 31);
    b21 = (s[3] << 1) | (s[2] >>> 31);
    b2 = (s[13] << 12) | (s[12] >>> 20);
    b3 = (s[12] << 12) | (s[13] >>> 20);
    b34 = (s[22] << 10) | (s[23] >>> 22);
    b35 = (s[23] << 10) | (s[22] >>> 22);
    b16 = (s[33] << 13) | (s[32] >>> 19);
    b17 = (s[32] << 13) | (s[33] >>> 19);
    b48 = (s[42] << 2) | (s[43] >>> 30);
    b49 = (s[43] << 2) | (s[42] >>> 30);
    b40 = (s[5] << 30) | (s[4] >>> 2);
    b41 = (s[4] << 30) | (s[5] >>> 2);
    b22 = (s[14] << 6) | (s[15] >>> 26);
    b23 = (s[15] << 6) | (s[14] >>> 26);
    b4 = (s[25] << 11) | (s[24] >>> 21);
    b5 = (s[24] << 11) | (s[25] >>> 21);
    b36 = (s[34] << 15) | (s[35] >>> 17);
    b37 = (s[35] << 15) | (s[34] >>> 17);
    b18 = (s[45] << 29) | (s[44] >>> 3);
    b19 = (s[44] << 29) | (s[45] >>> 3);
    b10 = (s[6] << 28) | (s[7] >>> 4);
    b11 = (s[7] << 28) | (s[6] >>> 4);
    b42 = (s[17] << 23) | (s[16] >>> 9);
    b43 = (s[16] << 23) | (s[17] >>> 9);
    b24 = (s[26] << 25) | (s[27] >>> 7);
    b25 = (s[27] << 25) | (s[26] >>> 7);
    b6 = (s[36] << 21) | (s[37] >>> 11);
    b7 = (s[37] << 21) | (s[36] >>> 11);
    b38 = (s[47] << 24) | (s[46] >>> 8);
    b39 = (s[46] << 24) | (s[47] >>> 8);
    b30 = (s[8] << 27) | (s[9] >>> 5);
    b31 = (s[9] << 27) | (s[8] >>> 5);
    b12 = (s[18] << 20) | (s[19] >>> 12);
    b13 = (s[19] << 20) | (s[18] >>> 12);
    b44 = (s[29] << 7) | (s[28] >>> 25);
    b45 = (s[28] << 7) | (s[29] >>> 25);
    b26 = (s[38] << 8) | (s[39] >>> 24);
    b27 = (s[39] << 8) | (s[38] >>> 24);
    b8 = (s[48] << 14) | (s[49] >>> 18);
    b9 = (s[49] << 14) | (s[48] >>> 18);
    s[0] = b0 ^ (~b2 & b4);
    s[1] = b1 ^ (~b3 & b5);
    s[10] = b10 ^ (~b12 & b14);
    s[11] = b11 ^ (~b13 & b15);
    s[20] = b20 ^ (~b22 & b24);
    s[21] = b21 ^ (~b23 & b25);
    s[30] = b30 ^ (~b32 & b34);
    s[31] = b31 ^ (~b33 & b35);
    s[40] = b40 ^ (~b42 & b44);
    s[41] = b41 ^ (~b43 & b45);
    s[2] = b2 ^ (~b4 & b6);
    s[3] = b3 ^ (~b5 & b7);
    s[12] = b12 ^ (~b14 & b16);
    s[13] = b13 ^ (~b15 & b17);
    s[22] = b22 ^ (~b24 & b26);
    s[23] = b23 ^ (~b25 & b27);
    s[32] = b32 ^ (~b34 & b36);
    s[33] = b33 ^ (~b35 & b37);
    s[42] = b42 ^ (~b44 & b46);
    s[43] = b43 ^ (~b45 & b47);
    s[4] = b4 ^ (~b6 & b8);
    s[5] = b5 ^ (~b7 & b9);
    s[14] = b14 ^ (~b16 & b18);
    s[15] = b15 ^ (~b17 & b19);
    s[24] = b24 ^ (~b26 & b28);
    s[25] = b25 ^ (~b27 & b29);
    s[34] = b34 ^ (~b36 & b38);
    s[35] = b35 ^ (~b37 & b39);
    s[44] = b44 ^ (~b46 & b48);
    s[45] = b45 ^ (~b47 & b49);
    s[6] = b6 ^ (~b8 & b0);
    s[7] = b7 ^ (~b9 & b1);
    s[16] = b16 ^ (~b18 & b10);
    s[17] = b17 ^ (~b19 & b11);
    s[26] = b26 ^ (~b28 & b20);
    s[27] = b27 ^ (~b29 & b21);
    s[36] = b36 ^ (~b38 & b30);
    s[37] = b37 ^ (~b39 & b31);
    s[46] = b46 ^ (~b48 & b40);
    s[47] = b47 ^ (~b49 & b41);
    s[8] = b8 ^ (~b0 & b2);
    s[9] = b9 ^ (~b1 & b3);
    s[18] = b18 ^ (~b10 & b12);
    s[19] = b19 ^ (~b11 & b13);
    s[28] = b28 ^ (~b20 & b22);
    s[29] = b29 ^ (~b21 & b23);
    s[38] = b38 ^ (~b30 & b32);
    s[39] = b39 ^ (~b31 & b33);
    s[48] = b48 ^ (~b40 & b42);
    s[49] = b49 ^ (~b41 & b43);
    s[0] ^= RC[n];
    s[1] ^= RC[n + 1];
  }
};
exports.keccak256 = methods.keccak_256;


/***/ }),

/***/ "./node_modules/@evestx/ts-types/dist/src/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@evestx/ts-types/dist/src/index.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATA_FIELD_TYPE = exports.TRANSACTION_TYPE = exports.BINARY_DATA_TYPE = exports.STRING_DATA_TYPE = exports.BOOLEAN_DATA_TYPE = exports.INTEGER_DATA_TYPE = exports.ETHEREUM = exports.UPDATE_ASSET_INFO_TYPE = exports.INVOKE_SCRIPT_TYPE = exports.SET_ASSET_SCRIPT_TYPE = exports.SPONSORSHIP_TYPE = exports.SET_SCRIPT_TYPE = exports.DATA_TYPE = exports.MASS_TRANSFER_TYPE = exports.ALIAS_TYPE = exports.CANCEL_LEASE_TYPE = exports.LEASE_TYPE = exports.EXCHANGE_TYPE = exports.BURN_TYPE = exports.REISSUE_TYPE = exports.TRANSFER_TYPE = exports.ISSUE_TYPE = exports.PAYMENT_TYPE = exports.GENESIS_TYPE = void 0;
__exportStar(__webpack_require__(/*! ../transactions */ "./node_modules/@evestx/ts-types/dist/transactions/index.js"), exports);
__exportStar(__webpack_require__(/*! ./parts */ "./node_modules/@evestx/ts-types/dist/src/parts.js"), exports);
exports.GENESIS_TYPE = 1;
exports.PAYMENT_TYPE = 2;
exports.ISSUE_TYPE = 3;
exports.TRANSFER_TYPE = 4;
exports.REISSUE_TYPE = 5;
exports.BURN_TYPE = 6;
exports.EXCHANGE_TYPE = 7;
exports.LEASE_TYPE = 8;
exports.CANCEL_LEASE_TYPE = 9;
exports.ALIAS_TYPE = 10;
exports.MASS_TRANSFER_TYPE = 11;
exports.DATA_TYPE = 12;
exports.SET_SCRIPT_TYPE = 13;
exports.SPONSORSHIP_TYPE = 14;
exports.SET_ASSET_SCRIPT_TYPE = 15;
exports.INVOKE_SCRIPT_TYPE = 16;
exports.UPDATE_ASSET_INFO_TYPE = 17;
exports.ETHEREUM = 18;
exports.INTEGER_DATA_TYPE = 'integer';
exports.BOOLEAN_DATA_TYPE = 'boolean';
exports.STRING_DATA_TYPE = 'string';
exports.BINARY_DATA_TYPE = 'binary';
exports.TRANSACTION_TYPE = {
    GENESIS: exports.GENESIS_TYPE,
    PAYMENT: exports.PAYMENT_TYPE,
    ISSUE: exports.ISSUE_TYPE,
    TRANSFER: exports.TRANSFER_TYPE,
    REISSUE: exports.REISSUE_TYPE,
    BURN: exports.BURN_TYPE,
    EXCHANGE: exports.EXCHANGE_TYPE,
    LEASE: exports.LEASE_TYPE,
    CANCEL_LEASE: exports.CANCEL_LEASE_TYPE,
    ALIAS: exports.ALIAS_TYPE,
    MASS_TRANSFER: exports.MASS_TRANSFER_TYPE,
    DATA: exports.DATA_TYPE,
    SET_SCRIPT: exports.SET_SCRIPT_TYPE,
    SPONSORSHIP: exports.SPONSORSHIP_TYPE,
    SET_ASSET_SCRIPT: exports.SET_ASSET_SCRIPT_TYPE,
    INVOKE_SCRIPT: exports.INVOKE_SCRIPT_TYPE,
    UPDATE_ASSET_INFO: exports.UPDATE_ASSET_INFO_TYPE,
    ETHEREUM: exports.ETHEREUM,
};
exports.DATA_FIELD_TYPE = {
    INTEGER: exports.INTEGER_DATA_TYPE,
    BOOLEAN: exports.BOOLEAN_DATA_TYPE,
    STRING: exports.STRING_DATA_TYPE,
    BINARY: exports.BINARY_DATA_TYPE,
};


/***/ }),

/***/ "./node_modules/@evestx/ts-types/dist/src/parts.js":
/*!********************************************************!*\
  !*** ./node_modules/@evestx/ts-types/dist/src/parts.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./node_modules/@evestx/ts-types/dist/transactions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@evestx/ts-types/dist/transactions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = __webpack_require__(/*! ../src */ "./node_modules/@evestx/ts-types/dist/src/index.js");


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/js-sha3/src/sha3.js":
/*!******************************************!*\
  !*** ./node_modules/js-sha3/src/sha3.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var INPUT_ERROR = 'input is invalid type';
  var FINALIZE_ERROR = 'finalize already called';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA3_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA3_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD =  true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js");
  var ARRAY_BUFFER = !root.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
  var CSHAKE_PADDING = [4, 1024, 262144, 67108864];
  var KECCAK_PADDING = [1, 256, 65536, 16777216];
  var PADDING = [6, 1536, 393216, 100663296];
  var SHIFT = [0, 8, 16, 24];
  var RC = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649,
    0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0,
    2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771,
    2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648,
    2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
  var BITS = [224, 256, 384, 512];
  var SHAKE_BITS = [128, 256];
  var OUTPUT_TYPES = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'];
  var CSHAKE_BYTEPAD = {
    '128': 168,
    '256': 136
  };

  if (root.JS_SHA3_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (bits, padding, outputType) {
    return function (message) {
      return new Keccak(bits, padding, bits).update(message)[outputType]();
    };
  };

  var createShakeOutputMethod = function (bits, padding, outputType) {
    return function (message, outputBits) {
      return new Keccak(bits, padding, outputBits).update(message)[outputType]();
    };
  };

  var createCshakeOutputMethod = function (bits, padding, outputType) {
    return function (message, outputBits, n, s) {
      return methods['cshake' + bits].update(message, outputBits, n, s)[outputType]();
    };
  };

  var createKmacOutputMethod = function (bits, padding, outputType) {
    return function (key, message, outputBits, s) {
      return methods['kmac' + bits].update(key, message, outputBits, s)[outputType]();
    };
  };

  var createOutputMethods = function (method, createMethod, bits, padding) {
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createMethod(bits, padding, type);
    }
    return method;
  };

  var createMethod = function (bits, padding) {
    var method = createOutputMethod(bits, padding, 'hex');
    method.create = function () {
      return new Keccak(bits, padding, bits);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    return createOutputMethods(method, createOutputMethod, bits, padding);
  };

  var createShakeMethod = function (bits, padding) {
    var method = createShakeOutputMethod(bits, padding, 'hex');
    method.create = function (outputBits) {
      return new Keccak(bits, padding, outputBits);
    };
    method.update = function (message, outputBits) {
      return method.create(outputBits).update(message);
    };
    return createOutputMethods(method, createShakeOutputMethod, bits, padding);
  };

  var createCshakeMethod = function (bits, padding) {
    var w = CSHAKE_BYTEPAD[bits];
    var method = createCshakeOutputMethod(bits, padding, 'hex');
    method.create = function (outputBits, n, s) {
      if (!n && !s) {
        return methods['shake' + bits].create(outputBits);
      } else {
        return new Keccak(bits, padding, outputBits).bytepad([n, s], w);
      }
    };
    method.update = function (message, outputBits, n, s) {
      return method.create(outputBits, n, s).update(message);
    };
    return createOutputMethods(method, createCshakeOutputMethod, bits, padding);
  };

  var createKmacMethod = function (bits, padding) {
    var w = CSHAKE_BYTEPAD[bits];
    var method = createKmacOutputMethod(bits, padding, 'hex');
    method.create = function (key, outputBits, s) {
      return new Kmac(bits, padding, outputBits).bytepad(['KMAC', s], w).bytepad([key], w);
    };
    method.update = function (key, message, outputBits, s) {
      return method.create(key, outputBits, s).update(message);
    };
    return createOutputMethods(method, createKmacOutputMethod, bits, padding);
  };

  var algorithms = [
    { name: 'keccak', padding: KECCAK_PADDING, bits: BITS, createMethod: createMethod },
    { name: 'sha3', padding: PADDING, bits: BITS, createMethod: createMethod },
    { name: 'shake', padding: SHAKE_PADDING, bits: SHAKE_BITS, createMethod: createShakeMethod },
    { name: 'cshake', padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createCshakeMethod },
    { name: 'kmac', padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createKmacMethod }
  ];

  var methods = {}, methodNames = [];

  for (var i = 0; i < algorithms.length; ++i) {
    var algorithm = algorithms[i];
    var bits = algorithm.bits;
    for (var j = 0; j < bits.length; ++j) {
      var methodName = algorithm.name + '_' + bits[j];
      methodNames.push(methodName);
      methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);
      if (algorithm.name !== 'sha3') {
        var newMethodName = algorithm.name + bits[j];
        methodNames.push(newMethodName);
        methods[newMethodName] = methods[methodName];
      }
    }
  }

  function Keccak(bits, padding, outputBits) {
    this.blocks = [];
    this.s = [];
    this.padding = padding;
    this.outputBits = outputBits;
    this.reset = true;
    this.finalized = false;
    this.block = 0;
    this.start = 0;
    this.blockCount = (1600 - (bits << 1)) >> 5;
    this.byteCount = this.blockCount << 2;
    this.outputBlocks = outputBits >> 5;
    this.extraBytes = (outputBits & 31) >> 3;

    for (var i = 0; i < 50; ++i) {
      this.s[i] = 0;
    }
  }

  Keccak.prototype.update = function (message) {
    if (this.finalized) {
      throw new Error(FINALIZE_ERROR);
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(INPUT_ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(INPUT_ERROR);
          }
        }
      } else {
        throw new Error(INPUT_ERROR);
      }
      notString = true;
    }
    var blocks = this.blocks, byteCount = this.byteCount, length = message.length,
      blockCount = this.blockCount, index = 0, s = this.s, i, code;

    while (index < length) {
      if (this.reset) {
        this.reset = false;
        blocks[0] = this.block;
        for (i = 1; i < blockCount + 1; ++i) {
          blocks[i] = 0;
        }
      }
      if (notString) {
        for (i = this.start; index < length && i < byteCount; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < byteCount; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }
      this.lastByteIndex = i;
      if (i >= byteCount) {
        this.start = i - byteCount;
        this.block = blocks[blockCount];
        for (i = 0; i < blockCount; ++i) {
          s[i] ^= blocks[i];
        }
        f(s);
        this.reset = true;
      } else {
        this.start = i;
      }
    }
    return this;
  };

  Keccak.prototype.encode = function (x, right) {
    var o = x & 255, n = 1;
    var bytes = [o];
    x = x >> 8;
    o = x & 255;
    while (o > 0) {
      bytes.unshift(o);
      x = x >> 8;
      o = x & 255;
      ++n;
    }
    if (right) {
      bytes.push(n);
    } else {
      bytes.unshift(n);
    }
    this.update(bytes);
    return bytes.length;
  };

  Keccak.prototype.encodeString = function (str) {
    var notString, type = typeof str;
    if (type !== 'string') {
      if (type === 'object') {
        if (str === null) {
          throw new Error(INPUT_ERROR);
        } else if (ARRAY_BUFFER && str.constructor === ArrayBuffer) {
          str = new Uint8Array(str);
        } else if (!Array.isArray(str)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(str)) {
            throw new Error(INPUT_ERROR);
          }
        }
      } else {
        throw new Error(INPUT_ERROR);
      }
      notString = true;
    }
    var bytes = 0, length = str.length;
    if (notString) {
      bytes = length;
    } else {
      for (var i = 0; i < str.length; ++i) {
        var code = str.charCodeAt(i);
        if (code < 0x80) {
          bytes += 1;
        } else if (code < 0x800) {
          bytes += 2;
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes += 3;
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (str.charCodeAt(++i) & 0x3ff));
          bytes += 4;
        }
      }
    }
    bytes += this.encode(bytes * 8);
    this.update(str);
    return bytes;
  };

  Keccak.prototype.bytepad = function (strs, w) {
    var bytes = this.encode(w);
    for (var i = 0; i < strs.length; ++i) {
      bytes += this.encodeString(strs[i]);
    }
    var paddingBytes = w - bytes % w;
    var zeros = [];
    zeros.length = paddingBytes;
    this.update(zeros);
    return this;
  };

  Keccak.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
    blocks[i >> 2] |= this.padding[i & 3];
    if (this.lastByteIndex === this.byteCount) {
      blocks[0] = blocks[blockCount];
      for (i = 1; i < blockCount + 1; ++i) {
        blocks[i] = 0;
      }
    }
    blocks[blockCount - 1] |= 0x80000000;
    for (i = 0; i < blockCount; ++i) {
      s[i] ^= blocks[i];
    }
    f(s);
  };

  Keccak.prototype.toString = Keccak.prototype.hex = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
      extraBytes = this.extraBytes, i = 0, j = 0;
    var hex = '', block;
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        block = s[i];
        hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F] +
          HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F] +
          HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F] +
          HEX_CHARS[(block >> 28) & 0x0F] + HEX_CHARS[(block >> 24) & 0x0F];
      }
      if (j % blockCount === 0) {
        f(s);
        i = 0;
      }
    }
    if (extraBytes) {
      block = s[i];
      hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F];
      if (extraBytes > 1) {
        hex += HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F];
      }
      if (extraBytes > 2) {
        hex += HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F];
      }
    }
    return hex;
  };

  Keccak.prototype.arrayBuffer = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
      extraBytes = this.extraBytes, i = 0, j = 0;
    var bytes = this.outputBits >> 3;
    var buffer;
    if (extraBytes) {
      buffer = new ArrayBuffer((outputBlocks + 1) << 2);
    } else {
      buffer = new ArrayBuffer(bytes);
    }
    var array = new Uint32Array(buffer);
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        array[j] = s[i];
      }
      if (j % blockCount === 0) {
        f(s);
      }
    }
    if (extraBytes) {
      array[i] = s[i];
      buffer = buffer.slice(0, bytes);
    }
    return buffer;
  };

  Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;

  Keccak.prototype.digest = Keccak.prototype.array = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
      extraBytes = this.extraBytes, i = 0, j = 0;
    var array = [], offset, block;
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        offset = j << 2;
        block = s[i];
        array[offset] = block & 0xFF;
        array[offset + 1] = (block >> 8) & 0xFF;
        array[offset + 2] = (block >> 16) & 0xFF;
        array[offset + 3] = (block >> 24) & 0xFF;
      }
      if (j % blockCount === 0) {
        f(s);
      }
    }
    if (extraBytes) {
      offset = j << 2;
      block = s[i];
      array[offset] = block & 0xFF;
      if (extraBytes > 1) {
        array[offset + 1] = (block >> 8) & 0xFF;
      }
      if (extraBytes > 2) {
        array[offset + 2] = (block >> 16) & 0xFF;
      }
    }
    return array;
  };

  function Kmac(bits, padding, outputBits) {
    Keccak.call(this, bits, padding, outputBits);
  }

  Kmac.prototype = new Keccak();

  Kmac.prototype.finalize = function () {
    this.encode(this.outputBits, true);
    return Keccak.prototype.finalize.call(this);
  };

  var f = function (s) {
    var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9,
      b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17,
      b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33,
      b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
    for (n = 0; n < 48; n += 2) {
      c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
      c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
      c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
      c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
      c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
      c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
      c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
      c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
      c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
      c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];

      h = c8 ^ ((c2 << 1) | (c3 >>> 31));
      l = c9 ^ ((c3 << 1) | (c2 >>> 31));
      s[0] ^= h;
      s[1] ^= l;
      s[10] ^= h;
      s[11] ^= l;
      s[20] ^= h;
      s[21] ^= l;
      s[30] ^= h;
      s[31] ^= l;
      s[40] ^= h;
      s[41] ^= l;
      h = c0 ^ ((c4 << 1) | (c5 >>> 31));
      l = c1 ^ ((c5 << 1) | (c4 >>> 31));
      s[2] ^= h;
      s[3] ^= l;
      s[12] ^= h;
      s[13] ^= l;
      s[22] ^= h;
      s[23] ^= l;
      s[32] ^= h;
      s[33] ^= l;
      s[42] ^= h;
      s[43] ^= l;
      h = c2 ^ ((c6 << 1) | (c7 >>> 31));
      l = c3 ^ ((c7 << 1) | (c6 >>> 31));
      s[4] ^= h;
      s[5] ^= l;
      s[14] ^= h;
      s[15] ^= l;
      s[24] ^= h;
      s[25] ^= l;
      s[34] ^= h;
      s[35] ^= l;
      s[44] ^= h;
      s[45] ^= l;
      h = c4 ^ ((c8 << 1) | (c9 >>> 31));
      l = c5 ^ ((c9 << 1) | (c8 >>> 31));
      s[6] ^= h;
      s[7] ^= l;
      s[16] ^= h;
      s[17] ^= l;
      s[26] ^= h;
      s[27] ^= l;
      s[36] ^= h;
      s[37] ^= l;
      s[46] ^= h;
      s[47] ^= l;
      h = c6 ^ ((c0 << 1) | (c1 >>> 31));
      l = c7 ^ ((c1 << 1) | (c0 >>> 31));
      s[8] ^= h;
      s[9] ^= l;
      s[18] ^= h;
      s[19] ^= l;
      s[28] ^= h;
      s[29] ^= l;
      s[38] ^= h;
      s[39] ^= l;
      s[48] ^= h;
      s[49] ^= l;

      b0 = s[0];
      b1 = s[1];
      b32 = (s[11] << 4) | (s[10] >>> 28);
      b33 = (s[10] << 4) | (s[11] >>> 28);
      b14 = (s[20] << 3) | (s[21] >>> 29);
      b15 = (s[21] << 3) | (s[20] >>> 29);
      b46 = (s[31] << 9) | (s[30] >>> 23);
      b47 = (s[30] << 9) | (s[31] >>> 23);
      b28 = (s[40] << 18) | (s[41] >>> 14);
      b29 = (s[41] << 18) | (s[40] >>> 14);
      b20 = (s[2] << 1) | (s[3] >>> 31);
      b21 = (s[3] << 1) | (s[2] >>> 31);
      b2 = (s[13] << 12) | (s[12] >>> 20);
      b3 = (s[12] << 12) | (s[13] >>> 20);
      b34 = (s[22] << 10) | (s[23] >>> 22);
      b35 = (s[23] << 10) | (s[22] >>> 22);
      b16 = (s[33] << 13) | (s[32] >>> 19);
      b17 = (s[32] << 13) | (s[33] >>> 19);
      b48 = (s[42] << 2) | (s[43] >>> 30);
      b49 = (s[43] << 2) | (s[42] >>> 30);
      b40 = (s[5] << 30) | (s[4] >>> 2);
      b41 = (s[4] << 30) | (s[5] >>> 2);
      b22 = (s[14] << 6) | (s[15] >>> 26);
      b23 = (s[15] << 6) | (s[14] >>> 26);
      b4 = (s[25] << 11) | (s[24] >>> 21);
      b5 = (s[24] << 11) | (s[25] >>> 21);
      b36 = (s[34] << 15) | (s[35] >>> 17);
      b37 = (s[35] << 15) | (s[34] >>> 17);
      b18 = (s[45] << 29) | (s[44] >>> 3);
      b19 = (s[44] << 29) | (s[45] >>> 3);
      b10 = (s[6] << 28) | (s[7] >>> 4);
      b11 = (s[7] << 28) | (s[6] >>> 4);
      b42 = (s[17] << 23) | (s[16] >>> 9);
      b43 = (s[16] << 23) | (s[17] >>> 9);
      b24 = (s[26] << 25) | (s[27] >>> 7);
      b25 = (s[27] << 25) | (s[26] >>> 7);
      b6 = (s[36] << 21) | (s[37] >>> 11);
      b7 = (s[37] << 21) | (s[36] >>> 11);
      b38 = (s[47] << 24) | (s[46] >>> 8);
      b39 = (s[46] << 24) | (s[47] >>> 8);
      b30 = (s[8] << 27) | (s[9] >>> 5);
      b31 = (s[9] << 27) | (s[8] >>> 5);
      b12 = (s[18] << 20) | (s[19] >>> 12);
      b13 = (s[19] << 20) | (s[18] >>> 12);
      b44 = (s[29] << 7) | (s[28] >>> 25);
      b45 = (s[28] << 7) | (s[29] >>> 25);
      b26 = (s[38] << 8) | (s[39] >>> 24);
      b27 = (s[39] << 8) | (s[38] >>> 24);
      b8 = (s[48] << 14) | (s[49] >>> 18);
      b9 = (s[49] << 14) | (s[48] >>> 18);

      s[0] = b0 ^ (~b2 & b4);
      s[1] = b1 ^ (~b3 & b5);
      s[10] = b10 ^ (~b12 & b14);
      s[11] = b11 ^ (~b13 & b15);
      s[20] = b20 ^ (~b22 & b24);
      s[21] = b21 ^ (~b23 & b25);
      s[30] = b30 ^ (~b32 & b34);
      s[31] = b31 ^ (~b33 & b35);
      s[40] = b40 ^ (~b42 & b44);
      s[41] = b41 ^ (~b43 & b45);
      s[2] = b2 ^ (~b4 & b6);
      s[3] = b3 ^ (~b5 & b7);
      s[12] = b12 ^ (~b14 & b16);
      s[13] = b13 ^ (~b15 & b17);
      s[22] = b22 ^ (~b24 & b26);
      s[23] = b23 ^ (~b25 & b27);
      s[32] = b32 ^ (~b34 & b36);
      s[33] = b33 ^ (~b35 & b37);
      s[42] = b42 ^ (~b44 & b46);
      s[43] = b43 ^ (~b45 & b47);
      s[4] = b4 ^ (~b6 & b8);
      s[5] = b5 ^ (~b7 & b9);
      s[14] = b14 ^ (~b16 & b18);
      s[15] = b15 ^ (~b17 & b19);
      s[24] = b24 ^ (~b26 & b28);
      s[25] = b25 ^ (~b27 & b29);
      s[34] = b34 ^ (~b36 & b38);
      s[35] = b35 ^ (~b37 & b39);
      s[44] = b44 ^ (~b46 & b48);
      s[45] = b45 ^ (~b47 & b49);
      s[6] = b6 ^ (~b8 & b0);
      s[7] = b7 ^ (~b9 & b1);
      s[16] = b16 ^ (~b18 & b10);
      s[17] = b17 ^ (~b19 & b11);
      s[26] = b26 ^ (~b28 & b20);
      s[27] = b27 ^ (~b29 & b21);
      s[36] = b36 ^ (~b38 & b30);
      s[37] = b37 ^ (~b39 & b31);
      s[46] = b46 ^ (~b48 & b40);
      s[47] = b47 ^ (~b49 & b41);
      s[8] = b8 ^ (~b0 & b2);
      s[9] = b9 ^ (~b1 & b3);
      s[18] = b18 ^ (~b10 & b12);
      s[19] = b19 ^ (~b11 & b13);
      s[28] = b28 ^ (~b20 & b22);
      s[29] = b29 ^ (~b21 & b23);
      s[38] = b38 ^ (~b30 & b32);
      s[39] = b39 ^ (~b31 & b33);
      s[48] = b48 ^ (~b40 & b42);
      s[49] = b49 ^ (~b41 & b43);

      s[0] ^= RC[n];
      s[1] ^= RC[n + 1];
    }
  };

  if (COMMON_JS) {
    module.exports = methods;
  } else {
    for (i = 0; i < methodNames.length; ++i) {
      root[methodNames[i]] = methods[methodNames[i]];
    }
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return methods;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./node_modules/node-forge/lib/aes.js":
/*!********************************************!*\
  !*** ./node_modules/node-forge/lib/aes.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Advanced Encryption Standard (AES) implementation.
 *
 * This implementation is based on the public domain library 'jscrypto' which
 * was written by:
 *
 * Emily Stark (estark@stanford.edu)
 * Mike Hamburg (mhamburg@stanford.edu)
 * Dan Boneh (dabo@cs.stanford.edu)
 *
 * Parts of this code are based on the OpenSSL implementation of AES:
 * http://www.openssl.org
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2014 Digital Bazaar, Inc.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./cipher */ "./node_modules/node-forge/lib/cipher.js");
__webpack_require__(/*! ./cipherModes */ "./node_modules/node-forge/lib/cipherModes.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

/* AES API */
module.exports = forge.aes = forge.aes || {};

/**
 * Deprecated. Instead, use:
 *
 * var cipher = forge.cipher.createCipher('AES-<mode>', key);
 * cipher.start({iv: iv});
 *
 * Creates an AES cipher object to encrypt data using the given symmetric key.
 * The output will be stored in the 'output' member of the returned cipher.
 *
 * The key and iv may be given as a string of bytes, an array of bytes,
 * a byte buffer, or an array of 32-bit words.
 *
 * @param key the symmetric key to use.
 * @param iv the initialization vector to use.
 * @param output the buffer to write to, null to create one.
 * @param mode the cipher mode to use (default: 'CBC').
 *
 * @return the cipher.
 */
forge.aes.startEncrypting = function(key, iv, output, mode) {
  var cipher = _createCipher({
    key: key,
    output: output,
    decrypt: false,
    mode: mode
  });
  cipher.start(iv);
  return cipher;
};

/**
 * Deprecated. Instead, use:
 *
 * var cipher = forge.cipher.createCipher('AES-<mode>', key);
 *
 * Creates an AES cipher object to encrypt data using the given symmetric key.
 *
 * The key may be given as a string of bytes, an array of bytes, a
 * byte buffer, or an array of 32-bit words.
 *
 * @param key the symmetric key to use.
 * @param mode the cipher mode to use (default: 'CBC').
 *
 * @return the cipher.
 */
forge.aes.createEncryptionCipher = function(key, mode) {
  return _createCipher({
    key: key,
    output: null,
    decrypt: false,
    mode: mode
  });
};

/**
 * Deprecated. Instead, use:
 *
 * var decipher = forge.cipher.createDecipher('AES-<mode>', key);
 * decipher.start({iv: iv});
 *
 * Creates an AES cipher object to decrypt data using the given symmetric key.
 * The output will be stored in the 'output' member of the returned cipher.
 *
 * The key and iv may be given as a string of bytes, an array of bytes,
 * a byte buffer, or an array of 32-bit words.
 *
 * @param key the symmetric key to use.
 * @param iv the initialization vector to use.
 * @param output the buffer to write to, null to create one.
 * @param mode the cipher mode to use (default: 'CBC').
 *
 * @return the cipher.
 */
forge.aes.startDecrypting = function(key, iv, output, mode) {
  var cipher = _createCipher({
    key: key,
    output: output,
    decrypt: true,
    mode: mode
  });
  cipher.start(iv);
  return cipher;
};

/**
 * Deprecated. Instead, use:
 *
 * var decipher = forge.cipher.createDecipher('AES-<mode>', key);
 *
 * Creates an AES cipher object to decrypt data using the given symmetric key.
 *
 * The key may be given as a string of bytes, an array of bytes, a
 * byte buffer, or an array of 32-bit words.
 *
 * @param key the symmetric key to use.
 * @param mode the cipher mode to use (default: 'CBC').
 *
 * @return the cipher.
 */
forge.aes.createDecryptionCipher = function(key, mode) {
  return _createCipher({
    key: key,
    output: null,
    decrypt: true,
    mode: mode
  });
};

/**
 * Creates a new AES cipher algorithm object.
 *
 * @param name the name of the algorithm.
 * @param mode the mode factory function.
 *
 * @return the AES algorithm object.
 */
forge.aes.Algorithm = function(name, mode) {
  if(!init) {
    initialize();
  }
  var self = this;
  self.name = name;
  self.mode = new mode({
    blockSize: 16,
    cipher: {
      encrypt: function(inBlock, outBlock) {
        return _updateBlock(self._w, inBlock, outBlock, false);
      },
      decrypt: function(inBlock, outBlock) {
        return _updateBlock(self._w, inBlock, outBlock, true);
      }
    }
  });
  self._init = false;
};

/**
 * Initializes this AES algorithm by expanding its key.
 *
 * @param options the options to use.
 *          key the key to use with this algorithm.
 *          decrypt true if the algorithm should be initialized for decryption,
 *            false for encryption.
 */
forge.aes.Algorithm.prototype.initialize = function(options) {
  if(this._init) {
    return;
  }

  var key = options.key;
  var tmp;

  /* Note: The key may be a string of bytes, an array of bytes, a byte
    buffer, or an array of 32-bit integers. If the key is in bytes, then
    it must be 16, 24, or 32 bytes in length. If it is in 32-bit
    integers, it must be 4, 6, or 8 integers long. */

  if(typeof key === 'string' &&
    (key.length === 16 || key.length === 24 || key.length === 32)) {
    // convert key string into byte buffer
    key = forge.util.createBuffer(key);
  } else if(forge.util.isArray(key) &&
    (key.length === 16 || key.length === 24 || key.length === 32)) {
    // convert key integer array into byte buffer
    tmp = key;
    key = forge.util.createBuffer();
    for(var i = 0; i < tmp.length; ++i) {
      key.putByte(tmp[i]);
    }
  }

  // convert key byte buffer into 32-bit integer array
  if(!forge.util.isArray(key)) {
    tmp = key;
    key = [];

    // key lengths of 16, 24, 32 bytes allowed
    var len = tmp.length();
    if(len === 16 || len === 24 || len === 32) {
      len = len >>> 2;
      for(var i = 0; i < len; ++i) {
        key.push(tmp.getInt32());
      }
    }
  }

  // key must be an array of 32-bit integers by now
  if(!forge.util.isArray(key) ||
    !(key.length === 4 || key.length === 6 || key.length === 8)) {
    throw new Error('Invalid key parameter.');
  }

  // encryption operation is always used for these modes
  var mode = this.mode.name;
  var encryptOp = (['CFB', 'OFB', 'CTR', 'GCM'].indexOf(mode) !== -1);

  // do key expansion
  this._w = _expandKey(key, options.decrypt && !encryptOp);
  this._init = true;
};

/**
 * Expands a key. Typically only used for testing.
 *
 * @param key the symmetric key to expand, as an array of 32-bit words.
 * @param decrypt true to expand for decryption, false for encryption.
 *
 * @return the expanded key.
 */
forge.aes._expandKey = function(key, decrypt) {
  if(!init) {
    initialize();
  }
  return _expandKey(key, decrypt);
};

/**
 * Updates a single block. Typically only used for testing.
 *
 * @param w the expanded key to use.
 * @param input an array of block-size 32-bit words.
 * @param output an array of block-size 32-bit words.
 * @param decrypt true to decrypt, false to encrypt.
 */
forge.aes._updateBlock = _updateBlock;

/** Register AES algorithms **/

registerAlgorithm('AES-ECB', forge.cipher.modes.ecb);
registerAlgorithm('AES-CBC', forge.cipher.modes.cbc);
registerAlgorithm('AES-CFB', forge.cipher.modes.cfb);
registerAlgorithm('AES-OFB', forge.cipher.modes.ofb);
registerAlgorithm('AES-CTR', forge.cipher.modes.ctr);
registerAlgorithm('AES-GCM', forge.cipher.modes.gcm);

function registerAlgorithm(name, mode) {
  var factory = function() {
    return new forge.aes.Algorithm(name, mode);
  };
  forge.cipher.registerAlgorithm(name, factory);
}

/** AES implementation **/

var init = false; // not yet initialized
var Nb = 4;       // number of words comprising the state (AES = 4)
var sbox;         // non-linear substitution table used in key expansion
var isbox;        // inversion of sbox
var rcon;         // round constant word array
var mix;          // mix-columns table
var imix;         // inverse mix-columns table

/**
 * Performs initialization, ie: precomputes tables to optimize for speed.
 *
 * One way to understand how AES works is to imagine that 'addition' and
 * 'multiplication' are interfaces that require certain mathematical
 * properties to hold true (ie: they are associative) but they might have
 * different implementations and produce different kinds of results ...
 * provided that their mathematical properties remain true. AES defines
 * its own methods of addition and multiplication but keeps some important
 * properties the same, ie: associativity and distributivity. The
 * explanation below tries to shed some light on how AES defines addition
 * and multiplication of bytes and 32-bit words in order to perform its
 * encryption and decryption algorithms.
 *
 * The basics:
 *
 * The AES algorithm views bytes as binary representations of polynomials
 * that have either 1 or 0 as the coefficients. It defines the addition
 * or subtraction of two bytes as the XOR operation. It also defines the
 * multiplication of two bytes as a finite field referred to as GF(2^8)
 * (Note: 'GF' means "Galois Field" which is a field that contains a finite
 * number of elements so GF(2^8) has 256 elements).
 *
 * This means that any two bytes can be represented as binary polynomials;
 * when they multiplied together and modularly reduced by an irreducible
 * polynomial of the 8th degree, the results are the field GF(2^8). The
 * specific irreducible polynomial that AES uses in hexadecimal is 0x11b.
 * This multiplication is associative with 0x01 as the identity:
 *
 * (b * 0x01 = GF(b, 0x01) = b).
 *
 * The operation GF(b, 0x02) can be performed at the byte level by left
 * shifting b once and then XOR'ing it (to perform the modular reduction)
 * with 0x11b if b is >= 128. Repeated application of the multiplication
 * of 0x02 can be used to implement the multiplication of any two bytes.
 *
 * For instance, multiplying 0x57 and 0x13, denoted as GF(0x57, 0x13), can
 * be performed by factoring 0x13 into 0x01, 0x02, and 0x10. Then these
 * factors can each be multiplied by 0x57 and then added together. To do
 * the multiplication, values for 0x57 multiplied by each of these 3 factors
 * can be precomputed and stored in a table. To add them, the values from
 * the table are XOR'd together.
 *
 * AES also defines addition and multiplication of words, that is 4-byte
 * numbers represented as polynomials of 3 degrees where the coefficients
 * are the values of the bytes.
 *
 * The word [a0, a1, a2, a3] is a polynomial a3x^3 + a2x^2 + a1x + a0.
 *
 * Addition is performed by XOR'ing like powers of x. Multiplication
 * is performed in two steps, the first is an algebriac expansion as
 * you would do normally (where addition is XOR). But the result is
 * a polynomial larger than 3 degrees and thus it cannot fit in a word. So
 * next the result is modularly reduced by an AES-specific polynomial of
 * degree 4 which will always produce a polynomial of less than 4 degrees
 * such that it will fit in a word. In AES, this polynomial is x^4 + 1.
 *
 * The modular product of two polynomials 'a' and 'b' is thus:
 *
 * d(x) = d3x^3 + d2x^2 + d1x + d0
 * with
 * d0 = GF(a0, b0) ^ GF(a3, b1) ^ GF(a2, b2) ^ GF(a1, b3)
 * d1 = GF(a1, b0) ^ GF(a0, b1) ^ GF(a3, b2) ^ GF(a2, b3)
 * d2 = GF(a2, b0) ^ GF(a1, b1) ^ GF(a0, b2) ^ GF(a3, b3)
 * d3 = GF(a3, b0) ^ GF(a2, b1) ^ GF(a1, b2) ^ GF(a0, b3)
 *
 * As a matrix:
 *
 * [d0] = [a0 a3 a2 a1][b0]
 * [d1]   [a1 a0 a3 a2][b1]
 * [d2]   [a2 a1 a0 a3][b2]
 * [d3]   [a3 a2 a1 a0][b3]
 *
 * Special polynomials defined by AES (0x02 == {02}):
 * a(x)    = {03}x^3 + {01}x^2 + {01}x + {02}
 * a^-1(x) = {0b}x^3 + {0d}x^2 + {09}x + {0e}.
 *
 * These polynomials are used in the MixColumns() and InverseMixColumns()
 * operations, respectively, to cause each element in the state to affect
 * the output (referred to as diffusing).
 *
 * RotWord() uses: a0 = a1 = a2 = {00} and a3 = {01}, which is the
 * polynomial x3.
 *
 * The ShiftRows() method modifies the last 3 rows in the state (where
 * the state is 4 words with 4 bytes per word) by shifting bytes cyclically.
 * The 1st byte in the second row is moved to the end of the row. The 1st
 * and 2nd bytes in the third row are moved to the end of the row. The 1st,
 * 2nd, and 3rd bytes are moved in the fourth row.
 *
 * More details on how AES arithmetic works:
 *
 * In the polynomial representation of binary numbers, XOR performs addition
 * and subtraction and multiplication in GF(2^8) denoted as GF(a, b)
 * corresponds with the multiplication of polynomials modulo an irreducible
 * polynomial of degree 8. In other words, for AES, GF(a, b) will multiply
 * polynomial 'a' with polynomial 'b' and then do a modular reduction by
 * an AES-specific irreducible polynomial of degree 8.
 *
 * A polynomial is irreducible if its only divisors are one and itself. For
 * the AES algorithm, this irreducible polynomial is:
 *
 * m(x) = x^8 + x^4 + x^3 + x + 1,
 *
 * or {01}{1b} in hexadecimal notation, where each coefficient is a bit:
 * 100011011 = 283 = 0x11b.
 *
 * For example, GF(0x57, 0x83) = 0xc1 because
 *
 * 0x57 = 87  = 01010111 = x^6 + x^4 + x^2 + x + 1
 * 0x85 = 131 = 10000101 = x^7 + x + 1
 *
 * (x^6 + x^4 + x^2 + x + 1) * (x^7 + x + 1)
 * =  x^13 + x^11 + x^9 + x^8 + x^7 +
 *    x^7 + x^5 + x^3 + x^2 + x +
 *    x^6 + x^4 + x^2 + x + 1
 * =  x^13 + x^11 + x^9 + x^8 + x^6 + x^5 + x^4 + x^3 + 1 = y
 *    y modulo (x^8 + x^4 + x^3 + x + 1)
 * =  x^7 + x^6 + 1.
 *
 * The modular reduction by m(x) guarantees the result will be a binary
 * polynomial of less than degree 8, so that it can fit in a byte.
 *
 * The operation to multiply a binary polynomial b with x (the polynomial
 * x in binary representation is 00000010) is:
 *
 * b_7x^8 + b_6x^7 + b_5x^6 + b_4x^5 + b_3x^4 + b_2x^3 + b_1x^2 + b_0x^1
 *
 * To get GF(b, x) we must reduce that by m(x). If b_7 is 0 (that is the
 * most significant bit is 0 in b) then the result is already reduced. If
 * it is 1, then we can reduce it by subtracting m(x) via an XOR.
 *
 * It follows that multiplication by x (00000010 or 0x02) can be implemented
 * by performing a left shift followed by a conditional bitwise XOR with
 * 0x1b. This operation on bytes is denoted by xtime(). Multiplication by
 * higher powers of x can be implemented by repeated application of xtime().
 *
 * By adding intermediate results, multiplication by any constant can be
 * implemented. For instance:
 *
 * GF(0x57, 0x13) = 0xfe because:
 *
 * xtime(b) = (b & 128) ? (b << 1 ^ 0x11b) : (b << 1)
 *
 * Note: We XOR with 0x11b instead of 0x1b because in javascript our
 * datatype for b can be larger than 1 byte, so a left shift will not
 * automatically eliminate bits that overflow a byte ... by XOR'ing the
 * overflow bit with 1 (the extra one from 0x11b) we zero it out.
 *
 * GF(0x57, 0x02) = xtime(0x57) = 0xae
 * GF(0x57, 0x04) = xtime(0xae) = 0x47
 * GF(0x57, 0x08) = xtime(0x47) = 0x8e
 * GF(0x57, 0x10) = xtime(0x8e) = 0x07
 *
 * GF(0x57, 0x13) = GF(0x57, (0x01 ^ 0x02 ^ 0x10))
 *
 * And by the distributive property (since XOR is addition and GF() is
 * multiplication):
 *
 * = GF(0x57, 0x01) ^ GF(0x57, 0x02) ^ GF(0x57, 0x10)
 * = 0x57 ^ 0xae ^ 0x07
 * = 0xfe.
 */
function initialize() {
  init = true;

  /* Populate the Rcon table. These are the values given by
    [x^(i-1),{00},{00},{00}] where x^(i-1) are powers of x (and x = 0x02)
    in the field of GF(2^8), where i starts at 1.

    rcon[0] = [0x00, 0x00, 0x00, 0x00]
    rcon[1] = [0x01, 0x00, 0x00, 0x00] 2^(1-1) = 2^0 = 1
    rcon[2] = [0x02, 0x00, 0x00, 0x00] 2^(2-1) = 2^1 = 2
    ...
    rcon[9]  = [0x1B, 0x00, 0x00, 0x00] 2^(9-1)  = 2^8 = 0x1B
    rcon[10] = [0x36, 0x00, 0x00, 0x00] 2^(10-1) = 2^9 = 0x36

    We only store the first byte because it is the only one used.
  */
  rcon = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1B, 0x36];

  // compute xtime table which maps i onto GF(i, 0x02)
  var xtime = new Array(256);
  for(var i = 0; i < 128; ++i) {
    xtime[i] = i << 1;
    xtime[i + 128] = (i + 128) << 1 ^ 0x11B;
  }

  // compute all other tables
  sbox = new Array(256);
  isbox = new Array(256);
  mix = new Array(4);
  imix = new Array(4);
  for(var i = 0; i < 4; ++i) {
    mix[i] = new Array(256);
    imix[i] = new Array(256);
  }
  var e = 0, ei = 0, e2, e4, e8, sx, sx2, me, ime;
  for(var i = 0; i < 256; ++i) {
    /* We need to generate the SubBytes() sbox and isbox tables so that
      we can perform byte substitutions. This requires us to traverse
      all of the elements in GF, find their multiplicative inverses,
      and apply to each the following affine transformation:

      bi' = bi ^ b(i + 4) mod 8 ^ b(i + 5) mod 8 ^ b(i + 6) mod 8 ^
            b(i + 7) mod 8 ^ ci
      for 0 <= i < 8, where bi is the ith bit of the byte, and ci is the
      ith bit of a byte c with the value {63} or {01100011}.

      It is possible to traverse every possible value in a Galois field
      using what is referred to as a 'generator'. There are many
      generators (128 out of 256): 3,5,6,9,11,82 to name a few. To fully
      traverse GF we iterate 255 times, multiplying by our generator
      each time.

      On each iteration we can determine the multiplicative inverse for
      the current element.

      Suppose there is an element in GF 'e'. For a given generator 'g',
      e = g^x. The multiplicative inverse of e is g^(255 - x). It turns
      out that if use the inverse of a generator as another generator
      it will produce all of the corresponding multiplicative inverses
      at the same time. For this reason, we choose 5 as our inverse
      generator because it only requires 2 multiplies and 1 add and its
      inverse, 82, requires relatively few operations as well.

      In order to apply the affine transformation, the multiplicative
      inverse 'ei' of 'e' can be repeatedly XOR'd (4 times) with a
      bit-cycling of 'ei'. To do this 'ei' is first stored in 's' and
      'x'. Then 's' is left shifted and the high bit of 's' is made the
      low bit. The resulting value is stored in 's'. Then 'x' is XOR'd
      with 's' and stored in 'x'. On each subsequent iteration the same
      operation is performed. When 4 iterations are complete, 'x' is
      XOR'd with 'c' (0x63) and the transformed value is stored in 'x'.
      For example:

      s = 01000001
      x = 01000001

      iteration 1: s = 10000010, x ^= s
      iteration 2: s = 00000101, x ^= s
      iteration 3: s = 00001010, x ^= s
      iteration 4: s = 00010100, x ^= s
      x ^= 0x63

      This can be done with a loop where s = (s << 1) | (s >> 7). However,
      it can also be done by using a single 16-bit (in this case 32-bit)
      number 'sx'. Since XOR is an associative operation, we can set 'sx'
      to 'ei' and then XOR it with 'sx' left-shifted 1,2,3, and 4 times.
      The most significant bits will flow into the high 8 bit positions
      and be correctly XOR'd with one another. All that remains will be
      to cycle the high 8 bits by XOR'ing them all with the lower 8 bits
      afterwards.

      At the same time we're populating sbox and isbox we can precompute
      the multiplication we'll need to do to do MixColumns() later.
    */

    // apply affine transformation
    sx = ei ^ (ei << 1) ^ (ei << 2) ^ (ei << 3) ^ (ei << 4);
    sx = (sx >> 8) ^ (sx & 255) ^ 0x63;

    // update tables
    sbox[e] = sx;
    isbox[sx] = e;

    /* Mixing columns is done using matrix multiplication. The columns
      that are to be mixed are each a single word in the current state.
      The state has Nb columns (4 columns). Therefore each column is a
      4 byte word. So to mix the columns in a single column 'c' where
      its rows are r0, r1, r2, and r3, we use the following matrix
      multiplication:

      [2 3 1 1]*[r0,c]=[r'0,c]
      [1 2 3 1] [r1,c] [r'1,c]
      [1 1 2 3] [r2,c] [r'2,c]
      [3 1 1 2] [r3,c] [r'3,c]

      r0, r1, r2, and r3 are each 1 byte of one of the words in the
      state (a column). To do matrix multiplication for each mixed
      column c' we multiply the corresponding row from the left matrix
      with the corresponding column from the right matrix. In total, we
      get 4 equations:

      r0,c' = 2*r0,c + 3*r1,c + 1*r2,c + 1*r3,c
      r1,c' = 1*r0,c + 2*r1,c + 3*r2,c + 1*r3,c
      r2,c' = 1*r0,c + 1*r1,c + 2*r2,c + 3*r3,c
      r3,c' = 3*r0,c + 1*r1,c + 1*r2,c + 2*r3,c

      As usual, the multiplication is as previously defined and the
      addition is XOR. In order to optimize mixing columns we can store
      the multiplication results in tables. If you think of the whole
      column as a word (it might help to visualize by mentally rotating
      the equations above by counterclockwise 90 degrees) then you can
      see that it would be useful to map the multiplications performed on
      each byte (r0, r1, r2, r3) onto a word as well. For instance, we
      could map 2*r0,1*r0,1*r0,3*r0 onto a word by storing 2*r0 in the
      highest 8 bits and 3*r0 in the lowest 8 bits (with the other two
      respectively in the middle). This means that a table can be
      constructed that uses r0 as an index to the word. We can do the
      same with r1, r2, and r3, creating a total of 4 tables.

      To construct a full c', we can just look up each byte of c in
      their respective tables and XOR the results together.

      Also, to build each table we only have to calculate the word
      for 2,1,1,3 for every byte ... which we can do on each iteration
      of this loop since we will iterate over every byte. After we have
      calculated 2,1,1,3 we can get the results for the other tables
      by cycling the byte at the end to the beginning. For instance
      we can take the result of table 2,1,1,3 and produce table 3,2,1,1
      by moving the right most byte to the left most position just like
      how you can imagine the 3 moved out of 2,1,1,3 and to the front
      to produce 3,2,1,1.

      There is another optimization in that the same multiples of
      the current element we need in order to advance our generator
      to the next iteration can be reused in performing the 2,1,1,3
      calculation. We also calculate the inverse mix column tables,
      with e,9,d,b being the inverse of 2,1,1,3.

      When we're done, and we need to actually mix columns, the first
      byte of each state word should be put through mix[0] (2,1,1,3),
      the second through mix[1] (3,2,1,1) and so forth. Then they should
      be XOR'd together to produce the fully mixed column.
    */

    // calculate mix and imix table values
    sx2 = xtime[sx];
    e2 = xtime[e];
    e4 = xtime[e2];
    e8 = xtime[e4];
    me =
      (sx2 << 24) ^  // 2
      (sx << 16) ^   // 1
      (sx << 8) ^    // 1
      (sx ^ sx2);    // 3
    ime =
      (e2 ^ e4 ^ e8) << 24 ^  // E (14)
      (e ^ e8) << 16 ^        // 9
      (e ^ e4 ^ e8) << 8 ^    // D (13)
      (e ^ e2 ^ e8);          // B (11)
    // produce each of the mix tables by rotating the 2,1,1,3 value
    for(var n = 0; n < 4; ++n) {
      mix[n][e] = me;
      imix[n][sx] = ime;
      // cycle the right most byte to the left most position
      // ie: 2,1,1,3 becomes 3,2,1,1
      me = me << 24 | me >>> 8;
      ime = ime << 24 | ime >>> 8;
    }

    // get next element and inverse
    if(e === 0) {
      // 1 is the inverse of 1
      e = ei = 1;
    } else {
      // e = 2e + 2*2*2*(10e)) = multiply e by 82 (chosen generator)
      // ei = ei + 2*2*ei = multiply ei by 5 (inverse generator)
      e = e2 ^ xtime[xtime[xtime[e2 ^ e8]]];
      ei ^= xtime[xtime[ei]];
    }
  }
}

/**
 * Generates a key schedule using the AES key expansion algorithm.
 *
 * The AES algorithm takes the Cipher Key, K, and performs a Key Expansion
 * routine to generate a key schedule. The Key Expansion generates a total
 * of Nb*(Nr + 1) words: the algorithm requires an initial set of Nb words,
 * and each of the Nr rounds requires Nb words of key data. The resulting
 * key schedule consists of a linear array of 4-byte words, denoted [wi ],
 * with i in the range 0 <= i < Nb(Nr + 1).
 *
 * KeyExpansion(byte key[4*Nk], word w[Nb*(Nr+1)], Nk)
 * AES-128 (Nb=4, Nk=4, Nr=10)
 * AES-192 (Nb=4, Nk=6, Nr=12)
 * AES-256 (Nb=4, Nk=8, Nr=14)
 * Note: Nr=Nk+6.
 *
 * Nb is the number of columns (32-bit words) comprising the State (or
 * number of bytes in a block). For AES, Nb=4.
 *
 * @param key the key to schedule (as an array of 32-bit words).
 * @param decrypt true to modify the key schedule to decrypt, false not to.
 *
 * @return the generated key schedule.
 */
function _expandKey(key, decrypt) {
  // copy the key's words to initialize the key schedule
  var w = key.slice(0);

  /* RotWord() will rotate a word, moving the first byte to the last
    byte's position (shifting the other bytes left).

    We will be getting the value of Rcon at i / Nk. 'i' will iterate
    from Nk to (Nb * Nr+1). Nk = 4 (4 byte key), Nb = 4 (4 words in
    a block), Nr = Nk + 6 (10). Therefore 'i' will iterate from
    4 to 44 (exclusive). Each time we iterate 4 times, i / Nk will
    increase by 1. We use a counter iNk to keep track of this.
   */

  // go through the rounds expanding the key
  var temp, iNk = 1;
  var Nk = w.length;
  var Nr1 = Nk + 6 + 1;
  var end = Nb * Nr1;
  for(var i = Nk; i < end; ++i) {
    temp = w[i - 1];
    if(i % Nk === 0) {
      // temp = SubWord(RotWord(temp)) ^ Rcon[i / Nk]
      temp =
        sbox[temp >>> 16 & 255] << 24 ^
        sbox[temp >>> 8 & 255] << 16 ^
        sbox[temp & 255] << 8 ^
        sbox[temp >>> 24] ^ (rcon[iNk] << 24);
      iNk++;
    } else if(Nk > 6 && (i % Nk === 4)) {
      // temp = SubWord(temp)
      temp =
        sbox[temp >>> 24] << 24 ^
        sbox[temp >>> 16 & 255] << 16 ^
        sbox[temp >>> 8 & 255] << 8 ^
        sbox[temp & 255];
    }
    w[i] = w[i - Nk] ^ temp;
  }

  /* When we are updating a cipher block we always use the code path for
     encryption whether we are decrypting or not (to shorten code and
     simplify the generation of look up tables). However, because there
     are differences in the decryption algorithm, other than just swapping
     in different look up tables, we must transform our key schedule to
     account for these changes:

     1. The decryption algorithm gets its key rounds in reverse order.
     2. The decryption algorithm adds the round key before mixing columns
       instead of afterwards.

     We don't need to modify our key schedule to handle the first case,
     we can just traverse the key schedule in reverse order when decrypting.

     The second case requires a little work.

     The tables we built for performing rounds will take an input and then
     perform SubBytes() and MixColumns() or, for the decrypt version,
     InvSubBytes() and InvMixColumns(). But the decrypt algorithm requires
     us to AddRoundKey() before InvMixColumns(). This means we'll need to
     apply some transformations to the round key to inverse-mix its columns
     so they'll be correct for moving AddRoundKey() to after the state has
     had its columns inverse-mixed.

     To inverse-mix the columns of the state when we're decrypting we use a
     lookup table that will apply InvSubBytes() and InvMixColumns() at the
     same time. However, the round key's bytes are not inverse-substituted
     in the decryption algorithm. To get around this problem, we can first
     substitute the bytes in the round key so that when we apply the
     transformation via the InvSubBytes()+InvMixColumns() table, it will
     undo our substitution leaving us with the original value that we
     want -- and then inverse-mix that value.

     This change will correctly alter our key schedule so that we can XOR
     each round key with our already transformed decryption state. This
     allows us to use the same code path as the encryption algorithm.

     We make one more change to the decryption key. Since the decryption
     algorithm runs in reverse from the encryption algorithm, we reverse
     the order of the round keys to avoid having to iterate over the key
     schedule backwards when running the encryption algorithm later in
     decryption mode. In addition to reversing the order of the round keys,
     we also swap each round key's 2nd and 4th rows. See the comments
     section where rounds are performed for more details about why this is
     done. These changes are done inline with the other substitution
     described above.
  */
  if(decrypt) {
    var tmp;
    var m0 = imix[0];
    var m1 = imix[1];
    var m2 = imix[2];
    var m3 = imix[3];
    var wnew = w.slice(0);
    end = w.length;
    for(var i = 0, wi = end - Nb; i < end; i += Nb, wi -= Nb) {
      // do not sub the first or last round key (round keys are Nb
      // words) as no column mixing is performed before they are added,
      // but do change the key order
      if(i === 0 || i === (end - Nb)) {
        wnew[i] = w[wi];
        wnew[i + 1] = w[wi + 3];
        wnew[i + 2] = w[wi + 2];
        wnew[i + 3] = w[wi + 1];
      } else {
        // substitute each round key byte because the inverse-mix
        // table will inverse-substitute it (effectively cancel the
        // substitution because round key bytes aren't sub'd in
        // decryption mode) and swap indexes 3 and 1
        for(var n = 0; n < Nb; ++n) {
          tmp = w[wi + n];
          wnew[i + (3&-n)] =
            m0[sbox[tmp >>> 24]] ^
            m1[sbox[tmp >>> 16 & 255]] ^
            m2[sbox[tmp >>> 8 & 255]] ^
            m3[sbox[tmp & 255]];
        }
      }
    }
    w = wnew;
  }

  return w;
}

/**
 * Updates a single block (16 bytes) using AES. The update will either
 * encrypt or decrypt the block.
 *
 * @param w the key schedule.
 * @param input the input block (an array of 32-bit words).
 * @param output the updated output block.
 * @param decrypt true to decrypt the block, false to encrypt it.
 */
function _updateBlock(w, input, output, decrypt) {
  /*
  Cipher(byte in[4*Nb], byte out[4*Nb], word w[Nb*(Nr+1)])
  begin
    byte state[4,Nb]
    state = in
    AddRoundKey(state, w[0, Nb-1])
    for round = 1 step 1 to Nr-1
      SubBytes(state)
      ShiftRows(state)
      MixColumns(state)
      AddRoundKey(state, w[round*Nb, (round+1)*Nb-1])
    end for
    SubBytes(state)
    ShiftRows(state)
    AddRoundKey(state, w[Nr*Nb, (Nr+1)*Nb-1])
    out = state
  end

  InvCipher(byte in[4*Nb], byte out[4*Nb], word w[Nb*(Nr+1)])
  begin
    byte state[4,Nb]
    state = in
    AddRoundKey(state, w[Nr*Nb, (Nr+1)*Nb-1])
    for round = Nr-1 step -1 downto 1
      InvShiftRows(state)
      InvSubBytes(state)
      AddRoundKey(state, w[round*Nb, (round+1)*Nb-1])
      InvMixColumns(state)
    end for
    InvShiftRows(state)
    InvSubBytes(state)
    AddRoundKey(state, w[0, Nb-1])
    out = state
  end
  */

  // Encrypt: AddRoundKey(state, w[0, Nb-1])
  // Decrypt: AddRoundKey(state, w[Nr*Nb, (Nr+1)*Nb-1])
  var Nr = w.length / 4 - 1;
  var m0, m1, m2, m3, sub;
  if(decrypt) {
    m0 = imix[0];
    m1 = imix[1];
    m2 = imix[2];
    m3 = imix[3];
    sub = isbox;
  } else {
    m0 = mix[0];
    m1 = mix[1];
    m2 = mix[2];
    m3 = mix[3];
    sub = sbox;
  }
  var a, b, c, d, a2, b2, c2;
  a = input[0] ^ w[0];
  b = input[decrypt ? 3 : 1] ^ w[1];
  c = input[2] ^ w[2];
  d = input[decrypt ? 1 : 3] ^ w[3];
  var i = 3;

  /* In order to share code we follow the encryption algorithm when both
    encrypting and decrypting. To account for the changes required in the
    decryption algorithm, we use different lookup tables when decrypting
    and use a modified key schedule to account for the difference in the
    order of transformations applied when performing rounds. We also get
    key rounds in reverse order (relative to encryption). */
  for(var round = 1; round < Nr; ++round) {
    /* As described above, we'll be using table lookups to perform the
      column mixing. Each column is stored as a word in the state (the
      array 'input' has one column as a word at each index). In order to
      mix a column, we perform these transformations on each row in c,
      which is 1 byte in each word. The new column for c0 is c'0:

               m0      m1      m2      m3
      r0,c'0 = 2*r0,c0 + 3*r1,c0 + 1*r2,c0 + 1*r3,c0
      r1,c'0 = 1*r0,c0 + 2*r1,c0 + 3*r2,c0 + 1*r3,c0
      r2,c'0 = 1*r0,c0 + 1*r1,c0 + 2*r2,c0 + 3*r3,c0
      r3,c'0 = 3*r0,c0 + 1*r1,c0 + 1*r2,c0 + 2*r3,c0

      So using mix tables where c0 is a word with r0 being its upper
      8 bits and r3 being its lower 8 bits:

      m0[c0 >> 24] will yield this word: [2*r0,1*r0,1*r0,3*r0]
      ...
      m3[c0 & 255] will yield this word: [1*r3,1*r3,3*r3,2*r3]

      Therefore to mix the columns in each word in the state we
      do the following (& 255 omitted for brevity):
      c'0,r0 = m0[c0 >> 24] ^ m1[c1 >> 16] ^ m2[c2 >> 8] ^ m3[c3]
      c'0,r1 = m0[c0 >> 24] ^ m1[c1 >> 16] ^ m2[c2 >> 8] ^ m3[c3]
      c'0,r2 = m0[c0 >> 24] ^ m1[c1 >> 16] ^ m2[c2 >> 8] ^ m3[c3]
      c'0,r3 = m0[c0 >> 24] ^ m1[c1 >> 16] ^ m2[c2 >> 8] ^ m3[c3]

      However, before mixing, the algorithm requires us to perform
      ShiftRows(). The ShiftRows() transformation cyclically shifts the
      last 3 rows of the state over different offsets. The first row
      (r = 0) is not shifted.

      s'_r,c = s_r,(c + shift(r, Nb) mod Nb
      for 0 < r < 4 and 0 <= c < Nb and
      shift(1, 4) = 1
      shift(2, 4) = 2
      shift(3, 4) = 3.

      This causes the first byte in r = 1 to be moved to the end of
      the row, the first 2 bytes in r = 2 to be moved to the end of
      the row, the first 3 bytes in r = 3 to be moved to the end of
      the row:

      r1: [c0 c1 c2 c3] => [c1 c2 c3 c0]
      r2: [c0 c1 c2 c3]    [c2 c3 c0 c1]
      r3: [c0 c1 c2 c3]    [c3 c0 c1 c2]

      We can make these substitutions inline with our column mixing to
      generate an updated set of equations to produce each word in the
      state (note the columns have changed positions):

      c0 c1 c2 c3 => c0 c1 c2 c3
      c0 c1 c2 c3    c1 c2 c3 c0  (cycled 1 byte)
      c0 c1 c2 c3    c2 c3 c0 c1  (cycled 2 bytes)
      c0 c1 c2 c3    c3 c0 c1 c2  (cycled 3 bytes)

      Therefore:

      c'0 = 2*r0,c0 + 3*r1,c1 + 1*r2,c2 + 1*r3,c3
      c'0 = 1*r0,c0 + 2*r1,c1 + 3*r2,c2 + 1*r3,c3
      c'0 = 1*r0,c0 + 1*r1,c1 + 2*r2,c2 + 3*r3,c3
      c'0 = 3*r0,c0 + 1*r1,c1 + 1*r2,c2 + 2*r3,c3

      c'1 = 2*r0,c1 + 3*r1,c2 + 1*r2,c3 + 1*r3,c0
      c'1 = 1*r0,c1 + 2*r1,c2 + 3*r2,c3 + 1*r3,c0
      c'1 = 1*r0,c1 + 1*r1,c2 + 2*r2,c3 + 3*r3,c0
      c'1 = 3*r0,c1 + 1*r1,c2 + 1*r2,c3 + 2*r3,c0

      ... and so forth for c'2 and c'3. The important distinction is
      that the columns are cycling, with c0 being used with the m0
      map when calculating c0, but c1 being used with the m0 map when
      calculating c1 ... and so forth.

      When performing the inverse we transform the mirror image and
      skip the bottom row, instead of the top one, and move upwards:

      c3 c2 c1 c0 => c0 c3 c2 c1  (cycled 3 bytes) *same as encryption
      c3 c2 c1 c0    c1 c0 c3 c2  (cycled 2 bytes)
      c3 c2 c1 c0    c2 c1 c0 c3  (cycled 1 byte)  *same as encryption
      c3 c2 c1 c0    c3 c2 c1 c0

      If you compare the resulting matrices for ShiftRows()+MixColumns()
      and for InvShiftRows()+InvMixColumns() the 2nd and 4th columns are
      different (in encrypt mode vs. decrypt mode). So in order to use
      the same code to handle both encryption and decryption, we will
      need to do some mapping.

      If in encryption mode we let a=c0, b=c1, c=c2, d=c3, and r<N> be
      a row number in the state, then the resulting matrix in encryption
      mode for applying the above transformations would be:

      r1: a b c d
      r2: b c d a
      r3: c d a b
      r4: d a b c

      If we did the same in decryption mode we would get:

      r1: a d c b
      r2: b a d c
      r3: c b a d
      r4: d c b a

      If instead we swap d and b (set b=c3 and d=c1), then we get:

      r1: a b c d
      r2: d a b c
      r3: c d a b
      r4: b c d a

      Now the 1st and 3rd rows are the same as the encryption matrix. All
      we need to do then to make the mapping exactly the same is to swap
      the 2nd and 4th rows when in decryption mode. To do this without
      having to do it on each iteration, we swapped the 2nd and 4th rows
      in the decryption key schedule. We also have to do the swap above
      when we first pull in the input and when we set the final output. */
    a2 =
      m0[a >>> 24] ^
      m1[b >>> 16 & 255] ^
      m2[c >>> 8 & 255] ^
      m3[d & 255] ^ w[++i];
    b2 =
      m0[b >>> 24] ^
      m1[c >>> 16 & 255] ^
      m2[d >>> 8 & 255] ^
      m3[a & 255] ^ w[++i];
    c2 =
      m0[c >>> 24] ^
      m1[d >>> 16 & 255] ^
      m2[a >>> 8 & 255] ^
      m3[b & 255] ^ w[++i];
    d =
      m0[d >>> 24] ^
      m1[a >>> 16 & 255] ^
      m2[b >>> 8 & 255] ^
      m3[c & 255] ^ w[++i];
    a = a2;
    b = b2;
    c = c2;
  }

  /*
    Encrypt:
    SubBytes(state)
    ShiftRows(state)
    AddRoundKey(state, w[Nr*Nb, (Nr+1)*Nb-1])

    Decrypt:
    InvShiftRows(state)
    InvSubBytes(state)
    AddRoundKey(state, w[0, Nb-1])
   */
  // Note: rows are shifted inline
  output[0] =
    (sub[a >>> 24] << 24) ^
    (sub[b >>> 16 & 255] << 16) ^
    (sub[c >>> 8 & 255] << 8) ^
    (sub[d & 255]) ^ w[++i];
  output[decrypt ? 3 : 1] =
    (sub[b >>> 24] << 24) ^
    (sub[c >>> 16 & 255] << 16) ^
    (sub[d >>> 8 & 255] << 8) ^
    (sub[a & 255]) ^ w[++i];
  output[2] =
    (sub[c >>> 24] << 24) ^
    (sub[d >>> 16 & 255] << 16) ^
    (sub[a >>> 8 & 255] << 8) ^
    (sub[b & 255]) ^ w[++i];
  output[decrypt ? 1 : 3] =
    (sub[d >>> 24] << 24) ^
    (sub[a >>> 16 & 255] << 16) ^
    (sub[b >>> 8 & 255] << 8) ^
    (sub[c & 255]) ^ w[++i];
}

/**
 * Deprecated. Instead, use:
 *
 * forge.cipher.createCipher('AES-<mode>', key);
 * forge.cipher.createDecipher('AES-<mode>', key);
 *
 * Creates a deprecated AES cipher object. This object's mode will default to
 * CBC (cipher-block-chaining).
 *
 * The key and iv may be given as a string of bytes, an array of bytes, a
 * byte buffer, or an array of 32-bit words.
 *
 * @param options the options to use.
 *          key the symmetric key to use.
 *          output the buffer to write to.
 *          decrypt true for decryption, false for encryption.
 *          mode the cipher mode to use (default: 'CBC').
 *
 * @return the cipher.
 */
function _createCipher(options) {
  options = options || {};
  var mode = (options.mode || 'CBC').toUpperCase();
  var algorithm = 'AES-' + mode;

  var cipher;
  if(options.decrypt) {
    cipher = forge.cipher.createDecipher(algorithm, options.key);
  } else {
    cipher = forge.cipher.createCipher(algorithm, options.key);
  }

  // backwards compatible start API
  var start = cipher.start;
  cipher.start = function(iv, options) {
    // backwards compatibility: support second arg as output buffer
    var output = null;
    if(options instanceof forge.util.ByteBuffer) {
      output = options;
      options = {};
    }
    options = options || {};
    options.output = output;
    options.iv = iv;
    start.call(cipher, options);
  };

  return cipher;
}


/***/ }),

/***/ "./node_modules/node-forge/lib/asn1.js":
/*!*********************************************!*\
  !*** ./node_modules/node-forge/lib/asn1.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Javascript implementation of Abstract Syntax Notation Number One.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2015 Digital Bazaar, Inc.
 *
 * An API for storing data using the Abstract Syntax Notation Number One
 * format using DER (Distinguished Encoding Rules) encoding. This encoding is
 * commonly used to store data for PKI, i.e. X.509 Certificates, and this
 * implementation exists for that purpose.
 *
 * Abstract Syntax Notation Number One (ASN.1) is used to define the abstract
 * syntax of information without restricting the way the information is encoded
 * for transmission. It provides a standard that allows for open systems
 * communication. ASN.1 defines the syntax of information data and a number of
 * simple data types as well as a notation for describing them and specifying
 * values for them.
 *
 * The RSA algorithm creates public and private keys that are often stored in
 * X.509 or PKCS#X formats -- which use ASN.1 (encoded in DER format). This
 * class provides the most basic functionality required to store and load DSA
 * keys that are encoded according to ASN.1.
 *
 * The most common binary encodings for ASN.1 are BER (Basic Encoding Rules)
 * and DER (Distinguished Encoding Rules). DER is just a subset of BER that
 * has stricter requirements for how data must be encoded.
 *
 * Each ASN.1 structure has a tag (a byte identifying the ASN.1 structure type)
 * and a byte array for the value of this ASN1 structure which may be data or a
 * list of ASN.1 structures.
 *
 * Each ASN.1 structure using BER is (Tag-Length-Value):
 *
 * | byte 0 | bytes X | bytes Y |
 * |--------|---------|----------
 * |  tag   | length  |  value  |
 *
 * ASN.1 allows for tags to be of "High-tag-number form" which allows a tag to
 * be two or more octets, but that is not supported by this class. A tag is
 * only 1 byte. Bits 1-5 give the tag number (ie the data type within a
 * particular 'class'), 6 indicates whether or not the ASN.1 value is
 * constructed from other ASN.1 values, and bits 7 and 8 give the 'class'. If
 * bits 7 and 8 are both zero, the class is UNIVERSAL. If only bit 7 is set,
 * then the class is APPLICATION. If only bit 8 is set, then the class is
 * CONTEXT_SPECIFIC. If both bits 7 and 8 are set, then the class is PRIVATE.
 * The tag numbers for the data types for the class UNIVERSAL are listed below:
 *
 * UNIVERSAL 0 Reserved for use by the encoding rules
 * UNIVERSAL 1 Boolean type
 * UNIVERSAL 2 Integer type
 * UNIVERSAL 3 Bitstring type
 * UNIVERSAL 4 Octetstring type
 * UNIVERSAL 5 Null type
 * UNIVERSAL 6 Object identifier type
 * UNIVERSAL 7 Object descriptor type
 * UNIVERSAL 8 External type and Instance-of type
 * UNIVERSAL 9 Real type
 * UNIVERSAL 10 Enumerated type
 * UNIVERSAL 11 Embedded-pdv type
 * UNIVERSAL 12 UTF8String type
 * UNIVERSAL 13 Relative object identifier type
 * UNIVERSAL 14-15 Reserved for future editions
 * UNIVERSAL 16 Sequence and Sequence-of types
 * UNIVERSAL 17 Set and Set-of types
 * UNIVERSAL 18-22, 25-30 Character string types
 * UNIVERSAL 23-24 Time types
 *
 * The length of an ASN.1 structure is specified after the tag identifier.
 * There is a definite form and an indefinite form. The indefinite form may
 * be used if the encoding is constructed and not all immediately available.
 * The indefinite form is encoded using a length byte with only the 8th bit
 * set. The end of the constructed object is marked using end-of-contents
 * octets (two zero bytes).
 *
 * The definite form looks like this:
 *
 * The length may take up 1 or more bytes, it depends on the length of the
 * value of the ASN.1 structure. DER encoding requires that if the ASN.1
 * structure has a value that has a length greater than 127, more than 1 byte
 * will be used to store its length, otherwise just one byte will be used.
 * This is strict.
 *
 * In the case that the length of the ASN.1 value is less than 127, 1 octet
 * (byte) is used to store the "short form" length. The 8th bit has a value of
 * 0 indicating the length is "short form" and not "long form" and bits 7-1
 * give the length of the data. (The 8th bit is the left-most, most significant
 * bit: also known as big endian or network format).
 *
 * In the case that the length of the ASN.1 value is greater than 127, 2 to
 * 127 octets (bytes) are used to store the "long form" length. The first
 * byte's 8th bit is set to 1 to indicate the length is "long form." Bits 7-1
 * give the number of additional octets. All following octets are in base 256
 * with the most significant digit first (typical big-endian binary unsigned
 * integer storage). So, for instance, if the length of a value was 257, the
 * first byte would be set to:
 *
 * 10000010 = 130 = 0x82.
 *
 * This indicates there are 2 octets (base 256) for the length. The second and
 * third bytes (the octets just mentioned) would store the length in base 256:
 *
 * octet 2: 00000001 = 1 * 256^1 = 256
 * octet 3: 00000001 = 1 * 256^0 = 1
 * total = 257
 *
 * The algorithm for converting a js integer value of 257 to base-256 is:
 *
 * var value = 257;
 * var bytes = [];
 * bytes[0] = (value >>> 8) & 0xFF; // most significant byte first
 * bytes[1] = value & 0xFF;        // least significant byte last
 *
 * On the ASN.1 UNIVERSAL Object Identifier (OID) type:
 *
 * An OID can be written like: "value1.value2.value3...valueN"
 *
 * The DER encoding rules:
 *
 * The first byte has the value 40 * value1 + value2.
 * The following bytes, if any, encode the remaining values. Each value is
 * encoded in base 128, most significant digit first (big endian), with as
 * few digits as possible, and the most significant bit of each byte set
 * to 1 except the last in each value's encoding. For example: Given the
 * OID "1.2.840.113549", its DER encoding is (remember each byte except the
 * last one in each encoding is OR'd with 0x80):
 *
 * byte 1: 40 * 1 + 2 = 42 = 0x2A.
 * bytes 2-3: 128 * 6 + 72 = 840 = 6 72 = 6 72 = 0x0648 = 0x8648
 * bytes 4-6: 16384 * 6 + 128 * 119 + 13 = 6 119 13 = 0x06770D = 0x86F70D
 *
 * The final value is: 0x2A864886F70D.
 * The full OID (including ASN.1 tag and length of 6 bytes) is:
 * 0x06062A864886F70D
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");
__webpack_require__(/*! ./oids */ "./node_modules/node-forge/lib/oids.js");

/* ASN.1 API */
var asn1 = module.exports = forge.asn1 = forge.asn1 || {};

/**
 * ASN.1 classes.
 */
asn1.Class = {
  UNIVERSAL:        0x00,
  APPLICATION:      0x40,
  CONTEXT_SPECIFIC: 0x80,
  PRIVATE:          0xC0
};

/**
 * ASN.1 types. Not all types are supported by this implementation, only
 * those necessary to implement a simple PKI are implemented.
 */
asn1.Type = {
  NONE:             0,
  BOOLEAN:          1,
  INTEGER:          2,
  BITSTRING:        3,
  OCTETSTRING:      4,
  NULL:             5,
  OID:              6,
  ODESC:            7,
  EXTERNAL:         8,
  REAL:             9,
  ENUMERATED:      10,
  EMBEDDED:        11,
  UTF8:            12,
  ROID:            13,
  SEQUENCE:        16,
  SET:             17,
  PRINTABLESTRING: 19,
  IA5STRING:       22,
  UTCTIME:         23,
  GENERALIZEDTIME: 24,
  BMPSTRING:       30
};

/**
 * Creates a new asn1 object.
 *
 * @param tagClass the tag class for the object.
 * @param type the data type (tag number) for the object.
 * @param constructed true if the asn1 object is in constructed form.
 * @param value the value for the object, if it is not constructed.
 * @param [options] the options to use:
 *          [bitStringContents] the plain BIT STRING content including padding
 *            byte.
 *
 * @return the asn1 object.
 */
asn1.create = function(tagClass, type, constructed, value, options) {
  /* An asn1 object has a tagClass, a type, a constructed flag, and a
    value. The value's type depends on the constructed flag. If
    constructed, it will contain a list of other asn1 objects. If not,
    it will contain the ASN.1 value as an array of bytes formatted
    according to the ASN.1 data type. */

  // remove undefined values
  if(forge.util.isArray(value)) {
    var tmp = [];
    for(var i = 0; i < value.length; ++i) {
      if(value[i] !== undefined) {
        tmp.push(value[i]);
      }
    }
    value = tmp;
  }

  var obj = {
    tagClass: tagClass,
    type: type,
    constructed: constructed,
    composed: constructed || forge.util.isArray(value),
    value: value
  };
  if(options && 'bitStringContents' in options) {
    // TODO: copy byte buffer if it's a buffer not a string
    obj.bitStringContents = options.bitStringContents;
    // TODO: add readonly flag to avoid this overhead
    // save copy to detect changes
    obj.original = asn1.copy(obj);
  }
  return obj;
};

/**
 * Copies an asn1 object.
 *
 * @param obj the asn1 object.
 * @param [options] copy options:
 *          [excludeBitStringContents] true to not copy bitStringContents
 *
 * @return the a copy of the asn1 object.
 */
asn1.copy = function(obj, options) {
  var copy;

  if(forge.util.isArray(obj)) {
    copy = [];
    for(var i = 0; i < obj.length; ++i) {
      copy.push(asn1.copy(obj[i], options));
    }
    return copy;
  }

  if(typeof obj === 'string') {
    // TODO: copy byte buffer if it's a buffer not a string
    return obj;
  }

  copy = {
    tagClass: obj.tagClass,
    type: obj.type,
    constructed: obj.constructed,
    composed: obj.composed,
    value: asn1.copy(obj.value, options)
  };
  if(options && !options.excludeBitStringContents) {
    // TODO: copy byte buffer if it's a buffer not a string
    copy.bitStringContents = obj.bitStringContents;
  }
  return copy;
};

/**
 * Compares asn1 objects for equality.
 *
 * Note this function does not run in constant time.
 *
 * @param obj1 the first asn1 object.
 * @param obj2 the second asn1 object.
 * @param [options] compare options:
 *          [includeBitStringContents] true to compare bitStringContents
 *
 * @return true if the asn1 objects are equal.
 */
asn1.equals = function(obj1, obj2, options) {
  if(forge.util.isArray(obj1)) {
    if(!forge.util.isArray(obj2)) {
      return false;
    }
    if(obj1.length !== obj2.length) {
      return false;
    }
    for(var i = 0; i < obj1.length; ++i) {
      if(!asn1.equals(obj1[i], obj2[i])) {
        return false;
      }
    }
    return true;
  }

  if(typeof obj1 !== typeof obj2) {
    return false;
  }

  if(typeof obj1 === 'string') {
    return obj1 === obj2;
  }

  var equal = obj1.tagClass === obj2.tagClass &&
    obj1.type === obj2.type &&
    obj1.constructed === obj2.constructed &&
    obj1.composed === obj2.composed &&
    asn1.equals(obj1.value, obj2.value);
  if(options && options.includeBitStringContents) {
    equal = equal && (obj1.bitStringContents === obj2.bitStringContents);
  }

  return equal;
};

/**
 * Gets the length of a BER-encoded ASN.1 value.
 *
 * In case the length is not specified, undefined is returned.
 *
 * @param b the BER-encoded ASN.1 byte buffer, starting with the first
 *          length byte.
 *
 * @return the length of the BER-encoded ASN.1 value or undefined.
 */
asn1.getBerValueLength = function(b) {
  // TODO: move this function and related DER/BER functions to a der.js
  // file; better abstract ASN.1 away from der/ber.
  var b2 = b.getByte();
  if(b2 === 0x80) {
    return undefined;
  }

  // see if the length is "short form" or "long form" (bit 8 set)
  var length;
  var longForm = b2 & 0x80;
  if(!longForm) {
    // length is just the first byte
    length = b2;
  } else {
    // the number of bytes the length is specified in bits 7 through 1
    // and each length byte is in big-endian base-256
    length = b.getInt((b2 & 0x7F) << 3);
  }
  return length;
};

/**
 * Check if the byte buffer has enough bytes. Throws an Error if not.
 *
 * @param bytes the byte buffer to parse from.
 * @param remaining the bytes remaining in the current parsing state.
 * @param n the number of bytes the buffer must have.
 */
function _checkBufferLength(bytes, remaining, n) {
  if(n > remaining) {
    var error = new Error('Too few bytes to parse DER.');
    error.available = bytes.length();
    error.remaining = remaining;
    error.requested = n;
    throw error;
  }
}

/**
 * Gets the length of a BER-encoded ASN.1 value.
 *
 * In case the length is not specified, undefined is returned.
 *
 * @param bytes the byte buffer to parse from.
 * @param remaining the bytes remaining in the current parsing state.
 *
 * @return the length of the BER-encoded ASN.1 value or undefined.
 */
var _getValueLength = function(bytes, remaining) {
  // TODO: move this function and related DER/BER functions to a der.js
  // file; better abstract ASN.1 away from der/ber.
  // fromDer already checked that this byte exists
  var b2 = bytes.getByte();
  remaining--;
  if(b2 === 0x80) {
    return undefined;
  }

  // see if the length is "short form" or "long form" (bit 8 set)
  var length;
  var longForm = b2 & 0x80;
  if(!longForm) {
    // length is just the first byte
    length = b2;
  } else {
    // the number of bytes the length is specified in bits 7 through 1
    // and each length byte is in big-endian base-256
    var longFormBytes = b2 & 0x7F;
    _checkBufferLength(bytes, remaining, longFormBytes);
    length = bytes.getInt(longFormBytes << 3);
  }
  // FIXME: this will only happen for 32 bit getInt with high bit set
  if(length < 0) {
    throw new Error('Negative length: ' + length);
  }
  return length;
};

/**
 * Parses an asn1 object from a byte buffer in DER format.
 *
 * @param bytes the byte buffer to parse from.
 * @param [strict] true to be strict when checking value lengths, false to
 *          allow truncated values (default: true).
 * @param [options] object with options or boolean strict flag
 *          [strict] true to be strict when checking value lengths, false to
 *            allow truncated values (default: true).
 *          [decodeBitStrings] true to attempt to decode the content of
 *            BIT STRINGs (not OCTET STRINGs) using strict mode. Note that
 *            without schema support to understand the data context this can
 *            erroneously decode values that happen to be valid ASN.1. This
 *            flag will be deprecated or removed as soon as schema support is
 *            available. (default: true)
 *
 * @return the parsed asn1 object.
 */
asn1.fromDer = function(bytes, options) {
  if(options === undefined) {
    options = {
      strict: true,
      decodeBitStrings: true
    };
  }
  if(typeof options === 'boolean') {
    options = {
      strict: options,
      decodeBitStrings: true
    };
  }
  if(!('strict' in options)) {
    options.strict = true;
  }
  if(!('decodeBitStrings' in options)) {
    options.decodeBitStrings = true;
  }

  // wrap in buffer if needed
  if(typeof bytes === 'string') {
    bytes = forge.util.createBuffer(bytes);
  }

  return _fromDer(bytes, bytes.length(), 0, options);
};

/**
 * Internal function to parse an asn1 object from a byte buffer in DER format.
 *
 * @param bytes the byte buffer to parse from.
 * @param remaining the number of bytes remaining for this chunk.
 * @param depth the current parsing depth.
 * @param options object with same options as fromDer().
 *
 * @return the parsed asn1 object.
 */
function _fromDer(bytes, remaining, depth, options) {
  // temporary storage for consumption calculations
  var start;

  // minimum length for ASN.1 DER structure is 2
  _checkBufferLength(bytes, remaining, 2);

  // get the first byte
  var b1 = bytes.getByte();
  // consumed one byte
  remaining--;

  // get the tag class
  var tagClass = (b1 & 0xC0);

  // get the type (bits 1-5)
  var type = b1 & 0x1F;

  // get the variable value length and adjust remaining bytes
  start = bytes.length();
  var length = _getValueLength(bytes, remaining);
  remaining -= start - bytes.length();

  // ensure there are enough bytes to get the value
  if(length !== undefined && length > remaining) {
    if(options.strict) {
      var error = new Error('Too few bytes to read ASN.1 value.');
      error.available = bytes.length();
      error.remaining = remaining;
      error.requested = length;
      throw error;
    }
    // Note: be lenient with truncated values and use remaining state bytes
    length = remaining;
  }

  // value storage
  var value;
  // possible BIT STRING contents storage
  var bitStringContents;

  // constructed flag is bit 6 (32 = 0x20) of the first byte
  var constructed = ((b1 & 0x20) === 0x20);
  if(constructed) {
    // parse child asn1 objects from the value
    value = [];
    if(length === undefined) {
      // asn1 object of indefinite length, read until end tag
      for(;;) {
        _checkBufferLength(bytes, remaining, 2);
        if(bytes.bytes(2) === String.fromCharCode(0, 0)) {
          bytes.getBytes(2);
          remaining -= 2;
          break;
        }
        start = bytes.length();
        value.push(_fromDer(bytes, remaining, depth + 1, options));
        remaining -= start - bytes.length();
      }
    } else {
      // parsing asn1 object of definite length
      while(length > 0) {
        start = bytes.length();
        value.push(_fromDer(bytes, length, depth + 1, options));
        remaining -= start - bytes.length();
        length -= start - bytes.length();
      }
    }
  }

  // if a BIT STRING, save the contents including padding
  if(value === undefined && tagClass === asn1.Class.UNIVERSAL &&
    type === asn1.Type.BITSTRING) {
    bitStringContents = bytes.bytes(length);
  }

  // determine if a non-constructed value should be decoded as a composed
  // value that contains other ASN.1 objects. BIT STRINGs (and OCTET STRINGs)
  // can be used this way.
  if(value === undefined && options.decodeBitStrings &&
    tagClass === asn1.Class.UNIVERSAL &&
    // FIXME: OCTET STRINGs not yet supported here
    // .. other parts of forge expect to decode OCTET STRINGs manually
    (type === asn1.Type.BITSTRING /*|| type === asn1.Type.OCTETSTRING*/) &&
    length > 1) {
    // save read position
    var savedRead = bytes.read;
    var savedRemaining = remaining;
    var unused = 0;
    if(type === asn1.Type.BITSTRING) {
      /* The first octet gives the number of bits by which the length of the
        bit string is less than the next multiple of eight (this is called
        the "number of unused bits").

        The second and following octets give the value of the bit string
        converted to an octet string. */
      _checkBufferLength(bytes, remaining, 1);
      unused = bytes.getByte();
      remaining--;
    }
    // if all bits are used, maybe the BIT/OCTET STRING holds ASN.1 objs
    if(unused === 0) {
      try {
        // attempt to parse child asn1 object from the value
        // (stored in array to signal composed value)
        start = bytes.length();
        var subOptions = {
          // enforce strict mode to avoid parsing ASN.1 from plain data
          verbose: options.verbose,
          strict: true,
          decodeBitStrings: true
        };
        var composed = _fromDer(bytes, remaining, depth + 1, subOptions);
        var used = start - bytes.length();
        remaining -= used;
        if(type == asn1.Type.BITSTRING) {
          used++;
        }

        // if the data all decoded and the class indicates UNIVERSAL or
        // CONTEXT_SPECIFIC then assume we've got an encapsulated ASN.1 object
        var tc = composed.tagClass;
        if(used === length &&
          (tc === asn1.Class.UNIVERSAL || tc === asn1.Class.CONTEXT_SPECIFIC)) {
          value = [composed];
        }
      } catch(ex) {
      }
    }
    if(value === undefined) {
      // restore read position
      bytes.read = savedRead;
      remaining = savedRemaining;
    }
  }

  if(value === undefined) {
    // asn1 not constructed or composed, get raw value
    // TODO: do DER to OID conversion and vice-versa in .toDer?

    if(length === undefined) {
      if(options.strict) {
        throw new Error('Non-constructed ASN.1 object of indefinite length.');
      }
      // be lenient and use remaining state bytes
      length = remaining;
    }

    if(type === asn1.Type.BMPSTRING) {
      value = '';
      for(; length > 0; length -= 2) {
        _checkBufferLength(bytes, remaining, 2);
        value += String.fromCharCode(bytes.getInt16());
        remaining -= 2;
      }
    } else {
      value = bytes.getBytes(length);
    }
  }

  // add BIT STRING contents if available
  var asn1Options = bitStringContents === undefined ? null : {
    bitStringContents: bitStringContents
  };

  // create and return asn1 object
  return asn1.create(tagClass, type, constructed, value, asn1Options);
}

/**
 * Converts the given asn1 object to a buffer of bytes in DER format.
 *
 * @param asn1 the asn1 object to convert to bytes.
 *
 * @return the buffer of bytes.
 */
asn1.toDer = function(obj) {
  var bytes = forge.util.createBuffer();

  // build the first byte
  var b1 = obj.tagClass | obj.type;

  // for storing the ASN.1 value
  var value = forge.util.createBuffer();

  // use BIT STRING contents if available and data not changed
  var useBitStringContents = false;
  if('bitStringContents' in obj) {
    useBitStringContents = true;
    if(obj.original) {
      useBitStringContents = asn1.equals(obj, obj.original);
    }
  }

  if(useBitStringContents) {
    value.putBytes(obj.bitStringContents);
  } else if(obj.composed) {
    // if composed, use each child asn1 object's DER bytes as value
    // turn on 6th bit (0x20 = 32) to indicate asn1 is constructed
    // from other asn1 objects
    if(obj.constructed) {
      b1 |= 0x20;
    } else {
      // type is a bit string, add unused bits of 0x00
      value.putByte(0x00);
    }

    // add all of the child DER bytes together
    for(var i = 0; i < obj.value.length; ++i) {
      if(obj.value[i] !== undefined) {
        value.putBuffer(asn1.toDer(obj.value[i]));
      }
    }
  } else {
    // use asn1.value directly
    if(obj.type === asn1.Type.BMPSTRING) {
      for(var i = 0; i < obj.value.length; ++i) {
        value.putInt16(obj.value.charCodeAt(i));
      }
    } else {
      // ensure integer is minimally-encoded
      // TODO: should all leading bytes be stripped vs just one?
      // .. ex '00 00 01' => '01'?
      if(obj.type === asn1.Type.INTEGER &&
        obj.value.length > 1 &&
        // leading 0x00 for positive integer
        ((obj.value.charCodeAt(0) === 0 &&
        (obj.value.charCodeAt(1) & 0x80) === 0) ||
        // leading 0xFF for negative integer
        (obj.value.charCodeAt(0) === 0xFF &&
        (obj.value.charCodeAt(1) & 0x80) === 0x80))) {
        value.putBytes(obj.value.substr(1));
      } else {
        value.putBytes(obj.value);
      }
    }
  }

  // add tag byte
  bytes.putByte(b1);

  // use "short form" encoding
  if(value.length() <= 127) {
    // one byte describes the length
    // bit 8 = 0 and bits 7-1 = length
    bytes.putByte(value.length() & 0x7F);
  } else {
    // use "long form" encoding
    // 2 to 127 bytes describe the length
    // first byte: bit 8 = 1 and bits 7-1 = # of additional bytes
    // other bytes: length in base 256, big-endian
    var len = value.length();
    var lenBytes = '';
    do {
      lenBytes += String.fromCharCode(len & 0xFF);
      len = len >>> 8;
    } while(len > 0);

    // set first byte to # bytes used to store the length and turn on
    // bit 8 to indicate long-form length is used
    bytes.putByte(lenBytes.length | 0x80);

    // concatenate length bytes in reverse since they were generated
    // little endian and we need big endian
    for(var i = lenBytes.length - 1; i >= 0; --i) {
      bytes.putByte(lenBytes.charCodeAt(i));
    }
  }

  // concatenate value bytes
  bytes.putBuffer(value);
  return bytes;
};

/**
 * Converts an OID dot-separated string to a byte buffer. The byte buffer
 * contains only the DER-encoded value, not any tag or length bytes.
 *
 * @param oid the OID dot-separated string.
 *
 * @return the byte buffer.
 */
asn1.oidToDer = function(oid) {
  // split OID into individual values
  var values = oid.split('.');
  var bytes = forge.util.createBuffer();

  // first byte is 40 * value1 + value2
  bytes.putByte(40 * parseInt(values[0], 10) + parseInt(values[1], 10));
  // other bytes are each value in base 128 with 8th bit set except for
  // the last byte for each value
  var last, valueBytes, value, b;
  for(var i = 2; i < values.length; ++i) {
    // produce value bytes in reverse because we don't know how many
    // bytes it will take to store the value
    last = true;
    valueBytes = [];
    value = parseInt(values[i], 10);
    do {
      b = value & 0x7F;
      value = value >>> 7;
      // if value is not last, then turn on 8th bit
      if(!last) {
        b |= 0x80;
      }
      valueBytes.push(b);
      last = false;
    } while(value > 0);

    // add value bytes in reverse (needs to be in big endian)
    for(var n = valueBytes.length - 1; n >= 0; --n) {
      bytes.putByte(valueBytes[n]);
    }
  }

  return bytes;
};

/**
 * Converts a DER-encoded byte buffer to an OID dot-separated string. The
 * byte buffer should contain only the DER-encoded value, not any tag or
 * length bytes.
 *
 * @param bytes the byte buffer.
 *
 * @return the OID dot-separated string.
 */
asn1.derToOid = function(bytes) {
  var oid;

  // wrap in buffer if needed
  if(typeof bytes === 'string') {
    bytes = forge.util.createBuffer(bytes);
  }

  // first byte is 40 * value1 + value2
  var b = bytes.getByte();
  oid = Math.floor(b / 40) + '.' + (b % 40);

  // other bytes are each value in base 128 with 8th bit set except for
  // the last byte for each value
  var value = 0;
  while(bytes.length() > 0) {
    b = bytes.getByte();
    value = value << 7;
    // not the last byte for the value
    if(b & 0x80) {
      value += b & 0x7F;
    } else {
      // last byte
      oid += '.' + (value + b);
      value = 0;
    }
  }

  return oid;
};

/**
 * Converts a UTCTime value to a date.
 *
 * Note: GeneralizedTime has 4 digits for the year and is used for X.509
 * dates past 2049. Parsing that structure hasn't been implemented yet.
 *
 * @param utc the UTCTime value to convert.
 *
 * @return the date.
 */
asn1.utcTimeToDate = function(utc) {
  /* The following formats can be used:

    YYMMDDhhmmZ
    YYMMDDhhmm+hh'mm'
    YYMMDDhhmm-hh'mm'
    YYMMDDhhmmssZ
    YYMMDDhhmmss+hh'mm'
    YYMMDDhhmmss-hh'mm'

    Where:

    YY is the least significant two digits of the year
    MM is the month (01 to 12)
    DD is the day (01 to 31)
    hh is the hour (00 to 23)
    mm are the minutes (00 to 59)
    ss are the seconds (00 to 59)
    Z indicates that local time is GMT, + indicates that local time is
    later than GMT, and - indicates that local time is earlier than GMT
    hh' is the absolute value of the offset from GMT in hours
    mm' is the absolute value of the offset from GMT in minutes */
  var date = new Date();

  // if YY >= 50 use 19xx, if YY < 50 use 20xx
  var year = parseInt(utc.substr(0, 2), 10);
  year = (year >= 50) ? 1900 + year : 2000 + year;
  var MM = parseInt(utc.substr(2, 2), 10) - 1; // use 0-11 for month
  var DD = parseInt(utc.substr(4, 2), 10);
  var hh = parseInt(utc.substr(6, 2), 10);
  var mm = parseInt(utc.substr(8, 2), 10);
  var ss = 0;

  // not just YYMMDDhhmmZ
  if(utc.length > 11) {
    // get character after minutes
    var c = utc.charAt(10);
    var end = 10;

    // see if seconds are present
    if(c !== '+' && c !== '-') {
      // get seconds
      ss = parseInt(utc.substr(10, 2), 10);
      end += 2;
    }
  }

  // update date
  date.setUTCFullYear(year, MM, DD);
  date.setUTCHours(hh, mm, ss, 0);

  if(end) {
    // get +/- after end of time
    c = utc.charAt(end);
    if(c === '+' || c === '-') {
      // get hours+minutes offset
      var hhoffset = parseInt(utc.substr(end + 1, 2), 10);
      var mmoffset = parseInt(utc.substr(end + 4, 2), 10);

      // calculate offset in milliseconds
      var offset = hhoffset * 60 + mmoffset;
      offset *= 60000;

      // apply offset
      if(c === '+') {
        date.setTime(+date - offset);
      } else {
        date.setTime(+date + offset);
      }
    }
  }

  return date;
};

/**
 * Converts a GeneralizedTime value to a date.
 *
 * @param gentime the GeneralizedTime value to convert.
 *
 * @return the date.
 */
asn1.generalizedTimeToDate = function(gentime) {
  /* The following formats can be used:

    YYYYMMDDHHMMSS
    YYYYMMDDHHMMSS.fff
    YYYYMMDDHHMMSSZ
    YYYYMMDDHHMMSS.fffZ
    YYYYMMDDHHMMSS+hh'mm'
    YYYYMMDDHHMMSS.fff+hh'mm'
    YYYYMMDDHHMMSS-hh'mm'
    YYYYMMDDHHMMSS.fff-hh'mm'

    Where:

    YYYY is the year
    MM is the month (01 to 12)
    DD is the day (01 to 31)
    hh is the hour (00 to 23)
    mm are the minutes (00 to 59)
    ss are the seconds (00 to 59)
    .fff is the second fraction, accurate to three decimal places
    Z indicates that local time is GMT, + indicates that local time is
    later than GMT, and - indicates that local time is earlier than GMT
    hh' is the absolute value of the offset from GMT in hours
    mm' is the absolute value of the offset from GMT in minutes */
  var date = new Date();

  var YYYY = parseInt(gentime.substr(0, 4), 10);
  var MM = parseInt(gentime.substr(4, 2), 10) - 1; // use 0-11 for month
  var DD = parseInt(gentime.substr(6, 2), 10);
  var hh = parseInt(gentime.substr(8, 2), 10);
  var mm = parseInt(gentime.substr(10, 2), 10);
  var ss = parseInt(gentime.substr(12, 2), 10);
  var fff = 0;
  var offset = 0;
  var isUTC = false;

  if(gentime.charAt(gentime.length - 1) === 'Z') {
    isUTC = true;
  }

  var end = gentime.length - 5, c = gentime.charAt(end);
  if(c === '+' || c === '-') {
    // get hours+minutes offset
    var hhoffset = parseInt(gentime.substr(end + 1, 2), 10);
    var mmoffset = parseInt(gentime.substr(end + 4, 2), 10);

    // calculate offset in milliseconds
    offset = hhoffset * 60 + mmoffset;
    offset *= 60000;

    // apply offset
    if(c === '+') {
      offset *= -1;
    }

    isUTC = true;
  }

  // check for second fraction
  if(gentime.charAt(14) === '.') {
    fff = parseFloat(gentime.substr(14), 10) * 1000;
  }

  if(isUTC) {
    date.setUTCFullYear(YYYY, MM, DD);
    date.setUTCHours(hh, mm, ss, fff);

    // apply offset
    date.setTime(+date + offset);
  } else {
    date.setFullYear(YYYY, MM, DD);
    date.setHours(hh, mm, ss, fff);
  }

  return date;
};

/**
 * Converts a date to a UTCTime value.
 *
 * Note: GeneralizedTime has 4 digits for the year and is used for X.509
 * dates past 2049. Converting to a GeneralizedTime hasn't been
 * implemented yet.
 *
 * @param date the date to convert.
 *
 * @return the UTCTime value.
 */
asn1.dateToUtcTime = function(date) {
  // TODO: validate; currently assumes proper format
  if(typeof date === 'string') {
    return date;
  }

  var rval = '';

  // create format YYMMDDhhmmssZ
  var format = [];
  format.push(('' + date.getUTCFullYear()).substr(2));
  format.push('' + (date.getUTCMonth() + 1));
  format.push('' + date.getUTCDate());
  format.push('' + date.getUTCHours());
  format.push('' + date.getUTCMinutes());
  format.push('' + date.getUTCSeconds());

  // ensure 2 digits are used for each format entry
  for(var i = 0; i < format.length; ++i) {
    if(format[i].length < 2) {
      rval += '0';
    }
    rval += format[i];
  }
  rval += 'Z';

  return rval;
};

/**
 * Converts a date to a GeneralizedTime value.
 *
 * @param date the date to convert.
 *
 * @return the GeneralizedTime value as a string.
 */
asn1.dateToGeneralizedTime = function(date) {
  // TODO: validate; currently assumes proper format
  if(typeof date === 'string') {
    return date;
  }

  var rval = '';

  // create format YYYYMMDDHHMMSSZ
  var format = [];
  format.push('' + date.getUTCFullYear());
  format.push('' + (date.getUTCMonth() + 1));
  format.push('' + date.getUTCDate());
  format.push('' + date.getUTCHours());
  format.push('' + date.getUTCMinutes());
  format.push('' + date.getUTCSeconds());

  // ensure 2 digits are used for each format entry
  for(var i = 0; i < format.length; ++i) {
    if(format[i].length < 2) {
      rval += '0';
    }
    rval += format[i];
  }
  rval += 'Z';

  return rval;
};

/**
 * Converts a javascript integer to a DER-encoded byte buffer to be used
 * as the value for an INTEGER type.
 *
 * @param x the integer.
 *
 * @return the byte buffer.
 */
asn1.integerToDer = function(x) {
  var rval = forge.util.createBuffer();
  if(x >= -0x80 && x < 0x80) {
    return rval.putSignedInt(x, 8);
  }
  if(x >= -0x8000 && x < 0x8000) {
    return rval.putSignedInt(x, 16);
  }
  if(x >= -0x800000 && x < 0x800000) {
    return rval.putSignedInt(x, 24);
  }
  if(x >= -0x80000000 && x < 0x80000000) {
    return rval.putSignedInt(x, 32);
  }
  var error = new Error('Integer too large; max is 32-bits.');
  error.integer = x;
  throw error;
};

/**
 * Converts a DER-encoded byte buffer to a javascript integer. This is
 * typically used to decode the value of an INTEGER type.
 *
 * @param bytes the byte buffer.
 *
 * @return the integer.
 */
asn1.derToInteger = function(bytes) {
  // wrap in buffer if needed
  if(typeof bytes === 'string') {
    bytes = forge.util.createBuffer(bytes);
  }

  var n = bytes.length() * 8;
  if(n > 32) {
    throw new Error('Integer too large; max is 32-bits.');
  }
  return bytes.getSignedInt(n);
};

/**
 * Validates that the given ASN.1 object is at least a super set of the
 * given ASN.1 structure. Only tag classes and types are checked. An
 * optional map may also be provided to capture ASN.1 values while the
 * structure is checked.
 *
 * To capture an ASN.1 value, set an object in the validator's 'capture'
 * parameter to the key to use in the capture map. To capture the full
 * ASN.1 object, specify 'captureAsn1'. To capture BIT STRING bytes, including
 * the leading unused bits counter byte, specify 'captureBitStringContents'.
 * To capture BIT STRING bytes, without the leading unused bits counter byte,
 * specify 'captureBitStringValue'.
 *
 * Objects in the validator may set a field 'optional' to true to indicate
 * that it isn't necessary to pass validation.
 *
 * @param obj the ASN.1 object to validate.
 * @param v the ASN.1 structure validator.
 * @param capture an optional map to capture values in.
 * @param errors an optional array for storing validation errors.
 *
 * @return true on success, false on failure.
 */
asn1.validate = function(obj, v, capture, errors) {
  var rval = false;

  // ensure tag class and type are the same if specified
  if((obj.tagClass === v.tagClass || typeof(v.tagClass) === 'undefined') &&
    (obj.type === v.type || typeof(v.type) === 'undefined')) {
    // ensure constructed flag is the same if specified
    if(obj.constructed === v.constructed ||
      typeof(v.constructed) === 'undefined') {
      rval = true;

      // handle sub values
      if(v.value && forge.util.isArray(v.value)) {
        var j = 0;
        for(var i = 0; rval && i < v.value.length; ++i) {
          rval = v.value[i].optional || false;
          if(obj.value[j]) {
            rval = asn1.validate(obj.value[j], v.value[i], capture, errors);
            if(rval) {
              ++j;
            } else if(v.value[i].optional) {
              rval = true;
            }
          }
          if(!rval && errors) {
            errors.push(
              '[' + v.name + '] ' +
              'Tag class "' + v.tagClass + '", type "' +
              v.type + '" expected value length "' +
              v.value.length + '", got "' +
              obj.value.length + '"');
          }
        }
      }

      if(rval && capture) {
        if(v.capture) {
          capture[v.capture] = obj.value;
        }
        if(v.captureAsn1) {
          capture[v.captureAsn1] = obj;
        }
        if(v.captureBitStringContents && 'bitStringContents' in obj) {
          capture[v.captureBitStringContents] = obj.bitStringContents;
        }
        if(v.captureBitStringValue && 'bitStringContents' in obj) {
          var value;
          if(obj.bitStringContents.length < 2) {
            capture[v.captureBitStringValue] = '';
          } else {
            // FIXME: support unused bits with data shifting
            var unused = obj.bitStringContents.charCodeAt(0);
            if(unused !== 0) {
              throw new Error(
                'captureBitStringValue only supported for zero unused bits');
            }
            capture[v.captureBitStringValue] = obj.bitStringContents.slice(1);
          }
        }
      }
    } else if(errors) {
      errors.push(
        '[' + v.name + '] ' +
        'Expected constructed "' + v.constructed + '", got "' +
        obj.constructed + '"');
    }
  } else if(errors) {
    if(obj.tagClass !== v.tagClass) {
      errors.push(
        '[' + v.name + '] ' +
        'Expected tag class "' + v.tagClass + '", got "' +
        obj.tagClass + '"');
    }
    if(obj.type !== v.type) {
      errors.push(
        '[' + v.name + '] ' +
        'Expected type "' + v.type + '", got "' + obj.type + '"');
    }
  }
  return rval;
};

// regex for testing for non-latin characters
var _nonLatinRegex = /[^\\u0000-\\u00ff]/;

/**
 * Pretty prints an ASN.1 object to a string.
 *
 * @param obj the object to write out.
 * @param level the level in the tree.
 * @param indentation the indentation to use.
 *
 * @return the string.
 */
asn1.prettyPrint = function(obj, level, indentation) {
  var rval = '';

  // set default level and indentation
  level = level || 0;
  indentation = indentation || 2;

  // start new line for deep levels
  if(level > 0) {
    rval += '\n';
  }

  // create indent
  var indent = '';
  for(var i = 0; i < level * indentation; ++i) {
    indent += ' ';
  }

  // print class:type
  rval += indent + 'Tag: ';
  switch(obj.tagClass) {
  case asn1.Class.UNIVERSAL:
    rval += 'Universal:';
    break;
  case asn1.Class.APPLICATION:
    rval += 'Application:';
    break;
  case asn1.Class.CONTEXT_SPECIFIC:
    rval += 'Context-Specific:';
    break;
  case asn1.Class.PRIVATE:
    rval += 'Private:';
    break;
  }

  if(obj.tagClass === asn1.Class.UNIVERSAL) {
    rval += obj.type;

    // known types
    switch(obj.type) {
    case asn1.Type.NONE:
      rval += ' (None)';
      break;
    case asn1.Type.BOOLEAN:
      rval += ' (Boolean)';
      break;
    case asn1.Type.INTEGER:
      rval += ' (Integer)';
      break;
    case asn1.Type.BITSTRING:
      rval += ' (Bit string)';
      break;
    case asn1.Type.OCTETSTRING:
      rval += ' (Octet string)';
      break;
    case asn1.Type.NULL:
      rval += ' (Null)';
      break;
    case asn1.Type.OID:
      rval += ' (Object Identifier)';
      break;
    case asn1.Type.ODESC:
      rval += ' (Object Descriptor)';
      break;
    case asn1.Type.EXTERNAL:
      rval += ' (External or Instance of)';
      break;
    case asn1.Type.REAL:
      rval += ' (Real)';
      break;
    case asn1.Type.ENUMERATED:
      rval += ' (Enumerated)';
      break;
    case asn1.Type.EMBEDDED:
      rval += ' (Embedded PDV)';
      break;
    case asn1.Type.UTF8:
      rval += ' (UTF8)';
      break;
    case asn1.Type.ROID:
      rval += ' (Relative Object Identifier)';
      break;
    case asn1.Type.SEQUENCE:
      rval += ' (Sequence)';
      break;
    case asn1.Type.SET:
      rval += ' (Set)';
      break;
    case asn1.Type.PRINTABLESTRING:
      rval += ' (Printable String)';
      break;
    case asn1.Type.IA5String:
      rval += ' (IA5String (ASCII))';
      break;
    case asn1.Type.UTCTIME:
      rval += ' (UTC time)';
      break;
    case asn1.Type.GENERALIZEDTIME:
      rval += ' (Generalized time)';
      break;
    case asn1.Type.BMPSTRING:
      rval += ' (BMP String)';
      break;
    }
  } else {
    rval += obj.type;
  }

  rval += '\n';
  rval += indent + 'Constructed: ' + obj.constructed + '\n';

  if(obj.composed) {
    var subvalues = 0;
    var sub = '';
    for(var i = 0; i < obj.value.length; ++i) {
      if(obj.value[i] !== undefined) {
        subvalues += 1;
        sub += asn1.prettyPrint(obj.value[i], level + 1, indentation);
        if((i + 1) < obj.value.length) {
          sub += ',';
        }
      }
    }
    rval += indent + 'Sub values: ' + subvalues + sub;
  } else {
    rval += indent + 'Value: ';
    if(obj.type === asn1.Type.OID) {
      var oid = asn1.derToOid(obj.value);
      rval += oid;
      if(forge.pki && forge.pki.oids) {
        if(oid in forge.pki.oids) {
          rval += ' (' + forge.pki.oids[oid] + ') ';
        }
      }
    }
    if(obj.type === asn1.Type.INTEGER) {
      try {
        rval += asn1.derToInteger(obj.value);
      } catch(ex) {
        rval += '0x' + forge.util.bytesToHex(obj.value);
      }
    } else if(obj.type === asn1.Type.BITSTRING) {
      // TODO: shift bits as needed to display without padding
      if(obj.value.length > 1) {
        // remove unused bits field
        rval += '0x' + forge.util.bytesToHex(obj.value.slice(1));
      } else {
        rval += '(none)';
      }
      // show unused bit count
      if(obj.value.length > 0) {
        var unused = obj.value.charCodeAt(0);
        if(unused == 1) {
          rval += ' (1 unused bit shown)';
        } else if(unused > 1) {
          rval += ' (' + unused + ' unused bits shown)';
        }
      }
    } else if(obj.type === asn1.Type.OCTETSTRING) {
      if(!_nonLatinRegex.test(obj.value)) {
        rval += '(' + obj.value + ') ';
      }
      rval += '0x' + forge.util.bytesToHex(obj.value);
    } else if(obj.type === asn1.Type.UTF8) {
      rval += forge.util.decodeUtf8(obj.value);
    } else if(obj.type === asn1.Type.PRINTABLESTRING ||
      obj.type === asn1.Type.IA5String) {
      rval += obj.value;
    } else if(_nonLatinRegex.test(obj.value)) {
      rval += '0x' + forge.util.bytesToHex(obj.value);
    } else if(obj.value.length === 0) {
      rval += '[null]';
    } else {
      rval += obj.value;
    }
  }

  return rval;
};


/***/ }),

/***/ "./node_modules/node-forge/lib/baseN.js":
/*!**********************************************!*\
  !*** ./node_modules/node-forge/lib/baseN.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Base-N/Base-X encoding/decoding functions.
 *
 * Original implementation from base-x:
 * https://github.com/cryptocoinjs/base-x
 *
 * Which is MIT licensed:
 *
 * The MIT License (MIT)
 *
 * Copyright base-x contributors (c) 2016
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
var api = {};
module.exports = api;

// baseN alphabet indexes
var _reverseAlphabets = {};

/**
 * BaseN-encodes a Uint8Array using the given alphabet.
 *
 * @param input the Uint8Array to encode.
 * @param maxline the maximum number of encoded characters per line to use,
 *          defaults to none.
 *
 * @return the baseN-encoded output string.
 */
api.encode = function(input, alphabet, maxline) {
  if(typeof alphabet !== 'string') {
    throw new TypeError('"alphabet" must be a string.');
  }
  if(maxline !== undefined && typeof maxline !== 'number') {
    throw new TypeError('"maxline" must be a number.');
  }

  var output = '';

  if(!(input instanceof Uint8Array)) {
    // assume forge byte buffer
    output = _encodeWithByteBuffer(input, alphabet);
  } else {
    var i = 0;
    var base = alphabet.length;
    var first = alphabet.charAt(0);
    var digits = [0];
    for(i = 0; i < input.length; ++i) {
      for(var j = 0, carry = input[i]; j < digits.length; ++j) {
        carry += digits[j] << 8;
        digits[j] = carry % base;
        carry = (carry / base) | 0;
      }

      while(carry > 0) {
        digits.push(carry % base);
        carry = (carry / base) | 0;
      }
    }

    // deal with leading zeros
    for(i = 0; input[i] === 0 && i < input.length - 1; ++i) {
      output += first;
    }
    // convert digits to a string
    for(i = digits.length - 1; i >= 0; --i) {
      output += alphabet[digits[i]];
    }
  }

  if(maxline) {
    var regex = new RegExp('.{1,' + maxline + '}', 'g');
    output = output.match(regex).join('\r\n');
  }

  return output;
};

/**
 * Decodes a baseN-encoded (using the given alphabet) string to a
 * Uint8Array.
 *
 * @param input the baseN-encoded input string.
 *
 * @return the Uint8Array.
 */
api.decode = function(input, alphabet) {
  if(typeof input !== 'string') {
    throw new TypeError('"input" must be a string.');
  }
  if(typeof alphabet !== 'string') {
    throw new TypeError('"alphabet" must be a string.');
  }

  var table = _reverseAlphabets[alphabet];
  if(!table) {
    // compute reverse alphabet
    table = _reverseAlphabets[alphabet] = [];
    for(var i = 0; i < alphabet.length; ++i) {
      table[alphabet.charCodeAt(i)] = i;
    }
  }

  // remove whitespace characters
  input = input.replace(/\s/g, '');

  var base = alphabet.length;
  var first = alphabet.charAt(0);
  var bytes = [0];
  for(var i = 0; i < input.length; i++) {
    var value = table[input.charCodeAt(i)];
    if(value === undefined) {
      return;
    }

    for(var j = 0, carry = value; j < bytes.length; ++j) {
      carry += bytes[j] * base;
      bytes[j] = carry & 0xff;
      carry >>= 8;
    }

    while(carry > 0) {
      bytes.push(carry & 0xff);
      carry >>= 8;
    }
  }

  // deal with leading zeros
  for(var k = 0; input[k] === first && k < input.length - 1; ++k) {
    bytes.push(0);
  }

  if(typeof Buffer !== 'undefined') {
    return Buffer.from(bytes.reverse());
  }

  return new Uint8Array(bytes.reverse());
};

function _encodeWithByteBuffer(input, alphabet) {
  var i = 0;
  var base = alphabet.length;
  var first = alphabet.charAt(0);
  var digits = [0];
  for(i = 0; i < input.length(); ++i) {
    for(var j = 0, carry = input.at(i); j < digits.length; ++j) {
      carry += digits[j] << 8;
      digits[j] = carry % base;
      carry = (carry / base) | 0;
    }

    while(carry > 0) {
      digits.push(carry % base);
      carry = (carry / base) | 0;
    }
  }

  var output = '';

  // deal with leading zeros
  for(i = 0; input.at(i) === 0 && i < input.length() - 1; ++i) {
    output += first;
  }
  // convert digits to a string
  for(i = digits.length - 1; i >= 0; --i) {
    output += alphabet[digits[i]];
  }

  return output;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/node-forge/lib/cipher.js":
/*!***********************************************!*\
  !*** ./node_modules/node-forge/lib/cipher.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Cipher base API.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2014 Digital Bazaar, Inc.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

module.exports = forge.cipher = forge.cipher || {};

// registered algorithms
forge.cipher.algorithms = forge.cipher.algorithms || {};

/**
 * Creates a cipher object that can be used to encrypt data using the given
 * algorithm and key. The algorithm may be provided as a string value for a
 * previously registered algorithm or it may be given as a cipher algorithm
 * API object.
 *
 * @param algorithm the algorithm to use, either a string or an algorithm API
 *          object.
 * @param key the key to use, as a binary-encoded string of bytes or a
 *          byte buffer.
 *
 * @return the cipher.
 */
forge.cipher.createCipher = function(algorithm, key) {
  var api = algorithm;
  if(typeof api === 'string') {
    api = forge.cipher.getAlgorithm(api);
    if(api) {
      api = api();
    }
  }
  if(!api) {
    throw new Error('Unsupported algorithm: ' + algorithm);
  }

  // assume block cipher
  return new forge.cipher.BlockCipher({
    algorithm: api,
    key: key,
    decrypt: false
  });
};

/**
 * Creates a decipher object that can be used to decrypt data using the given
 * algorithm and key. The algorithm may be provided as a string value for a
 * previously registered algorithm or it may be given as a cipher algorithm
 * API object.
 *
 * @param algorithm the algorithm to use, either a string or an algorithm API
 *          object.
 * @param key the key to use, as a binary-encoded string of bytes or a
 *          byte buffer.
 *
 * @return the cipher.
 */
forge.cipher.createDecipher = function(algorithm, key) {
  var api = algorithm;
  if(typeof api === 'string') {
    api = forge.cipher.getAlgorithm(api);
    if(api) {
      api = api();
    }
  }
  if(!api) {
    throw new Error('Unsupported algorithm: ' + algorithm);
  }

  // assume block cipher
  return new forge.cipher.BlockCipher({
    algorithm: api,
    key: key,
    decrypt: true
  });
};

/**
 * Registers an algorithm by name. If the name was already registered, the
 * algorithm API object will be overwritten.
 *
 * @param name the name of the algorithm.
 * @param algorithm the algorithm API object.
 */
forge.cipher.registerAlgorithm = function(name, algorithm) {
  name = name.toUpperCase();
  forge.cipher.algorithms[name] = algorithm;
};

/**
 * Gets a registered algorithm by name.
 *
 * @param name the name of the algorithm.
 *
 * @return the algorithm, if found, null if not.
 */
forge.cipher.getAlgorithm = function(name) {
  name = name.toUpperCase();
  if(name in forge.cipher.algorithms) {
    return forge.cipher.algorithms[name];
  }
  return null;
};

var BlockCipher = forge.cipher.BlockCipher = function(options) {
  this.algorithm = options.algorithm;
  this.mode = this.algorithm.mode;
  this.blockSize = this.mode.blockSize;
  this._finish = false;
  this._input = null;
  this.output = null;
  this._op = options.decrypt ? this.mode.decrypt : this.mode.encrypt;
  this._decrypt = options.decrypt;
  this.algorithm.initialize(options);
};

/**
 * Starts or restarts the encryption or decryption process, whichever
 * was previously configured.
 *
 * For non-GCM mode, the IV may be a binary-encoded string of bytes, an array
 * of bytes, a byte buffer, or an array of 32-bit integers. If the IV is in
 * bytes, then it must be Nb (16) bytes in length. If the IV is given in as
 * 32-bit integers, then it must be 4 integers long.
 *
 * Note: an IV is not required or used in ECB mode.
 *
 * For GCM-mode, the IV must be given as a binary-encoded string of bytes or
 * a byte buffer. The number of bytes should be 12 (96 bits) as recommended
 * by NIST SP-800-38D but another length may be given.
 *
 * @param options the options to use:
 *          iv the initialization vector to use as a binary-encoded string of
 *            bytes, null to reuse the last ciphered block from a previous
 *            update() (this "residue" method is for legacy support only).
 *          additionalData additional authentication data as a binary-encoded
 *            string of bytes, for 'GCM' mode, (default: none).
 *          tagLength desired length of authentication tag, in bits, for
 *            'GCM' mode (0-128, default: 128).
 *          tag the authentication tag to check if decrypting, as a
 *             binary-encoded string of bytes.
 *          output the output the buffer to write to, null to create one.
 */
BlockCipher.prototype.start = function(options) {
  options = options || {};
  var opts = {};
  for(var key in options) {
    opts[key] = options[key];
  }
  opts.decrypt = this._decrypt;
  this._finish = false;
  this._input = forge.util.createBuffer();
  this.output = options.output || forge.util.createBuffer();
  this.mode.start(opts);
};

/**
 * Updates the next block according to the cipher mode.
 *
 * @param input the buffer to read from.
 */
BlockCipher.prototype.update = function(input) {
  if(input) {
    // input given, so empty it into the input buffer
    this._input.putBuffer(input);
  }

  // do cipher operation until it needs more input and not finished
  while(!this._op.call(this.mode, this._input, this.output, this._finish) &&
    !this._finish) {}

  // free consumed memory from input buffer
  this._input.compact();
};

/**
 * Finishes encrypting or decrypting.
 *
 * @param pad a padding function to use in CBC mode, null for default,
 *          signature(blockSize, buffer, decrypt).
 *
 * @return true if successful, false on error.
 */
BlockCipher.prototype.finish = function(pad) {
  // backwards-compatibility w/deprecated padding API
  // Note: will overwrite padding functions even after another start() call
  if(pad && (this.mode.name === 'ECB' || this.mode.name === 'CBC')) {
    this.mode.pad = function(input) {
      return pad(this.blockSize, input, false);
    };
    this.mode.unpad = function(output) {
      return pad(this.blockSize, output, true);
    };
  }

  // build options for padding and afterFinish functions
  var options = {};
  options.decrypt = this._decrypt;

  // get # of bytes that won't fill a block
  options.overflow = this._input.length() % this.blockSize;

  if(!this._decrypt && this.mode.pad) {
    if(!this.mode.pad(this._input, options)) {
      return false;
    }
  }

  // do final update
  this._finish = true;
  this.update();

  if(this._decrypt && this.mode.unpad) {
    if(!this.mode.unpad(this.output, options)) {
      return false;
    }
  }

  if(this.mode.afterFinish) {
    if(!this.mode.afterFinish(this.output, options)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/node-forge/lib/cipherModes.js":
/*!****************************************************!*\
  !*** ./node_modules/node-forge/lib/cipherModes.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Supported cipher modes.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2014 Digital Bazaar, Inc.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

forge.cipher = forge.cipher || {};

// supported cipher modes
var modes = module.exports = forge.cipher.modes = forge.cipher.modes || {};

/** Electronic codebook (ECB) (Don't use this; it's not secure) **/

modes.ecb = function(options) {
  options = options || {};
  this.name = 'ECB';
  this.cipher = options.cipher;
  this.blockSize = options.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = new Array(this._ints);
  this._outBlock = new Array(this._ints);
};

modes.ecb.prototype.start = function(options) {};

modes.ecb.prototype.encrypt = function(input, output, finish) {
  // not enough input to encrypt
  if(input.length() < this.blockSize && !(finish && input.length() > 0)) {
    return true;
  }

  // get next block
  for(var i = 0; i < this._ints; ++i) {
    this._inBlock[i] = input.getInt32();
  }

  // encrypt block
  this.cipher.encrypt(this._inBlock, this._outBlock);

  // write output
  for(var i = 0; i < this._ints; ++i) {
    output.putInt32(this._outBlock[i]);
  }
};

modes.ecb.prototype.decrypt = function(input, output, finish) {
  // not enough input to decrypt
  if(input.length() < this.blockSize && !(finish && input.length() > 0)) {
    return true;
  }

  // get next block
  for(var i = 0; i < this._ints; ++i) {
    this._inBlock[i] = input.getInt32();
  }

  // decrypt block
  this.cipher.decrypt(this._inBlock, this._outBlock);

  // write output
  for(var i = 0; i < this._ints; ++i) {
    output.putInt32(this._outBlock[i]);
  }
};

modes.ecb.prototype.pad = function(input, options) {
  // add PKCS#7 padding to block (each pad byte is the
  // value of the number of pad bytes)
  var padding = (input.length() === this.blockSize ?
    this.blockSize : (this.blockSize - input.length()));
  input.fillWithByte(padding, padding);
  return true;
};

modes.ecb.prototype.unpad = function(output, options) {
  // check for error: input data not a multiple of blockSize
  if(options.overflow > 0) {
    return false;
  }

  // ensure padding byte count is valid
  var len = output.length();
  var count = output.at(len - 1);
  if(count > (this.blockSize << 2)) {
    return false;
  }

  // trim off padding bytes
  output.truncate(count);
  return true;
};

/** Cipher-block Chaining (CBC) **/

modes.cbc = function(options) {
  options = options || {};
  this.name = 'CBC';
  this.cipher = options.cipher;
  this.blockSize = options.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = new Array(this._ints);
  this._outBlock = new Array(this._ints);
};

modes.cbc.prototype.start = function(options) {
  // Note: legacy support for using IV residue (has security flaws)
  // if IV is null, reuse block from previous processing
  if(options.iv === null) {
    // must have a previous block
    if(!this._prev) {
      throw new Error('Invalid IV parameter.');
    }
    this._iv = this._prev.slice(0);
  } else if(!('iv' in options)) {
    throw new Error('Invalid IV parameter.');
  } else {
    // save IV as "previous" block
    this._iv = transformIV(options.iv);
    this._prev = this._iv.slice(0);
  }
};

modes.cbc.prototype.encrypt = function(input, output, finish) {
  // not enough input to encrypt
  if(input.length() < this.blockSize && !(finish && input.length() > 0)) {
    return true;
  }

  // get next block
  // CBC XOR's IV (or previous block) with plaintext
  for(var i = 0; i < this._ints; ++i) {
    this._inBlock[i] = this._prev[i] ^ input.getInt32();
  }

  // encrypt block
  this.cipher.encrypt(this._inBlock, this._outBlock);

  // write output, save previous block
  for(var i = 0; i < this._ints; ++i) {
    output.putInt32(this._outBlock[i]);
  }
  this._prev = this._outBlock;
};

modes.cbc.prototype.decrypt = function(input, output, finish) {
  // not enough input to decrypt
  if(input.length() < this.blockSize && !(finish && input.length() > 0)) {
    return true;
  }

  // get next block
  for(var i = 0; i < this._ints; ++i) {
    this._inBlock[i] = input.getInt32();
  }

  // decrypt block
  this.cipher.decrypt(this._inBlock, this._outBlock);

  // write output, save previous ciphered block
  // CBC XOR's IV (or previous block) with ciphertext
  for(var i = 0; i < this._ints; ++i) {
    output.putInt32(this._prev[i] ^ this._outBlock[i]);
  }
  this._prev = this._inBlock.slice(0);
};

modes.cbc.prototype.pad = function(input, options) {
  // add PKCS#7 padding to block (each pad byte is the
  // value of the number of pad bytes)
  var padding = (input.length() === this.blockSize ?
    this.blockSize : (this.blockSize - input.length()));
  input.fillWithByte(padding, padding);
  return true;
};

modes.cbc.prototype.unpad = function(output, options) {
  // check for error: input data not a multiple of blockSize
  if(options.overflow > 0) {
    return false;
  }

  // ensure padding byte count is valid
  var len = output.length();
  var count = output.at(len - 1);
  if(count > (this.blockSize << 2)) {
    return false;
  }

  // trim off padding bytes
  output.truncate(count);
  return true;
};

/** Cipher feedback (CFB) **/

modes.cfb = function(options) {
  options = options || {};
  this.name = 'CFB';
  this.cipher = options.cipher;
  this.blockSize = options.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = null;
  this._outBlock = new Array(this._ints);
  this._partialBlock = new Array(this._ints);
  this._partialOutput = forge.util.createBuffer();
  this._partialBytes = 0;
};

modes.cfb.prototype.start = function(options) {
  if(!('iv' in options)) {
    throw new Error('Invalid IV parameter.');
  }
  // use IV as first input
  this._iv = transformIV(options.iv);
  this._inBlock = this._iv.slice(0);
  this._partialBytes = 0;
};

modes.cfb.prototype.encrypt = function(input, output, finish) {
  // not enough input to encrypt
  var inputLength = input.length();
  if(inputLength === 0) {
    return true;
  }

  // encrypt block
  this.cipher.encrypt(this._inBlock, this._outBlock);

  // handle full block
  if(this._partialBytes === 0 && inputLength >= this.blockSize) {
    // XOR input with output, write input as output
    for(var i = 0; i < this._ints; ++i) {
      this._inBlock[i] = input.getInt32() ^ this._outBlock[i];
      output.putInt32(this._inBlock[i]);
    }
    return;
  }

  // handle partial block
  var partialBytes = (this.blockSize - inputLength) % this.blockSize;
  if(partialBytes > 0) {
    partialBytes = this.blockSize - partialBytes;
  }

  // XOR input with output, write input as partial output
  this._partialOutput.clear();
  for(var i = 0; i < this._ints; ++i) {
    this._partialBlock[i] = input.getInt32() ^ this._outBlock[i];
    this._partialOutput.putInt32(this._partialBlock[i]);
  }

  if(partialBytes > 0) {
    // block still incomplete, restore input buffer
    input.read -= this.blockSize;
  } else {
    // block complete, update input block
    for(var i = 0; i < this._ints; ++i) {
      this._inBlock[i] = this._partialBlock[i];
    }
  }

  // skip any previous partial bytes
  if(this._partialBytes > 0) {
    this._partialOutput.getBytes(this._partialBytes);
  }

  if(partialBytes > 0 && !finish) {
    output.putBytes(this._partialOutput.getBytes(
      partialBytes - this._partialBytes));
    this._partialBytes = partialBytes;
    return true;
  }

  output.putBytes(this._partialOutput.getBytes(
    inputLength - this._partialBytes));
  this._partialBytes = 0;
};

modes.cfb.prototype.decrypt = function(input, output, finish) {
  // not enough input to decrypt
  var inputLength = input.length();
  if(inputLength === 0) {
    return true;
  }

  // encrypt block (CFB always uses encryption mode)
  this.cipher.encrypt(this._inBlock, this._outBlock);

  // handle full block
  if(this._partialBytes === 0 && inputLength >= this.blockSize) {
    // XOR input with output, write input as output
    for(var i = 0; i < this._ints; ++i) {
      this._inBlock[i] = input.getInt32();
      output.putInt32(this._inBlock[i] ^ this._outBlock[i]);
    }
    return;
  }

  // handle partial block
  var partialBytes = (this.blockSize - inputLength) % this.blockSize;
  if(partialBytes > 0) {
    partialBytes = this.blockSize - partialBytes;
  }

  // XOR input with output, write input as partial output
  this._partialOutput.clear();
  for(var i = 0; i < this._ints; ++i) {
    this._partialBlock[i] = input.getInt32();
    this._partialOutput.putInt32(this._partialBlock[i] ^ this._outBlock[i]);
  }

  if(partialBytes > 0) {
    // block still incomplete, restore input buffer
    input.read -= this.blockSize;
  } else {
    // block complete, update input block
    for(var i = 0; i < this._ints; ++i) {
      this._inBlock[i] = this._partialBlock[i];
    }
  }

  // skip any previous partial bytes
  if(this._partialBytes > 0) {
    this._partialOutput.getBytes(this._partialBytes);
  }

  if(partialBytes > 0 && !finish) {
    output.putBytes(this._partialOutput.getBytes(
      partialBytes - this._partialBytes));
    this._partialBytes = partialBytes;
    return true;
  }

  output.putBytes(this._partialOutput.getBytes(
    inputLength - this._partialBytes));
  this._partialBytes = 0;
};

/** Output feedback (OFB) **/

modes.ofb = function(options) {
  options = options || {};
  this.name = 'OFB';
  this.cipher = options.cipher;
  this.blockSize = options.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = null;
  this._outBlock = new Array(this._ints);
  this._partialOutput = forge.util.createBuffer();
  this._partialBytes = 0;
};

modes.ofb.prototype.start = function(options) {
  if(!('iv' in options)) {
    throw new Error('Invalid IV parameter.');
  }
  // use IV as first input
  this._iv = transformIV(options.iv);
  this._inBlock = this._iv.slice(0);
  this._partialBytes = 0;
};

modes.ofb.prototype.encrypt = function(input, output, finish) {
  // not enough input to encrypt
  var inputLength = input.length();
  if(input.length() === 0) {
    return true;
  }

  // encrypt block (OFB always uses encryption mode)
  this.cipher.encrypt(this._inBlock, this._outBlock);

  // handle full block
  if(this._partialBytes === 0 && inputLength >= this.blockSize) {
    // XOR input with output and update next input
    for(var i = 0; i < this._ints; ++i) {
      output.putInt32(input.getInt32() ^ this._outBlock[i]);
      this._inBlock[i] = this._outBlock[i];
    }
    return;
  }

  // handle partial block
  var partialBytes = (this.blockSize - inputLength) % this.blockSize;
  if(partialBytes > 0) {
    partialBytes = this.blockSize - partialBytes;
  }

  // XOR input with output
  this._partialOutput.clear();
  for(var i = 0; i < this._ints; ++i) {
    this._partialOutput.putInt32(input.getInt32() ^ this._outBlock[i]);
  }

  if(partialBytes > 0) {
    // block still incomplete, restore input buffer
    input.read -= this.blockSize;
  } else {
    // block complete, update input block
    for(var i = 0; i < this._ints; ++i) {
      this._inBlock[i] = this._outBlock[i];
    }
  }

  // skip any previous partial bytes
  if(this._partialBytes > 0) {
    this._partialOutput.getBytes(this._partialBytes);
  }

  if(partialBytes > 0 && !finish) {
    output.putBytes(this._partialOutput.getBytes(
      partialBytes - this._partialBytes));
    this._partialBytes = partialBytes;
    return true;
  }

  output.putBytes(this._partialOutput.getBytes(
    inputLength - this._partialBytes));
  this._partialBytes = 0;
};

modes.ofb.prototype.decrypt = modes.ofb.prototype.encrypt;

/** Counter (CTR) **/

modes.ctr = function(options) {
  options = options || {};
  this.name = 'CTR';
  this.cipher = options.cipher;
  this.blockSize = options.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = null;
  this._outBlock = new Array(this._ints);
  this._partialOutput = forge.util.createBuffer();
  this._partialBytes = 0;
};

modes.ctr.prototype.start = function(options) {
  if(!('iv' in options)) {
    throw new Error('Invalid IV parameter.');
  }
  // use IV as first input
  this._iv = transformIV(options.iv);
  this._inBlock = this._iv.slice(0);
  this._partialBytes = 0;
};

modes.ctr.prototype.encrypt = function(input, output, finish) {
  // not enough input to encrypt
  var inputLength = input.length();
  if(inputLength === 0) {
    return true;
  }

  // encrypt block (CTR always uses encryption mode)
  this.cipher.encrypt(this._inBlock, this._outBlock);

  // handle full block
  if(this._partialBytes === 0 && inputLength >= this.blockSize) {
    // XOR input with output
    for(var i = 0; i < this._ints; ++i) {
      output.putInt32(input.getInt32() ^ this._outBlock[i]);
    }
  } else {
    // handle partial block
    var partialBytes = (this.blockSize - inputLength) % this.blockSize;
    if(partialBytes > 0) {
      partialBytes = this.blockSize - partialBytes;
    }

    // XOR input with output
    this._partialOutput.clear();
    for(var i = 0; i < this._ints; ++i) {
      this._partialOutput.putInt32(input.getInt32() ^ this._outBlock[i]);
    }

    if(partialBytes > 0) {
      // block still incomplete, restore input buffer
      input.read -= this.blockSize;
    }

    // skip any previous partial bytes
    if(this._partialBytes > 0) {
      this._partialOutput.getBytes(this._partialBytes);
    }

    if(partialBytes > 0 && !finish) {
      output.putBytes(this._partialOutput.getBytes(
        partialBytes - this._partialBytes));
      this._partialBytes = partialBytes;
      return true;
    }

    output.putBytes(this._partialOutput.getBytes(
      inputLength - this._partialBytes));
    this._partialBytes = 0;
  }

  // block complete, increment counter (input block)
  inc32(this._inBlock);
};

modes.ctr.prototype.decrypt = modes.ctr.prototype.encrypt;

/** Galois/Counter Mode (GCM) **/

modes.gcm = function(options) {
  options = options || {};
  this.name = 'GCM';
  this.cipher = options.cipher;
  this.blockSize = options.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = new Array(this._ints);
  this._outBlock = new Array(this._ints);
  this._partialOutput = forge.util.createBuffer();
  this._partialBytes = 0;

  // R is actually this value concatenated with 120 more zero bits, but
  // we only XOR against R so the other zeros have no effect -- we just
  // apply this value to the first integer in a block
  this._R = 0xE1000000;
};

modes.gcm.prototype.start = function(options) {
  if(!('iv' in options)) {
    throw new Error('Invalid IV parameter.');
  }
  // ensure IV is a byte buffer
  var iv = forge.util.createBuffer(options.iv);

  // no ciphered data processed yet
  this._cipherLength = 0;

  // default additional data is none
  var additionalData;
  if('additionalData' in options) {
    additionalData = forge.util.createBuffer(options.additionalData);
  } else {
    additionalData = forge.util.createBuffer();
  }

  // default tag length is 128 bits
  if('tagLength' in options) {
    this._tagLength = options.tagLength;
  } else {
    this._tagLength = 128;
  }

  // if tag is given, ensure tag matches tag length
  this._tag = null;
  if(options.decrypt) {
    // save tag to check later
    this._tag = forge.util.createBuffer(options.tag).getBytes();
    if(this._tag.length !== (this._tagLength / 8)) {
      throw new Error('Authentication tag does not match tag length.');
    }
  }

  // create tmp storage for hash calculation
  this._hashBlock = new Array(this._ints);

  // no tag generated yet
  this.tag = null;

  // generate hash subkey
  // (apply block cipher to "zero" block)
  this._hashSubkey = new Array(this._ints);
  this.cipher.encrypt([0, 0, 0, 0], this._hashSubkey);

  // generate table M
  // use 4-bit tables (32 component decomposition of a 16 byte value)
  // 8-bit tables take more space and are known to have security
  // vulnerabilities (in native implementations)
  this.componentBits = 4;
  this._m = this.generateHashTable(this._hashSubkey, this.componentBits);

  // Note: support IV length different from 96 bits? (only supporting
  // 96 bits is recommended by NIST SP-800-38D)
  // generate J_0
  var ivLength = iv.length();
  if(ivLength === 12) {
    // 96-bit IV
    this._j0 = [iv.getInt32(), iv.getInt32(), iv.getInt32(), 1];
  } else {
    // IV is NOT 96-bits
    this._j0 = [0, 0, 0, 0];
    while(iv.length() > 0) {
      this._j0 = this.ghash(
        this._hashSubkey, this._j0,
        [iv.getInt32(), iv.getInt32(), iv.getInt32(), iv.getInt32()]);
    }
    this._j0 = this.ghash(
      this._hashSubkey, this._j0, [0, 0].concat(from64To32(ivLength * 8)));
  }

  // generate ICB (initial counter block)
  this._inBlock = this._j0.slice(0);
  inc32(this._inBlock);
  this._partialBytes = 0;

  // consume authentication data
  additionalData = forge.util.createBuffer(additionalData);
  // save additional data length as a BE 64-bit number
  this._aDataLength = from64To32(additionalData.length() * 8);
  // pad additional data to 128 bit (16 byte) block size
  var overflow = additionalData.length() % this.blockSize;
  if(overflow) {
    additionalData.fillWithByte(0, this.blockSize - overflow);
  }
  this._s = [0, 0, 0, 0];
  while(additionalData.length() > 0) {
    this._s = this.ghash(this._hashSubkey, this._s, [
      additionalData.getInt32(),
      additionalData.getInt32(),
      additionalData.getInt32(),
      additionalData.getInt32()
    ]);
  }
};

modes.gcm.prototype.encrypt = function(input, output, finish) {
  // not enough input to encrypt
  var inputLength = input.length();
  if(inputLength === 0) {
    return true;
  }

  // encrypt block
  this.cipher.encrypt(this._inBlock, this._outBlock);

  // handle full block
  if(this._partialBytes === 0 && inputLength >= this.blockSize) {
    // XOR input with output
    for(var i = 0; i < this._ints; ++i) {
      output.putInt32(this._outBlock[i] ^= input.getInt32());
    }
    this._cipherLength += this.blockSize;
  } else {
    // handle partial block
    var partialBytes = (this.blockSize - inputLength) % this.blockSize;
    if(partialBytes > 0) {
      partialBytes = this.blockSize - partialBytes;
    }

    // XOR input with output
    this._partialOutput.clear();
    for(var i = 0; i < this._ints; ++i) {
      this._partialOutput.putInt32(input.getInt32() ^ this._outBlock[i]);
    }

    if(partialBytes <= 0 || finish) {
      // handle overflow prior to hashing
      if(finish) {
        // get block overflow
        var overflow = inputLength % this.blockSize;
        this._cipherLength += overflow;
        // truncate for hash function
        this._partialOutput.truncate(this.blockSize - overflow);
      } else {
        this._cipherLength += this.blockSize;
      }

      // get output block for hashing
      for(var i = 0; i < this._ints; ++i) {
        this._outBlock[i] = this._partialOutput.getInt32();
      }
      this._partialOutput.read -= this.blockSize;
    }

    // skip any previous partial bytes
    if(this._partialBytes > 0) {
      this._partialOutput.getBytes(this._partialBytes);
    }

    if(partialBytes > 0 && !finish) {
      // block still incomplete, restore input buffer, get partial output,
      // and return early
      input.read -= this.blockSize;
      output.putBytes(this._partialOutput.getBytes(
        partialBytes - this._partialBytes));
      this._partialBytes = partialBytes;
      return true;
    }

    output.putBytes(this._partialOutput.getBytes(
      inputLength - this._partialBytes));
    this._partialBytes = 0;
  }

  // update hash block S
  this._s = this.ghash(this._hashSubkey, this._s, this._outBlock);

  // increment counter (input block)
  inc32(this._inBlock);
};

modes.gcm.prototype.decrypt = function(input, output, finish) {
  // not enough input to decrypt
  var inputLength = input.length();
  if(inputLength < this.blockSize && !(finish && inputLength > 0)) {
    return true;
  }

  // encrypt block (GCM always uses encryption mode)
  this.cipher.encrypt(this._inBlock, this._outBlock);

  // increment counter (input block)
  inc32(this._inBlock);

  // update hash block S
  this._hashBlock[0] = input.getInt32();
  this._hashBlock[1] = input.getInt32();
  this._hashBlock[2] = input.getInt32();
  this._hashBlock[3] = input.getInt32();
  this._s = this.ghash(this._hashSubkey, this._s, this._hashBlock);

  // XOR hash input with output
  for(var i = 0; i < this._ints; ++i) {
    output.putInt32(this._outBlock[i] ^ this._hashBlock[i]);
  }

  // increment cipher data length
  if(inputLength < this.blockSize) {
    this._cipherLength += inputLength % this.blockSize;
  } else {
    this._cipherLength += this.blockSize;
  }
};

modes.gcm.prototype.afterFinish = function(output, options) {
  var rval = true;

  // handle overflow
  if(options.decrypt && options.overflow) {
    output.truncate(this.blockSize - options.overflow);
  }

  // handle authentication tag
  this.tag = forge.util.createBuffer();

  // concatenate additional data length with cipher length
  var lengths = this._aDataLength.concat(from64To32(this._cipherLength * 8));

  // include lengths in hash
  this._s = this.ghash(this._hashSubkey, this._s, lengths);

  // do GCTR(J_0, S)
  var tag = [];
  this.cipher.encrypt(this._j0, tag);
  for(var i = 0; i < this._ints; ++i) {
    this.tag.putInt32(this._s[i] ^ tag[i]);
  }

  // trim tag to length
  this.tag.truncate(this.tag.length() % (this._tagLength / 8));

  // check authentication tag
  if(options.decrypt && this.tag.bytes() !== this._tag) {
    rval = false;
  }

  return rval;
};

/**
 * See NIST SP-800-38D 6.3 (Algorithm 1). This function performs Galois
 * field multiplication. The field, GF(2^128), is defined by the polynomial:
 *
 * x^128 + x^7 + x^2 + x + 1
 *
 * Which is represented in little-endian binary form as: 11100001 (0xe1). When
 * the value of a coefficient is 1, a bit is set. The value R, is the
 * concatenation of this value and 120 zero bits, yielding a 128-bit value
 * which matches the block size.
 *
 * This function will multiply two elements (vectors of bytes), X and Y, in
 * the field GF(2^128). The result is initialized to zero. For each bit of
 * X (out of 128), x_i, if x_i is set, then the result is multiplied (XOR'd)
 * by the current value of Y. For each bit, the value of Y will be raised by
 * a power of x (multiplied by the polynomial x). This can be achieved by
 * shifting Y once to the right. If the current value of Y, prior to being
 * multiplied by x, has 0 as its LSB, then it is a 127th degree polynomial.
 * Otherwise, we must divide by R after shifting to find the remainder.
 *
 * @param x the first block to multiply by the second.
 * @param y the second block to multiply by the first.
 *
 * @return the block result of the multiplication.
 */
modes.gcm.prototype.multiply = function(x, y) {
  var z_i = [0, 0, 0, 0];
  var v_i = y.slice(0);

  // calculate Z_128 (block has 128 bits)
  for(var i = 0; i < 128; ++i) {
    // if x_i is 0, Z_{i+1} = Z_i (unchanged)
    // else Z_{i+1} = Z_i ^ V_i
    // get x_i by finding 32-bit int position, then left shift 1 by remainder
    var x_i = x[(i / 32) | 0] & (1 << (31 - i % 32));
    if(x_i) {
      z_i[0] ^= v_i[0];
      z_i[1] ^= v_i[1];
      z_i[2] ^= v_i[2];
      z_i[3] ^= v_i[3];
    }

    // if LSB(V_i) is 1, V_i = V_i >> 1
    // else V_i = (V_i >> 1) ^ R
    this.pow(v_i, v_i);
  }

  return z_i;
};

modes.gcm.prototype.pow = function(x, out) {
  // if LSB(x) is 1, x = x >>> 1
  // else x = (x >>> 1) ^ R
  var lsb = x[3] & 1;

  // always do x >>> 1:
  // starting with the rightmost integer, shift each integer to the right
  // one bit, pulling in the bit from the integer to the left as its top
  // most bit (do this for the last 3 integers)
  for(var i = 3; i > 0; --i) {
    out[i] = (x[i] >>> 1) | ((x[i - 1] & 1) << 31);
  }
  // shift the first integer normally
  out[0] = x[0] >>> 1;

  // if lsb was not set, then polynomial had a degree of 127 and doesn't
  // need to divided; otherwise, XOR with R to find the remainder; we only
  // need to XOR the first integer since R technically ends w/120 zero bits
  if(lsb) {
    out[0] ^= this._R;
  }
};

modes.gcm.prototype.tableMultiply = function(x) {
  // assumes 4-bit tables are used
  var z = [0, 0, 0, 0];
  for(var i = 0; i < 32; ++i) {
    var idx = (i / 8) | 0;
    var x_i = (x[idx] >>> ((7 - (i % 8)) * 4)) & 0xF;
    var ah = this._m[i][x_i];
    z[0] ^= ah[0];
    z[1] ^= ah[1];
    z[2] ^= ah[2];
    z[3] ^= ah[3];
  }
  return z;
};

/**
 * A continuing version of the GHASH algorithm that operates on a single
 * block. The hash block, last hash value (Ym) and the new block to hash
 * are given.
 *
 * @param h the hash block.
 * @param y the previous value for Ym, use [0, 0, 0, 0] for a new hash.
 * @param x the block to hash.
 *
 * @return the hashed value (Ym).
 */
modes.gcm.prototype.ghash = function(h, y, x) {
  y[0] ^= x[0];
  y[1] ^= x[1];
  y[2] ^= x[2];
  y[3] ^= x[3];
  return this.tableMultiply(y);
  //return this.multiply(y, h);
};

/**
 * Precomputes a table for multiplying against the hash subkey. This
 * mechanism provides a substantial speed increase over multiplication
 * performed without a table. The table-based multiplication this table is
 * for solves X * H by multiplying each component of X by H and then
 * composing the results together using XOR.
 *
 * This function can be used to generate tables with different bit sizes
 * for the components, however, this implementation assumes there are
 * 32 components of X (which is a 16 byte vector), therefore each component
 * takes 4-bits (so the table is constructed with bits=4).
 *
 * @param h the hash subkey.
 * @param bits the bit size for a component.
 */
modes.gcm.prototype.generateHashTable = function(h, bits) {
  // TODO: There are further optimizations that would use only the
  // first table M_0 (or some variant) along with a remainder table;
  // this can be explored in the future
  var multiplier = 8 / bits;
  var perInt = 4 * multiplier;
  var size = 16 * multiplier;
  var m = new Array(size);
  for(var i = 0; i < size; ++i) {
    var tmp = [0, 0, 0, 0];
    var idx = (i / perInt) | 0;
    var shft = ((perInt - 1 - (i % perInt)) * bits);
    tmp[idx] = (1 << (bits - 1)) << shft;
    m[i] = this.generateSubHashTable(this.multiply(tmp, h), bits);
  }
  return m;
};

/**
 * Generates a table for multiplying against the hash subkey for one
 * particular component (out of all possible component values).
 *
 * @param mid the pre-multiplied value for the middle key of the table.
 * @param bits the bit size for a component.
 */
modes.gcm.prototype.generateSubHashTable = function(mid, bits) {
  // compute the table quickly by minimizing the number of
  // POW operations -- they only need to be performed for powers of 2,
  // all other entries can be composed from those powers using XOR
  var size = 1 << bits;
  var half = size >>> 1;
  var m = new Array(size);
  m[half] = mid.slice(0);
  var i = half >>> 1;
  while(i > 0) {
    // raise m0[2 * i] and store in m0[i]
    this.pow(m[2 * i], m[i] = []);
    i >>= 1;
  }
  i = 2;
  while(i < half) {
    for(var j = 1; j < i; ++j) {
      var m_i = m[i];
      var m_j = m[j];
      m[i + j] = [
        m_i[0] ^ m_j[0],
        m_i[1] ^ m_j[1],
        m_i[2] ^ m_j[2],
        m_i[3] ^ m_j[3]
      ];
    }
    i *= 2;
  }
  m[0] = [0, 0, 0, 0];
  /* Note: We could avoid storing these by doing composition during multiply
  calculate top half using composition by speed is preferred. */
  for(i = half + 1; i < size; ++i) {
    var c = m[i ^ half];
    m[i] = [mid[0] ^ c[0], mid[1] ^ c[1], mid[2] ^ c[2], mid[3] ^ c[3]];
  }
  return m;
};

/** Utility functions */

function transformIV(iv) {
  if(typeof iv === 'string') {
    // convert iv string into byte buffer
    iv = forge.util.createBuffer(iv);
  }

  if(forge.util.isArray(iv) && iv.length > 4) {
    // convert iv byte array into byte buffer
    var tmp = iv;
    iv = forge.util.createBuffer();
    for(var i = 0; i < tmp.length; ++i) {
      iv.putByte(tmp[i]);
    }
  }
  if(!forge.util.isArray(iv)) {
    // convert iv byte buffer into 32-bit integer array
    iv = [iv.getInt32(), iv.getInt32(), iv.getInt32(), iv.getInt32()];
  }

  return iv;
}

function inc32(block) {
  // increment last 32 bits of block only
  block[block.length - 1] = (block[block.length - 1] + 1) & 0xFFFFFFFF;
}

function from64To32(num) {
  // convert 64-bit number to two BE Int32s
  return [(num / 0x100000000) | 0, num & 0xFFFFFFFF];
}


/***/ }),

/***/ "./node_modules/node-forge/lib/des.js":
/*!********************************************!*\
  !*** ./node_modules/node-forge/lib/des.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * DES (Data Encryption Standard) implementation.
 *
 * This implementation supports DES as well as 3DES-EDE in ECB and CBC mode.
 * It is based on the BSD-licensed implementation by Paul Tero:
 *
 * Paul Tero, July 2001
 * http://www.tero.co.uk/des/
 *
 * Optimised for performance with large blocks by
 * Michael Hayworth, November 2001
 * http://www.netdealing.com
 *
 * THIS SOFTWARE IS PROVIDED "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 *
 * @author Stefan Siegl
 * @author Dave Longley
 *
 * Copyright (c) 2012 Stefan Siegl <stesie@brokenpipe.de>
 * Copyright (c) 2012-2014 Digital Bazaar, Inc.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./cipher */ "./node_modules/node-forge/lib/cipher.js");
__webpack_require__(/*! ./cipherModes */ "./node_modules/node-forge/lib/cipherModes.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

/* DES API */
module.exports = forge.des = forge.des || {};

/**
 * Deprecated. Instead, use:
 *
 * var cipher = forge.cipher.createCipher('DES-<mode>', key);
 * cipher.start({iv: iv});
 *
 * Creates an DES cipher object to encrypt data using the given symmetric key.
 * The output will be stored in the 'output' member of the returned cipher.
 *
 * The key and iv may be given as binary-encoded strings of bytes or
 * byte buffers.
 *
 * @param key the symmetric key to use (64 or 192 bits).
 * @param iv the initialization vector to use.
 * @param output the buffer to write to, null to create one.
 * @param mode the cipher mode to use (default: 'CBC' if IV is
 *          given, 'ECB' if null).
 *
 * @return the cipher.
 */
forge.des.startEncrypting = function(key, iv, output, mode) {
  var cipher = _createCipher({
    key: key,
    output: output,
    decrypt: false,
    mode: mode || (iv === null ? 'ECB' : 'CBC')
  });
  cipher.start(iv);
  return cipher;
};

/**
 * Deprecated. Instead, use:
 *
 * var cipher = forge.cipher.createCipher('DES-<mode>', key);
 *
 * Creates an DES cipher object to encrypt data using the given symmetric key.
 *
 * The key may be given as a binary-encoded string of bytes or a byte buffer.
 *
 * @param key the symmetric key to use (64 or 192 bits).
 * @param mode the cipher mode to use (default: 'CBC').
 *
 * @return the cipher.
 */
forge.des.createEncryptionCipher = function(key, mode) {
  return _createCipher({
    key: key,
    output: null,
    decrypt: false,
    mode: mode
  });
};

/**
 * Deprecated. Instead, use:
 *
 * var decipher = forge.cipher.createDecipher('DES-<mode>', key);
 * decipher.start({iv: iv});
 *
 * Creates an DES cipher object to decrypt data using the given symmetric key.
 * The output will be stored in the 'output' member of the returned cipher.
 *
 * The key and iv may be given as binary-encoded strings of bytes or
 * byte buffers.
 *
 * @param key the symmetric key to use (64 or 192 bits).
 * @param iv the initialization vector to use.
 * @param output the buffer to write to, null to create one.
 * @param mode the cipher mode to use (default: 'CBC' if IV is
 *          given, 'ECB' if null).
 *
 * @return the cipher.
 */
forge.des.startDecrypting = function(key, iv, output, mode) {
  var cipher = _createCipher({
    key: key,
    output: output,
    decrypt: true,
    mode: mode || (iv === null ? 'ECB' : 'CBC')
  });
  cipher.start(iv);
  return cipher;
};

/**
 * Deprecated. Instead, use:
 *
 * var decipher = forge.cipher.createDecipher('DES-<mode>', key);
 *
 * Creates an DES cipher object to decrypt data using the given symmetric key.
 *
 * The key may be given as a binary-encoded string of bytes or a byte buffer.
 *
 * @param key the symmetric key to use (64 or 192 bits).
 * @param mode the cipher mode to use (default: 'CBC').
 *
 * @return the cipher.
 */
forge.des.createDecryptionCipher = function(key, mode) {
  return _createCipher({
    key: key,
    output: null,
    decrypt: true,
    mode: mode
  });
};

/**
 * Creates a new DES cipher algorithm object.
 *
 * @param name the name of the algorithm.
 * @param mode the mode factory function.
 *
 * @return the DES algorithm object.
 */
forge.des.Algorithm = function(name, mode) {
  var self = this;
  self.name = name;
  self.mode = new mode({
    blockSize: 8,
    cipher: {
      encrypt: function(inBlock, outBlock) {
        return _updateBlock(self._keys, inBlock, outBlock, false);
      },
      decrypt: function(inBlock, outBlock) {
        return _updateBlock(self._keys, inBlock, outBlock, true);
      }
    }
  });
  self._init = false;
};

/**
 * Initializes this DES algorithm by expanding its key.
 *
 * @param options the options to use.
 *          key the key to use with this algorithm.
 *          decrypt true if the algorithm should be initialized for decryption,
 *            false for encryption.
 */
forge.des.Algorithm.prototype.initialize = function(options) {
  if(this._init) {
    return;
  }

  var key = forge.util.createBuffer(options.key);
  if(this.name.indexOf('3DES') === 0) {
    if(key.length() !== 24) {
      throw new Error('Invalid Triple-DES key size: ' + key.length() * 8);
    }
  }

  // do key expansion to 16 or 48 subkeys (single or triple DES)
  this._keys = _createKeys(key);
  this._init = true;
};

/** Register DES algorithms **/

registerAlgorithm('DES-ECB', forge.cipher.modes.ecb);
registerAlgorithm('DES-CBC', forge.cipher.modes.cbc);
registerAlgorithm('DES-CFB', forge.cipher.modes.cfb);
registerAlgorithm('DES-OFB', forge.cipher.modes.ofb);
registerAlgorithm('DES-CTR', forge.cipher.modes.ctr);

registerAlgorithm('3DES-ECB', forge.cipher.modes.ecb);
registerAlgorithm('3DES-CBC', forge.cipher.modes.cbc);
registerAlgorithm('3DES-CFB', forge.cipher.modes.cfb);
registerAlgorithm('3DES-OFB', forge.cipher.modes.ofb);
registerAlgorithm('3DES-CTR', forge.cipher.modes.ctr);

function registerAlgorithm(name, mode) {
  var factory = function() {
    return new forge.des.Algorithm(name, mode);
  };
  forge.cipher.registerAlgorithm(name, factory);
}

/** DES implementation **/

var spfunction1 = [0x1010400,0,0x10000,0x1010404,0x1010004,0x10404,0x4,0x10000,0x400,0x1010400,0x1010404,0x400,0x1000404,0x1010004,0x1000000,0x4,0x404,0x1000400,0x1000400,0x10400,0x10400,0x1010000,0x1010000,0x1000404,0x10004,0x1000004,0x1000004,0x10004,0,0x404,0x10404,0x1000000,0x10000,0x1010404,0x4,0x1010000,0x1010400,0x1000000,0x1000000,0x400,0x1010004,0x10000,0x10400,0x1000004,0x400,0x4,0x1000404,0x10404,0x1010404,0x10004,0x1010000,0x1000404,0x1000004,0x404,0x10404,0x1010400,0x404,0x1000400,0x1000400,0,0x10004,0x10400,0,0x1010004];
var spfunction2 = [-0x7fef7fe0,-0x7fff8000,0x8000,0x108020,0x100000,0x20,-0x7fefffe0,-0x7fff7fe0,-0x7fffffe0,-0x7fef7fe0,-0x7fef8000,-0x80000000,-0x7fff8000,0x100000,0x20,-0x7fefffe0,0x108000,0x100020,-0x7fff7fe0,0,-0x80000000,0x8000,0x108020,-0x7ff00000,0x100020,-0x7fffffe0,0,0x108000,0x8020,-0x7fef8000,-0x7ff00000,0x8020,0,0x108020,-0x7fefffe0,0x100000,-0x7fff7fe0,-0x7ff00000,-0x7fef8000,0x8000,-0x7ff00000,-0x7fff8000,0x20,-0x7fef7fe0,0x108020,0x20,0x8000,-0x80000000,0x8020,-0x7fef8000,0x100000,-0x7fffffe0,0x100020,-0x7fff7fe0,-0x7fffffe0,0x100020,0x108000,0,-0x7fff8000,0x8020,-0x80000000,-0x7fefffe0,-0x7fef7fe0,0x108000];
var spfunction3 = [0x208,0x8020200,0,0x8020008,0x8000200,0,0x20208,0x8000200,0x20008,0x8000008,0x8000008,0x20000,0x8020208,0x20008,0x8020000,0x208,0x8000000,0x8,0x8020200,0x200,0x20200,0x8020000,0x8020008,0x20208,0x8000208,0x20200,0x20000,0x8000208,0x8,0x8020208,0x200,0x8000000,0x8020200,0x8000000,0x20008,0x208,0x20000,0x8020200,0x8000200,0,0x200,0x20008,0x8020208,0x8000200,0x8000008,0x200,0,0x8020008,0x8000208,0x20000,0x8000000,0x8020208,0x8,0x20208,0x20200,0x8000008,0x8020000,0x8000208,0x208,0x8020000,0x20208,0x8,0x8020008,0x20200];
var spfunction4 = [0x802001,0x2081,0x2081,0x80,0x802080,0x800081,0x800001,0x2001,0,0x802000,0x802000,0x802081,0x81,0,0x800080,0x800001,0x1,0x2000,0x800000,0x802001,0x80,0x800000,0x2001,0x2080,0x800081,0x1,0x2080,0x800080,0x2000,0x802080,0x802081,0x81,0x800080,0x800001,0x802000,0x802081,0x81,0,0,0x802000,0x2080,0x800080,0x800081,0x1,0x802001,0x2081,0x2081,0x80,0x802081,0x81,0x1,0x2000,0x800001,0x2001,0x802080,0x800081,0x2001,0x2080,0x800000,0x802001,0x80,0x800000,0x2000,0x802080];
var spfunction5 = [0x100,0x2080100,0x2080000,0x42000100,0x80000,0x100,0x40000000,0x2080000,0x40080100,0x80000,0x2000100,0x40080100,0x42000100,0x42080000,0x80100,0x40000000,0x2000000,0x40080000,0x40080000,0,0x40000100,0x42080100,0x42080100,0x2000100,0x42080000,0x40000100,0,0x42000000,0x2080100,0x2000000,0x42000000,0x80100,0x80000,0x42000100,0x100,0x2000000,0x40000000,0x2080000,0x42000100,0x40080100,0x2000100,0x40000000,0x42080000,0x2080100,0x40080100,0x100,0x2000000,0x42080000,0x42080100,0x80100,0x42000000,0x42080100,0x2080000,0,0x40080000,0x42000000,0x80100,0x2000100,0x40000100,0x80000,0,0x40080000,0x2080100,0x40000100];
var spfunction6 = [0x20000010,0x20400000,0x4000,0x20404010,0x20400000,0x10,0x20404010,0x400000,0x20004000,0x404010,0x400000,0x20000010,0x400010,0x20004000,0x20000000,0x4010,0,0x400010,0x20004010,0x4000,0x404000,0x20004010,0x10,0x20400010,0x20400010,0,0x404010,0x20404000,0x4010,0x404000,0x20404000,0x20000000,0x20004000,0x10,0x20400010,0x404000,0x20404010,0x400000,0x4010,0x20000010,0x400000,0x20004000,0x20000000,0x4010,0x20000010,0x20404010,0x404000,0x20400000,0x404010,0x20404000,0,0x20400010,0x10,0x4000,0x20400000,0x404010,0x4000,0x400010,0x20004010,0,0x20404000,0x20000000,0x400010,0x20004010];
var spfunction7 = [0x200000,0x4200002,0x4000802,0,0x800,0x4000802,0x200802,0x4200800,0x4200802,0x200000,0,0x4000002,0x2,0x4000000,0x4200002,0x802,0x4000800,0x200802,0x200002,0x4000800,0x4000002,0x4200000,0x4200800,0x200002,0x4200000,0x800,0x802,0x4200802,0x200800,0x2,0x4000000,0x200800,0x4000000,0x200800,0x200000,0x4000802,0x4000802,0x4200002,0x4200002,0x2,0x200002,0x4000000,0x4000800,0x200000,0x4200800,0x802,0x200802,0x4200800,0x802,0x4000002,0x4200802,0x4200000,0x200800,0,0x2,0x4200802,0,0x200802,0x4200000,0x800,0x4000002,0x4000800,0x800,0x200002];
var spfunction8 = [0x10001040,0x1000,0x40000,0x10041040,0x10000000,0x10001040,0x40,0x10000000,0x40040,0x10040000,0x10041040,0x41000,0x10041000,0x41040,0x1000,0x40,0x10040000,0x10000040,0x10001000,0x1040,0x41000,0x40040,0x10040040,0x10041000,0x1040,0,0,0x10040040,0x10000040,0x10001000,0x41040,0x40000,0x41040,0x40000,0x10041000,0x1000,0x40,0x10040040,0x1000,0x41040,0x10001000,0x40,0x10000040,0x10040000,0x10040040,0x10000000,0x40000,0x10001040,0,0x10041040,0x40040,0x10000040,0x10040000,0x10001000,0x10001040,0,0x10041040,0x41000,0x41000,0x1040,0x1040,0x40040,0x10000000,0x10041000];

/**
 * Create necessary sub keys.
 *
 * @param key the 64-bit or 192-bit key.
 *
 * @return the expanded keys.
 */
function _createKeys(key) {
  var pc2bytes0  = [0,0x4,0x20000000,0x20000004,0x10000,0x10004,0x20010000,0x20010004,0x200,0x204,0x20000200,0x20000204,0x10200,0x10204,0x20010200,0x20010204],
      pc2bytes1  = [0,0x1,0x100000,0x100001,0x4000000,0x4000001,0x4100000,0x4100001,0x100,0x101,0x100100,0x100101,0x4000100,0x4000101,0x4100100,0x4100101],
      pc2bytes2  = [0,0x8,0x800,0x808,0x1000000,0x1000008,0x1000800,0x1000808,0,0x8,0x800,0x808,0x1000000,0x1000008,0x1000800,0x1000808],
      pc2bytes3  = [0,0x200000,0x8000000,0x8200000,0x2000,0x202000,0x8002000,0x8202000,0x20000,0x220000,0x8020000,0x8220000,0x22000,0x222000,0x8022000,0x8222000],
      pc2bytes4  = [0,0x40000,0x10,0x40010,0,0x40000,0x10,0x40010,0x1000,0x41000,0x1010,0x41010,0x1000,0x41000,0x1010,0x41010],
      pc2bytes5  = [0,0x400,0x20,0x420,0,0x400,0x20,0x420,0x2000000,0x2000400,0x2000020,0x2000420,0x2000000,0x2000400,0x2000020,0x2000420],
      pc2bytes6  = [0,0x10000000,0x80000,0x10080000,0x2,0x10000002,0x80002,0x10080002,0,0x10000000,0x80000,0x10080000,0x2,0x10000002,0x80002,0x10080002],
      pc2bytes7  = [0,0x10000,0x800,0x10800,0x20000000,0x20010000,0x20000800,0x20010800,0x20000,0x30000,0x20800,0x30800,0x20020000,0x20030000,0x20020800,0x20030800],
      pc2bytes8  = [0,0x40000,0,0x40000,0x2,0x40002,0x2,0x40002,0x2000000,0x2040000,0x2000000,0x2040000,0x2000002,0x2040002,0x2000002,0x2040002],
      pc2bytes9  = [0,0x10000000,0x8,0x10000008,0,0x10000000,0x8,0x10000008,0x400,0x10000400,0x408,0x10000408,0x400,0x10000400,0x408,0x10000408],
      pc2bytes10 = [0,0x20,0,0x20,0x100000,0x100020,0x100000,0x100020,0x2000,0x2020,0x2000,0x2020,0x102000,0x102020,0x102000,0x102020],
      pc2bytes11 = [0,0x1000000,0x200,0x1000200,0x200000,0x1200000,0x200200,0x1200200,0x4000000,0x5000000,0x4000200,0x5000200,0x4200000,0x5200000,0x4200200,0x5200200],
      pc2bytes12 = [0,0x1000,0x8000000,0x8001000,0x80000,0x81000,0x8080000,0x8081000,0x10,0x1010,0x8000010,0x8001010,0x80010,0x81010,0x8080010,0x8081010],
      pc2bytes13 = [0,0x4,0x100,0x104,0,0x4,0x100,0x104,0x1,0x5,0x101,0x105,0x1,0x5,0x101,0x105];

  // how many iterations (1 for des, 3 for triple des)
  // changed by Paul 16/6/2007 to use Triple DES for 9+ byte keys
  var iterations = key.length() > 8 ? 3 : 1;

  // stores the return keys
  var keys = [];

  // now define the left shifts which need to be done
  var shifts = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0];

  var n = 0, tmp;
  for(var j = 0; j < iterations; j++) {
    var left = key.getInt32();
    var right = key.getInt32();

    tmp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
    right ^= tmp;
    left ^= (tmp << 4);

    tmp = ((right >>> -16) ^ left) & 0x0000ffff;
    left ^= tmp;
    right ^= (tmp << -16);

    tmp = ((left >>> 2) ^ right) & 0x33333333;
    right ^= tmp;
    left ^= (tmp << 2);

    tmp = ((right >>> -16) ^ left) & 0x0000ffff;
    left ^= tmp;
    right ^= (tmp << -16);

    tmp = ((left >>> 1) ^ right) & 0x55555555;
    right ^= tmp;
    left ^= (tmp << 1);

    tmp = ((right >>> 8) ^ left) & 0x00ff00ff;
    left ^= tmp;
    right ^= (tmp << 8);

    tmp = ((left >>> 1) ^ right) & 0x55555555;
    right ^= tmp;
    left ^= (tmp << 1);

    // right needs to be shifted and OR'd with last four bits of left
    tmp = (left << 8) | ((right >>> 20) & 0x000000f0);

    // left needs to be put upside down
    left = ((right << 24) | ((right << 8) & 0xff0000) |
      ((right >>> 8) & 0xff00) | ((right >>> 24) & 0xf0));
    right = tmp;

    // now go through and perform these shifts on the left and right keys
    for(var i = 0; i < shifts.length; ++i) {
      //shift the keys either one or two bits to the left
      if(shifts[i]) {
        left = (left << 2) | (left >>> 26);
        right = (right << 2) | (right >>> 26);
      } else {
        left = (left << 1) | (left >>> 27);
        right = (right << 1) | (right >>> 27);
      }
      left &= -0xf;
      right &= -0xf;

      // now apply PC-2, in such a way that E is easier when encrypting or
      // decrypting this conversion will look like PC-2 except only the last 6
      // bits of each byte are used rather than 48 consecutive bits and the
      // order of lines will be according to how the S selection functions will
      // be applied: S2, S4, S6, S8, S1, S3, S5, S7
      var lefttmp = (
        pc2bytes0[left >>> 28] | pc2bytes1[(left >>> 24) & 0xf] |
        pc2bytes2[(left >>> 20) & 0xf] | pc2bytes3[(left >>> 16) & 0xf] |
        pc2bytes4[(left >>> 12) & 0xf] | pc2bytes5[(left >>> 8) & 0xf] |
        pc2bytes6[(left >>> 4) & 0xf]);
      var righttmp = (
        pc2bytes7[right >>> 28] | pc2bytes8[(right >>> 24) & 0xf] |
        pc2bytes9[(right >>> 20) & 0xf] | pc2bytes10[(right >>> 16) & 0xf] |
        pc2bytes11[(right >>> 12) & 0xf] | pc2bytes12[(right >>> 8) & 0xf] |
        pc2bytes13[(right >>> 4) & 0xf]);
      tmp = ((righttmp >>> 16) ^ lefttmp) & 0x0000ffff;
      keys[n++] = lefttmp ^ tmp;
      keys[n++] = righttmp ^ (tmp << 16);
    }
  }

  return keys;
}

/**
 * Updates a single block (1 byte) using DES. The update will either
 * encrypt or decrypt the block.
 *
 * @param keys the expanded keys.
 * @param input the input block (an array of 32-bit words).
 * @param output the updated output block.
 * @param decrypt true to decrypt the block, false to encrypt it.
 */
function _updateBlock(keys, input, output, decrypt) {
  // set up loops for single or triple DES
  var iterations = keys.length === 32 ? 3 : 9;
  var looping;
  if(iterations === 3) {
    looping = decrypt ? [30, -2, -2] : [0, 32, 2];
  } else {
    looping = (decrypt ?
      [94, 62, -2, 32, 64, 2, 30, -2, -2] :
      [0, 32, 2, 62, 30, -2, 64, 96, 2]);
  }

  var tmp;

  var left = input[0];
  var right = input[1];

  // first each 64 bit chunk of the message must be permuted according to IP
  tmp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
  right ^= tmp;
  left ^= (tmp << 4);

  tmp = ((left >>> 16) ^ right) & 0x0000ffff;
  right ^= tmp;
  left ^= (tmp << 16);

  tmp = ((right >>> 2) ^ left) & 0x33333333;
  left ^= tmp;
  right ^= (tmp << 2);

  tmp = ((right >>> 8) ^ left) & 0x00ff00ff;
  left ^= tmp;
  right ^= (tmp << 8);

  tmp = ((left >>> 1) ^ right) & 0x55555555;
  right ^= tmp;
  left ^= (tmp << 1);

  // rotate left 1 bit
  left = ((left << 1) | (left >>> 31));
  right = ((right << 1) | (right >>> 31));

  for(var j = 0; j < iterations; j += 3) {
    var endloop = looping[j + 1];
    var loopinc = looping[j + 2];

    // now go through and perform the encryption or decryption
    for(var i = looping[j]; i != endloop; i += loopinc) {
      var right1 = right ^ keys[i];
      var right2 = ((right >>> 4) | (right << 28)) ^ keys[i + 1];

      // passing these bytes through the S selection functions
      tmp = left;
      left = right;
      right = tmp ^ (
        spfunction2[(right1 >>> 24) & 0x3f] |
        spfunction4[(right1 >>> 16) & 0x3f] |
        spfunction6[(right1 >>>  8) & 0x3f] |
        spfunction8[right1 & 0x3f] |
        spfunction1[(right2 >>> 24) & 0x3f] |
        spfunction3[(right2 >>> 16) & 0x3f] |
        spfunction5[(right2 >>>  8) & 0x3f] |
        spfunction7[right2 & 0x3f]);
    }
    // unreverse left and right
    tmp = left;
    left = right;
    right = tmp;
  }

  // rotate right 1 bit
  left = ((left >>> 1) | (left << 31));
  right = ((right >>> 1) | (right << 31));

  // now perform IP-1, which is IP in the opposite direction
  tmp = ((left >>> 1) ^ right) & 0x55555555;
  right ^= tmp;
  left ^= (tmp << 1);

  tmp = ((right >>> 8) ^ left) & 0x00ff00ff;
  left ^= tmp;
  right ^= (tmp << 8);

  tmp = ((right >>> 2) ^ left) & 0x33333333;
  left ^= tmp;
  right ^= (tmp << 2);

  tmp = ((left >>> 16) ^ right) & 0x0000ffff;
  right ^= tmp;
  left ^= (tmp << 16);

  tmp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
  right ^= tmp;
  left ^= (tmp << 4);

  output[0] = left;
  output[1] = right;
}

/**
 * Deprecated. Instead, use:
 *
 * forge.cipher.createCipher('DES-<mode>', key);
 * forge.cipher.createDecipher('DES-<mode>', key);
 *
 * Creates a deprecated DES cipher object. This object's mode will default to
 * CBC (cipher-block-chaining).
 *
 * The key may be given as a binary-encoded string of bytes or a byte buffer.
 *
 * @param options the options to use.
 *          key the symmetric key to use (64 or 192 bits).
 *          output the buffer to write to.
 *          decrypt true for decryption, false for encryption.
 *          mode the cipher mode to use (default: 'CBC').
 *
 * @return the cipher.
 */
function _createCipher(options) {
  options = options || {};
  var mode = (options.mode || 'CBC').toUpperCase();
  var algorithm = 'DES-' + mode;

  var cipher;
  if(options.decrypt) {
    cipher = forge.cipher.createDecipher(algorithm, options.key);
  } else {
    cipher = forge.cipher.createCipher(algorithm, options.key);
  }

  // backwards compatible start API
  var start = cipher.start;
  cipher.start = function(iv, options) {
    // backwards compatibility: support second arg as output buffer
    var output = null;
    if(options instanceof forge.util.ByteBuffer) {
      output = options;
      options = {};
    }
    options = options || {};
    options.output = output;
    options.iv = iv;
    start.call(cipher, options);
  };

  return cipher;
}


/***/ }),

/***/ "./node_modules/node-forge/lib/forge.js":
/*!**********************************************!*\
  !*** ./node_modules/node-forge/lib/forge.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Node.js module for Forge.
 *
 * @author Dave Longley
 *
 * Copyright 2011-2016 Digital Bazaar, Inc.
 */
module.exports = {
  // default options
  options: {
    usePureJavaScript: false
  }
};


/***/ }),

/***/ "./node_modules/node-forge/lib/hmac.js":
/*!*********************************************!*\
  !*** ./node_modules/node-forge/lib/hmac.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hash-based Message Authentication Code implementation. Requires a message
 * digest object that can be obtained, for example, from forge.md.sha1 or
 * forge.md.md5.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2012 Digital Bazaar, Inc. All rights reserved.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./md */ "./node_modules/node-forge/lib/md.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

/* HMAC API */
var hmac = module.exports = forge.hmac = forge.hmac || {};

/**
 * Creates an HMAC object that uses the given message digest object.
 *
 * @return an HMAC object.
 */
hmac.create = function() {
  // the hmac key to use
  var _key = null;

  // the message digest to use
  var _md = null;

  // the inner padding
  var _ipadding = null;

  // the outer padding
  var _opadding = null;

  // hmac context
  var ctx = {};

  /**
   * Starts or restarts the HMAC with the given key and message digest.
   *
   * @param md the message digest to use, null to reuse the previous one,
   *           a string to use builtin 'sha1', 'md5', 'sha256'.
   * @param key the key to use as a string, array of bytes, byte buffer,
   *           or null to reuse the previous key.
   */
  ctx.start = function(md, key) {
    if(md !== null) {
      if(typeof md === 'string') {
        // create builtin message digest
        md = md.toLowerCase();
        if(md in forge.md.algorithms) {
          _md = forge.md.algorithms[md].create();
        } else {
          throw new Error('Unknown hash algorithm "' + md + '"');
        }
      } else {
        // store message digest
        _md = md;
      }
    }

    if(key === null) {
      // reuse previous key
      key = _key;
    } else {
      if(typeof key === 'string') {
        // convert string into byte buffer
        key = forge.util.createBuffer(key);
      } else if(forge.util.isArray(key)) {
        // convert byte array into byte buffer
        var tmp = key;
        key = forge.util.createBuffer();
        for(var i = 0; i < tmp.length; ++i) {
          key.putByte(tmp[i]);
        }
      }

      // if key is longer than blocksize, hash it
      var keylen = key.length();
      if(keylen > _md.blockLength) {
        _md.start();
        _md.update(key.bytes());
        key = _md.digest();
      }

      // mix key into inner and outer padding
      // ipadding = [0x36 * blocksize] ^ key
      // opadding = [0x5C * blocksize] ^ key
      _ipadding = forge.util.createBuffer();
      _opadding = forge.util.createBuffer();
      keylen = key.length();
      for(var i = 0; i < keylen; ++i) {
        var tmp = key.at(i);
        _ipadding.putByte(0x36 ^ tmp);
        _opadding.putByte(0x5C ^ tmp);
      }

      // if key is shorter than blocksize, add additional padding
      if(keylen < _md.blockLength) {
        var tmp = _md.blockLength - keylen;
        for(var i = 0; i < tmp; ++i) {
          _ipadding.putByte(0x36);
          _opadding.putByte(0x5C);
        }
      }
      _key = key;
      _ipadding = _ipadding.bytes();
      _opadding = _opadding.bytes();
    }

    // digest is done like so: hash(opadding | hash(ipadding | message))

    // prepare to do inner hash
    // hash(ipadding | message)
    _md.start();
    _md.update(_ipadding);
  };

  /**
   * Updates the HMAC with the given message bytes.
   *
   * @param bytes the bytes to update with.
   */
  ctx.update = function(bytes) {
    _md.update(bytes);
  };

  /**
   * Produces the Message Authentication Code (MAC).
   *
   * @return a byte buffer containing the digest value.
   */
  ctx.getMac = function() {
    // digest is done like so: hash(opadding | hash(ipadding | message))
    // here we do the outer hashing
    var inner = _md.digest().bytes();
    _md.start();
    _md.update(_opadding);
    _md.update(inner);
    return _md.digest();
  };
  // alias for getMac
  ctx.digest = ctx.getMac;

  return ctx;
};


/***/ }),

/***/ "./node_modules/node-forge/lib/jsbn.js":
/*!*********************************************!*\
  !*** ./node_modules/node-forge/lib/jsbn.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Copyright (c) 2005  Tom Wu
// All Rights Reserved.
// See "LICENSE" for details.

// Basic JavaScript BN library - subset useful for RSA encryption.

/*
Licensing (LICENSE)
-------------------

This software is covered under the following copyright:
*/
/*
 * Copyright (c) 2003-2005  Tom Wu
 * All Rights Reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY
 * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
 *
 * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
 * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
 * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
 * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
 * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * In addition, the following condition applies:
 *
 * All redistributions must retain an intact copy of this copyright notice
 * and disclaimer.
 */
/*
Address all questions regarding this license to:

  Tom Wu
  tjw@cs.Stanford.EDU
*/
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");

module.exports = forge.jsbn = forge.jsbn || {};

// Bits per digit
var dbits;

// JavaScript engine analysis
var canary = 0xdeadbeefcafe;
var j_lm = ((canary&0xffffff)==0xefcafe);

// (public) Constructor
function BigInteger(a,b,c) {
  this.data = [];
  if(a != null)
    if("number" == typeof a) this.fromNumber(a,b,c);
    else if(b == null && "string" != typeof a) this.fromString(a,256);
    else this.fromString(a,b);
}
forge.jsbn.BigInteger = BigInteger;

// return new, unset BigInteger
function nbi() { return new BigInteger(null); }

// am: Compute w_j += (x*this_i), propagate carries,
// c is initial carry, returns final carry.
// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
// We need to select the fastest one that works in this environment.

// am1: use a single mult and divide to get the high bits,
// max digit bits should be 26 because
// max internal value = 2*dvalue^2-2*dvalue (< 2^53)
function am1(i,x,w,j,c,n) {
  while(--n >= 0) {
    var v = x*this.data[i++]+w.data[j]+c;
    c = Math.floor(v/0x4000000);
    w.data[j++] = v&0x3ffffff;
  }
  return c;
}
// am2 avoids a big mult-and-extract completely.
// Max digit bits should be <= 30 because we do bitwise ops
// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
function am2(i,x,w,j,c,n) {
  var xl = x&0x7fff, xh = x>>15;
  while(--n >= 0) {
    var l = this.data[i]&0x7fff;
    var h = this.data[i++]>>15;
    var m = xh*l+h*xl;
    l = xl*l+((m&0x7fff)<<15)+w.data[j]+(c&0x3fffffff);
    c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
    w.data[j++] = l&0x3fffffff;
  }
  return c;
}
// Alternately, set max digit bits to 28 since some
// browsers slow down when dealing with 32-bit numbers.
function am3(i,x,w,j,c,n) {
  var xl = x&0x3fff, xh = x>>14;
  while(--n >= 0) {
    var l = this.data[i]&0x3fff;
    var h = this.data[i++]>>14;
    var m = xh*l+h*xl;
    l = xl*l+((m&0x3fff)<<14)+w.data[j]+c;
    c = (l>>28)+(m>>14)+xh*h;
    w.data[j++] = l&0xfffffff;
  }
  return c;
}

// node.js (no browser)
if(typeof(navigator) === 'undefined')
{
   BigInteger.prototype.am = am3;
   dbits = 28;
} else if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
  BigInteger.prototype.am = am2;
  dbits = 30;
} else if(j_lm && (navigator.appName != "Netscape")) {
  BigInteger.prototype.am = am1;
  dbits = 26;
} else { // Mozilla/Netscape seems to prefer am3
  BigInteger.prototype.am = am3;
  dbits = 28;
}

BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = ((1<<dbits)-1);
BigInteger.prototype.DV = (1<<dbits);

var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2,BI_FP);
BigInteger.prototype.F1 = BI_FP-dbits;
BigInteger.prototype.F2 = 2*dbits-BI_FP;

// Digit conversions
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array();
var rr,vv;
rr = "0".charCodeAt(0);
for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
rr = "a".charCodeAt(0);
for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
rr = "A".charCodeAt(0);
for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

function int2char(n) { return BI_RM.charAt(n); }
function intAt(s,i) {
  var c = BI_RC[s.charCodeAt(i)];
  return (c==null)?-1:c;
}

// (protected) copy this to r
function bnpCopyTo(r) {
  for(var i = this.t-1; i >= 0; --i) r.data[i] = this.data[i];
  r.t = this.t;
  r.s = this.s;
}

// (protected) set from integer value x, -DV <= x < DV
function bnpFromInt(x) {
  this.t = 1;
  this.s = (x<0)?-1:0;
  if(x > 0) this.data[0] = x;
  else if(x < -1) this.data[0] = x+this.DV;
  else this.t = 0;
}

// return bigint initialized to value
function nbv(i) { var r = nbi(); r.fromInt(i); return r; }

// (protected) set from string and radix
function bnpFromString(s,b) {
  var k;
  if(b == 16) k = 4;
  else if(b == 8) k = 3;
  else if(b == 256) k = 8; // byte array
  else if(b == 2) k = 1;
  else if(b == 32) k = 5;
  else if(b == 4) k = 2;
  else { this.fromRadix(s,b); return; }
  this.t = 0;
  this.s = 0;
  var i = s.length, mi = false, sh = 0;
  while(--i >= 0) {
    var x = (k==8)?s[i]&0xff:intAt(s,i);
    if(x < 0) {
      if(s.charAt(i) == "-") mi = true;
      continue;
    }
    mi = false;
    if(sh == 0)
      this.data[this.t++] = x;
    else if(sh+k > this.DB) {
      this.data[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
      this.data[this.t++] = (x>>(this.DB-sh));
    } else
      this.data[this.t-1] |= x<<sh;
    sh += k;
    if(sh >= this.DB) sh -= this.DB;
  }
  if(k == 8 && (s[0]&0x80) != 0) {
    this.s = -1;
    if(sh > 0) this.data[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
  }
  this.clamp();
  if(mi) BigInteger.ZERO.subTo(this,this);
}

// (protected) clamp off excess high words
function bnpClamp() {
  var c = this.s&this.DM;
  while(this.t > 0 && this.data[this.t-1] == c) --this.t;
}

// (public) return string representation in given radix
function bnToString(b) {
  if(this.s < 0) return "-"+this.negate().toString(b);
  var k;
  if(b == 16) k = 4;
  else if(b == 8) k = 3;
  else if(b == 2) k = 1;
  else if(b == 32) k = 5;
  else if(b == 4) k = 2;
  else return this.toRadix(b);
  var km = (1<<k)-1, d, m = false, r = "", i = this.t;
  var p = this.DB-(i*this.DB)%k;
  if(i-- > 0) {
    if(p < this.DB && (d = this.data[i]>>p) > 0) { m = true; r = int2char(d); }
    while(i >= 0) {
      if(p < k) {
        d = (this.data[i]&((1<<p)-1))<<(k-p);
        d |= this.data[--i]>>(p+=this.DB-k);
      } else {
        d = (this.data[i]>>(p-=k))&km;
        if(p <= 0) { p += this.DB; --i; }
      }
      if(d > 0) m = true;
      if(m) r += int2char(d);
    }
  }
  return m?r:"0";
}

// (public) -this
function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }

// (public) |this|
function bnAbs() { return (this.s<0)?this.negate():this; }

// (public) return + if this > a, - if this < a, 0 if equal
function bnCompareTo(a) {
  var r = this.s-a.s;
  if(r != 0) return r;
  var i = this.t;
  r = i-a.t;
  if(r != 0) return (this.s<0)?-r:r;
  while(--i >= 0) if((r=this.data[i]-a.data[i]) != 0) return r;
  return 0;
}

// returns bit length of the integer x
function nbits(x) {
  var r = 1, t;
  if((t=x>>>16) != 0) { x = t; r += 16; }
  if((t=x>>8) != 0) { x = t; r += 8; }
  if((t=x>>4) != 0) { x = t; r += 4; }
  if((t=x>>2) != 0) { x = t; r += 2; }
  if((t=x>>1) != 0) { x = t; r += 1; }
  return r;
}

// (public) return the number of bits in "this"
function bnBitLength() {
  if(this.t <= 0) return 0;
  return this.DB*(this.t-1)+nbits(this.data[this.t-1]^(this.s&this.DM));
}

// (protected) r = this << n*DB
function bnpDLShiftTo(n,r) {
  var i;
  for(i = this.t-1; i >= 0; --i) r.data[i+n] = this.data[i];
  for(i = n-1; i >= 0; --i) r.data[i] = 0;
  r.t = this.t+n;
  r.s = this.s;
}

// (protected) r = this >> n*DB
function bnpDRShiftTo(n,r) {
  for(var i = n; i < this.t; ++i) r.data[i-n] = this.data[i];
  r.t = Math.max(this.t-n,0);
  r.s = this.s;
}

// (protected) r = this << n
function bnpLShiftTo(n,r) {
  var bs = n%this.DB;
  var cbs = this.DB-bs;
  var bm = (1<<cbs)-1;
  var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
  for(i = this.t-1; i >= 0; --i) {
    r.data[i+ds+1] = (this.data[i]>>cbs)|c;
    c = (this.data[i]&bm)<<bs;
  }
  for(i = ds-1; i >= 0; --i) r.data[i] = 0;
  r.data[ds] = c;
  r.t = this.t+ds+1;
  r.s = this.s;
  r.clamp();
}

// (protected) r = this >> n
function bnpRShiftTo(n,r) {
  r.s = this.s;
  var ds = Math.floor(n/this.DB);
  if(ds >= this.t) { r.t = 0; return; }
  var bs = n%this.DB;
  var cbs = this.DB-bs;
  var bm = (1<<bs)-1;
  r.data[0] = this.data[ds]>>bs;
  for(var i = ds+1; i < this.t; ++i) {
    r.data[i-ds-1] |= (this.data[i]&bm)<<cbs;
    r.data[i-ds] = this.data[i]>>bs;
  }
  if(bs > 0) r.data[this.t-ds-1] |= (this.s&bm)<<cbs;
  r.t = this.t-ds;
  r.clamp();
}

// (protected) r = this - a
function bnpSubTo(a,r) {
  var i = 0, c = 0, m = Math.min(a.t,this.t);
  while(i < m) {
    c += this.data[i]-a.data[i];
    r.data[i++] = c&this.DM;
    c >>= this.DB;
  }
  if(a.t < this.t) {
    c -= a.s;
    while(i < this.t) {
      c += this.data[i];
      r.data[i++] = c&this.DM;
      c >>= this.DB;
    }
    c += this.s;
  } else {
    c += this.s;
    while(i < a.t) {
      c -= a.data[i];
      r.data[i++] = c&this.DM;
      c >>= this.DB;
    }
    c -= a.s;
  }
  r.s = (c<0)?-1:0;
  if(c < -1) r.data[i++] = this.DV+c;
  else if(c > 0) r.data[i++] = c;
  r.t = i;
  r.clamp();
}

// (protected) r = this * a, r != this,a (HAC 14.12)
// "this" should be the larger one if appropriate.
function bnpMultiplyTo(a,r) {
  var x = this.abs(), y = a.abs();
  var i = x.t;
  r.t = i+y.t;
  while(--i >= 0) r.data[i] = 0;
  for(i = 0; i < y.t; ++i) r.data[i+x.t] = x.am(0,y.data[i],r,i,0,x.t);
  r.s = 0;
  r.clamp();
  if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
}

// (protected) r = this^2, r != this (HAC 14.16)
function bnpSquareTo(r) {
  var x = this.abs();
  var i = r.t = 2*x.t;
  while(--i >= 0) r.data[i] = 0;
  for(i = 0; i < x.t-1; ++i) {
    var c = x.am(i,x.data[i],r,2*i,0,1);
    if((r.data[i+x.t]+=x.am(i+1,2*x.data[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
      r.data[i+x.t] -= x.DV;
      r.data[i+x.t+1] = 1;
    }
  }
  if(r.t > 0) r.data[r.t-1] += x.am(i,x.data[i],r,2*i,0,1);
  r.s = 0;
  r.clamp();
}

// (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
// r != q, this != m.  q or r may be null.
function bnpDivRemTo(m,q,r) {
  var pm = m.abs();
  if(pm.t <= 0) return;
  var pt = this.abs();
  if(pt.t < pm.t) {
    if(q != null) q.fromInt(0);
    if(r != null) this.copyTo(r);
    return;
  }
  if(r == null) r = nbi();
  var y = nbi(), ts = this.s, ms = m.s;
  var nsh = this.DB-nbits(pm.data[pm.t-1]);	// normalize modulus
  if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); } else { pm.copyTo(y); pt.copyTo(r); }
  var ys = y.t;
  var y0 = y.data[ys-1];
  if(y0 == 0) return;
  var yt = y0*(1<<this.F1)+((ys>1)?y.data[ys-2]>>this.F2:0);
  var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
  var i = r.t, j = i-ys, t = (q==null)?nbi():q;
  y.dlShiftTo(j,t);
  if(r.compareTo(t) >= 0) {
    r.data[r.t++] = 1;
    r.subTo(t,r);
  }
  BigInteger.ONE.dlShiftTo(ys,t);
  t.subTo(y,y);	// "negative" y so we can replace sub with am later
  while(y.t < ys) y.data[y.t++] = 0;
  while(--j >= 0) {
    // Estimate quotient digit
    var qd = (r.data[--i]==y0)?this.DM:Math.floor(r.data[i]*d1+(r.data[i-1]+e)*d2);
    if((r.data[i]+=y.am(0,qd,r,j,0,ys)) < qd) {	// Try it out
      y.dlShiftTo(j,t);
      r.subTo(t,r);
      while(r.data[i] < --qd) r.subTo(t,r);
    }
  }
  if(q != null) {
    r.drShiftTo(ys,q);
    if(ts != ms) BigInteger.ZERO.subTo(q,q);
  }
  r.t = ys;
  r.clamp();
  if(nsh > 0) r.rShiftTo(nsh,r);	// Denormalize remainder
  if(ts < 0) BigInteger.ZERO.subTo(r,r);
}

// (public) this mod a
function bnMod(a) {
  var r = nbi();
  this.abs().divRemTo(a,null,r);
  if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
  return r;
}

// Modular reduction using "classic" algorithm
function Classic(m) { this.m = m; }
function cConvert(x) {
  if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
  else return x;
}
function cRevert(x) { return x; }
function cReduce(x) { x.divRemTo(this.m,null,x); }
function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;

// (protected) return "-1/this % 2^DB"; useful for Mont. reduction
// justification:
//         xy == 1 (mod m)
//         xy =  1+km
//   xy(2-xy) = (1+km)(1-km)
// x[y(2-xy)] = 1-k^2m^2
// x[y(2-xy)] == 1 (mod m^2)
// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
// JS multiply "overflows" differently from C/C++, so care is needed here.
function bnpInvDigit() {
  if(this.t < 1) return 0;
  var x = this.data[0];
  if((x&1) == 0) return 0;
  var y = x&3;		// y == 1/x mod 2^2
  y = (y*(2-(x&0xf)*y))&0xf;	// y == 1/x mod 2^4
  y = (y*(2-(x&0xff)*y))&0xff;	// y == 1/x mod 2^8
  y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;	// y == 1/x mod 2^16
  // last step - calculate inverse mod DV directly;
  // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
  y = (y*(2-x*y%this.DV))%this.DV;		// y == 1/x mod 2^dbits
  // we really want the negative inverse, and -DV < y < DV
  return (y>0)?this.DV-y:-y;
}

// Montgomery reduction
function Montgomery(m) {
  this.m = m;
  this.mp = m.invDigit();
  this.mpl = this.mp&0x7fff;
  this.mph = this.mp>>15;
  this.um = (1<<(m.DB-15))-1;
  this.mt2 = 2*m.t;
}

// xR mod m
function montConvert(x) {
  var r = nbi();
  x.abs().dlShiftTo(this.m.t,r);
  r.divRemTo(this.m,null,r);
  if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
  return r;
}

// x/R mod m
function montRevert(x) {
  var r = nbi();
  x.copyTo(r);
  this.reduce(r);
  return r;
}

// x = x/R mod m (HAC 14.32)
function montReduce(x) {
  while(x.t <= this.mt2)	// pad x so am has enough room later
    x.data[x.t++] = 0;
  for(var i = 0; i < this.m.t; ++i) {
    // faster way of calculating u0 = x.data[i]*mp mod DV
    var j = x.data[i]&0x7fff;
    var u0 = (j*this.mpl+(((j*this.mph+(x.data[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
    // use am to combine the multiply-shift-add into one call
    j = i+this.m.t;
    x.data[j] += this.m.am(0,u0,x,i,0,this.m.t);
    // propagate carry
    while(x.data[j] >= x.DV) { x.data[j] -= x.DV; x.data[++j]++; }
  }
  x.clamp();
  x.drShiftTo(this.m.t,x);
  if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
}

// r = "x^2/R mod m"; x != r
function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

// r = "xy/R mod m"; x,y != r
function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;

// (protected) true iff this is even
function bnpIsEven() { return ((this.t>0)?(this.data[0]&1):this.s) == 0; }

// (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
function bnpExp(e,z) {
  if(e > 0xffffffff || e < 1) return BigInteger.ONE;
  var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
  g.copyTo(r);
  while(--i >= 0) {
    z.sqrTo(r,r2);
    if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
    else { var t = r; r = r2; r2 = t; }
  }
  return z.revert(r);
}

// (public) this^e % m, 0 <= e < 2^32
function bnModPowInt(e,m) {
  var z;
  if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
  return this.exp(e,z);
}

// protected
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;

// public
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;

// "constants"
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);

// jsbn2 lib

//Copyright (c) 2005-2009  Tom Wu
//All Rights Reserved.
//See "LICENSE" for details (See jsbn.js for LICENSE).

//Extended JavaScript BN functions, required for RSA private ops.

//Version 1.1: new BigInteger("0", 10) returns "proper" zero

//(public)
function bnClone() { var r = nbi(); this.copyTo(r); return r; }

//(public) return value as integer
function bnIntValue() {
if(this.s < 0) {
 if(this.t == 1) return this.data[0]-this.DV;
 else if(this.t == 0) return -1;
} else if(this.t == 1) return this.data[0];
else if(this.t == 0) return 0;
// assumes 16 < DB < 32
return ((this.data[1]&((1<<(32-this.DB))-1))<<this.DB)|this.data[0];
}

//(public) return value as byte
function bnByteValue() { return (this.t==0)?this.s:(this.data[0]<<24)>>24; }

//(public) return value as short (assumes DB>=16)
function bnShortValue() { return (this.t==0)?this.s:(this.data[0]<<16)>>16; }

//(protected) return x s.t. r^x < DV
function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }

//(public) 0 if this == 0, 1 if this > 0
function bnSigNum() {
if(this.s < 0) return -1;
else if(this.t <= 0 || (this.t == 1 && this.data[0] <= 0)) return 0;
else return 1;
}

//(protected) convert to radix string
function bnpToRadix(b) {
if(b == null) b = 10;
if(this.signum() == 0 || b < 2 || b > 36) return "0";
var cs = this.chunkSize(b);
var a = Math.pow(b,cs);
var d = nbv(a), y = nbi(), z = nbi(), r = "";
this.divRemTo(d,y,z);
while(y.signum() > 0) {
 r = (a+z.intValue()).toString(b).substr(1) + r;
 y.divRemTo(d,y,z);
}
return z.intValue().toString(b) + r;
}

//(protected) convert from radix string
function bnpFromRadix(s,b) {
this.fromInt(0);
if(b == null) b = 10;
var cs = this.chunkSize(b);
var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
for(var i = 0; i < s.length; ++i) {
 var x = intAt(s,i);
 if(x < 0) {
   if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
   continue;
 }
 w = b*w+x;
 if(++j >= cs) {
   this.dMultiply(d);
   this.dAddOffset(w,0);
   j = 0;
   w = 0;
 }
}
if(j > 0) {
 this.dMultiply(Math.pow(b,j));
 this.dAddOffset(w,0);
}
if(mi) BigInteger.ZERO.subTo(this,this);
}

//(protected) alternate constructor
function bnpFromNumber(a,b,c) {
if("number" == typeof b) {
 // new BigInteger(int,int,RNG)
 if(a < 2) this.fromInt(1);
 else {
   this.fromNumber(a,c);
   if(!this.testBit(a-1))  // force MSB set
     this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);
   if(this.isEven()) this.dAddOffset(1,0); // force odd
   while(!this.isProbablePrime(b)) {
     this.dAddOffset(2,0);
     if(this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a-1),this);
   }
 }
} else {
 // new BigInteger(int,RNG)
 var x = new Array(), t = a&7;
 x.length = (a>>3)+1;
 b.nextBytes(x);
 if(t > 0) x[0] &= ((1<<t)-1); else x[0] = 0;
 this.fromString(x,256);
}
}

//(public) convert to bigendian byte array
function bnToByteArray() {
var i = this.t, r = new Array();
r[0] = this.s;
var p = this.DB-(i*this.DB)%8, d, k = 0;
if(i-- > 0) {
 if(p < this.DB && (d = this.data[i]>>p) != (this.s&this.DM)>>p)
   r[k++] = d|(this.s<<(this.DB-p));
 while(i >= 0) {
   if(p < 8) {
     d = (this.data[i]&((1<<p)-1))<<(8-p);
     d |= this.data[--i]>>(p+=this.DB-8);
   } else {
     d = (this.data[i]>>(p-=8))&0xff;
     if(p <= 0) { p += this.DB; --i; }
   }
   if((d&0x80) != 0) d |= -256;
   if(k == 0 && (this.s&0x80) != (d&0x80)) ++k;
   if(k > 0 || d != this.s) r[k++] = d;
 }
}
return r;
}

function bnEquals(a) { return(this.compareTo(a)==0); }
function bnMin(a) { return(this.compareTo(a)<0)?this:a; }
function bnMax(a) { return(this.compareTo(a)>0)?this:a; }

//(protected) r = this op a (bitwise)
function bnpBitwiseTo(a,op,r) {
var i, f, m = Math.min(a.t,this.t);
for(i = 0; i < m; ++i) r.data[i] = op(this.data[i],a.data[i]);
if(a.t < this.t) {
 f = a.s&this.DM;
 for(i = m; i < this.t; ++i) r.data[i] = op(this.data[i],f);
 r.t = this.t;
} else {
 f = this.s&this.DM;
 for(i = m; i < a.t; ++i) r.data[i] = op(f,a.data[i]);
 r.t = a.t;
}
r.s = op(this.s,a.s);
r.clamp();
}

//(public) this & a
function op_and(x,y) { return x&y; }
function bnAnd(a) { var r = nbi(); this.bitwiseTo(a,op_and,r); return r; }

//(public) this | a
function op_or(x,y) { return x|y; }
function bnOr(a) { var r = nbi(); this.bitwiseTo(a,op_or,r); return r; }

//(public) this ^ a
function op_xor(x,y) { return x^y; }
function bnXor(a) { var r = nbi(); this.bitwiseTo(a,op_xor,r); return r; }

//(public) this & ~a
function op_andnot(x,y) { return x&~y; }
function bnAndNot(a) { var r = nbi(); this.bitwiseTo(a,op_andnot,r); return r; }

//(public) ~this
function bnNot() {
var r = nbi();
for(var i = 0; i < this.t; ++i) r.data[i] = this.DM&~this.data[i];
r.t = this.t;
r.s = ~this.s;
return r;
}

//(public) this << n
function bnShiftLeft(n) {
var r = nbi();
if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
return r;
}

//(public) this >> n
function bnShiftRight(n) {
var r = nbi();
if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
return r;
}

//return index of lowest 1-bit in x, x < 2^31
function lbit(x) {
if(x == 0) return -1;
var r = 0;
if((x&0xffff) == 0) { x >>= 16; r += 16; }
if((x&0xff) == 0) { x >>= 8; r += 8; }
if((x&0xf) == 0) { x >>= 4; r += 4; }
if((x&3) == 0) { x >>= 2; r += 2; }
if((x&1) == 0) ++r;
return r;
}

//(public) returns index of lowest 1-bit (or -1 if none)
function bnGetLowestSetBit() {
for(var i = 0; i < this.t; ++i)
 if(this.data[i] != 0) return i*this.DB+lbit(this.data[i]);
if(this.s < 0) return this.t*this.DB;
return -1;
}

//return number of 1 bits in x
function cbit(x) {
var r = 0;
while(x != 0) { x &= x-1; ++r; }
return r;
}

//(public) return number of set bits
function bnBitCount() {
var r = 0, x = this.s&this.DM;
for(var i = 0; i < this.t; ++i) r += cbit(this.data[i]^x);
return r;
}

//(public) true iff nth bit is set
function bnTestBit(n) {
var j = Math.floor(n/this.DB);
if(j >= this.t) return(this.s!=0);
return((this.data[j]&(1<<(n%this.DB)))!=0);
}

//(protected) this op (1<<n)
function bnpChangeBit(n,op) {
var r = BigInteger.ONE.shiftLeft(n);
this.bitwiseTo(r,op,r);
return r;
}

//(public) this | (1<<n)
function bnSetBit(n) { return this.changeBit(n,op_or); }

//(public) this & ~(1<<n)
function bnClearBit(n) { return this.changeBit(n,op_andnot); }

//(public) this ^ (1<<n)
function bnFlipBit(n) { return this.changeBit(n,op_xor); }

//(protected) r = this + a
function bnpAddTo(a,r) {
var i = 0, c = 0, m = Math.min(a.t,this.t);
while(i < m) {
 c += this.data[i]+a.data[i];
 r.data[i++] = c&this.DM;
 c >>= this.DB;
}
if(a.t < this.t) {
 c += a.s;
 while(i < this.t) {
   c += this.data[i];
   r.data[i++] = c&this.DM;
   c >>= this.DB;
 }
 c += this.s;
} else {
 c += this.s;
 while(i < a.t) {
   c += a.data[i];
   r.data[i++] = c&this.DM;
   c >>= this.DB;
 }
 c += a.s;
}
r.s = (c<0)?-1:0;
if(c > 0) r.data[i++] = c;
else if(c < -1) r.data[i++] = this.DV+c;
r.t = i;
r.clamp();
}

//(public) this + a
function bnAdd(a) { var r = nbi(); this.addTo(a,r); return r; }

//(public) this - a
function bnSubtract(a) { var r = nbi(); this.subTo(a,r); return r; }

//(public) this * a
function bnMultiply(a) { var r = nbi(); this.multiplyTo(a,r); return r; }

//(public) this / a
function bnDivide(a) { var r = nbi(); this.divRemTo(a,r,null); return r; }

//(public) this % a
function bnRemainder(a) { var r = nbi(); this.divRemTo(a,null,r); return r; }

//(public) [this/a,this%a]
function bnDivideAndRemainder(a) {
var q = nbi(), r = nbi();
this.divRemTo(a,q,r);
return new Array(q,r);
}

//(protected) this *= n, this >= 0, 1 < n < DV
function bnpDMultiply(n) {
this.data[this.t] = this.am(0,n-1,this,0,0,this.t);
++this.t;
this.clamp();
}

//(protected) this += n << w words, this >= 0
function bnpDAddOffset(n,w) {
if(n == 0) return;
while(this.t <= w) this.data[this.t++] = 0;
this.data[w] += n;
while(this.data[w] >= this.DV) {
 this.data[w] -= this.DV;
 if(++w >= this.t) this.data[this.t++] = 0;
 ++this.data[w];
}
}

//A "null" reducer
function NullExp() {}
function nNop(x) { return x; }
function nMulTo(x,y,r) { x.multiplyTo(y,r); }
function nSqrTo(x,r) { x.squareTo(r); }

NullExp.prototype.convert = nNop;
NullExp.prototype.revert = nNop;
NullExp.prototype.mulTo = nMulTo;
NullExp.prototype.sqrTo = nSqrTo;

//(public) this^e
function bnPow(e) { return this.exp(e,new NullExp()); }

//(protected) r = lower n words of "this * a", a.t <= n
//"this" should be the larger one if appropriate.
function bnpMultiplyLowerTo(a,n,r) {
var i = Math.min(this.t+a.t,n);
r.s = 0; // assumes a,this >= 0
r.t = i;
while(i > 0) r.data[--i] = 0;
var j;
for(j = r.t-this.t; i < j; ++i) r.data[i+this.t] = this.am(0,a.data[i],r,i,0,this.t);
for(j = Math.min(a.t,n); i < j; ++i) this.am(0,a.data[i],r,i,0,n-i);
r.clamp();
}

//(protected) r = "this * a" without lower n words, n > 0
//"this" should be the larger one if appropriate.
function bnpMultiplyUpperTo(a,n,r) {
--n;
var i = r.t = this.t+a.t-n;
r.s = 0; // assumes a,this >= 0
while(--i >= 0) r.data[i] = 0;
for(i = Math.max(n-this.t,0); i < a.t; ++i)
 r.data[this.t+i-n] = this.am(n-i,a.data[i],r,0,0,this.t+i-n);
r.clamp();
r.drShiftTo(1,r);
}

//Barrett modular reduction
function Barrett(m) {
// setup Barrett
this.r2 = nbi();
this.q3 = nbi();
BigInteger.ONE.dlShiftTo(2*m.t,this.r2);
this.mu = this.r2.divide(m);
this.m = m;
}

function barrettConvert(x) {
if(x.s < 0 || x.t > 2*this.m.t) return x.mod(this.m);
else if(x.compareTo(this.m) < 0) return x;
else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
}

function barrettRevert(x) { return x; }

//x = x mod m (HAC 14.42)
function barrettReduce(x) {
x.drShiftTo(this.m.t-1,this.r2);
if(x.t > this.m.t+1) { x.t = this.m.t+1; x.clamp(); }
this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);
this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);
while(x.compareTo(this.r2) < 0) x.dAddOffset(1,this.m.t+1);
x.subTo(this.r2,x);
while(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
}

//r = x^2 mod m; x != r
function barrettSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

//r = x*y mod m; x,y != r
function barrettMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

Barrett.prototype.convert = barrettConvert;
Barrett.prototype.revert = barrettRevert;
Barrett.prototype.reduce = barrettReduce;
Barrett.prototype.mulTo = barrettMulTo;
Barrett.prototype.sqrTo = barrettSqrTo;

//(public) this^e % m (HAC 14.85)
function bnModPow(e,m) {
var i = e.bitLength(), k, r = nbv(1), z;
if(i <= 0) return r;
else if(i < 18) k = 1;
else if(i < 48) k = 3;
else if(i < 144) k = 4;
else if(i < 768) k = 5;
else k = 6;
if(i < 8)
 z = new Classic(m);
else if(m.isEven())
 z = new Barrett(m);
else
 z = new Montgomery(m);

// precomputation
var g = new Array(), n = 3, k1 = k-1, km = (1<<k)-1;
g[1] = z.convert(this);
if(k > 1) {
 var g2 = nbi();
 z.sqrTo(g[1],g2);
 while(n <= km) {
   g[n] = nbi();
   z.mulTo(g2,g[n-2],g[n]);
   n += 2;
 }
}

var j = e.t-1, w, is1 = true, r2 = nbi(), t;
i = nbits(e.data[j])-1;
while(j >= 0) {
 if(i >= k1) w = (e.data[j]>>(i-k1))&km;
 else {
   w = (e.data[j]&((1<<(i+1))-1))<<(k1-i);
   if(j > 0) w |= e.data[j-1]>>(this.DB+i-k1);
 }

 n = k;
 while((w&1) == 0) { w >>= 1; --n; }
 if((i -= n) < 0) { i += this.DB; --j; }
 if(is1) {  // ret == 1, don't bother squaring or multiplying it
   g[w].copyTo(r);
   is1 = false;
 } else {
   while(n > 1) { z.sqrTo(r,r2); z.sqrTo(r2,r); n -= 2; }
   if(n > 0) z.sqrTo(r,r2); else { t = r; r = r2; r2 = t; }
   z.mulTo(r2,g[w],r);
 }

 while(j >= 0 && (e.data[j]&(1<<i)) == 0) {
   z.sqrTo(r,r2); t = r; r = r2; r2 = t;
   if(--i < 0) { i = this.DB-1; --j; }
 }
}
return z.revert(r);
}

//(public) gcd(this,a) (HAC 14.54)
function bnGCD(a) {
var x = (this.s<0)?this.negate():this.clone();
var y = (a.s<0)?a.negate():a.clone();
if(x.compareTo(y) < 0) { var t = x; x = y; y = t; }
var i = x.getLowestSetBit(), g = y.getLowestSetBit();
if(g < 0) return x;
if(i < g) g = i;
if(g > 0) {
 x.rShiftTo(g,x);
 y.rShiftTo(g,y);
}
while(x.signum() > 0) {
 if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
 if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
 if(x.compareTo(y) >= 0) {
   x.subTo(y,x);
   x.rShiftTo(1,x);
 } else {
   y.subTo(x,y);
   y.rShiftTo(1,y);
 }
}
if(g > 0) y.lShiftTo(g,y);
return y;
}

//(protected) this % n, n < 2^26
function bnpModInt(n) {
if(n <= 0) return 0;
var d = this.DV%n, r = (this.s<0)?n-1:0;
if(this.t > 0)
 if(d == 0) r = this.data[0]%n;
 else for(var i = this.t-1; i >= 0; --i) r = (d*r+this.data[i])%n;
return r;
}

//(public) 1/this % m (HAC 14.61)
function bnModInverse(m) {
var ac = m.isEven();
if((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
var u = m.clone(), v = this.clone();
var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
while(u.signum() != 0) {
 while(u.isEven()) {
   u.rShiftTo(1,u);
   if(ac) {
     if(!a.isEven() || !b.isEven()) { a.addTo(this,a); b.subTo(m,b); }
     a.rShiftTo(1,a);
   } else if(!b.isEven()) b.subTo(m,b);
   b.rShiftTo(1,b);
 }
 while(v.isEven()) {
   v.rShiftTo(1,v);
   if(ac) {
     if(!c.isEven() || !d.isEven()) { c.addTo(this,c); d.subTo(m,d); }
     c.rShiftTo(1,c);
   } else if(!d.isEven()) d.subTo(m,d);
   d.rShiftTo(1,d);
 }
 if(u.compareTo(v) >= 0) {
   u.subTo(v,u);
   if(ac) a.subTo(c,a);
   b.subTo(d,b);
 } else {
   v.subTo(u,v);
   if(ac) c.subTo(a,c);
   d.subTo(b,d);
 }
}
if(v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
if(d.compareTo(m) >= 0) return d.subtract(m);
if(d.signum() < 0) d.addTo(m,d); else return d;
if(d.signum() < 0) return d.add(m); else return d;
}

var lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509];
var lplim = (1<<26)/lowprimes[lowprimes.length-1];

//(public) test primality with certainty >= 1-.5^t
function bnIsProbablePrime(t) {
var i, x = this.abs();
if(x.t == 1 && x.data[0] <= lowprimes[lowprimes.length-1]) {
 for(i = 0; i < lowprimes.length; ++i)
   if(x.data[0] == lowprimes[i]) return true;
 return false;
}
if(x.isEven()) return false;
i = 1;
while(i < lowprimes.length) {
 var m = lowprimes[i], j = i+1;
 while(j < lowprimes.length && m < lplim) m *= lowprimes[j++];
 m = x.modInt(m);
 while(i < j) if(m%lowprimes[i++] == 0) return false;
}
return x.millerRabin(t);
}

//(protected) true if probably prime (HAC 4.24, Miller-Rabin)
function bnpMillerRabin(t) {
var n1 = this.subtract(BigInteger.ONE);
var k = n1.getLowestSetBit();
if(k <= 0) return false;
var r = n1.shiftRight(k);
var prng = bnGetPrng();
var a;
for(var i = 0; i < t; ++i) {
 // select witness 'a' at random from between 1 and n1
 do {
   a = new BigInteger(this.bitLength(), prng);
 }
 while(a.compareTo(BigInteger.ONE) <= 0 || a.compareTo(n1) >= 0);
 var y = a.modPow(r,this);
 if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
   var j = 1;
   while(j++ < k && y.compareTo(n1) != 0) {
     y = y.modPowInt(2,this);
     if(y.compareTo(BigInteger.ONE) == 0) return false;
   }
   if(y.compareTo(n1) != 0) return false;
 }
}
return true;
}

// get pseudo random number generator
function bnGetPrng() {
  // create prng with api that matches BigInteger secure random
  return {
    // x is an array to fill with bytes
    nextBytes: function(x) {
      for(var i = 0; i < x.length; ++i) {
        x[i] = Math.floor(Math.random() * 0x0100);
      }
    }
  };
}

//protected
BigInteger.prototype.chunkSize = bnpChunkSize;
BigInteger.prototype.toRadix = bnpToRadix;
BigInteger.prototype.fromRadix = bnpFromRadix;
BigInteger.prototype.fromNumber = bnpFromNumber;
BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
BigInteger.prototype.changeBit = bnpChangeBit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.dMultiply = bnpDMultiply;
BigInteger.prototype.dAddOffset = bnpDAddOffset;
BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
BigInteger.prototype.modInt = bnpModInt;
BigInteger.prototype.millerRabin = bnpMillerRabin;

//public
BigInteger.prototype.clone = bnClone;
BigInteger.prototype.intValue = bnIntValue;
BigInteger.prototype.byteValue = bnByteValue;
BigInteger.prototype.shortValue = bnShortValue;
BigInteger.prototype.signum = bnSigNum;
BigInteger.prototype.toByteArray = bnToByteArray;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.min = bnMin;
BigInteger.prototype.max = bnMax;
BigInteger.prototype.and = bnAnd;
BigInteger.prototype.or = bnOr;
BigInteger.prototype.xor = bnXor;
BigInteger.prototype.andNot = bnAndNot;
BigInteger.prototype.not = bnNot;
BigInteger.prototype.shiftLeft = bnShiftLeft;
BigInteger.prototype.shiftRight = bnShiftRight;
BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
BigInteger.prototype.bitCount = bnBitCount;
BigInteger.prototype.testBit = bnTestBit;
BigInteger.prototype.setBit = bnSetBit;
BigInteger.prototype.clearBit = bnClearBit;
BigInteger.prototype.flipBit = bnFlipBit;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.remainder = bnRemainder;
BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
BigInteger.prototype.modPow = bnModPow;
BigInteger.prototype.modInverse = bnModInverse;
BigInteger.prototype.pow = bnPow;
BigInteger.prototype.gcd = bnGCD;
BigInteger.prototype.isProbablePrime = bnIsProbablePrime;

//BigInteger interfaces not implemented in jsbn:

//BigInteger(int signum, byte[] magnitude)
//double doubleValue()
//float floatValue()
//int hashCode()
//long longValue()
//static BigInteger valueOf(long val)


/***/ }),

/***/ "./node_modules/node-forge/lib/md.js":
/*!*******************************************!*\
  !*** ./node_modules/node-forge/lib/md.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Node.js module for Forge message digests.
 *
 * @author Dave Longley
 *
 * Copyright 2011-2017 Digital Bazaar, Inc.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");

module.exports = forge.md = forge.md || {};
forge.md.algorithms = forge.md.algorithms || {};


/***/ }),

/***/ "./node_modules/node-forge/lib/md5.js":
/*!********************************************!*\
  !*** ./node_modules/node-forge/lib/md5.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Message Digest Algorithm 5 with 128-bit digest (MD5) implementation.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2014 Digital Bazaar, Inc.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./md */ "./node_modules/node-forge/lib/md.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

var md5 = module.exports = forge.md5 = forge.md5 || {};
forge.md.md5 = forge.md.algorithms.md5 = md5;

/**
 * Creates an MD5 message digest object.
 *
 * @return a message digest object.
 */
md5.create = function() {
  // do initialization as necessary
  if(!_initialized) {
    _init();
  }

  // MD5 state contains four 32-bit integers
  var _state = null;

  // input buffer
  var _input = forge.util.createBuffer();

  // used for word storage
  var _w = new Array(16);

  // message digest object
  var md = {
    algorithm: 'md5',
    blockLength: 64,
    digestLength: 16,
    // 56-bit length of message so far (does not including padding)
    messageLength: 0,
    // true message length
    fullMessageLength: null,
    // size of message length in bytes
    messageLengthSize: 8
  };

  /**
   * Starts the digest.
   *
   * @return this digest object.
   */
  md.start = function() {
    // up to 56-bit message length for convenience
    md.messageLength = 0;

    // full message length (set md.messageLength64 for backwards-compatibility)
    md.fullMessageLength = md.messageLength64 = [];
    var int32s = md.messageLengthSize / 4;
    for(var i = 0; i < int32s; ++i) {
      md.fullMessageLength.push(0);
    }
    _input = forge.util.createBuffer();
    _state = {
      h0: 0x67452301,
      h1: 0xEFCDAB89,
      h2: 0x98BADCFE,
      h3: 0x10325476
    };
    return md;
  };
  // start digest automatically for first time
  md.start();

  /**
   * Updates the digest with the given message input. The given input can
   * treated as raw input (no encoding will be applied) or an encoding of
   * 'utf8' maybe given to encode the input using UTF-8.
   *
   * @param msg the message input to update with.
   * @param encoding the encoding to use (default: 'raw', other: 'utf8').
   *
   * @return this digest object.
   */
  md.update = function(msg, encoding) {
    if(encoding === 'utf8') {
      msg = forge.util.encodeUtf8(msg);
    }

    // update message length
    var len = msg.length;
    md.messageLength += len;
    len = [(len / 0x100000000) >>> 0, len >>> 0];
    for(var i = md.fullMessageLength.length - 1; i >= 0; --i) {
      md.fullMessageLength[i] += len[1];
      len[1] = len[0] + ((md.fullMessageLength[i] / 0x100000000) >>> 0);
      md.fullMessageLength[i] = md.fullMessageLength[i] >>> 0;
      len[0] = (len[1] / 0x100000000) >>> 0;
    }

    // add bytes to input buffer
    _input.putBytes(msg);

    // process bytes
    _update(_state, _w, _input);

    // compact input buffer every 2K or if empty
    if(_input.read > 2048 || _input.length() === 0) {
      _input.compact();
    }

    return md;
  };

  /**
   * Produces the digest.
   *
   * @return a byte buffer containing the digest value.
   */
  md.digest = function() {
    /* Note: Here we copy the remaining bytes in the input buffer and
    add the appropriate MD5 padding. Then we do the final update
    on a copy of the state so that if the user wants to get
    intermediate digests they can do so. */

    /* Determine the number of bytes that must be added to the message
    to ensure its length is congruent to 448 mod 512. In other words,
    the data to be digested must be a multiple of 512 bits (or 128 bytes).
    This data includes the message, some padding, and the length of the
    message. Since the length of the message will be encoded as 8 bytes (64
    bits), that means that the last segment of the data must have 56 bytes
    (448 bits) of message and padding. Therefore, the length of the message
    plus the padding must be congruent to 448 mod 512 because
    512 - 128 = 448.

    In order to fill up the message length it must be filled with
    padding that begins with 1 bit followed by all 0 bits. Padding
    must *always* be present, so if the message length is already
    congruent to 448 mod 512, then 512 padding bits must be added. */

    var finalBlock = forge.util.createBuffer();
    finalBlock.putBytes(_input.bytes());

    // compute remaining size to be digested (include message length size)
    var remaining = (
      md.fullMessageLength[md.fullMessageLength.length - 1] +
      md.messageLengthSize);

    // add padding for overflow blockSize - overflow
    // _padding starts with 1 byte with first bit is set (byte value 128), then
    // there may be up to (blockSize - 1) other pad bytes
    var overflow = remaining & (md.blockLength - 1);
    finalBlock.putBytes(_padding.substr(0, md.blockLength - overflow));

    // serialize message length in bits in little-endian order; since length
    // is stored in bytes we multiply by 8 and add carry
    var bits, carry = 0;
    for(var i = md.fullMessageLength.length - 1; i >= 0; --i) {
      bits = md.fullMessageLength[i] * 8 + carry;
      carry = (bits / 0x100000000) >>> 0;
      finalBlock.putInt32Le(bits >>> 0);
    }

    var s2 = {
      h0: _state.h0,
      h1: _state.h1,
      h2: _state.h2,
      h3: _state.h3
    };
    _update(s2, _w, finalBlock);
    var rval = forge.util.createBuffer();
    rval.putInt32Le(s2.h0);
    rval.putInt32Le(s2.h1);
    rval.putInt32Le(s2.h2);
    rval.putInt32Le(s2.h3);
    return rval;
  };

  return md;
};

// padding, constant tables for calculating md5
var _padding = null;
var _g = null;
var _r = null;
var _k = null;
var _initialized = false;

/**
 * Initializes the constant tables.
 */
function _init() {
  // create padding
  _padding = String.fromCharCode(128);
  _padding += forge.util.fillString(String.fromCharCode(0x00), 64);

  // g values
  _g = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    1, 6, 11, 0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12,
    5, 8, 11, 14, 1, 4, 7, 10, 13, 0, 3, 6, 9, 12, 15, 2,
    0, 7, 14, 5, 12, 3, 10, 1, 8, 15, 6, 13, 4, 11, 2, 9];

  // rounds table
  _r = [
    7, 12, 17, 22,  7, 12, 17, 22,  7, 12, 17, 22,  7, 12, 17, 22,
    5,  9, 14, 20,  5,  9, 14, 20,  5,  9, 14, 20,  5,  9, 14, 20,
    4, 11, 16, 23,  4, 11, 16, 23,  4, 11, 16, 23,  4, 11, 16, 23,
    6, 10, 15, 21,  6, 10, 15, 21,  6, 10, 15, 21,  6, 10, 15, 21];

  // get the result of abs(sin(i + 1)) as a 32-bit integer
  _k = new Array(64);
  for(var i = 0; i < 64; ++i) {
    _k[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 0x100000000);
  }

  // now initialized
  _initialized = true;
}

/**
 * Updates an MD5 state with the given byte buffer.
 *
 * @param s the MD5 state to update.
 * @param w the array to use to store words.
 * @param bytes the byte buffer to update with.
 */
function _update(s, w, bytes) {
  // consume 512 bit (64 byte) chunks
  var t, a, b, c, d, f, r, i;
  var len = bytes.length();
  while(len >= 64) {
    // initialize hash value for this chunk
    a = s.h0;
    b = s.h1;
    c = s.h2;
    d = s.h3;

    // round 1
    for(i = 0; i < 16; ++i) {
      w[i] = bytes.getInt32Le();
      f = d ^ (b & (c ^ d));
      t = (a + f + _k[i] + w[i]);
      r = _r[i];
      a = d;
      d = c;
      c = b;
      b += (t << r) | (t >>> (32 - r));
    }
    // round 2
    for(; i < 32; ++i) {
      f = c ^ (d & (b ^ c));
      t = (a + f + _k[i] + w[_g[i]]);
      r = _r[i];
      a = d;
      d = c;
      c = b;
      b += (t << r) | (t >>> (32 - r));
    }
    // round 3
    for(; i < 48; ++i) {
      f = b ^ c ^ d;
      t = (a + f + _k[i] + w[_g[i]]);
      r = _r[i];
      a = d;
      d = c;
      c = b;
      b += (t << r) | (t >>> (32 - r));
    }
    // round 4
    for(; i < 64; ++i) {
      f = c ^ (b | ~d);
      t = (a + f + _k[i] + w[_g[i]]);
      r = _r[i];
      a = d;
      d = c;
      c = b;
      b += (t << r) | (t >>> (32 - r));
    }

    // update hash state
    s.h0 = (s.h0 + a) | 0;
    s.h1 = (s.h1 + b) | 0;
    s.h2 = (s.h2 + c) | 0;
    s.h3 = (s.h3 + d) | 0;

    len -= 64;
  }
}


/***/ }),

/***/ "./node_modules/node-forge/lib/mgf.js":
/*!********************************************!*\
  !*** ./node_modules/node-forge/lib/mgf.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Node.js module for Forge mask generation functions.
 *
 * @author Stefan Siegl
 *
 * Copyright 2012 Stefan Siegl <stesie@brokenpipe.de>
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./mgf1 */ "./node_modules/node-forge/lib/mgf1.js");

module.exports = forge.mgf = forge.mgf || {};
forge.mgf.mgf1 = forge.mgf1;


/***/ }),

/***/ "./node_modules/node-forge/lib/mgf1.js":
/*!*********************************************!*\
  !*** ./node_modules/node-forge/lib/mgf1.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Javascript implementation of mask generation function MGF1.
 *
 * @author Stefan Siegl
 * @author Dave Longley
 *
 * Copyright (c) 2012 Stefan Siegl <stesie@brokenpipe.de>
 * Copyright (c) 2014 Digital Bazaar, Inc.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

forge.mgf = forge.mgf || {};
var mgf1 = module.exports = forge.mgf.mgf1 = forge.mgf1 = forge.mgf1 || {};

/**
 * Creates a MGF1 mask generation function object.
 *
 * @param md the message digest API to use (eg: forge.md.sha1.create()).
 *
 * @return a mask generation function object.
 */
mgf1.create = function(md) {
  var mgf = {
    /**
     * Generate mask of specified length.
     *
     * @param {String} seed The seed for mask generation.
     * @param maskLen Number of bytes to generate.
     * @return {String} The generated mask.
     */
    generate: function(seed, maskLen) {
      /* 2. Let T be the empty octet string. */
      var t = new forge.util.ByteBuffer();

      /* 3. For counter from 0 to ceil(maskLen / hLen), do the following: */
      var len = Math.ceil(maskLen / md.digestLength);
      for(var i = 0; i < len; i++) {
        /* a. Convert counter to an octet string C of length 4 octets */
        var c = new forge.util.ByteBuffer();
        c.putInt32(i);

        /* b. Concatenate the hash of the seed mgfSeed and C to the octet
         * string T: */
        md.start();
        md.update(seed + c.getBytes());
        t.putBuffer(md.digest());
      }

      /* Output the leading maskLen octets of T as the octet string mask. */
      t.truncate(t.length() - maskLen);
      return t.getBytes();
    }
  };

  return mgf;
};


/***/ }),

/***/ "./node_modules/node-forge/lib/oids.js":
/*!*********************************************!*\
  !*** ./node_modules/node-forge/lib/oids.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Object IDs for ASN.1.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2013 Digital Bazaar, Inc.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");

forge.pki = forge.pki || {};
var oids = module.exports = forge.pki.oids = forge.oids = forge.oids || {};

// set id to name mapping and name to id mapping
function _IN(id, name) {
  oids[id] = name;
  oids[name] = id;
}
// set id to name mapping only
function _I_(id, name) {
  oids[id] = name;
}

// algorithm OIDs
_IN('1.2.840.113549.1.1.1', 'rsaEncryption');
// Note: md2 & md4 not implemented
//_IN('1.2.840.113549.1.1.2', 'md2WithRSAEncryption');
//_IN('1.2.840.113549.1.1.3', 'md4WithRSAEncryption');
_IN('1.2.840.113549.1.1.4', 'md5WithRSAEncryption');
_IN('1.2.840.113549.1.1.5', 'sha1WithRSAEncryption');
_IN('1.2.840.113549.1.1.7', 'RSAES-OAEP');
_IN('1.2.840.113549.1.1.8', 'mgf1');
_IN('1.2.840.113549.1.1.9', 'pSpecified');
_IN('1.2.840.113549.1.1.10', 'RSASSA-PSS');
_IN('1.2.840.113549.1.1.11', 'sha256WithRSAEncryption');
_IN('1.2.840.113549.1.1.12', 'sha384WithRSAEncryption');
_IN('1.2.840.113549.1.1.13', 'sha512WithRSAEncryption');

_IN('1.2.840.10040.4.3', 'dsa-with-sha1');

_IN('1.3.14.3.2.7', 'desCBC');

_IN('1.3.14.3.2.26', 'sha1');
_IN('2.16.840.1.101.3.4.2.1', 'sha256');
_IN('2.16.840.1.101.3.4.2.2', 'sha384');
_IN('2.16.840.1.101.3.4.2.3', 'sha512');
_IN('1.2.840.113549.2.5', 'md5');

// pkcs#7 content types
_IN('1.2.840.113549.1.7.1', 'data');
_IN('1.2.840.113549.1.7.2', 'signedData');
_IN('1.2.840.113549.1.7.3', 'envelopedData');
_IN('1.2.840.113549.1.7.4', 'signedAndEnvelopedData');
_IN('1.2.840.113549.1.7.5', 'digestedData');
_IN('1.2.840.113549.1.7.6', 'encryptedData');

// pkcs#9 oids
_IN('1.2.840.113549.1.9.1', 'emailAddress');
_IN('1.2.840.113549.1.9.2', 'unstructuredName');
_IN('1.2.840.113549.1.9.3', 'contentType');
_IN('1.2.840.113549.1.9.4', 'messageDigest');
_IN('1.2.840.113549.1.9.5', 'signingTime');
_IN('1.2.840.113549.1.9.6', 'counterSignature');
_IN('1.2.840.113549.1.9.7', 'challengePassword');
_IN('1.2.840.113549.1.9.8', 'unstructuredAddress');
_IN('1.2.840.113549.1.9.14', 'extensionRequest');

_IN('1.2.840.113549.1.9.20', 'friendlyName');
_IN('1.2.840.113549.1.9.21', 'localKeyId');
_IN('1.2.840.113549.1.9.22.1', 'x509Certificate');

// pkcs#12 safe bags
_IN('1.2.840.113549.1.12.10.1.1', 'keyBag');
_IN('1.2.840.113549.1.12.10.1.2', 'pkcs8ShroudedKeyBag');
_IN('1.2.840.113549.1.12.10.1.3', 'certBag');
_IN('1.2.840.113549.1.12.10.1.4', 'crlBag');
_IN('1.2.840.113549.1.12.10.1.5', 'secretBag');
_IN('1.2.840.113549.1.12.10.1.6', 'safeContentsBag');

// password-based-encryption for pkcs#12
_IN('1.2.840.113549.1.5.13', 'pkcs5PBES2');
_IN('1.2.840.113549.1.5.12', 'pkcs5PBKDF2');

_IN('1.2.840.113549.1.12.1.1', 'pbeWithSHAAnd128BitRC4');
_IN('1.2.840.113549.1.12.1.2', 'pbeWithSHAAnd40BitRC4');
_IN('1.2.840.113549.1.12.1.3', 'pbeWithSHAAnd3-KeyTripleDES-CBC');
_IN('1.2.840.113549.1.12.1.4', 'pbeWithSHAAnd2-KeyTripleDES-CBC');
_IN('1.2.840.113549.1.12.1.5', 'pbeWithSHAAnd128BitRC2-CBC');
_IN('1.2.840.113549.1.12.1.6', 'pbewithSHAAnd40BitRC2-CBC');

// hmac OIDs
_IN('1.2.840.113549.2.7', 'hmacWithSHA1');
_IN('1.2.840.113549.2.8', 'hmacWithSHA224');
_IN('1.2.840.113549.2.9', 'hmacWithSHA256');
_IN('1.2.840.113549.2.10', 'hmacWithSHA384');
_IN('1.2.840.113549.2.11', 'hmacWithSHA512');

// symmetric key algorithm oids
_IN('1.2.840.113549.3.7', 'des-EDE3-CBC');
_IN('2.16.840.1.101.3.4.1.2', 'aes128-CBC');
_IN('2.16.840.1.101.3.4.1.22', 'aes192-CBC');
_IN('2.16.840.1.101.3.4.1.42', 'aes256-CBC');

// certificate issuer/subject OIDs
_IN('2.5.4.3', 'commonName');
_IN('2.5.4.5', 'serialName');
_IN('2.5.4.6', 'countryName');
_IN('2.5.4.7', 'localityName');
_IN('2.5.4.8', 'stateOrProvinceName');
_IN('2.5.4.10', 'organizationName');
_IN('2.5.4.11', 'organizationalUnitName');
_IN('2.5.4.13', 'description');

// X.509 extension OIDs
_IN('2.16.840.1.113730.1.1', 'nsCertType');
_IN('2.16.840.1.113730.1.13', 'nsComment'); // deprecated in theory; still widely used
_I_('2.5.29.1', 'authorityKeyIdentifier'); // deprecated, use .35
_I_('2.5.29.2', 'keyAttributes'); // obsolete use .37 or .15
_I_('2.5.29.3', 'certificatePolicies'); // deprecated, use .32
_I_('2.5.29.4', 'keyUsageRestriction'); // obsolete use .37 or .15
_I_('2.5.29.5', 'policyMapping'); // deprecated use .33
_I_('2.5.29.6', 'subtreesConstraint'); // obsolete use .30
_I_('2.5.29.7', 'subjectAltName'); // deprecated use .17
_I_('2.5.29.8', 'issuerAltName'); // deprecated use .18
_I_('2.5.29.9', 'subjectDirectoryAttributes');
_I_('2.5.29.10', 'basicConstraints'); // deprecated use .19
_I_('2.5.29.11', 'nameConstraints'); // deprecated use .30
_I_('2.5.29.12', 'policyConstraints'); // deprecated use .36
_I_('2.5.29.13', 'basicConstraints'); // deprecated use .19
_IN('2.5.29.14', 'subjectKeyIdentifier');
_IN('2.5.29.15', 'keyUsage');
_I_('2.5.29.16', 'privateKeyUsagePeriod');
_IN('2.5.29.17', 'subjectAltName');
_IN('2.5.29.18', 'issuerAltName');
_IN('2.5.29.19', 'basicConstraints');
_I_('2.5.29.20', 'cRLNumber');
_I_('2.5.29.21', 'cRLReason');
_I_('2.5.29.22', 'expirationDate');
_I_('2.5.29.23', 'instructionCode');
_I_('2.5.29.24', 'invalidityDate');
_I_('2.5.29.25', 'cRLDistributionPoints'); // deprecated use .31
_I_('2.5.29.26', 'issuingDistributionPoint'); // deprecated use .28
_I_('2.5.29.27', 'deltaCRLIndicator');
_I_('2.5.29.28', 'issuingDistributionPoint');
_I_('2.5.29.29', 'certificateIssuer');
_I_('2.5.29.30', 'nameConstraints');
_IN('2.5.29.31', 'cRLDistributionPoints');
_IN('2.5.29.32', 'certificatePolicies');
_I_('2.5.29.33', 'policyMappings');
_I_('2.5.29.34', 'policyConstraints'); // deprecated use .36
_IN('2.5.29.35', 'authorityKeyIdentifier');
_I_('2.5.29.36', 'policyConstraints');
_IN('2.5.29.37', 'extKeyUsage');
_I_('2.5.29.46', 'freshestCRL');
_I_('2.5.29.54', 'inhibitAnyPolicy');

// extKeyUsage purposes
_IN('1.3.6.1.4.1.11129.2.4.2', 'timestampList');
_IN('1.3.6.1.5.5.7.1.1', 'authorityInfoAccess');
_IN('1.3.6.1.5.5.7.3.1', 'serverAuth');
_IN('1.3.6.1.5.5.7.3.2', 'clientAuth');
_IN('1.3.6.1.5.5.7.3.3', 'codeSigning');
_IN('1.3.6.1.5.5.7.3.4', 'emailProtection');
_IN('1.3.6.1.5.5.7.3.8', 'timeStamping');


/***/ }),

/***/ "./node_modules/node-forge/lib/pbe.js":
/*!********************************************!*\
  !*** ./node_modules/node-forge/lib/pbe.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Password-based encryption functions.
 *
 * @author Dave Longley
 * @author Stefan Siegl <stesie@brokenpipe.de>
 *
 * Copyright (c) 2010-2013 Digital Bazaar, Inc.
 * Copyright (c) 2012 Stefan Siegl <stesie@brokenpipe.de>
 *
 * An EncryptedPrivateKeyInfo:
 *
 * EncryptedPrivateKeyInfo ::= SEQUENCE {
 *   encryptionAlgorithm  EncryptionAlgorithmIdentifier,
 *   encryptedData        EncryptedData }
 *
 * EncryptionAlgorithmIdentifier ::= AlgorithmIdentifier
 *
 * EncryptedData ::= OCTET STRING
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./aes */ "./node_modules/node-forge/lib/aes.js");
__webpack_require__(/*! ./asn1 */ "./node_modules/node-forge/lib/asn1.js");
__webpack_require__(/*! ./des */ "./node_modules/node-forge/lib/des.js");
__webpack_require__(/*! ./md */ "./node_modules/node-forge/lib/md.js");
__webpack_require__(/*! ./oids */ "./node_modules/node-forge/lib/oids.js");
__webpack_require__(/*! ./pbkdf2 */ "./node_modules/node-forge/lib/pbkdf2.js");
__webpack_require__(/*! ./pem */ "./node_modules/node-forge/lib/pem.js");
__webpack_require__(/*! ./random */ "./node_modules/node-forge/lib/random.js");
__webpack_require__(/*! ./rc2 */ "./node_modules/node-forge/lib/rc2.js");
__webpack_require__(/*! ./rsa */ "./node_modules/node-forge/lib/rsa.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

if(typeof BigInteger === 'undefined') {
  var BigInteger = forge.jsbn.BigInteger;
}

// shortcut for asn.1 API
var asn1 = forge.asn1;

/* Password-based encryption implementation. */
var pki = forge.pki = forge.pki || {};
module.exports = pki.pbe = forge.pbe = forge.pbe || {};
var oids = pki.oids;

// validator for an EncryptedPrivateKeyInfo structure
// Note: Currently only works w/algorithm params
var encryptedPrivateKeyValidator = {
  name: 'EncryptedPrivateKeyInfo',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: 'EncryptedPrivateKeyInfo.encryptionAlgorithm',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: 'AlgorithmIdentifier.algorithm',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.OID,
      constructed: false,
      capture: 'encryptionOid'
    }, {
      name: 'AlgorithmIdentifier.parameters',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      captureAsn1: 'encryptionParams'
    }]
  }, {
    // encryptedData
    name: 'EncryptedPrivateKeyInfo.encryptedData',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.OCTETSTRING,
    constructed: false,
    capture: 'encryptedData'
  }]
};

// validator for a PBES2Algorithms structure
// Note: Currently only works w/PBKDF2 + AES encryption schemes
var PBES2AlgorithmsValidator = {
  name: 'PBES2Algorithms',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: 'PBES2Algorithms.keyDerivationFunc',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: 'PBES2Algorithms.keyDerivationFunc.oid',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.OID,
      constructed: false,
      capture: 'kdfOid'
    }, {
      name: 'PBES2Algorithms.params',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: 'PBES2Algorithms.params.salt',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OCTETSTRING,
        constructed: false,
        capture: 'kdfSalt'
      }, {
        name: 'PBES2Algorithms.params.iterationCount',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: 'kdfIterationCount'
      }, {
        name: 'PBES2Algorithms.params.keyLength',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        optional: true,
        capture: 'keyLength'
      }, {
        // prf
        name: 'PBES2Algorithms.params.prf',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        optional: true,
        value: [{
          name: 'PBES2Algorithms.params.prf.algorithm',
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.OID,
          constructed: false,
          capture: 'prfOid'
        }]
      }]
    }]
  }, {
    name: 'PBES2Algorithms.encryptionScheme',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: 'PBES2Algorithms.encryptionScheme.oid',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.OID,
      constructed: false,
      capture: 'encOid'
    }, {
      name: 'PBES2Algorithms.encryptionScheme.iv',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.OCTETSTRING,
      constructed: false,
      capture: 'encIv'
    }]
  }]
};

var pkcs12PbeParamsValidator = {
  name: 'pkcs-12PbeParams',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: 'pkcs-12PbeParams.salt',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.OCTETSTRING,
    constructed: false,
    capture: 'salt'
  }, {
    name: 'pkcs-12PbeParams.iterations',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'iterations'
  }]
};

/**
 * Encrypts a ASN.1 PrivateKeyInfo object, producing an EncryptedPrivateKeyInfo.
 *
 * PBES2Algorithms ALGORITHM-IDENTIFIER ::=
 *   { {PBES2-params IDENTIFIED BY id-PBES2}, ...}
 *
 * id-PBES2 OBJECT IDENTIFIER ::= {pkcs-5 13}
 *
 * PBES2-params ::= SEQUENCE {
 *   keyDerivationFunc AlgorithmIdentifier {{PBES2-KDFs}},
 *   encryptionScheme AlgorithmIdentifier {{PBES2-Encs}}
 * }
 *
 * PBES2-KDFs ALGORITHM-IDENTIFIER ::=
 *   { {PBKDF2-params IDENTIFIED BY id-PBKDF2}, ... }
 *
 * PBES2-Encs ALGORITHM-IDENTIFIER ::= { ... }
 *
 * PBKDF2-params ::= SEQUENCE {
 *   salt CHOICE {
 *     specified OCTET STRING,
 *     otherSource AlgorithmIdentifier {{PBKDF2-SaltSources}}
 *   },
 *   iterationCount INTEGER (1..MAX),
 *   keyLength INTEGER (1..MAX) OPTIONAL,
 *   prf AlgorithmIdentifier {{PBKDF2-PRFs}} DEFAULT algid-hmacWithSHA1
 * }
 *
 * @param obj the ASN.1 PrivateKeyInfo object.
 * @param password the password to encrypt with.
 * @param options:
 *          algorithm the encryption algorithm to use
 *            ('aes128', 'aes192', 'aes256', '3des'), defaults to 'aes128'.
 *          count the iteration count to use.
 *          saltSize the salt size to use.
 *          prfAlgorithm the PRF message digest algorithm to use
 *            ('sha1', 'sha224', 'sha256', 'sha384', 'sha512')
 *
 * @return the ASN.1 EncryptedPrivateKeyInfo.
 */
pki.encryptPrivateKeyInfo = function(obj, password, options) {
  // set default options
  options = options || {};
  options.saltSize = options.saltSize || 8;
  options.count = options.count || 2048;
  options.algorithm = options.algorithm || 'aes128';
  options.prfAlgorithm = options.prfAlgorithm || 'sha1';

  // generate PBE params
  var salt = forge.random.getBytesSync(options.saltSize);
  var count = options.count;
  var countBytes = asn1.integerToDer(count);
  var dkLen;
  var encryptionAlgorithm;
  var encryptedData;
  if(options.algorithm.indexOf('aes') === 0 || options.algorithm === 'des') {
    // do PBES2
    var ivLen, encOid, cipherFn;
    switch(options.algorithm) {
    case 'aes128':
      dkLen = 16;
      ivLen = 16;
      encOid = oids['aes128-CBC'];
      cipherFn = forge.aes.createEncryptionCipher;
      break;
    case 'aes192':
      dkLen = 24;
      ivLen = 16;
      encOid = oids['aes192-CBC'];
      cipherFn = forge.aes.createEncryptionCipher;
      break;
    case 'aes256':
      dkLen = 32;
      ivLen = 16;
      encOid = oids['aes256-CBC'];
      cipherFn = forge.aes.createEncryptionCipher;
      break;
    case 'des':
      dkLen = 8;
      ivLen = 8;
      encOid = oids['desCBC'];
      cipherFn = forge.des.createEncryptionCipher;
      break;
    default:
      var error = new Error('Cannot encrypt private key. Unknown encryption algorithm.');
      error.algorithm = options.algorithm;
      throw error;
    }

    // get PRF message digest
    var prfAlgorithm = 'hmacWith' + options.prfAlgorithm.toUpperCase();
    var md = prfAlgorithmToMessageDigest(prfAlgorithm);

    // encrypt private key using pbe SHA-1 and AES/DES
    var dk = forge.pkcs5.pbkdf2(password, salt, count, dkLen, md);
    var iv = forge.random.getBytesSync(ivLen);
    var cipher = cipherFn(dk);
    cipher.start(iv);
    cipher.update(asn1.toDer(obj));
    cipher.finish();
    encryptedData = cipher.output.getBytes();

    // get PBKDF2-params
    var params = createPbkdf2Params(salt, countBytes, dkLen, prfAlgorithm);

    encryptionAlgorithm = asn1.create(
      asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
        asn1.oidToDer(oids['pkcs5PBES2']).getBytes()),
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // keyDerivationFunc
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
            asn1.oidToDer(oids['pkcs5PBKDF2']).getBytes()),
          // PBKDF2-params
          params
        ]),
        // encryptionScheme
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
            asn1.oidToDer(encOid).getBytes()),
          // iv
          asn1.create(
            asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, false, iv)
        ])
      ])
    ]);
  } else if(options.algorithm === '3des') {
    // Do PKCS12 PBE
    dkLen = 24;

    var saltBytes = new forge.util.ByteBuffer(salt);
    var dk = pki.pbe.generatePkcs12Key(password, saltBytes, 1, count, dkLen);
    var iv = pki.pbe.generatePkcs12Key(password, saltBytes, 2, count, dkLen);
    var cipher = forge.des.createEncryptionCipher(dk);
    cipher.start(iv);
    cipher.update(asn1.toDer(obj));
    cipher.finish();
    encryptedData = cipher.output.getBytes();

    encryptionAlgorithm = asn1.create(
      asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
        asn1.oidToDer(oids['pbeWithSHAAnd3-KeyTripleDES-CBC']).getBytes()),
      // pkcs-12PbeParams
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // salt
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, false, salt),
        // iteration count
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
          countBytes.getBytes())
      ])
    ]);
  } else {
    var error = new Error('Cannot encrypt private key. Unknown encryption algorithm.');
    error.algorithm = options.algorithm;
    throw error;
  }

  // EncryptedPrivateKeyInfo
  var rval = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
    // encryptionAlgorithm
    encryptionAlgorithm,
    // encryptedData
    asn1.create(
      asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, false, encryptedData)
  ]);
  return rval;
};

/**
 * Decrypts a ASN.1 PrivateKeyInfo object.
 *
 * @param obj the ASN.1 EncryptedPrivateKeyInfo object.
 * @param password the password to decrypt with.
 *
 * @return the ASN.1 PrivateKeyInfo on success, null on failure.
 */
pki.decryptPrivateKeyInfo = function(obj, password) {
  var rval = null;

  // get PBE params
  var capture = {};
  var errors = [];
  if(!asn1.validate(obj, encryptedPrivateKeyValidator, capture, errors)) {
    var error = new Error('Cannot read encrypted private key. ' +
      'ASN.1 object is not a supported EncryptedPrivateKeyInfo.');
    error.errors = errors;
    throw error;
  }

  // get cipher
  var oid = asn1.derToOid(capture.encryptionOid);
  var cipher = pki.pbe.getCipher(oid, capture.encryptionParams, password);

  // get encrypted data
  var encrypted = forge.util.createBuffer(capture.encryptedData);

  cipher.update(encrypted);
  if(cipher.finish()) {
    rval = asn1.fromDer(cipher.output);
  }

  return rval;
};

/**
 * Converts a EncryptedPrivateKeyInfo to PEM format.
 *
 * @param epki the EncryptedPrivateKeyInfo.
 * @param maxline the maximum characters per line, defaults to 64.
 *
 * @return the PEM-formatted encrypted private key.
 */
pki.encryptedPrivateKeyToPem = function(epki, maxline) {
  // convert to DER, then PEM-encode
  var msg = {
    type: 'ENCRYPTED PRIVATE KEY',
    body: asn1.toDer(epki).getBytes()
  };
  return forge.pem.encode(msg, {maxline: maxline});
};

/**
 * Converts a PEM-encoded EncryptedPrivateKeyInfo to ASN.1 format. Decryption
 * is not performed.
 *
 * @param pem the EncryptedPrivateKeyInfo in PEM-format.
 *
 * @return the ASN.1 EncryptedPrivateKeyInfo.
 */
pki.encryptedPrivateKeyFromPem = function(pem) {
  var msg = forge.pem.decode(pem)[0];

  if(msg.type !== 'ENCRYPTED PRIVATE KEY') {
    var error = new Error('Could not convert encrypted private key from PEM; ' +
      'PEM header type is "ENCRYPTED PRIVATE KEY".');
    error.headerType = msg.type;
    throw error;
  }
  if(msg.procType && msg.procType.type === 'ENCRYPTED') {
    throw new Error('Could not convert encrypted private key from PEM; ' +
      'PEM is encrypted.');
  }

  // convert DER to ASN.1 object
  return asn1.fromDer(msg.body);
};

/**
 * Encrypts an RSA private key. By default, the key will be wrapped in
 * a PrivateKeyInfo and encrypted to produce a PKCS#8 EncryptedPrivateKeyInfo.
 * This is the standard, preferred way to encrypt a private key.
 *
 * To produce a non-standard PEM-encrypted private key that uses encapsulated
 * headers to indicate the encryption algorithm (old-style non-PKCS#8 OpenSSL
 * private key encryption), set the 'legacy' option to true. Note: Using this
 * option will cause the iteration count to be forced to 1.
 *
 * Note: The 'des' algorithm is supported, but it is not considered to be
 * secure because it only uses a single 56-bit key. If possible, it is highly
 * recommended that a different algorithm be used.
 *
 * @param rsaKey the RSA key to encrypt.
 * @param password the password to use.
 * @param options:
 *          algorithm: the encryption algorithm to use
 *            ('aes128', 'aes192', 'aes256', '3des', 'des').
 *          count: the iteration count to use.
 *          saltSize: the salt size to use.
 *          legacy: output an old non-PKCS#8 PEM-encrypted+encapsulated
 *            headers (DEK-Info) private key.
 *
 * @return the PEM-encoded ASN.1 EncryptedPrivateKeyInfo.
 */
pki.encryptRsaPrivateKey = function(rsaKey, password, options) {
  // standard PKCS#8
  options = options || {};
  if(!options.legacy) {
    // encrypt PrivateKeyInfo
    var rval = pki.wrapRsaPrivateKey(pki.privateKeyToAsn1(rsaKey));
    rval = pki.encryptPrivateKeyInfo(rval, password, options);
    return pki.encryptedPrivateKeyToPem(rval);
  }

  // legacy non-PKCS#8
  var algorithm;
  var iv;
  var dkLen;
  var cipherFn;
  switch(options.algorithm) {
  case 'aes128':
    algorithm = 'AES-128-CBC';
    dkLen = 16;
    iv = forge.random.getBytesSync(16);
    cipherFn = forge.aes.createEncryptionCipher;
    break;
  case 'aes192':
    algorithm = 'AES-192-CBC';
    dkLen = 24;
    iv = forge.random.getBytesSync(16);
    cipherFn = forge.aes.createEncryptionCipher;
    break;
  case 'aes256':
    algorithm = 'AES-256-CBC';
    dkLen = 32;
    iv = forge.random.getBytesSync(16);
    cipherFn = forge.aes.createEncryptionCipher;
    break;
  case '3des':
    algorithm = 'DES-EDE3-CBC';
    dkLen = 24;
    iv = forge.random.getBytesSync(8);
    cipherFn = forge.des.createEncryptionCipher;
    break;
  case 'des':
    algorithm = 'DES-CBC';
    dkLen = 8;
    iv = forge.random.getBytesSync(8);
    cipherFn = forge.des.createEncryptionCipher;
    break;
  default:
    var error = new Error('Could not encrypt RSA private key; unsupported ' +
      'encryption algorithm "' + options.algorithm + '".');
    error.algorithm = options.algorithm;
    throw error;
  }

  // encrypt private key using OpenSSL legacy key derivation
  var dk = forge.pbe.opensslDeriveBytes(password, iv.substr(0, 8), dkLen);
  var cipher = cipherFn(dk);
  cipher.start(iv);
  cipher.update(asn1.toDer(pki.privateKeyToAsn1(rsaKey)));
  cipher.finish();

  var msg = {
    type: 'RSA PRIVATE KEY',
    procType: {
      version: '4',
      type: 'ENCRYPTED'
    },
    dekInfo: {
      algorithm: algorithm,
      parameters: forge.util.bytesToHex(iv).toUpperCase()
    },
    body: cipher.output.getBytes()
  };
  return forge.pem.encode(msg);
};

/**
 * Decrypts an RSA private key.
 *
 * @param pem the PEM-formatted EncryptedPrivateKeyInfo to decrypt.
 * @param password the password to use.
 *
 * @return the RSA key on success, null on failure.
 */
pki.decryptRsaPrivateKey = function(pem, password) {
  var rval = null;

  var msg = forge.pem.decode(pem)[0];

  if(msg.type !== 'ENCRYPTED PRIVATE KEY' &&
    msg.type !== 'PRIVATE KEY' &&
    msg.type !== 'RSA PRIVATE KEY') {
    var error = new Error('Could not convert private key from PEM; PEM header type ' +
      'is not "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", or "RSA PRIVATE KEY".');
    error.headerType = error;
    throw error;
  }

  if(msg.procType && msg.procType.type === 'ENCRYPTED') {
    var dkLen;
    var cipherFn;
    switch(msg.dekInfo.algorithm) {
    case 'DES-CBC':
      dkLen = 8;
      cipherFn = forge.des.createDecryptionCipher;
      break;
    case 'DES-EDE3-CBC':
      dkLen = 24;
      cipherFn = forge.des.createDecryptionCipher;
      break;
    case 'AES-128-CBC':
      dkLen = 16;
      cipherFn = forge.aes.createDecryptionCipher;
      break;
    case 'AES-192-CBC':
      dkLen = 24;
      cipherFn = forge.aes.createDecryptionCipher;
      break;
    case 'AES-256-CBC':
      dkLen = 32;
      cipherFn = forge.aes.createDecryptionCipher;
      break;
    case 'RC2-40-CBC':
      dkLen = 5;
      cipherFn = function(key) {
        return forge.rc2.createDecryptionCipher(key, 40);
      };
      break;
    case 'RC2-64-CBC':
      dkLen = 8;
      cipherFn = function(key) {
        return forge.rc2.createDecryptionCipher(key, 64);
      };
      break;
    case 'RC2-128-CBC':
      dkLen = 16;
      cipherFn = function(key) {
        return forge.rc2.createDecryptionCipher(key, 128);
      };
      break;
    default:
      var error = new Error('Could not decrypt private key; unsupported ' +
        'encryption algorithm "' + msg.dekInfo.algorithm + '".');
      error.algorithm = msg.dekInfo.algorithm;
      throw error;
    }

    // use OpenSSL legacy key derivation
    var iv = forge.util.hexToBytes(msg.dekInfo.parameters);
    var dk = forge.pbe.opensslDeriveBytes(password, iv.substr(0, 8), dkLen);
    var cipher = cipherFn(dk);
    cipher.start(iv);
    cipher.update(forge.util.createBuffer(msg.body));
    if(cipher.finish()) {
      rval = cipher.output.getBytes();
    } else {
      return rval;
    }
  } else {
    rval = msg.body;
  }

  if(msg.type === 'ENCRYPTED PRIVATE KEY') {
    rval = pki.decryptPrivateKeyInfo(asn1.fromDer(rval), password);
  } else {
    // decryption already performed above
    rval = asn1.fromDer(rval);
  }

  if(rval !== null) {
    rval = pki.privateKeyFromAsn1(rval);
  }

  return rval;
};

/**
 * Derives a PKCS#12 key.
 *
 * @param password the password to derive the key material from, null or
 *          undefined for none.
 * @param salt the salt, as a ByteBuffer, to use.
 * @param id the PKCS#12 ID byte (1 = key material, 2 = IV, 3 = MAC).
 * @param iter the iteration count.
 * @param n the number of bytes to derive from the password.
 * @param md the message digest to use, defaults to SHA-1.
 *
 * @return a ByteBuffer with the bytes derived from the password.
 */
pki.pbe.generatePkcs12Key = function(password, salt, id, iter, n, md) {
  var j, l;

  if(typeof md === 'undefined' || md === null) {
    if(!('sha1' in forge.md)) {
      throw new Error('"sha1" hash algorithm unavailable.');
    }
    md = forge.md.sha1.create();
  }

  var u = md.digestLength;
  var v = md.blockLength;
  var result = new forge.util.ByteBuffer();

  /* Convert password to Unicode byte buffer + trailing 0-byte. */
  var passBuf = new forge.util.ByteBuffer();
  if(password !== null && password !== undefined) {
    for(l = 0; l < password.length; l++) {
      passBuf.putInt16(password.charCodeAt(l));
    }
    passBuf.putInt16(0);
  }

  /* Length of salt and password in BYTES. */
  var p = passBuf.length();
  var s = salt.length();

  /* 1. Construct a string, D (the "diversifier"), by concatenating
        v copies of ID. */
  var D = new forge.util.ByteBuffer();
  D.fillWithByte(id, v);

  /* 2. Concatenate copies of the salt together to create a string S of length
        v * ceil(s / v) bytes (the final copy of the salt may be trunacted
        to create S).
        Note that if the salt is the empty string, then so is S. */
  var Slen = v * Math.ceil(s / v);
  var S = new forge.util.ByteBuffer();
  for(l = 0; l < Slen; l++) {
    S.putByte(salt.at(l % s));
  }

  /* 3. Concatenate copies of the password together to create a string P of
        length v * ceil(p / v) bytes (the final copy of the password may be
        truncated to create P).
        Note that if the password is the empty string, then so is P. */
  var Plen = v * Math.ceil(p / v);
  var P = new forge.util.ByteBuffer();
  for(l = 0; l < Plen; l++) {
    P.putByte(passBuf.at(l % p));
  }

  /* 4. Set I=S||P to be the concatenation of S and P. */
  var I = S;
  I.putBuffer(P);

  /* 5. Set c=ceil(n / u). */
  var c = Math.ceil(n / u);

  /* 6. For i=1, 2, ..., c, do the following: */
  for(var i = 1; i <= c; i++) {
    /* a) Set Ai=H^r(D||I). (l.e. the rth hash of D||I, H(H(H(...H(D||I)))) */
    var buf = new forge.util.ByteBuffer();
    buf.putBytes(D.bytes());
    buf.putBytes(I.bytes());
    for(var round = 0; round < iter; round++) {
      md.start();
      md.update(buf.getBytes());
      buf = md.digest();
    }

    /* b) Concatenate copies of Ai to create a string B of length v bytes (the
          final copy of Ai may be truncated to create B). */
    var B = new forge.util.ByteBuffer();
    for(l = 0; l < v; l++) {
      B.putByte(buf.at(l % u));
    }

    /* c) Treating I as a concatenation I0, I1, ..., Ik-1 of v-byte blocks,
          where k=ceil(s / v) + ceil(p / v), modify I by setting
          Ij=(Ij+B+1) mod 2v for each j.  */
    var k = Math.ceil(s / v) + Math.ceil(p / v);
    var Inew = new forge.util.ByteBuffer();
    for(j = 0; j < k; j++) {
      var chunk = new forge.util.ByteBuffer(I.getBytes(v));
      var x = 0x1ff;
      for(l = B.length() - 1; l >= 0; l--) {
        x = x >> 8;
        x += B.at(l) + chunk.at(l);
        chunk.setAt(l, x & 0xff);
      }
      Inew.putBuffer(chunk);
    }
    I = Inew;

    /* Add Ai to A. */
    result.putBuffer(buf);
  }

  result.truncate(result.length() - n);
  return result;
};

/**
 * Get new Forge cipher object instance.
 *
 * @param oid the OID (in string notation).
 * @param params the ASN.1 params object.
 * @param password the password to decrypt with.
 *
 * @return new cipher object instance.
 */
pki.pbe.getCipher = function(oid, params, password) {
  switch(oid) {
  case pki.oids['pkcs5PBES2']:
    return pki.pbe.getCipherForPBES2(oid, params, password);

  case pki.oids['pbeWithSHAAnd3-KeyTripleDES-CBC']:
  case pki.oids['pbewithSHAAnd40BitRC2-CBC']:
    return pki.pbe.getCipherForPKCS12PBE(oid, params, password);

  default:
    var error = new Error('Cannot read encrypted PBE data block. Unsupported OID.');
    error.oid = oid;
    error.supportedOids = [
      'pkcs5PBES2',
      'pbeWithSHAAnd3-KeyTripleDES-CBC',
      'pbewithSHAAnd40BitRC2-CBC'
    ];
    throw error;
  }
};

/**
 * Get new Forge cipher object instance according to PBES2 params block.
 *
 * The returned cipher instance is already started using the IV
 * from PBES2 parameter block.
 *
 * @param oid the PKCS#5 PBKDF2 OID (in string notation).
 * @param params the ASN.1 PBES2-params object.
 * @param password the password to decrypt with.
 *
 * @return new cipher object instance.
 */
pki.pbe.getCipherForPBES2 = function(oid, params, password) {
  // get PBE params
  var capture = {};
  var errors = [];
  if(!asn1.validate(params, PBES2AlgorithmsValidator, capture, errors)) {
    var error = new Error('Cannot read password-based-encryption algorithm ' +
      'parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.');
    error.errors = errors;
    throw error;
  }

  // check oids
  oid = asn1.derToOid(capture.kdfOid);
  if(oid !== pki.oids['pkcs5PBKDF2']) {
    var error = new Error('Cannot read encrypted private key. ' +
      'Unsupported key derivation function OID.');
    error.oid = oid;
    error.supportedOids = ['pkcs5PBKDF2'];
    throw error;
  }
  oid = asn1.derToOid(capture.encOid);
  if(oid !== pki.oids['aes128-CBC'] &&
    oid !== pki.oids['aes192-CBC'] &&
    oid !== pki.oids['aes256-CBC'] &&
    oid !== pki.oids['des-EDE3-CBC'] &&
    oid !== pki.oids['desCBC']) {
    var error = new Error('Cannot read encrypted private key. ' +
      'Unsupported encryption scheme OID.');
    error.oid = oid;
    error.supportedOids = [
      'aes128-CBC', 'aes192-CBC', 'aes256-CBC', 'des-EDE3-CBC', 'desCBC'];
    throw error;
  }

  // set PBE params
  var salt = capture.kdfSalt;
  var count = forge.util.createBuffer(capture.kdfIterationCount);
  count = count.getInt(count.length() << 3);
  var dkLen;
  var cipherFn;
  switch(pki.oids[oid]) {
  case 'aes128-CBC':
    dkLen = 16;
    cipherFn = forge.aes.createDecryptionCipher;
    break;
  case 'aes192-CBC':
    dkLen = 24;
    cipherFn = forge.aes.createDecryptionCipher;
    break;
  case 'aes256-CBC':
    dkLen = 32;
    cipherFn = forge.aes.createDecryptionCipher;
    break;
  case 'des-EDE3-CBC':
    dkLen = 24;
    cipherFn = forge.des.createDecryptionCipher;
    break;
  case 'desCBC':
    dkLen = 8;
    cipherFn = forge.des.createDecryptionCipher;
    break;
  }

  // get PRF message digest
  var md = prfOidToMessageDigest(capture.prfOid);

  // decrypt private key using pbe with chosen PRF and AES/DES
  var dk = forge.pkcs5.pbkdf2(password, salt, count, dkLen, md);
  var iv = capture.encIv;
  var cipher = cipherFn(dk);
  cipher.start(iv);

  return cipher;
};

/**
 * Get new Forge cipher object instance for PKCS#12 PBE.
 *
 * The returned cipher instance is already started using the key & IV
 * derived from the provided password and PKCS#12 PBE salt.
 *
 * @param oid The PKCS#12 PBE OID (in string notation).
 * @param params The ASN.1 PKCS#12 PBE-params object.
 * @param password The password to decrypt with.
 *
 * @return the new cipher object instance.
 */
pki.pbe.getCipherForPKCS12PBE = function(oid, params, password) {
  // get PBE params
  var capture = {};
  var errors = [];
  if(!asn1.validate(params, pkcs12PbeParamsValidator, capture, errors)) {
    var error = new Error('Cannot read password-based-encryption algorithm ' +
      'parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.');
    error.errors = errors;
    throw error;
  }

  var salt = forge.util.createBuffer(capture.salt);
  var count = forge.util.createBuffer(capture.iterations);
  count = count.getInt(count.length() << 3);

  var dkLen, dIvLen, cipherFn;
  switch(oid) {
    case pki.oids['pbeWithSHAAnd3-KeyTripleDES-CBC']:
      dkLen = 24;
      dIvLen = 8;
      cipherFn = forge.des.startDecrypting;
      break;

    case pki.oids['pbewithSHAAnd40BitRC2-CBC']:
      dkLen = 5;
      dIvLen = 8;
      cipherFn = function(key, iv) {
        var cipher = forge.rc2.createDecryptionCipher(key, 40);
        cipher.start(iv, null);
        return cipher;
      };
      break;

    default:
      var error = new Error('Cannot read PKCS #12 PBE data block. Unsupported OID.');
      error.oid = oid;
      throw error;
  }

  // get PRF message digest
  var md = prfOidToMessageDigest(capture.prfOid);
  var key = pki.pbe.generatePkcs12Key(password, salt, 1, count, dkLen, md);
  md.start();
  var iv = pki.pbe.generatePkcs12Key(password, salt, 2, count, dIvLen, md);

  return cipherFn(key, iv);
};

/**
 * OpenSSL's legacy key derivation function.
 *
 * See: http://www.openssl.org/docs/crypto/EVP_BytesToKey.html
 *
 * @param password the password to derive the key from.
 * @param salt the salt to use, null for none.
 * @param dkLen the number of bytes needed for the derived key.
 * @param [options] the options to use:
 *          [md] an optional message digest object to use.
 */
pki.pbe.opensslDeriveBytes = function(password, salt, dkLen, md) {
  if(typeof md === 'undefined' || md === null) {
    if(!('md5' in forge.md)) {
      throw new Error('"md5" hash algorithm unavailable.');
    }
    md = forge.md.md5.create();
  }
  if(salt === null) {
    salt = '';
  }
  var digests = [hash(md, password + salt)];
  for(var length = 16, i = 1; length < dkLen; ++i, length += 16) {
    digests.push(hash(md, digests[i - 1] + password + salt));
  }
  return digests.join('').substr(0, dkLen);
};

function hash(md, bytes) {
  return md.start().update(bytes).digest().getBytes();
}

function prfOidToMessageDigest(prfOid) {
  // get PRF algorithm, default to SHA-1
  var prfAlgorithm;
  if(!prfOid) {
    prfAlgorithm = 'hmacWithSHA1';
  } else {
    prfAlgorithm = pki.oids[asn1.derToOid(prfOid)];
    if(!prfAlgorithm) {
      var error = new Error('Unsupported PRF OID.');
      error.oid = prfOid;
      error.supported = [
        'hmacWithSHA1', 'hmacWithSHA224', 'hmacWithSHA256', 'hmacWithSHA384',
        'hmacWithSHA512'];
      throw error;
    }
  }
  return prfAlgorithmToMessageDigest(prfAlgorithm);
}

function prfAlgorithmToMessageDigest(prfAlgorithm) {
  var factory = forge.md;
  switch(prfAlgorithm) {
  case 'hmacWithSHA224':
    factory = forge.md.sha512;
  case 'hmacWithSHA1':
  case 'hmacWithSHA256':
  case 'hmacWithSHA384':
  case 'hmacWithSHA512':
    prfAlgorithm = prfAlgorithm.substr(8).toLowerCase();
    break;
  default:
    var error = new Error('Unsupported PRF algorithm.');
    error.algorithm = prfAlgorithm;
    error.supported = [
      'hmacWithSHA1', 'hmacWithSHA224', 'hmacWithSHA256', 'hmacWithSHA384',
      'hmacWithSHA512'];
    throw error;
  }
  if(!factory || !(prfAlgorithm in factory)) {
    throw new Error('Unknown hash algorithm: ' + prfAlgorithm);
  }
  return factory[prfAlgorithm].create();
}

function createPbkdf2Params(salt, countBytes, dkLen, prfAlgorithm) {
  var params = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
    // salt
    asn1.create(
      asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, false, salt),
    // iteration count
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
      countBytes.getBytes())
  ]);
  // when PRF algorithm is not SHA-1 default, add key length and PRF algorithm
  if(prfAlgorithm !== 'hmacWithSHA1') {
    params.value.push(
      // key length
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
        forge.util.hexToBytes(dkLen.toString(16))),
      // AlgorithmIdentifier
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // algorithm
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
          asn1.oidToDer(pki.oids[prfAlgorithm]).getBytes()),
        // parameters (null)
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, '')
      ]));
  }
  return params;
}


/***/ }),

/***/ "./node_modules/node-forge/lib/pbkdf2.js":
/*!***********************************************!*\
  !*** ./node_modules/node-forge/lib/pbkdf2.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Password-Based Key-Derivation Function #2 implementation.
 *
 * See RFC 2898 for details.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2013 Digital Bazaar, Inc.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./hmac */ "./node_modules/node-forge/lib/hmac.js");
__webpack_require__(/*! ./md */ "./node_modules/node-forge/lib/md.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

var pkcs5 = forge.pkcs5 = forge.pkcs5 || {};

var crypto;
if(forge.util.isNodejs && !forge.options.usePureJavaScript) {
  crypto = __webpack_require__(/*! crypto */ 0);
}

/**
 * Derives a key from a password.
 *
 * @param p the password as a binary-encoded string of bytes.
 * @param s the salt as a binary-encoded string of bytes.
 * @param c the iteration count, a positive integer.
 * @param dkLen the intended length, in bytes, of the derived key,
 *          (max: 2^32 - 1) * hash length of the PRF.
 * @param [md] the message digest (or algorithm identifier as a string) to use
 *          in the PRF, defaults to SHA-1.
 * @param [callback(err, key)] presence triggers asynchronous version, called
 *          once the operation completes.
 *
 * @return the derived key, as a binary-encoded string of bytes, for the
 *           synchronous version (if no callback is specified).
 */
module.exports = forge.pbkdf2 = pkcs5.pbkdf2 = function(
  p, s, c, dkLen, md, callback) {
  if(typeof md === 'function') {
    callback = md;
    md = null;
  }

  // use native implementation if possible and not disabled, note that
  // some node versions only support SHA-1, others allow digest to be changed
  if(forge.util.isNodejs && !forge.options.usePureJavaScript &&
    crypto.pbkdf2 && (md === null || typeof md !== 'object') &&
    (crypto.pbkdf2Sync.length > 4 || (!md || md === 'sha1'))) {
    if(typeof md !== 'string') {
      // default prf to SHA-1
      md = 'sha1';
    }
    p = Buffer.from(p, 'binary');
    s = Buffer.from(s, 'binary');
    if(!callback) {
      if(crypto.pbkdf2Sync.length === 4) {
        return crypto.pbkdf2Sync(p, s, c, dkLen).toString('binary');
      }
      return crypto.pbkdf2Sync(p, s, c, dkLen, md).toString('binary');
    }
    if(crypto.pbkdf2Sync.length === 4) {
      return crypto.pbkdf2(p, s, c, dkLen, function(err, key) {
        if(err) {
          return callback(err);
        }
        callback(null, key.toString('binary'));
      });
    }
    return crypto.pbkdf2(p, s, c, dkLen, md, function(err, key) {
      if(err) {
        return callback(err);
      }
      callback(null, key.toString('binary'));
    });
  }

  if(typeof md === 'undefined' || md === null) {
    // default prf to SHA-1
    md = 'sha1';
  }
  if(typeof md === 'string') {
    if(!(md in forge.md.algorithms)) {
      throw new Error('Unknown hash algorithm: ' + md);
    }
    md = forge.md[md].create();
  }

  var hLen = md.digestLength;

  /* 1. If dkLen > (2^32 - 1) * hLen, output "derived key too long" and
    stop. */
  if(dkLen > (0xFFFFFFFF * hLen)) {
    var err = new Error('Derived key is too long.');
    if(callback) {
      return callback(err);
    }
    throw err;
  }

  /* 2. Let len be the number of hLen-octet blocks in the derived key,
    rounding up, and let r be the number of octets in the last
    block:

    len = CEIL(dkLen / hLen),
    r = dkLen - (len - 1) * hLen. */
  var len = Math.ceil(dkLen / hLen);
  var r = dkLen - (len - 1) * hLen;

  /* 3. For each block of the derived key apply the function F defined
    below to the password P, the salt S, the iteration count c, and
    the block index to compute the block:

    T_1 = F(P, S, c, 1),
    T_2 = F(P, S, c, 2),
    ...
    T_len = F(P, S, c, len),

    where the function F is defined as the exclusive-or sum of the
    first c iterates of the underlying pseudorandom function PRF
    applied to the password P and the concatenation of the salt S
    and the block index i:

    F(P, S, c, i) = u_1 XOR u_2 XOR ... XOR u_c

    where

    u_1 = PRF(P, S || INT(i)),
    u_2 = PRF(P, u_1),
    ...
    u_c = PRF(P, u_{c-1}).

    Here, INT(i) is a four-octet encoding of the integer i, most
    significant octet first. */
  var prf = forge.hmac.create();
  prf.start(md, p);
  var dk = '';
  var xor, u_c, u_c1;

  // sync version
  if(!callback) {
    for(var i = 1; i <= len; ++i) {
      // PRF(P, S || INT(i)) (first iteration)
      prf.start(null, null);
      prf.update(s);
      prf.update(forge.util.int32ToBytes(i));
      xor = u_c1 = prf.digest().getBytes();

      // PRF(P, u_{c-1}) (other iterations)
      for(var j = 2; j <= c; ++j) {
        prf.start(null, null);
        prf.update(u_c1);
        u_c = prf.digest().getBytes();
        // F(p, s, c, i)
        xor = forge.util.xorBytes(xor, u_c, hLen);
        u_c1 = u_c;
      }

      /* 4. Concatenate the blocks and extract the first dkLen octets to
        produce a derived key DK:

        DK = T_1 || T_2 ||  ...  || T_len<0..r-1> */
      dk += (i < len) ? xor : xor.substr(0, r);
    }
    /* 5. Output the derived key DK. */
    return dk;
  }

  // async version
  var i = 1, j;
  function outer() {
    if(i > len) {
      // done
      return callback(null, dk);
    }

    // PRF(P, S || INT(i)) (first iteration)
    prf.start(null, null);
    prf.update(s);
    prf.update(forge.util.int32ToBytes(i));
    xor = u_c1 = prf.digest().getBytes();

    // PRF(P, u_{c-1}) (other iterations)
    j = 2;
    inner();
  }

  function inner() {
    if(j <= c) {
      prf.start(null, null);
      prf.update(u_c1);
      u_c = prf.digest().getBytes();
      // F(p, s, c, i)
      xor = forge.util.xorBytes(xor, u_c, hLen);
      u_c1 = u_c;
      ++j;
      return forge.util.setImmediate(inner);
    }

    /* 4. Concatenate the blocks and extract the first dkLen octets to
      produce a derived key DK:

      DK = T_1 || T_2 ||  ...  || T_len<0..r-1> */
    dk += (i < len) ? xor : xor.substr(0, r);

    ++i;
    outer();
  }

  outer();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/node-forge/lib/pem.js":
/*!********************************************!*\
  !*** ./node_modules/node-forge/lib/pem.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Javascript implementation of basic PEM (Privacy Enhanced Mail) algorithms.
 *
 * See: RFC 1421.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2013-2014 Digital Bazaar, Inc.
 *
 * A Forge PEM object has the following fields:
 *
 * type: identifies the type of message (eg: "RSA PRIVATE KEY").
 *
 * procType: identifies the type of processing performed on the message,
 *   it has two subfields: version and type, eg: 4,ENCRYPTED.
 *
 * contentDomain: identifies the type of content in the message, typically
 *   only uses the value: "RFC822".
 *
 * dekInfo: identifies the message encryption algorithm and mode and includes
 *   any parameters for the algorithm, it has two subfields: algorithm and
 *   parameters, eg: DES-CBC,F8143EDE5960C597.
 *
 * headers: contains all other PEM encapsulated headers -- where order is
 *   significant (for pairing data like recipient ID + key info).
 *
 * body: the binary-encoded body.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

// shortcut for pem API
var pem = module.exports = forge.pem = forge.pem || {};

/**
 * Encodes (serializes) the given PEM object.
 *
 * @param msg the PEM message object to encode.
 * @param options the options to use:
 *          maxline the maximum characters per line for the body, (default: 64).
 *
 * @return the PEM-formatted string.
 */
pem.encode = function(msg, options) {
  options = options || {};
  var rval = '-----BEGIN ' + msg.type + '-----\r\n';

  // encode special headers
  var header;
  if(msg.procType) {
    header = {
      name: 'Proc-Type',
      values: [String(msg.procType.version), msg.procType.type]
    };
    rval += foldHeader(header);
  }
  if(msg.contentDomain) {
    header = {name: 'Content-Domain', values: [msg.contentDomain]};
    rval += foldHeader(header);
  }
  if(msg.dekInfo) {
    header = {name: 'DEK-Info', values: [msg.dekInfo.algorithm]};
    if(msg.dekInfo.parameters) {
      header.values.push(msg.dekInfo.parameters);
    }
    rval += foldHeader(header);
  }

  if(msg.headers) {
    // encode all other headers
    for(var i = 0; i < msg.headers.length; ++i) {
      rval += foldHeader(msg.headers[i]);
    }
  }

  // terminate header
  if(msg.procType) {
    rval += '\r\n';
  }

  // add body
  rval += forge.util.encode64(msg.body, options.maxline || 64) + '\r\n';

  rval += '-----END ' + msg.type + '-----\r\n';
  return rval;
};

/**
 * Decodes (deserializes) all PEM messages found in the given string.
 *
 * @param str the PEM-formatted string to decode.
 *
 * @return the PEM message objects in an array.
 */
pem.decode = function(str) {
  var rval = [];

  // split string into PEM messages (be lenient w/EOF on BEGIN line)
  var rMessage = /\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g;
  var rHeader = /([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/;
  var rCRLF = /\r?\n/;
  var match;
  while(true) {
    match = rMessage.exec(str);
    if(!match) {
      break;
    }

    var msg = {
      type: match[1],
      procType: null,
      contentDomain: null,
      dekInfo: null,
      headers: [],
      body: forge.util.decode64(match[3])
    };
    rval.push(msg);

    // no headers
    if(!match[2]) {
      continue;
    }

    // parse headers
    var lines = match[2].split(rCRLF);
    var li = 0;
    while(match && li < lines.length) {
      // get line, trim any rhs whitespace
      var line = lines[li].replace(/\s+$/, '');

      // RFC2822 unfold any following folded lines
      for(var nl = li + 1; nl < lines.length; ++nl) {
        var next = lines[nl];
        if(!/\s/.test(next[0])) {
          break;
        }
        line += next;
        li = nl;
      }

      // parse header
      match = line.match(rHeader);
      if(match) {
        var header = {name: match[1], values: []};
        var values = match[2].split(',');
        for(var vi = 0; vi < values.length; ++vi) {
          header.values.push(ltrim(values[vi]));
        }

        // Proc-Type must be the first header
        if(!msg.procType) {
          if(header.name !== 'Proc-Type') {
            throw new Error('Invalid PEM formatted message. The first ' +
              'encapsulated header must be "Proc-Type".');
          } else if(header.values.length !== 2) {
            throw new Error('Invalid PEM formatted message. The "Proc-Type" ' +
              'header must have two subfields.');
          }
          msg.procType = {version: values[0], type: values[1]};
        } else if(!msg.contentDomain && header.name === 'Content-Domain') {
          // special-case Content-Domain
          msg.contentDomain = values[0] || '';
        } else if(!msg.dekInfo && header.name === 'DEK-Info') {
          // special-case DEK-Info
          if(header.values.length === 0) {
            throw new Error('Invalid PEM formatted message. The "DEK-Info" ' +
              'header must have at least one subfield.');
          }
          msg.dekInfo = {algorithm: values[0], parameters: values[1] || null};
        } else {
          msg.headers.push(header);
        }
      }

      ++li;
    }

    if(msg.procType === 'ENCRYPTED' && !msg.dekInfo) {
      throw new Error('Invalid PEM formatted message. The "DEK-Info" ' +
        'header must be present if "Proc-Type" is "ENCRYPTED".');
    }
  }

  if(rval.length === 0) {
    throw new Error('Invalid PEM formatted message.');
  }

  return rval;
};

function foldHeader(header) {
  var rval = header.name + ': ';

  // ensure values with CRLF are folded
  var values = [];
  var insertSpace = function(match, $1) {
    return ' ' + $1;
  };
  for(var i = 0; i < header.values.length; ++i) {
    values.push(header.values[i].replace(/^(\S+\r\n)/, insertSpace));
  }
  rval += values.join(',') + '\r\n';

  // do folding
  var length = 0;
  var candidate = -1;
  for(var i = 0; i < rval.length; ++i, ++length) {
    if(length > 65 && candidate !== -1) {
      var insert = rval[candidate];
      if(insert === ',') {
        ++candidate;
        rval = rval.substr(0, candidate) + '\r\n ' + rval.substr(candidate);
      } else {
        rval = rval.substr(0, candidate) +
          '\r\n' + insert + rval.substr(candidate + 1);
      }
      length = (i - candidate - 1);
      candidate = -1;
      ++i;
    } else if(rval[i] === ' ' || rval[i] === '\t' || rval[i] === ',') {
      candidate = i;
    }
  }

  return rval;
}

function ltrim(str) {
  return str.replace(/^\s+/, '');
}


/***/ }),

/***/ "./node_modules/node-forge/lib/pkcs1.js":
/*!**********************************************!*\
  !*** ./node_modules/node-forge/lib/pkcs1.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Partial implementation of PKCS#1 v2.2: RSA-OEAP
 *
 * Modified but based on the following MIT and BSD licensed code:
 *
 * https://github.com/kjur/jsjws/blob/master/rsa.js:
 *
 * The 'jsjws'(JSON Web Signature JavaScript Library) License
 *
 * Copyright (c) 2012 Kenji Urushima
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * http://webrsa.cvs.sourceforge.net/viewvc/webrsa/Client/RSAES-OAEP.js?content-type=text%2Fplain:
 *
 * RSAES-OAEP.js
 * $Id: RSAES-OAEP.js,v 1.1.1.1 2003/03/19 15:37:20 ellispritchard Exp $
 * JavaScript Implementation of PKCS #1 v2.1 RSA CRYPTOGRAPHY STANDARD (RSA Laboratories, June 14, 2002)
 * Copyright (C) Ellis Pritchard, Guardian Unlimited 2003.
 * Contact: ellis@nukinetics.com
 * Distributed under the BSD License.
 *
 * Official documentation: http://www.rsa.com/rsalabs/node.asp?id=2125
 *
 * @author Evan Jones (http://evanjones.ca/)
 * @author Dave Longley
 *
 * Copyright (c) 2013-2014 Digital Bazaar, Inc.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");
__webpack_require__(/*! ./random */ "./node_modules/node-forge/lib/random.js");
__webpack_require__(/*! ./sha1 */ "./node_modules/node-forge/lib/sha1.js");

// shortcut for PKCS#1 API
var pkcs1 = module.exports = forge.pkcs1 = forge.pkcs1 || {};

/**
 * Encode the given RSAES-OAEP message (M) using key, with optional label (L)
 * and seed.
 *
 * This method does not perform RSA encryption, it only encodes the message
 * using RSAES-OAEP.
 *
 * @param key the RSA key to use.
 * @param message the message to encode.
 * @param options the options to use:
 *          label an optional label to use.
 *          seed the seed to use.
 *          md the message digest object to use, undefined for SHA-1.
 *          mgf1 optional mgf1 parameters:
 *            md the message digest object to use for MGF1.
 *
 * @return the encoded message bytes.
 */
pkcs1.encode_rsa_oaep = function(key, message, options) {
  // parse arguments
  var label;
  var seed;
  var md;
  var mgf1Md;
  // legacy args (label, seed, md)
  if(typeof options === 'string') {
    label = options;
    seed = arguments[3] || undefined;
    md = arguments[4] || undefined;
  } else if(options) {
    label = options.label || undefined;
    seed = options.seed || undefined;
    md = options.md || undefined;
    if(options.mgf1 && options.mgf1.md) {
      mgf1Md = options.mgf1.md;
    }
  }

  // default OAEP to SHA-1 message digest
  if(!md) {
    md = forge.md.sha1.create();
  } else {
    md.start();
  }

  // default MGF-1 to same as OAEP
  if(!mgf1Md) {
    mgf1Md = md;
  }

  // compute length in bytes and check output
  var keyLength = Math.ceil(key.n.bitLength() / 8);
  var maxLength = keyLength - 2 * md.digestLength - 2;
  if(message.length > maxLength) {
    var error = new Error('RSAES-OAEP input message length is too long.');
    error.length = message.length;
    error.maxLength = maxLength;
    throw error;
  }

  if(!label) {
    label = '';
  }
  md.update(label, 'raw');
  var lHash = md.digest();

  var PS = '';
  var PS_length = maxLength - message.length;
  for(var i = 0; i < PS_length; i++) {
    PS += '\x00';
  }

  var DB = lHash.getBytes() + PS + '\x01' + message;

  if(!seed) {
    seed = forge.random.getBytes(md.digestLength);
  } else if(seed.length !== md.digestLength) {
    var error = new Error('Invalid RSAES-OAEP seed. The seed length must ' +
      'match the digest length.');
    error.seedLength = seed.length;
    error.digestLength = md.digestLength;
    throw error;
  }

  var dbMask = rsa_mgf1(seed, keyLength - md.digestLength - 1, mgf1Md);
  var maskedDB = forge.util.xorBytes(DB, dbMask, DB.length);

  var seedMask = rsa_mgf1(maskedDB, md.digestLength, mgf1Md);
  var maskedSeed = forge.util.xorBytes(seed, seedMask, seed.length);

  // return encoded message
  return '\x00' + maskedSeed + maskedDB;
};

/**
 * Decode the given RSAES-OAEP encoded message (EM) using key, with optional
 * label (L).
 *
 * This method does not perform RSA decryption, it only decodes the message
 * using RSAES-OAEP.
 *
 * @param key the RSA key to use.
 * @param em the encoded message to decode.
 * @param options the options to use:
 *          label an optional label to use.
 *          md the message digest object to use for OAEP, undefined for SHA-1.
 *          mgf1 optional mgf1 parameters:
 *            md the message digest object to use for MGF1.
 *
 * @return the decoded message bytes.
 */
pkcs1.decode_rsa_oaep = function(key, em, options) {
  // parse args
  var label;
  var md;
  var mgf1Md;
  // legacy args
  if(typeof options === 'string') {
    label = options;
    md = arguments[3] || undefined;
  } else if(options) {
    label = options.label || undefined;
    md = options.md || undefined;
    if(options.mgf1 && options.mgf1.md) {
      mgf1Md = options.mgf1.md;
    }
  }

  // compute length in bytes
  var keyLength = Math.ceil(key.n.bitLength() / 8);

  if(em.length !== keyLength) {
    var error = new Error('RSAES-OAEP encoded message length is invalid.');
    error.length = em.length;
    error.expectedLength = keyLength;
    throw error;
  }

  // default OAEP to SHA-1 message digest
  if(md === undefined) {
    md = forge.md.sha1.create();
  } else {
    md.start();
  }

  // default MGF-1 to same as OAEP
  if(!mgf1Md) {
    mgf1Md = md;
  }

  if(keyLength < 2 * md.digestLength + 2) {
    throw new Error('RSAES-OAEP key is too short for the hash function.');
  }

  if(!label) {
    label = '';
  }
  md.update(label, 'raw');
  var lHash = md.digest().getBytes();

  // split the message into its parts
  var y = em.charAt(0);
  var maskedSeed = em.substring(1, md.digestLength + 1);
  var maskedDB = em.substring(1 + md.digestLength);

  var seedMask = rsa_mgf1(maskedDB, md.digestLength, mgf1Md);
  var seed = forge.util.xorBytes(maskedSeed, seedMask, maskedSeed.length);

  var dbMask = rsa_mgf1(seed, keyLength - md.digestLength - 1, mgf1Md);
  var db = forge.util.xorBytes(maskedDB, dbMask, maskedDB.length);

  var lHashPrime = db.substring(0, md.digestLength);

  // constant time check that all values match what is expected
  var error = (y !== '\x00');

  // constant time check lHash vs lHashPrime
  for(var i = 0; i < md.digestLength; ++i) {
    error |= (lHash.charAt(i) !== lHashPrime.charAt(i));
  }

  // "constant time" find the 0x1 byte separating the padding (zeros) from the
  // message
  // TODO: It must be possible to do this in a better/smarter way?
  var in_ps = 1;
  var index = md.digestLength;
  for(var j = md.digestLength; j < db.length; j++) {
    var code = db.charCodeAt(j);

    var is_0 = (code & 0x1) ^ 0x1;

    // non-zero if not 0 or 1 in the ps section
    var error_mask = in_ps ? 0xfffe : 0x0000;
    error |= (code & error_mask);

    // latch in_ps to zero after we find 0x1
    in_ps = in_ps & is_0;
    index += in_ps;
  }

  if(error || db.charCodeAt(index) !== 0x1) {
    throw new Error('Invalid RSAES-OAEP padding.');
  }

  return db.substring(index + 1);
};

function rsa_mgf1(seed, maskLength, hash) {
  // default to SHA-1 message digest
  if(!hash) {
    hash = forge.md.sha1.create();
  }
  var t = '';
  var count = Math.ceil(maskLength / hash.digestLength);
  for(var i = 0; i < count; ++i) {
    var c = String.fromCharCode(
      (i >> 24) & 0xFF, (i >> 16) & 0xFF, (i >> 8) & 0xFF, i & 0xFF);
    hash.start();
    hash.update(seed + c);
    t += hash.digest().getBytes();
  }
  return t.substring(0, maskLength);
}


/***/ }),

/***/ "./node_modules/node-forge/lib/pkcs12.js":
/*!***********************************************!*\
  !*** ./node_modules/node-forge/lib/pkcs12.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Javascript implementation of PKCS#12.
 *
 * @author Dave Longley
 * @author Stefan Siegl <stesie@brokenpipe.de>
 *
 * Copyright (c) 2010-2014 Digital Bazaar, Inc.
 * Copyright (c) 2012 Stefan Siegl <stesie@brokenpipe.de>
 *
 * The ASN.1 representation of PKCS#12 is as follows
 * (see ftp://ftp.rsasecurity.com/pub/pkcs/pkcs-12/pkcs-12-tc1.pdf for details)
 *
 * PFX ::= SEQUENCE {
 *   version  INTEGER {v3(3)}(v3,...),
 *   authSafe ContentInfo,
 *   macData  MacData OPTIONAL
 * }
 *
 * MacData ::= SEQUENCE {
 *   mac DigestInfo,
 *   macSalt OCTET STRING,
 *   iterations INTEGER DEFAULT 1
 * }
 * Note: The iterations default is for historical reasons and its use is
 * deprecated. A higher value, like 1024, is recommended.
 *
 * DigestInfo is defined in PKCS#7 as follows:
 *
 * DigestInfo ::= SEQUENCE {
 *   digestAlgorithm DigestAlgorithmIdentifier,
 *   digest Digest
 * }
 *
 * DigestAlgorithmIdentifier ::= AlgorithmIdentifier
 *
 * The AlgorithmIdentifier contains an Object Identifier (OID) and parameters
 * for the algorithm, if any. In the case of SHA1 there is none.
 *
 * AlgorithmIdentifer ::= SEQUENCE {
 *    algorithm OBJECT IDENTIFIER,
 *    parameters ANY DEFINED BY algorithm OPTIONAL
 * }
 *
 * Digest ::= OCTET STRING
 *
 *
 * ContentInfo ::= SEQUENCE {
 *   contentType ContentType,
 *   content     [0] EXPLICIT ANY DEFINED BY contentType OPTIONAL
 * }
 *
 * ContentType ::= OBJECT IDENTIFIER
 *
 * AuthenticatedSafe ::= SEQUENCE OF ContentInfo
 * -- Data if unencrypted
 * -- EncryptedData if password-encrypted
 * -- EnvelopedData if public key-encrypted
 *
 *
 * SafeContents ::= SEQUENCE OF SafeBag
 *
 * SafeBag ::= SEQUENCE {
 *   bagId     BAG-TYPE.&id ({PKCS12BagSet})
 *   bagValue  [0] EXPLICIT BAG-TYPE.&Type({PKCS12BagSet}{@bagId}),
 *   bagAttributes SET OF PKCS12Attribute OPTIONAL
 * }
 *
 * PKCS12Attribute ::= SEQUENCE {
 *   attrId ATTRIBUTE.&id ({PKCS12AttrSet}),
 *   attrValues SET OF ATTRIBUTE.&Type ({PKCS12AttrSet}{@attrId})
 * } -- This type is compatible with the X.500 type 'Attribute'
 *
 * PKCS12AttrSet ATTRIBUTE ::= {
 *   friendlyName | -- from PKCS #9
 *   localKeyId, -- from PKCS #9
 *   ... -- Other attributes are allowed
 * }
 *
 * CertBag ::= SEQUENCE {
 *   certId    BAG-TYPE.&id   ({CertTypes}),
 *   certValue [0] EXPLICIT BAG-TYPE.&Type ({CertTypes}{@certId})
 * }
 *
 * x509Certificate BAG-TYPE ::= {OCTET STRING IDENTIFIED BY {certTypes 1}}
 *   -- DER-encoded X.509 certificate stored in OCTET STRING
 *
 * sdsiCertificate BAG-TYPE ::= {IA5String IDENTIFIED BY {certTypes 2}}
 * -- Base64-encoded SDSI certificate stored in IA5String
 *
 * CertTypes BAG-TYPE ::= {
 *   x509Certificate |
 *   sdsiCertificate,
 *   ... -- For future extensions
 * }
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./asn1 */ "./node_modules/node-forge/lib/asn1.js");
__webpack_require__(/*! ./hmac */ "./node_modules/node-forge/lib/hmac.js");
__webpack_require__(/*! ./oids */ "./node_modules/node-forge/lib/oids.js");
__webpack_require__(/*! ./pkcs7asn1 */ "./node_modules/node-forge/lib/pkcs7asn1.js");
__webpack_require__(/*! ./pbe */ "./node_modules/node-forge/lib/pbe.js");
__webpack_require__(/*! ./random */ "./node_modules/node-forge/lib/random.js");
__webpack_require__(/*! ./rsa */ "./node_modules/node-forge/lib/rsa.js");
__webpack_require__(/*! ./sha1 */ "./node_modules/node-forge/lib/sha1.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");
__webpack_require__(/*! ./x509 */ "./node_modules/node-forge/lib/x509.js");

// shortcut for asn.1 & PKI API
var asn1 = forge.asn1;
var pki = forge.pki;

// shortcut for PKCS#12 API
var p12 = module.exports = forge.pkcs12 = forge.pkcs12 || {};

var contentInfoValidator = {
  name: 'ContentInfo',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,  // a ContentInfo
  constructed: true,
  value: [{
    name: 'ContentInfo.contentType',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.OID,
    constructed: false,
    capture: 'contentType'
  }, {
    name: 'ContentInfo.content',
    tagClass: asn1.Class.CONTEXT_SPECIFIC,
    constructed: true,
    captureAsn1: 'content'
  }]
};

var pfxValidator = {
  name: 'PFX',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: 'PFX.version',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'version'
  },
  contentInfoValidator, {
    name: 'PFX.macData',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SEQUENCE,
    constructed: true,
    optional: true,
    captureAsn1: 'mac',
    value: [{
      name: 'PFX.macData.mac',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,  // DigestInfo
      constructed: true,
      value: [{
        name: 'PFX.macData.mac.digestAlgorithm',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,  // DigestAlgorithmIdentifier
        constructed: true,
        value: [{
          name: 'PFX.macData.mac.digestAlgorithm.algorithm',
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.OID,
          constructed: false,
          capture: 'macAlgorithm'
        }, {
          name: 'PFX.macData.mac.digestAlgorithm.parameters',
          tagClass: asn1.Class.UNIVERSAL,
          captureAsn1: 'macAlgorithmParameters'
        }]
      }, {
        name: 'PFX.macData.mac.digest',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OCTETSTRING,
        constructed: false,
        capture: 'macDigest'
      }]
    }, {
      name: 'PFX.macData.macSalt',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.OCTETSTRING,
      constructed: false,
      capture: 'macSalt'
    }, {
      name: 'PFX.macData.iterations',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.INTEGER,
      constructed: false,
      optional: true,
      capture: 'macIterations'
    }]
  }]
};

var safeBagValidator = {
  name: 'SafeBag',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: 'SafeBag.bagId',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.OID,
    constructed: false,
    capture: 'bagId'
  }, {
    name: 'SafeBag.bagValue',
    tagClass: asn1.Class.CONTEXT_SPECIFIC,
    constructed: true,
    captureAsn1: 'bagValue'
  }, {
    name: 'SafeBag.bagAttributes',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SET,
    constructed: true,
    optional: true,
    capture: 'bagAttributes'
  }]
};

var attributeValidator = {
  name: 'Attribute',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: 'Attribute.attrId',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.OID,
    constructed: false,
    capture: 'oid'
  }, {
    name: 'Attribute.attrValues',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SET,
    constructed: true,
    capture: 'values'
  }]
};

var certBagValidator = {
  name: 'CertBag',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: 'CertBag.certId',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.OID,
    constructed: false,
    capture: 'certId'
  }, {
    name: 'CertBag.certValue',
    tagClass: asn1.Class.CONTEXT_SPECIFIC,
    constructed: true,
    /* So far we only support X.509 certificates (which are wrapped in
       an OCTET STRING, hence hard code that here). */
    value: [{
      name: 'CertBag.certValue[0]',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Class.OCTETSTRING,
      constructed: false,
      capture: 'cert'
    }]
  }]
};

/**
 * Search SafeContents structure for bags with matching attributes.
 *
 * The search can optionally be narrowed by a certain bag type.
 *
 * @param safeContents the SafeContents structure to search in.
 * @param attrName the name of the attribute to compare against.
 * @param attrValue the attribute value to search for.
 * @param [bagType] bag type to narrow search by.
 *
 * @return an array of matching bags.
 */
function _getBagsByAttribute(safeContents, attrName, attrValue, bagType) {
  var result = [];

  for(var i = 0; i < safeContents.length; i++) {
    for(var j = 0; j < safeContents[i].safeBags.length; j++) {
      var bag = safeContents[i].safeBags[j];
      if(bagType !== undefined && bag.type !== bagType) {
        continue;
      }
      // only filter by bag type, no attribute specified
      if(attrName === null) {
        result.push(bag);
        continue;
      }
      if(bag.attributes[attrName] !== undefined &&
        bag.attributes[attrName].indexOf(attrValue) >= 0) {
        result.push(bag);
      }
    }
  }

  return result;
}

/**
 * Converts a PKCS#12 PFX in ASN.1 notation into a PFX object.
 *
 * @param obj The PKCS#12 PFX in ASN.1 notation.
 * @param strict true to use strict DER decoding, false not to (default: true).
 * @param {String} password Password to decrypt with (optional).
 *
 * @return PKCS#12 PFX object.
 */
p12.pkcs12FromAsn1 = function(obj, strict, password) {
  // handle args
  if(typeof strict === 'string') {
    password = strict;
    strict = true;
  } else if(strict === undefined) {
    strict = true;
  }

  // validate PFX and capture data
  var capture = {};
  var errors = [];
  if(!asn1.validate(obj, pfxValidator, capture, errors)) {
    var error = new Error('Cannot read PKCS#12 PFX. ' +
      'ASN.1 object is not an PKCS#12 PFX.');
    error.errors = error;
    throw error;
  }

  var pfx = {
    version: capture.version.charCodeAt(0),
    safeContents: [],

    /**
     * Gets bags with matching attributes.
     *
     * @param filter the attributes to filter by:
     *          [localKeyId] the localKeyId to search for.
     *          [localKeyIdHex] the localKeyId in hex to search for.
     *          [friendlyName] the friendly name to search for.
     *          [bagType] bag type to narrow each attribute search by.
     *
     * @return a map of attribute type to an array of matching bags or, if no
     *           attribute was given but a bag type, the map key will be the
     *           bag type.
     */
    getBags: function(filter) {
      var rval = {};

      var localKeyId;
      if('localKeyId' in filter) {
        localKeyId = filter.localKeyId;
      } else if('localKeyIdHex' in filter) {
        localKeyId = forge.util.hexToBytes(filter.localKeyIdHex);
      }

      // filter on bagType only
      if(localKeyId === undefined && !('friendlyName' in filter) &&
        'bagType' in filter) {
        rval[filter.bagType] = _getBagsByAttribute(
          pfx.safeContents, null, null, filter.bagType);
      }

      if(localKeyId !== undefined) {
        rval.localKeyId = _getBagsByAttribute(
          pfx.safeContents, 'localKeyId',
          localKeyId, filter.bagType);
      }
      if('friendlyName' in filter) {
        rval.friendlyName = _getBagsByAttribute(
          pfx.safeContents, 'friendlyName',
          filter.friendlyName, filter.bagType);
      }

      return rval;
    },

    /**
     * DEPRECATED: use getBags() instead.
     *
     * Get bags with matching friendlyName attribute.
     *
     * @param friendlyName the friendly name to search for.
     * @param [bagType] bag type to narrow search by.
     *
     * @return an array of bags with matching friendlyName attribute.
     */
    getBagsByFriendlyName: function(friendlyName, bagType) {
      return _getBagsByAttribute(
        pfx.safeContents, 'friendlyName', friendlyName, bagType);
    },

    /**
     * DEPRECATED: use getBags() instead.
     *
     * Get bags with matching localKeyId attribute.
     *
     * @param localKeyId the localKeyId to search for.
     * @param [bagType] bag type to narrow search by.
     *
     * @return an array of bags with matching localKeyId attribute.
     */
    getBagsByLocalKeyId: function(localKeyId, bagType) {
      return _getBagsByAttribute(
        pfx.safeContents, 'localKeyId', localKeyId, bagType);
    }
  };

  if(capture.version.charCodeAt(0) !== 3) {
    var error = new Error('PKCS#12 PFX of version other than 3 not supported.');
    error.version = capture.version.charCodeAt(0);
    throw error;
  }

  if(asn1.derToOid(capture.contentType) !== pki.oids.data) {
    var error = new Error('Only PKCS#12 PFX in password integrity mode supported.');
    error.oid = asn1.derToOid(capture.contentType);
    throw error;
  }

  var data = capture.content.value[0];
  if(data.tagClass !== asn1.Class.UNIVERSAL ||
     data.type !== asn1.Type.OCTETSTRING) {
    throw new Error('PKCS#12 authSafe content data is not an OCTET STRING.');
  }
  data = _decodePkcs7Data(data);

  // check for MAC
  if(capture.mac) {
    var md = null;
    var macKeyBytes = 0;
    var macAlgorithm = asn1.derToOid(capture.macAlgorithm);
    switch(macAlgorithm) {
    case pki.oids.sha1:
      md = forge.md.sha1.create();
      macKeyBytes = 20;
      break;
    case pki.oids.sha256:
      md = forge.md.sha256.create();
      macKeyBytes = 32;
      break;
    case pki.oids.sha384:
      md = forge.md.sha384.create();
      macKeyBytes = 48;
      break;
    case pki.oids.sha512:
      md = forge.md.sha512.create();
      macKeyBytes = 64;
      break;
    case pki.oids.md5:
      md = forge.md.md5.create();
      macKeyBytes = 16;
      break;
    }
    if(md === null) {
      throw new Error('PKCS#12 uses unsupported MAC algorithm: ' + macAlgorithm);
    }

    // verify MAC (iterations default to 1)
    var macSalt = new forge.util.ByteBuffer(capture.macSalt);
    var macIterations = (('macIterations' in capture) ?
      parseInt(forge.util.bytesToHex(capture.macIterations), 16) : 1);
    var macKey = p12.generateKey(
      password, macSalt, 3, macIterations, macKeyBytes, md);
    var mac = forge.hmac.create();
    mac.start(md, macKey);
    mac.update(data.value);
    var macValue = mac.getMac();
    if(macValue.getBytes() !== capture.macDigest) {
      throw new Error('PKCS#12 MAC could not be verified. Invalid password?');
    }
  }

  _decodeAuthenticatedSafe(pfx, data.value, strict, password);
  return pfx;
};

/**
 * Decodes PKCS#7 Data. PKCS#7 (RFC 2315) defines "Data" as an OCTET STRING,
 * but it is sometimes an OCTET STRING that is composed/constructed of chunks,
 * each its own OCTET STRING. This is BER-encoding vs. DER-encoding. This
 * function transforms this corner-case into the usual simple,
 * non-composed/constructed OCTET STRING.
 *
 * This function may be moved to ASN.1 at some point to better deal with
 * more BER-encoding issues, should they arise.
 *
 * @param data the ASN.1 Data object to transform.
 */
function _decodePkcs7Data(data) {
  // handle special case of "chunked" data content: an octet string composed
  // of other octet strings
  if(data.composed || data.constructed) {
    var value = forge.util.createBuffer();
    for(var i = 0; i < data.value.length; ++i) {
      value.putBytes(data.value[i].value);
    }
    data.composed = data.constructed = false;
    data.value = value.getBytes();
  }
  return data;
}

/**
 * Decode PKCS#12 AuthenticatedSafe (BER encoded) into PFX object.
 *
 * The AuthenticatedSafe is a BER-encoded SEQUENCE OF ContentInfo.
 *
 * @param pfx The PKCS#12 PFX object to fill.
 * @param {String} authSafe BER-encoded AuthenticatedSafe.
 * @param strict true to use strict DER decoding, false not to.
 * @param {String} password Password to decrypt with (optional).
 */
function _decodeAuthenticatedSafe(pfx, authSafe, strict, password) {
  authSafe = asn1.fromDer(authSafe, strict);  /* actually it's BER encoded */

  if(authSafe.tagClass !== asn1.Class.UNIVERSAL ||
     authSafe.type !== asn1.Type.SEQUENCE ||
     authSafe.constructed !== true) {
    throw new Error('PKCS#12 AuthenticatedSafe expected to be a ' +
      'SEQUENCE OF ContentInfo');
  }

  for(var i = 0; i < authSafe.value.length; i++) {
    var contentInfo = authSafe.value[i];

    // validate contentInfo and capture data
    var capture = {};
    var errors = [];
    if(!asn1.validate(contentInfo, contentInfoValidator, capture, errors)) {
      var error = new Error('Cannot read ContentInfo.');
      error.errors = errors;
      throw error;
    }

    var obj = {
      encrypted: false
    };
    var safeContents = null;
    var data = capture.content.value[0];
    switch(asn1.derToOid(capture.contentType)) {
    case pki.oids.data:
      if(data.tagClass !== asn1.Class.UNIVERSAL ||
         data.type !== asn1.Type.OCTETSTRING) {
        throw new Error('PKCS#12 SafeContents Data is not an OCTET STRING.');
      }
      safeContents = _decodePkcs7Data(data).value;
      break;
    case pki.oids.encryptedData:
      safeContents = _decryptSafeContents(data, password);
      obj.encrypted = true;
      break;
    default:
      var error = new Error('Unsupported PKCS#12 contentType.');
      error.contentType = asn1.derToOid(capture.contentType);
      throw error;
    }

    obj.safeBags = _decodeSafeContents(safeContents, strict, password);
    pfx.safeContents.push(obj);
  }
}

/**
 * Decrypt PKCS#7 EncryptedData structure.
 *
 * @param data ASN.1 encoded EncryptedContentInfo object.
 * @param password The user-provided password.
 *
 * @return The decrypted SafeContents (ASN.1 object).
 */
function _decryptSafeContents(data, password) {
  var capture = {};
  var errors = [];
  if(!asn1.validate(
    data, forge.pkcs7.asn1.encryptedDataValidator, capture, errors)) {
    var error = new Error('Cannot read EncryptedContentInfo.');
    error.errors = errors;
    throw error;
  }

  var oid = asn1.derToOid(capture.contentType);
  if(oid !== pki.oids.data) {
    var error = new Error(
      'PKCS#12 EncryptedContentInfo ContentType is not Data.');
    error.oid = oid;
    throw error;
  }

  // get cipher
  oid = asn1.derToOid(capture.encAlgorithm);
  var cipher = pki.pbe.getCipher(oid, capture.encParameter, password);

  // get encrypted data
  var encryptedContentAsn1 = _decodePkcs7Data(capture.encryptedContentAsn1);
  var encrypted = forge.util.createBuffer(encryptedContentAsn1.value);

  cipher.update(encrypted);
  if(!cipher.finish()) {
    throw new Error('Failed to decrypt PKCS#12 SafeContents.');
  }

  return cipher.output.getBytes();
}

/**
 * Decode PKCS#12 SafeContents (BER-encoded) into array of Bag objects.
 *
 * The safeContents is a BER-encoded SEQUENCE OF SafeBag.
 *
 * @param {String} safeContents BER-encoded safeContents.
 * @param strict true to use strict DER decoding, false not to.
 * @param {String} password Password to decrypt with (optional).
 *
 * @return {Array} Array of Bag objects.
 */
function _decodeSafeContents(safeContents, strict, password) {
  // if strict and no safe contents, return empty safes
  if(!strict && safeContents.length === 0) {
    return [];
  }

  // actually it's BER-encoded
  safeContents = asn1.fromDer(safeContents, strict);

  if(safeContents.tagClass !== asn1.Class.UNIVERSAL ||
    safeContents.type !== asn1.Type.SEQUENCE ||
    safeContents.constructed !== true) {
    throw new Error(
      'PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag.');
  }

  var res = [];
  for(var i = 0; i < safeContents.value.length; i++) {
    var safeBag = safeContents.value[i];

    // validate SafeBag and capture data
    var capture = {};
    var errors = [];
    if(!asn1.validate(safeBag, safeBagValidator, capture, errors)) {
      var error = new Error('Cannot read SafeBag.');
      error.errors = errors;
      throw error;
    }

    /* Create bag object and push to result array. */
    var bag = {
      type: asn1.derToOid(capture.bagId),
      attributes: _decodeBagAttributes(capture.bagAttributes)
    };
    res.push(bag);

    var validator, decoder;
    var bagAsn1 = capture.bagValue.value[0];
    switch(bag.type) {
      case pki.oids.pkcs8ShroudedKeyBag:
        /* bagAsn1 has a EncryptedPrivateKeyInfo, which we need to decrypt.
           Afterwards we can handle it like a keyBag,
           which is a PrivateKeyInfo. */
        bagAsn1 = pki.decryptPrivateKeyInfo(bagAsn1, password);
        if(bagAsn1 === null) {
          throw new Error(
            'Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?');
        }

        /* fall through */
      case pki.oids.keyBag:
        /* A PKCS#12 keyBag is a simple PrivateKeyInfo as understood by our
           PKI module, hence we don't have to do validation/capturing here,
           just pass what we already got. */
        try {
          bag.key = pki.privateKeyFromAsn1(bagAsn1);
        } catch(e) {
          // ignore unknown key type, pass asn1 value
          bag.key = null;
          bag.asn1 = bagAsn1;
        }
        continue;  /* Nothing more to do. */

      case pki.oids.certBag:
        /* A PKCS#12 certBag can wrap both X.509 and sdsi certificates.
           Therefore put the SafeBag content through another validator to
           capture the fields.  Afterwards check & store the results. */
        validator = certBagValidator;
        decoder = function() {
          if(asn1.derToOid(capture.certId) !== pki.oids.x509Certificate) {
            var error = new Error(
              'Unsupported certificate type, only X.509 supported.');
            error.oid = asn1.derToOid(capture.certId);
            throw error;
          }

          // true=produce cert hash
          var certAsn1 = asn1.fromDer(capture.cert, strict);
          try {
            bag.cert = pki.certificateFromAsn1(certAsn1, true);
          } catch(e) {
            // ignore unknown cert type, pass asn1 value
            bag.cert = null;
            bag.asn1 = certAsn1;
          }
        };
        break;

      default:
        var error = new Error('Unsupported PKCS#12 SafeBag type.');
        error.oid = bag.type;
        throw error;
    }

    /* Validate SafeBag value (i.e. CertBag, etc.) and capture data if needed. */
    if(validator !== undefined &&
       !asn1.validate(bagAsn1, validator, capture, errors)) {
      var error = new Error('Cannot read PKCS#12 ' + validator.name);
      error.errors = errors;
      throw error;
    }

    /* Call decoder function from above to store the results. */
    decoder();
  }

  return res;
}

/**
 * Decode PKCS#12 SET OF PKCS12Attribute into JavaScript object.
 *
 * @param attributes SET OF PKCS12Attribute (ASN.1 object).
 *
 * @return the decoded attributes.
 */
function _decodeBagAttributes(attributes) {
  var decodedAttrs = {};

  if(attributes !== undefined) {
    for(var i = 0; i < attributes.length; ++i) {
      var capture = {};
      var errors = [];
      if(!asn1.validate(attributes[i], attributeValidator, capture, errors)) {
        var error = new Error('Cannot read PKCS#12 BagAttribute.');
        error.errors = errors;
        throw error;
      }

      var oid = asn1.derToOid(capture.oid);
      if(pki.oids[oid] === undefined) {
        // unsupported attribute type, ignore.
        continue;
      }

      decodedAttrs[pki.oids[oid]] = [];
      for(var j = 0; j < capture.values.length; ++j) {
        decodedAttrs[pki.oids[oid]].push(capture.values[j].value);
      }
    }
  }

  return decodedAttrs;
}

/**
 * Wraps a private key and certificate in a PKCS#12 PFX wrapper. If a
 * password is provided then the private key will be encrypted.
 *
 * An entire certificate chain may also be included. To do this, pass
 * an array for the "cert" parameter where the first certificate is
 * the one that is paired with the private key and each subsequent one
 * verifies the previous one. The certificates may be in PEM format or
 * have been already parsed by Forge.
 *
 * @todo implement password-based-encryption for the whole package
 *
 * @param key the private key.
 * @param cert the certificate (may be an array of certificates in order
 *          to specify a certificate chain).
 * @param password the password to use, null for none.
 * @param options:
 *          algorithm the encryption algorithm to use
 *            ('aes128', 'aes192', 'aes256', '3des'), defaults to 'aes128'.
 *          count the iteration count to use.
 *          saltSize the salt size to use.
 *          useMac true to include a MAC, false not to, defaults to true.
 *          localKeyId the local key ID to use, in hex.
 *          friendlyName the friendly name to use.
 *          generateLocalKeyId true to generate a random local key ID,
 *            false not to, defaults to true.
 *
 * @return the PKCS#12 PFX ASN.1 object.
 */
p12.toPkcs12Asn1 = function(key, cert, password, options) {
  // set default options
  options = options || {};
  options.saltSize = options.saltSize || 8;
  options.count = options.count || 2048;
  options.algorithm = options.algorithm || options.encAlgorithm || 'aes128';
  if(!('useMac' in options)) {
    options.useMac = true;
  }
  if(!('localKeyId' in options)) {
    options.localKeyId = null;
  }
  if(!('generateLocalKeyId' in options)) {
    options.generateLocalKeyId = true;
  }

  var localKeyId = options.localKeyId;
  var bagAttrs;
  if(localKeyId !== null) {
    localKeyId = forge.util.hexToBytes(localKeyId);
  } else if(options.generateLocalKeyId) {
    // use SHA-1 of paired cert, if available
    if(cert) {
      var pairedCert = forge.util.isArray(cert) ? cert[0] : cert;
      if(typeof pairedCert === 'string') {
        pairedCert = pki.certificateFromPem(pairedCert);
      }
      var sha1 = forge.md.sha1.create();
      sha1.update(asn1.toDer(pki.certificateToAsn1(pairedCert)).getBytes());
      localKeyId = sha1.digest().getBytes();
    } else {
      // FIXME: consider using SHA-1 of public key (which can be generated
      // from private key components), see: cert.generateSubjectKeyIdentifier
      // generate random bytes
      localKeyId = forge.random.getBytes(20);
    }
  }

  var attrs = [];
  if(localKeyId !== null) {
    attrs.push(
      // localKeyID
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // attrId
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
          asn1.oidToDer(pki.oids.localKeyId).getBytes()),
        // attrValues
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SET, true, [
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, false,
            localKeyId)
        ])
      ]));
  }
  if('friendlyName' in options) {
    attrs.push(
      // friendlyName
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // attrId
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
          asn1.oidToDer(pki.oids.friendlyName).getBytes()),
        // attrValues
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SET, true, [
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.BMPSTRING, false,
            options.friendlyName)
        ])
      ]));
  }

  if(attrs.length > 0) {
    bagAttrs = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SET, true, attrs);
  }

  // collect contents for AuthenticatedSafe
  var contents = [];

  // create safe bag(s) for certificate chain
  var chain = [];
  if(cert !== null) {
    if(forge.util.isArray(cert)) {
      chain = cert;
    } else {
      chain = [cert];
    }
  }

  var certSafeBags = [];
  for(var i = 0; i < chain.length; ++i) {
    // convert cert from PEM as necessary
    cert = chain[i];
    if(typeof cert === 'string') {
      cert = pki.certificateFromPem(cert);
    }

    // SafeBag
    var certBagAttrs = (i === 0) ? bagAttrs : undefined;
    var certAsn1 = pki.certificateToAsn1(cert);
    var certSafeBag =
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // bagId
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
          asn1.oidToDer(pki.oids.certBag).getBytes()),
        // bagValue
        asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
          // CertBag
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
            // certId
            asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
              asn1.oidToDer(pki.oids.x509Certificate).getBytes()),
            // certValue (x509Certificate)
            asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
              asn1.create(
                asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, false,
                asn1.toDer(certAsn1).getBytes())
            ])])]),
        // bagAttributes (OPTIONAL)
        certBagAttrs
      ]);
    certSafeBags.push(certSafeBag);
  }

  if(certSafeBags.length > 0) {
    // SafeContents
    var certSafeContents = asn1.create(
      asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, certSafeBags);

    // ContentInfo
    var certCI =
      // PKCS#7 ContentInfo
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // contentType
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
          // OID for the content type is 'data'
          asn1.oidToDer(pki.oids.data).getBytes()),
        // content
        asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
          asn1.create(
            asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, false,
            asn1.toDer(certSafeContents).getBytes())
        ])
      ]);
    contents.push(certCI);
  }

  // create safe contents for private key
  var keyBag = null;
  if(key !== null) {
    // SafeBag
    var pkAsn1 = pki.wrapRsaPrivateKey(pki.privateKeyToAsn1(key));
    if(password === null) {
      // no encryption
      keyBag = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // bagId
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
          asn1.oidToDer(pki.oids.keyBag).getBytes()),
        // bagValue
        asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
          // PrivateKeyInfo
          pkAsn1
        ]),
        // bagAttributes (OPTIONAL)
        bagAttrs
      ]);
    } else {
      // encrypted PrivateKeyInfo
      keyBag = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // bagId
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
          asn1.oidToDer(pki.oids.pkcs8ShroudedKeyBag).getBytes()),
        // bagValue
        asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
          // EncryptedPrivateKeyInfo
          pki.encryptPrivateKeyInfo(pkAsn1, password, options)
        ]),
        // bagAttributes (OPTIONAL)
        bagAttrs
      ]);
    }

    // SafeContents
    var keySafeContents =
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [keyBag]);

    // ContentInfo
    var keyCI =
      // PKCS#7 ContentInfo
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // contentType
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
          // OID for the content type is 'data'
          asn1.oidToDer(pki.oids.data).getBytes()),
        // content
        asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
          asn1.create(
            asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, false,
            asn1.toDer(keySafeContents).getBytes())
        ])
      ]);
    contents.push(keyCI);
  }

  // create AuthenticatedSafe by stringing together the contents
  var safe = asn1.create(
    asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, contents);

  var macData;
  if(options.useMac) {
    // MacData
    var sha1 = forge.md.sha1.create();
    var macSalt = new forge.util.ByteBuffer(
      forge.random.getBytes(options.saltSize));
    var count = options.count;
    // 160-bit key
    var key = p12.generateKey(password, macSalt, 3, count, 20);
    var mac = forge.hmac.create();
    mac.start(sha1, key);
    mac.update(asn1.toDer(safe).getBytes());
    var macValue = mac.getMac();
    macData = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
      // mac DigestInfo
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // digestAlgorithm
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          // algorithm = SHA-1
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
            asn1.oidToDer(pki.oids.sha1).getBytes()),
          // parameters = Null
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, '')
        ]),
        // digest
        asn1.create(
          asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING,
          false, macValue.getBytes())
      ]),
      // macSalt OCTET STRING
      asn1.create(
        asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, false, macSalt.getBytes()),
      // iterations INTEGER (XXX: Only support count < 65536)
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
        asn1.integerToDer(count).getBytes()
      )
    ]);
  }

  // PFX
  return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
    // version (3)
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
      asn1.integerToDer(3).getBytes()),
    // PKCS#7 ContentInfo
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
      // contentType
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
        // OID for the content type is 'data'
        asn1.oidToDer(pki.oids.data).getBytes()),
      // content
      asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
        asn1.create(
          asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, false,
          asn1.toDer(safe).getBytes())
      ])
    ]),
    macData
  ]);
};

/**
 * Derives a PKCS#12 key.
 *
 * @param password the password to derive the key material from, null or
 *          undefined for none.
 * @param salt the salt, as a ByteBuffer, to use.
 * @param id the PKCS#12 ID byte (1 = key material, 2 = IV, 3 = MAC).
 * @param iter the iteration count.
 * @param n the number of bytes to derive from the password.
 * @param md the message digest to use, defaults to SHA-1.
 *
 * @return a ByteBuffer with the bytes derived from the password.
 */
p12.generateKey = forge.pbe.generatePkcs12Key;


/***/ }),

/***/ "./node_modules/node-forge/lib/pkcs7asn1.js":
/*!**************************************************!*\
  !*** ./node_modules/node-forge/lib/pkcs7asn1.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Javascript implementation of ASN.1 validators for PKCS#7 v1.5.
 *
 * @author Dave Longley
 * @author Stefan Siegl
 *
 * Copyright (c) 2012-2015 Digital Bazaar, Inc.
 * Copyright (c) 2012 Stefan Siegl <stesie@brokenpipe.de>
 *
 * The ASN.1 representation of PKCS#7 is as follows
 * (see RFC #2315 for details, http://www.ietf.org/rfc/rfc2315.txt):
 *
 * A PKCS#7 message consists of a ContentInfo on root level, which may
 * contain any number of further ContentInfo nested into it.
 *
 * ContentInfo ::= SEQUENCE {
 *   contentType                ContentType,
 *   content               [0]  EXPLICIT ANY DEFINED BY contentType OPTIONAL
 * }
 *
 * ContentType ::= OBJECT IDENTIFIER
 *
 * EnvelopedData ::= SEQUENCE {
 *   version                    Version,
 *   recipientInfos             RecipientInfos,
 *   encryptedContentInfo       EncryptedContentInfo
 * }
 *
 * EncryptedData ::= SEQUENCE {
 *   version                    Version,
 *   encryptedContentInfo       EncryptedContentInfo
 * }
 *
 * id-signedData OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 *   us(840) rsadsi(113549) pkcs(1) pkcs7(7) 2 }
 *
 * SignedData ::= SEQUENCE {
 *   version           INTEGER,
 *   digestAlgorithms  DigestAlgorithmIdentifiers,
 *   contentInfo       ContentInfo,
 *   certificates      [0] IMPLICIT Certificates OPTIONAL,
 *   crls              [1] IMPLICIT CertificateRevocationLists OPTIONAL,
 *   signerInfos       SignerInfos
 * }
 *
 * SignerInfos ::= SET OF SignerInfo
 *
 * SignerInfo ::= SEQUENCE {
 *   version                    Version,
 *   issuerAndSerialNumber      IssuerAndSerialNumber,
 *   digestAlgorithm            DigestAlgorithmIdentifier,
 *   authenticatedAttributes    [0] IMPLICIT Attributes OPTIONAL,
 *   digestEncryptionAlgorithm  DigestEncryptionAlgorithmIdentifier,
 *   encryptedDigest            EncryptedDigest,
 *   unauthenticatedAttributes  [1] IMPLICIT Attributes OPTIONAL
 * }
 *
 * EncryptedDigest ::= OCTET STRING
 *
 * Attributes ::= SET OF Attribute
 *
 * Attribute ::= SEQUENCE {
 *   attrType    OBJECT IDENTIFIER,
 *   attrValues  SET OF AttributeValue
 * }
 *
 * AttributeValue ::= ANY
 *
 * Version ::= INTEGER
 *
 * RecipientInfos ::= SET OF RecipientInfo
 *
 * EncryptedContentInfo ::= SEQUENCE {
 *   contentType                 ContentType,
 *   contentEncryptionAlgorithm  ContentEncryptionAlgorithmIdentifier,
 *   encryptedContent       [0]  IMPLICIT EncryptedContent OPTIONAL
 * }
 *
 * ContentEncryptionAlgorithmIdentifier ::= AlgorithmIdentifier
 *
 * The AlgorithmIdentifier contains an Object Identifier (OID) and parameters
 * for the algorithm, if any. In the case of AES and DES3, there is only one,
 * the IV.
 *
 * AlgorithmIdentifer ::= SEQUENCE {
 *    algorithm OBJECT IDENTIFIER,
 *    parameters ANY DEFINED BY algorithm OPTIONAL
 * }
 *
 * EncryptedContent ::= OCTET STRING
 *
 * RecipientInfo ::= SEQUENCE {
 *   version                     Version,
 *   issuerAndSerialNumber       IssuerAndSerialNumber,
 *   keyEncryptionAlgorithm      KeyEncryptionAlgorithmIdentifier,
 *   encryptedKey                EncryptedKey
 * }
 *
 * IssuerAndSerialNumber ::= SEQUENCE {
 *   issuer                      Name,
 *   serialNumber                CertificateSerialNumber
 * }
 *
 * CertificateSerialNumber ::= INTEGER
 *
 * KeyEncryptionAlgorithmIdentifier ::= AlgorithmIdentifier
 *
 * EncryptedKey ::= OCTET STRING
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./asn1 */ "./node_modules/node-forge/lib/asn1.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

// shortcut for ASN.1 API
var asn1 = forge.asn1;

// shortcut for PKCS#7 API
var p7v = module.exports = forge.pkcs7asn1 = forge.pkcs7asn1 || {};
forge.pkcs7 = forge.pkcs7 || {};
forge.pkcs7.asn1 = p7v;

var contentInfoValidator = {
  name: 'ContentInfo',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: 'ContentInfo.ContentType',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.OID,
    constructed: false,
    capture: 'contentType'
  }, {
    name: 'ContentInfo.content',
    tagClass: asn1.Class.CONTEXT_SPECIFIC,
    type: 0,
    constructed: true,
    optional: true,
    captureAsn1: 'content'
  }]
};
p7v.contentInfoValidator = contentInfoValidator;

var encryptedContentInfoValidator = {
  name: 'EncryptedContentInfo',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: 'EncryptedContentInfo.contentType',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.OID,
    constructed: false,
    capture: 'contentType'
  }, {
    name: 'EncryptedContentInfo.contentEncryptionAlgorithm',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: 'EncryptedContentInfo.contentEncryptionAlgorithm.algorithm',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.OID,
      constructed: false,
      capture: 'encAlgorithm'
    }, {
      name: 'EncryptedContentInfo.contentEncryptionAlgorithm.parameter',
      tagClass: asn1.Class.UNIVERSAL,
      captureAsn1: 'encParameter'
    }]
  }, {
    name: 'EncryptedContentInfo.encryptedContent',
    tagClass: asn1.Class.CONTEXT_SPECIFIC,
    type: 0,
    /* The PKCS#7 structure output by OpenSSL somewhat differs from what
     * other implementations do generate.
     *
     * OpenSSL generates a structure like this:
     * SEQUENCE {
     *    ...
     *    [0]
     *       26 DA 67 D2 17 9C 45 3C B1 2A A8 59 2F 29 33 38
     *       C3 C3 DF 86 71 74 7A 19 9F 40 D0 29 BE 85 90 45
     *       ...
     * }
     *
     * Whereas other implementations (and this PKCS#7 module) generate:
     * SEQUENCE {
     *    ...
     *    [0] {
     *       OCTET STRING
     *          26 DA 67 D2 17 9C 45 3C B1 2A A8 59 2F 29 33 38
     *          C3 C3 DF 86 71 74 7A 19 9F 40 D0 29 BE 85 90 45
     *          ...
     *    }
     * }
     *
     * In order to support both, we just capture the context specific
     * field here.  The OCTET STRING bit is removed below.
     */
    capture: 'encryptedContent',
    captureAsn1: 'encryptedContentAsn1'
  }]
};

p7v.envelopedDataValidator = {
  name: 'EnvelopedData',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: 'EnvelopedData.Version',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'version'
  }, {
    name: 'EnvelopedData.RecipientInfos',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SET,
    constructed: true,
    captureAsn1: 'recipientInfos'
  }].concat(encryptedContentInfoValidator)
};

p7v.encryptedDataValidator = {
  name: 'EncryptedData',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: 'EncryptedData.Version',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'version'
  }].concat(encryptedContentInfoValidator)
};

var signerValidator = {
  name: 'SignerInfo',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: 'SignerInfo.version',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false
  }, {
    name: 'SignerInfo.issuerAndSerialNumber',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: 'SignerInfo.issuerAndSerialNumber.issuer',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      captureAsn1: 'issuer'
    }, {
      name: 'SignerInfo.issuerAndSerialNumber.serialNumber',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.INTEGER,
      constructed: false,
      capture: 'serial'
    }]
  }, {
    name: 'SignerInfo.digestAlgorithm',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: 'SignerInfo.digestAlgorithm.algorithm',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.OID,
      constructed: false,
      capture: 'digestAlgorithm'
    }, {
      name: 'SignerInfo.digestAlgorithm.parameter',
      tagClass: asn1.Class.UNIVERSAL,
      constructed: false,
      captureAsn1: 'digestParameter',
      optional: true
    }]
  }, {
    name: 'SignerInfo.authenticatedAttributes',
    tagClass: asn1.Class.CONTEXT_SPECIFIC,
    type: 0,
    constructed: true,
    optional: true,
    capture: 'authenticatedAttributes'
  }, {
    name: 'SignerInfo.digestEncryptionAlgorithm',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SEQUENCE,
    constructed: true,
    capture: 'signatureAlgorithm'
  }, {
    name: 'SignerInfo.encryptedDigest',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.OCTETSTRING,
    constructed: false,
    capture: 'signature'
  }, {
    name: 'SignerInfo.unauthenticatedAttributes',
    tagClass: asn1.Class.CONTEXT_SPECIFIC,
    type: 1,
    constructed: true,
    optional: true,
    capture: 'unauthenticatedAttributes'
  }]
};

p7v.signedDataValidator = {
  name: 'SignedData',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: 'SignedData.Version',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'version'
  }, {
    name: 'SignedData.DigestAlgorithms',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SET,
    constructed: true,
    captureAsn1: 'digestAlgorithms'
  },
  contentInfoValidator,
  {
    name: 'SignedData.Certificates',
    tagClass: asn1.Class.CONTEXT_SPECIFIC,
    type: 0,
    optional: true,
    captureAsn1: 'certificates'
  }, {
    name: 'SignedData.CertificateRevocationLists',
    tagClass: asn1.Class.CONTEXT_SPECIFIC,
    type: 1,
    optional: true,
    captureAsn1: 'crls'
  }, {
    name: 'SignedData.SignerInfos',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SET,
    capture: 'signerInfos',
    optional: true,
    value: [signerValidator]
  }]
};

p7v.recipientInfoValidator = {
  name: 'RecipientInfo',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: 'RecipientInfo.version',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'version'
  }, {
    name: 'RecipientInfo.issuerAndSerial',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: 'RecipientInfo.issuerAndSerial.issuer',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      captureAsn1: 'issuer'
    }, {
      name: 'RecipientInfo.issuerAndSerial.serialNumber',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.INTEGER,
      constructed: false,
      capture: 'serial'
    }]
  }, {
    name: 'RecipientInfo.keyEncryptionAlgorithm',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: 'RecipientInfo.keyEncryptionAlgorithm.algorithm',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.OID,
      constructed: false,
      capture: 'encAlgorithm'
    }, {
      name: 'RecipientInfo.keyEncryptionAlgorithm.parameter',
      tagClass: asn1.Class.UNIVERSAL,
      constructed: false,
      captureAsn1: 'encParameter'
    }]
  }, {
    name: 'RecipientInfo.encryptedKey',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.OCTETSTRING,
    constructed: false,
    capture: 'encKey'
  }]
};


/***/ }),

/***/ "./node_modules/node-forge/lib/pki.js":
/*!********************************************!*\
  !*** ./node_modules/node-forge/lib/pki.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Javascript implementation of a basic Public Key Infrastructure, including
 * support for RSA public and private keys.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2013 Digital Bazaar, Inc.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./asn1 */ "./node_modules/node-forge/lib/asn1.js");
__webpack_require__(/*! ./oids */ "./node_modules/node-forge/lib/oids.js");
__webpack_require__(/*! ./pbe */ "./node_modules/node-forge/lib/pbe.js");
__webpack_require__(/*! ./pem */ "./node_modules/node-forge/lib/pem.js");
__webpack_require__(/*! ./pbkdf2 */ "./node_modules/node-forge/lib/pbkdf2.js");
__webpack_require__(/*! ./pkcs12 */ "./node_modules/node-forge/lib/pkcs12.js");
__webpack_require__(/*! ./pss */ "./node_modules/node-forge/lib/pss.js");
__webpack_require__(/*! ./rsa */ "./node_modules/node-forge/lib/rsa.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");
__webpack_require__(/*! ./x509 */ "./node_modules/node-forge/lib/x509.js");

// shortcut for asn.1 API
var asn1 = forge.asn1;

/* Public Key Infrastructure (PKI) implementation. */
var pki = module.exports = forge.pki = forge.pki || {};

/**
 * NOTE: THIS METHOD IS DEPRECATED. Use pem.decode() instead.
 *
 * Converts PEM-formatted data to DER.
 *
 * @param pem the PEM-formatted data.
 *
 * @return the DER-formatted data.
 */
pki.pemToDer = function(pem) {
  var msg = forge.pem.decode(pem)[0];
  if(msg.procType && msg.procType.type === 'ENCRYPTED') {
    throw new Error('Could not convert PEM to DER; PEM is encrypted.');
  }
  return forge.util.createBuffer(msg.body);
};

/**
 * Converts an RSA private key from PEM format.
 *
 * @param pem the PEM-formatted private key.
 *
 * @return the private key.
 */
pki.privateKeyFromPem = function(pem) {
  var msg = forge.pem.decode(pem)[0];

  if(msg.type !== 'PRIVATE KEY' && msg.type !== 'RSA PRIVATE KEY') {
    var error = new Error('Could not convert private key from PEM; PEM ' +
      'header type is not "PRIVATE KEY" or "RSA PRIVATE KEY".');
    error.headerType = msg.type;
    throw error;
  }
  if(msg.procType && msg.procType.type === 'ENCRYPTED') {
    throw new Error('Could not convert private key from PEM; PEM is encrypted.');
  }

  // convert DER to ASN.1 object
  var obj = asn1.fromDer(msg.body);

  return pki.privateKeyFromAsn1(obj);
};

/**
 * Converts an RSA private key to PEM format.
 *
 * @param key the private key.
 * @param maxline the maximum characters per line, defaults to 64.
 *
 * @return the PEM-formatted private key.
 */
pki.privateKeyToPem = function(key, maxline) {
  // convert to ASN.1, then DER, then PEM-encode
  var msg = {
    type: 'RSA PRIVATE KEY',
    body: asn1.toDer(pki.privateKeyToAsn1(key)).getBytes()
  };
  return forge.pem.encode(msg, {maxline: maxline});
};

/**
 * Converts a PrivateKeyInfo to PEM format.
 *
 * @param pki the PrivateKeyInfo.
 * @param maxline the maximum characters per line, defaults to 64.
 *
 * @return the PEM-formatted private key.
 */
pki.privateKeyInfoToPem = function(pki, maxline) {
  // convert to DER, then PEM-encode
  var msg = {
    type: 'PRIVATE KEY',
    body: asn1.toDer(pki).getBytes()
  };
  return forge.pem.encode(msg, {maxline: maxline});
};


/***/ }),

/***/ "./node_modules/node-forge/lib/prime.js":
/*!**********************************************!*\
  !*** ./node_modules/node-forge/lib/prime.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Prime number generation API.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2014 Digital Bazaar, Inc.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");
__webpack_require__(/*! ./jsbn */ "./node_modules/node-forge/lib/jsbn.js");
__webpack_require__(/*! ./random */ "./node_modules/node-forge/lib/random.js");

(function() {

// forge.prime already defined
if(forge.prime) {
  module.exports = forge.prime;
  return;
}

/* PRIME API */
var prime = module.exports = forge.prime = forge.prime || {};

var BigInteger = forge.jsbn.BigInteger;

// primes are 30k+i for i = 1, 7, 11, 13, 17, 19, 23, 29
var GCD_30_DELTA = [6, 4, 2, 4, 2, 4, 6, 2];
var THIRTY = new BigInteger(null);
THIRTY.fromInt(30);
var op_or = function(x, y) {return x|y;};

/**
 * Generates a random probable prime with the given number of bits.
 *
 * Alternative algorithms can be specified by name as a string or as an
 * object with custom options like so:
 *
 * {
 *   name: 'PRIMEINC',
 *   options: {
 *     maxBlockTime: <the maximum amount of time to block the main
 *       thread before allowing I/O other JS to run>,
 *     millerRabinTests: <the number of miller-rabin tests to run>,
 *     workerScript: <the worker script URL>,
 *     workers: <the number of web workers (if supported) to use,
 *       -1 to use estimated cores minus one>.
 *     workLoad: the size of the work load, ie: number of possible prime
 *       numbers for each web worker to check per work assignment,
 *       (default: 100).
 *   }
 * }
 *
 * @param bits the number of bits for the prime number.
 * @param options the options to use.
 *          [algorithm] the algorithm to use (default: 'PRIMEINC').
 *          [prng] a custom crypto-secure pseudo-random number generator to use,
 *            that must define "getBytesSync".
 *
 * @return callback(err, num) called once the operation completes.
 */
prime.generateProbablePrime = function(bits, options, callback) {
  if(typeof options === 'function') {
    callback = options;
    options = {};
  }
  options = options || {};

  // default to PRIMEINC algorithm
  var algorithm = options.algorithm || 'PRIMEINC';
  if(typeof algorithm === 'string') {
    algorithm = {name: algorithm};
  }
  algorithm.options = algorithm.options || {};

  // create prng with api that matches BigInteger secure random
  var prng = options.prng || forge.random;
  var rng = {
    // x is an array to fill with bytes
    nextBytes: function(x) {
      var b = prng.getBytesSync(x.length);
      for(var i = 0; i < x.length; ++i) {
        x[i] = b.charCodeAt(i);
      }
    }
  };

  if(algorithm.name === 'PRIMEINC') {
    return primeincFindPrime(bits, rng, algorithm.options, callback);
  }

  throw new Error('Invalid prime generation algorithm: ' + algorithm.name);
};

function primeincFindPrime(bits, rng, options, callback) {
  if('workers' in options) {
    return primeincFindPrimeWithWorkers(bits, rng, options, callback);
  }
  return primeincFindPrimeWithoutWorkers(bits, rng, options, callback);
}

function primeincFindPrimeWithoutWorkers(bits, rng, options, callback) {
  // initialize random number
  var num = generateRandom(bits, rng);

  /* Note: All primes are of the form 30k+i for i < 30 and gcd(30, i)=1. The
  number we are given is always aligned at 30k + 1. Each time the number is
  determined not to be prime we add to get to the next 'i', eg: if the number
  was at 30k + 1 we add 6. */
  var deltaIdx = 0;

  // get required number of MR tests
  var mrTests = getMillerRabinTests(num.bitLength());
  if('millerRabinTests' in options) {
    mrTests = options.millerRabinTests;
  }

  // find prime nearest to 'num' for maxBlockTime ms
  // 10 ms gives 5ms of leeway for other calculations before dropping
  // below 60fps (1000/60 == 16.67), but in reality, the number will
  // likely be higher due to an 'atomic' big int modPow
  var maxBlockTime = 10;
  if('maxBlockTime' in options) {
    maxBlockTime = options.maxBlockTime;
  }

  _primeinc(num, bits, rng, deltaIdx, mrTests, maxBlockTime, callback);
}

function _primeinc(num, bits, rng, deltaIdx, mrTests, maxBlockTime, callback) {
  var start = +new Date();
  do {
    // overflow, regenerate random number
    if(num.bitLength() > bits) {
      num = generateRandom(bits, rng);
    }
    // do primality test
    if(num.isProbablePrime(mrTests)) {
      return callback(null, num);
    }
    // get next potential prime
    num.dAddOffset(GCD_30_DELTA[deltaIdx++ % 8], 0);
  } while(maxBlockTime < 0 || (+new Date() - start < maxBlockTime));

  // keep trying later
  forge.util.setImmediate(function() {
    _primeinc(num, bits, rng, deltaIdx, mrTests, maxBlockTime, callback);
  });
}

// NOTE: This algorithm is indeterminate in nature because workers
// run in parallel looking at different segments of numbers. Even if this
// algorithm is run twice with the same input from a predictable RNG, it
// may produce different outputs.
function primeincFindPrimeWithWorkers(bits, rng, options, callback) {
  // web workers unavailable
  if(typeof Worker === 'undefined') {
    return primeincFindPrimeWithoutWorkers(bits, rng, options, callback);
  }

  // initialize random number
  var num = generateRandom(bits, rng);

  // use web workers to generate keys
  var numWorkers = options.workers;
  var workLoad = options.workLoad || 100;
  var range = workLoad * 30 / 8;
  var workerScript = options.workerScript || 'forge/prime.worker.js';
  if(numWorkers === -1) {
    return forge.util.estimateCores(function(err, cores) {
      if(err) {
        // default to 2
        cores = 2;
      }
      numWorkers = cores - 1;
      generate();
    });
  }
  generate();

  function generate() {
    // require at least 1 worker
    numWorkers = Math.max(1, numWorkers);

    // TODO: consider optimizing by starting workers outside getPrime() ...
    // note that in order to clean up they will have to be made internally
    // asynchronous which may actually be slower

    // start workers immediately
    var workers = [];
    for(var i = 0; i < numWorkers; ++i) {
      // FIXME: fix path or use blob URLs
      workers[i] = new Worker(workerScript);
    }
    var running = numWorkers;

    // listen for requests from workers and assign ranges to find prime
    for(var i = 0; i < numWorkers; ++i) {
      workers[i].addEventListener('message', workerMessage);
    }

    /* Note: The distribution of random numbers is unknown. Therefore, each
    web worker is continuously allocated a range of numbers to check for a
    random number until one is found.

    Every 30 numbers will be checked just 8 times, because prime numbers
    have the form:

    30k+i, for i < 30 and gcd(30, i)=1 (there are 8 values of i for this)

    Therefore, if we want a web worker to run N checks before asking for
    a new range of numbers, each range must contain N*30/8 numbers.

    For 100 checks (workLoad), this is a range of 375. */

    var found = false;
    function workerMessage(e) {
      // ignore message, prime already found
      if(found) {
        return;
      }

      --running;
      var data = e.data;
      if(data.found) {
        // terminate all workers
        for(var i = 0; i < workers.length; ++i) {
          workers[i].terminate();
        }
        found = true;
        return callback(null, new BigInteger(data.prime, 16));
      }

      // overflow, regenerate random number
      if(num.bitLength() > bits) {
        num = generateRandom(bits, rng);
      }

      // assign new range to check
      var hex = num.toString(16);

      // start prime search
      e.target.postMessage({
        hex: hex,
        workLoad: workLoad
      });

      num.dAddOffset(range, 0);
    }
  }
}

/**
 * Generates a random number using the given number of bits and RNG.
 *
 * @param bits the number of bits for the number.
 * @param rng the random number generator to use.
 *
 * @return the random number.
 */
function generateRandom(bits, rng) {
  var num = new BigInteger(bits, rng);
  // force MSB set
  var bits1 = bits - 1;
  if(!num.testBit(bits1)) {
    num.bitwiseTo(BigInteger.ONE.shiftLeft(bits1), op_or, num);
  }
  // align number on 30k+1 boundary
  num.dAddOffset(31 - num.mod(THIRTY).byteValue(), 0);
  return num;
}

/**
 * Returns the required number of Miller-Rabin tests to generate a
 * prime with an error probability of (1/2)^80.
 *
 * See Handbook of Applied Cryptography Chapter 4, Table 4.4.
 *
 * @param bits the bit size.
 *
 * @return the required number of iterations.
 */
function getMillerRabinTests(bits) {
  if(bits <= 100) return 27;
  if(bits <= 150) return 18;
  if(bits <= 200) return 15;
  if(bits <= 250) return 12;
  if(bits <= 300) return 9;
  if(bits <= 350) return 8;
  if(bits <= 400) return 7;
  if(bits <= 500) return 6;
  if(bits <= 600) return 5;
  if(bits <= 800) return 4;
  if(bits <= 1250) return 3;
  return 2;
}

})();


/***/ }),

/***/ "./node_modules/node-forge/lib/prng.js":
/*!*********************************************!*\
  !*** ./node_modules/node-forge/lib/prng.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * A javascript implementation of a cryptographically-secure
 * Pseudo Random Number Generator (PRNG). The Fortuna algorithm is followed
 * here though the use of SHA-256 is not enforced; when generating an
 * a PRNG context, the hashing algorithm and block cipher used for
 * the generator are specified via a plugin.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2014 Digital Bazaar, Inc.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

var _crypto = null;
if(forge.util.isNodejs && !forge.options.usePureJavaScript &&
  !process.versions['node-webkit']) {
  _crypto = __webpack_require__(/*! crypto */ 0);
}

/* PRNG API */
var prng = module.exports = forge.prng = forge.prng || {};

/**
 * Creates a new PRNG context.
 *
 * A PRNG plugin must be passed in that will provide:
 *
 * 1. A function that initializes the key and seed of a PRNG context. It
 *   will be given a 16 byte key and a 16 byte seed. Any key expansion
 *   or transformation of the seed from a byte string into an array of
 *   integers (or similar) should be performed.
 * 2. The cryptographic function used by the generator. It takes a key and
 *   a seed.
 * 3. A seed increment function. It takes the seed and returns seed + 1.
 * 4. An api to create a message digest.
 *
 * For an example, see random.js.
 *
 * @param plugin the PRNG plugin to use.
 */
prng.create = function(plugin) {
  var ctx = {
    plugin: plugin,
    key: null,
    seed: null,
    time: null,
    // number of reseeds so far
    reseeds: 0,
    // amount of data generated so far
    generated: 0,
    // no initial key bytes
    keyBytes: ''
  };

  // create 32 entropy pools (each is a message digest)
  var md = plugin.md;
  var pools = new Array(32);
  for(var i = 0; i < 32; ++i) {
    pools[i] = md.create();
  }
  ctx.pools = pools;

  // entropy pools are written to cyclically, starting at index 0
  ctx.pool = 0;

  /**
   * Generates random bytes. The bytes may be generated synchronously or
   * asynchronously. Web workers must use the asynchronous interface or
   * else the behavior is undefined.
   *
   * @param count the number of random bytes to generate.
   * @param [callback(err, bytes)] called once the operation completes.
   *
   * @return count random bytes as a string.
   */
  ctx.generate = function(count, callback) {
    // do synchronously
    if(!callback) {
      return ctx.generateSync(count);
    }

    // simple generator using counter-based CBC
    var cipher = ctx.plugin.cipher;
    var increment = ctx.plugin.increment;
    var formatKey = ctx.plugin.formatKey;
    var formatSeed = ctx.plugin.formatSeed;
    var b = forge.util.createBuffer();

    // paranoid deviation from Fortuna:
    // reset key for every request to protect previously
    // generated random bytes should the key be discovered;
    // there is no 100ms based reseeding because of this
    // forced reseed for every `generate` call
    ctx.key = null;

    generate();

    function generate(err) {
      if(err) {
        return callback(err);
      }

      // sufficient bytes generated
      if(b.length() >= count) {
        return callback(null, b.getBytes(count));
      }

      // if amount of data generated is greater than 1 MiB, trigger reseed
      if(ctx.generated > 0xfffff) {
        ctx.key = null;
      }

      if(ctx.key === null) {
        // prevent stack overflow
        return forge.util.nextTick(function() {
          _reseed(generate);
        });
      }

      // generate the random bytes
      var bytes = cipher(ctx.key, ctx.seed);
      ctx.generated += bytes.length;
      b.putBytes(bytes);

      // generate bytes for a new key and seed
      ctx.key = formatKey(cipher(ctx.key, increment(ctx.seed)));
      ctx.seed = formatSeed(cipher(ctx.key, ctx.seed));

      forge.util.setImmediate(generate);
    }
  };

  /**
   * Generates random bytes synchronously.
   *
   * @param count the number of random bytes to generate.
   *
   * @return count random bytes as a string.
   */
  ctx.generateSync = function(count) {
    // simple generator using counter-based CBC
    var cipher = ctx.plugin.cipher;
    var increment = ctx.plugin.increment;
    var formatKey = ctx.plugin.formatKey;
    var formatSeed = ctx.plugin.formatSeed;

    // paranoid deviation from Fortuna:
    // reset key for every request to protect previously
    // generated random bytes should the key be discovered;
    // there is no 100ms based reseeding because of this
    // forced reseed for every `generateSync` call
    ctx.key = null;

    var b = forge.util.createBuffer();
    while(b.length() < count) {
      // if amount of data generated is greater than 1 MiB, trigger reseed
      if(ctx.generated > 0xfffff) {
        ctx.key = null;
      }

      if(ctx.key === null) {
        _reseedSync();
      }

      // generate the random bytes
      var bytes = cipher(ctx.key, ctx.seed);
      ctx.generated += bytes.length;
      b.putBytes(bytes);

      // generate bytes for a new key and seed
      ctx.key = formatKey(cipher(ctx.key, increment(ctx.seed)));
      ctx.seed = formatSeed(cipher(ctx.key, ctx.seed));
    }

    return b.getBytes(count);
  };

  /**
   * Private function that asynchronously reseeds a generator.
   *
   * @param callback(err) called once the operation completes.
   */
  function _reseed(callback) {
    if(ctx.pools[0].messageLength >= 32) {
      _seed();
      return callback();
    }
    // not enough seed data...
    var needed = (32 - ctx.pools[0].messageLength) << 5;
    ctx.seedFile(needed, function(err, bytes) {
      if(err) {
        return callback(err);
      }
      ctx.collect(bytes);
      _seed();
      callback();
    });
  }

  /**
   * Private function that synchronously reseeds a generator.
   */
  function _reseedSync() {
    if(ctx.pools[0].messageLength >= 32) {
      return _seed();
    }
    // not enough seed data...
    var needed = (32 - ctx.pools[0].messageLength) << 5;
    ctx.collect(ctx.seedFileSync(needed));
    _seed();
  }

  /**
   * Private function that seeds a generator once enough bytes are available.
   */
  function _seed() {
    // update reseed count
    ctx.reseeds = (ctx.reseeds === 0xffffffff) ? 0 : ctx.reseeds + 1;

    // goal is to update `key` via:
    // key = hash(key + s)
    //   where 's' is all collected entropy from selected pools, then...

    // create a plugin-based message digest
    var md = ctx.plugin.md.create();

    // consume current key bytes
    md.update(ctx.keyBytes);

    // digest the entropy of pools whose index k meet the
    // condition 'n mod 2^k == 0' where n is the number of reseeds
    var _2powK = 1;
    for(var k = 0; k < 32; ++k) {
      if(ctx.reseeds % _2powK === 0) {
        md.update(ctx.pools[k].digest().getBytes());
        ctx.pools[k].start();
      }
      _2powK = _2powK << 1;
    }

    // get digest for key bytes
    ctx.keyBytes = md.digest().getBytes();

    // paranoid deviation from Fortuna:
    // update `seed` via `seed = hash(key)`
    // instead of initializing to zero once and only
    // ever incrementing it
    md.start();
    md.update(ctx.keyBytes);
    var seedBytes = md.digest().getBytes();

    // update state
    ctx.key = ctx.plugin.formatKey(ctx.keyBytes);
    ctx.seed = ctx.plugin.formatSeed(seedBytes);
    ctx.generated = 0;
  }

  /**
   * The built-in default seedFile. This seedFile is used when entropy
   * is needed immediately.
   *
   * @param needed the number of bytes that are needed.
   *
   * @return the random bytes.
   */
  function defaultSeedFile(needed) {
    // use window.crypto.getRandomValues strong source of entropy if available
    var getRandomValues = null;
    var globalScope = forge.util.globalScope;
    var _crypto = globalScope.crypto || globalScope.msCrypto;
    if(_crypto && _crypto.getRandomValues) {
      getRandomValues = function(arr) {
        return _crypto.getRandomValues(arr);
      };
    }

    var b = forge.util.createBuffer();
    if(getRandomValues) {
      while(b.length() < needed) {
        // max byte length is 65536 before QuotaExceededError is thrown
        // http://www.w3.org/TR/WebCryptoAPI/#RandomSource-method-getRandomValues
        var count = Math.max(1, Math.min(needed - b.length(), 65536) / 4);
        var entropy = new Uint32Array(Math.floor(count));
        try {
          getRandomValues(entropy);
          for(var i = 0; i < entropy.length; ++i) {
            b.putInt32(entropy[i]);
          }
        } catch(e) {
          /* only ignore QuotaExceededError */
          if(!(typeof QuotaExceededError !== 'undefined' &&
            e instanceof QuotaExceededError)) {
            throw e;
          }
        }
      }
    }

    // be sad and add some weak random data
    if(b.length() < needed) {
      /* Draws from Park-Miller "minimal standard" 31 bit PRNG,
      implemented with David G. Carta's optimization: with 32 bit math
      and without division (Public Domain). */
      var hi, lo, next;
      var seed = Math.floor(Math.random() * 0x010000);
      while(b.length() < needed) {
        lo = 16807 * (seed & 0xFFFF);
        hi = 16807 * (seed >> 16);
        lo += (hi & 0x7FFF) << 16;
        lo += hi >> 15;
        lo = (lo & 0x7FFFFFFF) + (lo >> 31);
        seed = lo & 0xFFFFFFFF;

        // consume lower 3 bytes of seed
        for(var i = 0; i < 3; ++i) {
          // throw in more pseudo random
          next = seed >>> (i << 3);
          next ^= Math.floor(Math.random() * 0x0100);
          b.putByte(String.fromCharCode(next & 0xFF));
        }
      }
    }

    return b.getBytes(needed);
  }
  // initialize seed file APIs
  if(_crypto) {
    // use nodejs async API
    ctx.seedFile = function(needed, callback) {
      _crypto.randomBytes(needed, function(err, bytes) {
        if(err) {
          return callback(err);
        }
        callback(null, bytes.toString());
      });
    };
    // use nodejs sync API
    ctx.seedFileSync = function(needed) {
      return _crypto.randomBytes(needed).toString();
    };
  } else {
    ctx.seedFile = function(needed, callback) {
      try {
        callback(null, defaultSeedFile(needed));
      } catch(e) {
        callback(e);
      }
    };
    ctx.seedFileSync = defaultSeedFile;
  }

  /**
   * Adds entropy to a prng ctx's accumulator.
   *
   * @param bytes the bytes of entropy as a string.
   */
  ctx.collect = function(bytes) {
    // iterate over pools distributing entropy cyclically
    var count = bytes.length;
    for(var i = 0; i < count; ++i) {
      ctx.pools[ctx.pool].update(bytes.substr(i, 1));
      ctx.pool = (ctx.pool === 31) ? 0 : ctx.pool + 1;
    }
  };

  /**
   * Collects an integer of n bits.
   *
   * @param i the integer entropy.
   * @param n the number of bits in the integer.
   */
  ctx.collectInt = function(i, n) {
    var bytes = '';
    for(var x = 0; x < n; x += 8) {
      bytes += String.fromCharCode((i >> x) & 0xFF);
    }
    ctx.collect(bytes);
  };

  /**
   * Registers a Web Worker to receive immediate entropy from the main thread.
   * This method is required until Web Workers can access the native crypto
   * API. This method should be called twice for each created worker, once in
   * the main thread, and once in the worker itself.
   *
   * @param worker the worker to register.
   */
  ctx.registerWorker = function(worker) {
    // worker receives random bytes
    if(worker === self) {
      ctx.seedFile = function(needed, callback) {
        function listener(e) {
          var data = e.data;
          if(data.forge && data.forge.prng) {
            self.removeEventListener('message', listener);
            callback(data.forge.prng.err, data.forge.prng.bytes);
          }
        }
        self.addEventListener('message', listener);
        self.postMessage({forge: {prng: {needed: needed}}});
      };
    } else {
      // main thread sends random bytes upon request
      var listener = function(e) {
        var data = e.data;
        if(data.forge && data.forge.prng) {
          ctx.seedFile(data.forge.prng.needed, function(err, bytes) {
            worker.postMessage({forge: {prng: {err: err, bytes: bytes}}});
          });
        }
      };
      // TODO: do we need to remove the event listener when the worker dies?
      worker.addEventListener('message', listener);
    }
  };

  return ctx;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/node-forge/lib/pss.js":
/*!********************************************!*\
  !*** ./node_modules/node-forge/lib/pss.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Javascript implementation of PKCS#1 PSS signature padding.
 *
 * @author Stefan Siegl
 *
 * Copyright (c) 2012 Stefan Siegl <stesie@brokenpipe.de>
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./random */ "./node_modules/node-forge/lib/random.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

// shortcut for PSS API
var pss = module.exports = forge.pss = forge.pss || {};

/**
 * Creates a PSS signature scheme object.
 *
 * There are several ways to provide a salt for encoding:
 *
 * 1. Specify the saltLength only and the built-in PRNG will generate it.
 * 2. Specify the saltLength and a custom PRNG with 'getBytesSync' defined that
 *   will be used.
 * 3. Specify the salt itself as a forge.util.ByteBuffer.
 *
 * @param options the options to use:
 *          md the message digest object to use, a forge md instance.
 *          mgf the mask generation function to use, a forge mgf instance.
 *          [saltLength] the length of the salt in octets.
 *          [prng] the pseudo-random number generator to use to produce a salt.
 *          [salt] the salt to use when encoding.
 *
 * @return a signature scheme object.
 */
pss.create = function(options) {
  // backwards compatibility w/legacy args: hash, mgf, sLen
  if(arguments.length === 3) {
    options = {
      md: arguments[0],
      mgf: arguments[1],
      saltLength: arguments[2]
    };
  }

  var hash = options.md;
  var mgf = options.mgf;
  var hLen = hash.digestLength;

  var salt_ = options.salt || null;
  if(typeof salt_ === 'string') {
    // assume binary-encoded string
    salt_ = forge.util.createBuffer(salt_);
  }

  var sLen;
  if('saltLength' in options) {
    sLen = options.saltLength;
  } else if(salt_ !== null) {
    sLen = salt_.length();
  } else {
    throw new Error('Salt length not specified or specific salt not given.');
  }

  if(salt_ !== null && salt_.length() !== sLen) {
    throw new Error('Given salt length does not match length of given salt.');
  }

  var prng = options.prng || forge.random;

  var pssobj = {};

  /**
   * Encodes a PSS signature.
   *
   * This function implements EMSA-PSS-ENCODE as per RFC 3447, section 9.1.1.
   *
   * @param md the message digest object with the hash to sign.
   * @param modsBits the length of the RSA modulus in bits.
   *
   * @return the encoded message as a binary-encoded string of length
   *           ceil((modBits - 1) / 8).
   */
  pssobj.encode = function(md, modBits) {
    var i;
    var emBits = modBits - 1;
    var emLen = Math.ceil(emBits / 8);

    /* 2. Let mHash = Hash(M), an octet string of length hLen. */
    var mHash = md.digest().getBytes();

    /* 3. If emLen < hLen + sLen + 2, output "encoding error" and stop. */
    if(emLen < hLen + sLen + 2) {
      throw new Error('Message is too long to encrypt.');
    }

    /* 4. Generate a random octet string salt of length sLen; if sLen = 0,
     *    then salt is the empty string. */
    var salt;
    if(salt_ === null) {
      salt = prng.getBytesSync(sLen);
    } else {
      salt = salt_.bytes();
    }

    /* 5. Let M' = (0x)00 00 00 00 00 00 00 00 || mHash || salt; */
    var m_ = new forge.util.ByteBuffer();
    m_.fillWithByte(0, 8);
    m_.putBytes(mHash);
    m_.putBytes(salt);

    /* 6. Let H = Hash(M'), an octet string of length hLen. */
    hash.start();
    hash.update(m_.getBytes());
    var h = hash.digest().getBytes();

    /* 7. Generate an octet string PS consisting of emLen - sLen - hLen - 2
     *    zero octets.  The length of PS may be 0. */
    var ps = new forge.util.ByteBuffer();
    ps.fillWithByte(0, emLen - sLen - hLen - 2);

    /* 8. Let DB = PS || 0x01 || salt; DB is an octet string of length
     *    emLen - hLen - 1. */
    ps.putByte(0x01);
    ps.putBytes(salt);
    var db = ps.getBytes();

    /* 9. Let dbMask = MGF(H, emLen - hLen - 1). */
    var maskLen = emLen - hLen - 1;
    var dbMask = mgf.generate(h, maskLen);

    /* 10. Let maskedDB = DB \xor dbMask. */
    var maskedDB = '';
    for(i = 0; i < maskLen; i++) {
      maskedDB += String.fromCharCode(db.charCodeAt(i) ^ dbMask.charCodeAt(i));
    }

    /* 11. Set the leftmost 8emLen - emBits bits of the leftmost octet in
     *     maskedDB to zero. */
    var mask = (0xFF00 >> (8 * emLen - emBits)) & 0xFF;
    maskedDB = String.fromCharCode(maskedDB.charCodeAt(0) & ~mask) +
      maskedDB.substr(1);

    /* 12. Let EM = maskedDB || H || 0xbc.
     * 13. Output EM. */
    return maskedDB + h + String.fromCharCode(0xbc);
  };

  /**
   * Verifies a PSS signature.
   *
   * This function implements EMSA-PSS-VERIFY as per RFC 3447, section 9.1.2.
   *
   * @param mHash the message digest hash, as a binary-encoded string, to
   *         compare against the signature.
   * @param em the encoded message, as a binary-encoded string
   *          (RSA decryption result).
   * @param modsBits the length of the RSA modulus in bits.
   *
   * @return true if the signature was verified, false if not.
   */
  pssobj.verify = function(mHash, em, modBits) {
    var i;
    var emBits = modBits - 1;
    var emLen = Math.ceil(emBits / 8);

    /* c. Convert the message representative m to an encoded message EM
     *    of length emLen = ceil((modBits - 1) / 8) octets, where modBits
     *    is the length in bits of the RSA modulus n */
    em = em.substr(-emLen);

    /* 3. If emLen < hLen + sLen + 2, output "inconsistent" and stop. */
    if(emLen < hLen + sLen + 2) {
      throw new Error('Inconsistent parameters to PSS signature verification.');
    }

    /* 4. If the rightmost octet of EM does not have hexadecimal value
     *    0xbc, output "inconsistent" and stop. */
    if(em.charCodeAt(emLen - 1) !== 0xbc) {
      throw new Error('Encoded message does not end in 0xBC.');
    }

    /* 5. Let maskedDB be the leftmost emLen - hLen - 1 octets of EM, and
     *    let H be the next hLen octets. */
    var maskLen = emLen - hLen - 1;
    var maskedDB = em.substr(0, maskLen);
    var h = em.substr(maskLen, hLen);

    /* 6. If the leftmost 8emLen - emBits bits of the leftmost octet in
     *    maskedDB are not all equal to zero, output "inconsistent" and stop. */
    var mask = (0xFF00 >> (8 * emLen - emBits)) & 0xFF;
    if((maskedDB.charCodeAt(0) & mask) !== 0) {
      throw new Error('Bits beyond keysize not zero as expected.');
    }

    /* 7. Let dbMask = MGF(H, emLen - hLen - 1). */
    var dbMask = mgf.generate(h, maskLen);

    /* 8. Let DB = maskedDB \xor dbMask. */
    var db = '';
    for(i = 0; i < maskLen; i++) {
      db += String.fromCharCode(maskedDB.charCodeAt(i) ^ dbMask.charCodeAt(i));
    }

    /* 9. Set the leftmost 8emLen - emBits bits of the leftmost octet
     * in DB to zero. */
    db = String.fromCharCode(db.charCodeAt(0) & ~mask) + db.substr(1);

    /* 10. If the emLen - hLen - sLen - 2 leftmost octets of DB are not zero
     * or if the octet at position emLen - hLen - sLen - 1 (the leftmost
     * position is "position 1") does not have hexadecimal value 0x01,
     * output "inconsistent" and stop. */
    var checkLen = emLen - hLen - sLen - 2;
    for(i = 0; i < checkLen; i++) {
      if(db.charCodeAt(i) !== 0x00) {
        throw new Error('Leftmost octets not zero as expected');
      }
    }

    if(db.charCodeAt(checkLen) !== 0x01) {
      throw new Error('Inconsistent PSS signature, 0x01 marker not found');
    }

    /* 11. Let salt be the last sLen octets of DB. */
    var salt = db.substr(-sLen);

    /* 12.  Let M' = (0x)00 00 00 00 00 00 00 00 || mHash || salt */
    var m_ = new forge.util.ByteBuffer();
    m_.fillWithByte(0, 8);
    m_.putBytes(mHash);
    m_.putBytes(salt);

    /* 13. Let H' = Hash(M'), an octet string of length hLen. */
    hash.start();
    hash.update(m_.getBytes());
    var h_ = hash.digest().getBytes();

    /* 14. If H = H', output "consistent." Otherwise, output "inconsistent." */
    return h === h_;
  };

  return pssobj;
};


/***/ }),

/***/ "./node_modules/node-forge/lib/random.js":
/*!***********************************************!*\
  !*** ./node_modules/node-forge/lib/random.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * An API for getting cryptographically-secure random bytes. The bytes are
 * generated using the Fortuna algorithm devised by Bruce Schneier and
 * Niels Ferguson.
 *
 * Getting strong random bytes is not yet easy to do in javascript. The only
 * truish random entropy that can be collected is from the mouse, keyboard, or
 * from timing with respect to page loads, etc. This generator makes a poor
 * attempt at providing random bytes when those sources haven't yet provided
 * enough entropy to initially seed or to reseed the PRNG.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2009-2014 Digital Bazaar, Inc.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./aes */ "./node_modules/node-forge/lib/aes.js");
__webpack_require__(/*! ./sha256 */ "./node_modules/node-forge/lib/sha256.js");
__webpack_require__(/*! ./prng */ "./node_modules/node-forge/lib/prng.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

(function() {

// forge.random already defined
if(forge.random && forge.random.getBytes) {
  module.exports = forge.random;
  return;
}

(function(jQuery) {

// the default prng plugin, uses AES-128
var prng_aes = {};
var _prng_aes_output = new Array(4);
var _prng_aes_buffer = forge.util.createBuffer();
prng_aes.formatKey = function(key) {
  // convert the key into 32-bit integers
  var tmp = forge.util.createBuffer(key);
  key = new Array(4);
  key[0] = tmp.getInt32();
  key[1] = tmp.getInt32();
  key[2] = tmp.getInt32();
  key[3] = tmp.getInt32();

  // return the expanded key
  return forge.aes._expandKey(key, false);
};
prng_aes.formatSeed = function(seed) {
  // convert seed into 32-bit integers
  var tmp = forge.util.createBuffer(seed);
  seed = new Array(4);
  seed[0] = tmp.getInt32();
  seed[1] = tmp.getInt32();
  seed[2] = tmp.getInt32();
  seed[3] = tmp.getInt32();
  return seed;
};
prng_aes.cipher = function(key, seed) {
  forge.aes._updateBlock(key, seed, _prng_aes_output, false);
  _prng_aes_buffer.putInt32(_prng_aes_output[0]);
  _prng_aes_buffer.putInt32(_prng_aes_output[1]);
  _prng_aes_buffer.putInt32(_prng_aes_output[2]);
  _prng_aes_buffer.putInt32(_prng_aes_output[3]);
  return _prng_aes_buffer.getBytes();
};
prng_aes.increment = function(seed) {
  // FIXME: do we care about carry or signed issues?
  ++seed[3];
  return seed;
};
prng_aes.md = forge.md.sha256;

/**
 * Creates a new PRNG.
 */
function spawnPrng() {
  var ctx = forge.prng.create(prng_aes);

  /**
   * Gets random bytes. If a native secure crypto API is unavailable, this
   * method tries to make the bytes more unpredictable by drawing from data that
   * can be collected from the user of the browser, eg: mouse movement.
   *
   * If a callback is given, this method will be called asynchronously.
   *
   * @param count the number of random bytes to get.
   * @param [callback(err, bytes)] called once the operation completes.
   *
   * @return the random bytes in a string.
   */
  ctx.getBytes = function(count, callback) {
    return ctx.generate(count, callback);
  };

  /**
   * Gets random bytes asynchronously. If a native secure crypto API is
   * unavailable, this method tries to make the bytes more unpredictable by
   * drawing from data that can be collected from the user of the browser,
   * eg: mouse movement.
   *
   * @param count the number of random bytes to get.
   *
   * @return the random bytes in a string.
   */
  ctx.getBytesSync = function(count) {
    return ctx.generate(count);
  };

  return ctx;
}

// create default prng context
var _ctx = spawnPrng();

// add other sources of entropy only if window.crypto.getRandomValues is not
// available -- otherwise this source will be automatically used by the prng
var getRandomValues = null;
var globalScope = forge.util.globalScope;
var _crypto = globalScope.crypto || globalScope.msCrypto;
if(_crypto && _crypto.getRandomValues) {
  getRandomValues = function(arr) {
    return _crypto.getRandomValues(arr);
  };
}

if(forge.options.usePureJavaScript ||
  (!forge.util.isNodejs && !getRandomValues)) {
  // if this is a web worker, do not use weak entropy, instead register to
  // receive strong entropy asynchronously from the main thread
  if(typeof window === 'undefined' || window.document === undefined) {
    // FIXME:
  }

  // get load time entropy
  _ctx.collectInt(+new Date(), 32);

  // add some entropy from navigator object
  if(typeof(navigator) !== 'undefined') {
    var _navBytes = '';
    for(var key in navigator) {
      try {
        if(typeof(navigator[key]) == 'string') {
          _navBytes += navigator[key];
        }
      } catch(e) {
        /* Some navigator keys might not be accessible, e.g. the geolocation
          attribute throws an exception if touched in Mozilla chrome://
          context.

          Silently ignore this and just don't use this as a source of
          entropy. */
      }
    }
    _ctx.collect(_navBytes);
    _navBytes = null;
  }

  // add mouse and keyboard collectors if jquery is available
  if(jQuery) {
    // set up mouse entropy capture
    jQuery().mousemove(function(e) {
      // add mouse coords
      _ctx.collectInt(e.clientX, 16);
      _ctx.collectInt(e.clientY, 16);
    });

    // set up keyboard entropy capture
    jQuery().keypress(function(e) {
      _ctx.collectInt(e.charCode, 8);
    });
  }
}

/* Random API */
if(!forge.random) {
  forge.random = _ctx;
} else {
  // extend forge.random with _ctx
  for(var key in _ctx) {
    forge.random[key] = _ctx[key];
  }
}

// expose spawn PRNG
forge.random.createInstance = spawnPrng;

module.exports = forge.random;

})(typeof(jQuery) !== 'undefined' ? jQuery : null);

})();


/***/ }),

/***/ "./node_modules/node-forge/lib/rc2.js":
/*!********************************************!*\
  !*** ./node_modules/node-forge/lib/rc2.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * RC2 implementation.
 *
 * @author Stefan Siegl
 *
 * Copyright (c) 2012 Stefan Siegl <stesie@brokenpipe.de>
 *
 * Information on the RC2 cipher is available from RFC #2268,
 * http://www.ietf.org/rfc/rfc2268.txt
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

var piTable = [
  0xd9, 0x78, 0xf9, 0xc4, 0x19, 0xdd, 0xb5, 0xed, 0x28, 0xe9, 0xfd, 0x79, 0x4a, 0xa0, 0xd8, 0x9d,
  0xc6, 0x7e, 0x37, 0x83, 0x2b, 0x76, 0x53, 0x8e, 0x62, 0x4c, 0x64, 0x88, 0x44, 0x8b, 0xfb, 0xa2,
  0x17, 0x9a, 0x59, 0xf5, 0x87, 0xb3, 0x4f, 0x13, 0x61, 0x45, 0x6d, 0x8d, 0x09, 0x81, 0x7d, 0x32,
  0xbd, 0x8f, 0x40, 0xeb, 0x86, 0xb7, 0x7b, 0x0b, 0xf0, 0x95, 0x21, 0x22, 0x5c, 0x6b, 0x4e, 0x82,
  0x54, 0xd6, 0x65, 0x93, 0xce, 0x60, 0xb2, 0x1c, 0x73, 0x56, 0xc0, 0x14, 0xa7, 0x8c, 0xf1, 0xdc,
  0x12, 0x75, 0xca, 0x1f, 0x3b, 0xbe, 0xe4, 0xd1, 0x42, 0x3d, 0xd4, 0x30, 0xa3, 0x3c, 0xb6, 0x26,
  0x6f, 0xbf, 0x0e, 0xda, 0x46, 0x69, 0x07, 0x57, 0x27, 0xf2, 0x1d, 0x9b, 0xbc, 0x94, 0x43, 0x03,
  0xf8, 0x11, 0xc7, 0xf6, 0x90, 0xef, 0x3e, 0xe7, 0x06, 0xc3, 0xd5, 0x2f, 0xc8, 0x66, 0x1e, 0xd7,
  0x08, 0xe8, 0xea, 0xde, 0x80, 0x52, 0xee, 0xf7, 0x84, 0xaa, 0x72, 0xac, 0x35, 0x4d, 0x6a, 0x2a,
  0x96, 0x1a, 0xd2, 0x71, 0x5a, 0x15, 0x49, 0x74, 0x4b, 0x9f, 0xd0, 0x5e, 0x04, 0x18, 0xa4, 0xec,
  0xc2, 0xe0, 0x41, 0x6e, 0x0f, 0x51, 0xcb, 0xcc, 0x24, 0x91, 0xaf, 0x50, 0xa1, 0xf4, 0x70, 0x39,
  0x99, 0x7c, 0x3a, 0x85, 0x23, 0xb8, 0xb4, 0x7a, 0xfc, 0x02, 0x36, 0x5b, 0x25, 0x55, 0x97, 0x31,
  0x2d, 0x5d, 0xfa, 0x98, 0xe3, 0x8a, 0x92, 0xae, 0x05, 0xdf, 0x29, 0x10, 0x67, 0x6c, 0xba, 0xc9,
  0xd3, 0x00, 0xe6, 0xcf, 0xe1, 0x9e, 0xa8, 0x2c, 0x63, 0x16, 0x01, 0x3f, 0x58, 0xe2, 0x89, 0xa9,
  0x0d, 0x38, 0x34, 0x1b, 0xab, 0x33, 0xff, 0xb0, 0xbb, 0x48, 0x0c, 0x5f, 0xb9, 0xb1, 0xcd, 0x2e,
  0xc5, 0xf3, 0xdb, 0x47, 0xe5, 0xa5, 0x9c, 0x77, 0x0a, 0xa6, 0x20, 0x68, 0xfe, 0x7f, 0xc1, 0xad
];

var s = [1, 2, 3, 5];

/**
 * Rotate a word left by given number of bits.
 *
 * Bits that are shifted out on the left are put back in on the right
 * hand side.
 *
 * @param word The word to shift left.
 * @param bits The number of bits to shift by.
 * @return The rotated word.
 */
var rol = function(word, bits) {
  return ((word << bits) & 0xffff) | ((word & 0xffff) >> (16 - bits));
};

/**
 * Rotate a word right by given number of bits.
 *
 * Bits that are shifted out on the right are put back in on the left
 * hand side.
 *
 * @param word The word to shift right.
 * @param bits The number of bits to shift by.
 * @return The rotated word.
 */
var ror = function(word, bits) {
  return ((word & 0xffff) >> bits) | ((word << (16 - bits)) & 0xffff);
};

/* RC2 API */
module.exports = forge.rc2 = forge.rc2 || {};

/**
 * Perform RC2 key expansion as per RFC #2268, section 2.
 *
 * @param key variable-length user key (between 1 and 128 bytes)
 * @param effKeyBits number of effective key bits (default: 128)
 * @return the expanded RC2 key (ByteBuffer of 128 bytes)
 */
forge.rc2.expandKey = function(key, effKeyBits) {
  if(typeof key === 'string') {
    key = forge.util.createBuffer(key);
  }
  effKeyBits = effKeyBits || 128;

  /* introduce variables that match the names used in RFC #2268 */
  var L = key;
  var T = key.length();
  var T1 = effKeyBits;
  var T8 = Math.ceil(T1 / 8);
  var TM = 0xff >> (T1 & 0x07);
  var i;

  for(i = T; i < 128; i++) {
    L.putByte(piTable[(L.at(i - 1) + L.at(i - T)) & 0xff]);
  }

  L.setAt(128 - T8, piTable[L.at(128 - T8) & TM]);

  for(i = 127 - T8; i >= 0; i--) {
    L.setAt(i, piTable[L.at(i + 1) ^ L.at(i + T8)]);
  }

  return L;
};

/**
 * Creates a RC2 cipher object.
 *
 * @param key the symmetric key to use (as base for key generation).
 * @param bits the number of effective key bits.
 * @param encrypt false for decryption, true for encryption.
 *
 * @return the cipher.
 */
var createCipher = function(key, bits, encrypt) {
  var _finish = false, _input = null, _output = null, _iv = null;
  var mixRound, mashRound;
  var i, j, K = [];

  /* Expand key and fill into K[] Array */
  key = forge.rc2.expandKey(key, bits);
  for(i = 0; i < 64; i++) {
    K.push(key.getInt16Le());
  }

  if(encrypt) {
    /**
     * Perform one mixing round "in place".
     *
     * @param R Array of four words to perform mixing on.
     */
    mixRound = function(R) {
      for(i = 0; i < 4; i++) {
        R[i] += K[j] + (R[(i + 3) % 4] & R[(i + 2) % 4]) +
          ((~R[(i + 3) % 4]) & R[(i + 1) % 4]);
        R[i] = rol(R[i], s[i]);
        j++;
      }
    };

    /**
     * Perform one mashing round "in place".
     *
     * @param R Array of four words to perform mashing on.
     */
    mashRound = function(R) {
      for(i = 0; i < 4; i++) {
        R[i] += K[R[(i + 3) % 4] & 63];
      }
    };
  } else {
    /**
     * Perform one r-mixing round "in place".
     *
     * @param R Array of four words to perform mixing on.
     */
    mixRound = function(R) {
      for(i = 3; i >= 0; i--) {
        R[i] = ror(R[i], s[i]);
        R[i] -= K[j] + (R[(i + 3) % 4] & R[(i + 2) % 4]) +
          ((~R[(i + 3) % 4]) & R[(i + 1) % 4]);
        j--;
      }
    };

    /**
     * Perform one r-mashing round "in place".
     *
     * @param R Array of four words to perform mashing on.
     */
    mashRound = function(R) {
      for(i = 3; i >= 0; i--) {
        R[i] -= K[R[(i + 3) % 4] & 63];
      }
    };
  }

  /**
   * Run the specified cipher execution plan.
   *
   * This function takes four words from the input buffer, applies the IV on
   * it (if requested) and runs the provided execution plan.
   *
   * The plan must be put together in form of a array of arrays.  Where the
   * outer one is simply a list of steps to perform and the inner one needs
   * to have two elements: the first one telling how many rounds to perform,
   * the second one telling what to do (i.e. the function to call).
   *
   * @param {Array} plan The plan to execute.
   */
  var runPlan = function(plan) {
    var R = [];

    /* Get data from input buffer and fill the four words into R */
    for(i = 0; i < 4; i++) {
      var val = _input.getInt16Le();

      if(_iv !== null) {
        if(encrypt) {
          /* We're encrypting, apply the IV first. */
          val ^= _iv.getInt16Le();
        } else {
          /* We're decryption, keep cipher text for next block. */
          _iv.putInt16Le(val);
        }
      }

      R.push(val & 0xffff);
    }

    /* Reset global "j" variable as per spec. */
    j = encrypt ? 0 : 63;

    /* Run execution plan. */
    for(var ptr = 0; ptr < plan.length; ptr++) {
      for(var ctr = 0; ctr < plan[ptr][0]; ctr++) {
        plan[ptr][1](R);
      }
    }

    /* Write back result to output buffer. */
    for(i = 0; i < 4; i++) {
      if(_iv !== null) {
        if(encrypt) {
          /* We're encrypting in CBC-mode, feed back encrypted bytes into
             IV buffer to carry it forward to next block. */
          _iv.putInt16Le(R[i]);
        } else {
          R[i] ^= _iv.getInt16Le();
        }
      }

      _output.putInt16Le(R[i]);
    }
  };

  /* Create cipher object */
  var cipher = null;
  cipher = {
    /**
     * Starts or restarts the encryption or decryption process, whichever
     * was previously configured.
     *
     * To use the cipher in CBC mode, iv may be given either as a string
     * of bytes, or as a byte buffer.  For ECB mode, give null as iv.
     *
     * @param iv the initialization vector to use, null for ECB mode.
     * @param output the output the buffer to write to, null to create one.
     */
    start: function(iv, output) {
      if(iv) {
        /* CBC mode */
        if(typeof iv === 'string') {
          iv = forge.util.createBuffer(iv);
        }
      }

      _finish = false;
      _input = forge.util.createBuffer();
      _output = output || new forge.util.createBuffer();
      _iv = iv;

      cipher.output = _output;
    },

    /**
     * Updates the next block.
     *
     * @param input the buffer to read from.
     */
    update: function(input) {
      if(!_finish) {
        // not finishing, so fill the input buffer with more input
        _input.putBuffer(input);
      }

      while(_input.length() >= 8) {
        runPlan([
            [ 5, mixRound ],
            [ 1, mashRound ],
            [ 6, mixRound ],
            [ 1, mashRound ],
            [ 5, mixRound ]
          ]);
      }
    },

    /**
     * Finishes encrypting or decrypting.
     *
     * @param pad a padding function to use, null for PKCS#7 padding,
     *           signature(blockSize, buffer, decrypt).
     *
     * @return true if successful, false on error.
     */
    finish: function(pad) {
      var rval = true;

      if(encrypt) {
        if(pad) {
          rval = pad(8, _input, !encrypt);
        } else {
          // add PKCS#7 padding to block (each pad byte is the
          // value of the number of pad bytes)
          var padding = (_input.length() === 8) ? 8 : (8 - _input.length());
          _input.fillWithByte(padding, padding);
        }
      }

      if(rval) {
        // do final update
        _finish = true;
        cipher.update();
      }

      if(!encrypt) {
        // check for error: input data not a multiple of block size
        rval = (_input.length() === 0);
        if(rval) {
          if(pad) {
            rval = pad(8, _output, !encrypt);
          } else {
            // ensure padding byte count is valid
            var len = _output.length();
            var count = _output.at(len - 1);

            if(count > len) {
              rval = false;
            } else {
              // trim off padding bytes
              _output.truncate(count);
            }
          }
        }
      }

      return rval;
    }
  };

  return cipher;
};

/**
 * Creates an RC2 cipher object to encrypt data in ECB or CBC mode using the
 * given symmetric key. The output will be stored in the 'output' member
 * of the returned cipher.
 *
 * The key and iv may be given as a string of bytes or a byte buffer.
 * The cipher is initialized to use 128 effective key bits.
 *
 * @param key the symmetric key to use.
 * @param iv the initialization vector to use.
 * @param output the buffer to write to, null to create one.
 *
 * @return the cipher.
 */
forge.rc2.startEncrypting = function(key, iv, output) {
  var cipher = forge.rc2.createEncryptionCipher(key, 128);
  cipher.start(iv, output);
  return cipher;
};

/**
 * Creates an RC2 cipher object to encrypt data in ECB or CBC mode using the
 * given symmetric key.
 *
 * The key may be given as a string of bytes or a byte buffer.
 *
 * To start encrypting call start() on the cipher with an iv and optional
 * output buffer.
 *
 * @param key the symmetric key to use.
 *
 * @return the cipher.
 */
forge.rc2.createEncryptionCipher = function(key, bits) {
  return createCipher(key, bits, true);
};

/**
 * Creates an RC2 cipher object to decrypt data in ECB or CBC mode using the
 * given symmetric key. The output will be stored in the 'output' member
 * of the returned cipher.
 *
 * The key and iv may be given as a string of bytes or a byte buffer.
 * The cipher is initialized to use 128 effective key bits.
 *
 * @param key the symmetric key to use.
 * @param iv the initialization vector to use.
 * @param output the buffer to write to, null to create one.
 *
 * @return the cipher.
 */
forge.rc2.startDecrypting = function(key, iv, output) {
  var cipher = forge.rc2.createDecryptionCipher(key, 128);
  cipher.start(iv, output);
  return cipher;
};

/**
 * Creates an RC2 cipher object to decrypt data in ECB or CBC mode using the
 * given symmetric key.
 *
 * The key may be given as a string of bytes or a byte buffer.
 *
 * To start decrypting call start() on the cipher with an iv and optional
 * output buffer.
 *
 * @param key the symmetric key to use.
 *
 * @return the cipher.
 */
forge.rc2.createDecryptionCipher = function(key, bits) {
  return createCipher(key, bits, false);
};


/***/ }),

/***/ "./node_modules/node-forge/lib/rsa.js":
/*!********************************************!*\
  !*** ./node_modules/node-forge/lib/rsa.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Javascript implementation of basic RSA algorithms.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2014 Digital Bazaar, Inc.
 *
 * The only algorithm currently supported for PKI is RSA.
 *
 * An RSA key is often stored in ASN.1 DER format. The SubjectPublicKeyInfo
 * ASN.1 structure is composed of an algorithm of type AlgorithmIdentifier
 * and a subjectPublicKey of type bit string.
 *
 * The AlgorithmIdentifier contains an Object Identifier (OID) and parameters
 * for the algorithm, if any. In the case of RSA, there aren't any.
 *
 * SubjectPublicKeyInfo ::= SEQUENCE {
 *   algorithm AlgorithmIdentifier,
 *   subjectPublicKey BIT STRING
 * }
 *
 * AlgorithmIdentifer ::= SEQUENCE {
 *   algorithm OBJECT IDENTIFIER,
 *   parameters ANY DEFINED BY algorithm OPTIONAL
 * }
 *
 * For an RSA public key, the subjectPublicKey is:
 *
 * RSAPublicKey ::= SEQUENCE {
 *   modulus            INTEGER,    -- n
 *   publicExponent     INTEGER     -- e
 * }
 *
 * PrivateKeyInfo ::= SEQUENCE {
 *   version                   Version,
 *   privateKeyAlgorithm       PrivateKeyAlgorithmIdentifier,
 *   privateKey                PrivateKey,
 *   attributes           [0]  IMPLICIT Attributes OPTIONAL
 * }
 *
 * Version ::= INTEGER
 * PrivateKeyAlgorithmIdentifier ::= AlgorithmIdentifier
 * PrivateKey ::= OCTET STRING
 * Attributes ::= SET OF Attribute
 *
 * An RSA private key as the following structure:
 *
 * RSAPrivateKey ::= SEQUENCE {
 *   version Version,
 *   modulus INTEGER, -- n
 *   publicExponent INTEGER, -- e
 *   privateExponent INTEGER, -- d
 *   prime1 INTEGER, -- p
 *   prime2 INTEGER, -- q
 *   exponent1 INTEGER, -- d mod (p-1)
 *   exponent2 INTEGER, -- d mod (q-1)
 *   coefficient INTEGER -- (inverse of q) mod p
 * }
 *
 * Version ::= INTEGER
 *
 * The OID for the RSA key algorithm is: 1.2.840.113549.1.1.1
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./asn1 */ "./node_modules/node-forge/lib/asn1.js");
__webpack_require__(/*! ./jsbn */ "./node_modules/node-forge/lib/jsbn.js");
__webpack_require__(/*! ./oids */ "./node_modules/node-forge/lib/oids.js");
__webpack_require__(/*! ./pkcs1 */ "./node_modules/node-forge/lib/pkcs1.js");
__webpack_require__(/*! ./prime */ "./node_modules/node-forge/lib/prime.js");
__webpack_require__(/*! ./random */ "./node_modules/node-forge/lib/random.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

if(typeof BigInteger === 'undefined') {
  var BigInteger = forge.jsbn.BigInteger;
}

var _crypto = forge.util.isNodejs ? __webpack_require__(/*! crypto */ 0) : null;

// shortcut for asn.1 API
var asn1 = forge.asn1;

// shortcut for util API
var util = forge.util;

/*
 * RSA encryption and decryption, see RFC 2313.
 */
forge.pki = forge.pki || {};
module.exports = forge.pki.rsa = forge.rsa = forge.rsa || {};
var pki = forge.pki;

// for finding primes, which are 30k+i for i = 1, 7, 11, 13, 17, 19, 23, 29
var GCD_30_DELTA = [6, 4, 2, 4, 2, 4, 6, 2];

// validator for a PrivateKeyInfo structure
var privateKeyValidator = {
  // PrivateKeyInfo
  name: 'PrivateKeyInfo',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    // Version (INTEGER)
    name: 'PrivateKeyInfo.version',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'privateKeyVersion'
  }, {
    // privateKeyAlgorithm
    name: 'PrivateKeyInfo.privateKeyAlgorithm',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: 'AlgorithmIdentifier.algorithm',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.OID,
      constructed: false,
      capture: 'privateKeyOid'
    }]
  }, {
    // PrivateKey
    name: 'PrivateKeyInfo',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.OCTETSTRING,
    constructed: false,
    capture: 'privateKey'
  }]
};

// validator for an RSA private key
var rsaPrivateKeyValidator = {
  // RSAPrivateKey
  name: 'RSAPrivateKey',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    // Version (INTEGER)
    name: 'RSAPrivateKey.version',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'privateKeyVersion'
  }, {
    // modulus (n)
    name: 'RSAPrivateKey.modulus',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'privateKeyModulus'
  }, {
    // publicExponent (e)
    name: 'RSAPrivateKey.publicExponent',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'privateKeyPublicExponent'
  }, {
    // privateExponent (d)
    name: 'RSAPrivateKey.privateExponent',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'privateKeyPrivateExponent'
  }, {
    // prime1 (p)
    name: 'RSAPrivateKey.prime1',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'privateKeyPrime1'
  }, {
    // prime2 (q)
    name: 'RSAPrivateKey.prime2',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'privateKeyPrime2'
  }, {
    // exponent1 (d mod (p-1))
    name: 'RSAPrivateKey.exponent1',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'privateKeyExponent1'
  }, {
    // exponent2 (d mod (q-1))
    name: 'RSAPrivateKey.exponent2',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'privateKeyExponent2'
  }, {
    // coefficient ((inverse of q) mod p)
    name: 'RSAPrivateKey.coefficient',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'privateKeyCoefficient'
  }]
};

// validator for an RSA public key
var rsaPublicKeyValidator = {
  // RSAPublicKey
  name: 'RSAPublicKey',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    // modulus (n)
    name: 'RSAPublicKey.modulus',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'publicKeyModulus'
  }, {
    // publicExponent (e)
    name: 'RSAPublicKey.exponent',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'publicKeyExponent'
  }]
};

// validator for an SubjectPublicKeyInfo structure
// Note: Currently only works with an RSA public key
var publicKeyValidator = forge.pki.rsa.publicKeyValidator = {
  name: 'SubjectPublicKeyInfo',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  captureAsn1: 'subjectPublicKeyInfo',
  value: [{
    name: 'SubjectPublicKeyInfo.AlgorithmIdentifier',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: 'AlgorithmIdentifier.algorithm',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.OID,
      constructed: false,
      capture: 'publicKeyOid'
    }]
  }, {
    // subjectPublicKey
    name: 'SubjectPublicKeyInfo.subjectPublicKey',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.BITSTRING,
    constructed: false,
    value: [{
      // RSAPublicKey
      name: 'SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      optional: true,
      captureAsn1: 'rsaPublicKey'
    }]
  }]
};

/**
 * Wrap digest in DigestInfo object.
 *
 * This function implements EMSA-PKCS1-v1_5-ENCODE as per RFC 3447.
 *
 * DigestInfo ::= SEQUENCE {
 *   digestAlgorithm DigestAlgorithmIdentifier,
 *   digest Digest
 * }
 *
 * DigestAlgorithmIdentifier ::= AlgorithmIdentifier
 * Digest ::= OCTET STRING
 *
 * @param md the message digest object with the hash to sign.
 *
 * @return the encoded message (ready for RSA encrytion)
 */
var emsaPkcs1v15encode = function(md) {
  // get the oid for the algorithm
  var oid;
  if(md.algorithm in pki.oids) {
    oid = pki.oids[md.algorithm];
  } else {
    var error = new Error('Unknown message digest algorithm.');
    error.algorithm = md.algorithm;
    throw error;
  }
  var oidBytes = asn1.oidToDer(oid).getBytes();

  // create the digest info
  var digestInfo = asn1.create(
    asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, []);
  var digestAlgorithm = asn1.create(
    asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, []);
  digestAlgorithm.value.push(asn1.create(
    asn1.Class.UNIVERSAL, asn1.Type.OID, false, oidBytes));
  digestAlgorithm.value.push(asn1.create(
    asn1.Class.UNIVERSAL, asn1.Type.NULL, false, ''));
  var digest = asn1.create(
    asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING,
    false, md.digest().getBytes());
  digestInfo.value.push(digestAlgorithm);
  digestInfo.value.push(digest);

  // encode digest info
  return asn1.toDer(digestInfo).getBytes();
};

/**
 * Performs x^c mod n (RSA encryption or decryption operation).
 *
 * @param x the number to raise and mod.
 * @param key the key to use.
 * @param pub true if the key is public, false if private.
 *
 * @return the result of x^c mod n.
 */
var _modPow = function(x, key, pub) {
  if(pub) {
    return x.modPow(key.e, key.n);
  }

  if(!key.p || !key.q) {
    // allow calculation without CRT params (slow)
    return x.modPow(key.d, key.n);
  }

  // pre-compute dP, dQ, and qInv if necessary
  if(!key.dP) {
    key.dP = key.d.mod(key.p.subtract(BigInteger.ONE));
  }
  if(!key.dQ) {
    key.dQ = key.d.mod(key.q.subtract(BigInteger.ONE));
  }
  if(!key.qInv) {
    key.qInv = key.q.modInverse(key.p);
  }

  /* Chinese remainder theorem (CRT) states:

    Suppose n1, n2, ..., nk are positive integers which are pairwise
    coprime (n1 and n2 have no common factors other than 1). For any
    integers x1, x2, ..., xk there exists an integer x solving the
    system of simultaneous congruences (where ~= means modularly
    congruent so a ~= b mod n means a mod n = b mod n):

    x ~= x1 mod n1
    x ~= x2 mod n2
    ...
    x ~= xk mod nk

    This system of congruences has a single simultaneous solution x
    between 0 and n - 1. Furthermore, each xk solution and x itself
    is congruent modulo the product n = n1*n2*...*nk.
    So x1 mod n = x2 mod n = xk mod n = x mod n.

    The single simultaneous solution x can be solved with the following
    equation:

    x = sum(xi*ri*si) mod n where ri = n/ni and si = ri^-1 mod ni.

    Where x is less than n, xi = x mod ni.

    For RSA we are only concerned with k = 2. The modulus n = pq, where
    p and q are coprime. The RSA decryption algorithm is:

    y = x^d mod n

    Given the above:

    x1 = x^d mod p
    r1 = n/p = q
    s1 = q^-1 mod p
    x2 = x^d mod q
    r2 = n/q = p
    s2 = p^-1 mod q

    So y = (x1r1s1 + x2r2s2) mod n
         = ((x^d mod p)q(q^-1 mod p) + (x^d mod q)p(p^-1 mod q)) mod n

    According to Fermat's Little Theorem, if the modulus P is prime,
    for any integer A not evenly divisible by P, A^(P-1) ~= 1 mod P.
    Since A is not divisible by P it follows that if:
    N ~= M mod (P - 1), then A^N mod P = A^M mod P. Therefore:

    A^N mod P = A^(M mod (P - 1)) mod P. (The latter takes less effort
    to calculate). In order to calculate x^d mod p more quickly the
    exponent d mod (p - 1) is stored in the RSA private key (the same
    is done for x^d mod q). These values are referred to as dP and dQ
    respectively. Therefore we now have:

    y = ((x^dP mod p)q(q^-1 mod p) + (x^dQ mod q)p(p^-1 mod q)) mod n

    Since we'll be reducing x^dP by modulo p (same for q) we can also
    reduce x by p (and q respectively) before hand. Therefore, let

    xp = ((x mod p)^dP mod p), and
    xq = ((x mod q)^dQ mod q), yielding:

    y = (xp*q*(q^-1 mod p) + xq*p*(p^-1 mod q)) mod n

    This can be further reduced to a simple algorithm that only
    requires 1 inverse (the q inverse is used) to be used and stored.
    The algorithm is called Garner's algorithm. If qInv is the
    inverse of q, we simply calculate:

    y = (qInv*(xp - xq) mod p) * q + xq

    However, there are two further complications. First, we need to
    ensure that xp > xq to prevent signed BigIntegers from being used
    so we add p until this is true (since we will be mod'ing with
    p anyway). Then, there is a known timing attack on algorithms
    using the CRT. To mitigate this risk, "cryptographic blinding"
    should be used. This requires simply generating a random number r
    between 0 and n-1 and its inverse and multiplying x by r^e before
    calculating y and then multiplying y by r^-1 afterwards. Note that
    r must be coprime with n (gcd(r, n) === 1) in order to have an
    inverse.
  */

  // cryptographic blinding
  var r;
  do {
    r = new BigInteger(
      forge.util.bytesToHex(forge.random.getBytes(key.n.bitLength() / 8)),
      16);
  } while(r.compareTo(key.n) >= 0 || !r.gcd(key.n).equals(BigInteger.ONE));
  x = x.multiply(r.modPow(key.e, key.n)).mod(key.n);

  // calculate xp and xq
  var xp = x.mod(key.p).modPow(key.dP, key.p);
  var xq = x.mod(key.q).modPow(key.dQ, key.q);

  // xp must be larger than xq to avoid signed bit usage
  while(xp.compareTo(xq) < 0) {
    xp = xp.add(key.p);
  }

  // do last step
  var y = xp.subtract(xq)
    .multiply(key.qInv).mod(key.p)
    .multiply(key.q).add(xq);

  // remove effect of random for cryptographic blinding
  y = y.multiply(r.modInverse(key.n)).mod(key.n);

  return y;
};

/**
 * NOTE: THIS METHOD IS DEPRECATED, use 'sign' on a private key object or
 * 'encrypt' on a public key object instead.
 *
 * Performs RSA encryption.
 *
 * The parameter bt controls whether to put padding bytes before the
 * message passed in. Set bt to either true or false to disable padding
 * completely (in order to handle e.g. EMSA-PSS encoding seperately before),
 * signaling whether the encryption operation is a public key operation
 * (i.e. encrypting data) or not, i.e. private key operation (data signing).
 *
 * For PKCS#1 v1.5 padding pass in the block type to use, i.e. either 0x01
 * (for signing) or 0x02 (for encryption). The key operation mode (private
 * or public) is derived from this flag in that case).
 *
 * @param m the message to encrypt as a byte string.
 * @param key the RSA key to use.
 * @param bt for PKCS#1 v1.5 padding, the block type to use
 *   (0x01 for private key, 0x02 for public),
 *   to disable padding: true = public key, false = private key.
 *
 * @return the encrypted bytes as a string.
 */
pki.rsa.encrypt = function(m, key, bt) {
  var pub = bt;
  var eb;

  // get the length of the modulus in bytes
  var k = Math.ceil(key.n.bitLength() / 8);

  if(bt !== false && bt !== true) {
    // legacy, default to PKCS#1 v1.5 padding
    pub = (bt === 0x02);
    eb = _encodePkcs1_v1_5(m, key, bt);
  } else {
    eb = forge.util.createBuffer();
    eb.putBytes(m);
  }

  // load encryption block as big integer 'x'
  // FIXME: hex conversion inefficient, get BigInteger w/byte strings
  var x = new BigInteger(eb.toHex(), 16);

  // do RSA encryption
  var y = _modPow(x, key, pub);

  // convert y into the encrypted data byte string, if y is shorter in
  // bytes than k, then prepend zero bytes to fill up ed
  // FIXME: hex conversion inefficient, get BigInteger w/byte strings
  var yhex = y.toString(16);
  var ed = forge.util.createBuffer();
  var zeros = k - Math.ceil(yhex.length / 2);
  while(zeros > 0) {
    ed.putByte(0x00);
    --zeros;
  }
  ed.putBytes(forge.util.hexToBytes(yhex));
  return ed.getBytes();
};

/**
 * NOTE: THIS METHOD IS DEPRECATED, use 'decrypt' on a private key object or
 * 'verify' on a public key object instead.
 *
 * Performs RSA decryption.
 *
 * The parameter ml controls whether to apply PKCS#1 v1.5 padding
 * or not.  Set ml = false to disable padding removal completely
 * (in order to handle e.g. EMSA-PSS later on) and simply pass back
 * the RSA encryption block.
 *
 * @param ed the encrypted data to decrypt in as a byte string.
 * @param key the RSA key to use.
 * @param pub true for a public key operation, false for private.
 * @param ml the message length, if known, false to disable padding.
 *
 * @return the decrypted message as a byte string.
 */
pki.rsa.decrypt = function(ed, key, pub, ml) {
  // get the length of the modulus in bytes
  var k = Math.ceil(key.n.bitLength() / 8);

  // error if the length of the encrypted data ED is not k
  if(ed.length !== k) {
    var error = new Error('Encrypted message length is invalid.');
    error.length = ed.length;
    error.expected = k;
    throw error;
  }

  // convert encrypted data into a big integer
  // FIXME: hex conversion inefficient, get BigInteger w/byte strings
  var y = new BigInteger(forge.util.createBuffer(ed).toHex(), 16);

  // y must be less than the modulus or it wasn't the result of
  // a previous mod operation (encryption) using that modulus
  if(y.compareTo(key.n) >= 0) {
    throw new Error('Encrypted message is invalid.');
  }

  // do RSA decryption
  var x = _modPow(y, key, pub);

  // create the encryption block, if x is shorter in bytes than k, then
  // prepend zero bytes to fill up eb
  // FIXME: hex conversion inefficient, get BigInteger w/byte strings
  var xhex = x.toString(16);
  var eb = forge.util.createBuffer();
  var zeros = k - Math.ceil(xhex.length / 2);
  while(zeros > 0) {
    eb.putByte(0x00);
    --zeros;
  }
  eb.putBytes(forge.util.hexToBytes(xhex));

  if(ml !== false) {
    // legacy, default to PKCS#1 v1.5 padding
    return _decodePkcs1_v1_5(eb.getBytes(), key, pub);
  }

  // return message
  return eb.getBytes();
};

/**
 * Creates an RSA key-pair generation state object. It is used to allow
 * key-generation to be performed in steps. It also allows for a UI to
 * display progress updates.
 *
 * @param bits the size for the private key in bits, defaults to 2048.
 * @param e the public exponent to use, defaults to 65537 (0x10001).
 * @param [options] the options to use.
 *          prng a custom crypto-secure pseudo-random number generator to use,
 *            that must define "getBytesSync".
 *          algorithm the algorithm to use (default: 'PRIMEINC').
 *
 * @return the state object to use to generate the key-pair.
 */
pki.rsa.createKeyPairGenerationState = function(bits, e, options) {
  // TODO: migrate step-based prime generation code to forge.prime

  // set default bits
  if(typeof(bits) === 'string') {
    bits = parseInt(bits, 10);
  }
  bits = bits || 2048;

  // create prng with api that matches BigInteger secure random
  options = options || {};
  var prng = options.prng || forge.random;
  var rng = {
    // x is an array to fill with bytes
    nextBytes: function(x) {
      var b = prng.getBytesSync(x.length);
      for(var i = 0; i < x.length; ++i) {
        x[i] = b.charCodeAt(i);
      }
    }
  };

  var algorithm = options.algorithm || 'PRIMEINC';

  // create PRIMEINC algorithm state
  var rval;
  if(algorithm === 'PRIMEINC') {
    rval = {
      algorithm: algorithm,
      state: 0,
      bits: bits,
      rng: rng,
      eInt: e || 65537,
      e: new BigInteger(null),
      p: null,
      q: null,
      qBits: bits >> 1,
      pBits: bits - (bits >> 1),
      pqState: 0,
      num: null,
      keys: null
    };
    rval.e.fromInt(rval.eInt);
  } else {
    throw new Error('Invalid key generation algorithm: ' + algorithm);
  }

  return rval;
};

/**
 * Attempts to runs the key-generation algorithm for at most n seconds
 * (approximately) using the given state. When key-generation has completed,
 * the keys will be stored in state.keys.
 *
 * To use this function to update a UI while generating a key or to prevent
 * causing browser lockups/warnings, set "n" to a value other than 0. A
 * simple pattern for generating a key and showing a progress indicator is:
 *
 * var state = pki.rsa.createKeyPairGenerationState(2048);
 * var step = function() {
 *   // step key-generation, run algorithm for 100 ms, repeat
 *   if(!forge.pki.rsa.stepKeyPairGenerationState(state, 100)) {
 *     setTimeout(step, 1);
 *   } else {
 *     // key-generation complete
 *     // TODO: turn off progress indicator here
 *     // TODO: use the generated key-pair in "state.keys"
 *   }
 * };
 * // TODO: turn on progress indicator here
 * setTimeout(step, 0);
 *
 * @param state the state to use.
 * @param n the maximum number of milliseconds to run the algorithm for, 0
 *          to run the algorithm to completion.
 *
 * @return true if the key-generation completed, false if not.
 */
pki.rsa.stepKeyPairGenerationState = function(state, n) {
  // set default algorithm if not set
  if(!('algorithm' in state)) {
    state.algorithm = 'PRIMEINC';
  }

  // TODO: migrate step-based prime generation code to forge.prime
  // TODO: abstract as PRIMEINC algorithm

  // do key generation (based on Tom Wu's rsa.js, see jsbn.js license)
  // with some minor optimizations and designed to run in steps

  // local state vars
  var THIRTY = new BigInteger(null);
  THIRTY.fromInt(30);
  var deltaIdx = 0;
  var op_or = function(x, y) {return x | y;};

  // keep stepping until time limit is reached or done
  var t1 = +new Date();
  var t2;
  var total = 0;
  while(state.keys === null && (n <= 0 || total < n)) {
    // generate p or q
    if(state.state === 0) {
      /* Note: All primes are of the form:

        30k+i, for i < 30 and gcd(30, i)=1, where there are 8 values for i

        When we generate a random number, we always align it at 30k + 1. Each
        time the number is determined not to be prime we add to get to the
        next 'i', eg: if the number was at 30k + 1 we add 6. */
      var bits = (state.p === null) ? state.pBits : state.qBits;
      var bits1 = bits - 1;

      // get a random number
      if(state.pqState === 0) {
        state.num = new BigInteger(bits, state.rng);
        // force MSB set
        if(!state.num.testBit(bits1)) {
          state.num.bitwiseTo(
            BigInteger.ONE.shiftLeft(bits1), op_or, state.num);
        }
        // align number on 30k+1 boundary
        state.num.dAddOffset(31 - state.num.mod(THIRTY).byteValue(), 0);
        deltaIdx = 0;

        ++state.pqState;
      } else if(state.pqState === 1) {
        // try to make the number a prime
        if(state.num.bitLength() > bits) {
          // overflow, try again
          state.pqState = 0;
          // do primality test
        } else if(state.num.isProbablePrime(
          _getMillerRabinTests(state.num.bitLength()))) {
          ++state.pqState;
        } else {
          // get next potential prime
          state.num.dAddOffset(GCD_30_DELTA[deltaIdx++ % 8], 0);
        }
      } else if(state.pqState === 2) {
        // ensure number is coprime with e
        state.pqState =
          (state.num.subtract(BigInteger.ONE).gcd(state.e)
            .compareTo(BigInteger.ONE) === 0) ? 3 : 0;
      } else if(state.pqState === 3) {
        // store p or q
        state.pqState = 0;
        if(state.p === null) {
          state.p = state.num;
        } else {
          state.q = state.num;
        }

        // advance state if both p and q are ready
        if(state.p !== null && state.q !== null) {
          ++state.state;
        }
        state.num = null;
      }
    } else if(state.state === 1) {
      // ensure p is larger than q (swap them if not)
      if(state.p.compareTo(state.q) < 0) {
        state.num = state.p;
        state.p = state.q;
        state.q = state.num;
      }
      ++state.state;
    } else if(state.state === 2) {
      // compute phi: (p - 1)(q - 1) (Euler's totient function)
      state.p1 = state.p.subtract(BigInteger.ONE);
      state.q1 = state.q.subtract(BigInteger.ONE);
      state.phi = state.p1.multiply(state.q1);
      ++state.state;
    } else if(state.state === 3) {
      // ensure e and phi are coprime
      if(state.phi.gcd(state.e).compareTo(BigInteger.ONE) === 0) {
        // phi and e are coprime, advance
        ++state.state;
      } else {
        // phi and e aren't coprime, so generate a new p and q
        state.p = null;
        state.q = null;
        state.state = 0;
      }
    } else if(state.state === 4) {
      // create n, ensure n is has the right number of bits
      state.n = state.p.multiply(state.q);

      // ensure n is right number of bits
      if(state.n.bitLength() === state.bits) {
        // success, advance
        ++state.state;
      } else {
        // failed, get new q
        state.q = null;
        state.state = 0;
      }
    } else if(state.state === 5) {
      // set keys
      var d = state.e.modInverse(state.phi);
      state.keys = {
        privateKey: pki.rsa.setPrivateKey(
          state.n, state.e, d, state.p, state.q,
          d.mod(state.p1), d.mod(state.q1),
          state.q.modInverse(state.p)),
        publicKey: pki.rsa.setPublicKey(state.n, state.e)
      };
    }

    // update timing
    t2 = +new Date();
    total += t2 - t1;
    t1 = t2;
  }

  return state.keys !== null;
};

/**
 * Generates an RSA public-private key pair in a single call.
 *
 * To generate a key-pair in steps (to allow for progress updates and to
 * prevent blocking or warnings in slow browsers) then use the key-pair
 * generation state functions.
 *
 * To generate a key-pair asynchronously (either through web-workers, if
 * available, or by breaking up the work on the main thread), pass a
 * callback function.
 *
 * @param [bits] the size for the private key in bits, defaults to 2048.
 * @param [e] the public exponent to use, defaults to 65537.
 * @param [options] options for key-pair generation, if given then 'bits'
 *            and 'e' must *not* be given:
 *          bits the size for the private key in bits, (default: 2048).
 *          e the public exponent to use, (default: 65537 (0x10001)).
 *          workerScript the worker script URL.
 *          workers the number of web workers (if supported) to use,
 *            (default: 2).
 *          workLoad the size of the work load, ie: number of possible prime
 *            numbers for each web worker to check per work assignment,
 *            (default: 100).
 *          prng a custom crypto-secure pseudo-random number generator to use,
 *            that must define "getBytesSync". Disables use of native APIs.
 *          algorithm the algorithm to use (default: 'PRIMEINC').
 * @param [callback(err, keypair)] called once the operation completes.
 *
 * @return an object with privateKey and publicKey properties.
 */
pki.rsa.generateKeyPair = function(bits, e, options, callback) {
  // (bits), (options), (callback)
  if(arguments.length === 1) {
    if(typeof bits === 'object') {
      options = bits;
      bits = undefined;
    } else if(typeof bits === 'function') {
      callback = bits;
      bits = undefined;
    }
  } else if(arguments.length === 2) {
    // (bits, e), (bits, options), (bits, callback), (options, callback)
    if(typeof bits === 'number') {
      if(typeof e === 'function') {
        callback = e;
        e = undefined;
      } else if(typeof e !== 'number') {
        options = e;
        e = undefined;
      }
    } else {
      options = bits;
      callback = e;
      bits = undefined;
      e = undefined;
    }
  } else if(arguments.length === 3) {
    // (bits, e, options), (bits, e, callback), (bits, options, callback)
    if(typeof e === 'number') {
      if(typeof options === 'function') {
        callback = options;
        options = undefined;
      }
    } else {
      callback = options;
      options = e;
      e = undefined;
    }
  }
  options = options || {};
  if(bits === undefined) {
    bits = options.bits || 2048;
  }
  if(e === undefined) {
    e = options.e || 0x10001;
  }

  // use native code if permitted, available, and parameters are acceptable
  if(!forge.options.usePureJavaScript && !options.prng &&
    bits >= 256 && bits <= 16384 && (e === 0x10001 || e === 3)) {
    if(callback) {
      // try native async
      if(_detectNodeCrypto('generateKeyPair')) {
        return _crypto.generateKeyPair('rsa', {
          modulusLength: bits,
          publicExponent: e,
          publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
          },
          privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
          }
        }, function(err, pub, priv) {
          if(err) {
            return callback(err);
          }
          callback(null, {
            privateKey: pki.privateKeyFromPem(priv),
            publicKey: pki.publicKeyFromPem(pub)
          });
        });
      }
      if(_detectSubtleCrypto('generateKey') &&
        _detectSubtleCrypto('exportKey')) {
        // use standard native generateKey
        return util.globalScope.crypto.subtle.generateKey({
          name: 'RSASSA-PKCS1-v1_5',
          modulusLength: bits,
          publicExponent: _intToUint8Array(e),
          hash: {name: 'SHA-256'}
        }, true /* key can be exported*/, ['sign', 'verify'])
        .then(function(pair) {
          return util.globalScope.crypto.subtle.exportKey(
            'pkcs8', pair.privateKey);
        // avoiding catch(function(err) {...}) to support IE <= 8
        }).then(undefined, function(err) {
          callback(err);
        }).then(function(pkcs8) {
          if(pkcs8) {
            var privateKey = pki.privateKeyFromAsn1(
              asn1.fromDer(forge.util.createBuffer(pkcs8)));
            callback(null, {
              privateKey: privateKey,
              publicKey: pki.setRsaPublicKey(privateKey.n, privateKey.e)
            });
          }
        });
      }
      if(_detectSubtleMsCrypto('generateKey') &&
        _detectSubtleMsCrypto('exportKey')) {
        var genOp = util.globalScope.msCrypto.subtle.generateKey({
          name: 'RSASSA-PKCS1-v1_5',
          modulusLength: bits,
          publicExponent: _intToUint8Array(e),
          hash: {name: 'SHA-256'}
        }, true /* key can be exported*/, ['sign', 'verify']);
        genOp.oncomplete = function(e) {
          var pair = e.target.result;
          var exportOp = util.globalScope.msCrypto.subtle.exportKey(
            'pkcs8', pair.privateKey);
          exportOp.oncomplete = function(e) {
            var pkcs8 = e.target.result;
            var privateKey = pki.privateKeyFromAsn1(
              asn1.fromDer(forge.util.createBuffer(pkcs8)));
            callback(null, {
              privateKey: privateKey,
              publicKey: pki.setRsaPublicKey(privateKey.n, privateKey.e)
            });
          };
          exportOp.onerror = function(err) {
            callback(err);
          };
        };
        genOp.onerror = function(err) {
          callback(err);
        };
        return;
      }
    } else {
      // try native sync
      if(_detectNodeCrypto('generateKeyPairSync')) {
        var keypair = _crypto.generateKeyPairSync('rsa', {
          modulusLength: bits,
          publicExponent: e,
          publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
          },
          privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
          }
        });
        return {
          privateKey: pki.privateKeyFromPem(keypair.privateKey),
          publicKey: pki.publicKeyFromPem(keypair.publicKey)
        };
      }
    }
  }

  // use JavaScript implementation
  var state = pki.rsa.createKeyPairGenerationState(bits, e, options);
  if(!callback) {
    pki.rsa.stepKeyPairGenerationState(state, 0);
    return state.keys;
  }
  _generateKeyPair(state, options, callback);
};

/**
 * Sets an RSA public key from BigIntegers modulus and exponent.
 *
 * @param n the modulus.
 * @param e the exponent.
 *
 * @return the public key.
 */
pki.setRsaPublicKey = pki.rsa.setPublicKey = function(n, e) {
  var key = {
    n: n,
    e: e
  };

  /**
   * Encrypts the given data with this public key. Newer applications
   * should use the 'RSA-OAEP' decryption scheme, 'RSAES-PKCS1-V1_5' is for
   * legacy applications.
   *
   * @param data the byte string to encrypt.
   * @param scheme the encryption scheme to use:
   *          'RSAES-PKCS1-V1_5' (default),
   *          'RSA-OAEP',
   *          'RAW', 'NONE', or null to perform raw RSA encryption,
   *          an object with an 'encode' property set to a function
   *          with the signature 'function(data, key)' that returns
   *          a binary-encoded string representing the encoded data.
   * @param schemeOptions any scheme-specific options.
   *
   * @return the encrypted byte string.
   */
  key.encrypt = function(data, scheme, schemeOptions) {
    if(typeof scheme === 'string') {
      scheme = scheme.toUpperCase();
    } else if(scheme === undefined) {
      scheme = 'RSAES-PKCS1-V1_5';
    }

    if(scheme === 'RSAES-PKCS1-V1_5') {
      scheme = {
        encode: function(m, key, pub) {
          return _encodePkcs1_v1_5(m, key, 0x02).getBytes();
        }
      };
    } else if(scheme === 'RSA-OAEP' || scheme === 'RSAES-OAEP') {
      scheme = {
        encode: function(m, key) {
          return forge.pkcs1.encode_rsa_oaep(key, m, schemeOptions);
        }
      };
    } else if(['RAW', 'NONE', 'NULL', null].indexOf(scheme) !== -1) {
      scheme = {encode: function(e) {return e;}};
    } else if(typeof scheme === 'string') {
      throw new Error('Unsupported encryption scheme: "' + scheme + '".');
    }

    // do scheme-based encoding then rsa encryption
    var e = scheme.encode(data, key, true);
    return pki.rsa.encrypt(e, key, true);
  };

  /**
   * Verifies the given signature against the given digest.
   *
   * PKCS#1 supports multiple (currently two) signature schemes:
   * RSASSA-PKCS1-V1_5 and RSASSA-PSS.
   *
   * By default this implementation uses the "old scheme", i.e.
   * RSASSA-PKCS1-V1_5, in which case once RSA-decrypted, the
   * signature is an OCTET STRING that holds a DigestInfo.
   *
   * DigestInfo ::= SEQUENCE {
   *   digestAlgorithm DigestAlgorithmIdentifier,
   *   digest Digest
   * }
   * DigestAlgorithmIdentifier ::= AlgorithmIdentifier
   * Digest ::= OCTET STRING
   *
   * To perform PSS signature verification, provide an instance
   * of Forge PSS object as the scheme parameter.
   *
   * @param digest the message digest hash to compare against the signature,
   *          as a binary-encoded string.
   * @param signature the signature to verify, as a binary-encoded string.
   * @param scheme signature verification scheme to use:
   *          'RSASSA-PKCS1-V1_5' or undefined for RSASSA PKCS#1 v1.5,
   *          a Forge PSS object for RSASSA-PSS,
   *          'NONE' or null for none, DigestInfo will not be expected, but
   *            PKCS#1 v1.5 padding will still be used.
   *
   * @return true if the signature was verified, false if not.
   */
  key.verify = function(digest, signature, scheme) {
    if(typeof scheme === 'string') {
      scheme = scheme.toUpperCase();
    } else if(scheme === undefined) {
      scheme = 'RSASSA-PKCS1-V1_5';
    }

    if(scheme === 'RSASSA-PKCS1-V1_5') {
      scheme = {
        verify: function(digest, d) {
          // remove padding
          d = _decodePkcs1_v1_5(d, key, true);
          // d is ASN.1 BER-encoded DigestInfo
          var obj = asn1.fromDer(d);
          // compare the given digest to the decrypted one
          return digest === obj.value[1].value;
        }
      };
    } else if(scheme === 'NONE' || scheme === 'NULL' || scheme === null) {
      scheme = {
        verify: function(digest, d) {
          // remove padding
          d = _decodePkcs1_v1_5(d, key, true);
          return digest === d;
        }
      };
    }

    // do rsa decryption w/o any decoding, then verify -- which does decoding
    var d = pki.rsa.decrypt(signature, key, true, false);
    return scheme.verify(digest, d, key.n.bitLength());
  };

  return key;
};

/**
 * Sets an RSA private key from BigIntegers modulus, exponent, primes,
 * prime exponents, and modular multiplicative inverse.
 *
 * @param n the modulus.
 * @param e the public exponent.
 * @param d the private exponent ((inverse of e) mod n).
 * @param p the first prime.
 * @param q the second prime.
 * @param dP exponent1 (d mod (p-1)).
 * @param dQ exponent2 (d mod (q-1)).
 * @param qInv ((inverse of q) mod p)
 *
 * @return the private key.
 */
pki.setRsaPrivateKey = pki.rsa.setPrivateKey = function(
  n, e, d, p, q, dP, dQ, qInv) {
  var key = {
    n: n,
    e: e,
    d: d,
    p: p,
    q: q,
    dP: dP,
    dQ: dQ,
    qInv: qInv
  };

  /**
   * Decrypts the given data with this private key. The decryption scheme
   * must match the one used to encrypt the data.
   *
   * @param data the byte string to decrypt.
   * @param scheme the decryption scheme to use:
   *          'RSAES-PKCS1-V1_5' (default),
   *          'RSA-OAEP',
   *          'RAW', 'NONE', or null to perform raw RSA decryption.
   * @param schemeOptions any scheme-specific options.
   *
   * @return the decrypted byte string.
   */
  key.decrypt = function(data, scheme, schemeOptions) {
    if(typeof scheme === 'string') {
      scheme = scheme.toUpperCase();
    } else if(scheme === undefined) {
      scheme = 'RSAES-PKCS1-V1_5';
    }

    // do rsa decryption w/o any decoding
    var d = pki.rsa.decrypt(data, key, false, false);

    if(scheme === 'RSAES-PKCS1-V1_5') {
      scheme = {decode: _decodePkcs1_v1_5};
    } else if(scheme === 'RSA-OAEP' || scheme === 'RSAES-OAEP') {
      scheme = {
        decode: function(d, key) {
          return forge.pkcs1.decode_rsa_oaep(key, d, schemeOptions);
        }
      };
    } else if(['RAW', 'NONE', 'NULL', null].indexOf(scheme) !== -1) {
      scheme = {decode: function(d) {return d;}};
    } else {
      throw new Error('Unsupported encryption scheme: "' + scheme + '".');
    }

    // decode according to scheme
    return scheme.decode(d, key, false);
  };

  /**
   * Signs the given digest, producing a signature.
   *
   * PKCS#1 supports multiple (currently two) signature schemes:
   * RSASSA-PKCS1-V1_5 and RSASSA-PSS.
   *
   * By default this implementation uses the "old scheme", i.e.
   * RSASSA-PKCS1-V1_5. In order to generate a PSS signature, provide
   * an instance of Forge PSS object as the scheme parameter.
   *
   * @param md the message digest object with the hash to sign.
   * @param scheme the signature scheme to use:
   *          'RSASSA-PKCS1-V1_5' or undefined for RSASSA PKCS#1 v1.5,
   *          a Forge PSS object for RSASSA-PSS,
   *          'NONE' or null for none, DigestInfo will not be used but
   *            PKCS#1 v1.5 padding will still be used.
   *
   * @return the signature as a byte string.
   */
  key.sign = function(md, scheme) {
    /* Note: The internal implementation of RSA operations is being
      transitioned away from a PKCS#1 v1.5 hard-coded scheme. Some legacy
      code like the use of an encoding block identifier 'bt' will eventually
      be removed. */

    // private key operation
    var bt = false;

    if(typeof scheme === 'string') {
      scheme = scheme.toUpperCase();
    }

    if(scheme === undefined || scheme === 'RSASSA-PKCS1-V1_5') {
      scheme = {encode: emsaPkcs1v15encode};
      bt = 0x01;
    } else if(scheme === 'NONE' || scheme === 'NULL' || scheme === null) {
      scheme = {encode: function() {return md;}};
      bt = 0x01;
    }

    // encode and then encrypt
    var d = scheme.encode(md, key.n.bitLength());
    return pki.rsa.encrypt(d, key, bt);
  };

  return key;
};

/**
 * Wraps an RSAPrivateKey ASN.1 object in an ASN.1 PrivateKeyInfo object.
 *
 * @param rsaKey the ASN.1 RSAPrivateKey.
 *
 * @return the ASN.1 PrivateKeyInfo.
 */
pki.wrapRsaPrivateKey = function(rsaKey) {
  // PrivateKeyInfo
  return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
    // version (0)
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
      asn1.integerToDer(0).getBytes()),
    // privateKeyAlgorithm
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
      asn1.create(
        asn1.Class.UNIVERSAL, asn1.Type.OID, false,
        asn1.oidToDer(pki.oids.rsaEncryption).getBytes()),
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, '')
    ]),
    // PrivateKey
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, false,
      asn1.toDer(rsaKey).getBytes())
  ]);
};

/**
 * Converts a private key from an ASN.1 object.
 *
 * @param obj the ASN.1 representation of a PrivateKeyInfo containing an
 *          RSAPrivateKey or an RSAPrivateKey.
 *
 * @return the private key.
 */
pki.privateKeyFromAsn1 = function(obj) {
  // get PrivateKeyInfo
  var capture = {};
  var errors = [];
  if(asn1.validate(obj, privateKeyValidator, capture, errors)) {
    obj = asn1.fromDer(forge.util.createBuffer(capture.privateKey));
  }

  // get RSAPrivateKey
  capture = {};
  errors = [];
  if(!asn1.validate(obj, rsaPrivateKeyValidator, capture, errors)) {
    var error = new Error('Cannot read private key. ' +
      'ASN.1 object does not contain an RSAPrivateKey.');
    error.errors = errors;
    throw error;
  }

  // Note: Version is currently ignored.
  // capture.privateKeyVersion
  // FIXME: inefficient, get a BigInteger that uses byte strings
  var n, e, d, p, q, dP, dQ, qInv;
  n = forge.util.createBuffer(capture.privateKeyModulus).toHex();
  e = forge.util.createBuffer(capture.privateKeyPublicExponent).toHex();
  d = forge.util.createBuffer(capture.privateKeyPrivateExponent).toHex();
  p = forge.util.createBuffer(capture.privateKeyPrime1).toHex();
  q = forge.util.createBuffer(capture.privateKeyPrime2).toHex();
  dP = forge.util.createBuffer(capture.privateKeyExponent1).toHex();
  dQ = forge.util.createBuffer(capture.privateKeyExponent2).toHex();
  qInv = forge.util.createBuffer(capture.privateKeyCoefficient).toHex();

  // set private key
  return pki.setRsaPrivateKey(
    new BigInteger(n, 16),
    new BigInteger(e, 16),
    new BigInteger(d, 16),
    new BigInteger(p, 16),
    new BigInteger(q, 16),
    new BigInteger(dP, 16),
    new BigInteger(dQ, 16),
    new BigInteger(qInv, 16));
};

/**
 * Converts a private key to an ASN.1 RSAPrivateKey.
 *
 * @param key the private key.
 *
 * @return the ASN.1 representation of an RSAPrivateKey.
 */
pki.privateKeyToAsn1 = pki.privateKeyToRSAPrivateKey = function(key) {
  // RSAPrivateKey
  return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
    // version (0 = only 2 primes, 1 multiple primes)
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
      asn1.integerToDer(0).getBytes()),
    // modulus (n)
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
      _bnToBytes(key.n)),
    // publicExponent (e)
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
      _bnToBytes(key.e)),
    // privateExponent (d)
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
      _bnToBytes(key.d)),
    // privateKeyPrime1 (p)
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
      _bnToBytes(key.p)),
    // privateKeyPrime2 (q)
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
      _bnToBytes(key.q)),
    // privateKeyExponent1 (dP)
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
      _bnToBytes(key.dP)),
    // privateKeyExponent2 (dQ)
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
      _bnToBytes(key.dQ)),
    // coefficient (qInv)
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
      _bnToBytes(key.qInv))
  ]);
};

/**
 * Converts a public key from an ASN.1 SubjectPublicKeyInfo or RSAPublicKey.
 *
 * @param obj the asn1 representation of a SubjectPublicKeyInfo or RSAPublicKey.
 *
 * @return the public key.
 */
pki.publicKeyFromAsn1 = function(obj) {
  // get SubjectPublicKeyInfo
  var capture = {};
  var errors = [];
  if(asn1.validate(obj, publicKeyValidator, capture, errors)) {
    // get oid
    var oid = asn1.derToOid(capture.publicKeyOid);
    if(oid !== pki.oids.rsaEncryption) {
      var error = new Error('Cannot read public key. Unknown OID.');
      error.oid = oid;
      throw error;
    }
    obj = capture.rsaPublicKey;
  }

  // get RSA params
  errors = [];
  if(!asn1.validate(obj, rsaPublicKeyValidator, capture, errors)) {
    var error = new Error('Cannot read public key. ' +
      'ASN.1 object does not contain an RSAPublicKey.');
    error.errors = errors;
    throw error;
  }

  // FIXME: inefficient, get a BigInteger that uses byte strings
  var n = forge.util.createBuffer(capture.publicKeyModulus).toHex();
  var e = forge.util.createBuffer(capture.publicKeyExponent).toHex();

  // set public key
  return pki.setRsaPublicKey(
    new BigInteger(n, 16),
    new BigInteger(e, 16));
};

/**
 * Converts a public key to an ASN.1 SubjectPublicKeyInfo.
 *
 * @param key the public key.
 *
 * @return the asn1 representation of a SubjectPublicKeyInfo.
 */
pki.publicKeyToAsn1 = pki.publicKeyToSubjectPublicKeyInfo = function(key) {
  // SubjectPublicKeyInfo
  return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
    // AlgorithmIdentifier
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
      // algorithm
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
        asn1.oidToDer(pki.oids.rsaEncryption).getBytes()),
      // parameters (null)
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, '')
    ]),
    // subjectPublicKey
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.BITSTRING, false, [
      pki.publicKeyToRSAPublicKey(key)
    ])
  ]);
};

/**
 * Converts a public key to an ASN.1 RSAPublicKey.
 *
 * @param key the public key.
 *
 * @return the asn1 representation of a RSAPublicKey.
 */
pki.publicKeyToRSAPublicKey = function(key) {
  // RSAPublicKey
  return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
    // modulus (n)
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
      _bnToBytes(key.n)),
    // publicExponent (e)
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
      _bnToBytes(key.e))
  ]);
};

/**
 * Encodes a message using PKCS#1 v1.5 padding.
 *
 * @param m the message to encode.
 * @param key the RSA key to use.
 * @param bt the block type to use, i.e. either 0x01 (for signing) or 0x02
 *          (for encryption).
 *
 * @return the padded byte buffer.
 */
function _encodePkcs1_v1_5(m, key, bt) {
  var eb = forge.util.createBuffer();

  // get the length of the modulus in bytes
  var k = Math.ceil(key.n.bitLength() / 8);

  /* use PKCS#1 v1.5 padding */
  if(m.length > (k - 11)) {
    var error = new Error('Message is too long for PKCS#1 v1.5 padding.');
    error.length = m.length;
    error.max = k - 11;
    throw error;
  }

  /* A block type BT, a padding string PS, and the data D shall be
    formatted into an octet string EB, the encryption block:

    EB = 00 || BT || PS || 00 || D

    The block type BT shall be a single octet indicating the structure of
    the encryption block. For this version of the document it shall have
    value 00, 01, or 02. For a private-key operation, the block type
    shall be 00 or 01. For a public-key operation, it shall be 02.

    The padding string PS shall consist of k-3-||D|| octets. For block
    type 00, the octets shall have value 00; for block type 01, they
    shall have value FF; and for block type 02, they shall be
    pseudorandomly generated and nonzero. This makes the length of the
    encryption block EB equal to k. */

  // build the encryption block
  eb.putByte(0x00);
  eb.putByte(bt);

  // create the padding
  var padNum = k - 3 - m.length;
  var padByte;
  // private key op
  if(bt === 0x00 || bt === 0x01) {
    padByte = (bt === 0x00) ? 0x00 : 0xFF;
    for(var i = 0; i < padNum; ++i) {
      eb.putByte(padByte);
    }
  } else {
    // public key op
    // pad with random non-zero values
    while(padNum > 0) {
      var numZeros = 0;
      var padBytes = forge.random.getBytes(padNum);
      for(var i = 0; i < padNum; ++i) {
        padByte = padBytes.charCodeAt(i);
        if(padByte === 0) {
          ++numZeros;
        } else {
          eb.putByte(padByte);
        }
      }
      padNum = numZeros;
    }
  }

  // zero followed by message
  eb.putByte(0x00);
  eb.putBytes(m);

  return eb;
}

/**
 * Decodes a message using PKCS#1 v1.5 padding.
 *
 * @param em the message to decode.
 * @param key the RSA key to use.
 * @param pub true if the key is a public key, false if it is private.
 * @param ml the message length, if specified.
 *
 * @return the decoded bytes.
 */
function _decodePkcs1_v1_5(em, key, pub, ml) {
  // get the length of the modulus in bytes
  var k = Math.ceil(key.n.bitLength() / 8);

  /* It is an error if any of the following conditions occurs:

    1. The encryption block EB cannot be parsed unambiguously.
    2. The padding string PS consists of fewer than eight octets
      or is inconsisent with the block type BT.
    3. The decryption process is a public-key operation and the block
      type BT is not 00 or 01, or the decryption process is a
      private-key operation and the block type is not 02.
   */

  // parse the encryption block
  var eb = forge.util.createBuffer(em);
  var first = eb.getByte();
  var bt = eb.getByte();
  if(first !== 0x00 ||
    (pub && bt !== 0x00 && bt !== 0x01) ||
    (!pub && bt != 0x02) ||
    (pub && bt === 0x00 && typeof(ml) === 'undefined')) {
    throw new Error('Encryption block is invalid.');
  }

  var padNum = 0;
  if(bt === 0x00) {
    // check all padding bytes for 0x00
    padNum = k - 3 - ml;
    for(var i = 0; i < padNum; ++i) {
      if(eb.getByte() !== 0x00) {
        throw new Error('Encryption block is invalid.');
      }
    }
  } else if(bt === 0x01) {
    // find the first byte that isn't 0xFF, should be after all padding
    padNum = 0;
    while(eb.length() > 1) {
      if(eb.getByte() !== 0xFF) {
        --eb.read;
        break;
      }
      ++padNum;
    }
  } else if(bt === 0x02) {
    // look for 0x00 byte
    padNum = 0;
    while(eb.length() > 1) {
      if(eb.getByte() === 0x00) {
        --eb.read;
        break;
      }
      ++padNum;
    }
  }

  // zero must be 0x00 and padNum must be (k - 3 - message length)
  var zero = eb.getByte();
  if(zero !== 0x00 || padNum !== (k - 3 - eb.length())) {
    throw new Error('Encryption block is invalid.');
  }

  return eb.getBytes();
}

/**
 * Runs the key-generation algorithm asynchronously, either in the background
 * via Web Workers, or using the main thread and setImmediate.
 *
 * @param state the key-pair generation state.
 * @param [options] options for key-pair generation:
 *          workerScript the worker script URL.
 *          workers the number of web workers (if supported) to use,
 *            (default: 2, -1 to use estimated cores minus one).
 *          workLoad the size of the work load, ie: number of possible prime
 *            numbers for each web worker to check per work assignment,
 *            (default: 100).
 * @param callback(err, keypair) called once the operation completes.
 */
function _generateKeyPair(state, options, callback) {
  if(typeof options === 'function') {
    callback = options;
    options = {};
  }
  options = options || {};

  var opts = {
    algorithm: {
      name: options.algorithm || 'PRIMEINC',
      options: {
        workers: options.workers || 2,
        workLoad: options.workLoad || 100,
        workerScript: options.workerScript
      }
    }
  };
  if('prng' in options) {
    opts.prng = options.prng;
  }

  generate();

  function generate() {
    // find p and then q (done in series to simplify)
    getPrime(state.pBits, function(err, num) {
      if(err) {
        return callback(err);
      }
      state.p = num;
      if(state.q !== null) {
        return finish(err, state.q);
      }
      getPrime(state.qBits, finish);
    });
  }

  function getPrime(bits, callback) {
    forge.prime.generateProbablePrime(bits, opts, callback);
  }

  function finish(err, num) {
    if(err) {
      return callback(err);
    }

    // set q
    state.q = num;

    // ensure p is larger than q (swap them if not)
    if(state.p.compareTo(state.q) < 0) {
      var tmp = state.p;
      state.p = state.q;
      state.q = tmp;
    }

    // ensure p is coprime with e
    if(state.p.subtract(BigInteger.ONE).gcd(state.e)
      .compareTo(BigInteger.ONE) !== 0) {
      state.p = null;
      generate();
      return;
    }

    // ensure q is coprime with e
    if(state.q.subtract(BigInteger.ONE).gcd(state.e)
      .compareTo(BigInteger.ONE) !== 0) {
      state.q = null;
      getPrime(state.qBits, finish);
      return;
    }

    // compute phi: (p - 1)(q - 1) (Euler's totient function)
    state.p1 = state.p.subtract(BigInteger.ONE);
    state.q1 = state.q.subtract(BigInteger.ONE);
    state.phi = state.p1.multiply(state.q1);

    // ensure e and phi are coprime
    if(state.phi.gcd(state.e).compareTo(BigInteger.ONE) !== 0) {
      // phi and e aren't coprime, so generate a new p and q
      state.p = state.q = null;
      generate();
      return;
    }

    // create n, ensure n is has the right number of bits
    state.n = state.p.multiply(state.q);
    if(state.n.bitLength() !== state.bits) {
      // failed, get new q
      state.q = null;
      getPrime(state.qBits, finish);
      return;
    }

    // set keys
    var d = state.e.modInverse(state.phi);
    state.keys = {
      privateKey: pki.rsa.setPrivateKey(
        state.n, state.e, d, state.p, state.q,
        d.mod(state.p1), d.mod(state.q1),
        state.q.modInverse(state.p)),
      publicKey: pki.rsa.setPublicKey(state.n, state.e)
    };

    callback(null, state.keys);
  }
}

/**
 * Converts a positive BigInteger into 2's-complement big-endian bytes.
 *
 * @param b the big integer to convert.
 *
 * @return the bytes.
 */
function _bnToBytes(b) {
  // prepend 0x00 if first byte >= 0x80
  var hex = b.toString(16);
  if(hex[0] >= '8') {
    hex = '00' + hex;
  }
  var bytes = forge.util.hexToBytes(hex);

  // ensure integer is minimally-encoded
  if(bytes.length > 1 &&
    // leading 0x00 for positive integer
    ((bytes.charCodeAt(0) === 0 &&
    (bytes.charCodeAt(1) & 0x80) === 0) ||
    // leading 0xFF for negative integer
    (bytes.charCodeAt(0) === 0xFF &&
    (bytes.charCodeAt(1) & 0x80) === 0x80))) {
    return bytes.substr(1);
  }
  return bytes;
}

/**
 * Returns the required number of Miller-Rabin tests to generate a
 * prime with an error probability of (1/2)^80.
 *
 * See Handbook of Applied Cryptography Chapter 4, Table 4.4.
 *
 * @param bits the bit size.
 *
 * @return the required number of iterations.
 */
function _getMillerRabinTests(bits) {
  if(bits <= 100) return 27;
  if(bits <= 150) return 18;
  if(bits <= 200) return 15;
  if(bits <= 250) return 12;
  if(bits <= 300) return 9;
  if(bits <= 350) return 8;
  if(bits <= 400) return 7;
  if(bits <= 500) return 6;
  if(bits <= 600) return 5;
  if(bits <= 800) return 4;
  if(bits <= 1250) return 3;
  return 2;
}

/**
 * Performs feature detection on the Node crypto interface.
 *
 * @param fn the feature (function) to detect.
 *
 * @return true if detected, false if not.
 */
function _detectNodeCrypto(fn) {
  return forge.util.isNodejs && typeof _crypto[fn] === 'function';
}

/**
 * Performs feature detection on the SubtleCrypto interface.
 *
 * @param fn the feature (function) to detect.
 *
 * @return true if detected, false if not.
 */
function _detectSubtleCrypto(fn) {
  return (typeof util.globalScope !== 'undefined' &&
    typeof util.globalScope.crypto === 'object' &&
    typeof util.globalScope.crypto.subtle === 'object' &&
    typeof util.globalScope.crypto.subtle[fn] === 'function');
}

/**
 * Performs feature detection on the deprecated Microsoft Internet Explorer
 * outdated SubtleCrypto interface. This function should only be used after
 * checking for the modern, standard SubtleCrypto interface.
 *
 * @param fn the feature (function) to detect.
 *
 * @return true if detected, false if not.
 */
function _detectSubtleMsCrypto(fn) {
  return (typeof util.globalScope !== 'undefined' &&
    typeof util.globalScope.msCrypto === 'object' &&
    typeof util.globalScope.msCrypto.subtle === 'object' &&
    typeof util.globalScope.msCrypto.subtle[fn] === 'function');
}

function _intToUint8Array(x) {
  var bytes = forge.util.hexToBytes(x.toString(16));
  var buffer = new Uint8Array(bytes.length);
  for(var i = 0; i < bytes.length; ++i) {
    buffer[i] = bytes.charCodeAt(i);
  }
  return buffer;
}

function _privateKeyFromJwk(jwk) {
  if(jwk.kty !== 'RSA') {
    throw new Error(
      'Unsupported key algorithm "' + jwk.kty + '"; algorithm must be "RSA".');
  }
  return pki.setRsaPrivateKey(
    _base64ToBigInt(jwk.n),
    _base64ToBigInt(jwk.e),
    _base64ToBigInt(jwk.d),
    _base64ToBigInt(jwk.p),
    _base64ToBigInt(jwk.q),
    _base64ToBigInt(jwk.dp),
    _base64ToBigInt(jwk.dq),
    _base64ToBigInt(jwk.qi));
}

function _publicKeyFromJwk(jwk) {
  if(jwk.kty !== 'RSA') {
    throw new Error('Key algorithm must be "RSA".');
  }
  return pki.setRsaPublicKey(
    _base64ToBigInt(jwk.n),
    _base64ToBigInt(jwk.e));
}

function _base64ToBigInt(b64) {
  return new BigInteger(forge.util.bytesToHex(forge.util.decode64(b64)), 16);
}


/***/ }),

/***/ "./node_modules/node-forge/lib/sha1.js":
/*!*********************************************!*\
  !*** ./node_modules/node-forge/lib/sha1.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Secure Hash Algorithm with 160-bit digest (SHA-1) implementation.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2015 Digital Bazaar, Inc.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./md */ "./node_modules/node-forge/lib/md.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

var sha1 = module.exports = forge.sha1 = forge.sha1 || {};
forge.md.sha1 = forge.md.algorithms.sha1 = sha1;

/**
 * Creates a SHA-1 message digest object.
 *
 * @return a message digest object.
 */
sha1.create = function() {
  // do initialization as necessary
  if(!_initialized) {
    _init();
  }

  // SHA-1 state contains five 32-bit integers
  var _state = null;

  // input buffer
  var _input = forge.util.createBuffer();

  // used for word storage
  var _w = new Array(80);

  // message digest object
  var md = {
    algorithm: 'sha1',
    blockLength: 64,
    digestLength: 20,
    // 56-bit length of message so far (does not including padding)
    messageLength: 0,
    // true message length
    fullMessageLength: null,
    // size of message length in bytes
    messageLengthSize: 8
  };

  /**
   * Starts the digest.
   *
   * @return this digest object.
   */
  md.start = function() {
    // up to 56-bit message length for convenience
    md.messageLength = 0;

    // full message length (set md.messageLength64 for backwards-compatibility)
    md.fullMessageLength = md.messageLength64 = [];
    var int32s = md.messageLengthSize / 4;
    for(var i = 0; i < int32s; ++i) {
      md.fullMessageLength.push(0);
    }
    _input = forge.util.createBuffer();
    _state = {
      h0: 0x67452301,
      h1: 0xEFCDAB89,
      h2: 0x98BADCFE,
      h3: 0x10325476,
      h4: 0xC3D2E1F0
    };
    return md;
  };
  // start digest automatically for first time
  md.start();

  /**
   * Updates the digest with the given message input. The given input can
   * treated as raw input (no encoding will be applied) or an encoding of
   * 'utf8' maybe given to encode the input using UTF-8.
   *
   * @param msg the message input to update with.
   * @param encoding the encoding to use (default: 'raw', other: 'utf8').
   *
   * @return this digest object.
   */
  md.update = function(msg, encoding) {
    if(encoding === 'utf8') {
      msg = forge.util.encodeUtf8(msg);
    }

    // update message length
    var len = msg.length;
    md.messageLength += len;
    len = [(len / 0x100000000) >>> 0, len >>> 0];
    for(var i = md.fullMessageLength.length - 1; i >= 0; --i) {
      md.fullMessageLength[i] += len[1];
      len[1] = len[0] + ((md.fullMessageLength[i] / 0x100000000) >>> 0);
      md.fullMessageLength[i] = md.fullMessageLength[i] >>> 0;
      len[0] = ((len[1] / 0x100000000) >>> 0);
    }

    // add bytes to input buffer
    _input.putBytes(msg);

    // process bytes
    _update(_state, _w, _input);

    // compact input buffer every 2K or if empty
    if(_input.read > 2048 || _input.length() === 0) {
      _input.compact();
    }

    return md;
  };

  /**
   * Produces the digest.
   *
   * @return a byte buffer containing the digest value.
   */
  md.digest = function() {
    /* Note: Here we copy the remaining bytes in the input buffer and
    add the appropriate SHA-1 padding. Then we do the final update
    on a copy of the state so that if the user wants to get
    intermediate digests they can do so. */

    /* Determine the number of bytes that must be added to the message
    to ensure its length is congruent to 448 mod 512. In other words,
    the data to be digested must be a multiple of 512 bits (or 128 bytes).
    This data includes the message, some padding, and the length of the
    message. Since the length of the message will be encoded as 8 bytes (64
    bits), that means that the last segment of the data must have 56 bytes
    (448 bits) of message and padding. Therefore, the length of the message
    plus the padding must be congruent to 448 mod 512 because
    512 - 128 = 448.

    In order to fill up the message length it must be filled with
    padding that begins with 1 bit followed by all 0 bits. Padding
    must *always* be present, so if the message length is already
    congruent to 448 mod 512, then 512 padding bits must be added. */

    var finalBlock = forge.util.createBuffer();
    finalBlock.putBytes(_input.bytes());

    // compute remaining size to be digested (include message length size)
    var remaining = (
      md.fullMessageLength[md.fullMessageLength.length - 1] +
      md.messageLengthSize);

    // add padding for overflow blockSize - overflow
    // _padding starts with 1 byte with first bit is set (byte value 128), then
    // there may be up to (blockSize - 1) other pad bytes
    var overflow = remaining & (md.blockLength - 1);
    finalBlock.putBytes(_padding.substr(0, md.blockLength - overflow));

    // serialize message length in bits in big-endian order; since length
    // is stored in bytes we multiply by 8 and add carry from next int
    var next, carry;
    var bits = md.fullMessageLength[0] * 8;
    for(var i = 0; i < md.fullMessageLength.length - 1; ++i) {
      next = md.fullMessageLength[i + 1] * 8;
      carry = (next / 0x100000000) >>> 0;
      bits += carry;
      finalBlock.putInt32(bits >>> 0);
      bits = next >>> 0;
    }
    finalBlock.putInt32(bits);

    var s2 = {
      h0: _state.h0,
      h1: _state.h1,
      h2: _state.h2,
      h3: _state.h3,
      h4: _state.h4
    };
    _update(s2, _w, finalBlock);
    var rval = forge.util.createBuffer();
    rval.putInt32(s2.h0);
    rval.putInt32(s2.h1);
    rval.putInt32(s2.h2);
    rval.putInt32(s2.h3);
    rval.putInt32(s2.h4);
    return rval;
  };

  return md;
};

// sha-1 padding bytes not initialized yet
var _padding = null;
var _initialized = false;

/**
 * Initializes the constant tables.
 */
function _init() {
  // create padding
  _padding = String.fromCharCode(128);
  _padding += forge.util.fillString(String.fromCharCode(0x00), 64);

  // now initialized
  _initialized = true;
}

/**
 * Updates a SHA-1 state with the given byte buffer.
 *
 * @param s the SHA-1 state to update.
 * @param w the array to use to store words.
 * @param bytes the byte buffer to update with.
 */
function _update(s, w, bytes) {
  // consume 512 bit (64 byte) chunks
  var t, a, b, c, d, e, f, i;
  var len = bytes.length();
  while(len >= 64) {
    // the w array will be populated with sixteen 32-bit big-endian words
    // and then extended into 80 32-bit words according to SHA-1 algorithm
    // and for 32-79 using Max Locktyukhin's optimization

    // initialize hash value for this chunk
    a = s.h0;
    b = s.h1;
    c = s.h2;
    d = s.h3;
    e = s.h4;

    // round 1
    for(i = 0; i < 16; ++i) {
      t = bytes.getInt32();
      w[i] = t;
      f = d ^ (b & (c ^ d));
      t = ((a << 5) | (a >>> 27)) + f + e + 0x5A827999 + t;
      e = d;
      d = c;
      // `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
      c = ((b << 30) | (b >>> 2)) >>> 0;
      b = a;
      a = t;
    }
    for(; i < 20; ++i) {
      t = (w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16]);
      t = (t << 1) | (t >>> 31);
      w[i] = t;
      f = d ^ (b & (c ^ d));
      t = ((a << 5) | (a >>> 27)) + f + e + 0x5A827999 + t;
      e = d;
      d = c;
      // `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
      c = ((b << 30) | (b >>> 2)) >>> 0;
      b = a;
      a = t;
    }
    // round 2
    for(; i < 32; ++i) {
      t = (w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16]);
      t = (t << 1) | (t >>> 31);
      w[i] = t;
      f = b ^ c ^ d;
      t = ((a << 5) | (a >>> 27)) + f + e + 0x6ED9EBA1 + t;
      e = d;
      d = c;
      // `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
      c = ((b << 30) | (b >>> 2)) >>> 0;
      b = a;
      a = t;
    }
    for(; i < 40; ++i) {
      t = (w[i - 6] ^ w[i - 16] ^ w[i - 28] ^ w[i - 32]);
      t = (t << 2) | (t >>> 30);
      w[i] = t;
      f = b ^ c ^ d;
      t = ((a << 5) | (a >>> 27)) + f + e + 0x6ED9EBA1 + t;
      e = d;
      d = c;
      // `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
      c = ((b << 30) | (b >>> 2)) >>> 0;
      b = a;
      a = t;
    }
    // round 3
    for(; i < 60; ++i) {
      t = (w[i - 6] ^ w[i - 16] ^ w[i - 28] ^ w[i - 32]);
      t = (t << 2) | (t >>> 30);
      w[i] = t;
      f = (b & c) | (d & (b ^ c));
      t = ((a << 5) | (a >>> 27)) + f + e + 0x8F1BBCDC + t;
      e = d;
      d = c;
      // `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
      c = ((b << 30) | (b >>> 2)) >>> 0;
      b = a;
      a = t;
    }
    // round 4
    for(; i < 80; ++i) {
      t = (w[i - 6] ^ w[i - 16] ^ w[i - 28] ^ w[i - 32]);
      t = (t << 2) | (t >>> 30);
      w[i] = t;
      f = b ^ c ^ d;
      t = ((a << 5) | (a >>> 27)) + f + e + 0xCA62C1D6 + t;
      e = d;
      d = c;
      // `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
      c = ((b << 30) | (b >>> 2)) >>> 0;
      b = a;
      a = t;
    }

    // update hash state
    s.h0 = (s.h0 + a) | 0;
    s.h1 = (s.h1 + b) | 0;
    s.h2 = (s.h2 + c) | 0;
    s.h3 = (s.h3 + d) | 0;
    s.h4 = (s.h4 + e) | 0;

    len -= 64;
  }
}


/***/ }),

/***/ "./node_modules/node-forge/lib/sha256.js":
/*!***********************************************!*\
  !*** ./node_modules/node-forge/lib/sha256.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Secure Hash Algorithm with 256-bit digest (SHA-256) implementation.
 *
 * See FIPS 180-2 for details.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2015 Digital Bazaar, Inc.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./md */ "./node_modules/node-forge/lib/md.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

var sha256 = module.exports = forge.sha256 = forge.sha256 || {};
forge.md.sha256 = forge.md.algorithms.sha256 = sha256;

/**
 * Creates a SHA-256 message digest object.
 *
 * @return a message digest object.
 */
sha256.create = function() {
  // do initialization as necessary
  if(!_initialized) {
    _init();
  }

  // SHA-256 state contains eight 32-bit integers
  var _state = null;

  // input buffer
  var _input = forge.util.createBuffer();

  // used for word storage
  var _w = new Array(64);

  // message digest object
  var md = {
    algorithm: 'sha256',
    blockLength: 64,
    digestLength: 32,
    // 56-bit length of message so far (does not including padding)
    messageLength: 0,
    // true message length
    fullMessageLength: null,
    // size of message length in bytes
    messageLengthSize: 8
  };

  /**
   * Starts the digest.
   *
   * @return this digest object.
   */
  md.start = function() {
    // up to 56-bit message length for convenience
    md.messageLength = 0;

    // full message length (set md.messageLength64 for backwards-compatibility)
    md.fullMessageLength = md.messageLength64 = [];
    var int32s = md.messageLengthSize / 4;
    for(var i = 0; i < int32s; ++i) {
      md.fullMessageLength.push(0);
    }
    _input = forge.util.createBuffer();
    _state = {
      h0: 0x6A09E667,
      h1: 0xBB67AE85,
      h2: 0x3C6EF372,
      h3: 0xA54FF53A,
      h4: 0x510E527F,
      h5: 0x9B05688C,
      h6: 0x1F83D9AB,
      h7: 0x5BE0CD19
    };
    return md;
  };
  // start digest automatically for first time
  md.start();

  /**
   * Updates the digest with the given message input. The given input can
   * treated as raw input (no encoding will be applied) or an encoding of
   * 'utf8' maybe given to encode the input using UTF-8.
   *
   * @param msg the message input to update with.
   * @param encoding the encoding to use (default: 'raw', other: 'utf8').
   *
   * @return this digest object.
   */
  md.update = function(msg, encoding) {
    if(encoding === 'utf8') {
      msg = forge.util.encodeUtf8(msg);
    }

    // update message length
    var len = msg.length;
    md.messageLength += len;
    len = [(len / 0x100000000) >>> 0, len >>> 0];
    for(var i = md.fullMessageLength.length - 1; i >= 0; --i) {
      md.fullMessageLength[i] += len[1];
      len[1] = len[0] + ((md.fullMessageLength[i] / 0x100000000) >>> 0);
      md.fullMessageLength[i] = md.fullMessageLength[i] >>> 0;
      len[0] = ((len[1] / 0x100000000) >>> 0);
    }

    // add bytes to input buffer
    _input.putBytes(msg);

    // process bytes
    _update(_state, _w, _input);

    // compact input buffer every 2K or if empty
    if(_input.read > 2048 || _input.length() === 0) {
      _input.compact();
    }

    return md;
  };

  /**
   * Produces the digest.
   *
   * @return a byte buffer containing the digest value.
   */
  md.digest = function() {
    /* Note: Here we copy the remaining bytes in the input buffer and
    add the appropriate SHA-256 padding. Then we do the final update
    on a copy of the state so that if the user wants to get
    intermediate digests they can do so. */

    /* Determine the number of bytes that must be added to the message
    to ensure its length is congruent to 448 mod 512. In other words,
    the data to be digested must be a multiple of 512 bits (or 128 bytes).
    This data includes the message, some padding, and the length of the
    message. Since the length of the message will be encoded as 8 bytes (64
    bits), that means that the last segment of the data must have 56 bytes
    (448 bits) of message and padding. Therefore, the length of the message
    plus the padding must be congruent to 448 mod 512 because
    512 - 128 = 448.

    In order to fill up the message length it must be filled with
    padding that begins with 1 bit followed by all 0 bits. Padding
    must *always* be present, so if the message length is already
    congruent to 448 mod 512, then 512 padding bits must be added. */

    var finalBlock = forge.util.createBuffer();
    finalBlock.putBytes(_input.bytes());

    // compute remaining size to be digested (include message length size)
    var remaining = (
      md.fullMessageLength[md.fullMessageLength.length - 1] +
      md.messageLengthSize);

    // add padding for overflow blockSize - overflow
    // _padding starts with 1 byte with first bit is set (byte value 128), then
    // there may be up to (blockSize - 1) other pad bytes
    var overflow = remaining & (md.blockLength - 1);
    finalBlock.putBytes(_padding.substr(0, md.blockLength - overflow));

    // serialize message length in bits in big-endian order; since length
    // is stored in bytes we multiply by 8 and add carry from next int
    var next, carry;
    var bits = md.fullMessageLength[0] * 8;
    for(var i = 0; i < md.fullMessageLength.length - 1; ++i) {
      next = md.fullMessageLength[i + 1] * 8;
      carry = (next / 0x100000000) >>> 0;
      bits += carry;
      finalBlock.putInt32(bits >>> 0);
      bits = next >>> 0;
    }
    finalBlock.putInt32(bits);

    var s2 = {
      h0: _state.h0,
      h1: _state.h1,
      h2: _state.h2,
      h3: _state.h3,
      h4: _state.h4,
      h5: _state.h5,
      h6: _state.h6,
      h7: _state.h7
    };
    _update(s2, _w, finalBlock);
    var rval = forge.util.createBuffer();
    rval.putInt32(s2.h0);
    rval.putInt32(s2.h1);
    rval.putInt32(s2.h2);
    rval.putInt32(s2.h3);
    rval.putInt32(s2.h4);
    rval.putInt32(s2.h5);
    rval.putInt32(s2.h6);
    rval.putInt32(s2.h7);
    return rval;
  };

  return md;
};

// sha-256 padding bytes not initialized yet
var _padding = null;
var _initialized = false;

// table of constants
var _k = null;

/**
 * Initializes the constant tables.
 */
function _init() {
  // create padding
  _padding = String.fromCharCode(128);
  _padding += forge.util.fillString(String.fromCharCode(0x00), 64);

  // create K table for SHA-256
  _k = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5,
    0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
    0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
    0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
    0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
    0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3,
    0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
    0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
    0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];

  // now initialized
  _initialized = true;
}

/**
 * Updates a SHA-256 state with the given byte buffer.
 *
 * @param s the SHA-256 state to update.
 * @param w the array to use to store words.
 * @param bytes the byte buffer to update with.
 */
function _update(s, w, bytes) {
  // consume 512 bit (64 byte) chunks
  var t1, t2, s0, s1, ch, maj, i, a, b, c, d, e, f, g, h;
  var len = bytes.length();
  while(len >= 64) {
    // the w array will be populated with sixteen 32-bit big-endian words
    // and then extended into 64 32-bit words according to SHA-256
    for(i = 0; i < 16; ++i) {
      w[i] = bytes.getInt32();
    }
    for(; i < 64; ++i) {
      // XOR word 2 words ago rot right 17, rot right 19, shft right 10
      t1 = w[i - 2];
      t1 =
        ((t1 >>> 17) | (t1 << 15)) ^
        ((t1 >>> 19) | (t1 << 13)) ^
        (t1 >>> 10);
      // XOR word 15 words ago rot right 7, rot right 18, shft right 3
      t2 = w[i - 15];
      t2 =
        ((t2 >>> 7) | (t2 << 25)) ^
        ((t2 >>> 18) | (t2 << 14)) ^
        (t2 >>> 3);
      // sum(t1, word 7 ago, t2, word 16 ago) modulo 2^32
      w[i] = (t1 + w[i - 7] + t2 + w[i - 16]) | 0;
    }

    // initialize hash value for this chunk
    a = s.h0;
    b = s.h1;
    c = s.h2;
    d = s.h3;
    e = s.h4;
    f = s.h5;
    g = s.h6;
    h = s.h7;

    // round function
    for(i = 0; i < 64; ++i) {
      // Sum1(e)
      s1 =
        ((e >>> 6) | (e << 26)) ^
        ((e >>> 11) | (e << 21)) ^
        ((e >>> 25) | (e << 7));
      // Ch(e, f, g) (optimized the same way as SHA-1)
      ch = g ^ (e & (f ^ g));
      // Sum0(a)
      s0 =
        ((a >>> 2) | (a << 30)) ^
        ((a >>> 13) | (a << 19)) ^
        ((a >>> 22) | (a << 10));
      // Maj(a, b, c) (optimized the same way as SHA-1)
      maj = (a & b) | (c & (a ^ b));

      // main algorithm
      t1 = h + s1 + ch + _k[i] + w[i];
      t2 = s0 + maj;
      h = g;
      g = f;
      f = e;
      // `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
      // can't truncate with `| 0`
      e = (d + t1) >>> 0;
      d = c;
      c = b;
      b = a;
      // `>>> 0` necessary to avoid iOS/Safari 10 optimization bug
      // can't truncate with `| 0`
      a = (t1 + t2) >>> 0;
    }

    // update hash state
    s.h0 = (s.h0 + a) | 0;
    s.h1 = (s.h1 + b) | 0;
    s.h2 = (s.h2 + c) | 0;
    s.h3 = (s.h3 + d) | 0;
    s.h4 = (s.h4 + e) | 0;
    s.h5 = (s.h5 + f) | 0;
    s.h6 = (s.h6 + g) | 0;
    s.h7 = (s.h7 + h) | 0;
    len -= 64;
  }
}


/***/ }),

/***/ "./node_modules/node-forge/lib/util.js":
/*!*********************************************!*\
  !*** ./node_modules/node-forge/lib/util.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, setImmediate, global, Buffer) {/**
 * Utility functions for web applications.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2018 Digital Bazaar, Inc.
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
var baseN = __webpack_require__(/*! ./baseN */ "./node_modules/node-forge/lib/baseN.js");

/* Utilities API */
var util = module.exports = forge.util = forge.util || {};

// define setImmediate and nextTick
(function() {
  // use native nextTick (unless we're in webpack)
  // webpack (or better node-libs-browser polyfill) sets process.browser.
  // this way we can detect webpack properly
  if(typeof process !== 'undefined' && process.nextTick && !process.browser) {
    util.nextTick = process.nextTick;
    if(typeof setImmediate === 'function') {
      util.setImmediate = setImmediate;
    } else {
      // polyfill setImmediate with nextTick, older versions of node
      // (those w/o setImmediate) won't totally starve IO
      util.setImmediate = util.nextTick;
    }
    return;
  }

  // polyfill nextTick with native setImmediate
  if(typeof setImmediate === 'function') {
    util.setImmediate = function() { return setImmediate.apply(undefined, arguments); };
    util.nextTick = function(callback) {
      return setImmediate(callback);
    };
    return;
  }

  /* Note: A polyfill upgrade pattern is used here to allow combining
  polyfills. For example, MutationObserver is fast, but blocks UI updates,
  so it needs to allow UI updates periodically, so it falls back on
  postMessage or setTimeout. */

  // polyfill with setTimeout
  util.setImmediate = function(callback) {
    setTimeout(callback, 0);
  };

  // upgrade polyfill to use postMessage
  if(typeof window !== 'undefined' &&
    typeof window.postMessage === 'function') {
    var msg = 'forge.setImmediate';
    var callbacks = [];
    util.setImmediate = function(callback) {
      callbacks.push(callback);
      // only send message when one hasn't been sent in
      // the current turn of the event loop
      if(callbacks.length === 1) {
        window.postMessage(msg, '*');
      }
    };
    function handler(event) {
      if(event.source === window && event.data === msg) {
        event.stopPropagation();
        var copy = callbacks.slice();
        callbacks.length = 0;
        copy.forEach(function(callback) {
          callback();
        });
      }
    }
    window.addEventListener('message', handler, true);
  }

  // upgrade polyfill to use MutationObserver
  if(typeof MutationObserver !== 'undefined') {
    // polyfill with MutationObserver
    var now = Date.now();
    var attr = true;
    var div = document.createElement('div');
    var callbacks = [];
    new MutationObserver(function() {
      var copy = callbacks.slice();
      callbacks.length = 0;
      copy.forEach(function(callback) {
        callback();
      });
    }).observe(div, {attributes: true});
    var oldSetImmediate = util.setImmediate;
    util.setImmediate = function(callback) {
      if(Date.now() - now > 15) {
        now = Date.now();
        oldSetImmediate(callback);
      } else {
        callbacks.push(callback);
        // only trigger observer when it hasn't been triggered in
        // the current turn of the event loop
        if(callbacks.length === 1) {
          div.setAttribute('a', attr = !attr);
        }
      }
    };
  }

  util.nextTick = util.setImmediate;
})();

// check if running under Node.js
util.isNodejs =
  typeof process !== 'undefined' && process.versions && process.versions.node;


// 'self' will also work in Web Workers (instance of WorkerGlobalScope) while
// it will point to `window` in the main thread.
// To remain compatible with older browsers, we fall back to 'window' if 'self'
// is not available.
util.globalScope = (function() {
  if(util.isNodejs) {
    return global;
  }

  return typeof self === 'undefined' ? window : self;
})();

// define isArray
util.isArray = Array.isArray || function(x) {
  return Object.prototype.toString.call(x) === '[object Array]';
};

// define isArrayBuffer
util.isArrayBuffer = function(x) {
  return typeof ArrayBuffer !== 'undefined' && x instanceof ArrayBuffer;
};

// define isArrayBufferView
util.isArrayBufferView = function(x) {
  return x && util.isArrayBuffer(x.buffer) && x.byteLength !== undefined;
};

/**
 * Ensure a bits param is 8, 16, 24, or 32. Used to validate input for
 * algorithms where bit manipulation, JavaScript limitations, and/or algorithm
 * design only allow for byte operations of a limited size.
 *
 * @param n number of bits.
 *
 * Throw Error if n invalid.
 */
function _checkBitsParam(n) {
  if(!(n === 8 || n === 16 || n === 24 || n === 32)) {
    throw new Error('Only 8, 16, 24, or 32 bits supported: ' + n);
  }
}

// TODO: set ByteBuffer to best available backing
util.ByteBuffer = ByteStringBuffer;

/** Buffer w/BinaryString backing */

/**
 * Constructor for a binary string backed byte buffer.
 *
 * @param [b] the bytes to wrap (either encoded as string, one byte per
 *          character, or as an ArrayBuffer or Typed Array).
 */
function ByteStringBuffer(b) {
  // TODO: update to match DataBuffer API

  // the data in this buffer
  this.data = '';
  // the pointer for reading from this buffer
  this.read = 0;

  if(typeof b === 'string') {
    this.data = b;
  } else if(util.isArrayBuffer(b) || util.isArrayBufferView(b)) {
    if(typeof Buffer !== 'undefined' && b instanceof Buffer) {
      this.data = b.toString('binary');
    } else {
      // convert native buffer to forge buffer
      // FIXME: support native buffers internally instead
      var arr = new Uint8Array(b);
      try {
        this.data = String.fromCharCode.apply(null, arr);
      } catch(e) {
        for(var i = 0; i < arr.length; ++i) {
          this.putByte(arr[i]);
        }
      }
    }
  } else if(b instanceof ByteStringBuffer ||
    (typeof b === 'object' && typeof b.data === 'string' &&
    typeof b.read === 'number')) {
    // copy existing buffer
    this.data = b.data;
    this.read = b.read;
  }

  // used for v8 optimization
  this._constructedStringLength = 0;
}
util.ByteStringBuffer = ByteStringBuffer;

/* Note: This is an optimization for V8-based browsers. When V8 concatenates
  a string, the strings are only joined logically using a "cons string" or
  "constructed/concatenated string". These containers keep references to one
  another and can result in very large memory usage. For example, if a 2MB
  string is constructed by concatenating 4 bytes together at a time, the
  memory usage will be ~44MB; so ~22x increase. The strings are only joined
  together when an operation requiring their joining takes place, such as
  substr(). This function is called when adding data to this buffer to ensure
  these types of strings are periodically joined to reduce the memory
  footprint. */
var _MAX_CONSTRUCTED_STRING_LENGTH = 4096;
util.ByteStringBuffer.prototype._optimizeConstructedString = function(x) {
  this._constructedStringLength += x;
  if(this._constructedStringLength > _MAX_CONSTRUCTED_STRING_LENGTH) {
    // this substr() should cause the constructed string to join
    this.data.substr(0, 1);
    this._constructedStringLength = 0;
  }
};

/**
 * Gets the number of bytes in this buffer.
 *
 * @return the number of bytes in this buffer.
 */
util.ByteStringBuffer.prototype.length = function() {
  return this.data.length - this.read;
};

/**
 * Gets whether or not this buffer is empty.
 *
 * @return true if this buffer is empty, false if not.
 */
util.ByteStringBuffer.prototype.isEmpty = function() {
  return this.length() <= 0;
};

/**
 * Puts a byte in this buffer.
 *
 * @param b the byte to put.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putByte = function(b) {
  return this.putBytes(String.fromCharCode(b));
};

/**
 * Puts a byte in this buffer N times.
 *
 * @param b the byte to put.
 * @param n the number of bytes of value b to put.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.fillWithByte = function(b, n) {
  b = String.fromCharCode(b);
  var d = this.data;
  while(n > 0) {
    if(n & 1) {
      d += b;
    }
    n >>>= 1;
    if(n > 0) {
      b += b;
    }
  }
  this.data = d;
  this._optimizeConstructedString(n);
  return this;
};

/**
 * Puts bytes in this buffer.
 *
 * @param bytes the bytes (as a UTF-8 encoded string) to put.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putBytes = function(bytes) {
  this.data += bytes;
  this._optimizeConstructedString(bytes.length);
  return this;
};

/**
 * Puts a UTF-16 encoded string into this buffer.
 *
 * @param str the string to put.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putString = function(str) {
  return this.putBytes(util.encodeUtf8(str));
};

/**
 * Puts a 16-bit integer in this buffer in big-endian order.
 *
 * @param i the 16-bit integer.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putInt16 = function(i) {
  return this.putBytes(
    String.fromCharCode(i >> 8 & 0xFF) +
    String.fromCharCode(i & 0xFF));
};

/**
 * Puts a 24-bit integer in this buffer in big-endian order.
 *
 * @param i the 24-bit integer.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putInt24 = function(i) {
  return this.putBytes(
    String.fromCharCode(i >> 16 & 0xFF) +
    String.fromCharCode(i >> 8 & 0xFF) +
    String.fromCharCode(i & 0xFF));
};

/**
 * Puts a 32-bit integer in this buffer in big-endian order.
 *
 * @param i the 32-bit integer.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putInt32 = function(i) {
  return this.putBytes(
    String.fromCharCode(i >> 24 & 0xFF) +
    String.fromCharCode(i >> 16 & 0xFF) +
    String.fromCharCode(i >> 8 & 0xFF) +
    String.fromCharCode(i & 0xFF));
};

/**
 * Puts a 16-bit integer in this buffer in little-endian order.
 *
 * @param i the 16-bit integer.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putInt16Le = function(i) {
  return this.putBytes(
    String.fromCharCode(i & 0xFF) +
    String.fromCharCode(i >> 8 & 0xFF));
};

/**
 * Puts a 24-bit integer in this buffer in little-endian order.
 *
 * @param i the 24-bit integer.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putInt24Le = function(i) {
  return this.putBytes(
    String.fromCharCode(i & 0xFF) +
    String.fromCharCode(i >> 8 & 0xFF) +
    String.fromCharCode(i >> 16 & 0xFF));
};

/**
 * Puts a 32-bit integer in this buffer in little-endian order.
 *
 * @param i the 32-bit integer.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putInt32Le = function(i) {
  return this.putBytes(
    String.fromCharCode(i & 0xFF) +
    String.fromCharCode(i >> 8 & 0xFF) +
    String.fromCharCode(i >> 16 & 0xFF) +
    String.fromCharCode(i >> 24 & 0xFF));
};

/**
 * Puts an n-bit integer in this buffer in big-endian order.
 *
 * @param i the n-bit integer.
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putInt = function(i, n) {
  _checkBitsParam(n);
  var bytes = '';
  do {
    n -= 8;
    bytes += String.fromCharCode((i >> n) & 0xFF);
  } while(n > 0);
  return this.putBytes(bytes);
};

/**
 * Puts a signed n-bit integer in this buffer in big-endian order. Two's
 * complement representation is used.
 *
 * @param i the n-bit integer.
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putSignedInt = function(i, n) {
  // putInt checks n
  if(i < 0) {
    i += 2 << (n - 1);
  }
  return this.putInt(i, n);
};

/**
 * Puts the given buffer into this buffer.
 *
 * @param buffer the buffer to put into this one.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.putBuffer = function(buffer) {
  return this.putBytes(buffer.getBytes());
};

/**
 * Gets a byte from this buffer and advances the read pointer by 1.
 *
 * @return the byte.
 */
util.ByteStringBuffer.prototype.getByte = function() {
  return this.data.charCodeAt(this.read++);
};

/**
 * Gets a uint16 from this buffer in big-endian order and advances the read
 * pointer by 2.
 *
 * @return the uint16.
 */
util.ByteStringBuffer.prototype.getInt16 = function() {
  var rval = (
    this.data.charCodeAt(this.read) << 8 ^
    this.data.charCodeAt(this.read + 1));
  this.read += 2;
  return rval;
};

/**
 * Gets a uint24 from this buffer in big-endian order and advances the read
 * pointer by 3.
 *
 * @return the uint24.
 */
util.ByteStringBuffer.prototype.getInt24 = function() {
  var rval = (
    this.data.charCodeAt(this.read) << 16 ^
    this.data.charCodeAt(this.read + 1) << 8 ^
    this.data.charCodeAt(this.read + 2));
  this.read += 3;
  return rval;
};

/**
 * Gets a uint32 from this buffer in big-endian order and advances the read
 * pointer by 4.
 *
 * @return the word.
 */
util.ByteStringBuffer.prototype.getInt32 = function() {
  var rval = (
    this.data.charCodeAt(this.read) << 24 ^
    this.data.charCodeAt(this.read + 1) << 16 ^
    this.data.charCodeAt(this.read + 2) << 8 ^
    this.data.charCodeAt(this.read + 3));
  this.read += 4;
  return rval;
};

/**
 * Gets a uint16 from this buffer in little-endian order and advances the read
 * pointer by 2.
 *
 * @return the uint16.
 */
util.ByteStringBuffer.prototype.getInt16Le = function() {
  var rval = (
    this.data.charCodeAt(this.read) ^
    this.data.charCodeAt(this.read + 1) << 8);
  this.read += 2;
  return rval;
};

/**
 * Gets a uint24 from this buffer in little-endian order and advances the read
 * pointer by 3.
 *
 * @return the uint24.
 */
util.ByteStringBuffer.prototype.getInt24Le = function() {
  var rval = (
    this.data.charCodeAt(this.read) ^
    this.data.charCodeAt(this.read + 1) << 8 ^
    this.data.charCodeAt(this.read + 2) << 16);
  this.read += 3;
  return rval;
};

/**
 * Gets a uint32 from this buffer in little-endian order and advances the read
 * pointer by 4.
 *
 * @return the word.
 */
util.ByteStringBuffer.prototype.getInt32Le = function() {
  var rval = (
    this.data.charCodeAt(this.read) ^
    this.data.charCodeAt(this.read + 1) << 8 ^
    this.data.charCodeAt(this.read + 2) << 16 ^
    this.data.charCodeAt(this.read + 3) << 24);
  this.read += 4;
  return rval;
};

/**
 * Gets an n-bit integer from this buffer in big-endian order and advances the
 * read pointer by ceil(n/8).
 *
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return the integer.
 */
util.ByteStringBuffer.prototype.getInt = function(n) {
  _checkBitsParam(n);
  var rval = 0;
  do {
    // TODO: Use (rval * 0x100) if adding support for 33 to 53 bits.
    rval = (rval << 8) + this.data.charCodeAt(this.read++);
    n -= 8;
  } while(n > 0);
  return rval;
};

/**
 * Gets a signed n-bit integer from this buffer in big-endian order, using
 * two's complement, and advances the read pointer by n/8.
 *
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return the integer.
 */
util.ByteStringBuffer.prototype.getSignedInt = function(n) {
  // getInt checks n
  var x = this.getInt(n);
  var max = 2 << (n - 2);
  if(x >= max) {
    x -= max << 1;
  }
  return x;
};

/**
 * Reads bytes out into a UTF-8 string and clears them from the buffer.
 *
 * @param count the number of bytes to read, undefined or null for all.
 *
 * @return a UTF-8 string of bytes.
 */
util.ByteStringBuffer.prototype.getBytes = function(count) {
  var rval;
  if(count) {
    // read count bytes
    count = Math.min(this.length(), count);
    rval = this.data.slice(this.read, this.read + count);
    this.read += count;
  } else if(count === 0) {
    rval = '';
  } else {
    // read all bytes, optimize to only copy when needed
    rval = (this.read === 0) ? this.data : this.data.slice(this.read);
    this.clear();
  }
  return rval;
};

/**
 * Gets a UTF-8 encoded string of the bytes from this buffer without modifying
 * the read pointer.
 *
 * @param count the number of bytes to get, omit to get all.
 *
 * @return a string full of UTF-8 encoded characters.
 */
util.ByteStringBuffer.prototype.bytes = function(count) {
  return (typeof(count) === 'undefined' ?
    this.data.slice(this.read) :
    this.data.slice(this.read, this.read + count));
};

/**
 * Gets a byte at the given index without modifying the read pointer.
 *
 * @param i the byte index.
 *
 * @return the byte.
 */
util.ByteStringBuffer.prototype.at = function(i) {
  return this.data.charCodeAt(this.read + i);
};

/**
 * Puts a byte at the given index without modifying the read pointer.
 *
 * @param i the byte index.
 * @param b the byte to put.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.setAt = function(i, b) {
  this.data = this.data.substr(0, this.read + i) +
    String.fromCharCode(b) +
    this.data.substr(this.read + i + 1);
  return this;
};

/**
 * Gets the last byte without modifying the read pointer.
 *
 * @return the last byte.
 */
util.ByteStringBuffer.prototype.last = function() {
  return this.data.charCodeAt(this.data.length - 1);
};

/**
 * Creates a copy of this buffer.
 *
 * @return the copy.
 */
util.ByteStringBuffer.prototype.copy = function() {
  var c = util.createBuffer(this.data);
  c.read = this.read;
  return c;
};

/**
 * Compacts this buffer.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.compact = function() {
  if(this.read > 0) {
    this.data = this.data.slice(this.read);
    this.read = 0;
  }
  return this;
};

/**
 * Clears this buffer.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.clear = function() {
  this.data = '';
  this.read = 0;
  return this;
};

/**
 * Shortens this buffer by triming bytes off of the end of this buffer.
 *
 * @param count the number of bytes to trim off.
 *
 * @return this buffer.
 */
util.ByteStringBuffer.prototype.truncate = function(count) {
  var len = Math.max(0, this.length() - count);
  this.data = this.data.substr(this.read, len);
  this.read = 0;
  return this;
};

/**
 * Converts this buffer to a hexadecimal string.
 *
 * @return a hexadecimal string.
 */
util.ByteStringBuffer.prototype.toHex = function() {
  var rval = '';
  for(var i = this.read; i < this.data.length; ++i) {
    var b = this.data.charCodeAt(i);
    if(b < 16) {
      rval += '0';
    }
    rval += b.toString(16);
  }
  return rval;
};

/**
 * Converts this buffer to a UTF-16 string (standard JavaScript string).
 *
 * @return a UTF-16 string.
 */
util.ByteStringBuffer.prototype.toString = function() {
  return util.decodeUtf8(this.bytes());
};

/** End Buffer w/BinaryString backing */

/** Buffer w/UInt8Array backing */

/**
 * FIXME: Experimental. Do not use yet.
 *
 * Constructor for an ArrayBuffer-backed byte buffer.
 *
 * The buffer may be constructed from a string, an ArrayBuffer, DataView, or a
 * TypedArray.
 *
 * If a string is given, its encoding should be provided as an option,
 * otherwise it will default to 'binary'. A 'binary' string is encoded such
 * that each character is one byte in length and size.
 *
 * If an ArrayBuffer, DataView, or TypedArray is given, it will be used
 * *directly* without any copying. Note that, if a write to the buffer requires
 * more space, the buffer will allocate a new backing ArrayBuffer to
 * accommodate. The starting read and write offsets for the buffer may be
 * given as options.
 *
 * @param [b] the initial bytes for this buffer.
 * @param options the options to use:
 *          [readOffset] the starting read offset to use (default: 0).
 *          [writeOffset] the starting write offset to use (default: the
 *            length of the first parameter).
 *          [growSize] the minimum amount, in bytes, to grow the buffer by to
 *            accommodate writes (default: 1024).
 *          [encoding] the encoding ('binary', 'utf8', 'utf16', 'hex') for the
 *            first parameter, if it is a string (default: 'binary').
 */
function DataBuffer(b, options) {
  // default options
  options = options || {};

  // pointers for read from/write to buffer
  this.read = options.readOffset || 0;
  this.growSize = options.growSize || 1024;

  var isArrayBuffer = util.isArrayBuffer(b);
  var isArrayBufferView = util.isArrayBufferView(b);
  if(isArrayBuffer || isArrayBufferView) {
    // use ArrayBuffer directly
    if(isArrayBuffer) {
      this.data = new DataView(b);
    } else {
      // TODO: adjust read/write offset based on the type of view
      // or specify that this must be done in the options ... that the
      // offsets are byte-based
      this.data = new DataView(b.buffer, b.byteOffset, b.byteLength);
    }
    this.write = ('writeOffset' in options ?
      options.writeOffset : this.data.byteLength);
    return;
  }

  // initialize to empty array buffer and add any given bytes using putBytes
  this.data = new DataView(new ArrayBuffer(0));
  this.write = 0;

  if(b !== null && b !== undefined) {
    this.putBytes(b);
  }

  if('writeOffset' in options) {
    this.write = options.writeOffset;
  }
}
util.DataBuffer = DataBuffer;

/**
 * Gets the number of bytes in this buffer.
 *
 * @return the number of bytes in this buffer.
 */
util.DataBuffer.prototype.length = function() {
  return this.write - this.read;
};

/**
 * Gets whether or not this buffer is empty.
 *
 * @return true if this buffer is empty, false if not.
 */
util.DataBuffer.prototype.isEmpty = function() {
  return this.length() <= 0;
};

/**
 * Ensures this buffer has enough empty space to accommodate the given number
 * of bytes. An optional parameter may be given that indicates a minimum
 * amount to grow the buffer if necessary. If the parameter is not given,
 * the buffer will be grown by some previously-specified default amount
 * or heuristic.
 *
 * @param amount the number of bytes to accommodate.
 * @param [growSize] the minimum amount, in bytes, to grow the buffer by if
 *          necessary.
 */
util.DataBuffer.prototype.accommodate = function(amount, growSize) {
  if(this.length() >= amount) {
    return this;
  }
  growSize = Math.max(growSize || this.growSize, amount);

  // grow buffer
  var src = new Uint8Array(
    this.data.buffer, this.data.byteOffset, this.data.byteLength);
  var dst = new Uint8Array(this.length() + growSize);
  dst.set(src);
  this.data = new DataView(dst.buffer);

  return this;
};

/**
 * Puts a byte in this buffer.
 *
 * @param b the byte to put.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putByte = function(b) {
  this.accommodate(1);
  this.data.setUint8(this.write++, b);
  return this;
};

/**
 * Puts a byte in this buffer N times.
 *
 * @param b the byte to put.
 * @param n the number of bytes of value b to put.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.fillWithByte = function(b, n) {
  this.accommodate(n);
  for(var i = 0; i < n; ++i) {
    this.data.setUint8(b);
  }
  return this;
};

/**
 * Puts bytes in this buffer. The bytes may be given as a string, an
 * ArrayBuffer, a DataView, or a TypedArray.
 *
 * @param bytes the bytes to put.
 * @param [encoding] the encoding for the first parameter ('binary', 'utf8',
 *          'utf16', 'hex'), if it is a string (default: 'binary').
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putBytes = function(bytes, encoding) {
  if(util.isArrayBufferView(bytes)) {
    var src = new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    var len = src.byteLength - src.byteOffset;
    this.accommodate(len);
    var dst = new Uint8Array(this.data.buffer, this.write);
    dst.set(src);
    this.write += len;
    return this;
  }

  if(util.isArrayBuffer(bytes)) {
    var src = new Uint8Array(bytes);
    this.accommodate(src.byteLength);
    var dst = new Uint8Array(this.data.buffer);
    dst.set(src, this.write);
    this.write += src.byteLength;
    return this;
  }

  // bytes is a util.DataBuffer or equivalent
  if(bytes instanceof util.DataBuffer ||
    (typeof bytes === 'object' &&
    typeof bytes.read === 'number' && typeof bytes.write === 'number' &&
    util.isArrayBufferView(bytes.data))) {
    var src = new Uint8Array(bytes.data.byteLength, bytes.read, bytes.length());
    this.accommodate(src.byteLength);
    var dst = new Uint8Array(bytes.data.byteLength, this.write);
    dst.set(src);
    this.write += src.byteLength;
    return this;
  }

  if(bytes instanceof util.ByteStringBuffer) {
    // copy binary string and process as the same as a string parameter below
    bytes = bytes.data;
    encoding = 'binary';
  }

  // string conversion
  encoding = encoding || 'binary';
  if(typeof bytes === 'string') {
    var view;

    // decode from string
    if(encoding === 'hex') {
      this.accommodate(Math.ceil(bytes.length / 2));
      view = new Uint8Array(this.data.buffer, this.write);
      this.write += util.binary.hex.decode(bytes, view, this.write);
      return this;
    }
    if(encoding === 'base64') {
      this.accommodate(Math.ceil(bytes.length / 4) * 3);
      view = new Uint8Array(this.data.buffer, this.write);
      this.write += util.binary.base64.decode(bytes, view, this.write);
      return this;
    }

    // encode text as UTF-8 bytes
    if(encoding === 'utf8') {
      // encode as UTF-8 then decode string as raw binary
      bytes = util.encodeUtf8(bytes);
      encoding = 'binary';
    }

    // decode string as raw binary
    if(encoding === 'binary' || encoding === 'raw') {
      // one byte per character
      this.accommodate(bytes.length);
      view = new Uint8Array(this.data.buffer, this.write);
      this.write += util.binary.raw.decode(view);
      return this;
    }

    // encode text as UTF-16 bytes
    if(encoding === 'utf16') {
      // two bytes per character
      this.accommodate(bytes.length * 2);
      view = new Uint16Array(this.data.buffer, this.write);
      this.write += util.text.utf16.encode(view);
      return this;
    }

    throw new Error('Invalid encoding: ' + encoding);
  }

  throw Error('Invalid parameter: ' + bytes);
};

/**
 * Puts the given buffer into this buffer.
 *
 * @param buffer the buffer to put into this one.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putBuffer = function(buffer) {
  this.putBytes(buffer);
  buffer.clear();
  return this;
};

/**
 * Puts a string into this buffer.
 *
 * @param str the string to put.
 * @param [encoding] the encoding for the string (default: 'utf16').
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putString = function(str) {
  return this.putBytes(str, 'utf16');
};

/**
 * Puts a 16-bit integer in this buffer in big-endian order.
 *
 * @param i the 16-bit integer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putInt16 = function(i) {
  this.accommodate(2);
  this.data.setInt16(this.write, i);
  this.write += 2;
  return this;
};

/**
 * Puts a 24-bit integer in this buffer in big-endian order.
 *
 * @param i the 24-bit integer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putInt24 = function(i) {
  this.accommodate(3);
  this.data.setInt16(this.write, i >> 8 & 0xFFFF);
  this.data.setInt8(this.write, i >> 16 & 0xFF);
  this.write += 3;
  return this;
};

/**
 * Puts a 32-bit integer in this buffer in big-endian order.
 *
 * @param i the 32-bit integer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putInt32 = function(i) {
  this.accommodate(4);
  this.data.setInt32(this.write, i);
  this.write += 4;
  return this;
};

/**
 * Puts a 16-bit integer in this buffer in little-endian order.
 *
 * @param i the 16-bit integer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putInt16Le = function(i) {
  this.accommodate(2);
  this.data.setInt16(this.write, i, true);
  this.write += 2;
  return this;
};

/**
 * Puts a 24-bit integer in this buffer in little-endian order.
 *
 * @param i the 24-bit integer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putInt24Le = function(i) {
  this.accommodate(3);
  this.data.setInt8(this.write, i >> 16 & 0xFF);
  this.data.setInt16(this.write, i >> 8 & 0xFFFF, true);
  this.write += 3;
  return this;
};

/**
 * Puts a 32-bit integer in this buffer in little-endian order.
 *
 * @param i the 32-bit integer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putInt32Le = function(i) {
  this.accommodate(4);
  this.data.setInt32(this.write, i, true);
  this.write += 4;
  return this;
};

/**
 * Puts an n-bit integer in this buffer in big-endian order.
 *
 * @param i the n-bit integer.
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putInt = function(i, n) {
  _checkBitsParam(n);
  this.accommodate(n / 8);
  do {
    n -= 8;
    this.data.setInt8(this.write++, (i >> n) & 0xFF);
  } while(n > 0);
  return this;
};

/**
 * Puts a signed n-bit integer in this buffer in big-endian order. Two's
 * complement representation is used.
 *
 * @param i the n-bit integer.
 * @param n the number of bits in the integer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.putSignedInt = function(i, n) {
  _checkBitsParam(n);
  this.accommodate(n / 8);
  if(i < 0) {
    i += 2 << (n - 1);
  }
  return this.putInt(i, n);
};

/**
 * Gets a byte from this buffer and advances the read pointer by 1.
 *
 * @return the byte.
 */
util.DataBuffer.prototype.getByte = function() {
  return this.data.getInt8(this.read++);
};

/**
 * Gets a uint16 from this buffer in big-endian order and advances the read
 * pointer by 2.
 *
 * @return the uint16.
 */
util.DataBuffer.prototype.getInt16 = function() {
  var rval = this.data.getInt16(this.read);
  this.read += 2;
  return rval;
};

/**
 * Gets a uint24 from this buffer in big-endian order and advances the read
 * pointer by 3.
 *
 * @return the uint24.
 */
util.DataBuffer.prototype.getInt24 = function() {
  var rval = (
    this.data.getInt16(this.read) << 8 ^
    this.data.getInt8(this.read + 2));
  this.read += 3;
  return rval;
};

/**
 * Gets a uint32 from this buffer in big-endian order and advances the read
 * pointer by 4.
 *
 * @return the word.
 */
util.DataBuffer.prototype.getInt32 = function() {
  var rval = this.data.getInt32(this.read);
  this.read += 4;
  return rval;
};

/**
 * Gets a uint16 from this buffer in little-endian order and advances the read
 * pointer by 2.
 *
 * @return the uint16.
 */
util.DataBuffer.prototype.getInt16Le = function() {
  var rval = this.data.getInt16(this.read, true);
  this.read += 2;
  return rval;
};

/**
 * Gets a uint24 from this buffer in little-endian order and advances the read
 * pointer by 3.
 *
 * @return the uint24.
 */
util.DataBuffer.prototype.getInt24Le = function() {
  var rval = (
    this.data.getInt8(this.read) ^
    this.data.getInt16(this.read + 1, true) << 8);
  this.read += 3;
  return rval;
};

/**
 * Gets a uint32 from this buffer in little-endian order and advances the read
 * pointer by 4.
 *
 * @return the word.
 */
util.DataBuffer.prototype.getInt32Le = function() {
  var rval = this.data.getInt32(this.read, true);
  this.read += 4;
  return rval;
};

/**
 * Gets an n-bit integer from this buffer in big-endian order and advances the
 * read pointer by n/8.
 *
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return the integer.
 */
util.DataBuffer.prototype.getInt = function(n) {
  _checkBitsParam(n);
  var rval = 0;
  do {
    // TODO: Use (rval * 0x100) if adding support for 33 to 53 bits.
    rval = (rval << 8) + this.data.getInt8(this.read++);
    n -= 8;
  } while(n > 0);
  return rval;
};

/**
 * Gets a signed n-bit integer from this buffer in big-endian order, using
 * two's complement, and advances the read pointer by n/8.
 *
 * @param n the number of bits in the integer (8, 16, 24, or 32).
 *
 * @return the integer.
 */
util.DataBuffer.prototype.getSignedInt = function(n) {
  // getInt checks n
  var x = this.getInt(n);
  var max = 2 << (n - 2);
  if(x >= max) {
    x -= max << 1;
  }
  return x;
};

/**
 * Reads bytes out into a UTF-8 string and clears them from the buffer.
 *
 * @param count the number of bytes to read, undefined or null for all.
 *
 * @return a UTF-8 string of bytes.
 */
util.DataBuffer.prototype.getBytes = function(count) {
  // TODO: deprecate this method, it is poorly named and
  // this.toString('binary') replaces it
  // add a toTypedArray()/toArrayBuffer() function
  var rval;
  if(count) {
    // read count bytes
    count = Math.min(this.length(), count);
    rval = this.data.slice(this.read, this.read + count);
    this.read += count;
  } else if(count === 0) {
    rval = '';
  } else {
    // read all bytes, optimize to only copy when needed
    rval = (this.read === 0) ? this.data : this.data.slice(this.read);
    this.clear();
  }
  return rval;
};

/**
 * Gets a UTF-8 encoded string of the bytes from this buffer without modifying
 * the read pointer.
 *
 * @param count the number of bytes to get, omit to get all.
 *
 * @return a string full of UTF-8 encoded characters.
 */
util.DataBuffer.prototype.bytes = function(count) {
  // TODO: deprecate this method, it is poorly named, add "getString()"
  return (typeof(count) === 'undefined' ?
    this.data.slice(this.read) :
    this.data.slice(this.read, this.read + count));
};

/**
 * Gets a byte at the given index without modifying the read pointer.
 *
 * @param i the byte index.
 *
 * @return the byte.
 */
util.DataBuffer.prototype.at = function(i) {
  return this.data.getUint8(this.read + i);
};

/**
 * Puts a byte at the given index without modifying the read pointer.
 *
 * @param i the byte index.
 * @param b the byte to put.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.setAt = function(i, b) {
  this.data.setUint8(i, b);
  return this;
};

/**
 * Gets the last byte without modifying the read pointer.
 *
 * @return the last byte.
 */
util.DataBuffer.prototype.last = function() {
  return this.data.getUint8(this.write - 1);
};

/**
 * Creates a copy of this buffer.
 *
 * @return the copy.
 */
util.DataBuffer.prototype.copy = function() {
  return new util.DataBuffer(this);
};

/**
 * Compacts this buffer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.compact = function() {
  if(this.read > 0) {
    var src = new Uint8Array(this.data.buffer, this.read);
    var dst = new Uint8Array(src.byteLength);
    dst.set(src);
    this.data = new DataView(dst);
    this.write -= this.read;
    this.read = 0;
  }
  return this;
};

/**
 * Clears this buffer.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.clear = function() {
  this.data = new DataView(new ArrayBuffer(0));
  this.read = this.write = 0;
  return this;
};

/**
 * Shortens this buffer by triming bytes off of the end of this buffer.
 *
 * @param count the number of bytes to trim off.
 *
 * @return this buffer.
 */
util.DataBuffer.prototype.truncate = function(count) {
  this.write = Math.max(0, this.length() - count);
  this.read = Math.min(this.read, this.write);
  return this;
};

/**
 * Converts this buffer to a hexadecimal string.
 *
 * @return a hexadecimal string.
 */
util.DataBuffer.prototype.toHex = function() {
  var rval = '';
  for(var i = this.read; i < this.data.byteLength; ++i) {
    var b = this.data.getUint8(i);
    if(b < 16) {
      rval += '0';
    }
    rval += b.toString(16);
  }
  return rval;
};

/**
 * Converts this buffer to a string, using the given encoding. If no
 * encoding is given, 'utf8' (UTF-8) is used.
 *
 * @param [encoding] the encoding to use: 'binary', 'utf8', 'utf16', 'hex',
 *          'base64' (default: 'utf8').
 *
 * @return a string representation of the bytes in this buffer.
 */
util.DataBuffer.prototype.toString = function(encoding) {
  var view = new Uint8Array(this.data, this.read, this.length());
  encoding = encoding || 'utf8';

  // encode to string
  if(encoding === 'binary' || encoding === 'raw') {
    return util.binary.raw.encode(view);
  }
  if(encoding === 'hex') {
    return util.binary.hex.encode(view);
  }
  if(encoding === 'base64') {
    return util.binary.base64.encode(view);
  }

  // decode to text
  if(encoding === 'utf8') {
    return util.text.utf8.decode(view);
  }
  if(encoding === 'utf16') {
    return util.text.utf16.decode(view);
  }

  throw new Error('Invalid encoding: ' + encoding);
};

/** End Buffer w/UInt8Array backing */

/**
 * Creates a buffer that stores bytes. A value may be given to put into the
 * buffer that is either a string of bytes or a UTF-16 string that will
 * be encoded using UTF-8 (to do the latter, specify 'utf8' as the encoding).
 *
 * @param [input] the bytes to wrap (as a string) or a UTF-16 string to encode
 *          as UTF-8.
 * @param [encoding] (default: 'raw', other: 'utf8').
 */
util.createBuffer = function(input, encoding) {
  // TODO: deprecate, use new ByteBuffer() instead
  encoding = encoding || 'raw';
  if(input !== undefined && encoding === 'utf8') {
    input = util.encodeUtf8(input);
  }
  return new util.ByteBuffer(input);
};

/**
 * Fills a string with a particular value. If you want the string to be a byte
 * string, pass in String.fromCharCode(theByte).
 *
 * @param c the character to fill the string with, use String.fromCharCode
 *          to fill the string with a byte value.
 * @param n the number of characters of value c to fill with.
 *
 * @return the filled string.
 */
util.fillString = function(c, n) {
  var s = '';
  while(n > 0) {
    if(n & 1) {
      s += c;
    }
    n >>>= 1;
    if(n > 0) {
      c += c;
    }
  }
  return s;
};

/**
 * Performs a per byte XOR between two byte strings and returns the result as a
 * string of bytes.
 *
 * @param s1 first string of bytes.
 * @param s2 second string of bytes.
 * @param n the number of bytes to XOR.
 *
 * @return the XOR'd result.
 */
util.xorBytes = function(s1, s2, n) {
  var s3 = '';
  var b = '';
  var t = '';
  var i = 0;
  var c = 0;
  for(; n > 0; --n, ++i) {
    b = s1.charCodeAt(i) ^ s2.charCodeAt(i);
    if(c >= 10) {
      s3 += t;
      t = '';
      c = 0;
    }
    t += String.fromCharCode(b);
    ++c;
  }
  s3 += t;
  return s3;
};

/**
 * Converts a hex string into a 'binary' encoded string of bytes.
 *
 * @param hex the hexadecimal string to convert.
 *
 * @return the binary-encoded string of bytes.
 */
util.hexToBytes = function(hex) {
  // TODO: deprecate: "Deprecated. Use util.binary.hex.decode instead."
  var rval = '';
  var i = 0;
  if(hex.length & 1 == 1) {
    // odd number of characters, convert first character alone
    i = 1;
    rval += String.fromCharCode(parseInt(hex[0], 16));
  }
  // convert 2 characters (1 byte) at a time
  for(; i < hex.length; i += 2) {
    rval += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return rval;
};

/**
 * Converts a 'binary' encoded string of bytes to hex.
 *
 * @param bytes the byte string to convert.
 *
 * @return the string of hexadecimal characters.
 */
util.bytesToHex = function(bytes) {
  // TODO: deprecate: "Deprecated. Use util.binary.hex.encode instead."
  return util.createBuffer(bytes).toHex();
};

/**
 * Converts an 32-bit integer to 4-big-endian byte string.
 *
 * @param i the integer.
 *
 * @return the byte string.
 */
util.int32ToBytes = function(i) {
  return (
    String.fromCharCode(i >> 24 & 0xFF) +
    String.fromCharCode(i >> 16 & 0xFF) +
    String.fromCharCode(i >> 8 & 0xFF) +
    String.fromCharCode(i & 0xFF));
};

// base64 characters, reverse mapping
var _base64 =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var _base64Idx = [
/*43 -43 = 0*/
/*'+',  1,  2,  3,'/' */
   62, -1, -1, -1, 63,

/*'0','1','2','3','4','5','6','7','8','9' */
   52, 53, 54, 55, 56, 57, 58, 59, 60, 61,

/*15, 16, 17,'=', 19, 20, 21 */
  -1, -1, -1, 64, -1, -1, -1,

/*65 - 43 = 22*/
/*'A','B','C','D','E','F','G','H','I','J','K','L','M', */
   0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12,

/*'N','O','P','Q','R','S','T','U','V','W','X','Y','Z' */
   13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,

/*91 - 43 = 48 */
/*48, 49, 50, 51, 52, 53 */
  -1, -1, -1, -1, -1, -1,

/*97 - 43 = 54*/
/*'a','b','c','d','e','f','g','h','i','j','k','l','m' */
   26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,

/*'n','o','p','q','r','s','t','u','v','w','x','y','z' */
   39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
];

// base58 characters (Bitcoin alphabet)
var _base58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

/**
 * Base64 encodes a 'binary' encoded string of bytes.
 *
 * @param input the binary encoded string of bytes to base64-encode.
 * @param maxline the maximum number of encoded characters per line to use,
 *          defaults to none.
 *
 * @return the base64-encoded output.
 */
util.encode64 = function(input, maxline) {
  // TODO: deprecate: "Deprecated. Use util.binary.base64.encode instead."
  var line = '';
  var output = '';
  var chr1, chr2, chr3;
  var i = 0;
  while(i < input.length) {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);

    // encode 4 character group
    line += _base64.charAt(chr1 >> 2);
    line += _base64.charAt(((chr1 & 3) << 4) | (chr2 >> 4));
    if(isNaN(chr2)) {
      line += '==';
    } else {
      line += _base64.charAt(((chr2 & 15) << 2) | (chr3 >> 6));
      line += isNaN(chr3) ? '=' : _base64.charAt(chr3 & 63);
    }

    if(maxline && line.length > maxline) {
      output += line.substr(0, maxline) + '\r\n';
      line = line.substr(maxline);
    }
  }
  output += line;
  return output;
};

/**
 * Base64 decodes a string into a 'binary' encoded string of bytes.
 *
 * @param input the base64-encoded input.
 *
 * @return the binary encoded string.
 */
util.decode64 = function(input) {
  // TODO: deprecate: "Deprecated. Use util.binary.base64.decode instead."

  // remove all non-base64 characters
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

  var output = '';
  var enc1, enc2, enc3, enc4;
  var i = 0;

  while(i < input.length) {
    enc1 = _base64Idx[input.charCodeAt(i++) - 43];
    enc2 = _base64Idx[input.charCodeAt(i++) - 43];
    enc3 = _base64Idx[input.charCodeAt(i++) - 43];
    enc4 = _base64Idx[input.charCodeAt(i++) - 43];

    output += String.fromCharCode((enc1 << 2) | (enc2 >> 4));
    if(enc3 !== 64) {
      // decoded at least 2 bytes
      output += String.fromCharCode(((enc2 & 15) << 4) | (enc3 >> 2));
      if(enc4 !== 64) {
        // decoded 3 bytes
        output += String.fromCharCode(((enc3 & 3) << 6) | enc4);
      }
    }
  }

  return output;
};

/**
 * UTF-8 encodes the given UTF-16 encoded string (a standard JavaScript
 * string). Non-ASCII characters will be encoded as multiple bytes according
 * to UTF-8.
 *
 * @param str the string to encode.
 *
 * @return the UTF-8 encoded string.
 */
util.encodeUtf8 = function(str) {
  return unescape(encodeURIComponent(str));
};

/**
 * Decodes a UTF-8 encoded string into a UTF-16 string.
 *
 * @param str the string to decode.
 *
 * @return the UTF-16 encoded string (standard JavaScript string).
 */
util.decodeUtf8 = function(str) {
  return decodeURIComponent(escape(str));
};

// binary encoding/decoding tools
// FIXME: Experimental. Do not use yet.
util.binary = {
  raw: {},
  hex: {},
  base64: {},
  base58: {},
  baseN : {
    encode: baseN.encode,
    decode: baseN.decode
  }
};

/**
 * Encodes a Uint8Array as a binary-encoded string. This encoding uses
 * a value between 0 and 255 for each character.
 *
 * @param bytes the Uint8Array to encode.
 *
 * @return the binary-encoded string.
 */
util.binary.raw.encode = function(bytes) {
  return String.fromCharCode.apply(null, bytes);
};

/**
 * Decodes a binary-encoded string to a Uint8Array. This encoding uses
 * a value between 0 and 255 for each character.
 *
 * @param str the binary-encoded string to decode.
 * @param [output] an optional Uint8Array to write the output to; if it
 *          is too small, an exception will be thrown.
 * @param [offset] the start offset for writing to the output (default: 0).
 *
 * @return the Uint8Array or the number of bytes written if output was given.
 */
util.binary.raw.decode = function(str, output, offset) {
  var out = output;
  if(!out) {
    out = new Uint8Array(str.length);
  }
  offset = offset || 0;
  var j = offset;
  for(var i = 0; i < str.length; ++i) {
    out[j++] = str.charCodeAt(i);
  }
  return output ? (j - offset) : out;
};

/**
 * Encodes a 'binary' string, ArrayBuffer, DataView, TypedArray, or
 * ByteBuffer as a string of hexadecimal characters.
 *
 * @param bytes the bytes to convert.
 *
 * @return the string of hexadecimal characters.
 */
util.binary.hex.encode = util.bytesToHex;

/**
 * Decodes a hex-encoded string to a Uint8Array.
 *
 * @param hex the hexadecimal string to convert.
 * @param [output] an optional Uint8Array to write the output to; if it
 *          is too small, an exception will be thrown.
 * @param [offset] the start offset for writing to the output (default: 0).
 *
 * @return the Uint8Array or the number of bytes written if output was given.
 */
util.binary.hex.decode = function(hex, output, offset) {
  var out = output;
  if(!out) {
    out = new Uint8Array(Math.ceil(hex.length / 2));
  }
  offset = offset || 0;
  var i = 0, j = offset;
  if(hex.length & 1) {
    // odd number of characters, convert first character alone
    i = 1;
    out[j++] = parseInt(hex[0], 16);
  }
  // convert 2 characters (1 byte) at a time
  for(; i < hex.length; i += 2) {
    out[j++] = parseInt(hex.substr(i, 2), 16);
  }
  return output ? (j - offset) : out;
};

/**
 * Base64-encodes a Uint8Array.
 *
 * @param input the Uint8Array to encode.
 * @param maxline the maximum number of encoded characters per line to use,
 *          defaults to none.
 *
 * @return the base64-encoded output string.
 */
util.binary.base64.encode = function(input, maxline) {
  var line = '';
  var output = '';
  var chr1, chr2, chr3;
  var i = 0;
  while(i < input.byteLength) {
    chr1 = input[i++];
    chr2 = input[i++];
    chr3 = input[i++];

    // encode 4 character group
    line += _base64.charAt(chr1 >> 2);
    line += _base64.charAt(((chr1 & 3) << 4) | (chr2 >> 4));
    if(isNaN(chr2)) {
      line += '==';
    } else {
      line += _base64.charAt(((chr2 & 15) << 2) | (chr3 >> 6));
      line += isNaN(chr3) ? '=' : _base64.charAt(chr3 & 63);
    }

    if(maxline && line.length > maxline) {
      output += line.substr(0, maxline) + '\r\n';
      line = line.substr(maxline);
    }
  }
  output += line;
  return output;
};

/**
 * Decodes a base64-encoded string to a Uint8Array.
 *
 * @param input the base64-encoded input string.
 * @param [output] an optional Uint8Array to write the output to; if it
 *          is too small, an exception will be thrown.
 * @param [offset] the start offset for writing to the output (default: 0).
 *
 * @return the Uint8Array or the number of bytes written if output was given.
 */
util.binary.base64.decode = function(input, output, offset) {
  var out = output;
  if(!out) {
    out = new Uint8Array(Math.ceil(input.length / 4) * 3);
  }

  // remove all non-base64 characters
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

  offset = offset || 0;
  var enc1, enc2, enc3, enc4;
  var i = 0, j = offset;

  while(i < input.length) {
    enc1 = _base64Idx[input.charCodeAt(i++) - 43];
    enc2 = _base64Idx[input.charCodeAt(i++) - 43];
    enc3 = _base64Idx[input.charCodeAt(i++) - 43];
    enc4 = _base64Idx[input.charCodeAt(i++) - 43];

    out[j++] = (enc1 << 2) | (enc2 >> 4);
    if(enc3 !== 64) {
      // decoded at least 2 bytes
      out[j++] = ((enc2 & 15) << 4) | (enc3 >> 2);
      if(enc4 !== 64) {
        // decoded 3 bytes
        out[j++] = ((enc3 & 3) << 6) | enc4;
      }
    }
  }

  // make sure result is the exact decoded length
  return output ? (j - offset) : out.subarray(0, j);
};

// add support for base58 encoding/decoding with Bitcoin alphabet
util.binary.base58.encode = function(input, maxline) {
  return util.binary.baseN.encode(input, _base58, maxline);
};
util.binary.base58.decode = function(input, maxline) {
  return util.binary.baseN.decode(input, _base58, maxline);
};

// text encoding/decoding tools
// FIXME: Experimental. Do not use yet.
util.text = {
  utf8: {},
  utf16: {}
};

/**
 * Encodes the given string as UTF-8 in a Uint8Array.
 *
 * @param str the string to encode.
 * @param [output] an optional Uint8Array to write the output to; if it
 *          is too small, an exception will be thrown.
 * @param [offset] the start offset for writing to the output (default: 0).
 *
 * @return the Uint8Array or the number of bytes written if output was given.
 */
util.text.utf8.encode = function(str, output, offset) {
  str = util.encodeUtf8(str);
  var out = output;
  if(!out) {
    out = new Uint8Array(str.length);
  }
  offset = offset || 0;
  var j = offset;
  for(var i = 0; i < str.length; ++i) {
    out[j++] = str.charCodeAt(i);
  }
  return output ? (j - offset) : out;
};

/**
 * Decodes the UTF-8 contents from a Uint8Array.
 *
 * @param bytes the Uint8Array to decode.
 *
 * @return the resulting string.
 */
util.text.utf8.decode = function(bytes) {
  return util.decodeUtf8(String.fromCharCode.apply(null, bytes));
};

/**
 * Encodes the given string as UTF-16 in a Uint8Array.
 *
 * @param str the string to encode.
 * @param [output] an optional Uint8Array to write the output to; if it
 *          is too small, an exception will be thrown.
 * @param [offset] the start offset for writing to the output (default: 0).
 *
 * @return the Uint8Array or the number of bytes written if output was given.
 */
util.text.utf16.encode = function(str, output, offset) {
  var out = output;
  if(!out) {
    out = new Uint8Array(str.length * 2);
  }
  var view = new Uint16Array(out.buffer);
  offset = offset || 0;
  var j = offset;
  var k = offset;
  for(var i = 0; i < str.length; ++i) {
    view[k++] = str.charCodeAt(i);
    j += 2;
  }
  return output ? (j - offset) : out;
};

/**
 * Decodes the UTF-16 contents from a Uint8Array.
 *
 * @param bytes the Uint8Array to decode.
 *
 * @return the resulting string.
 */
util.text.utf16.decode = function(bytes) {
  return String.fromCharCode.apply(null, new Uint16Array(bytes.buffer));
};

/**
 * Deflates the given data using a flash interface.
 *
 * @param api the flash interface.
 * @param bytes the data.
 * @param raw true to return only raw deflate data, false to include zlib
 *          header and trailer.
 *
 * @return the deflated data as a string.
 */
util.deflate = function(api, bytes, raw) {
  bytes = util.decode64(api.deflate(util.encode64(bytes)).rval);

  // strip zlib header and trailer if necessary
  if(raw) {
    // zlib header is 2 bytes (CMF,FLG) where FLG indicates that
    // there is a 4-byte DICT (alder-32) block before the data if
    // its 5th bit is set
    var start = 2;
    var flg = bytes.charCodeAt(1);
    if(flg & 0x20) {
      start = 6;
    }
    // zlib trailer is 4 bytes of adler-32
    bytes = bytes.substring(start, bytes.length - 4);
  }

  return bytes;
};

/**
 * Inflates the given data using a flash interface.
 *
 * @param api the flash interface.
 * @param bytes the data.
 * @param raw true if the incoming data has no zlib header or trailer and is
 *          raw DEFLATE data.
 *
 * @return the inflated data as a string, null on error.
 */
util.inflate = function(api, bytes, raw) {
  // TODO: add zlib header and trailer if necessary/possible
  var rval = api.inflate(util.encode64(bytes)).rval;
  return (rval === null) ? null : util.decode64(rval);
};

/**
 * Sets a storage object.
 *
 * @param api the storage interface.
 * @param id the storage ID to use.
 * @param obj the storage object, null to remove.
 */
var _setStorageObject = function(api, id, obj) {
  if(!api) {
    throw new Error('WebStorage not available.');
  }

  var rval;
  if(obj === null) {
    rval = api.removeItem(id);
  } else {
    // json-encode and base64-encode object
    obj = util.encode64(JSON.stringify(obj));
    rval = api.setItem(id, obj);
  }

  // handle potential flash error
  if(typeof(rval) !== 'undefined' && rval.rval !== true) {
    var error = new Error(rval.error.message);
    error.id = rval.error.id;
    error.name = rval.error.name;
    throw error;
  }
};

/**
 * Gets a storage object.
 *
 * @param api the storage interface.
 * @param id the storage ID to use.
 *
 * @return the storage object entry or null if none exists.
 */
var _getStorageObject = function(api, id) {
  if(!api) {
    throw new Error('WebStorage not available.');
  }

  // get the existing entry
  var rval = api.getItem(id);

  /* Note: We check api.init because we can't do (api == localStorage)
    on IE because of "Class doesn't support Automation" exception. Only
    the flash api has an init method so this works too, but we need a
    better solution in the future. */

  // flash returns item wrapped in an object, handle special case
  if(api.init) {
    if(rval.rval === null) {
      if(rval.error) {
        var error = new Error(rval.error.message);
        error.id = rval.error.id;
        error.name = rval.error.name;
        throw error;
      }
      // no error, but also no item
      rval = null;
    } else {
      rval = rval.rval;
    }
  }

  // handle decoding
  if(rval !== null) {
    // base64-decode and json-decode data
    rval = JSON.parse(util.decode64(rval));
  }

  return rval;
};

/**
 * Stores an item in local storage.
 *
 * @param api the storage interface.
 * @param id the storage ID to use.
 * @param key the key for the item.
 * @param data the data for the item (any javascript object/primitive).
 */
var _setItem = function(api, id, key, data) {
  // get storage object
  var obj = _getStorageObject(api, id);
  if(obj === null) {
    // create a new storage object
    obj = {};
  }
  // update key
  obj[key] = data;

  // set storage object
  _setStorageObject(api, id, obj);
};

/**
 * Gets an item from local storage.
 *
 * @param api the storage interface.
 * @param id the storage ID to use.
 * @param key the key for the item.
 *
 * @return the item.
 */
var _getItem = function(api, id, key) {
  // get storage object
  var rval = _getStorageObject(api, id);
  if(rval !== null) {
    // return data at key
    rval = (key in rval) ? rval[key] : null;
  }

  return rval;
};

/**
 * Removes an item from local storage.
 *
 * @param api the storage interface.
 * @param id the storage ID to use.
 * @param key the key for the item.
 */
var _removeItem = function(api, id, key) {
  // get storage object
  var obj = _getStorageObject(api, id);
  if(obj !== null && key in obj) {
    // remove key
    delete obj[key];

    // see if entry has no keys remaining
    var empty = true;
    for(var prop in obj) {
      empty = false;
      break;
    }
    if(empty) {
      // remove entry entirely if no keys are left
      obj = null;
    }

    // set storage object
    _setStorageObject(api, id, obj);
  }
};

/**
 * Clears the local disk storage identified by the given ID.
 *
 * @param api the storage interface.
 * @param id the storage ID to use.
 */
var _clearItems = function(api, id) {
  _setStorageObject(api, id, null);
};

/**
 * Calls a storage function.
 *
 * @param func the function to call.
 * @param args the arguments for the function.
 * @param location the location argument.
 *
 * @return the return value from the function.
 */
var _callStorageFunction = function(func, args, location) {
  var rval = null;

  // default storage types
  if(typeof(location) === 'undefined') {
    location = ['web', 'flash'];
  }

  // apply storage types in order of preference
  var type;
  var done = false;
  var exception = null;
  for(var idx in location) {
    type = location[idx];
    try {
      if(type === 'flash' || type === 'both') {
        if(args[0] === null) {
          throw new Error('Flash local storage not available.');
        }
        rval = func.apply(this, args);
        done = (type === 'flash');
      }
      if(type === 'web' || type === 'both') {
        args[0] = localStorage;
        rval = func.apply(this, args);
        done = true;
      }
    } catch(ex) {
      exception = ex;
    }
    if(done) {
      break;
    }
  }

  if(!done) {
    throw exception;
  }

  return rval;
};

/**
 * Stores an item on local disk.
 *
 * The available types of local storage include 'flash', 'web', and 'both'.
 *
 * The type 'flash' refers to flash local storage (SharedObject). In order
 * to use flash local storage, the 'api' parameter must be valid. The type
 * 'web' refers to WebStorage, if supported by the browser. The type 'both'
 * refers to storing using both 'flash' and 'web', not just one or the
 * other.
 *
 * The location array should list the storage types to use in order of
 * preference:
 *
 * ['flash']: flash only storage
 * ['web']: web only storage
 * ['both']: try to store in both
 * ['flash','web']: store in flash first, but if not available, 'web'
 * ['web','flash']: store in web first, but if not available, 'flash'
 *
 * The location array defaults to: ['web', 'flash']
 *
 * @param api the flash interface, null to use only WebStorage.
 * @param id the storage ID to use.
 * @param key the key for the item.
 * @param data the data for the item (any javascript object/primitive).
 * @param location an array with the preferred types of storage to use.
 */
util.setItem = function(api, id, key, data, location) {
  _callStorageFunction(_setItem, arguments, location);
};

/**
 * Gets an item on local disk.
 *
 * Set setItem() for details on storage types.
 *
 * @param api the flash interface, null to use only WebStorage.
 * @param id the storage ID to use.
 * @param key the key for the item.
 * @param location an array with the preferred types of storage to use.
 *
 * @return the item.
 */
util.getItem = function(api, id, key, location) {
  return _callStorageFunction(_getItem, arguments, location);
};

/**
 * Removes an item on local disk.
 *
 * Set setItem() for details on storage types.
 *
 * @param api the flash interface.
 * @param id the storage ID to use.
 * @param key the key for the item.
 * @param location an array with the preferred types of storage to use.
 */
util.removeItem = function(api, id, key, location) {
  _callStorageFunction(_removeItem, arguments, location);
};

/**
 * Clears the local disk storage identified by the given ID.
 *
 * Set setItem() for details on storage types.
 *
 * @param api the flash interface if flash is available.
 * @param id the storage ID to use.
 * @param location an array with the preferred types of storage to use.
 */
util.clearItems = function(api, id, location) {
  _callStorageFunction(_clearItems, arguments, location);
};

/**
 * Parses the scheme, host, and port from an http(s) url.
 *
 * @param str the url string.
 *
 * @return the parsed url object or null if the url is invalid.
 */
util.parseUrl = function(str) {
  // FIXME: this regex looks a bit broken
  var regex = /^(https?):\/\/([^:&^\/]*):?(\d*)(.*)$/g;
  regex.lastIndex = 0;
  var m = regex.exec(str);
  var url = (m === null) ? null : {
    full: str,
    scheme: m[1],
    host: m[2],
    port: m[3],
    path: m[4]
  };
  if(url) {
    url.fullHost = url.host;
    if(url.port) {
      if(url.port !== 80 && url.scheme === 'http') {
        url.fullHost += ':' + url.port;
      } else if(url.port !== 443 && url.scheme === 'https') {
        url.fullHost += ':' + url.port;
      }
    } else if(url.scheme === 'http') {
      url.port = 80;
    } else if(url.scheme === 'https') {
      url.port = 443;
    }
    url.full = url.scheme + '://' + url.fullHost;
  }
  return url;
};

/* Storage for query variables */
var _queryVariables = null;

/**
 * Returns the window location query variables. Query is parsed on the first
 * call and the same object is returned on subsequent calls. The mapping
 * is from keys to an array of values. Parameters without values will have
 * an object key set but no value added to the value array. Values are
 * unescaped.
 *
 * ...?k1=v1&k2=v2:
 * {
 *   "k1": ["v1"],
 *   "k2": ["v2"]
 * }
 *
 * ...?k1=v1&k1=v2:
 * {
 *   "k1": ["v1", "v2"]
 * }
 *
 * ...?k1=v1&k2:
 * {
 *   "k1": ["v1"],
 *   "k2": []
 * }
 *
 * ...?k1=v1&k1:
 * {
 *   "k1": ["v1"]
 * }
 *
 * ...?k1&k1:
 * {
 *   "k1": []
 * }
 *
 * @param query the query string to parse (optional, default to cached
 *          results from parsing window location search query).
 *
 * @return object mapping keys to variables.
 */
util.getQueryVariables = function(query) {
  var parse = function(q) {
    var rval = {};
    var kvpairs = q.split('&');
    for(var i = 0; i < kvpairs.length; i++) {
      var pos = kvpairs[i].indexOf('=');
      var key;
      var val;
      if(pos > 0) {
        key = kvpairs[i].substring(0, pos);
        val = kvpairs[i].substring(pos + 1);
      } else {
        key = kvpairs[i];
        val = null;
      }
      if(!(key in rval)) {
        rval[key] = [];
      }
      // disallow overriding object prototype keys
      if(!(key in Object.prototype) && val !== null) {
        rval[key].push(unescape(val));
      }
    }
    return rval;
  };

   var rval;
   if(typeof(query) === 'undefined') {
     // set cached variables if needed
     if(_queryVariables === null) {
       if(typeof(window) !== 'undefined' && window.location && window.location.search) {
          // parse window search query
          _queryVariables = parse(window.location.search.substring(1));
       } else {
          // no query variables available
          _queryVariables = {};
       }
     }
     rval = _queryVariables;
   } else {
     // parse given query
     rval = parse(query);
   }
   return rval;
};

/**
 * Parses a fragment into a path and query. This method will take a URI
 * fragment and break it up as if it were the main URI. For example:
 *    /bar/baz?a=1&b=2
 * results in:
 *    {
 *       path: ["bar", "baz"],
 *       query: {"k1": ["v1"], "k2": ["v2"]}
 *    }
 *
 * @return object with a path array and query object.
 */
util.parseFragment = function(fragment) {
  // default to whole fragment
  var fp = fragment;
  var fq = '';
  // split into path and query if possible at the first '?'
  var pos = fragment.indexOf('?');
  if(pos > 0) {
    fp = fragment.substring(0, pos);
    fq = fragment.substring(pos + 1);
  }
  // split path based on '/' and ignore first element if empty
  var path = fp.split('/');
  if(path.length > 0 && path[0] === '') {
    path.shift();
  }
  // convert query into object
  var query = (fq === '') ? {} : util.getQueryVariables(fq);

  return {
    pathString: fp,
    queryString: fq,
    path: path,
    query: query
  };
};

/**
 * Makes a request out of a URI-like request string. This is intended to
 * be used where a fragment id (after a URI '#') is parsed as a URI with
 * path and query parts. The string should have a path beginning and
 * delimited by '/' and optional query parameters following a '?'. The
 * query should be a standard URL set of key value pairs delimited by
 * '&'. For backwards compatibility the initial '/' on the path is not
 * required. The request object has the following API, (fully described
 * in the method code):
 *    {
 *       path: <the path string part>.
 *       query: <the query string part>,
 *       getPath(i): get part or all of the split path array,
 *       getQuery(k, i): get part or all of a query key array,
 *       getQueryLast(k, _default): get last element of a query key array.
 *    }
 *
 * @return object with request parameters.
 */
util.makeRequest = function(reqString) {
  var frag = util.parseFragment(reqString);
  var req = {
    // full path string
    path: frag.pathString,
    // full query string
    query: frag.queryString,
    /**
     * Get path or element in path.
     *
     * @param i optional path index.
     *
     * @return path or part of path if i provided.
     */
    getPath: function(i) {
      return (typeof(i) === 'undefined') ? frag.path : frag.path[i];
    },
    /**
     * Get query, values for a key, or value for a key index.
     *
     * @param k optional query key.
     * @param i optional query key index.
     *
     * @return query, values for a key, or value for a key index.
     */
    getQuery: function(k, i) {
      var rval;
      if(typeof(k) === 'undefined') {
        rval = frag.query;
      } else {
        rval = frag.query[k];
        if(rval && typeof(i) !== 'undefined') {
           rval = rval[i];
        }
      }
      return rval;
    },
    getQueryLast: function(k, _default) {
      var rval;
      var vals = req.getQuery(k);
      if(vals) {
        rval = vals[vals.length - 1];
      } else {
        rval = _default;
      }
      return rval;
    }
  };
  return req;
};

/**
 * Makes a URI out of a path, an object with query parameters, and a
 * fragment. Uses jQuery.param() internally for query string creation.
 * If the path is an array, it will be joined with '/'.
 *
 * @param path string path or array of strings.
 * @param query object with query parameters. (optional)
 * @param fragment fragment string. (optional)
 *
 * @return string object with request parameters.
 */
util.makeLink = function(path, query, fragment) {
  // join path parts if needed
  path = jQuery.isArray(path) ? path.join('/') : path;

  var qstr = jQuery.param(query || {});
  fragment = fragment || '';
  return path +
    ((qstr.length > 0) ? ('?' + qstr) : '') +
    ((fragment.length > 0) ? ('#' + fragment) : '');
};

/**
 * Follows a path of keys deep into an object hierarchy and set a value.
 * If a key does not exist or it's value is not an object, create an
 * object in it's place. This can be destructive to a object tree if
 * leaf nodes are given as non-final path keys.
 * Used to avoid exceptions from missing parts of the path.
 *
 * @param object the starting object.
 * @param keys an array of string keys.
 * @param value the value to set.
 */
util.setPath = function(object, keys, value) {
  // need to start at an object
  if(typeof(object) === 'object' && object !== null) {
    var i = 0;
    var len = keys.length;
    while(i < len) {
      var next = keys[i++];
      if(i == len) {
        // last
        object[next] = value;
      } else {
        // more
        var hasNext = (next in object);
        if(!hasNext ||
          (hasNext && typeof(object[next]) !== 'object') ||
          (hasNext && object[next] === null)) {
          object[next] = {};
        }
        object = object[next];
      }
    }
  }
};

/**
 * Follows a path of keys deep into an object hierarchy and return a value.
 * If a key does not exist, create an object in it's place.
 * Used to avoid exceptions from missing parts of the path.
 *
 * @param object the starting object.
 * @param keys an array of string keys.
 * @param _default value to return if path not found.
 *
 * @return the value at the path if found, else default if given, else
 *         undefined.
 */
util.getPath = function(object, keys, _default) {
  var i = 0;
  var len = keys.length;
  var hasNext = true;
  while(hasNext && i < len &&
    typeof(object) === 'object' && object !== null) {
    var next = keys[i++];
    hasNext = next in object;
    if(hasNext) {
      object = object[next];
    }
  }
  return (hasNext ? object : _default);
};

/**
 * Follow a path of keys deep into an object hierarchy and delete the
 * last one. If a key does not exist, do nothing.
 * Used to avoid exceptions from missing parts of the path.
 *
 * @param object the starting object.
 * @param keys an array of string keys.
 */
util.deletePath = function(object, keys) {
  // need to start at an object
  if(typeof(object) === 'object' && object !== null) {
    var i = 0;
    var len = keys.length;
    while(i < len) {
      var next = keys[i++];
      if(i == len) {
        // last
        delete object[next];
      } else {
        // more
        if(!(next in object) ||
          (typeof(object[next]) !== 'object') ||
          (object[next] === null)) {
           break;
        }
        object = object[next];
      }
    }
  }
};

/**
 * Check if an object is empty.
 *
 * Taken from:
 * http://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object-from-json/679937#679937
 *
 * @param object the object to check.
 */
util.isEmpty = function(obj) {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

/**
 * Format with simple printf-style interpolation.
 *
 * %%: literal '%'
 * %s,%o: convert next argument into a string.
 *
 * @param format the string to format.
 * @param ... arguments to interpolate into the format string.
 */
util.format = function(format) {
  var re = /%./g;
  // current match
  var match;
  // current part
  var part;
  // current arg index
  var argi = 0;
  // collected parts to recombine later
  var parts = [];
  // last index found
  var last = 0;
  // loop while matches remain
  while((match = re.exec(format))) {
    part = format.substring(last, re.lastIndex - 2);
    // don't add empty strings (ie, parts between %s%s)
    if(part.length > 0) {
      parts.push(part);
    }
    last = re.lastIndex;
    // switch on % code
    var code = match[0][1];
    switch(code) {
    case 's':
    case 'o':
      // check if enough arguments were given
      if(argi < arguments.length) {
        parts.push(arguments[argi++ + 1]);
      } else {
        parts.push('<?>');
      }
      break;
    // FIXME: do proper formating for numbers, etc
    //case 'f':
    //case 'd':
    case '%':
      parts.push('%');
      break;
    default:
      parts.push('<%' + code + '?>');
    }
  }
  // add trailing part of format string
  parts.push(format.substring(last));
  return parts.join('');
};

/**
 * Formats a number.
 *
 * http://snipplr.com/view/5945/javascript-numberformat--ported-from-php/
 */
util.formatNumber = function(number, decimals, dec_point, thousands_sep) {
  // http://kevin.vanzonneveld.net
  // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +     bugfix by: Michael White (http://crestidg.com)
  // +     bugfix by: Benjamin Lupton
  // +     bugfix by: Allan Jensen (http://www.winternet.no)
  // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // *     example 1: number_format(1234.5678, 2, '.', '');
  // *     returns 1: 1234.57

  var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
  var d = dec_point === undefined ? ',' : dec_point;
  var t = thousands_sep === undefined ?
   '.' : thousands_sep, s = n < 0 ? '-' : '';
  var i = parseInt((n = Math.abs(+n || 0).toFixed(c)), 10) + '';
  var j = (i.length > 3) ? i.length % 3 : 0;
  return s + (j ? i.substr(0, j) + t : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
    (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
};

/**
 * Formats a byte size.
 *
 * http://snipplr.com/view/5949/format-humanize-file-byte-size-presentation-in-javascript/
 */
util.formatSize = function(size) {
  if(size >= 1073741824) {
    size = util.formatNumber(size / 1073741824, 2, '.', '') + ' GiB';
  } else if(size >= 1048576) {
    size = util.formatNumber(size / 1048576, 2, '.', '') + ' MiB';
  } else if(size >= 1024) {
    size = util.formatNumber(size / 1024, 0) + ' KiB';
  } else {
    size = util.formatNumber(size, 0) + ' bytes';
  }
  return size;
};

/**
 * Converts an IPv4 or IPv6 string representation into bytes (in network order).
 *
 * @param ip the IPv4 or IPv6 address to convert.
 *
 * @return the 4-byte IPv6 or 16-byte IPv6 address or null if the address can't
 *         be parsed.
 */
util.bytesFromIP = function(ip) {
  if(ip.indexOf('.') !== -1) {
    return util.bytesFromIPv4(ip);
  }
  if(ip.indexOf(':') !== -1) {
    return util.bytesFromIPv6(ip);
  }
  return null;
};

/**
 * Converts an IPv4 string representation into bytes (in network order).
 *
 * @param ip the IPv4 address to convert.
 *
 * @return the 4-byte address or null if the address can't be parsed.
 */
util.bytesFromIPv4 = function(ip) {
  ip = ip.split('.');
  if(ip.length !== 4) {
    return null;
  }
  var b = util.createBuffer();
  for(var i = 0; i < ip.length; ++i) {
    var num = parseInt(ip[i], 10);
    if(isNaN(num)) {
      return null;
    }
    b.putByte(num);
  }
  return b.getBytes();
};

/**
 * Converts an IPv6 string representation into bytes (in network order).
 *
 * @param ip the IPv6 address to convert.
 *
 * @return the 16-byte address or null if the address can't be parsed.
 */
util.bytesFromIPv6 = function(ip) {
  var blanks = 0;
  ip = ip.split(':').filter(function(e) {
    if(e.length === 0) ++blanks;
    return true;
  });
  var zeros = (8 - ip.length + blanks) * 2;
  var b = util.createBuffer();
  for(var i = 0; i < 8; ++i) {
    if(!ip[i] || ip[i].length === 0) {
      b.fillWithByte(0, zeros);
      zeros = 0;
      continue;
    }
    var bytes = util.hexToBytes(ip[i]);
    if(bytes.length < 2) {
      b.putByte(0);
    }
    b.putBytes(bytes);
  }
  return b.getBytes();
};

/**
 * Converts 4-bytes into an IPv4 string representation or 16-bytes into
 * an IPv6 string representation. The bytes must be in network order.
 *
 * @param bytes the bytes to convert.
 *
 * @return the IPv4 or IPv6 string representation if 4 or 16 bytes,
 *         respectively, are given, otherwise null.
 */
util.bytesToIP = function(bytes) {
  if(bytes.length === 4) {
    return util.bytesToIPv4(bytes);
  }
  if(bytes.length === 16) {
    return util.bytesToIPv6(bytes);
  }
  return null;
};

/**
 * Converts 4-bytes into an IPv4 string representation. The bytes must be
 * in network order.
 *
 * @param bytes the bytes to convert.
 *
 * @return the IPv4 string representation or null for an invalid # of bytes.
 */
util.bytesToIPv4 = function(bytes) {
  if(bytes.length !== 4) {
    return null;
  }
  var ip = [];
  for(var i = 0; i < bytes.length; ++i) {
    ip.push(bytes.charCodeAt(i));
  }
  return ip.join('.');
};

/**
 * Converts 16-bytes into an IPv16 string representation. The bytes must be
 * in network order.
 *
 * @param bytes the bytes to convert.
 *
 * @return the IPv16 string representation or null for an invalid # of bytes.
 */
util.bytesToIPv6 = function(bytes) {
  if(bytes.length !== 16) {
    return null;
  }
  var ip = [];
  var zeroGroups = [];
  var zeroMaxGroup = 0;
  for(var i = 0; i < bytes.length; i += 2) {
    var hex = util.bytesToHex(bytes[i] + bytes[i + 1]);
    // canonicalize zero representation
    while(hex[0] === '0' && hex !== '0') {
      hex = hex.substr(1);
    }
    if(hex === '0') {
      var last = zeroGroups[zeroGroups.length - 1];
      var idx = ip.length;
      if(!last || idx !== last.end + 1) {
        zeroGroups.push({start: idx, end: idx});
      } else {
        last.end = idx;
        if((last.end - last.start) >
          (zeroGroups[zeroMaxGroup].end - zeroGroups[zeroMaxGroup].start)) {
          zeroMaxGroup = zeroGroups.length - 1;
        }
      }
    }
    ip.push(hex);
  }
  if(zeroGroups.length > 0) {
    var group = zeroGroups[zeroMaxGroup];
    // only shorten group of length > 0
    if(group.end - group.start > 0) {
      ip.splice(group.start, group.end - group.start + 1, '');
      if(group.start === 0) {
        ip.unshift('');
      }
      if(group.end === 7) {
        ip.push('');
      }
    }
  }
  return ip.join(':');
};

/**
 * Estimates the number of processes that can be run concurrently. If
 * creating Web Workers, keep in mind that the main JavaScript process needs
 * its own core.
 *
 * @param options the options to use:
 *          update true to force an update (not use the cached value).
 * @param callback(err, max) called once the operation completes.
 */
util.estimateCores = function(options, callback) {
  if(typeof options === 'function') {
    callback = options;
    options = {};
  }
  options = options || {};
  if('cores' in util && !options.update) {
    return callback(null, util.cores);
  }
  if(typeof navigator !== 'undefined' &&
    'hardwareConcurrency' in navigator &&
    navigator.hardwareConcurrency > 0) {
    util.cores = navigator.hardwareConcurrency;
    return callback(null, util.cores);
  }
  if(typeof Worker === 'undefined') {
    // workers not available
    util.cores = 1;
    return callback(null, util.cores);
  }
  if(typeof Blob === 'undefined') {
    // can't estimate, default to 2
    util.cores = 2;
    return callback(null, util.cores);
  }

  // create worker concurrency estimation code as blob
  var blobUrl = URL.createObjectURL(new Blob(['(',
    function() {
      self.addEventListener('message', function(e) {
        // run worker for 4 ms
        var st = Date.now();
        var et = st + 4;
        while(Date.now() < et);
        self.postMessage({st: st, et: et});
      });
    }.toString(),
  ')()'], {type: 'application/javascript'}));

  // take 5 samples using 16 workers
  sample([], 5, 16);

  function sample(max, samples, numWorkers) {
    if(samples === 0) {
      // get overlap average
      var avg = Math.floor(max.reduce(function(avg, x) {
        return avg + x;
      }, 0) / max.length);
      util.cores = Math.max(1, avg);
      URL.revokeObjectURL(blobUrl);
      return callback(null, util.cores);
    }
    map(numWorkers, function(err, results) {
      max.push(reduce(numWorkers, results));
      sample(max, samples - 1, numWorkers);
    });
  }

  function map(numWorkers, callback) {
    var workers = [];
    var results = [];
    for(var i = 0; i < numWorkers; ++i) {
      var worker = new Worker(blobUrl);
      worker.addEventListener('message', function(e) {
        results.push(e.data);
        if(results.length === numWorkers) {
          for(var i = 0; i < numWorkers; ++i) {
            workers[i].terminate();
          }
          callback(null, results);
        }
      });
      workers.push(worker);
    }
    for(var i = 0; i < numWorkers; ++i) {
      workers[i].postMessage(i);
    }
  }

  function reduce(numWorkers, results) {
    // find overlapping time windows
    var overlaps = [];
    for(var n = 0; n < numWorkers; ++n) {
      var r1 = results[n];
      var overlap = overlaps[n] = [];
      for(var i = 0; i < numWorkers; ++i) {
        if(n === i) {
          continue;
        }
        var r2 = results[i];
        if((r1.st > r2.st && r1.st < r2.et) ||
          (r2.st > r1.st && r2.st < r1.et)) {
          overlap.push(i);
        }
      }
    }
    // get maximum overlaps ... don't include overlapping worker itself
    // as the main JS process was also being scheduled during the work and
    // would have to be subtracted from the estimate anyway
    return overlaps.reduce(function(max, overlap) {
      return Math.max(max, overlap.length);
    }, 0);
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/node-forge/lib/x509.js":
/*!*********************************************!*\
  !*** ./node_modules/node-forge/lib/x509.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Javascript implementation of X.509 and related components (such as
 * Certification Signing Requests) of a Public Key Infrastructure.
 *
 * @author Dave Longley
 *
 * Copyright (c) 2010-2014 Digital Bazaar, Inc.
 *
 * The ASN.1 representation of an X.509v3 certificate is as follows
 * (see RFC 2459):
 *
 * Certificate ::= SEQUENCE {
 *   tbsCertificate       TBSCertificate,
 *   signatureAlgorithm   AlgorithmIdentifier,
 *   signatureValue       BIT STRING
 * }
 *
 * TBSCertificate ::= SEQUENCE {
 *   version         [0]  EXPLICIT Version DEFAULT v1,
 *   serialNumber         CertificateSerialNumber,
 *   signature            AlgorithmIdentifier,
 *   issuer               Name,
 *   validity             Validity,
 *   subject              Name,
 *   subjectPublicKeyInfo SubjectPublicKeyInfo,
 *   issuerUniqueID  [1]  IMPLICIT UniqueIdentifier OPTIONAL,
 *                        -- If present, version shall be v2 or v3
 *   subjectUniqueID [2]  IMPLICIT UniqueIdentifier OPTIONAL,
 *                        -- If present, version shall be v2 or v3
 *   extensions      [3]  EXPLICIT Extensions OPTIONAL
 *                        -- If present, version shall be v3
 * }
 *
 * Version ::= INTEGER  { v1(0), v2(1), v3(2) }
 *
 * CertificateSerialNumber ::= INTEGER
 *
 * Name ::= CHOICE {
 *   // only one possible choice for now
 *   RDNSequence
 * }
 *
 * RDNSequence ::= SEQUENCE OF RelativeDistinguishedName
 *
 * RelativeDistinguishedName ::= SET OF AttributeTypeAndValue
 *
 * AttributeTypeAndValue ::= SEQUENCE {
 *   type     AttributeType,
 *   value    AttributeValue
 * }
 * AttributeType ::= OBJECT IDENTIFIER
 * AttributeValue ::= ANY DEFINED BY AttributeType
 *
 * Validity ::= SEQUENCE {
 *   notBefore      Time,
 *   notAfter       Time
 * }
 *
 * Time ::= CHOICE {
 *   utcTime        UTCTime,
 *   generalTime    GeneralizedTime
 * }
 *
 * UniqueIdentifier ::= BIT STRING
 *
 * SubjectPublicKeyInfo ::= SEQUENCE {
 *   algorithm            AlgorithmIdentifier,
 *   subjectPublicKey     BIT STRING
 * }
 *
 * Extensions ::= SEQUENCE SIZE (1..MAX) OF Extension
 *
 * Extension ::= SEQUENCE {
 *   extnID      OBJECT IDENTIFIER,
 *   critical    BOOLEAN DEFAULT FALSE,
 *   extnValue   OCTET STRING
 * }
 *
 * The only key algorithm currently supported for PKI is RSA.
 *
 * RSASSA-PSS signatures are described in RFC 3447 and RFC 4055.
 *
 * PKCS#10 v1.7 describes certificate signing requests:
 *
 * CertificationRequestInfo:
 *
 * CertificationRequestInfo ::= SEQUENCE {
 *   version       INTEGER { v1(0) } (v1,...),
 *   subject       Name,
 *   subjectPKInfo SubjectPublicKeyInfo{{ PKInfoAlgorithms }},
 *   attributes    [0] Attributes{{ CRIAttributes }}
 * }
 *
 * Attributes { ATTRIBUTE:IOSet } ::= SET OF Attribute{{ IOSet }}
 *
 * CRIAttributes  ATTRIBUTE  ::= {
 *   ... -- add any locally defined attributes here -- }
 *
 * Attribute { ATTRIBUTE:IOSet } ::= SEQUENCE {
 *   type   ATTRIBUTE.&id({IOSet}),
 *   values SET SIZE(1..MAX) OF ATTRIBUTE.&Type({IOSet}{@type})
 * }
 *
 * CertificationRequest ::= SEQUENCE {
 *   certificationRequestInfo CertificationRequestInfo,
 *   signatureAlgorithm AlgorithmIdentifier{{ SignatureAlgorithms }},
 *   signature          BIT STRING
 * }
 */
var forge = __webpack_require__(/*! ./forge */ "./node_modules/node-forge/lib/forge.js");
__webpack_require__(/*! ./aes */ "./node_modules/node-forge/lib/aes.js");
__webpack_require__(/*! ./asn1 */ "./node_modules/node-forge/lib/asn1.js");
__webpack_require__(/*! ./des */ "./node_modules/node-forge/lib/des.js");
__webpack_require__(/*! ./md */ "./node_modules/node-forge/lib/md.js");
__webpack_require__(/*! ./mgf */ "./node_modules/node-forge/lib/mgf.js");
__webpack_require__(/*! ./oids */ "./node_modules/node-forge/lib/oids.js");
__webpack_require__(/*! ./pem */ "./node_modules/node-forge/lib/pem.js");
__webpack_require__(/*! ./pss */ "./node_modules/node-forge/lib/pss.js");
__webpack_require__(/*! ./rsa */ "./node_modules/node-forge/lib/rsa.js");
__webpack_require__(/*! ./util */ "./node_modules/node-forge/lib/util.js");

// shortcut for asn.1 API
var asn1 = forge.asn1;

/* Public Key Infrastructure (PKI) implementation. */
var pki = module.exports = forge.pki = forge.pki || {};
var oids = pki.oids;

// short name OID mappings
var _shortNames = {};
_shortNames['CN'] = oids['commonName'];
_shortNames['commonName'] = 'CN';
_shortNames['C'] = oids['countryName'];
_shortNames['countryName'] = 'C';
_shortNames['L'] = oids['localityName'];
_shortNames['localityName'] = 'L';
_shortNames['ST'] = oids['stateOrProvinceName'];
_shortNames['stateOrProvinceName'] = 'ST';
_shortNames['O'] = oids['organizationName'];
_shortNames['organizationName'] = 'O';
_shortNames['OU'] = oids['organizationalUnitName'];
_shortNames['organizationalUnitName'] = 'OU';
_shortNames['E'] = oids['emailAddress'];
_shortNames['emailAddress'] = 'E';

// validator for an SubjectPublicKeyInfo structure
// Note: Currently only works with an RSA public key
var publicKeyValidator = forge.pki.rsa.publicKeyValidator;

// validator for an X.509v3 certificate
var x509CertificateValidator = {
  name: 'Certificate',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: 'Certificate.TBSCertificate',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SEQUENCE,
    constructed: true,
    captureAsn1: 'tbsCertificate',
    value: [{
      name: 'Certificate.TBSCertificate.version',
      tagClass: asn1.Class.CONTEXT_SPECIFIC,
      type: 0,
      constructed: true,
      optional: true,
      value: [{
        name: 'Certificate.TBSCertificate.version.integer',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: 'certVersion'
      }]
    }, {
      name: 'Certificate.TBSCertificate.serialNumber',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.INTEGER,
      constructed: false,
      capture: 'certSerialNumber'
    }, {
      name: 'Certificate.TBSCertificate.signature',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: 'Certificate.TBSCertificate.signature.algorithm',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OID,
        constructed: false,
        capture: 'certinfoSignatureOid'
      }, {
        name: 'Certificate.TBSCertificate.signature.parameters',
        tagClass: asn1.Class.UNIVERSAL,
        optional: true,
        captureAsn1: 'certinfoSignatureParams'
      }]
    }, {
      name: 'Certificate.TBSCertificate.issuer',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      captureAsn1: 'certIssuer'
    }, {
      name: 'Certificate.TBSCertificate.validity',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      // Note: UTC and generalized times may both appear so the capture
      // names are based on their detected order, the names used below
      // are only for the common case, which validity time really means
      // "notBefore" and which means "notAfter" will be determined by order
      value: [{
        // notBefore (Time) (UTC time case)
        name: 'Certificate.TBSCertificate.validity.notBefore (utc)',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.UTCTIME,
        constructed: false,
        optional: true,
        capture: 'certValidity1UTCTime'
      }, {
        // notBefore (Time) (generalized time case)
        name: 'Certificate.TBSCertificate.validity.notBefore (generalized)',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.GENERALIZEDTIME,
        constructed: false,
        optional: true,
        capture: 'certValidity2GeneralizedTime'
      }, {
        // notAfter (Time) (only UTC time is supported)
        name: 'Certificate.TBSCertificate.validity.notAfter (utc)',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.UTCTIME,
        constructed: false,
        optional: true,
        capture: 'certValidity3UTCTime'
      }, {
        // notAfter (Time) (only UTC time is supported)
        name: 'Certificate.TBSCertificate.validity.notAfter (generalized)',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.GENERALIZEDTIME,
        constructed: false,
        optional: true,
        capture: 'certValidity4GeneralizedTime'
      }]
    }, {
      // Name (subject) (RDNSequence)
      name: 'Certificate.TBSCertificate.subject',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      captureAsn1: 'certSubject'
    },
    // SubjectPublicKeyInfo
    publicKeyValidator,
    {
      // issuerUniqueID (optional)
      name: 'Certificate.TBSCertificate.issuerUniqueID',
      tagClass: asn1.Class.CONTEXT_SPECIFIC,
      type: 1,
      constructed: true,
      optional: true,
      value: [{
        name: 'Certificate.TBSCertificate.issuerUniqueID.id',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.BITSTRING,
        constructed: false,
        // TODO: support arbitrary bit length ids
        captureBitStringValue: 'certIssuerUniqueId'
      }]
    }, {
      // subjectUniqueID (optional)
      name: 'Certificate.TBSCertificate.subjectUniqueID',
      tagClass: asn1.Class.CONTEXT_SPECIFIC,
      type: 2,
      constructed: true,
      optional: true,
      value: [{
        name: 'Certificate.TBSCertificate.subjectUniqueID.id',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.BITSTRING,
        constructed: false,
        // TODO: support arbitrary bit length ids
        captureBitStringValue: 'certSubjectUniqueId'
      }]
    }, {
      // Extensions (optional)
      name: 'Certificate.TBSCertificate.extensions',
      tagClass: asn1.Class.CONTEXT_SPECIFIC,
      type: 3,
      constructed: true,
      captureAsn1: 'certExtensions',
      optional: true
    }]
  }, {
    // AlgorithmIdentifier (signature algorithm)
    name: 'Certificate.signatureAlgorithm',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SEQUENCE,
    constructed: true,
    value: [{
      // algorithm
      name: 'Certificate.signatureAlgorithm.algorithm',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.OID,
      constructed: false,
      capture: 'certSignatureOid'
    }, {
      name: 'Certificate.TBSCertificate.signature.parameters',
      tagClass: asn1.Class.UNIVERSAL,
      optional: true,
      captureAsn1: 'certSignatureParams'
    }]
  }, {
    // SignatureValue
    name: 'Certificate.signatureValue',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.BITSTRING,
    constructed: false,
    captureBitStringValue: 'certSignature'
  }]
};

var rsassaPssParameterValidator = {
  name: 'rsapss',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: 'rsapss.hashAlgorithm',
    tagClass: asn1.Class.CONTEXT_SPECIFIC,
    type: 0,
    constructed: true,
    value: [{
      name: 'rsapss.hashAlgorithm.AlgorithmIdentifier',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Class.SEQUENCE,
      constructed: true,
      optional: true,
      value: [{
        name: 'rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OID,
        constructed: false,
        capture: 'hashOid'
        /* parameter block omitted, for SHA1 NULL anyhow. */
      }]
    }]
  }, {
    name: 'rsapss.maskGenAlgorithm',
    tagClass: asn1.Class.CONTEXT_SPECIFIC,
    type: 1,
    constructed: true,
    value: [{
      name: 'rsapss.maskGenAlgorithm.AlgorithmIdentifier',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Class.SEQUENCE,
      constructed: true,
      optional: true,
      value: [{
        name: 'rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OID,
        constructed: false,
        capture: 'maskGenOid'
      }, {
        name: 'rsapss.maskGenAlgorithm.AlgorithmIdentifier.params',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: 'rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm',
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.OID,
          constructed: false,
          capture: 'maskGenHashOid'
          /* parameter block omitted, for SHA1 NULL anyhow. */
        }]
      }]
    }]
  }, {
    name: 'rsapss.saltLength',
    tagClass: asn1.Class.CONTEXT_SPECIFIC,
    type: 2,
    optional: true,
    value: [{
      name: 'rsapss.saltLength.saltLength',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Class.INTEGER,
      constructed: false,
      capture: 'saltLength'
    }]
  }, {
    name: 'rsapss.trailerField',
    tagClass: asn1.Class.CONTEXT_SPECIFIC,
    type: 3,
    optional: true,
    value: [{
      name: 'rsapss.trailer.trailer',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Class.INTEGER,
      constructed: false,
      capture: 'trailer'
    }]
  }]
};

// validator for a CertificationRequestInfo structure
var certificationRequestInfoValidator = {
  name: 'CertificationRequestInfo',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  captureAsn1: 'certificationRequestInfo',
  value: [{
    name: 'CertificationRequestInfo.integer',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.INTEGER,
    constructed: false,
    capture: 'certificationRequestInfoVersion'
  }, {
    // Name (subject) (RDNSequence)
    name: 'CertificationRequestInfo.subject',
    tagClass: asn1.Class.UNIVERSAL,
    type: asn1.Type.SEQUENCE,
    constructed: true,
    captureAsn1: 'certificationRequestInfoSubject'
  },
  // SubjectPublicKeyInfo
  publicKeyValidator,
  {
    name: 'CertificationRequestInfo.attributes',
    tagClass: asn1.Class.CONTEXT_SPECIFIC,
    type: 0,
    constructed: true,
    optional: true,
    capture: 'certificationRequestInfoAttributes',
    value: [{
      name: 'CertificationRequestInfo.attributes',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: 'CertificationRequestInfo.attributes.type',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OID,
        constructed: false
      }, {
        name: 'CertificationRequestInfo.attributes.value',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SET,
        constructed: true
      }]
    }]
  }]
};

// validator for a CertificationRequest structure
var certificationRequestValidator = {
  name: 'CertificationRequest',
  tagClass: asn1.Class.UNIVERSAL,
  type: asn1.Type.SEQUENCE,
  constructed: true,
  captureAsn1: 'csr',
  value: [
    certificationRequestInfoValidator, {
      // AlgorithmIdentifier (signature algorithm)
      name: 'CertificationRequest.signatureAlgorithm',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        // algorithm
        name: 'CertificationRequest.signatureAlgorithm.algorithm',
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OID,
        constructed: false,
        capture: 'csrSignatureOid'
      }, {
        name: 'CertificationRequest.signatureAlgorithm.parameters',
        tagClass: asn1.Class.UNIVERSAL,
        optional: true,
        captureAsn1: 'csrSignatureParams'
      }]
    }, {
      // signature
      name: 'CertificationRequest.signature',
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.BITSTRING,
      constructed: false,
      captureBitStringValue: 'csrSignature'
    }
  ]
};

/**
 * Converts an RDNSequence of ASN.1 DER-encoded RelativeDistinguishedName
 * sets into an array with objects that have type and value properties.
 *
 * @param rdn the RDNSequence to convert.
 * @param md a message digest to append type and value to if provided.
 */
pki.RDNAttributesAsArray = function(rdn, md) {
  var rval = [];

  // each value in 'rdn' in is a SET of RelativeDistinguishedName
  var set, attr, obj;
  for(var si = 0; si < rdn.value.length; ++si) {
    // get the RelativeDistinguishedName set
    set = rdn.value[si];

    // each value in the SET is an AttributeTypeAndValue sequence
    // containing first a type (an OID) and second a value (defined by
    // the OID)
    for(var i = 0; i < set.value.length; ++i) {
      obj = {};
      attr = set.value[i];
      obj.type = asn1.derToOid(attr.value[0].value);
      obj.value = attr.value[1].value;
      obj.valueTagClass = attr.value[1].type;
      // if the OID is known, get its name and short name
      if(obj.type in oids) {
        obj.name = oids[obj.type];
        if(obj.name in _shortNames) {
          obj.shortName = _shortNames[obj.name];
        }
      }
      if(md) {
        md.update(obj.type);
        md.update(obj.value);
      }
      rval.push(obj);
    }
  }

  return rval;
};

/**
 * Converts ASN.1 CRIAttributes into an array with objects that have type and
 * value properties.
 *
 * @param attributes the CRIAttributes to convert.
 */
pki.CRIAttributesAsArray = function(attributes) {
  var rval = [];

  // each value in 'attributes' in is a SEQUENCE with an OID and a SET
  for(var si = 0; si < attributes.length; ++si) {
    // get the attribute sequence
    var seq = attributes[si];

    // each value in the SEQUENCE containing first a type (an OID) and
    // second a set of values (defined by the OID)
    var type = asn1.derToOid(seq.value[0].value);
    var values = seq.value[1].value;
    for(var vi = 0; vi < values.length; ++vi) {
      var obj = {};
      obj.type = type;
      obj.value = values[vi].value;
      obj.valueTagClass = values[vi].type;
      // if the OID is known, get its name and short name
      if(obj.type in oids) {
        obj.name = oids[obj.type];
        if(obj.name in _shortNames) {
          obj.shortName = _shortNames[obj.name];
        }
      }
      // parse extensions
      if(obj.type === oids.extensionRequest) {
        obj.extensions = [];
        for(var ei = 0; ei < obj.value.length; ++ei) {
          obj.extensions.push(pki.certificateExtensionFromAsn1(obj.value[ei]));
        }
      }
      rval.push(obj);
    }
  }

  return rval;
};

/**
 * Gets an issuer or subject attribute from its name, type, or short name.
 *
 * @param obj the issuer or subject object.
 * @param options a short name string or an object with:
 *          shortName the short name for the attribute.
 *          name the name for the attribute.
 *          type the type for the attribute.
 *
 * @return the attribute.
 */
function _getAttribute(obj, options) {
  if(typeof options === 'string') {
    options = {shortName: options};
  }

  var rval = null;
  var attr;
  for(var i = 0; rval === null && i < obj.attributes.length; ++i) {
    attr = obj.attributes[i];
    if(options.type && options.type === attr.type) {
      rval = attr;
    } else if(options.name && options.name === attr.name) {
      rval = attr;
    } else if(options.shortName && options.shortName === attr.shortName) {
      rval = attr;
    }
  }
  return rval;
}

/**
 * Converts signature parameters from ASN.1 structure.
 *
 * Currently only RSASSA-PSS supported.  The PKCS#1 v1.5 signature scheme had
 * no parameters.
 *
 * RSASSA-PSS-params  ::=  SEQUENCE  {
 *   hashAlgorithm      [0] HashAlgorithm DEFAULT
 *                             sha1Identifier,
 *   maskGenAlgorithm   [1] MaskGenAlgorithm DEFAULT
 *                             mgf1SHA1Identifier,
 *   saltLength         [2] INTEGER DEFAULT 20,
 *   trailerField       [3] INTEGER DEFAULT 1
 * }
 *
 * HashAlgorithm  ::=  AlgorithmIdentifier
 *
 * MaskGenAlgorithm  ::=  AlgorithmIdentifier
 *
 * AlgorithmIdentifer ::= SEQUENCE {
 *   algorithm OBJECT IDENTIFIER,
 *   parameters ANY DEFINED BY algorithm OPTIONAL
 * }
 *
 * @param oid The OID specifying the signature algorithm
 * @param obj The ASN.1 structure holding the parameters
 * @param fillDefaults Whether to use return default values where omitted
 * @return signature parameter object
 */
var _readSignatureParameters = function(oid, obj, fillDefaults) {
  var params = {};

  if(oid !== oids['RSASSA-PSS']) {
    return params;
  }

  if(fillDefaults) {
    params = {
      hash: {
        algorithmOid: oids['sha1']
      },
      mgf: {
        algorithmOid: oids['mgf1'],
        hash: {
          algorithmOid: oids['sha1']
        }
      },
      saltLength: 20
    };
  }

  var capture = {};
  var errors = [];
  if(!asn1.validate(obj, rsassaPssParameterValidator, capture, errors)) {
    var error = new Error('Cannot read RSASSA-PSS parameter block.');
    error.errors = errors;
    throw error;
  }

  if(capture.hashOid !== undefined) {
    params.hash = params.hash || {};
    params.hash.algorithmOid = asn1.derToOid(capture.hashOid);
  }

  if(capture.maskGenOid !== undefined) {
    params.mgf = params.mgf || {};
    params.mgf.algorithmOid = asn1.derToOid(capture.maskGenOid);
    params.mgf.hash = params.mgf.hash || {};
    params.mgf.hash.algorithmOid = asn1.derToOid(capture.maskGenHashOid);
  }

  if(capture.saltLength !== undefined) {
    params.saltLength = capture.saltLength.charCodeAt(0);
  }

  return params;
};

/**
 * Converts an X.509 certificate from PEM format.
 *
 * Note: If the certificate is to be verified then compute hash should
 * be set to true. This will scan the TBSCertificate part of the ASN.1
 * object while it is converted so it doesn't need to be converted back
 * to ASN.1-DER-encoding later.
 *
 * @param pem the PEM-formatted certificate.
 * @param computeHash true to compute the hash for verification.
 * @param strict true to be strict when checking ASN.1 value lengths, false to
 *          allow truncated values (default: true).
 *
 * @return the certificate.
 */
pki.certificateFromPem = function(pem, computeHash, strict) {
  var msg = forge.pem.decode(pem)[0];

  if(msg.type !== 'CERTIFICATE' &&
    msg.type !== 'X509 CERTIFICATE' &&
    msg.type !== 'TRUSTED CERTIFICATE') {
    var error = new Error(
      'Could not convert certificate from PEM; PEM header type ' +
      'is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');
    error.headerType = msg.type;
    throw error;
  }
  if(msg.procType && msg.procType.type === 'ENCRYPTED') {
    throw new Error(
      'Could not convert certificate from PEM; PEM is encrypted.');
  }

  // convert DER to ASN.1 object
  var obj = asn1.fromDer(msg.body, strict);

  return pki.certificateFromAsn1(obj, computeHash);
};

/**
 * Converts an X.509 certificate to PEM format.
 *
 * @param cert the certificate.
 * @param maxline the maximum characters per line, defaults to 64.
 *
 * @return the PEM-formatted certificate.
 */
pki.certificateToPem = function(cert, maxline) {
  // convert to ASN.1, then DER, then PEM-encode
  var msg = {
    type: 'CERTIFICATE',
    body: asn1.toDer(pki.certificateToAsn1(cert)).getBytes()
  };
  return forge.pem.encode(msg, {maxline: maxline});
};

/**
 * Converts an RSA public key from PEM format.
 *
 * @param pem the PEM-formatted public key.
 *
 * @return the public key.
 */
pki.publicKeyFromPem = function(pem) {
  var msg = forge.pem.decode(pem)[0];

  if(msg.type !== 'PUBLIC KEY' && msg.type !== 'RSA PUBLIC KEY') {
    var error = new Error('Could not convert public key from PEM; PEM header ' +
      'type is not "PUBLIC KEY" or "RSA PUBLIC KEY".');
    error.headerType = msg.type;
    throw error;
  }
  if(msg.procType && msg.procType.type === 'ENCRYPTED') {
    throw new Error('Could not convert public key from PEM; PEM is encrypted.');
  }

  // convert DER to ASN.1 object
  var obj = asn1.fromDer(msg.body);

  return pki.publicKeyFromAsn1(obj);
};

/**
 * Converts an RSA public key to PEM format (using a SubjectPublicKeyInfo).
 *
 * @param key the public key.
 * @param maxline the maximum characters per line, defaults to 64.
 *
 * @return the PEM-formatted public key.
 */
pki.publicKeyToPem = function(key, maxline) {
  // convert to ASN.1, then DER, then PEM-encode
  var msg = {
    type: 'PUBLIC KEY',
    body: asn1.toDer(pki.publicKeyToAsn1(key)).getBytes()
  };
  return forge.pem.encode(msg, {maxline: maxline});
};

/**
 * Converts an RSA public key to PEM format (using an RSAPublicKey).
 *
 * @param key the public key.
 * @param maxline the maximum characters per line, defaults to 64.
 *
 * @return the PEM-formatted public key.
 */
pki.publicKeyToRSAPublicKeyPem = function(key, maxline) {
  // convert to ASN.1, then DER, then PEM-encode
  var msg = {
    type: 'RSA PUBLIC KEY',
    body: asn1.toDer(pki.publicKeyToRSAPublicKey(key)).getBytes()
  };
  return forge.pem.encode(msg, {maxline: maxline});
};

/**
 * Gets a fingerprint for the given public key.
 *
 * @param options the options to use.
 *          [md] the message digest object to use (defaults to forge.md.sha1).
 *          [type] the type of fingerprint, such as 'RSAPublicKey',
 *            'SubjectPublicKeyInfo' (defaults to 'RSAPublicKey').
 *          [encoding] an alternative output encoding, such as 'hex'
 *            (defaults to none, outputs a byte buffer).
 *          [delimiter] the delimiter to use between bytes for 'hex' encoded
 *            output, eg: ':' (defaults to none).
 *
 * @return the fingerprint as a byte buffer or other encoding based on options.
 */
pki.getPublicKeyFingerprint = function(key, options) {
  options = options || {};
  var md = options.md || forge.md.sha1.create();
  var type = options.type || 'RSAPublicKey';

  var bytes;
  switch(type) {
    case 'RSAPublicKey':
      bytes = asn1.toDer(pki.publicKeyToRSAPublicKey(key)).getBytes();
      break;
    case 'SubjectPublicKeyInfo':
      bytes = asn1.toDer(pki.publicKeyToAsn1(key)).getBytes();
      break;
    default:
      throw new Error('Unknown fingerprint type "' + options.type + '".');
  }

  // hash public key bytes
  md.start();
  md.update(bytes);
  var digest = md.digest();
  if(options.encoding === 'hex') {
    var hex = digest.toHex();
    if(options.delimiter) {
      return hex.match(/.{2}/g).join(options.delimiter);
    }
    return hex;
  } else if(options.encoding === 'binary') {
    return digest.getBytes();
  } else if(options.encoding) {
    throw new Error('Unknown encoding "' + options.encoding + '".');
  }
  return digest;
};

/**
 * Converts a PKCS#10 certification request (CSR) from PEM format.
 *
 * Note: If the certification request is to be verified then compute hash
 * should be set to true. This will scan the CertificationRequestInfo part of
 * the ASN.1 object while it is converted so it doesn't need to be converted
 * back to ASN.1-DER-encoding later.
 *
 * @param pem the PEM-formatted certificate.
 * @param computeHash true to compute the hash for verification.
 * @param strict true to be strict when checking ASN.1 value lengths, false to
 *          allow truncated values (default: true).
 *
 * @return the certification request (CSR).
 */
pki.certificationRequestFromPem = function(pem, computeHash, strict) {
  var msg = forge.pem.decode(pem)[0];

  if(msg.type !== 'CERTIFICATE REQUEST') {
    var error = new Error('Could not convert certification request from PEM; ' +
      'PEM header type is not "CERTIFICATE REQUEST".');
    error.headerType = msg.type;
    throw error;
  }
  if(msg.procType && msg.procType.type === 'ENCRYPTED') {
    throw new Error('Could not convert certification request from PEM; ' +
      'PEM is encrypted.');
  }

  // convert DER to ASN.1 object
  var obj = asn1.fromDer(msg.body, strict);

  return pki.certificationRequestFromAsn1(obj, computeHash);
};

/**
 * Converts a PKCS#10 certification request (CSR) to PEM format.
 *
 * @param csr the certification request.
 * @param maxline the maximum characters per line, defaults to 64.
 *
 * @return the PEM-formatted certification request.
 */
pki.certificationRequestToPem = function(csr, maxline) {
  // convert to ASN.1, then DER, then PEM-encode
  var msg = {
    type: 'CERTIFICATE REQUEST',
    body: asn1.toDer(pki.certificationRequestToAsn1(csr)).getBytes()
  };
  return forge.pem.encode(msg, {maxline: maxline});
};

/**
 * Creates an empty X.509v3 RSA certificate.
 *
 * @return the certificate.
 */
pki.createCertificate = function() {
  var cert = {};
  cert.version = 0x02;
  cert.serialNumber = '00';
  cert.signatureOid = null;
  cert.signature = null;
  cert.siginfo = {};
  cert.siginfo.algorithmOid = null;
  cert.validity = {};
  cert.validity.notBefore = new Date();
  cert.validity.notAfter = new Date();

  cert.issuer = {};
  cert.issuer.getField = function(sn) {
    return _getAttribute(cert.issuer, sn);
  };
  cert.issuer.addField = function(attr) {
    _fillMissingFields([attr]);
    cert.issuer.attributes.push(attr);
  };
  cert.issuer.attributes = [];
  cert.issuer.hash = null;

  cert.subject = {};
  cert.subject.getField = function(sn) {
    return _getAttribute(cert.subject, sn);
  };
  cert.subject.addField = function(attr) {
    _fillMissingFields([attr]);
    cert.subject.attributes.push(attr);
  };
  cert.subject.attributes = [];
  cert.subject.hash = null;

  cert.extensions = [];
  cert.publicKey = null;
  cert.md = null;

  /**
   * Sets the subject of this certificate.
   *
   * @param attrs the array of subject attributes to use.
   * @param uniqueId an optional a unique ID to use.
   */
  cert.setSubject = function(attrs, uniqueId) {
    // set new attributes, clear hash
    _fillMissingFields(attrs);
    cert.subject.attributes = attrs;
    delete cert.subject.uniqueId;
    if(uniqueId) {
      // TODO: support arbitrary bit length ids
      cert.subject.uniqueId = uniqueId;
    }
    cert.subject.hash = null;
  };

  /**
   * Sets the issuer of this certificate.
   *
   * @param attrs the array of issuer attributes to use.
   * @param uniqueId an optional a unique ID to use.
   */
  cert.setIssuer = function(attrs, uniqueId) {
    // set new attributes, clear hash
    _fillMissingFields(attrs);
    cert.issuer.attributes = attrs;
    delete cert.issuer.uniqueId;
    if(uniqueId) {
      // TODO: support arbitrary bit length ids
      cert.issuer.uniqueId = uniqueId;
    }
    cert.issuer.hash = null;
  };

  /**
   * Sets the extensions of this certificate.
   *
   * @param exts the array of extensions to use.
   */
  cert.setExtensions = function(exts) {
    for(var i = 0; i < exts.length; ++i) {
      _fillMissingExtensionFields(exts[i], {cert: cert});
    }
    // set new extensions
    cert.extensions = exts;
  };

  /**
   * Gets an extension by its name or id.
   *
   * @param options the name to use or an object with:
   *          name the name to use.
   *          id the id to use.
   *
   * @return the extension or null if not found.
   */
  cert.getExtension = function(options) {
    if(typeof options === 'string') {
      options = {name: options};
    }

    var rval = null;
    var ext;
    for(var i = 0; rval === null && i < cert.extensions.length; ++i) {
      ext = cert.extensions[i];
      if(options.id && ext.id === options.id) {
        rval = ext;
      } else if(options.name && ext.name === options.name) {
        rval = ext;
      }
    }
    return rval;
  };

  /**
   * Signs this certificate using the given private key.
   *
   * @param key the private key to sign with.
   * @param md the message digest object to use (defaults to forge.md.sha1).
   */
  cert.sign = function(key, md) {
    // TODO: get signature OID from private key
    cert.md = md || forge.md.sha1.create();
    var algorithmOid = oids[cert.md.algorithm + 'WithRSAEncryption'];
    if(!algorithmOid) {
      var error = new Error('Could not compute certificate digest. ' +
        'Unknown message digest algorithm OID.');
      error.algorithm = cert.md.algorithm;
      throw error;
    }
    cert.signatureOid = cert.siginfo.algorithmOid = algorithmOid;

    // get TBSCertificate, convert to DER
    cert.tbsCertificate = pki.getTBSCertificate(cert);
    var bytes = asn1.toDer(cert.tbsCertificate);

    // digest and sign
    cert.md.update(bytes.getBytes());
    cert.signature = key.sign(cert.md);
  };

  /**
   * Attempts verify the signature on the passed certificate using this
   * certificate's public key.
   *
   * @param child the certificate to verify.
   *
   * @return true if verified, false if not.
   */
  cert.verify = function(child) {
    var rval = false;

    if(!cert.issued(child)) {
      var issuer = child.issuer;
      var subject = cert.subject;
      var error = new Error(
        'The parent certificate did not issue the given child ' +
        'certificate; the child certificate\'s issuer does not match the ' +
        'parent\'s subject.');
      error.expectedIssuer = issuer.attributes;
      error.actualIssuer = subject.attributes;
      throw error;
    }

    var md = child.md;
    if(md === null) {
      // check signature OID for supported signature types
      if(child.signatureOid in oids) {
        var oid = oids[child.signatureOid];
        switch(oid) {
          case 'sha1WithRSAEncryption':
            md = forge.md.sha1.create();
            break;
          case 'md5WithRSAEncryption':
            md = forge.md.md5.create();
            break;
          case 'sha256WithRSAEncryption':
            md = forge.md.sha256.create();
            break;
          case 'sha384WithRSAEncryption':
            md = forge.md.sha384.create();
            break;
          case 'sha512WithRSAEncryption':
            md = forge.md.sha512.create();
            break;
          case 'RSASSA-PSS':
            md = forge.md.sha256.create();
            break;
        }
      }
      if(md === null) {
        var error = new Error('Could not compute certificate digest. ' +
          'Unknown signature OID.');
        error.signatureOid = child.signatureOid;
        throw error;
      }

      // produce DER formatted TBSCertificate and digest it
      var tbsCertificate = child.tbsCertificate || pki.getTBSCertificate(child);
      var bytes = asn1.toDer(tbsCertificate);
      md.update(bytes.getBytes());
    }

    if(md !== null) {
      var scheme;

      switch(child.signatureOid) {
        case oids.sha1WithRSAEncryption:
          scheme = undefined; /* use PKCS#1 v1.5 padding scheme */
          break;
        case oids['RSASSA-PSS']:
          var hash, mgf;

          /* initialize mgf */
          hash = oids[child.signatureParameters.mgf.hash.algorithmOid];
          if(hash === undefined || forge.md[hash] === undefined) {
            var error = new Error('Unsupported MGF hash function.');
            error.oid = child.signatureParameters.mgf.hash.algorithmOid;
            error.name = hash;
            throw error;
          }

          mgf = oids[child.signatureParameters.mgf.algorithmOid];
          if(mgf === undefined || forge.mgf[mgf] === undefined) {
            var error = new Error('Unsupported MGF function.');
            error.oid = child.signatureParameters.mgf.algorithmOid;
            error.name = mgf;
            throw error;
          }

          mgf = forge.mgf[mgf].create(forge.md[hash].create());

          /* initialize hash function */
          hash = oids[child.signatureParameters.hash.algorithmOid];
          if(hash === undefined || forge.md[hash] === undefined) {
            throw {
              message: 'Unsupported RSASSA-PSS hash function.',
              oid: child.signatureParameters.hash.algorithmOid,
              name: hash
            };
          }

          scheme = forge.pss.create(forge.md[hash].create(), mgf,
            child.signatureParameters.saltLength);
          break;
      }

      // verify signature on cert using public key
      rval = cert.publicKey.verify(
        md.digest().getBytes(), child.signature, scheme);
    }

    return rval;
  };

  /**
   * Returns true if this certificate's issuer matches the passed
   * certificate's subject. Note that no signature check is performed.
   *
   * @param parent the certificate to check.
   *
   * @return true if this certificate's issuer matches the passed certificate's
   *         subject.
   */
  cert.isIssuer = function(parent) {
    var rval = false;

    var i = cert.issuer;
    var s = parent.subject;

    // compare hashes if present
    if(i.hash && s.hash) {
      rval = (i.hash === s.hash);
    } else if(i.attributes.length === s.attributes.length) {
      // all attributes are the same so issuer matches subject
      rval = true;
      var iattr, sattr;
      for(var n = 0; rval && n < i.attributes.length; ++n) {
        iattr = i.attributes[n];
        sattr = s.attributes[n];
        if(iattr.type !== sattr.type || iattr.value !== sattr.value) {
          // attribute mismatch
          rval = false;
        }
      }
    }

    return rval;
  };

  /**
   * Returns true if this certificate's subject matches the issuer of the
   * given certificate). Note that not signature check is performed.
   *
   * @param child the certificate to check.
   *
   * @return true if this certificate's subject matches the passed
   *         certificate's issuer.
   */
  cert.issued = function(child) {
    return child.isIssuer(cert);
  };

  /**
   * Generates the subjectKeyIdentifier for this certificate as byte buffer.
   *
   * @return the subjectKeyIdentifier for this certificate as byte buffer.
   */
  cert.generateSubjectKeyIdentifier = function() {
    /* See: 4.2.1.2 section of the the RFC3280, keyIdentifier is either:

      (1) The keyIdentifier is composed of the 160-bit SHA-1 hash of the
        value of the BIT STRING subjectPublicKey (excluding the tag,
        length, and number of unused bits).

      (2) The keyIdentifier is composed of a four bit type field with
        the value 0100 followed by the least significant 60 bits of the
        SHA-1 hash of the value of the BIT STRING subjectPublicKey
        (excluding the tag, length, and number of unused bit string bits).
    */

    // skipping the tag, length, and number of unused bits is the same
    // as just using the RSAPublicKey (for RSA keys, which are the
    // only ones supported)
    return pki.getPublicKeyFingerprint(cert.publicKey, {type: 'RSAPublicKey'});
  };

  /**
   * Verifies the subjectKeyIdentifier extension value for this certificate
   * against its public key. If no extension is found, false will be
   * returned.
   *
   * @return true if verified, false if not.
   */
  cert.verifySubjectKeyIdentifier = function() {
    var oid = oids['subjectKeyIdentifier'];
    for(var i = 0; i < cert.extensions.length; ++i) {
      var ext = cert.extensions[i];
      if(ext.id === oid) {
        var ski = cert.generateSubjectKeyIdentifier().getBytes();
        return (forge.util.hexToBytes(ext.subjectKeyIdentifier) === ski);
      }
    }
    return false;
  };

  return cert;
};

/**
 * Converts an X.509v3 RSA certificate from an ASN.1 object.
 *
 * Note: If the certificate is to be verified then compute hash should
 * be set to true. There is currently no implementation for converting
 * a certificate back to ASN.1 so the TBSCertificate part of the ASN.1
 * object needs to be scanned before the cert object is created.
 *
 * @param obj the asn1 representation of an X.509v3 RSA certificate.
 * @param computeHash true to compute the hash for verification.
 *
 * @return the certificate.
 */
pki.certificateFromAsn1 = function(obj, computeHash) {
  // validate certificate and capture data
  var capture = {};
  var errors = [];
  if(!asn1.validate(obj, x509CertificateValidator, capture, errors)) {
    var error = new Error('Cannot read X.509 certificate. ' +
      'ASN.1 object is not an X509v3 Certificate.');
    error.errors = errors;
    throw error;
  }

  // get oid
  var oid = asn1.derToOid(capture.publicKeyOid);
  if(oid !== pki.oids.rsaEncryption) {
    throw new Error('Cannot read public key. OID is not RSA.');
  }

  // create certificate
  var cert = pki.createCertificate();
  cert.version = capture.certVersion ?
    capture.certVersion.charCodeAt(0) : 0;
  var serial = forge.util.createBuffer(capture.certSerialNumber);
  cert.serialNumber = serial.toHex();
  cert.signatureOid = forge.asn1.derToOid(capture.certSignatureOid);
  cert.signatureParameters = _readSignatureParameters(
    cert.signatureOid, capture.certSignatureParams, true);
  cert.siginfo.algorithmOid = forge.asn1.derToOid(capture.certinfoSignatureOid);
  cert.siginfo.parameters = _readSignatureParameters(cert.siginfo.algorithmOid,
    capture.certinfoSignatureParams, false);
  cert.signature = capture.certSignature;

  var validity = [];
  if(capture.certValidity1UTCTime !== undefined) {
    validity.push(asn1.utcTimeToDate(capture.certValidity1UTCTime));
  }
  if(capture.certValidity2GeneralizedTime !== undefined) {
    validity.push(asn1.generalizedTimeToDate(
      capture.certValidity2GeneralizedTime));
  }
  if(capture.certValidity3UTCTime !== undefined) {
    validity.push(asn1.utcTimeToDate(capture.certValidity3UTCTime));
  }
  if(capture.certValidity4GeneralizedTime !== undefined) {
    validity.push(asn1.generalizedTimeToDate(
      capture.certValidity4GeneralizedTime));
  }
  if(validity.length > 2) {
    throw new Error('Cannot read notBefore/notAfter validity times; more ' +
      'than two times were provided in the certificate.');
  }
  if(validity.length < 2) {
    throw new Error('Cannot read notBefore/notAfter validity times; they ' +
      'were not provided as either UTCTime or GeneralizedTime.');
  }
  cert.validity.notBefore = validity[0];
  cert.validity.notAfter = validity[1];

  // keep TBSCertificate to preserve signature when exporting
  cert.tbsCertificate = capture.tbsCertificate;

  if(computeHash) {
    // check signature OID for supported signature types
    cert.md = null;
    if(cert.signatureOid in oids) {
      var oid = oids[cert.signatureOid];
      switch(oid) {
        case 'sha1WithRSAEncryption':
          cert.md = forge.md.sha1.create();
          break;
        case 'md5WithRSAEncryption':
          cert.md = forge.md.md5.create();
          break;
        case 'sha256WithRSAEncryption':
          cert.md = forge.md.sha256.create();
          break;
        case 'sha384WithRSAEncryption':
          cert.md = forge.md.sha384.create();
          break;
        case 'sha512WithRSAEncryption':
          cert.md = forge.md.sha512.create();
          break;
        case 'RSASSA-PSS':
          cert.md = forge.md.sha256.create();
          break;
      }
    }
    if(cert.md === null) {
      var error = new Error('Could not compute certificate digest. ' +
        'Unknown signature OID.');
      error.signatureOid = cert.signatureOid;
      throw error;
    }

    // produce DER formatted TBSCertificate and digest it
    var bytes = asn1.toDer(cert.tbsCertificate);
    cert.md.update(bytes.getBytes());
  }

  // handle issuer, build issuer message digest
  var imd = forge.md.sha1.create();
  cert.issuer.getField = function(sn) {
    return _getAttribute(cert.issuer, sn);
  };
  cert.issuer.addField = function(attr) {
    _fillMissingFields([attr]);
    cert.issuer.attributes.push(attr);
  };
  cert.issuer.attributes = pki.RDNAttributesAsArray(capture.certIssuer, imd);
  if(capture.certIssuerUniqueId) {
    cert.issuer.uniqueId = capture.certIssuerUniqueId;
  }
  cert.issuer.hash = imd.digest().toHex();

  // handle subject, build subject message digest
  var smd = forge.md.sha1.create();
  cert.subject.getField = function(sn) {
    return _getAttribute(cert.subject, sn);
  };
  cert.subject.addField = function(attr) {
    _fillMissingFields([attr]);
    cert.subject.attributes.push(attr);
  };
  cert.subject.attributes = pki.RDNAttributesAsArray(capture.certSubject, smd);
  if(capture.certSubjectUniqueId) {
    cert.subject.uniqueId = capture.certSubjectUniqueId;
  }
  cert.subject.hash = smd.digest().toHex();

  // handle extensions
  if(capture.certExtensions) {
    cert.extensions = pki.certificateExtensionsFromAsn1(capture.certExtensions);
  } else {
    cert.extensions = [];
  }

  // convert RSA public key from ASN.1
  cert.publicKey = pki.publicKeyFromAsn1(capture.subjectPublicKeyInfo);

  return cert;
};

/**
 * Converts an ASN.1 extensions object (with extension sequences as its
 * values) into an array of extension objects with types and values.
 *
 * Supported extensions:
 *
 * id-ce-keyUsage OBJECT IDENTIFIER ::=  { id-ce 15 }
 * KeyUsage ::= BIT STRING {
 *   digitalSignature        (0),
 *   nonRepudiation          (1),
 *   keyEncipherment         (2),
 *   dataEncipherment        (3),
 *   keyAgreement            (4),
 *   keyCertSign             (5),
 *   cRLSign                 (6),
 *   encipherOnly            (7),
 *   decipherOnly            (8)
 * }
 *
 * id-ce-basicConstraints OBJECT IDENTIFIER ::=  { id-ce 19 }
 * BasicConstraints ::= SEQUENCE {
 *   cA                      BOOLEAN DEFAULT FALSE,
 *   pathLenConstraint       INTEGER (0..MAX) OPTIONAL
 * }
 *
 * subjectAltName EXTENSION ::= {
 *   SYNTAX GeneralNames
 *   IDENTIFIED BY id-ce-subjectAltName
 * }
 *
 * GeneralNames ::= SEQUENCE SIZE (1..MAX) OF GeneralName
 *
 * GeneralName ::= CHOICE {
 *   otherName      [0] INSTANCE OF OTHER-NAME,
 *   rfc822Name     [1] IA5String,
 *   dNSName        [2] IA5String,
 *   x400Address    [3] ORAddress,
 *   directoryName  [4] Name,
 *   ediPartyName   [5] EDIPartyName,
 *   uniformResourceIdentifier [6] IA5String,
 *   IPAddress      [7] OCTET STRING,
 *   registeredID   [8] OBJECT IDENTIFIER
 * }
 *
 * OTHER-NAME ::= TYPE-IDENTIFIER
 *
 * EDIPartyName ::= SEQUENCE {
 *   nameAssigner [0] DirectoryString {ub-name} OPTIONAL,
 *   partyName    [1] DirectoryString {ub-name}
 * }
 *
 * @param exts the extensions ASN.1 with extension sequences to parse.
 *
 * @return the array.
 */
pki.certificateExtensionsFromAsn1 = function(exts) {
  var rval = [];
  for(var i = 0; i < exts.value.length; ++i) {
    // get extension sequence
    var extseq = exts.value[i];
    for(var ei = 0; ei < extseq.value.length; ++ei) {
      rval.push(pki.certificateExtensionFromAsn1(extseq.value[ei]));
    }
  }

  return rval;
};

/**
 * Parses a single certificate extension from ASN.1.
 *
 * @param ext the extension in ASN.1 format.
 *
 * @return the parsed extension as an object.
 */
pki.certificateExtensionFromAsn1 = function(ext) {
  // an extension has:
  // [0] extnID      OBJECT IDENTIFIER
  // [1] critical    BOOLEAN DEFAULT FALSE
  // [2] extnValue   OCTET STRING
  var e = {};
  e.id = asn1.derToOid(ext.value[0].value);
  e.critical = false;
  if(ext.value[1].type === asn1.Type.BOOLEAN) {
    e.critical = (ext.value[1].value.charCodeAt(0) !== 0x00);
    e.value = ext.value[2].value;
  } else {
    e.value = ext.value[1].value;
  }
  // if the oid is known, get its name
  if(e.id in oids) {
    e.name = oids[e.id];

    // handle key usage
    if(e.name === 'keyUsage') {
      // get value as BIT STRING
      var ev = asn1.fromDer(e.value);
      var b2 = 0x00;
      var b3 = 0x00;
      if(ev.value.length > 1) {
        // skip first byte, just indicates unused bits which
        // will be padded with 0s anyway
        // get bytes with flag bits
        b2 = ev.value.charCodeAt(1);
        b3 = ev.value.length > 2 ? ev.value.charCodeAt(2) : 0;
      }
      // set flags
      e.digitalSignature = (b2 & 0x80) === 0x80;
      e.nonRepudiation = (b2 & 0x40) === 0x40;
      e.keyEncipherment = (b2 & 0x20) === 0x20;
      e.dataEncipherment = (b2 & 0x10) === 0x10;
      e.keyAgreement = (b2 & 0x08) === 0x08;
      e.keyCertSign = (b2 & 0x04) === 0x04;
      e.cRLSign = (b2 & 0x02) === 0x02;
      e.encipherOnly = (b2 & 0x01) === 0x01;
      e.decipherOnly = (b3 & 0x80) === 0x80;
    } else if(e.name === 'basicConstraints') {
      // handle basic constraints
      // get value as SEQUENCE
      var ev = asn1.fromDer(e.value);
      // get cA BOOLEAN flag (defaults to false)
      if(ev.value.length > 0 && ev.value[0].type === asn1.Type.BOOLEAN) {
        e.cA = (ev.value[0].value.charCodeAt(0) !== 0x00);
      } else {
        e.cA = false;
      }
      // get path length constraint
      var value = null;
      if(ev.value.length > 0 && ev.value[0].type === asn1.Type.INTEGER) {
        value = ev.value[0].value;
      } else if(ev.value.length > 1) {
        value = ev.value[1].value;
      }
      if(value !== null) {
        e.pathLenConstraint = asn1.derToInteger(value);
      }
    } else if(e.name === 'extKeyUsage') {
      // handle extKeyUsage
      // value is a SEQUENCE of OIDs
      var ev = asn1.fromDer(e.value);
      for(var vi = 0; vi < ev.value.length; ++vi) {
        var oid = asn1.derToOid(ev.value[vi].value);
        if(oid in oids) {
          e[oids[oid]] = true;
        } else {
          e[oid] = true;
        }
      }
    } else if(e.name === 'nsCertType') {
      // handle nsCertType
      // get value as BIT STRING
      var ev = asn1.fromDer(e.value);
      var b2 = 0x00;
      if(ev.value.length > 1) {
        // skip first byte, just indicates unused bits which
        // will be padded with 0s anyway
        // get bytes with flag bits
        b2 = ev.value.charCodeAt(1);
      }
      // set flags
      e.client = (b2 & 0x80) === 0x80;
      e.server = (b2 & 0x40) === 0x40;
      e.email = (b2 & 0x20) === 0x20;
      e.objsign = (b2 & 0x10) === 0x10;
      e.reserved = (b2 & 0x08) === 0x08;
      e.sslCA = (b2 & 0x04) === 0x04;
      e.emailCA = (b2 & 0x02) === 0x02;
      e.objCA = (b2 & 0x01) === 0x01;
    } else if(
      e.name === 'subjectAltName' ||
      e.name === 'issuerAltName') {
      // handle subjectAltName/issuerAltName
      e.altNames = [];

      // ev is a SYNTAX SEQUENCE
      var gn;
      var ev = asn1.fromDer(e.value);
      for(var n = 0; n < ev.value.length; ++n) {
        // get GeneralName
        gn = ev.value[n];

        var altName = {
          type: gn.type,
          value: gn.value
        };
        e.altNames.push(altName);

        // Note: Support for types 1,2,6,7,8
        switch(gn.type) {
          // rfc822Name
          case 1:
          // dNSName
          case 2:
          // uniformResourceIdentifier (URI)
          case 6:
            break;
          // IPAddress
          case 7:
            // convert to IPv4/IPv6 string representation
            altName.ip = forge.util.bytesToIP(gn.value);
            break;
          // registeredID
          case 8:
            altName.oid = asn1.derToOid(gn.value);
            break;
          default:
            // unsupported
        }
      }
    } else if(e.name === 'subjectKeyIdentifier') {
      // value is an OCTETSTRING w/the hash of the key-type specific
      // public key structure (eg: RSAPublicKey)
      var ev = asn1.fromDer(e.value);
      e.subjectKeyIdentifier = forge.util.bytesToHex(ev.value);
    }
  }
  return e;
};

/**
 * Converts a PKCS#10 certification request (CSR) from an ASN.1 object.
 *
 * Note: If the certification request is to be verified then compute hash
 * should be set to true. There is currently no implementation for converting
 * a certificate back to ASN.1 so the CertificationRequestInfo part of the
 * ASN.1 object needs to be scanned before the csr object is created.
 *
 * @param obj the asn1 representation of a PKCS#10 certification request (CSR).
 * @param computeHash true to compute the hash for verification.
 *
 * @return the certification request (CSR).
 */
pki.certificationRequestFromAsn1 = function(obj, computeHash) {
  // validate certification request and capture data
  var capture = {};
  var errors = [];
  if(!asn1.validate(obj, certificationRequestValidator, capture, errors)) {
    var error = new Error('Cannot read PKCS#10 certificate request. ' +
      'ASN.1 object is not a PKCS#10 CertificationRequest.');
    error.errors = errors;
    throw error;
  }

  // get oid
  var oid = asn1.derToOid(capture.publicKeyOid);
  if(oid !== pki.oids.rsaEncryption) {
    throw new Error('Cannot read public key. OID is not RSA.');
  }

  // create certification request
  var csr = pki.createCertificationRequest();
  csr.version = capture.csrVersion ? capture.csrVersion.charCodeAt(0) : 0;
  csr.signatureOid = forge.asn1.derToOid(capture.csrSignatureOid);
  csr.signatureParameters = _readSignatureParameters(
    csr.signatureOid, capture.csrSignatureParams, true);
  csr.siginfo.algorithmOid = forge.asn1.derToOid(capture.csrSignatureOid);
  csr.siginfo.parameters = _readSignatureParameters(
    csr.siginfo.algorithmOid, capture.csrSignatureParams, false);
  csr.signature = capture.csrSignature;

  // keep CertificationRequestInfo to preserve signature when exporting
  csr.certificationRequestInfo = capture.certificationRequestInfo;

  if(computeHash) {
    // check signature OID for supported signature types
    csr.md = null;
    if(csr.signatureOid in oids) {
      var oid = oids[csr.signatureOid];
      switch(oid) {
        case 'sha1WithRSAEncryption':
          csr.md = forge.md.sha1.create();
          break;
        case 'md5WithRSAEncryption':
          csr.md = forge.md.md5.create();
          break;
        case 'sha256WithRSAEncryption':
          csr.md = forge.md.sha256.create();
          break;
        case 'sha384WithRSAEncryption':
          csr.md = forge.md.sha384.create();
          break;
        case 'sha512WithRSAEncryption':
          csr.md = forge.md.sha512.create();
          break;
        case 'RSASSA-PSS':
          csr.md = forge.md.sha256.create();
          break;
      }
    }
    if(csr.md === null) {
      var error = new Error('Could not compute certification request digest. ' +
        'Unknown signature OID.');
      error.signatureOid = csr.signatureOid;
      throw error;
    }

    // produce DER formatted CertificationRequestInfo and digest it
    var bytes = asn1.toDer(csr.certificationRequestInfo);
    csr.md.update(bytes.getBytes());
  }

  // handle subject, build subject message digest
  var smd = forge.md.sha1.create();
  csr.subject.getField = function(sn) {
    return _getAttribute(csr.subject, sn);
  };
  csr.subject.addField = function(attr) {
    _fillMissingFields([attr]);
    csr.subject.attributes.push(attr);
  };
  csr.subject.attributes = pki.RDNAttributesAsArray(
    capture.certificationRequestInfoSubject, smd);
  csr.subject.hash = smd.digest().toHex();

  // convert RSA public key from ASN.1
  csr.publicKey = pki.publicKeyFromAsn1(capture.subjectPublicKeyInfo);

  // convert attributes from ASN.1
  csr.getAttribute = function(sn) {
    return _getAttribute(csr, sn);
  };
  csr.addAttribute = function(attr) {
    _fillMissingFields([attr]);
    csr.attributes.push(attr);
  };
  csr.attributes = pki.CRIAttributesAsArray(
    capture.certificationRequestInfoAttributes || []);

  return csr;
};

/**
 * Creates an empty certification request (a CSR or certificate signing
 * request). Once created, its public key and attributes can be set and then
 * it can be signed.
 *
 * @return the empty certification request.
 */
pki.createCertificationRequest = function() {
  var csr = {};
  csr.version = 0x00;
  csr.signatureOid = null;
  csr.signature = null;
  csr.siginfo = {};
  csr.siginfo.algorithmOid = null;

  csr.subject = {};
  csr.subject.getField = function(sn) {
    return _getAttribute(csr.subject, sn);
  };
  csr.subject.addField = function(attr) {
    _fillMissingFields([attr]);
    csr.subject.attributes.push(attr);
  };
  csr.subject.attributes = [];
  csr.subject.hash = null;

  csr.publicKey = null;
  csr.attributes = [];
  csr.getAttribute = function(sn) {
    return _getAttribute(csr, sn);
  };
  csr.addAttribute = function(attr) {
    _fillMissingFields([attr]);
    csr.attributes.push(attr);
  };
  csr.md = null;

  /**
   * Sets the subject of this certification request.
   *
   * @param attrs the array of subject attributes to use.
   */
  csr.setSubject = function(attrs) {
    // set new attributes
    _fillMissingFields(attrs);
    csr.subject.attributes = attrs;
    csr.subject.hash = null;
  };

  /**
   * Sets the attributes of this certification request.
   *
   * @param attrs the array of attributes to use.
   */
  csr.setAttributes = function(attrs) {
    // set new attributes
    _fillMissingFields(attrs);
    csr.attributes = attrs;
  };

  /**
   * Signs this certification request using the given private key.
   *
   * @param key the private key to sign with.
   * @param md the message digest object to use (defaults to forge.md.sha1).
   */
  csr.sign = function(key, md) {
    // TODO: get signature OID from private key
    csr.md = md || forge.md.sha1.create();
    var algorithmOid = oids[csr.md.algorithm + 'WithRSAEncryption'];
    if(!algorithmOid) {
      var error = new Error('Could not compute certification request digest. ' +
        'Unknown message digest algorithm OID.');
      error.algorithm = csr.md.algorithm;
      throw error;
    }
    csr.signatureOid = csr.siginfo.algorithmOid = algorithmOid;

    // get CertificationRequestInfo, convert to DER
    csr.certificationRequestInfo = pki.getCertificationRequestInfo(csr);
    var bytes = asn1.toDer(csr.certificationRequestInfo);

    // digest and sign
    csr.md.update(bytes.getBytes());
    csr.signature = key.sign(csr.md);
  };

  /**
   * Attempts verify the signature on the passed certification request using
   * its public key.
   *
   * A CSR that has been exported to a file in PEM format can be verified using
   * OpenSSL using this command:
   *
   * openssl req -in <the-csr-pem-file> -verify -noout -text
   *
   * @return true if verified, false if not.
   */
  csr.verify = function() {
    var rval = false;

    var md = csr.md;
    if(md === null) {
      // check signature OID for supported signature types
      if(csr.signatureOid in oids) {
        // TODO: create DRY `OID to md` function
        var oid = oids[csr.signatureOid];
        switch(oid) {
          case 'sha1WithRSAEncryption':
            md = forge.md.sha1.create();
            break;
          case 'md5WithRSAEncryption':
            md = forge.md.md5.create();
            break;
          case 'sha256WithRSAEncryption':
            md = forge.md.sha256.create();
            break;
          case 'sha384WithRSAEncryption':
            md = forge.md.sha384.create();
            break;
          case 'sha512WithRSAEncryption':
            md = forge.md.sha512.create();
            break;
          case 'RSASSA-PSS':
            md = forge.md.sha256.create();
            break;
        }
      }
      if(md === null) {
        var error = new Error(
          'Could not compute certification request digest. ' +
          'Unknown signature OID.');
        error.signatureOid = csr.signatureOid;
        throw error;
      }

      // produce DER formatted CertificationRequestInfo and digest it
      var cri = csr.certificationRequestInfo ||
        pki.getCertificationRequestInfo(csr);
      var bytes = asn1.toDer(cri);
      md.update(bytes.getBytes());
    }

    if(md !== null) {
      var scheme;

      switch(csr.signatureOid) {
        case oids.sha1WithRSAEncryption:
          /* use PKCS#1 v1.5 padding scheme */
          break;
        case oids['RSASSA-PSS']:
          var hash, mgf;

          /* initialize mgf */
          hash = oids[csr.signatureParameters.mgf.hash.algorithmOid];
          if(hash === undefined || forge.md[hash] === undefined) {
            var error = new Error('Unsupported MGF hash function.');
            error.oid = csr.signatureParameters.mgf.hash.algorithmOid;
            error.name = hash;
            throw error;
          }

          mgf = oids[csr.signatureParameters.mgf.algorithmOid];
          if(mgf === undefined || forge.mgf[mgf] === undefined) {
            var error = new Error('Unsupported MGF function.');
            error.oid = csr.signatureParameters.mgf.algorithmOid;
            error.name = mgf;
            throw error;
          }

          mgf = forge.mgf[mgf].create(forge.md[hash].create());

          /* initialize hash function */
          hash = oids[csr.signatureParameters.hash.algorithmOid];
          if(hash === undefined || forge.md[hash] === undefined) {
            var error = new Error('Unsupported RSASSA-PSS hash function.');
            error.oid = csr.signatureParameters.hash.algorithmOid;
            error.name = hash;
            throw error;
          }

          scheme = forge.pss.create(forge.md[hash].create(), mgf,
            csr.signatureParameters.saltLength);
          break;
      }

      // verify signature on csr using its public key
      rval = csr.publicKey.verify(
        md.digest().getBytes(), csr.signature, scheme);
    }

    return rval;
  };

  return csr;
};

/**
 * Converts an X.509 subject or issuer to an ASN.1 RDNSequence.
 *
 * @param obj the subject or issuer (distinguished name).
 *
 * @return the ASN.1 RDNSequence.
 */
function _dnToAsn1(obj) {
  // create an empty RDNSequence
  var rval = asn1.create(
    asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, []);

  // iterate over attributes
  var attr, set;
  var attrs = obj.attributes;
  for(var i = 0; i < attrs.length; ++i) {
    attr = attrs[i];
    var value = attr.value;

    // reuse tag class for attribute value if available
    var valueTagClass = asn1.Type.PRINTABLESTRING;
    if('valueTagClass' in attr) {
      valueTagClass = attr.valueTagClass;

      if(valueTagClass === asn1.Type.UTF8) {
        value = forge.util.encodeUtf8(value);
      }
      // FIXME: handle more encodings
    }

    // create a RelativeDistinguishedName set
    // each value in the set is an AttributeTypeAndValue first
    // containing the type (an OID) and second the value
    set = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SET, true, [
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // AttributeType
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
          asn1.oidToDer(attr.type).getBytes()),
        // AttributeValue
        asn1.create(asn1.Class.UNIVERSAL, valueTagClass, false, value)
      ])
    ]);
    rval.value.push(set);
  }

  return rval;
}

/**
 * Gets all printable attributes (typically of an issuer or subject) in a
 * simplified JSON format for display.
 *
 * @param attrs the attributes.
 *
 * @return the JSON for display.
 */
function _getAttributesAsJson(attrs) {
  var rval = {};
  for(var i = 0; i < attrs.length; ++i) {
    var attr = attrs[i];
    if(attr.shortName && (
      attr.valueTagClass === asn1.Type.UTF8 ||
      attr.valueTagClass === asn1.Type.PRINTABLESTRING ||
      attr.valueTagClass === asn1.Type.IA5STRING)) {
      var value = attr.value;
      if(attr.valueTagClass === asn1.Type.UTF8) {
        value = forge.util.encodeUtf8(attr.value);
      }
      if(!(attr.shortName in rval)) {
        rval[attr.shortName] = value;
      } else if(forge.util.isArray(rval[attr.shortName])) {
        rval[attr.shortName].push(value);
      } else {
        rval[attr.shortName] = [rval[attr.shortName], value];
      }
    }
  }
  return rval;
}

/**
 * Fills in missing fields in attributes.
 *
 * @param attrs the attributes to fill missing fields in.
 */
function _fillMissingFields(attrs) {
  var attr;
  for(var i = 0; i < attrs.length; ++i) {
    attr = attrs[i];

    // populate missing name
    if(typeof attr.name === 'undefined') {
      if(attr.type && attr.type in pki.oids) {
        attr.name = pki.oids[attr.type];
      } else if(attr.shortName && attr.shortName in _shortNames) {
        attr.name = pki.oids[_shortNames[attr.shortName]];
      }
    }

    // populate missing type (OID)
    if(typeof attr.type === 'undefined') {
      if(attr.name && attr.name in pki.oids) {
        attr.type = pki.oids[attr.name];
      } else {
        var error = new Error('Attribute type not specified.');
        error.attribute = attr;
        throw error;
      }
    }

    // populate missing shortname
    if(typeof attr.shortName === 'undefined') {
      if(attr.name && attr.name in _shortNames) {
        attr.shortName = _shortNames[attr.name];
      }
    }

    // convert extensions to value
    if(attr.type === oids.extensionRequest) {
      attr.valueConstructed = true;
      attr.valueTagClass = asn1.Type.SEQUENCE;
      if(!attr.value && attr.extensions) {
        attr.value = [];
        for(var ei = 0; ei < attr.extensions.length; ++ei) {
          attr.value.push(pki.certificateExtensionToAsn1(
            _fillMissingExtensionFields(attr.extensions[ei])));
        }
      }
    }

    if(typeof attr.value === 'undefined') {
      var error = new Error('Attribute value not specified.');
      error.attribute = attr;
      throw error;
    }
  }
}

/**
 * Fills in missing fields in certificate extensions.
 *
 * @param e the extension.
 * @param [options] the options to use.
 *          [cert] the certificate the extensions are for.
 *
 * @return the extension.
 */
function _fillMissingExtensionFields(e, options) {
  options = options || {};

  // populate missing name
  if(typeof e.name === 'undefined') {
    if(e.id && e.id in pki.oids) {
      e.name = pki.oids[e.id];
    }
  }

  // populate missing id
  if(typeof e.id === 'undefined') {
    if(e.name && e.name in pki.oids) {
      e.id = pki.oids[e.name];
    } else {
      var error = new Error('Extension ID not specified.');
      error.extension = e;
      throw error;
    }
  }

  if(typeof e.value !== 'undefined') {
    return e;
  }

  // handle missing value:

  // value is a BIT STRING
  if(e.name === 'keyUsage') {
    // build flags
    var unused = 0;
    var b2 = 0x00;
    var b3 = 0x00;
    if(e.digitalSignature) {
      b2 |= 0x80;
      unused = 7;
    }
    if(e.nonRepudiation) {
      b2 |= 0x40;
      unused = 6;
    }
    if(e.keyEncipherment) {
      b2 |= 0x20;
      unused = 5;
    }
    if(e.dataEncipherment) {
      b2 |= 0x10;
      unused = 4;
    }
    if(e.keyAgreement) {
      b2 |= 0x08;
      unused = 3;
    }
    if(e.keyCertSign) {
      b2 |= 0x04;
      unused = 2;
    }
    if(e.cRLSign) {
      b2 |= 0x02;
      unused = 1;
    }
    if(e.encipherOnly) {
      b2 |= 0x01;
      unused = 0;
    }
    if(e.decipherOnly) {
      b3 |= 0x80;
      unused = 7;
    }

    // create bit string
    var value = String.fromCharCode(unused);
    if(b3 !== 0) {
      value += String.fromCharCode(b2) + String.fromCharCode(b3);
    } else if(b2 !== 0) {
      value += String.fromCharCode(b2);
    }
    e.value = asn1.create(
      asn1.Class.UNIVERSAL, asn1.Type.BITSTRING, false, value);
  } else if(e.name === 'basicConstraints') {
    // basicConstraints is a SEQUENCE
    e.value = asn1.create(
      asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, []);
    // cA BOOLEAN flag defaults to false
    if(e.cA) {
      e.value.value.push(asn1.create(
        asn1.Class.UNIVERSAL, asn1.Type.BOOLEAN, false,
        String.fromCharCode(0xFF)));
    }
    if('pathLenConstraint' in e) {
      e.value.value.push(asn1.create(
        asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
        asn1.integerToDer(e.pathLenConstraint).getBytes()));
    }
  } else if(e.name === 'extKeyUsage') {
    // extKeyUsage is a SEQUENCE of OIDs
    e.value = asn1.create(
      asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, []);
    var seq = e.value.value;
    for(var key in e) {
      if(e[key] !== true) {
        continue;
      }
      // key is name in OID map
      if(key in oids) {
        seq.push(asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID,
          false, asn1.oidToDer(oids[key]).getBytes()));
      } else if(key.indexOf('.') !== -1) {
        // assume key is an OID
        seq.push(asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID,
          false, asn1.oidToDer(key).getBytes()));
      }
    }
  } else if(e.name === 'nsCertType') {
    // nsCertType is a BIT STRING
    // build flags
    var unused = 0;
    var b2 = 0x00;

    if(e.client) {
      b2 |= 0x80;
      unused = 7;
    }
    if(e.server) {
      b2 |= 0x40;
      unused = 6;
    }
    if(e.email) {
      b2 |= 0x20;
      unused = 5;
    }
    if(e.objsign) {
      b2 |= 0x10;
      unused = 4;
    }
    if(e.reserved) {
      b2 |= 0x08;
      unused = 3;
    }
    if(e.sslCA) {
      b2 |= 0x04;
      unused = 2;
    }
    if(e.emailCA) {
      b2 |= 0x02;
      unused = 1;
    }
    if(e.objCA) {
      b2 |= 0x01;
      unused = 0;
    }

    // create bit string
    var value = String.fromCharCode(unused);
    if(b2 !== 0) {
      value += String.fromCharCode(b2);
    }
    e.value = asn1.create(
      asn1.Class.UNIVERSAL, asn1.Type.BITSTRING, false, value);
  } else if(e.name === 'subjectAltName' || e.name === 'issuerAltName') {
    // SYNTAX SEQUENCE
    e.value = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, []);

    var altName;
    for(var n = 0; n < e.altNames.length; ++n) {
      altName = e.altNames[n];
      var value = altName.value;
      // handle IP
      if(altName.type === 7 && altName.ip) {
        value = forge.util.bytesFromIP(altName.ip);
        if(value === null) {
          var error = new Error(
            'Extension "ip" value is not a valid IPv4 or IPv6 address.');
          error.extension = e;
          throw error;
        }
      } else if(altName.type === 8) {
        // handle OID
        if(altName.oid) {
          value = asn1.oidToDer(asn1.oidToDer(altName.oid));
        } else {
          // deprecated ... convert value to OID
          value = asn1.oidToDer(value);
        }
      }
      e.value.value.push(asn1.create(
        asn1.Class.CONTEXT_SPECIFIC, altName.type, false,
        value));
    }
  } else if(e.name === 'nsComment' && options.cert) {
    // sanity check value is ASCII (req'd) and not too big
    if(!(/^[\x00-\x7F]*$/.test(e.comment)) ||
      (e.comment.length < 1) || (e.comment.length > 128)) {
      throw new Error('Invalid "nsComment" content.');
    }
    // IA5STRING opaque comment
    e.value = asn1.create(
      asn1.Class.UNIVERSAL, asn1.Type.IA5STRING, false, e.comment);
  } else if(e.name === 'subjectKeyIdentifier' && options.cert) {
    var ski = options.cert.generateSubjectKeyIdentifier();
    e.subjectKeyIdentifier = ski.toHex();
    // OCTETSTRING w/digest
    e.value = asn1.create(
      asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, false, ski.getBytes());
  } else if(e.name === 'authorityKeyIdentifier' && options.cert) {
    // SYNTAX SEQUENCE
    e.value = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, []);
    var seq = e.value.value;

    if(e.keyIdentifier) {
      var keyIdentifier = (e.keyIdentifier === true ?
        options.cert.generateSubjectKeyIdentifier().getBytes() :
        e.keyIdentifier);
      seq.push(
        asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, false, keyIdentifier));
    }

    if(e.authorityCertIssuer) {
      var authorityCertIssuer = [
        asn1.create(asn1.Class.CONTEXT_SPECIFIC, 4, true, [
          _dnToAsn1(e.authorityCertIssuer === true ?
            options.cert.issuer : e.authorityCertIssuer)
        ])
      ];
      seq.push(
        asn1.create(asn1.Class.CONTEXT_SPECIFIC, 1, true, authorityCertIssuer));
    }

    if(e.serialNumber) {
      var serialNumber = forge.util.hexToBytes(e.serialNumber === true ?
        options.cert.serialNumber : e.serialNumber);
      seq.push(
        asn1.create(asn1.Class.CONTEXT_SPECIFIC, 2, false, serialNumber));
    }
  } else if(e.name === 'cRLDistributionPoints') {
    e.value = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, []);
    var seq = e.value.value;

    // Create sub SEQUENCE of DistributionPointName
    var subSeq = asn1.create(
      asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, []);

    // Create fullName CHOICE
    var fullNameGeneralNames = asn1.create(
      asn1.Class.CONTEXT_SPECIFIC, 0, true, []);
    var altName;
    for(var n = 0; n < e.altNames.length; ++n) {
      altName = e.altNames[n];
      var value = altName.value;
      // handle IP
      if(altName.type === 7 && altName.ip) {
        value = forge.util.bytesFromIP(altName.ip);
        if(value === null) {
          var error = new Error(
            'Extension "ip" value is not a valid IPv4 or IPv6 address.');
          error.extension = e;
          throw error;
        }
      } else if(altName.type === 8) {
        // handle OID
        if(altName.oid) {
          value = asn1.oidToDer(asn1.oidToDer(altName.oid));
        } else {
          // deprecated ... convert value to OID
          value = asn1.oidToDer(value);
        }
      }
      fullNameGeneralNames.value.push(asn1.create(
        asn1.Class.CONTEXT_SPECIFIC, altName.type, false,
        value));
    }

    // Add to the parent SEQUENCE
    subSeq.value.push(asn1.create(
      asn1.Class.CONTEXT_SPECIFIC, 0, true, [fullNameGeneralNames]));
    seq.push(subSeq);
  }

  // ensure value has been defined by now
  if(typeof e.value === 'undefined') {
    var error = new Error('Extension value not specified.');
    error.extension = e;
    throw error;
  }

  return e;
}

/**
 * Convert signature parameters object to ASN.1
 *
 * @param {String} oid Signature algorithm OID
 * @param params The signature parametrs object
 * @return ASN.1 object representing signature parameters
 */
function _signatureParametersToAsn1(oid, params) {
  switch(oid) {
    case oids['RSASSA-PSS']:
      var parts = [];

      if(params.hash.algorithmOid !== undefined) {
        parts.push(asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
            asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
              asn1.oidToDer(params.hash.algorithmOid).getBytes()),
            asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, '')
          ])
        ]));
      }

      if(params.mgf.algorithmOid !== undefined) {
        parts.push(asn1.create(asn1.Class.CONTEXT_SPECIFIC, 1, true, [
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
            asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
              asn1.oidToDer(params.mgf.algorithmOid).getBytes()),
            asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
              asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
                asn1.oidToDer(params.mgf.hash.algorithmOid).getBytes()),
              asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, '')
            ])
          ])
        ]));
      }

      if(params.saltLength !== undefined) {
        parts.push(asn1.create(asn1.Class.CONTEXT_SPECIFIC, 2, true, [
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
            asn1.integerToDer(params.saltLength).getBytes())
        ]));
      }

      return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, parts);

    default:
      return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, '');
  }
}

/**
 * Converts a certification request's attributes to an ASN.1 set of
 * CRIAttributes.
 *
 * @param csr certification request.
 *
 * @return the ASN.1 set of CRIAttributes.
 */
function _CRIAttributesToAsn1(csr) {
  // create an empty context-specific container
  var rval = asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, []);

  // no attributes, return empty container
  if(csr.attributes.length === 0) {
    return rval;
  }

  // each attribute has a sequence with a type and a set of values
  var attrs = csr.attributes;
  for(var i = 0; i < attrs.length; ++i) {
    var attr = attrs[i];
    var value = attr.value;

    // reuse tag class for attribute value if available
    var valueTagClass = asn1.Type.UTF8;
    if('valueTagClass' in attr) {
      valueTagClass = attr.valueTagClass;
    }
    if(valueTagClass === asn1.Type.UTF8) {
      value = forge.util.encodeUtf8(value);
    }
    var valueConstructed = false;
    if('valueConstructed' in attr) {
      valueConstructed = attr.valueConstructed;
    }
    // FIXME: handle more encodings

    // create a RelativeDistinguishedName set
    // each value in the set is an AttributeTypeAndValue first
    // containing the type (an OID) and second the value
    var seq = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
      // AttributeType
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
        asn1.oidToDer(attr.type).getBytes()),
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SET, true, [
        // AttributeValue
        asn1.create(
          asn1.Class.UNIVERSAL, valueTagClass, valueConstructed, value)
      ])
    ]);
    rval.value.push(seq);
  }

  return rval;
}

var jan_1_1950 = new Date('1950-01-01T00:00:00Z');
var jan_1_2050 = new Date('2050-01-01T00:00:00Z');

/**
 * Converts a Date object to ASN.1
 * Handles the different format before and after 1st January 2050
 *
 * @param date date object.
 *
 * @return the ASN.1 object representing the date.
 */
function _dateToAsn1(date) {
  if(date >= jan_1_1950 && date < jan_1_2050) {
    return asn1.create(
      asn1.Class.UNIVERSAL, asn1.Type.UTCTIME, false,
      asn1.dateToUtcTime(date));
  } else {
    return asn1.create(
      asn1.Class.UNIVERSAL, asn1.Type.GENERALIZEDTIME, false,
      asn1.dateToGeneralizedTime(date));
  }
}

/**
 * Gets the ASN.1 TBSCertificate part of an X.509v3 certificate.
 *
 * @param cert the certificate.
 *
 * @return the asn1 TBSCertificate.
 */
pki.getTBSCertificate = function(cert) {
  // TBSCertificate
  var notBefore = _dateToAsn1(cert.validity.notBefore);
  var notAfter = _dateToAsn1(cert.validity.notAfter);
  var tbs = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
    // version
    asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
      // integer
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
        asn1.integerToDer(cert.version).getBytes())
    ]),
    // serialNumber
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
      forge.util.hexToBytes(cert.serialNumber)),
    // signature
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
      // algorithm
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
        asn1.oidToDer(cert.siginfo.algorithmOid).getBytes()),
      // parameters
      _signatureParametersToAsn1(
        cert.siginfo.algorithmOid, cert.siginfo.parameters)
    ]),
    // issuer
    _dnToAsn1(cert.issuer),
    // validity
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
      notBefore,
      notAfter
    ]),
    // subject
    _dnToAsn1(cert.subject),
    // SubjectPublicKeyInfo
    pki.publicKeyToAsn1(cert.publicKey)
  ]);

  if(cert.issuer.uniqueId) {
    // issuerUniqueID (optional)
    tbs.value.push(
      asn1.create(asn1.Class.CONTEXT_SPECIFIC, 1, true, [
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.BITSTRING, false,
          // TODO: support arbitrary bit length ids
          String.fromCharCode(0x00) +
          cert.issuer.uniqueId
        )
      ])
    );
  }
  if(cert.subject.uniqueId) {
    // subjectUniqueID (optional)
    tbs.value.push(
      asn1.create(asn1.Class.CONTEXT_SPECIFIC, 2, true, [
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.BITSTRING, false,
          // TODO: support arbitrary bit length ids
          String.fromCharCode(0x00) +
          cert.subject.uniqueId
        )
      ])
    );
  }

  if(cert.extensions.length > 0) {
    // extensions (optional)
    tbs.value.push(pki.certificateExtensionsToAsn1(cert.extensions));
  }

  return tbs;
};

/**
 * Gets the ASN.1 CertificationRequestInfo part of a
 * PKCS#10 CertificationRequest.
 *
 * @param csr the certification request.
 *
 * @return the asn1 CertificationRequestInfo.
 */
pki.getCertificationRequestInfo = function(csr) {
  // CertificationRequestInfo
  var cri = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
    // version
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
      asn1.integerToDer(csr.version).getBytes()),
    // subject
    _dnToAsn1(csr.subject),
    // SubjectPublicKeyInfo
    pki.publicKeyToAsn1(csr.publicKey),
    // attributes
    _CRIAttributesToAsn1(csr)
  ]);

  return cri;
};

/**
 * Converts a DistinguishedName (subject or issuer) to an ASN.1 object.
 *
 * @param dn the DistinguishedName.
 *
 * @return the asn1 representation of a DistinguishedName.
 */
pki.distinguishedNameToAsn1 = function(dn) {
  return _dnToAsn1(dn);
};

/**
 * Converts an X.509v3 RSA certificate to an ASN.1 object.
 *
 * @param cert the certificate.
 *
 * @return the asn1 representation of an X.509v3 RSA certificate.
 */
pki.certificateToAsn1 = function(cert) {
  // prefer cached TBSCertificate over generating one
  var tbsCertificate = cert.tbsCertificate || pki.getTBSCertificate(cert);

  // Certificate
  return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
    // TBSCertificate
    tbsCertificate,
    // AlgorithmIdentifier (signature algorithm)
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
      // algorithm
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
        asn1.oidToDer(cert.signatureOid).getBytes()),
      // parameters
      _signatureParametersToAsn1(cert.signatureOid, cert.signatureParameters)
    ]),
    // SignatureValue
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.BITSTRING, false,
      String.fromCharCode(0x00) + cert.signature)
  ]);
};

/**
 * Converts X.509v3 certificate extensions to ASN.1.
 *
 * @param exts the extensions to convert.
 *
 * @return the extensions in ASN.1 format.
 */
pki.certificateExtensionsToAsn1 = function(exts) {
  // create top-level extension container
  var rval = asn1.create(asn1.Class.CONTEXT_SPECIFIC, 3, true, []);

  // create extension sequence (stores a sequence for each extension)
  var seq = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, []);
  rval.value.push(seq);

  for(var i = 0; i < exts.length; ++i) {
    seq.value.push(pki.certificateExtensionToAsn1(exts[i]));
  }

  return rval;
};

/**
 * Converts a single certificate extension to ASN.1.
 *
 * @param ext the extension to convert.
 *
 * @return the extension in ASN.1 format.
 */
pki.certificateExtensionToAsn1 = function(ext) {
  // create a sequence for each extension
  var extseq = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, []);

  // extnID (OID)
  extseq.value.push(asn1.create(
    asn1.Class.UNIVERSAL, asn1.Type.OID, false,
    asn1.oidToDer(ext.id).getBytes()));

  // critical defaults to false
  if(ext.critical) {
    // critical BOOLEAN DEFAULT FALSE
    extseq.value.push(asn1.create(
      asn1.Class.UNIVERSAL, asn1.Type.BOOLEAN, false,
      String.fromCharCode(0xFF)));
  }

  var value = ext.value;
  if(typeof ext.value !== 'string') {
    // value is asn.1
    value = asn1.toDer(value).getBytes();
  }

  // extnValue (OCTET STRING)
  extseq.value.push(asn1.create(
    asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, false, value));

  return extseq;
};

/**
 * Converts a PKCS#10 certification request to an ASN.1 object.
 *
 * @param csr the certification request.
 *
 * @return the asn1 representation of a certification request.
 */
pki.certificationRequestToAsn1 = function(csr) {
  // prefer cached CertificationRequestInfo over generating one
  var cri = csr.certificationRequestInfo ||
    pki.getCertificationRequestInfo(csr);

  // Certificate
  return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
    // CertificationRequestInfo
    cri,
    // AlgorithmIdentifier (signature algorithm)
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
      // algorithm
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OID, false,
        asn1.oidToDer(csr.signatureOid).getBytes()),
      // parameters
      _signatureParametersToAsn1(csr.signatureOid, csr.signatureParameters)
    ]),
    // signature
    asn1.create(asn1.Class.UNIVERSAL, asn1.Type.BITSTRING, false,
      String.fromCharCode(0x00) + csr.signature)
  ]);
};

/**
 * Creates a CA store.
 *
 * @param certs an optional array of certificate objects or PEM-formatted
 *          certificate strings to add to the CA store.
 *
 * @return the CA store.
 */
pki.createCaStore = function(certs) {
  // create CA store
  var caStore = {
    // stored certificates
    certs: {}
  };

  /**
   * Gets the certificate that issued the passed certificate or its
   * 'parent'.
   *
   * @param cert the certificate to get the parent for.
   *
   * @return the parent certificate or null if none was found.
   */
  caStore.getIssuer = function(cert) {
    var rval = getBySubject(cert.issuer);

    // see if there are multiple matches
    /*if(forge.util.isArray(rval)) {
      // TODO: resolve multiple matches by checking
      // authorityKey/subjectKey/issuerUniqueID/other identifiers, etc.
      // FIXME: or alternatively do authority key mapping
      // if possible (X.509v1 certs can't work?)
      throw new Error('Resolving multiple issuer matches not implemented yet.');
    }*/

    return rval;
  };

  /**
   * Adds a trusted certificate to the store.
   *
   * @param cert the certificate to add as a trusted certificate (either a
   *          pki.certificate object or a PEM-formatted certificate).
   */
  caStore.addCertificate = function(cert) {
    // convert from pem if necessary
    if(typeof cert === 'string') {
      cert = forge.pki.certificateFromPem(cert);
    }

    ensureSubjectHasHash(cert.subject);

    if(!caStore.hasCertificate(cert)) { // avoid duplicate certificates in store
      if(cert.subject.hash in caStore.certs) {
        // subject hash already exists, append to array
        var tmp = caStore.certs[cert.subject.hash];
        if(!forge.util.isArray(tmp)) {
          tmp = [tmp];
        }
        tmp.push(cert);
        caStore.certs[cert.subject.hash] = tmp;
      } else {
        caStore.certs[cert.subject.hash] = cert;
      }
    }
  };

  /**
   * Checks to see if the given certificate is in the store.
   *
   * @param cert the certificate to check (either a pki.certificate or a
   *          PEM-formatted certificate).
   *
   * @return true if the certificate is in the store, false if not.
   */
  caStore.hasCertificate = function(cert) {
    // convert from pem if necessary
    if(typeof cert === 'string') {
      cert = forge.pki.certificateFromPem(cert);
    }

    var match = getBySubject(cert.subject);
    if(!match) {
      return false;
    }
    if(!forge.util.isArray(match)) {
      match = [match];
    }
    // compare DER-encoding of certificates
    var der1 = asn1.toDer(pki.certificateToAsn1(cert)).getBytes();
    for(var i = 0; i < match.length; ++i) {
      var der2 = asn1.toDer(pki.certificateToAsn1(match[i])).getBytes();
      if(der1 === der2) {
        return true;
      }
    }
    return false;
  };

  /**
   * Lists all of the certificates kept in the store.
   *
   * @return an array of all of the pki.certificate objects in the store.
   */
  caStore.listAllCertificates = function() {
    var certList = [];

    for(var hash in caStore.certs) {
      if(caStore.certs.hasOwnProperty(hash)) {
        var value = caStore.certs[hash];
        if(!forge.util.isArray(value)) {
          certList.push(value);
        } else {
          for(var i = 0; i < value.length; ++i) {
            certList.push(value[i]);
          }
        }
      }
    }

    return certList;
  };

  /**
   * Removes a certificate from the store.
   *
   * @param cert the certificate to remove (either a pki.certificate or a
   *          PEM-formatted certificate).
   *
   * @return the certificate that was removed or null if the certificate
   *           wasn't in store.
   */
  caStore.removeCertificate = function(cert) {
    var result;

    // convert from pem if necessary
    if(typeof cert === 'string') {
      cert = forge.pki.certificateFromPem(cert);
    }
    ensureSubjectHasHash(cert.subject);
    if(!caStore.hasCertificate(cert)) {
      return null;
    }

    var match = getBySubject(cert.subject);

    if(!forge.util.isArray(match)) {
      result = caStore.certs[cert.subject.hash];
      delete caStore.certs[cert.subject.hash];
      return result;
    }

    // compare DER-encoding of certificates
    var der1 = asn1.toDer(pki.certificateToAsn1(cert)).getBytes();
    for(var i = 0; i < match.length; ++i) {
      var der2 = asn1.toDer(pki.certificateToAsn1(match[i])).getBytes();
      if(der1 === der2) {
        result = match[i];
        match.splice(i, 1);
      }
    }
    if(match.length === 0) {
      delete caStore.certs[cert.subject.hash];
    }

    return result;
  };

  function getBySubject(subject) {
    ensureSubjectHasHash(subject);
    return caStore.certs[subject.hash] || null;
  }

  function ensureSubjectHasHash(subject) {
    // produce subject hash if it doesn't exist
    if(!subject.hash) {
      var md = forge.md.sha1.create();
      subject.attributes = pki.RDNAttributesAsArray(_dnToAsn1(subject), md);
      subject.hash = md.digest().toHex();
    }
  }

  // auto-add passed in certs
  if(certs) {
    // parse PEM-formatted certificates as necessary
    for(var i = 0; i < certs.length; ++i) {
      var cert = certs[i];
      caStore.addCertificate(cert);
    }
  }

  return caStore;
};

/**
 * Certificate verification errors, based on TLS.
 */
pki.certificateError = {
  bad_certificate: 'forge.pki.BadCertificate',
  unsupported_certificate: 'forge.pki.UnsupportedCertificate',
  certificate_revoked: 'forge.pki.CertificateRevoked',
  certificate_expired: 'forge.pki.CertificateExpired',
  certificate_unknown: 'forge.pki.CertificateUnknown',
  unknown_ca: 'forge.pki.UnknownCertificateAuthority'
};

/**
 * Verifies a certificate chain against the given Certificate Authority store
 * with an optional custom verify callback.
 *
 * @param caStore a certificate store to verify against.
 * @param chain the certificate chain to verify, with the root or highest
 *          authority at the end (an array of certificates).
 * @param options a callback to be called for every certificate in the chain or
 *                  an object with:
 *                  verify a callback to be called for every certificate in the
 *                    chain
 *                  validityCheckDate the date against which the certificate
 *                    validity period should be checked. Pass null to not check
 *                    the validity period. By default, the current date is used.
 *
 * The verify callback has the following signature:
 *
 * verified - Set to true if certificate was verified, otherwise the
 *   pki.certificateError for why the certificate failed.
 * depth - The current index in the chain, where 0 is the end point's cert.
 * certs - The certificate chain, *NOTE* an empty chain indicates an anonymous
 *   end point.
 *
 * The function returns true on success and on failure either the appropriate
 * pki.certificateError or an object with 'error' set to the appropriate
 * pki.certificateError and 'message' set to a custom error message.
 *
 * @return true if successful, error thrown if not.
 */
pki.verifyCertificateChain = function(caStore, chain, options) {
  /* From: RFC3280 - Internet X.509 Public Key Infrastructure Certificate
    Section 6: Certification Path Validation
    See inline parentheticals related to this particular implementation.

    The primary goal of path validation is to verify the binding between
    a subject distinguished name or a subject alternative name and subject
    public key, as represented in the end entity certificate, based on the
    public key of the trust anchor. This requires obtaining a sequence of
    certificates that support that binding. That sequence should be provided
    in the passed 'chain'. The trust anchor should be in the given CA
    store. The 'end entity' certificate is the certificate provided by the
    end point (typically a server) and is the first in the chain.

    To meet this goal, the path validation process verifies, among other
    things, that a prospective certification path (a sequence of n
    certificates or a 'chain') satisfies the following conditions:

    (a) for all x in {1, ..., n-1}, the subject of certificate x is
          the issuer of certificate x+1;

    (b) certificate 1 is issued by the trust anchor;

    (c) certificate n is the certificate to be validated; and

    (d) for all x in {1, ..., n}, the certificate was valid at the
          time in question.

    Note that here 'n' is index 0 in the chain and 1 is the last certificate
    in the chain and it must be signed by a certificate in the connection's
    CA store.

    The path validation process also determines the set of certificate
    policies that are valid for this path, based on the certificate policies
    extension, policy mapping extension, policy constraints extension, and
    inhibit any-policy extension.

    Note: Policy mapping extension not supported (Not Required).

    Note: If the certificate has an unsupported critical extension, then it
    must be rejected.

    Note: A certificate is self-issued if the DNs that appear in the subject
    and issuer fields are identical and are not empty.

    The path validation algorithm assumes the following seven inputs are
    provided to the path processing logic. What this specific implementation
    will use is provided parenthetically:

    (a) a prospective certification path of length n (the 'chain')
    (b) the current date/time: ('now').
    (c) user-initial-policy-set: A set of certificate policy identifiers
          naming the policies that are acceptable to the certificate user.
          The user-initial-policy-set contains the special value any-policy
          if the user is not concerned about certificate policy
          (Not implemented. Any policy is accepted).
    (d) trust anchor information, describing a CA that serves as a trust
          anchor for the certification path. The trust anchor information
          includes:

      (1)  the trusted issuer name,
      (2)  the trusted public key algorithm,
      (3)  the trusted public key, and
      (4)  optionally, the trusted public key parameters associated
             with the public key.

      (Trust anchors are provided via certificates in the CA store).

      The trust anchor information may be provided to the path processing
      procedure in the form of a self-signed certificate. The trusted anchor
      information is trusted because it was delivered to the path processing
      procedure by some trustworthy out-of-band procedure. If the trusted
      public key algorithm requires parameters, then the parameters are
      provided along with the trusted public key (No parameters used in this
      implementation).

    (e) initial-policy-mapping-inhibit, which indicates if policy mapping is
          allowed in the certification path.
          (Not implemented, no policy checking)

    (f) initial-explicit-policy, which indicates if the path must be valid
          for at least one of the certificate policies in the user-initial-
          policy-set.
          (Not implemented, no policy checking)

    (g) initial-any-policy-inhibit, which indicates whether the
          anyPolicy OID should be processed if it is included in a
          certificate.
          (Not implemented, so any policy is valid provided that it is
          not marked as critical) */

  /* Basic Path Processing:

    For each certificate in the 'chain', the following is checked:

    1. The certificate validity period includes the current time.
    2. The certificate was signed by its parent (where the parent is either
       the next in the chain or from the CA store). Allow processing to
       continue to the next step if no parent is found but the certificate is
       in the CA store.
    3. TODO: The certificate has not been revoked.
    4. The certificate issuer name matches the parent's subject name.
    5. TODO: If the certificate is self-issued and not the final certificate
       in the chain, skip this step, otherwise verify that the subject name
       is within one of the permitted subtrees of X.500 distinguished names
       and that each of the alternative names in the subjectAltName extension
       (critical or non-critical) is within one of the permitted subtrees for
       that name type.
    6. TODO: If the certificate is self-issued and not the final certificate
       in the chain, skip this step, otherwise verify that the subject name
       is not within one of the excluded subtrees for X.500 distinguished
       names and none of the subjectAltName extension names are excluded for
       that name type.
    7. The other steps in the algorithm for basic path processing involve
       handling the policy extension which is not presently supported in this
       implementation. Instead, if a critical policy extension is found, the
       certificate is rejected as not supported.
    8. If the certificate is not the first or if its the only certificate in
       the chain (having no parent from the CA store or is self-signed) and it
       has a critical key usage extension, verify that the keyCertSign bit is
       set. If the key usage extension exists, verify that the basic
       constraints extension exists. If the basic constraints extension exists,
       verify that the cA flag is set. If pathLenConstraint is set, ensure that
       the number of certificates that precede in the chain (come earlier
       in the chain as implemented below), excluding the very first in the
       chain (typically the end-entity one), isn't greater than the
       pathLenConstraint. This constraint limits the number of intermediate
       CAs that may appear below a CA before only end-entity certificates
       may be issued. */

  // if a verify callback is passed as the third parameter, package it within
  // the options object. This is to support a legacy function signature that
  // expected the verify callback as the third parameter.
  if(typeof options === 'function') {
    options = {verify: options};
  }
  options = options || {};

  // copy cert chain references to another array to protect against changes
  // in verify callback
  chain = chain.slice(0);
  var certs = chain.slice(0);

  var validityCheckDate = options.validityCheckDate;
  // if no validityCheckDate is specified, default to the current date. Make
  // sure to maintain the value null because it indicates that the validity
  // period should not be checked.
  if(typeof validityCheckDate === 'undefined') {
    validityCheckDate = new Date();
  }

  // verify each cert in the chain using its parent, where the parent
  // is either the next in the chain or from the CA store
  var first = true;
  var error = null;
  var depth = 0;
  do {
    var cert = chain.shift();
    var parent = null;
    var selfSigned = false;

    if(validityCheckDate) {
      // 1. check valid time
      if(validityCheckDate < cert.validity.notBefore ||
         validityCheckDate > cert.validity.notAfter) {
        error = {
          message: 'Certificate is not valid yet or has expired.',
          error: pki.certificateError.certificate_expired,
          notBefore: cert.validity.notBefore,
          notAfter: cert.validity.notAfter,
          // TODO: we might want to reconsider renaming 'now' to
          // 'validityCheckDate' should this API be changed in the future.
          now: validityCheckDate
        };
      }
    }

    // 2. verify with parent from chain or CA store
    if(error === null) {
      parent = chain[0] || caStore.getIssuer(cert);
      if(parent === null) {
        // check for self-signed cert
        if(cert.isIssuer(cert)) {
          selfSigned = true;
          parent = cert;
        }
      }

      if(parent) {
        // FIXME: current CA store implementation might have multiple
        // certificates where the issuer can't be determined from the
        // certificate (happens rarely with, eg: old certificates) so normalize
        // by always putting parents into an array
        // TODO: there's may be an extreme degenerate case currently uncovered
        // where an old intermediate certificate seems to have a matching parent
        // but none of the parents actually verify ... but the intermediate
        // is in the CA and it should pass this check; needs investigation
        var parents = parent;
        if(!forge.util.isArray(parents)) {
          parents = [parents];
        }

        // try to verify with each possible parent (typically only one)
        var verified = false;
        while(!verified && parents.length > 0) {
          parent = parents.shift();
          try {
            verified = parent.verify(cert);
          } catch(ex) {
            // failure to verify, don't care why, try next one
          }
        }

        if(!verified) {
          error = {
            message: 'Certificate signature is invalid.',
            error: pki.certificateError.bad_certificate
          };
        }
      }

      if(error === null && (!parent || selfSigned) &&
        !caStore.hasCertificate(cert)) {
        // no parent issuer and certificate itself is not trusted
        error = {
          message: 'Certificate is not trusted.',
          error: pki.certificateError.unknown_ca
        };
      }
    }

    // TODO: 3. check revoked

    // 4. check for matching issuer/subject
    if(error === null && parent && !cert.isIssuer(parent)) {
      // parent is not issuer
      error = {
        message: 'Certificate issuer is invalid.',
        error: pki.certificateError.bad_certificate
      };
    }

    // 5. TODO: check names with permitted names tree

    // 6. TODO: check names against excluded names tree

    // 7. check for unsupported critical extensions
    if(error === null) {
      // supported extensions
      var se = {
        keyUsage: true,
        basicConstraints: true
      };
      for(var i = 0; error === null && i < cert.extensions.length; ++i) {
        var ext = cert.extensions[i];
        if(ext.critical && !(ext.name in se)) {
          error = {
            message:
              'Certificate has an unsupported critical extension.',
            error: pki.certificateError.unsupported_certificate
          };
        }
      }
    }

    // 8. check for CA if cert is not first or is the only certificate
    // remaining in chain with no parent or is self-signed
    if(error === null &&
      (!first || (chain.length === 0 && (!parent || selfSigned)))) {
      // first check keyUsage extension and then basic constraints
      var bcExt = cert.getExtension('basicConstraints');
      var keyUsageExt = cert.getExtension('keyUsage');
      if(keyUsageExt !== null) {
        // keyCertSign must be true and there must be a basic
        // constraints extension
        if(!keyUsageExt.keyCertSign || bcExt === null) {
          // bad certificate
          error = {
            message:
              'Certificate keyUsage or basicConstraints conflict ' +
              'or indicate that the certificate is not a CA. ' +
              'If the certificate is the only one in the chain or ' +
              'isn\'t the first then the certificate must be a ' +
              'valid CA.',
            error: pki.certificateError.bad_certificate
          };
        }
      }
      // basic constraints cA flag must be set
      if(error === null && bcExt !== null && !bcExt.cA) {
        // bad certificate
        error = {
          message:
            'Certificate basicConstraints indicates the certificate ' +
            'is not a CA.',
          error: pki.certificateError.bad_certificate
        };
      }
      // if error is not null and keyUsage is available, then we know it
      // has keyCertSign and there is a basic constraints extension too,
      // which means we can check pathLenConstraint (if it exists)
      if(error === null && keyUsageExt !== null &&
        'pathLenConstraint' in bcExt) {
        // pathLen is the maximum # of intermediate CA certs that can be
        // found between the current certificate and the end-entity (depth 0)
        // certificate; this number does not include the end-entity (depth 0,
        // last in the chain) even if it happens to be a CA certificate itself
        var pathLen = depth - 1;
        if(pathLen > bcExt.pathLenConstraint) {
          // pathLenConstraint violated, bad certificate
          error = {
            message:
              'Certificate basicConstraints pathLenConstraint violated.',
            error: pki.certificateError.bad_certificate
          };
        }
      }
    }

    // call application callback
    var vfd = (error === null) ? true : error.error;
    var ret = options.verify ? options.verify(vfd, depth, certs) : vfd;
    if(ret === true) {
      // clear any set error
      error = null;
    } else {
      // if passed basic tests, set default message and alert
      if(vfd === true) {
        error = {
          message: 'The application rejected the certificate.',
          error: pki.certificateError.bad_certificate
        };
      }

      // check for custom error info
      if(ret || ret === 0) {
        // set custom message and error
        if(typeof ret === 'object' && !forge.util.isArray(ret)) {
          if(ret.message) {
            error.message = ret.message;
          }
          if(ret.error) {
            error.error = ret.error;
          }
        } else if(typeof ret === 'string') {
          // set custom error
          error.error = ret;
        }
      }

      // throw error
      throw error;
    }

    // no longer first cert in chain
    first = false;
    ++depth;
  } while(chain.length > 0);

  return true;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/typed-ts-events/dist/EventEmitter.js":
/*!***********************************************************!*\
  !*** ./node_modules/typed-ts-events/dist/EventEmitter.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this._events = Object.create(null);
    }
    EventEmitter.prototype.hasListeners = function (eventName) {
        return !!(this._events[eventName] && this._events[eventName].length);
    };
    EventEmitter.prototype.getActiveEvents = function () {
        var _this = this;
        return Object.keys(this._events).filter(function (name) { return _this.hasListeners(name); });
    };
    EventEmitter.prototype.trigger = function (eventName, params) {
        if (this._events[eventName]) {
            this._events[eventName] = this._events[eventName].filter(function (data) {
                try {
                    data.handler.call(data.context, params);
                }
                catch (e) {
                }
                return !data.once;
            });
            if (!this._events[eventName].length) {
                delete this._events[eventName];
            }
        }
    };
    EventEmitter.prototype.on = function (eventName, handler, context) {
        this._on(eventName, handler, context, false);
    };
    EventEmitter.prototype.once = function (eventName, handler, context) {
        this._on(eventName, handler, context, true);
    };
    EventEmitter.prototype.off = function (arg1, arg2) {
        var _this = this;
        var eventName = typeof arg1 === 'string' ? arg1 : null;
        var handler = typeof arg2 === 'function' ? arg2 : typeof arg1 === 'function' ? arg1 : null;
        if (!eventName) {
            Object.keys(this._events).forEach(function (eventName) {
                _this.off(eventName, handler);
            });
            return void 0;
        }
        if (!handler) {
            delete this._events[eventName];
            return void 0;
        }
        if (eventName in this._events) {
            this._events[eventName] = this._events[eventName].filter(function (item) { return item.handler !== handler; });
        }
    };
    EventEmitter.prototype._on = function (eventName, handler, context, once) {
        if (!this._events[eventName]) {
            this._events[eventName] = [];
        }
        this._events[eventName].push({ handler: handler, context: context, once: once });
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;


/***/ }),

/***/ "./node_modules/typed-ts-events/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/typed-ts-events/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(__webpack_require__(/*! ./EventEmitter */ "./node_modules/typed-ts-events/dist/EventEmitter.js"));


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/api-node/activation/index.ts":
/*!******************************************!*\
  !*** ./src/api-node/activation/index.ts ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.fetchActivationStatus = void 0;
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./src/tools/request.ts"));
/**
 * GET /activation/status
 * Status
 * @param base
 */
function fetchActivationStatus(base) {
    return request_1["default"]({
        base: base,
        url: 'activation/status'
    });
}
exports.fetchActivationStatus = fetchActivationStatus;


/***/ }),

/***/ "./src/api-node/addresses/index.ts":
/*!*****************************************!*\
  !*** ./src/api-node/addresses/index.ts ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.fetchAddresses = exports.fetchPublicKey = exports.fetchSeed = exports.fetchSeq = exports.fetchEffectiveBalance = exports.fetchEffectiveBalanceConfirmations = exports.deleteAddressFromWallet = exports.fetchMultipleBalance = exports.fetchBalance = exports.fetchValidate = exports.data = exports.fetchScriptInfo = exports.fetchBalanceConfirmations = exports.fetchBalanceDetails = exports.fetchScriptInfoMeta = exports.fetchDataKey = void 0;
var request_1 = __importStar(__webpack_require__(/*! ../../tools/request */ "./src/tools/request.ts"));
var query_1 = __importDefault(__webpack_require__(/*! ../../tools/query */ "./src/tools/query.ts"));
function fetchDataKey(base, address, key, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/addresses/data/" + address + "/" + encodeURIComponent(key),
        options: options
    });
}
exports.fetchDataKey = fetchDataKey;
function fetchScriptInfoMeta(base, address) {
    return request_1["default"]({
        base: base,
        url: "/addresses/scriptInfo/" + address + "/meta"
    });
}
exports.fetchScriptInfoMeta = fetchScriptInfoMeta;
function fetchBalanceDetails(base, address, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/addresses/balance/details/" + address,
        options: options
    });
}
exports.fetchBalanceDetails = fetchBalanceDetails;
function fetchBalanceConfirmations(base, address, confirmations, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/addresses/balance/" + address + "/" + confirmations,
        options: options
    });
}
exports.fetchBalanceConfirmations = fetchBalanceConfirmations;
function fetchScriptInfo(base, address, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/addresses/scriptInfo/" + address,
        options: options
    });
}
exports.fetchScriptInfo = fetchScriptInfo;
function data(base, address, params, options) {
    if (params === void 0) { params = Object.create(null); }
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/addresses/data/" + address + query_1["default"](params),
        options: options
    });
}
exports.data = data;
function fetchValidate(base, address) {
    return request_1["default"]({
        base: base,
        url: "/addresses/validate/" + address
    });
}
exports.fetchValidate = fetchValidate;
function fetchBalance(base, address, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/addresses/balance/" + address,
        options: options
    });
}
exports.fetchBalance = fetchBalance;
function fetchMultipleBalance(base, addresses, options) {
    if (options === void 0) { options = Object.create(null); }
    return fetch(base + "/addresses/balance", {
        method: "POST",
        body: JSON.stringify({ addresses: addresses }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(request_1.parseResponse);
}
exports.fetchMultipleBalance = fetchMultipleBalance;
function deleteAddressFromWallet(base, address, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/addresses/" + address,
        options: __assign(__assign({}, options), { method: 'DELETE' })
    });
}
exports.deleteAddressFromWallet = deleteAddressFromWallet;
function fetchEffectiveBalanceConfirmations(base, address, confirmations, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/addresses/effectiveBalance/" + address + "/" + confirmations,
        options: options
    });
}
exports.fetchEffectiveBalanceConfirmations = fetchEffectiveBalanceConfirmations;
function fetchEffectiveBalance(base, address, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/addresses/effectiveBalance/" + address,
        options: options
    });
}
exports.fetchEffectiveBalance = fetchEffectiveBalance;
function fetchSeq(base, from, to) {
    return request_1["default"]({
        base: base,
        url: "/addresses/seq/" + from + "/" + to
    });
}
exports.fetchSeq = fetchSeq;
function fetchSeed(base, address) {
    return request_1["default"]({
        base: base,
        url: "/addresses/seed/" + address
    });
}
exports.fetchSeed = fetchSeed;
function fetchPublicKey(base, publicKey) {
    return request_1["default"]({
        base: base,
        url: "/addresses/publicKey/" + publicKey
    });
}
exports.fetchPublicKey = fetchPublicKey;
function fetchAddresses(base) {
    return request_1["default"]({
        base: base,
        url: '/addresses'
    });
}
exports.fetchAddresses = fetchAddresses;


/***/ }),

/***/ "./src/api-node/alias/index.ts":
/*!*************************************!*\
  !*** ./src/api-node/alias/index.ts ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.fetchByAddress = exports.fetchByAlias = void 0;
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./src/tools/request.ts"));
function fetchByAlias(base, alias) {
    return request_1["default"]({
        base: base,
        url: "/alias/by-alias/" + alias
    });
}
exports.fetchByAlias = fetchByAlias;
function fetchByAddress(base, address) {
    return request_1["default"]({
        base: base,
        url: "/alias/by-address/" + address
    });
}
exports.fetchByAddress = fetchByAddress;


/***/ }),

/***/ "./src/api-node/assets/index.ts":
/*!**************************************!*\
  !*** ./src/api-node/assets/index.ts ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.convertEthAssetId = exports.fetchBalanceAddressAssetId = exports.fetchAssetsBalance = exports.fetchAssetsNft = exports.fetchAssetsAddressLimit = exports.fetchAssetDistribution = exports.fetchAssetsDetails = exports.fetchDetails = void 0;
var ts_types_1 = __webpack_require__(/*! @evestx/ts-types */ "./node_modules/@evestx/ts-types/dist/src/index.js");
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./src/tools/request.ts"));
var utils_1 = __webpack_require__(/*! ../../tools/utils */ "./src/tools/utils.ts");
var query_1 = __importDefault(__webpack_require__(/*! ../../tools/query */ "./src/tools/query.ts"));
function fetchDetails(base, assetId, options) {
    if (options === void 0) { options = Object.create(null); }
    var isOnce = !Array.isArray(assetId);
    return Promise.all(utils_1.toArray(assetId).map(function (id) { return request_1["default"]({
        base: base,
        url: "/assets/details/" + id,
        options: options
    }); }))
        .then(function (list) { return isOnce ? list[0] : list; });
}
exports.fetchDetails = fetchDetails;
/**
 * POST /assets/details
 * Provides detailed information about the given assets
 */
function fetchAssetsDetails(base, assetIds, options) {
    if (options === void 0) { options = Object.create(null); }
    var body = JSON.stringify({ ids: assetIds });
    var _options = __assign(__assign({}, options), { body: body, headers: {
            'content-type': 'application/json'
        }, method: 'POST' });
    return request_1["default"]({ base: base, url: "/assets/details", options: _options });
}
exports.fetchAssetsDetails = fetchAssetsDetails;
function fetchAssetDistribution(base, assetId, height, limit, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({ base: base, url: "/assets/" + assetId + "/distribution/" + height + "/limit/" + limit, options: options });
}
exports.fetchAssetDistribution = fetchAssetDistribution;
/**
 * TODO
 * GET /assets/{assetId}/distribution
 * Asset balance distribution
 */
function fetchAssetsAddressLimit(base, address, limit, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({ base: base, url: "assets/nft/" + address + "/limit/" + limit, options: options });
}
exports.fetchAssetsAddressLimit = fetchAssetsAddressLimit;
function fetchAssetsNft(base, _a, options) {
    var address = _a.address, limit = _a.limit, after = _a.after;
    if (options === void 0) { options = Object.create(null); }
    var url = new URL("assets/nft/" + address + "/limit/" + limit, base);
    if (after) {
        url.searchParams.append('after', after);
    }
    return request_1["default"]({ base: base, url: "" + url.pathname + url.search, options: options });
}
exports.fetchAssetsNft = fetchAssetsNft;
function fetchAssetsBalance(base, address, options) {
    if (options === void 0) { options = Object.create(null); }
    return __awaiter(this, void 0, void 0, function () {
        var balancesResponse, assetsWithoutIssueTransaction, detailsIds, assetsDetailsResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request_1["default"]({ base: base, url: "/assets/balance/" + address, options: options })];
                case 1:
                    balancesResponse = _a.sent();
                    assetsWithoutIssueTransaction = balancesResponse.balances.reduce(function (acc, balance, index) {
                        if (!balance.issueTransaction) {
                            acc[balance.assetId] = index;
                        }
                        return acc;
                    }, {});
                    detailsIds = Object.keys(assetsWithoutIssueTransaction);
                    if (!detailsIds.length) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetchAssetsDetails(base, detailsIds, options)];
                case 2:
                    assetsDetailsResponse = _a.sent();
                    assetsDetailsResponse.forEach(function (assetDetails) {
                        if ('error' in assetDetails) {
                            return;
                        }
                        var assetIndex = assetsWithoutIssueTransaction[assetDetails.assetId];
                        var assetBalance = balancesResponse.balances[assetIndex];
                        if (!assetBalance) {
                            return;
                        }
                        assetBalance.issueTransaction = {
                            id: assetDetails.originTransactionId,
                            name: assetDetails.name,
                            decimals: assetDetails.decimals,
                            description: assetDetails.description,
                            quantity: assetDetails.quantity,
                            reissuable: assetDetails.reissuable,
                            sender: assetDetails.issuer,
                            senderPublicKey: assetDetails.issuerPublicKey,
                            timestamp: assetDetails.issueTimestamp,
                            height: assetDetails.issueHeight,
                            script: assetDetails.scripted ? '-' : null,
                            proofs: [],
                            fee: Math.pow(10, 8),
                            feeAssetId: null,
                            version: 3,
                            type: ts_types_1.TRANSACTION_TYPE.ISSUE,
                            chainId: 0
                        };
                    });
                    _a.label = 3;
                case 3: return [2 /*return*/, balancesResponse];
            }
        });
    });
}
exports.fetchAssetsBalance = fetchAssetsBalance;
function fetchBalanceAddressAssetId(base, address, assetId, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({ base: base, url: "/assets/balance/" + address + "/" + assetId, options: options });
}
exports.fetchBalanceAddressAssetId = fetchBalanceAddressAssetId;
function convertEthAssetId(base, assetId) {
    return request_1["default"]({ base: base, url: "/eth/assets" + query_1["default"]({ id: assetId }) }).then(function (assets) { return assets[0].assetId; });
}
exports.convertEthAssetId = convertEthAssetId;


/***/ }),

/***/ "./src/api-node/blocks/index.ts":
/*!**************************************!*\
  !*** ./src/api-node/blocks/index.ts ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.fetchHeightByTimestamp = exports.fetchHeight = exports.fetchDelay = exports.fetchLast = exports.fetchBlocksByAddress = exports.fetchFirst = exports.fetchBlockById = exports.fetchSeq = exports.fetchBlockAt = exports.fetchHeadersById = exports.fetchHeadersAt = exports.fetchHeightById = exports.fetchHeadersLast = exports.fetchHeadersSeq = void 0;
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./src/tools/request.ts"));
/**
 * GET /blocks/headers/seq/{from}/{to}
 * Get block headers at specified heights
 * @param base
 * @param from
 * @param to
 */
function fetchHeadersSeq(base, from, to, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/blocks/headers/seq/" + from + "/" + to,
        options: options
    });
}
exports.fetchHeadersSeq = fetchHeadersSeq;
/**
 * GET /blocks/headers/last
 * Last block header
 * @param base
 */
function fetchHeadersLast(base, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/blocks/headers/last",
        options: options
    });
}
exports.fetchHeadersLast = fetchHeadersLast;
/**
 * GET /blocks/height/{id}
 * Height of a block by its id
 * @param base
 * @param id
 */
function fetchHeightById(base, id) {
    return request_1["default"]({
        base: base,
        url: "/blocks/height/" + id
    });
}
exports.fetchHeightById = fetchHeightById;
/**
 * GET /blocks/headers/at/{height}
 * Block header at height
 * @param base
 * @param height
 */
function fetchHeadersAt(base, height, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/blocks/headers/at/" + height,
        options: options
    });
}
exports.fetchHeadersAt = fetchHeadersAt;
/**
 * GET /blocks/headers/{id}
 * Get block at specified height
 * @param base
 * @param height
 */
function fetchHeadersById(base, id, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/blocks/headers/" + id,
        options: options
    });
}
exports.fetchHeadersById = fetchHeadersById;
/**
 * GET /blocks/at/{height}
 * Get block at specified height
 * @param base
 * @param height
 */
function fetchBlockAt(base, height, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/blocks/at/" + height,
        options: options
    });
}
exports.fetchBlockAt = fetchBlockAt;
/**
 * GET /blocks/seq/{from}/{to}
 * Block range
 * @param base
 * @param from
 * @param to
 */
function fetchSeq(base, from, to, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/blocks/seq/" + from + "/" + to,
        options: options
    });
}
exports.fetchSeq = fetchSeq;
/**
 * GET /blocks/{id}
 * Get block by its id
 * @param base
 * @param id
 */
function fetchBlockById(base, id, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/blocks/" + id,
        options: options
    });
}
exports.fetchBlockById = fetchBlockById;
/**
 * GET /blocks/first
 * Get genesis block
 * @param base
 */
function fetchFirst(base, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/blocks/first",
        options: options
    });
}
exports.fetchFirst = fetchFirst;
/**
 * /blocks/address/{address}/{from}/{to}
 * Get list of blocks generated by specified address
 * @param base
 * @param address
 * @param from
 * @param to
 */
function fetchBlocksByAddress(base, address, from, to, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/blocks/address/" + address + "/" + from + "/" + to,
        options: options
    });
}
exports.fetchBlocksByAddress = fetchBlocksByAddress;
/**
 * GET /blocks/last
 * Last block
 * @param base
 */
function fetchLast(base, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: '/blocks/last',
        options: options
    });
}
exports.fetchLast = fetchLast;
/**
 * GET /blocks/delay/{id}/{blockNum}
 * Average delay in milliseconds between last blockNum blocks starting from block with id
 * @param base
 * @param id
 * @param blockNum
 */
function fetchDelay(base, id, blockNum) {
    return request_1["default"]({
        base: base,
        url: "/blocks/delay/" + id + "/" + blockNum
    });
}
exports.fetchDelay = fetchDelay;
/**
 * GET /blocks/height
 * @param base
 */
function fetchHeight(base) {
    return request_1["default"]({
        base: base,
        url: '/blocks/height'
    });
}
exports.fetchHeight = fetchHeight;
/**
 * GET /blocks/heightByTimestamp
 * @param base
 */
function fetchHeightByTimestamp(base, timestamp, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/blocks/heightByTimestamp/" + timestamp,
        options: options
    });
}
exports.fetchHeightByTimestamp = fetchHeightByTimestamp;


/***/ }),

/***/ "./src/api-node/consensus/index.ts":
/*!*****************************************!*\
  !*** ./src/api-node/consensus/index.ts ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.fetchConsensusAlgo = exports.fetchBasetarget = exports.fetchGeneratingBalance = void 0;
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./src/tools/request.ts"));
/**
 * GET /consensus/generatingbalance/{address}
 * Generating balance
 * @param base
 * @param address
 */
function fetchGeneratingBalance(base, address, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({ base: base, url: "/consensus/generatingbalance/" + address });
}
exports.fetchGeneratingBalance = fetchGeneratingBalance;
/**
 * GET /consensus/basetarget
 * Base target last
 * @param base
 */
function fetchBasetarget(base) {
    return request_1["default"]({ base: base, url: '/consensus/basetarget' });
}
exports.fetchBasetarget = fetchBasetarget;
/**
 * GET /consensus/algo
 * Consensus algo
 * @param base
 */
function fetchConsensusAlgo(base) {
    return request_1["default"]({ base: base, url: '/consensus/algo' });
}
exports.fetchConsensusAlgo = fetchConsensusAlgo;


/***/ }),

/***/ "./src/api-node/debug/index.ts":
/*!*************************************!*\
  !*** ./src/api-node/debug/index.ts ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.debugValidate = exports.debugStateEvestx = exports.debugStateHash = exports.debugState = exports.debugRollbackTo = exports.debugRollback = exports.debugPrint = exports.fetchPortfolios = exports.fetchMinerInfo = exports.fetchDebugInfo = exports.fetchConfigInfo = exports.postPeerToTheBanList = exports.fetchStateChangesByTxId = exports.fetchStateChangesByAddress = exports.fetchBalanceHistory = void 0;
var request_1 = __importStar(__webpack_require__(/*! ../../tools/request */ "./src/tools/request.ts"));
var query_1 = __importDefault(__webpack_require__(/*! ../../tools/query */ "./src/tools/query.ts"));
/**
 * Evestx balance history
 * @param base
 * @param address
 */
function fetchBalanceHistory(base, address, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/debug/balances/history/" + address,
        options: options
    });
}
exports.fetchBalanceHistory = fetchBalanceHistory;
/**
 * Get list of transactions with state changes where specified address has been involved
 * @param base
 * @param address
 * @param limit
 * @param after
 */
function fetchStateChangesByAddress(base, address, limit, after, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/debug/stateChanges/address/" + address + "/limit/" + limit + query_1["default"]({ after: after }),
        options: options
    });
}
exports.fetchStateChangesByAddress = fetchStateChangesByAddress;
/**
 * Get invokeScript transaction state changes
 * @param base
 * @param txId
 */
function fetchStateChangesByTxId(base, txId, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/transactions/info/" + txId,
        options: options
    });
}
exports.fetchStateChangesByTxId = fetchStateChangesByTxId;
function postPeerToTheBanList(base, peer) {
    return fetch(base + "/debug/blacklist", {
        method: "POST",
        body: peer,
        headers: {
            "Content-Type": "application/json"
        }
    }).then(request_1.parseResponse);
}
exports.postPeerToTheBanList = postPeerToTheBanList;
function fetchConfigInfo(base, apiKey) {
    return fetch(base + "/debug/configInfo", {
        method: "GET",
        headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json"
        }
    }).then(request_1.parseResponse);
}
exports.fetchConfigInfo = fetchConfigInfo;
function fetchDebugInfo(base, apiKey) {
    return fetch(base + "/debug/info", {
        method: "GET",
        headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json"
        }
    }).then(request_1.parseResponse);
}
exports.fetchDebugInfo = fetchDebugInfo;
function fetchMinerInfo(base, apiKey) {
    return fetch(base + "/debug/minerInfo", {
        method: "GET",
        headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json"
        }
    }).then(request_1.parseResponse);
}
exports.fetchMinerInfo = fetchMinerInfo;
function fetchPortfolios(base, address, apiKey) {
    return fetch(base + "/debug/portfolios/" + address, {
        method: "GET",
        headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json"
        }
    }).then(request_1.parseResponse);
}
exports.fetchPortfolios = fetchPortfolios;
function debugPrint(base, message, apiKey) {
    return fetch(base + "/debug/print", {
        method: "POST",
        headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    }).then(request_1.parseResponse);
}
exports.debugPrint = debugPrint;
/**
 * Removes all blocks after a given height. Max number of blocks back from the current height is set by evestx.db.max-rollback-depth, 2000 by default
 * @param base
 * @param height
 * @param returnTransactionsToUtx
 * @param apiKey
 */
function debugRollback(base, height, returnTransactionsToUtx, apiKey) {
    return fetch(base + "/debug/rollback", {
        method: "POST",
        headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            rollbackTo: height,
            returnTransactionsToUtx: returnTransactionsToUtx
        })
    }).then(request_1.parseResponse);
}
exports.debugRollback = debugRollback;
/**
 * Rollback the state to the block with a given ID
 * @param base
 * @param height
 * @param returnTransactionsToUtx
 * @param apiKey
 */
function debugRollbackTo(base, id, apiKey) {
    return fetch(base + "/debug/rollback-to/" + id, {
        method: "DELETE",
        headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json"
        },
    }).then(request_1.parseResponse);
}
exports.debugRollbackTo = debugRollbackTo;
/**
 * Regular address balance at the current height
 * @param base
 * @param apiKey
 */
function debugState(base, apiKey) {
    return fetch(base + "/debug/state", {
        method: "GET",
        headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json"
        },
    }).then(request_1.parseResponse);
}
exports.debugState = debugState;
/**
 * Get state hash at height. Available only if node configuration contains evestx.db.store-state-hashes = true option
 * @param base
 * @param height
 */
function debugStateHash(base, height, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/debug/stateHash/" + height,
        options: options
    });
}
exports.debugStateHash = debugStateHash;
/**
 * Regular address balance at the height. Max number of blocks back from the current height is set by evestx.db.max-rollback-depth, 2000 by default
 * @param base
 * @param height
 * @param apiKey
 */
function debugStateEvestx(base, height, apiKey) {
    return fetch(base + "/debug/stateEvestx/" + height, {
        method: "GET",
        headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json"
        },
    }).then(request_1.parseResponse);
}
exports.debugStateEvestx = debugStateEvestx;
/**
 * Validates a transaction and measures time spent in milliseconds. You should use the JSON transaction format with proofs
 * @param base
 * @param transaction
 */
function debugValidate(base, transaction) {
    return fetch(base + "/debug/validate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: transaction
    }).then(request_1.parseResponse);
}
exports.debugValidate = debugValidate;
// @TODO need API key:
// GET /debug/stateEvestx/{height}
// POST /debug/rollback
// DELETE /debug/rollback-to/{id}
// GET /debug/portfolios/{address}
// GET /debug/minerInfo
// GET /debug/historyInfo
// GET /debug/historyInfo
// GET /debug/info
// POST /debug/validate
// GET /debug/blocks/{howMany}
// POST /debug/blacklist
// POST /debug/print
// GET /debug/state


/***/ }),

/***/ "./src/api-node/eth/index.ts":
/*!***********************************!*\
  !*** ./src/api-node/eth/index.ts ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.fetchEthAssetDetails = void 0;
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./src/tools/request.ts"));
var utils_1 = __webpack_require__(/*! ../../tools/utils */ "./src/tools/utils.ts");
var query_1 = __importDefault(__webpack_require__(/*! ../../tools/query */ "./src/tools/query.ts"));
function fetchEthAssetDetails(base, ethAssetId) {
    var id = utils_1.toArray(ethAssetId);
    return request_1["default"]({ base: base, url: "/eth/assets?" + query_1["default"]({ id: id }) }).then(function (list) { return Array.isArray(ethAssetId) ? list : list[0]; });
}
exports.fetchEthAssetDetails = fetchEthAssetDetails;


/***/ }),

/***/ "./src/api-node/leasing/index.ts":
/*!***************************************!*\
  !*** ./src/api-node/leasing/index.ts ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.fetchLeasingInfo = exports.fetchActive = void 0;
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./src/tools/request.ts"));
/**
 * GET /leasing/active/{address}
 * Get all active leases for an address
 */
function fetchActive(base, address, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({ base: base, url: "/leasing/active/" + address, options: options });
}
exports.fetchActive = fetchActive;
/**
 * GET /leasing/info/
 * Get lease transactions info.
 */
function fetchLeasingInfo(base, ids, options) {
    if (options === void 0) { options = Object.create(null); }
    var searchParams = "{\"ids\":[" + ids.map(function (id) { return "\"" + id + "\""; }).join(',') + "]}";
    return request_1["default"]({
        base: base, url: "/leasing/info/", options: __assign(__assign({}, options), { body: searchParams, method: 'POST', headers: {
                'Content-Type': 'application/json'
            } })
    });
}
exports.fetchLeasingInfo = fetchLeasingInfo;


/***/ }),

/***/ "./src/api-node/node/index.ts":
/*!************************************!*\
  !*** ./src/api-node/node/index.ts ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.fetchNodeVersion = exports.fetchNodeStatus = void 0;
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./src/tools/request.ts"));
// @TODO: When correct API key
// POST /node/stop
function fetchNodeStatus(base, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({ base: base, url: '/node/status', options: options });
}
exports.fetchNodeStatus = fetchNodeStatus;
function fetchNodeVersion(base, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({ base: base, url: '/node/version', options: options });
}
exports.fetchNodeVersion = fetchNodeVersion;


/***/ }),

/***/ "./src/api-node/peers/index.ts":
/*!*************************************!*\
  !*** ./src/api-node/peers/index.ts ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.fetchSuspended = exports.fetchBlackListed = exports.fetchConnected = exports.fetchAll = void 0;
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./src/tools/request.ts"));
/**
 * GET /peers/all
 * Peer list
 */
function fetchAll(base, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: '/peers/all',
        options: options
    });
}
exports.fetchAll = fetchAll;
/**
 * GET /peers/connected
 * Connected peers list
 */
function fetchConnected(base, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: '/peers/connected',
        options: options
    });
}
exports.fetchConnected = fetchConnected;
/**
 * GET /peers/blacklisted
 * Blacklisted peers list
 */
function fetchBlackListed(base, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: '/peers/blacklisted',
        options: options
    });
}
exports.fetchBlackListed = fetchBlackListed;
/**
 * GET /peers/suspended
 * Suspended peers list
 */
function fetchSuspended(base, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: '/peers/suspended',
        options: options
    });
}
exports.fetchSuspended = fetchSuspended;


/***/ }),

/***/ "./src/api-node/rewards/index.ts":
/*!***************************************!*\
  !*** ./src/api-node/rewards/index.ts ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.fetchRewards = void 0;
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./src/tools/request.ts"));
/**
 * GET /blockchain/rewards
 * Current reward status
 */
function fetchRewards(base, height, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: height ? "/blockchain/rewards/" + height : '/blockchain/rewards',
        options: options
    });
}
exports.fetchRewards = fetchRewards;


/***/ }),

/***/ "./src/api-node/transactions/index.ts":
/*!********************************************!*\
  !*** ./src/api-node/transactions/index.ts ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.broadcast = exports.fetchStatus = exports.fetchMultipleInfo = exports.fetchInfo = exports.fetchUnconfirmedInfo = exports.fetchTransactions = exports.fetchUnconfirmed = exports.fetchCalculateFee = exports.fetchUnconfirmedSize = void 0;
var constants_1 = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
var blocks_1 = __webpack_require__(/*! ../blocks */ "./src/api-node/blocks/index.ts");
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./src/tools/request.ts"));
var query_1 = __importDefault(__webpack_require__(/*! ../../tools/query */ "./src/tools/query.ts"));
var utils_1 = __webpack_require__(/*! ../../tools/utils */ "./src/tools/utils.ts");
var stringify_1 = __importDefault(__webpack_require__(/*! ../../tools/stringify */ "./src/tools/stringify.ts"));
/**
 * GET /transactions/unconfirmed/size
 * Number of unconfirmed transactions
 */
function fetchUnconfirmedSize(base) {
    return request_1["default"]({
        base: base,
        url: '/transactions/unconfirmed/size'
    });
}
exports.fetchUnconfirmedSize = fetchUnconfirmedSize;
// @TODO: when correct API key is received
/**
 * POST /transactions/sign/{signerAddress}
 * Sign a transaction with a non-default private key
 */
/**
 * POST /transactions/calculateFee
 * Calculate transaction fee
 */
function fetchCalculateFee(base, tx, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: '/transactions/calculateFee',
        options: utils_1.deepAssign(__assign({}, options), {
            method: 'POST',
            body: stringify_1["default"](tx),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    });
}
exports.fetchCalculateFee = fetchCalculateFee;
/**
 * GET /transactions/unconfirmed
 * Unconfirmed transactions
 */
function fetchUnconfirmed(base, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: '/transactions/unconfirmed',
        options: options
    });
}
exports.fetchUnconfirmed = fetchUnconfirmed;
/**
 * Список транзакций по адресу
 * @param address
 * @param limit      максимальное количество транзакций в результате
 * @param after      искать транзакции после ID указанного в after
 * @param retry      количество попыток на выполнение запроса
 */
function fetchTransactions(base, address, limit, after, retry, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/transactions/address/" + address + "/limit/" + limit + query_1["default"]({ after: after }),
        options: options
    }).then(function (_a) {
        var _b = __read(_a, 1), list = _b[0];
        return list;
    });
}
exports.fetchTransactions = fetchTransactions;
/**
 * GET /transactions/unconfirmed/info/{id}
 * Unconfirmed transaction info
 */
function fetchUnconfirmedInfo(base, id, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/transactions/unconfirmed/info/" + id,
        options: options
    });
}
exports.fetchUnconfirmedInfo = fetchUnconfirmedInfo;
// @TODO when correct API key is received
/**
 * POST /transactions/sign
 * Sign a transaction
 */
/**
 * GET /transactions/info/{id}
 * Transaction info
 */
function fetchInfo(base, id, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/transactions/info/" + id,
        options: options
    });
}
exports.fetchInfo = fetchInfo;
/**
 * GET /transactions/info/
 * Get transactions by IDs
 */
function fetchMultipleInfo(base, ids, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: "/transactions/info" + query_1["default"]({ id: ids }),
        options: options
    });
}
exports.fetchMultipleInfo = fetchMultipleInfo;
function fetchStatus(base, list) {
    var DEFAULT_STATUS = {
        id: '',
        confirmations: -1,
        height: -1,
        inUTX: false,
        status: constants_1.TRANSACTION_STATUSES.NOT_FOUND
    };
    var loadAllTxInfo = list.map(function (id) {
        return fetchUnconfirmedInfo(base, id)
            .then(function () { return (__assign(__assign({}, DEFAULT_STATUS), { id: id, status: constants_1.TRANSACTION_STATUSES.UNCONFIRMED, inUTX: true })); })["catch"](function () { return fetchInfo(base, id)
            .then(function (tx) { return (__assign(__assign({}, DEFAULT_STATUS), { id: id, status: constants_1.TRANSACTION_STATUSES.IN_BLOCKCHAIN, height: tx.height, applicationStatus: tx.applicationStatus })); }); })["catch"](function () { return (__assign(__assign({}, DEFAULT_STATUS), { id: id })); });
    });
    return Promise.all([
        blocks_1.fetchHeight(base),
        Promise.all(loadAllTxInfo)
    ]).then(function (_a) {
        var _b = __read(_a, 2), height = _b[0].height, statuses = _b[1];
        return ({
            height: height,
            statuses: statuses.map(function (item) { return (__assign(__assign({}, item), { confirmations: item.status === constants_1.TRANSACTION_STATUSES.IN_BLOCKCHAIN ? height - item.height : item.confirmations })); })
        });
    });
}
exports.fetchStatus = fetchStatus;
function broadcast(base, tx, options) {
    if (options === void 0) { options = Object.create(null); }
    return request_1["default"]({
        base: base,
        url: '/transactions/broadcast',
        options: utils_1.deepAssign(__assign({}, options), {
            method: 'POST',
            body: stringify_1["default"](tx),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    });
}
exports.broadcast = broadcast;


/***/ }),

/***/ "./src/api-node/utils/index.ts":
/*!*************************************!*\
  !*** ./src/api-node/utils/index.ts ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.fetchNodeTime = exports.fetchSignPrivateKey = exports.fetchScriptDecompile = exports.fetchScriptMeta = exports.fetchHashFast = exports.fetchHashSecure = exports.fetchTransactionSerialize = exports.fetchEvaluate = exports.fetchEstimate = exports.fetchCompileWithImports = exports.fetchCompileCode = exports.fetchSeed = void 0;
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./src/tools/request.ts"));
var stringify_1 = __importDefault(__webpack_require__(/*! ../../tools/stringify */ "./src/tools/stringify.ts"));
/**
 * GET /utils/seed
 * Generate random seed
 */
function fetchSeed(base, length) {
    return request_1["default"]({
        base: base,
        url: "/utils/seed" + (length ? "/" + length : '')
    });
}
exports.fetchSeed = fetchSeed;
/**
 * POST /utils/script/compileCode
 * Compiles string code to base64 script representation
 */
function fetchCompileCode(base, body) {
    return request_1["default"]({
        base: base,
        url: '/utils/script/compileCode',
        options: {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });
}
exports.fetchCompileCode = fetchCompileCode;
/**
 * POST /utils/script/compileWithImports
 * Compiles string code with imports to base64 script representation
 */
function fetchCompileWithImports(base, body) {
    return request_1["default"]({
        base: base,
        url: '/utils/script/compileWithImports',
        options: {
            method: 'POST',
            body: stringify_1["default"](body),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });
}
exports.fetchCompileWithImports = fetchCompileWithImports;
/**
 * POST /utils/script/estimate
 * Estimates compiled code in Base64 representation
 */
function fetchEstimate(base, body) {
    return request_1["default"]({
        base: base,
        url: '/utils/script/estimate',
        options: {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });
}
exports.fetchEstimate = fetchEstimate;
/**
 * POST /utils/script/evaluate
 * Evaluates the provided expression, taking into account the deployed dApp contract
 */
function fetchEvaluate(base, address, expr) {
    return request_1["default"]({
        base: base,
        url: "/utils/script/evaluate/" + address,
        options: {
            method: 'POST',
            body: JSON.stringify({ expr: expr }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });
}
exports.fetchEvaluate = fetchEvaluate;
/**
 * POST /utils/transactionSerialize
 * Serialize transaction
 */
function fetchTransactionSerialize(base, body) {
    return request_1["default"]({
        base: base,
        url: '/utils/transactionSerialize',
        options: {
            method: 'POST',
            body: stringify_1["default"](body),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });
}
exports.fetchTransactionSerialize = fetchTransactionSerialize;
/**
 * POST /utils/hash/secure
 * Return SecureCryptographicHash of specified message
 */
function fetchHashSecure(base, body) {
    return request_1["default"]({
        base: base,
        url: '/utils/hash/secure',
        options: {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });
}
exports.fetchHashSecure = fetchHashSecure;
/**
 * POST /utils/hash/fast
 * Return FastCryptographicHash of specified message
 */
function fetchHashFast(base, body) {
    return request_1["default"]({
        base: base,
        url: '/utils/hash/fast',
        options: {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });
}
exports.fetchHashFast = fetchHashFast;
/**
 * POST /utils/script/meta
 * Account's script meta
 */
function fetchScriptMeta(base, body) {
    return request_1["default"]({
        base: base,
        url: '/utils/script/meta',
        options: {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });
}
exports.fetchScriptMeta = fetchScriptMeta;
/**
 * POST /utils/script/decompile
 * Decompiles base64 script representation to string code
 */
function fetchScriptDecompile(base, body) {
    return request_1["default"]({
        base: base,
        url: '/utils/script/decompile',
        options: {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });
}
exports.fetchScriptDecompile = fetchScriptDecompile;
/**
 * POST /utils/sign/{privateKey}
 * Return FastCryptographicHash of specified message
 */
function fetchSignPrivateKey(base, privateKey, body) {
    return request_1["default"]({
        base: base,
        url: "/utils/sign/" + privateKey,
        options: {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });
}
exports.fetchSignPrivateKey = fetchSignPrivateKey;
/**
 * GET /utils/time
 * Current Node time (UTC)
 */
function fetchNodeTime(base) {
    return request_1["default"]({
        base: base,
        url: '/utils/time'
    });
}
exports.fetchNodeTime = fetchNodeTime;


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.TRANSACTION_STATUSES = exports.NAME_MAP = exports.TYPE_MAP = void 0;
exports.TYPE_MAP = {
    3: 'issue',
    4: 'transfer',
    5: 'reissue',
    6: 'burn',
    7: 'exchange',
    8: 'lease',
    9: 'cancelLease',
    10: 'alias',
    11: 'massTransfer',
    12: 'data',
    13: 'setScript',
    14: 'sponsorship',
    15: 'setAssetScript',
    16: 'invoke',
    17: 'updateAsset'
};
exports.NAME_MAP = {
    'issue': 3,
    'transfer': 4,
    'reissue': 5,
    'burn': 6,
    'exchange': 7,
    'lease': 8,
    'cancelLease': 9,
    'alias': 10,
    'massTransfer': 11,
    'data': 12,
    'setScript': 13,
    'sponsorship': 14,
    'setAssetScript': 15,
    'invoke': 16,
    'updateAsset': 17
};
exports.TRANSACTION_STATUSES = {
    IN_BLOCKCHAIN: 'in_blockchain',
    UNCONFIRMED: 'unconfirmed',
    NOT_FOUND: 'not_found'
};


/***/ }),

/***/ "./src/create.ts":
/*!***********************!*\
  !*** ./src/create.ts ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.create = void 0;
var addressesModule = __importStar(__webpack_require__(/*! ./api-node/addresses */ "./src/api-node/addresses/index.ts"));
var blocksModule = __importStar(__webpack_require__(/*! ./api-node/blocks */ "./src/api-node/blocks/index.ts"));
var transactionsModule = __importStar(__webpack_require__(/*! ./api-node/transactions */ "./src/api-node/transactions/index.ts"));
var leasingModule = __importStar(__webpack_require__(/*! ./api-node/leasing */ "./src/api-node/leasing/index.ts"));
var peersModule = __importStar(__webpack_require__(/*! ./api-node/peers */ "./src/api-node/peers/index.ts"));
var rewardsModule = __importStar(__webpack_require__(/*! ./api-node/rewards */ "./src/api-node/rewards/index.ts"));
var utilsModule = __importStar(__webpack_require__(/*! ./api-node/utils */ "./src/api-node/utils/index.ts"));
var debugModule = __importStar(__webpack_require__(/*! ./api-node/debug */ "./src/api-node/debug/index.ts"));
var aliasModule = __importStar(__webpack_require__(/*! ./api-node/alias */ "./src/api-node/alias/index.ts"));
var consensusModule = __importStar(__webpack_require__(/*! ./api-node/consensus */ "./src/api-node/consensus/index.ts"));
var activationModule = __importStar(__webpack_require__(/*! ./api-node/activation */ "./src/api-node/activation/index.ts"));
var nodeModule = __importStar(__webpack_require__(/*! ./api-node/node */ "./src/api-node/node/index.ts"));
var assetsModule = __importStar(__webpack_require__(/*! ./api-node/assets */ "./src/api-node/assets/index.ts"));
var ethModule = __importStar(__webpack_require__(/*! ./api-node/eth */ "./src/api-node/eth/index.ts"));
var query_1 = __importDefault(__webpack_require__(/*! ./tools/query */ "./src/tools/query.ts"));
var resolve_1 = __importDefault(__webpack_require__(/*! ./tools/resolve */ "./src/tools/resolve.ts"));
var request_1 = __importDefault(__webpack_require__(/*! ./tools/request */ "./src/tools/request.ts"));
var broadcast_1 = __importDefault(__webpack_require__(/*! ./tools/transactions/broadcast */ "./src/tools/transactions/broadcast.ts"));
var getAssetsByTransaction_1 = __importDefault(__webpack_require__(/*! ./tools/adresses/getAssetsByTransaction */ "./src/tools/adresses/getAssetsByTransaction.ts"));
var getAssetIdListByTx_1 = __importDefault(__webpack_require__(/*! ./tools/adresses/getAssetIdListByTx */ "./src/tools/adresses/getAssetIdListByTx.ts"));
var getTransactionsWithAssets_1 = __importDefault(__webpack_require__(/*! ./tools/adresses/getTransactionsWithAssets */ "./src/tools/adresses/getTransactionsWithAssets.ts"));
var availableSponsoredBalances_1 = __importDefault(__webpack_require__(/*! ./tools/adresses/availableSponsoredBalances */ "./src/tools/adresses/availableSponsoredBalances.ts"));
var wait_1 = __importDefault(__webpack_require__(/*! ./tools/transactions/wait */ "./src/tools/transactions/wait.ts"));
var parse_1 = __importDefault(__webpack_require__(/*! ./tools/parse */ "./src/tools/parse.ts"));
var getNetworkByte_1 = __importDefault(__webpack_require__(/*! ./tools/blocks/getNetworkByte */ "./src/tools/blocks/getNetworkByte.ts"));
var getNetworkCode_1 = __importDefault(__webpack_require__(/*! ./tools/blocks/getNetworkCode */ "./src/tools/blocks/getNetworkCode.ts"));
var watch_1 = __importDefault(__webpack_require__(/*! ./tools/adresses/watch */ "./src/tools/adresses/watch.ts"));
var toolsUtilsModule = __importStar(__webpack_require__(/*! ./tools/utils */ "./src/tools/utils.ts"));
function create(base) {
    var addresses = wrapRecord(base, addressesModule);
    var blocks = wrapRecord(base, blocksModule);
    var transactions = wrapRecord(base, transactionsModule);
    var leasing = wrapRecord(base, leasingModule);
    var peers = wrapRecord(base, peersModule);
    var rewards = wrapRecord(base, rewardsModule);
    var utils = wrapRecord(base, utilsModule);
    var debug = wrapRecord(base, debugModule);
    var alias = wrapRecord(base, aliasModule);
    var consensus = wrapRecord(base, consensusModule);
    var activation = wrapRecord(base, activationModule);
    var node = wrapRecord(base, nodeModule);
    var assets = wrapRecord(base, assetsModule);
    var eth = wrapRecord(base, ethModule);
    var tools = {
        transactions: {
            broadcast: wrapRequest(base, broadcast_1["default"]),
            wait: wrapRequest(base, wait_1["default"])
        },
        blocks: {
            getNetworkByte: wrapRequest(base, getNetworkByte_1["default"]),
            getNetworkCode: wrapRequest(base, getNetworkCode_1["default"])
        },
        addresses: {
            createWatch: wrapRequest(base, watch_1["default"]),
            getAssetsByTransaction: wrapRequest(base, getAssetsByTransaction_1["default"]),
            getAssetIdListByTx: getAssetIdListByTx_1["default"],
            getTransactionsWithAssets: wrapRequest(base, getTransactionsWithAssets_1["default"]),
            availableSponsoredBalances: wrapRequest(base, availableSponsoredBalances_1["default"])
        },
        utils: toolsUtilsModule,
        query: query_1["default"],
        resolve: resolve_1["default"],
        request: request_1["default"],
        parse: parse_1["default"]
    };
    return {
        addresses: addresses,
        blocks: blocks,
        transactions: transactions,
        leasing: leasing,
        tools: tools,
        peers: peers,
        rewards: rewards,
        utils: utils,
        debug: debug,
        alias: alias,
        consensus: consensus,
        activation: activation,
        node: node,
        assets: assets,
        eth: eth
    };
}
exports.create = create;
function wrapRecord(base, hash) {
    return Object.keys(hash).reduce(function (acc, methodName) {
        acc[methodName] = wrapRequest(base, hash[methodName]);
        return acc;
    }, {});
}
function wrapRequest(base, callback) {
    return callback.bind(null, base);
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.create = exports.ethTxId2evestx = exports.evestxAsset2Eth = exports.ethAddress2evestx = exports.evestxAddress2eth = void 0;
var evestxAddress2eth_1 = __importDefault(__webpack_require__(/*! ./tools/adresses/evestxAddress2eth */ "./src/tools/adresses/evestxAddress2eth.ts"));
exports.evestxAddress2eth = evestxAddress2eth_1["default"];
var ethAddress2evestx_1 = __importDefault(__webpack_require__(/*! ./tools/adresses/ethAddress2evestx */ "./src/tools/adresses/ethAddress2evestx.ts"));
exports.ethAddress2evestx = ethAddress2evestx_1["default"];
var evestxAsset2eth_1 = __importDefault(__webpack_require__(/*! ./tools/assets/evestxAsset2eth */ "./src/tools/assets/evestxAsset2eth.ts"));
exports.evestxAsset2Eth = evestxAsset2eth_1["default"];
var ethTxId2evestx_1 = __importDefault(__webpack_require__(/*! ./tools/transactions/ethTxId2evestx */ "./src/tools/transactions/ethTxId2evestx.ts"));
exports.ethTxId2evestx = ethTxId2evestx_1["default"];
var create_1 = __webpack_require__(/*! ./create */ "./src/create.ts");
exports.create = create_1.create;
exports["default"] = create_1.create;


/***/ }),

/***/ "./src/tools/adresses/availableSponsoredBalances.ts":
/*!**********************************************************!*\
  !*** ./src/tools/adresses/availableSponsoredBalances.ts ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var bignumber_1 = __webpack_require__(/*! @evestx/bignumber */ "./node_modules/@evestx/bignumber/dist/bignumber.umd.min.js");
var assets_1 = __webpack_require__(/*! ../../api-node/assets */ "./src/api-node/assets/index.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/tools/utils.ts");
function default_1(base, address, evestxFee) {
    return assets_1.fetchAssetsBalance(base, address).then(utils_1.pipe(utils_1.prop('balances'), utils_1.filter(canBeSponsor(evestxFee)), utils_1.map(currentFee(evestxFee))));
}
exports["default"] = default_1;
function canBeSponsor(evestxFee) {
    return function (balance) { return (balance.minSponsoredAssetFee
        && bignumber_1.BigNumber.toBigNumber(balance.sponsorBalance || 0)
            .gte(evestxFee)
        && bignumber_1.BigNumber.toBigNumber(evestxFee)
            .div(0.001 * Math.pow(10, 8))
            .mul(balance.minSponsoredAssetFee)
            .lte(balance.balance)) || false; };
}
function currentFee(evestxFee) {
    var count = bignumber_1.BigNumber.toBigNumber(evestxFee)
        .div(0.001 * Math.pow(10, 8));
    return function (balance) { return ({
        assetId: balance.assetId,
        evestxFee: evestxFee,
        assetFee: bignumber_1.BigNumber.toBigNumber(balance.minSponsoredAssetFee)
            .mul(count)
            .toFixed()
    }); };
}


/***/ }),

/***/ "./src/tools/adresses/ethAddress2evestx.ts":
/*!************************************************!*\
  !*** ./src/tools/adresses/ethAddress2evestx.ts ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
exports.__esModule = true;
var ts_lib_crypto_1 = __webpack_require__(/*! @evestx/ts-lib-crypto */ "./node_modules/@evestx/ts-lib-crypto/index.js");
var validateEthAddress = function (addr) {
    return addr != null && addr.length == 42;
};
function ethAddress2evestx(ethAddress, chainId) {
    if (validateEthAddress(ethAddress)) {
        ethAddress = ethAddress.substr(2);
    }
    else {
        throw "Invalid ethereum address: " + ethAddress + " ";
    }
    var prefixBytes = new Uint8Array([0x03, chainId]);
    // Раскодировать HEX строку в байты (PK_HASH)
    var pkHashBytes = ts_lib_crypto_1.base16Decode(ethAddress);
    // Сделать чексумму CHECKSUM=keccak256(blake2b256([0x01, CHAIN_ID] + PK_HASH))
    var checksumBytes = new Uint8Array(__spread(prefixBytes, pkHashBytes));
    var checksum = ts_lib_crypto_1.keccak(ts_lib_crypto_1.blake2b(checksumBytes));
    // склеить [0x01, CHAIN_ID] (два байта) + PK_HASH (изначальные 20 байт) + CHECKSUM[1:4] (первые четыре байта чексуммы)
    var evestxBytes = new Uint8Array(__spread(prefixBytes, pkHashBytes.slice(0, 20), checksum.slice(0, 4)));
    // закодировать в base58
    var evestxAddress = ts_lib_crypto_1.base58Encode(evestxBytes);
    return evestxAddress;
}
exports["default"] = ethAddress2evestx;


/***/ }),

/***/ "./src/tools/adresses/getAssetIdListByTx.ts":
/*!**************************************************!*\
  !*** ./src/tools/adresses/getAssetIdListByTx.ts ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var _a;
exports.__esModule = true;
var utils_1 = __webpack_require__(/*! ../utils */ "./src/tools/utils.ts");
var constants_1 = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
var getAssetIdList = utils_1.switchTransactionByType((_a = {},
    _a[constants_1.NAME_MAP.transfer] = function (tx) { return [tx.assetId, tx.feeAssetId]; },
    _a[constants_1.NAME_MAP.burn] = function (tx) { return [tx.assetId]; },
    _a[constants_1.NAME_MAP.reissue] = function (tx) { return [tx.assetId]; },
    _a[constants_1.NAME_MAP.exchange] = function (tx) { return Array.from(new Set([
        tx.order1.assetPair.amountAsset,
        tx.order1.assetPair.priceAsset,
        tx.order1.version === 3 ? tx.order1.matcherFeeAssetId : null,
        tx.order2.version === 3 ? tx.order2.matcherFeeAssetId : null
    ])); },
    _a[constants_1.NAME_MAP.massTransfer] = function (tx) { return [tx.assetId]; },
    _a[constants_1.NAME_MAP.setAssetScript] = function (tx) { return [tx.assetId]; },
    _a[constants_1.NAME_MAP.sponsorship] = function (tx) { return [tx.assetId]; },
    _a[constants_1.NAME_MAP.invoke] = function (tx) { return __spread((tx.payment || []).map(utils_1.prop('assetId')), [tx.feeAssetId]); },
    _a[constants_1.NAME_MAP.updateAsset] = function (tx) { return [tx.assetId]; },
    _a));
function default_1(tx) {
    // @ts-ignore
    var idList = utils_1.toArray(tx).reduce(function (acc, tx) { return acc.concat(getAssetIdList(tx) || []); }, []).filter(function (x) { return x != null; });
    return idList;
}
exports["default"] = default_1;


/***/ }),

/***/ "./src/tools/adresses/getAssetsByTransaction.ts":
/*!******************************************************!*\
  !*** ./src/tools/adresses/getAssetsByTransaction.ts ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var assets_1 = __webpack_require__(/*! ../../api-node/assets */ "./src/api-node/assets/index.ts");
var getAssetIdListByTx_1 = __importDefault(__webpack_require__(/*! ./getAssetIdListByTx */ "./src/tools/adresses/getAssetIdListByTx.ts"));
var utils_1 = __webpack_require__(/*! ../utils */ "./src/tools/utils.ts");
function default_1(base, tx) {
    return assets_1.fetchDetails(base, getAssetIdListByTx_1["default"](tx))
        .then(function (list) { return utils_1.indexBy(utils_1.prop('assetId'), list); });
}
exports["default"] = default_1;


/***/ }),

/***/ "./src/tools/adresses/getTransactionsWithAssets.ts":
/*!*********************************************************!*\
  !*** ./src/tools/adresses/getTransactionsWithAssets.ts ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var transactions_1 = __webpack_require__(/*! ../../api-node/transactions */ "./src/api-node/transactions/index.ts");
var getAssetsByTransaction_1 = __importDefault(__webpack_require__(/*! ./getAssetsByTransaction */ "./src/tools/adresses/getAssetsByTransaction.ts"));
function default_1(base, address, limit, after) {
    return transactions_1.fetchTransactions(base, address, limit, after)
        .then(function (transactions) { return getAssetsByTransaction_1["default"](base, transactions).then(function (assets) { return ({ transactions: transactions, assets: assets }); }); });
}
exports["default"] = default_1;


/***/ }),

/***/ "./src/tools/adresses/watch.ts":
/*!*************************************!*\
  !*** ./src/tools/adresses/watch.ts ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
exports.__esModule = true;
exports.Watch = void 0;
var transactions_1 = __webpack_require__(/*! ../../api-node/transactions */ "./src/api-node/transactions/index.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/tools/utils.ts");
var typed_ts_events_1 = __webpack_require__(/*! typed-ts-events */ "./node_modules/typed-ts-events/dist/index.js");
var Watch = /** @class */ (function () {
    function Watch(base, address, tx, interval) {
        this._emitter = new typed_ts_events_1.EventEmitter();
        this._timer = null;
        this.address = address;
        this._interval = interval || 1000;
        this._base = base;
        this._lastBlock = {
            lastId: (tx === null || tx === void 0 ? void 0 : tx.id) || '',
            height: (tx === null || tx === void 0 ? void 0 : tx.height) || 0,
            transactions: tx ? [tx] : []
        };
        this._addTimeout();
    }
    Watch.prototype.on = function (event, handler) {
        this._emitter.on(event, handler);
    };
    Watch.prototype.once = function (event, handler) {
        this._emitter.once(event, handler);
    };
    Watch.prototype.off = function (event, handler) {
        this._emitter.off(event, handler);
    };
    Watch.prototype._run = function () {
        var _this = this;
        if (this._timer) {
            clearTimeout(this._timer);
        }
        var onError = function () { return _this._addTimeout(); };
        transactions_1.fetchTransactions(this._base, this.address, 1)
            .then(function (_a) {
            var _b = __read(_a, 1), tx = _b[0];
            if (!tx) {
                _this._addTimeout();
                return null;
            }
            _this.getTransactionsInHeight(tx, 310)
                .then(function (list) {
                var _a;
                var hash = Watch._groupByHeight(list);
                var heightList = utils_1.keys(hash)
                    .map(Number)
                    .sort(function (a, b) { return b - a; });
                var _b = __read(heightList, 2), last = _b[0], prev = _b[1];
                if (!_this._lastBlock.height) {
                    _this._lastBlock = {
                        height: last,
                        lastId: hash[prev] && hash[prev].length ? hash[prev][0].id : '',
                        transactions: hash[last]
                    };
                    _this._emitter.trigger('change-state', list);
                }
                else {
                    var wasDispatchHash = utils_1.indexBy(utils_1.prop('id'), _this._lastBlock.transactions);
                    var toDispatch = Watch._getTransactionsToDispatch(__spread(hash[last], (hash[prev] || [])), wasDispatchHash, _this._lastBlock.lastId);
                    if (_this._lastBlock.height !== last) {
                        _this._lastBlock = {
                            height: last,
                            lastId: hash[prev] && hash[prev].length ? hash[prev][0].id : '',
                            transactions: hash[last]
                        };
                    }
                    else {
                        (_a = _this._lastBlock.transactions).push.apply(_a, __spread(toDispatch));
                    }
                    if (toDispatch.length) {
                        _this._emitter.trigger('change-state', toDispatch);
                    }
                }
                _this._addTimeout();
            }, onError);
        })["catch"](onError);
    };
    Watch.prototype.getTransactionsInHeight = function (from, limit) {
        var _this = this;
        var height = from.height;
        var loop = function (downloaded) {
            if (downloaded.length >= limit) {
                return Promise.resolve(downloaded);
            }
            return transactions_1.fetchTransactions(_this._base, _this.address, downloaded.length + 100).then(function (list) {
                if (downloaded.length === list.length) {
                    return downloaded;
                }
                var hash = Watch._groupByHeight(list);
                var heightList = utils_1.keys(hash)
                    .map(Number)
                    .sort(function (a, b) { return b - a; });
                var _a = __read(heightList, 2), last = _a[0], prev = _a[1];
                if (last === height) {
                    return prev ? __spread(hash[last], [hash[prev][0]]) : loop(list);
                }
                else {
                    return loop(list);
                }
            });
        };
        return loop([from]);
    };
    Watch.prototype._addTimeout = function () {
        var _this = this;
        this._timer = setTimeout(function () {
            _this._run();
        }, this._interval);
    };
    Watch._groupByHeight = function (list) {
        return list.reduce(function (hash, tx) {
            if (!hash[tx.height]) {
                hash[tx.height] = [tx];
            }
            else {
                hash[tx.height].push(tx);
            }
            return hash;
        }, Object.create(null));
    };
    Watch._getTransactionsToDispatch = function (list, dispatched, lastId) {
        var result = [];
        for (var i = 0; i < list.length; i++) {
            var tx = list[i];
            if (tx.id === lastId) {
                break;
            }
            if (!dispatched[tx.id]) {
                result.push(tx);
            }
        }
        return result;
    };
    return Watch;
}());
exports.Watch = Watch;
function default_1(base, address, interval) {
    return transactions_1.fetchTransactions(base, address, 1)
        .then(function (_a) {
        var _b = __read(_a, 1), tx = _b[0];
        return new Watch(base, address, tx, interval);
    });
}
exports["default"] = default_1;


/***/ }),

/***/ "./src/tools/adresses/evestxAddress2eth.ts":
/*!************************************************!*\
  !*** ./src/tools/adresses/evestxAddress2eth.ts ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ts_lib_crypto_1 = __webpack_require__(/*! @evestx/ts-lib-crypto */ "./node_modules/@evestx/ts-lib-crypto/index.js");
function evestxAddress2eth(evestxAddress) {
    var rawBytes = ts_lib_crypto_1.base58Decode(evestxAddress);
    var bytes = rawBytes.slice(2, rawBytes.byteLength - 4);
    return "0x" + ts_lib_crypto_1.base16Encode(bytes);
}
exports["default"] = evestxAddress2eth;


/***/ }),

/***/ "./src/tools/assets/evestxAsset2eth.ts":
/*!********************************************!*\
  !*** ./src/tools/assets/evestxAsset2eth.ts ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ts_lib_crypto_1 = __webpack_require__(/*! @evestx/ts-lib-crypto */ "./node_modules/@evestx/ts-lib-crypto/index.js");
function evestxAsset2Eth(evestxAsset) {
    var rawBytes = ts_lib_crypto_1.base58Decode(evestxAsset);
    var bytes = rawBytes.slice(0, 20);
    return "0x" + ts_lib_crypto_1.base16Encode(bytes);
}
exports["default"] = evestxAsset2Eth;


/***/ }),

/***/ "./src/tools/blocks/getNetworkByte.ts":
/*!********************************************!*\
  !*** ./src/tools/blocks/getNetworkByte.ts ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var blocks_1 = __webpack_require__(/*! ../../api-node/blocks */ "./src/api-node/blocks/index.ts");
function default_1(base) {
    return blocks_1.fetchHeadersLast(base).then(function (header) { return base58Decode(header.generator)[1]; });
}
exports["default"] = default_1;
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
var ALPHABET_MAP = {};
for (var i = 0; i < ALPHABET.length; i++) {
    ALPHABET_MAP[ALPHABET.charAt(i)] = i;
}
function base58Decode(string) {
    var bytes, c, carry, j, i;
    if (string.length === 0) {
        return new Uint8Array(0);
    }
    i = void 0;
    j = void 0;
    bytes = [0];
    i = 0;
    while (i < string.length) {
        c = string[i];
        if (!(c in ALPHABET_MAP)) {
            throw 'Base58.decode received unacceptable input. Character \'' + c + '\' is not in the Base58 alphabet.';
        }
        j = 0;
        while (j < bytes.length) {
            bytes[j] *= 58;
            j++;
        }
        bytes[0] += ALPHABET_MAP[c];
        carry = 0;
        j = 0;
        while (j < bytes.length) {
            bytes[j] += carry;
            carry = bytes[j] >> 8;
            bytes[j] &= 0xff;
            ++j;
        }
        while (carry) {
            bytes.push(carry & 0xff);
            carry >>= 8;
        }
        i++;
    }
    i = 0;
    while (string[i] === '1' && i < string.length - 1) {
        bytes.push(0);
        i++;
    }
    return new Uint8Array(bytes.reverse());
}


/***/ }),

/***/ "./src/tools/blocks/getNetworkCode.ts":
/*!********************************************!*\
  !*** ./src/tools/blocks/getNetworkCode.ts ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var getNetworkByte_1 = __importDefault(__webpack_require__(/*! ./getNetworkByte */ "./src/tools/blocks/getNetworkByte.ts"));
function default_1(base) {
    return getNetworkByte_1["default"](base).then(function (byte) { return String.fromCharCode(byte); });
}
exports["default"] = default_1;


/***/ }),

/***/ "./src/tools/parse.ts":
/*!****************************!*\
  !*** ./src/tools/parse.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var reg = new RegExp('((?!\\\\)"\\w+"):\\s*(-?[\\d|\\.]{14,})', 'g');
function default_1(json) {
    return JSON.parse(json.replace(reg, "$1:\"$2\""));
}
exports["default"] = default_1;


/***/ }),

/***/ "./src/tools/query.ts":
/*!****************************!*\
  !*** ./src/tools/query.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/tools/utils.ts");
function default_1(params, evolver) {
    if (evolver === void 0) { evolver = Object.create(null); }
    var query = Object.keys(params)
        .map(function (key) { return [key, params[key]]; })
        .map(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        return [key, Object.prototype.hasOwnProperty.call(evolver, key) ? evolver[key](value) : value];
    })
        .filter(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        return value != null;
    })
        .map(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        return utils_1.toArray(value).map(function (v) { return key + "=" + v; }).join('&');
    })
        .join('&');
    return query.length ? "?" + query : '';
}
exports["default"] = default_1;
;


/***/ }),

/***/ "./src/tools/request.ts":
/*!******************************!*\
  !*** ./src/tools/request.ts ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.parseResponse = void 0;
var resolve_1 = __importDefault(__webpack_require__(/*! ./resolve */ "./src/tools/resolve.ts"));
var parse_1 = __importDefault(__webpack_require__(/*! ./parse */ "./src/tools/parse.ts"));
var request = typeof fetch === 'function' ? fetch : __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
function default_1(params) {
    return request(resolve_1["default"](params.url, params.base), updateHeaders(params.options))
        .then(parseResponse);
}
exports["default"] = default_1;
function parseResponse(r) {
    return r.text().then(function (message) { return r.ok ? parse_1["default"](message) : Promise.reject(tryParse(message)); });
}
exports.parseResponse = parseResponse;
function tryParse(message) {
    try {
        return JSON.parse(message);
    }
    catch (e) {
        return message;
    }
}
function updateHeaders(options) {
    if (options === void 0) { options = Object.create(null); }
    return __assign({ credentials: 'include' }, options);
}


/***/ }),

/***/ "./src/tools/resolve.ts":
/*!******************************!*\
  !*** ./src/tools/resolve.ts ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function default_1(path, base) {
    return new URL(path, base).toString();
}
exports["default"] = default_1;


/***/ }),

/***/ "./src/tools/stringify.ts":
/*!********************************!*\
  !*** ./src/tools/stringify.ts ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var FIELDS = ['amount', 'matcherFee', 'price', 'minSponsoredAssetFee', 'fee', 'quantity', 'sellMatcherFee', 'buyMatcherFee'];
function default_1(data) {
    return JSON.stringify(data, function (key, value) {
        if (FIELDS.includes(key) && value) {
            return "!" + value + "!";
        }
        else if (key === 'value' && this['type'] === 'integer') {
            return "!" + value + "!";
        }
        else if (key === 'minSponsoredAssetFee' && value == null) {
            return null;
        }
        else {
            return value;
        }
    }, 0).replace(/"\!(-?\d+)\!"/g, '$1');
}
exports["default"] = default_1;


/***/ }),

/***/ "./src/tools/transactions/broadcast.ts":
/*!*********************************************!*\
  !*** ./src/tools/transactions/broadcast.ts ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var transactions_1 = __webpack_require__(/*! ../../api-node/transactions */ "./src/api-node/transactions/index.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/tools/utils.ts");
var wait_1 = __importDefault(__webpack_require__(/*! ./wait */ "./src/tools/transactions/wait.ts"));
var DEFAULT_BROADCAST_OPTIONS = {
    chain: false,
    confirmations: -1,
    maxWaitTime: 0,
    requestInterval: 0
};
function default_1(base, list, options) {
    var opt = __assign(__assign({}, DEFAULT_BROADCAST_OPTIONS), (options || {}));
    var isOnce = !Array.isArray(list);
    var confirmations = opt.confirmations > 0 ? 1 : 0;
    return (opt.chain
        ? chainBroadcast(base, utils_1.toArray(list), __assign(__assign({}, opt), { confirmations: confirmations }))
        : simpleBroadcast(base, utils_1.toArray(list)))
        .then(function (list) { return opt.confirmations <= 0 ? list : wait_1["default"](base, list, opt); })
        .then(function (list) { return isOnce ? utils_1.head(list) : list; });
}
exports["default"] = default_1;
function simpleBroadcast(base, list) {
    return Promise.all(list.map(function (tx) { return transactions_1.broadcast(base, tx); }));
}
function chainBroadcast(base, list, options) {
    return new Promise(function (resolve, reject) {
        var toBroadcast = list.slice().reverse();
        var result = [];
        var loop = function () {
            if (!toBroadcast.length) {
                resolve(result);
                return null;
            }
            var tx = toBroadcast.pop();
            transactions_1.broadcast(base, tx)
                .then(function (tx) { return wait_1["default"](base, tx, options); })
                .then(function (tx) {
                result.push(tx);
                loop();
            }, reject);
        };
        loop();
    });
}


/***/ }),

/***/ "./src/tools/transactions/ethTxId2evestx.ts":
/*!*************************************************!*\
  !*** ./src/tools/transactions/ethTxId2evestx.ts ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ts_lib_crypto_1 = __webpack_require__(/*! @evestx/ts-lib-crypto */ "./node_modules/@evestx/ts-lib-crypto/index.js");
function ethTxId2evestx(ethTxId) {
    var id = ethTxId;
    if (ethTxId.startsWith('0x'))
        id = ethTxId.slice(2);
    return ts_lib_crypto_1.base58Encode(ts_lib_crypto_1.base16Decode(id));
}
exports["default"] = ethTxId2evestx;


/***/ }),

/***/ "./src/tools/transactions/wait.ts":
/*!****************************************!*\
  !*** ./src/tools/transactions/wait.ts ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var utils_1 = __webpack_require__(/*! ../utils */ "./src/tools/utils.ts");
var transactions_1 = __webpack_require__(/*! ../../api-node/transactions */ "./src/api-node/transactions/index.ts");
var constants_1 = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
function default_1(base, tx, options) {
    var isOnce = !Array.isArray(tx);
    var start = Date.now();
    var confirmed = [];
    var confirmations = options && options.confirmations || 0;
    var maxWaitTime = options && options.maxWaitTime || 0;
    var requestInterval = options && options.requestInterval || 250;
    var waitTx = function (list) {
        return transactions_1.fetchStatus(base, list.map(utils_1.prop('id')))
            .then(function (status) {
            var hash = utils_1.indexBy(utils_1.prop('id'), status.statuses);
            var hasError = list.some(function (tx) { return hash[tx.id].status === constants_1.TRANSACTION_STATUSES.NOT_FOUND; });
            if (hasError) {
                throw new Error('One transaction is not in blockchain!');
            }
            var toRequest = list.filter(function (tx) {
                if (hash[tx.id].confirmations >= confirmations) {
                    confirmed.push(tx);
                    return false;
                }
                else {
                    return true;
                }
            });
            if (!toRequest.length) {
                return void 0;
            }
            if (maxWaitTime && Date.now() - start > maxWaitTime) {
                return Promise.reject('Timeout error!');
            }
            return utils_1.wait(requestInterval).then(function () { return waitTx(toRequest); });
        });
    };
    return waitTx(utils_1.toArray(tx)).then(function () { return isOnce ? utils_1.head(confirmed) : confirmed; });
}
exports["default"] = default_1;


/***/ }),

/***/ "./src/tools/utils.ts":
/*!****************************!*\
  !*** ./src/tools/utils.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
exports.pipe = exports.switchTransactionByType = exports.uniq = exports.indexBy = exports.filter = exports.map = exports.deepAssign = exports.assign = exports.values = exports.entries = exports.keys = exports.prop = exports.wait = exports.head = exports.toArray = exports.isObject = void 0;
function isObject(obj) {
    if (typeof obj === "object" && obj !== null) {
        if (typeof Object.getPrototypeOf === "function") {
            var prototype = Object.getPrototypeOf(obj);
            return prototype === Object.prototype || prototype === null;
        }
        return Object.prototype.toString.call(obj) === "[object Object]";
    }
    return false;
}
exports.isObject = isObject;
function toArray(data) {
    return Array.isArray(data) ? data : [data];
}
exports.toArray = toArray;
function head(data) {
    return data[0];
}
exports.head = head;
function wait(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}
exports.wait = wait;
function prop(key) {
    return function (data) { return data[key]; };
}
exports.prop = prop;
exports.keys = function (obj) {
    return Object.keys(obj);
};
exports.entries = function (obj) {
    return exports.keys(obj).map(function (name) { return [name, obj[name]]; });
};
exports.values = function (obj) {
    return exports.keys(obj).map(function (key) { return obj[key]; });
};
exports.assign = function (target, merge) {
    return exports.entries(merge).reduce(function (acc, _a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        target[key] = value;
        return target;
    }, target);
};
exports.deepAssign = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    return objects.reduce(function (target, merge) {
        exports.keys(merge).forEach(function (key) {
            if (Array.isArray(target[key]) && Array.isArray(merge[key])) {
                target[key] = Array.from(new Set(target[key].concat(merge[key])));
            }
            else if (isObject(target[key]) && isObject(merge[key])) {
                target[key] = exports.deepAssign(target[key], merge[key]);
            }
            else {
                target[key] = merge[key];
            }
        });
        return target;
    }, objects[0] || {});
};
function map(process) {
    return function (list) { return list.map(process); };
}
exports.map = map;
function filter(process) {
    return function (list) { return list.filter(process); };
}
exports.filter = filter;
function indexBy(process, data) {
    return data.reduce(function (acc, item) {
        acc[process(item)] = item;
        return acc;
    }, {});
}
exports.indexBy = indexBy;
exports.uniq = function (list) {
    return exports.keys(list.reduce(function (acc, item) {
        if (item != null)
            acc[item] = item;
        return acc;
    }, Object.create(null)));
};
function switchTransactionByType(choices) {
    return function (tx) { return choices[tx.type] && typeof choices[tx.type] === 'function' ? choices[tx.type](tx) : undefined; };
}
exports.switchTransactionByType = switchTransactionByType;
exports.pipe = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (data) { return args.reduce(function (acc, item) { return item(acc); }, data); };
};


/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
});
