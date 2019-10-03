<template>
	<div class="footer-menu">
		<div v-for="(item, index) in tabs" :key="index" :class="{'active' : index == 0}">
			<div class="select">
        		<!-- <img :src="current == index?item.selectedIconPath:item.iconPath"> -->
        		<i class="el-icon-house icon-style"></i>
        		<span><strong>{{item.text}}</strong></span>
        	</div>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'footer-menu',
		data() {
			return {

			}
		},
		methods: {
			toPath(index, path) {
	            // this.setCurrent(index)
	    		this.$router.push({path})
	    	}
		},
		computed: {
			tabs() {
	        	return [{
		            pagePath         : "/",
		            text             : "Home",
		            // iconPath         : "/img/warehouse_def.png",
		            // selectedIconPath : "/img/warehouse.png"
		        },{
		            pagePath         : "profile",
		            text             : "Profile",
		            // iconPath         : "/img/home_def.png",
		            // selectedIconPath : "/img/home.png"
		        },{
					pagePath         : "wishlist",
					text             : "Wishlist",
					// iconPath         : "/img/cart_def.png",
					// selectedIconPath : "/img/cart.png",
					// badge            : this.badge
		        },{
		            pagePath         : "more",
		            text             : "More",
		            // iconPath         : "/img/me_def.png",
		            // selectedIconPath : "/img/me.png"
		        }];
	        }
		},
		created() {
	        document.title = 'Workz Space';
	    }
	}
</script>

<style lang="scss">
	.footer-menu{
		background-color : #fff;
		padding          : 10px 0;
		position         : fixed;
		bottom           : 0;
		left             : 0;
		right            : 0;
		display          : flex;
		justify-content  : space-around;
		font-size        : 12px;
		color            : #9eabb2;
		.icon-style{
			font-size     : 30px;
			display       : block;
			margin-bottom : 5px;
		}
		.active{
			color: #00aeef;
		}
	}
</style>