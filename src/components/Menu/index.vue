<template>
	<div class="footer-menu">
		<div v-for="(item, index) in tabs" :key="index" class="select" :class="{'active' : index == current}">
				<i v-if="index == current" class="point"></i>
				<div v-if="item.click">
					<el-popover
					  placement="top"
					  width="50"
					  trigger="click"
					  popper-class="popper-class">
					  <p class="item" @click="() => toPage(index, '/contact')">{{$t('menu.contact')}}</p>
					  <p class="item" @click="() => toPage(index, '/testimonials')">{{$t('menu.testimonials')}}</p>

					  <div class="select" slot="reference">
							<img :src="current == index?item.selectedIconPath:item.iconPath" class="icon-style">
							<span><strong>{{item.text}}</strong></span>
					  </div>
					</el-popover>
        		</div>
        		<div v-else class="select" @click="() => toPath(index, item)">
        			<el-badge :hidden="!item.badge" :value="item.badge">
        				<img :src="current == index?item.selectedIconPath:item.iconPath" class="icon-style">
        			</el-badge>
        			<span><strong>{{item.text}}</strong></span>
        		</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	import {Message}  from 'element-ui';
	export default{
		name : 'footer-menu',
		data() {
			return {
			}
		},
		methods: {
			toPage(index, path) {
				this.$store.dispatch('user/setCurrent', index)
				this.$router.push({path})
			},
			toPath(index, item) {
				if(item.islogin && !this.user._id) {
					Message({
						message : '请先关注并登录 WorkzSpace',
						type    : 'error',
						onClose : () => {
							window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdee0075c3e078ae1&redirect_uri=http%3A%2F%2Fwechat.workzspace.cn/&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
						}
					})
				} else {
					this.$store.dispatch('user/setCurrent', index)
					this.$router.push({path : item.pagePath})
				}
	    	}
		},
		computed : mapState({
			current : state => state.user.current,
			user    : state => state.user.user,
			badge   : state => state.workzspace.user_workz.length,
            tabs() {
	        	return [{
					pagePath         : "/",
					text             : this.$t('menu.home'),
					iconPath         : "/static/imgs/home.png",
					selectedIconPath : "/static/imgs/home_select.png",
					islogin : false
		        },{
					pagePath         : "/profile",
					text             : this.$t('menu.profile'),
					iconPath         : "/static/imgs/user.png",
					selectedIconPath : "/static/imgs/user_select.png",
					islogin : true
		        },{
					pagePath         : "/wishlist",
					text             : this.$t('menu.wishlist'),
					iconPath         : "/static/imgs/tag.png",
					selectedIconPath : "/static/imgs/tag_select.png",
					islogin : true,
					badge            : this.badge
		        },{
		            pagePath         : "/contact",
		            text             : this.$t('menu.more'),
		            iconPath         : "/static/imgs/more.png",
		            selectedIconPath : "/static/imgs/more_select.png",
					islogin : false,
					click : true
		        }];
	        }
        }),
		created() {
	        document.title = 'Workz Space';
	    }
	}
</script>

<style lang="scss">
	.footer-menu{
		background-color : #fff;
		position         : fixed;
		bottom           : 0;
		left             : 0;
		right            : 0;
		display          : flex;
		justify-content  : space-around;
		font-size        : 12px;
		color            : #9eabb2;
		border-top-left-radius: 30px;
		border-top-right-radius: 30px;
		max-width: 720px;
		margin-left: auto;
		margin-right: auto;
		.point {
			width: 4px;
			height: 4px;
			border-radius: 50%;
			background-color: #00aeef;
			margin-bottom: 5px;
		}
		.select {
			flex : 1;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			flex-direction: column;
			z-index: 99999;
		}
		.icon-style{
			width: 25px;
    		height: 25px;
			display       : block;
		}
		.active{
			color: #00aeef;
			.icon-style{
			}
		}
		
	}
	.el-popper {
		.item {
			padding: 10px 0;
			text-align: center;
		}
	}

	.popper-class {
		width: 120px !important;
	}
</style>