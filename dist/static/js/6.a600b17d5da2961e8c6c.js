webpackJsonp([6],{"+ZnS":function(t,a){},"mnA/":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});s("cwe7"),s("+BTi");var i=s("2X9z"),e=s.n(i),n=(s("lRwf"),s("NYxO")),o=s("gyMJ"),r=s("mWYR"),c={name:"workspace",data:function(){return{dialogTableVisible:!1,slideValue:0,input:"",dialogShare:!1,dialogVisible:!1,data:{photos:[],provider:{avatar:""},address_zh:"",area:""}}},components:{},computed:Object(n.b)({user:function(t){return t.user.user},locale:function(){return r.a.locale},isWishlist:function(){var t=this;return!!this.user._id&&(!!this.data.wishlist&&!!this.data.wishlist.find(function(a){return a.user==t.user._id}))},commentCount:function(){return this.data.comments?this.data.comments.length:0},img:function(){return this.data.photos.length>0?this.data.photos[0]:"../static/imgs/house.jpg"},logo:function(){return this.data.provider&&""==this.data.provider.avatar?"../static/imgs/logo.jpg":this.data.provider.avatar},isPraise:function(){var t=this;return!!this.user._id&&(!!this.data.praises&&!!this.data.praises.find(function(a){return a.user._id==t.user._id}))},disabled:function(){return""==this.input.trim()},praiseCount:function(){return this.data.praises?this.data.praises.length:0},lastPraise:function(){var t=this.data.praises.pop();return this.data.praises.push(t),t}}),methods:{onShare:function(){this.dialogShare=!0},onSlide:function(t){},getData:async function(t){this.data=await Object(o.d)({_id:t});var a=await Object(o.f)();await this.onInitWechatSDK(a)},onInitWechatSDK:function(t){var a=this;wx.config(t),wx.ready(function(){wx.updateAppMessageShareData({title:a.data.name,desc:a.data.desc_en,link:"http://wechat.workzspace.cn?workspace="+a.data._id,imgUrl:a.data.provider&&a.data.provider.avatar||"http://wechat.workzspace.cn/static/imgs/Workz_Space_logo.png",type:"link",success:function(){console.log("分享给朋友成功")}}),wx.updateTimelineShareData({title:a.data.name,desc:a.data.desc_en,link:"http://wechat.workzspace.cn?workspace="+a.data._id,imgUrl:a.data.provider&&a.data.provider.avatar||"http://wechat.workzspace.cn/static/imgs/Workz_Space_logo.png",success:function(){}})}),wx.error(function(t){console.log("接口处理失败",t)})},submit:function(){var t=this;if(!this.disabled)if(this.user._id){var a={_id:this.data._id,comment:{name:this.user.name,avatar:this.user.headimgurl,text:this.input}};Object(o.i)(a).then(function(s){t.input="",t.data.comments||(t.data.comments=[]),t.data.comments.push(a.comment),t.dialogVisible=!0,e.a.success()}).catch(function(t){})}else this.dialogTableVisible=!0},wishlist:function(){var t=this;if(this.user._id){var a={_id:this.data._id,user:this.user._id};this.$store.dispatch("workzspace/wishlist",a).then(function(a){t.getUserWish()}).catch(function(t){})}else this.dialogTableVisible=!0},getUserWish:function(){var t=this;Object(o.c)({user_id:this.user._id}).then(function(a){t.workzs=a,t.$store.dispatch("workzspace/setUserCount",t.workzs),t.getData(t.data._id)}).catch(function(t){console.log("err",t)})},praise:function(){var t=this;if(this.user._id){var a={_id:this.data._id,user:this.user._id};this.$store.dispatch("workzspace/praise",a).then(function(a){t.getData(t.data._id)}).catch(function(t){})}else this.dialogTableVisible=!0},handleClose:function(t){t()}},mounted:function(){},beforeMount:function(){var t=this.$route.query._id;t?this.getData(t):this.$router.go(-1)}},l={render:function(){var t,a=this,s=a.$createElement,i=a._self._c||s;return i("div",{staticClass:"workspace"},[i("el-dialog",{attrs:{visible:a.dialogTableVisible,modal:!1,"show-close":!1,width:"80%"},on:{"update:visible":function(t){a.dialogTableVisible=t}}},[i("template",{slot:"title"},[i("p",{staticStyle:{"text-align":"center"}},[a._v(a._s(a.$t("warning")))]),a._v(" "),i("p",{staticStyle:{"text-align":"center"}},[a._v(a._s(a.$t("contact")))])]),a._v(" "),i("div",{staticStyle:{"text-align":"center"}},[i("img",{staticClass:"qr-img",attrs:{src:"/static/imgs/qrcode_wechat.jpg"}})])],2),a._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"card-title"},[i("div",{staticClass:"card-logo"},[i("div",{staticClass:"logo-style",style:"background-image: url("+a.logo+")"})]),a._v(" "),i("div",{staticClass:"card-infor"},[i("div",{staticClass:"infor-title"},[a._v(a._s(a.data.name))]),a._v(" "),i("div",[i("i",{staticClass:"el-icon-location icon-style"}),a._v(a._s(""+(a.data.area||""))+" "+a._s(a.data["address_"+a.locale])+a._s(a.data["addresses_"+a.locale]||""))])])]),a._v(" "),i("carousel",{attrs:{"per-page":1,"mouse-drag":!0,paginationEnabled:!1,autoplay:!0,autoplayTimeout:5e3,loop:!0},model:{value:a.slideValue,callback:function(t){a.slideValue=t},expression:"slideValue"}},a._l(a.data.photos,function(t,s){return i("slide",{key:s},[i("div",{staticClass:"card-img img",style:"background-image: url("+t+")"},[i("span",{staticClass:"img-number"},[a._v(a._s(a.slideValue+1)+" / "+a._s(a.data.photos.length))])])])}),1)],1),a._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"card-content"},[i("div",{staticClass:"icon-box"},[i("div",[i("i",{staticClass:"el-icon-star-off icon-style",class:(t={active:a.isPraise},t["el-icon-star-on"]=a.isPraise,t),on:{click:a.praise}}),a._v(" "),i("i",{staticClass:"el-icon-position icon-style",on:{click:a.onShare}})]),a._v(" "),i("div",{staticClass:"ribbon",class:{red:a.isWishlist},on:{click:a.wishlist}})]),a._v(" "),a.praiseCount>0?i("div",{staticClass:"focus"},[i("div",{staticClass:"img-style"},a._l(a.data.praises,function(t,a){return i("div",{key:a,staticClass:"img-item",style:"background-image: url("+t.user.headimgurl+")"})}),0),a._v(" "),i("div",{staticClass:"text-style"},[a._v("liked by "),i("strong",[a._v(a._s(a.lastPraise.user.nickname))]),a._v(" "+a._s(a.$t("and"))+" "),i("strong",[a._v(a._s(a.praiseCount))]),a._v(" "+a._s(a.$t("others"))+" ")])]):a._e()]),a._v(" "),i("baidu-map",{staticClass:"map",attrs:{zoom:15,center:"上海市"}},[i("bm-local-search",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{keyword:a.data.address_zh||"东方明珠","auto-viewport":!0,location:a.data.area||"黄浦区"}})],1),a._v(" "),i("div",{staticClass:"card-content desc"},[i("h3",[a._v(a._s(a.$t("desc")))]),a._v(" "),i("p",[a._v("\n\t\t\t\t\t"+a._s(a.data["desc_"+a.locale])+"\n\t\t\t\t")])])],1),a._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"card-content"},a._l(a.data.pricing,function(t,s){return i("div",{key:s,staticClass:"item"},[i("h3",[a._v(a._s(t.name))]),a._v(" "),i("div",{staticClass:"flag"},[i("span",[a._v(a._s(a.$t("start")))]),a._v(" "),i("div",{staticClass:"ribbont",class:{red:s%2==1}},[i("div",{staticClass:"content"},[i("label",[a._v(a._s(t.price))]),a._v(" "),i("span",[a._v(a._s(a.$t("price")))])]),a._v(" "),i("div",{staticClass:"triangle"})])])])}),0)]),a._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"card-content"},[i("el-button",{staticStyle:{"background-color":"#00aeef"},attrs:{type:"primary",size:"mini",round:""},on:{click:function(t){return a.$router.push({path:"contact"})}}},[a._v(a._s(a.$t("button.contact")))])],1)]),a._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"card-content"},[i("h3",[a._v("Reviews")]),a._v(" "),i("div",{staticClass:"dialog",staticStyle:{"margin-bottom":"20px"}},[i("div",{staticClass:"head-img",style:"background-image: url("+this.user.headimgurl+")"}),a._v(" "),i("el-input",{attrs:{placeholder:"Write Your Comment"},model:{value:a.input,callback:function(t){a.input=t},expression:"input"}}),a._v(" "),i("span",{on:{click:a.submit}},[a._v(a._s(a.$t("post")))])],1),a._v(" "),a._l(a.data.comments,function(t,s){return i("div",{staticClass:"reviews"},[i("div",{staticClass:"avatar",style:"background-image: url("+t.avatar+")"}),a._v(" "),i("div",{staticClass:"content"},[i("h4",[a._v(a._s(t.name))]),a._v(" "),i("p",[a._v("\n\t\t\t\t\t\t\t"+a._s(t.text)+"\n\t\t\t\t\t\t")])])])}),a._v(" "),i("div",{staticClass:"views"},[i("strong",[a._v(a._s(a.$t("view"))+" "+a._s(a.commentCount)+" "+a._s(a.$t("comments")))])])],2)]),a._v(" "),i("el-dialog",{attrs:{visible:a.dialogVisible,width:"80%","before-close":a.handleClose},on:{"update:visible":function(t){a.dialogVisible=t}}},[i("span",[a._v("Thanks for you review! Once your opinion has been reviewed it will be posted."),i("br"),a._v(" 感谢您的评论！ 审核您的意见后，它将被发布。")]),i("br"),a._v(" "),i("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary"},on:{click:function(t){a.dialogVisible=!1}}},[a._v(a._s(a.$t("button.enter")))])],1),a._v(" "),i("el-dialog",{attrs:{"show-close":!1,visible:a.dialogShare,width:"80%","before-close":a.handleClose},on:{"update:visible":function(t){a.dialogShare=t}}},[i("span",[a._v("Please click the button in the top right corner of WeChat to share."),i("br"),a._v(" 请点击微信右上角的按钮分享哦。")]),i("br"),a._v(" "),i("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary"},on:{click:function(t){a.dialogShare=!1}}},[a._v(a._s(a.$t("button.enter")))])],1)],1)},staticRenderFns:[]};var d=s("VU/8")(c,l,!1,function(t){s("+ZnS")},"data-v-8c1889a6",null);a.default=d.exports}});