<template>
	<div class="card">
		<div class="card-title" @click="toWorkspace">
			<div class="card-logo">
				<div class="logo-style" :style="'background-image: url('+logo+')'"></div>
			</div>
			<div class="card-infor">
				<div class="infor-title">{{data.name}}</div>
				<div><i class="el-icon-location icon-style"></i>{{data.address_en}}</div>
			</div>
		</div>
		<div class="card-img" :style="'background-image: url('+img+')'">
			<video-player
				class="vjs-custom-skin"
				ref="videoPlayer"
				:options="playerOptions"
				:playsinline="true"
				customEventName="changed">
          	</video-player>
		</div>
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
				<span @click="submit">Post</span>
			</div>
			<div class="comment" v-if="comment">
				<div class="comment-title">
					<span class="title-style"><strong>{{comment.name}}</strong></span>
					<span>{{fromNow(comment.createTime)}}</span>
				</div>
				<div class="comment-style" @click="toWorkspace">{{comment.text}}<span class="more-style"><strong>More...</strong></span>
				</div>	
				<div class="views" @click="toWorkspace"><strong>View all {{commentCount}} Comments</strong></div>
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment';
import {submitComment} from '../../api';
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
			commentCount : function() {
				if(!this.data.comments) return 0;
				if(this.data.comments.length > 0) return this.data.comments.length + 1;
				else if(this.comment) return 1;
				else return 0;
			},
			comment : function() {
				if(!this.data.comments) return null;
				return this.data.comments.pop();
			},
			player : function() {
				return this.$refs.videoPlayer.player
			},
			img : function () {
				if (this.data.photos.length > 0) {
					return this.data.photos[0];
				}else return '../static/imgs/house.jpg';
			},
			logo : function() {
				if (this.data.provider && this.data.provider.avatar == '') {
					return '../static/imgs/logo.jpg';
				}else return this.data.provider.avatar
			},
			playerOptions: function() {
				return {
					height: '340',
					autoplay: false,
					aspectRatio : '16:9',
					sources: [{
						type: 'video/mp4',
						src: this.data.video,
						// type: 'video/x-flv',
      //       			src: 'http://fms.cntv.lxdns.com/live/flv/channel96.flv'
					}],
					language: 'zh-CN',
					poster: this.img
				}
			}
		},
		methods: {
			fromNow(date) {
				return moment(date).fromNow();
			},
			toWorkspace() {
        		this.$router.push({ path: 'workspace', query : {_id : this.data._id}})
        	},
			submit() {
				const model = {
					_id : this.data._id,
					comment : {
						name   : 'Anonymous',
						avatar : 'http://store.workspace.h-fish.vip/static/imgs/user.jpg',
						text   : this.input
					}
				};
				submitComment(model)
				.then(result => {
					console.log('result', result);
					this.input = '';
					if(!this.data.comments) this.data.comments = [];
					this.data.comments.push(model.comment)
				})
				.catch(err => {})
			}
		},
		beforeMount() {
		}
	}
</script>

<style lang="scss">

</style>
