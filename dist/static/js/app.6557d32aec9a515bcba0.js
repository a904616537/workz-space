webpackJsonp([9],{"+708":function(t,e,n){"use strict";var r={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var t=this;n("JAHf"),this.$nextTick(function(){t.initParticleJS(t.color,t.particleOpacity,t.particlesNumber,t.shapeType,t.particleSize,t.linesColor,t.linesWidth,t.lineLinked,t.lineOpacity,t.linesDistance,t.moveSpeed,t.hoverEffect,t.hoverMode,t.clickEffect,t.clickMode)})},methods:{initParticleJS:function(t,e,n,r,i,o,a,c,u,s,l,p,f,d,h){particlesJS("particles-js",{particles:{number:{value:n,density:{enable:!0,value_area:800}},color:{value:t},shape:{type:r,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:e,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:i,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:c,distance:s,color:o,opacity:u,width:a},move:{enable:!0,speed:l,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:p,mode:f},onclick:{enable:d,mode:h},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},i={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"particles-js",color:t.color,particleOpacity:t.particleOpacity,linesColor:t.linesColor,particlesNumber:t.particlesNumber,shapeType:t.shapeType,particleSize:t.particleSize,linesWidth:t.linesWidth,lineLinked:t.lineLinked,lineOpacity:t.lineOpacity,linesDistance:t.linesDistance,moveSpeed:t.moveSpeed,hoverEffect:t.hoverEffect,hoverMode:t.hoverMode,clickEffect:t.clickEffect,clickMode:t.clickMode}})},staticRenderFns:[]},o=n("VU/8")(r,i,!1,null,null,null);e.a=o.exports},"+BTi":function(t,e){},"+IbM":function(t,e){},0:function(t,e){},"1uuo":function(t,e){},Dzb6:function(t,e){},FhoZ:function(t,e,n){"use strict";(function(e){const r=n("o/zv");t.exports={dev:{assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{},host:"localhost",port:8080,autoOpenBrowser:!1,errorOverlay:!0,notifyOnErrors:!0,poll:!1,requestUrl:"http://localhost:8481",devtool:"cheap-module-eval-source-map",cacheBusting:!0,disableHostCheck:!0,cssSourceMap:!0},build:{index:r.resolve(e,"../dist/index.html"),assetsRoot:r.resolve(e,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"/",productionSourceMap:!0,devtool:"#source-map",requestUrl:"http://service.workspace.h-fish.vip",productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:Object({NODE_ENV:"production"}).npm_config_report}}}).call(e,"/")},GXEp:function(t,e){},Iun5:function(t,e){},LL4n:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("tJtB"),n("+BTi");var r=n("+vil"),i=n.n(r),o=(n("dT9R"),n("lWn4")),a=n.n(o),c=(n("jAzQ"),n("wOhx")),u=n.n(c),s=(n("X+ky"),n("HJMx")),l=n.n(s),p=(n("Iun5"),n("ttjG")),f=n.n(p),d=(n("LL4n"),n("BrEC")),h=n.n(d),m=(n("U/ZW"),n("+nRk")),v=n.n(m),b=(n("Dzb6"),n("o6kb")),g=n.n(b),_=(n("GXEp"),n("mtrD")),y=n.n(_),k=n("7+uW"),w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var E=n("VU/8")({name:"App",methods:{},created:function(){}},w,!1,function(t){n("+IbM")},null,null).exports,z=n("/ocq"),P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},P,!1,function(t){n("1uuo")},"data-v-d8ec41bc",null).exports;k.default.use(z.a);var S,j=new z.a({mode:"history",routes:[{path:"/",component:function(t){return n.e(7).then(function(){var e=[n("esMn")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"},children:[{path:"/",component:function(t){return n.e(1).then(function(){var e=[n("esL9")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/profile",component:function(t){return n.e(6).then(function(){var e=[n("TBEP")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/contact",component:function(t){return n.e(2).then(function(){var e=[n("mE2b")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/wishlist",component:function(t){return n.e(0).then(function(){var e=[n("YzDs")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"}}]},{path:"/workspace",component:function(t){return n.e(5).then(function(){var e=[n("mnA/")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"}},{path:"/follow",component:function(t){return n.e(4).then(function(){var e=[n("yQvA")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"}},{path:"/testimonials",component:function(t){return n.e(3).then(function(){var e=[n("DnaU")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"}}]}),T=n("iqGf"),x=n.n(T),M=n("/kJX"),O=n.n(M),W=n("mM94"),N=n("dAEq"),C=n.n(N),U=n("NYxO"),A={avatar:function(t){return t.user.user.avatar},name:function(t){return t.user.user.name}},D={namespaced:!0,state:{token:"",user:{},current:0},mutations:{SET_TOKEN:function(t,e){t.token=e},SET_USER:function(t,e){console.log("user---\x3e",e),t.user=e},SET_MENU:function(t,e){t.current=e}},actions:{login:function(t,e){(0,t.commit)("SET_USER",e)},edit:function(t,e){(0,t.commit)("SET_USER",e)},setCurrent:function(t,e){(0,t.commit)("SET_MENU",e)}}},R="workzspace/praise",B=n("gyMJ");function J(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var L={namespaced:!0,state:{workzs:[]},actions:{setWorkz:function(t,e){(0,t.commit)("workzspace/set",e)},praise:function(t,e){var n=t.commit;return new Promise(function(t,r){Object(B.i)(e).then(function(e){n(R,e),t()}).catch(function(t){r("提交出错")})})},wishlist:function(t,e){var n=t.commit;return new Promise(function(t,r){Object(B.j)(e).then(function(e){n(R,e),t()}).catch(function(t){r("提交出错")})})}},mutations:(J(S={},"workzspace/set",function(t,e){t.workzs=e}),J(S,R,function(t,e){var n=t.workzs.findIndex(function(t){return t._id==e._id});t.workzs.splice(n,1,e),t.workzs=[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(t.workzs))}),S)};k.default.use(U.a);var I=new U.a.Store({modules:{user:D,workzspace:L},getters:A}),G=(n("g3Gj"),n("cwe7"),n("2X9z")),$=n.n(G),F={name:"footer-menu",data:function(){return{}},methods:{toPath:function(t,e){e.islogin&&!this.user._id?$.a.error("请先关注 WorkzSpace 公众号"):(this.$store.dispatch("user/setCurrent",t),this.$router.push({path:e.pagePath}))}},computed:Object(U.b)({current:function(t){return t.user.current},user:function(t){return t.user.user},tabs:function(){return[{pagePath:"/",text:"Home",iconPath:"/static/imgs/home.png",selectedIconPath:"/static/imgs/home_select.png",islogin:!1},{pagePath:"/profile",text:"Profile",iconPath:"/static/imgs/user.png",selectedIconPath:"/static/imgs/user_select.png",islogin:!0},{pagePath:"/wishlist",text:"Wishlist",iconPath:"/static/imgs/tag.png",selectedIconPath:"/static/imgs/tag_select.png",islogin:!0},{pagePath:"/contact",text:"More",iconPath:"/static/imgs/more.png",selectedIconPath:"/static/imgs/more_select.png",islogin:!1}]}}),created:function(){document.title="Workz Space"}},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-menu"},t._l(t.tabs,function(e,r){return n("div",{key:r,staticClass:"select",class:{active:r==t.current},on:{click:function(){return t.toPath(r,e)}}},[r==t.current?n("i",{staticClass:"point"}):t._e(),t._v(" "),n("img",{staticClass:"icon-style",attrs:{src:t.current==r?e.selectedIconPath:e.iconPath}}),t._v(" "),n("span",[n("strong",[t._v(t._s(e.text))])])])}),0)},staticRenderFns:[]};var V=n("VU/8")(F,H,!1,function(t){n("lKyo")},null,null).exports;k.default.use(U.a),k.default.use(y.a),k.default.use(g.a),k.default.use(v.a),k.default.use(h.a),k.default.use(f.a),k.default.use(l.a),k.default.use(u.a),k.default.use(a.a),k.default.use(i.a),k.default.use(x.a),k.default.component("v-menu",V),k.default.use(O.a),k.default.use(W.a),k.default.use(C.a,{ak:"pEd1kn65vhQmV7RfE7ueGKf7"}),k.default.config.productionTip=!1,new k.default({el:"#app",router:j,store:I,components:{App:E},template:"<App/>"})},"U/ZW":function(t,e){},"X+ky":function(t,e){},cwe7:function(t,e){},dT9R:function(t,e){},g3Gj:function(t,e){},gyMJ:function(t,e,n){"use strict";var r=n("mtWM"),i=n.n(r),o=n("FhoZ"),a=n.n(o),c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var u=a.a.build.requestUrl,s=i.a.create({baseURL:u,timeout:5e3}),l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return c(t,null,[{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,r){s.get(t,{params:e}).then(function(t){n(t.data)}).catch(r)})}},{key:"post",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,r){s.post(t,e).then(function(t){n(t.data)}).catch(r)})}},{key:"put",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,r){s.put(t,e).then(function(t){n(t.data)}).catch(r)})}}]),t}();n.d(e,"l",function(){return p}),n.d(e,"h",function(){return f}),n.d(e,"d",function(){return d}),n.d(e,"i",function(){return h}),n.d(e,"j",function(){return m}),n.d(e,"c",function(){return v}),n.d(e,"b",function(){return b}),n.d(e,"g",function(){return g}),n.d(e,"f",function(){return _}),n.d(e,"k",function(){return y}),n.d(e,"a",function(){return k}),n.d(e,"e",function(){return w});var p=function(t){return l.get("/workspace/list",t)},f=function(t){return l.post("/workspace/comment",t)},d=function(t){return l.get("/workspace/id",t)},h=function(t){return l.post("/workspace/praise",t)},m=function(t){return l.post("/workspace/wishlist",t)},v=function(t){return l.get("/workspace/wishlist",t)},b=function(t){return l.put("/workspace/wishlist",t)},g=function(t){return l.post("/wishlist",t)},_=function(t){return l.get("/user/openid",t)},y=function(t){return l.put("/user",t)},k=function(t){return l.post("/contact",t)},w=function(t){return l.get("/wechat/oauth/login",t)}},jAzQ:function(t,e){},lKyo:function(t,e){},tJtB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6557d32aec9a515bcba0.js.map