<template>
	<div class="home">
		<div class="banner" style="background-image: url('../static/imgs/banner.jpg')">
			<!-- <div class="logo"></div> -->
			<el-dropdown class="dropdown-position">
				<el-button type="primary" >
				    Place Name<i class="el-icon-caret-bottom"></i>
				</el-button>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>Place Name One</el-dropdown-item>
					<el-dropdown-item>Place Name Two</el-dropdown-item>
					<el-dropdown-item>Place Name Three</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<v-item v-for="(item, index) in workspaces" :key="index" :data="item"/>
	</div>
</template>

<script>
	import Vue         from 'vue';
	import {workspace} from '../../api';
	import Item        from './item';
	import { mapState, mapActions } from 'vuex'

	export default{
		name : 'home',
		data() {
			return {
				input : '',
			}
		},
		components : {
			'v-item' : Item
		},
		computed : mapState({
			workspaces : state => state.workzspace.workzs
		}),
		methods: {
        	getData() {
        		workspace()
        		.then(workspace => {
        			this.$store.dispatch('workzspace/setWorkz', workspace)
        		})
        		.catch(err => {
        			console.log('err', err);
        		})
        	}	
		},
		beforeMount() {
			this.getData();
		}
	}
</script>

<style lang="scss">
	.img-style{
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
	.vjs-custom-skin > .video-js {
		width: 100%;
	}
	.video-js .vjs-big-play-button {
		top: auto !important;
		bottom : 30px !important;
		left: 10px !important;
	}
</style>
