<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

getconfig
import { mapState, mapActions } from 'vuex'
import { Message } from 'element-ui';
import {getconfig, getuser, getcode} from './api';
export default {
    name    : 'App',
    methods : {
        onInitWechatSDK() {
          getconfig()
          .then(result => {
            const config = {
                  debug     : true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                  appId     : result.appId, // 必填，公众号的唯一标识
                  timestamp : parseInt(result.timestamp), // 必填，生成签名的时间戳
                  nonceStr  : result.nonceStr, // 必填，生成签名的随机串
                  signature : result.signature,// 必填，签名
                  jsApiList : [
                      'updateAppMessageShareData',      //分享到朋友圈
                      'updateTimelineShareData',    // 分享给朋友
                      'hideAllNonBaseMenuItem',   // 隐藏多余的微信按钮
                      'closeWindow'               // 离开微信浏览器
                  ]
              };

              wx.config(config);
              
              wx.error((res) => {
                  console.log('微信验证失败！', res)
              })
          })
          .catch(err => {
            console.log('初始化微信SDK失败', error);
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
            getuser({openid : 'oJegnv-RgdwmlinNILZxWsUap8Og'})
            // getuser({openid})
            .then(user => {
                console.log('user', user)
                if(user) {
                    this.$store.dispatch('user/login', user);
                    const workspace_id = this.getUrlParam('state');
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
      this.onInitWechatSDK();

        this.getUser()
        // this.onInit(); 
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
}
</style>
