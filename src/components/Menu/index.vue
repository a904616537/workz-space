<template>
	<div class="footer-menu">
		<div v-for="(item, index) in tabs" :key="index" class="select" :class="{'active' : index == current}">
				<i v-if="index == current" class="point"></i>
				<div v-if="item.click">
					<el-popover
					  placement="top"
					  width="50"
					  trigger="click">
					  <p @click="() => toPage(index, '/contact')">Contact Us</p>
					  <p @click="() => toPage(index, '/testimonials')">Testimonials</p>
					  <div class="select" slot="reference">
							<img :src="current == index?item.selectedIconPath:item.iconPath" class="icon-style">
							<span><strong>{{item.text}}</strong></span>
					  </div>
					</el-popover>
        		
        		</div>
        		<div v-else class="select" @click="() => toPath(index, item)">
        			<img :src="current == index?item.selectedIconPath:item.iconPath" class="icon-style">
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
					Message.error('请先关注 WorkzSpace 公众号')
				} else {
					this.$store.dispatch('user/setCurrent', index)
					this.$router.push({path : item.pagePath})
				}
	    	}
		},
		computed : mapState({
			current : state => state.user.current,
			user    : state => state.user.user,
            tabs() {
	        	return [{
					pagePath         : "/",
					text             : "Home",
					iconPath         : "/static/imgs/home.png",
					selectedIconPath : "/static/imgs/home_select.png",
					islogin : false
		        },{
					pagePath         : "/profile",
					text             : "Profile",
					iconPath         : "/static/imgs/user.png",
					selectedIconPath : "/static/imgs/user_select.png",
					islogin : true
		        },{
					pagePath         : "/wishlist",
					text             : "Wishlist",
					iconPath         : "/static/imgs/tag.png",
					selectedIconPath : "/static/imgs/tag_select.png",
					islogin : true
					// badge            : this.badge
		        },{
		            pagePath         : "/contact",
		            text             : "More",
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
</style>