window.googletag&&typeof googletag._gpt_js_load_2_=='function'&&googletag._gpt_js_load_2_(function(_){var XI=function(a){if(a instanceof _.dm)if(a instanceof _.em)a=a.j;else throw Error("");else a=_.qd(a);return a},YI=function(a){var b=a.ownerDocument,c=b.createElementNS("http://www.w3.org/2000/svg","line");c.setAttribute("x1","22");c.setAttribute("y1","18");c.setAttribute("x2","28");c.setAttribute("y2","12");a.appendChild(c);b=b.createElementNS("http://www.w3.org/2000/svg","line");b.setAttribute("x1","28");b.setAttribute("y1","12");b.setAttribute("x2","34");b.setAttribute("y2","18");a.appendChild(b)},ZI=function(a){var b=a.ownerDocument,c=b.createElementNS("http://www.w3.org/2000/svg","line");c.setAttribute("x1","22");c.setAttribute("y1","12");c.setAttribute("x2","28");c.setAttribute("y2","18");a.appendChild(c);b=b.createElementNS("http://www.w3.org/2000/svg","line");b.setAttribute("x1","28");b.setAttribute("y1","18");b.setAttribute("x2","34");b.setAttribute("y2","12");a.appendChild(b)},$I=function(a,b){a.j.maxZIndexListeners.push(b);b(_.Vy(a))},aJ=function(a,b){_.vf(a,b)},bJ=function(a,b){return _.nf(a,b)},cJ={capture:!0},dJ=function(a,b){return new _.Zf(a.x-b.x,a.y-b.y)},eJ=function(a){var b=a.document,c=0;if(b){c=b.body;var d=b.documentElement;if(!d||!c)return 0;a=_.rp(a).height;if(_.qp(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}}return c},fJ=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a},gJ=function(a,b){a&&(a=a.parentNode);for(var c=0;a&&20>=c;){if(b(a))return a;a=a.parentNode;c++}return null},hJ=function(a,b){for(a=[a];a.length;){var c=a.shift();!1!==b(c)&&(c=_.Jd(c.children||c.childNodes||[],function(d){return 1===d.nodeType}),c.length&&a.unshift.apply(a,_.nb(c)))}},iJ=function(a){var b={};if(a){var c=/\s*:\s*/;_.Cl((a||"").split(/\s*;\s*/),function(d){if(d){var e=d.split(c);d=e[0];e=e[1];d&&e&&(b[d.toLowerCase()]=e)}})}return b},jJ=function(a,b){if("length"in a.style){a=a.style;for(var c=a.length,d=0;d<c;d++){var e=a[d];b.call(void 0,a[e],e,a)}}else a=iJ(a.style.cssText),_.We(a,b,void 0)},kJ=function(a,b){b=void 0===b?function(){return!0}:b;var c=/!\s*important/i;jJ(a,function(d,e){!c.test(d)&&b(e,d)?a.style.setProperty(e,d,"important"):c.test(d)&&!b(e,d)&&a.style.setProperty(e,d,"")})},lJ=/\.proxy\.googleprod\.com(:\d+)?$/,mJ=/.*domain\.test$/,nJ=/\.prod\.google\.com(:\d+)?$/,oJ=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1},pJ=function(a){if(1==a.nodeType)return _.Eq(a);a=a.changedTouches?a.changedTouches[0]:a;return new _.Zf(a.clientX,a.clientY)},qJ=function(a,b){if(b instanceof _.Ih){var c=b.height;b=b.width}else throw Error("missing height argument");a.style.width=_.Gq(b,!0);a.style.height=_.Gq(c,!0)},rJ=function(a,b){var c=a.currentStyle?a.currentStyle[b]:null;if(c)if(/^\d+px?$/.test(c))a=parseInt(c,10);else{b=a.style.left;var d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=b;a.runtimeStyle.left=d;a=+c}else a=0;return a},sJ=function(a,b){if(_.rm){var c=rJ(a,b+"Left"),d=rJ(a,b+"Right"),e=rJ(a,b+"Top");a=rJ(a,b+"Bottom");return new _.lq(e,d,a,c)}c=_.zq(a,b+"Left");d=_.zq(a,b+"Right");e=_.zq(a,b+"Top");a=_.zq(a,b+"Bottom");return new _.lq(parseFloat(e),parseFloat(d),parseFloat(a),parseFloat(c))},uJ=function(a,b,c,d,e){var f=[];_.We(a,function(g,h){(g=tJ(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)},tJ=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(tJ(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(uJ(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))},vJ=function(){this.F="&";this.m={};this.A=0;this.j=[]},xJ=function(a,b){var c="https://pagead2.googlesyndication.com"+b,d=wJ(a)-b.length;if(0>d)return"";a.j.sort(function(m,n){return m-n});b=null;for(var e="",f=0;f<a.j.length;f++)for(var g=a.j[f],h=a.m[g],k=0;k<h.length;k++){if(!d){b=null==b?g:b;break}var l=uJ(h[k],a.F,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;c+=l;e=a.F;break}b=null==b?g:b}}a="";null!=b&&(a=e+"trn="+b);return c+a},wJ=function(a){var b=1,c;for(c in a.m)b=c.length>b?c.length:b;return 3997-b-a.F.length-1},yJ=function(){this.m=_.Te(23);this.F=Math.random()};yJ.prototype.j=function(a,b,c){if(this.F<(c||this.m))try{if(b instanceof vJ)var d=b;else d=new vJ,_.We(b,function(f,g){var h=d,k=h.A++,l={};l[g]=f;f=[l];h.j.push(k);h.m[k]=f});var e=xJ(d,"/pagead/gen_204?id="+a+"&");e&&_.vq(_.M,e)}catch(f){}};var zJ=function(a,b,c){c=void 0===c?null:c;var d=function(f){try{var g=JSON.parse(f.data)}catch(h){return}!g||"sth"!==g.googMsgType||c&&/[:|%3A]javascript\(/i.test(f.data)&&!c(g,f)||b(g,f)};_.rb(a,"message",d);var e=!1;return function(){var f=!1;e||(e=!0,f=_.Pc(a,"message",d));return f}},AJ=function(a,b,c,d,e){if(!(0>=e)&&(c.googMsgType=b,a.postMessage(JSON.stringify(c),d),a=a.frames))for(var f=0;f<a.length;++f)1<e&&AJ(a[f],b,c,d,--e)},BJ=function(a){return.05>Math.abs(_.$y(a)-1)},CJ=function(a){var b={bottom:"auto",clear:"none",display:"inline","float":"none",height:"auto",left:"auto",margin:0,"margin-bottom":0,"margin-left":0,"margin-right":"0","margin-top":0,"max-height":"none","max-width":"none",opacity:1,overflow:"visible",padding:0,"padding-bottom":0,"padding-left":0,"padding-right":0,"padding-top":0,position:"static",right:"auto",top:"auto","vertical-align":"baseline",visibility:"visible",width:"auto","z-index":"auto"};_.Cl(_.r(Object,"keys").call(Object,b),function(c){var d=a.style[_.jp(c)];("undefined"!==typeof d?d:a.style[_.wq(a,c)])||_.xq(a,c,b[c])});kJ(a)},DJ=function(a){var b=812==a.screen.height&&375==a.screen.width||812==a.screen.width&&375==a.screen.height||414==a.screen.width&&896==a.screen.height||896==a.screen.width&&414==a.screen.height;return null!=(a.navigator&&a.navigator.userAgent&&a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/))&&b},EJ={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1,NOSCRIPT:1},FJ={IMG:" ",BR:"\n"},GJ=function(a,b,c,d){if(!(a.nodeName in EJ))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in FJ)d&&"IMG"==a.nodeName&&a.hasAttribute("alt")&&b.push(" "+a.getAttribute("alt")),b.push(FJ[a.nodeName]);else for(a=a.firstChild;a;)GJ(a,b,c,d),a=a.nextSibling},HJ=/ \xAD /g,IJ=/\xAD/g,JJ=/\u200B/g,KJ=/ +/g,LJ=/^\s*/,OJ=function(a){var b=MJ(_.tp(_.mp(a)))||[];return!!gJ(a,function(c){if(!_.ka(c)||1!=c.nodeType)return!1;var d=c.matches||c.webkitMatchesSelector||c.mozMatchesSelector||c.msMatchesSelector||c.oMatchesSelector;return!d||0<=_.ea(b,c)||_.Sd(_.Gp(NJ),function(e){return d.call(c,e)})})},MJ=function(a){try{return _.Jd(_.Hd(a.googletag.pubads().getSlots(),function(b){return a.document.getElementById(b.getSlotElementId())}),function(b){return null!=b})}catch(b){}return null},NJ={ie:"ins.adsbygoogle-ablated-ad-slot",ke:"ins.adsbygoogle",je:"iframe[id^=aswift_],iframe[id^=google_ads_frame]",we:".google-auto-placed",xe:'ins.adsbygoogle[data-anchor-shown="true"]',ye:"iframe[id^=google_ads_iframe]",Ae:"div[id^=div-gpt-ad]",Ce:"ins.adsbygoogle[data-ad-format=autorelaxed]",De:"div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]",ze:"div.googlepublisherpluginad"};var RJ=function(a){var b=this;this.F=a;this.j=!1;this.m=bJ(264,function(c){b.j&&(PJ||(c=Date.now()),b.F(c),PJ?QJ.call(_.M,b.m):_.M.setTimeout(b.m,17))})};RJ.prototype.start=function(){this.j||(this.j=!0,PJ?QJ.call(_.M,this.m):this.m(0))};RJ.prototype.stop=function(){this.j=!1};var QJ=_.M.requestAnimationFrame||_.M.webkitRequestAnimationFrame,PJ=!!QJ&&!/'iPhone'/.test(_.M.navigator.userAgent);var SJ=function(a,b,c){this.A=a;this.G=b;this.ga=c;this.progress=0;this.l=null;this.j=!1;this.F=[];this.D=null;this.m=new RJ((0,_.wl)(this.R,this))};SJ.prototype.R=function(a){if(this.j)this.m.stop();else{null===this.l&&(this.l=a);this.progress=(a-this.l)/this.ga;1<=this.progress&&(this.progress=1);a=this.D?this.D(this.progress):this.progress;this.F=[];for(var b=0;b<this.A.length;b++)this.F.push((this.G[b]-this.A[b])*a+this.A[b]);this.K();1==this.progress&&(this.m.stop(),this.o())}};SJ.prototype.o=function(){};SJ.prototype.K=function(){};SJ.prototype.stop=function(){this.j=!0};var TJ=function(a){return a*a*a},UJ=function(a){a=1-a;return 1-a*a*a};var VJ=function(a,b,c,d,e,f,g,h){SJ.call(this,[b],[c],d,f);this.T=a;this.J=e;this.B=g?g:null;this.D=h||null};_.P(VJ,SJ);VJ.prototype.K=function(){var a={};a[this.J]=this.F[0]+"px";_.xq(this.T,a)};VJ.prototype.o=function(){this.B&&this.B()};var WJ=function(a,b,c,d){_.Ss.call(this);var e=this;this.j=a;this.D=b;this.l=c;this.A=d?cJ:{};_.rb(this.j,this.D,this.l,this.A);_.ik(this,function(){return void e.remove()})};_.P(WJ,_.Ss);WJ.prototype.remove=function(){this.j&&_.Pc(this.j,this.D,this.l,this.A)};var XJ=function(a){this.F=a;this.j=[];this.m=0};XJ.prototype.add=function(a){var b=Date.now();this.j.push({time:b,coords:a});for(a=this.m;a<this.j.length;++a)if(b-this.j[a].time>=this.F)delete this.j[a];else break;this.m=a;a>=this.j.length&&(this.j=[],this.m=0)};var ZJ=function(a,b,c,d){_.Ss.call(this);var e=this;this.l=a;this.target=b;this.V=c||b;this.ka=d||100;this.K=this.B=this.ba=!1;this.o=this.j=this.A=this.D=this.G=this.R=this.J=this.T=null;this.qa=new WJ(this.V,"mousedown",function(f){0==f.button&&YJ(e,f)},!0);_.Ts(this,this.qa);this.ua=new WJ(this.V,"touchstart",function(f){return YJ(e,f)},!0);_.Ts(this,this.ua);this.sa=new WJ(this.V,"click",function(f){e.ba?e.ba=!1:f.stopPropagation()},!0);_.Ts(this,this.sa)};_.P(ZJ,_.Ss);var $J=function(a){a=a.touches&&a.touches[0]||a;return new _.Zf(a.clientX,a.clientY)};ZJ.prototype.ea=function(){if(this.D&&this.A&&this.j){var a=this.D,b=dJ(this.j,this.A);var c=new _.Zf(a.x+b.x,a.y+b.y);a=this.target;c instanceof _.Zf?(b=c.x,c=c.y):(b=c,c=void 0);a.style.left=_.Gq(b,!1);a.style.top=_.Gq(c,!1)}};ZJ.prototype.Z=function(){};ZJ.prototype.O=function(){var a=this.target,b=_.wp(a),c=pJ(a);b=pJ(b);c=new _.Zf(c.x-b.x,c.y-b.y);a=sJ(a,"margin");return dJ(c,new _.Zf(a.left,a.top))};var YJ=function(a,b){a.B&&aK(a);a.B=!0;a.D=a.O();a.A=$J(b);a.j=a.A;a.o=new XJ(a.ka);a.o.add(a.A);a.T=new WJ(a.l,"mousemove",(0,_.wl)(a.fa,a),!0);_.Ts(a,a.T);a.J=new WJ(a.l,"touchmove",(0,_.wl)(a.fa,a),!0);_.Ts(a,a.J);a.R=new WJ(a.l,"mouseup",(0,_.wl)(a.ja,a),!0);_.Ts(a,a.R);a.G=new WJ(a.l,"touchend",(0,_.wl)(a.ja,a),!0);_.Ts(a,a.G)};ZJ.prototype.fa=function(a){if(this.B)if(a.preventDefault(),this.j=$J(a),this.o.add(this.j),this.K)this.ea();else{var b=this.A,c=this.j;a=b.x-c.x;b=b.y-c.y;10<=Math.sqrt(a*a+b*b)&&(this.ea(),this.K=!0)}};ZJ.prototype.ja=function(a){this.K?(a.preventDefault(),this.j=$J(a),this.Z()):this.ba=!0;aK(this)};var aK=function(a){a.B=!1;a.K=!1;a.D=null;a.A=null;a.j=null;a.o=null;a.T&&a.T.remove();a.J&&a.J.remove();a.R&&a.R.remove();a.G&&a.G.remove()};var eK=function(a,b,c,d,e,f,g,h,k,l,m){_.Ss.call(this);var n=this;this.R=a;this.A=b;this.V=c;this.K=d;this.ra=f||function(){};this.aa=g||function(){};this.ba=h;this.ka=k;this.fa=l;this.ja=m;_.ik(this,function(){return bK(n,!0)});this.B=_.Ch("INS",b.document);_.ik(this,function(){return n.B=null});this.T=this.l=this.o=!1;this.J=0;this.j=e;this.O=!1;this.D=this.Z=null;this.ea=b.innerHeight;this.$="true"===this.R.scroll_detached;this.G="true"===this.R.dismissable;this.Ca="true"===this.R.draggable||"top"!=this.j;this.qa=this.R.expId||"";this.sa=this.R.qemId||"";a=parseInt(this.R.z_index_override,10);this.ca=isNaN(a)?null:a;this.ua=new _.Uy(b);!this.G&&_.M.navigator.userAgent.match(/iPhone OS 7/)&&b.setInterval(function(){var q=n.A.innerHeight;if(2>Math.abs(q-460)||2>Math.abs(q-529))q<n.ea&&2>Math.abs(_.az(n.A)-n.J-68)&&(n.O=!0,n.l&&cK(n)),n.ea=q},300);dK(this,this.B)};_.P(eK,_.Ss);var dK=function(a,b){CJ(b);var c={"background-color":"#FAFAFA",display:"block",position:"relative","z-index":1,height:"5px","box-shadow":"top"==a.j?"rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px":"rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"};"top"==a.j&&(c.position="absolute",c.top=a.K.height+"px",c.width="100%");_.fh(b,c);var d=_.Ch("SPAN",a.A.document);d.appendChild(fK(a));var e=function(f){f.target===d&&(f.preventDefault&&f.preventDefault(),f.stopImmediatePropagation&&f.stopImmediatePropagation(),f.stopPropagation&&f.stopPropagation())};_.rb(d,"click",e);_.ik(a,function(){return _.Pc(d,"click",e)});gK(a,d);b.className="ee";b.appendChild(d)},gK=function(a,b){var c={};a=(c.display="block",c.width="80px",c.height="45px",c[a.j]="0",c.left="0%",c.marginLeft="0px",c["pointer-events"]="none",c);c=b.getElementsByTagName("svg")[0];_.fh(b,a);kJ(c)},fK=function(a){switch(a.j){case "top":var b="dropShadowBottom";var c="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";var d="0";var e="up";var f=YI;break;case "bottom":b="dropShadowTop",c="M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z",d="25",e="down",f=ZI}var g=a.A.document,h=g.createElementNS("http://www.w3.org/2000/svg","svg");h.style.setProperty("margin","0 0 0 0px","important");h.style.setProperty("position","absolute","important");h.style.setProperty(a.j,"0","important");h.style.setProperty("left","0%","important");h.style.setProperty("display","block","important");h.style.setProperty("width","80px","important");h.style.setProperty("height","30px","important");h.style.setProperty("transform","none","important");h.style.setProperty("pointer-events","initial","important");a=g.createElementNS("http://www.w3.org/2000/svg","defs");var k=g.createElementNS("http://www.w3.org/2000/svg","filter");k.setAttribute("id",b);k.setAttribute("filterUnits","userSpaceOnUse");k.setAttribute("color-interpolation-filters","sRGB");var l=g.createElementNS("http://www.w3.org/2000/svg","feComponentTransfer");l.setAttribute("in","SourceAlpha");l.setAttribute("result","TransferredAlpha");var m=g.createElementNS("http://www.w3.org/2000/svg","feFuncR");m.setAttribute("type","discrete");m.setAttribute("tableValues","0.5");l.appendChild(m);m=g.createElementNS("http://www.w3.org/2000/svg","feFuncG");m.setAttribute("type","discrete");m.setAttribute("tableValues","0.5");l.appendChild(m);m=g.createElementNS("http://www.w3.org/2000/svg","feFuncB");m.setAttribute("type","discrete");m.setAttribute("tableValues","0.5");l.appendChild(m);k.appendChild(l);l=g.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");l.setAttribute("in","TransferredAlpha");l.setAttribute("stdDeviation","2");k.appendChild(l);l=g.createElementNS("http://www.w3.org/2000/svg","feOffset");l.setAttribute("dx","0");l.setAttribute("dy","0");l.setAttribute("result","offsetblur");k.appendChild(l);l=g.createElementNS("http://www.w3.org/2000/svg","feMerge");l.appendChild(g.createElementNS("http://www.w3.org/2000/svg","feMergeNode"));m=g.createElementNS("http://www.w3.org/2000/svg","feMergeNode");m.setAttribute("in","SourceGraphic");l.appendChild(m);k.appendChild(l);a.appendChild(k);h.appendChild(a);a=g.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d",c);a.setAttribute("stroke","#FAFAFA");a.setAttribute("stroke-width","1");a.setAttribute("fill","#FAFAFA");a.style.setProperty("filter","url(#"+b+")");h.appendChild(a);b=g.createElementNS("http://www.w3.org/2000/svg","rect");b.setAttribute("x","0");b.setAttribute("y",d);b.setAttribute("width","80");b.setAttribute("height","5");b.style.setProperty("fill","#FAFAFA");h.appendChild(b);d=g.createElementNS("http://www.w3.org/2000/svg","g");d.setAttribute("class",e);d.setAttribute("stroke","#616161");d.setAttribute("stroke-width","2px");d.setAttribute("stroke-linecap","square");f(d);h.appendChild(d);return h},hK=function(a,b){for(var c=a.B.getElementsByTagName("svg")[0].getElementsByTagName("g")[0],d;d=c.firstChild;)c.removeChild(d);switch(a.j){case "top":(b?ZI:YI)(c);break;case "bottom":(b?YI:ZI)(c)}},iK=function(a,b,c,d){a.ka.j("flgr",{i:b,dc:a.l?"1":"0",fdc:c?"1":"0",ds:a.G?"1":"0",expId:a.qa,sc:a.$?"1":"0",off:d,vw:_.Af(a.A).clientWidth,req:a.V.src,tp:a.j,h:a.K.height,w:a.K.width,qemId:a.sa},1)},cK=function(a){if(!a.o){var b=parseInt(a.D.style[a.j],10);if(b){a.o=!0;var c=-b/.1;"bottom"==a.j&&DJ(a.A)&&aJ(404,function(){return jK(a,"0px",c,"ease-out")});hK(a,!1);b=new VJ(a.D,b,0,c,a.j,a.ba,function(){a.o=!1;a.l=!1;a.T=!1;mK(a);a.D.setAttribute("data-anchor-status","displayed");a.D.setAttribute("data-anchor-shown",!0);hK(a,!1)},UJ);a.ja();b.j=!1;b.m.start()}else a.l=!1,a.T=!1}},bK=function(a,b){if(!a.o&&a.D){var c=parseInt(a.D.style[a.j],10),d=-a.K.height-(b?30:0),e=(c-d)/.1;"bottom"==a.j&&DJ(a.A)&&aJ(405,function(){return jK(a,"21px",e,"ease-in")});b||hK(a,!0);c===d?(a.l=!b,a.T=b):(a.o=!0,c=new VJ(a.D,c,d,e,a.j,a.ba,function(){a.o=!1;a.l=!b;(a.T=b)||hK(a,!0);b&&a.ra();a.D.setAttribute("data-anchor-status","dismissed")},TJ),a.fa(),c.j=!1,c.m.start())}},pK=function(a,b){if("bottom"!==a.j&&"top"!==a.j)throw Error("unsupported reactive type");var c=function(f){f.preventDefault();a.o||(a.O=!0,a.l?cK(a):bK(a,a.G),iK(a,"c",!a.l,0))},d=a.B;_.rb(d,"click",c);_.ik(a,function(){return _.Pc(d,"click",c)});_.xq(b,{opacity:1});var e=a.A.document;e&&(a.D=b,a.Ca&&(a.Z=new ("top"==a.j?nK:oK)(a,e,a.K.height,b,a.B),_.Ts(a,a.Z)),e={position:"fixed",left:"0px"},e[a.j]=-a.K.height-30+"px",_.xq(b,e),_.fh(b,{overflow:"visible",background:"#FAFAFA"}),$I(a.ua,function(f){var g=null==a.ca?2147483647:a.ca;_.xq(b,{zIndex:null==f?g:Math.min(f,g)})}),cK(a))},jK=function(a,b,c,d){_.xq(a.V,{transition:c/1E3+"s","transition-timing-function":d,"margin-top":b})},mK=function(a){a.aa();a.aa=function(){}},qK=function(a,b,c,d,e){ZJ.call(this,b,d,e);this.ra=a;this.ca=c};_.P(qK,ZJ);qK.prototype.Z=function(){var a=this.ra;if(!a.o){var b=parseInt(a.D.style[a.j],10);b>=-(a.K.height/2)?(cK(a),iK(a,"d",!1,b)):(bK(a,a.G),iK(a,"d",!0,b))}};qK.prototype.ea=function(){if(null!==this.D&&null!==this.A&&null!==this.j){var a=this.aa(this.D.y,dJ(this.j,this.A).y);0<a&&(a=0);a<-this.ca&&(a=-this.ca);var b={};b[this.$()]=a+"px";_.xq(this.target,b)}};var nK=function(a,b,c,d,e){qK.call(this,a,b,c,d,e)};_.P(nK,qK);nK.prototype.O=function(){return new _.Zf(0,parseInt(this.target.style.top,10))};nK.prototype.aa=function(a,b){return b-a};nK.prototype.$=function(){return"top"};var oK=function(a,b,c,d,e){qK.call(this,a,b,c,d,e)};_.P(oK,qK);oK.prototype.O=function(){return new _.Zf(0,parseInt(this.target.style.bottom,10))};oK.prototype.aa=function(a,b){return a-b};oK.prototype.$=function(){return"bottom"};var rK=function(a,b,c){_.Ss.call(this);var d=this;this.D=a;this.j=b;this.O=null;_.ik(this,function(){return d.O=null});this.A=c};_.P(rK,_.Ss);var sK=function(a,b,c,d){if(!a.O){a.O=[];for(var e=a.D.parentElement;e;){a.O.push(e);if(a.A===e)break;e=e.parentNode&&1===e.parentNode.nodeType?e.parentNode:null}}e=a.O.slice();!c&&a.A===e[e.length-1]&&e.pop();var f;if(d)for(c=e.length-1;0<=c;--c)(f=e[c])&&b.call(a,f,c,e);else for(c=0;c<e.length;++c)(f=e[c])&&b.call(a,f,c,e)};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var tK=function(a,b,c){null!==b&&null!==_.Np(a.getAttribute("width"))&&a.setAttribute("width",b);null!==c&&null!==_.Np(a.getAttribute("height"))&&a.setAttribute("height",c);null!==b&&(a.style.width=b+"px");null!==c&&(a.style.height=c+"px")};var BK=function(a,b,c,d,e,f){rK.call(this,a,b,f);var g=this;this.nc=d;this.tc=e;this.J=this.sa=this.ca=0;this.Fb=!1;this.fa=0;this.ra=!1;this.o=null;this.ba=this.V=!1;this.T=null;this.aa=sJ(b.document.body,"padding");this.B=sJ(b.document.body,"padding");this.G=0;this.ib=this.K=!1;this.$=!0;this.l=c;this.R=uK(this);this.ea=null;this.Ca=this.ka=this.ja=this.gb=this.Gb=this.Hb=!1;this.xc=_.rp(b||window).height/2;this.Ib=_.rp(b||window).height;this.fb=eJ(b);this.Z=this.qa=!1;vK(this);this.jb=bJ(266,function(){wK(g)});this.kb=bJ(267,function(){wK(g)});this.lb=bJ(268,function(){if(g.K&&g.A&&g.o){var h=g.o;h.J=_.az(h.A)}h=_.az(g.j);var k=h-g.ca;_.G(_.ys)?xK(g,k):yK(g,k);g.Ca&&(0<k&&(g.J+=k),g.qa=g.fb-h<=g.Ib,g.ca=h);wK(g)});this.ob=bJ(269,function(){zK(g)});this.qb=bJ(270,function(h){AK(g,h)});this.Db=bJ(271,function(h){if(h&&h.touches){g.T="touchmove";g.G=h.touches.length;g.ba=!0;wK(g);if(!g.Fb&&h.touches&&0!=h.touches.length&&h.touches[0]){h=h.touches[0].pageY;var k=h-g.sa;g.sa=h;h=k}else h=0;0<h&&(g.J+=h);_.G(_.ys)?xK(g,h):yK(g,h)}});this.Eb=bJ(272,function(h){h&&h.touches&&h.touches[0]&&(g.T="touchstart",g.G=h.touches.length,g.ba=!1,wK(g),g.sa=h.touches[0].pageY,h=h.target,g.Fb=h&&"top"==g.l&&g.V&&g.o&&g.o.B&&1===h.nodeType?fJ(g.o.B,h):!1)});this.ua=bJ(273,function(){g.ja||(g.ja=!0,_.Pc(g.D,"load",g.ua),g.ka&&!g.ib||wK(g))});_.rb(a,"load",this.ua);_.ik(this,function(){return _.Pc(a,"load",g.ua)})};_.P(BK,rK);var DK=function(a){var b=a.j;_.rb(b,"orientationchange",a.jb);_.rb(b,"resize",a.kb);_.rb(b,"scroll",a.lb);_.rb(b,"touchcancel",a.ob);_.rb(b,"touchend",a.qb);_.rb(b,"touchmove",a.Db);_.rb(b,"touchstart",a.Eb);_.ik(a,function(){return CK(a)})},CK=function(a){var b=a.j;_.Pc(b,"orientationchange",a.jb);_.Pc(b,"resize",a.kb);_.Pc(b,"scroll",a.lb);_.Pc(b,"touchcancel",a.ob);_.Pc(b,"touchend",a.qb);_.Pc(b,"touchmove",a.Db);_.Pc(b,"touchstart",a.Eb)};BK.prototype.zc=function(a){var b=this.A;if(b&&!this.o){for(var c in EK)!EK.hasOwnProperty(c)||c in a||(a[c]=EK[c]);this.Hb="true"===a.use_manual_view||"top"===this.l||!!_.rg(this.j).wasReactiveAdConfigReceived[2];this.Gb="true"===a.use_important;if(c=a.af_l)this.ka="true"===c;this.Ca="true"===a.wait_for_scroll||"top"==this.l;FK(this,a);this.o=GK(this,a);a=this.R.height+5;"bottom"==this.l&&DJ(this.j)&&(a+=20);this.ea=new _.Ih(this.R.width,a);this.qa=this.Ib>=this.fb;a=this.A;c=this.o&&this.o.B;a&&c&&("top"==this.l?a.appendChild(c):a.insertBefore(c,a.firstChild));DK(this);this.V=!0;b.setAttribute("data-anchor-status","ready-to-display")}};var FK=function(a,b){var c=parseInt(b.ht,10),d=0<c?c:null;b=parseInt(b.wd,10);var e=0<b?b:null;null!=d&&(a.R.height=d);null!=e&&(a.R.width=e);sK(a,function(f){tK(f,e,d)},!1,!0);tK(a.D,e,d)},GK=function(a,b){b=new eK(b,a.j,a.D,a.R,a.l,function(){if(!a.ra){a.ra=!0;CK(a);var c=a.A;_.vp(c);HK(a);c&&(c.style.display="none")}},function(){return void IK(a)},a.nc,a.tc,function(){_.G(_.ys)&&!a.Z&&(a.Z=!0,xK(a,null));_.VC(a.N,a.slotId)},function(){_.G(_.ys)&&a.Z&&(a.Z=!1,xK(a,null));a.wc&&_.WC(a.N,a.slotId)});_.Ts(a,b);return b},vK=function(a){if(a.$){var b=a.A;b&&(b.style.display="none");HK(a);a.$=!1}};BK.prototype.eb=function(){this.ib=!0;if(!this.K&&JK(this)&&(this.ja||!this.ka)){var a=this.A;a&&(KK(this),sK(this,function(b){CJ(b)},!0),pK(this.o,a),LK(this),this.K=!0,(a=this.D.contentWindow)&&AJ(a,"ig",{rr:"vis-aa"},"*",2))}};var LK=function(a){var b=a.A;if(b){var c=a.o,d=c.A,e=_.az(d);10>Math.abs(e-c.J)||(d=e+10+_.Af(d).clientHeight>_.Af(d).offsetHeight,d=10>e||d,c.$||c.O||c.o||(c.l||d?c.l&&d&&cK(c):bK(c,!1)),c.J=e);a.$||(_.G(_.ys)?MK(a,NK(a)):a.j.document.body&&OK(a.j.document.body,NK(a)),b.style.display="block",a.$=!0)}},KK=function(a){var b=a.A;if(b&&a.D.parentElement){qJ(b,a.ea);var c=a.j.innerWidth;_.Af(a.j).scrollWidth>c?b.style.width=c:b.style.width="100%";PK(a)}},PK=function(a){sK(a,function(c){qJ(c,a.R);c.style.width="100%"},!1,!0);a.D.style.display="block";a.D.style.margin="0 auto";if(a.Gb){var b=a.A;hJ(b,function(c){kJ(c,function(d){return c===b&&/display|bottom/i.test(d)?!1:!0});if("svg"===c.nodeName)return!1})}},QK=function(a){if("bottom"!==a.l&&"top"!==a.l)throw Error("Unexpected position: "+a.l);},NK=function(a){QK(a);var b=sJ(a.j.document.body,"padding");"bottom"==a.l&&(b.bottom+=a.ea.height+25);return b},uK=function(a){QK(a);var b=a.j.innerWidth;a=_.Hq(_.Iq,a.D).height||+a.D.height||0;return new _.Ih(b,a)},zK=function(a){a.T="touchcancel";_.M.setTimeout(bJ(274,function(){"touchcancel"===a.T&&(a.G=0,a.ba=!1,wK(a))}),1E3)},AK=function(a,b){if(b&&b.touches){a.T="touchend";var c=b.touches.length;2>c?_.M.setTimeout(bJ(256,function(){"touchend"===a.T&&(a.G=c,a.ba=!1,wK(a))}),1E3):(a.G=c,wK(a));a.K&&!BJ(a.j)&&bK(a.o,!0)}},yK=function(a,b){if("top"==a.l&&a.V&&a.o&&a.K&&0>b){var c=RK(a);a.fa<c&&(a.fa=Math.min(Math.floor(a.fa-b),c),a.j.document.body.style.paddingTop=a.fa+"px")}},xK=function(a,b){var c=a.$?RK(a,a.Z):a.aa.top;if("top"===a.l&&a.j.document.body&&a.V&&a.o&&a.K&&a.B.top!==c){var d=_.mq(a.B);b||(d.top=c,MK(a,d));0<b&&a.B.top>c&&(d.top=Math.max(c,a.B.top-b),MK(a,d,!1));0>b&&a.B.top<c&&(d.top=Math.min(c,a.B.top-b),MK(a,d,!1))}},MK=function(a,b,c,d){c=void 0===c?!0:c;var e=a.B.top-b.top;if(0!=e){var f=_.az(a.j);f<e&&(void 0===d||!d)||(OK(a.j.document.body,b),a.B=b,c&&a.j.scrollTo(0,f-e))}},HK=function(a){if(_.G(_.ys))MK(a,a.aa,!0,!0);else{a.ca=_.az(a.j);if(a.j.document.body){var b=sJ(a.j.document.body,"padding");OK(a.j.document.body,a.aa)}"top"==a.l&&b&&0<b.top&&a.j.scrollTo(0,a.ca-b.top)}},wK=function(a){!a.V||a.ra||2<=a.G&&a.ba||!JK(a)?vK(a):(a.eb(),LK(a))},JK=function(a){if(!_.tg(a.j))return!1;var b=a.j;if(!a.K&&a.Ca)switch(a.l){case "bottom":return a.J>=a.xc||a.qa;case "top":return a.J>RK(a)}return BJ(b)},RK=function(a,b){b=void 0===b?!1:b;return _.G(_.ys)?b?a.aa.top+30:a.aa.top+30+a.ea.height-5:a.ea.height+30-5},OK=function(a,b){a.style.paddingTop=b.top+"px";a.style.paddingRight=b.right+"px";a.style.paddingBottom=b.bottom+"px";a.style.paddingLeft=b.left+"px"},IK=function(a){a.Hb&&!a.gb&&(a.gb=!0,aJ(257,function(){var b={msg_type:"manual-send-view"},c=a.D.contentWindow;c&&c.postMessage(a.j.JSON.stringify(b),"*")}))};BK.prototype.yc=function(a){this.D=a;PK(this)};var EK={ui:"gr",gvar:"ar",scroll_detached:"true",dismissable:"false"};var TK=function(a){this.j=null;this.F=a.match(_.yp)[3]||"";this.A=SK(a);this.m=!1},UK=function(a,b){b?a.j=new RegExp("\\b("+b.join("|").toLowerCase()+")\\b","ig"):a.j=null},XK=function(a,b,c){if(_.Sd(["data-google-vignette","data-google-interstitial"],function(f){return"false"===b.getAttribute(f)||b.closest&&!!b.closest("["+f+'="false"]')}))return!1;var d=b.href,e=d&&(d.match(_.yp)[3]||null);if(!VK(a,b,d,e,c))return!1;a.m=!!e&&WK(a,e);return a.m||!c&&!OJ(b)&&/^https?:\/\//i.test(d)&&!/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d)},VK=function(a,b,c,d,e){if(!c)return!1;switch(b.target){case "_top":case "_parent":break;case "":case "_self":if(e)return!1;break;default:return!1}return!d||WK(a,d)&&SK(c)==a.A?!1:!0},YK=function(a,b){if(!b||!a.j)return[];var c=[];GJ(b,c,!0,!0);b=c.join("");b=b.replace(HJ," ").replace(IJ,"");b=b.replace(JJ,"");b=b.replace(KJ," ");" "!=b&&(b=b.replace(LJ,""));if(!b)return[];a=b.match(a.j);b=[];for(c=0;a&&c<a.length;c++){var d=a[c].toLowerCase();0<=_.ea(b,d)||b.push(d)}return b},WK=function(a,b){return b.replace(ZK,"")==a.F.replace(ZK,"")},SK=function(a){a=a.match(_.yp);var b=a[6];return(a[5]||"")+(b?"?"+b:"")||"/"},ZK=/^(www\.|m\.|mobile\.)*/i;var $K=function(a,b,c){rK.call(this,a,b,c);this.B=!1;this.o=null;this.l=b.document;this.K=new _.Xy(new _.Uy(b))};_.P($K,rK);var aL=function(a){for(var b=a.A,c=0;b&&25>c;++c){if(b.nodeName&&"body"==b.nodeName.toString().toLowerCase())return;b=b.parentElement}a.B=!0},cL=function(a){var b=a.A;b&&(_.fh(b,{width:"100%",height:"50%",top:"auto",bottom:"0px"}),_.xq(a.D,bL))},hL=function(a){dL(a,!1);var b=a.A;b&&(sK(a,function(c){_.fh(c,eL);CJ(c)},!0),a.D.setAttribute("width",""),a.D.setAttribute("height",""),_.xq(a.D,eL),_.xq(a.D,fL),_.xq(b,gL),_.xq(b,{background:"transparent"}),_.fh(b,{display:"none",position:"fixed"}),CJ(b),CJ(a.D))},dL=function(a,b){var c=a.A;c&&(b?(_.Yy(a.K),_.fh(c,{display:"block"}),a.l.body&&!a.o&&(a.o=_.cz(a.l,a.j),a.o&&a.B&&_.xq(a.l.body,iL)),c.setAttribute("tabindex","0"),c.setAttribute("aria-hidden","false"),a.l.body.setAttribute("aria-hidden","true")):(_.Zy(a.K),_.fh(c,{display:"none"}),a.o&&(a.o(),a.o=null),a.l.body.setAttribute("aria-hidden","false"),c.setAttribute("aria-hidden","true")))},bL={width:"100%",height:"100%",top:"auto",bottom:"0px"},jL={"animation-name":"ggl-vgn-slideup","-webkit-animation-name":"ggl-vgn-slideup","animation-duration":"1s","-webkit-animation-duration":"1s","animation-timing-function":"ease","-webkit-animation-timing-function":"ease"},gL={backgroundColor:"white",opacity:"1",position:"fixed",left:"0px",top:"0px",margin:"0px",padding:"0px",display:"none",zIndex:"2147483647"},eL={width:"100vw",height:"100vh"},fL={left:"0",position:"absolute",top:"0"},iL={filter:"blur(5px)",webkitFilter:"blur(5px)"};var mL=function(a,b,c){_.Ss.call(this);var d=this;this.j=a;this.ra=c;this.jb={};this.tc=bJ(168,function(e,f){return void kL(d,e,f)});this.he=bJ(169,function(e,f){d.ra.j("ras::xsf",{c:f.data.substring(0,500),u:d.j.location.href.substring(0,500)},.1);return!0});this.aa=[];lL(this,this.jb);this.aa.push(zJ(this.j,this.tc,this.he))};_.P(mL,_.Ss);var kL=function(a,b,c){try{if(!a.ib(c.origin))return}catch(f){return}var d=b.msg_type,e;"string"===typeof d&&(e=a.jb[d])&&aJ(168,function(){e.call(a,b,c)})};mL.prototype.ib=function(a){return!!_.Zp[a]||lJ.test(a)||mJ.test(a)||nJ.test(a)};mL.prototype.F=function(){for(var a=_.D(this.aa),b=a.next();!b.done;b=a.next())b=b.value,b();this.aa.length=0;_.Ss.prototype.F.call(this)};var qL=function(a,b,c,d,e,f,g){mL.call(this,a,c,e);var h=this;this.G=NaN;this.sa=b;this.qa=!1;this.A=null;this.O=!1;var k;this.Ca=null!=(k=g.i_expid)?k:null;this.ba=_.Cc();this.ea=!0;this.fb=!1;this.Fb="true"===g["i-fvs"];this.Z=!0;this.$=null;this.o=0;var l;this.lb=null!=(l=g.qid)?l:null;this.D=this.K=this.B=null;this.V=void 0;this.ja=null;this.l=d;this.fa=!1;this.kb=0;this.zc="true"===g.switch_back_vignette;this.xc=!!g.switch_back_vignette_animation;var m;this.yc=null!=(m=g.switch_back_vignette_animation)?m:"";this.ob=!1;this.R=new TK(a.location.href);this.T=f;this.Eb="true"===g.check_screen_change;this.qb=_.r(Number,"isNaN").call(Number,Number(g.screen_size_threshold))?0:Number(g.screen_size_threshold);this.ua=_.Ec(_.Sq)||864E5;this.gb="true"===g.iobs&&!!this.j.IntersectionObserver;this.wc=_.lm(function(){return void nL(h,{tth:Date.now()-h.o,iswbv:h.ob},.01)});this.eb="true"===g.click_bubble;"true"==g.bottom_half_trans_bkg_vignette&&cL(this.l);"true"==g.i_blur_bg&&aL(this.l);var n,q;UK(this.R,null!=(q=null==(n=g.stop_word)?void 0:n.split(";"))?q:null);this.eb||(oL(this),pL(this));g.imm_load&&this.J()};_.P(qL,mL);var lL=function(a,b){b["i-adframe-load"]=function(){var c;null==(c=a.l.A)||c.setAttribute("data-vignette-loaded","true");a.J()};b["i-blur"]=function(){a.O=!0;a.V&&(a.Z=!0)};b["i-dismiss"]=function(){return void rL(a)};b["i-no"]=function(c){a.ea=!1;a.ja=c.i_tslv?c.i_tslv:null};b.i_iif=function(){return void a.ca()}};qL.prototype.J=function(a){a=void 0===a?!1:a;if(!this.G&&(this.G=_.Cc(),oL(this),pL(this),a)){var b;null==(b=this.l.A)||b.setAttribute("data-vignette-loaded","true")}};var rL=function(a){nL(a,{dis:Date.now()-a.o,dha:Number(a.O)},.01);if(a.O)sL(a)?a.j.history.back():tL(a);else if(_.M.setTimeout(function(){tL(a)},1E3),a.A){var b=Date.now();a.j.addEventListener("pagehide",function(){nL(a,{pg_hid:Date.now()-b},.01)});a.V&&(a.Z=!1);uL(a,a.A.href)}};qL.prototype.ca=function(){this.fb=!0};var vL=function(a){sL(a)||(a.j.location.hash="google_vignette");a.V=bJ(526,(0,_.wl)(a.Gb,a));_.M.setTimeout(_.xl(_.rb,a.j,"hashchange",a.V),0)},xL=function(a,b){return _.Cc()-a.ba<a.ua&&a.ea&&!a.fb&&!sL(a)&&!!a.G&&(a.Fb||!_.rg(a.j).wasReactiveAdVisible[9])&&!YK(a.R,b).length&&BJ(a.j)&&wL(a)},yL=function(a,b,c){a=_.Ch("LINK",a.j.document);a.setAttribute("rel",c);a.setAttribute("href",b);return a},zL=function(a,b){for(b=b.target;b;){if("A"==b.nodeName){if(XK(a.R,b,b.ownerDocument!=a.j.document))return b;break}b=b.parentElement}return null};qL.prototype.Gb=function(){this.Z&&(sL(this)?(nL(this,{fnv:1},.01),uL(this,this.A.href)):(this.wc(),tL(this)))};qL.prototype.F=function(){mL.prototype.F.call(this);sL(this)&&uL(this,this.A.href);this.D&&(_.Pc(this.j.document,"click",this.D),this.D=null)};var tL=function(a){a.o&&(a.qa=!0,a.D&&(_.Pc(a.j.document,"click",a.D),a.D=null),a.K&&a.K.parentNode&&(a.K.parentNode.removeChild(a.K),a.K=null),a.B&&a.B.parentNode&&(a.B.parentNode.removeChild(a.B),a.B=null),dL(a.l,!1))},oL=function(a){if(!a.D){a.D=bJ(527,function(e){return AL(a,e)});var b=a.eb?{}:cJ;_.rb(a.j.document,"click",a.D,b);for(var c=a.j.frames,d=0;d<c.length;d++)try{_.rb(c[d].document,"click",a.D,b)}catch(e){}}},nL=function(a,b,c){a.lb&&(b.qid=a.lb);a.Ca&&(b.eid=a.Ca);a.$&&(b.lnk=a.$.substr(0,100),a.R.m||(b.inter="1"));var d=_.bk();d&&(b.ns=String(d));b.fs=String(_.Cc()-a.ba);b.req=a.sa.src;a.ra.j("ia_evt",b,c)},uL=function(a,b){a=a.j.location;var c=void 0===c?_.gm:c;a:{c=void 0===c?_.gm:c;for(var d=0;d<c.length;++d){var e=c[d];if(e instanceof _.Va&&e.Id(b)){b=new _.em(b,_.Oa);break a}}b=void 0}a.replace(XI(b||_.fm))};qL.prototype.Hb=function(a){if(!this.o&&this.A&&!this.m)if(a=a.preventDefaultTriggered_,!a&&XK(this.R,this.A,this.A.ownerDocument!=this.j.document)&&xL(this,this.A))if(this.ka()){var b;nL(this,{lif:_.Cc(),lase:this.G,latt:!(null==(b=this.l.A)||!b.getAttribute("data-vignette-loaded")),t:2},.1);this.o=Date.now();_.rg(this.j).wasReactiveAdVisible[8]=!0;this.$=this.A.href.substr(0,100);this.gb||BL(this);b=this.A.href;this.K=yL(this,b,"prerender");this.B=yL(this,b,"prefetch");this.j.document.body.appendChild(this.K);this.j.document.body.appendChild(this.B);vL(this);b=bJ(528,(0,_.wl)(this.nc,this));_.rb(this.j,"pagehide",b);dL(this.l,!0);this.fa&&nL(this,{vsbl:2},.01)}else uL(this,this.A.href);else CL(this,this.A,a),a?this.A=null:uL(this,this.A.href)};qL.prototype.ka=function(){return!0};var AL=function(a,b){if(b&&!b.defaultPrevented&&!a.o&&!a.m&&!a.A){var c=zL(a,b);c&&(xL(a,c)?(a.A=c,oJ(b),b.preventDefault=function(){return b&&(b.preventDefaultTriggered_=!0)},_.M.setTimeout((0,_.wl)(a.Hb,a,b),0)):CL(a,c,!1))}},sL=function(a){return-1!=a.j.location.hash.indexOf("google_vignette")};qL.prototype.nc=function(){this.qa||nL(this,{af:Date.now()-this.o},.01);tL(this)};var CL=function(a,b,c){var d=a.j,e=_.rg(d),f=!wL(a);e={zm:Number(BJ(d)),sz:Number(f),fc:Number(a.ea),vp:Number(sL(a)),al:Number(!!a.G),fsi:Number(!!e.wasReactiveAdVisible[9]),ag:Number(_.Cc()-a.ba<a.ua)};c&&(e.wsdojl=!0);f&&(e.rs_sz=a.T.width+"x"+a.T.height,e.cr_sz=d.innerWidth+"x"+d.innerHeight);b=YK(a.R,b);b.length&&(e.sw=b.join());a.ja&&(e.ts=a.ja);nL(a,e,.01)},BL=function(a){var b={};b=(b.msg_type="i-view",b);a.sa.contentWindow.postMessage(JSON.stringify(b),"*")},pL=function(a){var b=a.j.document;1===_.My(b)&&_.rb(b,"visibilitychange",bJ(342,function(){if(!a.fa)if(1===_.My(b)){var c=(new Date).getTime()-a.kb;a.fa=!0;nL(a,{vsbl:1,dur_hid:c},.01);if(a.zc&&a.ka()){a.o=Date.now();a.O=!0;a.gb||BL(a);vL(a);if(a.xc){c=a.l;var d=c.A;if(d&&"ggl-vgn-slideup"===a.yc){var e=_.Ch("STYLE");e.type="text/css";e.appendChild(c.l.createTextNode("@keyframes ggl-vgn-slideup {0% { transform: translateY(100%); opacity: 0.5; }100% { transform: translateY(0); opacity: 1; }  }@-webkit-keyframes ggl-vgn-slideup { 0% { transform: translateY(100%); opacity: 0.5; } 100% { transform: translateY(0); opacity: 1; } }"));_.fh(d,jL);c.l.body.appendChild(e)}}a.ob=!0;dL(a.l,!0)}}else a.kb=(new Date).getTime()}))},wL=function(a){if(a.Eb){var b=a.j.innerWidth/a.T.width-1;if(0>b&&Math.abs(b)>a.qb)return!1;b=a.j.innerHeight/a.T.height-1;return 0>b&&Math.abs(b)>a.qb?!1:!0}return a.T.width<a.T.height===_.tg(a.j)};var DL=function(){this.j=null};var EL=function(a,b,c,d,e,f){BK.call(this,b,c,2===a?"top":"bottom",new _.JB,new yJ,d);this.N=e;this.slotId=f;this.wc=_.UC(this.N,this.slotId);2===a&&_.VC(this.N,this.slotId)};_.P(EL,BK);var FL=function(a,b,c){$K.call(this,b,a,c);hL(this)};_.P(FL,$K);var GL=function(a,b,c,d,e,f,g,h,k){k=void 0===k?null:k;qL.call(this,a,b,d,new FL(a,b,c),new yJ,e,f);this.Db=g;this.Ib=h;this.localStorage=k;_.Ts(this,this.l)};_.P(GL,qL);GL.prototype.ka=function(){var a;if(!(a=this.Db)){var b=_.zg(DL),c=this.localStorage,d=_.Ec(_.xf)||3600;try{var e;(e=!c)||(b.j=_.Df(c,d),e=!(b.j&&_.Cf(b.j)));if(e)a=!1;else{b.j.push(Date.now());var f=JSON.stringify(b.j);c.setItem("__lsv__",f);a=c.getItem("__lsv__")==f}}catch(g){a=!1}}return a};GL.prototype.ib=function(){return!0};GL.prototype.ca=function(){qL.prototype.ca.call(this);this.Ib()};var HL=_.GF.X(),IL={yd:EL,Dd:GL};_.HF(HL,_.NF).resolve(IL);})