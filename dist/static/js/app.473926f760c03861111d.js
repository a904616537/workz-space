webpackJsonp([9],{"+708":function(e,t,n){"use strict";var i={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var e=this;n("JAHf"),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},methods:{initParticleJS:function(e,t,n,i,o,r,a,c,s,u,l,p,f,h,d){particlesJS("particles-js",{particles:{number:{value:n,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:i,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:o,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:c,distance:u,color:r,opacity:s,width:a},move:{enable:!0,speed:l,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:p,mode:f},onclick:{enable:h,mode:d},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},o={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},staticRenderFns:[]},r=n("VU/8")(i,o,!1,null,null,null);t.a=r.exports},"+BTi":function(e,t){},0:function(e,t){},"1uuo":function(e,t){},"8z31":function(e,t){},Dzb6:function(e,t){},FhoZ:function(e,t,n){"use strict";(function(t){const i=n("o/zv");e.exports={dev:{assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{},host:"localhost",port:8080,autoOpenBrowser:!1,errorOverlay:!0,notifyOnErrors:!0,poll:!1,requestUrl:"http://localhost:8481",devtool:"cheap-module-eval-source-map",cacheBusting:!0,disableHostCheck:!0,cssSourceMap:!0},build:{index:i.resolve(t,"../dist/index.html"),assetsRoot:i.resolve(t,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"/",productionSourceMap:!0,devtool:"#source-map",requestUrl:"http://service.workspace.h-fish.vip",productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:Object({NODE_ENV:"production"}).npm_config_report}}}).call(t,"/")},GXEp:function(e,t){},Iun5:function(e,t){},LL4n:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("8z31"),n("+BTi");var i=n("SXzR"),o=n.n(i),r=(n("Yq4J"),n("qubY")),a=n.n(r),c=(n("tJtB"),n("+vil")),s=n.n(c),u=(n("dT9R"),n("lWn4")),l=n.n(u),p=(n("jAzQ"),n("wOhx")),f=n.n(p),h=(n("X+ky"),n("HJMx")),d=n.n(h),v=(n("Iun5"),n("ttjG")),m=n.n(v),g=(n("LL4n"),n("BrEC")),_=n.n(g),b=(n("U/ZW"),n("+nRk")),k=n.n(b),w=(n("Dzb6"),n("o6kb")),y=n.n(w),P=(n("GXEp"),n("mtrD")),z=n.n(P),S=n("7+uW"),x=(n("cwe7"),n("2X9z")),E=n.n(x),O=n("NYxO"),W=n("gyMJ");W.f;var j={name:"App",methods:{onInitWechatSDK:function(){var e=this;Object(W.f)().then(function(t){var n=t.data;console.log("jssdk config",n),wx.config(n),wx.ready(function(){wx.onMenuShareAppMessage({title:"Workz Space",desc:"Workz Soace Desc",link:"http://store.workspace.h-fish.vip",imgUrl:"http://store.workspace.h-fish.vip/static/imgs/logo.png",success:function(){e.$toast.center("分享成功！")}}),wx.onMenuShareTimeline({title:"Workz Space",desc:"Workz Soace Desc",link:"http://store.workspace.h-fish.vip",imgUrl:"http://store.workspace.h-fish.vip/static/imgs/logo.png",success:function(){e.$toast.center("分享成功！")}})}),wx.error(function(e){console.log("接口处理失败",e)})}).catch(function(e){console.log("初始化微信SDK失败",e)})},getUrlParam:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null},onWechatLogin:function(e){window.location.href=e?"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1020286e395af06c&redirect_uri=http%3A%2F%2Fstore.workspace.h-fish.vip/&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect":"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1020286e395af06c&redirect_uri=http%3A%2F%2Fstore.workspace.h-fish.vip/&response_type=code&scope=snsapi_userinfo&state="+e+"#wechat_redirect"},toWechat:function(){console.log("正式版本"),this.toWechatUrl()},onInit:function(){var e=this,t=this.getUrlParam("workspace"),n=this.getUrlParam("code");n?Object(W.e)({code:n}).then(function(t){var n=t.openid;e.getUser(n)}).catch(function(e){console.log("error",e)}):this.onWechatLogin(t)},getUser:function(e){var t=this;Object(W.g)({openid:e}).then(function(e){if(console.log("user",e),e){t.$store.dispatch("user/login",e);var n=t.getUrlParam("state");n&&"123"!=n&&"null"!=n&&t.$router.push({path:"workspace",query:{_id:n}})}else E.a.error("请先关注 WorkzSpace 公众号")}).catch(function(e){E.a.error("user get error"),console.log("获取失败",e)})}},created:function(){this.onInitWechatSDK(),this.onInit()}},M={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var U=n("VU/8")(j,M,!1,function(e){n("hqeA")},null,null).exports,A=n("/ocq"),T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),n("br"),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},T,!1,function(e){n("1uuo")},"data-v-d8ec41bc",null).exports;S.default.use(A.a);var C,D=new A.a({mode:"history",routes:[{path:"/",component:function(e){return n.e(7).then(function(){var t=[n("esMn")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"},children:[{path:"/",component:function(e){return n.e(1).then(function(){var t=[n("esL9")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/profile",component:function(e){return n.e(6).then(function(){var t=[n("TBEP")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/contact",component:function(e){return n.e(2).then(function(){var t=[n("mE2b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/wishlist",component:function(e){return n.e(0).then(function(){var t=[n("YzDs")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"}}]},{path:"/workspace",component:function(e){return n.e(4).then(function(){var t=[n("mnA/")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"}},{path:"/follow",component:function(e){return n.e(5).then(function(){var t=[n("yQvA")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"}},{path:"/testimonials",component:function(e){return n.e(3).then(function(){var t=[n("DnaU")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"}}]}),N=n("iqGf"),q=n.n(N),L=n("/kJX"),R=n.n(L),$=n("mM94"),F=n("dAEq"),I=n.n(F),J={avatar:function(e){return e.user.user.avatar},name:function(e){return e.user.user.name}},B={namespaced:!0,state:{token:"",user:{},current:0},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_USER:function(e,t){e.user=t},SET_MENU:function(e,t){e.current=t}},actions:{login:function(e,t){(0,e.commit)("SET_USER",t)},edit:function(e,t){(0,e.commit)("SET_USER",t)},setCurrent:function(e,t){(0,e.commit)("SET_MENU",t)}}},X="workzspace/praise";function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K={namespaced:!0,state:{workzs:[]},actions:{setWorkz:function(e,t){(0,e.commit)("workzspace/set",t)},praise:function(e,t){var n=e.commit;return new Promise(function(e,i){Object(W.j)(t).then(function(t){n(X,t),e()}).catch(function(e){i("提交出错")})})},wishlist:function(e,t){var n=e.commit;return new Promise(function(e,i){Object(W.k)(t).then(function(t){n(X,t),e()}).catch(function(e){i("提交出错")})})}},mutations:(G(C={},"workzspace/set",function(e,t){e.workzs=t}),G(C,X,function(e,t){var n=e.workzs.findIndex(function(e){return e._id==t._id});e.workzs.splice(n,1,t),e.workzs=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e.workzs))}),C)};S.default.use(O.a);var H=new O.a.Store({modules:{user:B,workzspace:K},getters:J}),V=(n("g3Gj"),{name:"footer-menu",data:function(){return{}},methods:{toPage:function(e,t){this.$store.dispatch("user/setCurrent",e),this.$router.push({path:t})},toPath:function(e,t){t.islogin&&!this.user._id?E()({message:"请先登录 WorkzSpace",type:"error",onClose:function(){window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1020286e395af06c&redirect_uri=http%3A%2F%2Fstore.workspace.h-fish.vip/&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect"}}):(this.$store.dispatch("user/setCurrent",e),this.$router.push({path:t.pagePath}))}},computed:Object(O.b)({current:function(e){return e.user.current},user:function(e){return e.user.user},tabs:function(){return[{pagePath:"/",text:"Home",iconPath:"/static/imgs/home.png",selectedIconPath:"/static/imgs/home_select.png",islogin:!1},{pagePath:"/profile",text:"Profile",iconPath:"/static/imgs/user.png",selectedIconPath:"/static/imgs/user_select.png",islogin:!0},{pagePath:"/wishlist",text:"Wishlist",iconPath:"/static/imgs/tag.png",selectedIconPath:"/static/imgs/tag_select.png",islogin:!0},{pagePath:"/contact",text:"More",iconPath:"/static/imgs/more.png",selectedIconPath:"/static/imgs/more_select.png",islogin:!1,click:!0}]}}),created:function(){document.title="Workz Space"}}),Y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer-menu"},e._l(e.tabs,function(t,i){return n("div",{key:i,staticClass:"select",class:{active:i==e.current}},[i==e.current?n("i",{staticClass:"point"}):e._e(),e._v(" "),t.click?n("div",[n("el-popover",{attrs:{placement:"top",width:"50",trigger:"click"}},[n("p",{on:{click:function(){return e.toPage(i,"/contact")}}},[e._v("Contact Us")]),e._v(" "),n("p",{on:{click:function(){return e.toPage(i,"/testimonials")}}},[e._v("Testimonials")]),e._v(" "),n("div",{staticClass:"select",attrs:{slot:"reference"},slot:"reference"},[n("img",{staticClass:"icon-style",attrs:{src:e.current==i?t.selectedIconPath:t.iconPath}}),e._v(" "),n("span",[n("strong",[e._v(e._s(t.text))])])])])],1):n("div",{staticClass:"select",on:{click:function(){return e.toPath(i,t)}}},[n("img",{staticClass:"icon-style",attrs:{src:e.current==i?t.selectedIconPath:t.iconPath}}),e._v(" "),n("span",[n("strong",[e._v(e._s(t.text))])])])])}),0)},staticRenderFns:[]};var Q=n("VU/8")(V,Y,!1,function(e){n("QS9X")},null,null).exports;S.default.use(O.a),S.default.use(z.a),S.default.use(y.a),S.default.use(k.a),S.default.use(_.a),S.default.use(m.a),S.default.use(d.a),S.default.use(f.a),S.default.use(l.a),S.default.use(s.a),S.default.use(q.a),S.default.component("v-menu",Q),S.default.use(R.a),S.default.use($.a),S.default.use(a.a),S.default.use(o.a),S.default.use(I.a,{ak:"pEd1kn65vhQmV7RfE7ueGKf7"}),S.default.config.isWechat=!1;var Z=function(){var e=navigator.userAgent;navigator.appVersion;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari")}}();(navigator.browserLanguage||navigator.language).toLowerCase();Z.mobile&&("micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)&&(S.default.config.isWechat=!0));S.default.config.productionTip=!1,new S.default({el:"#app",router:D,store:H,components:{App:U},template:"<App/>"})},QS9X:function(e,t){},"U/ZW":function(e,t){},"X+ky":function(e,t){},Yq4J:function(e,t){},cwe7:function(e,t){},dT9R:function(e,t){},g3Gj:function(e,t){},gyMJ:function(e,t,n){"use strict";var i=n("mtWM"),o=n.n(i),r=n("FhoZ"),a=n.n(r),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var s=a.a.build.requestUrl,u=o.a.create({baseURL:s,timeout:5e3}),l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return c(e,null,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,i){u.get(e,{params:t}).then(function(e){n(e.data)}).catch(i)})}},{key:"post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,i){u.post(e,t).then(function(e){n(e.data)}).catch(i)})}},{key:"put",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,i){u.put(e,t).then(function(e){n(e.data)}).catch(i)})}}]),e}();n.d(t,"m",function(){return p}),n.d(t,"i",function(){return f}),n.d(t,"d",function(){return h}),n.d(t,"j",function(){return d}),n.d(t,"k",function(){return v}),n.d(t,"c",function(){return m}),n.d(t,"b",function(){return g}),n.d(t,"h",function(){return _}),n.d(t,"g",function(){return b}),n.d(t,"l",function(){return k}),n.d(t,"a",function(){return w}),n.d(t,"e",function(){return y}),n.d(t,"f",function(){return P});var p=function(e){return l.get("/workspace/list",e)},f=function(e){return l.post("/workspace/comment",e)},h=function(e){return l.get("/workspace/id",e)},d=function(e){return l.post("/workspace/praise",e)},v=function(e){return l.post("/workspace/wishlist",e)},m=function(e){return l.get("/workspace/wishlist",e)},g=function(e){return l.put("/workspace/wishlist",e)},_=function(e){return l.post("/wishlist",e)},b=function(e){return l.get("/user/openid",e)},k=function(e){return l.put("/user",e)},w=function(e){return l.post("/contact",e)},y=function(e){return l.get("/wechat/oauth/login",e)},P=function(){return l.get("/wechat/config")}},hqeA:function(e,t){},jAzQ:function(e,t){},tJtB:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.473926f760c03861111d.js.map