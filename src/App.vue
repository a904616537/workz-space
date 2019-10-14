<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import {getuser} from './api';
export default {
    name    : 'App',
    methods : {
        onWechatLogin() {
            if(process.env.NODE_ENV == "development") {
                // window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1020286e395af06c&redirect_uri=http%3A%2F%2Ftest.h-fish.cn&response_type=code&scope=snsapi_userinfo&state="+state+"#wechat_redirect";
            } else {
                window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx06c82c3cbb012752&redirect_uri=http%3A%2F%2Ffiltration.hansgrohe.com.cn&response_type=code&scope=snsapi_userinfo&state="+state+"#wechat_redirect";
            }
        },
        getUser() {
            getuser({openid : 'oJegnv-RgdwmlinNILZxWsUap8Og'})
            .then(user => {
                console.log('user', user)
                this.$store.dispatch('user/login', user)
            })
            .catch(err => {
                console.log('获取失败', err)
            })
        }
    },
    created() {
        this.getUser();
        // this.onWechatLogin();
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
</style>
