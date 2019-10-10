<template>
	<div class="footer-menu">
		<div v-for="(item, index) in tabs" :key="index" class="select" :class="{'active' : index == current}" @click="current = index">
				<i v-if="index == current" class="point"></i>
        		<img :src="current == index?item.selectedIconPath:item.iconPath" class="icon-style">
        		<span><strong>{{item.text}}</strong></span>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'footer-menu',
		data() {
			return {
				current : 0
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
					iconPath         : "/static/imgs/home.png",
					selectedIconPath : "/static/imgs/home_select.png"
		        },{
					pagePath         : "profile",
					text             : "Profile",
					iconPath         : "/static/imgs/user.png",
					selectedIconPath : "/static/imgs/user_select.png"
		        },{
					pagePath         : "wishlist",
					text             : "Wishlist",
					iconPath         : "/static/imgs/wishlist.png",
					selectedIconPath : "/static/imgs/wishlist_select.png",
					// badge            : this.badge
		        },{
		            pagePath         : "more",
		            text             : "More",
		            iconPath         : "/static/imgs/more.png",
		            selectedIconPath : "/static/imgs/more_select.png"
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