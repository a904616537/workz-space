webpackJsonp([9],{"+708":function(e,t,n){"use strict";var i={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var e=this;n("JAHf"),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},methods:{initParticleJS:function(e,t,n,i,o,r,a,s,c,u,l,p,h,f,d){particlesJS("particles-js",{particles:{number:{value:n,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:i,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:o,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:s,distance:u,color:r,opacity:c,width:a},move:{enable:!0,speed:l,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:p,mode:h},onclick:{enable:f,mode:d},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},o={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},staticRenderFns:[]},r=n("VU/8")(i,o,!1,null,null,null);t.a=r.exports},"+BTi":function(e,t){},0:function(e,t){},"1uuo":function(e,t){},"8z31":function(e,t){},Dzb6:function(e,t){},FhoZ:function(e,t,n){"use strict";(function(t){const i=n("o/zv");e.exports={dev:{assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{},host:"0.0.0.0",port:8080,autoOpenBrowser:!1,errorOverlay:!0,notifyOnErrors:!0,poll:!1,requestUrl:"http://localhost:8481",devtool:"cheap-module-eval-source-map",cacheBusting:!0,disableHostCheck:!0,cssSourceMap:!0},build:{index:i.resolve(t,"../dist/index.html"),assetsRoot:i.resolve(t,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"/",productionSourceMap:!0,devtool:"#source-map",requestUrl:"http://server.workzspace.cn",productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:Object({NODE_ENV:"production"}).npm_config_report}}}).call(t,"/")},GXEp:function(e,t){},I4nB:function(e,t){},Iun5:function(e,t){},LI6g:function(e,t){},LL4n:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("akml"),n("+BTi");var i=n("wZaX"),o=n.n(i),r=(n("I4nB"),n("STLj")),a=n.n(r),s=(n("cDSy"),n("e0Bm")),c=n.n(s),u=(n("8z31"),n("SXzR")),l=n.n(u),p=(n("Yq4J"),n("qubY")),h=n.n(p),f=(n("tJtB"),n("+vil")),d=n.n(f),m=(n("dT9R"),n("lWn4")),g=n.n(m),v=(n("jAzQ"),n("wOhx")),w=n.n(v),b=(n("X+ky"),n("HJMx")),_=n.n(b),k=(n("Iun5"),n("ttjG")),y=n.n(k),z=(n("LL4n"),n("BrEC")),S=n.n(z),P=(n("U/ZW"),n("+nRk")),E=n.n(P),x=(n("Dzb6"),n("o6kb")),W=n.n(x),j=(n("GXEp"),n("mtrD")),C=n.n(j),O=n("7+uW"),T=(n("cwe7"),n("2X9z")),q=n.n(T),U=n("NYxO"),M=n("mWYR"),A=n("gyMJ"),N={name:"App",methods:{onInitWechatSDK:function(){var e=this;Object(A.f)().then(function(t){var n=t.data;wx.config(n),wx.ready(function(){wx.onMenuShareAppMessage({title:"Workz Space",desc:"Workz Soace Desc",link:"http://wechat.workzspace.cn",imgUrl:"http://wechat.workzspace.cn/static/imgs/logo.png",success:function(){e.$toast.center("分享成功！")}}),wx.onMenuShareTimeline({title:"Workz Space",desc:"Workz Soace Desc",link:"http://wechat.workzspace.cn",imgUrl:"http://wechat.workzspace.cn/static/imgs/logo.png",success:function(){e.$toast.center("分享成功！")}})}),wx.error(function(e){console.log("接口处理失败",e)})}).catch(function(e){console.log("初始化微信SDK失败",e)})},getUserWish:function(e){var t=this;console.log("user_id",e),Object(A.c)({user_id:e}).then(function(e){t.$store.dispatch("workzspace/setUserCount",e)}).catch(function(e){console.log("err",e)})},getUrlParam:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null},onWechatLogin:function(e){window.location.href=e?"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdee0075c3e078ae1&redirect_uri=http%3A%2F%2Fwechat.workzspace.cn/&response_type=code&scope=snsapi_userinfo&state="+e+"#wechat_redirect":"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdee0075c3e078ae1&redirect_uri=http%3A%2F%2Fwechat.workzspace.cn/&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect"},toWechat:function(){console.log("正式版本"),this.toWechatUrl()},onInit:function(){var e=this,t=this.getUrlParam("workspace"),n=this.getUrlParam("code");n?Object(A.e)({code:n}).then(function(t){var n=t.openid;e.getUser(n)}).catch(function(e){console.log("error",e)}):this.onWechatLogin(t)},getUser:function(e){var t=this;Object(A.g)({openid:e}).then(function(e){if(e){t.$store.dispatch("user/login",e);var n=t.getUrlParam("state");t.getUserWish(e._id),e.language.includes("zh")&&(M.a.locale="zh"),n&&"123"!=n&&"null"!=n&&t.$router.push({path:"workspace",query:{_id:n}})}else q.a.error("请先关注 WorkzSpace 公众号")}).catch(function(e){q.a.error("user get error"),console.log("获取失败",e)})}},created:function(){O.default.config.isWechat&&(console.log("微信打开"),this.onInitWechatSDK(),this.onInit())}},L={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var R=n("VU/8")(N,L,!1,function(e){n("LI6g")},null,null).exports,$=n("/ocq"),D={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),n("br"),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},D,!1,function(e){n("1uuo")},"data-v-d8ec41bc",null).exports;O.default.use($.a);var B,I=new $.a({scrollBehavior:function(e,t,n){return n||{x:0,y:0}},mode:"history",routes:[{path:"/",component:function(e){return n.e(4).then(function(){var t=[n("esMn")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"},children:[{path:"/",component:function(e){return n.e(0).then(function(){var t=[n("esL9")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/profile",component:function(e){return n.e(7).then(function(){var t=[n("TBEP")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/contact",component:function(e){return n.e(2).then(function(){var t=[n("mE2b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/wishlist",component:function(e){return n.e(1).then(function(){var t=[n("YzDs")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"}}]},{path:"/workspace",component:function(e){return n.e(5).then(function(){var t=[n("mnA/")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"}},{path:"/follow",component:function(e){return n.e(6).then(function(){var t=[n("yQvA")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"}},{path:"/testimonials",component:function(e){return n.e(3).then(function(){var t=[n("DnaU")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"}}]}),J=n("iqGf"),F=n.n(J),V=n("/kJX"),X=n.n(V),H=n("mM94"),G=n("dAEq"),K=n.n(G),Y={avatar:function(e){return e.user.user.avatar},name:function(e){return e.user.user.name}},Q={namespaced:!0,state:{token:"",user:{},current:0},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_USER:function(e,t){e.user=t},SET_MENU:function(e,t){e.current=t}},actions:{login:function(e,t){(0,e.commit)("SET_USER",t)},edit:function(e,t){(0,e.commit)("SET_USER",t)},setCurrent:function(e,t){(0,e.commit)("SET_MENU",t)}}},Z="workzspace/praise";function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var te={namespaced:!0,state:{workzs:[],user_workz:[]},actions:{setUserCount:function(e,t){(0,e.commit)("workzspace/set/user/workz",t)},pushUserWorkz:function(e,t){(0,e.commit)("workzspace/set/user/push",t)},setWorkz:function(e,t){(0,e.commit)("workzspace/set",t)},pushWorkz:function(e,t){(0,e.commit)("workzspace/push",t)},praise:function(e,t){var n=e.commit;return new Promise(function(e,i){Object(A.j)(t).then(function(t){n(Z,t),e()}).catch(function(e){i("提交出错")})})},wishlist:function(e,t){var n=e.commit;return new Promise(function(e,i){Object(A.k)(t).then(function(t){n(Z,t),e()}).catch(function(e){i("提交出错")})})}},mutations:(ee(B={},"workzspace/set",function(e,t){e.workzs=t}),ee(B,"workzspace/push",function(e,t){e.workzs=e.workzs.concat(t)}),ee(B,Z,function(e,t){var n=e.workzs.findIndex(function(e){return e._id==t._id});e.workzs.splice(n,1,t),e.workzs=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e.workzs))}),ee(B,"workzspace/set/user/workz",function(e,t){e.user_workz=t}),ee(B,"workzspace/set/user/push",function(e,t){e.user_workz.push(t)}),B)};O.default.use(U.a);var ne=new U.a.Store({modules:{user:Q,workzspace:te},getters:Y}),ie=(n("g3Gj"),{name:"footer-menu",data:function(){return{visible:!1,dialogTableVisible:!1}},methods:{toPage:function(e,t){this.dialogTableVisible=!1,this.$store.dispatch("user/setCurrent",e),this.$router.push({path:t,query:{show:"hidden"}})},toPath:function(e,t){t.islogin&&!this.user._id?this.dialogTableVisible=!0:(this.$store.dispatch("user/setCurrent",e),this.$router.push({path:t.pagePath}))}},computed:Object(U.b)({current:function(e){return e.user.current},user:function(e){return e.user.user},badge:function(e){return e.workzspace.user_workz.length},tabs:function(){return[{pagePath:"/",text:this.$t("menu.home"),iconPath:"/static/imgs/home.png",selectedIconPath:"/static/imgs/home_select.png",islogin:!1},{pagePath:"/profile",text:this.$t("menu.profile"),iconPath:"/static/imgs/user.png",selectedIconPath:"/static/imgs/user_select.png",islogin:!0},{pagePath:"/wishlist",text:this.$t("menu.wishlist"),iconPath:"/static/imgs/tag.png",selectedIconPath:"/static/imgs/tag_select.png",islogin:!0,badge:this.badge},{pagePath:"/contact",text:this.$t("menu.more"),iconPath:"/static/imgs/more.png",selectedIconPath:"/static/imgs/more_select.png",islogin:!1,click:!0}]}}),created:function(){document.title="Workz Space"}}),oe={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer-menu"},[n("el-dialog",{attrs:{visible:e.dialogTableVisible,modal:!1,"show-close":!1,width:"80%"},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[n("template",{slot:"title"},[n("p",{staticStyle:{"text-align":"center"}},[e._v(e._s(e.$t("warning")))]),e._v(" "),n("p",{staticStyle:{"text-align":"center"}},[e._v(e._s(e.$t("contact")))])]),e._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticClass:"qr-img",attrs:{src:"/static/imgs/qrcode_wechat.jpg"}})])],2),e._v(" "),e._l(e.tabs,function(t,i){return n("div",{key:i,staticClass:"select",class:{active:i==e.current}},[i==e.current?n("i",{staticClass:"point"}):e._e(),e._v(" "),t.click?n("div",[n("el-popover",{attrs:{placement:"top",width:"50",trigger:"click","popper-class":"popper-class",visible:e.visible}},[n("p",{staticClass:"item",on:{click:function(){return e.toPage(i,"/contact")}}},[e._v(e._s(e.$t("menu.contact")))]),e._v(" "),n("p",{staticClass:"item",on:{click:function(){return e.toPage(i,"/testimonials")}}},[e._v(e._s(e.$t("menu.testimonials")))]),e._v(" "),n("div",{staticClass:"select",attrs:{slot:"reference"},on:{click:function(t){e.visible=!0}},slot:"reference"},[n("img",{staticClass:"icon-style",attrs:{src:e.current==i?t.selectedIconPath:t.iconPath}}),e._v(" "),n("span",[n("strong",[e._v(e._s(t.text))])])])])],1):n("div",{staticClass:"select",on:{click:function(){return e.toPath(i,t)}}},[n("el-badge",{attrs:{hidden:!t.badge,value:t.badge}},[n("img",{staticClass:"icon-style",attrs:{src:e.current==i?t.selectedIconPath:t.iconPath}})]),e._v(" "),n("span",[n("strong",[e._v(e._s(t.text))])])],1)])})],2)},staticRenderFns:[]};var re=n("VU/8")(ie,oe,!1,function(e){n("OS53")},null,null).exports;O.default.use(U.a),O.default.use(C.a),O.default.use(W.a),O.default.use(E.a),O.default.use(S.a),O.default.use(y.a),O.default.use(_.a),O.default.use(w.a),O.default.use(g.a),O.default.use(d.a),O.default.use(F.a),O.default.component("v-menu",re),O.default.use(X.a),O.default.use(H.a),O.default.use(h.a),O.default.use(l.a),O.default.use(c.a),O.default.use(a.a),O.default.use(o.a),O.default.use(K.a,{ak:"pEd1kn65vhQmV7RfE7ueGKf7"}),O.default.config.isWechat=!1;var ae=function(){var e=navigator.userAgent;navigator.appVersion;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari")}}();(navigator.browserLanguage||navigator.language).toLowerCase();ae.mobile&&("micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)&&(O.default.config.isWechat=!0));O.default.config.productionTip=!1,new O.default({el:"#app",i18n:M.a,router:I,store:ne,components:{App:R},template:"<App/>"})},OS53:function(e,t){},"U/ZW":function(e,t){},"X+ky":function(e,t){},Yq4J:function(e,t){},akml:function(e,t){},cDSy:function(e,t){},cwe7:function(e,t){},dT9R:function(e,t){},g3Gj:function(e,t){},gyMJ:function(e,t,n){"use strict";var i=n("mtWM"),o=n.n(i),r=n("FhoZ"),a=n.n(r),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var c=a.a.build.requestUrl,u=o.a.create({baseURL:c,timeout:5e3}),l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return s(e,null,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,i){u.get(e,{params:t}).then(function(e){n(e.data)}).catch(i)})}},{key:"post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,i){u.post(e,t).then(function(e){n(e.data)}).catch(i)})}},{key:"put",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,i){u.put(e,t).then(function(e){n(e.data)}).catch(i)})}}]),e}();n.d(t,"n",function(){return p}),n.d(t,"m",function(){return h}),n.d(t,"i",function(){return f}),n.d(t,"d",function(){return d}),n.d(t,"j",function(){return m}),n.d(t,"k",function(){return g}),n.d(t,"c",function(){return v}),n.d(t,"b",function(){return w}),n.d(t,"h",function(){return b}),n.d(t,"g",function(){return _}),n.d(t,"l",function(){return k}),n.d(t,"a",function(){return y}),n.d(t,"e",function(){return z}),n.d(t,"f",function(){return S});var p=function(e){return l.get("/workspace/recommend",e)},h=function(e){return l.get("/workspace/list",e)},f=function(e){return l.post("/workspace/comment",e)},d=function(e){return l.get("/workspace/id",e)},m=function(e){return l.post("/workspace/praise",e)},g=function(e){return l.post("/workspace/wishlist",e)},v=function(e){return l.get("/workspace/wishlist",e)},w=function(e){return l.put("/workspace/wishlist",e)},b=function(e){return l.post("/wishlist",e)},_=function(e){return l.get("/user/openid",e)},k=function(e){return l.put("/user",e)},y=function(e){return l.post("/contact",e)},z=function(e){return l.get("/wechat/oauth/login",e)},S=function(){return l.get("/wechat/config")}},jAzQ:function(e,t){},mWYR:function(e,t,n){"use strict";var i=n("7+uW"),o=n("TXmL"),r=n("PR9g"),a=n.n(r),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._locale=t.locale||"en",this._formatter=new a.a(this._locale),this._caches=Object.create(null)}return s(e,[{key:"interpolate",value:function(e,t){var n=this._caches[e];return n||(n=this._formatter.compile(e,this._locale),this._caches[e]=n),[n(t)]}}]),e}();console.log("i18n 加载中"),i.default.use(o.a);var u=new c({locale:"en"});t.a=new o.a({locale:"en",formatter:u,messages:{en:{lang:"english",loading:"Loading, please wait......",warning:"Please open this page within WeChat",time:"No time to search?",search:"Enquire now!",premium:"Premium Workspaces",more:"More...",and:"and",others:"others.",view:"View all",comments:"Comments",videoErro:"This video can't be played for the moment, please try again later.",question:"Enquire about your workspace now!",more_question:"More Questoins",please:"Please",contact:"Contact Us!",first:"First Name",last:"Last Name",company:"Company Name",phone:"Contact Number",email:"Email",seats:"Number of Seats Required",send:"Send",or:"OR",orCall:"or call us at:",sendEmail:"Email delivery",successEmail:"Email sent successfully",erroEmail:"Failed to send email",continue:"To continue using",forward:"We look forward to connecting with you!",preferred:"Preferred Areas *required",budget:"Budget *required",requirements:"Other Requirements",requirements_short:"Let us know your question or specific requirements",update:"Update Info",success:"Success!",error:"Error",edit:"Edit",desc:"Description",start:"Starting at",price:"RMB/month per person",post:"Post",menu:{home:"Home",profile:"Profile",wishlist:"Wishlist",more:"More",contact:"Contact Us",testimonials:"Testimonials"},code:{one:"please scan or long-press and",two:"extract our WeChat QR code below"},wechat:{one:"Scan the WeChat QR code below and",two:"chat with us directly"},area:{all:"All",huangpu:"HuangPu",xuhui:"XuHui",changning:"ChangNing",jingan:"JingAn",putuo:"PuTuo",hongkou:"HongKou",yangpu:"YangPu",minhang:"MinHang",baoshan:"BaoShan",jiading:"JiaDing",pudong:"PuDong",jinshan:"JinShan",songjiang:"SongJiang",qingpu:"QingPu",fengxian:"FengXian",chongming:"ChongMing"},button:{subWish:"Submit Wishlist",enter:"Confirm",contact:"Enquire about this office now"}},zh:{lang:"中文",loading:"加载中，请稍后......",warning:"请使用微信打开此网页",time:"没有时间嘛？",search:"立即查询",premium:"高级工作空间",more:"更多...",and:"和",others:"其他人",view:"查看所有",comments:"条评论",videoErro:"此视频暂无法播放，请稍后再试",question:"立即询问您的工作空间！",more_question:"更多问题",please:"请",contact:"联系我们！",first:"姓",last:"名",company:"公司名",phone:"联系电话",email:"邮箱",seats:"需求座位数",send:"发送",or:"或者",orCall:"或者打电话给我们：",sendEmail:"邮件发送中",successEmail:"邮件发送成功！",erroEmail:"邮件发送失败！",continue:"继续使用",forward:"我们期待与你的联系！",preferred:"理想的地区 *必填",budget:"预算 *必填",requirements:"其他需求  *选填",requirements_short:"其他需求  *选填",update:"更新信息",success:"成功！",error:"失败！",edit:"编辑",desc:"描述",start:"从",price:"人民币/月 一个人",post:"发送",menu:{home:"首页",profile:"个人信息",wishlist:"心愿单",more:"更多",contact:"联系我们",testimonials:"奖状"},code:{one:"请扫描或者长按",two:"关注下面的二维码"},wechat:{one:"扫描下面的二维码",two:"直接与我们联系"},area:{all:"所有",huangpu:"黄浦区",xuhui:"徐汇区",changning:"长宁区",jingan:"静安区",putuo:"普陀区",hongkou:"虹口区",yangpu:"杨浦区",minhang:"闵行区",baoshan:"宝山区",jiading:"嘉定区",pudong:"浦东新区",jinshan:"金山区",songjiang:"松江区",qingpu:"青浦区",fengxian:"奉贤区",chongming:"崇明区"},button:{subWish:"提交心愿单",enter:"确 定",contact:"立即询问"}}}})},tJtB:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5062ca2933a1dbd54e71.js.map