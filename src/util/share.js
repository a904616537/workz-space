/**
* FileType js
* Sample React Redux 
* @Author: Kain·Shi <a904616537@outlook.com>
* @DateTime:    2019-05-08 22:58:15
* @Description
* @Flow 
*/

import {getconfig} from '../api';
export default {
	computed: {
    },
	methods: {
		getConfig() {

            getconfig()
            .then(result => {
                const config = result.data;
                wx.config(config);

                wx.ready(() => {

                    wx.onMenuShareAppMessage({
                        title   : 'Workz Space', // 分享标题
                        desc    : 'Workz Soace Desc', // 分享描述
                        link    : `http://wechat.workzspace.cn`,
                        imgUrl  : 'http://wechat.workzspace.cn/static/imgs/logo.png',
                        success : () => {
                            this.$toast.center('分享成功！');
                        }
                    });
                    wx.onMenuShareTimeline({
                        title   : 'Workz Space', // 分享标题
                        desc    : 'Workz Soace Desc', // 分享描述
                        link    : `http://wechat.workzspace.cn`,
                        imgUrl  : 'http://wechat.workzspace.cn/static/imgs/logo.png',
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
	},
	created() {
		this.getConfig();
    }
}