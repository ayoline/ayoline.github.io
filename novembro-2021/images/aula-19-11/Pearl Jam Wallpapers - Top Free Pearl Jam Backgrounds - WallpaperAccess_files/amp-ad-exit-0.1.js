(self.AMP=self.AMP||[]).push({m:0,v:"2111011823000",n:"amp-ad-exit",ev:"0.1",l:true,f:function(AMP,_){"use strict";var h;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ca(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}ca(this);"function"===typeof Symbol&&Symbol("x");var q;if("function"==typeof Object.setPrototypeOf)q=Object.setPrototypeOf;else{var t;a:{var da={a:!0},u={};try{u.__proto__=da;t=u.a;break a}catch(a){}t=!1}q=t?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var v=q;function w(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(v)v(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.X=b.prototype}var ea=Object.prototype.toString;var x;function fa(a,b){function c(k){try{return e(k)}catch(l){var g,m;null==(m=(g=self).__AMP_REPORT_ERROR)||m.call(g,l);throw l}}var d=a,e=b,f=ha();d.addEventListener("message",c,f?void 0:!1);return function(){var k;null==(k=d)||k.removeEventListener("message",c,f?void 0:!1);c=d=e=null}}function ha(){if(void 0!==x)return x;x=!1;try{var a={get capture(){x=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return x}function ia(a){for(var b=null,c="",d=p(arguments),e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var k=Error(e.message);for(b in e)k[b]=e[b];k.stack=f;b=k}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function ja(a){var b=ia.apply(null,arguments);setTimeout((function(){var c,d;null==(d=(c=self).__AMP_REPORT_ERROR)||d.call(c,b);throw b}))}function ka(a,b){try{return JSON.parse(a)}catch(c){return null==b||b(c),null}}function la(a,b){return fa(a,b)}function ma(a){if(!na(a))return null;var b=a.indexOf("{");return ka(a.substr(b),(function(c){ja(Error("MESSAGING: Failed to parse message: "+a+"\n"+c.message))}))}function na(a){return"string"==typeof a&&a.startsWith("amp-")&&-1!=a.indexOf("{")}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function oa(a){var b;return"SCRIPT"==a.tagName&&"APPLICATION/JSON"==(null==(b=a.getAttribute("type"))?void 0:b.toUpperCase())}var z=self.AMP_CONFIG||{},pa=("string"==typeof z.cdnProxyRegex?new RegExp(z.cdnProxyRegex):z.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function A(a){if(self.document&&self.document.head&&(!self.location||!pa.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}z.cdnUrl||A("runtime-host");z.geoApiUrl||A("amp-geo-api");var qa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function B(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}}function C(a){a=(a||self).location;a=a.originalHash||a.hash;var b=Object.create(null);if(a)for(var c;c=qa.exec(a);){var d=B(c[1],c[1]);c=c[2]?B(c[2].replace(/\+/g," "),c[2]):"";b[d]=c}return b}var D="";function ra(){var a=self;if(a.__AMP_MODE)a=a.__AMP_MODE;else{var b=C(a)||C(a);b=["1","actions","amp","amp4ads","amp4email"].includes(b.development)||!!a.AMP_DEV_MODE;if(!D){var c;D=(null==(c=a.AMP_CONFIG)?void 0:c.v)||"012111011823000"}a=a.__AMP_MODE={localDev:!1,development:b,esm:!1,test:!1,rtvVersion:D}}return a}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var E=self.__AMP_LOG;function F(){throw Error("failed to call initLogConstructor")}function G(){E.user||(E.user=F());return E.user}function H(){return E.dev||(E.dev=F())}function I(a,b,c,d){G().assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function sa(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}function ta(a){a=J(a);a=K(a);return L(a,"url-replace")?M(a,"url-replace"):null}function N(a){return a.__AMP_TOP||(a.__AMP_TOP=a)}function J(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=N(b);return M(b,"ampdoc").getAmpDoc(a)}return a}function K(a){a=J(a);return a.isSingleDoc()?a.win:a}function M(a,b){L(a,b);a=P(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function ua(a){var b;(b=P(a)["host-exit"])?b.promise?b=b.promise:(M(a,"host-exit"),b=b.promise=Promise.resolve(b.obj)):b=null;var c=b;if(c)return c;a=P(a);a["host-exit"]=va();return a["host-exit"].promise}function P(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function L(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)}function va(){var a=new sa,b=a.promise,c=a.reject;a=a.resolve;b.catch((function(){}));return{obj:null,promise:b,resolve:a,reject:c,context:null,ctor:null}}function Q(a,b){this.name=a;this.type=b}Q.prototype.filter=function(){};Q.prototype.onLayoutMeasure=function(){};var R={bg:"https://tpc.googlesyndication.com/b4a/b4a-runner.html",moat:"https://z.moatads.com/ampanalytics093284/iframe.html"};Object.assign({},R,{bg:"https://tpc.googlesyndication.com/b4a/experimental/b4a-runner.html"});function wa(a){I("object"==typeof a);if(a.filters){var d,b=a.filters,c=["clickDelay","clickLocation","inactiveElement"];for(d in b)I("object"==typeof b[d],"Filter specification '%s' is malformed",d),I(-1!=c.indexOf(b[d].type),"Supported filters: "+c.join(", "))}else a.filters={};if(a.transport){b=a.transport;for(var e in b)I("beacon"==e||"image"==e,"Unknown transport option: '"+e+"'"),I("boolean"==typeof b[e])}else a.transport={};e=a.targets;I("object"==typeof e,"'targets' must be an object");for(var f in e)xa(f,e[f],a);return a}function xa(a,b,c){I("string"==typeof b.finalUrl,"finalUrl of target '%s' must be a string",a);b.filters&&b.filters.forEach((function(e){I(c.filters[e],"filter '%s' not defined",e)}));if(b.vars){a=/^_[a-zA-Z0-9_-]+$/;for(var d in b.vars)I(a.test(d),"'%s' must match the pattern '%s'",d,a)}}function S(a){return G().assertString(R[a],"Unknown or invalid vendor "+a+", note that vendor must use transport: iframe")}function T(a,b,c){Q.call(this,a,b.type);I("clickDelay"==b.type&&"number"==typeof b.delay&&0<b.delay,"Invalid ClickDelay spec");this.spec=b;this.intervalStart=Date.now();b.startTimingEvent&&(c.performance&&c.performance.timing?void 0==c.performance.timing[b.startTimingEvent]?H().warn("amp-ad-exit","Invalid performance timing event type "+b.startTimingEvent+", falling back to now"):this.intervalStart=c.performance.timing[b.startTimingEvent]:H().warn("amp-ad-exit","Browser does not support performance timing, falling back to now"))}w(T,Q);T.prototype.filter=function(){return Date.now()-this.intervalStart>=this.spec.delay};function ya(a){return{type:"clickDelay",delay:1e3,startTimingEvent:a}}function U(a,b,c){Q.call(this,a,b.type);I("clickLocation"==b.type&&("undefined"===typeof b.left||"number"===typeof b.left)&&("undefined"===typeof b.right||"number"===typeof b.right)&&("undefined"===typeof b.top||"number"===typeof b.top)&&("undefined"===typeof b.bottom||"number"===typeof b.bottom)&&("undefined"===typeof b.relativeTo||"string"===typeof b.relativeTo),"Invaid ClickLocation spec");this.T=b.left||0;this.U=b.right||0;this.W=b.top||0;this.R=b.bottom||0;this.K=b.relativeTo;this.M=c;this.h={top:0,right:0,bottom:0,left:0}}w(U,Q);U.prototype.filter=function(a){return a.clientX>=this.h.left&&a.clientX<=this.h.right&&a.clientY>=this.h.top&&a.clientY<=this.h.bottom?!0:!1};U.prototype.onLayoutMeasure=function(){var a=this;this.M.getVsync().measure((function(){var b=a.M.win;if(a.K){var c=b.document.querySelector(a.K);I(c,"relativeTo element "+a.K+" not found.");var d=c.getBoundingClientRect();a.h.left=d.left;a.h.top=d.top;a.h.bottom=d.bottom;a.h.right=d.right}else a.h.left=0,a.h.top=0,a.h.bottom=b.innerHeight,a.h.right=b.innerWidth;a.h.left+=a.T;a.h.top+=a.W;a.h.right-=a.U;a.h.bottom-=a.R}))};function V(a,b){Q.call(this,a,b.type);I("inactiveElement"==b.type&&"string"==typeof b.selector,"Invalid InactiveElementspec");this.V=b.selector}w(V,Q);V.prototype.filter=function(a){a=a.target;var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return!(b&&b.call(a,this.V))};function W(a,b,c){switch(b.type){case"clickDelay":return new T(a,b,c.win);case"clickLocation":return new U(a,b,c);case"inactiveElement":return new V(a,b)}}function za(a,b){try{a:{var c=(a.ownerDocument||a).defaultView,d=b||N(c);if(c&&c!=d&&N(c)==d)try{var e=c.frameElement;break a}catch(k){}e=null}var f=e.parentElement;if("AMP-AD"==f.nodeName)return String(f.getResourceId())}catch(k){}return null}function Aa(a,b,c,d){try{var e=a.open(b,c,d)}catch(k){H().error("DOM","Failed to open url on target: ",c,k)}if(!(c=e||"_top"==c)){c=d||"";var f;"number"!==typeof f&&(f=0);c=f+8>c.length?!1:-1!==c.indexOf("noopener",f)}c||a.open(b,"_top")}function X(){this.S=100;this.I=this.L=0;this.B=Object.create(null)}X.prototype.has=function(a){return!!this.B[a]};X.prototype.get=function(a){var b=this.B[a];if(b)return b.access=++this.I,b.payload};X.prototype.put=function(a,b){this.has(a)||this.L++;this.B[a]={payload:b,access:this.I};if(!(this.L<=this.S)){a=this.B;var d,c=this.I+1;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.L--)}};new Set(["c","v","a","ad"]);var Y,Ba;function Ca(a){Y||(Y=self.document.createElement("a"),Ba=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new X));var b=Y,c=Ba;if(c&&c.has(a))a=c.get(a);else{b.href=a;b.protocol||(b.href=b.href);var d={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:"0"==b.port?"":b.port,pathname:b.pathname,search:b.search,hash:b.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=b.origin&&"null"!=b.origin?b.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;c&&c.put(a,d);a=d}return a}function Z(a){a=AMP.BaseElement.call(this,a)||this;a.D={};a.O={};a.C=[];a.F={beacon:!0,image:!0};a.H={};a.registerAction("exit",a.exit.bind(a));a.registerAction("setVariable",a.setVariable.bind(a),1);a.P={};a.G=null;a.A=null;a.J={};a.N=a.detectAttributionReportingSupport();return a}w(Z,AMP.BaseElement);h=Z.prototype;h.exit=function(a){var b=this,c=a.args,d=a.event;I("variable"in c!="target"in c,"One and only one of 'target' and 'variable' must be specified");var e;"variable"in c?((e=this.O[c.variable])||(e=c["default"]),I(e,"Variable target not found, variable:'"+c.variable+"', default:'"+c["default"]+"'"),delete c["default"]):e=c.target;var f=this.D[e];I(f,"Exit target not found: '"+e+"'");I(d,"Unexpected null event");d.preventDefault();if(Da(this.C,d)&&Da(f.filters,d)){var k=Ea(this,c,d,f);f.trackingUrls&&f.trackingUrls.map(k).forEach((function(m){G().fine("amp-ad-exit","pinging "+m);b.F.beacon&&b.win.navigator.sendBeacon&&b.win.navigator.sendBeacon(m,"")||!b.F.image||(b.win.document.createElement("img").src=m)}));var g=k(f.finalUrl);J(this.getAmpDoc()).getHeadNode().querySelector("script[host-service]")?ua(K(this.getAmpDoc())).then((function(m){return m.openUrl(g)})).catch((function(m){H().fine("amp-ad-exit","ExitServiceError - fallback="+m.fallback);m.fallback&&Aa(b.win,g,"_blank")})):Aa(this.win,g,f.behaviors&&f.behaviors.clickTarget&&"_top"==f.behaviors.clickTarget?"_top":"_blank",f.windowFeatures)}};h.setVariable=function(a){a=a.args;I(this.D[a.target],"Exit target not found: '"+a.target+"'");this.O[a.name]=a.target};function Ea(a,b,c,d){var e={ATTRIBUTION_REPORTING_STATUS:function(){var l;if((null==d?0:null==(l=d.behaviors)?0:l.browserAdConversion)&&a.N)l=3;else{var n;l=(null==d?0:null==(n=d.behaviors)?0:n.browserAdConversion)?2:1}return l},CLICK_X:function(){return c.clientX},CLICK_Y:function(){return c.clientY}},f=ta(a.element),k={ATTRIBUTION_REPORTING_STATUS:!0,CLICK_X:!0,CLICK_Y:!0,RANDOM:!0};if(d.vars){var m,g={};for(m in d.vars)g.j=m,"_"==g.j[0]&&(g.o=d.vars[g.j],g.o&&(e[g.j]=function(l){return function(){if(l.o.iframeTransportSignal){var n=f.expandStringSync(l.o.iframeTransportSignal,{IFRAME_TRANSPORT_SIGNAL:function(y,r){if(!y||!r)return"";var O=a.P[y];if(O&&r in O)return O[r]}});if(l.o.iframeTransportSignal=="IFRAME_TRANSPORT_SIGNAL"+n)H().error("amp-ad-exit","Invalid IFRAME_TRANSPORT_SIGNAL format:"+n+" (perhaps there is a space after a comma?)");else if(""!=n)return n}return l.j in b?b[l.j]:l.o.defaultValue}}(g),k[g.j]=!0)),g={o:g.o,j:g.j}}return function(l){return f.expandUrlSync(l,e,k)}}function Da(a,b){return a.every((function(c){var d=c.filter(b);G().info("amp-ad-exit","Filter '"+c.name+"': "+(d?"pass":"fail"));return d}))}h.buildCallback=function(){var a=this;this.element.setAttribute("aria-hidden","true");this.C.push(W("minDelay",ya(),this));this.C.push(W("carouselBtns",{type:"inactiveElement",selector:".amp-carousel-button"},this));var b=this.element.children;I(1==b.length,"The tag should contain exactly one <script> child.");b=b[0];I(oa(b),'The amp-ad-exit config should be inside a <script> tag with type="application/json"');try{var c=wa(JSON.parse(b.textContent));if("[object Object]"===ea.call(c.options)&&"string"===typeof c.options.startTimingEvent){var d=c.options.startTimingEvent;this.C.splice(0,1,W("minDelay",ya(c.options.startTimingEvent),this))}for(var e in c.filters){var f=c.filters[e];"clickDelay"==f.type&&(f.startTimingEvent=f.startTimingEvent||d);this.H[e]=W(e,f,this)}for(var k in c.targets){var g=c.targets[k];this.D[k]={finalUrl:g.finalUrl,trackingUrls:g.trackingUrls||[],vars:g.vars||{},filters:(g.filters||[]).map((function(r){return a.H[r]})).filter(Boolean),behaviors:g.behaviors||{}};this.N&&(f=e=void 0,this.D[k].windowFeatures=Fa(null==(e=g)?void 0:null==(f=e.behaviors)?void 0:f.browserAdConversion));for(var m in g.vars)if(g.vars[m].iframeTransportSignal){var l=g.vars[m].iframeTransportSignal.match(/IFRAME_TRANSPORT_SIGNAL\(([^,]+)/);if(l&&!(2>l.length)){var n=l[1],y=Ca(S(n)).origin;this.J[y]=this.J[y]||n}}}this.F.beacon=!1!==c.transport.beacon;this.F.image=!1!==c.transport.image}catch(r){throw this.user().error("amp-ad-exit","Invalid JSON config",r),r}Ga(this)};h.detectAttributionReportingSupport=function(){var a;return null==(a=this.win.document.featurePolicy)?void 0:a.allowsFeature("attribution-reporting")};function Fa(a){if(a&&Object.keys(a)){for(var b=["noopener"],c=p(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.push(d.toLowerCase()+"="+a[d]);return b.join(",")}}h.resumeCallback=function(){Ga(this)};h.unlayoutCallback=function(){this.G&&(this.G(),this.G=null);return AMP.BaseElement.prototype.unlayoutCallback.call(this)};function Ga(a){"inabox"!=ra().runtime&&(a.A=a.A||za(a.element,N(a.win)),a.A?a.G=la(a.getAmpDoc().win,(function(b){if(a.J[b.origin]){var c=ma(b.data);if(c&&"iframe-transport-response"==c.type){b=b.origin;I(c.message,"Received empty response from 3p analytics frame");I(c.creativeId,"Received malformed message from 3p analytics frame: creativeId missing");I(c.vendor,"Received malformed message from 3p analytics frame: vendor missing");var d=Ca(S(c.vendor));I(d&&d.origin==b,"Invalid origin for vendor "+c.vendor+": "+b);c.creativeId==a.A&&(a.P[c.vendor]=c.message)}}})):G().warn("amp-ad-exit","No friendly parent amp-ad element was found for amp-ad-exit; not in inabox case."))}h.isLayoutSupported=function(){return!0};h.onLayoutMeasure=function(){for(var a in this.H)this.H[a].onLayoutMeasure()};AMP.registerElement("amp-ad-exit",Z)}});//# sourceMappingURL=amp-ad-exit-0.1.js.map