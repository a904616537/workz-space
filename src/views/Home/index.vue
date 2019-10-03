<template>
	<div class="home">
		<div class="banner" style="background-image: url('../static/imgs/banner.jpg')">
			<!-- <div class="logo"></div> -->
			<el-dropdown class="dropdown-position">
				<el-button type="primary" >
				    Place Name<i class="el-icon-caret-bottom"></i>
				</el-button>
				<!-- <el-dropdown-menu slot="dropdown">
					<el-dropdown-item>Place Name One</el-dropdown-item>
					<el-dropdown-item>Place Name Two</el-dropdown-item>
					<el-dropdown-item>Place Name Three</el-dropdown-item>
				</el-dropdown-menu> -->
			</el-dropdown>
		</div>
		<div class="card">
			<div class="card-title">
				<div class="card-logo">
					<div class="logo-style" style="background-image: url('../static/imgs/logo.jpg')"></div>
				</div>
				<div class="card-infor">
					<div class="infor-title">Fltted Offices</div>
					<div><i class="el-icon-location icon-style"></i>CBD Singapore</div>
				</div>
			</div>
			<div class="card-img" style="background-image: url('../static/imgs/house.jpg')"></div>
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

		<v-menu />
	</div>
</template>

<script>
	import Vue from 'vue';

	export default{
		name : 'home',
		data() {
			return {
				input : '',
			}
		},
		methods: {
        	
		}
	}
</script>

<style lang="scss">
	.img-style{
		position : absolute;
		left     : 15px;
		top      : -10px;
		.img-item{
			width               : 32px;
			height              : 32px;
			background-color    : #f4f4f4;
			background-position : center;
			background-size     : cover;
			border-radius       : 20px;
			border              : 3px solid #fff;
			float               : right;
			margin-left         : -17px;
		}
	}
</style>
