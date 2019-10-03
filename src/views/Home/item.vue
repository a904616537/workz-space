<template>
	<div class="card">
		<div class="card-title">
			<div class="card-logo">
				<div class="logo-style" :style="'background-image: url('+logo+')'"></div>
			</div>
			<div class="card-infor">
				<div class="infor-title">{{data.name}}</div>
				<div><i class="el-icon-location icon-style"></i>{{data.address_en}}</div>
			</div>
		</div>
		<div class="card-img" :style="'background-image: url('+img+')'"></div>
		<div class="card-content">
			<div class="icon-box">
				<div>
					<i class="el-icon-star-off icon-style"></i>
					<i class="el-icon-position icon-style"></i>
				</div>
				<div class="ribbon"></div>
			</div>
			<div class="focus">
				<div class="img-style">
					<div class="img-item" style="background-image: url('../static/imgs/user.jpg')"></div>
					<div class="img-item" style="background-image: url('../static/imgs/user.jpg')"></div>
					<div class="img-item" style="background-image: url('../static/imgs/user.jpg')"></div>
				</div>
				<div class="text-style">liked by <strong>Fann Wong</strong> and <strong>1,520</strong> others.</div>
			</div>
			<div class="dialog">
				<div class="head-img" style="background-image: url('../static/imgs/user.jpg')"></div>
				<el-input v-model="input" placeholder="Write Your Comment"></el-input>
				<span>Post</span>
			</div>
			<div class="comment">
				<div class="comment-title">
					<span class="title-style"><strong>Pierre png</strong></span>
					<span>3 days ago</span>
				</div>
				<div class="comment-style">
					Lorem ipsum dolor sit ament, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <span class="more-style"><strong>More...</strong></span>
				</div>	
				<div class="views"><strong>View all 222 Comments</strong></div>
			</div>
		</div>
	</div>
</template>

<script>

	export default{
		name : 'home-item',
		data() {
			return {
				input : '',
			}
		},
		props : {
			data : {
				type    : Object,
				default : () => ({
					photos : []
				})
			}
		},
		computed : {
			img : function () {
				if (this.data.photos.length > 0) {
					return this.data.photos[0];
				}else return '../static/imgs/house.jpg';
			},
			logo : function() {
				if (this.data.logo == '') {
					return '../static/imgs/logo.jpg';
				}else return data.logo
			}
		},
		methods: {
		},
		beforeMount() {
		}
	}
</script>

<style lang="scss">
</style>
