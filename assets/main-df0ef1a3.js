class B{constructor(e){this.properties=e??[]}get(e){const r=this.properties.filter(n=>n.name===e).map(n=>n.value);if(r.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(r.length!==0)return r[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,r){const n=this.get(e);if(n!==void 0){if(r!=="json"&&typeof n!==r)throw new Error('Expected property "'+e+'" to have type "'+r+'"');return n}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,r){const n=this.get(e);if(n===void 0)throw new Error('Property "'+e+'" is missing');if(r!=="json"&&typeof n!==r)throw new Error('Expected property "'+e+'" to have type "'+r+'"');return n}getType(e){const r=this.properties.filter(n=>n.name===e).map(n=>n.type);if(r.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(r.length!==0)return r[0]}}const V="https://unpkg.com/@workadventure/scripting-api-extra@1.4.6/dist";class ne{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new B(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function O(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(V+"/configuration.html"+e)}async function ae(t,e){const r=await WA.room.getTiledMap(),n=new Map;return $(r.layers,n,t,e),n}function $(t,e,r,n){for(const a of t)if(a.type==="objectgroup"){for(const o of a.objects)if(o.type==="variable"||o.class==="variable"){if(r&&a.name!==r||n&&!n.includes(o.name))continue;e.set(o.name,new ne(o))}}else a.type==="group"&&$(a.layers,e,r,n)}let R;async function M(){return R===void 0&&(R=oe()),R}async function oe(){return se(await WA.room.getTiledMap())}function se(t){const e=new Map;return J(t.layers,"",e),e}function J(t,e,r){for(const n of t)n.type==="group"?J(n.layers,e+n.name+"/",r):(n.name=e+n.name,r.set(n.name,n))}async function ie(){const t=await M(),e=[];for(const r of t.values())if(r.type==="objectgroup")for(const n of r.objects)(n.type==="area"||n.class==="area")&&e.push(n);return e}function ue(t){let e=1/0,r=1/0,n=0,a=0;const o=t.data;if(typeof o=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<t.height;i++)for(let u=0;u<t.width;u++)o[u+i*t.width]!==0&&(e=Math.min(e,u),a=Math.max(a,u),r=Math.min(r,i),n=Math.max(n,i));return{top:r,left:e,right:a+1,bottom:n+1}}function X(t){let e=1/0,r=1/0,n=0,a=0;for(const o of t){const i=ue(o);i.left<e&&(e=i.left),i.top<r&&(r=i.top),i.right>a&&(a=i.right),i.bottom>n&&(n=i.bottom)}return{top:r,left:e,right:a,bottom:n}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var le=Object.prototype.toString,z=Array.isArray||function(e){return le.call(e)==="[object Array]"};function x(t){return typeof t=="function"}function ce(t){return z(t)?"array":typeof t}function I(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function _(t,e){return t!=null&&typeof t=="object"&&e in t}function pe(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var fe=RegExp.prototype.test;function de(t,e){return fe.call(t,e)}var he=/\S/;function be(t){return!de(he,t)}var ge={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function me(t){return String(t).replace(/[&<>"'`=\/]/g,function(r){return ge[r]})}var ye=/\s*/,Ae=/\s+/,H=/\s*=/,We=/\s*\}/,ve=/#|\^|\/|>|\{|&|=|!/;function we(t,e){if(!t)return[];var r=!1,n=[],a=[],o=[],i=!1,u=!1,c="",d=0;function b(){if(i&&!u)for(;o.length;)delete a[o.pop()];else o=[];i=!1,u=!1}var g,m,P;function S(k){if(typeof k=="string"&&(k=k.split(Ae,2)),!z(k)||k.length!==2)throw new Error("Invalid tags: "+k);g=new RegExp(I(k[0])+"\\s*"),m=new RegExp("\\s*"+I(k[1])),P=new RegExp("\\s*"+I("}"+k[1]))}S(e||W.tags);for(var p=new T(t),s,y,w,C,U,L;!p.eos();){if(s=p.pos,w=p.scanUntil(g),w)for(var Q=0,te=w.length;Q<te;++Q)C=w.charAt(Q),be(C)?(o.push(a.length),c+=C):(u=!0,r=!0,c+=" "),a.push(["text",C,s,s+1]),s+=1,C===`
`&&(b(),c="",d=0,r=!1);if(!p.scan(g))break;if(i=!0,y=p.scan(ve)||"name",p.scan(ye),y==="="?(w=p.scanUntil(H),p.scan(H),p.scanUntil(m)):y==="{"?(w=p.scanUntil(P),p.scan(We),p.scanUntil(m),y="&"):w=p.scanUntil(m),!p.scan(m))throw new Error("Unclosed tag at "+p.pos);if(y==">"?U=[y,w,s,p.pos,c,d,r]:U=[y,w,s,p.pos],d++,a.push(U),y==="#"||y==="^")n.push(U);else if(y==="/"){if(L=n.pop(),!L)throw new Error('Unopened section "'+w+'" at '+s);if(L[1]!==w)throw new Error('Unclosed section "'+L[1]+'" at '+s)}else y==="name"||y==="{"||y==="&"?u=!0:y==="="&&S(w)}if(b(),L=n.pop(),L)throw new Error('Unclosed section "'+L[1]+'" at '+p.pos);return ke(Pe(a))}function Pe(t){for(var e=[],r,n,a=0,o=t.length;a<o;++a)r=t[a],r&&(r[0]==="text"&&n&&n[0]==="text"?(n[1]+=r[1],n[3]=r[3]):(e.push(r),n=r));return e}function ke(t){for(var e=[],r=e,n=[],a,o,i=0,u=t.length;i<u;++i)switch(a=t[i],a[0]){case"#":case"^":r.push(a),n.push(a),r=a[4]=[];break;case"/":o=n.pop(),o[5]=a[2],r=n.length>0?n[n.length-1][4]:e;break;default:r.push(a)}return e}function T(t){this.string=t,this.tail=t,this.pos=0}T.prototype.eos=function(){return this.tail===""};T.prototype.scan=function(e){var r=this.tail.match(e);if(!r||r.index!==0)return"";var n=r[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n};T.prototype.scanUntil=function(e){var r=this.tail.search(e),n;switch(r){case-1:n=this.tail,this.tail="";break;case 0:n="";break;default:n=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=n.length,n};function E(t,e){this.view=t,this.cache={".":this.view},this.parent=e}E.prototype.push=function(e){return new E(e,this)};E.prototype.lookup=function(e){var r=this.cache,n;if(r.hasOwnProperty(e))n=r[e];else{for(var a=this,o,i,u,c=!1;a;){if(e.indexOf(".")>0)for(o=a.view,i=e.split("."),u=0;o!=null&&u<i.length;)u===i.length-1&&(c=_(o,i[u])||pe(o,i[u])),o=o[i[u++]];else o=a.view[e],c=_(a.view,e);if(c){n=o;break}a=a.parent}r[e]=n}return x(n)&&(n=n.call(this.view)),n};function A(){this.templateCache={_cache:{},set:function(e,r){this._cache[e]=r},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}A.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};A.prototype.parse=function(e,r){var n=this.templateCache,a=e+":"+(r||W.tags).join(":"),o=typeof n<"u",i=o?n.get(a):void 0;return i==null&&(i=we(e,r),o&&n.set(a,i)),i};A.prototype.render=function(e,r,n,a){var o=this.getConfigTags(a),i=this.parse(e,o),u=r instanceof E?r:new E(r,void 0);return this.renderTokens(i,u,n,e,a)};A.prototype.renderTokens=function(e,r,n,a,o){for(var i="",u,c,d,b=0,g=e.length;b<g;++b)d=void 0,u=e[b],c=u[0],c==="#"?d=this.renderSection(u,r,n,a,o):c==="^"?d=this.renderInverted(u,r,n,a,o):c===">"?d=this.renderPartial(u,r,n,o):c==="&"?d=this.unescapedValue(u,r):c==="name"?d=this.escapedValue(u,r,o):c==="text"&&(d=this.rawValue(u)),d!==void 0&&(i+=d);return i};A.prototype.renderSection=function(e,r,n,a,o){var i=this,u="",c=r.lookup(e[1]);function d(m){return i.render(m,r,n,o)}if(c){if(z(c))for(var b=0,g=c.length;b<g;++b)u+=this.renderTokens(e[4],r.push(c[b]),n,a,o);else if(typeof c=="object"||typeof c=="string"||typeof c=="number")u+=this.renderTokens(e[4],r.push(c),n,a,o);else if(x(c)){if(typeof a!="string")throw new Error("Cannot use higher-order sections without the original template");c=c.call(r.view,a.slice(e[3],e[5]),d),c!=null&&(u+=c)}else u+=this.renderTokens(e[4],r,n,a,o);return u}};A.prototype.renderInverted=function(e,r,n,a,o){var i=r.lookup(e[1]);if(!i||z(i)&&i.length===0)return this.renderTokens(e[4],r,n,a,o)};A.prototype.indentPartial=function(e,r,n){for(var a=r.replace(/[^ \t]/g,""),o=e.split(`
`),i=0;i<o.length;i++)o[i].length&&(i>0||!n)&&(o[i]=a+o[i]);return o.join(`
`)};A.prototype.renderPartial=function(e,r,n,a){if(n){var o=this.getConfigTags(a),i=x(n)?n(e[1]):n[e[1]];if(i!=null){var u=e[6],c=e[5],d=e[4],b=i;c==0&&d&&(b=this.indentPartial(i,d,u));var g=this.parse(b,o);return this.renderTokens(g,r,n,b,a)}}};A.prototype.unescapedValue=function(e,r){var n=r.lookup(e[1]);if(n!=null)return n};A.prototype.escapedValue=function(e,r,n){var a=this.getConfigEscape(n)||W.escape,o=r.lookup(e[1]);if(o!=null)return typeof o=="number"&&a===W.escape?String(o):a(o)};A.prototype.rawValue=function(e){return e[1]};A.prototype.getConfigTags=function(e){return z(e)?e:e&&typeof e=="object"?e.tags:void 0};A.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!z(e))return e.escape};var W={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){N.templateCache=t},get templateCache(){return N.templateCache}},N=new A;W.clearCache=function(){return N.clearCache()};W.parse=function(e,r){return N.parse(e,r)};W.render=function(e,r,n,a){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ce(e)+'" was given as the first argument for mustache#render(template, view, partials)');return N.render(e,r,n,a)};W.escape=me;W.Scanner=T;W.Context=E;W.Writer=A;class Y{constructor(e,r){this.template=e,this.state=r,this.ast=W.parse(e)}getValue(){return this.value===void 0&&(this.value=W.render(this.template,this.state)),this.value}onChange(e){const r=[];for(const n of this.getUsedVariables().values())r.push(this.state.onVariableChange(n).subscribe(()=>{const a=W.render(this.template,this.state);a!==this.value&&(this.value=a,e(this.value))}));return{unsubscribe:()=>{for(const n of r)n.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,r){for(const n of e){const a=n[0],o=n[1],i=n[4];["name","&","#","^"].includes(a)&&r.add(o),i!==void 0&&typeof i!="string"&&this.recursiveGetUsedVariables(i,r)}}}async function Se(){var t;const e=await ie();for(const r of e){const n=(t=r.properties)!==null&&t!==void 0?t:[];for(const a of n){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const o=new Y(a.value,WA.state);if(o.isPureString())continue;const i=o.getValue();await Z(r.name,a.name,i),o.onChange(async u=>{await Z(r.name,a.name,u)})}}}async function Le(){var t;const e=await M();for(const[r,n]of e.entries())if(n.type!=="objectgroup"){const a=(t=n.properties)!==null&&t!==void 0?t:[];for(const o of a){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const i=new Y(o.value,WA.state);if(i.isPureString())continue;const u=i.getValue();q(r,o.name,u),i.onChange(c=>{q(r,o.name,c)})}}}async function Z(t,e,r){console.log(t),(await WA.room.area.get(t)).setProperty(e,r)}function q(t,e,r){WA.room.setProperty(t,e,r),e==="visible"&&(r?WA.room.showLayer(t):WA.room.hideLayer(t))}let G,j=0,D=0;function K(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const r of e.split(`
`))WA.room.showLayer(r);e=t.properties.mustGetString("closeLayer");for(const r of e.split(`
`))WA.room.hideLayer(r)}else{let e=t.properties.mustGetString("openLayer");for(const r of e.split(`
`))WA.room.hideLayer(r);e=t.properties.mustGetString("closeLayer");for(const r of e.split(`
`))WA.room.showLayer(r)}}function Ee(t){const e=t.properties.getString("openSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const a=re(t.properties.mustGetString("openLayer").split(`
`));if(a>r)return;n=1-a/r}e&&WA.sound.loadSound(e).play({volume:n})}function ze(t){const e=t.properties.getString("closeSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const a=re(t.properties.mustGetString("closeLayer").split(`
`));if(a>r)return;n=1-a/r}e&&WA.sound.loadSound(e).play({volume:n})}function ee(t){return t.map(e=>G.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function re(t){const e=ee(t),r=X(e),n=((r.right-r.left)/2+r.left)*32,a=((r.bottom-r.top)/2+r.top)*32;return Math.sqrt(Math.pow(j-n,2)+Math.pow(D-a,2))}function Ce(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Ee(t):ze(t),K(t)}),K(t)}function Be(t,e,r,n){const a=t.name;let o,i,u=!1;const c=r.getString("tag");let d=!0;c&&!WA.player.tags.includes(c)&&(d=!1);const b=!!c;function g(){var p;o&&o.remove(),o=WA.ui.displayActionMessage({message:(p=r.getString("closeTriggerMessage"))!==null&&p!==void 0?p:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var p;o&&o.remove(),o=WA.ui.displayActionMessage({message:(p=r.getString("openTriggerMessage"))!==null&&p!==void 0?p:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,g()}})}function P(p){const s=X(ee(e.properties.mustGetString("closeLayer").split(`
`)));i=WA.room.website.create({name:"doorKeypad"+p,url:n+"/keypad.html#"+encodeURIComponent(p),position:{x:s.right*32,y:s.top*32,width:32*3,height:32*4},allowApi:!0})}function S(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterLayer(a).subscribe(()=>{if(u=!0,r.getBoolean("autoOpen")&&d){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(b&&!d||!b)&&(r.getString("code")||r.getString("codeVariable"))){P(a);return}d&&(WA.state[e.name]?g():m())}),WA.room.onLeaveLayer(a).subscribe(()=>{u=!1,r.getBoolean("autoClose")&&(WA.state[e.name]=!1),o&&o.remove(),S()}),WA.state.onVariableChange(e.name).subscribe(()=>{u&&(!r.getBoolean("autoClose")&&WA.state[e.name]===!0&&g(),i&&WA.state[e.name]===!0&&S(),!r.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function Ne(t){const e=t.properties.mustGetString("bellSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const a=Math.sqrt(Math.pow(t.x-j,2)+Math.pow(t.y-D,2));if(a>r)return;n=1-a/r}WA.sound.loadSound(e).play({volume:n})}function Me(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Ne(t)})}function Te(t,e,r){let n;const a=e.getString("bellPopup");WA.room.onEnterLayer(r).subscribe(()=>{var o;a?n=WA.ui.openPopup(a,"",[{label:(o=e.getString("bellButtonText"))!==null&&o!==void 0?o:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(r).subscribe(()=>{n&&(n.close(),n=void 0)})}async function Ue(t){t=t??V;const e=await ae();G=await M();for(const r of e.values())r.properties.get("door")&&Ce(r),r.properties.get("bell")&&Me(r);for(const r of G.values()){const n=new B(r.properties),a=n.getString("doorVariable");if(a&&r.type==="tilelayer"){const i=e.get(a);if(i===void 0)throw new Error('Cannot find variable "'+a+'" referred in the "doorVariable" property of layer "'+r.name+'"');Be(r,i,n,t)}const o=n.getString("bellVariable");o&&Te(o,n,r.name)}WA.player.onPlayerMove(r=>{j=r.x,D=r.y})}function Qe(t,e){const r=t.getString("bindVariable");if(r){const n=t.get("enterValue"),a=t.get("leaveValue"),o=t.getString("triggerMessage"),i=t.getString("tag");Re(r,e,n,a,o,i)}}function Re(t,e,r,n,a,o){o&&!WA.player.tags.includes(o)||(r!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{a||(WA.state[t]=r)}),n!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=n}))}async function Ie(){const t=await M();for(const e of t.values()){const r=new B(e.properties);Qe(r,e.name)}}let F;async function Ge(t){const e=await WA.room.getTiledMap();t=t??V,F=await M();const r=e.layers.find(n=>n.name==="configuration");if(r){const a=new B(r.properties).getString("tag");(!a||WA.player.tags.includes(a))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const o of F.values()){const i=new B(o.properties),u=i.getString("openConfig");u&&o.type==="tilelayer"&&Ve(u.split(","),o.name,i)}}}function Ve(t,e,r){let n;const a=r.getString("openConfigAdminTag");let o=!0;a&&!WA.player.tags.includes(a)&&(o=!1);function i(){var c;n&&n.remove(),n=WA.ui.displayActionMessage({message:(c=r.getString("openConfigTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE or touch here to configure",callback:()=>O(t)})}function u(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const c=r.getString("openConfigTrigger");o&&(c&&c==="onaction"?i():O(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{n&&n.remove(),u()})}function xe(){return WA.onInit().then(()=>{Ue().catch(t=>console.error(t)),Ie().catch(t=>console.error(t)),Ge().catch(t=>console.error(t)),Le().catch(t=>console.error(t)),Se().catch(t=>console.error(t))}).catch(t=>console.error(t))}console.log("Script started successfully");let f,v;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.area.onEnter("clock").subscribe(()=>{const s=new Date,y=s.getHours()+":"+s.getMinutes();f=WA.ui.openPopup("clockPopup","It's "+y,[])}),WA.room.area.onLeave("clock").subscribe(h),WA.room.area.onEnter("Wegweiser").subscribe(()=>{f=WA.ui.openPopup("WegweiserPopup",`Herzlich Willkommen im Podcast Adventure. Werter Wissbegieriger, lasst mich euch ein paar nützliche Informationen geben. In diesem Adventure gibt es eine Farbordnung, die euch beim Erkunden der Welt unterstützen wird. 
Grün = Austausch Bereich
Gelb = Quiz
Blau = Lektüre
Rot = Ruhe Bereich
Weiß = Audio Bereich
Dunkelblau = NPCsIm Unteren-Bereich findest du verschiedene Interaktionen, von Informationen zu Podcasts, einigen Beispielen von Podcasts bis hin zu einem Quiz, sowie einem Austausch-Bereich. Im Äußeren-Bereich findest du meinen Bruder, der dir dann erzählt, was es draußen so zu entdecken gibt. Über die Treppe kommst du in den Oberen-Bereich, dort findest du Informationen zur Erstellung von Podcasts.`,[])}),WA.room.area.onLeave("Wegweiser").subscribe(h),WA.room.area.onEnter("WegweiserAußen").subscribe(()=>{f=WA.ui.openPopup("WegweiserPopupAußen","Hallo Abenteurer, mein Bruder scheint euch zu mir geschickt zu haben. Also, dann lass mich dir erzählen, was du hier so alles entdecken kannst. Auch hier gibt es verschiedene Interaktionsmöglichkeiten, mit dem Farbschema bist du ja schon vertraut. Also im Äußeren-Bereich findest du hauptsächlich Informationen zum Konsum von Podcasts und der Verdeutlichung des Zusammenhangs von Podcasts und mobile-Learning.",[])}),WA.room.area.onLeave("WegweiserAußen").subscribe(h),WA.room.area.onEnter("WegweiserUpper1").subscribe(()=>{f=WA.ui.openPopup("WegweiserPopupUpper1","Lass uns über die Erstellung von Podcasts reden.",[])}),WA.room.area.onLeave("WegweiserUpper1").subscribe(h),WA.room.area.onEnter("WegweiserUpper2").subscribe(()=>{f=WA.ui.openPopup("WegweiserPopupUpper2","Also zuerst muss er aufgenommen werden.",[])}),WA.room.area.onLeave("WegweiserUpper2").subscribe(h),WA.room.area.onEnter("WegweiserUpper3").subscribe(()=>{f=WA.ui.openPopup("WegweiserPopupUpper3","Das Abmischen dauert aber lange...",[])}),WA.room.area.onLeave("WegweiserUpper3").subscribe(h),WA.room.area.onEnter("WegweiserUpper4").subscribe(()=>{f=WA.ui.openPopup("WegweiserPopupUpper4","…ist das aufwändig...",[])}),WA.room.area.onLeave("WegweiserUpper4").subscribe(h),WA.room.area.onEnter("WegweiserUpper5").subscribe(()=>{f=WA.ui.openPopup("WegweiserPopupUpper5","Gleich ist der Upload fertig.",[])}),WA.room.area.onLeave("WegweiserUpper5").subscribe(h),WA.room.area.onEnter("WegweiserUpper6").subscribe(()=>{f=WA.ui.openPopup("WegweiserPopupUpper6","Nur noch freischalten / freigeben.",[])}),WA.room.area.onLeave("WegweiserUpper6").subscribe(h),WA.room.area.onEnter("WegweiserUpper7").subscribe(()=>{f=WA.ui.openPopup("WegweiserPopupUpper7","Ist der Podcast schon draußen?",[])}),WA.room.area.onLeave("WegweiserUpper7").subscribe(h),WA.room.area.onEnter("WegweiserUpper8").subscribe(()=>{f=WA.ui.openPopup("WegweiserPopupUpper8","Ja, ich bin schon mittendrin.",[])}),WA.room.area.onLeave("WegweiserUpper8").subscribe(h);function t(){f=WA.ui.openPopup("QuizPopup1","Wie werden Podcasts erstellt?",[{label:"Aufnehmen, Abmischen, Hochladen, Anhören",className:"primary",callback:s=>{s.close(),l()}},{label:"Abmischen, Aufnehmen, Anhören, Hochladen",className:"primary",callback:s=>{s.close(),l()}},{label:"Quatschen, Hochladen, Abmischen, Anhören",className:"primary",callback:s=>{s.close(),l()}},{label:"Aufnehmen, Hochladen, Anhören",className:"primary",callback:s=>{s.close(),l()}}]),v=WA.room.area.onLeave("Quiz1").subscribe(()=>{h(),l()})}WA.room.area.onEnter("Quiz1").subscribe(t);function e(){f=WA.ui.openPopup("QuizPopup2","Welche der folgenden Formate sind keine Art von Podcasts?",[{label:"Laber-Podcast",className:"primary",callback:s=>{s.close(),l()}},{label:"Promi-Podcast",className:"primary",callback:s=>{s.close(),l()}},{label:"Bade-Podcast",className:"primary",callback:s=>{s.close(),l()}},{label:"Experten-Podcast",className:"primary",callback:s=>{s.close(),l()}}]),v=WA.room.area.onLeave("Quiz2").subscribe(()=>{h(),l()})}WA.room.area.onEnter("Quiz2").subscribe(e);function r(){f=WA.ui.openPopup("QuizPopup3","Was sind Vorteile von Laber-Podcasts?",[{label:"Relativ günstig, kaum Vorbereitung",className:"primary",callback:s=>{s.close(),l()}},{label:"Reichweitensteigerung durch Promibonus",className:"primary",callback:s=>{s.close(),l()}},{label:"Gut zum Anwerben neuer Mitarbeiter",className:"primary",callback:s=>{s.close(),l()}},{label:"Ermöglicht Einblicke in Firmen",className:"primary",callback:s=>{s.close(),l()}}]),v=WA.room.area.onLeave("Quiz3").subscribe(()=>{h(),l()})}WA.room.area.onEnter("Quiz3").subscribe(r);function n(){f=WA.ui.openPopup("QuizPopup4","Wo kann man keinen Podcast hören?",[{label:"Im Bus",className:"primary",callback:s=>{s.close(),l()}},{label:"Im Park",className:"primary",callback:s=>{s.close(),l()}},{label:"Beim Tauchen",className:"primary",callback:s=>{s.close(),l()}},{label:"Beim Putzen",className:"primary",callback:s=>{s.close(),l()}}]),v=WA.room.area.onLeave("Quiz4").subscribe(()=>{h(),l()})}WA.room.area.onEnter("Quiz4").subscribe(n);function a(){f=WA.ui.openPopup("QuizPopup5","Platzhalterfrage",[{label:"Antwort1",className:"primary",callback:s=>{s.close(),l()}},{label:"Antwort2",className:"primary",callback:s=>{s.close(),l()}},{label:"Antwort3",className:"primary",callback:s=>{s.close(),l()}},{label:"Antwort4",className:"primary",callback:s=>{s.close(),l()}}]),v=WA.room.area.onLeave("Quiz5").subscribe(()=>{h(),l()})}WA.room.area.onEnter("Quiz5").subscribe(a);function o(){f=WA.ui.openPopup("QuizPopup6","Platzhalterfrage",[{label:"Antwort1",className:"primary",callback:s=>{s.close(),l()}},{label:"Antwort2",className:"primary",callback:s=>{s.close(),l()}},{label:"Antwort3",className:"primary",callback:s=>{s.close(),l()}},{label:"Antwort4",className:"primary",callback:s=>{s.close(),l()}}]),v=WA.room.area.onLeave("Quiz6").subscribe(()=>{h(),l()})}WA.room.area.onEnter("Quiz6").subscribe(o);function i(){f=WA.ui.openPopup("QuizPopup7","Platzhalterfrage",[{label:"Antwort1",className:"primary",callback:s=>{s.close(),l()}},{label:"Antwort2",className:"primary",callback:s=>{s.close(),l()}},{label:"Antwort3",className:"primary",callback:s=>{s.close(),l()}},{label:"Antwort4",className:"primary",callback:s=>{s.close(),l()}}]),v=WA.room.area.onLeave("Quiz7").subscribe(()=>{h(),l()})}WA.room.area.onEnter("Quiz7").subscribe(i);function u(){f=WA.ui.openPopup("QuizPopup8","Platzhalterfrage",[{label:"Antwort1",className:"primary",callback:s=>{s.close(),l()}},{label:"Antwort2",className:"primary",callback:s=>{s.close(),l()}},{label:"Antwort3",className:"primary",callback:s=>{s.close(),l()}},{label:"Antwort4",className:"primary",callback:s=>{s.close(),l()}}]),v=WA.room.area.onLeave("Quiz8").subscribe(()=>{h(),l()})}WA.room.area.onEnter("Quiz8").subscribe(u);function c(){f=WA.ui.openPopup("QuizPopup9","Wie werden Podcasts abonniert?",[{label:"Über RSS",className:"primary",callback:s=>{s.close(),l()}},{label:"Über Bluetooth",className:"primary",callback:s=>{s.close(),l()}},{label:"Über Infrarot",className:"primary",callback:s=>{s.close(),l()}},{label:"Per Post",className:"primary",callback:s=>{s.close(),l()}}]),v=WA.room.area.onLeave("Quiz9").subscribe(()=>{h(),l()})}WA.room.area.onEnter("Quiz9").subscribe(c);function d(){f=WA.ui.openPopup("QuizPopup10","Warum sind Podcasts Teil des mobile Learning?",[{label:"Da man sie nur zu bestimmten Zeiten hören kann",className:"primary",callback:s=>{s.close(),l()}},{label:"Da man sie nur an bestimmten Orten hören kann",className:"primary",callback:s=>{s.close(),l()}},{label:"Da die sowohl Zeit- als auch ortsunabhängig sind",className:"primary",callback:s=>{s.close(),l()}},{label:"Da es in ihnen nur um das Automobil geht",className:"primary",callback:s=>{s.close(),l()}}]),v=WA.room.area.onLeave("Quiz10").subscribe(()=>{h(),l()})}WA.room.area.onEnter("Quiz10").subscribe(d),xe().then(()=>{console.log("Scripting API Extra ready")}).catch(s=>console.error(s)),WA.room.area.onEnter("Arbeitsweg").subscribe(()=>{f=WA.ui.openPopup("ArbeitswegPopup","Ihr seid auf dem Weg zur Arbeit oder auf dem Weg nach Hause, auch hier könnt ihr die Zeit nutzen, um euch einen Podcast anzuhören.",[]),g.stop(),b.stop(),m.stop(),P.stop(),b.play(S)}),WA.room.area.onLeave("Arbeitsweg").subscribe(h),WA.room.area.onEnter("Arbeit").subscribe(()=>{f=WA.ui.openPopup("ArbeitPopup","In einigen Berufen könnt ihr sogar während der Arbeit einen Podcast hören, zum Beispiel als Berufskraftfahrer oder als Paketzusteller.",[]),g.stop(),b.stop(),m.stop(),P.stop(),g.play(p)}),WA.room.area.onLeave("Arbeit").subscribe(h),WA.room.area.onEnter("Sportplatz").subscribe(()=>{f=WA.ui.openPopup("SportplatzPopup","Podcasts können bei verschiedenen Aktivitäten gehört werden, zum Beispiel beim Sport oder beim Training im Fitnessstudio.",[]),g.stop(),b.stop(),m.stop(),P.stop(),m.play(p)}),WA.room.area.onLeave("Sportplatz").subscribe(h),WA.room.area.onEnter("Reise").subscribe(()=>{f=WA.ui.openPopup("ReisePopup","Seid ihr auf dem Weg in den Urlaub und habt eine Menge Zeit zu überbrücken? Dann könnt ihr genau diese Zeit nutzen, um einen Podcast zu hören.",[]),g.stop(),b.stop(),m.stop(),P.stop(),P.play(p)}),WA.room.area.onLeave("Reise").subscribe(h);var b=WA.sound.loadSound("/Arbeitsweg.mp3"),g=WA.sound.loadSound("/Arbeit.mp3"),m=WA.sound.loadSound("/Sportplatz.mp3"),P=WA.sound.loadSound("/Reise.mp3"),S={volume:1,loop:!1,rate:1,detune:1,delay:0,seek:.7,mute:!1},p={volume:1,loop:!1,rate:1,detune:1,delay:0,seek:1,mute:!1}}).catch(t=>console.error(t));function h(){f!==void 0&&(f.close(),f=void 0)}function l(){v&&(v.unsubscribe(),v=void 0)}