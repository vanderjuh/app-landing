"use strict";(self.webpackChunkapp_landing_page=self.webpackChunkapp_landing_page||[]).push([[730],{730:(rt,X,m)=>{m.r(X),m.d(X,{LandingModule:()=>ot});var P=m(814),o=m(946),N=m(96),pe=m(715),he=m(592),fe=m(328),ge=m(181),A=m(398),z=m(716),me=m(535);class R{}class L{}class v{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?"string"==typeof e?this.lazyInit=()=>{this.headers=new Map,e.split("\n").forEach(t=>{const r=t.indexOf(":");if(r>0){const s=t.slice(0,r),a=s.toLowerCase(),i=t.slice(r+1).trim();this.maybeSetNormalizedName(s,a),this.headers.has(a)?this.headers.get(a).push(i):this.headers.set(a,[i])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof v?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new v;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof v?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,t);const s=("a"===e.op?this.headers.get(t):void 0)||[];s.push(...r),this.headers.set(t,s);break;case"d":const a=e.value;if(a){let i=this.headers.get(t);if(!i)return;i=i.filter(l=>-1===a.indexOf(l)),0===i.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,i)}else this.headers.delete(t),this.normalizedNames.delete(t)}}setHeaderEntries(e,t){const r=(Array.isArray(t)?t:[t]).map(a=>a.toString()),s=e.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(e,s)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class Ce{encodeKey(e){return Z(e)}encodeValue(e){return Z(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const ve=/%(\d[a-f0-9])/gi,Pe={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Z(n){return encodeURIComponent(n).replace(ve,(e,t)=>Pe[t]??e)}function S(n){return`${n}`}class O{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new Ce,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function ye(n,e){const t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(s=>{const a=s.indexOf("="),[i,l]=-1==a?[e.decodeKey(s),""]:[e.decodeKey(s.slice(0,a)),e.decodeValue(s.slice(a+1))],c=t.get(i)||[];c.push(l),t.set(i,c)}),t}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const r=e.fromObject[t],s=Array.isArray(r)?r.map(S):[S(r)];this.map.set(t,s)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(r=>{const s=e[r];Array.isArray(s)?s.forEach(a=>{t.push({param:r,value:a,op:"a"})}):t.push({param:r,value:s,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new O({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(S(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let r=this.map.get(e.param)||[];const s=r.indexOf(S(e.value));-1!==s&&r.splice(s,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class Oe{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function B(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function K(n){return typeof Blob<"u"&&n instanceof Blob}function G(n){return typeof FormData<"u"&&n instanceof FormData}class T{constructor(e,t,r,s){let a;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function Me(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==r?r:null,a=s):a=r,a&&(this.reportProgress=!!a.reportProgress,this.withCredentials=!!a.withCredentials,a.responseType&&(this.responseType=a.responseType),a.headers&&(this.headers=a.headers),a.context&&(this.context=a.context),a.params&&(this.params=a.params)),this.headers||(this.headers=new v),this.context||(this.context=new Oe),this.params){const i=this.params.toString();if(0===i.length)this.urlWithParams=t;else{const l=t.indexOf("?");this.urlWithParams=t+(-1===l?"?":l<t.length-1?"&":"")+i}}else this.params=new O,this.urlWithParams=t}serializeBody(){return null===this.body?null:B(this.body)||K(this.body)||G(this.body)||function be(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof O?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||G(this.body)?null:K(this.body)?this.body.type||null:B(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof O?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){const t=e.method||this.method,r=e.url||this.url,s=e.responseType||this.responseType,a=void 0!==e.body?e.body:this.body,i=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,l=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let c=e.headers||this.headers,f=e.params||this.params;const w=e.context??this.context;return void 0!==e.setHeaders&&(c=Object.keys(e.setHeaders).reduce((C,y)=>C.set(y,e.setHeaders[y]),c)),e.setParams&&(f=Object.keys(e.setParams).reduce((C,y)=>C.set(y,e.setParams[y]),f)),new T(t,r,a,{params:f,headers:c,context:w,reportProgress:l,responseType:s,withCredentials:i})}}var h=(()=>((h=h||{})[h.Sent=0]="Sent",h[h.UploadProgress=1]="UploadProgress",h[h.ResponseHeader=2]="ResponseHeader",h[h.DownloadProgress=3]="DownloadProgress",h[h.Response=4]="Response",h[h.User=5]="User",h))();class F{constructor(e,t=200,r="OK"){this.headers=e.headers||new v,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class I extends F{constructor(e={}){super(e),this.type=h.ResponseHeader}clone(e={}){return new I({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class _ extends F{constructor(e={}){super(e),this.type=h.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new _({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class V extends F{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function D(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}let $=(()=>{class n{constructor(t){this.handler=t}request(t,r,s={}){let a;if(t instanceof T)a=t;else{let c,f;c=s.headers instanceof v?s.headers:new v(s.headers),s.params&&(f=s.params instanceof O?s.params:new O({fromObject:s.params})),a=new T(t,r,void 0!==s.body?s.body:null,{headers:c,context:s.context,params:f,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const i=(0,N.of)(a).pipe((0,fe.b)(c=>this.handler.handle(c)));if(t instanceof T||"events"===s.observe)return i;const l=i.pipe((0,ge.h)(c=>c instanceof _));switch(s.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return l.pipe((0,A.U)(c=>{if(null!==c.body&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return l.pipe((0,A.U)(c=>{if(null!==c.body&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return l.pipe((0,A.U)(c=>{if(null!==c.body&&"string"!=typeof c.body)throw new Error("Response is not a string.");return c.body}));default:return l.pipe((0,A.U)(c=>c.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:(new O).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,s={}){return this.request("PATCH",t,D(s,r))}post(t,r,s={}){return this.request("POST",t,D(s,r))}put(t,r,s={}){return this.request("PUT",t,D(s,r))}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(R))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac}),n})();function Q(n,e){return e(n)}function we(n,e){return(t,r)=>e.intercept(t,{handle:s=>n(s,r)})}const Ee=new o.OlP(""),E=new o.OlP(""),ee=new o.OlP("");function xe(){let n=null;return(e,t)=>{null===n&&(n=((0,o.f3M)(Ee,{optional:!0})??[]).reduceRight(we,Q));const r=(0,o.f3M)(o.HDt),s=r.add();return n(e,t).pipe((0,z.x)(()=>r.remove(s)))}}let te=(()=>{class n extends R{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null,this.pendingTasks=(0,o.f3M)(o.HDt)}handle(t){if(null===this.chain){const s=Array.from(new Set([...this.injector.get(E),...this.injector.get(ee,[])]));this.chain=s.reduceRight((a,i)=>function Te(n,e,t){return(r,s)=>t.runInContext(()=>e(r,a=>n(a,s)))}(a,i,this.injector),Q)}const r=this.pendingTasks.add();return this.chain(t,s=>this.backend.handle(s)).pipe((0,z.x)(()=>this.pendingTasks.remove(r)))}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(L),o.LFG(o.lqb))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac}),n})();const Se=/^\)\]\}',?\n/;let oe=(()=>{class n{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new o.vHH(-2800,!1);const r=this.xhrFactory;return(r.\u0275loadImpl?(0,pe.D)(r.\u0275loadImpl()):(0,N.of)(null)).pipe((0,me.w)(()=>new he.y(a=>{const i=r.build();if(i.open(t.method,t.urlWithParams),t.withCredentials&&(i.withCredentials=!0),t.headers.forEach((d,p)=>i.setRequestHeader(d,p.join(","))),t.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const d=t.detectContentTypeHeader();null!==d&&i.setRequestHeader("Content-Type",d)}if(t.responseType){const d=t.responseType.toLowerCase();i.responseType="json"!==d?d:"text"}const l=t.serializeBody();let c=null;const f=()=>{if(null!==c)return c;const d=i.statusText||"OK",p=new v(i.getAllResponseHeaders()),b=function He(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}(i)||t.url;return c=new I({headers:p,status:i.status,statusText:d,url:b}),c},w=()=>{let{headers:d,status:p,statusText:b,url:j}=f(),g=null;204!==p&&(g=typeof i.response>"u"?i.responseText:i.response),0===p&&(p=g?200:0);let k=p>=200&&p<300;if("json"===t.responseType&&"string"==typeof g){const J=g;g=g.replace(Se,"");try{g=""!==g?JSON.parse(g):null}catch(de){g=J,k&&(k=!1,g={error:de,text:g})}}k?(a.next(new _({body:g,headers:d,status:p,statusText:b,url:j||void 0})),a.complete()):a.error(new V({error:g,headers:d,status:p,statusText:b,url:j||void 0}))},C=d=>{const{url:p}=f(),b=new V({error:d,status:i.status||0,statusText:i.statusText||"Unknown Error",url:p||void 0});a.error(b)};let y=!1;const U=d=>{y||(a.next(f()),y=!0);let p={type:h.DownloadProgress,loaded:d.loaded};d.lengthComputable&&(p.total=d.total),"text"===t.responseType&&i.responseText&&(p.partialText=i.responseText),a.next(p)},x=d=>{let p={type:h.UploadProgress,loaded:d.loaded};d.lengthComputable&&(p.total=d.total),a.next(p)};return i.addEventListener("load",w),i.addEventListener("error",C),i.addEventListener("timeout",C),i.addEventListener("abort",C),t.reportProgress&&(i.addEventListener("progress",U),null!==l&&i.upload&&i.upload.addEventListener("progress",x)),i.send(l),a.next({type:h.Sent}),()=>{i.removeEventListener("error",C),i.removeEventListener("abort",C),i.removeEventListener("load",w),i.removeEventListener("timeout",C),t.reportProgress&&(i.removeEventListener("progress",U),null!==l&&i.upload&&i.upload.removeEventListener("progress",x)),i.readyState!==i.DONE&&i.abort()}})))}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(P.JF))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac}),n})();const q=new o.OlP("XSRF_ENABLED"),re=new o.OlP("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>"XSRF-TOKEN"}),se=new o.OlP("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>"X-XSRF-TOKEN"});class ie{}let Fe=(()=>{class n{constructor(t,r,s){this.doc=t,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,P.Mx)(t,this.cookieName),this.lastCookieString=t),this.lastToken}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(P.K0),o.LFG(o.Lbi),o.LFG(re))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac}),n})();function Ie(n,e){const t=n.url.toLowerCase();if(!(0,o.f3M)(q)||"GET"===n.method||"HEAD"===n.method||t.startsWith("http://")||t.startsWith("https://"))return e(n);const r=(0,o.f3M)(ie).getToken(),s=(0,o.f3M)(se);return null!=r&&!n.headers.has(s)&&(n=n.clone({headers:n.headers.set(s,r)})),e(n)}var u=(()=>((u=u||{})[u.Interceptors=0]="Interceptors",u[u.LegacyInterceptors=1]="LegacyInterceptors",u[u.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",u[u.NoXsrfProtection=3]="NoXsrfProtection",u[u.JsonpSupport=4]="JsonpSupport",u[u.RequestsMadeViaParent=5]="RequestsMadeViaParent",u[u.Fetch=6]="Fetch",u))();function M(n,e){return{\u0275kind:n,\u0275providers:e}}function De(...n){const e=[$,oe,te,{provide:R,useExisting:te},{provide:L,useExisting:oe},{provide:E,useValue:Ie,multi:!0},{provide:q,useValue:!0},{provide:ie,useClass:Fe}];for(const t of n)e.push(...t.\u0275providers);return(0,o.MR2)(e)}const ae=new o.OlP("LEGACY_INTERCEPTOR_FN");let Ue=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({providers:[De(M(u.LegacyInterceptors,[{provide:ae,useFactory:xe},{provide:E,useExisting:ae,multi:!0}]))]}),n})(),ce=(()=>{class n{constructor(t){this.httpClient=t,this.data={areasOfActivity:[{id:1,title:"Psicoterapia",subtitle:"Psicoterapia Individual",btnLabel:"Agendar",items:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque."]},{id:2,title:"Terapia Casal",subtitle:"Terapia Casal",btnLabel:"Agendar",items:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque."]},{id:3,title:"Terapia Familiar",subtitle:"Terapia Familiar",btnLabel:"Agendar",items:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque."]},{id:4,title:"Gerenciamento do Estresse",subtitle:"Gerenciamento do Estresse",btnLabel:"Agendar",items:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque."]},{id:5,title:"Tratamento da Ansiedade",subtitle:"Tratamento da Ansiedade",btnLabel:"Agendar",items:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque."]},{id:6,title:"Tratamento da Depresss\xe3o",subtitle:"Tratamento da Depresss\xe3o",btnLabel:"Agendar",items:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque."]}],services:[{title:"Atendimento Domiciliar",imgSrc:"casa.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",btnLabel:"Agendar"},{title:"Atendimento do Consult\xf3rio",imgSrc:"diva.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",btnLabel:"Agendar"},{title:"Atendimento Online",imgSrc:"pc.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",btnLabel:"Agendar"}],aboutMe:{name:"Gionna Souza",council:"CRP",profileImg:"",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque. Duis ullamcorper tempor tempus. Phasellus eget commodo est, vitae luctus libero. Vestibulum nibh tellus, condimentum vitae tempor vel, aliquam sit amet justo. Ut lectus est, tincidunt blandit felis iaculis, sagittis eleifend orci. Sed dapibus vehicula imperdiet. Cras libero elit, semper at pharetra gravida, lobortis a tellus. Donec sit amet velit ex. Sed sit amet nibh justo. Quisque lorem orci, dapibus nec erat at, malesuada blandit quam. Donec suscipit ligula quis diam lacinia, ac tempor leo hendrerit.",socialMedias:[{title:"Instagram",icon:"instagram",url:"#"},{title:"LinkedIn",icon:"linkedin",url:"#"},{title:"Facebook",icon:"facebook",url:"#"},{title:"Twitter",icon:"twitter",url:"#"}]},testimonies:[{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.",author:"Ana"},{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.",author:"Maria"}],faq:[{question:"Como funciona o atendimento online?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{question:"Posso usar conv\xeanio",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{question:"Como funciona o sigilo?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{question:"Como inicio o tratamento?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{question:"Quanto tempo duram as sess\xf5es?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}]}}get(){return(0,N.of)(this.data)}}return n.\u0275fac=function(t){return new(t||n)(o.LFG($))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac}),n})(),Be=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({providers:[ce],imports:[P.ez,Ue]}),n})();var le=m(931);function ue(n,e,t,r,s,a,i){try{var l=n[a](i),c=l.value}catch(f){return void t(f)}l.done?e(c):Promise.resolve(c).then(r,s)}var Ge=m(973);function $e(n,e){if(1&n){const t=o.EpF();o.TgZ(0,"li",30),o.NdJ("click",function(){const a=o.CHM(t).$implicit,i=o.oxw();return o.KtG(i.onSelectedActivity(a))}),o._uU(1),o.qZA()}if(2&n){const t=e.$implicit,r=o.oxw();o.ekj("selected-activity",(null==r.selectedActivity?null:r.selectedActivity.id)===t.id),o.xp6(1),o.hij(" ",t.title," ")}}function We(n,e){if(1&n&&(o.TgZ(0,"div",34),o._uU(1),o.qZA()),2&n){const t=e.$implicit;o.xp6(1),o.Oqu(t)}}function Ye(n,e){if(1&n&&(o.TgZ(0,"div",31)(1,"h3"),o._uU(2),o.qZA(),o.TgZ(3,"div",32),o.YNc(4,We,2,1,"div",33),o.qZA(),o.TgZ(5,"a",15),o._uU(6),o.qZA()()),2&n){const t=o.oxw();o.xp6(2),o.Oqu(t.selectedActivity.title),o.xp6(2),o.Q6J("ngForOf",t.selectedActivity.items),o.xp6(2),o.Oqu(t.selectedActivity.btnLabel)}}const Qe=function(n,e){return{"service-item":!0,"flower-7":n,"flower-3":e}};function et(n,e){if(1&n&&(o.TgZ(0,"div",35),o._UZ(1,"img",36),o.TgZ(2,"h3"),o._uU(3),o.qZA(),o.TgZ(4,"p"),o._uU(5),o.qZA(),o.TgZ(6,"a",15),o._uU(7),o.qZA()()),2&n){const t=e.$implicit,r=e.index,s=o.oxw();o.Q6J("ngClass",o.WLB(6,Qe,0===r,r===s.response.services.length-1)),o.xp6(1),o.Q6J("src","../../assets/imgs/"+t.imgSrc,o.LSH),o.uIk("alt",t.title),o.xp6(2),o.Oqu(t.title),o.xp6(2),o.Oqu(t.description),o.xp6(2),o.Oqu(t.btnLabel)}}const tt=[{path:"",component:(()=>{class n{constructor(t){this.landingApiService=t}ngOnInit(){var t=this;return function Ke(n){return function(){var e=this,t=arguments;return new Promise(function(r,s){var a=n.apply(e,t);function i(c){ue(a,r,s,i,l,"next",c)}function l(c){ue(a,r,s,i,l,"throw",c)}i(void 0)})}}(function*(){t.onScroll(),t.response=yield function Ve(n,e){const t="object"==typeof e;return new Promise((r,s)=>{let i,a=!1;n.subscribe({next:l=>{i=l,a=!0},error:s,complete:()=>{a?r(i):t?r(e.defaultValue):s(new Ge.K)}})})}(t.landingApiService.get()),t.response.areasOfActivity?.length&&(t.selectedActivity=t.response.areasOfActivity[0])})()}onScroll(){document.addEventListener("scroll",t=>{document.body.scrollTop+document.documentElement.scrollTop===0?document.querySelector("menu")?.classList.remove("top-menu-scrolled"):document.querySelector("menu")?.classList.add("top-menu-scrolled")})}onSelectedActivity(t){this.selectedActivity=t}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(ce))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-landing"]],decls:65,vars:3,consts:[[1,"landing"],[1,"top-menu"],[1,"menu-btn"],[1,"material-symbols-rounded"],["src","../../assets/imgs/logo.png","alt","Giovanna Souza"],[1,"links"],[1,"zeroed-ul"],["href","#"],["href","#activities"],["href","#services"],["href","#",1,"btn","schedule"],[1,"hero-section"],["src","../../assets/imgs/flower-8.png","alt","Flower 8",1,"flower-8"],[1,"introduction"],[1,"introduction-info"],["href","#",1,"btn"],[1,"introduction-image","flower-9","flower-7"],[1,"flower-shadow-left"],["src","../../assets/imgs/intro-cover.png","alt","Intro Cover"],[1,"flower-shadow-right"],["id","activities",1,"section","activities"],["src","../../assets/imgs/flower-12.png","alt","Flower",1,"flower-12"],["src","../../assets/imgs/flower-4.png","alt","Flower",1,"flower-4"],[1,"activities-content"],[1,"activities-list"],[3,"selected-activity","click",4,"ngFor","ngForOf"],["class","activities-explanation",4,"ngIf"],["id","services",1,"section","services"],[1,"service-items"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"click"],[1,"activities-explanation"],[1,"activities-explanation-topics"],["class","activities-explanation-topic",4,"ngFor","ngForOf"],[1,"activities-explanation-topic"],[3,"ngClass"],[3,"src"]],template:function(t,r){1&t&&(o.TgZ(0,"div",0)(1,"menu",1)(2,"button",2)(3,"span",3),o._uU(4," menu "),o.qZA()(),o._UZ(5,"img",4),o.TgZ(6,"div",5)(7,"nav")(8,"ul",6)(9,"li")(10,"a",7),o._uU(11,"In\xedcio"),o.qZA()(),o.TgZ(12,"li")(13,"a",8),o._uU(14,"\xc1reas de Atua\xe7\xe3o"),o.qZA()(),o.TgZ(15,"li")(16,"a",9),o._uU(17,"Atendimento"),o.qZA()(),o.TgZ(18,"li")(19,"a",7),o._uU(20,"Quem sou eu?"),o.qZA()(),o.TgZ(21,"li")(22,"a",7),o._uU(23,"Depoimento"),o.qZA()(),o.TgZ(24,"li")(25,"a",7),o._uU(26,"FAQ"),o.qZA()()()(),o.TgZ(27,"a",10),o._uU(28,"Agendar"),o.qZA()()(),o.TgZ(29,"header",11),o._UZ(30,"img",12),o.TgZ(31,"div",13)(32,"h1"),o._uU(33,"Construa seu Caminho de Autoconhecimento e Equil\xedbrio Emocional na Jornada terap\xeautica"),o.qZA(),o.TgZ(34,"div",14)(35,"ul",6)(36,"li"),o._uU(37,"Empatia"),o.qZA(),o.TgZ(38,"li"),o._uU(39,"Confian\xe7a"),o.qZA(),o.TgZ(40,"li"),o._uU(41,"Efetividade"),o.qZA()(),o.TgZ(42,"p"),o._uU(43,"Fale do fundo do seu cora\xe7\xe3o, ilumine-se atr\xe1ves de seus pr\xf3prios problemas. Sua Privacidade \xe9 garantida, 100% segura."),o.qZA(),o.TgZ(44,"a",15),o._uU(45,"Agende uma consulta"),o.qZA()()(),o.TgZ(46,"div",16),o._UZ(47,"div",17)(48,"img",18)(49,"div",19),o.qZA()(),o.TgZ(50,"section",20)(51,"h2"),o._uU(52,"\xc1reas de Atua\xe7\xe3o"),o.qZA(),o._UZ(53,"img",21)(54,"img",22),o.TgZ(55,"div",23)(56,"div",24)(57,"ul",6),o.YNc(58,$e,2,3,"li",25),o.qZA()(),o.YNc(59,Ye,7,3,"div",26),o.qZA()(),o.TgZ(60,"section",27)(61,"h2"),o._uU(62,"Atendimento"),o.qZA(),o.TgZ(63,"div",28),o.YNc(64,et,8,9,"div",29),o.qZA()()()),2&t&&(o.xp6(58),o.Q6J("ngForOf",null==r.response?null:r.response.areasOfActivity),o.xp6(1),o.Q6J("ngIf",r.selectedActivity),o.xp6(5),o.Q6J("ngForOf",null==r.response?null:r.response.services))},dependencies:[P.mk,P.sg,P.O5],styles:['@charset "UTF-8";*[_ngcontent-%COMP%]{transition:all .2s}.landing[_ngcontent-%COMP%]{margin:0 auto;display:flex;flex-direction:column;gap:1rem}.landing[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]{border:unset;background-color:unset;cursor:pointer;display:none}.landing[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{display:flex;gap:1rem}.landing[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;font-size:16px;padding:.7rem 1rem;background-color:#71b8c3;color:#fff;border-radius:8px;text-decoration:unset;font-weight:600}.landing[_ngcontent-%COMP%]   .top-menu[_ngcontent-%COMP%]{width:100%;min-height:64px;margin:unset;padding:1.5rem 5rem 0;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background-color:var(--color-background);z-index:9999}.landing[_ngcontent-%COMP%]   .top-menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex}.landing[_ngcontent-%COMP%]   .top-menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;padding:.5rem 1rem;text-align:center;height:-moz-fit-content;height:fit-content;overflow:hidden;word-break:keep-all;text-overflow:ellipsis}.landing[_ngcontent-%COMP%]   .top-menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){border-right:solid #71b8c3 1px}.landing[_ngcontent-%COMP%]   .top-menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:unset;color:inherit}.landing[_ngcontent-%COMP%]   .top-menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{border-bottom:2px solid #71b8c3}.landing[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]{min-height:300px;display:grid;grid-template-columns:2fr 1fr;margin-top:4rem;position:relative;padding:0 5rem}.landing[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .introduction[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;position:relative;z-index:10;padding-right:5rem}.landing[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .introduction[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#71b8c3;font-size:2.5rem}.landing[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .introduction[_ngcontent-%COMP%]   .introduction-info[_ngcontent-%COMP%]{width:60%;display:flex;flex-direction:column;font-size:x-large;gap:1rem}.landing[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .introduction[_ngcontent-%COMP%]   .introduction-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex}.landing[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .introduction[_ngcontent-%COMP%]   .introduction-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none}.landing[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .introduction[_ngcontent-%COMP%]   .introduction-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child):before{content:"\\2022";color:#71b8c3;padding:0 .5em}.landing[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .introduction-image[_ngcontent-%COMP%]{position:relative;z-index:9}.landing[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .introduction-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.landing[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .flower-shadow[_ngcontent-%COMP%], .landing[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .flower-shadow-right[_ngcontent-%COMP%], .landing[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .flower-shadow-left[_ngcontent-%COMP%]{width:16px;height:75%;position:absolute;background-color:#71b8c3;filter:blur(40px)}.landing[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .flower-shadow-left[_ngcontent-%COMP%]{left:0}.landing[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .flower-shadow-right[_ngcontent-%COMP%]{bottom:0;right:0}.landing[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .flower-9[_ngcontent-%COMP%]:after{content:url(flower-9.4580e01663c78775.png);position:absolute;z-index:-1;left:-88px}.landing[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   .flower-8[_ngcontent-%COMP%]{position:absolute;top:25%;left:0}.landing[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{min-height:300px;padding:1.5rem 5rem;overflow:hidden}.landing[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]{background-color:#6fb8c333;display:flex;flex-direction:column;gap:1rem;position:relative;z-index:9}.landing[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .activities-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr}.landing[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .activities-content[_ngcontent-%COMP%]   .activities-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;display:flex;flex-direction:column;gap:1rem}.landing[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .activities-content[_ngcontent-%COMP%]   .activities-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:50%;padding:.5rem 1rem;background-color:#fff;border-radius:8px;text-align:center;color:#71b8c3;font-weight:600;cursor:pointer}.landing[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .activities-content[_ngcontent-%COMP%]   .activities-explanation[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:space-between}.landing[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .activities-content[_ngcontent-%COMP%]   .activities-explanation[_ngcontent-%COMP%]   .activities-explanation-topics[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr}.landing[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .activities-content[_ngcontent-%COMP%]   .activities-explanation[_ngcontent-%COMP%]   .activities-explanation-topics[_ngcontent-%COMP%]   .activities-explanation-topic[_ngcontent-%COMP%]{padding:1rem;text-align:justify}.landing[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .activities-content[_ngcontent-%COMP%]   .activities-explanation[_ngcontent-%COMP%]   .activities-explanation-topics[_ngcontent-%COMP%]   .activities-explanation-topic[_ngcontent-%COMP%]:not(:last-child){border-right:solid 1px #71b8c3}.landing[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .selected-activity[_ngcontent-%COMP%]{border:solid 1px #71b8c3}.landing[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .flower-12[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;z-index:-1}.landing[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .flower-4[_ngcontent-%COMP%]{position:absolute;right:0;top:0;transform:rotate(-30deg);z-index:-1}.landing[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;position:relative;z-index:9}.landing[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-items[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12rem}.landing[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-items[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]{color:#fff;display:flex;flex-direction:column;border-radius:8px;background-color:#71b8c3;align-items:center;gap:1rem;padding:2rem;font-size:larger;text-align:center;position:relative}.landing[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-items[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40%}.landing[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-items[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{color:#71b8c3;background-color:#fff}.landing[_ngcontent-%COMP%]   .flower-7[_ngcontent-%COMP%]:before{content:url(flower-7.10fff4a38a60e62c.png);position:absolute;z-index:-1;right:-64px;top:16%}.landing[_ngcontent-%COMP%]   .flower-3[_ngcontent-%COMP%]:after{content:url(flower-3.ff3682d489228c4d.png);position:absolute;z-index:-1;left:-121px;top:16%;transform:rotate(-30deg)}.landing[_ngcontent-%COMP%]   .box-shadow[_ngcontent-%COMP%], .landing[_ngcontent-%COMP%]   .top-menu-scrolled[_ngcontent-%COMP%]{box-shadow:0 0 8px #00000080}.landing[_ngcontent-%COMP%]   .top-menu-scrolled[_ngcontent-%COMP%]{padding:1rem}']}),n})()}];let nt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[le.Bz.forChild(tt),le.Bz]}),n})(),ot=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[P.ez,nt,Be]}),n})()}}]);