webpackJsonp([9],{"+708":function(e,t,n){"use strict";var o={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var e=this;n("JAHf"),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},methods:{initParticleJS:function(e,t,n,o,i,r,a,s,c,u,l,p,h,f,d){particlesJS("particles-js",{particles:{number:{value:n,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:o,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:i,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:s,distance:u,color:r,opacity:c,width:a},move:{enable:!0,speed:l,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:p,mode:h},onclick:{enable:f,mode:d},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},i={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},staticRenderFns:[]},r=n("VU/8")(o,i,!1,null,null,null);t.a=r.exports},"+BTi":function(e,t){},"/25j":function(e,t){},0:function(e,t){},"1uuo":function(e,t){},"8z31":function(e,t){},Dzb6:function(e,t){},FhoZ:function(e,t,n){"use strict";(function(t){const o=n("o/zv");e.exports={dev:{assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{},host:"localhost",port:8080,autoOpenBrowser:!1,errorOverlay:!0,notifyOnErrors:!0,poll:!1,requestUrl:"http://localhost:8481",devtool:"cheap-module-eval-source-map",cacheBusting:!0,disableHostCheck:!0,cssSourceMap:!0},build:{index:o.resolve(t,"../dist/index.html"),assetsRoot:o.resolve(t,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"/",productionSourceMap:!0,devtool:"#source-map",requestUrl:"http://service.workspace.h-fish.vip",productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:Object({NODE_ENV:"production"}).npm_config_report}}}).call(t,"/")},GXEp:function(e,t){},I4nB:function(e,t){},Iun5:function(e,t){},LL4n:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("akml"),n("+BTi");var o=n("wZaX"),i=n.n(o),r=(n("I4nB"),n("STLj")),a=n.n(r),s=(n("cDSy"),n("e0Bm")),c=n.n(s),u=(n("8z31"),n("SXzR")),l=n.n(u),p=(n("Yq4J"),n("qubY")),h=n.n(p),f=(n("tJtB"),n("+vil")),d=n.n(f),m=(n("dT9R"),n("lWn4")),g=n.n(m),v=(n("jAzQ"),n("wOhx")),w=n.n(v),b=(n("X+ky"),n("HJMx")),_=n.n(b),k=(n("Iun5"),n("ttjG")),y=n.n(k),z=(n("LL4n"),n("BrEC")),P=n.n(z),S=(n("U/ZW"),n("+nRk")),E=n.n(S),x=(n("Dzb6"),n("o6kb")),W=n.n(x),j=(n("GXEp"),n("mtrD")),C=n.n(j),O=n("7+uW"),U=(n("cwe7"),n("2X9z")),M=n.n(U),T=n("NYxO"),A=n("gyMJ"),q={name:"App",methods:{onInitWechatSDK:function(){var e=this;Object(A.f)().then(function(t){var n=t.data;console.log("jssdk config",n),wx.config(n),wx.ready(function(){wx.onMenuShareAppMessage({title:"Workz Space",desc:"Workz Soace Desc",link:"http://store.workspace.h-fish.vip",imgUrl:"http://store.workspace.h-fish.vip/static/imgs/logo.png",success:function(){e.$toast.center("分享成功！")}}),wx.onMenuShareTimeline({title:"Workz Space",desc:"Workz Soace Desc",link:"http://store.workspace.h-fish.vip",imgUrl:"http://store.workspace.h-fish.vip/static/imgs/logo.png",success:function(){e.$toast.center("分享成功！")}})}),wx.error(function(e){console.log("接口处理失败",e)})}).catch(function(e){console.log("初始化微信SDK失败",e)})},getUserWish:function(e){var t=this;console.log("user_id",e),Object(A.c)({user_id:e}).then(function(e){t.$store.dispatch("workzspace/setUserCount",e)}).catch(function(e){console.log("err",e)})},getUrlParam:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null},onWechatLogin:function(e){window.location.href=e?"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1020286e395af06c&redirect_uri=http%3A%2F%2Fstore.workspace.h-fish.vip/&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect":"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1020286e395af06c&redirect_uri=http%3A%2F%2Fstore.workspace.h-fish.vip/&response_type=code&scope=snsapi_userinfo&state="+e+"#wechat_redirect"},toWechat:function(){console.log("正式版本"),this.toWechatUrl()},onInit:function(){var e=this,t=this.getUrlParam("workspace"),n=this.getUrlParam("code");n?Object(A.e)({code:n}).then(function(t){var n=t.openid;e.getUser(n)}).catch(function(e){console.log("error",e)}):this.onWechatLogin(t)},getUser:function(e){var t=this;Object(A.g)({openid:e}).then(function(e){if(console.log("user",e),e){t.$store.dispatch("user/login",e);var n=t.getUrlParam("state");t.getUserWish(e._id),n&&"123"!=n&&"null"!=n&&t.$router.push({path:"workspace",query:{_id:n}})}else M.a.error("请先关注 WorkzSpace 公众号")}).catch(function(e){M.a.error("user get error"),console.log("获取失败",e)})}},created:function(){O.default.config.isWechat&&(console.log("微信打开"),this.onInitWechatSDK(),this.onInit())}},D={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var N=n("VU/8")(q,D,!1,function(e){n("vSIJ")},null,null).exports,R=n("/ocq"),$={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),n("br"),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},$,!1,function(e){n("1uuo")},"data-v-d8ec41bc",null).exports;O.default.use(R.a);var L,I=new R.a({mode:"history",routes:[{path:"/",component:function(e){return n.e(4).then(function(){var t=[n("esMn")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"},children:[{path:"/",component:function(e){return n.e(1).then(function(){var t=[n("esL9")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/profile",component:function(e){return n.e(6).then(function(){var t=[n("TBEP")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/contact",component:function(e){return n.e(2).then(function(){var t=[n("mE2b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/wishlist",component:function(e){return n.e(0).then(function(){var t=[n("YzDs")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"}}]},{path:"/workspace",component:function(e){return n.e(7).then(function(){var t=[n("mnA/")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"}},{path:"/follow",component:function(e){return n.e(5).then(function(){var t=[n("yQvA")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"}},{path:"/testimonials",component:function(e){return n.e(3).then(function(){var t=[n("DnaU")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"Workz space"}}]}),J=n("iqGf"),B=n.n(J),F=n("/kJX"),X=n.n(F),H=n("mM94"),G=n("dAEq"),K=n.n(G),Y={avatar:function(e){return e.user.user.avatar},name:function(e){return e.user.user.name}},V={namespaced:!0,state:{token:"",user:{},current:0},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_USER:function(e,t){e.user=t},SET_MENU:function(e,t){e.current=t}},actions:{login:function(e,t){(0,e.commit)("SET_USER",t)},edit:function(e,t){(0,e.commit)("SET_USER",t)},setCurrent:function(e,t){(0,e.commit)("SET_MENU",t)}}},Q="workzspace/praise";function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ee={namespaced:!0,state:{workzs:[],user_workz:[]},actions:{setUserCount:function(e,t){(0,e.commit)("workzspace/set/user/workz",t)},pushUserWorkz:function(e,t){(0,e.commit)("workzspace/set/user/push",t)},setWorkz:function(e,t){(0,e.commit)("workzspace/set",t)},praise:function(e,t){var n=e.commit;return new Promise(function(e,o){Object(A.j)(t).then(function(t){n(Q,t),e()}).catch(function(e){o("提交出错")})})},wishlist:function(e,t){var n=e.commit;return new Promise(function(e,o){Object(A.k)(t).then(function(t){n(Q,t),e()}).catch(function(e){o("提交出错")})})}},mutations:(Z(L={},"workzspace/set",function(e,t){e.workzs=t}),Z(L,Q,function(e,t){var n=e.workzs.findIndex(function(e){return e._id==t._id});e.workzs.splice(n,1,t),e.workzs=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e.workzs))}),Z(L,"workzspace/set/user/workz",function(e,t){e.user_workz=t}),Z(L,"workzspace/set/user/push",function(e,t){e.user_workz.push(t)}),L)};O.default.use(T.a);var te=new T.a.Store({modules:{user:V,workzspace:ee},getters:Y}),ne=n("mWYR"),oe=(n("g3Gj"),{name:"footer-menu",data:function(){return{}},methods:{toPage:function(e,t){this.$store.dispatch("user/setCurrent",e),this.$router.push({path:t})},toPath:function(e,t){t.islogin&&!this.user._id?M()({message:"请先登录 WorkzSpace",type:"error",onClose:function(){window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1020286e395af06c&redirect_uri=http%3A%2F%2Fstore.workspace.h-fish.vip/&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect"}}):(this.$store.dispatch("user/setCurrent",e),this.$router.push({path:t.pagePath}))}},computed:Object(T.b)({current:function(e){return e.user.current},user:function(e){return e.user.user},badge:function(e){return e.workzspace.user_workz.length},tabs:function(){return[{pagePath:"/",text:this.$t("menu.home"),iconPath:"/static/imgs/home.png",selectedIconPath:"/static/imgs/home_select.png",islogin:!1},{pagePath:"/profile",text:this.$t("menu.profile"),iconPath:"/static/imgs/user.png",selectedIconPath:"/static/imgs/user_select.png",islogin:!0},{pagePath:"/wishlist",text:this.$t("menu.wishlist"),iconPath:"/static/imgs/tag.png",selectedIconPath:"/static/imgs/tag_select.png",islogin:!0,badge:this.badge},{pagePath:"/contact",text:this.$t("menu.more"),iconPath:"/static/imgs/more.png",selectedIconPath:"/static/imgs/more_select.png",islogin:!1,click:!0}]}}),created:function(){document.title="Workz Space"}}),ie={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer-menu"},e._l(e.tabs,function(t,o){return n("div",{key:o,staticClass:"select",class:{active:o==e.current}},[o==e.current?n("i",{staticClass:"point"}):e._e(),e._v(" "),t.click?n("div",[n("el-popover",{attrs:{placement:"top",width:"50",trigger:"click","popper-class":"popper-class"}},[n("p",{staticClass:"item",on:{click:function(){return e.toPage(o,"/contact")}}},[e._v(e._s(e.$t("menu.contact")))]),e._v(" "),n("p",{staticClass:"item",on:{click:function(){return e.toPage(o,"/testimonials")}}},[e._v(e._s(e.$t("menu.testimonials")))]),e._v(" "),n("div",{staticClass:"select",attrs:{slot:"reference"},slot:"reference"},[n("img",{staticClass:"icon-style",attrs:{src:e.current==o?t.selectedIconPath:t.iconPath}}),e._v(" "),n("span",[n("strong",[e._v(e._s(t.text))])])])])],1):n("div",{staticClass:"select",on:{click:function(){return e.toPath(o,t)}}},[n("el-badge",{attrs:{hidden:!t.badge,value:t.badge}},[n("img",{staticClass:"icon-style",attrs:{src:e.current==o?t.selectedIconPath:t.iconPath}})]),e._v(" "),n("span",[n("strong",[e._v(e._s(t.text))])])],1)])}),0)},staticRenderFns:[]};var re=n("VU/8")(oe,ie,!1,function(e){n("/25j")},null,null).exports;O.default.use(T.a),O.default.use(C.a),O.default.use(W.a),O.default.use(E.a),O.default.use(P.a),O.default.use(y.a),O.default.use(_.a),O.default.use(w.a),O.default.use(g.a),O.default.use(d.a),O.default.use(B.a),O.default.component("v-menu",re),O.default.use(X.a),O.default.use(H.a),O.default.use(h.a),O.default.use(l.a),O.default.use(c.a),O.default.use(a.a),O.default.use(i.a),O.default.use(K.a,{ak:"pEd1kn65vhQmV7RfE7ueGKf7"}),O.default.config.isWechat=!1;var ae=function(){var e=navigator.userAgent;navigator.appVersion;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari")}}();(navigator.browserLanguage||navigator.language).toLowerCase();ae.mobile&&("micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)&&(O.default.config.isWechat=!0));O.default.config.productionTip=!1,new O.default({el:"#app",i18n:ne.a,router:I,store:te,components:{App:N},template:"<App/>"})},"U/ZW":function(e,t){},"X+ky":function(e,t){},Yq4J:function(e,t){},akml:function(e,t){},cDSy:function(e,t){},cwe7:function(e,t){},dT9R:function(e,t){},g3Gj:function(e,t){},gyMJ:function(e,t,n){"use strict";var o=n("mtWM"),i=n.n(o),r=n("FhoZ"),a=n.n(r),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var c=a.a.build.requestUrl,u=i.a.create({baseURL:c,timeout:5e3}),l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return s(e,null,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,o){u.get(e,{params:t}).then(function(e){n(e.data)}).catch(o)})}},{key:"post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,o){u.post(e,t).then(function(e){n(e.data)}).catch(o)})}},{key:"put",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,o){u.put(e,t).then(function(e){n(e.data)}).catch(o)})}}]),e}();n.d(t,"m",function(){return p}),n.d(t,"i",function(){return h}),n.d(t,"d",function(){return f}),n.d(t,"j",function(){return d}),n.d(t,"k",function(){return m}),n.d(t,"c",function(){return g}),n.d(t,"b",function(){return v}),n.d(t,"h",function(){return w}),n.d(t,"g",function(){return b}),n.d(t,"l",function(){return _}),n.d(t,"a",function(){return k}),n.d(t,"e",function(){return y}),n.d(t,"f",function(){return z});var p=function(e){return l.get("/workspace/list",e)},h=function(e){return l.post("/workspace/comment",e)},f=function(e){return l.get("/workspace/id",e)},d=function(e){return l.post("/workspace/praise",e)},m=function(e){return l.post("/workspace/wishlist",e)},g=function(e){return l.get("/workspace/wishlist",e)},v=function(e){return l.put("/workspace/wishlist",e)},w=function(e){return l.post("/wishlist",e)},b=function(e){return l.get("/user/openid",e)},_=function(e){return l.put("/user",e)},k=function(e){return l.post("/contact",e)},y=function(e){return l.get("/wechat/oauth/login",e)},z=function(){return l.get("/wechat/config")}},jAzQ:function(e,t){},mWYR:function(e,t,n){"use strict";var o=n("7+uW"),i=n("TXmL"),r=n("PR9g"),a=n.n(r),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._locale=t.locale||"en",this._formatter=new a.a(this._locale),this._caches=Object.create(null)}return s(e,[{key:"interpolate",value:function(e,t){var n=this._caches[e];return n||(n=this._formatter.compile(e,this._locale),this._caches[e]=n),[n(t)]}}]),e}();console.log("i18n 加载中"),o.default.use(i.a);var u=new c({locale:"en"});t.a=new i.a({locale:"en",formatter:u,messages:{en:{lang:"english",time:"Don't have time?",search:"Immediately query",premium:"Premium Workspaces",more:"More...",and:"and",others:"others.",view:"View all",comments:"Comments",videoErro:"This video can't be played for the moment, please try again later.",question:"More Questions?",please:"Please",contact:"Contact Us!",first:"First Name",last:"Last Name",company:"Company Name",phone:"Contact Number",email:"Email",seats:"Number of Seats Required",send:"Send",or:"OR",sendEmail:"Email delivery",successEmail:"Email sent successfully",erroEmail:"Failed to send email",continue:"To continue using",forward:"We look forward to connecting with you!",preferred:"Preferred Areas",budget:"Budget",requirements:"Other Requirements",update:"Update Info",success:"Success!",error:"Error",edit:"Edit",desc:"Description",start:"Starting at",price:"RMB/month per person",post:"Post",menu:{home:"Home",profile:"Profile",wishlist:"Wishlist",more:"More",contact:"Contact Us",testimonials:"Testimonials"},code:{one:"please scan or long-press and",two:"extract our WeChat QR code below"},wechat:{one:"Scan the WeChat QR code below and",two:"chat with us directly"},area:{all:"All",huangpu:"HuangPu",xuhui:"XuHui",changning:"ChangNing",jingan:"JingAn",putuo:"PuTuo",hongkou:"HongKou",yangpu:"YangPu",minhang:"MinHang",baoshan:"BaoShan",jiading:"JiaDing",pudong:"PuDong",jinshan:"JinShan",songjiang:"SongJiang",qingpu:"QingPu",fengxian:"FengXian",chongming:"ChongMing"},button:{subWish:"Submit Wishlist",enter:"Confirm",contact:"Contact Us"}},zh:{lang:"中文",time:"没有时间嘛？",search:"立即查询",premium:"高级工作空间",more:"更多...",and:"和",others:"其他人",view:"查看所有",comments:"条评论",videoErro:"此视频暂无法播放，请稍后再试",question:"更多问题？",please:"请",contact:"联系我们！",first:"姓",last:"名",company:"公司名",phone:"联系电话",email:"邮箱",seats:"需求座位数",send:"发送",or:"或者",sendEmail:"邮件发送中",successEmail:"邮件发送成功！",erroEmail:"邮件发送失败！",continue:"继续使用",forward:"我们期待与你的联系！",preferred:"理想的地区",budget:"预算",requirements:"其他需求",update:"更新信息",success:"成功！",error:"失败！",edit:"编辑",desc:"描述",start:"从",price:"人民币/月 一个人",post:"发送",menu:{home:"首页",profile:"个人信息",wishlist:"心愿单",more:"更多",contact:"联系我们",testimonials:"奖状"},code:{one:"请扫描或者长按",two:"关注下面的二维码"},wechat:{one:"扫描下面的二维码",two:"直接与我们联系"},area:{all:"所有",huangpu:"黄浦区",xuhui:"徐汇区",changning:"长宁区",jingan:"静安区",putuo:"普陀区",hongkou:"虹口区",yangpu:"杨浦区",minhang:"闵行区",baoshan:"宝山区",jiading:"嘉定区",pudong:"浦东新区",jinshan:"金山区",songjiang:"松江区",qingpu:"青浦区",fengxian:"奉贤区",chongming:"崇明区"},button:{subWish:"提交心愿单",enter:"确 定",contact:"联系我们"}}}})},tJtB:function(e,t){},vSIJ:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.56b9bd1c3a7e95505fa2.js.map