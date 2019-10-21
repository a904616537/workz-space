<template>
	<div>
		<router-view/>
		<v-menu />
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import {getuser, getcode} from '../api';
import { Message } from 'element-ui';

export default {
    name    : 'BottomBar',
    methods : {
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
                console.log('user', user)
                if(user) {
                    this.$store.dispatch('user/login', user);
                    const workspace_id = this.getUrlParam('state');
                    if(workspace_id != '123') this.$router.push({ path: 'workspace', query : {_id : workspace_id}})
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
        // this.getUser()
        this.onInit(); 
    }
}
</script>

<style lang="scss">
</style>
