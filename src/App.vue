<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

getconfig
import {getconfig} from './api';
export default {
    name    : 'App',
    methods : {
        onInitWechatSDK() {
          getconfig()
          .then(result => {
            const config = {
                  debug     : false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                  appId     : result.appId, // 必填，公众号的唯一标识
                  timestamp : parseInt(result.timestamp), // 必填，生成签名的时间戳
                  nonceStr  : result.nonceStr, // 必填，生成签名的随机串
                  signature : result.signature,// 必填，签名
                  jsApiList : [
                      'onMenuShareTimeline',      //分享到朋友圈
                      'onMenuShareAppMessage',    // 分享给朋友
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
        }
    },
    created() {
      this.onInitWechatSDK();
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
