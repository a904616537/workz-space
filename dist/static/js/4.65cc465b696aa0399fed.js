webpackJsonp([4],{"+yMg":function(t,a){},"mnA/":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});s("7+uW");var i=s("gyMJ"),e={name:"home",data:function(){return{input:"",data:{photos:[],provider:{avatar:""}}}},components:{},computed:{commentCount:function(){return this.data.comments?this.data.comments.length:0},img:function(){return this.data.photos.length>0?this.data.photos[0]:"../static/imgs/house.jpg"},logo:function(){return this.data.provider&&""==this.data.provider.avatar?"../static/imgs/logo.jpg":this.data.provider.avatar}},methods:{getData:function(t){var a=this;Object(i.d)({_id:t}).then(function(t){console.log("workspace",t),a.data=t}).catch(function(t){console.log("err",t)})},submit:function(){var t=this,a={_id:this.data._id,comment:{name:"Anonymous",avatar:"http://store.workspace.h-fish.vip/static/imgs/user.jpg",text:this.input}};Object(i.h)(a).then(function(s){console.log("result",s),t.input="",t.data.comments||(t.data.comments=[]),t.data.comments.push(a.comment)}).catch(function(t){})}},beforeMount:function(){var t=this.$route.query._id;t?this.getData(t):this.$router.go(-1)}},n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"workspace"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-title"},[s("div",{staticClass:"card-logo"},[s("div",{staticClass:"logo-style",style:"background-image: url("+t.logo+")"})]),t._v(" "),s("div",{staticClass:"card-infor"},[s("div",{staticClass:"infor-title"},[t._v(t._s(t.data.name))]),t._v(" "),s("div",[s("i",{staticClass:"el-icon-location icon-style"}),t._v(t._s(t.data.address_en))])])]),t._v(" "),s("carousel",{attrs:{"per-page":1,"mouse-drag":!0,paginationEnabled:!1,autoplay:!0,autoplayTimeout:5e3,loop:!0}},t._l(t.data.photos,function(t,a){return s("slide",{key:a},[s("div",{staticClass:"card-img img",style:"background-image: url("+t+")"})])}),1)],1),t._v(" "),s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"card-content desc"},[s("h3",[t._v("Description")]),t._v(" "),s("p",[t._v("\n\t\t\t\t"+t._s(t.data.desc_en)+"\n\t\t\t")])])]),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},t._l(t.data.pricing,function(a,i){return s("div",{key:i,staticClass:"item"},[s("h2",[t._v(t._s(a.name))]),t._v(" "),s("div",{staticClass:"flag"},[s("span",[t._v("Starting at")]),t._v(" "),s("div",{staticClass:"ribbont",class:{red:i%2==1}},[s("div",{staticClass:"content"},[s("label",[t._v(t._s(a.price))]),t._v("RMB/month per person\n\t\t\t\t\t\t")]),t._v(" "),s("div",{staticClass:"triangle"})])])])}),0)]),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("h3",[t._v("Reviews")]),t._v(" "),s("div",{staticClass:"dialog",staticStyle:{"margin-bottom":"20px"}},[s("div",{staticClass:"head-img",staticStyle:{"background-image":"url('../static/imgs/user.jpg')"}}),t._v(" "),s("el-input",{attrs:{placeholder:"Write Your Comment"},model:{value:t.input,callback:function(a){t.input=a},expression:"input"}}),t._v(" "),s("span",{on:{click:t.submit}},[t._v("Post")])],1),t._v(" "),t._l(t.data.comments,function(a,i){return s("div",{staticClass:"reviews"},[s("div",{staticClass:"avatar",style:"background-image: url("+a.avatar+")"}),t._v(" "),s("div",{staticClass:"content"},[s("h4",[t._v(t._s(a.name))]),t._v(" "),s("p",[t._v("\n\t\t\t\t\t\t"+t._s(a.text)+"\n\t\t\t\t\t")])])])}),t._v(" "),s("div",{staticClass:"views"},[s("strong",[t._v("View all "+t._s(t.commentCount)+" Comments")])])],2)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-content"},[a("div",{staticClass:"icon-box"},[a("div",[a("i",{staticClass:"el-icon-star-off icon-style"}),this._v(" "),a("i",{staticClass:"el-icon-position icon-style"})]),this._v(" "),a("div",{staticClass:"ribbon red"})])])}]};var o=s("VU/8")(e,n,!1,function(t){s("+yMg")},null,null);a.default=o.exports}});
//# sourceMappingURL=4.65cc465b696aa0399fed.js.map