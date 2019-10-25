<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import i18n from './i18n';
import { Message } from 'element-ui';
import {getconfig, getuser, getcode, getWishlist} from './api';

export default {
    name    : 'App',
    methods : {
        onInitWechatSDK() {
            getconfig()
            .then(result => {
                const config = result.data;
                wx.config(config);

                wx.ready(() => {

                    wx.onMenuShareAppMessage({
                        title   : 'Workz Space', // 分享标题
                        desc    : 'Workz Soace Desc', // 分享描述
                        link    : `http://store.workspace.h-fish.vip`,
                        imgUrl  : 'http://store.workspace.h-fish.vip/static/imgs/logo.png',
                        success : () => {
                            this.$toast.center('分享成功！');
                        }
                    });
                    wx.onMenuShareTimeline({
                        title   : 'Workz Space', // 分享标题
                        desc    : 'Workz Soace Desc', // 分享描述
                        link    : `http://store.workspace.h-fish.vip`,
                        imgUrl  : 'http://store.workspace.h-fish.vip/static/imgs/logo.png',
                        success : () => {
                            this.$toast.center('分享成功！');
                        }
                    })
                });
                wx.error((res) => {
                    console.log('接口处理失败', res)
                });
          })
          .catch(err => {
            console.log('初始化微信SDK失败', err);
          })
        },
        getUserWish(_id) {
            console.log('user_id', _id);
            getWishlist({user_id : _id})
            .then(data => {
                this.$store.dispatch('workzspace/setUserCount', data)
            })
            .catch(err => {
                console.log('err', err);
            })
        },
        getUrlParam(name) {
            const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            const r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        },
        onWechatLogin(workspace_id) {
            // if(process.env.NODE_ENV == "development") {
                // window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1020286e395af06c&redirect_uri=http%3A%2F%2Ftest.h-fish.cn&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
            // } else {
            if(workspace_id) {
                window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1020286e395af06c&redirect_uri=http%3A%2F%2Fstore.workspace.h-fish.vip/&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
            } else {
                window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1020286e395af06c&redirect_uri=http%3A%2F%2Fstore.workspace.h-fish.vip/&response_type=code&scope=snsapi_userinfo&state=${workspace_id}#wechat_redirect`;
            }
            // }
        },
        toWechat() {
            if(process.env.NODE_ENV == "development") {
                console.log('测试玩家登陆');
                this.toTestWchatUrl()
            } else {
                console.log('正式版本')
                this.toWechatUrl();
            }
        },
        onInit() {
            const workspace_id = this.getUrlParam('workspace');
            const code = this.getUrlParam('code');
            if(code) {
                getcode({code})
                .then(result => {
                    const {openid} = result;
                    this.getUser(openid);
                })
                .catch(err => {console.log('error', err)});
            } else {
                this.onWechatLogin(workspace_id);
            }  
        },
        getUser(openid) {

            // getuser({openid : 'oJegnv-RgdwmlinNILZxWsUap8Og'})
            getuser({openid})
            .then(user => {
                if(user) {
                    this.$store.dispatch('user/login', user);
                    const workspace_id = this.getUrlParam('state');
                    this.getUserWish(user._id);
                    if(user.language == 'zh_CN') {
                        i18n.locale = 'zh';
                    }
                    if(workspace_id && workspace_id != '123'&& workspace_id != 'null') this.$router.push({ path: 'workspace', query : {_id : workspace_id}})
                } else {
                    Message.error('请先关注 WorkzSpace 公众号')
                }
            })
            .catch(err => {
                Message.error('user get error')
                console.log('获取失败', err)
            })
        }
    },
    created() {
        if(Vue.config.isWechat) {
            console.log('微信打开')
            this.onInitWechatSDK();
            // this.getUser()
            this.onInit(); 
        }
    }
}
</script>

<style lang="scss">
@import "./assets/base.scss";
@import "./assets/style.scss";

body {
  background-color : #f4f4f4;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $font-color;
  background-color : $default;
  padding-bottom: 80px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
.vjs-modal-dialog .vjs-modal-dialog-content {
    z-index: 0;
}
.popper-class {
  width: 120px !important;
  min-width: 120px !important;
}
.seach-class {
    width: 40px;
    height: 40px;
    line-height: 40px;
}
</style>
